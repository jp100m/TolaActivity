// Run the app's SCSS through webpack
import '@babel/polyfill'
import '../scss/tola.scss';
import 'react-virtualized/styles.css'


/*
 * Moved legacy app.js code here - Contains global functions called by template code
 * along with global setup to be performed on every page
 *
 * If you decide to add a new function to this grab bag, and want to call it from Django
 * template code, make sure to add it to the `window` obj to make it globally accessible
 */



/*
 * Global AJAX handlers for indicating a request in progress + error reporting
 */
$( document )
    .ajaxStart( function() {
        $('#ajaxloading').show();
    })
    .ajaxStop( function() {
        $('#ajaxloading').hide();
    })
    .ajaxError(function( event, jqxhr, settings, thrownError ) {
        if (settings.suppressErrors === true) {
            //do nothing
        } else {
            if (jqxhr.readyState === 4) {
                // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
                // TODO: Give better error mssages based on HTTP status code
                let errorStr = `${jqxhr.status}: ${jqxhr.statusText}`;
                notifyError(js_context.strings.serverError, errorStr);
            }
            else if (jqxhr.readyState === 0) {
                // Network error (i.e. connection refused, access denied due to CORS, etc.)
                notifyError(js_context.strings.networkError, js_context.strings.networkErrorTryAgain);
            }
            else {
                // something weird is happening
                notifyError(js_context.strings.unknownNetworkError, jqxhr.statusText);
            }
        }
    });

if (!Date.prototype.toISODate) {
  Date.prototype.toISODate = function() {
    return this.getFullYear() + '-' +
           ('0'+ (this.getMonth()+1)).slice(-2) + '-' +
           ('0'+ this.getDate()).slice(-2);
  }
}


function zeroPad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(0) + n;
}

function isDate(dateVal) {
    /*
    var pattern = /^(\d{4})-(\d{2})-(\d{2})$/;
    var dateArray = dateVal.match(pattern);
    if (dateArray == null) return false;

    var currentYear = (new Date).getFullYear();
    var year = dateArray[1];
    var month = dateArray[2];
    var day = dateArray[3];
    if (year < 2010 || year > (currentYear+3)) return false;
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    return new Date(dateVal) === 'Invalid Date' ? false : true;
    */
    var date = new Date(dateVal);
    if (date == 'Invalid Date') {
        return false;
    }
    var currentYear = (new Date).getFullYear();
    if (date.getFullYear() > currentYear + 100 || date.getFullYear() < 1980 ) {
        return false;
    }
    return true;
}
window.isDate = isDate;

function formatDate(dateString, day=0) {
    // Returns an ISO formatted naive datestring
    // Use only to sanitize simplified date strings e.g. for hidden fields or data attributes
    // If you’re trying to format a date[string] for user display, you probably want something else
    if (dateString == null || dateString == undefined || dateString.length == 0 || dateString == 'undefined' || dateString == 'null' ) {
        return '';
    }
    try {
        var dateval = new Date(dateString);
        var tz = dateval.getTimezoneOffset();
        var hrs = dateval.getHours();
        if (hrs > 0) {
            // alert("offsetting timezone tz=" + tz + " hrs = " + hrs);
            dateval.setMinutes(dateval.getMinutes() + tz);
        }
        var year = dateval.getFullYear()
        var month = zeroPad((dateval.getMonth() + 1), 2);
        var paddedDay = zeroPad((day == 0 ? dateval.getDate() : day), 2);
        var ret = year + '-' + month + '-' + paddedDay
        return ret;
    } catch (err) {
        console.log(err);
        try {
            var dateArray = dateString.split('-');
            var year = dateArray[0];
            var month = zeroPad(parseInt(dateArray[1]), 2);
            var paddedDay = zeroPad((day == 0 ? dateArray[2] : day), 2);
            var ret = year + '-' + month + '-' + paddedDay
            return ret
        }
        catch (err) {
            return dateString == (null ? '' : dateString);
        }
    }
}
window.formatDate = formatDate;

