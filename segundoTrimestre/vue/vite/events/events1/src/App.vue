<script>
export default {
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
    }
  }
}
</script>

<template>
  <h1>Contact List</h1>
  <div v-for="(person, index) in contacts" :key="index">
    <PropPerson :propName="person.name" :propTelephone="person.telephone" :propEmail="person.email"
      @toggle-favorite="() => makeFavorite(index)" :favorite="person.isContactFavorite">
    </PropPerson>
  </div>
</template>

<style ></style>
