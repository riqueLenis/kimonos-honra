import { Category, Product } from "./types";

import fotoGeral1 from "./assets/geral/geral1.jpeg";
import fotoJiu1 from "./assets/jiu/jiu1.jpeg";
import fotoJiuBranco1 from "./assets/jiu/jiuBranco.jpeg";
import fotoJiuBranco2 from "./assets/jiu/jiuBranco2.jpeg";
import fotoJiuBranco3 from "./assets/jiu/jiuBranco3.jpeg";
import fotoJiuAzul1 from "./assets/jiu/jiuAzul.jpeg";
import fotoJiuAzul2 from "./assets/jiu/jiuAzul2.jpeg";
import fotoJiuAzul3 from "./assets/jiu/jiuAzul3.jpeg";
import fotoJiuPreto1 from "./assets/jiu/jiuPreto.jpeg";
import fotoKid1 from "./assets/kids/kid1.jpeg";
import fotoTaek1 from "./assets/taek/taek1.jpeg";
import fotoFaixas1 from "./assets/faixas/faixas1.jpeg";

export const CONTACT_INFO = {
  address: "Avenida Por do Sol, 527, Jardim Panorama - Foz do Iguaçu - Paraná",
  cep: "85.856-430",
  whatsapp: "+55 67 9238-7737",
  whatsappRaw: "556792387737",
  instagram: "https://www.instagram.com/kimonoshonra?igsh=bWtlNmdqajdvNGgz",
  email: "contato@kimonoshonra.com.br",
};

const FOTO_1_PRETO = fotoGeral1;

const FOTO_2_BRANCO = fotoJiu1;

const FOTO_3_KID = fotoKid1;

const FOTO_4_TAEKWONDO = fotoTaek1;

const FOTO_5_FAIXA = fotoFaixas1;

export const CATEGORIES: Category[] = [
  {
    id: "jiu-jitsu",
    label: "Jiu-Jitsu",
    image: FOTO_2_BRANCO,
    description: "Kimonos de alta performance para a arte suave.",
  },
  {
    id: "karate",
    label: "Karatê",
    image: FOTO_3_KID,
    description: "Resistência e leveza para seus katas e kumites.",
  },
  {
    id: "taekwondo",
    label: "Taekwondo",
    image: FOTO_4_TAEKWONDO,
    description: "Doboks com tecnologia de ventilação e conforto.",
  },
  {
    id: "hapkido",
    label: "Hapkido",
    image: FOTO_1_PRETO,
    description: "Uniformes reforçados para defesa pessoal.",
  },
  {
    id: "faixas",
    label: "Faixas",
    image: FOTO_5_FAIXA,
    description: "Todas as graduações com costura reforçada.",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Kimono HONRA Underground - Branco/Preto",
    category: "jiu-jitsu",
    price: 519.9,
    image: fotoJiuBranco1,
    description:
      "Paletó 100% algodão trançado pré-encolhido (600 g/m³) e calça ripstop 100% algodão (435 g/m²).",
    isFeatured: true,
  },
  {
    id: "2",
    name: "Kimono HONRA Underground - Azul",
    category: "jiu-jitsu",
    price: 539.9,
    image: fotoJiuAzul1,
    description:
      "Mesmas especificações do Underground, com variação de cor azul. Paletó trançado e calça ripstop.",
    isFeatured: true,
  },
  {
    id: "3",
    name: "Kimono HONRA Underground - Preto",
    category: "jiu-jitsu",
    price: 549.9,
    image: fotoJiuPreto1,
    description:
      "Modelo Underground na cor preta, com paletó trançado e calça ripstop para máxima durabilidade.",
    isFeatured: true,
  },
  {
    id: "7",
    name: "Kimono HONRA Pro BJJ - Branco",
    category: "jiu-jitsu",
    price: 450.0,
    image: fotoJiuBranco2,
    description:
      "Trançado reforçado, gola higiênica e corte slim. Ideal para treinos e competições.",
    isFeatured: true,
  },
  {
    id: "8",
    name: "Kimono HONRA Pro BJJ - Azul",
    category: "jiu-jitsu",
    price: 470.0,
    image: fotoJiuAzul2,
    description:
      "O mesmo desempenho do modelo branco, com estilo imbatível.",
    isFeatured: true,
  },
  {
    id: "9",
    name: "Kimono HONRA Pro BJJ - Branco (Variação)",
    category: "jiu-jitsu",
    price: 459.9,
    image: fotoJiuBranco3,
    description:
      "Variação do modelo branco com detalhes de acabamento premium e costuras reforçadas.",
    isFeatured: false,
  },
  {
    id: "10",
    name: "Kimono HONRA Pro BJJ - Azul (Variação)",
    category: "jiu-jitsu",
    price: 479.9,
    image: fotoJiuAzul3,
    description:
      "Variação do modelo azul com acabamento premium e reforço em áreas de maior atrito.",
    isFeatured: false,
  },
  {
    id: "4",
    name: "Kimono Honra Karatê Kids Start / Iniciante",
    category: "karate",
    price: 247.0,
    image: FOTO_3_KID,
    description:
      "Conjunto em tecido brim leve 100% algodão, gramatura .259 g/m³",
    isFeatured: true,
  },
  {
    id: "5",
    name: "Dobok Taekwondo Mestre",
    category: "taekwondo",
    price: 290.0,
    image: FOTO_4_TAEKWONDO,
    description:
      "Tecido leve e respirável com bordados de alta definição nas costas.",
    isFeatured: false,
  },
  {
    id: "6",
    name: "Faixa Especial - Edição Autismo",
    category: "faixas",
    price: 140.0,
    image: FOTO_5_FAIXA,
    description: "Faixa preta premium com ponteira personalizada Puzzle.",
    isFeatured: true,
  },
];
