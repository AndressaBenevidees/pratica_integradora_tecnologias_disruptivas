import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import InstanciaAxios from '../../api/InstanciaAxios';

const ListaProduto = () => {
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        getProdutos();
    }, []);

    const getProdutos = async () => {
        try {
            const result = await InstanciaAxios.get('/products');
            console.log('result data: ', result.data);
            setProduto(result.data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    const colunas = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Título', width: 130 },
        { field: 'price', headerName: 'Preço', width: 130, type: 'number' },
        { field: 'category', headerName: 'Categoria', width: 130 },
        { field: 'description', headerName: 'Descrição', width: 200 }, // Aumentado para melhor visualização
        { field: 'image', headerName: 'Imagem', width: 130, renderCell: (params) => (
            <img src={params.value} alt={params.row.title} style={{ width: '100%', height: 'auto' }} />
        )}
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={produto}
                columns={colunas}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>    
    );
};

export default ListaProduto;
