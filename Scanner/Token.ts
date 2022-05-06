import { TokenType } from "./TokenType";

export default class Token{
    private type : TokenType;

    constructor(pType : TokenType){
        this.type = pType;
    }
    
    public getType() : TokenType{
        return this.type;
    }
}