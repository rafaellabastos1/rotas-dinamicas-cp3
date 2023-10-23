import React from 'react'
import Link from 'next/link'

export default function Sapato({params}) {
  return (
    <div>
        <h1>dados de Sapato</h1>
        <div>
            <p>O valor é: {params.sapato}</p>
            <p><Link href="/">Voltar...</Link></p>
        </div>
    </div>
  )
}
