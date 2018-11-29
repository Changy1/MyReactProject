import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import Main from '@pages/main/Main'
import Search from '@pages/search/Search'
import Result from '@pages/result/Result'
import Login from '@pages/login/Login'
import Detail from '@pages/detail/Detail'
import Content from '@pages/content/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect from = '/' exact to = '/main'></Redirect>
          <Route path = '/main' component = { Main }></Route>
          <Route path = '/search' component = { Search }></Route>
          <Route path = '/result' component = { Result }></Route>
          <Route path = '/login' component = { Login }></Route>
          <Route path = '/detail' component = { Detail }></Route>
          <Route path = '/Content' component = { Content }></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
