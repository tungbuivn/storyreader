/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { StoryWebWhereUniqueInput } from "./StoryWebWhereUniqueInput";
import { StoryWebUpdateInput } from "./StoryWebUpdateInput";

@ArgsType()
class UpdateStoryWebArgs {
  @Field(() => StoryWebWhereUniqueInput, { nullable: false })
  where!: StoryWebWhereUniqueInput;
  @Field(() => StoryWebUpdateInput, { nullable: false })
  data!: StoryWebUpdateInput;
}

export { UpdateStoryWebArgs as UpdateStoryWebArgs };