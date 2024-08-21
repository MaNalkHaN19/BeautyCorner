import Link from "next/link";
import React from "react";
import Image from "next/image";
import classes from "./mainheader.module.css";
import logoImageImg from "/assets/logoImage.png";
import MainHeaderBackground from "./mainheaderBackground";
import NavLink from "./navLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logoImage} href="/">
          <Image src={logoImageImg} alt="Cosmetics Product Logo" priority />
          BeautyCorner
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/products">Browse Products</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
