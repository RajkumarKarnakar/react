const express = require('express');

const app = express();
app.use(express.json());

let currentUser = {
    id: '101',
    name: 'Rajkumar Karnakar',
    age: 23,
    weight: 65,
    hairColor: 'black',
    hobbies: ['running', 'reading', 'cycling'],
};

let users = [
    {
        id: '101',
        name: 'Rajkumar Karnakar',
        age: 23,
        weight: 65,
        hairColor:'black',
        hobbies: ['running', 'reading', 'cycling'],
    },
    {
        id: '102',
        name: 'Laxmi Karnakar',
        age: 19,
        weight: 45,
        hobbies: ['swimming', 'writing', 'running'],
    },
];

const products = [
    {
        id: '1001',
        name: 'smart-TV',
        price: '₹35000',
        description: 'Huge TV with a great deal',
        rating: 4.5,
    },
    {
        id: '1002',
        name: 'running shoes',
        price: '₹2500',
        description: 'State-of-the-art technology for optimum running',
        rating: 3.9,
    },
    {
        id: '1003',
        name: 'smart phone',
        price: '₹35000',
        description: 'Latest smartphone with power-loaded features',
        rating: 4.3,
    },
];


app.get('/current-user', (req, res) => {
	res.json(currentUser);
});
app.get('/',(req,resp)=>{
    resp.redirect('/users');
})

app.get('/users/:id', (req, res) => {
	const { id } = req.params;

	res.json(users.find(user => user.id === id));
});

app.post('/users/:id', (req, res) => {
	const { id } = req.params;
	const { user: updatedUser } = req.body;

	users = users.map(user => user.id === id ? updatedUser : user);

	res.json(users.find(user => user.id === id));
});

app.get('/users', (req, res) => {
	res.json(users);
});

app.get('/products/:id', (req, res) => {
	const { id } = req.params;

	res.json(products.find(product => product.id === id));
});

app.get('/products', (req, res) => {
	res.json(products);
});

app.listen(8080, () => {
	console.log('Server is listening on port 8080');
});