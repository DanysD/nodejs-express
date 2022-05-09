JWT - tem como objetivo armazenar de forma compactada e segura objetos JSON ente diferentes aplicações. É utilizado quando queremos realizar um processo de autorização em nossa aplicação ou quando queremos realizar troca de informações.
- Autorização: é o mais comum para o uso do JWT. Depois que o usuário estiver autenticado, cada requisição incluirá o JWT, permitindo que o usuário acesse rotas, serviços e recursos permitidos com esse token.
- Troca de informações: JWTs são uma boa maneira de transmitir informações com segurança entre as partes. Usando pares de chaves pública e privada podemos garantir que os remetentes são quem dizem ser.
Estrutura do JWT - 3 Partes:

. Header:
{
  "alg": "HS256",
  "typ": "JWT"
}

. Payload:
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}

. Signature:
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
  
Por que usar o JWT - Ele é simples de manipular qualquer linguagem e leve para ser tranportado pela rede e é seguro.


COOKIE - É um arquivo de texto. A maioria dos sites armazenam informações básicas, como endereços IP, cores, etc. Em portais como o GMAIL e o Hotmail, nomes de usuários e senhas de email também fazem partes dos Cookies. 

Como funciona : Quando você visita um site pela primeira vez, este envia um Cookie como resposta para o seu navegador, em forma de texto, que ficará armazenado em seu PC até que perca sua validade.

Alguns cuidados : Uma pessoa que usar o PC depois que você, poderá ter acesso aos seus emails. é recomendado que os cookies sejam apagados logo após o uso.
