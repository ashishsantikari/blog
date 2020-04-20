---
title: A tale of webkit, canvas and REM units
date: "2020-04-20T19:18:51.801Z"
description: REM unit on canvas, wekbit incompatibility issue
---

Two months back, I was working with ChartJS to render a very simple pie chart.
Everything was smooth until one of our UX design expert who has eagle eyes found out that the label inside the pie chart was not of the same size in Safari as compared to other browsers.

Well, I took a sigh of relief, it wasn't IE.
Next, I took some time to figure out why the pie chart looks so illogical because of the miniature fount.

Problem was not with Safari but in webkit(the rendering engine that powers the famous Safari).

Well, what's the solution then? A hack and a bug raised on wekbit. :)

See the codepen below
<iframe height="265" style="width: 100%;" scrolling="no" title="rem does not work for canvas attributes on WebKit" src="https://codepen.io/ashishsantikari/embed/zYGGbMa?height=265&theme-id=light&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/ashishsantikari/pen/zYGGbMa'>rem does not work for canvas attributes on WebKit</a> by Ashish Santikari
  (<a href='https://codepen.io/ashishsantikari'>@ashishsantikari</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Open this page in Safari and compare the result.

I intentionally increased the font size to make it more obvious.

Find the bug report [here](https://bugs.webkit.org/show_bug.cgi?id=207541)


