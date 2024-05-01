import { z } from 'zod';

const planilhaSchema = z.object({
	'Data Pgto': z.string(),
	'Valor Pago': z.number(),
});
export type planilhaT = z.infer<typeof planilhaSchema>;

const excelSchema = z.object({
	excelData: z.array(planilhaSchema),
	setExcelData: z.function().args(z.array(planilhaSchema)),
});

export type excelDataT = z.infer<typeof excelSchema>;

const amortizacaoDataSchema = z.object({
	valor: z.number(),
	data: z.string(),
	id: z.string(),
	montante: z.number(),
});

const amortizacaoSchema = z.object({
	amortizacao: z.array(amortizacaoDataSchema),
	updateAmortizacao: z.function().args(
		z.array(
			z.object({
				valor: z.number(),
				data: z.string(),
				id: z.string(),
				montante: z.number(),
			}),
		),
	),
});
export type amortizacaoDataT = z.infer<typeof amortizacaoDataSchema>;
export type amortizacaoT = z.infer<typeof amortizacaoSchema>;

const valoresSchema = z.object({
	alvo: z.number(),
	setAlvo: z.function().args(z.number()),
	taxa: z.number(),
	setTaxa: z.function().args(z.number()),
	data: z.string(),
	setData: z.function().args(z.string()),
	taxaDesejada: z.number(),
	setTaxaDesejada: z.function().args(z.number()),
	valorPadrao: z.boolean(),
	setValorPadrao: z.function().args(z.boolean()),
});

export type valoresT = z.infer<typeof valoresSchema>;
