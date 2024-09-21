// services/viaCep.d.ts
declare module '../services/viaCep' {
    export function buscarCep(cep: string): Promise<any>;  // ajuste o tipo de retorno se souber
  }

  
  // services/viaCep.d.ts
declare module '../services/viaCep' {
    const value: any;
    export default value;
  }
  