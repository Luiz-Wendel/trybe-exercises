import React from 'react';
import style from './style.module.css';

class User extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      user: {},
    };

    this.fetchUser = this.fetchUser.bind(this);
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
    const { loading, user } = this.state;

    const loadingElement = <span>Loading...</span>

    return (
      <>
        {
          loading ? loadingElement : (
              <div className={ style.card }>
                <img src={ user.picture.thumbnail } alt="User" />
                <h1>{ user.name.first }</h1>
                <p>{ user.email }</p>
                <p>{ user.dob.age }</p>
              </div>
            )
        }
      </>
    );
  }
}

export default User;
