import Token from "../Scanner/Token";
import { TokenType } from "../Scanner/TokenType";
import Rule from "./Rule";


export default class RuleElement extends Rule{
    private type : TokenType;

    constructor(pType : TokenType){
        super();
        this.type = pType;
    }
    
    evaluate(code: Token[]) : Rule {
        if(code[0].getType() === this.type){
            return this;
        }else{
            return null;
        }
    }
}