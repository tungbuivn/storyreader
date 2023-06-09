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
import { CreateWebListArgs } from "./CreateWebListArgs";
import { UpdateWebListArgs } from "./UpdateWebListArgs";
import { DeleteWebListArgs } from "./DeleteWebListArgs";
import { WebListFindManyArgs } from "./WebListFindManyArgs";
import { WebListFindUniqueArgs } from "./WebListFindUniqueArgs";
import { WebList } from "./WebList";
import { WebListService } from "../webList.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WebList)
export class WebListResolverBase {
  constructor(
    protected readonly service: WebListService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WebList",
    action: "read",
    possession: "any",
  })
  async _webListsMeta(
    @graphql.Args() args: WebListFindManyArgs
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
  @graphql.Query(() => [WebList])
  @nestAccessControl.UseRoles({
    resource: "WebList",
    action: "read",
    possession: "any",
  })
  async webLists(
    @graphql.Args() args: WebListFindManyArgs
  ): Promise<WebList[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WebList, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WebList",
    action: "read",
    possession: "own",
  })
  async webList(
    @graphql.Args() args: WebListFindUniqueArgs
  ): Promise<WebList | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WebList)
  @nestAccessControl.UseRoles({
    resource: "WebList",
    action: "create",
    possession: "any",
  })
  async createWebList(
    @graphql.Args() args: CreateWebListArgs
  ): Promise<WebList> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WebList)
  @nestAccessControl.UseRoles({
    resource: "WebList",
    action: "update",
    possession: "any",
  })
  async updateWebList(
    @graphql.Args() args: UpdateWebListArgs
  ): Promise<WebList | null> {
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

  @graphql.Mutation(() => WebList)
  @nestAccessControl.UseRoles({
    resource: "WebList",
    action: "delete",
    possession: "any",
  })
  async deleteWebList(
    @graphql.Args() args: DeleteWebListArgs
  ): Promise<WebList | null> {
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
