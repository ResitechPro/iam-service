import { IRolesService } from 'src/core/abstracts/services';
import { Role } from 'src/core/entities';

export class CreateRoleUseCase {
  constructor(private readonly rolesService: IRolesService) {}

  async execute(data: any): Promise<Role> {
    return undefined;
  }
}
