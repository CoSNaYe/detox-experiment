# Experiment for React Native + Jest + Detox + MSW

## Get Started

1. `yarn install && cd ios && bundle && bundle exec pod install && cd ..`
2. Run integration tests: run `yarn test`, it should pass all
   tests.
3. Run e2e tests:
   -  run `detox build --configuration ios` to make the app server up, it should
      run in the background
   -  open another terminal and run `detox test --configuration ios` (the test
      cases should at least run, but it just has errors now)
