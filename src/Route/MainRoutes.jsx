import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoList from '../TodoList/TodoList'
import Accordion from '../Accordion/Accordion'
import Navbar from '../Navbar'

function MainRoutes() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<TodoList />} />
                    <Route path='/accordion' element={<Accordion />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MainRoutes