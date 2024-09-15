/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */


import { IUserCreate } from '@/types/user.d';
import api from '../api';

export const createUser = (user: IUserCreate) => {
	return new Promise((resolve, reject) => {
		try {
			const response = api.post('/user', user)
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
}
