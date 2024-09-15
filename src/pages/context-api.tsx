/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from '@/styles/context-api.module.css';
import { IToastMessage } from '@/types/toast-message';
import { ToastMessage } from '@/components/ToastMessage';
import { useContext, useState } from 'react';
import { MainContext, MainContextProps, MainProvider } from '@/context/MainContext';

export default function ContextApi() {
	const [messageType, setMessageType] = useState<string>('');

	
	const context = useContext<MainContextProps | undefined>(MainContext);

	if (!context) {
		throw new Error('MainContext deve ser usado dentro de um MainProvider');
	}
	
	const { showMessage, setShowMessage } = context;
	
	const messages: Array<IToastMessage> = [
		{
			id: '1',
			message: 'Mensagem de sucesso',
			type: 'success',
		},
		{
			id: '2',
			message: 'Mensagem de erro',
			type: 'error',
		},
	];

	function handleSuccessButtonClick(type: string) {
		setShowMessage(true)
		setMessageType(type)

		setTimeout(() => {
			setShowMessage(false)
		}, 2000)
	}

	return (
		<>
			<div className={styles.container}>
				<button type="button" onClick={() => handleSuccessButtonClick('success')}>
					Disparar mensagem de sucesso
				</button>
				<button type="button" onClick={() => handleSuccessButtonClick('error')}>
					Disparar mensagem de erro
				</button>
			</div>

			{showMessage && (
				<div className={styles['toast-container']}>
					{messages
					.filter((message) => message.type === messageType)
					.map((message) => (
						<ToastMessage key={message.id} content={message} />
					))}
				</div>
			)}
		</>
	);
}
