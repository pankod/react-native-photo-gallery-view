import { ViewStyle } from 'react-native';
import { IMediaItem } from "./";
export interface IGalleryProps {
    mediaList: IMediaItem[];
    customTopBarStyle?: ViewStyle;
    customFooterStyle?: ViewStyle;
}
