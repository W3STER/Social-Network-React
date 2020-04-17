import React from 'react'

export const withUserChange = Basecomponent => {
    return class WithUserChange extends React.Component{
        onChange = event => {
            this.props.setUserValue(this.props.name, event.target.value)
            if(this.props.onChange){
                return this.props.onChange(event)
            }
        }

        render(){
            return (
                <Basecomponent 
                    {...this.props}
                    onChange={this.onChange}
                />
            )
        }
    }
}