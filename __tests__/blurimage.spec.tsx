
import * as React from 'react';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { BlurImage } from "../src/Components/BlurImage";

describe("BlurImage Component", () => {
	let wrapper: ShallowWrapper;
	let mounting;
	const props = {
		source: {}
	}
	let component = (
		<BlurImage {...props} />
	);

	beforeEach(() => {
		wrapper = shallow(component);
		mounting = mount(component);
	});

	test('should BlurImage Component is render correctly', () => {
		const render = renderer.create(component).toJSON();

		expect(render).toBeDefined();
		expect(render).toMatchSnapshot();
	});
});
