import { IRolesService } from 'src/core/abstracts/services';
import { Role } from 'src/core/entities';

export class DeleteRoleUseCase {
  constructor(private readonly rolesService: IRolesService) {}

  async execute(id: string): Promise<Role> {
    return undefined;
  }
}
