export interface IRepository<T>{
    salvar(item:T):T | undefined;
    obterTodos():T[];
    obterPorId(id:number):T | undefined;
    alterar(item: T):T;
    excluir(id: number):void;
}