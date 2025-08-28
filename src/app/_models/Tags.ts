export class Tag{
    static readonly Angular=new Tag("Angular","#DD0031");
    static readonly TypeScript=new Tag("TypeScript","#3178C6");
    static readonly JavaScript=new Tag("JavaScript","#F7DF1E");
    static readonly HTML=new Tag("HTML","#E34F26");
    static readonly CSS=new Tag("CSS","#1572B6");
    static readonly Python=new Tag("Python","#3776AB");
    static readonly Django=new Tag("Django","#092E20");
    static readonly Flask=new Tag("Flask","#000000");
    static readonly Java=new Tag("Java","#007396");
    static readonly SpringBoot=new Tag("Spring Boot","#6DB33F");
    static readonly CSharp=new Tag("C#","#239120");
    static readonly NET=new Tag(".NET","#512BD4");
    static readonly SQL=new Tag("SQL","#4479A1");
    static readonly MongoDB=new Tag("MongoDB","#47A248");


    private constructor(public readonly key:string,public readonly color:string){

    }
    toString(){
        return this.key;
    }
}