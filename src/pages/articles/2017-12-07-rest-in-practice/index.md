---
title: REST in Practice
date: "2017-12-07"
layout: post
path: "/articles/rest-in-practice"
categories:
  - REVIEW
description: "REST in Practice is one of the better tech books I&#x27;ve read. It was a nice mix of implementation and theory, of which I haven&#x27;t seen done this well very often."
---
I was pointed to this book after a brief RFC from a friend wondering if anyone had recommendations for books on REST that weren't just theory. Most suggested you need to learn by doing, which I agree with for the most part, but I also feel some theory is important to understand the big picture. This book was a perfect mix of both.

The continuing app that is being built in the book is one of a coffee shop and the API (the baristas / servers / cashiers) it would take to run the place  The book instills the [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html) from beginning to end, building up the coffee shop app with the different levels as a way to explain the benefits / tradeoffs of each level.

The primary takeways I have are:
- A greater instilled mindset that resources should be thought of as such. Web resources can be acted on. By using something like RPC we aren't using the web in the way the web works at scale. It can be done (and in some cases maybe should be done) but this is a different situation than 'designing for the web'.
- Using RESTful concepts can lead to many free benefits from the way the web works. If we use GET in a way that is always safe from side effects, we can leverage web caching from middlewares that we may or may not even control. We have control over many of these potential free benefits by the response as well as [request headers available for caching manipulation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching). This was a topic I had never gotten into much, but this book does a great job of covering.
