import { Category, Product } from './types';

import fotoGeral1 from './assets/geral/geral1.jpeg';
import fotoJiu1 from './assets/jiu/jiu1.jpeg';
import fotoKid1 from './assets/kids/kid1.jpeg';
import fotoTaek1 from './assets/taek/taek1.jpeg';
import fotoFaixas1 from './assets/faixas/faixas1.jpeg';

export const CONTACT_INFO = {
  address: "Avenida Por do Sol, 527, Jardim Panorama - Foz do Iguaçu - Paraná",
  cep: "85.856-430",
  whatsapp: "+55 67 9238-7737",
  whatsappRaw: "556792387737",
  instagram: "https://www.instagram.com/kimonoshonra?igsh=bWtlNmdqajdvNGgz",
  email: "contato@kimonoshonra.com.br"
};

/* 
  =============================================================================
  ÁREA DO ADMIN - FOTOS REAIS (Baseadas nos anexos)
  Substitua os links abaixo pelos arquivos reais quando hospedar o site.
  Usei imagens similares públicas para manter o layout funcional por enquanto.
  =============================================================================
*/

// FOTO 1: Homem de Kimono Preto (Jiu-Jitsu/Hapkido)
const FOTO_1_PRETO = fotoGeral1;

// FOTO 2: Homem de Kimono Branco com Barba (Jiu-Jitsu)
const FOTO_2_BRANCO = fotoJiu1;

// FOTO 3: Menino de Kimono Branco (Karatê/Infantil)
const FOTO_3_KID = fotoKid1;

// FOTO 4: Costas do Dobok (Taekwondo) - Detalhe
const FOTO_4_TAEKWONDO = fotoTaek1;

// FOTO 5: Faixa Preta com Detalhe Puzzle (Autismo)
const FOTO_5_FAIXA = fotoFaixas1;


export const CATEGORIES: Category[] = [
  {
    id: 'jiu-jitsu',
    label: 'Jiu-Jitsu',
    image: FOTO_2_BRANCO, // Foto do homem de branco
    description: 'Kimonos de alta performance para a arte suave.'
  },
  {
    id: 'karate',
    label: 'Karatê',
    image: FOTO_3_KID, // Foto do menino
    description: 'Resistência e leveza para seus katas e kumites.'
  },
  {
    id: 'taekwondo',
    label: 'Taekwondo',
    image: FOTO_4_TAEKWONDO, // Foto das costas do Dobok
    description: 'Doboks com tecnologia de ventilação e conforto.'
  },
  {
    id: 'hapkido',
    label: 'Hapkido',
    image: FOTO_1_PRETO, // Foto do homem de preto (Estilo mais agressivo/defesa pessoal)
    description: 'Uniformes reforçados para defesa pessoal.'
  },
  {
    id: 'faixas',
    label: 'Faixas',
    image: FOTO_5_FAIXA, // Foto da faixa com puzzle
    description: 'Todas as graduações com costura reforçada.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kimono Honra Pro BJJ - Branco',
    category: 'jiu-jitsu',
    price: 450.00,
    image: FOTO_2_BRANCO,
    description: 'Trançado reforçado, gola higiênica e corte slim. Ideal para competições.',
    isFeatured: true
  },
  {
    id: '2',
    name: 'Kimono Honra Pro BJJ - Azul',
    category: 'jiu-jitsu',
    price: 470.00,
    image: FOTO_2_BRANCO, // Usando a foto de branco como referência de modelo, admin pode alterar se tiver foto do azul
    description: 'O mesmo desempenho do modelo branco, com estilo imbatível.',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Kimono Honra Pro BJJ - Preto',
    category: 'jiu-jitsu',
    price: 490.00,
    image: FOTO_1_PRETO, // Foto específica do Kimono Preto
    description: 'Elegância e terror nos tatames. Gramatura pesada.',
    isFeatured: true
  },
  {
    id: '4',
    name: 'Kimono Karatê Infantil / Iniciante',
    category: 'karate',
    price: 220.00,
    image: FOTO_3_KID,
    description: 'Leveza e resistência para os futuros campeões.',
    isFeatured: true
  },
  {
    id: '5',
    name: 'Dobok Taekwondo Mestre',
    category: 'taekwondo',
    price: 290.00,
    image: FOTO_4_TAEKWONDO,
    description: 'Tecido leve e respirável com bordados de alta definição nas costas.',
    isFeatured: false
  },
  {
    id: '6',
    name: 'Faixa Especial - Edição Autismo',
    category: 'faixas',
    price: 140.00,
    image: FOTO_5_FAIXA,
    description: 'Faixa preta premium com ponteira personalizada Puzzle.',
    isFeatured: true
  }
];