import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query()
  getUser() {
    return {
      id: 1,
      username: 'test',
      displayName: 'Test User',
    };
  }
}
