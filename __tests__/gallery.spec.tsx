
import * as React from 'react';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { GalleryComponent } from "../src/Components/GalleryComponent";

describe("Gallery Component", () => {
	let wrapper: ShallowWrapper;
	let mounting;
	const props = {
		mediaList: []
	}
	let component = (
		<GalleryComponent {...props} />
	);

	beforeEach(() => {
		wrapper = shallow(component);
		mounting = mount(component);
	});

	test('should Gallery Component is render correctly', () => {
		const render = renderer.create(component).toJSON();

		expect(render).toBeDefined();
		expect(render).toMatchSnapshot();
	});
});
