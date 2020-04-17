import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { NewsListPage } from './NewsListPage/index'

export const NewsRouting = props => {
    return (
        <Switch>
            <Route path="/news" component={NewsListPage} />
        </Switch>
    )
}