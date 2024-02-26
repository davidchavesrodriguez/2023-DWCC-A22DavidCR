<template>
  <div>
    <h1>Contact List</h1>
    <AddPerson @add-person="addNewPerson"></AddPerson>
    <div v-for="(person, index) in contacts" :key="index">
      <PropPerson :propName="person.name" :propTelephone="person.telephone" :propEmail="person.email"
        @toggle-favorite="() => makeFavorite(index)" :favorite="person.isContactFavorite"
        @delete-contact="deleteContact(index)">
      </PropPerson>
    </div>
  </div>
</template>

<script>
import AddPerson from './components/AddPerson.vue';

export default {
  components: {
    AddPerson
  },
  data() {
    return {
      contacts: [
        {
          name: "Isamel",
          telephone: 123456789,
          email: "lensinhofit3000@bembibre.gym",
          isContactFavorite: false
        },
        {
          name: "Julito",
          telephone: 987654321,
          email: "oslorchosson@o.pino",
          isContactFavorite: false
        },
        {
          name: "Dalton",
          telephone: 880808088,
          email: "redgreenblue@color.rgb",
          isContactFavorite: false
        }
      ]
    };
  },
  methods: {
    makeFavorite(index) {
      this.contacts[index].isContactFavorite = !this.contacts[index].isContactFavorite;
    },
    addNewPerson(personData) {
      this.contacts.push({
        name: personData.name,
        telephone: personData.telephone,
        email: personData.email,
        isContactFavorite: false
      });
    },
    deleteContact(index) {
      this.contacts.splice(index, 1);
    }
  }
}
</script>

<style></style>
