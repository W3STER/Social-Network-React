import React from "react"

export const validation = {
    field: value => {
        if (!value) {
            return true
        } else {
            return false
        }
    },
    post: value => null,
    firstName: value => {
        if (!value) {
            return 'Field is empty'
        }
    },
    lastName: value => {
        if (!value) {
            return 'Field is empty'
        }
    },
    city: value => {
        if (!value) {
            return 'Field is empty'
        }
    },
    email: value => {
        if (!value) {
            return 'Field is empty'
        }
    },
    password: value => {
        if (value.length < 8) {
            return 'Short password'
        }
    },
    confirmPassword: (currentPassword, value) => {
        if (currentPassword !== value) {
            return 'Password does not match'
        }
    }
}

export const withForm = config => Basecomponent => {
    return class WithForm extends React.Component {
        state = {
            userValues: this.props.user,
            values: {},
            errors: {},
            dirty: {},
            disabled: true,
            formError: false
        }

        setFieldValue = (name, value) => {
            this.setState(prevState => {
                const nextValues = {
                    ...prevState.values, [name]: value
                }
                const isError = config[name](value)
                const nextErrors = {
                    ...prevState.errors, [name]: isError
                }
                return {
                    values: nextValues,
                    errors: nextErrors
                }
            })
        }

        setUserValue = (name, value) => {
            this.setState(prevState => {
                const nextUser = {
                    ...prevState.userValues, [name]: value
                }
                const isError = config[name](value)
                const nextErrors = {
                    ...prevState.errors, [name]: isError
                }
                return {
                    userValues: nextUser,
                    errors: nextErrors
                }
            })
        }

        setFieldDirty = (value) => {
            this.setState(prevState => {
                const isError = config.field(value)
                return {
                    ...prevState,
                    disabled: isError
                }
            })
        }

        render() {
            return (
                <Basecomponent
                    {...this.props}
                    formValidation={this.formValidation}
                    values={this.state.values}
                    disabled={this.state.disabled}
                    userValues={this.state.userValues}
                    errors={this.state.errors}
                    setFieldValue={this.setFieldValue}
                    setUserValue={this.setUserValue}
                    setFieldDirty={this.setFieldDirty}
                />
            )
        }
    }
}