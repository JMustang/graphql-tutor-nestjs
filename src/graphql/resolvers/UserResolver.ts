import { Resolver, Query } from '@nestjs/graphql';
import { User } from '../models/User';

@Resolver()
export class UserResolver {
  @Query((returns) => User)
  getUseById() {
    return {
      id: 1,
      username: 'John Doe',
      displayName: 'John the gamer',
    };
  }
}
