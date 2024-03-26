<template>
  <div class="hello">
    {{ modelValue }}
    <select :value="modelValue" @change="submit">
      <option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'MySelect',
  props: {
    modelValue: String
  },
  model: {
    prop: 'modelValue',
    event: 'change1'
  },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ]
    }
  },
  mounted() {
    console.log(47, this.modelValue)
  },
  methods: {
    submit(e) {
      console.log(47, e.target.value)
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped></style>
