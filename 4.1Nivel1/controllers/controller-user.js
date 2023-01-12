const getUser = (req, res) => {
  res.status(200).json({
    name: 'Gabriel Valiente',
    age: 30,
    url: req.url,
  });
};

module.exports = getUser;
