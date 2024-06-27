import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'


const App = () => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Settings
        </Tooltip>
      );
    
    return (
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                    <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                            <Button variant="link" type='button'className='text-3xl p-3' style={{ background:'white',borderRadius: '50%' }} >
                <FiSettings size={24} />
              </Button>
            </OverlayTrigger>
                    </div>

                </div>
            </BrowserRouter>
       </div>
    )
}

export default App;