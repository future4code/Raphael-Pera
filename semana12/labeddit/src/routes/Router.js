import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ErrorPage } from '../pages/ErrorPage'
import { FeedPage } from '../pages/FeedPage/FeedPage'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { PostPage } from '../pages/PostPage/PostPage'
import { SignUpPage } from '../pages/SignUpPage/SignUpPage'


export const Router = () => {
    return(
        <Switch>
            <Route exact path={['/login', '/']}>
                <LoginPage/>
            </Route>
            <Route exact path={'/signup'}>
                <SignUpPage/>
            </Route>
            <Route exact path={'/feed'}>
                <FeedPage/>
            </Route>
            <Route exact path={'/feed/:id'}>
                <PostPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
    )
}

