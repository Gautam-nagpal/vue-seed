<template>
  <div class="login-wrapper">
    <div class="login">
      <div class="form">
        <div class="form-heading alt">
          <h1>{{ $t('auth.signup') }}</h1>
        </div>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>{{ $t('auth.email') }}</label>
            <input type="text" class="form-control" id="email" :placeholder="$t('auth.enter-email-txt')" v-model="email"/>
          </div>
          <div class="form-group">
            <label>{{ $t('auth.password') }}</label>
            <input type="password" class="form-control" id="password" :placeholder="$t('auth.enter-password-txt')" v-model="password"/>
          </div>
          <div class="form-group">
            <label>{{ $t('auth.confirm-password') }}</label>
            <input type="password" class="form-control" id="confirm-password" :placeholder="$t('auth.enter-password-again-txt')" v-model="confirmPassword"/>
          </div>
          <div class="float-right">
            <p class="special-txt">{{ $t('auth.already-have-an-account') }} <a href="javascript:void(0)" v-on:click="gotoLogin" class="common-link">{{ $t('auth.login') }}</a></p>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">{{ $t('auth.signup') }}</button>
          </div>
          <div class="auth-btn-group">
            <button type="submit" class="btn btn-danger mr-2"><i class="fab fa-google"></i></button>
            <button type="submit" class="btn btn-primary"><i class="fab fa-facebook-f"></i></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Singup",
  data: () => {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit(e) {
      console.log({
        email: this.email, password: this.password, confirmPassword: this.confirmPassword
      })
    },
    gotoLogin() {
      this.$router.push(`/${this.$i18n.locale}/login`);
    }
  },
  errors: []
};
</script>