import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Posts from './PostLists';
import PostDetails from './PostDetails';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Posts />
      </Route>
      <Route
        path="/posts/:id"
        exact
        component={PostDetails}
       />
    </Switch>
  );
}