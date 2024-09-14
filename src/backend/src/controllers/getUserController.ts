import { FastifyRequest, FastifyReply } from 'fastify';
import { GetUserService } from '../services/getUserService';
import prismaClient from '../client';


class GetUserController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const queryParams = request.query as any;
        const getItemService = new GetUserService();

        // Passa os filtros para o serviço
        const items = await getItemService.execute();

        // Envia a lista de itens filtrados
        return reply.send(items);
    }
}

export { GetUserController }