/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, StoryWeb } from "@prisma/client";

export class StoryWebServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.StoryWebFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryWebFindManyArgs>
  ): Promise<number> {
    return this.prisma.storyWeb.count(args);
  }

  async findMany<T extends Prisma.StoryWebFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryWebFindManyArgs>
  ): Promise<StoryWeb[]> {
    return this.prisma.storyWeb.findMany(args);
  }
  async findOne<T extends Prisma.StoryWebFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryWebFindUniqueArgs>
  ): Promise<StoryWeb | null> {
    return this.prisma.storyWeb.findUnique(args);
  }
  async create<T extends Prisma.StoryWebCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryWebCreateArgs>
  ): Promise<StoryWeb> {
    return this.prisma.storyWeb.create<T>(args);
  }
  async update<T extends Prisma.StoryWebUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryWebUpdateArgs>
  ): Promise<StoryWeb> {
    return this.prisma.storyWeb.update<T>(args);
  }
  async delete<T extends Prisma.StoryWebDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryWebDeleteArgs>
  ): Promise<StoryWeb> {
    return this.prisma.storyWeb.delete(args);
  }
}