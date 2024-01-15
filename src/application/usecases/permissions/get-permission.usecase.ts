import { IPermissionsService } from 'src/core/abstracts/services';
import { Permission } from 'src/core/entities';

export class GetPermissionUseCase {
  constructor(private readonly permissionsService: IPermissionsService) {}

  async execute(id: string): Promise<Permission> {
    return undefined;
  }
}
