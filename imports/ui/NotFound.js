import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
  render() {
    return <p>NotFound component here - <Link to="/">Go home</Link></p>;
  }
}
