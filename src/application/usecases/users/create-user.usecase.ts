import { IUsersService } from 'src/core/abstracts/services';
import { User } from 'src/core/entities';

export class CreateUserUseCase {
  constructor(private readonly usersService: IUsersService) {}

  async execute(data: any): Promise<User> {
    return undefined;
  }
}
