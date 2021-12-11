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
1. Don't get fancy. Just get it working.
2. Initial goal: see a single piece of data update on the fly.
3. Start out just updating data directly on the server and pushing it to a browser.
4. Let multiple clients connect and receive the same data.
5. Let something push data into the server that continues to push data to clients.

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