#Maxconnect Build Tool

This builder is made to help create a pegboard skin employing the DRY concept of coding.

##Assets 
found under `cwd/assets` convert to `render/assets`
##HTML
Using the same structure for pegboard.
- Layouts
- Pages
- Collections
- Emails

###Includes
found under `cwd/includes` set as base for includes here is some example include code
```
@@include('h1.html',{
                "text": "Hello World"
                })
``` 
Html includes allow variables like so this would be `h1.html`
```html
<h1>@@text</h1>
```
This would render
```html
<h1>Hello World</h1>
```

##Less
bootstrap less files and your less files are concatnated from
`cwd/assets/less/*.less`
`bower_components/less/*less` = `render/skin.css`
##Js
bootstrap js files and your js files are concatnated from
`cwd/assets/js/*.js`
`bower_components/js/*js` = `render/skin.css`


##Gulp
###Commands
Only 1 command so far `gulp`
*more coming soon*
###Deps
    "gulp-concat": "^2.5.2",
    "gulp-minify-css": "^1.0.0",
    "del": "^1.1.1",
    "gulp-jshint": "^1.9.4",
    "gulp-uglify": "^1.1.0",
With more enhancements to come.

###Additional Information 

###Installation Progress###
Install node.js (windows, linux, mac)

- npm install bower
- bower install
- npm install
- npm install clean-css

Dependiences



