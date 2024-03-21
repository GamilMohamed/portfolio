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
  wss.clients.forEach(function each(client) {
    if (client.readyState === ws.OPEN) {
      client.send(JSON.stringify({ message: 'Qqun a rejoint', size: clients.size, global: true, join: true}));
    }
  }
  );

  // add user to clients
  // print  
  console.log('Client connected and size: ' + clients.size);

  // when receive message from client
  ws.on('message', function incoming(data) {
    console.log('received: %s', data);
    // Echo the received message back to all clients
    wss.clients.forEach(function each(client) {
      if (client.readyState === ws.OPEN) {
        console.log('sending: %s to client, %s', data, client);
        const message = JSON.stringify({ message: data.toString(), size: clients.size, global: false});
        console.log(message);
        client.send(message);
      }
    });
  });

  ws.on('close', function() {
    clients.delete(ws);
    wss.clients.forEach(function each(client) {
      if (client.readyState === ws.OPEN) {
        client.send(JSON.stringify({ message: 'Qqun a quitté', size: clients.size, global: true, join: false }));
      }
    }
    );
    console.log('Client disconnected');
  });
});



