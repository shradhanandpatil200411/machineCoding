import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className='flex justify-between px-20 text-md py-5 bg-gray-600'>
        <div className='text-2xl font-bold'>SP</div>
        <div>
          <ul className='flex gap-5 text-xl font-semibold'>
            <li>
              <NavLink to='/'> Todo </NavLink>
            </li>
            <li>
              <NavLink to='/accordion'>Accordion</NavLink>
            </li>
            <li>
              <NavLink to='/nested'>Nested Comments</NavLink>
            </li>
            <li>
              <NavLink to='/pagination'>Pagination</NavLink>
            </li>
            <li>
              <NavLink to='/carousal'>Carousal</NavLink>
            </li>
            <li>
              <NavLink to='/google-search'>Google</NavLink>
            </li>
            <li>
              <NavLink to='/tab-from'>Tab from</NavLink>
            </li>
            <li>
              <NavLink to='/folder-explore'>Folder Explore</NavLink>
            </li>
            <li>
              <NavLink to='/stop-watch'>Stop Watch</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
