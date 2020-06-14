<template>
  <div>
    <div v-for="(test, index) in tests" :key="index">
      <div v-if="index === 0">
        <p>this is the first element</p>
      </div>
      <div v-if="index !== 0">
        <p>this is not first element</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return { tests: ['test1', 'test2', 'test3'] }
  }
})
</script>

<style lang="scss" scoped></style>
