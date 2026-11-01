# OrçaFluxo

Microproduto experimental para profissionais autônomos e pequenas empresas de serviços.

## Problema
Profissionais montam propostas em mensagens ou planilhas, esquecem custos indiretos e não percebem quanto sobra depois de taxas e descontos.

## MVP atual
- Cadastro local de cliente e serviço
- Itens, quantidades, custos adicionais, taxas e margem desejada
- Cálculo do preço recomendado por margem sobre venda
- Prévia de proposta e impressão/Salvar como PDF
- Histórico local com status (rascunho, enviada, aprovada, perdida)
- Exportação CSV
- Sem conta, servidor, API paga ou envio automático

## Limitações explícitas
- Dados ficam no armazenamento local do navegador; não sincronizam entre dispositivos.
- Não há autenticação, cobrança, assinatura nem backup em nuvem nesta versão.
- A ferramenta não substitui orientação contábil/fiscal.
- O produto ainda precisa de validação com profissionais reais antes de qualquer investimento em infraestrutura.

## Hipótese comercial a validar
Plano gratuito para criar propostas básicas; plano Pro hipotético para identidade visual, catálogo de serviços, backup/sincronização e acompanhamento de conversão. Não cobrar nem anunciar plano Pro antes de validar disposição a pagar.

## Rodar localmente
Abra `index.html` no navegador. Não requer instalação.

## Próximas decisões
1. Testar com profissionais de manutenção residencial e pequenos prestadores.
2. Medir se o cálculo de margem e histórico de propostas são usados repetidamente.
3. Só então decidir hospedagem, autenticação e pagamentos.
