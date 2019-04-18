<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <v-text-field
          placeholder="ルーム名を入力"
          box
          v-model="inputRoomName" 
        ></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-btn color="blue" @click="addRoom">追加</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
const db = firebase.firestore();

  export default {
    name: 'messageForm',
    data: () => ({
      // form入力データ
      inputRoomName: "",
    }),
    methods: {
      // コメント追加
      addRoom() {
        if(!this.inputRoomName) return;
        // コメントをFirestoreへ登録
        db.collection('rooms').add({
          name: this.inputRoomName
        })
        console.log(this.inputRoomName);
        this.clear();
      },
      // Formの初期化
      clear() {
        this.inputRoomName = ""
      },
    },
    props: {
      roomID: String,
    }
  }
</script>