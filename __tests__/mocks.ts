export const context = {
	mediaList: [],
	gridSize: 3
}

export const MyContext = ({
	Consumer(props) {
		return props.children(context)
	}
})
