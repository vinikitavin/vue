<template>
  <div>
    <b-form @submit.prevent="">
      <b-form-group
        id="input-group-1"
        label="Электронная почта:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Введите e-mail"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Пароль:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Введите пароль"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="reset" variant="danger">Отмена</b-button>
      <b-button type="submit" variant="primary" @click="openNextPage()">Войти</b-button>
      <router-link to="/dashboard">Перейти к Dash</router-link>
    </b-form>
  </div>
</template>

<script>

export default {
  name: 'LoginForm',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    openNextPage () {
      if ((this.form.email === 'vin@vin.com') && (this.form.password === '123')) {
        this.$router.push('/dashboard')
      }
    }
  }
}
</script>

<style scoped>
form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border: 2px solid black;
}
.form-group {
  margin-bottom: 20px;
}
.btn-danger {
  margin-right: 70px;
}
</style>
