<template>
  <div>
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Name</label>
      <input v-model.trim="$v.name.$model" class="form__input" />
    </div>
    <div v-if="!$v.name.required" class="error">Field is required</div>
    <div v-if="!$v.name.minLength" class="error">
      Name must have at least {{ $v.name.$params.minLength.min }} letters.
    </div>
    <tree-view
      :data="$v.name"
      :options="{ rootObjectKey: '$v.name', maxDepth: 2 }"
    ></tree-view>
    <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
      <label class="form__label">Age</label>
      <input v-model.trim.lazy="$v.age.$model" class="form__input" />
    </div>
    <div v-if="!$v.age.between" class="error">
      Must be between {{ $v.age.$params.between.min }} and
      {{ $v.age.$params.between.max }}
    </div>
    <span tabindex="0">Blur to see changes</span>
    <tree-view
      :data="$v.age"
      :options="{ rootObjectKey: '$v.age', maxDepth: 2 }"
    ></tree-view>
    <p>{{ $v }}</p>
    <p>{{ $v.name }}</p>
  </div>
</template>

<script lang="ts">
import { validationMixin } from 'vuelidate'
import { required, minLength, between } from 'vuelidate/lib/validators'
import Vue from 'vue'

export default Vue.extend({
  mixins: [validationMixin],
  data() {
    return {
      name: '',
      age: 0
    }
  },
  computed: {},
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  }
})
</script>

<style lang="scss" scoped></style>
