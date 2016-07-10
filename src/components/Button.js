import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div>
        {this.props.direction}
      </div>
    );
  }
}

export default Button;
