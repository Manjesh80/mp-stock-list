import React from 'react';
import Header from './components/header';

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Header siteTitle="MP Stock Tracker" />
        <div className="wrapper">
          <div className="layout">
            <section className="layout__item  desk-three-fifths">
                <h2>{this.props.pageTitle }</h2>
            </section>
            <section class="layout__item  desk-three-tenths  desk-push-one-tenth">
              { this.props.children}
            </section>
          </div>
        </div>
      </div>

    );
  }
}
