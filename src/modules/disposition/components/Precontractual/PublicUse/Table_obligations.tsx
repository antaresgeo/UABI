
const Table_obligations = () => {
    const table_obligaciones = `
        <style>
            table {
                border: 1px solid #000;
                margin: 10px;
            }
            .p40 {
                text-align: left;
                font-size: 12px;
                padding-left: 3px;
                padding-right: 3px;
                margin-top: 0px;
                margin-bottom: 0px;
            }

        </style>
        <table cellPadding="0" cellSpacing="0" >
            <thead>
                <tr>

                    <td>
                        <p class="p40">Tipificación</p>
                    </td>
                    <td>
                        <p class="p40">Estimación</p>
                    </td>
                    <td>
                        <p class="p40">Mecanismo de Cobertura</p>
                    </td>
                    <td><p class="p40">Asignación</p></td>
                    <td><p class="p40">Vigencia</p></td>
                    <td><p class="p40">Aplica</p></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p class="p40">
                            Incumplimiento del contratista de las obligaciones y prohibiciones  contraídas en virtud del contrato
                        </p>
                    </td>
                    <td>
                        <p class="p40">
                            {values?.lockable_base}% del valor del contrato
                        </p>
                    </td>
                    <td>
                        <p class="p40" >
                            Garantía de Cumplimiento: Ampara al Beneficiario el total y perfecto cumplimiento del contrato pactado de acuerdo a sus términos, condiciones y especificaciones contractuales
                        </p>
                    </td>
                    <td><p class="p40">Contratista</p></td>
                    <td><p class="p40">Plazo del contrato y 4 meses más</p></td>
                    <td><p class="p40 text-center">SI</p></td>
                </tr>
            </tbody>
        </table>
    `;
    return (
        {table_obligaciones}
    )
}

export default Table_obligations
