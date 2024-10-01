"use client";
import { useState } from "react";
import Link from "next/link";
import "./headerresp.css";

export function HeaderResp() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="nav-container-responsive">
      <button className="toggle-btn" onClick={toggleNav}>
        {" "}
        ☰{" "}
      </button>
      <div className={`nav-r ${showNav ? "show" : ""}`}>
        <button className="close-btn" onClick={toggleNav}>
          X
        </button>
        <nav className="nav-responsive">
          <ul className="nav-ul">
            <li className="link-resp">
              <Link href="/nosotros">NOSOTROS</Link>
            </li>
            <li className="link-resp">
              <Link href="#servicios">SERVICIOS</Link>
            </li>
            <li className="link-resp">
              <Link href="#destinos">DESTINOS</Link>
            </li>
            <li className="link-resp">
              <Link href="#clientes">CLIENTES</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
