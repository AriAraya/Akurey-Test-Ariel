import Token from "../Scanner/Token";
import { TokenType } from "../Scanner/TokenType";

export default abstract class CodeGenerator{
    private dictionary = new Map<TokenType,string>(); //Dictionary where tokentype is interlang and string is in the destiny language.
    private UILibrary : string[]; //Array with all the functions and values of the library

    abstract generateCode(code:Token[]):String; //returns generated code
}