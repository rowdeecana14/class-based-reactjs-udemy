import { Fragment, useState, useEffect, Component } from "react";
import UsersContext from "../store/UserContext";
import Users from "./Users";
import classes from "./UserFinder.module.css";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      if (prevState.searchTerm !== this.state.searchTerm) {
        // Filter users based on the searchTerm
        const filteredUsers = this.context.users.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        );

        this.setState({ filteredUsers });
      }
    }
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input
            type="search"
            onChange={this.searchChangeHandler}
            value={this.state.searchTerm}
            placeholder="Search Users"
          />
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}

export default UserFinder;
