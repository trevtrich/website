webpackJsonp([0xc086ef2997f1],{426:function(e,t){e.exports={data:{site:{meta:{title:"Trevor Richardson",description:"Thoughts on life & crafting software",url:"https://trevorrichardson.me",author:"richardson-trevor",twitter:"IntelXDesign"}},post:{id:"/Users/trevorr/Development/Home/website/src/pages/articles/2017-10-24-17-move-to-vim/index.md absPath of file >>> MarkdownRemark",html:'<h1>Visual Studio</h1>\n<p>The first IDE I got experience with was Visual Studio Professional Edition as a student at the university. We were doing C++ development, so this made for a nice editor. At the time, I didn’t see the value of the refactoring tools that I saw in the IDE so I never used them. To be honest, I’m guessing they’ve got some nice stuff in there, but I never did dig in to get familiar with them. I primarily used it as a text editor that had some very imporessive autocompletion. To my experience, it was some of the best I have seen to date. Props to Microsoft in that regard.</p>\n<h1>IntelliJ / Webstorm</h1>\n<p>The second IDE I used was Jetbrains IntelliJ. I used it primarily for Scala, but also for Java. At this same time, I had a ton of people around me that were power users in regard to keyboard shortcuts and refactoring. This REALLY opened up my eyes to what could be done with a typed language and a good IDE. I haven’t found anything outside Jetbrains products that have the refactoring support that all of their tools do. The shortcuts to pull out a method and have all it’s args figured out dynamically was and is wonderful. This is the one thing I have found that may someday push me back to Jetbrains products away from Vim. I am still a huge fan of IntelliJ and Webstorm, but a little over a month ago decided to switch over to using Vim, as I’ll explain below.</p>\n<h1>Vim</h1>\n<p>The primary motivation for moving to Vim was the thought of open source, lightweight tools. Tools that would force me to learn the native tools that the OS gives me (in my case I’m a Mac OS user). I had always wanted to get familiar and felt like I show know the likes of grep, awk, etc. because they are generally available anywhere. There’s something in this that feels empowering. The inner ‘hacker’ has to love the idea of being able to have your same tools no matter what devide you sit on. Sure, you can purchase IntelliJ / Visual Studio on most devices, but the thought of using what for the most part comes out of the box on some major OSs is a huge win in my mind. So, that left me to change over to Vim.</p>\n<p>I wanted to start out with bare bones vim and see what additions I would need to make my list of ‘must-haves’ that I used all the time in other IDEs:</p>\n<ul>\n<li>Extract variables</li>\n<li>Rename variables</li>\n<li>Find all references to a given attribute / method</li>\n<li>Open files through search</li>\n</ul>\n<p>So, where I’m at.</p>\n<h2>Extract variables</h2>\n<p>If you have a situation like the following:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">method</span><span class="token punctuation">(</span><span class="token string">&apos;arg1&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div></body></html>\n<p>there are often situations when you want to pull out <code>arg1</code> into a variable like:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> arg1 <span class="token operator">=</span> <span class="token string">&apos;arg1&apos;</span><span class="token punctuation">;</span>\n</code></pre>\n      </div></body></html>\n<p>There is a native Vim way to do this. Select your quoted <code>arg1</code> using whatever visual selection shortcuts you want, then <code>&#x3C;c></code> then type your variable name <code>arg1</code>. At this point, you think you’re stuck and you’ll have to manually extract the var, but you don’t. Hop up to the line above and type <code>const</code> then <code>&#x3C;Ctrl-a></code> will paste in the last thing you typed, which was the variable name. next, finish this out by typing <code>=</code> then <code>&#x3C;p></code> to paste what you had originally captured with <code>&#x3C;c></code>. Seems like a lot, I know, but this gets to be really straightforward once you get the hang of the different pieces and use them in other contexts as well.</p>\n<p>What I really liked about this was that it didn’t require  plugin at all. It’s pure Vim. Win.</p>\n<h2>Rename variable</h2>\n<p>This was one of the first sets of plugins I used. For this I use a combination of <a href="https://github.com/ternjs/tern_for_vim">tern for vim</a> and <a href="https://github.com/Valloric/YouCompleteMe">YouCompleteMe</a>. Once installed, these will allow you to do things like <code>:YcmCompleter RefactorRename NEW_NAME</code> to rename the variable under the cursor. This combination of plugins also allows find all references, find definition if your cursor is over a function or variable. So, even though this was a little bit heavy-weight and thus not ideal, I felt the tradeoffs were worth it. I’m still not fully happy with the variable reference finding and definition resolving in ES6 JavaScript, but the support is supposedly there. Should I figure that out, I’ll try to get a post up saying how to do that and will link from here.</p>\n<h2>Find all references</h2>\n<p>See Refactor Rename explanation. This is a part of the combination of tern.js and YouCompleteMe.</p>\n<h2>Open files through search</h2>\n<p>So for this I originally started out by watching <a href="https://www.youtube.com/watch?v=XA2WjJbmmoM">a video on using vim without plugins</a>. You essentially set your path for vim to <code>**/*</code> so that it searches everything from your current directory on down. While this did work, and I stuck with it for 3-4 weeks, I was never able to make it as fast as I wanted. I tried lots of path limiting with wildignore, etc. but none seemed to speed it up. For this, I eneded up with the <a href="https://github.com/ctrlpvim/ctrlp.vim">Ctrl-P</a> plugin. This worked wonderfully out of the box, and I’ve been really happy with it thus far.</p>\n<h1>Summary</h1>\n<p>Although I am not fully happy with where I’m at with Vim, I can honestly say I have liked the move and have no currently plans to move back to Jetbrains products. The mindset behind the use of Vim is something I really appreciate, and it also drives some good habits in learning small tools to become powerful, wich I really like. I will say again, though, the one thing that may take me back to other products will be the refactoring support. Primarily the extraction of methods. However, thus far the pain caused by the lack of that functionality has not been enough to drive me to change. Should I find a good solution for this in Vim I will be sure to link here.</p>\n<p>Craft on.</p>',frontmatter:{layout:"post",title:"To Vim or Not to Vim",path:"/articles/using-vim",categories:["DEVELOPMENT"],date:"2017/10/24"}}},pathContext:{path:"/articles/using-vim"}}}});
//# sourceMappingURL=path---articles-using-vim-cc398f1b775fcc14926d.js.map