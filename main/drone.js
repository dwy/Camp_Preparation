var drone = require('ar-drone');
var client  = drone.createClient();

client.takeoff();

client
  .after(5000, function() {
    this.clockwise(0.5);
  })
  .after(3000, function() {
    this.stop();
    this.land();
  });

client
    .after(1000, function() {
        this.takeoff();
    })
    .after(2000, function() {
        this.up(0.2);
    })
    .after(2000, function() {
        this.stop();
        this.land();
    });

console.log('done');