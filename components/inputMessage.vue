<template>
  <div>
    <form action=""></form>
    <input 
      class="input" 
      type="text" 
      placeholder="Text input" 
      v-model="inputComment" 
      @keydown.enter="sendMessage"
    />
    <!-- <button class="button is-link" @click="sendMessage">Submit</button> -->
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
const db = firebase.firestore();

  export default {
    name: 'messageForm',
    data: () => ({
      // form入力データ
      inputComment: "",
    }),
    methods: {
      // コメント追加
      sendMessage() {
        const now = new Date()
        if(!this.inputComment) return;
        // コメントをFirestoreへ登録
        db.collection('rooms').doc(this.roomID).collection("chat").add({
          message: this.inputComment,
          // createdAt: now
        })
        console.log(this.roomID);
        console.log(this.inputComment);
        this.clear();
      },
      // Formの初期化
      clear() {
        this.inputComment = ""
      },
    },
    props: {
      roomID: String,
    }
  }
</script>