import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('@pankod/project-splash', () => 'true');

import Main from './index';
import RNGallery from 'react-native-photo-gallery-view';

describe('Main Component', () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<Main />);
	});

	it('renders correctly', () => {
		expect(wrapper).toMatchSnapshot()
	});

	it('initialize state correctly', () => {
		expect(wrapper.state().intro).toBeTruthy()
	});

	it('state check after timeout', () => {
		jest.runAllTimers();
		wrapper.update();
		expect(wrapper.state().intro).toBeFalsy()
	});

	it('render component view after splash timeout', () => {
		jest.runAllTimers();
		wrapper.update();
		expect(wrapper.find(RNGallery)).toHaveLength(1);
	});
});
