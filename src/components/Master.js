import React from 'react';
import Button from './Button';
import Image from './Image';

let data = [{
  src: 'images/reactjs.png',
  jour: 1
}, {
  src: 'images/Genesis32XSCD - Golden Axe - Ax Battler.png',
  jour: 1
}];

let preventOutOfIndex = (index, tableSize) => {
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
    let path = data[this.state.index].src;
    return (
      <div>
        <Image source={path} />
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

export default Master;
