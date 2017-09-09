import whatwg

type

  SymbolClass* = enum
    none = "", prefix, infix

  Symbol* = ref object
    el: Element not nil

  Formula* = ref object
    curr*: Symbol not nil

proc el( tag: cstring, parent: Node, next: Node = nil ): Element =
  result = document.create_element( tag )
  discard parent.insert_before( result, next )

proc symbol*(): Symbol =
  Symbol( el: el( "code", el( "p", document.body ) ) )

proc class*( self: Symbol ): SymbolClass =
  case $self.el.class_name
  of "prefix":
    prefix
  of "infix":
    infix
  else:
    none

proc `class=`*( self: Symbol, val: SymbolClass ) =
  self.el.class_name = $val

proc text*( self: Symbol ): string =
  $self.el.text_content

proc `text=`*( self: Symbol, val: string ) =
  self.el.text_content = val

# TODO: position really belongs at a scope above individual symbols ??
proc pos*( self: Symbol ): int =
  let sel = document.get_selection
  if sel.range_count > 0u:
    sel.get_range_at( 0 ).start_offset.int
  else:
    int.low

proc `pos=`*( self: Symbol, val: uint ) =
  let sel = document.get_selection
  let range = document.create_range
  range.set_start( self.el.first_child, val.uint32 )
  sel.remove_all_ranges
  sel.add_range( range )

proc prev*( self: Symbol ): Symbol =
  let node = self.el.previous_sibling
  if node != nil:
    Symbol( el: node.Element )
  else:
    nil

proc next*( self: Symbol ): Symbol =
  let node = self.el.next_sibling
  if node != nil:
    Symbol( el: node.Element )
  else:
    nil

proc del*( self: Symbol ) =
  discard self.el.parent_node.remove_child( self.el )

# NOTE: the following are useful for test setup

# TODO: this needs test coverage in model spec ??
# TODO: add really belongs at a scope above individual symbols ??
proc add( self: Symbol, next: Symbol, class: SymbolClass, text: string ) =
  let prev = Symbol( el: el(
    "code", self.el.parent_node,
    if next != nil:
      next.el
    else:
      nil.Element
  ) )
  prev.class = class
  prev.text = text

# TODO: this needs test coverage in model spec ??
# TODO: prepend really belongs at a scope above individual symbols ??
proc prepend*( self: Symbol, class: SymbolClass, text: string ) =
  self.add( self, class, text )

# TODO: this needs test coverage in model spec ??
# TODO: append really belongs at a scope above individual symbols ??
proc append*( self: Symbol, class: SymbolClass, text: string ) =
  self.add( self.next, class, text )

proc formula*(): Formula =
  Formula( curr: symbol() )
