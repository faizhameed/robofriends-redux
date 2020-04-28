import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";
import toJson from "enzyme-to-json";

it("expect to run card componen", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "john",
      email: "joh@gmail.com",
    },
  ];
  const wrapper = shallow(<CardList robots={mockRobots} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
