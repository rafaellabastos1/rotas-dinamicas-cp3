import Link from 'next/link';

export default function Cabecalho() {
    return(
        <nav>
            <Link href="/produtos/item/acessorio_cabeca/bone">BONÉ</Link>
            <Link href="/produtos/item/acessorio_rosto/oculos">ÓCULOS</Link>
            <Link href="/produtos/item/calcado/sapato">SAPATO</Link>
            <Link href="/produtos/item/parte_inferior/calca">CALÇA</Link>
            <Link href="/produtos/item/parte_medial/camisa">CAMISA</Link>
            
        </nav>
    )
}