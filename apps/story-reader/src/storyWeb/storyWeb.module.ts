import { Module } from "@nestjs/common";
import { StoryWebModuleBase } from "./base/storyWeb.module.base";
import { StoryWebService } from "./storyWeb.service";
import { StoryWebController } from "./storyWeb.controller";
import { StoryWebResolver } from "./storyWeb.resolver";

@Module({
  imports: [StoryWebModuleBase],
  controllers: [StoryWebController],
  providers: [StoryWebService, StoryWebResolver],
  exports: [StoryWebService],
})
export class StoryWebModule {}
