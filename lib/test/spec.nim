type

  Mocha = ref MochaObj
  MochaObj {. importc .} = object of RootObj

{. push importcpp .}

proc setup( self: Mocha, ifx: cstring )
proc run*( self: Mocha )

{. pop .}

var mocha* {. importc .}: Mocha

{. push importc .}

proc describe*( name: cstring, suite: proc () )

proc specify*( name: cstring, `case`: proc () )

proc beforeEach*( hook: proc() )

{. pop .}

proc expect*[T]( actual: T, rel: cstring, expected: T ) {. importc: "weknowhow.expect" .}

var this_context {. importc: "this._context_" .}: proc ()

template describe*( title: cstring, subject: typed, suite: untyped ) =
  describe title:
    var it {. inject, importc: "this._subject_" .}: type( subject )
    template given( state: typed ) =
      it.setup( state )
    template expect( expected: typed ) =
      if this_context != nil:
        this_context()
      it.capture().expect( "to equal", expected )
    before_each:
      it = subject
    suite

template context*( title: cstring, action: untyped, suite: untyped ) =
  describe title:
    before_each:
      this_context = proc () = action
    suite

mocha.setup( "bdd" )
