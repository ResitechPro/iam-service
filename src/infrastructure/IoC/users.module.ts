import { Module } from '@nestjs/common';
import { UsersController } from 'src/adapters/controllers';
import { IUsersService } from 'src/core/abstracts/services';
import { UsersService } from 'src/application/services';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: IUsersService,
      useClass: UsersService,
    },
  ],
})
export class UsersModule {}
