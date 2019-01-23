import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import List from "../../../to-do-list/src/components/list";

class Nav extends Component {
    render() {
        return(
            <nav style={{padding: '0 8px'}} className={"darken-2 blue"}>
                <div className="nav-wrapper">
                    <Link className={"brand-logo"} to={"/"}>chatty App</Link>
                    <ul className="right">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/chat"}>Chat</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;