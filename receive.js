var amqp = require('amqplib/callback_api');
var config = require("./config");
amqp.connect(config.RABBIT_URL, function(err, conn) {
  conn.createChannel(function(err, ch) {   
    var q = config.QUEUE;

    ch.assertQueue(q, {durable: true});
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(q, function(msg) {
      console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
  });
});