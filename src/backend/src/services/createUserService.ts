import prismaClient from "../client";


class createUserService {
    async execute(item: UserI) {
        
        const itemData = await prismaClient.user.create({
            data: item
        })

        return itemData
    }
}


export  { createUserService}