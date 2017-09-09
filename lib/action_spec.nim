import test, model, action

type

  State = ref object

proc state(): State =
  State()

template expect( name: cstring, exp: State, test: untyped ): untyped {. dirty .} =
  specify( name ) do ():
    let this {. exportc: "this_" .} = formula()
    test
    state().expect( "to equal", exp )

describe "action":

  describe "split":

    expect "after text", state():
      this.curr.class = prefix
      this.curr.text = "foo"
      this.curr.pos = 3
      this.split

    expect "in between", state():
      this.curr.class = prefix
      this.curr.text = "foobuzz"
      this.curr.pos = 3
      this.split

  describe "wedge":

    expect "before text", state():
      this.curr.prepend( prefix, "foo" )
      this.curr.class = prefix
      this.curr.text = "buzz"
      this.curr.pos = 0
      this.wedge

    expect "after text", state():
      this.curr.class = prefix
      this.curr.text = "foo"
      this.curr.pos = 3
      this.wedge

    expect "in between", state():
      this.curr.class = prefix
      this.curr.text = "foobuzz"
      this.curr.pos = 3
      this.wedge

  describe "join left":

    expect "at top", state():
      this.curr.class = prefix
      this.curr.text = "foo"
      this.join_left

    expect "before empty", state():
      this.curr.prepend( prefix, "foo" )
      this.join_left

    expect "in between", state():
      this.curr.prepend( prefix, "foo" )
      this.curr.class = prefix
      this.curr.text = "buzz"
      this.join_left

  describe "join right":

    expect "at bottom", state():
      this.curr.class = prefix
      this.curr.text = "foo"
      this.join_right

    expect "after empty", state():
      this.curr.append( prefix, "foo" )
      this.join_right

    expect "in between", state():
      this.curr.class = prefix
      this.curr.text = "foo"
      this.curr.append( prefix, "buzz" )
      this.join_right

  describe "shift left":

    expect "at top", state():
      discard

    # NOTE: make sure symbols start with different lengths
    expect "in between", state():
      discard

  describe "shift right":

    expect "in between", state():
      discard

    expect "at bottom", state():
      discard
