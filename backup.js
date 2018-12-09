import React, { Component, Fragment } from 'react';
import Header from './components/header.js'
import { Link, BrowserRouter, Route, NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab, Typography } from '@material-ui/core';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="App">
        <header className="App-header">
          Tabla 
        </header>
        
        <AppBar position="static" style={{backgroundColor:'yellow'}}>
          <div className ="Tabs">
            <Tabs>
            <Link to="/home"><Tab label ="About Tabla" /></Link>
            <Link to="/players"><Tab label ="Famous Contributions" /></Link>
            <Link to="/compositions"><Tab label="Famous Compositions" /></Link>
          </Tabs>
          </div>
      </AppBar>

      </div>
      
      <Route exact path ="/home" component={()=><div> Tabla is a .. </div>}/>
      <Route exact path ="/players" component={()=><div> Ustd AJT, AMK , ARK </div>}/>
      <Route exact path ="/compositions" component={()=><div> Dha.. </div>}/>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
