/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateStoryWebArgs } from "./CreateStoryWebArgs";
import { UpdateStoryWebArgs } from "./UpdateStoryWebArgs";
import { DeleteStoryWebArgs } from "./DeleteStoryWebArgs";
import { StoryWebFindManyArgs } from "./StoryWebFindManyArgs";
import { StoryWebFindUniqueArgs } from "./StoryWebFindUniqueArgs";
import { StoryWeb } from "./StoryWeb";
import { StoryWebService } from "../storyWeb.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StoryWeb)
export class StoryWebResolverBase {
  constructor(
    protected readonly service: StoryWebService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "StoryWeb",
    action: "read",
    possession: "any",
  })
  async _storyWebsMeta(
    @graphql.Args() args: StoryWebFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [StoryWeb])
  @nestAccessControl.UseRoles({
    resource: "StoryWeb",
    action: "read",
    possession: "any",
  })
  async storyWebs(
    @graphql.Args() args: StoryWebFindManyArgs
  ): Promise<StoryWeb[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => StoryWeb, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "StoryWeb",
    action: "read",
    possession: "own",
  })
  async storyWeb(
    @graphql.Args() args: StoryWebFindUniqueArgs
  ): Promise<StoryWeb | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => StoryWeb)
  @nestAccessControl.UseRoles({
    resource: "StoryWeb",
    action: "create",
    possession: "any",
  })
  async createStoryWeb(
    @graphql.Args() args: CreateStoryWebArgs
  ): Promise<StoryWeb> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => StoryWeb)
  @nestAccessControl.UseRoles({
    resource: "StoryWeb",
    action: "update",
    possession: "any",
  })
  async updateStoryWeb(
    @graphql.Args() args: UpdateStoryWebArgs
  ): Promise<StoryWeb | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => StoryWeb)
  @nestAccessControl.UseRoles({
    resource: "StoryWeb",
    action: "delete",
    possession: "any",
  })
  async deleteStoryWeb(
    @graphql.Args() args: DeleteStoryWebArgs
  ): Promise<StoryWeb | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}