<template>
  <div id="app">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Имя:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Введите имя"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Ваш пароль:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Введите пароль"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Войти</b-button>
      <b-button type="reset" variant="danger">Отмена</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  display: grid;
  align-self: center;
  justify-self: center;
}

form {
  width: 300px;
  height: 200px;
}
</style>
