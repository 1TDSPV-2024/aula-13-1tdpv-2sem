import Link from "next/link"
import { GET } from "../api/base-produtos/route"

export default function Produtos() {
 

    return (
        <div>
            <h2>Produtos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Editar</th>
                    </tr>
                </thead>

                <tbody>
                    {GET.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td>{p.qtd}</td>
                            <td><Link href={`/produtos/produto/${p.id}`}>Editar</Link></td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <th>

                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}