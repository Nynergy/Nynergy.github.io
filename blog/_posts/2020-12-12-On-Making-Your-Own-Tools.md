---
title: On Making Your Own Tools
meta: Discussing some new programming projects, and my philosophy on personal programming.
---

After working for many weeks on a slew of personal programming projects, I'm finally ready to talk about _cascade_, and the reason for its existence, _vexes_. I also want to take some time to talk about my methodology concerning personal programming, why I made these two things, and who exactly I made them for.
<br>

## cascade
<br>

---
<br>

___What is cascade?___
<br>

_cascade_ is a lightweight, customizable todo-list application for the terminal, which you can find [here](https://github.com/Nynergy/cascade). It's written in C++, and uses _vexes_ as a front-end graphical library. I go into more detail about _vexes_ later in this blog post, so feel free to skip there if you're curious about it. For the moment, just know that _vexes_ is built on top of [ncurses](https://en.wikipedia.org/wiki/Ncurses), so there isn't anything fancy going on at a low level if you're already familiar with that library.
<br>

Below is a screenshot that also appears on the GitHub repo for _cascade_. You can see the program running in the top-left window. The name comes from its appearance, how the sections look like a "stack" of panels arranged in a cascading fashion.
<br>

![showcase](/assets/blog/cascade.jpg)
<br>

___Why does cascade exist?___
<br>

Because I was bored, inspired, sick of other similar apps like [calcurse](https://www.calcurse.org/), and wanted to work within my personal programming philosophy, which I discuss later in this blog post. Quarantine is endlessly boring, and online classes don't make things more exciting (quite the opposite, I've found). I've been meaning to make something like this for a while, and I've made several other attempts at terminal apps, to varying degrees of success.
<br>

[lecterm](https://github.com/Nynergy/lecterm) is a notable one that has given me some trouble in the past. It's a C++ rewrite of another finished app that I made a while ago in Python, and progress kind of stalled out after a while. Something about it became far too unwieldy for me, and I lost interest in wading through the code I had written for it.
<br>

I had written it off as something I wouldn't return to, but then I found a reason to revisit it, in a way. I stopped using calcurse, and instead wanted something simpler, smaller, and most importantly, _self-made_. I wanted to enter that ring once more, and finally prove to myself that I could make a finished program to replace an existing one on my system.
<br>

And so _cascade_ became that replacement. But before I ever even imagined what _cascade_ would be, I had to tackle the issue of unwieldy code, and my horrible habit of writing it. When writing terminal apps in the past, I noticed a few patterns I would always follow in order to make the code cleaner, clearer, and more extensible. Those patterns are what I decided to focus on making first, and I would encapsulate them in a library that I could use for any and all of my future TUI applications.
<br>

This library is what I call _vexes_.
<br>

## vexes
<br>

---
<br>

___Why vexes?___
<br>

Why what? Why did I make it, or why the name? It's called _vexes_ because it's built on top of _curses_, and as a writer I had to flex my linguistic naming skills on all those programmers who use single-letter variable names because they can't think of a good descriptor. I made it because I wanted to encapsulate various TUI programming patterns in a library for my terminal apps, and if you hadn't skipped the above section you would've known that already.
<br>

You can find the GitHub repo for the library [here](https://github.com/Nynergy/vexes). It contains some demo programs I wrote in order to show how the library can be used, so poke around those if you're curious what it can do. Honestly, most of the library is pretty standard stuff, especially if you've seen other similar libraries for regular GUI frameworks. But there is one pattern in _vexes_ that I'm quite proud of, as I hadn't seen it done in any other framework for ncurses: Dynamic Layouts.
<br>

In _vexes_, you can define a custom layout with a ratio string, say "1:1:2" for an app with three panels. The Layouts utility will take that string and give you back a set of dimensions that represent panel placements and sizes in the current terminal window. I take advantage of this utility in _cascade_ by constantly building ratio strings based on the number of sections in the todo-list, and regenerating layouts to suit the new sizes. This means _cascade_ can handle an arbitrary number of sections, and they will be sized/resized automatically.
<br>

For more info on the Dynamic Layouts, as well as other parts of _vexes_, read over the source files in the repo, I like to think they're fairly well-documented. I plan to use _vexes_ for any future TUI projects, which may include another rewrite of lecterm that uses the library. Either way, I now have a powerful new tool in my programming arsenal, which I've shown is more than capable in production with _cascade_.
<br>

So why create these tools myself in the first place?
<br>

## A Philosophy of Personal Programming
<br>

---
<br>

I've discussed in [previous blog posts](/blog/2020/07/06/On-Linux-and-the-Art-of-Digital-Gardening/) my affection for digital systems, and my reasoning behind tending to them in the way that I do. An extension of this idea, or perhaps a subset of it, is my philosophy on personal programming.
<br>

I believe that anyone who wants to fully understand a certain application should attempt to make it themselves. If you want something that is small, versatile, and follows your preferred style of programming, make it yourself. If you want something that will help you bootstrap future projects, make a tool that will do it for you.
<br>

This is exactly what I've done with _vexes_ and _cascade_. I made a tool that I will use to create numerous other things in the form of a library, and I made another tool I will use daily for productivity in the form of a todo-list. As their creator, I have an intimate knowledge of their internal structures and logic, why they do what they do, when they do it, and what it looks like when they do it. To continue the analogy of "digital gardening", I have fashioned my own tools to till my land, I have fertilized with my own compost, I have done things in a self-sufficient manner.
<br>

Perhaps this style of programming is not everyone's cup of tea. It's more of a zen practice to me than anything else, and others may find it tedious, boring, backwards-thinking, wasteful, and altogether a prime example of [bikeshedding](https://en.wiktionary.org/wiki/bikeshedding) in the face of superior, more well-maintained and documented popular options. So that begs the question:
<br>

___Who is all of this for?___
<br>

It's all for me. If anyone else finds it useful, then perhaps they see the same joy I see. But I am the only true reason these things exist, I am their original user. And in this way, my job is complete, self-sustaining.
<br>

If you find these projects interesting, or see eye-to-eye with my personal programming philosophies, feel free to let me know. I'd love to hear from you.
<br>

<div class="attrib">
Ben Buchanan
</div>
