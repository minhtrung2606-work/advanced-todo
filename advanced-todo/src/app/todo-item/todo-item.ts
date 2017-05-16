export class TodoItem {
  private done:Boolean;
  private title:String;
  private desc:String;
  private creationDate:Date;
  private updateDate:Date;
  private doneDate:Date;

  constructor(title:String, desc:String) {
    this.done = false;
    this.title = title || '';
    this.desc = desc || '';
  }

  isDone():Boolean {
    return this.done;
  }

  complete(): TodoItem {
    this.done = true;
    return this;
  }

  incomplete():TodoItem {
    this.done = false;
    return this;
  }

  setTitle(title:String):TodoItem {
    this.title = title;
    return this;
  }

  setDescription(desc:String):TodoItem {
    this.desc = desc;
    return this;
  }

  setCreationDate(creationDate:Date):TodoItem {
    this.creationDate = creationDate;
    return this;
  }

  setUpdateDate(updateDate:Date):TodoItem {
    this.updateDate = updateDate;
    return this;
  }

  setDoneDate(doneDate:Date):TodoItem {
    this.doneDate = doneDate;
    return this;
  }
}
