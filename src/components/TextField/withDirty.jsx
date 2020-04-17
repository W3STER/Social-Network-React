import React from 'react'

export const withDirty = BaseComponent => {
    return class WithDirty extends React.Component{
        onChange = event => {
            this.props.setFieldDirty(event.target.value)
            if(this.props.onChange){
                return this.props.onChange(event)
            }
        }
        render(){
            return (
                <BaseComponent 
                    {...this.props}
                    onChange={this.onChange}
                />
            )
        }
    }
}