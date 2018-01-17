---
title: "Restful Web Services"
date: "2018-01-12"
layout: post
path: "/articles/restful-web-services"
categories:
  - REVIEW
  - API
  - REST
description: "This is a book review of the Restful Web Services book by Leonard Richardson and Sam Ruby"
---

What REST in Practice was for the practical minded this one was for the theoretical or academic. While it did go into some example code, the usage of the example was not to the same level as that of REST in Practice. This book had a closer focus to the core concepts of REST which happened to be what I was looking for.

One of the best things the book did was instill the concept of resources and thinking of things as such. They even go to the extent of implementing a transactional system that views the transactions as a resource. The author comes back to the point that if there's something you feel you can't implement with REST or you find yourself leaning toward RPC style calls like GET `/METHOD/apply` you might be missing a resource that would allow you to hold to the RESTful practices.

They do go into some high-level discussion of implementing security, caching, etc. but given that this isn't the focus of the book, they don't go into much detail. They give you just enough to show you that these things can all be covered, but recommend you on to other publications for learning them in any depth.

The authors came up with the concept of Resource Oriented Architecture (ROA) that was meant to be a more practical or "suggested" starting place for implementing REST rather than a standard like what REST is. Though I was excited at the idea that was being shot for, I didn't find it significantly different than many other publications suggesting the use of REST. I didn't feel I had much more guidance than had I just known about the REST standard and gone and started implementing.
