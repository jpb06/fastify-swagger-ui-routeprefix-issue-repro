import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';
import { type FastifyInstance, fastify } from 'fastify';

const instance: FastifyInstance = fastify({
  logger: true,
});
await instance.register(fastifySwagger, {
  swagger: {
    basePath: 'api/v1',
  },
  openapi: {
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
  },
});
await instance.register(fastifySwaggerUI, {
  routePrefix: '/api/v1/docs',
});
instance.get('/', (_request, reply) => {
  reply.send({ hello: 'world' });
});
await instance.listen({
  port: 3000,
  host: '127.0.0.1',
  listenTextResolver: (address: string) =>
    `Application listening at ${address}`,
});
