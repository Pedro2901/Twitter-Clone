
import React from 'react'
import "./SidebarNav.css"
import { BrowserRouter , Link, Route , Switch } from 'react-router-dom';

function SidebarNav({active,text,Icon}) {
    return (
        /*Estado activo "si eres activo entonces añade un "sidebarNav--active"  */
        <div className={`sidebarNav ${active && 'sidebarNav--active'}`}>
            <Icon/>
            <BrowserRouter>
            <Link style={{ textDecoration: 'none' }} to={{pathname:text}}><h2 className="sidebarNav"  >{text} </h2></Link> 

        <Switch>
        <Route exact path="/Home">
        <p>Hola</p>
        </Route>
            
        </Switch>   
            </BrowserRouter>
        
        
        </div>
    )
}

export default SidebarNav
