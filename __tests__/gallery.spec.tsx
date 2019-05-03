
import * as React from 'react';
import { View } from 'react-native';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { GalleryComponent } from "../src/Components/GalleryComponent";

describe("Gallery Component", () => {
	let wrapper: ShallowWrapper;
	let mounting;
	const props = {
		mediaList: [],
		onBack: jest.fn(),
		renderStickyFooter: jest.fn(),
		renderDetailButtons: jest.fn(),
		renderCustomState: jest.fn(),
		onSelectionChanged: jest.fn(),
		customTopBarBackButton: jest.fn(),
		gridSize: 3,
		stickyFooter: true,
		customMainTitle: jest.fn(),
		customDetailTitle: jest.fn()
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

	test('should children components are render correctly', () => {
		expect(wrapper.find('TopBarComponent')).toHaveLength(1);
		expect(wrapper.find('AlbumComponent')).toHaveLength(1);
		expect(wrapper.find('FooterComponent')).toHaveLength(1);
		// expect(wrapper.find('DetailComponent')).toHaveLength(1);
	});

});
