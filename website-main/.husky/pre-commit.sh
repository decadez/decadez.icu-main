#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

cd website-main
yarn lint-staged