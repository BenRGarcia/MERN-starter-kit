# MERN-starter-kit

> Boilerplate MERN stack starter kit, all wired up

## Tools

[Express Generator](https://expressjs.com/en/starter/generator.html) used to scaffold backend code

[create-react-app](https://reactjs.org/docs/add-react-to-a-new-app.html) used to scaffold frontend code

**Additional configuration**:

* Proxy frontend -> backend requests
* Scripts to run while in frontend, backend, fullstack development, or after "production" deployment to Heroku
* ESLint standard config
* 

## Do These Before Using

### `./bin.www`

* line 8: Update your app name `var debug = require('debug')('PUT-APP-NAME-HERE:server')`
* line 11: Update your mongo `dbName`

### Mongo Database

* Assuming Mongo Database is already installed on your local machine, run `mongod`

## How to Run from Root Directory

To start mongo, run the api server, and launch frontend React App:
`npm run dev`

To run just the api server and start mongo:

`npm run dev-server`

To run just the frontend React app:

`npm run dev-client`

## Directory Structure

**Backend**:

```sh
.
├── app.js        # Server
├── bin/
│   └── www       # Backend entry point
├── build/        # Frontend production build
├── client/
│   └── ...       # Frontend source code
└── routes/       # API routes source code
```

**Frontend**:

```sh
# inside of 'client/'
├── config/          # Misc. config (Jest, Webpack)
├── public/          # Public assets
├── scripts/         # `create-react-app` scripts
└── src/
    ├── App.css      # Global css can go here
    ├── App.js       # Top level React component
    ├── components/  # React components
    │   └── ...        # (generally stateless/functional "leaf" components)
    ├── containers/  # React component containers
    │   └── ...        # (generally stateful/class components)
    └── index.js     # App render()'ed
```

## Notes

1. create-react-app ejected to change webpack config of `yarn build` file path
2. Template made with intent for app deployment to Heroku
3. Frontend port is 3000, Server port is 3001
4. Frontend proxy already set up, avoids CORS while in local development
5. `npm start` will not work unless `yarn build` has been run while in child directory `client/` (backend serves static files from the `build/` folder -- which it cannot do if static files have not yet been generated)