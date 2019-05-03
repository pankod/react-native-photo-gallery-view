
import * as React from 'react';
import { View } from 'react-native';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { GalleryComponent } from "../src/Components/GalleryComponent";

jest.mock('./mocks');

const data = [{ "caption": "Quaresma", "id": "db1aa2ad-48a2-4882-b6e9-824c0224315f", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/db1/db1aa2ad-48a2-4882-b6e9-824c0224315f.jpg.jpg", "state": "Deleted", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/db1/db1aa2ad-48a2-4882-b6e9-824c0224315f.jpg.jpg?preset=siberthumb2x" }];

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
		customCheckedView: jest.fn(),
		customSelectedTitle: jest.fn(),
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

	test('should fired show image modal', () => {
		wrapper.setState({
			showingImage: data[0],
			isModalOpen: true
		});

		expect(wrapper.state("showingImage")).toMatchObject(data[0]);
		expect(wrapper.state('isModalOpen')).toBeTruthy();
	});

	test('should if onback fired when state reset', () => {
		const spy = spyOn(GalleryComponent.prototype, 'onBackRequest');
		const instance = mounting.instance() as any;

		wrapper.setState({
			isModalOpen: true
		});

		instance.onBackRequest();
		expect(spy).toHaveBeenCalled();

		setTimeout(() => {
			expect(wrapper.state('isModalOpen')).toEqual(false);
			expect(wrapper.state('showingImage')).toEqual(null);
		}, 0);
	});

	test('should fired push item in selected list', () => {
		const spy = spyOn(GalleryComponent.prototype, 'onSelection');
		const instance = mounting.instance() as any;

		wrapper.setState({
			selected: [data[0]]
		});

		instance.onSelection(data[0], 0);
		expect(spy).toHaveBeenCalled();

		setTimeout(() => {
			expect(wrapper.state('selected')).toHaveLength(1);
		}, 0);
	});

	test('should children components are render correctly', () => {
		expect(wrapper.find('TopBarComponent')).toHaveLength(1);
		expect(wrapper.find('AlbumComponent')).toHaveLength(1);
		expect(wrapper.find('FooterComponent')).toHaveLength(1);
	});

});
