#!/bin/bash

rm -rf docs
npm run build
mv build docs
cp .run/.nojekyll docs
cp .run/CNAME docs
git add -A
