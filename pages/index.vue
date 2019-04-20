<template>
  <section class="container">
    <div>
      
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        
        <v-btn color="blue" fab @click="onClick_addRoomDialog"><v-icon dark>add</v-icon></v-btn>
      </v-toolbar>
      <addRoomForm />
      <removeRoomDialog />
      <v-list 
        three-line
        >
        <template v-for="room in rooms">
          <v-list-tile
            :key="room.id"
            > 
            <v-list-tile-content>
              <v-layout wrap row style="justify-content: center; align-items: center;">
                <nuxt-link :to="'/room/'+room.id">
                  {{ room.name }}
                </nuxt-link>
                <v-btn color="red darken-3" @click="() => onClick_removeRoomDialog(room.id)" style="position:absolute;right:0"><v-icon dark>remove</v-icon></v-btn>
              </v-layout>
              
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
import addRoomForm from '~/components/addRoom'
import removeRoomDialog from '~/components/removeRoomDialog'

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
      rooms: getRooms(),
      dialog: false,
    }
  },
  components: {
    addRoomForm,
    removeRoomDialog,
  },
  methods: {
    onClick_addRoomDialog() {
      this.$store.dispatch('onClick_addRoomDialog')
    },
    onClick_removeRoomDialog(roomID) {
      this.$store.dispatch('setRemoveTargetRoomID', roomID)
      this.$store.dispatch('onClick_removeRoomDialog')
    },
  }
}
</script>


