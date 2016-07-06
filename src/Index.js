import React from 'react';
import { render } from 'react-dom';


window.React = React;

let data = {
  id: 1,
  commentaire: 'Un commentaire'
};

const button = (Component, state) => class extends React.Component {
  constructor(props) {
    super(props);
    // this.state = state;
    // this.props.buttonSide = '';
    // this.Component = Component;
    // this.handleclick = this.handleclick.bind(this, 'Bonjour!');
  }
  // handleclick(text, e) {
  //   alert(text);
  // }
  render() {
    return (
      // <div onClick={this.handleclick}>
      //   Right button
      // </div>
      <Component {...this.props} />
    );
  }
}

class LeftButton extends React.Component {
  constructor(props){
    super(props);
    this.handleclick = this.handleclick.bind(this, 'Go to the left!');
  }
  handleclick(text, e){
    // this.props.buttonSide = 'left';
    alert(text);
  }
  render() {
    return (
      <div onClick={this.handleclick} >
        Left button
      </div>
    );
  }
}

class RightButton extends React.Component {
  constructor(props){
    super(props);
    this.handleclick = this.handleclick.bind(this, 'Go to the Right!');
  }
  handleclick(text, e){
    // this.props.buttonSide = 'left';
    alert(text);
  }
  render() {
    return (
      <div onClick={this.handleclick} >
        Right button
      </div>
    );
  }
}

class Image extends React.Component {
  render() {
    return(
      <div>
        <img src="../images/reactjs.png" />
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

const Wrapper1 = button(LeftButton);
const Wrapper2 = button(RightButton);

render(
  <div>
    <Contenu data= { data } />
    <Image />
    <Wrapper1 />
    <Wrapper2 />
  </div>,
  // React.createElement(Contenu, null),
  document.getElementById('content')
);
