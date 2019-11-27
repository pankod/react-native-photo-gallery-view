import * as React from 'react';
import { View, Text } from 'react-native';

import Splash from '@pankod/project-splash';

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
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Your Component</Text>
			</View>
		);
	}
}
