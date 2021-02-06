import React, { useContext } from 'react';
import Button from "./Button";
import UserContext from '../Context/Context';
import './index.css'


const Header = ()=> { 
    const {showAddPane} = useContext(UserContext);

 return (
            <header className = 'header'>
                <h1>Task Tracker</h1>
                <Button color ={showAddPane ? 'red': 'green'} text = {showAddPane ? 'Close': 'Add'} />

            </header>
     )
}
export default Header;