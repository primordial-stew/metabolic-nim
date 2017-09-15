import whatwg

type

  SymbolKind* = enum
    sk_none, sk_prefix, sk_infix

  SymbolOrNil = ref object
    ht: HTMLElement not nil

  Symbol* = SymbolOrNil not nil

  FormulaOrNil = ref object
    curr*: Symbol

  Formula* = FormulaOrNil not nil

proc ht( tag: cstring, parent: Node, next: Node = nil ): HTMLElement =
  result = document.create_element( tag ).HTMLElement
  discard parent.insert_before( result, next )

proc symbol*(): Symbol =
  Symbol( ht: ht( "code", ht( "p", document.body ) ) )

proc kind*( self: Symbol ): SymbolKind =
  case $self.ht.class_name
  of "prefix":
    sk_prefix
  of "infix":
    sk_infix
  else:
    sk_none

proc `kind=`*( self: Symbol, val: SymbolKind ) =
  self.ht.class_name =
    case val
    of sk_prefix:
      "prefix"
    of sk_infix:
      "infix"
    of sk_none:
      "" # TODO: this case should store nil but toJSStr does not like it

proc text*( self: Symbol ): string =
  $self.ht.text_content

proc `text=`*( self: Symbol, val: string ) =
  self.ht.text_content = val

# NOTE: currently only used for testing
proc editable*( self: Symbol ): bool =
  self.ht.is_content_editable

proc `editable=`*( self: Symbol, val: bool ) =
  self.ht.content_editable = if val: "true" else: "inherit"

# TODO: this needs test coverage in model spec ??
proc prev*( self: Symbol ): SymbolOrNil =
  let node = self.ht.previous_sibling
  if node != nil:
    SymbolOrNil( ht: node.HTMLElement )
  else:
    nil

# TODO: this needs test coverage in model spec ??
proc next*( self: Symbol ): SymbolOrNil =
  let node = self.ht.next_sibling
  if node != nil:
    SymbolOrNil( ht: node.HTMLElement )
  else:
    nil

proc del*( self: Symbol ) =
  discard self.ht.parent_node.remove_child( self.ht )

# NOTE: currently only used for testing
proc `==`*( left: Symbol, right: Symbol ): bool =
  left.ht == right.ht

proc formula*(): Formula =
  result = Formula( curr: symbol() )
  result.curr.editable = on

proc pos*( self: Formula ): int =
  let sel = document.get_selection
  if sel.range_count > 0u:
    sel.get_range_at( 0 ).start_offset.int
  else:
    int.low

proc `pos=`*( self: Formula, val: uint ) =
  let first = self.curr.ht.first_child
  # TODO: setStart throws an error in this case
  if first == nil and val == 0:
    return
  let
    sel = document.get_selection
    range = document.create_range
  range.set_start( first, val.uint32 )
  sel.remove_all_ranges
  sel.add_range( range )

# NOTE: the following are useful for test setup

# TODO: this needs test coverage in model spec ??
proc add( self: Formula, next: SymbolOrNil, kind: SymbolKind, text: string ) =
  let prev = Symbol( ht: ht(
    "code", self.curr.ht.parent_node,
    if next != nil:
      next.ht
    else:
      nil.Element
  ) )
  prev.kind = kind
  prev.text = text

# TODO: this needs test coverage in model spec ??
proc prepend*( self: Formula, kind: SymbolKind, text: string ) =
  self.add( self.curr, kind, text )

# TODO: this needs test coverage in model spec ??
proc append*( self: Formula, kind: SymbolKind, text: string ) =
  self.add( self.curr.next, kind, text )

# NOTE: currently only used for testing
iterator symbols*( self: Formula ): Symbol =
  var node = self.curr.ht.parent_node.first_child
  while node != nil:
    yield Symbol( ht: node.HTMLElement )
    node = node.next_sibling
