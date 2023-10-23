import React from 'react'
import Link from 'next/link'

export default function Oculos({params}) {
  return (
    <div>
        <h1>dados de Óculos</h1>
        <div>
            <p>O valor é: {params.oculos}</p>
            <p><Link href="/">Voltar...</Link></p>
        </div>
    </div>
  )
}
