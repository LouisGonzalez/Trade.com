const express = require('express');
const Router = express.Router();
const Notify = require('../Controller/NotifyController');

const { isLoggedIn, isNotLoggedIn } = require('../Lib/auth');

Router.post('/notify', Notify.createNotify);
Router.get('notify', Notify.findNotifications);