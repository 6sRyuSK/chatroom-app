<template>
  <section class="container">
    <div>
      <ul id="example-1">
        
        <li v-for="message in messages" :key="message.id">
          <!-- <nuxt-link :to="'/room/'+room.id"> -->
          {{ message }}
          <!-- </nuxt-link> -->
        </li>
      </ul>
      <h1>{{$route.params.id}}</h1>
    </div>
    <nuxt-link to="/about">About page</nuxt-link>
    <messageForm :roomID="$route.params.id" />
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import messageForm from '~/components/inputMessage'

const db = firebase.firestore();

let messages = [];
let doc;
function getMessage(params) {
  db.collection('rooms').doc(params).collection("chat").onSnapshot(function(snapshot){
    snapshot.docChanges().forEach(function(change){
      if(change.type === "added"){
        doc = change.doc.data();
        messages.push({message: doc.message, id: change.doc.id})
        console.log(messages);
        
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