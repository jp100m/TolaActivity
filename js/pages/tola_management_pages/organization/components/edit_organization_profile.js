import React from 'react'
import CheckboxedMultiSelect from 'components/checkboxed-multi-select'
import { observer } from "mobx-react"

@observer
export default class EditOrganizationProfile extends React.Component {
    constructor(props) {
        super(props)
        const o = props.organizationData
        const {sectorSelections} = props
        const data = {
            ...o,
            sectors: sectorSelections.filter(sectorOption => o.sectors.includes(sectorOption.value))
        }

        this.state = {
            initial_data: data,
            managed_data: {...data}
        }
    }

    save(e) {
        e.preventDefault()
        this.props.onSave({...this.state.managed_data, sectors: this.state.managed_data.sectors.map(sector => sector.value)})
    }

    saveNew(e) {
        e.preventDefault()
        this.props.onSaveNew({...this.state.managed_data, sectors: this.state.managed_data.sectors.map(sector => sector.value)})
    }

    saveNewAndAddAnother(e) {
        e.preventDefault()
        this.props.onSaveNewAndAddAnother({...this.state.managed_data, sectors: this.state.managed_data.sectors.map(sector => sector.value)})
    }

    resetForm() {
        this.setState({
            managed_data: this.state.initial_data
        })
    }

    updateName(new_name) {
        let new_data = this.state.managed_data
        new_data.name = new_name
        this.setState({
            managed_data: new_data
        })
    }

    updateSectors(new_sectors) {
        let new_data = this.state.managed_data
        new_data.sectors = new_sectors
        this.setState({
            managed_data: new_data
        })
    }

    updatePrimaryAddress(new_address) {
        let new_data = this.state.managed_data
        new_data.primary_address = new_address
        this.setState({
            managed_data: new_data
        })
    }

    updatePrimaryContactName(new_name) {
        let new_data = this.state.managed_data
        new_data.primary_contact_name = new_name
        this.setState({
            managed_data: new_data
        })
    }

    updatePrimaryContactEmail(new_email) {
        let new_data = this.state.managed_data
        new_data.primary_contact_email = new_email
        this.setState({
            managed_data: new_data
        })
    }

    updatePrimaryContactPhone(new_phone) {
        let new_data = this.state.managed_data
        new_data.primary_contact_phone = new_phone
        this.setState({
            managed_data: new_data
        })
    }

    updateModeOfContact(new_mode_of_contact) {
        let new_data = this.state.managed_data
        new_data.mode_of_contact = new_mode_of_contact
        this.setState({
            managed_data: new_data
        })
    }

    render() {
        let od = this.state.managed_data
        let errors = this.props.errors
        let error_classes = {
            name: (errors.name)?'is-invalid':'',
            primary_address: (errors.primary_address)?'is-invalid':'',
            primary_contact_name: (errors.primary_contact_name)?'is-invalid':'',
            primary_contact_email: (errors.primary_contact_email)?'is-invalid':'',
            primary_contact_phone: (errors.primary_contact_phone)?'is-invalid':'',
        }
        return (
            <div className="tab-pane--react">
                <h2 className="no-bold">{od.name ? od.name+": ": ""}{gettext("Profile")}</h2>
                <form className="form needs-validation" noValidate>
                    <div className="form-group">
                        <label htmlFor="organization-name-input">{gettext("Organization name")}<span className="required">*</span></label>
                        <input
                            type="text"
                            value={od.name}
                            onChange={(e) => this.updateName(e.target.value) }
                            className={"form-control "+error_classes.name}
                            id="organization-name-input"
                            required />
                        {errors.name &&
                        <div className="invalid-feedback">
                            {errors.name}
                        </div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="sectors-input">Sectors</label>
                        <CheckboxedMultiSelect
                            value={od.sectors}
                            options={this.props.sectorSelections}
                            onChange={(e) => this.updateSectors(e)}
                            placeholder={gettext("None Selected")}
                            id="sectors-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="primary-address-input">{gettext("Primary Address")}<span className="required">*</span></label>
                        <textarea
                            value={od.primary_address}
                            onChange={(e) => this.updatePrimaryAddress(e.target.value)}
                            className={"form-control "+error_classes.primary_address}
                            id="primary-address-input"
                            required />
                        {errors.primary_address &&
                        <div className="invalid-feedback">
                            {errors.primary_address}
                        </div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="primary-contact-name-input">{gettext("Primary Contact Name")}<span className="required">*</span></label>
                        <input
                            type="text"
                            value={od.primary_contact_name}
                            onChange={(e) => this.updatePrimaryContactName(e.target.value) }
                            className={"form-control "+error_classes.primary_contact_name}
                            id="primary-contact-name-input"
                            required />
                        {errors.primary_contact_name &&
                        <div className="invalid-feedback">
                            {errors.primary_contact_name}
                        </div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="primary-contact-email-input">{gettext("Primary Contact Email")}<span className="required">*</span></label>
                        <input
                            type="text"
                            value={od.primary_contact_email}
                            onChange={(e) => this.updatePrimaryContactEmail(e.target.value) }
                            className={"form-control "+error_classes.primary_contact_email}
                            id="primary-contact-email-input"
                            required />
                        {errors.primary_contact_email &&
                        <div className="invalid-feedback">
                            {errors.primary_contact_email}
                        </div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="primary-contact-phone-input">{gettext("Primary Contact Phone Number")}<span className="required">*</span></label>
                        <input
                            type="text"
                            value={od.primary_contact_phone}
                            onChange={(e) => this.updatePrimaryContactPhone(e.target.value) }
                            className={"form-control "+error_classes.primary_contact_phone}
                            id="primary-contact-phone-input"
                            required />
                        {errors.primary_contact_phone &&
                        <div className="invalid-feedback">
                            {errors.primary_contact_phone}
                        </div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="mode-of-contact-input">{gettext("Preferred Mode of Contact")}</label>
                        <input
                            type="text"
                            value={od.mode_of_contact}
                            onChange={(e) => this.updateModeOfContact(e.target.value) }
                            className="form-control"
                            id="mode-of-contact-input" />
                    </div>
                    {this.props.new &&
                    <div className="form-group btn-row">
                        <button className="btn btn-primary" onClick={(e) => this.saveNew(e)}>{gettext("Save Changes")}</button>
                        <button className="btn btn-secondary" onClick={(e) => this.saveNewAndAddAnother(e)}>{gettext("Save and Add Another")}</button>
                        <button className="btn btn-reset" type="button" onClick={() => this.resetForm()}>{gettext("Reset")}</button>
                    </div>
                    }
                    {!this.props.new &&
                    <div className="form-group btn-row">
                        <button className="btn btn-primary" onClick={(e) => this.save(e)}>{gettext("Save Changes")}</button>
                        <button className="btn btn-reset" type="button" onClick={() => this.resetForm()}>{gettext("Reset")}</button>
                    </div>
                    }
                </form>
            </div>
        )
    }
}
