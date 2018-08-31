---
title: "TIL: Revert multiple commits"
date: "2018-08-31"
layout: post
path: "/articles/til-revert-multiple-commits"
categories:
  - TIL
description: "There are times when you want to revert everything back to a given commit. This is how."
---

```
$ git reset --hard COMMIT_HASH_TO_REVERT_TO
$ git reset --soft @{1}
$ git commit
```

Credit to: https://stackoverflow.com/questions/1463340/how-to-revert-multiple-git-commits
