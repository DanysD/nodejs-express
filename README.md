1. Pesquisar sobre o que é JWT (Json Web Token) e Cookies para transporte de dados, descrever.

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

4. Pesquisar sobre POO (Programação Orientada a Objetos). O que é POO ?

O que é um paradigma de programação - Um paradigma pode ser entendido como a forma com a qual se decide resolver determinado problema por meio da programação de computadores. Como exemplos: Tipo imperativo e o declarativo.

O que é o paradigma de Poo - é um modelo de projeto baseado na aproximação entre o mundo real e o mundo virtual, através da criação e interação entre objetos, códigos, entre outros.

Como funciona o Poo - tem o propósito de aproximar o mundo lógico da programação e o mundo em que vivemos. 

Quais as diferenças da Poo para a Programação Estruturada - Na Poo, eles não são mais generalistas, tais quais as variáveis globais que estão visíveis e utilizáveis por todos a qualquer momento. Sua estruturação de dados é menor, eles ficam acessíveis somente aos seus métodos, em vez de ser acessíveis por todas as funções.

6. Quais as diferenças entre programação estruturada e programação orientada a objetos - Enquanto a programação orientada a objetos está voltada ao conceito de classes, e herança, já programação estruturada está ligada a 
procedimentos e funções que o usuário definiu.

7. Quais linguagens estruturadas e quais linguagens orientadas a objetos - Estruturadas: C, PHP; Orientadas a objetos: JAVA, C#, Pascal.

8. O que são classes e o que são objetos - A classe é o modelo que define o objeto, como por exemplo, as 
características que ele terá e seus comportamentos. Já o objeto é algo concreto, ou seja, podemos definir uma classe que o objeto terá uma dimensão, como por exemplo altura, entretanto só no objeto voce pode 
definir essa altura.

9. Quais o quatro pilares da POO - Descreva cada um deles com suas palavras: Os quatro pilares da POO são: 

1- Abstração: Nessa etapa devemos pensar na identidade, características e as ações referentes ao objeto, sendo de extrema importância.

2- Encapsulamento: Essa etapa adiciona segurança à aplicação escondendo suas propriedades, normalmente ele é feito através de propriedades privadas.

3- Herança: Nada mais é que uma das vantagens da POO, afinal através dela podemos reutilizar códigos anteriores, otimizando o desenvolvimento e tendo uma maior capacidade de adições.

4- Polimorfismo: É literlamente o significado da palavra, ele permite herdar um método de classe pai e atribuir uma nova implementação para o método pré-definido.
