---

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-biography
    content:
      # The user's folder name in `content/authors/`
      username: admin
      # Show a call-to-action button under your biography? (optional)
      # To link to a file, upload it to your `static/uploads/` folder
      button:
        text: Download Résumé
        url: uploads/resume.pdf
    design:
      banner:
        # Upload a cover image to `assets/media/` folder and reference its filename here (optional)
        filename: 'MyBackground.jpg'
      biography:
        # Customize the CSS style of your biography text (optional)
        style: 'font.scss'

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

# A section created with the Portfolio widget.
# This section displays content from `content/project/`.
# See https://docs.hugoblox.com/widget/portfolio/
sections:
  widget: portfolio

# This file represents a page section.
  headless: true

# Order that this section appears on the page.
  weight: 20

  title: ''
  subtitle: ''

  content:
    # Page type to display. E.g. project.
    page_type: project

    # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
    filter_default: 0

    # Filter toolbar (optional).
    # Add or remove as many filters (`filter_button` instances) as you like.
    # To show all items, set `tag` to "*".
    # To filter by a specific tag, set `tag` to an existing tag name.
    # To remove the toolbar, delete the entire `filter_button` block.
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
    
---
