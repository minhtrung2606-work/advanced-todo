export class TodoItem {
  private done:Boolean;
  private title:String;
  private desc:String;
  private creationDate:Number;
  private updateDate:Number;
  private doneDate:Number;

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

  toggleDone():Boolean {
    this.done = !this.done;
    return this.done;
  }

  setTitle(title:String):TodoItem {
    this.title = title;
    return this;
  }

  setDescription(desc:String):TodoItem {
    this.desc = desc;
    return this;
  }

  setCreationDate(creationDate:Number):TodoItem {
    this.creationDate = creationDate;
    return this;
  }

  setUpdateDate(updateDate:Number):TodoItem {
    this.updateDate = updateDate;
    return this;
  }

  setDoneDate(doneDate:Number):TodoItem {
    this.doneDate = doneDate;
    return this;
  }
}
