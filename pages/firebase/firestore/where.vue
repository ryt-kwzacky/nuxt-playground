<template>
  <div>
    <h1>where</h1>
    <button @click="getTest">click</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { db } from '~/plugins/firebase'

export default Vue.extend({
  methods: {
    async getTest() {
      const testRef = db.collection('test')
      const test = await testRef.get()
      console.log(test)
    }
  }
})
</script>

<style lang="scss" scoped></style>
