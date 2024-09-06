'use server'
import { RepositorioUsuario } from './RepositorioUsuario';

export async function obterTodos() {
    return RepositorioUsuario.obterTodos();
}