import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import './App.css';
import MessageWindow from './Components/MessageWindow/MessageWindow';
import UserAuth from './Components/UserAuth/UserAuth';

function App(props) {
  return (
    <Fragment>
      <Switch>
        {props.currentUser !== null && <Route path='/message-window' component={MessageWindow} />}
        <Route path='/' component={UserAuth} />
      </Switch>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, null)(App);
