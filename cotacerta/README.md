# CotaCerta

Ferramenta web gratuita para comparar cotações de fornecedores pelo custo unitário, considerando quantidade, frete e desconto.

## O que está publicado neste MVP
- Cadastro manual de múltiplos preços por produto e fornecedor.
- Cálculo de custo por kg, g, litro, ml, unidade, metro, m² ou caixa.
- Comparação somente quando as unidades informadas são iguais.
- Identificação da menor cotação por produto.
- Estimativa transparente de economia potencial para a menor quantidade comum entre as cotações.
- Histórico local, exportação CSV e impressão.
- Sem cadastro, integração bancária, API paga ou backend.

## Como usar
1. Adicione uma linha para cada preço recebido.
2. Informe a quantidade total e a unidade correspondente à embalagem.
3. Preencha preço, frete e desconto.
4. Compare o custo unitário e confira as condições comerciais com o fornecedor.
5. Salve a comparação ou exporte os dados em CSV.

O botão **Ver exemplo preenchido** carrega dados fictícios de demonstração. Substitua-os antes de tomar decisões reais.

## Privacidade e limitações
- As cotações ficam no armazenamento local do navegador deste dispositivo.
- Não existe conta sincronizada entre dispositivos, integração automática com WhatsApp ou importação de notas.
- A ferramenta não verifica qualidade, prazo, disponibilidade, tributação ou confiabilidade do fornecedor.
- A economia potencial é uma comparação matemática entre cotações, não uma economia realizada.
- Unidades incompatíveis não são convertidas automaticamente; padronize-as antes de comparar.
- Limpar os dados do navegador pode apagar o histórico. Exporte CSV para manter uma cópia.

## Testes
Execute `node --test tests/core.test.js` e `node --check core.js && node --check app.js`.

## Modelo de negócio e validação
O produto está sendo lançado gratuitamente como experimento. Ainda não há comprovação de clientes pagantes, retenção ou disposição a pagar. Não há cobrança ativa. A próxima etapa comercial é obter uso recorrente de compradores independentes e medir se a ferramenta resolve um problema frequente antes de criar planos pagos.

## Publicação
O workflow em `.github/workflows/cotacerta.yml` executa os testes e publica o conteúdo estático no GitHub Pages após aprovação. A URL final depende da configuração do GitHub Pages no repositório.
