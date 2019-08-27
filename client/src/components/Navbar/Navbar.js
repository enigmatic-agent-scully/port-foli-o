import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className='nav-container'>
        <nav id='navbar'>
          <ul id='tab-list'>
            <li className='nav-item'>about</li>
            <li className='nav-item'>portfolio</li>
            <li className='nav-item'>contact</li>
            <li className='nav-item'>
              <a href='./../../resume/AJ_WebDev08192019.pdf'>resume</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
