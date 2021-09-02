import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { JSONAPI } from './api';


const AddDem = () => {
    let history= useHistory();
    const [addDem, setAddDem] = useState({
        title: "",
        description: "",
        imageurl: "",
        giturl: "#",
        brand: "",
        salesforcefolder: "",
        // demTab:"allDEM",
        // contentTab:"contentBlock",
        tabValue: "",
    });

    const {title, description, imageurl, giturl, brand, salesforcefolder, tabValue} = addDem;
    
    const onInputChange = e => {
        setAddDem({...addDem, [e.target.name]: e.target.value})
        //console.log(e.target.value);
    };
    const onSubmit = async(e) =>{
        e.preventDefault();
        if(tabValue === "allDem"){
            // alert("All DEM");
            await axios.post(`${JSONAPI}/demList`, addDem);
            history.push("/");
        }
        else{
            //alert("Content Block");
            await axios.post(`${JSONAPI}/contentBlock`, addDem);
            history.push("/");
        }
        
    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <h1>Add DEM</h1>

                            <form onSubmit={e => onSubmit(e)}>
                                <div className="mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="tabValue" value="allDem" id="flexRadioDefault1" onChange={e => onInputChange(e)} />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            All DEM
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="tabValue" value="contentBlock" id="flexRadioDefault2" onChange={e => onInputChange(e)}/>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Content Block
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">DEM Title</label>
                                    <input type="text" className="form-control" name="title" value={title} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">DEM  Description</label>
                                    <input type="text" className="form-control" name="description" value={description} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Git URL</label>
                                    <input type="text" className="form-control" name="giturl" value={giturl} onChange={e => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Full DEM image URL</label>
                                    <input type="text" className="form-control" name="imageurl" value={imageurl} onChange={e => onInputChange(e)} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Salesforce Folder</label>
                                    <input type="text" className="form-control" name="salesforcefolder" value={salesforcefolder} onChange={e => onInputChange(e)} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Market</label>
                                    <select className="form-select" aria-label="Default select example" name="brand" value={brand} onChange={e => onInputChange(e)}>
                                        <option name="NA" value="NA">Select Brand</option>
                                        <option name="Abarth" value="Abarth">Abarth</option>
                                        <option name="Fiat" value="Fiat">Fiat</option>
                                        <option name="Fiat Professional" value="Fiat Professional">Fiat Professional</option>
                                        <option name="Jeep" value="jeep">Jeep</option>
                                        <option name="Alfa Romeo" value="Alfa Romeo">Alfa Romeo</option>
                                    </select>
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default AddDem
