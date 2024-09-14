import prismaClient from "../client";

class GetUserService {
    async execute() {
        
        const itens = await prismaClient.user.findMany()
        return itens
    }
}


export  { GetUserService}