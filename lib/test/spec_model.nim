import spec, ../model

type

  SymbolState = ref object
    kind: SymbolKind
    text: string
    editable: bool

converter state( val: tuple[ kind: SymbolKind, text: string, editable: bool ] ): SymbolState =
  SymbolState( kind: val.kind, text: val.text, editable: val.editable )

proc none( editable: bool = off ): SymbolState =
  ( sk_none, "", editable )

proc prefix( text: string ): SymbolState =
  ( sk_prefix, text, off )

proc infix( text: string ): SymbolState =
  ( sk_infix, text, off )

proc capture( self: Symbol ): SymbolState =
  ( self.kind, self.text, self.editable )

describe "model", symbol():

  specify "default":
    expect none()

  specify "clear class":
    it.kind = sk_none
    expect none()

  specify "set prefix":
    it.kind = sk_prefix
    it.text = "foo"
    expect prefix( "foo" )

  specify "set infix":
    it.kind = sk_infix
    it.text = "->"
    expect infix( "->" )

  specify "enable edit":
    it.kind = sk_none
    it.editable = on
    expect none( on )

  specify "disable edit":
    it.kind = sk_none
    it.editable = off
    expect none()

  # TODO: this needs to verify node was actually removed
  specify "remove":
    it.kind = sk_prefix
    it.text = "foo"
    it.del
    expect prefix( "foo" )
