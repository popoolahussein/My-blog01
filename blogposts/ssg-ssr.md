---
title: When to use Static Generation VS. Server-Side Rendering'
date: '2024-10-25'
---

We recommend using **Static Generation** (with and without data) whwenever it is possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Satic Generation for many types of pages, including:

- Marketing pages
- Blog Posts
- E-commerce product listings
- Help and documentation

You should ask yoursef: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.
