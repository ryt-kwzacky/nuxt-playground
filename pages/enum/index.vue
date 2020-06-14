<template>
  <div>{{ enumTest() }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
enum Test {
  Test1 = 0,
  Test2 = 1,
  Test3 = 2
}

export default Vue.extend({
  methods: {
    enumTest() {
      return Test.Test1
    }
  }
})
</script>

<style lang="scss" scoped></style>
