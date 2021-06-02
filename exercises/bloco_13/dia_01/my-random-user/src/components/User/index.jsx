import React from 'react';

class User extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
    };
  }

  async fetchUser() {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();

    const user = data.results[0];

    this.setState({
      user,
    });
  }

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return <div />;
  }
}

export default User;
