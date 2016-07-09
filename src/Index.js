import React from 'react';
import { render } from 'react-dom';


window.React = React;

let data = [{
  id: 1,
  src: 'src/images/reactjs.png',
  jour: 1
},{
  id: 2,
  src: 'src/images/reactjs.png',
  jour: 1
}];

class Master extends React.Component {
  constructor() {
    super();
  }
  handleClick(value) {
    alert(value);
  }
  render() {
    return (
      <div>
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
        <img src="src/images/reactjs.png" />
      </div>
    );
  }
}

class Comment extends React.Component {
  render() {
    let commentaire = this.props.data.commentaire;
    return (
      <div className="comment">
        { commentaire }
      </div>
    );
  }
}

class Contenu extends React.Component {
  render() {
    return (
      <div >
        <h1>Hello!!!</h1>
        <Comment data= {this.props.data} />
      </div>
    );
  }
}

// const Wrapper1 = button(LeftButton);
// const Wrapper2 = button(RightButton);

render(
  <div>
    <Contenu data= { data } />
    <Image />
    <Master/>
  </div>,
  // React.createElement(Contenu, null),
  document.getElementById('content')
);
