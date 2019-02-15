import React from 'react';
import { Link } from 'react-router-dom';

import { SIGN_IN } from '@app-constants/routes';

export class Account extends React.Component {
  render() {
    const { profile } = this.props;

    const renderAccount = () => {
      if (profile === undefined) {
        return <Link className="account__link" to={SIGN_IN}>Sign in</Link>
      } else if (profile && profile.email) {
        return <p>Singed in</p>;
      }

      return null;
    };

    return (
      <div className="account">
        {renderAccount()}
      </div>
    );
  }
}

export default Account;
