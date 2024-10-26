---
title: 'Two Forms of Pre-rendering'
date: '2024-10-26'
---

Next.js has two forms of pre-rendering: **Static Generation** and **server-side-rendering**. The difference is in **when** it generates the Html for a page.

- **Static Generation** is the pre-rendering method that generates the Html at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You ctreate a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.