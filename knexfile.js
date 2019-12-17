// Update with your config settings.

module.exports = {
  development: {
    client: "pg", // This setting corresponds to the db connection js package
    connection: {
      database: "cluckr"
      
    },
    migrations: {
      tableName: "migrations",
      directory: "./db/migrations"
    },
    
  }
};