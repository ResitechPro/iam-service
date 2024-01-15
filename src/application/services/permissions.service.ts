import { Injectable } from '@nestjs/common';
import { IPermissionsService } from 'src/core/abstracts/services';

@Injectable()
export class PermissionsService extends IPermissionsService {}
