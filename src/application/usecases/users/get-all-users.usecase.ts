import { IUsersService } from 'src/core/abstracts/services';
import { User } from 'src/core/entities';

export class GetAllUsersUseCase {
  constructor(private readonly usersService: IUsersService) {}

  async execute(): Promise<User[]> {
    return undefined;
  }
}
