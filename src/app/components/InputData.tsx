'use client';
import React from 'react';
import { useValores } from '@/states/global';

function InputData() {
	const { data, setData } = useValores((state) => state);

	return (
		<p className="mt-4 text-xl w-fit">
			<label htmlFor="data">
				Selecione uma data de referência (por padrão será hoje)
			</label>
			<input
				className="text-black ml-1 p-1 block"
				type="date"
				id="data"
				defaultValue={data}
				onChange={({ target }) => {
					setData(target.value);
				}}
			/>
		</p>
	);
}

export default InputData;
