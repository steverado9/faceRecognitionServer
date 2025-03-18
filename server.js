const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrtpt-nodejs');
const cors = require('cors');
const knex = require('knex')

const postgres = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: '',
        password: '',
        database: 'smart-brain',
    },
});

console.log(postgres.select('*').from('users'));


const app = express();

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            password: 'cookies',
            email: 'john@gmail.com',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'sally',
            password: 'bananas',
            email: 'sally@gmail.com',
            entries: 0,
            joined: new Date()
        }
    ]
}