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
        />
      </b-form-group>
      <b-form-group id="input-group-2" label="Пароль:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Введите пароль"
          required
        />
      </b-form-group>
      <p class="error-message" v-if="error">Неверный логин или пароль!</p>
      <b-button type="reset" variant="danger">Отмена</b-button>
      <b-button type="submit" variant="primary" @click="openNextPage()">Войти</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginForm',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      error: false
    }
  },
  methods: {
    ...mapActions({
      setIsAuth: 'setIsAuth'
    }),
    openNextPage () {
      const [isCorrectEmail, isCorrectPassword] = [
        this.form.email === 'vin@vin.com',
        this.form.password === '123'
      ]
      if (isCorrectEmail && isCorrectPassword) {
        this.$router.push('/dashboard')
        localStorage.setItem('isAuth', 'true')
        this.setIsAuth(true)
      }
      this.error = true
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

.error-message {
  font-size: 15px;
  color: red;
}

.btn-danger {
  margin-right: 70px;
}
</style>
