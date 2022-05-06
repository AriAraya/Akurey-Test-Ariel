import Token from "../Scanner/Token";
import Rule from "./Rule";


export default class ComposedRule extends Rule{
    private ruleSet : Rule[];

    constructor(pRuleSet? : Rule[]) {
        super();
        this.ruleSet = pRuleSet;
    }

    getRuleSet():Rule[]{
        return this.ruleSet;
    }
    
    evaluate(code: Token[]) : Rule {
        for (var i = 0; i < code.length;i++){
            this.ruleSet[i] = this.ruleSet[i].evaluate([code[i]]);
        }
        return this;
    }
}