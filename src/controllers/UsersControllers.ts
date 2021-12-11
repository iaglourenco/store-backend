import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";
import usersView from "../views/users_view";
import * as Yup from "yup";

export default {
  async index(req: Request, res: Response) {
    const usersRepository = getRepository(User);
    const users = await usersRepository.find({
      relations: ["reviews"],
    });
    return res.json(usersView.renderMany(users));
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOneOrFail(id, {
      relations: ["reviews"],
    });
    return res.json(usersView.render(user));
  },

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const usersRepository = getRepository(User);

    const data = {
      name,
      email,
      password,
      isAdmin: false,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    await schema.validate(data, { abortEarly: false });
    const user = usersRepository.create(data);

    await usersRepository.save(user);
    return res.status(201).json(user);
  },

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOneOrFail(id);
    await usersRepository.remove(user);
  },
};
