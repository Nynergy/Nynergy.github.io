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

TODO: Very barebones explanation of homelabs and self-hosting. Maybe grab some
photos of other homelabs, maybe link the homelab subreddit.

### Why bother with it?

TODO:
- Fun & Interesting
- Privacy, Ownership, & Ethics

TODO: This is where we can echo the funny meta description about cosplaying as a
sysadmin. Also briefly talk about my own specific reasons for self-hosting, in
addition to the broader reasons already stated.

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
