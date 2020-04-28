import React from "react";
import SearchBox from "./SearchBox";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

it("expect to run SearchBox componen", () => {
  expect(shallow(<SearchBox />).length).toEqual(1);
});

it("expect to run SearchBox componen", () => {
  const wrapper = shallow(<SearchBox />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
