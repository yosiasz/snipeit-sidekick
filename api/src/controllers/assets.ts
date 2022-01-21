import * as express from 'express';
var http = require('http')

const snipeit = require('../config/index').snipeit;
const options = { 
  hostname: snipeit.hostname,
  port: snipeit.port, 
  path: '', 
  method: '',
  headers: { 
    'Accept': 'application/json',
    "Authorization": "Bearer " + snipeit.token
  }
};   
module.exports = {
    getAssets: async (request: express.Request, response: express.Response) => {
      try {   
        options.path = snipeit.api_path + '/hardware';     
        options.method = 'GET';

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
    getAsset: async (request: express.Request, response: express.Response) => {
      try {   
          
          var assetid = request.params.assetid;
          options.path = snipeit.api_path + '/hardware/' + assetid;     
          options.method = 'GET';
        

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
        console.log('getAsset', error)
      }   
    }        
};