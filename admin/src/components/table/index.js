import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function Tables({
    rows = [],
    columns = [],
    selectedRows = [],
    setSelectedRows = () => { },
    processRowUpdate = () => { },
    height = 600
}) {

    return (
        <div style={{ height: height, width: '100%' }}>
            <DataGrid
                rows={rows}
                getRowId={(row) => row.id}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 20, page: 0 },
                    },
                }}
                rowsPerPageOptions={[15, 20, 30, 50, 100]}
                checkboxSelection
                disableRowSelectionOnClick
                onRowSelectionModelChange={(newSelection) => {
                    setSelectedRows(newSelection);
                }}
                rowSelectionModel={selectedRows}
                processRowUpdate={processRowUpdate}
                getRowHeight={() => 'auto'}
            />
        </div>
    );
}
