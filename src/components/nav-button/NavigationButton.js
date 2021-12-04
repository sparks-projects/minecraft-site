import React from 'react';

class NavigationButton extends React.Component {
  render() {
    return <div className="navigation-button">
             <div>
               {this.props.children}
             </div>
           </div>;
  }
}

export default NavigationButton;