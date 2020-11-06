const Router = require("express").Router();
const connection = require('../../controllers/connection');
const query = require("../../controllers/query");
const dbConfig = require('../../dbConfig');
const create = require('../../crud/create');
// /api/all
Router.route("/all")
    .get(async (req,res)=>{
        const conn = await connection(dbConfig).catch(e=>{})
        const users = await query(
            conn,
            "SELECT * from users"
        )
        res.send(users)
    })

    module.exports = Router;