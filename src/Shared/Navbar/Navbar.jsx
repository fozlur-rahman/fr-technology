import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleResponsive = () => {
        setOpen(!open)
    }
    const navItems = [
        { path: '/', display: 'Home' },
        { path: '/shop', display: 'Shop' },
        { path: '/about', display: 'About' },
        { path: '/contact', display: 'Contact' },
    ]
    return (
        <div className='navbar shadow flex items-center'>
            <div className='section_container flex justify-between items-center'>
                <div className='nav_brand'>
                    {/* <img src={logo} alt="" /> */}
                    <h2>FR Technology</h2>
                </div>

                <ul className={`lg:w-2/4  lg:flex lg:space-x-10 justify-center responsive_menu ${open ? 'responsive_menu-open ' : 'responsive_menu-close '}`}>
                    {
                        navItems.map((item, index) => <li key={index}>
                            <NavLink activeclassname='active' to={item.path}>{item.display}</NavLink>
                        </li>)
                    }
                </ul>
                <div className='cart relative'>
                    <i className="ri-shopping-cart-2-line text-3xl"></i>
                    <span className='absolute top-[-10px] right-[-10px]'>10</span>
                </div>
                <button  className='lg:hidden responsive-menu-btn' onClick={handleResponsive}>
                    {!open ? <i className="ri-menu-3-line text-2xl"></i> : <i className="ri-close-fill text-2xl"></i>}
                </button>
            </div>
        </div>
    );
};

export default Navbar;