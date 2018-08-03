<template>
  <div id="app">
    <HelloWorld msg="Testing in Vue with Jest"/>
    <MessageList :messages="messages"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MessageList from './components/MessageList.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    MessageList,
  },
  data: () => ({ messages: ['Hey Damien', 'Howdy Danielle'] }),
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
