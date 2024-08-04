---
title: A Return to Digital Gardening
meta: The art of programming, Zen, and you.
---

Quite a while ago, and many iterations of this website previous, I made a blog
post about the concept of _digital gardening_, and what it means to me to care
for and maintain digital systems. In light of a renewed interest in the upkeep
and proliferation of content on this site, as well as a newfound interest in the
smaller corners of the internet, I'd like to talk more about that.

---

## Digital Gardening

Over the years I have spent countless hours practicing the art of digital
gardening in one way or another. I maintain Linux systems as my daily drivers,
I write custom scripts for installing and customizing my preferred environments,
I work on new and existing integration software for a myriad of systems and
vendors at work, and I serve as the sole webmaster of a personal website that
functions as a confluence point for all my hobbies and other digital existences.

I've found that the process of cultivating these environments has brought me
feelings of pride, patience, and peace. It is a Zen practice like any form of
meditation. Perhaps I have a binary thumb, you could say.

### Operating Systems

![pfetch](/assets/blog/2024-08-04-pfetch.jpg)
*Output of pfetch on my main system, 'fidelity'*

![fidelity screenshot](/assets/blog/2024-08-04-fidelity-Screenshot.jpg)
*Screenshot of fidelity while writing this blog post*

In the past I've used various Linux distributions including multiple flavors of
Debian/Ubuntu, and those kinds of out-of-the-box environments are a great
gateway into the world of free and open source operating systems, but these days
I'm very content with my minimal Gentoo systems.

I like to work in the terminal whenever reasonable, so vim, tmux, and i3 are my
best friends. I've made plenty of my own tools for the terminal in order to
further enhance my workflow and quality of life on these systems that I adore so
much, such as:

