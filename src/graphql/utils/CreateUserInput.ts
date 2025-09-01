import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  userName: string;

  @Field({ nullable: true })
  displayName: string;
}
