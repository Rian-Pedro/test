// 705.484.450-52 070.987.720-03
/*
    7x 0x 5x 4x 8x 4x 4x 5x 0x
    10 9  8  7  6  5  4  3  2
    70 0  40 28 48 20 16 15 0 = 237

    11 - (237 % 11) = 5 (Primeiro Digito)
    Se o número do digito for maior que 9, consideramos como 0

    7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
    11 10 9  8  7  6  5  4  3  2 
    70 0  40 28 48 20 16 15 0 = 284

    11 - (284 % 11) = 2 (Segundo Digito)
    Se o número do digito for maior que 9, consideramos como 0
*/

export default class ValidaCpf{
    constructor(cpf){
        Object.defineProperty(this,'cpfLimpo',{
            enumerable: true,
            get: function(){
                return cpf.replace(/\D+/g,'');
            }
        });
    }

    valida(){
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencial()) return false;

        const cpfParcial = this.cpfLimpo.slice(0,-2);
        const dig1 = this.pegaDigito(cpfParcial);
        const dig2 = this.pegaDigito(cpfParcial + dig1);

        const cpfNovo = cpfParcial + dig1 + dig2;
        return cpfNovo === this.cpfLimpo;
    }

    static pegaDig(cpfRecebido){
        const cpfArray = Array.from(cpfRecebido);

        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((acu,val)=>{
            acu += (Number(val) * regressivo);
            regressivo--;
            return acu;
        },0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    pegaDigito(cpfRecebido){
        const cpfArray = Array.from(cpfRecebido);

        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((acu,val)=>{
            acu += (Number(val) * regressivo);
            regressivo--;
            return acu;
        },0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequencial(){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}