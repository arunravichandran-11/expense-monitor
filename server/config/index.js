module.exports = {
    // Environment
    environment: 'local',
  
    // MongoDB
    mongo: {
      connectionString: 'mongodb://localhost/expenseDB',
      settings: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
        //   db: {native_parser: true},
      },
    },
  
    port: 5000,
  
    // keys for authentication
    // jwtKeys: {
    //   privateKey: './config/secret-keys/private.key',
    //   publicKey: './config/secret-keys/public.key',
    // },
  };