# feathers-chat-sequelize

> Feathers chat demo app using sequelize ORM with Pgsql database.

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies
    
    ```
    cd path/to/feathers-pg; npm install
    ```

3. Start your app
    
    ```
    npm start
    ```

## Changelog

__0.1.0__

- Initial release. 
This demo app is not completely functional yet, it has one remaining bug: services/message/hooks/index.js uses hooks.populate as an after hook in the find method. But this
throws an uncaught error that traces to feathers-authentication/lib/hooks/restrict-to-owner when there are messages from different users in the database. Basically, somewhere in there there is a hook that is not allowing us to retrieve messages posted by other users.

If you want to see how the code changes from the original feathers chat demo app that uses NeDB, look for occurrences of "Sequelize-demo" as comments. 

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
