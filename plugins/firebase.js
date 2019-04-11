import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDZxtrQsdMqsPkhv1aVTaSfp5bkjb7wCdk',
    authDomain: 'nuxt-chatroom.firebaseapp.com',
    databaseURL: 'https://nuxt-chatroom.firebaseio.com',
    projectId: 'nuxt-chatroom',
    storageBucket: '',
    messagingSenderId: '655487086767'
  })
}

export default firebase
