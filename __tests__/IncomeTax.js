const IncomeTax = require("../public/IncomeTax.js");

//Province (Ontario) Tax

it("tests that Ontario Tax Bracket 1 is correct", ()=>{
    expect(IncomeTax.calcProvinceTax(40922)).toBe(2067);
});

it("tests that Ontario Tax Bracket 1 is correct", ()=>{
    expect(IncomeTax.calcProvinceTax(81847)).toBe(7489);
});

it("tests that Ontario Tax Bracket 1 is correct", ()=>{
    expect(IncomeTax.calcProvinceTax(150000)).toBe(16740);
});

it("tests that Ontario Tax Bracket 1 is correct", ()=>{
    expect(IncomeTax.calcProvinceTax(220000)).toBe(26752);
});

it("tests that Ontario Tax Bracket 1 is correct", ()=>{
    expect(IncomeTax.calcProvinceTax(220001)).toBe(28952);
});

it("tests that the Ontario Tax \"asdf\" throws an exception", ()=>{
    try{
        IncomeTax.calcProvinceTax(-9);
        fail();
    }
    catch(e){
        expect(e.toString()).toBe("Invalid Input");
    }
});

// FEDRAL TAX TEST
it("tests that Federal Tax Bracket 1 is correct", ()=>{
    expect(IncomeTax.calcFederalTax(45282)).toBe(6792);
});

it("tests that Federal Tax Bracket 2 is correct", ()=>{
    expect(IncomeTax.calcFederalTax(90563)).toBe(18565);
});

it("tests that Federal Tax Bracket 3 is correct", ()=>{
    expect(IncomeTax.calcFederalTax(140388)).toBe(36501);
});

it("tests that Federal Tax Bracket 4 is correct", ()=>{
    expect(IncomeTax.calcFederalTax(200000)).toBe(58000);
});

it("tests that Federal Tax Bracket 4 is correct", ()=>{
    expect(IncomeTax.calcFederalTax(200001)).toBe(66000);
});

it("tests that the Federal Tax \"asdf\" throws an exception", ()=>{
    try{
        IncomeTax.calcFederalTax(-9);
        fail();
    }
    catch(e){
        expect(e.toString()).toBe("Invalid Input");
    }
});