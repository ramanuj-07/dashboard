import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Stacked, Pyramid, Line, Area, Bar, Pie, ColorMapping, Calendar, ColorPicker, Kanban } from './pages';
import './App.css'


const App = () => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Settings
        </Tooltip>
    );

    const activeMenu = false;

    return (
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                            <Button variant="link" type='button' className='text-3xl p-3' style={{ background: 'white', borderRadius: '50%' }} >
                                <FiSettings size={24} />
                            </Button>
                        </OverlayTrigger>
                    </div>
                    {activeMenu ? (
                        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                            <Sidebar />
                        </div>
                    ) : (<div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar />
                    </div>
                    )}
                    <div className={activeMenu
                        ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                        : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '}>
                    </div>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar />
                    </div>
                    <div>
                        <Routes>
                            <Route path='/kanban' element={<Kanban />} />
                            <Route path='/calendar' element={<Calendar />} />
                            <Route path='/color-picker' element={<ColorPicker />} />

                            <Route path="/line" element={<Line />} />
                            <Route path="/area" element={<Area />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/color-mapping" element={<ColorMapping />} />
                            <Route path="/pyramid" element={<Pyramid />} />
                            <Route path="/stacked" element={<Stacked />} />
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;