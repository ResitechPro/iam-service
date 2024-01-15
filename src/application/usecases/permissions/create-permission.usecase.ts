import { IPermissionsService } from 'src/core/abstracts/services';
import { Permission } from 'src/core/entities';

export class CreatePermissionUseCase {
  constructor(private readonly permissionsService: IPermissionsService) {}

  async execute(data: any): Promise<Permission> {
    return undefined;
  }
}
