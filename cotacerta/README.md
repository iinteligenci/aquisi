# CotaCerta

MVP experimental para comparar cotações de fornecedores em pequenos negócios de alimentação.

## Problema e hipótese
Pequenos compradores recebem preços em formatos diferentes e podem comparar preço de embalagem sem normalizar custo por kg, litro ou unidade. A hipótese é que uma ferramenta simples, sem ERP e sem exigir cadastro do fornecedor, ajude a decidir a compra.

## Evidência pública inicial
- VMarket declara mais de 2.000 operações e 20.000 fornecedores cadastrados.
- Foozi declara mais de 900 estabelecimentos atendidos.
- Estoqui vende controle de estoque para restaurantes a partir de R$149/mês.
Esses sinais mostram atividade comercial no segmento, mas não provam demanda específica por este produto nem disposição a pagar.

## MVP
- Comparação de preços por produto e fornecedor.
- Cálculo de custo por unidade informada, com frete e desconto.
- Identificação da menor cotação por produto.
- Histórico local e exportação CSV.
- Sem API paga, backend, conta ou envio de mensagens.

## Limitações
- O usuário precisa inserir as cotações manualmente.
- Não converte automaticamente unidades incompatíveis (ex.: caixa de 12 x kg); os dados precisam ser comparáveis na mesma unidade.
- A "economia potencial" compara a opção mais barata com a mais cara disponível por produto, não uma economia realizada.
- Os dados ficam apenas no navegador.

## Validação necessária antes de monetizar
1. Testar o fluxo com compradores independentes, não apenas com grandes redes.
2. Medir se a comparação economiza tempo ou dinheiro de forma recorrente.
3. Descobrir frequência de uso e número de cotações por semana.
4. Testar intenção de pagar por histórico de preços, listas recorrentes e importação de planilhas.
5. Não adicionar cobrança, APIs ou infraestrutura paga antes de evidência de retenção e disposição a pagar.

## Rodar
Abra `index.html` em qualquer navegador moderno.
