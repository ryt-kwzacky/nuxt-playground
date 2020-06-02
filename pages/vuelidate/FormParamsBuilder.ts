import { required, minLength, between } from 'vuelidate/lib/validators'

export interface FormParams {
  name: string
  age: number
}

export const validations = {
  name: {
    required,
    minLength: minLength(4)
  },
  age: {
    between: between(10, 50)
  }
}
