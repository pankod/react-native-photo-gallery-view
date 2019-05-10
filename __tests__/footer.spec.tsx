
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
		renderDetailButtons: jest.fn(),
		renderStickyFooter: jest.fn(),
		isModalOpen: true,
		displaySelectionButtons: true
	}
	const state = {}
	let component = (
		<Common.Provider value={{ ...props, ...state, mediaList: [], gridSize: 3 }}>
			<FooterComponent />
		</Common.Provider>
	);

	beforeEach(() => {
		wrapper = shallow(component, { context: { ...props, ...state, mediaList: [], gridSize: 3 } });
		mounting = mount(component, { context: { ...props, ...state, mediaList: [], gridSize: 3 } });
	});

	test('should Footer Component is render correctly', () => {
		const render = renderer.create(component).toJSON();

		expect(render).toBeDefined();
		expect(render).toMatchSnapshot();
	});

	test('should return renderDetailButtons render view when isModalOpen true', () => {
		const spy = spyOn(FooterComponent.prototype, "renderDetailButtons").and.callThrough();
		const instance = mounting.instance() as any;
		instance.context.renderDetailButtons = jest.fn(() => <View />);
		instance.context.displaySelectionButtons = false;
		instance.context.isModalOpen = true;

		expect(instance.renderDetailButtons().key).toEqual("custom");
		expect(spy).toBeCalled();
	});

	test('should return renderStickyFooter render view when isModalOpen false', () => {
		const spy = spyOn(FooterComponent.prototype, "renderStickyFooter").and.callThrough();
		const instance = mounting.instance() as any;

		instance.context.renderStickyFooter = jest.fn(() => <View />);
		instance.context.stickyFooter = true;
		instance.context.isModalOpen = false;
		instance.context.displaySelectionButtons = true;

		expect(instance.renderStickyFooter().key).toEqual("sticky");
		expect(spy).toBeCalled();
	});
});
