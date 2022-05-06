import Token from "../Scanner/Token";
import { TokenType } from "../Scanner/TokenType";
import ComposedRule from "./ComposedRule";
import Rule from "./Rule";
import RuleElement from "./RuleElement";

export default class Parser{
    private static parser:Parser;
    private rules : ComposedRule = new ComposedRule([new RuleElement(TokenType.Identifier),new RuleElement(TokenType.And),new RuleElement(TokenType.Identifier)]);
    //The idea would be to implement all the rules of the language
    private constructor(){
    }

    public static getInstance() : Parser{
        if (this.parser === null){
            this.parser = new Parser();
        }
        return this.parser;
    }

    public analyze(code : Token[]) : Rule{
        this.rules.evaluate(code);
        //If the rule contains null, it didn't match
        if(this.rules.getRuleSet().filter(e => e === null)){
            return null;
        }
        return this.rules;
    }
}