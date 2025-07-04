import type { CityData } from "@/lib/types"

const rioData: CityData = {
  attractions: [
    {
      id: 1,
      nome: "Cristo Redentor",
      descricao: "Uma das Sete Maravilhas do Mundo Moderno, com uma vista deslumbrante da cidade.",
      tempo: 3,
      preco: 87.5,
      avaliacao: 4.9,
      categoria: "Monumento",
      beneficio: 99,
      lat: -22.9519,
      lng: -43.2105,
      opens: 8,
      closes: 19,
    },
    {
      id: 2,
      nome: "Pão de Açúcar",
      descricao: "Complexo de morros que oferece vistas panorâmicas espetaculares através de um teleférico.",
      tempo: 3,
      preco: 150,
      avaliacao: 4.9,
      categoria: "Monumento",
      beneficio: 98,
      lat: -22.9489,
      lng: -43.156,
      opens: 8,
      closes: 20,
    },
    {
      id: 3,
      nome: "Praia de Copacabana",
      descricao: "Uma das praias mais famosas do mundo, conhecida por sua beleza e calçadão movimentado.",
      tempo: 2,
      preco: 0,
      avaliacao: 4.7,
      categoria: "Praia",
      beneficio: 94,
      lat: -22.9711,
      lng: -43.1825,
      opens: 0,
      closes: 24,
    },
    {
      id: 4,
      nome: "Museu do Amanhã",
      descricao: "Museu de ciências com foco em sustentabilidade e o futuro do planeta.",
      tempo: 2.5,
      preco: 30,
      avaliacao: 4.7,
      categoria: "Cultural",
      beneficio: 95,
      lat: -22.892,
      lng: -43.1796,
      opens: 10,
      closes: 18,
    },
    {
      id: 5,
      nome: "Escadaria Selarón",
      descricao: "Uma escadaria colorida e vibrante, decorada com azulejos de todo o mundo.",
      tempo: 1,
      preco: 0,
      avaliacao: 4.6,
      categoria: "Monumento",
      beneficio: 92,
      lat: -22.915,
      lng: -43.1794,
      opens: 0,
      closes: 24,
    },
    {
      id: 6,
      nome: "Jardim Botânico",
      descricao: "Um oásis de tranquilidade com uma vasta coleção de plantas e árvores de todo o mundo.",
      tempo: 3,
      preco: 17,
      avaliacao: 4.8,
      categoria: "Natureza",
      beneficio: 96,
      lat: -22.968,
      lng: -43.221,
      opens: 8,
      closes: 17,
    },
    {
      id: 7,
      nome: "Parque Lage",
      descricao: "Parque público com trilhas, um palacete histórico e vistas deslumbrantes do Cristo Redentor.",
      tempo: 1.5,
      preco: 0,
      avaliacao: 4.7,
      categoria: "Natureza",
      beneficio: 94,
      lat: -22.9605,
      lng: -43.212,
      opens: 9,
      closes: 17,
    },
    {
      id: 8,
      nome: "Arcos da Lapa",
      descricao: "Um aqueduto histórico que se tornou um símbolo da vida noturna boêmia do Rio.",
      tempo: 0.5,
      preco: 0,
      avaliacao: 4.5,
      categoria: "Vida Noturna",
      beneficio: 90,
      lat: -22.913,
      lng: -43.18,
      opens: 0,
      closes: 24,
    },
  ],
  restaurants: [
    { nome: "Confeitaria Colombo", tipo: "Cafeteria Histórica", proximo_a: [4, 5, 8] },
    { nome: "Marius Degustare", tipo: "Churrascaria/Frutos do Mar", proximo_a: [3] },
    { nome: "Aprazível", tipo: "Brasileira", proximo_a: [5, 8] },
    { nome: "Bar Urca", tipo: "Bar/Petiscos", proximo_a: [2] },
  ],
  categories: ["Praia", "Monumento", "Cultural", "Natureza", "Lazer", "Vida Noturna"],
  distances: {
    driving: {
      times: {
        1: { 2: 30, 3: 15, 6: 10, 7: 8 },
        2: { 1: 30, 3: 12, 4: 25, 5: 20 },
        3: { 1: 15, 2: 12, 6: 15, 7: 10 },
        4: { 2: 25, 5: 8, 8: 10 },
        5: { 4: 8, 8: 5 },
        6: { 1: 10, 3: 15, 7: 5 },
        7: { 1: 8, 3: 10, 6: 5 },
        8: { 4: 10, 5: 5 },
      },
      costs: {
        1: { 2: 45, 3: 22, 6: 15, 7: 12 },
        2: { 1: 45, 3: 18, 4: 37, 5: 30 },
        3: { 1: 22, 2: 18, 6: 22, 7: 15 },
        4: { 2: 37, 5: 12, 8: 15 },
        5: { 4: 12, 8: 8 },
        6: { 1: 15, 3: 22, 7: 8 },
        7: { 1: 12, 3: 15, 6: 8 },
        8: { 4: 15, 5: 8 },
      },
    },
    walking: {
      times: {
        4: { 5: 20, 8: 15 },
        5: { 4: 20, 8: 5 },
        6: { 7: 15 },
        7: { 6: 15 },
        8: { 4: 15, 5: 5 },
      },
      costs: {},
    },
  },
  center: [-22.9068, -43.1729],
}
export default rioData
