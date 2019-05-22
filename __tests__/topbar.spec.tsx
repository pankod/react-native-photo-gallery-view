
import * as React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { TopBarComponent } from "../src/Components/TopBarComponent";
import Common from '../src/Provider';

describe("Topbar Component", () => {
  let wrapper: ShallowWrapper;
  let mounting;
  const props = {
    onCloseRequest: jest.fn(() => true)
  }
  const state = {
    selected: [],
  }
  let component = (
    <Common.Provider value={{ items: [], columns: 3, ...props, ...state }}>
      <TopBarComponent {...props} />
    </Common.Provider>
  );

  beforeEach(() => {
    wrapper = shallow(component, { context: { ...props, ...state, columns: 3, items: [] } });
    mounting = mount(component, { context: { ...props, ...state, columns: 3, items: [] } });
  });

  test('should Topbar Component is render correctly', () => {
    const render = renderer.create(component).toJSON();

    expect(render).toBeDefined();
    expect(render).toMatchSnapshot();
  });

  test('should titleRender return customSelectedTitle or default title', () => {
    const spy = spyOn(TopBarComponent.prototype, "titleRender").and.callThrough();
    const instance = mounting.instance() as any;

    instance.context.selected = [0];
    expect(instance.titleRender().type.displayName).toEqual("Text");

    instance.context.customSelectedTitle = jest.fn(() => <View />);
    expect(instance.titleRender()).toBeTruthy();

    instance.context.selected = [];
    instance.context.isModalOpen = true;
    expect(instance.titleRender().type.displayName).toEqual("Text");

    instance.context.renderDetailTitleBar = jest.fn(() => <View />);
    expect(instance.titleRender()).toBeTruthy();

    instance.context.renderDetailTitleBar = undefined;
    instance.context.isModalOpen = false;
    expect(instance.titleRender().type.displayName).toEqual("Text");

    instance.context.renderGalleryTitleBar = jest.fn(() => <View />);
    expect(instance.titleRender()).toBeTruthy();

    expect(spy).toHaveBeenCalled();
  });

  test('should fired backButtonRender return renderBackButton or default button', () => {
    const spy = spyOn(TopBarComponent.prototype, "backButtonRender").and.callThrough();
    const instance = mounting.instance() as any;

    instance.backButtonRender();
    instance.context.renderBackButton = jest.fn(() => <View />);
    expect(instance.backButtonRender()).toBeTruthy();

    instance.context.renderBackButton = undefined;
    instance.context.onCloseRequest = jest.fn(() => true);
    expect(instance.backButtonRender().type.displayName).toEqual("TouchableWithoutFeedback");

    instance.backButtonRender().props.onPress();

    expect(spy).toHaveBeenCalled();
  })


});
