<template>
  <div id="app">
    <bookings-form />
    <bookings-grid :bookings="bookings"/>
  </div>
</template>

<script>
import BookingsForm from '@/components/BookingsForm.vue';
import BookingsService from '@/services/BookingsServices';
import BookingsGrid from '@/components/BookingsGrid.vue';
import { eventBus } from '@/main.js'


export default {
  name: 'App',
  data(){
    return {
      bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid

  },
  mounted() {
    this.getBookings();

    eventBus.$on('submit-booking', payload => {
      BookingsService.postBooking(payload)
      .then(booking => this.bookings.push(booking));
    });

    eventBus.$on('delete-booking', id => {
      BookingsService.deleteBooking(id)
        .then(() => {
          const index = this.bookings.findIndex(booking => booking._id === id);
          this.bookings.splice(index, 1);
        });
    });
  },
  methods: {
    getBookings() {
      BookingsService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
