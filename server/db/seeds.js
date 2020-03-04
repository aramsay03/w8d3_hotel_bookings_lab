use bookings_hub;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Mr D Head",
    email: "dhead@assholes.com",
    checked_in_status: "Booked"
  },
  {
    name: "Mr B Dover",
    email: "bdover@gmail.com",
    checked_in_status: "Checked In"
  },
  {
    name: "Miss Penelope Pitstop",
    email: "fast.car@hotmail.com",
    checked_in_status: "Checked In"
  }
]);
