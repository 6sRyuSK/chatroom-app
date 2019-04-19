<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="isClick_addRoomDialog"
      width="500"
    >
        
      <v-card>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap row>
              
              <v-flex xs9>
                <v-text-field
                  placeholder="ルーム名を入力"
                  v-model="inputRoomName"
                ></v-text-field>
                
              </v-flex>
              <v-flex xs3 >
                <v-btn
                style="margin:16px"
                  color="blue lighten-2"
                  center
                  @click="() => {addRoom(); onClick_addRoomDialog();}"
                >
                  追加
                </v-btn>
              </v-flex>



            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
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
      onClick_addRoomDialog() {
        this.$store.dispatch('onClick_addRoomDialog')
      }
    },
    computed: {
      isClick_addRoomDialog() { return this.$store.getters.isClick_addRoomDialog}
    }
  }
</script>