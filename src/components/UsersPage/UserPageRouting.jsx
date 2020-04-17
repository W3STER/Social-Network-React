import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { UserProfilePage } from './UserProfilePage'
import { UserList } from './UserListPage'

export const UserPageRouting = () => {
    return(
        <Switch>
            <Route exact path="/friends" component={UserList} />
            <Route path="/friends/:id" component={UserProfilePage} />
        </Switch>
    )
}