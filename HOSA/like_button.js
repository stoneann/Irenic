'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer =
document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

const e = React.createElement;

// diplays a "Like" button
return e(
    'button',
    {onClick: () => this.setState({liked: true})},
    'Like'
);

// displays like button with jsx instead of just react
return (
    <button onClick={() => this.setState({liked: true})}>like</button>
);