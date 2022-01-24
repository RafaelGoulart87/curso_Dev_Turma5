/*
25 - A mesma pessoa do exercício anterior quer saber o quanto ela irá pagar de
imposto de renda em cada uma das propostas que ela recebe. Tendo por base a
tabela abaixo realize o cálculo do imposto de renda e informe a pessoa para
ambas as propostas.
*/

function checkJob(salaryJobCLT, salaryJobPJ) {
    let jobOption = null

    // CLT
    let grossCLTSalary = salaryJobCLT * 14 + salaryJobCLT * 0.08 * 12 + 700
    let netCLTSalary = null

    if (grossCLTSalary < 21453.24) {
        netCLTSalary = grossCLTSalary
    } else if (21453.24 <= grossCLTSalary < 32151.48) {
        netCLTSalary = grossCLTSalary - grossCLTSalary * 0.075;
    } else if (32151.48 <= grossCLTSalary < 42869.16) {
        netCLTSalary = grossCLTSalary - grossCLTSalary * 0.15;
    } else if (42869.16 <= grossCLTSalary < 53565.72) {
        netCLTSalary = grossCLTSalary - grossCLTSalary * 0.225;
    } else if (53565.72 <= grossCLTSalary) {
        netCLTSalary = grossCLTSalary - grossCLTSalary * 0.275;
    }

    // PJ  
    let grossPJSalary = salaryJobPJ * 12
    let netPJSalary = null

    if (grossPJSalary < 21453.24) {
        netPJSalary = grossPJSalary
    } else if (21453.24 <= grossPJSalary < 32151.48) {
        netPJSalary = grossPJSalary - grossPJSalary * 0.075;
    } else if (32151.48 <= grossPJSalary < 42869.16) {
        netPJSalary = grossPJSalary - grossPJSalary * 0.15;
    } else if (42869.16 <= grossPJSalary < 53565.72) {
        netPJSalary = grossPJSalary - grossPJSalary * 0.225;
    } else if (53565.72 <= grossPJSalary) {
        netPJSalary = grossPJSalary - grossPJSalary * 0.275;
    }

    if (netCLTSalary >= netPJSalary) {
        jobOption = 'CLT ' + (netCLTSalary / 12).toFixed(2);
    } else {
        jobOption = 'PJ ' + (netPJSalary / 12).toFixed(2);
    }

    console.log(jobOption)
}

checkJob(1500, 1500)
checkJob(2500, 1500)
checkJob(1500, 2500)