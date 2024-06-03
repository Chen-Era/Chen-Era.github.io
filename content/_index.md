---

sections:
  - block: resume-biography
    contents:
      title: Biography
      username: admin
      text: '一个人做科研太轻松了，带上这个吧👆'
    design:
      banner:
        # Upload a cover image to `assets/media/` folder and reference its filename here (optional)
        filename: 'MyBackground.jpg'
        focal_point: 'Top'
        preview_only: false  
      biography:
        # Customize the CSS style of your biography text (optional)
        style: '.chinese-content'

  - widget: portfolio
    content:
      title: 一个人做科研太轻松了，带上这个吧👆
      text: 
      page_type: project
      filter_default: 0
        kinds:
          - page
      # Default portfolio filter button
      # 0 corresponds to the first button below and so on
      # For example, 0 will default to showing all content as the first button below shows content with *any* tag
      default_button_index: 0
      # Filter button toolbar (optional).
      # Add or remove as many buttons as you like.
      # To show all content, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the button toolbar, delete the entire `buttons` block.
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
      columns: '1'
      view: masonry
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
