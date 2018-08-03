<template>
    <ul>
        <li v-for="message in messages" v-bind:key="message">
            {{ message }}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    messages: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px 10px;
}
a {
  color: #42b983;
}
</style>
