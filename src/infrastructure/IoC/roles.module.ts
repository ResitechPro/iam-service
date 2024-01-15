import { Module } from '@nestjs/common';
import { RolesController } from 'src/adapters/controllers';
import { IRolesService } from 'src/core/abstracts/services';
import { RolesService } from 'src/application/services';

@Module({
  controllers: [RolesController],
  providers: [
    {
      provide: IRolesService,
      useClass: RolesService,
    },
  ],
})
export class RolesModule {}
