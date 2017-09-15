import model

proc split*( self: Formula ) =
  let text = self.curr.text
  let pos = self.pos
  self.prepend( self.curr.kind, text[ 0 .. pos - 1 ] )
  self.curr.text = text[ pos .. ^1 ]
  if self.curr.text.len == 0:
    self.curr.kind = sk_none

proc wedge*( self: Formula ) =
  let kind = self.curr.kind
  let text = self.curr.text
  let pos = self.pos
  if pos > 0:
    self.prepend( kind, text[ 0 .. pos - 1 ] )
  if pos < text.len:
    self.append( kind, text[ pos .. ^1 ] )
  self.curr.kind = sk_none
  self.curr.text = ""

# TODO: a bit funky in that one symbol gets passed in twice, but a simple option for now
proc join( self: Formula, old: Symbol, left: Symbol, right: Symbol ) =
  let left_text = left.text
  self.curr.kind = old.kind
  self.curr.text = left_text & right.text
  self.pos = left_text.len.uint
  old.del

proc join_left*( self: Formula ) =
  let prev = self.curr.prev
  if prev != nil:
    self.join( prev, prev, self.curr )

proc join_right*( self: Formula ) =
  let next = self.curr.next
  if next != nil:
    self.join( next, self.curr, next )

proc shift( self: Formula, curr: Symbol, pos: uint ) =
  self.curr.editable = off
  self.curr = curr
  self.curr.editable = on
  self.pos = pos

proc shift_left*( self: Formula ) =
  let prev = self.curr.prev
  if prev != nil:
    self.shift( prev, prev.text.len.uint )

proc shift_right*( self: Formula ) =
  let next = self.curr.next
  if next != nil:
    self.shift( next, 0 )
