import React from "react";
import App from "../components/App";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    this.setState({
      users: this.props.users
    });
  }
  render() {
    return <App users={this.state.users} />;
  }
}

export default withRouter(
  connect(state => ({
    users: state.users.userList
  }))(AppContainer)
);
