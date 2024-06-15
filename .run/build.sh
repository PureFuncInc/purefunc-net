#!/bin/bash

rm -rf dist
npm run build
mv build dist
cp .run/CNAME dist
