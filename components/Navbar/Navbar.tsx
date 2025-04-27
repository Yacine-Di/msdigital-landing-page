'use client';

import Image from 'next/image';
import { navLinks } from '../../utils/constants';
import styles from './Navbar.module.css';
import { useState } from 'react';
import Link from 'next/link';

const NavItems = ({ onClick }: { onClick?: () => void }) => {
    return (
        <ul className="flex flex-col md:flex-row lg:text-xl text-base md:gap-5 ">
            {navLinks.map(({ id, name, href }) => (
                <li key={id} className="hover:text-gray-500 p-2 rounded-md">
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
        <header className="fixed top-0 left-0 right-0 z-50 bg-white max-w-full">
            <div className=" w-screen flex justify-between items-center h-16 md:h-20 lg:px-10 px-5 font-roboto max-md:border-2 border-b-black">
                <Link href="#home">
                    <Image
                        src="/assets/smdesign-black.png"
                        alt="logo"
                        width={80}
                        height={80}
                        className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                    />
                </Link>
                <input
                    type="checkbox"
                    role="button"
                    checked={isOpen}
                    aria-label="Display the menu"
                    className={`${styles.menu} menu block md:hidden`}
                    onChange={toggleMenu}
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
