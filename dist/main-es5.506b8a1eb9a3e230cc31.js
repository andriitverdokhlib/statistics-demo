function _defineProperty(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}) : t[e] = n, t
}

function _slicedToArray(t, e) {
  return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _unsupportedIterableToArray(t, e) || _nonIterableRest()
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _iterableToArrayLimit(t, e) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
    var n = [], r = !0, i = !1, a = void 0;
    try {
      for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0) ;
    } catch (l) {
      i = !0, a = l
    } finally {
      try {
        r || null == s.return || s.return()
      } finally {
        if (i) throw a
      }
    }
    return n
  }
}

function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t
}

function _toConsumableArray(t) {
  return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread()
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _iterableToArray(t) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
}

function _arrayWithoutHoles(t) {
  if (Array.isArray(t)) return _arrayLikeToArray(t)
}

function _createForOfIteratorHelper(t) {
  if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (t = _unsupportedIterableToArray(t))) {
      var e = 0, n = function () {
      };
      return {
        s: n, n: function () {
          return e >= t.length ? {done: !0} : {done: !1, value: t[e++]}
        }, e: function (t) {
          throw t
        }, f: n
      }
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }
  var r, i, a = !0, o = !1;
  return {
    s: function () {
      r = t[Symbol.iterator]()
    }, n: function () {
      var t = r.next();
      return a = t.done, t
    }, e: function (t) {
      o = !0, i = t
    }, f: function () {
      try {
        a || null == r.return || r.return()
      } finally {
        if (o) throw i
      }
    }
  }
}

function _unsupportedIterableToArray(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(t, e) : void 0
  }
}

function _arrayLikeToArray(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r
}

function _construct(t, e, n) {
  return (_construct = _isNativeReflectConstruct() ? Reflect.construct : function (t, e, n) {
    var r = [null];
    r.push.apply(r, e);
    var i = new (Function.bind.apply(t, r));
    return n && _setPrototypeOf(i, n.prototype), i
  }).apply(null, arguments)
}

function _get(t, e, n) {
  return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
    var r = _superPropBase(t, e);
    if (r) {
      var i = Object.getOwnPropertyDescriptor(r, e);
      return i.get ? i.get.call(n) : i.value
    }
  })(t, e, n || t)
}

function _superPropBase(t, e) {
  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t));) ;
  return t
}

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), e && _setPrototypeOf(t, e)
}

function _setPrototypeOf(t, e) {
  return (_setPrototypeOf = Object.setPrototypeOf || function (t, e) {
    return t.__proto__ = e, t
  })(t, e)
}

function _createSuper(t) {
  return function () {
    var e, n = _getPrototypeOf(t);
    if (_isNativeReflectConstruct()) {
      var r = _getPrototypeOf(this).constructor;
      e = Reflect.construct(n, arguments, r)
    } else e = n.apply(this, arguments);
    return _possibleConstructorReturn(this, e)
  }
}

function _possibleConstructorReturn(t, e) {
  return !e || "object" != typeof e && "function" != typeof e ? _assertThisInitialized(t) : e
}

function _assertThisInitialized(t) {
  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}

function _isNativeReflectConstruct() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
    }))), !0
  } catch (t) {
    return !1
  }
}

function _getPrototypeOf(t) {
  return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t)
  })(t)
}

function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
  }
}

function _createClass(t, e, n) {
  return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t
}

(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
  0: function (t, e, n) {
    t.exports = n("zUnb")
  }, zUnb: function (t, e, n) {
    "use strict";

    function r(t) {
      return "function" == typeof t
    }

    n.r(e);
    var i = !1, a = {
      Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) {
        if (t) {
          var e = new Error;
          console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + e.stack)
        } else i && console.log("RxJS: Back to a better error behavior. Thank you. <3");
        i = t
      }, get useDeprecatedSynchronousErrorHandling() {
        return i
      }
    };

    function o(t) {
      setTimeout((function () {
        throw t
      }), 0)
    }

    var s = {
      closed: !0, next: function (t) {
      }, error: function (t) {
        if (a.useDeprecatedSynchronousErrorHandling) throw t;
        o(t)
      }, complete: function () {
      }
    }, l = Array.isArray || function (t) {
      return t && "number" == typeof t.length
    };

    function u(t) {
      return null !== t && "object" == typeof t
    }

    var c, h, f = function () {
      function t(t) {
        return Error.call(this), this.message = t ? "".concat(t.length, " errors occurred during unsubscription:\n").concat(t.map((function (t, e) {
          return "".concat(e + 1, ") ").concat(t.toString())
        })).join("\n  ")) : "", this.name = "UnsubscriptionError", this.errors = t, this
      }

      return t.prototype = Object.create(Error.prototype), t
    }(), d = ((h = function () {
      function t(e) {
        _classCallCheck(this, t), this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._unsubscribe = e)
      }

      return _createClass(t, [{
        key: "unsubscribe", value: function () {
          var e;
          if (!this.closed) {
            var n = this._parentOrParents, i = this._unsubscribe, a = this._subscriptions;
            if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this); else if (null !== n) for (var o = 0; o < n.length; ++o) n[o].remove(this);
            if (r(i)) try {
              i.call(this)
            } catch (d) {
              e = d instanceof f ? p(d.errors) : [d]
            }
            if (l(a)) for (var s = -1, c = a.length; ++s < c;) {
              var h = a[s];
              if (u(h)) try {
                h.unsubscribe()
              } catch (d) {
                e = e || [], d instanceof f ? e = e.concat(p(d.errors)) : e.push(d)
              }
            }
            if (e) throw new f(e)
          }
        }
      }, {
        key: "add", value: function (e) {
          var n = e;
          if (!e) return t.EMPTY;
          switch (typeof e) {
            case"function":
              n = new t(e);
            case"object":
              if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
              if (this.closed) return n.unsubscribe(), n;
              if (!(n instanceof t)) {
                var r = n;
                (n = new t)._subscriptions = [r]
              }
              break;
            default:
              throw new Error("unrecognized teardown " + e + " added to Subscription.")
          }
          var i = n._parentOrParents;
          if (null === i) n._parentOrParents = this; else if (i instanceof t) {
            if (i === this) return n;
            n._parentOrParents = [i, this]
          } else {
            if (-1 !== i.indexOf(this)) return n;
            i.push(this)
          }
          var a = this._subscriptions;
          return null === a ? this._subscriptions = [n] : a.push(n), n
        }
      }, {
        key: "remove", value: function (t) {
          var e = this._subscriptions;
          if (e) {
            var n = e.indexOf(t);
            -1 !== n && e.splice(n, 1)
          }
        }
      }]), t
    }()).EMPTY = ((c = new h).closed = !0, c), h);

    function p(t) {
      return t.reduce((function (t, e) {
        return t.concat(e instanceof f ? e.errors : e)
      }), [])
    }

    var v = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(), g = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i) {
        var a;
        switch (_classCallCheck(this, n), (a = e.call(this)).syncErrorValue = null, a.syncErrorThrown = !1, a.syncErrorThrowable = !1, a.isStopped = !1, arguments.length) {
          case 0:
            a.destination = s;
            break;
          case 1:
            if (!t) {
              a.destination = s;
              break
            }
            if ("object" == typeof t) {
              t instanceof n ? (a.syncErrorThrowable = t.syncErrorThrowable, a.destination = t, t.add(_assertThisInitialized(a))) : (a.syncErrorThrowable = !0, a.destination = new y(_assertThisInitialized(a), t));
              break
            }
          default:
            a.syncErrorThrowable = !0, a.destination = new y(_assertThisInitialized(a), t, r, i)
        }
        return a
      }

      return _createClass(n, [{
        key: v, value: function () {
          return this
        }
      }, {
        key: "next", value: function (t) {
          this.isStopped || this._next(t)
        }
      }, {
        key: "error", value: function (t) {
          this.isStopped || (this.isStopped = !0, this._error(t))
        }
      }, {
        key: "complete", value: function () {
          this.isStopped || (this.isStopped = !0, this._complete())
        }
      }, {
        key: "unsubscribe", value: function () {
          this.closed || (this.isStopped = !0, _get(_getPrototypeOf(n.prototype), "unsubscribe", this).call(this))
        }
      }, {
        key: "_next", value: function (t) {
          this.destination.next(t)
        }
      }, {
        key: "_error", value: function (t) {
          this.destination.error(t), this.unsubscribe()
        }
      }, {
        key: "_complete", value: function () {
          this.destination.complete(), this.unsubscribe()
        }
      }, {
        key: "_unsubscribeAndRecycle", value: function () {
          var t = this._parentOrParents;
          return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
        }
      }], [{
        key: "create", value: function (t, e, r) {
          var i = new n(t, e, r);
          return i.syncErrorThrowable = !1, i
        }
      }]), n
    }(d), y = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, i, a, o) {
        var l, u;
        _classCallCheck(this, n), (l = e.call(this))._parentSubscriber = t;
        var c = _assertThisInitialized(l);
        return r(i) ? u = i : i && (u = i.next, a = i.error, o = i.complete, i !== s && (r((c = Object.create(i)).unsubscribe) && l.add(c.unsubscribe.bind(c)), c.unsubscribe = l.unsubscribe.bind(_assertThisInitialized(l)))), l._context = c, l._next = u, l._error = a, l._complete = o, l
      }

      return _createClass(n, [{
        key: "next", value: function (t) {
          if (!this.isStopped && this._next) {
            var e = this._parentSubscriber;
            a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
          }
        }
      }, {
        key: "error", value: function (t) {
          if (!this.isStopped) {
            var e = this._parentSubscriber, n = a.useDeprecatedSynchronousErrorHandling;
            if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe()); else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : o(t), this.unsubscribe(); else {
              if (this.unsubscribe(), n) throw t;
              o(t)
            }
          }
        }
      }, {
        key: "complete", value: function () {
          var t = this;
          if (!this.isStopped) {
            var e = this._parentSubscriber;
            if (this._complete) {
              var n = function () {
                return t._complete.call(t._context)
              };
              a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
            } else this.unsubscribe()
          }
        }
      }, {
        key: "__tryOrUnsub", value: function (t, e) {
          try {
            t.call(this._context, e)
          } catch (n) {
            if (this.unsubscribe(), a.useDeprecatedSynchronousErrorHandling) throw n;
            o(n)
          }
        }
      }, {
        key: "__tryOrSetError", value: function (t, e, n) {
          if (!a.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
          try {
            e.call(this._context, n)
          } catch (r) {
            return a.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (o(r), !0)
          }
          return !1
        }
      }, {
        key: "_unsubscribe", value: function () {
          var t = this._parentSubscriber;
          this._context = null, this._parentSubscriber = null, t.unsubscribe()
        }
      }]), n
    }(g), m = "function" == typeof Symbol && Symbol.observable || "@@observable";

    function _(t) {
      return t
    }

    function k() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
      return b(e)
    }

    function b(t) {
      return 0 === t.length ? _ : 1 === t.length ? t[0] : function (e) {
        return t.reduce((function (t, e) {
          return e(t)
        }), e)
      }
    }

    var w, C = ((w = function () {
      function t(e) {
        _classCallCheck(this, t), this._isScalar = !1, e && (this._subscribe = e)
      }

      return _createClass(t, [{
        key: "lift", value: function (e) {
          var n = new t;
          return n.source = this, n.operator = e, n
        }
      }, {
        key: "subscribe", value: function (t, e, n) {
          var r = this.operator, i = function (t, e, n) {
            if (t) {
              if (t instanceof g) return t;
              if (t[v]) return t[v]()
            }
            return t || e || n ? new g(t, e, n) : new g(s)
          }(t, e, n);
          if (i.add(r ? r.call(i, this.source) : this.source || a.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), a.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
          return i
        }
      }, {
        key: "_trySubscribe", value: function (t) {
          try {
            return this._subscribe(t)
          } catch (e) {
            a.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), function (t) {
              for (; t;) {
                var e = t, n = e.closed, r = e.destination, i = e.isStopped;
                if (n || i) return !1;
                t = r && r instanceof g ? r : null
              }
              return !0
            }(t) ? t.error(e) : console.warn(e)
          }
        }
      }, {
        key: "forEach", value: function (t, e) {
          var n = this;
          return new (e = x(e))((function (e, r) {
            var i;
            i = n.subscribe((function (e) {
              try {
                t(e)
              } catch (n) {
                r(n), i && i.unsubscribe()
              }
            }), r, e)
          }))
        }
      }, {
        key: "_subscribe", value: function (t) {
          var e = this.source;
          return e && e.subscribe(t)
        }
      }, {
        key: m, value: function () {
          return this
        }
      }, {
        key: "pipe", value: function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
          return 0 === e.length ? this : b(e)(this)
        }
      }, {
        key: "toPromise", value: function (t) {
          var e = this;
          return new (t = x(t))((function (t, n) {
            var r;
            e.subscribe((function (t) {
              return r = t
            }), (function (t) {
              return n(t)
            }), (function () {
              return t(r)
            }))
          }))
        }
      }]), t
    }()).create = function (t) {
      return new w(t)
    }, w);

    function x(t) {
      if (t || (t = a.Promise || Promise), !t) throw new Error("no Promise impl found");
      return t
    }

    var S, T = function () {
      function t() {
        return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
      }

      return t.prototype = Object.create(Error.prototype), t
    }(), E = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this)).subject = t, i.subscriber = r, i.closed = !1, i
      }

      return _createClass(n, [{
        key: "unsubscribe", value: function () {
          if (!this.closed) {
            this.closed = !0;
            var t = this.subject, e = t.observers;
            if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
              var n = e.indexOf(this.subscriber);
              -1 !== n && e.splice(n, 1)
            }
          }
        }
      }]), n
    }(d), A = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t) {
        var r;
        return _classCallCheck(this, n), (r = e.call(this, t)).destination = t, r
      }

      return n
    }(g), O = ((S = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        var t;
        return _classCallCheck(this, n), (t = e.call(this)).observers = [], t.closed = !1, t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
      }

      return _createClass(n, [{
        key: v, value: function () {
          return new A(this)
        }
      }, {
        key: "lift", value: function (t) {
          var e = new L(this, this);
          return e.operator = t, e
        }
      }, {
        key: "next", value: function (t) {
          if (this.closed) throw new T;
          if (!this.isStopped) for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++) r[i].next(t)
        }
      }, {
        key: "error", value: function (t) {
          if (this.closed) throw new T;
          this.hasError = !0, this.thrownError = t, this.isStopped = !0;
          for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++) r[i].error(t);
          this.observers.length = 0
        }
      }, {
        key: "complete", value: function () {
          if (this.closed) throw new T;
          this.isStopped = !0;
          for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
          this.observers.length = 0
        }
      }, {
        key: "unsubscribe", value: function () {
          this.isStopped = !0, this.closed = !0, this.observers = null
        }
      }, {
        key: "_trySubscribe", value: function (t) {
          if (this.closed) throw new T;
          return _get(_getPrototypeOf(n.prototype), "_trySubscribe", this).call(this, t)
        }
      }, {
        key: "_subscribe", value: function (t) {
          if (this.closed) throw new T;
          return this.hasError ? (t.error(this.thrownError), d.EMPTY) : this.isStopped ? (t.complete(), d.EMPTY) : (this.observers.push(t), new E(this, t))
        }
      }, {
        key: "asObservable", value: function () {
          var t = new C;
          return t.source = this, t
        }
      }]), n
    }(C)).create = function (t, e) {
      return new L(t, e)
    }, S), L = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this)).destination = t, i.source = r, i
      }

      return _createClass(n, [{
        key: "next", value: function (t) {
          var e = this.destination;
          e && e.next && e.next(t)
        }
      }, {
        key: "error", value: function (t) {
          var e = this.destination;
          e && e.error && this.destination.error(t)
        }
      }, {
        key: "complete", value: function () {
          var t = this.destination;
          t && t.complete && this.destination.complete()
        }
      }, {
        key: "_subscribe", value: function (t) {
          return this.source ? this.source.subscribe(t) : d.EMPTY
        }
      }]), n
    }(O);

    function P(t) {
      return t && "function" == typeof t.schedule
    }

    var M = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i) {
        var a;
        return _classCallCheck(this, n), (a = e.call(this)).parent = t, a.outerValue = r, a.outerIndex = i, a.index = 0, a
      }

      return _createClass(n, [{
        key: "_next", value: function (t) {
          this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
        }
      }, {
        key: "_error", value: function (t) {
          this.parent.notifyError(t, this), this.unsubscribe()
        }
      }, {
        key: "_complete", value: function () {
          this.parent.notifyComplete(this), this.unsubscribe()
        }
      }]), n
    }(g), D = function (t) {
      return function (e) {
        for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
        e.complete()
      }
    };
    var I = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator", R = function (t) {
      return t && "number" == typeof t.length && "function" != typeof t
    };

    function F(t) {
      return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
    }

    var N = function (t) {
      if (t && "function" == typeof t[m]) return r = t, function (t) {
        var e = r[m]();
        if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
        return e.subscribe(t)
      };
      if (R(t)) return D(t);
      if (F(t)) return n = t, function (t) {
        return n.then((function (e) {
          t.closed || (t.next(e), t.complete())
        }), (function (e) {
          return t.error(e)
        })).then(null, o), t
      };
      if (t && "function" == typeof t[I]) return e = t, function (t) {
        for (var n = e[I](); ;) {
          var r = n.next();
          if (r.done) {
            t.complete();
            break
          }
          if (t.next(r.value), t.closed) break
        }
        return "function" == typeof n.return && t.add((function () {
          n.return && n.return()
        })), t
      };
      var e, n, r, i = u(t) ? "an invalid object" : "'".concat(t, "'");
      throw new TypeError("You provided ".concat(i, " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."))
    };

    function j(t, e, n, r) {
      var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new M(t, n, r);
      if (!i.closed) return e instanceof C ? e.subscribe(i) : N(e)(i)
    }

    var H = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        return _classCallCheck(this, n), e.apply(this, arguments)
      }

      return _createClass(n, [{
        key: "notifyNext", value: function (t, e, n, r, i) {
          this.destination.next(e)
        }
      }, {
        key: "notifyError", value: function (t, e) {
          this.destination.error(t)
        }
      }, {
        key: "notifyComplete", value: function (t) {
          this.destination.complete()
        }
      }]), n
    }(g);

    function U(t, e) {
      return function (n) {
        if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        return n.lift(new z(t, e))
      }
    }

    var z = function () {
      function t(e, n) {
        _classCallCheck(this, t), this.project = e, this.thisArg = n
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new V(t, this.project, this.thisArg))
        }
      }]), t
    }(), V = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i) {
        var a;
        return _classCallCheck(this, n), (a = e.call(this, t)).project = r, a.count = 0, a.thisArg = i || _assertThisInitialized(a), a
      }

      return _createClass(n, [{
        key: "_next", value: function (t) {
          var e;
          try {
            e = this.project.call(this.thisArg, t, this.count++)
          } catch (n) {
            return void this.destination.error(n)
          }
          this.destination.next(e)
        }
      }]), n
    }(g);

    function B(t, e) {
      return new C((function (n) {
        var r = new d, i = 0;
        return r.add(e.schedule((function () {
          i !== t.length ? (n.next(t[i++]), n.closed || r.add(this.schedule())) : n.complete()
        }))), r
      }))
    }

    function q(t, e) {
      return e ? function (t, e) {
        if (null != t) {
          if (function (t) {
            return t && "function" == typeof t[m]
          }(t)) return function (t, e) {
            return new C((function (n) {
              var r = new d;
              return r.add(e.schedule((function () {
                var i = t[m]();
                r.add(i.subscribe({
                  next: function (t) {
                    r.add(e.schedule((function () {
                      return n.next(t)
                    })))
                  }, error: function (t) {
                    r.add(e.schedule((function () {
                      return n.error(t)
                    })))
                  }, complete: function () {
                    r.add(e.schedule((function () {
                      return n.complete()
                    })))
                  }
                }))
              }))), r
            }))
          }(t, e);
          if (F(t)) return function (t, e) {
            return new C((function (n) {
              var r = new d;
              return r.add(e.schedule((function () {
                return t.then((function (t) {
                  r.add(e.schedule((function () {
                    n.next(t), r.add(e.schedule((function () {
                      return n.complete()
                    })))
                  })))
                }), (function (t) {
                  r.add(e.schedule((function () {
                    return n.error(t)
                  })))
                }))
              }))), r
            }))
          }(t, e);
          if (R(t)) return B(t, e);
          if (function (t) {
            return t && "function" == typeof t[I]
          }(t) || "string" == typeof t) return function (t, e) {
            if (!t) throw new Error("Iterable cannot be null");
            return new C((function (n) {
              var r, i = new d;
              return i.add((function () {
                r && "function" == typeof r.return && r.return()
              })), i.add(e.schedule((function () {
                r = t[I](), i.add(e.schedule((function () {
                  if (!n.closed) {
                    var t, e;
                    try {
                      var i = r.next();
                      t = i.value, e = i.done
                    } catch (a) {
                      return void n.error(a)
                    }
                    e ? n.complete() : (n.next(t), this.schedule())
                  }
                })))
              }))), i
            }))
          }(t, e)
        }
        throw new TypeError((null !== t && typeof t || t) + " is not observable")
      }(t, e) : t instanceof C ? t : new C(N(t))
    }

    function W(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
      return "function" == typeof e ? function (r) {
        return r.pipe(W((function (n, r) {
          return q(t(n, r)).pipe(U((function (t, i) {
            return e(n, t, r, i)
          })))
        }), n))
      } : ("number" == typeof e && (n = e), function (e) {
        return e.lift(new G(t, n))
      })
    }

    var G = function () {
      function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.POSITIVE_INFINITY;
        _classCallCheck(this, t), this.project = e, this.concurrent = n
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new Q(t, this.project, this.concurrent))
        }
      }]), t
    }(), Q = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
        return _classCallCheck(this, n), (i = e.call(this, t)).project = r, i.concurrent = a, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i
      }

      return _createClass(n, [{
        key: "_next", value: function (t) {
          this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
        }
      }, {
        key: "_tryNext", value: function (t) {
          var e, n = this.index++;
          try {
            e = this.project(t, n)
          } catch (r) {
            return void this.destination.error(r)
          }
          this.active++, this._innerSub(e, t, n)
        }
      }, {
        key: "_innerSub", value: function (t, e, n) {
          var r = new M(this, e, n), i = this.destination;
          i.add(r);
          var a = j(this, t, void 0, void 0, r);
          a !== r && i.add(a)
        }
      }, {
        key: "_complete", value: function () {
          this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
        }
      }, {
        key: "notifyNext", value: function (t, e, n, r, i) {
          this.destination.next(e)
        }
      }, {
        key: "notifyComplete", value: function (t) {
          var e = this.buffer;
          this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
        }
      }]), n
    }(H);

    function Y() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.POSITIVE_INFINITY;
      return W(_, t)
    }

    function Z(t, e) {
      return e ? B(t, e) : new C(D(t))
    }

    function X() {
      return function (t) {
        return t.lift(new $(t))
      }
    }

    var K, $ = function () {
      function t(e) {
        _classCallCheck(this, t), this.connectable = e
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          var n = this.connectable;
          n._refCount++;
          var r = new J(t, n), i = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), i
        }
      }]), t
    }(), J = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this, t)).connectable = r, i
      }

      return _createClass(n, [{
        key: "_unsubscribe", value: function () {
          var t = this.connectable;
          if (t) {
            this.connectable = null;
            var e = t._refCount;
            if (e <= 0) this.connection = null; else if (t._refCount = e - 1, e > 1) this.connection = null; else {
              var n = this.connection, r = t._connection;
              this.connection = null, !r || n && r !== n || r.unsubscribe()
            }
          } else this.connection = null
        }
      }]), n
    }(g), tt = {
      operator: {value: null},
      _refCount: {value: 0, writable: !0},
      _subject: {value: null, writable: !0},
      _connection: {value: null, writable: !0},
      _subscribe: {
        value: (K = function (t) {
          _inherits(n, t);
          var e = _createSuper(n);

          function n(t, r) {
            var i;
            return _classCallCheck(this, n), (i = e.call(this)).source = t, i.subjectFactory = r, i._refCount = 0, i._isComplete = !1, i
          }

          return _createClass(n, [{
            key: "_subscribe", value: function (t) {
              return this.getSubject().subscribe(t)
            }
          }, {
            key: "getSubject", value: function () {
              var t = this._subject;
              return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
            }
          }, {
            key: "connect", value: function () {
              var t = this._connection;
              return t || (this._isComplete = !1, (t = this._connection = new d).add(this.source.subscribe(new et(this.getSubject(), this))), t.closed && (this._connection = null, t = d.EMPTY)), t
            }
          }, {
            key: "refCount", value: function () {
              return X()(this)
            }
          }]), n
        }(C).prototype)._subscribe
      },
      _isComplete: {value: K._isComplete, writable: !0},
      getSubject: {value: K.getSubject},
      connect: {value: K.connect},
      refCount: {value: K.refCount}
    }, et = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this, t)).connectable = r, i
      }

      return _createClass(n, [{
        key: "_error", value: function (t) {
          this._unsubscribe(), _get(_getPrototypeOf(n.prototype), "_error", this).call(this, t)
        }
      }, {
        key: "_complete", value: function () {
          this.connectable._isComplete = !0, this._unsubscribe(), _get(_getPrototypeOf(n.prototype), "_complete", this).call(this)
        }
      }, {
        key: "_unsubscribe", value: function () {
          var t = this.connectable;
          if (t) {
            this.connectable = null;
            var e = t._connection;
            t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
          }
        }
      }]), n
    }(A);

    function nt() {
      return new O
    }

    function rt(t) {
      return {toString: t}.toString()
    }

    function it(t, e, n) {
      return rt((function () {
        var r = function (t) {
          return function () {
            if (t) {
              var e = t.apply(void 0, arguments);
              for (var n in e) this[n] = e[n]
            }
          }
        }(e);

        function i() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
          if (this instanceof i) return r.apply(this, e), this;
          var a = _construct(i, e);
          return o.annotation = a, o;

          function o(t, e, n) {
            for (var r = t.hasOwnProperty("__parameters__") ? t.__parameters__ : Object.defineProperty(t, "__parameters__", {value: []}).__parameters__; r.length <= n;) r.push(null);
            return (r[n] = r[n] || []).push(a), t
          }
        }

        return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = t, i.annotationCls = i, i
      }))
    }

    var at = it("Inject", (function (t) {
      return {token: t}
    })), ot = it("Optional"), st = it("Self"), lt = it("SkipSelf"), ut = function (t) {
      return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
    }({});

    function ct(t) {
      for (var e in t) if (t[e] === ct) return e;
      throw Error("Could not find renamed property on target object.")
    }

    function ht(t, e) {
      for (var n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
    }

    function ft(t) {
      return {token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0}
    }

    function dt(t) {
      return {factory: t.factory, providers: t.providers || [], imports: t.imports || []}
    }

    function pt(t) {
      return vt(t, t[yt]) || vt(t, t[kt])
    }

    function vt(t, e) {
      return e && e.token === t ? e : null
    }

    function gt(t) {
      return t && (t.hasOwnProperty(mt) || t.hasOwnProperty(bt)) ? t[mt] : null
    }

    var yt = ct({"\u0275prov": ct}), mt = ct({"\u0275inj": ct}), _t = ct({"\u0275provFallback": ct}),
      kt = ct({ngInjectableDef: ct}), bt = ct({ngInjectorDef: ct});

    function wt(t) {
      if ("string" == typeof t) return t;
      if (Array.isArray(t)) return "[" + t.map(wt).join(", ") + "]";
      if (null == t) return "" + t;
      if (t.overriddenName) return "" + t.overriddenName;
      if (t.name) return "" + t.name;
      var e = t.toString();
      if (null == e) return "" + e;
      var n = e.indexOf("\n");
      return -1 === n ? e : e.substring(0, n)
    }

    function Ct(t, e) {
      return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e
    }

    var xt = ct({__forward_ref__: ct});

    function St(t) {
      return t.__forward_ref__ = St, t.toString = function () {
        return wt(this())
      }, t
    }

    function Tt(t) {
      return Et(t) ? t() : t
    }

    function Et(t) {
      return "function" == typeof t && t.hasOwnProperty(xt) && t.__forward_ref__ === St
    }

    var At, Ot = "undefined" != typeof globalThis && globalThis, Lt = "undefined" != typeof window && window,
      Pt = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
      Mt = "undefined" != typeof global && global, Dt = Ot || Mt || Lt || Pt, It = ct({"\u0275cmp": ct}),
      Rt = ct({"\u0275dir": ct}), Ft = ct({"\u0275pipe": ct}), Nt = ct({"\u0275mod": ct}), jt = ct({"\u0275loc": ct}),
      Ht = ct({"\u0275fac": ct}), Ut = ct({__NG_ELEMENT_ID__: ct}), zt = function () {
        function t(e, n) {
          _classCallCheck(this, t), this._desc = e, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = ft({
            token: this,
            providedIn: n.providedIn || "root",
            factory: n.factory
          }))
        }

        return _createClass(t, [{
          key: "toString", value: function () {
            return "InjectionToken " + this._desc
          }
        }]), t
      }(), Vt = new zt("INJECTOR", -1), Bt = {}, qt = /\n/gm, Wt = ct({provide: String, useValue: ct}), Gt = void 0;

    function Qt(t) {
      var e = Gt;
      return Gt = t, e
    }

    function Yt(t) {
      var e = At;
      return At = t, e
    }

    function Zt(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ut.Default;
      if (void 0 === Gt) throw new Error("inject() must be called from an injection context");
      return null === Gt ? Kt(t, void 0, e) : Gt.get(t, e & ut.Optional ? null : void 0, e)
    }

    function Xt(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ut.Default;
      return (At || Zt)(Tt(t), e)
    }

    function Kt(t, e, n) {
      var r = pt(t);
      if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value;
      if (n & ut.Optional) return null;
      if (void 0 !== e) return e;
      throw new Error("Injector: NOT_FOUND [".concat(wt(t), "]"))
    }

    function $t(t) {
      for (var e = [], n = 0; n < t.length; n++) {
        var r = Tt(t[n]);
        if (Array.isArray(r)) {
          if (0 === r.length) throw new Error("Arguments array must have arguments.");
          for (var i = void 0, a = ut.Default, o = 0; o < r.length; o++) {
            var s = r[o];
            s instanceof ot || "Optional" === s.ngMetadataName || s === ot ? a |= ut.Optional : s instanceof lt || "SkipSelf" === s.ngMetadataName || s === lt ? a |= ut.SkipSelf : s instanceof st || "Self" === s.ngMetadataName || s === st ? a |= ut.Self : i = s instanceof at || s === at ? s.token : s
          }
          e.push(Xt(i, a))
        } else e.push(Xt(r))
      }
      return e
    }

    var Jt = function () {
      function t() {
        _classCallCheck(this, t)
      }

      return _createClass(t, [{
        key: "get", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bt;
          if (e === Bt) {
            var n = new Error("NullInjectorError: No provider for ".concat(wt(t), "!"));
            throw n.name = "NullInjectorError", n
          }
          return e
        }
      }]), t
    }(), te = function t() {
      _classCallCheck(this, t)
    }, ee = function t() {
      _classCallCheck(this, t)
    };

    function ne(t, e) {
      t.forEach((function (t) {
        return Array.isArray(t) ? ne(t, e) : e(t)
      }))
    }

    function re(t, e, n) {
      e >= t.length ? t.push(n) : t.splice(e, 0, n)
    }

    function ie(t, e) {
      return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
    }

    function ae(t, e) {
      for (var n = [], r = 0; r < t; r++) n.push(e);
      return n
    }

    function oe(t, e, n) {
      var r = le(t, e);
      return r >= 0 ? t[1 | r] = n : function (t, e, n, r) {
        var i = t.length;
        if (i == e) t.push(n, r); else if (1 === i) t.push(r, t[0]), t[0] = n; else {
          for (i--, t.push(t[i - 1], t[i]); i > e;) t[i] = t[i - 2], i--;
          t[e] = n, t[e + 1] = r
        }
      }(t, r = ~r, e, n), r
    }

    function se(t, e) {
      var n = le(t, e);
      if (n >= 0) return t[1 | n]
    }

    function le(t, e) {
      return function (t, e, n) {
        for (var r = 0, i = t.length >> 1; i !== r;) {
          var a = r + (i - r >> 1), o = t[a << 1];
          if (e === o) return a << 1;
          o > e ? i = a : r = a + 1
        }
        return ~(i << 1)
      }(t, e)
    }

    var ue = function () {
      var t = {OnPush: 0, Default: 1};
      return t[t.OnPush] = "OnPush", t[t.Default] = "Default", t
    }(), ce = function () {
      var t = {Emulated: 0, Native: 1, None: 2, ShadowDom: 3};
      return t[t.Emulated] = "Emulated", t[t.Native] = "Native", t[t.None] = "None", t[t.ShadowDom] = "ShadowDom", t
    }(), he = {}, fe = [], de = 0;

    function pe(t) {
      return rt((function () {
        var e = t.type, n = e.prototype, r = {}, i = {
          type: e,
          providersResolver: null,
          decls: t.decls,
          vars: t.vars,
          factory: null,
          template: t.template || null,
          consts: t.consts || null,
          ngContentSelectors: t.ngContentSelectors,
          hostBindings: t.hostBindings || null,
          hostVars: t.hostVars || 0,
          hostAttrs: t.hostAttrs || null,
          contentQueries: t.contentQueries || null,
          declaredInputs: r,
          inputs: null,
          outputs: null,
          exportAs: t.exportAs || null,
          onChanges: null,
          onInit: n.ngOnInit || null,
          doCheck: n.ngDoCheck || null,
          afterContentInit: n.ngAfterContentInit || null,
          afterContentChecked: n.ngAfterContentChecked || null,
          afterViewInit: n.ngAfterViewInit || null,
          afterViewChecked: n.ngAfterViewChecked || null,
          onDestroy: n.ngOnDestroy || null,
          onPush: t.changeDetection === ue.OnPush,
          directiveDefs: null,
          pipeDefs: null,
          selectors: t.selectors || fe,
          viewQuery: t.viewQuery || null,
          features: t.features || null,
          data: t.data || {},
          encapsulation: t.encapsulation || ce.Emulated,
          id: "c",
          styles: t.styles || fe,
          _: null,
          setInput: null,
          schemas: t.schemas || null,
          tView: null
        }, a = t.directives, o = t.features, s = t.pipes;
        return i.id += de++, i.inputs = _e(t.inputs, r), i.outputs = _e(t.outputs), o && o.forEach((function (t) {
          return t(i)
        })), i.directiveDefs = a ? function () {
          return ("function" == typeof a ? a() : a).map(ve)
        } : null, i.pipeDefs = s ? function () {
          return ("function" == typeof s ? s() : s).map(ge)
        } : null, i
      }))
    }

    function ve(t) {
      return be(t) || function (t) {
        return t[Rt] || null
      }(t)
    }

    function ge(t) {
      return function (t) {
        return t[Ft] || null
      }(t)
    }

    var ye = {};

    function me(t) {
      var e = {
        type: t.type,
        bootstrap: t.bootstrap || fe,
        declarations: t.declarations || fe,
        imports: t.imports || fe,
        exports: t.exports || fe,
        transitiveCompileScopes: null,
        schemas: t.schemas || null,
        id: t.id || null
      };
      return null != t.id && rt((function () {
        ye[t.id] = t.type
      })), e
    }

    function _e(t, e) {
      if (null == t) return he;
      var n = {};
      for (var r in t) if (t.hasOwnProperty(r)) {
        var i = t[r], a = i;
        Array.isArray(i) && (a = i[1], i = i[0]), n[i] = r, e && (e[i] = a)
      }
      return n
    }

    var ke = pe;

    function be(t) {
      return t[It] || null
    }

    function we(t, e) {
      return t.hasOwnProperty(Ht) ? t[Ht] : null
    }

    function Ce(t, e) {
      var n = t[Nt] || null;
      if (!n && !0 === e) throw new Error("Type ".concat(wt(t), " does not have '\u0275mod' property."));
      return n
    }

    function xe(t) {
      return Array.isArray(t) && "object" == typeof t[1]
    }

    function Se(t) {
      return Array.isArray(t) && !0 === t[1]
    }

    function Te(t) {
      return 0 != (8 & t.flags)
    }

    function Ee(t) {
      return 2 == (2 & t.flags)
    }

    function Ae(t) {
      return 1 == (1 & t.flags)
    }

    function Oe(t) {
      return null !== t.template
    }

    function Le(t) {
      return 0 != (512 & t[2])
    }

    var Pe = void 0;

    function Me() {
      return void 0 !== Pe ? Pe : "undefined" != typeof document ? document : void 0
    }

    function De(t) {
      return !!t.listen
    }

    var Ie = {
      createRenderer: function (t, e) {
        return Me()
      }
    };

    function Re(t) {
      for (; Array.isArray(t);) t = t[0];
      return t
    }

    function Fe(t, e) {
      return Re(e[t + 19])
    }

    function Ne(t, e) {
      return Re(e[t.index])
    }

    function je(t, e) {
      return t.data[e + 19]
    }

    function He(t, e) {
      var n = e[t];
      return xe(n) ? n : n[0]
    }

    function Ue(t) {
      var e = function (t) {
        return t.__ngContext__ || null
      }(t);
      return e ? Array.isArray(e) ? e : e.lView : null
    }

    function ze(t) {
      return 4 == (4 & t[2])
    }

    function Ve(t) {
      return 128 == (128 & t[2])
    }

    function Be(t, e) {
      return null === t || null == e ? null : t[e]
    }

    function qe(t) {
      t[18] = 0
    }

    var We = {lFrame: fn(null), bindingsEnabled: !0, checkNoChangesMode: !1};

    function Ge() {
      return We.bindingsEnabled
    }

    function Qe() {
      return We.lFrame.lView
    }

    function Ye() {
      return We.lFrame.tView
    }

    function Ze(t) {
      We.lFrame.contextLView = t
    }

    function Xe() {
      return We.lFrame.previousOrParentTNode
    }

    function Ke(t, e) {
      We.lFrame.previousOrParentTNode = t, We.lFrame.isParent = e
    }

    function $e() {
      return We.lFrame.isParent
    }

    function Je() {
      We.lFrame.isParent = !1
    }

    function tn() {
      return We.checkNoChangesMode
    }

    function en(t) {
      We.checkNoChangesMode = t
    }

    function nn() {
      var t = We.lFrame, e = t.bindingRootIndex;
      return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
    }

    function rn() {
      return We.lFrame.bindingIndex++
    }

    function an(t) {
      var e = We.lFrame, n = e.bindingIndex;
      return e.bindingIndex = e.bindingIndex + t, n
    }

    function on(t, e) {
      var n = We.lFrame;
      n.bindingIndex = n.bindingRootIndex = t, n.currentDirectiveIndex = e
    }

    function sn() {
      return We.lFrame.currentQueryIndex
    }

    function ln(t) {
      We.lFrame.currentQueryIndex = t
    }

    function un(t, e) {
      var n = hn();
      We.lFrame = n, n.previousOrParentTNode = e, n.lView = t
    }

    function cn(t, e) {
      var n = hn(), r = t[1];
      We.lFrame = n, n.previousOrParentTNode = e, n.lView = t, n.tView = r, n.contextLView = t, n.bindingIndex = r.bindingStartIndex
    }

    function hn() {
      var t = We.lFrame, e = null === t ? null : t.child;
      return null === e ? fn(t) : e
    }

    function fn(t) {
      var e = {
        previousOrParentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: 0,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentSanitizer: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: t,
        child: null
      };
      return null !== t && (t.child = e), e
    }

    function dn() {
      var t = We.lFrame;
      return We.lFrame = t.parent, t.previousOrParentTNode = null, t.lView = null, t
    }

    var pn = dn;

    function vn() {
      var t = dn();
      t.isParent = !0, t.tView = null, t.selectedIndex = 0, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.currentSanitizer = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0
    }

    function gn() {
      return We.lFrame.selectedIndex
    }

    function yn(t) {
      We.lFrame.selectedIndex = t
    }

    function mn() {
      var t = We.lFrame;
      return je(t.tView, t.selectedIndex)
    }

    function _n() {
      We.lFrame.currentNamespace = "http://www.w3.org/2000/svg"
    }

    function kn() {
      We.lFrame.currentNamespace = null
    }

    function bn(t, e) {
      for (var n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
        var i = t.data[n];
        i.afterContentInit && (t.contentHooks || (t.contentHooks = [])).push(-n, i.afterContentInit), i.afterContentChecked && ((t.contentHooks || (t.contentHooks = [])).push(n, i.afterContentChecked), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, i.afterContentChecked)), i.afterViewInit && (t.viewHooks || (t.viewHooks = [])).push(-n, i.afterViewInit), i.afterViewChecked && ((t.viewHooks || (t.viewHooks = [])).push(n, i.afterViewChecked), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, i.afterViewChecked)), null != i.onDestroy && (t.destroyHooks || (t.destroyHooks = [])).push(n, i.onDestroy)
      }
    }

    function wn(t, e, n) {
      Sn(t, e, 3, n)
    }

    function Cn(t, e, n, r) {
      (3 & t[2]) === n && Sn(t, e, n, r)
    }

    function xn(t, e) {
      var n = t[2];
      (3 & n) === e && (n &= 1023, n += 1, t[2] = n)
    }

    function Sn(t, e, n, r) {
      for (var i = null != r ? r : -1, a = 0, o = void 0 !== r ? 65535 & t[18] : 0; o < e.length; o++) if ("number" == typeof e[o + 1]) {
        if (a = e[o], null != r && a >= r) break
      } else e[o] < 0 && (t[18] += 65536), (a < i || -1 == i) && (Tn(t, n, e, o), t[18] = (4294901760 & t[18]) + o + 2), o++
    }

    function Tn(t, e, n, r) {
      var i = n[r] < 0, a = n[r + 1], o = t[i ? -n[r] : n[r]];
      i ? t[2] >> 10 < t[18] >> 16 && (3 & t[2]) === e && (t[2] += 1024, a.call(o)) : a.call(o)
    }

    var En = function t(e, n, r) {
      _classCallCheck(this, t), this.factory = e, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r
    };

    function An(t, e, n) {
      for (var r = De(t), i = 0; i < n.length;) {
        var a = n[i];
        if ("number" == typeof a) {
          if (0 !== a) break;
          i++;
          var o = n[i++], s = n[i++], l = n[i++];
          r ? t.setAttribute(e, s, l, o) : e.setAttributeNS(o, s, l)
        } else {
          var u = a, c = n[++i];
          Ln(u) ? r && t.setProperty(e, u, c) : r ? t.setAttribute(e, u, c) : e.setAttribute(u, c), i++
        }
      }
      return i
    }

    function On(t) {
      return 3 === t || 4 === t || 6 === t
    }

    function Ln(t) {
      return 64 === t.charCodeAt(0)
    }

    function Pn(t, e) {
      if (null === e || 0 === e.length) ; else if (null === t || 0 === t.length) t = e.slice(); else for (var n = -1, r = 0; r < e.length; r++) {
        var i = e[r];
        "number" == typeof i ? n = i : 0 === n || Mn(t, n, i, null, -1 === n || 2 === n ? e[++r] : null)
      }
      return t
    }

    function Mn(t, e, n, r, i) {
      var a = 0, o = t.length;
      if (-1 === e) o = -1; else for (; a < t.length;) {
        var s = t[a++];
        if ("number" == typeof s) {
          if (s === e) {
            o = -1;
            break
          }
          if (s > e) {
            o = a - 1;
            break
          }
        }
      }
      for (; a < t.length;) {
        var l = t[a];
        if ("number" == typeof l) break;
        if (l === n) {
          if (null === r) return void (null !== i && (t[a + 1] = i));
          if (r === t[a + 1]) return void (t[a + 2] = i)
        }
        a++, null !== r && a++, null !== i && a++
      }
      -1 !== o && (t.splice(o, 0, e), a = o + 1), t.splice(a++, 0, n), null !== r && t.splice(a++, 0, r), null !== i && t.splice(a++, 0, i)
    }

    function Dn(t) {
      return -1 !== t
    }

    function In(t) {
      return 32767 & t
    }

    function Rn(t) {
      return t >> 16
    }

    function Fn(t, e) {
      for (var n = Rn(t), r = e; n > 0;) r = r[15], n--;
      return r
    }

    function Nn(t) {
      return "string" == typeof t ? t : null == t ? "" : "" + t
    }

    function jn(t) {
      return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : Nn(t)
    }

    var Hn = ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Dt);

    function Un(t) {
      return {name: "window", target: t.ownerDocument.defaultView}
    }

    function zn(t) {
      return t instanceof Function ? t() : t
    }

    var Vn = !0;

    function Bn(t) {
      var e = Vn;
      return Vn = t, e
    }

    var qn = 0;

    function Wn(t, e) {
      var n = Qn(t, e);
      if (-1 !== n) return n;
      var r = e[1];
      r.firstCreatePass && (t.injectorIndex = e.length, Gn(r.data, t), Gn(e, null), Gn(r.blueprint, null));
      var i = Yn(t, e), a = t.injectorIndex;
      if (Dn(i)) for (var o = In(i), s = Fn(i, e), l = s[1].data, u = 0; u < 8; u++) e[a + u] = s[o + u] | l[o + u];
      return e[a + 8] = i, a
    }

    function Gn(t, e) {
      t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
    }

    function Qn(t, e) {
      return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null == e[t.injectorIndex + 8] ? -1 : t.injectorIndex
    }

    function Yn(t, e) {
      if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
      for (var n = e[6], r = 1; n && -1 === n.injectorIndex;) n = (e = e[15]) ? e[6] : null, r++;
      return n ? n.injectorIndex | r << 16 : -1
    }

    function Zn(t, e, n) {
      !function (t, e, n) {
        var r = "string" != typeof n ? n[Ut] : n.charCodeAt(0) || 0;
        null == r && (r = n[Ut] = qn++);
        var i = 255 & r, a = 1 << i, o = 64 & i, s = 32 & i, l = e.data;
        128 & i ? o ? s ? l[t + 7] |= a : l[t + 6] |= a : s ? l[t + 5] |= a : l[t + 4] |= a : o ? s ? l[t + 3] |= a : l[t + 2] |= a : s ? l[t + 1] |= a : l[t] |= a
      }(t, e, n)
    }

    function Xn(t, e, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ut.Default,
        i = arguments.length > 4 ? arguments[4] : void 0;
      if (null !== t) {
        var a = function (t) {
          if ("string" == typeof t) return t.charCodeAt(0) || 0;
          var e = t[Ut];
          return "number" == typeof e && e > 0 ? 255 & e : e
        }(n);
        if ("function" == typeof a) {
          un(e, t);
          try {
            var o = a();
            if (null != o || r & ut.Optional) return o;
            throw new Error("No provider for ".concat(jn(n), "!"))
          } finally {
            pn()
          }
        } else if ("number" == typeof a) {
          if (-1 === a) return new rr(t, e);
          var s = null, l = Qn(t, e), u = -1, c = r & ut.Host ? e[16][6] : null;
          for ((-1 === l || r & ut.SkipSelf) && (u = -1 === l ? Yn(t, e) : e[l + 8], nr(r, !1) ? (s = e[1], l = In(u), e = Fn(u, e)) : l = -1); -1 !== l;) {
            u = e[l + 8];
            var h = e[1];
            if (er(a, l, h.data)) {
              var f = $n(l, e, n, s, r, c);
              if (f !== Kn) return f
            }
            nr(r, e[1].data[l + 8] === c) && er(a, l, e) ? (s = h, l = In(u), e = Fn(u, e)) : l = -1
          }
        }
      }
      if (r & ut.Optional && void 0 === i && (i = null), 0 == (r & (ut.Self | ut.Host))) {
        var d = e[9], p = Yt(void 0);
        try {
          return d ? d.get(n, i, r & ut.Optional) : Kt(n, i, r & ut.Optional)
        } finally {
          Yt(p)
        }
      }
      if (r & ut.Optional) return i;
      throw new Error("NodeInjector: NOT_FOUND [".concat(jn(n), "]"))
    }

    var Kn = {};

    function $n(t, e, n, r, i, a) {
      var o = e[1], s = o.data[t + 8],
        l = Jn(s, o, n, null == r ? Ee(s) && Vn : r != o && 3 === s.type, i & ut.Host && a === s);
      return null !== l ? tr(e, o, l, s) : Kn
    }

    function Jn(t, e, n, r, i) {
      for (var a = t.providerIndexes, o = e.data, s = 65535 & a, l = t.directiveStart, u = a >> 16, c = i ? s + u : t.directiveEnd, h = r ? s : s + u; h < c; h++) {
        var f = o[h];
        if (h < l && n === f || h >= l && f.type === n) return h
      }
      if (i) {
        var d = o[l];
        if (d && Oe(d) && d.type === n) return l
      }
      return null
    }

    function tr(t, e, n, r) {
      var i = t[n], a = e.data;
      if (i instanceof En) {
        var o = i;
        if (o.resolving) throw new Error("Circular dep for " + jn(a[n]));
        var s, l = Bn(o.canSeeViewProviders);
        o.resolving = !0, o.injectImpl && (s = Yt(o.injectImpl)), un(t, r);
        try {
          i = t[n] = o.factory(void 0, a, t, r), e.firstCreatePass && n >= r.directiveStart && function (t, e, n) {
            var r = e.onChanges, i = e.onInit, a = e.doCheck;
            r && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, r), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, r)), i && (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, i), a && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, a), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, a))
          }(n, a[n], e)
        } finally {
          o.injectImpl && Yt(s), Bn(l), o.resolving = !1, pn()
        }
      }
      return i
    }

    function er(t, e, n) {
      var r = 64 & t, i = 32 & t;
      return !!((128 & t ? r ? i ? n[e + 7] : n[e + 6] : i ? n[e + 5] : n[e + 4] : r ? i ? n[e + 3] : n[e + 2] : i ? n[e + 1] : n[e]) & 1 << t)
    }

    function nr(t, e) {
      return !(t & ut.Self || t & ut.Host && e)
    }

    var rr = function () {
      function t(e, n) {
        _classCallCheck(this, t), this._tNode = e, this._lView = n
      }

      return _createClass(t, [{
        key: "get", value: function (t, e) {
          return Xn(this._tNode, this._lView, t, void 0, e)
        }
      }]), t
    }();

    function ir(t) {
      return rt((function () {
        var e = Object.getPrototypeOf(t.prototype).constructor, n = e[Ht] || function t(e) {
          var n = e;
          if (Et(e)) return function () {
            var e = t(Tt(n));
            return e ? e() : null
          };
          var r = we(n);
          if (null === r) {
            var i = gt(n);
            r = i && i.factory
          }
          return r || null
        }(e);
        return null !== n ? n : function (t) {
          return new t
        }
      }))
    }

    function ar(t) {
      return t.ngDebugContext
    }

    function or(t) {
      return t.ngOriginalError
    }

    function sr(t) {
      for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
      t.error.apply(t, n)
    }

    var lr = function () {
      function t() {
        _classCallCheck(this, t), this._console = console
      }

      return _createClass(t, [{
        key: "handleError", value: function (t) {
          var e = this._findOriginalError(t), n = this._findContext(t), r = function (t) {
            return t.ngErrorLogger || sr
          }(t);
          r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n)
        }
      }, {
        key: "_findContext", value: function (t) {
          return t ? ar(t) ? ar(t) : this._findContext(or(t)) : null
        }
      }, {
        key: "_findOriginalError", value: function (t) {
          for (var e = or(t); e && or(e);) e = or(e);
          return e
        }
      }]), t
    }(), ur = function () {
      function t(e) {
        _classCallCheck(this, t), this.changingThisBreaksApplicationSecurity = e
      }

      return _createClass(t, [{
        key: "toString", value: function () {
          return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"
        }
      }]), t
    }(), cr = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        return _classCallCheck(this, n), e.apply(this, arguments)
      }

      return _createClass(n, [{
        key: "getTypeName", value: function () {
          return "HTML"
        }
      }]), n
    }(ur), hr = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        return _classCallCheck(this, n), e.apply(this, arguments)
      }

      return _createClass(n, [{
        key: "getTypeName", value: function () {
          return "Style"
        }
      }]), n
    }(ur), fr = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        return _classCallCheck(this, n), e.apply(this, arguments)
      }

      return _createClass(n, [{
        key: "getTypeName", value: function () {
          return "Script"
        }
      }]), n
    }(ur), dr = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        return _classCallCheck(this, n), e.apply(this, arguments)
      }

      return _createClass(n, [{
        key: "getTypeName", value: function () {
          return "URL"
        }
      }]), n
    }(ur), pr = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        return _classCallCheck(this, n), e.apply(this, arguments)
      }

      return _createClass(n, [{
        key: "getTypeName", value: function () {
          return "ResourceURL"
        }
      }]), n
    }(ur);

    function vr(t) {
      return t instanceof ur ? t.changingThisBreaksApplicationSecurity : t
    }

    function gr(t, e) {
      var n = yr(t);
      if (null != n && n !== e) {
        if ("ResourceURL" === n && "URL" === e) return !0;
        throw new Error("Required a safe ".concat(e, ", got a ").concat(n, " (see http://g.co/ng/security#xss)"))
      }
      return n === e
    }

    function yr(t) {
      return t instanceof ur && t.getTypeName() || null
    }

    var mr = !0, _r = !1;

    function kr() {
      return _r = !0, mr
    }

    var br = function () {
        function t(e) {
          _classCallCheck(this, t), this.defaultDoc = e, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");
          var n = this.inertDocument.body;
          if (null == n) {
            var r = this.inertDocument.createElement("html");
            this.inertDocument.appendChild(r), n = this.inertDocument.createElement("body"), r.appendChild(n)
          }
          n.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !n.querySelector || n.querySelector("svg") ? (n.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = n.querySelector && n.querySelector("svg img") && function () {
            try {
              return !!window.DOMParser
            } catch (t) {
              return !1
            }
          }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
        }

        return _createClass(t, [{
          key: "getInertBodyElement_XHR", value: function (t) {
            t = "<body><remove></remove>" + t + "</body>";
            try {
              t = encodeURI(t)
            } catch (r) {
              return null
            }
            var e = new XMLHttpRequest;
            e.responseType = "document", e.open("GET", "data:text/html;charset=utf-8," + t, !1), e.send(void 0);
            var n = e.response.body;
            return n.removeChild(n.firstChild), n
          }
        }, {
          key: "getInertBodyElement_DOMParser", value: function (t) {
            t = "<body><remove></remove>" + t + "</body>";
            try {
              var e = (new window.DOMParser).parseFromString(t, "text/html").body;
              return e.removeChild(e.firstChild), e
            } catch (n) {
              return null
            }
          }
        }, {
          key: "getInertBodyElement_InertDocument", value: function (t) {
            var e = this.inertDocument.createElement("template");
            if ("content" in e) return e.innerHTML = t, e;
            var n = this.inertDocument.createElement("body");
            return n.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(n), n
          }
        }, {
          key: "stripCustomNsAttrs", value: function (t) {
            for (var e = t.attributes, n = e.length - 1; 0 < n; n--) {
              var r = e.item(n).name;
              "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || t.removeAttribute(r)
            }
            for (var i = t.firstChild; i;) i.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(i), i = i.nextSibling
          }
        }]), t
      }(), wr = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Cr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

    function xr(t) {
      return (t = String(t)).match(wr) || t.match(Cr) ? t : (kr() && console.warn("WARNING: sanitizing unsafe URL value ".concat(t, " (see http://g.co/ng/security#xss)")), "unsafe:" + t)
    }

    function Sr(t) {
      var e, n = {}, r = _createForOfIteratorHelper(t.split(","));
      try {
        for (r.s(); !(e = r.n()).done;) {
          n[e.value] = !0
        }
      } catch (i) {
        r.e(i)
      } finally {
        r.f()
      }
      return n
    }

    function Tr() {
      for (var t = {}, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
      for (var i = 0, a = n; i < a.length; i++) {
        var o = a[i];
        for (var s in o) o.hasOwnProperty(s) && (t[s] = !0)
      }
      return t
    }

    var Er, Ar = Sr("area,br,col,hr,img,wbr"), Or = Sr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
      Lr = Sr("rp,rt"), Pr = Tr(Lr, Or),
      Mr = Tr(Ar, Tr(Or, Sr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Tr(Lr, Sr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Pr),
      Dr = Sr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), Ir = Sr("srcset"),
      Rr = Tr(Dr, Ir, Sr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), Sr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
      Fr = Sr("script,style,template"), Nr = function () {
        function t() {
          _classCallCheck(this, t), this.sanitizedSomething = !1, this.buf = []
        }

        return _createClass(t, [{
          key: "sanitizeChildren", value: function (t) {
            for (var e = t.firstChild, n = !0; e;) if (e.nodeType === Node.ELEMENT_NODE ? n = this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, n && e.firstChild) e = e.firstChild; else for (; e;) {
              e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
              var r = this.checkClobberedElement(e, e.nextSibling);
              if (r) {
                e = r;
                break
              }
              e = this.checkClobberedElement(e, e.parentNode)
            }
            return this.buf.join("")
          }
        }, {
          key: "startElement", value: function (t) {
            var e = t.nodeName.toLowerCase();
            if (!Mr.hasOwnProperty(e)) return this.sanitizedSomething = !0, !Fr.hasOwnProperty(e);
            this.buf.push("<"), this.buf.push(e);
            for (var n, r = t.attributes, i = 0; i < r.length; i++) {
              var a = r.item(i), o = a.name, s = o.toLowerCase();
              if (Rr.hasOwnProperty(s)) {
                var l = a.value;
                Dr[s] && (l = xr(l)), Ir[s] && (n = l, l = (n = String(n)).split(",").map((function (t) {
                  return xr(t.trim())
                })).join(", ")), this.buf.push(" ", o, '="', Ur(l), '"')
              } else this.sanitizedSomething = !0
            }
            return this.buf.push(">"), !0
          }
        }, {
          key: "endElement", value: function (t) {
            var e = t.nodeName.toLowerCase();
            Mr.hasOwnProperty(e) && !Ar.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"))
          }
        }, {
          key: "chars", value: function (t) {
            this.buf.push(Ur(t))
          }
        }, {
          key: "checkClobberedElement", value: function (t, e) {
            if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + t.outerHTML);
            return e
          }
        }]), t
      }(), jr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Hr = /([^\#-~ |!])/g;

    function Ur(t) {
      return t.replace(/&/g, "&amp;").replace(jr, (function (t) {
        return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
      })).replace(Hr, (function (t) {
        return "&#" + t.charCodeAt(0) + ";"
      })).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function zr(t, e) {
      var n = null;
      try {
        Er = Er || new br(t);
        var r = e ? String(e) : "";
        n = Er.getInertBodyElement(r);
        var i = 5, a = r;
        do {
          if (0 === i) throw new Error("Failed to sanitize html because the input is unstable");
          i--, r = a, a = n.innerHTML, n = Er.getInertBodyElement(r)
        } while (r !== a);
        var o = new Nr, s = o.sanitizeChildren(Vr(n) || n);
        return kr() && o.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), s
      } finally {
        if (n) for (var l = Vr(n) || n; l.firstChild;) l.removeChild(l.firstChild)
      }
    }

    function Vr(t) {
      return "content" in t && function (t) {
        return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
      }(t) ? t.content : null
    }

    var Br = function () {
        var t = {NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5};
        return t[t.NONE] = "NONE", t[t.HTML] = "HTML", t[t.STYLE] = "STYLE", t[t.SCRIPT] = "SCRIPT", t[t.URL] = "URL", t[t.RESOURCE_URL] = "RESOURCE_URL", t
      }(),
      qr = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:attr|calc|var))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
      Wr = /^url\(([^)]+)\)$/;

    function Gr(t) {
      if (!(t = String(t).trim())) return "";
      var e = t.match(Wr);
      return e && xr(e[1]) === e[1] || t.match(qr) && function (t) {
        for (var e = !0, n = !0, r = 0; r < t.length; r++) {
          var i = t.charAt(r);
          "'" === i && n ? e = !e : '"' === i && e && (n = !n)
        }
        return e && n
      }(t) ? t : (kr() && console.warn("WARNING: sanitizing unsafe style value ".concat(t, " (see http://g.co/ng/security#xss).")), "unsafe")
    }

    function Qr(t) {
      var e = Kr();
      return e ? e.sanitize(Br.HTML, t) || "" : gr(t, "HTML") ? vr(t) : zr(Me(), Nn(t))
    }

    function Yr(t) {
      var e = Kr();
      return e ? e.sanitize(Br.STYLE, t) || "" : gr(t, "Style") ? vr(t) : Gr(Nn(t))
    }

    function Zr(t) {
      var e = Kr();
      return e ? e.sanitize(Br.URL, t) || "" : gr(t, "URL") ? vr(t) : xr(Nn(t))
    }

    var Xr = function (t, e, n) {
      if (void 0 === e && void 0 === n) return Yr(t);
      var r = !0;
      return 1 & (n = n || 3) && (r = function (t) {
        return "background-image" === t || "backgroundImage" === t || "background" === t || "border-image" === t || "borderImage" === t || "border-image-source" === t || "borderImageSource" === t || "filter" === t || "list-style" === t || "listStyle" === t || "list-style-image" === t || "listStyleImage" === t || "clip-path" === t || "clipPath" === t
      }(t)), 2 & n ? r ? Yr(e) : vr(e) : r
    };

    function Kr() {
      var t = Qe();
      return t && t[12]
    }

    function $r(t, e) {
      t.__ngContext__ = e
    }

    function Jr(t) {
      throw new Error("Multiple components match node with tagname " + t.tagName)
    }

    function ti() {
      throw new Error("Cannot mix multi providers and regular providers")
    }

    function ei(t, e, n) {
      for (var r = t.length; ;) {
        var i = t.indexOf(e, n);
        if (-1 === i) return i;
        if (0 === i || t.charCodeAt(i - 1) <= 32) {
          var a = e.length;
          if (i + a === r || t.charCodeAt(i + a) <= 32) return i
        }
        n = i + 1
      }
    }

    function ni(t, e, n) {
      for (var r = 0; r < t.length;) {
        var i = t[r++];
        if (n && "class" === i) {
          if (-1 !== ei((i = t[r]).toLowerCase(), e, 0)) return !0
        } else if (1 === i) {
          for (; r < t.length && "string" == typeof (i = t[r++]);) if (i.toLowerCase() === e) return !0;
          return !1
        }
      }
      return !1
    }

    function ri(t, e, n) {
      return e === (0 !== t.type || n ? t.tagName : "ng-template")
    }

    function ii(t, e, n) {
      for (var r = 4, i = t.attrs || [], a = function (t) {
        for (var e = 0; e < t.length; e++) if (On(t[e])) return e;
        return t.length
      }(i), o = !1, s = 0; s < e.length; s++) {
        var l = e[s];
        if ("number" != typeof l) {
          if (!o) if (4 & r) {
            if (r = 2 | 1 & r, "" !== l && !ri(t, l, n) || "" === l && 1 === e.length) {
              if (ai(r)) return !1;
              o = !0
            }
          } else {
            var u = 8 & r ? l : e[++s];
            if (8 & r && null !== t.attrs) {
              if (!ni(t.attrs, u, n)) {
                if (ai(r)) return !1;
                o = !0
              }
              continue
            }
            var c = oi(8 & r ? "class" : l, i, 0 == t.type && "ng-template" !== t.tagName, n);
            if (-1 === c) {
              if (ai(r)) return !1;
              o = !0;
              continue
            }
            if ("" !== u) {
              var h;
              h = c > a ? "" : i[c + 1].toLowerCase();
              var f = 8 & r ? h : null;
              if (f && -1 !== ei(f, u, 0) || 2 & r && u !== h) {
                if (ai(r)) return !1;
                o = !0
              }
            }
          }
        } else {
          if (!o && !ai(r) && !ai(l)) return !1;
          if (o && ai(l)) continue;
          o = !1, r = l | 1 & r
        }
      }
      return ai(r) || o
    }

    function ai(t) {
      return 0 == (1 & t)
    }

    function oi(t, e, n, r) {
      if (null === e) return -1;
      var i = 0;
      if (r || !n) {
        for (var a = !1; i < e.length;) {
          var o = e[i];
          if (o === t) return i;
          if (3 === o || 6 === o) a = !0; else {
            if (1 === o || 2 === o) {
              for (var s = e[++i]; "string" == typeof s;) s = e[++i];
              continue
            }
            if (4 === o) break;
            if (0 === o) {
              i += 4;
              continue
            }
          }
          i += a ? 1 : 2
        }
        return -1
      }
      return function (t, e) {
        var n = t.indexOf(4);
        if (n > -1) for (n++; n < t.length;) {
          if (t[n] === e) return n;
          n++
        }
        return -1
      }(e, t)
    }

    function si(t, e) {
      for (var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = 0; r < e.length; r++) if (ii(t, e[r], n)) return !0;
      return !1
    }

    function li(t, e) {
      return t ? ":not(" + e.trim() + ")" : e
    }

    function ui(t) {
      for (var e = t[0], n = 1, r = 2, i = "", a = !1; n < t.length;) {
        var o = t[n];
        if ("string" == typeof o) if (2 & r) {
          var s = t[++n];
          i += "[" + o + (s.length > 0 ? '="' + s + '"' : "") + "]"
        } else 8 & r ? i += "." + o : 4 & r && (i += " " + o); else "" === i || ai(o) || (e += li(a, i), i = ""), r = o, a = a || !ai(r);
        n++
      }
      return "" !== i && (e += li(a, i)), e
    }

    var ci = {};

    function hi(t) {
      var e = t[3];
      return Se(e) ? e[3] : e
    }

    function fi(t) {
      di(Ye(), Qe(), gn() + t, tn())
    }

    function di(t, e, n, r) {
      if (!r) if (3 == (3 & e[2])) {
        var i = t.preOrderCheckHooks;
        null !== i && wn(e, i, n)
      } else {
        var a = t.preOrderHooks;
        null !== a && Cn(e, a, 0, n)
      }
      yn(n)
    }

    function pi(t, e) {
      return t << 17 | e << 2
    }

    function vi(t) {
      return t >> 17 & 32767
    }

    function gi(t) {
      return 2 | t
    }

    function yi(t) {
      return (131068 & t) >> 2
    }

    function mi(t, e) {
      return -131069 & t | e << 2
    }

    function _i(t) {
      return 1 | t
    }

    function ki(t, e) {
      var n = t.contentQueries;
      if (null !== n) for (var r = 0; r < n.length; r += 2) {
        var i = n[r], a = n[r + 1];
        if (-1 !== a) {
          var o = t.data[a];
          ln(i), o.contentQueries(2, e[a], a)
        }
      }
    }

    function bi(t, e, n) {
      return De(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t)
    }

    function wi(t, e, n, r, i, a, o, s, l, u) {
      var c = e.blueprint.slice();
      return c[0] = i, c[2] = 140 | r, qe(c), c[3] = c[15] = t, c[8] = n, c[10] = o || t && t[10], c[11] = s || t && t[11], c[12] = l || t && t[12] || null, c[9] = u || t && t[9] || null, c[6] = a, c[16] = 2 == e.type ? t[16] : c, c
    }

    function Ci(t, e, n, r, i, a) {
      var o = n + 19, s = t.data[o] || function (t, e, n, r, i, a) {
        var o = Xe(), s = $e(), l = s ? o : o && o.parent, u = t.data[n] = Mi(0, l && l !== e ? l : null, r, n, i, a);
        return null === t.firstChild && (t.firstChild = u), o && (!s || null != o.child || null === u.parent && 2 !== o.type ? s || (o.next = u) : o.child = u), u
      }(t, e, o, r, i, a);
      return Ke(s, !0), s
    }

    function xi(t, e, n) {
      cn(e, e[6]);
      try {
        var r = t.viewQuery;
        null !== r && ea(1, r, n);
        var i = t.template;
        null !== i && Ei(t, e, i, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && ki(t, e), t.staticViewQueries && ea(2, t.viewQuery, n);
        var a = t.components;
        null !== a && function (t, e) {
          for (var n = 0; n < e.length; n++) Xi(t, e[n])
        }(e, a)
      } finally {
        e[2] &= -5, vn()
      }
    }

    function Si(t, e, n, r) {
      var i = e[2];
      if (256 != (256 & i)) {
        cn(e, e[6]);
        var a = tn();
        try {
          qe(e), We.lFrame.bindingIndex = t.bindingStartIndex, null !== n && Ei(t, e, n, 2, r);
          var o = 3 == (3 & i);
          if (!a) if (o) {
            var s = t.preOrderCheckHooks;
            null !== s && wn(e, s, null)
          } else {
            var l = t.preOrderHooks;
            null !== l && Cn(e, l, 0, null), xn(e, 0)
          }
          if (function (t) {
            for (var e = t[13]; null !== e;) {
              var n = void 0;
              if (Se(e) && (n = e[2]) >> 1 == -1) {
                for (var r = 9; r < e.length; r++) {
                  var i = e[r], a = i[1];
                  Ve(i) && Si(a, i, a.template, i[8])
                }
                0 != (1 & n) && Yi(e, t[16])
              }
              e = e[4]
            }
          }(e), null !== t.contentQueries && ki(t, e), !a) if (o) {
            var u = t.contentCheckHooks;
            null !== u && wn(e, u)
          } else {
            var c = t.contentHooks;
            null !== c && Cn(e, c, 1), xn(e, 1)
          }
          !function (t, e) {
            try {
              var n = t.expandoInstructions;
              if (null !== n) for (var r = t.expandoStartIndex, i = -1, a = 0; a < n.length; a++) {
                var o = n[a];
                "number" == typeof o ? o <= 0 ? (yn(0 - o), i = r += 9 + n[++a]) : r += o : (null !== o && (on(r, i), o(2, e[i])), i++)
              }
            } finally {
              yn(-1)
            }
          }(t, e);
          var h = t.components;
          null !== h && function (t, e) {
            for (var n = 0; n < e.length; n++) Zi(t, e[n])
          }(e, h);
          var f = t.viewQuery;
          if (null !== f && ea(2, f, r), !a) if (o) {
            var d = t.viewCheckHooks;
            null !== d && wn(e, d)
          } else {
            var p = t.viewHooks;
            null !== p && Cn(e, p, 2), xn(e, 2)
          }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1), a || (e[2] &= -73)
        } finally {
          vn()
        }
      }
    }

    function Ti(t, e, n, r) {
      var i = e[10], a = !tn(), o = ze(e);
      try {
        a && !o && i.begin && i.begin(), o && xi(t, e, r), Si(t, e, n, r)
      } finally {
        a && !o && i.end && i.end()
      }
    }

    function Ei(t, e, n, r, i) {
      var a = gn();
      try {
        yn(-1), 2 & r && e.length > 19 && di(t, e, 0, tn()), n(r, i)
      } finally {
        yn(a)
      }
    }

    function Ai(t, e, n) {
      Ge() && (function (t, e, n, r) {
        var i = n.directiveStart, a = n.directiveEnd;
        t.firstCreatePass || Wn(n, e), $r(r, e);
        for (var o = n.initialInputs, s = i; s < a; s++) {
          var l = t.data[s], u = Oe(l);
          u && qi(e, n, l);
          var c = tr(e, t, s, n);
          $r(c, e), null !== o && Wi(0, s - i, c, l, 0, o), u && (He(n.index, e)[8] = c)
        }
      }(t, e, n, Ne(n, e)), 128 == (128 & n.flags) && function (t, e, n) {
        var r = n.directiveStart, i = n.directiveEnd, a = t.expandoInstructions, o = t.firstCreatePass,
          s = n.index - 19;
        try {
          yn(s);
          for (var l = r; l < i; l++) {
            var u = t.data[l], c = e[l];
            null !== u.hostBindings || 0 !== u.hostVars || null !== u.hostAttrs ? ji(u, c) : o && a.push(null)
          }
        } finally {
          yn(-1)
        }
      }(t, e, n))
    }

    function Oi(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ne, r = e.localNames;
      if (null !== r) for (var i = e.index + 1, a = 0; a < r.length; a += 2) {
        var o = r[a + 1], s = -1 === o ? n(e, t) : t[o];
        t[i++] = s
      }
    }

    function Li(t) {
      return t.tView || (t.tView = Pi(1, -1, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts))
    }

    function Pi(t, e, n, r, i, a, o, s, l, u) {
      var c = 19 + r, h = c + i, f = function (t, e) {
        for (var n = [], r = 0; r < e; r++) n.push(r < t ? null : ci);
        return n
      }(c, h);
      return f[1] = {
        type: t,
        id: e,
        blueprint: f,
        template: n,
        queries: null,
        viewQuery: s,
        node: null,
        data: f.slice().fill(null, c),
        bindingStartIndex: c,
        expandoStartIndex: h,
        expandoInstructions: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: "function" == typeof a ? a() : a,
        pipeRegistry: "function" == typeof o ? o() : o,
        firstChild: null,
        schemas: l,
        consts: u
      }
    }

    function Mi(t, e, n, r, i, a) {
      return {
        type: n,
        index: r,
        injectorIndex: e ? e.injectorIndex : -1,
        directiveStart: -1,
        directiveEnd: -1,
        directiveStylingLast: -1,
        propertyBindings: null,
        flags: 0,
        providerIndexes: 0,
        tagName: i,
        attrs: a,
        mergedAttrs: null,
        localNames: null,
        initialInputs: void 0,
        inputs: null,
        outputs: null,
        tViews: null,
        next: null,
        projectionNext: null,
        child: null,
        parent: e,
        projection: null,
        styles: null,
        residualStyles: void 0,
        classes: null,
        residualClasses: void 0,
        classBindings: 0,
        styleBindings: 0
      }
    }

    function Di(t, e, n) {
      for (var r in t) if (t.hasOwnProperty(r)) {
        var i = t[r];
        (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(e, i) : n[r] = [e, i]
      }
      return n
    }

    function Ii(t, e, n, r, i, a, o, s) {
      var l, u, c = Ne(e, n), h = e.inputs;
      !s && null != h && (l = h[r]) ? (oa(t, n, l, r, i), Ee(e) && function (t, e) {
        var n = He(e, t);
        16 & n[2] || (n[2] |= 64)
      }(n, e.index)) : 3 === e.type && (r = "class" === (u = r) ? "className" : "for" === u ? "htmlFor" : "formaction" === u ? "formAction" : "innerHtml" === u ? "innerHTML" : "readonly" === u ? "readOnly" : "tabindex" === u ? "tabIndex" : u, i = null != o ? o(i, e.tagName || "", r) : i, De(a) ? a.setProperty(c, r, i) : Ln(r) || (c.setProperty ? c.setProperty(r, i) : c[r] = i))
    }

    function Ri(t, e, n, r) {
      var i = !1;
      if (Ge()) {
        var a = function (t, e, n) {
          var r = t.directiveRegistry, i = null;
          if (r) for (var a = 0; a < r.length; a++) {
            var o = r[a];
            si(n, o.selectors, !1) && (i || (i = []), Zn(Wn(n, e), t, o.type), Oe(o) ? (2 & n.flags && Jr(n), Ui(t, n), i.unshift(o)) : i.push(o))
          }
          return i
        }(t, e, n), o = null === r ? null : {"": -1};
        if (null !== a) {
          var s = 0;
          i = !0, Vi(n, t.data.length, a.length);
          for (var l = 0; l < a.length; l++) {
            var u = a[l];
            u.providersResolver && u.providersResolver(u)
          }
          Hi(t, n, a.length);
          for (var c = !1, h = !1, f = 0; f < a.length; f++) {
            var d = a[f];
            n.mergedAttrs = Pn(n.mergedAttrs, d.hostAttrs), Bi(t, e, d), zi(t.data.length - 1, d, o), null !== d.contentQueries && (n.flags |= 8), null === d.hostBindings && null === d.hostAttrs && 0 === d.hostVars || (n.flags |= 128), !c && (d.onChanges || d.onInit || d.doCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - 19), c = !0), h || !d.onChanges && !d.doCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index - 19), h = !0), Fi(t, d), s += d.hostVars
          }
          !function (t, e) {
            for (var n = e.directiveEnd, r = t.data, i = e.attrs, a = [], o = null, s = null, l = e.directiveStart; l < n; l++) {
              var u = r[l], c = u.inputs;
              a.push(null !== i ? Gi(c, i) : null), o = Di(c, l, o), s = Di(u.outputs, l, s)
            }
            null !== o && (o.hasOwnProperty("class") && (e.flags |= 16), o.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = a, e.inputs = o, e.outputs = s
          }(t, n), Ni(t, e, s)
        }
        o && function (t, e, n) {
          if (e) for (var r = t.localNames = [], i = 0; i < e.length; i += 2) {
            var a = n[e[i + 1]];
            if (null == a) throw new Error("Export of name '".concat(e[i + 1], "' not found!"));
            r.push(e[i], a)
          }
        }(n, r, o)
      }
      return n.mergedAttrs = Pn(n.mergedAttrs, n.attrs), i
    }

    function Fi(t, e) {
      var n = t.expandoInstructions;
      n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars)
    }

    function Ni(t, e, n) {
      for (var r = 0; r < n; r++) e.push(ci), t.blueprint.push(ci), t.data.push(null)
    }

    function ji(t, e) {
      null !== t.hostBindings && t.hostBindings(1, e)
    }

    function Hi(t, e, n) {
      var r = 19 - e.index, i = t.data.length - (65535 & e.providerIndexes);
      (t.expandoInstructions || (t.expandoInstructions = [])).push(r, i, n)
    }

    function Ui(t, e) {
      e.flags |= 2, (t.components || (t.components = [])).push(e.index)
    }

    function zi(t, e, n) {
      if (n) {
        if (e.exportAs) for (var r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
        Oe(e) && (n[""] = t)
      }
    }

    function Vi(t, e, n) {
      t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e
    }

    function Bi(t, e, n) {
      t.data.push(n);
      var r = n.factory || (n.factory = we(n.type)), i = new En(r, Oe(n), null);
      t.blueprint.push(i), e.push(i)
    }

    function qi(t, e, n) {
      var r = Ne(e, t), i = Li(n), a = t[10],
        o = Ki(t, wi(t, i, null, n.onPush ? 64 : 16, r, e, a, a.createRenderer(r, n)));
      t[e.index] = o
    }

    function Wi(t, e, n, r, i, a) {
      var o = a[e];
      if (null !== o) for (var s = r.setInput, l = 0; l < o.length;) {
        var u = o[l++], c = o[l++], h = o[l++];
        null !== s ? r.setInput(n, h, u, c) : n[c] = h
      }
    }

    function Gi(t, e) {
      for (var n = null, r = 0; r < e.length;) {
        var i = e[r];
        if (0 !== i) if (5 !== i) {
          if ("number" == typeof i) break;
          t.hasOwnProperty(i) && (null === n && (n = []), n.push(i, t[i], e[r + 1])), r += 2
        } else r += 2; else r += 4
      }
      return n
    }

    function Qi(t, e, n, r) {
      return new Array(t, !0, -2, e, null, null, r, n, null)
    }

    function Yi(t, e) {
      for (var n = t[5], r = 0; r < n.length; r++) {
        var i = n[r], a = i[3][3][16];
        if (a !== e && 0 == (16 & a[2])) {
          var o = i[1];
          Si(o, i, o.template, i[8])
        }
      }
    }

    function Zi(t, e) {
      var n = He(e, t);
      if (Ve(n) && 80 & n[2]) {
        var r = n[1];
        Si(r, n, r.template, n[8])
      }
    }

    function Xi(t, e) {
      var n = He(e, t), r = n[1];
      !function (t, e) {
        for (var n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n])
      }(r, n), xi(r, n, n[8])
    }

    function Ki(t, e) {
      return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e
    }

    function $i(t) {
      for (; t;) {
        t[2] |= 64;
        var e = hi(t);
        if (Le(t) && !e) return t;
        t = e
      }
      return null
    }

    function Ji(t, e, n) {
      var r = e[10];
      r.begin && r.begin();
      try {
        Si(t, e, t.template, n)
      } catch (i) {
        throw aa(e, i), i
      } finally {
        r.end && r.end()
      }
    }

    function ta(t) {
      !function (t) {
        for (var e = 0; e < t.components.length; e++) {
          var n = t.components[e], r = Ue(n), i = r[1];
          Ti(i, r, i.template, n)
        }
      }(t[8])
    }

    function ea(t, e, n) {
      ln(0), e(t, n)
    }

    var na = Promise.resolve(null);

    function ra(t) {
      return t[7] || (t[7] = [])
    }

    function ia(t) {
      return t.cleanup || (t.cleanup = [])
    }

    function aa(t, e) {
      var n = t[9], r = n ? n.get(lr, null) : null;
      r && r.handleError(e)
    }

    function oa(t, e, n, r, i) {
      for (var a = 0; a < n.length;) {
        var o = n[a++], s = n[a++], l = e[o], u = t.data[o];
        null !== u.setInput ? u.setInput(l, i, r, s) : l[s] = i
      }
    }

    function sa(t, e) {
      var n = e[3];
      return -1 === t.index ? Se(n) ? n : null : n
    }

    function la(t, e) {
      var n = sa(t, e);
      return n ? ka(e[11], n[7]) : null
    }

    function ua(t, e, n, r, i) {
      if (null != r) {
        var a, o = !1;
        Se(r) ? a = r : xe(r) && (o = !0, r = r[0]);
        var s = Re(r);
        0 === t && null !== n ? null == i ? ma(e, n, s) : ya(e, n, s, i || null) : 1 === t && null !== n ? ya(e, n, s, i || null) : 2 === t ? function (t, e, n) {
          var r = ka(t, e);
          r && function (t, e, n, r) {
            De(t) ? t.removeChild(e, n, r) : e.removeChild(n)
          }(t, r, e, n)
        }(e, s, o) : 3 === t && e.destroyNode(s), null != a && function (t, e, n, r, i) {
          var a = n[7];
          a !== Re(n) && ua(e, t, r, a, i);
          for (var o = 9; o < n.length; o++) {
            var s = n[o];
            Sa(s[1], s, t, e, r, a)
          }
        }(e, t, a, n, i)
      }
    }

    function ca(t, e, n, r) {
      var i = la(t.node, e);
      i && Sa(t, e, e[11], n ? 1 : 2, i, r)
    }

    function ha(t, e) {
      var n = t[5], r = n.indexOf(e);
      n.splice(r, 1)
    }

    function fa(t, e) {
      if (!(t.length <= 9)) {
        var n = 9 + e, r = t[n];
        if (r) {
          var i = r[17];
          null !== i && i !== t && ha(i, r), e > 0 && (t[n - 1][4] = r[4]);
          var a = ie(t, 9 + e);
          ca(r[1], r, !1, null);
          var o = a[5];
          null !== o && o.detachView(a[1]), r[3] = null, r[4] = null, r[2] &= -129
        }
        return r
      }
    }

    function da(t, e) {
      if (!(256 & e[2])) {
        var n = e[11];
        De(n) && n.destroyNode && Sa(t, e, n, 3, null, null), function (t) {
          var e = t[13];
          if (!e) return va(t[1], t);
          for (; e;) {
            var n = null;
            if (xe(e)) n = e[13]; else {
              var r = e[9];
              r && (n = r)
            }
            if (!n) {
              for (; e && !e[4] && e !== t;) xe(e) && va(e[1], e), e = pa(e, t);
              null === e && (e = t), xe(e) && va(e[1], e), n = e && e[4]
            }
            e = n
          }
        }(e)
      }
    }

    function pa(t, e) {
      var n;
      return xe(t) && (n = t[6]) && 2 === n.type ? sa(n, t) : t[3] === e ? null : t[3]
    }

    function va(t, e) {
      if (!(256 & e[2])) {
        e[2] &= -129, e[2] |= 256, function (t, e) {
          var n;
          if (null != t && null != (n = t.destroyHooks)) for (var r = 0; r < n.length; r += 2) {
            var i = e[n[r]];
            if (!(i instanceof En)) {
              var a = n[r + 1];
              if (Array.isArray(a)) for (var o = 0; o < a.length; o += 2) a[o + 1].call(i[a[o]]); else a.call(i)
            }
          }
        }(t, e), function (t, e) {
          var n = t.cleanup;
          if (null !== n) {
            for (var r = e[7], i = 0; i < n.length - 1; i += 2) if ("string" == typeof n[i]) {
              var a = n[i + 1], o = "function" == typeof a ? a(e) : Re(e[a]), s = r[n[i + 2]], l = n[i + 3];
              "boolean" == typeof l ? o.removeEventListener(n[i], s, l) : l >= 0 ? r[l]() : r[-l].unsubscribe(), i += 2
            } else n[i].call(r[n[i + 1]]);
            e[7] = null
          }
        }(t, e);
        var n = e[6];
        n && 3 === n.type && De(e[11]) && e[11].destroy();
        var r = e[17];
        if (null !== r && Se(e[3])) {
          r !== e[3] && ha(r, e);
          var i = e[5];
          null !== i && i.detachView(t)
        }
      }
    }

    function ga(t, e, n) {
      for (var r = e.parent; null != r && (4 === r.type || 5 === r.type);) r = (e = r).parent;
      if (null == r) {
        var i = n[6];
        return 2 === i.type ? la(i, n) : n[0]
      }
      if (e && 5 === e.type && 4 & e.flags) return Ne(e, n).parentNode;
      if (2 & r.flags) {
        var a = t.data, o = a[a[r.index].directiveStart].encapsulation;
        if (o !== ce.ShadowDom && o !== ce.Native) return null
      }
      return Ne(r, n)
    }

    function ya(t, e, n, r) {
      De(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0)
    }

    function ma(t, e, n) {
      De(t) ? t.appendChild(e, n) : e.appendChild(n)
    }

    function _a(t, e, n, r) {
      null !== r ? ya(t, e, n, r) : ma(t, e, n)
    }

    function ka(t, e) {
      return De(t) ? t.parentNode(e) : e.parentNode
    }

    function ba(t, e) {
      if (2 === t.type) {
        var n = sa(t, e);
        return null === n ? null : Ca(n.indexOf(e, 9) - 9, n)
      }
      return 4 === t.type || 5 === t.type ? Ne(t, e) : null
    }

    function wa(t, e, n, r) {
      var i = ga(t, r, e);
      if (null != i) {
        var a = e[11], o = ba(r.parent || e[6], e);
        if (Array.isArray(n)) for (var s = 0; s < n.length; s++) _a(a, i, n[s], o); else _a(a, i, n, o)
      }
    }

    function Ca(t, e) {
      var n = 9 + t + 1;
      if (n < e.length) {
        var r = e[n], i = r[1].firstChild;
        if (null !== i) return function t(e, n) {
          if (null !== n) {
            var r = n.type;
            if (3 === r) return Ne(n, e);
            if (0 === r) return Ca(-1, e[n.index]);
            if (4 === r || 5 === r) {
              var i = n.child;
              if (null !== i) return t(e, i);
              var a = e[n.index];
              return Se(a) ? Ca(-1, a) : Re(a)
            }
            var o = e[16], s = o[6], l = hi(o), u = s.projection[n.projection];
            return null != u ? t(l, u) : t(e, n.next)
          }
          return null
        }(r, i)
      }
      return e[7]
    }

    function xa(t, e, n, r, i, a, o) {
      for (; null != n;) {
        var s = r[n.index], l = n.type;
        o && 0 === e && (s && $r(Re(s), r), n.flags |= 4), 64 != (64 & n.flags) && (4 === l || 5 === l ? (xa(t, e, n.child, r, i, a, !1), ua(e, t, i, s, a)) : 1 === l ? Ta(t, e, r, n, i, a) : ua(e, t, i, s, a)), n = o ? n.projectionNext : n.next
      }
    }

    function Sa(t, e, n, r, i, a) {
      xa(n, r, t.node.child, e, i, a, !1)
    }

    function Ta(t, e, n, r, i, a) {
      var o = n[16], s = o[6].projection[r.projection];
      if (Array.isArray(s)) for (var l = 0; l < s.length; l++) ua(e, t, i, s[l], a); else xa(t, e, s, o[3], i, a, !0)
    }

    function Ea(t, e, n) {
      De(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n
    }

    function Aa(t, e, n) {
      De(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n
    }

    var Oa, La, Pa, Ma = function () {
      function t(e, n) {
        _classCallCheck(this, t), this._lView = e, this._cdRefInjectingView = n, this._appRef = null, this._viewContainerRef = null, this._tViewNode = null
      }

      return _createClass(t, [{
        key: "destroy", value: function () {
          if (this._appRef) this._appRef.detachView(this); else if (this._viewContainerRef) {
            var t = this._viewContainerRef.indexOf(this);
            t > -1 && this._viewContainerRef.detach(t), this._viewContainerRef = null
          }
          da(this._lView[1], this._lView)
        }
      }, {
        key: "onDestroy", value: function (t) {
          var e, n, r;
          e = this._lView[1], r = t, ra(n = this._lView).push(r), e.firstCreatePass && ia(e).push(n[7].length - 1, null)
        }
      }, {
        key: "markForCheck", value: function () {
          $i(this._cdRefInjectingView || this._lView)
        }
      }, {
        key: "detach", value: function () {
          this._lView[2] &= -129
        }
      }, {
        key: "reattach", value: function () {
          this._lView[2] |= 128
        }
      }, {
        key: "detectChanges", value: function () {
          Ji(this._lView[1], this._lView, this.context)
        }
      }, {
        key: "checkNoChanges", value: function () {
          !function (t, e, n) {
            en(!0);
            try {
              Ji(t, e, n)
            } finally {
              en(!1)
            }
          }(this._lView[1], this._lView, this.context)
        }
      }, {
        key: "attachToViewContainerRef", value: function (t) {
          if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
          this._viewContainerRef = t
        }
      }, {
        key: "detachFromAppRef", value: function () {
          var t;
          this._appRef = null, Sa(this._lView[1], t = this._lView, t[11], 2, null, null)
        }
      }, {
        key: "attachToAppRef", value: function (t) {
          if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
          this._appRef = t
        }
      }, {
        key: "rootNodes", get: function () {
          var t = this._lView;
          return null == t[0] ? function t(e, n, r, i) {
            for (var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]; null !== r;) {
              var o = n[r.index];
              if (null !== o && i.push(Re(o)), Se(o)) for (var s = 9; s < o.length; s++) {
                var l = o[s], u = l[1].firstChild;
                null !== u && t(l[1], l, u, i)
              }
              var c = r.type;
              if (4 === c || 5 === c) t(e, n, r.child, i); else if (1 === c) {
                var h = n[16], f = h[6], d = hi(h), p = f.projection[r.projection];
                null !== p && null !== d && t(d[1], d, p, i, !0)
              }
              r = a ? r.projectionNext : r.next
            }
            return i
          }(t[1], t, t[6].child, []) : []
        }
      }, {
        key: "context", get: function () {
          return this._lView[8]
        }
      }, {
        key: "destroyed", get: function () {
          return 256 == (256 & this._lView[2])
        }
      }]), t
    }(), Da = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t) {
        var r;
        return _classCallCheck(this, n), (r = e.call(this, t))._view = t, r
      }

      return _createClass(n, [{
        key: "detectChanges", value: function () {
          ta(this._view)
        }
      }, {
        key: "checkNoChanges", value: function () {
          !function (t) {
            en(!0);
            try {
              ta(t)
            } finally {
              en(!1)
            }
          }(this._view)
        }
      }, {
        key: "context", get: function () {
          return null
        }
      }]), n
    }(Ma);

    function Ia(t, e, n) {
      return Oa || (Oa = function (t) {
        _inherits(n, t);
        var e = _createSuper(n);

        function n() {
          return _classCallCheck(this, n), e.apply(this, arguments)
        }

        return n
      }(t)), new Oa(Ne(e, n))
    }

    function Ra(t, e, n, r) {
      return La || (La = function (t) {
        _inherits(n, t);
        var e = _createSuper(n);

        function n(t, r, i) {
          var a;
          return _classCallCheck(this, n), (a = e.call(this))._declarationView = t, a._declarationTContainer = r, a.elementRef = i, a
        }

        return _createClass(n, [{
          key: "createEmbeddedView", value: function (t) {
            var e = this._declarationTContainer.tViews, n = wi(this._declarationView, e, t, 16, null, e.node);
            n[17] = this._declarationView[this._declarationTContainer.index];
            var r = this._declarationView[5];
            null !== r && (n[5] = r.createEmbeddedView(e)), xi(e, n, t);
            var i = new Ma(n);
            return i._tViewNode = n[6], i
          }
        }]), n
      }(t)), 0 === n.type ? new La(r, n, Ia(e, n, r)) : null
    }

    function Fa(t, e, n, r) {
      var i;
      Pa || (Pa = function (t) {
        _inherits(r, t);
        var n = _createSuper(r);

        function r(t, e, i) {
          var a;
          return _classCallCheck(this, r), (a = n.call(this))._lContainer = t, a._hostTNode = e, a._hostView = i, a
        }

        return _createClass(r, [{
          key: "clear", value: function () {
            for (; this.length > 0;) this.remove(this.length - 1)
          }
        }, {
          key: "get", value: function (t) {
            return null !== this._lContainer[8] && this._lContainer[8][t] || null
          }
        }, {
          key: "createEmbeddedView", value: function (t, e, n) {
            var r = t.createEmbeddedView(e || {});
            return this.insert(r, n), r
          }
        }, {
          key: "createComponent", value: function (t, e, n, r, i) {
            var a = n || this.parentInjector;
            if (!i && null == t.ngModule && a) {
              var o = a.get(te, null);
              o && (i = o)
            }
            var s = t.create(a, r, void 0, i);
            return this.insert(s.hostView, e), s
          }
        }, {
          key: "insert", value: function (t, e) {
            var n = t._lView, r = n[1];
            if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
            if (this.allocateContainerIfNeeded(), Se(n[3])) {
              var i = this.indexOf(t);
              if (-1 !== i) this.detach(i); else {
                var a = n[3], o = new Pa(a, a[6], a[3]);
                o.detach(o.indexOf(t))
              }
            }
            var s = this._adjustIndex(e);
            return function (t, e, n, r) {
              var i = 9 + r, a = n.length;
              r > 0 && (n[i - 1][4] = e), r < a - 9 ? (e[4] = n[i], re(n, 9 + r, e)) : (n.push(e), e[4] = null), e[3] = n;
              var o = e[17];
              null !== o && n !== o && function (t, e) {
                var n = t[5], r = e[3][3][16];
                16 != (16 & r[2]) && e[16] !== r && (t[2] |= 1), null === n ? t[5] = [e] : n.push(e)
              }(o, e);
              var s = e[5];
              null !== s && s.insertView(t), e[2] |= 128
            }(r, n, this._lContainer, s), ca(r, n, !0, Ca(s, this._lContainer)), t.attachToViewContainerRef(this), re(this._lContainer[8], s, t), t
          }
        }, {
          key: "move", value: function (t, e) {
            if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
            return this.insert(t, e)
          }
        }, {
          key: "indexOf", value: function (t) {
            var e = this._lContainer[8];
            return null !== e ? e.indexOf(t) : -1
          }
        }, {
          key: "remove", value: function (t) {
            this.allocateContainerIfNeeded();
            var e = this._adjustIndex(t, -1);
            (function (t, e) {
              var n = fa(t, e);
              n && da(n[1], n)
            })(this._lContainer, e), ie(this._lContainer[8], e)
          }
        }, {
          key: "detach", value: function (t) {
            this.allocateContainerIfNeeded();
            var e = this._adjustIndex(t, -1), n = fa(this._lContainer, e);
            return n && null != ie(this._lContainer[8], e) ? new Ma(n) : null
          }
        }, {
          key: "_adjustIndex", value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return null == t ? this.length + e : t
          }
        }, {
          key: "allocateContainerIfNeeded", value: function () {
            null === this._lContainer[8] && (this._lContainer[8] = [])
          }
        }, {
          key: "element", get: function () {
            return Ia(e, this._hostTNode, this._hostView)
          }
        }, {
          key: "injector", get: function () {
            return new rr(this._hostTNode, this._hostView)
          }
        }, {
          key: "parentInjector", get: function () {
            var t = Yn(this._hostTNode, this._hostView), e = Fn(t, this._hostView), n = function (t, e, n) {
              if (n.parent && -1 !== n.parent.injectorIndex) {
                for (var r = n.parent.injectorIndex, i = n.parent; null != i.parent && r == i.parent.injectorIndex;) i = i.parent;
                return i
              }
              for (var a = Rn(t), o = e, s = e[6]; a > 1;) s = (o = o[15])[6], a--;
              return s
            }(t, this._hostView, this._hostTNode);
            return Dn(t) && null != n ? new rr(n, e) : new rr(null, this._hostView)
          }
        }, {
          key: "length", get: function () {
            return this._lContainer.length - 9
          }
        }]), r
      }(t));
      var a = r[n.index];
      if (Se(a)) (function (t, e) {
        t[2] = -2
      })(i = a); else {
        var o;
        if (4 === n.type) o = Re(a); else if (o = r[11].createComment(""), Le(r)) {
          var s = r[11], l = Ne(n, r);
          ya(s, ka(s, l), o, function (t, e) {
            return De(t) ? t.nextSibling(e) : e.nextSibling
          }(s, l))
        } else wa(r[1], r, o, n);
        r[n.index] = i = Qi(a, r, o, n), Ki(r, i)
      }
      return new Pa(i, n, r)
    }

    var Na = function () {
      var t = function t() {
        _classCallCheck(this, t)
      };
      return t.__NG_ELEMENT_ID__ = function () {
        return ja()
      }, t
    }(), ja = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return function (t, e, n) {
        if (!n && Ee(t)) {
          var r = He(t.index, e);
          return new Ma(r, r)
        }
        return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type ? new Ma(e[16], e) : null
      }(Xe(), Qe(), t)
    }, Ha = new zt("Set Injector scope."), Ua = {}, za = {}, Va = [], Ba = void 0;

    function qa() {
      return void 0 === Ba && (Ba = new Jt), Ba
    }

    function Wa(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 ? arguments[3] : void 0;
      return new Ga(t, n, e || qa(), r)
    }

    var Ga = function () {
      function t(e, n, r) {
        var i = this, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        _classCallCheck(this, t), this.parent = r, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
        var o = [];
        n && ne(n, (function (t) {
          return i.processProvider(t, e, n)
        })), ne([e], (function (t) {
          return i.processInjectorType(t, [], o)
        })), this.records.set(Vt, Za(void 0, this));
        var s = this.records.get(Ha);
        this.scope = null != s ? s.value : null, this.source = a || ("object" == typeof e ? null : wt(e))
      }

      return _createClass(t, [{
        key: "destroy", value: function () {
          this.assertNotDestroyed(), this._destroyed = !0;
          try {
            this.onDestroy.forEach((function (t) {
              return t.ngOnDestroy()
            }))
          } finally {
            this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
          }
        }
      }, {
        key: "get", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bt,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ut.Default;
          this.assertNotDestroyed();
          var r, i = Qt(this);
          try {
            if (!(n & ut.SkipSelf)) {
              var a = this.records.get(t);
              if (void 0 === a) {
                var o = ("function" == typeof (r = t) || "object" == typeof r && r instanceof zt) && pt(t);
                a = o && this.injectableDefInScope(o) ? Za(Qa(t), Ua) : null, this.records.set(t, a)
              }
              if (null != a) return this.hydrate(t, a)
            }
            return (n & ut.Self ? qa() : this.parent).get(t, e = n & ut.Optional && e === Bt ? null : e)
          } catch (s) {
            if ("NullInjectorError" === s.name) {
              if ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(wt(t)), i) throw s;
              return function (t, e, n, r) {
                var i = t.ngTempTokenPath;
                throw e.__source && i.unshift(e.__source), t.message = function (t, e, n) {
                  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                  t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                  var i = wt(e);
                  if (Array.isArray(e)) i = e.map(wt).join(" -> "); else if ("object" == typeof e) {
                    var a = [];
                    for (var o in e) if (e.hasOwnProperty(o)) {
                      var s = e[o];
                      a.push(o + ":" + ("string" == typeof s ? JSON.stringify(s) : wt(s)))
                    }
                    i = "{".concat(a.join(", "), "}")
                  }
                  return "".concat(n).concat(r ? "(" + r + ")" : "", "[").concat(i, "]: ").concat(t.replace(qt, "\n  "))
                }("\n" + t.message, i, "R3InjectorError", r), t.ngTokenPath = i, t.ngTempTokenPath = null, t
              }(s, t, 0, this.source)
            }
            throw s
          } finally {
            Qt(i)
          }
        }
      }, {
        key: "_resolveInjectorDefTypes", value: function () {
          var t = this;
          this.injectorDefTypes.forEach((function (e) {
            return t.get(e)
          }))
        }
      }, {
        key: "toString", value: function () {
          var t = [];
          return this.records.forEach((function (e, n) {
            return t.push(wt(n))
          })), "R3Injector[".concat(t.join(", "), "]")
        }
      }, {
        key: "assertNotDestroyed", value: function () {
          if (this._destroyed) throw new Error("Injector has already been destroyed.")
        }
      }, {
        key: "processInjectorType", value: function (t, e, n) {
          var r = this;
          if (!(t = Tt(t))) return !1;
          var i = gt(t), a = null == i && t.ngModule || void 0, o = void 0 === a ? t : a, s = -1 !== n.indexOf(o);
          if (void 0 !== a && (i = gt(a)), null == i) return !1;
          if (null != i.imports && !s) {
            var l;
            n.push(o);
            try {
              ne(i.imports, (function (t) {
                r.processInjectorType(t, e, n) && (void 0 === l && (l = []), l.push(t))
              }))
            } finally {
            }
            if (void 0 !== l) for (var u = function (t) {
              var e = l[t], n = e.ngModule, i = e.providers;
              ne(i, (function (t) {
                return r.processProvider(t, n, i || Va)
              }))
            }, c = 0; c < l.length; c++) u(c)
          }
          this.injectorDefTypes.add(o), this.records.set(o, Za(i.factory, Ua));
          var h = i.providers;
          if (null != h && !s) {
            var f = t;
            ne(h, (function (t) {
              return r.processProvider(t, f, h)
            }))
          }
          return void 0 !== a && void 0 !== t.providers
        }
      }, {
        key: "processProvider", value: function (t, e, n) {
          var r = Ka(t = Tt(t)) ? t : Tt(t && t.provide), i = function (t, e, n) {
            return Xa(t) ? Za(void 0, t.useValue) : Za(Ya(t, e, n), Ua)
          }(t, e, n);
          if (Ka(t) || !0 !== t.multi) {
            var a = this.records.get(r);
            a && void 0 !== a.multi && ti()
          } else {
            var o = this.records.get(r);
            o ? void 0 === o.multi && ti() : ((o = Za(void 0, Ua, !0)).factory = function () {
              return $t(o.multi)
            }, this.records.set(r, o)), r = t, o.multi.push(t)
          }
          this.records.set(r, i)
        }
      }, {
        key: "hydrate", value: function (t, e) {
          var n;
          return e.value === za ? function (t) {
            throw new Error("Cannot instantiate cyclic dependency! " + t)
          }(wt(t)) : e.value === Ua && (e.value = za, e.value = e.factory()), "object" == typeof e.value && e.value && null !== (n = e.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value
        }
      }, {
        key: "injectableDefInScope", value: function (t) {
          return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || t.providedIn === this.scope : this.injectorDefTypes.has(t.providedIn))
        }
      }, {
        key: "destroyed", get: function () {
          return this._destroyed
        }
      }]), t
    }();

    function Qa(t) {
      var e = pt(t), n = null !== e ? e.factory : we(t);
      if (null !== n) return n;
      var r = gt(t);
      if (null !== r) return r.factory;
      if (t instanceof zt) throw new Error("Token ".concat(wt(t), " is missing a \u0275prov definition."));
      if (t instanceof Function) return function (t) {
        var e = t.length;
        if (e > 0) {
          var n = ae(e, "?");
          throw new Error("Can't resolve all parameters for ".concat(wt(t), ": (").concat(n.join(", "), ")."))
        }
        var r = function (t) {
          var e = t && (t[yt] || t[kt] || t[_t] && t[_t]());
          if (e) {
            var n = function (t) {
              if (t.hasOwnProperty("name")) return t.name;
              var e = ("" + t).match(/^function\s*([^\s(]+)/);
              return null === e ? "" : e[1]
            }(t);
            return console.warn('DEPRECATED: DI is instantiating a token "'.concat(n, '" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in v10. Please add @Injectable() to the "').concat(n, '" class.')), e
          }
          return null
        }(t);
        return null !== r ? function () {
          return r.factory(t)
        } : function () {
          return new t
        }
      }(t);
      throw new Error("unreachable")
    }

    function Ya(t, e, n) {
      var r, i = void 0;
      if (Ka(t)) {
        var a = Tt(t);
        return we(a) || Qa(a)
      }
      if (Xa(t)) i = function () {
        return Tt(t.useValue)
      }; else if ((r = t) && r.useFactory) i = function () {
        return t.useFactory.apply(t, _toConsumableArray($t(t.deps || [])))
      }; else if (function (t) {
        return !(!t || !t.useExisting)
      }(t)) i = function () {
        return Xt(Tt(t.useExisting))
      }; else {
        var o = Tt(t && (t.useClass || t.provide));
        if (o || function (t, e, n) {
          var r = "";
          throw t && e && (r = " - only instances of Provider and Type are allowed, got: [".concat(e.map((function (t) {
            return t == n ? "?" + n + "?" : "..."
          })).join(", "), "]")), new Error("Invalid provider for the NgModule '".concat(wt(t), "'") + r)
        }(e, n, t), !function (t) {
          return !!t.deps
        }(t)) return we(o) || Qa(o);
        i = function () {
          return _construct(o, _toConsumableArray($t(t.deps)))
        }
      }
      return i
    }

    function Za(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return {factory: t, value: e, multi: n ? [] : void 0}
    }

    function Xa(t) {
      return null !== t && "object" == typeof t && Wt in t
    }

    function Ka(t) {
      return "function" == typeof t
    }

    var $a = function (t, e, n) {
      return function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          r = arguments.length > 3 ? arguments[3] : void 0, i = Wa(t, e, n, r);
        return i._resolveInjectorDefTypes(), i
      }({name: n}, e, t, n)
    }, Ja = function () {
      var t = function () {
        function t() {
          _classCallCheck(this, t)
        }

        return _createClass(t, null, [{
          key: "create", value: function (t, e) {
            return Array.isArray(t) ? $a(t, e, "") : $a(t.providers, t.parent, t.name || "")
          }
        }]), t
      }();
      return t.THROW_IF_NOT_FOUND = Bt, t.NULL = new Jt, t.\u0275prov = ft({
        token: t,
        providedIn: "any",
        factory: function () {
          return Xt(Vt)
        }
      }), t.__NG_ELEMENT_ID__ = -1, t
    }(), to = new zt("AnalyzeForEntryComponents"), eo = new Map, no = new Set;

    function ro(t) {
      return "string" == typeof t ? t : t.text()
    }

    function io(t, e) {
      for (var n = t.styles, r = t.classes, i = 0, a = 0; a < e.length; a++) {
        var o = e[a];
        "number" == typeof o ? i = o : 1 == i ? r = Ct(r, o) : 2 == i && (n = Ct(n, o + ": " + e[++a] + ";"))
      }
      null !== n && (t.styles = n), null !== r && (t.classes = r)
    }

    var ao = null;

    function oo() {
      if (!ao) {
        var t = Dt.Symbol;
        if (t && t.iterator) ao = t.iterator; else for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) {
          var r = e[n];
          "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (ao = r)
        }
      }
      return ao
    }

    function so(t, e) {
      return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
    }

    function lo(t) {
      return !!uo(t) && (Array.isArray(t) || !(t instanceof Map) && oo() in t)
    }

    function uo(t) {
      return null !== t && ("function" == typeof t || "object" == typeof t)
    }

    function co(t, e, n) {
      return t[e] = n
    }

    function ho(t, e, n) {
      return !Object.is(t[e], n) && (t[e] = n, !0)
    }

    function fo(t, e, n, r) {
      var i = Qe();
      return ho(i, rn(), e) && (Ye(), function (t, e, n, r, i, a) {
        var o = Ne(t, e), s = e[11];
        if (null == r) De(s) ? s.removeAttribute(o, n, a) : o.removeAttribute(n); else {
          var l = null == i ? Nn(r) : i(r, t.tagName || "", n);
          De(s) ? s.setAttribute(o, n, l, a) : a ? o.setAttributeNS(a, n, l) : o.setAttribute(n, l)
        }
      }(mn(), i, t, e, n, r)), fo
    }

    function po(t, e, n, r) {
      return ho(t, rn(), n) ? e + Nn(n) + r : ci
    }

    function vo(t, e, n, r, i, a, o, s) {
      var l = Qe(), u = Ye(), c = t + 19, h = u.firstCreatePass ? function (t, e, n, r, i, a, o, s, l) {
        var u = e.consts, c = Ci(e, n[6], t, 0, o || null, Be(u, s));
        Ri(e, n, c, Be(u, l)), bn(e, c);
        var h = c.tViews = Pi(2, -1, r, i, a, e.directiveRegistry, e.pipeRegistry, null, e.schemas, u),
          f = Mi(0, null, 2, -1, null, null);
        return f.injectorIndex = c.injectorIndex, h.node = f, null !== e.queries && (e.queries.template(e, c), h.queries = e.queries.embeddedTView(c)), c
      }(t, u, l, e, n, r, i, a, o) : u.data[c];
      Ke(h, !1);
      var f = l[11].createComment("");
      wa(u, l, f, h), $r(f, l), Ki(l, l[c] = Qi(f, l, f, h)), Ae(h) && Ai(u, l, h), null != o && Oi(l, h, s)
    }

    function go(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ut.Default, n = Qe();
      return null == n ? Xt(t, e) : Xn(Xe(), n, Tt(t), e)
    }

    function yo(t) {
      return function (t, e) {
        if ("class" === e) return t.classes;
        if ("style" === e) return t.styles;
        var n = t.attrs;
        if (n) for (var r = n.length, i = 0; i < r;) {
          var a = n[i];
          if (On(a)) break;
          if (0 === a) i += 2; else if ("number" == typeof a) for (i++; i < r && "string" == typeof n[i];) i++; else {
            if (a === e) return n[i + 1];
            i += 2
          }
        }
        return null
      }(Xe(), t)
    }

    function mo() {
      throw new Error("invalid")
    }

    function _o(t, e, n) {
      var r = Qe();
      return ho(r, rn(), e) && Ii(Ye(), mn(), r, t, e, r[11], n, !1), _o
    }

    function ko(t, e, n, r, i) {
      var a = i ? "class" : "style";
      oa(t, n, e.inputs[a], a, r)
    }

    function bo(t, e, n, r) {
      var i = Qe(), a = Ye(), o = 19 + t, s = i[11], l = i[o] = bi(e, s, We.lFrame.currentNamespace),
        u = a.firstCreatePass ? function (t, e, n, r, i, a, o) {
          var s = e.consts, l = Be(s, a), u = Ci(e, n[6], t, 3, i, l);
          return Ri(e, n, u, Be(s, o)), null !== u.mergedAttrs && io(u, u.mergedAttrs), null !== e.queries && e.queries.elementStart(e, u), u
        }(t, a, i, 0, e, n, r) : a.data[o];
      Ke(u, !0);
      var c = u.mergedAttrs;
      null !== c && An(s, l, c);
      var h = u.classes;
      null !== h && Aa(s, l, h);
      var f = u.styles;
      null !== f && Ea(s, l, f), wa(a, i, l, u), 0 === We.lFrame.elementDepthCount && $r(l, i), We.lFrame.elementDepthCount++, Ae(u) && (Ai(a, i, u), function (t, e, n) {
        if (Te(e)) for (var r = e.directiveEnd, i = e.directiveStart; i < r; i++) {
          var a = t.data[i];
          a.contentQueries && a.contentQueries(1, n[i], i)
        }
      }(a, u, i)), null !== r && Oi(i, u)
    }

    function wo() {
      var t = Xe();
      $e() ? Je() : Ke(t = t.parent, !1);
      var e = t;
      We.lFrame.elementDepthCount--;
      var n = Ye();
      n.firstCreatePass && (bn(n, t), Te(t) && n.queries.elementEnd(t)), null !== e.classes && function (t) {
        return 0 != (16 & t.flags)
      }(e) && ko(n, e, Qe(), e.classes, !0), null !== e.styles && function (t) {
        return 0 != (32 & t.flags)
      }(e) && ko(n, e, Qe(), e.styles, !1)
    }

    function Co(t, e, n, r) {
      bo(t, e, n, r), wo()
    }

    function xo() {
      return Qe()
    }

    function So(t) {
      return !!t && "function" == typeof t.then
    }

    function To(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0, i = Qe(), a = Ye(), o = Xe();
      return function (t, e, n, r, i, a) {
        var o = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          s = arguments.length > 7 ? arguments[7] : void 0, l = Ae(r),
          u = t.firstCreatePass && (t.cleanup || (t.cleanup = [])), c = ra(e), h = !0;
        if (3 === r.type) {
          var f = Ne(r, e), d = s ? s(f) : he, p = d.target || f, v = c.length, g = s ? function (t) {
            return s(Re(t[r.index])).target
          } : r.index;
          if (De(n)) {
            var y = null;
            if (!s && l && (y = function (t, e, n, r) {
              var i = t.cleanup;
              if (null != i) for (var a = 0; a < i.length - 1; a += 2) {
                var o = i[a];
                if (o === n && i[a + 1] === r) {
                  var s = e[7], l = i[a + 2];
                  return s.length > l ? s[l] : null
                }
                "string" == typeof o && (a += 2)
              }
              return null
            }(t, e, i, r.index)), null !== y) (y.__ngLastListenerFn__ || y).__ngNextListenerFn__ = a, y.__ngLastListenerFn__ = a, h = !1; else {
              a = Ao(r, e, a, !1);
              var m = n.listen(d.name || p, i, a);
              c.push(a, m), u && u.push(i, g, v, v + 1)
            }
          } else a = Ao(r, e, a, !0), p.addEventListener(i, a, o), c.push(a), u && u.push(i, g, v, o)
        }
        var _, k = r.outputs;
        if (h && null !== k && (_ = k[i])) {
          var b = _.length;
          if (b) for (var w = 0; w < b; w += 2) {
            var C = e[_[w]][_[w + 1]].subscribe(a), x = c.length;
            c.push(a, C), u && u.push(i, r.index, x, -(x + 1))
          }
        }
      }(a, i, i[11], o, t, e, n, r), To
    }

    function Eo(t, e, n) {
      try {
        return !1 !== e(n)
      } catch (r) {
        return aa(t, r), !1
      }
    }

    function Ao(t, e, n, r) {
      return function i(a) {
        if (a === Function) return n;
        var o = 2 & t.flags ? He(t.index, e) : e;
        0 == (32 & e[2]) && $i(o);
        for (var s = Eo(e, n, a), l = i.__ngNextListenerFn__; l;) s = Eo(e, l, a) && s, l = l.__ngNextListenerFn__;
        return r && !1 === s && (a.preventDefault(), a.returnValue = !1), s
      }
    }

    function Oo() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
      return function (t) {
        return (We.lFrame.contextLView = function (t, e) {
          for (; t > 0;) e = e[15], t--;
          return e
        }(t, We.lFrame.contextLView))[8]
      }(t)
    }

    var Lo = [];

    function Po(t, e, n, r, i) {
      for (var a = t[n + 1], o = null === e, s = r ? vi(a) : yi(a), l = !1; 0 !== s && (!1 === l || o);) {
        var u = t[s + 1];
        Mo(t[s], e) && (l = !0, t[s + 1] = r ? _i(u) : gi(u)), s = r ? vi(u) : yi(u)
      }
      l && (t[n + 1] = r ? gi(a) : _i(a))
    }

    function Mo(t, e) {
      return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && le(t, e) >= 0
    }

    var Do = {textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0};

    function Io(t) {
      return t.substring(Do.key, Do.keyEnd)
    }

    function Ro(t, e) {
      var n = Do.textEnd;
      return n === e ? -1 : (e = Do.keyEnd = function (t, e, n) {
        for (; e < n && t.charCodeAt(e) > 32;) e++;
        return e
      }(t, Do.key = e, n), Fo(t, e, n))
    }

    function Fo(t, e, n) {
      for (; e < n && t.charCodeAt(e) <= 32;) e++;
      return e
    }

    function No(t, e, n) {
      return Uo(t, e, n, !1), No
    }

    function jo(t, e) {
      return Uo(t, e, null, !0), jo
    }

    function Ho(t, e) {
      for (var n = function (t) {
        return function (t) {
          Do.key = 0, Do.keyEnd = 0, Do.value = 0, Do.valueEnd = 0, Do.textEnd = t.length
        }(t), Ro(t, Fo(t, 0, Do.textEnd))
      }(e); n >= 0; n = Ro(e, n)) oe(t, Io(e), !0)
    }

    function Uo(t, e, n, r) {
      var i, a, o = Qe(), s = Ye(), l = an(2);
      (s.firstUpdatePass && Bo(s, t, l, r), e !== ci && ho(o, l, e)) && (null == n && (i = null === (a = We.lFrame) ? null : a.currentSanitizer) && (n = i), Go(s, s.data[gn() + 19], o, o[11], t, o[l + 1] = function (t, e) {
        return null == t || ("function" == typeof e ? t = e(t) : "string" == typeof e ? t += e : "object" == typeof t && (t = wt(vr(t)))), t
      }(e, n), r, l))
    }

    function zo(t, e, n, r) {
      var i = Ye(), a = an(2);
      i.firstUpdatePass && Bo(i, null, a, r);
      var o = Qe();
      if (n !== ci && ho(o, a, n)) {
        var s = i.data[gn() + 19];
        if (Zo(s, r) && !Vo(i, a)) {
          var l = r ? s.classes : s.styles;
          null !== l && (n = Ct(l, n || "")), ko(i, s, o, n, r)
        } else !function (t, e, n, r, i, a, o, s) {
          i === ci && (i = Lo);
          for (var l = 0, u = 0, c = 0 < i.length ? i[0] : null, h = 0 < a.length ? a[0] : null; null !== c || null !== h;) {
            var f = l < i.length ? i[l + 1] : void 0, d = u < a.length ? a[u + 1] : void 0, p = null, v = void 0;
            c === h ? (l += 2, u += 2, f !== d && (p = h, v = d)) : null === h || null !== c && c < h ? (l += 2, p = c) : (u += 2, p = h, v = d), null !== p && Go(t, e, n, r, p, v, o, s), c = l < i.length ? i[l] : null, h = u < a.length ? a[u] : null
          }
        }(i, s, o, o[11], o[a + 1], o[a + 1] = function (t, e, n) {
          if (null == n || "" === n) return Lo;
          var r = [], i = vr(n);
          if (Array.isArray(i)) for (var a = 0; a < i.length; a++) t(r, i[a], !0); else if ("object" == typeof i) for (var o in i) i.hasOwnProperty(o) && t(r, o, i[o]); else "string" == typeof i && e(r, i);
          return r
        }(t, e, n), r, a)
      }
    }

    function Vo(t, e) {
      return e >= t.expandoStartIndex
    }

    function Bo(t, e, n, r) {
      var i = t.data;
      if (null === i[n + 1]) {
        var a = i[gn() + 19], o = Vo(t, n);
        Zo(a, r) && null === e && !o && (e = !1), e = function (t, e, n, r) {
          var i = function (t) {
            var e = We.lFrame.currentDirectiveIndex;
            return -1 === e ? null : t[e]
          }(t), a = r ? e.residualClasses : e.residualStyles;
          if (null === i) 0 === (r ? e.classBindings : e.styleBindings) && (n = Wo(n = qo(null, t, e, n, r), e.attrs, r), a = null); else {
            var o = e.directiveStylingLast;
            if (-1 === o || t[o] !== i) if (n = qo(i, t, e, n, r), null === a) {
              var s = function (t, e, n) {
                var r = n ? e.classBindings : e.styleBindings;
                if (0 !== yi(r)) return t[vi(r)]
              }(t, e, r);
              void 0 !== s && Array.isArray(s) && function (t, e, n, r) {
                t[vi(n ? e.classBindings : e.styleBindings)] = r
              }(t, e, r, s = Wo(s = qo(null, t, e, s[1], r), e.attrs, r))
            } else a = function (t, e, n) {
              for (var r = void 0, i = e.directiveEnd, a = 1 + e.directiveStylingLast; a < i; a++) r = Wo(r, t[a].hostAttrs, n);
              return Wo(r, e.attrs, n)
            }(t, e, r)
          }
          return void 0 !== a && (r ? e.residualClasses = a : e.residualStyles = a), n
        }(i, a, e, r), function (t, e, n, r, i, a) {
          var o = a ? e.classBindings : e.styleBindings, s = vi(o), l = yi(o);
          t[r] = n;
          var u, c = !1;
          if (Array.isArray(n)) {
            var h = n;
            (null === (u = h[1]) || le(h, u) > 0) && (c = !0)
          } else u = n;
          if (i) if (0 !== l) {
            var f = vi(t[s + 1]);
            t[r + 1] = pi(f, s), 0 !== f && (t[f + 1] = mi(t[f + 1], r)), t[s + 1] = 131071 & t[s + 1] | r << 17
          } else t[r + 1] = pi(s, 0), 0 !== s && (t[s + 1] = mi(t[s + 1], r)), s = r; else t[r + 1] = pi(l, 0), 0 === s ? s = r : t[l + 1] = mi(t[l + 1], r), l = r;
          c && (t[r + 1] = gi(t[r + 1])), Po(t, u, r, !0), Po(t, u, r, !1), function (t, e, n, r, i) {
            var a = i ? t.residualClasses : t.residualStyles;
            null != a && "string" == typeof e && le(a, e) >= 0 && (n[r + 1] = _i(n[r + 1]))
          }(e, u, t, r, a), o = pi(s, l), a ? e.classBindings = o : e.styleBindings = o
        }(i, a, e, n, o, r)
      }
    }

    function qo(t, e, n, r, i) {
      var a = null, o = n.directiveEnd, s = n.directiveStylingLast;
      for (-1 === s ? s = n.directiveStart : s++; s < o && (r = Wo(r, (a = e[s]).hostAttrs, i), a !== t);) s++;
      return null !== t && (n.directiveStylingLast = s), r
    }

    function Wo(t, e, n) {
      var r = n ? 1 : 2, i = -1;
      if (null !== e) for (var a = 0; a < e.length; a++) {
        var o = e[a];
        "number" == typeof o ? i = o : i === r && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]), oe(t, o, !!n || e[++a]))
      }
      return void 0 === t ? null : t
    }

    function Go(t, e, n, r, i, a, o, s) {
      if (3 === e.type) {
        var l = t.data, u = l[s + 1];
        Yo(1 == (1 & u) ? Qo(l, e, n, i, yi(u), o) : void 0) || (Yo(a) || 2 == (2 & u) && (a = Qo(l, null, n, i, s, o)), function (t, e, n, r, i) {
          var a = De(t);
          if (e) i ? a ? t.addClass(n, r) : n.classList.add(r) : a ? t.removeClass(n, r) : n.classList.remove(r); else {
            var o = -1 == r.indexOf("-") ? void 0 : 2;
            null == i ? a ? t.removeStyle(n, r, o) : n.style.removeProperty(r) : a ? t.setStyle(n, r, i, o) : n.style.setProperty(r, i)
          }
        }(r, o, Fe(gn(), n), i, a))
      }
    }

    function Qo(t, e, n, r, i, a) {
      for (var o = null === e, s = void 0; i > 0;) {
        var l = t[i], u = Array.isArray(l), c = u ? l[1] : l, h = null === c, f = n[i + 1];
        f === ci && (f = h ? Lo : void 0);
        var d = h ? se(f, r) : c === r ? f : void 0;
        if (u && !Yo(d) && (d = se(l, r)), Yo(d) && (s = d, o)) return s;
        var p = t[i + 1];
        i = o ? vi(p) : yi(p)
      }
      if (null !== e) {
        var v = a ? e.residualClasses : e.residualStyles;
        null != v && (s = se(v, r))
      }
      return s
    }

    function Yo(t) {
      return void 0 !== t
    }

    function Zo(t, e) {
      return 0 != (t.flags & (e ? 16 : 32))
    }

    function Xo(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = Qe(), r = Ye(), i = t + 19,
        a = r.firstCreatePass ? Ci(r, n[6], t, 3, null, null) : r.data[i], o = n[i] = function (t, e) {
          return De(e) ? e.createText(t) : e.createTextNode(t)
        }(e, n[11]);
      wa(r, n, o, a), Ke(a, !1)
    }

    function Ko(t) {
      return $o("", t, ""), Ko
    }

    function $o(t, e, n) {
      var r = Qe(), i = po(r, t, e, n);
      return i !== ci && function (t, e, n) {
        var r = Fe(e, t), i = t[11];
        De(i) ? i.setValue(r, n) : r.textContent = n
      }(r, gn(), i), $o
    }

    function Jo(t, e, n) {
      var r = Qe();
      return ho(r, rn(), e) && Ii(Ye(), mn(), r, t, e, r[11], n, !0), Jo
    }

    function ts(t, e) {
      var n = Ue(t)[1], r = n.data.length - 1;
      bn(n, {directiveStart: r, directiveEnd: r + 1})
    }

    function es(t) {
      for (var e = Object.getPrototypeOf(t.type.prototype).constructor, n = !0, r = [t]; e;) {
        var i = void 0;
        if (Oe(t)) i = e.\u0275cmp || e.\u0275dir; else {
          if (e.\u0275cmp) throw new Error("Directives cannot inherit Components");
          i = e.\u0275dir
        }
        if (i) {
          if (n) {
            r.push(i);
            var a = t;
            a.inputs = ns(t.inputs), a.declaredInputs = ns(t.declaredInputs), a.outputs = ns(t.outputs);
            var o = i.hostBindings;
            o && as(t, o);
            var s = i.viewQuery, l = i.contentQueries;
            if (s && rs(t, s), l && is(t, l), ht(t.inputs, i.inputs), ht(t.declaredInputs, i.declaredInputs), ht(t.outputs, i.outputs), Oe(i) && i.data.animation) {
              var u = t.data;
              u.animation = (u.animation || []).concat(i.data.animation)
            }
            a.afterContentChecked = a.afterContentChecked || i.afterContentChecked, a.afterContentInit = t.afterContentInit || i.afterContentInit, a.afterViewChecked = t.afterViewChecked || i.afterViewChecked, a.afterViewInit = t.afterViewInit || i.afterViewInit, a.doCheck = t.doCheck || i.doCheck, a.onDestroy = t.onDestroy || i.onDestroy, a.onInit = t.onInit || i.onInit
          }
          var c = i.features;
          if (c) for (var h = 0; h < c.length; h++) {
            var f = c[h];
            f && f.ngInherit && f(t), f === es && (n = !1)
          }
        }
        e = Object.getPrototypeOf(e)
      }
      !function (t) {
        for (var e = 0, n = null, r = t.length - 1; r >= 0; r--) {
          var i = t[r];
          i.hostVars = e += i.hostVars, i.hostAttrs = Pn(i.hostAttrs, n = Pn(n, i.hostAttrs))
        }
      }(r)
    }

    function ns(t) {
      return t === he ? {} : t === fe ? [] : t
    }

    function rs(t, e) {
      var n = t.viewQuery;
      t.viewQuery = n ? function (t, r) {
        e(t, r), n(t, r)
      } : e
    }

    function is(t, e) {
      var n = t.contentQueries;
      t.contentQueries = n ? function (t, r, i) {
        e(t, r, i), n(t, r, i)
      } : e
    }

    function as(t, e) {
      var n = t.hostBindings;
      t.hostBindings = n ? function (t, r) {
        e(t, r), n(t, r)
      } : e
    }

    var os = function () {
      function t(e, n, r) {
        _classCallCheck(this, t), this.previousValue = e, this.currentValue = n, this.firstChange = r
      }

      return _createClass(t, [{
        key: "isFirstChange", value: function () {
          return this.firstChange
        }
      }]), t
    }();

    function ss(t) {
      t.type.prototype.ngOnChanges && (t.setInput = ls, t.onChanges = function () {
        var t = us(this), e = t && t.current;
        if (e) {
          var n = t.previous;
          if (n === he) t.previous = e; else for (var r in e) n[r] = e[r];
          t.current = null, this.ngOnChanges(e)
        }
      })
    }

    function ls(t, e, n, r) {
      var i = us(t) || function (t, e) {
          return t.__ngSimpleChanges__ = e
        }(t, {previous: he, current: null}), a = i.current || (i.current = {}), o = i.previous,
        s = this.declaredInputs[n], l = o[s];
      a[s] = new os(l && l.currentValue, e, o === he), t[r] = e
    }

    function us(t) {
      return t.__ngSimpleChanges__ || null
    }

    function cs(t, e, n, r, i) {
      if (t = Tt(t), Array.isArray(t)) for (var a = 0; a < t.length; a++) cs(t[a], e, n, r, i); else {
        var o = Ye(), s = Qe(), l = Ka(t) ? t : Tt(t.provide), u = Ya(t), c = Xe(), h = 65535 & c.providerIndexes,
          f = c.directiveStart, d = c.providerIndexes >> 16;
        if (Ka(t) || !t.multi) {
          var p = new En(u, i, go), v = ds(l, e, i ? h : h + d, f);
          -1 === v ? (Zn(Wn(c, s), o, l), hs(o, t, e.length), e.push(l), c.directiveStart++, c.directiveEnd++, i && (c.providerIndexes += 65536), n.push(p), s.push(p)) : (n[v] = p, s[v] = p)
        } else {
          var g = ds(l, e, h + d, f), y = ds(l, e, h, h + d), m = g >= 0 && n[g], _ = y >= 0 && n[y];
          if (i && !_ || !i && !m) {
            Zn(Wn(c, s), o, l);
            var k = function (t, e, n, r, i) {
              var a = new En(t, n, go);
              return a.multi = [], a.index = e, a.componentProviders = 0, fs(a, i, r && !n), a
            }(i ? vs : ps, n.length, i, r, u);
            !i && _ && (n[y].providerFactory = k), hs(o, t, e.length, 0), e.push(l), c.directiveStart++, c.directiveEnd++, i && (c.providerIndexes += 65536), n.push(k), s.push(k)
          } else hs(o, t, g > -1 ? g : y, fs(n[i ? y : g], u, !i && r));
          !i && r && _ && n[y].componentProviders++
        }
      }
    }

    function hs(t, e, n, r) {
      var i = Ka(e);
      if (i || e.useClass) {
        var a = (e.useClass || e).prototype.ngOnDestroy;
        if (a) {
          var o = t.destroyHooks || (t.destroyHooks = []);
          if (!i && e.multi) {
            var s = o.indexOf(n);
            -1 === s ? o.push(n, [r, a]) : o[s + 1].push(r, a)
          } else o.push(n, a)
        }
      }
    }

    function fs(t, e, n) {
      return n && t.componentProviders++, t.multi.push(e) - 1
    }

    function ds(t, e, n, r) {
      for (var i = n; i < r; i++) if (e[i] === t) return i;
      return -1
    }

    function ps(t, e, n, r) {
      return gs(this.multi, [])
    }

    function vs(t, e, n, r) {
      var i, a = this.multi;
      if (this.providerFactory) {
        var o = this.providerFactory.componentProviders, s = tr(n, n[1], this.providerFactory.index, r);
        gs(a, i = s.slice(0, o));
        for (var l = o; l < s.length; l++) i.push(s[l])
      } else gs(a, i = []);
      return i
    }

    function gs(t, e) {
      for (var n = 0; n < t.length; n++) e.push((0, t[n])());
      return e
    }

    function ys(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return function (n) {
        n.providersResolver = function (n, r) {
          return function (t, e, n) {
            var r = Ye();
            if (r.firstCreatePass) {
              var i = Oe(t);
              cs(n, r.data, r.blueprint, i, !0), cs(e, r.data, r.blueprint, i, !1)
            }
          }(n, r ? r(t) : t, e)
        }
      }
    }

    ss.ngInherit = !0;
    var ms = function t() {
      _classCallCheck(this, t)
    }, _s = function () {
      function t() {
        _classCallCheck(this, t)
      }

      return _createClass(t, [{
        key: "resolveComponentFactory", value: function (t) {
          throw function (t) {
            var e = Error("No component factory found for ".concat(wt(t), ". Did you add it to @NgModule.entryComponents?"));
            return e.ngComponent = t, e
          }(t)
        }
      }]), t
    }(), ks = function () {
      var t = function t() {
        _classCallCheck(this, t)
      };
      return t.NULL = new _s, t
    }(), bs = function () {
      var t = function t(e) {
        _classCallCheck(this, t), this.nativeElement = e
      };
      return t.__NG_ELEMENT_ID__ = function () {
        return ws(t)
      }, t
    }(), ws = function (t) {
      return Ia(t, Xe(), Qe())
    }, Cs = function t() {
      _classCallCheck(this, t)
    }, xs = function () {
      var t = {Important: 1, DashCase: 2};
      return t[t.Important] = "Important", t[t.DashCase] = "DashCase", t
    }(), Ss = function () {
      var t = function t() {
        _classCallCheck(this, t)
      };
      return t.__NG_ELEMENT_ID__ = function () {
        return Ts()
      }, t
    }(), Ts = function () {
      var t = Qe(), e = He(Xe().index, t);
      return function (t) {
        var e = t[11];
        if (De(e)) return e;
        throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")
      }(xe(e) ? e : t)
    }, Es = function () {
      var t = function t() {
        _classCallCheck(this, t)
      };
      return t.\u0275prov = ft({
        token: t, providedIn: "root", factory: function () {
          return null
        }
      }), t
    }(), As = new function t(e) {
      _classCallCheck(this, t), this.full = e, this.major = e.split(".")[0], this.minor = e.split(".")[1], this.patch = e.split(".").slice(2).join(".")
    }("9.1.1"), Os = function () {
      function t() {
        _classCallCheck(this, t)
      }

      return _createClass(t, [{
        key: "supports", value: function (t) {
          return lo(t)
        }
      }, {
        key: "create", value: function (t) {
          return new Ps(t)
        }
      }]), t
    }(), Ls = function (t, e) {
      return e
    }, Ps = function () {
      function t(e) {
        _classCallCheck(this, t), this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = e || Ls
      }

      return _createClass(t, [{
        key: "forEachItem", value: function (t) {
          var e;
          for (e = this._itHead; null !== e; e = e._next) t(e)
        }
      }, {
        key: "forEachOperation", value: function (t) {
          for (var e = this._itHead, n = this._removalsHead, r = 0, i = null; e || n;) {
            var a = !n || e && e.currentIndex < Rs(n, r, i) ? e : n, o = Rs(a, r, i), s = a.currentIndex;
            if (a === n) r--, n = n._nextRemoved; else if (e = e._next, null == a.previousIndex) r++; else {
              i || (i = []);
              var l = o - r, u = s - r;
              if (l != u) {
                for (var c = 0; c < l; c++) {
                  var h = c < i.length ? i[c] : i[c] = 0, f = h + c;
                  u <= f && f < l && (i[c] = h + 1)
                }
                i[a.previousIndex] = u - l
              }
            }
            o !== s && t(a, o, s)
          }
        }
      }, {
        key: "forEachPreviousItem", value: function (t) {
          var e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
        }
      }, {
        key: "forEachAddedItem", value: function (t) {
          var e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
        }
      }, {
        key: "forEachMovedItem", value: function (t) {
          var e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
        }
      }, {
        key: "forEachRemovedItem", value: function (t) {
          var e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
        }
      }, {
        key: "forEachIdentityChange", value: function (t) {
          var e;
          for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
        }
      }, {
        key: "diff", value: function (t) {
          if (null == t && (t = []), !lo(t)) throw new Error("Error trying to diff '".concat(wt(t), "'. Only arrays and iterables are allowed"));
          return this.check(t) ? this : null
        }
      }, {
        key: "onDestroy", value: function () {
        }
      }, {
        key: "check", value: function (t) {
          var e = this;
          this._reset();
          var n, r, i, a = this._itHead, o = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (var s = 0; s < this.length; s++) r = t[s], i = this._trackByFn(s, r), null !== a && so(a.trackById, i) ? (o && (a = this._verifyReinsertion(a, r, i, s)), so(a.item, r) || this._addIdentityChange(a, r)) : (a = this._mismatch(a, r, i, s), o = !0), a = a._next
          } else n = 0, function (t, e) {
            if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e(t[n]); else for (var r, i = t[oo()](); !(r = i.next()).done;) e(r.value)
          }(t, (function (t) {
            i = e._trackByFn(n, t), null !== a && so(a.trackById, i) ? (o && (a = e._verifyReinsertion(a, t, i, n)), so(a.item, t) || e._addIdentityChange(a, t)) : (a = e._mismatch(a, t, i, n), o = !0), a = a._next, n++
          })), this.length = n;
          return this._truncate(a), this.collection = t, this.isDirty
        }
      }, {
        key: "_reset", value: function () {
          if (this.isDirty) {
            var t, e;
            for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
            this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
          }
        }
      }, {
        key: "_mismatch", value: function (t, e, n, r) {
          var i;
          return null === t ? i = this._itTail : (i = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (so(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, i, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (so(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, i, r)) : t = this._addAfter(new Ms(e, n), i, r), t
        }
      }, {
        key: "_verifyReinsertion", value: function (t, e, n, r) {
          var i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
          return null !== i ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t
        }
      }, {
        key: "_truncate", value: function (t) {
          for (; null !== t;) {
            var e = t._next;
            this._addToRemovals(this._unlink(t)), t = e
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
        }
      }, {
        key: "_reinsertAfter", value: function (t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          var r = t._prevRemoved, i = t._nextRemoved;
          return null === r ? this._removalsHead = i : r._nextRemoved = i, null === i ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t
        }
      }, {
        key: "_moveAfter", value: function (t, e, n) {
          return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
        }
      }, {
        key: "_addAfter", value: function (t, e, n) {
          return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
        }
      }, {
        key: "_insertAfter", value: function (t, e, n) {
          var r = null === e ? this._itHead : e._next;
          return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new Is), this._linkedRecords.put(t), t.currentIndex = n, t
        }
      }, {
        key: "_remove", value: function (t) {
          return this._addToRemovals(this._unlink(t))
        }
      }, {
        key: "_unlink", value: function (t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          var e = t._prev, n = t._next;
          return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
        }
      }, {
        key: "_addToMoves", value: function (t, e) {
          return t.previousIndex === e || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t
        }
      }, {
        key: "_addToRemovals", value: function (t) {
          return null === this._unlinkedRecords && (this._unlinkedRecords = new Is), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
        }
      }, {
        key: "_addIdentityChange", value: function (t, e) {
          return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
        }
      }, {
        key: "isDirty", get: function () {
          return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
        }
      }]), t
    }(), Ms = function t(e, n) {
      _classCallCheck(this, t), this.item = e, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
    }, Ds = function () {
      function t() {
        _classCallCheck(this, t), this._head = null, this._tail = null
      }

      return _createClass(t, [{
        key: "add", value: function (t) {
          null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
        }
      }, {
        key: "get", value: function (t, e) {
          var n;
          for (n = this._head; null !== n; n = n._nextDup) if ((null === e || e <= n.currentIndex) && so(n.trackById, t)) return n;
          return null
        }
      }, {
        key: "remove", value: function (t) {
          var e = t._prevDup, n = t._nextDup;
          return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
        }
      }]), t
    }(), Is = function () {
      function t() {
        _classCallCheck(this, t), this.map = new Map
      }

      return _createClass(t, [{
        key: "put", value: function (t) {
          var e = t.trackById, n = this.map.get(e);
          n || (n = new Ds, this.map.set(e, n)), n.add(t)
        }
      }, {
        key: "get", value: function (t, e) {
          var n = this.map.get(t);
          return n ? n.get(t, e) : null
        }
      }, {
        key: "remove", value: function (t) {
          var e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t
        }
      }, {
        key: "clear", value: function () {
          this.map.clear()
        }
      }, {
        key: "isEmpty", get: function () {
          return 0 === this.map.size
        }
      }]), t
    }();

    function Rs(t, e, n) {
      var r = t.previousIndex;
      if (null === r) return r;
      var i = 0;
      return n && r < n.length && (i = n[r]), r + e + i
    }

    var Fs = function () {
      function t() {
        _classCallCheck(this, t)
      }

      return _createClass(t, [{
        key: "supports", value: function (t) {
          return t instanceof Map || uo(t)
        }
      }, {
        key: "create", value: function () {
          return new Ns
        }
      }]), t
    }(), Ns = function () {
      function t() {
        _classCallCheck(this, t), this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
      }

      return _createClass(t, [{
        key: "forEachItem", value: function (t) {
          var e;
          for (e = this._mapHead; null !== e; e = e._next) t(e)
        }
      }, {
        key: "forEachPreviousItem", value: function (t) {
          var e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
        }
      }, {
        key: "forEachChangedItem", value: function (t) {
          var e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
        }
      }, {
        key: "forEachAddedItem", value: function (t) {
          var e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
        }
      }, {
        key: "forEachRemovedItem", value: function (t) {
          var e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
        }
      }, {
        key: "diff", value: function (t) {
          if (t) {
            if (!(t instanceof Map || uo(t))) throw new Error("Error trying to diff '".concat(wt(t), "'. Only maps and objects are allowed"))
          } else t = new Map;
          return this.check(t) ? this : null
        }
      }, {
        key: "onDestroy", value: function () {
        }
      }, {
        key: "check", value: function (t) {
          var e = this;
          this._reset();
          var n = this._mapHead;
          if (this._appendAfter = null, this._forEach(t, (function (t, r) {
            if (n && n.key === r) e._maybeAddToChanges(n, t), e._appendAfter = n, n = n._next; else {
              var i = e._getOrCreateRecordForKey(r, t);
              n = e._insertBeforeOrAppend(n, i)
            }
          })), n) {
            n._prev && (n._prev._next = null), this._removalsHead = n;
            for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
          }
          return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
        }
      }, {
        key: "_insertBeforeOrAppend", value: function (t, e) {
          if (t) {
            var n = t._prev;
            return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
          }
          return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
        }
      }, {
        key: "_getOrCreateRecordForKey", value: function (t, e) {
          if (this._records.has(t)) {
            var n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            var r = n._prev, i = n._next;
            return r && (r._next = i), i && (i._prev = r), n._next = null, n._prev = null, n
          }
          var a = new js(t);
          return this._records.set(t, a), a.currentValue = e, this._addToAdditions(a), a
        }
      }, {
        key: "_reset", value: function () {
          if (this.isDirty) {
            var t;
            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
            this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
          }
        }
      }, {
        key: "_maybeAddToChanges", value: function (t, e) {
          so(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
        }
      }, {
        key: "_addToAdditions", value: function (t) {
          null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
        }
      }, {
        key: "_addToChanges", value: function (t) {
          null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
        }
      }, {
        key: "_forEach", value: function (t, e) {
          t instanceof Map ? t.forEach(e) : Object.keys(t).forEach((function (n) {
            return e(t[n], n)
          }))
        }
      }, {
        key: "isDirty", get: function () {
          return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
        }
      }]), t
    }(), js = function t(e) {
      _classCallCheck(this, t), this.key = e, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
    }, Hs = function () {
      var t = function () {
        function t(e) {
          _classCallCheck(this, t), this.factories = e
        }

        return _createClass(t, [{
          key: "find", value: function (t) {
            var e, n = this.factories.find((function (e) {
              return e.supports(t)
            }));
            if (null != n) return n;
            throw new Error("Cannot find a differ supporting object '".concat(t, "' of type '").concat((e = t).name || typeof e, "'"))
          }
        }], [{
          key: "create", value: function (e, n) {
            if (null != n) {
              var r = n.factories.slice();
              e = e.concat(r)
            }
            return new t(e)
          }
        }, {
          key: "extend", value: function (e) {
            return {
              provide: t, useFactory: function (n) {
                if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                return t.create(e, n)
              }, deps: [[t, new lt, new ot]]
            }
          }
        }]), t
      }();
      return t.\u0275prov = ft({
        token: t, providedIn: "root", factory: function () {
          return new t([new Os])
        }
      }), t
    }(), Us = function () {
      var t = function () {
        function t(e) {
          _classCallCheck(this, t), this.factories = e
        }

        return _createClass(t, [{
          key: "find", value: function (t) {
            var e = this.factories.find((function (e) {
              return e.supports(t)
            }));
            if (e) return e;
            throw new Error("Cannot find a differ supporting object '".concat(t, "'"))
          }
        }], [{
          key: "create", value: function (e, n) {
            if (n) {
              var r = n.factories.slice();
              e = e.concat(r)
            }
            return new t(e)
          }
        }, {
          key: "extend", value: function (e) {
            return {
              provide: t, useFactory: function (n) {
                if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                return t.create(e, n)
              }, deps: [[t, new lt, new ot]]
            }
          }
        }]), t
      }();
      return t.\u0275prov = ft({
        token: t, providedIn: "root", factory: function () {
          return new t([new Fs])
        }
      }), t
    }(), zs = [new Fs], Vs = new Hs([new Os]), Bs = new Us(zs), qs = function () {
      var t = function t() {
        _classCallCheck(this, t)
      };
      return t.__NG_ELEMENT_ID__ = function () {
        return Ws(t, bs)
      }, t
    }(), Ws = function (t, e) {
      return Ra(t, e, Xe(), Qe())
    }, Gs = function () {
      var t = function t() {
        _classCallCheck(this, t)
      };
      return t.__NG_ELEMENT_ID__ = function () {
        return Qs(t, bs)
      }, t
    }(), Qs = function (t, e) {
      return Fa(t, e, Xe(), Qe())
    }, Ys = {}, Zs = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t) {
        var r;
        return _classCallCheck(this, n), (r = e.call(this)).ngModule = t, r
      }

      return _createClass(n, [{
        key: "resolveComponentFactory", value: function (t) {
          var e = be(t);
          return new $s(e, this.ngModule)
        }
      }]), n
    }(ks);

    function Xs(t) {
      var e = [];
      for (var n in t) t.hasOwnProperty(n) && e.push({propName: t[n], templateName: n});
      return e
    }

    var Ks = new zt("SCHEDULER_TOKEN", {
        providedIn: "root", factory: function () {
          return Hn
        }
      }), $s = function (t) {
        _inherits(n, t);
        var e = _createSuper(n);

        function n(t, r) {
          var i;
          return _classCallCheck(this, n), (i = e.call(this)).componentDef = t, i.ngModule = r, i.componentType = t.type, i.selector = t.selectors.map(ui).join(","), i.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], i.isBoundToModule = !!r, i
        }

        return _createClass(n, [{
          key: "create", value: function (t, e, n, r) {
            var i, a, o = (r = r || this.ngModule) ? function (t, e) {
                return {
                  get: function (n, r, i) {
                    var a = t.get(n, Ys, i);
                    return a !== Ys || r === Ys ? a : e.get(n, r, i)
                  }
                }
              }(t, r.injector) : t, s = o.get(Cs, Ie), l = o.get(Es, null), u = s.createRenderer(null, this.componentDef),
              c = this.componentDef.selectors[0][0] || "div", h = n ? function (t, e, n) {
                if (De(t)) return t.selectRootElement(e, n === ce.ShadowDom);
                var r = "string" == typeof e ? t.querySelector(e) : e;
                return r.textContent = "", r
              }(u, n, this.componentDef.encapsulation) : bi(c, s.createRenderer(null, this.componentDef), function (t) {
                var e = t.toLowerCase();
                return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null
              }(c)), f = this.componentDef.onPush ? 576 : 528,
              d = "string" == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
              p = {components: [], scheduler: Hn, clean: na, playerHandler: null, flags: 0},
              v = Pi(0, -1, null, 1, 0, null, null, null, null, null), g = wi(null, v, p, f, null, null, s, u, l, o);
            cn(g, null);
            try {
              var y = function (t, e, n, r, i, a) {
                var o = n[1];
                n[19] = t;
                var s = Ci(o, null, 0, 3, null, null), l = s.mergedAttrs = e.hostAttrs;
                null !== l && (io(s, l), null !== t && (An(i, t, l), null !== s.classes && Aa(i, t, s.classes), null !== s.styles && Ea(i, t, s.styles)));
                var u = r.createRenderer(t, e), c = wi(n, Li(e), null, e.onPush ? 64 : 16, n[19], s, r, u, void 0);
                return o.firstCreatePass && (Zn(Wn(s, n), o, e.type), Ui(o, s), Vi(s, n.length, 1)), Ki(n, c), n[19] = c
              }(h, this.componentDef, g, s, u);
              if (h) if (n) An(u, h, ["ng-version", As.full]); else {
                var m = function (t) {
                  for (var e = [], n = [], r = 1, i = 2; r < t.length;) {
                    var a = t[r];
                    if ("string" == typeof a) 2 === i ? "" !== a && e.push(a, t[++r]) : 8 === i && n.push(a); else {
                      if (!ai(i)) break;
                      i = a
                    }
                    r++
                  }
                  return {attrs: e, classes: n}
                }(this.componentDef.selectors[0]), _ = m.attrs, k = m.classes;
                _ && An(u, h, _), k && k.length > 0 && Aa(u, h, k.join(" "))
              }
              a = je(g[1], 0), e && (a.projection = e.map((function (t) {
                return Array.from(t)
              }))), i = function (t, e, n, r, i) {
                var a = n[1], o = function (t, e, n) {
                  var r = Xe();
                  t.firstCreatePass && (n.providersResolver && n.providersResolver(n), Hi(t, r, 1), Bi(t, e, n));
                  var i = tr(e, t, e.length - 1, r);
                  $r(i, e);
                  var a = Ne(r, e);
                  return a && $r(a, e), i
                }(a, n, e);
                r.components.push(o), t[8] = o, i && i.forEach((function (t) {
                  return t(o, e)
                })), e.contentQueries && e.contentQueries(1, o, n.length - 1);
                var s = Xe();
                if (a.firstCreatePass && (null !== e.hostBindings || null !== e.hostAttrs)) {
                  yn(s.index - 19);
                  var l = n[1];
                  Fi(l, e), Ni(l, n, e.hostVars), ji(e, o)
                }
                return o
              }(y, this.componentDef, g, p, [ts]), xi(v, g, null)
            } finally {
              vn()
            }
            var b = new Js(this.componentType, i, Ia(bs, a, g), g, a);
            return n && !d || (b.hostView._tViewNode.child = a), b
          }
        }, {
          key: "inputs", get: function () {
            return Xs(this.componentDef.inputs)
          }
        }, {
          key: "outputs", get: function () {
            return Xs(this.componentDef.outputs)
          }
        }]), n
      }(ms), Js = function (t) {
        _inherits(n, t);
        var e = _createSuper(n);

        function n(t, r, i, a, o) {
          var s, l, u, c;
          return _classCallCheck(this, n), (s = e.call(this)).location = i, s._rootLView = a, s._tNode = o, s.destroyCbs = [], s.instance = r, s.hostView = s.changeDetectorRef = new Da(a), s.hostView._tViewNode = (l = a[1], u = a, null == (c = l.node) && (l.node = c = Mi(0, null, 2, -1, null, null)), u[6] = c), s.componentType = t, s
        }

        return _createClass(n, [{
          key: "destroy", value: function () {
            this.destroyCbs && (this.destroyCbs.forEach((function (t) {
              return t()
            })), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
          }
        }, {
          key: "onDestroy", value: function (t) {
            this.destroyCbs && this.destroyCbs.push(t)
          }
        }, {
          key: "injector", get: function () {
            return new rr(this._tNode, this._rootLView)
          }
        }]), n
      }(function () {
        return function t() {
          _classCallCheck(this, t)
        }
      }()), tl = void 0,
      el = ["en", [["a", "p"], ["AM", "PM"], tl], [["AM", "PM"], tl, tl], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], tl, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], tl, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", tl, "{1} 'at' {0}", tl], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function (t) {
        var e = Math.floor(Math.abs(t)), n = t.toString().replace(/^[^.]*\.?/, "").length;
        return 1 === e && 0 === n ? 1 : 5
      }], nl = {};

    function rl(t) {
      return t in nl || (nl[t] = Dt.ng && Dt.ng.common && Dt.ng.common.locales && Dt.ng.common.locales[t]), nl[t]
    }

    var il = function () {
      var t = {
        LocaleId: 0,
        DayPeriodsFormat: 1,
        DayPeriodsStandalone: 2,
        DaysFormat: 3,
        DaysStandalone: 4,
        MonthsFormat: 5,
        MonthsStandalone: 6,
        Eras: 7,
        FirstDayOfWeek: 8,
        WeekendRange: 9,
        DateFormat: 10,
        TimeFormat: 11,
        DateTimeFormat: 12,
        NumberSymbols: 13,
        NumberFormats: 14,
        CurrencyCode: 15,
        CurrencySymbol: 16,
        CurrencyName: 17,
        Currencies: 18,
        Directionality: 19,
        PluralCase: 20,
        ExtraData: 21
      };
      return t[t.LocaleId] = "LocaleId", t[t.DayPeriodsFormat] = "DayPeriodsFormat", t[t.DayPeriodsStandalone] = "DayPeriodsStandalone", t[t.DaysFormat] = "DaysFormat", t[t.DaysStandalone] = "DaysStandalone", t[t.MonthsFormat] = "MonthsFormat", t[t.MonthsStandalone] = "MonthsStandalone", t[t.Eras] = "Eras", t[t.FirstDayOfWeek] = "FirstDayOfWeek", t[t.WeekendRange] = "WeekendRange", t[t.DateFormat] = "DateFormat", t[t.TimeFormat] = "TimeFormat", t[t.DateTimeFormat] = "DateTimeFormat", t[t.NumberSymbols] = "NumberSymbols", t[t.NumberFormats] = "NumberFormats", t[t.CurrencyCode] = "CurrencyCode", t[t.CurrencySymbol] = "CurrencySymbol", t[t.CurrencyName] = "CurrencyName", t[t.Currencies] = "Currencies", t[t.Directionality] = "Directionality", t[t.PluralCase] = "PluralCase", t[t.ExtraData] = "ExtraData", t
    }();

    function al(t) {
      var e;
      null == (e = t) && function (t, e, n, r) {
        throw new Error("ASSERTION ERROR: Expected localeId to be defined" + " [Expected=> null != ".concat(e, " <=Actual]"))
      }(0, e), "string" == typeof t && t.toLowerCase().replace(/_/g, "-")
    }

    var ol = new Map, sl = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        _classCallCheck(this, n), (i = e.call(this))._parent = r, i._bootstrapComponents = [], i.injector = _assertThisInitialized(i), i.destroyCbs = [], i.componentFactoryResolver = new Zs(_assertThisInitialized(i));
        var a = Ce(t), o = t[jt] || null;
        return o && al(o), i._bootstrapComponents = zn(a.bootstrap), i._r3Injector = Wa(t, r, [{
          provide: te,
          useValue: _assertThisInitialized(i)
        }, {
          provide: ks,
          useValue: i.componentFactoryResolver
        }], wt(t)), i._r3Injector._resolveInjectorDefTypes(), i.instance = i.get(t), i
      }

      return _createClass(n, [{
        key: "get", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ja.THROW_IF_NOT_FOUND,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ut.Default;
          return t === Ja || t === te || t === Vt ? this : this._r3Injector.get(t, e, n)
        }
      }, {
        key: "destroy", value: function () {
          var t = this._r3Injector;
          !t.destroyed && t.destroy(), this.destroyCbs.forEach((function (t) {
            return t()
          })), this.destroyCbs = null
        }
      }, {
        key: "onDestroy", value: function (t) {
          this.destroyCbs.push(t)
        }
      }]), n
    }(te), ll = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t) {
        var r;
        return _classCallCheck(this, n), (r = e.call(this)).moduleType = t, null !== Ce(t) && function t(e) {
          if (null !== e.\u0275mod.id) {
            var n = e.\u0275mod.id;
            (function (t, e, n) {
              if (e && e !== n) throw new Error("Duplicate module registered for ".concat(t, " - ").concat(wt(e), " vs ").concat(wt(e.name)))
            })(n, ol.get(n), e), ol.set(n, e)
          }
          var r = e.\u0275mod.imports;
          r instanceof Function && (r = r()), r && r.forEach((function (e) {
            return t(e)
          }))
        }(t), r
      }

      return _createClass(n, [{
        key: "create", value: function (t) {
          return new sl(this.moduleType, t)
        }
      }]), n
    }(ee);

    function ul(t, e, n) {
      var r = nn() + t, i = Qe();
      return i[r] === ci ? co(i, r, n ? e.call(n) : e()) : function (t, e) {
        return t[e]
      }(i, r)
    }

    function cl(t, e, n, r) {
      return function (t, e, n, r, i, a) {
        var o = e + n;
        return ho(t, o, i) ? co(t, o + 1, a ? r.call(a, i) : r(i)) : fl(t, o + 1)
      }(Qe(), nn(), t, e, n, r)
    }

    function hl(t, e, n, r, i) {
      return function (t, e, n, r, i, a, o) {
        var s = e + n;
        return function (t, e, n, r) {
          var i = ho(t, e, n);
          return ho(t, e + 1, r) || i
        }(t, s, i, a) ? co(t, s + 2, o ? r.call(o, i, a) : r(i, a)) : fl(t, s + 2)
      }(Qe(), nn(), t, e, n, r, i)
    }

    function fl(t, e) {
      var n = t[e];
      return n === ci ? void 0 : n
    }

    var dl = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        var t, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return _classCallCheck(this, n), (t = e.call(this)).__isAsync = r, t
      }

      return _createClass(n, [{
        key: "emit", value: function (t) {
          _get(_getPrototypeOf(n.prototype), "next", this).call(this, t)
        }
      }, {
        key: "subscribe", value: function (t, e, r) {
          var i, a = function (t) {
            return null
          }, o = function () {
            return null
          };
          t && "object" == typeof t ? (i = this.__isAsync ? function (e) {
            setTimeout((function () {
              return t.next(e)
            }))
          } : function (e) {
            t.next(e)
          }, t.error && (a = this.__isAsync ? function (e) {
            setTimeout((function () {
              return t.error(e)
            }))
          } : function (e) {
            t.error(e)
          }), t.complete && (o = this.__isAsync ? function () {
            setTimeout((function () {
              return t.complete()
            }))
          } : function () {
            t.complete()
          })) : (i = this.__isAsync ? function (e) {
            setTimeout((function () {
              return t(e)
            }))
          } : function (e) {
            t(e)
          }, e && (a = this.__isAsync ? function (t) {
            setTimeout((function () {
              return e(t)
            }))
          } : function (t) {
            e(t)
          }), r && (o = this.__isAsync ? function () {
            setTimeout((function () {
              return r()
            }))
          } : function () {
            r()
          }));
          var s = _get(_getPrototypeOf(n.prototype), "subscribe", this).call(this, i, a, o);
          return t instanceof d && t.add(s), s
        }
      }]), n
    }(O);

    function pl() {
      return this._results[oo()]()
    }

    var vl = function () {
      function t() {
        _classCallCheck(this, t), this.dirty = !0, this._results = [], this.changes = new dl, this.length = 0;
        var e = oo(), n = t.prototype;
        n[e] || (n[e] = pl)
      }

      return _createClass(t, [{
        key: "map", value: function (t) {
          return this._results.map(t)
        }
      }, {
        key: "filter", value: function (t) {
          return this._results.filter(t)
        }
      }, {
        key: "find", value: function (t) {
          return this._results.find(t)
        }
      }, {
        key: "reduce", value: function (t, e) {
          return this._results.reduce(t, e)
        }
      }, {
        key: "forEach", value: function (t) {
          this._results.forEach(t)
        }
      }, {
        key: "some", value: function (t) {
          return this._results.some(t)
        }
      }, {
        key: "toArray", value: function () {
          return this._results.slice()
        }
      }, {
        key: "toString", value: function () {
          return this._results.toString()
        }
      }, {
        key: "reset", value: function (t) {
          this._results = function t(e, n) {
            void 0 === n && (n = e);
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              Array.isArray(i) ? (n === e && (n = e.slice(0, r)), t(i, n)) : n !== e && n.push(i)
            }
            return n
          }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
        }
      }, {
        key: "notifyOnChanges", value: function () {
          this.changes.emit(this)
        }
      }, {
        key: "setDirty", value: function () {
          this.dirty = !0
        }
      }, {
        key: "destroy", value: function () {
          this.changes.complete(), this.changes.unsubscribe()
        }
      }]), t
    }(), gl = function () {
      function t(e) {
        _classCallCheck(this, t), this.queryList = e, this.matches = null
      }

      return _createClass(t, [{
        key: "clone", value: function () {
          return new t(this.queryList)
        }
      }, {
        key: "setDirty", value: function () {
          this.queryList.setDirty()
        }
      }]), t
    }(), yl = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        _classCallCheck(this, t), this.queries = e
      }

      return _createClass(t, [{
        key: "createEmbeddedView", value: function (e) {
          var n = e.queries;
          if (null !== n) {
            for (var r = null !== e.contentQueries ? e.contentQueries[0] : n.length, i = [], a = 0; a < r; a++) {
              var o = n.getByIndex(a);
              i.push(this.queries[o.indexInDeclarationView].clone())
            }
            return new t(i)
          }
          return null
        }
      }, {
        key: "insertView", value: function (t) {
          this.dirtyQueriesWithMatches(t)
        }
      }, {
        key: "detachView", value: function (t) {
          this.dirtyQueriesWithMatches(t)
        }
      }, {
        key: "dirtyQueriesWithMatches", value: function (t) {
          for (var e = 0; e < this.queries.length; e++) null !== Ll(t, e).matches && this.queries[e].setDirty()
        }
      }]), t
    }(), ml = function t(e, n, r) {
      var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      _classCallCheck(this, t), this.predicate = e, this.descendants = n, this.isStatic = r, this.read = i
    }, _l = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        _classCallCheck(this, t), this.queries = e
      }

      return _createClass(t, [{
        key: "elementStart", value: function (t, e) {
          for (var n = 0; n < this.queries.length; n++) this.queries[n].elementStart(t, e)
        }
      }, {
        key: "elementEnd", value: function (t) {
          for (var e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(t)
        }
      }, {
        key: "embeddedTView", value: function (e) {
          for (var n = null, r = 0; r < this.length; r++) {
            var i = null !== n ? n.length : 0, a = this.getByIndex(r).embeddedTView(e, i);
            a && (a.indexInDeclarationView = r, null !== n ? n.push(a) : n = [a])
          }
          return null !== n ? new t(n) : null
        }
      }, {
        key: "template", value: function (t, e) {
          for (var n = 0; n < this.queries.length; n++) this.queries[n].template(t, e)
        }
      }, {
        key: "getByIndex", value: function (t) {
          return this.queries[t]
        }
      }, {
        key: "track", value: function (t) {
          this.queries.push(t)
        }
      }, {
        key: "length", get: function () {
          return this.queries.length
        }
      }]), t
    }(), kl = function () {
      function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        _classCallCheck(this, t), this.metadata = e, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n
      }

      return _createClass(t, [{
        key: "elementStart", value: function (t, e) {
          this.isApplyingToNode(e) && this.matchTNode(t, e)
        }
      }, {
        key: "elementEnd", value: function (t) {
          this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
        }
      }, {
        key: "template", value: function (t, e) {
          this.elementStart(t, e)
        }
      }, {
        key: "embeddedTView", value: function (e, n) {
          return this.isApplyingToNode(e) ? (this.crossesNgTemplate = !0, this.addMatch(-e.index, n), new t(this.metadata)) : null
        }
      }, {
        key: "isApplyingToNode", value: function (t) {
          if (this._appliesToNextNode && !1 === this.metadata.descendants) {
            for (var e = this._declarationNodeIndex, n = t.parent; null !== n && 4 === n.type && n.index !== e;) n = n.parent;
            return e === (null !== n ? n.index : -1)
          }
          return this._appliesToNextNode
        }
      }, {
        key: "matchTNode", value: function (t, e) {
          if (Array.isArray(this.metadata.predicate)) for (var n = this.metadata.predicate, r = 0; r < n.length; r++) this.matchTNodeWithReadOption(t, e, bl(e, n[r])); else {
            var i = this.metadata.predicate;
            i === qs ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1) : this.matchTNodeWithReadOption(t, e, Jn(e, t, i, !1, !1))
          }
        }
      }, {
        key: "matchTNodeWithReadOption", value: function (t, e, n) {
          if (null !== n) {
            var r = this.metadata.read;
            if (null !== r) if (r === bs || r === Gs || r === qs && 0 === e.type) this.addMatch(e.index, -2); else {
              var i = Jn(e, t, r, !1, !1);
              null !== i && this.addMatch(e.index, i)
            } else this.addMatch(e.index, n)
          }
        }
      }, {
        key: "addMatch", value: function (t, e) {
          null === this.matches ? this.matches = [t, e] : this.matches.push(t, e)
        }
      }]), t
    }();

    function bl(t, e) {
      var n = t.localNames;
      if (null !== n) for (var r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
      return null
    }

    function wl(t, e, n, r) {
      return -1 === n ? function (t, e) {
        return 3 === t.type || 4 === t.type ? Ia(bs, t, e) : 0 === t.type ? Ra(qs, bs, t, e) : null
      }(e, t) : -2 === n ? function (t, e, n) {
        return n === bs ? Ia(bs, e, t) : n === qs ? Ra(qs, bs, e, t) : n === Gs ? Fa(Gs, bs, e, t) : void 0
      }(t, e, r) : tr(t, t[1], n, e)
    }

    function Cl(t, e, n, r) {
      var i = e[5].queries[r];
      if (null === i.matches) {
        for (var a = t.data, o = n.matches, s = [], l = 0; l < o.length; l += 2) {
          var u = o[l];
          s.push(u < 0 ? null : wl(e, a[u], o[l + 1], n.metadata.read))
        }
        i.matches = s
      }
      return i.matches
    }

    function xl(t) {
      var e = Qe(), n = Ye(), r = sn();
      ln(r + 1);
      var i = Ll(n, r);
      if (t.dirty && ze(e) === i.metadata.isStatic) {
        if (null === i.matches) t.reset([]); else {
          var a = i.crossesNgTemplate ? function t(e, n, r, i) {
            var a = e.queries.getByIndex(r), o = a.matches;
            if (null !== o) for (var s = Cl(e, n, a, r), l = 0; l < o.length; l += 2) {
              var u = o[l];
              if (u > 0) i.push(s[l / 2]); else {
                for (var c = o[l + 1], h = n[-u], f = 9; f < h.length; f++) {
                  var d = h[f];
                  d[17] === d[3] && t(d[1], d, c, i)
                }
                if (null !== h[5]) for (var p = h[5], v = 0; v < p.length; v++) {
                  var g = p[v];
                  t(g[1], g, c, i)
                }
              }
            }
            return i
          }(n, e, r, []) : Cl(n, e, i, r);
          t.reset(a), t.notifyOnChanges()
        }
        return !0
      }
      return !1
    }

    function Sl(t, e, n) {
      !function (t, e, n, r, i, a) {
        t.firstCreatePass && Ol(t, new ml(n, r, !1, i), -1), Al(t, e)
      }(Ye(), Qe(), t, e, n)
    }

    function Tl(t, e, n, r) {
      !function (t, e, n, r, i, a, o, s) {
        t.firstCreatePass && (Ol(t, new ml(n, r, !1, i), o.index), function (t, e) {
          var n = t.contentQueries || (t.contentQueries = []);
          e !== (t.contentQueries.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e)
        }(t, s)), Al(t, e)
      }(Ye(), Qe(), e, n, r, 0, Xe(), t)
    }

    function El() {
      return t = Qe(), e = sn(), t[5].queries[e].queryList;
      var t, e
    }

    function Al(t, e) {
      var n = new vl;
      !function (t, e, n, r) {
        var i = ra(e);
        i.push(n), t.firstCreatePass && ia(t).push(r, i.length - 1)
      }(t, e, n, n.destroy), null === e[5] && (e[5] = new yl), e[5].queries.push(new gl(n))
    }

    function Ol(t, e, n) {
      null === t.queries && (t.queries = new _l), t.queries.track(new kl(e, n))
    }

    function Ll(t, e) {
      return t.queries.getByIndex(e)
    }

    var Pl = new zt("Application Initializer"), Ml = function () {
      var t = function () {
        function t(e) {
          var n = this;
          _classCallCheck(this, t), this.appInits = e, this.initialized = !1, this.done = !1, this.donePromise = new Promise((function (t, e) {
            n.resolve = t, n.reject = e
          }))
        }

        return _createClass(t, [{
          key: "runInitializers", value: function () {
            var t = this;
            if (!this.initialized) {
              var e = [], n = function () {
                t.done = !0, t.resolve()
              };
              if (this.appInits) for (var r = 0; r < this.appInits.length; r++) {
                var i = this.appInits[r]();
                So(i) && e.push(i)
              }
              Promise.all(e).then((function () {
                n()
              })).catch((function (e) {
                t.reject(e)
              })), 0 === e.length && n(), this.initialized = !0
            }
          }
        }]), t
      }();
      return t.\u0275fac = function (e) {
        return new (e || t)(Xt(Pl, 8))
      }, t.\u0275prov = ft({token: t, factory: t.\u0275fac}), t
    }(), Dl = new zt("AppId"), Il = {
      provide: Dl, useFactory: function () {
        return "".concat(Rl()).concat(Rl()).concat(Rl())
      }, deps: []
    };

    function Rl() {
      return String.fromCharCode(97 + Math.floor(25 * Math.random()))
    }

    var Fl = new zt("Platform Initializer"), Nl = new zt("Platform ID"), jl = new zt("appBootstrapListener"),
      Hl = function () {
        var t = function () {
          function t() {
            _classCallCheck(this, t)
          }

          return _createClass(t, [{
            key: "log", value: function (t) {
              console.log(t)
            }
          }, {
            key: "warn", value: function (t) {
              console.warn(t)
            }
          }]), t
        }();
        return t.\u0275fac = function (e) {
          return new (e || t)
        }, t.\u0275prov = ft({token: t, factory: t.\u0275fac}), t
      }(), Ul = new zt("LocaleId"), zl = new zt("DefaultCurrencyCode"), Vl = function t(e, n) {
        _classCallCheck(this, t), this.ngModuleFactory = e, this.componentFactories = n
      }, Bl = function (t) {
        return new ll(t)
      }, ql = Bl, Wl = function (t) {
        return Promise.resolve(Bl(t))
      }, Gl = function (t) {
        var e = Bl(t), n = zn(Ce(t).declarations).reduce((function (t, e) {
          var n = be(e);
          return n && t.push(new $s(n)), t
        }), []);
        return new Vl(e, n)
      }, Ql = Gl, Yl = function (t) {
        return Promise.resolve(Gl(t))
      }, Zl = function () {
        var t = function () {
          function t() {
            _classCallCheck(this, t), this.compileModuleSync = ql, this.compileModuleAsync = Wl, this.compileModuleAndAllComponentsSync = Ql, this.compileModuleAndAllComponentsAsync = Yl
          }

          return _createClass(t, [{
            key: "clearCache", value: function () {
            }
          }, {
            key: "clearCacheFor", value: function (t) {
            }
          }, {
            key: "getModuleId", value: function (t) {
            }
          }]), t
        }();
        return t.\u0275fac = function (e) {
          return new (e || t)
        }, t.\u0275prov = ft({token: t, factory: t.\u0275fac}), t
      }(), Xl = new zt("compilerOptions"), Kl = Promise.resolve(0);

    function $l(t) {
      "undefined" == typeof Zone ? Kl.then((function () {
        t && t.apply(null, null)
      })) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
    }

    var Jl = function () {
      function t(e) {
        var n, r, i = e.enableLongStackTrace, a = void 0 !== i && i, o = e.shouldCoalesceEventChangeDetection,
          s = void 0 !== o && o;
        if (_classCallCheck(this, t), this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new dl(!1), this.onMicrotaskEmpty = new dl(!1), this.onStable = new dl(!1), this.onError = new dl(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
        Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), a && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = s, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function () {
          var t = Dt.requestAnimationFrame, e = Dt.cancelAnimationFrame;
          if ("undefined" != typeof Zone && t && e) {
            var n = t[Zone.__symbol__("OriginalDelegate")];
            n && (t = n);
            var r = e[Zone.__symbol__("OriginalDelegate")];
            r && (e = r)
          }
          return {nativeRequestAnimationFrame: t, nativeCancelAnimationFrame: e}
        }().nativeRequestAnimationFrame, r = !!(n = this).shouldCoalesceEventChangeDetection && n.nativeRequestAnimationFrame && function () {
          !function (t) {
            -1 === t.lastRequestAnimationFrameId && (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(Dt, (function () {
              t.lastRequestAnimationFrameId = -1, ru(t), nu(t)
            })), ru(t))
          }(n)
        }, n._inner = n._inner.fork({
          name: "angular",
          properties: {isAngularZone: !0, maybeDelayChangeDetection: r},
          onInvokeTask: function (t, e, i, a, o, s) {
            try {
              return iu(n), t.invokeTask(i, a, o, s)
            } finally {
              r && "eventTask" === a.type && r(), au(n)
            }
          },
          onInvoke: function (t, e, r, i, a, o, s) {
            try {
              return iu(n), t.invoke(r, i, a, o, s)
            } finally {
              au(n)
            }
          },
          onHasTask: function (t, e, r, i) {
            t.hasTask(r, i), e === r && ("microTask" == i.change ? (n._hasPendingMicrotasks = i.microTask, ru(n), nu(n)) : "macroTask" == i.change && (n.hasPendingMacrotasks = i.macroTask))
          },
          onHandleError: function (t, e, r, i) {
            return t.handleError(r, i), n.runOutsideAngular((function () {
              return n.onError.emit(i)
            })), !1
          }
        })
      }

      return _createClass(t, [{
        key: "run", value: function (t, e, n) {
          return this._inner.run(t, e, n)
        }
      }, {
        key: "runTask", value: function (t, e, n, r) {
          var i = this._inner, a = i.scheduleEventTask("NgZoneEvent: " + r, t, eu, tu, tu);
          try {
            return i.runTask(a, e, n)
          } finally {
            i.cancelTask(a)
          }
        }
      }, {
        key: "runGuarded", value: function (t, e, n) {
          return this._inner.runGuarded(t, e, n)
        }
      }, {
        key: "runOutsideAngular", value: function (t) {
          return this._outer.run(t)
        }
      }], [{
        key: "isInAngularZone", value: function () {
          return !0 === Zone.current.get("isAngularZone")
        }
      }, {
        key: "assertInAngularZone", value: function () {
          if (!t.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
        }
      }, {
        key: "assertNotInAngularZone", value: function () {
          if (t.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
        }
      }]), t
    }();

    function tu() {
    }

    var eu = {};

    function nu(t) {
      if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
        t._nesting++, t.onMicrotaskEmpty.emit(null)
      } finally {
        if (t._nesting--, !t.hasPendingMicrotasks) try {
          t.runOutsideAngular((function () {
            return t.onStable.emit(null)
          }))
        } finally {
          t.isStable = !0
        }
      }
    }

    function ru(t) {
      t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || t.shouldCoalesceEventChangeDetection && -1 !== t.lastRequestAnimationFrameId)
    }

    function iu(t) {
      t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
    }

    function au(t) {
      t._nesting--, nu(t)
    }

    var ou, su = function () {
      function t() {
        _classCallCheck(this, t), this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new dl, this.onMicrotaskEmpty = new dl, this.onStable = new dl, this.onError = new dl
      }

      return _createClass(t, [{
        key: "run", value: function (t, e, n) {
          return t.apply(e, n)
        }
      }, {
        key: "runGuarded", value: function (t, e, n) {
          return t.apply(e, n)
        }
      }, {
        key: "runOutsideAngular", value: function (t) {
          return t()
        }
      }, {
        key: "runTask", value: function (t, e, n, r) {
          return t.apply(e, n)
        }
      }]), t
    }(), lu = function () {
      var t = function () {
        function t(e) {
          var n = this;
          _classCallCheck(this, t), this._ngZone = e, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), e.run((function () {
            n.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
          }))
        }

        return _createClass(t, [{
          key: "_watchAngularEvents", value: function () {
            var t = this;
            this._ngZone.onUnstable.subscribe({
              next: function () {
                t._didWork = !0, t._isZoneStable = !1
              }
            }), this._ngZone.runOutsideAngular((function () {
              t._ngZone.onStable.subscribe({
                next: function () {
                  Jl.assertNotInAngularZone(), $l((function () {
                    t._isZoneStable = !0, t._runCallbacksIfReady()
                  }))
                }
              })
            }))
          }
        }, {
          key: "increasePendingRequestCount", value: function () {
            return this._pendingCount += 1, this._didWork = !0, this._pendingCount
          }
        }, {
          key: "decreasePendingRequestCount", value: function () {
            if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
            return this._runCallbacksIfReady(), this._pendingCount
          }
        }, {
          key: "isStable", value: function () {
            return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
          }
        }, {
          key: "_runCallbacksIfReady", value: function () {
            var t = this;
            if (this.isStable()) $l((function () {
              for (; 0 !== t._callbacks.length;) {
                var e = t._callbacks.pop();
                clearTimeout(e.timeoutId), e.doneCb(t._didWork)
              }
              t._didWork = !1
            })); else {
              var e = this.getPendingTasks();
              this._callbacks = this._callbacks.filter((function (t) {
                return !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)
              })), this._didWork = !0
            }
          }
        }, {
          key: "getPendingTasks", value: function () {
            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map((function (t) {
              return {source: t.source, creationLocation: t.creationLocation, data: t.data}
            })) : []
          }
        }, {
          key: "addCallback", value: function (t, e, n) {
            var r = this, i = -1;
            e && e > 0 && (i = setTimeout((function () {
              r._callbacks = r._callbacks.filter((function (t) {
                return t.timeoutId !== i
              })), t(r._didWork, r.getPendingTasks())
            }), e)), this._callbacks.push({doneCb: t, timeoutId: i, updateCb: n})
          }
        }, {
          key: "whenStable", value: function (t, e, n) {
            if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
            this.addCallback(t, e, n), this._runCallbacksIfReady()
          }
        }, {
          key: "getPendingRequestCount", value: function () {
            return this._pendingCount
          }
        }, {
          key: "findProviders", value: function (t, e, n) {
            return []
          }
        }]), t
      }();
      return t.\u0275fac = function (e) {
        return new (e || t)(Xt(Jl))
      }, t.\u0275prov = ft({token: t, factory: t.\u0275fac}), t
    }(), uu = function () {
      var t = function () {
        function t() {
          _classCallCheck(this, t), this._applications = new Map, cu.addToWindow(this)
        }

        return _createClass(t, [{
          key: "registerApplication", value: function (t, e) {
            this._applications.set(t, e)
          }
        }, {
          key: "unregisterApplication", value: function (t) {
            this._applications.delete(t)
          }
        }, {
          key: "unregisterAllApplications", value: function () {
            this._applications.clear()
          }
        }, {
          key: "getTestability", value: function (t) {
            return this._applications.get(t) || null
          }
        }, {
          key: "getAllTestabilities", value: function () {
            return Array.from(this._applications.values())
          }
        }, {
          key: "getAllRootElements", value: function () {
            return Array.from(this._applications.keys())
          }
        }, {
          key: "findTestabilityInTree", value: function (t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return cu.findTestabilityInTree(this, t, e)
          }
        }]), t
      }();
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275prov = ft({token: t, factory: t.\u0275fac}), t
    }(), cu = new (function () {
      function t() {
        _classCallCheck(this, t)
      }

      return _createClass(t, [{
        key: "addToWindow", value: function (t) {
        }
      }, {
        key: "findTestabilityInTree", value: function (t, e, n) {
          return null
        }
      }]), t
    }()), hu = function (t, e, n) {
      var r = t.get(Xl, []).concat(e), i = new ll(n);
      if (0 === eo.size) return Promise.resolve(i);
      var a, o, s = (a = r.map((function (t) {
        return t.providers
      })), o = [], a.forEach((function (t) {
        return t && o.push.apply(o, _toConsumableArray(t))
      })), o);
      if (0 === s.length) return Promise.resolve(i);
      var l = function () {
        var t = Dt.ng;
        if (!t || !t.\u0275compilerFacade) throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");
        return t.\u0275compilerFacade
      }(), u = Ja.create({providers: s}).get(l.ResourceLoader);
      return function (t) {
        var e = [], n = new Map;

        function r(t) {
          var e = n.get(t);
          if (!e) {
            var r = function (t) {
              return Promise.resolve(u.get(t))
            }(t);
            n.set(t, e = r.then(ro))
          }
          return e
        }

        return eo.forEach((function (t, n) {
          var i = [];
          t.templateUrl && i.push(r(t.templateUrl).then((function (e) {
            t.template = e
          })));
          var a = t.styleUrls, o = t.styles || (t.styles = []), s = t.styles.length;
          a && a.forEach((function (e, n) {
            o.push(""), i.push(r(e).then((function (r) {
              o[s + n] = r, a.splice(a.indexOf(e), 1), 0 == a.length && (t.styleUrls = void 0)
            })))
          }));
          var l = Promise.all(i).then((function () {
            return function (t) {
              no.delete(t)
            }(n)
          }));
          e.push(l)
        })), eo = new Map, Promise.all(e).then((function () {
        }))
      }().then((function () {
        return i
      }))
    }, fu = new zt("AllowMultipleToken"), du = function t(e, n) {
      _classCallCheck(this, t), this.name = e, this.token = n
    };

    function pu(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = "Platform: " + e, i = new zt(r);
      return function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], a = vu();
        if (!a || a.injector.get(fu, !1)) if (t) t(n.concat(e).concat({provide: i, useValue: !0})); else {
          var o = n.concat(e).concat({provide: i, useValue: !0}, {provide: Ha, useValue: "platform"});
          !function (t) {
            if (ou && !ou.destroyed && !ou.injector.get(fu, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
            ou = t.get(gu);
            var e = t.get(Fl, null);
            e && e.forEach((function (t) {
              return t()
            }))
          }(Ja.create({providers: o, name: r}))
        }
        return function (t) {
          var e = vu();
          if (!e) throw new Error("No platform exists!");
          if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
          return e
        }(i)
      }
    }

    function vu() {
      return ou && !ou.destroyed ? ou : null
    }

    var gu = function () {
      var t = function () {
        function t(e) {
          _classCallCheck(this, t), this._injector = e, this._modules = [], this._destroyListeners = [], this._destroyed = !1
        }

        return _createClass(t, [{
          key: "bootstrapModuleFactory", value: function (t, e) {
            var n, r, i = this,
              a = (n = e ? e.ngZone : void 0, r = e && e.ngZoneEventCoalescing || !1, "noop" === n ? new su : ("zone.js" === n ? void 0 : n) || new Jl({
                enableLongStackTrace: kr(),
                shouldCoalesceEventChangeDetection: r
              })), o = [{provide: Jl, useValue: a}];
            return a.run((function () {
              var e = Ja.create({providers: o, parent: i.injector, name: t.moduleType.name}), n = t.create(e),
                r = n.injector.get(lr, null);
              if (!r) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
              return n.onDestroy((function () {
                return ku(i._modules, n)
              })), a.runOutsideAngular((function () {
                return a.onError.subscribe({
                  next: function (t) {
                    r.handleError(t)
                  }
                })
              })), function (t, e, r) {
                try {
                  var a = ((o = n.injector.get(Ml)).runInitializers(), o.donePromise.then((function () {
                    return al(n.injector.get(Ul, "en-US") || "en-US"), i._moduleDoBootstrap(n), n
                  })));
                  return So(a) ? a.catch((function (n) {
                    throw e.runOutsideAngular((function () {
                      return t.handleError(n)
                    })), n
                  })) : a
                } catch (s) {
                  throw e.runOutsideAngular((function () {
                    return t.handleError(s)
                  })), s
                }
                var o
              }(r, a)
            }))
          }
        }, {
          key: "bootstrapModule", value: function (t) {
            var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = yu({}, n);
            return hu(this.injector, r, t).then((function (t) {
              return e.bootstrapModuleFactory(t, r)
            }))
          }
        }, {
          key: "_moduleDoBootstrap", value: function (t) {
            var e = t.injector.get(_u);
            if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach((function (t) {
              return e.bootstrap(t)
            })); else {
              if (!t.instance.ngDoBootstrap) throw new Error("The module ".concat(wt(t.instance.constructor), ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'));
              t.instance.ngDoBootstrap(e)
            }
            this._modules.push(t)
          }
        }, {
          key: "onDestroy", value: function (t) {
            this._destroyListeners.push(t)
          }
        }, {
          key: "destroy", value: function () {
            if (this._destroyed) throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach((function (t) {
              return t.destroy()
            })), this._destroyListeners.forEach((function (t) {
              return t()
            })), this._destroyed = !0
          }
        }, {
          key: "injector", get: function () {
            return this._injector
          }
        }, {
          key: "destroyed", get: function () {
            return this._destroyed
          }
        }]), t
      }();
      return t.\u0275fac = function (e) {
        return new (e || t)(Xt(Ja))
      }, t.\u0275prov = ft({token: t, factory: t.\u0275fac}), t
    }();

    function yu(t, e) {
      return Array.isArray(e) ? e.reduce(yu, t) : Object.assign(Object.assign({}, t), e)
    }

    var mu, _u = ((mu = function () {
      function t(e, n, r, i, a, o) {
        var s = this;
        _classCallCheck(this, t), this._zone = e, this._console = n, this._injector = r, this._exceptionHandler = i, this._componentFactoryResolver = a, this._initStatus = o, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = kr(), this._zone.onMicrotaskEmpty.subscribe({
          next: function () {
            s._zone.run((function () {
              s.tick()
            }))
          }
        });
        var l = new C((function (t) {
          s._stable = s._zone.isStable && !s._zone.hasPendingMacrotasks && !s._zone.hasPendingMicrotasks, s._zone.runOutsideAngular((function () {
            t.next(s._stable), t.complete()
          }))
        })), u = new C((function (t) {
          var e;
          s._zone.runOutsideAngular((function () {
            e = s._zone.onStable.subscribe((function () {
              Jl.assertNotInAngularZone(), $l((function () {
                s._stable || s._zone.hasPendingMacrotasks || s._zone.hasPendingMicrotasks || (s._stable = !0, t.next(!0))
              }))
            }))
          }));
          var n = s._zone.onUnstable.subscribe((function () {
            Jl.assertInAngularZone(), s._stable && (s._stable = !1, s._zone.runOutsideAngular((function () {
              t.next(!1)
            })))
          }));
          return function () {
            e.unsubscribe(), n.unsubscribe()
          }
        }));
        this.isStable = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
          var r = Number.POSITIVE_INFINITY, i = null, a = e[e.length - 1];
          return P(a) ? (i = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (r = e.pop())) : "number" == typeof a && (r = e.pop()), null === i && 1 === e.length && e[0] instanceof C ? e[0] : Y(r)(Z(e, i))
        }(l, u.pipe((function (t) {
          return X()((e = nt, function (t) {
            var n;
            n = "function" == typeof e ? e : function () {
              return e
            };
            var r = Object.create(t, tt);
            return r.source = t, r.subjectFactory = n, r
          })(t));
          var e
        })))
      }

      return _createClass(t, [{
        key: "bootstrap", value: function (t, e) {
          var n, r = this;
          if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
          n = t instanceof ms ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
          var i = n.isBoundToModule ? void 0 : this._injector.get(te), a = n.create(Ja.NULL, [], e || n.selector, i);
          a.onDestroy((function () {
            r._unloadComponent(a)
          }));
          var o = a.injector.get(lu, null);
          return o && a.injector.get(uu).registerApplication(a.location.nativeElement, o), this._loadComponent(a), kr() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), a
        }
      }, {
        key: "tick", value: function () {
          var t = this;
          if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
          try {
            this._runningTick = !0;
            var e, n = _createForOfIteratorHelper(this._views);
            try {
              for (n.s(); !(e = n.n()).done;) e.value.detectChanges()
            } catch (a) {
              n.e(a)
            } finally {
              n.f()
            }
            if (this._enforceNoNewChanges) {
              var r, i = _createForOfIteratorHelper(this._views);
              try {
                for (i.s(); !(r = i.n()).done;) r.value.checkNoChanges()
              } catch (a) {
                i.e(a)
              } finally {
                i.f()
              }
            }
          } catch (o) {
            this._zone.runOutsideAngular((function () {
              return t._exceptionHandler.handleError(o)
            }))
          } finally {
            this._runningTick = !1
          }
        }
      }, {
        key: "attachView", value: function (t) {
          var e = t;
          this._views.push(e), e.attachToAppRef(this)
        }
      }, {
        key: "detachView", value: function (t) {
          var e = t;
          ku(this._views, e), e.detachFromAppRef()
        }
      }, {
        key: "_loadComponent", value: function (t) {
          this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(jl, []).concat(this._bootstrapListeners).forEach((function (e) {
            return e(t)
          }))
        }
      }, {
        key: "_unloadComponent", value: function (t) {
          this.detachView(t.hostView), ku(this.components, t)
        }
      }, {
        key: "ngOnDestroy", value: function () {
          this._views.slice().forEach((function (t) {
            return t.destroy()
          }))
        }
      }, {
        key: "viewCount", get: function () {
          return this._views.length
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || mu)(Xt(Jl), Xt(Hl), Xt(Ja), Xt(lr), Xt(ks), Xt(Ml))
    }, mu.\u0275prov = ft({token: mu, factory: mu.\u0275fac}), mu);

    function ku(t, e) {
      var n = t.indexOf(e);
      n > -1 && t.splice(n, 1)
    }

    var bu = function t() {
      _classCallCheck(this, t)
    }, wu = function t() {
      _classCallCheck(this, t)
    }, Cu = {factoryPathPrefix: "", factoryPathSuffix: ".ngfactory"}, xu = function () {
      var t = function () {
        function t(e, n) {
          _classCallCheck(this, t), this._compiler = e, this._config = n || Cu
        }

        return _createClass(t, [{
          key: "load", value: function (t) {
            return this.loadAndCompile(t)
          }
        }, {
          key: "loadAndCompile", value: function (t) {
            var e = this, r = _slicedToArray(t.split("#"), 2), i = r[0], a = r[1];
            return void 0 === a && (a = "default"), n("zn8P")(i).then((function (t) {
              return t[a]
            })).then((function (t) {
              return Su(t, i, a)
            })).then((function (t) {
              return e._compiler.compileModuleAsync(t)
            }))
          }
        }, {
          key: "loadFactory", value: function (t) {
            var e = _slicedToArray(t.split("#"), 2), r = e[0], i = e[1], a = "NgFactory";
            return void 0 === i && (i = "default", a = ""), n("zn8P")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then((function (t) {
              return t[i + a]
            })).then((function (t) {
              return Su(t, r, i)
            }))
          }
        }]), t
      }();
      return t.\u0275fac = function (e) {
        return new (e || t)(Xt(Zl), Xt(wu, 8))
      }, t.\u0275prov = ft({token: t, factory: t.\u0275fac}), t
    }();

    function Su(t, e, n) {
      if (!t) throw new Error("Cannot find '".concat(n, "' in '").concat(e, "'"));
      return t
    }

    var Tu = pu(null, "core", [{provide: Nl, useValue: "unknown"}, {provide: gu, deps: [Ja]}, {
      provide: uu,
      deps: []
    }, {provide: Hl, deps: []}]), Eu = [{provide: _u, useClass: _u, deps: [Jl, Hl, Ja, lr, ks, Ml]}, {
      provide: Ks,
      deps: [Jl],
      useFactory: function (t) {
        var e = [];
        return t.onStable.subscribe((function () {
          for (; e.length;) e.pop()()
        })), function (t) {
          e.push(t)
        }
      }
    }, {provide: Ml, useClass: Ml, deps: [[new ot, Pl]]}, {provide: Zl, useClass: Zl, deps: []}, Il, {
      provide: Hs,
      useFactory: function () {
        return Vs
      },
      deps: []
    }, {
      provide: Us, useFactory: function () {
        return Bs
      }, deps: []
    }, {
      provide: Ul, useFactory: function (t) {
        return al(t = t || "undefined" != typeof $localize && $localize.locale || "en-US"), t
      }, deps: [[new at(Ul), new ot, new lt]]
    }, {provide: zl, useValue: "USD"}], Au = function () {
      var t = function t(e) {
        _classCallCheck(this, t)
      };
      return t.\u0275mod = me({type: t}), t.\u0275inj = dt({
        factory: function (e) {
          return new (e || t)(Xt(_u))
        }, providers: Eu
      }), t
    }(), Ou = null;

    function Lu() {
      return Ou
    }

    var Pu, Mu = new zt("DocumentToken"), Du = ((Pu = function t() {
      _classCallCheck(this, t)
    }).\u0275fac = function (t) {
      return new (t || Pu)
    }, Pu.\u0275prov = ft({factory: Iu, token: Pu, providedIn: "platform"}), Pu);

    function Iu() {
      return Xt(Nu)
    }

    var Ru, Fu = new zt("Location Initialized"), Nu = ((Ru = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t) {
        var r;
        return _classCallCheck(this, n), (r = e.call(this))._doc = t, r._init(), r
      }

      return _createClass(n, [{
        key: "_init", value: function () {
          this.location = Lu().getLocation(), this._history = Lu().getHistory()
        }
      }, {
        key: "getBaseHrefFromDOM", value: function () {
          return Lu().getBaseHref(this._doc)
        }
      }, {
        key: "onPopState", value: function (t) {
          Lu().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
        }
      }, {
        key: "onHashChange", value: function (t) {
          Lu().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
        }
      }, {
        key: "pushState", value: function (t, e, n) {
          ju() ? this._history.pushState(t, e, n) : this.location.hash = n
        }
      }, {
        key: "replaceState", value: function (t, e, n) {
          ju() ? this._history.replaceState(t, e, n) : this.location.hash = n
        }
      }, {
        key: "forward", value: function () {
          this._history.forward()
        }
      }, {
        key: "back", value: function () {
          this._history.back()
        }
      }, {
        key: "getState", value: function () {
          return this._history.state
        }
      }, {
        key: "href", get: function () {
          return this.location.href
        }
      }, {
        key: "protocol", get: function () {
          return this.location.protocol
        }
      }, {
        key: "hostname", get: function () {
          return this.location.hostname
        }
      }, {
        key: "port", get: function () {
          return this.location.port
        }
      }, {
        key: "pathname", get: function () {
          return this.location.pathname
        }, set: function (t) {
          this.location.pathname = t
        }
      }, {
        key: "search", get: function () {
          return this.location.search
        }
      }, {
        key: "hash", get: function () {
          return this.location.hash
        }
      }]), n
    }(Du)).\u0275fac = function (t) {
      return new (t || Ru)(Xt(Mu))
    }, Ru.\u0275prov = ft({factory: Hu, token: Ru, providedIn: "platform"}), Ru);

    function ju() {
      return !!window.history.pushState
    }

    function Hu() {
      return new Nu(Xt(Mu))
    }

    function Uu(t, e) {
      if (0 == t.length) return e;
      if (0 == e.length) return t;
      var n = 0;
      return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
    }

    function zu(t) {
      var e = t.match(/#|\?|$/), n = e && e.index || t.length;
      return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
    }

    function Vu(t) {
      return t && "?" !== t[0] ? "?" + t : t
    }

    var Bu, qu = ((Bu = function t() {
      _classCallCheck(this, t)
    }).\u0275fac = function (t) {
      return new (t || Bu)
    }, Bu.\u0275prov = ft({factory: Wu, token: Bu, providedIn: "root"}), Bu);

    function Wu(t) {
      var e = Xt(Mu).location;
      return new Xu(Xt(Du), e && e.origin || "")
    }

    var Gu, Qu, Yu, Zu = new zt("appBaseHref"), Xu = ((Yu = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        if (_classCallCheck(this, n), (i = e.call(this))._platformLocation = t, null == r && (r = i._platformLocation.getBaseHrefFromDOM()), null == r) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
        return i._baseHref = r, _possibleConstructorReturn(i)
      }

      return _createClass(n, [{
        key: "onPopState", value: function (t) {
          this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
        }
      }, {
        key: "getBaseHref", value: function () {
          return this._baseHref
        }
      }, {
        key: "prepareExternalUrl", value: function (t) {
          return Uu(this._baseHref, t)
        }
      }, {
        key: "path", value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            e = this._platformLocation.pathname + Vu(this._platformLocation.search), n = this._platformLocation.hash;
          return n && t ? "".concat(e).concat(n) : e
        }
      }, {
        key: "pushState", value: function (t, e, n, r) {
          var i = this.prepareExternalUrl(n + Vu(r));
          this._platformLocation.pushState(t, e, i)
        }
      }, {
        key: "replaceState", value: function (t, e, n, r) {
          var i = this.prepareExternalUrl(n + Vu(r));
          this._platformLocation.replaceState(t, e, i)
        }
      }, {
        key: "forward", value: function () {
          this._platformLocation.forward()
        }
      }, {
        key: "back", value: function () {
          this._platformLocation.back()
        }
      }]), n
    }(qu)).\u0275fac = function (t) {
      return new (t || Yu)(Xt(Du), Xt(Zu, 8))
    }, Yu.\u0275prov = ft({token: Yu, factory: Yu.\u0275fac}), Yu), Ku = ((Qu = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this))._platformLocation = t, i._baseHref = "", null != r && (i._baseHref = r), i
      }

      return _createClass(n, [{
        key: "onPopState", value: function (t) {
          this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
        }
      }, {
        key: "getBaseHref", value: function () {
          return this._baseHref
        }
      }, {
        key: "path", value: function () {
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var t = this._platformLocation.hash;
          return null == t && (t = "#"), t.length > 0 ? t.substring(1) : t
        }
      }, {
        key: "prepareExternalUrl", value: function (t) {
          var e = Uu(this._baseHref, t);
          return e.length > 0 ? "#" + e : e
        }
      }, {
        key: "pushState", value: function (t, e, n, r) {
          var i = this.prepareExternalUrl(n + Vu(r));
          0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.pushState(t, e, i)
        }
      }, {
        key: "replaceState", value: function (t, e, n, r) {
          var i = this.prepareExternalUrl(n + Vu(r));
          0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, i)
        }
      }, {
        key: "forward", value: function () {
          this._platformLocation.forward()
        }
      }, {
        key: "back", value: function () {
          this._platformLocation.back()
        }
      }]), n
    }(qu)).\u0275fac = function (t) {
      return new (t || Qu)(Xt(Du), Xt(Zu, 8))
    }, Qu.\u0275prov = ft({token: Qu, factory: Qu.\u0275fac}), Qu), $u = ((Gu = function () {
      function t(e, n) {
        var r = this;
        _classCallCheck(this, t), this._subject = new dl, this._urlChangeListeners = [], this._platformStrategy = e;
        var i = this._platformStrategy.getBaseHref();
        this._platformLocation = n, this._baseHref = zu(tc(i)), this._platformStrategy.onPopState((function (t) {
          r._subject.emit({url: r.path(!0), pop: !0, state: t.state, type: t.type})
        }))
      }

      return _createClass(t, [{
        key: "path", value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.normalize(this._platformStrategy.path(t))
        }
      }, {
        key: "getState", value: function () {
          return this._platformLocation.getState()
        }
      }, {
        key: "isCurrentPathEqualTo", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return this.path() == this.normalize(t + Vu(e))
        }
      }, {
        key: "normalize", value: function (e) {
          return t.stripTrailingSlash(function (t, e) {
            return t && e.startsWith(t) ? e.substring(t.length) : e
          }(this._baseHref, tc(e)))
        }
      }, {
        key: "prepareExternalUrl", value: function (t) {
          return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
        }
      }, {
        key: "go", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          this._platformStrategy.pushState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Vu(e)), n)
        }
      }, {
        key: "replaceState", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          this._platformStrategy.replaceState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Vu(e)), n)
        }
      }, {
        key: "forward", value: function () {
          this._platformStrategy.forward()
        }
      }, {
        key: "back", value: function () {
          this._platformStrategy.back()
        }
      }, {
        key: "onUrlChange", value: function (t) {
          var e = this;
          this._urlChangeListeners.push(t), this.subscribe((function (t) {
            e._notifyUrlChangeListeners(t.url, t.state)
          }))
        }
      }, {
        key: "_notifyUrlChangeListeners", value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 ? arguments[1] : void 0;
          this._urlChangeListeners.forEach((function (n) {
            return n(t, e)
          }))
        }
      }, {
        key: "subscribe", value: function (t, e, n) {
          return this._subject.subscribe({next: t, error: e, complete: n})
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || Gu)(Xt(qu), Xt(Du))
    }, Gu.normalizeQueryParams = Vu, Gu.joinWithSlash = Uu, Gu.stripTrailingSlash = zu, Gu.\u0275prov = ft({
      factory: Ju,
      token: Gu,
      providedIn: "root"
    }), Gu);

    function Ju() {
      return new $u(Xt(qu), Xt(Du))
    }

    function tc(t) {
      return t.replace(/\/index.html$/, "")
    }

    var ec, nc, rc, ic = function () {
      var t = {Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5};
      return t[t.Zero] = "Zero", t[t.One] = "One", t[t.Two] = "Two", t[t.Few] = "Few", t[t.Many] = "Many", t[t.Other] = "Other", t
    }(), ac = function t() {
      _classCallCheck(this, t)
    }, oc = ((ec = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t) {
        var r;
        return _classCallCheck(this, n), (r = e.call(this)).locale = t, r
      }

      return _createClass(n, [{
        key: "getPluralCategory", value: function (t, e) {
          switch (function (t) {
            return function (t) {
              var e = function (t) {
                return t.toLowerCase().replace(/_/g, "-")
              }(t), n = rl(e);
              if (n) return n;
              var r = e.split("-")[0];
              if (n = rl(r)) return n;
              if ("en" === r) return el;
              throw new Error('Missing locale data for the locale "'.concat(t, '".'))
            }(t)[il.PluralCase]
          }(e || this.locale)(t)) {
            case ic.Zero:
              return "zero";
            case ic.One:
              return "one";
            case ic.Two:
              return "two";
            case ic.Few:
              return "few";
            case ic.Many:
              return "many";
            default:
              return "other"
          }
        }
      }]), n
    }(ac)).\u0275fac = function (t) {
      return new (t || ec)(Xt(Ul))
    }, ec.\u0275prov = ft({token: ec, factory: ec.\u0275fac}), ec), sc = function () {
      function t(e, n, r, i) {
        _classCallCheck(this, t), this.$implicit = e, this.ngForOf = n, this.index = r, this.count = i
      }

      return _createClass(t, [{
        key: "first", get: function () {
          return 0 === this.index
        }
      }, {
        key: "last", get: function () {
          return this.index === this.count - 1
        }
      }, {
        key: "even", get: function () {
          return this.index % 2 == 0
        }
      }, {
        key: "odd", get: function () {
          return !this.even
        }
      }]), t
    }(), lc = ((nc = function () {
      function t(e, n, r) {
        _classCallCheck(this, t), this._viewContainer = e, this._template = n, this._differs = r, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
      }

      return _createClass(t, [{
        key: "ngDoCheck", value: function () {
          if (this._ngForOfDirty) {
            this._ngForOfDirty = !1;
            var t = this._ngForOf;
            if (!this._differ && t) try {
              this._differ = this._differs.find(t).create(this.ngForTrackBy)
            } catch (r) {
              throw new Error("Cannot find a differ supporting object '".concat(t, "' of type '").concat((e = t).name || typeof e, "'. NgFor only supports binding to Iterables such as Arrays."))
            }
          }
          var e;
          if (this._differ) {
            var n = this._differ.diff(this._ngForOf);
            n && this._applyChanges(n)
          }
        }
      }, {
        key: "_applyChanges", value: function (t) {
          var e = this, n = [];
          t.forEachOperation((function (t, r, i) {
            if (null == t.previousIndex) {
              var a = e._viewContainer.createEmbeddedView(e._template, new sc(null, e._ngForOf, -1, -1), null === i ? void 0 : i),
                o = new uc(t, a);
              n.push(o)
            } else if (null == i) e._viewContainer.remove(null === r ? void 0 : r); else if (null !== r) {
              var s = e._viewContainer.get(r);
              e._viewContainer.move(s, i);
              var l = new uc(t, s);
              n.push(l)
            }
          }));
          for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record);
          for (var i = 0, a = this._viewContainer.length; i < a; i++) {
            var o = this._viewContainer.get(i);
            o.context.index = i, o.context.count = a, o.context.ngForOf = this._ngForOf
          }
          t.forEachIdentityChange((function (t) {
            e._viewContainer.get(t.currentIndex).context.$implicit = t.item
          }))
        }
      }, {
        key: "_perViewChange", value: function (t, e) {
          t.context.$implicit = e.item
        }
      }, {
        key: "ngForOf", set: function (t) {
          this._ngForOf = t, this._ngForOfDirty = !0
        }
      }, {
        key: "ngForTrackBy", set: function (t) {
          kr() && null != t && "function" != typeof t && console && console.warn && console.warn("trackBy must be a function, but received ".concat(JSON.stringify(t), ". See https://angular.io/api/common/NgForOf#change-propagation for more information.")), this._trackByFn = t
        }, get: function () {
          return this._trackByFn
        }
      }, {
        key: "ngForTemplate", set: function (t) {
          t && (this._template = t)
        }
      }], [{
        key: "ngTemplateContextGuard", value: function (t, e) {
          return !0
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || nc)(go(Gs), go(qs), go(Hs))
    }, nc.\u0275dir = ke({
      type: nc,
      selectors: [["", "ngFor", "", "ngForOf", ""]],
      inputs: {ngForOf: "ngForOf", ngForTrackBy: "ngForTrackBy", ngForTemplate: "ngForTemplate"}
    }), nc), uc = function t(e, n) {
      _classCallCheck(this, t), this.record = e, this.view = n
    }, cc = ((rc = function () {
      function t(e, n) {
        _classCallCheck(this, t), this._viewContainer = e, this._context = new hc, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = n
      }

      return _createClass(t, [{
        key: "_updateView", value: function () {
          this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
        }
      }, {
        key: "ngIf", set: function (t) {
          this._context.$implicit = this._context.ngIf = t, this._updateView()
        }
      }, {
        key: "ngIfThen", set: function (t) {
          fc("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
        }
      }, {
        key: "ngIfElse", set: function (t) {
          fc("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
        }
      }], [{
        key: "ngTemplateContextGuard", value: function (t, e) {
          return !0
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || rc)(go(Gs), go(qs))
    }, rc.\u0275dir = ke({
      type: rc,
      selectors: [["", "ngIf", ""]],
      inputs: {ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse"}
    }), rc), hc = function t() {
      _classCallCheck(this, t), this.$implicit = null, this.ngIf = null
    };

    function fc(t, e) {
      if (e && !e.createEmbeddedView) throw new Error("".concat(t, " must be a TemplateRef, but received '").concat(wt(e), "'."))
    }

    var dc, pc, vc, gc, yc, mc, _c, kc = ((vc = function () {
      function t(e) {
        _classCallCheck(this, t), this._viewContainerRef = e, this._viewRef = null, this.ngTemplateOutletContext = null, this.ngTemplateOutlet = null
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          if (this._shouldRecreateView(t)) {
            var e = this._viewContainerRef;
            this._viewRef && e.remove(e.indexOf(this._viewRef)), this._viewRef = this.ngTemplateOutlet ? e.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext) : null
          } else this._viewRef && this.ngTemplateOutletContext && this._updateExistingContext(this.ngTemplateOutletContext)
        }
      }, {
        key: "_shouldRecreateView", value: function (t) {
          var e = t.ngTemplateOutletContext;
          return !!t.ngTemplateOutlet || e && this._hasContextShapeChanged(e)
        }
      }, {
        key: "_hasContextShapeChanged", value: function (t) {
          var e = Object.keys(t.previousValue || {}), n = Object.keys(t.currentValue || {});
          if (e.length === n.length) {
            var r, i = _createForOfIteratorHelper(n);
            try {
              for (i.s(); !(r = i.n()).done;) {
                var a = r.value;
                if (-1 === e.indexOf(a)) return !0
              }
            } catch (o) {
              i.e(o)
            } finally {
              i.f()
            }
            return !1
          }
          return !0
        }
      }, {
        key: "_updateExistingContext", value: function (t) {
          for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var r = n[e];
            this._viewRef.context[r] = this.ngTemplateOutletContext[r]
          }
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || vc)(go(Gs))
    }, vc.\u0275dir = ke({
      type: vc,
      selectors: [["", "ngTemplateOutlet", ""]],
      inputs: {ngTemplateOutletContext: "ngTemplateOutletContext", ngTemplateOutlet: "ngTemplateOutlet"},
      features: [ss]
    }), vc), bc = ((pc = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: pc}), pc.\u0275inj = dt({
      factory: function (t) {
        return new (t || pc)
      }, providers: [{provide: ac, useClass: oc}]
    }), pc), wc = ((dc = function t() {
      _classCallCheck(this, t)
    }).\u0275prov = ft({
      token: dc, providedIn: "root", factory: function () {
        return new Cc(Xt(Mu), window, Xt(lr))
      }
    }), dc), Cc = function () {
      function t(e, n, r) {
        _classCallCheck(this, t), this.document = e, this.window = n, this.errorHandler = r, this.offset = function () {
          return [0, 0]
        }
      }

      return _createClass(t, [{
        key: "setOffset", value: function (t) {
          this.offset = Array.isArray(t) ? function () {
            return t
          } : t
        }
      }, {
        key: "getScrollPosition", value: function () {
          return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
        }
      }, {
        key: "scrollToPosition", value: function (t) {
          this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1])
        }
      }, {
        key: "scrollToAnchor", value: function (t) {
          if (this.supportScrollRestoration()) {
            t = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(t) : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
            try {
              var e = this.document.querySelector("#" + t);
              if (e) return void this.scrollToElement(e);
              var n = this.document.querySelector("[name='".concat(t, "']"));
              if (n) return void this.scrollToElement(n)
            } catch (r) {
              this.errorHandler.handleError(r)
            }
          }
        }
      }, {
        key: "setHistoryScrollRestoration", value: function (t) {
          if (this.supportScrollRestoration()) {
            var e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t)
          }
        }
      }, {
        key: "scrollToElement", value: function (t) {
          var e = t.getBoundingClientRect(), n = e.left + this.window.pageXOffset, r = e.top + this.window.pageYOffset,
            i = this.offset();
          this.window.scrollTo(n - i[0], r - i[1])
        }
      }, {
        key: "supportScrollRestoration", value: function () {
          try {
            return !!this.window && !!this.window.scrollTo
          } catch (t) {
            return !1
          }
        }
      }]), t
    }(), xc = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        return _classCallCheck(this, n), e.apply(this, arguments)
      }

      return _createClass(n, [{
        key: "getProperty", value: function (t, e) {
          return t[e]
        }
      }, {
        key: "log", value: function (t) {
          window.console && window.console.log && window.console.log(t)
        }
      }, {
        key: "logGroup", value: function (t) {
          window.console && window.console.group && window.console.group(t)
        }
      }, {
        key: "logGroupEnd", value: function () {
          window.console && window.console.groupEnd && window.console.groupEnd()
        }
      }, {
        key: "onAndCancel", value: function (t, e, n) {
          return t.addEventListener(e, n, !1), function () {
            t.removeEventListener(e, n, !1)
          }
        }
      }, {
        key: "dispatchEvent", value: function (t, e) {
          t.dispatchEvent(e)
        }
      }, {
        key: "remove", value: function (t) {
          return t.parentNode && t.parentNode.removeChild(t), t
        }
      }, {
        key: "getValue", value: function (t) {
          return t.value
        }
      }, {
        key: "createElement", value: function (t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t)
        }
      }, {
        key: "createHtmlDocument", value: function () {
          return document.implementation.createHTMLDocument("fakeTitle")
        }
      }, {
        key: "getDefaultDocument", value: function () {
          return document
        }
      }, {
        key: "isElementNode", value: function (t) {
          return t.nodeType === Node.ELEMENT_NODE
        }
      }, {
        key: "isShadowRoot", value: function (t) {
          return t instanceof DocumentFragment
        }
      }, {
        key: "getGlobalEventTarget", value: function (t, e) {
          return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
        }
      }, {
        key: "getHistory", value: function () {
          return window.history
        }
      }, {
        key: "getLocation", value: function () {
          return window.location
        }
      }, {
        key: "getBaseHref", value: function (t) {
          var e, n = Sc || (Sc = document.querySelector("base")) ? Sc.getAttribute("href") : null;
          return null == n ? null : (e = n, gc || (gc = document.createElement("a")), gc.setAttribute("href", e), "/" === gc.pathname.charAt(0) ? gc.pathname : "/" + gc.pathname)
        }
      }, {
        key: "resetBaseElement", value: function () {
          Sc = null
        }
      }, {
        key: "getUserAgent", value: function () {
          return window.navigator.userAgent
        }
      }, {
        key: "performanceNow", value: function () {
          return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
        }
      }, {
        key: "supportsCookies", value: function () {
          return !0
        }
      }, {
        key: "getCookie", value: function (t) {
          return function (t, e) {
            e = encodeURIComponent(e);
            var n, r = _createForOfIteratorHelper(t.split(";"));
            try {
              for (r.s(); !(n = r.n()).done;) {
                var i = n.value, a = i.indexOf("="),
                  o = _slicedToArray(-1 == a ? [i, ""] : [i.slice(0, a), i.slice(a + 1)], 2), s = o[0], l = o[1];
                if (s.trim() === e) return decodeURIComponent(l)
              }
            } catch (u) {
              r.e(u)
            } finally {
              r.f()
            }
            return null
          }(document.cookie, t)
        }
      }], [{
        key: "makeCurrent", value: function () {
          var t;
          t = new n, Ou || (Ou = t)
        }
      }]), n
    }(function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        return _classCallCheck(this, n), e.call(this)
      }

      return _createClass(n, [{
        key: "supportsDOMEvents", value: function () {
          return !0
        }
      }]), n
    }(function () {
      return function t() {
        _classCallCheck(this, t)
      }
    }())), Sc = null, Tc = new zt("TRANSITION_ID"), Ec = [{
      provide: Pl, useFactory: function (t, e, n) {
        return function () {
          n.get(Ml).donePromise.then((function () {
            var n = Lu();
            Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter((function (e) {
              return e.getAttribute("ng-transition") === t
            })).forEach((function (t) {
              return n.remove(t)
            }))
          }))
        }
      }, deps: [Tc, Mu, Ja], multi: !0
    }], Ac = function () {
      function t() {
        _classCallCheck(this, t)
      }

      return _createClass(t, [{
        key: "addToWindow", value: function (t) {
          Dt.getAngularTestability = function (e) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              r = t.findTestabilityInTree(e, n);
            if (null == r) throw new Error("Could not find testability for element.");
            return r
          }, Dt.getAllAngularTestabilities = function () {
            return t.getAllTestabilities()
          }, Dt.getAllAngularRootElements = function () {
            return t.getAllRootElements()
          }, Dt.frameworkStabilizers || (Dt.frameworkStabilizers = []), Dt.frameworkStabilizers.push((function (t) {
            var e = Dt.getAllAngularTestabilities(), n = e.length, r = !1, i = function (e) {
              r = r || e, 0 == --n && t(r)
            };
            e.forEach((function (t) {
              t.whenStable(i)
            }))
          }))
        }
      }, {
        key: "findTestabilityInTree", value: function (t, e, n) {
          if (null == e) return null;
          var r = t.getTestability(e);
          return null != r ? r : n ? Lu().isShadowRoot(e) ? this.findTestabilityInTree(t, e.host, !0) : this.findTestabilityInTree(t, e.parentElement, !0) : null
        }
      }], [{
        key: "init", value: function () {
          var e;
          e = new t, cu = e
        }
      }]), t
    }(), Oc = new zt("EventManagerPlugins"), Lc = ((yc = function () {
      function t(e, n) {
        var r = this;
        _classCallCheck(this, t), this._zone = n, this._eventNameToPlugin = new Map, e.forEach((function (t) {
          return t.manager = r
        })), this._plugins = e.slice().reverse()
      }

      return _createClass(t, [{
        key: "addEventListener", value: function (t, e, n) {
          return this._findPluginFor(e).addEventListener(t, e, n)
        }
      }, {
        key: "addGlobalEventListener", value: function (t, e, n) {
          return this._findPluginFor(e).addGlobalEventListener(t, e, n)
        }
      }, {
        key: "getZone", value: function () {
          return this._zone
        }
      }, {
        key: "_findPluginFor", value: function (t) {
          var e = this._eventNameToPlugin.get(t);
          if (e) return e;
          for (var n = this._plugins, r = 0; r < n.length; r++) {
            var i = n[r];
            if (i.supports(t)) return this._eventNameToPlugin.set(t, i), i
          }
          throw new Error("No event manager plugin found for event " + t)
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || yc)(Xt(Oc), Xt(Jl))
    }, yc.\u0275prov = ft({token: yc, factory: yc.\u0275fac}), yc), Pc = function () {
      function t(e) {
        _classCallCheck(this, t), this._doc = e
      }

      return _createClass(t, [{
        key: "addGlobalEventListener", value: function (t, e, n) {
          var r = Lu().getGlobalEventTarget(this._doc, t);
          if (!r) throw new Error("Unsupported event target ".concat(r, " for event ").concat(e));
          return this.addEventListener(r, e, n)
        }
      }]), t
    }(), Mc = ((_c = function () {
      function t() {
        _classCallCheck(this, t), this._stylesSet = new Set
      }

      return _createClass(t, [{
        key: "addStyles", value: function (t) {
          var e = this, n = new Set;
          t.forEach((function (t) {
            e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t))
          })), this.onStylesAdded(n)
        }
      }, {
        key: "onStylesAdded", value: function (t) {
        }
      }, {
        key: "getAllStyles", value: function () {
          return Array.from(this._stylesSet)
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || _c)
    }, _c.\u0275prov = ft({token: _c, factory: _c.\u0275fac}), _c), Dc = ((mc = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t) {
        var r;
        return _classCallCheck(this, n), (r = e.call(this))._doc = t, r._hostNodes = new Set, r._styleNodes = new Set, r._hostNodes.add(t.head), r
      }

      return _createClass(n, [{
        key: "_addStylesToHost", value: function (t, e) {
          var n = this;
          t.forEach((function (t) {
            var r = n._doc.createElement("style");
            r.textContent = t, n._styleNodes.add(e.appendChild(r))
          }))
        }
      }, {
        key: "addHost", value: function (t) {
          this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t)
        }
      }, {
        key: "removeHost", value: function (t) {
          this._hostNodes.delete(t)
        }
      }, {
        key: "onStylesAdded", value: function (t) {
          var e = this;
          this._hostNodes.forEach((function (n) {
            return e._addStylesToHost(t, n)
          }))
        }
      }, {
        key: "ngOnDestroy", value: function () {
          this._styleNodes.forEach((function (t) {
            return Lu().remove(t)
          }))
        }
      }]), n
    }(Mc)).\u0275fac = function (t) {
      return new (t || mc)(Xt(Mu))
    }, mc.\u0275prov = ft({token: mc, factory: mc.\u0275fac}), mc), Ic = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    }, Rc = /%COMP%/g;

    function Fc(t, e, n) {
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        Array.isArray(i) ? Fc(t, i, n) : (i = i.replace(Rc, t), n.push(i))
      }
      return n
    }

    function Nc(t) {
      return function (e) {
        if ("__ngUnwrap__" === e) return t;
        !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
      }
    }

    var jc, Hc, Uc, zc, Vc, Bc, qc = ((jc = function () {
      function t(e, n, r) {
        _classCallCheck(this, t), this.eventManager = e, this.sharedStylesHost = n, this.appId = r, this.rendererByCompId = new Map, this.defaultRenderer = new Wc(e)
      }

      return _createClass(t, [{
        key: "createRenderer", value: function (t, e) {
          if (!t || !e) return this.defaultRenderer;
          switch (e.encapsulation) {
            case ce.Emulated:
              var n = this.rendererByCompId.get(e.id);
              return n || (n = new Gc(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
            case ce.Native:
            case ce.ShadowDom:
              return new Qc(this.eventManager, this.sharedStylesHost, t, e);
            default:
              if (!this.rendererByCompId.has(e.id)) {
                var r = Fc(e.id, e.styles, []);
                this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(e.id, this.defaultRenderer)
              }
              return this.defaultRenderer
          }
        }
      }, {
        key: "begin", value: function () {
        }
      }, {
        key: "end", value: function () {
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || jc)(Xt(Lc), Xt(Dc), Xt(Dl))
    }, jc.\u0275prov = ft({token: jc, factory: jc.\u0275fac}), jc), Wc = function () {
      function t(e) {
        _classCallCheck(this, t), this.eventManager = e, this.data = Object.create(null)
      }

      return _createClass(t, [{
        key: "destroy", value: function () {
        }
      }, {
        key: "createElement", value: function (t, e) {
          return e ? document.createElementNS(Ic[e] || e, t) : document.createElement(t)
        }
      }, {
        key: "createComment", value: function (t) {
          return document.createComment(t)
        }
      }, {
        key: "createText", value: function (t) {
          return document.createTextNode(t)
        }
      }, {
        key: "appendChild", value: function (t, e) {
          t.appendChild(e)
        }
      }, {
        key: "insertBefore", value: function (t, e, n) {
          t && t.insertBefore(e, n)
        }
      }, {
        key: "removeChild", value: function (t, e) {
          t && t.removeChild(e)
        }
      }, {
        key: "selectRootElement", value: function (t, e) {
          var n = "string" == typeof t ? document.querySelector(t) : t;
          if (!n) throw new Error('The selector "'.concat(t, '" did not match any elements'));
          return e || (n.textContent = ""), n
        }
      }, {
        key: "parentNode", value: function (t) {
          return t.parentNode
        }
      }, {
        key: "nextSibling", value: function (t) {
          return t.nextSibling
        }
      }, {
        key: "setAttribute", value: function (t, e, n, r) {
          if (r) {
            e = r + ":" + e;
            var i = Ic[r];
            i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n)
          } else t.setAttribute(e, n)
        }
      }, {
        key: "removeAttribute", value: function (t, e, n) {
          if (n) {
            var r = Ic[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute("".concat(n, ":").concat(e))
          } else t.removeAttribute(e)
        }
      }, {
        key: "addClass", value: function (t, e) {
          t.classList.add(e)
        }
      }, {
        key: "removeClass", value: function (t, e) {
          t.classList.remove(e)
        }
      }, {
        key: "setStyle", value: function (t, e, n, r) {
          r & xs.DashCase ? t.style.setProperty(e, n, r & xs.Important ? "important" : "") : t.style[e] = n
        }
      }, {
        key: "removeStyle", value: function (t, e, n) {
          n & xs.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
        }
      }, {
        key: "setProperty", value: function (t, e, n) {
          t[e] = n
        }
      }, {
        key: "setValue", value: function (t, e) {
          t.nodeValue = e
        }
      }, {
        key: "listen", value: function (t, e, n) {
          return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, Nc(n)) : this.eventManager.addEventListener(t, e, Nc(n))
        }
      }]), t
    }(), Gc = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i, a) {
        var o;
        _classCallCheck(this, n), (o = e.call(this, t)).component = i;
        var s, l = Fc(a + "-" + i.id, i.styles, []);
        return r.addStyles(l), o.contentAttr = "_ngcontent-%COMP%".replace(Rc, a + "-" + i.id), o.hostAttr = (s = a + "-" + i.id, "_nghost-%COMP%".replace(Rc, s)), o
      }

      return _createClass(n, [{
        key: "applyToHost", value: function (t) {
          _get(_getPrototypeOf(n.prototype), "setAttribute", this).call(this, t, this.hostAttr, "")
        }
      }, {
        key: "createElement", value: function (t, e) {
          var r = _get(_getPrototypeOf(n.prototype), "createElement", this).call(this, t, e);
          return _get(_getPrototypeOf(n.prototype), "setAttribute", this).call(this, r, this.contentAttr, ""), r
        }
      }]), n
    }(Wc), Qc = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i, a) {
        var o;
        _classCallCheck(this, n), (o = e.call(this, t)).sharedStylesHost = r, o.hostEl = i, o.component = a, o.shadowRoot = a.encapsulation === ce.ShadowDom ? i.attachShadow({mode: "open"}) : i.createShadowRoot(), o.sharedStylesHost.addHost(o.shadowRoot);
        for (var s = Fc(a.id, a.styles, []), l = 0; l < s.length; l++) {
          var u = document.createElement("style");
          u.textContent = s[l], o.shadowRoot.appendChild(u)
        }
        return o
      }

      return _createClass(n, [{
        key: "nodeOrShadowRoot", value: function (t) {
          return t === this.hostEl ? this.shadowRoot : t
        }
      }, {
        key: "destroy", value: function () {
          this.sharedStylesHost.removeHost(this.shadowRoot)
        }
      }, {
        key: "appendChild", value: function (t, e) {
          return _get(_getPrototypeOf(n.prototype), "appendChild", this).call(this, this.nodeOrShadowRoot(t), e)
        }
      }, {
        key: "insertBefore", value: function (t, e, r) {
          return _get(_getPrototypeOf(n.prototype), "insertBefore", this).call(this, this.nodeOrShadowRoot(t), e, r)
        }
      }, {
        key: "removeChild", value: function (t, e) {
          return _get(_getPrototypeOf(n.prototype), "removeChild", this).call(this, this.nodeOrShadowRoot(t), e)
        }
      }, {
        key: "parentNode", value: function (t) {
          return this.nodeOrShadowRoot(_get(_getPrototypeOf(n.prototype), "parentNode", this).call(this, this.nodeOrShadowRoot(t)))
        }
      }]), n
    }(Wc), Yc = ((Hc = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t) {
        return _classCallCheck(this, n), e.call(this, t)
      }

      return _createClass(n, [{
        key: "supports", value: function (t) {
          return !0
        }
      }, {
        key: "addEventListener", value: function (t, e, n) {
          var r = this;
          return t.addEventListener(e, n, !1), function () {
            return r.removeEventListener(t, e, n)
          }
        }
      }, {
        key: "removeEventListener", value: function (t, e, n) {
          return t.removeEventListener(e, n)
        }
      }]), n
    }(Pc)).\u0275fac = function (t) {
      return new (t || Hc)(Xt(Mu))
    }, Hc.\u0275prov = ft({token: Hc, factory: Hc.\u0275fac}), Hc), Zc = ["alt", "control", "meta", "shift"], Xc = {
      "\b": "Backspace",
      "\t": "Tab",
      "\x7f": "Delete",
      "\x1b": "Escape",
      Del: "Delete",
      Esc: "Escape",
      Left: "ArrowLeft",
      Right: "ArrowRight",
      Up: "ArrowUp",
      Down: "ArrowDown",
      Menu: "ContextMenu",
      Scroll: "ScrollLock",
      Win: "OS"
    }, Kc = {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
      E: "5",
      F: "6",
      G: "7",
      H: "8",
      I: "9",
      J: "*",
      K: "+",
      M: "-",
      N: ".",
      O: "/",
      "`": "0",
      "\x90": "NumLock"
    }, $c = {
      alt: function (t) {
        return t.altKey
      }, control: function (t) {
        return t.ctrlKey
      }, meta: function (t) {
        return t.metaKey
      }, shift: function (t) {
        return t.shiftKey
      }
    }, Jc = ((Vc = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t) {
        return _classCallCheck(this, n), e.call(this, t)
      }

      return _createClass(n, [{
        key: "supports", value: function (t) {
          return null != n.parseEventName(t)
        }
      }, {
        key: "addEventListener", value: function (t, e, r) {
          var i = n.parseEventName(e), a = n.eventCallback(i.fullKey, r, this.manager.getZone());
          return this.manager.getZone().runOutsideAngular((function () {
            return Lu().onAndCancel(t, i.domEventName, a)
          }))
        }
      }], [{
        key: "parseEventName", value: function (t) {
          var e = t.toLowerCase().split("."), r = e.shift();
          if (0 === e.length || "keydown" !== r && "keyup" !== r) return null;
          var i = n._normalizeKey(e.pop()), a = "";
          if (Zc.forEach((function (t) {
            var n = e.indexOf(t);
            n > -1 && (e.splice(n, 1), a += t + ".")
          })), a += i, 0 != e.length || 0 === i.length) return null;
          var o = {};
          return o.domEventName = r, o.fullKey = a, o
        }
      }, {
        key: "getEventFullKey", value: function (t) {
          var e = "", n = function (t) {
            var e = t.key;
            if (null == e) {
              if (null == (e = t.keyIdentifier)) return "Unidentified";
              e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && Kc.hasOwnProperty(e) && (e = Kc[e]))
            }
            return Xc[e] || e
          }(t);
          return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), Zc.forEach((function (r) {
            r != n && (0, $c[r])(t) && (e += r + ".")
          })), e += n
        }
      }, {
        key: "eventCallback", value: function (t, e, r) {
          return function (i) {
            n.getEventFullKey(i) === t && r.runGuarded((function () {
              return e(i)
            }))
          }
        }
      }, {
        key: "_normalizeKey", value: function (t) {
          switch (t) {
            case"esc":
              return "escape";
            default:
              return t
          }
        }
      }]), n
    }(Pc)).\u0275fac = function (t) {
      return new (t || Vc)(Xt(Mu))
    }, Vc.\u0275prov = ft({token: Vc, factory: Vc.\u0275fac}), Vc), th = ((zc = function t() {
      _classCallCheck(this, t)
    }).\u0275fac = function (t) {
      return new (t || zc)
    }, zc.\u0275prov = ft({
      factory: function () {
        return Xt(eh)
      }, token: zc, providedIn: "root"
    }), zc), eh = ((Uc = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t) {
        var r;
        return _classCallCheck(this, n), (r = e.call(this))._doc = t, r
      }

      return _createClass(n, [{
        key: "sanitize", value: function (t, e) {
          if (null == e) return null;
          switch (t) {
            case Br.NONE:
              return e;
            case Br.HTML:
              return gr(e, "HTML") ? vr(e) : zr(this._doc, String(e));
            case Br.STYLE:
              return gr(e, "Style") ? vr(e) : Gr(e);
            case Br.SCRIPT:
              if (gr(e, "Script")) return vr(e);
              throw new Error("unsafe value used in a script context");
            case Br.URL:
              return yr(e), gr(e, "URL") ? vr(e) : xr(String(e));
            case Br.RESOURCE_URL:
              if (gr(e, "ResourceURL")) return vr(e);
              throw new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
            default:
              throw new Error("Unexpected SecurityContext ".concat(t, " (see http://g.co/ng/security#xss)"))
          }
        }
      }, {
        key: "bypassSecurityTrustHtml", value: function (t) {
          return new cr(t)
        }
      }, {
        key: "bypassSecurityTrustStyle", value: function (t) {
          return new hr(t)
        }
      }, {
        key: "bypassSecurityTrustScript", value: function (t) {
          return new fr(t)
        }
      }, {
        key: "bypassSecurityTrustUrl", value: function (t) {
          return new dr(t)
        }
      }, {
        key: "bypassSecurityTrustResourceUrl", value: function (t) {
          return new pr(t)
        }
      }]), n
    }(th)).\u0275fac = function (t) {
      return new (t || Uc)(Xt(Mu))
    }, Uc.\u0275prov = ft({
      factory: function () {
        return t = Xt(Vt), new eh(t.get(Mu));
        var t
      }, token: Uc, providedIn: "root"
    }), Uc), nh = pu(Tu, "browser", [{provide: Nl, useValue: "browser"}, {
      provide: Fl, useValue: function () {
        xc.makeCurrent(), Ac.init()
      }, multi: !0
    }, {
      provide: Mu, useFactory: function () {
        return function (t) {
          Pe = t
        }(document), document
      }, deps: []
    }]), rh = [[], {provide: Ha, useValue: "root"}, {
      provide: lr, useFactory: function () {
        return new lr
      }, deps: []
    }, {provide: Oc, useClass: Yc, multi: !0, deps: [Mu, Jl, Nl]}, {
      provide: Oc,
      useClass: Jc,
      multi: !0,
      deps: [Mu]
    }, [], {provide: qc, useClass: qc, deps: [Lc, Dc, Dl]}, {provide: Cs, useExisting: qc}, {
      provide: Mc,
      useExisting: Dc
    }, {provide: Dc, useClass: Dc, deps: [Mu]}, {provide: lu, useClass: lu, deps: [Jl]}, {
      provide: Lc,
      useClass: Lc,
      deps: [Oc, Jl]
    }, []], ih = ((Bc = function () {
      function t(e) {
        if (_classCallCheck(this, t), e) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
      }

      return _createClass(t, null, [{
        key: "withServerTransition", value: function (e) {
          return {ngModule: t, providers: [{provide: Dl, useValue: e.appId}, {provide: Tc, useExisting: Dl}, Ec]}
        }
      }]), t
    }()).\u0275mod = me({type: Bc}), Bc.\u0275inj = dt({
      factory: function (t) {
        return new (t || Bc)(Xt(Bc, 12))
      }, providers: rh, imports: [bc, Au]
    }), Bc);
    "undefined" != typeof window && window;
    var ah = function t() {
      _classCallCheck(this, t)
    };

    function oh(t, e) {
      return {type: 7, name: t, definitions: e, options: {}}
    }

    function sh(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return {type: 4, styles: e, timings: t}
    }

    function lh(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return {type: 2, steps: t, options: e}
    }

    function uh(t) {
      return {type: 6, styles: t, offset: null}
    }

    function ch(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      return {type: 1, expr: t, animation: e, options: n}
    }

    function hh(t) {
      Promise.resolve(null).then(t)
    }

    var fh = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        _classCallCheck(this, t), this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this.parentPlayer = null, this.totalTime = e + n
      }

      return _createClass(t, [{
        key: "_onFinish", value: function () {
          this._finished || (this._finished = !0, this._onDoneFns.forEach((function (t) {
            return t()
          })), this._onDoneFns = [])
        }
      }, {
        key: "onStart", value: function (t) {
          this._onStartFns.push(t)
        }
      }, {
        key: "onDone", value: function (t) {
          this._onDoneFns.push(t)
        }
      }, {
        key: "onDestroy", value: function (t) {
          this._onDestroyFns.push(t)
        }
      }, {
        key: "hasStarted", value: function () {
          return this._started
        }
      }, {
        key: "init", value: function () {
        }
      }, {
        key: "play", value: function () {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
        }
      }, {
        key: "triggerMicrotask", value: function () {
          var t = this;
          hh((function () {
            return t._onFinish()
          }))
        }
      }, {
        key: "_onStart", value: function () {
          this._onStartFns.forEach((function (t) {
            return t()
          })), this._onStartFns = []
        }
      }, {
        key: "pause", value: function () {
        }
      }, {
        key: "restart", value: function () {
        }
      }, {
        key: "finish", value: function () {
          this._onFinish()
        }
      }, {
        key: "destroy", value: function () {
          this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach((function (t) {
            return t()
          })), this._onDestroyFns = [])
        }
      }, {
        key: "reset", value: function () {
        }
      }, {
        key: "setPosition", value: function (t) {
        }
      }, {
        key: "getPosition", value: function () {
          return 0
        }
      }, {
        key: "triggerCallback", value: function (t) {
          var e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((function (t) {
            return t()
          })), e.length = 0
        }
      }]), t
    }(), dh = function () {
      function t(e) {
        var n = this;
        _classCallCheck(this, t), this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = e;
        var r = 0, i = 0, a = 0, o = this.players.length;
        0 == o ? hh((function () {
          return n._onFinish()
        })) : this.players.forEach((function (t) {
          t.onDone((function () {
            ++r == o && n._onFinish()
          })), t.onDestroy((function () {
            ++i == o && n._onDestroy()
          })), t.onStart((function () {
            ++a == o && n._onStart()
          }))
        })), this.totalTime = this.players.reduce((function (t, e) {
          return Math.max(t, e.totalTime)
        }), 0)
      }

      return _createClass(t, [{
        key: "_onFinish", value: function () {
          this._finished || (this._finished = !0, this._onDoneFns.forEach((function (t) {
            return t()
          })), this._onDoneFns = [])
        }
      }, {
        key: "init", value: function () {
          this.players.forEach((function (t) {
            return t.init()
          }))
        }
      }, {
        key: "onStart", value: function (t) {
          this._onStartFns.push(t)
        }
      }, {
        key: "_onStart", value: function () {
          this.hasStarted() || (this._started = !0, this._onStartFns.forEach((function (t) {
            return t()
          })), this._onStartFns = [])
        }
      }, {
        key: "onDone", value: function (t) {
          this._onDoneFns.push(t)
        }
      }, {
        key: "onDestroy", value: function (t) {
          this._onDestroyFns.push(t)
        }
      }, {
        key: "hasStarted", value: function () {
          return this._started
        }
      }, {
        key: "play", value: function () {
          this.parentPlayer || this.init(), this._onStart(), this.players.forEach((function (t) {
            return t.play()
          }))
        }
      }, {
        key: "pause", value: function () {
          this.players.forEach((function (t) {
            return t.pause()
          }))
        }
      }, {
        key: "restart", value: function () {
          this.players.forEach((function (t) {
            return t.restart()
          }))
        }
      }, {
        key: "finish", value: function () {
          this._onFinish(), this.players.forEach((function (t) {
            return t.finish()
          }))
        }
      }, {
        key: "destroy", value: function () {
          this._onDestroy()
        }
      }, {
        key: "_onDestroy", value: function () {
          this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach((function (t) {
            return t.destroy()
          })), this._onDestroyFns.forEach((function (t) {
            return t()
          })), this._onDestroyFns = [])
        }
      }, {
        key: "reset", value: function () {
          this.players.forEach((function (t) {
            return t.reset()
          })), this._destroyed = !1, this._finished = !1, this._started = !1
        }
      }, {
        key: "setPosition", value: function (t) {
          var e = t * this.totalTime;
          this.players.forEach((function (t) {
            var n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
            t.setPosition(n)
          }))
        }
      }, {
        key: "getPosition", value: function () {
          var t = 0;
          return this.players.forEach((function (e) {
            var n = e.getPosition();
            t = Math.min(n, t)
          })), t
        }
      }, {
        key: "beforeDestroy", value: function () {
          this.players.forEach((function (t) {
            t.beforeDestroy && t.beforeDestroy()
          }))
        }
      }, {
        key: "triggerCallback", value: function (t) {
          var e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((function (t) {
            return t()
          })), e.length = 0
        }
      }]), t
    }();

    function ph() {
      return "undefined" != typeof process && "[object process]" === {}.toString.call(process)
    }

    function vh(t) {
      switch (t.length) {
        case 0:
          return new fh;
        case 1:
          return t[0];
        default:
          return new dh(t)
      }
    }

    function gh(t, e, n, r) {
      var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}, o = [], s = [], l = -1, u = null;
      if (r.forEach((function (t) {
        var n = t.offset, r = n == l, c = r && u || {};
        Object.keys(t).forEach((function (n) {
          var r = n, s = t[n];
          if ("offset" !== n) switch (r = e.normalizePropertyName(r, o), s) {
            case"!":
              s = i[n];
              break;
            case"*":
              s = a[n];
              break;
            default:
              s = e.normalizeStyleValue(n, r, s, o)
          }
          c[r] = s
        })), r || s.push(c), u = c, l = n
      })), o.length) {
        var c = "\n - ";
        throw new Error("Unable to animate due to the following errors:".concat(c).concat(o.join(c)))
      }
      return s
    }

    function yh(t, e, n, r) {
      switch (e) {
        case"start":
          t.onStart((function () {
            return r(n && mh(n, "start", t))
          }));
          break;
        case"done":
          t.onDone((function () {
            return r(n && mh(n, "done", t))
          }));
          break;
        case"destroy":
          t.onDestroy((function () {
            return r(n && mh(n, "destroy", t))
          }))
      }
    }

    function mh(t, e, n) {
      var r = n.totalTime,
        i = _h(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, null == r ? t.totalTime : r, !!n.disabled),
        a = t._data;
      return null != a && (i._data = a), i
    }

    function _h(t, e, n, r) {
      var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
        o = arguments.length > 6 ? arguments[6] : void 0;
      return {element: t, triggerName: e, fromState: n, toState: r, phaseName: i, totalTime: a, disabled: !!o}
    }

    function kh(t, e, n) {
      var r;
      return t instanceof Map ? (r = t.get(e)) || t.set(e, r = n) : (r = t[e]) || (r = t[e] = n), r
    }

    function bh(t) {
      var e = t.indexOf(":");
      return [t.substring(1, e), t.substr(e + 1)]
    }

    var wh = function (t, e) {
      return !1
    }, Ch = function (t, e) {
      return !1
    }, xh = function (t, e, n) {
      return []
    }, Sh = ph();
    (Sh || "undefined" != typeof Element) && (wh = function (t, e) {
      return t.contains(e)
    }, Ch = function () {
      if (Sh || Element.prototype.matches) return function (t, e) {
        return t.matches(e)
      };
      var t = Element.prototype,
        e = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector;
      return e ? function (t, n) {
        return e.apply(t, [n])
      } : Ch
    }(), xh = function (t, e, n) {
      var r = [];
      if (n) r.push.apply(r, _toConsumableArray(t.querySelectorAll(e))); else {
        var i = t.querySelector(e);
        i && r.push(i)
      }
      return r
    });
    var Th = null, Eh = !1;

    function Ah(t) {
      Th || (Th = ("undefined" != typeof document ? document.body : null) || {}, Eh = !!Th.style && "WebkitAppearance" in Th.style);
      var e = !0;
      return Th.style && !function (t) {
        return "ebkit" == t.substring(1, 6)
      }(t) && (!(e = t in Th.style) && Eh) && (e = "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in Th.style), e
    }

    var Oh = Ch, Lh = wh, Ph = xh;

    function Mh(t) {
      var e = {};
      return Object.keys(t).forEach((function (n) {
        var r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
        e[r] = t[n]
      })), e
    }

    var Dh, Ih = ((Dh = function () {
      function t() {
        _classCallCheck(this, t)
      }

      return _createClass(t, [{
        key: "validateStyleProperty", value: function (t) {
          return Ah(t)
        }
      }, {
        key: "matchesElement", value: function (t, e) {
          return Oh(t, e)
        }
      }, {
        key: "containsElement", value: function (t, e) {
          return Lh(t, e)
        }
      }, {
        key: "query", value: function (t, e, n) {
          return Ph(t, e, n)
        }
      }, {
        key: "computeStyle", value: function (t, e, n) {
          return n || ""
        }
      }, {
        key: "animate", value: function (t, e, n, r, i) {
          return arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && arguments[6], new fh(n, r)
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || Dh)
    }, Dh.\u0275prov = ft({token: Dh, factory: Dh.\u0275fac}), Dh), Rh = function () {
      var t = function t() {
        _classCallCheck(this, t)
      };
      return t.NOOP = new Ih, t
    }();

    function Fh(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/^(-?[\.\d]+)(m?s)/);
      return !e || e.length < 2 ? 0 : Nh(parseFloat(e[1]), e[2])
    }

    function Nh(t, e) {
      switch (e) {
        case"s":
          return 1e3 * t;
        default:
          return t
      }
    }

    function jh(t, e, n) {
      return t.hasOwnProperty("duration") ? t : function (t, e, n) {
        var r, i = 0, a = "";
        if ("string" == typeof t) {
          var o = t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
          if (null === o) return e.push('The provided timing value "'.concat(t, '" is invalid.')), {
            duration: 0,
            delay: 0,
            easing: ""
          };
          r = Nh(parseFloat(o[1]), o[2]);
          var s = o[3];
          null != s && (i = Nh(parseFloat(s), o[4]));
          var l = o[5];
          l && (a = l)
        } else r = t;
        if (!n) {
          var u = !1, c = e.length;
          r < 0 && (e.push("Duration values below 0 are not allowed for this animation step."), u = !0), i < 0 && (e.push("Delay values below 0 are not allowed for this animation step."), u = !0), u && e.splice(c, 0, 'The provided timing value "'.concat(t, '" is invalid.'))
        }
        return {duration: r, delay: i, easing: a}
      }(t, e, n)
    }

    function Hh(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return Object.keys(t).forEach((function (n) {
        e[n] = t[n]
      })), e
    }

    function Uh(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (e) for (var r in t) n[r] = t[r]; else Hh(t, n);
      return n
    }

    function zh(t, e, n) {
      return n ? e + ":" + n + ";" : ""
    }

    function Vh(t) {
      for (var e = "", n = 0; n < t.style.length; n++) {
        var r = t.style.item(n);
        e += zh(0, r, t.style.getPropertyValue(r))
      }
      for (var i in t.style) t.style.hasOwnProperty(i) && !i.startsWith("_") && (e += zh(0, i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), t.style[i]));
      t.setAttribute("style", e)
    }

    function Bh(t, e, n) {
      t.style && (Object.keys(e).forEach((function (r) {
        var i = Kh(r);
        n && !n.hasOwnProperty(r) && (n[r] = t.style[i]), t.style[i] = e[r]
      })), ph() && Vh(t))
    }

    function qh(t, e) {
      t.style && (Object.keys(e).forEach((function (e) {
        var n = Kh(e);
        t.style[n] = ""
      })), ph() && Vh(t))
    }

    function Wh(t) {
      return Array.isArray(t) ? 1 == t.length ? t[0] : lh(t) : t
    }

    var Gh = new RegExp("{{\\s*(.+?)\\s*}}", "g");

    function Qh(t) {
      var e = [];
      if ("string" == typeof t) {
        for (var n; n = Gh.exec(t);) e.push(n[1]);
        Gh.lastIndex = 0
      }
      return e
    }

    function Yh(t, e, n) {
      var r = t.toString(), i = r.replace(Gh, (function (t, r) {
        var i = e[r];
        return e.hasOwnProperty(r) || (n.push("Please provide a value for the animation param " + r), i = ""), i.toString()
      }));
      return i == r ? t : i
    }

    function Zh(t) {
      for (var e = [], n = t.next(); !n.done;) e.push(n.value), n = t.next();
      return e
    }

    var Xh = /-+([a-z0-9])/g;

    function Kh(t) {
      return t.replace(Xh, (function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return e[1].toUpperCase()
      }))
    }

    function $h(t, e) {
      return 0 === t || 0 === e
    }

    function Jh(t, e, n) {
      var r = Object.keys(n);
      if (r.length && e.length) {
        var i = e[0], a = [];
        if (r.forEach((function (t) {
          i.hasOwnProperty(t) || a.push(t), i[t] = n[t]
        })), a.length) for (var o = function () {
          var n = e[s];
          a.forEach((function (e) {
            n[e] = ef(t, e)
          }))
        }, s = 1; s < e.length; s++) o()
      }
      return e
    }

    function tf(t, e, n) {
      switch (e.type) {
        case 7:
          return t.visitTrigger(e, n);
        case 0:
          return t.visitState(e, n);
        case 1:
          return t.visitTransition(e, n);
        case 2:
          return t.visitSequence(e, n);
        case 3:
          return t.visitGroup(e, n);
        case 4:
          return t.visitAnimate(e, n);
        case 5:
          return t.visitKeyframes(e, n);
        case 6:
          return t.visitStyle(e, n);
        case 8:
          return t.visitReference(e, n);
        case 9:
          return t.visitAnimateChild(e, n);
        case 10:
          return t.visitAnimateRef(e, n);
        case 11:
          return t.visitQuery(e, n);
        case 12:
          return t.visitStagger(e, n);
        default:
          throw new Error("Unable to resolve animation metadata node #" + e.type)
      }
    }

    function ef(t, e) {
      return window.getComputedStyle(t)[e]
    }

    var nf = new Set(["true", "1"]), rf = new Set(["false", "0"]);

    function af(t, e) {
      var n = nf.has(t) || rf.has(t), r = nf.has(e) || rf.has(e);
      return function (i, a) {
        var o = "*" == t || t == i, s = "*" == e || e == a;
        return !o && n && "boolean" == typeof i && (o = i ? nf.has(t) : rf.has(t)), !s && r && "boolean" == typeof a && (s = a ? nf.has(e) : rf.has(e)), o && s
      }
    }

    var of = new RegExp("s*:selfs*,?", "g");

    function sf(t, e, n) {
      return new lf(t).build(e, n)
    }

    var lf = function () {
      function t(e) {
        _classCallCheck(this, t), this._driver = e
      }

      return _createClass(t, [{
        key: "build", value: function (t, e) {
          var n = new uf(e);
          return this._resetContextStyleTimingState(n), tf(this, Wh(t), n)
        }
      }, {
        key: "_resetContextStyleTimingState", value: function (t) {
          t.currentQuerySelector = "", t.collectedStyles = {}, t.collectedStyles[""] = {}, t.currentTime = 0
        }
      }, {
        key: "visitTrigger", value: function (t, e) {
          var n = this, r = e.queryCount = 0, i = e.depCount = 0, a = [], o = [];
          return "@" == t.name.charAt(0) && e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"), t.definitions.forEach((function (t) {
            if (n._resetContextStyleTimingState(e), 0 == t.type) {
              var s = t, l = s.name;
              l.toString().split(/\s*,\s*/).forEach((function (t) {
                s.name = t, a.push(n.visitState(s, e))
              })), s.name = l
            } else if (1 == t.type) {
              var u = n.visitTransition(t, e);
              r += u.queryCount, i += u.depCount, o.push(u)
            } else e.errors.push("only state() and transition() definitions can sit inside of a trigger()")
          })), {type: 7, name: t.name, states: a, transitions: o, queryCount: r, depCount: i, options: null}
        }
      }, {
        key: "visitState", value: function (t, e) {
          var n = this.visitStyle(t.styles, e), r = t.options && t.options.params || null;
          if (n.containsDynamicStyles) {
            var i = new Set, a = r || {};
            if (n.styles.forEach((function (t) {
              if (cf(t)) {
                var e = t;
                Object.keys(e).forEach((function (t) {
                  Qh(e[t]).forEach((function (t) {
                    a.hasOwnProperty(t) || i.add(t)
                  }))
                }))
              }
            })), i.size) {
              var o = Zh(i.values());
              e.errors.push('state("'.concat(t.name, '", ...) must define default values for all the following style substitutions: ').concat(o.join(", ")))
            }
          }
          return {type: 0, name: t.name, style: n, options: r ? {params: r} : null}
        }
      }, {
        key: "visitTransition", value: function (t, e) {
          e.queryCount = 0, e.depCount = 0;
          var n, r, i, a = tf(this, Wh(t.animation), e);
          return {
            type: 1,
            matchers: (n = t.expr, r = e.errors, i = [], "string" == typeof n ? n.split(/\s*,\s*/).forEach((function (t) {
              return function (t, e, n) {
                if (":" == t[0]) {
                  var r = function (t, e) {
                    switch (t) {
                      case":enter":
                        return "void => *";
                      case":leave":
                        return "* => void";
                      case":increment":
                        return function (t, e) {
                          return parseFloat(e) > parseFloat(t)
                        };
                      case":decrement":
                        return function (t, e) {
                          return parseFloat(e) < parseFloat(t)
                        };
                      default:
                        return e.push('The transition alias value "'.concat(t, '" is not supported')), "* => *"
                    }
                  }(t, n);
                  if ("function" == typeof r) return void e.push(r);
                  t = r
                }
                var i = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                if (null == i || i.length < 4) return n.push('The provided transition expression "'.concat(t, '" is not supported')), e;
                var a = i[1], o = i[2], s = i[3];
                e.push(af(a, s)), "<" != o[0] || "*" == a && "*" == s || e.push(af(s, a))
              }(t, i, r)
            })) : i.push(n), i),
            animation: a,
            queryCount: e.queryCount,
            depCount: e.depCount,
            options: hf(t.options)
          }
        }
      }, {
        key: "visitSequence", value: function (t, e) {
          var n = this;
          return {
            type: 2, steps: t.steps.map((function (t) {
              return tf(n, t, e)
            })), options: hf(t.options)
          }
        }
      }, {
        key: "visitGroup", value: function (t, e) {
          var n = this, r = e.currentTime, i = 0, a = t.steps.map((function (t) {
            e.currentTime = r;
            var a = tf(n, t, e);
            return i = Math.max(i, e.currentTime), a
          }));
          return e.currentTime = i, {type: 3, steps: a, options: hf(t.options)}
        }
      }, {
        key: "visitAnimate", value: function (t, e) {
          var n, r = function (t, e) {
            var n = null;
            if (t.hasOwnProperty("duration")) n = t; else if ("number" == typeof t) return ff(jh(t, e).duration, 0, "");
            var r = t;
            if (r.split(/\s+/).some((function (t) {
              return "{" == t.charAt(0) && "{" == t.charAt(1)
            }))) {
              var i = ff(0, 0, "");
              return i.dynamic = !0, i.strValue = r, i
            }
            return ff((n = n || jh(r, e)).duration, n.delay, n.easing)
          }(t.timings, e.errors);
          e.currentAnimateTimings = r;
          var i = t.styles ? t.styles : uh({});
          if (5 == i.type) n = this.visitKeyframes(i, e); else {
            var a = t.styles, o = !1;
            if (!a) {
              o = !0;
              var s = {};
              r.easing && (s.easing = r.easing), a = uh(s)
            }
            e.currentTime += r.duration + r.delay;
            var l = this.visitStyle(a, e);
            l.isEmptyStep = o, n = l
          }
          return e.currentAnimateTimings = null, {type: 4, timings: r, style: n, options: null}
        }
      }, {
        key: "visitStyle", value: function (t, e) {
          var n = this._makeStyleAst(t, e);
          return this._validateStyleAst(n, e), n
        }
      }, {
        key: "_makeStyleAst", value: function (t, e) {
          var n = [];
          Array.isArray(t.styles) ? t.styles.forEach((function (t) {
            "string" == typeof t ? "*" == t ? n.push(t) : e.errors.push("The provided style string value ".concat(t, " is not allowed.")) : n.push(t)
          })) : n.push(t.styles);
          var r = !1, i = null;
          return n.forEach((function (t) {
            if (cf(t)) {
              var e = t, n = e.easing;
              if (n && (i = n, delete e.easing), !r) for (var a in e) if (e[a].toString().indexOf("{{") >= 0) {
                r = !0;
                break
              }
            }
          })), {type: 6, styles: n, easing: i, offset: t.offset, containsDynamicStyles: r, options: null}
        }
      }, {
        key: "_validateStyleAst", value: function (t, e) {
          var n = this, r = e.currentAnimateTimings, i = e.currentTime, a = e.currentTime;
          r && a > 0 && (a -= r.duration + r.delay), t.styles.forEach((function (t) {
            "string" != typeof t && Object.keys(t).forEach((function (r) {
              if (n._driver.validateStyleProperty(r)) {
                var o, s, l, u, c, h = e.collectedStyles[e.currentQuerySelector], f = h[r], d = !0;
                f && (a != i && a >= f.startTime && i <= f.endTime && (e.errors.push('The CSS property "'.concat(r, '" that exists between the times of "').concat(f.startTime, 'ms" and "').concat(f.endTime, 'ms" is also being animated in a parallel animation between the times of "').concat(a, 'ms" and "').concat(i, 'ms"')), d = !1), a = f.startTime), d && (h[r] = {
                  startTime: a,
                  endTime: i
                }), e.options && (o = t[r], s = e.options, l = e.errors, u = s.params || {}, (c = Qh(o)).length && c.forEach((function (t) {
                  u.hasOwnProperty(t) || l.push("Unable to resolve the local animation param ".concat(t, " in the given list of values"))
                })))
              } else e.errors.push('The provided animation property "'.concat(r, '" is not a supported CSS property for animations'))
            }))
          }))
        }
      }, {
        key: "visitKeyframes", value: function (t, e) {
          var n = this, r = {type: 5, styles: [], options: null};
          if (!e.currentAnimateTimings) return e.errors.push("keyframes() must be placed inside of a call to animate()"), r;
          var i = 0, a = [], o = !1, s = !1, l = 0, u = t.steps.map((function (t) {
            var r = n._makeStyleAst(t, e), u = null != r.offset ? r.offset : function (t) {
              if ("string" == typeof t) return null;
              var e = null;
              if (Array.isArray(t)) t.forEach((function (t) {
                if (cf(t) && t.hasOwnProperty("offset")) {
                  var n = t;
                  e = parseFloat(n.offset), delete n.offset
                }
              })); else if (cf(t) && t.hasOwnProperty("offset")) {
                var n = t;
                e = parseFloat(n.offset), delete n.offset
              }
              return e
            }(r.styles), c = 0;
            return null != u && (i++, c = r.offset = u), s = s || c < 0 || c > 1, o = o || c < l, l = c, a.push(c), r
          }));
          s && e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), o && e.errors.push("Please ensure that all keyframe offsets are in order");
          var c = t.steps.length, h = 0;
          i > 0 && i < c ? e.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == i && (h = 1 / (c - 1));
          var f = c - 1, d = e.currentTime, p = e.currentAnimateTimings, v = p.duration;
          return u.forEach((function (t, i) {
            var o = h > 0 ? i == f ? 1 : h * i : a[i], s = o * v;
            e.currentTime = d + p.delay + s, p.duration = s, n._validateStyleAst(t, e), t.offset = o, r.styles.push(t)
          })), r
        }
      }, {
        key: "visitReference", value: function (t, e) {
          return {type: 8, animation: tf(this, Wh(t.animation), e), options: hf(t.options)}
        }
      }, {
        key: "visitAnimateChild", value: function (t, e) {
          return e.depCount++, {type: 9, options: hf(t.options)}
        }
      }, {
        key: "visitAnimateRef", value: function (t, e) {
          return {type: 10, animation: this.visitReference(t.animation, e), options: hf(t.options)}
        }
      }, {
        key: "visitQuery", value: function (t, e) {
          var n = e.currentQuerySelector, r = t.options || {};
          e.queryCount++, e.currentQuery = t;
          var i = _slicedToArray(function (t) {
            var e = !!t.split(/\s*,\s*/).find((function (t) {
              return ":self" == t
            }));
            return e && (t = t.replace(of, "")), [t = t.replace(/@\*/g, ".ng-trigger").replace(/@\w+/g, (function (t) {
              return ".ng-trigger-" + t.substr(1)
            })).replace(/:animating/g, ".ng-animating"), e]
          }(t.selector), 2), a = i[0], o = i[1];
          e.currentQuerySelector = n.length ? n + " " + a : a, kh(e.collectedStyles, e.currentQuerySelector, {});
          var s = tf(this, Wh(t.animation), e);
          return e.currentQuery = null, e.currentQuerySelector = n, {
            type: 11,
            selector: a,
            limit: r.limit || 0,
            optional: !!r.optional,
            includeSelf: o,
            animation: s,
            originalSelector: t.selector,
            options: hf(t.options)
          }
        }
      }, {
        key: "visitStagger", value: function (t, e) {
          e.currentQuery || e.errors.push("stagger() can only be used inside of query()");
          var n = "full" === t.timings ? {duration: 0, delay: 0, easing: "full"} : jh(t.timings, e.errors, !0);
          return {type: 12, animation: tf(this, Wh(t.animation), e), timings: n, options: null}
        }
      }]), t
    }(), uf = function t(e) {
      _classCallCheck(this, t), this.errors = e, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null
    };

    function cf(t) {
      return !Array.isArray(t) && "object" == typeof t
    }

    function hf(t) {
      var e;
      return t ? (t = Hh(t)).params && (t.params = (e = t.params) ? Hh(e) : null) : t = {}, t
    }

    function ff(t, e, n) {
      return {duration: t, delay: e, easing: n}
    }

    function df(t, e, n, r, i, a) {
      var o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
        s = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return {
        type: 1,
        element: t,
        keyframes: e,
        preStyleProps: n,
        postStyleProps: r,
        duration: i,
        delay: a,
        totalTime: i + a,
        easing: o,
        subTimeline: s
      }
    }

    var pf = function () {
      function t() {
        _classCallCheck(this, t), this._map = new Map
      }

      return _createClass(t, [{
        key: "consume", value: function (t) {
          var e = this._map.get(t);
          return e ? this._map.delete(t) : e = [], e
        }
      }, {
        key: "append", value: function (t, e) {
          var n, r = this._map.get(t);
          r || this._map.set(t, r = []), (n = r).push.apply(n, _toConsumableArray(e))
        }
      }, {
        key: "has", value: function (t) {
          return this._map.has(t)
        }
      }, {
        key: "clear", value: function () {
          this._map.clear()
        }
      }]), t
    }(), vf = new RegExp(":enter", "g"), gf = new RegExp(":leave", "g");

    function yf(t, e, n, r, i) {
      var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
        o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {},
        s = arguments.length > 7 ? arguments[7] : void 0, l = arguments.length > 8 ? arguments[8] : void 0,
        u = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : [];
      return (new mf).buildKeyframes(t, e, n, r, i, a, o, s, l, u)
    }

    var mf = function () {
      function t() {
        _classCallCheck(this, t)
      }

      return _createClass(t, [{
        key: "buildKeyframes", value: function (t, e, n, r, i, a, o, s, l) {
          var u = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : [];
          l = l || new pf;
          var c = new kf(t, e, l, r, i, u, []);
          c.options = s, c.currentTimeline.setStyles([a], null, c.errors, s), tf(this, n, c);
          var h = c.timelines.filter((function (t) {
            return t.containsAnimation()
          }));
          if (h.length && Object.keys(o).length) {
            var f = h[h.length - 1];
            f.allowOnlyTimelineStyles() || f.setStyles([o], null, c.errors, s)
          }
          return h.length ? h.map((function (t) {
            return t.buildKeyframes()
          })) : [df(e, [], [], [], 0, 0, "", !1)]
        }
      }, {
        key: "visitTrigger", value: function (t, e) {
        }
      }, {
        key: "visitState", value: function (t, e) {
        }
      }, {
        key: "visitTransition", value: function (t, e) {
        }
      }, {
        key: "visitAnimateChild", value: function (t, e) {
          var n = e.subInstructions.consume(e.element);
          if (n) {
            var r = e.createSubContext(t.options), i = e.currentTimeline.currentTime,
              a = this._visitSubInstructions(n, r, r.options);
            i != a && e.transformIntoNewTimeline(a)
          }
          e.previousNode = t
        }
      }, {
        key: "visitAnimateRef", value: function (t, e) {
          var n = e.createSubContext(t.options);
          n.transformIntoNewTimeline(), this.visitReference(t.animation, n), e.transformIntoNewTimeline(n.currentTimeline.currentTime), e.previousNode = t
        }
      }, {
        key: "_visitSubInstructions", value: function (t, e, n) {
          var r = e.currentTimeline.currentTime, i = null != n.duration ? Fh(n.duration) : null,
            a = null != n.delay ? Fh(n.delay) : null;
          return 0 !== i && t.forEach((function (t) {
            var n = e.appendInstructionToTimeline(t, i, a);
            r = Math.max(r, n.duration + n.delay)
          })), r
        }
      }, {
        key: "visitReference", value: function (t, e) {
          e.updateOptions(t.options, !0), tf(this, t.animation, e), e.previousNode = t
        }
      }, {
        key: "visitSequence", value: function (t, e) {
          var n = this, r = e.subContextCount, i = e, a = t.options;
          if (a && (a.params || a.delay) && ((i = e.createSubContext(a)).transformIntoNewTimeline(), null != a.delay)) {
            6 == i.previousNode.type && (i.currentTimeline.snapshotCurrentStyles(), i.previousNode = _f);
            var o = Fh(a.delay);
            i.delayNextStep(o)
          }
          t.steps.length && (t.steps.forEach((function (t) {
            return tf(n, t, i)
          })), i.currentTimeline.applyStylesToKeyframe(), i.subContextCount > r && i.transformIntoNewTimeline()), e.previousNode = t
        }
      }, {
        key: "visitGroup", value: function (t, e) {
          var n = this, r = [], i = e.currentTimeline.currentTime,
            a = t.options && t.options.delay ? Fh(t.options.delay) : 0;
          t.steps.forEach((function (o) {
            var s = e.createSubContext(t.options);
            a && s.delayNextStep(a), tf(n, o, s), i = Math.max(i, s.currentTimeline.currentTime), r.push(s.currentTimeline)
          })), r.forEach((function (t) {
            return e.currentTimeline.mergeTimelineCollectedStyles(t)
          })), e.transformIntoNewTimeline(i), e.previousNode = t
        }
      }, {
        key: "_visitTiming", value: function (t, e) {
          if (t.dynamic) {
            var n = t.strValue;
            return jh(e.params ? Yh(n, e.params, e.errors) : n, e.errors)
          }
          return {duration: t.duration, delay: t.delay, easing: t.easing}
        }
      }, {
        key: "visitAnimate", value: function (t, e) {
          var n = e.currentAnimateTimings = this._visitTiming(t.timings, e), r = e.currentTimeline;
          n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
          var i = t.style;
          5 == i.type ? this.visitKeyframes(i, e) : (e.incrementTime(n.duration), this.visitStyle(i, e), r.applyStylesToKeyframe()), e.currentAnimateTimings = null, e.previousNode = t
        }
      }, {
        key: "visitStyle", value: function (t, e) {
          var n = e.currentTimeline, r = e.currentAnimateTimings;
          !r && n.getCurrentStyleProperties().length && n.forwardFrame();
          var i = r && r.easing || t.easing;
          t.isEmptyStep ? n.applyEmptyStep(i) : n.setStyles(t.styles, i, e.errors, e.options), e.previousNode = t
        }
      }, {
        key: "visitKeyframes", value: function (t, e) {
          var n = e.currentAnimateTimings, r = e.currentTimeline.duration, i = n.duration,
            a = e.createSubContext().currentTimeline;
          a.easing = n.easing, t.styles.forEach((function (t) {
            a.forwardTime((t.offset || 0) * i), a.setStyles(t.styles, t.easing, e.errors, e.options), a.applyStylesToKeyframe()
          })), e.currentTimeline.mergeTimelineCollectedStyles(a), e.transformIntoNewTimeline(r + i), e.previousNode = t
        }
      }, {
        key: "visitQuery", value: function (t, e) {
          var n = this, r = e.currentTimeline.currentTime, i = t.options || {}, a = i.delay ? Fh(i.delay) : 0;
          a && (6 === e.previousNode.type || 0 == r && e.currentTimeline.getCurrentStyleProperties().length) && (e.currentTimeline.snapshotCurrentStyles(), e.previousNode = _f);
          var o = r, s = e.invokeQuery(t.selector, t.originalSelector, t.limit, t.includeSelf, !!i.optional, e.errors);
          e.currentQueryTotal = s.length;
          var l = null;
          s.forEach((function (r, i) {
            e.currentQueryIndex = i;
            var s = e.createSubContext(t.options, r);
            a && s.delayNextStep(a), r === e.element && (l = s.currentTimeline), tf(n, t.animation, s), s.currentTimeline.applyStylesToKeyframe(), o = Math.max(o, s.currentTimeline.currentTime)
          })), e.currentQueryIndex = 0, e.currentQueryTotal = 0, e.transformIntoNewTimeline(o), l && (e.currentTimeline.mergeTimelineCollectedStyles(l), e.currentTimeline.snapshotCurrentStyles()), e.previousNode = t
        }
      }, {
        key: "visitStagger", value: function (t, e) {
          var n = e.parentContext, r = e.currentTimeline, i = t.timings, a = Math.abs(i.duration),
            o = a * (e.currentQueryTotal - 1), s = a * e.currentQueryIndex;
          switch (i.duration < 0 ? "reverse" : i.easing) {
            case"reverse":
              s = o - s;
              break;
            case"full":
              s = n.currentStaggerTime
          }
          var l = e.currentTimeline;
          s && l.delayNextStep(s);
          var u = l.currentTime;
          tf(this, t.animation, e), e.previousNode = t, n.currentStaggerTime = r.currentTime - u + (r.startTime - n.currentTimeline.startTime)
        }
      }]), t
    }(), _f = {}, kf = function () {
      function t(e, n, r, i, a, o, s, l) {
        _classCallCheck(this, t), this._driver = e, this.element = n, this.subInstructions = r, this._enterClassName = i, this._leaveClassName = a, this.errors = o, this.timelines = s, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = _f, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = l || new bf(this._driver, n, 0), s.push(this.currentTimeline)
      }

      return _createClass(t, [{
        key: "updateOptions", value: function (t, e) {
          var n = this;
          if (t) {
            var r = t, i = this.options;
            null != r.duration && (i.duration = Fh(r.duration)), null != r.delay && (i.delay = Fh(r.delay));
            var a = r.params;
            if (a) {
              var o = i.params;
              o || (o = this.options.params = {}), Object.keys(a).forEach((function (t) {
                e && o.hasOwnProperty(t) || (o[t] = Yh(a[t], o, n.errors))
              }))
            }
          }
        }
      }, {
        key: "_copyOptions", value: function () {
          var t = {};
          if (this.options) {
            var e = this.options.params;
            if (e) {
              var n = t.params = {};
              Object.keys(e).forEach((function (t) {
                n[t] = e[t]
              }))
            }
          }
          return t
        }
      }, {
        key: "createSubContext", value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0,
            i = n || this.element,
            a = new t(this._driver, i, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(i, r || 0));
          return a.previousNode = this.previousNode, a.currentAnimateTimings = this.currentAnimateTimings, a.options = this._copyOptions(), a.updateOptions(e), a.currentQueryIndex = this.currentQueryIndex, a.currentQueryTotal = this.currentQueryTotal, a.parentContext = this, this.subContextCount++, a
        }
      }, {
        key: "transformIntoNewTimeline", value: function (t) {
          return this.previousNode = _f, this.currentTimeline = this.currentTimeline.fork(this.element, t), this.timelines.push(this.currentTimeline), this.currentTimeline
        }
      }, {
        key: "appendInstructionToTimeline", value: function (t, e, n) {
          var r = {
              duration: null != e ? e : t.duration,
              delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay,
              easing: ""
            },
            i = new wf(this._driver, t.element, t.keyframes, t.preStyleProps, t.postStyleProps, r, t.stretchStartingKeyframe);
          return this.timelines.push(i), r
        }
      }, {
        key: "incrementTime", value: function (t) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + t)
        }
      }, {
        key: "delayNextStep", value: function (t) {
          t > 0 && this.currentTimeline.delayNextStep(t)
        }
      }, {
        key: "invokeQuery", value: function (t, e, n, r, i, a) {
          var o = [];
          if (r && o.push(this.element), t.length > 0) {
            t = (t = t.replace(vf, "." + this._enterClassName)).replace(gf, "." + this._leaveClassName);
            var s = this._driver.query(this.element, t, 1 != n);
            0 !== n && (s = n < 0 ? s.slice(s.length + n, s.length) : s.slice(0, n)), o.push.apply(o, _toConsumableArray(s))
          }
          return i || 0 != o.length || a.push('`query("'.concat(e, '")` returned zero elements. (Use `query("').concat(e, '", { optional: true })` if you wish to allow this.)')), o
        }
      }, {
        key: "params", get: function () {
          return this.options.params
        }
      }]), t
    }(), bf = function () {
      function t(e, n, r, i) {
        _classCallCheck(this, t), this._driver = e, this.element = n, this.startTime = r, this._elementTimelineStylesLookup = i, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(n), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(n, this._localTimelineStyles)), this._loadKeyframe()
      }

      return _createClass(t, [{
        key: "containsAnimation", value: function () {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0
          }
        }
      }, {
        key: "getCurrentStyleProperties", value: function () {
          return Object.keys(this._currentKeyframe)
        }
      }, {
        key: "delayNextStep", value: function (t) {
          var e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
          this.duration || e ? (this.forwardTime(this.currentTime + t), e && this.snapshotCurrentStyles()) : this.startTime += t
        }
      }, {
        key: "fork", value: function (e, n) {
          return this.applyStylesToKeyframe(), new t(this._driver, e, n || this.currentTime, this._elementTimelineStylesLookup)
        }
      }, {
        key: "_loadKeyframe", value: function () {
          this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe))
        }
      }, {
        key: "forwardFrame", value: function () {
          this.duration += 1, this._loadKeyframe()
        }
      }, {
        key: "forwardTime", value: function (t) {
          this.applyStylesToKeyframe(), this.duration = t, this._loadKeyframe()
        }
      }, {
        key: "_updateStyle", value: function (t, e) {
          this._localTimelineStyles[t] = e, this._globalTimelineStyles[t] = e, this._styleSummary[t] = {
            time: this.currentTime,
            value: e
          }
        }
      }, {
        key: "allowOnlyTimelineStyles", value: function () {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe
        }
      }, {
        key: "applyEmptyStep", value: function (t) {
          var e = this;
          t && (this._previousKeyframe.easing = t), Object.keys(this._globalTimelineStyles).forEach((function (t) {
            e._backFill[t] = e._globalTimelineStyles[t] || "*", e._currentKeyframe[t] = "*"
          })), this._currentEmptyStepKeyframe = this._currentKeyframe
        }
      }, {
        key: "setStyles", value: function (t, e, n, r) {
          var i = this;
          e && (this._previousKeyframe.easing = e);
          var a = r && r.params || {}, o = function (t, e) {
            var n, r = {};
            return t.forEach((function (t) {
              "*" === t ? (n = n || Object.keys(e)).forEach((function (t) {
                r[t] = "*"
              })) : Uh(t, !1, r)
            })), r
          }(t, this._globalTimelineStyles);
          Object.keys(o).forEach((function (t) {
            var e = Yh(o[t], a, n);
            i._pendingStyles[t] = e, i._localTimelineStyles.hasOwnProperty(t) || (i._backFill[t] = i._globalTimelineStyles.hasOwnProperty(t) ? i._globalTimelineStyles[t] : "*"), i._updateStyle(t, e)
          }))
        }
      }, {
        key: "applyStylesToKeyframe", value: function () {
          var t = this, e = this._pendingStyles, n = Object.keys(e);
          0 != n.length && (this._pendingStyles = {}, n.forEach((function (n) {
            t._currentKeyframe[n] = e[n]
          })), Object.keys(this._localTimelineStyles).forEach((function (e) {
            t._currentKeyframe.hasOwnProperty(e) || (t._currentKeyframe[e] = t._localTimelineStyles[e])
          })))
        }
      }, {
        key: "snapshotCurrentStyles", value: function () {
          var t = this;
          Object.keys(this._localTimelineStyles).forEach((function (e) {
            var n = t._localTimelineStyles[e];
            t._pendingStyles[e] = n, t._updateStyle(e, n)
          }))
        }
      }, {
        key: "getFinalKeyframe", value: function () {
          return this._keyframes.get(this.duration)
        }
      }, {
        key: "mergeTimelineCollectedStyles", value: function (t) {
          var e = this;
          Object.keys(t._styleSummary).forEach((function (n) {
            var r = e._styleSummary[n], i = t._styleSummary[n];
            (!r || i.time > r.time) && e._updateStyle(n, i.value)
          }))
        }
      }, {
        key: "buildKeyframes", value: function () {
          var t = this;
          this.applyStylesToKeyframe();
          var e = new Set, n = new Set, r = 1 === this._keyframes.size && 0 === this.duration, i = [];
          this._keyframes.forEach((function (a, o) {
            var s = Uh(a, !0);
            Object.keys(s).forEach((function (t) {
              var r = s[t];
              "!" == r ? e.add(t) : "*" == r && n.add(t)
            })), r || (s.offset = o / t.duration), i.push(s)
          }));
          var a = e.size ? Zh(e.values()) : [], o = n.size ? Zh(n.values()) : [];
          if (r) {
            var s = i[0], l = Hh(s);
            s.offset = 0, l.offset = 1, i = [s, l]
          }
          return df(this.element, i, a, o, this.duration, this.startTime, this.easing, !1)
        }
      }, {
        key: "currentTime", get: function () {
          return this.startTime + this.duration
        }
      }, {
        key: "properties", get: function () {
          var t = [];
          for (var e in this._currentKeyframe) t.push(e);
          return t
        }
      }]), t
    }(), wf = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i, a, o, s) {
        var l, u = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        return _classCallCheck(this, n), (l = e.call(this, t, r, s.delay)).element = r, l.keyframes = i, l.preStyleProps = a, l.postStyleProps = o, l._stretchStartingKeyframe = u, l.timings = {
          duration: s.duration,
          delay: s.delay,
          easing: s.easing
        }, l
      }

      return _createClass(n, [{
        key: "containsAnimation", value: function () {
          return this.keyframes.length > 1
        }
      }, {
        key: "buildKeyframes", value: function () {
          var t = this.keyframes, e = this.timings, n = e.delay, r = e.duration, i = e.easing;
          if (this._stretchStartingKeyframe && n) {
            var a = [], o = r + n, s = n / o, l = Uh(t[0], !1);
            l.offset = 0, a.push(l);
            var u = Uh(t[0], !1);
            u.offset = Cf(s), a.push(u);
            for (var c = t.length - 1, h = 1; h <= c; h++) {
              var f = Uh(t[h], !1);
              f.offset = Cf((n + f.offset * r) / o), a.push(f)
            }
            r = o, n = 0, i = "", t = a
          }
          return df(this.element, t, this.preStyleProps, this.postStyleProps, r, n, i, !0)
        }
      }]), n
    }(bf);

    function Cf(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3, n = Math.pow(10, e - 1);
      return Math.round(t * n) / n
    }

    var xf = function t() {
      _classCallCheck(this, t)
    }, Sf = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        return _classCallCheck(this, n), e.apply(this, arguments)
      }

      return _createClass(n, [{
        key: "normalizePropertyName", value: function (t, e) {
          return Kh(t)
        }
      }, {
        key: "normalizeStyleValue", value: function (t, e, n, r) {
          var i = "", a = n.toString().trim();
          if (Tf[e] && 0 !== n && "0" !== n) if ("number" == typeof n) i = "px"; else {
            var o = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
            o && 0 == o[1].length && r.push("Please provide a CSS unit value for ".concat(t, ":").concat(n))
          }
          return a + i
        }
      }]), n
    }(xf), Tf = function (t) {
      var e = {};
      return t.forEach((function (t) {
        return e[t] = !0
      })), e
    }("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(","));

    function Ef(t, e, n, r, i, a, o, s, l, u, c, h, f) {
      return {
        type: 0,
        element: t,
        triggerName: e,
        isRemovalTransition: i,
        fromState: n,
        fromStyles: a,
        toState: r,
        toStyles: o,
        timelines: s,
        queriedElements: l,
        preStyleProps: u,
        postStyleProps: c,
        totalTime: h,
        errors: f
      }
    }

    var Af = {}, Of = function () {
      function t(e, n, r) {
        _classCallCheck(this, t), this._triggerName = e, this.ast = n, this._stateStyles = r
      }

      return _createClass(t, [{
        key: "match", value: function (t, e, n, r) {
          return function (t, e, n, r, i) {
            return t.some((function (t) {
              return t(e, n, r, i)
            }))
          }(this.ast.matchers, t, e, n, r)
        }
      }, {
        key: "buildStyles", value: function (t, e, n) {
          var r = this._stateStyles["*"], i = this._stateStyles[t], a = r ? r.buildStyles(e, n) : {};
          return i ? i.buildStyles(e, n) : a
        }
      }, {
        key: "build", value: function (t, e, n, r, i, a, o, s, l, u) {
          var c = [], h = this.ast.options && this.ast.options.params || Af,
            f = this.buildStyles(n, o && o.params || Af, c), d = s && s.params || Af, p = this.buildStyles(r, d, c),
            v = new Set, g = new Map, y = new Map, m = "void" === r,
            _ = {params: Object.assign(Object.assign({}, h), d)},
            k = u ? [] : yf(t, e, this.ast.animation, i, a, f, p, _, l, c), b = 0;
          if (k.forEach((function (t) {
            b = Math.max(t.duration + t.delay, b)
          })), c.length) return Ef(e, this._triggerName, n, r, m, f, p, [], [], g, y, b, c);
          k.forEach((function (t) {
            var n = t.element, r = kh(g, n, {});
            t.preStyleProps.forEach((function (t) {
              return r[t] = !0
            }));
            var i = kh(y, n, {});
            t.postStyleProps.forEach((function (t) {
              return i[t] = !0
            })), n !== e && v.add(n)
          }));
          var w = Zh(v.values());
          return Ef(e, this._triggerName, n, r, m, f, p, k, w, g, y, b)
        }
      }]), t
    }(), Lf = function () {
      function t(e, n) {
        _classCallCheck(this, t), this.styles = e, this.defaultParams = n
      }

      return _createClass(t, [{
        key: "buildStyles", value: function (t, e) {
          var n = {}, r = Hh(this.defaultParams);
          return Object.keys(t).forEach((function (e) {
            var n = t[e];
            null != n && (r[e] = n)
          })), this.styles.styles.forEach((function (t) {
            if ("string" != typeof t) {
              var i = t;
              Object.keys(i).forEach((function (t) {
                var a = i[t];
                a.length > 1 && (a = Yh(a, r, e)), n[t] = a
              }))
            }
          })), n
        }
      }]), t
    }(), Pf = function () {
      function t(e, n) {
        var r = this;
        _classCallCheck(this, t), this.name = e, this.ast = n, this.transitionFactories = [], this.states = {}, n.states.forEach((function (t) {
          r.states[t.name] = new Lf(t.style, t.options && t.options.params || {})
        })), Mf(this.states, "true", "1"), Mf(this.states, "false", "0"), n.transitions.forEach((function (t) {
          r.transitionFactories.push(new Of(e, t, r.states))
        })), this.fallbackTransition = new Of(e, {
          type: 1,
          animation: {type: 2, steps: [], options: null},
          matchers: [function (t, e) {
            return !0
          }],
          options: null,
          queryCount: 0,
          depCount: 0
        }, this.states)
      }

      return _createClass(t, [{
        key: "matchTransition", value: function (t, e, n, r) {
          return this.transitionFactories.find((function (i) {
            return i.match(t, e, n, r)
          })) || null
        }
      }, {
        key: "matchStyles", value: function (t, e, n) {
          return this.fallbackTransition.buildStyles(t, e, n)
        }
      }, {
        key: "containsQueries", get: function () {
          return this.ast.queryCount > 0
        }
      }]), t
    }();

    function Mf(t, e, n) {
      t.hasOwnProperty(e) ? t.hasOwnProperty(n) || (t[n] = t[e]) : t.hasOwnProperty(n) && (t[e] = t[n])
    }

    var Df = new pf, If = function () {
        function t(e, n, r) {
          _classCallCheck(this, t), this.bodyNode = e, this._driver = n, this._normalizer = r, this._animations = {}, this._playersById = {}, this.players = []
        }

        return _createClass(t, [{
          key: "register", value: function (t, e) {
            var n = [], r = sf(this._driver, e, n);
            if (n.length) throw new Error("Unable to build the animation due to the following errors: " + n.join("\n"));
            this._animations[t] = r
          }
        }, {
          key: "_buildPlayer", value: function (t, e, n) {
            var r = t.element, i = gh(0, this._normalizer, 0, t.keyframes, e, n);
            return this._driver.animate(r, i, t.duration, t.delay, t.easing, [], !0)
          }
        }, {
          key: "create", value: function (t, e) {
            var n, r = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = [],
              o = this._animations[t], s = new Map;
            if (o ? (n = yf(this._driver, e, o, "ng-enter", "ng-leave", {}, {}, i, Df, a)).forEach((function (t) {
              var e = kh(s, t.element, {});
              t.postStyleProps.forEach((function (t) {
                return e[t] = null
              }))
            })) : (a.push("The requested animation doesn't exist or has already been destroyed"), n = []), a.length) throw new Error("Unable to create the animation due to the following errors: " + a.join("\n"));
            s.forEach((function (t, e) {
              Object.keys(t).forEach((function (n) {
                t[n] = r._driver.computeStyle(e, n, "*")
              }))
            }));
            var l = vh(n.map((function (t) {
              var e = s.get(t.element);
              return r._buildPlayer(t, {}, e)
            })));
            return this._playersById[t] = l, l.onDestroy((function () {
              return r.destroy(t)
            })), this.players.push(l), l
          }
        }, {
          key: "destroy", value: function (t) {
            var e = this._getPlayer(t);
            e.destroy(), delete this._playersById[t];
            var n = this.players.indexOf(e);
            n >= 0 && this.players.splice(n, 1)
          }
        }, {
          key: "_getPlayer", value: function (t) {
            var e = this._playersById[t];
            if (!e) throw new Error("Unable to find the timeline player referenced by " + t);
            return e
          }
        }, {
          key: "listen", value: function (t, e, n, r) {
            var i = _h(e, "", "", "");
            return yh(this._getPlayer(t), n, i, r), function () {
            }
          }
        }, {
          key: "command", value: function (t, e, n, r) {
            if ("register" != n) if ("create" != n) {
              var i = this._getPlayer(t);
              switch (n) {
                case"play":
                  i.play();
                  break;
                case"pause":
                  i.pause();
                  break;
                case"reset":
                  i.reset();
                  break;
                case"restart":
                  i.restart();
                  break;
                case"finish":
                  i.finish();
                  break;
                case"init":
                  i.init();
                  break;
                case"setPosition":
                  i.setPosition(parseFloat(r[0]));
                  break;
                case"destroy":
                  this.destroy(t)
              }
            } else this.create(t, e, r[0] || {}); else this.register(t, r[0])
          }
        }]), t
      }(), Rf = [], Ff = {namespaceId: "", setForRemoval: !1, setForMove: !1, hasAnimation: !1, removedBeforeQueried: !1},
      Nf = {namespaceId: "", setForMove: !1, setForRemoval: !1, hasAnimation: !1, removedBeforeQueried: !0},
      jf = function () {
        function t(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          _classCallCheck(this, t), this.namespaceId = n;
          var r, i = e && e.hasOwnProperty("value");
          if (this.value = null != (r = i ? e.value : e) ? r : null, i) {
            var a = Hh(e);
            delete a.value, this.options = a
          } else this.options = {};
          this.options.params || (this.options.params = {})
        }

        return _createClass(t, [{
          key: "absorbOptions", value: function (t) {
            var e = t.params;
            if (e) {
              var n = this.options.params;
              Object.keys(e).forEach((function (t) {
                null == n[t] && (n[t] = e[t])
              }))
            }
          }
        }, {
          key: "params", get: function () {
            return this.options.params
          }
        }]), t
      }(), Hf = new jf("void"), Uf = function () {
        function t(e, n, r) {
          _classCallCheck(this, t), this.id = e, this.hostElement = n, this._engine = r, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + e, Qf(n, this._hostClassName)
        }

        return _createClass(t, [{
          key: "listen", value: function (t, e, n, r) {
            var i, a = this;
            if (!this._triggers.hasOwnProperty(e)) throw new Error('Unable to listen on the animation trigger event "'.concat(n, '" because the animation trigger "').concat(e, "\" doesn't exist!"));
            if (null == n || 0 == n.length) throw new Error('Unable to listen on the animation trigger "'.concat(e, '" because the provided event is undefined!'));
            if ("start" != (i = n) && "done" != i) throw new Error('The provided animation trigger event "'.concat(n, '" for the animation trigger "').concat(e, '" is not supported!'));
            var o = kh(this._elementListeners, t, []), s = {name: e, phase: n, callback: r};
            o.push(s);
            var l = kh(this._engine.statesByElement, t, {});
            return l.hasOwnProperty(e) || (Qf(t, "ng-trigger"), Qf(t, "ng-trigger-" + e), l[e] = Hf), function () {
              a._engine.afterFlush((function () {
                var t = o.indexOf(s);
                t >= 0 && o.splice(t, 1), a._triggers[e] || delete l[e]
              }))
            }
          }
        }, {
          key: "register", value: function (t, e) {
            return !this._triggers[t] && (this._triggers[t] = e, !0)
          }
        }, {
          key: "_getTrigger", value: function (t) {
            var e = this._triggers[t];
            if (!e) throw new Error('The provided animation trigger "'.concat(t, '" has not been registered!'));
            return e
          }
        }, {
          key: "trigger", value: function (t, e, n) {
            var r = this, i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], a = this._getTrigger(e),
              o = new Vf(this.id, e, t), s = this._engine.statesByElement.get(t);
            s || (Qf(t, "ng-trigger"), Qf(t, "ng-trigger-" + e), this._engine.statesByElement.set(t, s = {}));
            var l = s[e], u = new jf(n, this.id);
            if (!(n && n.hasOwnProperty("value")) && l && u.absorbOptions(l.options), s[e] = u, l || (l = Hf), "void" === u.value || l.value !== u.value) {
              var c = kh(this._engine.playersByElement, t, []);
              c.forEach((function (t) {
                t.namespaceId == r.id && t.triggerName == e && t.queued && t.destroy()
              }));
              var h = a.matchTransition(l.value, u.value, t, u.params), f = !1;
              if (!h) {
                if (!i) return;
                h = a.fallbackTransition, f = !0
              }
              return this._engine.totalQueuedPlayers++, this._queue.push({
                element: t,
                triggerName: e,
                transition: h,
                fromState: l,
                toState: u,
                player: o,
                isFallbackTransition: f
              }), f || (Qf(t, "ng-animate-queued"), o.onStart((function () {
                Yf(t, "ng-animate-queued")
              }))), o.onDone((function () {
                var e = r.players.indexOf(o);
                e >= 0 && r.players.splice(e, 1);
                var n = r._engine.playersByElement.get(t);
                if (n) {
                  var i = n.indexOf(o);
                  i >= 0 && n.splice(i, 1)
                }
              })), this.players.push(o), c.push(o), o
            }
            if (!function (t, e) {
              var n = Object.keys(t), r = Object.keys(e);
              if (n.length != r.length) return !1;
              for (var i = 0; i < n.length; i++) {
                var a = n[i];
                if (!e.hasOwnProperty(a) || t[a] !== e[a]) return !1
              }
              return !0
            }(l.params, u.params)) {
              var d = [], p = a.matchStyles(l.value, l.params, d), v = a.matchStyles(u.value, u.params, d);
              d.length ? this._engine.reportError(d) : this._engine.afterFlush((function () {
                qh(t, p), Bh(t, v)
              }))
            }
          }
        }, {
          key: "deregister", value: function (t) {
            var e = this;
            delete this._triggers[t], this._engine.statesByElement.forEach((function (e, n) {
              delete e[t]
            })), this._elementListeners.forEach((function (n, r) {
              e._elementListeners.set(r, n.filter((function (e) {
                return e.name != t
              })))
            }))
          }
        }, {
          key: "clearElementCache", value: function (t) {
            this._engine.statesByElement.delete(t), this._elementListeners.delete(t);
            var e = this._engine.playersByElement.get(t);
            e && (e.forEach((function (t) {
              return t.destroy()
            })), this._engine.playersByElement.delete(t))
          }
        }, {
          key: "_signalRemovalForInnerTriggers", value: function (t, e) {
            var n = this, r = this._engine.driver.query(t, ".ng-trigger", !0);
            r.forEach((function (t) {
              if (!t.__ng_removed) {
                var r = n._engine.fetchNamespacesByElement(t);
                r.size ? r.forEach((function (n) {
                  return n.triggerLeaveAnimation(t, e, !1, !0)
                })) : n.clearElementCache(t)
              }
            })), this._engine.afterFlushAnimationsDone((function () {
              return r.forEach((function (t) {
                return n.clearElementCache(t)
              }))
            }))
          }
        }, {
          key: "triggerLeaveAnimation", value: function (t, e, n, r) {
            var i = this, a = this._engine.statesByElement.get(t);
            if (a) {
              var o = [];
              if (Object.keys(a).forEach((function (e) {
                if (i._triggers[e]) {
                  var n = i.trigger(t, e, "void", r);
                  n && o.push(n)
                }
              })), o.length) return this._engine.markElementAsRemoved(this.id, t, !0, e), n && vh(o).onDone((function () {
                return i._engine.processLeaveNode(t)
              })), !0
            }
            return !1
          }
        }, {
          key: "prepareLeaveAnimationListeners", value: function (t) {
            var e = this, n = this._elementListeners.get(t);
            if (n) {
              var r = new Set;
              n.forEach((function (n) {
                var i = n.name;
                if (!r.has(i)) {
                  r.add(i);
                  var a = e._triggers[i].fallbackTransition, o = e._engine.statesByElement.get(t)[i] || Hf,
                    s = new jf("void"), l = new Vf(e.id, i, t);
                  e._engine.totalQueuedPlayers++, e._queue.push({
                    element: t,
                    triggerName: i,
                    transition: a,
                    fromState: o,
                    toState: s,
                    player: l,
                    isFallbackTransition: !0
                  })
                }
              }))
            }
          }
        }, {
          key: "removeNode", value: function (t, e) {
            var n = this, r = this._engine;
            if (t.childElementCount && this._signalRemovalForInnerTriggers(t, e), !this.triggerLeaveAnimation(t, e, !0)) {
              var i = !1;
              if (r.totalAnimations) {
                var a = r.players.length ? r.playersByQueriedElement.get(t) : [];
                if (a && a.length) i = !0; else for (var o = t; o = o.parentNode;) if (r.statesByElement.get(o)) {
                  i = !0;
                  break
                }
              }
              if (this.prepareLeaveAnimationListeners(t), i) r.markElementAsRemoved(this.id, t, !1, e); else {
                var s = t.__ng_removed;
                s && s !== Ff || (r.afterFlush((function () {
                  return n.clearElementCache(t)
                })), r.destroyInnerAnimations(t), r._onRemovalComplete(t, e))
              }
            }
          }
        }, {
          key: "insertNode", value: function (t, e) {
            Qf(t, this._hostClassName)
          }
        }, {
          key: "drainQueuedTransitions", value: function (t) {
            var e = this, n = [];
            return this._queue.forEach((function (r) {
              var i = r.player;
              if (!i.destroyed) {
                var a = r.element, o = e._elementListeners.get(a);
                o && o.forEach((function (e) {
                  if (e.name == r.triggerName) {
                    var n = _h(a, r.triggerName, r.fromState.value, r.toState.value);
                    n._data = t, yh(r.player, e.phase, n, e.callback)
                  }
                })), i.markedForDestroy ? e._engine.afterFlush((function () {
                  i.destroy()
                })) : n.push(r)
              }
            })), this._queue = [], n.sort((function (t, n) {
              var r = t.transition.ast.depCount, i = n.transition.ast.depCount;
              return 0 == r || 0 == i ? r - i : e._engine.driver.containsElement(t.element, n.element) ? 1 : -1
            }))
          }
        }, {
          key: "destroy", value: function (t) {
            this.players.forEach((function (t) {
              return t.destroy()
            })), this._signalRemovalForInnerTriggers(this.hostElement, t)
          }
        }, {
          key: "elementContainsData", value: function (t) {
            var e = !1;
            return this._elementListeners.has(t) && (e = !0), e = !!this._queue.find((function (e) {
              return e.element === t
            })) || e
          }
        }]), t
      }(), zf = function () {
        function t(e, n, r) {
          _classCallCheck(this, t), this.bodyNode = e, this.driver = n, this._normalizer = r, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = function (t, e) {
          }
        }

        return _createClass(t, [{
          key: "_onRemovalComplete", value: function (t, e) {
            this.onRemovalComplete(t, e)
          }
        }, {
          key: "createNamespace", value: function (t, e) {
            var n = new Uf(t, e, this);
            return e.parentNode ? this._balanceNamespaceList(n, e) : (this.newHostElements.set(e, n), this.collectEnterElement(e)), this._namespaceLookup[t] = n
          }
        }, {
          key: "_balanceNamespaceList", value: function (t, e) {
            var n = this._namespaceList.length - 1;
            if (n >= 0) {
              for (var r = !1, i = n; i >= 0; i--) if (this.driver.containsElement(this._namespaceList[i].hostElement, e)) {
                this._namespaceList.splice(i + 1, 0, t), r = !0;
                break
              }
              r || this._namespaceList.splice(0, 0, t)
            } else this._namespaceList.push(t);
            return this.namespacesByHostElement.set(e, t), t
          }
        }, {
          key: "register", value: function (t, e) {
            var n = this._namespaceLookup[t];
            return n || (n = this.createNamespace(t, e)), n
          }
        }, {
          key: "registerTrigger", value: function (t, e, n) {
            var r = this._namespaceLookup[t];
            r && r.register(e, n) && this.totalAnimations++
          }
        }, {
          key: "destroy", value: function (t, e) {
            var n = this;
            if (t) {
              var r = this._fetchNamespace(t);
              this.afterFlush((function () {
                n.namespacesByHostElement.delete(r.hostElement), delete n._namespaceLookup[t];
                var e = n._namespaceList.indexOf(r);
                e >= 0 && n._namespaceList.splice(e, 1)
              })), this.afterFlushAnimationsDone((function () {
                return r.destroy(e)
              }))
            }
          }
        }, {
          key: "_fetchNamespace", value: function (t) {
            return this._namespaceLookup[t]
          }
        }, {
          key: "fetchNamespacesByElement", value: function (t) {
            var e = new Set, n = this.statesByElement.get(t);
            if (n) for (var r = Object.keys(n), i = 0; i < r.length; i++) {
              var a = n[r[i]].namespaceId;
              if (a) {
                var o = this._fetchNamespace(a);
                o && e.add(o)
              }
            }
            return e
          }
        }, {
          key: "trigger", value: function (t, e, n, r) {
            if (Bf(e)) {
              var i = this._fetchNamespace(t);
              if (i) return i.trigger(e, n, r), !0
            }
            return !1
          }
        }, {
          key: "insertNode", value: function (t, e, n, r) {
            if (Bf(e)) {
              var i = e.__ng_removed;
              if (i && i.setForRemoval) {
                i.setForRemoval = !1, i.setForMove = !0;
                var a = this.collectedLeaveElements.indexOf(e);
                a >= 0 && this.collectedLeaveElements.splice(a, 1)
              }
              if (t) {
                var o = this._fetchNamespace(t);
                o && o.insertNode(e, n)
              }
              r && this.collectEnterElement(e)
            }
          }
        }, {
          key: "collectEnterElement", value: function (t) {
            this.collectedEnterElements.push(t)
          }
        }, {
          key: "markElementAsDisabled", value: function (t, e) {
            e ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), Qf(t, "ng-animate-disabled")) : this.disabledNodes.has(t) && (this.disabledNodes.delete(t), Yf(t, "ng-animate-disabled"))
          }
        }, {
          key: "removeNode", value: function (t, e, n, r) {
            if (Bf(e)) {
              var i = t ? this._fetchNamespace(t) : null;
              if (i ? i.removeNode(e, r) : this.markElementAsRemoved(t, e, !1, r), n) {
                var a = this.namespacesByHostElement.get(e);
                a && a.id !== t && a.removeNode(e, r)
              }
            } else this._onRemovalComplete(e, r)
          }
        }, {
          key: "markElementAsRemoved", value: function (t, e, n, r) {
            this.collectedLeaveElements.push(e), e.__ng_removed = {
              namespaceId: t,
              setForRemoval: r,
              hasAnimation: n,
              removedBeforeQueried: !1
            }
          }
        }, {
          key: "listen", value: function (t, e, n, r, i) {
            return Bf(e) ? this._fetchNamespace(t).listen(e, n, r, i) : function () {
            }
          }
        }, {
          key: "_buildInstruction", value: function (t, e, n, r, i) {
            return t.transition.build(this.driver, t.element, t.fromState.value, t.toState.value, n, r, t.fromState.options, t.toState.options, e, i)
          }
        }, {
          key: "destroyInnerAnimations", value: function (t) {
            var e = this, n = this.driver.query(t, ".ng-trigger", !0);
            n.forEach((function (t) {
              return e.destroyActiveAnimationsForElement(t)
            })), 0 != this.playersByQueriedElement.size && (n = this.driver.query(t, ".ng-animating", !0)).forEach((function (t) {
              return e.finishActiveQueriedAnimationOnElement(t)
            }))
          }
        }, {
          key: "destroyActiveAnimationsForElement", value: function (t) {
            var e = this.playersByElement.get(t);
            e && e.forEach((function (t) {
              t.queued ? t.markedForDestroy = !0 : t.destroy()
            }))
          }
        }, {
          key: "finishActiveQueriedAnimationOnElement", value: function (t) {
            var e = this.playersByQueriedElement.get(t);
            e && e.forEach((function (t) {
              return t.finish()
            }))
          }
        }, {
          key: "whenRenderingDone", value: function () {
            var t = this;
            return new Promise((function (e) {
              if (t.players.length) return vh(t.players).onDone((function () {
                return e()
              }));
              e()
            }))
          }
        }, {
          key: "processLeaveNode", value: function (t) {
            var e = this, n = t.__ng_removed;
            if (n && n.setForRemoval) {
              if (t.__ng_removed = Ff, n.namespaceId) {
                this.destroyInnerAnimations(t);
                var r = this._fetchNamespace(n.namespaceId);
                r && r.clearElementCache(t)
              }
              this._onRemovalComplete(t, n.setForRemoval)
            }
            this.driver.matchesElement(t, ".ng-animate-disabled") && this.markElementAsDisabled(t, !1), this.driver.query(t, ".ng-animate-disabled", !0).forEach((function (t) {
              e.markElementAsDisabled(t, !1)
            }))
          }
        }, {
          key: "flush", value: function () {
            var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, n = [];
            if (this.newHostElements.size && (this.newHostElements.forEach((function (e, n) {
              return t._balanceNamespaceList(e, n)
            })), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length) for (var r = 0; r < this.collectedEnterElements.length; r++) Qf(this.collectedEnterElements[r], "ng-star-inserted");
            if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
              var i = [];
              try {
                n = this._flushAnimations(i, e)
              } finally {
                for (var a = 0; a < i.length; a++) i[a]()
              }
            } else for (var o = 0; o < this.collectedLeaveElements.length; o++) this.processLeaveNode(this.collectedLeaveElements[o]);
            if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach((function (t) {
              return t()
            })), this._flushFns = [], this._whenQuietFns.length) {
              var s = this._whenQuietFns;
              this._whenQuietFns = [], n.length ? vh(n).onDone((function () {
                s.forEach((function (t) {
                  return t()
                }))
              })) : s.forEach((function (t) {
                return t()
              }))
            }
          }
        }, {
          key: "reportError", value: function (t) {
            throw new Error("Unable to process animations due to the following failed trigger transitions\n " + t.join("\n"))
          }
        }, {
          key: "_flushAnimations", value: function (t, e) {
            var n = this, r = new pf, i = [], a = new Map, o = [], s = new Map, l = new Map, u = new Map, c = new Set;
            this.disabledNodes.forEach((function (t) {
              c.add(t);
              for (var e = n.driver.query(t, ".ng-animate-queued", !0), r = 0; r < e.length; r++) c.add(e[r])
            }));
            var h = this.bodyNode, f = Array.from(this.statesByElement.keys()), d = Gf(f, this.collectedEnterElements),
              p = new Map, v = 0;
            d.forEach((function (t, e) {
              var n = "ng-enter" + v++;
              p.set(e, n), t.forEach((function (t) {
                return Qf(t, n)
              }))
            }));
            for (var g = [], y = new Set, m = new Set, _ = 0; _ < this.collectedLeaveElements.length; _++) {
              var k = this.collectedLeaveElements[_], b = k.__ng_removed;
              b && b.setForRemoval && (g.push(k), y.add(k), b.hasAnimation ? this.driver.query(k, ".ng-star-inserted", !0).forEach((function (t) {
                return y.add(t)
              })) : m.add(k))
            }
            var w = new Map, C = Gf(f, Array.from(y));
            C.forEach((function (t, e) {
              var n = "ng-leave" + v++;
              w.set(e, n), t.forEach((function (t) {
                return Qf(t, n)
              }))
            })), t.push((function () {
              d.forEach((function (t, e) {
                var n = p.get(e);
                t.forEach((function (t) {
                  return Yf(t, n)
                }))
              })), C.forEach((function (t, e) {
                var n = w.get(e);
                t.forEach((function (t) {
                  return Yf(t, n)
                }))
              })), g.forEach((function (t) {
                n.processLeaveNode(t)
              }))
            }));
            for (var x = [], S = [], T = this._namespaceList.length - 1; T >= 0; T--) this._namespaceList[T].drainQueuedTransitions(e).forEach((function (t) {
              var e = t.player, a = t.element;
              if (x.push(e), n.collectedEnterElements.length) {
                var c = a.__ng_removed;
                if (c && c.setForMove) return void e.destroy()
              }
              var f = !h || !n.driver.containsElement(h, a), d = w.get(a), v = p.get(a),
                g = n._buildInstruction(t, r, v, d, f);
              if (!g.errors || !g.errors.length) return f || t.isFallbackTransition ? (e.onStart((function () {
                return qh(a, g.fromStyles)
              })), e.onDestroy((function () {
                return Bh(a, g.toStyles)
              })), void i.push(e)) : (g.timelines.forEach((function (t) {
                return t.stretchStartingKeyframe = !0
              })), r.append(a, g.timelines), o.push({
                instruction: g,
                player: e,
                element: a
              }), g.queriedElements.forEach((function (t) {
                return kh(s, t, []).push(e)
              })), g.preStyleProps.forEach((function (t, e) {
                var n = Object.keys(t);
                if (n.length) {
                  var r = l.get(e);
                  r || l.set(e, r = new Set), n.forEach((function (t) {
                    return r.add(t)
                  }))
                }
              })), void g.postStyleProps.forEach((function (t, e) {
                var n = Object.keys(t), r = u.get(e);
                r || u.set(e, r = new Set), n.forEach((function (t) {
                  return r.add(t)
                }))
              })));
              S.push(g)
            }));
            if (S.length) {
              var E = [];
              S.forEach((function (t) {
                E.push("@".concat(t.triggerName, " has failed due to:\n")), t.errors.forEach((function (t) {
                  return E.push("- ".concat(t, "\n"))
                }))
              })), x.forEach((function (t) {
                return t.destroy()
              })), this.reportError(E)
            }
            var A = new Map, O = new Map;
            o.forEach((function (t) {
              var e = t.element;
              r.has(e) && (O.set(e, e), n._beforeAnimationBuild(t.player.namespaceId, t.instruction, A))
            })), i.forEach((function (t) {
              var e = t.element;
              n._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach((function (t) {
                kh(A, e, []).push(t), t.destroy()
              }))
            }));
            var L = g.filter((function (t) {
              return Xf(t, l, u)
            })), P = new Map;
            Wf(P, this.driver, m, u, "*").forEach((function (t) {
              Xf(t, l, u) && L.push(t)
            }));
            var M = new Map;
            d.forEach((function (t, e) {
              Wf(M, n.driver, new Set(t), l, "!")
            })), L.forEach((function (t) {
              var e = P.get(t), n = M.get(t);
              P.set(t, Object.assign(Object.assign({}, e), n))
            }));
            var D = [], I = [], R = {};
            o.forEach((function (t) {
              var e = t.element, o = t.player, s = t.instruction;
              if (r.has(e)) {
                if (c.has(e)) return o.onDestroy((function () {
                  return Bh(e, s.toStyles)
                })), o.disabled = !0, o.overrideTotalTime(s.totalTime), void i.push(o);
                var l = R;
                if (O.size > 1) {
                  for (var u = e, h = []; u = u.parentNode;) {
                    var f = O.get(u);
                    if (f) {
                      l = f;
                      break
                    }
                    h.push(u)
                  }
                  h.forEach((function (t) {
                    return O.set(t, l)
                  }))
                }
                var d = n._buildAnimation(o.namespaceId, s, A, a, M, P);
                if (o.setRealPlayer(d), l === R) D.push(o); else {
                  var p = n.playersByElement.get(l);
                  p && p.length && (o.parentPlayer = vh(p)), i.push(o)
                }
              } else qh(e, s.fromStyles), o.onDestroy((function () {
                return Bh(e, s.toStyles)
              })), I.push(o), c.has(e) && i.push(o)
            })), I.forEach((function (t) {
              var e = a.get(t.element);
              if (e && e.length) {
                var n = vh(e);
                t.setRealPlayer(n)
              }
            })), i.forEach((function (t) {
              t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy()
            }));
            for (var F = 0; F < g.length; F++) {
              var N = g[F], j = N.__ng_removed;
              if (Yf(N, "ng-leave"), !j || !j.hasAnimation) {
                var H = [];
                if (s.size) {
                  var U = s.get(N);
                  U && U.length && H.push.apply(H, _toConsumableArray(U));
                  for (var z = this.driver.query(N, ".ng-animating", !0), V = 0; V < z.length; V++) {
                    var B = s.get(z[V]);
                    B && B.length && H.push.apply(H, _toConsumableArray(B))
                  }
                }
                var q = H.filter((function (t) {
                  return !t.destroyed
                }));
                q.length ? Zf(this, N, q) : this.processLeaveNode(N)
              }
            }
            return g.length = 0, D.forEach((function (t) {
              n.players.push(t), t.onDone((function () {
                t.destroy();
                var e = n.players.indexOf(t);
                n.players.splice(e, 1)
              })), t.play()
            })), D
          }
        }, {
          key: "elementContainsData", value: function (t, e) {
            var n = !1, r = e.__ng_removed;
            return r && r.setForRemoval && (n = !0), this.playersByElement.has(e) && (n = !0), this.playersByQueriedElement.has(e) && (n = !0), this.statesByElement.has(e) && (n = !0), this._fetchNamespace(t).elementContainsData(e) || n
          }
        }, {
          key: "afterFlush", value: function (t) {
            this._flushFns.push(t)
          }
        }, {
          key: "afterFlushAnimationsDone", value: function (t) {
            this._whenQuietFns.push(t)
          }
        }, {
          key: "_getPreviousPlayers", value: function (t, e, n, r, i) {
            var a = [];
            if (e) {
              var o = this.playersByQueriedElement.get(t);
              o && (a = o)
            } else {
              var s = this.playersByElement.get(t);
              if (s) {
                var l = !i || "void" == i;
                s.forEach((function (t) {
                  t.queued || (l || t.triggerName == r) && a.push(t)
                }))
              }
            }
            return (n || r) && (a = a.filter((function (t) {
              return !(n && n != t.namespaceId || r && r != t.triggerName)
            }))), a
          }
        }, {
          key: "_beforeAnimationBuild", value: function (t, e, n) {
            var r, i = this, a = e.element, o = e.isRemovalTransition ? void 0 : t,
              s = e.isRemovalTransition ? void 0 : e.triggerName, l = _createForOfIteratorHelper(e.timelines);
            try {
              var u = function () {
                var t = r.value.element, l = t !== a, u = kh(n, t, []);
                i._getPreviousPlayers(t, l, o, s, e.toState).forEach((function (t) {
                  var e = t.getRealPlayer();
                  e.beforeDestroy && e.beforeDestroy(), t.destroy(), u.push(t)
                }))
              };
              for (l.s(); !(r = l.n()).done;) u()
            } catch (c) {
              l.e(c)
            } finally {
              l.f()
            }
            qh(a, e.fromStyles)
          }
        }, {
          key: "_buildAnimation", value: function (t, e, n, r, i, a) {
            var o = this, s = e.triggerName, l = e.element, u = [], c = new Set, h = new Set,
              f = e.timelines.map((function (e) {
                var f = e.element;
                c.add(f);
                var d = f.__ng_removed;
                if (d && d.removedBeforeQueried) return new fh(e.duration, e.delay);
                var p, v, g = f !== l, y = (p = (n.get(f) || Rf).map((function (t) {
                    return t.getRealPlayer()
                  })), v = [], function t(e, n) {
                    for (var r = 0; r < e.length; r++) {
                      var i = e[r];
                      i instanceof dh ? t(i.players, n) : n.push(i)
                    }
                  }(p, v), v).filter((function (t) {
                    return !!t.element && t.element === f
                  })), m = i.get(f), _ = a.get(f), k = gh(0, o._normalizer, 0, e.keyframes, m, _),
                  b = o._buildPlayer(e, k, y);
                if (e.subTimeline && r && h.add(f), g) {
                  var w = new Vf(t, s, f);
                  w.setRealPlayer(b), u.push(w)
                }
                return b
              }));
            u.forEach((function (t) {
              kh(o.playersByQueriedElement, t.element, []).push(t), t.onDone((function () {
                return function (t, e, n) {
                  var r;
                  if (t instanceof Map) {
                    if (r = t.get(e)) {
                      if (r.length) {
                        var i = r.indexOf(n);
                        r.splice(i, 1)
                      }
                      0 == r.length && t.delete(e)
                    }
                  } else if (r = t[e]) {
                    if (r.length) {
                      var a = r.indexOf(n);
                      r.splice(a, 1)
                    }
                    0 == r.length && delete t[e]
                  }
                  return r
                }(o.playersByQueriedElement, t.element, t)
              }))
            })), c.forEach((function (t) {
              return Qf(t, "ng-animating")
            }));
            var d = vh(f);
            return d.onDestroy((function () {
              c.forEach((function (t) {
                return Yf(t, "ng-animating")
              })), Bh(l, e.toStyles)
            })), h.forEach((function (t) {
              kh(r, t, []).push(d)
            })), d
          }
        }, {
          key: "_buildPlayer", value: function (t, e, n) {
            return e.length > 0 ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n) : new fh(t.duration, t.delay)
          }
        }, {
          key: "queuedPlayers", get: function () {
            var t = [];
            return this._namespaceList.forEach((function (e) {
              e.players.forEach((function (e) {
                e.queued && t.push(e)
              }))
            })), t
          }
        }]), t
      }(), Vf = function () {
        function t(e, n, r) {
          _classCallCheck(this, t), this.namespaceId = e, this.triggerName = n, this.element = r, this._player = new fh, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
        }

        return _createClass(t, [{
          key: "setRealPlayer", value: function (t) {
            var e = this;
            this._containsRealPlayer || (this._player = t, Object.keys(this._queuedCallbacks).forEach((function (n) {
              e._queuedCallbacks[n].forEach((function (e) {
                return yh(t, n, void 0, e)
              }))
            })), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(t.totalTime), this.queued = !1)
          }
        }, {
          key: "getRealPlayer", value: function () {
            return this._player
          }
        }, {
          key: "overrideTotalTime", value: function (t) {
            this.totalTime = t
          }
        }, {
          key: "syncPlayerEvents", value: function (t) {
            var e = this, n = this._player;
            n.triggerCallback && t.onStart((function () {
              return n.triggerCallback("start")
            })), t.onDone((function () {
              return e.finish()
            })), t.onDestroy((function () {
              return e.destroy()
            }))
          }
        }, {
          key: "_queueEvent", value: function (t, e) {
            kh(this._queuedCallbacks, t, []).push(e)
          }
        }, {
          key: "onDone", value: function (t) {
            this.queued && this._queueEvent("done", t), this._player.onDone(t)
          }
        }, {
          key: "onStart", value: function (t) {
            this.queued && this._queueEvent("start", t), this._player.onStart(t)
          }
        }, {
          key: "onDestroy", value: function (t) {
            this.queued && this._queueEvent("destroy", t), this._player.onDestroy(t)
          }
        }, {
          key: "init", value: function () {
            this._player.init()
          }
        }, {
          key: "hasStarted", value: function () {
            return !this.queued && this._player.hasStarted()
          }
        }, {
          key: "play", value: function () {
            !this.queued && this._player.play()
          }
        }, {
          key: "pause", value: function () {
            !this.queued && this._player.pause()
          }
        }, {
          key: "restart", value: function () {
            !this.queued && this._player.restart()
          }
        }, {
          key: "finish", value: function () {
            this._player.finish()
          }
        }, {
          key: "destroy", value: function () {
            this.destroyed = !0, this._player.destroy()
          }
        }, {
          key: "reset", value: function () {
            !this.queued && this._player.reset()
          }
        }, {
          key: "setPosition", value: function (t) {
            this.queued || this._player.setPosition(t)
          }
        }, {
          key: "getPosition", value: function () {
            return this.queued ? 0 : this._player.getPosition()
          }
        }, {
          key: "triggerCallback", value: function (t) {
            var e = this._player;
            e.triggerCallback && e.triggerCallback(t)
          }
        }]), t
      }();

    function Bf(t) {
      return t && 1 === t.nodeType
    }

    function qf(t, e) {
      var n = t.style.display;
      return t.style.display = null != e ? e : "none", n
    }

    function Wf(t, e, n, r, i) {
      var a = [];
      n.forEach((function (t) {
        return a.push(qf(t))
      }));
      var o = [];
      r.forEach((function (n, r) {
        var a = {};
        n.forEach((function (t) {
          var n = a[t] = e.computeStyle(r, t, i);
          n && 0 != n.length || (r.__ng_removed = Nf, o.push(r))
        })), t.set(r, a)
      }));
      var s = 0;
      return n.forEach((function (t) {
        return qf(t, a[s++])
      })), o
    }

    function Gf(t, e) {
      var n = new Map;
      if (t.forEach((function (t) {
        return n.set(t, [])
      })), 0 == e.length) return n;
      var r = new Set(e), i = new Map;
      return e.forEach((function (t) {
        var e = function t(e) {
          if (!e) return 1;
          var a = i.get(e);
          if (a) return a;
          var o = e.parentNode;
          return a = n.has(o) ? o : r.has(o) ? 1 : t(o), i.set(e, a), a
        }(t);
        1 !== e && n.get(e).push(t)
      })), n
    }

    function Qf(t, e) {
      if (t.classList) t.classList.add(e); else {
        var n = t.$$classes;
        n || (n = t.$$classes = {}), n[e] = !0
      }
    }

    function Yf(t, e) {
      if (t.classList) t.classList.remove(e); else {
        var n = t.$$classes;
        n && delete n[e]
      }
    }

    function Zf(t, e, n) {
      vh(n).onDone((function () {
        return t.processLeaveNode(e)
      }))
    }

    function Xf(t, e, n) {
      var r = n.get(t);
      if (!r) return !1;
      var i = e.get(t);
      return i ? r.forEach((function (t) {
        return i.add(t)
      })) : e.set(t, r), n.delete(t), !0
    }

    var Kf = function () {
      function t(e, n, r) {
        var i = this;
        _classCallCheck(this, t), this.bodyNode = e, this._driver = n, this._triggerCache = {}, this.onRemovalComplete = function (t, e) {
        }, this._transitionEngine = new zf(e, n, r), this._timelineEngine = new If(e, n, r), this._transitionEngine.onRemovalComplete = function (t, e) {
          return i.onRemovalComplete(t, e)
        }
      }

      return _createClass(t, [{
        key: "registerTrigger", value: function (t, e, n, r, i) {
          var a = t + "-" + r, o = this._triggerCache[a];
          if (!o) {
            var s = [], l = sf(this._driver, i, s);
            if (s.length) throw new Error('The animation trigger "'.concat(r, '" has failed to build due to the following errors:\n - ').concat(s.join("\n - ")));
            o = function (t, e) {
              return new Pf(t, e)
            }(r, l), this._triggerCache[a] = o
          }
          this._transitionEngine.registerTrigger(e, r, o)
        }
      }, {
        key: "register", value: function (t, e) {
          this._transitionEngine.register(t, e)
        }
      }, {
        key: "destroy", value: function (t, e) {
          this._transitionEngine.destroy(t, e)
        }
      }, {
        key: "onInsert", value: function (t, e, n, r) {
          this._transitionEngine.insertNode(t, e, n, r)
        }
      }, {
        key: "onRemove", value: function (t, e, n, r) {
          this._transitionEngine.removeNode(t, e, r || !1, n)
        }
      }, {
        key: "disableAnimations", value: function (t, e) {
          this._transitionEngine.markElementAsDisabled(t, e)
        }
      }, {
        key: "process", value: function (t, e, n, r) {
          if ("@" == n.charAt(0)) {
            var i = _slicedToArray(bh(n), 2), a = i[0], o = i[1];
            this._timelineEngine.command(a, e, o, r)
          } else this._transitionEngine.trigger(t, e, n, r)
        }
      }, {
        key: "listen", value: function (t, e, n, r, i) {
          if ("@" == n.charAt(0)) {
            var a = _slicedToArray(bh(n), 2), o = a[0], s = a[1];
            return this._timelineEngine.listen(o, e, s, i)
          }
          return this._transitionEngine.listen(t, e, n, r, i)
        }
      }, {
        key: "flush", value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
          this._transitionEngine.flush(t)
        }
      }, {
        key: "whenRenderingDone", value: function () {
          return this._transitionEngine.whenRenderingDone()
        }
      }, {
        key: "players", get: function () {
          return this._transitionEngine.players.concat(this._timelineEngine.players)
        }
      }]), t
    }();

    function $f(t, e) {
      var n = null, r = null;
      return Array.isArray(e) && e.length ? (n = td(e[0]), e.length > 1 && (r = td(e[e.length - 1]))) : e && (n = td(e)), n || r ? new Jf(t, n, r) : null
    }

    var Jf = function () {
      var t = function () {
        function t(e, n, r) {
          _classCallCheck(this, t), this._element = e, this._startStyles = n, this._endStyles = r, this._state = 0;
          var i = t.initialStylesByElement.get(e);
          i || t.initialStylesByElement.set(e, i = {}), this._initialStyles = i
        }

        return _createClass(t, [{
          key: "start", value: function () {
            this._state < 1 && (this._startStyles && Bh(this._element, this._startStyles, this._initialStyles), this._state = 1)
          }
        }, {
          key: "finish", value: function () {
            this.start(), this._state < 2 && (Bh(this._element, this._initialStyles), this._endStyles && (Bh(this._element, this._endStyles), this._endStyles = null), this._state = 1)
          }
        }, {
          key: "destroy", value: function () {
            this.finish(), this._state < 3 && (t.initialStylesByElement.delete(this._element), this._startStyles && (qh(this._element, this._startStyles), this._endStyles = null), this._endStyles && (qh(this._element, this._endStyles), this._endStyles = null), Bh(this._element, this._initialStyles), this._state = 3)
          }
        }]), t
      }();
      return t.initialStylesByElement = new WeakMap, t
    }();

    function td(t) {
      for (var e = null, n = Object.keys(t), r = 0; r < n.length; r++) {
        var i = n[r];
        ed(i) && ((e = e || {})[i] = t[i])
      }
      return e
    }

    function ed(t) {
      return "display" === t || "position" === t
    }

    var nd = function () {
      function t(e, n, r, i, a, o, s) {
        var l = this;
        _classCallCheck(this, t), this._element = e, this._name = n, this._duration = r, this._delay = i, this._easing = a, this._fillMode = o, this._onDoneFn = s, this._finished = !1, this._destroyed = !1, this._startTime = 0, this._position = 0, this._eventFn = function (t) {
          return l._handleCallback(t)
        }
      }

      return _createClass(t, [{
        key: "apply", value: function () {
          var t, e, n;
          t = this._element, e = "".concat(this._duration, "ms ").concat(this._easing, " ").concat(this._delay, "ms 1 normal ").concat(this._fillMode, " ").concat(this._name), (n = ld(t, "").trim()).length && (function (t, e) {
            for (var n = 0; n < t.length; n++) t.charAt(n)
          }(n), e = "".concat(n, ", ").concat(e)), sd(t, "", e), od(this._element, this._eventFn, !1), this._startTime = Date.now()
        }
      }, {
        key: "pause", value: function () {
          rd(this._element, this._name, "paused")
        }
      }, {
        key: "resume", value: function () {
          rd(this._element, this._name, "running")
        }
      }, {
        key: "setPosition", value: function (t) {
          var e = id(this._element, this._name);
          this._position = t * this._duration, sd(this._element, "Delay", "-".concat(this._position, "ms"), e)
        }
      }, {
        key: "getPosition", value: function () {
          return this._position
        }
      }, {
        key: "_handleCallback", value: function (t) {
          var e = t._ngTestManualTimestamp || Date.now(), n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
          t.animationName == this._name && Math.max(e - this._startTime, 0) >= this._delay && n >= this._duration && this.finish()
        }
      }, {
        key: "finish", value: function () {
          this._finished || (this._finished = !0, this._onDoneFn(), od(this._element, this._eventFn, !0))
        }
      }, {
        key: "destroy", value: function () {
          var t, e, n, r;
          this._destroyed || (this._destroyed = !0, this.finish(), t = this._element, e = this._name, n = ld(t, "").split(","), (r = ad(n, e)) >= 0 && (n.splice(r, 1), sd(t, "", n.join(","))))
        }
      }]), t
    }();

    function rd(t, e, n) {
      sd(t, "PlayState", n, id(t, e))
    }

    function id(t, e) {
      var n = ld(t, "");
      return n.indexOf(",") > 0 ? ad(n.split(","), e) : ad([n], e)
    }

    function ad(t, e) {
      for (var n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
      return -1
    }

    function od(t, e, n) {
      n ? t.removeEventListener("animationend", e) : t.addEventListener("animationend", e)
    }

    function sd(t, e, n, r) {
      var i = "animation" + e;
      if (null != r) {
        var a = t.style[i];
        if (a.length) {
          var o = a.split(",");
          o[r] = n, n = o.join(",")
        }
      }
      t.style[i] = n
    }

    function ld(t, e) {
      return t.style["animation" + e]
    }

    var ud = function () {
      function t(e, n, r, i, a, o, s, l) {
        _classCallCheck(this, t), this.element = e, this.keyframes = n, this.animationName = r, this._duration = i, this._delay = a, this._finalStyles = s, this._specialStyles = l, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this.currentSnapshot = {}, this._state = 0, this.easing = o || "linear", this.totalTime = i + a, this._buildStyler()
      }

      return _createClass(t, [{
        key: "onStart", value: function (t) {
          this._onStartFns.push(t)
        }
      }, {
        key: "onDone", value: function (t) {
          this._onDoneFns.push(t)
        }
      }, {
        key: "onDestroy", value: function (t) {
          this._onDestroyFns.push(t)
        }
      }, {
        key: "destroy", value: function () {
          this.init(), this._state >= 4 || (this._state = 4, this._styler.destroy(), this._flushStartFns(), this._flushDoneFns(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach((function (t) {
            return t()
          })), this._onDestroyFns = [])
        }
      }, {
        key: "_flushDoneFns", value: function () {
          this._onDoneFns.forEach((function (t) {
            return t()
          })), this._onDoneFns = []
        }
      }, {
        key: "_flushStartFns", value: function () {
          this._onStartFns.forEach((function (t) {
            return t()
          })), this._onStartFns = []
        }
      }, {
        key: "finish", value: function () {
          this.init(), this._state >= 3 || (this._state = 3, this._styler.finish(), this._flushStartFns(), this._specialStyles && this._specialStyles.finish(), this._flushDoneFns())
        }
      }, {
        key: "setPosition", value: function (t) {
          this._styler.setPosition(t)
        }
      }, {
        key: "getPosition", value: function () {
          return this._styler.getPosition()
        }
      }, {
        key: "hasStarted", value: function () {
          return this._state >= 2
        }
      }, {
        key: "init", value: function () {
          this._state >= 1 || (this._state = 1, this._styler.apply(), this._delay && this._styler.pause())
        }
      }, {
        key: "play", value: function () {
          this.init(), this.hasStarted() || (this._flushStartFns(), this._state = 2, this._specialStyles && this._specialStyles.start()), this._styler.resume()
        }
      }, {
        key: "pause", value: function () {
          this.init(), this._styler.pause()
        }
      }, {
        key: "restart", value: function () {
          this.reset(), this.play()
        }
      }, {
        key: "reset", value: function () {
          this._styler.destroy(), this._buildStyler(), this._styler.apply()
        }
      }, {
        key: "_buildStyler", value: function () {
          var t = this;
          this._styler = new nd(this.element, this.animationName, this._duration, this._delay, this.easing, "forwards", (function () {
            return t.finish()
          }))
        }
      }, {
        key: "triggerCallback", value: function (t) {
          var e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((function (t) {
            return t()
          })), e.length = 0
        }
      }, {
        key: "beforeDestroy", value: function () {
          var t = this;
          this.init();
          var e = {};
          if (this.hasStarted()) {
            var n = this._state >= 3;
            Object.keys(this._finalStyles).forEach((function (r) {
              "offset" != r && (e[r] = n ? t._finalStyles[r] : ef(t.element, r))
            }))
          }
          this.currentSnapshot = e
        }
      }]), t
    }(), cd = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this)).element = t, i._startingStyles = {}, i.__initialized = !1, i._styles = Mh(r), i
      }

      return _createClass(n, [{
        key: "init", value: function () {
          var t = this;
          !this.__initialized && this._startingStyles && (this.__initialized = !0, Object.keys(this._styles).forEach((function (e) {
            t._startingStyles[e] = t.element.style[e]
          })), _get(_getPrototypeOf(n.prototype), "init", this).call(this))
        }
      }, {
        key: "play", value: function () {
          var t = this;
          this._startingStyles && (this.init(), Object.keys(this._styles).forEach((function (e) {
            return t.element.style.setProperty(e, t._styles[e])
          })), _get(_getPrototypeOf(n.prototype), "play", this).call(this))
        }
      }, {
        key: "destroy", value: function () {
          var t = this;
          this._startingStyles && (Object.keys(this._startingStyles).forEach((function (e) {
            var n = t._startingStyles[e];
            n ? t.element.style.setProperty(e, n) : t.element.style.removeProperty(e)
          })), this._startingStyles = null, _get(_getPrototypeOf(n.prototype), "destroy", this).call(this))
        }
      }]), n
    }(fh), hd = function () {
      function t() {
        _classCallCheck(this, t), this._count = 0, this._head = document.querySelector("head"), this._warningIssued = !1
      }

      return _createClass(t, [{
        key: "validateStyleProperty", value: function (t) {
          return Ah(t)
        }
      }, {
        key: "matchesElement", value: function (t, e) {
          return Oh(t, e)
        }
      }, {
        key: "containsElement", value: function (t, e) {
          return Lh(t, e)
        }
      }, {
        key: "query", value: function (t, e, n) {
          return Ph(t, e, n)
        }
      }, {
        key: "computeStyle", value: function (t, e, n) {
          return window.getComputedStyle(t)[e]
        }
      }, {
        key: "buildKeyframeElement", value: function (t, e, n) {
          n = n.map((function (t) {
            return Mh(t)
          }));
          var r = "@keyframes ".concat(e, " {\n"), i = "";
          n.forEach((function (t) {
            i = " ";
            var e = parseFloat(t.offset);
            r += "".concat(i).concat(100 * e, "% {\n"), i += " ", Object.keys(t).forEach((function (e) {
              var n = t[e];
              switch (e) {
                case"offset":
                  return;
                case"easing":
                  return void (n && (r += "".concat(i, "animation-timing-function: ").concat(n, ";\n")));
                default:
                  return void (r += "".concat(i).concat(e, ": ").concat(n, ";\n"))
              }
            })), r += i + "}\n"
          })), r += "}\n";
          var a = document.createElement("style");
          return a.innerHTML = r, a
        }
      }, {
        key: "animate", value: function (t, e, n, r, i) {
          var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
            o = arguments.length > 6 ? arguments[6] : void 0;
          o && this._notifyFaultyScrubber();
          var s = a.filter((function (t) {
            return t instanceof ud
          })), l = {};
          $h(n, r) && s.forEach((function (t) {
            var e = t.currentSnapshot;
            Object.keys(e).forEach((function (t) {
              return l[t] = e[t]
            }))
          }));
          var u = function (t) {
            var e = {};
            return t && (Array.isArray(t) ? t : [t]).forEach((function (t) {
              Object.keys(t).forEach((function (n) {
                "offset" != n && "easing" != n && (e[n] = t[n])
              }))
            })), e
          }(e = Jh(t, e, l));
          if (0 == n) return new cd(t, u);
          var c = "gen_css_kf_" + this._count++, h = this.buildKeyframeElement(t, c, e);
          document.querySelector("head").appendChild(h);
          var f = $f(t, e), d = new ud(t, e, c, n, r, i, u, f);
          return d.onDestroy((function () {
            var t;
            (t = h).parentNode.removeChild(t)
          })), d
        }
      }, {
        key: "_notifyFaultyScrubber", value: function () {
          this._warningIssued || (console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n", "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."), this._warningIssued = !0)
        }
      }]), t
    }(), fd = function () {
      function t(e, n, r, i) {
        _classCallCheck(this, t), this.element = e, this.keyframes = n, this.options = r, this._specialStyles = i, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = r.duration, this._delay = r.delay || 0, this.time = this._duration + this._delay
      }

      return _createClass(t, [{
        key: "_onFinish", value: function () {
          this._finished || (this._finished = !0, this._onDoneFns.forEach((function (t) {
            return t()
          })), this._onDoneFns = [])
        }
      }, {
        key: "init", value: function () {
          this._buildPlayer(), this._preparePlayerBeforeStart()
        }
      }, {
        key: "_buildPlayer", value: function () {
          var t = this;
          if (!this._initialized) {
            this._initialized = !0;
            var e = this.keyframes;
            this.domPlayer = this._triggerWebAnimation(this.element, e, this.options), this._finalKeyframe = e.length ? e[e.length - 1] : {}, this.domPlayer.addEventListener("finish", (function () {
              return t._onFinish()
            }))
          }
        }
      }, {
        key: "_preparePlayerBeforeStart", value: function () {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
        }
      }, {
        key: "_triggerWebAnimation", value: function (t, e, n) {
          return t.animate(e, n)
        }
      }, {
        key: "onStart", value: function (t) {
          this._onStartFns.push(t)
        }
      }, {
        key: "onDone", value: function (t) {
          this._onDoneFns.push(t)
        }
      }, {
        key: "onDestroy", value: function (t) {
          this._onDestroyFns.push(t)
        }
      }, {
        key: "play", value: function () {
          this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach((function (t) {
            return t()
          })), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play()
        }
      }, {
        key: "pause", value: function () {
          this.init(), this.domPlayer.pause()
        }
      }, {
        key: "finish", value: function () {
          this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish()
        }
      }, {
        key: "reset", value: function () {
          this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1
        }
      }, {
        key: "_resetDomPlayerState", value: function () {
          this.domPlayer && this.domPlayer.cancel()
        }
      }, {
        key: "restart", value: function () {
          this.reset(), this.play()
        }
      }, {
        key: "hasStarted", value: function () {
          return this._started
        }
      }, {
        key: "destroy", value: function () {
          this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach((function (t) {
            return t()
          })), this._onDestroyFns = [])
        }
      }, {
        key: "setPosition", value: function (t) {
          this.domPlayer.currentTime = t * this.time
        }
      }, {
        key: "getPosition", value: function () {
          return this.domPlayer.currentTime / this.time
        }
      }, {
        key: "beforeDestroy", value: function () {
          var t = this, e = {};
          this.hasStarted() && Object.keys(this._finalKeyframe).forEach((function (n) {
            "offset" != n && (e[n] = t._finished ? t._finalKeyframe[n] : ef(t.element, n))
          })), this.currentSnapshot = e
        }
      }, {
        key: "triggerCallback", value: function (t) {
          var e = "start" == t ? this._onStartFns : this._onDoneFns;
          e.forEach((function (t) {
            return t()
          })), e.length = 0
        }
      }, {
        key: "totalTime", get: function () {
          return this._delay + this._duration
        }
      }]), t
    }(), dd = function () {
      function t() {
        _classCallCheck(this, t), this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(pd().toString()), this._cssKeyframesDriver = new hd
      }

      return _createClass(t, [{
        key: "validateStyleProperty", value: function (t) {
          return Ah(t)
        }
      }, {
        key: "matchesElement", value: function (t, e) {
          return Oh(t, e)
        }
      }, {
        key: "containsElement", value: function (t, e) {
          return Lh(t, e)
        }
      }, {
        key: "query", value: function (t, e, n) {
          return Ph(t, e, n)
        }
      }, {
        key: "computeStyle", value: function (t, e, n) {
          return window.getComputedStyle(t)[e]
        }
      }, {
        key: "overrideWebAnimationsSupport", value: function (t) {
          this._isNativeImpl = t
        }
      }, {
        key: "animate", value: function (t, e, n, r, i) {
          var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
            o = arguments.length > 6 ? arguments[6] : void 0;
          if (!o && !this._isNativeImpl) return this._cssKeyframesDriver.animate(t, e, n, r, i, a);
          var s = {duration: n, delay: r, fill: 0 == r ? "both" : "forwards"};
          i && (s.easing = i);
          var l = {}, u = a.filter((function (t) {
            return t instanceof fd
          }));
          $h(n, r) && u.forEach((function (t) {
            var e = t.currentSnapshot;
            Object.keys(e).forEach((function (t) {
              return l[t] = e[t]
            }))
          }));
          var c = $f(t, e = Jh(t, e = e.map((function (t) {
            return Uh(t, !1)
          })), l));
          return new fd(t, e, s, c)
        }
      }]), t
    }();

    function pd() {
      return "undefined" != typeof window && void 0 !== window.document && Element.prototype.animate || {}
    }

    var vd, gd = ((vd = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this))._nextAnimationId = 0, i._renderer = t.createRenderer(r.body, {
          id: "0",
          encapsulation: ce.None,
          styles: [],
          data: {animation: []}
        }), i
      }

      return _createClass(n, [{
        key: "build", value: function (t) {
          var e = this._nextAnimationId.toString();
          this._nextAnimationId++;
          var n = Array.isArray(t) ? lh(t) : t;
          return _d(this._renderer, null, e, "register", [n]), new yd(e, this._renderer)
        }
      }]), n
    }(ah)).\u0275fac = function (t) {
      return new (t || vd)(Xt(Cs), Xt(Mu))
    }, vd.\u0275prov = ft({token: vd, factory: vd.\u0275fac}), vd), yd = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this))._id = t, i._renderer = r, i
      }

      return _createClass(n, [{
        key: "create", value: function (t, e) {
          return new md(this._id, t, e || {}, this._renderer)
        }
      }]), n
    }(function () {
      return function t() {
        _classCallCheck(this, t)
      }
    }()), md = function () {
      function t(e, n, r, i) {
        _classCallCheck(this, t), this.id = e, this.element = n, this._renderer = i, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", r)
      }

      return _createClass(t, [{
        key: "_listen", value: function (t, e) {
          return this._renderer.listen(this.element, "@@".concat(this.id, ":").concat(t), e)
        }
      }, {
        key: "_command", value: function (t) {
          for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
          return _d(this._renderer, this.element, this.id, t, n)
        }
      }, {
        key: "onDone", value: function (t) {
          this._listen("done", t)
        }
      }, {
        key: "onStart", value: function (t) {
          this._listen("start", t)
        }
      }, {
        key: "onDestroy", value: function (t) {
          this._listen("destroy", t)
        }
      }, {
        key: "init", value: function () {
          this._command("init")
        }
      }, {
        key: "hasStarted", value: function () {
          return this._started
        }
      }, {
        key: "play", value: function () {
          this._command("play"), this._started = !0
        }
      }, {
        key: "pause", value: function () {
          this._command("pause")
        }
      }, {
        key: "restart", value: function () {
          this._command("restart")
        }
      }, {
        key: "finish", value: function () {
          this._command("finish")
        }
      }, {
        key: "destroy", value: function () {
          this._command("destroy")
        }
      }, {
        key: "reset", value: function () {
          this._command("reset")
        }
      }, {
        key: "setPosition", value: function (t) {
          this._command("setPosition", t)
        }
      }, {
        key: "getPosition", value: function () {
          return 0
        }
      }]), t
    }();

    function _d(t, e, n, r, i) {
      return t.setProperty(e, "@@".concat(n, ":").concat(r), i)
    }

    var kd, bd, wd, Cd = ((kd = function () {
      function t(e, n, r) {
        _classCallCheck(this, t), this.delegate = e, this.engine = n, this._zone = r, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), n.onRemovalComplete = function (t, e) {
          e && e.parentNode(t) && e.removeChild(t.parentNode, t)
        }
      }

      return _createClass(t, [{
        key: "createRenderer", value: function (t, e) {
          var n = this, r = this.delegate.createRenderer(t, e);
          if (!(t && e && e.data && e.data.animation)) {
            var i = this._rendererCache.get(r);
            return i || (i = new xd("", r, this.engine), this._rendererCache.set(r, i)), i
          }
          var a = e.id, o = e.id + "-" + this._currentId;
          return this._currentId++, this.engine.register(o, t), e.data.animation.forEach((function e(r) {
            Array.isArray(r) ? r.forEach(e) : n.engine.registerTrigger(a, o, t, r.name, r)
          })), new Sd(this, o, r, this.engine)
        }
      }, {
        key: "begin", value: function () {
          this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
        }
      }, {
        key: "_scheduleCountTask", value: function () {
          var t = this;
          this.promise.then((function () {
            t._microtaskId++
          }))
        }
      }, {
        key: "scheduleListenerCallback", value: function (t, e, n) {
          var r = this;
          t >= 0 && t < this._microtaskId ? this._zone.run((function () {
            return e(n)
          })) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then((function () {
            r._zone.run((function () {
              r._animationCallbacksBuffer.forEach((function (t) {
                var e = _slicedToArray(t, 2);
                (0, e[0])(e[1])
              })), r._animationCallbacksBuffer = []
            }))
          })), this._animationCallbacksBuffer.push([e, n]))
        }
      }, {
        key: "end", value: function () {
          var t = this;
          this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular((function () {
            t._scheduleCountTask(), t.engine.flush(t._microtaskId)
          })), this.delegate.end && this.delegate.end()
        }
      }, {
        key: "whenRenderingDone", value: function () {
          return this.engine.whenRenderingDone()
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || kd)(Xt(Cs), Xt(Kf), Xt(Jl))
    }, kd.\u0275prov = ft({token: kd, factory: kd.\u0275fac}), kd), xd = function () {
      function t(e, n, r) {
        _classCallCheck(this, t), this.namespaceId = e, this.delegate = n, this.engine = r, this.destroyNode = this.delegate.destroyNode ? function (t) {
          return n.destroyNode(t)
        } : null
      }

      return _createClass(t, [{
        key: "destroy", value: function () {
          this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy()
        }
      }, {
        key: "createElement", value: function (t, e) {
          return this.delegate.createElement(t, e)
        }
      }, {
        key: "createComment", value: function (t) {
          return this.delegate.createComment(t)
        }
      }, {
        key: "createText", value: function (t) {
          return this.delegate.createText(t)
        }
      }, {
        key: "appendChild", value: function (t, e) {
          this.delegate.appendChild(t, e), this.engine.onInsert(this.namespaceId, e, t, !1)
        }
      }, {
        key: "insertBefore", value: function (t, e, n) {
          this.delegate.insertBefore(t, e, n), this.engine.onInsert(this.namespaceId, e, t, !0)
        }
      }, {
        key: "removeChild", value: function (t, e, n) {
          this.engine.onRemove(this.namespaceId, e, this.delegate, n)
        }
      }, {
        key: "selectRootElement", value: function (t, e) {
          return this.delegate.selectRootElement(t, e)
        }
      }, {
        key: "parentNode", value: function (t) {
          return this.delegate.parentNode(t)
        }
      }, {
        key: "nextSibling", value: function (t) {
          return this.delegate.nextSibling(t)
        }
      }, {
        key: "setAttribute", value: function (t, e, n, r) {
          this.delegate.setAttribute(t, e, n, r)
        }
      }, {
        key: "removeAttribute", value: function (t, e, n) {
          this.delegate.removeAttribute(t, e, n)
        }
      }, {
        key: "addClass", value: function (t, e) {
          this.delegate.addClass(t, e)
        }
      }, {
        key: "removeClass", value: function (t, e) {
          this.delegate.removeClass(t, e)
        }
      }, {
        key: "setStyle", value: function (t, e, n, r) {
          this.delegate.setStyle(t, e, n, r)
        }
      }, {
        key: "removeStyle", value: function (t, e, n) {
          this.delegate.removeStyle(t, e, n)
        }
      }, {
        key: "setProperty", value: function (t, e, n) {
          "@" == e.charAt(0) && "@.disabled" == e ? this.disableAnimations(t, !!n) : this.delegate.setProperty(t, e, n)
        }
      }, {
        key: "setValue", value: function (t, e) {
          this.delegate.setValue(t, e)
        }
      }, {
        key: "listen", value: function (t, e, n) {
          return this.delegate.listen(t, e, n)
        }
      }, {
        key: "disableAnimations", value: function (t, e) {
          this.engine.disableAnimations(t, e)
        }
      }, {
        key: "data", get: function () {
          return this.delegate.data
        }
      }]), t
    }(), Sd = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i, a) {
        var o;
        return _classCallCheck(this, n), (o = e.call(this, r, i, a)).factory = t, o.namespaceId = r, o
      }

      return _createClass(n, [{
        key: "setProperty", value: function (t, e, n) {
          "@" == e.charAt(0) ? "." == e.charAt(1) && "@.disabled" == e ? this.disableAnimations(t, n = void 0 === n || !!n) : this.engine.process(this.namespaceId, t, e.substr(1), n) : this.delegate.setProperty(t, e, n)
        }
      }, {
        key: "listen", value: function (t, e, n) {
          var r, i, a = this;
          if ("@" == e.charAt(0)) {
            var o, s = function (t) {
              switch (t) {
                case"body":
                  return document.body;
                case"document":
                  return document;
                case"window":
                  return window;
                default:
                  return t
              }
            }(t), l = e.substr(1), u = "";
            return "@" != l.charAt(0) && (i = (r = l).indexOf("."), l = (o = _slicedToArray([r.substring(0, i), r.substr(i + 1)], 2))[0], u = o[1]), this.engine.listen(this.namespaceId, s, l, u, (function (t) {
              a.factory.scheduleListenerCallback(t._data || -1, n, t)
            }))
          }
          return this.delegate.listen(t, e, n)
        }
      }]), n
    }(xd), Td = ((bd = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i) {
        return _classCallCheck(this, n), e.call(this, t.body, r, i)
      }

      return n
    }(Kf)).\u0275fac = function (t) {
      return new (t || bd)(Xt(Mu), Xt(Rh), Xt(xf))
    }, bd.\u0275prov = ft({token: bd, factory: bd.\u0275fac}), bd), Ed = [{
      provide: Rh, useFactory: function () {
        return "function" == typeof pd() ? new dd : new hd
      }
    }, {provide: new zt("AnimationModuleType"), useValue: "BrowserAnimations"}, {
      provide: ah,
      useClass: gd
    }, {
      provide: xf, useFactory: function () {
        return new Sf
      }
    }, {provide: Kf, useClass: Td}, {
      provide: Cs, useFactory: function (t, e, n) {
        return new Cd(t, e, n)
      }, deps: [qc, Kf, Jl]
    }], Ad = ((wd = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: wd}), wd.\u0275inj = dt({
      factory: function (t) {
        return new (t || wd)
      }, providers: Ed, imports: [ih]
    }), wd);

    function Od() {
      throw Error("Host already has a portal attached")
    }

    var Ld = function () {
      function t() {
        _classCallCheck(this, t)
      }

      return _createClass(t, [{
        key: "attach", value: function (t) {
          return null == t && function () {
            throw Error("Attempting to attach a portal to a null PortalOutlet")
          }(), t.hasAttached() && Od(), this._attachedHost = t, t.attach(this)
        }
      }, {
        key: "detach", value: function () {
          var t = this._attachedHost;
          null == t ? function () {
            throw Error("Attempting to detach a portal that is not attached to a host")
          }() : (this._attachedHost = null, t.detach())
        }
      }, {
        key: "setAttachedHost", value: function (t) {
          this._attachedHost = t
        }
      }, {
        key: "isAttached", get: function () {
          return null != this._attachedHost
        }
      }]), t
    }(), Pd = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i, a) {
        var o;
        return _classCallCheck(this, n), (o = e.call(this)).component = t, o.viewContainerRef = r, o.injector = i, o.componentFactoryResolver = a, o
      }

      return n
    }(Ld), Md = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i) {
        var a;
        return _classCallCheck(this, n), (a = e.call(this)).templateRef = t, a.viewContainerRef = r, a.context = i, a
      }

      return _createClass(n, [{
        key: "attach", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.context;
          return this.context = e, _get(_getPrototypeOf(n.prototype), "attach", this).call(this, t)
        }
      }, {
        key: "detach", value: function () {
          return this.context = void 0, _get(_getPrototypeOf(n.prototype), "detach", this).call(this)
        }
      }, {
        key: "origin", get: function () {
          return this.templateRef.elementRef
        }
      }]), n
    }(Ld), Dd = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t) {
        var r;
        return _classCallCheck(this, n), (r = e.call(this)).element = t instanceof bs ? t.nativeElement : t, r
      }

      return n
    }(Ld), Id = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        return _classCallCheck(this, n), e.apply(this, arguments)
      }

      return n
    }(function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i, a, o) {
        var s;
        return _classCallCheck(this, n), (s = e.call(this)).outletElement = t, s._componentFactoryResolver = r, s._appRef = i, s._defaultInjector = a, s.attachDomPortal = function (t) {
          if (!s._document) throw Error("Cannot attach DOM portal without _document constructor parameter");
          var e = t.element;
          if (!e.parentNode) throw Error("DOM portal content must be attached to a parent node.");
          var r = s._document.createComment("dom-portal");
          e.parentNode.insertBefore(r, e), s.outletElement.appendChild(e), _get(_getPrototypeOf(n.prototype), "setDisposeFn", _assertThisInitialized(s)).call(_assertThisInitialized(s), (function () {
            r.parentNode && r.parentNode.replaceChild(e, r)
          }))
        }, s._document = o, s
      }

      return _createClass(n, [{
        key: "attachComponentPortal", value: function (t) {
          var e, n = this,
            r = (t.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(t.component);
          return t.viewContainerRef ? (e = t.viewContainerRef.createComponent(r, t.viewContainerRef.length, t.injector || t.viewContainerRef.injector), this.setDisposeFn((function () {
            return e.destroy()
          }))) : (e = r.create(t.injector || this._defaultInjector), this._appRef.attachView(e.hostView), this.setDisposeFn((function () {
            n._appRef.detachView(e.hostView), e.destroy()
          }))), this.outletElement.appendChild(this._getComponentRootNode(e)), e
        }
      }, {
        key: "attachTemplatePortal", value: function (t) {
          var e = this, n = t.viewContainerRef, r = n.createEmbeddedView(t.templateRef, t.context);
          return r.detectChanges(), r.rootNodes.forEach((function (t) {
            return e.outletElement.appendChild(t)
          })), this.setDisposeFn((function () {
            var t = n.indexOf(r);
            -1 !== t && n.remove(t)
          })), r
        }
      }, {
        key: "dispose", value: function () {
          _get(_getPrototypeOf(n.prototype), "dispose", this).call(this), null != this.outletElement.parentNode && this.outletElement.parentNode.removeChild(this.outletElement)
        }
      }, {
        key: "_getComponentRootNode", value: function (t) {
          return t.hostView.rootNodes[0]
        }
      }]), n
    }(function () {
      function t() {
        _classCallCheck(this, t), this._isDisposed = !1, this.attachDomPortal = null
      }

      return _createClass(t, [{
        key: "hasAttached", value: function () {
          return !!this._attachedPortal
        }
      }, {
        key: "attach", value: function (t) {
          return t || function () {
            throw Error("Must provide a portal to attach")
          }(), this.hasAttached() && Od(), this._isDisposed && function () {
            throw Error("This PortalOutlet has already been disposed")
          }(), t instanceof Pd ? (this._attachedPortal = t, this.attachComponentPortal(t)) : t instanceof Md ? (this._attachedPortal = t, this.attachTemplatePortal(t)) : this.attachDomPortal && t instanceof Dd ? (this._attachedPortal = t, this.attachDomPortal(t)) : void function () {
            throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.")
          }()
        }
      }, {
        key: "detach", value: function () {
          this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), this._invokeDisposeFn()
        }
      }, {
        key: "dispose", value: function () {
          this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0
        }
      }, {
        key: "setDisposeFn", value: function (t) {
          this._disposeFn = t
        }
      }, {
        key: "_invokeDisposeFn", value: function () {
          this._disposeFn && (this._disposeFn(), this._disposeFn = null)
        }
      }]), t
    }())), Rd = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this, t, r)).scheduler = t, i.work = r, i.pending = !1, i
      }

      return _createClass(n, [{
        key: "schedule", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (this.closed) return this;
          this.state = t;
          var n = this.id, r = this.scheduler;
          return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
        }
      }, {
        key: "requestAsyncId", value: function (t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return setInterval(t.flush.bind(t, this), n)
        }
      }, {
        key: "recycleAsyncId", value: function (t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          if (null !== n && this.delay === n && !1 === this.pending) return e;
          clearInterval(e)
        }
      }, {
        key: "execute", value: function (t, e) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          var n = this._execute(t, e);
          if (n) return n;
          !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }
      }, {
        key: "_execute", value: function (t, e) {
          var n = !1, r = void 0;
          try {
            this.work(t)
          } catch (i) {
            n = !0, r = !!i && i || new Error(i)
          }
          if (n) return this.unsubscribe(), r
        }
      }, {
        key: "_unsubscribe", value: function () {
          var t = this.id, e = this.scheduler, n = e.actions, r = n.indexOf(this);
          this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
        }
      }]), n
    }(function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        return _classCallCheck(this, n), e.call(this)
      }

      return _createClass(n, [{
        key: "schedule", value: function (t) {
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return this
        }
      }]), n
    }(d)), Fd = function () {
      var t = function () {
        function t(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.now;
          _classCallCheck(this, t), this.SchedulerAction = e, this.now = n
        }

        return _createClass(t, [{
          key: "schedule", value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = arguments.length > 2 ? arguments[2] : void 0;
            return new this.SchedulerAction(this, t).schedule(n, e)
          }
        }]), t
      }();
      return t.now = function () {
        return Date.now()
      }, t
    }(), Nd = new (function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t) {
        var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fd.now;
        return _classCallCheck(this, n), (r = e.call(this, t, (function () {
          return n.delegate && n.delegate !== _assertThisInitialized(r) ? n.delegate.now() : i()
        }))).actions = [], r.active = !1, r.scheduled = void 0, r
      }

      return _createClass(n, [{
        key: "schedule", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = arguments.length > 2 ? arguments[2] : void 0;
          return n.delegate && n.delegate !== this ? n.delegate.schedule(t, e, r) : _get(_getPrototypeOf(n.prototype), "schedule", this).call(this, t, e, r)
        }
      }, {
        key: "flush", value: function (t) {
          var e = this.actions;
          if (this.active) e.push(t); else {
            var n;
            this.active = !0;
            do {
              if (n = t.execute(t.state, t.delay)) break
            } while (t = e.shift());
            if (this.active = !1, n) {
              for (; t = e.shift();) t.unsubscribe();
              throw n
            }
          }
        }
      }]), n
    }(Fd))(Rd), jd = function () {
      function t(e, n) {
        _classCallCheck(this, t), this.dueTime = e, this.scheduler = n
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new Hd(t, this.dueTime, this.scheduler))
        }
      }]), t
    }(), Hd = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i) {
        var a;
        return _classCallCheck(this, n), (a = e.call(this, t)).dueTime = r, a.scheduler = i, a.debouncedSubscription = null, a.lastValue = null, a.hasValue = !1, a
      }

      return _createClass(n, [{
        key: "_next", value: function (t) {
          this.clearDebounce(), this.lastValue = t, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(Ud, this.dueTime, this))
        }
      }, {
        key: "_complete", value: function () {
          this.debouncedNext(), this.destination.complete()
        }
      }, {
        key: "debouncedNext", value: function () {
          if (this.clearDebounce(), this.hasValue) {
            var t = this.lastValue;
            this.lastValue = null, this.hasValue = !1, this.destination.next(t)
          }
        }
      }, {
        key: "clearDebounce", value: function () {
          var t = this.debouncedSubscription;
          null !== t && (this.remove(t), t.unsubscribe(), this.debouncedSubscription = null)
        }
      }]), n
    }(g);

    function Ud(t) {
      t.debouncedNext()
    }

    function zd() {
    }

    var Vd = function (t) {
      return null == t ? zd : function () {
        return this.querySelector(t)
      }
    };

    function Bd() {
      return []
    }

    var qd = function (t) {
      return null == t ? Bd : function () {
        return this.querySelectorAll(t)
      }
    }, Wd = function (t) {
      return function () {
        return this.matches(t)
      }
    }, Gd = function (t) {
      return new Array(t.length)
    };

    function Qd(t, e) {
      this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e
    }

    function Yd(t, e, n, r, i, a) {
      for (var o, s = 0, l = e.length, u = a.length; s < u; ++s) (o = e[s]) ? (o.__data__ = a[s], r[s] = o) : n[s] = new Qd(t, a[s]);
      for (; s < l; ++s) (o = e[s]) && (i[s] = o)
    }

    function Zd(t, e, n, r, i, a, o) {
      var s, l, u, c = {}, h = e.length, f = a.length, d = new Array(h);
      for (s = 0; s < h; ++s) (l = e[s]) && (d[s] = u = "$" + o.call(l, l.__data__, s, e), u in c ? i[s] = l : c[u] = l);
      for (s = 0; s < f; ++s) (l = c[u = "$" + o.call(t, a[s], s, a)]) ? (r[s] = l, l.__data__ = a[s], c[u] = null) : n[s] = new Qd(t, a[s]);
      for (s = 0; s < h; ++s) (l = e[s]) && c[d[s]] === l && (i[s] = l)
    }

    function Xd(t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }

    Qd.prototype = {
      constructor: Qd, appendChild: function (t) {
        return this._parent.insertBefore(t, this._next)
      }, insertBefore: function (t, e) {
        return this._parent.insertBefore(t, e)
      }, querySelector: function (t) {
        return this._parent.querySelector(t)
      }, querySelectorAll: function (t) {
        return this._parent.querySelectorAll(t)
      }
    };
    var Kd = "http://www.w3.org/1999/xhtml", $d = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: Kd,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    }, Jd = function (t) {
      var e = t += "", n = e.indexOf(":");
      return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), $d.hasOwnProperty(e) ? {
        space: $d[e],
        local: t
      } : t
    };

    function tp(t) {
      return function () {
        this.removeAttribute(t)
      }
    }

    function ep(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local)
      }
    }

    function np(t, e) {
      return function () {
        this.setAttribute(t, e)
      }
    }

    function rp(t, e) {
      return function () {
        this.setAttributeNS(t.space, t.local, e)
      }
    }

    function ip(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
      }
    }

    function ap(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
      }
    }

    var op = function (t) {
      return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };

    function sp(t) {
      return function () {
        this.style.removeProperty(t)
      }
    }

    function lp(t, e, n) {
      return function () {
        this.style.setProperty(t, e, n)
      }
    }

    function up(t, e, n) {
      return function () {
        var r = e.apply(this, arguments);
        null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
      }
    }

    function cp(t, e) {
      return t.style.getPropertyValue(e) || op(t).getComputedStyle(t, null).getPropertyValue(e)
    }

    function hp(t) {
      return function () {
        delete this[t]
      }
    }

    function fp(t, e) {
      return function () {
        this[t] = e
      }
    }

    function dp(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? delete this[t] : this[t] = n
      }
    }

    function pp(t) {
      return t.trim().split(/^|\s+/)
    }

    function vp(t) {
      return t.classList || new gp(t)
    }

    function gp(t) {
      this._node = t, this._names = pp(t.getAttribute("class") || "")
    }

    function yp(t, e) {
      for (var n = vp(t), r = -1, i = e.length; ++r < i;) n.add(e[r])
    }

    function mp(t, e) {
      for (var n = vp(t), r = -1, i = e.length; ++r < i;) n.remove(e[r])
    }

    function _p(t) {
      return function () {
        yp(this, t)
      }
    }

    function kp(t) {
      return function () {
        mp(this, t)
      }
    }

    function bp(t, e) {
      return function () {
        (e.apply(this, arguments) ? yp : mp)(this, t)
      }
    }

    function wp() {
      this.textContent = ""
    }

    function Cp(t) {
      return function () {
        this.textContent = t
      }
    }

    function xp(t) {
      return function () {
        var e = t.apply(this, arguments);
        this.textContent = null == e ? "" : e
      }
    }

    function Sp() {
      this.innerHTML = ""
    }

    function Tp(t) {
      return function () {
        this.innerHTML = t
      }
    }

    function Ep(t) {
      return function () {
        var e = t.apply(this, arguments);
        this.innerHTML = null == e ? "" : e
      }
    }

    function Ap() {
      this.nextSibling && this.parentNode.appendChild(this)
    }

    function Op() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }

    function Lp(t) {
      return function () {
        var e = this.ownerDocument, n = this.namespaceURI;
        return n === Kd && e.documentElement.namespaceURI === Kd ? e.createElement(t) : e.createElementNS(n, t)
      }
    }

    function Pp(t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local)
      }
    }

    gp.prototype = {
      add: function (t) {
        this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
      }, remove: function (t) {
        var e = this._names.indexOf(t);
        e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")))
      }, contains: function (t) {
        return this._names.indexOf(t) >= 0
      }
    };
    var Mp = function (t) {
      var e = Jd(t);
      return (e.local ? Pp : Lp)(e)
    };

    function Dp() {
      return null
    }

    function Ip() {
      var t = this.parentNode;
      t && t.removeChild(this)
    }

    function Rp() {
      var t = this.cloneNode(!1), e = this.parentNode;
      return e ? e.insertBefore(t, this.nextSibling) : t
    }

    function Fp() {
      var t = this.cloneNode(!0), e = this.parentNode;
      return e ? e.insertBefore(t, this.nextSibling) : t
    }

    var Np = {}, jp = null;

    function Hp(t, e, n) {
      return t = Up(t, e, n), function (e) {
        var n = e.relatedTarget;
        n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e)
      }
    }

    function Up(t, e, n) {
      return function (r) {
        var i = jp;
        jp = r;
        try {
          t.call(this, this.__data__, e, n)
        } finally {
          jp = i
        }
      }
    }

    function zp(t) {
      return t.trim().split(/^|\s+/).map((function (t) {
        var e = "", n = t.indexOf(".");
        return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), {type: t, name: e}
      }))
    }

    function Vp(t) {
      return function () {
        var e = this.__on;
        if (e) {
          for (var n, r = 0, i = -1, a = e.length; r < a; ++r) n = e[r], t.type && n.type !== t.type || n.name !== t.name ? e[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
          ++i ? e.length = i : delete this.__on
        }
      }
    }

    function Bp(t, e, n) {
      var r = Np.hasOwnProperty(t.type) ? Hp : Up;
      return function (i, a, o) {
        var s, l = this.__on, u = r(e, a, o);
        if (l) for (var c = 0, h = l.length; c < h; ++c) if ((s = l[c]).type === t.type && s.name === t.name) return this.removeEventListener(s.type, s.listener, s.capture), this.addEventListener(s.type, s.listener = u, s.capture = n), void (s.value = e);
        this.addEventListener(t.type, u, n), s = {
          type: t.type,
          name: t.name,
          value: e,
          listener: u,
          capture: n
        }, l ? l.push(s) : this.__on = [s]
      }
    }

    function qp(t, e, n) {
      var r = op(t), i = r.CustomEvent;
      "function" == typeof i ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i)
    }

    function Wp(t, e) {
      return function () {
        return qp(this, t, e)
      }
    }

    function Gp(t, e) {
      return function () {
        return qp(this, t, e.apply(this, arguments))
      }
    }

    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (Np = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }));
    var Qp = [null];

    function Yp(t, e) {
      this._groups = t, this._parents = e
    }

    function Zp() {
      return new Yp([[document.documentElement]], Qp)
    }

    Yp.prototype = Zp.prototype = {
      constructor: Yp, select: function (t) {
        "function" != typeof t && (t = Vd(t));
        for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) for (var a, o, s = e[i], l = s.length, u = r[i] = new Array(l), c = 0; c < l; ++c) (a = s[c]) && (o = t.call(a, a.__data__, c, s)) && ("__data__" in a && (o.__data__ = a.__data__), u[c] = o);
        return new Yp(r, this._parents)
      }, selectAll: function (t) {
        "function" != typeof t && (t = qd(t));
        for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a) for (var o, s = e[a], l = s.length, u = 0; u < l; ++u) (o = s[u]) && (r.push(t.call(o, o.__data__, u, s)), i.push(o));
        return new Yp(r, i)
      }, filter: function (t) {
        "function" != typeof t && (t = Wd(t));
        for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) for (var a, o = e[i], s = o.length, l = r[i] = [], u = 0; u < s; ++u) (a = o[u]) && t.call(a, a.__data__, u, o) && l.push(a);
        return new Yp(r, this._parents)
      }, data: function (t, e) {
        if (!t) return p = new Array(this.size()), c = -1, this.each((function (t) {
          p[++c] = t
        })), p;
        var n, r = e ? Zd : Yd, i = this._parents, a = this._groups;
        "function" != typeof t && (n = t, t = function () {
          return n
        });
        for (var o = a.length, s = new Array(o), l = new Array(o), u = new Array(o), c = 0; c < o; ++c) {
          var h = i[c], f = a[c], d = f.length, p = t.call(h, h && h.__data__, c, i), v = p.length,
            g = l[c] = new Array(v), y = s[c] = new Array(v);
          r(h, f, g, y, u[c] = new Array(d), p, e);
          for (var m, _, k = 0, b = 0; k < v; ++k) if (m = g[k]) {
            for (k >= b && (b = k + 1); !(_ = y[b]) && ++b < v;) ;
            m._next = _ || null
          }
        }
        return (s = new Yp(s, i))._enter = l, s._exit = u, s
      }, enter: function () {
        return new Yp(this._enter || this._groups.map(Gd), this._parents)
      }, exit: function () {
        return new Yp(this._exit || this._groups.map(Gd), this._parents)
      }, join: function (t, e, n) {
        var r = this.enter(), i = this, a = this.exit();
        return r = "function" == typeof t ? t(r) : r.append(t + ""), null != e && (i = e(i)), null == n ? a.remove() : n(a), r && i ? r.merge(i).order() : i
      }, merge: function (t) {
        for (var e = this._groups, n = t._groups, r = e.length, i = Math.min(r, n.length), a = new Array(r), o = 0; o < i; ++o) for (var s, l = e[o], u = n[o], c = l.length, h = a[o] = new Array(c), f = 0; f < c; ++f) (s = l[f] || u[f]) && (h[f] = s);
        for (; o < r; ++o) a[o] = e[o];
        return new Yp(a, this._parents)
      }, order: function () {
        for (var t = this._groups, e = -1, n = t.length; ++e < n;) for (var r, i = t[e], a = i.length - 1, o = i[a]; --a >= 0;) (r = i[a]) && (o && 4 ^ r.compareDocumentPosition(o) && o.parentNode.insertBefore(r, o), o = r);
        return this
      }, sort: function (t) {
        function e(e, n) {
          return e && n ? t(e.__data__, n.__data__) : !e - !n
        }

        t || (t = Xd);
        for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
          for (var o, s = n[a], l = s.length, u = i[a] = new Array(l), c = 0; c < l; ++c) (o = s[c]) && (u[c] = o);
          u.sort(e)
        }
        return new Yp(i, this._parents).order()
      }, call: function () {
        var t = arguments[0];
        return arguments[0] = this, t.apply(null, arguments), this
      }, nodes: function () {
        var t = new Array(this.size()), e = -1;
        return this.each((function () {
          t[++e] = this
        })), t
      }, node: function () {
        for (var t = this._groups, e = 0, n = t.length; e < n; ++e) for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
          var o = r[i];
          if (o) return o
        }
        return null
      }, size: function () {
        var t = 0;
        return this.each((function () {
          ++t
        })), t
      }, empty: function () {
        return !this.node()
      }, each: function (t) {
        for (var e = this._groups, n = 0, r = e.length; n < r; ++n) for (var i, a = e[n], o = 0, s = a.length; o < s; ++o) (i = a[o]) && t.call(i, i.__data__, o, a);
        return this
      }, attr: function (t, e) {
        var n = Jd(t);
        if (arguments.length < 2) {
          var r = this.node();
          return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
        }
        return this.each((null == e ? n.local ? ep : tp : "function" == typeof e ? n.local ? ap : ip : n.local ? rp : np)(n, e))
      }, style: function (t, e, n) {
        return arguments.length > 1 ? this.each((null == e ? sp : "function" == typeof e ? up : lp)(t, e, null == n ? "" : n)) : cp(this.node(), t)
      }, property: function (t, e) {
        return arguments.length > 1 ? this.each((null == e ? hp : "function" == typeof e ? dp : fp)(t, e)) : this.node()[t]
      }, classed: function (t, e) {
        var n = pp(t + "");
        if (arguments.length < 2) {
          for (var r = vp(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
          return !0
        }
        return this.each(("function" == typeof e ? bp : e ? _p : kp)(n, e))
      }, text: function (t) {
        return arguments.length ? this.each(null == t ? wp : ("function" == typeof t ? xp : Cp)(t)) : this.node().textContent
      }, html: function (t) {
        return arguments.length ? this.each(null == t ? Sp : ("function" == typeof t ? Ep : Tp)(t)) : this.node().innerHTML
      }, raise: function () {
        return this.each(Ap)
      }, lower: function () {
        return this.each(Op)
      }, append: function (t) {
        var e = "function" == typeof t ? t : Mp(t);
        return this.select((function () {
          return this.appendChild(e.apply(this, arguments))
        }))
      }, insert: function (t, e) {
        var n = "function" == typeof t ? t : Mp(t), r = null == e ? Dp : "function" == typeof e ? e : Vd(e);
        return this.select((function () {
          return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null)
        }))
      }, remove: function () {
        return this.each(Ip)
      }, clone: function (t) {
        return this.select(t ? Fp : Rp)
      }, datum: function (t) {
        return arguments.length ? this.property("__data__", t) : this.node().__data__
      }, on: function (t, e, n) {
        var r, i, a = zp(t + ""), o = a.length;
        if (!(arguments.length < 2)) {
          for (s = e ? Bp : Vp, null == n && (n = !1), r = 0; r < o; ++r) this.each(s(a[r], e, n));
          return this
        }
        var s = this.node().__on;
        if (s) for (var l, u = 0, c = s.length; u < c; ++u) for (r = 0, l = s[u]; r < o; ++r) if ((i = a[r]).type === l.type && i.name === l.name) return l.value
      }, dispatch: function (t, e) {
        return this.each(("function" == typeof e ? Gp : Wp)(t, e))
      }
    };
    var Xp = Zp, Kp = function (t) {
      return "string" == typeof t ? new Yp([[document.querySelector(t)]], [document.documentElement]) : new Yp([[t]], Qp)
    }, $p = {
      value: function () {
      }
    };

    function Jp() {
      for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
        if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        r[t] = []
      }
      return new tv(r)
    }

    function tv(t) {
      this._ = t
    }

    function ev(t, e) {
      return t.trim().split(/^|\s+/).map((function (t) {
        var n = "", r = t.indexOf(".");
        if (r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), t && !e.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {type: t, name: n}
      }))
    }

    function nv(t, e) {
      for (var n, r = 0, i = t.length; r < i; ++r) if ((n = t[r]).name === e) return n.value
    }

    function rv(t, e, n) {
      for (var r = 0, i = t.length; r < i; ++r) if (t[r].name === e) {
        t[r] = $p, t = t.slice(0, r).concat(t.slice(r + 1));
        break
      }
      return null != n && t.push({name: e, value: n}), t
    }

    tv.prototype = Jp.prototype = {
      constructor: tv, on: function (t, e) {
        var n, r = this._, i = ev(t + "", r), a = -1, o = i.length;
        if (!(arguments.length < 2)) {
          if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);
          for (; ++a < o;) if (n = (t = i[a]).type) r[n] = rv(r[n], t.name, e); else if (null == e) for (n in r) r[n] = rv(r[n], t.name, null);
          return this
        }
        for (; ++a < o;) if ((n = (t = i[a]).type) && (n = nv(r[n], t.name))) return n
      }, copy: function () {
        var t = {}, e = this._;
        for (var n in e) t[n] = e[n].slice();
        return new tv(t)
      }, call: function (t, e) {
        if ((n = arguments.length - 2) > 0) for (var n, r, i = new Array(n), a = 0; a < n; ++a) i[a] = arguments[a + 2];
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (a = 0, n = (r = this._[t]).length; a < n; ++a) r[a].value.apply(e, i)
      }, apply: function (t, e, n) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n)
      }
    };
    var iv = Jp, av = function (t, e, n) {
      t.prototype = e.prototype = n, n.constructor = t
    };

    function ov(t, e) {
      var n = Object.create(t.prototype);
      for (var r in e) n[r] = e[r];
      return n
    }

    function sv() {
    }

    var lv = "\\s*([+-]?\\d+)\\s*", uv = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      cv = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", hv = /^#([0-9a-f]{3,8})$/,
      fv = new RegExp("^rgb\\(" + [lv, lv, lv] + "\\)$"), dv = new RegExp("^rgb\\(" + [cv, cv, cv] + "\\)$"),
      pv = new RegExp("^rgba\\(" + [lv, lv, lv, uv] + "\\)$"), vv = new RegExp("^rgba\\(" + [cv, cv, cv, uv] + "\\)$"),
      gv = new RegExp("^hsl\\(" + [uv, cv, cv] + "\\)$"), yv = new RegExp("^hsla\\(" + [uv, cv, cv, uv] + "\\)$"),
      mv = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      };

    function _v() {
      return this.rgb().formatHex()
    }

    function kv() {
      return this.rgb().formatRgb()
    }

    function bv(t) {
      var e, n;
      return t = (t + "").trim().toLowerCase(), (e = hv.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), 6 === n ? wv(e) : 3 === n ? new Tv(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === n ? new Tv(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? new Tv(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = fv.exec(t)) ? new Tv(e[1], e[2], e[3], 1) : (e = dv.exec(t)) ? new Tv(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = pv.exec(t)) ? Cv(e[1], e[2], e[3], e[4]) : (e = vv.exec(t)) ? Cv(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = gv.exec(t)) ? Lv(e[1], e[2] / 100, e[3] / 100, 1) : (e = yv.exec(t)) ? Lv(e[1], e[2] / 100, e[3] / 100, e[4]) : mv.hasOwnProperty(t) ? wv(mv[t]) : "transparent" === t ? new Tv(NaN, NaN, NaN, 0) : null
    }

    function wv(t) {
      return new Tv(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }

    function Cv(t, e, n, r) {
      return r <= 0 && (t = e = n = NaN), new Tv(t, e, n, r)
    }

    function xv(t) {
      return t instanceof sv || (t = bv(t)), t ? new Tv((t = t.rgb()).r, t.g, t.b, t.opacity) : new Tv
    }

    function Sv(t, e, n, r) {
      return 1 === arguments.length ? xv(t) : new Tv(t, e, n, null == r ? 1 : r)
    }

    function Tv(t, e, n, r) {
      this.r = +t, this.g = +e, this.b = +n, this.opacity = +r
    }

    function Ev() {
      return "#" + Ov(this.r) + Ov(this.g) + Ov(this.b)
    }

    function Av() {
      var t = this.opacity;
      return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
    }

    function Ov(t) {
      return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
    }

    function Lv(t, e, n, r) {
      return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Mv(t, e, n, r)
    }

    function Pv(t) {
      if (t instanceof Mv) return new Mv(t.h, t.s, t.l, t.opacity);
      if (t instanceof sv || (t = bv(t)), !t) return new Mv;
      if (t instanceof Mv) return t;
      var e = (t = t.rgb()).r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r),
        o = NaN, s = a - i, l = (a + i) / 2;
      return s ? (o = e === a ? (n - r) / s + 6 * (n < r) : n === a ? (r - e) / s + 2 : (e - n) / s + 4, s /= l < .5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new Mv(o, s, l, t.opacity)
    }

    function Mv(t, e, n, r) {
      this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
    }

    function Dv(t, e, n) {
      return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
    }

    function Iv(t, e, n, r, i) {
      var a = t * t, o = a * t;
      return ((1 - 3 * t + 3 * a - o) * e + (4 - 6 * a + 3 * o) * n + (1 + 3 * t + 3 * a - 3 * o) * r + o * i) / 6
    }

    av(sv, bv, {
      copy: function (t) {
        return Object.assign(new this.constructor, this, t)
      }, displayable: function () {
        return this.rgb().displayable()
      }, hex: _v, formatHex: _v, formatHsl: function () {
        return Pv(this).formatHsl()
      }, formatRgb: kv, toString: kv
    }), av(Tv, Sv, ov(sv, {
      brighter: function (t) {
        return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Tv(this.r * t, this.g * t, this.b * t, this.opacity)
      }, darker: function (t) {
        return t = null == t ? .7 : Math.pow(.7, t), new Tv(this.r * t, this.g * t, this.b * t, this.opacity)
      }, rgb: function () {
        return this
      }, displayable: function () {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      }, hex: Ev, formatHex: Ev, formatRgb: Av, toString: Av
    })), av(Mv, (function (t, e, n, r) {
      return 1 === arguments.length ? Pv(t) : new Mv(t, e, n, null == r ? 1 : r)
    }), ov(sv, {
      brighter: function (t) {
        return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Mv(this.h, this.s, this.l * t, this.opacity)
      }, darker: function (t) {
        return t = null == t ? .7 : Math.pow(.7, t), new Mv(this.h, this.s, this.l * t, this.opacity)
      }, rgb: function () {
        var t = this.h % 360 + 360 * (this.h < 0), e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l,
          r = n + (n < .5 ? n : 1 - n) * e, i = 2 * n - r;
        return new Tv(Dv(t >= 240 ? t - 240 : t + 120, i, r), Dv(t, i, r), Dv(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
      }, displayable: function () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      }, formatHsl: function () {
        var t = this.opacity;
        return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
      }
    }));
    var Rv = function (t) {
      return function () {
        return t
      }
    };

    function Fv(t, e) {
      var n = e - t;
      return n ? function (t, e) {
        return function (n) {
          return t + n * e
        }
      }(t, n) : Rv(isNaN(t) ? e : t)
    }

    var Nv = function t(e) {
      var n = function (t) {
        return 1 == (t = +t) ? Fv : function (e, n) {
          return n - e ? function (t, e, n) {
            return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) {
              return Math.pow(t + r * e, n)
            }
          }(e, n, t) : Rv(isNaN(e) ? n : e)
        }
      }(e);

      function r(t, e) {
        var r = n((t = Sv(t)).r, (e = Sv(e)).r), i = n(t.g, e.g), a = n(t.b, e.b), o = Fv(t.opacity, e.opacity);
        return function (e) {
          return t.r = r(e), t.g = i(e), t.b = a(e), t.opacity = o(e), t + ""
        }
      }

      return r.gamma = t, r
    }(1);

    function jv(t) {
      return function (e) {
        var n, r, i = e.length, a = new Array(i), o = new Array(i), s = new Array(i);
        for (n = 0; n < i; ++n) r = Sv(e[n]), a[n] = r.r || 0, o[n] = r.g || 0, s[n] = r.b || 0;
        return a = t(a), o = t(o), s = t(s), r.opacity = 1, function (t) {
          return r.r = a(t), r.g = o(t), r.b = s(t), r + ""
        }
      }
    }

    jv((function (t) {
      var e = t.length - 1;
      return function (n) {
        var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e), i = t[r], a = t[r + 1];
        return Iv((n - r / e) * e, r > 0 ? t[r - 1] : 2 * i - a, i, a, r < e - 1 ? t[r + 2] : 2 * a - i)
      }
    })), jv((function (t) {
      var e = t.length;
      return function (n) {
        var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e);
        return Iv((n - r / e) * e, t[(r + e - 1) % e], t[r % e], t[(r + 1) % e], t[(r + 2) % e])
      }
    }));
    var Hv = function (t, e) {
      e || (e = []);
      var n, r = t ? Math.min(e.length, t.length) : 0, i = e.slice();
      return function (a) {
        for (n = 0; n < r; ++n) i[n] = t[n] * (1 - a) + e[n] * a;
        return i
      }
    };

    function Uv(t, e) {
      var n, r = e ? e.length : 0, i = t ? Math.min(r, t.length) : 0, a = new Array(i), o = new Array(r);
      for (n = 0; n < i; ++n) a[n] = Zv(t[n], e[n]);
      for (; n < r; ++n) o[n] = e[n];
      return function (t) {
        for (n = 0; n < i; ++n) o[n] = a[n](t);
        return o
      }
    }

    var zv, Vv, Bv = function (t, e) {
        var n = new Date;
        return t = +t, e = +e, function (r) {
          return n.setTime(t * (1 - r) + e * r), n
        }
      }, qv = function (t, e) {
        return t = +t, e = +e, function (n) {
          return t * (1 - n) + e * n
        }
      }, Wv = function (t, e) {
        var n, r = {}, i = {};
        for (n in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e) n in t ? r[n] = Zv(t[n], e[n]) : i[n] = e[n];
        return function (t) {
          for (n in r) i[n] = r[n](t);
          return i
        }
      }, Gv = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qv = new RegExp(Gv.source, "g"), Yv = function (t, e) {
        var n, r, i, a = Gv.lastIndex = Qv.lastIndex = 0, o = -1, s = [], l = [];
        for (t += "", e += ""; (n = Gv.exec(t)) && (r = Qv.exec(e));) (i = r.index) > a && (i = e.slice(a, i), s[o] ? s[o] += i : s[++o] = i), (n = n[0]) === (r = r[0]) ? s[o] ? s[o] += r : s[++o] = r : (s[++o] = null, l.push({
          i: o,
          x: qv(n, r)
        })), a = Qv.lastIndex;
        return a < e.length && (i = e.slice(a), s[o] ? s[o] += i : s[++o] = i), s.length < 2 ? l[0] ? function (t) {
          return function (e) {
            return t(e) + ""
          }
        }(l[0].x) : function (t) {
          return function () {
            return t
          }
        }(e) : (e = l.length, function (t) {
          for (var n, r = 0; r < e; ++r) s[(n = l[r]).i] = n.x(t);
          return s.join("")
        })
      }, Zv = function (t, e) {
        var n, r, i = typeof e;
        return null == e || "boolean" === i ? Rv(e) : ("number" === i ? qv : "string" === i ? (n = bv(e)) ? (e = n, Nv) : Yv : e instanceof bv ? Nv : e instanceof Date ? Bv : (r = e, !ArrayBuffer.isView(r) || r instanceof DataView ? Array.isArray(e) ? Uv : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? Wv : qv : Hv))(t, e)
      }, Xv = 0, Kv = 0, $v = 0, Jv = 0, tg = 0, eg = 0,
      ng = "object" == typeof performance && performance.now ? performance : Date,
      rg = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
        setTimeout(t, 17)
      };

    function ig() {
      return tg || (rg(ag), tg = ng.now() + eg)
    }

    function ag() {
      tg = 0
    }

    function og() {
      this._call = this._time = this._next = null
    }

    function sg(t, e, n) {
      var r = new og;
      return r.restart(t, e, n), r
    }

    function lg() {
      tg = (Jv = ng.now()) + eg, Xv = Kv = 0;
      try {
        !function () {
          ig(), ++Xv;
          for (var t, e = zv; e;) (t = tg - e._time) >= 0 && e._call.call(null, t), e = e._next;
          --Xv
        }()
      } finally {
        Xv = 0, function () {
          for (var t, e, n = zv, r = 1 / 0; n;) n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : zv = e);
          Vv = t, cg(r)
        }(), tg = 0
      }
    }

    function ug() {
      var t = ng.now(), e = t - Jv;
      e > 1e3 && (eg -= e, Jv = t)
    }

    function cg(t) {
      Xv || (Kv && (Kv = clearTimeout(Kv)), t - tg > 24 ? (t < 1 / 0 && (Kv = setTimeout(lg, t - ng.now() - eg)), $v && ($v = clearInterval($v))) : ($v || (Jv = ng.now(), $v = setInterval(ug, 1e3)), Xv = 1, rg(lg)))
    }

    og.prototype = sg.prototype = {
      constructor: og, restart: function (t, e, n) {
        if ("function" != typeof t) throw new TypeError("callback is not a function");
        n = (null == n ? ig() : +n) + (null == e ? 0 : +e), this._next || Vv === this || (Vv ? Vv._next = this : zv = this, Vv = this), this._call = t, this._time = n, cg()
      }, stop: function () {
        this._call && (this._call = null, this._time = 1 / 0, cg())
      }
    };
    var hg = function (t, e, n) {
      var r = new og;
      return r.restart((function (n) {
        r.stop(), t(n + e)
      }), e = null == e ? 0 : +e, n), r
    }, fg = iv("start", "end", "cancel", "interrupt"), dg = [], pg = function (t, e, n, r, i, a) {
      var o = t.__transition;
      if (o) {
        if (n in o) return
      } else t.__transition = {};
      !function (t, e, n) {
        var r, i = t.__transition;

        function a(l) {
          var u, c, h, f;
          if (1 !== n.state) return s();
          for (u in i) if ((f = i[u]).name === n.name) {
            if (3 === f.state) return hg(a);
            4 === f.state ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete i[u]) : +u < e && (f.state = 6, f.timer.stop(), f.on.call("cancel", t, t.__data__, f.index, f.group), delete i[u])
          }
          if (hg((function () {
            3 === n.state && (n.state = 4, n.timer.restart(o, n.delay, n.time), o(l))
          })), n.state = 2, n.on.call("start", t, t.__data__, n.index, n.group), 2 === n.state) {
            for (n.state = 3, r = new Array(h = n.tween.length), u = 0, c = -1; u < h; ++u) (f = n.tween[u].value.call(t, t.__data__, n.index, n.group)) && (r[++c] = f);
            r.length = c + 1
          }
        }

        function o(e) {
          for (var i = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(s), n.state = 5, 1), a = -1, o = r.length; ++a < o;) r[a].call(t, i);
          5 === n.state && (n.on.call("end", t, t.__data__, n.index, n.group), s())
        }

        function s() {
          for (var r in n.state = 6, n.timer.stop(), delete i[e], i) return;
          delete t.__transition
        }

        i[e] = n, n.timer = sg((function (t) {
          n.state = 1, n.timer.restart(a, n.delay, n.time), n.delay <= t && a(t - n.delay)
        }), 0, n.time)
      }(t, n, {
        name: e,
        index: r,
        group: i,
        on: fg,
        tween: dg,
        time: a.time,
        delay: a.delay,
        duration: a.duration,
        ease: a.ease,
        timer: null,
        state: 0
      })
    };

    function vg(t, e) {
      var n = yg(t, e);
      if (n.state > 0) throw new Error("too late; already scheduled");
      return n
    }

    function gg(t, e) {
      var n = yg(t, e);
      if (n.state > 3) throw new Error("too late; already running");
      return n
    }

    function yg(t, e) {
      var n = t.__transition;
      if (!n || !(n = n[e])) throw new Error("transition not found");
      return n
    }

    var mg, _g, kg, bg, wg = 180 / Math.PI,
      Cg = {translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1}, xg = function (t, e, n, r, i, a) {
        var o, s, l;
        return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (l = t * n + e * r) && (n -= t * l, r -= e * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), t * r < e * n && (t = -t, e = -e, l = -l, o = -o), {
          translateX: i,
          translateY: a,
          rotate: Math.atan2(e, t) * wg,
          skewX: Math.atan(l) * wg,
          scaleX: o,
          scaleY: s
        }
      };

    function Sg(t, e, n, r) {
      function i(t) {
        return t.length ? t.pop() + " " : ""
      }

      return function (a, o) {
        var s = [], l = [];
        return a = t(a), o = t(o), function (t, r, i, a, o, s) {
          if (t !== i || r !== a) {
            var l = o.push("translate(", null, e, null, n);
            s.push({i: l - 4, x: qv(t, i)}, {i: l - 2, x: qv(r, a)})
          } else (i || a) && o.push("translate(" + i + e + a + n)
        }(a.translateX, a.translateY, o.translateX, o.translateY, s, l), function (t, e, n, a) {
          t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), a.push({
            i: n.push(i(n) + "rotate(", null, r) - 2,
            x: qv(t, e)
          })) : e && n.push(i(n) + "rotate(" + e + r)
        }(a.rotate, o.rotate, s, l), function (t, e, n, a) {
          t !== e ? a.push({
            i: n.push(i(n) + "skewX(", null, r) - 2,
            x: qv(t, e)
          }) : e && n.push(i(n) + "skewX(" + e + r)
        }(a.skewX, o.skewX, s, l), function (t, e, n, r, a, o) {
          if (t !== n || e !== r) {
            var s = a.push(i(a) + "scale(", null, ",", null, ")");
            o.push({i: s - 4, x: qv(t, n)}, {i: s - 2, x: qv(e, r)})
          } else 1 === n && 1 === r || a.push(i(a) + "scale(" + n + "," + r + ")")
        }(a.scaleX, a.scaleY, o.scaleX, o.scaleY, s, l), a = o = null, function (t) {
          for (var e, n = -1, r = l.length; ++n < r;) s[(e = l[n]).i] = e.x(t);
          return s.join("")
        }
      }
    }

    var Tg = Sg((function (t) {
      return "none" === t ? Cg : (mg || (mg = document.createElement("DIV"), _g = document.documentElement, kg = document.defaultView), mg.style.transform = t, t = kg.getComputedStyle(_g.appendChild(mg), null).getPropertyValue("transform"), _g.removeChild(mg), t = t.slice(7, -1).split(","), xg(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
    }), "px, ", "px)", "deg)"), Eg = Sg((function (t) {
      return null == t ? Cg : (bg || (bg = document.createElementNS("http://www.w3.org/2000/svg", "g")), bg.setAttribute("transform", t), (t = bg.transform.baseVal.consolidate()) ? xg((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : Cg)
    }), ", ", ")", ")");

    function Ag(t, e) {
      var n, r;
      return function () {
        var i = gg(this, t), a = i.tween;
        if (a !== n) for (var o = 0, s = (r = n = a).length; o < s; ++o) if (r[o].name === e) {
          (r = r.slice()).splice(o, 1);
          break
        }
        i.tween = r
      }
    }

    function Og(t, e, n) {
      var r, i;
      if ("function" != typeof n) throw new Error;
      return function () {
        var a = gg(this, t), o = a.tween;
        if (o !== r) {
          i = (r = o).slice();
          for (var s = {name: e, value: n}, l = 0, u = i.length; l < u; ++l) if (i[l].name === e) {
            i[l] = s;
            break
          }
          l === u && i.push(s)
        }
        a.tween = i
      }
    }

    function Lg(t, e, n) {
      var r = t._id;
      return t.each((function () {
        var t = gg(this, r);
        (t.value || (t.value = {}))[e] = n.apply(this, arguments)
      })), function (t) {
        return yg(t, r).value[e]
      }
    }

    var Pg = function (t, e) {
      var n;
      return ("number" == typeof e ? qv : e instanceof bv ? Nv : (n = bv(e)) ? (e = n, Nv) : Yv)(t, e)
    };

    function Mg(t) {
      return function () {
        this.removeAttribute(t)
      }
    }

    function Dg(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local)
      }
    }

    function Ig(t, e, n) {
      var r, i, a = n + "";
      return function () {
        var o = this.getAttribute(t);
        return o === a ? null : o === r ? i : i = e(r = o, n)
      }
    }

    function Rg(t, e, n) {
      var r, i, a = n + "";
      return function () {
        var o = this.getAttributeNS(t.space, t.local);
        return o === a ? null : o === r ? i : i = e(r = o, n)
      }
    }

    function Fg(t, e, n) {
      var r, i, a;
      return function () {
        var o, s, l = n(this);
        if (null != l) return (o = this.getAttribute(t)) === (s = l + "") ? null : o === r && s === i ? a : (i = s, a = e(r = o, l));
        this.removeAttribute(t)
      }
    }

    function Ng(t, e, n) {
      var r, i, a;
      return function () {
        var o, s, l = n(this);
        if (null != l) return (o = this.getAttributeNS(t.space, t.local)) === (s = l + "") ? null : o === r && s === i ? a : (i = s, a = e(r = o, l));
        this.removeAttributeNS(t.space, t.local)
      }
    }

    function jg(t, e) {
      return function (n) {
        this.setAttribute(t, e.call(this, n))
      }
    }

    function Hg(t, e) {
      return function (n) {
        this.setAttributeNS(t.space, t.local, e.call(this, n))
      }
    }

    function Ug(t, e) {
      var n, r;

      function i() {
        var i = e.apply(this, arguments);
        return i !== r && (n = (r = i) && Hg(t, i)), n
      }

      return i._value = e, i
    }

    function zg(t, e) {
      var n, r;

      function i() {
        var i = e.apply(this, arguments);
        return i !== r && (n = (r = i) && jg(t, i)), n
      }

      return i._value = e, i
    }

    function Vg(t, e) {
      return function () {
        vg(this, t).delay = +e.apply(this, arguments)
      }
    }

    function Bg(t, e) {
      return e = +e, function () {
        vg(this, t).delay = e
      }
    }

    function qg(t, e) {
      return function () {
        gg(this, t).duration = +e.apply(this, arguments)
      }
    }

    function Wg(t, e) {
      return e = +e, function () {
        gg(this, t).duration = e
      }
    }

    function Gg(t, e) {
      if ("function" != typeof e) throw new Error;
      return function () {
        gg(this, t).ease = e
      }
    }

    function Qg(t, e, n) {
      var r, i, a = function (t) {
        return (t + "").trim().split(/^|\s+/).every((function (t) {
          var e = t.indexOf(".");
          return e >= 0 && (t = t.slice(0, e)), !t || "start" === t
        }))
      }(e) ? vg : gg;
      return function () {
        var o = a(this, t), s = o.on;
        s !== r && (i = (r = s).copy()).on(e, n), o.on = i
      }
    }

    var Yg = Xp.prototype.constructor;

    function Zg(t) {
      return function () {
        this.style.removeProperty(t)
      }
    }

    function Xg(t, e, n) {
      return function (r) {
        this.style.setProperty(t, e.call(this, r), n)
      }
    }

    function Kg(t, e, n) {
      var r, i;

      function a() {
        var a = e.apply(this, arguments);
        return a !== i && (r = (i = a) && Xg(t, a, n)), r
      }

      return a._value = e, a
    }

    function $g(t) {
      return function (e) {
        this.textContent = t.call(this, e)
      }
    }

    function Jg(t) {
      var e, n;

      function r() {
        var r = t.apply(this, arguments);
        return r !== n && (e = (n = r) && $g(r)), e
      }

      return r._value = t, r
    }

    var ty = 0;

    function ey(t, e, n, r) {
      this._groups = t, this._parents = e, this._name = n, this._id = r
    }

    function ny() {
      return ++ty
    }

    var ry = Xp.prototype;
    ey.prototype = (function (t) {
      return Xp().transition(t)
    }).prototype = {
      constructor: ey,
      select: function (t) {
        var e = this._name, n = this._id;
        "function" != typeof t && (t = Vd(t));
        for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o) for (var s, l, u = r[o], c = u.length, h = a[o] = new Array(c), f = 0; f < c; ++f) (s = u[f]) && (l = t.call(s, s.__data__, f, u)) && ("__data__" in s && (l.__data__ = s.__data__), h[f] = l, pg(h[f], e, n, f, h, yg(s, n)));
        return new ey(a, this._parents, e, n)
      },
      selectAll: function (t) {
        var e = this._name, n = this._id;
        "function" != typeof t && (t = qd(t));
        for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var l, u = r[s], c = u.length, h = 0; h < c; ++h) if (l = u[h]) {
          for (var f, d = t.call(l, l.__data__, h, u), p = yg(l, n), v = 0, g = d.length; v < g; ++v) (f = d[v]) && pg(f, e, n, v, d, p);
          a.push(d), o.push(l)
        }
        return new ey(a, o, e, n)
      },
      filter: function (t) {
        "function" != typeof t && (t = Wd(t));
        for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) for (var a, o = e[i], s = o.length, l = r[i] = [], u = 0; u < s; ++u) (a = o[u]) && t.call(a, a.__data__, u, o) && l.push(a);
        return new ey(r, this._parents, this._name, this._id)
      },
      merge: function (t) {
        if (t._id !== this._id) throw new Error;
        for (var e = this._groups, n = t._groups, r = e.length, i = Math.min(r, n.length), a = new Array(r), o = 0; o < i; ++o) for (var s, l = e[o], u = n[o], c = l.length, h = a[o] = new Array(c), f = 0; f < c; ++f) (s = l[f] || u[f]) && (h[f] = s);
        for (; o < r; ++o) a[o] = e[o];
        return new ey(a, this._parents, this._name, this._id)
      },
      selection: function () {
        return new Yg(this._groups, this._parents)
      },
      transition: function () {
        for (var t = this._name, e = this._id, n = ny(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o, s = r[a], l = s.length, u = 0; u < l; ++u) if (o = s[u]) {
          var c = yg(o, e);
          pg(o, t, n, u, s, {time: c.time + c.delay + c.duration, delay: 0, duration: c.duration, ease: c.ease})
        }
        return new ey(r, this._parents, t, n)
      },
      call: ry.call,
      nodes: ry.nodes,
      node: ry.node,
      size: ry.size,
      empty: ry.empty,
      each: ry.each,
      on: function (t, e) {
        var n = this._id;
        return arguments.length < 2 ? yg(this.node(), n).on.on(t) : this.each(Qg(n, t, e))
      },
      attr: function (t, e) {
        var n = Jd(t), r = "transform" === n ? Eg : Pg;
        return this.attrTween(t, "function" == typeof e ? (n.local ? Ng : Fg)(n, r, Lg(this, "attr." + t, e)) : null == e ? (n.local ? Dg : Mg)(n) : (n.local ? Rg : Ig)(n, r, e))
      },
      attrTween: function (t, e) {
        var n = "attr." + t;
        if (arguments.length < 2) return (n = this.tween(n)) && n._value;
        if (null == e) return this.tween(n, null);
        if ("function" != typeof e) throw new Error;
        var r = Jd(t);
        return this.tween(n, (r.local ? Ug : zg)(r, e))
      },
      style: function (t, e, n) {
        var r = "transform" == (t += "") ? Tg : Pg;
        return null == e ? this.styleTween(t, function (t, e) {
          var n, r, i;
          return function () {
            var a = cp(this, t), o = (this.style.removeProperty(t), cp(this, t));
            return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o)
          }
        }(t, r)).on("end.style." + t, Zg(t)) : "function" == typeof e ? this.styleTween(t, function (t, e, n) {
          var r, i, a;
          return function () {
            var o = cp(this, t), s = n(this), l = s + "";
            return null == s && (this.style.removeProperty(t), l = s = cp(this, t)), o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, s))
          }
        }(t, r, Lg(this, "style." + t, e))).each(function (t, e) {
          var n, r, i, a, o = "style." + e, s = "end." + o;
          return function () {
            var l = gg(this, t), u = l.on, c = null == l.value[o] ? a || (a = Zg(e)) : void 0;
            u === n && i === c || (r = (n = u).copy()).on(s, i = c), l.on = r
          }
        }(this._id, t)) : this.styleTween(t, function (t, e, n) {
          var r, i, a = n + "";
          return function () {
            var o = cp(this, t);
            return o === a ? null : o === r ? i : i = e(r = o, n)
          }
        }(t, r, e), n).on("end.style." + t, null)
      },
      styleTween: function (t, e, n) {
        var r = "style." + (t += "");
        if (arguments.length < 2) return (r = this.tween(r)) && r._value;
        if (null == e) return this.tween(r, null);
        if ("function" != typeof e) throw new Error;
        return this.tween(r, Kg(t, e, null == n ? "" : n))
      },
      text: function (t) {
        return this.tween("text", "function" == typeof t ? function (t) {
          return function () {
            var e = t(this);
            this.textContent = null == e ? "" : e
          }
        }(Lg(this, "text", t)) : function (t) {
          return function () {
            this.textContent = t
          }
        }(null == t ? "" : t + ""))
      },
      textTween: function (t) {
        var e = "text";
        if (arguments.length < 1) return (e = this.tween(e)) && e._value;
        if (null == t) return this.tween(e, null);
        if ("function" != typeof t) throw new Error;
        return this.tween(e, Jg(t))
      },
      remove: function () {
        return this.on("end.remove", (t = this._id, function () {
          var e = this.parentNode;
          for (var n in this.__transition) if (+n !== t) return;
          e && e.removeChild(this)
        }));
        var t
      },
      tween: function (t, e) {
        var n = this._id;
        if (t += "", arguments.length < 2) {
          for (var r, i = yg(this.node(), n).tween, a = 0, o = i.length; a < o; ++a) if ((r = i[a]).name === t) return r.value;
          return null
        }
        return this.each((null == e ? Ag : Og)(n, t, e))
      },
      delay: function (t) {
        var e = this._id;
        return arguments.length ? this.each(("function" == typeof t ? Vg : Bg)(e, t)) : yg(this.node(), e).delay
      },
      duration: function (t) {
        var e = this._id;
        return arguments.length ? this.each(("function" == typeof t ? qg : Wg)(e, t)) : yg(this.node(), e).duration
      },
      ease: function (t) {
        var e = this._id;
        return arguments.length ? this.each(Gg(e, t)) : yg(this.node(), e).ease
      },
      end: function () {
        var t, e, n = this, r = n._id, i = n.size();
        return new Promise((function (a, o) {
          var s = {value: o}, l = {
            value: function () {
              0 == --i && a()
            }
          };
          n.each((function () {
            var n = gg(this, r), i = n.on;
            i !== t && ((e = (t = i).copy())._.cancel.push(s), e._.interrupt.push(s), e._.end.push(l)), n.on = e
          }))
        }))
      }
    };
    var iy = {
      time: null, delay: 0, duration: 250, ease: function (t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
      }
    };

    function ay(t, e) {
      for (var n; !(n = t.__transition) || !(n = n[e]);) if (!(t = t.parentNode)) return iy.time = ig(), iy;
      return n
    }

    function oy(t) {
      return {type: t}
    }

    Xp.prototype.interrupt = function (t) {
      return this.each((function () {
        !function (t, e) {
          var n, r, i, a = t.__transition, o = !0;
          if (a) {
            for (i in e = null == e ? null : e + "", a) (n = a[i]).name === e ? (r = n.state > 2 && n.state < 5, n.state = 6, n.timer.stop(), n.on.call(r ? "interrupt" : "cancel", t, t.__data__, n.index, n.group), delete a[i]) : o = !1;
            o && delete t.__transition
          }
        }(this, t)
      }))
    }, Xp.prototype.transition = function (t) {
      var e, n;
      t instanceof ey ? (e = t._id, t = t._name) : (e = ny(), (n = iy).time = ig(), t = null == t ? null : t + "");
      for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o, s = r[a], l = s.length, u = 0; u < l; ++u) (o = s[u]) && pg(o, t, e, u, s, n || ay(o, e));
      return new ey(r, this._parents, t, e)
    }, ["w", "e"].map(oy), ["n", "s"].map(oy), ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(oy);
    var sy = function (t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }, ly = Math.sqrt(50), uy = Math.sqrt(10), cy = Math.sqrt(2);

    function hy(t, e, n) {
      var r = (e - t) / Math.max(0, n), i = Math.floor(Math.log(r) / Math.LN10), a = r / Math.pow(10, i);
      return i >= 0 ? (a >= ly ? 10 : a >= uy ? 5 : a >= cy ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= ly ? 10 : a >= uy ? 5 : a >= cy ? 2 : 1)
    }

    var fy = new Date, dy = new Date;

    function py(t, e, n, r) {
      function i(e) {
        return t(e = 0 === arguments.length ? new Date : new Date(+e)), e
      }

      return i.floor = function (e) {
        return t(e = new Date(+e)), e
      }, i.ceil = function (n) {
        return t(n = new Date(n - 1)), e(n, 1), t(n), n
      }, i.round = function (t) {
        var e = i(t), n = i.ceil(t);
        return t - e < n - t ? e : n
      }, i.offset = function (t, n) {
        return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t
      }, i.range = function (n, r, a) {
        var o, s = [];
        if (n = i.ceil(n), a = null == a ? 1 : Math.floor(a), !(n < r && a > 0)) return s;
        do {
          s.push(o = new Date(+n)), e(n, a), t(n)
        } while (o < n && n < r);
        return s
      }, i.filter = function (n) {
        return py((function (e) {
          if (e >= e) for (; t(e), !n(e);) e.setTime(e - 1)
        }), (function (t, r) {
          if (t >= t) if (r < 0) for (; ++r <= 0;) for (; e(t, -1), !n(t);) ; else for (; --r >= 0;) for (; e(t, 1), !n(t);) ;
        }))
      }, n && (i.count = function (e, r) {
        return fy.setTime(+e), dy.setTime(+r), t(fy), t(dy), Math.floor(n(fy, dy))
      }, i.every = function (t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (e) {
          return r(e) % t == 0
        } : function (e) {
          return i.count(0, e) % t == 0
        }) : i : null
      }), i
    }

    var vy = py((function (t) {
      t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
    }), (function (t, e) {
      t.setFullYear(t.getFullYear() + e)
    }), (function (t, e) {
      return e.getFullYear() - t.getFullYear()
    }), (function (t) {
      return t.getFullYear()
    }));
    vy.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? py((function (e) {
        e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
      }), (function (e, n) {
        e.setFullYear(e.getFullYear() + n * t)
      })) : null
    };
    var gy = vy;

    function yy(t) {
      return py((function (e) {
        e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0)
      }), (function (t, e) {
        t.setDate(t.getDate() + 7 * e)
      }), (function (t, e) {
        return (e - t - 6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) / 6048e5
      }))
    }

    py((function (t) {
      t.setDate(1), t.setHours(0, 0, 0, 0)
    }), (function (t, e) {
      t.setMonth(t.getMonth() + e)
    }), (function (t, e) {
      return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
    }), (function (t) {
      return t.getMonth()
    }));
    var my = yy(0), _y = yy(1), ky = (yy(2), yy(3), yy(4)), by = (yy(5), yy(6), py((function (t) {
      t.setHours(0, 0, 0, 0)
    }), (function (t, e) {
      t.setDate(t.getDate() + e)
    }), (function (t, e) {
      return (e - t - 6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5
    }), (function (t) {
      return t.getDate() - 1
    }))), wy = (py((function (t) {
      t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds() - 6e4 * t.getMinutes())
    }), (function (t, e) {
      t.setTime(+t + 36e5 * e)
    }), (function (t, e) {
      return (e - t) / 36e5
    }), (function (t) {
      return t.getHours()
    })), py((function (t) {
      t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds())
    }), (function (t, e) {
      t.setTime(+t + 6e4 * e)
    }), (function (t, e) {
      return (e - t) / 6e4
    }), (function (t) {
      return t.getMinutes()
    })), py((function (t) {
      t.setTime(t - t.getMilliseconds())
    }), (function (t, e) {
      t.setTime(+t + 1e3 * e)
    }), (function (t, e) {
      return (e - t) / 1e3
    }), (function (t) {
      return t.getUTCSeconds()
    })), py((function () {
    }), (function (t, e) {
      t.setTime(+t + e)
    }), (function (t, e) {
      return e - t
    })));

    function Cy(t) {
      return py((function (e) {
        e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0)
      }), (function (t, e) {
        t.setUTCDate(t.getUTCDate() + 7 * e)
      }), (function (t, e) {
        return (e - t) / 6048e5
      }))
    }

    wy.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? py((function (e) {
        e.setTime(Math.floor(e / t) * t)
      }), (function (e, n) {
        e.setTime(+e + n * t)
      }), (function (e, n) {
        return (n - e) / t
      })) : wy : null
    };
    var xy = Cy(0), Sy = Cy(1), Ty = (Cy(2), Cy(3), Cy(4)), Ey = (Cy(5), Cy(6), py((function (t) {
      t.setUTCHours(0, 0, 0, 0)
    }), (function (t, e) {
      t.setUTCDate(t.getUTCDate() + e)
    }), (function (t, e) {
      return (e - t) / 864e5
    }), (function (t) {
      return t.getUTCDate() - 1
    }))), Ay = py((function (t) {
      t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
    }), (function (t, e) {
      t.setUTCFullYear(t.getUTCFullYear() + e)
    }), (function (t, e) {
      return e.getUTCFullYear() - t.getUTCFullYear()
    }), (function (t) {
      return t.getUTCFullYear()
    }));
    Ay.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? py((function (e) {
        e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
      }), (function (e, n) {
        e.setUTCFullYear(e.getUTCFullYear() + n * t)
      })) : null
    };
    var Oy = Ay, Ly = {"-": "", _: " ", 0: "0"}, Py = /[\\^$*+?|[\]().{}]/g;

    function My(t, e, n) {
      var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", a = i.length;
      return r + (a < n ? new Array(n - a + 1).join(e) + i : i)
    }

    function Dy(t) {
      return t.replace(Py, "\\$&")
    }

    function Iy(t) {
      return new RegExp("^(?:" + t.map(Dy).join("|") + ")", "i")
    }

    function Ry(t) {
      for (var e = {}, n = -1, r = t.length; ++n < r;) e[t[n].toLowerCase()] = n;
      return e
    }

    function Fy(t, e) {
      return My(t.getDate(), e, 2)
    }

    function Ny(t, e) {
      return My(t.getHours(), e, 2)
    }

    function jy(t, e) {
      return My(t.getHours() % 12 || 12, e, 2)
    }

    function Hy(t, e) {
      return My(1 + by.count(gy(t), t), e, 3)
    }

    function Uy(t, e) {
      return My(t.getMilliseconds(), e, 3)
    }

    function zy(t, e) {
      return Uy(t, e) + "000"
    }

    function Vy(t, e) {
      return My(t.getMonth() + 1, e, 2)
    }

    function By(t, e) {
      return My(t.getMinutes(), e, 2)
    }

    function qy(t, e) {
      return My(t.getSeconds(), e, 2)
    }

    function Wy(t) {
      var e = t.getDay();
      return 0 === e ? 7 : e
    }

    function Gy(t, e) {
      return My(my.count(gy(t) - 1, t), e, 2)
    }

    function Qy(t, e) {
      var n = t.getDay();
      return t = n >= 4 || 0 === n ? ky(t) : ky.ceil(t), My(ky.count(gy(t), t) + (4 === gy(t).getDay()), e, 2)
    }

    function Yy(t) {
      return t.getDay()
    }

    function Zy(t, e) {
      return My(_y.count(gy(t) - 1, t), e, 2)
    }

    function Xy(t, e) {
      return My(t.getFullYear() % 100, e, 2)
    }

    function Ky(t, e) {
      return My(t.getFullYear() % 1e4, e, 4)
    }

    function $y(t) {
      var e = t.getTimezoneOffset();
      return (e > 0 ? "-" : (e *= -1, "+")) + My(e / 60 | 0, "0", 2) + My(e % 60, "0", 2)
    }

    function Jy(t, e) {
      return My(t.getUTCDate(), e, 2)
    }

    function tm(t, e) {
      return My(t.getUTCHours(), e, 2)
    }

    function em(t, e) {
      return My(t.getUTCHours() % 12 || 12, e, 2)
    }

    function nm(t, e) {
      return My(1 + Ey.count(Oy(t), t), e, 3)
    }

    function rm(t, e) {
      return My(t.getUTCMilliseconds(), e, 3)
    }

    function im(t, e) {
      return rm(t, e) + "000"
    }

    function am(t, e) {
      return My(t.getUTCMonth() + 1, e, 2)
    }

    function om(t, e) {
      return My(t.getUTCMinutes(), e, 2)
    }

    function sm(t, e) {
      return My(t.getUTCSeconds(), e, 2)
    }

    function lm(t) {
      var e = t.getUTCDay();
      return 0 === e ? 7 : e
    }

    function um(t, e) {
      return My(xy.count(Oy(t) - 1, t), e, 2)
    }

    function cm(t, e) {
      var n = t.getUTCDay();
      return t = n >= 4 || 0 === n ? Ty(t) : Ty.ceil(t), My(Ty.count(Oy(t), t) + (4 === Oy(t).getUTCDay()), e, 2)
    }

    function hm(t) {
      return t.getUTCDay()
    }

    function fm(t, e) {
      return My(Sy.count(Oy(t) - 1, t), e, 2)
    }

    function dm(t, e) {
      return My(t.getUTCFullYear() % 100, e, 2)
    }

    function pm(t, e) {
      return My(t.getUTCFullYear() % 1e4, e, 4)
    }

    function vm() {
      return "+0000"
    }

    function gm() {
      return "%"
    }

    function ym(t) {
      return +t
    }

    function mm(t) {
      return Math.floor(+t / 1e3)
    }

    !function (t) {
      var e = t.dateTime, n = t.date, r = t.time, i = t.periods, a = t.days, o = t.shortDays, s = t.months,
        l = t.shortMonths, u = (Iy(i), Ry(i), Iy(a), Ry(a), Iy(o), Ry(o), Iy(s), Ry(s), Iy(l), Ry(l), {
          a: function (t) {
            return o[t.getDay()]
          }, A: function (t) {
            return a[t.getDay()]
          }, b: function (t) {
            return l[t.getMonth()]
          }, B: function (t) {
            return s[t.getMonth()]
          }, c: null, d: Fy, e: Fy, f: zy, H: Ny, I: jy, j: Hy, L: Uy, m: Vy, M: By, p: function (t) {
            return i[+(t.getHours() >= 12)]
          }, q: function (t) {
            return 1 + ~~(t.getMonth() / 3)
          }, Q: ym, s: mm, S: qy, u: Wy, U: Gy, V: Qy, w: Yy, W: Zy, x: null, X: null, y: Xy, Y: Ky, Z: $y, "%": gm
        }), c = {
          a: function (t) {
            return o[t.getUTCDay()]
          }, A: function (t) {
            return a[t.getUTCDay()]
          }, b: function (t) {
            return l[t.getUTCMonth()]
          }, B: function (t) {
            return s[t.getUTCMonth()]
          }, c: null, d: Jy, e: Jy, f: im, H: tm, I: em, j: nm, L: rm, m: am, M: om, p: function (t) {
            return i[+(t.getUTCHours() >= 12)]
          }, q: function (t) {
            return 1 + ~~(t.getUTCMonth() / 3)
          }, Q: ym, s: mm, S: sm, u: lm, U: um, V: cm, w: hm, W: fm, x: null, X: null, y: dm, Y: pm, Z: vm, "%": gm
        };

      function h(t, e) {
        return function (n) {
          var r, i, a, o = [], s = -1, l = 0, u = t.length;
          for (n instanceof Date || (n = new Date(+n)); ++s < u;) 37 === t.charCodeAt(s) && (o.push(t.slice(l, s)), null != (i = Ly[r = t.charAt(++s)]) ? r = t.charAt(++s) : i = "e" === r ? " " : "0", (a = e[r]) && (r = a(n, i)), o.push(r), l = s + 1);
          return o.push(t.slice(l, s)), o.join("")
        }
      }

      u.x = h(n, u), u.X = h(r, u), u.c = h(e, u), c.x = h(n, c), c.X = h(r, c), c.c = h(e, c)
    }({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    var _m, km, bm = (1 === (_m = sy).length && (km = _m, _m = function (t, e) {
      return sy(km(t), e)
    }), {
      left: function (t, e, n, r) {
        for (null == n && (n = 0), null == r && (r = t.length); n < r;) {
          var i = n + r >>> 1;
          _m(t[i], e) < 0 ? n = i + 1 : r = i
        }
        return n
      }, right: function (t, e, n, r) {
        for (null == n && (n = 0), null == r && (r = t.length); n < r;) {
          var i = n + r >>> 1;
          _m(t[i], e) > 0 ? r = i : n = i + 1
        }
        return n
      }
    }).right, wm = function (t, e) {
      return t = +t, e = +e, function (n) {
        return Math.round(t * (1 - n) + e * n)
      }
    }, Cm = function (t) {
      return +t
    }, xm = [0, 1];

    function Sm(t) {
      return t
    }

    function Tm(t, e) {
      return (e -= t = +t) ? function (n) {
        return (n - t) / e
      } : (n = isNaN(e) ? NaN : .5, function () {
        return n
      });
      var n
    }

    function Em(t, e, n) {
      var r = t[0], i = t[1], a = e[0], o = e[1];
      return i < r ? (r = Tm(i, r), a = n(o, a)) : (r = Tm(r, i), a = n(a, o)), function (t) {
        return a(r(t))
      }
    }

    function Am(t, e, n) {
      var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
      for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r;) i[o] = Tm(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
      return function (e) {
        var n = bm(t, e, 1, r) - 1;
        return a[n](i[n](e))
      }
    }

    function Om(t, e) {
      return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
    }

    function Lm() {
      return function () {
        var t, e, n, r, i, a, o = xm, s = xm, l = Zv, u = Sm;

        function c() {
          var t, e, n, l = Math.min(o.length, s.length);
          return u !== Sm && ((t = o[0]) > (e = o[l - 1]) && (n = t, t = e, e = n), u = function (n) {
            return Math.max(t, Math.min(e, n))
          }), r = l > 2 ? Am : Em, i = a = null, h
        }

        function h(e) {
          return isNaN(e = +e) ? n : (i || (i = r(o.map(t), s, l)))(t(u(e)))
        }

        return h.invert = function (n) {
          return u(e((a || (a = r(s, o.map(t), qv)))(n)))
        }, h.domain = function (t) {
          return arguments.length ? (o = Array.from(t, Cm), c()) : o.slice()
        }, h.range = function (t) {
          return arguments.length ? (s = Array.from(t), c()) : s.slice()
        }, h.rangeRound = function (t) {
          return s = Array.from(t), l = wm, c()
        }, h.clamp = function (t) {
          return arguments.length ? (u = !!t || Sm, c()) : u !== Sm
        }, h.interpolate = function (t) {
          return arguments.length ? (l = t, c()) : l
        }, h.unknown = function (t) {
          return arguments.length ? (n = t, h) : n
        }, function (n, r) {
          return t = n, e = r, c()
        }
      }()(Sm, Sm)
    }

    function Pm(t, e) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(t);
          break;
        default:
          this.range(e).domain(t)
      }
      return this
    }

    var Mm = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Dm(t) {
      if (!(e = Mm.exec(t))) throw new Error("invalid format: " + t);
      var e;
      return new Im({
        fill: e[1],
        align: e[2],
        sign: e[3],
        symbol: e[4],
        zero: e[5],
        width: e[6],
        comma: e[7],
        precision: e[8] && e[8].slice(1),
        trim: e[9],
        type: e[10]
      })
    }

    function Im(t) {
      this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
    }

    Dm.prototype = Im.prototype, Im.prototype.toString = function () {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    var Rm, Fm, Nm, jm, Hm = function (t, e) {
        if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var n, r = t.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)]
      }, Um = function (t) {
        return (t = Hm(Math.abs(t))) ? t[1] : NaN
      }, zm = function (t, e) {
        var n = Hm(t, e);
        if (!n) return t + "";
        var r = n[0], i = n[1];
        return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
      }, Vm = {
        "%": function (t, e) {
          return (100 * t).toFixed(e)
        }, b: function (t) {
          return Math.round(t).toString(2)
        }, c: function (t) {
          return t + ""
        }, d: function (t) {
          return Math.round(t).toString(10)
        }, e: function (t, e) {
          return t.toExponential(e)
        }, f: function (t, e) {
          return t.toFixed(e)
        }, g: function (t, e) {
          return t.toPrecision(e)
        }, o: function (t) {
          return Math.round(t).toString(8)
        }, p: function (t, e) {
          return zm(100 * t, e)
        }, r: zm, s: function (t, e) {
          var n = Hm(t, e);
          if (!n) return t + "";
          var r = n[0], i = n[1], a = i - (Rm = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1, o = r.length;
          return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Hm(t, Math.max(0, e + a - 1))[0]
        }, X: function (t) {
          return Math.round(t).toString(16).toUpperCase()
        }, x: function (t) {
          return Math.round(t).toString(16)
        }
      }, Bm = function (t) {
        return t
      }, qm = Array.prototype.map,
      Wm = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function Gm(t) {
      var e = t.domain;
      return t.ticks = function (t) {
        var n = e();
        return function (t, e, n) {
          var r, i, a, o, s = -1;
          if (n = +n, (t = +t) == (e = +e) && n > 0) return [t];
          if ((r = e < t) && (i = t, t = e, e = i), 0 === (o = hy(t, e, n)) || !isFinite(o)) return [];
          if (o > 0) for (t = Math.ceil(t / o), e = Math.floor(e / o), a = new Array(i = Math.ceil(e - t + 1)); ++s < i;) a[s] = (t + s) * o; else for (t = Math.floor(t * o), e = Math.ceil(e * o), a = new Array(i = Math.ceil(t - e + 1)); ++s < i;) a[s] = (t - s) / o;
          return r && a.reverse(), a
        }(n[0], n[n.length - 1], null == t ? 10 : t)
      }, t.tickFormat = function (t, n) {
        var r = e();
        return function (t, e, n, r) {
          var i, a = function (t, e, n) {
            var r = Math.abs(e - t) / Math.max(0, n), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), a = r / i;
            return a >= ly ? i *= 10 : a >= uy ? i *= 5 : a >= cy && (i *= 2), e < t ? -i : i
          }(t, e, n);
          switch ((r = Dm(null == r ? ",f" : r)).type) {
            case"s":
              var o = Math.max(Math.abs(t), Math.abs(e));
              return null != r.precision || isNaN(i = function (t, e) {
                return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Um(e) / 3))) - Um(Math.abs(t)))
              }(a, o)) || (r.precision = i), jm(r, o);
            case"":
            case"e":
            case"g":
            case"p":
            case"r":
              null != r.precision || isNaN(i = function (t, e) {
                return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Um(e) - Um(t)) + 1
              }(a, Math.max(Math.abs(t), Math.abs(e)))) || (r.precision = i - ("e" === r.type));
              break;
            case"f":
            case"%":
              null != r.precision || isNaN(i = function (t) {
                return Math.max(0, -Um(Math.abs(t)))
              }(a)) || (r.precision = i - 2 * ("%" === r.type))
          }
          return Nm(r)
        }(r[0], r[r.length - 1], null == t ? 10 : t, n)
      }, t.nice = function (n) {
        null == n && (n = 10);
        var r, i = e(), a = 0, o = i.length - 1, s = i[a], l = i[o];
        return l < s && (r = s, s = l, l = r, r = a, a = o, o = r), (r = hy(s, l, n)) > 0 ? r = hy(s = Math.floor(s / r) * r, l = Math.ceil(l / r) * r, n) : r < 0 && (r = hy(s = Math.ceil(s * r) / r, l = Math.floor(l * r) / r, n)), r > 0 ? (i[a] = Math.floor(s / r) * r, i[o] = Math.ceil(l / r) * r, e(i)) : r < 0 && (i[a] = Math.ceil(s * r) / r, i[o] = Math.floor(l * r) / r, e(i)), t
      }, t
    }

    function Qm() {
      var t = Lm();
      return t.copy = function () {
        return Om(t, Qm())
      }, Pm.apply(t, arguments), Gm(t)
    }

    Fm = function (t) {
      var e, n,
        r = void 0 === t.grouping || void 0 === t.thousands ? Bm : (e = qm.call(t.grouping, Number), n = t.thousands + "", function (t, r) {
          for (var i = t.length, a = [], o = 0, s = e[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(t.substring(i -= s, i + s)), !((l += s + 1) > r));) s = e[o = (o + 1) % e.length];
          return a.reverse().join(n)
        }), i = void 0 === t.currency ? "" : t.currency[0] + "", a = void 0 === t.currency ? "" : t.currency[1] + "",
        o = void 0 === t.decimal ? "." : t.decimal + "", s = void 0 === t.numerals ? Bm : function (t) {
          return function (e) {
            return e.replace(/[0-9]/g, (function (e) {
              return t[+e]
            }))
          }
        }(qm.call(t.numerals, String)), l = void 0 === t.percent ? "%" : t.percent + "",
        u = void 0 === t.minus ? "-" : t.minus + "", c = void 0 === t.nan ? "NaN" : t.nan + "";

      function h(t) {
        var e = (t = Dm(t)).fill, n = t.align, h = t.sign, f = t.symbol, d = t.zero, p = t.width, v = t.comma,
          g = t.precision, y = t.trim, m = t.type;
        "n" === m ? (v = !0, m = "g") : Vm[m] || (void 0 === g && (g = 12), y = !0, m = "g"), (d || "0" === e && "=" === n) && (d = !0, e = "0", n = "=");
        var _ = "$" === f ? i : "#" === f && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "",
          k = "$" === f ? a : /[%p]/.test(m) ? l : "", b = Vm[m], w = /[defgprs%]/.test(m);

        function C(t) {
          var i, a, l, f = _, C = k;
          if ("c" === m) C = b(t) + C, t = ""; else {
            var x = (t = +t) < 0 || 1 / t < 0;
            if (t = isNaN(t) ? c : b(Math.abs(t), g), y && (t = function (t) {
              t:for (var e, n = t.length, r = 1, i = -1; r < n; ++r) switch (t[r]) {
                case".":
                  i = e = r;
                  break;
                case"0":
                  0 === i && (i = r), e = r;
                  break;
                default:
                  if (!+t[r]) break t;
                  i > 0 && (i = 0)
              }
              return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t
            }(t)), x && 0 == +t && "+" !== h && (x = !1), f = (x ? "(" === h ? h : u : "-" === h || "(" === h ? "" : h) + f, C = ("s" === m ? Wm[8 + Rm / 3] : "") + C + (x && "(" === h ? ")" : ""), w) for (i = -1, a = t.length; ++i < a;) if (48 > (l = t.charCodeAt(i)) || l > 57) {
              C = (46 === l ? o + t.slice(i + 1) : t.slice(i)) + C, t = t.slice(0, i);
              break
            }
          }
          v && !d && (t = r(t, 1 / 0));
          var S = f.length + t.length + C.length, T = S < p ? new Array(p - S + 1).join(e) : "";
          switch (v && d && (t = r(T + t, T.length ? p - C.length : 1 / 0), T = ""), n) {
            case"<":
              t = f + t + C + T;
              break;
            case"=":
              t = f + T + t + C;
              break;
            case"^":
              t = T.slice(0, S = T.length >> 1) + f + t + C + T.slice(S);
              break;
            default:
              t = T + f + t + C
          }
          return s(t)
        }

        return g = void 0 === g ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g)), C.toString = function () {
          return t + ""
        }, C
      }

      return {
        format: h, formatPrefix: function (t, e) {
          var n = h(((t = Dm(t)).type = "f", t)), r = 3 * Math.max(-8, Math.min(8, Math.floor(Um(e) / 3))),
            i = Math.pow(10, -r), a = Wm[8 + r / 3];
          return function (t) {
            return n(i * t) + a
          }
        }
      }
    }({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""],
      minus: "-"
    }), Nm = Fm.format, jm = Fm.formatPrefix;
    var Ym = function (t, e, n) {
      t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
      for (var r = -1, i = 0 | Math.max(0, Math.ceil((e - t) / n)), a = new Array(i); ++r < i;) a[r] = t + r * n;
      return a
    }, Zm = Symbol("implicit");

    function Xm() {
      var t = new Map, e = [], n = [], r = Zm;

      function i(i) {
        var a = i + "", o = t.get(a);
        if (!o) {
          if (r !== Zm) return r;
          t.set(a, o = e.push(i))
        }
        return n[(o - 1) % n.length]
      }

      return i.domain = function (n) {
        if (!arguments.length) return e.slice();
        e = [], t = new Map;
        var r, a = _createForOfIteratorHelper(n);
        try {
          for (a.s(); !(r = a.n()).done;) {
            var o = r.value, s = o + "";
            t.has(s) || t.set(s, e.push(o))
          }
        } catch (l) {
          a.e(l)
        } finally {
          a.f()
        }
        return i
      }, i.range = function (t) {
        return arguments.length ? (n = Array.from(t), i) : n.slice()
      }, i.unknown = function (t) {
        return arguments.length ? (r = t, i) : r
      }, i.copy = function () {
        return Xm(e, n).unknown(r)
      }, Pm.apply(i, arguments), i
    }

    function Km() {
      var t, e, n = Xm().unknown(void 0), r = n.domain, i = n.range, a = 0, o = 1, s = !1, l = 0, u = 0, c = .5;

      function h() {
        var n = r().length, h = o < a, f = h ? o : a, d = h ? a : o;
        t = (d - f) / Math.max(1, n - l + 2 * u), s && (t = Math.floor(t)), f += (d - f - t * (n - l)) * c, e = t * (1 - l), s && (f = Math.round(f), e = Math.round(e));
        var p = Ym(n).map((function (e) {
          return f + t * e
        }));
        return i(h ? p.reverse() : p)
      }

      return delete n.unknown, n.domain = function (t) {
        return arguments.length ? (r(t), h()) : r()
      }, n.range = function (t) {
        var e;
        return arguments.length ? (e = _slicedToArray(t, 2), a = e[0], o = e[1], a = +a, o = +o, h()) : [a, o]
      }, n.rangeRound = function (t) {
        var e;
        return e = _slicedToArray(t, 2), a = e[0], o = e[1], a = +a, o = +o, s = !0, h()
      }, n.bandwidth = function () {
        return e
      }, n.step = function () {
        return t
      }, n.round = function (t) {
        return arguments.length ? (s = !!t, h()) : s
      }, n.padding = function (t) {
        return arguments.length ? (l = Math.min(1, u = +t), h()) : l
      }, n.paddingInner = function (t) {
        return arguments.length ? (l = Math.min(1, t), h()) : l
      }, n.paddingOuter = function (t) {
        return arguments.length ? (u = +t, h()) : u
      }, n.align = function (t) {
        return arguments.length ? (c = Math.max(0, Math.min(1, t)), h()) : c
      }, n.copy = function () {
        return Km(r(), [a, o]).round(s).paddingInner(l).paddingOuter(u).align(c)
      }, Pm.apply(h(), arguments)
    }

    function $m(t, e) {
      var n;
      if (void 0 === e) {
        var r, i = _createForOfIteratorHelper(t);
        try {
          for (i.s(); !(r = i.n()).done;) {
            var a = r.value;
            null != a && (n < a || void 0 === n && a >= a) && (n = a)
          }
        } catch (c) {
          i.e(c)
        } finally {
          i.f()
        }
      } else {
        var o, s = -1, l = _createForOfIteratorHelper(t);
        try {
          for (l.s(); !(o = l.n()).done;) {
            var u = o.value;
            null != (u = e(u, ++s, t)) && (n < u || void 0 === n && u >= u) && (n = u)
          }
        } catch (c) {
          l.e(c)
        } finally {
          l.f()
        }
      }
      return n
    }

    function Jm(t, e) {
      var n;
      if (void 0 === e) {
        var r, i = _createForOfIteratorHelper(t);
        try {
          for (i.s(); !(r = i.n()).done;) {
            var a = r.value;
            null != a && (n > a || void 0 === n && a >= a) && (n = a)
          }
        } catch (c) {
          i.e(c)
        } finally {
          i.f()
        }
      } else {
        var o, s = -1, l = _createForOfIteratorHelper(t);
        try {
          for (l.s(); !(o = l.n()).done;) {
            var u = o.value;
            null != (u = e(u, ++s, t)) && (n > u || void 0 === n && u >= u) && (n = u)
          }
        } catch (c) {
          l.e(c)
        } finally {
          l.f()
        }
      }
      return n
    }

    function t_(t, e, n) {
      var r = t[e];
      t[e] = t[n], t[n] = r
    }

    function e_(t, e, n) {
      if (r = (t = Float64Array.from(regeneratorRuntime.mark((function t(e, n) {
        var r, i, a, o, s, l, u;
        return regeneratorRuntime.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              if (void 0 !== n) {
                t.next = 22;
                break
              }
              r = _createForOfIteratorHelper(e), t.prev = 2, r.s();
            case 4:
              if ((i = r.n()).done) {
                t.next = 12;
                break
              }
              if (a = i.value, t.t0 = null != a && (a = +a) >= a, !t.t0) {
                t.next = 10;
                break
              }
              return t.next = 10, a;
            case 10:
              t.next = 4;
              break;
            case 12:
              t.next = 17;
              break;
            case 14:
              t.prev = 14, t.t1 = t.catch(2), r.e(t.t1);
            case 17:
              return t.prev = 17, r.f(), t.finish(17);
            case 20:
              t.next = 42;
              break;
            case 22:
              o = -1, s = _createForOfIteratorHelper(e), t.prev = 24, s.s();
            case 26:
              if ((l = s.n()).done) {
                t.next = 34;
                break
              }
              if (u = l.value, t.t2 = null != (u = n(u, ++o, e)) && (u = +u) >= u, !t.t2) {
                t.next = 32;
                break
              }
              return t.next = 32, u;
            case 32:
              t.next = 26;
              break;
            case 34:
              t.next = 39;
              break;
            case 36:
              t.prev = 36, t.t3 = t.catch(24), s.e(t.t3);
            case 39:
              return t.prev = 39, s.f(), t.finish(39);
            case 42:
            case"end":
              return t.stop()
          }
        }), t, null, [[2, 14, 17, 20], [24, 36, 39, 42]])
      }))(t, n))).length) {
        if ((e = +e) <= 0 || r < 2) return Jm(t);
        if (e >= 1) return $m(t);
        var r, i = (r - 1) * e, a = Math.floor(i), o = $m(function t(e, n) {
          for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.length - 1, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : sy; i > r;) {
            if (i - r > 600) {
              var o = i - r + 1, s = n - r + 1, l = Math.log(o), u = .5 * Math.exp(2 * l / 3),
                c = .5 * Math.sqrt(l * u * (o - u) / o) * (s - o / 2 < 0 ? -1 : 1);
              t(e, n, Math.max(r, Math.floor(n - s * u / o + c)), Math.min(i, Math.floor(n + (o - s) * u / o + c)), a)
            }
            var h = e[n], f = r, d = i;
            for (t_(e, r, n), a(e[i], h) > 0 && t_(e, r, i); f < d;) {
              for (t_(e, f, d), ++f, --d; a(e[f], h) < 0;) ++f;
              for (; a(e[d], h) > 0;) --d
            }
            0 === a(e[r], h) ? t_(e, r, d) : t_(e, ++d, i), d <= n && (r = d + 1), n <= d && (i = d - 1)
          }
          return e
        }(t, a).subarray(0, a + 1));
        return o + (Jm(t.subarray(a + 1)) - o) * (i - a)
      }
    }

    var n_ = Math.PI, r_ = 2 * n_, i_ = r_ - 1e-6;

    function a_() {
      this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
    }

    function o_() {
      return new a_
    }

    a_.prototype = o_.prototype = {
      constructor: a_, moveTo: function (t, e) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e)
      }, closePath: function () {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
      }, lineTo: function (t, e) {
        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e)
      }, quadraticCurveTo: function (t, e, n, r) {
        this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r)
      }, bezierCurveTo: function (t, e, n, r, i, a) {
        this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a)
      }, arcTo: function (t, e, n, r, i) {
        var a = this._x1, o = this._y1, s = (n = +n) - (t = +t), l = (r = +r) - (e = +e), u = a - t, c = o - e,
          h = u * u + c * c;
        if ((i = +i) < 0) throw new Error("negative radius: " + i);
        if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e); else if (h > 1e-6) if (Math.abs(c * s - l * u) > 1e-6 && i) {
          var f = n - a, d = r - o, p = s * s + l * l, v = f * f + d * d, g = Math.sqrt(p), y = Math.sqrt(h),
            m = i * Math.tan((n_ - Math.acos((p + h - v) / (2 * g * y))) / 2), _ = m / y, k = m / g;
          Math.abs(_ - 1) > 1e-6 && (this._ += "L" + (t + _ * u) + "," + (e + _ * c)), this._ += "A" + i + "," + i + ",0,0," + +(c * f > u * d) + "," + (this._x1 = t + k * s) + "," + (this._y1 = e + k * l)
        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e)
      }, arc: function (t, e, n, r, i, a) {
        t = +t, e = +e, a = !!a;
        var o = (n = +n) * Math.cos(r), s = n * Math.sin(r), l = t + o, u = e + s, c = 1 ^ a, h = a ? r - i : i - r;
        if (n < 0) throw new Error("negative radius: " + n);
        null === this._x1 ? this._ += "M" + l + "," + u : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - u) > 1e-6) && (this._ += "L" + l + "," + u), n && (h < 0 && (h = h % r_ + r_), h > i_ ? this._ += "A" + n + "," + n + ",0,1," + c + "," + (t - o) + "," + (e - s) + "A" + n + "," + n + ",0,1," + c + "," + (this._x1 = l) + "," + (this._y1 = u) : h > 1e-6 && (this._ += "A" + n + "," + n + ",0," + +(h >= n_) + "," + c + "," + (this._x1 = t + n * Math.cos(i)) + "," + (this._y1 = e + n * Math.sin(i))))
      }, rect: function (t, e, n, r) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z"
      }, toString: function () {
        return this._
      }
    };
    var s_ = o_, l_ = function (t) {
      return function () {
        return t
      }
    }, u_ = function () {
    };

    function c_(t, e, n) {
      t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - n), t._x2, t._y2)
    }

    function h_(t, e) {
      this._context = t, this._k = (1 - e) / 6
    }

    function f_(t, e) {
      this._context = t, this._k = (1 - e) / 6
    }

    h_.prototype = {
      areaStart: function () {
        this._line = 0
      }, areaEnd: function () {
        this._line = NaN
      }, lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
      }, lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            c_(this, this._x1, this._y1)
        }
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      }, point: function (t, e) {
        switch (t = +t, e = +e, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
            break;
          case 1:
            this._point = 2, this._x1 = t, this._y1 = e;
            break;
          case 2:
            this._point = 3;
          default:
            c_(this, t, e)
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
      }
    }, function t(e) {
      function n(t) {
        return new h_(t, e)
      }

      return n.tension = function (e) {
        return t(+e)
      }, n
    }(0), f_.prototype = {
      areaStart: u_, areaEnd: u_, lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
      }, lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
        }
      }, point: function (t, e) {
        switch (t = +t, e = +e, this._point) {
          case 0:
            this._point = 1, this._x3 = t, this._y3 = e;
            break;
          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
            break;
          case 2:
            this._point = 3, this._x5 = t, this._y5 = e;
            break;
          default:
            c_(this, t, e)
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
      }
    }, function t(e) {
      function n(t) {
        return new f_(t, e)
      }

      return n.tension = function (e) {
        return t(+e)
      }, n
    }(0);
    var d_ = Math.abs, p_ = Math.atan2, v_ = Math.cos, g_ = Math.max, y_ = Math.min, m_ = Math.sin, __ = Math.sqrt,
      k_ = Math.PI, b_ = k_ / 2, w_ = 2 * k_;

    function C_(t) {
      return t > 1 ? 0 : t < -1 ? k_ : Math.acos(t)
    }

    function x_(t) {
      return t >= 1 ? b_ : t <= -1 ? -b_ : Math.asin(t)
    }

    function S_(t) {
      return t.innerRadius
    }

    function T_(t) {
      return t.outerRadius
    }

    function E_(t) {
      return t.startAngle
    }

    function A_(t) {
      return t.endAngle
    }

    function O_(t) {
      return t && t.padAngle
    }

    function L_(t, e, n, r, i, a, o, s) {
      var l = n - t, u = r - e, c = o - i, h = s - a, f = h * l - c * u;
      if (!(f * f < 1e-12)) return [t + (f = (c * (e - a) - h * (t - i)) / f) * l, e + f * u]
    }

    function P_(t, e, n, r, i, a, o) {
      var s = t - n, l = e - r, u = (o ? a : -a) / __(s * s + l * l), c = u * l, h = -u * s, f = t + c, d = e + h,
        p = n + c, v = r + h, g = (f + p) / 2, y = (d + v) / 2, m = p - f, _ = v - d, k = m * m + _ * _, b = i - a,
        w = f * v - p * d, C = (_ < 0 ? -1 : 1) * __(g_(0, b * b * k - w * w)), x = (w * _ - m * C) / k,
        S = (-w * m - _ * C) / k, T = (w * _ + m * C) / k, E = (-w * m + _ * C) / k, A = x - g, O = S - y, L = T - g,
        P = E - y;
      return A * A + O * O > L * L + P * P && (x = T, S = E), {
        cx: x,
        cy: S,
        x01: -c,
        y01: -h,
        x11: x * (i / b - 1),
        y11: S * (i / b - 1)
      }
    }

    var M_ = function () {
      var t = S_, e = T_, n = l_(0), r = null, i = E_, a = A_, o = O_, s = null;

      function l() {
        var l, u, c = +t.apply(this, arguments), h = +e.apply(this, arguments), f = i.apply(this, arguments) - b_,
          d = a.apply(this, arguments) - b_, p = d_(d - f), v = d > f;
        if (s || (s = l = s_()), h < c && (u = h, h = c, c = u), h > 1e-12) if (p > w_ - 1e-12) s.moveTo(h * v_(f), h * m_(f)), s.arc(0, 0, h, f, d, !v), c > 1e-12 && (s.moveTo(c * v_(d), c * m_(d)), s.arc(0, 0, c, d, f, v)); else {
          var g, y, m = f, _ = d, k = f, b = d, w = p, C = p, x = o.apply(this, arguments) / 2,
            S = x > 1e-12 && (r ? +r.apply(this, arguments) : __(c * c + h * h)),
            T = y_(d_(h - c) / 2, +n.apply(this, arguments)), E = T, A = T;
          if (S > 1e-12) {
            var O = x_(S / c * m_(x)), L = x_(S / h * m_(x));
            (w -= 2 * O) > 1e-12 ? (k += O *= v ? 1 : -1, b -= O) : (w = 0, k = b = (f + d) / 2), (C -= 2 * L) > 1e-12 ? (m += L *= v ? 1 : -1, _ -= L) : (C = 0, m = _ = (f + d) / 2)
          }
          var P = h * v_(m), M = h * m_(m), D = c * v_(b), I = c * m_(b);
          if (T > 1e-12) {
            var R, F = h * v_(_), N = h * m_(_), j = c * v_(k), H = c * m_(k);
            if (p < k_ && (R = L_(P, M, j, H, F, N, D, I))) {
              var U = P - R[0], z = M - R[1], V = F - R[0], B = N - R[1],
                q = 1 / m_(C_((U * V + z * B) / (__(U * U + z * z) * __(V * V + B * B))) / 2),
                W = __(R[0] * R[0] + R[1] * R[1]);
              E = y_(T, (c - W) / (q - 1)), A = y_(T, (h - W) / (q + 1))
            }
          }
          C > 1e-12 ? A > 1e-12 ? (g = P_(j, H, P, M, h, A, v), y = P_(F, N, D, I, h, A, v), s.moveTo(g.cx + g.x01, g.cy + g.y01), A < T ? s.arc(g.cx, g.cy, A, p_(g.y01, g.x01), p_(y.y01, y.x01), !v) : (s.arc(g.cx, g.cy, A, p_(g.y01, g.x01), p_(g.y11, g.x11), !v), s.arc(0, 0, h, p_(g.cy + g.y11, g.cx + g.x11), p_(y.cy + y.y11, y.cx + y.x11), !v), s.arc(y.cx, y.cy, A, p_(y.y11, y.x11), p_(y.y01, y.x01), !v))) : (s.moveTo(P, M), s.arc(0, 0, h, m, _, !v)) : s.moveTo(P, M), c > 1e-12 && w > 1e-12 ? E > 1e-12 ? (g = P_(D, I, F, N, c, -E, v), y = P_(P, M, j, H, c, -E, v), s.lineTo(g.cx + g.x01, g.cy + g.y01), E < T ? s.arc(g.cx, g.cy, E, p_(g.y01, g.x01), p_(y.y01, y.x01), !v) : (s.arc(g.cx, g.cy, E, p_(g.y01, g.x01), p_(g.y11, g.x11), !v), s.arc(0, 0, c, p_(g.cy + g.y11, g.cx + g.x11), p_(y.cy + y.y11, y.cx + y.x11), v), s.arc(y.cx, y.cy, E, p_(y.y11, y.x11), p_(y.y01, y.x01), !v))) : s.arc(0, 0, c, b, k, v) : s.lineTo(D, I)
        } else s.moveTo(0, 0);
        if (s.closePath(), l) return s = null, l + "" || null
      }

      return l.centroid = function () {
        var n = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2,
          r = (+i.apply(this, arguments) + +a.apply(this, arguments)) / 2 - k_ / 2;
        return [v_(r) * n, m_(r) * n]
      }, l.innerRadius = function (e) {
        return arguments.length ? (t = "function" == typeof e ? e : l_(+e), l) : t
      }, l.outerRadius = function (t) {
        return arguments.length ? (e = "function" == typeof t ? t : l_(+t), l) : e
      }, l.cornerRadius = function (t) {
        return arguments.length ? (n = "function" == typeof t ? t : l_(+t), l) : n
      }, l.padRadius = function (t) {
        return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : l_(+t), l) : r
      }, l.startAngle = function (t) {
        return arguments.length ? (i = "function" == typeof t ? t : l_(+t), l) : i
      }, l.endAngle = function (t) {
        return arguments.length ? (a = "function" == typeof t ? t : l_(+t), l) : a
      }, l.padAngle = function (t) {
        return arguments.length ? (o = "function" == typeof t ? t : l_(+t), l) : o
      }, l.context = function (t) {
        return arguments.length ? (s = null == t ? null : t, l) : s
      }, l
    }, D_ = function (t, e) {
      return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    }, I_ = function (t) {
      return t
    }, R_ = function (t, e, n, r, i) {
      for (var a, o = t.children, s = -1, l = o.length, u = t.value && (r - e) / t.value; ++s < l;) (a = o[s]).y0 = n, a.y1 = i, a.x0 = e, a.x1 = e += a.value * u
    }, F_ = function (t, e, n, r, i) {
      for (var a, o = t.children, s = -1, l = o.length, u = t.value && (i - n) / t.value; ++s < l;) (a = o[s]).x0 = e, a.x1 = r, a.y0 = n, a.y1 = n += a.value * u
    };

    function N_(t) {
      var e = 0, n = t.children, r = n && n.length;
      if (r) for (; --r >= 0;) e += n[r].value; else e = 1;
      t.value = e
    }

    function j_(t, e) {
      var n, r, i, a, o, s = new V_(t), l = +t.value && (s.value = t.value), u = [s];
      for (null == e && (e = H_); n = u.pop();) if (l && (n.value = +n.data.value), (i = e(n.data)) && (o = i.length)) for (n.children = new Array(o), a = o - 1; a >= 0; --a) u.push(r = n.children[a] = new V_(i[a])), r.parent = n, r.depth = n.depth + 1;
      return s.eachBefore(z_)
    }

    function H_(t) {
      return t.children
    }

    function U_(t) {
      t.data = t.data.data
    }

    function z_(t) {
      var e = 0;
      do {
        t.height = e
      } while ((t = t.parent) && t.height < ++e)
    }

    function V_(t) {
      this.data = t, this.depth = this.height = 0, this.parent = null
    }

    !function t(e) {
      function n(t, n, r, i, a) {
        !function (t, e, n, r, i, a) {
          for (var o, s, l, u, c, h, f, d, p, v, g, y = [], m = e.children, _ = 0, k = 0, b = m.length, w = e.value; _ < b;) {
            l = i - n, u = a - r;
            do {
              c = m[k++].value
            } while (!c && k < b);
            for (h = f = c, g = c * c * (v = Math.max(u / l, l / u) / (w * t)), p = Math.max(f / g, g / h); k < b; ++k) {
              if (c += s = m[k].value, s < h && (h = s), s > f && (f = s), g = c * c * v, (d = Math.max(f / g, g / h)) > p) {
                c -= s;
                break
              }
              p = d
            }
            y.push(o = {
              value: c,
              dice: l < u,
              children: m.slice(_, k)
            }), o.dice ? R_(o, n, r, i, w ? r += u * c / w : a) : F_(o, n, r, w ? n += l * c / w : i, a), w -= c, _ = k
          }
        }(e, t, n, r, i, a)
      }

      return n.ratio = function (e) {
        return t((e = +e) > 1 ? e : 1)
      }, n
    }((1 + Math.sqrt(5)) / 2), V_.prototype = j_.prototype = {
      constructor: V_, count: function () {
        return this.eachAfter(N_)
      }, each: function (t) {
        var e, n, r, i, a = this, o = [a];
        do {
          for (e = o.reverse(), o = []; a = e.pop();) if (t(a), n = a.children) for (r = 0, i = n.length; r < i; ++r) o.push(n[r])
        } while (o.length);
        return this
      }, eachAfter: function (t) {
        for (var e, n, r, i = this, a = [i], o = []; i = a.pop();) if (o.push(i), e = i.children) for (n = 0, r = e.length; n < r; ++n) a.push(e[n]);
        for (; i = o.pop();) t(i);
        return this
      }, eachBefore: function (t) {
        for (var e, n, r = this, i = [r]; r = i.pop();) if (t(r), e = r.children) for (n = e.length - 1; n >= 0; --n) i.push(e[n]);
        return this
      }, sum: function (t) {
        return this.eachAfter((function (e) {
          for (var n = +t(e.data) || 0, r = e.children, i = r && r.length; --i >= 0;) n += r[i].value;
          e.value = n
        }))
      }, sort: function (t) {
        return this.eachBefore((function (e) {
          e.children && e.children.sort(t)
        }))
      }, path: function (t) {
        for (var e = this, n = function (t, e) {
          if (t === e) return t;
          var n = t.ancestors(), r = e.ancestors(), i = null;
          for (t = n.pop(), e = r.pop(); t === e;) i = t, t = n.pop(), e = r.pop();
          return i
        }(e, t), r = [e]; e !== n;) r.push(e = e.parent);
        for (var i = r.length; t !== n;) r.splice(i, 0, t), t = t.parent;
        return r
      }, ancestors: function () {
        for (var t = this, e = [t]; t = t.parent;) e.push(t);
        return e
      }, descendants: function () {
        var t = [];
        return this.each((function (e) {
          t.push(e)
        })), t
      }, leaves: function () {
        var t = [];
        return this.eachBefore((function (e) {
          e.children || t.push(e)
        })), t
      }, links: function () {
        var t = this, e = [];
        return t.each((function (n) {
          n !== t && e.push({source: n.parent, target: n})
        })), e
      }, copy: function () {
        return j_(this).eachBefore(U_)
      }
    };
    var B_ = ["caretElm"];

    function q_(t, e) {
    }

    var W_ = function (t) {
      return {model: t}
    };

    function G_(t, e) {
      if (1 & t && (bo(0, "span"), vo(1, q_, 0, 0, "ng-template", 5), wo()), 2 & t) {
        var n = Oo();
        fi(1), _o("ngTemplateOutlet", n.template)("ngTemplateOutletContext", cl(2, W_, n.context))
      }
    }

    function Q_(t, e) {
      1 & t && Co(0, "span", 6), 2 & t && _o("innerHTML", Oo().title, Qr)
    }

    function Y_(t, e) {
      if (1 & t && (_n(), kn(), Co(0, "ngx-charts-scale-legend", 4)), 2 & t) {
        var n = Oo();
        _o("horizontal", n.legendOptions && "below" === n.legendOptions.position)("valueRange", n.legendOptions.domain)("colors", n.legendOptions.colors)("height", n.view[1])("width", n.legendWidth)
      }
    }

    function Z_(t, e) {
      if (1 & t) {
        var n = xo();
        _n(), kn(), bo(0, "ngx-charts-legend", 5), To("labelClick", (function (t) {
          return Ze(n), Oo().legendLabelClick.emit(t)
        }))("labelActivate", (function (t) {
          return Ze(n), Oo().legendLabelActivate.emit(t)
        }))("labelDeactivate", (function (t) {
          return Ze(n), Oo().legendLabelDeactivate.emit(t)
        })), wo()
      }
      if (2 & t) {
        var r = Oo();
        _o("horizontal", r.legendOptions && "below" === r.legendOptions.position)("data", r.legendOptions.domain)("title", r.legendOptions.title)("colors", r.legendOptions.colors)("height", r.view[1])("width", r.legendWidth)("activeEntries", r.activeEntries)
      }
    }

    var X_ = ["*"], K_ = ["ngx-charts-axis-label", ""], $_ = ["ticksel"], J_ = ["ngx-charts-x-axis-ticks", ""];

    function tk(t, e) {
      if (1 & t && (_n(), bo(0, "g", 3), bo(1, "title"), Xo(2), wo(), bo(3, "text", 4), Xo(4), wo(), wo()), 2 & t) {
        var n = e.$implicit, r = Oo();
        fo("transform", r.tickTransform(n)), fi(2), Ko(r.tickFormat(n)), fi(1), No("font-size", "12px"), fo("text-anchor", r.textAnchor)("transform", r.textTransform), fi(1), $o(" ", r.tickTrim(r.tickFormat(n)), " ")
      }
    }

    function ek(t, e) {
      if (1 & t && (_n(), bo(0, "g"), Co(1, "line", 6), wo()), 2 & t) {
        var n = Oo(2);
        fo("transform", n.gridLineTransform()), fi(1), fo("y1", 0 - n.gridLineHeight)
      }
    }

    function nk(t, e) {
      if (1 & t && (_n(), bo(0, "g"), vo(1, ek, 2, 2, "g", 5), wo()), 2 & t) {
        var n = e.$implicit, r = Oo();
        fo("transform", r.tickTransform(n)), fi(1), _o("ngIf", r.showGridLines)
      }
    }

    var rk = ["ngx-charts-x-axis", ""];

    function ik(t, e) {
      if (1 & t) {
        var n = xo();
        _n(), bo(0, "g", 2), To("dimensionsChanged", (function (t) {
          return Ze(n), Oo().emitTicksHeight(t)
        })), wo()
      }
      if (2 & t) {
        var r = Oo();
        _o("trimTicks", r.trimTicks)("rotateTicks", r.rotateTicks)("maxTickLength", r.maxTickLength)("tickFormatting", r.tickFormatting)("tickArguments", r.tickArguments)("tickStroke", r.tickStroke)("scale", r.xScale)("orient", r.xOrient)("showGridLines", r.showGridLines)("gridLineHeight", r.dims.height)("width", r.dims.width)("tickValues", r.ticks)
      }
    }

    function ak(t, e) {
      if (1 & t && (_n(), Co(0, "g", 3)), 2 & t) {
        var n = Oo();
        _o("label", n.labelText)("offset", n.labelOffset)("orient", "bottom")("height", n.dims.height)("width", n.dims.width)
      }
    }

    var ok = ["ngx-charts-y-axis-ticks", ""];

    function sk(t, e) {
      if (1 & t && (_n(), bo(0, "g", 4), bo(1, "title"), Xo(2), wo(), bo(3, "text", 5), Xo(4), wo(), wo()), 2 & t) {
        var n = e.$implicit, r = Oo();
        fo("transform", r.transform(n)), fi(2), Ko(r.tickFormat(n)), fi(1), No("font-size", "12px"), fo("dy", r.dy)("x", r.x1)("y", r.y1)("text-anchor", r.textAnchor), fi(1), $o(" ", r.tickTrim(r.tickFormat(n)), " ")
      }
    }

    function lk(t, e) {
      if (1 & t && (_n(), Co(0, "path", 6)), 2 & t) {
        var n = Oo();
        fo("d", n.referenceAreaPath)("transform", n.gridLineTransform())
      }
    }

    function uk(t, e) {
      1 & t && (_n(), Co(0, "line", 9)), 2 & t && fo("x2", Oo(3).gridLineWidth)
    }

    function ck(t, e) {
      1 & t && (_n(), Co(0, "line", 9)), 2 & t && fo("x2", 0 - Oo(3).gridLineWidth)
    }

    function hk(t, e) {
      if (1 & t && (_n(), bo(0, "g"), vo(1, uk, 1, 1, "line", 8), vo(2, ck, 1, 1, "line", 8), wo()), 2 & t) {
        var n = Oo(2);
        fo("transform", n.gridLineTransform()), fi(1), _o("ngIf", "left" === n.orient), fi(1), _o("ngIf", "right" === n.orient)
      }
    }

    function fk(t, e) {
      if (1 & t && (_n(), bo(0, "g"), vo(1, hk, 3, 3, "g", 7), wo()), 2 & t) {
        var n = e.$implicit, r = Oo();
        fo("transform", r.transform(n)), fi(1), _o("ngIf", r.showGridLines)
      }
    }

    function dk(t, e) {
      if (1 & t && (_n(), bo(0, "g"), bo(1, "title"), Xo(2), wo(), bo(3, "text", 11), Xo(4), wo(), wo()), 2 & t) {
        var n = Oo(2).$implicit, r = Oo();
        fi(2), Ko(r.tickTrim(r.tickFormat(n.value))), fi(1), fo("dy", r.dy)("y", -6)("x", r.gridLineWidth)("text-anchor", r.textAnchor), fi(1), $o(" ", n.name, " ")
      }
    }

    function pk(t, e) {
      if (1 & t && (_n(), bo(0, "g"), Co(1, "line", 10), vo(2, dk, 5, 6, "g", 7), wo()), 2 & t) {
        var n = Oo().$implicit, r = Oo();
        fo("transform", r.transform(n.value)), fi(1), fo("x2", r.gridLineWidth)("transform", r.gridLineTransform()), fi(1), _o("ngIf", r.showRefLabels)
      }
    }

    function vk(t, e) {
      if (1 & t && (_n(), bo(0, "g"), vo(1, pk, 3, 4, "g", 7), wo()), 2 & t) {
        var n = Oo();
        fi(1), _o("ngIf", n.showRefLines)
      }
    }

    var gk = ["ngx-charts-y-axis", ""];

    function yk(t, e) {
      if (1 & t) {
        var n = xo();
        _n(), bo(0, "g", 2), To("dimensionsChanged", (function (t) {
          return Ze(n), Oo().emitTicksWidth(t)
        })), wo()
      }
      if (2 & t) {
        var r = Oo();
        _o("trimTicks", r.trimTicks)("maxTickLength", r.maxTickLength)("tickFormatting", r.tickFormatting)("tickArguments", r.tickArguments)("tickValues", r.ticks)("tickStroke", r.tickStroke)("scale", r.yScale)("orient", r.yOrient)("showGridLines", r.showGridLines)("gridLineWidth", r.dims.width)("referenceLines", r.referenceLines)("showRefLines", r.showRefLines)("showRefLabels", r.showRefLabels)("height", r.dims.height)
      }
    }

    function mk(t, e) {
      if (1 & t && (_n(), Co(0, "g", 3)), 2 & t) {
        var n = Oo();
        _o("label", n.labelText)("offset", n.labelOffset)("orient", n.yOrient)("height", n.dims.height)("width", n.dims.width)
      }
    }

    var _k = ["ngx-charts-grid-panel", ""], kk = ["ngx-charts-grid-panel-series", ""];

    function bk(t, e) {
      if (1 & t && (_n(), Co(0, "g", 1)), 2 & t) {
        var n = e.$implicit;
        jo("grid-panel", !0)("odd", "odd" === n.class)("even", "even" === n.class), _o("height", n.height)("width", n.width)("x", n.x)("y", n.y)
      }
    }

    var wk = ["ngx-charts-svg-linear-gradient", ""];

    function Ck(t, e) {
      if (1 & t && (_n(), Co(0, "stop")), 2 & t) {
        var n = e.$implicit;
        No("stop-color", n.color)("stop-opacity", n.opacity), fo("offset", n.offset + "%")
      }
    }

    var xk = ["ngx-charts-svg-radial-gradient", ""];

    function Sk(t, e) {
      if (1 & t && (_n(), Co(0, "stop")), 2 & t) {
        var n = e.$implicit;
        No("stop-color", n.color)("stop-opacity", n.opacity), fo("offset", n.offset + "%")
      }
    }

    function Tk(t, e) {
      if (1 & t && (bo(0, "header", 4), bo(1, "span", 5), Xo(2), wo(), wo()), 2 & t) {
        var n = Oo();
        fi(2), Ko(n.title)
      }
    }

    function Ek(t, e) {
      if (1 & t) {
        var n = xo();
        bo(0, "li", 6), bo(1, "ngx-charts-legend-entry", 7), To("select", (function (t) {
          return Ze(n), Oo().labelClick.emit(t)
        }))("activate", (function (t) {
          return Ze(n), Oo().activate(t)
        }))("deactivate", (function (t) {
          return Ze(n), Oo().deactivate(t)
        })), wo(), wo()
      }
      if (2 & t) {
        var r = e.$implicit, i = Oo();
        fi(1), _o("label", r.label)("formattedLabel", r.formattedLabel)("color", r.color)("isActive", i.isActive(r))
      }
    }

    var Ak = ["tooltipTemplate"], Ok = function (t, e) {
      return [t, e]
    }, Lk = ["ngx-charts-bar", ""];

    function Pk(t, e) {
      if (1 & t && (_n(), bo(0, "defs"), Co(1, "g", 2), wo()), 2 & t) {
        var n = Oo();
        fi(1), _o("orientation", n.orientation)("name", n.gradientId)("stops", n.gradientStops)
      }
    }

    function Mk(t, e) {
      if (1 & t) {
        var n = xo();
        _n(), bo(0, "g", 5), To("dimensionsChanged", (function (t) {
          return Ze(n), Oo().updateXAxisHeight(t)
        })), wo()
      }
      if (2 & t) {
        var r = Oo();
        _o("xScale", r.xScale)("dims", r.dims)("showLabel", r.showXAxisLabel)("labelText", r.xAxisLabel)("trimTicks", r.trimXAxisTicks)("rotateTicks", r.rotateXAxisTicks)("maxTickLength", r.maxXAxisTickLength)("tickFormatting", r.xAxisTickFormatting)("ticks", r.xAxisTicks)("xAxisOffset", r.dataLabelMaxHeight.negative)
      }
    }

    function Dk(t, e) {
      if (1 & t) {
        var n = xo();
        _n(), bo(0, "g", 6), To("dimensionsChanged", (function (t) {
          return Ze(n), Oo().updateYAxisWidth(t)
        })), wo()
      }
      if (2 & t) {
        var r = Oo();
        _o("yScale", r.yScale)("dims", r.dims)("showGridLines", r.showGridLines)("showLabel", r.showYAxisLabel)("labelText", r.yAxisLabel)("trimTicks", r.trimYAxisTicks)("maxTickLength", r.maxYAxisTickLength)("tickFormatting", r.yAxisTickFormatting)("ticks", r.yAxisTicks)
      }
    }

    function Ik(t, e) {
      if (1 & t) {
        var n = xo();
        _n(), bo(0, "g", 6), To("dimensionsChanged", (function (t) {
          return Ze(n), Oo().updateXAxisHeight(t)
        })), wo()
      }
      if (2 & t) {
        var r = Oo();
        _o("xScale", r.groupScale)("dims", r.dims)("showLabel", r.showXAxisLabel)("labelText", r.xAxisLabel)("trimTicks", r.trimXAxisTicks)("rotateTicks", r.rotateXAxisTicks)("maxTickLength", r.maxXAxisTickLength)("tickFormatting", r.xAxisTickFormatting)("ticks", r.xAxisTicks)("xAxisOffset", r.dataLabelMaxHeight.negative)
      }
    }

    function Rk(t, e) {
      if (1 & t) {
        var n = xo();
        _n(), bo(0, "g", 7), To("dimensionsChanged", (function (t) {
          return Ze(n), Oo().updateYAxisWidth(t)
        })), wo()
      }
      if (2 & t) {
        var r = Oo();
        _o("yScale", r.valueScale)("dims", r.dims)("showGridLines", r.showGridLines)("showLabel", r.showYAxisLabel)("labelText", r.yAxisLabel)("trimTicks", r.trimYAxisTicks)("maxTickLength", r.maxYAxisTickLength)("tickFormatting", r.yAxisTickFormatting)("ticks", r.yAxisTicks)
      }
    }

    function Fk(t, e) {
      if (1 & t) {
        var n = xo();
        _n(), bo(0, "g", 8), To("select", (function (t) {
          Ze(n);
          var r = e.$implicit;
          return Oo().onClick(t, r)
        }))("activate", (function (t) {
          Ze(n);
          var r = e.$implicit;
          return Oo().onActivate(t, r)
        }))("deactivate", (function (t) {
          Ze(n);
          var r = e.$implicit;
          return Oo().onDeactivate(t, r)
        }))("dataLabelHeightChanged", (function (t) {
          Ze(n);
          var r = e.index;
          return Oo().onDataLabelMaxHeightChanged(t, r)
        })), wo()
      }
      if (2 & t) {
        var r = e.$implicit, i = Oo();
        _o("@animationState", "active")("activeEntries", i.activeEntries)("xScale", i.innerScale)("yScale", i.valueScale)("colors", i.colors)("series", r.series)("dims", i.dims)("gradient", i.gradient)("tooltipDisabled", i.tooltipDisabled)("tooltipTemplate", i.tooltipTemplate)("showDataLabel", i.showDataLabel)("dataLabelFormatting", i.dataLabelFormatting)("seriesName", r.name)("roundEdges", i.roundEdges)("animations", i.animations)("noBarWhenZero", i.noBarWhenZero), fo("transform", i.groupTransform(r))
      }
    }

    var Nk = ["ngx-charts-series-vertical", ""];

    function jk(t, e) {
      if (1 & t) {
        var n = xo();
        _n(), bo(0, "g", 2), To("select", (function (t) {
          return Ze(n), Oo().onClick(t)
        }))("activate", (function (t) {
          return Ze(n), Oo().activate.emit(t)
        }))("deactivate", (function (t) {
          return Ze(n), Oo().deactivate.emit(t)
        })), wo()
      }
      if (2 & t) {
        var r = e.$implicit, i = Oo();
        _o("@animationState", "active")("@.disabled", !i.animations)("width", r.width)("height", r.height)("x", r.x)("y", r.y)("fill", r.color)("stops", r.gradientStops)("data", r.data)("orientation", "vertical")("roundEdges", r.roundEdges)("gradient", i.gradient)("ariaLabel", r.ariaLabel)("isActive", i.isActive(r.data))("tooltipDisabled", i.tooltipDisabled)("tooltipPlacement", i.tooltipPlacement)("tooltipType", i.tooltipType)("tooltipTitle", i.tooltipTemplate ? void 0 : r.tooltipText)("tooltipTemplate", i.tooltipTemplate)("tooltipContext", r.data)("noBarWhenZero", i.noBarWhenZero)("animations", i.animations)
      }
    }

    function Hk(t, e) {
      if (1 & t) {
        var n = xo();
        _n(), bo(0, "g", 4), To("dimensionsChanged", (function (t) {
          Ze(n);
          var r = e.index;
          return Oo(2).dataLabelHeightChanged.emit({size: t, index: r})
        })), wo()
      }
      if (2 & t) {
        var r = e.$implicit, i = Oo(2);
        _o("barX", r.x)("barY", r.y)("barWidth", r.width)("barHeight", r.height)("value", r.total)("valueFormatting", i.dataLabelFormatting)("orientation", "vertical")
      }
    }

    function Uk(t, e) {
      if (1 & t && (_n(), bo(0, "g"), vo(1, Hk, 1, 7, "g", 3), wo()), 2 & t) {
        var n = Oo();
        fi(1), _o("ngForOf", n.barsForDataLabels)("ngForTrackBy", n.trackDataLabelBy)
      }
    }

    var zk = ["ngx-charts-bar-label", ""], Vk = ["ngx-charts-pie-label", ""], Bk = ["ngx-charts-pie-arc", ""];

    function qk(t, e) {
      if (1 & t && (_n(), bo(0, "defs"), Co(1, "g", 3), wo()), 2 & t) {
        var n = Oo();
        fi(1), _o("color", n.fill)("name", n.radialGradientId)("startOpacity", n.startOpacity)
      }
    }

    var Wk, Gk = ["ngx-charts-pie-series", ""];

    function Qk(t, e) {
      if (1 & t && (_n(), Co(0, "g", 3)), 2 & t) {
        var n = Oo().$implicit, r = Oo();
        _o("data", n)("radius", r.outerRadius)("color", r.color(n))("label", r.labelText(n))("labelTrim", r.trimLabels)("labelTrimSize", r.maxLabelLength)("max", r.max)("value", n.value)("explodeSlices", r.explodeSlices)("animations", r.animations)
      }
    }

    function Yk(t, e) {
      if (1 & t) {
        var n = xo();
        _n(), bo(0, "g"), vo(1, Qk, 1, 10, "g", 1), bo(2, "g", 2), To("select", (function (t) {
          return Ze(n), Oo().onClick(t)
        }))("activate", (function (t) {
          return Ze(n), Oo().activate.emit(t)
        }))("deactivate", (function (t) {
          return Ze(n), Oo().deactivate.emit(t)
        }))("dblclick", (function (t) {
          return Ze(n), Oo().dblclick.emit(t)
        })), wo(), wo()
      }
      if (2 & t) {
        var r = e.$implicit, i = Oo();
        fi(1), _o("ngIf", i.labelVisible(r)), fi(1), _o("startAngle", r.startAngle)("endAngle", r.endAngle)("innerRadius", i.innerRadius)("outerRadius", i.outerRadius)("fill", i.color(r))("value", r.data.value)("gradient", i.gradient)("data", r.data)("max", i.max)("explodeSlices", i.explodeSlices)("isActive", i.isActive(r.data))("animate", i.animations)("tooltipDisabled", i.tooltipDisabled)("tooltipPlacement", "top")("tooltipType", "tooltip")("tooltipTitle", i.getTooltipTitle(r))("tooltipTemplate", i.tooltipTemplate)("tooltipContext", r.data)
      }
    }

    var Zk, Xk = ((Zk = Wk = function () {
      function t(e, n, r) {
        _classCallCheck(this, t), this.applicationRef = e, this.componentFactoryResolver = n, this.injector = r
      }

      return _createClass(t, [{
        key: "getRootViewContainer", value: function () {
          if (this._container) return this._container;
          if (Wk.globalRootViewContainer) return Wk.globalRootViewContainer;
          if (this.applicationRef.components.length) return this.applicationRef.components[0];
          throw new Error("View Container not found! ngUpgrade needs to manually set this via setRootViewContainer or setGlobalRootViewContainer.")
        }
      }, {
        key: "setRootViewContainer", value: function (t) {
          this._container = t
        }
      }, {
        key: "getComponentRootNode", value: function (t) {
          return t.element ? t.element.nativeElement : t.hostView && t.hostView.rootNodes.length > 0 ? t.hostView.rootNodes[0] : t.location.nativeElement
        }
      }, {
        key: "getRootViewContainerNode", value: function (t) {
          return this.getComponentRootNode(t)
        }
      }, {
        key: "projectComponentBindings", value: function (t, e) {
          if (e) {
            if (void 0 !== e.inputs) {
              var n, r = _createForOfIteratorHelper(Object.getOwnPropertyNames(e.inputs));
              try {
                for (r.s(); !(n = r.n()).done;) {
                  var i = n.value;
                  t.instance[i] = e.inputs[i]
                }
              } catch (l) {
                r.e(l)
              } finally {
                r.f()
              }
            }
            if (void 0 !== e.outputs) {
              var a, o = _createForOfIteratorHelper(Object.getOwnPropertyNames(e.outputs));
              try {
                for (o.s(); !(a = o.n()).done;) {
                  var s = a.value;
                  t.instance[s] = e.outputs[s]
                }
              } catch (l) {
                o.e(l)
              } finally {
                o.f()
              }
            }
          }
          return t
        }
      }, {
        key: "appendComponent", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
          n || (n = this.getRootViewContainer());
          var r = this.getComponentRootNode(n),
            i = new Id(r, this.componentFactoryResolver, this.applicationRef, this.injector), a = new Pd(t),
            o = i.attach(a);
          return this.projectComponentBindings(o, e), o
        }
      }], [{
        key: "setGlobalRootViewContainer", value: function (t) {
          Wk.globalRootViewContainer = t
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || Zk)(Xt(_u), Xt(ks), Xt(Ja))
    }, Zk.\u0275prov = ft({token: Zk, factory: Zk.\u0275fac}), Zk.globalRootViewContainer = null, Zk);

    function Kk(t, e, n) {
      var r, i, a;
      n = n || {};
      var o = null, s = 0;

      function l() {
        s = !1 === n.leading ? 0 : +new Date, o = null, a = t.apply(r, i)
      }

      return function () {
        var u = +new Date;
        s || !1 !== n.leading || (s = u);
        var c = e - (u - s);
        return r = this, i = arguments, c <= 0 ? (clearTimeout(o), o = null, s = u, a = t.apply(r, i)) : o || !1 === n.trailing || (o = setTimeout(l, c)), a
      }
    }

    var $k = function (t) {
      return t[t.top = "top"] = "top", t[t.bottom = "bottom"] = "bottom", t[t.left = "left"] = "left", t[t.right = "right"] = "right", t
    }({});

    function Jk(t, e, n) {
      return "top" === n ? t.top - 7 : "bottom" === n ? t.top + t.height - e.height + 7 : "center" === n ? t.top + t.height / 2 - e.height / 2 : void 0
    }

    function tb(t, e, n) {
      return "left" === n ? t.left - 7 : "right" === n ? t.left + t.width - e.width + 7 : "center" === n ? t.left + t.width / 2 - e.width / 2 : void 0
    }

    var eb, nb, rb, ib, ab, ob, sb = function () {
        function t() {
          _classCallCheck(this, t)
        }

        return _createClass(t, null, [{
          key: "calculateVerticalAlignment", value: function (t, e, n) {
            var r = Jk(t, e, n);
            return r + e.height > window.innerHeight && (r = window.innerHeight - e.height), r
          }
        }, {
          key: "calculateVerticalCaret", value: function (t, e, n, r) {
            var i;
            "top" === r && (i = t.height / 2 - n.height / 2 + 7), "bottom" === r && (i = e.height - t.height / 2 - n.height / 2 - 7), "center" === r && (i = e.height / 2 - n.height / 2);
            var a = Jk(t, e, r);
            return a + e.height > window.innerHeight && (i += a + e.height - window.innerHeight), i
          }
        }, {
          key: "calculateHorizontalAlignment", value: function (t, e, n) {
            var r = tb(t, e, n);
            return r + e.width > window.innerWidth && (r = window.innerWidth - e.width), r
          }
        }, {
          key: "calculateHorizontalCaret", value: function (t, e, n, r) {
            var i;
            "left" === r && (i = t.width / 2 - n.width / 2 + 7), "right" === r && (i = e.width - t.width / 2 - n.width / 2 - 7), "center" === r && (i = e.width / 2 - n.width / 2);
            var a = tb(t, e, r);
            return a + e.width > window.innerWidth && (i += a + e.width - window.innerWidth), i
          }
        }, {
          key: "shouldFlip", value: function (t, e, n, r) {
            var i = !1;
            return "right" === n && t.left + t.width + e.width + r > window.innerWidth && (i = !0), "left" === n && t.left - e.width - r < 0 && (i = !0), "top" === n && t.top - e.height - r < 0 && (i = !0), "bottom" === n && t.top + t.height + e.height + r > window.innerHeight && (i = !0), i
          }
        }, {
          key: "positionCaret", value: function (e, n, r, i, a) {
            var o = 0, s = 0;
            return e === $k.right ? (s = -7, o = t.calculateVerticalCaret(r, n, i, a)) : e === $k.left ? (s = n.width, o = t.calculateVerticalCaret(r, n, i, a)) : e === $k.top ? (o = n.height, s = t.calculateHorizontalCaret(r, n, i, a)) : e === $k.bottom && (o = -7, s = t.calculateHorizontalCaret(r, n, i, a)), {
              top: o,
              left: s
            }
          }
        }, {
          key: "positionContent", value: function (e, n, r, i, a) {
            var o = 0, s = 0;
            return e === $k.right ? (s = r.left + r.width + i, o = t.calculateVerticalAlignment(r, n, a)) : e === $k.left ? (s = r.left - n.width - i, o = t.calculateVerticalAlignment(r, n, a)) : e === $k.top ? (o = r.top - n.height - i, s = t.calculateHorizontalAlignment(r, n, a)) : e === $k.bottom && (o = r.top + r.height + i, s = t.calculateHorizontalAlignment(r, n, a)), {
              top: o,
              left: s
            }
          }
        }, {
          key: "determinePlacement", value: function (e, n, r, i) {
            if (t.shouldFlip(r, n, e, i)) {
              if (e === $k.right) return $k.left;
              if (e === $k.left) return $k.right;
              if (e === $k.top) return $k.bottom;
              if (e === $k.bottom) return $k.top
            }
            return e
          }
        }]), t
      }(), lb = ((ob = function () {
        function t(e, n) {
          _classCallCheck(this, t), this.element = e, this.renderer = n
        }

        return _createClass(t, [{
          key: "ngAfterViewInit", value: function () {
            setTimeout(this.position.bind(this))
          }
        }, {
          key: "position", value: function () {
            var t = this, e = this.element.nativeElement, n = this.host.nativeElement.getBoundingClientRect();
            if (n.height || n.width) {
              var r = e.getBoundingClientRect();
              this.checkFlip(n, r), this.positionContent(e, n, r), this.showCaret && this.positionCaret(n, r), setTimeout((function () {
                return t.renderer.addClass(e, "animate")
              }), 1)
            }
          }
        }, {
          key: "positionContent", value: function (t, e, n) {
            var r = sb.positionContent(this.placement, n, e, this.spacing, this.alignment), i = r.top, a = r.left;
            this.renderer.setStyle(t, "top", i + "px"), this.renderer.setStyle(t, "left", a + "px")
          }
        }, {
          key: "positionCaret", value: function (t, e) {
            var n = this.caretElm.nativeElement, r = n.getBoundingClientRect(),
              i = sb.positionCaret(this.placement, e, t, r, this.alignment), a = i.top, o = i.left;
            this.renderer.setStyle(n, "top", a + "px"), this.renderer.setStyle(n, "left", o + "px")
          }
        }, {
          key: "checkFlip", value: function (t, e) {
            this.placement = sb.determinePlacement(this.placement, e, t, this.spacing)
          }
        }, {
          key: "onWindowResize", value: function () {
            this.position()
          }
        }, {
          key: "cssClasses", get: function () {
            var t = "ngx-charts-tooltip-content";
            return t += " position-" + this.placement, t += " type-" + this.type, t += " " + this.cssClass
          }
        }]), t
      }()).\u0275fac = function (t) {
        return new (t || ob)(go(bs), go(Ss))
      }, ob.\u0275cmp = pe({
        type: ob,
        selectors: [["ngx-tooltip-content"]],
        viewQuery: function (t, e) {
          var n;
          1 & t && Sl(B_, !0), 2 & t && xl(n = El()) && (e.caretElm = n.first)
        },
        hostVars: 2,
        hostBindings: function (t, e) {
          1 & t && To("resize", (function () {
            return e.onWindowResize()
          }), !1, Un), 2 & t && zo(oe, Ho, e.cssClasses, !0)
        },
        inputs: {
          placement: "placement",
          host: "host",
          showCaret: "showCaret",
          type: "type",
          alignment: "alignment",
          spacing: "spacing",
          cssClass: "cssClass",
          title: "title",
          template: "template",
          context: "context"
        },
        decls: 6,
        vars: 6,
        consts: [[3, "hidden"], ["caretElm", ""], [1, "tooltip-content"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
        template: function (t, e) {
          var n;
          1 & t && (bo(0, "div"), Co(1, "span", 0, 1), bo(3, "div", 2), vo(4, G_, 2, 4, "span", 3), vo(5, Q_, 1, 1, "span", 4), wo(), wo()), 2 & t && (fi(1), n = e.placement, zo(oe, Ho, po(Qe(), "tooltip-caret position-", n, ""), !0), _o("hidden", !e.showCaret), fi(3), _o("ngIf", !e.title), fi(1), _o("ngIf", e.title))
        },
        directives: [cc, kc],
        styles: [".ngx-charts-tooltip-content{position:fixed;border-radius:3px;z-index:5000;display:block;font-weight:400;opacity:0;pointer-events:none!important}.ngx-charts-tooltip-content.type-popover{background:#fff;color:#060709;border:1px solid #72809b;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);font-size:13px;padding:4px}.ngx-charts-tooltip-content.type-popover .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #fff}.ngx-charts-tooltip-content.type-tooltip{color:#fff;background:rgba(0,0,0,.75);font-size:12px;padding:0 10px;text-align:center;pointer-events:auto}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content .tooltip-label{display:block;line-height:1em;padding:8px 5px 5px;font-size:1em}.ngx-charts-tooltip-content .tooltip-val{display:block;font-size:1.3em;line-height:1em;padding:0 5px 8px}.ngx-charts-tooltip-content .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.position-right{transform:translate3d(10px,0,0)}.ngx-charts-tooltip-content.position-left{transform:translate3d(-10px,0,0)}.ngx-charts-tooltip-content.position-top{transform:translate3d(0,-10px,0)}.ngx-charts-tooltip-content.position-bottom{transform:translate3d(0,10px,0)}.ngx-charts-tooltip-content.animate{opacity:1;transition:opacity .3s,transform .3s;transform:translate3d(0,0,0);pointer-events:auto}.area-tooltip-container{padding:5px 0;pointer-events:none}.tooltip-item{text-align:left;line-height:1.2em;padding:5px 0}.tooltip-item .tooltip-item-color{display:inline-block;height:12px;width:12px;margin-right:5px;color:#5b646b;border-radius:3px}"],
        encapsulation: 2
      }), function (t, e, n, r) {
        var i, a = arguments.length, o = a < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, n, r); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(e, n, o) : i(e, n)) || o);
        a > 3 && o && Object.defineProperty(e, n, o)
      }([function (t, e, n) {
        return {
          configurable: !0, enumerable: n.enumerable, get: function () {
            return Object.defineProperty(this, e, {
              configurable: !0,
              enumerable: n.enumerable,
              value: Kk(n.value, 100, void 0)
            }), this[e]
          }
        }
      }], ob.prototype, "onWindowResize", null), ob), ub = ((ab = function (t) {
        _inherits(n, t);
        var e = _createSuper(n);

        function n(t) {
          var r;
          return _classCallCheck(this, n), (r = e.call(this, t)).type = lb, r
        }

        return n
      }(function () {
        function t(e) {
          _classCallCheck(this, t), this.injectionService = e, this.defaults = {}, this.components = new Map
        }

        return _createClass(t, [{
          key: "getByType", value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type;
            return this.components.get(t)
          }
        }, {
          key: "create", value: function (t) {
            return this.createByType(this.type, t)
          }
        }, {
          key: "createByType", value: function (t, e) {
            e = this.assignDefaults(e);
            var n = this.injectComponent(t, e);
            return this.register(t, n), n
          }
        }, {
          key: "destroy", value: function (t) {
            var e = this.components.get(t.componentType);
            if (e && e.length) {
              var n = e.indexOf(t);
              n > -1 && (e[n].destroy(), e.splice(n, 1))
            }
          }
        }, {
          key: "destroyAll", value: function () {
            this.destroyByType(this.type)
          }
        }, {
          key: "destroyByType", value: function (t) {
            var e = this.components.get(t);
            if (e && e.length) for (var n = e.length - 1; n >= 0;) this.destroy(e[n--])
          }
        }, {
          key: "injectComponent", value: function (t, e) {
            return this.injectionService.appendComponent(t, e)
          }
        }, {
          key: "assignDefaults", value: function (t) {
            var e = Object.assign({}, this.defaults.inputs), n = Object.assign({}, this.defaults.outputs);
            return t.inputs || t.outputs || (t = {inputs: t}), e && (t.inputs = Object.assign(Object.assign({}, e), t.inputs)), n && (t.outputs = Object.assign(Object.assign({}, n), t.outputs)), t
          }
        }, {
          key: "register", value: function (t, e) {
            this.components.has(t) || this.components.set(t, []), this.components.get(t).push(e)
          }
        }]), t
      }())).\u0275fac = function (t) {
        return new (t || ab)(Xt(Xk))
      }, ab.\u0275prov = ft({token: ab, factory: ab.\u0275fac}), ab), cb = ((ib = function () {
        function t() {
          _classCallCheck(this, t), this.showLegend = !1, this.animations = !0, this.legendLabelClick = new dl, this.legendLabelActivate = new dl, this.legendLabelDeactivate = new dl
        }

        return _createClass(t, [{
          key: "ngOnChanges", value: function (t) {
            this.update()
          }
        }, {
          key: "update", value: function () {
            var t = 0;
            this.showLegend && (this.legendType = this.getLegendType(), this.legendOptions && "right" !== this.legendOptions.position || (t = "scaleLegend" === this.legendType ? 1 : 2)), this.chartWidth = Math.floor(this.view[0] * (12 - t) / 12), this.legendWidth = this.legendOptions && "right" !== this.legendOptions.position ? this.chartWidth : Math.floor(this.view[0] * t / 12)
          }
        }, {
          key: "getLegendType", value: function () {
            return "linear" === this.legendOptions.scaleType ? "scaleLegend" : "legend"
          }
        }]), t
      }()).\u0275fac = function (t) {
        return new (t || ib)
      }, ib.\u0275cmp = pe({
        type: ib,
        selectors: [["ngx-charts-chart"]],
        inputs: {
          showLegend: "showLegend",
          animations: "animations",
          legendType: "legendType",
          view: "view",
          legendOptions: "legendOptions",
          data: "data",
          legendData: "legendData",
          colors: "colors",
          activeEntries: "activeEntries"
        },
        outputs: {
          legendLabelClick: "legendLabelClick",
          legendLabelActivate: "legendLabelActivate",
          legendLabelDeactivate: "legendLabelDeactivate"
        },
        features: [ys([ub]), ss],
        ngContentSelectors: X_,
        decls: 5,
        vars: 8,
        consts: [[1, "ngx-charts-outer"], [1, "ngx-charts"], ["class", "chart-legend", 3, "horizontal", "valueRange", "colors", "height", "width", 4, "ngIf"], ["class", "chart-legend", 3, "horizontal", "data", "title", "colors", "height", "width", "activeEntries", "labelClick", "labelActivate", "labelDeactivate", 4, "ngIf"], [1, "chart-legend", 3, "horizontal", "valueRange", "colors", "height", "width"], [1, "chart-legend", 3, "horizontal", "data", "title", "colors", "height", "width", "activeEntries", "labelClick", "labelActivate", "labelDeactivate"]],
        template: function (t, e) {
          1 & t && (function (t) {
            var e = Qe()[16][6];
            if (!e.projection) for (var n = e.projection = ae(1, null), r = n.slice(), i = e.child; null !== i;) r[0] ? r[0].projectionNext = i : n[0] = i, r[0] = i, i = i.next
          }(), bo(0, "div", 0), _n(), bo(1, "svg", 1), function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = arguments.length > 2 ? arguments[2] : void 0, r = Qe(), i = Ye(),
              a = Ci(i, r[6], t, 1, null, n || null);
            null === a.projection && (a.projection = e), Je(), function (t, e, n) {
              Ta(e[11], 0, e, n, ga(t, n, e), ba(n.parent || e[6], e))
            }(i, r, a)
          }(2), wo(), vo(3, Y_, 1, 5, "ngx-charts-scale-legend", 2), vo(4, Z_, 1, 7, "ngx-charts-legend", 3), wo()), 2 & t && (No("width", e.view[0], "px"), _o("@animationState", "active")("@.disabled", !e.animations), fi(1), fo("width", e.chartWidth)("height", e.view[1]), fi(2), _o("ngIf", e.showLegend && "scaleLegend" === e.legendType), fi(1), _o("ngIf", e.showLegend && "legend" === e.legendType))
        },
        directives: function () {
          return [cc, $b, Xb]
        },
        encapsulation: 2,
        data: {animation: [oh("animationState", [ch(":enter", [uh({opacity: 0}), sh("500ms 100ms", uh({opacity: 1}))])])]},
        changeDetection: 0
      }), ib), hb = ((rb = function () {
        function t(e, n) {
          _classCallCheck(this, t), this.element = e, this.zone = n, this.visible = new dl, this.isVisible = !1, this.runCheck()
        }

        return _createClass(t, [{
          key: "destroy", value: function () {
            clearTimeout(this.timeout)
          }
        }, {
          key: "onVisibilityChange", value: function () {
            var t = this;
            this.zone.run((function () {
              t.isVisible = !0, t.visible.emit(!0)
            }))
          }
        }, {
          key: "runCheck", value: function () {
            var t = this;
            this.zone.runOutsideAngular((function () {
              t.timeout = setTimeout((function () {
                return function e() {
                  if (t.element) {
                    var n = t.element.nativeElement, r = n.offsetHeight, i = n.offsetWidth;
                    r && i ? (clearTimeout(t.timeout), t.onVisibilityChange()) : (clearTimeout(t.timeout), t.zone.runOutsideAngular((function () {
                      t.timeout = setTimeout((function () {
                        return e()
                      }), 100)
                    })))
                  }
                }()
              }))
            }))
          }
        }]), t
      }()).\u0275fac = function (t) {
        return new (t || rb)(go(bs), go(Jl))
      }, rb.\u0275dir = ke({type: rb, selectors: [["visibility-observer"]], outputs: {visible: "visible"}}), rb),
      fb = ((nb = function () {
        function t(e, n, r) {
          _classCallCheck(this, t), this.chartElement = e, this.zone = n, this.cd = r, this.scheme = "cool", this.schemeType = "ordinal", this.animations = !0, this.select = new dl
        }

        return _createClass(t, [{
          key: "ngAfterViewInit", value: function () {
            this.bindWindowResizeEvent(), this.visibilityObserver = new hb(this.chartElement, this.zone), this.visibilityObserver.visible.subscribe(this.update.bind(this))
          }
        }, {
          key: "ngOnDestroy", value: function () {
            this.unbindEvents(), this.visibilityObserver && (this.visibilityObserver.visible.unsubscribe(), this.visibilityObserver.destroy())
          }
        }, {
          key: "ngOnChanges", value: function (t) {
            this.update()
          }
        }, {
          key: "update", value: function () {
            if (this.results = this.results ? this.cloneData(this.results) : [], this.view) this.width = this.view[0], this.height = this.view[1]; else {
              var t = this.getContainerDims();
              t && (this.width = t.width, this.height = t.height)
            }
            this.width || (this.width = 600), this.height || (this.height = 400), this.width = Math.floor(this.width), this.height = Math.floor(this.height), this.cd && this.cd.markForCheck()
          }
        }, {
          key: "getContainerDims", value: function () {
            var t, e, n = this.chartElement.nativeElement;
            if (null !== n.parentNode) {
              var r = n.parentNode.getBoundingClientRect();
              t = r.width, e = r.height
            }
            return t && e ? {width: t, height: e} : null
          }
        }, {
          key: "formatDates", value: function () {
            for (var t = 0; t < this.results.length; t++) {
              var e = this.results[t];
              if (e.label = e.name, e.label instanceof Date && (e.label = e.label.toLocaleDateString()), e.series) for (var n = 0; n < e.series.length; n++) {
                var r = e.series[n];
                r.label = r.name, r.label instanceof Date && (r.label = r.label.toLocaleDateString())
              }
            }
          }
        }, {
          key: "unbindEvents", value: function () {
            this.resizeSubscription && this.resizeSubscription.unsubscribe()
          }
        }, {
          key: "bindWindowResizeEvent", value: function () {
            var t = this, e = function t(e, n, i, a) {
              return r(i) && (a = i, i = void 0), a ? t(e, n, i).pipe(U((function (t) {
                return l(t) ? a.apply(void 0, _toConsumableArray(t)) : a(t)
              }))) : new C((function (t) {
                !function t(e, n, r, i, a) {
                  var o;
                  if (function (t) {
                    return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                  }(e)) {
                    var s = e;
                    e.addEventListener(n, r, a), o = function () {
                      return s.removeEventListener(n, r, a)
                    }
                  } else if (function (t) {
                    return t && "function" == typeof t.on && "function" == typeof t.off
                  }(e)) {
                    var l = e;
                    e.on(n, r), o = function () {
                      return l.off(n, r)
                    }
                  } else if (function (t) {
                    return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
                  }(e)) {
                    var u = e;
                    e.addListener(n, r), o = function () {
                      return u.removeListener(n, r)
                    }
                  } else {
                    if (!e || !e.length) throw new TypeError("Invalid event target");
                    for (var c = 0, h = e.length; c < h; c++) t(e[c], n, r, i, a)
                  }
                  i.add(o)
                }(e, n, (function (e) {
                  t.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : e)
                }), t, i)
              }))
            }(window, "resize").pipe(function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nd;
              return function (n) {
                return n.lift(new jd(t, e))
              }
            }(200)).subscribe((function (e) {
              t.update(), t.cd && t.cd.markForCheck()
            }));
            this.resizeSubscription = e
          }
        }, {
          key: "cloneData", value: function (t) {
            var e, n = [], r = _createForOfIteratorHelper(t);
            try {
              for (r.s(); !(e = r.n()).done;) {
                var i = e.value, a = {name: i.name};
                if (void 0 !== i.value && (a.value = i.value), void 0 !== i.series) {
                  a.series = [];
                  var o, s = _createForOfIteratorHelper(i.series);
                  try {
                    for (s.s(); !(o = s.n()).done;) {
                      var l = o.value, u = Object.assign({}, l);
                      a.series.push(u)
                    }
                  } catch (c) {
                    s.e(c)
                  } finally {
                    s.f()
                  }
                }
                void 0 !== i.extra && (a.extra = JSON.parse(JSON.stringify(i.extra))), n.push(a)
              }
            } catch (c) {
              r.e(c)
            } finally {
              r.f()
            }
            return n
          }
        }]), t
      }()).\u0275fac = function (t) {
        return new (t || nb)(go(bs), go(Jl), go(Na))
      }, nb.\u0275cmp = pe({
        type: nb,
        selectors: [["base-chart"]],
        inputs: {
          scheme: "scheme",
          schemeType: "schemeType",
          animations: "animations",
          results: "results",
          view: "view",
          customColors: "customColors"
        },
        outputs: {select: "select"},
        features: [ss],
        decls: 1,
        vars: 0,
        template: function (t, e) {
          1 & t && Co(0, "div")
        },
        encapsulation: 2
      }), nb), db = ((eb = function () {
        function t(e) {
          _classCallCheck(this, t), this.textHeight = 25, this.margin = 5, this.element = e.nativeElement
        }

        return _createClass(t, [{
          key: "ngOnChanges", value: function (t) {
            this.update()
          }
        }, {
          key: "update", value: function () {
            switch (this.strokeWidth = "0.01", this.textAnchor = "middle", this.transform = "", this.orient) {
              case"top":
              case"bottom":
                this.y = this.offset, this.x = this.width / 2;
                break;
              case"left":
                this.y = -(this.offset + this.textHeight + this.margin), this.x = -this.height / 2, this.transform = "rotate(270)";
                break;
              case"right":
                this.y = this.offset + this.margin, this.x = -this.height / 2, this.transform = "rotate(270)"
            }
          }
        }]), t
      }()).\u0275fac = function (t) {
        return new (t || eb)(go(bs))
      }, eb.\u0275cmp = pe({
        type: eb,
        selectors: [["g", "ngx-charts-axis-label", ""]],
        inputs: {orient: "orient", label: "label", offset: "offset", width: "width", height: "height"},
        features: [ss],
        attrs: K_,
        decls: 2,
        vars: 6,
        template: function (t, e) {
          1 & t && (_n(), bo(0, "text"), Xo(1), wo()), 2 & t && (fo("stroke-width", e.strokeWidth)("x", e.x)("y", e.y)("text-anchor", e.textAnchor)("transform", e.transform), fi(1), $o(" ", e.label, " "))
        },
        encapsulation: 2,
        changeDetection: 0
      }), eb);

    function pb(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16;
      return "string" != typeof t ? "number" == typeof t ? t + "" : "" : (t = t.trim()).length <= e ? t : t.slice(0, e) + "..."
    }

    function vb(t, e) {
      if (t.length > e) {
        for (var n = [], r = Math.floor(t.length / e), i = 0; i < t.length; i++) i % r == 0 && n.push(t[i]);
        t = n
      }
      return t
    }

    var gb, yb, mb = ((yb = function () {
      function t() {
        _classCallCheck(this, t), this.tickArguments = [5], this.tickStroke = "#ccc", this.trimTicks = !0, this.maxTickLength = 16, this.showGridLines = !1, this.rotateTicks = !0, this.dimensionsChanged = new dl, this.verticalSpacing = 20, this.rotateLabels = !1, this.innerTickSize = 6, this.outerTickSize = 6, this.tickPadding = 3, this.textAnchor = "middle", this.maxTicksLength = 0, this.maxAllowedLength = 16, this.height = 0
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.update()
        }
      }, {
        key: "ngAfterViewInit", value: function () {
          var t = this;
          setTimeout((function () {
            return t.updateDims()
          }))
        }
      }, {
        key: "updateDims", value: function () {
          var t = this, e = parseInt(this.ticksElement.nativeElement.getBoundingClientRect().height, 10);
          e !== this.height && (this.height = e, this.dimensionsChanged.emit({height: e}), setTimeout((function () {
            return t.updateDims()
          })))
        }
      }, {
        key: "update", value: function () {
          var t = this, e = this.scale;
          this.ticks = this.getTicks(), this.tickFormat = this.tickFormatting ? this.tickFormatting : e.tickFormat ? e.tickFormat.apply(e, this.tickArguments) : function (t) {
            return "Date" === t.constructor.name ? t.toLocaleDateString() : t.toLocaleString()
          };
          var n = this.rotateTicks ? this.getRotationAngle(this.ticks) : null;
          this.adjustedScale = this.scale.bandwidth ? function (t) {
            return this.scale(t) + .5 * this.scale.bandwidth()
          } : this.scale, this.textTransform = "", n && 0 !== n ? (this.textTransform = "rotate(".concat(n, ")"), this.textAnchor = "end", this.verticalSpacing = 10) : this.textAnchor = "middle", setTimeout((function () {
            return t.updateDims()
          }))
        }
      }, {
        key: "getRotationAngle", value: function (t) {
          var e = 0;
          this.maxTicksLength = 0;
          for (var n = 0; n < t.length; n++) {
            var r = this.tickFormat(t[n]).toString(), i = r.length;
            this.trimTicks && (i = this.tickTrim(r).length), i > this.maxTicksLength && (this.maxTicksLength = i)
          }
          for (var a = 8 * Math.min(this.maxTicksLength, this.maxAllowedLength), o = a, s = Math.floor(this.width / t.length); o > s && e > -90;) e -= 30, o = Math.cos(e * (Math.PI / 180)) * a;
          return e
        }
      }, {
        key: "getTicks", value: function () {
          var t = this.getMaxTicks(20), e = this.getMaxTicks(100);
          return this.tickValues ? this.tickValues : this.scale.ticks ? this.scale.ticks.apply(this.scale, [e]) : vb(this.scale.domain(), t)
        }
      }, {
        key: "getMaxTicks", value: function (t) {
          return Math.floor(this.width / t)
        }
      }, {
        key: "tickTransform", value: function (t) {
          return "translate(" + this.adjustedScale(t) + "," + this.verticalSpacing + ")"
        }
      }, {
        key: "gridLineTransform", value: function () {
          return "translate(0,".concat(-this.verticalSpacing - 5, ")")
        }
      }, {
        key: "tickTrim", value: function (t) {
          return this.trimTicks ? pb(t, this.maxTickLength) : t
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || yb)
    }, yb.\u0275cmp = pe({
      type: yb,
      selectors: [["g", "ngx-charts-x-axis-ticks", ""]],
      viewQuery: function (t, e) {
        var n;
        1 & t && Sl($_, !0), 2 & t && xl(n = El()) && (e.ticksElement = n.first)
      },
      inputs: {
        tickArguments: "tickArguments",
        tickStroke: "tickStroke",
        trimTicks: "trimTicks",
        maxTickLength: "maxTickLength",
        showGridLines: "showGridLines",
        rotateTicks: "rotateTicks",
        scale: "scale",
        orient: "orient",
        tickValues: "tickValues",
        tickFormatting: "tickFormatting",
        gridLineHeight: "gridLineHeight",
        width: "width"
      },
      outputs: {dimensionsChanged: "dimensionsChanged"},
      features: [ss],
      attrs: J_,
      decls: 4,
      vars: 2,
      consts: [["ticksel", ""], ["class", "tick", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "tick"], ["stroke-width", "0.01"], [4, "ngIf"], ["y2", "0", 1, "gridline-path", "gridline-path-vertical"]],
      template: function (t, e) {
        1 & t && (_n(), bo(0, "g", null, 0), vo(2, tk, 5, 7, "g", 1), wo(), vo(3, nk, 2, 2, "g", 2)), 2 & t && (fi(2), _o("ngForOf", e.ticks), fi(1), _o("ngForOf", e.ticks))
      },
      directives: [lc, cc],
      encapsulation: 2,
      changeDetection: 0
    }), yb), _b = ((gb = function () {
      function t() {
        _classCallCheck(this, t), this.rotateTicks = !0, this.showGridLines = !1, this.xOrient = "bottom", this.xAxisOffset = 0, this.dimensionsChanged = new dl, this.xAxisClassName = "x axis", this.labelOffset = 0, this.fill = "none", this.stroke = "stroke", this.tickStroke = "#ccc", this.strokeWidth = "none", this.padding = 5
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.update()
        }
      }, {
        key: "update", value: function () {
          this.transform = "translate(0,".concat(this.xAxisOffset + this.padding + this.dims.height, ")"), void 0 !== this.xAxisTickCount && (this.tickArguments = [this.xAxisTickCount])
        }
      }, {
        key: "emitTicksHeight", value: function (t) {
          var e = this, n = t.height, r = n + 25 + 5;
          r !== this.labelOffset && (this.labelOffset = r, setTimeout((function () {
            e.dimensionsChanged.emit({height: n})
          }), 0))
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || gb)
    }, gb.\u0275cmp = pe({
      type: gb,
      selectors: [["g", "ngx-charts-x-axis", ""]],
      viewQuery: function (t, e) {
        var n;
        1 & t && Sl(mb, !0), 2 & t && xl(n = El()) && (e.ticksComponent = n.first)
      },
      inputs: {
        rotateTicks: "rotateTicks",
        showGridLines: "showGridLines",
        xOrient: "xOrient",
        xAxisOffset: "xAxisOffset",
        xScale: "xScale",
        dims: "dims",
        trimTicks: "trimTicks",
        maxTickLength: "maxTickLength",
        tickFormatting: "tickFormatting",
        showLabel: "showLabel",
        labelText: "labelText",
        ticks: "ticks",
        xAxisTickInterval: "xAxisTickInterval",
        xAxisTickCount: "xAxisTickCount"
      },
      outputs: {dimensionsChanged: "dimensionsChanged"},
      features: [ss],
      attrs: rk,
      decls: 3,
      vars: 4,
      consts: [["ngx-charts-x-axis-ticks", "", 3, "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickStroke", "scale", "orient", "showGridLines", "gridLineHeight", "width", "tickValues", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width", 4, "ngIf"], ["ngx-charts-x-axis-ticks", "", 3, "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickStroke", "scale", "orient", "showGridLines", "gridLineHeight", "width", "tickValues", "dimensionsChanged"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width"]],
      template: function (t, e) {
        1 & t && (_n(), bo(0, "g"), vo(1, ik, 1, 12, "g", 0), vo(2, ak, 1, 5, "g", 1), wo()), 2 & t && (fo("class", e.xAxisClassName)("transform", e.transform), fi(1), _o("ngIf", e.xScale), fi(1), _o("ngIf", e.showLabel))
      },
      directives: [cc, mb, db],
      encapsulation: 2,
      changeDetection: 0
    }), gb);

    function kb(t, e, n, r, i, a) {
      var o = _slicedToArray(a, 4), s = o[0], l = o[1], u = o[2], c = o[3], h = "";
      return h = "M" + [t + i, e], h += "h" + ((n = 0 === (n = Math.floor(n)) ? 1 : n) - 2 * i), h += l ? "a".concat([i, i], " 0 0 1 ").concat([i, i]) : "h".concat(i, "v").concat(i), h += "v" + ((r = 0 === (r = Math.floor(r)) ? 1 : r) - 2 * i), h += c ? "a".concat([i, i], " 0 0 1 ").concat([-i, i]) : "v".concat(i, "h").concat(-i), h += "h" + (2 * i - n), h += u ? "a".concat([i, i], " 0 0 1 ").concat([-i, -i]) : "h".concat(-i, "v").concat(-i), h += "v" + (2 * i - r), h += s ? "a".concat([i, i], " 0 0 1 ").concat([i, -i]) : "v".concat(-i, "h").concat(i), h += "z"
    }

    var bb, wb, Cb, xb, Sb, Tb = ((Cb = function () {
      function t() {
        _classCallCheck(this, t), this.tickArguments = [5], this.tickStroke = "#ccc", this.trimTicks = !0, this.maxTickLength = 16, this.showGridLines = !1, this.showRefLabels = !1, this.showRefLines = !1, this.dimensionsChanged = new dl, this.innerTickSize = 6, this.tickPadding = 3, this.verticalSpacing = 20, this.textAnchor = "middle", this.width = 0, this.outerTickSize = 6, this.rotateLabels = !1, this.referenceLineLength = 0
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.update()
        }
      }, {
        key: "ngAfterViewInit", value: function () {
          var t = this;
          setTimeout((function () {
            return t.updateDims()
          }))
        }
      }, {
        key: "updateDims", value: function () {
          var t = this, e = parseInt(this.ticksElement.nativeElement.getBoundingClientRect().width, 10);
          e !== this.width && (this.width = e, this.dimensionsChanged.emit({width: e}), setTimeout((function () {
            return t.updateDims()
          })))
        }
      }, {
        key: "update", value: function () {
          var t, e = this, n = "top" === this.orient || "right" === this.orient ? -1 : 1;
          switch (this.tickSpacing = Math.max(this.innerTickSize, 0) + this.tickPadding, t = this.scale, this.ticks = this.getTicks(), this.tickFormat = this.tickFormatting ? this.tickFormatting : t.tickFormat ? t.tickFormat.apply(t, this.tickArguments) : function (t) {
            return "Date" === t.constructor.name ? t.toLocaleDateString() : t.toLocaleString()
          }, this.adjustedScale = t.bandwidth ? function (e) {
            return t(e) + .5 * t.bandwidth()
          } : t, this.showRefLines && this.referenceLines && this.setReferencelines(), this.orient) {
            case"top":
            case"bottom":
              this.transform = function (t) {
                return "translate(" + this.adjustedScale(t) + ",0)"
              }, this.textAnchor = "middle", this.y2 = this.innerTickSize * n, this.y1 = this.tickSpacing * n, this.dy = n < 0 ? "0em" : ".71em";
              break;
            case"left":
              this.transform = function (t) {
                return "translate(0," + this.adjustedScale(t) + ")"
              }, this.textAnchor = "end", this.x2 = this.innerTickSize * -n, this.x1 = this.tickSpacing * -n, this.dy = ".32em";
              break;
            case"right":
              this.transform = function (t) {
                return "translate(0," + this.adjustedScale(t) + ")"
              }, this.textAnchor = "start", this.x2 = this.innerTickSize * -n, this.x1 = this.tickSpacing * -n, this.dy = ".32em"
          }
          setTimeout((function () {
            return e.updateDims()
          }))
        }
      }, {
        key: "setReferencelines", value: function () {
          this.refMin = this.adjustedScale(Math.min.apply(null, this.referenceLines.map((function (t) {
            return t.value
          })))), this.refMax = this.adjustedScale(Math.max.apply(null, this.referenceLines.map((function (t) {
            return t.value
          })))), this.referenceLineLength = this.referenceLines.length, this.referenceAreaPath = kb(0, this.refMax, this.gridLineWidth, this.refMin - this.refMax, 0, [!1, !1, !1, !1])
        }
      }, {
        key: "getTicks", value: function () {
          var t = this.getMaxTicks(20), e = this.getMaxTicks(50);
          return this.tickValues ? this.tickValues : this.scale.ticks ? this.scale.ticks.apply(this.scale, [e]) : vb(this.scale.domain(), t)
        }
      }, {
        key: "getMaxTicks", value: function (t) {
          return Math.floor(this.height / t)
        }
      }, {
        key: "tickTransform", value: function (t) {
          return "translate(".concat(this.adjustedScale(t), ",").concat(this.verticalSpacing, ")")
        }
      }, {
        key: "gridLineTransform", value: function () {
          return "translate(5,0)"
        }
      }, {
        key: "tickTrim", value: function (t) {
          return this.trimTicks ? pb(t, this.maxTickLength) : t
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || Cb)
    }, Cb.\u0275cmp = pe({
      type: Cb,
      selectors: [["g", "ngx-charts-y-axis-ticks", ""]],
      viewQuery: function (t, e) {
        var n;
        1 & t && Sl($_, !0), 2 & t && xl(n = El()) && (e.ticksElement = n.first)
      },
      inputs: {
        tickArguments: "tickArguments",
        tickStroke: "tickStroke",
        trimTicks: "trimTicks",
        maxTickLength: "maxTickLength",
        showGridLines: "showGridLines",
        showRefLabels: "showRefLabels",
        showRefLines: "showRefLines",
        scale: "scale",
        orient: "orient",
        tickValues: "tickValues",
        tickFormatting: "tickFormatting",
        gridLineWidth: "gridLineWidth",
        height: "height",
        referenceLines: "referenceLines"
      },
      outputs: {dimensionsChanged: "dimensionsChanged"},
      features: [ss],
      attrs: ok,
      decls: 6,
      vars: 4,
      consts: [["ticksel", ""], ["class", "tick", 4, "ngFor", "ngForOf"], ["class", "reference-area", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "tick"], ["stroke-width", "0.01"], [1, "reference-area"], [4, "ngIf"], ["class", "gridline-path gridline-path-horizontal", "x1", "0", 4, "ngIf"], ["x1", "0", 1, "gridline-path", "gridline-path-horizontal"], ["x1", "0", 1, "refline-path", "gridline-path-horizontal"], [1, "refline-label"]],
      template: function (t, e) {
        1 & t && (_n(), bo(0, "g", null, 0), vo(2, sk, 5, 9, "g", 1), wo(), vo(3, lk, 1, 2, "path", 2), vo(4, fk, 2, 2, "g", 3), vo(5, vk, 2, 1, "g", 3)), 2 & t && (fi(2), _o("ngForOf", e.ticks), fi(1), _o("ngIf", e.referenceLineLength > 1 && e.refMax && e.refMin && e.showRefLines), fi(1), _o("ngForOf", e.ticks), fi(1), _o("ngForOf", e.referenceLines))
      },
      directives: [lc, cc],
      encapsulation: 2,
      changeDetection: 0
    }), Cb), Eb = ((wb = function () {
      function t() {
        _classCallCheck(this, t), this.showGridLines = !1, this.yOrient = "left", this.yAxisOffset = 0, this.dimensionsChanged = new dl, this.yAxisClassName = "y axis", this.labelOffset = 15, this.fill = "none", this.stroke = "#CCC", this.tickStroke = "#CCC", this.strokeWidth = 1, this.padding = 5
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.update()
        }
      }, {
        key: "update", value: function () {
          this.offset = -(this.yAxisOffset + this.padding), "right" === this.yOrient ? (this.labelOffset = 65, this.transform = "translate(".concat(this.offset + this.dims.width, " , 0)")) : (this.offset = this.offset, this.transform = "translate(".concat(this.offset, " , 0)")), void 0 !== this.yAxisTickCount && (this.tickArguments = [this.yAxisTickCount])
        }
      }, {
        key: "emitTicksWidth", value: function (t) {
          var e = this, n = t.width;
          n !== this.labelOffset && "right" === this.yOrient ? (this.labelOffset = n + this.labelOffset, setTimeout((function () {
            e.dimensionsChanged.emit({width: n})
          }), 0)) : n !== this.labelOffset && (this.labelOffset = n, setTimeout((function () {
            e.dimensionsChanged.emit({width: n})
          }), 0))
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || wb)
    }, wb.\u0275cmp = pe({
      type: wb,
      selectors: [["g", "ngx-charts-y-axis", ""]],
      viewQuery: function (t, e) {
        var n;
        1 & t && Sl(Tb, !0), 2 & t && xl(n = El()) && (e.ticksComponent = n.first)
      },
      inputs: {
        showGridLines: "showGridLines",
        yOrient: "yOrient",
        yAxisOffset: "yAxisOffset",
        yScale: "yScale",
        dims: "dims",
        trimTicks: "trimTicks",
        maxTickLength: "maxTickLength",
        tickFormatting: "tickFormatting",
        ticks: "ticks",
        showLabel: "showLabel",
        labelText: "labelText",
        yAxisTickInterval: "yAxisTickInterval",
        yAxisTickCount: "yAxisTickCount",
        referenceLines: "referenceLines",
        showRefLines: "showRefLines",
        showRefLabels: "showRefLabels"
      },
      outputs: {dimensionsChanged: "dimensionsChanged"},
      features: [ss],
      attrs: gk,
      decls: 3,
      vars: 4,
      consts: [["ngx-charts-y-axis-ticks", "", 3, "trimTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickValues", "tickStroke", "scale", "orient", "showGridLines", "gridLineWidth", "referenceLines", "showRefLines", "showRefLabels", "height", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width", 4, "ngIf"], ["ngx-charts-y-axis-ticks", "", 3, "trimTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickValues", "tickStroke", "scale", "orient", "showGridLines", "gridLineWidth", "referenceLines", "showRefLines", "showRefLabels", "height", "dimensionsChanged"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width"]],
      template: function (t, e) {
        1 & t && (_n(), bo(0, "g"), vo(1, yk, 1, 14, "g", 0), vo(2, mk, 1, 5, "g", 1), wo()), 2 & t && (fo("class", e.yAxisClassName)("transform", e.transform), fi(1), _o("ngIf", e.yScale), fi(1), _o("ngIf", e.showLabel))
      },
      directives: [cc, Tb, db],
      encapsulation: 2,
      changeDetection: 0
    }), wb), Ab = ((bb = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: bb}), bb.\u0275inj = dt({
      factory: function (t) {
        return new (t || bb)
      }, imports: [[bc]]
    }), bb), Ob = function (t) {
      return t[t.popover = "popover"] = "popover", t[t.tooltip = "tooltip"] = "tooltip", t
    }({}), Lb = function (t) {
      return t[t.left = "left"] = "left", t[t.center = "center"] = "center", t[t.right = "right"] = "right", t
    }({}), Pb = function (t) {
      return t[t.all = "all"] = "all", t[t.focus = "focus"] = "focus", t[t.mouseover = "mouseover"] = "mouseover", t
    }({}), Mb = ((Sb = function () {
      function t(e, n, r) {
        _classCallCheck(this, t), this.tooltipService = e, this.viewContainerRef = n, this.renderer = r, this.tooltipCssClass = "", this.tooltipTitle = "", this.tooltipAppendToBody = !0, this.tooltipSpacing = 10, this.tooltipDisabled = !1, this.tooltipShowCaret = !0, this.tooltipPlacement = $k.top, this.tooltipAlignment = Lb.center, this.tooltipType = Ob.popover, this.tooltipCloseOnClickOutside = !0, this.tooltipCloseOnMouseLeave = !0, this.tooltipHideTimeout = 300, this.tooltipShowTimeout = 100, this.tooltipShowEvent = Pb.all, this.tooltipImmediateExit = !1, this.show = new dl, this.hide = new dl
      }

      return _createClass(t, [{
        key: "ngOnDestroy", value: function () {
          this.hideTooltip(!0)
        }
      }, {
        key: "onFocus", value: function () {
          this.listensForFocus && this.showTooltip()
        }
      }, {
        key: "onBlur", value: function () {
          this.listensForFocus && this.hideTooltip(!0)
        }
      }, {
        key: "onMouseEnter", value: function () {
          this.listensForHover && this.showTooltip()
        }
      }, {
        key: "onMouseLeave", value: function (t) {
          if (this.listensForHover && this.tooltipCloseOnMouseLeave) {
            if (clearTimeout(this.timeout), this.component && this.component.instance.element.nativeElement.contains(t)) return;
            this.hideTooltip(this.tooltipImmediateExit)
          }
        }
      }, {
        key: "onMouseClick", value: function () {
          this.listensForHover && this.hideTooltip(!0)
        }
      }, {
        key: "showTooltip", value: function (t) {
          var e = this;
          if (!this.component && !this.tooltipDisabled) {
            var n = t ? 0 : this.tooltipShowTimeout;
            clearTimeout(this.timeout), this.timeout = setTimeout((function () {
              e.tooltipService.destroyAll();
              var t = e.createBoundOptions();
              e.component = e.tooltipService.create(t), setTimeout((function () {
                e.component && e.addHideListeners(e.component.instance.element.nativeElement)
              }), 10), e.show.emit(!0)
            }), n)
          }
        }
      }, {
        key: "addHideListeners", value: function (t) {
          var e = this;
          this.mouseEnterContentEvent = this.renderer.listen(t, "mouseenter", (function () {
            clearTimeout(e.timeout)
          })), this.tooltipCloseOnMouseLeave && (this.mouseLeaveContentEvent = this.renderer.listen(t, "mouseleave", (function () {
            e.hideTooltip(e.tooltipImmediateExit)
          }))), this.tooltipCloseOnClickOutside && (this.documentClickEvent = this.renderer.listen(document, "click", (function (n) {
            t.contains(n.target) || e.hideTooltip()
          })))
        }
      }, {
        key: "hideTooltip", value: function () {
          var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (this.component) {
            var n = function () {
              t.mouseLeaveContentEvent && t.mouseLeaveContentEvent(), t.mouseEnterContentEvent && t.mouseEnterContentEvent(), t.documentClickEvent && t.documentClickEvent(), t.hide.emit(!0), t.tooltipService.destroy(t.component), t.component = void 0
            };
            clearTimeout(this.timeout), e ? n() : this.timeout = setTimeout(n, this.tooltipHideTimeout)
          }
        }
      }, {
        key: "createBoundOptions", value: function () {
          return {
            title: this.tooltipTitle,
            template: this.tooltipTemplate,
            host: this.viewContainerRef.element,
            placement: this.tooltipPlacement,
            alignment: this.tooltipAlignment,
            type: this.tooltipType,
            showCaret: this.tooltipShowCaret,
            cssClass: this.tooltipCssClass,
            spacing: this.tooltipSpacing,
            context: this.tooltipContext
          }
        }
      }, {
        key: "listensForFocus", get: function () {
          return this.tooltipShowEvent === Pb.all || this.tooltipShowEvent === Pb.focus
        }
      }, {
        key: "listensForHover", get: function () {
          return this.tooltipShowEvent === Pb.all || this.tooltipShowEvent === Pb.mouseover
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || Sb)(go(ub), go(Gs), go(Ss))
    }, Sb.\u0275dir = ke({
      type: Sb,
      selectors: [["", "ngx-tooltip", ""]],
      hostBindings: function (t, e) {
        1 & t && To("focusin", (function () {
          return e.onFocus()
        }))("blur", (function () {
          return e.onBlur()
        }))("mouseenter", (function () {
          return e.onMouseEnter()
        }))("mouseleave", (function (t) {
          return e.onMouseLeave(t.target)
        }))("click", (function () {
          return e.onMouseClick()
        }))
      },
      inputs: {
        tooltipCssClass: "tooltipCssClass",
        tooltipTitle: "tooltipTitle",
        tooltipAppendToBody: "tooltipAppendToBody",
        tooltipSpacing: "tooltipSpacing",
        tooltipDisabled: "tooltipDisabled",
        tooltipShowCaret: "tooltipShowCaret",
        tooltipPlacement: "tooltipPlacement",
        tooltipAlignment: "tooltipAlignment",
        tooltipType: "tooltipType",
        tooltipCloseOnClickOutside: "tooltipCloseOnClickOutside",
        tooltipCloseOnMouseLeave: "tooltipCloseOnMouseLeave",
        tooltipHideTimeout: "tooltipHideTimeout",
        tooltipShowTimeout: "tooltipShowTimeout",
        tooltipShowEvent: "tooltipShowEvent",
        tooltipImmediateExit: "tooltipImmediateExit",
        tooltipTemplate: "tooltipTemplate",
        tooltipContext: "tooltipContext"
      },
      outputs: {show: "show", hide: "hide"}
    }), Sb), Db = ((xb = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: xb}), xb.\u0275inj = dt({
      factory: function (t) {
        return new (t || xb)
      }, providers: [Xk, ub], imports: [[bc]]
    }), xb);

    function Ib(t) {
      return t instanceof Date ? t.toLocaleDateString() : t.toLocaleString()
    }

    function Rb(t) {
      return t.toLocaleString().replace(/[&'`"<>]/g, (function (t) {
        return {"&": "&amp;", "'": "&#x27;", "`": "&#x60;", '"': "&quot;", "<": "&lt;", ">": "&gt;"}[t]
      }))
    }

    var Fb = {};

    function Nb() {
      var t = ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
      return Fb[t = "a" + t] ? Nb() : (Fb[t] = !0, t)
    }

    var jb, Hb, Ub, zb, Vb = ((zb = function t() {
      _classCallCheck(this, t)
    }).\u0275fac = function (t) {
      return new (t || zb)
    }, zb.\u0275cmp = pe({
      type: zb,
      selectors: [["g", "ngx-charts-grid-panel", ""]],
      inputs: {path: "path", width: "width", height: "height", x: "x", y: "y"},
      attrs: _k,
      decls: 1,
      vars: 4,
      consts: [["stroke", "none", 1, "gridpanel"]],
      template: function (t, e) {
        1 & t && (_n(), Co(0, "rect", 0)), 2 & t && fo("height", e.height)("width", e.width)("x", e.x)("y", e.y)
      },
      encapsulation: 2,
      changeDetection: 0
    }), zb), Bb = ((Ub = function () {
      function t() {
        _classCallCheck(this, t)
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.update()
        }
      }, {
        key: "update", value: function () {
          this.gridPanels = this.getGridPanels()
        }
      }, {
        key: "getGridPanels", value: function () {
          var t = this;
          return this.data.map((function (e) {
            var n, r, i, a, o, s = "odd";
            if ("vertical" === t.orient) {
              var l = t.xScale(e.name);
              Number.parseInt((l / t.xScale.step()).toString(), 10) % 2 == 1 && (s = "even"), n = t.xScale.bandwidth() * t.xScale.paddingInner(), r = t.xScale.bandwidth() + n, i = t.dims.height, a = t.xScale(e.name) - n / 2, o = 0
            } else if ("horizontal" === t.orient) {
              var u = t.yScale(e.name);
              Number.parseInt((u / t.yScale.step()).toString(), 10) % 2 == 1 && (s = "even"), n = t.yScale.bandwidth() * t.yScale.paddingInner(), r = t.dims.width, i = t.yScale.bandwidth() + n, a = 0, o = t.yScale(e.name) - n / 2
            }
            return {name: e.name, class: s, height: i, width: r, x: a, y: o}
          }))
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || Ub)
    }, Ub.\u0275cmp = pe({
      type: Ub,
      selectors: [["g", "ngx-charts-grid-panel-series", ""]],
      inputs: {data: "data", dims: "dims", xScale: "xScale", yScale: "yScale", orient: "orient"},
      features: [ss],
      attrs: kk,
      decls: 1,
      vars: 1,
      consts: [["ngx-charts-grid-panel", "", 3, "height", "width", "x", "y", "grid-panel", "odd", "even", 4, "ngFor", "ngForOf"], ["ngx-charts-grid-panel", "", 3, "height", "width", "x", "y"]],
      template: function (t, e) {
        1 & t && vo(0, bk, 1, 10, "g", 0), 2 & t && _o("ngForOf", e.gridPanels)
      },
      directives: [lc, Vb],
      encapsulation: 2,
      changeDetection: 0
    }), Ub), qb = ((Hb = function () {
      function t() {
        _classCallCheck(this, t), this.orientation = "vertical"
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.x1 = "0%", this.x2 = "0%", this.y1 = "0%", this.y2 = "0%", "horizontal" === this.orientation ? this.x2 = "100%" : "vertical" === this.orientation && (this.y1 = "100%")
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || Hb)
    }, Hb.\u0275cmp = pe({
      type: Hb,
      selectors: [["g", "ngx-charts-svg-linear-gradient", ""]],
      inputs: {orientation: "orientation", name: "name", stops: "stops"},
      features: [ss],
      attrs: wk,
      decls: 2,
      vars: 6,
      consts: [[3, "id"], [3, "stop-color", "stop-opacity", 4, "ngFor", "ngForOf"]],
      template: function (t, e) {
        1 & t && (_n(), bo(0, "linearGradient", 0), vo(1, Ck, 1, 5, "stop", 1), wo()), 2 & t && (_o("id", e.name), fo("x1", e.x1)("y1", e.y1)("x2", e.x2)("y2", e.y2), fi(1), _o("ngForOf", e.stops))
      },
      directives: [lc],
      encapsulation: 2,
      changeDetection: 0
    }), Hb), Wb = ((jb = function () {
      function t() {
        _classCallCheck(this, t), this.endOpacity = 1, this.cx = 0, this.cy = 0
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.r = "30%", ("color" in t || "startOpacity" in t || "endOpacity" in t) && (this.stopsDefault = [{
            offset: 0,
            color: this.color,
            opacity: this.startOpacity
          }, {offset: 100, color: this.color, opacity: this.endOpacity}])
        }
      }, {
        key: "stops", get: function () {
          return this.stopsInput || this.stopsDefault
        }, set: function (t) {
          this.stopsInput = t
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || jb)
    }, jb.\u0275cmp = pe({
      type: jb,
      selectors: [["g", "ngx-charts-svg-radial-gradient", ""]],
      inputs: {
        endOpacity: "endOpacity",
        cx: "cx",
        cy: "cy",
        stops: "stops",
        color: "color",
        name: "name",
        startOpacity: "startOpacity"
      },
      features: [ss],
      attrs: xk,
      decls: 2,
      vars: 5,
      consts: [["gradientUnits", "userSpaceOnUse", 3, "id"], [3, "stop-color", "stop-opacity", 4, "ngFor", "ngForOf"]],
      template: function (t, e) {
        1 & t && (_n(), bo(0, "radialGradient", 0), vo(1, Sk, 1, 5, "stop", 1), wo()), 2 & t && (_o("id", e.name), fo("cx", e.cx)("cy", e.cy)("r", e.r), fi(1), _o("ngForOf", e.stops))
      },
      directives: [lc],
      encapsulation: 2,
      changeDetection: 0
    }), jb);
    "undefined" != typeof window ? window : "undefined" != typeof global && global;
    var Gb, Qb, Yb, Zb, Xb = ((Zb = function () {
      function t(e) {
        _classCallCheck(this, t), this.cd = e, this.horizontal = !1, this.labelClick = new dl, this.labelActivate = new dl, this.labelDeactivate = new dl, this.legendEntries = []
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.update()
        }
      }, {
        key: "update", value: function () {
          this.cd.markForCheck(), this.legendEntries = this.getLegendEntries()
        }
      }, {
        key: "getLegendEntries", value: function () {
          var t, e = this, n = [], r = _createForOfIteratorHelper(this.data);
          try {
            var i = function () {
              var r = t.value, i = Ib(r);
              -1 === n.findIndex((function (t) {
                return t.label === i
              })) && n.push({label: r, formattedLabel: i, color: e.colors.getColor(r)})
            };
            for (r.s(); !(t = r.n()).done;) i()
          } catch (a) {
            r.e(a)
          } finally {
            r.f()
          }
          return n
        }
      }, {
        key: "isActive", value: function (t) {
          return !!this.activeEntries && void 0 !== this.activeEntries.find((function (e) {
            return t.label === e.name
          }))
        }
      }, {
        key: "activate", value: function (t) {
          this.labelActivate.emit(t)
        }
      }, {
        key: "deactivate", value: function (t) {
          this.labelDeactivate.emit(t)
        }
      }, {
        key: "trackBy", value: function (t, e) {
          return e.label
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || Zb)(go(Na))
    }, Zb.\u0275cmp = pe({
      type: Zb,
      selectors: [["ngx-charts-legend"]],
      inputs: {
        horizontal: "horizontal",
        data: "data",
        title: "title",
        colors: "colors",
        height: "height",
        width: "width",
        activeEntries: "activeEntries"
      },
      outputs: {labelClick: "labelClick", labelActivate: "labelActivate", labelDeactivate: "labelDeactivate"},
      features: [ss],
      decls: 5,
      vars: 9,
      consts: [["class", "legend-title", 4, "ngIf"], [1, "legend-wrap"], [1, "legend-labels"], ["class", "legend-label", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "legend-title"], [1, "legend-title-text"], [1, "legend-label"], [3, "label", "formattedLabel", "color", "isActive", "select", "activate", "deactivate"]],
      template: function (t, e) {
        1 & t && (bo(0, "div"), vo(1, Tk, 3, 1, "header", 0), bo(2, "div", 1), bo(3, "ul", 2), vo(4, Ek, 2, 4, "li", 3), wo(), wo(), wo()), 2 & t && (No("width", e.width, "px"), fi(1), _o("ngIf", (null == e.title ? null : e.title.length) > 0), fi(2), No("max-height", e.height - 45, "px"), jo("horizontal-legend", e.horizontal), fi(1), _o("ngForOf", e.legendEntries)("ngForTrackBy", e.trackBy))
      },
      directives: function () {
        return [cc, lc, Kb]
      },
      styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .legend-title{white-space:nowrap;overflow:hidden;margin-left:10px;margin-bottom:5px;font-size:14px;font-weight:700}.chart-legend li,.chart-legend ul{padding:0;margin:0;list-style:none}.chart-legend .horizontal-legend li{display:inline-block}.chart-legend .legend-wrap{width:calc(100% - 10px)}.chart-legend .legend-labels{line-height:85%;list-style:none;text-align:left;float:left;width:100%;border-radius:3px;overflow-y:auto;overflow-x:hidden;white-space:nowrap;background:rgba(0,0,0,.05)}.chart-legend .legend-label{cursor:pointer;font-size:90%;margin:8px;color:#afb7c8}.chart-legend .legend-label:hover{color:#000;transition:.2s}.chart-legend .legend-label .active .legend-label-text{color:#000}.chart-legend .legend-label-color{display:inline-block;height:15px;width:15px;margin-right:5px;color:#5b646b;border-radius:3px}.chart-legend .legend-label-text{display:inline-block;vertical-align:top;line-height:15px;font-size:12px;width:calc(100% - 20px);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chart-legend .legend-title-text{vertical-align:bottom;display:inline-block;line-height:16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}"],
      encapsulation: 2,
      changeDetection: 0
    }), Zb), Kb = ((Yb = function () {
      function t() {
        _classCallCheck(this, t), this.isActive = !1, this.select = new dl, this.activate = new dl, this.deactivate = new dl, this.toggle = new dl
      }

      return _createClass(t, [{
        key: "onMouseEnter", value: function () {
          this.activate.emit({name: this.label})
        }
      }, {
        key: "onMouseLeave", value: function () {
          this.deactivate.emit({name: this.label})
        }
      }, {
        key: "trimmedLabel", get: function () {
          return this.formattedLabel || "(empty)"
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || Yb)
    }, Yb.\u0275cmp = pe({
      type: Yb,
      selectors: [["ngx-charts-legend-entry"]],
      hostBindings: function (t, e) {
        1 & t && To("mouseenter", (function () {
          return e.onMouseEnter()
        }))("mouseleave", (function () {
          return e.onMouseLeave()
        }))
      },
      inputs: {isActive: "isActive", color: "color", label: "label", formattedLabel: "formattedLabel"},
      outputs: {select: "select", activate: "activate", deactivate: "deactivate", toggle: "toggle"},
      decls: 4,
      vars: 6,
      consts: [["tabindex", "-1", 3, "title", "click"], [1, "legend-label-color", 3, "click"], [1, "legend-label-text"]],
      template: function (t, e) {
        1 & t && (bo(0, "span", 0), To("click", (function () {
          return e.select.emit(e.formattedLabel)
        })), bo(1, "span", 1), To("click", (function () {
          return e.toggle.emit(e.formattedLabel)
        })), wo(), bo(2, "span", 2), Xo(3), wo(), wo()), 2 & t && (jo("active", e.isActive), _o("title", e.formattedLabel), fi(1), No("background-color", e.color), fi(2), $o(" ", e.trimmedLabel, " "))
      },
      encapsulation: 2,
      changeDetection: 0
    }), Yb), $b = ((Qb = function () {
      function t(e) {
        _classCallCheck(this, t), this.sanitizer = e, this.horizontal = !1
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          var e = this.gradientString(this.colors.range(), this.colors.domain());
          this.gradient = this.sanitizer.bypassSecurityTrustStyle("linear-gradient(to ".concat(this.horizontal ? "right" : "bottom", ", ").concat(e, ")"))
        }
      }, {
        key: "gradientString", value: function (t, e) {
          e.push(1);
          var n = [];
          return t.reverse().forEach((function (t, r) {
            n.push("".concat(t, " ").concat(Math.round(100 * e[r]), "%"))
          })), n.join(", ")
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || Qb)(go(th))
    }, Qb.\u0275cmp = pe({
      type: Qb,
      selectors: [["ngx-charts-scale-legend"]],
      inputs: {horizontal: "horizontal", valueRange: "valueRange", colors: "colors", height: "height", width: "width"},
      features: [ss],
      decls: 8,
      vars: 10,
      consts: [[1, "scale-legend"], [1, "scale-legend-label"], [1, "scale-legend-wrap"]],
      template: function (t, e) {
        1 & t && (bo(0, "div", 0), bo(1, "div", 1), bo(2, "span"), Xo(3), wo(), wo(), Co(4, "div", 2), bo(5, "div", 1), bo(6, "span"), Xo(7), wo(), wo(), wo()), 2 & t && (No("height", e.horizontal ? void 0 : e.height, "px")("width", e.width, "px"), jo("horizontal-legend", e.horizontal), fi(3), Ko(e.valueRange[1].toLocaleString()), fi(1), No("background", e.gradient, Xr), fi(3), Ko(e.valueRange[0].toLocaleString()))
      },
      styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .scale-legend{text-align:center;display:flex;flex-direction:column}.chart-legend .scale-legend-wrap{display:inline-block;flex:1;width:30px;border-radius:5px;margin:0 auto}.chart-legend .scale-legend-label{font-size:12px}.chart-legend .horizontal-legend.scale-legend{flex-direction:row}.chart-legend .horizontal-legend .scale-legend-wrap{width:auto;height:30px;margin:0 16px}"],
      encapsulation: 2,
      changeDetection: 0
    }), Qb), Jb = ((Gb = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: Gb}), Gb.\u0275inj = dt({
      factory: function (t) {
        return new (t || Gb)
      }, imports: [[bc, Ab, Db], bc, Ab, Db]
    }), Gb);

    function tw(t) {
      var e = t.width, n = t.height, r = t.margins, i = t.showXAxis, a = void 0 !== i && i, o = t.showYAxis,
        s = void 0 !== o && o, l = t.xAxisHeight, u = void 0 === l ? 0 : l, c = t.yAxisWidth, h = void 0 === c ? 0 : c,
        f = t.showXLabel, d = void 0 !== f && f, p = t.showYLabel, v = void 0 !== p && p, g = t.showLegend,
        y = void 0 !== g && g, m = t.legendType, _ = void 0 === m ? "ordinal" : m, k = t.legendPosition,
        b = void 0 === k ? "right" : k, w = t.columns, C = void 0 === w ? 12 : w, x = r[3], S = e, T = n - r[0] - r[2];
      if (y && "right" === b && (C -= "ordinal" === _ ? 2 : 1), S = (S = S * C / 12) - r[1] - r[3], a && (T -= 5, T -= u, d) && (T -= 30), s && (S -= 5, S -= h, x += h, x += 10, v)) {
        S -= 30, x += 30
      }
      return S = Math.max(0, S), T = Math.max(0, T), {
        width: Math.floor(S),
        height: Math.floor(T),
        xOffset: Math.floor(x)
      }
    }

    var ew, nw, rw, iw, aw, ow, sw, lw, uw, cw, hw = [{
      name: "vivid",
      selectable: !0,
      group: "Ordinal",
      domain: ["#647c8a", "#3f51b5", "#2196f3", "#00b862", "#afdf0a", "#a7b61a", "#f3e562", "#ff9800", "#ff5722", "#ff4514"]
    }, {
      name: "natural",
      selectable: !0,
      group: "Ordinal",
      domain: ["#bf9d76", "#e99450", "#d89f59", "#f2dfa7", "#a5d7c6", "#7794b1", "#afafaf", "#707160", "#ba9383", "#d9d5c3"]
    }, {
      name: "cool",
      selectable: !0,
      group: "Ordinal",
      domain: ["#a8385d", "#7aa3e5", "#a27ea8", "#aae3f5", "#adcded", "#a95963", "#8796c0", "#7ed3ed", "#50abcc", "#ad6886"]
    }, {
      name: "fire",
      selectable: !0,
      group: "Ordinal",
      domain: ["#ff3d00", "#bf360c", "#ff8f00", "#ff6f00", "#ff5722", "#e65100", "#ffca28", "#ffab00"]
    }, {
      name: "solar",
      selectable: !0,
      group: "Continuous",
      domain: ["#fff8e1", "#ffecb3", "#ffe082", "#ffd54f", "#ffca28", "#ffc107", "#ffb300", "#ffa000", "#ff8f00", "#ff6f00"]
    }, {
      name: "air",
      selectable: !0,
      group: "Continuous",
      domain: ["#e1f5fe", "#b3e5fc", "#81d4fa", "#4fc3f7", "#29b6f6", "#03a9f4", "#039be5", "#0288d1", "#0277bd", "#01579b"]
    }, {
      name: "aqua",
      selectable: !0,
      group: "Continuous",
      domain: ["#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064"]
    }, {
      name: "flame",
      selectable: !1,
      group: "Ordinal",
      domain: ["#A10A28", "#D3342D", "#EF6D49", "#FAAD67", "#FDDE90", "#DBED91", "#A9D770", "#6CBA67", "#2C9653", "#146738"]
    }, {
      name: "ocean",
      selectable: !1,
      group: "Ordinal",
      domain: ["#1D68FB", "#33C0FC", "#4AFFFE", "#AFFFFF", "#FFFC63", "#FDBD2D", "#FC8A25", "#FA4F1E", "#FA141B", "#BA38D1"]
    }, {
      name: "forest",
      selectable: !1,
      group: "Ordinal",
      domain: ["#55C22D", "#C1F33D", "#3CC099", "#AFFFFF", "#8CFC9D", "#76CFFA", "#BA60FB", "#EE6490", "#C42A1C", "#FC9F32"]
    }, {
      name: "horizon",
      selectable: !1,
      group: "Ordinal",
      domain: ["#2597FB", "#65EBFD", "#99FDD0", "#FCEE4B", "#FEFCFA", "#FDD6E3", "#FCB1A8", "#EF6F7B", "#CB96E8", "#EFDEE0"]
    }, {
      name: "neons",
      selectable: !1,
      group: "Ordinal",
      domain: ["#FF3333", "#FF33FF", "#CC33FF", "#0000FF", "#33CCFF", "#33FFFF", "#33FF66", "#CCFF33", "#FFCC00", "#FF6600"]
    }, {
      name: "picnic",
      selectable: !1,
      group: "Ordinal",
      domain: ["#FAC51D", "#66BD6D", "#FAA026", "#29BB9C", "#E96B56", "#55ACD2", "#B7332F", "#2C83C9", "#9166B8", "#92E7E8"]
    }, {
      name: "night",
      selectable: !1,
      group: "Ordinal",
      domain: ["#2B1B5A", "#501356", "#183356", "#28203F", "#391B3C", "#1E2B3C", "#120634", "#2D0432", "#051932", "#453080", "#75267D", "#2C507D", "#4B3880", "#752F7D", "#35547D"]
    }, {
      name: "nightLights",
      selectable: !1,
      group: "Ordinal",
      domain: ["#4e31a5", "#9c25a7", "#3065ab", "#57468b", "#904497", "#46648b", "#32118d", "#a00fb3", "#1052a2", "#6e51bd", "#b63cc3", "#6c97cb", "#8671c1", "#b455be", "#7496c3"]
    }], fw = function () {
      function t(e, n, r, i) {
        _classCallCheck(this, t), "string" == typeof e && (e = hw.find((function (t) {
          return t.name === e
        }))), this.colorDomain = e.domain, this.scaleType = n, this.domain = r, this.customColors = i, this.scale = this.generateColorScheme(e, n, this.domain)
      }

      return _createClass(t, [{
        key: "generateColorScheme", value: function (t, e, n) {
          var r;
          if ("string" == typeof t && (t = hw.find((function (e) {
            return e.name === t
          }))), "quantile" === e) r = function t() {
            var e, n = [], r = [], i = [];

            function a() {
              var t = 0, e = Math.max(1, r.length);
              for (i = new Array(e - 1); ++t < e;) i[t - 1] = e_(n, t / e);
              return o
            }

            function o(t) {
              return isNaN(t = +t) ? e : r[bm(i, t)]
            }

            return o.invertExtent = function (t) {
              var e = r.indexOf(t);
              return e < 0 ? [NaN, NaN] : [e > 0 ? i[e - 1] : n[0], e < i.length ? i[e] : n[n.length - 1]]
            }, o.domain = function (t) {
              if (!arguments.length) return n.slice();
              n = [];
              var e, r = _createForOfIteratorHelper(t);
              try {
                for (r.s(); !(e = r.n()).done;) {
                  var i = e.value;
                  null == i || isNaN(i = +i) || n.push(i)
                }
              } catch (o) {
                r.e(o)
              } finally {
                r.f()
              }
              return n.sort(sy), a()
            }, o.range = function (t) {
              return arguments.length ? (r = Array.from(t), a()) : r.slice()
            }, o.unknown = function (t) {
              return arguments.length ? (e = t, o) : e
            }, o.quantiles = function () {
              return i.slice()
            }, o.copy = function () {
              return t().domain(n).range(r).unknown(e)
            }, Pm.apply(o, arguments)
          }().range(t.domain).domain(n); else if ("ordinal" === e) r = Xm().range(t.domain).domain(n); else if ("linear" === e) {
            var i = _toConsumableArray(t.domain);
            1 === i.length && (i.push(i[0]), this.colorDomain = i);
            var a = Ym(0, 1, 1 / i.length);
            r = Qm().domain(a).range(i)
          }
          return r
        }
      }, {
        key: "getColor", value: function (t) {
          if (null == t) throw new Error("Value can not be null");
          if ("linear" === this.scaleType) {
            var e = Qm().domain(this.domain).range([0, 1]);
            return this.scale(e(t))
          }
          if ("function" == typeof this.customColors) return this.customColors(t);
          var n, r = t.toString();
          return this.customColors && this.customColors.length > 0 && (n = this.customColors.find((function (t) {
            return t.name.toLowerCase() === r.toLowerCase()
          }))), n ? n.value : this.scale(t)
        }
      }, {
        key: "getLinearGradientStops", value: function (t, e) {
          void 0 === e && (e = this.domain[0]);
          var n = Qm().domain(this.domain).range([0, 1]), r = Km().domain(this.colorDomain).range([0, 1]),
            i = this.getColor(t), a = n(e), o = this.getColor(e), s = n(t), l = 1, u = a, c = [];
          for (c.push({color: o, offset: a, originalOffset: a, opacity: 1}); u < s && l < this.colorDomain.length;) {
            var h = this.colorDomain[l], f = r(h);
            if (f <= a) l++; else {
              if (f.toFixed(4) >= (s - r.bandwidth()).toFixed(4)) break;
              c.push({color: h, offset: f, opacity: 1}), u = f, l++
            }
          }
          if (c[c.length - 1].offset < 100 && c.push({
            color: i,
            offset: s,
            opacity: 1
          }), s === a) c[0].offset = 0, c[1].offset = 100; else if (100 !== c[c.length - 1].offset) {
            var d, p = _createForOfIteratorHelper(c);
            try {
              for (p.s(); !(d = p.n()).done;) {
                var v = d.value;
                v.offset = (v.offset - a) / (s - a) * 100
              }
            } catch (g) {
              p.e(g)
            } finally {
              p.f()
            }
          }
          return c
        }
      }]), t
    }(), dw = ((iw = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: iw}), iw.\u0275inj = dt({
      factory: function (t) {
        return new (t || iw)
      }, imports: [[Jb]]
    }), iw), pw = ((rw = function () {
      function t(e) {
        _classCallCheck(this, t), this.roundEdges = !0, this.gradient = !1, this.offset = 0, this.isActive = !1, this.animations = !0, this.noBarWhenZero = !0, this.select = new dl, this.activate = new dl, this.deactivate = new dl, this.hasGradient = !1, this.hideBar = !1, this.element = e.nativeElement
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          t.roundEdges && this.loadAnimation(), this.update()
        }
      }, {
        key: "update", value: function () {
          this.gradientId = "grad" + Nb().toString(), this.gradientFill = "url(#".concat(this.gradientId, ")"), this.gradient || this.stops ? (this.gradientStops = this.getGradient(), this.hasGradient = !0) : this.hasGradient = !1, this.updatePathEl(), this.checkToHideBar()
        }
      }, {
        key: "loadAnimation", value: function () {
          this.path = this.getStartingPath(), setTimeout(this.update.bind(this), 100)
        }
      }, {
        key: "updatePathEl", value: function () {
          var t = Kp(this.element).select(".bar"), e = this.getPath();
          this.animations ? t.transition().duration(500).attr("d", e) : t.attr("d", e)
        }
      }, {
        key: "getGradient", value: function () {
          return this.stops ? this.stops : [{
            offset: 0,
            color: this.fill,
            opacity: this.getStartOpacity()
          }, {offset: 100, color: this.fill, opacity: 1}]
        }
      }, {
        key: "getStartingPath", value: function () {
          if (!this.animations) return this.getPath();
          var t, e = this.getRadius();
          return this.roundEdges ? "vertical" === this.orientation ? (e = Math.min(this.height, e), t = kb(this.x, this.y + this.height, this.width, 1, 0, this.edges)) : "horizontal" === this.orientation && (e = Math.min(this.width, e), t = kb(this.x, this.y, 1, this.height, 0, this.edges)) : "vertical" === this.orientation ? t = kb(this.x, this.y + this.height, this.width, 1, 0, this.edges) : "horizontal" === this.orientation && (t = kb(this.x, this.y, 1, this.height, 0, this.edges)), t
        }
      }, {
        key: "getPath", value: function () {
          var t, e = this.getRadius();
          return this.roundEdges ? "vertical" === this.orientation ? (e = Math.min(this.height, e), t = kb(this.x, this.y, this.width, this.height, e, this.edges)) : "horizontal" === this.orientation && (e = Math.min(this.width, e), t = kb(this.x, this.y, this.width, this.height, e, this.edges)) : t = kb(this.x, this.y, this.width, this.height, e, this.edges), t
        }
      }, {
        key: "getRadius", value: function () {
          var t = 0;
          return this.roundEdges && this.height > 5 && this.width > 5 && (t = Math.floor(Math.min(5, this.height / 2, this.width / 2))), t
        }
      }, {
        key: "getStartOpacity", value: function () {
          return this.roundEdges ? .2 : .5
        }
      }, {
        key: "onMouseEnter", value: function () {
          this.activate.emit(this.data)
        }
      }, {
        key: "onMouseLeave", value: function () {
          this.deactivate.emit(this.data)
        }
      }, {
        key: "checkToHideBar", value: function () {
          this.hideBar = this.noBarWhenZero && ("vertical" === this.orientation && 0 === this.height || "horizontal" === this.orientation && 0 === this.width)
        }
      }, {
        key: "edges", get: function () {
          var t = [!1, !1, !1, !1];
          return this.roundEdges && ("vertical" === this.orientation ? t = this.data.value > 0 ? [!0, !0, !1, !1] : [!1, !1, !0, !0] : "horizontal" === this.orientation && (t = this.data.value > 0 ? [!1, !0, !1, !0] : [!0, !1, !0, !1])), t
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || rw)(go(bs))
    }, rw.\u0275cmp = pe({
      type: rw,
      selectors: [["g", "ngx-charts-bar", ""]],
      hostBindings: function (t, e) {
        1 & t && To("mouseenter", (function () {
          return e.onMouseEnter()
        }))("mouseleave", (function () {
          return e.onMouseLeave()
        }))
      },
      inputs: {
        roundEdges: "roundEdges",
        gradient: "gradient",
        offset: "offset",
        isActive: "isActive",
        animations: "animations",
        noBarWhenZero: "noBarWhenZero",
        fill: "fill",
        data: "data",
        width: "width",
        height: "height",
        x: "x",
        y: "y",
        orientation: "orientation",
        stops: "stops",
        ariaLabel: "ariaLabel"
      },
      outputs: {select: "select", activate: "activate", deactivate: "deactivate"},
      features: [ss],
      attrs: Lk,
      decls: 2,
      vars: 8,
      consts: [[4, "ngIf"], ["stroke", "none", "role", "img", "tabIndex", "-1", 1, "bar", 3, "click"], ["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops"]],
      template: function (t, e) {
        1 & t && (vo(0, Pk, 2, 3, "defs", 0), _n(), bo(1, "path", 1), To("click", (function () {
          return e.select.emit(e.data)
        })), wo()), 2 & t && (_o("ngIf", e.hasGradient), fi(1), jo("active", e.isActive)("hidden", e.hideBar), fo("d", e.path)("aria-label", e.ariaLabel)("fill", e.hasGradient ? e.gradientFill : e.fill))
      },
      directives: [cc, qb],
      encapsulation: 2,
      changeDetection: 0
    }), rw), vw = ((nw = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        var t;
        return _classCallCheck(this, n), (t = e.apply(this, arguments)).legend = !1, t.legendTitle = "Legend", t.legendPosition = "right", t.tooltipDisabled = !1, t.showGridLines = !0, t.activeEntries = [], t.trimXAxisTicks = !0, t.trimYAxisTicks = !0, t.rotateXAxisTicks = !0, t.maxXAxisTickLength = 16, t.maxYAxisTickLength = 16, t.barPadding = 8, t.roundDomains = !1, t.roundEdges = !0, t.showDataLabel = !1, t.noBarWhenZero = !0, t.activate = new dl, t.deactivate = new dl, t.margin = [10, 20, 10, 20], t.xAxisHeight = 0, t.yAxisWidth = 0, t.dataLabelMaxHeight = {
          negative: 0,
          positive: 0
        }, t
      }

      return _createClass(n, [{
        key: "update", value: function () {
          _get(_getPrototypeOf(n.prototype), "update", this).call(this), this.showDataLabel || (this.dataLabelMaxHeight = {
            negative: 0,
            positive: 0
          }), this.margin = [10 + this.dataLabelMaxHeight.positive, 20, 10 + this.dataLabelMaxHeight.negative, 20], this.dims = tw({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
          }), this.formatDates(), this.showDataLabel && (this.dims.height -= this.dataLabelMaxHeight.negative), this.xScale = this.getXScale(), this.yScale = this.getYScale(), this.setColors(), this.legendOptions = this.getLegendOptions(), this.transform = "translate(".concat(this.dims.xOffset, " , ").concat(this.margin[0] + this.dataLabelMaxHeight.negative, ")")
        }
      }, {
        key: "getXScale", value: function () {
          this.xDomain = this.getXDomain();
          var t = this.xDomain.length / (this.dims.width / this.barPadding + 1);
          return Km().range([0, this.dims.width]).paddingInner(t).domain(this.xDomain)
        }
      }, {
        key: "getYScale", value: function () {
          this.yDomain = this.getYDomain();
          var t = Qm().range([this.dims.height, 0]).domain(this.yDomain);
          return this.roundDomains ? t.nice() : t
        }
      }, {
        key: "getXDomain", value: function () {
          return this.results.map((function (t) {
            return t.label
          }))
        }
      }, {
        key: "getYDomain", value: function () {
          var t = this.results.map((function (t) {
              return t.value
            })),
            e = this.yScaleMin ? Math.min.apply(Math, [this.yScaleMin].concat(_toConsumableArray(t))) : Math.min.apply(Math, [0].concat(_toConsumableArray(t)));
          this.yAxisTicks && !this.yAxisTicks.some(isNaN) && (e = Math.min.apply(Math, [e].concat(_toConsumableArray(this.yAxisTicks))));
          var n = this.yScaleMax ? Math.max.apply(Math, [this.yScaleMax].concat(_toConsumableArray(t))) : Math.max.apply(Math, [0].concat(_toConsumableArray(t)));
          return this.yAxisTicks && !this.yAxisTicks.some(isNaN) && (n = Math.max.apply(Math, [n].concat(_toConsumableArray(this.yAxisTicks)))), [e, n]
        }
      }, {
        key: "onClick", value: function (t) {
          this.select.emit(t)
        }
      }, {
        key: "setColors", value: function () {
          var t;
          t = "ordinal" === this.schemeType ? this.xDomain : this.yDomain, this.colors = new fw(this.scheme, this.schemeType, t, this.customColors)
        }
      }, {
        key: "getLegendOptions", value: function () {
          var t = {
            scaleType: this.schemeType,
            colors: void 0,
            domain: [],
            title: void 0,
            position: this.legendPosition
          };
          return "ordinal" === t.scaleType ? (t.domain = this.xDomain, t.colors = this.colors, t.title = this.legendTitle) : (t.domain = this.yDomain, t.colors = this.colors.scale), t
        }
      }, {
        key: "updateYAxisWidth", value: function (t) {
          var e = t.width;
          this.yAxisWidth = e, this.update()
        }
      }, {
        key: "updateXAxisHeight", value: function (t) {
          var e = t.height;
          this.xAxisHeight = e, this.update()
        }
      }, {
        key: "onDataLabelMaxHeightChanged", value: function (t) {
          var e = this;
          t.size.negative ? this.dataLabelMaxHeight.negative = Math.max(this.dataLabelMaxHeight.negative, t.size.height) : this.dataLabelMaxHeight.positive = Math.max(this.dataLabelMaxHeight.positive, t.size.height), t.index === this.results.length - 1 && setTimeout((function () {
            return e.update()
          }))
        }
      }, {
        key: "onActivate", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          t = this.results.find((function (n) {
            return e ? n.label === t.name : n.name === t.name
          })), this.activeEntries.findIndex((function (e) {
            return e.name === t.name && e.value === t.value && e.series === t.series
          })) > -1 || (this.activeEntries = [t].concat(_toConsumableArray(this.activeEntries)), this.activate.emit({
            value: t,
            entries: this.activeEntries
          }))
        }
      }, {
        key: "onDeactivate", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          t = this.results.find((function (n) {
            return e ? n.label === t.name : n.name === t.name
          }));
          var n = this.activeEntries.findIndex((function (e) {
            return e.name === t.name && e.value === t.value && e.series === t.series
          }));
          this.activeEntries.splice(n, 1), this.activeEntries = _toConsumableArray(this.activeEntries), this.deactivate.emit({
            value: t,
            entries: this.activeEntries
          })
        }
      }]), n
    }(fb)).\u0275fac = function (t) {
      return qw(t || nw)
    }, nw.\u0275cmp = pe({
      type: nw,
      selectors: [["ngx-charts-bar-vertical"]],
      contentQueries: function (t, e, n) {
        var r;
        1 & t && Tl(n, Ak, !0), 2 & t && xl(r = El()) && (e.tooltipTemplate = r.first)
      },
      inputs: {
        legend: "legend",
        legendTitle: "legendTitle",
        legendPosition: "legendPosition",
        tooltipDisabled: "tooltipDisabled",
        showGridLines: "showGridLines",
        activeEntries: "activeEntries",
        trimXAxisTicks: "trimXAxisTicks",
        trimYAxisTicks: "trimYAxisTicks",
        rotateXAxisTicks: "rotateXAxisTicks",
        maxXAxisTickLength: "maxXAxisTickLength",
        maxYAxisTickLength: "maxYAxisTickLength",
        barPadding: "barPadding",
        roundDomains: "roundDomains",
        roundEdges: "roundEdges",
        showDataLabel: "showDataLabel",
        noBarWhenZero: "noBarWhenZero",
        xAxis: "xAxis",
        yAxis: "yAxis",
        showXAxisLabel: "showXAxisLabel",
        showYAxisLabel: "showYAxisLabel",
        xAxisLabel: "xAxisLabel",
        yAxisLabel: "yAxisLabel",
        gradient: "gradient",
        schemeType: "schemeType",
        xAxisTickFormatting: "xAxisTickFormatting",
        yAxisTickFormatting: "yAxisTickFormatting",
        xAxisTicks: "xAxisTicks",
        yAxisTicks: "yAxisTicks",
        yScaleMax: "yScaleMax",
        yScaleMin: "yScaleMin",
        dataLabelFormatting: "dataLabelFormatting"
      },
      outputs: {activate: "activate", deactivate: "deactivate"},
      features: [es],
      decls: 5,
      vars: 25,
      consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-series-vertical", "", 3, "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "activeEntries", "roundEdges", "animations", "noBarWhenZero", "activate", "deactivate", "select", "dataLabelHeightChanged"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"]],
      template: function (t, e) {
        1 & t && (bo(0, "ngx-charts-chart", 0), To("legendLabelClick", (function (t) {
          return e.onClick(t)
        }))("legendLabelActivate", (function (t) {
          return e.onActivate(t, !0)
        }))("legendLabelDeactivate", (function (t) {
          return e.onDeactivate(t, !0)
        })), _n(), bo(1, "g", 1), vo(2, Mk, 1, 10, "g", 2), vo(3, Dk, 1, 9, "g", 3), bo(4, "g", 4), To("activate", (function (t) {
          return e.onActivate(t)
        }))("deactivate", (function (t) {
          return e.onDeactivate(t)
        }))("select", (function (t) {
          return e.onClick(t)
        }))("dataLabelHeightChanged", (function (t) {
          return e.onDataLabelMaxHeightChanged(t)
        })), wo(), wo(), wo()), 2 & t && (_o("view", hl(22, Ok, e.width, e.height))("showLegend", e.legend)("legendOptions", e.legendOptions)("activeEntries", e.activeEntries)("animations", e.animations), fi(1), fo("transform", e.transform), fi(1), _o("ngIf", e.xAxis), fi(1), _o("ngIf", e.yAxis), fi(1), _o("xScale", e.xScale)("yScale", e.yScale)("colors", e.colors)("series", e.results)("dims", e.dims)("gradient", e.gradient)("tooltipDisabled", e.tooltipDisabled)("tooltipTemplate", e.tooltipTemplate)("showDataLabel", e.showDataLabel)("dataLabelFormatting", e.dataLabelFormatting)("activeEntries", e.activeEntries)("roundEdges", e.roundEdges)("animations", e.animations)("noBarWhenZero", e.noBarWhenZero))
      },
      directives: function () {
        return [cb, cc, mw, _b, Eb]
      },
      styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:0}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:0}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"],
      encapsulation: 2,
      changeDetection: 0
    }), nw), gw = ((ew = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        var t;
        return _classCallCheck(this, n), (t = e.apply(this, arguments)).legend = !1, t.legendTitle = "Legend", t.legendPosition = "right", t.tooltipDisabled = !1, t.scaleType = "ordinal", t.showGridLines = !0, t.activeEntries = [], t.trimXAxisTicks = !0, t.trimYAxisTicks = !0, t.rotateXAxisTicks = !0, t.maxXAxisTickLength = 16, t.maxYAxisTickLength = 16, t.groupPadding = 16, t.barPadding = 8, t.roundDomains = !1, t.roundEdges = !0, t.showDataLabel = !1, t.noBarWhenZero = !0, t.activate = new dl, t.deactivate = new dl, t.margin = [10, 20, 10, 20], t.xAxisHeight = 0, t.yAxisWidth = 0, t.dataLabelMaxHeight = {
          negative: 0,
          positive: 0
        }, t
      }

      return _createClass(n, [{
        key: "update", value: function () {
          _get(_getPrototypeOf(n.prototype), "update", this).call(this), this.showDataLabel || (this.dataLabelMaxHeight = {
            negative: 0,
            positive: 0
          }), this.margin = [10 + this.dataLabelMaxHeight.positive, 20, 10 + this.dataLabelMaxHeight.negative, 20], this.dims = tw({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
          }), this.showDataLabel && (this.dims.height -= this.dataLabelMaxHeight.negative), this.formatDates(), this.groupDomain = this.getGroupDomain(), this.innerDomain = this.getInnerDomain(), this.valuesDomain = this.getValueDomain(), this.groupScale = this.getGroupScale(), this.innerScale = this.getInnerScale(), this.valueScale = this.getValueScale(), this.setColors(), this.legendOptions = this.getLegendOptions(), this.transform = "translate(".concat(this.dims.xOffset, " , ").concat(this.margin[0] + this.dataLabelMaxHeight.negative, ")")
        }
      }, {
        key: "onDataLabelMaxHeightChanged", value: function (t, e) {
          var n = this;
          t.size.negative ? this.dataLabelMaxHeight.negative = Math.max(this.dataLabelMaxHeight.negative, t.size.height) : this.dataLabelMaxHeight.positive = Math.max(this.dataLabelMaxHeight.positive, t.size.height), e === this.results.length - 1 && setTimeout((function () {
            return n.update()
          }))
        }
      }, {
        key: "getGroupScale", value: function () {
          var t = this.groupDomain.length / (this.dims.height / this.groupPadding + 1);
          return Km().rangeRound([0, this.dims.width]).paddingInner(t).paddingOuter(t / 2).domain(this.groupDomain)
        }
      }, {
        key: "getInnerScale", value: function () {
          var t = this.groupScale.bandwidth(), e = this.innerDomain.length / (t / this.barPadding + 1);
          return Km().rangeRound([0, t]).paddingInner(e).domain(this.innerDomain)
        }
      }, {
        key: "getValueScale", value: function () {
          var t = Qm().range([this.dims.height, 0]).domain(this.valuesDomain);
          return this.roundDomains ? t.nice() : t
        }
      }, {
        key: "getGroupDomain", value: function () {
          var t, e = [], n = _createForOfIteratorHelper(this.results);
          try {
            for (n.s(); !(t = n.n()).done;) {
              var r = t.value;
              e.includes(r.label) || e.push(r.label)
            }
          } catch (i) {
            n.e(i)
          } finally {
            n.f()
          }
          return e
        }
      }, {
        key: "getInnerDomain", value: function () {
          var t, e = [], n = _createForOfIteratorHelper(this.results);
          try {
            for (n.s(); !(t = n.n()).done;) {
              var r, i = _createForOfIteratorHelper(t.value.series);
              try {
                for (i.s(); !(r = i.n()).done;) {
                  var a = r.value;
                  e.includes(a.label) || e.push(a.label)
                }
              } catch (o) {
                i.e(o)
              } finally {
                i.f()
              }
            }
          } catch (o) {
            n.e(o)
          } finally {
            n.f()
          }
          return e
        }
      }, {
        key: "getValueDomain", value: function () {
          var t, e = [], n = _createForOfIteratorHelper(this.results);
          try {
            for (n.s(); !(t = n.n()).done;) {
              var r, i = _createForOfIteratorHelper(t.value.series);
              try {
                for (i.s(); !(r = i.n()).done;) {
                  var a = r.value;
                  e.includes(a.value) || e.push(a.value)
                }
              } catch (o) {
                i.e(o)
              } finally {
                i.f()
              }
            }
          } catch (o) {
            n.e(o)
          } finally {
            n.f()
          }
          return [Math.min.apply(Math, [0].concat(e)), this.yScaleMax ? Math.max.apply(Math, [this.yScaleMax].concat(e)) : Math.max.apply(Math, [0].concat(e))]
        }
      }, {
        key: "groupTransform", value: function (t) {
          return "translate(".concat(this.groupScale(t.label), ", 0)")
        }
      }, {
        key: "onClick", value: function (t, e) {
          e && (t.series = e.name), this.select.emit(t)
        }
      }, {
        key: "trackBy", value: function (t, e) {
          return e.name
        }
      }, {
        key: "setColors", value: function () {
          var t;
          t = "ordinal" === this.schemeType ? this.innerDomain : this.valuesDomain, this.colors = new fw(this.scheme, this.schemeType, t, this.customColors)
        }
      }, {
        key: "getLegendOptions", value: function () {
          var t = {
            scaleType: this.schemeType,
            colors: void 0,
            domain: [],
            title: void 0,
            position: this.legendPosition
          };
          return "ordinal" === t.scaleType ? (t.domain = this.innerDomain, t.colors = this.colors, t.title = this.legendTitle) : (t.domain = this.valuesDomain, t.colors = this.colors.scale), t
        }
      }, {
        key: "updateYAxisWidth", value: function (t) {
          var e = t.width;
          this.yAxisWidth = e, this.update()
        }
      }, {
        key: "updateXAxisHeight", value: function (t) {
          var e = t.height;
          this.xAxisHeight = e, this.update()
        }
      }, {
        key: "onActivate", value: function (t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = Object.assign({}, t);
          e && (r.series = e.name);
          var i = this.results.map((function (t) {
            return t.series
          })).flat().filter((function (t) {
            return n ? t.label === r.name : t.name === r.name && t.series === r.series
          }));
          this.activeEntries = _toConsumableArray(i), this.activate.emit({value: r, entries: this.activeEntries})
        }
      }, {
        key: "onDeactivate", value: function (t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = Object.assign({}, t);
          e && (r.series = e.name), this.activeEntries = this.activeEntries.filter((function (t) {
            return n ? t.label !== r.name : !(t.name === r.name && t.series === r.series)
          })), this.deactivate.emit({value: r, entries: this.activeEntries})
        }
      }]), n
    }(fb)).\u0275fac = function (t) {
      return Ww(t || ew)
    }, ew.\u0275cmp = pe({
      type: ew,
      selectors: [["ngx-charts-bar-vertical-2d"]],
      contentQueries: function (t, e, n) {
        var r;
        1 & t && Tl(n, Ak, !0), 2 & t && xl(r = El()) && (e.tooltipTemplate = r.first)
      },
      inputs: {
        legend: "legend",
        legendTitle: "legendTitle",
        legendPosition: "legendPosition",
        tooltipDisabled: "tooltipDisabled",
        scaleType: "scaleType",
        showGridLines: "showGridLines",
        activeEntries: "activeEntries",
        trimXAxisTicks: "trimXAxisTicks",
        trimYAxisTicks: "trimYAxisTicks",
        rotateXAxisTicks: "rotateXAxisTicks",
        maxXAxisTickLength: "maxXAxisTickLength",
        maxYAxisTickLength: "maxYAxisTickLength",
        groupPadding: "groupPadding",
        barPadding: "barPadding",
        roundDomains: "roundDomains",
        roundEdges: "roundEdges",
        showDataLabel: "showDataLabel",
        noBarWhenZero: "noBarWhenZero",
        xAxis: "xAxis",
        yAxis: "yAxis",
        showXAxisLabel: "showXAxisLabel",
        showYAxisLabel: "showYAxisLabel",
        xAxisLabel: "xAxisLabel",
        yAxisLabel: "yAxisLabel",
        gradient: "gradient",
        schemeType: "schemeType",
        xAxisTickFormatting: "xAxisTickFormatting",
        yAxisTickFormatting: "yAxisTickFormatting",
        xAxisTicks: "xAxisTicks",
        yAxisTicks: "yAxisTicks",
        yScaleMax: "yScaleMax",
        dataLabelFormatting: "dataLabelFormatting"
      },
      outputs: {activate: "activate", deactivate: "deactivate"},
      features: [es],
      decls: 6,
      vars: 17,
      consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick"], [1, "bar-chart", "chart"], ["ngx-charts-grid-panel-series", "", "orient", "vertical", 3, "xScale", "yScale", "data", "dims"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-series-vertical", "", 3, "activeEntries", "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "seriesName", "roundEdges", "animations", "noBarWhenZero", "select", "activate", "deactivate", "dataLabelHeightChanged", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-series-vertical", "", 3, "activeEntries", "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "seriesName", "roundEdges", "animations", "noBarWhenZero", "select", "activate", "deactivate", "dataLabelHeightChanged"]],
      template: function (t, e) {
        1 & t && (bo(0, "ngx-charts-chart", 0), To("legendLabelActivate", (function (t) {
          return e.onActivate(t, void 0, !0)
        }))("legendLabelDeactivate", (function (t) {
          return e.onDeactivate(t, void 0, !0)
        }))("legendLabelClick", (function (t) {
          return e.onClick(t)
        })), _n(), bo(1, "g", 1), Co(2, "g", 2), vo(3, Ik, 1, 10, "g", 3), vo(4, Rk, 1, 9, "g", 4), vo(5, Fk, 1, 17, "g", 5), wo(), wo()), 2 & t && (_o("view", hl(14, Ok, e.width, e.height))("showLegend", e.legend)("legendOptions", e.legendOptions)("activeEntries", e.activeEntries)("animations", e.animations), fi(1), fo("transform", e.transform), fi(1), _o("xScale", e.groupScale)("yScale", e.valueScale)("data", e.results)("dims", e.dims), fi(1), _o("ngIf", e.xAxis), fi(1), _o("ngIf", e.yAxis), fi(1), _o("ngForOf", e.results)("ngForTrackBy", e.trackBy))
      },
      directives: function () {
        return [cb, Bb, cc, lc, _b, Eb, mw]
      },
      styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:0}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:0}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"],
      encapsulation: 2,
      data: {
        animation: [oh("animationState", [ch(":leave", [uh({opacity: 1, transform: "*"}), sh(500, uh({
          opacity: 0,
          transform: "scale(0)"
        }))])])]
      },
      changeDetection: 0
    }), ew), yw = function (t) {
      return t.positive = "positive", t.negative = "negative", t
    }({}), mw = ((cw = function () {
      function t() {
        _classCallCheck(this, t), this.type = "standard", this.tooltipDisabled = !1, this.animations = !0, this.showDataLabel = !1, this.noBarWhenZero = !0, this.select = new dl, this.activate = new dl, this.deactivate = new dl, this.dataLabelHeightChanged = new dl, this.barsForDataLabels = []
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.update()
        }
      }, {
        key: "update", value: function () {
          var t, e, n = this;
          this.updateTooltipSettings(), this.series.length && (e = this.xScale.bandwidth()), e = Math.round(e);
          var r, i = Math.max(this.yScale.domain()[0], 0),
            a = (_defineProperty(t = {}, yw.positive, 0), _defineProperty(t, yw.negative, 0), t), o = yw.positive;
          "normalized" === this.type && (r = this.series.map((function (t) {
            return t.value
          })).reduce((function (t, e) {
            return t + e
          }), 0)), this.bars = this.series.map((function (t, s) {
            var l = t.value, u = n.getLabel(t), c = Ib(u);
            o = l > 0 ? yw.positive : yw.negative;
            var h = {
              value: l,
              label: u,
              roundEdges: n.roundEdges,
              data: t,
              width: e,
              formattedLabel: c,
              height: 0,
              x: 0,
              y: 0
            };
            if ("standard" === n.type) h.height = Math.abs(n.yScale(l) - n.yScale(i)), h.x = n.xScale(u), h.y = n.yScale(l < 0 ? 0 : l); else if ("stacked" === n.type) {
              var f = a[o], d = f + l;
              a[o] += l, h.height = n.yScale(f) - n.yScale(d), h.x = 0, h.y = n.yScale(d), h.offset0 = f, h.offset1 = d
            } else if ("normalized" === n.type) {
              var p = a[o], v = p + l;
              a[o] += l, r > 0 ? (p = 100 * p / r, v = 100 * v / r) : (p = 0, v = 0), h.height = n.yScale(p) - n.yScale(v), h.x = 0, h.y = n.yScale(v), h.offset0 = p, h.offset1 = v, l = (v - p).toFixed(2) + "%"
            }
            "ordinal" === n.colors.scaleType ? h.color = n.colors.getColor(u) : "standard" === n.type ? (h.color = n.colors.getColor(l), h.gradientStops = n.colors.getLinearGradientStops(l)) : (h.color = n.colors.getColor(h.offset1), h.gradientStops = n.colors.getLinearGradientStops(h.offset1, h.offset0));
            var g = c;
            return h.ariaLabel = c + " " + l.toLocaleString(), n.seriesName && (g = "".concat(n.seriesName, " \u2022 ").concat(c), h.data.series = n.seriesName, h.ariaLabel = n.seriesName + " " + h.ariaLabel), h.tooltipText = n.tooltipDisabled ? void 0 : '\n        <span class="tooltip-label">'.concat(Rb(g), '</span>\n        <span class="tooltip-val">').concat(l.toLocaleString(), "</span>\n      "), h
          })), this.updateDataLabels()
        }
      }, {
        key: "updateDataLabels", value: function () {
          var t = this;
          if ("stacked" === this.type) {
            this.barsForDataLabels = [];
            var e = {};
            e.series = this.seriesName;
            var n = this.series.map((function (t) {
              return t.value
            })).reduce((function (t, e) {
              return e > 0 ? t + e : t
            }), 0), r = this.series.map((function (t) {
              return t.value
            })).reduce((function (t, e) {
              return e < 0 ? t + e : t
            }), 0);
            e.total = n + r, e.x = 0, e.y = 0, e.height = this.yScale(e.total > 0 ? n : r), e.width = this.xScale.bandwidth(), this.barsForDataLabels.push(e)
          } else this.barsForDataLabels = this.series.map((function (e) {
            var n = {};
            return n.series = t.seriesName ? t.seriesName : e.label, n.total = e.value, n.x = t.xScale(e.label), n.y = t.yScale(0), n.height = t.yScale(n.total) - t.yScale(0), n.width = t.xScale.bandwidth(), n
          }))
        }
      }, {
        key: "updateTooltipSettings", value: function () {
          this.tooltipPlacement = this.tooltipDisabled ? void 0 : "top", this.tooltipType = this.tooltipDisabled ? void 0 : "tooltip"
        }
      }, {
        key: "isActive", value: function (t) {
          return !!this.activeEntries && void 0 !== this.activeEntries.find((function (e) {
            return t.name === e.name && t.series === e.series
          }))
        }
      }, {
        key: "onClick", value: function (t) {
          this.select.emit(t)
        }
      }, {
        key: "getLabel", value: function (t) {
          return t.label ? t.label : t.name
        }
      }, {
        key: "trackBy", value: function (t, e) {
          return e.label
        }
      }, {
        key: "trackDataLabelBy", value: function (t, e) {
          return t + "#" + e.series + "#" + e.total
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || cw)
    }, cw.\u0275cmp = pe({
      type: cw,
      selectors: [["g", "ngx-charts-series-vertical", ""]],
      inputs: {
        type: "type",
        tooltipDisabled: "tooltipDisabled",
        animations: "animations",
        showDataLabel: "showDataLabel",
        noBarWhenZero: "noBarWhenZero",
        dims: "dims",
        series: "series",
        xScale: "xScale",
        yScale: "yScale",
        colors: "colors",
        gradient: "gradient",
        activeEntries: "activeEntries",
        seriesName: "seriesName",
        tooltipTemplate: "tooltipTemplate",
        roundEdges: "roundEdges",
        dataLabelFormatting: "dataLabelFormatting"
      },
      outputs: {
        select: "select",
        activate: "activate",
        deactivate: "deactivate",
        dataLabelHeightChanged: "dataLabelHeightChanged"
      },
      features: [ss],
      attrs: Nk,
      decls: 2,
      vars: 3,
      consts: [["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "ariaLabel", "isActive", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero", "animations", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "ariaLabel", "isActive", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero", "animations", "select", "activate", "deactivate"], ["ngx-charts-bar-label", "", 3, "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation", "dimensionsChanged", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-bar-label", "", 3, "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation", "dimensionsChanged"]],
      template: function (t, e) {
        1 & t && (vo(0, jk, 1, 22, "g", 0), vo(1, Uk, 2, 2, "g", 1)), 2 & t && (_o("ngForOf", e.bars)("ngForTrackBy", e.trackBy), fi(1), _o("ngIf", e.showDataLabel))
      },
      directives: function () {
        return [lc, cc, pw, Mb, _w]
      },
      encapsulation: 2,
      data: {animation: [oh("animationState", [ch(":leave", [uh({opacity: 1}), sh(500, uh({opacity: 0}))])])]},
      changeDetection: 0
    }), cw), _w = ((uw = function () {
      function t(e) {
        _classCallCheck(this, t), this.dimensionsChanged = new dl, this.horizontalPadding = 2, this.verticalPadding = 5, this.element = e.nativeElement
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.update()
        }
      }, {
        key: "getSize", value: function () {
          return {
            height: this.element.getBoundingClientRect().height,
            width: this.element.getBoundingClientRect().width,
            negative: this.value < 0
          }
        }
      }, {
        key: "ngAfterViewInit", value: function () {
          this.dimensionsChanged.emit(this.getSize())
        }
      }, {
        key: "update", value: function () {
          this.formatedValue = this.valueFormatting ? this.valueFormatting(this.value) : Ib(this.value), "horizontal" === this.orientation ? (this.x = this.barX + this.barWidth, this.value < 0 ? (this.x = this.x - this.horizontalPadding, this.textAnchor = "end") : (this.x = this.x + this.horizontalPadding, this.textAnchor = "start"), this.y = this.barY + this.barHeight / 2) : (this.x = this.barX + this.barWidth / 2, this.y = this.barY + this.barHeight, this.value < 0 ? (this.y = this.y + this.verticalPadding, this.textAnchor = "end") : (this.y = this.y - this.verticalPadding, this.textAnchor = "start"), this.transform = "rotate(-45, ".concat(this.x, " , ").concat(this.y, ")"))
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || uw)(go(bs))
    }, uw.\u0275cmp = pe({
      type: uw,
      selectors: [["g", "ngx-charts-bar-label", ""]],
      inputs: {
        value: "value",
        valueFormatting: "valueFormatting",
        barX: "barX",
        barY: "barY",
        barWidth: "barWidth",
        barHeight: "barHeight",
        orientation: "orientation"
      },
      outputs: {dimensionsChanged: "dimensionsChanged"},
      features: [ss],
      attrs: zk,
      decls: 2,
      vars: 5,
      consts: [["alignment-baseline", "middle", 1, "textDataLabel"]],
      template: function (t, e) {
        1 & t && (_n(), bo(0, "text", 0), Xo(1), wo()), 2 & t && (fo("text-anchor", e.textAnchor)("transform", e.transform)("x", e.x)("y", e.y), fi(1), $o(" ", e.formatedValue, " "))
      },
      styles: [".textDataLabel[_ngcontent-%COMP%]{font-size:11px}"],
      changeDetection: 0
    }), uw), kw = ((lw = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: lw}), lw.\u0275inj = dt({
      factory: function (t) {
        return new (t || lw)
      }, imports: [[Jb]]
    }), lw), bw = ((sw = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: sw}), sw.\u0275inj = dt({
      factory: function (t) {
        return new (t || sw)
      }, imports: [[Jb]]
    }), sw), ww = ((ow = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: ow}), ow.\u0275inj = dt({
      factory: function (t) {
        return new (t || ow)
      }, imports: [[Jb]]
    }), ow), Cw = ((aw = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: aw}), aw.\u0275inj = dt({
      factory: function (t) {
        return new (t || aw)
      }, imports: [[Jb]]
    }), aw);
    Math;
    var xw, Sw, Tw, Ew, Aw, Ow, Lw, Pw, Mw, Dw, Iw = ((Dw = function () {
      function t() {
        _classCallCheck(this, t), this.animations = !0, this.labelTrim = !0, this.labelTrimSize = 10, this.isIE = /(edge|msie|trident)/i.test(navigator.userAgent), this.trimLabel = pb
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.update()
        }
      }, {
        key: "update", value: function () {
          var t = this.radius;
          this.explodeSlices && (t = this.radius * this.value / this.max);
          var e = M_().innerRadius(t).outerRadius(t).centroid(this.data), n = this.data.pos[1] / e[1];
          0 !== this.data.pos[1] && 0 !== e[1] || (n = 1), this.line = "M".concat(e, "L").concat([n * e[0], n * e[1]], "L").concat(this.data.pos)
        }
      }, {
        key: "textAnchor", value: function () {
          return this.midAngle(this.data) < Math.PI ? "start" : "end"
        }
      }, {
        key: "midAngle", value: function (t) {
          return t.startAngle + (t.endAngle - t.startAngle) / 2
        }
      }, {
        key: "textX", get: function () {
          return this.data.pos[0]
        }
      }, {
        key: "textY", get: function () {
          return this.data.pos[1]
        }
      }, {
        key: "styleTransform", get: function () {
          return this.isIE ? null : "translate3d(".concat(this.textX, "px,").concat(this.textY, "px, 0)")
        }
      }, {
        key: "attrTransform", get: function () {
          return this.isIE ? "translate(".concat(this.textX, ",").concat(this.textY, ")") : null
        }
      }, {
        key: "textTransition", get: function () {
          return this.isIE || !this.animations ? null : "transform 0.75s"
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || Dw)
    }, Dw.\u0275cmp = pe({
      type: Dw,
      selectors: [["g", "ngx-charts-pie-label", ""]],
      inputs: {
        animations: "animations",
        labelTrim: "labelTrim",
        labelTrimSize: "labelTrimSize",
        data: "data",
        radius: "radius",
        label: "label",
        color: "color",
        max: "max",
        value: "value",
        explodeSlices: "explodeSlices"
      },
      features: [ss],
      attrs: Vk,
      decls: 6,
      vars: 17,
      consts: [["dy", ".35em", 1, "pie-label"], ["fill", "none", 1, "pie-label-line", "line"]],
      template: function (t, e) {
        1 & t && (bo(0, "title"), Xo(1), wo(), _n(), bo(2, "g"), bo(3, "text", 0), Xo(4), wo(), wo(), Co(5, "path", 1)), 2 & t && (fi(1), Ko(e.label), fi(1), No("transform", e.styleTransform)("transition", e.textTransition), fo("transform", e.attrTransform), fi(1), No("text-anchor", e.textAnchor())("shape-rendering", "crispEdges"), jo("animation", e.animations), fi(1), $o(" ", e.labelTrim ? e.trimLabel(e.label, e.labelTrimSize) : e.label, " "), fi(1), jo("animation", e.animations), fo("d", e.line)("stroke", e.color))
      },
      encapsulation: 2,
      changeDetection: 0
    }), Dw), Rw = ((Mw = function () {
      function t(e) {
        _classCallCheck(this, t), this.startAngle = 0, this.endAngle = 2 * Math.PI, this.cornerRadius = 0, this.explodeSlices = !1, this.gradient = !1, this.animate = !0, this.pointerEvents = !0, this.isActive = !1, this.select = new dl, this.activate = new dl, this.deactivate = new dl, this.dblclick = new dl, this.initialized = !1, this.element = e.nativeElement
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.update()
        }
      }, {
        key: "getGradient", value: function () {
          return this.gradient ? this.gradientFill : this.fill
        }
      }, {
        key: "getPointerEvents", value: function () {
          return this.pointerEvents ? "auto" : "none"
        }
      }, {
        key: "update", value: function () {
          var t = this.calculateArc();
          this.startOpacity = .5, this.radialGradientId = "linearGrad" + Nb().toString(), this.gradientFill = "url(#".concat(this.radialGradientId, ")"), this.animate ? this.initialized ? this.updateAnimation() : (this.loadAnimation(), this.initialized = !0) : this.path = t.startAngle(this.startAngle).endAngle(this.endAngle)()
        }
      }, {
        key: "calculateArc", value: function () {
          var t = this.outerRadius;
          return this.explodeSlices && 0 === this.innerRadius && (t = this.outerRadius * this.value / this.max), M_().innerRadius(this.innerRadius).outerRadius(t).cornerRadius(this.cornerRadius)
        }
      }, {
        key: "loadAnimation", value: function () {
          var t = Kp(this.element).selectAll(".arc").data([{startAngle: this.startAngle, endAngle: this.endAngle}]),
            e = this.calculateArc();
          t.transition().attrTween("d", (function (t) {
            this._current = this._current || t;
            var n = Object.assign({}, t);
            n.endAngle = n.startAngle;
            var r = Zv(n, n);
            return this._current = r(0), function (t) {
              return e(r(t))
            }
          })).transition().duration(750).attrTween("d", (function (t) {
            this._current = this._current || t;
            var n = Zv(this._current, t);
            return this._current = n(0), function (t) {
              return e(n(t))
            }
          }))
        }
      }, {
        key: "updateAnimation", value: function () {
          var t = Kp(this.element).selectAll(".arc").data([{startAngle: this.startAngle, endAngle: this.endAngle}]),
            e = this.calculateArc();
          t.transition().duration(750).attrTween("d", (function (t) {
            this._current = this._current || t;
            var n = Zv(this._current, t);
            return this._current = n(0), function (t) {
              return e(n(t))
            }
          }))
        }
      }, {
        key: "onClick", value: function () {
          var t = this;
          clearTimeout(this._timeout), this._timeout = setTimeout((function () {
            return t.select.emit(t.data)
          }), 200)
        }
      }, {
        key: "onDblClick", value: function (t) {
          t.preventDefault(), t.stopPropagation(), clearTimeout(this._timeout), this.dblclick.emit({
            data: this.data,
            nativeEvent: t
          })
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || Mw)(go(bs))
    }, Mw.\u0275cmp = pe({
      type: Mw,
      selectors: [["g", "ngx-charts-pie-arc", ""]],
      inputs: {
        startAngle: "startAngle",
        endAngle: "endAngle",
        cornerRadius: "cornerRadius",
        explodeSlices: "explodeSlices",
        gradient: "gradient",
        animate: "animate",
        pointerEvents: "pointerEvents",
        isActive: "isActive",
        fill: "fill",
        innerRadius: "innerRadius",
        outerRadius: "outerRadius",
        value: "value",
        max: "max",
        data: "data"
      },
      outputs: {select: "select", activate: "activate", deactivate: "deactivate", dblclick: "dblclick"},
      features: [ss],
      attrs: Bk,
      decls: 3,
      vars: 7,
      consts: [[1, "arc-group"], [4, "ngIf"], [1, "arc", 3, "click", "dblclick", "mouseenter", "mouseleave"], ["ngx-charts-svg-radial-gradient", "", "orientation", "vertical", 3, "color", "name", "startOpacity"]],
      template: function (t, e) {
        1 & t && (_n(), bo(0, "g", 0), vo(1, qk, 2, 3, "defs", 1), bo(2, "path", 2), To("click", (function () {
          return e.onClick()
        }))("dblclick", (function (t) {
          return e.onDblClick(t)
        }))("mouseenter", (function () {
          return e.activate.emit(e.data)
        }))("mouseleave", (function () {
          return e.deactivate.emit(e.data)
        })), wo(), wo()), 2 & t && (fi(1), _o("ngIf", e.gradient), fi(1), No("pointer-events", e.getPointerEvents()), jo("active", e.isActive), fo("d", e.path)("fill", e.getGradient()))
      },
      directives: [cc, Wb],
      encapsulation: 2,
      changeDetection: 0
    }), Mw), Fw = ((Pw = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n() {
        var t;
        return _classCallCheck(this, n), (t = e.apply(this, arguments)).labels = !1, t.legend = !1, t.legendTitle = "Legend", t.legendPosition = "right", t.explodeSlices = !1, t.doughnut = !1, t.arcWidth = .25, t.activeEntries = [], t.tooltipDisabled = !1, t.trimLabels = !0, t.maxLabelLength = 10, t.dblclick = new dl, t.select = new dl, t.activate = new dl, t.deactivate = new dl, t
      }

      return _createClass(n, [{
        key: "update", value: function () {
          var t = this;
          _get(_getPrototypeOf(n.prototype), "update", this).call(this), this.labels && this.hasNoOptionalMarginsSet() ? this.margins = [30, 80, 30, 80] : !this.labels && this.hasNoOptionalMarginsSet() && (this.margins = [20, 20, 20, 20]), this.dims = tw({
            width: this.width,
            height: this.height,
            margins: this.margins,
            showLegend: this.legend,
            legendPosition: this.legendPosition
          }), this.formatDates(), this.translation = "translate(".concat(this.margins[3] + this.dims.width / 2, ", ").concat(this.margins[0] + this.dims.height / 2, ")"), this.outerRadius = Math.min(this.dims.width, this.dims.height), this.outerRadius /= this.labels ? 3 : 2, this.innerRadius = 0, this.doughnut && (this.innerRadius = this.outerRadius * (1 - this.arcWidth)), this.domain = this.getDomain(), this.data = this.results.sort((function (e, n) {
            return t.domain.indexOf(e.name) - t.domain.indexOf(n.name)
          })), this.setColors(), this.legendOptions = this.getLegendOptions()
        }
      }, {
        key: "getDomain", value: function () {
          return this.results.map((function (t) {
            return t.label
          }))
        }
      }, {
        key: "onClick", value: function (t) {
          this.select.emit(t)
        }
      }, {
        key: "setColors", value: function () {
          this.colors = new fw(this.scheme, "ordinal", this.domain, this.customColors)
        }
      }, {
        key: "getLegendOptions", value: function () {
          return {
            scaleType: "ordinal",
            domain: this.domain,
            colors: this.colors,
            title: this.legendTitle,
            position: this.legendPosition
          }
        }
      }, {
        key: "onActivate", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          t = this.results.find((function (n) {
            return e ? n.label === t.name : n.name === t.name
          })), this.activeEntries.findIndex((function (e) {
            return e.name === t.name && e.value === t.value && e.series === t.series
          })) > -1 || (this.activeEntries = [t].concat(_toConsumableArray(this.activeEntries)), this.activate.emit({
            value: t,
            entries: this.activeEntries
          }))
        }
      }, {
        key: "onDeactivate", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          t = this.results.find((function (n) {
            return e ? n.label === t.name : n.name === t.name
          }));
          var n = this.activeEntries.findIndex((function (e) {
            return e.name === t.name && e.value === t.value && e.series === t.series
          }));
          this.activeEntries.splice(n, 1), this.activeEntries = _toConsumableArray(this.activeEntries), this.deactivate.emit({
            value: t,
            entries: this.activeEntries
          })
        }
      }, {
        key: "hasNoOptionalMarginsSet", value: function () {
          return !this.margins || this.margins.length <= 0
        }
      }]), n
    }(fb)).\u0275fac = function (t) {
      return Gw(t || Pw)
    }, Pw.\u0275cmp = pe({
      type: Pw,
      selectors: [["ngx-charts-pie-chart"]],
      contentQueries: function (t, e, n) {
        var r;
        1 & t && Tl(n, Ak, !0), 2 & t && xl(r = El()) && (e.tooltipTemplate = r.first)
      },
      inputs: {
        labels: "labels",
        legend: "legend",
        legendTitle: "legendTitle",
        legendPosition: "legendPosition",
        explodeSlices: "explodeSlices",
        doughnut: "doughnut",
        arcWidth: "arcWidth",
        activeEntries: "activeEntries",
        tooltipDisabled: "tooltipDisabled",
        trimLabels: "trimLabels",
        maxLabelLength: "maxLabelLength",
        margins: "margins",
        gradient: "gradient",
        labelFormatting: "labelFormatting",
        tooltipText: "tooltipText"
      },
      outputs: {dblclick: "dblclick", select: "select", activate: "activate", deactivate: "deactivate"},
      features: [es],
      decls: 3,
      vars: 24,
      consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick"], [1, "pie-chart", "chart"], ["ngx-charts-pie-series", "", 3, "colors", "series", "showLabels", "labelFormatting", "trimLabels", "maxLabelLength", "activeEntries", "innerRadius", "outerRadius", "explodeSlices", "gradient", "animations", "tooltipDisabled", "tooltipTemplate", "tooltipText", "dblclick", "select", "activate", "deactivate"]],
      template: function (t, e) {
        1 & t && (bo(0, "ngx-charts-chart", 0), To("legendLabelActivate", (function (t) {
          return e.onActivate(t, !0)
        }))("legendLabelDeactivate", (function (t) {
          return e.onDeactivate(t, !0)
        }))("legendLabelClick", (function (t) {
          return e.onClick(t)
        })), _n(), bo(1, "g", 1), bo(2, "g", 2), To("dblclick", (function (t) {
          return e.dblclick.emit(t)
        }))("select", (function (t) {
          return e.onClick(t)
        }))("activate", (function (t) {
          return e.onActivate(t)
        }))("deactivate", (function (t) {
          return e.onDeactivate(t)
        })), wo(), wo(), wo()), 2 & t && (_o("view", hl(21, Ok, e.width, e.height))("showLegend", e.legend)("legendOptions", e.legendOptions)("activeEntries", e.activeEntries)("animations", e.animations), fi(1), fo("transform", e.translation), fi(1), _o("colors", e.colors)("series", e.data)("showLabels", e.labels)("labelFormatting", e.labelFormatting)("trimLabels", e.trimLabels)("maxLabelLength", e.maxLabelLength)("activeEntries", e.activeEntries)("innerRadius", e.innerRadius)("outerRadius", e.outerRadius)("explodeSlices", e.explodeSlices)("gradient", e.gradient)("animations", e.animations)("tooltipDisabled", e.tooltipDisabled)("tooltipTemplate", e.tooltipTemplate)("tooltipText", e.tooltipText))
      },
      directives: function () {
        return [cb, Nw]
      },
      styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:0}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:0}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".pie-label{font-size:11px}.pie-label.animation{-webkit-animation:750ms ease-in fadeIn;animation:750ms ease-in fadeIn}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.pie-label-line{stroke-dasharray:100%}.pie-label-line.animation{-webkit-animation:3s linear drawOut;animation:3s linear drawOut;transition:d 750ms}@-webkit-keyframes drawOut{from{stroke-dashoffset:100%}to{stroke-dashoffset:0}}@keyframes drawOut{from{stroke-dashoffset:100%}to{stroke-dashoffset:0}}"],
      encapsulation: 2,
      changeDetection: 0
    }), Pw), Nw = ((Lw = function () {
      function t() {
        _classCallCheck(this, t), this.series = [], this.innerRadius = 60, this.outerRadius = 80, this.trimLabels = !0, this.maxLabelLength = 10, this.tooltipDisabled = !1, this.animations = !0, this.select = new dl, this.activate = new dl, this.deactivate = new dl, this.dblclick = new dl
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.update()
        }
      }, {
        key: "update", value: function () {
          var t = function () {
            var t = I_, e = D_, n = null, r = l_(0), i = l_(w_), a = l_(0);

            function o(o) {
              var s, l, u, c, h, f = o.length, d = 0, p = new Array(f), v = new Array(f), g = +r.apply(this, arguments),
                y = Math.min(w_, Math.max(-w_, i.apply(this, arguments) - g)),
                m = Math.min(Math.abs(y) / f, a.apply(this, arguments)), _ = m * (y < 0 ? -1 : 1);
              for (s = 0; s < f; ++s) (h = v[p[s] = s] = +t(o[s], s, o)) > 0 && (d += h);
              for (null != e ? p.sort((function (t, n) {
                return e(v[t], v[n])
              })) : null != n && p.sort((function (t, e) {
                return n(o[t], o[e])
              })), s = 0, u = d ? (y - f * _) / d : 0; s < f; ++s, g = c) v[l = p[s]] = {
                data: o[l],
                index: s,
                value: h = v[l],
                startAngle: g,
                endAngle: c = g + (h > 0 ? h * u : 0) + _,
                padAngle: m
              };
              return v
            }

            return o.value = function (e) {
              return arguments.length ? (t = "function" == typeof e ? e : l_(+e), o) : t
            }, o.sortValues = function (t) {
              return arguments.length ? (e = t, n = null, o) : e
            }, o.sort = function (t) {
              return arguments.length ? (n = t, e = null, o) : n
            }, o.startAngle = function (t) {
              return arguments.length ? (r = "function" == typeof t ? t : l_(+t), o) : r
            }, o.endAngle = function (t) {
              return arguments.length ? (i = "function" == typeof t ? t : l_(+t), o) : i
            }, o.padAngle = function (t) {
              return arguments.length ? (a = "function" == typeof t ? t : l_(+t), o) : a
            }, o
          }().value((function (t) {
            return t.value
          })).sort(null)(this.series);
          this.max = $m(t, (function (t) {
            return t.value
          })), this.data = this.calculateLabelPositions(t), this.tooltipText = this.tooltipText || this.defaultTooltipText
        }
      }, {
        key: "midAngle", value: function (t) {
          return t.startAngle + (t.endAngle - t.startAngle) / 2
        }
      }, {
        key: "outerArc", value: function () {
          return M_().innerRadius(1.5 * this.outerRadius).outerRadius(1.5 * this.outerRadius)
        }
      }, {
        key: "calculateLabelPositions", value: function (t) {
          var e = this, n = t;
          n.forEach((function (t) {
            t.pos = e.outerArc().centroid(t), t.pos[0] = 1.5 * e.outerRadius * (e.midAngle(t) < Math.PI ? 1 : -1)
          }));
          for (var r = 0; r < n.length - 1; r++) {
            var i = n[r];
            if (this.labelVisible(i)) for (var a = r + 1; a < n.length; a++) {
              var o = n[a];
              if (this.labelVisible(o) && o.pos[0] * i.pos[0] > 0) {
                var s = 10 - Math.abs(o.pos[1] - i.pos[1]);
                s > 0 && (o.pos[1] += Math.sign(o.pos[0]) * s)
              }
            }
          }
          return n
        }
      }, {
        key: "labelVisible", value: function (t) {
          return this.showLabels && t.endAngle - t.startAngle > Math.PI / 30
        }
      }, {
        key: "getTooltipTitle", value: function (t) {
          return this.tooltipTemplate ? void 0 : this.tooltipText(t)
        }
      }, {
        key: "labelText", value: function (t) {
          return this.labelFormatting ? this.labelFormatting(t.data.name) : this.label(t)
        }
      }, {
        key: "label", value: function (t) {
          return Ib(t.data.name)
        }
      }, {
        key: "defaultTooltipText", value: function (t) {
          var e = this.label(t), n = Ib(t.data.value);
          return '\n      <span class="tooltip-label">'.concat(Rb(e), '</span>\n      <span class="tooltip-val">').concat(n, "</span>\n    ")
        }
      }, {
        key: "color", value: function (t) {
          return this.colors.getColor(this.label(t))
        }
      }, {
        key: "trackBy", value: function (t, e) {
          return e.data.name
        }
      }, {
        key: "onClick", value: function (t) {
          this.select.emit(t)
        }
      }, {
        key: "isActive", value: function (t) {
          return !!this.activeEntries && void 0 !== this.activeEntries.find((function (e) {
            return t.name === e.name && t.series === e.series
          }))
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || Lw)
    }, Lw.\u0275cmp = pe({
      type: Lw,
      selectors: [["g", "ngx-charts-pie-series", ""]],
      inputs: {
        series: "series",
        innerRadius: "innerRadius",
        outerRadius: "outerRadius",
        trimLabels: "trimLabels",
        maxLabelLength: "maxLabelLength",
        tooltipDisabled: "tooltipDisabled",
        animations: "animations",
        tooltipText: "tooltipText",
        colors: "colors",
        dims: "dims",
        explodeSlices: "explodeSlices",
        showLabels: "showLabels",
        gradient: "gradient",
        activeEntries: "activeEntries",
        labelFormatting: "labelFormatting",
        tooltipTemplate: "tooltipTemplate"
      },
      outputs: {select: "select", activate: "activate", deactivate: "deactivate", dblclick: "dblclick"},
      features: [ss],
      attrs: Gk,
      decls: 1,
      vars: 2,
      consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-pie-label", "", 3, "data", "radius", "color", "label", "labelTrim", "labelTrimSize", "max", "value", "explodeSlices", "animations", 4, "ngIf"], ["ngx-charts-pie-arc", "", "ngx-tooltip", "", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "fill", "value", "gradient", "data", "max", "explodeSlices", "isActive", "animate", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate", "dblclick"], ["ngx-charts-pie-label", "", 3, "data", "radius", "color", "label", "labelTrim", "labelTrimSize", "max", "value", "explodeSlices", "animations"]],
      template: function (t, e) {
        1 & t && vo(0, Yk, 3, 19, "g", 0), 2 & t && _o("ngForOf", e.data)("ngForTrackBy", e.trackBy)
      },
      directives: [lc, cc, Rw, Mb, Iw],
      encapsulation: 2,
      changeDetection: 0
    }), Lw), jw = ((Ow = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: Ow}), Ow.\u0275inj = dt({
      factory: function (t) {
        return new (t || Ow)
      }, imports: [[Jb]]
    }), Ow), Hw = ((Aw = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: Aw}), Aw.\u0275inj = dt({
      factory: function (t) {
        return new (t || Aw)
      }, imports: [[Jb, jw, Cw]]
    }), Aw), Uw = ((Ew = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: Ew}), Ew.\u0275inj = dt({
      factory: function (t) {
        return new (t || Ew)
      }, imports: [[Jb]]
    }), Ew), zw = ((Tw = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: Tw}), Tw.\u0275inj = dt({
      factory: function (t) {
        return new (t || Tw)
      }, imports: [[Jb]]
    }), Tw), Vw = ((Sw = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: Sw}), Sw.\u0275inj = dt({
      factory: function (t) {
        return new (t || Sw)
      }, imports: [[Jb, jw, kw]]
    }), Sw), Bw = ((xw = function t() {
      _classCallCheck(this, t), "undefined" != typeof SVGElement && void 0 === SVGElement.prototype.contains && (SVGElement.prototype.contains = HTMLDivElement.prototype.contains)
    }).\u0275mod = me({type: xw}), xw.\u0275inj = dt({
      factory: function (t) {
        return new (t || xw)
      }, imports: [Jb, dw, kw, bw, ww, Cw, Hw, Uw, jw, zw, Vw]
    }), xw), qw = ir(vw), Ww = ir(gw), Gw = ir(Fw);

    function Qw() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
      var r = e[e.length - 1];
      return P(r) ? (e.pop(), B(e, r)) : Z(e)
    }

    var Yw = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t) {
        var r;
        return _classCallCheck(this, n), (r = e.call(this))._value = t, r
      }

      return _createClass(n, [{
        key: "_subscribe", value: function (t) {
          var e = _get(_getPrototypeOf(n.prototype), "_subscribe", this).call(this, t);
          return e && !e.closed && t.next(this._value), e
        }
      }, {
        key: "getValue", value: function () {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new T;
          return this._value
        }
      }, {
        key: "next", value: function (t) {
          _get(_getPrototypeOf(n.prototype), "next", this).call(this, this._value = t)
        }
      }, {
        key: "value", get: function () {
          return this.getValue()
        }
      }]), n
    }(O), Zw = function () {
      function t() {
        return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
      }

      return t.prototype = Object.create(Error.prototype), t
    }(), Xw = {}, Kw = function () {
      function t(e) {
        _classCallCheck(this, t), this.resultSelector = e
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new $w(t, this.resultSelector))
        }
      }]), t
    }(), $w = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this, t)).resultSelector = r, i.active = 0, i.values = [], i.observables = [], i
      }

      return _createClass(n, [{
        key: "_next", value: function (t) {
          this.values.push(Xw), this.observables.push(t)
        }
      }, {
        key: "_complete", value: function () {
          var t = this.observables, e = t.length;
          if (0 === e) this.destination.complete(); else {
            this.active = e, this.toRespond = e;
            for (var n = 0; n < e; n++) {
              var r = t[n];
              this.add(j(this, r, r, n))
            }
          }
        }
      }, {
        key: "notifyComplete", value: function (t) {
          0 == (this.active -= 1) && this.destination.complete()
        }
      }, {
        key: "notifyNext", value: function (t, e, n, r, i) {
          var a = this.values, o = this.toRespond ? a[n] === Xw ? --this.toRespond : this.toRespond : 0;
          a[n] = e, 0 === o && (this.resultSelector ? this._tryResultSelector(a) : this.destination.next(a.slice()))
        }
      }, {
        key: "_tryResultSelector", value: function (t) {
          var e;
          try {
            e = this.resultSelector.apply(this, t)
          } catch (n) {
            return void this.destination.error(n)
          }
          this.destination.next(e)
        }
      }]), n
    }(H), Jw = new C((function (t) {
      return t.complete()
    }));

    function tC(t) {
      return t ? function (t) {
        return new C((function (e) {
          return t.schedule((function () {
            return e.complete()
          }))
        }))
      }(t) : Jw
    }

    function eC(t) {
      return new C((function (e) {
        var n;
        try {
          n = t()
        } catch (r) {
          return void e.error(r)
        }
        return (n ? q(n) : tC()).subscribe(e)
      }))
    }

    function nC() {
      return Y(1)
    }

    function rC(t, e) {
      return function (n) {
        return n.lift(new iC(t, e))
      }
    }

    var iC = function () {
      function t(e, n) {
        _classCallCheck(this, t), this.predicate = e, this.thisArg = n
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new aC(t, this.predicate, this.thisArg))
        }
      }]), t
    }(), aC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i) {
        var a;
        return _classCallCheck(this, n), (a = e.call(this, t)).predicate = r, a.thisArg = i, a.count = 0, a
      }

      return _createClass(n, [{
        key: "_next", value: function (t) {
          var e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++)
          } catch (n) {
            return void this.destination.error(n)
          }
          e && this.destination.next(t)
        }
      }]), n
    }(g), oC = function () {
      function t() {
        return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
      }

      return t.prototype = Object.create(Error.prototype), t
    }();

    function sC(t) {
      return function (e) {
        return 0 === t ? tC() : e.lift(new lC(t))
      }
    }

    var lC = function () {
      function t(e) {
        if (_classCallCheck(this, t), this.total = e, this.total < 0) throw new oC
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new uC(t, this.total))
        }
      }]), t
    }(), uC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this, t)).total = r, i.ring = new Array, i.count = 0, i
      }

      return _createClass(n, [{
        key: "_next", value: function (t) {
          var e = this.ring, n = this.total, r = this.count++;
          e.length < n ? e.push(t) : e[r % n] = t
        }
      }, {
        key: "_complete", value: function () {
          var t = this.destination, e = this.count;
          if (e > 0) for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, i = 0; i < n; i++) {
            var a = e++ % n;
            t.next(r[a])
          }
          t.complete()
        }
      }]), n
    }(g);

    function cC() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dC;
      return function (e) {
        return e.lift(new hC(t))
      }
    }

    var hC = function () {
      function t(e) {
        _classCallCheck(this, t), this.errorFactory = e
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new fC(t, this.errorFactory))
        }
      }]), t
    }(), fC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this, t)).errorFactory = r, i.hasValue = !1, i
      }

      return _createClass(n, [{
        key: "_next", value: function (t) {
          this.hasValue = !0, this.destination.next(t)
        }
      }, {
        key: "_complete", value: function () {
          if (this.hasValue) return this.destination.complete();
          var t;
          try {
            t = this.errorFactory()
          } catch (e) {
            t = e
          }
          this.destination.error(t)
        }
      }]), n
    }(g);

    function dC() {
      return new Zw
    }

    function pC() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      return function (e) {
        return e.lift(new vC(t))
      }
    }

    var vC = function () {
      function t(e) {
        _classCallCheck(this, t), this.defaultValue = e
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new gC(t, this.defaultValue))
        }
      }]), t
    }(), gC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this, t)).defaultValue = r, i.isEmpty = !0, i
      }

      return _createClass(n, [{
        key: "_next", value: function (t) {
          this.isEmpty = !1, this.destination.next(t)
        }
      }, {
        key: "_complete", value: function () {
          this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
        }
      }]), n
    }(g);

    function yC(t, e) {
      var n = arguments.length >= 2;
      return function (r) {
        return r.pipe(t ? rC((function (e, n) {
          return t(e, n, r)
        })) : _, sC(1), n ? pC(e) : cC((function () {
          return new Zw
        })))
      }
    }

    function mC(t) {
      return function (e) {
        var n = new _C(t), r = e.lift(n);
        return n.caught = r
      }
    }

    var _C = function () {
      function t(e) {
        _classCallCheck(this, t), this.selector = e
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new kC(t, this.selector, this.caught))
        }
      }]), t
    }(), kC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i) {
        var a;
        return _classCallCheck(this, n), (a = e.call(this, t)).selector = r, a.caught = i, a
      }

      return _createClass(n, [{
        key: "error", value: function (t) {
          if (!this.isStopped) {
            var e;
            try {
              e = this.selector(t, this.caught)
            } catch (a) {
              return void _get(_getPrototypeOf(n.prototype), "error", this).call(this, a)
            }
            this._unsubscribeAndRecycle();
            var r = new M(this, void 0, void 0);
            this.add(r);
            var i = j(this, e, void 0, void 0, r);
            i !== r && this.add(i)
          }
        }
      }]), n
    }(H);

    function bC(t) {
      return function (e) {
        return 0 === t ? tC() : e.lift(new wC(t))
      }
    }

    var wC = function () {
      function t(e) {
        if (_classCallCheck(this, t), this.total = e, this.total < 0) throw new oC
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new CC(t, this.total))
        }
      }]), t
    }(), CC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this, t)).total = r, i.count = 0, i
      }

      return _createClass(n, [{
        key: "_next", value: function (t) {
          var e = this.total, n = ++this.count;
          n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
        }
      }]), n
    }(g);

    function xC(t, e) {
      var n = arguments.length >= 2;
      return function (r) {
        return r.pipe(t ? rC((function (e, n) {
          return t(e, n, r)
        })) : _, bC(1), n ? pC(e) : cC((function () {
          return new Zw
        })))
      }
    }

    var SC = function () {
      function t(e, n, r) {
        _classCallCheck(this, t), this.predicate = e, this.thisArg = n, this.source = r
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new TC(t, this.predicate, this.thisArg, this.source))
        }
      }]), t
    }(), TC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i, a) {
        var o;
        return _classCallCheck(this, n), (o = e.call(this, t)).predicate = r, o.thisArg = i, o.source = a, o.index = 0, o.thisArg = i || _assertThisInitialized(o), o
      }

      return _createClass(n, [{
        key: "notifyComplete", value: function (t) {
          this.destination.next(t), this.destination.complete()
        }
      }, {
        key: "_next", value: function (t) {
          var e = !1;
          try {
            e = this.predicate.call(this.thisArg, t, this.index++, this.source)
          } catch (n) {
            return void this.destination.error(n)
          }
          e || this.notifyComplete(!1)
        }
      }, {
        key: "_complete", value: function () {
          this.notifyComplete(!0)
        }
      }]), n
    }(g);

    function EC(t, e) {
      return "function" == typeof e ? function (n) {
        return n.pipe(EC((function (n, r) {
          return q(t(n, r)).pipe(U((function (t, i) {
            return e(n, t, r, i)
          })))
        })))
      } : function (e) {
        return e.lift(new AC(t))
      }
    }

    var AC = function () {
      function t(e) {
        _classCallCheck(this, t), this.project = e
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new OC(t, this.project))
        }
      }]), t
    }(), OC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this, t)).project = r, i.index = 0, i
      }

      return _createClass(n, [{
        key: "_next", value: function (t) {
          var e, n = this.index++;
          try {
            e = this.project(t, n)
          } catch (r) {
            return void this.destination.error(r)
          }
          this._innerSub(e, t, n)
        }
      }, {
        key: "_innerSub", value: function (t, e, n) {
          var r = this.innerSubscription;
          r && r.unsubscribe();
          var i = new M(this, e, n), a = this.destination;
          a.add(i), this.innerSubscription = j(this, t, void 0, void 0, i), this.innerSubscription !== i && a.add(this.innerSubscription)
        }
      }, {
        key: "_complete", value: function () {
          var t = this.innerSubscription;
          t && !t.closed || _get(_getPrototypeOf(n.prototype), "_complete", this).call(this), this.unsubscribe()
        }
      }, {
        key: "_unsubscribe", value: function () {
          this.innerSubscription = null
        }
      }, {
        key: "notifyComplete", value: function (t) {
          this.destination.remove(t), this.innerSubscription = null, this.isStopped && _get(_getPrototypeOf(n.prototype), "_complete", this).call(this)
        }
      }, {
        key: "notifyNext", value: function (t, e, n, r, i) {
          this.destination.next(e)
        }
      }]), n
    }(H);

    function LC() {
      return nC()(Qw.apply(void 0, arguments))
    }

    function PC(t, e) {
      var n = !1;
      return arguments.length >= 2 && (n = !0), function (r) {
        return r.lift(new MC(t, e, n))
      }
    }

    var MC = function () {
      function t(e, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        _classCallCheck(this, t), this.accumulator = e, this.seed = n, this.hasSeed = r
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new DC(t, this.accumulator, this.seed, this.hasSeed))
        }
      }]), t
    }(), DC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i, a) {
        var o;
        return _classCallCheck(this, n), (o = e.call(this, t)).accumulator = r, o._seed = i, o.hasSeed = a, o.index = 0, o
      }

      return _createClass(n, [{
        key: "_next", value: function (t) {
          if (this.hasSeed) return this._tryNext(t);
          this.seed = t, this.destination.next(t)
        }
      }, {
        key: "_tryNext", value: function (t) {
          var e, n = this.index++;
          try {
            e = this.accumulator(this.seed, t, n)
          } catch (r) {
            this.destination.error(r)
          }
          this.seed = e, this.destination.next(e)
        }
      }, {
        key: "seed", get: function () {
          return this._seed
        }, set: function (t) {
          this.hasSeed = !0, this._seed = t
        }
      }]), n
    }(g);

    function IC(t, e) {
      return W(t, e, 1)
    }

    function RC() {
    }

    function FC(t, e, n) {
      return function (r) {
        return r.lift(new jC(t, e, n))
      }
    }

    var NC, jC = function () {
      function t(e, n, r) {
        _classCallCheck(this, t), this.nextOrObserver = e, this.error = n, this.complete = r
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new HC(t, this.nextOrObserver, this.error, this.complete))
        }
      }]), t
    }(), HC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, i, a, o) {
        var s;
        return _classCallCheck(this, n), (s = e.call(this, t))._tapNext = RC, s._tapError = RC, s._tapComplete = RC, s._tapError = a || RC, s._tapComplete = o || RC, r(i) ? (s._context = _assertThisInitialized(s), s._tapNext = i) : i && (s._context = i, s._tapNext = i.next || RC, s._tapError = i.error || RC, s._tapComplete = i.complete || RC), s
      }

      return _createClass(n, [{
        key: "_next", value: function (t) {
          try {
            this._tapNext.call(this._context, t)
          } catch (e) {
            return void this.destination.error(e)
          }
          this.destination.next(t)
        }
      }, {
        key: "_error", value: function (t) {
          try {
            this._tapError.call(this._context, t)
          } catch (t) {
            return void this.destination.error(t)
          }
          this.destination.error(t)
        }
      }, {
        key: "_complete", value: function () {
          try {
            this._tapComplete.call(this._context)
          } catch (t) {
            return void this.destination.error(t)
          }
          return this.destination.complete()
        }
      }]), n
    }(g), UC = function () {
      function t(e) {
        _classCallCheck(this, t), this.callback = e
      }

      return _createClass(t, [{
        key: "call", value: function (t, e) {
          return e.subscribe(new zC(t, this.callback))
        }
      }]), t
    }(), zC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this, t)).add(new d(r)), i
      }

      return n
    }(g), VC = function t(e, n) {
      _classCallCheck(this, t), this.id = e, this.url = n
    }, BC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "imperative",
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return _classCallCheck(this, n), (i = e.call(this, t, r)).navigationTrigger = a, i.restoredState = o, i
      }

      return _createClass(n, [{
        key: "toString", value: function () {
          return "NavigationStart(id: ".concat(this.id, ", url: '").concat(this.url, "')")
        }
      }]), n
    }(VC), qC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i) {
        var a;
        return _classCallCheck(this, n), (a = e.call(this, t, r)).urlAfterRedirects = i, a
      }

      return _createClass(n, [{
        key: "toString", value: function () {
          return "NavigationEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "')")
        }
      }]), n
    }(VC), WC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i) {
        var a;
        return _classCallCheck(this, n), (a = e.call(this, t, r)).reason = i, a
      }

      return _createClass(n, [{
        key: "toString", value: function () {
          return "NavigationCancel(id: ".concat(this.id, ", url: '").concat(this.url, "')")
        }
      }]), n
    }(VC), GC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i) {
        var a;
        return _classCallCheck(this, n), (a = e.call(this, t, r)).error = i, a
      }

      return _createClass(n, [{
        key: "toString", value: function () {
          return "NavigationError(id: ".concat(this.id, ", url: '").concat(this.url, "', error: ").concat(this.error, ")")
        }
      }]), n
    }(VC), QC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i, a) {
        var o;
        return _classCallCheck(this, n), (o = e.call(this, t, r)).urlAfterRedirects = i, o.state = a, o
      }

      return _createClass(n, [{
        key: "toString", value: function () {
          return "RoutesRecognized(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
        }
      }]), n
    }(VC), YC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i, a) {
        var o;
        return _classCallCheck(this, n), (o = e.call(this, t, r)).urlAfterRedirects = i, o.state = a, o
      }

      return _createClass(n, [{
        key: "toString", value: function () {
          return "GuardsCheckStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
        }
      }]), n
    }(VC), ZC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i, a, o) {
        var s;
        return _classCallCheck(this, n), (s = e.call(this, t, r)).urlAfterRedirects = i, s.state = a, s.shouldActivate = o, s
      }

      return _createClass(n, [{
        key: "toString", value: function () {
          return "GuardsCheckEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ", shouldActivate: ").concat(this.shouldActivate, ")")
        }
      }]), n
    }(VC), XC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i, a) {
        var o;
        return _classCallCheck(this, n), (o = e.call(this, t, r)).urlAfterRedirects = i, o.state = a, o
      }

      return _createClass(n, [{
        key: "toString", value: function () {
          return "ResolveStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
        }
      }]), n
    }(VC), KC = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r, i, a) {
        var o;
        return _classCallCheck(this, n), (o = e.call(this, t, r)).urlAfterRedirects = i, o.state = a, o
      }

      return _createClass(n, [{
        key: "toString", value: function () {
          return "ResolveEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
        }
      }]), n
    }(VC), $C = function () {
      function t(e) {
        _classCallCheck(this, t), this.route = e
      }

      return _createClass(t, [{
        key: "toString", value: function () {
          return "RouteConfigLoadStart(path: ".concat(this.route.path, ")")
        }
      }]), t
    }(), JC = function () {
      function t(e) {
        _classCallCheck(this, t), this.route = e
      }

      return _createClass(t, [{
        key: "toString", value: function () {
          return "RouteConfigLoadEnd(path: ".concat(this.route.path, ")")
        }
      }]), t
    }(), tx = function () {
      function t(e) {
        _classCallCheck(this, t), this.snapshot = e
      }

      return _createClass(t, [{
        key: "toString", value: function () {
          return "ChildActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
        }
      }]), t
    }(), ex = function () {
      function t(e) {
        _classCallCheck(this, t), this.snapshot = e
      }

      return _createClass(t, [{
        key: "toString", value: function () {
          return "ChildActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
        }
      }]), t
    }(), nx = function () {
      function t(e) {
        _classCallCheck(this, t), this.snapshot = e
      }

      return _createClass(t, [{
        key: "toString", value: function () {
          return "ActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
        }
      }]), t
    }(), rx = function () {
      function t(e) {
        _classCallCheck(this, t), this.snapshot = e
      }

      return _createClass(t, [{
        key: "toString", value: function () {
          return "ActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
        }
      }]), t
    }(), ix = function () {
      function t(e, n, r) {
        _classCallCheck(this, t), this.routerEvent = e, this.position = n, this.anchor = r
      }

      return _createClass(t, [{
        key: "toString", value: function () {
          return "Scroll(anchor: '".concat(this.anchor, "', position: '").concat(this.position ? "".concat(this.position[0], ", ").concat(this.position[1]) : null, "')")
        }
      }]), t
    }(), ax = ((NC = function t() {
      _classCallCheck(this, t)
    }).\u0275fac = function (t) {
      return new (t || NC)
    }, NC.\u0275cmp = pe({
      type: NC, selectors: [["ng-component"]], decls: 1, vars: 0, template: function (t, e) {
        1 & t && Co(0, "router-outlet")
      }, directives: function () {
        return [gT]
      }, encapsulation: 2
    }), NC), ox = function () {
      function t(e) {
        _classCallCheck(this, t), this.params = e || {}
      }

      return _createClass(t, [{
        key: "has", value: function (t) {
          return this.params.hasOwnProperty(t)
        }
      }, {
        key: "get", value: function (t) {
          if (this.has(t)) {
            var e = this.params[t];
            return Array.isArray(e) ? e[0] : e
          }
          return null
        }
      }, {
        key: "getAll", value: function (t) {
          if (this.has(t)) {
            var e = this.params[t];
            return Array.isArray(e) ? e : [e]
          }
          return []
        }
      }, {
        key: "keys", get: function () {
          return Object.keys(this.params)
        }
      }]), t
    }();

    function sx(t) {
      return new ox(t)
    }

    function lx(t) {
      var e = Error("NavigationCancelingError: " + t);
      return e.ngNavigationCancelingError = !0, e
    }

    function ux(t, e, n) {
      var r = n.path.split("/");
      if (r.length > t.length) return null;
      if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
      for (var i = {}, a = 0; a < r.length; a++) {
        var o = r[a], s = t[a];
        if (o.startsWith(":")) i[o.substring(1)] = s; else if (o !== s.path) return null
      }
      return {consumed: t.slice(0, r.length), posParams: i}
    }

    var cx = function t(e, n) {
      _classCallCheck(this, t), this.routes = e, this.module = n
    };

    function hx(t) {
      for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = 0; n < t.length; n++) {
        var r = t[n];
        fx(r, dx(e, r))
      }
    }

    function fx(t, e) {
      if (!t) throw new Error("\n      Invalid configuration of route '".concat(e, "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "));
      if (Array.isArray(t)) throw new Error("Invalid configuration of route '".concat(e, "': Array cannot be specified"));
      if (!t.component && !t.children && !t.loadChildren && t.outlet && "primary" !== t.outlet) throw new Error("Invalid configuration of route '".concat(e, "': a componentless route without children or loadChildren cannot have a named outlet set"));
      if (t.redirectTo && t.children) throw new Error("Invalid configuration of route '".concat(e, "': redirectTo and children cannot be used together"));
      if (t.redirectTo && t.loadChildren) throw new Error("Invalid configuration of route '".concat(e, "': redirectTo and loadChildren cannot be used together"));
      if (t.children && t.loadChildren) throw new Error("Invalid configuration of route '".concat(e, "': children and loadChildren cannot be used together"));
      if (t.redirectTo && t.component) throw new Error("Invalid configuration of route '".concat(e, "': redirectTo and component cannot be used together"));
      if (t.path && t.matcher) throw new Error("Invalid configuration of route '".concat(e, "': path and matcher cannot be used together"));
      if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error("Invalid configuration of route '".concat(e, "'. One of the following must be provided: component, redirectTo, children or loadChildren"));
      if (void 0 === t.path && void 0 === t.matcher) throw new Error("Invalid configuration of route '".concat(e, "': routes must have either a path or a matcher specified"));
      if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error("Invalid configuration of route '".concat(e, "': path cannot start with a slash"));
      if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error("Invalid configuration of route '{path: \"".concat(e, '", redirectTo: "').concat(t.redirectTo, "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."));
      if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error("Invalid configuration of route '".concat(e, "': pathMatch can only be set to 'prefix' or 'full'"));
      t.children && hx(t.children, e)
    }

    function dx(t, e) {
      return e ? t || e.path ? t && !e.path ? t + "/" : !t && e.path ? e.path : "".concat(t, "/").concat(e.path) : "" : t
    }

    function px(t) {
      var e = t.children && t.children.map(px),
        n = e ? Object.assign(Object.assign({}, t), {children: e}) : Object.assign({}, t);
      return !n.component && (e || n.loadChildren) && n.outlet && "primary" !== n.outlet && (n.component = ax), n
    }

    function vx(t, e) {
      var n, r = Object.keys(t), i = Object.keys(e);
      if (!r || !i || r.length != i.length) return !1;
      for (var a = 0; a < r.length; a++) if (!gx(t[n = r[a]], e[n])) return !1;
      return !0
    }

    function gx(t, e) {
      return Array.isArray(t) && Array.isArray(e) ? t.length == e.length && t.every((function (t) {
        return e.indexOf(t) > -1
      })) : t === e
    }

    function yx(t) {
      return Array.prototype.concat.apply([], t)
    }

    function mx(t) {
      return t.length > 0 ? t[t.length - 1] : null
    }

    function _x(t, e) {
      for (var n in t) t.hasOwnProperty(n) && e(t[n], n)
    }

    function kx(t) {
      return (e = t) && "function" == typeof e.subscribe ? t : So(t) ? q(Promise.resolve(t)) : Qw(t);
      var e
    }

    function bx(t, e, n) {
      return n ? function (t, e) {
        return vx(t, e)
      }(t.queryParams, e.queryParams) && function t(e, n) {
        if (!Sx(e.segments, n.segments)) return !1;
        if (e.numberOfChildren !== n.numberOfChildren) return !1;
        for (var r in n.children) {
          if (!e.children[r]) return !1;
          if (!t(e.children[r], n.children[r])) return !1
        }
        return !0
      }(t.root, e.root) : function (t, e) {
        return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every((function (n) {
          return gx(t[n], e[n])
        }))
      }(t.queryParams, e.queryParams) && function t(e, n) {
        return function e(n, r, i) {
          if (n.segments.length > i.length) return !!Sx(n.segments.slice(0, i.length), i) && !r.hasChildren();
          if (n.segments.length === i.length) {
            if (!Sx(n.segments, i)) return !1;
            for (var a in r.children) {
              if (!n.children[a]) return !1;
              if (!t(n.children[a], r.children[a])) return !1
            }
            return !0
          }
          var o = i.slice(0, n.segments.length), s = i.slice(n.segments.length);
          return !!Sx(n.segments, o) && !!n.children.primary && e(n.children.primary, r, s)
        }(e, n, n.segments)
      }(t.root, e.root)
    }

    var wx = function () {
      function t(e, n, r) {
        _classCallCheck(this, t), this.root = e, this.queryParams = n, this.fragment = r
      }

      return _createClass(t, [{
        key: "toString", value: function () {
          return Ox.serialize(this)
        }
      }, {
        key: "queryParamMap", get: function () {
          return this._queryParamMap || (this._queryParamMap = sx(this.queryParams)), this._queryParamMap
        }
      }]), t
    }(), Cx = function () {
      function t(e, n) {
        var r = this;
        _classCallCheck(this, t), this.segments = e, this.children = n, this.parent = null, _x(n, (function (t, e) {
          return t.parent = r
        }))
      }

      return _createClass(t, [{
        key: "hasChildren", value: function () {
          return this.numberOfChildren > 0
        }
      }, {
        key: "toString", value: function () {
          return Lx(this)
        }
      }, {
        key: "numberOfChildren", get: function () {
          return Object.keys(this.children).length
        }
      }]), t
    }(), xx = function () {
      function t(e, n) {
        _classCallCheck(this, t), this.path = e, this.parameters = n
      }

      return _createClass(t, [{
        key: "toString", value: function () {
          return Fx(this)
        }
      }, {
        key: "parameterMap", get: function () {
          return this._parameterMap || (this._parameterMap = sx(this.parameters)), this._parameterMap
        }
      }]), t
    }();

    function Sx(t, e) {
      return t.length === e.length && t.every((function (t, n) {
        return t.path === e[n].path
      }))
    }

    function Tx(t, e) {
      var n = [];
      return _x(t.children, (function (t, r) {
        "primary" === r && (n = n.concat(e(t, r)))
      })), _x(t.children, (function (t, r) {
        "primary" !== r && (n = n.concat(e(t, r)))
      })), n
    }

    var Ex = function t() {
      _classCallCheck(this, t)
    }, Ax = function () {
      function t() {
        _classCallCheck(this, t)
      }

      return _createClass(t, [{
        key: "parse", value: function (t) {
          var e = new zx(t);
          return new wx(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
        }
      }, {
        key: "serialize", value: function (t) {
          return "".concat("/" + function t(e, n) {
            if (!e.hasChildren()) return Lx(e);
            if (n) {
              var r = e.children.primary ? t(e.children.primary, !1) : "", i = [];
              return _x(e.children, (function (e, n) {
                "primary" !== n && i.push("".concat(n, ":").concat(t(e, !1)))
              })), i.length > 0 ? "".concat(r, "(").concat(i.join("//"), ")") : r
            }
            var a = Tx(e, (function (n, r) {
              return "primary" === r ? [t(e.children.primary, !1)] : ["".concat(r, ":").concat(t(n, !1))]
            }));
            return "".concat(Lx(e), "/(").concat(a.join("//"), ")")
          }(t.root, !0)).concat((e = t.queryParams, n = Object.keys(e).map((function (t) {
            var n = e[t];
            return Array.isArray(n) ? n.map((function (e) {
              return "".concat(Mx(t), "=").concat(Mx(e))
            })).join("&") : "".concat(Mx(t), "=").concat(Mx(n))
          })), n.length ? "?" + n.join("&") : "")).concat("string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : "");
          var e, n
        }
      }]), t
    }(), Ox = new Ax;

    function Lx(t) {
      return t.segments.map((function (t) {
        return Fx(t)
      })).join("/")
    }

    function Px(t) {
      return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
    }

    function Mx(t) {
      return Px(t).replace(/%3B/gi, ";")
    }

    function Dx(t) {
      return Px(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
    }

    function Ix(t) {
      return decodeURIComponent(t)
    }

    function Rx(t) {
      return Ix(t.replace(/\+/g, "%20"))
    }

    function Fx(t) {
      return "".concat(Dx(t.path)).concat((e = t.parameters, Object.keys(e).map((function (t) {
        return ";".concat(Dx(t), "=").concat(Dx(e[t]))
      })).join("")));
      var e
    }

    var Nx = /^[^\/()?;=#]+/;

    function jx(t) {
      var e = t.match(Nx);
      return e ? e[0] : ""
    }

    var Hx = /^[^=?&#]+/, Ux = /^[^?&#]+/, zx = function () {
      function t(e) {
        _classCallCheck(this, t), this.url = e, this.remaining = e
      }

      return _createClass(t, [{
        key: "parseRootSegment", value: function () {
          return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Cx([], {}) : new Cx([], this.parseChildren())
        }
      }, {
        key: "parseQueryParams", value: function () {
          var t = {};
          if (this.consumeOptional("?")) do {
            this.parseQueryParam(t)
          } while (this.consumeOptional("&"));
          return t
        }
      }, {
        key: "parseFragment", value: function () {
          return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
        }
      }, {
        key: "parseChildren", value: function () {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          var t = [];
          for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
          var e = {};
          this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
          var n = {};
          return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n.primary = new Cx(t, e)), n
        }
      }, {
        key: "parseSegment", value: function () {
          var t = jx(this.remaining);
          if ("" === t && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '".concat(this.remaining, "'."));
          return this.capture(t), new xx(Ix(t), this.parseMatrixParams())
        }
      }, {
        key: "parseMatrixParams", value: function () {
          for (var t = {}; this.consumeOptional(";");) this.parseParam(t);
          return t
        }
      }, {
        key: "parseParam", value: function (t) {
          var e = jx(this.remaining);
          if (e) {
            this.capture(e);
            var n = "";
            if (this.consumeOptional("=")) {
              var r = jx(this.remaining);
              r && (n = r, this.capture(n))
            }
            t[Ix(e)] = Ix(n)
          }
        }
      }, {
        key: "parseQueryParam", value: function (t) {
          var e, n, r = (e = this.remaining, (n = e.match(Hx)) ? n[0] : "");
          if (r) {
            this.capture(r);
            var i = "";
            if (this.consumeOptional("=")) {
              var a = function (t) {
                var e = t.match(Ux);
                return e ? e[0] : ""
              }(this.remaining);
              a && (i = a, this.capture(i))
            }
            var o = Rx(r), s = Rx(i);
            if (t.hasOwnProperty(o)) {
              var l = t[o];
              Array.isArray(l) || (l = [l], t[o] = l), l.push(s)
            } else t[o] = s
          }
        }
      }, {
        key: "parseParens", value: function (t) {
          var e = {};
          for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
            var n = jx(this.remaining), r = this.remaining[n.length];
            if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '".concat(this.url, "'"));
            var i = void 0;
            n.indexOf(":") > -1 ? (i = n.substr(0, n.indexOf(":")), this.capture(i), this.capture(":")) : t && (i = "primary");
            var a = this.parseChildren();
            e[i] = 1 === Object.keys(a).length ? a.primary : new Cx([], a), this.consumeOptional("//")
          }
          return e
        }
      }, {
        key: "peekStartsWith", value: function (t) {
          return this.remaining.startsWith(t)
        }
      }, {
        key: "consumeOptional", value: function (t) {
          return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0)
        }
      }, {
        key: "capture", value: function (t) {
          if (!this.consumeOptional(t)) throw new Error('Expected "'.concat(t, '".'))
        }
      }]), t
    }(), Vx = function () {
      function t(e) {
        _classCallCheck(this, t), this._root = e
      }

      return _createClass(t, [{
        key: "parent", value: function (t) {
          var e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null
        }
      }, {
        key: "children", value: function (t) {
          var e = Bx(t, this._root);
          return e ? e.children.map((function (t) {
            return t.value
          })) : []
        }
      }, {
        key: "firstChild", value: function (t) {
          var e = Bx(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null
        }
      }, {
        key: "siblings", value: function (t) {
          var e = qx(t, this._root);
          return e.length < 2 ? [] : e[e.length - 2].children.map((function (t) {
            return t.value
          })).filter((function (e) {
            return e !== t
          }))
        }
      }, {
        key: "pathFromRoot", value: function (t) {
          return qx(t, this._root).map((function (t) {
            return t.value
          }))
        }
      }, {
        key: "root", get: function () {
          return this._root.value
        }
      }]), t
    }();

    function Bx(t, e) {
      if (t === e.value) return e;
      var n, r = _createForOfIteratorHelper(e.children);
      try {
        for (r.s(); !(n = r.n()).done;) {
          var i = Bx(t, n.value);
          if (i) return i
        }
      } catch (a) {
        r.e(a)
      } finally {
        r.f()
      }
      return null
    }

    function qx(t, e) {
      if (t === e.value) return [e];
      var n, r = _createForOfIteratorHelper(e.children);
      try {
        for (r.s(); !(n = r.n()).done;) {
          var i = qx(t, n.value);
          if (i.length) return i.unshift(e), i
        }
      } catch (a) {
        r.e(a)
      } finally {
        r.f()
      }
      return []
    }

    var Wx = function () {
      function t(e, n) {
        _classCallCheck(this, t), this.value = e, this.children = n
      }

      return _createClass(t, [{
        key: "toString", value: function () {
          return "TreeNode(".concat(this.value, ")")
        }
      }]), t
    }();

    function Gx(t) {
      var e = {};
      return t && t.children.forEach((function (t) {
        return e[t.value.outlet] = t
      })), e
    }

    var Qx = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this, t)).snapshot = r, Jx(_assertThisInitialized(i), t), i
      }

      return _createClass(n, [{
        key: "toString", value: function () {
          return this.snapshot.toString()
        }
      }]), n
    }(Vx);

    function Yx(t, e) {
      var n = function (t, e) {
          var n = new Kx([], {}, {}, "", {}, "primary", e, null, t.root, -1, {});
          return new $x("", new Wx(n, []))
        }(t, e), r = new Yw([new xx("", {})]), i = new Yw({}), a = new Yw({}), o = new Yw({}), s = new Yw(""),
        l = new Zx(r, i, o, s, a, "primary", e, n.root);
      return l.snapshot = n.root, new Qx(new Wx(l, []), n)
    }

    var Zx = function () {
      function t(e, n, r, i, a, o, s, l) {
        _classCallCheck(this, t), this.url = e, this.params = n, this.queryParams = r, this.fragment = i, this.data = a, this.outlet = o, this.component = s, this._futureSnapshot = l
      }

      return _createClass(t, [{
        key: "toString", value: function () {
          return this.snapshot ? this.snapshot.toString() : "Future(".concat(this._futureSnapshot, ")")
        }
      }, {
        key: "routeConfig", get: function () {
          return this._futureSnapshot.routeConfig
        }
      }, {
        key: "root", get: function () {
          return this._routerState.root
        }
      }, {
        key: "parent", get: function () {
          return this._routerState.parent(this)
        }
      }, {
        key: "firstChild", get: function () {
          return this._routerState.firstChild(this)
        }
      }, {
        key: "children", get: function () {
          return this._routerState.children(this)
        }
      }, {
        key: "pathFromRoot", get: function () {
          return this._routerState.pathFromRoot(this)
        }
      }, {
        key: "paramMap", get: function () {
          return this._paramMap || (this._paramMap = this.params.pipe(U((function (t) {
            return sx(t)
          })))), this._paramMap
        }
      }, {
        key: "queryParamMap", get: function () {
          return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(U((function (t) {
            return sx(t)
          })))), this._queryParamMap
        }
      }]), t
    }();

    function Xx(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "emptyOnly", n = t.pathFromRoot, r = 0;
      if ("always" !== e) for (r = n.length - 1; r >= 1;) {
        var i = n[r], a = n[r - 1];
        if (i.routeConfig && "" === i.routeConfig.path) r--; else {
          if (a.component) break;
          r--
        }
      }
      return function (t) {
        return t.reduce((function (t, e) {
          return {
            params: Object.assign(Object.assign({}, t.params), e.params),
            data: Object.assign(Object.assign({}, t.data), e.data),
            resolve: Object.assign(Object.assign({}, t.resolve), e._resolvedData)
          }
        }), {params: {}, data: {}, resolve: {}})
      }(n.slice(r))
    }

    var Kx = function () {
      function t(e, n, r, i, a, o, s, l, u, c, h) {
        _classCallCheck(this, t), this.url = e, this.params = n, this.queryParams = r, this.fragment = i, this.data = a, this.outlet = o, this.component = s, this.routeConfig = l, this._urlSegment = u, this._lastPathIndex = c, this._resolve = h
      }

      return _createClass(t, [{
        key: "toString", value: function () {
          return "Route(url:'".concat(this.url.map((function (t) {
            return t.toString()
          })).join("/"), "', path:'").concat(this.routeConfig ? this.routeConfig.path : "", "')")
        }
      }, {
        key: "root", get: function () {
          return this._routerState.root
        }
      }, {
        key: "parent", get: function () {
          return this._routerState.parent(this)
        }
      }, {
        key: "firstChild", get: function () {
          return this._routerState.firstChild(this)
        }
      }, {
        key: "children", get: function () {
          return this._routerState.children(this)
        }
      }, {
        key: "pathFromRoot", get: function () {
          return this._routerState.pathFromRoot(this)
        }
      }, {
        key: "paramMap", get: function () {
          return this._paramMap || (this._paramMap = sx(this.params)), this._paramMap
        }
      }, {
        key: "queryParamMap", get: function () {
          return this._queryParamMap || (this._queryParamMap = sx(this.queryParams)), this._queryParamMap
        }
      }]), t
    }(), $x = function (t) {
      _inherits(n, t);
      var e = _createSuper(n);

      function n(t, r) {
        var i;
        return _classCallCheck(this, n), (i = e.call(this, r)).url = t, Jx(_assertThisInitialized(i), r), i
      }

      return _createClass(n, [{
        key: "toString", value: function () {
          return tS(this._root)
        }
      }]), n
    }(Vx);

    function Jx(t, e) {
      e.value._routerState = t, e.children.forEach((function (e) {
        return Jx(t, e)
      }))
    }

    function tS(t) {
      var e = t.children.length > 0 ? " { ".concat(t.children.map(tS).join(", "), " } ") : "";
      return "".concat(t.value).concat(e)
    }

    function eS(t) {
      if (t.snapshot) {
        var e = t.snapshot, n = t._futureSnapshot;
        t.snapshot = n, vx(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), vx(e.params, n.params) || t.params.next(n.params), function (t, e) {
          if (t.length !== e.length) return !1;
          for (var n = 0; n < t.length; ++n) if (!vx(t[n], e[n])) return !1;
          return !0
        }(e.url, n.url) || t.url.next(n.url), vx(e.data, n.data) || t.data.next(n.data)
      } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
    }

    function nS(t, e) {
      var n, r;
      return vx(t.params, e.params) && Sx(n = t.url, r = e.url) && n.every((function (t, e) {
        return vx(t.parameters, r[e].parameters)
      })) && !(!t.parent != !e.parent) && (!t.parent || nS(t.parent, e.parent))
    }

    function rS(t) {
      return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
    }

    function iS(t, e, n, r, i) {
      var a = {};
      return r && _x(r, (function (t, e) {
        a[e] = Array.isArray(t) ? t.map((function (t) {
          return "" + t
        })) : "" + t
      })), new wx(n.root === t ? e : function t(e, n, r) {
        var i = {};
        return _x(e.children, (function (e, a) {
          i[a] = e === n ? r : t(e, n, r)
        })), new Cx(e.segments, i)
      }(n.root, t, e), a, i)
    }

    var aS = function () {
      function t(e, n, r) {
        if (_classCallCheck(this, t), this.isAbsolute = e, this.numberOfDoubleDots = n, this.commands = r, e && r.length > 0 && rS(r[0])) throw new Error("Root segment cannot have matrix parameters");
        var i = r.find((function (t) {
          return "object" == typeof t && null != t && t.outlets
        }));
        if (i && i !== mx(r)) throw new Error("{outlets:{}} has to be the last command")
      }

      return _createClass(t, [{
        key: "toRoot", value: function () {
          return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
        }
      }]), t
    }(), oS = function t(e, n, r) {
      _classCallCheck(this, t), this.segmentGroup = e, this.processChildren = n, this.index = r
    };

    function sS(t) {
      return "object" == typeof t && null != t && t.outlets ? t.outlets.primary : "" + t
    }

    function lS(t, e, n) {
      if (t || (t = new Cx([], {})), 0 === t.segments.length && t.hasChildren()) return uS(t, e, n);
      var r = function (t, e, n) {
        for (var r = 0, i = e, a = {match: !1, pathIndex: 0, commandIndex: 0}; i < t.segments.length;) {
          if (r >= n.length) return a;
          var o = t.segments[i], s = sS(n[r]), l = r < n.length - 1 ? n[r + 1] : null;
          if (i > 0 && void 0 === s) break;
          if (s && l && "object" == typeof l && void 0 === l.outlets) {
            if (!dS(s, l, o)) return a;
            r += 2
          } else {
            if (!dS(s, {}, o)) return a;
            r++
          }
          i++
        }
        return {match: !0, pathIndex: i, commandIndex: r}
      }(t, e, n), i = n.slice(r.commandIndex);
      if (r.match && r.pathIndex < t.segments.length) {
        var a = new Cx(t.segments.slice(0, r.pathIndex), {});
        return a.children.primary = new Cx(t.segments.slice(r.pathIndex), t.children), uS(a, 0, i)
      }
      return r.match && 0 === i.length ? new Cx(t.segments, {}) : r.match && !t.hasChildren() ? cS(t, e, n) : r.match ? uS(t, 0, i) : cS(t, e, n)
    }

    function uS(t, e, n) {
      if (0 === n.length) return new Cx(t.segments, {});
      var r = function (t) {
        return "object" != typeof t[0] || void 0 === t[0].outlets ? {primary: t} : t[0].outlets
      }(n), i = {};
      return _x(r, (function (n, r) {
        null !== n && (i[r] = lS(t.children[r], e, n))
      })), _x(t.children, (function (t, e) {
        void 0 === r[e] && (i[e] = t)
      })), new Cx(t.segments, i)
    }

    function cS(t, e, n) {
      for (var r = t.segments.slice(0, e), i = 0; i < n.length;) {
        if ("object" == typeof n[i] && void 0 !== n[i].outlets) {
          var a = hS(n[i].outlets);
          return new Cx(r, a)
        }
        if (0 === i && rS(n[0])) r.push(new xx(t.segments[e].path, n[0])), i++; else {
          var o = sS(n[i]), s = i < n.length - 1 ? n[i + 1] : null;
          o && s && rS(s) ? (r.push(new xx(o, fS(s))), i += 2) : (r.push(new xx(o, {})), i++)
        }
      }
      return new Cx(r, {})
    }

    function hS(t) {
      var e = {};
      return _x(t, (function (t, n) {
        null !== t && (e[n] = cS(new Cx([], {}), 0, t))
      })), e
    }

    function fS(t) {
      var e = {};
      return _x(t, (function (t, n) {
        return e[n] = "" + t
      })), e
    }

    function dS(t, e, n) {
      return t == n.path && vx(e, n.parameters)
    }

    var pS = function () {
      function t(e, n, r, i) {
        _classCallCheck(this, t), this.routeReuseStrategy = e, this.futureState = n, this.currState = r, this.forwardEvent = i
      }

      return _createClass(t, [{
        key: "activate", value: function (t) {
          var e = this.futureState._root, n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t), eS(this.futureState.root), this.activateChildRoutes(e, n, t)
        }
      }, {
        key: "deactivateChildRoutes", value: function (t, e, n) {
          var r = this, i = Gx(e);
          t.children.forEach((function (t) {
            var e = t.value.outlet;
            r.deactivateRoutes(t, i[e], n), delete i[e]
          })), _x(i, (function (t, e) {
            r.deactivateRouteAndItsChildren(t, n)
          }))
        }
      }, {
        key: "deactivateRoutes", value: function (t, e, n) {
          var r = t.value, i = e ? e.value : null;
          if (r === i) if (r.component) {
            var a = n.getContext(r.outlet);
            a && this.deactivateChildRoutes(t, e, a.children)
          } else this.deactivateChildRoutes(t, e, n); else i && this.deactivateRouteAndItsChildren(e, n)
        }
      }, {
        key: "deactivateRouteAndItsChildren", value: function (t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
        }
      }, {
        key: "detachAndStoreRouteSubtree", value: function (t, e) {
          var n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            var r = n.outlet.detach(), i = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {componentRef: r, route: t, contexts: i})
          }
        }
      }, {
        key: "deactivateRouteAndOutlet", value: function (t, e) {
          var n = this, r = e.getContext(t.value.outlet);
          if (r) {
            var i = Gx(t), a = t.value.component ? r.children : e;
            _x(i, (function (t, e) {
              return n.deactivateRouteAndItsChildren(t, a)
            })), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated())
          }
        }
      }, {
        key: "activateChildRoutes", value: function (t, e, n) {
          var r = this, i = Gx(e);
          t.children.forEach((function (t) {
            r.activateRoutes(t, i[t.value.outlet], n), r.forwardEvent(new rx(t.value.snapshot))
          })), t.children.length && this.forwardEvent(new ex(t.value.snapshot))
        }
      }, {
        key: "activateRoutes", value: function (t, e, n) {
          var r = t.value, i = e ? e.value : null;
          if (eS(r), r === i) if (r.component) {
            var a = n.getOrCreateContext(r.outlet);
            this.activateChildRoutes(t, e, a.children)
          } else this.activateChildRoutes(t, e, n); else if (r.component) {
            var o = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              var s = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null), o.children.onOutletReAttached(s.contexts), o.attachRef = s.componentRef, o.route = s.route.value, o.outlet && o.outlet.attach(s.componentRef, s.route.value), vS(s.route)
            } else {
              var l = function (t) {
                for (var e = t.parent; e; e = e.parent) {
                  var n = e.routeConfig;
                  if (n && n._loadedConfig) return n._loadedConfig;
                  if (n && n.component) return null
                }
                return null
              }(r.snapshot), u = l ? l.module.componentFactoryResolver : null;
              o.attachRef = null, o.route = r, o.resolver = u, o.outlet && o.outlet.activateWith(r, u), this.activateChildRoutes(t, null, o.children)
            }
          } else this.activateChildRoutes(t, null, n)
        }
      }]), t
    }();

    function vS(t) {
      eS(t.value), t.children.forEach(vS)
    }

    function gS(t) {
      return "function" == typeof t
    }

    function yS(t) {
      return t instanceof wx
    }

    var mS = function t(e) {
      _classCallCheck(this, t), this.segmentGroup = e || null
    }, _S = function t(e) {
      _classCallCheck(this, t), this.urlTree = e
    };

    function kS(t) {
      return new C((function (e) {
        return e.error(new mS(t))
      }))
    }

    function bS(t) {
      return new C((function (e) {
        return e.error(new _S(t))
      }))
    }

    function wS(t) {
      return new C((function (e) {
        return e.error(new Error("Only absolute redirects can have named outlets. redirectTo: '".concat(t, "'")))
      }))
    }

    var CS = function () {
      function t(e, n, r, i, a) {
        _classCallCheck(this, t), this.configLoader = n, this.urlSerializer = r, this.urlTree = i, this.config = a, this.allowRedirects = !0, this.ngModule = e.get(te)
      }

      return _createClass(t, [{
        key: "apply", value: function () {
          var t = this;
          return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, "primary").pipe(U((function (e) {
            return t.createUrlTree(e, t.urlTree.queryParams, t.urlTree.fragment)
          }))).pipe(mC((function (e) {
            if (e instanceof _S) return t.allowRedirects = !1, t.match(e.urlTree);
            if (e instanceof mS) throw t.noMatchError(e);
            throw e
          })))
        }
      }, {
        key: "match", value: function (t) {
          var e = this;
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, "primary").pipe(U((function (n) {
            return e.createUrlTree(n, t.queryParams, t.fragment)
          }))).pipe(mC((function (t) {
            if (t instanceof mS) throw e.noMatchError(t);
            throw t
          })))
        }
      }, {
        key: "noMatchError", value: function (t) {
          return new Error("Cannot match any routes. URL Segment: '".concat(t.segmentGroup, "'"))
        }
      }, {
        key: "createUrlTree", value: function (t, e, n) {
          var r = t.segments.length > 0 ? new Cx([], {primary: t}) : t;
          return new wx(r, e, n)
        }
      }, {
        key: "expandSegmentGroup", value: function (t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(U((function (t) {
            return new Cx([], t)
          }))) : this.expandSegment(t, n, e, n.segments, r, !0)
        }
      }, {
        key: "expandChildren", value: function (t, e, n) {
          var r = this;
          return function (n, i) {
            if (0 === Object.keys(n).length) return Qw({});
            var a = [], o = [], s = {};
            return _x(n, (function (n, i) {
              var l, u, c = (l = i, u = n, r.expandSegmentGroup(t, e, u, l)).pipe(U((function (t) {
                return s[i] = t
              })));
              "primary" === i ? a.push(c) : o.push(c)
            })), Qw.apply(null, a.concat(o)).pipe(nC(), yC(), U((function () {
              return s
            })))
          }(n.children)
        }
      }, {
        key: "expandSegment", value: function (t, e, n, r, i, a) {
          var o = this;
          return Qw.apply(void 0, _toConsumableArray(n)).pipe(U((function (s) {
            return o.expandSegmentAgainstRoute(t, e, n, s, r, i, a).pipe(mC((function (t) {
              if (t instanceof mS) return Qw(null);
              throw t
            })))
          })), nC(), xC((function (t) {
            return !!t
          })), mC((function (t, n) {
            if (t instanceof Zw || "EmptyError" === t.name) {
              if (o.noLeftoversInUrl(e, r, i)) return Qw(new Cx([], {}));
              throw new mS(e)
            }
            throw t
          })))
        }
      }, {
        key: "noLeftoversInUrl", value: function (t, e, n) {
          return 0 === e.length && !t.children[n]
        }
      }, {
        key: "expandSegmentAgainstRoute", value: function (t, e, n, r, i, a, o) {
          return ES(r) !== a ? kS(e) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, i) : o && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, i, a) : kS(e)
        }
      }, {
        key: "expandSegmentAgainstRouteUsingRedirect", value: function (t, e, n, r, i, a) {
          return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, a) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, i, a)
        }
      }, {
        key: "expandWildCardWithParamsAgainstRouteUsingRedirect", value: function (t, e, n, r) {
          var i = this, a = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith("/") ? bS(a) : this.lineralizeSegments(n, a).pipe(W((function (n) {
            var a = new Cx(n, {});
            return i.expandSegment(t, a, e, n, r, !1)
          })))
        }
      }, {
        key: "expandRegularSegmentAgainstRouteUsingRedirect", value: function (t, e, n, r, i, a) {
          var o = this, s = xS(e, r, i), l = s.matched, u = s.consumedSegments, c = s.lastChild,
            h = s.positionalParamSegments;
          if (!l) return kS(e);
          var f = this.applyRedirectCommands(u, r.redirectTo, h);
          return r.redirectTo.startsWith("/") ? bS(f) : this.lineralizeSegments(r, f).pipe(W((function (r) {
            return o.expandSegment(t, e, n, r.concat(i.slice(c)), a, !1)
          })))
        }
      }, {
        key: "matchSegmentAgainstRoute", value: function (t, e, n, r) {
          var i = this;
          if ("**" === n.path) return n.loadChildren ? this.configLoader.load(t.injector, n).pipe(U((function (t) {
            return n._loadedConfig = t, new Cx(r, {})
          }))) : Qw(new Cx(r, {}));
          var a = xS(e, n, r), o = a.matched, s = a.consumedSegments, l = a.lastChild;
          if (!o) return kS(e);
          var u = r.slice(l);
          return this.getChildConfig(t, n, r).pipe(W((function (t) {
            var n = t.module, r = t.routes, a = function (t, e, n, r) {
              return n.length > 0 && function (t, e, n) {
                return n.some((function (n) {
                  return TS(t, e, n) && "primary" !== ES(n)
                }))
              }(t, n, r) ? {
                segmentGroup: SS(new Cx(e, function (t, e) {
                  var n = {};
                  n.primary = e;
                  var r, i = _createForOfIteratorHelper(t);
                  try {
                    for (i.s(); !(r = i.n()).done;) {
                      var a = r.value;
                      "" === a.path && "primary" !== ES(a) && (n[ES(a)] = new Cx([], {}))
                    }
                  } catch (o) {
                    i.e(o)
                  } finally {
                    i.f()
                  }
                  return n
                }(r, new Cx(n, t.children)))), slicedSegments: []
              } : 0 === n.length && function (t, e, n) {
                return n.some((function (n) {
                  return TS(t, e, n)
                }))
              }(t, n, r) ? {
                segmentGroup: SS(new Cx(t.segments, function (t, e, n, r) {
                  var i, a = {}, o = _createForOfIteratorHelper(n);
                  try {
                    for (o.s(); !(i = o.n()).done;) {
                      var s = i.value;
                      TS(t, e, s) && !r[ES(s)] && (a[ES(s)] = new Cx([], {}))
                    }
                  } catch (l) {
                    o.e(l)
                  } finally {
                    o.f()
                  }
                  return Object.assign(Object.assign({}, r), a)
                }(t, n, r, t.children))), slicedSegments: n
              } : {segmentGroup: t, slicedSegments: n}
            }(e, s, u, r), o = a.segmentGroup, l = a.slicedSegments;
            return 0 === l.length && o.hasChildren() ? i.expandChildren(n, r, o).pipe(U((function (t) {
              return new Cx(s, t)
            }))) : 0 === r.length && 0 === l.length ? Qw(new Cx(s, {})) : i.expandSegment(n, o, r, l, "primary", !0).pipe(U((function (t) {
              return new Cx(s.concat(t.segments), t.children)
            })))
          })))
        }
      }, {
        key: "getChildConfig", value: function (t, e, n) {
          var r = this;
          return e.children ? Qw(new cx(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? Qw(e._loadedConfig) : function (t, e, n) {
            var r, i = e.canLoad;
            return i && 0 !== i.length ? q(i).pipe(U((function (r) {
              var i, a = t.get(r);
              if (function (t) {
                return t && gS(t.canLoad)
              }(a)) i = a.canLoad(e, n); else {
                if (!gS(a)) throw new Error("Invalid CanLoad guard");
                i = a(e, n)
              }
              return kx(i)
            }))).pipe(nC(), (r = function (t) {
              return !0 === t
            }, function (t) {
              return t.lift(new SC(r, void 0, t))
            })) : Qw(!0)
          }(t.injector, e, n).pipe(W((function (n) {
            return n ? r.configLoader.load(t.injector, e).pipe(U((function (t) {
              return e._loadedConfig = t, t
            }))) : function (t) {
              return new C((function (e) {
                return e.error(lx("Cannot load children because the guard of the route \"path: '".concat(t.path, "'\" returned false")))
              }))
            }(e)
          }))) : Qw(new cx([], t))
        }
      }, {
        key: "lineralizeSegments", value: function (t, e) {
          for (var n = [], r = e.root; ;) {
            if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Qw(n);
            if (r.numberOfChildren > 1 || !r.children.primary) return wS(t.redirectTo);
            r = r.children.primary
          }
        }
      }, {
        key: "applyRedirectCommands", value: function (t, e, n) {
          return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
        }
      }, {
        key: "applyRedirectCreatreUrlTree", value: function (t, e, n, r) {
          var i = this.createSegmentGroup(t, e.root, n, r);
          return new wx(i, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
        }
      }, {
        key: "createQueryParams", value: function (t, e) {
          var n = {};
          return _x(t, (function (t, r) {
            if ("string" == typeof t && t.startsWith(":")) {
              var i = t.substring(1);
              n[r] = e[i]
            } else n[r] = t
          })), n
        }
      }, {
        key: "createSegmentGroup", value: function (t, e, n, r) {
          var i = this, a = this.createSegments(t, e.segments, n, r), o = {};
          return _x(e.children, (function (e, a) {
            o[a] = i.createSegmentGroup(t, e, n, r)
          })), new Cx(a, o)
        }
      }, {
        key: "createSegments", value: function (t, e, n, r) {
          var i = this;
          return e.map((function (e) {
            return e.path.startsWith(":") ? i.findPosParam(t, e, r) : i.findOrReturn(e, n)
          }))
        }
      }, {
        key: "findPosParam", value: function (t, e, n) {
          var r = n[e.path.substring(1)];
          if (!r) throw new Error("Cannot redirect to '".concat(t, "'. Cannot find '").concat(e.path, "'."));
          return r
        }
      }, {
        key: "findOrReturn", value: function (t, e) {
          var n, r = 0, i = _createForOfIteratorHelper(e);
          try {
            for (i.s(); !(n = i.n()).done;) {
              var a = n.value;
              if (a.path === t.path) return e.splice(r), a;
              r++
            }
          } catch (o) {
            i.e(o)
          } finally {
            i.f()
          }
          return t
        }
      }]), t
    }();

    function xS(t, e, n) {
      if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? {
        matched: !1,
        consumedSegments: [],
        lastChild: 0,
        positionalParamSegments: {}
      } : {matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {}};
      var r = (e.matcher || ux)(n, t, e);
      return r ? {
        matched: !0,
        consumedSegments: r.consumed,
        lastChild: r.consumed.length,
        positionalParamSegments: r.posParams
      } : {matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {}}
    }

    function SS(t) {
      if (1 === t.numberOfChildren && t.children.primary) {
        var e = t.children.primary;
        return new Cx(t.segments.concat(e.segments), e.children)
      }
      return t
    }

    function TS(t, e, n) {
      return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
    }

    function ES(t) {
      return t.outlet || "primary"
    }

    var AS = function t(e) {
      _classCallCheck(this, t), this.path = e, this.route = this.path[this.path.length - 1]
    }, OS = function t(e, n) {
      _classCallCheck(this, t), this.component = e, this.route = n
    };

    function LS(t, e, n) {
      var r = function (t) {
        if (!t) return null;
        for (var e = t.parent; e; e = e.parent) {
          var n = e.routeConfig;
          if (n && n._loadedConfig) return n._loadedConfig
        }
        return null
      }(e);
      return (r ? r.module.injector : n).get(t)
    }

    function PS(t, e, n) {
      var r = Gx(t), i = t.value;
      _x(r, (function (t, r) {
        PS(t, i.component ? e ? e.children.getContext(r) : null : e, n)
      })), n.canDeactivateChecks.push(new OS(i.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, i))
    }

    var MS = Symbol("INITIAL_VALUE");

    function DS() {
      return EC((function (t) {
        return (function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
          var r = null, i = null;
          return P(e[e.length - 1]) && (i = e.pop()), "function" == typeof e[e.length - 1] && (r = e.pop()), 1 === e.length && l(e[0]) && (e = e[0]), Z(e, i).lift(new Kw(r))
        }).apply(void 0, _toConsumableArray(t.map((function (t) {
          return t.pipe(bC(1), function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            var r = e[e.length - 1];
            return P(r) ? (e.pop(), function (t) {
              return LC(e, t, r)
            }) : function (t) {
              return LC(e, t)
            }
          }(MS))
        })))).pipe(PC((function (t, e) {
          var n = !1;
          return e.reduce((function (t, r, i) {
            if (t !== MS) return t;
            if (r === MS && (n = !0), !n) {
              if (!1 === r) return r;
              if (i === e.length - 1 || yS(r)) return r
            }
            return t
          }), t)
        }), MS), rC((function (t) {
          return t !== MS
        })), U((function (t) {
          return yS(t) ? t : !0 === t
        })), bC(1))
      }))
    }

    function IS(t, e) {
      return null !== t && e && e(new nx(t)), Qw(!0)
    }

    function RS(t, e) {
      return null !== t && e && e(new tx(t)), Qw(!0)
    }

    function FS(t, e, n) {
      var r = e.routeConfig ? e.routeConfig.canActivate : null;
      return r && 0 !== r.length ? Qw(r.map((function (r) {
        return eC((function () {
          var i, a = LS(r, e, n);
          if (function (t) {
            return t && gS(t.canActivate)
          }(a)) i = kx(a.canActivate(e, t)); else {
            if (!gS(a)) throw new Error("Invalid CanActivate guard");
            i = kx(a(e, t))
          }
          return i.pipe(xC())
        }))
      }))).pipe(DS()) : Qw(!0)
    }

    function NS(t, e, n) {
      var r = e[e.length - 1], i = e.slice(0, e.length - 1).reverse().map((function (t) {
        return function (t) {
          var e = t.routeConfig ? t.routeConfig.canActivateChild : null;
          return e && 0 !== e.length ? {node: t, guards: e} : null
        }(t)
      })).filter((function (t) {
        return null !== t
      })).map((function (e) {
        return eC((function () {
          return Qw(e.guards.map((function (i) {
            var a, o = LS(i, e.node, n);
            if (function (t) {
              return t && gS(t.canActivateChild)
            }(o)) a = kx(o.canActivateChild(r, t)); else {
              if (!gS(o)) throw new Error("Invalid CanActivateChild guard");
              a = kx(o(r, t))
            }
            return a.pipe(xC())
          }))).pipe(DS())
        }))
      }));
      return Qw(i).pipe(DS())
    }

    var jS = function t() {
      _classCallCheck(this, t)
    }, HS = function () {
      function t(e, n, r, i, a, o) {
        _classCallCheck(this, t), this.rootComponentType = e, this.config = n, this.urlTree = r, this.url = i, this.paramsInheritanceStrategy = a, this.relativeLinkResolution = o
      }

      return _createClass(t, [{
        key: "recognize", value: function () {
          try {
            var t = VS(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
              e = this.processSegmentGroup(this.config, t, "primary"),
              n = new Kx([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, "primary", this.rootComponentType, null, this.urlTree.root, -1, {}),
              r = new Wx(n, e), i = new $x(this.url, r);
            return this.inheritParamsAndData(i._root), Qw(i)
          } catch (a) {
            return new C((function (t) {
              return t.error(a)
            }))
          }
        }
      }, {
        key: "inheritParamsAndData", value: function (t) {
          var e = this, n = t.value, r = Xx(n, this.paramsInheritanceStrategy);
          n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), t.children.forEach((function (t) {
            return e.inheritParamsAndData(t)
          }))
        }
      }, {
        key: "processSegmentGroup", value: function (t, e, n) {
          return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
        }
      }, {
        key: "processChildren", value: function (t, e) {
          var n, r = this, i = Tx(e, (function (e, n) {
            return r.processSegmentGroup(t, e, n)
          }));
          return n = {}, i.forEach((function (t) {
            var e = n[t.value.outlet];
            if (e) {
              var r = e.url.map((function (t) {
                return t.toString()
              })).join("/"), i = t.value.url.map((function (t) {
                return t.toString()
              })).join("/");
              throw new Error("Two segments cannot have the same outlet name: '".concat(r, "' and '").concat(i, "'."))
            }
            n[t.value.outlet] = t.value
          })), i.sort((function (t, e) {
            return "primary" === t.value.outlet ? -1 : "primary" === e.value.outlet ? 1 : t.value.outlet.localeCompare(e.value.outlet)
          })), i
        }
      }, {
        key: "processSegment", value: function (t, e, n, r) {
          var i, a = _createForOfIteratorHelper(t);
          try {
            for (a.s(); !(i = a.n()).done;) {
              var o = i.value;
              try {
                return this.processSegmentAgainstRoute(o, e, n, r)
              } catch (s) {
                if (!(s instanceof jS)) throw s
              }
            }
          } catch (l) {
            a.e(l)
          } finally {
            a.f()
          }
          if (this.noLeftoversInUrl(e, n, r)) return [];
          throw new jS
        }
      }, {
        key: "noLeftoversInUrl", value: function (t, e, n) {
          return 0 === e.length && !t.children[n]
        }
      }, {
        key: "processSegmentAgainstRoute", value: function (t, e, n, r) {
          if (t.redirectTo) throw new jS;
          if ((t.outlet || "primary") !== r) throw new jS;
          var i, a = [], o = [];
          if ("**" === t.path) {
            var s = n.length > 0 ? mx(n).parameters : {};
            i = new Kx(n, s, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, WS(t), r, t.component, t, US(e), zS(e) + n.length, GS(t))
          } else {
            var l = function (t, e, n) {
              if ("" === e.path) {
                if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new jS;
                return {consumedSegments: [], lastChild: 0, parameters: {}}
              }
              var r = (e.matcher || ux)(n, t, e);
              if (!r) throw new jS;
              var i = {};
              _x(r.posParams, (function (t, e) {
                i[e] = t.path
              }));
              var a = r.consumed.length > 0 ? Object.assign(Object.assign({}, i), r.consumed[r.consumed.length - 1].parameters) : i;
              return {consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: a}
            }(e, t, n);
            a = l.consumedSegments, o = n.slice(l.lastChild), i = new Kx(a, l.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, WS(t), r, t.component, t, US(e), zS(e) + a.length, GS(t))
          }
          var u = function (t) {
            return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
          }(t), c = VS(e, a, o, u, this.relativeLinkResolution), h = c.segmentGroup, f = c.slicedSegments;
          if (0 === f.length && h.hasChildren()) {
            var d = this.processChildren(u, h);
            return [new Wx(i, d)]
          }
          if (0 === u.length && 0 === f.length) return [new Wx(i, [])];
          var p = this.processSegment(u, h, f, "primary");
          return [new Wx(i, p)]
        }
      }]), t
    }();

    function US(t) {
      for (var e = t; e._sourceSegment;) e = e._sourceSegment;
      return e
    }

    function zS(t) {
      for (var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment;) n += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0;
      return n - 1
    }

    function VS(t, e, n, r, i) {
      if (n.length > 0 && function (t, e, n) {
        return n.some((function (n) {
          return BS(t, e, n) && "primary" !== qS(n)
        }))
      }(t, n, r)) {
        var a = new Cx(e, function (t, e, n, r) {
          var i = {};
          i.primary = r, r._sourceSegment = t, r._segmentIndexShift = e.length;
          var a, o = _createForOfIteratorHelper(n);
          try {
            for (o.s(); !(a = o.n()).done;) {
              var s = a.value;
              if ("" === s.path && "primary" !== qS(s)) {
                var l = new Cx([], {});
                l._sourceSegment = t, l._segmentIndexShift = e.length, i[qS(s)] = l
              }
            }
          } catch (u) {
            o.e(u)
          } finally {
            o.f()
          }
          return i
        }(t, e, r, new Cx(n, t.children)));
        return a._sourceSegment = t, a._segmentIndexShift = e.length, {segmentGroup: a, slicedSegments: []}
      }
      if (0 === n.length && function (t, e, n) {
        return n.some((function (n) {
          return BS(t, e, n)
        }))
      }(t, n, r)) {
        var o = new Cx(t.segments, function (t, e, n, r, i, a) {
          var o, s = {}, l = _createForOfIteratorHelper(r);
          try {
            for (l.s(); !(o = l.n()).done;) {
              var u = o.value;
              if (BS(t, n, u) && !i[qS(u)]) {
                var c = new Cx([], {});
                c._sourceSegment = t, c._segmentIndexShift = "legacy" === a ? t.segments.length : e.length, s[qS(u)] = c
              }
            }
          } catch (h) {
            l.e(h)
          } finally {
            l.f()
          }
          return Object.assign(Object.assign({}, i), s)
        }(t, e, n, r, t.children, i));
        return o._sourceSegment = t, o._segmentIndexShift = e.length, {segmentGroup: o, slicedSegments: n}
      }
      var s = new Cx(t.segments, t.children);
      return s._sourceSegment = t, s._segmentIndexShift = e.length, {segmentGroup: s, slicedSegments: n}
    }

    function BS(t, e, n) {
      return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
    }

    function qS(t) {
      return t.outlet || "primary"
    }

    function WS(t) {
      return t.data || {}
    }

    function GS(t) {
      return t.resolve || {}
    }

    function QS(t, e, n, r) {
      var i = LS(t, e, r);
      return kx(i.resolve ? i.resolve(e, n) : i(e, n))
    }

    function YS(t) {
      return function (e) {
        return e.pipe(EC((function (e) {
          var n = t(e);
          return n ? q(n).pipe(U((function () {
            return e
          }))) : q([e])
        })))
      }
    }

    var ZS = function () {
      function t() {
        _classCallCheck(this, t)
      }

      return _createClass(t, [{
        key: "shouldDetach", value: function (t) {
          return !1
        }
      }, {
        key: "store", value: function (t, e) {
        }
      }, {
        key: "shouldAttach", value: function (t) {
          return !1
        }
      }, {
        key: "retrieve", value: function (t) {
          return null
        }
      }, {
        key: "shouldReuseRoute", value: function (t, e) {
          return t.routeConfig === e.routeConfig
        }
      }]), t
    }(), XS = new zt("ROUTES"), KS = function () {
      function t(e, n, r, i) {
        _classCallCheck(this, t), this.loader = e, this.compiler = n, this.onLoadStartListener = r, this.onLoadEndListener = i
      }

      return _createClass(t, [{
        key: "load", value: function (t, e) {
          var n = this;
          return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe(U((function (r) {
            n.onLoadEndListener && n.onLoadEndListener(e);
            var i = r.create(t);
            return new cx(yx(i.injector.get(XS)).map(px), i)
          })))
        }
      }, {
        key: "loadModuleFactory", value: function (t) {
          var e = this;
          return "string" == typeof t ? q(this.loader.load(t)) : kx(t()).pipe(W((function (t) {
            return t instanceof ee ? Qw(t) : q(e.compiler.compileModuleAsync(t))
          })))
        }
      }]), t
    }(), $S = function () {
      function t() {
        _classCallCheck(this, t)
      }

      return _createClass(t, [{
        key: "shouldProcessUrl", value: function (t) {
          return !0
        }
      }, {
        key: "extract", value: function (t) {
          return t
        }
      }, {
        key: "merge", value: function (t, e) {
          return t
        }
      }]), t
    }();

    function JS(t) {
      throw t
    }

    function tT(t, e, n) {
      return e.parse("/")
    }

    function eT(t, e) {
      return Qw(null)
    }

    var nT, rT, iT, aT = ((iT = function () {
      function t(e, n, r, i, a, o, s, l) {
        var u = this;
        _classCallCheck(this, t), this.rootComponentType = e, this.urlSerializer = n, this.rootContexts = r, this.location = i, this.config = l, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new O, this.errorHandler = JS, this.malformedUriErrorHandler = tT, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
          beforePreactivation: eT,
          afterPreactivation: eT
        }, this.urlHandlingStrategy = new $S, this.routeReuseStrategy = new ZS, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = a.get(te), this.console = a.get(Hl);
        var c = a.get(Jl);
        this.isNgZoneEnabled = c instanceof Jl, this.resetConfig(l), this.currentUrlTree = new wx(new Cx([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new KS(o, s, (function (t) {
          return u.triggerEvent(new $C(t))
        }), (function (t) {
          return u.triggerEvent(new JC(t))
        })), this.routerState = Yx(this.currentUrlTree, this.rootComponentType), this.transitions = new Yw({
          id: 0,
          currentUrlTree: this.currentUrlTree,
          currentRawUrl: this.currentUrlTree,
          extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
          urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
          rawUrl: this.currentUrlTree,
          extras: {},
          resolve: null,
          reject: null,
          promise: Promise.resolve(!0),
          source: "imperative",
          restoredState: null,
          currentSnapshot: this.routerState.snapshot,
          targetSnapshot: null,
          currentRouterState: this.routerState,
          targetRouterState: null,
          guards: {canActivateChecks: [], canDeactivateChecks: []},
          guardsResult: null
        }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
      }

      return _createClass(t, [{
        key: "setupNavigations", value: function (t) {
          var e = this, n = this.events;
          return t.pipe(rC((function (t) {
            return 0 !== t.id
          })), U((function (t) {
            return Object.assign(Object.assign({}, t), {extractedUrl: e.urlHandlingStrategy.extract(t.rawUrl)})
          })), EC((function (t) {
            var r, i, a, o, s = !1, l = !1;
            return Qw(t).pipe(FC((function (t) {
              e.currentNavigation = {
                id: t.id,
                initialUrl: t.currentRawUrl,
                extractedUrl: t.extractedUrl,
                trigger: t.source,
                extras: t.extras,
                previousNavigation: e.lastSuccessfulNavigation ? Object.assign(Object.assign({}, e.lastSuccessfulNavigation), {previousNavigation: null}) : null
              }
            })), EC((function (t) {
              var r, i, a, o, s = !e.navigated || t.extractedUrl.toString() !== e.browserUrlTree.toString();
              if (("reload" === e.onSameUrlNavigation || s) && e.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) return Qw(t).pipe(EC((function (t) {
                var r = e.transitions.getValue();
                return n.next(new BC(t.id, e.serializeUrl(t.extractedUrl), t.source, t.restoredState)), r !== e.transitions.getValue() ? Jw : [t]
              })), EC((function (t) {
                return Promise.resolve(t)
              })), (r = e.ngModule.injector, i = e.configLoader, a = e.urlSerializer, o = e.config, function (t) {
                return t.pipe(EC((function (t) {
                  return function (t, e, n, r, i) {
                    return new CS(t, e, n, r, i).apply()
                  }(r, i, a, t.extractedUrl, o).pipe(U((function (e) {
                    return Object.assign(Object.assign({}, t), {urlAfterRedirects: e})
                  })))
                })))
              }), FC((function (t) {
                e.currentNavigation = Object.assign(Object.assign({}, e.currentNavigation), {finalUrl: t.urlAfterRedirects})
              })), function (t, n, r, i, a) {
                return function (r) {
                  return r.pipe(W((function (r) {
                    return function (t, e, n, r) {
                      var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "emptyOnly",
                        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "legacy";
                      return new HS(t, e, n, r, i, a).recognize()
                    }(t, n, r.urlAfterRedirects, (o = r.urlAfterRedirects, e.serializeUrl(o)), i, a).pipe(U((function (t) {
                      return Object.assign(Object.assign({}, r), {targetSnapshot: t})
                    })));
                    var o
                  })))
                }
              }(e.rootComponentType, e.config, 0, e.paramsInheritanceStrategy, e.relativeLinkResolution), FC((function (t) {
                "eager" === e.urlUpdateStrategy && (t.extras.skipLocationChange || e.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state), e.browserUrlTree = t.urlAfterRedirects)
              })), FC((function (t) {
                var r = new QC(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                n.next(r)
              })));
              if (s && e.rawUrlTree && e.urlHandlingStrategy.shouldProcessUrl(e.rawUrlTree)) {
                var l = t.id, u = t.extractedUrl, c = t.source, h = t.restoredState, f = t.extras,
                  d = new BC(l, e.serializeUrl(u), c, h);
                n.next(d);
                var p = Yx(u, e.rootComponentType).snapshot;
                return Qw(Object.assign(Object.assign({}, t), {
                  targetSnapshot: p,
                  urlAfterRedirects: u,
                  extras: Object.assign(Object.assign({}, f), {skipLocationChange: !1, replaceUrl: !1})
                }))
              }
              return e.rawUrlTree = t.rawUrl, e.browserUrlTree = t.urlAfterRedirects, t.resolve(null), Jw
            })), YS((function (t) {
              var n = t.targetSnapshot, r = t.id, i = t.extractedUrl, a = t.rawUrl, o = t.extras,
                s = o.skipLocationChange, l = o.replaceUrl;
              return e.hooks.beforePreactivation(n, {
                navigationId: r,
                appliedUrlTree: i,
                rawUrlTree: a,
                skipLocationChange: !!s,
                replaceUrl: !!l
              })
            })), FC((function (t) {
              var n = new YC(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              e.triggerEvent(n)
            })), U((function (t) {
              return Object.assign(Object.assign({}, t), {
                guards: (n = t.targetSnapshot, r = t.currentSnapshot, i = e.rootContexts, a = n._root, function t(e, n, r, i) {
                  var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                    canDeactivateChecks: [],
                    canActivateChecks: []
                  }, o = Gx(n);
                  return e.children.forEach((function (e) {
                    !function (e, n, r, i) {
                      var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        canDeactivateChecks: [],
                        canActivateChecks: []
                      }, o = e.value, s = n ? n.value : null, l = r ? r.getContext(e.value.outlet) : null;
                      if (s && o.routeConfig === s.routeConfig) {
                        var u = function (t, e, n) {
                          if ("function" == typeof n) return n(t, e);
                          switch (n) {
                            case"pathParamsChange":
                              return !Sx(t.url, e.url);
                            case"pathParamsOrQueryParamsChange":
                              return !Sx(t.url, e.url) || !vx(t.queryParams, e.queryParams);
                            case"always":
                              return !0;
                            case"paramsOrQueryParamsChange":
                              return !nS(t, e) || !vx(t.queryParams, e.queryParams);
                            case"paramsChange":
                            default:
                              return !nS(t, e)
                          }
                        }(s, o, o.routeConfig.runGuardsAndResolvers);
                        u ? a.canActivateChecks.push(new AS(i)) : (o.data = s.data, o._resolvedData = s._resolvedData), t(e, n, o.component ? l ? l.children : null : r, i, a), u && a.canDeactivateChecks.push(new OS(l && l.outlet && l.outlet.component || null, s))
                      } else s && PS(n, l, a), a.canActivateChecks.push(new AS(i)), t(e, null, o.component ? l ? l.children : null : r, i, a)
                    }(e, o[e.value.outlet], r, i.concat([e.value]), a), delete o[e.value.outlet]
                  })), _x(o, (function (t, e) {
                    return PS(t, r.getContext(e), a)
                  })), a
                }(a, r ? r._root : null, i, [a.value]))
              });
              var n, r, i, a
            })), function (t, e) {
              return function (n) {
                return n.pipe(W((function (n) {
                  var r = n.targetSnapshot, i = n.currentSnapshot, a = n.guards, o = a.canActivateChecks,
                    s = a.canDeactivateChecks;
                  return 0 === s.length && 0 === o.length ? Qw(Object.assign(Object.assign({}, n), {guardsResult: !0})) : function (t, e, n, r) {
                    return q(t).pipe(W((function (t) {
                      return function (t, e, n, r, i) {
                        var a = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                        return a && 0 !== a.length ? Qw(a.map((function (a) {
                          var o, s = LS(a, e, i);
                          if (function (t) {
                            return t && gS(t.canDeactivate)
                          }(s)) o = kx(s.canDeactivate(t, e, n, r)); else {
                            if (!gS(s)) throw new Error("Invalid CanDeactivate guard");
                            o = kx(s(t, e, n, r))
                          }
                          return o.pipe(xC())
                        }))).pipe(DS()) : Qw(!0)
                      }(t.component, t.route, n, e, r)
                    })), xC((function (t) {
                      return !0 !== t
                    }), !0))
                  }(s, r, i, t).pipe(W((function (n) {
                    return n && "boolean" == typeof n ? function (t, e, n, r) {
                      return q(e).pipe(IC((function (e) {
                        return q([RS(e.route.parent, r), IS(e.route, r), NS(t, e.path, n), FS(t, e.route, n)]).pipe(nC(), xC((function (t) {
                          return !0 !== t
                        }), !0))
                      })), xC((function (t) {
                        return !0 !== t
                      }), !0))
                    }(r, o, t, e) : Qw(n)
                  })), U((function (t) {
                    return Object.assign(Object.assign({}, n), {guardsResult: t})
                  })))
                })))
              }
            }(e.ngModule.injector, (function (t) {
              return e.triggerEvent(t)
            })), FC((function (t) {
              if (yS(t.guardsResult)) {
                var n = lx('Redirecting to "'.concat(e.serializeUrl(t.guardsResult), '"'));
                throw n.url = t.guardsResult, n
              }
            })), FC((function (t) {
              var n = new ZC(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
              e.triggerEvent(n)
            })), rC((function (t) {
              if (!t.guardsResult) {
                e.resetUrlToCurrentUrlTree();
                var r = new WC(t.id, e.serializeUrl(t.extractedUrl), "");
                return n.next(r), t.resolve(!1), !1
              }
              return !0
            })), YS((function (t) {
              if (t.guards.canActivateChecks.length) return Qw(t).pipe(FC((function (t) {
                var n = new XC(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                e.triggerEvent(n)
              })), (n = e.paramsInheritanceStrategy, r = e.ngModule.injector, function (t) {
                return t.pipe(W((function (t) {
                  var e = t.targetSnapshot, i = t.guards.canActivateChecks;
                  return i.length ? q(i).pipe(IC((function (t) {
                    return function (t, e, n, r) {
                      return function (t, e, n, r) {
                        var i = Object.keys(t);
                        if (0 === i.length) return Qw({});
                        if (1 === i.length) {
                          var a = i[0];
                          return QS(t[a], e, n, r).pipe(U((function (t) {
                            return _defineProperty({}, a, t)
                          })))
                        }
                        var o = {};
                        return q(i).pipe(W((function (i) {
                          return QS(t[i], e, n, r).pipe(U((function (t) {
                            return o[i] = t, t
                          })))
                        }))).pipe(yC(), U((function () {
                          return o
                        })))
                      }(t._resolve, t, e, r).pipe(U((function (e) {
                        return t._resolvedData = e, t.data = Object.assign(Object.assign({}, t.data), Xx(t, n).resolve), null
                      })))
                    }(t.route, e, n, r)
                  })), function (t, e) {
                    return arguments.length >= 2 ? function (n) {
                      return k(PC(t, e), sC(1), pC(e))(n)
                    } : function (e) {
                      return k(PC((function (e, n, r) {
                        return t(e, n, r + 1)
                      })), sC(1))(e)
                    }
                  }((function (t, e) {
                    return t
                  })), U((function (e) {
                    return t
                  }))) : Qw(t)
                })))
              }), FC((function (t) {
                var n = new KC(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                e.triggerEvent(n)
              })));
              var n, r
            })), YS((function (t) {
              var n = t.targetSnapshot, r = t.id, i = t.extractedUrl, a = t.rawUrl, o = t.extras,
                s = o.skipLocationChange, l = o.replaceUrl;
              return e.hooks.afterPreactivation(n, {
                navigationId: r,
                appliedUrlTree: i,
                rawUrlTree: a,
                skipLocationChange: !!s,
                replaceUrl: !!l
              })
            })), U((function (t) {
              var n = function (t, e, n) {
                var r = function t(e, n, r) {
                  if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                    var i = r.value;
                    i._futureSnapshot = n.value;
                    var a = function (e, n, r) {
                      return n.children.map((function (n) {
                        var i, a = _createForOfIteratorHelper(r.children);
                        try {
                          for (a.s(); !(i = a.n()).done;) {
                            var o = i.value;
                            if (e.shouldReuseRoute(o.value.snapshot, n.value)) return t(e, n, o)
                          }
                        } catch (s) {
                          a.e(s)
                        } finally {
                          a.f()
                        }
                        return t(e, n)
                      }))
                    }(e, n, r);
                    return new Wx(i, a)
                  }
                  var o = e.retrieve(n.value);
                  if (o) {
                    var s = o.route;
                    return function t(e, n) {
                      if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                      if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                      n.value._futureSnapshot = e.value;
                      for (var r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r])
                    }(n, s), s
                  }
                  var l,
                    u = new Zx(new Yw((l = n.value).url), new Yw(l.params), new Yw(l.queryParams), new Yw(l.fragment), new Yw(l.data), l.outlet, l.component, l),
                    c = n.children.map((function (n) {
                      return t(e, n)
                    }));
                  return new Wx(u, c)
                }(t, e._root, n ? n._root : void 0);
                return new Qx(r, e)
              }(e.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
              return Object.assign(Object.assign({}, t), {targetRouterState: n})
            })), FC((function (t) {
              e.currentUrlTree = t.urlAfterRedirects, e.rawUrlTree = e.urlHandlingStrategy.merge(e.currentUrlTree, t.rawUrl), e.routerState = t.targetRouterState, "deferred" === e.urlUpdateStrategy && (t.extras.skipLocationChange || e.setBrowserUrl(e.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state), e.browserUrlTree = t.urlAfterRedirects)
            })), (i = e.rootContexts, a = e.routeReuseStrategy, o = function (t) {
              return e.triggerEvent(t)
            }, U((function (t) {
              return new pS(a, t.targetRouterState, t.currentRouterState, o).activate(i), t
            }))), FC({
              next: function () {
                s = !0
              }, complete: function () {
                s = !0
              }
            }), (r = function () {
              if (!s && !l) {
                e.resetUrlToCurrentUrlTree();
                var r = new WC(t.id, e.serializeUrl(t.extractedUrl), "Navigation ID ".concat(t.id, " is not equal to the current navigation id ").concat(e.navigationId));
                n.next(r), t.resolve(!1)
              }
              e.currentNavigation = null
            }, function (t) {
              return t.lift(new UC(r))
            }), mC((function (r) {
              if (l = !0, (s = r) && s.ngNavigationCancelingError) {
                var i = yS(r.url);
                i || (e.navigated = !0, e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
                var a = new WC(t.id, e.serializeUrl(t.extractedUrl), r.message);
                n.next(a), i ? setTimeout((function () {
                  var n = e.urlHandlingStrategy.merge(r.url, e.rawUrlTree);
                  return e.scheduleNavigation(n, "imperative", null, {
                    skipLocationChange: t.extras.skipLocationChange,
                    replaceUrl: "eager" === e.urlUpdateStrategy
                  }, {resolve: t.resolve, reject: t.reject, promise: t.promise})
                }), 0) : t.resolve(!1)
              } else {
                e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                var o = new GC(t.id, e.serializeUrl(t.extractedUrl), r);
                n.next(o);
                try {
                  t.resolve(e.errorHandler(r))
                } catch (u) {
                  t.reject(u)
                }
              }
              var s;
              return Jw
            })))
          })))
        }
      }, {
        key: "resetRootComponentType", value: function (t) {
          this.rootComponentType = t, this.routerState.root.component = this.rootComponentType
        }
      }, {
        key: "getTransition", value: function () {
          var t = this.transitions.value;
          return t.urlAfterRedirects = this.browserUrlTree, t
        }
      }, {
        key: "setTransition", value: function (t) {
          this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), t))
        }
      }, {
        key: "initialNavigation", value: function () {
          this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {replaceUrl: !0})
        }
      }, {
        key: "setUpLocationChangeListener", value: function () {
          var t = this;
          this.locationSubscription || (this.locationSubscription = this.location.subscribe((function (e) {
            var n = t.parseUrl(e.url), r = "popstate" === e.type ? "popstate" : "hashchange",
              i = e.state && e.state.navigationId ? e.state : null;
            setTimeout((function () {
              t.scheduleNavigation(n, r, i, {replaceUrl: !0})
            }), 0)
          })))
        }
      }, {
        key: "getCurrentNavigation", value: function () {
          return this.currentNavigation
        }
      }, {
        key: "triggerEvent", value: function (t) {
          this.events.next(t)
        }
      }, {
        key: "resetConfig", value: function (t) {
          hx(t), this.config = t.map(px), this.navigated = !1, this.lastSuccessfulId = -1
        }
      }, {
        key: "ngOnDestroy", value: function () {
          this.dispose()
        }
      }, {
        key: "dispose", value: function () {
          this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
        }
      }, {
        key: "createUrlTree", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.relativeTo,
            r = e.queryParams, i = e.fragment, a = e.preserveQueryParams, o = e.queryParamsHandling,
            s = e.preserveFragment;
          kr() && a && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
          var l = n || this.routerState.root, u = s ? this.currentUrlTree.fragment : i, c = null;
          if (o) switch (o) {
            case"merge":
              c = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), r);
              break;
            case"preserve":
              c = this.currentUrlTree.queryParams;
              break;
            default:
              c = r || null
          } else c = a ? this.currentUrlTree.queryParams : r || null;
          return null !== c && (c = this.removeEmptyProps(c)), function (t, e, n, r, i) {
            if (0 === n.length) return iS(e.root, e.root, e, r, i);
            var a = function (t) {
              if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new aS(!0, 0, t);
              var e = 0, n = !1, r = t.reduce((function (t, r, i) {
                if ("object" == typeof r && null != r) {
                  if (r.outlets) {
                    var a = {};
                    return _x(r.outlets, (function (t, e) {
                      a[e] = "string" == typeof t ? t.split("/") : t
                    })), [].concat(_toConsumableArray(t), [{outlets: a}])
                  }
                  if (r.segmentPath) return [].concat(_toConsumableArray(t), [r.segmentPath])
                }
                return "string" != typeof r ? [].concat(_toConsumableArray(t), [r]) : 0 === i ? (r.split("/").forEach((function (r, i) {
                  0 == i && "." === r || (0 == i && "" === r ? n = !0 : ".." === r ? e++ : "" != r && t.push(r))
                })), t) : [].concat(_toConsumableArray(t), [r])
              }), []);
              return new aS(n, e, r)
            }(n);
            if (a.toRoot()) return iS(e.root, new Cx([], {}), e, r, i);
            var o = function (t, e, n) {
                if (t.isAbsolute) return new oS(e.root, !0, 0);
                if (-1 === n.snapshot._lastPathIndex) return new oS(n.snapshot._urlSegment, !0, 0);
                var r = rS(t.commands[0]) ? 0 : 1;
                return function (t, e, n) {
                  for (var r = t, i = e, a = n; a > i;) {
                    if (a -= i, !(r = r.parent)) throw new Error("Invalid number of '../'");
                    i = r.segments.length
                  }
                  return new oS(r, !1, i - a)
                }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, t.numberOfDoubleDots)
              }(a, e, t),
              s = o.processChildren ? uS(o.segmentGroup, o.index, a.commands) : lS(o.segmentGroup, o.index, a.commands);
            return iS(o.segmentGroup, s, e, r, i)
          }(l, this.currentUrlTree, t, c, u)
        }
      }, {
        key: "navigateByUrl", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {skipLocationChange: !1};
          kr() && this.isNgZoneEnabled && !Jl.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
          var n = yS(t) ? t : this.parseUrl(t), r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
          return this.scheduleNavigation(r, "imperative", null, e)
        }
      }, {
        key: "navigate", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {skipLocationChange: !1};
          return function (t) {
            for (var e = 0; e < t.length; e++) {
              var n = t[e];
              if (null == n) throw new Error("The requested path contains ".concat(n, " segment at index ").concat(e))
            }
          }(t), this.navigateByUrl(this.createUrlTree(t, e), e)
        }
      }, {
        key: "serializeUrl", value: function (t) {
          return this.urlSerializer.serialize(t)
        }
      }, {
        key: "parseUrl", value: function (t) {
          var e;
          try {
            e = this.urlSerializer.parse(t)
          } catch (n) {
            e = this.malformedUriErrorHandler(n, this.urlSerializer, t)
          }
          return e
        }
      }, {
        key: "isActive", value: function (t, e) {
          if (yS(t)) return bx(this.currentUrlTree, t, e);
          var n = this.parseUrl(t);
          return bx(this.currentUrlTree, n, e)
        }
      }, {
        key: "removeEmptyProps", value: function (t) {
          return Object.keys(t).reduce((function (e, n) {
            var r = t[n];
            return null != r && (e[n] = r), e
          }), {})
        }
      }, {
        key: "processNavigations", value: function () {
          var t = this;
          this.navigations.subscribe((function (e) {
            t.navigated = !0, t.lastSuccessfulId = e.id, t.events.next(new qC(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(t.currentUrlTree))), t.lastSuccessfulNavigation = t.currentNavigation, t.currentNavigation = null, e.resolve(!0)
          }), (function (e) {
            t.console.warn("Unhandled Navigation Error: ")
          }))
        }
      }, {
        key: "scheduleNavigation", value: function (t, e, n, r, i) {
          var a, o, s, l = this.getTransition();
          if (l && "imperative" !== e && "imperative" === l.source && l.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
          if (l && "hashchange" == e && "popstate" === l.source && l.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
          if (l && "popstate" == e && "hashchange" === l.source && l.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
          i ? (a = i.resolve, o = i.reject, s = i.promise) : s = new Promise((function (t, e) {
            a = t, o = e
          }));
          var u = ++this.navigationId;
          return this.setTransition({
            id: u,
            source: e,
            restoredState: n,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.rawUrlTree,
            rawUrl: t,
            extras: r,
            resolve: a,
            reject: o,
            promise: s,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState
          }), s.catch((function (t) {
            return Promise.reject(t)
          }))
        }
      }, {
        key: "setBrowserUrl", value: function (t, e, n, r) {
          var i = this.urlSerializer.serialize(t);
          r = r || {}, this.location.isCurrentPathEqualTo(i) || e ? this.location.replaceState(i, "", Object.assign(Object.assign({}, r), {navigationId: n})) : this.location.go(i, "", Object.assign(Object.assign({}, r), {navigationId: n}))
        }
      }, {
        key: "resetStateAndUrl", value: function (t, e, n) {
          this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
        }
      }, {
        key: "resetUrlToCurrentUrlTree", value: function () {
          this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {navigationId: this.lastSuccessfulId})
        }
      }, {
        key: "url", get: function () {
          return this.serializeUrl(this.currentUrlTree)
        }
      }]), t
    }()).\u0275fac = function (t) {
      mo()
    }, iT.\u0275dir = ke({type: iT}), iT), oT = ((rT = function () {
      function t(e, n, r, i, a) {
        _classCallCheck(this, t), this.router = e, this.route = n, this.commands = [], null == r && i.setAttribute(a.nativeElement, "tabindex", "0")
      }

      return _createClass(t, [{
        key: "onClick", value: function () {
          var t = {skipLocationChange: lT(this.skipLocationChange), replaceUrl: lT(this.replaceUrl), state: this.state};
          return this.router.navigateByUrl(this.urlTree, t), !0
        }
      }, {
        key: "routerLink", set: function (t) {
          this.commands = null != t ? Array.isArray(t) ? t : [t] : []
        }
      }, {
        key: "preserveQueryParams", set: function (t) {
          kr() && console && console.warn && console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead."), this.preserve = t
        }
      }, {
        key: "urlTree", get: function () {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: lT(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: lT(this.preserveFragment)
          })
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || rT)(go(aT), go(Zx), yo("tabindex"), go(Ss), go(bs))
    }, rT.\u0275dir = ke({
      type: rT,
      selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
      hostBindings: function (t, e) {
        1 & t && To("click", (function () {
          return e.onClick()
        }))
      },
      inputs: {
        routerLink: "routerLink",
        preserveQueryParams: "preserveQueryParams",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl",
        state: "state"
      }
    }), rT), sT = ((nT = function () {
      function t(e, n, r) {
        var i = this;
        _classCallCheck(this, t), this.router = e, this.route = n, this.locationStrategy = r, this.commands = [], this.subscription = e.events.subscribe((function (t) {
          t instanceof qC && i.updateTargetUrlAndHref()
        }))
      }

      return _createClass(t, [{
        key: "ngOnChanges", value: function (t) {
          this.updateTargetUrlAndHref()
        }
      }, {
        key: "ngOnDestroy", value: function () {
          this.subscription.unsubscribe()
        }
      }, {
        key: "onClick", value: function (t, e, n, r) {
          if (0 !== t || e || n || r) return !0;
          if ("string" == typeof this.target && "_self" != this.target) return !0;
          var i = {skipLocationChange: lT(this.skipLocationChange), replaceUrl: lT(this.replaceUrl), state: this.state};
          return this.router.navigateByUrl(this.urlTree, i), !1
        }
      }, {
        key: "updateTargetUrlAndHref", value: function () {
          this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
        }
      }, {
        key: "routerLink", set: function (t) {
          this.commands = null != t ? Array.isArray(t) ? t : [t] : []
        }
      }, {
        key: "preserveQueryParams", set: function (t) {
          kr() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = t
        }
      }, {
        key: "urlTree", get: function () {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: lT(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: lT(this.preserveFragment)
          })
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || nT)(go(aT), go(Zx), go(qu))
    }, nT.\u0275dir = ke({
      type: nT,
      selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
      hostVars: 2,
      hostBindings: function (t, e) {
        1 & t && To("click", (function (t) {
          return e.onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey)
        })), 2 & t && (Jo("href", e.href, Zr), fo("target", e.target))
      },
      inputs: {
        routerLink: "routerLink",
        preserveQueryParams: "preserveQueryParams",
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl",
        state: "state"
      },
      features: [ss]
    }), nT);

    function lT(t) {
      return "" === t || !!t
    }

    var uT, cT, hT, fT, dT = ((uT = function () {
        function t(e, n, r, i, a) {
          var o = this;
          _classCallCheck(this, t), this.router = e, this.element = n, this.renderer = r, this.link = i, this.linkWithHref = a, this.classes = [], this.isActive = !1, this.routerLinkActiveOptions = {exact: !1}, this.subscription = e.events.subscribe((function (t) {
            t instanceof qC && o.update()
          }))
        }

        return _createClass(t, [{
          key: "ngAfterContentInit", value: function () {
            var t = this;
            this.links.changes.subscribe((function (e) {
              return t.update()
            })), this.linksWithHrefs.changes.subscribe((function (e) {
              return t.update()
            })), this.update()
          }
        }, {
          key: "ngOnChanges", value: function (t) {
            this.update()
          }
        }, {
          key: "ngOnDestroy", value: function () {
            this.subscription.unsubscribe()
          }
        }, {
          key: "update", value: function () {
            var t = this;
            this.links && this.linksWithHrefs && this.router.navigated && Promise.resolve().then((function () {
              var e = t.hasActiveLinks();
              t.isActive !== e && (t.isActive = e, t.classes.forEach((function (n) {
                e ? t.renderer.addClass(t.element.nativeElement, n) : t.renderer.removeClass(t.element.nativeElement, n)
              })))
            }))
          }
        }, {
          key: "isLinkActive", value: function (t) {
            var e = this;
            return function (n) {
              return t.isActive(n.urlTree, e.routerLinkActiveOptions.exact)
            }
          }
        }, {
          key: "hasActiveLinks", value: function () {
            var t = this.isLinkActive(this.router);
            return this.link && t(this.link) || this.linkWithHref && t(this.linkWithHref) || this.links.some(t) || this.linksWithHrefs.some(t)
          }
        }, {
          key: "routerLinkActive", set: function (t) {
            var e = Array.isArray(t) ? t : t.split(" ");
            this.classes = e.filter((function (t) {
              return !!t
            }))
          }
        }]), t
      }()).\u0275fac = function (t) {
        return new (t || uT)(go(aT), go(bs), go(Ss), go(oT, 8), go(sT, 8))
      }, uT.\u0275dir = ke({
        type: uT,
        selectors: [["", "routerLinkActive", ""]],
        contentQueries: function (t, e, n) {
          var r;
          1 & t && (Tl(n, oT, !0), Tl(n, sT, !0)), 2 & t && (xl(r = El()) && (e.links = r), xl(r = El()) && (e.linksWithHrefs = r))
        },
        inputs: {routerLinkActiveOptions: "routerLinkActiveOptions", routerLinkActive: "routerLinkActive"},
        exportAs: ["routerLinkActive"],
        features: [ss]
      }), uT), pT = function t() {
        _classCallCheck(this, t), this.outlet = null, this.route = null, this.resolver = null, this.children = new vT, this.attachRef = null
      }, vT = function () {
        function t() {
          _classCallCheck(this, t), this.contexts = new Map
        }

        return _createClass(t, [{
          key: "onChildOutletCreated", value: function (t, e) {
            var n = this.getOrCreateContext(t);
            n.outlet = e, this.contexts.set(t, n)
          }
        }, {
          key: "onChildOutletDestroyed", value: function (t) {
            var e = this.getContext(t);
            e && (e.outlet = null)
          }
        }, {
          key: "onOutletDeactivated", value: function () {
            var t = this.contexts;
            return this.contexts = new Map, t
          }
        }, {
          key: "onOutletReAttached", value: function (t) {
            this.contexts = t
          }
        }, {
          key: "getOrCreateContext", value: function (t) {
            var e = this.getContext(t);
            return e || (e = new pT, this.contexts.set(t, e)), e
          }
        }, {
          key: "getContext", value: function (t) {
            return this.contexts.get(t) || null
          }
        }]), t
      }(), gT = ((cT = function () {
        function t(e, n, r, i, a) {
          _classCallCheck(this, t), this.parentContexts = e, this.location = n, this.resolver = r, this.changeDetector = a, this.activated = null, this._activatedRoute = null, this.activateEvents = new dl, this.deactivateEvents = new dl, this.name = i || "primary", e.onChildOutletCreated(this.name, this)
        }

        return _createClass(t, [{
          key: "ngOnDestroy", value: function () {
            this.parentContexts.onChildOutletDestroyed(this.name)
          }
        }, {
          key: "ngOnInit", value: function () {
            if (!this.activated) {
              var t = this.parentContexts.getContext(this.name);
              t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
            }
          }
        }, {
          key: "detach", value: function () {
            if (!this.activated) throw new Error("Outlet is not activated");
            this.location.detach();
            var t = this.activated;
            return this.activated = null, this._activatedRoute = null, t
          }
        }, {
          key: "attach", value: function (t, e) {
            this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView)
          }
        }, {
          key: "deactivate", value: function () {
            if (this.activated) {
              var t = this.component;
              this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t)
            }
          }
        }, {
          key: "activateWith", value: function (t, e) {
            if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = t;
            var n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
              r = this.parentContexts.getOrCreateContext(this.name).children, i = new yT(t, r, this.location.injector);
            this.activated = this.location.createComponent(n, this.location.length, i), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
          }
        }, {
          key: "isActivated", get: function () {
            return !!this.activated
          }
        }, {
          key: "component", get: function () {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this.activated.instance
          }
        }, {
          key: "activatedRoute", get: function () {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this._activatedRoute
          }
        }, {
          key: "activatedRouteData", get: function () {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
          }
        }]), t
      }()).\u0275fac = function (t) {
        return new (t || cT)(go(vT), go(Gs), go(ks), yo("name"), go(Na))
      }, cT.\u0275dir = ke({
        type: cT,
        selectors: [["router-outlet"]],
        outputs: {activateEvents: "activate", deactivateEvents: "deactivate"},
        exportAs: ["outlet"]
      }), cT), yT = function () {
        function t(e, n, r) {
          _classCallCheck(this, t), this.route = e, this.childContexts = n, this.parent = r
        }

        return _createClass(t, [{
          key: "get", value: function (t, e) {
            return t === Zx ? this.route : t === vT ? this.childContexts : this.parent.get(t, e)
          }
        }]), t
      }(), mT = function t() {
        _classCallCheck(this, t)
      }, _T = function () {
        function t() {
          _classCallCheck(this, t)
        }

        return _createClass(t, [{
          key: "preload", value: function (t, e) {
            return Qw(null)
          }
        }]), t
      }(), kT = ((fT = function () {
        function t(e, n, r, i, a) {
          _classCallCheck(this, t), this.router = e, this.injector = i, this.preloadingStrategy = a, this.loader = new KS(n, r, (function (t) {
            return e.triggerEvent(new $C(t))
          }), (function (t) {
            return e.triggerEvent(new JC(t))
          }))
        }

        return _createClass(t, [{
          key: "setUpPreloading", value: function () {
            var t = this;
            this.subscription = this.router.events.pipe(rC((function (t) {
              return t instanceof qC
            })), IC((function () {
              return t.preload()
            }))).subscribe((function () {
            }))
          }
        }, {
          key: "preload", value: function () {
            var t = this.injector.get(te);
            return this.processRoutes(t, this.router.config)
          }
        }, {
          key: "ngOnDestroy", value: function () {
            this.subscription.unsubscribe()
          }
        }, {
          key: "processRoutes", value: function (t, e) {
            var n, r = [], i = _createForOfIteratorHelper(e);
            try {
              for (i.s(); !(n = i.n()).done;) {
                var a = n.value;
                if (a.loadChildren && !a.canLoad && a._loadedConfig) {
                  var o = a._loadedConfig;
                  r.push(this.processRoutes(o.module, o.routes))
                } else a.loadChildren && !a.canLoad ? r.push(this.preloadConfig(t, a)) : a.children && r.push(this.processRoutes(t, a.children))
              }
            } catch (s) {
              i.e(s)
            } finally {
              i.f()
            }
            return q(r).pipe(Y(), U((function (t) {
            })))
          }
        }, {
          key: "preloadConfig", value: function (t, e) {
            var n = this;
            return this.preloadingStrategy.preload(e, (function () {
              return n.loader.load(t.injector, e).pipe(W((function (t) {
                return e._loadedConfig = t, n.processRoutes(t.module, t.routes)
              })))
            }))
          }
        }]), t
      }()).\u0275fac = function (t) {
        return new (t || fT)(Xt(aT), Xt(bu), Xt(Zl), Xt(Ja), Xt(mT))
      }, fT.\u0275prov = ft({token: fT, factory: fT.\u0275fac}), fT), bT = ((hT = function () {
        function t(e, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          _classCallCheck(this, t), this.router = e, this.viewportScroller = n, this.options = r, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, r.scrollPositionRestoration = r.scrollPositionRestoration || "disabled", r.anchorScrolling = r.anchorScrolling || "disabled"
        }

        return _createClass(t, [{
          key: "init", value: function () {
            "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
          }
        }, {
          key: "createScrollEvents", value: function () {
            var t = this;
            return this.router.events.subscribe((function (e) {
              e instanceof BC ? (t.store[t.lastId] = t.viewportScroller.getScrollPosition(), t.lastSource = e.navigationTrigger, t.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof qC && (t.lastId = e.id, t.scheduleScrollEvent(e, t.router.parseUrl(e.urlAfterRedirects).fragment))
            }))
          }
        }, {
          key: "consumeScrollEvents", value: function () {
            var t = this;
            return this.router.events.subscribe((function (e) {
              e instanceof ix && (e.position ? "top" === t.options.scrollPositionRestoration ? t.viewportScroller.scrollToPosition([0, 0]) : "enabled" === t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition(e.position) : e.anchor && "enabled" === t.options.anchorScrolling ? t.viewportScroller.scrollToAnchor(e.anchor) : "disabled" !== t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition([0, 0]))
            }))
          }
        }, {
          key: "scheduleScrollEvent", value: function (t, e) {
            this.router.triggerEvent(new ix(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e))
          }
        }, {
          key: "ngOnDestroy", value: function () {
            this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
          }
        }]), t
      }()).\u0275fac = function (t) {
        mo()
      }, hT.\u0275dir = ke({type: hT}), hT), wT = new zt("ROUTER_CONFIGURATION"), CT = new zt("ROUTER_FORROOT_GUARD"),
      xT = [$u, {provide: Ex, useClass: Ax}, {
        provide: aT, useFactory: function (t, e, n, r, i, a, o) {
          var s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {},
            l = arguments.length > 8 ? arguments[8] : void 0, u = arguments.length > 9 ? arguments[9] : void 0,
            c = new aT(null, t, e, n, r, i, a, yx(o));
          if (l && (c.urlHandlingStrategy = l), u && (c.routeReuseStrategy = u), s.errorHandler && (c.errorHandler = s.errorHandler), s.malformedUriErrorHandler && (c.malformedUriErrorHandler = s.malformedUriErrorHandler), s.enableTracing) {
            var h = Lu();
            c.events.subscribe((function (t) {
              h.logGroup("Router Event: " + t.constructor.name), h.log(t.toString()), h.log(t), h.logGroupEnd()
            }))
          }
          return s.onSameUrlNavigation && (c.onSameUrlNavigation = s.onSameUrlNavigation), s.paramsInheritanceStrategy && (c.paramsInheritanceStrategy = s.paramsInheritanceStrategy), s.urlUpdateStrategy && (c.urlUpdateStrategy = s.urlUpdateStrategy), s.relativeLinkResolution && (c.relativeLinkResolution = s.relativeLinkResolution), c
        }, deps: [Ex, vT, $u, Ja, bu, Zl, XS, wT, [function () {
          return function t() {
            _classCallCheck(this, t)
          }
        }(), new ot], [function () {
          return function t() {
            _classCallCheck(this, t)
          }
        }(), new ot]]
      }, vT, {
        provide: Zx, useFactory: function (t) {
          return t.routerState.root
        }, deps: [aT]
      }, {provide: bu, useClass: xu}, kT, _T, function () {
        function t() {
          _classCallCheck(this, t)
        }

        return _createClass(t, [{
          key: "preload", value: function (t, e) {
            return e().pipe(mC((function () {
              return Qw(null)
            })))
          }
        }]), t
      }(), {provide: wT, useValue: {enableTracing: !1}}];

    function ST() {
      return new du("Router", aT)
    }

    var TT, ET = ((TT = function () {
      function t(e, n) {
        _classCallCheck(this, t)
      }

      return _createClass(t, null, [{
        key: "forRoot", value: function (e, n) {
          return {
            ngModule: t,
            providers: [xT, PT(e), {provide: CT, useFactory: LT, deps: [[aT, new ot, new lt]]}, {
              provide: wT,
              useValue: n || {}
            }, {provide: qu, useFactory: OT, deps: [Du, [new at(Zu), new ot], wT]}, {
              provide: bT,
              useFactory: AT,
              deps: [aT, wc, wT]
            }, {provide: mT, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : _T}, {
              provide: du,
              multi: !0,
              useFactory: ST
            }, [DT, {provide: Pl, multi: !0, useFactory: IT, deps: [DT]}, {
              provide: UT,
              useFactory: RT,
              deps: [DT]
            }, {provide: jl, multi: !0, useExisting: UT}]]
          }
        }
      }, {
        key: "forChild", value: function (e) {
          return {ngModule: t, providers: [PT(e)]}
        }
      }]), t
    }()).\u0275mod = me({type: TT}), TT.\u0275inj = dt({
      factory: function (t) {
        return new (t || TT)(Xt(CT, 8), Xt(aT, 8))
      }
    }), TT);

    function AT(t, e, n) {
      return n.scrollOffset && e.setOffset(n.scrollOffset), new bT(t, e, n)
    }

    function OT(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return n.useHash ? new Ku(t, e) : new Xu(t, e)
    }

    function LT(t) {
      if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
      return "guarded"
    }

    function PT(t) {
      return [{provide: to, multi: !0, useValue: t}, {provide: XS, multi: !0, useValue: t}]
    }

    var MT, DT = ((MT = function () {
      function t(e) {
        _classCallCheck(this, t), this.injector = e, this.initNavigation = !1, this.resultOfPreactivationDone = new O
      }

      return _createClass(t, [{
        key: "appInitializer", value: function () {
          var t = this;
          return this.injector.get(Fu, Promise.resolve(null)).then((function () {
            var e = null, n = new Promise((function (t) {
              return e = t
            })), r = t.injector.get(aT), i = t.injector.get(wT);
            if (t.isLegacyDisabled(i) || t.isLegacyEnabled(i)) e(!0); else if ("disabled" === i.initialNavigation) r.setUpLocationChangeListener(), e(!0); else {
              if ("enabled" !== i.initialNavigation) throw new Error("Invalid initialNavigation options: '".concat(i.initialNavigation, "'"));
              r.hooks.afterPreactivation = function () {
                return t.initNavigation ? Qw(null) : (t.initNavigation = !0, e(!0), t.resultOfPreactivationDone)
              }, r.initialNavigation()
            }
            return n
          }))
        }
      }, {
        key: "bootstrapListener", value: function (t) {
          var e = this.injector.get(wT), n = this.injector.get(kT), r = this.injector.get(bT),
            i = this.injector.get(aT), a = this.injector.get(_u);
          t === a.components[0] && (this.isLegacyEnabled(e) ? i.initialNavigation() : this.isLegacyDisabled(e) && i.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), i.resetRootComponentType(a.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
        }
      }, {
        key: "isLegacyEnabled", value: function (t) {
          return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
        }
      }, {
        key: "isLegacyDisabled", value: function (t) {
          return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || MT)(Xt(Ja))
    }, MT.\u0275prov = ft({token: MT, factory: MT.\u0275fac}), MT);

    function IT(t) {
      return t.appInitializer.bind(t)
    }

    function RT(t) {
      return t.bootstrapListener.bind(t)
    }

    var FT, NT, jT, HT, UT = new zt("Router Initializer"), zT = function () {
      return ["#5E77FF", "#BC5DE6"]
    }, VT = function (t) {
      return {domain: t}
    }, BT = function () {
      return ["#384BC5", "#5E77FF"]
    }, qT = [{
      path: "", component: (FT = function () {
        function t() {
          _classCallCheck(this, t), this.pieChartData = [{name: "Male", value: 65}, {
            name: "Female",
            value: 35
          }], this.multiChartData = [{
            name: "19-25",
            series: [{name: "Male", value: 10}, {name: "Female", value: 5}]
          }, {name: "26-30", series: [{name: "Male", value: 25}, {name: "Female", value: 10}]}, {
            name: "31-40",
            series: [{name: "Male", value: 46}, {name: "Female", value: 27}]
          }, {
            name: "41+",
            series: [{name: "Male", value: 20}, {name: "Female", value: 15}]
          }], this.singleChartData = [{name: "<2200\u20ac", value: 500}, {
            name: "2200\u20134687,50\u20ac",
            value: 2e3
          }, {name: "4.687,60\u20136900\u20ac", value: 500}, {name: ">6900\u20ac", value: 125}]
        }

        return _createClass(t, [{
          key: "getPercent", value: function (t) {
            return t + "%"
          }
        }]), t
      }(), FT.\u0275fac = function (t) {
        return new (t || FT)
      }, FT.\u0275cmp = pe({
        type: FT,
        selectors: [["app-statistics"]],
        decls: 123,
        vars: 37,
        consts: [[1, "wrapper"], [1, "row"], [1, "col-12", "col-sm-6", "col-xl-3"], [1, "card"], [1, "card-header"], [1, "card-icon", "card-icon--employees"], [1, "material-icons"], [1, "card-title"], [1, "card-value"], [1, "card-footer"], [1, "card-update-time"], [1, "btn", "card-btn"], [1, "card-icon", "card-icon--contracts"], [1, "card-icon", "card-icon--documentations"], [1, "card-icon", "card-icon--consultations"], [1, "col-12", "col-xl-4"], [1, "card", "card--large"], [1, "card-header", "card-header--lg"], [1, "card-lg-title"], [1, "card-header-link"], [1, "card-body"], [1, "pie-icons"], [1, "pie-icon", "pie-icon--female"], [1, "pie-icon", "pie-icon--male"], [3, "scheme", "results", "gradient", "doughnut", "animations", "arcWidth"], [1, "card-footer", "card-footer--chart"], [1, "card-update-time", "card-update-time--left"], [1, "pie-chart-legend"], [1, "pie-chart-legend-item"], [1, "pie-chart-legend-color", "pie-chart-legend-color--female"], [1, "pie-chart-legend-name"], [1, "pie-chart-legend-color", "pie-chart-legend-color--male"], [1, "chart-container", "chart-container--multi"], [3, "scheme", "results", "yScaleMax", "roundEdges", "roundDomains", "showGridLines", "gradient", "yAxisTickFormatting", "xAxis", "yAxis"], [1, "chart-container", "chart-container--single"], ["schemeType", "linear", 3, "scheme", "barPadding", "roundEdges", "roundDomains", "trimXAxisTicks", "trimYAxisTicks", "rotateXAxisTicks", "results", "showGridLines", "gradient", "xAxis", "yAxis"]],
        template: function (t, e) {
          1 & t && (bo(0, "div", 0), bo(1, "div", 1), bo(2, "div", 2), bo(3, "div", 3), bo(4, "div", 4), bo(5, "div", 5), bo(6, "span", 6), Xo(7, "business_center"), wo(), wo(), bo(8, "p", 7), Xo(9, "Employees total"), wo(), bo(10, "p", 8), Xo(11, "3.100"), wo(), wo(), bo(12, "div", 9), bo(13, "span", 10), bo(14, "span", 6), Xo(15, "update"), wo(), Xo(16, " just updated "), wo(), bo(17, "button", 11), Xo(18, " MORE INFO "), wo(), wo(), wo(), wo(), bo(19, "div", 2), bo(20, "div", 3), bo(21, "div", 4), bo(22, "div", 12), bo(23, "span", 6), Xo(24, "library_books"), wo(), wo(), bo(25, "p", 7), Xo(26, "Contracts total"), wo(), bo(27, "p", 8), Xo(28, "2.558"), wo(), wo(), bo(29, "div", 9), bo(30, "span", 10), bo(31, "span", 6), Xo(32, "update"), wo(), Xo(33, " just updated "), wo(), bo(34, "button", 11), Xo(35, " MORE INFO "), wo(), wo(), wo(), wo(), bo(36, "div", 2), bo(37, "div", 3), bo(38, "div", 4), bo(39, "div", 13), bo(40, "span", 6), Xo(41, "folder_shared"), wo(), wo(), bo(42, "p", 7), Xo(43, "Documentations"), wo(), bo(44, "p", 8), Xo(45, "+455"), wo(), wo(), bo(46, "div", 9), bo(47, "span", 10), bo(48, "span", 6), Xo(49, "update"), wo(), Xo(50, " just updated "), wo(), bo(51, "button", 11), Xo(52, " MORE INFO "), wo(), wo(), wo(), wo(), bo(53, "div", 2), bo(54, "div", 3), bo(55, "div", 4), bo(56, "div", 14), bo(57, "span", 6), Xo(58, "chat_bubble"), wo(), wo(), bo(59, "p", 7), Xo(60, "Consultations"), wo(), bo(61, "p", 8), Xo(62, "1.200"), wo(), wo(),bo(63, "div", 9),bo(64, "span", 10),bo(65, "span", 6),Xo(66, "update"),wo(),Xo(67, " just updated "),wo(),bo(68, "button", 11),Xo(69, " MORE INFO "),wo(),wo(),wo(),wo(),wo(),bo(70, "div", 1),bo(71, "div", 15),bo(72, "div", 16),bo(73, "div", 17),bo(74, "p", 18),Xo(75, "Employees/Gender"),wo(),bo(76, "span", 19),Xo(77, " Missing Data "),bo(78, "span", 6),Xo(79, "arrow_right"),wo(),wo(),wo(),bo(80, "div", 20),bo(81, "div", 21),Co(82, "span", 22),Co(83, "span", 23),wo(),Co(84, "ngx-charts-pie-chart", 24),wo(),bo(85, "div", 25),bo(86, "span", 26),bo(87, "span", 6),Xo(88, "update"),wo(),Xo(89, " just updated "),wo(),bo(90, "div", 27),bo(91, "div", 28),Co(92, "div", 29),bo(93, "span", 30),Xo(94, "Female"),wo(),wo(),bo(95, "div", 28),Co(96, "div", 31),bo(97, "span", 30),Xo(98, "Male"),wo(),wo(),wo(),wo(),wo(),wo(),bo(99, "div", 15),bo(100, "div", 16),bo(101, "div", 17),bo(102, "p", 18),Xo(103, "Employees/Age"),wo(),bo(104, "span", 19),Xo(105, " Missing Data "),bo(106, "span", 6),Xo(107, "arrow_right"),wo(),wo(),wo(),bo(108, "div", 20),bo(109, "div", 32),Co(110, "ngx-charts-bar-vertical-2d", 33),wo(),wo(),wo(),wo(),bo(111, "div", 15),bo(112, "div", 16),bo(113, "div", 17),bo(114, "p", 18),Xo(115, "Employees/Income"),wo(),bo(116, "span", 19),Xo(117, " Missing Data "),bo(118, "span", 6),Xo(119, "arrow_right"),wo(),wo(),wo(),bo(120, "div", 20),bo(121, "div", 34),Co(122, "ngx-charts-bar-vertical", 35),wo(),wo(),wo(),wo(),wo(),wo()), 2 & t && (fi(84), _o("scheme", cl(29, VT, ul(28, zT)))("results", e.pieChartData)("gradient", !0)("doughnut", !0)("animations", !0)("arcWidth", .35), fi(26), _o("scheme", cl(32, VT, ul(31, zT)))("results", e.multiChartData)("yScaleMax", 50)("roundEdges", !1)("roundDomains", !0)("showGridLines", !0)("gradient", !0)("yAxisTickFormatting", e.getPercent)("xAxis", !0)("yAxis", !0), fi(12), _o("scheme", cl(35, VT, ul(34, BT)))("barPadding", 75)("roundEdges", !1)("roundDomains", !0)("trimXAxisTicks", !1)("trimYAxisTicks", !1)("rotateXAxisTicks", !1)("results", e.singleChartData)("showGridLines", !0)("gradient", !0)("xAxis", !0)("yAxis", !0))
        },
        directives: [Fw, gw, vw],
        styles: [".wrapper[_ngcontent-%COMP%]{height:100%;padding-top:50px}.card[_ngcontent-%COMP%]{border-radius:6px;background-color:#fff;box-shadow:0 1px 4px 0 rgba(0,0,0,.14);margin-bottom:44px;z-index:0}.card--large[_ngcontent-%COMP%]{height:361px}.card-header[_ngcontent-%COMP%]{border-bottom:none;background-color:#fff;position:relative;border-radius:6px;padding-bottom:0}.card-header--lg[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:20px 24px 0}.card-header-link[_ngcontent-%COMP%]{display:flex;align-items:center;color:#5e77ff;font-size:.875rem;font-weight:700;cursor:pointer}.card-header-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{position:relative;top:1px}.card-header-link[_ngcontent-%COMP%]:hover{color:#788dff}.card-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:89px;width:89px;position:absolute;top:-20px;left:15px;z-index:1;border-radius:3px;box-shadow:0 1px 4px 0 rgba(0,0,0,.3)}.card-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:40px}.card-icon--employees[_ngcontent-%COMP%]{background:linear-gradient(222.47deg,#6cefff,#5e77ff)}.card-icon--contracts[_ngcontent-%COMP%]{background:linear-gradient(222.47deg,#a094ff,#bc5de6)}.card-icon--documentations[_ngcontent-%COMP%]{background:linear-gradient(222.47deg,#09d0bd,#5e77ff)}.card-icon--consultations[_ngcontent-%COMP%]{background:linear-gradient(222.47deg,#ffa300,#f44336)}.card-title[_ngcontent-%COMP%]{text-align:right;color:#7a7a7a;font-size:.875rem;line-height:21px;margin-bottom:0}.card-lg-title[_ngcontent-%COMP%]{text-align:left;color:#3c4858;font-size:1.125rem;line-height:1.875rem;margin-bottom:0}.card-value[_ngcontent-%COMP%]{text-align:right;font-size:1.875rem;margin-bottom:15px}.card-body[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;overflow-x:auto;overflow-y:hidden;position:relative}.card-body[_ngcontent-%COMP%]   .pie-icons[_ngcontent-%COMP%]{display:flex;position:absolute}.card-body[_ngcontent-%COMP%]   .pie-icon[_ngcontent-%COMP%]{width:16px;height:34px;margin:0 5px}.card-body[_ngcontent-%COMP%]   .pie-icon--male[_ngcontent-%COMP%]{background:url(dist/assets/icons/male.svg) no-repeat 50%}.card-body[_ngcontent-%COMP%]   .pie-icon--female[_ngcontent-%COMP%]{background:url(dist/assets/icons/female.svg) no-repeat 50%}.card-body[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{height:calc(100% - 30px);width:calc(75% + 2.5rem)}.card-body[_ngcontent-%COMP%]   .chart-container--single[_ngcontent-%COMP%]{width:calc(80% + 2.5rem)}.card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px 0;background-color:#fff;border-color:#eee;margin:0 18px}.card-footer--chart[_ngcontent-%COMP%]{justify-content:normal}.card[_ngcontent-%COMP%]   .pie-chart-legend[_ngcontent-%COMP%]{display:flex;align-self:center;margin-left:33px}.card[_ngcontent-%COMP%]   .pie-chart-legend-item[_ngcontent-%COMP%]{display:flex;align-items:center}.card[_ngcontent-%COMP%]   .pie-chart-legend-item[_ngcontent-%COMP%]:not(:first-of-type){margin-left:10px}.card[_ngcontent-%COMP%]   .pie-chart-legend-name[_ngcontent-%COMP%]{color:#3c4858;font-size:.75rem}.card[_ngcontent-%COMP%]   .pie-chart-legend-color[_ngcontent-%COMP%]{border-radius:50%;width:12px;height:12px;margin-right:10px}.card[_ngcontent-%COMP%]   .pie-chart-legend-color--female[_ngcontent-%COMP%]{background:#bc5de6}.card[_ngcontent-%COMP%]   .pie-chart-legend-color--male[_ngcontent-%COMP%]{background:linear-gradient(222.47deg,#6cefff,#5e77ff)}.card-update-time[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:.75rem;color:#a2a2a2}.card-update-time--left[_ngcontent-%COMP%]{align-self:flex-start}.card-update-time[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:18px;margin-right:8px}.card-btn[_ngcontent-%COMP%]{width:96px;height:27px;border-radius:13.6px;background-color:#5e77ff;color:#fff;font-size:9.6px;cursor:pointer}.card-btn[_ngcontent-%COMP%]:hover{background-color:#788dff}"]
      }), FT)
    }, {path: "**", redirectTo: "/"}], WT = ((HT = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: HT}), HT.\u0275inj = dt({
      factory: function (t) {
        return new (t || HT)
      }, imports: [[ET.forRoot(qT)], ET]
    }), HT), GT = ((jT = function () {
      function t() {
        _classCallCheck(this, t), this.isMenuToggled = !0
      }

      return _createClass(t, [{
        key: "toggleMenu", value: function () {
          this.isMenuToggled = !this.isMenuToggled
        }
      }]), t
    }()).\u0275fac = function (t) {
      return new (t || jT)
    }, jT.\u0275cmp = pe({
      type: jT,
      selectors: [["app-root"]],
      decls: 23,
      vars: 2,
      consts: [[1, "d-flex", "wrapper"], [1, "bg-light", "border-right", "sidebar-wrapper"], [1, "sidebar-heading"], [1, "list-group", "list-group-flush"], ["routerLink", "/", "routerLinkActive", "sidebar-item--active", 1, "sidebar-item", "list-group-item", "list-group-item-action"], ["routerLink", "/shortcuts", "routerLinkActive", "sidebar-item--active", 1, "sidebar-item", "list-group-item", "list-group-item-action"], ["routerLink", "/overview", "routerLinkActive", "sidebar-item--active", 1, "sidebar-item", "list-group-item", "list-group-item-action"], ["routerLink", "/events", "routerLinkActive", "sidebar-item--active", 1, "sidebar-item", "list-group-item", "list-group-item-action"], ["routerLink", "/profile", "routerLinkActive", "sidebar-item--active", 1, "sidebar-item", "list-group-item", "list-group-item-action"], ["routerLink", "/status", "routerLinkActive", "sidebar-item--active", 1, "sidebar-item", "list-group-item", "list-group-item-action"], [1, "page-content-wrapper"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "border-bottom"], [1, "btn", "btn-primary", "nav-btn", 3, "click"], [1, "container-fluid"]],
      template: function (t, e) {
        1 & t && (bo(0, "div", 0), bo(1, "div", 1), bo(2, "div", 2), Xo(3, "Statistics Demo"), wo(), bo(4, "div", 3), bo(5, "a", 4), Xo(6, " Statistics "), wo(), bo(7, "a", 5), Xo(8, " Knowledge "), wo(), bo(9, "a", 6), Xo(10, " Chat "), wo(), bo(11, "a", 7), Xo(12, " Employers "), wo(), bo(13, "a", 8), Xo(14, " Companies "), wo(), bo(15, "a", 9), Xo(16, " Calendar "), wo(), wo(), wo(), bo(17, "div", 10), bo(18, "nav", 11), bo(19, "button", 12), To("click", (function () {
          return e.toggleMenu()
        })), Xo(20, "Toggle Menu"), wo(), wo(), bo(21, "div", 13), Co(22, "router-outlet"), wo(), wo(), wo()), 2 & t && jo("wrapper--toggled", e.isMenuToggled)
      },
      directives: [sT, dT, gT],
      styles: ["body[_ngcontent-%COMP%]{overflow-x:hidden}.nav-btn[_ngcontent-%COMP%]{background-color:#071a83;border-color:#071a83}.sidebar-wrapper[_ngcontent-%COMP%]{min-height:100vh;margin-left:-15rem;transition:margin .25s ease-out}@media (min-width:768px){.sidebar-wrapper[_ngcontent-%COMP%]{margin-left:0}}.sidebar-heading[_ngcontent-%COMP%]{padding:.875rem 1.25rem;font-size:1.2rem}.sidebar-item[_ngcontent-%COMP%]{background-color:#dae0e5;width:15rem}.sidebar-item--active[_ngcontent-%COMP%]{background-color:#071a83;color:#fff;font-weight:700;letter-spacing:.5px}.page-content-wrapper[_ngcontent-%COMP%]{min-width:100vw;background-color:#efefef}@media (min-width:768px){.page-content-wrapper[_ngcontent-%COMP%]{min-width:0;width:100%}}.wrapper--toggled[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]{margin-left:0}@media (min-width:768px){.wrapper--toggled[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]{margin-left:-15rem}}"]
    }), jT), QT = ((NT = function t() {
      _classCallCheck(this, t)
    }).\u0275mod = me({type: NT, bootstrap: [GT]}), NT.\u0275inj = dt({
      factory: function (t) {
        return new (t || NT)
      }, providers: [], imports: [[ih, Ad, WT, Bw]]
    }), NT);
    (function () {
      if (_r) throw new Error("Cannot enable prod mode after platform setup.");
      mr = !1
    })(), nh().bootstrapModule(QT).catch((function (t) {
      return console.error(t)
    }))
  }, zn8P: function (t, e) {
    function n(t) {
      return Promise.resolve().then((function () {
        var e = new Error("Cannot find module '" + t + "'");
        throw e.code = "MODULE_NOT_FOUND", e
      }))
    }

    n.keys = function () {
      return []
    }, n.resolve = n, t.exports = n, n.id = "zn8P"
  }
}, [[0, 0]]]);
