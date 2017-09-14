<template>
  <div id="app">
    <div class="">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from '@/components/Hello'
export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>

</style>
