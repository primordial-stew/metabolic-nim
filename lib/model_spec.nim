import test, model

type

  State = ref object
    class: SymbolClass
    text: string
    pos: int
    prev: Symbol
    next: Symbol

proc state( class: SymbolClass, text: string, pos: int, prev: Symbol = nil, next: Symbol = nil ): State =
  State( class: class, text: text, pos: pos, prev: prev, next: next )

template expect( name: cstring, exp: State, test: untyped ): untyped {. dirty .} =
  specify( name ) do ():
    let this {. exportc: "this_" .} = symbol()
    test
    state( this.class, this.text, this.pos, this.prev, this.next ).expect( "to equal", exp )

describe "model":

  expect "default", state( none, "", int.low ):
    discard

  expect "clear class", state( none, "", int.low ):
    this.class = none

  expect "set prefix", state( prefix, "foo", int.low ):
    this.class = prefix
    this.text = "foo"

  expect "set infix", state( infix, "->", int.low ):
    this.class = infix
    this.text = "->"

  expect "set position", state( none, "buzz", 2 ):
    this.text = "buzz"
    this.pos = 2

  # TODO: this needs to verify node was actually removed
  expect "remove", state( none, "foo", 2 ):
    this.text = "foo"
    this.del
