import React from 'react';
import { render } from 'react-dom';


window.React = React;

let data = [{
  src: 'src/images/reactjs.png',
  jour: 1
}, {
  src: 'src/images/Genesis32XSCD - Golden Axe - Ax Battler.png',
  jour: 1
}];

let preventOutOfIndex = (index, tableSize) => {
  alert(index);
  if (index >= tableSize) {
    return 0;
  } else if ( index < 0) {
    return tableSize - 1;
  } else {
    return index;
  }
}

class Master extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }
  handleClick(value) {
    switch (value) {
      case 'left':
        this.setState({ index: preventOutOfIndex(this.state.index - 1, data.length) });
        break;
      case 'right':
        this.setState({ index: preventOutOfIndex(this.state.index + 1, data.length) });
        break;
      default:
        break;

    }
  }
  render() {
    return (
      <div>
        <Image source={data[this.state.index].src} />
        <div onClick={() => this.handleClick('left')}>
          <Button direction="left" />
        </div>
        <div onClick={() => this.handleClick('right')}>
          <Button direction="right" />
        </div>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div>
        {this.props.direction}
      </div>
    );
  }
}

class Image extends React.Component {
  render() {
    return(
      <div>
        <img src={this.props.source} />
      </div>
    );
  }
}

render(
  <div>
    <Master/>
  </div>,
  document.getElementById('content')
);
