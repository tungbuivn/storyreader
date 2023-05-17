import { Module } from "@nestjs/common";
import { WebListModuleBase } from "./base/webList.module.base";
import { WebListService } from "./webList.service";
import { WebListController } from "./webList.controller";
import { WebListResolver } from "./webList.resolver";

@Module({
  imports: [WebListModuleBase],
  controllers: [WebListController],
  providers: [WebListService, WebListResolver],
  exports: [WebListService],
})
export class WebListModule {}
