import React from 'react';
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";

import Select from 'react-select';

@inject('rootStore')
@observer
class Picker extends React.Component {
    handleChange = selectedPreset => {
        this.props.rootStore.levelStore.changeTierSet(selectedPreset.value);
    };

    render() {
        const options = Object.keys(this.props.rootStore.levelStore.tierPresets).map(val=>{
            return {value:val, label:val};
        });
        const selectedOption = {value:this.props.rootStore.levelStore.chosenTierSet, label: this.props.rootStore.levelStore.chosenTierSetName};

        return (
            <div className="leveltier-picker__selectbox">
                Results framework template
                <Select
                    options={options}
                    value={selectedOption}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

class LevelTier extends React.Component {

    render() {
        return (
            <div className="leveltier"> {this.props.tierName} </div>
    )}
}

@inject('rootStore')
@observer
class LevelTierList extends React.Component{

    render() {
        let apply_button = null
        if (this.props.rootStore.levelStore.levels.length == 0) {
            apply_button =
                <button
                    className="leveltier-button"
                    onClick={this.props.rootStore.levelStore.createFirstLevel}>
                    Apply
                </button>
        }

        return (
            <React.Fragment>
                <div id="leveltier-list" className="leveltier-list">
                    {
                        this.props.rootStore.levelStore.tierList.length > 0 ?
                            this.props.rootStore.levelStore.tierList.map((tier, index) => {
                                return <LevelTier key={index} tierName={tier}/>
                            })
                            : null
                    }


                </div>
                {apply_button}
            </React.Fragment>
        )
    }
}

export const LevelTierPicker = observer(function (props) {

    return (
        <div id="leveltier-picker" className="leveltier-picker">
            <Picker />
            <LevelTierList />
        </div>
    )
});
