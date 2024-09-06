'use server'

import { RepositorioUsuario } from "./RepositorioUsuario";

export async function excluirUsuario(id: string) {
    return RepositorioUsuario.excluir(id);
}