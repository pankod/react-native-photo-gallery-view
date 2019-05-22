
import * as React from 'react';
import { View } from 'react-native';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { GalleryComponent } from "../src/Components/GalleryComponent";

// jest.doMock('./mocks');

const data = [{ "caption": "Quaresma", "id": "db1aa2ad-48a2-4882-b6e9-824c0224315f", "photo": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/db1/db1aa2ad-48a2-4882-b6e9-824c0224315f.jpg.jpg", "state": "Deleted", "thumb": "https://diymyqt2ncnnc.cloudfront.net/s3/siberalemphotos/db1/db1aa2ad-48a2-4882-b6e9-824c0224315f.jpg.jpg?preset=siberthumb2x" }];

describe("Gallery Component", () => {
	let wrapper: ShallowWrapper;
	let mounting;
	const props = {
		items: [],
		onClose: jest.fn(),
		renderGalleryFooter: jest.fn(),
		renderDetailFooter: jest.fn(),
		renderThumbnailOverlay: jest.fn(),
		onSelectItem: jest.fn(),
		renderBackButton: jest.fn(),
		renderCheckedIcon: jest.fn(),
		customSelectedTitle: jest.fn(),
		hidePreview: jest.fn(),
		columns: 3,
		enableItemSelection: true,
		renderGalleryTitleBar: jest.fn(),
		renderDetailTitleBar: jest.fn()
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

	test('should if onClose fired when state reset', () => {
		const spy = spyOn(GalleryComponent.prototype, 'onCloseRequest').and.callThrough();
		const instance = mounting.instance() as any;

		wrapper.setState({
			isModalOpen: true
		});

		instance.onCloseRequest();

		setTimeout(() => {
			expect(wrapper.state('isModalOpen')).toEqual(false);
			expect(wrapper.state('showingImage')).toEqual(null);
			console.log(instance.clearModal())
		}, 0);
		expect(spy).toHaveBeenCalled();
	});

	test('should fired showPreview method', () => {
		const spy = spyOn(GalleryComponent.prototype, "showPreview").and.callThrough();
		const instance = mounting.instance() as any;

		wrapper.setState({
			imagePreview: data[0],
			previewIsOpen: true
		});

		instance.showPreview(data[0], 0);

		expect(wrapper.state("previewIsOpen")).toBeTruthy();
		expect(spy).toHaveBeenCalled();
	});

	test('should fired hidePreview method', () => {
		const spy = spyOn(GalleryComponent.prototype, "hidePreview").and.callThrough();
		const instance = mounting.instance() as any;

		wrapper.setState({
			previewIsOpen: false
		});

		instance.hidePreview();
		expect(wrapper.state("previewIsOpen")).not.toBeTruthy();
		expect(spy).toHaveBeenCalled();
	});

	test('should fired showImageModal', () => {
		const spy = spyOn(GalleryComponent.prototype, 'showImageModal').and.callThrough();
		const instance = mounting.instance() as any;

		wrapper.setProps({
			items: []
		});

		wrapper.setState({
			imageIndex: 0,
			showingImage: true,
			isModalOpen: true
		})

		instance.showImageModal();
		expect(spy).toHaveBeenCalled();

		setTimeout(() => {
			expect(wrapper.state('isModalOpen')).toBeTruthy();
			expect(wrapper.state('imageIndex')).toEqual(0);
			expect(wrapper.state('showingImage')).toBeTruthy();
		}, 0);
	});

	test('should fired push item in selected list', () => {
		const spy = spyOn(GalleryComponent.prototype, 'onSelection').and.callThrough();
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

	test('should fired splice item in selected list', () => {
		const spy = spyOn(GalleryComponent.prototype, 'onSelection').and.callThrough();
		const instance = mounting.instance() as any;

		wrapper.setState({
			selected: [data[0]]
		});

		instance.onSelection(data[0], 0);
		expect(spy).toHaveBeenCalled();

		setTimeout(() => {
			console.log(wrapper.state('selected'))
			expect(wrapper.state('selected')).toHaveLength(0);
		}, 0);
	});

	test('should children components are render correctly', () => {
		expect(wrapper.find('TopBarComponent')).toHaveLength(1);
		expect(wrapper.find('AlbumComponent')).toHaveLength(1);
		expect(wrapper.find('FooterComponent')).toHaveLength(1);

		wrapper.setState({
			isModalOpen: true,
			previewIsOpen: true
		});
		expect(wrapper.find('PreviewModal')).toHaveLength(1);
		expect(wrapper.find('DetailComponent')).toHaveLength(1);
	});

	test('should fired onCloseRequest', () => {
		const spy = spyOn(GalleryComponent.prototype, "onCloseRequest").and.callThrough();
		const instance = mounting.instance() as any;

		instance.onCloseRequest();

		expect(spy).toHaveBeenCalled();
	});

	test('should backKeyHandler return true', () => {
		const spy = spyOn(GalleryComponent.prototype, "backKeyHandler").and.callThrough();
		const instance = mounting.instance() as any;

		instance.backKeyHandler();
		expect(instance.backKeyHandler()).toBeTruthy();
	});

	test('should fired changeImage method', () => {
		const spy = spyOn(GalleryComponent.prototype, "changeImage").and.callThrough();
		const instance = mounting.instance() as any;

		wrapper.setProps({
			items: [data[0]]
		})

		instance.changeImage(0);
		expect(spy).toHaveBeenCalled();
	});

	test('should fired clearModal and clear state', () => {
		const spy = spyOn(GalleryComponent.prototype, "clearModal").and.callThrough();
		const instance = mounting.instance() as any;

		wrapper.setState({
			imageIndex: 0,
			detailTitle: null,
			showingImage: null,
			isModalOpen: false,
			selected: []
		})

		instance.clearModal();
		expect(wrapper.state()).toMatchObject({
			imageIndex: 0,
			detailTitle: null,
			showingImage: null,
			isModalOpen: false,
			selected: []
		})
		expect(spy).toHaveBeenCalled();
	});

	test('should fired componentWillUnmount', () => {
		const spy = spyOn(GalleryComponent.prototype, "componentWillUnmount").and.callThrough();
		const instance = mounting.instance() as any;

		wrapper.unmount();
		expect(spy).toHaveBeenCalled();
	});

});
