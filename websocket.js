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

wss.on('connection', function connection(ws) {
  clients.add(ws);
  console.log('Client connected');
  ws.on('message', function incoming(data) {
    console.log('received: %s', data);
    // Echo the received message back to all clients
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.send(data.toString());
      }
    });
  });

  ws.on('close', function() {
    clients.delete(ws);
    console.log('Client disconnected');
  });
});
