<template>
  <section class="container">
    <div>
      <ul id="example-1">
        
        <li v-for="room in rooms" :key="room.id">
          <nuxt-link :to="'/room/'+room.id">
          {{ room.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-link to="/about">About page</nuxt-link>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import Logo from '~/components/Logo.vue'
const testtext = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
let rooms = [{name: "dummy", id: 1}];



const db = firebase.firestore();


// db.collection("rooms").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//     rooms.push({name:doc.data().name, id: doc.id});
//   })
// })

let roomname
// const pushRooms = (querySnapshot) => {
//   // rooms.push({name:doc.data().name, id: doc.id});
//   querySnapshot.forEach(function(doc) {
//       const t = doc.data();
//       console.log(t);
//       // todolist.push({todoId: doc.id, title: t.title, detail: t.detail, deadLine: t.deadLine, importance: t.importance, done: t.done})
//     });
// }
// db.collection("rooms").onSnapshot(pushRooms);
let doc;
db.collection("rooms").onSnapshot(function(snapshot) {
  snapshot.docChanges().forEach(function(change) {
    if(change.type === "added"){
      doc = change.doc.data();
      console.log(change.doc);
      rooms.push({name:doc.name, id: change.doc.id});
    }
    // rooms.push({name:doc.data().name, id: doc.id});
    // console.log(doc.docChanges)
    // Snapshot.docChanges.forEach(function(change) {
    //   if(change.type === "added"){
    //     console.log(change.doc.data());
    //     // console.log("New city: ", change.doc.data());
    //   }
    // })
  });

});


// querySnapshot.docChanges.forEach(function(change) {
//     if(change.type === "added"){
//       console.log(change.doc.data());
//     }
//     // rooms.push({name:doc.data().name, id: doc.id});
//     // console.log(doc.docChanges)
//   });












export default {
  components: {
    Logo
  },
  data() {
    return {
      rooms
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
