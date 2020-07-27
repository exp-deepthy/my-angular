import { Countries } from '../shared/Country.model';
export class CountryService{
   private countryList: Countries[] = [
        new Countries(1,"INDIA",10000),
        new Countries(2,"USA",250000),
        new Countries(3,"UK",50000),
        new Countries(4,"SINGAPORE",60000),
        new Countries(5,"BRAZIL",70000),
        new Countries(6,"CANADA",80000)
      ];
      constructor() {}
      
      getCountries() {
        return this.countryList.slice();
      }
      getCountry(index: number) {
        return this.countryList[index];
      }
}