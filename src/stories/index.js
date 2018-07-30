import React from "react";
import { storiesOf } from "@storybook/react";
import SomeComponent from "../SomeComponent";

storiesOf("SomeComponent", module)
  .addParameters({ info: { inline: true } })
  .add("error", () => <SomeComponent />);
