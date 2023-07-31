We have:
angular-material   =>   @angular/material    
and
material   =>   material    
---------------------
i have used gulp-rename to remove underline(_) at first of files name then i copy them in angular-material and material folder
i am using gulp and its scss compiler to compile angular material form-field module in to ./dist/form-field.css
then i turned ./dist/form-field.css to ./dist/form-field.scss with a function added to it in order to convert px to rem
after that i have added a new gulp task named sass-second to compile ./dist/form-field.scss and save the compiled scss
in the ./dist/second/form-field.css
---------------------
use this for learning porpuse