/**
 * Lista
 *
 * - Primeiramente vá até /src/pages/api/users/index.ts e implemente a API
 * - Obter a lista de usuários da API
 * - Renderizar a lista de usuários
 */

import { useEffect, useState } from 'react';

import styles from '@/styles/lista.module.css';
import { IUser } from '@/types/user';
import { getUsers } from './api/users';

export default function Lista() {
	const [users, setUsers] = useState<Array<IUser>>([]);

	const getUsersList = () => {
			getUsers()
			.then((resp: any) => {
				console.log(resp)
				if(resp) {
					setUsers(resp.data)
					return resp.status(200)
				}
			})
			.catch(error => {
				console.error('Erro ao obter dados', error);
			}) 
	}

	useEffect(() => {
		getUsersList();
	}, []);

	

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de usuários</h2>

				<div data-list-container>
					{/* Exemplo */}
					{users && users.map((user) => {
						return (
							<div key={user.id} data-list-item>{`ID ${user.id} - ${user.name} ${user.id} (${user.email})`}</div>
						)
					})}
				</div>
			</div>
		</div>
	);
}
