// Datos de ejemplo. Fotos: Unsplash.
export const SHOP = {
  "key": "manada",
  "name": "Manada",
  "installments": 3,
  "freeFrom": 60000
};

export const FILTER_GROUPS = [
  {
    "key": "animal",
    "label": "Para",
    "options": [
      {
        "id": "all",
        "label": "Todos"
      },
      {
        "id": "perros",
        "label": "Perros"
      },
      {
        "id": "gatos",
        "label": "Gatos"
      }
    ]
  },
  {
    "key": "category",
    "label": "Categoría",
    "options": [
      {
        "id": "all",
        "label": "Todo"
      },
      {
        "id": "alimento",
        "label": "Alimento"
      },
      {
        "id": "descanso",
        "label": "Descanso"
      },
      {
        "id": "paseo",
        "label": "Paseo"
      }
    ]
  }
];

export const PRODUCTS = [
  {
    "id": "alimento-perro-adulto",
    "name": "Alimento perro adulto",
    "tagline": "Pollo y arroz",
    "category": "alimento",
    "animal": [
      "perros"
    ],
    "price": 14900,
    "subscribable": true,
    "badge": "Envío mensual -10%",
    "alt": "Perro sentado junto a un cuenco",
    "variantLabel": "Presentación",
    "desc": "Croquetas con pollo y arroz, sin colorantes artificiales. Para perros de 1 a 7 años.",
    "variants": [
      {
        "id": "0",
        "label": "3 kg",
        "stock": 12,
        "price": 14900
      },
      {
        "id": "1",
        "label": "15 kg",
        "stock": 2,
        "price": 59900
      }
    ],
    "details": [
      [
        "Para",
        "Perros adultos de 1 a 7 años"
      ],
      [
        "Ingredientes",
        "Pollo, arroz, maíz, grasa de pollo, vitaminas y minerales"
      ],
      [
        "Ración",
        "Mirá la calculadora de esta página"
      ]
    ],
    "img": "img/fotos/alimento-perro-adulto-600x750.webp",
    "imgLarge": "img/fotos/alimento-perro-adulto-900x1125.webp"
  },
  {
    "id": "alimento-razas-chicas",
    "name": "Alimento razas pequeñas",
    "tagline": "Croqueta mini",
    "category": "alimento",
    "animal": [
      "perros"
    ],
    "price": 9800,
    "subscribable": true,
    "alt": "Shih Tzu comiendo de un cuenco",
    "variantLabel": "Presentación",
    "desc": "Croqueta pequeña para mandíbulas chicas, con omega 3 para pelo y piel.",
    "variants": [
      {
        "id": "0",
        "label": "1 kg",
        "stock": 9,
        "price": 9800
      },
      {
        "id": "1",
        "label": "7,5 kg",
        "stock": 4,
        "price": 51000
      }
    ],
    "details": [
      [
        "Para",
        "Perros adultos de hasta 10 kg"
      ],
      [
        "Ingredientes",
        "Pollo, arroz, aceite de pescado (omega 3), vitaminas y minerales"
      ],
      [
        "Ración",
        "Mirá la calculadora de esta página"
      ]
    ],
    "img": "img/fotos/alimento-razas-chicas-600x750.webp",
    "imgLarge": "img/fotos/alimento-razas-chicas-900x1125.webp"
  },
  {
    "id": "alimento-gato",
    "name": "Alimento gato adulto",
    "tagline": "Salmón",
    "category": "alimento",
    "animal": [
      "gatos"
    ],
    "price": 12900,
    "subscribable": true,
    "badge": "Envío mensual -10%",
    "alt": "Gato comiendo alimento en un cuenco",
    "variantLabel": "Presentación",
    "desc": "Salmón y arroz, con taurina y control de bolas de pelo. Para gatos adultos.",
    "variants": [
      {
        "id": "0",
        "label": "1,5 kg",
        "stock": 14,
        "price": 12900
      },
      {
        "id": "1",
        "label": "7,5 kg",
        "stock": 3,
        "price": 52900
      }
    ],
    "details": [
      [
        "Para",
        "Gatos adultos"
      ],
      [
        "Ingredientes",
        "Salmón, arroz, taurina, fibras para bolas de pelo"
      ],
      [
        "Ración",
        "Mirá la calculadora de esta página"
      ]
    ],
    "img": "img/fotos/alimento-gato-600x750.webp",
    "imgLarge": "img/fotos/alimento-gato-900x1125.webp"
  },
  {
    "id": "pate-gatito",
    "name": "Paté para gatitos",
    "tagline": "Pack de 12",
    "category": "alimento",
    "animal": [
      "gatos"
    ],
    "price": 18900,
    "subscribable": true,
    "alt": "Gatito comiendo su comida favorita",
    "variantLabel": "Presentación",
    "desc": "Paté húmedo, suave y fácil de digerir. Pack de 12 latitas de 85 g.",
    "variants": [
      {
        "id": "0",
        "label": "Pack x12",
        "stock": 8
      }
    ],
    "details": [
      [
        "Para",
        "Gatitos de hasta 12 meses"
      ],
      [
        "Presentación",
        "12 latas de 85 g"
      ],
      [
        "Conservación",
        "Una vez abierta, en la heladera y dentro de las 48 horas"
      ]
    ],
    "img": "img/fotos/pate-gatito-600x750.webp",
    "imgLarge": "img/fotos/pate-gatito-900x1125.webp"
  },
  {
    "id": "cama-nube",
    "name": "Cama Nube",
    "tagline": "Lavable, base antideslizante",
    "category": "descanso",
    "animal": [
      "perros"
    ],
    "price": 29900,
    "badge": "Más vendido",
    "alt": "Perro marrón acostado en una cama blanca",
    "variantLabel": "Tamaño",
    "desc": "Relleno de fibra siliconada y funda removible apta para lavarropas.",
    "variants": [
      {
        "id": "0",
        "label": "S",
        "stock": 6,
        "price": 29900
      },
      {
        "id": "1",
        "label": "M",
        "stock": 4,
        "price": 39900
      },
      {
        "id": "2",
        "label": "L",
        "stock": 0,
        "price": 52900
      }
    ],
    "details": [
      [
        "Para",
        "Perros y gatos"
      ],
      [
        "Material",
        "Funda de algodón removible, relleno de fibra siliconada"
      ],
      [
        "Cuidado",
        "Funda apta para lavarropas, hasta 40 °C"
      ]
    ],
    "img": "img/fotos/cama-nube-600x750.webp",
    "imgLarge": "img/fotos/cama-nube-900x1125.webp"
  },
  {
    "id": "manta-polar",
    "name": "Manta polar",
    "tagline": "Doble faz",
    "category": "descanso",
    "animal": [
      "perros",
      "gatos"
    ],
    "price": 17900,
    "alt": "Pug acostado sobre una manta gris",
    "variantLabel": "Tamaño",
    "desc": "Polar doble faz, suave y liviana. Sirve para el sillón, el auto o el transportador.",
    "variants": [
      {
        "id": "0",
        "label": "Única",
        "stock": 15
      }
    ],
    "details": [
      [
        "Para",
        "Perros y gatos"
      ],
      [
        "Material",
        "Polar doble faz, 280 g/m²"
      ],
      [
        "Cuidado",
        "Lavar a máquina en frío, sin suavizante"
      ]
    ],
    "img": "img/fotos/manta-polar-600x750.webp",
    "imgLarge": "img/fotos/manta-polar-900x1125.webp"
  },
  {
    "id": "correa-reforzada",
    "name": "Correa reforzada",
    "tagline": "Nylon de 1,5 m",
    "category": "paseo",
    "animal": [
      "perros"
    ],
    "price": 12900,
    "alt": "Correa roja sobre un piso de madera",
    "variantLabel": "Color",
    "desc": "Nylon trenzado con costuras dobles y mosquetón de acero. Resiste tirones de perros grandes.",
    "variants": [
      {
        "id": "0",
        "label": "Rojo",
        "stock": 10
      },
      {
        "id": "1",
        "label": "Azul",
        "stock": 6
      },
      {
        "id": "2",
        "label": "Negro",
        "stock": 2
      }
    ],
    "details": [
      [
        "Para",
        "Perros medianos y grandes"
      ],
      [
        "Material",
        "Nylon trenzado, mosquetón de acero"
      ],
      [
        "Largo",
        "1,5 m"
      ]
    ],
    "img": "img/fotos/correa-reforzada-600x750.webp",
    "imgLarge": "img/fotos/correa-reforzada-900x1125.webp"
  },
  {
    "id": "pretal-ajustable",
    "name": "Pretal ajustable",
    "tagline": "Acolchado",
    "category": "paseo",
    "animal": [
      "perros"
    ],
    "price": 15900,
    "alt": "Persona sosteniendo a un perro marrón con correa",
    "variantLabel": "Talle",
    "desc": "Pretal acolchado con regulación en pecho y cuello, para que no lastime ni se escape.",
    "variants": [
      {
        "id": "0",
        "label": "S",
        "stock": 7
      },
      {
        "id": "1",
        "label": "M",
        "stock": 9
      },
      {
        "id": "2",
        "label": "L",
        "stock": 3
      }
    ],
    "details": [
      [
        "Para",
        "Perros de todos los tamaños"
      ],
      [
        "Material",
        "Nylon con acolchado interno"
      ],
      [
        "Medidas",
        "Pecho: S 40-52 cm, M 50-65 cm, L 60-80 cm"
      ]
    ],
    "img": "img/fotos/pretal-ajustable-600x750.webp",
    "imgLarge": "img/fotos/pretal-ajustable-900x1125.webp"
  }
];
