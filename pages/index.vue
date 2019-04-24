<template>
  <section class="container">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-btn color="blue" fab @click="onClick_addRoomDialog"><v-icon dark>add</v-icon></v-btn>
    </v-toolbar>
    <roomList></roomList>
  </section>
</template>

<script>
import roomList from '~/components/roomList'

export default {
  components: {
    roomList,
  },
  methods: {
    onClick_addRoomDialog() {
      this.$store.dispatch('onClick_addRoomDialog')
    }
  }
}
</script>


