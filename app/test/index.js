/* Generated by the Nim Compiler v0.15.2 */
/*   (c) 2016 Andreas Rumpf */

var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var NTI32002 = {size: 0, kind: 14, base: null, node: null, finalizer: null};
var NTI3456 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3438 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI104 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI12409 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI3408 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI138 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI140 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI3485 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI3424 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3436 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3440 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI3440 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3440.node = NNI3440;
var NNI3436 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3436.node = NNI3436;
NTI3485.base = NTI3424;
var NNI3424 = {kind: 2, len: 4, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI3485, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI140, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI138, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI138, name: "trace", sons: null}]};
NTI3424.node = NNI3424;
var NNI3408 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3408.node = NNI3408;
NTI3424.base = NTI3408;
NTI3436.base = NTI3424;
NTI3440.base = NTI3436;
var NNI12409 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI140, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI104, name: "Field1", sons: null}]};
NTI12409.node = NNI12409;
var NNI3438 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3438.node = NNI3438;
NTI3438.base = NTI3436;
var NNI3456 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3456.node = NNI3456;
NTI3456.base = NTI3424;
var NNI32002 = {kind: 2, offset: 0, typ: null, name: null, len: 3, sons: [{kind: 1, offset: 0, typ: NTI32002, name: "", len: 0, sons: null}, 
{kind: 1, offset: 1, typ: NTI32002, name: "prefix", len: 0, sons: null}, 
{kind: 1, offset: 2, typ: NTI32002, name: "infix", len: 0, sons: null}]};
NTI32002.node = NNI32002;
function makeNimstrLit(c_13403) {

    var ln = c_13403.length;
    var result = new Array(ln + 1);
    var i = 0;
    for (; i < ln; ++i) {
      result[i] = c_13403.charCodeAt(i);
    }
    result[i] = 0; // terminating zero
    return result;
    }
function SetConstr() {

      var result = {};
      for (var i = 0; i < arguments.length; ++i) {
        var x = arguments[i];
        if (typeof(x) == "object") {
          for (var j = x[0]; j <= x[1]; ++j) {
            result[j] = true;
          }
        } else {
          result[x] = true;
        }
      }
      return result;
    }
function nimCopy(dest_18515, src_18516, ti_18517) {

var result_18829 = null;
switch (ti_18517.kind) {
case 21: case 22: case 23: case 5: if (!(isfatpointer_18498(ti_18517))) {
result_18829 = src_18516;
}
else {
result_18829 = [src_18516[0], src_18516[1]];}


break;
case 19:       if (dest_18515 === null || dest_18515 === undefined) {
        dest_18515 = {};
      }
      else {
        for (var key in dest_18515) { delete dest_18515[key]; }
      }
      for (var key in src_18516) { dest_18515[key] = src_18516[key]; }
      result_18829 = dest_18515;
    
break;
case 18: case 17: if (!((ti_18517.base == null))) {
result_18829 = nimCopy(dest_18515, src_18516, ti_18517.base);
}
else {
if ((ti_18517.kind == 17)) {
result_18829 = (dest_18515 === null || dest_18515 === undefined) ? {m_type: ti_18517} : dest_18515;}
else {
result_18829 = (dest_18515 === null || dest_18515 === undefined) ? {} : dest_18515;}
}
nimCopyAux(result_18829, src_18516, ti_18517.node);

break;
case 24: case 4: case 27: case 16:       if (src_18516 === null) {
        result_18829 = null;
      }
      else {
        if (dest_18515 === null || dest_18515 === undefined) {
          dest_18515 = new Array(src_18516.length);
        }
        else {
          dest_18515.length = src_18516.length;
        }
        result_18829 = dest_18515;
        for (var i = 0; i < src_18516.length; ++i) {
          result_18829[i] = nimCopy(result_18829[i], src_18516[i], ti_18517.base);
        }
      }
    
break;
case 28:       if (src_18516 !== null) {
        result_18829 = src_18516.slice(0);
      }
    
break;
default: 
result_18829 = src_18516;
break;
}
return result_18829;
}
function eqStrings(a_16003, b_16004) {

    if (a_16003 == b_16004) return true;
    if ((!a_16003) || (!b_16004)) return false;
    var alen = a_16003.length;
    if (alen != b_16004.length) return false;
    for (var i = 0; i < alen; ++i)
      if (a_16003[i] != b_16004[i]) return false;
    return true;
  }
