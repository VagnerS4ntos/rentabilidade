'use client';
import React from 'react';
import { useValores } from '@/states/global';

function InputTaxa() {
	const { taxa, setTaxa } = useValores((state) => state);

	return (
		<p className="mt-4 text-xl w-fit">
			<label htmlFor="alvo">Insira uma taxa inicial (em decimal)</label>
			<input
				className="text-black ml-1 p-1 block"
				type="number"
				id="alvo"
				placeholder="0,01"
				step={0.001}
				min={0}
				value={taxa}
				onChange={({ target }) => setTaxa(Number(target.value))}
			/>
		</p>
	);
}

export default InputTaxa;
