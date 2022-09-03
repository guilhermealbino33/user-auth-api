import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../data-source';
import { IUserToken, UserTokens } from '../../../../entities/UserTokens';
import { IUsersTokensRepository } from '../IUsersTokensRepository';

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = AppDataSource.getRepository(UserTokens);
  }

  async create({
    user_id,
    expires_date,
    refresh_token,
  }: IUserToken): Promise<UserTokens> {
    const userToken = this.repository.create({
      user_id,
      expires_date,
      refresh_token,
    });
    await this.repository.save(userToken);

    return userToken;
  }
  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens> {
    const usersTokens = await this.repository.findOne({
      user_id,
      refresh_token,
    });

    return usersTokens;
  }
  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
  async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
    const usersToken = await this.repository.findOne({
      where: [
        {
          refresh_token,
        },
      ],
    });

    return usersToken;
  }
}

export { UsersTokensRepository };
