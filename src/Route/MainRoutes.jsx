import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../Components/Navbar";
import TodoList from "../Pages/TodoList";
import Accordion from "../Pages/Accordion";
import NestedComments from "../Pages/NestedComments";
import Pagination from "../Pages/Pagination";
import ImageCarousal from "../Pages/ImageCarousal";
import GoogleSearch from "../Pages/GoogleSearch";
import TabFrom from "../Pages/TabFrom";
import FolderExplore from "../Pages/FolderExplore";
import ProtectedRoutes from "./ProtectedRoutes";
import StopWatch from "../Pages/StopWatch";
import CustomUseMemo from "../Pages/CustomUseMemo";
import WindowSize from "../Pages/WindowSize";
import Product from "../Pages/Product";

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
          <Route path='/stop-watch' element={<StopWatch />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/tab-from' element={<TabFrom />} />
            <Route path='/folder-explore' element={<FolderExplore />} />
          </Route>
          <Route path='/useMemo' element={<CustomUseMemo />} />
          <Route path='/window-size' element={<WindowSize />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRoutes;
