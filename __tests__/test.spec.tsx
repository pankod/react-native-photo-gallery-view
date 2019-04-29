describe('is test work?', () => {
	test('should return 4', () => {
		expect(2 + 2).toEqual(4);
		expect(2 + 2).toMatchSnapshot();
	});
});
