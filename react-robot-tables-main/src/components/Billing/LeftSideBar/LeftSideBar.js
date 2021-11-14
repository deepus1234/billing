import React, { Component } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import "./LeftSideBar.css";
import DashboardIcon from '@material-ui/icons/Dashboard';

class LeftSideBar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {

      userDetails: this.props.userDetails,

    };

  }

  componentDidUpdate(prevProps) {

  }
  componentDidMount() {

  }


  render() {
    return (

      <div className="left-side-bar">
        <div className="flex-container">
          <nav id="sidebar" style={{ height: '800px' }}>
            <ul class="list-unstyled components">
              <li>
                <NavLink to="/" activeClassName="active" exaact>

                  <label className="ml-4" > Dashboard</label>
                </NavLink>
              </li>
              <li>
                <NavLink to="/metrics" activeClassName="active">
                  <span><i className="fa fa-bar-chart" style={{ fontSize: '20px' }}></i></span>
                  <label className="ml-4" >Option1</label>

                </NavLink>
              </li>
              <li>
                <NavLink to="/metrics" activeClassName="active">
                  <span><i className="fa fa-bar-chart" style={{ fontSize: '20px' }}></i></span>
                  <label className="ml-4" > Billing</label>

                </NavLink>
              </li>
              <li>
                <NavLink to="/myapplications" activeClassName="active">
                  <span><i className="fa fa-tasks" style={{ fontSize: '20px' }}></i> </span>
                  <label className="ml-4" > Option 3</label>
                </NavLink>
              </li>
              <li>
                <NavLink to="/myprofile" activeClassName="active">
                  <span><i style={{ 'font-size': '25px' }} className="fa fa-user"></i></span>
                  <label className="ml-4" > Option 4</label>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default LeftSideBar;
