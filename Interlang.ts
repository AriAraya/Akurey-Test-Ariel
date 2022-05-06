import CSharpCodeGenerator from "./CodeGenerator/CSharpCodeGenerator";
import JavaCodeGenerator from "./CodeGenerator/JavaCodeGenerator";
import PythonCodeGenerator from "./CodeGenerator/PythonCodeGenerator";
import TypeScriptCodeGenerator from "./CodeGenerator/TypeScriptCodeGenerator";

export default class Interlang{
    private javaGen : JavaCodeGenerator;
    private typeScriptGen : TypeScriptCodeGenerator;
    private cSharpGen : CSharpCodeGenerator;
    private pythonGen : PythonCodeGenerator;

    public compileCode(code:String){
        //Here it receives the origin code and saves in a file
    }
}