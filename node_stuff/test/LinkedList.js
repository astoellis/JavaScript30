const assert = require('chai').assert;
const path = '../linked_list.js';
const rewire = require('rewire');

describe( 'LL export', function() {
  it( 'should export a function', function() {
    const LL = rewire( path );
    assert.isObject(LL);
  })


  describe( 'initialize', function() {
    it( 'it should have a list property', function() {
      const LL = rewire( path ); 

      assert.property( LL, 'list' );
      assert.isArray( LL.list );
      assert.equal( LL.list.length, 0 );
    });


    it( 'list property should not change list property', function() {
      const LL = rewire( path );
      LL.list = 'foo';
      assert.notEqual( LL.list, 'foo' );
    });

  });

  describe( '#push', function() {
    
    it( 'should have method push', function() {
      const LL = rewire( path );
      assert.isFunction( LL.push );
    });
    

    it( 'should add a node to list', function() {
      const LL = rewire( path );
      const dummyObj = { foo: 'bar' };
      LL.push( dummyObj );
      assert.equal( LL.list.length, 1 );
      assert.equal( LL.list[0].value, dummyObj );
      assert.equal( LL.list[0].previous, null );
      assert.equal( LL.list[0].next, null );
    });
    
    it( 'new node should have reference to previous node', function() {
      const LL = rewire( path );
      const dummyObj = { foo: 'bar' };
      const dummyObjTwo = { foo: 'bar' };
     
      LL.push( dummyObj );
      LL.push( dummyObjTwo );
      
      
      assert.equal( LL.list.length, 2 );
      assert.equal( LL.list[1].previous.value, dummyObj );
    });

    it( 'should update previous node to have next', function() {
      const LL = rewire( path );
      const dummyObj = { foo: 'bar' };
      const dummyObjTwo = { foo: 'bar' };

      LL.push( dummyObj );
      LL.push( dummyObjTwo );


      assert.equal( LL.list[ 0 ].value, dummyObj, 'dummyone' );
      assert.equal( LL.list[ 1 ].value, dummyObjTwo, 'value of second element should be dummyObj');
      assert.equal( LL.list[ 0 ].next, LL.list[ 1 ] ); 
    });

  });

  describe('#remove()', () => {


    it( 'should have remove method', () => {
      const LL = rewire( path );
      assert.isFunction( LL.remove );
    });
    it( 'should reattach disconnected nodes', () => {
      const LL = rewire( path );
      const dummyOne = { foo: 'bar' };
      const dummyTwo = { bar: 'baz' };
      const dummyThree = { bing: 'boom' };

      LL.push( dummyOne );
      LL.push( dummyTwo );
      LL.push( dummyThree );


      LL
    });

  })

})
