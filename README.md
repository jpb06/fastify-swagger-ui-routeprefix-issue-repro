# fastify-swagger-ui-routeprefix-issue-repro

This is a repro for [@fastify/swagger-ui](https://github.com/fastify/fastify-swagger-ui).

It's appears [#178](https://github.com/fastify/fastify-swagger-ui/pull/178) is causing an issue when using a complex path in routePrefix.

## Minimal reproduction

```ts
await instance.register(fastifySwaggerUI, {
  routePrefix: '/api/v1/docs',
});
```

Using this `routePrefix` causes resources to have the following path `/api/v1/api/v1/docs/static`.

## Run repro

run the following command:

```bash
bun dev
```

and head to [http://127.0.0.1:3000/api/v1/docs](http://127.0.0.1:3000/api/v1/docs).
