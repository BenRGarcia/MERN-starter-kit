# MERN-starter-kit

> Boilerplate MERN stack starter kit

## Tools

[Express Generator](https://expressjs.com/en/starter/generator.html) used to scaffold backend code

[create-react-app](https://reactjs.org/docs/add-react-to-a-new-app.html) used to scaffold frontend code

## Directory Structure

Backend:

```sh
.
├── app.js        # Server
├── bin
│   └── www       # Backend entry point
├── build         # Frontend production build
├── client
│   └── ...       # Frontend source code
└── routes        # API routes source code
```

Frontend:

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

## Do These Before Using

1. Update your mongo db name in `./bin/www`
2. 

## Notes

1. create-react-app ejected to change webpack config of `yarn build` file path