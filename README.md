# MERN-starter-kit

> Boilerplate MERN stack starter kit, all wired up

(If this template doesn't work for you: fork it, fix it, pull request)

## Tools

[Express Generator](https://expressjs.com/en/starter/generator.html) used to scaffold backend code

[create-react-app](https://reactjs.org/docs/add-react-to-a-new-app.html) used to scaffold frontend code

**Additional configuration**:

* Proxy for frontend -> backend requests setup
* Scripts to run while in frontend, backend, or fullstack development -- or after "production" deployment to Heroku
* `npm start` script will serve static assets in `build` folder
* ESLint 'standard' config

## How to Use this Template

1. Clone repository
2. `npm i` in the root directory
3. `yarn install` in the `client/` directory
4. Go through boilerplate files and update the things you need

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
5. `npm start` will not serve static assets unless `yarn build` has been run while in child directory `client/` (backend serves static files from the `build/` folder -- which it cannot do if static files have not yet been generated by create-react-app)