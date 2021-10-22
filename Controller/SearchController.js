const express = require('express');

const PostModel = require('../Model/Querys/PostModel');

const SearchController = {};

SearchController.findPost = async (req, res) => {
    return await PostModel.searchPost(req, res);
}

module.exports = SearchController;