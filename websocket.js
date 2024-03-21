const routes = {
  '/login': handleLogin,
  '/message': handleMessage,
};

// WebSocket connection handling
wss.on('connection', (ws, req) => {
  console.log('Client connected');

  // Handle login
  ws.on('message', (data) => {
    try {
      const { route, message } = JSON.parse(data);
      console.log("route is", route, "message is", message)
      const handler = routes[route];
      if (handler) {
        handler(ws, message);
      } else {
        console.log('Unknown route:', route);
      }
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });

  ws.on('close', () => {
    broadcastMessage(ws, 'Anonyme a quitté le chat', '/logout');
  });
});

// Route handlers
function handleLogin(message) {
  // For anonymous users, no need to store any data
  ws.send(JSON.stringify({ route: '/login', global: true, message: 'Anonyme a rejoint le chat'}));
}

function handleMessage(message) {
  // Broadcast message to all clients
  broadcastMessage(ws, message, '/message');
}

// Broadcast message to all clients
function broadcastMessage(message, route) {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {   
      client.send(JSON.stringify({ route: route, global: false, message: message }));
    }
  });
}


