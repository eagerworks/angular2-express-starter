<img height="50" src="https://angular.io/resources/images/logos/angular2/angular.svg" />
<img height="50" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" />
<img height="50" src="https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67" />

# Angular 2 with Express starter project template. Heroku ready.

Simple [Angular 2](https://angular.io/) starter project template, uses [node.js](https://nodejs.org) with [express](http://expressjs.com/) as a server. Project base was generated using [angular-cli](https://github.com/angular/angular-cli). `angular-cli` is used for the development environment and `Express` for production. Heroku ready.
You can try the live version [here](https://angular-2-express-starter.herokuapp.com).

## Installation

Make sure you have `node` (and `npm`) installed on your system.

1. Clone this repository:
  ```
  git clone https://github.com/eagerworks/angular2-express-starter.git
  ```

2. Navigate to the project:
  ```
  cd angular2-express-starter
  ```

2. Install [angular-cli](https://github.com/angular/angular-cli#installation), `typescript` and `typings` (typescript defintion manager):
  ```
  npm install angular-cli --global
  npm install typescript --global
  npm install typings --global
  ```

3. Fill `package.json` with appropiate information about your project (name, version, description, etc.)

4. Install packages:
  ```
  npm install
  ```

5. Run `ng serve` to start the server on a development environment

6. Navigate to `localhost:4200`

7. You are all set!

## Testing

To run unit tests:
```
ng test
```
Unit tests are located under the `src/app/specs` folder.

To run end-to-end tests:
```
ng e2e
```
End-to-end tests are located under the `e2e` folder.

## Deploying to heroku

This project uses an `Express` server for production environment, that lets you fine tune how the app is served. If you want to test it locally, run:
```
npm postinstall
npm start
```

Take into account that the server forces an `https` redirection by default.

## Notes
An example service is included under `src/app/services/user_service.ts` that shows how to perform basic user authentication.
Some minimal styles are shown for both global and component styling under `src/styles.scss` and `src/app/stylesheets` respectively.

Express server is located under the `/server` folder. You can tune it to your specific needs. The server does an `https` redirection to force a secure connection, if you want to disable this behaviour just comment the `app.use(forceSSL());` line.

Environment variables can be defined on `src/enviroments`. Update the files contained there accordingly, to point to your API endpoints.

## Contributing
Bug reports and pull requests are welcome

1. Fork it ( https://github.com/eagerworks/angular2-express-starter/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

This project was brought to you by [eagerWorks](http://www.eagerworks.com)
