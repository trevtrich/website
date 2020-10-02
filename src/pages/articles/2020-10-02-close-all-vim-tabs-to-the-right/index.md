---
title: "Close all vim tabs to the right"
date: "2020-10-02"
layout: post
path: "/articles/close-all-vim-tabs-to-the-right"
categories:
  - TIL
description: "This command will close all tabs to the right of the current tab in vim."
---

```sh
:.+1,$tabdo :q
```

