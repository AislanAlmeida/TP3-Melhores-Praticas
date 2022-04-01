# TP3 - Melhores Práticas de Codificação
Instituto Infnet - 2022
Aluno: Aislan Almeida

## Considerações
 - O Projeto implementa a arquitetura MVC
 - Possui uma classe "Creator" responsavel pelo pattern Factory da classe Aluno.
 - A classe "Aluno" implementa a interface "Pessoa" e podemos facilmente incluir novas entidades como "Professor", por exemplo.
 - É utilizado o padrão Repository para interação com o "Banco de dados" (em memória, apos reinicialização da aplicação os registros são excluidos)
 - O Padrão Value Object é utilizado para o parâmetro "Nome" onde é validado pela quantidade de caracteres (é preciso ser > 3 e < 20), utilizo uma interface, caso seja necessário criar outros, devemos extender a classe Abstrata "ValueObject", como no arquivo "Nome.value-object.ts"


## Instalação
```bash
npm install
```

## Execução
```bash
npm run dev
```

# Automação com Selenium
## Após o serviço em execução, abrir outro terminal e digitar:

```bash
npx jest
```
*é necessário ter o navegador Google Chrome instalado no computador *

