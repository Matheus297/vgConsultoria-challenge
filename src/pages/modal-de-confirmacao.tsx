/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/modal.module.css';
import { Modal } from '@/components/Modal';

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);


	const handleOpenModal = () => {
		setModalIsOpen(true)
	}

	const handleCloseModal = () => {
		setModalIsOpen(false)
	}

	const renderModalContent = () => {
		return (
			<div data-modal-content className={styles['modal-form']}>
				<form onSubmit={() => false}>
					<div>
						<label htmlFor="input-name">Nome</label>
						<input type="text" id="input-name" placeholder="Insira um nome" />
					</div>

					<div>
						<label htmlFor="input-name">E-mail</label>
						<input type="email" id="input-name" placeholder="Insira um e-mail válido" />
					</div>
				</form>
		</div>
		)
	}

	return (
		<>
			<main className={styles.container}>
				<button type="button" onClick={() => setModalIsOpen(true)}>
					Abrir modal de confirmação
				</button>
			</main>

			<Modal
				isOpen={modalIsOpen}
				title="Confirmação"
				onClose={handleCloseModal}
				onConfirm={() => {}}
				footer={{ confirmText: 'Criar usuário' }}
			>
				{renderModalContent()}
			</Modal>

			{/* Renderizar modal de confirmação */}
		</>
	);
}
