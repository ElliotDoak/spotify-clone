import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useDataLayerValue} from "./DataLayer";

function Header({spotify}) {
    const[{user}, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
               <SearchIcon />
               <input type="text" placeholder="Search for Artists, songs or podcasts" />
            </div>

            <div className="header__right">
                <AccountCircleIcon src={user?.images[0]?.url} alt="Username"/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
