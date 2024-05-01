'use client';
import React from 'react';
import UploadExcel from './components/UploadExcel';
import InputAmortizacao from './components/InputAmortizacao';
import Calculate from './components/Calculate';
import InputAlvo from './components/InputAlvo';
import InputTaxa from './components/InputTaxa';
import InputData from './components/InputData';
import UseDefaultValues from './components/UseDefaultValues';

export default function Home() {
	return (
		<main className="p-2">
			<UseDefaultValues />
			<UploadExcel />
			<InputAmortizacao />
			<InputAlvo />
			<InputTaxa />
			<InputData />
			<Calculate />
		</main>
	);
}
