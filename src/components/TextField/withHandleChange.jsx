import React from 'react'

export const withHandleChange = BaseComponent => {
    return class withHandleChange extends React.Component{
        
        onChange = event => {
            this.props.setFieldValue(this.props.name, event.target.value)
            if(this.props.onChange){
                return this.props.onChange(event)
            }
        }

        render(){
            return(
                <BaseComponent 
                    {...this.props}
                    onChange={this.onChange}
                />
            )
        }
    }
}