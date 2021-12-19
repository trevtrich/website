---
title: "Foray into websockets - pt 2"
date: "2021-12-13"
layout: post
path: "/articles/foray-into-websockets-pt-2"
categories:
  - architecture
description: "Deeper dive into what pt 1 was actually doing when it worked."
---

So, [part 1](/articles/foray-into-websockets) actually went much better than I would've expected. I had no idea the raw web apis were so friendly at least to get something basic working. Essentially once you have a connection you're off to the races. Following that up with a pub/sub topic subscription and firing off new notifications whenever they came was equally straightforward. Now, after I had that success I came away with some questions (which is always the big win of hacking on something new).

1. What is this [upgrade thing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism) some docs reference as the "Web" in websockets (can't seem to find direct reference), but the [MDN docs do reference this upgrade](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#examples) path as the way a browser creates them.
2. What does it look like to turn this single connection into production worthy?
  a. What happenes when the network drops?
3. How do you manage lots of persistent connections?
  a. Any established best-practice or "websocket servers" that manage all this for you?
4. Where in the flow do we establish and link who is who for a new connection attempt to the server?

## What is this http "upgrade" thing?

Direct quote from [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#examples):

> Establishing a WebSocket relies on the HTTP Upgrade mechanism, so the request for the protocol upgrade is implicit when we address the web server as ws://www.example.com or wss://www.example.com.

I've seen elsewhere this is the "web" in websockets. Primarily the fact that the initial request is regular http but is sent with the `upgrade` protocol which indicates to the server it would like to upgrade to a websocket connection.

Ew, some interesting info from the mdn [Protocol Upgrade Mechanism](https://developer.mozilla.org/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism):

> This mechanism is optional; it cannot be used to insist on a protocol change. Implementations can choose not to take advantage of an upgrade even if they support the new protocol, and in practice, this mechanism is used mostly to bootstrap a WebSockets connection.
>
> Note also that HTTP/2 explicitly disallows the use of this mechanism; it is specific to HTTP/1.1.

So I have a little digging to do to verify what happens when the initial connection is made over http/2.

An example upgrade request from the same MDN upgrade docs:

```
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

and a [specific section for the upgrade to websocket protocal](https://developer.mozilla.org/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism#upgrading_to_a_websocket_connection). I will say, the [101 Switching Protocols http response status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101) is not one I was familiar with. Interview questions, I guess.

## What does production look like for websockets?

- heartbeat?
- wss connection
- token expiration if the socket is open for more than token life span
- does logging / apm agent actually monitor websockets? appears some don't.

Recommendations

- Base autoscaling on number of open connections because things like CPU will often be misleading as open connections will often remain idle.

## Other links I used in building this.. that probably mean I had things to learn or lock into memory and needed to come back to.

### Getting it going...
- https://blog.mrg.sh/build-a-websocket-server-using-express-and-ws-package
- https://github.com/trevtrich/websocket-live-eventing
- https://www.npmjs.com/package/ws#sending-and-receiving-text-data
- https://github.com/websockets/ws/blob/c82b08737fbe142dd910fc7e429399e23b95c6d6/examples/express-session-parse/index.js
- https://codehandbook.org/how-to-render-html-page-in-express/
- https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#receiving_messages_from_the_server
- https://attacomsian.com/blog/javascript-update-element-text
- https://cloud.google.com/pubsub/docs/reference/libraries#client-libraries-install-nodejs
- https://console.cloud.google.com/cloudpubsub/topic/detail/test-messages?authuser=1&project=websocket-server-334803&tab=messages
- https://stackoverflow.com/questions/40032678/where-are-google-application-default-credentials-stored

### Production
- https://medium.com/voodoo-engineering/websockets-on-production-with-node-js-bdc82d07bb9f
