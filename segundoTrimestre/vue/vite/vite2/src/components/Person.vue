<script>
export default {
  data() {
    return {
      name: "Miragaya",
      telephone: "031456777",
      email: "amoAosLorchos@gaelic.gal",
      areDetailsHidden: true,
      buttonText: "Show details",
    };
  },
  methods: {
    toggleDetails() {
      this.areDetailsHidden = !this.areDetailsHidden;
      this.buttonText = this.areDetailsHidden ? "Show details" : "Hide details";
    },
  },
};
</script>

<template>
  <h1>Contact List</h1>
  <div>
    <h3>{{ name }}</h3>
    <button type="button" @click="toggleDetails">{{ buttonText }}</button>
    <p :class="{ hidden: areDetailsHidden }">
      Phone number:
      <a href="tel: {{telephone}}">{{ telephone }}</a>
    </p>
    <p :class="{ hidden: areDetailsHidden }">
      Email:
      <a href="mailto: {{ email }}">{{ email }}</a>
    </p>
  </div>
</template>

<style>
.hidden {
  display: none;
}
</style>
