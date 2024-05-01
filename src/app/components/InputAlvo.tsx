'use client';
import React from 'react';
import { useValores } from '@/states/global';

function InputAlvo() {
	const { alvo, setAlvo } = useValores((state) => state);

	return (
		<p className="mt-4 text-xl w-fit">
			<label htmlFor="alvo">Valor desejado (R$)</label>
			<input
				className="text-black ml-1 p-1 block"
				type="number"
				id="alvo"
				placeholder="R$500.000,00"
				step={0.05}
				min={0}
				value={alvo}
				onChange={({ target }) => setAlvo(Number(target.value))}
			/>
		</p>
	);
}

export default InputAlvo;
