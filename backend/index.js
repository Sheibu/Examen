const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');
// Configuraciones
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Rutas
app.use('/api/libros', require('./routes/libro.routes'));
app.use('/api/quejas', require('./routes/queja.routes'));

// Server Starto!
app.listen(app.get('port'), () => {
    console.log('Server listening on port', app.get('port'));
})
 