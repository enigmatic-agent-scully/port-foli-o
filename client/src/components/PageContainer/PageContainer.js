import React from 'react';
import Navbar from './../Navbar/Navbar';
import EntryForm from './../EntryForm.js/EntryForm';
import './PageContainer.css';

class PageContainer extends React.Component {
  render() {
    return (
      <div className='page-container'>
        <Navbar />
        <EntryForm />
      </div>
    );
  }
}

export default PageContainer;
