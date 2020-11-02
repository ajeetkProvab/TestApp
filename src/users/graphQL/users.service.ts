import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    // @Inject('PHOTO_REPOSITORY')
    private userRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async create(users: Users): Promise<Users> {
    const user = new Users();
    user.id = users.id;
    user.firstName = users.firstName;
    user.lastName = users.lastName;
    user.email = users.email;
    user.phone = users.phone;
    user.city = users.city;
    user.country = users.country;
    return this.userRepository.save(user);
  }
}
