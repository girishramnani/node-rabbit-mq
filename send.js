var amqp = require('amqplib/callback_api');
var config = require("./config");

amqp.connect(config.RABBIT_URL, function(err, conn){
    conn.createChannel(function(err, ch){

        var q = config.QUEUE;
        ch.assertQueue(q, {durable: true});

        ch.sendToQueue(q, new Buffer("heheha"));

    })
})