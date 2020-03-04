<template lang="html">
  <div class="booking">
    <h2>{{ booking.name }}</h2>
    <p>{{ booking.email }}</p>
    <p>{{ booking.checked_in_status }}</p>

    <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  name: 'booking',
  props: ['booking'],
  methods: {
    deleteBooking(id) {
      eventBus.$emit('delete-booking', id);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
