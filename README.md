# natwest-frontend

## Versions

### Node - v16.14.0
### npm - 8.5.3

## Available Scripts

To install all dependencies, run:

### `npm install`

To start development server, run:

### `npm start`

To builds the app for production, run:

### `npm run build`

## Description about the app:

Created standalone react app.

### Libraries used:

Used `react-bootstrap` to style the app.
Used `axios` to make network calls.
Used `react-infinite-scroll-component` to load data while scrolling.
Used `react-error-boundary` to work with handling errors.


## Enhancements:

Even though app covers all the three tasks, apps lags with some performance optimization. 

If I get more time then i will work on performance optimization of the app by introducing,
* Lazy loading
* Dynamic import
* Use some optimization technique like `useMemo()` and `useCallback()` hooks.

If you were given more filter optoin instead of one, then I would introduce `redux` to work with complex state logic.