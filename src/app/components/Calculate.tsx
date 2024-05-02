'use client';
import React from 'react';
import { useExcelData, useAmortizacao, useValores } from '@/states/global';
import { formatDate, montante } from '../helpers/utils';
import { differenceInMonths } from 'date-fns';
import { amortizacaoDataT } from '../types/config';

function Calculate() {
	const { excelData } = useExcelData((state) => state);
	const { amortizacao, updateAmortizacao } = useAmortizacao((state) => state);
	const { alvo, data, taxa, setTaxaDesejada, taxaDesejada } = useValores(
		(state) => state,
	);

	function calcular() {
		let looping = 0;

		if (excelData.length > 0 || amortizacao.length > 0) {
			let taxa2 = taxa;
			let soma = 0;
			let amortizacaoMontante: amortizacaoDataT[] = [];

			const amortizacoesDatas = amortizacao.map((item) =>
				formatDate(
					new Date(item.data)
						.toLocaleDateString()
						.toString()
						.replaceAll('/', '-')
						.split('T')[0],
				),
			);

			const excelDataToCalculate = excelData.filter(
				(item) => !amortizacoesDatas.includes(item['Data Pgto']),
			);

			while (soma < alvo) {
				soma = 0;
				amortizacaoMontante = [];

				amortizacaoMontante = amortizacao.map((item) => ({
					...item,
					montante: montante(
						item.valor,
						Number(taxa2.toFixed(4)),
						differenceInMonths(data, item.data),
					),
				}));

				const totalAmortizacaoMontante = amortizacaoMontante.reduce(
					(total, item) => {
						return total + item.montante;
					},
					0,
				);

				soma = excelDataToCalculate.reduce((total, item) => {
					return (
						total +
						montante(
							item['Valor Pago'],
							Number(taxa2.toFixed(4)),
							differenceInMonths(data, item['Data Pgto']),
						)
					);
				}, 0);

				soma += totalAmortizacaoMontante;

				if (looping == 0 && soma > alvo) {
					alert('Escolha uma taxa menor ou aumente o valor desejado');
					taxa2 = 0;
					break;
				}
				updateAmortizacao(amortizacaoMontante);
				looping = 1;
				taxa2 += 0.00001;
			}

			setTaxaDesejada(taxa2);
		}
	}

	return (
		<div>
			{taxaDesejada > 0 && (
				<p className="text-2xl mt-4">
					A taxa precisa ser de:{' '}
					<span className="text-red-600">
						{(taxaDesejada * 100).toFixed(2).replace('.', ',') + '%'}
					</span>
				</p>
			)}
			<button
				className="bg-green-600 hover:bg-green-700 rounded-md p-2 mt-4 active:translate-y-1 transition-all"
				onClick={calcular}
			>
				Calcular
			</button>
		</div>
	);
}

export default Calculate;
