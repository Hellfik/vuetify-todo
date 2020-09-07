<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};

</script>
´
<style>
@import url('https://fonts.googleapis.com/css2?family=Monda&display=swap');
  *{
    font-family: 'Monda', sans-serif;
  }

</style>
