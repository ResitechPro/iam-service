import { IUsersService } from 'src/core/abstracts/services';
import { User } from 'src/core/entities';

export class DeleteUserUseCase {
  constructor(private readonly usersService: IUsersService) {}

  async execute(id: string): Promise<User> {
    return undefined;
  }
}
