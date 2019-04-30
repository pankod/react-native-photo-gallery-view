
import * as React from 'react';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { AlbumComponent } from "../src/Components/AlbumComponent";

describe("Album Component", () => {
	let wrapper: ShallowWrapper;
	let mounting;
	const props = {

	}
	let component = (
		<AlbumComponent {...props} />
	);

	beforeEach(() => {
		wrapper = shallow(component);
		mounting = mount(component);
	});

	test('should Album Component is render correctly', () => {
		const render = renderer.create(component).toJSON();

		expect(render).toBeDefined();
		expect(render).toMatchSnapshot();
	});
});
