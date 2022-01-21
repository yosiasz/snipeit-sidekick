
import * as express from 'express';
var http = require('http')
const axios = require('axios');

const snipeit = require('../config/index').snipeit;

module.exports = {
  getUsersv2: async (request: express.Request, response: express.Response) => {
    try {   
      var options = { 
        hostname: snipeit.hostname,
        port: snipeit.port,        
        path: snipeit.api_path + '/users',
        method: 'GET',                
        headers: { 
          'Accept': 'application/json',
          "Authorization": "Bearer " + snipeit.token
        }
      };        
      let data = [];
      const req = http.request(options, res => {
      res.on('data', d => {
        data.push(d);
      })

      res.on('end', () => {
        const asset = JSON.parse(Buffer.concat(data).toString());
        response.send(asset);          
      });          
    })
    
    req.end()
    } catch (error) {
      console.log('getAssets', error)
    }   
  } ,  
    getUsers: async (request: express.Request, response: express.Response) => {
      try {   
        
        const options = {
          method: 'GET',
          headers: { 
            'Accept': 'application/json',
            "Authorization": "Bearer " + snipeit.token
          },
          data: {
            limit: 10,
            fields: 'id,name',
            expand: true,
            order: 'asc',
            output: 'default',
            sort: 'id',
            search: ''
          },          
          url: 'http://localhost:8085/api/v1/users',
        };   
        
        //let data = [];
         
        await axios(options)
          .then(res => response.json(res.data))

      } catch (error) {
        console.log('getUsers', error)
      }   
    }        
};