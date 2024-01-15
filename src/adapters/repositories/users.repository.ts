import { IGenericRepository } from 'src/core/abstracts/repositories';
import { User } from 'src/core/entities/user.entity';

export class UsersRepository extends IGenericRepository<User> {
  create(data: User): Promise<User> {
    return undefined;
  }

  findAll(): Promise<User[]> {
    return undefined;
  }

  findById(id: string): Promise<User> {
    return undefined;
  }

  update(id: string, data: User): Promise<User> {
    return undefined;
  }

  delete(id: string): Promise<User> {
    return undefined;
  }

  forceDelete(id: string): Promise<void> {
    return undefined;
  }
}
