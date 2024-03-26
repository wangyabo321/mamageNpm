<template>
  <button 
    :style="{ 
      width: width, 
      height: height, 
      backgroundColor: bgColor,
      borderColor: bgColor, 
      color: color, 
      fontSize: size,
      borderRadius: round, 
      cursor: disable ? 'not-allowed' : 'pointer'
    }"
    style="border-width: 1px; border-style: solid;"
    @click="onClick">{{ message }}</button>
</template>

<script>
export default {
  name: 'cus-button',
  props: {
    message: {
      type: String,
      default: '按钮'
    },
    width: {
      type: String,
      default: '85px'
    },
    height: {
      type: String,
      default: '40px'
    },
    bgColor: {
      type: String,
      default: '#409eff'
    },
    size: {
      type: String,
      default: '14px'
    },
    color: {
      type: String,
      default: '#fff'
    },
    round: {
      type: String,
      default: '4px'
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      if(this.disable) return;
      this.$emit('click')
    }
  }
}
</script>
