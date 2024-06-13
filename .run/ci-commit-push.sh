#!/bin/bash

git config --global user.name github-actions
git config --global user.email yfr.huang@hotmail.com

git add -A

if ! git diff-index --quiet HEAD --; then
  git commit -m "🚀 Deployed by GitHub Actions"
  git push
else
  echo "No changes to push."
fi
