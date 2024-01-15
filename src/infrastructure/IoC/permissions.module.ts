import { Module } from '@nestjs/common';
import { PermissionsController } from 'src/adapters/controllers';
import { IPermissionsService } from 'src/core/abstracts/services';
import { PermissionsService } from 'src/application/services';

@Module({
  controllers: [PermissionsController],
  providers: [
    {
      provide: IPermissionsService,
      useClass: PermissionsService,
    },
  ],
})
export class PermissionsModule {}
