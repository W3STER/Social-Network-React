import React from 'react'
import { Switch, Route } from 'react-router-dom'


import { UserPageRouting } from '../UsersPage/UserPageRouting'
import { ProfilePage } from '../ProfilePage/index'
import { EditPage } from '../EditPage'
import { NewsRouting } from '../NewsPage/NewsPagesRouting'
import { MediaPage } from '../MediaPage'
import { FavoritesPage } from '../FavoritesPage'


export const Routing = () => {
    return(
        <div className="content-body">
            <Switch>
                <Route exact path="/" component={ProfilePage} />
                <Route path="/friends" component={UserPageRouting} />
                <Route path="/news" component={NewsRouting} />
                <Route path="/media" component={MediaPage} />
                <Route path="/favorites" component={FavoritesPage} />
                <Route path="/edit" component={EditPage} />
            </Switch>
        </div>
    )
}