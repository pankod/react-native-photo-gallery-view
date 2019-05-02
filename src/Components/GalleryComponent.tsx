// Global Imports
import React, { Component } from "react"
import { View } from "react-native"

// Local Imports
import { TopBarComponent, AlbumComponent, FooterComponent } from "@Components";
import { IGalleryProps, IGalleryState, IMediaItem } from "@Interfaces";
import { GalleryStyle } from "@Styles";
import { Const } from '@Constants';
import Common from '@Provider';

export class GalleryComponent extends Component<IGalleryProps, IGalleryState> {

	constructor(props: IGalleryProps) {
		super(props);
		this.state = {
			title: `${props.mediaList.length} Photos`
		}
	}

	static defaultProps = {
		stickyFooter: true,
		gridSize: 3,
	}

	public render(): JSX.Element {
		const {
			style,
			stickyFooter
		} = this.props;
		return (
			<Common.Provider value={{ ...this.state, ...this.props }}>
				<View style={[GalleryStyle.container, style]}>
					<TopBarComponent />
					<AlbumComponent />
					{stickyFooter &&
						<FooterComponent />
					}
				</View>
			</Common.Provider>
		)
	}
}
