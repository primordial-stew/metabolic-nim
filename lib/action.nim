import model

proc split*( self: Formula ) =
  let text = self.curr.text
  let pos = self.curr.pos
  self.curr.prepend( self.curr.class, text[ 0 .. pos - 1 ] )
  self.curr.text = text[ pos .. ^1 ]
  if self.curr.text.len == 0:
    self.curr.class = none

proc wedge*( self: Formula ) =
  let class = self.curr.class
  let text = self.curr.text
  let pos = self.curr.pos
  if pos > 0:
    self.curr.prepend( class, text[ 0 .. pos - 1 ] )
  if pos < text.len:
    self.curr.append( class, text[ pos .. ^1 ] )
  self.curr.class = none
  self.curr.text = ""

# TODO: a bit funky in that one symbol gets passed in twice, but a simple option for now
proc join( curr: Symbol, old: Symbol, left: Symbol, right: Symbol ) =
  let left_text = left.text
  curr.class = old.class
  curr.text = left_text & right.text
  curr.pos = left_text.len.uint
  old.del

proc join_left*( self: Formula ) =
  let prev = self.curr.prev
  if prev != nil:
    self.curr.join( prev, prev, self.curr )

proc join_right*( self: Formula ) =
  let next = self.curr.next
  if next != nil:
    self.curr.join( next, self.curr, next )

proc shift_left( self: Formula ) =
  discard

proc shift_right( self: Formula ) =
  discard
