import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const StoryWebCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Link" source="link" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "True", value: "True" },
            { label: "False", value: "False" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="StoryId" source="storyId" />
        <NumberInput step={1} label="WebId" source="webId" />
      </SimpleForm>
    </Create>
  );
};
