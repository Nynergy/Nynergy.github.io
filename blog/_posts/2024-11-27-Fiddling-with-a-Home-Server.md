---
title: Fiddling with a Home Server
meta: "\u0022Cosplaying as a Sysadmin at Home\u0022"
---

Over the past few months, I've been playing around with a home server, steadily
adding more functionality to it as I troubleshoot various issues that crop up.
I'd like to take this blog post to explain why I've been doing this, what
exactly a home server is or could be, and why I think you should give it a try
as well.

---

## Introduction to Self-Hosting

### What is a homelab?

![Homelab Examples](/assets/blog/2024-11-29-Homelab-Examples.jpg)
*Some examples of homelabs from the Internet*

Going by the pictures and descriptions you'll find across the Internet, you may
feel like a homelab is a convoluted mess of expensive hardware and endless
software/web interfaces that draws a ton of power and turns your house into a
small-scale enterprise headquarters. In reality, a homelab is just any group of
computing devices that run services accessible to other computing devices on
your home network. This could be local file storage, media servers for
audio/video content, or really anything you want.

### Why bother with it?

Most of what you'd run on a homelab is already taken care of by other cloud
services like Google Drive, Spotify, Trello, etc. So in a world where you can
just use a 3rd-party service and not have to run everything yourself, why would
you choose to create a homelab?

**Privacy** is one concern you may see come up in discussion around self-hosting
and moving away from 3rd-party services. If you upload and store documents on
something like Google Drive, then Google has that data stored on their servers.
You may not know exactly what kind of information they are harvesting from your
data, or what other operations they might perform on it as part of their
business practices. When you self-host, you are the one in control of all your
data, and you dictate exactly what it's used for, and used by.

**Ownership** of data kind of goes along with the privacy issues. Do you still
own your data if you willingly upload to a server that's operated by a corporate
entity? What if that entity decides to shut down the service they were
providing, do you still have a right to retrieve your data? Could you even ask
them not to shut down the service in the first place? You are at the mercy of a
capitalist enterprise, and your data could be collateral damage in their wake.

Speaking of capitalism, many people have **ethical** concerns with using
services provided by these tech giants like Google, Meta, Amazon, etc. In a
world of ubiquitous generative AI and plenty of potential legal and ethical
ramifications around that kind of exploitative (and ecologically disasterous)
behavior, people should be more wary of who they are supporting, even if only by
necessity.

Personally, my ethical dilemma centers mostly around my love of music, and my
desire to support the artists I enjoy. Streaming platforms like Spotify do not
pay their artists what they deserve, and have disrupted the music landscape in
ways that I find detrimental to the greater music industry, at least from the
perspective of a music listener. Everything is homogenized, and the industry
begins to mirror the increasing monopolization of the greater capitalist
enterprise landscape. In this case, huge artists are like monopolies, trusts to
be busted - attention to be divided up and offered to smaller artists.

This, as well as the propensity of these platforms to invest in and perpetuate
systems of the military-industrial complex, has soured me on them entirely. So I
purchase the music I listen to on sites like Bandcamp, or other platforms that
can adequately pay those artists, and host the digital files on my own music
server, curating my own collection of music.

At the end of the day, running a homelab is also **fun**, at least for people
like me that enjoy cosplaying as a sysadmin after I come home from working my IT
job. You learn a ton about networking, hardware, firewalls, containerization,
and a ton more.

---

## My Setup

### What am I running?

TODO: Talk about the apps you currently have running, knowing that there is
still more stuff to be added, more things to be done. We can give a small list
of use cases for things here, then go into more detail in the following
sections.

#### Hardware

TODO: Talk about the Beelink and the Pi, as well as the new Zigbee stuff. Be
sure to include pictures. Probably bring up the upgraded SSD for the Beelink as
well.

#### Software

TODO: Talk about Docker and all the different stuff you have running on it. Also
talk about the baremetal networking stuff on the Pi.

---

## My Experience Thus Far

### Creation & Considerations

TODO: Talk about setting up the machines (OS, static IPs/DHCP reservations,
routing local DNS through the Pi, etc.) and SSH hardening them. Thoughts on
security, public access, going with a VPN solution instead. Also talk about the
quality of life networking handled by the reverse proxy and local DNS for easy,
named access to your services.


### Lessons Learned

TODO: Talk about temperamental integrations (Nextcloud/Onlyoffice), dealing with
self-signed SSL certs, getting the VPN to work with dynamic IP via duckdns,
having to redo the Docker network after building everything in a macvlan first.

### Future Plans

TODO: Regular backups, NAS, dashboard, and whatever else you can find on the
Nextcloud tasks section for the homelab.

---

Conclusion: TODO: It's been very fun, educating, and rewarding to self-host more
and more of my stuff. It's made me feel a better sense of ownership over those
things, which has made me cherish those things more.

<div class="attrib">
Ben Buchanan
</div>
