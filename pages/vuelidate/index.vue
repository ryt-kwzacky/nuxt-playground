<template>
  <div>
    <div>
      <label>Name</label>
      <input v-model.trim="form.name" />
      <div v-if="!$v.form.name.required">Field is required</div>
      <div v-if="!$v.form.name.minLength">
        Name must have at least
        {{ $v.form.name.$params.minLength.min }} letters.
      </div>
      <div>
        <label>Age</label>
        <input v-model.trim.lazy="form.age" />
        <div v-if="!$v.form.age.between">
          Must be between {{ $v.form.age.$params.between.min }} and
          {{ $v.form.age.$params.between.max }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { validationMixin } from 'vuelidate'
import Vue from 'vue'
import { FormParams, validations } from './FormParamsBuilder'

interface DataType {
  form: FormParams
}

export default Vue.extend({
  mixins: [validationMixin],
  data() {
    return {
      form: { name: 'default', age: 0 }
    }
  },
  validations: {
    form: validations
  }
})
</script>

<style lang="scss" scoped></style>
