(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
  0: function (t, e, n) {
    t.exports = n("zUnb")
  }, zUnb: function (t, e, n) {
    "use strict";

    function i(t) {
      return "function" == typeof t
    }

    n.r(e);
    let r = !1;
    const s = {
      Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) {
        if (t) {
          const t = new Error;
          console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
        } else r && console.log("RxJS: Back to a better error behavior. Thank you. <3");
        r = t
      }, get useDeprecatedSynchronousErrorHandling() {
        return r
      }
    };

    function o(t) {
      setTimeout(() => {
        throw t
      }, 0)
    }

    const a = {
      closed: !0, next(t) {
      }, error(t) {
        if (s.useDeprecatedSynchronousErrorHandling) throw t;
        o(t)
      }, complete() {
      }
    }, l = (() => Array.isArray || (t => t && "number" == typeof t.length))();

    function c(t) {
      return null !== t && "object" == typeof t
    }

    const u = (() => {
      function t(t) {
        return Error.call(this), this.message = t ? `${t.length} errors occurred during unsubscription:\n${t.map((t, e) => `${e + 1}) ${t.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = t, this
      }

      return t.prototype = Object.create(Error.prototype), t
    })();
    let h = (() => {
      class t {
        constructor(t) {
          this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
        }

        unsubscribe() {
          let e;
          if (this.closed) return;
          let {_parentOrParents: n, _unsubscribe: r, _subscriptions: s} = this;
          if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this); else if (null !== n) for (let t = 0; t < n.length; ++t) n[t].remove(this);
          if (i(r)) try {
            r.call(this)
          } catch (o) {
            e = o instanceof u ? d(o.errors) : [o]
          }
          if (l(s)) {
            let t = -1, n = s.length;
            for (; ++t < n;) {
              const n = s[t];
              if (c(n)) try {
                n.unsubscribe()
              } catch (o) {
                e = e || [], o instanceof u ? e = e.concat(d(o.errors)) : e.push(o)
              }
            }
          }
          if (e) throw new u(e)
        }

        add(e) {
          let n = e;
          if (!e) return t.EMPTY;
          switch (typeof e) {
            case"function":
              n = new t(e);
            case"object":
              if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
              if (this.closed) return n.unsubscribe(), n;
              if (!(n instanceof t)) {
                const e = n;
                n = new t, n._subscriptions = [e]
              }
              break;
            default:
              throw new Error("unrecognized teardown " + e + " added to Subscription.")
          }
          let {_parentOrParents: i} = n;
          if (null === i) n._parentOrParents = this; else if (i instanceof t) {
            if (i === this) return n;
            n._parentOrParents = [i, this]
          } else {
            if (-1 !== i.indexOf(this)) return n;
            i.push(this)
          }
          const r = this._subscriptions;
          return null === r ? this._subscriptions = [n] : r.push(n), n
        }

        remove(t) {
          const e = this._subscriptions;
          if (e) {
            const n = e.indexOf(t);
            -1 !== n && e.splice(n, 1)
          }
        }
      }

      var e;
      return t.EMPTY = ((e = new t).closed = !0, e), t
    })();

    function d(t) {
      return t.reduce((t, e) => t.concat(e instanceof u ? e.errors : e), [])
    }

    const f = (() => "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())();

    class p extends h {
      constructor(t, e, n) {
        switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
          case 0:
            this.destination = a;
            break;
          case 1:
            if (!t) {
              this.destination = a;
              break
            }
            if ("object" == typeof t) {
              t instanceof p ? (this.syncErrorThrowable = t.syncErrorThrowable, this.destination = t, t.add(this)) : (this.syncErrorThrowable = !0, this.destination = new g(this, t));
              break
            }
          default:
            this.syncErrorThrowable = !0, this.destination = new g(this, t, e, n)
        }
      }

      [f]() {
        return this
      }

      static create(t, e, n) {
        const i = new p(t, e, n);
        return i.syncErrorThrowable = !1, i
      }

      next(t) {
        this.isStopped || this._next(t)
      }

      error(t) {
        this.isStopped || (this.isStopped = !0, this._error(t))
      }

      complete() {
        this.isStopped || (this.isStopped = !0, this._complete())
      }

      unsubscribe() {
        this.closed || (this.isStopped = !0, super.unsubscribe())
      }

      _next(t) {
        this.destination.next(t)
      }

      _error(t) {
        this.destination.error(t), this.unsubscribe()
      }

      _complete() {
        this.destination.complete(), this.unsubscribe()
      }

      _unsubscribeAndRecycle() {
        const {_parentOrParents: t} = this;
        return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
      }
    }

    class g extends p {
      constructor(t, e, n, r) {
        let s;
        super(), this._parentSubscriber = t;
        let o = this;
        i(e) ? s = e : e && (s = e.next, n = e.error, r = e.complete, e !== a && (o = Object.create(e), i(o.unsubscribe) && this.add(o.unsubscribe.bind(o)), o.unsubscribe = this.unsubscribe.bind(this))), this._context = o, this._next = s, this._error = n, this._complete = r
      }

      next(t) {
        if (!this.isStopped && this._next) {
          const {_parentSubscriber: e} = this;
          s.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
        }
      }

      error(t) {
        if (!this.isStopped) {
          const {_parentSubscriber: e} = this, {useDeprecatedSynchronousErrorHandling: n} = s;
          if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe()); else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : o(t), this.unsubscribe(); else {
            if (this.unsubscribe(), n) throw t;
            o(t)
          }
        }
      }

      complete() {
        if (!this.isStopped) {
          const {_parentSubscriber: t} = this;
          if (this._complete) {
            const e = () => this._complete.call(this._context);
            s.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe())
          } else this.unsubscribe()
        }
      }

      __tryOrUnsub(t, e) {
        try {
          t.call(this._context, e)
        } catch (n) {
          if (this.unsubscribe(), s.useDeprecatedSynchronousErrorHandling) throw n;
          o(n)
        }
      }

      __tryOrSetError(t, e, n) {
        if (!s.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
        try {
          e.call(this._context, n)
        } catch (i) {
          return s.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = i, t.syncErrorThrown = !0, !0) : (o(i), !0)
        }
        return !1
      }

      _unsubscribe() {
        const {_parentSubscriber: t} = this;
        this._context = null, this._parentSubscriber = null, t.unsubscribe()
      }
    }

    const m = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")();

    function y(t) {
      return t
    }

    function v(...t) {
      return _(t)
    }

    function _(t) {
      return 0 === t.length ? y : 1 === t.length ? t[0] : function (e) {
        return t.reduce((t, e) => e(t), e)
      }
    }

    let w = (() => {
      class t {
        constructor(t) {
          this._isScalar = !1, t && (this._subscribe = t)
        }

        lift(e) {
          const n = new t;
          return n.source = this, n.operator = e, n
        }

        subscribe(t, e, n) {
          const {operator: i} = this, r = function (t, e, n) {
            if (t) {
              if (t instanceof p) return t;
              if (t[f]) return t[f]()
            }
            return t || e || n ? new p(t, e, n) : new p(a)
          }(t, e, n);
          if (r.add(i ? i.call(r, this.source) : this.source || s.useDeprecatedSynchronousErrorHandling && !r.syncErrorThrowable ? this._subscribe(r) : this._trySubscribe(r)), s.useDeprecatedSynchronousErrorHandling && r.syncErrorThrowable && (r.syncErrorThrowable = !1, r.syncErrorThrown)) throw r.syncErrorValue;
          return r
        }

        _trySubscribe(t) {
          try {
            return this._subscribe(t)
          } catch (e) {
            s.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), function (t) {
              for (; t;) {
                const {closed: e, destination: n, isStopped: i} = t;
                if (e || i) return !1;
                t = n && n instanceof p ? n : null
              }
              return !0
            }(t) ? t.error(e) : console.warn(e)
          }
        }

        forEach(t, e) {
          return new (e = b(e))((e, n) => {
            let i;
            i = this.subscribe(e => {
              try {
                t(e)
              } catch (r) {
                n(r), i && i.unsubscribe()
              }
            }, n, e)
          })
        }

        _subscribe(t) {
          const {source: e} = this;
          return e && e.subscribe(t)
        }

        [m]() {
          return this
        }

        pipe(...t) {
          return 0 === t.length ? this : _(t)(this)
        }

        toPromise(t) {
          return new (t = b(t))((t, e) => {
            let n;
            this.subscribe(t => n = t, t => e(t), () => t(n))
          })
        }
      }

      return t.create = e => new t(e), t
    })();

    function b(t) {
      if (t || (t = s.Promise || Promise), !t) throw new Error("no Promise impl found");
      return t
    }

    const x = (() => {
      function t() {
        return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
      }

      return t.prototype = Object.create(Error.prototype), t
    })();

    class S extends h {
      constructor(t, e) {
        super(), this.subject = t, this.subscriber = e, this.closed = !1
      }

      unsubscribe() {
        if (this.closed) return;
        this.closed = !0;
        const t = this.subject, e = t.observers;
        if (this.subject = null, !e || 0 === e.length || t.isStopped || t.closed) return;
        const n = e.indexOf(this.subscriber);
        -1 !== n && e.splice(n, 1)
      }
    }

    class T extends p {
      constructor(t) {
        super(t), this.destination = t
      }
    }

    let C = (() => {
      class t extends w {
        constructor() {
          super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
        }

        [f]() {
          return new T(this)
        }

        lift(t) {
          const e = new k(this, this);
          return e.operator = t, e
        }

        next(t) {
          if (this.closed) throw new x;
          if (!this.isStopped) {
            const {observers: e} = this, n = e.length, i = e.slice();
            for (let r = 0; r < n; r++) i[r].next(t)
          }
        }

        error(t) {
          if (this.closed) throw new x;
          this.hasError = !0, this.thrownError = t, this.isStopped = !0;
          const {observers: e} = this, n = e.length, i = e.slice();
          for (let r = 0; r < n; r++) i[r].error(t);
          this.observers.length = 0
        }

        complete() {
          if (this.closed) throw new x;
          this.isStopped = !0;
          const {observers: t} = this, e = t.length, n = t.slice();
          for (let i = 0; i < e; i++) n[i].complete();
          this.observers.length = 0
        }

        unsubscribe() {
          this.isStopped = !0, this.closed = !0, this.observers = null
        }

        _trySubscribe(t) {
          if (this.closed) throw new x;
          return super._trySubscribe(t)
        }

        _subscribe(t) {
          if (this.closed) throw new x;
          return this.hasError ? (t.error(this.thrownError), h.EMPTY) : this.isStopped ? (t.complete(), h.EMPTY) : (this.observers.push(t), new S(this, t))
        }

        asObservable() {
          const t = new w;
          return t.source = this, t
        }
      }

      return t.create = (t, e) => new k(t, e), t
    })();

    class k extends C {
      constructor(t, e) {
        super(), this.destination = t, this.source = e
      }

      next(t) {
        const {destination: e} = this;
        e && e.next && e.next(t)
      }

      error(t) {
        const {destination: e} = this;
        e && e.error && this.destination.error(t)
      }

      complete() {
        const {destination: t} = this;
        t && t.complete && this.destination.complete()
      }

      _subscribe(t) {
        const {source: e} = this;
        return e ? this.source.subscribe(t) : h.EMPTY
      }
    }

    function E(t) {
      return t && "function" == typeof t.schedule
    }

    class A extends p {
      constructor(t, e, n) {
        super(), this.parent = t, this.outerValue = e, this.outerIndex = n, this.index = 0
      }

      _next(t) {
        this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
      }

      _error(t) {
        this.parent.notifyError(t, this), this.unsubscribe()
      }

      _complete() {
        this.parent.notifyComplete(this), this.unsubscribe()
      }
    }

    const O = t => e => {
      for (let n = 0, i = t.length; n < i && !e.closed; n++) e.next(t[n]);
      e.complete()
    };

    function L() {
      return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
    }

    const D = L(), M = t => t && "number" == typeof t.length && "function" != typeof t;

    function P(t) {
      return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
    }

    const R = t => {
      if (t && "function" == typeof t[m]) return i = t, t => {
        const e = i[m]();
        if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
        return e.subscribe(t)
      };
      if (M(t)) return O(t);
      if (P(t)) return n = t, t => (n.then(e => {
        t.closed || (t.next(e), t.complete())
      }, e => t.error(e)).then(null, o), t);
      if (t && "function" == typeof t[D]) return e = t, t => {
        const n = e[D]();
        for (; ;) {
          const e = n.next();
          if (e.done) {
            t.complete();
            break
          }
          if (t.next(e.value), t.closed) break
        }
        return "function" == typeof n.return && t.add(() => {
          n.return && n.return()
        }), t
      };
      {
        const e = c(t) ? "an invalid object" : `'${t}'`;
        throw new TypeError(`You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)
      }
      var e, n, i
    };

    function F(t, e, n, i, r = new A(t, n, i)) {
      if (!r.closed) return e instanceof w ? e.subscribe(r) : R(e)(r)
    }

    class I extends p {
      notifyNext(t, e, n, i, r) {
        this.destination.next(e)
      }

      notifyError(t, e) {
        this.destination.error(t)
      }

      notifyComplete(t) {
        this.destination.complete()
      }
    }

    function N(t, e) {
      return function (n) {
        if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        return n.lift(new j(t, e))
      }
    }

    class j {
      constructor(t, e) {
        this.project = t, this.thisArg = e
      }

      call(t, e) {
        return e.subscribe(new H(t, this.project, this.thisArg))
      }
    }

    class H extends p {
      constructor(t, e, n) {
        super(t), this.project = e, this.count = 0, this.thisArg = n || this
      }

      _next(t) {
        let e;
        try {
          e = this.project.call(this.thisArg, t, this.count++)
        } catch (n) {
          return void this.destination.error(n)
        }
        this.destination.next(e)
      }
    }

    function U(t, e) {
      return new w(n => {
        const i = new h;
        let r = 0;
        return i.add(e.schedule((function () {
          r !== t.length ? (n.next(t[r++]), n.closed || i.add(this.schedule())) : n.complete()
        }))), i
      })
    }

    function $(t, e) {
      return e ? function (t, e) {
        if (null != t) {
          if (function (t) {
            return t && "function" == typeof t[m]
          }(t)) return function (t, e) {
            return new w(n => {
              const i = new h;
              return i.add(e.schedule(() => {
                const r = t[m]();
                i.add(r.subscribe({
                  next(t) {
                    i.add(e.schedule(() => n.next(t)))
                  }, error(t) {
                    i.add(e.schedule(() => n.error(t)))
                  }, complete() {
                    i.add(e.schedule(() => n.complete()))
                  }
                }))
              })), i
            })
          }(t, e);
          if (P(t)) return function (t, e) {
            return new w(n => {
              const i = new h;
              return i.add(e.schedule(() => t.then(t => {
                i.add(e.schedule(() => {
                  n.next(t), i.add(e.schedule(() => n.complete()))
                }))
              }, t => {
                i.add(e.schedule(() => n.error(t)))
              }))), i
            })
          }(t, e);
          if (M(t)) return U(t, e);
          if (function (t) {
            return t && "function" == typeof t[D]
          }(t) || "string" == typeof t) return function (t, e) {
            if (!t) throw new Error("Iterable cannot be null");
            return new w(n => {
              const i = new h;
              let r;
              return i.add(() => {
                r && "function" == typeof r.return && r.return()
              }), i.add(e.schedule(() => {
                r = t[D](), i.add(e.schedule((function () {
                  if (n.closed) return;
                  let t, e;
                  try {
                    const n = r.next();
                    t = n.value, e = n.done
                  } catch (i) {
                    return void n.error(i)
                  }
                  e ? n.complete() : (n.next(t), this.schedule())
                })))
              })), i
            })
          }(t, e)
        }
        throw new TypeError((null !== t && typeof t || t) + " is not observable")
      }(t, e) : t instanceof w ? t : new w(R(t))
    }

    function V(t, e, n = Number.POSITIVE_INFINITY) {
      return "function" == typeof e ? i => i.pipe(V((n, i) => $(t(n, i)).pipe(N((t, r) => e(n, t, i, r))), n)) : ("number" == typeof e && (n = e), e => e.lift(new z(t, n)))
    }

    class z {
      constructor(t, e = Number.POSITIVE_INFINITY) {
        this.project = t, this.concurrent = e
      }

      call(t, e) {
        return e.subscribe(new B(t, this.project, this.concurrent))
      }
    }

    class B extends I {
      constructor(t, e, n = Number.POSITIVE_INFINITY) {
        super(t), this.project = e, this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
      }

      _next(t) {
        this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
      }

      _tryNext(t) {
        let e;
        const n = this.index++;
        try {
          e = this.project(t, n)
        } catch (i) {
          return void this.destination.error(i)
        }
        this.active++, this._innerSub(e, t, n)
      }

      _innerSub(t, e, n) {
        const i = new A(this, e, n), r = this.destination;
        r.add(i);
        const s = F(this, t, void 0, void 0, i);
        s !== i && r.add(s)
      }

      _complete() {
        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
      }

      notifyNext(t, e, n, i, r) {
        this.destination.next(e)
      }

      notifyComplete(t) {
        const e = this.buffer;
        this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
      }
    }

    function q(t = Number.POSITIVE_INFINITY) {
      return V(y, t)
    }

    function W(t, e) {
      return e ? U(t, e) : new w(O(t))
    }

    function G() {
      return function (t) {
        return t.lift(new Q(t))
      }
    }

    class Q {
      constructor(t) {
        this.connectable = t
      }

      call(t, e) {
        const {connectable: n} = this;
        n._refCount++;
        const i = new Y(t, n), r = e.subscribe(i);
        return i.closed || (i.connection = n.connect()), r
      }
    }

    class Y extends p {
      constructor(t, e) {
        super(t), this.connectable = e
      }

      _unsubscribe() {
        const {connectable: t} = this;
        if (!t) return void (this.connection = null);
        this.connectable = null;
        const e = t._refCount;
        if (e <= 0) return void (this.connection = null);
        if (t._refCount = e - 1, e > 1) return void (this.connection = null);
        const {connection: n} = this, i = t._connection;
        this.connection = null, !i || n && i !== n || i.unsubscribe()
      }
    }

    class Z extends w {
      constructor(t, e) {
        super(), this.source = t, this.subjectFactory = e, this._refCount = 0, this._isComplete = !1
      }

      _subscribe(t) {
        return this.getSubject().subscribe(t)
      }

      getSubject() {
        const t = this._subject;
        return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
      }

      connect() {
        let t = this._connection;
        return t || (this._isComplete = !1, t = this._connection = new h, t.add(this.source.subscribe(new K(this.getSubject(), this))), t.closed && (this._connection = null, t = h.EMPTY)), t
      }

      refCount() {
        return G()(this)
      }
    }

    const X = (() => {
      const t = Z.prototype;
      return {
        operator: {value: null},
        _refCount: {value: 0, writable: !0},
        _subject: {value: null, writable: !0},
        _connection: {value: null, writable: !0},
        _subscribe: {value: t._subscribe},
        _isComplete: {value: t._isComplete, writable: !0},
        getSubject: {value: t.getSubject},
        connect: {value: t.connect},
        refCount: {value: t.refCount}
      }
    })();

    class K extends T {
      constructor(t, e) {
        super(t), this.connectable = e
      }

      _error(t) {
        this._unsubscribe(), super._error(t)
      }

      _complete() {
        this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
      }

      _unsubscribe() {
        const t = this.connectable;
        if (t) {
          this.connectable = null;
          const e = t._connection;
          t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
        }
      }
    }

    function J() {
      return new C
    }

    function tt(t) {
      return {toString: t}.toString()
    }

    function et(t, e, n) {
      return tt(() => {
        const i = function (t) {
          return function (...e) {
            if (t) {
              const n = t(...e);
              for (const t in n) this[t] = n[t]
            }
          }
        }(e);

        function r(...t) {
          if (this instanceof r) return i.apply(this, t), this;
          const e = new r(...t);
          return n.annotation = e, n;

          function n(t, n, i) {
            const r = t.hasOwnProperty("__parameters__") ? t.__parameters__ : Object.defineProperty(t, "__parameters__", {value: []}).__parameters__;
            for (; r.length <= i;) r.push(null);
            return (r[i] = r[i] || []).push(e), t
          }
        }

        return n && (r.prototype = Object.create(n.prototype)), r.prototype.ngMetadataName = t, r.annotationCls = r, r
      })
    }

    const nt = et("Inject", t => ({token: t})), it = et("Optional"), rt = et("Self"), st = et("SkipSelf");
    var ot = function (t) {
      return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
    }({});

    function at(t) {
      for (let e in t) if (t[e] === at) return e;
      throw Error("Could not find renamed property on target object.")
    }

    function lt(t, e) {
      for (const n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
    }

    function ct(t) {
      return {token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0}
    }

    function ut(t) {
      return {factory: t.factory, providers: t.providers || [], imports: t.imports || []}
    }

    function ht(t) {
      return dt(t, t[pt]) || dt(t, t[yt])
    }

    function dt(t, e) {
      return e && e.token === t ? e : null
    }

    function ft(t) {
      return t && (t.hasOwnProperty(gt) || t.hasOwnProperty(vt)) ? t[gt] : null
    }

    const pt = at({"\u0275prov": at}), gt = at({"\u0275inj": at}), mt = at({"\u0275provFallback": at}),
      yt = at({ngInjectableDef: at}), vt = at({ngInjectorDef: at});

    function _t(t) {
      if ("string" == typeof t) return t;
      if (Array.isArray(t)) return "[" + t.map(_t).join(", ") + "]";
      if (null == t) return "" + t;
      if (t.overriddenName) return "" + t.overriddenName;
      if (t.name) return "" + t.name;
      const e = t.toString();
      if (null == e) return "" + e;
      const n = e.indexOf("\n");
      return -1 === n ? e : e.substring(0, n)
    }

    function wt(t, e) {
      return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e
    }

    const bt = at({__forward_ref__: at});

    function xt(t) {
      return t.__forward_ref__ = xt, t.toString = function () {
        return _t(this())
      }, t
    }

    function St(t) {
      return Tt(t) ? t() : t
    }

    function Tt(t) {
      return "function" == typeof t && t.hasOwnProperty(bt) && t.__forward_ref__ === xt
    }

    const Ct = "undefined" != typeof globalThis && globalThis, kt = "undefined" != typeof window && window,
      Et = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
      At = "undefined" != typeof global && global, Ot = Ct || At || kt || Et, Lt = at({"\u0275cmp": at}),
      Dt = at({"\u0275dir": at}), Mt = at({"\u0275pipe": at}), Pt = at({"\u0275mod": at}), Rt = at({"\u0275loc": at}),
      Ft = at({"\u0275fac": at}), It = at({__NG_ELEMENT_ID__: at});

    class Nt {
      constructor(t, e) {
        this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.\u0275prov = ct({
          token: this,
          providedIn: e.providedIn || "root",
          factory: e.factory
        }))
      }

      toString() {
        return "InjectionToken " + this._desc
      }
    }

    const jt = new Nt("INJECTOR", -1), Ht = {}, Ut = /\n/gm, $t = at({provide: String, useValue: at});
    let Vt, zt = void 0;

    function Bt(t) {
      const e = zt;
      return zt = t, e
    }

    function qt(t) {
      const e = Vt;
      return Vt = t, e
    }

    function Wt(t, e = ot.Default) {
      if (void 0 === zt) throw new Error("inject() must be called from an injection context");
      return null === zt ? Qt(t, void 0, e) : zt.get(t, e & ot.Optional ? null : void 0, e)
    }

    function Gt(t, e = ot.Default) {
      return (Vt || Wt)(St(t), e)
    }

    function Qt(t, e, n) {
      const i = ht(t);
      if (i && "root" == i.providedIn) return void 0 === i.value ? i.value = i.factory() : i.value;
      if (n & ot.Optional) return null;
      if (void 0 !== e) return e;
      throw new Error(`Injector: NOT_FOUND [${_t(t)}]`)
    }

    function Yt(t) {
      const e = [];
      for (let n = 0; n < t.length; n++) {
        const i = St(t[n]);
        if (Array.isArray(i)) {
          if (0 === i.length) throw new Error("Arguments array must have arguments.");
          let t = void 0, n = ot.Default;
          for (let e = 0; e < i.length; e++) {
            const r = i[e];
            r instanceof it || "Optional" === r.ngMetadataName || r === it ? n |= ot.Optional : r instanceof st || "SkipSelf" === r.ngMetadataName || r === st ? n |= ot.SkipSelf : r instanceof rt || "Self" === r.ngMetadataName || r === rt ? n |= ot.Self : t = r instanceof nt || r === nt ? r.token : r
          }
          e.push(Gt(t, n))
        } else e.push(Gt(i))
      }
      return e
    }

    class Zt {
      get(t, e = Ht) {
        if (e === Ht) {
          const e = new Error(`NullInjectorError: No provider for ${_t(t)}!`);
          throw e.name = "NullInjectorError", e
        }
        return e
      }
    }

    class Xt {
    }

    class Kt {
    }

    function Jt(t, e) {
      t.forEach(t => Array.isArray(t) ? Jt(t, e) : e(t))
    }

    function te(t, e, n) {
      e >= t.length ? t.push(n) : t.splice(e, 0, n)
    }

    function ee(t, e) {
      return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
    }

    function ne(t, e) {
      const n = [];
      for (let i = 0; i < t; i++) n.push(e);
      return n
    }

    function ie(t, e, n) {
      let i = se(t, e);
      return i >= 0 ? t[1 | i] = n : (i = ~i, function (t, e, n, i) {
        let r = t.length;
        if (r == e) t.push(n, i); else if (1 === r) t.push(i, t[0]), t[0] = n; else {
          for (r--, t.push(t[r - 1], t[r]); r > e;) t[r] = t[r - 2], r--;
          t[e] = n, t[e + 1] = i
        }
      }(t, i, e, n)), i
    }

    function re(t, e) {
      const n = se(t, e);
      if (n >= 0) return t[1 | n]
    }

    function se(t, e) {
      return function (t, e, n) {
        let i = 0, r = t.length >> 1;
        for (; r !== i;) {
          const n = i + (r - i >> 1), s = t[n << 1];
          if (e === s) return n << 1;
          s > e ? r = n : i = n + 1
        }
        return ~(r << 1)
      }(t, e)
    }

    const oe = function () {
      var t = {OnPush: 0, Default: 1};
      return t[t.OnPush] = "OnPush", t[t.Default] = "Default", t
    }(), ae = function () {
      var t = {Emulated: 0, Native: 1, None: 2, ShadowDom: 3};
      return t[t.Emulated] = "Emulated", t[t.Native] = "Native", t[t.None] = "None", t[t.ShadowDom] = "ShadowDom", t
    }(), le = {}, ce = [];
    let ue = 0;

    function he(t) {
      return tt(() => {
        const e = t.type, n = e.prototype, i = {}, r = {
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
          declaredInputs: i,
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
          onPush: t.changeDetection === oe.OnPush,
          directiveDefs: null,
          pipeDefs: null,
          selectors: t.selectors || ce,
          viewQuery: t.viewQuery || null,
          features: t.features || null,
          data: t.data || {},
          encapsulation: t.encapsulation || ae.Emulated,
          id: "c",
          styles: t.styles || ce,
          _: null,
          setInput: null,
          schemas: t.schemas || null,
          tView: null
        }, s = t.directives, o = t.features, a = t.pipes;
        return r.id += ue++, r.inputs = me(t.inputs, i), r.outputs = me(t.outputs), o && o.forEach(t => t(r)), r.directiveDefs = s ? () => ("function" == typeof s ? s() : s).map(de) : null, r.pipeDefs = a ? () => ("function" == typeof a ? a() : a).map(fe) : null, r
      })
    }

    function de(t) {
      return ve(t) || function (t) {
        return t[Dt] || null
      }(t)
    }

    function fe(t) {
      return function (t) {
        return t[Mt] || null
      }(t)
    }

    const pe = {};

    function ge(t) {
      const e = {
        type: t.type,
        bootstrap: t.bootstrap || ce,
        declarations: t.declarations || ce,
        imports: t.imports || ce,
        exports: t.exports || ce,
        transitiveCompileScopes: null,
        schemas: t.schemas || null,
        id: t.id || null
      };
      return null != t.id && tt(() => {
        pe[t.id] = t.type
      }), e
    }

    function me(t, e) {
      if (null == t) return le;
      const n = {};
      for (const i in t) if (t.hasOwnProperty(i)) {
        let r = t[i], s = r;
        Array.isArray(r) && (s = r[1], r = r[0]), n[r] = i, e && (e[r] = s)
      }
      return n
    }

    const ye = he;

    function ve(t) {
      return t[Lt] || null
    }

    function _e(t, e) {
      return t.hasOwnProperty(Ft) ? t[Ft] : null
    }

    function we(t, e) {
      const n = t[Pt] || null;
      if (!n && !0 === e) throw new Error(`Type ${_t(t)} does not have '\u0275mod' property.`);
      return n
    }

    function be(t) {
      return Array.isArray(t) && "object" == typeof t[1]
    }

    function xe(t) {
      return Array.isArray(t) && !0 === t[1]
    }

    function Se(t) {
      return 0 != (8 & t.flags)
    }

    function Te(t) {
      return 2 == (2 & t.flags)
    }

    function Ce(t) {
      return 1 == (1 & t.flags)
    }

    function ke(t) {
      return null !== t.template
    }

    function Ee(t) {
      return 0 != (512 & t[2])
    }

    let Ae = void 0;

    function Oe() {
      return void 0 !== Ae ? Ae : "undefined" != typeof document ? document : void 0
    }

    function Le(t) {
      return !!t.listen
    }

    const De = {createRenderer: (t, e) => Oe()};

    function Me(t) {
      for (; Array.isArray(t);) t = t[0];
      return t
    }

    function Pe(t, e) {
      return Me(e[t + 19])
    }

    function Re(t, e) {
      return Me(e[t.index])
    }

    function Fe(t, e) {
      return t.data[e + 19]
    }

    function Ie(t, e) {
      const n = e[t];
      return be(n) ? n : n[0]
    }

    function Ne(t) {
      const e = function (t) {
        return t.__ngContext__ || null
      }(t);
      return e ? Array.isArray(e) ? e : e.lView : null
    }

    function je(t) {
      return 4 == (4 & t[2])
    }

    function He(t) {
      return 128 == (128 & t[2])
    }

    function Ue(t, e) {
      return null === t || null == e ? null : t[e]
    }

    function $e(t) {
      t[18] = 0
    }

    const Ve = {lFrame: cn(null), bindingsEnabled: !0, checkNoChangesMode: !1};

    function ze() {
      return Ve.bindingsEnabled
    }

    function Be() {
      return Ve.lFrame.lView
    }

    function qe() {
      return Ve.lFrame.tView
    }

    function We(t) {
      Ve.lFrame.contextLView = t
    }

    function Ge() {
      return Ve.lFrame.previousOrParentTNode
    }

    function Qe(t, e) {
      Ve.lFrame.previousOrParentTNode = t, Ve.lFrame.isParent = e
    }

    function Ye() {
      return Ve.lFrame.isParent
    }

    function Ze() {
      Ve.lFrame.isParent = !1
    }

    function Xe() {
      return Ve.checkNoChangesMode
    }

    function Ke(t) {
      Ve.checkNoChangesMode = t
    }

    function Je() {
      const t = Ve.lFrame;
      let e = t.bindingRootIndex;
      return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
    }

    function tn() {
      return Ve.lFrame.bindingIndex++
    }

    function en(t) {
      const e = Ve.lFrame, n = e.bindingIndex;
      return e.bindingIndex = e.bindingIndex + t, n
    }

    function nn(t, e) {
      const n = Ve.lFrame;
      n.bindingIndex = n.bindingRootIndex = t, n.currentDirectiveIndex = e
    }

    function rn() {
      return Ve.lFrame.currentQueryIndex
    }

    function sn(t) {
      Ve.lFrame.currentQueryIndex = t
    }

    function on(t, e) {
      const n = ln();
      Ve.lFrame = n, n.previousOrParentTNode = e, n.lView = t
    }

    function an(t, e) {
      const n = ln(), i = t[1];
      Ve.lFrame = n, n.previousOrParentTNode = e, n.lView = t, n.tView = i, n.contextLView = t, n.bindingIndex = i.bindingStartIndex
    }

    function ln() {
      const t = Ve.lFrame, e = null === t ? null : t.child;
      return null === e ? cn(t) : e
    }

    function cn(t) {
      const e = {
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

    function un() {
      const t = Ve.lFrame;
      return Ve.lFrame = t.parent, t.previousOrParentTNode = null, t.lView = null, t
    }

    const hn = un;

    function dn() {
      const t = un();
      t.isParent = !0, t.tView = null, t.selectedIndex = 0, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.currentSanitizer = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0
    }

    function fn() {
      return Ve.lFrame.selectedIndex
    }

    function pn(t) {
      Ve.lFrame.selectedIndex = t
    }

    function gn() {
      const t = Ve.lFrame;
      return Fe(t.tView, t.selectedIndex)
    }

    function mn() {
      Ve.lFrame.currentNamespace = "http://www.w3.org/2000/svg"
    }

    function yn() {
      Ve.lFrame.currentNamespace = null
    }

    function vn(t, e) {
      for (let n = e.directiveStart, i = e.directiveEnd; n < i; n++) {
        const e = t.data[n];
        e.afterContentInit && (t.contentHooks || (t.contentHooks = [])).push(-n, e.afterContentInit), e.afterContentChecked && ((t.contentHooks || (t.contentHooks = [])).push(n, e.afterContentChecked), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, e.afterContentChecked)), e.afterViewInit && (t.viewHooks || (t.viewHooks = [])).push(-n, e.afterViewInit), e.afterViewChecked && ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, e.afterViewChecked)), null != e.onDestroy && (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy)
      }
    }

    function _n(t, e, n) {
      xn(t, e, 3, n)
    }

    function wn(t, e, n, i) {
      (3 & t[2]) === n && xn(t, e, n, i)
    }

    function bn(t, e) {
      let n = t[2];
      (3 & n) === e && (n &= 1023, n += 1, t[2] = n)
    }

    function xn(t, e, n, i) {
      const r = null != i ? i : -1;
      let s = 0;
      for (let o = void 0 !== i ? 65535 & t[18] : 0; o < e.length; o++) if ("number" == typeof e[o + 1]) {
        if (s = e[o], null != i && s >= i) break
      } else e[o] < 0 && (t[18] += 65536), (s < r || -1 == r) && (Sn(t, n, e, o), t[18] = (4294901760 & t[18]) + o + 2), o++
    }

    function Sn(t, e, n, i) {
      const r = n[i] < 0, s = n[i + 1], o = t[r ? -n[i] : n[i]];
      r ? t[2] >> 10 < t[18] >> 16 && (3 & t[2]) === e && (t[2] += 1024, s.call(o)) : s.call(o)
    }

    class Tn {
      constructor(t, e, n) {
        this.factory = t, this.resolving = !1, this.canSeeViewProviders = e, this.injectImpl = n
      }
    }

    function Cn(t, e, n) {
      const i = Le(t);
      let r = 0;
      for (; r < n.length;) {
        const s = n[r];
        if ("number" == typeof s) {
          if (0 !== s) break;
          r++;
          const o = n[r++], a = n[r++], l = n[r++];
          i ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l)
        } else {
          const o = s, a = n[++r];
          En(o) ? i && t.setProperty(e, o, a) : i ? t.setAttribute(e, o, a) : e.setAttribute(o, a), r++
        }
      }
      return r
    }

    function kn(t) {
      return 3 === t || 4 === t || 6 === t
    }

    function En(t) {
      return 64 === t.charCodeAt(0)
    }

    function An(t, e) {
      if (null === e || 0 === e.length) ; else if (null === t || 0 === t.length) t = e.slice(); else {
        let n = -1;
        for (let i = 0; i < e.length; i++) {
          const r = e[i];
          "number" == typeof r ? n = r : 0 === n || On(t, n, r, null, -1 === n || 2 === n ? e[++i] : null)
        }
      }
      return t
    }

    function On(t, e, n, i, r) {
      let s = 0, o = t.length;
      if (-1 === e) o = -1; else for (; s < t.length;) {
        const n = t[s++];
        if ("number" == typeof n) {
          if (n === e) {
            o = -1;
            break
          }
          if (n > e) {
            o = s - 1;
            break
          }
        }
      }
      for (; s < t.length;) {
        const e = t[s];
        if ("number" == typeof e) break;
        if (e === n) {
          if (null === i) return void (null !== r && (t[s + 1] = r));
          if (i === t[s + 1]) return void (t[s + 2] = r)
        }
        s++, null !== i && s++, null !== r && s++
      }
      -1 !== o && (t.splice(o, 0, e), s = o + 1), t.splice(s++, 0, n), null !== i && t.splice(s++, 0, i), null !== r && t.splice(s++, 0, r)
    }

    function Ln(t) {
      return -1 !== t
    }

    function Dn(t) {
      return 32767 & t
    }

    function Mn(t) {
      return t >> 16
    }

    function Pn(t, e) {
      let n = Mn(t), i = e;
      for (; n > 0;) i = i[15], n--;
      return i
    }

    function Rn(t) {
      return "string" == typeof t ? t : null == t ? "" : "" + t
    }

    function Fn(t) {
      return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : Rn(t)
    }

    const In = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Ot))();

    function Nn(t) {
      return {name: "window", target: t.ownerDocument.defaultView}
    }

    function jn(t) {
      return t instanceof Function ? t() : t
    }

    let Hn = !0;

    function Un(t) {
      const e = Hn;
      return Hn = t, e
    }

    let $n = 0;

    function Vn(t, e) {
      const n = Bn(t, e);
      if (-1 !== n) return n;
      const i = e[1];
      i.firstCreatePass && (t.injectorIndex = e.length, zn(i.data, t), zn(e, null), zn(i.blueprint, null));
      const r = qn(t, e), s = t.injectorIndex;
      if (Ln(r)) {
        const t = Dn(r), n = Pn(r, e), i = n[1].data;
        for (let r = 0; r < 8; r++) e[s + r] = n[t + r] | i[t + r]
      }
      return e[s + 8] = r, s
    }

    function zn(t, e) {
      t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
    }

    function Bn(t, e) {
      return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null == e[t.injectorIndex + 8] ? -1 : t.injectorIndex
    }

    function qn(t, e) {
      if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
      let n = e[6], i = 1;
      for (; n && -1 === n.injectorIndex;) n = (e = e[15]) ? e[6] : null, i++;
      return n ? n.injectorIndex | i << 16 : -1
    }

    function Wn(t, e, n) {
      !function (t, e, n) {
        let i = "string" != typeof n ? n[It] : n.charCodeAt(0) || 0;
        null == i && (i = n[It] = $n++);
        const r = 255 & i, s = 1 << r, o = 64 & r, a = 32 & r, l = e.data;
        128 & r ? o ? a ? l[t + 7] |= s : l[t + 6] |= s : a ? l[t + 5] |= s : l[t + 4] |= s : o ? a ? l[t + 3] |= s : l[t + 2] |= s : a ? l[t + 1] |= s : l[t] |= s
      }(t, e, n)
    }

    function Gn(t, e, n, i = ot.Default, r) {
      if (null !== t) {
        const r = function (t) {
          if ("string" == typeof t) return t.charCodeAt(0) || 0;
          const e = t[It];
          return "number" == typeof e && e > 0 ? 255 & e : e
        }(n);
        if ("function" == typeof r) {
          on(e, t);
          try {
            const t = r();
            if (null != t || i & ot.Optional) return t;
            throw new Error(`No provider for ${Fn(n)}!`)
          } finally {
            hn()
          }
        } else if ("number" == typeof r) {
          if (-1 === r) return new ti(t, e);
          let s = null, o = Bn(t, e), a = -1, l = i & ot.Host ? e[16][6] : null;
          for ((-1 === o || i & ot.SkipSelf) && (a = -1 === o ? qn(t, e) : e[o + 8], Jn(i, !1) ? (s = e[1], o = Dn(a), e = Pn(a, e)) : o = -1); -1 !== o;) {
            a = e[o + 8];
            const t = e[1];
            if (Kn(r, o, t.data)) {
              const t = Yn(o, e, n, s, i, l);
              if (t !== Qn) return t
            }
            Jn(i, e[1].data[o + 8] === l) && Kn(r, o, e) ? (s = t, o = Dn(a), e = Pn(a, e)) : o = -1
          }
        }
      }
      if (i & ot.Optional && void 0 === r && (r = null), 0 == (i & (ot.Self | ot.Host))) {
        const t = e[9], s = qt(void 0);
        try {
          return t ? t.get(n, r, i & ot.Optional) : Qt(n, r, i & ot.Optional)
        } finally {
          qt(s)
        }
      }
      if (i & ot.Optional) return r;
      throw new Error(`NodeInjector: NOT_FOUND [${Fn(n)}]`)
    }

    const Qn = {};

    function Yn(t, e, n, i, r, s) {
      const o = e[1], a = o.data[t + 8],
        l = Zn(a, o, n, null == i ? Te(a) && Hn : i != o && 3 === a.type, r & ot.Host && s === a);
      return null !== l ? Xn(e, o, l, a) : Qn
    }

    function Zn(t, e, n, i, r) {
      const s = t.providerIndexes, o = e.data, a = 65535 & s, l = t.directiveStart, c = s >> 16,
        u = r ? a + c : t.directiveEnd;
      for (let h = i ? a : a + c; h < u; h++) {
        const t = o[h];
        if (h < l && n === t || h >= l && t.type === n) return h
      }
      if (r) {
        const t = o[l];
        if (t && ke(t) && t.type === n) return l
      }
      return null
    }

    function Xn(t, e, n, i) {
      let r = t[n];
      const s = e.data;
      if (r instanceof Tn) {
        const o = r;
        if (o.resolving) throw new Error("Circular dep for " + Fn(s[n]));
        const a = Un(o.canSeeViewProviders);
        let l;
        o.resolving = !0, o.injectImpl && (l = qt(o.injectImpl)), on(t, i);
        try {
          r = t[n] = o.factory(void 0, s, t, i), e.firstCreatePass && n >= i.directiveStart && function (t, e, n) {
            const {onChanges: i, onInit: r, doCheck: s} = e;
            i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, i)), r && (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, r), s && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, s), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, s))
          }(n, s[n], e)
        } finally {
          o.injectImpl && qt(l), Un(a), o.resolving = !1, hn()
        }
      }
      return r
    }

    function Kn(t, e, n) {
      const i = 64 & t, r = 32 & t;
      let s;
      return s = 128 & t ? i ? r ? n[e + 7] : n[e + 6] : r ? n[e + 5] : n[e + 4] : i ? r ? n[e + 3] : n[e + 2] : r ? n[e + 1] : n[e], !!(s & 1 << t)
    }

    function Jn(t, e) {
      return !(t & ot.Self || t & ot.Host && e)
    }

    class ti {
      constructor(t, e) {
        this._tNode = t, this._lView = e
      }

      get(t, e) {
        return Gn(this._tNode, this._lView, t, void 0, e)
      }
    }

    function ei(t) {
      return tt(() => {
        const e = Object.getPrototypeOf(t.prototype).constructor, n = e[Ft] || function t(e) {
          const n = e;
          if (Tt(e)) return () => {
            const e = t(St(n));
            return e ? e() : null
          };
          let i = _e(n);
          if (null === i) {
            const t = ft(n);
            i = t && t.factory
          }
          return i || null
        }(e);
        return null !== n ? n : t => new t
      })
    }

    function ni(t) {
      return t.ngDebugContext
    }

    function ii(t) {
      return t.ngOriginalError
    }

    function ri(t, ...e) {
      t.error(...e)
    }

    class si {
      constructor() {
        this._console = console
      }

      handleError(t) {
        const e = this._findOriginalError(t), n = this._findContext(t), i = function (t) {
          return t.ngErrorLogger || ri
        }(t);
        i(this._console, "ERROR", t), e && i(this._console, "ORIGINAL ERROR", e), n && i(this._console, "ERROR CONTEXT", n)
      }

      _findContext(t) {
        return t ? ni(t) ? ni(t) : this._findContext(ii(t)) : null
      }

      _findOriginalError(t) {
        let e = ii(t);
        for (; e && ii(e);) e = ii(e);
        return e
      }
    }

    class oi {
      constructor(t) {
        this.changingThisBreaksApplicationSecurity = t
      }

      toString() {
        return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"
      }
    }

    class ai extends oi {
      getTypeName() {
        return "HTML"
      }
    }

    class li extends oi {
      getTypeName() {
        return "Style"
      }
    }

    class ci extends oi {
      getTypeName() {
        return "Script"
      }
    }

    class ui extends oi {
      getTypeName() {
        return "URL"
      }
    }

    class hi extends oi {
      getTypeName() {
        return "ResourceURL"
      }
    }

    function di(t) {
      return t instanceof oi ? t.changingThisBreaksApplicationSecurity : t
    }

    function fi(t, e) {
      const n = pi(t);
      if (null != n && n !== e) {
        if ("ResourceURL" === n && "URL" === e) return !0;
        throw new Error(`Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`)
      }
      return n === e
    }

    function pi(t) {
      return t instanceof oi && t.getTypeName() || null
    }

    let gi = !0, mi = !1;

    function yi() {
      return mi = !0, gi
    }

    class vi {
      constructor(t) {
        this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");
        let e = this.inertDocument.body;
        if (null == e) {
          const t = this.inertDocument.createElement("html");
          this.inertDocument.appendChild(t), e = this.inertDocument.createElement("body"), t.appendChild(e)
        }
        e.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !e.querySelector || e.querySelector("svg") ? (e.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = e.querySelector && e.querySelector("svg img") && function () {
          try {
            return !!window.DOMParser
          } catch (t) {
            return !1
          }
        }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
      }

      getInertBodyElement_XHR(t) {
        t = "<body><remove></remove>" + t + "</body>";
        try {
          t = encodeURI(t)
        } catch (i) {
          return null
        }
        const e = new XMLHttpRequest;
        e.responseType = "document", e.open("GET", "data:text/html;charset=utf-8," + t, !1), e.send(void 0);
        const n = e.response.body;
        return n.removeChild(n.firstChild), n
      }

      getInertBodyElement_DOMParser(t) {
        t = "<body><remove></remove>" + t + "</body>";
        try {
          const e = (new window.DOMParser).parseFromString(t, "text/html").body;
          return e.removeChild(e.firstChild), e
        } catch (e) {
          return null
        }
      }

      getInertBodyElement_InertDocument(t) {
        const e = this.inertDocument.createElement("template");
        if ("content" in e) return e.innerHTML = t, e;
        const n = this.inertDocument.createElement("body");
        return n.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(n), n
      }

      stripCustomNsAttrs(t) {
        const e = t.attributes;
        for (let i = e.length - 1; 0 < i; i--) {
          const n = e.item(i).name;
          "xmlns:ns1" !== n && 0 !== n.indexOf("ns1:") || t.removeAttribute(n)
        }
        let n = t.firstChild;
        for (; n;) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), n = n.nextSibling
      }
    }

    const _i = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      wi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

    function bi(t) {
      return (t = String(t)).match(_i) || t.match(wi) ? t : (yi() && console.warn(`WARNING: sanitizing unsafe URL value ${t} (see http://g.co/ng/security#xss)`), "unsafe:" + t)
    }

    function xi(t) {
      const e = {};
      for (const n of t.split(",")) e[n] = !0;
      return e
    }

    function Si(...t) {
      const e = {};
      for (const n of t) for (const t in n) n.hasOwnProperty(t) && (e[t] = !0);
      return e
    }

    const Ti = xi("area,br,col,hr,img,wbr"), Ci = xi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
      ki = xi("rp,rt"), Ei = Si(ki, Ci),
      Ai = Si(Ti, Si(Ci, xi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Si(ki, xi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Ei),
      Oi = xi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), Li = xi("srcset"),
      Di = Si(Oi, Li, xi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), xi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
      Mi = xi("script,style,template");

    class Pi {
      constructor() {
        this.sanitizedSomething = !1, this.buf = []
      }

      sanitizeChildren(t) {
        let e = t.firstChild, n = !0;
        for (; e;) if (e.nodeType === Node.ELEMENT_NODE ? n = this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, n && e.firstChild) e = e.firstChild; else for (; e;) {
          e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
          let t = this.checkClobberedElement(e, e.nextSibling);
          if (t) {
            e = t;
            break
          }
          e = this.checkClobberedElement(e, e.parentNode)
        }
        return this.buf.join("")
      }

      startElement(t) {
        const e = t.nodeName.toLowerCase();
        if (!Ai.hasOwnProperty(e)) return this.sanitizedSomething = !0, !Mi.hasOwnProperty(e);
        this.buf.push("<"), this.buf.push(e);
        const n = t.attributes;
        for (let r = 0; r < n.length; r++) {
          const t = n.item(r), e = t.name, s = e.toLowerCase();
          if (!Di.hasOwnProperty(s)) {
            this.sanitizedSomething = !0;
            continue
          }
          let o = t.value;
          Oi[s] && (o = bi(o)), Li[s] && (i = o, o = (i = String(i)).split(",").map(t => bi(t.trim())).join(", ")), this.buf.push(" ", e, '="', Ii(o), '"')
        }
        var i;
        return this.buf.push(">"), !0
      }

      endElement(t) {
        const e = t.nodeName.toLowerCase();
        Ai.hasOwnProperty(e) && !Ti.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"))
      }

      chars(t) {
        this.buf.push(Ii(t))
      }

      checkClobberedElement(t, e) {
        if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + t.outerHTML);
        return e
      }
    }

    const Ri = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Fi = /([^\#-~ |!])/g;

    function Ii(t) {
      return t.replace(/&/g, "&amp;").replace(Ri, (function (t) {
        return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
      })).replace(Fi, (function (t) {
        return "&#" + t.charCodeAt(0) + ";"
      })).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    let Ni;

    function ji(t, e) {
      let n = null;
      try {
        Ni = Ni || new vi(t);
        let i = e ? String(e) : "";
        n = Ni.getInertBodyElement(i);
        let r = 5, s = i;
        do {
          if (0 === r) throw new Error("Failed to sanitize html because the input is unstable");
          r--, i = s, s = n.innerHTML, n = Ni.getInertBodyElement(i)
        } while (i !== s);
        const o = new Pi, a = o.sanitizeChildren(Hi(n) || n);
        return yi() && o.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), a
      } finally {
        if (n) {
          const t = Hi(n) || n;
          for (; t.firstChild;) t.removeChild(t.firstChild)
        }
      }
    }

    function Hi(t) {
      return "content" in t && function (t) {
        return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
      }(t) ? t.content : null
    }

    const Ui = function () {
        var t = {NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5};
        return t[t.NONE] = "NONE", t[t.HTML] = "HTML", t[t.STYLE] = "STYLE", t[t.SCRIPT] = "SCRIPT", t[t.URL] = "URL", t[t.RESOURCE_URL] = "RESOURCE_URL", t
      }(),
      $i = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:attr|calc|var))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
      Vi = /^url\(([^)]+)\)$/;

    function zi(t) {
      if (!(t = String(t).trim())) return "";
      const e = t.match(Vi);
      return e && bi(e[1]) === e[1] || t.match($i) && function (t) {
        let e = !0, n = !0;
        for (let i = 0; i < t.length; i++) {
          const r = t.charAt(i);
          "'" === r && n ? e = !e : '"' === r && e && (n = !n)
        }
        return e && n
      }(t) ? t : (yi() && console.warn(`WARNING: sanitizing unsafe style value ${t} (see http://g.co/ng/security#xss).`), "unsafe")
    }

    function Bi(t) {
      const e = Qi();
      return e ? e.sanitize(Ui.HTML, t) || "" : fi(t, "HTML") ? di(t) : ji(Oe(), Rn(t))
    }

    function qi(t) {
      const e = Qi();
      return e ? e.sanitize(Ui.STYLE, t) || "" : fi(t, "Style") ? di(t) : zi(Rn(t))
    }

    function Wi(t) {
      const e = Qi();
      return e ? e.sanitize(Ui.URL, t) || "" : fi(t, "URL") ? di(t) : bi(Rn(t))
    }

    const Gi = function (t, e, n) {
      if (void 0 === e && void 0 === n) return qi(t);
      let i = !0;
      return 1 & (n = n || 3) && (i = function (t) {
        return "background-image" === t || "backgroundImage" === t || "background" === t || "border-image" === t || "borderImage" === t || "border-image-source" === t || "borderImageSource" === t || "filter" === t || "list-style" === t || "listStyle" === t || "list-style-image" === t || "listStyleImage" === t || "clip-path" === t || "clipPath" === t
      }(t)), 2 & n ? i ? qi(e) : di(e) : i
    };

    function Qi() {
      const t = Be();
      return t && t[12]
    }

    function Yi(t, e) {
      t.__ngContext__ = e
    }

    function Zi(t) {
      throw new Error("Multiple components match node with tagname " + t.tagName)
    }

    function Xi() {
      throw new Error("Cannot mix multi providers and regular providers")
    }

    function Ki(t, e, n) {
      let i = t.length;
      for (; ;) {
        const r = t.indexOf(e, n);
        if (-1 === r) return r;
        if (0 === r || t.charCodeAt(r - 1) <= 32) {
          const n = e.length;
          if (r + n === i || t.charCodeAt(r + n) <= 32) return r
        }
        n = r + 1
      }
    }

    function Ji(t, e, n) {
      let i = 0;
      for (; i < t.length;) {
        let r = t[i++];
        if (n && "class" === r) {
          if (r = t[i], -1 !== Ki(r.toLowerCase(), e, 0)) return !0
        } else if (1 === r) {
          for (; i < t.length && "string" == typeof (r = t[i++]);) if (r.toLowerCase() === e) return !0;
          return !1
        }
      }
      return !1
    }

    function tr(t, e, n) {
      return e === (0 !== t.type || n ? t.tagName : "ng-template")
    }

    function er(t, e, n) {
      let i = 4;
      const r = t.attrs || [], s = function (t) {
        for (let e = 0; e < t.length; e++) if (kn(t[e])) return e;
        return t.length
      }(r);
      let o = !1;
      for (let a = 0; a < e.length; a++) {
        const l = e[a];
        if ("number" != typeof l) {
          if (!o) if (4 & i) {
            if (i = 2 | 1 & i, "" !== l && !tr(t, l, n) || "" === l && 1 === e.length) {
              if (nr(i)) return !1;
              o = !0
            }
          } else {
            const c = 8 & i ? l : e[++a];
            if (8 & i && null !== t.attrs) {
              if (!Ji(t.attrs, c, n)) {
                if (nr(i)) return !1;
                o = !0
              }
              continue
            }
            const u = ir(8 & i ? "class" : l, r, 0 == t.type && "ng-template" !== t.tagName, n);
            if (-1 === u) {
              if (nr(i)) return !1;
              o = !0;
              continue
            }
            if ("" !== c) {
              let t;
              t = u > s ? "" : r[u + 1].toLowerCase();
              const e = 8 & i ? t : null;
              if (e && -1 !== Ki(e, c, 0) || 2 & i && c !== t) {
                if (nr(i)) return !1;
                o = !0
              }
            }
          }
        } else {
          if (!o && !nr(i) && !nr(l)) return !1;
          if (o && nr(l)) continue;
          o = !1, i = l | 1 & i
        }
      }
      return nr(i) || o
    }

    function nr(t) {
      return 0 == (1 & t)
    }

    function ir(t, e, n, i) {
      if (null === e) return -1;
      let r = 0;
      if (i || !n) {
        let n = !1;
        for (; r < e.length;) {
          const i = e[r];
          if (i === t) return r;
          if (3 === i || 6 === i) n = !0; else {
            if (1 === i || 2 === i) {
              let t = e[++r];
              for (; "string" == typeof t;) t = e[++r];
              continue
            }
            if (4 === i) break;
            if (0 === i) {
              r += 4;
              continue
            }
          }
          r += n ? 1 : 2
        }
        return -1
      }
      return function (t, e) {
        let n = t.indexOf(4);
        if (n > -1) for (n++; n < t.length;) {
          if (t[n] === e) return n;
          n++
        }
        return -1
      }(e, t)
    }

    function rr(t, e, n = !1) {
      for (let i = 0; i < e.length; i++) if (er(t, e[i], n)) return !0;
      return !1
    }

    function sr(t, e) {
      return t ? ":not(" + e.trim() + ")" : e
    }

    function or(t) {
      let e = t[0], n = 1, i = 2, r = "", s = !1;
      for (; n < t.length;) {
        let o = t[n];
        if ("string" == typeof o) if (2 & i) {
          const e = t[++n];
          r += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]"
        } else 8 & i ? r += "." + o : 4 & i && (r += " " + o); else "" === r || nr(o) || (e += sr(s, r), r = ""), i = o, s = s || !nr(i);
        n++
      }
      return "" !== r && (e += sr(s, r)), e
    }

    const ar = {};

    function lr(t) {
      const e = t[3];
      return xe(e) ? e[3] : e
    }

    function cr(t) {
      ur(qe(), Be(), fn() + t, Xe())
    }

    function ur(t, e, n, i) {
      if (!i) if (3 == (3 & e[2])) {
        const i = t.preOrderCheckHooks;
        null !== i && _n(e, i, n)
      } else {
        const i = t.preOrderHooks;
        null !== i && wn(e, i, 0, n)
      }
      pn(n)
    }

    function hr(t, e) {
      return t << 17 | e << 2
    }

    function dr(t) {
      return t >> 17 & 32767
    }

    function fr(t) {
      return 2 | t
    }

    function pr(t) {
      return (131068 & t) >> 2
    }

    function gr(t, e) {
      return -131069 & t | e << 2
    }

    function mr(t) {
      return 1 | t
    }

    function yr(t, e) {
      const n = t.contentQueries;
      if (null !== n) for (let i = 0; i < n.length; i += 2) {
        const r = n[i], s = n[i + 1];
        if (-1 !== s) {
          const n = t.data[s];
          sn(r), n.contentQueries(2, e[s], s)
        }
      }
    }

    function vr(t, e, n) {
      return Le(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t)
    }

    function _r(t, e, n, i, r, s, o, a, l, c) {
      const u = e.blueprint.slice();
      return u[0] = r, u[2] = 140 | i, $e(u), u[3] = u[15] = t, u[8] = n, u[10] = o || t && t[10], u[11] = a || t && t[11], u[12] = l || t && t[12] || null, u[9] = c || t && t[9] || null, u[6] = s, u[16] = 2 == e.type ? t[16] : u, u
    }

    function wr(t, e, n, i, r, s) {
      const o = n + 19, a = t.data[o] || function (t, e, n, i, r, s) {
        const o = Ge(), a = Ye(), l = a ? o : o && o.parent, c = t.data[n] = Or(0, l && l !== e ? l : null, i, n, r, s);
        return null === t.firstChild && (t.firstChild = c), o && (!a || null != o.child || null === c.parent && 2 !== o.type ? a || (o.next = c) : o.child = c), c
      }(t, e, o, i, r, s);
      return Qe(a, !0), a
    }

    function br(t, e, n) {
      an(e, e[6]);
      try {
        const i = t.viewQuery;
        null !== i && Kr(1, i, n);
        const r = t.template;
        null !== r && Tr(t, e, r, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && yr(t, e), t.staticViewQueries && Kr(2, t.viewQuery, n);
        const s = t.components;
        null !== s && function (t, e) {
          for (let n = 0; n < e.length; n++) Gr(t, e[n])
        }(e, s)
      } finally {
        e[2] &= -5, dn()
      }
    }

    function xr(t, e, n, i) {
      const r = e[2];
      if (256 == (256 & r)) return;
      an(e, e[6]);
      const s = Xe();
      try {
        $e(e), Ve.lFrame.bindingIndex = t.bindingStartIndex, null !== n && Tr(t, e, n, 2, i);
        const o = 3 == (3 & r);
        if (!s) if (o) {
          const n = t.preOrderCheckHooks;
          null !== n && _n(e, n, null)
        } else {
          const n = t.preOrderHooks;
          null !== n && wn(e, n, 0, null), bn(e, 0)
        }
        if (function (t) {
          let e = t[13];
          for (; null !== e;) {
            let n;
            if (xe(e) && (n = e[2]) >> 1 == -1) {
              for (let t = 9; t < e.length; t++) {
                const n = e[t], i = n[1];
                He(n) && xr(i, n, i.template, n[8])
              }
              0 != (1 & n) && qr(e, t[16])
            }
            e = e[4]
          }
        }(e), null !== t.contentQueries && yr(t, e), !s) if (o) {
          const n = t.contentCheckHooks;
          null !== n && _n(e, n)
        } else {
          const n = t.contentHooks;
          null !== n && wn(e, n, 1), bn(e, 1)
        }
        !function (t, e) {
          try {
            const n = t.expandoInstructions;
            if (null !== n) {
              let i = t.expandoStartIndex, r = -1, s = -1;
              for (let t = 0; t < n.length; t++) {
                const o = n[t];
                "number" == typeof o ? o <= 0 ? (s = 0 - o, pn(s), i += 9 + n[++t], r = i) : i += o : (null !== o && (nn(i, r), o(2, e[r])), r++)
              }
            }
          } finally {
            pn(-1)
          }
        }(t, e);
        const a = t.components;
        null !== a && function (t, e) {
          for (let n = 0; n < e.length; n++) Wr(t, e[n])
        }(e, a);
        const l = t.viewQuery;
        if (null !== l && Kr(2, l, i), !s) if (o) {
          const n = t.viewCheckHooks;
          null !== n && _n(e, n)
        } else {
          const n = t.viewHooks;
          null !== n && wn(e, n, 2), bn(e, 2)
        }
        !0 === t.firstUpdatePass && (t.firstUpdatePass = !1), s || (e[2] &= -73)
      } finally {
        dn()
      }
    }

    function Sr(t, e, n, i) {
      const r = e[10], s = !Xe(), o = je(e);
      try {
        s && !o && r.begin && r.begin(), o && br(t, e, i), xr(t, e, n, i)
      } finally {
        s && !o && r.end && r.end()
      }
    }

    function Tr(t, e, n, i, r) {
      const s = fn();
      try {
        pn(-1), 2 & i && e.length > 19 && ur(t, e, 0, Xe()), n(i, r)
      } finally {
        pn(s)
      }
    }

    function Cr(t, e, n) {
      ze() && (function (t, e, n, i) {
        const r = n.directiveStart, s = n.directiveEnd;
        t.firstCreatePass || Vn(n, e), Yi(i, e);
        const o = n.initialInputs;
        for (let a = r; a < s; a++) {
          const i = t.data[a], s = ke(i);
          s && $r(e, n, i);
          const l = Xn(e, t, a, n);
          Yi(l, e), null !== o && Vr(0, a - r, l, i, 0, o), s && (Ie(n.index, e)[8] = l)
        }
      }(t, e, n, Re(n, e)), 128 == (128 & n.flags) && function (t, e, n) {
        const i = n.directiveStart, r = n.directiveEnd, s = t.expandoInstructions, o = t.firstCreatePass,
          a = n.index - 19;
        try {
          pn(a);
          for (let n = i; n < r; n++) {
            const i = t.data[n], r = e[n];
            null !== i.hostBindings || 0 !== i.hostVars || null !== i.hostAttrs ? Fr(i, r) : o && s.push(null)
          }
        } finally {
          pn(-1)
        }
      }(t, e, n))
    }

    function kr(t, e, n = Re) {
      const i = e.localNames;
      if (null !== i) {
        let r = e.index + 1;
        for (let s = 0; s < i.length; s += 2) {
          const o = i[s + 1], a = -1 === o ? n(e, t) : t[o];
          t[r++] = a
        }
      }
    }

    function Er(t) {
      return t.tView || (t.tView = Ar(1, -1, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts))
    }

    function Ar(t, e, n, i, r, s, o, a, l, c) {
      const u = 19 + i, h = u + r, d = function (t, e) {
        const n = [];
        for (let i = 0; i < e; i++) n.push(i < t ? null : ar);
        return n
      }(u, h);
      return d[1] = {
        type: t,
        id: e,
        blueprint: d,
        template: n,
        queries: null,
        viewQuery: a,
        node: null,
        data: d.slice().fill(null, u),
        bindingStartIndex: u,
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
        directiveRegistry: "function" == typeof s ? s() : s,
        pipeRegistry: "function" == typeof o ? o() : o,
        firstChild: null,
        schemas: l,
        consts: c
      }
    }

    function Or(t, e, n, i, r, s) {
      return {
        type: n,
        index: i,
        injectorIndex: e ? e.injectorIndex : -1,
        directiveStart: -1,
        directiveEnd: -1,
        directiveStylingLast: -1,
        propertyBindings: null,
        flags: 0,
        providerIndexes: 0,
        tagName: r,
        attrs: s,
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

    function Lr(t, e, n) {
      for (let i in t) if (t.hasOwnProperty(i)) {
        const r = t[i];
        (n = null === n ? {} : n).hasOwnProperty(i) ? n[i].push(e, r) : n[i] = [e, r]
      }
      return n
    }

    function Dr(t, e, n, i, r, s, o, a) {
      const l = Re(e, n);
      let c, u = e.inputs;
      var h;
      !a && null != u && (c = u[i]) ? (is(t, n, c, i, r), Te(e) && function (t, e) {
        const n = Ie(e, t);
        16 & n[2] || (n[2] |= 64)
      }(n, e.index)) : 3 === e.type && (i = "class" === (h = i) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h, r = null != o ? o(r, e.tagName || "", i) : r, Le(s) ? s.setProperty(l, i, r) : En(i) || (l.setProperty ? l.setProperty(i, r) : l[i] = r))
    }

    function Mr(t, e, n, i) {
      let r = !1;
      if (ze()) {
        const s = function (t, e, n) {
          const i = t.directiveRegistry;
          let r = null;
          if (i) for (let s = 0; s < i.length; s++) {
            const o = i[s];
            rr(n, o.selectors, !1) && (r || (r = []), Wn(Vn(n, e), t, o.type), ke(o) ? (2 & n.flags && Zi(n), Nr(t, n), r.unshift(o)) : r.push(o))
          }
          return r
        }(t, e, n), o = null === i ? null : {"": -1};
        if (null !== s) {
          let i = 0;
          r = !0, Hr(n, t.data.length, s.length);
          for (let t = 0; t < s.length; t++) {
            const e = s[t];
            e.providersResolver && e.providersResolver(e)
          }
          Ir(t, n, s.length);
          let a = !1, l = !1;
          for (let r = 0; r < s.length; r++) {
            const c = s[r];
            n.mergedAttrs = An(n.mergedAttrs, c.hostAttrs), Ur(t, e, c), jr(t.data.length - 1, c, o), null !== c.contentQueries && (n.flags |= 8), null === c.hostBindings && null === c.hostAttrs && 0 === c.hostVars || (n.flags |= 128), !a && (c.onChanges || c.onInit || c.doCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - 19), a = !0), l || !c.onChanges && !c.doCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index - 19), l = !0), Pr(t, c), i += c.hostVars
          }
          !function (t, e) {
            const n = e.directiveEnd, i = t.data, r = e.attrs, s = [];
            let o = null, a = null;
            for (let l = e.directiveStart; l < n; l++) {
              const t = i[l], e = t.inputs;
              s.push(null !== r ? zr(e, r) : null), o = Lr(e, l, o), a = Lr(t.outputs, l, a)
            }
            null !== o && (o.hasOwnProperty("class") && (e.flags |= 16), o.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = s, e.inputs = o, e.outputs = a
          }(t, n), Rr(t, e, i)
        }
        o && function (t, e, n) {
          if (e) {
            const i = t.localNames = [];
            for (let t = 0; t < e.length; t += 2) {
              const r = n[e[t + 1]];
              if (null == r) throw new Error(`Export of name '${e[t + 1]}' not found!`);
              i.push(e[t], r)
            }
          }
        }(n, i, o)
      }
      return n.mergedAttrs = An(n.mergedAttrs, n.attrs), r
    }

    function Pr(t, e) {
      const n = t.expandoInstructions;
      n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars)
    }

    function Rr(t, e, n) {
      for (let i = 0; i < n; i++) e.push(ar), t.blueprint.push(ar), t.data.push(null)
    }

    function Fr(t, e) {
      null !== t.hostBindings && t.hostBindings(1, e)
    }

    function Ir(t, e, n) {
      const i = 19 - e.index, r = t.data.length - (65535 & e.providerIndexes);
      (t.expandoInstructions || (t.expandoInstructions = [])).push(i, r, n)
    }

    function Nr(t, e) {
      e.flags |= 2, (t.components || (t.components = [])).push(e.index)
    }

    function jr(t, e, n) {
      if (n) {
        if (e.exportAs) for (let i = 0; i < e.exportAs.length; i++) n[e.exportAs[i]] = t;
        ke(e) && (n[""] = t)
      }
    }

    function Hr(t, e, n) {
      t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e
    }

    function Ur(t, e, n) {
      t.data.push(n);
      const i = n.factory || (n.factory = _e(n.type)), r = new Tn(i, ke(n), null);
      t.blueprint.push(r), e.push(r)
    }

    function $r(t, e, n) {
      const i = Re(e, t), r = Er(n), s = t[10],
        o = Qr(t, _r(t, r, null, n.onPush ? 64 : 16, i, e, s, s.createRenderer(i, n)));
      t[e.index] = o
    }

    function Vr(t, e, n, i, r, s) {
      const o = s[e];
      if (null !== o) {
        const t = i.setInput;
        for (let e = 0; e < o.length;) {
          const r = o[e++], s = o[e++], a = o[e++];
          null !== t ? i.setInput(n, a, r, s) : n[s] = a
        }
      }
    }

    function zr(t, e) {
      let n = null, i = 0;
      for (; i < e.length;) {
        const r = e[i];
        if (0 !== r) if (5 !== r) {
          if ("number" == typeof r) break;
          t.hasOwnProperty(r) && (null === n && (n = []), n.push(r, t[r], e[i + 1])), i += 2
        } else i += 2; else i += 4
      }
      return n
    }

    function Br(t, e, n, i) {
      return new Array(t, !0, -2, e, null, null, i, n, null)
    }

    function qr(t, e) {
      const n = t[5];
      for (let i = 0; i < n.length; i++) {
        const t = n[i], r = t[3][3][16];
        if (r !== e && 0 == (16 & r[2])) {
          const e = t[1];
          xr(e, t, e.template, t[8])
        }
      }
    }

    function Wr(t, e) {
      const n = Ie(e, t);
      if (He(n) && 80 & n[2]) {
        const t = n[1];
        xr(t, n, t.template, n[8])
      }
    }

    function Gr(t, e) {
      const n = Ie(e, t), i = n[1];
      !function (t, e) {
        for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n])
      }(i, n), br(i, n, n[8])
    }

    function Qr(t, e) {
      return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e
    }

    function Yr(t) {
      for (; t;) {
        t[2] |= 64;
        const e = lr(t);
        if (Ee(t) && !e) return t;
        t = e
      }
      return null
    }

    function Zr(t, e, n) {
      const i = e[10];
      i.begin && i.begin();
      try {
        xr(t, e, t.template, n)
      } catch (r) {
        throw ns(e, r), r
      } finally {
        i.end && i.end()
      }
    }

    function Xr(t) {
      !function (t) {
        for (let e = 0; e < t.components.length; e++) {
          const n = t.components[e], i = Ne(n), r = i[1];
          Sr(r, i, r.template, n)
        }
      }(t[8])
    }

    function Kr(t, e, n) {
      sn(0), e(t, n)
    }

    const Jr = (() => Promise.resolve(null))();

    function ts(t) {
      return t[7] || (t[7] = [])
    }

    function es(t) {
      return t.cleanup || (t.cleanup = [])
    }

    function ns(t, e) {
      const n = t[9], i = n ? n.get(si, null) : null;
      i && i.handleError(e)
    }

    function is(t, e, n, i, r) {
      for (let s = 0; s < n.length;) {
        const o = n[s++], a = n[s++], l = e[o], c = t.data[o];
        null !== c.setInput ? c.setInput(l, r, i, a) : l[a] = r
      }
    }

    function rs(t, e) {
      const n = e[3];
      return -1 === t.index ? xe(n) ? n : null : n
    }

    function ss(t, e) {
      const n = rs(t, e);
      return n ? ys(e[11], n[7]) : null
    }

    function os(t, e, n, i, r) {
      if (null != i) {
        let s, o = !1;
        xe(i) ? s = i : be(i) && (o = !0, i = i[0]);
        const a = Me(i);
        0 === t && null !== n ? null == r ? gs(e, n, a) : ps(e, n, a, r || null) : 1 === t && null !== n ? ps(e, n, a, r || null) : 2 === t ? function (t, e, n) {
          const i = ys(t, e);
          i && function (t, e, n, i) {
            Le(t) ? t.removeChild(e, n, i) : e.removeChild(n)
          }(t, i, e, n)
        }(e, a, o) : 3 === t && e.destroyNode(a), null != s && function (t, e, n, i, r) {
          const s = n[7];
          s !== Me(n) && os(e, t, i, s, r);
          for (let o = 9; o < n.length; o++) {
            const r = n[o];
            xs(r[1], r, t, e, i, s)
          }
        }(e, t, s, n, r)
      }
    }

    function as(t, e, n, i) {
      const r = ss(t.node, e);
      r && xs(t, e, e[11], n ? 1 : 2, r, i)
    }

    function ls(t, e) {
      const n = t[5], i = n.indexOf(e);
      n.splice(i, 1)
    }

    function cs(t, e) {
      if (t.length <= 9) return;
      const n = 9 + e, i = t[n];
      if (i) {
        const r = i[17];
        null !== r && r !== t && ls(r, i), e > 0 && (t[n - 1][4] = i[4]);
        const s = ee(t, 9 + e);
        as(i[1], i, !1, null);
        const o = s[5];
        null !== o && o.detachView(s[1]), i[3] = null, i[4] = null, i[2] &= -129
      }
      return i
    }

    function us(t, e) {
      if (!(256 & e[2])) {
        const n = e[11];
        Le(n) && n.destroyNode && xs(t, e, n, 3, null, null), function (t) {
          let e = t[13];
          if (!e) return ds(t[1], t);
          for (; e;) {
            let n = null;
            if (be(e)) n = e[13]; else {
              const t = e[9];
              t && (n = t)
            }
            if (!n) {
              for (; e && !e[4] && e !== t;) be(e) && ds(e[1], e), e = hs(e, t);
              null === e && (e = t), be(e) && ds(e[1], e), n = e && e[4]
            }
            e = n
          }
        }(e)
      }
    }

    function hs(t, e) {
      let n;
      return be(t) && (n = t[6]) && 2 === n.type ? rs(n, t) : t[3] === e ? null : t[3]
    }

    function ds(t, e) {
      if (!(256 & e[2])) {
        e[2] &= -129, e[2] |= 256, function (t, e) {
          let n;
          if (null != t && null != (n = t.destroyHooks)) for (let i = 0; i < n.length; i += 2) {
            const t = e[n[i]];
            if (!(t instanceof Tn)) {
              const e = n[i + 1];
              if (Array.isArray(e)) for (let n = 0; n < e.length; n += 2) e[n + 1].call(t[e[n]]); else e.call(t)
            }
          }
        }(t, e), function (t, e) {
          const n = t.cleanup;
          if (null !== n) {
            const t = e[7];
            for (let i = 0; i < n.length - 1; i += 2) if ("string" == typeof n[i]) {
              const r = n[i + 1], s = "function" == typeof r ? r(e) : Me(e[r]), o = t[n[i + 2]], a = n[i + 3];
              "boolean" == typeof a ? s.removeEventListener(n[i], o, a) : a >= 0 ? t[a]() : t[-a].unsubscribe(), i += 2
            } else n[i].call(t[n[i + 1]]);
            e[7] = null
          }
        }(t, e);
        const n = e[6];
        n && 3 === n.type && Le(e[11]) && e[11].destroy();
        const i = e[17];
        if (null !== i && xe(e[3])) {
          i !== e[3] && ls(i, e);
          const n = e[5];
          null !== n && n.detachView(t)
        }
      }
    }

    function fs(t, e, n) {
      let i = e.parent;
      for (; null != i && (4 === i.type || 5 === i.type);) i = (e = i).parent;
      if (null == i) {
        const t = n[6];
        return 2 === t.type ? ss(t, n) : n[0]
      }
      if (e && 5 === e.type && 4 & e.flags) return Re(e, n).parentNode;
      if (2 & i.flags) {
        const e = t.data, n = e[e[i.index].directiveStart].encapsulation;
        if (n !== ae.ShadowDom && n !== ae.Native) return null
      }
      return Re(i, n)
    }

    function ps(t, e, n, i) {
      Le(t) ? t.insertBefore(e, n, i) : e.insertBefore(n, i, !0)
    }

    function gs(t, e, n) {
      Le(t) ? t.appendChild(e, n) : e.appendChild(n)
    }

    function ms(t, e, n, i) {
      null !== i ? ps(t, e, n, i) : gs(t, e, n)
    }

    function ys(t, e) {
      return Le(t) ? t.parentNode(e) : e.parentNode
    }

    function vs(t, e) {
      if (2 === t.type) {
        const n = rs(t, e);
        return null === n ? null : ws(n.indexOf(e, 9) - 9, n)
      }
      return 4 === t.type || 5 === t.type ? Re(t, e) : null
    }

    function _s(t, e, n, i) {
      const r = fs(t, i, e);
      if (null != r) {
        const t = e[11], s = vs(i.parent || e[6], e);
        if (Array.isArray(n)) for (let e = 0; e < n.length; e++) ms(t, r, n[e], s); else ms(t, r, n, s)
      }
    }

    function ws(t, e) {
      const n = 9 + t + 1;
      if (n < e.length) {
        const t = e[n], i = t[1].firstChild;
        if (null !== i) return function t(e, n) {
          if (null !== n) {
            const i = n.type;
            if (3 === i) return Re(n, e);
            if (0 === i) return ws(-1, e[n.index]);
            if (4 === i || 5 === i) {
              const i = n.child;
              if (null !== i) return t(e, i);
              {
                const t = e[n.index];
                return xe(t) ? ws(-1, t) : Me(t)
              }
            }
            {
              const i = e[16], r = i[6], s = lr(i), o = r.projection[n.projection];
              return null != o ? t(s, o) : t(e, n.next)
            }
          }
          return null
        }(t, i)
      }
      return e[7]
    }

    function bs(t, e, n, i, r, s, o) {
      for (; null != n;) {
        const a = i[n.index], l = n.type;
        o && 0 === e && (a && Yi(Me(a), i), n.flags |= 4), 64 != (64 & n.flags) && (4 === l || 5 === l ? (bs(t, e, n.child, i, r, s, !1), os(e, t, r, a, s)) : 1 === l ? Ss(t, e, i, n, r, s) : os(e, t, r, a, s)), n = o ? n.projectionNext : n.next
      }
    }

    function xs(t, e, n, i, r, s) {
      bs(n, i, t.node.child, e, r, s, !1)
    }

    function Ss(t, e, n, i, r, s) {
      const o = n[16], a = o[6].projection[i.projection];
      if (Array.isArray(a)) for (let l = 0; l < a.length; l++) os(e, t, r, a[l], s); else bs(t, e, a, o[3], r, s, !0)
    }

    function Ts(t, e, n) {
      Le(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n
    }

    function Cs(t, e, n) {
      Le(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n
    }

    class ks {
      constructor(t, e) {
        this._lView = t, this._cdRefInjectingView = e, this._appRef = null, this._viewContainerRef = null, this._tViewNode = null
      }

      get rootNodes() {
        const t = this._lView;
        return null == t[0] ? function t(e, n, i, r, s = !1) {
          for (; null !== i;) {
            const o = n[i.index];
            if (null !== o && r.push(Me(o)), xe(o)) for (let e = 9; e < o.length; e++) {
              const n = o[e], i = n[1].firstChild;
              null !== i && t(n[1], n, i, r)
            }
            const a = i.type;
            if (4 === a || 5 === a) t(e, n, i.child, r); else if (1 === a) {
              const e = n[16], s = e[6], o = lr(e);
              let a = s.projection[i.projection];
              null !== a && null !== o && t(o[1], o, a, r, !0)
            }
            i = s ? i.projectionNext : i.next
          }
          return r
        }(t[1], t, t[6].child, []) : []
      }

      get context() {
        return this._lView[8]
      }

      get destroyed() {
        return 256 == (256 & this._lView[2])
      }

      destroy() {
        if (this._appRef) this._appRef.detachView(this); else if (this._viewContainerRef) {
          const t = this._viewContainerRef.indexOf(this);
          t > -1 && this._viewContainerRef.detach(t), this._viewContainerRef = null
        }
        us(this._lView[1], this._lView)
      }

      onDestroy(t) {
        var e, n, i;
        e = this._lView[1], i = t, ts(n = this._lView).push(i), e.firstCreatePass && es(e).push(n[7].length - 1, null)
      }

      markForCheck() {
        Yr(this._cdRefInjectingView || this._lView)
      }

      detach() {
        this._lView[2] &= -129
      }

      reattach() {
        this._lView[2] |= 128
      }

      detectChanges() {
        Zr(this._lView[1], this._lView, this.context)
      }

      checkNoChanges() {
        !function (t, e, n) {
          Ke(!0);
          try {
            Zr(t, e, n)
          } finally {
            Ke(!1)
          }
        }(this._lView[1], this._lView, this.context)
      }

      attachToViewContainerRef(t) {
        if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
        this._viewContainerRef = t
      }

      detachFromAppRef() {
        var t;
        this._appRef = null, xs(this._lView[1], t = this._lView, t[11], 2, null, null)
      }

      attachToAppRef(t) {
        if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
        this._appRef = t
      }
    }

    class Es extends ks {
      constructor(t) {
        super(t), this._view = t
      }

      detectChanges() {
        Xr(this._view)
      }

      checkNoChanges() {
        !function (t) {
          Ke(!0);
          try {
            Xr(t)
          } finally {
            Ke(!1)
          }
        }(this._view)
      }

      get context() {
        return null
      }
    }

    let As, Os, Ls;

    function Ds(t, e, n) {
      return As || (As = class extends t {
      }), new As(Re(e, n))
    }

    function Ms(t, e, n, i) {
      return Os || (Os = class extends t {
        constructor(t, e, n) {
          super(), this._declarationView = t, this._declarationTContainer = e, this.elementRef = n
        }

        createEmbeddedView(t) {
          const e = this._declarationTContainer.tViews, n = _r(this._declarationView, e, t, 16, null, e.node);
          n[17] = this._declarationView[this._declarationTContainer.index];
          const i = this._declarationView[5];
          null !== i && (n[5] = i.createEmbeddedView(e)), br(e, n, t);
          const r = new ks(n);
          return r._tViewNode = n[6], r
        }
      }), 0 === n.type ? new Os(i, n, Ds(e, n, i)) : null
    }

    function Ps(t, e, n, i) {
      let r;
      Ls || (Ls = class extends t {
        constructor(t, e, n) {
          super(), this._lContainer = t, this._hostTNode = e, this._hostView = n
        }

        get element() {
          return Ds(e, this._hostTNode, this._hostView)
        }

        get injector() {
          return new ti(this._hostTNode, this._hostView)
        }

        get parentInjector() {
          const t = qn(this._hostTNode, this._hostView), e = Pn(t, this._hostView), n = function (t, e, n) {
            if (n.parent && -1 !== n.parent.injectorIndex) {
              const t = n.parent.injectorIndex;
              let e = n.parent;
              for (; null != e.parent && t == e.parent.injectorIndex;) e = e.parent;
              return e
            }
            let i = Mn(t), r = e, s = e[6];
            for (; i > 1;) r = r[15], s = r[6], i--;
            return s
          }(t, this._hostView, this._hostTNode);
          return Ln(t) && null != n ? new ti(n, e) : new ti(null, this._hostView)
        }

        clear() {
          for (; this.length > 0;) this.remove(this.length - 1)
        }

        get(t) {
          return null !== this._lContainer[8] && this._lContainer[8][t] || null
        }

        get length() {
          return this._lContainer.length - 9
        }

        createEmbeddedView(t, e, n) {
          const i = t.createEmbeddedView(e || {});
          return this.insert(i, n), i
        }

        createComponent(t, e, n, i, r) {
          const s = n || this.parentInjector;
          if (!r && null == t.ngModule && s) {
            const t = s.get(Xt, null);
            t && (r = t)
          }
          const o = t.create(s, i, void 0, r);
          return this.insert(o.hostView, e), o
        }

        insert(t, e) {
          const n = t._lView, i = n[1];
          if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
          if (this.allocateContainerIfNeeded(), xe(n[3])) {
            const e = this.indexOf(t);
            if (-1 !== e) this.detach(e); else {
              const e = n[3], i = new Ls(e, e[6], e[3]);
              i.detach(i.indexOf(t))
            }
          }
          const r = this._adjustIndex(e);
          return function (t, e, n, i) {
            const r = 9 + i, s = n.length;
            i > 0 && (n[r - 1][4] = e), i < s - 9 ? (e[4] = n[r], te(n, 9 + i, e)) : (n.push(e), e[4] = null), e[3] = n;
            const o = e[17];
            null !== o && n !== o && function (t, e) {
              const n = t[5], i = e[3][3][16];
              16 != (16 & i[2]) && e[16] !== i && (t[2] |= 1), null === n ? t[5] = [e] : n.push(e)
            }(o, e);
            const a = e[5];
            null !== a && a.insertView(t), e[2] |= 128
          }(i, n, this._lContainer, r), as(i, n, !0, ws(r, this._lContainer)), t.attachToViewContainerRef(this), te(this._lContainer[8], r, t), t
        }

        move(t, e) {
          if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
          return this.insert(t, e)
        }

        indexOf(t) {
          const e = this._lContainer[8];
          return null !== e ? e.indexOf(t) : -1
        }

        remove(t) {
          this.allocateContainerIfNeeded();
          const e = this._adjustIndex(t, -1);
          (function (t, e) {
            const n = cs(t, e);
            n && us(n[1], n)
          })(this._lContainer, e), ee(this._lContainer[8], e)
        }

        detach(t) {
          this.allocateContainerIfNeeded();
          const e = this._adjustIndex(t, -1), n = cs(this._lContainer, e);
          return n && null != ee(this._lContainer[8], e) ? new ks(n) : null
        }

        _adjustIndex(t, e = 0) {
          return null == t ? this.length + e : t
        }

        allocateContainerIfNeeded() {
          null === this._lContainer[8] && (this._lContainer[8] = [])
        }
      });
      const s = i[n.index];
      if (xe(s)) r = s, function (t, e) {
        t[2] = -2
      }(r); else {
        let t;
        if (4 === n.type) t = Me(s); else if (t = i[11].createComment(""), Ee(i)) {
          const e = i[11], r = Re(n, i);
          ps(e, ys(e, r), t, function (t, e) {
            return Le(t) ? t.nextSibling(e) : e.nextSibling
          }(e, r))
        } else _s(i[1], i, t, n);
        i[n.index] = r = Br(s, i, t, n), Qr(i, r)
      }
      return new Ls(r, n, i)
    }

    let Rs = (() => {
      class t {
      }

      return t.__NG_ELEMENT_ID__ = () => Fs(), t
    })();
    const Fs = function (t = !1) {
      return function (t, e, n) {
        if (!n && Te(t)) {
          const n = Ie(t.index, e);
          return new ks(n, n)
        }
        return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type ? new ks(e[16], e) : null
      }(Ge(), Be(), t)
    }, Is = new Nt("Set Injector scope."), Ns = {}, js = {}, Hs = [];
    let Us = void 0;

    function $s() {
      return void 0 === Us && (Us = new Zt), Us
    }

    function Vs(t, e = null, n = null, i) {
      return new zs(t, n, e || $s(), i)
    }

    class zs {
      constructor(t, e, n, i = null) {
        this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
        const r = [];
        e && Jt(e, n => this.processProvider(n, t, e)), Jt([t], t => this.processInjectorType(t, [], r)), this.records.set(jt, Ws(void 0, this));
        const s = this.records.get(Is);
        this.scope = null != s ? s.value : null, this.source = i || ("object" == typeof t ? null : _t(t))
      }

      get destroyed() {
        return this._destroyed
      }

      destroy() {
        this.assertNotDestroyed(), this._destroyed = !0;
        try {
          this.onDestroy.forEach(t => t.ngOnDestroy())
        } finally {
          this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
        }
      }

      get(t, e = Ht, n = ot.Default) {
        this.assertNotDestroyed();
        const i = Bt(this);
        try {
          if (!(n & ot.SkipSelf)) {
            let e = this.records.get(t);
            if (void 0 === e) {
              const n = ("function" == typeof (r = t) || "object" == typeof r && r instanceof Nt) && ht(t);
              e = n && this.injectableDefInScope(n) ? Ws(Bs(t), Ns) : null, this.records.set(t, e)
            }
            if (null != e) return this.hydrate(t, e)
          }
          return (n & ot.Self ? $s() : this.parent).get(t, e = n & ot.Optional && e === Ht ? null : e)
        } catch (s) {
          if ("NullInjectorError" === s.name) {
            if ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(_t(t)), i) throw s;
            return function (t, e, n, i) {
              const r = t.ngTempTokenPath;
              throw e.__source && r.unshift(e.__source), t.message = function (t, e, n, i = null) {
                t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                let r = _t(e);
                if (Array.isArray(e)) r = e.map(_t).join(" -> "); else if ("object" == typeof e) {
                  let t = [];
                  for (let n in e) if (e.hasOwnProperty(n)) {
                    let i = e[n];
                    t.push(n + ":" + ("string" == typeof i ? JSON.stringify(i) : _t(i)))
                  }
                  r = `{${t.join(", ")}}`
                }
                return `${n}${i ? "(" + i + ")" : ""}[${r}]: ${t.replace(Ut, "\n  ")}`
              }("\n" + t.message, r, n, i), t.ngTokenPath = r, t.ngTempTokenPath = null, t
            }(s, t, "R3InjectorError", this.source)
          }
          throw s
        } finally {
          Bt(i)
        }
        var r
      }

      _resolveInjectorDefTypes() {
        this.injectorDefTypes.forEach(t => this.get(t))
      }

      toString() {
        const t = [];
        return this.records.forEach((e, n) => t.push(_t(n))), `R3Injector[${t.join(", ")}]`
      }

      assertNotDestroyed() {
        if (this._destroyed) throw new Error("Injector has already been destroyed.")
      }

      processInjectorType(t, e, n) {
        if (!(t = St(t))) return !1;
        let i = ft(t);
        const r = null == i && t.ngModule || void 0, s = void 0 === r ? t : r, o = -1 !== n.indexOf(s);
        if (void 0 !== r && (i = ft(r)), null == i) return !1;
        if (null != i.imports && !o) {
          let t;
          n.push(s);
          try {
            Jt(i.imports, i => {
              this.processInjectorType(i, e, n) && (void 0 === t && (t = []), t.push(i))
            })
          } finally {
          }
          if (void 0 !== t) for (let e = 0; e < t.length; e++) {
            const {ngModule: n, providers: i} = t[e];
            Jt(i, t => this.processProvider(t, n, i || Hs))
          }
        }
        this.injectorDefTypes.add(s), this.records.set(s, Ws(i.factory, Ns));
        const a = i.providers;
        if (null != a && !o) {
          const e = t;
          Jt(a, t => this.processProvider(t, e, a))
        }
        return void 0 !== r && void 0 !== t.providers
      }

      processProvider(t, e, n) {
        let i = Qs(t = St(t)) ? t : St(t && t.provide);
        const r = function (t, e, n) {
          return Gs(t) ? Ws(void 0, t.useValue) : Ws(qs(t, e, n), Ns)
        }(t, e, n);
        if (Qs(t) || !0 !== t.multi) {
          const t = this.records.get(i);
          t && void 0 !== t.multi && Xi()
        } else {
          let e = this.records.get(i);
          e ? void 0 === e.multi && Xi() : (e = Ws(void 0, Ns, !0), e.factory = () => Yt(e.multi), this.records.set(i, e)), i = t, e.multi.push(t)
        }
        this.records.set(i, r)
      }

      hydrate(t, e) {
        var n;
        return e.value === js ? function (t) {
          throw new Error("Cannot instantiate cyclic dependency! " + t)
        }(_t(t)) : e.value === Ns && (e.value = js, e.value = e.factory()), "object" == typeof e.value && e.value && null !== (n = e.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value
      }

      injectableDefInScope(t) {
        return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || t.providedIn === this.scope : this.injectorDefTypes.has(t.providedIn))
      }
    }

    function Bs(t) {
      const e = ht(t), n = null !== e ? e.factory : _e(t);
      if (null !== n) return n;
      const i = ft(t);
      if (null !== i) return i.factory;
      if (t instanceof Nt) throw new Error(`Token ${_t(t)} is missing a \u0275prov definition.`);
      if (t instanceof Function) return function (t) {
        const e = t.length;
        if (e > 0) {
          const n = ne(e, "?");
          throw new Error(`Can't resolve all parameters for ${_t(t)}: (${n.join(", ")}).`)
        }
        const n = function (t) {
          const e = t && (t[pt] || t[yt] || t[mt] && t[mt]());
          if (e) {
            const n = function (t) {
              if (t.hasOwnProperty("name")) return t.name;
              const e = ("" + t).match(/^function\s*([^\s(]+)/);
              return null === e ? "" : e[1]
            }(t);
            return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in v10. Please add @Injectable() to the "${n}" class.`), e
          }
          return null
        }(t);
        return null !== n ? () => n.factory(t) : () => new t
      }(t);
      throw new Error("unreachable")
    }

    function qs(t, e, n) {
      let i = void 0;
      if (Qs(t)) {
        const e = St(t);
        return _e(e) || Bs(e)
      }
      if (Gs(t)) i = () => St(t.useValue); else if ((r = t) && r.useFactory) i = () => t.useFactory(...Yt(t.deps || [])); else if (function (t) {
        return !(!t || !t.useExisting)
      }(t)) i = () => Gt(St(t.useExisting)); else {
        const r = St(t && (t.useClass || t.provide));
        if (r || function (t, e, n) {
          let i = "";
          throw t && e && (i = ` - only instances of Provider and Type are allowed, got: [${e.map(t => t == n ? "?" + n + "?" : "...").join(", ")}]`), new Error(`Invalid provider for the NgModule '${_t(t)}'` + i)
        }(e, n, t), !function (t) {
          return !!t.deps
        }(t)) return _e(r) || Bs(r);
        i = () => new r(...Yt(t.deps))
      }
      var r;
      return i
    }

    function Ws(t, e, n = !1) {
      return {factory: t, value: e, multi: n ? [] : void 0}
    }

    function Gs(t) {
      return null !== t && "object" == typeof t && $t in t
    }

    function Qs(t) {
      return "function" == typeof t
    }

    const Ys = function (t, e, n) {
      return function (t, e = null, n = null, i) {
        const r = Vs(t, e, n, i);
        return r._resolveInjectorDefTypes(), r
      }({name: n}, e, t, n)
    };
    let Zs = (() => {
      class t {
        static create(t, e) {
          return Array.isArray(t) ? Ys(t, e, "") : Ys(t.providers, t.parent, t.name || "")
        }
      }

      return t.THROW_IF_NOT_FOUND = Ht, t.NULL = new Zt, t.\u0275prov = ct({
        token: t,
        providedIn: "any",
        factory: () => Gt(jt)
      }), t.__NG_ELEMENT_ID__ = -1, t
    })();
    const Xs = new Nt("AnalyzeForEntryComponents");
    let Ks = new Map;
    const Js = new Set;

    function to(t) {
      return "string" == typeof t ? t : t.text()
    }

    function eo(t, e) {
      let n = t.styles, i = t.classes, r = 0;
      for (let s = 0; s < e.length; s++) {
        const t = e[s];
        "number" == typeof t ? r = t : 1 == r ? i = wt(i, t) : 2 == r && (n = wt(n, t + ": " + e[++s] + ";"))
      }
      null !== n && (t.styles = n), null !== i && (t.classes = i)
    }

    let no = null;

    function io() {
      if (!no) {
        const t = Ot.Symbol;
        if (t && t.iterator) no = t.iterator; else {
          const t = Object.getOwnPropertyNames(Map.prototype);
          for (let e = 0; e < t.length; ++e) {
            const n = t[e];
            "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (no = n)
          }
        }
      }
      return no
    }

    function ro(t, e) {
      return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
    }

    function so(t) {
      return !!oo(t) && (Array.isArray(t) || !(t instanceof Map) && io() in t)
    }

    function oo(t) {
      return null !== t && ("function" == typeof t || "object" == typeof t)
    }

    function ao(t, e, n) {
      return t[e] = n
    }

    function lo(t, e, n) {
      return !Object.is(t[e], n) && (t[e] = n, !0)
    }

    function co(t, e, n, i) {
      const r = Be();
      return lo(r, tn(), e) && (qe(), function (t, e, n, i, r, s) {
        const o = Re(t, e), a = e[11];
        if (null == i) Le(a) ? a.removeAttribute(o, n, s) : o.removeAttribute(n); else {
          const e = null == r ? Rn(i) : r(i, t.tagName || "", n);
          Le(a) ? a.setAttribute(o, n, e, s) : s ? o.setAttributeNS(s, n, e) : o.setAttribute(n, e)
        }
      }(gn(), r, t, e, n, i)), co
    }

    function uo(t, e, n, i) {
      return lo(t, tn(), n) ? e + Rn(n) + i : ar
    }

    function ho(t, e, n, i, r, s, o, a) {
      const l = Be(), c = qe(), u = t + 19, h = c.firstCreatePass ? function (t, e, n, i, r, s, o, a, l) {
        const c = e.consts, u = wr(e, n[6], t, 0, o || null, Ue(c, a));
        Mr(e, n, u, Ue(c, l)), vn(e, u);
        const h = u.tViews = Ar(2, -1, i, r, s, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c),
          d = Or(0, null, 2, -1, null, null);
        return d.injectorIndex = u.injectorIndex, h.node = d, null !== e.queries && (e.queries.template(e, u), h.queries = e.queries.embeddedTView(u)), u
      }(t, c, l, e, n, i, r, s, o) : c.data[u];
      Qe(h, !1);
      const d = l[11].createComment("");
      _s(c, l, d, h), Yi(d, l), Qr(l, l[u] = Br(d, l, d, h)), Ce(h) && Cr(c, l, h), null != o && kr(l, h, a)
    }

    function fo(t, e = ot.Default) {
      const n = Be();
      return null == n ? Gt(t, e) : Gn(Ge(), n, St(t), e)
    }

    function po(t) {
      return function (t, e) {
        if ("class" === e) return t.classes;
        if ("style" === e) return t.styles;
        const n = t.attrs;
        if (n) {
          const t = n.length;
          let i = 0;
          for (; i < t;) {
            const r = n[i];
            if (kn(r)) break;
            if (0 === r) i += 2; else if ("number" == typeof r) for (i++; i < t && "string" == typeof n[i];) i++; else {
              if (r === e) return n[i + 1];
              i += 2
            }
          }
        }
        return null
      }(Ge(), t)
    }

    function go() {
      throw new Error("invalid")
    }

    function mo(t, e, n) {
      const i = Be();
      return lo(i, tn(), e) && Dr(qe(), gn(), i, t, e, i[11], n, !1), mo
    }

    function yo(t, e, n, i, r) {
      const s = r ? "class" : "style";
      is(t, n, e.inputs[s], s, i)
    }

    function vo(t, e, n, i) {
      const r = Be(), s = qe(), o = 19 + t, a = r[11], l = r[o] = vr(e, a, Ve.lFrame.currentNamespace),
        c = s.firstCreatePass ? function (t, e, n, i, r, s, o) {
          const a = e.consts, l = Ue(a, s), c = wr(e, n[6], t, 3, r, l);
          return Mr(e, n, c, Ue(a, o)), null !== c.mergedAttrs && eo(c, c.mergedAttrs), null !== e.queries && e.queries.elementStart(e, c), c
        }(t, s, r, 0, e, n, i) : s.data[o];
      Qe(c, !0);
      const u = c.mergedAttrs;
      null !== u && Cn(a, l, u);
      const h = c.classes;
      null !== h && Cs(a, l, h);
      const d = c.styles;
      null !== d && Ts(a, l, d), _s(s, r, l, c), 0 === Ve.lFrame.elementDepthCount && Yi(l, r), Ve.lFrame.elementDepthCount++, Ce(c) && (Cr(s, r, c), function (t, e, n) {
        if (Se(e)) {
          const i = e.directiveEnd;
          for (let r = e.directiveStart; r < i; r++) {
            const e = t.data[r];
            e.contentQueries && e.contentQueries(1, n[r], r)
          }
        }
      }(s, c, r)), null !== i && kr(r, c)
    }

    function _o() {
      let t = Ge();
      Ye() ? Ze() : (t = t.parent, Qe(t, !1));
      const e = t;
      Ve.lFrame.elementDepthCount--;
      const n = qe();
      n.firstCreatePass && (vn(n, t), Se(t) && n.queries.elementEnd(t)), null !== e.classes && function (t) {
        return 0 != (16 & t.flags)
      }(e) && yo(n, e, Be(), e.classes, !0), null !== e.styles && function (t) {
        return 0 != (32 & t.flags)
      }(e) && yo(n, e, Be(), e.styles, !1)
    }

    function wo(t, e, n, i) {
      vo(t, e, n, i), _o()
    }

    function bo() {
      return Be()
    }

    function xo(t) {
      return !!t && "function" == typeof t.then
    }

    function So(t, e, n = !1, i) {
      const r = Be(), s = qe(), o = Ge();
      return function (t, e, n, i, r, s, o = !1, a) {
        const l = Ce(i), c = t.firstCreatePass && (t.cleanup || (t.cleanup = [])), u = ts(e);
        let h = !0;
        if (3 === i.type) {
          const d = Re(i, e), f = a ? a(d) : le, p = f.target || d, g = u.length,
            m = a ? t => a(Me(t[i.index])).target : i.index;
          if (Le(n)) {
            let o = null;
            if (!a && l && (o = function (t, e, n, i) {
              const r = t.cleanup;
              if (null != r) for (let s = 0; s < r.length - 1; s += 2) {
                const t = r[s];
                if (t === n && r[s + 1] === i) {
                  const t = e[7], n = r[s + 2];
                  return t.length > n ? t[n] : null
                }
                "string" == typeof t && (s += 2)
              }
              return null
            }(t, e, r, i.index)), null !== o) (o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = s, o.__ngLastListenerFn__ = s, h = !1; else {
              s = Co(i, e, s, !1);
              const t = n.listen(f.name || p, r, s);
              u.push(s, t), c && c.push(r, m, g, g + 1)
            }
          } else s = Co(i, e, s, !0), p.addEventListener(r, s, o), u.push(s), c && c.push(r, m, g, o)
        }
        const d = i.outputs;
        let f;
        if (h && null !== d && (f = d[r])) {
          const t = f.length;
          if (t) for (let n = 0; n < t; n += 2) {
            const t = e[f[n]][f[n + 1]].subscribe(s), o = u.length;
            u.push(s, t), c && c.push(r, i.index, o, -(o + 1))
          }
        }
      }(s, r, r[11], o, t, e, n, i), So
    }

    function To(t, e, n) {
      try {
        return !1 !== e(n)
      } catch (i) {
        return ns(t, i), !1
      }
    }

    function Co(t, e, n, i) {
      return function r(s) {
        if (s === Function) return n;
        const o = 2 & t.flags ? Ie(t.index, e) : e;
        0 == (32 & e[2]) && Yr(o);
        let a = To(e, n, s), l = r.__ngNextListenerFn__;
        for (; l;) a = To(e, l, s) && a, l = l.__ngNextListenerFn__;
        return i && !1 === a && (s.preventDefault(), s.returnValue = !1), a
      }
    }

    function ko(t = 1) {
      return function (t) {
        return (Ve.lFrame.contextLView = function (t, e) {
          for (; t > 0;) e = e[15], t--;
          return e
        }(t, Ve.lFrame.contextLView))[8]
      }(t)
    }

    const Eo = [];

    function Ao(t, e, n, i, r) {
      const s = t[n + 1], o = null === e;
      let a = i ? dr(s) : pr(s), l = !1;
      for (; 0 !== a && (!1 === l || o);) {
        const n = t[a + 1];
        Oo(t[a], e) && (l = !0, t[a + 1] = i ? mr(n) : fr(n)), a = i ? dr(n) : pr(n)
      }
      l && (t[n + 1] = i ? fr(s) : mr(s))
    }

    function Oo(t, e) {
      return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && se(t, e) >= 0
    }

    const Lo = {textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0};

    function Do(t) {
      return t.substring(Lo.key, Lo.keyEnd)
    }

    function Mo(t, e) {
      const n = Lo.textEnd;
      return n === e ? -1 : (e = Lo.keyEnd = function (t, e, n) {
        for (; e < n && t.charCodeAt(e) > 32;) e++;
        return e
      }(t, Lo.key = e, n), Po(t, e, n))
    }

    function Po(t, e, n) {
      for (; e < n && t.charCodeAt(e) <= 32;) e++;
      return e
    }

    function Ro(t, e, n) {
      return No(t, e, n, !1), Ro
    }

    function Fo(t, e) {
      return No(t, e, null, !0), Fo
    }

    function Io(t, e) {
      for (let n = function (t) {
        return function (t) {
          Lo.key = 0, Lo.keyEnd = 0, Lo.value = 0, Lo.valueEnd = 0, Lo.textEnd = t.length
        }(t), Mo(t, Po(t, 0, Lo.textEnd))
      }(e); n >= 0; n = Mo(e, n)) ie(t, Do(e), !0)
    }

    function No(t, e, n, i) {
      const r = Be(), s = qe(), o = en(2);
      if (s.firstUpdatePass && Uo(s, t, o, i), e !== ar && lo(r, o, e)) {
        let a;
        null == n && (a = function () {
          const t = Ve.lFrame;
          return null === t ? null : t.currentSanitizer
        }()) && (n = a), zo(s, s.data[fn() + 19], r, r[11], t, r[o + 1] = function (t, e) {
          return null == t || ("function" == typeof e ? t = e(t) : "string" == typeof e ? t += e : "object" == typeof t && (t = _t(di(t)))), t
        }(e, n), i, o)
      }
    }

    function jo(t, e, n, i) {
      const r = qe(), s = en(2);
      r.firstUpdatePass && Uo(r, null, s, i);
      const o = Be();
      if (n !== ar && lo(o, s, n)) {
        const a = r.data[fn() + 19];
        if (Wo(a, i) && !Ho(r, s)) {
          let t = i ? a.classes : a.styles;
          null !== t && (n = wt(t, n || "")), yo(r, a, o, n, i)
        } else !function (t, e, n, i, r, s, o, a) {
          r === ar && (r = Eo);
          let l = 0, c = 0, u = 0 < r.length ? r[0] : null, h = 0 < s.length ? s[0] : null;
          for (; null !== u || null !== h;) {
            const d = l < r.length ? r[l + 1] : void 0, f = c < s.length ? s[c + 1] : void 0;
            let p = null, g = void 0;
            u === h ? (l += 2, c += 2, d !== f && (p = h, g = f)) : null === h || null !== u && u < h ? (l += 2, p = u) : (c += 2, p = h, g = f), null !== p && zo(t, e, n, i, p, g, o, a), u = l < r.length ? r[l] : null, h = c < s.length ? s[c] : null
          }
        }(r, a, o, o[11], o[s + 1], o[s + 1] = function (t, e, n) {
          if (null == n || "" === n) return Eo;
          const i = [], r = di(n);
          if (Array.isArray(r)) for (let s = 0; s < r.length; s++) t(i, r[s], !0); else if ("object" == typeof r) for (const s in r) r.hasOwnProperty(s) && t(i, s, r[s]); else "string" == typeof r && e(i, r);
          return i
        }(t, e, n), i, s)
      }
    }

    function Ho(t, e) {
      return e >= t.expandoStartIndex
    }

    function Uo(t, e, n, i) {
      const r = t.data;
      if (null === r[n + 1]) {
        const s = r[fn() + 19], o = Ho(t, n);
        Wo(s, i) && null === e && !o && (e = !1), e = function (t, e, n, i) {
          const r = function (t) {
            const e = Ve.lFrame.currentDirectiveIndex;
            return -1 === e ? null : t[e]
          }(t);
          let s = i ? e.residualClasses : e.residualStyles;
          if (null === r) 0 === (i ? e.classBindings : e.styleBindings) && (n = Vo(n = $o(null, t, e, n, i), e.attrs, i), s = null); else {
            const o = e.directiveStylingLast;
            if (-1 === o || t[o] !== r) if (n = $o(r, t, e, n, i), null === s) {
              let n = function (t, e, n) {
                const i = n ? e.classBindings : e.styleBindings;
                if (0 !== pr(i)) return t[dr(i)]
              }(t, e, i);
              void 0 !== n && Array.isArray(n) && (n = $o(null, t, e, n[1], i), n = Vo(n, e.attrs, i), function (t, e, n, i) {
                t[dr(n ? e.classBindings : e.styleBindings)] = i
              }(t, e, i, n))
            } else s = function (t, e, n) {
              let i = void 0;
              const r = e.directiveEnd;
              for (let s = 1 + e.directiveStylingLast; s < r; s++) i = Vo(i, t[s].hostAttrs, n);
              return Vo(i, e.attrs, n)
            }(t, e, i)
          }
          return void 0 !== s && (i ? e.residualClasses = s : e.residualStyles = s), n
        }(r, s, e, i), function (t, e, n, i, r, s) {
          let o = s ? e.classBindings : e.styleBindings, a = dr(o), l = pr(o);
          t[i] = n;
          let c, u = !1;
          if (Array.isArray(n)) {
            const t = n;
            c = t[1], (null === c || se(t, c) > 0) && (u = !0)
          } else c = n;
          if (r) if (0 !== l) {
            const e = dr(t[a + 1]);
            t[i + 1] = hr(e, a), 0 !== e && (t[e + 1] = gr(t[e + 1], i)), t[a + 1] = 131071 & t[a + 1] | i << 17
          } else t[i + 1] = hr(a, 0), 0 !== a && (t[a + 1] = gr(t[a + 1], i)), a = i; else t[i + 1] = hr(l, 0), 0 === a ? a = i : t[l + 1] = gr(t[l + 1], i), l = i;
          u && (t[i + 1] = fr(t[i + 1])), Ao(t, c, i, !0), Ao(t, c, i, !1), function (t, e, n, i, r) {
            const s = r ? t.residualClasses : t.residualStyles;
            null != s && "string" == typeof e && se(s, e) >= 0 && (n[i + 1] = mr(n[i + 1]))
          }(e, c, t, i, s), o = hr(a, l), s ? e.classBindings = o : e.styleBindings = o
        }(r, s, e, n, o, i)
      }
    }

    function $o(t, e, n, i, r) {
      let s = null;
      const o = n.directiveEnd;
      let a = n.directiveStylingLast;
      for (-1 === a ? a = n.directiveStart : a++; a < o && (s = e[a], i = Vo(i, s.hostAttrs, r), s !== t);) a++;
      return null !== t && (n.directiveStylingLast = a), i
    }

    function Vo(t, e, n) {
      const i = n ? 1 : 2;
      let r = -1;
      if (null !== e) for (let s = 0; s < e.length; s++) {
        const o = e[s];
        "number" == typeof o ? r = o : r === i && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]), ie(t, o, !!n || e[++s]))
      }
      return void 0 === t ? null : t
    }

    function zo(t, e, n, i, r, s, o, a) {
      if (3 !== e.type) return;
      const l = t.data, c = l[a + 1];
      qo(1 == (1 & c) ? Bo(l, e, n, r, pr(c), o) : void 0) || (qo(s) || function (t) {
        return 2 == (2 & t)
      }(c) && (s = Bo(l, null, n, r, a, o)), function (t, e, n, i, r) {
        const s = Le(t);
        if (e) r ? s ? t.addClass(n, i) : n.classList.add(i) : s ? t.removeClass(n, i) : n.classList.remove(i); else {
          const e = -1 == i.indexOf("-") ? void 0 : 2;
          null == r ? s ? t.removeStyle(n, i, e) : n.style.removeProperty(i) : s ? t.setStyle(n, i, r, e) : n.style.setProperty(i, r)
        }
      }(i, o, Pe(fn(), n), r, s))
    }

    function Bo(t, e, n, i, r, s) {
      const o = null === e;
      let a = void 0;
      for (; r > 0;) {
        const e = t[r], s = Array.isArray(e), l = s ? e[1] : e, c = null === l;
        let u = n[r + 1];
        u === ar && (u = c ? Eo : void 0);
        let h = c ? re(u, i) : l === i ? u : void 0;
        if (s && !qo(h) && (h = re(e, i)), qo(h) && (a = h, o)) return a;
        const d = t[r + 1];
        r = o ? dr(d) : pr(d)
      }
      if (null !== e) {
        let t = s ? e.residualClasses : e.residualStyles;
        null != t && (a = re(t, i))
      }
      return a
    }

    function qo(t) {
      return void 0 !== t
    }

    function Wo(t, e) {
      return 0 != (t.flags & (e ? 16 : 32))
    }

    function Go(t, e = "") {
      const n = Be(), i = qe(), r = t + 19, s = i.firstCreatePass ? wr(i, n[6], t, 3, null, null) : i.data[r],
        o = n[r] = function (t, e) {
          return Le(e) ? e.createText(t) : e.createTextNode(t)
        }(e, n[11]);
      _s(i, n, o, s), Qe(s, !1)
    }

    function Qo(t) {
      return Yo("", t, ""), Qo
    }

    function Yo(t, e, n) {
      const i = Be(), r = uo(i, t, e, n);
      return r !== ar && function (t, e, n) {
        const i = Pe(e, t), r = t[11];
        Le(r) ? r.setValue(i, n) : i.textContent = n
      }(i, fn(), r), Yo
    }

    function Zo(t, e, n) {
      const i = Be();
      return lo(i, tn(), e) && Dr(qe(), gn(), i, t, e, i[11], n, !0), Zo
    }

    function Xo(t, e) {
      const n = Ne(t)[1], i = n.data.length - 1;
      vn(n, {directiveStart: i, directiveEnd: i + 1})
    }

    function Ko(t) {
      let e = Object.getPrototypeOf(t.type.prototype).constructor, n = !0;
      const i = [t];
      for (; e;) {
        let r = void 0;
        if (ke(t)) r = e.\u0275cmp || e.\u0275dir; else {
          if (e.\u0275cmp) throw new Error("Directives cannot inherit Components");
          r = e.\u0275dir
        }
        if (r) {
          if (n) {
            i.push(r);
            const e = t;
            e.inputs = Jo(t.inputs), e.declaredInputs = Jo(t.declaredInputs), e.outputs = Jo(t.outputs);
            const n = r.hostBindings;
            n && na(t, n);
            const s = r.viewQuery, o = r.contentQueries;
            if (s && ta(t, s), o && ea(t, o), lt(t.inputs, r.inputs), lt(t.declaredInputs, r.declaredInputs), lt(t.outputs, r.outputs), ke(r) && r.data.animation) {
              const e = t.data;
              e.animation = (e.animation || []).concat(r.data.animation)
            }
            e.afterContentChecked = e.afterContentChecked || r.afterContentChecked, e.afterContentInit = t.afterContentInit || r.afterContentInit, e.afterViewChecked = t.afterViewChecked || r.afterViewChecked, e.afterViewInit = t.afterViewInit || r.afterViewInit, e.doCheck = t.doCheck || r.doCheck, e.onDestroy = t.onDestroy || r.onDestroy, e.onInit = t.onInit || r.onInit
          }
          const e = r.features;
          if (e) for (let i = 0; i < e.length; i++) {
            const r = e[i];
            r && r.ngInherit && r(t), r === Ko && (n = !1)
          }
        }
        e = Object.getPrototypeOf(e)
      }
      !function (t) {
        let e = 0, n = null;
        for (let i = t.length - 1; i >= 0; i--) {
          const r = t[i];
          r.hostVars = e += r.hostVars, r.hostAttrs = An(r.hostAttrs, n = An(n, r.hostAttrs))
        }
      }(i)
    }

    function Jo(t) {
      return t === le ? {} : t === ce ? [] : t
    }

    function ta(t, e) {
      const n = t.viewQuery;
      t.viewQuery = n ? (t, i) => {
        e(t, i), n(t, i)
      } : e
    }

    function ea(t, e) {
      const n = t.contentQueries;
      t.contentQueries = n ? (t, i, r) => {
        e(t, i, r), n(t, i, r)
      } : e
    }

    function na(t, e) {
      const n = t.hostBindings;
      t.hostBindings = n ? (t, i) => {
        e(t, i), n(t, i)
      } : e
    }

    class ia {
      constructor(t, e, n) {
        this.previousValue = t, this.currentValue = e, this.firstChange = n
      }

      isFirstChange() {
        return this.firstChange
      }
    }

    function ra(t) {
      t.type.prototype.ngOnChanges && (t.setInput = sa, t.onChanges = function () {
        const t = oa(this), e = t && t.current;
        if (e) {
          const n = t.previous;
          if (n === le) t.previous = e; else for (let t in e) n[t] = e[t];
          t.current = null, this.ngOnChanges(e)
        }
      })
    }

    function sa(t, e, n, i) {
      const r = oa(t) || function (t, e) {
          return t.__ngSimpleChanges__ = e
        }(t, {previous: le, current: null}), s = r.current || (r.current = {}), o = r.previous,
        a = this.declaredInputs[n], l = o[a];
      s[a] = new ia(l && l.currentValue, e, o === le), t[i] = e
    }

    function oa(t) {
      return t.__ngSimpleChanges__ || null
    }

    function aa(t, e, n, i, r) {
      if (t = St(t), Array.isArray(t)) for (let s = 0; s < t.length; s++) aa(t[s], e, n, i, r); else {
        const s = qe(), o = Be();
        let a = Qs(t) ? t : St(t.provide), l = qs(t);
        const c = Ge(), u = 65535 & c.providerIndexes, h = c.directiveStart, d = c.providerIndexes >> 16;
        if (Qs(t) || !t.multi) {
          const i = new Tn(l, r, fo), f = ua(a, e, r ? u : u + d, h);
          -1 === f ? (Wn(Vn(c, o), s, a), la(s, t, e.length), e.push(a), c.directiveStart++, c.directiveEnd++, r && (c.providerIndexes += 65536), n.push(i), o.push(i)) : (n[f] = i, o[f] = i)
        } else {
          const f = ua(a, e, u + d, h), p = ua(a, e, u, u + d), g = f >= 0 && n[f], m = p >= 0 && n[p];
          if (r && !m || !r && !g) {
            Wn(Vn(c, o), s, a);
            const u = function (t, e, n, i, r) {
              const s = new Tn(t, n, fo);
              return s.multi = [], s.index = e, s.componentProviders = 0, ca(s, r, i && !n), s
            }(r ? da : ha, n.length, r, i, l);
            !r && m && (n[p].providerFactory = u), la(s, t, e.length, 0), e.push(a), c.directiveStart++, c.directiveEnd++, r && (c.providerIndexes += 65536), n.push(u), o.push(u)
          } else la(s, t, f > -1 ? f : p, ca(n[r ? p : f], l, !r && i));
          !r && i && m && n[p].componentProviders++
        }
      }
    }

    function la(t, e, n, i) {
      const r = Qs(e);
      if (r || e.useClass) {
        const s = (e.useClass || e).prototype.ngOnDestroy;
        if (s) {
          const o = t.destroyHooks || (t.destroyHooks = []);
          if (!r && e.multi) {
            const t = o.indexOf(n);
            -1 === t ? o.push(n, [i, s]) : o[t + 1].push(i, s)
          } else o.push(n, s)
        }
      }
    }

    function ca(t, e, n) {
      return n && t.componentProviders++, t.multi.push(e) - 1
    }

    function ua(t, e, n, i) {
      for (let r = n; r < i; r++) if (e[r] === t) return r;
      return -1
    }

    function ha(t, e, n, i) {
      return fa(this.multi, [])
    }

    function da(t, e, n, i) {
      const r = this.multi;
      let s;
      if (this.providerFactory) {
        const t = this.providerFactory.componentProviders, e = Xn(n, n[1], this.providerFactory.index, i);
        s = e.slice(0, t), fa(r, s);
        for (let n = t; n < e.length; n++) s.push(e[n])
      } else s = [], fa(r, s);
      return s
    }

    function fa(t, e) {
      for (let n = 0; n < t.length; n++) e.push((0, t[n])());
      return e
    }

    function pa(t, e = []) {
      return n => {
        n.providersResolver = (n, i) => function (t, e, n) {
          const i = qe();
          if (i.firstCreatePass) {
            const r = ke(t);
            aa(n, i.data, i.blueprint, r, !0), aa(e, i.data, i.blueprint, r, !1)
          }
        }(n, i ? i(t) : t, e)
      }
    }

    ra.ngInherit = !0;

    class ga {
    }

    class ma {
      resolveComponentFactory(t) {
        throw function (t) {
          const e = Error(`No component factory found for ${_t(t)}. Did you add it to @NgModule.entryComponents?`);
          return e.ngComponent = t, e
        }(t)
      }
    }

    let ya = (() => {
      class t {
      }

      return t.NULL = new ma, t
    })(), va = (() => {
      class t {
        constructor(t) {
          this.nativeElement = t
        }
      }

      return t.__NG_ELEMENT_ID__ = () => _a(t), t
    })();
    const _a = function (t) {
      return Ds(t, Ge(), Be())
    };

    class wa {
    }

    const ba = function () {
      var t = {Important: 1, DashCase: 2};
      return t[t.Important] = "Important", t[t.DashCase] = "DashCase", t
    }();
    let xa = (() => {
      class t {
      }

      return t.__NG_ELEMENT_ID__ = () => Sa(), t
    })();
    const Sa = function () {
      const t = Be(), e = Ie(Ge().index, t);
      return function (t) {
        const e = t[11];
        if (Le(e)) return e;
        throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")
      }(be(e) ? e : t)
    };
    let Ta = (() => {
      class t {
      }

      return t.\u0275prov = ct({token: t, providedIn: "root", factory: () => null}), t
    })();

    class Ca {
      constructor(t) {
        this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
      }
    }

    const ka = new Ca("9.1.1");

    class Ea {
      constructor() {
      }

      supports(t) {
        return so(t)
      }

      create(t) {
        return new Oa(t)
      }
    }

    const Aa = (t, e) => e;

    class Oa {
      constructor(t) {
        this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || Aa
      }

      forEachItem(t) {
        let e;
        for (e = this._itHead; null !== e; e = e._next) t(e)
      }

      forEachOperation(t) {
        let e = this._itHead, n = this._removalsHead, i = 0, r = null;
        for (; e || n;) {
          const s = !n || e && e.currentIndex < Pa(n, i, r) ? e : n, o = Pa(s, i, r), a = s.currentIndex;
          if (s === n) i--, n = n._nextRemoved; else if (e = e._next, null == s.previousIndex) i++; else {
            r || (r = []);
            const t = o - i, e = a - i;
            if (t != e) {
              for (let n = 0; n < t; n++) {
                const i = n < r.length ? r[n] : r[n] = 0, s = i + n;
                e <= s && s < t && (r[n] = i + 1)
              }
              r[s.previousIndex] = e - t
            }
          }
          o !== a && t(s, o, a)
        }
      }

      forEachPreviousItem(t) {
        let e;
        for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
      }

      forEachAddedItem(t) {
        let e;
        for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
      }

      forEachMovedItem(t) {
        let e;
        for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
      }

      forEachRemovedItem(t) {
        let e;
        for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
      }

      forEachIdentityChange(t) {
        let e;
        for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
      }

      diff(t) {
        if (null == t && (t = []), !so(t)) throw new Error(`Error trying to diff '${_t(t)}'. Only arrays and iterables are allowed`);
        return this.check(t) ? this : null
      }

      onDestroy() {
      }

      check(t) {
        this._reset();
        let e, n, i, r = this._itHead, s = !1;
        if (Array.isArray(t)) {
          this.length = t.length;
          for (let e = 0; e < this.length; e++) n = t[e], i = this._trackByFn(e, n), null !== r && ro(r.trackById, i) ? (s && (r = this._verifyReinsertion(r, n, i, e)), ro(r.item, n) || this._addIdentityChange(r, n)) : (r = this._mismatch(r, n, i, e), s = !0), r = r._next
        } else e = 0, function (t, e) {
          if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e(t[n]); else {
            const n = t[io()]();
            let i;
            for (; !(i = n.next()).done;) e(i.value)
          }
        }(t, t => {
          i = this._trackByFn(e, t), null !== r && ro(r.trackById, i) ? (s && (r = this._verifyReinsertion(r, t, i, e)), ro(r.item, t) || this._addIdentityChange(r, t)) : (r = this._mismatch(r, t, i, e), s = !0), r = r._next, e++
        }), this.length = e;
        return this._truncate(r), this.collection = t, this.isDirty
      }

      get isDirty() {
        return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
      }

      _reset() {
        if (this.isDirty) {
          let t, e;
          for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
          for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
          this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
        }
      }

      _mismatch(t, e, n, i) {
        let r;
        return null === t ? r = this._itTail : (r = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, i)) ? (ro(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, r, i)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (ro(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, r, i)) : t = this._addAfter(new La(e, n), r, i), t
      }

      _verifyReinsertion(t, e, n, i) {
        let r = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
        return null !== r ? t = this._reinsertAfter(r, t._prev, i) : t.currentIndex != i && (t.currentIndex = i, this._addToMoves(t, i)), t
      }

      _truncate(t) {
        for (; null !== t;) {
          const e = t._next;
          this._addToRemovals(this._unlink(t)), t = e
        }
        null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
      }

      _reinsertAfter(t, e, n) {
        null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
        const i = t._prevRemoved, r = t._nextRemoved;
        return null === i ? this._removalsHead = r : i._nextRemoved = r, null === r ? this._removalsTail = i : r._prevRemoved = i, this._insertAfter(t, e, n), this._addToMoves(t, n), t
      }

      _moveAfter(t, e, n) {
        return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
      }

      _addAfter(t, e, n) {
        return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
      }

      _insertAfter(t, e, n) {
        const i = null === e ? this._itHead : e._next;
        return t._next = i, t._prev = e, null === i ? this._itTail = t : i._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new Ma), this._linkedRecords.put(t), t.currentIndex = n, t
      }

      _remove(t) {
        return this._addToRemovals(this._unlink(t))
      }

      _unlink(t) {
        null !== this._linkedRecords && this._linkedRecords.remove(t);
        const e = t._prev, n = t._next;
        return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
      }

      _addToMoves(t, e) {
        return t.previousIndex === e || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t
      }

      _addToRemovals(t) {
        return null === this._unlinkedRecords && (this._unlinkedRecords = new Ma), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
      }

      _addIdentityChange(t, e) {
        return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
      }
    }

    class La {
      constructor(t, e) {
        this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
      }
    }

    class Da {
      constructor() {
        this._head = null, this._tail = null
      }

      add(t) {
        null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
      }

      get(t, e) {
        let n;
        for (n = this._head; null !== n; n = n._nextDup) if ((null === e || e <= n.currentIndex) && ro(n.trackById, t)) return n;
        return null
      }

      remove(t) {
        const e = t._prevDup, n = t._nextDup;
        return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
      }
    }

    class Ma {
      constructor() {
        this.map = new Map
      }

      put(t) {
        const e = t.trackById;
        let n = this.map.get(e);
        n || (n = new Da, this.map.set(e, n)), n.add(t)
      }

      get(t, e) {
        const n = this.map.get(t);
        return n ? n.get(t, e) : null
      }

      remove(t) {
        const e = t.trackById;
        return this.map.get(e).remove(t) && this.map.delete(e), t
      }

      get isEmpty() {
        return 0 === this.map.size
      }

      clear() {
        this.map.clear()
      }
    }

    function Pa(t, e, n) {
      const i = t.previousIndex;
      if (null === i) return i;
      let r = 0;
      return n && i < n.length && (r = n[i]), i + e + r
    }

    class Ra {
      constructor() {
      }

      supports(t) {
        return t instanceof Map || oo(t)
      }

      create() {
        return new Fa
      }
    }

    class Fa {
      constructor() {
        this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
      }

      get isDirty() {
        return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
      }

      forEachItem(t) {
        let e;
        for (e = this._mapHead; null !== e; e = e._next) t(e)
      }

      forEachPreviousItem(t) {
        let e;
        for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
      }

      forEachChangedItem(t) {
        let e;
        for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
      }

      forEachAddedItem(t) {
        let e;
        for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
      }

      forEachRemovedItem(t) {
        let e;
        for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
      }

      diff(t) {
        if (t) {
          if (!(t instanceof Map || oo(t))) throw new Error(`Error trying to diff '${_t(t)}'. Only maps and objects are allowed`)
        } else t = new Map;
        return this.check(t) ? this : null
      }

      onDestroy() {
      }

      check(t) {
        this._reset();
        let e = this._mapHead;
        if (this._appendAfter = null, this._forEach(t, (t, n) => {
          if (e && e.key === n) this._maybeAddToChanges(e, t), this._appendAfter = e, e = e._next; else {
            const i = this._getOrCreateRecordForKey(n, t);
            e = this._insertBeforeOrAppend(e, i)
          }
        }), e) {
          e._prev && (e._prev._next = null), this._removalsHead = e;
          for (let t = e; null !== t; t = t._nextRemoved) t === this._mapHead && (this._mapHead = null), this._records.delete(t.key), t._nextRemoved = t._next, t.previousValue = t.currentValue, t.currentValue = null, t._prev = null, t._next = null
        }
        return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
      }

      _insertBeforeOrAppend(t, e) {
        if (t) {
          const n = t._prev;
          return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
        }
        return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
      }

      _getOrCreateRecordForKey(t, e) {
        if (this._records.has(t)) {
          const n = this._records.get(t);
          this._maybeAddToChanges(n, e);
          const i = n._prev, r = n._next;
          return i && (i._next = r), r && (r._prev = i), n._next = null, n._prev = null, n
        }
        const n = new Ia(t);
        return this._records.set(t, n), n.currentValue = e, this._addToAdditions(n), n
      }

      _reset() {
        if (this.isDirty) {
          let t;
          for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
          for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
          for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
          this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
        }
      }

      _maybeAddToChanges(t, e) {
        ro(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
      }

      _addToAdditions(t) {
        null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
      }

      _addToChanges(t) {
        null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
      }

      _forEach(t, e) {
        t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(n => e(t[n], n))
      }
    }

    class Ia {
      constructor(t) {
        this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
      }
    }

    let Na = (() => {
      class t {
        constructor(t) {
          this.factories = t
        }

        static create(e, n) {
          if (null != n) {
            const t = n.factories.slice();
            e = e.concat(t)
          }
          return new t(e)
        }

        static extend(e) {
          return {
            provide: t, useFactory: n => {
              if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
              return t.create(e, n)
            }, deps: [[t, new st, new it]]
          }
        }

        find(t) {
          const e = this.factories.find(e => e.supports(t));
          if (null != e) return e;
          throw new Error(`Cannot find a differ supporting object '${t}' of type '${n = t,n.name||typeof n}'`);
          var n
        }
      }

      return t.\u0275prov = ct({token: t, providedIn: "root", factory: () => new t([new Ea])}), t
    })(), ja = (() => {
      class t {
        constructor(t) {
          this.factories = t
        }

        static create(e, n) {
          if (n) {
            const t = n.factories.slice();
            e = e.concat(t)
          }
          return new t(e)
        }

        static extend(e) {
          return {
            provide: t, useFactory: n => {
              if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
              return t.create(e, n)
            }, deps: [[t, new st, new it]]
          }
        }

        find(t) {
          const e = this.factories.find(e => e.supports(t));
          if (e) return e;
          throw new Error(`Cannot find a differ supporting object '${t}'`)
        }
      }

      return t.\u0275prov = ct({token: t, providedIn: "root", factory: () => new t([new Ra])}), t
    })();
    const Ha = [new Ra], Ua = new Na([new Ea]), $a = new ja(Ha);
    let Va = (() => {
      class t {
      }

      return t.__NG_ELEMENT_ID__ = () => za(t, va), t
    })();
    const za = function (t, e) {
      return Ms(t, e, Ge(), Be())
    };
    let Ba = (() => {
      class t {
      }

      return t.__NG_ELEMENT_ID__ = () => qa(t, va), t
    })();
    const qa = function (t, e) {
      return Ps(t, e, Ge(), Be())
    }, Wa = {};

    class Ga extends ya {
      constructor(t) {
        super(), this.ngModule = t
      }

      resolveComponentFactory(t) {
        const e = ve(t);
        return new Za(e, this.ngModule)
      }
    }

    function Qa(t) {
      const e = [];
      for (let n in t) t.hasOwnProperty(n) && e.push({propName: t[n], templateName: n});
      return e
    }

    const Ya = new Nt("SCHEDULER_TOKEN", {providedIn: "root", factory: () => In});

    class Za extends ga {
      constructor(t, e) {
        super(), this.componentDef = t, this.ngModule = e, this.componentType = t.type, this.selector = t.selectors.map(or).join(","), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!e
      }

      get inputs() {
        return Qa(this.componentDef.inputs)
      }

      get outputs() {
        return Qa(this.componentDef.outputs)
      }

      create(t, e, n, i) {
        const r = (i = i || this.ngModule) ? function (t, e) {
            return {
              get: (n, i, r) => {
                const s = t.get(n, Wa, r);
                return s !== Wa || i === Wa ? s : e.get(n, i, r)
              }
            }
          }(t, i.injector) : t, s = r.get(wa, De), o = r.get(Ta, null), a = s.createRenderer(null, this.componentDef),
          l = this.componentDef.selectors[0][0] || "div", c = n ? function (t, e, n) {
            if (Le(t)) return t.selectRootElement(e, n === ae.ShadowDom);
            let i = "string" == typeof e ? t.querySelector(e) : e;
            return i.textContent = "", i
          }(a, n, this.componentDef.encapsulation) : vr(l, s.createRenderer(null, this.componentDef), function (t) {
            const e = t.toLowerCase();
            return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null
          }(l)), u = this.componentDef.onPush ? 576 : 528,
          h = "string" == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
          d = {components: [], scheduler: In, clean: Jr, playerHandler: null, flags: 0},
          f = Ar(0, -1, null, 1, 0, null, null, null, null, null), p = _r(null, f, d, u, null, null, s, a, o, r);
        let g, m;
        an(p, null);
        try {
          const t = function (t, e, n, i, r, s) {
            const o = n[1];
            n[19] = t;
            const a = wr(o, null, 0, 3, null, null), l = a.mergedAttrs = e.hostAttrs;
            null !== l && (eo(a, l), null !== t && (Cn(r, t, l), null !== a.classes && Cs(r, t, a.classes), null !== a.styles && Ts(r, t, a.styles)));
            const c = i.createRenderer(t, e), u = _r(n, Er(e), null, e.onPush ? 64 : 16, n[19], a, i, c, void 0);
            return o.firstCreatePass && (Wn(Vn(a, n), o, e.type), Nr(o, a), Hr(a, n.length, 1)), Qr(n, u), n[19] = u
          }(c, this.componentDef, p, s, a);
          if (c) if (n) Cn(a, c, ["ng-version", ka.full]); else {
            const {attrs: t, classes: e} = function (t) {
              const e = [], n = [];
              let i = 1, r = 2;
              for (; i < t.length;) {
                let s = t[i];
                if ("string" == typeof s) 2 === r ? "" !== s && e.push(s, t[++i]) : 8 === r && n.push(s); else {
                  if (!nr(r)) break;
                  r = s
                }
                i++
              }
              return {attrs: e, classes: n}
            }(this.componentDef.selectors[0]);
            t && Cn(a, c, t), e && e.length > 0 && Cs(a, c, e.join(" "))
          }
          m = Fe(p[1], 0), e && (m.projection = e.map(t => Array.from(t))), g = function (t, e, n, i, r) {
            const s = n[1], o = function (t, e, n) {
              const i = Ge();
              t.firstCreatePass && (n.providersResolver && n.providersResolver(n), Ir(t, i, 1), Ur(t, e, n));
              const r = Xn(e, t, e.length - 1, i);
              Yi(r, e);
              const s = Re(i, e);
              return s && Yi(s, e), r
            }(s, n, e);
            i.components.push(o), t[8] = o, r && r.forEach(t => t(o, e)), e.contentQueries && e.contentQueries(1, o, n.length - 1);
            const a = Ge();
            if (s.firstCreatePass && (null !== e.hostBindings || null !== e.hostAttrs)) {
              pn(a.index - 19);
              const t = n[1];
              Pr(t, e), Rr(t, n, e.hostVars), Fr(e, o)
            }
            return o
          }(t, this.componentDef, p, d, [Xo]), br(f, p, null)
        } finally {
          dn()
        }
        const y = new Xa(this.componentType, g, Ds(va, m, p), p, m);
        return n && !h || (y.hostView._tViewNode.child = m), y
      }
    }

    class Xa extends class {
    } {
      constructor(t, e, n, i, r) {
        super(), this.location = n, this._rootLView = i, this._tNode = r, this.destroyCbs = [], this.instance = e, this.hostView = this.changeDetectorRef = new Es(i), this.hostView._tViewNode = function (t, e, n, i) {
          let r = t.node;
          return null == r && (t.node = r = Or(0, null, 2, -1, null, null)), i[6] = r
        }(i[1], 0, 0, i), this.componentType = t
      }

      get injector() {
        return new ti(this._tNode, this._rootLView)
      }

      destroy() {
        this.destroyCbs && (this.destroyCbs.forEach(t => t()), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
      }

      onDestroy(t) {
        this.destroyCbs && this.destroyCbs.push(t)
      }
    }

    const Ka = void 0;
    var Ja = ["en", [["a", "p"], ["AM", "PM"], Ka], [["AM", "PM"], Ka, Ka], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Ka, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Ka, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", Ka, "{1} 'at' {0}", Ka], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function (t) {
      let e = Math.floor(Math.abs(t)), n = t.toString().replace(/^[^.]*\.?/, "").length;
      return 1 === e && 0 === n ? 1 : 5
    }];
    let tl = {};

    function el(t) {
      return t in tl || (tl[t] = Ot.ng && Ot.ng.common && Ot.ng.common.locales && Ot.ng.common.locales[t]), tl[t]
    }

    const nl = function () {
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
    let il = "en-US";

    function rl(t) {
      var e, n;
      n = "Expected localeId to be defined", null == (e = t) && function (t, e, n, i) {
        throw new Error("ASSERTION ERROR: " + t + ` [Expected=> null != ${e} <=Actual]`)
      }(n, e), "string" == typeof t && (il = t.toLowerCase().replace(/_/g, "-"))
    }

    const sl = new Map;

    class ol extends Xt {
      constructor(t, e) {
        super(), this._parent = e, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new Ga(this);
        const n = we(t), i = t[Rt] || null;
        i && rl(i), this._bootstrapComponents = jn(n.bootstrap), this._r3Injector = Vs(t, e, [{
          provide: Xt,
          useValue: this
        }, {
          provide: ya,
          useValue: this.componentFactoryResolver
        }], _t(t)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(t)
      }

      get(t, e = Zs.THROW_IF_NOT_FOUND, n = ot.Default) {
        return t === Zs || t === Xt || t === jt ? this : this._r3Injector.get(t, e, n)
      }

      destroy() {
        const t = this._r3Injector;
        !t.destroyed && t.destroy(), this.destroyCbs.forEach(t => t()), this.destroyCbs = null
      }

      onDestroy(t) {
        this.destroyCbs.push(t)
      }
    }

    class al extends Kt {
      constructor(t) {
        super(), this.moduleType = t, null !== we(t) && function t(e) {
          if (null !== e.\u0275mod.id) {
            const t = e.\u0275mod.id;
            (function (t, e, n) {
              if (e && e !== n) throw new Error(`Duplicate module registered for ${t} - ${_t(e)} vs ${_t(e.name)}`)
            })(t, sl.get(t), e), sl.set(t, e)
          }
          let n = e.\u0275mod.imports;
          n instanceof Function && (n = n()), n && n.forEach(e => t(e))
        }(t)
      }

      create(t) {
        return new ol(this.moduleType, t)
      }
    }

    function ll(t, e, n) {
      const i = Je() + t, r = Be();
      return r[i] === ar ? ao(r, i, n ? e.call(n) : e()) : function (t, e) {
        return t[e]
      }(r, i)
    }

    function cl(t, e, n, i) {
      return function (t, e, n, i, r, s) {
        const o = e + n;
        return lo(t, o, r) ? ao(t, o + 1, s ? i.call(s, r) : i(r)) : hl(t, o + 1)
      }(Be(), Je(), t, e, n, i)
    }

    function ul(t, e, n, i, r) {
      return function (t, e, n, i, r, s, o) {
        const a = e + n;
        return function (t, e, n, i) {
          const r = lo(t, e, n);
          return lo(t, e + 1, i) || r
        }(t, a, r, s) ? ao(t, a + 2, o ? i.call(o, r, s) : i(r, s)) : hl(t, a + 2)
      }(Be(), Je(), t, e, n, i, r)
    }

    function hl(t, e) {
      const n = t[e];
      return n === ar ? void 0 : n
    }

    class dl extends C {
      constructor(t = !1) {
        super(), this.__isAsync = t
      }

      emit(t) {
        super.next(t)
      }

      subscribe(t, e, n) {
        let i, r = t => null, s = () => null;
        t && "object" == typeof t ? (i = this.__isAsync ? e => {
          setTimeout(() => t.next(e))
        } : e => {
          t.next(e)
        }, t.error && (r = this.__isAsync ? e => {
          setTimeout(() => t.error(e))
        } : e => {
          t.error(e)
        }), t.complete && (s = this.__isAsync ? () => {
          setTimeout(() => t.complete())
        } : () => {
          t.complete()
        })) : (i = this.__isAsync ? e => {
          setTimeout(() => t(e))
        } : e => {
          t(e)
        }, e && (r = this.__isAsync ? t => {
          setTimeout(() => e(t))
        } : t => {
          e(t)
        }), n && (s = this.__isAsync ? () => {
          setTimeout(() => n())
        } : () => {
          n()
        }));
        const o = super.subscribe(i, r, s);
        return t instanceof h && t.add(o), o
      }
    }

    function fl() {
      return this._results[io()]()
    }

    class pl {
      constructor() {
        this.dirty = !0, this._results = [], this.changes = new dl, this.length = 0;
        const t = io(), e = pl.prototype;
        e[t] || (e[t] = fl)
      }

      map(t) {
        return this._results.map(t)
      }

      filter(t) {
        return this._results.filter(t)
      }

      find(t) {
        return this._results.find(t)
      }

      reduce(t, e) {
        return this._results.reduce(t, e)
      }

      forEach(t) {
        this._results.forEach(t)
      }

      some(t) {
        return this._results.some(t)
      }

      toArray() {
        return this._results.slice()
      }

      toString() {
        return this._results.toString()
      }

      reset(t) {
        this._results = function t(e, n) {
          void 0 === n && (n = e);
          for (let i = 0; i < e.length; i++) {
            let r = e[i];
            Array.isArray(r) ? (n === e && (n = e.slice(0, i)), t(r, n)) : n !== e && n.push(r)
          }
          return n
        }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
      }

      notifyOnChanges() {
        this.changes.emit(this)
      }

      setDirty() {
        this.dirty = !0
      }

      destroy() {
        this.changes.complete(), this.changes.unsubscribe()
      }
    }

    class gl {
      constructor(t) {
        this.queryList = t, this.matches = null
      }

      clone() {
        return new gl(this.queryList)
      }

      setDirty() {
        this.queryList.setDirty()
      }
    }

    class ml {
      constructor(t = []) {
        this.queries = t
      }

      createEmbeddedView(t) {
        const e = t.queries;
        if (null !== e) {
          const n = null !== t.contentQueries ? t.contentQueries[0] : e.length, i = [];
          for (let t = 0; t < n; t++) {
            const n = e.getByIndex(t);
            i.push(this.queries[n.indexInDeclarationView].clone())
          }
          return new ml(i)
        }
        return null
      }

      insertView(t) {
        this.dirtyQueriesWithMatches(t)
      }

      detachView(t) {
        this.dirtyQueriesWithMatches(t)
      }

      dirtyQueriesWithMatches(t) {
        for (let e = 0; e < this.queries.length; e++) null !== Ol(t, e).matches && this.queries[e].setDirty()
      }
    }

    class yl {
      constructor(t, e, n, i = null) {
        this.predicate = t, this.descendants = e, this.isStatic = n, this.read = i
      }
    }

    class vl {
      constructor(t = []) {
        this.queries = t
      }

      elementStart(t, e) {
        for (let n = 0; n < this.queries.length; n++) this.queries[n].elementStart(t, e)
      }

      elementEnd(t) {
        for (let e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(t)
      }

      embeddedTView(t) {
        let e = null;
        for (let n = 0; n < this.length; n++) {
          const i = null !== e ? e.length : 0, r = this.getByIndex(n).embeddedTView(t, i);
          r && (r.indexInDeclarationView = n, null !== e ? e.push(r) : e = [r])
        }
        return null !== e ? new vl(e) : null
      }

      template(t, e) {
        for (let n = 0; n < this.queries.length; n++) this.queries[n].template(t, e)
      }

      getByIndex(t) {
        return this.queries[t]
      }

      get length() {
        return this.queries.length
      }

      track(t) {
        this.queries.push(t)
      }
    }

    class _l {
      constructor(t, e = -1) {
        this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = e
      }

      elementStart(t, e) {
        this.isApplyingToNode(e) && this.matchTNode(t, e)
      }

      elementEnd(t) {
        this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
      }

      template(t, e) {
        this.elementStart(t, e)
      }

      embeddedTView(t, e) {
        return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, e), new _l(this.metadata)) : null
      }

      isApplyingToNode(t) {
        if (this._appliesToNextNode && !1 === this.metadata.descendants) {
          const e = this._declarationNodeIndex;
          let n = t.parent;
          for (; null !== n && 4 === n.type && n.index !== e;) n = n.parent;
          return e === (null !== n ? n.index : -1)
        }
        return this._appliesToNextNode
      }

      matchTNode(t, e) {
        if (Array.isArray(this.metadata.predicate)) {
          const n = this.metadata.predicate;
          for (let i = 0; i < n.length; i++) this.matchTNodeWithReadOption(t, e, wl(e, n[i]))
        } else {
          const n = this.metadata.predicate;
          n === Va ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1) : this.matchTNodeWithReadOption(t, e, Zn(e, t, n, !1, !1))
        }
      }

      matchTNodeWithReadOption(t, e, n) {
        if (null !== n) {
          const i = this.metadata.read;
          if (null !== i) if (i === va || i === Ba || i === Va && 0 === e.type) this.addMatch(e.index, -2); else {
            const n = Zn(e, t, i, !1, !1);
            null !== n && this.addMatch(e.index, n)
          } else this.addMatch(e.index, n)
        }
      }

      addMatch(t, e) {
        null === this.matches ? this.matches = [t, e] : this.matches.push(t, e)
      }
    }

    function wl(t, e) {
      const n = t.localNames;
      if (null !== n) for (let i = 0; i < n.length; i += 2) if (n[i] === e) return n[i + 1];
      return null
    }

    function bl(t, e, n, i) {
      return -1 === n ? function (t, e) {
        return 3 === t.type || 4 === t.type ? Ds(va, t, e) : 0 === t.type ? Ms(Va, va, t, e) : null
      }(e, t) : -2 === n ? function (t, e, n) {
        return n === va ? Ds(va, e, t) : n === Va ? Ms(Va, va, e, t) : n === Ba ? Ps(Ba, va, e, t) : void 0
      }(t, e, i) : Xn(t, t[1], n, e)
    }

    function xl(t, e, n, i) {
      const r = e[5].queries[i];
      if (null === r.matches) {
        const i = t.data, s = n.matches, o = [];
        for (let t = 0; t < s.length; t += 2) {
          const r = s[t];
          o.push(r < 0 ? null : bl(e, i[r], s[t + 1], n.metadata.read))
        }
        r.matches = o
      }
      return r.matches
    }

    function Sl(t) {
      const e = Be(), n = qe(), i = rn();
      sn(i + 1);
      const r = Ol(n, i);
      if (t.dirty && je(e) === r.metadata.isStatic) {
        if (null === r.matches) t.reset([]); else {
          const s = r.crossesNgTemplate ? function t(e, n, i, r) {
            const s = e.queries.getByIndex(i), o = s.matches;
            if (null !== o) {
              const a = xl(e, n, s, i);
              for (let e = 0; e < o.length; e += 2) {
                const i = o[e];
                if (i > 0) r.push(a[e / 2]); else {
                  const s = o[e + 1], a = n[-i];
                  for (let e = 9; e < a.length; e++) {
                    const n = a[e];
                    n[17] === n[3] && t(n[1], n, s, r)
                  }
                  if (null !== a[5]) {
                    const e = a[5];
                    for (let n = 0; n < e.length; n++) {
                      const i = e[n];
                      t(i[1], i, s, r)
                    }
                  }
                }
              }
            }
            return r
          }(n, e, i, []) : xl(n, e, r, i);
          t.reset(s), t.notifyOnChanges()
        }
        return !0
      }
      return !1
    }

    function Tl(t, e, n) {
      !function (t, e, n, i, r, s) {
        t.firstCreatePass && Al(t, new yl(n, i, !1, r), -1), El(t, e)
      }(qe(), Be(), t, e, n)
    }

    function Cl(t, e, n, i) {
      !function (t, e, n, i, r, s, o, a) {
        t.firstCreatePass && (Al(t, new yl(n, i, !1, r), o.index), function (t, e) {
          const n = t.contentQueries || (t.contentQueries = []);
          e !== (t.contentQueries.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e)
        }(t, a)), El(t, e)
      }(qe(), Be(), e, n, i, 0, Ge(), t)
    }

    function kl() {
      return t = Be(), e = rn(), t[5].queries[e].queryList;
      var t, e
    }

    function El(t, e) {
      const n = new pl;
      !function (t, e, n, i) {
        const r = ts(e);
        r.push(n), t.firstCreatePass && es(t).push(i, r.length - 1)
      }(t, e, n, n.destroy), null === e[5] && (e[5] = new ml), e[5].queries.push(new gl(n))
    }

    function Al(t, e, n) {
      null === t.queries && (t.queries = new vl), t.queries.track(new _l(e, n))
    }

    function Ol(t, e) {
      return t.queries.getByIndex(e)
    }

    const Ll = new Nt("Application Initializer");
    let Dl = (() => {
      class t {
        constructor(t) {
          this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((t, e) => {
            this.resolve = t, this.reject = e
          })
        }

        runInitializers() {
          if (this.initialized) return;
          const t = [], e = () => {
            this.done = !0, this.resolve()
          };
          if (this.appInits) for (let n = 0; n < this.appInits.length; n++) {
            const e = this.appInits[n]();
            xo(e) && t.push(e)
          }
          Promise.all(t).then(() => {
            e()
          }).catch(t => {
            this.reject(t)
          }), 0 === t.length && e(), this.initialized = !0
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Ll, 8))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();
    const Ml = new Nt("AppId"), Pl = {
      provide: Ml, useFactory: function () {
        return `${Rl()}${Rl()}${Rl()}`
      }, deps: []
    };

    function Rl() {
      return String.fromCharCode(97 + Math.floor(25 * Math.random()))
    }

    const Fl = new Nt("Platform Initializer"), Il = new Nt("Platform ID"), Nl = new Nt("appBootstrapListener");
    let jl = (() => {
      class t {
        log(t) {
          console.log(t)
        }

        warn(t) {
          console.warn(t)
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();
    const Hl = new Nt("LocaleId"), Ul = new Nt("DefaultCurrencyCode");

    class $l {
      constructor(t, e) {
        this.ngModuleFactory = t, this.componentFactories = e
      }
    }

    const Vl = function (t) {
      return new al(t)
    }, zl = Vl, Bl = function (t) {
      return Promise.resolve(Vl(t))
    }, ql = function (t) {
      const e = Vl(t), n = jn(we(t).declarations).reduce((t, e) => {
        const n = ve(e);
        return n && t.push(new Za(n)), t
      }, []);
      return new $l(e, n)
    }, Wl = ql, Gl = function (t) {
      return Promise.resolve(ql(t))
    };
    let Ql = (() => {
      class t {
        constructor() {
          this.compileModuleSync = zl, this.compileModuleAsync = Bl, this.compileModuleAndAllComponentsSync = Wl, this.compileModuleAndAllComponentsAsync = Gl
        }

        clearCache() {
        }

        clearCacheFor(t) {
        }

        getModuleId(t) {
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();
    const Yl = new Nt("compilerOptions"), Zl = (() => Promise.resolve(0))();

    function Xl(t) {
      "undefined" == typeof Zone ? Zl.then(() => {
        t && t.apply(null, null)
      }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
    }

    class Kl {
      constructor({enableLongStackTrace: t = !1, shouldCoalesceEventChangeDetection: e = !1}) {
        if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new dl(!1), this.onMicrotaskEmpty = new dl(!1), this.onStable = new dl(!1), this.onError = new dl(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
        Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = e, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function () {
          let t = Ot.requestAnimationFrame, e = Ot.cancelAnimationFrame;
          if ("undefined" != typeof Zone && t && e) {
            const n = t[Zone.__symbol__("OriginalDelegate")];
            n && (t = n);
            const i = e[Zone.__symbol__("OriginalDelegate")];
            i && (e = i)
          }
          return {nativeRequestAnimationFrame: t, nativeCancelAnimationFrame: e}
        }().nativeRequestAnimationFrame, function (t) {
          const e = !!t.shouldCoalesceEventChangeDetection && t.nativeRequestAnimationFrame && (() => {
            !function (t) {
              -1 === t.lastRequestAnimationFrameId && (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(Ot, () => {
                t.lastRequestAnimationFrameId = -1, nc(t), ec(t)
              }), nc(t))
            }(t)
          });
          t._inner = t._inner.fork({
            name: "angular",
            properties: {isAngularZone: !0, maybeDelayChangeDetection: e},
            onInvokeTask: (n, i, r, s, o, a) => {
              try {
                return ic(t), n.invokeTask(r, s, o, a)
              } finally {
                e && "eventTask" === s.type && e(), rc(t)
              }
            },
            onInvoke: (e, n, i, r, s, o, a) => {
              try {
                return ic(t), e.invoke(i, r, s, o, a)
              } finally {
                rc(t)
              }
            },
            onHasTask: (e, n, i, r) => {
              e.hasTask(i, r), n === i && ("microTask" == r.change ? (t._hasPendingMicrotasks = r.microTask, nc(t), ec(t)) : "macroTask" == r.change && (t.hasPendingMacrotasks = r.macroTask))
            },
            onHandleError: (e, n, i, r) => (e.handleError(i, r), t.runOutsideAngular(() => t.onError.emit(r)), !1)
          })
        }(this)
      }

      static isInAngularZone() {
        return !0 === Zone.current.get("isAngularZone")
      }

      static assertInAngularZone() {
        if (!Kl.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
      }

      static assertNotInAngularZone() {
        if (Kl.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
      }

      run(t, e, n) {
        return this._inner.run(t, e, n)
      }

      runTask(t, e, n, i) {
        const r = this._inner, s = r.scheduleEventTask("NgZoneEvent: " + i, t, tc, Jl, Jl);
        try {
          return r.runTask(s, e, n)
        } finally {
          r.cancelTask(s)
        }
      }

      runGuarded(t, e, n) {
        return this._inner.runGuarded(t, e, n)
      }

      runOutsideAngular(t) {
        return this._outer.run(t)
      }
    }

    function Jl() {
    }

    const tc = {};

    function ec(t) {
      if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
        t._nesting++, t.onMicrotaskEmpty.emit(null)
      } finally {
        if (t._nesting--, !t.hasPendingMicrotasks) try {
          t.runOutsideAngular(() => t.onStable.emit(null))
        } finally {
          t.isStable = !0
        }
      }
    }

    function nc(t) {
      t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || t.shouldCoalesceEventChangeDetection && -1 !== t.lastRequestAnimationFrameId)
    }

    function ic(t) {
      t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
    }

    function rc(t) {
      t._nesting--, ec(t)
    }

    class sc {
      constructor() {
        this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new dl, this.onMicrotaskEmpty = new dl, this.onStable = new dl, this.onError = new dl
      }

      run(t, e, n) {
        return t.apply(e, n)
      }

      runGuarded(t, e, n) {
        return t.apply(e, n)
      }

      runOutsideAngular(t) {
        return t()
      }

      runTask(t, e, n, i) {
        return t.apply(e, n)
      }
    }

    let oc = (() => {
      class t {
        constructor(t) {
          this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run(() => {
            this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
          })
        }

        _watchAngularEvents() {
          this._ngZone.onUnstable.subscribe({
            next: () => {
              this._didWork = !0, this._isZoneStable = !1
            }
          }), this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.subscribe({
              next: () => {
                Kl.assertNotInAngularZone(), Xl(() => {
                  this._isZoneStable = !0, this._runCallbacksIfReady()
                })
              }
            })
          })
        }

        increasePendingRequestCount() {
          return this._pendingCount += 1, this._didWork = !0, this._pendingCount
        }

        decreasePendingRequestCount() {
          if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
          return this._runCallbacksIfReady(), this._pendingCount
        }

        isStable() {
          return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
        }

        _runCallbacksIfReady() {
          if (this.isStable()) Xl(() => {
            for (; 0 !== this._callbacks.length;) {
              let t = this._callbacks.pop();
              clearTimeout(t.timeoutId), t.doneCb(this._didWork)
            }
            this._didWork = !1
          }); else {
            let t = this.getPendingTasks();
            this._callbacks = this._callbacks.filter(e => !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)), this._didWork = !0
          }
        }

        getPendingTasks() {
          return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(t => ({
            source: t.source,
            creationLocation: t.creationLocation,
            data: t.data
          })) : []
        }

        addCallback(t, e, n) {
          let i = -1;
          e && e > 0 && (i = setTimeout(() => {
            this._callbacks = this._callbacks.filter(t => t.timeoutId !== i), t(this._didWork, this.getPendingTasks())
          }, e)), this._callbacks.push({doneCb: t, timeoutId: i, updateCb: n})
        }

        whenStable(t, e, n) {
          if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
          this.addCallback(t, e, n), this._runCallbacksIfReady()
        }

        getPendingRequestCount() {
          return this._pendingCount
        }

        findProviders(t, e, n) {
          return []
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Kl))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })(), ac = (() => {
      class t {
        constructor() {
          this._applications = new Map, uc.addToWindow(this)
        }

        registerApplication(t, e) {
          this._applications.set(t, e)
        }

        unregisterApplication(t) {
          this._applications.delete(t)
        }

        unregisterAllApplications() {
          this._applications.clear()
        }

        getTestability(t) {
          return this._applications.get(t) || null
        }

        getAllTestabilities() {
          return Array.from(this._applications.values())
        }

        getAllRootElements() {
          return Array.from(this._applications.keys())
        }

        findTestabilityInTree(t, e = !0) {
          return uc.findTestabilityInTree(this, t, e)
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();

    class lc {
      addToWindow(t) {
      }

      findTestabilityInTree(t, e, n) {
        return null
      }
    }

    let cc, uc = new lc, hc = function (t, e, n) {
      const i = t.get(Yl, []).concat(e), r = new al(n);
      if (0 === Ks.size) return Promise.resolve(r);
      const s = function (t) {
        const e = [];
        return t.forEach(t => t && e.push(...t)), e
      }(i.map(t => t.providers));
      if (0 === s.length) return Promise.resolve(r);
      const o = function () {
        const t = Ot.ng;
        if (!t || !t.\u0275compilerFacade) throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");
        return t.\u0275compilerFacade
      }(), a = Zs.create({providers: s}).get(o.ResourceLoader);
      return function (t) {
        const e = [], n = new Map;

        function i(t) {
          let e = n.get(t);
          if (!e) {
            const i = (t => Promise.resolve(a.get(t)))(t);
            n.set(t, e = i.then(to))
          }
          return e
        }

        return Ks.forEach((t, n) => {
          const r = [];
          t.templateUrl && r.push(i(t.templateUrl).then(e => {
            t.template = e
          }));
          const s = t.styleUrls, o = t.styles || (t.styles = []), a = t.styles.length;
          s && s.forEach((e, n) => {
            o.push(""), r.push(i(e).then(i => {
              o[a + n] = i, s.splice(s.indexOf(e), 1), 0 == s.length && (t.styleUrls = void 0)
            }))
          });
          const l = Promise.all(r).then(() => function (t) {
            Js.delete(t)
          }(n));
          e.push(l)
        }), Ks = new Map, Promise.all(e).then(() => {
        })
      }().then(() => r)
    };
    const dc = new Nt("AllowMultipleToken");

    class fc {
      constructor(t, e) {
        this.name = t, this.token = e
      }
    }

    function pc(t, e, n = []) {
      const i = "Platform: " + e, r = new Nt(i);
      return (e = []) => {
        let s = gc();
        if (!s || s.injector.get(dc, !1)) if (t) t(n.concat(e).concat({provide: r, useValue: !0})); else {
          const t = n.concat(e).concat({provide: r, useValue: !0}, {provide: Is, useValue: "platform"});
          !function (t) {
            if (cc && !cc.destroyed && !cc.injector.get(dc, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
            cc = t.get(mc);
            const e = t.get(Fl, null);
            e && e.forEach(t => t())
          }(Zs.create({providers: t, name: i}))
        }
        return function (t) {
          const e = gc();
          if (!e) throw new Error("No platform exists!");
          if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
          return e
        }(r)
      }
    }

    function gc() {
      return cc && !cc.destroyed ? cc : null
    }

    let mc = (() => {
      class t {
        constructor(t) {
          this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
        }

        bootstrapModuleFactory(t, e) {
          const n = function (t, e) {
            let n;
            return n = "noop" === t ? new sc : ("zone.js" === t ? void 0 : t) || new Kl({
              enableLongStackTrace: yi(),
              shouldCoalesceEventChangeDetection: e
            }), n
          }(e ? e.ngZone : void 0, e && e.ngZoneEventCoalescing || !1), i = [{provide: Kl, useValue: n}];
          return n.run(() => {
            const e = Zs.create({providers: i, parent: this.injector, name: t.moduleType.name}), r = t.create(e),
              s = r.injector.get(si, null);
            if (!s) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
            return r.onDestroy(() => _c(this._modules, r)), n.runOutsideAngular(() => n.onError.subscribe({
              next: t => {
                s.handleError(t)
              }
            })), function (t, e, n) {
              try {
                const i = n();
                return xo(i) ? i.catch(n => {
                  throw e.runOutsideAngular(() => t.handleError(n)), n
                }) : i
              } catch (i) {
                throw e.runOutsideAngular(() => t.handleError(i)), i
              }
            }(s, n, () => {
              const t = r.injector.get(Dl);
              return t.runInitializers(), t.donePromise.then(() => (rl(r.injector.get(Hl, "en-US") || "en-US"), this._moduleDoBootstrap(r), r))
            })
          })
        }

        bootstrapModule(t, e = []) {
          const n = yc({}, e);
          return hc(this.injector, n, t).then(t => this.bootstrapModuleFactory(t, n))
        }

        _moduleDoBootstrap(t) {
          const e = t.injector.get(vc);
          if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(t => e.bootstrap(t)); else {
            if (!t.instance.ngDoBootstrap) throw new Error(`The module ${_t(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);
            t.instance.ngDoBootstrap(e)
          }
          this._modules.push(t)
        }

        onDestroy(t) {
          this._destroyListeners.push(t)
        }

        get injector() {
          return this._injector
        }

        destroy() {
          if (this._destroyed) throw new Error("The platform has already been destroyed!");
          this._modules.slice().forEach(t => t.destroy()), this._destroyListeners.forEach(t => t()), this._destroyed = !0
        }

        get destroyed() {
          return this._destroyed
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Zs))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();

    function yc(t, e) {
      return Array.isArray(e) ? e.reduce(yc, t) : Object.assign(Object.assign({}, t), e)
    }

    let vc = (() => {
      class t {
        constructor(t, e, n, i, r, s) {
          this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = i, this._componentFactoryResolver = r, this._initStatus = s, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = yi(), this._zone.onMicrotaskEmpty.subscribe({
            next: () => {
              this._zone.run(() => {
                this.tick()
              })
            }
          });
          const o = new w(t => {
            this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
              t.next(this._stable), t.complete()
            })
          }), a = new w(t => {
            let e;
            this._zone.runOutsideAngular(() => {
              e = this._zone.onStable.subscribe(() => {
                Kl.assertNotInAngularZone(), Xl(() => {
                  this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, t.next(!0))
                })
              })
            });
            const n = this._zone.onUnstable.subscribe(() => {
              Kl.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                t.next(!1)
              }))
            });
            return () => {
              e.unsubscribe(), n.unsubscribe()
            }
          });
          this.isStable = function (...t) {
            let e = Number.POSITIVE_INFINITY, n = null, i = t[t.length - 1];
            return E(i) ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof i && (e = t.pop()), null === n && 1 === t.length && t[0] instanceof w ? t[0] : q(e)(W(t, n))
          }(o, a.pipe(t => {
            return G()((e = J, function (t) {
              let n;
              n = "function" == typeof e ? e : function () {
                return e
              };
              const i = Object.create(t, X);
              return i.source = t, i.subjectFactory = n, i
            })(t));
            var e
          }))
        }

        bootstrap(t, e) {
          if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
          let n;
          n = t instanceof ga ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
          const i = n.isBoundToModule ? void 0 : this._injector.get(Xt), r = n.create(Zs.NULL, [], e || n.selector, i);
          r.onDestroy(() => {
            this._unloadComponent(r)
          });
          const s = r.injector.get(oc, null);
          return s && r.injector.get(ac).registerApplication(r.location.nativeElement, s), this._loadComponent(r), yi() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), r
        }

        tick() {
          if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
          try {
            this._runningTick = !0;
            for (let t of this._views) t.detectChanges();
            if (this._enforceNoNewChanges) for (let t of this._views) t.checkNoChanges()
          } catch (t) {
            this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t))
          } finally {
            this._runningTick = !1
          }
        }

        attachView(t) {
          const e = t;
          this._views.push(e), e.attachToAppRef(this)
        }

        detachView(t) {
          const e = t;
          _c(this._views, e), e.detachFromAppRef()
        }

        _loadComponent(t) {
          this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(Nl, []).concat(this._bootstrapListeners).forEach(e => e(t))
        }

        _unloadComponent(t) {
          this.detachView(t.hostView), _c(this.components, t)
        }

        ngOnDestroy() {
          this._views.slice().forEach(t => t.destroy())
        }

        get viewCount() {
          return this._views.length
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Kl), Gt(jl), Gt(Zs), Gt(si), Gt(ya), Gt(Dl))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();

    function _c(t, e) {
      const n = t.indexOf(e);
      n > -1 && t.splice(n, 1)
    }

    class wc {
    }

    class bc {
    }

    const xc = {factoryPathPrefix: "", factoryPathSuffix: ".ngfactory"};
    let Sc = (() => {
      class t {
        constructor(t, e) {
          this._compiler = t, this._config = e || xc
        }

        load(t) {
          return this.loadAndCompile(t)
        }

        loadAndCompile(t) {
          let [e, i] = t.split("#");
          return void 0 === i && (i = "default"), n("zn8P")(e).then(t => t[i]).then(t => Tc(t, e, i)).then(t => this._compiler.compileModuleAsync(t))
        }

        loadFactory(t) {
          let [e, i] = t.split("#"), r = "NgFactory";
          return void 0 === i && (i = "default", r = ""), n("zn8P")(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix).then(t => t[i + r]).then(t => Tc(t, e, i))
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Ql), Gt(bc, 8))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();

    function Tc(t, e, n) {
      if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
      return t
    }

    const Cc = pc(null, "core", [{provide: Il, useValue: "unknown"}, {provide: mc, deps: [Zs]}, {
      provide: ac,
      deps: []
    }, {provide: jl, deps: []}]), kc = [{provide: vc, useClass: vc, deps: [Kl, jl, Zs, si, ya, Dl]}, {
      provide: Ya,
      deps: [Kl],
      useFactory: function (t) {
        let e = [];
        return t.onStable.subscribe(() => {
          for (; e.length;) e.pop()()
        }), function (t) {
          e.push(t)
        }
      }
    }, {provide: Dl, useClass: Dl, deps: [[new it, Ll]]}, {provide: Ql, useClass: Ql, deps: []}, Pl, {
      provide: Na,
      useFactory: function () {
        return Ua
      },
      deps: []
    }, {
      provide: ja, useFactory: function () {
        return $a
      }, deps: []
    }, {
      provide: Hl, useFactory: function (t) {
        return rl(t = t || "undefined" != typeof $localize && $localize.locale || "en-US"), t
      }, deps: [[new nt(Hl), new it, new st]]
    }, {provide: Ul, useValue: "USD"}];
    let Ec = (() => {
      class t {
        constructor(t) {
        }
      }

      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)(Gt(vc))
        }, providers: kc
      }), t
    })(), Ac = null;

    function Oc() {
      return Ac
    }

    const Lc = new Nt("DocumentToken");
    let Dc = (() => {
      class t {
      }

      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275prov = ct({factory: Mc, token: t, providedIn: "platform"}), t
    })();

    function Mc() {
      return Gt(Rc)
    }

    const Pc = new Nt("Location Initialized");
    let Rc = (() => {
      class t extends Dc {
        constructor(t) {
          super(), this._doc = t, this._init()
        }

        _init() {
          this.location = Oc().getLocation(), this._history = Oc().getHistory()
        }

        getBaseHrefFromDOM() {
          return Oc().getBaseHref(this._doc)
        }

        onPopState(t) {
          Oc().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
        }

        onHashChange(t) {
          Oc().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
        }

        get href() {
          return this.location.href
        }

        get protocol() {
          return this.location.protocol
        }

        get hostname() {
          return this.location.hostname
        }

        get port() {
          return this.location.port
        }

        get pathname() {
          return this.location.pathname
        }

        get search() {
          return this.location.search
        }

        get hash() {
          return this.location.hash
        }

        set pathname(t) {
          this.location.pathname = t
        }

        pushState(t, e, n) {
          Fc() ? this._history.pushState(t, e, n) : this.location.hash = n
        }

        replaceState(t, e, n) {
          Fc() ? this._history.replaceState(t, e, n) : this.location.hash = n
        }

        forward() {
          this._history.forward()
        }

        back() {
          this._history.back()
        }

        getState() {
          return this._history.state
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Lc))
      }, t.\u0275prov = ct({factory: Ic, token: t, providedIn: "platform"}), t
    })();

    function Fc() {
      return !!window.history.pushState
    }

    function Ic() {
      return new Rc(Gt(Lc))
    }

    function Nc(t, e) {
      if (0 == t.length) return e;
      if (0 == e.length) return t;
      let n = 0;
      return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
    }

    function jc(t) {
      const e = t.match(/#|\?|$/), n = e && e.index || t.length;
      return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
    }

    function Hc(t) {
      return t && "?" !== t[0] ? "?" + t : t
    }

    let Uc = (() => {
      class t {
      }

      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275prov = ct({factory: $c, token: t, providedIn: "root"}), t
    })();

    function $c(t) {
      const e = Gt(Lc).location;
      return new zc(Gt(Dc), e && e.origin || "")
    }

    const Vc = new Nt("appBaseHref");
    let zc = (() => {
      class t extends Uc {
        constructor(t, e) {
          if (super(), this._platformLocation = t, null == e && (e = this._platformLocation.getBaseHrefFromDOM()), null == e) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
          this._baseHref = e
        }

        onPopState(t) {
          this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
        }

        getBaseHref() {
          return this._baseHref
        }

        prepareExternalUrl(t) {
          return Nc(this._baseHref, t)
        }

        path(t = !1) {
          const e = this._platformLocation.pathname + Hc(this._platformLocation.search),
            n = this._platformLocation.hash;
          return n && t ? `${e}${n}` : e
        }

        pushState(t, e, n, i) {
          const r = this.prepareExternalUrl(n + Hc(i));
          this._platformLocation.pushState(t, e, r)
        }

        replaceState(t, e, n, i) {
          const r = this.prepareExternalUrl(n + Hc(i));
          this._platformLocation.replaceState(t, e, r)
        }

        forward() {
          this._platformLocation.forward()
        }

        back() {
          this._platformLocation.back()
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Dc), Gt(Vc, 8))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })(), Bc = (() => {
      class t extends Uc {
        constructor(t, e) {
          super(), this._platformLocation = t, this._baseHref = "", null != e && (this._baseHref = e)
        }

        onPopState(t) {
          this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
        }

        getBaseHref() {
          return this._baseHref
        }

        path(t = !1) {
          let e = this._platformLocation.hash;
          return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
        }

        prepareExternalUrl(t) {
          const e = Nc(this._baseHref, t);
          return e.length > 0 ? "#" + e : e
        }

        pushState(t, e, n, i) {
          let r = this.prepareExternalUrl(n + Hc(i));
          0 == r.length && (r = this._platformLocation.pathname), this._platformLocation.pushState(t, e, r)
        }

        replaceState(t, e, n, i) {
          let r = this.prepareExternalUrl(n + Hc(i));
          0 == r.length && (r = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, r)
        }

        forward() {
          this._platformLocation.forward()
        }

        back() {
          this._platformLocation.back()
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Dc), Gt(Vc, 8))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })(), qc = (() => {
      class t {
        constructor(t, e) {
          this._subject = new dl, this._urlChangeListeners = [], this._platformStrategy = t;
          const n = this._platformStrategy.getBaseHref();
          this._platformLocation = e, this._baseHref = jc(Gc(n)), this._platformStrategy.onPopState(t => {
            this._subject.emit({url: this.path(!0), pop: !0, state: t.state, type: t.type})
          })
        }

        path(t = !1) {
          return this.normalize(this._platformStrategy.path(t))
        }

        getState() {
          return this._platformLocation.getState()
        }

        isCurrentPathEqualTo(t, e = "") {
          return this.path() == this.normalize(t + Hc(e))
        }

        normalize(e) {
          return t.stripTrailingSlash(function (t, e) {
            return t && e.startsWith(t) ? e.substring(t.length) : e
          }(this._baseHref, Gc(e)))
        }

        prepareExternalUrl(t) {
          return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
        }

        go(t, e = "", n = null) {
          this._platformStrategy.pushState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Hc(e)), n)
        }

        replaceState(t, e = "", n = null) {
          this._platformStrategy.replaceState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Hc(e)), n)
        }

        forward() {
          this._platformStrategy.forward()
        }

        back() {
          this._platformStrategy.back()
        }

        onUrlChange(t) {
          this._urlChangeListeners.push(t), this.subscribe(t => {
            this._notifyUrlChangeListeners(t.url, t.state)
          })
        }

        _notifyUrlChangeListeners(t = "", e) {
          this._urlChangeListeners.forEach(n => n(t, e))
        }

        subscribe(t, e, n) {
          return this._subject.subscribe({next: t, error: e, complete: n})
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Uc), Gt(Dc))
      }, t.normalizeQueryParams = Hc, t.joinWithSlash = Nc, t.stripTrailingSlash = jc, t.\u0275prov = ct({
        factory: Wc,
        token: t,
        providedIn: "root"
      }), t
    })();

    function Wc() {
      return new qc(Gt(Uc), Gt(Dc))
    }

    function Gc(t) {
      return t.replace(/\/index.html$/, "")
    }

    const Qc = function () {
      var t = {Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5};
      return t[t.Zero] = "Zero", t[t.One] = "One", t[t.Two] = "Two", t[t.Few] = "Few", t[t.Many] = "Many", t[t.Other] = "Other", t
    }();

    class Yc {
    }

    let Zc = (() => {
      class t extends Yc {
        constructor(t) {
          super(), this.locale = t
        }

        getPluralCategory(t, e) {
          switch (function (t) {
            return function (t) {
              const e = function (t) {
                return t.toLowerCase().replace(/_/g, "-")
              }(t);
              let n = el(e);
              if (n) return n;
              const i = e.split("-")[0];
              if (n = el(i), n) return n;
              if ("en" === i) return Ja;
              throw new Error(`Missing locale data for the locale "${t}".`)
            }(t)[nl.PluralCase]
          }(e || this.locale)(t)) {
            case Qc.Zero:
              return "zero";
            case Qc.One:
              return "one";
            case Qc.Two:
              return "two";
            case Qc.Few:
              return "few";
            case Qc.Many:
              return "many";
            default:
              return "other"
          }
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Hl))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();

    class Xc {
      constructor(t, e, n, i) {
        this.$implicit = t, this.ngForOf = e, this.index = n, this.count = i
      }

      get first() {
        return 0 === this.index
      }

      get last() {
        return this.index === this.count - 1
      }

      get even() {
        return this.index % 2 == 0
      }

      get odd() {
        return !this.even
      }
    }

    let Kc = (() => {
      class t {
        constructor(t, e, n) {
          this._viewContainer = t, this._template = e, this._differs = n, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
        }

        set ngForOf(t) {
          this._ngForOf = t, this._ngForOfDirty = !0
        }

        set ngForTrackBy(t) {
          yi() && null != t && "function" != typeof t && console && console.warn && console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`), this._trackByFn = t
        }

        get ngForTrackBy() {
          return this._trackByFn
        }

        set ngForTemplate(t) {
          t && (this._template = t)
        }

        ngDoCheck() {
          if (this._ngForOfDirty) {
            this._ngForOfDirty = !1;
            const n = this._ngForOf;
            if (!this._differ && n) try {
              this._differ = this._differs.find(n).create(this.ngForTrackBy)
            } catch (e) {
              throw new Error(`Cannot find a differ supporting object '${n}' of type '${t = n,t.name||typeof t}'. NgFor only supports binding to Iterables such as Arrays.`)
            }
          }
          var t;
          if (this._differ) {
            const t = this._differ.diff(this._ngForOf);
            t && this._applyChanges(t)
          }
        }

        _applyChanges(t) {
          const e = [];
          t.forEachOperation((t, n, i) => {
            if (null == t.previousIndex) {
              const n = this._viewContainer.createEmbeddedView(this._template, new Xc(null, this._ngForOf, -1, -1), null === i ? void 0 : i),
                r = new Jc(t, n);
              e.push(r)
            } else if (null == i) this._viewContainer.remove(null === n ? void 0 : n); else if (null !== n) {
              const r = this._viewContainer.get(n);
              this._viewContainer.move(r, i);
              const s = new Jc(t, r);
              e.push(s)
            }
          });
          for (let n = 0; n < e.length; n++) this._perViewChange(e[n].view, e[n].record);
          for (let n = 0, i = this._viewContainer.length; n < i; n++) {
            const t = this._viewContainer.get(n);
            t.context.index = n, t.context.count = i, t.context.ngForOf = this._ngForOf
          }
          t.forEachIdentityChange(t => {
            this._viewContainer.get(t.currentIndex).context.$implicit = t.item
          })
        }

        _perViewChange(t, e) {
          t.context.$implicit = e.item
        }

        static ngTemplateContextGuard(t, e) {
          return !0
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(fo(Ba), fo(Va), fo(Na))
      }, t.\u0275dir = ye({
        type: t,
        selectors: [["", "ngFor", "", "ngForOf", ""]],
        inputs: {ngForOf: "ngForOf", ngForTrackBy: "ngForTrackBy", ngForTemplate: "ngForTemplate"}
      }), t
    })();

    class Jc {
      constructor(t, e) {
        this.record = t, this.view = e
      }
    }

    let tu = (() => {
      class t {
        constructor(t, e) {
          this._viewContainer = t, this._context = new eu, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
        }

        set ngIf(t) {
          this._context.$implicit = this._context.ngIf = t, this._updateView()
        }

        set ngIfThen(t) {
          nu("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
        }

        set ngIfElse(t) {
          nu("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
        }

        _updateView() {
          this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
        }

        static ngTemplateContextGuard(t, e) {
          return !0
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(fo(Ba), fo(Va))
      }, t.\u0275dir = ye({
        type: t,
        selectors: [["", "ngIf", ""]],
        inputs: {ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse"}
      }), t
    })();

    class eu {
      constructor() {
        this.$implicit = null, this.ngIf = null
      }
    }

    function nu(t, e) {
      if (e && !e.createEmbeddedView) throw new Error(`${t} must be a TemplateRef, but received '${_t(e)}'.`)
    }

    let iu = (() => {
      class t {
        constructor(t) {
          this._viewContainerRef = t, this._viewRef = null, this.ngTemplateOutletContext = null, this.ngTemplateOutlet = null
        }

        ngOnChanges(t) {
          if (this._shouldRecreateView(t)) {
            const t = this._viewContainerRef;
            this._viewRef && t.remove(t.indexOf(this._viewRef)), this._viewRef = this.ngTemplateOutlet ? t.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext) : null
          } else this._viewRef && this.ngTemplateOutletContext && this._updateExistingContext(this.ngTemplateOutletContext)
        }

        _shouldRecreateView(t) {
          const e = t.ngTemplateOutletContext;
          return !!t.ngTemplateOutlet || e && this._hasContextShapeChanged(e)
        }

        _hasContextShapeChanged(t) {
          const e = Object.keys(t.previousValue || {}), n = Object.keys(t.currentValue || {});
          if (e.length === n.length) {
            for (let t of n) if (-1 === e.indexOf(t)) return !0;
            return !1
          }
          return !0
        }

        _updateExistingContext(t) {
          for (let e of Object.keys(t)) this._viewRef.context[e] = this.ngTemplateOutletContext[e]
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(fo(Ba))
      }, t.\u0275dir = ye({
        type: t,
        selectors: [["", "ngTemplateOutlet", ""]],
        inputs: {ngTemplateOutletContext: "ngTemplateOutletContext", ngTemplateOutlet: "ngTemplateOutlet"},
        features: [ra]
      }), t
    })(), ru = (() => {
      class t {
      }

      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, providers: [{provide: Yc, useClass: Zc}]
      }), t
    })(), su = (() => {
      class t {
      }

      return t.\u0275prov = ct({token: t, providedIn: "root", factory: () => new ou(Gt(Lc), window, Gt(si))}), t
    })();

    class ou {
      constructor(t, e, n) {
        this.document = t, this.window = e, this.errorHandler = n, this.offset = () => [0, 0]
      }

      setOffset(t) {
        this.offset = Array.isArray(t) ? () => t : t
      }

      getScrollPosition() {
        return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
      }

      scrollToPosition(t) {
        this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1])
      }

      scrollToAnchor(t) {
        if (this.supportScrollRestoration()) {
          t = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(t) : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
          try {
            const e = this.document.querySelector("#" + t);
            if (e) return void this.scrollToElement(e);
            const n = this.document.querySelector(`[name='${t}']`);
            if (n) return void this.scrollToElement(n)
          } catch (e) {
            this.errorHandler.handleError(e)
          }
        }
      }

      setHistoryScrollRestoration(t) {
        if (this.supportScrollRestoration()) {
          const e = this.window.history;
          e && e.scrollRestoration && (e.scrollRestoration = t)
        }
      }

      scrollToElement(t) {
        const e = t.getBoundingClientRect(), n = e.left + this.window.pageXOffset, i = e.top + this.window.pageYOffset,
          r = this.offset();
        this.window.scrollTo(n - r[0], i - r[1])
      }

      supportScrollRestoration() {
        try {
          return !!this.window && !!this.window.scrollTo
        } catch (t) {
          return !1
        }
      }
    }

    class au extends class extends class {
    } {
      constructor() {
        super()
      }

      supportsDOMEvents() {
        return !0
      }
    } {
      static makeCurrent() {
        var t;
        t = new au, Ac || (Ac = t)
      }

      getProperty(t, e) {
        return t[e]
      }

      log(t) {
        window.console && window.console.log && window.console.log(t)
      }

      logGroup(t) {
        window.console && window.console.group && window.console.group(t)
      }

      logGroupEnd() {
        window.console && window.console.groupEnd && window.console.groupEnd()
      }

      onAndCancel(t, e, n) {
        return t.addEventListener(e, n, !1), () => {
          t.removeEventListener(e, n, !1)
        }
      }

      dispatchEvent(t, e) {
        t.dispatchEvent(e)
      }

      remove(t) {
        return t.parentNode && t.parentNode.removeChild(t), t
      }

      getValue(t) {
        return t.value
      }

      createElement(t, e) {
        return (e = e || this.getDefaultDocument()).createElement(t)
      }

      createHtmlDocument() {
        return document.implementation.createHTMLDocument("fakeTitle")
      }

      getDefaultDocument() {
        return document
      }

      isElementNode(t) {
        return t.nodeType === Node.ELEMENT_NODE
      }

      isShadowRoot(t) {
        return t instanceof DocumentFragment
      }

      getGlobalEventTarget(t, e) {
        return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
      }

      getHistory() {
        return window.history
      }

      getLocation() {
        return window.location
      }

      getBaseHref(t) {
        const e = cu || (cu = document.querySelector("base"), cu) ? cu.getAttribute("href") : null;
        return null == e ? null : (n = e, lu || (lu = document.createElement("a")), lu.setAttribute("href", n), "/" === lu.pathname.charAt(0) ? lu.pathname : "/" + lu.pathname);
        var n
      }

      resetBaseElement() {
        cu = null
      }

      getUserAgent() {
        return window.navigator.userAgent
      }

      performanceNow() {
        return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
      }

      supportsCookies() {
        return !0
      }

      getCookie(t) {
        return function (t, e) {
          e = encodeURIComponent(e);
          for (const n of t.split(";")) {
            const t = n.indexOf("="), [i, r] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
            if (i.trim() === e) return decodeURIComponent(r)
          }
          return null
        }(document.cookie, t)
      }
    }

    let lu, cu = null;
    const uu = new Nt("TRANSITION_ID"), hu = [{
      provide: Ll, useFactory: function (t, e, n) {
        return () => {
          n.get(Dl).donePromise.then(() => {
            const n = Oc();
            Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e => e.getAttribute("ng-transition") === t).forEach(t => n.remove(t))
          })
        }
      }, deps: [uu, Lc, Zs], multi: !0
    }];

    class du {
      static init() {
        var t;
        t = new du, uc = t
      }

      addToWindow(t) {
        Ot.getAngularTestability = (e, n = !0) => {
          const i = t.findTestabilityInTree(e, n);
          if (null == i) throw new Error("Could not find testability for element.");
          return i
        }, Ot.getAllAngularTestabilities = () => t.getAllTestabilities(), Ot.getAllAngularRootElements = () => t.getAllRootElements(), Ot.frameworkStabilizers || (Ot.frameworkStabilizers = []), Ot.frameworkStabilizers.push(t => {
          const e = Ot.getAllAngularTestabilities();
          let n = e.length, i = !1;
          const r = function (e) {
            i = i || e, n--, 0 == n && t(i)
          };
          e.forEach((function (t) {
            t.whenStable(r)
          }))
        })
      }

      findTestabilityInTree(t, e, n) {
        if (null == e) return null;
        const i = t.getTestability(e);
        return null != i ? i : n ? Oc().isShadowRoot(e) ? this.findTestabilityInTree(t, e.host, !0) : this.findTestabilityInTree(t, e.parentElement, !0) : null
      }
    }

    const fu = new Nt("EventManagerPlugins");
    let pu = (() => {
      class t {
        constructor(t, e) {
          this._zone = e, this._eventNameToPlugin = new Map, t.forEach(t => t.manager = this), this._plugins = t.slice().reverse()
        }

        addEventListener(t, e, n) {
          return this._findPluginFor(e).addEventListener(t, e, n)
        }

        addGlobalEventListener(t, e, n) {
          return this._findPluginFor(e).addGlobalEventListener(t, e, n)
        }

        getZone() {
          return this._zone
        }

        _findPluginFor(t) {
          const e = this._eventNameToPlugin.get(t);
          if (e) return e;
          const n = this._plugins;
          for (let i = 0; i < n.length; i++) {
            const e = n[i];
            if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e
          }
          throw new Error("No event manager plugin found for event " + t)
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(fu), Gt(Kl))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();

    class gu {
      constructor(t) {
        this._doc = t
      }

      addGlobalEventListener(t, e, n) {
        const i = Oc().getGlobalEventTarget(this._doc, t);
        if (!i) throw new Error(`Unsupported event target ${i} for event ${e}`);
        return this.addEventListener(i, e, n)
      }
    }

    let mu = (() => {
      class t {
        constructor() {
          this._stylesSet = new Set
        }

        addStyles(t) {
          const e = new Set;
          t.forEach(t => {
            this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t))
          }), this.onStylesAdded(e)
        }

        onStylesAdded(t) {
        }

        getAllStyles() {
          return Array.from(this._stylesSet)
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })(), yu = (() => {
      class t extends mu {
        constructor(t) {
          super(), this._doc = t, this._hostNodes = new Set, this._styleNodes = new Set, this._hostNodes.add(t.head)
        }

        _addStylesToHost(t, e) {
          t.forEach(t => {
            const n = this._doc.createElement("style");
            n.textContent = t, this._styleNodes.add(e.appendChild(n))
          })
        }

        addHost(t) {
          this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t)
        }

        removeHost(t) {
          this._hostNodes.delete(t)
        }

        onStylesAdded(t) {
          this._hostNodes.forEach(e => this._addStylesToHost(t, e))
        }

        ngOnDestroy() {
          this._styleNodes.forEach(t => Oc().remove(t))
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Lc))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();
    const vu = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    }, _u = /%COMP%/g;

    function wu(t, e, n) {
      for (let i = 0; i < e.length; i++) {
        let r = e[i];
        Array.isArray(r) ? wu(t, r, n) : (r = r.replace(_u, t), n.push(r))
      }
      return n
    }

    function bu(t) {
      return e => {
        if ("__ngUnwrap__" === e) return t;
        !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
      }
    }

    let xu = (() => {
      class t {
        constructor(t, e, n) {
          this.eventManager = t, this.sharedStylesHost = e, this.appId = n, this.rendererByCompId = new Map, this.defaultRenderer = new Su(t)
        }

        createRenderer(t, e) {
          if (!t || !e) return this.defaultRenderer;
          switch (e.encapsulation) {
            case ae.Emulated: {
              let n = this.rendererByCompId.get(e.id);
              return n || (n = new Tu(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n
            }
            case ae.Native:
            case ae.ShadowDom:
              return new Cu(this.eventManager, this.sharedStylesHost, t, e);
            default:
              if (!this.rendererByCompId.has(e.id)) {
                const t = wu(e.id, e.styles, []);
                this.sharedStylesHost.addStyles(t), this.rendererByCompId.set(e.id, this.defaultRenderer)
              }
              return this.defaultRenderer
          }
        }

        begin() {
        }

        end() {
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(pu), Gt(yu), Gt(Ml))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();

    class Su {
      constructor(t) {
        this.eventManager = t, this.data = Object.create(null)
      }

      destroy() {
      }

      createElement(t, e) {
        return e ? document.createElementNS(vu[e] || e, t) : document.createElement(t)
      }

      createComment(t) {
        return document.createComment(t)
      }

      createText(t) {
        return document.createTextNode(t)
      }

      appendChild(t, e) {
        t.appendChild(e)
      }

      insertBefore(t, e, n) {
        t && t.insertBefore(e, n)
      }

      removeChild(t, e) {
        t && t.removeChild(e)
      }

      selectRootElement(t, e) {
        let n = "string" == typeof t ? document.querySelector(t) : t;
        if (!n) throw new Error(`The selector "${t}" did not match any elements`);
        return e || (n.textContent = ""), n
      }

      parentNode(t) {
        return t.parentNode
      }

      nextSibling(t) {
        return t.nextSibling
      }

      setAttribute(t, e, n, i) {
        if (i) {
          e = i + ":" + e;
          const r = vu[i];
          r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n)
        } else t.setAttribute(e, n)
      }

      removeAttribute(t, e, n) {
        if (n) {
          const i = vu[n];
          i ? t.removeAttributeNS(i, e) : t.removeAttribute(`${n}:${e}`)
        } else t.removeAttribute(e)
      }

      addClass(t, e) {
        t.classList.add(e)
      }

      removeClass(t, e) {
        t.classList.remove(e)
      }

      setStyle(t, e, n, i) {
        i & ba.DashCase ? t.style.setProperty(e, n, i & ba.Important ? "important" : "") : t.style[e] = n
      }

      removeStyle(t, e, n) {
        n & ba.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
      }

      setProperty(t, e, n) {
        t[e] = n
      }

      setValue(t, e) {
        t.nodeValue = e
      }

      listen(t, e, n) {
        return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, bu(n)) : this.eventManager.addEventListener(t, e, bu(n))
      }
    }

    class Tu extends Su {
      constructor(t, e, n, i) {
        super(t), this.component = n;
        const r = wu(i + "-" + n.id, n.styles, []);
        e.addStyles(r), this.contentAttr = "_ngcontent-%COMP%".replace(_u, i + "-" + n.id), this.hostAttr = function (t) {
          return "_nghost-%COMP%".replace(_u, t)
        }(i + "-" + n.id)
      }

      applyToHost(t) {
        super.setAttribute(t, this.hostAttr, "")
      }

      createElement(t, e) {
        const n = super.createElement(t, e);
        return super.setAttribute(n, this.contentAttr, ""), n
      }
    }

    class Cu extends Su {
      constructor(t, e, n, i) {
        super(t), this.sharedStylesHost = e, this.hostEl = n, this.component = i, this.shadowRoot = i.encapsulation === ae.ShadowDom ? n.attachShadow({mode: "open"}) : n.createShadowRoot(), this.sharedStylesHost.addHost(this.shadowRoot);
        const r = wu(i.id, i.styles, []);
        for (let s = 0; s < r.length; s++) {
          const t = document.createElement("style");
          t.textContent = r[s], this.shadowRoot.appendChild(t)
        }
      }

      nodeOrShadowRoot(t) {
        return t === this.hostEl ? this.shadowRoot : t
      }

      destroy() {
        this.sharedStylesHost.removeHost(this.shadowRoot)
      }

      appendChild(t, e) {
        return super.appendChild(this.nodeOrShadowRoot(t), e)
      }

      insertBefore(t, e, n) {
        return super.insertBefore(this.nodeOrShadowRoot(t), e, n)
      }

      removeChild(t, e) {
        return super.removeChild(this.nodeOrShadowRoot(t), e)
      }

      parentNode(t) {
        return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))
      }
    }

    let ku = (() => {
      class t extends gu {
        constructor(t) {
          super(t)
        }

        supports(t) {
          return !0
        }

        addEventListener(t, e, n) {
          return t.addEventListener(e, n, !1), () => this.removeEventListener(t, e, n)
        }

        removeEventListener(t, e, n) {
          return t.removeEventListener(e, n)
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Lc))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();
    const Eu = ["alt", "control", "meta", "shift"], Au = {
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
    }, Ou = {
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
    }, Lu = {alt: t => t.altKey, control: t => t.ctrlKey, meta: t => t.metaKey, shift: t => t.shiftKey};
    let Du = (() => {
      class t extends gu {
        constructor(t) {
          super(t)
        }

        supports(e) {
          return null != t.parseEventName(e)
        }

        addEventListener(e, n, i) {
          const r = t.parseEventName(n), s = t.eventCallback(r.fullKey, i, this.manager.getZone());
          return this.manager.getZone().runOutsideAngular(() => Oc().onAndCancel(e, r.domEventName, s))
        }

        static parseEventName(e) {
          const n = e.toLowerCase().split("."), i = n.shift();
          if (0 === n.length || "keydown" !== i && "keyup" !== i) return null;
          const r = t._normalizeKey(n.pop());
          let s = "";
          if (Eu.forEach(t => {
            const e = n.indexOf(t);
            e > -1 && (n.splice(e, 1), s += t + ".")
          }), s += r, 0 != n.length || 0 === r.length) return null;
          const o = {};
          return o.domEventName = i, o.fullKey = s, o
        }

        static getEventFullKey(t) {
          let e = "", n = function (t) {
            let e = t.key;
            if (null == e) {
              if (e = t.keyIdentifier, null == e) return "Unidentified";
              e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && Ou.hasOwnProperty(e) && (e = Ou[e]))
            }
            return Au[e] || e
          }(t);
          return n = n.toLowerCase(), " " === n ? n = "space" : "." === n && (n = "dot"), Eu.forEach(i => {
            i != n && (0, Lu[i])(t) && (e += i + ".")
          }), e += n, e
        }

        static eventCallback(e, n, i) {
          return r => {
            t.getEventFullKey(r) === e && i.runGuarded(() => n(r))
          }
        }

        static _normalizeKey(t) {
          switch (t) {
            case"esc":
              return "escape";
            default:
              return t
          }
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Lc))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })(), Mu = (() => {
      class t {
      }

      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275prov = ct({
        factory: function () {
          return Gt(Pu)
        }, token: t, providedIn: "root"
      }), t
    })(), Pu = (() => {
      class t extends Mu {
        constructor(t) {
          super(), this._doc = t
        }

        sanitize(t, e) {
          if (null == e) return null;
          switch (t) {
            case Ui.NONE:
              return e;
            case Ui.HTML:
              return fi(e, "HTML") ? di(e) : ji(this._doc, String(e));
            case Ui.STYLE:
              return fi(e, "Style") ? di(e) : zi(e);
            case Ui.SCRIPT:
              if (fi(e, "Script")) return di(e);
              throw new Error("unsafe value used in a script context");
            case Ui.URL:
              return pi(e), fi(e, "URL") ? di(e) : bi(String(e));
            case Ui.RESOURCE_URL:
              if (fi(e, "ResourceURL")) return di(e);
              throw new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
            default:
              throw new Error(`Unexpected SecurityContext ${t} (see http://g.co/ng/security#xss)`)
          }
        }

        bypassSecurityTrustHtml(t) {
          return new ai(t)
        }

        bypassSecurityTrustStyle(t) {
          return new li(t)
        }

        bypassSecurityTrustScript(t) {
          return new ci(t)
        }

        bypassSecurityTrustUrl(t) {
          return new ui(t)
        }

        bypassSecurityTrustResourceUrl(t) {
          return new hi(t)
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Lc))
      }, t.\u0275prov = ct({
        factory: function () {
          return t = Gt(jt), new Pu(t.get(Lc));
          var t
        }, token: t, providedIn: "root"
      }), t
    })();
    const Ru = pc(Cc, "browser", [{provide: Il, useValue: "browser"}, {
      provide: Fl, useValue: function () {
        au.makeCurrent(), du.init()
      }, multi: !0
    }, {
      provide: Lc, useFactory: function () {
        return function (t) {
          Ae = t
        }(document), document
      }, deps: []
    }]), Fu = [[], {provide: Is, useValue: "root"}, {
      provide: si, useFactory: function () {
        return new si
      }, deps: []
    }, {provide: fu, useClass: ku, multi: !0, deps: [Lc, Kl, Il]}, {
      provide: fu,
      useClass: Du,
      multi: !0,
      deps: [Lc]
    }, [], {provide: xu, useClass: xu, deps: [pu, yu, Ml]}, {provide: wa, useExisting: xu}, {
      provide: mu,
      useExisting: yu
    }, {provide: yu, useClass: yu, deps: [Lc]}, {provide: oc, useClass: oc, deps: [Kl]}, {
      provide: pu,
      useClass: pu,
      deps: [fu, Kl]
    }, []];
    let Iu = (() => {
      class t {
        constructor(t) {
          if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
        }

        static withServerTransition(e) {
          return {ngModule: t, providers: [{provide: Ml, useValue: e.appId}, {provide: uu, useExisting: Ml}, hu]}
        }
      }

      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)(Gt(t, 12))
        }, providers: Fu, imports: [ru, Ec]
      }), t
    })();
    "undefined" != typeof window && window;

    class Nu {
    }

    function ju(t, e) {
      return {type: 7, name: t, definitions: e, options: {}}
    }

    function Hu(t, e = null) {
      return {type: 4, styles: e, timings: t}
    }

    function Uu(t, e = null) {
      return {type: 2, steps: t, options: e}
    }

    function $u(t) {
      return {type: 6, styles: t, offset: null}
    }

    function Vu(t, e, n = null) {
      return {type: 1, expr: t, animation: e, options: n}
    }

    function zu(t) {
      Promise.resolve(null).then(t)
    }

    class Bu {
      constructor(t = 0, e = 0) {
        this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this.parentPlayer = null, this.totalTime = t + e
      }

      _onFinish() {
        this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = [])
      }

      onStart(t) {
        this._onStartFns.push(t)
      }

      onDone(t) {
        this._onDoneFns.push(t)
      }

      onDestroy(t) {
        this._onDestroyFns.push(t)
      }

      hasStarted() {
        return this._started
      }

      init() {
      }

      play() {
        this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
      }

      triggerMicrotask() {
        zu(() => this._onFinish())
      }

      _onStart() {
        this._onStartFns.forEach(t => t()), this._onStartFns = []
      }

      pause() {
      }

      restart() {
      }

      finish() {
        this._onFinish()
      }

      destroy() {
        this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = [])
      }

      reset() {
      }

      setPosition(t) {
      }

      getPosition() {
        return 0
      }

      triggerCallback(t) {
        const e = "start" == t ? this._onStartFns : this._onDoneFns;
        e.forEach(t => t()), e.length = 0
      }
    }

    class qu {
      constructor(t) {
        this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = t;
        let e = 0, n = 0, i = 0;
        const r = this.players.length;
        0 == r ? zu(() => this._onFinish()) : this.players.forEach(t => {
          t.onDone(() => {
            ++e == r && this._onFinish()
          }), t.onDestroy(() => {
            ++n == r && this._onDestroy()
          }), t.onStart(() => {
            ++i == r && this._onStart()
          })
        }), this.totalTime = this.players.reduce((t, e) => Math.max(t, e.totalTime), 0)
      }

      _onFinish() {
        this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = [])
      }

      init() {
        this.players.forEach(t => t.init())
      }

      onStart(t) {
        this._onStartFns.push(t)
      }

      _onStart() {
        this.hasStarted() || (this._started = !0, this._onStartFns.forEach(t => t()), this._onStartFns = [])
      }

      onDone(t) {
        this._onDoneFns.push(t)
      }

      onDestroy(t) {
        this._onDestroyFns.push(t)
      }

      hasStarted() {
        return this._started
      }

      play() {
        this.parentPlayer || this.init(), this._onStart(), this.players.forEach(t => t.play())
      }

      pause() {
        this.players.forEach(t => t.pause())
      }

      restart() {
        this.players.forEach(t => t.restart())
      }

      finish() {
        this._onFinish(), this.players.forEach(t => t.finish())
      }

      destroy() {
        this._onDestroy()
      }

      _onDestroy() {
        this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(t => t.destroy()), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = [])
      }

      reset() {
        this.players.forEach(t => t.reset()), this._destroyed = !1, this._finished = !1, this._started = !1
      }

      setPosition(t) {
        const e = t * this.totalTime;
        this.players.forEach(t => {
          const n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
          t.setPosition(n)
        })
      }

      getPosition() {
        let t = 0;
        return this.players.forEach(e => {
          const n = e.getPosition();
          t = Math.min(n, t)
        }), t
      }

      beforeDestroy() {
        this.players.forEach(t => {
          t.beforeDestroy && t.beforeDestroy()
        })
      }

      triggerCallback(t) {
        const e = "start" == t ? this._onStartFns : this._onDoneFns;
        e.forEach(t => t()), e.length = 0
      }
    }

    function Wu() {
      return "undefined" != typeof process && "[object process]" === {}.toString.call(process)
    }

    function Gu(t) {
      switch (t.length) {
        case 0:
          return new Bu;
        case 1:
          return t[0];
        default:
          return new qu(t)
      }
    }

    function Qu(t, e, n, i, r = {}, s = {}) {
      const o = [], a = [];
      let l = -1, c = null;
      if (i.forEach(t => {
        const n = t.offset, i = n == l, u = i && c || {};
        Object.keys(t).forEach(n => {
          let i = n, a = t[n];
          if ("offset" !== n) switch (i = e.normalizePropertyName(i, o), a) {
            case"!":
              a = r[n];
              break;
            case"*":
              a = s[n];
              break;
            default:
              a = e.normalizeStyleValue(n, i, a, o)
          }
          u[i] = a
        }), i || a.push(u), c = u, l = n
      }), o.length) {
        const t = "\n - ";
        throw new Error(`Unable to animate due to the following errors:${t}${o.join(t)}`)
      }
      return a
    }

    function Yu(t, e, n, i) {
      switch (e) {
        case"start":
          t.onStart(() => i(n && Zu(n, "start", t)));
          break;
        case"done":
          t.onDone(() => i(n && Zu(n, "done", t)));
          break;
        case"destroy":
          t.onDestroy(() => i(n && Zu(n, "destroy", t)))
      }
    }

    function Zu(t, e, n) {
      const i = n.totalTime,
        r = Xu(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, null == i ? t.totalTime : i, !!n.disabled),
        s = t._data;
      return null != s && (r._data = s), r
    }

    function Xu(t, e, n, i, r = "", s = 0, o) {
      return {element: t, triggerName: e, fromState: n, toState: i, phaseName: r, totalTime: s, disabled: !!o}
    }

    function Ku(t, e, n) {
      let i;
      return t instanceof Map ? (i = t.get(e), i || t.set(e, i = n)) : (i = t[e], i || (i = t[e] = n)), i
    }

    function Ju(t) {
      const e = t.indexOf(":");
      return [t.substring(1, e), t.substr(e + 1)]
    }

    let th = (t, e) => !1, eh = (t, e) => !1, nh = (t, e, n) => [];
    const ih = Wu();
    (ih || "undefined" != typeof Element) && (th = (t, e) => t.contains(e), eh = (() => {
      if (ih || Element.prototype.matches) return (t, e) => t.matches(e);
      {
        const t = Element.prototype,
          e = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector;
        return e ? (t, n) => e.apply(t, [n]) : eh
      }
    })(), nh = (t, e, n) => {
      let i = [];
      if (n) i.push(...t.querySelectorAll(e)); else {
        const n = t.querySelector(e);
        n && i.push(n)
      }
      return i
    });
    let rh = null, sh = !1;

    function oh(t) {
      rh || (rh = ("undefined" != typeof document ? document.body : null) || {}, sh = !!rh.style && "WebkitAppearance" in rh.style);
      let e = !0;
      return rh.style && !function (t) {
        return "ebkit" == t.substring(1, 6)
      }(t) && (e = t in rh.style, !e && sh) && (e = "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in rh.style), e
    }

    const ah = eh, lh = th, ch = nh;

    function uh(t) {
      const e = {};
      return Object.keys(t).forEach(n => {
        const i = n.replace(/([a-z])([A-Z])/g, "$1-$2");
        e[i] = t[n]
      }), e
    }

    let hh = (() => {
      class t {
        validateStyleProperty(t) {
          return oh(t)
        }

        matchesElement(t, e) {
          return ah(t, e)
        }

        containsElement(t, e) {
          return lh(t, e)
        }

        query(t, e, n) {
          return ch(t, e, n)
        }

        computeStyle(t, e, n) {
          return n || ""
        }

        animate(t, e, n, i, r, s = [], o) {
          return new Bu(n, i)
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })(), dh = (() => {
      class t {
      }

      return t.NOOP = new hh, t
    })();

    function fh(t) {
      if ("number" == typeof t) return t;
      const e = t.match(/^(-?[\.\d]+)(m?s)/);
      return !e || e.length < 2 ? 0 : ph(parseFloat(e[1]), e[2])
    }

    function ph(t, e) {
      switch (e) {
        case"s":
          return 1e3 * t;
        default:
          return t
      }
    }

    function gh(t, e, n) {
      return t.hasOwnProperty("duration") ? t : function (t, e, n) {
        let i, r = 0, s = "";
        if ("string" == typeof t) {
          const n = t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
          if (null === n) return e.push(`The provided timing value "${t}" is invalid.`), {
            duration: 0,
            delay: 0,
            easing: ""
          };
          i = ph(parseFloat(n[1]), n[2]);
          const o = n[3];
          null != o && (r = ph(parseFloat(o), n[4]));
          const a = n[5];
          a && (s = a)
        } else i = t;
        if (!n) {
          let n = !1, s = e.length;
          i < 0 && (e.push("Duration values below 0 are not allowed for this animation step."), n = !0), r < 0 && (e.push("Delay values below 0 are not allowed for this animation step."), n = !0), n && e.splice(s, 0, `The provided timing value "${t}" is invalid.`)
        }
        return {duration: i, delay: r, easing: s}
      }(t, e, n)
    }

    function mh(t, e = {}) {
      return Object.keys(t).forEach(n => {
        e[n] = t[n]
      }), e
    }

    function yh(t, e, n = {}) {
      if (e) for (let i in t) n[i] = t[i]; else mh(t, n);
      return n
    }

    function vh(t, e, n) {
      return n ? e + ":" + n + ";" : ""
    }

    function _h(t) {
      let e = "";
      for (let n = 0; n < t.style.length; n++) {
        const i = t.style.item(n);
        e += vh(0, i, t.style.getPropertyValue(i))
      }
      for (const n in t.style) t.style.hasOwnProperty(n) && !n.startsWith("_") && (e += vh(0, n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), t.style[n]));
      t.setAttribute("style", e)
    }

    function wh(t, e, n) {
      t.style && (Object.keys(e).forEach(i => {
        const r = Ah(i);
        n && !n.hasOwnProperty(i) && (n[i] = t.style[r]), t.style[r] = e[i]
      }), Wu() && _h(t))
    }

    function bh(t, e) {
      t.style && (Object.keys(e).forEach(e => {
        const n = Ah(e);
        t.style[n] = ""
      }), Wu() && _h(t))
    }

    function xh(t) {
      return Array.isArray(t) ? 1 == t.length ? t[0] : Uu(t) : t
    }

    const Sh = new RegExp("{{\\s*(.+?)\\s*}}", "g");

    function Th(t) {
      let e = [];
      if ("string" == typeof t) {
        let n;
        for (; n = Sh.exec(t);) e.push(n[1]);
        Sh.lastIndex = 0
      }
      return e
    }

    function Ch(t, e, n) {
      const i = t.toString(), r = i.replace(Sh, (t, i) => {
        let r = e[i];
        return e.hasOwnProperty(i) || (n.push("Please provide a value for the animation param " + i), r = ""), r.toString()
      });
      return r == i ? t : r
    }

    function kh(t) {
      const e = [];
      let n = t.next();
      for (; !n.done;) e.push(n.value), n = t.next();
      return e
    }

    const Eh = /-+([a-z0-9])/g;

    function Ah(t) {
      return t.replace(Eh, (...t) => t[1].toUpperCase())
    }

    function Oh(t, e) {
      return 0 === t || 0 === e
    }

    function Lh(t, e, n) {
      const i = Object.keys(n);
      if (i.length && e.length) {
        let s = e[0], o = [];
        if (i.forEach(t => {
          s.hasOwnProperty(t) || o.push(t), s[t] = n[t]
        }), o.length) for (var r = 1; r < e.length; r++) {
          let n = e[r];
          o.forEach((function (e) {
            n[e] = Mh(t, e)
          }))
        }
      }
      return e
    }

    function Dh(t, e, n) {
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

    function Mh(t, e) {
      return window.getComputedStyle(t)[e]
    }

    function Ph(t, e) {
      const n = [];
      return "string" == typeof t ? t.split(/\s*,\s*/).forEach(t => function (t, e, n) {
        if (":" == t[0]) {
          const i = function (t, e) {
            switch (t) {
              case":enter":
                return "void => *";
              case":leave":
                return "* => void";
              case":increment":
                return (t, e) => parseFloat(e) > parseFloat(t);
              case":decrement":
                return (t, e) => parseFloat(e) < parseFloat(t);
              default:
                return e.push(`The transition alias value "${t}" is not supported`), "* => *"
            }
          }(t, n);
          if ("function" == typeof i) return void e.push(i);
          t = i
        }
        const i = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
        if (null == i || i.length < 4) return n.push(`The provided transition expression "${t}" is not supported`), e;
        const r = i[1], s = i[2], o = i[3];
        e.push(Ih(r, o)), "<" != s[0] || "*" == r && "*" == o || e.push(Ih(o, r))
      }(t, n, e)) : n.push(t), n
    }

    const Rh = new Set(["true", "1"]), Fh = new Set(["false", "0"]);

    function Ih(t, e) {
      const n = Rh.has(t) || Fh.has(t), i = Rh.has(e) || Fh.has(e);
      return (r, s) => {
        let o = "*" == t || t == r, a = "*" == e || e == s;
        return !o && n && "boolean" == typeof r && (o = r ? Rh.has(t) : Fh.has(t)), !a && i && "boolean" == typeof s && (a = s ? Rh.has(e) : Fh.has(e)), o && a
      }
    }

    const Nh = new RegExp("s*:selfs*,?", "g");

    function jh(t, e, n) {
      return new Hh(t).build(e, n)
    }

    class Hh {
      constructor(t) {
        this._driver = t
      }

      build(t, e) {
        const n = new Uh(e);
        return this._resetContextStyleTimingState(n), Dh(this, xh(t), n)
      }

      _resetContextStyleTimingState(t) {
        t.currentQuerySelector = "", t.collectedStyles = {}, t.collectedStyles[""] = {}, t.currentTime = 0
      }

      visitTrigger(t, e) {
        let n = e.queryCount = 0, i = e.depCount = 0;
        const r = [], s = [];
        return "@" == t.name.charAt(0) && e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"), t.definitions.forEach(t => {
          if (this._resetContextStyleTimingState(e), 0 == t.type) {
            const n = t, i = n.name;
            i.toString().split(/\s*,\s*/).forEach(t => {
              n.name = t, r.push(this.visitState(n, e))
            }), n.name = i
          } else if (1 == t.type) {
            const r = this.visitTransition(t, e);
            n += r.queryCount, i += r.depCount, s.push(r)
          } else e.errors.push("only state() and transition() definitions can sit inside of a trigger()")
        }), {type: 7, name: t.name, states: r, transitions: s, queryCount: n, depCount: i, options: null}
      }

      visitState(t, e) {
        const n = this.visitStyle(t.styles, e), i = t.options && t.options.params || null;
        if (n.containsDynamicStyles) {
          const r = new Set, s = i || {};
          if (n.styles.forEach(t => {
            if ($h(t)) {
              const e = t;
              Object.keys(e).forEach(t => {
                Th(e[t]).forEach(t => {
                  s.hasOwnProperty(t) || r.add(t)
                })
              })
            }
          }), r.size) {
            const n = kh(r.values());
            e.errors.push(`state("${t.name}", ...) must define default values for all the following style substitutions: ${n.join(", ")}`)
          }
        }
        return {type: 0, name: t.name, style: n, options: i ? {params: i} : null}
      }

      visitTransition(t, e) {
        e.queryCount = 0, e.depCount = 0;
        const n = Dh(this, xh(t.animation), e);
        return {
          type: 1,
          matchers: Ph(t.expr, e.errors),
          animation: n,
          queryCount: e.queryCount,
          depCount: e.depCount,
          options: Vh(t.options)
        }
      }

      visitSequence(t, e) {
        return {type: 2, steps: t.steps.map(t => Dh(this, t, e)), options: Vh(t.options)}
      }

      visitGroup(t, e) {
        const n = e.currentTime;
        let i = 0;
        const r = t.steps.map(t => {
          e.currentTime = n;
          const r = Dh(this, t, e);
          return i = Math.max(i, e.currentTime), r
        });
        return e.currentTime = i, {type: 3, steps: r, options: Vh(t.options)}
      }

      visitAnimate(t, e) {
        const n = function (t, e) {
          let n = null;
          if (t.hasOwnProperty("duration")) n = t; else if ("number" == typeof t) return zh(gh(t, e).duration, 0, "");
          const i = t;
          if (i.split(/\s+/).some(t => "{" == t.charAt(0) && "{" == t.charAt(1))) {
            const t = zh(0, 0, "");
            return t.dynamic = !0, t.strValue = i, t
          }
          return n = n || gh(i, e), zh(n.duration, n.delay, n.easing)
        }(t.timings, e.errors);
        let i;
        e.currentAnimateTimings = n;
        let r = t.styles ? t.styles : $u({});
        if (5 == r.type) i = this.visitKeyframes(r, e); else {
          let r = t.styles, s = !1;
          if (!r) {
            s = !0;
            const t = {};
            n.easing && (t.easing = n.easing), r = $u(t)
          }
          e.currentTime += n.duration + n.delay;
          const o = this.visitStyle(r, e);
          o.isEmptyStep = s, i = o
        }
        return e.currentAnimateTimings = null, {type: 4, timings: n, style: i, options: null}
      }

      visitStyle(t, e) {
        const n = this._makeStyleAst(t, e);
        return this._validateStyleAst(n, e), n
      }

      _makeStyleAst(t, e) {
        const n = [];
        Array.isArray(t.styles) ? t.styles.forEach(t => {
          "string" == typeof t ? "*" == t ? n.push(t) : e.errors.push(`The provided style string value ${t} is not allowed.`) : n.push(t)
        }) : n.push(t.styles);
        let i = !1, r = null;
        return n.forEach(t => {
          if ($h(t)) {
            const e = t, n = e.easing;
            if (n && (r = n, delete e.easing), !i) for (let t in e) if (e[t].toString().indexOf("{{") >= 0) {
              i = !0;
              break
            }
          }
        }), {type: 6, styles: n, easing: r, offset: t.offset, containsDynamicStyles: i, options: null}
      }

      _validateStyleAst(t, e) {
        const n = e.currentAnimateTimings;
        let i = e.currentTime, r = e.currentTime;
        n && r > 0 && (r -= n.duration + n.delay), t.styles.forEach(t => {
          "string" != typeof t && Object.keys(t).forEach(n => {
            if (!this._driver.validateStyleProperty(n)) return void e.errors.push(`The provided animation property "${n}" is not a supported CSS property for animations`);
            const s = e.collectedStyles[e.currentQuerySelector], o = s[n];
            let a = !0;
            o && (r != i && r >= o.startTime && i <= o.endTime && (e.errors.push(`The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${r}ms" and "${i}ms"`), a = !1), r = o.startTime), a && (s[n] = {
              startTime: r,
              endTime: i
            }), e.options && function (t, e, n) {
              const i = e.params || {}, r = Th(t);
              r.length && r.forEach(t => {
                i.hasOwnProperty(t) || n.push(`Unable to resolve the local animation param ${t} in the given list of values`)
              })
            }(t[n], e.options, e.errors)
          })
        })
      }

      visitKeyframes(t, e) {
        const n = {type: 5, styles: [], options: null};
        if (!e.currentAnimateTimings) return e.errors.push("keyframes() must be placed inside of a call to animate()"), n;
        let i = 0;
        const r = [];
        let s = !1, o = !1, a = 0;
        const l = t.steps.map(t => {
          const n = this._makeStyleAst(t, e);
          let l = null != n.offset ? n.offset : function (t) {
            if ("string" == typeof t) return null;
            let e = null;
            if (Array.isArray(t)) t.forEach(t => {
              if ($h(t) && t.hasOwnProperty("offset")) {
                const n = t;
                e = parseFloat(n.offset), delete n.offset
              }
            }); else if ($h(t) && t.hasOwnProperty("offset")) {
              const n = t;
              e = parseFloat(n.offset), delete n.offset
            }
            return e
          }(n.styles), c = 0;
          return null != l && (i++, c = n.offset = l), o = o || c < 0 || c > 1, s = s || c < a, a = c, r.push(c), n
        });
        o && e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), s && e.errors.push("Please ensure that all keyframe offsets are in order");
        const c = t.steps.length;
        let u = 0;
        i > 0 && i < c ? e.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == i && (u = 1 / (c - 1));
        const h = c - 1, d = e.currentTime, f = e.currentAnimateTimings, p = f.duration;
        return l.forEach((t, i) => {
          const s = u > 0 ? i == h ? 1 : u * i : r[i], o = s * p;
          e.currentTime = d + f.delay + o, f.duration = o, this._validateStyleAst(t, e), t.offset = s, n.styles.push(t)
        }), n
      }

      visitReference(t, e) {
        return {type: 8, animation: Dh(this, xh(t.animation), e), options: Vh(t.options)}
      }

      visitAnimateChild(t, e) {
        return e.depCount++, {type: 9, options: Vh(t.options)}
      }

      visitAnimateRef(t, e) {
        return {type: 10, animation: this.visitReference(t.animation, e), options: Vh(t.options)}
      }

      visitQuery(t, e) {
        const n = e.currentQuerySelector, i = t.options || {};
        e.queryCount++, e.currentQuery = t;
        const [r, s] = function (t) {
          const e = !!t.split(/\s*,\s*/).find(t => ":self" == t);
          return e && (t = t.replace(Nh, "")), [t = t.replace(/@\*/g, ".ng-trigger").replace(/@\w+/g, t => ".ng-trigger-" + t.substr(1)).replace(/:animating/g, ".ng-animating"), e]
        }(t.selector);
        e.currentQuerySelector = n.length ? n + " " + r : r, Ku(e.collectedStyles, e.currentQuerySelector, {});
        const o = Dh(this, xh(t.animation), e);
        return e.currentQuery = null, e.currentQuerySelector = n, {
          type: 11,
          selector: r,
          limit: i.limit || 0,
          optional: !!i.optional,
          includeSelf: s,
          animation: o,
          originalSelector: t.selector,
          options: Vh(t.options)
        }
      }

      visitStagger(t, e) {
        e.currentQuery || e.errors.push("stagger() can only be used inside of query()");
        const n = "full" === t.timings ? {duration: 0, delay: 0, easing: "full"} : gh(t.timings, e.errors, !0);
        return {type: 12, animation: Dh(this, xh(t.animation), e), timings: n, options: null}
      }
    }

    class Uh {
      constructor(t) {
        this.errors = t, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null
      }
    }

    function $h(t) {
      return !Array.isArray(t) && "object" == typeof t
    }

    function Vh(t) {
      var e;
      return t ? (t = mh(t)).params && (t.params = (e = t.params) ? mh(e) : null) : t = {}, t
    }

    function zh(t, e, n) {
      return {duration: t, delay: e, easing: n}
    }

    function Bh(t, e, n, i, r, s, o = null, a = !1) {
      return {
        type: 1,
        element: t,
        keyframes: e,
        preStyleProps: n,
        postStyleProps: i,
        duration: r,
        delay: s,
        totalTime: r + s,
        easing: o,
        subTimeline: a
      }
    }

    class qh {
      constructor() {
        this._map = new Map
      }

      consume(t) {
        let e = this._map.get(t);
        return e ? this._map.delete(t) : e = [], e
      }

      append(t, e) {
        let n = this._map.get(t);
        n || this._map.set(t, n = []), n.push(...e)
      }

      has(t) {
        return this._map.has(t)
      }

      clear() {
        this._map.clear()
      }
    }

    const Wh = new RegExp(":enter", "g"), Gh = new RegExp(":leave", "g");

    function Qh(t, e, n, i, r, s = {}, o = {}, a, l, c = []) {
      return (new Yh).buildKeyframes(t, e, n, i, r, s, o, a, l, c)
    }

    class Yh {
      buildKeyframes(t, e, n, i, r, s, o, a, l, c = []) {
        l = l || new qh;
        const u = new Xh(t, e, l, i, r, c, []);
        u.options = a, u.currentTimeline.setStyles([s], null, u.errors, a), Dh(this, n, u);
        const h = u.timelines.filter(t => t.containsAnimation());
        if (h.length && Object.keys(o).length) {
          const t = h[h.length - 1];
          t.allowOnlyTimelineStyles() || t.setStyles([o], null, u.errors, a)
        }
        return h.length ? h.map(t => t.buildKeyframes()) : [Bh(e, [], [], [], 0, 0, "", !1)]
      }

      visitTrigger(t, e) {
      }

      visitState(t, e) {
      }

      visitTransition(t, e) {
      }

      visitAnimateChild(t, e) {
        const n = e.subInstructions.consume(e.element);
        if (n) {
          const i = e.createSubContext(t.options), r = e.currentTimeline.currentTime,
            s = this._visitSubInstructions(n, i, i.options);
          r != s && e.transformIntoNewTimeline(s)
        }
        e.previousNode = t
      }

      visitAnimateRef(t, e) {
        const n = e.createSubContext(t.options);
        n.transformIntoNewTimeline(), this.visitReference(t.animation, n), e.transformIntoNewTimeline(n.currentTimeline.currentTime), e.previousNode = t
      }

      _visitSubInstructions(t, e, n) {
        let i = e.currentTimeline.currentTime;
        const r = null != n.duration ? fh(n.duration) : null, s = null != n.delay ? fh(n.delay) : null;
        return 0 !== r && t.forEach(t => {
          const n = e.appendInstructionToTimeline(t, r, s);
          i = Math.max(i, n.duration + n.delay)
        }), i
      }

      visitReference(t, e) {
        e.updateOptions(t.options, !0), Dh(this, t.animation, e), e.previousNode = t
      }

      visitSequence(t, e) {
        const n = e.subContextCount;
        let i = e;
        const r = t.options;
        if (r && (r.params || r.delay) && (i = e.createSubContext(r), i.transformIntoNewTimeline(), null != r.delay)) {
          6 == i.previousNode.type && (i.currentTimeline.snapshotCurrentStyles(), i.previousNode = Zh);
          const t = fh(r.delay);
          i.delayNextStep(t)
        }
        t.steps.length && (t.steps.forEach(t => Dh(this, t, i)), i.currentTimeline.applyStylesToKeyframe(), i.subContextCount > n && i.transformIntoNewTimeline()), e.previousNode = t
      }

      visitGroup(t, e) {
        const n = [];
        let i = e.currentTimeline.currentTime;
        const r = t.options && t.options.delay ? fh(t.options.delay) : 0;
        t.steps.forEach(s => {
          const o = e.createSubContext(t.options);
          r && o.delayNextStep(r), Dh(this, s, o), i = Math.max(i, o.currentTimeline.currentTime), n.push(o.currentTimeline)
        }), n.forEach(t => e.currentTimeline.mergeTimelineCollectedStyles(t)), e.transformIntoNewTimeline(i), e.previousNode = t
      }

      _visitTiming(t, e) {
        if (t.dynamic) {
          const n = t.strValue;
          return gh(e.params ? Ch(n, e.params, e.errors) : n, e.errors)
        }
        return {duration: t.duration, delay: t.delay, easing: t.easing}
      }

      visitAnimate(t, e) {
        const n = e.currentAnimateTimings = this._visitTiming(t.timings, e), i = e.currentTimeline;
        n.delay && (e.incrementTime(n.delay), i.snapshotCurrentStyles());
        const r = t.style;
        5 == r.type ? this.visitKeyframes(r, e) : (e.incrementTime(n.duration), this.visitStyle(r, e), i.applyStylesToKeyframe()), e.currentAnimateTimings = null, e.previousNode = t
      }

      visitStyle(t, e) {
        const n = e.currentTimeline, i = e.currentAnimateTimings;
        !i && n.getCurrentStyleProperties().length && n.forwardFrame();
        const r = i && i.easing || t.easing;
        t.isEmptyStep ? n.applyEmptyStep(r) : n.setStyles(t.styles, r, e.errors, e.options), e.previousNode = t
      }

      visitKeyframes(t, e) {
        const n = e.currentAnimateTimings, i = e.currentTimeline.duration, r = n.duration,
          s = e.createSubContext().currentTimeline;
        s.easing = n.easing, t.styles.forEach(t => {
          s.forwardTime((t.offset || 0) * r), s.setStyles(t.styles, t.easing, e.errors, e.options), s.applyStylesToKeyframe()
        }), e.currentTimeline.mergeTimelineCollectedStyles(s), e.transformIntoNewTimeline(i + r), e.previousNode = t
      }

      visitQuery(t, e) {
        const n = e.currentTimeline.currentTime, i = t.options || {}, r = i.delay ? fh(i.delay) : 0;
        r && (6 === e.previousNode.type || 0 == n && e.currentTimeline.getCurrentStyleProperties().length) && (e.currentTimeline.snapshotCurrentStyles(), e.previousNode = Zh);
        let s = n;
        const o = e.invokeQuery(t.selector, t.originalSelector, t.limit, t.includeSelf, !!i.optional, e.errors);
        e.currentQueryTotal = o.length;
        let a = null;
        o.forEach((n, i) => {
          e.currentQueryIndex = i;
          const o = e.createSubContext(t.options, n);
          r && o.delayNextStep(r), n === e.element && (a = o.currentTimeline), Dh(this, t.animation, o), o.currentTimeline.applyStylesToKeyframe(), s = Math.max(s, o.currentTimeline.currentTime)
        }), e.currentQueryIndex = 0, e.currentQueryTotal = 0, e.transformIntoNewTimeline(s), a && (e.currentTimeline.mergeTimelineCollectedStyles(a), e.currentTimeline.snapshotCurrentStyles()), e.previousNode = t
      }

      visitStagger(t, e) {
        const n = e.parentContext, i = e.currentTimeline, r = t.timings, s = Math.abs(r.duration),
          o = s * (e.currentQueryTotal - 1);
        let a = s * e.currentQueryIndex;
        switch (r.duration < 0 ? "reverse" : r.easing) {
          case"reverse":
            a = o - a;
            break;
          case"full":
            a = n.currentStaggerTime
        }
        const l = e.currentTimeline;
        a && l.delayNextStep(a);
        const c = l.currentTime;
        Dh(this, t.animation, e), e.previousNode = t, n.currentStaggerTime = i.currentTime - c + (i.startTime - n.currentTimeline.startTime)
      }
    }

    const Zh = {};

    class Xh {
      constructor(t, e, n, i, r, s, o, a) {
        this._driver = t, this.element = e, this.subInstructions = n, this._enterClassName = i, this._leaveClassName = r, this.errors = s, this.timelines = o, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = Zh, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = a || new Kh(this._driver, e, 0), o.push(this.currentTimeline)
      }

      get params() {
        return this.options.params
      }

      updateOptions(t, e) {
        if (!t) return;
        const n = t;
        let i = this.options;
        null != n.duration && (i.duration = fh(n.duration)), null != n.delay && (i.delay = fh(n.delay));
        const r = n.params;
        if (r) {
          let t = i.params;
          t || (t = this.options.params = {}), Object.keys(r).forEach(n => {
            e && t.hasOwnProperty(n) || (t[n] = Ch(r[n], t, this.errors))
          })
        }
      }

      _copyOptions() {
        const t = {};
        if (this.options) {
          const e = this.options.params;
          if (e) {
            const n = t.params = {};
            Object.keys(e).forEach(t => {
              n[t] = e[t]
            })
          }
        }
        return t
      }

      createSubContext(t = null, e, n) {
        const i = e || this.element,
          r = new Xh(this._driver, i, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(i, n || 0));
        return r.previousNode = this.previousNode, r.currentAnimateTimings = this.currentAnimateTimings, r.options = this._copyOptions(), r.updateOptions(t), r.currentQueryIndex = this.currentQueryIndex, r.currentQueryTotal = this.currentQueryTotal, r.parentContext = this, this.subContextCount++, r
      }

      transformIntoNewTimeline(t) {
        return this.previousNode = Zh, this.currentTimeline = this.currentTimeline.fork(this.element, t), this.timelines.push(this.currentTimeline), this.currentTimeline
      }

      appendInstructionToTimeline(t, e, n) {
        const i = {
            duration: null != e ? e : t.duration,
            delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay,
            easing: ""
          },
          r = new Jh(this._driver, t.element, t.keyframes, t.preStyleProps, t.postStyleProps, i, t.stretchStartingKeyframe);
        return this.timelines.push(r), i
      }

      incrementTime(t) {
        this.currentTimeline.forwardTime(this.currentTimeline.duration + t)
      }

      delayNextStep(t) {
        t > 0 && this.currentTimeline.delayNextStep(t)
      }

      invokeQuery(t, e, n, i, r, s) {
        let o = [];
        if (i && o.push(this.element), t.length > 0) {
          t = (t = t.replace(Wh, "." + this._enterClassName)).replace(Gh, "." + this._leaveClassName);
          let e = this._driver.query(this.element, t, 1 != n);
          0 !== n && (e = n < 0 ? e.slice(e.length + n, e.length) : e.slice(0, n)), o.push(...e)
        }
        return r || 0 != o.length || s.push(`\`query("${e}")\` returned zero elements. (Use \`query("${e}", { optional: true })\` if you wish to allow this.)`), o
      }
    }

    class Kh {
      constructor(t, e, n, i) {
        this._driver = t, this.element = e, this.startTime = n, this._elementTimelineStylesLookup = i, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(e), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(e, this._localTimelineStyles)), this._loadKeyframe()
      }

      containsAnimation() {
        switch (this._keyframes.size) {
          case 0:
            return !1;
          case 1:
            return this.getCurrentStyleProperties().length > 0;
          default:
            return !0
        }
      }

      getCurrentStyleProperties() {
        return Object.keys(this._currentKeyframe)
      }

      get currentTime() {
        return this.startTime + this.duration
      }

      delayNextStep(t) {
        const e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
        this.duration || e ? (this.forwardTime(this.currentTime + t), e && this.snapshotCurrentStyles()) : this.startTime += t
      }

      fork(t, e) {
        return this.applyStylesToKeyframe(), new Kh(this._driver, t, e || this.currentTime, this._elementTimelineStylesLookup)
      }

      _loadKeyframe() {
        this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe))
      }

      forwardFrame() {
        this.duration += 1, this._loadKeyframe()
      }

      forwardTime(t) {
        this.applyStylesToKeyframe(), this.duration = t, this._loadKeyframe()
      }

      _updateStyle(t, e) {
        this._localTimelineStyles[t] = e, this._globalTimelineStyles[t] = e, this._styleSummary[t] = {
          time: this.currentTime,
          value: e
        }
      }

      allowOnlyTimelineStyles() {
        return this._currentEmptyStepKeyframe !== this._currentKeyframe
      }

      applyEmptyStep(t) {
        t && (this._previousKeyframe.easing = t), Object.keys(this._globalTimelineStyles).forEach(t => {
          this._backFill[t] = this._globalTimelineStyles[t] || "*", this._currentKeyframe[t] = "*"
        }), this._currentEmptyStepKeyframe = this._currentKeyframe
      }

      setStyles(t, e, n, i) {
        e && (this._previousKeyframe.easing = e);
        const r = i && i.params || {}, s = function (t, e) {
          const n = {};
          let i;
          return t.forEach(t => {
            "*" === t ? (i = i || Object.keys(e), i.forEach(t => {
              n[t] = "*"
            })) : yh(t, !1, n)
          }), n
        }(t, this._globalTimelineStyles);
        Object.keys(s).forEach(t => {
          const e = Ch(s[t], r, n);
          this._pendingStyles[t] = e, this._localTimelineStyles.hasOwnProperty(t) || (this._backFill[t] = this._globalTimelineStyles.hasOwnProperty(t) ? this._globalTimelineStyles[t] : "*"), this._updateStyle(t, e)
        })
      }

      applyStylesToKeyframe() {
        const t = this._pendingStyles, e = Object.keys(t);
        0 != e.length && (this._pendingStyles = {}, e.forEach(e => {
          this._currentKeyframe[e] = t[e]
        }), Object.keys(this._localTimelineStyles).forEach(t => {
          this._currentKeyframe.hasOwnProperty(t) || (this._currentKeyframe[t] = this._localTimelineStyles[t])
        }))
      }

      snapshotCurrentStyles() {
        Object.keys(this._localTimelineStyles).forEach(t => {
          const e = this._localTimelineStyles[t];
          this._pendingStyles[t] = e, this._updateStyle(t, e)
        })
      }

      getFinalKeyframe() {
        return this._keyframes.get(this.duration)
      }

      get properties() {
        const t = [];
        for (let e in this._currentKeyframe) t.push(e);
        return t
      }

      mergeTimelineCollectedStyles(t) {
        Object.keys(t._styleSummary).forEach(e => {
          const n = this._styleSummary[e], i = t._styleSummary[e];
          (!n || i.time > n.time) && this._updateStyle(e, i.value)
        })
      }

      buildKeyframes() {
        this.applyStylesToKeyframe();
        const t = new Set, e = new Set, n = 1 === this._keyframes.size && 0 === this.duration;
        let i = [];
        this._keyframes.forEach((r, s) => {
          const o = yh(r, !0);
          Object.keys(o).forEach(n => {
            const i = o[n];
            "!" == i ? t.add(n) : "*" == i && e.add(n)
          }), n || (o.offset = s / this.duration), i.push(o)
        });
        const r = t.size ? kh(t.values()) : [], s = e.size ? kh(e.values()) : [];
        if (n) {
          const t = i[0], e = mh(t);
          t.offset = 0, e.offset = 1, i = [t, e]
        }
        return Bh(this.element, i, r, s, this.duration, this.startTime, this.easing, !1)
      }
    }

    class Jh extends Kh {
      constructor(t, e, n, i, r, s, o = !1) {
        super(t, e, s.delay), this.element = e, this.keyframes = n, this.preStyleProps = i, this.postStyleProps = r, this._stretchStartingKeyframe = o, this.timings = {
          duration: s.duration,
          delay: s.delay,
          easing: s.easing
        }
      }

      containsAnimation() {
        return this.keyframes.length > 1
      }

      buildKeyframes() {
        let t = this.keyframes, {delay: e, duration: n, easing: i} = this.timings;
        if (this._stretchStartingKeyframe && e) {
          const r = [], s = n + e, o = e / s, a = yh(t[0], !1);
          a.offset = 0, r.push(a);
          const l = yh(t[0], !1);
          l.offset = td(o), r.push(l);
          const c = t.length - 1;
          for (let i = 1; i <= c; i++) {
            let o = yh(t[i], !1);
            o.offset = td((e + o.offset * n) / s), r.push(o)
          }
          n = s, e = 0, i = "", t = r
        }
        return Bh(this.element, t, this.preStyleProps, this.postStyleProps, n, e, i, !0)
      }
    }

    function td(t, e = 3) {
      const n = Math.pow(10, e - 1);
      return Math.round(t * n) / n
    }

    class ed {
    }

    class nd extends ed {
      normalizePropertyName(t, e) {
        return Ah(t)
      }

      normalizeStyleValue(t, e, n, i) {
        let r = "";
        const s = n.toString().trim();
        if (id[e] && 0 !== n && "0" !== n) if ("number" == typeof n) r = "px"; else {
          const e = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
          e && 0 == e[1].length && i.push(`Please provide a CSS unit value for ${t}:${n}`)
        }
        return s + r
      }
    }

    const id = (() => function (t) {
      const e = {};
      return t.forEach(t => e[t] = !0), e
    }("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();

    function rd(t, e, n, i, r, s, o, a, l, c, u, h, d) {
      return {
        type: 0,
        element: t,
        triggerName: e,
        isRemovalTransition: r,
        fromState: n,
        fromStyles: s,
        toState: i,
        toStyles: o,
        timelines: a,
        queriedElements: l,
        preStyleProps: c,
        postStyleProps: u,
        totalTime: h,
        errors: d
      }
    }

    const sd = {};

    class od {
      constructor(t, e, n) {
        this._triggerName = t, this.ast = e, this._stateStyles = n
      }

      match(t, e, n, i) {
        return function (t, e, n, i, r) {
          return t.some(t => t(e, n, i, r))
        }(this.ast.matchers, t, e, n, i)
      }

      buildStyles(t, e, n) {
        const i = this._stateStyles["*"], r = this._stateStyles[t], s = i ? i.buildStyles(e, n) : {};
        return r ? r.buildStyles(e, n) : s
      }

      build(t, e, n, i, r, s, o, a, l, c) {
        const u = [], h = this.ast.options && this.ast.options.params || sd,
          d = this.buildStyles(n, o && o.params || sd, u), f = a && a.params || sd, p = this.buildStyles(i, f, u),
          g = new Set, m = new Map, y = new Map, v = "void" === i, _ = {params: Object.assign(Object.assign({}, h), f)},
          w = c ? [] : Qh(t, e, this.ast.animation, r, s, d, p, _, l, u);
        let b = 0;
        if (w.forEach(t => {
          b = Math.max(t.duration + t.delay, b)
        }), u.length) return rd(e, this._triggerName, n, i, v, d, p, [], [], m, y, b, u);
        w.forEach(t => {
          const n = t.element, i = Ku(m, n, {});
          t.preStyleProps.forEach(t => i[t] = !0);
          const r = Ku(y, n, {});
          t.postStyleProps.forEach(t => r[t] = !0), n !== e && g.add(n)
        });
        const x = kh(g.values());
        return rd(e, this._triggerName, n, i, v, d, p, w, x, m, y, b)
      }
    }

    class ad {
      constructor(t, e) {
        this.styles = t, this.defaultParams = e
      }

      buildStyles(t, e) {
        const n = {}, i = mh(this.defaultParams);
        return Object.keys(t).forEach(e => {
          const n = t[e];
          null != n && (i[e] = n)
        }), this.styles.styles.forEach(t => {
          if ("string" != typeof t) {
            const r = t;
            Object.keys(r).forEach(t => {
              let s = r[t];
              s.length > 1 && (s = Ch(s, i, e)), n[t] = s
            })
          }
        }), n
      }
    }

    class ld {
      constructor(t, e) {
        this.name = t, this.ast = e, this.transitionFactories = [], this.states = {}, e.states.forEach(t => {
          this.states[t.name] = new ad(t.style, t.options && t.options.params || {})
        }), cd(this.states, "true", "1"), cd(this.states, "false", "0"), e.transitions.forEach(e => {
          this.transitionFactories.push(new od(t, e, this.states))
        }), this.fallbackTransition = new od(t, {
          type: 1,
          animation: {type: 2, steps: [], options: null},
          matchers: [(t, e) => !0],
          options: null,
          queryCount: 0,
          depCount: 0
        }, this.states)
      }

      get containsQueries() {
        return this.ast.queryCount > 0
      }

      matchTransition(t, e, n, i) {
        return this.transitionFactories.find(r => r.match(t, e, n, i)) || null
      }

      matchStyles(t, e, n) {
        return this.fallbackTransition.buildStyles(t, e, n)
      }
    }

    function cd(t, e, n) {
      t.hasOwnProperty(e) ? t.hasOwnProperty(n) || (t[n] = t[e]) : t.hasOwnProperty(n) && (t[e] = t[n])
    }

    const ud = new qh;

    class hd {
      constructor(t, e, n) {
        this.bodyNode = t, this._driver = e, this._normalizer = n, this._animations = {}, this._playersById = {}, this.players = []
      }

      register(t, e) {
        const n = [], i = jh(this._driver, e, n);
        if (n.length) throw new Error("Unable to build the animation due to the following errors: " + n.join("\n"));
        this._animations[t] = i
      }

      _buildPlayer(t, e, n) {
        const i = t.element, r = Qu(0, this._normalizer, 0, t.keyframes, e, n);
        return this._driver.animate(i, r, t.duration, t.delay, t.easing, [], !0)
      }

      create(t, e, n = {}) {
        const i = [], r = this._animations[t];
        let s;
        const o = new Map;
        if (r ? (s = Qh(this._driver, e, r, "ng-enter", "ng-leave", {}, {}, n, ud, i), s.forEach(t => {
          const e = Ku(o, t.element, {});
          t.postStyleProps.forEach(t => e[t] = null)
        })) : (i.push("The requested animation doesn't exist or has already been destroyed"), s = []), i.length) throw new Error("Unable to create the animation due to the following errors: " + i.join("\n"));
        o.forEach((t, e) => {
          Object.keys(t).forEach(n => {
            t[n] = this._driver.computeStyle(e, n, "*")
          })
        });
        const a = Gu(s.map(t => {
          const e = o.get(t.element);
          return this._buildPlayer(t, {}, e)
        }));
        return this._playersById[t] = a, a.onDestroy(() => this.destroy(t)), this.players.push(a), a
      }

      destroy(t) {
        const e = this._getPlayer(t);
        e.destroy(), delete this._playersById[t];
        const n = this.players.indexOf(e);
        n >= 0 && this.players.splice(n, 1)
      }

      _getPlayer(t) {
        const e = this._playersById[t];
        if (!e) throw new Error("Unable to find the timeline player referenced by " + t);
        return e
      }

      listen(t, e, n, i) {
        const r = Xu(e, "", "", "");
        return Yu(this._getPlayer(t), n, r, i), () => {
        }
      }

      command(t, e, n, i) {
        if ("register" == n) return void this.register(t, i[0]);
        if ("create" == n) return void this.create(t, e, i[0] || {});
        const r = this._getPlayer(t);
        switch (n) {
          case"play":
            r.play();
            break;
          case"pause":
            r.pause();
            break;
          case"reset":
            r.reset();
            break;
          case"restart":
            r.restart();
            break;
          case"finish":
            r.finish();
            break;
          case"init":
            r.init();
            break;
          case"setPosition":
            r.setPosition(parseFloat(i[0]));
            break;
          case"destroy":
            this.destroy(t)
        }
      }
    }

    const dd = [],
      fd = {namespaceId: "", setForRemoval: !1, setForMove: !1, hasAnimation: !1, removedBeforeQueried: !1},
      pd = {namespaceId: "", setForMove: !1, setForRemoval: !1, hasAnimation: !1, removedBeforeQueried: !0};

    class gd {
      constructor(t, e = "") {
        this.namespaceId = e;
        const n = t && t.hasOwnProperty("value");
        if (this.value = null != (i = n ? t.value : t) ? i : null, n) {
          const e = mh(t);
          delete e.value, this.options = e
        } else this.options = {};
        var i;
        this.options.params || (this.options.params = {})
      }

      get params() {
        return this.options.params
      }

      absorbOptions(t) {
        const e = t.params;
        if (e) {
          const t = this.options.params;
          Object.keys(e).forEach(n => {
            null == t[n] && (t[n] = e[n])
          })
        }
      }
    }

    const md = new gd("void");

    class yd {
      constructor(t, e, n) {
        this.id = t, this.hostElement = e, this._engine = n, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + t, Td(e, this._hostClassName)
      }

      listen(t, e, n, i) {
        if (!this._triggers.hasOwnProperty(e)) throw new Error(`Unable to listen on the animation trigger event "${n}" because the animation trigger "${e}" doesn't exist!`);
        if (null == n || 0 == n.length) throw new Error(`Unable to listen on the animation trigger "${e}" because the provided event is undefined!`);
        if ("start" != (r = n) && "done" != r) throw new Error(`The provided animation trigger event "${n}" for the animation trigger "${e}" is not supported!`);
        var r;
        const s = Ku(this._elementListeners, t, []), o = {name: e, phase: n, callback: i};
        s.push(o);
        const a = Ku(this._engine.statesByElement, t, {});
        return a.hasOwnProperty(e) || (Td(t, "ng-trigger"), Td(t, "ng-trigger-" + e), a[e] = md), () => {
          this._engine.afterFlush(() => {
            const t = s.indexOf(o);
            t >= 0 && s.splice(t, 1), this._triggers[e] || delete a[e]
          })
        }
      }

      register(t, e) {
        return !this._triggers[t] && (this._triggers[t] = e, !0)
      }

      _getTrigger(t) {
        const e = this._triggers[t];
        if (!e) throw new Error(`The provided animation trigger "${t}" has not been registered!`);
        return e
      }

      trigger(t, e, n, i = !0) {
        const r = this._getTrigger(e), s = new _d(this.id, e, t);
        let o = this._engine.statesByElement.get(t);
        o || (Td(t, "ng-trigger"), Td(t, "ng-trigger-" + e), this._engine.statesByElement.set(t, o = {}));
        let a = o[e];
        const l = new gd(n, this.id);
        if (!(n && n.hasOwnProperty("value")) && a && l.absorbOptions(a.options), o[e] = l, a || (a = md), "void" !== l.value && a.value === l.value) {
          if (!function (t, e) {
            const n = Object.keys(t), i = Object.keys(e);
            if (n.length != i.length) return !1;
            for (let r = 0; r < n.length; r++) {
              const i = n[r];
              if (!e.hasOwnProperty(i) || t[i] !== e[i]) return !1
            }
            return !0
          }(a.params, l.params)) {
            const e = [], n = r.matchStyles(a.value, a.params, e), i = r.matchStyles(l.value, l.params, e);
            e.length ? this._engine.reportError(e) : this._engine.afterFlush(() => {
              bh(t, n), wh(t, i)
            })
          }
          return
        }
        const c = Ku(this._engine.playersByElement, t, []);
        c.forEach(t => {
          t.namespaceId == this.id && t.triggerName == e && t.queued && t.destroy()
        });
        let u = r.matchTransition(a.value, l.value, t, l.params), h = !1;
        if (!u) {
          if (!i) return;
          u = r.fallbackTransition, h = !0
        }
        return this._engine.totalQueuedPlayers++, this._queue.push({
          element: t,
          triggerName: e,
          transition: u,
          fromState: a,
          toState: l,
          player: s,
          isFallbackTransition: h
        }), h || (Td(t, "ng-animate-queued"), s.onStart(() => {
          Cd(t, "ng-animate-queued")
        })), s.onDone(() => {
          let e = this.players.indexOf(s);
          e >= 0 && this.players.splice(e, 1);
          const n = this._engine.playersByElement.get(t);
          if (n) {
            let t = n.indexOf(s);
            t >= 0 && n.splice(t, 1)
          }
        }), this.players.push(s), c.push(s), s
      }

      deregister(t) {
        delete this._triggers[t], this._engine.statesByElement.forEach((e, n) => {
          delete e[t]
        }), this._elementListeners.forEach((e, n) => {
          this._elementListeners.set(n, e.filter(e => e.name != t))
        })
      }

      clearElementCache(t) {
        this._engine.statesByElement.delete(t), this._elementListeners.delete(t);
        const e = this._engine.playersByElement.get(t);
        e && (e.forEach(t => t.destroy()), this._engine.playersByElement.delete(t))
      }

      _signalRemovalForInnerTriggers(t, e) {
        const n = this._engine.driver.query(t, ".ng-trigger", !0);
        n.forEach(t => {
          if (t.__ng_removed) return;
          const n = this._engine.fetchNamespacesByElement(t);
          n.size ? n.forEach(n => n.triggerLeaveAnimation(t, e, !1, !0)) : this.clearElementCache(t)
        }), this._engine.afterFlushAnimationsDone(() => n.forEach(t => this.clearElementCache(t)))
      }

      triggerLeaveAnimation(t, e, n, i) {
        const r = this._engine.statesByElement.get(t);
        if (r) {
          const s = [];
          if (Object.keys(r).forEach(e => {
            if (this._triggers[e]) {
              const n = this.trigger(t, e, "void", i);
              n && s.push(n)
            }
          }), s.length) return this._engine.markElementAsRemoved(this.id, t, !0, e), n && Gu(s).onDone(() => this._engine.processLeaveNode(t)), !0
        }
        return !1
      }

      prepareLeaveAnimationListeners(t) {
        const e = this._elementListeners.get(t);
        if (e) {
          const n = new Set;
          e.forEach(e => {
            const i = e.name;
            if (n.has(i)) return;
            n.add(i);
            const r = this._triggers[i].fallbackTransition, s = this._engine.statesByElement.get(t)[i] || md,
              o = new gd("void"), a = new _d(this.id, i, t);
            this._engine.totalQueuedPlayers++, this._queue.push({
              element: t,
              triggerName: i,
              transition: r,
              fromState: s,
              toState: o,
              player: a,
              isFallbackTransition: !0
            })
          })
        }
      }

      removeNode(t, e) {
        const n = this._engine;
        if (t.childElementCount && this._signalRemovalForInnerTriggers(t, e), this.triggerLeaveAnimation(t, e, !0)) return;
        let i = !1;
        if (n.totalAnimations) {
          const e = n.players.length ? n.playersByQueriedElement.get(t) : [];
          if (e && e.length) i = !0; else {
            let e = t;
            for (; e = e.parentNode;) if (n.statesByElement.get(e)) {
              i = !0;
              break
            }
          }
        }
        if (this.prepareLeaveAnimationListeners(t), i) n.markElementAsRemoved(this.id, t, !1, e); else {
          const i = t.__ng_removed;
          i && i !== fd || (n.afterFlush(() => this.clearElementCache(t)), n.destroyInnerAnimations(t), n._onRemovalComplete(t, e))
        }
      }

      insertNode(t, e) {
        Td(t, this._hostClassName)
      }

      drainQueuedTransitions(t) {
        const e = [];
        return this._queue.forEach(n => {
          const i = n.player;
          if (i.destroyed) return;
          const r = n.element, s = this._elementListeners.get(r);
          s && s.forEach(e => {
            if (e.name == n.triggerName) {
              const i = Xu(r, n.triggerName, n.fromState.value, n.toState.value);
              i._data = t, Yu(n.player, e.phase, i, e.callback)
            }
          }), i.markedForDestroy ? this._engine.afterFlush(() => {
            i.destroy()
          }) : e.push(n)
        }), this._queue = [], e.sort((t, e) => {
          const n = t.transition.ast.depCount, i = e.transition.ast.depCount;
          return 0 == n || 0 == i ? n - i : this._engine.driver.containsElement(t.element, e.element) ? 1 : -1
        })
      }

      destroy(t) {
        this.players.forEach(t => t.destroy()), this._signalRemovalForInnerTriggers(this.hostElement, t)
      }

      elementContainsData(t) {
        let e = !1;
        return this._elementListeners.has(t) && (e = !0), e = !!this._queue.find(e => e.element === t) || e, e
      }
    }

    class vd {
      constructor(t, e, n) {
        this.bodyNode = t, this.driver = e, this._normalizer = n, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = (t, e) => {
        }
      }

      _onRemovalComplete(t, e) {
        this.onRemovalComplete(t, e)
      }

      get queuedPlayers() {
        const t = [];
        return this._namespaceList.forEach(e => {
          e.players.forEach(e => {
            e.queued && t.push(e)
          })
        }), t
      }

      createNamespace(t, e) {
        const n = new yd(t, e, this);
        return e.parentNode ? this._balanceNamespaceList(n, e) : (this.newHostElements.set(e, n), this.collectEnterElement(e)), this._namespaceLookup[t] = n
      }

      _balanceNamespaceList(t, e) {
        const n = this._namespaceList.length - 1;
        if (n >= 0) {
          let i = !1;
          for (let r = n; r >= 0; r--) if (this.driver.containsElement(this._namespaceList[r].hostElement, e)) {
            this._namespaceList.splice(r + 1, 0, t), i = !0;
            break
          }
          i || this._namespaceList.splice(0, 0, t)
        } else this._namespaceList.push(t);
        return this.namespacesByHostElement.set(e, t), t
      }

      register(t, e) {
        let n = this._namespaceLookup[t];
        return n || (n = this.createNamespace(t, e)), n
      }

      registerTrigger(t, e, n) {
        let i = this._namespaceLookup[t];
        i && i.register(e, n) && this.totalAnimations++
      }

      destroy(t, e) {
        if (!t) return;
        const n = this._fetchNamespace(t);
        this.afterFlush(() => {
          this.namespacesByHostElement.delete(n.hostElement), delete this._namespaceLookup[t];
          const e = this._namespaceList.indexOf(n);
          e >= 0 && this._namespaceList.splice(e, 1)
        }), this.afterFlushAnimationsDone(() => n.destroy(e))
      }

      _fetchNamespace(t) {
        return this._namespaceLookup[t]
      }

      fetchNamespacesByElement(t) {
        const e = new Set, n = this.statesByElement.get(t);
        if (n) {
          const t = Object.keys(n);
          for (let i = 0; i < t.length; i++) {
            const r = n[t[i]].namespaceId;
            if (r) {
              const t = this._fetchNamespace(r);
              t && e.add(t)
            }
          }
        }
        return e
      }

      trigger(t, e, n, i) {
        if (wd(e)) {
          const r = this._fetchNamespace(t);
          if (r) return r.trigger(e, n, i), !0
        }
        return !1
      }

      insertNode(t, e, n, i) {
        if (!wd(e)) return;
        const r = e.__ng_removed;
        if (r && r.setForRemoval) {
          r.setForRemoval = !1, r.setForMove = !0;
          const t = this.collectedLeaveElements.indexOf(e);
          t >= 0 && this.collectedLeaveElements.splice(t, 1)
        }
        if (t) {
          const i = this._fetchNamespace(t);
          i && i.insertNode(e, n)
        }
        i && this.collectEnterElement(e)
      }

      collectEnterElement(t) {
        this.collectedEnterElements.push(t)
      }

      markElementAsDisabled(t, e) {
        e ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), Td(t, "ng-animate-disabled")) : this.disabledNodes.has(t) && (this.disabledNodes.delete(t), Cd(t, "ng-animate-disabled"))
      }

      removeNode(t, e, n, i) {
        if (wd(e)) {
          const r = t ? this._fetchNamespace(t) : null;
          if (r ? r.removeNode(e, i) : this.markElementAsRemoved(t, e, !1, i), n) {
            const n = this.namespacesByHostElement.get(e);
            n && n.id !== t && n.removeNode(e, i)
          }
        } else this._onRemovalComplete(e, i)
      }

      markElementAsRemoved(t, e, n, i) {
        this.collectedLeaveElements.push(e), e.__ng_removed = {
          namespaceId: t,
          setForRemoval: i,
          hasAnimation: n,
          removedBeforeQueried: !1
        }
      }

      listen(t, e, n, i, r) {
        return wd(e) ? this._fetchNamespace(t).listen(e, n, i, r) : () => {
        }
      }

      _buildInstruction(t, e, n, i, r) {
        return t.transition.build(this.driver, t.element, t.fromState.value, t.toState.value, n, i, t.fromState.options, t.toState.options, e, r)
      }

      destroyInnerAnimations(t) {
        let e = this.driver.query(t, ".ng-trigger", !0);
        e.forEach(t => this.destroyActiveAnimationsForElement(t)), 0 != this.playersByQueriedElement.size && (e = this.driver.query(t, ".ng-animating", !0), e.forEach(t => this.finishActiveQueriedAnimationOnElement(t)))
      }

      destroyActiveAnimationsForElement(t) {
        const e = this.playersByElement.get(t);
        e && e.forEach(t => {
          t.queued ? t.markedForDestroy = !0 : t.destroy()
        })
      }

      finishActiveQueriedAnimationOnElement(t) {
        const e = this.playersByQueriedElement.get(t);
        e && e.forEach(t => t.finish())
      }

      whenRenderingDone() {
        return new Promise(t => {
          if (this.players.length) return Gu(this.players).onDone(() => t());
          t()
        })
      }

      processLeaveNode(t) {
        const e = t.__ng_removed;
        if (e && e.setForRemoval) {
          if (t.__ng_removed = fd, e.namespaceId) {
            this.destroyInnerAnimations(t);
            const n = this._fetchNamespace(e.namespaceId);
            n && n.clearElementCache(t)
          }
          this._onRemovalComplete(t, e.setForRemoval)
        }
        this.driver.matchesElement(t, ".ng-animate-disabled") && this.markElementAsDisabled(t, !1), this.driver.query(t, ".ng-animate-disabled", !0).forEach(t => {
          this.markElementAsDisabled(t, !1)
        })
      }

      flush(t = -1) {
        let e = [];
        if (this.newHostElements.size && (this.newHostElements.forEach((t, e) => this._balanceNamespaceList(t, e)), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length) for (let n = 0; n < this.collectedEnterElements.length; n++) Td(this.collectedEnterElements[n], "ng-star-inserted");
        if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
          const n = [];
          try {
            e = this._flushAnimations(n, t)
          } finally {
            for (let t = 0; t < n.length; t++) n[t]()
          }
        } else for (let n = 0; n < this.collectedLeaveElements.length; n++) this.processLeaveNode(this.collectedLeaveElements[n]);
        if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(t => t()), this._flushFns = [], this._whenQuietFns.length) {
          const t = this._whenQuietFns;
          this._whenQuietFns = [], e.length ? Gu(e).onDone(() => {
            t.forEach(t => t())
          }) : t.forEach(t => t())
        }
      }

      reportError(t) {
        throw new Error("Unable to process animations due to the following failed trigger transitions\n " + t.join("\n"))
      }

      _flushAnimations(t, e) {
        const n = new qh, i = [], r = new Map, s = [], o = new Map, a = new Map, l = new Map, c = new Set;
        this.disabledNodes.forEach(t => {
          c.add(t);
          const e = this.driver.query(t, ".ng-animate-queued", !0);
          for (let n = 0; n < e.length; n++) c.add(e[n])
        });
        const u = this.bodyNode, h = Array.from(this.statesByElement.keys()), d = Sd(h, this.collectedEnterElements),
          f = new Map;
        let p = 0;
        d.forEach((t, e) => {
          const n = "ng-enter" + p++;
          f.set(e, n), t.forEach(t => Td(t, n))
        });
        const g = [], m = new Set, y = new Set;
        for (let L = 0; L < this.collectedLeaveElements.length; L++) {
          const t = this.collectedLeaveElements[L], e = t.__ng_removed;
          e && e.setForRemoval && (g.push(t), m.add(t), e.hasAnimation ? this.driver.query(t, ".ng-star-inserted", !0).forEach(t => m.add(t)) : y.add(t))
        }
        const v = new Map, _ = Sd(h, Array.from(m));
        _.forEach((t, e) => {
          const n = "ng-leave" + p++;
          v.set(e, n), t.forEach(t => Td(t, n))
        }), t.push(() => {
          d.forEach((t, e) => {
            const n = f.get(e);
            t.forEach(t => Cd(t, n))
          }), _.forEach((t, e) => {
            const n = v.get(e);
            t.forEach(t => Cd(t, n))
          }), g.forEach(t => {
            this.processLeaveNode(t)
          })
        });
        const w = [], b = [];
        for (let L = this._namespaceList.length - 1; L >= 0; L--) this._namespaceList[L].drainQueuedTransitions(e).forEach(t => {
          const e = t.player, r = t.element;
          if (w.push(e), this.collectedEnterElements.length) {
            const t = r.__ng_removed;
            if (t && t.setForMove) return void e.destroy()
          }
          const c = !u || !this.driver.containsElement(u, r), h = v.get(r), d = f.get(r),
            p = this._buildInstruction(t, n, d, h, c);
          if (!p.errors || !p.errors.length) return c || t.isFallbackTransition ? (e.onStart(() => bh(r, p.fromStyles)), e.onDestroy(() => wh(r, p.toStyles)), void i.push(e)) : (p.timelines.forEach(t => t.stretchStartingKeyframe = !0), n.append(r, p.timelines), s.push({
            instruction: p,
            player: e,
            element: r
          }), p.queriedElements.forEach(t => Ku(o, t, []).push(e)), p.preStyleProps.forEach((t, e) => {
            const n = Object.keys(t);
            if (n.length) {
              let t = a.get(e);
              t || a.set(e, t = new Set), n.forEach(e => t.add(e))
            }
          }), void p.postStyleProps.forEach((t, e) => {
            const n = Object.keys(t);
            let i = l.get(e);
            i || l.set(e, i = new Set), n.forEach(t => i.add(t))
          }));
          b.push(p)
        });
        if (b.length) {
          const t = [];
          b.forEach(e => {
            t.push(`@${e.triggerName} has failed due to:\n`), e.errors.forEach(e => t.push(`- ${e}\n`))
          }), w.forEach(t => t.destroy()), this.reportError(t)
        }
        const x = new Map, S = new Map;
        s.forEach(t => {
          const e = t.element;
          n.has(e) && (S.set(e, e), this._beforeAnimationBuild(t.player.namespaceId, t.instruction, x))
        }), i.forEach(t => {
          const e = t.element;
          this._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach(t => {
            Ku(x, e, []).push(t), t.destroy()
          })
        });
        const T = g.filter(t => Ed(t, a, l)), C = new Map;
        xd(C, this.driver, y, l, "*").forEach(t => {
          Ed(t, a, l) && T.push(t)
        });
        const k = new Map;
        d.forEach((t, e) => {
          xd(k, this.driver, new Set(t), a, "!")
        }), T.forEach(t => {
          const e = C.get(t), n = k.get(t);
          C.set(t, Object.assign(Object.assign({}, e), n))
        });
        const E = [], A = [], O = {};
        s.forEach(t => {
          const {element: e, player: s, instruction: o} = t;
          if (n.has(e)) {
            if (c.has(e)) return s.onDestroy(() => wh(e, o.toStyles)), s.disabled = !0, s.overrideTotalTime(o.totalTime), void i.push(s);
            let t = O;
            if (S.size > 1) {
              let n = e;
              const i = [];
              for (; n = n.parentNode;) {
                const e = S.get(n);
                if (e) {
                  t = e;
                  break
                }
                i.push(n)
              }
              i.forEach(e => S.set(e, t))
            }
            const n = this._buildAnimation(s.namespaceId, o, x, r, k, C);
            if (s.setRealPlayer(n), t === O) E.push(s); else {
              const e = this.playersByElement.get(t);
              e && e.length && (s.parentPlayer = Gu(e)), i.push(s)
            }
          } else bh(e, o.fromStyles), s.onDestroy(() => wh(e, o.toStyles)), A.push(s), c.has(e) && i.push(s)
        }), A.forEach(t => {
          const e = r.get(t.element);
          if (e && e.length) {
            const n = Gu(e);
            t.setRealPlayer(n)
          }
        }), i.forEach(t => {
          t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy()
        });
        for (let L = 0; L < g.length; L++) {
          const t = g[L], e = t.__ng_removed;
          if (Cd(t, "ng-leave"), e && e.hasAnimation) continue;
          let n = [];
          if (o.size) {
            let e = o.get(t);
            e && e.length && n.push(...e);
            let i = this.driver.query(t, ".ng-animating", !0);
            for (let t = 0; t < i.length; t++) {
              let e = o.get(i[t]);
              e && e.length && n.push(...e)
            }
          }
          const i = n.filter(t => !t.destroyed);
          i.length ? kd(this, t, i) : this.processLeaveNode(t)
        }
        return g.length = 0, E.forEach(t => {
          this.players.push(t), t.onDone(() => {
            t.destroy();
            const e = this.players.indexOf(t);
            this.players.splice(e, 1)
          }), t.play()
        }), E
      }

      elementContainsData(t, e) {
        let n = !1;
        const i = e.__ng_removed;
        return i && i.setForRemoval && (n = !0), this.playersByElement.has(e) && (n = !0), this.playersByQueriedElement.has(e) && (n = !0), this.statesByElement.has(e) && (n = !0), this._fetchNamespace(t).elementContainsData(e) || n
      }

      afterFlush(t) {
        this._flushFns.push(t)
      }

      afterFlushAnimationsDone(t) {
        this._whenQuietFns.push(t)
      }

      _getPreviousPlayers(t, e, n, i, r) {
        let s = [];
        if (e) {
          const e = this.playersByQueriedElement.get(t);
          e && (s = e)
        } else {
          const e = this.playersByElement.get(t);
          if (e) {
            const t = !r || "void" == r;
            e.forEach(e => {
              e.queued || (t || e.triggerName == i) && s.push(e)
            })
          }
        }
        return (n || i) && (s = s.filter(t => !(n && n != t.namespaceId || i && i != t.triggerName))), s
      }

      _beforeAnimationBuild(t, e, n) {
        const i = e.element, r = e.isRemovalTransition ? void 0 : t, s = e.isRemovalTransition ? void 0 : e.triggerName;
        for (const o of e.timelines) {
          const t = o.element, a = t !== i, l = Ku(n, t, []);
          this._getPreviousPlayers(t, a, r, s, e.toState).forEach(t => {
            const e = t.getRealPlayer();
            e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t)
          })
        }
        bh(i, e.fromStyles)
      }

      _buildAnimation(t, e, n, i, r, s) {
        const o = e.triggerName, a = e.element, l = [], c = new Set, u = new Set, h = e.timelines.map(e => {
          const h = e.element;
          c.add(h);
          const d = h.__ng_removed;
          if (d && d.removedBeforeQueried) return new Bu(e.duration, e.delay);
          const f = h !== a, p = function (t) {
              const e = [];
              return function t(e, n) {
                for (let i = 0; i < e.length; i++) {
                  const r = e[i];
                  r instanceof qu ? t(r.players, n) : n.push(r)
                }
              }(t, e), e
            }((n.get(h) || dd).map(t => t.getRealPlayer())).filter(t => !!t.element && t.element === h), g = r.get(h),
            m = s.get(h), y = Qu(0, this._normalizer, 0, e.keyframes, g, m), v = this._buildPlayer(e, y, p);
          if (e.subTimeline && i && u.add(h), f) {
            const e = new _d(t, o, h);
            e.setRealPlayer(v), l.push(e)
          }
          return v
        });
        l.forEach(t => {
          Ku(this.playersByQueriedElement, t.element, []).push(t), t.onDone(() => function (t, e, n) {
            let i;
            if (t instanceof Map) {
              if (i = t.get(e), i) {
                if (i.length) {
                  const t = i.indexOf(n);
                  i.splice(t, 1)
                }
                0 == i.length && t.delete(e)
              }
            } else if (i = t[e], i) {
              if (i.length) {
                const t = i.indexOf(n);
                i.splice(t, 1)
              }
              0 == i.length && delete t[e]
            }
            return i
          }(this.playersByQueriedElement, t.element, t))
        }), c.forEach(t => Td(t, "ng-animating"));
        const d = Gu(h);
        return d.onDestroy(() => {
          c.forEach(t => Cd(t, "ng-animating")), wh(a, e.toStyles)
        }), u.forEach(t => {
          Ku(i, t, []).push(d)
        }), d
      }

      _buildPlayer(t, e, n) {
        return e.length > 0 ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n) : new Bu(t.duration, t.delay)
      }
    }

    class _d {
      constructor(t, e, n) {
        this.namespaceId = t, this.triggerName = e, this.element = n, this._player = new Bu, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
      }

      setRealPlayer(t) {
        this._containsRealPlayer || (this._player = t, Object.keys(this._queuedCallbacks).forEach(e => {
          this._queuedCallbacks[e].forEach(n => Yu(t, e, void 0, n))
        }), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(t.totalTime), this.queued = !1)
      }

      getRealPlayer() {
        return this._player
      }

      overrideTotalTime(t) {
        this.totalTime = t
      }

      syncPlayerEvents(t) {
        const e = this._player;
        e.triggerCallback && t.onStart(() => e.triggerCallback("start")), t.onDone(() => this.finish()), t.onDestroy(() => this.destroy())
      }

      _queueEvent(t, e) {
        Ku(this._queuedCallbacks, t, []).push(e)
      }

      onDone(t) {
        this.queued && this._queueEvent("done", t), this._player.onDone(t)
      }

      onStart(t) {
        this.queued && this._queueEvent("start", t), this._player.onStart(t)
      }

      onDestroy(t) {
        this.queued && this._queueEvent("destroy", t), this._player.onDestroy(t)
      }

      init() {
        this._player.init()
      }

      hasStarted() {
        return !this.queued && this._player.hasStarted()
      }

      play() {
        !this.queued && this._player.play()
      }

      pause() {
        !this.queued && this._player.pause()
      }

      restart() {
        !this.queued && this._player.restart()
      }

      finish() {
        this._player.finish()
      }

      destroy() {
        this.destroyed = !0, this._player.destroy()
      }

      reset() {
        !this.queued && this._player.reset()
      }

      setPosition(t) {
        this.queued || this._player.setPosition(t)
      }

      getPosition() {
        return this.queued ? 0 : this._player.getPosition()
      }

      triggerCallback(t) {
        const e = this._player;
        e.triggerCallback && e.triggerCallback(t)
      }
    }

    function wd(t) {
      return t && 1 === t.nodeType
    }

    function bd(t, e) {
      const n = t.style.display;
      return t.style.display = null != e ? e : "none", n
    }

    function xd(t, e, n, i, r) {
      const s = [];
      n.forEach(t => s.push(bd(t)));
      const o = [];
      i.forEach((n, i) => {
        const s = {};
        n.forEach(t => {
          const n = s[t] = e.computeStyle(i, t, r);
          n && 0 != n.length || (i.__ng_removed = pd, o.push(i))
        }), t.set(i, s)
      });
      let a = 0;
      return n.forEach(t => bd(t, s[a++])), o
    }

    function Sd(t, e) {
      const n = new Map;
      if (t.forEach(t => n.set(t, [])), 0 == e.length) return n;
      const i = new Set(e), r = new Map;
      return e.forEach(t => {
        const e = function t(e) {
          if (!e) return 1;
          let s = r.get(e);
          if (s) return s;
          const o = e.parentNode;
          return s = n.has(o) ? o : i.has(o) ? 1 : t(o), r.set(e, s), s
        }(t);
        1 !== e && n.get(e).push(t)
      }), n
    }

    function Td(t, e) {
      if (t.classList) t.classList.add(e); else {
        let n = t.$$classes;
        n || (n = t.$$classes = {}), n[e] = !0
      }
    }

    function Cd(t, e) {
      if (t.classList) t.classList.remove(e); else {
        let n = t.$$classes;
        n && delete n[e]
      }
    }

    function kd(t, e, n) {
      Gu(n).onDone(() => t.processLeaveNode(e))
    }

    function Ed(t, e, n) {
      const i = n.get(t);
      if (!i) return !1;
      let r = e.get(t);
      return r ? i.forEach(t => r.add(t)) : e.set(t, i), n.delete(t), !0
    }

    class Ad {
      constructor(t, e, n) {
        this.bodyNode = t, this._driver = e, this._triggerCache = {}, this.onRemovalComplete = (t, e) => {
        }, this._transitionEngine = new vd(t, e, n), this._timelineEngine = new hd(t, e, n), this._transitionEngine.onRemovalComplete = (t, e) => this.onRemovalComplete(t, e)
      }

      registerTrigger(t, e, n, i, r) {
        const s = t + "-" + i;
        let o = this._triggerCache[s];
        if (!o) {
          const t = [], e = jh(this._driver, r, t);
          if (t.length) throw new Error(`The animation trigger "${i}" has failed to build due to the following errors:\n - ${t.join("\n - ")}`);
          o = function (t, e) {
            return new ld(t, e)
          }(i, e), this._triggerCache[s] = o
        }
        this._transitionEngine.registerTrigger(e, i, o)
      }

      register(t, e) {
        this._transitionEngine.register(t, e)
      }

      destroy(t, e) {
        this._transitionEngine.destroy(t, e)
      }

      onInsert(t, e, n, i) {
        this._transitionEngine.insertNode(t, e, n, i)
      }

      onRemove(t, e, n, i) {
        this._transitionEngine.removeNode(t, e, i || !1, n)
      }

      disableAnimations(t, e) {
        this._transitionEngine.markElementAsDisabled(t, e)
      }

      process(t, e, n, i) {
        if ("@" == n.charAt(0)) {
          const [t, r] = Ju(n);
          this._timelineEngine.command(t, e, r, i)
        } else this._transitionEngine.trigger(t, e, n, i)
      }

      listen(t, e, n, i, r) {
        if ("@" == n.charAt(0)) {
          const [t, i] = Ju(n);
          return this._timelineEngine.listen(t, e, i, r)
        }
        return this._transitionEngine.listen(t, e, n, i, r)
      }

      flush(t = -1) {
        this._transitionEngine.flush(t)
      }

      get players() {
        return this._transitionEngine.players.concat(this._timelineEngine.players)
      }

      whenRenderingDone() {
        return this._transitionEngine.whenRenderingDone()
      }
    }

    function Od(t, e) {
      let n = null, i = null;
      return Array.isArray(e) && e.length ? (n = Dd(e[0]), e.length > 1 && (i = Dd(e[e.length - 1]))) : e && (n = Dd(e)), n || i ? new Ld(t, n, i) : null
    }

    let Ld = (() => {
      class t {
        constructor(e, n, i) {
          this._element = e, this._startStyles = n, this._endStyles = i, this._state = 0;
          let r = t.initialStylesByElement.get(e);
          r || t.initialStylesByElement.set(e, r = {}), this._initialStyles = r
        }

        start() {
          this._state < 1 && (this._startStyles && wh(this._element, this._startStyles, this._initialStyles), this._state = 1)
        }

        finish() {
          this.start(), this._state < 2 && (wh(this._element, this._initialStyles), this._endStyles && (wh(this._element, this._endStyles), this._endStyles = null), this._state = 1)
        }

        destroy() {
          this.finish(), this._state < 3 && (t.initialStylesByElement.delete(this._element), this._startStyles && (bh(this._element, this._startStyles), this._endStyles = null), this._endStyles && (bh(this._element, this._endStyles), this._endStyles = null), wh(this._element, this._initialStyles), this._state = 3)
        }
      }

      return t.initialStylesByElement = new WeakMap, t
    })();

    function Dd(t) {
      let e = null;
      const n = Object.keys(t);
      for (let i = 0; i < n.length; i++) {
        const r = n[i];
        Md(r) && (e = e || {}, e[r] = t[r])
      }
      return e
    }

    function Md(t) {
      return "display" === t || "position" === t
    }

    class Pd {
      constructor(t, e, n, i, r, s, o) {
        this._element = t, this._name = e, this._duration = n, this._delay = i, this._easing = r, this._fillMode = s, this._onDoneFn = o, this._finished = !1, this._destroyed = !1, this._startTime = 0, this._position = 0, this._eventFn = t => this._handleCallback(t)
      }

      apply() {
        !function (t, e) {
          const n = Hd(t, "").trim();
          n.length && (function (t, e) {
            let n = 0;
            for (let i = 0; i < t.length; i++) "," === t.charAt(i) && n++
          }(n), e = `${n}, ${e}`), jd(t, "", e)
        }(this._element, `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`), Nd(this._element, this._eventFn, !1), this._startTime = Date.now()
      }

      pause() {
        Rd(this._element, this._name, "paused")
      }

      resume() {
        Rd(this._element, this._name, "running")
      }

      setPosition(t) {
        const e = Fd(this._element, this._name);
        this._position = t * this._duration, jd(this._element, "Delay", `-${this._position}ms`, e)
      }

      getPosition() {
        return this._position
      }

      _handleCallback(t) {
        const e = t._ngTestManualTimestamp || Date.now(), n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
        t.animationName == this._name && Math.max(e - this._startTime, 0) >= this._delay && n >= this._duration && this.finish()
      }

      finish() {
        this._finished || (this._finished = !0, this._onDoneFn(), Nd(this._element, this._eventFn, !0))
      }

      destroy() {
        this._destroyed || (this._destroyed = !0, this.finish(), function (t, e) {
          const n = Hd(t, "").split(","), i = Id(n, e);
          i >= 0 && (n.splice(i, 1), jd(t, "", n.join(",")))
        }(this._element, this._name))
      }
    }

    function Rd(t, e, n) {
      jd(t, "PlayState", n, Fd(t, e))
    }

    function Fd(t, e) {
      const n = Hd(t, "");
      return n.indexOf(",") > 0 ? Id(n.split(","), e) : Id([n], e)
    }

    function Id(t, e) {
      for (let n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
      return -1
    }

    function Nd(t, e, n) {
      n ? t.removeEventListener("animationend", e) : t.addEventListener("animationend", e)
    }

    function jd(t, e, n, i) {
      const r = "animation" + e;
      if (null != i) {
        const e = t.style[r];
        if (e.length) {
          const t = e.split(",");
          t[i] = n, n = t.join(",")
        }
      }
      t.style[r] = n
    }

    function Hd(t, e) {
      return t.style["animation" + e]
    }

    class Ud {
      constructor(t, e, n, i, r, s, o, a) {
        this.element = t, this.keyframes = e, this.animationName = n, this._duration = i, this._delay = r, this._finalStyles = o, this._specialStyles = a, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this.currentSnapshot = {}, this._state = 0, this.easing = s || "linear", this.totalTime = i + r, this._buildStyler()
      }

      onStart(t) {
        this._onStartFns.push(t)
      }

      onDone(t) {
        this._onDoneFns.push(t)
      }

      onDestroy(t) {
        this._onDestroyFns.push(t)
      }

      destroy() {
        this.init(), this._state >= 4 || (this._state = 4, this._styler.destroy(), this._flushStartFns(), this._flushDoneFns(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = [])
      }

      _flushDoneFns() {
        this._onDoneFns.forEach(t => t()), this._onDoneFns = []
      }

      _flushStartFns() {
        this._onStartFns.forEach(t => t()), this._onStartFns = []
      }

      finish() {
        this.init(), this._state >= 3 || (this._state = 3, this._styler.finish(), this._flushStartFns(), this._specialStyles && this._specialStyles.finish(), this._flushDoneFns())
      }

      setPosition(t) {
        this._styler.setPosition(t)
      }

      getPosition() {
        return this._styler.getPosition()
      }

      hasStarted() {
        return this._state >= 2
      }

      init() {
        this._state >= 1 || (this._state = 1, this._styler.apply(), this._delay && this._styler.pause())
      }

      play() {
        this.init(), this.hasStarted() || (this._flushStartFns(), this._state = 2, this._specialStyles && this._specialStyles.start()), this._styler.resume()
      }

      pause() {
        this.init(), this._styler.pause()
      }

      restart() {
        this.reset(), this.play()
      }

      reset() {
        this._styler.destroy(), this._buildStyler(), this._styler.apply()
      }

      _buildStyler() {
        this._styler = new Pd(this.element, this.animationName, this._duration, this._delay, this.easing, "forwards", () => this.finish())
      }

      triggerCallback(t) {
        const e = "start" == t ? this._onStartFns : this._onDoneFns;
        e.forEach(t => t()), e.length = 0
      }

      beforeDestroy() {
        this.init();
        const t = {};
        if (this.hasStarted()) {
          const e = this._state >= 3;
          Object.keys(this._finalStyles).forEach(n => {
            "offset" != n && (t[n] = e ? this._finalStyles[n] : Mh(this.element, n))
          })
        }
        this.currentSnapshot = t
      }
    }

    class $d extends Bu {
      constructor(t, e) {
        super(), this.element = t, this._startingStyles = {}, this.__initialized = !1, this._styles = uh(e)
      }

      init() {
        !this.__initialized && this._startingStyles && (this.__initialized = !0, Object.keys(this._styles).forEach(t => {
          this._startingStyles[t] = this.element.style[t]
        }), super.init())
      }

      play() {
        this._startingStyles && (this.init(), Object.keys(this._styles).forEach(t => this.element.style.setProperty(t, this._styles[t])), super.play())
      }

      destroy() {
        this._startingStyles && (Object.keys(this._startingStyles).forEach(t => {
          const e = this._startingStyles[t];
          e ? this.element.style.setProperty(t, e) : this.element.style.removeProperty(t)
        }), this._startingStyles = null, super.destroy())
      }
    }

    class Vd {
      constructor() {
        this._count = 0, this._head = document.querySelector("head"), this._warningIssued = !1
      }

      validateStyleProperty(t) {
        return oh(t)
      }

      matchesElement(t, e) {
        return ah(t, e)
      }

      containsElement(t, e) {
        return lh(t, e)
      }

      query(t, e, n) {
        return ch(t, e, n)
      }

      computeStyle(t, e, n) {
        return window.getComputedStyle(t)[e]
      }

      buildKeyframeElement(t, e, n) {
        n = n.map(t => uh(t));
        let i = `@keyframes ${e} {\n`, r = "";
        n.forEach(t => {
          r = " ";
          const e = parseFloat(t.offset);
          i += `${r}${100 * e}% {\n`, r += " ", Object.keys(t).forEach(e => {
            const n = t[e];
            switch (e) {
              case"offset":
                return;
              case"easing":
                return void (n && (i += `${r}animation-timing-function: ${n};\n`));
              default:
                return void (i += `${r}${e}: ${n};\n`)
            }
          }), i += r + "}\n"
        }), i += "}\n";
        const s = document.createElement("style");
        return s.innerHTML = i, s
      }

      animate(t, e, n, i, r, s = [], o) {
        o && this._notifyFaultyScrubber();
        const a = s.filter(t => t instanceof Ud), l = {};
        Oh(n, i) && a.forEach(t => {
          let e = t.currentSnapshot;
          Object.keys(e).forEach(t => l[t] = e[t])
        });
        const c = function (t) {
          let e = {};
          return t && (Array.isArray(t) ? t : [t]).forEach(t => {
            Object.keys(t).forEach(n => {
              "offset" != n && "easing" != n && (e[n] = t[n])
            })
          }), e
        }(e = Lh(t, e, l));
        if (0 == n) return new $d(t, c);
        const u = "gen_css_kf_" + this._count++, h = this.buildKeyframeElement(t, u, e);
        document.querySelector("head").appendChild(h);
        const d = Od(t, e), f = new Ud(t, e, u, n, i, r, c, d);
        return f.onDestroy(() => {
          var t;
          (t = h).parentNode.removeChild(t)
        }), f
      }

      _notifyFaultyScrubber() {
        this._warningIssued || (console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n", "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."), this._warningIssued = !0)
      }
    }

    class zd {
      constructor(t, e, n, i) {
        this.element = t, this.keyframes = e, this.options = n, this._specialStyles = i, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = n.duration, this._delay = n.delay || 0, this.time = this._duration + this._delay
      }

      _onFinish() {
        this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = [])
      }

      init() {
        this._buildPlayer(), this._preparePlayerBeforeStart()
      }

      _buildPlayer() {
        if (this._initialized) return;
        this._initialized = !0;
        const t = this.keyframes;
        this.domPlayer = this._triggerWebAnimation(this.element, t, this.options), this._finalKeyframe = t.length ? t[t.length - 1] : {}, this.domPlayer.addEventListener("finish", () => this._onFinish())
      }

      _preparePlayerBeforeStart() {
        this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
      }

      _triggerWebAnimation(t, e, n) {
        return t.animate(e, n)
      }

      onStart(t) {
        this._onStartFns.push(t)
      }

      onDone(t) {
        this._onDoneFns.push(t)
      }

      onDestroy(t) {
        this._onDestroyFns.push(t)
      }

      play() {
        this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(t => t()), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play()
      }

      pause() {
        this.init(), this.domPlayer.pause()
      }

      finish() {
        this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish()
      }

      reset() {
        this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1
      }

      _resetDomPlayerState() {
        this.domPlayer && this.domPlayer.cancel()
      }

      restart() {
        this.reset(), this.play()
      }

      hasStarted() {
        return this._started
      }

      destroy() {
        this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = [])
      }

      setPosition(t) {
        this.domPlayer.currentTime = t * this.time
      }

      getPosition() {
        return this.domPlayer.currentTime / this.time
      }

      get totalTime() {
        return this._delay + this._duration
      }

      beforeDestroy() {
        const t = {};
        this.hasStarted() && Object.keys(this._finalKeyframe).forEach(e => {
          "offset" != e && (t[e] = this._finished ? this._finalKeyframe[e] : Mh(this.element, e))
        }), this.currentSnapshot = t
      }

      triggerCallback(t) {
        const e = "start" == t ? this._onStartFns : this._onDoneFns;
        e.forEach(t => t()), e.length = 0
      }
    }

    class Bd {
      constructor() {
        this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(qd().toString()), this._cssKeyframesDriver = new Vd
      }

      validateStyleProperty(t) {
        return oh(t)
      }

      matchesElement(t, e) {
        return ah(t, e)
      }

      containsElement(t, e) {
        return lh(t, e)
      }

      query(t, e, n) {
        return ch(t, e, n)
      }

      computeStyle(t, e, n) {
        return window.getComputedStyle(t)[e]
      }

      overrideWebAnimationsSupport(t) {
        this._isNativeImpl = t
      }

      animate(t, e, n, i, r, s = [], o) {
        if (!o && !this._isNativeImpl) return this._cssKeyframesDriver.animate(t, e, n, i, r, s);
        const a = {duration: n, delay: i, fill: 0 == i ? "both" : "forwards"};
        r && (a.easing = r);
        const l = {}, c = s.filter(t => t instanceof zd);
        Oh(n, i) && c.forEach(t => {
          let e = t.currentSnapshot;
          Object.keys(e).forEach(t => l[t] = e[t])
        });
        const u = Od(t, e = Lh(t, e = e.map(t => yh(t, !1)), l));
        return new zd(t, e, a, u)
      }
    }

    function qd() {
      return "undefined" != typeof window && void 0 !== window.document && Element.prototype.animate || {}
    }

    let Wd = (() => {
      class t extends Nu {
        constructor(t, e) {
          super(), this._nextAnimationId = 0, this._renderer = t.createRenderer(e.body, {
            id: "0",
            encapsulation: ae.None,
            styles: [],
            data: {animation: []}
          })
        }

        build(t) {
          const e = this._nextAnimationId.toString();
          this._nextAnimationId++;
          const n = Array.isArray(t) ? Uu(t) : t;
          return Yd(this._renderer, null, e, "register", [n]), new Gd(e, this._renderer)
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(wa), Gt(Lc))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();

    class Gd extends class {
    } {
      constructor(t, e) {
        super(), this._id = t, this._renderer = e
      }

      create(t, e) {
        return new Qd(this._id, t, e || {}, this._renderer)
      }
    }

    class Qd {
      constructor(t, e, n, i) {
        this.id = t, this.element = e, this._renderer = i, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", n)
      }

      _listen(t, e) {
        return this._renderer.listen(this.element, `@@${this.id}:${t}`, e)
      }

      _command(t, ...e) {
        return Yd(this._renderer, this.element, this.id, t, e)
      }

      onDone(t) {
        this._listen("done", t)
      }

      onStart(t) {
        this._listen("start", t)
      }

      onDestroy(t) {
        this._listen("destroy", t)
      }

      init() {
        this._command("init")
      }

      hasStarted() {
        return this._started
      }

      play() {
        this._command("play"), this._started = !0
      }

      pause() {
        this._command("pause")
      }

      restart() {
        this._command("restart")
      }

      finish() {
        this._command("finish")
      }

      destroy() {
        this._command("destroy")
      }

      reset() {
        this._command("reset")
      }

      setPosition(t) {
        this._command("setPosition", t)
      }

      getPosition() {
        return 0
      }
    }

    function Yd(t, e, n, i, r) {
      return t.setProperty(e, `@@${n}:${i}`, r)
    }

    let Zd = (() => {
      class t {
        constructor(t, e, n) {
          this.delegate = t, this.engine = e, this._zone = n, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), e.onRemovalComplete = (t, e) => {
            e && e.parentNode(t) && e.removeChild(t.parentNode, t)
          }
        }

        createRenderer(t, e) {
          const n = this.delegate.createRenderer(t, e);
          if (!(t && e && e.data && e.data.animation)) {
            let t = this._rendererCache.get(n);
            return t || (t = new Xd("", n, this.engine), this._rendererCache.set(n, t)), t
          }
          const i = e.id, r = e.id + "-" + this._currentId;
          this._currentId++, this.engine.register(r, t);
          const s = e => {
            Array.isArray(e) ? e.forEach(s) : this.engine.registerTrigger(i, r, t, e.name, e)
          };
          return e.data.animation.forEach(s), new Kd(this, r, n, this.engine)
        }

        begin() {
          this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
        }

        _scheduleCountTask() {
          this.promise.then(() => {
            this._microtaskId++
          })
        }

        scheduleListenerCallback(t, e, n) {
          t >= 0 && t < this._microtaskId ? this._zone.run(() => e(n)) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(() => {
            this._zone.run(() => {
              this._animationCallbacksBuffer.forEach(t => {
                const [e, n] = t;
                e(n)
              }), this._animationCallbacksBuffer = []
            })
          }), this._animationCallbacksBuffer.push([e, n]))
        }

        end() {
          this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular(() => {
            this._scheduleCountTask(), this.engine.flush(this._microtaskId)
          }), this.delegate.end && this.delegate.end()
        }

        whenRenderingDone() {
          return this.engine.whenRenderingDone()
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(wa), Gt(Ad), Gt(Kl))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();

    class Xd {
      constructor(t, e, n) {
        this.namespaceId = t, this.delegate = e, this.engine = n, this.destroyNode = this.delegate.destroyNode ? t => e.destroyNode(t) : null
      }

      get data() {
        return this.delegate.data
      }

      destroy() {
        this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy()
      }

      createElement(t, e) {
        return this.delegate.createElement(t, e)
      }

      createComment(t) {
        return this.delegate.createComment(t)
      }

      createText(t) {
        return this.delegate.createText(t)
      }

      appendChild(t, e) {
        this.delegate.appendChild(t, e), this.engine.onInsert(this.namespaceId, e, t, !1)
      }

      insertBefore(t, e, n) {
        this.delegate.insertBefore(t, e, n), this.engine.onInsert(this.namespaceId, e, t, !0)
      }

      removeChild(t, e, n) {
        this.engine.onRemove(this.namespaceId, e, this.delegate, n)
      }

      selectRootElement(t, e) {
        return this.delegate.selectRootElement(t, e)
      }

      parentNode(t) {
        return this.delegate.parentNode(t)
      }

      nextSibling(t) {
        return this.delegate.nextSibling(t)
      }

      setAttribute(t, e, n, i) {
        this.delegate.setAttribute(t, e, n, i)
      }

      removeAttribute(t, e, n) {
        this.delegate.removeAttribute(t, e, n)
      }

      addClass(t, e) {
        this.delegate.addClass(t, e)
      }

      removeClass(t, e) {
        this.delegate.removeClass(t, e)
      }

      setStyle(t, e, n, i) {
        this.delegate.setStyle(t, e, n, i)
      }

      removeStyle(t, e, n) {
        this.delegate.removeStyle(t, e, n)
      }

      setProperty(t, e, n) {
        "@" == e.charAt(0) && "@.disabled" == e ? this.disableAnimations(t, !!n) : this.delegate.setProperty(t, e, n)
      }

      setValue(t, e) {
        this.delegate.setValue(t, e)
      }

      listen(t, e, n) {
        return this.delegate.listen(t, e, n)
      }

      disableAnimations(t, e) {
        this.engine.disableAnimations(t, e)
      }
    }

    class Kd extends Xd {
      constructor(t, e, n, i) {
        super(e, n, i), this.factory = t, this.namespaceId = e
      }

      setProperty(t, e, n) {
        "@" == e.charAt(0) ? "." == e.charAt(1) && "@.disabled" == e ? this.disableAnimations(t, n = void 0 === n || !!n) : this.engine.process(this.namespaceId, t, e.substr(1), n) : this.delegate.setProperty(t, e, n)
      }

      listen(t, e, n) {
        if ("@" == e.charAt(0)) {
          const i = function (t) {
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
          }(t);
          let r = e.substr(1), s = "";
          return "@" != r.charAt(0) && ([r, s] = function (t) {
            const e = t.indexOf(".");
            return [t.substring(0, e), t.substr(e + 1)]
          }(r)), this.engine.listen(this.namespaceId, i, r, s, t => {
            this.factory.scheduleListenerCallback(t._data || -1, n, t)
          })
        }
        return this.delegate.listen(t, e, n)
      }
    }

    let Jd = (() => {
      class t extends Ad {
        constructor(t, e, n) {
          super(t.body, e, n)
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Lc), Gt(dh), Gt(ed))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();
    const tf = [{
      provide: dh, useFactory: function () {
        return "function" == typeof qd() ? new Bd : new Vd
      }
    }, {provide: new Nt("AnimationModuleType"), useValue: "BrowserAnimations"}, {
      provide: Nu,
      useClass: Wd
    }, {
      provide: ed, useFactory: function () {
        return new nd
      }
    }, {provide: Ad, useClass: Jd}, {
      provide: wa, useFactory: function (t, e, n) {
        return new Zd(t, e, n)
      }, deps: [xu, Ad, Kl]
    }];
    let ef = (() => {
      class t {
      }

      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, providers: tf, imports: [Iu]
      }), t
    })();

    function nf() {
      throw Error("Host already has a portal attached")
    }

    class rf {
      attach(t) {
        return null == t && function () {
          throw Error("Attempting to attach a portal to a null PortalOutlet")
        }(), t.hasAttached() && nf(), this._attachedHost = t, t.attach(this)
      }

      detach() {
        let t = this._attachedHost;
        null == t ? function () {
          throw Error("Attempting to detach a portal that is not attached to a host")
        }() : (this._attachedHost = null, t.detach())
      }

      get isAttached() {
        return null != this._attachedHost
      }

      setAttachedHost(t) {
        this._attachedHost = t
      }
    }

    class sf extends rf {
      constructor(t, e, n, i) {
        super(), this.component = t, this.viewContainerRef = e, this.injector = n, this.componentFactoryResolver = i
      }
    }

    class of extends rf {
      constructor(t, e, n) {
        super(), this.templateRef = t, this.viewContainerRef = e, this.context = n
      }

      get origin() {
        return this.templateRef.elementRef
      }

      attach(t, e = this.context) {
        return this.context = e, super.attach(t)
      }

      detach() {
        return this.context = void 0, super.detach()
      }
    }

    class af extends rf {
      constructor(t) {
        super(), this.element = t instanceof va ? t.nativeElement : t
      }
    }

    class lf extends class extends class {
      constructor() {
        this._isDisposed = !1, this.attachDomPortal = null
      }

      hasAttached() {
        return !!this._attachedPortal
      }

      attach(t) {
        return t || function () {
          throw Error("Must provide a portal to attach")
        }(), this.hasAttached() && nf(), this._isDisposed && function () {
          throw Error("This PortalOutlet has already been disposed")
        }(), t instanceof sf ? (this._attachedPortal = t, this.attachComponentPortal(t)) : t instanceof of ? (this._attachedPortal = t, this.attachTemplatePortal(t)) : this.attachDomPortal && t instanceof af ? (this._attachedPortal = t, this.attachDomPortal(t)) : void function () {
          throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.")
        }()
      }

      detach() {
        this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), this._invokeDisposeFn()
      }

      dispose() {
        this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0
      }

      setDisposeFn(t) {
        this._disposeFn = t
      }

      _invokeDisposeFn() {
        this._disposeFn && (this._disposeFn(), this._disposeFn = null)
      }
    } {
      constructor(t, e, n, i, r) {
        super(), this.outletElement = t, this._componentFactoryResolver = e, this._appRef = n, this._defaultInjector = i, this.attachDomPortal = t => {
          if (!this._document) throw Error("Cannot attach DOM portal without _document constructor parameter");
          const e = t.element;
          if (!e.parentNode) throw Error("DOM portal content must be attached to a parent node.");
          const n = this._document.createComment("dom-portal");
          e.parentNode.insertBefore(n, e), this.outletElement.appendChild(e), super.setDisposeFn(() => {
            n.parentNode && n.parentNode.replaceChild(e, n)
          })
        }, this._document = r
      }

      attachComponentPortal(t) {
        const e = (t.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(t.component);
        let n;
        return t.viewContainerRef ? (n = t.viewContainerRef.createComponent(e, t.viewContainerRef.length, t.injector || t.viewContainerRef.injector), this.setDisposeFn(() => n.destroy())) : (n = e.create(t.injector || this._defaultInjector), this._appRef.attachView(n.hostView), this.setDisposeFn(() => {
          this._appRef.detachView(n.hostView), n.destroy()
        })), this.outletElement.appendChild(this._getComponentRootNode(n)), n
      }

      attachTemplatePortal(t) {
        let e = t.viewContainerRef, n = e.createEmbeddedView(t.templateRef, t.context);
        return n.detectChanges(), n.rootNodes.forEach(t => this.outletElement.appendChild(t)), this.setDisposeFn(() => {
          let t = e.indexOf(n);
          -1 !== t && e.remove(t)
        }), n
      }

      dispose() {
        super.dispose(), null != this.outletElement.parentNode && this.outletElement.parentNode.removeChild(this.outletElement)
      }

      _getComponentRootNode(t) {
        return t.hostView.rootNodes[0]
      }
    } {
    }

    class cf extends h {
      constructor(t, e) {
        super()
      }

      schedule(t, e = 0) {
        return this
      }
    }

    class uf extends cf {
      constructor(t, e) {
        super(t, e), this.scheduler = t, this.work = e, this.pending = !1
      }

      schedule(t, e = 0) {
        if (this.closed) return this;
        this.state = t;
        const n = this.id, i = this.scheduler;
        return null != n && (this.id = this.recycleAsyncId(i, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(i, this.id, e), this
      }

      requestAsyncId(t, e, n = 0) {
        return setInterval(t.flush.bind(t, this), n)
      }

      recycleAsyncId(t, e, n = 0) {
        if (null !== n && this.delay === n && !1 === this.pending) return e;
        clearInterval(e)
      }

      execute(t, e) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        const n = this._execute(t, e);
        if (n) return n;
        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
      }

      _execute(t, e) {
        let n = !1, i = void 0;
        try {
          this.work(t)
        } catch (r) {
          n = !0, i = !!r && r || new Error(r)
        }
        if (n) return this.unsubscribe(), i
      }

      _unsubscribe() {
        const t = this.id, e = this.scheduler, n = e.actions, i = n.indexOf(this);
        this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== i && n.splice(i, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
      }
    }

    let hf = (() => {
      class t {
        constructor(e, n = t.now) {
          this.SchedulerAction = e, this.now = n
        }

        schedule(t, e = 0, n) {
          return new this.SchedulerAction(this, t).schedule(n, e)
        }
      }

      return t.now = () => Date.now(), t
    })();

    class df extends hf {
      constructor(t, e = hf.now) {
        super(t, () => df.delegate && df.delegate !== this ? df.delegate.now() : e()), this.actions = [], this.active = !1, this.scheduled = void 0
      }

      schedule(t, e = 0, n) {
        return df.delegate && df.delegate !== this ? df.delegate.schedule(t, e, n) : super.schedule(t, e, n)
      }

      flush(t) {
        const {actions: e} = this;
        if (this.active) return void e.push(t);
        let n;
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

    const ff = new df(uf);

    class pf {
      constructor(t, e) {
        this.dueTime = t, this.scheduler = e
      }

      call(t, e) {
        return e.subscribe(new gf(t, this.dueTime, this.scheduler))
      }
    }

    class gf extends p {
      constructor(t, e, n) {
        super(t), this.dueTime = e, this.scheduler = n, this.debouncedSubscription = null, this.lastValue = null, this.hasValue = !1
      }

      _next(t) {
        this.clearDebounce(), this.lastValue = t, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(mf, this.dueTime, this))
      }

      _complete() {
        this.debouncedNext(), this.destination.complete()
      }

      debouncedNext() {
        if (this.clearDebounce(), this.hasValue) {
          const {lastValue: t} = this;
          this.lastValue = null, this.hasValue = !1, this.destination.next(t)
        }
      }

      clearDebounce() {
        const t = this.debouncedSubscription;
        null !== t && (this.remove(t), t.unsubscribe(), this.debouncedSubscription = null)
      }
    }

    function mf(t) {
      t.debouncedNext()
    }

    function yf() {
    }

    var vf = function (t) {
      return null == t ? yf : function () {
        return this.querySelector(t)
      }
    };

    function _f() {
      return []
    }

    var wf = function (t) {
      return null == t ? _f : function () {
        return this.querySelectorAll(t)
      }
    }, bf = function (t) {
      return function () {
        return this.matches(t)
      }
    }, xf = function (t) {
      return new Array(t.length)
    };

    function Sf(t, e) {
      this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e
    }

    function Tf(t, e, n, i, r, s) {
      for (var o, a = 0, l = e.length, c = s.length; a < c; ++a) (o = e[a]) ? (o.__data__ = s[a], i[a] = o) : n[a] = new Sf(t, s[a]);
      for (; a < l; ++a) (o = e[a]) && (r[a] = o)
    }

    function Cf(t, e, n, i, r, s, o) {
      var a, l, c, u = {}, h = e.length, d = s.length, f = new Array(h);
      for (a = 0; a < h; ++a) (l = e[a]) && (f[a] = c = "$" + o.call(l, l.__data__, a, e), c in u ? r[a] = l : u[c] = l);
      for (a = 0; a < d; ++a) (l = u[c = "$" + o.call(t, s[a], a, s)]) ? (i[a] = l, l.__data__ = s[a], u[c] = null) : n[a] = new Sf(t, s[a]);
      for (a = 0; a < h; ++a) (l = e[a]) && u[f[a]] === l && (r[a] = l)
    }

    function kf(t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }

    Sf.prototype = {
      constructor: Sf, appendChild: function (t) {
        return this._parent.insertBefore(t, this._next)
      }, insertBefore: function (t, e) {
        return this._parent.insertBefore(t, e)
      }, querySelector: function (t) {
        return this._parent.querySelector(t)
      }, querySelectorAll: function (t) {
        return this._parent.querySelectorAll(t)
      }
    };
    var Ef = "http://www.w3.org/1999/xhtml", Af = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: Ef,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    }, Of = function (t) {
      var e = t += "", n = e.indexOf(":");
      return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), Af.hasOwnProperty(e) ? {
        space: Af[e],
        local: t
      } : t
    };

    function Lf(t) {
      return function () {
        this.removeAttribute(t)
      }
    }

    function Df(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local)
      }
    }

    function Mf(t, e) {
      return function () {
        this.setAttribute(t, e)
      }
    }

    function Pf(t, e) {
      return function () {
        this.setAttributeNS(t.space, t.local, e)
      }
    }

    function Rf(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
      }
    }

    function Ff(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
      }
    }

    var If = function (t) {
      return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };

    function Nf(t) {
      return function () {
        this.style.removeProperty(t)
      }
    }

    function jf(t, e, n) {
      return function () {
        this.style.setProperty(t, e, n)
      }
    }

    function Hf(t, e, n) {
      return function () {
        var i = e.apply(this, arguments);
        null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, n)
      }
    }

    function Uf(t, e) {
      return t.style.getPropertyValue(e) || If(t).getComputedStyle(t, null).getPropertyValue(e)
    }

    function $f(t) {
      return function () {
        delete this[t]
      }
    }

    function Vf(t, e) {
      return function () {
        this[t] = e
      }
    }

    function zf(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? delete this[t] : this[t] = n
      }
    }

    function Bf(t) {
      return t.trim().split(/^|\s+/)
    }

    function qf(t) {
      return t.classList || new Wf(t)
    }

    function Wf(t) {
      this._node = t, this._names = Bf(t.getAttribute("class") || "")
    }

    function Gf(t, e) {
      for (var n = qf(t), i = -1, r = e.length; ++i < r;) n.add(e[i])
    }

    function Qf(t, e) {
      for (var n = qf(t), i = -1, r = e.length; ++i < r;) n.remove(e[i])
    }

    function Yf(t) {
      return function () {
        Gf(this, t)
      }
    }

    function Zf(t) {
      return function () {
        Qf(this, t)
      }
    }

    function Xf(t, e) {
      return function () {
        (e.apply(this, arguments) ? Gf : Qf)(this, t)
      }
    }

    function Kf() {
      this.textContent = ""
    }

    function Jf(t) {
      return function () {
        this.textContent = t
      }
    }

    function tp(t) {
      return function () {
        var e = t.apply(this, arguments);
        this.textContent = null == e ? "" : e
      }
    }

    function ep() {
      this.innerHTML = ""
    }

    function np(t) {
      return function () {
        this.innerHTML = t
      }
    }

    function ip(t) {
      return function () {
        var e = t.apply(this, arguments);
        this.innerHTML = null == e ? "" : e
      }
    }

    function rp() {
      this.nextSibling && this.parentNode.appendChild(this)
    }

    function sp() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }

    function op(t) {
      return function () {
        var e = this.ownerDocument, n = this.namespaceURI;
        return n === Ef && e.documentElement.namespaceURI === Ef ? e.createElement(t) : e.createElementNS(n, t)
      }
    }

    function ap(t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local)
      }
    }

    Wf.prototype = {
      add: function (t) {
        this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
      }, remove: function (t) {
        var e = this._names.indexOf(t);
        e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")))
      }, contains: function (t) {
        return this._names.indexOf(t) >= 0
      }
    };
    var lp = function (t) {
      var e = Of(t);
      return (e.local ? ap : op)(e)
    };

    function cp() {
      return null
    }

    function up() {
      var t = this.parentNode;
      t && t.removeChild(this)
    }

    function hp() {
      var t = this.cloneNode(!1), e = this.parentNode;
      return e ? e.insertBefore(t, this.nextSibling) : t
    }

    function dp() {
      var t = this.cloneNode(!0), e = this.parentNode;
      return e ? e.insertBefore(t, this.nextSibling) : t
    }

    var fp = {}, pp = null;

    function gp(t, e, n) {
      return t = mp(t, e, n), function (e) {
        var n = e.relatedTarget;
        n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e)
      }
    }

    function mp(t, e, n) {
      return function (i) {
        var r = pp;
        pp = i;
        try {
          t.call(this, this.__data__, e, n)
        } finally {
          pp = r
        }
      }
    }

    function yp(t) {
      return t.trim().split(/^|\s+/).map((function (t) {
        var e = "", n = t.indexOf(".");
        return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), {type: t, name: e}
      }))
    }

    function vp(t) {
      return function () {
        var e = this.__on;
        if (e) {
          for (var n, i = 0, r = -1, s = e.length; i < s; ++i) n = e[i], t.type && n.type !== t.type || n.name !== t.name ? e[++r] = n : this.removeEventListener(n.type, n.listener, n.capture);
          ++r ? e.length = r : delete this.__on
        }
      }
    }

    function _p(t, e, n) {
      var i = fp.hasOwnProperty(t.type) ? gp : mp;
      return function (r, s, o) {
        var a, l = this.__on, c = i(e, s, o);
        if (l) for (var u = 0, h = l.length; u < h; ++u) if ((a = l[u]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = c, a.capture = n), void (a.value = e);
        this.addEventListener(t.type, c, n), a = {
          type: t.type,
          name: t.name,
          value: e,
          listener: c,
          capture: n
        }, l ? l.push(a) : this.__on = [a]
      }
    }

    function wp(t, e, n) {
      var i = If(t), r = i.CustomEvent;
      "function" == typeof r ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r)
    }

    function bp(t, e) {
      return function () {
        return wp(this, t, e)
      }
    }

    function xp(t, e) {
      return function () {
        return wp(this, t, e.apply(this, arguments))
      }
    }

    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (fp = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }));
    var Sp = [null];

    function Tp(t, e) {
      this._groups = t, this._parents = e
    }

    function Cp() {
      return new Tp([[document.documentElement]], Sp)
    }

    Tp.prototype = Cp.prototype = {
      constructor: Tp, select: function (t) {
        "function" != typeof t && (t = vf(t));
        for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r) for (var s, o, a = e[r], l = a.length, c = i[r] = new Array(l), u = 0; u < l; ++u) (s = a[u]) && (o = t.call(s, s.__data__, u, a)) && ("__data__" in s && (o.__data__ = s.__data__), c[u] = o);
        return new Tp(i, this._parents)
      }, selectAll: function (t) {
        "function" != typeof t && (t = wf(t));
        for (var e = this._groups, n = e.length, i = [], r = [], s = 0; s < n; ++s) for (var o, a = e[s], l = a.length, c = 0; c < l; ++c) (o = a[c]) && (i.push(t.call(o, o.__data__, c, a)), r.push(o));
        return new Tp(i, r)
      }, filter: function (t) {
        "function" != typeof t && (t = bf(t));
        for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r) for (var s, o = e[r], a = o.length, l = i[r] = [], c = 0; c < a; ++c) (s = o[c]) && t.call(s, s.__data__, c, o) && l.push(s);
        return new Tp(i, this._parents)
      }, data: function (t, e) {
        if (!t) return p = new Array(this.size()), u = -1, this.each((function (t) {
          p[++u] = t
        })), p;
        var n, i = e ? Cf : Tf, r = this._parents, s = this._groups;
        "function" != typeof t && (n = t, t = function () {
          return n
        });
        for (var o = s.length, a = new Array(o), l = new Array(o), c = new Array(o), u = 0; u < o; ++u) {
          var h = r[u], d = s[u], f = d.length, p = t.call(h, h && h.__data__, u, r), g = p.length,
            m = l[u] = new Array(g), y = a[u] = new Array(g);
          i(h, d, m, y, c[u] = new Array(f), p, e);
          for (var v, _, w = 0, b = 0; w < g; ++w) if (v = m[w]) {
            for (w >= b && (b = w + 1); !(_ = y[b]) && ++b < g;) ;
            v._next = _ || null
          }
        }
        return (a = new Tp(a, r))._enter = l, a._exit = c, a
      }, enter: function () {
        return new Tp(this._enter || this._groups.map(xf), this._parents)
      }, exit: function () {
        return new Tp(this._exit || this._groups.map(xf), this._parents)
      }, join: function (t, e, n) {
        var i = this.enter(), r = this, s = this.exit();
        return i = "function" == typeof t ? t(i) : i.append(t + ""), null != e && (r = e(r)), null == n ? s.remove() : n(s), i && r ? i.merge(r).order() : r
      }, merge: function (t) {
        for (var e = this._groups, n = t._groups, i = e.length, r = Math.min(i, n.length), s = new Array(i), o = 0; o < r; ++o) for (var a, l = e[o], c = n[o], u = l.length, h = s[o] = new Array(u), d = 0; d < u; ++d) (a = l[d] || c[d]) && (h[d] = a);
        for (; o < i; ++o) s[o] = e[o];
        return new Tp(s, this._parents)
      }, order: function () {
        for (var t = this._groups, e = -1, n = t.length; ++e < n;) for (var i, r = t[e], s = r.length - 1, o = r[s]; --s >= 0;) (i = r[s]) && (o && 4 ^ i.compareDocumentPosition(o) && o.parentNode.insertBefore(i, o), o = i);
        return this
      }, sort: function (t) {
        function e(e, n) {
          return e && n ? t(e.__data__, n.__data__) : !e - !n
        }

        t || (t = kf);
        for (var n = this._groups, i = n.length, r = new Array(i), s = 0; s < i; ++s) {
          for (var o, a = n[s], l = a.length, c = r[s] = new Array(l), u = 0; u < l; ++u) (o = a[u]) && (c[u] = o);
          c.sort(e)
        }
        return new Tp(r, this._parents).order()
      }, call: function () {
        var t = arguments[0];
        return arguments[0] = this, t.apply(null, arguments), this
      }, nodes: function () {
        var t = new Array(this.size()), e = -1;
        return this.each((function () {
          t[++e] = this
        })), t
      }, node: function () {
        for (var t = this._groups, e = 0, n = t.length; e < n; ++e) for (var i = t[e], r = 0, s = i.length; r < s; ++r) {
          var o = i[r];
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
        for (var e = this._groups, n = 0, i = e.length; n < i; ++n) for (var r, s = e[n], o = 0, a = s.length; o < a; ++o) (r = s[o]) && t.call(r, r.__data__, o, s);
        return this
      }, attr: function (t, e) {
        var n = Of(t);
        if (arguments.length < 2) {
          var i = this.node();
          return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n)
        }
        return this.each((null == e ? n.local ? Df : Lf : "function" == typeof e ? n.local ? Ff : Rf : n.local ? Pf : Mf)(n, e))
      }, style: function (t, e, n) {
        return arguments.length > 1 ? this.each((null == e ? Nf : "function" == typeof e ? Hf : jf)(t, e, null == n ? "" : n)) : Uf(this.node(), t)
      }, property: function (t, e) {
        return arguments.length > 1 ? this.each((null == e ? $f : "function" == typeof e ? zf : Vf)(t, e)) : this.node()[t]
      }, classed: function (t, e) {
        var n = Bf(t + "");
        if (arguments.length < 2) {
          for (var i = qf(this.node()), r = -1, s = n.length; ++r < s;) if (!i.contains(n[r])) return !1;
          return !0
        }
        return this.each(("function" == typeof e ? Xf : e ? Yf : Zf)(n, e))
      }, text: function (t) {
        return arguments.length ? this.each(null == t ? Kf : ("function" == typeof t ? tp : Jf)(t)) : this.node().textContent
      }, html: function (t) {
        return arguments.length ? this.each(null == t ? ep : ("function" == typeof t ? ip : np)(t)) : this.node().innerHTML
      }, raise: function () {
        return this.each(rp)
      }, lower: function () {
        return this.each(sp)
      }, append: function (t) {
        var e = "function" == typeof t ? t : lp(t);
        return this.select((function () {
          return this.appendChild(e.apply(this, arguments))
        }))
      }, insert: function (t, e) {
        var n = "function" == typeof t ? t : lp(t), i = null == e ? cp : "function" == typeof e ? e : vf(e);
        return this.select((function () {
          return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null)
        }))
      }, remove: function () {
        return this.each(up)
      }, clone: function (t) {
        return this.select(t ? dp : hp)
      }, datum: function (t) {
        return arguments.length ? this.property("__data__", t) : this.node().__data__
      }, on: function (t, e, n) {
        var i, r, s = yp(t + ""), o = s.length;
        if (!(arguments.length < 2)) {
          for (a = e ? _p : vp, null == n && (n = !1), i = 0; i < o; ++i) this.each(a(s[i], e, n));
          return this
        }
        var a = this.node().__on;
        if (a) for (var l, c = 0, u = a.length; c < u; ++c) for (i = 0, l = a[c]; i < o; ++i) if ((r = s[i]).type === l.type && r.name === l.name) return l.value
      }, dispatch: function (t, e) {
        return this.each(("function" == typeof e ? xp : bp)(t, e))
      }
    };
    var kp = Cp, Ep = function (t) {
      return "string" == typeof t ? new Tp([[document.querySelector(t)]], [document.documentElement]) : new Tp([[t]], Sp)
    }, Ap = {
      value: function () {
      }
    };

    function Op() {
      for (var t, e = 0, n = arguments.length, i = {}; e < n; ++e) {
        if (!(t = arguments[e] + "") || t in i || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        i[t] = []
      }
      return new Lp(i)
    }

    function Lp(t) {
      this._ = t
    }

    function Dp(t, e) {
      return t.trim().split(/^|\s+/).map((function (t) {
        var n = "", i = t.indexOf(".");
        if (i >= 0 && (n = t.slice(i + 1), t = t.slice(0, i)), t && !e.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {type: t, name: n}
      }))
    }

    function Mp(t, e) {
      for (var n, i = 0, r = t.length; i < r; ++i) if ((n = t[i]).name === e) return n.value
    }

    function Pp(t, e, n) {
      for (var i = 0, r = t.length; i < r; ++i) if (t[i].name === e) {
        t[i] = Ap, t = t.slice(0, i).concat(t.slice(i + 1));
        break
      }
      return null != n && t.push({name: e, value: n}), t
    }

    Lp.prototype = Op.prototype = {
      constructor: Lp, on: function (t, e) {
        var n, i = this._, r = Dp(t + "", i), s = -1, o = r.length;
        if (!(arguments.length < 2)) {
          if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);
          for (; ++s < o;) if (n = (t = r[s]).type) i[n] = Pp(i[n], t.name, e); else if (null == e) for (n in i) i[n] = Pp(i[n], t.name, null);
          return this
        }
        for (; ++s < o;) if ((n = (t = r[s]).type) && (n = Mp(i[n], t.name))) return n
      }, copy: function () {
        var t = {}, e = this._;
        for (var n in e) t[n] = e[n].slice();
        return new Lp(t)
      }, call: function (t, e) {
        if ((n = arguments.length - 2) > 0) for (var n, i, r = new Array(n), s = 0; s < n; ++s) r[s] = arguments[s + 2];
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (s = 0, n = (i = this._[t]).length; s < n; ++s) i[s].value.apply(e, r)
      }, apply: function (t, e, n) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (var i = this._[t], r = 0, s = i.length; r < s; ++r) i[r].value.apply(e, n)
      }
    };
    var Rp = Op, Fp = function (t, e, n) {
      t.prototype = e.prototype = n, n.constructor = t
    };

    function Ip(t, e) {
      var n = Object.create(t.prototype);
      for (var i in e) n[i] = e[i];
      return n
    }

    function Np() {
    }

    var jp = "\\s*([+-]?\\d+)\\s*", Hp = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Up = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $p = /^#([0-9a-f]{3,8})$/,
      Vp = new RegExp("^rgb\\(" + [jp, jp, jp] + "\\)$"), zp = new RegExp("^rgb\\(" + [Up, Up, Up] + "\\)$"),
      Bp = new RegExp("^rgba\\(" + [jp, jp, jp, Hp] + "\\)$"), qp = new RegExp("^rgba\\(" + [Up, Up, Up, Hp] + "\\)$"),
      Wp = new RegExp("^hsl\\(" + [Hp, Up, Up] + "\\)$"), Gp = new RegExp("^hsla\\(" + [Hp, Up, Up, Hp] + "\\)$"),
      Qp = {
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

    function Yp() {
      return this.rgb().formatHex()
    }

    function Zp() {
      return this.rgb().formatRgb()
    }

    function Xp(t) {
      var e, n;
      return t = (t + "").trim().toLowerCase(), (e = $p.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), 6 === n ? Kp(e) : 3 === n ? new ng(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === n ? new ng(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? new ng(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = Vp.exec(t)) ? new ng(e[1], e[2], e[3], 1) : (e = zp.exec(t)) ? new ng(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = Bp.exec(t)) ? Jp(e[1], e[2], e[3], e[4]) : (e = qp.exec(t)) ? Jp(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = Wp.exec(t)) ? og(e[1], e[2] / 100, e[3] / 100, 1) : (e = Gp.exec(t)) ? og(e[1], e[2] / 100, e[3] / 100, e[4]) : Qp.hasOwnProperty(t) ? Kp(Qp[t]) : "transparent" === t ? new ng(NaN, NaN, NaN, 0) : null
    }

    function Kp(t) {
      return new ng(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }

    function Jp(t, e, n, i) {
      return i <= 0 && (t = e = n = NaN), new ng(t, e, n, i)
    }

    function tg(t) {
      return t instanceof Np || (t = Xp(t)), t ? new ng((t = t.rgb()).r, t.g, t.b, t.opacity) : new ng
    }

    function eg(t, e, n, i) {
      return 1 === arguments.length ? tg(t) : new ng(t, e, n, null == i ? 1 : i)
    }

    function ng(t, e, n, i) {
      this.r = +t, this.g = +e, this.b = +n, this.opacity = +i
    }

    function ig() {
      return "#" + sg(this.r) + sg(this.g) + sg(this.b)
    }

    function rg() {
      var t = this.opacity;
      return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
    }

    function sg(t) {
      return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
    }

    function og(t, e, n, i) {
      return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new lg(t, e, n, i)
    }

    function ag(t) {
      if (t instanceof lg) return new lg(t.h, t.s, t.l, t.opacity);
      if (t instanceof Np || (t = Xp(t)), !t) return new lg;
      if (t instanceof lg) return t;
      var e = (t = t.rgb()).r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), s = Math.max(e, n, i),
        o = NaN, a = s - r, l = (s + r) / 2;
      return a ? (o = e === s ? (n - i) / a + 6 * (n < i) : n === s ? (i - e) / a + 2 : (e - n) / a + 4, a /= l < .5 ? s + r : 2 - s - r, o *= 60) : a = l > 0 && l < 1 ? 0 : o, new lg(o, a, l, t.opacity)
    }

    function lg(t, e, n, i) {
      this.h = +t, this.s = +e, this.l = +n, this.opacity = +i
    }

    function cg(t, e, n) {
      return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
    }

    function ug(t, e, n, i, r) {
      var s = t * t, o = s * t;
      return ((1 - 3 * t + 3 * s - o) * e + (4 - 6 * s + 3 * o) * n + (1 + 3 * t + 3 * s - 3 * o) * i + o * r) / 6
    }

    Fp(Np, Xp, {
      copy: function (t) {
        return Object.assign(new this.constructor, this, t)
      }, displayable: function () {
        return this.rgb().displayable()
      }, hex: Yp, formatHex: Yp, formatHsl: function () {
        return ag(this).formatHsl()
      }, formatRgb: Zp, toString: Zp
    }), Fp(ng, eg, Ip(Np, {
      brighter: function (t) {
        return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new ng(this.r * t, this.g * t, this.b * t, this.opacity)
      }, darker: function (t) {
        return t = null == t ? .7 : Math.pow(.7, t), new ng(this.r * t, this.g * t, this.b * t, this.opacity)
      }, rgb: function () {
        return this
      }, displayable: function () {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      }, hex: ig, formatHex: ig, formatRgb: rg, toString: rg
    })), Fp(lg, (function (t, e, n, i) {
      return 1 === arguments.length ? ag(t) : new lg(t, e, n, null == i ? 1 : i)
    }), Ip(Np, {
      brighter: function (t) {
        return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new lg(this.h, this.s, this.l * t, this.opacity)
      }, darker: function (t) {
        return t = null == t ? .7 : Math.pow(.7, t), new lg(this.h, this.s, this.l * t, this.opacity)
      }, rgb: function () {
        var t = this.h % 360 + 360 * (this.h < 0), e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l,
          i = n + (n < .5 ? n : 1 - n) * e, r = 2 * n - i;
        return new ng(cg(t >= 240 ? t - 240 : t + 120, r, i), cg(t, r, i), cg(t < 120 ? t + 240 : t - 120, r, i), this.opacity)
      }, displayable: function () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      }, formatHsl: function () {
        var t = this.opacity;
        return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
      }
    }));
    var hg = function (t) {
      return function () {
        return t
      }
    };

    function dg(t, e) {
      var n = e - t;
      return n ? function (t, e) {
        return function (n) {
          return t + n * e
        }
      }(t, n) : hg(isNaN(t) ? e : t)
    }

    var fg = function t(e) {
      var n = function (t) {
        return 1 == (t = +t) ? dg : function (e, n) {
          return n - e ? function (t, e, n) {
            return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (i) {
              return Math.pow(t + i * e, n)
            }
          }(e, n, t) : hg(isNaN(e) ? n : e)
        }
      }(e);

      function i(t, e) {
        var i = n((t = eg(t)).r, (e = eg(e)).r), r = n(t.g, e.g), s = n(t.b, e.b), o = dg(t.opacity, e.opacity);
        return function (e) {
          return t.r = i(e), t.g = r(e), t.b = s(e), t.opacity = o(e), t + ""
        }
      }

      return i.gamma = t, i
    }(1);

    function pg(t) {
      return function (e) {
        var n, i, r = e.length, s = new Array(r), o = new Array(r), a = new Array(r);
        for (n = 0; n < r; ++n) i = eg(e[n]), s[n] = i.r || 0, o[n] = i.g || 0, a[n] = i.b || 0;
        return s = t(s), o = t(o), a = t(a), i.opacity = 1, function (t) {
          return i.r = s(t), i.g = o(t), i.b = a(t), i + ""
        }
      }
    }

    pg((function (t) {
      var e = t.length - 1;
      return function (n) {
        var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e), r = t[i], s = t[i + 1];
        return ug((n - i / e) * e, i > 0 ? t[i - 1] : 2 * r - s, r, s, i < e - 1 ? t[i + 2] : 2 * s - r)
      }
    })), pg((function (t) {
      var e = t.length;
      return function (n) {
        var i = Math.floor(((n %= 1) < 0 ? ++n : n) * e);
        return ug((n - i / e) * e, t[(i + e - 1) % e], t[i % e], t[(i + 1) % e], t[(i + 2) % e])
      }
    }));
    var gg = function (t, e) {
      e || (e = []);
      var n, i = t ? Math.min(e.length, t.length) : 0, r = e.slice();
      return function (s) {
        for (n = 0; n < i; ++n) r[n] = t[n] * (1 - s) + e[n] * s;
        return r
      }
    };

    function mg(t, e) {
      var n, i = e ? e.length : 0, r = t ? Math.min(i, t.length) : 0, s = new Array(r), o = new Array(i);
      for (n = 0; n < r; ++n) s[n] = Cg(t[n], e[n]);
      for (; n < i; ++n) o[n] = e[n];
      return function (t) {
        for (n = 0; n < r; ++n) o[n] = s[n](t);
        return o
      }
    }

    var yg, vg, _g = function (t, e) {
        var n = new Date;
        return t = +t, e = +e, function (i) {
          return n.setTime(t * (1 - i) + e * i), n
        }
      }, wg = function (t, e) {
        return t = +t, e = +e, function (n) {
          return t * (1 - n) + e * n
        }
      }, bg = function (t, e) {
        var n, i = {}, r = {};
        for (n in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e) n in t ? i[n] = Cg(t[n], e[n]) : r[n] = e[n];
        return function (t) {
          for (n in i) r[n] = i[n](t);
          return r
        }
      }, xg = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Sg = new RegExp(xg.source, "g"), Tg = function (t, e) {
        var n, i, r, s = xg.lastIndex = Sg.lastIndex = 0, o = -1, a = [], l = [];
        for (t += "", e += ""; (n = xg.exec(t)) && (i = Sg.exec(e));) (r = i.index) > s && (r = e.slice(s, r), a[o] ? a[o] += r : a[++o] = r), (n = n[0]) === (i = i[0]) ? a[o] ? a[o] += i : a[++o] = i : (a[++o] = null, l.push({
          i: o,
          x: wg(n, i)
        })), s = Sg.lastIndex;
        return s < e.length && (r = e.slice(s), a[o] ? a[o] += r : a[++o] = r), a.length < 2 ? l[0] ? function (t) {
          return function (e) {
            return t(e) + ""
          }
        }(l[0].x) : function (t) {
          return function () {
            return t
          }
        }(e) : (e = l.length, function (t) {
          for (var n, i = 0; i < e; ++i) a[(n = l[i]).i] = n.x(t);
          return a.join("")
        })
      }, Cg = function (t, e) {
        var n, i, r = typeof e;
        return null == e || "boolean" === r ? hg(e) : ("number" === r ? wg : "string" === r ? (n = Xp(e)) ? (e = n, fg) : Tg : e instanceof Xp ? fg : e instanceof Date ? _g : (i = e, !ArrayBuffer.isView(i) || i instanceof DataView ? Array.isArray(e) ? mg : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? bg : wg : gg))(t, e)
      }, kg = 0, Eg = 0, Ag = 0, Og = 0, Lg = 0, Dg = 0,
      Mg = "object" == typeof performance && performance.now ? performance : Date,
      Pg = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
        setTimeout(t, 17)
      };

    function Rg() {
      return Lg || (Pg(Fg), Lg = Mg.now() + Dg)
    }

    function Fg() {
      Lg = 0
    }

    function Ig() {
      this._call = this._time = this._next = null
    }

    function Ng(t, e, n) {
      var i = new Ig;
      return i.restart(t, e, n), i
    }

    function jg() {
      Lg = (Og = Mg.now()) + Dg, kg = Eg = 0;
      try {
        !function () {
          Rg(), ++kg;
          for (var t, e = yg; e;) (t = Lg - e._time) >= 0 && e._call.call(null, t), e = e._next;
          --kg
        }()
      } finally {
        kg = 0, function () {
          for (var t, e, n = yg, i = 1 / 0; n;) n._call ? (i > n._time && (i = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : yg = e);
          vg = t, Ug(i)
        }(), Lg = 0
      }
    }

    function Hg() {
      var t = Mg.now(), e = t - Og;
      e > 1e3 && (Dg -= e, Og = t)
    }

    function Ug(t) {
      kg || (Eg && (Eg = clearTimeout(Eg)), t - Lg > 24 ? (t < 1 / 0 && (Eg = setTimeout(jg, t - Mg.now() - Dg)), Ag && (Ag = clearInterval(Ag))) : (Ag || (Og = Mg.now(), Ag = setInterval(Hg, 1e3)), kg = 1, Pg(jg)))
    }

    Ig.prototype = Ng.prototype = {
      constructor: Ig, restart: function (t, e, n) {
        if ("function" != typeof t) throw new TypeError("callback is not a function");
        n = (null == n ? Rg() : +n) + (null == e ? 0 : +e), this._next || vg === this || (vg ? vg._next = this : yg = this, vg = this), this._call = t, this._time = n, Ug()
      }, stop: function () {
        this._call && (this._call = null, this._time = 1 / 0, Ug())
      }
    };
    var $g = function (t, e, n) {
      var i = new Ig;
      return i.restart((function (n) {
        i.stop(), t(n + e)
      }), e = null == e ? 0 : +e, n), i
    }, Vg = Rp("start", "end", "cancel", "interrupt"), zg = [], Bg = function (t, e, n, i, r, s) {
      var o = t.__transition;
      if (o) {
        if (n in o) return
      } else t.__transition = {};
      !function (t, e, n) {
        var i, r = t.__transition;

        function s(l) {
          var c, u, h, d;
          if (1 !== n.state) return a();
          for (c in r) if ((d = r[c]).name === n.name) {
            if (3 === d.state) return $g(s);
            4 === d.state ? (d.state = 6, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[c]) : +c < e && (d.state = 6, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[c])
          }
          if ($g((function () {
            3 === n.state && (n.state = 4, n.timer.restart(o, n.delay, n.time), o(l))
          })), n.state = 2, n.on.call("start", t, t.__data__, n.index, n.group), 2 === n.state) {
            for (n.state = 3, i = new Array(h = n.tween.length), c = 0, u = -1; c < h; ++c) (d = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++u] = d);
            i.length = u + 1
          }
        }

        function o(e) {
          for (var r = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(a), n.state = 5, 1), s = -1, o = i.length; ++s < o;) i[s].call(t, r);
          5 === n.state && (n.on.call("end", t, t.__data__, n.index, n.group), a())
        }

        function a() {
          for (var i in n.state = 6, n.timer.stop(), delete r[e], r) return;
          delete t.__transition
        }

        r[e] = n, n.timer = Ng((function (t) {
          n.state = 1, n.timer.restart(s, n.delay, n.time), n.delay <= t && s(t - n.delay)
        }), 0, n.time)
      }(t, n, {
        name: e,
        index: i,
        group: r,
        on: Vg,
        tween: zg,
        time: s.time,
        delay: s.delay,
        duration: s.duration,
        ease: s.ease,
        timer: null,
        state: 0
      })
    };

    function qg(t, e) {
      var n = Gg(t, e);
      if (n.state > 0) throw new Error("too late; already scheduled");
      return n
    }

    function Wg(t, e) {
      var n = Gg(t, e);
      if (n.state > 3) throw new Error("too late; already running");
      return n
    }

    function Gg(t, e) {
      var n = t.__transition;
      if (!n || !(n = n[e])) throw new Error("transition not found");
      return n
    }

    var Qg, Yg, Zg, Xg, Kg = 180 / Math.PI,
      Jg = {translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1}, tm = function (t, e, n, i, r, s) {
        var o, a, l;
        return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (l = t * n + e * i) && (n -= t * l, i -= e * l), (a = Math.sqrt(n * n + i * i)) && (n /= a, i /= a, l /= a), t * i < e * n && (t = -t, e = -e, l = -l, o = -o), {
          translateX: r,
          translateY: s,
          rotate: Math.atan2(e, t) * Kg,
          skewX: Math.atan(l) * Kg,
          scaleX: o,
          scaleY: a
        }
      };

    function em(t, e, n, i) {
      function r(t) {
        return t.length ? t.pop() + " " : ""
      }

      return function (s, o) {
        var a = [], l = [];
        return s = t(s), o = t(o), function (t, i, r, s, o, a) {
          if (t !== r || i !== s) {
            var l = o.push("translate(", null, e, null, n);
            a.push({i: l - 4, x: wg(t, r)}, {i: l - 2, x: wg(i, s)})
          } else (r || s) && o.push("translate(" + r + e + s + n)
        }(s.translateX, s.translateY, o.translateX, o.translateY, a, l), function (t, e, n, s) {
          t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), s.push({
            i: n.push(r(n) + "rotate(", null, i) - 2,
            x: wg(t, e)
          })) : e && n.push(r(n) + "rotate(" + e + i)
        }(s.rotate, o.rotate, a, l), function (t, e, n, s) {
          t !== e ? s.push({
            i: n.push(r(n) + "skewX(", null, i) - 2,
            x: wg(t, e)
          }) : e && n.push(r(n) + "skewX(" + e + i)
        }(s.skewX, o.skewX, a, l), function (t, e, n, i, s, o) {
          if (t !== n || e !== i) {
            var a = s.push(r(s) + "scale(", null, ",", null, ")");
            o.push({i: a - 4, x: wg(t, n)}, {i: a - 2, x: wg(e, i)})
          } else 1 === n && 1 === i || s.push(r(s) + "scale(" + n + "," + i + ")")
        }(s.scaleX, s.scaleY, o.scaleX, o.scaleY, a, l), s = o = null, function (t) {
          for (var e, n = -1, i = l.length; ++n < i;) a[(e = l[n]).i] = e.x(t);
          return a.join("")
        }
      }
    }

    var nm = em((function (t) {
      return "none" === t ? Jg : (Qg || (Qg = document.createElement("DIV"), Yg = document.documentElement, Zg = document.defaultView), Qg.style.transform = t, t = Zg.getComputedStyle(Yg.appendChild(Qg), null).getPropertyValue("transform"), Yg.removeChild(Qg), t = t.slice(7, -1).split(","), tm(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
    }), "px, ", "px)", "deg)"), im = em((function (t) {
      return null == t ? Jg : (Xg || (Xg = document.createElementNS("http://www.w3.org/2000/svg", "g")), Xg.setAttribute("transform", t), (t = Xg.transform.baseVal.consolidate()) ? tm((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : Jg)
    }), ", ", ")", ")");

    function rm(t, e) {
      var n, i;
      return function () {
        var r = Wg(this, t), s = r.tween;
        if (s !== n) for (var o = 0, a = (i = n = s).length; o < a; ++o) if (i[o].name === e) {
          (i = i.slice()).splice(o, 1);
          break
        }
        r.tween = i
      }
    }

    function sm(t, e, n) {
      var i, r;
      if ("function" != typeof n) throw new Error;
      return function () {
        var s = Wg(this, t), o = s.tween;
        if (o !== i) {
          r = (i = o).slice();
          for (var a = {name: e, value: n}, l = 0, c = r.length; l < c; ++l) if (r[l].name === e) {
            r[l] = a;
            break
          }
          l === c && r.push(a)
        }
        s.tween = r
      }
    }

    function om(t, e, n) {
      var i = t._id;
      return t.each((function () {
        var t = Wg(this, i);
        (t.value || (t.value = {}))[e] = n.apply(this, arguments)
      })), function (t) {
        return Gg(t, i).value[e]
      }
    }

    var am = function (t, e) {
      var n;
      return ("number" == typeof e ? wg : e instanceof Xp ? fg : (n = Xp(e)) ? (e = n, fg) : Tg)(t, e)
    };

    function lm(t) {
      return function () {
        this.removeAttribute(t)
      }
    }

    function cm(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local)
      }
    }

    function um(t, e, n) {
      var i, r, s = n + "";
      return function () {
        var o = this.getAttribute(t);
        return o === s ? null : o === i ? r : r = e(i = o, n)
      }
    }

    function hm(t, e, n) {
      var i, r, s = n + "";
      return function () {
        var o = this.getAttributeNS(t.space, t.local);
        return o === s ? null : o === i ? r : r = e(i = o, n)
      }
    }

    function dm(t, e, n) {
      var i, r, s;
      return function () {
        var o, a, l = n(this);
        if (null != l) return (o = this.getAttribute(t)) === (a = l + "") ? null : o === i && a === r ? s : (r = a, s = e(i = o, l));
        this.removeAttribute(t)
      }
    }

    function fm(t, e, n) {
      var i, r, s;
      return function () {
        var o, a, l = n(this);
        if (null != l) return (o = this.getAttributeNS(t.space, t.local)) === (a = l + "") ? null : o === i && a === r ? s : (r = a, s = e(i = o, l));
        this.removeAttributeNS(t.space, t.local)
      }
    }

    function pm(t, e) {
      return function (n) {
        this.setAttribute(t, e.call(this, n))
      }
    }

    function gm(t, e) {
      return function (n) {
        this.setAttributeNS(t.space, t.local, e.call(this, n))
      }
    }

    function mm(t, e) {
      var n, i;

      function r() {
        var r = e.apply(this, arguments);
        return r !== i && (n = (i = r) && gm(t, r)), n
      }

      return r._value = e, r
    }

    function ym(t, e) {
      var n, i;

      function r() {
        var r = e.apply(this, arguments);
        return r !== i && (n = (i = r) && pm(t, r)), n
      }

      return r._value = e, r
    }

    function vm(t, e) {
      return function () {
        qg(this, t).delay = +e.apply(this, arguments)
      }
    }

    function _m(t, e) {
      return e = +e, function () {
        qg(this, t).delay = e
      }
    }

    function wm(t, e) {
      return function () {
        Wg(this, t).duration = +e.apply(this, arguments)
      }
    }

    function bm(t, e) {
      return e = +e, function () {
        Wg(this, t).duration = e
      }
    }

    function xm(t, e) {
      if ("function" != typeof e) throw new Error;
      return function () {
        Wg(this, t).ease = e
      }
    }

    function Sm(t, e, n) {
      var i, r, s = function (t) {
        return (t + "").trim().split(/^|\s+/).every((function (t) {
          var e = t.indexOf(".");
          return e >= 0 && (t = t.slice(0, e)), !t || "start" === t
        }))
      }(e) ? qg : Wg;
      return function () {
        var o = s(this, t), a = o.on;
        a !== i && (r = (i = a).copy()).on(e, n), o.on = r
      }
    }

    var Tm = kp.prototype.constructor;

    function Cm(t) {
      return function () {
        this.style.removeProperty(t)
      }
    }

    function km(t, e, n) {
      return function (i) {
        this.style.setProperty(t, e.call(this, i), n)
      }
    }

    function Em(t, e, n) {
      var i, r;

      function s() {
        var s = e.apply(this, arguments);
        return s !== r && (i = (r = s) && km(t, s, n)), i
      }

      return s._value = e, s
    }

    function Am(t) {
      return function (e) {
        this.textContent = t.call(this, e)
      }
    }

    function Om(t) {
      var e, n;

      function i() {
        var i = t.apply(this, arguments);
        return i !== n && (e = (n = i) && Am(i)), e
      }

      return i._value = t, i
    }

    var Lm = 0;

    function Dm(t, e, n, i) {
      this._groups = t, this._parents = e, this._name = n, this._id = i
    }

    function Mm() {
      return ++Lm
    }

    var Pm = kp.prototype;
    Dm.prototype = (function (t) {
      return kp().transition(t)
    }).prototype = {
      constructor: Dm,
      select: function (t) {
        var e = this._name, n = this._id;
        "function" != typeof t && (t = vf(t));
        for (var i = this._groups, r = i.length, s = new Array(r), o = 0; o < r; ++o) for (var a, l, c = i[o], u = c.length, h = s[o] = new Array(u), d = 0; d < u; ++d) (a = c[d]) && (l = t.call(a, a.__data__, d, c)) && ("__data__" in a && (l.__data__ = a.__data__), h[d] = l, Bg(h[d], e, n, d, h, Gg(a, n)));
        return new Dm(s, this._parents, e, n)
      },
      selectAll: function (t) {
        var e = this._name, n = this._id;
        "function" != typeof t && (t = wf(t));
        for (var i = this._groups, r = i.length, s = [], o = [], a = 0; a < r; ++a) for (var l, c = i[a], u = c.length, h = 0; h < u; ++h) if (l = c[h]) {
          for (var d, f = t.call(l, l.__data__, h, c), p = Gg(l, n), g = 0, m = f.length; g < m; ++g) (d = f[g]) && Bg(d, e, n, g, f, p);
          s.push(f), o.push(l)
        }
        return new Dm(s, o, e, n)
      },
      filter: function (t) {
        "function" != typeof t && (t = bf(t));
        for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r) for (var s, o = e[r], a = o.length, l = i[r] = [], c = 0; c < a; ++c) (s = o[c]) && t.call(s, s.__data__, c, o) && l.push(s);
        return new Dm(i, this._parents, this._name, this._id)
      },
      merge: function (t) {
        if (t._id !== this._id) throw new Error;
        for (var e = this._groups, n = t._groups, i = e.length, r = Math.min(i, n.length), s = new Array(i), o = 0; o < r; ++o) for (var a, l = e[o], c = n[o], u = l.length, h = s[o] = new Array(u), d = 0; d < u; ++d) (a = l[d] || c[d]) && (h[d] = a);
        for (; o < i; ++o) s[o] = e[o];
        return new Dm(s, this._parents, this._name, this._id)
      },
      selection: function () {
        return new Tm(this._groups, this._parents)
      },
      transition: function () {
        for (var t = this._name, e = this._id, n = Mm(), i = this._groups, r = i.length, s = 0; s < r; ++s) for (var o, a = i[s], l = a.length, c = 0; c < l; ++c) if (o = a[c]) {
          var u = Gg(o, e);
          Bg(o, t, n, c, a, {time: u.time + u.delay + u.duration, delay: 0, duration: u.duration, ease: u.ease})
        }
        return new Dm(i, this._parents, t, n)
      },
      call: Pm.call,
      nodes: Pm.nodes,
      node: Pm.node,
      size: Pm.size,
      empty: Pm.empty,
      each: Pm.each,
      on: function (t, e) {
        var n = this._id;
        return arguments.length < 2 ? Gg(this.node(), n).on.on(t) : this.each(Sm(n, t, e))
      },
      attr: function (t, e) {
        var n = Of(t), i = "transform" === n ? im : am;
        return this.attrTween(t, "function" == typeof e ? (n.local ? fm : dm)(n, i, om(this, "attr." + t, e)) : null == e ? (n.local ? cm : lm)(n) : (n.local ? hm : um)(n, i, e))
      },
      attrTween: function (t, e) {
        var n = "attr." + t;
        if (arguments.length < 2) return (n = this.tween(n)) && n._value;
        if (null == e) return this.tween(n, null);
        if ("function" != typeof e) throw new Error;
        var i = Of(t);
        return this.tween(n, (i.local ? mm : ym)(i, e))
      },
      style: function (t, e, n) {
        var i = "transform" == (t += "") ? nm : am;
        return null == e ? this.styleTween(t, function (t, e) {
          var n, i, r;
          return function () {
            var s = Uf(this, t), o = (this.style.removeProperty(t), Uf(this, t));
            return s === o ? null : s === n && o === i ? r : r = e(n = s, i = o)
          }
        }(t, i)).on("end.style." + t, Cm(t)) : "function" == typeof e ? this.styleTween(t, function (t, e, n) {
          var i, r, s;
          return function () {
            var o = Uf(this, t), a = n(this), l = a + "";
            return null == a && (this.style.removeProperty(t), l = a = Uf(this, t)), o === l ? null : o === i && l === r ? s : (r = l, s = e(i = o, a))
          }
        }(t, i, om(this, "style." + t, e))).each(function (t, e) {
          var n, i, r, s, o = "style." + e, a = "end." + o;
          return function () {
            var l = Wg(this, t), c = l.on, u = null == l.value[o] ? s || (s = Cm(e)) : void 0;
            c === n && r === u || (i = (n = c).copy()).on(a, r = u), l.on = i
          }
        }(this._id, t)) : this.styleTween(t, function (t, e, n) {
          var i, r, s = n + "";
          return function () {
            var o = Uf(this, t);
            return o === s ? null : o === i ? r : r = e(i = o, n)
          }
        }(t, i, e), n).on("end.style." + t, null)
      },
      styleTween: function (t, e, n) {
        var i = "style." + (t += "");
        if (arguments.length < 2) return (i = this.tween(i)) && i._value;
        if (null == e) return this.tween(i, null);
        if ("function" != typeof e) throw new Error;
        return this.tween(i, Em(t, e, null == n ? "" : n))
      },
      text: function (t) {
        return this.tween("text", "function" == typeof t ? function (t) {
          return function () {
            var e = t(this);
            this.textContent = null == e ? "" : e
          }
        }(om(this, "text", t)) : function (t) {
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
        return this.tween(e, Om(t))
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
          for (var i, r = Gg(this.node(), n).tween, s = 0, o = r.length; s < o; ++s) if ((i = r[s]).name === t) return i.value;
          return null
        }
        return this.each((null == e ? rm : sm)(n, t, e))
      },
      delay: function (t) {
        var e = this._id;
        return arguments.length ? this.each(("function" == typeof t ? vm : _m)(e, t)) : Gg(this.node(), e).delay
      },
      duration: function (t) {
        var e = this._id;
        return arguments.length ? this.each(("function" == typeof t ? wm : bm)(e, t)) : Gg(this.node(), e).duration
      },
      ease: function (t) {
        var e = this._id;
        return arguments.length ? this.each(xm(e, t)) : Gg(this.node(), e).ease
      },
      end: function () {
        var t, e, n = this, i = n._id, r = n.size();
        return new Promise((function (s, o) {
          var a = {value: o}, l = {
            value: function () {
              0 == --r && s()
            }
          };
          n.each((function () {
            var n = Wg(this, i), r = n.on;
            r !== t && ((e = (t = r).copy())._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), n.on = e
          }))
        }))
      }
    };
    var Rm = {
      time: null, delay: 0, duration: 250, ease: function (t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
      }
    };

    function Fm(t, e) {
      for (var n; !(n = t.__transition) || !(n = n[e]);) if (!(t = t.parentNode)) return Rm.time = Rg(), Rm;
      return n
    }

    function Im(t) {
      return {type: t}
    }

    kp.prototype.interrupt = function (t) {
      return this.each((function () {
        !function (t, e) {
          var n, i, r, s = t.__transition, o = !0;
          if (s) {
            for (r in e = null == e ? null : e + "", s) (n = s[r]).name === e ? (i = n.state > 2 && n.state < 5, n.state = 6, n.timer.stop(), n.on.call(i ? "interrupt" : "cancel", t, t.__data__, n.index, n.group), delete s[r]) : o = !1;
            o && delete t.__transition
          }
        }(this, t)
      }))
    }, kp.prototype.transition = function (t) {
      var e, n;
      t instanceof Dm ? (e = t._id, t = t._name) : (e = Mm(), (n = Rm).time = Rg(), t = null == t ? null : t + "");
      for (var i = this._groups, r = i.length, s = 0; s < r; ++s) for (var o, a = i[s], l = a.length, c = 0; c < l; ++c) (o = a[c]) && Bg(o, t, e, c, a, n || Fm(o, e));
      return new Dm(i, this._parents, t, e)
    }, ["w", "e"].map(Im), ["n", "s"].map(Im), ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(Im);
    var Nm = function (t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }, jm = Math.sqrt(50), Hm = Math.sqrt(10), Um = Math.sqrt(2);

    function $m(t, e, n) {
      var i = (e - t) / Math.max(0, n), r = Math.floor(Math.log(i) / Math.LN10), s = i / Math.pow(10, r);
      return r >= 0 ? (s >= jm ? 10 : s >= Hm ? 5 : s >= Um ? 2 : 1) * Math.pow(10, r) : -Math.pow(10, -r) / (s >= jm ? 10 : s >= Hm ? 5 : s >= Um ? 2 : 1)
    }

    var Vm = new Date, zm = new Date;

    function Bm(t, e, n, i) {
      function r(e) {
        return t(e = 0 === arguments.length ? new Date : new Date(+e)), e
      }

      return r.floor = function (e) {
        return t(e = new Date(+e)), e
      }, r.ceil = function (n) {
        return t(n = new Date(n - 1)), e(n, 1), t(n), n
      }, r.round = function (t) {
        var e = r(t), n = r.ceil(t);
        return t - e < n - t ? e : n
      }, r.offset = function (t, n) {
        return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t
      }, r.range = function (n, i, s) {
        var o, a = [];
        if (n = r.ceil(n), s = null == s ? 1 : Math.floor(s), !(n < i && s > 0)) return a;
        do {
          a.push(o = new Date(+n)), e(n, s), t(n)
        } while (o < n && n < i);
        return a
      }, r.filter = function (n) {
        return Bm((function (e) {
          if (e >= e) for (; t(e), !n(e);) e.setTime(e - 1)
        }), (function (t, i) {
          if (t >= t) if (i < 0) for (; ++i <= 0;) for (; e(t, -1), !n(t);) ; else for (; --i >= 0;) for (; e(t, 1), !n(t);) ;
        }))
      }, n && (r.count = function (e, i) {
        return Vm.setTime(+e), zm.setTime(+i), t(Vm), t(zm), Math.floor(n(Vm, zm))
      }, r.every = function (t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? r.filter(i ? function (e) {
          return i(e) % t == 0
        } : function (e) {
          return r.count(0, e) % t == 0
        }) : r : null
      }), r
    }

    var qm = Bm((function (t) {
      t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
    }), (function (t, e) {
      t.setFullYear(t.getFullYear() + e)
    }), (function (t, e) {
      return e.getFullYear() - t.getFullYear()
    }), (function (t) {
      return t.getFullYear()
    }));
    qm.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? Bm((function (e) {
        e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
      }), (function (e, n) {
        e.setFullYear(e.getFullYear() + n * t)
      })) : null
    };
    var Wm = qm;

    function Gm(t) {
      return Bm((function (e) {
        e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0)
      }), (function (t, e) {
        t.setDate(t.getDate() + 7 * e)
      }), (function (t, e) {
        return (e - t - 6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) / 6048e5
      }))
    }

    Bm((function (t) {
      t.setDate(1), t.setHours(0, 0, 0, 0)
    }), (function (t, e) {
      t.setMonth(t.getMonth() + e)
    }), (function (t, e) {
      return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
    }), (function (t) {
      return t.getMonth()
    }));
    var Qm = Gm(0), Ym = Gm(1), Zm = (Gm(2), Gm(3), Gm(4)), Xm = (Gm(5), Gm(6), Bm((function (t) {
      t.setHours(0, 0, 0, 0)
    }), (function (t, e) {
      t.setDate(t.getDate() + e)
    }), (function (t, e) {
      return (e - t - 6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5
    }), (function (t) {
      return t.getDate() - 1
    }))), Km = (Bm((function (t) {
      t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds() - 6e4 * t.getMinutes())
    }), (function (t, e) {
      t.setTime(+t + 36e5 * e)
    }), (function (t, e) {
      return (e - t) / 36e5
    }), (function (t) {
      return t.getHours()
    })), Bm((function (t) {
      t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds())
    }), (function (t, e) {
      t.setTime(+t + 6e4 * e)
    }), (function (t, e) {
      return (e - t) / 6e4
    }), (function (t) {
      return t.getMinutes()
    })), Bm((function (t) {
      t.setTime(t - t.getMilliseconds())
    }), (function (t, e) {
      t.setTime(+t + 1e3 * e)
    }), (function (t, e) {
      return (e - t) / 1e3
    }), (function (t) {
      return t.getUTCSeconds()
    })), Bm((function () {
    }), (function (t, e) {
      t.setTime(+t + e)
    }), (function (t, e) {
      return e - t
    })));

    function Jm(t) {
      return Bm((function (e) {
        e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0)
      }), (function (t, e) {
        t.setUTCDate(t.getUTCDate() + 7 * e)
      }), (function (t, e) {
        return (e - t) / 6048e5
      }))
    }

    Km.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Bm((function (e) {
        e.setTime(Math.floor(e / t) * t)
      }), (function (e, n) {
        e.setTime(+e + n * t)
      }), (function (e, n) {
        return (n - e) / t
      })) : Km : null
    };
    var ty = Jm(0), ey = Jm(1), ny = (Jm(2), Jm(3), Jm(4)), iy = (Jm(5), Jm(6), Bm((function (t) {
      t.setUTCHours(0, 0, 0, 0)
    }), (function (t, e) {
      t.setUTCDate(t.getUTCDate() + e)
    }), (function (t, e) {
      return (e - t) / 864e5
    }), (function (t) {
      return t.getUTCDate() - 1
    }))), ry = Bm((function (t) {
      t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
    }), (function (t, e) {
      t.setUTCFullYear(t.getUTCFullYear() + e)
    }), (function (t, e) {
      return e.getUTCFullYear() - t.getUTCFullYear()
    }), (function (t) {
      return t.getUTCFullYear()
    }));
    ry.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? Bm((function (e) {
        e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
      }), (function (e, n) {
        e.setUTCFullYear(e.getUTCFullYear() + n * t)
      })) : null
    };
    var sy = ry;
    var oy = {"-": "", _: " ", 0: "0"}, ay = /[\\^$*+?|[\]().{}]/g;

    function ly(t, e, n) {
      var i = t < 0 ? "-" : "", r = (i ? -t : t) + "", s = r.length;
      return i + (s < n ? new Array(n - s + 1).join(e) + r : r)
    }

    function cy(t) {
      return t.replace(ay, "\\$&")
    }

    function uy(t) {
      return new RegExp("^(?:" + t.map(cy).join("|") + ")", "i")
    }

    function hy(t) {
      for (var e = {}, n = -1, i = t.length; ++n < i;) e[t[n].toLowerCase()] = n;
      return e
    }

    function dy(t, e) {
      return ly(t.getDate(), e, 2)
    }

    function fy(t, e) {
      return ly(t.getHours(), e, 2)
    }

    function py(t, e) {
      return ly(t.getHours() % 12 || 12, e, 2)
    }

    function gy(t, e) {
      return ly(1 + Xm.count(Wm(t), t), e, 3)
    }

    function my(t, e) {
      return ly(t.getMilliseconds(), e, 3)
    }

    function yy(t, e) {
      return my(t, e) + "000"
    }

    function vy(t, e) {
      return ly(t.getMonth() + 1, e, 2)
    }

    function _y(t, e) {
      return ly(t.getMinutes(), e, 2)
    }

    function wy(t, e) {
      return ly(t.getSeconds(), e, 2)
    }

    function by(t) {
      var e = t.getDay();
      return 0 === e ? 7 : e
    }

    function xy(t, e) {
      return ly(Qm.count(Wm(t) - 1, t), e, 2)
    }

    function Sy(t, e) {
      var n = t.getDay();
      return t = n >= 4 || 0 === n ? Zm(t) : Zm.ceil(t), ly(Zm.count(Wm(t), t) + (4 === Wm(t).getDay()), e, 2)
    }

    function Ty(t) {
      return t.getDay()
    }

    function Cy(t, e) {
      return ly(Ym.count(Wm(t) - 1, t), e, 2)
    }

    function ky(t, e) {
      return ly(t.getFullYear() % 100, e, 2)
    }

    function Ey(t, e) {
      return ly(t.getFullYear() % 1e4, e, 4)
    }

    function Ay(t) {
      var e = t.getTimezoneOffset();
      return (e > 0 ? "-" : (e *= -1, "+")) + ly(e / 60 | 0, "0", 2) + ly(e % 60, "0", 2)
    }

    function Oy(t, e) {
      return ly(t.getUTCDate(), e, 2)
    }

    function Ly(t, e) {
      return ly(t.getUTCHours(), e, 2)
    }

    function Dy(t, e) {
      return ly(t.getUTCHours() % 12 || 12, e, 2)
    }

    function My(t, e) {
      return ly(1 + iy.count(sy(t), t), e, 3)
    }

    function Py(t, e) {
      return ly(t.getUTCMilliseconds(), e, 3)
    }

    function Ry(t, e) {
      return Py(t, e) + "000"
    }

    function Fy(t, e) {
      return ly(t.getUTCMonth() + 1, e, 2)
    }

    function Iy(t, e) {
      return ly(t.getUTCMinutes(), e, 2)
    }

    function Ny(t, e) {
      return ly(t.getUTCSeconds(), e, 2)
    }

    function jy(t) {
      var e = t.getUTCDay();
      return 0 === e ? 7 : e
    }

    function Hy(t, e) {
      return ly(ty.count(sy(t) - 1, t), e, 2)
    }

    function Uy(t, e) {
      var n = t.getUTCDay();
      return t = n >= 4 || 0 === n ? ny(t) : ny.ceil(t), ly(ny.count(sy(t), t) + (4 === sy(t).getUTCDay()), e, 2)
    }

    function $y(t) {
      return t.getUTCDay()
    }

    function Vy(t, e) {
      return ly(ey.count(sy(t) - 1, t), e, 2)
    }

    function zy(t, e) {
      return ly(t.getUTCFullYear() % 100, e, 2)
    }

    function By(t, e) {
      return ly(t.getUTCFullYear() % 1e4, e, 4)
    }

    function qy() {
      return "+0000"
    }

    function Wy() {
      return "%"
    }

    function Gy(t) {
      return +t
    }

    function Qy(t) {
      return Math.floor(+t / 1e3)
    }

    !function (t) {
      var e = t.dateTime, n = t.date, i = t.time, r = t.periods, s = t.days, o = t.shortDays, a = t.months,
        l = t.shortMonths, c = (uy(r), hy(r), uy(s), hy(s), uy(o), hy(o), uy(a), hy(a), uy(l), hy(l), {
          a: function (t) {
            return o[t.getDay()]
          }, A: function (t) {
            return s[t.getDay()]
          }, b: function (t) {
            return l[t.getMonth()]
          }, B: function (t) {
            return a[t.getMonth()]
          }, c: null, d: dy, e: dy, f: yy, H: fy, I: py, j: gy, L: my, m: vy, M: _y, p: function (t) {
            return r[+(t.getHours() >= 12)]
          }, q: function (t) {
            return 1 + ~~(t.getMonth() / 3)
          }, Q: Gy, s: Qy, S: wy, u: by, U: xy, V: Sy, w: Ty, W: Cy, x: null, X: null, y: ky, Y: Ey, Z: Ay, "%": Wy
        }), u = {
          a: function (t) {
            return o[t.getUTCDay()]
          }, A: function (t) {
            return s[t.getUTCDay()]
          }, b: function (t) {
            return l[t.getUTCMonth()]
          }, B: function (t) {
            return a[t.getUTCMonth()]
          }, c: null, d: Oy, e: Oy, f: Ry, H: Ly, I: Dy, j: My, L: Py, m: Fy, M: Iy, p: function (t) {
            return r[+(t.getUTCHours() >= 12)]
          }, q: function (t) {
            return 1 + ~~(t.getUTCMonth() / 3)
          }, Q: Gy, s: Qy, S: Ny, u: jy, U: Hy, V: Uy, w: $y, W: Vy, x: null, X: null, y: zy, Y: By, Z: qy, "%": Wy
        };

      function h(t, e) {
        return function (n) {
          var i, r, s, o = [], a = -1, l = 0, c = t.length;
          for (n instanceof Date || (n = new Date(+n)); ++a < c;) 37 === t.charCodeAt(a) && (o.push(t.slice(l, a)), null != (r = oy[i = t.charAt(++a)]) ? i = t.charAt(++a) : r = "e" === i ? " " : "0", (s = e[i]) && (i = s(n, r)), o.push(i), l = a + 1);
          return o.push(t.slice(l, a)), o.join("")
        }
      }

      c.x = h(n, c), c.X = h(i, c), c.c = h(e, c), u.x = h(n, u), u.X = h(i, u), u.c = h(e, u)
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
    var Yy, Zy, Xy = (1 === (Yy = Nm).length && (Zy = Yy, Yy = function (t, e) {
      return Nm(Zy(t), e)
    }), {
      left: function (t, e, n, i) {
        for (null == n && (n = 0), null == i && (i = t.length); n < i;) {
          var r = n + i >>> 1;
          Yy(t[r], e) < 0 ? n = r + 1 : i = r
        }
        return n
      }, right: function (t, e, n, i) {
        for (null == n && (n = 0), null == i && (i = t.length); n < i;) {
          var r = n + i >>> 1;
          Yy(t[r], e) > 0 ? i = r : n = r + 1
        }
        return n
      }
    }).right, Ky = function (t, e) {
      return t = +t, e = +e, function (n) {
        return Math.round(t * (1 - n) + e * n)
      }
    }, Jy = function (t) {
      return +t
    }, tv = [0, 1];

    function ev(t) {
      return t
    }

    function nv(t, e) {
      return (e -= t = +t) ? function (n) {
        return (n - t) / e
      } : (n = isNaN(e) ? NaN : .5, function () {
        return n
      });
      var n
    }

    function iv(t, e, n) {
      var i = t[0], r = t[1], s = e[0], o = e[1];
      return r < i ? (i = nv(r, i), s = n(o, s)) : (i = nv(i, r), s = n(s, o)), function (t) {
        return s(i(t))
      }
    }

    function rv(t, e, n) {
      var i = Math.min(t.length, e.length) - 1, r = new Array(i), s = new Array(i), o = -1;
      for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < i;) r[o] = nv(t[o], t[o + 1]), s[o] = n(e[o], e[o + 1]);
      return function (e) {
        var n = Xy(t, e, 1, i) - 1;
        return s[n](r[n](e))
      }
    }

    function sv(t, e) {
      return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
    }

    function ov() {
      return function () {
        var t, e, n, i, r, s, o = tv, a = tv, l = Cg, c = ev;

        function u() {
          var t, e, n, l = Math.min(o.length, a.length);
          return c !== ev && ((t = o[0]) > (e = o[l - 1]) && (n = t, t = e, e = n), c = function (n) {
            return Math.max(t, Math.min(e, n))
          }), i = l > 2 ? rv : iv, r = s = null, h
        }

        function h(e) {
          return isNaN(e = +e) ? n : (r || (r = i(o.map(t), a, l)))(t(c(e)))
        }

        return h.invert = function (n) {
          return c(e((s || (s = i(a, o.map(t), wg)))(n)))
        }, h.domain = function (t) {
          return arguments.length ? (o = Array.from(t, Jy), u()) : o.slice()
        }, h.range = function (t) {
          return arguments.length ? (a = Array.from(t), u()) : a.slice()
        }, h.rangeRound = function (t) {
          return a = Array.from(t), l = Ky, u()
        }, h.clamp = function (t) {
          return arguments.length ? (c = !!t || ev, u()) : c !== ev
        }, h.interpolate = function (t) {
          return arguments.length ? (l = t, u()) : l
        }, h.unknown = function (t) {
          return arguments.length ? (n = t, h) : n
        }, function (n, i) {
          return t = n, e = i, u()
        }
      }()(ev, ev)
    }

    function av(t, e) {
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

    var lv = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function cv(t) {
      if (!(e = lv.exec(t))) throw new Error("invalid format: " + t);
      var e;
      return new uv({
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

    function uv(t) {
      this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
    }

    cv.prototype = uv.prototype, uv.prototype.toString = function () {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    var hv, dv, fv, pv, gv = function (t, e) {
        if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var n, i = t.slice(0, n);
        return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(n + 1)]
      }, mv = function (t) {
        return (t = gv(Math.abs(t))) ? t[1] : NaN
      }, yv = function (t, e) {
        var n = gv(t, e);
        if (!n) return t + "";
        var i = n[0], r = n[1];
        return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0")
      }, vv = {
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
          return yv(100 * t, e)
        }, r: yv, s: function (t, e) {
          var n = gv(t, e);
          if (!n) return t + "";
          var i = n[0], r = n[1], s = r - (hv = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1, o = i.length;
          return s === o ? i : s > o ? i + new Array(s - o + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + gv(t, Math.max(0, e + s - 1))[0]
        }, X: function (t) {
          return Math.round(t).toString(16).toUpperCase()
        }, x: function (t) {
          return Math.round(t).toString(16)
        }
      }, _v = function (t) {
        return t
      }, wv = Array.prototype.map,
      bv = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    dv = function (t) {
      var e, n,
        i = void 0 === t.grouping || void 0 === t.thousands ? _v : (e = wv.call(t.grouping, Number), n = t.thousands + "", function (t, i) {
          for (var r = t.length, s = [], o = 0, a = e[0], l = 0; r > 0 && a > 0 && (l + a + 1 > i && (a = Math.max(1, i - l)), s.push(t.substring(r -= a, r + a)), !((l += a + 1) > i));) a = e[o = (o + 1) % e.length];
          return s.reverse().join(n)
        }), r = void 0 === t.currency ? "" : t.currency[0] + "", s = void 0 === t.currency ? "" : t.currency[1] + "",
        o = void 0 === t.decimal ? "." : t.decimal + "", a = void 0 === t.numerals ? _v : function (t) {
          return function (e) {
            return e.replace(/[0-9]/g, (function (e) {
              return t[+e]
            }))
          }
        }(wv.call(t.numerals, String)), l = void 0 === t.percent ? "%" : t.percent + "",
        c = void 0 === t.minus ? "-" : t.minus + "", u = void 0 === t.nan ? "NaN" : t.nan + "";

      function h(t) {
        var e = (t = cv(t)).fill, n = t.align, h = t.sign, d = t.symbol, f = t.zero, p = t.width, g = t.comma,
          m = t.precision, y = t.trim, v = t.type;
        "n" === v ? (g = !0, v = "g") : vv[v] || (void 0 === m && (m = 12), y = !0, v = "g"), (f || "0" === e && "=" === n) && (f = !0, e = "0", n = "=");
        var _ = "$" === d ? r : "#" === d && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "",
          w = "$" === d ? s : /[%p]/.test(v) ? l : "", b = vv[v], x = /[defgprs%]/.test(v);

        function S(t) {
          var r, s, l, d = _, S = w;
          if ("c" === v) S = b(t) + S, t = ""; else {
            var T = (t = +t) < 0 || 1 / t < 0;
            if (t = isNaN(t) ? u : b(Math.abs(t), m), y && (t = function (t) {
              t:for (var e, n = t.length, i = 1, r = -1; i < n; ++i) switch (t[i]) {
                case".":
                  r = e = i;
                  break;
                case"0":
                  0 === r && (r = i), e = i;
                  break;
                default:
                  if (!+t[i]) break t;
                  r > 0 && (r = 0)
              }
              return r > 0 ? t.slice(0, r) + t.slice(e + 1) : t
            }(t)), T && 0 == +t && "+" !== h && (T = !1), d = (T ? "(" === h ? h : c : "-" === h || "(" === h ? "" : h) + d, S = ("s" === v ? bv[8 + hv / 3] : "") + S + (T && "(" === h ? ")" : ""), x) for (r = -1, s = t.length; ++r < s;) if (48 > (l = t.charCodeAt(r)) || l > 57) {
              S = (46 === l ? o + t.slice(r + 1) : t.slice(r)) + S, t = t.slice(0, r);
              break
            }
          }
          g && !f && (t = i(t, 1 / 0));
          var C = d.length + t.length + S.length, k = C < p ? new Array(p - C + 1).join(e) : "";
          switch (g && f && (t = i(k + t, k.length ? p - S.length : 1 / 0), k = ""), n) {
            case"<":
              t = d + t + S + k;
              break;
            case"=":
              t = d + k + t + S;
              break;
            case"^":
              t = k.slice(0, C = k.length >> 1) + d + t + S + k.slice(C);
              break;
            default:
              t = k + d + t + S
          }
          return a(t)
        }

        return m = void 0 === m ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, m)) : Math.max(0, Math.min(20, m)), S.toString = function () {
          return t + ""
        }, S
      }

      return {
        format: h, formatPrefix: function (t, e) {
          var n = h(((t = cv(t)).type = "f", t)), i = 3 * Math.max(-8, Math.min(8, Math.floor(mv(e) / 3))),
            r = Math.pow(10, -i), s = bv[8 + i / 3];
          return function (t) {
            return n(r * t) + s
          }
        }
      }
    }({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""],
      minus: "-"
    }), fv = dv.format, pv = dv.formatPrefix;

    function xv(t) {
      var e = t.domain;
      return t.ticks = function (t) {
        var n = e();
        return function (t, e, n) {
          var i, r, s, o, a = -1;
          if (n = +n, (t = +t) == (e = +e) && n > 0) return [t];
          if ((i = e < t) && (r = t, t = e, e = r), 0 === (o = $m(t, e, n)) || !isFinite(o)) return [];
          if (o > 0) for (t = Math.ceil(t / o), e = Math.floor(e / o), s = new Array(r = Math.ceil(e - t + 1)); ++a < r;) s[a] = (t + a) * o; else for (t = Math.floor(t * o), e = Math.ceil(e * o), s = new Array(r = Math.ceil(t - e + 1)); ++a < r;) s[a] = (t - a) / o;
          return i && s.reverse(), s
        }(n[0], n[n.length - 1], null == t ? 10 : t)
      }, t.tickFormat = function (t, n) {
        var i = e();
        return function (t, e, n, i) {
          var r, s = function (t, e, n) {
            var i = Math.abs(e - t) / Math.max(0, n), r = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), s = i / r;
            return s >= jm ? r *= 10 : s >= Hm ? r *= 5 : s >= Um && (r *= 2), e < t ? -r : r
          }(t, e, n);
          switch ((i = cv(null == i ? ",f" : i)).type) {
            case"s":
              var o = Math.max(Math.abs(t), Math.abs(e));
              return null != i.precision || isNaN(r = function (t, e) {
                return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(mv(e) / 3))) - mv(Math.abs(t)))
              }(s, o)) || (i.precision = r), pv(i, o);
            case"":
            case"e":
            case"g":
            case"p":
            case"r":
              null != i.precision || isNaN(r = function (t, e) {
                return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, mv(e) - mv(t)) + 1
              }(s, Math.max(Math.abs(t), Math.abs(e)))) || (i.precision = r - ("e" === i.type));
              break;
            case"f":
            case"%":
              null != i.precision || isNaN(r = function (t) {
                return Math.max(0, -mv(Math.abs(t)))
              }(s)) || (i.precision = r - 2 * ("%" === i.type))
          }
          return fv(i)
        }(i[0], i[i.length - 1], null == t ? 10 : t, n)
      }, t.nice = function (n) {
        null == n && (n = 10);
        var i, r = e(), s = 0, o = r.length - 1, a = r[s], l = r[o];
        return l < a && (i = a, a = l, l = i, i = s, s = o, o = i), (i = $m(a, l, n)) > 0 ? i = $m(a = Math.floor(a / i) * i, l = Math.ceil(l / i) * i, n) : i < 0 && (i = $m(a = Math.ceil(a * i) / i, l = Math.floor(l * i) / i, n)), i > 0 ? (r[s] = Math.floor(a / i) * i, r[o] = Math.ceil(l / i) * i, e(r)) : i < 0 && (r[s] = Math.ceil(a * i) / i, r[o] = Math.floor(l * i) / i, e(r)), t
      }, t
    }

    function Sv() {
      var t = ov();
      return t.copy = function () {
        return sv(t, Sv())
      }, av.apply(t, arguments), xv(t)
    }

    var Tv = function (t, e, n) {
      t = +t, e = +e, n = (r = arguments.length) < 2 ? (e = t, t = 0, 1) : r < 3 ? 1 : +n;
      for (var i = -1, r = 0 | Math.max(0, Math.ceil((e - t) / n)), s = new Array(r); ++i < r;) s[i] = t + i * n;
      return s
    };
    const Cv = Symbol("implicit");

    function kv() {
      var t = new Map, e = [], n = [], i = Cv;

      function r(r) {
        var s = r + "", o = t.get(s);
        if (!o) {
          if (i !== Cv) return i;
          t.set(s, o = e.push(r))
        }
        return n[(o - 1) % n.length]
      }

      return r.domain = function (n) {
        if (!arguments.length) return e.slice();
        e = [], t = new Map;
        for (const i of n) {
          const n = i + "";
          t.has(n) || t.set(n, e.push(i))
        }
        return r
      }, r.range = function (t) {
        return arguments.length ? (n = Array.from(t), r) : n.slice()
      }, r.unknown = function (t) {
        return arguments.length ? (i = t, r) : i
      }, r.copy = function () {
        return kv(e, n).unknown(i)
      }, av.apply(r, arguments), r
    }

    function Ev() {
      var t, e, n = kv().unknown(void 0), i = n.domain, r = n.range, s = 0, o = 1, a = !1, l = 0, c = 0, u = .5;

      function h() {
        var n = i().length, h = o < s, d = h ? o : s, f = h ? s : o;
        t = (f - d) / Math.max(1, n - l + 2 * c), a && (t = Math.floor(t)), d += (f - d - t * (n - l)) * u, e = t * (1 - l), a && (d = Math.round(d), e = Math.round(e));
        var p = Tv(n).map((function (e) {
          return d + t * e
        }));
        return r(h ? p.reverse() : p)
      }

      return delete n.unknown, n.domain = function (t) {
        return arguments.length ? (i(t), h()) : i()
      }, n.range = function (t) {
        return arguments.length ? ([s, o] = t, s = +s, o = +o, h()) : [s, o]
      }, n.rangeRound = function (t) {
        return [s, o] = t, s = +s, o = +o, a = !0, h()
      }, n.bandwidth = function () {
        return e
      }, n.step = function () {
        return t
      }, n.round = function (t) {
        return arguments.length ? (a = !!t, h()) : a
      }, n.padding = function (t) {
        return arguments.length ? (l = Math.min(1, c = +t), h()) : l
      }, n.paddingInner = function (t) {
        return arguments.length ? (l = Math.min(1, t), h()) : l
      }, n.paddingOuter = function (t) {
        return arguments.length ? (c = +t, h()) : c
      }, n.align = function (t) {
        return arguments.length ? (u = Math.max(0, Math.min(1, t)), h()) : u
      }, n.copy = function () {
        return Ev(i(), [s, o]).round(a).paddingInner(l).paddingOuter(c).align(u)
      }, av.apply(h(), arguments)
    }

    function Av(t, e) {
      let n;
      if (void 0 === e) for (const i of t) null != i && (n < i || void 0 === n && i >= i) && (n = i); else {
        let i = -1;
        for (let r of t) null != (r = e(r, ++i, t)) && (n < r || void 0 === n && r >= r) && (n = r)
      }
      return n
    }

    function Ov(t, e) {
      let n;
      if (void 0 === e) for (const i of t) null != i && (n > i || void 0 === n && i >= i) && (n = i); else {
        let i = -1;
        for (let r of t) null != (r = e(r, ++i, t)) && (n > r || void 0 === n && r >= r) && (n = r)
      }
      return n
    }

    function Lv(t, e, n) {
      const i = t[e];
      t[e] = t[n], t[n] = i
    }

    function Dv(t, e, n) {
      if (i = (t = Float64Array.from(function* (t, e) {
        if (void 0 === e) for (let n of t) null != n && (n = +n) >= n && (yield n); else {
          let n = -1;
          for (let i of t) null != (i = e(i, ++n, t)) && (i = +i) >= i && (yield i)
        }
      }(t, n))).length) {
        if ((e = +e) <= 0 || i < 2) return Ov(t);
        if (e >= 1) return Av(t);
        var i, r = (i - 1) * e, s = Math.floor(r), o = Av(function t(e, n, i = 0, r = e.length - 1, s = Nm) {
          for (; r > i;) {
            if (r - i > 600) {
              const o = r - i + 1, a = n - i + 1, l = Math.log(o), c = .5 * Math.exp(2 * l / 3),
                u = .5 * Math.sqrt(l * c * (o - c) / o) * (a - o / 2 < 0 ? -1 : 1);
              t(e, n, Math.max(i, Math.floor(n - a * c / o + u)), Math.min(r, Math.floor(n + (o - a) * c / o + u)), s)
            }
            const o = e[n];
            let a = i, l = r;
            for (Lv(e, i, n), s(e[r], o) > 0 && Lv(e, i, r); a < l;) {
              for (Lv(e, a, l), ++a, --l; s(e[a], o) < 0;) ++a;
              for (; s(e[l], o) > 0;) --l
            }
            0 === s(e[i], o) ? Lv(e, i, l) : (++l, Lv(e, l, r)), l <= n && (i = l + 1), n <= l && (r = l - 1)
          }
          return e
        }(t, s).subarray(0, s + 1));
        return o + (Ov(t.subarray(s + 1)) - o) * (r - s)
      }
    }

    function Mv(t) {
      this._context = t
    }

    Mv.prototype = {
      areaStart: function () {
        this._line = 0
      }, areaEnd: function () {
        this._line = NaN
      }, lineStart: function () {
        this._point = 0
      }, lineEnd: function () {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      }, point: function (t, e) {
        switch (t = +t, e = +e, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t, e)
        }
      }
    };
    var Pv = Math.PI, Rv = 2 * Pv, Fv = Rv - 1e-6;

    function Iv() {
      this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
    }

    function Nv() {
      return new Iv
    }

    Iv.prototype = Nv.prototype = {
      constructor: Iv, moveTo: function (t, e) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e)
      }, closePath: function () {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
      }, lineTo: function (t, e) {
        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e)
      }, quadraticCurveTo: function (t, e, n, i) {
        this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +i)
      }, bezierCurveTo: function (t, e, n, i, r, s) {
        this._ += "C" + +t + "," + +e + "," + +n + "," + +i + "," + (this._x1 = +r) + "," + (this._y1 = +s)
      }, arcTo: function (t, e, n, i, r) {
        var s = this._x1, o = this._y1, a = (n = +n) - (t = +t), l = (i = +i) - (e = +e), c = s - t, u = o - e,
          h = c * c + u * u;
        if ((r = +r) < 0) throw new Error("negative radius: " + r);
        if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e); else if (h > 1e-6) if (Math.abs(u * a - l * c) > 1e-6 && r) {
          var d = n - s, f = i - o, p = a * a + l * l, g = d * d + f * f, m = Math.sqrt(p), y = Math.sqrt(h),
            v = r * Math.tan((Pv - Math.acos((p + h - g) / (2 * m * y))) / 2), _ = v / y, w = v / m;
          Math.abs(_ - 1) > 1e-6 && (this._ += "L" + (t + _ * c) + "," + (e + _ * u)), this._ += "A" + r + "," + r + ",0,0," + +(u * d > c * f) + "," + (this._x1 = t + w * a) + "," + (this._y1 = e + w * l)
        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e)
      }, arc: function (t, e, n, i, r, s) {
        t = +t, e = +e, s = !!s;
        var o = (n = +n) * Math.cos(i), a = n * Math.sin(i), l = t + o, c = e + a, u = 1 ^ s, h = s ? i - r : r - i;
        if (n < 0) throw new Error("negative radius: " + n);
        null === this._x1 ? this._ += "M" + l + "," + c : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - c) > 1e-6) && (this._ += "L" + l + "," + c), n && (h < 0 && (h = h % Rv + Rv), h > Fv ? this._ += "A" + n + "," + n + ",0,1," + u + "," + (t - o) + "," + (e - a) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = l) + "," + (this._y1 = c) : h > 1e-6 && (this._ += "A" + n + "," + n + ",0," + +(h >= Pv) + "," + u + "," + (this._x1 = t + n * Math.cos(r)) + "," + (this._y1 = e + n * Math.sin(r))))
      }, rect: function (t, e, n, i) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +i + "h" + -n + "Z"
      }, toString: function () {
        return this._
      }
    };
    var jv = Nv, Hv = function (t) {
      return function () {
        return t
      }
    }, Uv = function () {
    };

    function $v(t, e, n) {
      t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - n), t._x2, t._y2)
    }

    function Vv(t, e) {
      this._context = t, this._k = (1 - e) / 6
    }

    function zv(t, e) {
      this._context = t, this._k = (1 - e) / 6
    }

    function Bv(t) {
      this._curve = t
    }

    Vv.prototype = {
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
            $v(this, this._x1, this._y1)
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
            $v(this, t, e)
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
      }
    }, function t(e) {
      function n(t) {
        return new Vv(t, e)
      }

      return n.tension = function (e) {
        return t(+e)
      }, n
    }(0), zv.prototype = {
      areaStart: Uv, areaEnd: Uv, lineStart: function () {
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
            $v(this, t, e)
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
      }
    }, function t(e) {
      function n(t) {
        return new zv(t, e)
      }

      return n.tension = function (e) {
        return t(+e)
      }, n
    }(0), Bv.prototype = {
      areaStart: function () {
        this._curve.areaStart()
      }, areaEnd: function () {
        this._curve.areaEnd()
      }, lineStart: function () {
        this._curve.lineStart()
      }, lineEnd: function () {
        this._curve.lineEnd()
      }, point: function (t, e) {
        this._curve.point(e * Math.sin(t), e * -Math.cos(t))
      }
    };
    var qv = Math.abs, Wv = Math.atan2, Gv = Math.cos, Qv = Math.max, Yv = Math.min, Zv = Math.sin, Xv = Math.sqrt,
      Kv = Math.PI, Jv = Kv / 2, t_ = 2 * Kv;

    function e_(t) {
      return t > 1 ? 0 : t < -1 ? Kv : Math.acos(t)
    }

    function n_(t) {
      return t >= 1 ? Jv : t <= -1 ? -Jv : Math.asin(t)
    }

    function i_(t) {
      return t.innerRadius
    }

    function r_(t) {
      return t.outerRadius
    }

    function s_(t) {
      return t.startAngle
    }

    function o_(t) {
      return t.endAngle
    }

    function a_(t) {
      return t && t.padAngle
    }

    function l_(t, e, n, i, r, s, o, a) {
      var l = n - t, c = i - e, u = o - r, h = a - s, d = h * l - u * c;
      if (!(d * d < 1e-12)) return [t + (d = (u * (e - s) - h * (t - r)) / d) * l, e + d * c]
    }

    function c_(t, e, n, i, r, s, o) {
      var a = t - n, l = e - i, c = (o ? s : -s) / Xv(a * a + l * l), u = c * l, h = -c * a, d = t + u, f = e + h,
        p = n + u, g = i + h, m = (d + p) / 2, y = (f + g) / 2, v = p - d, _ = g - f, w = v * v + _ * _, b = r - s,
        x = d * g - p * f, S = (_ < 0 ? -1 : 1) * Xv(Qv(0, b * b * w - x * x)), T = (x * _ - v * S) / w,
        C = (-x * v - _ * S) / w, k = (x * _ + v * S) / w, E = (-x * v + _ * S) / w, A = T - m, O = C - y, L = k - m,
        D = E - y;
      return A * A + O * O > L * L + D * D && (T = k, C = E), {
        cx: T,
        cy: C,
        x01: -u,
        y01: -h,
        x11: T * (r / b - 1),
        y11: C * (r / b - 1)
      }
    }

    var u_ = function () {
      var t = i_, e = r_, n = Hv(0), i = null, r = s_, s = o_, o = a_, a = null;

      function l() {
        var l, c, u = +t.apply(this, arguments), h = +e.apply(this, arguments), d = r.apply(this, arguments) - Jv,
          f = s.apply(this, arguments) - Jv, p = qv(f - d), g = f > d;
        if (a || (a = l = jv()), h < u && (c = h, h = u, u = c), h > 1e-12) if (p > t_ - 1e-12) a.moveTo(h * Gv(d), h * Zv(d)), a.arc(0, 0, h, d, f, !g), u > 1e-12 && (a.moveTo(u * Gv(f), u * Zv(f)), a.arc(0, 0, u, f, d, g)); else {
          var m, y, v = d, _ = f, w = d, b = f, x = p, S = p, T = o.apply(this, arguments) / 2,
            C = T > 1e-12 && (i ? +i.apply(this, arguments) : Xv(u * u + h * h)),
            k = Yv(qv(h - u) / 2, +n.apply(this, arguments)), E = k, A = k;
          if (C > 1e-12) {
            var O = n_(C / u * Zv(T)), L = n_(C / h * Zv(T));
            (x -= 2 * O) > 1e-12 ? (w += O *= g ? 1 : -1, b -= O) : (x = 0, w = b = (d + f) / 2), (S -= 2 * L) > 1e-12 ? (v += L *= g ? 1 : -1, _ -= L) : (S = 0, v = _ = (d + f) / 2)
          }
          var D = h * Gv(v), M = h * Zv(v), P = u * Gv(b), R = u * Zv(b);
          if (k > 1e-12) {
            var F, I = h * Gv(_), N = h * Zv(_), j = u * Gv(w), H = u * Zv(w);
            if (p < Kv && (F = l_(D, M, j, H, I, N, P, R))) {
              var U = D - F[0], $ = M - F[1], V = I - F[0], z = N - F[1],
                B = 1 / Zv(e_((U * V + $ * z) / (Xv(U * U + $ * $) * Xv(V * V + z * z))) / 2),
                q = Xv(F[0] * F[0] + F[1] * F[1]);
              E = Yv(k, (u - q) / (B - 1)), A = Yv(k, (h - q) / (B + 1))
            }
          }
          S > 1e-12 ? A > 1e-12 ? (m = c_(j, H, D, M, h, A, g), y = c_(I, N, P, R, h, A, g), a.moveTo(m.cx + m.x01, m.cy + m.y01), A < k ? a.arc(m.cx, m.cy, A, Wv(m.y01, m.x01), Wv(y.y01, y.x01), !g) : (a.arc(m.cx, m.cy, A, Wv(m.y01, m.x01), Wv(m.y11, m.x11), !g), a.arc(0, 0, h, Wv(m.cy + m.y11, m.cx + m.x11), Wv(y.cy + y.y11, y.cx + y.x11), !g), a.arc(y.cx, y.cy, A, Wv(y.y11, y.x11), Wv(y.y01, y.x01), !g))) : (a.moveTo(D, M), a.arc(0, 0, h, v, _, !g)) : a.moveTo(D, M), u > 1e-12 && x > 1e-12 ? E > 1e-12 ? (m = c_(P, R, I, N, u, -E, g), y = c_(D, M, j, H, u, -E, g), a.lineTo(m.cx + m.x01, m.cy + m.y01), E < k ? a.arc(m.cx, m.cy, E, Wv(m.y01, m.x01), Wv(y.y01, y.x01), !g) : (a.arc(m.cx, m.cy, E, Wv(m.y01, m.x01), Wv(m.y11, m.x11), !g), a.arc(0, 0, u, Wv(m.cy + m.y11, m.cx + m.x11), Wv(y.cy + y.y11, y.cx + y.x11), g), a.arc(y.cx, y.cy, E, Wv(y.y11, y.x11), Wv(y.y01, y.x01), !g))) : a.arc(0, 0, u, b, w, g) : a.lineTo(P, R)
        } else a.moveTo(0, 0);
        if (a.closePath(), l) return a = null, l + "" || null
      }

      return l.centroid = function () {
        var n = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2,
          i = (+r.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Kv / 2;
        return [Gv(i) * n, Zv(i) * n]
      }, l.innerRadius = function (e) {
        return arguments.length ? (t = "function" == typeof e ? e : Hv(+e), l) : t
      }, l.outerRadius = function (t) {
        return arguments.length ? (e = "function" == typeof t ? t : Hv(+t), l) : e
      }, l.cornerRadius = function (t) {
        return arguments.length ? (n = "function" == typeof t ? t : Hv(+t), l) : n
      }, l.padRadius = function (t) {
        return arguments.length ? (i = null == t ? null : "function" == typeof t ? t : Hv(+t), l) : i
      }, l.startAngle = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : Hv(+t), l) : r
      }, l.endAngle = function (t) {
        return arguments.length ? (s = "function" == typeof t ? t : Hv(+t), l) : s
      }, l.padAngle = function (t) {
        return arguments.length ? (o = "function" == typeof t ? t : Hv(+t), l) : o
      }, l.context = function (t) {
        return arguments.length ? (a = null == t ? null : t, l) : a
      }, l
    }, h_ = function (t, e) {
      return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    }, d_ = function (t) {
      return t
    }, f_ = function (t, e, n, i, r) {
      for (var s, o = t.children, a = -1, l = o.length, c = t.value && (i - e) / t.value; ++a < l;) (s = o[a]).y0 = n, s.y1 = r, s.x0 = e, s.x1 = e += s.value * c
    }, p_ = function (t, e, n, i, r) {
      for (var s, o = t.children, a = -1, l = o.length, c = t.value && (r - n) / t.value; ++a < l;) (s = o[a]).x0 = e, s.x1 = i, s.y0 = n, s.y1 = n += s.value * c
    };

    function g_(t) {
      var e = 0, n = t.children, i = n && n.length;
      if (i) for (; --i >= 0;) e += n[i].value; else e = 1;
      t.value = e
    }

    function m_(t, e) {
      var n, i, r, s, o, a = new w_(t), l = +t.value && (a.value = t.value), c = [a];
      for (null == e && (e = y_); n = c.pop();) if (l && (n.value = +n.data.value), (r = e(n.data)) && (o = r.length)) for (n.children = new Array(o), s = o - 1; s >= 0; --s) c.push(i = n.children[s] = new w_(r[s])), i.parent = n, i.depth = n.depth + 1;
      return a.eachBefore(__)
    }

    function y_(t) {
      return t.children
    }

    function v_(t) {
      t.data = t.data.data
    }

    function __(t) {
      var e = 0;
      do {
        t.height = e
      } while ((t = t.parent) && t.height < ++e)
    }

    function w_(t) {
      this.data = t, this.depth = this.height = 0, this.parent = null
    }

    !function t(e) {
      function n(t, n, i, r, s) {
        !function (t, e, n, i, r, s) {
          for (var o, a, l, c, u, h, d, f, p, g, m, y = [], v = e.children, _ = 0, w = 0, b = v.length, x = e.value; _ < b;) {
            l = r - n, c = s - i;
            do {
              u = v[w++].value
            } while (!u && w < b);
            for (h = d = u, m = u * u * (g = Math.max(c / l, l / c) / (x * t)), p = Math.max(d / m, m / h); w < b; ++w) {
              if (u += a = v[w].value, a < h && (h = a), a > d && (d = a), m = u * u * g, (f = Math.max(d / m, m / h)) > p) {
                u -= a;
                break
              }
              p = f
            }
            y.push(o = {
              value: u,
              dice: l < c,
              children: v.slice(_, w)
            }), o.dice ? f_(o, n, i, r, x ? i += c * u / x : s) : p_(o, n, i, x ? n += l * u / x : r, s), x -= u, _ = w
          }
        }(e, t, n, i, r, s)
      }

      return n.ratio = function (e) {
        return t((e = +e) > 1 ? e : 1)
      }, n
    }((1 + Math.sqrt(5)) / 2), w_.prototype = m_.prototype = {
      constructor: w_, count: function () {
        return this.eachAfter(g_)
      }, each: function (t) {
        var e, n, i, r, s = this, o = [s];
        do {
          for (e = o.reverse(), o = []; s = e.pop();) if (t(s), n = s.children) for (i = 0, r = n.length; i < r; ++i) o.push(n[i])
        } while (o.length);
        return this
      }, eachAfter: function (t) {
        for (var e, n, i, r = this, s = [r], o = []; r = s.pop();) if (o.push(r), e = r.children) for (n = 0, i = e.length; n < i; ++n) s.push(e[n]);
        for (; r = o.pop();) t(r);
        return this
      }, eachBefore: function (t) {
        for (var e, n, i = this, r = [i]; i = r.pop();) if (t(i), e = i.children) for (n = e.length - 1; n >= 0; --n) r.push(e[n]);
        return this
      }, sum: function (t) {
        return this.eachAfter((function (e) {
          for (var n = +t(e.data) || 0, i = e.children, r = i && i.length; --r >= 0;) n += i[r].value;
          e.value = n
        }))
      }, sort: function (t) {
        return this.eachBefore((function (e) {
          e.children && e.children.sort(t)
        }))
      }, path: function (t) {
        for (var e = this, n = function (t, e) {
          if (t === e) return t;
          var n = t.ancestors(), i = e.ancestors(), r = null;
          for (t = n.pop(), e = i.pop(); t === e;) r = t, t = n.pop(), e = i.pop();
          return r
        }(e, t), i = [e]; e !== n;) i.push(e = e.parent);
        for (var r = i.length; t !== n;) i.splice(r, 0, t), t = t.parent;
        return i
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
        return m_(this).eachBefore(v_)
      }
    };
    const b_ = ["caretElm"];

    function x_(t, e) {
    }

    const S_ = function (t) {
      return {model: t}
    };

    function T_(t, e) {
      if (1 & t && (vo(0, "span"), ho(1, x_, 0, 0, "ng-template", 5), _o()), 2 & t) {
        const t = ko();
        cr(1), mo("ngTemplateOutlet", t.template)("ngTemplateOutletContext", cl(2, S_, t.context))
      }
    }

    function C_(t, e) {
      1 & t && wo(0, "span", 6), 2 & t && mo("innerHTML", ko().title, Bi)
    }

    function k_(t, e) {
      if (1 & t && (mn(), yn(), wo(0, "ngx-charts-scale-legend", 4)), 2 & t) {
        const t = ko();
        mo("horizontal", t.legendOptions && "below" === t.legendOptions.position)("valueRange", t.legendOptions.domain)("colors", t.legendOptions.colors)("height", t.view[1])("width", t.legendWidth)
      }
    }

    function E_(t, e) {
      if (1 & t) {
        const t = bo();
        mn(), yn(), vo(0, "ngx-charts-legend", 5), So("labelClick", (function (e) {
          return We(t), ko().legendLabelClick.emit(e)
        }))("labelActivate", (function (e) {
          return We(t), ko().legendLabelActivate.emit(e)
        }))("labelDeactivate", (function (e) {
          return We(t), ko().legendLabelDeactivate.emit(e)
        })), _o()
      }
      if (2 & t) {
        const t = ko();
        mo("horizontal", t.legendOptions && "below" === t.legendOptions.position)("data", t.legendOptions.domain)("title", t.legendOptions.title)("colors", t.legendOptions.colors)("height", t.view[1])("width", t.legendWidth)("activeEntries", t.activeEntries)
      }
    }

    const A_ = ["*"], O_ = ["ngx-charts-axis-label", ""], L_ = ["ticksel"], D_ = ["ngx-charts-x-axis-ticks", ""];

    function M_(t, e) {
      if (1 & t && (mn(), vo(0, "g", 3), vo(1, "title"), Go(2), _o(), vo(3, "text", 4), Go(4), _o(), _o()), 2 & t) {
        const t = e.$implicit, n = ko();
        co("transform", n.tickTransform(t)), cr(2), Qo(n.tickFormat(t)), cr(1), Ro("font-size", "12px"), co("text-anchor", n.textAnchor)("transform", n.textTransform), cr(1), Yo(" ", n.tickTrim(n.tickFormat(t)), " ")
      }
    }

    function P_(t, e) {
      if (1 & t && (mn(), vo(0, "g"), wo(1, "line", 6), _o()), 2 & t) {
        const t = ko(2);
        co("transform", t.gridLineTransform()), cr(1), co("y1", 0 - t.gridLineHeight)
      }
    }

    function R_(t, e) {
      if (1 & t && (mn(), vo(0, "g"), ho(1, P_, 2, 2, "g", 5), _o()), 2 & t) {
        const t = e.$implicit, n = ko();
        co("transform", n.tickTransform(t)), cr(1), mo("ngIf", n.showGridLines)
      }
    }

    const F_ = ["ngx-charts-x-axis", ""];

    function I_(t, e) {
      if (1 & t) {
        const t = bo();
        mn(), vo(0, "g", 2), So("dimensionsChanged", (function (e) {
          return We(t), ko().emitTicksHeight(e)
        })), _o()
      }
      if (2 & t) {
        const t = ko();
        mo("trimTicks", t.trimTicks)("rotateTicks", t.rotateTicks)("maxTickLength", t.maxTickLength)("tickFormatting", t.tickFormatting)("tickArguments", t.tickArguments)("tickStroke", t.tickStroke)("scale", t.xScale)("orient", t.xOrient)("showGridLines", t.showGridLines)("gridLineHeight", t.dims.height)("width", t.dims.width)("tickValues", t.ticks)
      }
    }

    function N_(t, e) {
      if (1 & t && (mn(), wo(0, "g", 3)), 2 & t) {
        const t = ko();
        mo("label", t.labelText)("offset", t.labelOffset)("orient", "bottom")("height", t.dims.height)("width", t.dims.width)
      }
    }

    const j_ = ["ngx-charts-y-axis-ticks", ""];

    function H_(t, e) {
      if (1 & t && (mn(), vo(0, "g", 4), vo(1, "title"), Go(2), _o(), vo(3, "text", 5), Go(4), _o(), _o()), 2 & t) {
        const t = e.$implicit, n = ko();
        co("transform", n.transform(t)), cr(2), Qo(n.tickFormat(t)), cr(1), Ro("font-size", "12px"), co("dy", n.dy)("x", n.x1)("y", n.y1)("text-anchor", n.textAnchor), cr(1), Yo(" ", n.tickTrim(n.tickFormat(t)), " ")
      }
    }

    function U_(t, e) {
      if (1 & t && (mn(), wo(0, "path", 6)), 2 & t) {
        const t = ko();
        co("d", t.referenceAreaPath)("transform", t.gridLineTransform())
      }
    }

    function $_(t, e) {
      1 & t && (mn(), wo(0, "line", 9)), 2 & t && co("x2", ko(3).gridLineWidth)
    }

    function V_(t, e) {
      1 & t && (mn(), wo(0, "line", 9)), 2 & t && co("x2", 0 - ko(3).gridLineWidth)
    }

    function z_(t, e) {
      if (1 & t && (mn(), vo(0, "g"), ho(1, $_, 1, 1, "line", 8), ho(2, V_, 1, 1, "line", 8), _o()), 2 & t) {
        const t = ko(2);
        co("transform", t.gridLineTransform()), cr(1), mo("ngIf", "left" === t.orient), cr(1), mo("ngIf", "right" === t.orient)
      }
    }

    function B_(t, e) {
      if (1 & t && (mn(), vo(0, "g"), ho(1, z_, 3, 3, "g", 7), _o()), 2 & t) {
        const t = e.$implicit, n = ko();
        co("transform", n.transform(t)), cr(1), mo("ngIf", n.showGridLines)
      }
    }

    function q_(t, e) {
      if (1 & t && (mn(), vo(0, "g"), vo(1, "title"), Go(2), _o(), vo(3, "text", 11), Go(4), _o(), _o()), 2 & t) {
        const t = ko(2).$implicit, e = ko();
        cr(2), Qo(e.tickTrim(e.tickFormat(t.value))), cr(1), co("dy", e.dy)("y", -6)("x", e.gridLineWidth)("text-anchor", e.textAnchor), cr(1), Yo(" ", t.name, " ")
      }
    }

    function W_(t, e) {
      if (1 & t && (mn(), vo(0, "g"), wo(1, "line", 10), ho(2, q_, 5, 6, "g", 7), _o()), 2 & t) {
        const t = ko().$implicit, e = ko();
        co("transform", e.transform(t.value)), cr(1), co("x2", e.gridLineWidth)("transform", e.gridLineTransform()), cr(1), mo("ngIf", e.showRefLabels)
      }
    }

    function G_(t, e) {
      if (1 & t && (mn(), vo(0, "g"), ho(1, W_, 3, 4, "g", 7), _o()), 2 & t) {
        const t = ko();
        cr(1), mo("ngIf", t.showRefLines)
      }
    }

    const Q_ = ["ngx-charts-y-axis", ""];

    function Y_(t, e) {
      if (1 & t) {
        const t = bo();
        mn(), vo(0, "g", 2), So("dimensionsChanged", (function (e) {
          return We(t), ko().emitTicksWidth(e)
        })), _o()
      }
      if (2 & t) {
        const t = ko();
        mo("trimTicks", t.trimTicks)("maxTickLength", t.maxTickLength)("tickFormatting", t.tickFormatting)("tickArguments", t.tickArguments)("tickValues", t.ticks)("tickStroke", t.tickStroke)("scale", t.yScale)("orient", t.yOrient)("showGridLines", t.showGridLines)("gridLineWidth", t.dims.width)("referenceLines", t.referenceLines)("showRefLines", t.showRefLines)("showRefLabels", t.showRefLabels)("height", t.dims.height)
      }
    }

    function Z_(t, e) {
      if (1 & t && (mn(), wo(0, "g", 3)), 2 & t) {
        const t = ko();
        mo("label", t.labelText)("offset", t.labelOffset)("orient", t.yOrient)("height", t.dims.height)("width", t.dims.width)
      }
    }

    const X_ = ["ngx-charts-grid-panel", ""], K_ = ["ngx-charts-grid-panel-series", ""];

    function J_(t, e) {
      if (1 & t && (mn(), wo(0, "g", 1)), 2 & t) {
        const t = e.$implicit;
        Fo("grid-panel", !0)("odd", "odd" === t.class)("even", "even" === t.class), mo("height", t.height)("width", t.width)("x", t.x)("y", t.y)
      }
    }

    const tw = ["ngx-charts-svg-linear-gradient", ""];

    function ew(t, e) {
      if (1 & t && (mn(), wo(0, "stop")), 2 & t) {
        const t = e.$implicit;
        Ro("stop-color", t.color)("stop-opacity", t.opacity), co("offset", t.offset + "%")
      }
    }

    const nw = ["ngx-charts-svg-radial-gradient", ""];

    function iw(t, e) {
      if (1 & t && (mn(), wo(0, "stop")), 2 & t) {
        const t = e.$implicit;
        Ro("stop-color", t.color)("stop-opacity", t.opacity), co("offset", t.offset + "%")
      }
    }

    function rw(t, e) {
      if (1 & t && (vo(0, "header", 4), vo(1, "span", 5), Go(2), _o(), _o()), 2 & t) {
        const t = ko();
        cr(2), Qo(t.title)
      }
    }

    function sw(t, e) {
      if (1 & t) {
        const t = bo();
        vo(0, "li", 6), vo(1, "ngx-charts-legend-entry", 7), So("select", (function (e) {
          return We(t), ko().labelClick.emit(e)
        }))("activate", (function (e) {
          return We(t), ko().activate(e)
        }))("deactivate", (function (e) {
          return We(t), ko().deactivate(e)
        })), _o(), _o()
      }
      if (2 & t) {
        const t = e.$implicit, n = ko();
        cr(1), mo("label", t.label)("formattedLabel", t.formattedLabel)("color", t.color)("isActive", n.isActive(t))
      }
    }

    const ow = ["tooltipTemplate"], aw = function (t, e) {
      return [t, e]
    }, lw = ["ngx-charts-bar", ""];

    function cw(t, e) {
      if (1 & t && (mn(), vo(0, "defs"), wo(1, "g", 2), _o()), 2 & t) {
        const t = ko();
        cr(1), mo("orientation", t.orientation)("name", t.gradientId)("stops", t.gradientStops)
      }
    }

    function uw(t, e) {
      if (1 & t) {
        const t = bo();
        mn(), vo(0, "g", 5), So("dimensionsChanged", (function (e) {
          return We(t), ko().updateXAxisHeight(e)
        })), _o()
      }
      if (2 & t) {
        const t = ko();
        mo("xScale", t.xScale)("dims", t.dims)("showLabel", t.showXAxisLabel)("labelText", t.xAxisLabel)("trimTicks", t.trimXAxisTicks)("rotateTicks", t.rotateXAxisTicks)("maxTickLength", t.maxXAxisTickLength)("tickFormatting", t.xAxisTickFormatting)("ticks", t.xAxisTicks)("xAxisOffset", t.dataLabelMaxHeight.negative)
      }
    }

    function hw(t, e) {
      if (1 & t) {
        const t = bo();
        mn(), vo(0, "g", 6), So("dimensionsChanged", (function (e) {
          return We(t), ko().updateYAxisWidth(e)
        })), _o()
      }
      if (2 & t) {
        const t = ko();
        mo("yScale", t.yScale)("dims", t.dims)("showGridLines", t.showGridLines)("showLabel", t.showYAxisLabel)("labelText", t.yAxisLabel)("trimTicks", t.trimYAxisTicks)("maxTickLength", t.maxYAxisTickLength)("tickFormatting", t.yAxisTickFormatting)("ticks", t.yAxisTicks)
      }
    }

    function dw(t, e) {
      if (1 & t) {
        const t = bo();
        mn(), vo(0, "g", 6), So("dimensionsChanged", (function (e) {
          return We(t), ko().updateXAxisHeight(e)
        })), _o()
      }
      if (2 & t) {
        const t = ko();
        mo("xScale", t.groupScale)("dims", t.dims)("showLabel", t.showXAxisLabel)("labelText", t.xAxisLabel)("trimTicks", t.trimXAxisTicks)("rotateTicks", t.rotateXAxisTicks)("maxTickLength", t.maxXAxisTickLength)("tickFormatting", t.xAxisTickFormatting)("ticks", t.xAxisTicks)("xAxisOffset", t.dataLabelMaxHeight.negative)
      }
    }

    function fw(t, e) {
      if (1 & t) {
        const t = bo();
        mn(), vo(0, "g", 7), So("dimensionsChanged", (function (e) {
          return We(t), ko().updateYAxisWidth(e)
        })), _o()
      }
      if (2 & t) {
        const t = ko();
        mo("yScale", t.valueScale)("dims", t.dims)("showGridLines", t.showGridLines)("showLabel", t.showYAxisLabel)("labelText", t.yAxisLabel)("trimTicks", t.trimYAxisTicks)("maxTickLength", t.maxYAxisTickLength)("tickFormatting", t.yAxisTickFormatting)("ticks", t.yAxisTicks)
      }
    }

    function pw(t, e) {
      if (1 & t) {
        const t = bo();
        mn(), vo(0, "g", 8), So("select", (function (n) {
          We(t);
          const i = e.$implicit;
          return ko().onClick(n, i)
        }))("activate", (function (n) {
          We(t);
          const i = e.$implicit;
          return ko().onActivate(n, i)
        }))("deactivate", (function (n) {
          We(t);
          const i = e.$implicit;
          return ko().onDeactivate(n, i)
        }))("dataLabelHeightChanged", (function (n) {
          We(t);
          const i = e.index;
          return ko().onDataLabelMaxHeightChanged(n, i)
        })), _o()
      }
      if (2 & t) {
        const t = e.$implicit, n = ko();
        mo("@animationState", "active")("activeEntries", n.activeEntries)("xScale", n.innerScale)("yScale", n.valueScale)("colors", n.colors)("series", t.series)("dims", n.dims)("gradient", n.gradient)("tooltipDisabled", n.tooltipDisabled)("tooltipTemplate", n.tooltipTemplate)("showDataLabel", n.showDataLabel)("dataLabelFormatting", n.dataLabelFormatting)("seriesName", t.name)("roundEdges", n.roundEdges)("animations", n.animations)("noBarWhenZero", n.noBarWhenZero), co("transform", n.groupTransform(t))
      }
    }

    const gw = ["ngx-charts-series-vertical", ""];

    function mw(t, e) {
      if (1 & t) {
        const t = bo();
        mn(), vo(0, "g", 2), So("select", (function (e) {
          return We(t), ko().onClick(e)
        }))("activate", (function (e) {
          return We(t), ko().activate.emit(e)
        }))("deactivate", (function (e) {
          return We(t), ko().deactivate.emit(e)
        })), _o()
      }
      if (2 & t) {
        const t = e.$implicit, n = ko();
        mo("@animationState", "active")("@.disabled", !n.animations)("width", t.width)("height", t.height)("x", t.x)("y", t.y)("fill", t.color)("stops", t.gradientStops)("data", t.data)("orientation", "vertical")("roundEdges", t.roundEdges)("gradient", n.gradient)("ariaLabel", t.ariaLabel)("isActive", n.isActive(t.data))("tooltipDisabled", n.tooltipDisabled)("tooltipPlacement", n.tooltipPlacement)("tooltipType", n.tooltipType)("tooltipTitle", n.tooltipTemplate ? void 0 : t.tooltipText)("tooltipTemplate", n.tooltipTemplate)("tooltipContext", t.data)("noBarWhenZero", n.noBarWhenZero)("animations", n.animations)
      }
    }

    function yw(t, e) {
      if (1 & t) {
        const t = bo();
        mn(), vo(0, "g", 4), So("dimensionsChanged", (function (n) {
          We(t);
          const i = e.index;
          return ko(2).dataLabelHeightChanged.emit({size: n, index: i})
        })), _o()
      }
      if (2 & t) {
        const t = e.$implicit, n = ko(2);
        mo("barX", t.x)("barY", t.y)("barWidth", t.width)("barHeight", t.height)("value", t.total)("valueFormatting", n.dataLabelFormatting)("orientation", "vertical")
      }
    }

    function vw(t, e) {
      if (1 & t && (mn(), vo(0, "g"), ho(1, yw, 1, 7, "g", 3), _o()), 2 & t) {
        const t = ko();
        cr(1), mo("ngForOf", t.barsForDataLabels)("ngForTrackBy", t.trackDataLabelBy)
      }
    }

    const _w = ["ngx-charts-bar-label", ""], ww = ["ngx-charts-pie-label", ""], bw = ["ngx-charts-pie-arc", ""];

    function xw(t, e) {
      if (1 & t && (mn(), vo(0, "defs"), wo(1, "g", 3), _o()), 2 & t) {
        const t = ko();
        cr(1), mo("color", t.fill)("name", t.radialGradientId)("startOpacity", t.startOpacity)
      }
    }

    const Sw = ["ngx-charts-pie-series", ""];

    function Tw(t, e) {
      if (1 & t && (mn(), wo(0, "g", 3)), 2 & t) {
        const t = ko().$implicit, e = ko();
        mo("data", t)("radius", e.outerRadius)("color", e.color(t))("label", e.labelText(t))("labelTrim", e.trimLabels)("labelTrimSize", e.maxLabelLength)("max", e.max)("value", t.value)("explodeSlices", e.explodeSlices)("animations", e.animations)
      }
    }

    function Cw(t, e) {
      if (1 & t) {
        const t = bo();
        mn(), vo(0, "g"), ho(1, Tw, 1, 10, "g", 1), vo(2, "g", 2), So("select", (function (e) {
          return We(t), ko().onClick(e)
        }))("activate", (function (e) {
          return We(t), ko().activate.emit(e)
        }))("deactivate", (function (e) {
          return We(t), ko().deactivate.emit(e)
        }))("dblclick", (function (e) {
          return We(t), ko().dblclick.emit(e)
        })), _o(), _o()
      }
      if (2 & t) {
        const t = e.$implicit, n = ko();
        cr(1), mo("ngIf", n.labelVisible(t)), cr(1), mo("startAngle", t.startAngle)("endAngle", t.endAngle)("innerRadius", n.innerRadius)("outerRadius", n.outerRadius)("fill", n.color(t))("value", t.data.value)("gradient", n.gradient)("data", t.data)("max", n.max)("explodeSlices", n.explodeSlices)("isActive", n.isActive(t.data))("animate", n.animations)("tooltipDisabled", n.tooltipDisabled)("tooltipPlacement", "top")("tooltipType", "tooltip")("tooltipTitle", n.getTooltipTitle(t))("tooltipTemplate", n.tooltipTemplate)("tooltipContext", t.data)
      }
    }

    var kw;
    let Ew = (() => {
      let t = kw = class {
        constructor(t, e, n) {
          this.applicationRef = t, this.componentFactoryResolver = e, this.injector = n
        }

        static setGlobalRootViewContainer(t) {
          kw.globalRootViewContainer = t
        }

        getRootViewContainer() {
          if (this._container) return this._container;
          if (kw.globalRootViewContainer) return kw.globalRootViewContainer;
          if (this.applicationRef.components.length) return this.applicationRef.components[0];
          throw new Error("View Container not found! ngUpgrade needs to manually set this via setRootViewContainer or setGlobalRootViewContainer.")
        }

        setRootViewContainer(t) {
          this._container = t
        }

        getComponentRootNode(t) {
          return t.element ? t.element.nativeElement : t.hostView && t.hostView.rootNodes.length > 0 ? t.hostView.rootNodes[0] : t.location.nativeElement
        }

        getRootViewContainerNode(t) {
          return this.getComponentRootNode(t)
        }

        projectComponentBindings(t, e) {
          if (e) {
            if (void 0 !== e.inputs) {
              const n = Object.getOwnPropertyNames(e.inputs);
              for (const i of n) t.instance[i] = e.inputs[i]
            }
            if (void 0 !== e.outputs) {
              const n = Object.getOwnPropertyNames(e.outputs);
              for (const i of n) t.instance[i] = e.outputs[i]
            }
          }
          return t
        }

        appendComponent(t, e = {}, n) {
          n || (n = this.getRootViewContainer());
          const i = this.getComponentRootNode(n),
            r = new lf(i, this.componentFactoryResolver, this.applicationRef, this.injector), s = new sf(t),
            o = r.attach(s);
          return this.projectComponentBindings(o, e), o
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(vc), Gt(ya), Gt(Zs))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t.globalRootViewContainer = null, t
    })();

    function Aw(t, e, n) {
      let i, r, s;
      n = n || {};
      let o = null, a = 0;

      function l() {
        a = !1 === n.leading ? 0 : +new Date, o = null, s = t.apply(i, r)
      }

      return function () {
        const c = +new Date;
        a || !1 !== n.leading || (a = c);
        const u = e - (c - a);
        return i = this, r = arguments, u <= 0 ? (clearTimeout(o), o = null, a = c, s = t.apply(i, r)) : o || !1 === n.trailing || (o = setTimeout(l, u)), s
      }
    }

    var Ow = function (t) {
      return t[t.top = "top"] = "top", t[t.bottom = "bottom"] = "bottom", t[t.left = "left"] = "left", t[t.right = "right"] = "right", t
    }({});

    function Lw(t, e, n) {
      return "top" === n ? t.top - 7 : "bottom" === n ? t.top + t.height - e.height + 7 : "center" === n ? t.top + t.height / 2 - e.height / 2 : void 0
    }

    function Dw(t, e, n) {
      return "left" === n ? t.left - 7 : "right" === n ? t.left + t.width - e.width + 7 : "center" === n ? t.left + t.width / 2 - e.width / 2 : void 0
    }

    class Mw {
      static calculateVerticalAlignment(t, e, n) {
        let i = Lw(t, e, n);
        return i + e.height > window.innerHeight && (i = window.innerHeight - e.height), i
      }

      static calculateVerticalCaret(t, e, n, i) {
        let r;
        "top" === i && (r = t.height / 2 - n.height / 2 + 7), "bottom" === i && (r = e.height - t.height / 2 - n.height / 2 - 7), "center" === i && (r = e.height / 2 - n.height / 2);
        const s = Lw(t, e, i);
        return s + e.height > window.innerHeight && (r += s + e.height - window.innerHeight), r
      }

      static calculateHorizontalAlignment(t, e, n) {
        let i = Dw(t, e, n);
        return i + e.width > window.innerWidth && (i = window.innerWidth - e.width), i
      }

      static calculateHorizontalCaret(t, e, n, i) {
        let r;
        "left" === i && (r = t.width / 2 - n.width / 2 + 7), "right" === i && (r = e.width - t.width / 2 - n.width / 2 - 7), "center" === i && (r = e.width / 2 - n.width / 2);
        const s = Dw(t, e, i);
        return s + e.width > window.innerWidth && (r += s + e.width - window.innerWidth), r
      }

      static shouldFlip(t, e, n, i) {
        let r = !1;
        return "right" === n && t.left + t.width + e.width + i > window.innerWidth && (r = !0), "left" === n && t.left - e.width - i < 0 && (r = !0), "top" === n && t.top - e.height - i < 0 && (r = !0), "bottom" === n && t.top + t.height + e.height + i > window.innerHeight && (r = !0), r
      }

      static positionCaret(t, e, n, i, r) {
        let s = 0, o = 0;
        return t === Ow.right ? (o = -7, s = Mw.calculateVerticalCaret(n, e, i, r)) : t === Ow.left ? (o = e.width, s = Mw.calculateVerticalCaret(n, e, i, r)) : t === Ow.top ? (s = e.height, o = Mw.calculateHorizontalCaret(n, e, i, r)) : t === Ow.bottom && (s = -7, o = Mw.calculateHorizontalCaret(n, e, i, r)), {
          top: s,
          left: o
        }
      }

      static positionContent(t, e, n, i, r) {
        let s = 0, o = 0;
        return t === Ow.right ? (o = n.left + n.width + i, s = Mw.calculateVerticalAlignment(n, e, r)) : t === Ow.left ? (o = n.left - e.width - i, s = Mw.calculateVerticalAlignment(n, e, r)) : t === Ow.top ? (s = n.top - e.height - i, o = Mw.calculateHorizontalAlignment(n, e, r)) : t === Ow.bottom && (s = n.top + n.height + i, o = Mw.calculateHorizontalAlignment(n, e, r)), {
          top: s,
          left: o
        }
      }

      static determinePlacement(t, e, n, i) {
        if (Mw.shouldFlip(n, e, t, i)) {
          if (t === Ow.right) return Ow.left;
          if (t === Ow.left) return Ow.right;
          if (t === Ow.top) return Ow.bottom;
          if (t === Ow.bottom) return Ow.top
        }
        return t
      }
    }

    let Pw = (() => {
      let t = class {
        constructor(t, e) {
          this.element = t, this.renderer = e
        }

        get cssClasses() {
          let t = "ngx-charts-tooltip-content";
          return t += " position-" + this.placement, t += " type-" + this.type, t += " " + this.cssClass, t
        }

        ngAfterViewInit() {
          setTimeout(this.position.bind(this))
        }

        position() {
          const t = this.element.nativeElement, e = this.host.nativeElement.getBoundingClientRect();
          if (!e.height && !e.width) return;
          const n = t.getBoundingClientRect();
          this.checkFlip(e, n), this.positionContent(t, e, n), this.showCaret && this.positionCaret(e, n), setTimeout(() => this.renderer.addClass(t, "animate"), 1)
        }

        positionContent(t, e, n) {
          const {top: i, left: r} = Mw.positionContent(this.placement, n, e, this.spacing, this.alignment);
          this.renderer.setStyle(t, "top", i + "px"), this.renderer.setStyle(t, "left", r + "px")
        }

        positionCaret(t, e) {
          const n = this.caretElm.nativeElement,
            i = n.getBoundingClientRect(), {top: r, left: s} = Mw.positionCaret(this.placement, e, t, i, this.alignment);
          this.renderer.setStyle(n, "top", r + "px"), this.renderer.setStyle(n, "left", s + "px")
        }

        checkFlip(t, e) {
          this.placement = Mw.determinePlacement(this.placement, e, t, this.spacing)
        }

        onWindowResize() {
          this.position()
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)(fo(va), fo(xa))
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["ngx-tooltip-content"]],
        viewQuery: function (t, e) {
          var n;
          1 & t && Tl(b_, !0), 2 & t && Sl(n = kl()) && (e.caretElm = n.first)
        },
        hostVars: 2,
        hostBindings: function (t, e) {
          1 & t && So("resize", (function () {
            return e.onWindowResize()
          }), !1, Nn), 2 & t && jo(ie, Io, e.cssClasses, !0)
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
          1 & t && (vo(0, "div"), wo(1, "span", 0, 1), vo(3, "div", 2), ho(4, T_, 2, 4, "span", 3), ho(5, C_, 1, 1, "span", 4), _o(), _o()), 2 & t && (cr(1), "tooltip-caret position-", n = e.placement, "", jo(ie, Io, uo(Be(), "tooltip-caret position-", n, ""), !0), mo("hidden", !e.showCaret), cr(3), mo("ngIf", !e.title), cr(1), mo("ngIf", e.title))
        },
        directives: [tu, iu],
        styles: [".ngx-charts-tooltip-content{position:fixed;border-radius:3px;z-index:5000;display:block;font-weight:400;opacity:0;pointer-events:none!important}.ngx-charts-tooltip-content.type-popover{background:#fff;color:#060709;border:1px solid #72809b;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);font-size:13px;padding:4px}.ngx-charts-tooltip-content.type-popover .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #fff}.ngx-charts-tooltip-content.type-tooltip{color:#fff;background:rgba(0,0,0,.75);font-size:12px;padding:0 10px;text-align:center;pointer-events:auto}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content .tooltip-label{display:block;line-height:1em;padding:8px 5px 5px;font-size:1em}.ngx-charts-tooltip-content .tooltip-val{display:block;font-size:1.3em;line-height:1em;padding:0 5px 8px}.ngx-charts-tooltip-content .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.position-right{transform:translate3d(10px,0,0)}.ngx-charts-tooltip-content.position-left{transform:translate3d(-10px,0,0)}.ngx-charts-tooltip-content.position-top{transform:translate3d(0,-10px,0)}.ngx-charts-tooltip-content.position-bottom{transform:translate3d(0,10px,0)}.ngx-charts-tooltip-content.animate{opacity:1;transition:opacity .3s,transform .3s;transform:translate3d(0,0,0);pointer-events:auto}.area-tooltip-container{padding:5px 0;pointer-events:none}.tooltip-item{text-align:left;line-height:1.2em;padding:5px 0}.tooltip-item .tooltip-item-color{display:inline-block;height:12px;width:12px;margin-right:5px;color:#5b646b;border-radius:3px}"],
        encapsulation: 2
      }), function (t, e, n, i) {
        var r, s = arguments.length, o = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, n, i); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, n, o) : r(e, n)) || o);
        s > 3 && o && Object.defineProperty(e, n, o)
      }([function (t, e, n) {
        return {
          configurable: !0, enumerable: n.enumerable, get: function () {
            return Object.defineProperty(this, e, {
              configurable: !0,
              enumerable: n.enumerable,
              value: Aw(n.value, 100, void 0)
            }), this[e]
          }
        }
      }], t.prototype, "onWindowResize", null), t
    })(), Rw = (() => {
      let t = class extends class {
        constructor(t) {
          this.injectionService = t, this.defaults = {}, this.components = new Map
        }

        getByType(t = this.type) {
          return this.components.get(t)
        }

        create(t) {
          return this.createByType(this.type, t)
        }

        createByType(t, e) {
          e = this.assignDefaults(e);
          const n = this.injectComponent(t, e);
          return this.register(t, n), n
        }

        destroy(t) {
          const e = this.components.get(t.componentType);
          if (e && e.length) {
            const n = e.indexOf(t);
            n > -1 && (e[n].destroy(), e.splice(n, 1))
          }
        }

        destroyAll() {
          this.destroyByType(this.type)
        }

        destroyByType(t) {
          const e = this.components.get(t);
          if (e && e.length) {
            let t = e.length - 1;
            for (; t >= 0;) this.destroy(e[t--])
          }
        }

        injectComponent(t, e) {
          return this.injectionService.appendComponent(t, e)
        }

        assignDefaults(t) {
          const e = Object.assign({}, this.defaults.inputs), n = Object.assign({}, this.defaults.outputs);
          return t.inputs || t.outputs || (t = {inputs: t}), e && (t.inputs = Object.assign(Object.assign({}, e), t.inputs)), n && (t.outputs = Object.assign(Object.assign({}, n), t.outputs)), t
        }

        register(t, e) {
          this.components.has(t) || this.components.set(t, []), this.components.get(t).push(e)
        }
      } {
        constructor(t) {
          super(t), this.type = Pw
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Ew))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })(), Fw = (() => {
      let t = class {
        constructor() {
          this.showLegend = !1, this.animations = !0, this.legendLabelClick = new dl, this.legendLabelActivate = new dl, this.legendLabelDeactivate = new dl
        }

        ngOnChanges(t) {
          this.update()
        }

        update() {
          let t = 0;
          this.showLegend && (this.legendType = this.getLegendType(), this.legendOptions && "right" !== this.legendOptions.position || (t = "scaleLegend" === this.legendType ? 1 : 2)), this.chartWidth = Math.floor(this.view[0] * (12 - t) / 12), this.legendWidth = this.legendOptions && "right" !== this.legendOptions.position ? this.chartWidth : Math.floor(this.view[0] * t / 12)
        }

        getLegendType() {
          return "linear" === this.legendOptions.scaleType ? "scaleLegend" : "legend"
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
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
        features: [pa([Rw]), ra],
        ngContentSelectors: A_,
        decls: 5,
        vars: 8,
        consts: [[1, "ngx-charts-outer"], [1, "ngx-charts"], ["class", "chart-legend", 3, "horizontal", "valueRange", "colors", "height", "width", 4, "ngIf"], ["class", "chart-legend", 3, "horizontal", "data", "title", "colors", "height", "width", "activeEntries", "labelClick", "labelActivate", "labelDeactivate", 4, "ngIf"], [1, "chart-legend", 3, "horizontal", "valueRange", "colors", "height", "width"], [1, "chart-legend", 3, "horizontal", "data", "title", "colors", "height", "width", "activeEntries", "labelClick", "labelActivate", "labelDeactivate"]],
        template: function (t, e) {
          1 & t && (function (t) {
            const e = Be()[16][6];
            if (!e.projection) {
              const t = e.projection = ne(1, null), n = t.slice();
              let i = e.child;
              for (; null !== i;) {
                const e = 0;
                null !== e && (n[e] ? n[e].projectionNext = i : t[e] = i, n[e] = i), i = i.next
              }
            }
          }(), vo(0, "div", 0), mn(), vo(1, "svg", 1), function (t, e = 0, n) {
            const i = Be(), r = qe(), s = wr(r, i[6], t, 1, null, n || null);
            null === s.projection && (s.projection = e), Ze(), function (t, e, n) {
              Ss(e[11], 0, e, n, fs(t, n, e), vs(n.parent || e[6], e))
            }(r, i, s)
          }(2), _o(), ho(3, k_, 1, 5, "ngx-charts-scale-legend", 2), ho(4, E_, 1, 7, "ngx-charts-legend", 3), _o()), 2 & t && (Ro("width", e.view[0], "px"), mo("@animationState", "active")("@.disabled", !e.animations), cr(1), co("width", e.chartWidth)("height", e.view[1]), cr(2), mo("ngIf", e.showLegend && "scaleLegend" === e.legendType), cr(1), mo("ngIf", e.showLegend && "legend" === e.legendType))
        },
        directives: function () {
          return [tu, cb, ab]
        },
        encapsulation: 2,
        data: {animation: [ju("animationState", [Vu(":enter", [$u({opacity: 0}), Hu("500ms 100ms", $u({opacity: 1}))])])]},
        changeDetection: 0
      }), t
    })(), Iw = (() => {
      let t = class {
        constructor(t, e) {
          this.element = t, this.zone = e, this.visible = new dl, this.isVisible = !1, this.runCheck()
        }

        destroy() {
          clearTimeout(this.timeout)
        }

        onVisibilityChange() {
          this.zone.run(() => {
            this.isVisible = !0, this.visible.emit(!0)
          })
        }

        runCheck() {
          const t = () => {
            if (!this.element) return;
            const {offsetHeight: e, offsetWidth: n} = this.element.nativeElement;
            e && n ? (clearTimeout(this.timeout), this.onVisibilityChange()) : (clearTimeout(this.timeout), this.zone.runOutsideAngular(() => {
              this.timeout = setTimeout(() => t(), 100)
            }))
          };
          this.zone.runOutsideAngular(() => {
            this.timeout = setTimeout(() => t())
          })
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)(fo(va), fo(Kl))
      }, t.\u0275dir = ye({type: t, selectors: [["visibility-observer"]], outputs: {visible: "visible"}}), t
    })(), Nw = (() => {
      let t = class {
        constructor(t, e, n) {
          this.chartElement = t, this.zone = e, this.cd = n, this.scheme = "cool", this.schemeType = "ordinal", this.animations = !0, this.select = new dl
        }

        ngAfterViewInit() {
          this.bindWindowResizeEvent(), this.visibilityObserver = new Iw(this.chartElement, this.zone), this.visibilityObserver.visible.subscribe(this.update.bind(this))
        }

        ngOnDestroy() {
          this.unbindEvents(), this.visibilityObserver && (this.visibilityObserver.visible.unsubscribe(), this.visibilityObserver.destroy())
        }

        ngOnChanges(t) {
          this.update()
        }

        update() {
          if (this.results = this.results ? this.cloneData(this.results) : [], this.view) this.width = this.view[0], this.height = this.view[1]; else {
            const t = this.getContainerDims();
            t && (this.width = t.width, this.height = t.height)
          }
          this.width || (this.width = 600), this.height || (this.height = 400), this.width = Math.floor(this.width), this.height = Math.floor(this.height), this.cd && this.cd.markForCheck()
        }

        getContainerDims() {
          let t, e;
          const n = this.chartElement.nativeElement;
          if (null !== n.parentNode) {
            const i = n.parentNode.getBoundingClientRect();
            t = i.width, e = i.height
          }
          return t && e ? {width: t, height: e} : null
        }

        formatDates() {
          for (let t = 0; t < this.results.length; t++) {
            const e = this.results[t];
            if (e.label = e.name, e.label instanceof Date && (e.label = e.label.toLocaleDateString()), e.series) for (let t = 0; t < e.series.length; t++) {
              const n = e.series[t];
              n.label = n.name, n.label instanceof Date && (n.label = n.label.toLocaleDateString())
            }
          }
        }

        unbindEvents() {
          this.resizeSubscription && this.resizeSubscription.unsubscribe()
        }

        bindWindowResizeEvent() {
          const t = function t(e, n, r, s) {
            return i(r) && (s = r, r = void 0), s ? t(e, n, r).pipe(N(t => l(t) ? s(...t) : s(t))) : new w(t => {
              !function t(e, n, i, r, s) {
                let o;
                if (function (t) {
                  return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                }(e)) {
                  const t = e;
                  e.addEventListener(n, i, s), o = () => t.removeEventListener(n, i, s)
                } else if (function (t) {
                  return t && "function" == typeof t.on && "function" == typeof t.off
                }(e)) {
                  const t = e;
                  e.on(n, i), o = () => t.off(n, i)
                } else if (function (t) {
                  return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
                }(e)) {
                  const t = e;
                  e.addListener(n, i), o = () => t.removeListener(n, i)
                } else {
                  if (!e || !e.length) throw new TypeError("Invalid event target");
                  for (let o = 0, a = e.length; o < a; o++) t(e[o], n, i, r, s)
                }
                r.add(o)
              }(e, n, (function (e) {
                t.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : e)
              }), t, r)
            })
          }(window, "resize").pipe(function (t, e = ff) {
            return n => n.lift(new pf(t, e))
          }(200)).subscribe(t => {
            this.update(), this.cd && this.cd.markForCheck()
          });
          this.resizeSubscription = t
        }

        cloneData(t) {
          const e = [];
          for (const n of t) {
            const t = {name: n.name};
            if (void 0 !== n.value && (t.value = n.value), void 0 !== n.series) {
              t.series = [];
              for (const e of n.series) {
                const n = Object.assign({}, e);
                t.series.push(n)
              }
            }
            void 0 !== n.extra && (t.extra = JSON.parse(JSON.stringify(n.extra))), e.push(t)
          }
          return e
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)(fo(va), fo(Kl), fo(Rs))
      }, t.\u0275cmp = he({
        type: t,
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
        features: [ra],
        decls: 1,
        vars: 0,
        template: function (t, e) {
          1 & t && wo(0, "div")
        },
        encapsulation: 2
      }), t
    })(), jw = (() => {
      let t = class {
        constructor(t) {
          this.textHeight = 25, this.margin = 5, this.element = t.nativeElement
        }

        ngOnChanges(t) {
          this.update()
        }

        update() {
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
      };
      return t.\u0275fac = function (e) {
        return new (e || t)(fo(va))
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["g", "ngx-charts-axis-label", ""]],
        inputs: {orient: "orient", label: "label", offset: "offset", width: "width", height: "height"},
        features: [ra],
        attrs: O_,
        decls: 2,
        vars: 6,
        template: function (t, e) {
          1 & t && (mn(), vo(0, "text"), Go(1), _o()), 2 & t && (co("stroke-width", e.strokeWidth)("x", e.x)("y", e.y)("text-anchor", e.textAnchor)("transform", e.transform), cr(1), Yo(" ", e.label, " "))
        },
        encapsulation: 2,
        changeDetection: 0
      }), t
    })();

    function Hw(t, e = 16) {
      return "string" != typeof t ? "number" == typeof t ? t + "" : "" : (t = t.trim()).length <= e ? t : t.slice(0, e) + "..."
    }

    function Uw(t, e) {
      if (t.length > e) {
        const n = [], i = Math.floor(t.length / e);
        for (let e = 0; e < t.length; e++) e % i == 0 && n.push(t[e]);
        t = n
      }
      return t
    }

    let $w = (() => {
      let t = class {
        constructor() {
          this.tickArguments = [5], this.tickStroke = "#ccc", this.trimTicks = !0, this.maxTickLength = 16, this.showGridLines = !1, this.rotateTicks = !0, this.dimensionsChanged = new dl, this.verticalSpacing = 20, this.rotateLabels = !1, this.innerTickSize = 6, this.outerTickSize = 6, this.tickPadding = 3, this.textAnchor = "middle", this.maxTicksLength = 0, this.maxAllowedLength = 16, this.height = 0
        }

        ngOnChanges(t) {
          this.update()
        }

        ngAfterViewInit() {
          setTimeout(() => this.updateDims())
        }

        updateDims() {
          const t = parseInt(this.ticksElement.nativeElement.getBoundingClientRect().height, 10);
          t !== this.height && (this.height = t, this.dimensionsChanged.emit({height: t}), setTimeout(() => this.updateDims()))
        }

        update() {
          const t = this.scale;
          this.ticks = this.getTicks(), this.tickFormat = this.tickFormatting ? this.tickFormatting : t.tickFormat ? t.tickFormat.apply(t, this.tickArguments) : function (t) {
            return "Date" === t.constructor.name ? t.toLocaleDateString() : t.toLocaleString()
          };
          const e = this.rotateTicks ? this.getRotationAngle(this.ticks) : null;
          this.adjustedScale = this.scale.bandwidth ? function (t) {
            return this.scale(t) + .5 * this.scale.bandwidth()
          } : this.scale, this.textTransform = "", e && 0 !== e ? (this.textTransform = `rotate(${e})`, this.textAnchor = "end", this.verticalSpacing = 10) : this.textAnchor = "middle", setTimeout(() => this.updateDims())
        }

        getRotationAngle(t) {
          let e = 0;
          this.maxTicksLength = 0;
          for (let s = 0; s < t.length; s++) {
            const e = this.tickFormat(t[s]).toString();
            let n = e.length;
            this.trimTicks && (n = this.tickTrim(e).length), n > this.maxTicksLength && (this.maxTicksLength = n)
          }
          const n = 8 * Math.min(this.maxTicksLength, this.maxAllowedLength);
          let i = n;
          const r = Math.floor(this.width / t.length);
          for (; i > r && e > -90;) e -= 30, i = Math.cos(e * (Math.PI / 180)) * n;
          return e
        }

        getTicks() {
          let t;
          const e = this.getMaxTicks(20), n = this.getMaxTicks(100);
          return this.tickValues ? t = this.tickValues : this.scale.ticks ? t = this.scale.ticks.apply(this.scale, [n]) : (t = this.scale.domain(), t = Uw(t, e)), t
        }

        getMaxTicks(t) {
          return Math.floor(this.width / t)
        }

        tickTransform(t) {
          return "translate(" + this.adjustedScale(t) + "," + this.verticalSpacing + ")"
        }

        gridLineTransform() {
          return `translate(0,${-this.verticalSpacing - 5})`
        }

        tickTrim(t) {
          return this.trimTicks ? Hw(t, this.maxTickLength) : t
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["g", "ngx-charts-x-axis-ticks", ""]],
        viewQuery: function (t, e) {
          var n;
          1 & t && Tl(L_, !0), 2 & t && Sl(n = kl()) && (e.ticksElement = n.first)
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
        features: [ra],
        attrs: D_,
        decls: 4,
        vars: 2,
        consts: [["ticksel", ""], ["class", "tick", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "tick"], ["stroke-width", "0.01"], [4, "ngIf"], ["y2", "0", 1, "gridline-path", "gridline-path-vertical"]],
        template: function (t, e) {
          1 & t && (mn(), vo(0, "g", null, 0), ho(2, M_, 5, 7, "g", 1), _o(), ho(3, R_, 2, 2, "g", 2)), 2 & t && (cr(2), mo("ngForOf", e.ticks), cr(1), mo("ngForOf", e.ticks))
        },
        directives: [Kc, tu],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), Vw = (() => {
      let t = class {
        constructor() {
          this.rotateTicks = !0, this.showGridLines = !1, this.xOrient = "bottom", this.xAxisOffset = 0, this.dimensionsChanged = new dl, this.xAxisClassName = "x axis", this.labelOffset = 0, this.fill = "none", this.stroke = "stroke", this.tickStroke = "#ccc", this.strokeWidth = "none", this.padding = 5
        }

        ngOnChanges(t) {
          this.update()
        }

        update() {
          this.transform = `translate(0,${this.xAxisOffset + this.padding + this.dims.height})`, void 0 !== this.xAxisTickCount && (this.tickArguments = [this.xAxisTickCount])
        }

        emitTicksHeight({height: t}) {
          const e = t + 25 + 5;
          e !== this.labelOffset && (this.labelOffset = e, setTimeout(() => {
            this.dimensionsChanged.emit({height: t})
          }, 0))
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["g", "ngx-charts-x-axis", ""]],
        viewQuery: function (t, e) {
          var n;
          1 & t && Tl($w, !0), 2 & t && Sl(n = kl()) && (e.ticksComponent = n.first)
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
        features: [ra],
        attrs: F_,
        decls: 3,
        vars: 4,
        consts: [["ngx-charts-x-axis-ticks", "", 3, "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickStroke", "scale", "orient", "showGridLines", "gridLineHeight", "width", "tickValues", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width", 4, "ngIf"], ["ngx-charts-x-axis-ticks", "", 3, "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickStroke", "scale", "orient", "showGridLines", "gridLineHeight", "width", "tickValues", "dimensionsChanged"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width"]],
        template: function (t, e) {
          1 & t && (mn(), vo(0, "g"), ho(1, I_, 1, 12, "g", 0), ho(2, N_, 1, 5, "g", 1), _o()), 2 & t && (co("class", e.xAxisClassName)("transform", e.transform), cr(1), mo("ngIf", e.xScale), cr(1), mo("ngIf", e.showLabel))
        },
        directives: [tu, $w, jw],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })();

    function zw(t, e, n, i, r, [s, o, a, l]) {
      let c = "";
      return c = "M" + [t + r, e], c += "h" + ((n = 0 === (n = Math.floor(n)) ? 1 : n) - 2 * r), c += o ? `a${[r, r]} 0 0 1 ${[r, r]}` : `h${r}v${r}`, c += "v" + ((i = 0 === (i = Math.floor(i)) ? 1 : i) - 2 * r), c += l ? `a${[r, r]} 0 0 1 ${[-r, r]}` : `v${r}h${-r}`, c += "h" + (2 * r - n), c += a ? `a${[r, r]} 0 0 1 ${[-r, -r]}` : `h${-r}v${-r}`, c += "v" + (2 * r - i), c += s ? `a${[r, r]} 0 0 1 ${[r, -r]}` : `v${-r}h${r}`, c += "z", c
    }

    let Bw = (() => {
      let t = class {
        constructor() {
          this.tickArguments = [5], this.tickStroke = "#ccc", this.trimTicks = !0, this.maxTickLength = 16, this.showGridLines = !1, this.showRefLabels = !1, this.showRefLines = !1, this.dimensionsChanged = new dl, this.innerTickSize = 6, this.tickPadding = 3, this.verticalSpacing = 20, this.textAnchor = "middle", this.width = 0, this.outerTickSize = 6, this.rotateLabels = !1, this.referenceLineLength = 0
        }

        ngOnChanges(t) {
          this.update()
        }

        ngAfterViewInit() {
          setTimeout(() => this.updateDims())
        }

        updateDims() {
          const t = parseInt(this.ticksElement.nativeElement.getBoundingClientRect().width, 10);
          t !== this.width && (this.width = t, this.dimensionsChanged.emit({width: t}), setTimeout(() => this.updateDims()))
        }

        update() {
          let t;
          const e = "top" === this.orient || "right" === this.orient ? -1 : 1;
          switch (this.tickSpacing = Math.max(this.innerTickSize, 0) + this.tickPadding, t = this.scale, this.ticks = this.getTicks(), this.tickFormat = this.tickFormatting ? this.tickFormatting : t.tickFormat ? t.tickFormat.apply(t, this.tickArguments) : function (t) {
            return "Date" === t.constructor.name ? t.toLocaleDateString() : t.toLocaleString()
          }, this.adjustedScale = t.bandwidth ? function (e) {
            return t(e) + .5 * t.bandwidth()
          } : t, this.showRefLines && this.referenceLines && this.setReferencelines(), this.orient) {
            case"top":
            case"bottom":
              this.transform = function (t) {
                return "translate(" + this.adjustedScale(t) + ",0)"
              }, this.textAnchor = "middle", this.y2 = this.innerTickSize * e, this.y1 = this.tickSpacing * e, this.dy = e < 0 ? "0em" : ".71em";
              break;
            case"left":
              this.transform = function (t) {
                return "translate(0," + this.adjustedScale(t) + ")"
              }, this.textAnchor = "end", this.x2 = this.innerTickSize * -e, this.x1 = this.tickSpacing * -e, this.dy = ".32em";
              break;
            case"right":
              this.transform = function (t) {
                return "translate(0," + this.adjustedScale(t) + ")"
              }, this.textAnchor = "start", this.x2 = this.innerTickSize * -e, this.x1 = this.tickSpacing * -e, this.dy = ".32em"
          }
          setTimeout(() => this.updateDims())
        }

        setReferencelines() {
          this.refMin = this.adjustedScale(Math.min.apply(null, this.referenceLines.map(t => t.value))), this.refMax = this.adjustedScale(Math.max.apply(null, this.referenceLines.map(t => t.value))), this.referenceLineLength = this.referenceLines.length, this.referenceAreaPath = zw(0, this.refMax, this.gridLineWidth, this.refMin - this.refMax, 0, [!1, !1, !1, !1])
        }

        getTicks() {
          let t;
          const e = this.getMaxTicks(20), n = this.getMaxTicks(50);
          return this.tickValues ? t = this.tickValues : this.scale.ticks ? t = this.scale.ticks.apply(this.scale, [n]) : (t = this.scale.domain(), t = Uw(t, e)), t
        }

        getMaxTicks(t) {
          return Math.floor(this.height / t)
        }

        tickTransform(t) {
          return `translate(${this.adjustedScale(t)},${this.verticalSpacing})`
        }

        gridLineTransform() {
          return "translate(5,0)"
        }

        tickTrim(t) {
          return this.trimTicks ? Hw(t, this.maxTickLength) : t
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["g", "ngx-charts-y-axis-ticks", ""]],
        viewQuery: function (t, e) {
          var n;
          1 & t && Tl(L_, !0), 2 & t && Sl(n = kl()) && (e.ticksElement = n.first)
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
        features: [ra],
        attrs: j_,
        decls: 6,
        vars: 4,
        consts: [["ticksel", ""], ["class", "tick", 4, "ngFor", "ngForOf"], ["class", "reference-area", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "tick"], ["stroke-width", "0.01"], [1, "reference-area"], [4, "ngIf"], ["class", "gridline-path gridline-path-horizontal", "x1", "0", 4, "ngIf"], ["x1", "0", 1, "gridline-path", "gridline-path-horizontal"], ["x1", "0", 1, "refline-path", "gridline-path-horizontal"], [1, "refline-label"]],
        template: function (t, e) {
          1 & t && (mn(), vo(0, "g", null, 0), ho(2, H_, 5, 9, "g", 1), _o(), ho(3, U_, 1, 2, "path", 2), ho(4, B_, 2, 2, "g", 3), ho(5, G_, 2, 1, "g", 3)), 2 & t && (cr(2), mo("ngForOf", e.ticks), cr(1), mo("ngIf", e.referenceLineLength > 1 && e.refMax && e.refMin && e.showRefLines), cr(1), mo("ngForOf", e.ticks), cr(1), mo("ngForOf", e.referenceLines))
        },
        directives: [Kc, tu],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), qw = (() => {
      let t = class {
        constructor() {
          this.showGridLines = !1, this.yOrient = "left", this.yAxisOffset = 0, this.dimensionsChanged = new dl, this.yAxisClassName = "y axis", this.labelOffset = 15, this.fill = "none", this.stroke = "#CCC", this.tickStroke = "#CCC", this.strokeWidth = 1, this.padding = 5
        }

        ngOnChanges(t) {
          this.update()
        }

        update() {
          this.offset = -(this.yAxisOffset + this.padding), "right" === this.yOrient ? (this.labelOffset = 65, this.transform = `translate(${this.offset + this.dims.width} , 0)`) : (this.offset = this.offset, this.transform = `translate(${this.offset} , 0)`), void 0 !== this.yAxisTickCount && (this.tickArguments = [this.yAxisTickCount])
        }

        emitTicksWidth({width: t}) {
          t !== this.labelOffset && "right" === this.yOrient ? (this.labelOffset = t + this.labelOffset, setTimeout(() => {
            this.dimensionsChanged.emit({width: t})
          }, 0)) : t !== this.labelOffset && (this.labelOffset = t, setTimeout(() => {
            this.dimensionsChanged.emit({width: t})
          }, 0))
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["g", "ngx-charts-y-axis", ""]],
        viewQuery: function (t, e) {
          var n;
          1 & t && Tl(Bw, !0), 2 & t && Sl(n = kl()) && (e.ticksComponent = n.first)
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
        features: [ra],
        attrs: Q_,
        decls: 3,
        vars: 4,
        consts: [["ngx-charts-y-axis-ticks", "", 3, "trimTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickValues", "tickStroke", "scale", "orient", "showGridLines", "gridLineWidth", "referenceLines", "showRefLines", "showRefLabels", "height", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width", 4, "ngIf"], ["ngx-charts-y-axis-ticks", "", 3, "trimTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickValues", "tickStroke", "scale", "orient", "showGridLines", "gridLineWidth", "referenceLines", "showRefLines", "showRefLabels", "height", "dimensionsChanged"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width"]],
        template: function (t, e) {
          1 & t && (mn(), vo(0, "g"), ho(1, Y_, 1, 14, "g", 0), ho(2, Z_, 1, 5, "g", 1), _o()), 2 & t && (co("class", e.yAxisClassName)("transform", e.transform), cr(1), mo("ngIf", e.yScale), cr(1), mo("ngIf", e.showLabel))
        },
        directives: [tu, Bw, jw],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), Ww = (() => {
      let t = class {
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [[ru]]
      }), t
    })();
    var Gw = function (t) {
      return t[t.popover = "popover"] = "popover", t[t.tooltip = "tooltip"] = "tooltip", t
    }({}), Qw = function (t) {
      return t[t.left = "left"] = "left", t[t.center = "center"] = "center", t[t.right = "right"] = "right", t
    }({}), Yw = function (t) {
      return t[t.all = "all"] = "all", t[t.focus = "focus"] = "focus", t[t.mouseover = "mouseover"] = "mouseover", t
    }({});
    let Zw = (() => {
      let t = class {
        constructor(t, e, n) {
          this.tooltipService = t, this.viewContainerRef = e, this.renderer = n, this.tooltipCssClass = "", this.tooltipTitle = "", this.tooltipAppendToBody = !0, this.tooltipSpacing = 10, this.tooltipDisabled = !1, this.tooltipShowCaret = !0, this.tooltipPlacement = Ow.top, this.tooltipAlignment = Qw.center, this.tooltipType = Gw.popover, this.tooltipCloseOnClickOutside = !0, this.tooltipCloseOnMouseLeave = !0, this.tooltipHideTimeout = 300, this.tooltipShowTimeout = 100, this.tooltipShowEvent = Yw.all, this.tooltipImmediateExit = !1, this.show = new dl, this.hide = new dl
        }

        get listensForFocus() {
          return this.tooltipShowEvent === Yw.all || this.tooltipShowEvent === Yw.focus
        }

        get listensForHover() {
          return this.tooltipShowEvent === Yw.all || this.tooltipShowEvent === Yw.mouseover
        }

        ngOnDestroy() {
          this.hideTooltip(!0)
        }

        onFocus() {
          this.listensForFocus && this.showTooltip()
        }

        onBlur() {
          this.listensForFocus && this.hideTooltip(!0)
        }

        onMouseEnter() {
          this.listensForHover && this.showTooltip()
        }

        onMouseLeave(t) {
          if (this.listensForHover && this.tooltipCloseOnMouseLeave) {
            if (clearTimeout(this.timeout), this.component && this.component.instance.element.nativeElement.contains(t)) return;
            this.hideTooltip(this.tooltipImmediateExit)
          }
        }

        onMouseClick() {
          this.listensForHover && this.hideTooltip(!0)
        }

        showTooltip(t) {
          if (this.component || this.tooltipDisabled) return;
          const e = t ? 0 : this.tooltipShowTimeout;
          clearTimeout(this.timeout), this.timeout = setTimeout(() => {
            this.tooltipService.destroyAll();
            const t = this.createBoundOptions();
            this.component = this.tooltipService.create(t), setTimeout(() => {
              this.component && this.addHideListeners(this.component.instance.element.nativeElement)
            }, 10), this.show.emit(!0)
          }, e)
        }

        addHideListeners(t) {
          this.mouseEnterContentEvent = this.renderer.listen(t, "mouseenter", () => {
            clearTimeout(this.timeout)
          }), this.tooltipCloseOnMouseLeave && (this.mouseLeaveContentEvent = this.renderer.listen(t, "mouseleave", () => {
            this.hideTooltip(this.tooltipImmediateExit)
          })), this.tooltipCloseOnClickOutside && (this.documentClickEvent = this.renderer.listen(document, "click", e => {
            t.contains(e.target) || this.hideTooltip()
          }))
        }

        hideTooltip(t = !1) {
          if (!this.component) return;
          const e = () => {
            this.mouseLeaveContentEvent && this.mouseLeaveContentEvent(), this.mouseEnterContentEvent && this.mouseEnterContentEvent(), this.documentClickEvent && this.documentClickEvent(), this.hide.emit(!0), this.tooltipService.destroy(this.component), this.component = void 0
          };
          clearTimeout(this.timeout), t ? e() : this.timeout = setTimeout(e, this.tooltipHideTimeout)
        }

        createBoundOptions() {
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
      };
      return t.\u0275fac = function (e) {
        return new (e || t)(fo(Rw), fo(Ba), fo(xa))
      }, t.\u0275dir = ye({
        type: t,
        selectors: [["", "ngx-tooltip", ""]],
        hostBindings: function (t, e) {
          1 & t && So("focusin", (function () {
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
      }), t
    })(), Xw = (() => {
      let t = class {
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, providers: [Ew, Rw], imports: [[ru]]
      }), t
    })();

    function Kw(t) {
      return t instanceof Date ? t.toLocaleDateString() : t.toLocaleString()
    }

    function Jw(t) {
      return t.toLocaleString().replace(/[&'`"<>]/g, t => ({
        "&": "&amp;",
        "'": "&#x27;",
        "`": "&#x60;",
        '"': "&quot;",
        "<": "&lt;",
        ">": "&gt;"
      }[t]))
    }

    const tb = {};

    function eb() {
      let t = ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
      return t = "a" + t, tb[t] ? eb() : (tb[t] = !0, t)
    }

    let nb, ib = (() => {
      let t = class {
      };
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["g", "ngx-charts-grid-panel", ""]],
        inputs: {path: "path", width: "width", height: "height", x: "x", y: "y"},
        attrs: X_,
        decls: 1,
        vars: 4,
        consts: [["stroke", "none", 1, "gridpanel"]],
        template: function (t, e) {
          1 & t && (mn(), wo(0, "rect", 0)), 2 & t && co("height", e.height)("width", e.width)("x", e.x)("y", e.y)
        },
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), rb = (() => {
      let t = class {
        ngOnChanges(t) {
          this.update()
        }

        update() {
          this.gridPanels = this.getGridPanels()
        }

        getGridPanels() {
          return this.data.map(t => {
            let e, n, i, r, s, o = "odd";
            if ("vertical" === this.orient) {
              const a = this.xScale(t.name);
              Number.parseInt((a / this.xScale.step()).toString(), 10) % 2 == 1 && (o = "even"), e = this.xScale.bandwidth() * this.xScale.paddingInner(), n = this.xScale.bandwidth() + e, i = this.dims.height, r = this.xScale(t.name) - e / 2, s = 0
            } else if ("horizontal" === this.orient) {
              const a = this.yScale(t.name);
              Number.parseInt((a / this.yScale.step()).toString(), 10) % 2 == 1 && (o = "even"), e = this.yScale.bandwidth() * this.yScale.paddingInner(), n = this.dims.width, i = this.yScale.bandwidth() + e, r = 0, s = this.yScale(t.name) - e / 2
            }
            return {name: t.name, class: o, height: i, width: n, x: r, y: s}
          })
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["g", "ngx-charts-grid-panel-series", ""]],
        inputs: {data: "data", dims: "dims", xScale: "xScale", yScale: "yScale", orient: "orient"},
        features: [ra],
        attrs: K_,
        decls: 1,
        vars: 1,
        consts: [["ngx-charts-grid-panel", "", 3, "height", "width", "x", "y", "grid-panel", "odd", "even", 4, "ngFor", "ngForOf"], ["ngx-charts-grid-panel", "", 3, "height", "width", "x", "y"]],
        template: function (t, e) {
          1 & t && ho(0, J_, 1, 10, "g", 0), 2 & t && mo("ngForOf", e.gridPanels)
        },
        directives: [Kc, ib],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), sb = (() => {
      let t = class {
        constructor() {
          this.orientation = "vertical"
        }

        ngOnChanges(t) {
          this.x1 = "0%", this.x2 = "0%", this.y1 = "0%", this.y2 = "0%", "horizontal" === this.orientation ? this.x2 = "100%" : "vertical" === this.orientation && (this.y1 = "100%")
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["g", "ngx-charts-svg-linear-gradient", ""]],
        inputs: {orientation: "orientation", name: "name", stops: "stops"},
        features: [ra],
        attrs: tw,
        decls: 2,
        vars: 6,
        consts: [[3, "id"], [3, "stop-color", "stop-opacity", 4, "ngFor", "ngForOf"]],
        template: function (t, e) {
          1 & t && (mn(), vo(0, "linearGradient", 0), ho(1, ew, 1, 5, "stop", 1), _o()), 2 & t && (mo("id", e.name), co("x1", e.x1)("y1", e.y1)("x2", e.x2)("y2", e.y2), cr(1), mo("ngForOf", e.stops))
        },
        directives: [Kc],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), ob = (() => {
      let t = class {
        constructor() {
          this.endOpacity = 1, this.cx = 0, this.cy = 0
        }

        get stops() {
          return this.stopsInput || this.stopsDefault
        }

        set stops(t) {
          this.stopsInput = t
        }

        ngOnChanges(t) {
          this.r = "30%", ("color" in t || "startOpacity" in t || "endOpacity" in t) && (this.stopsDefault = [{
            offset: 0,
            color: this.color,
            opacity: this.startOpacity
          }, {offset: 100, color: this.color, opacity: this.endOpacity}])
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
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
        features: [ra],
        attrs: nw,
        decls: 2,
        vars: 5,
        consts: [["gradientUnits", "userSpaceOnUse", 3, "id"], [3, "stop-color", "stop-opacity", 4, "ngFor", "ngForOf"]],
        template: function (t, e) {
          1 & t && (mn(), vo(0, "radialGradient", 0), ho(1, iw, 1, 5, "stop", 1), _o()), 2 & t && (mo("id", e.name), co("cx", e.cx)("cy", e.cy)("r", e.r), cr(1), mo("ngForOf", e.stops))
        },
        directives: [Kc],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })();
    "undefined" != typeof window ? nb = window : "undefined" != typeof global && (nb = global);
    let ab = (() => {
      let t = class {
        constructor(t) {
          this.cd = t, this.horizontal = !1, this.labelClick = new dl, this.labelActivate = new dl, this.labelDeactivate = new dl, this.legendEntries = []
        }

        ngOnChanges(t) {
          this.update()
        }

        update() {
          this.cd.markForCheck(), this.legendEntries = this.getLegendEntries()
        }

        getLegendEntries() {
          const t = [];
          for (const e of this.data) {
            const n = Kw(e);
            -1 === t.findIndex(t => t.label === n) && t.push({
              label: e,
              formattedLabel: n,
              color: this.colors.getColor(e)
            })
          }
          return t
        }

        isActive(t) {
          return !!this.activeEntries && void 0 !== this.activeEntries.find(e => t.label === e.name)
        }

        activate(t) {
          this.labelActivate.emit(t)
        }

        deactivate(t) {
          this.labelDeactivate.emit(t)
        }

        trackBy(t, e) {
          return e.label
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)(fo(Rs))
      }, t.\u0275cmp = he({
        type: t,
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
        features: [ra],
        decls: 5,
        vars: 9,
        consts: [["class", "legend-title", 4, "ngIf"], [1, "legend-wrap"], [1, "legend-labels"], ["class", "legend-label", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "legend-title"], [1, "legend-title-text"], [1, "legend-label"], [3, "label", "formattedLabel", "color", "isActive", "select", "activate", "deactivate"]],
        template: function (t, e) {
          1 & t && (vo(0, "div"), ho(1, rw, 3, 1, "header", 0), vo(2, "div", 1), vo(3, "ul", 2), ho(4, sw, 2, 4, "li", 3), _o(), _o(), _o()), 2 & t && (Ro("width", e.width, "px"), cr(1), mo("ngIf", (null == e.title ? null : e.title.length) > 0), cr(2), Ro("max-height", e.height - 45, "px"), Fo("horizontal-legend", e.horizontal), cr(1), mo("ngForOf", e.legendEntries)("ngForTrackBy", e.trackBy))
        },
        directives: function () {
          return [tu, Kc, lb]
        },
        styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .legend-title{white-space:nowrap;overflow:hidden;margin-left:10px;margin-bottom:5px;font-size:14px;font-weight:700}.chart-legend li,.chart-legend ul{padding:0;margin:0;list-style:none}.chart-legend .horizontal-legend li{display:inline-block}.chart-legend .legend-wrap{width:calc(100% - 10px)}.chart-legend .legend-labels{line-height:85%;list-style:none;text-align:left;float:left;width:100%;border-radius:3px;overflow-y:auto;overflow-x:hidden;white-space:nowrap;background:rgba(0,0,0,.05)}.chart-legend .legend-label{cursor:pointer;font-size:90%;margin:8px;color:#afb7c8}.chart-legend .legend-label:hover{color:#000;transition:.2s}.chart-legend .legend-label .active .legend-label-text{color:#000}.chart-legend .legend-label-color{display:inline-block;height:15px;width:15px;margin-right:5px;color:#5b646b;border-radius:3px}.chart-legend .legend-label-text{display:inline-block;vertical-align:top;line-height:15px;font-size:12px;width:calc(100% - 20px);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chart-legend .legend-title-text{vertical-align:bottom;display:inline-block;line-height:16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}"],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), lb = (() => {
      let t = class {
        constructor() {
          this.isActive = !1, this.select = new dl, this.activate = new dl, this.deactivate = new dl, this.toggle = new dl
        }

        get trimmedLabel() {
          return this.formattedLabel || "(empty)"
        }

        onMouseEnter() {
          this.activate.emit({name: this.label})
        }

        onMouseLeave() {
          this.deactivate.emit({name: this.label})
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["ngx-charts-legend-entry"]],
        hostBindings: function (t, e) {
          1 & t && So("mouseenter", (function () {
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
          1 & t && (vo(0, "span", 0), So("click", (function () {
            return e.select.emit(e.formattedLabel)
          })), vo(1, "span", 1), So("click", (function () {
            return e.toggle.emit(e.formattedLabel)
          })), _o(), vo(2, "span", 2), Go(3), _o(), _o()), 2 & t && (Fo("active", e.isActive), mo("title", e.formattedLabel), cr(1), Ro("background-color", e.color), cr(2), Yo(" ", e.trimmedLabel, " "))
        },
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), cb = (() => {
      let t = class {
        constructor(t) {
          this.sanitizer = t, this.horizontal = !1
        }

        ngOnChanges(t) {
          const e = this.gradientString(this.colors.range(), this.colors.domain());
          this.gradient = this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(to ${this.horizontal ? "right" : "bottom"}, ${e})`)
        }

        gradientString(t, e) {
          e.push(1);
          const n = [];
          return t.reverse().forEach((t, i) => {
            n.push(`${t} ${Math.round(100 * e[i])}%`)
          }), n.join(", ")
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)(fo(Mu))
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["ngx-charts-scale-legend"]],
        inputs: {
          horizontal: "horizontal",
          valueRange: "valueRange",
          colors: "colors",
          height: "height",
          width: "width"
        },
        features: [ra],
        decls: 8,
        vars: 10,
        consts: [[1, "scale-legend"], [1, "scale-legend-label"], [1, "scale-legend-wrap"]],
        template: function (t, e) {
          1 & t && (vo(0, "div", 0), vo(1, "div", 1), vo(2, "span"), Go(3), _o(), _o(), wo(4, "div", 2), vo(5, "div", 1), vo(6, "span"), Go(7), _o(), _o(), _o()), 2 & t && (Ro("height", e.horizontal ? void 0 : e.height, "px")("width", e.width, "px"), Fo("horizontal-legend", e.horizontal), cr(3), Qo(e.valueRange[1].toLocaleString()), cr(1), Ro("background", e.gradient, Gi), cr(3), Qo(e.valueRange[0].toLocaleString()))
        },
        styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .scale-legend{text-align:center;display:flex;flex-direction:column}.chart-legend .scale-legend-wrap{display:inline-block;flex:1;width:30px;border-radius:5px;margin:0 auto}.chart-legend .scale-legend-label{font-size:12px}.chart-legend .horizontal-legend.scale-legend{flex-direction:row}.chart-legend .horizontal-legend .scale-legend-wrap{width:auto;height:30px;margin:0 16px}"],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), ub = (() => {
      let t = class {
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [[ru, Ww, Xw], ru, Ww, Xw]
      }), t
    })();

    function hb({width: t, height: e, margins: n, showXAxis: i = !1, showYAxis: r = !1, xAxisHeight: s = 0, yAxisWidth: o = 0, showXLabel: a = !1, showYLabel: l = !1, showLegend: c = !1, legendType: u = "ordinal", legendPosition: h = "right", columns: d = 12}) {
      let f = n[3], p = t, g = e - n[0] - n[2];
      if (c && "right" === h && (d -= "ordinal" === u ? 2 : 1), p = p * d / 12, p = p - n[1] - n[3], i && (g -= 5, g -= s, a) && (g -= 30), r && (p -= 5, p -= o, f += o, f += 10, l)) {
        const t = 30;
        p -= t, f += t
      }
      return p = Math.max(0, p), g = Math.max(0, g), {
        width: Math.floor(p),
        height: Math.floor(g),
        xOffset: Math.floor(f)
      }
    }

    let db = [{
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
    }];

    class fb {
      constructor(t, e, n, i) {
        "string" == typeof t && (t = db.find(e => e.name === t)), this.colorDomain = t.domain, this.scaleType = e, this.domain = n, this.customColors = i, this.scale = this.generateColorScheme(t, e, this.domain)
      }

      generateColorScheme(t, e, n) {
        let i;
        if ("string" == typeof t && (t = db.find(e => e.name === t)), "quantile" === e) i = function t() {
          var e, n = [], i = [], r = [];

          function s() {
            var t = 0, e = Math.max(1, i.length);
            for (r = new Array(e - 1); ++t < e;) r[t - 1] = Dv(n, t / e);
            return o
          }

          function o(t) {
            return isNaN(t = +t) ? e : i[Xy(r, t)]
          }

          return o.invertExtent = function (t) {
            var e = i.indexOf(t);
            return e < 0 ? [NaN, NaN] : [e > 0 ? r[e - 1] : n[0], e < r.length ? r[e] : n[n.length - 1]]
          }, o.domain = function (t) {
            if (!arguments.length) return n.slice();
            n = [];
            for (let e of t) null == e || isNaN(e = +e) || n.push(e);
            return n.sort(Nm), s()
          }, o.range = function (t) {
            return arguments.length ? (i = Array.from(t), s()) : i.slice()
          }, o.unknown = function (t) {
            return arguments.length ? (e = t, o) : e
          }, o.quantiles = function () {
            return r.slice()
          }, o.copy = function () {
            return t().domain(n).range(i).unknown(e)
          }, av.apply(o, arguments)
        }().range(t.domain).domain(n); else if ("ordinal" === e) i = kv().range(t.domain).domain(n); else if ("linear" === e) {
          const e = [...t.domain];
          1 === e.length && (e.push(e[0]), this.colorDomain = e);
          const n = Tv(0, 1, 1 / e.length);
          i = Sv().domain(n).range(e)
        }
        return i
      }

      getColor(t) {
        if (null == t) throw new Error("Value can not be null");
        if ("linear" === this.scaleType) {
          const e = Sv().domain(this.domain).range([0, 1]);
          return this.scale(e(t))
        }
        {
          if ("function" == typeof this.customColors) return this.customColors(t);
          const e = t.toString();
          let n;
          return this.customColors && this.customColors.length > 0 && (n = this.customColors.find(t => t.name.toLowerCase() === e.toLowerCase())), n ? n.value : this.scale(t)
        }
      }

      getLinearGradientStops(t, e) {
        void 0 === e && (e = this.domain[0]);
        const n = Sv().domain(this.domain).range([0, 1]), i = Ev().domain(this.colorDomain).range([0, 1]),
          r = this.getColor(t), s = n(e), o = this.getColor(e), a = n(t);
        let l = 1, c = s;
        const u = [];
        for (u.push({color: o, offset: s, originalOffset: s, opacity: 1}); c < a && l < this.colorDomain.length;) {
          const t = this.colorDomain[l], e = i(t);
          if (e <= s) l++; else {
            if (e.toFixed(4) >= (a - i.bandwidth()).toFixed(4)) break;
            u.push({color: t, offset: e, opacity: 1}), c = e, l++
          }
        }
        if (u[u.length - 1].offset < 100 && u.push({
          color: r,
          offset: a,
          opacity: 1
        }), a === s) u[0].offset = 0, u[1].offset = 100; else if (100 !== u[u.length - 1].offset) for (const h of u) h.offset = (h.offset - s) / (a - s) * 100;
        return u
      }
    }

    let pb = (() => {
      let t = class {
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [[ub]]
      }), t
    })(), gb = (() => {
      let t = class {
        constructor(t) {
          this.roundEdges = !0, this.gradient = !1, this.offset = 0, this.isActive = !1, this.animations = !0, this.noBarWhenZero = !0, this.select = new dl, this.activate = new dl, this.deactivate = new dl, this.hasGradient = !1, this.hideBar = !1, this.element = t.nativeElement
        }

        ngOnChanges(t) {
          t.roundEdges && this.loadAnimation(), this.update()
        }

        update() {
          this.gradientId = "grad" + eb().toString(), this.gradientFill = `url(#${this.gradientId})`, this.gradient || this.stops ? (this.gradientStops = this.getGradient(), this.hasGradient = !0) : this.hasGradient = !1, this.updatePathEl(), this.checkToHideBar()
        }

        loadAnimation() {
          this.path = this.getStartingPath(), setTimeout(this.update.bind(this), 100)
        }

        updatePathEl() {
          const t = Ep(this.element).select(".bar"), e = this.getPath();
          this.animations ? t.transition().duration(500).attr("d", e) : t.attr("d", e)
        }

        getGradient() {
          return this.stops ? this.stops : [{
            offset: 0,
            color: this.fill,
            opacity: this.getStartOpacity()
          }, {offset: 100, color: this.fill, opacity: 1}]
        }

        getStartingPath() {
          if (!this.animations) return this.getPath();
          let t, e = this.getRadius();
          return this.roundEdges ? "vertical" === this.orientation ? (e = Math.min(this.height, e), t = zw(this.x, this.y + this.height, this.width, 1, 0, this.edges)) : "horizontal" === this.orientation && (e = Math.min(this.width, e), t = zw(this.x, this.y, 1, this.height, 0, this.edges)) : "vertical" === this.orientation ? t = zw(this.x, this.y + this.height, this.width, 1, 0, this.edges) : "horizontal" === this.orientation && (t = zw(this.x, this.y, 1, this.height, 0, this.edges)), t
        }

        getPath() {
          let t, e = this.getRadius();
          return this.roundEdges ? "vertical" === this.orientation ? (e = Math.min(this.height, e), t = zw(this.x, this.y, this.width, this.height, e, this.edges)) : "horizontal" === this.orientation && (e = Math.min(this.width, e), t = zw(this.x, this.y, this.width, this.height, e, this.edges)) : t = zw(this.x, this.y, this.width, this.height, e, this.edges), t
        }

        getRadius() {
          let t = 0;
          return this.roundEdges && this.height > 5 && this.width > 5 && (t = Math.floor(Math.min(5, this.height / 2, this.width / 2))), t
        }

        getStartOpacity() {
          return this.roundEdges ? .2 : .5
        }

        get edges() {
          let t = [!1, !1, !1, !1];
          return this.roundEdges && ("vertical" === this.orientation ? t = this.data.value > 0 ? [!0, !0, !1, !1] : [!1, !1, !0, !0] : "horizontal" === this.orientation && (t = this.data.value > 0 ? [!1, !0, !1, !0] : [!0, !1, !0, !1])), t
        }

        onMouseEnter() {
          this.activate.emit(this.data)
        }

        onMouseLeave() {
          this.deactivate.emit(this.data)
        }

        checkToHideBar() {
          this.hideBar = this.noBarWhenZero && ("vertical" === this.orientation && 0 === this.height || "horizontal" === this.orientation && 0 === this.width)
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)(fo(va))
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["g", "ngx-charts-bar", ""]],
        hostBindings: function (t, e) {
          1 & t && So("mouseenter", (function () {
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
        features: [ra],
        attrs: lw,
        decls: 2,
        vars: 8,
        consts: [[4, "ngIf"], ["stroke", "none", "role", "img", "tabIndex", "-1", 1, "bar", 3, "click"], ["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops"]],
        template: function (t, e) {
          1 & t && (ho(0, cw, 2, 3, "defs", 0), mn(), vo(1, "path", 1), So("click", (function () {
            return e.select.emit(e.data)
          })), _o()), 2 & t && (mo("ngIf", e.hasGradient), cr(1), Fo("active", e.isActive)("hidden", e.hideBar), co("d", e.path)("aria-label", e.ariaLabel)("fill", e.hasGradient ? e.gradientFill : e.fill))
        },
        directives: [tu, sb],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), mb = (() => {
      let t = class extends Nw {
        constructor() {
          super(...arguments), this.legend = !1, this.legendTitle = "Legend", this.legendPosition = "right", this.tooltipDisabled = !1, this.showGridLines = !0, this.activeEntries = [], this.trimXAxisTicks = !0, this.trimYAxisTicks = !0, this.rotateXAxisTicks = !0, this.maxXAxisTickLength = 16, this.maxYAxisTickLength = 16, this.barPadding = 8, this.roundDomains = !1, this.roundEdges = !0, this.showDataLabel = !1, this.noBarWhenZero = !0, this.activate = new dl, this.deactivate = new dl, this.margin = [10, 20, 10, 20], this.xAxisHeight = 0, this.yAxisWidth = 0, this.dataLabelMaxHeight = {
            negative: 0,
            positive: 0
          }
        }

        update() {
          super.update(), this.showDataLabel || (this.dataLabelMaxHeight = {
            negative: 0,
            positive: 0
          }), this.margin = [10 + this.dataLabelMaxHeight.positive, 20, 10 + this.dataLabelMaxHeight.negative, 20], this.dims = hb({
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
          }), this.formatDates(), this.showDataLabel && (this.dims.height -= this.dataLabelMaxHeight.negative), this.xScale = this.getXScale(), this.yScale = this.getYScale(), this.setColors(), this.legendOptions = this.getLegendOptions(), this.transform = `translate(${this.dims.xOffset} , ${this.margin[0] + this.dataLabelMaxHeight.negative})`
        }

        getXScale() {
          this.xDomain = this.getXDomain();
          const t = this.xDomain.length / (this.dims.width / this.barPadding + 1);
          return Ev().range([0, this.dims.width]).paddingInner(t).domain(this.xDomain)
        }

        getYScale() {
          this.yDomain = this.getYDomain();
          const t = Sv().range([this.dims.height, 0]).domain(this.yDomain);
          return this.roundDomains ? t.nice() : t
        }

        getXDomain() {
          return this.results.map(t => t.label)
        }

        getYDomain() {
          const t = this.results.map(t => t.value);
          let e = this.yScaleMin ? Math.min(this.yScaleMin, ...t) : Math.min(0, ...t);
          this.yAxisTicks && !this.yAxisTicks.some(isNaN) && (e = Math.min(e, ...this.yAxisTicks));
          let n = this.yScaleMax ? Math.max(this.yScaleMax, ...t) : Math.max(0, ...t);
          return this.yAxisTicks && !this.yAxisTicks.some(isNaN) && (n = Math.max(n, ...this.yAxisTicks)), [e, n]
        }

        onClick(t) {
          this.select.emit(t)
        }

        setColors() {
          let t;
          t = "ordinal" === this.schemeType ? this.xDomain : this.yDomain, this.colors = new fb(this.scheme, this.schemeType, t, this.customColors)
        }

        getLegendOptions() {
          const t = {
            scaleType: this.schemeType,
            colors: void 0,
            domain: [],
            title: void 0,
            position: this.legendPosition
          };
          return "ordinal" === t.scaleType ? (t.domain = this.xDomain, t.colors = this.colors, t.title = this.legendTitle) : (t.domain = this.yDomain, t.colors = this.colors.scale), t
        }

        updateYAxisWidth({width: t}) {
          this.yAxisWidth = t, this.update()
        }

        updateXAxisHeight({height: t}) {
          this.xAxisHeight = t, this.update()
        }

        onDataLabelMaxHeightChanged(t) {
          t.size.negative ? this.dataLabelMaxHeight.negative = Math.max(this.dataLabelMaxHeight.negative, t.size.height) : this.dataLabelMaxHeight.positive = Math.max(this.dataLabelMaxHeight.positive, t.size.height), t.index === this.results.length - 1 && setTimeout(() => this.update())
        }

        onActivate(t, e = !1) {
          t = this.results.find(n => e ? n.label === t.name : n.name === t.name), this.activeEntries.findIndex(e => e.name === t.name && e.value === t.value && e.series === t.series) > -1 || (this.activeEntries = [t, ...this.activeEntries], this.activate.emit({
            value: t,
            entries: this.activeEntries
          }))
        }

        onDeactivate(t, e = !1) {
          t = this.results.find(n => e ? n.label === t.name : n.name === t.name);
          const n = this.activeEntries.findIndex(e => e.name === t.name && e.value === t.value && e.series === t.series);
          this.activeEntries.splice(n, 1), this.activeEntries = [...this.activeEntries], this.deactivate.emit({
            value: t,
            entries: this.activeEntries
          })
        }
      };
      return t.\u0275fac = function (e) {
        return Fb(e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["ngx-charts-bar-vertical"]],
        contentQueries: function (t, e, n) {
          var i;
          1 & t && Cl(n, ow, !0), 2 & t && Sl(i = kl()) && (e.tooltipTemplate = i.first)
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
        features: [Ko],
        decls: 5,
        vars: 25,
        consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-series-vertical", "", 3, "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "activeEntries", "roundEdges", "animations", "noBarWhenZero", "activate", "deactivate", "select", "dataLabelHeightChanged"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"]],
        template: function (t, e) {
          1 & t && (vo(0, "ngx-charts-chart", 0), So("legendLabelClick", (function (t) {
            return e.onClick(t)
          }))("legendLabelActivate", (function (t) {
            return e.onActivate(t, !0)
          }))("legendLabelDeactivate", (function (t) {
            return e.onDeactivate(t, !0)
          })), mn(), vo(1, "g", 1), ho(2, uw, 1, 10, "g", 2), ho(3, hw, 1, 9, "g", 3), vo(4, "g", 4), So("activate", (function (t) {
            return e.onActivate(t)
          }))("deactivate", (function (t) {
            return e.onDeactivate(t)
          }))("select", (function (t) {
            return e.onClick(t)
          }))("dataLabelHeightChanged", (function (t) {
            return e.onDataLabelMaxHeightChanged(t)
          })), _o(), _o(), _o()), 2 & t && (mo("view", ul(22, aw, e.width, e.height))("showLegend", e.legend)("legendOptions", e.legendOptions)("activeEntries", e.activeEntries)("animations", e.animations), cr(1), co("transform", e.transform), cr(1), mo("ngIf", e.xAxis), cr(1), mo("ngIf", e.yAxis), cr(1), mo("xScale", e.xScale)("yScale", e.yScale)("colors", e.colors)("series", e.results)("dims", e.dims)("gradient", e.gradient)("tooltipDisabled", e.tooltipDisabled)("tooltipTemplate", e.tooltipTemplate)("showDataLabel", e.showDataLabel)("dataLabelFormatting", e.dataLabelFormatting)("activeEntries", e.activeEntries)("roundEdges", e.roundEdges)("animations", e.animations)("noBarWhenZero", e.noBarWhenZero))
        },
        directives: function () {
          return [Fw, tu, _b, Vw, qw]
        },
        styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:0}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:0}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), yb = (() => {
      let t = class extends Nw {
        constructor() {
          super(...arguments), this.legend = !1, this.legendTitle = "Legend", this.legendPosition = "right", this.tooltipDisabled = !1, this.scaleType = "ordinal", this.showGridLines = !0, this.activeEntries = [], this.trimXAxisTicks = !0, this.trimYAxisTicks = !0, this.rotateXAxisTicks = !0, this.maxXAxisTickLength = 16, this.maxYAxisTickLength = 16, this.groupPadding = 16, this.barPadding = 8, this.roundDomains = !1, this.roundEdges = !0, this.showDataLabel = !1, this.noBarWhenZero = !0, this.activate = new dl, this.deactivate = new dl, this.margin = [10, 20, 10, 20], this.xAxisHeight = 0, this.yAxisWidth = 0, this.dataLabelMaxHeight = {
            negative: 0,
            positive: 0
          }
        }

        update() {
          super.update(), this.showDataLabel || (this.dataLabelMaxHeight = {
            negative: 0,
            positive: 0
          }), this.margin = [10 + this.dataLabelMaxHeight.positive, 20, 10 + this.dataLabelMaxHeight.negative, 20], this.dims = hb({
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
          }), this.showDataLabel && (this.dims.height -= this.dataLabelMaxHeight.negative), this.formatDates(), this.groupDomain = this.getGroupDomain(), this.innerDomain = this.getInnerDomain(), this.valuesDomain = this.getValueDomain(), this.groupScale = this.getGroupScale(), this.innerScale = this.getInnerScale(), this.valueScale = this.getValueScale(), this.setColors(), this.legendOptions = this.getLegendOptions(), this.transform = `translate(${this.dims.xOffset} , ${this.margin[0] + this.dataLabelMaxHeight.negative})`
        }

        onDataLabelMaxHeightChanged(t, e) {
          t.size.negative ? this.dataLabelMaxHeight.negative = Math.max(this.dataLabelMaxHeight.negative, t.size.height) : this.dataLabelMaxHeight.positive = Math.max(this.dataLabelMaxHeight.positive, t.size.height), e === this.results.length - 1 && setTimeout(() => this.update())
        }

        getGroupScale() {
          const t = this.groupDomain.length / (this.dims.height / this.groupPadding + 1);
          return Ev().rangeRound([0, this.dims.width]).paddingInner(t).paddingOuter(t / 2).domain(this.groupDomain)
        }

        getInnerScale() {
          const t = this.groupScale.bandwidth(), e = this.innerDomain.length / (t / this.barPadding + 1);
          return Ev().rangeRound([0, t]).paddingInner(e).domain(this.innerDomain)
        }

        getValueScale() {
          const t = Sv().range([this.dims.height, 0]).domain(this.valuesDomain);
          return this.roundDomains ? t.nice() : t
        }

        getGroupDomain() {
          const t = [];
          for (const e of this.results) t.includes(e.label) || t.push(e.label);
          return t
        }

        getInnerDomain() {
          const t = [];
          for (const e of this.results) for (const n of e.series) t.includes(n.label) || t.push(n.label);
          return t
        }

        getValueDomain() {
          const t = [];
          for (const e of this.results) for (const n of e.series) t.includes(n.value) || t.push(n.value);
          return [Math.min(0, ...t), this.yScaleMax ? Math.max(this.yScaleMax, ...t) : Math.max(0, ...t)]
        }

        groupTransform(t) {
          return `translate(${this.groupScale(t.label)}, 0)`
        }

        onClick(t, e) {
          e && (t.series = e.name), this.select.emit(t)
        }

        trackBy(t, e) {
          return e.name
        }

        setColors() {
          let t;
          t = "ordinal" === this.schemeType ? this.innerDomain : this.valuesDomain, this.colors = new fb(this.scheme, this.schemeType, t, this.customColors)
        }

        getLegendOptions() {
          const t = {
            scaleType: this.schemeType,
            colors: void 0,
            domain: [],
            title: void 0,
            position: this.legendPosition
          };
          return "ordinal" === t.scaleType ? (t.domain = this.innerDomain, t.colors = this.colors, t.title = this.legendTitle) : (t.domain = this.valuesDomain, t.colors = this.colors.scale), t
        }

        updateYAxisWidth({width: t}) {
          this.yAxisWidth = t, this.update()
        }

        updateXAxisHeight({height: t}) {
          this.xAxisHeight = t, this.update()
        }

        onActivate(t, e, n = !1) {
          const i = Object.assign({}, t);
          e && (i.series = e.name);
          const r = this.results.map(t => t.series).flat().filter(t => n ? t.label === i.name : t.name === i.name && t.series === i.series);
          this.activeEntries = [...r], this.activate.emit({value: i, entries: this.activeEntries})
        }

        onDeactivate(t, e, n = !1) {
          const i = Object.assign({}, t);
          e && (i.series = e.name), this.activeEntries = this.activeEntries.filter(t => n ? t.label !== i.name : !(t.name === i.name && t.series === i.series)), this.deactivate.emit({
            value: i,
            entries: this.activeEntries
          })
        }
      };
      return t.\u0275fac = function (e) {
        return Ib(e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["ngx-charts-bar-vertical-2d"]],
        contentQueries: function (t, e, n) {
          var i;
          1 & t && Cl(n, ow, !0), 2 & t && Sl(i = kl()) && (e.tooltipTemplate = i.first)
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
        features: [Ko],
        decls: 6,
        vars: 17,
        consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick"], [1, "bar-chart", "chart"], ["ngx-charts-grid-panel-series", "", "orient", "vertical", 3, "xScale", "yScale", "data", "dims"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-series-vertical", "", 3, "activeEntries", "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "seriesName", "roundEdges", "animations", "noBarWhenZero", "select", "activate", "deactivate", "dataLabelHeightChanged", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-series-vertical", "", 3, "activeEntries", "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "seriesName", "roundEdges", "animations", "noBarWhenZero", "select", "activate", "deactivate", "dataLabelHeightChanged"]],
        template: function (t, e) {
          1 & t && (vo(0, "ngx-charts-chart", 0), So("legendLabelActivate", (function (t) {
            return e.onActivate(t, void 0, !0)
          }))("legendLabelDeactivate", (function (t) {
            return e.onDeactivate(t, void 0, !0)
          }))("legendLabelClick", (function (t) {
            return e.onClick(t)
          })), mn(), vo(1, "g", 1), wo(2, "g", 2), ho(3, dw, 1, 10, "g", 3), ho(4, fw, 1, 9, "g", 4), ho(5, pw, 1, 17, "g", 5), _o(), _o()), 2 & t && (mo("view", ul(14, aw, e.width, e.height))("showLegend", e.legend)("legendOptions", e.legendOptions)("activeEntries", e.activeEntries)("animations", e.animations), cr(1), co("transform", e.transform), cr(1), mo("xScale", e.groupScale)("yScale", e.valueScale)("data", e.results)("dims", e.dims), cr(1), mo("ngIf", e.xAxis), cr(1), mo("ngIf", e.yAxis), cr(1), mo("ngForOf", e.results)("ngForTrackBy", e.trackBy))
        },
        directives: function () {
          return [Fw, rb, tu, Kc, Vw, qw, _b]
        },
        styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:0}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:0}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"],
        encapsulation: 2,
        data: {
          animation: [ju("animationState", [Vu(":leave", [$u({opacity: 1, transform: "*"}), Hu(500, $u({
            opacity: 0,
            transform: "scale(0)"
          }))])])]
        },
        changeDetection: 0
      }), t
    })();
    var vb = function (t) {
      return t.positive = "positive", t.negative = "negative", t
    }({});
    let _b = (() => {
      let t = class {
        constructor() {
          this.type = "standard", this.tooltipDisabled = !1, this.animations = !0, this.showDataLabel = !1, this.noBarWhenZero = !0, this.select = new dl, this.activate = new dl, this.deactivate = new dl, this.dataLabelHeightChanged = new dl, this.barsForDataLabels = []
        }

        ngOnChanges(t) {
          this.update()
        }

        update() {
          let t;
          this.updateTooltipSettings(), this.series.length && (t = this.xScale.bandwidth()), t = Math.round(t);
          const e = Math.max(this.yScale.domain()[0], 0), n = {[vb.positive]: 0, [vb.negative]: 0};
          let i, r = vb.positive;
          "normalized" === this.type && (i = this.series.map(t => t.value).reduce((t, e) => t + e, 0)), this.bars = this.series.map((s, o) => {
            let a = s.value;
            const l = this.getLabel(s), c = Kw(l);
            r = a > 0 ? vb.positive : vb.negative;
            const u = {
              value: a,
              label: l,
              roundEdges: this.roundEdges,
              data: s,
              width: t,
              formattedLabel: c,
              height: 0,
              x: 0,
              y: 0
            };
            if ("standard" === this.type) u.height = Math.abs(this.yScale(a) - this.yScale(e)), u.x = this.xScale(l), u.y = this.yScale(a < 0 ? 0 : a); else if ("stacked" === this.type) {
              const t = n[r], e = t + a;
              n[r] += a, u.height = this.yScale(t) - this.yScale(e), u.x = 0, u.y = this.yScale(e), u.offset0 = t, u.offset1 = e
            } else if ("normalized" === this.type) {
              let t = n[r], e = t + a;
              n[r] += a, i > 0 ? (t = 100 * t / i, e = 100 * e / i) : (t = 0, e = 0), u.height = this.yScale(t) - this.yScale(e), u.x = 0, u.y = this.yScale(e), u.offset0 = t, u.offset1 = e, a = (e - t).toFixed(2) + "%"
            }
            "ordinal" === this.colors.scaleType ? u.color = this.colors.getColor(l) : "standard" === this.type ? (u.color = this.colors.getColor(a), u.gradientStops = this.colors.getLinearGradientStops(a)) : (u.color = this.colors.getColor(u.offset1), u.gradientStops = this.colors.getLinearGradientStops(u.offset1, u.offset0));
            let h = c;
            return u.ariaLabel = c + " " + a.toLocaleString(), this.seriesName && (h = `${this.seriesName} \u2022 ${c}`, u.data.series = this.seriesName, u.ariaLabel = this.seriesName + " " + u.ariaLabel), u.tooltipText = this.tooltipDisabled ? void 0 : `\n        <span class="tooltip-label">${Jw(h)}</span>\n        <span class="tooltip-val">${a.toLocaleString()}</span>\n      `, u
          }), this.updateDataLabels()
        }

        updateDataLabels() {
          if ("stacked" === this.type) {
            this.barsForDataLabels = [];
            const t = {};
            t.series = this.seriesName;
            const e = this.series.map(t => t.value).reduce((t, e) => e > 0 ? t + e : t, 0),
              n = this.series.map(t => t.value).reduce((t, e) => e < 0 ? t + e : t, 0);
            t.total = e + n, t.x = 0, t.y = 0, t.height = this.yScale(t.total > 0 ? e : n), t.width = this.xScale.bandwidth(), this.barsForDataLabels.push(t)
          } else this.barsForDataLabels = this.series.map(t => {
            const e = {};
            return e.series = this.seriesName ? this.seriesName : t.label, e.total = t.value, e.x = this.xScale(t.label), e.y = this.yScale(0), e.height = this.yScale(e.total) - this.yScale(0), e.width = this.xScale.bandwidth(), e
          })
        }

        updateTooltipSettings() {
          this.tooltipPlacement = this.tooltipDisabled ? void 0 : "top", this.tooltipType = this.tooltipDisabled ? void 0 : "tooltip"
        }

        isActive(t) {
          return !!this.activeEntries && void 0 !== this.activeEntries.find(e => t.name === e.name && t.series === e.series)
        }

        onClick(t) {
          this.select.emit(t)
        }

        getLabel(t) {
          return t.label ? t.label : t.name
        }

        trackBy(t, e) {
          return e.label
        }

        trackDataLabelBy(t, e) {
          return t + "#" + e.series + "#" + e.total
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
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
        features: [ra],
        attrs: gw,
        decls: 2,
        vars: 3,
        consts: [["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "ariaLabel", "isActive", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero", "animations", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "ariaLabel", "isActive", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero", "animations", "select", "activate", "deactivate"], ["ngx-charts-bar-label", "", 3, "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation", "dimensionsChanged", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-bar-label", "", 3, "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation", "dimensionsChanged"]],
        template: function (t, e) {
          1 & t && (ho(0, mw, 1, 22, "g", 0), ho(1, vw, 2, 2, "g", 1)), 2 & t && (mo("ngForOf", e.bars)("ngForTrackBy", e.trackBy), cr(1), mo("ngIf", e.showDataLabel))
        },
        directives: function () {
          return [Kc, tu, gb, Zw, wb]
        },
        encapsulation: 2,
        data: {animation: [ju("animationState", [Vu(":leave", [$u({opacity: 1}), Hu(500, $u({opacity: 0}))])])]},
        changeDetection: 0
      }), t
    })(), wb = (() => {
      let t = class {
        constructor(t) {
          this.dimensionsChanged = new dl, this.horizontalPadding = 2, this.verticalPadding = 5, this.element = t.nativeElement
        }

        ngOnChanges(t) {
          this.update()
        }

        getSize() {
          return {
            height: this.element.getBoundingClientRect().height,
            width: this.element.getBoundingClientRect().width,
            negative: this.value < 0
          }
        }

        ngAfterViewInit() {
          this.dimensionsChanged.emit(this.getSize())
        }

        update() {
          this.formatedValue = this.valueFormatting ? this.valueFormatting(this.value) : Kw(this.value), "horizontal" === this.orientation ? (this.x = this.barX + this.barWidth, this.value < 0 ? (this.x = this.x - this.horizontalPadding, this.textAnchor = "end") : (this.x = this.x + this.horizontalPadding, this.textAnchor = "start"), this.y = this.barY + this.barHeight / 2) : (this.x = this.barX + this.barWidth / 2, this.y = this.barY + this.barHeight, this.value < 0 ? (this.y = this.y + this.verticalPadding, this.textAnchor = "end") : (this.y = this.y - this.verticalPadding, this.textAnchor = "start"), this.transform = `rotate(-45, ${this.x} , ${this.y})`)
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)(fo(va))
      }, t.\u0275cmp = he({
        type: t,
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
        features: [ra],
        attrs: _w,
        decls: 2,
        vars: 5,
        consts: [["alignment-baseline", "middle", 1, "textDataLabel"]],
        template: function (t, e) {
          1 & t && (mn(), vo(0, "text", 0), Go(1), _o()), 2 & t && (co("text-anchor", e.textAnchor)("transform", e.transform)("x", e.x)("y", e.y), cr(1), Yo(" ", e.formatedValue, " "))
        },
        styles: [".textDataLabel[_ngcontent-%COMP%]{font-size:11px}"],
        changeDetection: 0
      }), t
    })(), bb = (() => {
      let t = class {
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [[ub]]
      }), t
    })(), xb = (() => {
      let t = class {
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [[ub]]
      }), t
    })(), Sb = (() => {
      let t = class {
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [[ub]]
      }), t
    })(), Tb = (() => {
      let t = class {
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [[ub]]
      }), t
    })();
    Math;
    let Cb = (() => {
      let t = class {
        constructor() {
          this.animations = !0, this.labelTrim = !0, this.labelTrimSize = 10, this.isIE = /(edge|msie|trident)/i.test(navigator.userAgent), this.trimLabel = Hw
        }

        ngOnChanges(t) {
          this.update()
        }

        update() {
          let t = this.radius;
          this.explodeSlices && (t = this.radius * this.value / this.max);
          const e = u_().innerRadius(t).outerRadius(t).centroid(this.data);
          let n = this.data.pos[1] / e[1];
          0 !== this.data.pos[1] && 0 !== e[1] || (n = 1), this.line = `M${e}L${[n * e[0], n * e[1]]}L${this.data.pos}`
        }

        get textX() {
          return this.data.pos[0]
        }

        get textY() {
          return this.data.pos[1]
        }

        get styleTransform() {
          return this.isIE ? null : `translate3d(${this.textX}px,${this.textY}px, 0)`
        }

        get attrTransform() {
          return this.isIE ? `translate(${this.textX},${this.textY})` : null
        }

        get textTransition() {
          return this.isIE || !this.animations ? null : "transform 0.75s"
        }

        textAnchor() {
          return this.midAngle(this.data) < Math.PI ? "start" : "end"
        }

        midAngle(t) {
          return t.startAngle + (t.endAngle - t.startAngle) / 2
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
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
        features: [ra],
        attrs: ww,
        decls: 6,
        vars: 17,
        consts: [["dy", ".35em", 1, "pie-label"], ["fill", "none", 1, "pie-label-line", "line"]],
        template: function (t, e) {
          1 & t && (vo(0, "title"), Go(1), _o(), mn(), vo(2, "g"), vo(3, "text", 0), Go(4), _o(), _o(), wo(5, "path", 1)), 2 & t && (cr(1), Qo(e.label), cr(1), Ro("transform", e.styleTransform)("transition", e.textTransition), co("transform", e.attrTransform), cr(1), Ro("text-anchor", e.textAnchor())("shape-rendering", "crispEdges"), Fo("animation", e.animations), cr(1), Yo(" ", e.labelTrim ? e.trimLabel(e.label, e.labelTrimSize) : e.label, " "), cr(1), Fo("animation", e.animations), co("d", e.line)("stroke", e.color))
        },
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), kb = (() => {
      let t = class {
        constructor(t) {
          this.startAngle = 0, this.endAngle = 2 * Math.PI, this.cornerRadius = 0, this.explodeSlices = !1, this.gradient = !1, this.animate = !0, this.pointerEvents = !0, this.isActive = !1, this.select = new dl, this.activate = new dl, this.deactivate = new dl, this.dblclick = new dl, this.initialized = !1, this.element = t.nativeElement
        }

        ngOnChanges(t) {
          this.update()
        }

        getGradient() {
          return this.gradient ? this.gradientFill : this.fill
        }

        getPointerEvents() {
          return this.pointerEvents ? "auto" : "none"
        }

        update() {
          const t = this.calculateArc();
          this.startOpacity = .5, this.radialGradientId = "linearGrad" + eb().toString(), this.gradientFill = `url(#${this.radialGradientId})`, this.animate ? this.initialized ? this.updateAnimation() : (this.loadAnimation(), this.initialized = !0) : this.path = t.startAngle(this.startAngle).endAngle(this.endAngle)()
        }

        calculateArc() {
          let t = this.outerRadius;
          return this.explodeSlices && 0 === this.innerRadius && (t = this.outerRadius * this.value / this.max), u_().innerRadius(this.innerRadius).outerRadius(t).cornerRadius(this.cornerRadius)
        }

        loadAnimation() {
          const t = Ep(this.element).selectAll(".arc").data([{startAngle: this.startAngle, endAngle: this.endAngle}]),
            e = this.calculateArc();
          t.transition().attrTween("d", (function (t) {
            this._current = this._current || t;
            const n = Object.assign({}, t);
            n.endAngle = n.startAngle;
            const i = Cg(n, n);
            return this._current = i(0), function (t) {
              return e(i(t))
            }
          })).transition().duration(750).attrTween("d", (function (t) {
            this._current = this._current || t;
            const n = Cg(this._current, t);
            return this._current = n(0), function (t) {
              return e(n(t))
            }
          }))
        }

        updateAnimation() {
          const t = Ep(this.element).selectAll(".arc").data([{startAngle: this.startAngle, endAngle: this.endAngle}]),
            e = this.calculateArc();
          t.transition().duration(750).attrTween("d", (function (t) {
            this._current = this._current || t;
            const n = Cg(this._current, t);
            return this._current = n(0), function (t) {
              return e(n(t))
            }
          }))
        }

        onClick() {
          clearTimeout(this._timeout), this._timeout = setTimeout(() => this.select.emit(this.data), 200)
        }

        onDblClick(t) {
          t.preventDefault(), t.stopPropagation(), clearTimeout(this._timeout), this.dblclick.emit({
            data: this.data,
            nativeEvent: t
          })
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)(fo(va))
      }, t.\u0275cmp = he({
        type: t,
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
        features: [ra],
        attrs: bw,
        decls: 3,
        vars: 7,
        consts: [[1, "arc-group"], [4, "ngIf"], [1, "arc", 3, "click", "dblclick", "mouseenter", "mouseleave"], ["ngx-charts-svg-radial-gradient", "", "orientation", "vertical", 3, "color", "name", "startOpacity"]],
        template: function (t, e) {
          1 & t && (mn(), vo(0, "g", 0), ho(1, xw, 2, 3, "defs", 1), vo(2, "path", 2), So("click", (function () {
            return e.onClick()
          }))("dblclick", (function (t) {
            return e.onDblClick(t)
          }))("mouseenter", (function () {
            return e.activate.emit(e.data)
          }))("mouseleave", (function () {
            return e.deactivate.emit(e.data)
          })), _o(), _o()), 2 & t && (cr(1), mo("ngIf", e.gradient), cr(1), Ro("pointer-events", e.getPointerEvents()), Fo("active", e.isActive), co("d", e.path)("fill", e.getGradient()))
        },
        directives: [tu, ob],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), Eb = (() => {
      let t = class extends Nw {
        constructor() {
          super(...arguments), this.labels = !1, this.legend = !1, this.legendTitle = "Legend", this.legendPosition = "right", this.explodeSlices = !1, this.doughnut = !1, this.arcWidth = .25, this.activeEntries = [], this.tooltipDisabled = !1, this.trimLabels = !0, this.maxLabelLength = 10, this.dblclick = new dl, this.select = new dl, this.activate = new dl, this.deactivate = new dl
        }

        update() {
          super.update(), this.labels && this.hasNoOptionalMarginsSet() ? this.margins = [30, 80, 30, 80] : !this.labels && this.hasNoOptionalMarginsSet() && (this.margins = [20, 20, 20, 20]), this.dims = hb({
            width: this.width,
            height: this.height,
            margins: this.margins,
            showLegend: this.legend,
            legendPosition: this.legendPosition
          }), this.formatDates(), this.translation = `translate(${this.margins[3] + this.dims.width / 2}, ${this.margins[0] + this.dims.height / 2})`, this.outerRadius = Math.min(this.dims.width, this.dims.height), this.outerRadius /= this.labels ? 3 : 2, this.innerRadius = 0, this.doughnut && (this.innerRadius = this.outerRadius * (1 - this.arcWidth)), this.domain = this.getDomain(), this.data = this.results.sort((t, e) => this.domain.indexOf(t.name) - this.domain.indexOf(e.name)), this.setColors(), this.legendOptions = this.getLegendOptions()
        }

        getDomain() {
          return this.results.map(t => t.label)
        }

        onClick(t) {
          this.select.emit(t)
        }

        setColors() {
          this.colors = new fb(this.scheme, "ordinal", this.domain, this.customColors)
        }

        getLegendOptions() {
          return {
            scaleType: "ordinal",
            domain: this.domain,
            colors: this.colors,
            title: this.legendTitle,
            position: this.legendPosition
          }
        }

        onActivate(t, e = !1) {
          t = this.results.find(n => e ? n.label === t.name : n.name === t.name), this.activeEntries.findIndex(e => e.name === t.name && e.value === t.value && e.series === t.series) > -1 || (this.activeEntries = [t, ...this.activeEntries], this.activate.emit({
            value: t,
            entries: this.activeEntries
          }))
        }

        onDeactivate(t, e = !1) {
          t = this.results.find(n => e ? n.label === t.name : n.name === t.name);
          const n = this.activeEntries.findIndex(e => e.name === t.name && e.value === t.value && e.series === t.series);
          this.activeEntries.splice(n, 1), this.activeEntries = [...this.activeEntries], this.deactivate.emit({
            value: t,
            entries: this.activeEntries
          })
        }

        hasNoOptionalMarginsSet() {
          return !this.margins || this.margins.length <= 0
        }
      };
      return t.\u0275fac = function (e) {
        return Nb(e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["ngx-charts-pie-chart"]],
        contentQueries: function (t, e, n) {
          var i;
          1 & t && Cl(n, ow, !0), 2 & t && Sl(i = kl()) && (e.tooltipTemplate = i.first)
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
        features: [Ko],
        decls: 3,
        vars: 24,
        consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick"], [1, "pie-chart", "chart"], ["ngx-charts-pie-series", "", 3, "colors", "series", "showLabels", "labelFormatting", "trimLabels", "maxLabelLength", "activeEntries", "innerRadius", "outerRadius", "explodeSlices", "gradient", "animations", "tooltipDisabled", "tooltipTemplate", "tooltipText", "dblclick", "select", "activate", "deactivate"]],
        template: function (t, e) {
          1 & t && (vo(0, "ngx-charts-chart", 0), So("legendLabelActivate", (function (t) {
            return e.onActivate(t, !0)
          }))("legendLabelDeactivate", (function (t) {
            return e.onDeactivate(t, !0)
          }))("legendLabelClick", (function (t) {
            return e.onClick(t)
          })), mn(), vo(1, "g", 1), vo(2, "g", 2), So("dblclick", (function (t) {
            return e.dblclick.emit(t)
          }))("select", (function (t) {
            return e.onClick(t)
          }))("activate", (function (t) {
            return e.onActivate(t)
          }))("deactivate", (function (t) {
            return e.onDeactivate(t)
          })), _o(), _o(), _o()), 2 & t && (mo("view", ul(21, aw, e.width, e.height))("showLegend", e.legend)("legendOptions", e.legendOptions)("activeEntries", e.activeEntries)("animations", e.animations), cr(1), co("transform", e.translation), cr(1), mo("colors", e.colors)("series", e.data)("showLabels", e.labels)("labelFormatting", e.labelFormatting)("trimLabels", e.trimLabels)("maxLabelLength", e.maxLabelLength)("activeEntries", e.activeEntries)("innerRadius", e.innerRadius)("outerRadius", e.outerRadius)("explodeSlices", e.explodeSlices)("gradient", e.gradient)("animations", e.animations)("tooltipDisabled", e.tooltipDisabled)("tooltipTemplate", e.tooltipTemplate)("tooltipText", e.tooltipText))
        },
        directives: function () {
          return [Fw, Ab]
        },
        styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:0}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:0}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".pie-label{font-size:11px}.pie-label.animation{-webkit-animation:750ms ease-in fadeIn;animation:750ms ease-in fadeIn}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.pie-label-line{stroke-dasharray:100%}.pie-label-line.animation{-webkit-animation:3s linear drawOut;animation:3s linear drawOut;transition:d 750ms}@-webkit-keyframes drawOut{from{stroke-dashoffset:100%}to{stroke-dashoffset:0}}@keyframes drawOut{from{stroke-dashoffset:100%}to{stroke-dashoffset:0}}"],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), Ab = (() => {
      let t = class {
        constructor() {
          this.series = [], this.innerRadius = 60, this.outerRadius = 80, this.trimLabels = !0, this.maxLabelLength = 10, this.tooltipDisabled = !1, this.animations = !0, this.select = new dl, this.activate = new dl, this.deactivate = new dl, this.dblclick = new dl
        }

        ngOnChanges(t) {
          this.update()
        }

        update() {
          const t = function () {
            var t = d_, e = h_, n = null, i = Hv(0), r = Hv(t_), s = Hv(0);

            function o(o) {
              var a, l, c, u, h, d = o.length, f = 0, p = new Array(d), g = new Array(d), m = +i.apply(this, arguments),
                y = Math.min(t_, Math.max(-t_, r.apply(this, arguments) - m)),
                v = Math.min(Math.abs(y) / d, s.apply(this, arguments)), _ = v * (y < 0 ? -1 : 1);
              for (a = 0; a < d; ++a) (h = g[p[a] = a] = +t(o[a], a, o)) > 0 && (f += h);
              for (null != e ? p.sort((function (t, n) {
                return e(g[t], g[n])
              })) : null != n && p.sort((function (t, e) {
                return n(o[t], o[e])
              })), a = 0, c = f ? (y - d * _) / f : 0; a < d; ++a, m = u) g[l = p[a]] = {
                data: o[l],
                index: a,
                value: h = g[l],
                startAngle: m,
                endAngle: u = m + (h > 0 ? h * c : 0) + _,
                padAngle: v
              };
              return g
            }

            return o.value = function (e) {
              return arguments.length ? (t = "function" == typeof e ? e : Hv(+e), o) : t
            }, o.sortValues = function (t) {
              return arguments.length ? (e = t, n = null, o) : e
            }, o.sort = function (t) {
              return arguments.length ? (n = t, e = null, o) : n
            }, o.startAngle = function (t) {
              return arguments.length ? (i = "function" == typeof t ? t : Hv(+t), o) : i
            }, o.endAngle = function (t) {
              return arguments.length ? (r = "function" == typeof t ? t : Hv(+t), o) : r
            }, o.padAngle = function (t) {
              return arguments.length ? (s = "function" == typeof t ? t : Hv(+t), o) : s
            }, o
          }().value(t => t.value).sort(null)(this.series);
          this.max = Av(t, t => t.value), this.data = this.calculateLabelPositions(t), this.tooltipText = this.tooltipText || this.defaultTooltipText
        }

        midAngle(t) {
          return t.startAngle + (t.endAngle - t.startAngle) / 2
        }

        outerArc() {
          return u_().innerRadius(1.5 * this.outerRadius).outerRadius(1.5 * this.outerRadius)
        }

        calculateLabelPositions(t) {
          const e = t;
          e.forEach(t => {
            t.pos = this.outerArc().centroid(t), t.pos[0] = 1.5 * this.outerRadius * (this.midAngle(t) < Math.PI ? 1 : -1)
          });
          for (let n = 0; n < e.length - 1; n++) {
            const t = e[n];
            if (this.labelVisible(t)) for (let i = n + 1; i < e.length; i++) {
              const n = e[i];
              if (this.labelVisible(n) && n.pos[0] * t.pos[0] > 0) {
                const e = 10 - Math.abs(n.pos[1] - t.pos[1]);
                e > 0 && (n.pos[1] += Math.sign(n.pos[0]) * e)
              }
            }
          }
          return e
        }

        labelVisible(t) {
          return this.showLabels && t.endAngle - t.startAngle > Math.PI / 30
        }

        getTooltipTitle(t) {
          return this.tooltipTemplate ? void 0 : this.tooltipText(t)
        }

        labelText(t) {
          return this.labelFormatting ? this.labelFormatting(t.data.name) : this.label(t)
        }

        label(t) {
          return Kw(t.data.name)
        }

        defaultTooltipText(t) {
          const e = this.label(t), n = Kw(t.data.value);
          return `\n      <span class="tooltip-label">${Jw(e)}</span>\n      <span class="tooltip-val">${n}</span>\n    `
        }

        color(t) {
          return this.colors.getColor(this.label(t))
        }

        trackBy(t, e) {
          return e.data.name
        }

        onClick(t) {
          this.select.emit(t)
        }

        isActive(t) {
          return !!this.activeEntries && void 0 !== this.activeEntries.find(e => t.name === e.name && t.series === e.series)
        }
      };
      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
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
        features: [ra],
        attrs: Sw,
        decls: 1,
        vars: 2,
        consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-pie-label", "", 3, "data", "radius", "color", "label", "labelTrim", "labelTrimSize", "max", "value", "explodeSlices", "animations", 4, "ngIf"], ["ngx-charts-pie-arc", "", "ngx-tooltip", "", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "fill", "value", "gradient", "data", "max", "explodeSlices", "isActive", "animate", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate", "dblclick"], ["ngx-charts-pie-label", "", 3, "data", "radius", "color", "label", "labelTrim", "labelTrimSize", "max", "value", "explodeSlices", "animations"]],
        template: function (t, e) {
          1 & t && ho(0, Cw, 3, 19, "g", 0), 2 & t && mo("ngForOf", e.data)("ngForTrackBy", e.trackBy)
        },
        directives: [Kc, tu, kb, Zw, Cb],
        encapsulation: 2,
        changeDetection: 0
      }), t
    })(), Ob = (() => {
      let t = class {
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [[ub]]
      }), t
    })(), Lb = (() => {
      let t = class {
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [[ub, Ob, Tb]]
      }), t
    })(), Db = (() => {
      let t = class {
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [[ub]]
      }), t
    })(), Mb = (() => {
      let t = class {
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [[ub]]
      }), t
    })(), Pb = (() => {
      let t = class {
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [[ub, Ob, bb]]
      }), t
    })(), Rb = (() => {
      let t = class {
        constructor() {
          "undefined" != typeof SVGElement && void 0 === SVGElement.prototype.contains && (SVGElement.prototype.contains = HTMLDivElement.prototype.contains)
        }
      };
      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [ub, pb, bb, xb, Sb, Tb, Lb, Db, Ob, Mb, Pb]
      }), t
    })();
    const Fb = ei(mb), Ib = ei(yb), Nb = ei(Eb);

    function jb(...t) {
      let e = t[t.length - 1];
      return E(e) ? (t.pop(), U(t, e)) : W(t)
    }

    class Hb extends C {
      constructor(t) {
        super(), this._value = t
      }

      get value() {
        return this.getValue()
      }

      _subscribe(t) {
        const e = super._subscribe(t);
        return e && !e.closed && t.next(this._value), e
      }

      getValue() {
        if (this.hasError) throw this.thrownError;
        if (this.closed) throw new x;
        return this._value
      }

      next(t) {
        super.next(this._value = t)
      }
    }

    const Ub = (() => {
      function t() {
        return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
      }

      return t.prototype = Object.create(Error.prototype), t
    })(), $b = {};

    class Vb {
      constructor(t) {
        this.resultSelector = t
      }

      call(t, e) {
        return e.subscribe(new zb(t, this.resultSelector))
      }
    }

    class zb extends I {
      constructor(t, e) {
        super(t), this.resultSelector = e, this.active = 0, this.values = [], this.observables = []
      }

      _next(t) {
        this.values.push($b), this.observables.push(t)
      }

      _complete() {
        const t = this.observables, e = t.length;
        if (0 === e) this.destination.complete(); else {
          this.active = e, this.toRespond = e;
          for (let n = 0; n < e; n++) {
            const e = t[n];
            this.add(F(this, e, e, n))
          }
        }
      }

      notifyComplete(t) {
        0 == (this.active -= 1) && this.destination.complete()
      }

      notifyNext(t, e, n, i, r) {
        const s = this.values, o = this.toRespond ? s[n] === $b ? --this.toRespond : this.toRespond : 0;
        s[n] = e, 0 === o && (this.resultSelector ? this._tryResultSelector(s) : this.destination.next(s.slice()))
      }

      _tryResultSelector(t) {
        let e;
        try {
          e = this.resultSelector.apply(this, t)
        } catch (n) {
          return void this.destination.error(n)
        }
        this.destination.next(e)
      }
    }

    const Bb = new w(t => t.complete());

    function qb(t) {
      return t ? function (t) {
        return new w(e => t.schedule(() => e.complete()))
      }(t) : Bb
    }

    function Wb(t) {
      return new w(e => {
        let n;
        try {
          n = t()
        } catch (i) {
          return void e.error(i)
        }
        return (n ? $(n) : qb()).subscribe(e)
      })
    }

    function Gb() {
      return q(1)
    }

    function Qb(t, e) {
      return function (n) {
        return n.lift(new Yb(t, e))
      }
    }

    class Yb {
      constructor(t, e) {
        this.predicate = t, this.thisArg = e
      }

      call(t, e) {
        return e.subscribe(new Zb(t, this.predicate, this.thisArg))
      }
    }

    class Zb extends p {
      constructor(t, e, n) {
        super(t), this.predicate = e, this.thisArg = n, this.count = 0
      }

      _next(t) {
        let e;
        try {
          e = this.predicate.call(this.thisArg, t, this.count++)
        } catch (n) {
          return void this.destination.error(n)
        }
        e && this.destination.next(t)
      }
    }

    const Xb = (() => {
      function t() {
        return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
      }

      return t.prototype = Object.create(Error.prototype), t
    })();

    function Kb(t) {
      return function (e) {
        return 0 === t ? qb() : e.lift(new Jb(t))
      }
    }

    class Jb {
      constructor(t) {
        if (this.total = t, this.total < 0) throw new Xb
      }

      call(t, e) {
        return e.subscribe(new tx(t, this.total))
      }
    }

    class tx extends p {
      constructor(t, e) {
        super(t), this.total = e, this.ring = new Array, this.count = 0
      }

      _next(t) {
        const e = this.ring, n = this.total, i = this.count++;
        e.length < n ? e.push(t) : e[i % n] = t
      }

      _complete() {
        const t = this.destination;
        let e = this.count;
        if (e > 0) {
          const n = this.count >= this.total ? this.total : this.count, i = this.ring;
          for (let r = 0; r < n; r++) {
            const r = e++ % n;
            t.next(i[r])
          }
        }
        t.complete()
      }
    }

    function ex(t = rx) {
      return e => e.lift(new nx(t))
    }

    class nx {
      constructor(t) {
        this.errorFactory = t
      }

      call(t, e) {
        return e.subscribe(new ix(t, this.errorFactory))
      }
    }

    class ix extends p {
      constructor(t, e) {
        super(t), this.errorFactory = e, this.hasValue = !1
      }

      _next(t) {
        this.hasValue = !0, this.destination.next(t)
      }

      _complete() {
        if (this.hasValue) return this.destination.complete();
        {
          let e;
          try {
            e = this.errorFactory()
          } catch (t) {
            e = t
          }
          this.destination.error(e)
        }
      }
    }

    function rx() {
      return new Ub
    }

    function sx(t = null) {
      return e => e.lift(new ox(t))
    }

    class ox {
      constructor(t) {
        this.defaultValue = t
      }

      call(t, e) {
        return e.subscribe(new ax(t, this.defaultValue))
      }
    }

    class ax extends p {
      constructor(t, e) {
        super(t), this.defaultValue = e, this.isEmpty = !0
      }

      _next(t) {
        this.isEmpty = !1, this.destination.next(t)
      }

      _complete() {
        this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
      }
    }

    function lx(t, e) {
      const n = arguments.length >= 2;
      return i => i.pipe(t ? Qb((e, n) => t(e, n, i)) : y, Kb(1), n ? sx(e) : ex(() => new Ub))
    }

    function cx(t) {
      return function (e) {
        const n = new ux(t), i = e.lift(n);
        return n.caught = i
      }
    }

    class ux {
      constructor(t) {
        this.selector = t
      }

      call(t, e) {
        return e.subscribe(new hx(t, this.selector, this.caught))
      }
    }

    class hx extends I {
      constructor(t, e, n) {
        super(t), this.selector = e, this.caught = n
      }

      error(t) {
        if (!this.isStopped) {
          let n;
          try {
            n = this.selector(t, this.caught)
          } catch (e) {
            return void super.error(e)
          }
          this._unsubscribeAndRecycle();
          const i = new A(this, void 0, void 0);
          this.add(i);
          const r = F(this, n, void 0, void 0, i);
          r !== i && this.add(r)
        }
      }
    }

    function dx(t) {
      return e => 0 === t ? qb() : e.lift(new fx(t))
    }

    class fx {
      constructor(t) {
        if (this.total = t, this.total < 0) throw new Xb
      }

      call(t, e) {
        return e.subscribe(new px(t, this.total))
      }
    }

    class px extends p {
      constructor(t, e) {
        super(t), this.total = e, this.count = 0
      }

      _next(t) {
        const e = this.total, n = ++this.count;
        n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
      }
    }

    function gx(t, e) {
      const n = arguments.length >= 2;
      return i => i.pipe(t ? Qb((e, n) => t(e, n, i)) : y, dx(1), n ? sx(e) : ex(() => new Ub))
    }

    class mx {
      constructor(t, e, n) {
        this.predicate = t, this.thisArg = e, this.source = n
      }

      call(t, e) {
        return e.subscribe(new yx(t, this.predicate, this.thisArg, this.source))
      }
    }

    class yx extends p {
      constructor(t, e, n, i) {
        super(t), this.predicate = e, this.thisArg = n, this.source = i, this.index = 0, this.thisArg = n || this
      }

      notifyComplete(t) {
        this.destination.next(t), this.destination.complete()
      }

      _next(t) {
        let e = !1;
        try {
          e = this.predicate.call(this.thisArg, t, this.index++, this.source)
        } catch (n) {
          return void this.destination.error(n)
        }
        e || this.notifyComplete(!1)
      }

      _complete() {
        this.notifyComplete(!0)
      }
    }

    function vx(t, e) {
      return "function" == typeof e ? n => n.pipe(vx((n, i) => $(t(n, i)).pipe(N((t, r) => e(n, t, i, r))))) : e => e.lift(new _x(t))
    }

    class _x {
      constructor(t) {
        this.project = t
      }

      call(t, e) {
        return e.subscribe(new wx(t, this.project))
      }
    }

    class wx extends I {
      constructor(t, e) {
        super(t), this.project = e, this.index = 0
      }

      _next(t) {
        let e;
        const n = this.index++;
        try {
          e = this.project(t, n)
        } catch (i) {
          return void this.destination.error(i)
        }
        this._innerSub(e, t, n)
      }

      _innerSub(t, e, n) {
        const i = this.innerSubscription;
        i && i.unsubscribe();
        const r = new A(this, e, n), s = this.destination;
        s.add(r), this.innerSubscription = F(this, t, void 0, void 0, r), this.innerSubscription !== r && s.add(this.innerSubscription)
      }

      _complete() {
        const {innerSubscription: t} = this;
        t && !t.closed || super._complete(), this.unsubscribe()
      }

      _unsubscribe() {
        this.innerSubscription = null
      }

      notifyComplete(t) {
        this.destination.remove(t), this.innerSubscription = null, this.isStopped && super._complete()
      }

      notifyNext(t, e, n, i, r) {
        this.destination.next(e)
      }
    }

    function bx(...t) {
      return Gb()(jb(...t))
    }

    function xx(t, e) {
      let n = !1;
      return arguments.length >= 2 && (n = !0), function (i) {
        return i.lift(new Sx(t, e, n))
      }
    }

    class Sx {
      constructor(t, e, n = !1) {
        this.accumulator = t, this.seed = e, this.hasSeed = n
      }

      call(t, e) {
        return e.subscribe(new Tx(t, this.accumulator, this.seed, this.hasSeed))
      }
    }

    class Tx extends p {
      constructor(t, e, n, i) {
        super(t), this.accumulator = e, this._seed = n, this.hasSeed = i, this.index = 0
      }

      get seed() {
        return this._seed
      }

      set seed(t) {
        this.hasSeed = !0, this._seed = t
      }

      _next(t) {
        if (this.hasSeed) return this._tryNext(t);
        this.seed = t, this.destination.next(t)
      }

      _tryNext(t) {
        const e = this.index++;
        let n;
        try {
          n = this.accumulator(this.seed, t, e)
        } catch (i) {
          this.destination.error(i)
        }
        this.seed = n, this.destination.next(n)
      }
    }

    function Cx(t, e) {
      return V(t, e, 1)
    }

    function kx() {
    }

    function Ex(t, e, n) {
      return function (i) {
        return i.lift(new Ax(t, e, n))
      }
    }

    class Ax {
      constructor(t, e, n) {
        this.nextOrObserver = t, this.error = e, this.complete = n
      }

      call(t, e) {
        return e.subscribe(new Ox(t, this.nextOrObserver, this.error, this.complete))
      }
    }

    class Ox extends p {
      constructor(t, e, n, r) {
        super(t), this._tapNext = kx, this._tapError = kx, this._tapComplete = kx, this._tapError = n || kx, this._tapComplete = r || kx, i(e) ? (this._context = this, this._tapNext = e) : e && (this._context = e, this._tapNext = e.next || kx, this._tapError = e.error || kx, this._tapComplete = e.complete || kx)
      }

      _next(t) {
        try {
          this._tapNext.call(this._context, t)
        } catch (e) {
          return void this.destination.error(e)
        }
        this.destination.next(t)
      }

      _error(t) {
        try {
          this._tapError.call(this._context, t)
        } catch (t) {
          return void this.destination.error(t)
        }
        this.destination.error(t)
      }

      _complete() {
        try {
          this._tapComplete.call(this._context)
        } catch (t) {
          return void this.destination.error(t)
        }
        return this.destination.complete()
      }
    }

    class Lx {
      constructor(t) {
        this.callback = t
      }

      call(t, e) {
        return e.subscribe(new Dx(t, this.callback))
      }
    }

    class Dx extends p {
      constructor(t, e) {
        super(t), this.add(new h(e))
      }
    }

    class Mx {
      constructor(t, e) {
        this.id = t, this.url = e
      }
    }

    class Px extends Mx {
      constructor(t, e, n = "imperative", i = null) {
        super(t, e), this.navigationTrigger = n, this.restoredState = i
      }

      toString() {
        return `NavigationStart(id: ${this.id}, url: '${this.url}')`
      }
    }

    class Rx extends Mx {
      constructor(t, e, n) {
        super(t, e), this.urlAfterRedirects = n
      }

      toString() {
        return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
      }
    }

    class Fx extends Mx {
      constructor(t, e, n) {
        super(t, e), this.reason = n
      }

      toString() {
        return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
      }
    }

    class Ix extends Mx {
      constructor(t, e, n) {
        super(t, e), this.error = n
      }

      toString() {
        return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
      }
    }

    class Nx extends Mx {
      constructor(t, e, n, i) {
        super(t, e), this.urlAfterRedirects = n, this.state = i
      }

      toString() {
        return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
      }
    }

    class jx extends Mx {
      constructor(t, e, n, i) {
        super(t, e), this.urlAfterRedirects = n, this.state = i
      }

      toString() {
        return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
      }
    }

    class Hx extends Mx {
      constructor(t, e, n, i, r) {
        super(t, e), this.urlAfterRedirects = n, this.state = i, this.shouldActivate = r
      }

      toString() {
        return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
      }
    }

    class Ux extends Mx {
      constructor(t, e, n, i) {
        super(t, e), this.urlAfterRedirects = n, this.state = i
      }

      toString() {
        return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
      }
    }

    class $x extends Mx {
      constructor(t, e, n, i) {
        super(t, e), this.urlAfterRedirects = n, this.state = i
      }

      toString() {
        return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
      }
    }

    class Vx {
      constructor(t) {
        this.route = t
      }

      toString() {
        return `RouteConfigLoadStart(path: ${this.route.path})`
      }
    }

    class zx {
      constructor(t) {
        this.route = t
      }

      toString() {
        return `RouteConfigLoadEnd(path: ${this.route.path})`
      }
    }

    class Bx {
      constructor(t) {
        this.snapshot = t
      }

      toString() {
        return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
      }
    }

    class qx {
      constructor(t) {
        this.snapshot = t
      }

      toString() {
        return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
      }
    }

    class Wx {
      constructor(t) {
        this.snapshot = t
      }

      toString() {
        return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
      }
    }

    class Gx {
      constructor(t) {
        this.snapshot = t
      }

      toString() {
        return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
      }
    }

    class Qx {
      constructor(t, e, n) {
        this.routerEvent = t, this.position = e, this.anchor = n
      }

      toString() {
        return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`
      }
    }

    let Yx = (() => {
      class t {
      }

      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t, selectors: [["ng-component"]], decls: 1, vars: 0, template: function (t, e) {
          1 & t && wo(0, "router-outlet")
        }, directives: function () {
          return [tC]
        }, encapsulation: 2
      }), t
    })();

    class Zx {
      constructor(t) {
        this.params = t || {}
      }

      has(t) {
        return this.params.hasOwnProperty(t)
      }

      get(t) {
        if (this.has(t)) {
          const e = this.params[t];
          return Array.isArray(e) ? e[0] : e
        }
        return null
      }

      getAll(t) {
        if (this.has(t)) {
          const e = this.params[t];
          return Array.isArray(e) ? e : [e]
        }
        return []
      }

      get keys() {
        return Object.keys(this.params)
      }
    }

    function Xx(t) {
      return new Zx(t)
    }

    function Kx(t) {
      const e = Error("NavigationCancelingError: " + t);
      return e.ngNavigationCancelingError = !0, e
    }

    function Jx(t, e, n) {
      const i = n.path.split("/");
      if (i.length > t.length) return null;
      if ("full" === n.pathMatch && (e.hasChildren() || i.length < t.length)) return null;
      const r = {};
      for (let s = 0; s < i.length; s++) {
        const e = i[s], n = t[s];
        if (e.startsWith(":")) r[e.substring(1)] = n; else if (e !== n.path) return null
      }
      return {consumed: t.slice(0, i.length), posParams: r}
    }

    class tS {
      constructor(t, e) {
        this.routes = t, this.module = e
      }
    }

    function eS(t, e = "") {
      for (let n = 0; n < t.length; n++) {
        const i = t[n];
        nS(i, iS(e, i))
      }
    }

    function nS(t, e) {
      if (!t) throw new Error(`\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `);
      if (Array.isArray(t)) throw new Error(`Invalid configuration of route '${e}': Array cannot be specified`);
      if (!t.component && !t.children && !t.loadChildren && t.outlet && "primary" !== t.outlet) throw new Error(`Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`);
      if (t.redirectTo && t.children) throw new Error(`Invalid configuration of route '${e}': redirectTo and children cannot be used together`);
      if (t.redirectTo && t.loadChildren) throw new Error(`Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`);
      if (t.children && t.loadChildren) throw new Error(`Invalid configuration of route '${e}': children and loadChildren cannot be used together`);
      if (t.redirectTo && t.component) throw new Error(`Invalid configuration of route '${e}': redirectTo and component cannot be used together`);
      if (t.path && t.matcher) throw new Error(`Invalid configuration of route '${e}': path and matcher cannot be used together`);
      if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error(`Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`);
      if (void 0 === t.path && void 0 === t.matcher) throw new Error(`Invalid configuration of route '${e}': routes must have either a path or a matcher specified`);
      if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error(`Invalid configuration of route '${e}': path cannot start with a slash`);
      if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error(`Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`);
      if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error(`Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`);
      t.children && eS(t.children, e)
    }

    function iS(t, e) {
      return e ? t || e.path ? t && !e.path ? t + "/" : !t && e.path ? e.path : `${t}/${e.path}` : "" : t
    }

    function rS(t) {
      const e = t.children && t.children.map(rS),
        n = e ? Object.assign(Object.assign({}, t), {children: e}) : Object.assign({}, t);
      return !n.component && (e || n.loadChildren) && n.outlet && "primary" !== n.outlet && (n.component = Yx), n
    }

    function sS(t, e) {
      const n = Object.keys(t), i = Object.keys(e);
      if (!n || !i || n.length != i.length) return !1;
      let r;
      for (let s = 0; s < n.length; s++) if (r = n[s], !oS(t[r], e[r])) return !1;
      return !0
    }

    function oS(t, e) {
      return Array.isArray(t) && Array.isArray(e) ? t.length == e.length && t.every(t => e.indexOf(t) > -1) : t === e
    }

    function aS(t) {
      return Array.prototype.concat.apply([], t)
    }

    function lS(t) {
      return t.length > 0 ? t[t.length - 1] : null
    }

    function cS(t, e) {
      for (const n in t) t.hasOwnProperty(n) && e(t[n], n)
    }

    function uS(t) {
      return (e = t) && "function" == typeof e.subscribe ? t : xo(t) ? $(Promise.resolve(t)) : jb(t);
      var e
    }

    function hS(t, e, n) {
      return n ? function (t, e) {
        return sS(t, e)
      }(t.queryParams, e.queryParams) && function t(e, n) {
        if (!gS(e.segments, n.segments)) return !1;
        if (e.numberOfChildren !== n.numberOfChildren) return !1;
        for (const i in n.children) {
          if (!e.children[i]) return !1;
          if (!t(e.children[i], n.children[i])) return !1
        }
        return !0
      }(t.root, e.root) : function (t, e) {
        return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => oS(t[n], e[n]))
      }(t.queryParams, e.queryParams) && function t(e, n) {
        return function e(n, i, r) {
          if (n.segments.length > r.length) return !!gS(n.segments.slice(0, r.length), r) && !i.hasChildren();
          if (n.segments.length === r.length) {
            if (!gS(n.segments, r)) return !1;
            for (const e in i.children) {
              if (!n.children[e]) return !1;
              if (!t(n.children[e], i.children[e])) return !1
            }
            return !0
          }
          {
            const t = r.slice(0, n.segments.length), s = r.slice(n.segments.length);
            return !!gS(n.segments, t) && !!n.children.primary && e(n.children.primary, i, s)
          }
        }(e, n, n.segments)
      }(t.root, e.root)
    }

    class dS {
      constructor(t, e, n) {
        this.root = t, this.queryParams = e, this.fragment = n
      }

      get queryParamMap() {
        return this._queryParamMap || (this._queryParamMap = Xx(this.queryParams)), this._queryParamMap
      }

      toString() {
        return _S.serialize(this)
      }
    }

    class fS {
      constructor(t, e) {
        this.segments = t, this.children = e, this.parent = null, cS(e, (t, e) => t.parent = this)
      }

      hasChildren() {
        return this.numberOfChildren > 0
      }

      get numberOfChildren() {
        return Object.keys(this.children).length
      }

      toString() {
        return wS(this)
      }
    }

    class pS {
      constructor(t, e) {
        this.path = t, this.parameters = e
      }

      get parameterMap() {
        return this._parameterMap || (this._parameterMap = Xx(this.parameters)), this._parameterMap
      }

      toString() {
        return kS(this)
      }
    }

    function gS(t, e) {
      return t.length === e.length && t.every((t, n) => t.path === e[n].path)
    }

    function mS(t, e) {
      let n = [];
      return cS(t.children, (t, i) => {
        "primary" === i && (n = n.concat(e(t, i)))
      }), cS(t.children, (t, i) => {
        "primary" !== i && (n = n.concat(e(t, i)))
      }), n
    }

    class yS {
    }

    class vS {
      parse(t) {
        const e = new DS(t);
        return new dS(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
      }

      serialize(t) {
        return `${"/" + function t(e, n) {
          if (!e.hasChildren()) return wS(e);
          if (n) {
            const n = e.children.primary ? t(e.children.primary, !1) : "", i = [];
            return cS(e.children, (e, n) => {
              "primary" !== n && i.push(`${n}:${t(e, !1)}`)
            }), i.length > 0 ? `${n}(${i.join("//")})` : n
          }
          {
            const n = mS(e, (n, i) => "primary" === i ? [t(e.children.primary, !1)] : [`${i}:${t(n, !1)}`]);
            return `${wS(e)}/(${n.join("//")})`
          }
        }(t.root, !0)}${function (t) {
          const e = Object.keys(t).map(e => {
            const n = t[e];
            return Array.isArray(n) ? n.map(t => `${xS(e)}=${xS(t)}`).join("&") : `${xS(e)}=${xS(n)}`
          });
          return e.length ? "?" + e.join("&") : ""
        }(t.queryParams)}${"string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : ""}`
      }
    }

    const _S = new vS;

    function wS(t) {
      return t.segments.map(t => kS(t)).join("/")
    }

    function bS(t) {
      return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
    }

    function xS(t) {
      return bS(t).replace(/%3B/gi, ";")
    }

    function SS(t) {
      return bS(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
    }

    function TS(t) {
      return decodeURIComponent(t)
    }

    function CS(t) {
      return TS(t.replace(/\+/g, "%20"))
    }

    function kS(t) {
      return `${SS(t.path)}${e = t.parameters,Object.keys(e).map(t=>`
    ;$
      {
        SS(t)
      }
    =$
      {
        SS(e[t])
      }
      `).join("")}`;
      var e
    }

    const ES = /^[^\/()?;=#]+/;

    function AS(t) {
      const e = t.match(ES);
      return e ? e[0] : ""
    }

    const OS = /^[^=?&#]+/, LS = /^[^?&#]+/;

    class DS {
      constructor(t) {
        this.url = t, this.remaining = t
      }

      parseRootSegment() {
        return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new fS([], {}) : new fS([], this.parseChildren())
      }

      parseQueryParams() {
        const t = {};
        if (this.consumeOptional("?")) do {
          this.parseQueryParam(t)
        } while (this.consumeOptional("&"));
        return t
      }

      parseFragment() {
        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
      }

      parseChildren() {
        if ("" === this.remaining) return {};
        this.consumeOptional("/");
        const t = [];
        for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
        let e = {};
        this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
        let n = {};
        return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n.primary = new fS(t, e)), n
      }

      parseSegment() {
        const t = AS(this.remaining);
        if ("" === t && this.peekStartsWith(";")) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
        return this.capture(t), new pS(TS(t), this.parseMatrixParams())
      }

      parseMatrixParams() {
        const t = {};
        for (; this.consumeOptional(";");) this.parseParam(t);
        return t
      }

      parseParam(t) {
        const e = AS(this.remaining);
        if (!e) return;
        this.capture(e);
        let n = "";
        if (this.consumeOptional("=")) {
          const t = AS(this.remaining);
          t && (n = t, this.capture(n))
        }
        t[TS(e)] = TS(n)
      }

      parseQueryParam(t) {
        const e = function (t) {
          const e = t.match(OS);
          return e ? e[0] : ""
        }(this.remaining);
        if (!e) return;
        this.capture(e);
        let n = "";
        if (this.consumeOptional("=")) {
          const t = function (t) {
            const e = t.match(LS);
            return e ? e[0] : ""
          }(this.remaining);
          t && (n = t, this.capture(n))
        }
        const i = CS(e), r = CS(n);
        if (t.hasOwnProperty(i)) {
          let e = t[i];
          Array.isArray(e) || (e = [e], t[i] = e), e.push(r)
        } else t[i] = r
      }

      parseParens(t) {
        const e = {};
        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
          const n = AS(this.remaining), i = this.remaining[n.length];
          if ("/" !== i && ")" !== i && ";" !== i) throw new Error(`Cannot parse url '${this.url}'`);
          let r = void 0;
          n.indexOf(":") > -1 ? (r = n.substr(0, n.indexOf(":")), this.capture(r), this.capture(":")) : t && (r = "primary");
          const s = this.parseChildren();
          e[r] = 1 === Object.keys(s).length ? s.primary : new fS([], s), this.consumeOptional("//")
        }
        return e
      }

      peekStartsWith(t) {
        return this.remaining.startsWith(t)
      }

      consumeOptional(t) {
        return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0)
      }

      capture(t) {
        if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`)
      }
    }

    class MS {
      constructor(t) {
        this._root = t
      }

      get root() {
        return this._root.value
      }

      parent(t) {
        const e = this.pathFromRoot(t);
        return e.length > 1 ? e[e.length - 2] : null
      }

      children(t) {
        const e = PS(t, this._root);
        return e ? e.children.map(t => t.value) : []
      }

      firstChild(t) {
        const e = PS(t, this._root);
        return e && e.children.length > 0 ? e.children[0].value : null
      }

      siblings(t) {
        const e = RS(t, this._root);
        return e.length < 2 ? [] : e[e.length - 2].children.map(t => t.value).filter(e => e !== t)
      }

      pathFromRoot(t) {
        return RS(t, this._root).map(t => t.value)
      }
    }

    function PS(t, e) {
      if (t === e.value) return e;
      for (const n of e.children) {
        const e = PS(t, n);
        if (e) return e
      }
      return null
    }

    function RS(t, e) {
      if (t === e.value) return [e];
      for (const n of e.children) {
        const i = RS(t, n);
        if (i.length) return i.unshift(e), i
      }
      return []
    }

    class FS {
      constructor(t, e) {
        this.value = t, this.children = e
      }

      toString() {
        return `TreeNode(${this.value})`
      }
    }

    function IS(t) {
      const e = {};
      return t && t.children.forEach(t => e[t.value.outlet] = t), e
    }

    class NS extends MS {
      constructor(t, e) {
        super(t), this.snapshot = e, zS(this, t)
      }

      toString() {
        return this.snapshot.toString()
      }
    }

    function jS(t, e) {
      const n = function (t, e) {
          const n = new $S([], {}, {}, "", {}, "primary", e, null, t.root, -1, {});
          return new VS("", new FS(n, []))
        }(t, e), i = new Hb([new pS("", {})]), r = new Hb({}), s = new Hb({}), o = new Hb({}), a = new Hb(""),
        l = new HS(i, r, o, a, s, "primary", e, n.root);
      return l.snapshot = n.root, new NS(new FS(l, []), n)
    }

    class HS {
      constructor(t, e, n, i, r, s, o, a) {
        this.url = t, this.params = e, this.queryParams = n, this.fragment = i, this.data = r, this.outlet = s, this.component = o, this._futureSnapshot = a
      }

      get routeConfig() {
        return this._futureSnapshot.routeConfig
      }

      get root() {
        return this._routerState.root
      }

      get parent() {
        return this._routerState.parent(this)
      }

      get firstChild() {
        return this._routerState.firstChild(this)
      }

      get children() {
        return this._routerState.children(this)
      }

      get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
      }

      get paramMap() {
        return this._paramMap || (this._paramMap = this.params.pipe(N(t => Xx(t)))), this._paramMap
      }

      get queryParamMap() {
        return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(N(t => Xx(t)))), this._queryParamMap
      }

      toString() {
        return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
      }
    }

    function US(t, e = "emptyOnly") {
      const n = t.pathFromRoot;
      let i = 0;
      if ("always" !== e) for (i = n.length - 1; i >= 1;) {
        const t = n[i], e = n[i - 1];
        if (t.routeConfig && "" === t.routeConfig.path) i--; else {
          if (e.component) break;
          i--
        }
      }
      return function (t) {
        return t.reduce((t, e) => ({
          params: Object.assign(Object.assign({}, t.params), e.params),
          data: Object.assign(Object.assign({}, t.data), e.data),
          resolve: Object.assign(Object.assign({}, t.resolve), e._resolvedData)
        }), {params: {}, data: {}, resolve: {}})
      }(n.slice(i))
    }

    class $S {
      constructor(t, e, n, i, r, s, o, a, l, c, u) {
        this.url = t, this.params = e, this.queryParams = n, this.fragment = i, this.data = r, this.outlet = s, this.component = o, this.routeConfig = a, this._urlSegment = l, this._lastPathIndex = c, this._resolve = u
      }

      get root() {
        return this._routerState.root
      }

      get parent() {
        return this._routerState.parent(this)
      }

      get firstChild() {
        return this._routerState.firstChild(this)
      }

      get children() {
        return this._routerState.children(this)
      }

      get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
      }

      get paramMap() {
        return this._paramMap || (this._paramMap = Xx(this.params)), this._paramMap
      }

      get queryParamMap() {
        return this._queryParamMap || (this._queryParamMap = Xx(this.queryParams)), this._queryParamMap
      }

      toString() {
        return `Route(url:'${this.url.map(t => t.toString()).join("/")}', path:'${this.routeConfig ? this.routeConfig.path : ""}')`
      }
    }

    class VS extends MS {
      constructor(t, e) {
        super(e), this.url = t, zS(this, e)
      }

      toString() {
        return BS(this._root)
      }
    }

    function zS(t, e) {
      e.value._routerState = t, e.children.forEach(e => zS(t, e))
    }

    function BS(t) {
      const e = t.children.length > 0 ? ` { ${t.children.map(BS).join(", ")} } ` : "";
      return `${t.value}${e}`
    }

    function qS(t) {
      if (t.snapshot) {
        const e = t.snapshot, n = t._futureSnapshot;
        t.snapshot = n, sS(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), sS(e.params, n.params) || t.params.next(n.params), function (t, e) {
          if (t.length !== e.length) return !1;
          for (let n = 0; n < t.length; ++n) if (!sS(t[n], e[n])) return !1;
          return !0
        }(e.url, n.url) || t.url.next(n.url), sS(e.data, n.data) || t.data.next(n.data)
      } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
    }

    function WS(t, e) {
      var n, i;
      return sS(t.params, e.params) && gS(n = t.url, i = e.url) && n.every((t, e) => sS(t.parameters, i[e].parameters)) && !(!t.parent != !e.parent) && (!t.parent || WS(t.parent, e.parent))
    }

    function GS(t) {
      return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
    }

    function QS(t, e, n, i, r) {
      let s = {};
      return i && cS(i, (t, e) => {
        s[e] = Array.isArray(t) ? t.map(t => "" + t) : "" + t
      }), new dS(n.root === t ? e : function t(e, n, i) {
        const r = {};
        return cS(e.children, (e, s) => {
          r[s] = e === n ? i : t(e, n, i)
        }), new fS(e.segments, r)
      }(n.root, t, e), s, r)
    }

    class YS {
      constructor(t, e, n) {
        if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && GS(n[0])) throw new Error("Root segment cannot have matrix parameters");
        const i = n.find(t => "object" == typeof t && null != t && t.outlets);
        if (i && i !== lS(n)) throw new Error("{outlets:{}} has to be the last command")
      }

      toRoot() {
        return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
      }
    }

    class ZS {
      constructor(t, e, n) {
        this.segmentGroup = t, this.processChildren = e, this.index = n
      }
    }

    function XS(t) {
      return "object" == typeof t && null != t && t.outlets ? t.outlets.primary : "" + t
    }

    function KS(t, e, n) {
      if (t || (t = new fS([], {})), 0 === t.segments.length && t.hasChildren()) return JS(t, e, n);
      const i = function (t, e, n) {
        let i = 0, r = e;
        const s = {match: !1, pathIndex: 0, commandIndex: 0};
        for (; r < t.segments.length;) {
          if (i >= n.length) return s;
          const e = t.segments[r], o = XS(n[i]), a = i < n.length - 1 ? n[i + 1] : null;
          if (r > 0 && void 0 === o) break;
          if (o && a && "object" == typeof a && void 0 === a.outlets) {
            if (!iT(o, a, e)) return s;
            i += 2
          } else {
            if (!iT(o, {}, e)) return s;
            i++
          }
          r++
        }
        return {match: !0, pathIndex: r, commandIndex: i}
      }(t, e, n), r = n.slice(i.commandIndex);
      if (i.match && i.pathIndex < t.segments.length) {
        const e = new fS(t.segments.slice(0, i.pathIndex), {});
        return e.children.primary = new fS(t.segments.slice(i.pathIndex), t.children), JS(e, 0, r)
      }
      return i.match && 0 === r.length ? new fS(t.segments, {}) : i.match && !t.hasChildren() ? tT(t, e, n) : i.match ? JS(t, 0, r) : tT(t, e, n)
    }

    function JS(t, e, n) {
      if (0 === n.length) return new fS(t.segments, {});
      {
        const i = function (t) {
          return "object" != typeof t[0] || void 0 === t[0].outlets ? {primary: t} : t[0].outlets
        }(n), r = {};
        return cS(i, (n, i) => {
          null !== n && (r[i] = KS(t.children[i], e, n))
        }), cS(t.children, (t, e) => {
          void 0 === i[e] && (r[e] = t)
        }), new fS(t.segments, r)
      }
    }

    function tT(t, e, n) {
      const i = t.segments.slice(0, e);
      let r = 0;
      for (; r < n.length;) {
        if ("object" == typeof n[r] && void 0 !== n[r].outlets) {
          const t = eT(n[r].outlets);
          return new fS(i, t)
        }
        if (0 === r && GS(n[0])) {
          i.push(new pS(t.segments[e].path, n[0])), r++;
          continue
        }
        const s = XS(n[r]), o = r < n.length - 1 ? n[r + 1] : null;
        s && o && GS(o) ? (i.push(new pS(s, nT(o))), r += 2) : (i.push(new pS(s, {})), r++)
      }
      return new fS(i, {})
    }

    function eT(t) {
      const e = {};
      return cS(t, (t, n) => {
        null !== t && (e[n] = tT(new fS([], {}), 0, t))
      }), e
    }

    function nT(t) {
      const e = {};
      return cS(t, (t, n) => e[n] = "" + t), e
    }

    function iT(t, e, n) {
      return t == n.path && sS(e, n.parameters)
    }

    class rT {
      constructor(t, e, n, i) {
        this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = i
      }

      activate(t) {
        const e = this.futureState._root, n = this.currState ? this.currState._root : null;
        this.deactivateChildRoutes(e, n, t), qS(this.futureState.root), this.activateChildRoutes(e, n, t)
      }

      deactivateChildRoutes(t, e, n) {
        const i = IS(e);
        t.children.forEach(t => {
          const e = t.value.outlet;
          this.deactivateRoutes(t, i[e], n), delete i[e]
        }), cS(i, (t, e) => {
          this.deactivateRouteAndItsChildren(t, n)
        })
      }

      deactivateRoutes(t, e, n) {
        const i = t.value, r = e ? e.value : null;
        if (i === r) if (i.component) {
          const r = n.getContext(i.outlet);
          r && this.deactivateChildRoutes(t, e, r.children)
        } else this.deactivateChildRoutes(t, e, n); else r && this.deactivateRouteAndItsChildren(e, n)
      }

      deactivateRouteAndItsChildren(t, e) {
        this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
      }

      detachAndStoreRouteSubtree(t, e) {
        const n = e.getContext(t.value.outlet);
        if (n && n.outlet) {
          const e = n.outlet.detach(), i = n.children.onOutletDeactivated();
          this.routeReuseStrategy.store(t.value.snapshot, {componentRef: e, route: t, contexts: i})
        }
      }

      deactivateRouteAndOutlet(t, e) {
        const n = e.getContext(t.value.outlet);
        if (n) {
          const i = IS(t), r = t.value.component ? n.children : e;
          cS(i, (t, e) => this.deactivateRouteAndItsChildren(t, r)), n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated())
        }
      }

      activateChildRoutes(t, e, n) {
        const i = IS(e);
        t.children.forEach(t => {
          this.activateRoutes(t, i[t.value.outlet], n), this.forwardEvent(new Gx(t.value.snapshot))
        }), t.children.length && this.forwardEvent(new qx(t.value.snapshot))
      }

      activateRoutes(t, e, n) {
        const i = t.value, r = e ? e.value : null;
        if (qS(i), i === r) if (i.component) {
          const r = n.getOrCreateContext(i.outlet);
          this.activateChildRoutes(t, e, r.children)
        } else this.activateChildRoutes(t, e, n); else if (i.component) {
          const e = n.getOrCreateContext(i.outlet);
          if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
            const t = this.routeReuseStrategy.retrieve(i.snapshot);
            this.routeReuseStrategy.store(i.snapshot, null), e.children.onOutletReAttached(t.contexts), e.attachRef = t.componentRef, e.route = t.route.value, e.outlet && e.outlet.attach(t.componentRef, t.route.value), sT(t.route)
          } else {
            const n = function (t) {
              for (let e = t.parent; e; e = e.parent) {
                const t = e.routeConfig;
                if (t && t._loadedConfig) return t._loadedConfig;
                if (t && t.component) return null
              }
              return null
            }(i.snapshot), r = n ? n.module.componentFactoryResolver : null;
            e.attachRef = null, e.route = i, e.resolver = r, e.outlet && e.outlet.activateWith(i, r), this.activateChildRoutes(t, null, e.children)
          }
        } else this.activateChildRoutes(t, null, n)
      }
    }

    function sT(t) {
      qS(t.value), t.children.forEach(sT)
    }

    function oT(t) {
      return "function" == typeof t
    }

    function aT(t) {
      return t instanceof dS
    }

    class lT {
      constructor(t) {
        this.segmentGroup = t || null
      }
    }

    class cT {
      constructor(t) {
        this.urlTree = t
      }
    }

    function uT(t) {
      return new w(e => e.error(new lT(t)))
    }

    function hT(t) {
      return new w(e => e.error(new cT(t)))
    }

    function dT(t) {
      return new w(e => e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))
    }

    class fT {
      constructor(t, e, n, i, r) {
        this.configLoader = e, this.urlSerializer = n, this.urlTree = i, this.config = r, this.allowRedirects = !0, this.ngModule = t.get(Xt)
      }

      apply() {
        return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, "primary").pipe(N(t => this.createUrlTree(t, this.urlTree.queryParams, this.urlTree.fragment))).pipe(cx(t => {
          if (t instanceof cT) return this.allowRedirects = !1, this.match(t.urlTree);
          if (t instanceof lT) throw this.noMatchError(t);
          throw t
        }))
      }

      match(t) {
        return this.expandSegmentGroup(this.ngModule, this.config, t.root, "primary").pipe(N(e => this.createUrlTree(e, t.queryParams, t.fragment))).pipe(cx(t => {
          if (t instanceof lT) throw this.noMatchError(t);
          throw t
        }))
      }

      noMatchError(t) {
        return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)
      }

      createUrlTree(t, e, n) {
        const i = t.segments.length > 0 ? new fS([], {primary: t}) : t;
        return new dS(i, e, n)
      }

      expandSegmentGroup(t, e, n, i) {
        return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(N(t => new fS([], t))) : this.expandSegment(t, n, e, n.segments, i, !0)
      }

      expandChildren(t, e, n) {
        return function (t, e) {
          if (0 === Object.keys(t).length) return jb({});
          const n = [], i = [], r = {};
          return cS(t, (t, s) => {
            const o = e(s, t).pipe(N(t => r[s] = t));
            "primary" === s ? n.push(o) : i.push(o)
          }), jb.apply(null, n.concat(i)).pipe(Gb(), lx(), N(() => r))
        }(n.children, (n, i) => this.expandSegmentGroup(t, e, i, n))
      }

      expandSegment(t, e, n, i, r, s) {
        return jb(...n).pipe(N(o => this.expandSegmentAgainstRoute(t, e, n, o, i, r, s).pipe(cx(t => {
          if (t instanceof lT) return jb(null);
          throw t
        }))), Gb(), gx(t => !!t), cx((t, n) => {
          if (t instanceof Ub || "EmptyError" === t.name) {
            if (this.noLeftoversInUrl(e, i, r)) return jb(new fS([], {}));
            throw new lT(e)
          }
          throw t
        }))
      }

      noLeftoversInUrl(t, e, n) {
        return 0 === e.length && !t.children[n]
      }

      expandSegmentAgainstRoute(t, e, n, i, r, s, o) {
        return yT(i) !== s ? uT(e) : void 0 === i.redirectTo ? this.matchSegmentAgainstRoute(t, e, i, r) : o && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, i, r, s) : uT(e)
      }

      expandSegmentAgainstRouteUsingRedirect(t, e, n, i, r, s) {
        return "**" === i.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, i, s) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, i, r, s)
      }

      expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, i) {
        const r = this.applyRedirectCommands([], n.redirectTo, {});
        return n.redirectTo.startsWith("/") ? hT(r) : this.lineralizeSegments(n, r).pipe(V(n => {
          const r = new fS(n, {});
          return this.expandSegment(t, r, e, n, i, !1)
        }))
      }

      expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, i, r, s) {
        const {matched: o, consumedSegments: a, lastChild: l, positionalParamSegments: c} = pT(e, i, r);
        if (!o) return uT(e);
        const u = this.applyRedirectCommands(a, i.redirectTo, c);
        return i.redirectTo.startsWith("/") ? hT(u) : this.lineralizeSegments(i, u).pipe(V(i => this.expandSegment(t, e, n, i.concat(r.slice(l)), s, !1)))
      }

      matchSegmentAgainstRoute(t, e, n, i) {
        if ("**" === n.path) return n.loadChildren ? this.configLoader.load(t.injector, n).pipe(N(t => (n._loadedConfig = t, new fS(i, {})))) : jb(new fS(i, {}));
        const {matched: r, consumedSegments: s, lastChild: o} = pT(e, n, i);
        if (!r) return uT(e);
        const a = i.slice(o);
        return this.getChildConfig(t, n, i).pipe(V(t => {
          const n = t.module, i = t.routes, {segmentGroup: r, slicedSegments: o} = function (t, e, n, i) {
            return n.length > 0 && function (t, e, n) {
              return n.some(n => mT(t, e, n) && "primary" !== yT(n))
            }(t, n, i) ? {
              segmentGroup: gT(new fS(e, function (t, e) {
                const n = {};
                n.primary = e;
                for (const i of t) "" === i.path && "primary" !== yT(i) && (n[yT(i)] = new fS([], {}));
                return n
              }(i, new fS(n, t.children)))), slicedSegments: []
            } : 0 === n.length && function (t, e, n) {
              return n.some(n => mT(t, e, n))
            }(t, n, i) ? {
              segmentGroup: gT(new fS(t.segments, function (t, e, n, i) {
                const r = {};
                for (const s of n) mT(t, e, s) && !i[yT(s)] && (r[yT(s)] = new fS([], {}));
                return Object.assign(Object.assign({}, i), r)
              }(t, n, i, t.children))), slicedSegments: n
            } : {segmentGroup: t, slicedSegments: n}
          }(e, s, a, i);
          return 0 === o.length && r.hasChildren() ? this.expandChildren(n, i, r).pipe(N(t => new fS(s, t))) : 0 === i.length && 0 === o.length ? jb(new fS(s, {})) : this.expandSegment(n, r, i, o, "primary", !0).pipe(N(t => new fS(s.concat(t.segments), t.children)))
        }))
      }

      getChildConfig(t, e, n) {
        return e.children ? jb(new tS(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? jb(e._loadedConfig) : function (t, e, n) {
          const i = e.canLoad;
          return i && 0 !== i.length ? $(i).pipe(N(i => {
            const r = t.get(i);
            let s;
            if (function (t) {
              return t && oT(t.canLoad)
            }(r)) s = r.canLoad(e, n); else {
              if (!oT(r)) throw new Error("Invalid CanLoad guard");
              s = r(e, n)
            }
            return uS(s)
          })).pipe(Gb(), (r = t => !0 === t, t => t.lift(new mx(r, void 0, t)))) : jb(!0);
          var r
        }(t.injector, e, n).pipe(V(n => n ? this.configLoader.load(t.injector, e).pipe(N(t => (e._loadedConfig = t, t))) : function (t) {
          return new w(e => e.error(Kx(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`)))
        }(e))) : jb(new tS([], t))
      }

      lineralizeSegments(t, e) {
        let n = [], i = e.root;
        for (; ;) {
          if (n = n.concat(i.segments), 0 === i.numberOfChildren) return jb(n);
          if (i.numberOfChildren > 1 || !i.children.primary) return dT(t.redirectTo);
          i = i.children.primary
        }
      }

      applyRedirectCommands(t, e, n) {
        return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
      }

      applyRedirectCreatreUrlTree(t, e, n, i) {
        const r = this.createSegmentGroup(t, e.root, n, i);
        return new dS(r, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
      }

      createQueryParams(t, e) {
        const n = {};
        return cS(t, (t, i) => {
          if ("string" == typeof t && t.startsWith(":")) {
            const r = t.substring(1);
            n[i] = e[r]
          } else n[i] = t
        }), n
      }

      createSegmentGroup(t, e, n, i) {
        const r = this.createSegments(t, e.segments, n, i);
        let s = {};
        return cS(e.children, (e, r) => {
          s[r] = this.createSegmentGroup(t, e, n, i)
        }), new fS(r, s)
      }

      createSegments(t, e, n, i) {
        return e.map(e => e.path.startsWith(":") ? this.findPosParam(t, e, i) : this.findOrReturn(e, n))
      }

      findPosParam(t, e, n) {
        const i = n[e.path.substring(1)];
        if (!i) throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);
        return i
      }

      findOrReturn(t, e) {
        let n = 0;
        for (const i of e) {
          if (i.path === t.path) return e.splice(n), i;
          n++
        }
        return t
      }
    }

    function pT(t, e, n) {
      if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? {
        matched: !1,
        consumedSegments: [],
        lastChild: 0,
        positionalParamSegments: {}
      } : {matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {}};
      const i = (e.matcher || Jx)(n, t, e);
      return i ? {
        matched: !0,
        consumedSegments: i.consumed,
        lastChild: i.consumed.length,
        positionalParamSegments: i.posParams
      } : {matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {}}
    }

    function gT(t) {
      if (1 === t.numberOfChildren && t.children.primary) {
        const e = t.children.primary;
        return new fS(t.segments.concat(e.segments), e.children)
      }
      return t
    }

    function mT(t, e, n) {
      return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
    }

    function yT(t) {
      return t.outlet || "primary"
    }

    class vT {
      constructor(t) {
        this.path = t, this.route = this.path[this.path.length - 1]
      }
    }

    class _T {
      constructor(t, e) {
        this.component = t, this.route = e
      }
    }

    function wT(t, e, n) {
      const i = t._root;
      return function t(e, n, i, r, s = {canDeactivateChecks: [], canActivateChecks: []}) {
        const o = IS(n);
        return e.children.forEach(e => {
          !function (e, n, i, r, s = {canDeactivateChecks: [], canActivateChecks: []}) {
            const o = e.value, a = n ? n.value : null, l = i ? i.getContext(e.value.outlet) : null;
            if (a && o.routeConfig === a.routeConfig) {
              const c = function (t, e, n) {
                if ("function" == typeof n) return n(t, e);
                switch (n) {
                  case"pathParamsChange":
                    return !gS(t.url, e.url);
                  case"pathParamsOrQueryParamsChange":
                    return !gS(t.url, e.url) || !sS(t.queryParams, e.queryParams);
                  case"always":
                    return !0;
                  case"paramsOrQueryParamsChange":
                    return !WS(t, e) || !sS(t.queryParams, e.queryParams);
                  case"paramsChange":
                  default:
                    return !WS(t, e)
                }
              }(a, o, o.routeConfig.runGuardsAndResolvers);
              c ? s.canActivateChecks.push(new vT(r)) : (o.data = a.data, o._resolvedData = a._resolvedData), t(e, n, o.component ? l ? l.children : null : i, r, s), c && s.canDeactivateChecks.push(new _T(l && l.outlet && l.outlet.component || null, a))
            } else a && xT(n, l, s), s.canActivateChecks.push(new vT(r)), t(e, null, o.component ? l ? l.children : null : i, r, s)
          }(e, o[e.value.outlet], i, r.concat([e.value]), s), delete o[e.value.outlet]
        }), cS(o, (t, e) => xT(t, i.getContext(e), s)), s
      }(i, e ? e._root : null, n, [i.value])
    }

    function bT(t, e, n) {
      const i = function (t) {
        if (!t) return null;
        for (let e = t.parent; e; e = e.parent) {
          const t = e.routeConfig;
          if (t && t._loadedConfig) return t._loadedConfig
        }
        return null
      }(e);
      return (i ? i.module.injector : n).get(t)
    }

    function xT(t, e, n) {
      const i = IS(t), r = t.value;
      cS(i, (t, i) => {
        xT(t, r.component ? e ? e.children.getContext(i) : null : e, n)
      }), n.canDeactivateChecks.push(new _T(r.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, r))
    }

    const ST = Symbol("INITIAL_VALUE");

    function TT() {
      return vx(t => function (...t) {
        let e = null, n = null;
        return E(t[t.length - 1]) && (n = t.pop()), "function" == typeof t[t.length - 1] && (e = t.pop()), 1 === t.length && l(t[0]) && (t = t[0]), W(t, n).lift(new Vb(e))
      }(...t.map(t => t.pipe(dx(1), function (...t) {
        const e = t[t.length - 1];
        return E(e) ? (t
      .
        pop(), n => bx(t, n, e)
      ):
        e => bx(t, e)
      }(ST)))).pipe(xx((t, e) => {
        let n = !1;
        return e.reduce((t, i, r) => {
          if (t !== ST) return t;
          if (i === ST && (n = !0), !n) {
            if (!1 === i) return i;
            if (r === e.length - 1 || aT(i)) return i
          }
          return t
        }, t)
      }, ST), Qb(t => t !== ST), N(t => aT(t) ? t : !0 === t), dx(1)))
    }

    function CT(t, e) {
      return null !== t && e && e(new Wx(t)), jb(!0)
    }

    function kT(t, e) {
      return null !== t && e && e(new Bx(t)), jb(!0)
    }

    function ET(t, e, n) {
      const i = e.routeConfig ? e.routeConfig.canActivate : null;
      return i && 0 !== i.length ? jb(i.map(i => Wb(() => {
        const r = bT(i, e, n);
        let s;
        if (function (t) {
          return t && oT(t.canActivate)
        }(r)) s = uS(r.canActivate(e, t)); else {
          if (!oT(r)) throw new Error("Invalid CanActivate guard");
          s = uS(r(e, t))
        }
        return s.pipe(gx())
      }))).pipe(TT()) : jb(!0)
    }

    function AT(t, e, n) {
      const i = e[e.length - 1], r = e.slice(0, e.length - 1).reverse().map(t => function (t) {
        const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
        return e && 0 !== e.length ? {node: t, guards: e} : null
      }(t)).filter(t => null !== t).map(e => Wb(() => jb(e.guards.map(r => {
        const s = bT(r, e.node, n);
        let o;
        if (function (t) {
          return t && oT(t.canActivateChild)
        }(s)) o = uS(s.canActivateChild(i, t)); else {
          if (!oT(s)) throw new Error("Invalid CanActivateChild guard");
          o = uS(s(i, t))
        }
        return o.pipe(gx())
      })).pipe(TT())));
      return jb(r).pipe(TT())
    }

    class OT {
    }

    class LT {
      constructor(t, e, n, i, r, s) {
        this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = i, this.paramsInheritanceStrategy = r, this.relativeLinkResolution = s
      }

      recognize() {
        try {
          const t = PT(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
            e = this.processSegmentGroup(this.config, t, "primary"),
            n = new $S([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, "primary", this.rootComponentType, null, this.urlTree.root, -1, {}),
            i = new FS(n, e), r = new VS(this.url, i);
          return this.inheritParamsAndData(r._root), jb(r)
        } catch (t) {
          return new w(e => e.error(t))
        }
      }

      inheritParamsAndData(t) {
        const e = t.value, n = US(e, this.paramsInheritanceStrategy);
        e.params = Object.freeze(n.params), e.data = Object.freeze(n.data), t.children.forEach(t => this.inheritParamsAndData(t))
      }

      processSegmentGroup(t, e, n) {
        return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
      }

      processChildren(t, e) {
        const n = mS(e, (e, n) => this.processSegmentGroup(t, e, n));
        return function (t) {
          const e = {};
          t.forEach(t => {
            const n = e[t.value.outlet];
            if (n) {
              const e = n.url.map(t => t.toString()).join("/"), i = t.value.url.map(t => t.toString()).join("/");
              throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${i}'.`)
            }
            e[t.value.outlet] = t.value
          })
        }(n), n.sort((t, e) => "primary" === t.value.outlet ? -1 : "primary" === e.value.outlet ? 1 : t.value.outlet.localeCompare(e.value.outlet)), n
      }

      processSegment(t, e, n, i) {
        for (const s of t) try {
          return this.processSegmentAgainstRoute(s, e, n, i)
        } catch (r) {
          if (!(r instanceof OT)) throw r
        }
        if (this.noLeftoversInUrl(e, n, i)) return [];
        throw new OT
      }

      noLeftoversInUrl(t, e, n) {
        return 0 === e.length && !t.children[n]
      }

      processSegmentAgainstRoute(t, e, n, i) {
        if (t.redirectTo) throw new OT;
        if ((t.outlet || "primary") !== i) throw new OT;
        let r, s = [], o = [];
        if ("**" === t.path) {
          const s = n.length > 0 ? lS(n).parameters : {};
          r = new $S(n, s, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, IT(t), i, t.component, t, DT(e), MT(e) + n.length, NT(t))
        } else {
          const a = function (t, e, n) {
            if ("" === e.path) {
              if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new OT;
              return {consumedSegments: [], lastChild: 0, parameters: {}}
            }
            const i = (e.matcher || Jx)(n, t, e);
            if (!i) throw new OT;
            const r = {};
            cS(i.posParams, (t, e) => {
              r[e] = t.path
            });
            const s = i.consumed.length > 0 ? Object.assign(Object.assign({}, r), i.consumed[i.consumed.length - 1].parameters) : r;
            return {consumedSegments: i.consumed, lastChild: i.consumed.length, parameters: s}
          }(e, t, n);
          s = a.consumedSegments, o = n.slice(a.lastChild), r = new $S(s, a.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, IT(t), i, t.component, t, DT(e), MT(e) + s.length, NT(t))
        }
        const a = function (t) {
          return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
        }(t), {segmentGroup: l, slicedSegments: c} = PT(e, s, o, a, this.relativeLinkResolution);
        if (0 === c.length && l.hasChildren()) {
          const t = this.processChildren(a, l);
          return [new FS(r, t)]
        }
        if (0 === a.length && 0 === c.length) return [new FS(r, [])];
        const u = this.processSegment(a, l, c, "primary");
        return [new FS(r, u)]
      }
    }

    function DT(t) {
      let e = t;
      for (; e._sourceSegment;) e = e._sourceSegment;
      return e
    }

    function MT(t) {
      let e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0;
      for (; e._sourceSegment;) e = e._sourceSegment, n += e._segmentIndexShift ? e._segmentIndexShift : 0;
      return n - 1
    }

    function PT(t, e, n, i, r) {
      if (n.length > 0 && function (t, e, n) {
        return n.some(n => RT(t, e, n) && "primary" !== FT(n))
      }(t, n, i)) {
        const r = new fS(e, function (t, e, n, i) {
          const r = {};
          r.primary = i, i._sourceSegment = t, i._segmentIndexShift = e.length;
          for (const s of n) if ("" === s.path && "primary" !== FT(s)) {
            const n = new fS([], {});
            n._sourceSegment = t, n._segmentIndexShift = e.length, r[FT(s)] = n
          }
          return r
        }(t, e, i, new fS(n, t.children)));
        return r._sourceSegment = t, r._segmentIndexShift = e.length, {segmentGroup: r, slicedSegments: []}
      }
      if (0 === n.length && function (t, e, n) {
        return n.some(n => RT(t, e, n))
      }(t, n, i)) {
        const s = new fS(t.segments, function (t, e, n, i, r, s) {
          const o = {};
          for (const a of i) if (RT(t, n, a) && !r[FT(a)]) {
            const n = new fS([], {});
            n._sourceSegment = t, n._segmentIndexShift = "legacy" === s ? t.segments.length : e.length, o[FT(a)] = n
          }
          return Object.assign(Object.assign({}, r), o)
        }(t, e, n, i, t.children, r));
        return s._sourceSegment = t, s._segmentIndexShift = e.length, {segmentGroup: s, slicedSegments: n}
      }
      const s = new fS(t.segments, t.children);
      return s._sourceSegment = t, s._segmentIndexShift = e.length, {segmentGroup: s, slicedSegments: n}
    }

    function RT(t, e, n) {
      return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
    }

    function FT(t) {
      return t.outlet || "primary"
    }

    function IT(t) {
      return t.data || {}
    }

    function NT(t) {
      return t.resolve || {}
    }

    function jT(t, e, n, i) {
      const r = bT(t, e, i);
      return uS(r.resolve ? r.resolve(e, n) : r(e, n))
    }

    function HT(t) {
      return function (e) {
        return e.pipe(vx(e => {
          const n = t(e);
          return n ? $(n).pipe(N(() => e)) : $([e])
        }))
      }
    }

    class UT {
      shouldDetach(t) {
        return !1
      }

      store(t, e) {
      }

      shouldAttach(t) {
        return !1
      }

      retrieve(t) {
        return null
      }

      shouldReuseRoute(t, e) {
        return t.routeConfig === e.routeConfig
      }
    }

    const $T = new Nt("ROUTES");

    class VT {
      constructor(t, e, n, i) {
        this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = i
      }

      load(t, e) {
        return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe(N(n => {
          this.onLoadEndListener && this.onLoadEndListener(e);
          const i = n.create(t);
          return new tS(aS(i.injector.get($T)).map(rS), i)
        }))
      }

      loadModuleFactory(t) {
        return "string" == typeof t ? $(this.loader.load(t)) : uS(t()).pipe(V(t => t instanceof Kt ? jb(t) : $(this.compiler.compileModuleAsync(t))))
      }
    }

    class zT {
      shouldProcessUrl(t) {
        return !0
      }

      extract(t) {
        return t
      }

      merge(t, e) {
        return t
      }
    }

    function BT(t) {
      throw t
    }

    function qT(t, e, n) {
      return e.parse("/")
    }

    function WT(t, e) {
      return jb(null)
    }

    let GT = (() => {
      class t {
        constructor(t, e, n, i, r, s, o, a) {
          this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = i, this.config = a, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new C, this.errorHandler = BT, this.malformedUriErrorHandler = qT, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
            beforePreactivation: WT,
            afterPreactivation: WT
          }, this.urlHandlingStrategy = new zT, this.routeReuseStrategy = new UT, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = r.get(Xt), this.console = r.get(jl);
          const l = r.get(Kl);
          this.isNgZoneEnabled = l instanceof Kl, this.resetConfig(a), this.currentUrlTree = new dS(new fS([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new VT(s, o, t => this.triggerEvent(new Vx(t)), t => this.triggerEvent(new zx(t))), this.routerState = jS(this.currentUrlTree, this.rootComponentType), this.transitions = new Hb({
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

        setupNavigations(t) {
          const e = this.events;
          return t.pipe(Qb(t => 0 !== t.id), N(t => Object.assign(Object.assign({}, t), {extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)})), vx(t => {
            let n = !1, i = !1;
            return jb(t).pipe(Ex(t => {
              this.currentNavigation = {
                id: t.id,
                initialUrl: t.currentRawUrl,
                extractedUrl: t.extractedUrl,
                trigger: t.source,
                extras: t.extras,
                previousNavigation: this.lastSuccessfulNavigation ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {previousNavigation: null}) : null
              }
            }), vx(t => {
              const n = !this.navigated || t.extractedUrl.toString() !== this.browserUrlTree.toString();
              if (("reload" === this.onSameUrlNavigation || n) && this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) return jb(t).pipe(vx(t => {
                const n = this.transitions.getValue();
                return e.next(new Px(t.id, this.serializeUrl(t.extractedUrl), t.source, t.restoredState)), n !== this.transitions.getValue() ? Bb : [t]
              }), vx(t => Promise.resolve(t)), (i = this.ngModule.injector, r = this.configLoader, s = this.urlSerializer, o = this.config, function (t) {
                return t.pipe(vx(t => function (t, e, n, i, r) {
                  return new fT(t, e, n, i, r).apply()
                }(i, r, s, t.extractedUrl, o).pipe(N(e => Object.assign(Object.assign({}, t), {urlAfterRedirects: e})))))
              }), Ex(t => {
                this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {finalUrl: t.urlAfterRedirects})
              }), function (t, e, n, i, r) {
                return function (s) {
                  return s.pipe(V(s => function (t, e, n, i, r = "emptyOnly", s = "legacy") {
                    return new LT(t, e, n, i, r, s).recognize()
                  }(t, e, s.urlAfterRedirects, n(s.urlAfterRedirects), i, r).pipe(N(t => Object.assign(Object.assign({}, s), {targetSnapshot: t})))))
                }
              }(this.rootComponentType, this.config, t => this.serializeUrl(t), this.paramsInheritanceStrategy, this.relativeLinkResolution), Ex(t => {
                "eager" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects)
              }), Ex(t => {
                const n = new Nx(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                e.next(n)
              }));
              var i, r, s, o;
              if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                const {id: n, extractedUrl: i, source: r, restoredState: s, extras: o} = t,
                  a = new Px(n, this.serializeUrl(i), r, s);
                e.next(a);
                const l = jS(i, this.rootComponentType).snapshot;
                return jb(Object.assign(Object.assign({}, t), {
                  targetSnapshot: l,
                  urlAfterRedirects: i,
                  extras: Object.assign(Object.assign({}, o), {skipLocationChange: !1, replaceUrl: !1})
                }))
              }
              return this.rawUrlTree = t.rawUrl, this.browserUrlTree = t.urlAfterRedirects, t.resolve(null), Bb
            }), HT(t => {
              const {targetSnapshot: e, id: n, extractedUrl: i, rawUrl: r, extras: {skipLocationChange: s, replaceUrl: o}} = t;
              return this.hooks.beforePreactivation(e, {
                navigationId: n,
                appliedUrlTree: i,
                rawUrlTree: r,
                skipLocationChange: !!s,
                replaceUrl: !!o
              })
            }), Ex(t => {
              const e = new jx(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              this.triggerEvent(e)
            }), N(t => Object.assign(Object.assign({}, t), {guards: wT(t.targetSnapshot, t.currentSnapshot, this.rootContexts)})), function (t, e) {
              return function (n) {
                return n.pipe(V(n => {
                  const {targetSnapshot: i, currentSnapshot: r, guards: {canActivateChecks: s, canDeactivateChecks: o}} = n;
                  return 0 === o.length && 0 === s.length ? jb(Object.assign(Object.assign({}, n), {guardsResult: !0})) : function (t, e, n, i) {
                    return $(t).pipe(V(t => function (t, e, n, i, r) {
                      const s = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                      return s && 0 !== s.length ? jb(s.map(s => {
                        const o = bT(s, e, r);
                        let a;
                        if (function (t) {
                          return t && oT(t.canDeactivate)
                        }(o)) a = uS(o.canDeactivate(t, e, n, i)); else {
                          if (!oT(o)) throw new Error("Invalid CanDeactivate guard");
                          a = uS(o(t, e, n, i))
                        }
                        return a.pipe(gx())
                      })).pipe(TT()) : jb(!0)
                    }(t.component, t.route, n, e, i)), gx(t => !0 !== t, !0))
                  }(o, i, r, t).pipe(V(n => n && "boolean" == typeof n ? function (t, e, n, i) {
                    return $(e).pipe(Cx(e => $([kT(e.route.parent, i), CT(e.route, i), AT(t, e.path, n), ET(t, e.route, n)]).pipe(Gb(), gx(t => !0 !== t, !0))), gx(t => !0 !== t, !0))
                  }(i, s, t, e) : jb(n)), N(t => Object.assign(Object.assign({}, n), {guardsResult: t})))
                }))
              }
            }(this.ngModule.injector, t => this.triggerEvent(t)), Ex(t => {
              if (aT(t.guardsResult)) {
                const e = Kx(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);
                throw e.url = t.guardsResult, e
              }
            }), Ex(t => {
              const e = new Hx(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
              this.triggerEvent(e)
            }), Qb(t => {
              if (!t.guardsResult) {
                this.resetUrlToCurrentUrlTree();
                const n = new Fx(t.id, this.serializeUrl(t.extractedUrl), "");
                return e.next(n), t.resolve(!1), !1
              }
              return !0
            }), HT(t => {
              if (t.guards.canActivateChecks.length) return jb(t).pipe(Ex(t => {
                const e = new Ux(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                this.triggerEvent(e)
              }), (e = this.paramsInheritanceStrategy, n = this.ngModule.injector, function (t) {
                return t.pipe(V(t => {
                  const {targetSnapshot: i, guards: {canActivateChecks: r}} = t;
                  return r.length ? $(r).pipe(Cx(t => function (t, e, n, i) {
                    return function (t, e, n, i) {
                      const r = Object.keys(t);
                      if (0 === r.length) return jb({});
                      if (1 === r.length) {
                        const s = r[0];
                        return jT(t[s], e, n, i).pipe(N(t => ({[s]: t})))
                      }
                      const s = {};
                      return $(r).pipe(V(r => jT(t[r], e, n, i).pipe(N(t => (s[r] = t, t))))).pipe(lx(), N(() => s))
                    }(t._resolve, t, e, i).pipe(N(e => (t._resolvedData = e, t.data = Object.assign(Object.assign({}, t.data), US(t, n).resolve), null)))
                  }(t.route, i, e, n)), function (t, e) {
                    return arguments.length >= 2 ? function (n) {
                      return v(xx(t, e), Kb(1), sx(e))(n)
                    } : function (e) {
                      return v(xx((e, n, i) => t(e, n, i + 1)), Kb(1))(e)
                    }
                  }((t, e) => t), N(e => t)) : jb(t)
                }))
              }), Ex(t => {
                const e = new $x(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                this.triggerEvent(e)
              }));
              var e, n
            }), HT(t => {
              const {targetSnapshot: e, id: n, extractedUrl: i, rawUrl: r, extras: {skipLocationChange: s, replaceUrl: o}} = t;
              return this.hooks.afterPreactivation(e, {
                navigationId: n,
                appliedUrlTree: i,
                rawUrlTree: r,
                skipLocationChange: !!s,
                replaceUrl: !!o
              })
            }), N(t => {
              const e = function (t, e, n) {
                const i = function t(e, n, i) {
                  if (i && e.shouldReuseRoute(n.value, i.value.snapshot)) {
                    const r = i.value;
                    r._futureSnapshot = n.value;
                    const s = function (e, n, i) {
                      return n.children.map(n => {
                        for (const r of i.children) if (e.shouldReuseRoute(r.value.snapshot, n.value)) return t(e, n, r);
                        return t(e, n)
                      })
                    }(e, n, i);
                    return new FS(r, s)
                  }
                  {
                    const i = e.retrieve(n.value);
                    if (i) {
                      const t = i.route;
                      return function t(e, n) {
                        if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                        if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                        n.value._futureSnapshot = e.value;
                        for (let i = 0; i < e.children.length; ++i) t(e.children[i], n.children[i])
                      }(n, t), t
                    }
                    {
                      const i = new HS(new Hb((r = n.value).url), new Hb(r.params), new Hb(r.queryParams), new Hb(r.fragment), new Hb(r.data), r.outlet, r.component, r),
                        s = n.children.map(n => t(e, n));
                      return new FS(i, s)
                    }
                  }
                  var r
                }(t, e._root, n ? n._root : void 0);
                return new NS(i, e)
              }(this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
              return Object.assign(Object.assign({}, t), {targetRouterState: e})
            }), Ex(t => {
              this.currentUrlTree = t.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl), this.routerState = t.targetRouterState, "deferred" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects)
            }), (s = this.rootContexts, o = this.routeReuseStrategy, a = t => this.triggerEvent(t), N(t => (new rT(o, t.targetRouterState, t.currentRouterState, a).activate(s), t))), Ex({
              next() {
                n = !0
              }, complete() {
                n = !0
              }
            }), (r = () => {
              if (!n && !i) {
                this.resetUrlToCurrentUrlTree();
                const n = new Fx(t.id, this.serializeUrl(t.extractedUrl), `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`);
                e.next(n), t.resolve(!1)
              }
              this.currentNavigation = null
            }, t => t.lift(new Lx(r))), cx(n => {
              if (i = !0, (r = n) && r.ngNavigationCancelingError) {
                const i = aT(n.url);
                i || (this.navigated = !0, this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
                const r = new Fx(t.id, this.serializeUrl(t.extractedUrl), n.message);
                e.next(r), i ? setTimeout(() => {
                  const e = this.urlHandlingStrategy.merge(n.url, this.rawUrlTree);
                  return this.scheduleNavigation(e, "imperative", null, {
                    skipLocationChange: t.extras.skipLocationChange,
                    replaceUrl: "eager" === this.urlUpdateStrategy
                  }, {resolve: t.resolve, reject: t.reject, promise: t.promise})
                }, 0) : t.resolve(!1)
              } else {
                this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                const i = new Ix(t.id, this.serializeUrl(t.extractedUrl), n);
                e.next(i);
                try {
                  t.resolve(this.errorHandler(n))
                } catch (s) {
                  t.reject(s)
                }
              }
              var r;
              return Bb
            }));
            var r, s, o, a
          }))
        }

        resetRootComponentType(t) {
          this.rootComponentType = t, this.routerState.root.component = this.rootComponentType
        }

        getTransition() {
          const t = this.transitions.value;
          return t.urlAfterRedirects = this.browserUrlTree, t
        }

        setTransition(t) {
          this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), t))
        }

        initialNavigation() {
          this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {replaceUrl: !0})
        }

        setUpLocationChangeListener() {
          this.locationSubscription || (this.locationSubscription = this.location.subscribe(t => {
            let e = this.parseUrl(t.url);
            const n = "popstate" === t.type ? "popstate" : "hashchange",
              i = t.state && t.state.navigationId ? t.state : null;
            setTimeout(() => {
              this.scheduleNavigation(e, n, i, {replaceUrl: !0})
            }, 0)
          }))
        }

        get url() {
          return this.serializeUrl(this.currentUrlTree)
        }

        getCurrentNavigation() {
          return this.currentNavigation
        }

        triggerEvent(t) {
          this.events.next(t)
        }

        resetConfig(t) {
          eS(t), this.config = t.map(rS), this.navigated = !1, this.lastSuccessfulId = -1
        }

        ngOnDestroy() {
          this.dispose()
        }

        dispose() {
          this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
        }

        createUrlTree(t, e = {}) {
          const {relativeTo: n, queryParams: i, fragment: r, preserveQueryParams: s, queryParamsHandling: o, preserveFragment: a} = e;
          yi() && s && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
          const l = n || this.routerState.root, c = a ? this.currentUrlTree.fragment : r;
          let u = null;
          if (o) switch (o) {
            case"merge":
              u = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), i);
              break;
            case"preserve":
              u = this.currentUrlTree.queryParams;
              break;
            default:
              u = i || null
          } else u = s ? this.currentUrlTree.queryParams : i || null;
          return null !== u && (u = this.removeEmptyProps(u)), function (t, e, n, i, r) {
            if (0 === n.length) return QS(e.root, e.root, e, i, r);
            const s = function (t) {
              if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new YS(!0, 0, t);
              let e = 0, n = !1;
              const i = t.reduce((t, i, r) => {
                if ("object" == typeof i && null != i) {
                  if (i.outlets) {
                    const e = {};
                    return cS(i.outlets, (t, n) => {
                      e[n] = "string" == typeof t ? t.split("/") : t
                    }), [...t, {outlets: e}]
                  }
                  if (i.segmentPath) return [...t, i.segmentPath]
                }
                return "string" != typeof i ? [...t, i] : 0 === r ? (i.split("/").forEach((i, r) => {
                  0 == r && "." === i || (0 == r && "" === i ? n = !0 : ".." === i ? e++ : "" != i && t.push(i))
                }), t) : [...t, i]
              }, []);
              return new YS(n, e, i)
            }(n);
            if (s.toRoot()) return QS(e.root, new fS([], {}), e, i, r);
            const o = function (t, e, n) {
                if (t.isAbsolute) return new ZS(e.root, !0, 0);
                if (-1 === n.snapshot._lastPathIndex) return new ZS(n.snapshot._urlSegment, !0, 0);
                const i = GS(t.commands[0]) ? 0 : 1;
                return function (t, e, n) {
                  let i = t, r = e, s = n;
                  for (; s > r;) {
                    if (s -= r, i = i.parent, !i) throw new Error("Invalid number of '../'");
                    r = i.segments.length
                  }
                  return new ZS(i, !1, r - s)
                }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + i, t.numberOfDoubleDots)
              }(s, e, t),
              a = o.processChildren ? JS(o.segmentGroup, o.index, s.commands) : KS(o.segmentGroup, o.index, s.commands);
            return QS(o.segmentGroup, a, e, i, r)
          }(l, this.currentUrlTree, t, u, c)
        }

        navigateByUrl(t, e = {skipLocationChange: !1}) {
          yi() && this.isNgZoneEnabled && !Kl.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
          const n = aT(t) ? t : this.parseUrl(t), i = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
          return this.scheduleNavigation(i, "imperative", null, e)
        }

        navigate(t, e = {skipLocationChange: !1}) {
          return function (t) {
            for (let e = 0; e < t.length; e++) {
              const n = t[e];
              if (null == n) throw new Error(`The requested path contains ${n} segment at index ${e}`)
            }
          }(t), this.navigateByUrl(this.createUrlTree(t, e), e)
        }

        serializeUrl(t) {
          return this.urlSerializer.serialize(t)
        }

        parseUrl(t) {
          let e;
          try {
            e = this.urlSerializer.parse(t)
          } catch (n) {
            e = this.malformedUriErrorHandler(n, this.urlSerializer, t)
          }
          return e
        }

        isActive(t, e) {
          if (aT(t)) return hS(this.currentUrlTree, t, e);
          const n = this.parseUrl(t);
          return hS(this.currentUrlTree, n, e)
        }

        removeEmptyProps(t) {
          return Object.keys(t).reduce((e, n) => {
            const i = t[n];
            return null != i && (e[n] = i), e
          }, {})
        }

        processNavigations() {
          this.navigations.subscribe(t => {
            this.navigated = !0, this.lastSuccessfulId = t.id, this.events.next(new Rx(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(this.currentUrlTree))), this.lastSuccessfulNavigation = this.currentNavigation, this.currentNavigation = null, t.resolve(!0)
          }, t => {
            this.console.warn("Unhandled Navigation Error: ")
          })
        }

        scheduleNavigation(t, e, n, i, r) {
          const s = this.getTransition();
          if (s && "imperative" !== e && "imperative" === s.source && s.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
          if (s && "hashchange" == e && "popstate" === s.source && s.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
          if (s && "popstate" == e && "hashchange" === s.source && s.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
          let o, a, l;
          r ? (o = r.resolve, a = r.reject, l = r.promise) : l = new Promise((t, e) => {
            o = t, a = e
          });
          const c = ++this.navigationId;
          return this.setTransition({
            id: c,
            source: e,
            restoredState: n,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.rawUrlTree,
            rawUrl: t,
            extras: i,
            resolve: o,
            reject: a,
            promise: l,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState
          }), l.catch(t => Promise.reject(t))
        }

        setBrowserUrl(t, e, n, i) {
          const r = this.urlSerializer.serialize(t);
          i = i || {}, this.location.isCurrentPathEqualTo(r) || e ? this.location.replaceState(r, "", Object.assign(Object.assign({}, i), {navigationId: n})) : this.location.go(r, "", Object.assign(Object.assign({}, i), {navigationId: n}))
        }

        resetStateAndUrl(t, e, n) {
          this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
        }

        resetUrlToCurrentUrlTree() {
          this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {navigationId: this.lastSuccessfulId})
        }
      }

      return t.\u0275fac = function (t) {
        go()
      }, t.\u0275dir = ye({type: t}), t
    })(), QT = (() => {
      class t {
        constructor(t, e, n, i, r) {
          this.router = t, this.route = e, this.commands = [], null == n && i.setAttribute(r.nativeElement, "tabindex", "0")
        }

        set routerLink(t) {
          this.commands = null != t ? Array.isArray(t) ? t : [t] : []
        }

        set preserveQueryParams(t) {
          yi() && console && console.warn && console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead."), this.preserve = t
        }

        onClick() {
          const t = {
            skipLocationChange: ZT(this.skipLocationChange),
            replaceUrl: ZT(this.replaceUrl),
            state: this.state
          };
          return this.router.navigateByUrl(this.urlTree, t), !0
        }

        get urlTree() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: ZT(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: ZT(this.preserveFragment)
          })
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(fo(GT), fo(HS), po("tabindex"), fo(xa), fo(va))
      }, t.\u0275dir = ye({
        type: t,
        selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
        hostBindings: function (t, e) {
          1 & t && So("click", (function () {
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
      }), t
    })(), YT = (() => {
      class t {
        constructor(t, e, n) {
          this.router = t, this.route = e, this.locationStrategy = n, this.commands = [], this.subscription = t.events.subscribe(t => {
            t instanceof Rx && this.updateTargetUrlAndHref()
          })
        }

        set routerLink(t) {
          this.commands = null != t ? Array.isArray(t) ? t : [t] : []
        }

        set preserveQueryParams(t) {
          yi() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = t
        }

        ngOnChanges(t) {
          this.updateTargetUrlAndHref()
        }

        ngOnDestroy() {
          this.subscription.unsubscribe()
        }

        onClick(t, e, n, i) {
          if (0 !== t || e || n || i) return !0;
          if ("string" == typeof this.target && "_self" != this.target) return !0;
          const r = {
            skipLocationChange: ZT(this.skipLocationChange),
            replaceUrl: ZT(this.replaceUrl),
            state: this.state
          };
          return this.router.navigateByUrl(this.urlTree, r), !1
        }

        updateTargetUrlAndHref() {
          this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
        }

        get urlTree() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: ZT(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: ZT(this.preserveFragment)
          })
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(fo(GT), fo(HS), fo(Uc))
      }, t.\u0275dir = ye({
        type: t,
        selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
        hostVars: 2,
        hostBindings: function (t, e) {
          1 & t && So("click", (function (t) {
            return e.onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey)
          })), 2 & t && (Zo("href", e.href, Wi), co("target", e.target))
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
        features: [ra]
      }), t
    })();

    function ZT(t) {
      return "" === t || !!t
    }

    let XT = (() => {
      class t {
        constructor(t, e, n, i, r) {
          this.router = t, this.element = e, this.renderer = n, this.link = i, this.linkWithHref = r, this.classes = [], this.isActive = !1, this.routerLinkActiveOptions = {exact: !1}, this.subscription = t.events.subscribe(t => {
            t instanceof Rx && this.update()
          })
        }

        ngAfterContentInit() {
          this.links.changes.subscribe(t => this.update()), this.linksWithHrefs.changes.subscribe(t => this.update()), this.update()
        }

        set routerLinkActive(t) {
          const e = Array.isArray(t) ? t : t.split(" ");
          this.classes = e.filter(t => !!t)
        }

        ngOnChanges(t) {
          this.update()
        }

        ngOnDestroy() {
          this.subscription.unsubscribe()
        }

        update() {
          this.links && this.linksWithHrefs && this.router.navigated && Promise.resolve().then(() => {
            const t = this.hasActiveLinks();
            this.isActive !== t && (this.isActive = t, this.classes.forEach(e => {
              t ? this.renderer.addClass(this.element.nativeElement, e) : this.renderer.removeClass(this.element.nativeElement, e)
            }))
          })
        }

        isLinkActive(t) {
          return e => t.isActive(e.urlTree, this.routerLinkActiveOptions.exact)
        }

        hasActiveLinks() {
          const t = this.isLinkActive(this.router);
          return this.link && t(this.link) || this.linkWithHref && t(this.linkWithHref) || this.links.some(t) || this.linksWithHrefs.some(t)
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(fo(GT), fo(va), fo(xa), fo(QT, 8), fo(YT, 8))
      }, t.\u0275dir = ye({
        type: t,
        selectors: [["", "routerLinkActive", ""]],
        contentQueries: function (t, e, n) {
          var i;
          1 & t && (Cl(n, QT, !0), Cl(n, YT, !0)), 2 & t && (Sl(i = kl()) && (e.links = i), Sl(i = kl()) && (e.linksWithHrefs = i))
        },
        inputs: {routerLinkActiveOptions: "routerLinkActiveOptions", routerLinkActive: "routerLinkActive"},
        exportAs: ["routerLinkActive"],
        features: [ra]
      }), t
    })();

    class KT {
      constructor() {
        this.outlet = null, this.route = null, this.resolver = null, this.children = new JT, this.attachRef = null
      }
    }

    class JT {
      constructor() {
        this.contexts = new Map
      }

      onChildOutletCreated(t, e) {
        const n = this.getOrCreateContext(t);
        n.outlet = e, this.contexts.set(t, n)
      }

      onChildOutletDestroyed(t) {
        const e = this.getContext(t);
        e && (e.outlet = null)
      }

      onOutletDeactivated() {
        const t = this.contexts;
        return this.contexts = new Map, t
      }

      onOutletReAttached(t) {
        this.contexts = t
      }

      getOrCreateContext(t) {
        let e = this.getContext(t);
        return e || (e = new KT, this.contexts.set(t, e)), e
      }

      getContext(t) {
        return this.contexts.get(t) || null
      }
    }

    let tC = (() => {
      class t {
        constructor(t, e, n, i, r) {
          this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = r, this.activated = null, this._activatedRoute = null, this.activateEvents = new dl, this.deactivateEvents = new dl, this.name = i || "primary", t.onChildOutletCreated(this.name, this)
        }

        ngOnDestroy() {
          this.parentContexts.onChildOutletDestroyed(this.name)
        }

        ngOnInit() {
          if (!this.activated) {
            const t = this.parentContexts.getContext(this.name);
            t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
          }
        }

        get isActivated() {
          return !!this.activated
        }

        get component() {
          if (!this.activated) throw new Error("Outlet is not activated");
          return this.activated.instance
        }

        get activatedRoute() {
          if (!this.activated) throw new Error("Outlet is not activated");
          return this._activatedRoute
        }

        get activatedRouteData() {
          return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
        }

        detach() {
          if (!this.activated) throw new Error("Outlet is not activated");
          this.location.detach();
          const t = this.activated;
          return this.activated = null, this._activatedRoute = null, t
        }

        attach(t, e) {
          this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView)
        }

        deactivate() {
          if (this.activated) {
            const t = this.component;
            this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t)
          }
        }

        activateWith(t, e) {
          if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
          this._activatedRoute = t;
          const n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
            i = this.parentContexts.getOrCreateContext(this.name).children, r = new eC(t, i, this.location.injector);
          this.activated = this.location.createComponent(n, this.location.length, r), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(fo(JT), fo(Ba), fo(ya), po("name"), fo(Rs))
      }, t.\u0275dir = ye({
        type: t,
        selectors: [["router-outlet"]],
        outputs: {activateEvents: "activate", deactivateEvents: "deactivate"},
        exportAs: ["outlet"]
      }), t
    })();

    class eC {
      constructor(t, e, n) {
        this.route = t, this.childContexts = e, this.parent = n
      }

      get(t, e) {
        return t === HS ? this.route : t === JT ? this.childContexts : this.parent.get(t, e)
      }
    }

    class nC {
    }

    class iC {
      preload(t, e) {
        return jb(null)
      }
    }

    let rC = (() => {
      class t {
        constructor(t, e, n, i, r) {
          this.router = t, this.injector = i, this.preloadingStrategy = r, this.loader = new VT(e, n, e => t.triggerEvent(new Vx(e)), e => t.triggerEvent(new zx(e)))
        }

        setUpPreloading() {
          this.subscription = this.router.events.pipe(Qb(t => t instanceof Rx), Cx(() => this.preload())).subscribe(() => {
          })
        }

        preload() {
          const t = this.injector.get(Xt);
          return this.processRoutes(t, this.router.config)
        }

        ngOnDestroy() {
          this.subscription.unsubscribe()
        }

        processRoutes(t, e) {
          const n = [];
          for (const i of e) if (i.loadChildren && !i.canLoad && i._loadedConfig) {
            const t = i._loadedConfig;
            n.push(this.processRoutes(t.module, t.routes))
          } else i.loadChildren && !i.canLoad ? n.push(this.preloadConfig(t, i)) : i.children && n.push(this.processRoutes(t, i.children));
          return $(n).pipe(q(), N(t => {
          }))
        }

        preloadConfig(t, e) {
          return this.preloadingStrategy.preload(e, () => this.loader.load(t.injector, e).pipe(V(t => (e._loadedConfig = t, this.processRoutes(t.module, t.routes)))))
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(GT), Gt(wc), Gt(Ql), Gt(Zs), Gt(nC))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })(), sC = (() => {
      class t {
        constructor(t, e, n = {}) {
          this.router = t, this.viewportScroller = e, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled"
        }

        init() {
          "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
        }

        createScrollEvents() {
          return this.router.events.subscribe(t => {
            t instanceof Px ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = t.navigationTrigger, this.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof Rx && (this.lastId = t.id, this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment))
          })
        }

        consumeScrollEvents() {
          return this.router.events.subscribe(t => {
            t instanceof Qx && (t.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
          })
        }

        scheduleScrollEvent(t, e) {
          this.router.triggerEvent(new Qx(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e))
        }

        ngOnDestroy() {
          this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
        }
      }

      return t.\u0275fac = function (t) {
        go()
      }, t.\u0275dir = ye({type: t}), t
    })();
    const oC = new Nt("ROUTER_CONFIGURATION"), aC = new Nt("ROUTER_FORROOT_GUARD"),
      lC = [qc, {provide: yS, useClass: vS}, {
        provide: GT, useFactory: function (t, e, n, i, r, s, o, a = {}, l, c) {
          const u = new GT(null, t, e, n, i, r, s, aS(o));
          if (l && (u.urlHandlingStrategy = l), c && (u.routeReuseStrategy = c), a.errorHandler && (u.errorHandler = a.errorHandler), a.malformedUriErrorHandler && (u.malformedUriErrorHandler = a.malformedUriErrorHandler), a.enableTracing) {
            const t = Oc();
            u.events.subscribe(e => {
              t.logGroup("Router Event: " + e.constructor.name), t.log(e.toString()), t.log(e), t.logGroupEnd()
            })
          }
          return a.onSameUrlNavigation && (u.onSameUrlNavigation = a.onSameUrlNavigation), a.paramsInheritanceStrategy && (u.paramsInheritanceStrategy = a.paramsInheritanceStrategy), a.urlUpdateStrategy && (u.urlUpdateStrategy = a.urlUpdateStrategy), a.relativeLinkResolution && (u.relativeLinkResolution = a.relativeLinkResolution), u
        }, deps: [yS, JT, qc, Zs, wc, Ql, $T, oC, [class {
        }, new it], [class {
        }, new it]]
      }, JT, {
        provide: HS, useFactory: function (t) {
          return t.routerState.root
        }, deps: [GT]
      }, {provide: wc, useClass: Sc}, rC, iC, class {
        preload(t, e) {
          return e().pipe(cx(() => jb(null)))
        }
      }, {provide: oC, useValue: {enableTracing: !1}}];

    function cC() {
      return new fc("Router", GT)
    }

    let uC = (() => {
      class t {
        constructor(t, e) {
        }

        static forRoot(e, n) {
          return {
            ngModule: t,
            providers: [lC, pC(e), {provide: aC, useFactory: fC, deps: [[GT, new it, new st]]}, {
              provide: oC,
              useValue: n || {}
            }, {provide: Uc, useFactory: dC, deps: [Dc, [new nt(Vc), new it], oC]}, {
              provide: sC,
              useFactory: hC,
              deps: [GT, su, oC]
            }, {provide: nC, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : iC}, {
              provide: fc,
              multi: !0,
              useFactory: cC
            }, [gC, {provide: Ll, multi: !0, useFactory: mC, deps: [gC]}, {
              provide: vC,
              useFactory: yC,
              deps: [gC]
            }, {provide: Nl, multi: !0, useExisting: vC}]]
          }
        }

        static forChild(e) {
          return {ngModule: t, providers: [pC(e)]}
        }
      }

      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)(Gt(aC, 8), Gt(GT, 8))
        }
      }), t
    })();

    function hC(t, e, n) {
      return n.scrollOffset && e.setOffset(n.scrollOffset), new sC(t, e, n)
    }

    function dC(t, e, n = {}) {
      return n.useHash ? new Bc(t, e) : new zc(t, e)
    }

    function fC(t) {
      if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
      return "guarded"
    }

    function pC(t) {
      return [{provide: Xs, multi: !0, useValue: t}, {provide: $T, multi: !0, useValue: t}]
    }

    let gC = (() => {
      class t {
        constructor(t) {
          this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new C
        }

        appInitializer() {
          return this.injector.get(Pc, Promise.resolve(null)).then(() => {
            let t = null;
            const e = new Promise(e => t = e), n = this.injector.get(GT), i = this.injector.get(oC);
            if (this.isLegacyDisabled(i) || this.isLegacyEnabled(i)) t(!0); else if ("disabled" === i.initialNavigation) n.setUpLocationChangeListener(), t(!0); else {
              if ("enabled" !== i.initialNavigation) throw new Error(`Invalid initialNavigation options: '${i.initialNavigation}'`);
              n.hooks.afterPreactivation = () => this.initNavigation ? jb(null) : (this.initNavigation = !0, t(!0), this.resultOfPreactivationDone), n.initialNavigation()
            }
            return e
          })
        }

        bootstrapListener(t) {
          const e = this.injector.get(oC), n = this.injector.get(rC), i = this.injector.get(sC),
            r = this.injector.get(GT), s = this.injector.get(vc);
          t === s.components[0] && (this.isLegacyEnabled(e) ? r.initialNavigation() : this.isLegacyDisabled(e) && r.setUpLocationChangeListener(), n.setUpPreloading(), i.init(), r.resetRootComponentType(s.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
        }

        isLegacyEnabled(t) {
          return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
        }

        isLegacyDisabled(t) {
          return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)(Gt(Zs))
      }, t.\u0275prov = ct({token: t, factory: t.\u0275fac}), t
    })();

    function mC(t) {
      return t.appInitializer.bind(t)
    }

    function yC(t) {
      return t.bootstrapListener.bind(t)
    }

    const vC = new Nt("Router Initializer"), _C = function () {
      return ["#5E77FF", "#BC5DE6"]
    }, wC = function (t) {
      return {domain: t}
    }, bC = function () {
      return ["#384BC5", "#5E77FF"]
    }, xC = [{
      path: "", component: (() => {
        class t {
          constructor() {
            this.pieChartData = [{name: "Male", value: 65}, {
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

          getPercent(t) {
            return t + "%"
          }
        }

        return t.\u0275fac = function (e) {
          return new (e || t)
        }, t.\u0275cmp = he({
          type: t,
          selectors: [["app-statistics"]],
          decls: 123,
          vars: 37,
          consts: [[1, "wrapper"], [1, "row"], [1, "col-12", "col-sm-6", "col-xl-3"], [1, "card"], [1, "card-header"], [1, "card-icon", "card-icon--employees"], [1, "material-icons"], [1, "card-title"], [1, "card-value"], [1, "card-footer"], [1, "card-update-time"], [1, "btn", "card-btn"], [1, "card-icon", "card-icon--contracts"], [1, "card-icon", "card-icon--documentations"], [1, "card-icon", "card-icon--consultations"], [1, "col-12", "col-xl-4"], [1, "card", "card--large"], [1, "card-header", "card-header--lg"], [1, "card-lg-title"], [1, "card-header-link"], [1, "card-body"], [1, "pie-icons"], [1, "pie-icon", "pie-icon--female"], [1, "pie-icon", "pie-icon--male"], [3, "scheme", "results", "gradient", "doughnut", "animations", "arcWidth"], [1, "card-footer", "card-footer--chart"], [1, "card-update-time", "card-update-time--left"], [1, "pie-chart-legend"], [1, "pie-chart-legend-item"], [1, "pie-chart-legend-color", "pie-chart-legend-color--female"], [1, "pie-chart-legend-name"], [1, "pie-chart-legend-color", "pie-chart-legend-color--male"], [1, "chart-container", "chart-container--multi"], [3, "scheme", "results", "yScaleMax", "roundEdges", "roundDomains", "showGridLines", "gradient", "yAxisTickFormatting", "xAxis", "yAxis"], [1, "chart-container", "chart-container--single"], ["schemeType", "linear", 3, "scheme", "barPadding", "roundEdges", "roundDomains", "trimXAxisTicks", "trimYAxisTicks", "rotateXAxisTicks", "results", "showGridLines", "gradient", "xAxis", "yAxis"]],
          template: function (t, e) {
            1 & t && (vo(0, "div", 0), vo(1, "div", 1), vo(2, "div", 2), vo(3, "div", 3), vo(4, "div", 4), vo(5, "div", 5), vo(6, "span", 6), Go(7, "business_center"), _o(), _o(), vo(8, "p", 7), Go(9, "Employees total"), _o(), vo(10, "p", 8), Go(11, "3.100"), _o(), _o(), vo(12, "div", 9), vo(13, "span", 10), vo(14, "span", 6), Go(15, "update"), _o(), Go(16, " just updated "), _o(), vo(17, "button", 11), Go(18, " MORE INFO "), _o(), _o(), _o(), _o(), vo(19, "div", 2), vo(20, "div", 3), vo(21, "div", 4), vo(22, "div", 12), vo(23, "span", 6), Go(24, "library_books"), _o(), _o(), vo(25, "p", 7), Go(26, "Contracts total"), _o(), vo(27, "p", 8), Go(28, "2.558"), _o(), _o(), vo(29, "div", 9), vo(30, "span", 10), vo(31, "span", 6), Go(32, "update"), _o(), Go(33, " just updated "), _o(), vo(34, "button", 11), Go(35, " MORE INFO "), _o(), _o(), _o(), _o(), vo(36, "div", 2), vo(37, "div", 3), vo(38, "div", 4), vo(39, "div", 13), vo(40, "span", 6), Go(41, "folder_shared"), _o(), _o(), vo(42, "p", 7), Go(43, "Documentations"), _o(), vo(44, "p", 8), Go(45, "+455"), _o(), _o(), vo(46, "div", 9), vo(47, "span", 10), vo(48, "span", 6), Go(49, "update"), _o(), Go(50, " just updated "), _o(), vo(51, "button", 11), Go(52, " MORE INFO "), _o(), _o(), _o(), _o(), vo(53, "div", 2), vo(54, "div", 3), vo(55, "div", 4), vo(56, "div", 14), vo(57, "span", 6), Go(58, "chat_bubble"), _o(), _o(), vo(59, "p", 7), Go(60, "Consultations"), _o(), vo(61, "p", 8), Go(62, "1.200"), _o(), _o(),vo(63, "div", 9),vo(64, "span", 10),vo(65, "span", 6),Go(66, "update"),_o(),Go(67, " just updated "),_o(),vo(68, "button", 11),Go(69, " MORE INFO "),_o(),_o(),_o(),_o(),_o(),vo(70, "div", 1),vo(71, "div", 15),vo(72, "div", 16),vo(73, "div", 17),vo(74, "p", 18),Go(75, "Employees/Gender"),_o(),vo(76, "span", 19),Go(77, " Missing Data "),vo(78, "span", 6),Go(79, "arrow_right"),_o(),_o(),_o(),vo(80, "div", 20),vo(81, "div", 21),wo(82, "span", 22),wo(83, "span", 23),_o(),wo(84, "ngx-charts-pie-chart", 24),_o(),vo(85, "div", 25),vo(86, "span", 26),vo(87, "span", 6),Go(88, "update"),_o(),Go(89, " just updated "),_o(),vo(90, "div", 27),vo(91, "div", 28),wo(92, "div", 29),vo(93, "span", 30),Go(94, "Female"),_o(),_o(),vo(95, "div", 28),wo(96, "div", 31),vo(97, "span", 30),Go(98, "Male"),_o(),_o(),_o(),_o(),_o(),_o(),vo(99, "div", 15),vo(100, "div", 16),vo(101, "div", 17),vo(102, "p", 18),Go(103, "Employees/Age"),_o(),vo(104, "span", 19),Go(105, " Missing Data "),vo(106, "span", 6),Go(107, "arrow_right"),_o(),_o(),_o(),vo(108, "div", 20),vo(109, "div", 32),wo(110, "ngx-charts-bar-vertical-2d", 33),_o(),_o(),_o(),_o(),vo(111, "div", 15),vo(112, "div", 16),vo(113, "div", 17),vo(114, "p", 18),Go(115, "Employees/Income"),_o(),vo(116, "span", 19),Go(117, " Missing Data "),vo(118, "span", 6),Go(119, "arrow_right"),_o(),_o(),_o(),vo(120, "div", 20),vo(121, "div", 34),wo(122, "ngx-charts-bar-vertical", 35),_o(),_o(),_o(),_o(),_o(),_o()), 2 & t && (cr(84), mo("scheme", cl(29, wC, ll(28, _C)))("results", e.pieChartData)("gradient", !0)("doughnut", !0)("animations", !0)("arcWidth", .35), cr(26), mo("scheme", cl(32, wC, ll(31, _C)))("results", e.multiChartData)("yScaleMax", 50)("roundEdges", !1)("roundDomains", !0)("showGridLines", !0)("gradient", !0)("yAxisTickFormatting", e.getPercent)("xAxis", !0)("yAxis", !0), cr(12), mo("scheme", cl(35, wC, ll(34, bC)))("barPadding", 75)("roundEdges", !1)("roundDomains", !0)("trimXAxisTicks", !1)("trimYAxisTicks", !1)("rotateXAxisTicks", !1)("results", e.singleChartData)("showGridLines", !0)("gradient", !0)("xAxis", !0)("yAxis", !0))
          },
          directives: [Eb, yb, mb],
          styles: [".wrapper[_ngcontent-%COMP%]{height:100%;padding-top:50px}.card[_ngcontent-%COMP%]{border-radius:6px;background-color:#fff;box-shadow:0 1px 4px 0 rgba(0,0,0,.14);margin-bottom:44px;z-index:0}.card--large[_ngcontent-%COMP%]{height:361px}.card-header[_ngcontent-%COMP%]{border-bottom:none;background-color:#fff;position:relative;border-radius:6px;padding-bottom:0}.card-header--lg[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:20px 24px 0}.card-header-link[_ngcontent-%COMP%]{display:flex;align-items:center;color:#5e77ff;font-size:.875rem;font-weight:700;cursor:pointer}.card-header-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{position:relative;top:1px}.card-header-link[_ngcontent-%COMP%]:hover{color:#788dff}.card-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:89px;width:89px;position:absolute;top:-20px;left:15px;z-index:1;border-radius:3px;box-shadow:0 1px 4px 0 rgba(0,0,0,.3)}.card-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:40px}.card-icon--employees[_ngcontent-%COMP%]{background:linear-gradient(222.47deg,#6cefff,#5e77ff)}.card-icon--contracts[_ngcontent-%COMP%]{background:linear-gradient(222.47deg,#a094ff,#bc5de6)}.card-icon--documentations[_ngcontent-%COMP%]{background:linear-gradient(222.47deg,#09d0bd,#5e77ff)}.card-icon--consultations[_ngcontent-%COMP%]{background:linear-gradient(222.47deg,#ffa300,#f44336)}.card-title[_ngcontent-%COMP%]{text-align:right;color:#7a7a7a;font-size:.875rem;line-height:21px;margin-bottom:0}.card-lg-title[_ngcontent-%COMP%]{text-align:left;color:#3c4858;font-size:1.125rem;line-height:1.875rem;margin-bottom:0}.card-value[_ngcontent-%COMP%]{text-align:right;font-size:1.875rem;margin-bottom:15px}.card-body[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;overflow-x:auto;overflow-y:hidden;position:relative}.card-body[_ngcontent-%COMP%]   .pie-icons[_ngcontent-%COMP%]{display:flex;position:absolute}.card-body[_ngcontent-%COMP%]   .pie-icon[_ngcontent-%COMP%]{width:16px;height:34px;margin:0 5px}.card-body[_ngcontent-%COMP%]   .pie-icon--male[_ngcontent-%COMP%]{background:url(dist/assets/icons/male.svg) no-repeat 50%}.card-body[_ngcontent-%COMP%]   .pie-icon--female[_ngcontent-%COMP%]{background:url(dist/assets/icons/female.svg) no-repeat 50%}.card-body[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{height:calc(100% - 30px);width:calc(75% + 2.5rem)}.card-body[_ngcontent-%COMP%]   .chart-container--single[_ngcontent-%COMP%]{width:calc(80% + 2.5rem)}.card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px 0;background-color:#fff;border-color:#eee;margin:0 18px}.card-footer--chart[_ngcontent-%COMP%]{justify-content:normal}.card[_ngcontent-%COMP%]   .pie-chart-legend[_ngcontent-%COMP%]{display:flex;align-self:center;margin-left:33px}.card[_ngcontent-%COMP%]   .pie-chart-legend-item[_ngcontent-%COMP%]{display:flex;align-items:center}.card[_ngcontent-%COMP%]   .pie-chart-legend-item[_ngcontent-%COMP%]:not(:first-of-type){margin-left:10px}.card[_ngcontent-%COMP%]   .pie-chart-legend-name[_ngcontent-%COMP%]{color:#3c4858;font-size:.75rem}.card[_ngcontent-%COMP%]   .pie-chart-legend-color[_ngcontent-%COMP%]{border-radius:50%;width:12px;height:12px;margin-right:10px}.card[_ngcontent-%COMP%]   .pie-chart-legend-color--female[_ngcontent-%COMP%]{background:#bc5de6}.card[_ngcontent-%COMP%]   .pie-chart-legend-color--male[_ngcontent-%COMP%]{background:linear-gradient(222.47deg,#6cefff,#5e77ff)}.card-update-time[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:.75rem;color:#a2a2a2}.card-update-time--left[_ngcontent-%COMP%]{align-self:flex-start}.card-update-time[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:18px;margin-right:8px}.card-btn[_ngcontent-%COMP%]{width:96px;height:27px;border-radius:13.6px;background-color:#5e77ff;color:#fff;font-size:9.6px;cursor:pointer}.card-btn[_ngcontent-%COMP%]:hover{background-color:#788dff}"]
        }), t
      })()
    }, {path: "**", redirectTo: "/"}];
    let SC = (() => {
      class t {
      }

      return t.\u0275mod = ge({type: t}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, imports: [[uC.forRoot(xC)], uC]
      }), t
    })(), TC = (() => {
      class t {
        constructor() {
          this.isMenuToggled = !0
        }

        toggleMenu() {
          this.isMenuToggled = !this.isMenuToggled
        }
      }

      return t.\u0275fac = function (e) {
        return new (e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [["app-root"]],
        decls: 23,
        vars: 2,
        consts: [[1, "d-flex", "wrapper"], [1, "bg-light", "border-right", "sidebar-wrapper"], [1, "sidebar-heading"], [1, "list-group", "list-group-flush"], ["routerLink", "/", "routerLinkActive", "sidebar-item--active", 1, "sidebar-item", "list-group-item", "list-group-item-action"], ["routerLink", "/shortcuts", "routerLinkActive", "sidebar-item--active", 1, "sidebar-item", "list-group-item", "list-group-item-action"], ["routerLink", "/overview", "routerLinkActive", "sidebar-item--active", 1, "sidebar-item", "list-group-item", "list-group-item-action"], ["routerLink", "/events", "routerLinkActive", "sidebar-item--active", 1, "sidebar-item", "list-group-item", "list-group-item-action"], ["routerLink", "/profile", "routerLinkActive", "sidebar-item--active", 1, "sidebar-item", "list-group-item", "list-group-item-action"], ["routerLink", "/status", "routerLinkActive", "sidebar-item--active", 1, "sidebar-item", "list-group-item", "list-group-item-action"], [1, "page-content-wrapper"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "border-bottom"], [1, "btn", "btn-primary", "nav-btn", 3, "click"], [1, "container-fluid"]],
        template: function (t, e) {
          1 & t && (vo(0, "div", 0), vo(1, "div", 1), vo(2, "div", 2), Go(3, "Statistics Demo"), _o(), vo(4, "div", 3), vo(5, "a", 4), Go(6, " Statistics "), _o(), vo(7, "a", 5), Go(8, " Knowledge "), _o(), vo(9, "a", 6), Go(10, " Chat "), _o(), vo(11, "a", 7), Go(12, " Employers "), _o(), vo(13, "a", 8), Go(14, " Companies "), _o(), vo(15, "a", 9), Go(16, " Calendar "), _o(), _o(), _o(), vo(17, "div", 10), vo(18, "nav", 11), vo(19, "button", 12), So("click", (function () {
            return e.toggleMenu()
          })), Go(20, "Toggle Menu"), _o(), _o(), vo(21, "div", 13), wo(22, "router-outlet"), _o(), _o(), _o()), 2 & t && Fo("wrapper--toggled", e.isMenuToggled)
        },
        directives: [YT, XT, tC],
        styles: ["body[_ngcontent-%COMP%]{overflow-x:hidden}.nav-btn[_ngcontent-%COMP%]{background-color:#071a83;border-color:#071a83}.sidebar-wrapper[_ngcontent-%COMP%]{min-height:100vh;margin-left:-15rem;transition:margin .25s ease-out}@media (min-width:768px){.sidebar-wrapper[_ngcontent-%COMP%]{margin-left:0}}.sidebar-heading[_ngcontent-%COMP%]{padding:.875rem 1.25rem;font-size:1.2rem}.sidebar-item[_ngcontent-%COMP%]{background-color:#dae0e5;width:15rem}.sidebar-item--active[_ngcontent-%COMP%]{background-color:#071a83;color:#fff;font-weight:700;letter-spacing:.5px}.page-content-wrapper[_ngcontent-%COMP%]{min-width:100vw;background-color:#efefef}@media (min-width:768px){.page-content-wrapper[_ngcontent-%COMP%]{min-width:0;width:100%}}.wrapper--toggled[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]{margin-left:0}@media (min-width:768px){.wrapper--toggled[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]{margin-left:-15rem}}"]
      }), t
    })(), CC = (() => {
      class t {
      }

      return t.\u0275mod = ge({type: t, bootstrap: [TC]}), t.\u0275inj = ut({
        factory: function (e) {
          return new (e || t)
        }, providers: [], imports: [[Iu, ef, SC, Rb]]
      }), t
    })();
    (function () {
      if (mi) throw new Error("Cannot enable prod mode after platform setup.");
      gi = !1
    })(), Ru().bootstrapModule(CC).catch(t => console.error(t))
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
