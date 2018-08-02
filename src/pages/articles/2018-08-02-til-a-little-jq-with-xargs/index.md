---
title: "TIL: A little jq with xargs"
date: "2018-08-02"
layout: post
path: "/articles/til-a-little-jq-with-xargs"
categories:
  - TIL
  -  CLI
description: "A snippet on how to use xargs to pump searches into jq commandline json processor"
---

```
echo "'ARG1'
'ARG2'" | xargs -I {} jq '.{}[SEARCHING_FOR]' FILE.json
```
