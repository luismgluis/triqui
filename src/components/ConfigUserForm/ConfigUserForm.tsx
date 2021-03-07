import { Layout, Text } from "@ui-kitten/components";
import React from "react";
const TAG = "CONFIG USER FORM";

interface ConfigUserFormProps {
  title: string;
  fnBack: (data) => void;
  level?: string;
}
const ConfigUserForm = ({
  title,
  fnBack,
  level = "1",
}: ConfigUserFormProps) => {
  return (
    <Layout level={level}>
      <Text>Hola from ConfigUserForm</Text>
    </Layout>
  );
};
export default ConfigUserForm;
