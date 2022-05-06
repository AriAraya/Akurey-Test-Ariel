import Token from "../Scanner/Token";

export default abstract class Rule {
    abstract evaluate(code : Token[]);
}