import { create } from 'zustand';
import { amortizacaoT, excelDataT, valoresT } from '@/app/types/config';
import { formatDate } from '@/app/helpers/utils';

export const useExcelData = create<excelDataT>((set) => ({
	excelData: [],
	setExcelData: (excelData) => set({ excelData }),
}));

export const useAmortizacao = create<amortizacaoT>((set) => ({
	amortizacao: [],
	updateAmortizacao: (valores) => set({ amortizacao: valores }),
}));

export const useValores = create<valoresT>((set) => ({
	alvo: 500000,
	setAlvo: (alvo) => set({ alvo }),
	taxa: 0.007,
	setTaxa: (taxa) => set({ taxa }),
	data: formatDate(
		new Date()
			.toLocaleDateString()
			.toString()
			.replaceAll('/', '-')
			.split('T')[0],
	),
	setData: (data) => set({ data }),
	taxaDesejada: 0,
	setTaxaDesejada: (taxaDesejada) => set({ taxaDesejada }),
	valorPadrao: false,
	setValorPadrao: (valorPadrao) => set({ valorPadrao }),
}));
