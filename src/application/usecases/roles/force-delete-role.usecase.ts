import { IRolesService } from 'src/core/abstracts/services';

export class ForceDeleteRoleUseCase {
  constructor(private readonly rolesService: IRolesService) {}

  async execute(id: string): Promise<void> {
    return undefined;
  }
}
