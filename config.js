module.exports = {
  port: 3001,
  db: process.env.MONGODB || 'mongodb://facturation:testfacturation1@ds141932.mlab.com:41932/facturation',
  secretToken: 'TokenforJWTConfiguration'
}