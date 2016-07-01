import React from 'react';
import { render } from 'react-dom';


window.React = React;

let data = {
  id: 1,
  commentaire: 'Un commentaire'
};

const leftButton = {
  getDefaultProps: () => {
    return (
      <div>
        TOTO
      </div>
    )

  }
};

class Button extends React.Component {
  constructor() {
    super();

    this.handleclick = this.handleclick.bind(this);
  }
  handleclick() {
    alert("Go to the next photo");
  }
  render() {
    console.log(this.props);
    return (
      <div onClick={this.handleclick}>
        Right button
      </div>
    );
  }
}

React.reactMixin.onClass(Button, leftButton);

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

render(
  <div>
    <Contenu data= { data } />
    <NextButton />
  </div>,
  // React.createElement(Contenu, null),
  document.getElementById('content')
);
