import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StoryWebWhereInput = {
  id?: StringFilter;
  link?: StringNullableFilter;
  status?: "True" | "False";
  storyId?: IntNullableFilter;
  webId?: IntNullableFilter;
};
