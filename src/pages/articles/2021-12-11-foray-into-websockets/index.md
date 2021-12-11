---
title: "Foray into websockets"
date: "2021-12-11"
layout: post
path: "/articles/foray-into-websockets"
categories:
  - architecture
description: "Never used them before. Have heard about em&#x27;. Time to try em&#x27; out."
---

Never done them before. Also haven't written an article for quite some time so want to dig in a tiny bit again. 

At work we've got a fancy spreadsheet app that is regularly updated by one or potentially multiple users at once. Think a mix of Google Sheets and Google Docs. Right now, we don't have a great way for one user to receive updates from other users entering data in the shared docs a company might be working on. This POC is going to be an exploration of what that might look like.

A plan:
[X] Don't get fancy. Just get it working.
[X] Initial goal: see a single piece of data update on the fly.
[X] Start out just updating data directly on the server and pushing it to a browser.
[X] Let multiple clients connect and receive the same data.
[X] Let something push data into the server that continues to push data to clients.

This seems like a good start and will be useful and interesting. I'll start there.

## Get a server running.
...errrr wait. just figuring out which server to try using.

Found some [lower leve understanding of websockets on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers).

Had thought as I was looking into this that it's a good reminder to air on the side of reading docs and not trying to copy/paste so much. Forces a person to really understand what they're doing.

