import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../Components/Navbar";
import TodoList from "../Pages/TodoList";
import Accordion from "../Pages/Accordion";
import NestedComments from "../Pages/NestedComments";
import Pagination from "../Pages/Pagination";

function MainRoutes() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<TodoList />} />
          <Route path='/accordion' element={<Accordion />} />
          <Route path='/nested' element={<NestedComments />} />
          <Route path='/pagination' element={<Pagination />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRoutes;
