import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

class NavBar extends Component {
    constructor(props: any) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/class">Class</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/announcement">Announcement</Link></li>
                        <li><Link to="/changepassword">Change Password</Link></li>
                    </ul>
                </div>
            </Router>
        );
    }
}

export default NavBar