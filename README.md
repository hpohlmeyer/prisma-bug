# Prisma bug report

## Steps to reproduce
1. Run `npm install`
2. Run `cd backend`
3. Run `npx prisma generate`
4. Run `npx ts-node index.ts`

You will get the following error:

```
<path-to-repo>/node_modules/@prisma/client/runtime/index.js:38735
          throw new import_engine_core3.PrismaClientKnownRequestError(message, e.code, this.prisma._clientVersion, e.meta);
                ^
PrismaClientKnownRequestError: 
Invalid `prisma.user.aggregate()` invocation:


  The table `main.User` does not exist in the current database.
    at cb (/Users/henno/Development/prisma-bug/node_modules/@prisma/client/runtime/index.js:38735:17)
    at async main (/Users/henno/Development/prisma-bug/backend/index.ts:6:15) {
  code: 'P2021',
  clientVersion: '3.2.0',
  meta: { table: 'main.User' }
}
```