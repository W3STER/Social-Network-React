import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setUsers } from "../../../redux/actions"
import { UserItem } from "../UserItem"
import { SearchFieldUsers } from "../../SearchField"
import { SortingUsers } from "../../Sorting"

const UserListView = (props) => {
    useEffect(() => {
        props.setUsers()
        console.log('hook working')
    }, [])

    if (!props.users.length) {
        return (
            <div>
                <h2 className="title-page">0 friends</h2>
                <SearchFieldUsers />
            </div>
        )
    }
    return (
        <div>
            <h2 className="title-page">{props.users.length} friends</h2>
            <SearchFieldUsers />
            <SortingUsers />
            {props.users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = {
    setUsers
}

export const UserList = connect(mapStateToProps, mapDispatchToProps)(UserListView)


