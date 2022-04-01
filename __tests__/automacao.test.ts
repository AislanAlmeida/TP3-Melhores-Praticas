require('chromedriver');
import {Builder, By, Key, until} from 'selenium-webdriver';

describe('Testando automação do cadastro de alunos',()=>{
    test('deve cadastrar um aluno e verificar se o aluno foi cadastrado',async ()=>{
        const nome = 'Aislan';
        const email = 'aislan.almeida@al.infnet.edu.br';
        const matricula = '234234';

        let driver = await new Builder().forBrowser('chrome').build();
        //Preenche os dados da tela
        await driver.get('http://localhost:8082/alunos/cadastrar');
        await driver.sleep(500);
        await driver.findElement(By.name('nome')).sendKeys(nome, Key.TAB);
        await driver.sleep(500);
        await driver.findElement(By.name('email')).sendKeys(email, Key.TAB);
        await driver.sleep(500);
        //Faz a submissão do formulário
        await driver.findElement(By.name('matricula')).sendKeys(matricula, Key.RETURN);
        await driver.sleep(500);
        //Clica no botão para ver todos
        await driver.findElement(By.id('btn-verTodos')).click();
        await driver.sleep(500);
        //Conta quantos cards aparecem na tela
        let cards = await driver.findElements(By.name('cardAluno')).then(elements => {
            return elements.length;
        });
        expect(cards).toBeGreaterThan(0);
        await driver.quit();
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    })
})