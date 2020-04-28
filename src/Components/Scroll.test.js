import { shallow } from "enzyme";
import React from "react";
import Scroll from "./Scroll";
import toJson from "enzyme-to-json";

it("expect to run scroll componen", () => {
  expect(shallow(<Scroll />).length).toEqual(1);
});

it("expect to run Scroll componen", () => {
  const wrapper = shallow(<Scroll />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
