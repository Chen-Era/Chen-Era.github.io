---

sections:
  - block: resume-biography
    contents:
      title: Biography
      username: admin
    design:
      banner:
        # Upload a cover image to `assets/media/` folder and reference its filename here (optional)
        filename: 'MyBackground.jpg'
        focal_point: 'Top'
        preview_only: false  
      biography:
        # Customize the CSS style of your biography text (optional)
        style: '.chinese-content'

  - widget: about.avatar
    weight: 10
    author: admin
    
  - widget: portfolio
  - block: collection
    id: post
    content:
      title: 一个人做科研太轻松了，带上这个吧👆
      fliter:
        folders:
          - project
      filter_button:
        - name: All
          tag: '*'
        - name: Medical Research
          tag: MR
        - name: Photography
          tag: Photo
        - name: Daily Collection
          tag: DC
    design:
      view: card
      flip_alt_rows: true
      background: {}
      spacing: {padding: [0, 0, 0, 0]} 

  - block: collection
    id: photos
    content:
      title: Photography
      subtitle: ''
      text: 'Basically shot in Lumix GX9'
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        # The folders to display content from
        folders:
          - project/photos
        author: "admin"
        category: ""
        tag: "photos"
        publication_type: ""
        featured_only: false
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      # Choose how many pages you would like to offset by
      # Useful if you wish to show the first item in the Featured widget
      offset: 0
      # Field to sort by, such as Date or Title
      sort_by: 'Date'
      sort_ascending: false
    design:
      # Choose a listing view
      view: card

  
---
