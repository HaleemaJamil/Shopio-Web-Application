import React from 'react';
import './Header.css'; 
import { FaBars } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <FaBars />
      </div>
      <div className="center">
        LOGO
      </div>
      <div className="right">
        <CiSearch />
        <IoPerson />
        <CiShoppingCart />
      </div>
    </div>
  );
}

export default Header;
