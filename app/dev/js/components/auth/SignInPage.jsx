import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signIn } from '@app-actions/auth';
import { HOME } from '@app-constants/routes';

export class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    this.props.signIn();
  }

  render() {
    const { profile } = this.props;

    if (profile && profile.email) {
      return <Redirect to={HOME} />
    }

    return (
      <div className="content c-flex c-flex--ai_center">
        <div className="auth text-center">
          <button className="button button--default button--raised button--raised_indigo" type="button" onClick={this.signIn}>SIGN IN WITH GITHUB</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signIn }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);