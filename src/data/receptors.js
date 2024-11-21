const receptors = [
  {
    id: 1,
    name: 'Lar da Caridade',
    email: 'larcaridade@mail.com',
    password: 'senha123',
    address: 'Rua Júlio de Castilhos, 856, Centro, Bento Gonçalves - RS',
    location: { lat: -29.1671, lng: -51.5177 },
    goal: 'Alimentos não perecíveis, roupas, itens de higiene pessoal',
    type: 'receptor',
  },
  {
    id: 2,
    name: 'Fundação Consepro',
    email: 'conseprobg@mail.com',
    password: 'senha456',
    address: 'Rua 13 de Maio, 50, Centro, Bento Gonçalves - RS',
    location: { lat: -29.1685, lng: -51.5189 },
    goal: 'Material escolar, livros, itens de informática',
    type: 'receptor',
  },
  {
    id: 3,
    name: 'Cáritas Bento Gonçalves',
    email: 'caritasbg@mail.com',
    password: 'senha789',
    address: 'Rua Marechal Deodoro, 35, Centro, Bento Gonçalves - RS',
    location: { lat: -29.1658, lng: -51.5164 },
    goal: 'Cobertores, utensílios de cozinha, brinquedos',
    type: 'receptor',
  },

  {
    id: 4,
    name: 'Doador Ber',
    email: 'ber@mail.com',
    password: '123',
    goal: 'Doar alimentos e roupas',
    type: 'doador',
  },
];

export default receptors;
