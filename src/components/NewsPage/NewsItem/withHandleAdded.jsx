import React from 'react'

export const withHandleAdded = BaseComponent => {
    return class WithHandleAdded extends React.Component{
        state = {
            news: this.props.news,
            added: false
        }

        handleAdd = () => {
            this.setState({
                added: this.state.added ? false : true
            })
        }

        render(){
            return (
                <BaseComponent 
                    {...this.props}
                    added={this.state.added}
                    handleAdd={this.handleAdd}
                />
            )
        }
    }
}