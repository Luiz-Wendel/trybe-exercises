import React from 'react';

class User extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      user: {},
    };
  }

  async fetchUser() {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();

    const user = data.results[0];

    this.setState({
      loading: false,
      user,
    });
  }

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    const { loading } = this.state;

    const loadingElement = <span>Loading...</span>

    return (
      <>
        { loading ? loadingElement : <h1>Fetched</h1>}
      </>
    );
  }
}

export default User;
