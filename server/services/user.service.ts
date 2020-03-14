import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import UserRepository from '../data/repositories/user.repository';
import { IShortUser } from '../common/models/user';
import User from '../data/entities/User';

@Service()
export default class UserService {
  constructor(@OrmRepository() private userRepository: UserRepository) {}

  async getAll(): Promise<User[]> {
    return await this.userRepository.getAllUsers();
  }

  save({ id, email, firstName, lastName, login }: IShortUser) {
    return this.userRepository.save({
      id,
      email,
      firstName,
      lastName,
      login
    });
  }

  async deleteUser(id: string) {
    return await this.userRepository.deleteById(id);
  }

  async findById(id: string): Promise<User> {
    return await this.userRepository.getById(id);
  }
}
