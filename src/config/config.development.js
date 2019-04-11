export default {
  mongodb: {
    useNewUrlParser: true,
    uri: 'mongodb://localhost:27017/desafionode',
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
    extensions: ['.js'],
    verbose: false,
  },
  jwt: {
    secret: 'concrete-solution-token',
    config: {
      expiresIn: 30 * 60,
    },
  },
};
