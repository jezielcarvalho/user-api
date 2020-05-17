import User from '../schemas/User';

class UserController {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  }

  async store(req, res) {
    if (req.body.name && req.body.email) {
      const response = await User.create(req.body);

      return res.json(response);
    }
    return res.json({ message: 'Provide correct name and email' });
  }

  async destroy(req, res) {
    console.log(req.params.id);

    const response = await User.deleteOne({
      _id: req.params.id,
    });

    return res.json(response);
  }
}

export default new UserController();
