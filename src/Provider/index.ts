// Global Imports
import * as React from "react";

// Local Imports
import { IMediaItem } from '@Interfaces';

const Common = React.createContext({
	mediaList: [],
	gridSize: 3
});

export default Common;
