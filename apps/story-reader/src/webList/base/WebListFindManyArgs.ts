/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WebListWhereInput } from "./WebListWhereInput";
import { Type } from "class-transformer";
import { WebListOrderByInput } from "./WebListOrderByInput";

@ArgsType()
class WebListFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WebListWhereInput,
  })
  @Field(() => WebListWhereInput, { nullable: true })
  @Type(() => WebListWhereInput)
  where?: WebListWhereInput;

  @ApiProperty({
    required: false,
    type: [WebListOrderByInput],
  })
  @Field(() => [WebListOrderByInput], { nullable: true })
  @Type(() => WebListOrderByInput)
  orderBy?: Array<WebListOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WebListFindManyArgs as WebListFindManyArgs };
