export interface Produto {
  id: string;
  name: string;
  preco: string;
  categoria: string;
}

export interface Rotas {
  label: string;
  to: string;
  icon: string;
}

export interface Modulos {
  to: string;
  icon: object;
  label: string;
}
