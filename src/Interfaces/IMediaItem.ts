import { MediaStateEnum } from '@Enum';

export interface IMediaItem {
	caption?: string;
	id: string;
	original: string;
	thumbnail: string;
	state?: MediaStateEnum;
	isSelected?: boolean;
}


