export default {
  mongodb: {
    useNewUrlParser: true,
    uri: 'mongodb://aplication:TqRXj7hGPainDMp@ds137596.mlab.com:37596/heroku_3qs8r4tn',
  },
  server: {
    port: 3000,
    host:  process.env.YOUR_HOST || '0.0.0.0',
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
