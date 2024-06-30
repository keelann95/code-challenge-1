function NetSalaryCalculate() {
  const basicSalary = document.nodeValue;

  let benefits = document.nodeValue;

  //payee \\tax
  let payee = Math.floor((basicSalary + benefits) * 0.3);

  //NHIF
  let NHIF = Math.floor(basicSalary * 0.18);

  //NSSF

  let NSSF = Math.floor(basicSalary * 0.06);

  // grossSalary

  let grossSalary = Math.floor(basicSalary + benefits);

  //netSalary
  let netSalary = grossSalary - payee - NHIF - NSSF;
}
