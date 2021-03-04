# Weather Forecast App

## Introduction

- Weather Forecast is an applcation to let user search for weather information based on the city name.
- Website: https://bntn-weather-forecast.herokuapp.com (since I'm using the free server host Heroku, please expect the slow loading at the first time).
- This application is designed to serve responsive layouts.

<img src="https://bntnam.github.io/img/portfolio/weather-forecast-desktop.png" width="400" alt="desktop" />
<br />
<img src="https://bntnam.github.io/img/portfolio/weather-forecast-tablet.png" height="300" alt="tablet" />
<img src="https://bntnam.github.io/img/portfolio/weather-forecast-mobile.png" height="300" alt="mobile" />

## Overview

- Tech stack: React and its ecosystem.

- Design system:

  - State management: using React Hooks & React Context to manage state.
  - Style management: using Styled Components on the purpose of component orientation & Styled Media Query for responsive layouts.

## Prerequisites

These versions were used at the development time

```
node@12.19.0
npm@6.14.8
```

## Usage

1. First and foremost:

```
$ npm install
```

2. Running:

2.1. To run the application on local:

```
$ npm start
```

2.2. To run the application on production mode:
(Due to the CORS issue, create-react-app proxy is no longer to work on the production, hence a proxy server comes as a solution)

```
$ npm run server
```

## Testing

```
$ npm run test:coverage
```

- One integration test for user flow is defined in `src/__test__`
- Other unit tests are named as `{name}.test.js` within the same component's folders
- Snapshot tests are applied for atom components.

<img src="https://bntnam.github.io/img/portfolio/weather-forecast-coverage.png" width="400" alt="desktop" />

## Project Structure

```
bntn-weather-forecast/
├── public                  # Favicon
├── server                  # Proxy server to handle CORS on production
├── src
│   ├── __test__            # Integration test of user flow
│   ├── api                 # Axios
│   ├── assests             # Static files
│   ├── components          # Components
│   ├── context             # React Context
│   ├── hooks               # React Hooks
│   ├── shared              # Logos
│       ├── atoms           # Element components
│       ├── mockTest        # Mocks are served testing
│       ├── styles          # Style rules
│       └── utils           # Utilities function
└── .eslintrc               # Linter
└── package.json            # Pre-commit is included
```
