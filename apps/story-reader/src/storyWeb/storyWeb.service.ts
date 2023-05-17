import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoryWebServiceBase } from "./base/storyWeb.service.base";

@Injectable()
export class StoryWebService extends StoryWebServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
