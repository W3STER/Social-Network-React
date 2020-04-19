import React from 'react'
import { EditTextField } from '../../TextField/Index'
import { Button } from '../../Button'
import { withForm, validation } from '../../FormValidation/withForm'
import { connect } from 'react-redux'
import { saveEdit } from '../../../redux/actions'

const EditFormView = props => {

    const saveEditProfile = event => {
        event.preventDefault()
        if(!props.disabled){
            const user = {
                firstName: props.userValues.firstName,
                lastName: props.userValues.lastName,
                email: props.userValues.email,
                password: props.userValues.password,
                confirmPassword: props.userValues.confirmPassword,
                city: props.userValues.city
            }
            props.saveEdit(user)
            props.setFieldDirty('')
        }
    }

    return (
        <form onSubmit={saveEditProfile}>
            <EditTextField
                {...props}
                error={props.errors.firstName}
                value={props.userValues.firstName}
                className="edit-field"
                label="First name" 
                name="firstName"
                type="text"
            />
            <EditTextField
                {...props}
                value={props.userValues.lastName}
                error={props.errors.lastName}
                className="edit-field"
                label="Last name" 
                name="lastName"
                type="text"
            />
            <EditTextField
                {...props}
                value={props.userValues.email}
                error={props.errors.email}
                className="edit-field"
                label="Email" 
                name="email"
                type="email"
            />
            <EditTextField
                {...props}
                value={props.userValues.city}
                error={props.errors.city}
                className="edit-field"
                label="City" 
                name="city"
                type="text"
            />
            <EditTextField
                {...props}
                value={props.userValues.password}
                error={props.errors.password}
                className="edit-field"
                label="Password" 
                name="password"
                type="password"
            />
            {/* <EditTextField
                {...props}
                value={props.userValues.confirmPassword}
                error={props.errors.confirmPassword}
                className="edit-field"
                label="Confirm password" 
                name="confirmPassword"
                type="password"
            /> */}
            <Button
                disabled={props.disabled}
                style="primary"
                size="medium"
                color="primary"
                label="Save"
            />
        </form>
    )
}

const mapDispatchToProps = {
    saveEdit
}

const withDispatch = connect(null, mapDispatchToProps)(EditFormView)
export const EditForm = withForm(validation)(withDispatch)