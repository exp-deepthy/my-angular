export class Countries{
    public Id: number;
    public Name: string;
    public CoronaCases : number;

    constructor(id: number, country: string, CoronaCases: number)
    {
        this.Id = id;
        this.Name = country;
        this.CoronaCases = CoronaCases;
    }
}