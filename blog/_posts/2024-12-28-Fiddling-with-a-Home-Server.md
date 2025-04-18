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

![Homelab Examples](/assets/blog/2024-12-28-Homelab-Examples.jpg)
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

My homelab currently consists of a couple small computers, some smart home
products, and a bunch of Docker containers. I use it for hosting my music
server, file storage, task tracking, personal wiki, and more. There's still
plenty to be done, but I'm very happy with how it runs for a starter homelab.

#### Hardware

The vast majority of the homelab is running on a Beelink Mini PC with an Intel
N100 chip and an upgraded 2TB SSD. It's small, it's quiet, it's not very power
hungry, and it gets the job done. This machine is called 'Ys', named after the
[Joanna Newsom album](https://en.wikipedia.org/wiki/Ys_(album)).

Sitting on top of the Mini PC is an old Raspberry Pi 3b+, which used to run my
old music server. Now the Pi just handles some of the internal networking stuff
that I don't want to bother bogging the Beelink down with. This machine is
called 'Pink', named after the [Boris
album](https://en.wikipedia.org/wiki/Pink_(Boris_album)).

![My Homelab Hardware](/assets/blog/2024-12-28-My-Homelab-Hardware.jpg)
*My Mini PC server and Raspberry Pi homelab setup*

Not pictured above are the Sonoff Zigbee controller and Philips Hue lights that
I purchased as a jumping off point for a smart home network. The controller is
just plugged into a USB port on the back of the Beelink.

#### Software

We'll start with what's running on Pink, since that's simpler. The Pi is just
running two things baremetal: Pi-hole (with Unbound) and PiVPN (with Wireguard).
Pi-hole serves as my local DNS center, ad blocker, and general networking
dashboard outside of my router's browser interface. PiVPN allows me to VPN into
my home network from outside the house, and is what makes it so that I don't
have to directly expose my services and devices to the public Internet.

Next up is Ys, which currently runs everything in Docker. There's quite a bit
here, so let's take it one at a time.

**duckdns** is running a job that updates the IP address of my DuckDNS static IP
to reflect whatever my ISP decides my home router's dynamic IP is. This is what
makes the Wireguard VPN work, even when my dynamic IP changes.

**Nginx Proxy Manager** handles redirecting all my fancy URLs to their
respective service endpoints (in conjunction with Pi-hole local DNS records). It
also handles applying local self-signed SSL certificates to all my endpoints.
This service is called 'Veckatimest', named after the [Grizzly Bear
album](https://en.wikipedia.org/wiki/Veckatimest).

**Nextcloud** is my current "cloud" file storage system of choice. I use it as
pretty much a direct replacement for Google Drive (though because it is not
exposed to the public I cannot share files with anyone outside of my home
network) and that also includes the Calendar and Tasks functionality. This
service is called 'Souvlaki', named after the [Slowdive
album](https://en.wikipedia.org/wiki/Souvlaki_(album)).

**OnlyOffice** is the document editing suite that I have integrated into my
Nextcloud service as a replacement for things like Google Docs, Sheets, etc. You
can view and edit documents right inside of Nextcloud, which is very convenient.
This service is called 'Vespertine', named after the [Björk
album](https://en.wikipedia.org/wiki/Vespertine).

**Home Assistant** is the smart home controller/dashboard that I am using with
my Zigbee network. It's the latest thing I've added to the homelab, so there
isn't much going on here yet besides a couple Hue lights that I can mess with.
This serice is called 'Superkilen', named after the [Svaneborg Kardyb
album](https://svaneborgkardyb.bandcamp.com/album/superkilen).

**Lyrion Music Server** (fka Logitech Media Server) is what I use to run my
music streaming server. Setup is simple, adding and removing music is easy, the
interface (using the Material Skin plugin) is nice to look at and intuitive to
navigate. It doesn't try to be flashy, it doesn't try to emulate Spotify, and
because it comes from the lineage of the Logitech Squeezebox ecosystem, it's
easy to connect to and play around with via a JSON RPC API. It's my favorite
thing that I run, and I love it to death. This service is not named after an
album, and is simply called 'Muse'.

**Firefly III** is what I use to track my finances. I used to use an
over-engineered spreadsheet, but this service is much more tailored for how I
like to keep track of my expenses and income, as well as bills and other major
purchases. This service is called 'Buckminster', named after the [Driftless Pony
Club album](https://en.wikipedia.org/wiki/Driftless_Pony_Club).

**Planka** is a kanban-style task tracker that I have mostly moved away from in
favor of the Tasks app on Nextcloud, though I do still sometimes use Planka for
tracking my music and programming projects. This service is called 'Tapestry',
named after the [Carole King
album](https://en.wikipedia.org/wiki/Tapestry_(Carole_King_album)).

**Wiki.js** is the platform I use for my personal wiki. At the moment I use it
mostly to track various sysadmin information for my homelab, but I plan to use
it more as a general information center as time goes on. This service is called
'Relayer', named after the [Yes album](https://en.wikipedia.org/wiki/Relayer).

---

## My Experience Thus Far

### Creation & Considerations

When setting up my machines, I knew I wanted something simple to deal with and
easy to troubleshoot. For my daily drivers and work laptops I use Gentoo, but
that certainly is not something I want to deal with for a server with high
uptime. So I opted for the latest stable release of Debian on the Mini PC, and a
typical 64-bit version of Raspian on the Pi.

In order to make sure network configurations worked properly, each machine is
given a static IP address, either through `dhcpcd` or through DHCP reservations
on my router. Once everything was set up and I confirmed I could SSH into each
machine, I SSH hardened them by disabling password logins, enabling
public/private key sign in, and changing the port that the SSH server is
listening for connections on.

I also had to go into my router's browser interface in order to set a custom
entry for local DNS, so that it would route DNS queries to my Pi instead of
whatever the router's defaults were.

I considered making my services public on an actual Internet domain and just
gating them all behind login portals or other authentication methods, but in the
end I felt it was easier (and far more secure) to just leave everything
local-only, so a user would need to VPN into my home network in order to access
any services or machines. This decision would end up making some things much
easier, and other things much more difficult.

### Lessons Learned

One thing that was made easier by keeping things local was the DNS entries for
my named services. By using Pi-hole and Nginx Proxy Manager it was dead simple
to set up pretty domain names using CNAME entries and the reverse proxy.

One thing that was made far harder was SSL certificates. If I had exposed my
services to the Internet I could have used the built in Lets Encrypt
functionality of Nginx to create my certs, but because I was local only, I ended
up having to self-sign my certs, including creating a local certificate
authority. That authority has to then be uploaded into any device that wants to
authenticate the validity of those SSL certs. Bit of a pain to set up, but once
I got everything working it seems to be very smooth sailing.

Besides the SSL certs there were some other tempermental integrations, such as
getting OnlyOffice working inside of Nextcloud (which prompted me to completely
restructure the internal Docker network that connected all my containers),
getting the VPN to work with my dynamic IP through duckdns, and trying to figure
out which services required websocket support through the reverse proxy, among
others.

### Future Plans

There's still a lot that I need to do with this homelab, such as regular
backups, setting up a NAS, creating an admin dashboard or homepage of some kind,
system monitoring with Prometheus/Grafana, messing with firewall rules, and
perhaps even playing around with adding a Windows machine to the network with
Parsec for some sort of cloud gaming setup.

I'm already planning on adding a second Mini PC to the network in order to act
as a squeezebox player in my audio setup, as well as split some of the load with
the current Mini PC. Some services that don't really need a fast ethernet
connection could be moved over to the new machine that uses Wi-Fi, which should
help with any computational load issues that might arise.

There's also a lot more fine-tuning I want to do with the existing
infrastructure, such as adding to and improving my Home Assistant stuff,
organizing my Nextcloud stuff, putting all my Docker files and other
configurations into a private GitHub repo, etc.

---

It's been very fun, educating, and rewarding to self-host more and more of my
stuff. It's made me feel a better sense of ownership over those things, which
has made me cherish them more.

I would absolutely recommend you start your own homelab if this is something
that interests you. Even if it's just a single Raspberry Pi or an old laptop or
salvaged e-waste parts, you can do quite a lot with just a little bit of
relatively inexpensive hardware.

Hopefully you enjoyed reading my ramblings about homelabs and self-hosting. Now
if you'll excuse me, I've got some Docker containers to play around with.

Happy homelabbing!

<div class="attrib">
Ben Buchanan
</div>
