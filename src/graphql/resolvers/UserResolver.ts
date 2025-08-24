import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from '../../__mocks__/mockUsers';
import { UserSettings } from '../models/UserSettings';
import { mockUsersSettings } from '../../__mocks__/mockUserSettings';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User])
  getAllUsers() {
    return mockUsers;
  }

  @ResolveField(() => UserSettings, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    console.log(user);
    return mockUsersSettings.find((setting) => setting.userId === user.id);
  }
}
