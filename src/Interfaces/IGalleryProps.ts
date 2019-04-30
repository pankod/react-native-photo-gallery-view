
// Global Imports
import { ViewStyle } from 'react-native';

// Local Imports
import { IMediaItem } from "@Interfaces";

export interface IGalleryProps {
	mediaList: IMediaItem[],
	customTopBarStyle?: ViewStyle,
	customFooterStyle?: ViewStyle
}
