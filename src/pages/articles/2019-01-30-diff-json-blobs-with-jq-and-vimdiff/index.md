---
title: "Diff json blobs with jq and vimdiff"
date: "2019-01-30"
layout: post
path: "/articles/diff-json-blobs-with-jq-and-vimdiff"
categories:
  - TIL
description: "There are times when you need to figure out the semantically different pieces of json files. This helps do so."
---

```sh
vimdiff <(jq -S . FILE1.json) <(jq -S . FILE2.json)
```
