'use client';

import Image from 'next/image';
import logo from '../../assets/logo.png';
import { navLinks } from '../../constants/index';
import styles from './Navbar.module.css';
import { useState } from 'react';

const NavItems = ({ onClick }: { onClick?: () => void }) => {
    return (
        <ul className="flex flex-col md:flex-row md:text-lg text-xl md:gap-5 ">
            {navLinks.map(({ id, name, href }) => (
                <li
                    key={id}
                    className="max-md:hover:bg-menu hover:text-white py-2 rounded-md"
                >
                    <a href={href} onClick={onClick}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-alternate max-w-full">
            <div className=" w-screen flex justify-between items-center py-5 md:px-10 px-5 font-lato max-md:border-2 border-b-dark">
                <Image src={logo} alt="logo" width={60} height={80} />
                <input
                    type="checkbox"
                    role="button"
                    aria-label="Display the menu"
                    className={`${styles.menu} menu block md:hidden`}
                    onClick={toggleMenu}
                />
                <nav className="md:flex hidden">
                    <NavItems />
                </nav>
            </div>
            <div
                className={`md:hidden block overflow-hidden text-right transition-[max-height] duration-500 ease-in-out z-20 
                    ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <nav className="p-5">
                    <NavItems onClick={closeMenu} />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
