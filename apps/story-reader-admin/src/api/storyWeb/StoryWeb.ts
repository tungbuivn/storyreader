export type StoryWeb = {
  createdAt: Date;
  id: string;
  link: string | null;
  status?: "True" | "False" | null;
  storyId: number | null;
  updatedAt: Date;
  webId: number | null;
};
