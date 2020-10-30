import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get()
  index(): Promise<User[]> {
    return this.UsersService.findAll();
  }
  @Post('create')
  async create(@Body() userData: User): Promise<any> {
    return this.UsersService.create(userData);
  }
  @Put(':id/update')
  async update(@Param('id') id, @Body() userData: User): Promise<any> {
    userData.id = Number(id);
    console.log('Update #' + userData.id);
    return this.UsersService.update(userData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.UsersService.delete(id);
  }
}
