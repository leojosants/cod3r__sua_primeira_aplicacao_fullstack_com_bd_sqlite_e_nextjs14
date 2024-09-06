import { Usuario } from '@/core/model/Usuario';
import Image from 'next/image';

export interface LinhaUsuarioProps {
    usuario: Usuario;
    onClick?: (usuario: Usuario) => void;
};

export default function LinhaUsuario(props: LinhaUsuarioProps) {
    return (
        <div className='flex p-4 bg-zinc-900 items-center gap-5 rounded-md cursor-pointer flex-wrap' onClick={() => props.onClick?.(props.usuario)}>
            <Image
                src={'https://i.pravatar.cc/300'}
                width={80}
                height={80}
                className='rounded-full'
                alt={'Avatar'}
            />
            <div className="flex flex-col">
                <span className='text-xl font-black'>
                    {props.usuario.nome}
                </span>
                <span className='text-sm text-zinc-400'>
                    {props.usuario.email}
                </span>
            </div>
        </div>
    );
}