import { initializeApp } from 'firebase/app';
import config from './config.js'

 const initializeFirebaseApp = async () => {
  try {
    await initializeApp(config.firebaseConfig);
    console.log('Firebase initialized successfully');
  
  } catch (error) {
    console.error('Firebase ini tialization error:', error.stack);
   console.log(error)
    process.exit(1);
  }
};

export default initializeFirebaseApp