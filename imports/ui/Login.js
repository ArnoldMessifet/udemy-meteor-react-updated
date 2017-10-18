import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Login to Short Lnk</h2>
        <div>login form here</div>
        <Link to="/signup">Have an account?</Link>
      </div>
    );
  }
}
