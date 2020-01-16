describe("My whatToDrink function", function() {
    
    beforeEach(function() {
        drink = new whatToDrink();
    });
    
    describe("Checks age", function() {
        
        it("should exist", function() {
            expect(whatToDrink).toBeDefined();
        });
        
        it("should return drink toddy when called as whatToDrink(13)", function() {
            var result = whatToDrink(13)
            expect(result).toBe("Drink Toddy");
        });
        
        
        it("should return drink coke when called as whatToDrink(17)", function() {
            var result = whatToDrink(17)
            expect(result).toBe("Drink Coke");
        });
        
        it("should return drink beer when called as whatToDrink(18)", function() {
            var result = whatToDrink(18)
            expect(result).toBe("Drink Beer");
        });
        
        it("should return drink beer when called as whatToDrink(20)", function() {
            var result = whatToDrink(20)
            expect(result).toBe("Drink Beer");
        }); 
        
        it("should return drink whisky when called as whatToDrink(30)", function() {
            var result = whatToDrink(30)
            expect(result).toBe("Drink Whisky");
        });
        
        it("should be unable to return a drink when called as whatToDrink(140)", function() {
            var result = whatToDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should contain Drink when called as whatToDrink(17)", function() {
            var result = whatToDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});