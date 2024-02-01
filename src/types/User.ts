export type User = { //usar o ? faz o estado não ser obrigatório(nem sempre os dados estarão preenchidos )
    name?: string;
    email?: string;
    agree?: boolean | string
};