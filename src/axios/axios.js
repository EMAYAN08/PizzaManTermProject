// import axios from 'axios'
// import firebaseConfig from '../firebase/config'

// const axiosInstance = axios.create({
//     baseURL: `${firebaseConfig.databaseURL}`
// })

// export default axiosInstance

import axios from 'axios';
import config from '../firebase/config';
import userPool from '../aws-cognito/aws-cognito';

const axiosInstance = axios.create({
  baseURL: 'YOUR_DYNAMODB_ENDPOINT', // Replace with your DynamoDB endpoint
  // headers: {
  //   'Content-Type': 'application/json',
  //   Authorization: 'Bearer ' + userPool.getCurrentUser().getSession((err, session) => {
  //     if (session) {
  //       return session.getIdToken().getJwtToken();
  //     }
  //     return null;
  //   }),
  // },
});

export default axiosInstance;
