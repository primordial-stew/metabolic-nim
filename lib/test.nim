proc describe*( name: cstring, suite: proc () ) {. importc .}

proc specify*( name: cstring, test: proc () ) {. importc .}

proc expect*[T]( act: T, rel: cstring, exp: T ) {. importc: "weknowhow.expect" .}

template describe*( name: cstring, suite: untyped ): untyped =
  describe( name ) do ():
    suite
