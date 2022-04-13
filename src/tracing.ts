import {tracer as trace} from 'dd-trace'

trace.init({

});

trace.use('express', {
    enabled: true,
    blocklist: ['/health']
})

export const tracer = trace;