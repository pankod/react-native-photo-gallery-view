// Global Imports
import React, { PureComponent } from 'react'

// Local Imports
import Common from '@Provider';
import { IGalleryProps, IGalleryState } from '@Interfaces';
import { BlurImage } from '@Components';

export class DetailComponent extends PureComponent {

	static contextType = Common;

	public render(): JSX.Element {
		return (
			<Common.Consumer>
				{
					(context: IGalleryProps & IGalleryState) => (
						<BlurImage
							resizeMethod={"resize"}
							resizeMode={"contain"}
							source={{ uri: context.showingImage && context.showingImage.photo }}
							thumbnail={{ uri: context.showingImage && context.showingImage.thumb }}
						/>
					)
				}
			</Common.Consumer>
		)
	}
}
