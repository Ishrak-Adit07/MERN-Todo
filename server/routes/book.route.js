import express from 'express'
import { Book } from '../models/book.model';
const router = express.Router();

router.post("/", async(req, res)=>{
    try {
        
        const {title, author, year} = req.body;

        const bookDetails = {
            title: title,
            author : author,
            year : year
        }

        const newBook = await Book.create(bookDetails);
        console.log(title, author, year);

        res.status(201).send(newBook);

    } catch (e) {
        console.log(e);
        res.status(500).send({message: e.message});
    }
});

router.get("/author", async(req, res)=>{

    try {
        
        const {author} = req.body;

        const findBookByAuthorQuery = { author: author }; // Example query
        const books = await Book.find(findBookByAuthorQuery);

        res.status(201).send(books);

    } catch (e) {
        console.log(e);
        res.status(500).send({message: e.message});
    }

})

router.get("/title", async(req, res)=>{

    try {
        
        const {title} = req.body;

        const findBookByTitleQuery = { title: title }; // Example query
        const books = await Book.find(findBookByTitleQuery);

        res.status(201).send(books);

    } catch (e) {
        console.log(e);
        res.status(500).send({message: e.message});
    }

})

router.get("/year", async(req, res)=>{

    try {
        
        const {year} = req.body;

        const findBookByYearQuery = { year: year }; // Example query
        const books = await Book.find(findBookByYearQuery);

        res.status(201).send(books);

    } catch (e) {
        console.log(e);
        res.status(500).send({message: e.message});
    }

})


router.delete("/author", async(req, res)=>{

    try {
        
        const {author} = req.body;

        const deleteBookByAuthorQuery = { author: author }; // Example query
        const books = await Book.findOneAndDelete(deleteBookByAuthorQuery);

        res.status(201).send(books);

    } catch (e) {
        console.log(e);
        res.status(500).send({message: e.message});
    }

})

router.get("/title", async(req, res)=>{

    try {
        
        const {title} = req.body;

        const findBookByTitleQuery = { title: title }; // Example query
        const books = await Book.find(findBookByTitleQuery);

        res.status(201).send(books);

    } catch (e) {
        console.log(e);
        res.status(500).send({message: e.message});
    }

})

router.get("/year", async(req, res)=>{

    try {
        
        const {year} = req.body;

        const findBookByYearQuery = { year: year }; // Example query
        const books = await Book.find(findBookByYearQuery);

        res.status(201).send(books);

    } catch (e) {
        console.log(e);
        res.status(500).send({message: e.message});
    }

})


export default router;