function arrayConstr(len_19003, value_19004, typ_19005) {

      var result = new Array(len_19003);
      for (var i = 0; i < len_19003; ++i) result[i] = nimCopy(null, value_19004, typ_19005);
      return result;
    }
function cstrToNimstr(c_13603) {

  var ln = c_13603.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_13603.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else if((ch > 127) && (ch < 2048)) {
      result[r] = (ch >> 6) | 192;
      ++r;
      result[r] = (ch & 63) | 128;
    }
    else {
      result[r] = (ch >> 12) | 224;
      ++r;
      result[r] = ((ch >> 6) & 63) | 128;
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  result[r] = 0; // terminating zero
  return result;
  }
function toJSStr(s_13803) {

    var len = s_13803.length-1;
    var asciiPart = new Array(len);
    var fcc = String.fromCharCode;
    var nonAsciiPart = null;
    var nonAsciiOffset = 0;
    for (var i = 0; i < len; ++i) {
      if (nonAsciiPart !== null) {
        var offset = (i - nonAsciiOffset) * 2;
        var code = s_13803[i].toString(16);
        if (code.length == 1) {
          code = "0"+code;
        }
        nonAsciiPart[offset] = "%";
        nonAsciiPart[offset + 1] = code;
      }
      else if (s_13803[i] < 128)
        asciiPart[i] = fcc(s_13803[i]);
      else {
        asciiPart.length = i;
        nonAsciiOffset = i;
        nonAsciiPart = new Array((len - i) * 2);
        --i;
      }
    }
    asciiPart = asciiPart.join("");
    return (nonAsciiPart === null) ?
        asciiPart : asciiPart + decodeURIComponent(nonAsciiPart.join(""));
  }
function raiseException(e_12806, ename_12807) {

e_12806.name = ename_12807;
if ((excHandler == 0)) {
unhandledException(e_12806);
}

e_12806.trace = nimCopy(null, rawwritestacktrace_12628(), NTI138);
throw e_12806;}
function chckRange(i_19015, a_19016, b_19017) {

var Tmp1;
var result_19018 = 0;
BeforeRet: do {
if (!(a_19016 <= i_19015)) Tmp1 = false; else {Tmp1 = (i_19015 <= b_19017); }if (Tmp1) {
result_19018 = i_19015;
break BeforeRet;
}
else {
raiseRangeError();
}

} while (false); 
return result_19018;
}
function subInt(a_16403, b_16404) {

      var result = a_16403 - b_16404;
      if (result > 2147483647 || result < -2147483648) raiseOverflow();
      return result;
    }
var nimvm_5554 = false;
var nim_program_result = 0;
var globalraisehook_10414 = [null];
var localraisehook_10419 = [null];
var outofmemhook_10422 = [null];
function isfatpointer_18498(ti_18500) {

var result_18501 = false;
BeforeRet: do {
result_18501 = !((SetConstr(17, 16, 4, 18, 27, 19, 23, 22, 21)[ti_18500.base.kind] != undefined));
break BeforeRet;
} while (false); 
return result_18501;
}
function nimCopyAux(dest_18520, src_18521, n_18523) {

switch (n_18523.kind) {
case 0: 
break;
case 1:       dest_18520[n_18523.offset] = nimCopy(dest_18520[n_18523.offset], src_18521[n_18523.offset], n_18523.typ);
    
break;
case 2: L1: do {
var i_18815 = 0;
var HEX3Atmp_18817 = 0;
HEX3Atmp_18817 = (n_18523.len - 1);
var res_18820 = 0;
L2: do {
L3: while (true) {
if (!(res_18820 <= HEX3Atmp_18817)) break L3;
i_18815 = res_18820;
nimCopyAux(dest_18520, src_18521, n_18523.sons[i_18815]);
res_18820 += 1;
}
} while(false);
} while(false);

break;
case 3:       dest_18520[n_18523.offset] = nimCopy(dest_18520[n_18523.offset], src_18521[n_18523.offset], n_18523.typ);
      for (var i = 0; i < n_18523.sons.length; ++i) {
        nimCopyAux(dest_18520, src_18521, n_18523.sons[i][1]);
      }
    
break;
}
}
function add_10438(x_10441, x_10441_Idx, y_10442) {

        var len = x_10441[0].length-1;
        for (var i = 0; i < y_10442.length; ++i) {
          x_10441[0][len] = y_10442.charCodeAt(i);
          ++len;
        }
        x_10441[0][len] = 0
      }
function auxwritestacktrace_12404(f_12406) {

var Tmp3;
var result_12407 = [null];
var it_12415 = f_12406;
var i_12416 = 0;
var total_12417 = 0;
var tempframes_12421 = arrayConstr(64, {Field0: null, Field1: 0}, NTI12409);
L1: do {
L2: while (true) {
if (!!((it_12415 == null))) Tmp3 = false; else {Tmp3 = (i_12416 <= 63); }if (!Tmp3) break L2;
tempframes_12421[i_12416].Field0 = it_12415.procname;
tempframes_12421[i_12416].Field1 = it_12415.line;
i_12416 += 1;
total_12417 += 1;
it_12415 = it_12415.prev;
}
} while(false);
L4: do {
L5: while (true) {
if (!!((it_12415 == null))) break L5;
total_12417 += 1;
it_12415 = it_12415.prev;
}
} while(false);
result_12407[0] = nimCopy(null, makeNimstrLit(""), NTI138);
if (!((total_12417 == i_12416))) {
if (result_12407[0] != null) { result_12407[0] = (result_12407[0].slice(0, -1)).concat(makeNimstrLit("(")); } else { result_12407[0] = makeNimstrLit("(");};
if (result_12407[0] != null) { result_12407[0] = (result_12407[0].slice(0, -1)).concat(cstrToNimstr(((total_12417 - i_12416))+"")); } else { result_12407[0] = cstrToNimstr(((total_12417 - i_12416))+"");};
if (result_12407[0] != null) { result_12407[0] = (result_12407[0].slice(0, -1)).concat(makeNimstrLit(" calls omitted) ...\x0A")); } else { result_12407[0] = makeNimstrLit(" calls omitted) ...\x0A");};
}

L6: do {
var j_12615 = 0;
var HEX3Atmp_12621 = 0;
HEX3Atmp_12621 = (i_12416 - 1);
var res_12624 = HEX3Atmp_12621;
L7: do {
L8: while (true) {
if (!(0 <= res_12624)) break L8;
j_12615 = res_12624;
add_10438(result_12407, 0, tempframes_12421[j_12615].Field0);
if ((0 < tempframes_12421[j_12615].Field1)) {
if (result_12407[0] != null) { result_12407[0] = (result_12407[0].slice(0, -1)).concat(makeNimstrLit(", line: ")); } else { result_12407[0] = makeNimstrLit(", line: ");};
if (result_12407[0] != null) { result_12407[0] = (result_12407[0].slice(0, -1)).concat(cstrToNimstr((tempframes_12421[j_12615].Field1)+"")); } else { result_12407[0] = cstrToNimstr((tempframes_12421[j_12615].Field1)+"");};
}

if (result_12407[0] != null) { result_12407[0] = (result_12407[0].slice(0, -1)).concat(makeNimstrLit("\x0A")); } else { result_12407[0] = makeNimstrLit("\x0A");};
res_12624 -= 1;
}
} while(false);
} while(false);
return result_12407[0];
}
function rawwritestacktrace_12628() {

var result_12630 = null;
if (!((framePtr == null))) {
result_12630 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A").slice(0,-1)).concat(auxwritestacktrace_12404(framePtr)), NTI138);
}
else {
result_12630 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI138);
}

return result_12630;
}
function unhandledException(e_12654) {

var Tmp1;
var buf_12655 = /**/[makeNimstrLit("")];
if (!!(eqStrings(e_12654.message, null))) Tmp1 = false; else {Tmp1 = !((e_12654.message[0] == 0)); }if (Tmp1) {
if (buf_12655[0] != null) { buf_12655[0] = (buf_12655[0].slice(0, -1)).concat(makeNimstrLit("Error: unhandled exception: ")); } else { buf_12655[0] = makeNimstrLit("Error: unhandled exception: ");};
if (buf_12655[0] != null) { buf_12655[0] = (buf_12655[0].slice(0, -1)).concat(e_12654.message); } else { buf_12655[0] = e_12654.message;};
}
else {
if (buf_12655[0] != null) { buf_12655[0] = (buf_12655[0].slice(0, -1)).concat(makeNimstrLit("Error: unhandled exception")); } else { buf_12655[0] = makeNimstrLit("Error: unhandled exception");};
}

if (buf_12655[0] != null) { buf_12655[0] = (buf_12655[0].slice(0, -1)).concat(makeNimstrLit(" [")); } else { buf_12655[0] = makeNimstrLit(" [");};
add_10438(buf_12655, 0, e_12654.name);
if (buf_12655[0] != null) { buf_12655[0] = (buf_12655[0].slice(0, -1)).concat(makeNimstrLit("]\x0A")); } else { buf_12655[0] = makeNimstrLit("]\x0A");};
if (buf_12655[0] != null) { buf_12655[0] = (buf_12655[0].slice(0, -1)).concat(rawwritestacktrace_12628()); } else { buf_12655[0] = rawwritestacktrace_12628();};
var cbuf_12801 = toJSStr(buf_12655[0]);
framePtr = null;
  if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_12801);
  }
  else {
    throw cbuf_12801;
  }
  }
