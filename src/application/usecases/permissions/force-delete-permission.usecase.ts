import { IPermissionsService } from 'src/core/abstracts/services';

export class ForceDeletePermissionUseCase {
  constructor(private readonly permissionsService: IPermissionsService) {}

  async execute(id: string): Promise<void> {
    return undefined;
  }
}
