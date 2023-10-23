import React from 'react';
import { useRouter } from 'next/router';

const produtos = {
    bone: './img/bone.jpg',
    calca: '/img/calca.jpg',
    camisa: '/img/camisa.jpg',
    oculos: '/img/oculos.jpg',
    sapato: '/img/sapato.jpg'
}

export default function Vestuario() {
    const router = useRouter();
    const { item } = router.query;

    const imagemProduto = produtos[item];

    return (
        <>
            <h2>{item}</h2>
            <img src={imagemProduto} alt={item}/>
        </>
    )
}
