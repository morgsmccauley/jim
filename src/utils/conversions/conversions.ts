export interface IConversion {
  (weight: number): number;
}

export const lbToKg: IConversion = weight => weight * 0.45359237;

export const kgToLb: IConversion = weight => weight / 0.45359237;
