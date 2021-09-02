import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Navbar = ({demList}) => {
    //console.log(demList);
    // const [brand, setBrand] = useState([]);

    // const loadDem = async()=>{
    //     const fetchDem = await axios.get("http://localhost:3002/demList");
    //     setBrand(fetchDem.data);
    // }

    // useEffect(()=>{
    //     loadDem(); 
    // }, []);
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    {demList}
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
