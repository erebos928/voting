const {prepareRows} = require("./utils.");
describe('prepareRows',()=>{
    const cities = [
        { name: 'City 1', id: 1 },
        { name: 'City 2', id: 2 },
        { name: 'City 3', id: 3 },
        { name: 'City 4', id: 4 },
        { name: 'City 5', id: 5 },
        { name: 'City 6', id: 6 },
        { name: 'City 7', id: 7 },
        { name: 'City 8', id: 8 },
        { name: 'City 9', id: 9 },
        { name: 'City 10', id: 10 },
      ];
      test('handles invalid cities prop', () => {
        let result = prepareRows('ZZZ',1);
        expect(result.error).toBe('Cities prop is not an array.');
      });
      test('handle', () => {
        let result = prepareRows(cities,1);
        expect(result.rows).toHaveLength(2);
        expect(result.rows[0]).toHaveLength(4);
        expect(result.rows[1]).toHaveLength(4);
      });
})