#!/usr/bin/env sh

set -e

function cascade_changes() {

  if [ $1 == "--skip-tests" ]; then
    local SKIP_TESTS=true
    shift
  fi

  local PARENT=$1
  shift

  for CURRENT in $*; do

    git checkout $CURRENT
    git merge --no-edit $PARENT
    [ "$SKIP_TESTS" = "true" ] || yarn test

    PARENT="$CURRENT"

  done

  git push --all

}

cascade_changes --skip-tests \
  master \
  ut-01-karma-jasmine-boilerplate

cascade_changes \
  master \
  ut-02-first-unit-test \
  ut-03-jest-test-each \
  ut-04-progressive-tdd \
  ut-05-spies \
  ut-06-component-shallow-testing-boilerplate \
  ut-07-component-shallow-testing \
  ut-08-component-refactoring-async-pipe \
  ut-09-component-integration-testing \
  ut-10-component-dom-testing \
  ut-11-component-harness \
  ut-12-form-testing \
  ut-13-form-testing-with-harness \
  ut-14-component-output-testing \
  ut-15-http-testing \
  ut-16-visual-regression-testing-boilerplate
