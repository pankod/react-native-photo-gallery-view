
import * as React from 'react';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import Common from "../src/Provider";
import { AlbumComponent } from "../src/Components/AlbumComponent";


const data = [{ "caption": "Pankod", "id": "db1aa2ad-48a2-4882-b6e9-824c0224315f", "photo": "https://xx.jpg", "state": "Deleted", "thumb": "https://xx.jpg" },
{ "caption": "Pankod 1", "id": "db1aa2ad-48a2-4882-b6e9-824c0224315d", "photo": "https://xx.jpg", "state": "Deleted", "thumb": "https://xx.jpg" }];

describe("Album Component", () => {
	let wrapper: ShallowWrapper;
	let mounting;
	const state = {
		selected: [],
		onSelection: jest.fn(),
		renderCheckedIcon: undefined,
		dynamicSize: {
			width: 1,
			height: 1
		}
	}
	const props = {
		renderThumbnailOverlay: jest.fn(),
		renderThumbnailImage: jest.fn(),
		showImageModal: jest.fn(),
		onSelection: jest.fn(),
		enableItemSelection: true,
	}
	state.selected.push(data[0].id);

	AlbumComponent.contextType = Common;

	let component = (
		<Common.Provider value={{
			items: [], columns: 3, ...state, ...props
		}}>
			<AlbumComponent />
		</Common.Provider>
	);

	beforeEach(() => {
		wrapper = shallow(component).dive({ context: { ...state, ...props } });
		mounting = mount(component, {
			context: { ...state, ...props }
		});
	});

	test('should Album Component is render correctly', () => {
		const render = renderer.create(component).toJSON();

		expect(render).toBeDefined();
		expect(render).toMatchSnapshot();
	});

	test('should render item return correctly onSelection jsx element', () => {
		const spy = spyOn(AlbumComponent.prototype, "renderItem").and.callThrough();
		const instance = mounting.instance() as any;

		instance.renderItem(data[0], 0);

		expect(instance.renderItem(data[0], 0).key).toBe("onSelection");
		instance.renderItem(data[0], 0).props.onPress();
		expect(spy).toHaveBeenCalled();
	});

	test('should render item return correctly showImageModal jsx element', () => {
		const spy = spyOn(AlbumComponent.prototype, "renderItem").and.callThrough();
		const instance = mounting.instance() as any;
		instance.context.enableItemSelection = false;
		instance.context.showPreview = jest.fn(() => true);

		wrapper.setProps({
			renderThumbnailOverlay: jest.fn(() => true)
		})

		instance.renderItem(data[0], 0);

		expect(instance.renderItem(data[0], 0).key).toBe("showImageModal");
		instance.renderItem(data[0], 0).props.onPress();
		instance.renderItem(data[0], 0).props.onLongPress();
		expect(spy).toHaveBeenCalled();
	});

	test('should checkedctrl function return if item is in array', () => {
		const spy = spyOn(AlbumComponent.prototype, "checkedCtrl").and.callThrough();
		const instance = mounting.instance() as any;

		instance.checkedCtrl(data[0]);

		expect(instance.checkedCtrl(data[0])).toBeTruthy();

		expect(typeof instance.checkedCtrl(data[0])).toEqual("boolean");
		expect(spy).toHaveBeenCalled();
	});

	test("should isChecked function return component when item is checked", () => {
		const spy = spyOn(AlbumComponent.prototype, "isChecked").and.callThrough();
		const instance = mounting.instance() as any;

		instance.isChecked(data[0]);

		expect(instance.isChecked(data[0])).toBeDefined();

		expect(typeof instance.isChecked(data[0])).toBe("object")

		expect(spy).toHaveBeenCalled();
	});

	test("should isChecked function return component when item is not checked", () => {
		const spy = spyOn(AlbumComponent.prototype, "isChecked").and.callThrough();
		const instance = mounting.instance() as any;

		instance.isChecked(data[1]);
		expect(instance.isChecked(data[1])).toBeNull();
		expect(spy).toHaveBeenCalled();
	});

	test("should isChecked function return component when item is checked and renderCheckedIcon enable", () => {
		const spy = spyOn(AlbumComponent.prototype, "isChecked").and.callThrough();
		const instance = mounting.instance() as any;
		instance.context.renderCheckedIcon = jest.fn(() => true);

		instance.isChecked(data[0]);

		expect(instance.isChecked(data[0])).toBeTruthy();

		expect(spy).toHaveBeenCalled();
	});

});
