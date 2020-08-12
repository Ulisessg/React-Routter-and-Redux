import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/libro.png';
import userIcon from '../assets/static/user-icon.png';
import { object } from 'prop-types';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };
  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });
  return (
    <header className={headerClass}>
      <Link to="./">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div>
        <h2>Libreria de Juancho</h2>
      </div>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <Link to="./">{user.name}</Link>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <Link to="#logout" onClick={handleLogout}>
                Cerrar Sesión
              </Link>
            </li>
          ) : (
            <Link to="./login">Iniciar sesion</Link>
          )}
        </ul>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToPros = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToPros)(Header);
