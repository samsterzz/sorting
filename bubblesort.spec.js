describe('Bubble Sort', function(){
    var testArr = [6, 2, 37, 23, 90, 105, 2, 16]

    it('is a function', function() {
        expect(typeof bubbleSort).toEqual('function');
    })

    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('sorts all the values in an array', function() {
        expect(bubbleSort(testArr)).toEqual([2, 2, 6, 16, 23, 37, 90, 105]);
    })
});

describe('Swap', function() {

    beforeAll(function () {
        spyOn(bubbleSort, 'swap').and.callThrough();
    });

    it('uses the method swap', function () {
        expect(swap).toHaveBeenCalled();
    });

    it('is a function', function() {
        expect(typeof swap).toEqual('function');
    })
})