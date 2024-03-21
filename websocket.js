const ws = require('ws');

const WebSocketServer = ws.Server;

const wss = new WebSocketServer({ 
  port: 5000,
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

let clients = new Set();

wss.on('connection', function connection(ws, req) {
  clients.add(ws);
  console.log(req.headers);
  console.log('Client connected and size: ' + clients.size);
  ws.on('message', function incoming(data) {
    console.log('received: %s', data);
    // Echo the received message back to all clients
    wss.clients.forEach(function each(client) {
      if (client.readyState === ws.OPEN) {
        console.log('sending: %s to client, %s', data, client);
        client.send(data.toString());
        const message = {
          type: 'message',
          data: data.toString(),
          size: clients.size
        };
      }
    });
  });

  ws.on('close', function() {
    clients.delete(ws);
    console.log('Client disconnected');
  });
});
