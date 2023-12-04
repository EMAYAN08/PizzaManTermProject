// import firebase from 'firebase'
// import firebaseConfig from './config'

// firebase.initializeApp(firebaseConfig)

// export default firebase

import AWS from 'aws-sdk';
import config from './config';

AWS.config.update({
  region: config.region,
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export default dynamoDB;
