export default {
    mongodb: {
      uri: 'mongodb://localhost:27017/users',
    },
    server: {
      port: 3000,
      host: 'localhost',
    },
    bodyParser: {
      extend: true,
    },
    consign: {
      cwd: 'src',
      extensions: [ '.js'],
      verbose: false,
    },
  };