Alas, [here's the article](https://blog.mrg.sh/build-a-websocket-server-using-express-and-ws-package) I am basing this on to learn.

Options
- [socket.io](https://www.npmjs.com/package/socket.io). batteries included
- [ws](https://www.npmjs.com/package/ws). basebones

YES! We have a winner. Express is super easy to spinnup. Here's the initial running server: 

```js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000

app.get('/', (_, res) => res.send('hello express!'));

app.listen(PORT, () => {
    console.log('launching the express server!');
});
```

Ended up venturing into the WS docs themselves and [found good example of using websockets](https://github.com/websockets/ws/blob/c82b08737fbe142dd910fc7e429399e23b95c6d6/examples/express-session-parse/index.js) with express that's a little more informative as to what all is happening here.

Alright, pass 2. Here's the new server:

```js
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const PORT = process.env.PORT || 8000

const server = http.createServer(app);
const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

server.on('upgrade', function (request, socket, head) {
    console.log('handling upgrade from http server. attempting websocket connection...');
  
    wss.handleUpgrade(request, socket, head, function (ws) {
      wss.emit('connection', ws, request);
    });
  });

  wss.on("connection", function (ws, request) {
    ws.on("message", function (message) {
      console.log(`Received message ${message}`);
    });

    ws.on("close", function () {
      console.log("closing socket connection...");
    });
  });
  
app.get('/ws', (_, res) => res.send('this is a websocket endpoint. ask for an upgrade and you will get it!'));

server.listen(PORT, function () {
  console.log(`Listening on http://localhost:${PORT}`);
});
```

Super simple to add a little html page to server up from express:
```js
app.get('/', (_, res) => res.sendFile('index.html', {root: path.join(__dirname, '../client/')}));
```

so now i've got this little one:
```html
<!DOCTYPE html>
<html>
    were in here!
</html>
```

oh heck yes.. here is a working solution sending a message from the webpage to the websocket!
```js
<!DOCTYPE html>
<html>
    were in here!
    <button>Click me!</button>
    <script>
        function createWebSocket() {
            console.log('were trying to make it!');
            const websocket = new WebSocket('ws://localhost:8000/ws');
            console.log(websocket);

            websocket.onopen = () => {
                console.log('the connection is open! trying to send a message...')
                websocket.send('holy moly this is the first one!')
            };
        }

        const button = document.querySelector('button');
        button.onclick = createWebSocket; 
    </script>
</html>
```

and the output:
```sh
> websocket-live-eventing@1.0.0 dev
> node src/server/index.js

Listening on http://localhost:8000
handling upgrade from http server. attempting websocket connection...
preparing the connection!
closing socket connection...
handling upgrade from http server. attempting websocket connection...
preparing the connection!
Received message holy moly this is the first one!
```

now we can submit as many messages to the server as we want!
```html
<!DOCTYPE html>
<html>
    <div>
        <button id="initialize-websocket-button">Initialize websocket.</button>
    </div>
    <div>
        <input type="text"></input>
        <button id="submit-message-button">Send message</button>
    </div>
    <script>
        let websocket;

        function createWebSocket() {
            console.log('were trying to make it!');
            websocket = new WebSocket('ws://localhost:8000/ws');
            console.log(websocket);

            websocket.onopen = () => {
                console.log('the connection is open! trying to send a message...')
                websocket.send('holy moly this is the first one!')
            };
        }

        const initializeWebsocketButton = document.getElementById('initialize-websocket-button');
        initializeWebsocketButton.onclick = createWebSocket; 

        function sendMessage() {
            websocket.send(messageInput.value);
            console.log(`sent message: ${messageInput.value}. now clearing input..`)
            messageInput.value = '';
        }

        const messageInput = document.querySelector('input');
        const submitMessageButton = document.getElementById('submit-message-button');
        submitMessageButton.onclick = sendMessage;
    </script>
</html>
```

Alright, looking back to the goals.. now i want to see if I can send a message BACK to the client from the server. I'm thinking I'll just do this on an interval rather than the complexity of taking input to the server somehow. Lets do it.

Well, that turned out to be pretty easy too. Here's the running server code that pushes messages back to the browser:
```js
const express = require('express');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');

const app = express();
const PORT = process.env.PORT || 8000

const server = http.createServer(app);
const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

server.on('upgrade', function (request, socket, head) {
    console.log('handling upgrade from http server. attempting websocket connection...');
  
    wss.handleUpgrade(request, socket, head, function (ws) {
      wss.emit('connection', ws, request);
    });
  });

  wss.on("connection", function (ws, request) {
    console.log('preparing the connection!');
    ws.on("message", function (message) {
      console.log(`Received message ${message}`);
    });

    ws.on("close", function () {
      console.log("closing socket connection...");
    });

    sendIntervalMessage(ws, 2000);
  });
  
app.get('/ws', (_, res) => res.send('this is a websocket endpoint. ask for an upgrade and you will get it!'));
app.get('/', (_, res) => res.sendFile('index.html', {root: path.join(__dirname, '../client/')}));

server.listen(PORT, function () {
  console.log(`Listening on http://localhost:${PORT}`);
});

let currentInterval = 0;
function sendIntervalMessage(wsConnection, intervalInMs) {

  setInterval(() => {
    wsConnection.send(`sending message to the client: ${currentInterval}`);
    currentInterval += 1;
  }, intervalInMs);
}
```

and the corresponding browser coded that handles it:
```html
<!DOCTYPE html>
<html>
    <div>
        <button id="initialize-websocket-button">Initialize websocket.</button>
    </div>
    <div>
        <input type="text"></input>
        <button id="submit-message-button">Send message</button>
    </div>
    <script>
        let websocket;

        function createWebSocket() {
            console.log('were trying to make it!');
            websocket = new WebSocket('ws://localhost:8000/ws');
            console.log(websocket);

            websocket.onopen = () => {
                console.log('the connection is open! trying to send a message...')
                websocket.send('holy moly this is the first one!')
            };

            websocket.onmessage = (event) => console.log(`received message from the server: ${event.data}`);
        }

        const initializeWebsocketButton = document.getElementById('initialize-websocket-button');
        initializeWebsocketButton.onclick = createWebSocket; 

        function sendMessage() {
            websocket.send(messageInput.value);
            console.log(`sent message: ${messageInput.value}. now clearing input..`)
            messageInput.value = '';
        }

        const messageInput = document.querySelector('input');
        const submitMessageButton = document.getElementById('submit-message-button');
        submitMessageButton.onclick = sendMessage;
    </script>
</html>
```

The latest experiment is making sure we can handle multiple websockets with this server and pass data around as we please. That "just worked" with no additional changes. I just cracked open another browser session and it started working. The thing that caught my attn was the numbers were skipping every other. So 1, 3, 5, 7 on one tab and 2, 4, 6, 8 on the other. This was because a global variable was used on the server to do the interval counting. Because an interval was added for each connection at the same interval time, this will for the most part be expected to update twice during a session in this small case of two connections.

## Pushing data to browser from and external event source
I will use Google's [Google Cloud Platform](https://cloud.google.com/) and specifically their [Pub/Sub service](https://cloud.google.com/pubsub/) to carry out the event generation. For now, I'll plan to just generate the messages manually in the Cloud Console interface, which is Google's way of interacting with your services on their platform.

Steps
- `npm i @google-cloud/pubsub`
- follow google docs on [pub/sub node.js client usage](https://cloud.google.com/pubsub/docs/reference/libraries#client-libraries-install-nodejs)
- create topic in GCP project
- make sure there is a subscription to that topic
- verify all application default creds setup to run off personal account instead of work account

Code to pull this off:
```js
async function listenForPubSubMessages(wsConnection) {
  const pubsub = new PubSub({projectId: 'websocket-server-334803'});
  const subscription = await pubsub.subscription('projects/websocket-server-334803/subscriptions/test-messages-sub');

  subscription.on("message", (message) => {
    console.log("Received message from pub/sub:", message.data.toString());
    wsConnection.send(message.data.toString());
  });

  subscription.on("error", (error) => {
    console.error("Received error:", error);
    process.exit(1);
  });
}
```