<template>
  <section class="container">
    <div>
      <v-list 
        three-line 
        style="max-height: 80vh"
        class="scroll-y"
        >
        <template v-for="message in messages">
          <v-list-tile
              :key="message.id"
          >
            <!-- <v-list-tile-avatar>
              <img :src="message.avatar">
            </v-list-tile-avatar> -->

            <v-list-tile-content>
              <v-list-tile-sub-title class="text--primary subheading">{{message.message}}</v-list-tile-sub-title>
              <v-list-tile-sub-title>
                {{message.createdAt.toLocaleString()}}
              </v-list-tile-sub-title>
            </v-list-tile-content>

          </v-list-tile>
          <v-divider :key="message.id"></v-divider>
        </template>
      </v-list>
    </div>
    <!-- <nuxt-link to="/about">About page</nuxt-link> -->
    <messageForm :roomID="$route.params.id" />
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import messageForm from '~/components/inputMessage'

const db = firebase.firestore();

let messages = [];
let doc;
let createdAt;
function getMessage(params) {
  db.collection('rooms').doc(params).collection("chat").orderBy("createdAt", "asc").onSnapshot(function(snapshot){
    snapshot.docChanges().forEach(function(change){
      if(change.type === "added"){
        doc = change.doc.data();
        createdAt = new Date(doc.createdAt.seconds * 1000);
        messages.push({message: doc.message, id: change.doc.id, createdAt})
        
      }
    })
  })
  return messages;
}

export default {
  components: {
    messageForm
  },
  validate ({ params }) {
    // 数値でなければならない
    // return /^\d+$/.test(params.id)
    // _params(params.id);
    return true
  },
  data(){
    messages = [];
    return {
      messages: getMessage(this.$route.params.id)
    }
  }
}
</script>