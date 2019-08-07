import React from 'react';
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";

import Select from 'react-select';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import { DeleteButton } from "../../../components/actionButtons";



class StaticLevelTier extends React.Component {

    render() {
        return (
            <div className={'leveltier leveltier--level-' + this.props.tierLevel}>{this.props.tierName} </div>
    )}
}

@inject('rootStore')
@observer
export class StaticLevelTierList extends React.Component{

    render() {
        let apply_button = null;
        if (this.props.rootStore.levelStore.levels.length == 0) {
            apply_button =
                <div className="leveltier-list__actions">
                    <button
                        className="leveltier-button btn btn-primary btn-block"
                        onClick={this.props.rootStore.levelStore.createFirstLevel}>
                        {/* #Translators: this refers to an imperative verb on a button ("Apply filters")*/}
                        {gettext("Apply")}
                    </button>
                </div>
        }

        let settings_button = null;
        if (this.props.rootStore.levelStore.chosenTierSetKey == this.props.rootStore.levelStore.customTierSetKey &&
            this.props.rootStore.levelStore.useStaticTierList) {
            const style = {backgroundColor: "white", width: "100%", alignItems: "flex-end", textAlign: "right"}
            settings_button =
                <button
                        style={style}
                        className="btn btn-link leveltier-list"
                        onClick={this.props.rootStore.levelStore.editTierSet}>
                        {/* #Translators: this refers to an imperative verb on a button ("Apply filters")*/}
                        <i className="fa fa-cog" />
                    {gettext("Settings")}
                </button>

        }

        return (
            <React.Fragment>
                <div id="leveltier-list" className="leveltier-list">
                    {
                        this.props.rootStore.levelStore.chosenTierSet.length > 0 ?
                            this.props.rootStore.levelStore.chosenTierSet.map((tier, index) => {
                                return <StaticLevelTier key={index} tierLevel={index} tierName={tier}/>
                            })
                            : null
                    }

                </div>
                {settings_button}
                {apply_button}



            </React.Fragment>
        )
    }
}

class EditableLevelTier extends React.Component {

    render() {
        const divStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: ".5rem"
        };
        const labelStyle = {
            marginBottom: ".25rem"
        };

        let deleteButton = null;
        if (this.props.showDeleteButton){
            deleteButton =
                <DeleteButton
                    buttonClasses='p-0'
                    type="button"
                    action={(event) => this.props.deleteFunc(event)}/>
        }

        let lockButton = null;
        const lockStyle = {color: "gray"};
        if (this.props.showLockButton){
            lockButton =
                <button
                    type="button"
                    className="btn btn-small p-0"
                    data-toggle="popover"
                    data-trigger="focus"
                    data-placement="bottom"
                    // data-html="true"
                    /* # Translators: This is the help text of an icon that indicates that this element can't be deleted */
                    data-content={gettext("This level is being used in the results framework")}
                >
                    <i style={lockStyle} className='fa fa-lock' />
                </button>
        }

        return (
            <React.Fragment>
                <div>
                    <label style={labelStyle}>
                        {
                            /* # Translators: This is one of several user modifiable fields, e.g. "Level 1", "Level 2", etc... Level 1 is the top of the hierarch, Level six is the bottom.*/
                             interpolate(gettext("Level %s"), [this.props.tierOrder + 1])
                        }
                    </label>
                </div>
                <div style={divStyle}>
                    <input
                        style={{width: "85%", paddingLeft: "5px", paddingRight: "5px"}}
                        type="text"
                        maxLength={75}
                        data-tierorder={this.props.tierOrder}
                        value={this.props.tierName}
                        onChange={this.props.updateAction}
                        onBlur={this.props.blurAction} />
                    {deleteButton}
                    {lockButton}
                </div>
                <span style={{display:"block", marginBottom: ".75rem"}} className='has-error'>{this.props.errorMsg}</span>
            </React.Fragment>
    )}
}


