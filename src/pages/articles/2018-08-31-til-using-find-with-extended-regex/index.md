---
title: "TIL: Using find with extended regex"
date: "2018-08-31"
layout: post
path: "/articles/til-using-find-with-extended-regex"
categories:
  - TIL
description: "Enabling the use of more &#x60;normal&#x60; regex patterns with the &#x60;find&#x60; command."
---

If you want to, for example, delete multiple files with the `find` command on Mac OS terminal you can use something like: `find -E . ! -regex '.*/(file1.js|file2.js)' -delete`. Without the `-E` you aren't able to use the `|` operator amongst other things.

