<template>
  <div>
    <div
      class="form-group"
      :class="{ 'form-group--error': $v.password.$error }"
    >
      <label class="form__label">Password</label>
      <input v-model.trim="$v.password.$model" class="form__input" />
    </div>
    <div v-if="!$v.password.required" class="error">Password is required.</div>
    <div v-if="!$v.password.minLength" class="error">
      Password must have at least
      {{ $v.password.$params.minLength.min }} letters.
    </div>
    <div
      class="form-group"
      :class="{ 'form-group--error': $v.repeatPassword.$error }"
    >
      <label class="form__label">Repeat password</label>
      <input v-model.trim="$v.repeatPassword.$model" class="form__input" />
    </div>
    <div v-if="!$v.repeatPassword.sameAsPassword" class="error">
      Passwords must be identical.
    </div>
    <tree-view
      :data="$v"
      :options="{ rootObjectKey: '$v', maxDepth: 2 }"
    ></tree-view>
    <p>{{ $v.repeatPassword }}</p>
  </div>
</template>

<script lang="ts">
import { validationMixin } from 'vuelidate'
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
      password: '',
      repeatPassword: ''
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  }
}
</script>

<style lang="scss" scoped></style>
