---
title: "About"  
date: 2023-07-06T10:00:00Z  
summary: My courses

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: CV
    content:
      title: Brief CV
      filters:
        folders:
          - abo
    design:
      view: article-grid
      columns: 2

  - widget: about.avatar
     active: true
     headless: true
     weight: 10
     title: Hello
     author: admin
---

