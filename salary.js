function NetSalaryCalculate(basicSalary, benefits) {

  
  const grossSalary = basicSalary + benefits;
  console.log("your gross salary is: ", grossSalary);

  function calculateGrossSalaryMinusPayee() {
    const grossSalaryMinusPayee = grossSalary - (grossSalary * 0.3);
    console.log("your salary minus payee tax is; ", grossSalaryMinusPayee);
    

  function calculateGrossSalaryMinusNSSF() {
    const grossSalaryMinusNSSF = grossSalaryMinusPayee - (basicSalary * 0.06);
     console.log("your salary minus NSSF is: " ,grossSalaryMinusNSSF);


    function calculateGrossSalaryMinusNHIF() {
const grossSalaryMinusNHIF = grossSalaryMinusNSSF -  ((basicSalary * 0.18))
      
console.log("your salary minus NHIF is: ", grossSalaryMinusNHIF);
    
 return grossSalaryMinusNHIF;
}
    calculateGrossSalaryMinusNHIF()
  }
calculateGrossSalaryMinusNSSF()
  }
  calculateGrossSalaryMinusPayee();
}
console.log(NetSalaryCalculate(10000, 1200));
