import { Injectable } from '@nestjs/common';
import { IUsersService } from 'src/core/abstracts/services';

@Injectable()
export class UsersService extends IUsersService {}
