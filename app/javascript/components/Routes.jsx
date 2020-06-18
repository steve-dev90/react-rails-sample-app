import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Posts from './PostLists';
import PostDetails from './PostDetails';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Posts />
      </Route>
      <Route
        path="/posts/new"
        exact
        component={CreatePost}
       />
      <Route
        path="/posts/:id"
        exact
        component={PostDetails}
       />
      <Route
        path="/posts/:id/edit"
        exact
        component={UpdatePost}
       />
    </Switch>
  );
}