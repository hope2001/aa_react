import { Radio } from "components";
export default {
  title: "elise_orounla_s_application1/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = {
  label: "Radio",
  variant: "FillGreen700_1",
  size: "sm",
  inputClassName: "mr-1",
};
