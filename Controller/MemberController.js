const express = require('express');

const MemberModel = require('../Model/Querys/MemberModel');

const MemberController = {};

MemberController.createMember = async(req, res) => {
    return await MemberModel.createMember(req, res);
}


module.exports = MemberModel;