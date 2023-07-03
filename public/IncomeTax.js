class IncomeTax {
  static calcProvinceTax(income) {
    let provinceTax = 0;
    const PTAX_BRACKET_1 = 40922;
    const PTAX_BRACKET_2 = 81847;
    const PTAX_BRACKET_3 = 150000;
    const PTAX_BRACKET_4 = 220000;
    const PBRACKET_1 = 0.0505;
    const PBRACKET_2 = 0.0915;
    const PBRACKET_3 = 0.1116;
    const PBRACKET_4 = 0.1216;
    const PBRACKET_5 = 0.1316;

    if (income == NaN || income < 0) {
      throw "Invalid Input";
    } else if (income <= PTAX_BRACKET_1) {
      provinceTax = income * PBRACKET_1;
    } else if (income > PTAX_BRACKET_1 && income <= PTAX_BRACKET_2) {
      provinceTax = income * PBRACKET_2;
    } else if (income > PTAX_BRACKET_2 && income <= PTAX_BRACKET_3) {
      provinceTax = income * PBRACKET_3;
    } else if (income > PTAX_BRACKET_3 && income <= PTAX_BRACKET_4) {
      provinceTax = income * PBRACKET_4;
    } else if (income > PTAX_BRACKET_4) provinceTax = income * PBRACKET_5;

    return Number(provinceTax.toFixed(0));
  }

  static calcFederalTax(income) {
    let federalTax = 0;
    const FTAX_BRACKET_1 = 45282;
    const FTAX_BRACKET_2 = 90563;
    const FTAX_BRACKET_3 = 140388;
    const FTAX_BRACKET_4 = 200000;
    const FBRACKET_1 = 0.15;
    const FBRACKET_2 = 0.205;
    const FBRACKET_3 = 0.26;
    const FBRACKET_4 = 0.29;
    const FBRACKET_5 = 0.33;

    if (income == NaN || income < 0) {
      throw "Invalid Input";
    } else if (income <= FTAX_BRACKET_1) {
      federalTax = income * FBRACKET_1;
    } else if (income > FTAX_BRACKET_1 && income <= FTAX_BRACKET_2) {
      federalTax = income * FBRACKET_2;
    } else if (income > FTAX_BRACKET_2 && income <= FTAX_BRACKET_3) {
      federalTax = income * FBRACKET_3;
    } else if (income > FTAX_BRACKET_3 && income <= FTAX_BRACKET_4) {
      federalTax = income * FBRACKET_4;
    } else if (income > FTAX_BRACKET_4) federalTax = income * FBRACKET_5;

    return Number(federalTax.toFixed(0));
  }
}

module.exports = IncomeTax;
