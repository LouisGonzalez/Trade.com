const express = require('express');
const NotifyModel = require('../Model/Querys/NotifyModel');

const NotifyController = {};

NotifyController.createNotify = async(req, res) => {
    return await NotifyModel.createNotification(req, res);
}

NotifyController.findNotifications = async(req,res) => {
    return await NotifyModel.returnNotifications(req, res);
}

module.exports = NotifyController;