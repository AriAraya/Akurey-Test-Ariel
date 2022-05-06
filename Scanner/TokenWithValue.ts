import Token from "./Token";
import { TokenType } from "./TokenType";

export default class TokenWithValue extends Token{
    private value : string;

    constructor(pValue : string, pType : TokenType){
        super(pType);
        this.value = pValue;
    }

    public getValue() : string{
        return this.value;
    }
}