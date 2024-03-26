<template>
  <div>
    <cus-button msg="提交" width="90px" bgColor="red" @click="onClick"/>
    <cus-link />
  </div>
</template>

<script>


export default {
  name: 'App',
  methods: {
    onClick () {
      console.log(32131313131);
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
