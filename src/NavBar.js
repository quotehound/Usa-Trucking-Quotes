import React, { Component } from 'react'


import Logo from './Assets/logo.png';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="relative py-4 px-4 lg:px-10 bg-white z-10">
    <div className="flex justify-between items-center">
      <a className="text-xl text-white font-semibold" href="#" data-config-id="brand">
        <img className="h-7" src={Logo} alt="" width="auto" />
      </a>
      <a className="inline-block px-6 py-2 text-sm text-white font-bold leading-loose bg-blue-400 hover:bg-blue-600 rounded transition duration-200" href="tel:8885671448" data-config-id="04_button">(888) 567-1448</a>

    </div>
  </nav>
            </div>
        )
    }
}


export default NavBar