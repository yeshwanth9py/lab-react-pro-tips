import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Component = () => {
    const navigate = useNavigate();
    return (
            <div className="App">
            <nav className='navbar'>
                <h2><Link to="/">kalvium</Link></h2>
                <span>
                    <span onClick={()=>navigate("/contacts")} style={{cursor: "pointer"}}>Contacts</span>
                    <span onClick={()=>navigate("/register")} style={{cursor: "pointer"}}>Register</span>
                </span>
            </nav>
        </div>
      
    )
}

export default Component