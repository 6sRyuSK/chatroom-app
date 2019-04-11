<template>
  <section class="container">
    <div>
      <ul id="example-1">
        
        <li v-for="message in chat" :key="message.id">
          <!-- <nuxt-link :to="'/room/'+room.id"> -->
          {{ message.message }}
          <!-- </nuxt-link> -->
        </li>
      </ul>
      <h1>{{$route.params.id}}</h1>
    </div>
    <nuxt-link to="/about">About page</nuxt-link>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import Logo from '~/components/Logo.vue'
let chat = [{message: "dummy", id: 1}];

const db = firebase.firestore();

let doc;



let params;
async function _params(p) {
  params = p;
  console.log(params);
  // db.collection("rooms").doc(params).collection("chat").onSnapshot(function(snapshot) {
  //   snapshot.docChanges().forEach(function(change) {
  //     if(change.type === "added"){
  //       doc = change.doc.data();
  //       console.log(doc);
  //       rooms.push({name:doc.name, id: change.doc.id});
  //     }
  //   });
  // });
  return;
}
export default {
  components: {
    Logo
  },
  data() {
    return {
      chat,
    }
  },
  validate ({ params }) {
    // 数値でなければならない
    // return /^\d+$/.test(params.id)
    _params(params.id);
    return true
  }
}
</script>