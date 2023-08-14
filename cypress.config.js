const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const mysql = require("mysql");
const mssql = require('mssql');



async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));


 

  // config.db = {
  //   userName: "devesh123",
  //   password: "Devesh5555@",
  //   server: "DEVESH\\SQLEXPRESS",
  //   options: {
  //     database: "devdb",
  //     encrypt: true,
  //     rowCollectionOnRequestCompletion: true
  //   }
  // }



  // tasks = sqlServer.loadDBPlugin(config.env.sqldb);
  // on('task', tasks);




  // on('task', {
  //   'sqlServer:execute': async (sql) => {
  //     try {
  //       const pool = await mssql.connect(config.env.sqldb); // Assumes you have stored the MS SQL Server configuration in cypress.json
  //       const result = await pool.request().query(sql);
  //       return result.recordset;
  //     } catch (error) {
  //       throw new Error(`Failed to execute SQL query: ${sql}. Error: ${error.message}`);
  //     }
  //   }
  // });

  // My Sql
  on("task", {
    queryDb: query => {
      return queryTestDb(query, config);
    }
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: ['cypress/e2e/integration/example/BDD/feature/*.feature']
    ,setupNodeEvents,
  },

  env: {

    db: {
      host: "localhost",
      user: "root",
      password: "Devesh5555@",
      database: "dev"
     },

     sqldb : {
      userName: "devesh123",
      password: "Devesh5555@",
      server: "DEVESH\\SQLEXPRESS",
      options: {
        database: "devdb",
        encrypt: true,
        rowCollectionOnRequestCompletion: true
      },

    }

     
  }
});



function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}



// module.exports = (on, config) => {
//   on('task', {
//     'sqlServer:execute': async (sql) => {
//       try {
//         const pool = await mssql.connect(config.env.sqldb); // Assumes you have stored the MS SQL Server configuration in cypress.json
//         const result = await pool.request().query(sql);
//         return result.recordset;
//       } catch (error) {
//         throw new Error(`Failed to execute SQL query: ${sql}. Error: ${error.message}`);
//       }
//     }
//   });
// };

