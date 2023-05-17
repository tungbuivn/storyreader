import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebListServiceBase } from "./base/webList.service.base";

@Injectable()
export class WebListService extends WebListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
