import { IUserToken } from '../../../entities/userTokens';

export interface IUsersTokensRepository {
  create({
    expires_date,
    refresh_token,
    user_id,
  }: IUserToken): Promise<IUserToken>;
  findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<IUserToken>;
  findByRefreshToken(refresh_token: string): Promise<IUserToken>;
  deleteById(id: string): Promise<void>;
}
