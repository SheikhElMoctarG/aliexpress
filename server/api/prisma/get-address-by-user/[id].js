import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    let address = await prisma.addresses.findFirst({where: {userId: Number(event.context.params.id)}})
    return address;
})
