import Token from "../Scanner/Token";
import CodeGenerator from "./CodeGenerator";


export default class CSharpCodeGenerator extends CodeGenerator{
    generateCode(code: Token[]): String {
        throw new Error("Method not implemented.");
    }
}