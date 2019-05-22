
import * as React from 'react';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { DetailComponent } from "../src/Components/DetailComponent";
import { BlurImage } from "../src/Components/BlurImage";
import Common from "../src/Provider";

describe("Album Component", () => {
	let wrapper: ShallowWrapper;
	let mounting;
	const props = {
		showingImage: jest.fn(() => true)
	}
	const state = {

	}
	let component = (
		<Common.Provider value={{ items: [], gridSize: 3, ...props, ...state }}>
			<DetailComponent {...props} />
		</Common.Provider>
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
