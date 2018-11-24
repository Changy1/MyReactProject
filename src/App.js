import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import Main from '@pages/main/Main'
import Search from '@pages/search/Search'
import Result from '@pages/result/Result'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect from = '/' exact to = '/main'></Redirect>
          <Route path = '/main' component = { Main }></Route>
          <Route path = '/search' component = { Search }></Route>
          <Route path = '/result' component = { Result }></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
