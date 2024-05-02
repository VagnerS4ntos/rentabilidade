import { getJsDateFromExcel } from 'excel-date-to-js';

export function formatDate(date: string | Date) {
	if (typeof date == 'string' && date.includes('/')) {
		const splited = date.split('/');
		const formated = splited[2] + '-' + splited[1] + '-' + splited[0];
		return formated;
	} else if (typeof date == 'string' && date.includes('-')) {
		const splited = date.split('-');
		const formated = splited[2] + '-' + splited[1] + '-' + splited[0];
		return formated;
	} else {
		const localeString = date.toLocaleString().split(',')[0];
		const splited = localeString.split('/');
		const formated = splited[2] + '-' + splited[1] + '-' + splited[0];
		return formated;
	}
}

export function montante(capital: number, taxa: number, meses: number) {
	const montante = capital * Math.pow(1 + taxa, meses);
	return montante;
}

export function ExcelDateToJSDate(serial: number | string) {
	if (typeof serial == 'number') {
		return getJsDateFromExcel(serial);
	}
	return serial;
}

export function dataHoje() {
	const hoje = new Date();
	const dia = hoje.getDate();
	const mes = hoje.getMonth() + 1;
	const ano = hoje.getFullYear();

	const dataFormatada = `${dia}/${mes}/${ano}`;
	return dataFormatada;
}

export const defaultAmortizacaoData = [
	{
		valor: 40000,
		data: '2018/11/12',
		id: 'a0145084-77d9-49b6-99ea-439b54d841d1',
		montante: 0,
	},
	{
		valor: 80000,
		data: '2019/08/20',
		id: 'f2a78454-6266-4bdd-af4b-c9ff897e1e56',
		montante: 0,
	},
	{
		valor: 35000,
		data: '2020/11/13',
		id: '18534a7e-ab62-440a-b125-e131b66edd3a',
		montante: 0,
	},
];

export const defaultExcelData = [
	{ 'Valor Pago': 1796.55, 'Data Pgto': '2018-12-14' },
	{ 'Valor Pago': 1796.55, 'Data Pgto': '2019-01-15' },
	{ 'Valor Pago': 1796.55, 'Data Pgto': '2019-02-15' },
	{ 'Valor Pago': 1796.55, 'Data Pgto': '2019-03-15' },
	{ 'Valor Pago': 1796.55, 'Data Pgto': '2019-04-15' },
	{ 'Valor Pago': 1796.55, 'Data Pgto': '2019-05-15' },
	{ 'Valor Pago': 1796.55, 'Data Pgto': '2019-06-14' },
	{ 'Valor Pago': 1796.55, 'Data Pgto': '2019-07-15' },
	{ 'Valor Pago': 1796.55, 'Data Pgto': '2019-08-15' },
	{ 'Valor Pago': 1796.55, 'Data Pgto': '2019-09-16' },
	{ 'Valor Pago': 1796.55, 'Data Pgto': '2019-10-14' },
	{ 'Valor Pago': 1796.55, 'Data Pgto': '2019-11-18' },
	{ 'Valor Pago': 1853.44, 'Data Pgto': '2019-12-10' },
	{ 'Valor Pago': 1853.44, 'Data Pgto': '2020-01-07' },
	{ 'Valor Pago': 1853.44, 'Data Pgto': '2020-02-10' },
	{ 'Valor Pago': 1853.44, 'Data Pgto': '2020-03-13' },
	{ 'Valor Pago': 1853.44, 'Data Pgto': '2020-04-06' },
	{ 'Valor Pago': 1853.44, 'Data Pgto': '2020-05-15' },
	{ 'Valor Pago': 1853.44, 'Data Pgto': '2020-06-15' },
	{ 'Valor Pago': 1853.44, 'Data Pgto': '2020-07-15' },
	{ 'Valor Pago': 1853.44, 'Data Pgto': '2020-08-14' },
	{ 'Valor Pago': 1853.44, 'Data Pgto': '2020-09-15' },
	{ 'Valor Pago': 1853.44, 'Data Pgto': '2020-10-15' },
	{ 'Valor Pago': 2241.26, 'Data Pgto': '2020-11-15' },
	{ 'Valor Pago': 2241.26, 'Data Pgto': '2020-12-15' },
	{ 'Valor Pago': 2241.26, 'Data Pgto': '2021-01-15' },
	{ 'Valor Pago': 2241.26, 'Data Pgto': '2021-02-15' },
	{ 'Valor Pago': 2241.26, 'Data Pgto': '2021-03-15' },
	{ 'Valor Pago': 2241.26, 'Data Pgto': '2021-04-15' },
	{ 'Valor Pago': 2241.26, 'Data Pgto': '2021-05-15' },
	{ 'Valor Pago': 2241.26, 'Data Pgto': '2021-06-15' },
	{ 'Valor Pago': 2241.26, 'Data Pgto': '2021-07-15' },
	{ 'Valor Pago': 2241.26, 'Data Pgto': '2021-08-15' },
];

export const defaultTodasAsDatas = [
	'2021-08-15',
	'2021-07-15',
	'2021-06-15',
	'2021-05-15',
	'2021-04-15',
	'2021-03-15',
	'2021-02-15',
	'2021-01-15',
	'2020-12-15',
	'2020-11-15',
	'2020-11-13',
	'2020-10-15',
	'2020-09-15',
	'2020-08-14',
	'2020-07-15',
	'2020-06-15',
	'2020-05-15',
	'2020-04-06',
	'2020-03-13',
	'2020-02-10',
	'2020-01-07',
	'2019-12-10',
	'2019-11-18',
	'2019-10-14',
	'2019-09-16',
	'2019-08-20',
	'2019-08-15',
	'2019-07-15',
	'2019-06-14',
	'2019-05-15',
	'2019-04-15',
	'2019-03-15',
	'2019-02-15',
	'2019-01-15',
	'2018-12-14',
	'2020-11-13',
	'2019-08-20',
	'2018-11-12',
];
