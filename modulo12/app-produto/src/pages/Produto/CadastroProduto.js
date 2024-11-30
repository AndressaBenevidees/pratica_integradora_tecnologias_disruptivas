import React, { useState } from 'react';
import { FormControl, Input } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import InstanciaAxios from '../../api/InstanciaAxios';

const CadastroProduto = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    const handleSalvar = async () => {
        if (!title || !price || !description || !image || !category) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const produto = {
            title,
            price: parseFloat(price), // Convertendo para número
            description,
            image,
            category
        };

        console.log('Dados do produto:', produto);

        try {
            const result = await InstanciaAxios.post('/products', produto);
            console.log('Produto cadastrado com sucesso:', result.data);
            // Limpar os campos após o sucesso
            setTitle('');
            setPrice('');
            setDescription('');
            setImage('');
            setCategory('');
        } catch (error) {
            alert('Ocorreu um erro ao tentar cadastrar o produto - ' + error);
            console.error('Erro ao cadastrar o produto:', error);
        }
    };

    return (
        <Grid container spacing={2}>
            <Card sx={style}>
                <CardHeader
                    title="Produtos"
                    subheader="Cadastro de Produtos"
                />
                <CardContent sx={{ width: '95%', maxWidth: '100%' }}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <Input value={title} placeholder="Título" onChange={e => setTitle(e.target.value)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <Input value={price} placeholder="Preço" type="number" onChange={e => setPrice(e.target.value)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <Input value={description} placeholder="Descrição" onChange={e => setDescription(e.target.value)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <Input value={image} placeholder="URL da Imagem" onChange={e => setImage(e.target.value)} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <Input value={category} placeholder="Categoria" onChange={e => setCategory(e.target.value)} />
                        </FormControl>
                    </Grid>
                    <Grid container spacing={2} pl={2} mt={2}>
                        <Grid item xs={1}>
                            <Button size="small" variant="contained" onClick={handleSalvar}>Salvar</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

const style = {
    margin: '10px 2px 0 0',
    width: '60%',
    bgcolor: 'background.paper',
    p: 4,
};

export default CadastroProduto;
