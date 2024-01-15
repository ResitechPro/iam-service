import { IGenericRepository } from 'src/core/abstracts/repositories';
import { Permission } from 'src/core/entities/permission.entity';

export class PermissionsRepository extends IGenericRepository<Permission> {
  create(data: Permission): Promise<Permission> {
    return undefined;
  }

  findAll(): Promise<Permission[]> {
    return undefined;
  }

  findById(id: string): Promise<Permission> {
    return undefined;
  }

  update(id: string, data: Permission): Promise<Permission> {
    return undefined;
  }

  delete(id: string): Promise<Permission> {
    return undefined;
  }

  forceDelete(id: string): Promise<void> {
    return undefined;
  }
}
