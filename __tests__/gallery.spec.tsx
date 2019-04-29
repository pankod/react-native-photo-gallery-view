
import * as React from 'react';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { GalleryComponent } from "../src/Components/GalleryComponent";

describe("Gallery Component", () => {
	let wrapper: ShallowWrapper;
	let mounting;

	let component = (
		<GalleryComponent />
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
