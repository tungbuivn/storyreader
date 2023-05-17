import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StoryWebService } from "./storyWeb.service";
import { StoryWebControllerBase } from "./base/storyWeb.controller.base";

@swagger.ApiTags("storyWebs")
@common.Controller("storyWebs")
export class StoryWebController extends StoryWebControllerBase {
  constructor(
    protected readonly service: StoryWebService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
