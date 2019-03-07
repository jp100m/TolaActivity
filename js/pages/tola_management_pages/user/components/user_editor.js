import React from 'react'
import { observer } from "mobx-react"

@observer
export default class UserEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active_page: 'profile'
        }
    }

    updateActivePage(new_page) {
        if(!this.props.new) {
            this.setState({active_page: new_page})
        }
    }

    render() {
        const {ProfileSection, ProgramSection, HistorySection} = this.props

        const profile_active_class = (this.state.active_page == 'profile')?'selected':''
        const programs_active_class = (this.state.active_page == 'programs_and_roles')?'selected':''
        const history_active_class = (this.state.active_page == 'status_and_history')?'selected':''
        const new_class = (this.props.new)?'disabled':''

        return (
            <div className="user-editor row">
                <div className="editor__navigation col-sm-3">
                    <ul className="list-group">
                        <li className={`list-group-item ${profile_active_class}`} onClick={() => this.updateActivePage('profile')}>{gettext("Profile")}</li>
                        <li className={`list-group-item ${programs_active_class} ${new_class}`} onClick={() => this.updateActivePage('programs_and_roles')}>{gettext("Programs and Roles")}</li>
                        <li className={`list-group-item ${history_active_class} ${new_class}`} onClick={() => this.updateActivePage('status_and_history')}>{gettext("Status and History")}</li>
                    </ul>
                </div>
                <div className="user-editor__content col-sm-9">
                    {this.state.active_page == 'profile' &&
                    <ProfileSection />
                    }

                    {this.state.active_page == 'programs_and_roles' &&
                    <ProgramSection />
                    }

                    {this.state.active_page == 'status_and_history' &&
                    <HistorySection />
                    }
                </div>
            </div>
        )
    }
}
