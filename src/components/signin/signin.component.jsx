import React from "react";
import { connect } from "react-redux";

import FormInput from "../../components/from-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.action";

import "./signin.style.scss";

class Signin extends React.Component {
  constructor(Props) {
    super(Props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    try {
      emailSignInStart(email, password);
      this.setState({
        email: "",
        password: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h2 className="title">I already have an Account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            required
            value={this.state.email}
            label="Email"
            onChange={this.handleChange}
          />

          <FormInput
            name="password"
            type="password"
            required
            value={this.state.password}
            label="password"
            onChange={this.handleChange}
          />

          <div className="buttons">
            <CustomButton type="submit" value="Login Now" />
            <CustomButton
              type="button"
              loginWithGoogle="true"
              value="Sign in with Google"
              onClick={googleSignInStart}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(Signin);
