---

sections:
  - block: resume-biography
    contents:
    design:
      banner:
        # Upload a cover image to `assets/media/` folder and reference its filename here (optional)
        filename: 'MyBackground.jpg'
        focal_point: 'Top'
        preview_only: false  
      biography:
        # Customize the CSS style of your biography text (optional)
        style: '.chinese-content'

  - block: collection
    id: news
    headless: true
    content:
      title: 一个人做科研太轻松了，带上这个吧👆
      subtitle: ''
      text: '大概率断更，小概率退坑（'
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      filters:
        folders:
          - scholar
        tags:
          - "MR"
      offset: 0
      sort_ascending: false
    design:
      view: card


  - block: collection
    id: photos
    headless: true
    content:
      title: 哪都拍拍
      subtitle: ''
      text: '📷: Lumix GX9'
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        # The folders to display content from
        folders:
          - photo
        tags:
          - "Photo"
      offset: 0
      sort_ascending: false
    design:
      # Choose a listing view
      view: card

  - block: collection
    id: daily
    headless: true
    content:
      title: 日常小确幸
      subtitle: ''
      text: '最闲暇的时光大抵如此'
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        # The folders to display content from
        folders:
          - post
        tags:
          - "DC"
      offset: 0
      sort_ascending: false
    design:
      # Choose a listing view
      view: card
---