function raiseOverflow() {

var e_13236 = null;
e_13236 = {m_type: NTI3440, parent: null, name: null, message: null, trace: null};
e_13236.message = nimCopy(null, makeNimstrLit("over- or underflow"), NTI138);
raiseException(e_13236, "OverflowError");
}
function raiseDivByZero() {

var e_13252 = null;
e_13252 = {m_type: NTI3438, parent: null, name: null, message: null, trace: null};
e_13252.message = nimCopy(null, makeNimstrLit("division by zero"), NTI138);
raiseException(e_13252, "DivByZeroError");
}
var document = null;
function el_32026(tag_32028, parent_32029, next_32030) {

var result_32031 = null;
var F={procname:"model.el",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
F.line = 15;
result_32031 = document.createElement(tag_32028);
F.line = 16;
parent_32029.insertBefore(result_32031, next_32030);
framePtr = F.prev;
return result_32031;
}
function symbol_32032() {

var result_32034 = null;
var F={procname:"model.symbol",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
F.line = 19;
result_32034 = {el: el_32026("code", el_32026("p", document.body, null), null)};
framePtr = F.prev;
return result_32034;
}
function state_33017(class_33019, text_33020, pos_33021, prev_33022, next_33023) {

var result_33024 = null;
var F={procname:"model_spec.state",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model_spec.nim",line:0};
framePtr = F;
F.line = 13;
result_33024 = {class: class_33019, text: text_33020, pos: pos_33021, prev: prev_33022, next: next_33023};
framePtr = F.prev;
return result_33024;
}
function class_32036(self_32038) {

var Tmp1;
var result_32039 = 0;
var F={procname:"model.class",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
F.line = 22;
F.line = 22;
switch (toJSStr(cstrToNimstr(self_32038.el.className))) {
case "prefix": Tmp1 = 1;

break;
case "infix": Tmp1 = 2;

break;
default: 
Tmp1 = 0;
break;
}
result_32039 = Tmp1;
framePtr = F.prev;
return result_32039;
}
function text_32051(self_32053) {

var result_32054 = null;
var F={procname:"model.text",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
F.line = 34;
result_32054 = nimCopy(null, cstrToNimstr(self_32053.el.textContent), NTI138);
framePtr = F.prev;
return result_32054;
}
function raiseRangeError() {

var e_13268 = null;
e_13268 = {m_type: NTI3456, parent: null, name: null, message: null, trace: null};
e_13268.message = nimCopy(null, makeNimstrLit("value out of range"), NTI138);
raiseException(e_13268, "RangeError");
}
function pos_32059(self_32061) {

var Tmp1;
var result_32062 = 0;
var F={procname:"model.pos",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
F.line = 41;
F.line = 41;
var sel_32063 = document.getSelection();
if ((0 < sel_32063.rangeCount)) {
Tmp1 = chckRange(sel_32063.getRangeAt(0).startOffset, -2147483648, 2147483647);
}
else {
Tmp1 = -2147483648;
}

result_32062 = Tmp1;
framePtr = F.prev;
return result_32062;
}
function prev_32084(self_32086) {

var Tmp1;
var result_32087 = null;
var F={procname:"model.prev",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
F.line = 55;
F.line = 55;
var node_32088 = self_32086.el.previousSibling;
if (!((node_32088 == null))) {
Tmp1 = {el: node_32088};
}
else {
Tmp1 = null;
}

result_32087 = Tmp1;
framePtr = F.prev;
return result_32087;
}
function next_32102(self_32104) {

var Tmp1;
var result_32105 = null;
var F={procname:"model.next",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
F.line = 62;
F.line = 62;
var node_32106 = self_32104.el.nextSibling;
if (!((node_32106 == null))) {
Tmp1 = {el: node_32106};
}
else {
Tmp1 = null;
}

result_32105 = Tmp1;
framePtr = F.prev;
return result_32105;
}
function classHEX3D_32040(self_32042, val_32043) {

var F={procname:"model.class=",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
F.line = 31;
self_32042.el.className = toJSStr(cstrToNimstr(NTI32002.node.sons[val_32043].name));
framePtr = F.prev;
}
function textHEX3D_32055(self_32057, val_32058) {

var F={procname:"model.text=",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
F.line = 37;
self_32057.el.textContent = toJSStr(val_32058);
framePtr = F.prev;
}
function posHEX3D_32077(self_32079, val_32080) {

var F={procname:"model.pos=",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
F.line = 48;
var sel_32081 = document.getSelection();
F.line = 49;
var range_32082 = document.createRange();
range_32082.setStart(self_32079.el.firstChild, val_32080);
sel_32081.removeAllRanges();
sel_32081.addRange(range_32082);
framePtr = F.prev;
}
function del_32120(self_32122) {

var F={procname:"model.del",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
F.line = 69;
self_32122.el.parentNode.removeChild(self_32122.el);
framePtr = F.prev;
}
function HEX3Aanonymous_33126() {

function HEX3Aanonymous_33033() {

var F={procname:"model_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model_spec.nim",line:0};
framePtr = F;
F.line = 17;
var this_ = symbol_32032();
weknowhow.expect(state_33017(class_32036(this_), text_32051(this_), pos_32059(this_), prev_32084(this_), next_32102(this_)), "to equal", state_33017(0, makeNimstrLit(""), -2147483648, null, null));
framePtr = F.prev;
}
function HEX3Aanonymous_33050() {

var F={procname:"model_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model_spec.nim",line:0};
framePtr = F;
F.line = 17;
var this_ = symbol_32032();
classHEX3D_32040(this_, 0);
weknowhow.expect(state_33017(class_32036(this_), text_32051(this_), pos_32059(this_), prev_32084(this_), next_32102(this_)), "to equal", state_33017(0, makeNimstrLit(""), -2147483648, null, null));
framePtr = F.prev;
}
function HEX3Aanonymous_33067() {

var F={procname:"model_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model_spec.nim",line:0};
framePtr = F;
F.line = 17;
var this_ = symbol_32032();
classHEX3D_32040(this_, 1);
textHEX3D_32055(this_, makeNimstrLit("foo"));
weknowhow.expect(state_33017(class_32036(this_), text_32051(this_), pos_32059(this_), prev_32084(this_), next_32102(this_)), "to equal", state_33017(1, makeNimstrLit("foo"), -2147483648, null, null));
framePtr = F.prev;
}
function HEX3Aanonymous_33084() {

var F={procname:"model_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model_spec.nim",line:0};
framePtr = F;
F.line = 17;
var this_ = symbol_32032();
classHEX3D_32040(this_, 2);
textHEX3D_32055(this_, makeNimstrLit("->"));
weknowhow.expect(state_33017(class_32036(this_), text_32051(this_), pos_32059(this_), prev_32084(this_), next_32102(this_)), "to equal", state_33017(2, makeNimstrLit("->"), -2147483648, null, null));
framePtr = F.prev;
}
function HEX3Aanonymous_33099() {

var F={procname:"model_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model_spec.nim",line:0};
framePtr = F;
F.line = 17;
var this_ = symbol_32032();
textHEX3D_32055(this_, makeNimstrLit("buzz"));
posHEX3D_32077(this_, 2);
weknowhow.expect(state_33017(class_32036(this_), text_32051(this_), pos_32059(this_), prev_32084(this_), next_32102(this_)), "to equal", state_33017(0, makeNimstrLit("buzz"), 2, null, null));
framePtr = F.prev;
}
function HEX3Aanonymous_33112() {

var F={procname:"model_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model_spec.nim",line:0};
framePtr = F;
F.line = 17;
var this_ = symbol_32032();
textHEX3D_32055(this_, makeNimstrLit("foo"));
del_32120(this_);
weknowhow.expect(state_33017(class_32036(this_), text_32051(this_), pos_32059(this_), prev_32084(this_), next_32102(this_)), "to equal", state_33017(0, makeNimstrLit("foo"), 2, null, null));
framePtr = F.prev;
}
var F={procname:"model_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/test.nim",line:0};
framePtr = F;
specify("default", HEX3Aanonymous_33033);
specify("clear class", HEX3Aanonymous_33050);
specify("set prefix", HEX3Aanonymous_33067);
specify("set infix", HEX3Aanonymous_33084);
specify("set position", HEX3Aanonymous_33099);
specify("remove", HEX3Aanonymous_33112);
framePtr = F.prev;
}
describe("model", HEX3Aanonymous_33126);
function formula_32154() {

var result_32156 = null;
var F={procname:"model.formula",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
F.line = 97;
result_32156 = {curr: symbol_32032()};
framePtr = F.prev;
return result_32156;
}
function add_32123(self_32125, next_32126, class_32127, text_32128) {

var Tmp1;
var F={procname:"model.add",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
F.line = 76;
if (!((next_32126 == null))) {
Tmp1 = next_32126.el;
}
else {
Tmp1 = null;
}

var prev_32141 = {el: el_32026("code", self_32125.el.parentNode, Tmp1)};
classHEX3D_32040(prev_32141, class_32127);
textHEX3D_32055(prev_32141, text_32128);
framePtr = F.prev;
}
function prepend_32144(self_32146, class_32147, text_32148) {

var F={procname:"model.prepend",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
add_32123(self_32146, self_32146, class_32147, text_32148);
framePtr = F.prev;
}
function HEX5BHEX5D_20044(s_20046, x_20056) {

var result_20057 = null;
var F={procname:"system.[]",prev:framePtr,filename:"lib/nim/system.nim",line:0};
framePtr = F;
F.line = 3210;
result_20057 = nimCopy(null, (s_20046.slice(x_20056.a, (x_20056.b)+1).concat(0)), NTI138);
framePtr = F.prev;
return result_20057;
}
function HEX2EHEX2E_34011(a_34015, b_34017) {

var result_34019 = {a: 0, b: 0};
var F={procname:".....",prev:framePtr,filename:"lib/nim/system.nim",line:0};
framePtr = F;
F.line = 274;
result_34019.a = a_34015;
F.line = 275;
result_34019.b = b_34017;
framePtr = F.prev;
return result_34019;
}
function split_34005(self_34007) {

var F={procname:"action.split",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action.nim",line:0};
framePtr = F;
F.line = 4;
var text_34008 = text_32051(self_34007.curr);
F.line = 5;
var pos_34009 = pos_32059(self_34007.curr);
prepend_32144(self_34007.curr, class_32036(self_34007.curr), HEX5BHEX5D_20044(text_34008, HEX2EHEX2E_34011(0, subInt(pos_34009, 1))));
textHEX3D_32055(self_34007.curr, HEX5BHEX5D_20044(text_34008, HEX2EHEX2E_34011(pos_34009, subInt((text_34008 != null ? text_34008.length-1 : 0), 1))));
if (((text_32051(self_34007.curr) != null ? text_32051(self_34007.curr).length-1 : 0) == 0)) {
classHEX3D_32040(self_34007.curr, 0);
}

framePtr = F.prev;
}
function state_35007() {

var result_35009 = null;
var F={procname:"action_spec.state",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 8;
result_35009 = {};
framePtr = F.prev;
return result_35009;
}
function append_32149(self_32151, class_32152, text_32153) {

var F={procname:"model.append",prev:framePtr,filename:"/home/ken/Projects/mine/lib/model.nim",line:0};
framePtr = F;
add_32123(self_32151, next_32102(self_32151), class_32152, text_32153);
framePtr = F.prev;
}
function wedge_34030(self_34032) {

var F={procname:"action.wedge",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action.nim",line:0};
framePtr = F;
F.line = 12;
var class_34033 = class_32036(self_34032.curr);
F.line = 13;
var text_34034 = text_32051(self_34032.curr);
F.line = 14;
var pos_34035 = pos_32059(self_34032.curr);
if ((0 < pos_34035)) {
prepend_32144(self_34032.curr, class_34033, HEX5BHEX5D_20044(text_34034, HEX2EHEX2E_34011(0, subInt(pos_34035, 1))));
}

if ((pos_34035 < (text_34034 != null ? text_34034.length-1 : 0))) {
append_32149(self_34032.curr, class_34033, HEX5BHEX5D_20044(text_34034, HEX2EHEX2E_34011(pos_34035, subInt((text_34034 != null ? text_34034.length-1 : 0), 1))));
}

classHEX3D_32040(self_34032.curr, 0);
textHEX3D_32055(self_34032.curr, makeNimstrLit(""));
framePtr = F.prev;
}
function join_34056(curr_34058, old_34059, left_34060, right_34061) {

var F={procname:"action.join",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action.nim",line:0};
framePtr = F;
F.line = 24;
var lefttext_34062 = text_32051(left_34060);
classHEX3D_32040(curr_34058, class_32036(old_34059));
textHEX3D_32055(curr_34058, (lefttext_34062.slice(0,-1)).concat(text_32051(right_34061)));
posHEX3D_32077(curr_34058, (lefttext_34062 != null ? lefttext_34062.length-1 : 0));
del_32120(old_34059);
framePtr = F.prev;
}
function joinleft_34064(self_34066) {

var F={procname:"action.join_left",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action.nim",line:0};
framePtr = F;
F.line = 31;
var prev_34067 = prev_32084(self_34066.curr);
if (!((prev_34067 == null))) {
join_34056(self_34066.curr, prev_34067, prev_34067, self_34066.curr);
}

framePtr = F.prev;
}
function joinright_34080(self_34082) {

var F={procname:"action.join_right",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action.nim",line:0};
framePtr = F;
F.line = 36;
var next_34083 = next_32102(self_34082.curr);
if (!((next_34083 == null))) {
join_34056(self_34082.curr, next_34083, self_34082.curr, next_34083);
}

framePtr = F.prev;
}
function HEX3Aanonymous_35230() {

function HEX3Aanonymous_35043() {

function HEX3Aanonymous_35016() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
classHEX3D_32040(this_.curr, 1);
textHEX3D_32055(this_.curr, makeNimstrLit("foo"));
posHEX3D_32077(this_.curr, 3);
split_34005(this_);
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
function HEX3Aanonymous_35029() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
classHEX3D_32040(this_.curr, 1);
textHEX3D_32055(this_.curr, makeNimstrLit("foobuzz"));
posHEX3D_32077(this_.curr, 3);
split_34005(this_);
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/test.nim",line:0};
framePtr = F;
specify("after text", HEX3Aanonymous_35016);
specify("in between", HEX3Aanonymous_35029);
framePtr = F.prev;
}
function HEX3Aanonymous_35085() {

function HEX3Aanonymous_35045() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
prepend_32144(this_.curr, 1, makeNimstrLit("foo"));
classHEX3D_32040(this_.curr, 1);
textHEX3D_32055(this_.curr, makeNimstrLit("buzz"));
posHEX3D_32077(this_.curr, 0);
wedge_34030(this_);
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
function HEX3Aanonymous_35058() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
classHEX3D_32040(this_.curr, 1);
textHEX3D_32055(this_.curr, makeNimstrLit("foo"));
posHEX3D_32077(this_.curr, 3);
wedge_34030(this_);
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
function HEX3Aanonymous_35071() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
classHEX3D_32040(this_.curr, 1);
textHEX3D_32055(this_.curr, makeNimstrLit("foobuzz"));
posHEX3D_32077(this_.curr, 3);
wedge_34030(this_);
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/test.nim",line:0};
framePtr = F;
specify("before text", HEX3Aanonymous_35045);
specify("after text", HEX3Aanonymous_35058);
specify("in between", HEX3Aanonymous_35071);
framePtr = F.prev;
}
function HEX3Aanonymous_35127() {

function HEX3Aanonymous_35087() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
classHEX3D_32040(this_.curr, 1);
textHEX3D_32055(this_.curr, makeNimstrLit("foo"));
joinleft_34064(this_);
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
function HEX3Aanonymous_35100() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
prepend_32144(this_.curr, 1, makeNimstrLit("foo"));
joinleft_34064(this_);
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
function HEX3Aanonymous_35113() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
prepend_32144(this_.curr, 1, makeNimstrLit("foo"));
classHEX3D_32040(this_.curr, 1);
textHEX3D_32055(this_.curr, makeNimstrLit("buzz"));
joinleft_34064(this_);
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/test.nim",line:0};
framePtr = F;
specify("at top", HEX3Aanonymous_35087);
specify("before empty", HEX3Aanonymous_35100);
specify("in between", HEX3Aanonymous_35113);
framePtr = F.prev;
}
function HEX3Aanonymous_35169() {

function HEX3Aanonymous_35129() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
classHEX3D_32040(this_.curr, 1);
textHEX3D_32055(this_.curr, makeNimstrLit("foo"));
joinright_34080(this_);
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
function HEX3Aanonymous_35142() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
append_32149(this_.curr, 1, makeNimstrLit("foo"));
joinright_34080(this_);
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
function HEX3Aanonymous_35155() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
classHEX3D_32040(this_.curr, 1);
textHEX3D_32055(this_.curr, makeNimstrLit("foo"));
append_32149(this_.curr, 1, makeNimstrLit("buzz"));
joinright_34080(this_);
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/test.nim",line:0};
framePtr = F;
specify("at bottom", HEX3Aanonymous_35129);
specify("after empty", HEX3Aanonymous_35142);
specify("in between", HEX3Aanonymous_35155);
framePtr = F.prev;
}
function HEX3Aanonymous_35198() {

function HEX3Aanonymous_35171() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
function HEX3Aanonymous_35184() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/test.nim",line:0};
framePtr = F;
specify("at top", HEX3Aanonymous_35171);
specify("in between", HEX3Aanonymous_35184);
framePtr = F.prev;
}
function HEX3Aanonymous_35227() {

function HEX3Aanonymous_35200() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
function HEX3Aanonymous_35213() {

var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/action_spec.nim",line:0};
framePtr = F;
F.line = 12;
var this_ = formula_32154();
weknowhow.expect(state_35007(), "to equal", state_35007());
framePtr = F.prev;
}
var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/test.nim",line:0};
framePtr = F;
specify("in between", HEX3Aanonymous_35200);
specify("at bottom", HEX3Aanonymous_35213);
framePtr = F.prev;
}
var F={procname:"action_spec.:anonymous",prev:framePtr,filename:"/home/ken/Projects/mine/lib/test.nim",line:0};
framePtr = F;
describe("split", HEX3Aanonymous_35043);
describe("wedge", HEX3Aanonymous_35085);
describe("join left", HEX3Aanonymous_35127);
describe("join right", HEX3Aanonymous_35169);
describe("shift left", HEX3Aanonymous_35198);
describe("shift right", HEX3Aanonymous_35227);
framePtr = F.prev;
}
describe("action", HEX3Aanonymous_35230);
