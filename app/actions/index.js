import fetch from 'isomorphic-fetch'
var config = require('../../build/default')
var port=config.dev.port
let uri = 'http://localhost:'+port+'/api/index';
export async function queryList(state,dispatch){

   return fetch(uri)
          .then(res=>res.json())
          .then(data=>{
              dispatch({
                  type:'SET_HOME_DATA',
                  payload:data.result
              })
          })
}
