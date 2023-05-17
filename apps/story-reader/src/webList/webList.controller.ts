import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WebListService } from "./webList.service";
import { WebListControllerBase } from "./base/webList.controller.base";

@swagger.ApiTags("webLists")
@common.Controller("webLists")
export class WebListController extends WebListControllerBase {
  constructor(
    protected readonly service: WebListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
