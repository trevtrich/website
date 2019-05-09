---
title: "Delete all but branches but master"
date: "2019-05-09"
layout: post
path: "/articles/delete-all-but-branches-but-master"
categories:
  - TIL
description: "Command for clearing all git branches other than master"
---
There are times when I get back to a local repo and realize I have a bunch of temp work I created branches for that I no longer have any idea the contents or need. This command will clear everything other than the master branch.

```
git branch | grep -v "master" | xargs git branch -D
```

credit: https://sublimecoding.com/remove-all-git-branches-except-master/
