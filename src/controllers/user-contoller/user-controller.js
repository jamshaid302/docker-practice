const prisma = require("../../prisma-client");

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = await prisma.users.create({
      data: { name, email },
    });

    res.status(201).send({ newUser });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

const allUsers = async (req, res) => {
  try {
    const allUsers = await prisma.users.findMany();
    res.status(200).send({ allUsers });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await prisma.users.update({
      where: {
        id: req.body.id,
      },
      data: {
        name: req.body.name,
        email: req.body.email,
      },
    });
    res.status(200).send({ updatedUser });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await prisma.users.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = {
  createUser,
  allUsers,
  updateUser,
  deleteUser,
};
