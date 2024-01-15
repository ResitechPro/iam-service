import { IUsersService } from 'src/core/abstracts/services';
import { User } from 'src/core/entities';

export class UpdateUserUseCase {
  constructor(private readonly usersService: IUsersService) {}

  async execute(id: string, data: any): Promise<User> {
    return undefined;
  }
}
