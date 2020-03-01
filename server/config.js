module.exports = {
  port: 8080,
  db: {
    prod: process.env.DATABASE_URL || 'mongodb+srv://churchill-iuvo:d8h2EHR7%5Ecv%23nGt@churchill-3shc2.mongodb.net/test?retryWrites=true&w=majority',
    test: 'mongodb+srv://churchill-iuvo:d8h2EHR7%5Ecv%23nGt@churchill-3shc2.mongodb.net/test?retryWrites=true&w=majority',
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
