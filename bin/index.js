#!/usr/bin/env node

const chalk = require('chalk');
const _cliProgress = require('cli-progress');
const qoa = require('qoa');
const {log} = console;

const ques = require('../lib/questions')
log(chalk.red("          __     __      __                                     "));    
log(chalk.red("          \\ \\   / /     /  \\       ________     | |        | |  "));
log(chalk.red("           \\ \\ / /     / /\\ \\      | ______|    | |        | |  "));
log(chalk.red("            \\   /     / /__\\ \\     | |_____     | |________| |  "));
log(chalk.red("             | |     / /____\\ \\    |_____  |    | |________| |  "));
log(chalk.red("             | |    / /      \\ \\    _____| |    | |        | |  "));
log(chalk.red("             | |   / /        \\ \\  |_______|    | |        | |  "));
log(chalk.red("                                                                "));
log();
log(chalk.bold("Welcome to the best npm package about Yash Bhatt!...I was too lazy to fix the letters"));

(async function() {
    let conf = qoa.prompt([ques.begin]);
    let result = await conf;
    
    if (result.type) {
        round();
    }

})();
async function roundfull() {
    qoa.clearScreen();
    log('\n')
    let used = [];
    let score = 0;

    for (let i = 1; i <= 50; i++) {
        let rand = Math.floor(Math.random() * ques.qs.length);

        if (!used.includes(rand)) {
            log(chalk.whiteBright.bgRed(`  Question ${i}/50:  `));
            let question = qoa.prompt([ques.qs[rand]]);
            let answer = await question;

            if (ques.qs[rand].type === 'input') {
                if (ques.qs[rand].answer === answer.a) {
                    log(chalk.green('Correct'));
                    score++;
                } else {
                    log(chalk.red('Wrong'));
                    let longate = {t:'true', f:'false'};
                    if (longate[ques.qs[rand].answer]) {
                        log(chalk.gray(`The correct answer is ${longate[ques.qs[rand].answer]}`));
                    } else {
                        log(chalk.gray(`The correct answer is ${ques.qs[rand].answer}`));
                    }
                }
            } else if (ques.qs[rand].type === 'quiz') {
                if (answer.a.isCorrect) {
                    log(chalk.green('Correct'));
                    score++;
                } else {
                    log(chalk.red('Wrong'));
                    log(chalk.gray(`The correct answer is ${ques.qs[rand].answer}`));
                }
            }
            log('\n')

            used.push(rand);

        } else {
            i--;
        }

    }
    log(chalk.whiteBright.bgRed.bold(`  You got ${score} correct  `));
    let fullquiz = qoa.prompt([ques.full]);
    let res2 = await fullquiz
    if (res2.type) {
        roundfull();    
    }
    let another = qoa.prompt([ques.again]);        
    let res = await another;
    if (res.type) {
        round();
    }
}

async function round() {
    qoa.clearScreen();
    log('\n')
    let used = [];
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        let rand = Math.floor(Math.random() * ques.qs.length);

        if (!used.includes(rand)) {
            log(chalk.whiteBright.bgRed(`  Question ${i}/10:  `));
            let question = qoa.prompt([ques.qs[rand]]);
            let answer = await question;

            if (ques.qs[rand].type === 'input') {
                if (ques.qs[rand].answer === answer.a) {
                    log(chalk.green('Correct'));
                    score++;
                } else {
                    log(chalk.red('Wrong'));
                    let longate = {t:'true', f:'false'};
                    if (longate[ques.qs[rand].answer]) {
                        log(chalk.gray(`The correct answer is ${longate[ques.qs[rand].answer]}`));
                    } else {
                        log(chalk.gray(`The correct answer is ${ques.qs[rand].answer}`));
                    }
                }
            } else if (ques.qs[rand].type === 'quiz') {
                if (answer.a.isCorrect) {
                    log(chalk.green('Correct'));
                    score++;
                } else {
                    log(chalk.red('Wrong'));
                    log(chalk.gray(`The correct answer is ${ques.qs[rand].answer}`));
                }
            }
            log('\n')

            used.push(rand);

        } else {
            i--;
        }

    }
    log(chalk.whiteBright.bgRed.bold(`  You got ${score} correct  `));
    let another = qoa.prompt([ques.again]);
    let res = await another;
    if (res.type) {
        round();
    }   
    let fullquiz = qoa.prompt([ques.full]);
    let res2 = await fullquiz
    if (res2.type) {
        roundfull();    
    }
   
}