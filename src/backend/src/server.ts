import Fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './routes/routes';

const fastifyApp = Fastify({
    logger: true
})


const startFastify = async () => {
    
    await fastifyApp.register(cors);
    await fastifyApp.register(routes);

    try {
        await fastifyApp.listen({port: 3001})
    }catch(error) {
        process.exit(1)
    }
}



startFastify()