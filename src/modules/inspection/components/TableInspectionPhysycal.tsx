const TableInspectionPhysycal = ({obs}) => {
    return (
        <div className="content_box_table">
            <div className="title">Inspección fisica anterior del Bien inmueble</div>
            <div className="table_content">
                <table className="box-table">
                    <thead>
                        <tr>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{obs || '-'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableInspectionPhysycal;
