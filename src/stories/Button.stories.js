import { Button as ButtonComponent, Img } from "components";
export default {
  title: "elise_orounla_s_application1/Buttons",
  component: ButtonComponent,
  argTypes: {
    children: { control: "text" },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      table: {
        disable: true,
      },
    },
  },
};
const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});

Button.args = {
  className: "flex items-center justify-center",
  shape: "RoundedBorder4",
  variant: "FillDeeporange300",
  size: "md",
  children: "Button",
};

export const LeftIconButton = Template.bind({});

LeftIconButton.args = {
  className: "flex items-center justify-center",
  shape: "RoundedBorder4",
  variant: "FillDeeporange300",
  size: "md",
  children: "Button",
  leftIcon: (
    <Img
      src="images/img_calendar_20X20.svg"
      alt="img"
      className="w-[25px] float-left mr-[10px]"
    />
  ),
};

export const RightIconButton = Template.bind({});

RightIconButton.args = {
  className: "flex items-center justify-center",
  shape: "RoundedBorder4",
  variant: "FillDeeporange300",
  size: "md",
  children: "Button",
  rightIcon: (
    <Img
      src="images/img_calendar_20X20.svg"
      alt="img"
      className="w-[25px] float-right ml-[10px]"
    />
  ),
};
