import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from '../../__mocks__/mockUsers';
import { UserSettings } from '../models/UserSettings';
import { mockUsersSettings } from '../../__mocks__/mockUserSettings';
import { CreateUserInput } from '../utils/CreateUserInput';

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

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserInput: CreateUserInput) {
    const newUser = {
      ...createUserInput,
      id: mockUsers[mockUsers.length - 1].id + 1,
    };
    mockUsers.push(newUser);
    return newUser;
  }
}
