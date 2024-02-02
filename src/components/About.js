import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor !");
  }

  componentDidMount() {
    // console.log("Parent component did mount !");
  }

  render() {
    // console.log("Parent render !");
    return (
      <div>
        <h1>about us</h1>
        <UserClass name={"Sanket Arak Class"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>about us</h1>
//       <User />

//       <UserClass name={"Sanket Arak Class"} />
//     </div>
//   );
// };

export default About;
