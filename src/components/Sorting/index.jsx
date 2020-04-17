import React from 'react'
import { Button } from '../Button'
import { connect } from 'react-redux'
import { sortUsers } from '../../redux/actions'
import './sorting.css'

const SortingView = props => {
    const sortFriends = () => {
        props.sortUsers()
    }

    return (
        <div className="sorting-wrapper">
            <div className="caption sorting-caption">Sorting</div>
            <Button
                style="secondary" 
                label="name"
                onClick={sortFriends}
            />
        </div>
    )
}

const mapDispathToProps = {
    sortUsers
}

export const SortingUsers = connect(null, mapDispathToProps)(SortingView)