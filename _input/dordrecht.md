---
tags: pages
layout: page.njk
title: Welcome to Dordrecht
image: "/img/dordrecht.jpeg"
alt: "Panoramic aerial view of Dordrecht on a sunny day. The river curves through the city, with boats on the water, historic buildings along the waterfront, and the prominent tower of the Grote Kerk rising above the skyline beneath scattered clouds."
description: A City of Historic Beauty and Riverside Charm!
navigation: Dordrecht
order: 6
---

### A City of Historic Beauty and Riverside Charm!

Nestled in the province of South Holland, Dordrecht is not only one of the oldest cities in the Netherlands, it's also a hidden gem brimming with history, art, and character – and the perfect backdrop for our Fronteers event!

{% set src = image %}
{% include '_partials/hero.njk' %}

Surrounded by rivers and lush greenery, Dordrecht enchants with its historic harbors, beautifully preserved merchant houses, and the iconic Grote Kerk. Its scenic waterfront and winding streets create a relaxed yet inspiring atmosphere.

The city is a treasure trove for art and architecture lovers, home to charming museums, galleries, and centuries-old buildings. Dordrecht’s compact center is perfect for wandering, and its blend of quiet elegance and cultural vibrancy makes it an ideal place to connect and recharge.

Its location just south of Rotterdam means it's easily accessible while offering a more intimate and authentic Dutch city experience. Whether you’re arriving by train or ferry, Dordrecht welcomes you with open arms and riverside beauty.

## Explore Dordrecht

Dordrecht is the oldest city in the region [Holland][wiki-holland] ([North][wiki-north-holland]- and [South-Holland][wiki-south-holland]).
Due to various policies and preservation acts, it holds [more than 2000 monuments](https://www.monumenten.nl/gemeentes/dordrecht), and with access to multiple iconic cities in The Netherlands, this is the perfect location for conference attendees looking to extend their stay.

We would love to list all that there is to do in Dordrecht and its surroundings, but the city of Dordrecht and the VVV Dordrecht (&ldquo;Vereeniging voor VreemdelingenVerkeer&rdquo;, translated: association for tourism) have
collected almost all that there is todo in both English and Dutch on their website [indordrecht.nl](https://indordrecht.nl/en/).

That said, should you find the self-guided tour [&ldquo;Rondje Dordt&rdquo;][rondje-dordt] too short, or want to make sure you get to see as much as possible within the city center, we have composed a short tour that tries to touch even more historic highlights:

<div data-component="komoot-card">
<a data-target="non-interactive" href="https://www.komoot.com/tour/3003453179?share_token=a3zsz6Ze5e01wi87Bk5FAhXfZbNMCxYMvUHJSwcGysLQznzhXk" target="_blank" rel="nofollow noopener noreferrer"><img src="/img/fronteers-city-walk-map.png" width="540" height="700" /></a>
<template data-target="interactive"><iframe src="https://www.komoot.com/tour/3003453179/embed?share_token=a3zsz6Ze5e01wi87Bk5FAhXfZbNMCxYMvUHJSwcGysLQznzhXk&amp;layout=classic&amp;profile=1" width="540" height="700" frameborder="0" scrolling="no" allow="fullscreen" allowfullscreen></iframe></template>
<template data-target="qr-code"><img src="/img/fronteers-city-walk-qr.png" width="540" height="700" /></template>
<button type="button" class="button" data-action="interactive" hidden aria-describedby="switching-to-interactive-note">Switch to interactive</button>
<button type="button" class="button" data-action="qr-code" hidden>Show QR code</button>
<a href="/static/gpx/fronteers-city-walk.gpx" class="button" download="fronteers-city-walk.gpx">GPX</a>
</div>

<p id="switching-to-interactive-note"><em>Switching to interactive loads cookies from Komoot.</em></p>

<script>
  document.querySelectorAll('[data-component="komoot-card"]').forEach((component) => {
    const initial = component.querySelector('[data-target="non-interactive"]');
    const interactiveTemplate = component.querySelector('[data-target="interactive"]');
    const qrCodeTemplate = component.querySelector('[data-target="qr-code"]');

    let element = initial;

    if (!initial) {
      return
    }

    if (interactiveTemplate) {
      const action = component.querySelector('[data-action="interactive"]');
      if (action) {
        action.removeAttribute('hidden');
        action.addEventListener('click', () => {
          action.setAttribute('hidden', '');

          const interactive = document.importNode(interactiveTemplate.content, true).firstElementChild;

          element.replaceWith(interactive);
          element = interactive;
        }, { once: true });
      }
    }

    if (qrCodeTemplate) {
      const action = component.querySelector('[data-action="qr-code"]');
      const qrCode = document.importNode(interactiveTemplate.content, true).firstElementChild;

      if (action) {
        action.removeAttribute('hidden');
        action.addEventListener('click', () => {

          element.replaceWith(qrCode);
          element = qrCode;

          action.textContent = 'Show map';
        });
      }
    }
  })
</script>

[wiki-holland]: https://en.wikipedia.org/wiki/Holland
[wiki-north-holland]: https://en.wikipedia.org/wiki/North_Holland
[wiki-south-holland]: https://en.wikipedia.org/wiki/South_Holland
[rondje-dordt]: https://indordrecht.nl/en/routes/rondje-dordt/
