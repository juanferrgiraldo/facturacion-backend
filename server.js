const app = require('./app')
const config = require('./config')

app.listen(config.port, 
            _=> console.log(`API Facturación corriendo en ${config.port}\nConexión de mongo a mlab`))