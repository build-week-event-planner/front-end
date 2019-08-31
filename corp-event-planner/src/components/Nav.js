import React from "react";

import { Menu } from "semantic-ui-react";

import { NavLink } from "react-router-dom";

    // state = {}

    // handleItemClick = (event, { name }) => this.setState({activeItem: name })

    // render() {
    //     const { activeItem } = this.state
    // }

const Nav = props => (

    <NavLink exact {...props} activeClassName="active" />
    
    );

const createLabel = (labelText) => <span>
    {labelText} 
    </span>

const homeLabel = createLabel("home");

const aboutLabel = createLabel("aboutus");

const dashboardLabel = createLabel("dashboard");

const eventLabel = createLabel("events");

const todoLabel = createLabel("todo");

const vendorLabel = createLabel("vendor");


const panes = [

    {menuItem: <Menu.Item key='home' as={Nav} to={'https://event-planner-20193-ui.netlify.com'} content={homeLabel} />},

    {menuItem: <Menu.Item key='aboutus' as={Nav} to={'https://event-planner-20193-ui.netlify.com/about.html'} content={aboutLabel} />},

    {menuItem: <Menu.Item key='dashboard' as={Nav} to={'/dashboard'} content={dashboardLabel} />},

    {menuItem: <Menu.Item key='event' as={Nav} to={'/event'} content={eventLabel} />},

    {menuItem: <Menu.Item key='todo' as={Nav} to={'/todo'} content={todoLabel} />},

    {menuItem: <Menu.Item key='vendor' as={Nav} to={'/vendor'} content={vendorLabel} />},

];



    //     return (

    //         <Menu>
    //         <Menu.Item
    //         name='Home'
    //         active={activeItem === 'https://event-planner-20193-ui.netlify.com'}
    //         onClick={this.handleItemClick}
    //         >
    //         <Icon name='home'> Home</Icon>
    //         </Menu.Item>

    //         <Menu.Item
    //         name='aboutus'
    //         active={activeItem === 'https://event-planner-20193-ui.netlify.com/about.html'}
    //         onClick={this.handleItemClick}
    //         >
    //         About Us
    //         </Menu.Item>

    //         <Menu.Item
    //         name='dashboard'
    //         active={activeItem === 'dashboard'}
    //         onClick={this.handleItemClick}
    //         >
    //         Dashboard
    //         </Menu.Item>

    //         <Menu.Item
    //         name='events'
    //         active={activeItem === 'event'}
    //         onClick={this.handleItemClick}
    //         >
    //         Events
    //         </Menu.Item>
            
    //         <Menu.Item
    //         name='todo'
    //         active={activeItem === 'todo'}
    //         onClick={this.handleItemClick}
    //         >
    //         To Do
    //         </Menu.Item>
            
    //         <Menu.Item
    //         name='vendor'
    //         active={activeItem === 'vendor'}
    //         onClick={this.handleItemClick}
    //         >
    //         Vendor
    //         </Menu.Item>

    //         <Menu.Item
    //         name='contactus'
    //         active={activeItem === 'CONTACTUS URL'}
    //         onClick={this.handleItemClick}
    //         >
    //         Contact Us
    //         </Menu.Item>
    //     </Menu>
    //     )
    // }

export default Nav
=======
import { Menu, Icon } from "semantic-ui-react";

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = {
          activeItem: null,
        };
    }

    handleItemClick(event, { name }) {
      this.setState({ activeItem: name });
    }

    // render() {
    //     const { activeItem } = this.state;
    // }

    render() {
        return (
              <Menu>
              <Menu.Item
              name='Home'
              active={this.activeItem === 'https://event-planner-20193-ui.netlify.com'}
              onClick={this.handleItemClick}
              >
              <Icon name='home'> Home</Icon>
              </Menu.Item>

              <Menu.Item
              name='aboutus'
              active={this.activeItem === 'https://event-planner-20193-ui.netlify.com/about.html'}
              onClick={this.handleItemClick}
              >
              About Us
              </Menu.Item>

              <Menu.Item
              name='dashboard'
              active={this.activeItem === 'dashboard'}
              onClick={this.handleItemClick}
              >
              Dashboard
              </Menu.Item>

              <Menu.Item
              name='events'
              active={this.activeItem === 'event'}
              onClick={this.handleItemClick}
              >
              Events
              </Menu.Item>
              
              <Menu.Item
              name='todo'
              active={this.activeItem === 'todo'}
              onClick={this.handleItemClick}
              >
              To Do
              </Menu.Item>
              
              <Menu.Item
              name='vendor'
              active={this.activeItem === 'vendor'}
              onClick={this.handleItemClick}
              >
              Vendor
              </Menu.Item>

              <Menu.Item
              name='contactus'
              active={this.activeItem === 'CONTACTUS URL'}
              onClick={this.handleItemClick}
              >
              Contact Us
              </Menu.Item>
          </Menu>
        );
    }
}

