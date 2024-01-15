import { IRolesService } from 'src/core/abstracts/services';
import { Role } from 'src/core/entities';

export class GetAllRolesUseCase {
  constructor(private readonly rolesService: IRolesService) {}

  async execute(): Promise<Role[]> {
    return undefined;
  }
}
