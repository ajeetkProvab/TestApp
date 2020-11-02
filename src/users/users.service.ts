import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Users } from './graphQL/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private contactRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.contactRepository.find();
  }

  async create(contact: Users): Promise<Users> {
    return await this.contactRepository.save(contact);
  }

  async update(contact: Users): Promise<UpdateResult> {
    return await this.contactRepository.update(contact.id, contact);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
  }
}
