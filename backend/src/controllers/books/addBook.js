const { Book } = require('../../service/schemas');

const addBook = async (req, res) => {
    // const { _id } = req.user;
    // const books = await Book.create({ ...req.body, owner: _id });
    const books = await Book.create({ ...req.body, owner: '6299f2326ba422f3b7ff0291' });
    res
      .status(201)
      .json({ status: "success", code: 201, data: { result: books } });
  };

module.exports = addBook;
