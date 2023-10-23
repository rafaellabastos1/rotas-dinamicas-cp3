import React from 'react'
import Link from 'next/link'

export default function Calca({params}) {
  return (
    <div>
        <h1>dados de Calça</h1>
        <div>
            <p>O valor é: {params.calca}</p>
            <p><Link href="/">Voltar...</Link></p>
        </div>
    </div>
  )
}
