import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

export default function Header({ email, onLogOut }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu(e) {
    setIsMenuOpen(e.target.checked);
  }

  function closeOnLogOut() {
    setIsMenuOpen(false);
    onLogOut();
  }

  return (
    <>
      <div className={`header__menu-top ${isMenuOpen ? 'header__menu-top_opened' : ''}`}>
        <p className='header__email'>{email}</p>
        <Link
          to='/signin'
          className='header__sign-out'
          onClick={closeOnLogOut}
        >
          Выйти
        </Link>
      </div>
      <header className='header'>
        <nav className='header__nav'>
          <Link to='/users/me' aria-label='В свой профиль.'>
            <div className='header__logo'></div>
          </Link>
          <Routes>
            <Route
              path='/signup'
              element={
                <Link to='/signin' className='header__link'>
                  Войти
                </Link>
              }
            />
            <Route
              path='/signin'
              element={
                <Link to='/signup' className='header__link'>
                  Регистрация
                </Link>
              }
            />
            <Route
              path='/users/me'
              element={
                <>
                  <input
                    id='toggle'
                    className='header__menu-toggle'
                    type='checkbox'
                    value={isMenuOpen}
                    onChange={toggleMenu}
                  />
                  <label htmlFor='toggle' className='header__button-container'>
                    <div className='header__button'></div>
                  </label>
                  <div className='header__menu'>
                    <p className='header__email'>{email}</p>
                    <Link
                      to='/signin'
                      className='header__sign-out'
                      onClick={closeOnLogOut}
                    >
                      Выйти
                    </Link>
                  </div>
                </>
              }
            />
          </Routes>
        </nav>
      </header>
    </>
  );
}
