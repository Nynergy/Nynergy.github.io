---
layout: blog-post
title: Going a Bit Further
written: July 21, 2020
meta: An explanation of the site's styling overhaul done under the hood.
category: blog
tags: update webdev
mastheadClass: masthead-blog
---

I recently made a blog post about the tables I created to replace the boring HTML lists of posts. Well, I fell into a bit of a trance and decided to overhaul the entire site. The changes range from invisible to jarringly obvious. The flurry of modifications was spurred by my decision to start compiling more extensible CSS with the help of Sass. For those who don't know, Sass (Syntactically Awesome Style Sheets) allows developers to write more readable and extensible CSS files by compiling a series of .scss files into a single CSS file. Sass also provides utilities for writing functions, mixins, includes, boolean logic, and more. Overall, it makes styling the site easier, and I was eager to migrate **Lexica Chromatica** over to a Sass-based styling system.

So I rewrote all the styling information. Much of it was taken from the old CSS and reorganized, but a lot of the color variables were changed, and the spacing of elements on the various pages may look slightly different. These are the smaller changes I made, but some pages also saw modifications to the actual layout of the content. For example, the music page now looks vastly different. Instead of those ugly horizontal sections clogged with unnecessary links and unsightly visual composition, there are now cards for each album. Everything is more succinct, more aesthetically pleasing, and more informative without being overly wordy.

In terms of smaller changes to content, the image gallery now has a lighter background and the images are spaced evenly on the horizontal plane, and the about page now includes links for my Instagram (@ben\_jammin\_in\_jc) and GitHub (Nynergy). The masthead images now stretch to the borders of the header (after removing some awful CSS practices from the original stylesheets), and the white artifacts that could sometimes be seen on their borders have been removed.

I can't promise the site won't go through more overhauling in the future, but for the moment I'm content with how it looks. I plan to spend more time writing and uploading more posts with this major styling out of the way, so look for those in the future. Let me know what you think of the changes to the site.

Thanks for reading.

<div class="attrib">
Ben Buchanan
</div>
