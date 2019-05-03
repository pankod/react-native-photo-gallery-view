
import * as React from 'react';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { DetailComponent } from "../src/Components/DetailComponent";

describe("Album Component", () => {
	let wrapper: ShallowWrapper;
	let mounting;
	const props = {

	}
	let component = (
		<DetailComponent {...props} />
	);

	beforeEach(() => {
		wrapper = shallow(component);
		mounting = mount(component);
	});

	test('should Detail Component is render correctly', () => {
		const render = renderer.create(component).toJSON();

		expect(render).toBeDefined();
		expect(render).toMatchSnapshot();
	});
});
