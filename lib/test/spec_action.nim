import algorithm, spec, ../model, ../action

type

  SymbolState = ref object
    kind: SymbolKind
    text: string
    editable: bool

  FormulaState = ref object
    prev: seq[ SymbolState ]
    curr: SymbolState
    pos: int
    next: seq[ SymbolState ]

converter state( val: tuple[ kind: SymbolKind, text: string, editable: bool ] ): SymbolState =
  SymbolState( kind: val.kind, text: val.text, editable: val.editable )

proc none( editable: bool = off ): SymbolState =
  ( sk_none, "", editable )

proc prefix( text: string, editable: bool = off ): SymbolState =
  ( sk_prefix, text, editable )

converter state( val: tuple[ prev: seq[ SymbolState ], curr: SymbolState, pos: int, next: seq[ SymbolState ] ] ): FormulaState =
  FormulaState( prev: val.prev, curr: val.curr, pos: val.pos, next: val.next )

converter state( val: tuple[ prev: seq[ SymbolState ], curr: SymbolState, pos: int ] ): FormulaState =
  FormulaState( prev: val.prev, curr: val.curr, pos: val.pos, next: @[] )

converter state( val: tuple[ curr: SymbolState, pos: int, next: seq[ SymbolState ] ] ): FormulaState =
  FormulaState( prev: @[], curr: val.curr, pos: val.pos, next: val.next )

converter state( val: tuple[ curr: SymbolState, pos: int ] ): FormulaState =
  FormulaState( prev: @[], curr: val.curr, pos: val.pos, next: @[] )

proc setup( self: Formula, state: FormulaState ) =
  if state == nil:
    return
  for sym in state.prev:
    self.prepend( sym.kind, sym.text )
  let curr = self.curr
  curr.kind = state.curr.kind
  curr.text = state.curr.text
  for sym in state.next.reversed:
    self.append( sym.kind, sym.text )
  self.pos = state.pos.uint

proc capture( self: Formula ): FormulaState =
  let curr = self.curr
  var
    prev: seq[ SymbolState ] = @[]
    next: seq[ SymbolState ] = nil
  for sym in self.symbols:
    if sym == curr:
      next = @[]
    elif next == nil:
      prev.add( ( sym.kind, sym.text, sym.editable ) )
    else:
      next.add( ( sym.kind, sym.text, sym.editable ) )
  ( prev, ( curr.kind, curr.text, curr.editable ).state, self.pos, next )

describe "action", formula():

  # TODO: position should be at 0
  specify "default":
    expect: ( none( on ), int.low )

  context "split", it.split:

    specify "after text":
      given: ( prefix( "foo", on ), 3 )
      expect: ( @[ prefix( "foo" ) ], none( on ), 0 )

    specify "in between":
      given: ( prefix( "foobuzz", on ), 3 )
      expect: ( @[ prefix( "foo" ) ], prefix( "buzz", on ), 0 )

  context "wedge", it.wedge:

    specify "before text":
      given: ( @[ prefix( "foo" ) ], prefix( "buzz", on ), 0 )
      expect: ( @[ prefix( "foo" ) ], none( on ), 0, @[ prefix( "buzz" ) ] )

    specify "after text":
      given: ( prefix( "foo", on ), 3 )
      expect: ( @[ prefix( "foo" ) ], none( on ), 0 )

    specify "in between":
      given: ( prefix( "foobuzz", on ), 3 )
      expect: ( @[ prefix( "foo" ) ], none( on ), 0, @[ prefix( "buzz" ) ] )

  context "join (left)", it.join_left:

    specify "at top":
      given: ( prefix( "foo", on ), 0 )
      expect: ( prefix( "foo", on ), 0 )

    specify "before empty":
      given: ( @[ prefix( "foo" ) ], none( on ), 0 )
      expect: ( prefix( "foo", on ), 3 )

    specify "in between":
      given: ( @[ prefix( "foo" ) ], prefix( "buzz", on ), 0 )
      expect: ( prefix( "foobuzz", on ), 3 )

  context "join (right)", it.join_right:

    specify "at bottom":
      given: ( prefix( "foo", on ), 3 )
      expect: ( prefix( "foo", on ), 3 )

    specify "after empty":
      given: ( none( on ), 0, @[ prefix( "foo" ) ] )
      expect: ( prefix( "foo", on ), 0 )

    specify "in between":
      given: ( prefix( "foo", on ), 3, @[ prefix( "buzz" ) ] )
      expect: ( prefix( "foobuzz", on ), 3 )

  # TODO: expected position for the following is only 3 because that is where the test above left off

  context "shift (left)", it.shift_left:

    specify "at top":
      given: ( prefix( "foo", on ), 0 )
      expect: ( prefix( "foo", on ), 0 )

    # NOTE: make sure symbols start with different lengths
    specify "in between":
      given: ( @[ prefix( "foo" ) ], prefix( "buzz", on ), 0 )
      expect: ( prefix( "foo", on ), 3, @[ prefix( "buzz" ) ] )

  context "shift (right)", it.shift_right:

    # NOTE: make sure symbols start with different lengths
    specify "in between":
      given: ( prefix( "foo", on ), 3, @[ prefix( "buzz" ) ] )
      expect: ( @[ prefix( "foo" ) ], prefix( "buzz", on ), 0 )

    specify "at bottom":
      given: ( prefix( "foo", on ), 3 )
      expect: ( prefix( "foo", on ), 3 )
