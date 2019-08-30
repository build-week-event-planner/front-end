import React from "react";
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