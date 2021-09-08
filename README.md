<img src="/Ares_readme_banner.png">

* File Structure
- componenets
-- Shared components
--- each component
out dir
server
etc
* state folder: hold all state objects with useContext, reference them from within the widgets/components
* remember to look up how to bundle assets with webpack
* Testing notes: Test files for each component
ex. Single review component (tile)
  Each tile should have it's own testing file

  another component: related item card
  Provide related-item.spec.js

** Library folder: will it cause issues when we compile using webpack
