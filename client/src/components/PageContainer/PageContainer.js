import React from 'react';
import Navbar from './../Navbar/Navbar';
import './PageContainer.css';

class PageContainer extends React.Component {
  render() {
    return (
      <div className='page-container'>
        <Navbar />
      </div>
    );
  }
}

export default PageContainer;
