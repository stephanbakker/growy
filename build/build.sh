#!/bin/bash

BASEDIR=$(dirname $0);

cd $BASEDIR

# check and create dist folder
if [ -d "../dist" ] 
then
    echo "remove ../dist"
    rm -r ../dist
fi

# create dist folder
mkdir ../dist

cd ../dist

# uglify growy(-jquery).js
uglifyjs -o growy.min.js ../vanilla/growy.js
uglifyjs -o growy-jquery.min.js ../jquery/growy-jquery.js

cp ../vanilla/index.html vanilla.html
cp ../jquery/index.html jquery.html

# replace script to [script].min.js in html
sed -i "" 's/growy\(.*\)\.js/growy\1.min\.js/g' *.html
