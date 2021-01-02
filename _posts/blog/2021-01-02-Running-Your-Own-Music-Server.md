---
layout: blog-post
title: Running Your Own Music Server
written: January 02, 2021
meta: Introducing a recent pet project where I make my own music server.
category: blog
tags: music raspberry-pi
mastheadClass: masthead-blog
---

So who needs Spotify or iTunes, anyway?

During my time off from school, I've decided to tackle one of the issues that's plagued me in the back of my mind for years; I want to make organizing, accessing, and enjoying my music easier than it is with my current setup. In the past, I've used iTunes to organize my music collection on Windows machines, and [ncmpcpp](https://wiki.archlinux.org/index.php/Ncmpcpp) on Linux platforms. I actually quite enjoyed using ncmpcpp, but it came with a few issues. Firstly, my usage of bitmap fonts without proper handling of non-English characters became a huge pain in the ass. Things wouldn't render properly, or wouldn't render at all, it was a bit of an eyesore. But more importantly, it became a hassle constantly keeping my music database up to date between two different systems. I have an iPhone, so the only way I could manage to sync music to my phone was through iTunes, which meant that I needed to maintain the music databases on both my Windows machine, and my Linux box.

Having to do this by hand, it became an enormous pain, and I decided it was time to move away from iTunes. I wanted something more platform-agnostic, some way of keeping all my music in one place, not two or three. One way of doing this is by using streaming services like Spotify. Plenty of people just stream their music, and don't worry about maintaining a private database of music files. In addition, this method also provides clients for desktops and phones, on many platforms. All you need is an Internet connection, and your music is right there. I wanted this functionality, but limiting myself to a streaming platform like Spotify just wasn't for me. I wanted something I wouldn't have to constantly pay for, and something that would have all the music I like, no matter how obscure. That's when I discovered the world of personal streaming with [squeezeboxes](https://en.wikipedia.org/wiki/Squeezebox_%28network_music_player%29). With squeezeboxes, you can stream music from a home server to any number of players and devices, all accessed via your home network.

After doing some research, I found that I had everything I needed to set up my personal music server. I had an old Raspberry Pi Model 3B+ sitting around, which I installed [piCorePlayer](https://www.picoreplayer.org/) on, which basically took care of all the server/streamer installations and setup. After some tweaking, I successfully made myself a custom music server which had access to all my music files. I'm using a 32GB USB stick as storage at the moment, though I plan to upgrade the capacity in the future.

Below you'll see a screenshot of the controller interface, which I can access via web browser as long as I am connected to my home network. You'll notice the name of the current player in the top left corner, next to the Raspberry Pi logo. "SIREN" is what I called the squeezelite player running on the Pi, which enables it to not only stream music from the database, but also receive that stream and play it back via an AUX out.

![SIREN](/img/SIREN.jpg?raw=true)

To control and play the streams from my phone, I downloaded the [iPeng](http://penguinlovesmusic.de/) app, and I even resurrected an old Kindle Fire to serve as a Now Playing display in my little media cabinet, just underneath my turntable and speaker setup. With this, I've successfully created my own personal music server, and made my life easier. All my music is in one place, and adding to the collection is as easy as copying the files over to the USB stick. And with all this ease of listening on any device, surely my job is complete, right?

Nope. This system only works on my home network. So if I'm not connected to the network, say I'm out of the house, how can I listen to my music? __Use a VPN!__

My router luckily has the ability to setup a VPN server with OpenVPN, and after fiddling with DynDNS settings, I managed to set up a secure connection between my home network and any device that had the credentials to access it over VPN. So now if I'm out of the house, all I have to do is turn on the VPN client on my phone, and it will have access to my home network. As long as the server is running, I can access my music anywhere I have an Internet connection.

Finally, I have setup a music server to replace iTunes, and one that does exactly what I always wanted from a streaming service. A long-time quest of mine is complete, and I got some use out of old tech at the same time. Of course, to fully enjoy the fruits of my labor, I decided to overhaul my media setup and add some mood lighting. I may be a computer nerd, but I like to think I can be a man of aesthetics when I want to be! One hue lamp and Edifier 2.1 speaker setup later, and we get what you see below.

![New hue lamp and speaker setup](/img/new-setup.jpg?raw=true)

I'm quite happy with what I've accomplished. Now I can enjoy more music while I work on projects or read in my down time. If you like what you see, or have questions about anything discussed in this post, let me know. Shoot me an email or send a carrier pigeon or something. I don't bite. Thanks for reading.

    Ben Buchanan
