---
layout: blog-post
title: New Post Tags
written: September 01, 2020
meta: Lexica Chromatica now uses tags to further organize posts!
category: blog
tags: lexica-chromatica update webdev
mastheadClass: masthead-blog
---

The site has undergone another large change to the structure/content: Tags!

Each post (barring those in collections) now features a set of tags, which can be used to further organize them into groups of common topics or ideas. When viewing a post, you can click on a tag and it will bring you to the tag page associated with it. This page will contain a table of all the posts that share that same tag. Underneath this table (and also underneath the recent posts table on the home page), you will find a tag cloud containing every tag, sorted by frequency. Any time you see a tag, you can click it to be brought to its tag page.

In order to implement this, I wrote up a little Haskell script that will crawl the _posts directory of my site, find every post, scrape the tags from it, and write a tag file for each one. Now, any time I add a new tag, all I have to do is run the script, which I named `autotagger`, and push the new tag pages to GitHub.

Feel free to look around and play with the new pages. If you find that I use the tag 'abstract' far too often, don't bother sending an email, I'm right there with you. But if you're curious how I implemented that little Haskell script, I'd be more than happy to show you, though I may not create a repo for it on GitHub, considering how specific it is to my site. I may generalize the script before I make it public.

Either way, thanks for reading, and let me know what you think.

	Ben Buchanan
