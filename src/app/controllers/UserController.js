import User from '../schemas/User';

class UserController {
  /**
   * LISTA USUÁRIOS CADASTRADOS
   * @param {Request} req
   * @param {Response} res
   */
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  }

  /**
   * LISTA USUÁRIO PESQUISADO
   * @param {Request} req
   * @param {Response} res
   */
  async search(req, res) {
    const users = await User.find({
      name: req.params.search,
    });

    return res.json(users);
  }

  /**
   * CRIA UM NOVO USUÁRIO
   * @param {Request} req
   * @param {Response} res
   */
  async store(req, res) {
    if (req.body.name && req.body.email) {
      const response = await User.create(req.body);

      return res.json(response);
    }
    return res.json({ message: 'Provide correct name and email' });
  }

  /**
   * EXCLUI UM USUÁRIO
   * @param {Request} req
   * @param {Response} res
   */
  async destroy(req, res) {
    const response = await User.deleteOne({
      _id: req.params.id,
    });

    return res.json(response);
  }
}

export default new UserController();