- A command line id3 tag editor for mp3 files
  ([kiln](https://github.com/Nynergy/kiln))
- A TUI controller for Logitech Media Server
  ([horizon](https://github.com/Nynergy/horizon))
- A TUI kanban task tracker ([kadai](https://github.com/Nynergy/kadai))
- A customizable sand timer for the terminal
  ([silica](https://github.com/Nynergy/silica))
- Plenty more scripts and tools that I had a lot of fun making

When you use an OS like Windows, you sacrifice so much of what should make an OS
fun and easy to work with. Don't get me wrong -- Windows is very convenient, and
I still use it to this day for games that I can't run on Linux, but that
convenience is not exactly equivalent with the 'ease' that I speak of. Forced
updates at bad times, sudden restarts, bloatware, constant pings and system
messages about absolutely nothing of any real value, limited customization and
extensibility, piss poor development tools outside of those half-measure
"crossplatform" environments that seek to placate every developer at once.

With Gentoo I pick the plot of land, choose the soil, build the beds and
trellises, plant the seeds, and care for all of it on my own time. I reap what I
sow, and I have eaten well for many harvest seasons.

### Scripts

With a system as minimal and extensible as Gentoo, I've gone out of my way to
add and customize many things to suit my needs, much of it set up or controlled
by a suite of [bash
scripts](https://github.com/Nynergy/dotfiles/tree/main/scripts).

I've got scripts that:

- Manage system-wide color schemes on the fly
- Mount remote drives and attached devices
- Add custom information to [polybar](https://github.com/polybar/polybar)
- Manage system controls with [dmenu](https://tools.suckless.org/dmenu/)
- Open VPN connections
- Present slideshows in the terminal
- Run music clients that query my home music server
- ...and more!

These bash scripts and other configuration files need to be wrangled and managed
in some sane manner, so I copied some ideas from [this
repo](https://github.com/andrew8088/dotfiles) when deciding on what kind of
infrastructure should handle this task. Everything is organized according to
this structure, checked against [shellcheck](https://www.shellcheck.net/), and
tailored toward my personal system in a way that allows for easy
post-installation configuration when I spin up a new Gentoo box.

For work, things are a bit different. I still use Gentoo on my work machine, but
the scripts that I'm working with aren't always mine. Even the ones that are
fully mine have to contend with outside influences on style, purpose, language,
conventions, etc.

I work in IT in higher education, so much of what I do is either integrating
vendor software into our existing systems, or creating an in-house tool for one
of our functional offices. A lot of it is database work, and I'm no SQL wizard,
so queries can get a little messier than I would normally be comfortable with in
my personal scripts. This is okay; a little bit of messy code here and there is
a fact of life, and worrying about it will only keep you from improving as a
programmer. That doesn't mean you can write shitty code all willy-nilly, just
that you shouldn't be so puritanical about eradicating anything that doesn't
meet your impossibly high standards.

I try my best to adhere to the same best practices that I do in my personal
scripts, but when things require a different approach at work, I let those
requirements guide me instead of my preferences. I still find my work fun and
rewarding, so I must be doing something right.

### Digital Spaces

When it comes to curating my own digital spaces beyond the foundation of an OS,
I've had a history of moving away from social media, and trending toward more
personal and intimate forms of self-expression and representation. I abandoned
Facebook very quickly after creating my account, and over the years I've done
less and less posting on platforms like Instagram and Twitter. Today I really
only use them to see what friends are up to, or to follow announcements from
various bands that I like. The personal website feels like a much more effective
means of expressing who I am over time.

So when I maintain this site, I take it very seriously. I want it to be as good
a reflection of my self as possible. I want it to look good, feel good to
navigate, contain good content, and leave any visitors with a good impression of
me. As a programmer, that also applies to my source code. If anyone wants to
trawl through the [GitHub repo for this
site](https://github.com/Nynergy/Nynergy.github.io) to see how it works, I want
them to walk away feeling like I have done things efficiently, elegantly, and
practically. I want them to know how serious I am about what I preach here.

So I like to leverage the power of Jekyll's static site generation with Liquid
and YAML, as well as make my front-end life easier with a CSS preprocessor like
SASS. I want to make maintaining this site easier for me, because the easier it
is, the more likely I'll be to add to it in the future.

And as I've gone through this latest iteration of site overhauls and
philosophical questions about why I'm doing this, I've stumbled across many
other people who seem to have similar ideas about the current state of social
media and the web. So let's talk about the Personal Web.

---

## The Personal Web

I've always had a fascination with digital spaces that you can call your own.
Before I made this site I had a stint on the
[gophernet](https://en.wikipedia.org/wiki/Gopher_(protocol)) via the [SDF Public
Access Unix
System](https://en.wikipedia.org/wiki/SDF_Public_Access_Unix_System). That was
my first foray into a more _personal_ expression of my online presence. For
other people, they may have used more visually-expressive mediums like WYSIWYG
site builders, or gone totally independent with self-hosted servers. But I think
a lot of us did what we did out of a shared sentiment: The web is ugly, slow,
and hostile to people like us.

### Post-Web 1.0 Disillusionment

With the rise of [Web 2.0](https://en.wikipedia.org/wiki/Web_2.0) around the
mid-2000's, the strange and fantastical internet of the late 90's was quickly
being replaced with corporate no-man's-lands. Ads multiplied across pages, there
was mass proliferation of external applications and complex Javascript, and
things began to move to a slower and more inconvenient cloud-based architecture
as companies figured out they could make bank in the process.

The era of the Web 1.0 static site was coming to an end. As I got older, I
slowly became more and more disillusioned with how slow, bloated, and monotonous
the internet had become. It's become a chore to surf the web, which is a damn
shame.

Now Web 3.0 is peeking its head over the burning horizon of the future, and the
phrase "web technologies" leaves a bad taste in my mouth. I want to see a more
personal internet resurface, one that brings people closer together, not
isolates them further.

### Neocities and Webrings

And so I stumbled upon this recent resurgence of Web 1.0 style personal sites,
driven mostly by [neocities](https://neocities.org/). I was enthralled when I
found this new vast community of people that wanted exactly what I had been
yearning for.

In searching through endless sites plastered with buttons and sparkles and blog
posts and artwork and unending creativity, I discovered the revival of a classic
Web 1.0 social tool: the [Webring](https://en.wikipedia.org/wiki/Webring).

![webring explanation](/assets/blog/2024-08-04-Webrings.jpg)
*Diagram of how webrings work, taken from http://www.webringworld.org*

Suddenly, the idea of finding a shared community online doesn't seem so far
away. Everyone has pasted towering lists of rings on their pages, linking this
way and that across an ocean of interests, hobbies, philosophies, and other
niches.

You can find a nifty graph of tools and other resources for the personal web
[here](https://psychcool.org/links/Personal%20Web%20Map.pdf).

---

## The Path Forward

In discovering this wave of "Neo-Web 1.0" interest, it's spawned the very same
interest in me. I've already got this site, so I might as well join in on the
fun, right?

As of me writing this blog post, I am not currently part of any webrings or
online communities of the personal web. But I'm certainly not opposed to the
idea of joining one, or even starting my own. It seems that the vast majority of
existing webrings are pretty sparse, only boasting 5-10 members, which certainly
isn't a bad thing. I suppose I just haven't found a ring that really speaks to
me and my perceived community.

Perhaps when you're reading this, you'll notice some webring links on the page,
and you'll know that I've found my place in this new-old internet that we so
desperately need today. Until then, I'll keep hoping and working toward making
that kind of space for myself.

I'll keep practicing my Zen and tending to my garden.

<div class="attrib">
Ben Buchanan
</div>
