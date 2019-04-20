<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="isClick_removeRoomDialog"
      width="500"
    >
        
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="onClick_removeRoomDialog()"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="() => {removeRoom(); onClick_removeRoomDialog();}"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
const db = firebase.firestore();


  export default {
    name: 'removeRoomDialog',
    methods: {
      removeRoom() {
        // コメントをFirestoreへ登録
        db.collection("rooms").doc(this.$store.getters.isRemoveTargetRoomID).delete().then(function() {
          console.log("Document successfully deleted!");
        }).catch(function(error) {
          console.error("Error removing document: ", error);
        });
      },
      onClick_removeRoomDialog() {
        this.$store.dispatch('onClick_removeRoomDialog')
      }
    },
    computed: {
      isClick_removeRoomDialog() { return this.$store.getters.isClick_removeRoomDialog}
    },
  }
</script>