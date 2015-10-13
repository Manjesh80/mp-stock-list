import React from 'react';

export default class Header extends React.Component {
    render() {
      return (
        <header className = "page-head  page-head--masthead">
          <div className = "wrapper">
            
            <h1 className="page-head__text">
              { this.props.siteTitle }
            </h1>
          </div>
        </header>);
      }
    }
