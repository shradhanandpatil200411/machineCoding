import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../Components/Navbar";
import TodoList from "../Pages/TodoList";
import Accordion from "../Pages/Accordion";
import NestedComments from "../Pages/NestedComments";
import Pagination from "../Pages/Pagination";
import ImageCarousal from "../Pages/ImageCarousal";
import GoogleSearch from "../Pages/GoogleSearch";

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
          <Route path='/carousal' element={<ImageCarousal />} />
          <Route path='/google-search' element={<GoogleSearch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRoutes;