// "2017-01-01" -> Date with local timezone (not UTC)
function localDateFromISOStr(dateStr) {
    let dateInts = dateStr.split('-').map(function(x) {return parseInt(x)});
    return new Date(dateInts[0], dateInts[1]-1, dateInts[2]);
}
window.localDateFromISOStr = localDateFromISOStr;

// Return Date() with local timezone at midnight
function localdate() {
    let today = new Date();
    today.setHours(0,0,0,0);
    return today;
}
window.localdate = localdate;

const n = "numeric",
    s = "short",
    l = "long",
    d2 = "2-digit";


const DATE_MED = {
    year: n,
    month: s,
    day: n
};

// Date() -> "Oct 2, 2018" (localized)
// JS equiv of the Django template filter:   |date:"MEDIUM_DATE_FORMAT"
function mediumDateFormatStr(date) {
    const languageCode = window.userLang; // set in base.html by Django
    return new Intl.DateTimeFormat(languageCode, DATE_MED).format(date);
}
window.mediumDateFormatStr = mediumDateFormatStr;


$(function() {
     // Javascript to enable link to tab
    var hash = document.location.hash;
    if (hash) {
        $('.nav-tabs a[href="'+hash+'"]').tab('show');
    }

    // Change hash for page-reload
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
    window.location.hash = e.target.hash;
    });

    // Enable popovers
    $('[data-toggle="popover"]').popover({
        html: true
    })
    $('[data-toggle="popover"]').on('click', function(e){
        e.preventDefault();
    });
});



//App specific JavaScript
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//custom jquery to trigger date picker, info pop-over and print category text
$(document).ready(function() {
    $('.datepicker').datepicker({ dateFormat: "yy-mm-dd" });
});


/*
 * Create and show a Bootstrap alert.
 */
function createAlert (type, message, fade, whereToAppend) {
    if (whereToAppend == undefined ){
        whereToAppend = "#messages";
    }
    $(whereToAppend).append(
        $(
            "<div class='alert alert-" + type + " dynamic-alert alert-dismissable' style='margin-top:0;'>" +
            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" +
            "<p>" + message + "</p>" +
            "</div>"
        )
    );
    if (fade == true) {
        // Remove the alert after 5 seconds if the user does not close it.
        $(".dynamic-alert").delay(5000).fadeOut("slow", function () { $(this).remove(); });
    }
}
window.createAlert = createAlert;


// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

/*
 * Set the csrf header before sending the actual ajax request
 * while protecting csrf token from being sent to other domains
 */
$.ajaxSetup({
    crossDomain: false, // obviates need for sameOrigin test
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type)) {
            xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
        }
    }
});


/* Configure PNotify global settings */
/* Do so on document ready since lib is included after app.js */
$(function() {
    PNotify.defaults.styling = 'bootstrap4'; // Bootstrap version 4
    PNotify.defaults.icons = 'fontawesome5'; // Font Awesome 5

    // Show close button and hide pin button
    PNotify.modules.Buttons.defaults.closerHover = false;
    PNotify.modules.Buttons.defaults.sticker = false;
});


/* Notifications */

function notifyError(title, msg) {
    PNotify.alert({
        text: msg,
        title: title,
        hide: false,
        type: 'error',
    });
}
window.notifyError = notifyError;


$(document).ready(function() {
    $(document).on('hidden.bs.modal', '.modal', function () {
        $('.modal:visible').length && $(document.body).addClass('modal-open');
    });
});



/*
* Pop-up window for help docs and guidance on forms
*/

function newPopup(url, windowName) {
    return window.open(url,windowName,'height=768,width=1366,left=1200,top=10,titlebar=no,toolbar=no,menubar=no,location=no,directories=no,status=no');
}
window.newPopup = newPopup;

// EXAMPLE: <a onclick="newPopup('https://docs.google.com/document/d/1tDwo3m1ychefNiAMr-8hCZnhEugQlt36AOyUYHlPbVo/edit?usp=sharing','Form Help/Guidance'); return false;" href="#" class="btn btn-sm btn-info">Form Help/Guidance</a>

const DEFAULT_DESTRUCTIVE_MESSAGE = gettext("Your changes will be recorded in an audit log. Please record your rationale for future reference.")
const DEFAULT_NONDESTRUCTIVE_MESSAGE = gettext('Your changes will be recorded in an audit log. Please record your rationale for future reference.')

