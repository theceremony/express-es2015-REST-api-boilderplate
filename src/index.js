// server.js

// BASE SETUP
// =============================================================================

import http       from 'http';
import express    from 'express';
import cors       from 'cors';
import morgan     from 'morgan';
import bodyParser from 'body-parser';
import config     from './config.json';
import api        from './api';

//~ ------------------------
let app = express();
    app.server = http.createServer(app);

// logger ------------------
app.use(morgan('dev'));

// 3rd party middleware ----
app.use(cors({ exposedHeaders: config.corsHeaders }));
app.use(bodyParser.json({ limit : config.bodyLimit }));


app.use('/api', api({ config }));

//~ ------------------------
app.server.listen(process.env.PORT || config.port);

//~ ------------------------
export default app;
