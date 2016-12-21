class LinkedList {
  constructor() {
    this._list = [];
    
  }

  get list() {
    return this._list;
  }

  set list( val ) {
    return true;
  }

  push( value ) {
    const newNode = new Node({
     next: null,
     previous: null,
     value
    });

    
    if( this._list.length === 0 ) {
     this._list.push( newNode );
     return;
    }
    
    const oldNode = this._list.pop();
   

    oldNode.next = newNode;
    newNode.previous = oldNode;
    this._list.push( oldNode );
    this._list.push( newNode );
  }

  remove( node ) {

  }
}


class Node {
  constructor({ next, previous, value }) {
    Object.assign( this, { next, previous, value } );
  }
}



module.exports = new LinkedList();
