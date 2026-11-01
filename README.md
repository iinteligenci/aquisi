# InsumoCheck

**Compare o custo real dos seus insumos antes de comprar.**

Acesse a versão pública: **https://iinteligenci.github.io/aquisi/**

Ferramenta web gratuita para pequenos negócios que recebem preços de diferentes fornecedores e precisam comparar o custo por kg, litro ou unidade, incluindo frete e desconto.

## O que faz
- Compara preços de diferentes fornecedores para o mesmo produto.
- Calcula custo unitário a partir da quantidade, preço, frete e desconto.
- Não compara unidades incompatíveis.
- Só apresenta uma comparação quando existem pelo menos duas cotações válidas.
- Estima a diferença entre a maior e a menor cotação usando a menor quantidade comum.
- Permite salvar o histórico no navegador, exportar CSV e imprimir o resumo.
- Não exige cadastro e não envia os dados a um servidor.

## Como testar
1. Abra o link público.
2. Clique em **Ver exemplo preenchido** para conhecer o funcionamento.
3. Substitua os dados fictícios pelos valores reais de duas ou mais cotações.
4. Confira a comparação e exporte o CSV se desejar.

## Privacidade e limites
O histórico fica somente no armazenamento local do navegador. Não há conta, sincronização, integração automática com WhatsApp, importação de notas fiscais, conversão automática entre unidades ou análise de prazo e qualidade do fornecedor. A economia mostrada é potencial, não realizada.

## Estado do projeto
- MVP publicado no GitHub Pages.
- Testes automatizados e verificações de sintaxe/estrutura aprovados no GitHub Actions.
- Produto experimental e gratuito.
- **Validação comercial ainda pendente:** não há clientes pagantes nem evidência de retenção ou disposição a pagar. A hipótese precisa ser testada com compradores independentes antes de qualquer cobrança.

## Desenvolvimento
- Motor de cálculo: `core.js`
- Interface: `index.html` e `app.js`
- Testes: `tests/core.test.js`
- Publicação: `.github/workflows/cotacerta.yml`

Para executar os testes localmente: `node --test tests/core.test.js`.
