import { Address } from '../../hooks/pagination';

export function formatIntegerToCurrencyString(
  value: number | string | undefined,
): string {
  if (value) {
    try {
      const floatValue = Number(value) / 100;
      const formatter = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
      });
      return formatter.format(floatValue);
    } catch {
      return '0,00';
    }
  }
  return '0,00';
}

export function formatAddressToString(address: Address | undefined): string {
  if (address) {
    return `${address?.street}, ${address?.number} - ${address?.neighborhood}, ${address?.city} - ${address?.state}`;
  }

  return '';
}
