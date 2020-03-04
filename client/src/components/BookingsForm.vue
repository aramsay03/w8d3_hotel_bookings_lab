<template lang="html">
  <form class="" v-on:submit="addBooking" action="index.html" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required/>

    <label for="email">Email:</label>
    <input type="text" id="email" v-model="email" required/>

    <select id="checked_in_status" v-model="checked_in_status" required for="checked_in_status">
<option value=""disabled selected></option>
<option value="Booked">Booked</option>
<option value="Checked_In">Checked In</option>
<option value="Checked_Out">Check Out</option>
    </select>

    <input type="Submit" value="Save" id="save"/>

  </form>
</template>

<script>

import{ eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsServices.js'

export default {
  name: 'bookings-form',
  data(){
    return {
      name: "",
      email: "",
      checked_in_status: ""
    }
  },
  methods: {
    addBooking() {
      event.preventDefault();
      const payload = {
        name: this.name,
        email: this.email,
        checked_in_status: this.checked_in_status
      };
      eventBus.$emit('submit-booking', payload);
      this.name = this.email = this.checked_in_status = '';
    }
  }
}
</script>

<style lang="css" scoped>
</style>
