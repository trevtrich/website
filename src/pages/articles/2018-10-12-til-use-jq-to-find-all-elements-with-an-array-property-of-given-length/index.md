---
title: "TIL: Use jq to find all elements with an array property of given length."
date: "2018-10-12"
layout: post
path: "/articles/til-use-jq-to-find-all-elements-with-an-array-property-of-given-length"
categories:
  - TIL
description: "This was a useful one for digging through a large object that I needed to find all of those with a given property that was an array and the array had a given length."
---

```sh
jq '.[] | select((.arrayAttribute | length) > 1)' FILE.json
```

