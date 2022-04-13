# Reproduction dd-trace-js blocklist on express

Using
 * NodeJS 16.13.1
 * yarn 1.22.18

```shell
yarn install 
yarn run build
yarn run start
# different shell
curl localhost:3000
curl localhost:3000/health
```

## Expected Behavior
The request to `:3000/` should be traced (the default). The request to `:3000/health` should **not** be traced.

## Actual Behavior
Both requests are traced. 

## Additional information
Even if I set
```ts
trace.use('express', {
    enabled: true,
    allowlist: ['/some-path-that-never-matches']
})
```
I get tracing for all requests.
