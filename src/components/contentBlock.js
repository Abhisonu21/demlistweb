import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './navbar';
import {JSONAPI} from './api'

const ContentBlock = () => {
    const [demList, setDemList] = useState([]);
    const [filterList, setFilterList] = useState([]);
    
    const brandList = [
        ...new Set(filterList.map((ele)=>{
        return ele.brand;
    })),
    "All"
];
    const loadDem = async()=>{
        const fetchDem = await axios.get(`${JSONAPI}/contentBlock`);
        setDemList(fetchDem.data);
        setFilterList(fetchDem.data);
    }

    useEffect(()=>{
        loadDem(); 
    }, []);

    const filterItem =(brand) =>{
        if(brand === "All"){
            setDemList(filterList)
            return;
        }
            const filterBrandList = filterList.filter((currele) =>{
            return currele.brand === brand;
        });
        setDemList(filterBrandList);
        
    }
    
    //console.log(brand);
    return (
        <>  
            {/* <section className="custom-nav">
                <Navbar demList={
                    brandList.map((ele)=>{
                        
                        return (
                            <button className="btn btn-primary" onClick ={() => filterItem(ele)}>{ele}</button>
                        )
                    })
                }/>
            </section> */}
            
            <section style={{marginTop: "90px"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <table class="table table-image">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Dem Title</th>
                                    <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        demList.map((element) =>{
                                            const {id, imageurl, title, brand, giturl, salesforcefolder} = element;
                                            return(
                                                <>                                   
                                                    <tr>
                                                        <th scope="row">{id}</th>
                                                        <td className="w5">
                                                            <div className="tooltip text-center">
                                                                <img src={imageurl} className="card-img-top" alt={title}/>
                                                                <span>
                                                                    <p>{salesforcefolder}</p>
                                                                    <img src={imageurl}/>
                                                            
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>{title}</td>
                                                        
                                                        <td><a href={giturl} className="btn btn-primary button" target="_blank">Git Hub URL</a> </td>
                                                    </tr>
                                                
                                                </>
                                            );
                                        
                                        }) 
                                    }    
                                </tbody>
                            </table>
                        </div>
                        {/* {
                            demList.map((element) =>{
                                const {id, imageurl, title, brand, giturl, salesforcefolder} = element;
                                return(
                                    <>                                   
                                        <div className="col-12 col-md-4 col-lg-3" key={id}>
                                            <div className="card" >
                                                <div className="tooltip">
                                                    <img src={imageurl} className="card-img-top" alt={title}/>
                                                    <span>
                                                        <img src={imageurl}/>
                                                
                                                    </span>
                                                </div>
                                                
                                                <div className="card-body">
                                                <h5 className="card-title">{title}</h5>          
                                                <p className="card-text">{salesforcefolder}</p>
                                                <p className="card-text">{brand}</p>
                                                <a href={giturl} className="btn btn-primary button" target="_blank">Git Hub URL</a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    
                                    </>
                               );
                            
                           }) 
                        } */}
                    </div>
                </div>
            </section>   
        </>
    )
}

export default ContentBlock
