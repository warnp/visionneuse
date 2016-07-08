import React from 'react';
import { render } from 'react-dom';


window.React = React;

let data = {
  id: 1,
  src: 'src/images/reactjs.png',
  jour: 1
};

// const button = (Component, state) => class extends React.Component {
class Master extends React.Component {
  constructor(props) {
    super(props);
    // this.state = state;
    // this.props.buttonSide = '';
    // this.Component = Component;
    this.handleClick = this.handleClick.bind(this);
  }
  // handleClick(text) {
  //   alert(text);
  // }
  render() {
    // const childrenWithProps = React.Children.map(this.props.children,
    // (child) => React.cloneElement(child, {
    //   handleClick: this.handleClick
    // }))
    return (
      <div>
        // {childrenWithProps}
        <Button direction='left'/>
        <Button direction='right'/>
      </div>
    );
  }
}

class Wrapper extends React.Component {
  render() {
    return (
      <Master>
        <Button direction='left' />
        <Button direction='right' />
      </Master>
    );
  }
}

class Button extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(text) {
    alert(text)
  }
  render() {
    return (
      <div onClick={() => this.handleClick(this.props.direction)}>
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
    <Master />
  </div>,
  // React.createElement(Contenu, null),
  document.getElementById('content')
);
