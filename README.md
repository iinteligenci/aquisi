# InsumoCheck

**Comparador gratuito de cotações de fornecedores.** Descubra o custo real por kg, litro ou unidade considerando quantidade, frete e desconto.

- **Aplicativo:** https://iinteligenci.github.io/aquisi/
- **Guia prático:** https://iinteligenci.github.io/aquisi/guia-comparar-cotacoes.html
- **Painel local de validação:** https://iinteligenci.github.io/aquisi/controle.html
- **Sitemap:** https://iinteligenci.github.io/aquisi/sitemap.xml

## Problema que resolve
Pequenos negócios recebem propostas por WhatsApp, e-mail e telefone em embalagens e condições diferentes. O InsumoCheck permite inserir as propostas manualmente e compará-las pelo custo unitário equivalente, sem precisar cadastrar fornecedores ou instalar um ERP.

## Funcionalidades
- Comparação de preços por produto e fornecedor.
- Cálculo de custo unitário com frete e desconto.
- Bloqueio de comparações entre unidades incompatíveis.
- Exige ao menos duas propostas válidas antes de apresentar uma comparação.
- Histórico local, exportação CSV e impressão.
- Layout responsivo para celular e desktop.
- Compartilhamento do aplicativo pelo WhatsApp.
- Sem cadastro, backend, APIs pagas ou coleta remota de cotações.

## Como usar
1. Abra o aplicativo e preencha produto, fornecedor, quantidade, unidade e preço.
2. Adicione uma linha por proposta.
3. Inclua frete e desconto, quando existirem.
4. Compare apenas propostas da mesma unidade.
5. Salve a comparação ou exporte CSV.

O exemplo de demonstração usa dados fictícios. Substitua-os por valores reais antes de tomar decisões de compra.

## Privacidade e limitações
As cotações ficam no armazenamento local do navegador. Não há sincronização entre dispositivos, integração automática com WhatsApp, importação de notas fiscais, conversão automática entre embalagens, avaliação de qualidade ou garantia de prazo e disponibilidade. A economia exibida é uma estimativa matemática, não uma economia realizada.

## Validação comercial
O MVP está publicado gratuitamente como experimento. Ainda não há comprovação de clientes pagantes, retenção ou disposição a pagar. O feedback público é coletado por [este formulário de feedback no GitHub](https://github.com/iinteligenci/aquisi/issues/new?template=feedback.yml). Não envie informações comerciais confidenciais, dados pessoais ou preços privados.

## Desenvolvimento e testes
- Interface: `index.html`
- Motor de cálculo: `core.js`
- Lógica de interação: `app.js`
- Testes: `tests/core.test.js`
- Guia de busca: `guia-comparar-cotacoes.html`
- SEO técnico: `robots.txt`, `sitemap.xml`, canonical, Open Graph e dados estruturados.
- Painel de controle local: registra semanalmente tráfego, ativação, comparações, retenção, feedback, intenção de pagamento, pagamentos e métricas do Google. Dados ficam no navegador; ainda não há analytics agregado automático.
- Publicação: GitHub Pages via GitHub Actions.

Execute os testes com `node --test tests/*.test.js` e verifique a sintaxe com `node --check core.js && node --check app.js`.

## Status
O projeto é um MVP experimental. Testes técnicos aprovados não significam validação de mercado. A próxima decisão depende do uso real, frequência de retorno e feedback dos compradores.
