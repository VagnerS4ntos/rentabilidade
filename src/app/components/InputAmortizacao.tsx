'use client';
import React from 'react';
import { v4 as uid } from 'uuid';
import { useAmortizacao, useValores } from '@/states/global';
import AmortizacaoValues from './AmortizacaoValues';

function InputAmortizacao() {
	const [valor, setValor] = React.useState<number>(0);
	const [data, setData] = React.useState<string>('');

	const { updateAmortizacao, amortizacao } = useAmortizacao((state) => state);
	const { setTodasAsDatas, todasAsDatas } = useValores((state) => state);

	function addAmortizacao() {
		if (valor != 0 && data != '') {
			const update = {
				valor,
				data: data.replaceAll('-', '/'),
				id: uid(),
				montante: 0,
			};
			updateAmortizacao([...amortizacao, update]);
			setValor(0);
			setData('');

			const updateTodasAsDatas = [...todasAsDatas, data].sort().reverse();
			setTodasAsDatas(updateTodasAsDatas);

			return;
		}
		alert('Insira um valor e uma data');
	}

	return (
		<section className="mt-4">
			<p className="text-xl">Digite os valores e as datas das amortizações</p>
			<div className="text-black grid gap-2 sm:flex sm:max-w-fit">
				<div>
					<label htmlFor="valor" className="text-white block">
						Valor
					</label>
					<input
						type="number"
						id="valor"
						className="p-1 w-full"
						step={0.05}
						min={0}
						value={valor}
						onChange={({ target }) => setValor(Number(target.value))}
					/>
				</div>
				<div>
					<label htmlFor="data" className="text-white block">
						Data
					</label>
					<input
						type="date"
						id="data"
						className="w-full p-1"
						value={data}
						onChange={({ target }) => setData(target.value)}
					/>
				</div>

				<button
					className="text-white mt-auto bg-blue-500 h-8 px-2 py-1 rounded-md hover:bg-blue-600 cursor-pointer active:translate-y-1 transition-all w-full "
					onClick={addAmortizacao}
				>
					Adicionar
				</button>
			</div>
			<AmortizacaoValues />
		</section>
	);
}

export default InputAmortizacao;
