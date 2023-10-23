import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Camisa({params}) {
  return (
    <div>
        <h1>dados de Camisa</h1>
        <div>
            <p>O valor é: {params.camisa}</p>
            <p><Link href="/">Voltar...</Link></p>
        </div>
        <div>
          <figure>
            <Image src="/img/flu.png"
            width={500}
            height={500}
            alt='camisa'/>
            <figcaption>Camisa</figcaption>
          </figure>
        </div>
    </div>

    
  )
}
