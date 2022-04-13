// noinspection ES6UnusedImports
import {tracer as _tracer} from './tracing'

import * as express from 'express';

const server = express();

server.use((req, _res, next) => {
    const span = _tracer.scope().active();
    console.log(`${req.method} ${req.originalUrl}`, span?.context()?.toTraceId());
    next();
});

server.get('/', (_req, res) => {
    res.json({});
});
server.get('/health', (_req, res) => {
    res.json({
        status: 'ok'
    });
});

server.listen(3000);