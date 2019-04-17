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

const db = firebase.firestore();


let doc;
let rooms = [];
db.collection("rooms").onSnapshot(function(snapshot) {
  snapshot.docChanges().forEach(function(change) {
    if(change.type === "added"){
      doc = change.doc.data();
      console.log(change.doc);
      rooms.push({name:doc.name, id: change.doc.id});
    }
  });
});

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


