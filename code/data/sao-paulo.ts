import type { CityData } from "@/lib/types"

const saoPauloData: CityData = {
  attractions: [
    {
      id: 1,
      nome: "Parque Ibirapuera",
      descricao: "O pulmão verde de São Paulo, com museus, auditórios e vastas áreas de lazer.",
      tempo: 3,
      preco: 0,
      avaliacao: 4.8,
      categoria: "Parque",
      beneficio: 96,
      lat: -23.588,
      lng: -46.658,
      opens: 5,
      closes: 24,
    },
    {
      id: 2,
      nome: "MASP",
      descricao:
        "Um dos mais importantes museus do Hemisfério Sul, com um acervo que abrange da arte clássica à contemporânea.",
      tempo: 2.5,
      preco: 50,
      avaliacao: 4.8,
      categoria: "Cultural",
      beneficio: 97,
      lat: -23.5614,
      lng: -46.656,
      opens: 10,
      closes: 18,
    },
    {
      id: 3,
      nome: "Mercado Municipal",
      descricao: "Um mercado vibrante com uma variedade de produtos frescos, comidas e restaurantes.",
      tempo: 2,
      preco: 0,
      avaliacao: 4.6,
      categoria: "Gastronomia",
      beneficio: 92,
      lat: -23.542,
      lng: -46.629,
      opens: 6,
      closes: 18,
    },
    {
      id: 4,
      nome: "Avenida Paulista",
      descricao: "O coração financeiro e cultural de São Paulo, repleto de lojas, museus e centros culturais.",
      tempo: 2,
      preco: 0,
      avaliacao: 4.7,
      categoria: "Lazer",
      beneficio: 94,
      lat: -23.5613,
      lng: -46.6565,
      opens: 0,
      closes: 24,
    },
    {
      id: 5,
      nome: "Beco do Batman",
      descricao: "Uma galeria de arte a céu aberto com grafites e murais coloridos.",
      tempo: 1,
      preco: 0,
      avaliacao: 4.6,
      categoria: "Cultural",
      beneficio: 92,
      lat: -23.552,
      lng: -46.688,
      opens: 0,
      closes: 24,
    },
    {
      id: 6,
      nome: "Pinacoteca do Estado",
      descricao: "Um museu com um importante acervo de arte brasileira do século XIX até a contemporaneidade.",
      tempo: 2,
      preco: 20,
      avaliacao: 4.9,
      categoria: "Cultural",
      beneficio: 98,
      lat: -23.534,
      lng: -46.634,
      opens: 10,
      closes: 18,
    },
    {
      id: 7,
      nome: "Rua Augusta",
      descricao: "Uma rua icônica com uma mistura eclética de lojas, bares, restaurantes e vida noturna.",
      tempo: 2,
      preco: 0,
      avaliacao: 4.5,
      categoria: "Vida Noturna",
      beneficio: 90,
      lat: -23.556,
      lng: -46.66,
      opens: 0,
      closes: 24,
    },
  ],
  restaurants: [
    { nome: "D.O.M.", tipo: "Alta Gastronomia", proximo_a: [2, 4, 7] },
    { nome: "A Casa do Porco", tipo: "Brasileira", proximo_a: [3, 6] },
    { nome: "Bar da Dona Onça", tipo: "Brasileira", proximo_a: [3, 6] },
    { nome: "Tordesilhas", tipo: "Brasileira", proximo_a: [1, 2, 4] },
  ],
  categories: ["Cultural", "Parque", "Gastronomia", "Lazer", "Vida Noturna"],
  distances: {
    driving: {
      times: {
        1: { 2: 15, 4: 12, 5: 20 },
        2: { 1: 15, 3: 25, 4: 5, 5: 25, 6: 20, 7: 10 },
        3: { 2: 25, 6: 10 },
        4: { 1: 12, 2: 5, 5: 22, 7: 8 },
        5: { 1: 20, 2: 25, 4: 22 },
        6: { 2: 20, 3: 10 },
        7: { 2: 10, 4: 8 },
      },
      costs: {
        1: { 2: 22, 4: 18, 5: 30 },
        2: { 1: 22, 3: 37, 4: 8, 5: 37, 6: 30, 7: 15 },
        3: { 2: 37, 6: 15 },
        4: { 1: 18, 2: 8, 5: 33, 7: 12 },
        5: { 1: 30, 2: 37, 4: 33 },
        6: { 2: 30, 3: 15 },
        7: { 2: 15, 4: 12 },
      },
    },
    walking: {
      times: {
        2: { 4: 2, 7: 15 },
        3: { 6: 10 },
        4: { 2: 2, 7: 12 },
        6: { 3: 10 },
        7: { 2: 15, 4: 12 },
      },
      costs: {},
    },
  },
  center: [-23.5505, -46.6333],
}
export default saoPauloData
