'use strict';

const restrictToSender = require('./restrict-to-sender');

const process = require('./process');

const globalHooks = require('../../../hooks');
const auth = require('feathers-authentication').hooks;
const hooks = require('feathers-hooks-common');

const populateSender = hooks.populate('sentBy', {
  service: 'users',
  field: 'userId'
});

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [process()],
  update: [restrictToSender()],
  patch: [restrictToSender()],
  remove: [restrictToSender()]
};

exports.after = {
  all: [],
  // Sequelize-demo: Calling populateSender on find throws an error that traces to feathers-authentication/lib/hooks/restrict-to-owner. This only happens when you have messages by different users. No idea how to fix this.
  find: [populateSender],
  get: [populateSender],
  create: [populateSender],
  update: [],
  patch: [],
  remove: []
};
