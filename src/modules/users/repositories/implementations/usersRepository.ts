// import { getRepository, Repository } from 'typeorm';
// import { User } from '../../../../entities/user';

// import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
// import { IUsersRepository } from '../IUsersRepository';

// export default class UsersRepository implements IUsersRepository {
//   private repository: Repository<User>;

//   constructor() {
//     this.repository = getRepository(User);
//   }

//   async create({ name, email, password }: ICreateUserDTO): Promise<void> {
//     const user = this.repository.create({ name, email, password });

//     this.repository.save(user);
//   }

//   updateUser(userID: string): Promise<User> {
//     throw new Error('Method not implemented.');
//   }
//   deleteUser(userID: string): Promise<void> {
//     throw new Error('Method not implemented.');
//   }

//   async findByEmail(email: string): Promise<User> {
//     const user = await this.repository.findOne({ email });

//     return user;
//   }

//   async findById(user_id: string): Promise<User> {
//     return this.repository.findOne(user_id);
//   }
// }
