import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import avatar from './../images/Awatar/awatar.jpg';
function Navbar({setNavToggle}) {
  return (
    <NavbarStyled>
      <div className="avatar-logo">
        <img src={avatar} alt="Logo" />
      </div>
      <ul className="nav-items">
        <li><NavLink to="/" exact activeClassName="active-menu" onClick={()=>setNavToggle(false)}>Home</NavLink></li>
        <li><NavLink to="/about" exact activeClassName="active-menu" onClick={()=>setNavToggle(false)}>About</NavLink></li>
        <li><NavLink to="/services" exact activeClassName="active-menu" onClick={()=>setNavToggle(false)}>Services</NavLink></li>
        <li><NavLink to="/resume" exact activeClassName="active-menu" onClick={()=>setNavToggle(false)}>Resume</NavLink></li>
        <li><NavLink to="/portfolio" exact activeClassName="active-menu" onClick={()=>setNavToggle(false)}>Portfolio</NavLink></li>
		  {/* <li><NavLink to="/blog" exact activeClassName="active-menu" onClick={()=>setNavToggle(false)}>Blog</NavLink></li> */ }
        <li><NavLink to="/contact" exact activeClassName="active-menu" onClick={()=>setNavToggle(false)}>Contact</NavLink></li>
      </ul>
      <footer>
      </footer>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.header`
  height: 100%;
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-right:2px solid var(--border-color);

  .avatar-logo{
    width:100%;
    height: 25%;
    border-bottom: 1px solid var(--border-color);
    text-align:center;
    padding: 1rem 0;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
      height:90%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items{
    width:100%;
    text-align: center;
    .active-menu{
        color: var(--primary-color);
        font-size:1.1rem;
    }
    li{
      display: block;
      a{
        font-size:1rem;
        text-transform: uppercase;
        transition: all .4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0.45rem 0;
        display: block;
        &:hover{
            cursor: pointer;
            color:var(--primary-color);
        }
      }
    }
  }

  footer{
        border-top:1px solid var(--border-color);
        width: 100%;
        p{
            padding: .3rem 0;
            font-size: 0.9rem;
            text-align:center;
        }
  }
`;

export default Navbar;
