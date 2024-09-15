/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import styles from '@/styles/formulario.module.css';
import { IUser } from '@/types/user';
import { Path, SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import { createUser } from './api/users/create';

import { ToastMessage } from '@/components/ToastMessage';
import { IToastMessage } from '@/types/toast-message';
import { useState } from 'react';

interface IUserForm extends IUser {
	label?: "id" | "name" | "email"
}

type InputProps = {
	label: Path<IUserForm>; 
	register: UseFormRegister<IUserForm>;
	errors?:  string | undefined; 
	required?: boolean; 
	pattern?: RegExp; 
 };


export default function Form() {
	const [showToast, setShowToast] = useState<boolean>(false);
	const [typeMessage, setTypeMessage] = useState<IToastMessage>({
		id: '1',
		message: 'Usuário criado com sucessso',
		type: 'success',
	})

	const {
		handleSubmit, 
		register ,
		reset,
		formState: { errors }
	} = useForm<IUser>({
		defaultValues: {
		  name: "",
		  email: "",
		},
	})

	const onSubmit: SubmitHandler<IUser> = (data) => {
		setShowToast(true)
		createUser(data)
		.then(resp => {
			setTypeMessage({
				id: '1',
				message: 'Usuário criado',
				type: 'success',
			})
			reset()
		})
		.catch((error) => {
			setTypeMessage({
				id: '2',
				message: 'Falha ao criar usuario',
				type: 'error',
			})
		})
		setTimeout(() => {
			setShowToast(false)
		}, 2000)
	}

	const Input = ({label, register, errors, pattern, required}: InputProps) => {
		return (
			<>
				<input
					placeholder={label}
					{...register(label, {
					required: required ? "Este campo é obrigatório" : false,
					pattern: pattern ? { value: pattern, message: "Formato inválido" } : undefined,
					})}
				/>
				<p>{errors}</p>
			</>
		)
	  }

	return (
		<div style={{position: 'relative'}} className={styles.container}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input 
						errors={errors.name?.message} 
						label="name" 
						register={register} 
						required />
					<Input
						errors={errors.email?.message}
						label="email"
						register={register}
						required
						pattern={/^\S+@\S+\.\S+$/}
						/>
					
					<button type="submit" data-type="confirm">
						Enviar
					</button>
				</form>
			</div>
			<div style={{position: 'absolute', top: '0', right: '0'}}>
				{showToast && <ToastMessage content={typeMessage} />}
			</div>
		</div>
	);
}
