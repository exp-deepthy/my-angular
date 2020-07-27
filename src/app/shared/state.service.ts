import { States } from '../shared/state.model';
export class StateService{
   private stateList: States[] = [
        new States(1,1,"Kerala",10000),
        new States(2,1,"Tamil Nadu",20000),
        new States(3,1,"Karnataka",30000),
        new States(4,1,"Andra",40000),
        new States(5,1,"Telugana",50000),
        new States(6,1,"Goa",100),
        new States(7,2,"Florida",10000),
        new States(8,2,"Texas",20000),
        new States(9,2,"New Jerssy",30000),
        new States(10,2,"Washington",40000),
        new States(11,2,"Ohio",50000),
        new States(12,3,"Ireland",100),
        new States(13,3,"Poland",1000),
        new States(15,5,"Rio",1000),
        new States(16,6,"Ontario",10000),
        new States(16,6,"Torando",1000),
      ];
      states: States[];
      constructor() {}
      
      getStates() {
        return this.stateList.slice();
      }
      getState(country: number) {
        return this.states = this.stateList.filter((item)=> item.country == country);
      }
}