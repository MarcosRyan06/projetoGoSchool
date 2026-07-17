import expess from 'express';

const app = expess();
const PORT = 3000;

app.use(expres.json());


//Rota teste
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Futuras rotas
// app.use('/users', userRoutes);
// app.use('/products', productRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});