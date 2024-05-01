'use client';
import React from 'react';
import * as XLSX from 'xlsx';

import { ExcelDateToJSDate, formatDate } from '../helpers/utils';
import { planilhaT } from '../types/config';
import { addDays } from 'date-fns';

import { useExcelData, useAmortizacao, useValores } from '@/states/global';

function UploadExcel() {
	const { setExcelData } = useExcelData((state) => state);
	const { updateAmortizacao } = useAmortizacao((state) => state);
	const { setValorPadrao } = useValores((state) => state);

	function handleFileUpload(e: any) {
		const reader = new FileReader();
		const file = e.target.files[0];
		reader.readAsArrayBuffer(file);

		reader.onload = (e: any) => {
			setValorPadrao(false);
			updateAmortizacao([]);
			setExcelData([]);
			const data = e.target.result;
			const workbook = XLSX.read(data, { type: 'binary' });
			const sheetName = workbook.SheetNames[0];
			const sheet = workbook.Sheets[sheetName];
			const parsedData = XLSX.utils.sheet_to_json(sheet) as planilhaT[];

			const formatedDates = parsedData.map((item) => ({
				...item,
				'Data Pgto': formatDate(
					addDays(ExcelDateToJSDate(item['Data Pgto']), 1),
				),
			}));

			setExcelData(formatedDates);
		};
	}

	return (
		<section>
			<label htmlFor="arquivo" className="block cursor-pointer">
				Escola um arquivo no formato ".xlsx" ou ".xls" *
			</label>
			<p>
				*O cabeçalho da sua planilha deve ter os seguintes nomes:{' '}
				<span className="font-bold">Valor Pago</span> e{' '}
				<span className="font-bold">Data Pgto</span>
			</p>

			<input
				type="file"
				id="arquivo"
				accept=".xlsx, .xls"
				onChange={handleFileUpload}
			/>
		</section>
	);
}

export default UploadExcel;
