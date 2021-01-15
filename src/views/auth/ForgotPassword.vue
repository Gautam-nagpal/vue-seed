<template>
  <div class="login-wrapper">
    <div class="login">
      <div class="form">
        <div class="form-heading alt-forgot">
          <h1>{{ $t('auth.forgot-password') }}</h1>
        </div>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>{{ $t('auth.email') }}</label>
            <input type="text" class="form-control" id="email" :placeholder="$t('auth.enter-email-txt')" v-model="email"/>
          </div>
          <p>{{ $t('auth.send-link-txt') }}</p>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">{{ $t('auth.submit') }}</button>
          </div>
        </form>
        <div class="text-center">
          <a href="javascript:void(0)" v-on:click="gotoLogin" class="common-link">{{ $t('auth.login') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Singup",
  data: () => {
    return {
      email: ''
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
  }
};
</script>