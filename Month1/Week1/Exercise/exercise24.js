/*
24 - Uma pessoa desenvolvedora recebe frequentemente propostas de trabalho
pela CLT(Consolidação das Leis Trabalhistas) e pela PJ (Pessoa Jurídica).
Considerando que o trabalho como CLT envolve férias, 13° salário, R$ 700 de
benefício e 8% mensal referente ao FGTS. Faça um programa que receba como
entrada os dois valores mensais oferecidos e tome a decisão informando qual
proposta a pessoa deve aceitar.
*/

function checkJob(salaryJobCLT, salaryJobPJ) {
    let jobOption = null

    const grossSalary = ((salaryJobCLT * 12) / 14) + salaryJobCLT * 0.08 + 700

    if (grossSalary >= salaryJobPJ) {
        jobOption = 'CLT ' + grossSalary.toFixed(2)
    } else {
        jobOption = 'PJ ' + salaryJobPJ
    }
    console.log(jobOption)
}
checkJob(1500, 1500)
checkJob(2500, 1500)
checkJob(1500, 2500)