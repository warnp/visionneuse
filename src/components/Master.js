import React from 'react';
import Button from './Button';
import Image from './Image';
import styles from '../styles/style.css';
import data from '../data'

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
  handleKey(key) {
    alert(key);
  }
  render() {
    let path = data[this.state.index].src;

    return (

      <div>
        <div className={styles.photo}>
          <Image source={path} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.arrowLeft} onClick={() => this.handleClick('left')}>
            <Button direction="left" />
          </div>
          <div className={styles.arrowRight} onClick={() => this.handleClick('right')}>
            <Button direction="right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Master;
