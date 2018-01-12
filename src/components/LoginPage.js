import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control</p>
      <button className="button__login button__login--google" onClick={startLoginGoogle}><i className="fa fa-google" aria-hidden="true"></i>&nbsp;&nbsp;Login With Google</button>
      <button className="button__login button__login--github"><i className="fa fa-github" aria-hidden="true"></i>&nbsp;&nbsp; Login With Github</button>
      <button className="button__login button__login--facebook"><i className="fa fa-facebook" aria-hidden="true"></i>&nbsp;&nbsp; Login With Facebook</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
