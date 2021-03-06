import React from "react";
import { Data } from "../Types/Type";
import { useSelector } from "react-redux";

const Navbar: React.FC = () => {
  const state: Data[] = useSelector((State: Data[]) => State);
  return (
    <nav className="navbar navbar-light bg-light" data-testid="nav-bar">
      <a href="/" className="navbar-brand">
        GitBookmark-manager
      </a>
      <div className="form-inline">
        <a href="/" className="navbar-brand">
          Home
        </a>
        <a href="/Search" className="navbar-brand">
          Search
        </a>
        <span className="navbar-brand text-info">
          <i className={"fas fa-bookmark mr-1"}></i>
          <span>{state.length}</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
