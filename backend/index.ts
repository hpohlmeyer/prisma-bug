import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log(await prisma.user.count());
}

main()
  .catch((e) => { throw e })
  .finally(async () => await prisma.$disconnect())
