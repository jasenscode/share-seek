'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { source_sans_pro } from '../../app/fonts';
import { useState } from 'react';
import { RiMenu4Line, RiCloseLine, RiAddLine, RiLoginCircleLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';

import { Container } from '@components/Container';
import { Button } from '@components/Button';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();

  const navLinks = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Shares', path: 'shares' },
    { id: 3, label: 'News', path: 'news' },
    { id: 4, label: 'IPOs', path: 'ipos' },
  ];

  const renderLinks = () => {
    return navLinks.map((link, idx) => {
      return (
        <li
          key={link.id}
          className={`hover:bg-uranium hover:rounded-md py-2 md:px-5 md:py-1 hover:text-black duration-200 ${
            path === link.path ? 'text-black bg-uranium rounded-md' : ''
          }`}>
          <Link href={`/${link.path}`}>{link.label}</Link>
        </li>
      );
    });
  };

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Container>
      <nav
        className={`fixed md:static left-0 right-0 top-0 p-6 ${
          source_sans_pro.variable
        } font-sans py-6 ${
          menuOpen ? 'h-screen bg-violet' : 'h-auto'
        } lg:h-auto flex flex-col justify-between lg:items-center lg:flex-row`}>
        <div className='text-floral-white flex justify-between items-center'>
          <Link
            href='/'
            className='text-4xl uppercase'>
            share seek
          </Link>
          {menuOpen ? (
            <button
              className='md:hidden'
              onClick={handleToggleMenu}>
              <IconContext.Provider value={{ size: '2.5rem' }}>
                <RiCloseLine />
              </IconContext.Provider>
            </button>
          ) : (
            <button
              className='md:hidden'
              onClick={handleToggleMenu}>
              <IconContext.Provider value={{ size: '2.5rem' }}>
                <RiMenu4Line />
              </IconContext.Provider>
            </button>
          )}
        </div>

        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } text-floral-white text-center flex-col md:flex md:flex-row  md:items-center  gap-4 md:gap-8`}>
          {renderLinks()}
        </ul>

        <div
          className={`${menuOpen ? 'flex' : 'hidden'} text-white md:flex justify-evenly lg:gap-8`}>
          <Button
            variant='secondary'
            className='flex items-center gap-2'>
            <IconContext.Provider value={{ size: '20px' }}>
              <RiLoginCircleLine />
            </IconContext.Provider>
            Log in
          </Button>
          <Button className='flex items-center gap-2'>
            <IconContext.Provider value={{ size: '23px' }}>
              <RiAddLine />
            </IconContext.Provider>
            Sign up
          </Button>
        </div>
      </nav>
    </Container>
  );
};