@inject('rootStore')
@observer
export class EditableLevelTierList extends React.Component{

    componentDidMount() {
        // Enable popovers after update (they break otherwise)
        $('*[data-toggle="popover"]').popover({
            html: true
        });
    }
    render() {

        const customKey = this.props.rootStore.levelStore.customTierSetKey;
        console.log('custom iin rdner', this.props.rootStore.levelStore.tierTemplates[customKey]['tiers'])
        const savedTiers  = this.props.rootStore.levelStore.chosenTierSet.map((tier, index) => {
            console.log('errors', this.props.rootStore.uiStore.customFormErrors.errors[index])
            const errorObj = this.props.rootStore.uiStore.customFormErrors.errors[index];
            const errorMsg = errorObj && errorObj.hasError ? errorObj.msg : null;
            const showLockButton = !this.props.rootStore.levelStore.tierIsDeletable(index+1);
            // console.log('dleetthis.props.rootStore.levelStore.chosenTierSet.length === 1 && tier.length === 0)
            const showDeleteButton =
                index === this.props.rootStore.levelStore.chosenTierSet.length - 1 &&
                !showLockButton &&
                !(this.props.rootStore.levelStore.chosenTierSet.length === 1 && tier.length === 0);
            return <EditableLevelTier
                key={index}
                tierName={tier}
                showDeleteButton={showDeleteButton}
                showLockButton={showLockButton}
                deleteFunc={this.props.rootStore.levelStore.deleteCustomTier}
                tierOrder={index}
                errorMsg={errorMsg}
                updateAction={this.props.rootStore.levelStore.updateCustomTier}
                blurAction={this.props.rootStore.uiStore.validateCustomTiers}/>
        }) || null;
        // console.log('slick slice1', this.props.rootStore.levelStore.chosenTierSet.slice(-1))
        let isAddTierButtonDisabled =
            !this.props.rootStore.levelStore.tierTemplates[customKey]['tiers'].every( tierName => tierName.length > 0);
        const addTierButton = savedTiers.length > 5 ? null :
            <button
                type="button"
                className="btn btn-link btn-add"
                disabled={isAddTierButtonDisabled}
                onClick={this.props.rootStore.levelStore.addCustomTier}>
                <i className="fa fa-plus-circle" />Add level
            </button>;

        const apply_button =
            <div className="leveltier-list__actions">
                <button
                    className="leveltier-button btn btn-primary btn-block"
                    disabled={isAddTierButtonDisabled}
                    onClick={this.props.rootStore.levelStore.applyTierSet}>
                    {/* #Translators: this refers to an imperative verb on a button ("Apply filters")*/}
                    {gettext("Apply")}
                </button>
            </div>


        return (
            <form>
                <div id="leveltier-list" className="leveltier-list">
                    <div className="form-group">
                        {savedTiers}
                    </div>
                    {addTierButton}
                    {/*{newTier}*/}
                </div>
                {apply_button}

            </form>
        )
    }
}

const ChangeLogLink = ({programId}) => {
    const url = `/tola_management/audit_log/${programId}/`;

    return <div className="leveltier-picker__change-log-link-box">
        <a href={url} className="btn-link">
            <i className="fas fa-history" /> {gettext('Change log')}
        </a>
    </div>
}

export const LevelTierPicker = inject("rootStore")(observer(function (props) {
    let tierListType = <StaticLevelTierList />;
    if (this.props.rootStore.levelStore.chosenTierSetKey == this.props.rootStore.levelStore.customTierSetKey){
        tierListType = <EditableLevelTierList />;
    }

    return (
        <div id="leveltier-picker" className="leveltier-picker">
            <div className="leveltier-picker__panel">
                <Picker />
                <StaticLevelTierList />
            </div>

            <ChangeLogLink programId={props.rootStore.levelStore.program_id} />
        </div>
        /*<div id="alerts2" style={{minHeight:"50px", minWidth:"50px", backgroundColor:"red"}}></div>*/

    )
}));
