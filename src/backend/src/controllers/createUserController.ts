import { FastifyRequest, FastifyReply } from 'fastify';
import { createUserService } from '../services/createUserService';



class CreateItemController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const itemBody = request.body as UserI
        const itemService = new createUserService()
        const item = await itemService.execute(itemBody);
        reply.send(item)
    }
}

export { CreateItemController }