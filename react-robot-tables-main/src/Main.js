import React, { Component } from "react";
import { Routes,Route } from "react-router-dom";

import Billing from "./components/Billing/Billing";
import Table from './components/tables/table'

class Main extends Component {
  render() {
    return (
      <div>
        
        <Route path="/billing" component={Billing} exact /> 
        <Route path="/" component={Table} exact /> 

      </div>
    );
  }
}
export default Main;
