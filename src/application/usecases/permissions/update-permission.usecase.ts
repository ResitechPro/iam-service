import { IPermissionsService } from 'src/core/abstracts/services';
import { Permission } from 'src/core/entities';

export class UpdatePermissionUseCase {
  constructor(private readonly permissionsService: IPermissionsService) {}

  async execute(id: string, data: any): Promise<Permission> {
    return undefined;
  }
}
