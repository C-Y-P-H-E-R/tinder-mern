import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import './css/header.css'
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum'

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            <img className="header__logo" src="https://img.pngio.com/tinder-logo-png-transparent-tinder-logopng-images-pluspng-tinder-logo-png-1000_1000.png" alt="Not Found" />
            
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
