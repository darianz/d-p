export class Video {
  public name: string;
  public ID: string; // Dont need id? maybe just url?
  public description: string;
  public type: string;


  constructor(name: string, id: string, type: string, desc: string){
    this.name = name;
    this.description = desc;
    this.ID = id;
    this.type = type;
  }
  
}