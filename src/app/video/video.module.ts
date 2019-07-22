export class Video {
  public name: string;
  public ID: string;
  public description: string;
  public type: string;


  constructor(name: string, desc: string, id: string, type: string){
    this.name = name;
    this.description = desc;
    this.ID = id;
    this.type = type;
  }
  
}