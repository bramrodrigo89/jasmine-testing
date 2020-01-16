describe('Calculator', function(){

    beforeEach(function() {
        calc = new Calculator;
    });

    describe('Addition tests', function(){
        it('should return 42',function(){
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it('should return 26',function(){
            calc.add(17);
            calc.add(9);
            expect(calc.value).toBe(26);
        });
        it(`should return an error if we don't supply two numbers `,function(){
            spyOn(window, 'alert');
            calc.add('word1');
            expect(window.alert).toHaveBeenCalledWith("Error!");
        }); 
    }); 
});