<template>
  <div>
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

    <div>
      <div v-for="tab in tabs" :key="tab" @click="currentTab = tab" :class="{ active: currentTab === tab }" class="tab">
        {{
        tab }}</div>
    </div>

    <Form v-show="currentTab === 'Form'" @formSubmitted="addFormData"></Form>
    <Items v-show="currentTab === 'Items'" :formDataList="formDataList"></Items>
  </div>
</template>

<script>
import Items from "./components/Items.vue";
import Form from "./components/Form.vue";
export default {
  components: {
    Items,
    Form,
  },
  data() {
    return {
      currentTab: "Form",
      tabs: ["Items", "Form"],
      formDataList: []
    }
  },
  methods: {
    addFormData(formData) {
      this.formDataList.push(formData);
      this.currentTab = 'Items';
    }
  },
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

.tab {
  display: inline-block;
  padding: 10px;
  cursor: pointer;
}

.tab.active {
  background-color: #ccc;
}
</style>
