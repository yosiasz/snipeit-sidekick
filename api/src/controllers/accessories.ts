const axios = require('axios');
import * as express from 'express';
var http = require('http')

const snipeit = require('../config/index').snipeit;

module.exports = {
    getAccessories: async (request: express.Request, response: express.Response) => {
      try {   
        var options = { 
          hostname: snipeit.hostname,
          port: snipeit.port,        
          path: snipeit.api_path + '/accessories',
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
    getAccessory: async (request: express.Request, response: express.Response) => {
      try {   
          
          var id = request.params.id;

          var opt = {
            hostname: snipeit.hostname,
            port: snipeit.port,
            path: snipeit.api_path + '/accessories/' + id,
            method: 'GET',    
            headers: { 
              'Accept': 'application/json',
              "Authorization": "Bearer " + snipeit.token
            }
          };

          let data = [];
          const req = http.request(opt, res => {
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
        console.log('getAsset', error)
      }   
    }        
};