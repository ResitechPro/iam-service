import { IUsersService } from 'src/core/abstracts/services';

export class ForceDeleteUserUseCase {
  constructor(private readonly usersService: IUsersService) {}

  async execute(id: string): Promise<void> {}
}
