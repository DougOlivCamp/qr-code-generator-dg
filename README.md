# QR Code Generator DG

Este é um projeto simples de gerador de QR Code desenvolvido com HTML, CSS e JavaScript. Permite gerar códigos QR a partir de texto inserido pelo usuário.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página (index.html)
- **CSS**: Estilização (styles.css)
- **JavaScript**: Lógica para gerar o QR Code (script.js)
- **API de QR Code**: [QR Server API](https://goqr.me/api/) - Usada para gerar os códigos QR dinamicamente

## Como Funciona

1. O usuário insere um texto no campo de entrada.
2. Ao clicar no botão "Gerar QR Code" ou pressionar Enter, o JavaScript faz uma requisição para a API do QR Server.
3. A API retorna uma imagem do QR Code, que é exibida na página.
4. O layout é responsivo e usa classes CSS para animações.

## API Utilizada

A API principal é a **QR Server API** (https://api.qrserver.com/v1/create-qr-code/).

- **Endpoint**: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={texto}`
- **Parâmetros**:
  - `size`: Tamanho da imagem (ex.: 150x150)
  - `data`: O texto ou URL a ser codificado no QR Code
- **Exemplo de uso no código**:
  ```javascript
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
  ```

Essa API é gratuita e não requer chave de autenticação.

## Como Executar

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em qualquer navegador web.
3. Insira o texto desejado e gere o QR Code.

## Estrutura do Projeto

```
/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── script.js       # Lógica JavaScript
└── img/
    └── QR_code.svg.png # Imagem de exemplo ou ícone
```

## Funcionalidades

- Geração de QR Code a partir de texto.
- Suporte a pressionar Enter para gerar.
- Interface simples e responsiva.
- Feedback visual durante a geração.

## Licença

Este projeto é de uso pessoal. Sinta-se à vontade para modificar e compartilhar.