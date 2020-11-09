const Router = require("express").Router();
const connection = require('../../controllers/connection');
const query = require("../../controllers/query");
const dbConfig = require('../../dbConfig');
const create = require('../../crud/create');
const read = require("../../crud/read");
const deleter = require('../../crud/delete')
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

Router.route("/new")
    .put(async (req,res)=>{
        if (!req.body) return res.sendStatus(400); 
        const body = req.body;
        // const {table} = req.params;
        // console.log(`Table: ${table}`)
        const objKeys = Object.keys(body)
        let objArr = Object.values(body)
        // console.log(`Keys: ${objKeys}, Values: ${objArr}`)
        const conn = await connection(dbConfig).catch(e=>console.log(e));
        const result = await create(
            conn,
            "users",
            objKeys,
            objArr
        )
        const [user = {}] = result;
        res.send({
          id: user.id || null,
          username: user.user_name || null,
        });
        res.send(user)
    })

Router.route("/read")
    .get(async (req,res)=>{
        const conn = await connection(dbConfig).catch(e=>console.log(e))
        const result = await read(
            conn,
            "users",
        )
        const [outPut = {}] = result;
        res.send(result)
    })

Router.route("/delete")
    .put(async (req,res)=>{
        if (!req.body) return res.sendStatus(400); 
        const {table, id} = req.body;
        // console.log(`Table: ${table}`)
        const conn = await connection(dbConfig).catch(e=>console.log(e));
        const result = await deleter(
            conn,
            table,
            id
        );
        res.send(result)
    })

    module.exports = Router;