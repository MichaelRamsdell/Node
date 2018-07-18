const csvFilePath='./customer-data.csv'
const csv=require('csvtojson')
const fs = require('fs')

const path = require('path')

csv().fromFile(csvFilePath).then((jsonObj)=>{
    let buff=''
    try{
   buff=JSON.stringify(jsonObj)
  

  } catch (e) {
    console.error(e.message)
  }

fs.writeFileSync('Jsonfile.json',buff)
return buff
})
 
// Async / await usage
const jsonArray= csv().fromFile(csvFilePath);
 


