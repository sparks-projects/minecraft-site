import React from 'react';

class NavigationBar extends React.Component {
  render() {
    return <div className="navigation-bar">
              <div>
                {this.props.children}
              </div>
            </div>;
  }
}

export default NavigationBar;