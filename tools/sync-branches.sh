#!/usr/bin/env sh

set -e

function cascade {

  if [ $1 == "--skip-tests" ]
  then
    local SKIP_TESTS=true
    shift
  fi

  local PARENT=$1
  shift

  for CURRENT in $*; do

    git checkout $CURRENT
    git merge --no-edit $PARENT
    [ "$SKIP_TESTS" = "true" ] || yarn test
    git push

    PARENT="$CURRENT"

  done

}

cascade --skip-tests boilerplate \
  ut-01-karma-jasmine-boilerplate

cascade boilerplate \
  ut-02-first-unit-test \
  ut-03-jest-test-each \
  ut-04-progressive-tdd \
  ut-05-spies
