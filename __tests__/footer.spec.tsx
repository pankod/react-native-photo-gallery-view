
import * as React from 'react';
import { View } from 'react-native';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { FooterComponent } from "../src/Components/FooterComponent";

describe("Footer Component", () => {
	let wrapper: ShallowWrapper;
	let mounting;
	const props = {

	}
	let component = (
		<FooterComponent {...props} />
	);

	beforeEach(() => {
		wrapper = shallow(component);
		mounting = mount(component);
	});

	test('should Footer Component is render correctly', () => {
		const render = renderer.create(component).toJSON();

		expect(render).toBeDefined();
		expect(render).toMatchSnapshot();
	});
});
