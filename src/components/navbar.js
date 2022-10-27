import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoVinetki from '../media/LOGOVINETKI.png'
import Hamburger from 'hamburger-react'

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const [border, setBorder] = useState([false])
  const active = () => {
    setBorder(!border)
  }

  return (
    <>
      <div className=' w-full flex justify-between items-center'>
        <div className=' flex justify-start items-center box-border'>
          <section className='logo w-[180px] h-[140px] overflow-hidden ml-10'>
            <Link to="/" >
              <img src={logoVinetki} className="logoVinetki" />
            </Link>
          </section>
        </div>
        <div className="mobile-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} size="25" />
        </div>
        <div className={isOpen ? " navbar1 bg-white flex justify-center items-center gap-x-3 text-gray-600 text-lg font-normal text-center mr-24 z-20" : 'navbar bg-white flex justify-center items-center gap-x-3 text-gray-600 text-lg font-normal text-center mr-24'}>
          <NavLink to="/" className="page">Главная</NavLink>
          <NavLink to="/rabotiy">Как мы работаем?</NavLink>
          <NavLink to="/ONas">О нас</NavLink>
          <NavLink to="/otzivi">Отзывы</NavLink>
          <NavLink to="/novinkiSezona">Новинки сезона</NavLink>
        </div>
      </div>

    </>
  );
}

export default Navbar;