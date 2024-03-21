const routes = {
  '/login': handleLogin,
  '/message': handleMessage,
};

const { timeStamp } = require('node:console');
const fs = require('node:fs');
// const content = 'Some content!';

const ws = require('ws');
const WebSocketServer = ws.Server;

let clients = new Set();
let id = 0;

const wss = new WebSocketServer({ 
  port: 5000,
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

function writetolog(message) {
  const log = `[${new Date().toISOString()}] <${clients.size}> ${message}`
  fs.appendFile('logs/logfile', log + "\n", err => {
    if (err) {
      console.error(err);
    } else {
    }
  });
}

// WebSocket connection handling
wss.on('connection', (ws, req) => {
  // console.log(id, ">",req)
  clients.add({id:id++, ws:ws})

  // Handle login
  ws.on('message', (data) => {
    try {
      const { route, message } = JSON.parse(data);
      console.log("route is", route, "message is", message)
      const handler = routes[route];
      if (handler) {
        handler(message);
      } else {
        console.log('Unknown route:', route);
      }
      if (message)
        writetolog(message)
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });

  ws.on('close', () => {
    writetolog("Someone left")
    clients.forEach(client => {
      if (client.ws === ws) {
        clients.delete(client);
        handleLogout(client.id); // Pass the id to the logout handler
      }
    })
  });
});

// Route handlers
function handleLogout() {
  broadcastGlobalMessage("/logout", "Anonyme a quitté le chat", false);
}

function handleLogin() {
  broadcastGlobalMessage("/login", "Anonyme a rejoint", true);
}

function handleMessage(message) {
  broadcastMessage('/message', `Anon: ${message}`);
}

function broadcastGlobalMessage(route, message, joined) {
  wss.clients.forEach(user => {
    if (user.readyState === ws.OPEN) {   
      const mess = JSON.stringify({ route: route, global: true, message: message, joined: joined, nbUsers: clients.size});
      console.log("sending GLOBAL", mess)
      user.send(mess);
    }
  });
}

// Broadcast message to all clients
function broadcastMessage(route, message) {
  wss.clients.forEach(client => {
    if (client.readyState === ws.OPEN) {   
      const mess = JSON.stringify({ route: route, message: message, nbUsers: clients.size });
      console.log("sending", mess)
      client.send(mess);
    }
  });
}


