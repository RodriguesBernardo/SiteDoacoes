# Projeto de Doação de Itens e Assistência Social

Este projeto é uma plataforma para conectar **doadores** com **instituições receptoras** que precisam de itens de assistência social. O site permite que os doadores localizem as instituições e visualizem informações como endereço e as necessidades específicas de cada uma. O objetivo é facilitar a interação entre as duas partes para que as doações cheguem onde são mais necessárias.

## Funcionalidades

- **Login**: O sistema permite que os usuários façam login como doadores, mas a funcionalidade de receptor foi removida para focar completamente nas funcionalidades voltadas para os doadores.
- **Página do Doador**: Ao fazer login como doador, o usuário tem acesso a um mapa com a localização de diversas instituições, além de uma lista das mesmas.
- **Visualização de Instituições**: O mapa exibe as instituições de caridade em um formato interativo. Ao clicar em um marcador, o usuário vê mais informações sobre a instituição, como nome, endereço e as necessidades dela.
- **Botões de Doação**: A cada seleção de instituição, o doador pode ver os itens necessários e se decidir por contribuir.

## Como Funciona

1. **Login**:
   - O usuário se cadastra no sistema e seleciona sua opção de **Doador** para poder acessar a página principal.
   - Os dados de login são validados com base nas credenciais armazenadas em um arquivo JSON local (ou em um banco de dados, dependendo da implementação futura).

2. **Página de Mapa**:
   - Após o login, o doador é direcionado para a página com um mapa que exibe a localização das instituições.
   - Ao clicar em um marcador de uma instituição, o sistema abre um **InfoWindow** exibindo detalhes sobre as necessidades da instituição.

3. **Doação**:
   - O doador pode clicar nos botões para **doar** itens conforme as necessidades da instituição.

## Estrutura do Projeto

### Arquivos principais:

- **App.js**: Arquivo que configura as rotas do aplicativo.
- **DonorPage.js**: Página principal onde o mapa com as instituições é exibido. O doador pode visualizar detalhes e interagir com o mapa.
- **Login.js**: Tela de login onde o doador insere suas credenciais para acessar o sistema.


### Componentes:
- **DonorPage**: Contém a lógica de interação do usuário com o mapa e informações das instituições.
- **MapComponent**: Componente modularizado para renderizar o mapa e os marcadores das instituições.

### Estilos:
- O CSS foi aprimorado para garantir que o layout seja responsivo e atraente, incluindo a personalização do InfoWindow, onde os detalhes de cada instituição são exibidos com um design intuitivo.


## Instruções de Instalação

### Pré-requisitos:

- **Node.js**: Certifique-se de ter o Node.js instalado no seu sistema para rodar o projeto.
- **Chave de API do Google Maps**: O projeto usa a API do Google Maps para exibir o mapa interativo. Você precisa de uma chave de API válida para que o mapa funcione.

