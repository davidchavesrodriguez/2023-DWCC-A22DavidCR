<template>
  <header>
    <div class="container-fluid bg-warning bg-gradient text-white">
      <div class="row">
        <div class="col-3 offset-1">
          <img src="/game.svg" alt="Game icon" class="headerSvg">
        </div>
        <div class="col-8">
          <h1 class="mt-4">Game Reminder</h1>
        </div>
      </div>
    </div>
  </header>
  <Form></Form>
</template>

<script>
import Form from "./components/Form.vue";
export default {
  components: {
    Form,
  }
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/arcade-classic');
header {
  font-family: 'ArcadeClassic', sans-serif;
  display: flex;
  align-items: center;
}

.headerSvg {
  width: 96px;
}
</style>