## CP+B Candidate Lab

Hello and thank you for taking the time to work on this lab!

This lab is an opportunity for us to have a conversation about practices, conventions, and workflow.
It will also help us better understand you as a developer. 
Please use this as a way to communicate through your craft.


# Setup

1. Fork this repo and clone to your computer
2. Setup the project in your preferred IDE
3. View index.html in the browser (/www)
4. Open the psd file in /psd (/psd)


# Development

* Improve semantic structure and content of the HTML
* Incorporate missing design elements (per psd)
* Create an RSVP message onClick of 'Yes' or 'No':
  ** Provide feedback to the user with confirmation of their choice
  ** Design, behavior, and messaging are up to you
  ** Plug-ins, libraries, and frameworks are permitted
* Modify anything and everything you think should be different/improved. Document the reasoning for your changes in the Notes section.


# Workflow

Please make atomic commits (commit often) as you progress. 
Be sure to provide useful commit messages to illustrate milestones and workflow.
Submit a pull request when you are finished and satisfied with your work.

# Notes

### Card Images
- ideally: work with designer to get non-rotated version of images, cut as jpegs, rotate with css
- currently: images sliced as pngs because it is more flexible to update/change
  - compressed images: TABLE OF IMAGE DIFFS

### CSS
- Convert to SASS (Compass)
  - include rgba gem for semi-transparent background support
- Created partials for base, chromeframe, helper, and normalize
- removed uses of IDs -- IDs are for document fragments
- perfer more of a class dependent css styling (more like BEM, oocss, etc.)

### Design
- no indication of what it looks like beyond 818px.
- no indication of hover states (no layer comps)

### Semantics
- html5 elements (main, section, aside) creates more semantic meaning
- microformat data

### JS
- Leveraging Grunt to compile the javascript
  - leveraging jshint in a watch task to monitor code during development
  - removed a js request
- showcasing use of js templating through doT.js
