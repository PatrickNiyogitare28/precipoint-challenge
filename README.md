# Precipoint TechChallenge

The techinical challenge

## JSON server

You need to first run the JSON server by

`yarn api` or `npm run api`

> The JSON server will be running at http://localhost:3000

The app contains an integrated JSON server that is used to provide mocked data.
## Running server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Used Tool

- Ngrx for global bread crumb state management
- Rxjs for reactive programing and service subscription
- Scss for styling

## Modulization

The application is bundled into modules 

- courses
    - students
    - courses
        - course cases
            - slides
        
- agendas
    - monthly agendas
        - activities

Each module is configured to have it's routing module that is wrapped into app module.

The whole modules are not loaded in the app modules at once to optimize the performance by allowing the app to load only modules that are currently needed.

## Maintainer 

patrickniyogitare28@gmail.com



