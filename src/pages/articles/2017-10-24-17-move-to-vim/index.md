---
title: "To Vim or Not to Vim"
date: "2017-10-24"
layout: post
path: "/articles/using-vim"
categories:
  - DEVELOPMENT
description: "In this article I talk about my transition from Jetbrains products to Vim for software development."
---
# Visual Studio
The first IDE I got experience with was Visual Studio Professional Edition as a student at the university. We were doing C++ development, so this made for a nice editor. At the time, I didn't see the value of the refactoring tools that I saw in the IDE so I never used them. To be honest, I'm guessing they've got some nice stuff in there, but I never did dig in to get familiar with them. I primarily used it as a text editor that had some very imporessive autocompletion. To my experience, it was some of the best I have seen to date. Props to Microsoft in that regard.

# IntelliJ / Webstorm
The second IDE I used was Jetbrains IntelliJ. I used it primarily for Scala, but also for Java. At this same time, I had a ton of people around me that were power users in regard to keyboard shortcuts and refactoring. This REALLY opened up my eyes to what could be done with a typed language and a good IDE. I haven't found anything outside Jetbrains products that have the refactoring support that all of their tools do. The shortcuts to pull out a method and have all it's args figured out dynamically was and is wonderful. This is the one thing I have found that may someday push me back to Jetbrains products away from Vim. I am still a huge fan of IntelliJ and Webstorm, but a little over a month ago decided to switch over to using Vim, as I'll explain below.

# Vim
The primary motivation for moving to Vim was the thought of open source, lightweight tools. Tools that would force me to learn the native tools that the OS gives me (in my case I'm a Mac OS user). I had always wanted to get familiar and felt like I show know the likes of grep, awk, etc. because they are generally available anywhere. There's something in this that feels empowering. The inner 'hacker' has to love the idea of being able to have your same tools no matter what devide you sit on. Sure, you can purchase IntelliJ / Visual Studio on most devices, but the thought of using what for the most part comes out of the box on some major OSs is a huge win in my mind. So, that left me to change over to Vim.

I wanted to start out with bare bones vim and see what additions I would need to make my list of 'must-haves' that I used all the time in other IDEs:
- Extract variables
- Rename variables
- Find all references to a given attribute / method
- Open files through search

So, where I'm at.

## Extract variables
If you have a situation like the following:
```JS
method('arg1');
```
there are often situations when you want to pull out `arg1` into a variable like:
```JS
const arg1 = 'arg1';
```
There is a native Vim way to do this. Select your quoted `arg1` using whatever visual selection shortcuts you want, then `<c>` then type your variable name `arg1`. At this point, you think you're stuck and you'll have to manually extract the var, but you don't. Hop up to the line above and type `const ` then `<Ctrl-a>` will paste in the last thing you typed, which was the variable name. next, finish this out by typing `= ` then `<p>` to paste what you had originally captured with `<c>`. Seems like a lot, I know, but this gets to be really straightforward once you get the hang of the different pieces and use them in other contexts as well.

What I really liked about this was that it didn't require  plugin at all. It's pure Vim. Win.

## Rename variable
This was one of the first sets of plugins I used. For this I use a combination of [tern for vim](https://github.com/ternjs/tern_for_vim) and [YouCompleteMe](https://github.com/Valloric/YouCompleteMe). Once installed, these will allow you to do things like `:YcmCompleter RefactorRename NEW_NAME` to rename the variable under the cursor. This combination of plugins also allows find all references, find definition if your cursor is over a function or variable. So, even though this was a little bit heavy-weight and thus not ideal, I felt the tradeoffs were worth it. I'm still not fully happy with the variable reference finding and definition resolving in ES6 JavaScript, but the support is supposedly there. Should I figure that out, I'll try to get a post up saying how to do that and will link from here.

## Find all references
See Refactor Rename explanation. This is a part of the combination of tern.js and YouCompleteMe.

## Open files through search
So for this I originally started out by watching [a video on using vim without plugins](https://www.youtube.com/watch?v=XA2WjJbmmoM). You essentially set your path for vim to `**/*` so that it searches everything from your current directory on down. While this did work, and I stuck with it for 3-4 weeks, I was never able to make it as fast as I wanted. I tried lots of path limiting with wildignore, etc. but none seemed to speed it up. For this, I eneded up with the [Ctrl-P](https://github.com/ctrlpvim/ctrlp.vim) plugin. This worked wonderfully out of the box, and I've been really happy with it thus far.

# Summary
Although I am not fully happy with where I'm at with Vim, I can honestly say I have liked the move and have no currently plans to move back to Jetbrains products. The mindset behind the use of Vim is something I really appreciate, and it also drives some good habits in learning small tools to become powerful, wich I really like. I will say again, though, the one thing that may take me back to other products will be the refactoring support. Primarily the extraction of methods. However, thus far the pain caused by the lack of that functionality has not been enough to drive me to change. Should I find a good solution for this in Vim I will be sure to link here.

Craft on.

