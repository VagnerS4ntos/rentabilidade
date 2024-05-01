'use client';
import React from 'react';
import { useValores, useAmortizacao, useExcelData } from '@/states/global';
import { defaultAmortizacaoData, defaultExcelData } from '../helpers/utils';

function UseDefaultValues() {
	const { setValorPadrao, valorPadrao } = useValores((state) => state);
	const { updateAmortizacao } = useAmortizacao((state) => state);
	const { setExcelData } = useExcelData((state) => state);

	function enableDefaultValues() {
		setValorPadrao(true);
		updateAmortizacao(defaultAmortizacaoData);
		setExcelData(defaultExcelData);
	}

	function disableDefaultValues() {
		setValorPadrao(false);
		updateAmortizacao([]);
		setExcelData([]);
	}

	return (
		<>
			{valorPadrao ? (
				<div>
					<p className="text-xl text-yellow-600 mb-1">
						Você está utilizando os valores padrões
					</p>
					<button
						className="bg-cyan-700 hover:bg-cyan-700 rounded-md p-2 active:translate-y-1 transition-all mb-2"
						onClick={disableDefaultValues}
					>
						Clique aqui para desativá-los
					</button>
					<p className="mb-2">ou</p>
				</div>
			) : (
				<div>
					<button
						className="bg-orange-600 hover:bg-orange-700 rounded-md p-2 active:translate-y-1 transition-all mb-2"
						onClick={enableDefaultValues}
					>
						Clique aqui para utilizar os valores padrões
					</button>
					<p className="mb-2">ou</p>
				</div>
			)}
		</>
	);
}

export default UseDefaultValues;
