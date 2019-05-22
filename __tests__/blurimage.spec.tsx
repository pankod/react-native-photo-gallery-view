
import * as React from 'react';

import renderer from "react-test-renderer";
import { ShallowWrapper, shallow, mount } from "enzyme";

import { BlurImage } from "../src/Components/BlurImage";
import Common from "../src/Provider";

jest.mock('Animated', () => {
  const ActualAnimated = require.requireActual('Animated');
  return {
    ...ActualAnimated,
    timing: (value, config) => {
      return {
        start: (callback) => {
          value.setValue(config.toValue);
          callback && callback()
        },
      };
    },
    spring: (value, config) => {
      return {
        start: (callback) => {
          value.setValue(config.toValue);
          callback && callback()
        },
      };
    },
  };
});

describe("BlurImage Component", () => {
  let wrapper: ShallowWrapper;
  let mounting;
  const props = {
    source: {},
    customImage: jest.fn()
  }
  const state = {
    changeImage: jest.fn(() => true)
  }
  let component = (
    <Common.Provider value={{ items: [], columns: 3, ...props, ...state }}>
      <BlurImage {...props} />
    </Common.Provider>
  );

  beforeEach(() => {
    wrapper = shallow(component, { context: { ...state, ...props } })
    mounting = mount(component, { context: { ...state, ...props } });
  });

  test('should BlurImage Component is render correctly', () => {
    const render = renderer.create(component).toJSON();

    expect(render).toBeDefined();
    expect(render).toMatchSnapshot();
  });

  test('should fired react animated view', () => {
    const spy = spyOn(BlurImage.prototype, "getDefault").and.callThrough();
    const instance = mounting.instance() as any;

    instance.getDefault();
    expect(spy).toHaveBeenCalled();
  });

  test('should loading false when image onloadedend', () => {
    const spy = spyOn(BlurImage.prototype, "onImageLoadEnd").and.callThrough();
    const instance = mounting.instance() as any;

    mounting.setState({
      loading: false
    })

    instance.onImageLoadEnd();
    expect(mounting.state("loading")).toEqual(false);
    expect(spy).toHaveBeenCalled();
  });

  test('should loading true when image load start', () => {
    const spy = spyOn(BlurImage.prototype, "onImageLoadStart").and.callThrough();
    const instance = mounting.instance() as any;

    mounting.setState({
      loading: true
    })

    instance.onImageLoadStart();
    expect(mounting.state("loading")).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });

  test('should return custom image', () => {
    const spy = spyOn(BlurImage.prototype, "customImage").and.callThrough();
    const instance = mounting.instance() as any;
    instance.context.renderDetailImage = jest.fn();

    instance.customImage();
    expect(spy).toHaveBeenCalled();
  });

  test('should render customImage', () => {
    const instance = mounting.instance() as any;
    instance.renderDetailImage = jest.fn(() => true)

    expect(instance.render()).toBeDefined();
  })


});
