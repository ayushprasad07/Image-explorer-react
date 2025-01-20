import React from 'react';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top d-flex justify-content-between align-items-center`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">ImageExplorer</a>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input 
          className="form-check-input"
          onClick={props.toggleMode} // Call the toggleMode function passed from App
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={props.mode === 'dark'} // Checkbox will be checked if mode is 'dark'
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable {props.mode === 'light' ? 'dark' : 'light'} mode
        </label>
      </div>
    </nav>
  );
}
