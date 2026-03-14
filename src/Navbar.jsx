import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='flex justify-between px-40 py-5 bg-gray-600'>
                <div className="text-2xl font-bold">
                    SP
                </div>
                <div>
                    <ul className='flex gap-10 text-xl font-semibold'>
                        <li><NavLink to="/"> Todo </NavLink></li>
                        <li><NavLink to="/accordion">Accordion</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar