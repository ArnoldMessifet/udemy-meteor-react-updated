import React from 'react';

export default class AppLink extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h2>Your Links</h2>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    );
  }
}
