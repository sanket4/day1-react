import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "abc",
        location: "asdf",
        avatar_url: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sanket4");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="" src={avatar_url} />
        <h1>Name : {name}</h1>
        <h2>Location : {location}, Maharashtra</h2>
        <h2>Contact : 8806477475</h2>
      </div>
    );
  }
}

export default UserClass;
