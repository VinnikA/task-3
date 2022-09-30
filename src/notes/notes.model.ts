export class NoteModel {

  constructor(
    public id: string, 
    public category: string,
    public name: string,
    public created: string,
    public content: string,
    public dates: string[],
    public archived: boolean
  ){}
}