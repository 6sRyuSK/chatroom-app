<template>
  <section class="container">
    <div>
      <v-list 
        three-line
        >
        <template v-for="room in rooms">
          <v-list-tile
            :key="room.id"
            > 
            <v-list-tile-content>
              <nuxt-link :to="'/room/'+room.id">
              {{ room.name }}
              </nuxt-link>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="room.id"></v-divider>
        </template>
      </v-list>
    </div>
    <nuxt-link to="/about">About page</nuxt-link>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'

const db = firebase.firestore();


let doc;
let rooms = [];

function getRooms() {
  db.collection('rooms').onSnapshot(function(snapshot){
    snapshot.docChanges().forEach(function(change){
      if(change.type === "added"){
        doc = change.doc.data();
        rooms.push({name:doc.name, id: change.doc.id});
      }
    })
  })
  return rooms;
}

export default {
  data() {
    rooms = []
    return {
      rooms: getRooms()
    }
  }
}
</script>


