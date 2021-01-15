<template>
  <div class="login-wrapper">
    <div class="login">
      <div class="form">
        <div class="form-heading">
          <h1>{{$t('auth.login')}}</h1>
        </div>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>{{$t('auth.email')}}</label>
            <input type="text" class="form-control" :placeholder="$t('auth.enter-email-txt')" id="email" v-model="email"/>
          </div>
          <div class="form-group">
            <label>{{ $t('auth.password')}}</label>
            <input type="password" class="form-control" :placeholder="$t('auth.enter-password-txt')" id="password" v-model="password"/>
          </div>
          <div class="float-right pb-2">
            <a href="javascript:void(0)" v-on:click="gotoForgotPassword" class="common-link">{{ $t('auth.forgot-password') }}</a>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">{{ $t('auth.login') }}</button>
          </div>
        </form>
        <button @click="gotoSignup" class="btn btn-warning btn-block">{{ $t('auth.signup') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  mounted() {
    console.log(this.$moment(), 'moment');
  },
  methods: {
    onSubmit(e) {
      console.log({
        email: this.email, password: this.password
      })
    },
    gotoSignup() {
      this.$router.push(`/${this.$i18n.locale}/signup`);
    },
    gotoForgotPassword() {
      this.$router.push(`/${this.$i18n.locale}/forgot-password`);
    }
  },
  errors: [],
};
</script>