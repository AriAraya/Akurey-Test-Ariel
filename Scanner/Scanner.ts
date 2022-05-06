import Token from "./Token";
import { TokenType } from "./TokenType";
import TokenWithValue from "./TokenWithValue";

export default class Scanner{
    private static scanner:Scanner;

    private constructor(){
    }

    public static getInstance() : Scanner{
        if (this.scanner === null){
            this.scanner = new Scanner();
        }
        return this.scanner;
    }

    public scan(code : string) : Token[]{
        let splittedCode = code.split(" ");
        var tokenizedCode : Token[] = [];
        for(var i = 0; i < splittedCode.length; i++){
            var word = splittedCode[i];
            if(word === "and"){
                var token = new Token(TokenType.And);
                tokenizedCode.push(token);
            }
            // Other words and cases
            else{
                var idToken = new TokenWithValue(word,TokenType.Identifier);
                tokenizedCode.push(idToken);
            }
        }
        return tokenizedCode;
    }
}