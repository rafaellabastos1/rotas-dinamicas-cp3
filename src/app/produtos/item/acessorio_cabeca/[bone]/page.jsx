import React from 'react'
import Link from 'next/link'

export default function Bone({params}) {
  return (
    <div>
        <h1>dados de Boné</h1>
        <div>
            <p>O valor é: {params.bone}</p>
            <p><Link href="/">Voltar...</Link></p>
        </div>
    </div>
  )
}
