import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const StoryWebShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Link" source="link" />
        <TextField label="Status" source="status" />
        <TextField label="StoryId" source="storyId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WebId" source="webId" />
      </SimpleShowLayout>
    </Show>
  );
};
