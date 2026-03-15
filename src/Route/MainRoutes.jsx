import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../Navbar";
import TodoList from "../Pages/TodoList";
import Accordion from "../Pages/Accordion";
import NestedComments from "../Pages/NestedComments";

function MainRoutes() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<TodoList />} />
          <Route path='/accordion' element={<Accordion />} />
          <Route path='/nested' element={<NestedComments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRoutes;
