import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
    render() {
	return (
	    <div>
		<Navbar className="header">
			    <Link to="/">
				#mainchannel
			    </Link>
		</Navbar>
		

	    </div>
	);
    }
}

