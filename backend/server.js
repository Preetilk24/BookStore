const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Add after the middleware setup
app.use('/images', express.static(path.join(__dirname, 'images')));

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is working!' });
});

// Books route
app.get('/api/books', (req, res) => {
    const books = [
        {
            id: 1,
            title: "The Magic of Thinking Big",
            author: "David J. Schwartz",
            price: 29.99,
            description: "A guide to building good habits and breaking bad ones.",
            imageUrl: "https://th.bing.com/th/id/OIP.0Jkj2O8bD038IXT-OxkIsAHaLp?w=118&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            category: "Personal Development",
            stock: 15,
            rating: 4.5
        },
        {
            id: 2,
            title: "Atomic Habits",
            author: "James Clear",
            price: 25.99,
            description: "A guide to building good habits and breaking bad ones.",
            imageUrl: "https://th.bing.com/th/id/OIP.40YdU1lR2EQdFRfSxnTERQHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            category: "Self-Help",
            stock: 25,
            rating: 4.7
        },
        {
            id: 3,
            title: "Harry Potter",
            author: "J.K. Rowling",
            price: 32.99,
            description: "The first book in the beloved series about a young wizard.",
            imageUrl: "https://th.bing.com/th/id/OIP.yws53yQfsT9hXbufURRWggHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            category: "Fantasy",
            stock: 20,
            rating: 4.9
        },
        {
            id: 4,
            title: "7 Habits of Highly Effective People",
            author: "Stephen R. Covey",
            price: 27.99,
            description: "A guide to building good habits and breaking bad ones.",
            imageUrl: "https://th.bing.com/th/id/OIP.JB136D51ezSdxTk8-1QxUQHaLQ?w=119&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            category: "Self-Help",
            stock: 8,
            rating: 4.3
        },
        {
            id: 5,
            title: "A P J Abdul Kalam",
            author: "A P J Abdul Kalam",
            price: 24.99,
            description: "A P J Abdul Kalam autobiography",
            imageUrl: "https://th.bing.com/th/id/OIP.hIhGSa1_qFqqXyfSyutL2AAAAA?w=130&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            category: "Autobiography",
            stock: 12,
            rating: 4.8
        },
       
        {
            id: 6,
            title: "Sudha Murty",
            author: "Sudha Murty",
            price: 28.99,
            description: "Autobiography of Sudha Murty",
            imageUrl:"https://th.bing.com/th/id/OIP.hH8uRUDLW0nydbY-P90NpQAAAA?w=124&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            category: "Autobiography",
            stock: 18,
            rating: 4.6
        },
        {
            id: 7,
            title: "Rich dad Poor dad",
            author: "Robert T. Kiyosaki",
            price: 26.99,
            description: "Rich dad Poor dad ",
            imageUrl:"https://th.bing.com/th/id/OIP.G8FZD7cL2x5jIKw_SQoFYwHaK7?w=186&h=275&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            category: "Personal Development",
            stock: 14,
            rating: 4.4
        },
        {
            id: 8,
            title: "The Midnight Library",
            author: "Matt Haig",
            price: 23.99,
            description: "A library between life and death offers infinite possibilities.",
            imageUrl: "https://th.bing.com/th/id/OIP.0oxD3WjMHttXNlD6EHxGbQHaKc?w=131&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            category: "Contemporary Fiction",
            stock: 22,
            rating: 4.2
        },
        {
            id: 9,
            title: "Educated",
            author: "Tara Westover",
            price: 29.99,
            description: "A memoir about the power of education.",
            imageUrl: "https://th.bing.com/th/id/OIP.UVIdFbBYzkqxjm4BG0_yiQHaLQ?w=131&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            category: "Memoir",
            stock: 16,
            rating: 4.8
        },
        {
            id: 10,
            title: "Psycology of Money",
            author: "Morgan Housel",
            price: 27.99,
            description: "A guide to building good habits and breaking bad ones.",
            imageUrl: "https://th.bing.com/th/id/OIP.t8LxwIiWUqZmQC8CIq44vAHaLa?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            category: "Personal Development",
            stock: 19,
            rating: 4.5
        },
    ];
    try {
        res.json(books);
    } catch (error) {
        console.error('Error sending books:', error);
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});

// Change port to 3001 or another available port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});