const create_changeset_notice = ({
    message_text = DEFAULT_NONDESTRUCTIVE_MESSAGE,
    on_submit = () => {},
    on_cancel = () => {},
    confirm_text = 'Ok',
    cancel_text = 'Cancel',
    type = 'notice',
    inner = '',
    context = null
} = {}) => {
    var notice = PNotify.alert({
        text: $(`<div><form action="" method="post" class="form container">${inner}</form></div>`).html(),
        textTrusted: true,
        icon: false,
        width: '350px',
        hide: false,
        type: type,
        addClass: 'program-page__rationale-form',
        stack: {
            'overlayClose': true,
            'dir1': 'right',
            'dir2': 'up',
            'firstpos1': 0,
            'firstpos2': 0,
            'context': context
        },
        modules: {
            Buttons: {
                closer: false,
                sticker: false
            },
            Confirm: {
                confirm: true,
                buttons: [
                    {
                        text: confirm_text,
                        primary: true,
                        addClass:(type == 'error')?'btn-danger':'',
                        click: function (notice) {
                            var close = true;
                            var textarea = $(notice.refs.elem).find('textarea[name="rationale"]')
                            var rationale = textarea.val();
                            textarea.parent().find('.invalid-feedback').remove();
                            if(!rationale) {
                                textarea.addClass('is-invalid');
                                textarea.parent().append(`
                                    <div class="invalid-feedback">
                                        Results have been recorded. Rationale is required.
                                    </div>
                                `);
                                return false;
                            } else {
                                textarea.removeClass('is-invalid');
                            }
                            if(on_submit) {
                                close = on_submit(rationale);
                                if(close === undefined) {
                                    close = true;
                                }
                            }
                            if(close) {
                                notice.close();
                            }
                        }
                    },
                    {
                        text: cancel_text,
                        click: function (notice) {
                            close = on_cancel()
                            if(close === undefined) {
                                close = true;
                            }

                            if(close) {
                                notice.close();
                            }
                        }
                    }
                ]
            }
        }
    })
}

window.create_destructive_changeset_notice = ({
    message_text = DEFAULT_DESTRUCTIVE_MESSAGE,
    on_submit = () => {},
    on_cancel = () => {},
    is_indicator = false,
    confirm_text = 'Ok',
    cancel_text = 'Cancel',
    context = null,
    no_preamble = false
} = {}) => {
    if(!message_text) {message_text = DEFAULT_DESTRUCTIVE_MESSAGE}
    const preamble = (no_preamble)?'':`<span class='text-danger'>${gettext("This action cannot be undone.")}</span>`
    const inner = `
        <div class="row">
            <div class="col">
                <h2 class="text-danger">${gettext("Warning")}</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                ${preamble}
                ${message_text}
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <textarea class="form-control" name="rationale"></textarea>
                </div>
            </div>
        </div>
    `;
    return create_changeset_notice({
        message_text: message_text,
        on_submit: on_submit,
        on_cancel: on_cancel,
        is_indicator: is_indicator,
        confirm_text: confirm_text,
        cancel_text: cancel_text,
        type: 'error',
        inner: inner,
        context: context
    })
}

window.create_nondestructive_changeset_notice = ({
    message_text = DEFAULT_NONDESTRUCTIVE_MESSAGE,
    on_submit = () => {},
    on_cancel = () => {},
    is_indicator = false,
    confirm_text = 'Ok',
    cancel_text = 'Cancel',
    context = null
} = {}) => {
    if(!message_text) {message_text = DEFAULT_NONDESTRUCTIVE_MESSAGE}
    const inner = `
        <div class="row">
            <div class="col">
                <h2>${gettext("Share Your Rationale")}</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                ${message_text}
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <textarea class="form-control" name="rationale"></textarea>
                </div>
            </div>
        </div>
    `;
    return create_changeset_notice({
        message_text: message_text,
        on_submit: on_submit,
        on_cancel: on_cancel,
        is_indicator: is_indicator,
        confirm_text: confirm_text,
        cancel_text: cancel_text,
        type: 'notice',
        inner: inner,
        context: context
    })
}