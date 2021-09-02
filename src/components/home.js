import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import ContentBlock from './contentBlock';
import Demlists from './demlists';

const Home = () => {
    return (
        <>
            <div className="section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <Tabs className="custom-tab nav-fill btn btn-warning" defaultActiveKey="allDEM">
                                    <Tab eventKey="allDEM" title="All DEM">
                                        <Demlists />
                                    </Tab>
                                    <Tab eventKey="contentBlock" title="Content Block">
                                        <ContentBlock />
                                    </Tab>
                                    <Tab eventKey="lp" title="Lp">
                                    Hii, I am 3rd tab content
                                    </Tab>
                                </Tabs>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
              
        </>
    )
}

export default Home
