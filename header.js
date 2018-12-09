import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab, Typography } from '@material-ui/core';
import { Link, BrowserRouter } from 'react-router-dom'
export default props =>
<BrowserRouter>
 <AppBar position="static" style={{backgroundColor:'yellow'}}>
          <Tabs>
            <Link to="/home">About Tabla</Link>
            <Link to="/players">Famous Contributions</Link>
            <Link to="/compositions"><Tab label="Famous Compositions" /></Link>
          </Tabs>
 </AppBar>
</BrowserRouter>