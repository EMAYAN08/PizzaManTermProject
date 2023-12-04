// import React from 'react'
// import { Redirect } from 'react-router'
// import { connect } from 'react-redux'

// import firebase from '../../../firebase/firebase'

// import * as actions from '../../../store/actions/actions'

// function Logout(props) {
//     if (props.user) {
//         props.clearCart()
//         props.clearOrders()
//         props.clearAddress()
//         firebase.auth().signOut()
//     }

//     return (
//         <Redirect to="/" />
//     )
// }

// const mapStateToProps = state => ({
//     user: state.auth.user
// })

// const mapDispatchToProps = dispatch => ({
//     clearCart: () => dispatch(actions.clearCart()),
//     clearOrders: () => dispatch(actions.clearOrders()),
//     clearAddress: () => dispatch(actions.clearAddress())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Logout)


// src/components/Pages/Logout/Logout.js

import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actions';
import userPool from '../../../aws-cognito/aws-cognito';

function Logout(props) {
  useEffect(() => {
    const signOut = async () => {
      try {
        const currentUser = userPool.getCurrentUser();

        if (currentUser) {
          currentUser.signOut();
        }

        props.clearCart();
        props.clearOrders();
        props.clearAddress();
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };

    signOut();
  }, [props]);

  return <Redirect to="/" />;
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(actions.clearCart()),
  clearOrders: () => dispatch(actions.clearOrders()),
  clearAddress: () => dispatch(actions.clearAddress()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
