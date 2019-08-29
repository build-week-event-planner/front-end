import React from "react";

import { Menu, Icon } from "semantic-ui-react";

    state = {}

    handleItemClick = (event, { name }) => this.setState({activeItem: name })

    render() {
        const { activeItem } = this.state
    }

    const Nav = () => {

        return (

            <Menu>
            <Menu.Item
            name='Home'
            active={activeItem === 'https://event-planner-20193-ui.netlify.com'}
            onClick={this.handleItemClick}
            >
            <Icon name='home'> Home</Icon>
            </Menu.Item>

            <Menu.Item
            name='aboutus'
            active={activeItem === 'https://event-planner-20193-ui.netlify.com/about.html'}
            onClick={this.handleItemClick}
            >
            About Us
            </Menu.Item>

            <Menu.Item
            name='dashboard'
            active={activeItem === 'dashboard'}
            onClick={this.handleItemClick}
            >
            Dashboard
            </Menu.Item>

            <Menu.Item
            name='events'
            active={activeItem === 'event'}
            onClick={this.handleItemClick}
            >
            Events
            </Menu.Item>
            
            <Menu.Item
            name='todo'
            active={activeItem === 'todo'}
            onClick={this.handleItemClick}
            >
            To Do
            </Menu.Item>
            
            <Menu.Item
            name='vendor'
            active={activeItem === 'vendor'}
            onClick={this.handleItemClick}
            >
            Vendor
            </Menu.Item>

            <Menu.Item
            name='contactus'
            active={activeItem === 'CONTACTUS URL'}
            onClick={this.handleItemClick}
            >
            Contact Us
            </Menu.Item>
        </Menu>
        )
    }

export default Nav