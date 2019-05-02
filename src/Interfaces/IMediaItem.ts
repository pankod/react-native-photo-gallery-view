import { MediaStateEnum } from '@Enum';

export interface IMediaItem {
	caption: string;
	id: string;
	photo: string;
	state: MediaStateEnum;
	thumb: string;
}


