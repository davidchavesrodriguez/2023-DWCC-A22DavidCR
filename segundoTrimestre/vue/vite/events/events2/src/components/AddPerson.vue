<script>
export default {
  data() {
    return {
      name: '',
      telephone: '',
      email: ''
    };
  },
  methods: {
    addPerson() {
      if (this.name && this.telephone && this.email) {
        this.$emit('add-person', {
          name: this.name,
          telephone: this.telephone,
          email: this.email
        });
        // Clear form fields after emitting the event
        this.name = '';
        this.telephone = '';
        this.email = '';
      } else {
        alert('Please fill in all mandatory fields.');
      }
    }
  }
};

</script>
<template>
    <label for="addPerson">Add a New Contact:</label>
    <form @submit.prevent="addPerson" name="addPerson">
      <fieldset>
        <legend>Mandatory Data</legend>
        <label for="addName">Name: </label>
        <input type="text" v-model="name" name="addName" id="addName">
      </fieldset>
      <br>
      <fieldset>
        <legend>Details</legend>
        <label for="addPhone">Phone: </label>
        <input type="text" v-model="telephone" name="addPhone" id="addPhone">
        <br>
        <label for="addEmail">Email: </label>
        <input type="text" v-model="email" name="addEmail" id="addEmail">
      </fieldset>
      <button type="submit">Add</button>
    </form>
  </template>
  
<style></style>
