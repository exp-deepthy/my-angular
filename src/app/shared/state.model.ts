export class States{
    public Id: number;
    public country: number;
    public name: string;
    public totalcases: number;

    constructor(id: number, country: number, name: string,totalcases: number)
    {
        this.Id = id;
        this.country = country;
        this.name = name;
        this.totalcases = totalcases;
    }
}