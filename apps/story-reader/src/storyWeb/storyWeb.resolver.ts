import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StoryWebResolverBase } from "./base/storyWeb.resolver.base";
import { StoryWeb } from "./base/StoryWeb";
import { StoryWebService } from "./storyWeb.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StoryWeb)
export class StoryWebResolver extends StoryWebResolverBase {
  constructor(
    protected readonly service: StoryWebService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
