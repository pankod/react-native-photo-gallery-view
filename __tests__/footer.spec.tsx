
import * as React from 'react';
import { View } from 'react-native';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { FooterComponent } from "../src/Components/FooterComponent";
import Common from "../src/Provider";
describe("Footer Component", () => {
	let wrapper: ShallowWrapper;
	let mounting;
	const props = {
		renderDetailFooter: jest.fn(),
		renderGalleryFooter: jest.fn(),
		isModalOpen: true,
		enableItemSelection: true
	}
	const state = {}
	let component = (
		<Common.Provider value={{ ...props, ...state, items: [], columns: 3 }}>
			<FooterComponent />
		</Common.Provider>
	);

	beforeEach(() => {
		wrapper = shallow(component, { context: { ...props, ...state, items: [], columns: 3 } });
		mounting = mount(component, { context: { ...props, ...state, items: [], columns: 3 } });
	});

	test('should Footer Component is render correctly', () => {
		const render = renderer.create(component).toJSON();

		expect(render).toBeDefined();
		expect(render).toMatchSnapshot();
	});

	test('should return renderDetailFooter render view when isModalOpen true', () => {
		const spy = spyOn(FooterComponent.prototype, "renderDetailFooter").and.callThrough();
		const instance = mounting.instance() as any;
		instance.context.renderDetailFooter = jest.fn(() => <View />);
		instance.context.enableItemSelection = false;
		instance.context.isModalOpen = true;

		expect(instance.renderDetailFooter().key).toEqual("custom");
		expect(spy).toBeCalled();
	});

	test('should return renderGalleryFooter render view when isModalOpen false', () => {
		const spy = spyOn(FooterComponent.prototype, "renderGalleryFooter").and.callThrough();
		const instance = mounting.instance() as any;

		instance.context.renderGalleryFooter = jest.fn(() => <View />);
		instance.context.enableItemSelection = true;
		instance.context.isModalOpen = false;
		instance.context.enableItemSelection = true;

		expect(instance.renderGalleryFooter().key).toEqual("sticky");
		expect(spy).toBeCalled();
	});
});
