import { Module } from '@nestjs/common';
import {
  PermissionsModule,
  RolesModule,
  UsersModule,
} from './infrastructure/IoC';

@Module({
  imports: [UsersModule, RolesModule, PermissionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
