<template>
  <div class="text-center">
    <router-link :to="`/${$i18n.locale}/login`" >{{$t('auth.login')}}</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
