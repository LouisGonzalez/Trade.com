const express = require('express');

const ContactModel = require('../Model/Querys/ContactModel');

const ContactController = {};

ContactController.createContact = async(req, res) => {
    return await ContactModel.createContact(req, res);
}

ContactController.getContacts = async(req, res) => {
    return await ContactModel.returnContacts(req, res)
}

module.exports = ContactController;