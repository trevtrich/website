---
title: "Grrr git says my directory isn&#x27;t clean"
date: "2019-01-31"
layout: post
path: "/articles/grrr-git-says-my-directory-isn-t-clean"
categories:
  - TIL
description: "When git tells you your directory isn&#x27;t clean, yet &#x60;git status&#x60; doesn&#x27;t reveal anything helpful."
---
Those times when you can't figure out what changed in your local directory, try this:
```
git ls-files --other --exclude-standard --directory
```

