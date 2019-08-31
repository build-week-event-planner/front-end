import React from "react";

import { Tab, Menu , Icon} from "semantic-ui-react";

import { NavLink } from "react-router-dom";


const Nav = props => (

  <NavLink exact {...props} activeClassName="active" />

);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} /> {labelText}</span>

const homeLabel = createLabel("home", "Back to Site");

const aboutLabel = createLabel("aboutus", "About Us");

const dashboardLabel = createLabel("dashboard", "Home");



const panes = [

  { menuItem: <Menu.Item key='home' as={Nav} to={'https://event-planner-20193-ui.netlify.com'} content={homeLabel} /> },

  { menuItem: <Menu.Item key='aboutus' as={Nav} to={'https://event-planner-20193-ui.netlify.com/about.html'} content={aboutLabel} /> },

  { menuItem: <Menu.Item key='dashboard' as={Nav} to={'/dashboard'} content={dashboardLabel} /> },

];



const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav
