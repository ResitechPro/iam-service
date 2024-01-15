import { IRolesService } from 'src/core/abstracts/services';
import { Role } from 'src/core/entities';

export class UpdateRoleUseCase {
  constructor(private readonly rolesService: IRolesService) {}

  async execute(id: string, data: any): Promise<Role> {
    return undefined;
  }
}
