import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ 
  port: 8080,
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    console.log('received: %s', data);
    // Echo the received message back to the client
    wss.clients.forEach(function each(client) {
      console.log('sending: %s', data);
      console.log('client: %s', client);
      client.send(data.toString());
    });
  });

});
