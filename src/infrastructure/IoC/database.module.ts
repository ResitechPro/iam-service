import { FactoryProvider, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';
import { PrismaClientManager } from '../database/prisma-client-manager';

export interface ContextPayload {
  tenantId: string;
}

export const prismaClientProvider: FactoryProvider<PrismaClient> = {
  provide: PrismaClient,
  scope: Scope.REQUEST,
  durable: true,
  useFactory: (ctxPayload: ContextPayload, manager: PrismaClientManager) => {
    return manager.getClient(ctxPayload.tenantId);
  },
  inject: [REQUEST, PrismaClientManager],
};

@Module({
  providers: [PrismaClientManager, prismaClientProvider],
  exports: [PrismaClient],
})
export class DatabaseModule {}
