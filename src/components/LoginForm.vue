<template>
  <div class="login-form">
    <b-form class="login-form__form">
      <b-form-group
        class="login-form__email"
        id="input-group-1"
        label="Электронная почта:"
        label-for="input-1"
      >
        <b-form-input
          class="login-form__email-input"
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Введите e-mail"
          required
        />
      </b-form-group>
      <b-form-group
        class="login-form__password"
        id="input-group-2"
        label="Пароль:"
        label-for="input-2"
      >
        <b-form-input
          class="login-form__password-input"
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Введите пароль"
          required
        />
      </b-form-group>
      <p class="login-form__error-message" v-if="error">Неверный логин или пароль!</p>
      <b-button class="login-form__reset-btn" type="reset" variant="danger">Отмена</b-button>
      <b-button class="login-form__apply-btn" type="submit" variant="primary" @click="openNextPage()">Войти</b-button>
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
      },
      error: false
    }
  },
  methods: {
    openNextPage () {
      const [isCorrectEmail, isCorrectPassword] = [
        this.form.email === 'vin@vin.com',
        this.form.password === '123'
      ]
      if (isCorrectEmail && isCorrectPassword) {
        this.$router.push('/dashboard')
        localStorage.setItem('isAuth', true)
        this.$store.commit('changeIsAuthValue', true)
      }
      this.error = true
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border: 2px solid black;

  &__email,
  &__password {
    margin-bottom: 20px;
  }

  &__error-message {
    font-size: 15px;
    color: red;
  }

  &__reset-btn {
    margin-right: 70px;
  }
}
</style>
