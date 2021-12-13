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

