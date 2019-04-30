
import * as React from 'react';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { TopBarComponent } from "../src/Components/TopBarComponent";

describe("Topbar Component", () => {
	let wrapper: ShallowWrapper;
	let mounting;
	const props = {

	}
	let component = (
		<TopBarComponent {...props} />
	);

	beforeEach(() => {
		wrapper = shallow(component);
		mounting = mount(component);
	});

	test('should Topbar Component is render correctly', () => {
		const render = renderer.create(component).toJSON();

		expect(render).toBeDefined();
		expect(render).toMatchSnapshot();
	});
});
