import React from 'react';
import { Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { logo } from '../../constants/constant';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Menu borderless fixed="top">
            <Menu.Item>
                <img src={logo} alt="logo" style={{ width: 150 }} />
            </Menu.Item>
            <Menu.Item name="Home" as={Link} to="/" />
            <Menu.Item name="Recipes" as={Link} to="/recipes" />
            <Menu.Menu position="right">
                <Menu.Item>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTiktok} size="2x" />
                    </a>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default NavBar;
