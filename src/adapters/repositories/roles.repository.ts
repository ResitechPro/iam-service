import { IGenericRepository } from 'src/core/abstracts/repositories';
import { Role } from 'src/core/entities/role.entity';

export class RolesRepository extends IGenericRepository<Role> {
  create(data: Role): Promise<Role> {
    return undefined;
  }

  findAll(): Promise<Role[]> {
    return undefined;
  }

  findById(id: string): Promise<Role> {
    return undefined;
  }

  update(id: string, data: Role): Promise<Role> {
    return undefined;
  }

  delete(id: string): Promise<Role> {
    return undefined;
  }

  forceDelete(id: string): Promise<void> {
    return undefined;
  }
}
