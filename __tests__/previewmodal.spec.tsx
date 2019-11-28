
import * as React from 'react';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { PreviewModal } from "../src/Components/PreviewModalComponent";
import Common from "../src/Provider";

describe("PreviewModal Component", () => {
	let wrapper: ShallowWrapper;
	let mounting;
	const props = {
		imagePreview: {
			photo: {}
		},
		renderPreview: jest.fn()
	}
	const state = {}
	let component = (
		<Common.Provider value={{ items: [], columns: 3, ...props, ...state }}>
			<PreviewModal {...props} />
		</Common.Provider>
	);

	beforeEach(() => {
		wrapper = shallow(component, { context: { ...state, ...props } })
		mounting = mount(component, { context: { ...state, ...props } });
	});

	test('should PreviewModal Component is render correctly', () => {
		const render = renderer.create(component).toJSON();

		expect(render).toBeDefined();
		expect(render).toMatchSnapshot();
	});

	test('should hidethumb method', () => {
		const spy = spyOn(PreviewModal.prototype, "hideThumb").and.callThrough();
		const instance = mounting.instance() as any;

		instance.hideThumb();
		expect(spy).toHaveBeenCalled();
	});

	test('should render defaultView', () => {
		const spy = spyOn(PreviewModal.prototype, "defaultView").and.callThrough();
		const instance = mounting.instance() as any;
		instance.context.renderPreview = false;

		instance.defaultView()
		expect(spy).toHaveBeenCalled();
	});

});
