/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import api from '../api';

export const getUsers = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		try {
			const response: any = api.get('/users')
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
};

