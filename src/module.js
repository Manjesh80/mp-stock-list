import React from 'react';
import Navigation from './navigation'


class MainComponent extends React.Component {
  render() {
  	return (
		  		<div>
		  			<Navigation />
		    		<div>Hello {this.props.name}</div>
		    	</div>
    		);
  }
}

React.render(
  <MainComponent name="Example" />,
  document.getElementById('content')
);

