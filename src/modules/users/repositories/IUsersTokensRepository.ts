import { IUserToken, UserTokens } from '../../../entities/UserTokens';

export interface IUsersTokensRepository {
  create({
    expires_date,
    refresh_token,
    user_id,
  }: IUserToken): Promise<IUserToken>;
  findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens>;
  findByRefreshToken(refresh_token: string): Promise<UserTokens>;
  deleteById(id: string): Promise<void>;
}
