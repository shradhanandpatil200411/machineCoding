import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from '../Navbar'
import TodoList from '../Pages/TodoList'
import Accordion from '../Pages/Accordion'

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