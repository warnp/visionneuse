import React from 'react';
import { render } from 'react-dom';


window.React = React;

let data = {
  id: 1,
  commentaire: 'Un commentaire'
};

class Comment extends React.Component {
  render() {
    let commentaire = this.props.commentaire;
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
  <Contenu data= { data } />,
  // React.createElement(Contenu, null),
  document.getElementById('content')
);
