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
    this.creationDate = new Date().getTime();
  }

  isDone():Boolean {
    return this.done;
  }

  markDone(): TodoItem {
    this.done = true;
    this.doneDate = new Date().getTime();
    this.updateDate = new Date().getTime();
    return this;
  }

  markUndone():TodoItem {
    this.done = false;
    this.updateDate = new Date().getTime();
    return this;
  }

  setTitle(title:String):TodoItem {
    this.title = title;
    return this;
  }

  getTitle():String {
    return this.title;
  }

  setDescription(desc:String):TodoItem {
    this.desc = desc;
    return this;
  }

  getDescription(): String {
    return this.desc;
  }

  setCreationDate(creationDate:Number):TodoItem {
    this.creationDate = creationDate;
    return this;
  }

  getCreationDate():Number {
    return this.creationDate;
  }

  setUpdateDate(updateDate:Number):TodoItem {
    this.updateDate = updateDate;
    return this;
  }

  getUpdateDate():Number {
    return this.updateDate;
  }

  setDoneDate(doneDate:Number):TodoItem {
    this.doneDate = doneDate;
    return this;
  }

  getDoneDate():Number {
    return this.doneDate;
  }
}
