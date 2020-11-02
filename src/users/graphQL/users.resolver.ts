import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Users } from './user.entity';
import { UserService } from './users.service';

@Resolver(of => Users)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => String)
  async hello(@Args('data', { type: () => String }) data: string) {
    return 'Hello World ' + data;
  }
  @Query(() => [Users])
  async users() {
    return this.userService.findAll();
  }
  @Mutation(() => Users)
  async userReg(@Args() user: Users) {
    return this.userService.create(user);
  }
}
