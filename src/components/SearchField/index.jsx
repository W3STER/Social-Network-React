import React from 'react'
import { TextFieldView } from '../TextField/Index'
import { connect } from 'react-redux'
import { searchUsers } from '../../redux/actions'

const SearchFieldView = props => {
    const searchingUsers = event => {
        props.searchUsers(event.target.value)
    }

    return (
        <TextFieldView
            onChange={searchingUsers}
            name="search"
            type="text"
            placeholder="Search friends"
        />
    )
}

const mapDispathToProps = {
    searchUsers
}
export const SearchFieldUsers = connect(null, mapDispathToProps)(SearchFieldView)