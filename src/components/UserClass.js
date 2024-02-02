import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;
    return (
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h2>Location : Pune, Maharashtra</h2>
        <h3>Contact : 8806477475</h3>
      </div>
    );
  }
}

export default UserClass;
