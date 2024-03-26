<template>
  <div class="hello">
    <MySelect v-model="value" />
    <button @click="show">点击</button>
    <MyInput v-model="iptVal" />
    {{ iptVal }}

    <i class="ri-arrow-up-circle-fill" style="font-size: 40px; color: red"></i>
  </div>
</template>

<script>
import MySelect from './MySelect.vue'
import MyInput from './MyInput.vue'

export default {
  name: 'HelloWorld',
  components: {
    MySelect,
    MyInput
  },
  data() {
    return {
      value: '选项5',
      iptVal: '初始值'
    }
  },
  methods: {
    show() {
      console.log(26, this.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
