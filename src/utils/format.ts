import dayjs from 'dayjs';

export const formatMoney = (value: number) => {
	if (isNaN(value)) return 'R$ 0,00';
	return value?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

export const formatMoneyLive = (value: any) => {
	const rawValue = value.replace(/[^\d]/g, '');
	const intValue = parseInt(rawValue, 10);

	if (isNaN(intValue)) return 'R$ 0,00';

	return (intValue / 100).toLocaleString('pt-br', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
		style: 'currency',
		currency: 'BRL'
	});
};

export const formatPercent = (value: number) => {
	return `${(value * 100)?.toFixed(1)}%`;
};

export const formatMomentLocalDateTime = (date: Date) => {
	return date ? dayjs(date).format('YYYY-MM-DDT00:00:00.000') : '';
};

export const formatMomentLocalDate = (date: Date) => {
	return date ? dayjs(date).format('YYYY-MM-DD') : '';
};

export const removeSecondsFromHour = (hour: string) => hour.split(':').slice(0, -1).join(':');

export const currencyFormatter = (value: any) => {
	if (!value) return 'R$ ';

	const number = parseFloat(value);

	return number.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
};

export const formatValue = (valor: number): string => {
	const value = parseInt(valor?.toString());
	const suffixes = ['', 'K', 'M', 'B', 'T'];
	const suffixNum = Math.floor(('' + value).length / 3);
	const divisao = 1000;
	let shortValue = parseFloat((suffixNum !== 0 ? value / divisao : value).toPrecision(2));
	if (shortValue % 1 !== 0) {
		shortValue = Number(shortValue.toFixed(1));
	}
	return shortValue + suffixes[suffixNum];
};

export const currencyParser = (val: any) => {
	try {
		// for when the input gets clears
		if (typeof val === 'string' && !val.length) {
			val = '0.0';
		}

		// detecting and parsing between comma and dot
		const group = new Intl.NumberFormat('pt-br').format(1111).replace(/1/g, '');
		const decimal = new Intl.NumberFormat('pt-br').format(1.1).replace(/1/g, '');
		let reversedVal = val.replace(new RegExp('\\' + group, 'g'), '');
		reversedVal = reversedVal.replace(new RegExp('\\' + decimal, 'g'), '.');
		//  => 1232.21 €

		// removing everything except the digits and dot
		reversedVal = reversedVal.replace(/[^0-9.]/g, '');
		//  => 1232.21

		// appending digits properly
		const digitsAfterDecimalCount = (reversedVal.split('.')[1] || []).length;
		const needsDigitsAppended = digitsAfterDecimalCount > 2;

		if (needsDigitsAppended) {
			reversedVal = reversedVal * Math.pow(10, digitsAfterDecimalCount - 2);
		}

		return Number.isNaN(reversedVal) ? 0 : reversedVal;
	} catch (error) {
		console.error(error);
	}
};

export const removeAcentos = (str: string) => str?.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const formatCpfCnpj = (value: any) => {
	const cleanedValue = value.replace(/\D/g, '');

	// Se for CPF (até 11 dígitos)
	if (cleanedValue.length <= 11) {
		return cleanedValue
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
	}

	// Se for CNPJ (até 14 dígitos)
	if (cleanedValue.length <= 14) {
		return cleanedValue
			.replace(/(\d{2})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d{1,4})/, '$1/$2')
			.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
	}

	// Caso ultrapasse 14 dígitos, ainda retorna os primeiros 14 formatados corretamente
	return cleanedValue.slice(0, 14)
		.replace(/(\d{2})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d{1,4})/, '$1/$2')
		.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
};

export const formatCpf = (value: any) => {
	const cleanedValue = value.replace(/\D/g, '');

	return cleanedValue.slice(0, 11)
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

export const formatCnpj = (value: any) => {
	const cleanedValue = value.replace(/\D/g, '');

	return cleanedValue.slice(0, 14)
		.replace(/(\d{2})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d{1,4})/, '$1/$2')
		.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
};

export const formatCep = (value: any) => {
	const cleanedValue = value.replace(/\D/g, '');

	return cleanedValue
		.replace(/^(\d{5})(\d)/, '$1-$2')
		.slice(0, 9);
};


export const formatRG = (value: string): string => {
	const onlyDigits = value?.replace(/\D/g, ''); // Remove tudo que não é número
	const maxLength = 9; // Define o número máximo de dígitos para o RG

	const formattedRG = onlyDigits?.slice(0, maxLength).replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4'); // Aplica a formatação desejada (por exemplo: 99.999.999-9)

	return formattedRG;
};

export const formatCel = (value: any) => {
	return value
		?.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '($1) $2')
		.replace(/(\d{5})(\d)/, '$1-$2')
		.replace(/(-\d{4})\d+?$/, '$1');
};

export const formatPhone = (value: string) => {
	return value
		?.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '($1) $2')
		.replace(/(\d{5})(\d)/, '$1-$2')
		.replace(/(-\d{4})\d+?$/, '$1');
};

export const removeAcentuation = (value: any) => {
	return value?.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const formatTime = (minutes: any): string => {
	// formatar minutos para horas 00h00
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;
	return `${hours.toString().padStart(2, '0')}h${remainingMinutes.toString().padStart(2, '0')}`;
};

export const formatTimeFromString = (timeString: string): string => {
	// formatar data a partir de string 00:00:00 > 00h00
	const [hours, minutes] = timeString.split(':');
	if (minutes === '00') {
		return `${hours.padStart(2, '0')}h`;
	}
	return `${hours.padStart(2, '0')}h${minutes.padStart(2, '0')}`;
};

export const formatarData = (date: Date) => {
	date.setDate(date.getDate() + 3); // Adiciona 3 dias à data fornecida
	const dia = date.getDate().toString().padStart(2, '0'); // Extrai o dia e formata com dois dígitos
	const mes = (date.getMonth() + 1).toString().padStart(2, '0'); // Extrai o mês e formata com dois dígitos
	const ano = date.getFullYear(); // Extrai o ano
	return `${dia}/${mes}/${ano}`; // Retorna a data no formato dia/mês/ano
};

export const formatExelencia = (numero: number) => {
	return (numero || 0.0).toFixed(2).replace('.', ',');
};

export const formatReplace = (numero: number) => {
	return (numero || 0.0).toFixed(2).replace('.', ',');
};
