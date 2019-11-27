import * as React from 'react';
import { SafeAreaView } from 'react-native';
import RNGallery from 'react-native-photo-gallery-view';
import Splash from '@pankod/project-splash';

import data from '../../../data.json';

export default class Main extends React.Component<{}, { intro: boolean }> {
	constructor(props: {}) {
		super(props);

		this.state = {
			intro: true
		};
	}

	public componentDidMount(): void {
		setTimeout(() => {
			this.setState({ intro: false });
		}, 2000);
	}

	public render(): JSX.Element {
		const { intro } = this.state;

		if (intro) {
			return (
				<Splash />
			);
		}

		return (
			<SafeAreaView style={{ flex: 1 }}>
				<RNGallery
					items={data}
					columns={3}
					onClose={() => {}}
					onSelectItem={(media) => {
						console.log('Media:', media);
					}}
				/>
			</SafeAreaView>
			
		);
	}
}
