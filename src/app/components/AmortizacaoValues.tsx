'use client';
import React from 'react';
import { useAmortizacao } from '@/states/global';

function AmortizacaoValues() {
	const { updateAmortizacao, amortizacao } = useAmortizacao((state) => state);

	function deleteAmortizacao(event: any) {
		const { id } = event.target.dataset;

		const update = amortizacao.filter((item) => item.id != id);
		updateAmortizacao(update);
	}

	return (
		<div className="mt-5">
			{amortizacao.length > 0 && (
				<div className="overflow-scroll">
					<table className="w-72">
						<thead>
							<tr className="bg-blue-200 text-black uppercase text-sm">
								<th className={`px-4 py-2 `}>Valor</th>
								<th className={`px-4 py-2 text-left`}>Data</th>
								<th className={`px-4 py-2 `}>Deletar</th>
								<th className={`px-4 py-2 `}>Montante</th>
							</tr>
						</thead>
						<tbody>
							{amortizacao.map((item) => (
								<tr key={item.id} className="text-center">
									<td className="px-4 py-2">
										{item.valor.toLocaleString('pt-br', {
											style: 'currency',
											currency: 'BRL',
										})}
									</td>
									<td className="px-4 py-2 text-left">
										{formatAmortizacaoDate(item.data)}
									</td>
									<td
										className="px-4 py-2 cursor-pointer"
										data-id={item.id}
										onClick={deleteAmortizacao}
									>
										🗑️
									</td>
									<td className="px-4 py-2">
										{item.montante.toLocaleString('pt-br', {
											style: 'currency',
											currency: 'BRL',
										})}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}

export default AmortizacaoValues;

function formatAmortizacaoDate(date: string) {
	const splited = date.split('/');
	const formated = splited[2] + '/' + splited[1] + '/' + splited[0];
	return formated;
}
