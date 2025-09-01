import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSettings } from '../models/UserSettings';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { mockUsersSettings } from '../../__mocks__/mockUserSettings';

@Resolver()
export class UserSettingsResolver {
  @Mutation(() => UserSettings)
  createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    console.log(createUserSettingsData);
    mockUsersSettings.push(createUserSettingsData);
    return createUserSettingsData;
  }
}
