var Qv = { exports: {} }, pp = {};
var C2;
function gT() {
  if (C2) return pp;
  C2 = 1;
  var J = Symbol.for("react.transitional.element"), ne = Symbol.for("react.fragment");
  function $e(H, ze, Ye) {
    var gt = null;
    if (Ye !== void 0 && (gt = "" + Ye), ze.key !== void 0 && (gt = "" + ze.key), "key" in ze) {
      Ye = {};
      for (var ee in ze)
        ee !== "key" && (Ye[ee] = ze[ee]);
    } else Ye = ze;
    return ze = Ye.ref, {
      $$typeof: J,
      type: H,
      key: gt,
      ref: ze !== void 0 ? ze : null,
      props: Ye
    };
  }
  return pp.Fragment = ne, pp.jsx = $e, pp.jsxs = $e, pp;
}
var gp = {}, Lv = { exports: {} }, Qe = {};
var U2;
function vT() {
  if (U2) return Qe;
  U2 = 1;
  var J = Symbol.for("react.transitional.element"), ne = Symbol.for("react.portal"), $e = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), ze = Symbol.for("react.profiler"), Ye = Symbol.for("react.consumer"), gt = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), k = Symbol.for("react.memo"), He = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), U = Symbol.iterator;
  function ie(S) {
    return S === null || typeof S != "object" ? null : (S = U && S[U] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var Le = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _t = Object.assign, ft = {};
  function lt(S, x, F) {
    this.props = S, this.context = x, this.refs = ft, this.updater = F || Le;
  }
  lt.prototype.isReactComponent = {}, lt.prototype.setState = function(S, x) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, x, "setState");
  }, lt.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Al() {
  }
  Al.prototype = lt.prototype;
  function xt(S, x, F) {
    this.props = S, this.context = x, this.refs = ft, this.updater = F || Le;
  }
  var Kt = xt.prototype = new Al();
  Kt.constructor = xt, _t(Kt, lt.prototype), Kt.isPureReactComponent = !0;
  var tl = Array.isArray;
  function il() {
  }
  var De = { H: null, A: null, T: null, S: null }, Ve = Object.prototype.hasOwnProperty;
  function Dt(S, x, F) {
    var W = F.ref;
    return {
      $$typeof: J,
      type: S,
      key: x,
      ref: W !== void 0 ? W : null,
      props: F
    };
  }
  function se(S, x) {
    return Dt(S.type, x, S.props);
  }
  function Bt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === J;
  }
  function ye(S) {
    var x = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(F) {
      return x[F];
    });
  }
  var je = /\/+/g;
  function Lt(S, x) {
    return typeof S == "object" && S !== null && S.key != null ? ye("" + S.key) : x.toString(36);
  }
  function jt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(il, il) : (S.status = "pending", S.then(
          function(x) {
            S.status === "pending" && (S.status = "fulfilled", S.value = x);
          },
          function(x) {
            S.status === "pending" && (S.status = "rejected", S.reason = x);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function _(S, x, F, W, ve) {
    var qe = typeof S;
    (qe === "undefined" || qe === "boolean") && (S = null);
    var Ee = !1;
    if (S === null) Ee = !0;
    else
      switch (qe) {
        case "bigint":
        case "string":
        case "number":
          Ee = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case J:
            case ne:
              Ee = !0;
              break;
            case He:
              return Ee = S._init, _(
                Ee(S._payload),
                x,
                F,
                W,
                ve
              );
          }
      }
    if (Ee)
      return ve = ve(S), Ee = W === "" ? "." + Lt(S, 0) : W, tl(ve) ? (F = "", Ee != null && (F = Ee.replace(je, "$&/") + "/"), _(ve, x, F, "", function(qa) {
        return qa;
      })) : ve != null && (Bt(ve) && (ve = se(
        ve,
        F + (ve.key == null || S && S.key === ve.key ? "" : ("" + ve.key).replace(
          je,
          "$&/"
        ) + "/") + Ee
      )), x.push(ve)), 1;
    Ee = 0;
    var Vt = W === "" ? "." : W + ":";
    if (tl(S))
      for (var ht = 0; ht < S.length; ht++)
        W = S[ht], qe = Vt + Lt(W, ht), Ee += _(
          W,
          x,
          F,
          qe,
          ve
        );
    else if (ht = ie(S), typeof ht == "function")
      for (S = ht.call(S), ht = 0; !(W = S.next()).done; )
        W = W.value, qe = Vt + Lt(W, ht++), Ee += _(
          W,
          x,
          F,
          qe,
          ve
        );
    else if (qe === "object") {
      if (typeof S.then == "function")
        return _(
          jt(S),
          x,
          F,
          W,
          ve
        );
      throw x = String(S), Error(
        "Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ee;
  }
  function L(S, x, F) {
    if (S == null) return S;
    var W = [], ve = 0;
    return _(S, W, "", "", function(qe) {
      return x.call(F, qe, ve++);
    }), W;
  }
  function P(S) {
    if (S._status === -1) {
      var x = S._result;
      x = x(), x.then(
        function(F) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = F);
        },
        function(F) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = F);
        }
      ), S._status === -1 && (S._status = 0, S._result = x);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var pe = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var x = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(x)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Ae = {
    map: L,
    forEach: function(S, x, F) {
      L(
        S,
        function() {
          x.apply(this, arguments);
        },
        F
      );
    },
    count: function(S) {
      var x = 0;
      return L(S, function() {
        x++;
      }), x;
    },
    toArray: function(S) {
      return L(S, function(x) {
        return x;
      }) || [];
    },
    only: function(S) {
      if (!Bt(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return Qe.Activity = X, Qe.Children = Ae, Qe.Component = lt, Qe.Fragment = $e, Qe.Profiler = ze, Qe.PureComponent = xt, Qe.StrictMode = H, Qe.Suspense = ae, Qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = De, Qe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return De.H.useMemoCache(S);
    }
  }, Qe.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, Qe.cacheSignal = function() {
    return null;
  }, Qe.cloneElement = function(S, x, F) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var W = _t({}, S.props), ve = S.key;
    if (x != null)
      for (qe in x.key !== void 0 && (ve = "" + x.key), x)
        !Ve.call(x, qe) || qe === "key" || qe === "__self" || qe === "__source" || qe === "ref" && x.ref === void 0 || (W[qe] = x[qe]);
    var qe = arguments.length - 2;
    if (qe === 1) W.children = F;
    else if (1 < qe) {
      for (var Ee = Array(qe), Vt = 0; Vt < qe; Vt++)
        Ee[Vt] = arguments[Vt + 2];
      W.children = Ee;
    }
    return Dt(S.type, ve, W);
  }, Qe.createContext = function(S) {
    return S = {
      $$typeof: gt,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: Ye,
      _context: S
    }, S;
  }, Qe.createElement = function(S, x, F) {
    var W, ve = {}, qe = null;
    if (x != null)
      for (W in x.key !== void 0 && (qe = "" + x.key), x)
        Ve.call(x, W) && W !== "key" && W !== "__self" && W !== "__source" && (ve[W] = x[W]);
    var Ee = arguments.length - 2;
    if (Ee === 1) ve.children = F;
    else if (1 < Ee) {
      for (var Vt = Array(Ee), ht = 0; ht < Ee; ht++)
        Vt[ht] = arguments[ht + 2];
      ve.children = Vt;
    }
    if (S && S.defaultProps)
      for (W in Ee = S.defaultProps, Ee)
        ve[W] === void 0 && (ve[W] = Ee[W]);
    return Dt(S, qe, ve);
  }, Qe.createRef = function() {
    return { current: null };
  }, Qe.forwardRef = function(S) {
    return { $$typeof: ee, render: S };
  }, Qe.isValidElement = Bt, Qe.lazy = function(S) {
    return {
      $$typeof: He,
      _payload: { _status: -1, _result: S },
      _init: P
    };
  }, Qe.memo = function(S, x) {
    return {
      $$typeof: k,
      type: S,
      compare: x === void 0 ? null : x
    };
  }, Qe.startTransition = function(S) {
    var x = De.T, F = {};
    De.T = F;
    try {
      var W = S(), ve = De.S;
      ve !== null && ve(F, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(il, pe);
    } catch (qe) {
      pe(qe);
    } finally {
      x !== null && F.types !== null && (x.types = F.types), De.T = x;
    }
  }, Qe.unstable_useCacheRefresh = function() {
    return De.H.useCacheRefresh();
  }, Qe.use = function(S) {
    return De.H.use(S);
  }, Qe.useActionState = function(S, x, F) {
    return De.H.useActionState(S, x, F);
  }, Qe.useCallback = function(S, x) {
    return De.H.useCallback(S, x);
  }, Qe.useContext = function(S) {
    return De.H.useContext(S);
  }, Qe.useDebugValue = function() {
  }, Qe.useDeferredValue = function(S, x) {
    return De.H.useDeferredValue(S, x);
  }, Qe.useEffect = function(S, x) {
    return De.H.useEffect(S, x);
  }, Qe.useEffectEvent = function(S) {
    return De.H.useEffectEvent(S);
  }, Qe.useId = function() {
    return De.H.useId();
  }, Qe.useImperativeHandle = function(S, x, F) {
    return De.H.useImperativeHandle(S, x, F);
  }, Qe.useInsertionEffect = function(S, x) {
    return De.H.useInsertionEffect(S, x);
  }, Qe.useLayoutEffect = function(S, x) {
    return De.H.useLayoutEffect(S, x);
  }, Qe.useMemo = function(S, x) {
    return De.H.useMemo(S, x);
  }, Qe.useOptimistic = function(S, x) {
    return De.H.useOptimistic(S, x);
  }, Qe.useReducer = function(S, x, F) {
    return De.H.useReducer(S, x, F);
  }, Qe.useRef = function(S) {
    return De.H.useRef(S);
  }, Qe.useState = function(S) {
    return De.H.useState(S);
  }, Qe.useSyncExternalStore = function(S, x, F) {
    return De.H.useSyncExternalStore(
      S,
      x,
      F
    );
  }, Qe.useTransition = function() {
    return De.H.useTransition();
  }, Qe.version = "19.2.0", Qe;
}
var bp = { exports: {} };
bp.exports;
var H2;
function ST() {
  return H2 || (H2 = 1, (function(J, ne) {
    process.env.NODE_ENV !== "production" && (function() {
      function $e(g, M) {
        Object.defineProperty(Ye.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              M[0],
              M[1]
            );
          }
        });
      }
      function H(g) {
        return g === null || typeof g != "object" ? null : (g = _i && g[_i] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function ze(g, M) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var I = g + "." + M;
        Ri[I] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          M,
          g
        ), Ri[I] = !0);
      }
      function Ye(g, M, I) {
        this.props = g, this.context = M, this.refs = mt, this.updater = I || Ga;
      }
      function gt() {
      }
      function ee(g, M, I) {
        this.props = g, this.context = M, this.refs = mt, this.updater = I || Ga;
      }
      function ae() {
      }
      function k(g) {
        return "" + g;
      }
      function He(g) {
        try {
          k(g);
          var M = !1;
        } catch {
          M = !0;
        }
        if (M) {
          M = console;
          var I = M.error, te = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return I.call(
            M,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            te
          ), k(g);
        }
      }
      function X(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === rs ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case S:
            return "Fragment";
          case F:
            return "Profiler";
          case x:
            return "StrictMode";
          case Ee:
            return "Suspense";
          case Vt:
            return "SuspenseList";
          case ce:
            return "Activity";
        }
        if (typeof g == "object")
          switch (typeof g.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), g.$$typeof) {
            case Ae:
              return "Portal";
            case ve:
              return g.displayName || "Context";
            case W:
              return (g._context.displayName || "Context") + ".Consumer";
            case qe:
              var M = g.render;
              return g = g.displayName, g || (g = M.displayName || M.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case ht:
              return M = g.displayName || null, M !== null ? M : X(g.type) || "Memo";
            case qa:
              M = g._payload, g = g._init;
              try {
                return X(g(M));
              } catch {
              }
          }
        return null;
      }
      function U(g) {
        if (g === S) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === qa)
          return "<...>";
        try {
          var M = X(g);
          return M ? "<" + M + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ie() {
        var g = re.A;
        return g === null ? null : g.getOwner();
      }
      function Le() {
        return Error("react-stack-top-frame");
      }
      function _t(g) {
        if (Mi.call(g, "key")) {
          var M = Object.getOwnPropertyDescriptor(g, "key").get;
          if (M && M.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function ft(g, M) {
        function I() {
          Sc || (Sc = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            M
          ));
        }
        I.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: I,
          configurable: !0
        });
      }
      function lt() {
        var g = X(this.type);
        return Ir[g] || (Ir[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function Al(g, M, I, te, de, _e) {
        var he = I.ref;
        return g = {
          $$typeof: pe,
          type: g,
          key: M,
          props: I,
          _owner: te
        }, (he !== void 0 ? he : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: lt
        }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(g, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(g, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: de
        }), Object.defineProperty(g, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: _e
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function xt(g, M) {
        return M = Al(
          g.type,
          M,
          g.props,
          g._owner,
          g._debugStack,
          g._debugTask
        ), g._store && (M._store.validated = g._store.validated), M;
      }
      function Kt(g) {
        tl(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === qa && (g._payload.status === "fulfilled" ? tl(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
      }
      function tl(g) {
        return typeof g == "object" && g !== null && g.$$typeof === pe;
      }
      function il(g) {
        var M = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(I) {
          return M[I];
        });
      }
      function De(g, M) {
        return typeof g == "object" && g !== null && g.key != null ? (He(g.key), il("" + g.key)) : M.toString(36);
      }
      function Ve(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(ae, ae) : (g.status = "pending", g.then(
              function(M) {
                g.status === "pending" && (g.status = "fulfilled", g.value = M);
              },
              function(M) {
                g.status === "pending" && (g.status = "rejected", g.reason = M);
              }
            )), g.status) {
              case "fulfilled":
                return g.value;
              case "rejected":
                throw g.reason;
            }
        }
        throw g;
      }
      function Dt(g, M, I, te, de) {
        var _e = typeof g;
        (_e === "undefined" || _e === "boolean") && (g = null);
        var he = !1;
        if (g === null) he = !0;
        else
          switch (_e) {
            case "bigint":
            case "string":
            case "number":
              he = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case pe:
                case Ae:
                  he = !0;
                  break;
                case qa:
                  return he = g._init, Dt(
                    he(g._payload),
                    M,
                    I,
                    te,
                    de
                  );
              }
          }
        if (he) {
          he = g, de = de(he);
          var Pe = te === "" ? "." + De(he, 0) : te;
          return vc(de) ? (I = "", Pe != null && (I = Pe.replace(Pr, "$&/") + "/"), Dt(de, M, I, "", function(ta) {
            return ta;
          })) : de != null && (tl(de) && (de.key != null && (he && he.key === de.key || He(de.key)), I = xt(
            de,
            I + (de.key == null || he && he.key === de.key ? "" : ("" + de.key).replace(
              Pr,
              "$&/"
            ) + "/") + Pe
          ), te !== "" && he != null && tl(he) && he.key == null && he._store && !he._store.validated && (I._store.validated = 2), de = I), M.push(de)), 1;
        }
        if (he = 0, Pe = te === "" ? "." : te + ":", vc(g))
          for (var Ge = 0; Ge < g.length; Ge++)
            te = g[Ge], _e = Pe + De(te, Ge), he += Dt(
              te,
              M,
              I,
              _e,
              de
            );
        else if (Ge = H(g), typeof Ge == "function")
          for (Ge === g.entries && (Cn || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Cn = !0), g = Ge.call(g), Ge = 0; !(te = g.next()).done; )
            te = te.value, _e = Pe + De(te, Ge++), he += Dt(
              te,
              M,
              I,
              _e,
              de
            );
        else if (_e === "object") {
          if (typeof g.then == "function")
            return Dt(
              Ve(g),
              M,
              I,
              te,
              de
            );
          throw M = String(g), Error(
            "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return he;
      }
      function se(g, M, I) {
        if (g == null) return g;
        var te = [], de = 0;
        return Dt(g, te, "", "", function(_e) {
          return M.call(I, _e, de++);
        }), te;
      }
      function Bt(g) {
        if (g._status === -1) {
          var M = g._ioInfo;
          M != null && (M.start = M.end = performance.now()), M = g._result;
          var I = M();
          if (I.then(
            function(de) {
              if (g._status === 0 || g._status === -1) {
                g._status = 1, g._result = de;
                var _e = g._ioInfo;
                _e != null && (_e.end = performance.now()), I.status === void 0 && (I.status = "fulfilled", I.value = de);
              }
            },
            function(de) {
              if (g._status === 0 || g._status === -1) {
                g._status = 2, g._result = de;
                var _e = g._ioInfo;
                _e != null && (_e.end = performance.now()), I.status === void 0 && (I.status = "rejected", I.reason = de);
              }
            }
          ), M = g._ioInfo, M != null) {
            M.value = I;
            var te = I.displayName;
            typeof te == "string" && (M.name = te);
          }
          g._status === -1 && (g._status = 0, g._result = I);
        }
        if (g._status === 1)
          return M = g._result, M === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            M
          ), "default" in M || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            M
          ), M.default;
        throw g._result;
      }
      function ye() {
        var g = re.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function je() {
        re.asyncTransitions--;
      }
      function Lt(g) {
        if (bc === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7);
            bc = (J && J[M]).call(
              J,
              "timers"
            ).setImmediate;
          } catch {
            bc = function(te) {
              ds === !1 && (ds = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var de = new MessageChannel();
              de.port1.onmessage = te, de.port2.postMessage(void 0);
            };
          }
        return bc(g);
      }
      function jt(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function _(g, M) {
        M !== dn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), dn = M;
      }
      function L(g, M, I) {
        var te = re.actQueue;
        if (te !== null)
          if (te.length !== 0)
            try {
              P(te), Lt(function() {
                return L(g, M, I);
              });
              return;
            } catch (de) {
              re.thrownErrors.push(de);
            }
          else re.actQueue = null;
        0 < re.thrownErrors.length ? (te = jt(re.thrownErrors), re.thrownErrors.length = 0, I(te)) : M(g);
      }
      function P(g) {
        if (!wa) {
          wa = !0;
          var M = 0;
          try {
            for (; M < g.length; M++) {
              var I = g[M];
              do {
                re.didUsePromise = !1;
                var te = I(!1);
                if (te !== null) {
                  if (re.didUsePromise) {
                    g[M] = I, g.splice(0, M);
                    return;
                  }
                  I = te;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (de) {
            g.splice(0, M + 1), re.thrownErrors.push(de);
          } finally {
            wa = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var pe = Symbol.for("react.transitional.element"), Ae = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), ve = Symbol.for("react.context"), qe = Symbol.for("react.forward_ref"), Ee = Symbol.for("react.suspense"), Vt = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), qa = Symbol.for("react.lazy"), ce = Symbol.for("react.activity"), _i = Symbol.iterator, Ri = {}, Ga = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(g) {
          ze(g, "forceUpdate");
        },
        enqueueReplaceState: function(g) {
          ze(g, "replaceState");
        },
        enqueueSetState: function(g) {
          ze(g, "setState");
        }
      }, iu = Object.assign, mt = {};
      Object.freeze(mt), Ye.prototype.isReactComponent = {}, Ye.prototype.setState = function(g, M) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, M, "setState");
      }, Ye.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var ea = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Ci in ea)
        ea.hasOwnProperty(Ci) && $e(Ci, ea[Ci]);
      gt.prototype = Ye.prototype, ea = ee.prototype = new gt(), ea.constructor = ee, iu(ea, Ye.prototype), ea.isPureReactComponent = !0;
      var vc = Array.isArray, rs = Symbol.for("react.client.reference"), re = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Mi = Object.prototype.hasOwnProperty, cu = console.createTask ? console.createTask : function() {
        return null;
      };
      ea = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var Sc, vl, Ir = {}, Co = ea.react_stack_bottom_frame.bind(
        ea,
        Le
      )(), Uo = cu(U(Le)), Cn = !1, Pr = /\/+/g, Ho = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var M = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
            error: g
          });
          if (!window.dispatchEvent(M)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      }, ds = !1, bc = null, dn = 0, Ol = !1, wa = !1, Hl = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : Lt;
      ea = Object.freeze({
        __proto__: null,
        c: function(g) {
          return ye().useMemoCache(g);
        }
      });
      var Ci = {
        map: se,
        forEach: function(g, M, I) {
          se(
            g,
            function() {
              M.apply(this, arguments);
            },
            I
          );
        },
        count: function(g) {
          var M = 0;
          return se(g, function() {
            M++;
          }), M;
        },
        toArray: function(g) {
          return se(g, function(M) {
            return M;
          }) || [];
        },
        only: function(g) {
          if (!tl(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      };
      ne.Activity = ce, ne.Children = Ci, ne.Component = Ye, ne.Fragment = S, ne.Profiler = F, ne.PureComponent = ee, ne.StrictMode = x, ne.Suspense = Ee, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = re, ne.__COMPILER_RUNTIME = ea, ne.act = function(g) {
        var M = re.actQueue, I = dn;
        dn++;
        var te = re.actQueue = M !== null ? M : [], de = !1;
        try {
          var _e = g();
        } catch (Ge) {
          re.thrownErrors.push(Ge);
        }
        if (0 < re.thrownErrors.length)
          throw _(M, I), g = jt(re.thrownErrors), re.thrownErrors.length = 0, g;
        if (_e !== null && typeof _e == "object" && typeof _e.then == "function") {
          var he = _e;
          return Hl(function() {
            de || Ol || (Ol = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Ge, ta) {
              de = !0, he.then(
                function(hn) {
                  if (_(M, I), I === 0) {
                    try {
                      P(te), Lt(function() {
                        return L(
                          hn,
                          Ge,
                          ta
                        );
                      });
                    } catch (No) {
                      re.thrownErrors.push(No);
                    }
                    if (0 < re.thrownErrors.length) {
                      var Ui = jt(
                        re.thrownErrors
                      );
                      re.thrownErrors.length = 0, ta(Ui);
                    }
                  } else Ge(hn);
                },
                function(hn) {
                  _(M, I), 0 < re.thrownErrors.length && (hn = jt(
                    re.thrownErrors
                  ), re.thrownErrors.length = 0), ta(hn);
                }
              );
            }
          };
        }
        var Pe = _e;
        if (_(M, I), I === 0 && (P(te), te.length !== 0 && Hl(function() {
          de || Ol || (Ol = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), re.actQueue = null), 0 < re.thrownErrors.length)
          throw g = jt(re.thrownErrors), re.thrownErrors.length = 0, g;
        return {
          then: function(Ge, ta) {
            de = !0, I === 0 ? (re.actQueue = te, Lt(function() {
              return L(
                Pe,
                Ge,
                ta
              );
            })) : Ge(Pe);
          }
        };
      }, ne.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, ne.cacheSignal = function() {
        return null;
      }, ne.captureOwnerStack = function() {
        var g = re.getCurrentStack;
        return g === null ? null : g();
      }, ne.cloneElement = function(g, M, I) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var te = iu({}, g.props), de = g.key, _e = g._owner;
        if (M != null) {
          var he;
          e: {
            if (Mi.call(M, "ref") && (he = Object.getOwnPropertyDescriptor(
              M,
              "ref"
            ).get) && he.isReactWarning) {
              he = !1;
              break e;
            }
            he = M.ref !== void 0;
          }
          he && (_e = ie()), _t(M) && (He(M.key), de = "" + M.key);
          for (Pe in M)
            !Mi.call(M, Pe) || Pe === "key" || Pe === "__self" || Pe === "__source" || Pe === "ref" && M.ref === void 0 || (te[Pe] = M[Pe]);
        }
        var Pe = arguments.length - 2;
        if (Pe === 1) te.children = I;
        else if (1 < Pe) {
          he = Array(Pe);
          for (var Ge = 0; Ge < Pe; Ge++)
            he[Ge] = arguments[Ge + 2];
          te.children = he;
        }
        for (te = Al(
          g.type,
          de,
          te,
          _e,
          g._debugStack,
          g._debugTask
        ), de = 2; de < arguments.length; de++)
          Kt(arguments[de]);
        return te;
      }, ne.createContext = function(g) {
        return g = {
          $$typeof: ve,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: W,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, ne.createElement = function(g, M, I) {
        for (var te = 2; te < arguments.length; te++)
          Kt(arguments[te]);
        te = {};
        var de = null;
        if (M != null)
          for (Ge in vl || !("__self" in M) || "key" in M || (vl = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), _t(M) && (He(M.key), de = "" + M.key), M)
            Mi.call(M, Ge) && Ge !== "key" && Ge !== "__self" && Ge !== "__source" && (te[Ge] = M[Ge]);
        var _e = arguments.length - 2;
        if (_e === 1) te.children = I;
        else if (1 < _e) {
          for (var he = Array(_e), Pe = 0; Pe < _e; Pe++)
            he[Pe] = arguments[Pe + 2];
          Object.freeze && Object.freeze(he), te.children = he;
        }
        if (g && g.defaultProps)
          for (Ge in _e = g.defaultProps, _e)
            te[Ge] === void 0 && (te[Ge] = _e[Ge]);
        de && ft(
          te,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var Ge = 1e4 > re.recentlyCreatedOwnerStacks++;
        return Al(
          g,
          de,
          te,
          ie(),
          Ge ? Error("react-stack-top-frame") : Co,
          Ge ? cu(U(g)) : Uo
        );
      }, ne.createRef = function() {
        var g = { current: null };
        return Object.seal(g), g;
      }, ne.forwardRef = function(g) {
        g != null && g.$$typeof === ht ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof g != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          g === null ? "null" : typeof g
        ) : g.length !== 0 && g.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), g != null && g.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var M = { $$typeof: qe, render: g }, I;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(te) {
            I = te, g.name || g.displayName || (Object.defineProperty(g, "name", { value: te }), g.displayName = te);
          }
        }), M;
      }, ne.isValidElement = tl, ne.lazy = function(g) {
        g = { _status: -1, _result: g };
        var M = {
          $$typeof: qa,
          _payload: g,
          _init: Bt
        }, I = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return g._ioInfo = I, M._debugInfo = [{ awaited: I }], M;
      }, ne.memo = function(g, M) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), M = {
          $$typeof: ht,
          type: g,
          compare: M === void 0 ? null : M
        };
        var I;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(te) {
            I = te, g.name || g.displayName || (Object.defineProperty(g, "name", { value: te }), g.displayName = te);
          }
        }), M;
      }, ne.startTransition = function(g) {
        var M = re.T, I = {};
        I._updatedFibers = /* @__PURE__ */ new Set(), re.T = I;
        try {
          var te = g(), de = re.S;
          de !== null && de(I, te), typeof te == "object" && te !== null && typeof te.then == "function" && (re.asyncTransitions++, te.then(je, je), te.then(ae, Ho));
        } catch (_e) {
          Ho(_e);
        } finally {
          M === null && I._updatedFibers && (g = I._updatedFibers.size, I._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), M !== null && I.types !== null && (M.types !== null && M.types !== I.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), M.types = I.types), re.T = M;
        }
      }, ne.unstable_useCacheRefresh = function() {
        return ye().useCacheRefresh();
      }, ne.use = function(g) {
        return ye().use(g);
      }, ne.useActionState = function(g, M, I) {
        return ye().useActionState(
          g,
          M,
          I
        );
      }, ne.useCallback = function(g, M) {
        return ye().useCallback(g, M);
      }, ne.useContext = function(g) {
        var M = ye();
        return g.$$typeof === W && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), M.useContext(g);
      }, ne.useDebugValue = function(g, M) {
        return ye().useDebugValue(g, M);
      }, ne.useDeferredValue = function(g, M) {
        return ye().useDeferredValue(g, M);
      }, ne.useEffect = function(g, M) {
        return g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ye().useEffect(g, M);
      }, ne.useEffectEvent = function(g) {
        return ye().useEffectEvent(g);
      }, ne.useId = function() {
        return ye().useId();
      }, ne.useImperativeHandle = function(g, M, I) {
        return ye().useImperativeHandle(g, M, I);
      }, ne.useInsertionEffect = function(g, M) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ye().useInsertionEffect(g, M);
      }, ne.useLayoutEffect = function(g, M) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ye().useLayoutEffect(g, M);
      }, ne.useMemo = function(g, M) {
        return ye().useMemo(g, M);
      }, ne.useOptimistic = function(g, M) {
        return ye().useOptimistic(g, M);
      }, ne.useReducer = function(g, M, I) {
        return ye().useReducer(g, M, I);
      }, ne.useRef = function(g) {
        return ye().useRef(g);
      }, ne.useState = function(g) {
        return ye().useState(g);
      }, ne.useSyncExternalStore = function(g, M, I) {
        return ye().useSyncExternalStore(
          g,
          M,
          I
        );
      }, ne.useTransition = function() {
        return ye().useTransition();
      }, ne.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(bp, bp.exports)), bp.exports;
}
var N2;
function bm() {
  return N2 || (N2 = 1, process.env.NODE_ENV === "production" ? Lv.exports = vT() : Lv.exports = ST()), Lv.exports;
}
var x2;
function bT() {
  return x2 || (x2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function J(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === Bt ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case ft:
          return "Fragment";
        case Al:
          return "Profiler";
        case lt:
          return "StrictMode";
        case il:
          return "Suspense";
        case De:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case _t:
            return "Portal";
          case Kt:
            return S.displayName || "Context";
          case xt:
            return (S._context.displayName || "Context") + ".Consumer";
          case tl:
            var x = S.render;
            return S = S.displayName, S || (S = x.displayName || x.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case Ve:
            return x = S.displayName || null, x !== null ? x : J(S.type) || "Memo";
          case Dt:
            x = S._payload, S = S._init;
            try {
              return J(S(x));
            } catch {
            }
        }
      return null;
    }
    function ne(S) {
      return "" + S;
    }
    function $e(S) {
      try {
        ne(S);
        var x = !1;
      } catch {
        x = !0;
      }
      if (x) {
        x = console;
        var F = x.error, W = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return F.call(
          x,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), ne(S);
      }
    }
    function H(S) {
      if (S === ft) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === Dt)
        return "<...>";
      try {
        var x = J(S);
        return x ? "<" + x + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function ze() {
      var S = ye.A;
      return S === null ? null : S.getOwner();
    }
    function Ye() {
      return Error("react-stack-top-frame");
    }
    function gt(S) {
      if (je.call(S, "key")) {
        var x = Object.getOwnPropertyDescriptor(S, "key").get;
        if (x && x.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function ee(S, x) {
      function F() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          x
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: F,
        configurable: !0
      });
    }
    function ae() {
      var S = J(this.type);
      return L[S] || (L[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function k(S, x, F, W, ve, qe) {
      var Ee = F.ref;
      return S = {
        $$typeof: Le,
        type: S,
        key: x,
        props: F,
        _owner: W
      }, (Ee !== void 0 ? Ee : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: ae
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ve
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: qe
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function He(S, x, F, W, ve, qe) {
      var Ee = x.children;
      if (Ee !== void 0)
        if (W)
          if (Lt(Ee)) {
            for (W = 0; W < Ee.length; W++)
              X(Ee[W]);
            Object.freeze && Object.freeze(Ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else X(Ee);
      if (je.call(x, "key")) {
        Ee = J(S);
        var Vt = Object.keys(x).filter(function(qa) {
          return qa !== "key";
        });
        W = 0 < Vt.length ? "{key: someKey, " + Vt.join(": ..., ") + ": ...}" : "{key: someKey}", Ae[Ee + W] || (Vt = 0 < Vt.length ? "{" + Vt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          Ee,
          Vt,
          Ee
        ), Ae[Ee + W] = !0);
      }
      if (Ee = null, F !== void 0 && ($e(F), Ee = "" + F), gt(x) && ($e(x.key), Ee = "" + x.key), "key" in x) {
        F = {};
        for (var ht in x)
          ht !== "key" && (F[ht] = x[ht]);
      } else F = x;
      return Ee && ee(
        F,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), k(
        S,
        Ee,
        F,
        ze(),
        ve,
        qe
      );
    }
    function X(S) {
      U(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === Dt && (S._payload.status === "fulfilled" ? U(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function U(S) {
      return typeof S == "object" && S !== null && S.$$typeof === Le;
    }
    var ie = bm(), Le = Symbol.for("react.transitional.element"), _t = Symbol.for("react.portal"), ft = Symbol.for("react.fragment"), lt = Symbol.for("react.strict_mode"), Al = Symbol.for("react.profiler"), xt = Symbol.for("react.consumer"), Kt = Symbol.for("react.context"), tl = Symbol.for("react.forward_ref"), il = Symbol.for("react.suspense"), De = Symbol.for("react.suspense_list"), Ve = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), Bt = Symbol.for("react.client.reference"), ye = ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, je = Object.prototype.hasOwnProperty, Lt = Array.isArray, jt = console.createTask ? console.createTask : function() {
      return null;
    };
    ie = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var _, L = {}, P = ie.react_stack_bottom_frame.bind(
      ie,
      Ye
    )(), pe = jt(H(Ye)), Ae = {};
    gp.Fragment = ft, gp.jsx = function(S, x, F) {
      var W = 1e4 > ye.recentlyCreatedOwnerStacks++;
      return He(
        S,
        x,
        F,
        !1,
        W ? Error("react-stack-top-frame") : P,
        W ? jt(H(S)) : pe
      );
    }, gp.jsxs = function(S, x, F) {
      var W = 1e4 > ye.recentlyCreatedOwnerStacks++;
      return He(
        S,
        x,
        F,
        !0,
        W ? Error("react-stack-top-frame") : P,
        W ? jt(H(S)) : pe
      );
    };
  })()), gp;
}
var B2;
function ET() {
  return B2 || (B2 = 1, process.env.NODE_ENV === "production" ? Qv.exports = gT() : Qv.exports = bT()), Qv.exports;
}
var Qt = ET(), Sm = bm(), Vv = { exports: {} }, vp = {}, Zv = { exports: {} }, v1 = {};
var j2;
function TT() {
  return j2 || (j2 = 1, (function(J) {
    function ne(_, L) {
      var P = _.length;
      _.push(L);
      e: for (; 0 < P; ) {
        var pe = P - 1 >>> 1, Ae = _[pe];
        if (0 < ze(Ae, L))
          _[pe] = L, _[P] = Ae, P = pe;
        else break e;
      }
    }
    function $e(_) {
      return _.length === 0 ? null : _[0];
    }
    function H(_) {
      if (_.length === 0) return null;
      var L = _[0], P = _.pop();
      if (P !== L) {
        _[0] = P;
        e: for (var pe = 0, Ae = _.length, S = Ae >>> 1; pe < S; ) {
          var x = 2 * (pe + 1) - 1, F = _[x], W = x + 1, ve = _[W];
          if (0 > ze(F, P))
            W < Ae && 0 > ze(ve, F) ? (_[pe] = ve, _[W] = P, pe = W) : (_[pe] = F, _[x] = P, pe = x);
          else if (W < Ae && 0 > ze(ve, P))
            _[pe] = ve, _[W] = P, pe = W;
          else break e;
        }
      }
      return L;
    }
    function ze(_, L) {
      var P = _.sortIndex - L.sortIndex;
      return P !== 0 ? P : _.id - L.id;
    }
    if (J.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Ye = performance;
      J.unstable_now = function() {
        return Ye.now();
      };
    } else {
      var gt = Date, ee = gt.now();
      J.unstable_now = function() {
        return gt.now() - ee;
      };
    }
    var ae = [], k = [], He = 1, X = null, U = 3, ie = !1, Le = !1, _t = !1, ft = !1, lt = typeof setTimeout == "function" ? setTimeout : null, Al = typeof clearTimeout == "function" ? clearTimeout : null, xt = typeof setImmediate < "u" ? setImmediate : null;
    function Kt(_) {
      for (var L = $e(k); L !== null; ) {
        if (L.callback === null) H(k);
        else if (L.startTime <= _)
          H(k), L.sortIndex = L.expirationTime, ne(ae, L);
        else break;
        L = $e(k);
      }
    }
    function tl(_) {
      if (_t = !1, Kt(_), !Le)
        if ($e(ae) !== null)
          Le = !0, il || (il = !0, ye());
        else {
          var L = $e(k);
          L !== null && jt(tl, L.startTime - _);
        }
    }
    var il = !1, De = -1, Ve = 5, Dt = -1;
    function se() {
      return ft ? !0 : !(J.unstable_now() - Dt < Ve);
    }
    function Bt() {
      if (ft = !1, il) {
        var _ = J.unstable_now();
        Dt = _;
        var L = !0;
        try {
          e: {
            Le = !1, _t && (_t = !1, Al(De), De = -1), ie = !0;
            var P = U;
            try {
              t: {
                for (Kt(_), X = $e(ae); X !== null && !(X.expirationTime > _ && se()); ) {
                  var pe = X.callback;
                  if (typeof pe == "function") {
                    X.callback = null, U = X.priorityLevel;
                    var Ae = pe(
                      X.expirationTime <= _
                    );
                    if (_ = J.unstable_now(), typeof Ae == "function") {
                      X.callback = Ae, Kt(_), L = !0;
                      break t;
                    }
                    X === $e(ae) && H(ae), Kt(_);
                  } else H(ae);
                  X = $e(ae);
                }
                if (X !== null) L = !0;
                else {
                  var S = $e(k);
                  S !== null && jt(
                    tl,
                    S.startTime - _
                  ), L = !1;
                }
              }
              break e;
            } finally {
              X = null, U = P, ie = !1;
            }
            L = void 0;
          }
        } finally {
          L ? ye() : il = !1;
        }
      }
    }
    var ye;
    if (typeof xt == "function")
      ye = function() {
        xt(Bt);
      };
    else if (typeof MessageChannel < "u") {
      var je = new MessageChannel(), Lt = je.port2;
      je.port1.onmessage = Bt, ye = function() {
        Lt.postMessage(null);
      };
    } else
      ye = function() {
        lt(Bt, 0);
      };
    function jt(_, L) {
      De = lt(function() {
        _(J.unstable_now());
      }, L);
    }
    J.unstable_IdlePriority = 5, J.unstable_ImmediatePriority = 1, J.unstable_LowPriority = 4, J.unstable_NormalPriority = 3, J.unstable_Profiling = null, J.unstable_UserBlockingPriority = 2, J.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, J.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ve = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, J.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, J.unstable_next = function(_) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = U;
      }
      var P = U;
      U = L;
      try {
        return _();
      } finally {
        U = P;
      }
    }, J.unstable_requestPaint = function() {
      ft = !0;
    }, J.unstable_runWithPriority = function(_, L) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var P = U;
      U = _;
      try {
        return L();
      } finally {
        U = P;
      }
    }, J.unstable_scheduleCallback = function(_, L, P) {
      var pe = J.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? pe + P : pe) : P = pe, _) {
        case 1:
          var Ae = -1;
          break;
        case 2:
          Ae = 250;
          break;
        case 5:
          Ae = 1073741823;
          break;
        case 4:
          Ae = 1e4;
          break;
        default:
          Ae = 5e3;
      }
      return Ae = P + Ae, _ = {
        id: He++,
        callback: L,
        priorityLevel: _,
        startTime: P,
        expirationTime: Ae,
        sortIndex: -1
      }, P > pe ? (_.sortIndex = P, ne(k, _), $e(ae) === null && _ === $e(k) && (_t ? (Al(De), De = -1) : _t = !0, jt(tl, P - pe))) : (_.sortIndex = Ae, ne(ae, _), Le || ie || (Le = !0, il || (il = !0, ye()))), _;
    }, J.unstable_shouldYield = se, J.unstable_wrapCallback = function(_) {
      var L = U;
      return function() {
        var P = U;
        U = L;
        try {
          return _.apply(this, arguments);
        } finally {
          U = P;
        }
      };
    };
  })(v1)), v1;
}
var S1 = {};
var Y2;
function AT() {
  return Y2 || (Y2 = 1, (function(J) {
    process.env.NODE_ENV !== "production" && (function() {
      function ne() {
        if (tl = !1, Dt) {
          var _ = J.unstable_now();
          ye = _;
          var L = !0;
          try {
            e: {
              xt = !1, Kt && (Kt = !1, De(se), se = -1), Al = !0;
              var P = lt;
              try {
                t: {
                  for (gt(_), ft = H(ie); ft !== null && !(ft.expirationTime > _ && ae()); ) {
                    var pe = ft.callback;
                    if (typeof pe == "function") {
                      ft.callback = null, lt = ft.priorityLevel;
                      var Ae = pe(
                        ft.expirationTime <= _
                      );
                      if (_ = J.unstable_now(), typeof Ae == "function") {
                        ft.callback = Ae, gt(_), L = !0;
                        break t;
                      }
                      ft === H(ie) && ze(ie), gt(_);
                    } else ze(ie);
                    ft = H(ie);
                  }
                  if (ft !== null) L = !0;
                  else {
                    var S = H(Le);
                    S !== null && k(
                      ee,
                      S.startTime - _
                    ), L = !1;
                  }
                }
                break e;
              } finally {
                ft = null, lt = P, Al = !1;
              }
              L = void 0;
            }
          } finally {
            L ? je() : Dt = !1;
          }
        }
      }
      function $e(_, L) {
        var P = _.length;
        _.push(L);
        e: for (; 0 < P; ) {
          var pe = P - 1 >>> 1, Ae = _[pe];
          if (0 < Ye(Ae, L))
            _[pe] = L, _[P] = Ae, P = pe;
          else break e;
        }
      }
      function H(_) {
        return _.length === 0 ? null : _[0];
      }
      function ze(_) {
        if (_.length === 0) return null;
        var L = _[0], P = _.pop();
        if (P !== L) {
          _[0] = P;
          e: for (var pe = 0, Ae = _.length, S = Ae >>> 1; pe < S; ) {
            var x = 2 * (pe + 1) - 1, F = _[x], W = x + 1, ve = _[W];
            if (0 > Ye(F, P))
              W < Ae && 0 > Ye(ve, F) ? (_[pe] = ve, _[W] = P, pe = W) : (_[pe] = F, _[x] = P, pe = x);
            else if (W < Ae && 0 > Ye(ve, P))
              _[pe] = ve, _[W] = P, pe = W;
            else break e;
          }
        }
        return L;
      }
      function Ye(_, L) {
        var P = _.sortIndex - L.sortIndex;
        return P !== 0 ? P : _.id - L.id;
      }
      function gt(_) {
        for (var L = H(Le); L !== null; ) {
          if (L.callback === null) ze(Le);
          else if (L.startTime <= _)
            ze(Le), L.sortIndex = L.expirationTime, $e(ie, L);
          else break;
          L = H(Le);
        }
      }
      function ee(_) {
        if (Kt = !1, gt(_), !xt)
          if (H(ie) !== null)
            xt = !0, Dt || (Dt = !0, je());
          else {
            var L = H(Le);
            L !== null && k(
              ee,
              L.startTime - _
            );
          }
      }
      function ae() {
        return tl ? !0 : !(J.unstable_now() - ye < Bt);
      }
      function k(_, L) {
        se = il(function() {
          _(J.unstable_now());
        }, L);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), J.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var He = performance;
        J.unstable_now = function() {
          return He.now();
        };
      } else {
        var X = Date, U = X.now();
        J.unstable_now = function() {
          return X.now() - U;
        };
      }
      var ie = [], Le = [], _t = 1, ft = null, lt = 3, Al = !1, xt = !1, Kt = !1, tl = !1, il = typeof setTimeout == "function" ? setTimeout : null, De = typeof clearTimeout == "function" ? clearTimeout : null, Ve = typeof setImmediate < "u" ? setImmediate : null, Dt = !1, se = -1, Bt = 5, ye = -1;
      if (typeof Ve == "function")
        var je = function() {
          Ve(ne);
        };
      else if (typeof MessageChannel < "u") {
        var Lt = new MessageChannel(), jt = Lt.port2;
        Lt.port1.onmessage = ne, je = function() {
          jt.postMessage(null);
        };
      } else
        je = function() {
          il(ne, 0);
        };
      J.unstable_IdlePriority = 5, J.unstable_ImmediatePriority = 1, J.unstable_LowPriority = 4, J.unstable_NormalPriority = 3, J.unstable_Profiling = null, J.unstable_UserBlockingPriority = 2, J.unstable_cancelCallback = function(_) {
        _.callback = null;
      }, J.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Bt = 0 < _ ? Math.floor(1e3 / _) : 5;
      }, J.unstable_getCurrentPriorityLevel = function() {
        return lt;
      }, J.unstable_next = function(_) {
        switch (lt) {
          case 1:
          case 2:
          case 3:
            var L = 3;
            break;
          default:
            L = lt;
        }
        var P = lt;
        lt = L;
        try {
          return _();
        } finally {
          lt = P;
        }
      }, J.unstable_requestPaint = function() {
        tl = !0;
      }, J.unstable_runWithPriority = function(_, L) {
        switch (_) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            _ = 3;
        }
        var P = lt;
        lt = _;
        try {
          return L();
        } finally {
          lt = P;
        }
      }, J.unstable_scheduleCallback = function(_, L, P) {
        var pe = J.unstable_now();
        switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? pe + P : pe) : P = pe, _) {
          case 1:
            var Ae = -1;
            break;
          case 2:
            Ae = 250;
            break;
          case 5:
            Ae = 1073741823;
            break;
          case 4:
            Ae = 1e4;
            break;
          default:
            Ae = 5e3;
        }
        return Ae = P + Ae, _ = {
          id: _t++,
          callback: L,
          priorityLevel: _,
          startTime: P,
          expirationTime: Ae,
          sortIndex: -1
        }, P > pe ? (_.sortIndex = P, $e(Le, _), H(ie) === null && _ === H(Le) && (Kt ? (De(se), se = -1) : Kt = !0, k(ee, P - pe))) : (_.sortIndex = Ae, $e(ie, _), xt || Al || (xt = !0, Dt || (Dt = !0, je()))), _;
      }, J.unstable_shouldYield = ae, J.unstable_wrapCallback = function(_) {
        var L = lt;
        return function() {
          var P = lt;
          lt = L;
          try {
            return _.apply(this, arguments);
          } finally {
            lt = P;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(S1)), S1;
}
var q2;
function J2() {
  return q2 || (q2 = 1, process.env.NODE_ENV === "production" ? Zv.exports = TT() : Zv.exports = AT()), Zv.exports;
}
var Jv = { exports: {} }, ja = {};
var G2;
function OT() {
  if (G2) return ja;
  G2 = 1;
  var J = bm();
  function ne(ae) {
    var k = "https://react.dev/errors/" + ae;
    if (1 < arguments.length) {
      k += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var He = 2; He < arguments.length; He++)
        k += "&args[]=" + encodeURIComponent(arguments[He]);
    }
    return "Minified React error #" + ae + "; visit " + k + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function $e() {
  }
  var H = {
    d: {
      f: $e,
      r: function() {
        throw Error(ne(522));
      },
      D: $e,
      C: $e,
      L: $e,
      m: $e,
      X: $e,
      S: $e,
      M: $e
    },
    p: 0,
    findDOMNode: null
  }, ze = Symbol.for("react.portal");
  function Ye(ae, k, He) {
    var X = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ze,
      key: X == null ? null : "" + X,
      children: ae,
      containerInfo: k,
      implementation: He
    };
  }
  var gt = J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ee(ae, k) {
    if (ae === "font") return "";
    if (typeof k == "string")
      return k === "use-credentials" ? k : "";
  }
  return ja.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = H, ja.createPortal = function(ae, k) {
    var He = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!k || k.nodeType !== 1 && k.nodeType !== 9 && k.nodeType !== 11)
      throw Error(ne(299));
    return Ye(ae, k, null, He);
  }, ja.flushSync = function(ae) {
    var k = gt.T, He = H.p;
    try {
      if (gt.T = null, H.p = 2, ae) return ae();
    } finally {
      gt.T = k, H.p = He, H.d.f();
    }
  }, ja.preconnect = function(ae, k) {
    typeof ae == "string" && (k ? (k = k.crossOrigin, k = typeof k == "string" ? k === "use-credentials" ? k : "" : void 0) : k = null, H.d.C(ae, k));
  }, ja.prefetchDNS = function(ae) {
    typeof ae == "string" && H.d.D(ae);
  }, ja.preinit = function(ae, k) {
    if (typeof ae == "string" && k && typeof k.as == "string") {
      var He = k.as, X = ee(He, k.crossOrigin), U = typeof k.integrity == "string" ? k.integrity : void 0, ie = typeof k.fetchPriority == "string" ? k.fetchPriority : void 0;
      He === "style" ? H.d.S(
        ae,
        typeof k.precedence == "string" ? k.precedence : void 0,
        {
          crossOrigin: X,
          integrity: U,
          fetchPriority: ie
        }
      ) : He === "script" && H.d.X(ae, {
        crossOrigin: X,
        integrity: U,
        fetchPriority: ie,
        nonce: typeof k.nonce == "string" ? k.nonce : void 0
      });
    }
  }, ja.preinitModule = function(ae, k) {
    if (typeof ae == "string")
      if (typeof k == "object" && k !== null) {
        if (k.as == null || k.as === "script") {
          var He = ee(
            k.as,
            k.crossOrigin
          );
          H.d.M(ae, {
            crossOrigin: He,
            integrity: typeof k.integrity == "string" ? k.integrity : void 0,
            nonce: typeof k.nonce == "string" ? k.nonce : void 0
          });
        }
      } else k == null && H.d.M(ae);
  }, ja.preload = function(ae, k) {
    if (typeof ae == "string" && typeof k == "object" && k !== null && typeof k.as == "string") {
      var He = k.as, X = ee(He, k.crossOrigin);
      H.d.L(ae, He, {
        crossOrigin: X,
        integrity: typeof k.integrity == "string" ? k.integrity : void 0,
        nonce: typeof k.nonce == "string" ? k.nonce : void 0,
        type: typeof k.type == "string" ? k.type : void 0,
        fetchPriority: typeof k.fetchPriority == "string" ? k.fetchPriority : void 0,
        referrerPolicy: typeof k.referrerPolicy == "string" ? k.referrerPolicy : void 0,
        imageSrcSet: typeof k.imageSrcSet == "string" ? k.imageSrcSet : void 0,
        imageSizes: typeof k.imageSizes == "string" ? k.imageSizes : void 0,
        media: typeof k.media == "string" ? k.media : void 0
      });
    }
  }, ja.preloadModule = function(ae, k) {
    if (typeof ae == "string")
      if (k) {
        var He = ee(k.as, k.crossOrigin);
        H.d.m(ae, {
          as: typeof k.as == "string" && k.as !== "script" ? k.as : void 0,
          crossOrigin: He,
          integrity: typeof k.integrity == "string" ? k.integrity : void 0
        });
      } else H.d.m(ae);
  }, ja.requestFormReset = function(ae) {
    H.d.r(ae);
  }, ja.unstable_batchedUpdates = function(ae, k) {
    return ae(k);
  }, ja.useFormState = function(ae, k, He) {
    return gt.H.useFormState(ae, k, He);
  }, ja.useFormStatus = function() {
    return gt.H.useHostTransitionStatus();
  }, ja.version = "19.2.0", ja;
}
var Ya = {};
var w2;
function zT() {
  return w2 || (w2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function J() {
    }
    function ne(X) {
      return "" + X;
    }
    function $e(X, U, ie) {
      var Le = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        ne(Le);
        var _t = !1;
      } catch {
        _t = !0;
      }
      return _t && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && Le[Symbol.toStringTag] || Le.constructor.name || "Object"
      ), ne(Le)), {
        $$typeof: k,
        key: Le == null ? null : "" + Le,
        children: X,
        containerInfo: U,
        implementation: ie
      };
    }
    function H(X, U) {
      if (X === "font") return "";
      if (typeof U == "string")
        return U === "use-credentials" ? U : "";
    }
    function ze(X) {
      return X === null ? "`null`" : X === void 0 ? "`undefined`" : X === "" ? "an empty string" : 'something with type "' + typeof X + '"';
    }
    function Ye(X) {
      return X === null ? "`null`" : X === void 0 ? "`undefined`" : X === "" ? "an empty string" : typeof X == "string" ? JSON.stringify(X) : typeof X == "number" ? "`" + X + "`" : 'something with type "' + typeof X + '"';
    }
    function gt() {
      var X = He.H;
      return X === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), X;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var ee = bm(), ae = {
      d: {
        f: J,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: J,
        C: J,
        L: J,
        m: J,
        X: J,
        S: J,
        M: J
      },
      p: 0,
      findDOMNode: null
    }, k = Symbol.for("react.portal"), He = ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Ya.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ae, Ya.createPortal = function(X, U) {
      var ie = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!U || U.nodeType !== 1 && U.nodeType !== 9 && U.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return $e(X, U, null, ie);
    }, Ya.flushSync = function(X) {
      var U = He.T, ie = ae.p;
      try {
        if (He.T = null, ae.p = 2, X)
          return X();
      } finally {
        He.T = U, ae.p = ie, ae.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Ya.preconnect = function(X, U) {
      typeof X == "string" && X ? U != null && typeof U != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        Ye(U)
      ) : U != null && typeof U.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        ze(U.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ze(X)
      ), typeof X == "string" && (U ? (U = U.crossOrigin, U = typeof U == "string" ? U === "use-credentials" ? U : "" : void 0) : U = null, ae.d.C(X, U));
    }, Ya.prefetchDNS = function(X) {
      if (typeof X != "string" || !X)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          ze(X)
        );
      else if (1 < arguments.length) {
        var U = arguments[1];
        typeof U == "object" && U.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Ye(U)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Ye(U)
        );
      }
      typeof X == "string" && ae.d.D(X);
    }, Ya.preinit = function(X, U) {
      if (typeof X == "string" && X ? U == null || typeof U != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        Ye(U)
      ) : U.as !== "style" && U.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        Ye(U.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ze(X)
      ), typeof X == "string" && U && typeof U.as == "string") {
        var ie = U.as, Le = H(ie, U.crossOrigin), _t = typeof U.integrity == "string" ? U.integrity : void 0, ft = typeof U.fetchPriority == "string" ? U.fetchPriority : void 0;
        ie === "style" ? ae.d.S(
          X,
          typeof U.precedence == "string" ? U.precedence : void 0,
          {
            crossOrigin: Le,
            integrity: _t,
            fetchPriority: ft
          }
        ) : ie === "script" && ae.d.X(X, {
          crossOrigin: Le,
          integrity: _t,
          fetchPriority: ft,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0
        });
      }
    }, Ya.preinitModule = function(X, U) {
      var ie = "";
      if (typeof X == "string" && X || (ie += " The `href` argument encountered was " + ze(X) + "."), U !== void 0 && typeof U != "object" ? ie += " The `options` argument encountered was " + ze(U) + "." : U && "as" in U && U.as !== "script" && (ie += " The `as` option encountered was " + Ye(U.as) + "."), ie)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          ie
        );
      else
        switch (ie = U && typeof U.as == "string" ? U.as : "script", ie) {
          case "script":
            break;
          default:
            ie = Ye(ie), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              ie,
              X
            );
        }
      typeof X == "string" && (typeof U == "object" && U !== null ? (U.as == null || U.as === "script") && (ie = H(
        U.as,
        U.crossOrigin
      ), ae.d.M(X, {
        crossOrigin: ie,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0,
        nonce: typeof U.nonce == "string" ? U.nonce : void 0
      })) : U == null && ae.d.M(X));
    }, Ya.preload = function(X, U) {
      var ie = "";
      if (typeof X == "string" && X || (ie += " The `href` argument encountered was " + ze(X) + "."), U == null || typeof U != "object" ? ie += " The `options` argument encountered was " + ze(U) + "." : typeof U.as == "string" && U.as || (ie += " The `as` option encountered was " + ze(U.as) + "."), ie && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ie
      ), typeof X == "string" && typeof U == "object" && U !== null && typeof U.as == "string") {
        ie = U.as;
        var Le = H(
          ie,
          U.crossOrigin
        );
        ae.d.L(X, ie, {
          crossOrigin: Le,
          integrity: typeof U.integrity == "string" ? U.integrity : void 0,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0,
          type: typeof U.type == "string" ? U.type : void 0,
          fetchPriority: typeof U.fetchPriority == "string" ? U.fetchPriority : void 0,
          referrerPolicy: typeof U.referrerPolicy == "string" ? U.referrerPolicy : void 0,
          imageSrcSet: typeof U.imageSrcSet == "string" ? U.imageSrcSet : void 0,
          imageSizes: typeof U.imageSizes == "string" ? U.imageSizes : void 0,
          media: typeof U.media == "string" ? U.media : void 0
        });
      }
    }, Ya.preloadModule = function(X, U) {
      var ie = "";
      typeof X == "string" && X || (ie += " The `href` argument encountered was " + ze(X) + "."), U !== void 0 && typeof U != "object" ? ie += " The `options` argument encountered was " + ze(U) + "." : U && "as" in U && typeof U.as != "string" && (ie += " The `as` option encountered was " + ze(U.as) + "."), ie && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ie
      ), typeof X == "string" && (U ? (ie = H(
        U.as,
        U.crossOrigin
      ), ae.d.m(X, {
        as: typeof U.as == "string" && U.as !== "script" ? U.as : void 0,
        crossOrigin: ie,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0
      })) : ae.d.m(X));
    }, Ya.requestFormReset = function(X) {
      ae.d.r(X);
    }, Ya.unstable_batchedUpdates = function(X, U) {
      return X(U);
    }, Ya.useFormState = function(X, U, ie) {
      return gt().useFormState(X, U, ie);
    }, Ya.useFormStatus = function() {
      return gt().useHostTransitionStatus();
    }, Ya.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Ya;
}
var X2;
function K2() {
  if (X2) return Jv.exports;
  X2 = 1;
  function J() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J);
      } catch (ne) {
        console.error(ne);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (J(), Jv.exports = OT()) : Jv.exports = zT(), Jv.exports;
}
var Q2;
function DT() {
  if (Q2) return vp;
  Q2 = 1;
  var J = J2(), ne = bm(), $e = K2();
  function H(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ze(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Ye(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function gt(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ee(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ae(l) {
    if (Ye(l) !== l)
      throw Error(H(188));
  }
  function k(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Ye(l), n === null) throw Error(H(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return ae(s), l;
          if (r === c) return ae(s), n;
          r = r.sibling;
        }
        throw Error(H(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, v = s.child; v; ) {
          if (v === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (v === c) {
            m = !0, c = s, u = r;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = r.child; v; ) {
            if (v === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (v === c) {
              m = !0, c = r, u = s;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(H(189));
        }
      }
      if (u.alternate !== c) throw Error(H(190));
    }
    if (u.tag !== 3) throw Error(H(188));
    return u.stateNode.current === u ? l : n;
  }
  function He(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = He(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var X = Object.assign, U = Symbol.for("react.element"), ie = Symbol.for("react.transitional.element"), Le = Symbol.for("react.portal"), _t = Symbol.for("react.fragment"), ft = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), Al = Symbol.for("react.consumer"), xt = Symbol.for("react.context"), Kt = Symbol.for("react.forward_ref"), tl = Symbol.for("react.suspense"), il = Symbol.for("react.suspense_list"), De = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), Dt = Symbol.for("react.activity"), se = Symbol.for("react.memo_cache_sentinel"), Bt = Symbol.iterator;
  function ye(l) {
    return l === null || typeof l != "object" ? null : (l = Bt && l[Bt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var je = Symbol.for("react.client.reference");
  function Lt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === je ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case _t:
        return "Fragment";
      case lt:
        return "Profiler";
      case ft:
        return "StrictMode";
      case tl:
        return "Suspense";
      case il:
        return "SuspenseList";
      case Dt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Le:
          return "Portal";
        case xt:
          return l.displayName || "Context";
        case Al:
          return (l._context.displayName || "Context") + ".Consumer";
        case Kt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case De:
          return n = l.displayName || null, n !== null ? n : Lt(l.type) || "Memo";
        case Ve:
          n = l._payload, l = l._init;
          try {
            return Lt(l(n));
          } catch {
          }
      }
    return null;
  }
  var jt = Array.isArray, _ = ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pe = [], Ae = -1;
  function S(l) {
    return { current: l };
  }
  function x(l) {
    0 > Ae || (l.current = pe[Ae], pe[Ae] = null, Ae--);
  }
  function F(l, n) {
    Ae++, pe[Ae] = l.current, l.current = n;
  }
  var W = S(null), ve = S(null), qe = S(null), Ee = S(null);
  function Vt(l, n) {
    switch (F(qe, n), F(ve, l), F(W, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Ng(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Ng(n), l = r0(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    x(W), F(W, l);
  }
  function ht() {
    x(W), x(ve), x(qe);
  }
  function qa(l) {
    l.memoizedState !== null && F(Ee, l);
    var n = W.current, u = r0(n, l.type);
    n !== u && (F(ve, l), F(W, u));
  }
  function ce(l) {
    ve.current === l && (x(W), x(ve)), Ee.current === l && (x(Ee), zr._currentValue = P);
  }
  var _i, Ri;
  function Ga(l) {
    if (_i === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        _i = n && n[1] || "", Ri = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + _i + l + Ri;
  }
  var iu = !1;
  function mt(l, n) {
    if (!l || iu) return "";
    iu = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var K = function() {
                throw Error();
              };
              if (Object.defineProperty(K.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(K, []);
                } catch (w) {
                  var j = w;
                }
                Reflect.construct(l, [], K);
              } else {
                try {
                  K.call();
                } catch (w) {
                  j = w;
                }
                l.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                j = w;
              }
              (K = l()) && typeof K.catch == "function" && K.catch(function() {
              });
            }
          } catch (w) {
            if (w && j && typeof w.stack == "string")
              return [w.stack, j.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], v = r[1];
      if (m && v) {
        var A = m.split(`
`), B = v.split(`
`);
        for (s = c = 0; c < A.length && !A[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < B.length && !B[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === A.length || s === B.length)
          for (c = A.length - 1, s = B.length - 1; 1 <= c && 0 <= s && A[c] !== B[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (A[c] !== B[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || A[c] !== B[s]) {
                  var Q = `
` + A[c].replace(" at new ", " at ");
                  return l.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", l.displayName)), Q;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      iu = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Ga(u) : "";
  }
  function ea(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ga(l.type);
      case 16:
        return Ga("Lazy");
      case 13:
        return l.child !== n && n !== null ? Ga("Suspense Fallback") : Ga("Suspense");
      case 19:
        return Ga("SuspenseList");
      case 0:
      case 15:
        return mt(l.type, !1);
      case 11:
        return mt(l.type.render, !1);
      case 1:
        return mt(l.type, !0);
      case 31:
        return Ga("Activity");
      default:
        return "";
    }
  }
  function vc(l) {
    try {
      var n = "", u = null;
      do
        n += ea(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var rs = Object.prototype.hasOwnProperty, re = J.unstable_scheduleCallback, Mi = J.unstable_cancelCallback, cu = J.unstable_shouldYield, Sc = J.unstable_requestPaint, vl = J.unstable_now, Ir = J.unstable_getCurrentPriorityLevel, Co = J.unstable_ImmediatePriority, Uo = J.unstable_UserBlockingPriority, Cn = J.unstable_NormalPriority, Pr = J.unstable_LowPriority, Ho = J.unstable_IdlePriority, ds = J.log, bc = J.unstable_setDisableYieldValue, dn = null, Ol = null;
  function wa(l) {
    if (typeof ds == "function" && bc(l), Ol && typeof Ol.setStrictMode == "function")
      try {
        Ol.setStrictMode(dn, l);
      } catch {
      }
  }
  var Hl = Math.clz32 ? Math.clz32 : M, Ci = Math.log, g = Math.LN2;
  function M(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ci(l) / g | 0) | 0;
  }
  var I = 256, te = 262144, de = 4194304;
  function _e(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function he(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var v = c & 134217727;
    return v !== 0 ? (c = v & ~r, c !== 0 ? s = _e(c) : (m &= v, m !== 0 ? s = _e(m) : u || (u = v & ~l, u !== 0 && (s = _e(u))))) : (v = c & ~r, v !== 0 ? s = _e(v) : m !== 0 ? s = _e(m) : u || (u = c & ~l, u !== 0 && (s = _e(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function Pe(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Ge(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ta() {
    var l = de;
    return de <<= 1, (de & 62914560) === 0 && (de = 4194304), l;
  }
  function hn(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Ui(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function No(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, A = l.expirationTimes, B = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var Q = 31 - Hl(u), K = 1 << Q;
      v[Q] = 0, A[Q] = -1;
      var j = B[Q];
      if (j !== null)
        for (B[Q] = null, Q = 0; Q < j.length; Q++) {
          var w = j[Q];
          w !== null && (w.lane &= -536870913);
        }
      u &= ~K;
    }
    c !== 0 && hs(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function hs(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Hl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function ou(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Hl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function Xa(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : ed(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function ed(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Em(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function td() {
    var l = L.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Dr(l.type));
  }
  function Tm(l, n) {
    var u = L.p;
    try {
      return L.p = l, n();
    } finally {
      L.p = u;
    }
  }
  var Un = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + Un, sa = "__reactProps$" + Un, Hi = "__reactContainer$" + Un, ld = "__reactEvents$" + Un, Am = "__reactListeners$" + Un, Ep = "__reactHandles$" + Un, Om = "__reactResources$" + Un, fu = "__reactMarker$" + Un;
  function ad(l) {
    delete l[Rt], delete l[sa], delete l[ld], delete l[Am], delete l[Ep];
  }
  function Ec(l) {
    var n = l[Rt];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Hi] || u[Rt]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = In(l); l !== null; ) {
            if (u = l[Rt]) return u;
            l = In(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Tc(l) {
    if (l = l[Rt] || l[Hi]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function xo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(H(33));
  }
  function Ac(l) {
    var n = l[Om];
    return n || (n = l[Om] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Et(l) {
    l[fu] = !0;
  }
  var Oc = /* @__PURE__ */ new Set(), Ni = {};
  function xi(l, n) {
    su(l, n), su(l + "Capture", n);
  }
  function su(l, n) {
    for (Ni[l] = n, l = 0; l < n.length; l++)
      Oc.add(n[l]);
  }
  var nd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ud = {}, Bo = {};
  function jo(l) {
    return rs.call(Bo, l) ? !0 : rs.call(ud, l) ? !1 : nd.test(l) ? Bo[l] = !0 : (ud[l] = !0, !1);
  }
  function Yo(l, n, u) {
    if (jo(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function id(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Iu(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function Qa(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function cd(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function zm(l, n, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var s = c.get, r = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function od(l) {
    if (!l._valueTracker) {
      var n = cd(l) ? "checked" : "value";
      l._valueTracker = zm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function Dm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = cd(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function ms(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Kv = /[\n"\\]/g;
  function La(l) {
    return l.replace(
      Kv,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ys(l, n, u, c, s, r, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Qa(n)) : l.value !== "" + Qa(n) && (l.value = "" + Qa(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? zc(l, m, Qa(n)) : u != null ? zc(l, m, Qa(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Qa(v) : l.removeAttribute("name");
  }
  function ps(l, n, u, c, s, r, m, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        od(l);
        return;
      }
      u = u != null ? "" + Qa(u) : "", n = n != null ? "" + Qa(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = v ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), od(l);
  }
  function zc(l, n, u) {
    n === "number" && ms(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function qo(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Qa(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function _m(l, n, u) {
    if (n != null && (n = "" + Qa(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Qa(u) : "";
  }
  function Rm(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(H(92));
        if (jt(c)) {
          if (1 < c.length) throw Error(H(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Qa(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), od(l);
  }
  function ru(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Tp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ap(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Tp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Op(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(H(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && Ap(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && Ap(l, r, n[r]);
  }
  function Mm(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var $v = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), gs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mn(l) {
    return gs.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Hn() {
  }
  var fd = null;
  function sd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var du = null, Dc = null;
  function vs(l) {
    var n = Tc(l);
    if (n && (l = n.stateNode)) {
      var u = l[sa] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (ys(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + La(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[sa] || null;
                if (!s) throw Error(H(90));
                ys(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Dm(c);
          }
          break e;
        case "textarea":
          _m(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && qo(l, !!u.multiple, n, !1);
      }
    }
  }
  var Go = !1;
  function Cm(l, n, u) {
    if (Go) return l(n, u);
    Go = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Go = !1, (du !== null || Dc !== null) && (Tf(), du && (n = du, l = Dc, Dc = du = null, vs(n), l)))
        for (n = 0; n < l.length; n++) vs(l[n]);
    }
  }
  function Nl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[sa] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        H(231, n, typeof u)
      );
    return u;
  }
  var Pu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ss = !1;
  if (Pu)
    try {
      var wo = {};
      Object.defineProperty(wo, "passive", {
        get: function() {
          Ss = !0;
        }
      }), window.addEventListener("test", wo, wo), window.removeEventListener("test", wo, wo);
    } catch {
      Ss = !1;
    }
  var ei = null, Um = null, rd = null;
  function Hm() {
    if (rd) return rd;
    var l, n = Um, u = n.length, c, s = "value" in ei ? ei.value : ei.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return rd = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function dd(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function bs() {
    return !0;
  }
  function zp() {
    return !1;
  }
  function $l(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? bs : zp, this.isPropagationStopped = zp, this;
    }
    return X(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = bs);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = bs);
      },
      persist: function() {
      },
      isPersistent: bs
    }), n;
  }
  var Bi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Es = $l(Bi), Xo = X({}, Bi, { view: 0, detail: 0 }), kv = $l(Xo), Nm, xm, Ts, hd = X({}, Xo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: yn,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ts && (Ts && l.type === "mousemove" ? (Nm = l.screenX - Ts.screenX, xm = l.screenY - Ts.screenY) : xm = Nm = 0, Ts = l), Nm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : xm;
    }
  }), Qo = $l(hd), Dp = X({}, hd, { dataTransfer: 0 }), _p = $l(Dp), Rp = X({}, Xo, { relatedTarget: 0 }), md = $l(Rp), Bm = X({}, Bi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Mp = $l(Bm), _c = X({}, Bi, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Rc = $l(_c), Nn = X({}, Bi, { data: 0 }), Cp = $l(Nn), jm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, hu = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Up = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function xn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Up[l]) ? !!n[l] : !1;
  }
  function yn() {
    return xn;
  }
  var yd = X({}, Xo, {
    key: function(l) {
      if (l.key) {
        var n = jm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = dd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? hu[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yn,
    charCode: function(l) {
      return l.type === "keypress" ? dd(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? dd(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), pd = $l(yd), Ym = X({}, hd, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Bn = $l(Ym), Wv = X({}, Xo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yn
  }), Hp = $l(Wv), Np = X({}, Bi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fv = $l(Np), qm = X({}, hd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Iv = $l(qm), xp = X({}, Bi, {
    newState: 0,
    oldState: 0
  }), Gm = $l(xp), gd = [9, 13, 27, 32], Lo = Pu && "CompositionEvent" in window, Mc = null;
  Pu && "documentMode" in document && (Mc = document.documentMode);
  var la = Pu && "TextEvent" in window && !Mc, wm = Pu && (!Lo || Mc && 8 < Mc && 11 >= Mc), As = " ", ji = !1;
  function vd(l, n) {
    switch (l) {
      case "keyup":
        return gd.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Xm(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Cc = !1;
  function Bp(l, n) {
    switch (l) {
      case "compositionend":
        return Xm(n);
      case "keypress":
        return n.which !== 32 ? null : (ji = !0, As);
      case "textInput":
        return l = n.data, l === As && ji ? null : l;
      default:
        return null;
    }
  }
  function Pv(l, n) {
    if (Cc)
      return l === "compositionend" || !Lo && vd(l, n) ? (l = Hm(), rd = Um = ei = null, Cc = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return wm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Qm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function mu(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Qm[l.type] : n === "textarea";
  }
  function Lm(l, n, u, c) {
    du ? Dc ? Dc.push(c) : Dc = [c] : du = c, n = Sr(n, "onChange"), 0 < n.length && (u = new Es(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Uc = null, Yi = null;
  function Hc(l) {
    Cg(l, 0);
  }
  function Vo(l) {
    var n = xo(l);
    if (Dm(n)) return l;
  }
  function Vm(l, n) {
    if (l === "change") return n;
  }
  var Sd = !1;
  if (Pu) {
    var ra;
    if (Pu) {
      var jn = "oninput" in document;
      if (!jn) {
        var Zm = document.createElement("div");
        Zm.setAttribute("oninput", "return;"), jn = typeof Zm.oninput == "function";
      }
      ra = jn;
    } else ra = !1;
    Sd = ra && (!document.documentMode || 9 < document.documentMode);
  }
  function bd() {
    Uc && (Uc.detachEvent("onpropertychange", Ed), Yi = Uc = null);
  }
  function Ed(l) {
    if (l.propertyName === "value" && Vo(Yi)) {
      var n = [];
      Lm(
        n,
        Yi,
        l,
        sd(l)
      ), Cm(Hc, n);
    }
  }
  function jp(l, n, u) {
    l === "focusin" ? (bd(), Uc = n, Yi = u, Uc.attachEvent("onpropertychange", Ed)) : l === "focusout" && bd();
  }
  function Yp(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Vo(Yi);
  }
  function qi(l, n) {
    if (l === "click") return Vo(n);
  }
  function Nc(l, n) {
    if (l === "input" || l === "change")
      return Vo(n);
  }
  function qp(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var aa = typeof Object.is == "function" ? Object.is : qp;
  function pn(l, n) {
    if (aa(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!rs.call(n, s) || !aa(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Jm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Km(l, n) {
    var u = Jm(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Jm(u);
    }
  }
  function xc(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? xc(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Gi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = ms(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = ms(l.document);
    }
    return n;
  }
  function Os(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var zs = Pu && "documentMode" in document && 11 >= document.documentMode, wi = null, Zo = null, gn = null, Yn = !1;
  function Td(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Yn || wi == null || wi !== ms(c) || (c = wi, "selectionStart" in c && Os(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), gn && pn(gn, c) || (gn = c, c = Sr(Zo, "onSelect"), 0 < c.length && (n = new Es(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = wi)));
  }
  function ti(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var qn = {
    animationend: ti("Animation", "AnimationEnd"),
    animationiteration: ti("Animation", "AnimationIteration"),
    animationstart: ti("Animation", "AnimationStart"),
    transitionrun: ti("Transition", "TransitionRun"),
    transitionstart: ti("Transition", "TransitionStart"),
    transitioncancel: ti("Transition", "TransitionCancel"),
    transitionend: ti("Transition", "TransitionEnd")
  }, Jo = {}, Xi = {};
  Pu && (Xi = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
  function vt(l) {
    if (Jo[l]) return Jo[l];
    if (!qn[l]) return l;
    var n = qn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Xi)
        return Jo[l] = n[u];
    return l;
  }
  var Ds = vt("animationend"), $m = vt("animationiteration"), Ad = vt("animationstart"), Bc = vt("transitionrun"), _s = vt("transitionstart"), yu = vt("transitioncancel"), Gp = vt("transitionend"), pu = /* @__PURE__ */ new Map(), Ko = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ko.push("scrollEnd");
  function da(l, n) {
    pu.set(l, n), xi(n, [l]);
  }
  var jc = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, $t = [], xl = 0, vn = 0;
  function Va() {
    for (var l = xl, n = vn = xl = 0; n < l; ) {
      var u = $t[n];
      $t[n++] = null;
      var c = $t[n];
      $t[n++] = null;
      var s = $t[n];
      $t[n++] = null;
      var r = $t[n];
      if ($t[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && Od(u, s, r);
    }
  }
  function Za(l, n, u, c) {
    $t[xl++] = l, $t[xl++] = n, $t[xl++] = u, $t[xl++] = c, vn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Sn(l, n, u, c) {
    return Za(l, n, u, c), Rs(l);
  }
  function li(l, n) {
    return Za(l, null, null, n), Rs(l);
  }
  function Od(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Hl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Rs(l) {
    if (50 < Ef)
      throw Ef = 0, sr = null, Error(H(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ha = {};
  function wp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function cl(l, n, u, c) {
    return new wp(l, n, u, c);
  }
  function Yc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ai(l, n) {
    var u = l.alternate;
    return u === null ? (u = cl(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function km(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function zd(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") Yc(l) && (m = 1);
    else if (typeof l == "string")
      m = v0(
        l,
        u,
        W.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Dt:
          return l = cl(31, u, n, s), l.elementType = Dt, l.lanes = r, l;
        case _t:
          return ni(u.children, s, r, n);
        case ft:
          m = 8, s |= 24;
          break;
        case lt:
          return l = cl(12, u, n, s | 2), l.elementType = lt, l.lanes = r, l;
        case tl:
          return l = cl(13, u, n, s), l.elementType = tl, l.lanes = r, l;
        case il:
          return l = cl(19, u, n, s), l.elementType = il, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case xt:
                m = 10;
                break e;
              case Al:
                m = 9;
                break e;
              case Kt:
                m = 11;
                break e;
              case De:
                m = 14;
                break e;
              case Ve:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            H(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = cl(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function ni(l, n, u, c) {
    return l = cl(7, l, c, n), l.lanes = u, l;
  }
  function $o(l, n, u) {
    return l = cl(6, l, null, n), l.lanes = u, l;
  }
  function Wm(l) {
    var n = cl(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Dd(l, n, u) {
    return n = cl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Fm = /* @__PURE__ */ new WeakMap();
  function Ja(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Fm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: vc(n)
      }, Fm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: vc(n)
    };
  }
  var Ka = [], qc = 0, Ms = null, dl = 0, _a = [], ma = 0, Gn = null, Ra = 1, wn = "";
  function bn(l, n) {
    Ka[qc++] = dl, Ka[qc++] = Ms, Ms = l, dl = n;
  }
  function Im(l, n, u) {
    _a[ma++] = Ra, _a[ma++] = wn, _a[ma++] = Gn, Gn = l;
    var c = Ra;
    l = wn;
    var s = 32 - Hl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Hl(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, Ra = 1 << 32 - Hl(n) + s | u << s | c, wn = r + l;
    } else
      Ra = 1 << r | u << s | c, wn = l;
  }
  function ko(l) {
    l.return !== null && (bn(l, 1), Im(l, 1, 0));
  }
  function _d(l) {
    for (; l === Ms; )
      Ms = Ka[--qc], Ka[qc] = null, dl = Ka[--qc], Ka[qc] = null;
    for (; l === Gn; )
      Gn = _a[--ma], _a[ma] = null, wn = _a[--ma], _a[ma] = null, Ra = _a[--ma], _a[ma] = null;
  }
  function Cs(l, n) {
    _a[ma++] = Ra, _a[ma++] = wn, _a[ma++] = Gn, Ra = n.id, wn = n.overflow, Gn = l;
  }
  var Bl = null, Yt = null, nt = !1, gu = null, zl = !1, vu = Error(H(519));
  function En(l) {
    var n = Error(
      H(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Fo(Ja(n, l)), vu;
  }
  function Us(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[Rt] = l, n[sa] = c, u) {
      case "dialog":
        at("cancel", n), at("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        at("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < _f.length; u++)
          at(_f[u], n);
        break;
      case "source":
        at("error", n);
        break;
      case "img":
      case "image":
      case "link":
        at("error", n), at("load", n);
        break;
      case "details":
        at("toggle", n);
        break;
      case "input":
        at("invalid", n), ps(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        at("invalid", n);
        break;
      case "textarea":
        at("invalid", n), Rm(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || c0(n.textContent, u) ? (c.popover != null && (at("beforetoggle", n), at("toggle", n)), c.onScroll != null && at("scroll", n), c.onScrollEnd != null && at("scrollend", n), c.onClick != null && (n.onclick = Hn), n = !0) : n = !1, n || En(l, !0);
  }
  function Wo(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          zl = !1;
          return;
        case 27:
        case 3:
          zl = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function Su(l) {
    if (l !== Bl) return !1;
    if (!nt) return Wo(l), nt = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Mf(l.type, l.memoizedProps)), u = !u), u && Yt && En(l), Wo(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(H(317));
      Yt = Ch(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(H(317));
      Yt = Ch(l);
    } else
      n === 27 ? (n = Yt, Fn(l.type) ? (l = Tr, Tr = null, Yt = l) : Yt = n) : Yt = Bl ? Oa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Qi() {
    Yt = Bl = null, nt = !1;
  }
  function Pm() {
    var l = gu;
    return l !== null && (nl === null ? nl = l : nl.push.apply(
      nl,
      l
    ), gu = null), l;
  }
  function Fo(l) {
    gu === null ? gu = [l] : gu.push(l);
  }
  var Rd = S(null), ui = null, Xn = null;
  function ya(l, n, u) {
    F(Rd, n._currentValue), n._currentValue = u;
  }
  function Qn(l) {
    l._currentValue = Rd.current, x(Rd);
  }
  function Md(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function bu(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var v = r;
          r = s;
          for (var A = 0; A < n.length; A++)
            if (v.context === n[A]) {
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), Md(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(H(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), Md(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function jl(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(H(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          aa(s.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === Ee.current) {
        if (m = s.alternate, m === null) throw Error(H(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(zr) : l = [zr]);
      }
      s = s.return;
    }
    l !== null && bu(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Gc(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!aa(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ne(l) {
    ui = l, Xn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function $(l) {
    return Hs(ui, l);
  }
  function ii(l, n) {
    return ui === null && Ne(l), Hs(l, n);
  }
  function Hs(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Xn === null) {
      if (l === null) throw Error(H(308));
      Xn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Xn = Xn.next = n;
    return u;
  }
  var ol = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, ey = J.unstable_scheduleCallback, ty = J.unstable_NormalPriority, hl = {
    $$typeof: xt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ns() {
    return {
      controller: new ol(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function xs(l) {
    l.refCount--, l.refCount === 0 && ey(ty, function() {
      l.controller.abort();
    });
  }
  var wc = null, Bs = 0, Li = 0, Sl = null;
  function Tt(l, n) {
    if (wc === null) {
      var u = wc = [];
      Bs = 0, Li = Th(), Sl = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Bs++, n.then(js, js), n;
  }
  function js() {
    if (--Bs === 0 && wc !== null) {
      Sl !== null && (Sl.status = "fulfilled");
      var l = wc;
      wc = null, Li = 0, Sl = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Ys(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var ci = _.S;
  _.S = function(l, n) {
    $y = vl(), typeof n == "object" && n !== null && typeof n.then == "function" && Tt(l, n), ci !== null && ci(l, n);
  };
  var $a = S(null);
  function ka() {
    var l = $a.current;
    return l !== null ? l : Ct.pooledCache;
  }
  function Io(l, n) {
    n === null ? F($a, $a.current) : F($a, n.pool);
  }
  function Xc() {
    var l = ka();
    return l === null ? null : { parent: hl._currentValue, pool: l };
  }
  var Vi = Error(H(460)), Qc = Error(H(474)), Po = Error(H(542)), Lc = { then: function() {
  } };
  function ly(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function ay(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Hn, Hn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Cd(l), l;
      default:
        if (typeof n.status == "string") n.then(Hn, Hn);
        else {
          if (l = Ct, l !== null && 100 < l.shellSuspendCounter)
            throw Error(H(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, Cd(l), l;
        }
        throw Ji = n, Vi;
    }
  }
  function Zi(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Ji = u, Vi) : u;
    }
  }
  var Ji = null;
  function ny() {
    if (Ji === null) throw Error(H(459));
    var l = Ji;
    return Ji = null, l;
  }
  function Cd(l) {
    if (l === Vi || l === Po)
      throw Error(H(483));
  }
  var Ki = null, Vc = 0;
  function qs(l) {
    var n = Vc;
    return Vc += 1, Ki === null && (Ki = []), ay(Ki, l, n);
  }
  function ef(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Gs(l, n) {
    throw n.$$typeof === U ? Error(H(525)) : (l = Object.prototype.toString.call(n), Error(
      H(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Xp(l) {
    function n(C, D) {
      if (l) {
        var N = C.deletions;
        N === null ? (C.deletions = [D], C.flags |= 16) : N.push(D);
      }
    }
    function u(C, D) {
      if (!l) return null;
      for (; D !== null; )
        n(C, D), D = D.sibling;
      return null;
    }
    function c(C) {
      for (var D = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? D.set(C.key, C) : D.set(C.index, C), C = C.sibling;
      return D;
    }
    function s(C, D) {
      return C = ai(C, D), C.index = 0, C.sibling = null, C;
    }
    function r(C, D, N) {
      return C.index = N, l ? (N = C.alternate, N !== null ? (N = N.index, N < D ? (C.flags |= 67108866, D) : N) : (C.flags |= 67108866, D)) : (C.flags |= 1048576, D);
    }
    function m(C) {
      return l && C.alternate === null && (C.flags |= 67108866), C;
    }
    function v(C, D, N, Z) {
      return D === null || D.tag !== 6 ? (D = $o(N, C.mode, Z), D.return = C, D) : (D = s(D, N), D.return = C, D);
    }
    function A(C, D, N, Z) {
      var Se = N.type;
      return Se === _t ? Q(
        C,
        D,
        N.props.children,
        Z,
        N.key
      ) : D !== null && (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Ve && Zi(Se) === D.type) ? (D = s(D, N.props), ef(D, N), D.return = C, D) : (D = zd(
        N.type,
        N.key,
        N.props,
        null,
        C.mode,
        Z
      ), ef(D, N), D.return = C, D);
    }
    function B(C, D, N, Z) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== N.containerInfo || D.stateNode.implementation !== N.implementation ? (D = Dd(N, C.mode, Z), D.return = C, D) : (D = s(D, N.children || []), D.return = C, D);
    }
    function Q(C, D, N, Z, Se) {
      return D === null || D.tag !== 7 ? (D = ni(
        N,
        C.mode,
        Z,
        Se
      ), D.return = C, D) : (D = s(D, N), D.return = C, D);
    }
    function K(C, D, N) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = $o(
          "" + D,
          C.mode,
          N
        ), D.return = C, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ie:
            return N = zd(
              D.type,
              D.key,
              D.props,
              null,
              C.mode,
              N
            ), ef(N, D), N.return = C, N;
          case Le:
            return D = Dd(
              D,
              C.mode,
              N
            ), D.return = C, D;
          case Ve:
            return D = Zi(D), K(C, D, N);
        }
        if (jt(D) || ye(D))
          return D = ni(
            D,
            C.mode,
            N,
            null
          ), D.return = C, D;
        if (typeof D.then == "function")
          return K(C, qs(D), N);
        if (D.$$typeof === xt)
          return K(
            C,
            ii(C, D),
            N
          );
        Gs(C, D);
      }
      return null;
    }
    function j(C, D, N, Z) {
      var Se = D !== null ? D.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return Se !== null ? null : v(C, D, "" + N, Z);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ie:
            return N.key === Se ? A(C, D, N, Z) : null;
          case Le:
            return N.key === Se ? B(C, D, N, Z) : null;
          case Ve:
            return N = Zi(N), j(C, D, N, Z);
        }
        if (jt(N) || ye(N))
          return Se !== null ? null : Q(C, D, N, Z, null);
        if (typeof N.then == "function")
          return j(
            C,
            D,
            qs(N),
            Z
          );
        if (N.$$typeof === xt)
          return j(
            C,
            D,
            ii(C, N),
            Z
          );
        Gs(C, N);
      }
      return null;
    }
    function w(C, D, N, Z, Se) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return C = C.get(N) || null, v(D, C, "" + Z, Se);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case ie:
            return C = C.get(
              Z.key === null ? N : Z.key
            ) || null, A(D, C, Z, Se);
          case Le:
            return C = C.get(
              Z.key === null ? N : Z.key
            ) || null, B(D, C, Z, Se);
          case Ve:
            return Z = Zi(Z), w(
              C,
              D,
              N,
              Z,
              Se
            );
        }
        if (jt(Z) || ye(Z))
          return C = C.get(N) || null, Q(D, C, Z, Se, null);
        if (typeof Z.then == "function")
          return w(
            C,
            D,
            N,
            qs(Z),
            Se
          );
        if (Z.$$typeof === xt)
          return w(
            C,
            D,
            N,
            ii(D, Z),
            Se
          );
        Gs(D, Z);
      }
      return null;
    }
    function fe(C, D, N, Z) {
      for (var Se = null, rt = null, me = D, we = D = 0, Je = null; me !== null && we < N.length; we++) {
        me.index > we ? (Je = me, me = null) : Je = me.sibling;
        var pt = j(
          C,
          me,
          N[we],
          Z
        );
        if (pt === null) {
          me === null && (me = Je);
          break;
        }
        l && me && pt.alternate === null && n(C, me), D = r(pt, D, we), rt === null ? Se = pt : rt.sibling = pt, rt = pt, me = Je;
      }
      if (we === N.length)
        return u(C, me), nt && bn(C, we), Se;
      if (me === null) {
        for (; we < N.length; we++)
          me = K(C, N[we], Z), me !== null && (D = r(
            me,
            D,
            we
          ), rt === null ? Se = me : rt.sibling = me, rt = me);
        return nt && bn(C, we), Se;
      }
      for (me = c(me); we < N.length; we++)
        Je = w(
          me,
          C,
          we,
          N[we],
          Z
        ), Je !== null && (l && Je.alternate !== null && me.delete(
          Je.key === null ? we : Je.key
        ), D = r(
          Je,
          D,
          we
        ), rt === null ? Se = Je : rt.sibling = Je, rt = Je);
      return l && me.forEach(function(eu) {
        return n(C, eu);
      }), nt && bn(C, we), Se;
    }
    function Oe(C, D, N, Z) {
      if (N == null) throw Error(H(151));
      for (var Se = null, rt = null, me = D, we = D = 0, Je = null, pt = N.next(); me !== null && !pt.done; we++, pt = N.next()) {
        me.index > we ? (Je = me, me = null) : Je = me.sibling;
        var eu = j(C, me, pt.value, Z);
        if (eu === null) {
          me === null && (me = Je);
          break;
        }
        l && me && eu.alternate === null && n(C, me), D = r(eu, D, we), rt === null ? Se = eu : rt.sibling = eu, rt = eu, me = Je;
      }
      if (pt.done)
        return u(C, me), nt && bn(C, we), Se;
      if (me === null) {
        for (; !pt.done; we++, pt = N.next())
          pt = K(C, pt.value, Z), pt !== null && (D = r(pt, D, we), rt === null ? Se = pt : rt.sibling = pt, rt = pt);
        return nt && bn(C, we), Se;
      }
      for (me = c(me); !pt.done; we++, pt = N.next())
        pt = w(me, C, we, pt.value, Z), pt !== null && (l && pt.alternate !== null && me.delete(pt.key === null ? we : pt.key), D = r(pt, D, we), rt === null ? Se = pt : rt.sibling = pt, rt = pt);
      return l && me.forEach(function(Zg) {
        return n(C, Zg);
      }), nt && bn(C, we), Se;
    }
    function Ht(C, D, N, Z) {
      if (typeof N == "object" && N !== null && N.type === _t && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ie:
            e: {
              for (var Se = N.key; D !== null; ) {
                if (D.key === Se) {
                  if (Se = N.type, Se === _t) {
                    if (D.tag === 7) {
                      u(
                        C,
                        D.sibling
                      ), Z = s(
                        D,
                        N.props.children
                      ), Z.return = C, C = Z;
                      break e;
                    }
                  } else if (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === Ve && Zi(Se) === D.type) {
                    u(
                      C,
                      D.sibling
                    ), Z = s(D, N.props), ef(Z, N), Z.return = C, C = Z;
                    break e;
                  }
                  u(C, D);
                  break;
                } else n(C, D);
                D = D.sibling;
              }
              N.type === _t ? (Z = ni(
                N.props.children,
                C.mode,
                Z,
                N.key
              ), Z.return = C, C = Z) : (Z = zd(
                N.type,
                N.key,
                N.props,
                null,
                C.mode,
                Z
              ), ef(Z, N), Z.return = C, C = Z);
            }
            return m(C);
          case Le:
            e: {
              for (Se = N.key; D !== null; ) {
                if (D.key === Se)
                  if (D.tag === 4 && D.stateNode.containerInfo === N.containerInfo && D.stateNode.implementation === N.implementation) {
                    u(
                      C,
                      D.sibling
                    ), Z = s(D, N.children || []), Z.return = C, C = Z;
                    break e;
                  } else {
                    u(C, D);
                    break;
                  }
                else n(C, D);
                D = D.sibling;
              }
              Z = Dd(N, C.mode, Z), Z.return = C, C = Z;
            }
            return m(C);
          case Ve:
            return N = Zi(N), Ht(
              C,
              D,
              N,
              Z
            );
        }
        if (jt(N))
          return fe(
            C,
            D,
            N,
            Z
          );
        if (ye(N)) {
          if (Se = ye(N), typeof Se != "function") throw Error(H(150));
          return N = Se.call(N), Oe(
            C,
            D,
            N,
            Z
          );
        }
        if (typeof N.then == "function")
          return Ht(
            C,
            D,
            qs(N),
            Z
          );
        if (N.$$typeof === xt)
          return Ht(
            C,
            D,
            ii(C, N),
            Z
          );
        Gs(C, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, D !== null && D.tag === 6 ? (u(C, D.sibling), Z = s(D, N), Z.return = C, C = Z) : (u(C, D), Z = $o(N, C.mode, Z), Z.return = C, C = Z), m(C)) : u(C, D);
    }
    return function(C, D, N, Z) {
      try {
        Vc = 0;
        var Se = Ht(
          C,
          D,
          N,
          Z
        );
        return Ki = null, Se;
      } catch (me) {
        if (me === Vi || me === Po) throw me;
        var rt = cl(29, me, null, C.mode);
        return rt.lanes = Z, rt.return = C, rt;
      } finally {
      }
    };
  }
  var $i = Xp(!0), uy = Xp(!1), oi = !1;
  function ws(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ud(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function fi(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Wa(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (yt & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Rs(l), Od(l, null, u), n;
    }
    return Za(l, c, n, u), Rs(l);
  }
  function ki(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ou(l, u);
    }
  }
  function Hd(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var iy = !1;
  function Wi() {
    if (iy) {
      var l = Sl;
      if (l !== null) throw l;
    }
  }
  function Eu(l, n, u, c) {
    iy = !1;
    var s = l.updateQueue;
    oi = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var A = v, B = A.next;
      A.next = null, m === null ? r = B : m.next = B, m = A;
      var Q = l.alternate;
      Q !== null && (Q = Q.updateQueue, v = Q.lastBaseUpdate, v !== m && (v === null ? Q.firstBaseUpdate = B : v.next = B, Q.lastBaseUpdate = A));
    }
    if (r !== null) {
      var K = s.baseState;
      m = 0, Q = B = A = null, v = r;
      do {
        var j = v.lane & -536870913, w = j !== v.lane;
        if (w ? (et & j) === j : (c & j) === j) {
          j !== 0 && j === Li && (iy = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var fe = l, Oe = v;
            j = n;
            var Ht = u;
            switch (Oe.tag) {
              case 1:
                if (fe = Oe.payload, typeof fe == "function") {
                  K = fe.call(Ht, K, j);
                  break e;
                }
                K = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = Oe.payload, j = typeof fe == "function" ? fe.call(Ht, K, j) : fe, j == null) break e;
                K = X({}, K, j);
                break e;
              case 2:
                oi = !0;
            }
          }
          j = v.callback, j !== null && (l.flags |= 64, w && (l.flags |= 8192), w = s.callbacks, w === null ? s.callbacks = [j] : w.push(j));
        } else
          w = {
            lane: j,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, Q === null ? (B = Q = w, A = K) : Q = Q.next = w, m |= j;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          w = v, v = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
        }
      } while (!0);
      Q === null && (A = K), s.baseState = A, s.firstBaseUpdate = B, s.lastBaseUpdate = Q, r === null && (s.shared.lanes = 0), kn |= m, l.lanes = m, l.memoizedState = K;
    }
  }
  function Nd(l, n) {
    if (typeof l != "function")
      throw Error(H(191, l));
    l.call(n);
  }
  function Fi(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Nd(u[l], n);
  }
  var Dl = S(null), Zc = S(0);
  function Qp(l, n) {
    l = $n, F(Zc, l), F(Dl, n), $n = l | n.baseLanes;
  }
  function Xs() {
    F(Zc, $n), F(Dl, Dl.current);
  }
  function tf() {
    $n = Zc.current, x(Dl), x(Zc);
  }
  var pa = S(null), Fa = null;
  function Tu(l) {
    var n = l.alternate;
    F(kt, kt.current & 1), F(pa, l), Fa === null && (n === null || Dl.current !== null || n.memoizedState !== null) && (Fa = l);
  }
  function lf(l) {
    F(kt, kt.current), F(pa, l), Fa === null && (Fa = l);
  }
  function xd(l) {
    l.tag === 22 ? (F(kt, kt.current), F(pa, l), Fa === null && (Fa = l)) : Ln();
  }
  function Ln() {
    F(kt, kt.current), F(pa, pa.current);
  }
  function ga(l) {
    x(pa), Fa === l && (Fa = null), x(kt);
  }
  var kt = S(0);
  function af(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || zn(u) || fc(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Au = 0, Xe = null, At = null, ml = null, Jc = !1, Kc = !1, si = !1, Qs = 0, nf = 0, Ii = null, Lp = 0;
  function ll() {
    throw Error(H(321));
  }
  function ri(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!aa(l[u], n[u])) return !1;
    return !0;
  }
  function Ls(l, n, u, c, s, r) {
    return Au = r, Xe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, _.H = l === null || l.memoizedState === null ? Fp : Fd, si = !1, r = u(c, s), si = !1, Kc && (r = Vp(
      n,
      u,
      c,
      s
    )), Bd(l), r;
  }
  function Bd(l) {
    _.H = Is;
    var n = At !== null && At.next !== null;
    if (Au = 0, ml = At = Xe = null, Jc = !1, nf = 0, Ii = null, n) throw Error(H(300));
    l === null || yl || (l = l.dependencies, l !== null && Gc(l) && (yl = !0));
  }
  function Vp(l, n, u, c) {
    Xe = l;
    var s = 0;
    do {
      if (Kc && (Ii = null), nf = 0, Kc = !1, 25 <= s) throw Error(H(301));
      if (s += 1, ml = At = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      _.H = Ip, r = n(u, c);
    } while (Kc);
    return r;
  }
  function eS() {
    var l = _.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? kc(n) : n, l = l.useState()[0], (At !== null ? At.memoizedState : null) !== l && (Xe.flags |= 1024), n;
  }
  function jd() {
    var l = Qs !== 0;
    return Qs = 0, l;
  }
  function $c(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Vs(l) {
    if (Jc) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Jc = !1;
    }
    Au = 0, ml = At = Xe = null, Kc = !1, nf = Qs = 0, Ii = null;
  }
  function Yl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ml === null ? Xe.memoizedState = ml = l : ml = ml.next = l, ml;
  }
  function fl() {
    if (At === null) {
      var l = Xe.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = At.next;
    var n = ml === null ? Xe.memoizedState : ml.next;
    if (n !== null)
      ml = n, At = l;
    else {
      if (l === null)
        throw Xe.alternate === null ? Error(H(467)) : Error(H(310));
      At = l, l = {
        memoizedState: At.memoizedState,
        baseState: At.baseState,
        baseQueue: At.baseQueue,
        queue: At.queue,
        next: null
      }, ml === null ? Xe.memoizedState = ml = l : ml = ml.next = l;
    }
    return ml;
  }
  function Zs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function kc(l) {
    var n = nf;
    return nf += 1, Ii === null && (Ii = []), l = ay(Ii, l, n), n = Xe, (ml === null ? n.memoizedState : ml.next) === null && (n = n.alternate, _.H = n === null || n.memoizedState === null ? Fp : Fd), l;
  }
  function uf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return kc(l);
      if (l.$$typeof === xt) return $(l);
    }
    throw Error(H(438, String(l)));
  }
  function Yd(l) {
    var n = null, u = Xe.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Xe.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Zs(), Xe.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = se;
    return n.index++, u;
  }
  function Ou(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function zu(l) {
    var n = fl();
    return qd(n, At, l);
  }
  function qd(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(H(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var v = m = null, A = null, B = n, Q = !1;
      do {
        var K = B.lane & -536870913;
        if (K !== B.lane ? (et & K) === K : (Au & K) === K) {
          var j = B.revertLane;
          if (j === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }), K === Li && (Q = !0);
          else if ((Au & j) === j) {
            B = B.next, j === Li && (Q = !0);
            continue;
          } else
            K = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, A === null ? (v = A = K, m = r) : A = A.next = K, Xe.lanes |= j, kn |= j;
          K = B.action, si && u(r, K), r = B.hasEagerState ? B.eagerState : u(r, K);
        } else
          j = {
            lane: K,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, A === null ? (v = A = j, m = r) : A = A.next = j, Xe.lanes |= K, kn |= K;
        B = B.next;
      } while (B !== null && B !== n);
      if (A === null ? m = r : A.next = v, !aa(r, l.memoizedState) && (yl = !0, Q && (u = Sl, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = A, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Gd(l) {
    var n = fl(), u = n.queue;
    if (u === null) throw Error(H(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      aa(r, n.memoizedState) || (yl = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function cy(l, n, u) {
    var c = Xe, s = fl(), r = nt;
    if (r) {
      if (u === void 0) throw Error(H(407));
      u = u();
    } else u = n();
    var m = !aa(
      (At || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, yl = !0), s = s.queue, Vd(wd.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || ml !== null && ml.memoizedState.tag & 1) {
      if (c.flags |= 2048, Fc(
        9,
        { destroy: void 0 },
        oy.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Ct === null) throw Error(H(349));
      r || (Au & 127) !== 0 || Js(c, n, u);
    }
    return u;
  }
  function Js(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Xe.updateQueue, n === null ? (n = Zs(), Xe.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function oy(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Xd(n) && Qd(l);
  }
  function wd(l, n, u) {
    return u(function() {
      Xd(n) && Qd(l);
    });
  }
  function Xd(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !aa(l, u);
    } catch {
      return !0;
    }
  }
  function Qd(l) {
    var n = li(l, 2);
    n !== null && Aa(n, l, 2);
  }
  function fy(l) {
    var n = Yl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), si) {
        wa(!0);
        try {
          u();
        } finally {
          wa(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ou,
      lastRenderedState: l
    }, n;
  }
  function ql(l, n, u, c) {
    return l.baseState = u, qd(
      l,
      At,
      typeof c == "function" ? c : Ou
    );
  }
  function Zp(l, n, u, c, s) {
    if (Fs(l)) throw Error(H(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      _.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, sy(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function sy(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = _.T, m = {};
      _.T = m;
      try {
        var v = u(s, c), A = _.S;
        A !== null && A(m, v), ry(l, n, v);
      } catch (B) {
        Wc(l, n, B);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), _.T = r;
      }
    } else
      try {
        r = u(s, c), ry(l, n, r);
      } catch (B) {
        Wc(l, n, B);
      }
  }
  function ry(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        dy(l, n, c);
      },
      function(c) {
        return Wc(l, n, c);
      }
    ) : dy(l, n, u);
  }
  function dy(l, n, u) {
    n.status = "fulfilled", n.value = u, hy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, sy(l, u)));
  }
  function Wc(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, hy(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function hy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Ks(l, n) {
    return n;
  }
  function my(l, n) {
    if (nt) {
      var u = Ct.formState;
      if (u !== null) {
        e: {
          var c = Xe;
          if (nt) {
            if (Yt) {
              t: {
                for (var s = Yt, r = zl; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = Oa(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                Yt = Oa(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            En(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = Yl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ks,
      lastRenderedState: n
    }, u.queue = c, u = kd.bind(
      null,
      Xe,
      c
    ), c.dispatch = u, c = fy(!1), r = Pi.bind(
      null,
      Xe,
      !1,
      c.queue
    ), c = Yl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Zp.bind(
      null,
      Xe,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Jp(l) {
    var n = fl();
    return $s(n, At, l);
  }
  function $s(l, n, u) {
    if (n = qd(
      l,
      n,
      Ks
    )[0], l = zu(Ou)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = kc(n);
      } catch (m) {
        throw m === Vi ? Po : m;
      }
    else c = n;
    n = fl();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Xe.flags |= 2048, Fc(
      9,
      { destroy: void 0 },
      yy.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function yy(l, n) {
    l.action = n;
  }
  function py(l) {
    var n = fl(), u = At;
    if (u !== null)
      return $s(n, u, l);
    fl(), n = n.memoizedState, u = fl();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Fc(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Xe.updateQueue, n === null && (n = Zs(), Xe.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function gy() {
    return fl().memoizedState;
  }
  function cf(l, n, u, c) {
    var s = Yl();
    Xe.flags |= l, s.memoizedState = Fc(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function of(l, n, u, c) {
    var s = fl();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    At !== null && c !== null && ri(c, At.memoizedState.deps) ? s.memoizedState = Fc(n, r, u, c) : (Xe.flags |= l, s.memoizedState = Fc(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Ld(l, n) {
    cf(8390656, 8, l, n);
  }
  function Vd(l, n) {
    of(2048, 8, l, n);
  }
  function vy(l) {
    Xe.flags |= 4;
    var n = Xe.updateQueue;
    if (n === null)
      n = Zs(), Xe.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function ks(l) {
    var n = fl().memoizedState;
    return vy({ ref: n, nextImpl: l }), function() {
      if ((yt & 2) !== 0) throw Error(H(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Zd(l, n) {
    return of(4, 2, l, n);
  }
  function Sy(l, n) {
    return of(4, 4, l, n);
  }
  function Jd(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function by(l, n, u) {
    u = u != null ? u.concat([l]) : null, of(4, 4, Jd.bind(null, n, l), u);
  }
  function Vn() {
  }
  function Kd(l, n) {
    var u = fl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && ri(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function Kp(l, n) {
    var u = fl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && ri(n, c[1]))
      return c[0];
    if (c = l(), si) {
      wa(!0);
      try {
        l();
      } finally {
        wa(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Ws(l, n, u) {
    return u === void 0 || (Au & 1073741824) !== 0 && (et & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = og(), Xe.lanes |= l, kn |= l, u);
  }
  function Du(l, n, u, c) {
    return aa(u, n) ? u : Dl.current !== null ? (l = Ws(l, u, c), aa(l, n) || (yl = !0), l) : (Au & 42) === 0 || (Au & 1073741824) !== 0 && (et & 261930) === 0 ? (yl = !0, l.memoizedState = u) : (l = og(), Xe.lanes |= l, kn |= l, n);
  }
  function $d(l, n, u, c, s) {
    var r = L.p;
    L.p = r !== 0 && 8 > r ? r : 8;
    var m = _.T, v = {};
    _.T = v, Pi(l, !1, n, u);
    try {
      var A = s(), B = _.S;
      if (B !== null && B(v, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var Q = Ys(
          A,
          c
        );
        di(
          l,
          n,
          Q,
          Ha(l)
        );
      } else
        di(
          l,
          n,
          c,
          Ha(l)
        );
    } catch (K) {
      di(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: K },
        Ha()
      );
    } finally {
      L.p = r, m !== null && v.types !== null && (m.types = v.types), _.T = m;
    }
  }
  function $p() {
  }
  function ff(l, n, u, c) {
    if (l.tag !== 5) throw Error(H(476));
    var s = sf(l).queue;
    $d(
      l,
      s,
      n,
      P,
      u === null ? $p : function() {
        return Mt(l), u(c);
      }
    );
  }
  function sf(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ou,
        lastRenderedState: P
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ou,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Mt(l) {
    var n = sf(l);
    n.next === null && (n = l.alternate.memoizedState), di(
      l,
      n.next.queue,
      {},
      Ha()
    );
  }
  function Ey() {
    return $(zr);
  }
  function kp() {
    return fl().memoizedState;
  }
  function Ty() {
    return fl().memoizedState;
  }
  function _u(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Ha();
          l = fi(u);
          var c = Wa(n, l, u);
          c !== null && (Aa(c, n, u), ki(c, n, u)), n = { cache: Ns() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Wp(l, n, u) {
    var c = Ha();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fs(l) ? Wd(n, u) : (u = Sn(l, n, u, c), u !== null && (Aa(u, l, c), Ay(u, n, c)));
  }
  function kd(l, n, u) {
    var c = Ha();
    di(l, n, u, c);
  }
  function di(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Fs(l)) Wd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, v = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = v, aa(v, m))
            return Za(l, n, s, 0), Ct === null && Va(), !1;
        } catch {
        } finally {
        }
      if (u = Sn(l, n, s, c), u !== null)
        return Aa(u, l, c), Ay(u, n, c), !0;
    }
    return !1;
  }
  function Pi(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Th(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fs(l)) {
      if (n) throw Error(H(479));
    } else
      n = Sn(
        l,
        u,
        c,
        2
      ), n !== null && Aa(n, l, 2);
  }
  function Fs(l) {
    var n = l.alternate;
    return l === Xe || n !== null && n === Xe;
  }
  function Wd(l, n) {
    Kc = Jc = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Ay(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ou(l, u);
    }
  }
  var Is = {
    readContext: $,
    use: uf,
    useCallback: ll,
    useContext: ll,
    useEffect: ll,
    useImperativeHandle: ll,
    useLayoutEffect: ll,
    useInsertionEffect: ll,
    useMemo: ll,
    useReducer: ll,
    useRef: ll,
    useState: ll,
    useDebugValue: ll,
    useDeferredValue: ll,
    useTransition: ll,
    useSyncExternalStore: ll,
    useId: ll,
    useHostTransitionStatus: ll,
    useFormState: ll,
    useActionState: ll,
    useOptimistic: ll,
    useMemoCache: ll,
    useCacheRefresh: ll
  };
  Is.useEffectEvent = ll;
  var Fp = {
    readContext: $,
    use: uf,
    useCallback: function(l, n) {
      return Yl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: $,
    useEffect: Ld,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, cf(
        4194308,
        4,
        Jd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return cf(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      cf(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Yl();
      n = n === void 0 ? null : n;
      var c = l();
      if (si) {
        wa(!0);
        try {
          l();
        } finally {
          wa(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = Yl();
      if (u !== void 0) {
        var s = u(n);
        if (si) {
          wa(!0);
          try {
            u(n);
          } finally {
            wa(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = Wp.bind(
        null,
        Xe,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Yl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = fy(l);
      var n = l.queue, u = kd.bind(null, Xe, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Vn,
    useDeferredValue: function(l, n) {
      var u = Yl();
      return Ws(u, l, n);
    },
    useTransition: function() {
      var l = fy(!1);
      return l = $d.bind(
        null,
        Xe,
        l.queue,
        !0,
        !1
      ), Yl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Xe, s = Yl();
      if (nt) {
        if (u === void 0)
          throw Error(H(407));
        u = u();
      } else {
        if (u = n(), Ct === null)
          throw Error(H(349));
        (et & 127) !== 0 || Js(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Ld(wd.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Fc(
        9,
        { destroy: void 0 },
        oy.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Yl(), n = Ct.identifierPrefix;
      if (nt) {
        var u = wn, c = Ra;
        u = (c & ~(1 << 32 - Hl(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Qs++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = Lp++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ey,
    useFormState: my,
    useActionState: my,
    useOptimistic: function(l) {
      var n = Yl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Pi.bind(
        null,
        Xe,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Yd,
    useCacheRefresh: function() {
      return Yl().memoizedState = _u.bind(
        null,
        Xe
      );
    },
    useEffectEvent: function(l) {
      var n = Yl(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((yt & 2) !== 0)
          throw Error(H(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Fd = {
    readContext: $,
    use: uf,
    useCallback: Kd,
    useContext: $,
    useEffect: Vd,
    useImperativeHandle: by,
    useInsertionEffect: Zd,
    useLayoutEffect: Sy,
    useMemo: Kp,
    useReducer: zu,
    useRef: gy,
    useState: function() {
      return zu(Ou);
    },
    useDebugValue: Vn,
    useDeferredValue: function(l, n) {
      var u = fl();
      return Du(
        u,
        At.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = zu(Ou)[0], n = fl().memoizedState;
      return [
        typeof l == "boolean" ? l : kc(l),
        n
      ];
    },
    useSyncExternalStore: cy,
    useId: kp,
    useHostTransitionStatus: Ey,
    useFormState: Jp,
    useActionState: Jp,
    useOptimistic: function(l, n) {
      var u = fl();
      return ql(u, At, l, n);
    },
    useMemoCache: Yd,
    useCacheRefresh: Ty
  };
  Fd.useEffectEvent = ks;
  var Ip = {
    readContext: $,
    use: uf,
    useCallback: Kd,
    useContext: $,
    useEffect: Vd,
    useImperativeHandle: by,
    useInsertionEffect: Zd,
    useLayoutEffect: Sy,
    useMemo: Kp,
    useReducer: Gd,
    useRef: gy,
    useState: function() {
      return Gd(Ou);
    },
    useDebugValue: Vn,
    useDeferredValue: function(l, n) {
      var u = fl();
      return At === null ? Ws(u, l, n) : Du(
        u,
        At.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Gd(Ou)[0], n = fl().memoizedState;
      return [
        typeof l == "boolean" ? l : kc(l),
        n
      ];
    },
    useSyncExternalStore: cy,
    useId: kp,
    useHostTransitionStatus: Ey,
    useFormState: py,
    useActionState: py,
    useOptimistic: function(l, n) {
      var u = fl();
      return At !== null ? ql(u, At, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Yd,
    useCacheRefresh: Ty
  };
  Ip.useEffectEvent = ks;
  function Ic(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : X({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Tn = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ha(), s = fi(c);
      s.payload = n, u != null && (s.callback = u), n = Wa(l, s, c), n !== null && (Aa(n, l, c), ki(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ha(), s = fi(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Wa(l, s, c), n !== null && (Aa(n, l, c), ki(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Ha(), c = fi(u);
      c.tag = 2, n != null && (c.callback = n), n = Wa(l, c, u), n !== null && (Aa(n, l, u), ki(n, l, u));
    }
  };
  function Oy(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !pn(u, c) || !pn(s, r) : !0;
  }
  function Pp(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Tn.enqueueReplaceState(n, n.state, null);
  }
  function ec(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = X({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function Id(l) {
    jc(l);
  }
  function zy(l) {
    console.error(l);
  }
  function Pd(l) {
    jc(l);
  }
  function rf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Ps(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Dy(l, n, u) {
    return u = fi(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      rf(l, n);
    }, u;
  }
  function _y(l) {
    return l = fi(l), l.tag = 3, l;
  }
  function Ry(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        Ps(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Ps(n, u, c), typeof s != "function" && (Wt === null ? Wt = /* @__PURE__ */ new Set([this]) : Wt.add(this));
      var v = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function tS(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && jl(
        n,
        u,
        s,
        !0
      ), u = pa.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Fa === null ? vh() : u.alternate === null && Gt === 0 && (Gt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Lc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), hr(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Lc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), hr(l, c, s)), !1;
        }
        throw Error(H(435, u.tag));
      }
      return hr(l, c, s), vh(), !1;
    }
    if (nt)
      return n = pa.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== vu && (l = Error(H(422), { cause: c }), Fo(Ja(l, u)))) : (c !== vu && (n = Error(H(423), {
        cause: c
      }), Fo(
        Ja(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = Ja(c, u), s = Dy(
        l.stateNode,
        c,
        s
      ), Hd(l, s), Gt !== 4 && (Gt = 2)), !1;
    var r = Error(H(520), { cause: c });
    if (r = Ja(r, u), fr === null ? fr = [r] : fr.push(r), Gt !== 4 && (Gt = 2), n === null) return !0;
    c = Ja(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = Dy(u.stateNode, c, l), Hd(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Wt === null || !Wt.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = _y(s), Ry(
              s,
              l,
              u,
              c
            ), Hd(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var eh = Error(H(461)), yl = !1;
  function Zt(l, n, u, c) {
    n.child = l === null ? uy(n, null, u, c) : $i(
      n,
      l.child,
      u,
      c
    );
  }
  function My(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var v in c)
        v !== "ref" && (m[v] = c[v]);
    } else m = c;
    return Ne(n), c = Ls(
      l,
      n,
      u,
      m,
      r,
      s
    ), v = jd(), l !== null && !yl ? ($c(l, n, s), en(l, n, s)) : (nt && v && ko(n), n.flags |= 1, Zt(l, n, c, s), n.child);
  }
  function Cy(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Yc(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Uy(
        l,
        n,
        r,
        c,
        s
      )) : (l = zd(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !ah(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : pn, u(m, c) && l.ref === n.ref)
        return en(l, n, s);
    }
    return n.flags |= 1, l = ai(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Uy(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (pn(r, c) && l.ref === n.ref)
        if (yl = !1, n.pendingProps = c = r, ah(l, s))
          (l.flags & 131072) !== 0 && (yl = !0);
        else
          return n.lanes = l.lanes, en(l, n, s);
    }
    return th(
      l,
      n,
      u,
      c,
      s
    );
  }
  function eg(l, n, u, c) {
    var s = c.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, s = 0; c !== null; )
            s = s | c.lanes | c.childLanes, c = c.sibling;
          c = s & ~r;
        } else c = 0, n.child = null;
        return va(
          l,
          n,
          r,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Io(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Qp(n, r) : Xs(), xd(n);
      else
        return c = n.lanes = 536870912, va(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          c
        );
    } else
      r !== null ? (Io(n, r.cachePool), Qp(n, r), Ln(), n.memoizedState = null) : (l !== null && Io(n, null), Xs(), Ln());
    return Zt(l, n, s, u), n.child;
  }
  function tc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function va(l, n, u, c, s) {
    var r = ka();
    return r = r === null ? null : { parent: hl._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Io(n, null), Xs(), xd(n), l !== null && jl(l, n, c, !0), n.childLanes = s, null;
  }
  function er(l, n) {
    return n = ar(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Sa(l, n, u) {
    return $i(n, l.child, null, u), l = er(n, n.pendingProps), l.flags |= 2, ga(n), n.memoizedState = null, l;
  }
  function tg(l, n, u) {
    var c = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (nt) {
        if (c.mode === "hidden")
          return l = er(n, c), n.lanes = 536870912, tc(null, l);
        if (lf(n), (l = Yt) ? (l = jg(
          l,
          zl
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Gn !== null ? { id: Ra, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Wm(l), u.return = n, n.child = u, Bl = n, Yt = null)) : l = null, l === null) throw En(n);
        return n.lanes = 536870912, null;
      }
      return er(n, c);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (lf(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = Sa(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(H(558));
      else if (yl || jl(l, n, u, !1), s = (u & l.childLanes) !== 0, yl || s) {
        if (c = Ct, c !== null && (m = Xa(c, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, li(l, m), Aa(c, l, m), eh;
        vh(), n = Sa(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, Yt = Oa(m.nextSibling), Bl = n, nt = !0, gu = null, zl = !1, l !== null && Cs(n, l), n = er(n, c), n.flags |= 4096;
      return n;
    }
    return l = ai(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Ia(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(H(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function th(l, n, u, c, s) {
    return Ne(n), u = Ls(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = jd(), l !== null && !yl ? ($c(l, n, s), en(l, n, s)) : (nt && c && ko(n), n.flags |= 1, Zt(l, n, u, s), n.child);
  }
  function lc(l, n, u, c, s, r) {
    return Ne(n), n.updateQueue = null, u = Vp(
      n,
      c,
      u,
      s
    ), Bd(l), c = jd(), l !== null && !yl ? ($c(l, n, r), en(l, n, r)) : (nt && c && ko(n), n.flags |= 1, Zt(l, n, u, r), n.child);
  }
  function Hy(l, n, u, c, s) {
    if (Ne(n), n.stateNode === null) {
      var r = ha, m = u.contextType;
      typeof m == "object" && m !== null && (r = $(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Tn, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, ws(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? $(m) : ha, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Ic(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && Tn.enqueueReplaceState(r, r.state, null), Eu(n, c, r, s), Wi(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, A = ec(u, v);
      r.props = A;
      var B = r.context, Q = u.contextType;
      m = ha, typeof Q == "object" && Q !== null && (m = $(Q));
      var K = u.getDerivedStateFromProps;
      Q = typeof K == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, Q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || B !== m) && Pp(
        n,
        r,
        c,
        m
      ), oi = !1;
      var j = n.memoizedState;
      r.state = j, Eu(n, c, r, s), Wi(), B = n.memoizedState, v || j !== B || oi ? (typeof K == "function" && (Ic(
        n,
        u,
        K,
        c
      ), B = n.memoizedState), (A = oi || Oy(
        n,
        u,
        A,
        c,
        j,
        B,
        m
      )) ? (Q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = B), r.props = c, r.state = B, r.context = m, c = A) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Ud(l, n), m = n.memoizedProps, Q = ec(u, m), r.props = Q, K = n.pendingProps, j = r.context, B = u.contextType, A = ha, typeof B == "object" && B !== null && (A = $(B)), v = u.getDerivedStateFromProps, (B = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== K || j !== A) && Pp(
        n,
        r,
        c,
        A
      ), oi = !1, j = n.memoizedState, r.state = j, Eu(n, c, r, s), Wi();
      var w = n.memoizedState;
      m !== K || j !== w || oi || l !== null && l.dependencies !== null && Gc(l.dependencies) ? (typeof v == "function" && (Ic(
        n,
        u,
        v,
        c
      ), w = n.memoizedState), (Q = oi || Oy(
        n,
        u,
        Q,
        c,
        j,
        w,
        A
      ) || l !== null && l.dependencies !== null && Gc(l.dependencies)) ? (B || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, w, A), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        w,
        A
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = w), r.props = c, r.state = w, r.context = A, c = Q) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && j === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Ia(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = $i(
      n,
      l.child,
      null,
      s
    ), n.child = $i(
      n,
      null,
      u,
      s
    )) : Zt(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = en(
      l,
      n,
      s
    ), l;
  }
  function Zn(l, n, u, c) {
    return Qi(), n.flags |= 256, Zt(l, n, u, c), n.child;
  }
  var tr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function lr(l) {
    return { baseLanes: l, cachePool: Xc() };
  }
  function Pa(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Ta), l;
  }
  function Ny(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (kt.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (nt) {
        if (s ? Tu(n) : Ln(), (l = Yt) ? (l = jg(
          l,
          zl
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Gn !== null ? { id: Ra, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Wm(l), u.return = n, n.child = u, Bl = n, Yt = null)) : l = null, l === null) throw En(n);
        return fc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = c.children;
      return c = c.fallback, s ? (Ln(), s = n.mode, v = ar(
        { mode: "hidden", children: v },
        s
      ), c = ni(
        c,
        s,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, c = n.child, c.memoizedState = lr(u), c.childLanes = Pa(
        l,
        m,
        u
      ), n.memoizedState = tr, tc(null, c)) : (Tu(n), ac(n, v));
    }
    var A = l.memoizedState;
    if (A !== null && (v = A.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (Tu(n), n.flags &= -257, n = Pc(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Ln(), n.child = l.child, n.flags |= 128, n = null) : (Ln(), v = c.fallback, s = n.mode, c = ar(
          { mode: "visible", children: c.children },
          s
        ), v = ni(
          v,
          s,
          u,
          null
        ), v.flags |= 2, c.return = n, v.return = n, c.sibling = v, n.child = c, $i(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = lr(u), c.childLanes = Pa(
          l,
          m,
          u
        ), n.memoizedState = tr, n = tc(null, c));
      else if (Tu(n), fc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var B = m.dgst;
        m = B, c = Error(H(419)), c.stack = "", c.digest = m, Fo({ value: c, source: null, stack: null }), n = Pc(
          l,
          n,
          u
        );
      } else if (yl || jl(l, n, u, !1), m = (u & l.childLanes) !== 0, yl || m) {
        if (m = Ct, m !== null && (c = Xa(m, u), c !== 0 && c !== A.retryLane))
          throw A.retryLane = c, li(l, c), Aa(m, l, c), eh;
        zn(v) || vh(), n = Pc(
          l,
          n,
          u
        );
      } else
        zn(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = A.treeContext, Yt = Oa(
          v.nextSibling
        ), Bl = n, nt = !0, gu = null, zl = !1, l !== null && Cs(n, l), n = ac(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Ln(), v = c.fallback, s = n.mode, A = l.child, B = A.sibling, c = ai(A, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = A.subtreeFlags & 65011712, B !== null ? v = ai(
      B,
      v
    ) : (v = ni(
      v,
      s,
      u,
      null
    ), v.flags |= 2), v.return = n, c.return = n, c.sibling = v, n.child = c, tc(null, c), c = n.child, v = l.child.memoizedState, v === null ? v = lr(u) : (s = v.cachePool, s !== null ? (A = hl._currentValue, s = s.parent !== A ? { parent: A, pool: A } : s) : s = Xc(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: s
    }), c.memoizedState = v, c.childLanes = Pa(
      l,
      m,
      u
    ), n.memoizedState = tr, tc(l.child, c)) : (Tu(n), u = l.child, l = u.sibling, u = ai(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function ac(l, n) {
    return n = ar(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function ar(l, n) {
    return l = cl(22, l, null, n), l.lanes = 0, l;
  }
  function Pc(l, n, u) {
    return $i(n, l.child, null, u), l = ac(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function eo(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Md(l.return, n, u);
  }
  function lh(l, n, u, c, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function xy(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    c = c.children;
    var m = kt.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, F(kt, m), Zt(l, n, c, u), c = nt ? dl : 0, !v && l !== null && (l.flags & 128) !== 0)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && eo(l, u, n);
        else if (l.tag === 19)
          eo(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && af(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), lh(
          n,
          !1,
          s,
          u,
          r,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && af(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        lh(
          n,
          !0,
          u,
          null,
          r,
          c
        );
        break;
      case "together":
        lh(
          n,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function en(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), kn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (jl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(H(153));
    if (n.child !== null) {
      for (l = n.child, u = ai(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ai(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function ah(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Gc(l)));
  }
  function nh(l, n, u) {
    switch (n.tag) {
      case 3:
        Vt(n, n.stateNode.containerInfo), ya(n, hl, l.memoizedState.cache), Qi();
        break;
      case 27:
      case 5:
        qa(n);
        break;
      case 4:
        Vt(n, n.stateNode.containerInfo);
        break;
      case 10:
        ya(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, lf(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Tu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Ny(l, n, u) : (Tu(n), l = en(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Tu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (jl(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return xy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), F(kt, kt.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, eg(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        ya(n, hl, l.memoizedState.cache);
    }
    return en(l, n, u);
  }
  function By(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        yl = !0;
      else {
        if (!ah(l, u) && (n.flags & 128) === 0)
          return yl = !1, nh(
            l,
            n,
            u
          );
        yl = (l.flags & 131072) !== 0;
      }
    else
      yl = !1, nt && (n.flags & 1048576) !== 0 && Im(n, dl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var c = n.pendingProps;
          if (l = Zi(n.elementType), n.type = l, typeof l == "function")
            Yc(l) ? (c = ec(l, c), n.tag = 1, n = Hy(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = th(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Kt) {
                n.tag = 11, n = My(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (s === De) {
                n.tag = 14, n = Cy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              }
            }
            throw n = Lt(l) || l, Error(H(306, n, ""));
          }
        }
        return n;
      case 0:
        return th(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = ec(
          c,
          n.pendingProps
        ), Hy(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (Vt(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(H(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Ud(l, n), Eu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, ya(n, hl, c), c !== r.cache && bu(
            n,
            [hl],
            u,
            !0
          ), Wi(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Zn(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = Ja(
                Error(H(424)),
                n
              ), Fo(s), n = Zn(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (Yt = Oa(l.firstChild), Bl = n, nt = !0, gu = null, zl = !0, u = uy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Qi(), c === s) {
              n = en(
                l,
                n,
                u
              );
              break e;
            }
            Zt(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Ia(l, n), l === null ? (u = Nf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : nt || (u = n.type, l = n.pendingProps, c = oc(
          qe.current
        ).createElement(u), c[Rt] = n, c[sa] = l, kl(c, u, l), Et(c), n.stateNode = c) : n.memoizedState = Nf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return qa(n), l === null && nt && (c = n.stateNode = Uf(
          n.type,
          n.pendingProps,
          qe.current
        ), Bl = n, zl = !0, s = Yt, Fn(n.type) ? (Tr = s, Yt = Oa(c.firstChild)) : Yt = s), Zt(
          l,
          n,
          n.pendingProps.children,
          u
        ), Ia(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && nt && ((s = c = Yt) && (c = nS(
          c,
          n.type,
          n.pendingProps,
          zl
        ), c !== null ? (n.stateNode = c, Bl = n, Yt = Oa(c.firstChild), zl = !1, s = !0) : s = !1), s || En(n)), qa(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Mf(s, r) ? c = null : m !== null && Mf(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Ls(
          l,
          n,
          eS,
          null,
          null,
          u
        ), zr._currentValue = s), Ia(l, n), Zt(l, n, c, u), n.child;
      case 6:
        return l === null && nt && ((l = u = Yt) && (u = ke(
          u,
          n.pendingProps,
          zl
        ), u !== null ? (n.stateNode = u, Bl = n, Yt = null, l = !0) : l = !1), l || En(n)), null;
      case 13:
        return Ny(l, n, u);
      case 4:
        return Vt(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = $i(
          n,
          null,
          c,
          u
        ) : Zt(l, n, c, u), n.child;
      case 11:
        return My(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Zt(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Zt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Zt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, ya(n, n.type, c.value), Zt(l, n, c.children, u), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, Ne(n), s = $(s), c = c(s), n.flags |= 1, Zt(l, n, c, u), n.child;
      case 14:
        return Cy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Uy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return xy(l, n, u);
      case 31:
        return tg(l, n, u);
      case 22:
        return eg(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return Ne(n), c = $(hl), l === null ? (s = ka(), s === null && (s = Ct, r = Ns(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: c, cache: s }, ws(n), ya(n, hl, s)) : ((l.lanes & u) !== 0 && (Ud(l, n), Eu(n, null, null, u), Wi()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), ya(n, hl, c)) : (c = r.cache, ya(n, hl, c), c !== s.cache && bu(
          n,
          [hl],
          u,
          !0
        ))), Zt(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(H(156, n.tag));
  }
  function Ru(l) {
    l.flags |= 4;
  }
  function jy(l, n, u, c, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (rg()) l.flags |= 8192;
        else
          throw Ji = Lc, Qc;
    } else l.flags &= -16777217;
  }
  function Yy(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !xa(n))
      if (rg()) l.flags |= 8192;
      else
        throw Ji = Lc, Qc;
  }
  function na(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ta() : 536870912, l.lanes |= n, al |= n);
  }
  function df(l, n) {
    if (!nt)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Ue(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function lg(l, n, u) {
    var c = n.pendingProps;
    switch (_d(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(n), null;
      case 1:
        return Ue(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Qn(hl), ht(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Su(n) ? Ru(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Pm())), Ue(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (Ru(n), r !== null ? (Ue(n), Yy(n, r)) : (Ue(n), jy(
          n,
          s,
          null,
          c,
          u
        ))) : r ? r !== l.memoizedState ? (Ru(n), Ue(n), Yy(n, r)) : (Ue(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && Ru(n), Ue(n), jy(
          n,
          s,
          l,
          c,
          u
        )), null;
      case 27:
        if (ce(n), u = qe.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Ru(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(H(166));
            return Ue(n), null;
          }
          l = W.current, Su(n) ? Us(n) : (l = Uf(s, c, u), n.stateNode = l, Ru(n));
        }
        return Ue(n), null;
      case 5:
        if (ce(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Ru(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(H(166));
            return Ue(n), null;
          }
          if (r = W.current, Su(n))
            Us(n);
          else {
            var m = oc(
              qe.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? r.multiple = !0 : c.size && (r.size = c.size);
                    break;
                  default:
                    r = typeof c.is == "string" ? m.createElement(s, { is: c.is }) : m.createElement(s);
                }
            }
            r[Rt] = n, r[sa] = c;
            e: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = r;
            e: switch (kl(r, s, c), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
            c && Ru(n);
          }
        }
        return Ue(n), jy(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Ru(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(H(166));
          if (l = qe.current, Su(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Bl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[Rt] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || c0(l.nodeValue, u)), l || En(n, !0);
          } else
            l = oc(l).createTextNode(
              c
            ), l[Rt] = n, n.stateNode = l;
        }
        return Ue(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = Su(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(H(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(H(557));
              l[Rt] = n;
            } else
              Qi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ue(n), l = !1;
          } else
            u = Pm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (ga(n), n) : (ga(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(H(558));
        }
        return Ue(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = Su(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(H(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(H(317));
              s[Rt] = n;
            } else
              Qi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ue(n), s = !1;
          } else
            s = Pm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (ga(n), n) : (ga(n), null);
        }
        return ga(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool), r = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), na(n, n.updateQueue), Ue(n), null);
      case 4:
        return ht(), l === null && Rf(n.stateNode.containerInfo), Ue(n), null;
      case 10:
        return Qn(n.type), Ue(n), null;
      case 19:
        if (x(kt), c = n.memoizedState, c === null) return Ue(n), null;
        if (s = (n.flags & 128) !== 0, r = c.rendering, r === null)
          if (s) df(c, !1);
          else {
            if (Gt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = af(l), r !== null) {
                  for (n.flags |= 128, df(c, !1), l = r.updateQueue, n.updateQueue = l, na(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    km(u, l), u = u.sibling;
                  return F(
                    kt,
                    kt.current & 1 | 2
                  ), nt && bn(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && vl() > St && (n.flags |= 128, s = !0, df(c, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = af(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, na(n, l), df(c, !0), c.tail === null && c.tailMode === "hidden" && !r.alternate && !nt)
                return Ue(n), null;
            } else
              2 * vl() - c.renderingStartTime > St && u !== 536870912 && (n.flags |= 128, s = !0, df(c, !1), n.lanes = 4194304);
          c.isBackwards ? (r.sibling = n.child, n.child = r) : (l = c.last, l !== null ? l.sibling = r : n.child = r, c.last = r);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = vl(), l.sibling = null, u = kt.current, F(
          kt,
          s ? u & 1 | 2 : u & 1
        ), nt && bn(n, c.treeForkCount), l) : (Ue(n), null);
      case 22:
      case 23:
        return ga(n), tf(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Ue(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ue(n), u = n.updateQueue, u !== null && na(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && x($a), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Qn(hl), Ue(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(H(156, n.tag));
  }
  function ag(l, n) {
    switch (_d(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Qn(hl), ht(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ce(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (ga(n), n.alternate === null)
            throw Error(H(340));
          Qi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (ga(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(H(340));
          Qi();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return x(kt), null;
      case 4:
        return ht(), null;
      case 10:
        return Qn(n.type), null;
      case 22:
      case 23:
        return ga(n), tf(), l !== null && x($a), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Qn(hl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ng(l, n) {
    switch (_d(n), n.tag) {
      case 3:
        Qn(hl), ht();
        break;
      case 26:
      case 27:
      case 5:
        ce(n);
        break;
      case 4:
        ht();
        break;
      case 31:
        n.memoizedState !== null && ga(n);
        break;
      case 13:
        ga(n);
        break;
      case 19:
        x(kt);
        break;
      case 10:
        Qn(n.type);
        break;
      case 22:
      case 23:
        ga(n), tf(), l !== null && x($a);
        break;
      case 24:
        Qn(hl);
    }
  }
  function An(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (v) {
      zt(n, n.return, v);
    }
  }
  function tn(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, s = n;
              var A = u, B = v;
              try {
                B();
              } catch (Q) {
                zt(
                  s,
                  A,
                  Q
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (Q) {
      zt(n, n.return, Q);
    }
  }
  function uh(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Fi(n, u);
      } catch (c) {
        zt(l, l.return, c);
      }
    }
  }
  function nc(l, n, u) {
    u.props = ec(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      zt(l, n, c);
    }
  }
  function Mu(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      zt(l, n, s);
    }
  }
  function Jn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          zt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          zt(l, n, s);
        }
      else u.current = null;
  }
  function qy(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      zt(l, l.return, s);
    }
  }
  function ih(l, n, u) {
    try {
      var c = l.stateNode;
      f0(c, l.type, u, n), c[sa] = n;
    } catch (s) {
      zt(l, l.return, s);
    }
  }
  function Gy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Fn(l.type) || l.tag === 4;
  }
  function hf(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Gy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Fn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function mf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Hn));
    else if (c !== 4 && (c === 27 && Fn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (mf(l, n, u), l = l.sibling; l !== null; )
        mf(l, n, u), l = l.sibling;
  }
  function yf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Fn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (yf(l, n, u), l = l.sibling; l !== null; )
        yf(l, n, u), l = l.sibling;
  }
  function wy(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      kl(n, c, u), n[Rt] = l, n[sa] = u;
    } catch (r) {
      zt(l, l.return, r);
    }
  }
  var hi = !1, bl = !1, ch = !1, Xy = typeof WeakSet == "function" ? WeakSet : Set, Gl = null;
  function pf(l, n) {
    if (l = l.containerInfo, _h = Rl, l = Gi(l), Os(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, v = -1, A = -1, B = 0, Q = 0, K = l, j = null;
            t: for (; ; ) {
              for (var w; K !== u || s !== 0 && K.nodeType !== 3 || (v = m + s), K !== r || c !== 0 && K.nodeType !== 3 || (A = m + c), K.nodeType === 3 && (m += K.nodeValue.length), (w = K.firstChild) !== null; )
                j = K, K = w;
              for (; ; ) {
                if (K === l) break t;
                if (j === u && ++B === s && (v = m), j === r && ++Q === c && (A = m), (w = K.nextSibling) !== null) break;
                K = j, j = K.parentNode;
              }
              K = w;
            }
            u = v === -1 || A === -1 ? null : { start: v, end: A };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Rh = { focusedElem: l, selectionRange: u }, Rl = !1, Gl = n; Gl !== null; )
      if (n = Gl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, Gl = l;
      else
        for (; Gl !== null; ) {
          switch (n = Gl, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var fe = ec(
                    u.type,
                    s
                  );
                  l = c.getSnapshotBeforeUpdate(
                    fe,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Oe) {
                  zt(
                    u,
                    u.return,
                    Oe
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Er(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Er(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(H(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, Gl = l;
            break;
          }
          Gl = n.return;
        }
  }
  function nr(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        mi(l, u), c & 4 && An(5, u);
        break;
      case 1:
        if (mi(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              zt(u, u.return, m);
            }
          else {
            var s = ec(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              zt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && uh(u), c & 512 && Mu(u, u.return);
        break;
      case 3:
        if (mi(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Fi(l, n);
          } catch (m) {
            zt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && wy(u);
      case 26:
      case 5:
        mi(l, u), n === null && c & 4 && qy(u), c & 512 && Mu(u, u.return);
        break;
      case 12:
        mi(l, u);
        break;
      case 31:
        mi(l, u), c & 4 && ug(l, u);
        break;
      case 13:
        mi(l, u), c & 4 && Vy(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = ln.bind(
          null,
          u
        ), Cf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || hi, !c) {
          n = n !== null && n.memoizedState !== null || bl, s = hi;
          var r = bl;
          hi = c, (bl = n) && !r ? Kn(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : mi(l, u), hi = s, bl = r;
        }
        break;
      case 30:
        break;
      default:
        mi(l, u);
    }
  }
  function Qy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Qy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && ad(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var qt = null, ba = !1;
  function Cu(l, n, u) {
    for (u = u.child; u !== null; )
      Ly(l, n, u), u = u.sibling;
  }
  function Ly(l, n, u) {
    if (Ol && typeof Ol.onCommitFiberUnmount == "function")
      try {
        Ol.onCommitFiberUnmount(dn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        bl || Jn(u, n), Cu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        bl || Jn(u, n);
        var c = qt, s = ba;
        Fn(u.type) && (qt = u.stateNode, ba = !1), Cu(
          l,
          n,
          u
        ), oo(u.stateNode), qt = c, ba = s;
        break;
      case 5:
        bl || Jn(u, n);
      case 6:
        if (c = qt, s = ba, qt = null, Cu(
          l,
          n,
          u
        ), qt = c, ba = s, qt !== null)
          if (ba)
            try {
              (qt.nodeType === 9 ? qt.body : qt.nodeName === "HTML" ? qt.ownerDocument.body : qt).removeChild(u.stateNode);
            } catch (r) {
              zt(
                u,
                n,
                r
              );
            }
          else
            try {
              qt.removeChild(u.stateNode);
            } catch (r) {
              zt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        qt !== null && (ba ? (l = qt, h0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Xf(l)) : h0(qt, u.stateNode));
        break;
      case 4:
        c = qt, s = ba, qt = u.stateNode.containerInfo, ba = !0, Cu(
          l,
          n,
          u
        ), qt = c, ba = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        tn(2, u, n), bl || tn(4, u, n), Cu(
          l,
          n,
          u
        );
        break;
      case 1:
        bl || (Jn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && nc(
          u,
          n,
          c
        )), Cu(
          l,
          n,
          u
        );
        break;
      case 21:
        Cu(
          l,
          n,
          u
        );
        break;
      case 22:
        bl = (c = bl) || u.memoizedState !== null, Cu(
          l,
          n,
          u
        ), bl = c;
        break;
      default:
        Cu(
          l,
          n,
          u
        );
    }
  }
  function ug(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Xf(l);
      } catch (u) {
        zt(n, n.return, u);
      }
    }
  }
  function Vy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Xf(l);
      } catch (u) {
        zt(n, n.return, u);
      }
  }
  function ur(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Xy()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Xy()), n;
      default:
        throw Error(H(435, l.tag));
    }
  }
  function ir(l, n) {
    var u = ur(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var s = Dg.bind(null, l, c);
        c.then(s, s);
      }
    });
  }
  function Ea(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, v = m;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Fn(v.type)) {
                qt = v.stateNode, ba = !1;
                break e;
              }
              break;
            case 5:
              qt = v.stateNode, ba = !1;
              break e;
            case 3:
            case 4:
              qt = v.stateNode.containerInfo, ba = !0;
              break e;
          }
          v = v.return;
        }
        if (qt === null) throw Error(H(160));
        Ly(r, m, s), qt = null, ba = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        oh(n, l), n = n.sibling;
  }
  var Ze = null;
  function oh(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ea(n, l), Ma(l), c & 4 && (tn(3, l, l.return), An(3, l), tn(5, l, l.return));
        break;
      case 1:
        Ea(n, l), Ma(l), c & 512 && (bl || u === null || Jn(u, u.return)), c & 64 && hi && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Ze;
        if (Ea(n, l), Ma(l), c & 512 && (bl || u === null || Jn(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[fu] || r[Rt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), kl(r, c, u), r[Rt] = l, Et(r), c = r;
                      break e;
                    case "link":
                      var m = g0(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), kl(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = g0(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), kl(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(H(468, c));
                  }
                  r[Rt] = l, Et(r), c = r;
                }
                l.stateNode = c;
              } else
                Nh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = p0(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? Nh(
              s,
              l.type,
              l.stateNode
            ) : p0(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && ih(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Ea(n, l), Ma(l), c & 512 && (bl || u === null || Jn(u, u.return)), u !== null && c & 4 && ih(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ea(n, l), Ma(l), c & 512 && (bl || u === null || Jn(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            ru(s, "");
          } catch (fe) {
            zt(l, l.return, fe);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, ih(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (ch = !0);
        break;
      case 6:
        if (Ea(n, l), Ma(l), c & 4) {
          if (l.stateNode === null)
            throw Error(H(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (fe) {
            zt(l, l.return, fe);
          }
        }
        break;
      case 3:
        if (jf = null, s = Ze, Ze = ua(n.containerInfo), Ea(n, l), Ze = s, Ma(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Xf(n.containerInfo);
          } catch (fe) {
            zt(l, l.return, fe);
          }
        ch && (ch = !1, Zy(l));
        break;
      case 4:
        c = Ze, Ze = ua(
          l.stateNode.containerInfo
        ), Ea(n, l), Ma(l), Ze = c;
        break;
      case 12:
        Ea(n, l), Ma(l);
        break;
      case 31:
        Ea(n, l), Ma(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ir(l, c)));
        break;
      case 13:
        Ea(n, l), Ma(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Wn = vl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ir(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var A = u !== null && u.memoizedState !== null, B = hi, Q = bl;
        if (hi = B || s, bl = Q || A, Ea(n, l), bl = Q, hi = B, Ma(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || A || hi || bl || to(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                A = u = n;
                try {
                  if (r = A.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = A.stateNode;
                    var K = A.memoizedProps.style, j = K != null && K.hasOwnProperty("display") ? K.display : null;
                    v.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (fe) {
                  zt(A, A.return, fe);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                A = n;
                try {
                  A.stateNode.nodeValue = s ? "" : A.memoizedProps;
                } catch (fe) {
                  zt(A, A.return, fe);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                A = n;
                try {
                  var w = A.stateNode;
                  s ? pl(w, !0) : pl(A.stateNode, !1);
                } catch (fe) {
                  zt(A, A.return, fe);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, ir(l, u))));
        break;
      case 19:
        Ea(n, l), Ma(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ir(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ea(n, l), Ma(l);
    }
  }
  function Ma(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Gy(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(H(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = hf(l);
            yf(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (ru(m, ""), u.flags &= -33);
            var v = hf(l);
            yf(l, v, m);
            break;
          case 3:
          case 4:
            var A = u.stateNode.containerInfo, B = hf(l);
            mf(
              l,
              B,
              A
            );
            break;
          default:
            throw Error(H(161));
        }
      } catch (Q) {
        zt(l, l.return, Q);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Zy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Zy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function mi(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        nr(l, n.alternate, n), n = n.sibling;
  }
  function to(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          tn(4, n, n.return), to(n);
          break;
        case 1:
          Jn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && nc(
            n,
            n.return,
            u
          ), to(n);
          break;
        case 27:
          oo(n.stateNode);
        case 26:
        case 5:
          Jn(n, n.return), to(n);
          break;
        case 22:
          n.memoizedState === null && to(n);
          break;
        case 30:
          to(n);
          break;
        default:
          to(n);
      }
      l = l.sibling;
    }
  }
  function Kn(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Kn(
            s,
            r,
            u
          ), An(4, r);
          break;
        case 1:
          if (Kn(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (B) {
              zt(c, c.return, B);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var v = c.stateNode;
            try {
              var A = s.shared.hiddenCallbacks;
              if (A !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < A.length; s++)
                  Nd(A[s], v);
            } catch (B) {
              zt(c, c.return, B);
            }
          }
          u && m & 64 && uh(r), Mu(r, r.return);
          break;
        case 27:
          wy(r);
        case 26:
        case 5:
          Kn(
            s,
            r,
            u
          ), u && c === null && m & 4 && qy(r), Mu(r, r.return);
          break;
        case 12:
          Kn(
            s,
            r,
            u
          );
          break;
        case 31:
          Kn(
            s,
            r,
            u
          ), u && m & 4 && ug(s, r);
          break;
        case 13:
          Kn(
            s,
            r,
            u
          ), u && m & 4 && Vy(s, r);
          break;
        case 22:
          r.memoizedState === null && Kn(
            s,
            r,
            u
          ), Mu(r, r.return);
          break;
        case 30:
          break;
        default:
          Kn(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function fh(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && xs(u));
  }
  function sh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && xs(l));
  }
  function On(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        gf(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function gf(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        On(
          l,
          n,
          u,
          c
        ), s & 2048 && An(9, n);
        break;
      case 1:
        On(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        On(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && xs(l)));
        break;
      case 12:
        if (s & 2048) {
          On(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, v = r.onPostCommit;
            typeof v == "function" && v(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (A) {
            zt(n, n.return, A);
          }
        } else
          On(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        On(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        On(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? On(
          l,
          n,
          u,
          c
        ) : cr(l, n) : r._visibility & 2 ? On(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, vf(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && fh(m, n);
        break;
      case 24:
        On(
          l,
          n,
          u,
          c
        ), s & 2048 && sh(n.alternate, n);
        break;
      default:
        On(
          l,
          n,
          u,
          c
        );
    }
  }
  function vf(l, n, u, c, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, v = u, A = c, B = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          vf(
            r,
            m,
            v,
            A,
            s
          ), An(8, m);
          break;
        case 23:
          break;
        case 22:
          var Q = m.stateNode;
          m.memoizedState !== null ? Q._visibility & 2 ? vf(
            r,
            m,
            v,
            A,
            s
          ) : cr(
            r,
            m
          ) : (Q._visibility |= 2, vf(
            r,
            m,
            v,
            A,
            s
          )), s && B & 2048 && fh(
            m.alternate,
            m
          );
          break;
        case 24:
          vf(
            r,
            m,
            v,
            A,
            s
          ), s && B & 2048 && sh(m.alternate, m);
          break;
        default:
          vf(
            r,
            m,
            v,
            A,
            s
          );
      }
      n = n.sibling;
    }
  }
  function cr(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            cr(u, c), s & 2048 && fh(
              c.alternate,
              c
            );
            break;
          case 24:
            cr(u, c), s & 2048 && sh(c.alternate, c);
            break;
          default:
            cr(u, c);
        }
        n = n.sibling;
      }
  }
  var Ca = 8192;
  function Uu(l, n, u) {
    if (l.subtreeFlags & Ca)
      for (l = l.child; l !== null; )
        ig(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function ig(l, n, u) {
    switch (l.tag) {
      case 26:
        Uu(
          l,
          n,
          u
        ), l.flags & Ca && l.memoizedState !== null && ju(
          u,
          Ze,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Uu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = Ze;
        Ze = ua(l.stateNode.containerInfo), Uu(
          l,
          n,
          u
        ), Ze = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = Ca, Ca = 16777216, Uu(
          l,
          n,
          u
        ), Ca = c) : Uu(
          l,
          n,
          u
        ));
        break;
      default:
        Uu(
          l,
          n,
          u
        );
    }
  }
  function rh(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Sf(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Gl = c, dh(
            c,
            l
          );
        }
      rh(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Jy(l), l = l.sibling;
  }
  function Jy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Sf(l), l.flags & 2048 && tn(9, l, l.return);
        break;
      case 3:
        Sf(l);
        break;
      case 12:
        Sf(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, or(l)) : Sf(l);
        break;
      default:
        Sf(l);
    }
  }
  function or(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Gl = c, dh(
            c,
            l
          );
        }
      rh(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          tn(8, n, n.return), or(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, or(n));
          break;
        default:
          or(n);
      }
      l = l.sibling;
    }
  }
  function dh(l, n) {
    for (; Gl !== null; ) {
      var u = Gl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          tn(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          xs(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, Gl = c;
      else
        e: for (u = l; Gl !== null; ) {
          c = Gl;
          var s = c.sibling, r = c.return;
          if (Qy(c), c === u) {
            Gl = null;
            break e;
          }
          if (s !== null) {
            s.return = r, Gl = s;
            break e;
          }
          Gl = r;
        }
    }
  }
  var cg = {
    getCacheForType: function(l) {
      var n = $(hl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return $(hl).controller.signal;
    }
  }, Ky = typeof WeakMap == "function" ? WeakMap : Map, yt = 0, Ct = null, ut = null, et = 0, Ot = 0, Me = null, Hu = !1, uc = !1, hh = !1, $n = 0, Gt = 0, kn = 0, lo = 0, mh = 0, Ta = 0, al = 0, fr = null, nl = null, yh = !1, Wn = 0, $y = 0, St = 1 / 0, bf = null, Wt = null, _l = 0, yi = null, ic = null, Nu = 0, Ua = 0, ph = null, gh = null, Ef = 0, sr = null;
  function Ha() {
    return (yt & 2) !== 0 && et !== 0 ? et & -et : _.T !== null ? Th() : td();
  }
  function og() {
    if (Ta === 0)
      if ((et & 536870912) === 0 || nt) {
        var l = te;
        te <<= 1, (te & 3932160) === 0 && (te = 262144), Ta = l;
      } else Ta = 536870912;
    return l = pa.current, l !== null && (l.flags |= 32), Ta;
  }
  function Aa(l, n, u) {
    (l === Ct && (Ot === 2 || Ot === 9) || l.cancelPendingCommit !== null) && (xu(l, 0), pi(
      l,
      et,
      Ta,
      !1
    )), Ui(l, u), ((yt & 2) === 0 || l !== Ct) && (l === Ct && ((yt & 2) === 0 && (lo |= u), Gt === 4 && pi(
      l,
      et,
      Ta,
      !1
    )), Bu(l));
  }
  function fg(l, n, u) {
    if ((yt & 6) !== 0) throw Error(H(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || Pe(l, n), s = c ? mg(l, n) : Sh(l, n, !0), r = c;
    do {
      if (s === 0) {
        uc && !c && pi(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !sg(u)) {
          s = Sh(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var v = l;
              s = fr;
              var A = v.current.memoizedState.isDehydrated;
              if (A && (xu(v, m).flags |= 256), m = Sh(
                v,
                m,
                !1
              ), m !== 2) {
                if (hh && !A) {
                  v.errorRecoveryDisabledLanes |= r, lo |= r, s = 4;
                  break e;
                }
                r = nl, nl = s, r !== null && (nl === null ? nl = r : nl.push.apply(
                  nl,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          xu(l, 0), pi(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(H(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              pi(
                c,
                n,
                Ta,
                !Hu
              );
              break e;
            case 2:
              nl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(H(329));
          }
          if ((n & 62914560) === n && (s = Wn + 300 - vl(), 10 < s)) {
            if (pi(
              c,
              n,
              Ta,
              !Hu
            ), he(c, 0, !0) !== 0) break e;
            Nu = n, c.timeoutHandle = br(
              rr.bind(
                null,
                c,
                u,
                nl,
                bf,
                yh,
                n,
                Ta,
                lo,
                al,
                Hu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          rr(
            c,
            u,
            nl,
            bf,
            yh,
            n,
            Ta,
            lo,
            al,
            Hu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Bu(l);
  }
  function rr(l, n, u, c, s, r, m, v, A, B, Q, K, j, w) {
    if (l.timeoutHandle = -1, K = n.subtreeFlags, K & 8192 || (K & 16785408) === 16785408) {
      K = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Hn
      }, ig(
        n,
        r,
        K
      );
      var fe = (r & 62914560) === r ? Wn - vl() : (r & 4194048) === r ? $y - vl() : 0;
      if (fe = S0(
        K,
        fe
      ), fe !== null) {
        Nu = r, l.cancelPendingCommit = fe(
          vg.bind(
            null,
            l,
            n,
            r,
            u,
            c,
            s,
            m,
            v,
            A,
            Q,
            K,
            null,
            j,
            w
          )
        ), pi(l, r, m, !B);
        return;
      }
    }
    vg(
      l,
      n,
      r,
      u,
      c,
      s,
      m,
      v,
      A
    );
  }
  function sg(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!aa(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function pi(l, n, u, c) {
    n &= ~mh, n &= ~lo, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Hl(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && hs(l, u, n);
  }
  function Tf() {
    return (yt & 6) === 0 ? (vi(0), !1) : !0;
  }
  function ky() {
    if (ut !== null) {
      if (Ot === 0)
        var l = ut.return;
      else
        l = ut, Xn = ui = null, Vs(l), Ki = null, Vc = 0, l = ut;
      for (; l !== null; )
        ng(l.alternate, l), l = l.return;
      ut = null;
    }
  }
  function xu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, xg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Nu = 0, ky(), Ct = l, ut = u = ai(l.current, null), et = n, Ot = 0, Me = null, Hu = !1, uc = Pe(l, n), hh = !1, al = Ta = mh = lo = kn = Gt = 0, nl = fr = null, yh = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Hl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return $n = n, Va(), u;
  }
  function Af(l, n) {
    Xe = null, _.H = Is, n === Vi || n === Po ? (n = ny(), Ot = 3) : n === Qc ? (n = ny(), Ot = 4) : Ot = n === eh ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Me = n, ut === null && (Gt = 1, rf(
      l,
      Ja(n, l.current)
    ));
  }
  function rg() {
    var l = pa.current;
    return l === null ? !0 : (et & 4194048) === et ? Fa === null : (et & 62914560) === et || (et & 536870912) !== 0 ? l === Fa : !1;
  }
  function dg() {
    var l = _.H;
    return _.H = Is, l === null ? Is : l;
  }
  function hg() {
    var l = _.A;
    return _.A = cg, l;
  }
  function vh() {
    Gt = 4, Hu || (et & 4194048) !== et && pa.current !== null || (uc = !0), (kn & 134217727) === 0 && (lo & 134217727) === 0 || Ct === null || pi(
      Ct,
      et,
      Ta,
      !1
    );
  }
  function Sh(l, n, u) {
    var c = yt;
    yt |= 2;
    var s = dg(), r = hg();
    (Ct !== l || et !== n) && (bf = null, xu(l, n)), n = !1;
    var m = Gt;
    e: do
      try {
        if (Ot !== 0 && ut !== null) {
          var v = ut, A = Me;
          switch (Ot) {
            case 8:
              ky(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              pa.current === null && (n = !0);
              var B = Ot;
              if (Ot = 0, Me = null, ao(l, v, A, B), u && uc) {
                m = 0;
                break e;
              }
              break;
            default:
              B = Ot, Ot = 0, Me = null, ao(l, v, A, B);
          }
        }
        lS(), m = Gt;
        break;
      } catch (Q) {
        Af(l, Q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Xn = ui = null, yt = c, _.H = s, _.A = r, ut === null && (Ct = null, et = 0, Va()), m;
  }
  function lS() {
    for (; ut !== null; ) yg(ut);
  }
  function mg(l, n) {
    var u = yt;
    yt |= 2;
    var c = dg(), s = hg();
    Ct !== l || et !== n ? (bf = null, St = vl() + 500, xu(l, n)) : uc = Pe(
      l,
      n
    );
    e: do
      try {
        if (Ot !== 0 && ut !== null) {
          n = ut;
          var r = Me;
          t: switch (Ot) {
            case 1:
              Ot = 0, Me = null, ao(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (ly(r)) {
                Ot = 0, Me = null, pg(n);
                break;
              }
              n = function() {
                Ot !== 2 && Ot !== 9 || Ct !== l || (Ot = 7), Bu(l);
              }, r.then(n, n);
              break e;
            case 3:
              Ot = 7;
              break e;
            case 4:
              Ot = 5;
              break e;
            case 7:
              ly(r) ? (Ot = 0, Me = null, pg(n)) : (Ot = 0, Me = null, ao(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (ut.tag) {
                case 26:
                  m = ut.memoizedState;
                case 5:
                case 27:
                  var v = ut;
                  if (m ? xa(m) : v.stateNode.complete) {
                    Ot = 0, Me = null;
                    var A = v.sibling;
                    if (A !== null) ut = A;
                    else {
                      var B = v.return;
                      B !== null ? (ut = B, dr(B)) : ut = null;
                    }
                    break t;
                  }
              }
              Ot = 0, Me = null, ao(l, n, r, 5);
              break;
            case 6:
              Ot = 0, Me = null, ao(l, n, r, 6);
              break;
            case 8:
              ky(), Gt = 6;
              break e;
            default:
              throw Error(H(462));
          }
        }
        cc();
        break;
      } catch (Q) {
        Af(l, Q);
      }
    while (!0);
    return Xn = ui = null, _.H = c, _.A = s, yt = u, ut !== null ? 0 : (Ct = null, et = 0, Va(), Gt);
  }
  function cc() {
    for (; ut !== null && !cu(); )
      yg(ut);
  }
  function yg(l) {
    var n = By(l.alternate, l, $n);
    l.memoizedProps = l.pendingProps, n === null ? dr(l) : ut = n;
  }
  function pg(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = lc(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          et
        );
        break;
      case 11:
        n = lc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          et
        );
        break;
      case 5:
        Vs(n);
      default:
        ng(u, n), n = ut = km(n, $n), n = By(u, n, $n);
    }
    l.memoizedProps = l.pendingProps, n === null ? dr(l) : ut = n;
  }
  function ao(l, n, u, c) {
    Xn = ui = null, Vs(n), Ki = null, Vc = 0;
    var s = n.return;
    try {
      if (tS(
        l,
        s,
        n,
        u,
        et
      )) {
        Gt = 1, rf(
          l,
          Ja(u, l.current)
        ), ut = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw ut = s, r;
      Gt = 1, rf(
        l,
        Ja(u, l.current)
      ), ut = null;
      return;
    }
    n.flags & 32768 ? (nt || c === 1 ? l = !0 : uc || (et & 536870912) !== 0 ? l = !1 : (Hu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = pa.current, c !== null && c.tag === 13 && (c.flags |= 16384))), gg(n, l)) : dr(n);
  }
  function dr(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        gg(
          n,
          Hu
        );
        return;
      }
      l = n.return;
      var u = lg(
        n.alternate,
        n,
        $n
      );
      if (u !== null) {
        ut = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        ut = n;
        return;
      }
      ut = n = l;
    } while (n !== null);
    Gt === 0 && (Gt = 5);
  }
  function gg(l, n) {
    do {
      var u = ag(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, ut = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        ut = l;
        return;
      }
      ut = l = u;
    } while (l !== null);
    Gt = 6, ut = null;
  }
  function vg(l, n, u, c, s, r, m, v, A) {
    l.cancelPendingCommit = null;
    do
      Of();
    while (_l !== 0);
    if ((yt & 6) !== 0) throw Error(H(327));
    if (n !== null) {
      if (n === l.current) throw Error(H(177));
      if (r = n.lanes | n.childLanes, r |= vn, No(
        l,
        u,
        r,
        m,
        v,
        A
      ), l === Ct && (ut = Ct = null, et = 0), ic = n, yi = l, Nu = u, Ua = r, ph = s, gh = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, _g(Cn, function() {
        return Ag(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = _.T, _.T = null, s = L.p, L.p = 2, m = yt, yt |= 4;
        try {
          pf(l, n, u);
        } finally {
          yt = m, L.p = s, _.T = c;
        }
      }
      _l = 1, Sg(), bg(), Eg();
    }
  }
  function Sg() {
    if (_l === 1) {
      _l = 0;
      var l = yi, n = ic, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = _.T, _.T = null;
        var c = L.p;
        L.p = 2;
        var s = yt;
        yt |= 4;
        try {
          oh(n, l);
          var r = Rh, m = Gi(l.containerInfo), v = r.focusedElem, A = r.selectionRange;
          if (m !== v && v && v.ownerDocument && xc(
            v.ownerDocument.documentElement,
            v
          )) {
            if (A !== null && Os(v)) {
              var B = A.start, Q = A.end;
              if (Q === void 0 && (Q = B), "selectionStart" in v)
                v.selectionStart = B, v.selectionEnd = Math.min(
                  Q,
                  v.value.length
                );
              else {
                var K = v.ownerDocument || document, j = K && K.defaultView || window;
                if (j.getSelection) {
                  var w = j.getSelection(), fe = v.textContent.length, Oe = Math.min(A.start, fe), Ht = A.end === void 0 ? Oe : Math.min(A.end, fe);
                  !w.extend && Oe > Ht && (m = Ht, Ht = Oe, Oe = m);
                  var C = Km(
                    v,
                    Oe
                  ), D = Km(
                    v,
                    Ht
                  );
                  if (C && D && (w.rangeCount !== 1 || w.anchorNode !== C.node || w.anchorOffset !== C.offset || w.focusNode !== D.node || w.focusOffset !== D.offset)) {
                    var N = K.createRange();
                    N.setStart(C.node, C.offset), w.removeAllRanges(), Oe > Ht ? (w.addRange(N), w.extend(D.node, D.offset)) : (N.setEnd(D.node, D.offset), w.addRange(N));
                  }
                }
              }
            }
            for (K = [], w = v; w = w.parentNode; )
              w.nodeType === 1 && K.push({
                element: w,
                left: w.scrollLeft,
                top: w.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < K.length; v++) {
              var Z = K[v];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          Rl = !!_h, Rh = _h = null;
        } finally {
          yt = s, L.p = c, _.T = u;
        }
      }
      l.current = n, _l = 2;
    }
  }
  function bg() {
    if (_l === 2) {
      _l = 0;
      var l = yi, n = ic, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = _.T, _.T = null;
        var c = L.p;
        L.p = 2;
        var s = yt;
        yt |= 4;
        try {
          nr(l, n.alternate, n);
        } finally {
          yt = s, L.p = c, _.T = u;
        }
      }
      _l = 3;
    }
  }
  function Eg() {
    if (_l === 4 || _l === 3) {
      _l = 0, Sc();
      var l = yi, n = ic, u = Nu, c = gh;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? _l = 5 : (_l = 0, ic = yi = null, Tg(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (Wt = null), Em(u), n = n.stateNode, Ol && typeof Ol.onCommitFiberRoot == "function")
        try {
          Ol.onCommitFiberRoot(
            dn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = _.T, s = L.p, L.p = 2, _.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var v = c[m];
            r(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          _.T = n, L.p = s;
        }
      }
      (Nu & 3) !== 0 && Of(), Bu(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === sr ? Ef++ : (Ef = 0, sr = l) : Ef = 0, vi(0);
    }
  }
  function Tg(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, xs(n)));
  }
  function Of() {
    return Sg(), bg(), Eg(), Ag();
  }
  function Ag() {
    if (_l !== 5) return !1;
    var l = yi, n = Ua;
    Ua = 0;
    var u = Em(Nu), c = _.T, s = L.p;
    try {
      L.p = 32 > u ? 32 : u, _.T = null, u = ph, ph = null;
      var r = yi, m = Nu;
      if (_l = 0, ic = yi = null, Nu = 0, (yt & 6) !== 0) throw Error(H(331));
      var v = yt;
      if (yt |= 4, Jy(r.current), gf(
        r,
        r.current,
        m,
        u
      ), yt = v, vi(0, !1), Ol && typeof Ol.onPostCommitFiberRoot == "function")
        try {
          Ol.onPostCommitFiberRoot(dn, r);
        } catch {
        }
      return !0;
    } finally {
      L.p = s, _.T = c, Tg(l, n);
    }
  }
  function Og(l, n, u) {
    n = Ja(u, n), n = Dy(l.stateNode, n, 2), l = Wa(l, n, 2), l !== null && (Ui(l, 2), Bu(l));
  }
  function zt(l, n, u) {
    if (l.tag === 3)
      Og(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Og(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Wt === null || !Wt.has(c))) {
            l = Ja(u, l), u = _y(2), c = Wa(n, u, 2), c !== null && (Ry(
              u,
              c,
              n,
              l
            ), Ui(c, 2), Bu(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function hr(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new Ky();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (hh = !0, s.add(u), l = Wy.bind(null, l, n, u), n.then(l, l));
  }
  function Wy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ct === l && (et & u) === u && (Gt === 4 || Gt === 3 && (et & 62914560) === et && 300 > vl() - Wn ? (yt & 2) === 0 && xu(l, 0) : mh |= u, al === et && (al = 0)), Bu(l);
  }
  function zg(l, n) {
    n === 0 && (n = ta()), l = li(l, n), l !== null && (Ui(l, n), Bu(l));
  }
  function ln(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), zg(l, u);
  }
  function Dg(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(H(314));
    }
    c !== null && c.delete(n), zg(l, u);
  }
  function _g(l, n) {
    return re(l, n);
  }
  var zf = null, no = null, Fy = !1, bh = !1, Iy = !1, gi = 0;
  function Bu(l) {
    l !== no && l.next === null && (no === null ? zf = no = l : no = no.next = l), bh = !0, Fy || (Fy = !0, yr());
  }
  function vi(l, n) {
    if (!Iy && bh) {
      Iy = !0;
      do
        for (var u = !1, c = zf; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, v = c.pingedLanes;
              r = (1 << 31 - Hl(42 | l) + 1) - 1, r &= s & ~(m & ~v), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, uo(c, r));
          } else
            r = et, r = he(
              c,
              c === Ct ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || Pe(c, r) || (u = !0, uo(c, r));
          c = c.next;
        }
      while (u);
      Iy = !1;
    }
  }
  function Eh() {
    Py();
  }
  function Py() {
    bh = Fy = !1;
    var l = 0;
    gi !== 0 && aS() && (l = gi);
    for (var n = vl(), u = null, c = zf; c !== null; ) {
      var s = c.next, r = e0(c, n);
      r === 0 ? (c.next = null, u === null ? zf = s : u.next = s, s === null && (no = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (bh = !0)), c = s;
    }
    _l !== 0 && _l !== 5 || vi(l), gi !== 0 && (gi = 0);
  }
  function e0(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Hl(r), v = 1 << m, A = s[m];
      A === -1 ? ((v & u) === 0 || (v & c) !== 0) && (s[m] = Ge(v, n)) : A <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = Ct, u = et, u = he(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Ot === 2 || Ot === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Mi(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Pe(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Mi(c), Em(u)) {
        case 2:
        case 8:
          u = Uo;
          break;
        case 32:
          u = Cn;
          break;
        case 268435456:
          u = Ho;
          break;
        default:
          u = Cn;
      }
      return c = mr.bind(null, l), u = re(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Mi(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function mr(l, n) {
    if (_l !== 0 && _l !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Of() && l.callbackNode !== u)
      return null;
    var c = et;
    return c = he(
      l,
      l === Ct ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (fg(l, c, n), e0(l, vl()), l.callbackNode != null && l.callbackNode === u ? mr.bind(null, l) : null);
  }
  function uo(l, n) {
    if (Of()) return null;
    fg(l, n, !0);
  }
  function yr() {
    Bg(function() {
      (yt & 6) !== 0 ? re(
        Co,
        Eh
      ) : Py();
    });
  }
  function Th() {
    if (gi === 0) {
      var l = Li;
      l === 0 && (l = I, I <<= 1, (I & 261888) === 0 && (I = 256)), gi = l;
    }
    return gi;
  }
  function Rg(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : mn("" + l);
  }
  function io(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function pr(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Rg(
        (s[sa] || null).action
      ), m = c.submitter;
      m && (n = (n = m[sa] || null) ? Rg(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var v = new Es(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (gi !== 0) {
                  var A = m ? io(s, m) : new FormData(s);
                  ff(
                    u,
                    {
                      pending: !0,
                      data: A,
                      method: s.method,
                      action: r
                    },
                    null,
                    A
                  );
                }
              } else
                typeof r == "function" && (v.preventDefault(), A = m ? io(s, m) : new FormData(s), ff(
                  u,
                  {
                    pending: !0,
                    data: A,
                    method: s.method,
                    action: r
                  },
                  r,
                  A
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Ah = 0; Ah < Ko.length; Ah++) {
    var Df = Ko[Ah], t0 = Df.toLowerCase(), l0 = Df[0].toUpperCase() + Df.slice(1);
    da(
      t0,
      "on" + l0
    );
  }
  da(Ds, "onAnimationEnd"), da($m, "onAnimationIteration"), da(Ad, "onAnimationStart"), da("dblclick", "onDoubleClick"), da("focusin", "onFocus"), da("focusout", "onBlur"), da(Bc, "onTransitionRun"), da(_s, "onTransitionStart"), da(yu, "onTransitionCancel"), da(Gp, "onTransitionEnd"), su("onMouseEnter", ["mouseout", "mouseover"]), su("onMouseLeave", ["mouseout", "mouseover"]), su("onPointerEnter", ["pointerout", "pointerover"]), su("onPointerLeave", ["pointerout", "pointerover"]), xi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), xi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), xi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), xi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), xi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), xi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var _f = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Mg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_f)
  );
  function Cg(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var v = c[m], A = v.instance, B = v.currentTarget;
            if (v = v.listener, A !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = B;
            try {
              r(s);
            } catch (Q) {
              jc(Q);
            }
            s.currentTarget = null, r = A;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (v = c[m], A = v.instance, B = v.currentTarget, v = v.listener, A !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = B;
            try {
              r(s);
            } catch (Q) {
              jc(Q);
            }
            s.currentTarget = null, r = A;
          }
      }
    }
  }
  function at(l, n) {
    var u = n[ld];
    u === void 0 && (u = n[ld] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (gr(n, l, 2, !1), u.add(c));
  }
  function a0(l, n, u) {
    var c = 0;
    n && (c |= 4), gr(
      u,
      l,
      c,
      n
    );
  }
  var Oh = "_reactListening" + Math.random().toString(36).slice(2);
  function Rf(l) {
    if (!l[Oh]) {
      l[Oh] = !0, Oc.forEach(function(u) {
        u !== "selectionchange" && (Mg.has(u) || a0(u, !1, l), a0(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Oh] || (n[Oh] = !0, a0("selectionchange", !1, n));
    }
  }
  function gr(l, n, u, c) {
    switch (Dr(n)) {
      case 2:
        var s = Yu;
        break;
      case 8:
        s = qu;
        break;
      default:
        s = Wl;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !Ss || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function n0(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var v = c.stateNode.containerInfo;
          if (v === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var A = m.tag;
              if ((A === 3 || A === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = Ec(v), m === null) return;
            if (A = m.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              c = r = m;
              continue e;
            }
            v = v.parentNode;
          }
        }
        c = c.return;
      }
    Cm(function() {
      var B = r, Q = sd(u), K = [];
      e: {
        var j = pu.get(l);
        if (j !== void 0) {
          var w = Es, fe = l;
          switch (l) {
            case "keypress":
              if (dd(u) === 0) break e;
            case "keydown":
            case "keyup":
              w = pd;
              break;
            case "focusin":
              fe = "focus", w = md;
              break;
            case "focusout":
              fe = "blur", w = md;
              break;
            case "beforeblur":
            case "afterblur":
              w = md;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = Qo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = _p;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = Hp;
              break;
            case Ds:
            case $m:
            case Ad:
              w = Mp;
              break;
            case Gp:
              w = Fv;
              break;
            case "scroll":
            case "scrollend":
              w = kv;
              break;
            case "wheel":
              w = Iv;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = Rc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = Bn;
              break;
            case "toggle":
            case "beforetoggle":
              w = Gm;
          }
          var Oe = (n & 4) !== 0, Ht = !Oe && (l === "scroll" || l === "scrollend"), C = Oe ? j !== null ? j + "Capture" : null : j;
          Oe = [];
          for (var D = B, N; D !== null; ) {
            var Z = D;
            if (N = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || N === null || C === null || (Z = Nl(D, C), Z != null && Oe.push(
              vr(D, Z, N)
            )), Ht) break;
            D = D.return;
          }
          0 < Oe.length && (j = new w(
            j,
            fe,
            null,
            u,
            Q
          ), K.push({ event: j, listeners: Oe }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (j = l === "mouseover" || l === "pointerover", w = l === "mouseout" || l === "pointerout", j && u !== fd && (fe = u.relatedTarget || u.fromElement) && (Ec(fe) || fe[Hi]))
            break e;
          if ((w || j) && (j = Q.window === Q ? Q : (j = Q.ownerDocument) ? j.defaultView || j.parentWindow : window, w ? (fe = u.relatedTarget || u.toElement, w = B, fe = fe ? Ec(fe) : null, fe !== null && (Ht = Ye(fe), Oe = fe.tag, fe !== Ht || Oe !== 5 && Oe !== 27 && Oe !== 6) && (fe = null)) : (w = null, fe = B), w !== fe)) {
            if (Oe = Qo, Z = "onMouseLeave", C = "onMouseEnter", D = "mouse", (l === "pointerout" || l === "pointerover") && (Oe = Bn, Z = "onPointerLeave", C = "onPointerEnter", D = "pointer"), Ht = w == null ? j : xo(w), N = fe == null ? j : xo(fe), j = new Oe(
              Z,
              D + "leave",
              w,
              u,
              Q
            ), j.target = Ht, j.relatedTarget = N, Z = null, Ec(Q) === B && (Oe = new Oe(
              C,
              D + "enter",
              fe,
              u,
              Q
            ), Oe.target = N, Oe.relatedTarget = Ht, Z = Oe), Ht = Z, w && fe)
              t: {
                for (Oe = Ug, C = w, D = fe, N = 0, Z = C; Z; Z = Oe(Z))
                  N++;
                Z = 0;
                for (var Se = D; Se; Se = Oe(Se))
                  Z++;
                for (; 0 < N - Z; )
                  C = Oe(C), N--;
                for (; 0 < Z - N; )
                  D = Oe(D), Z--;
                for (; N--; ) {
                  if (C === D || D !== null && C === D.alternate) {
                    Oe = C;
                    break t;
                  }
                  C = Oe(C), D = Oe(D);
                }
                Oe = null;
              }
            else Oe = null;
            w !== null && zh(
              K,
              j,
              w,
              Oe,
              !1
            ), fe !== null && Ht !== null && zh(
              K,
              Ht,
              fe,
              Oe,
              !0
            );
          }
        }
        e: {
          if (j = B ? xo(B) : window, w = j.nodeName && j.nodeName.toLowerCase(), w === "select" || w === "input" && j.type === "file")
            var rt = Vm;
          else if (mu(j))
            if (Sd)
              rt = Nc;
            else {
              rt = Yp;
              var me = jp;
            }
          else
            w = j.nodeName, !w || w.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? B && Mm(B.elementType) && (rt = Vm) : rt = qi;
          if (rt && (rt = rt(l, B))) {
            Lm(
              K,
              rt,
              u,
              Q
            );
            break e;
          }
          me && me(l, j, B), l === "focusout" && B && j.type === "number" && B.memoizedProps.value != null && zc(j, "number", j.value);
        }
        switch (me = B ? xo(B) : window, l) {
          case "focusin":
            (mu(me) || me.contentEditable === "true") && (wi = me, Zo = B, gn = null);
            break;
          case "focusout":
            gn = Zo = wi = null;
            break;
          case "mousedown":
            Yn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Yn = !1, Td(K, u, Q);
            break;
          case "selectionchange":
            if (zs) break;
          case "keydown":
          case "keyup":
            Td(K, u, Q);
        }
        var we;
        if (Lo)
          e: {
            switch (l) {
              case "compositionstart":
                var Je = "onCompositionStart";
                break e;
              case "compositionend":
                Je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Je = "onCompositionUpdate";
                break e;
            }
            Je = void 0;
          }
        else
          Cc ? vd(l, u) && (Je = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Je = "onCompositionStart");
        Je && (wm && u.locale !== "ko" && (Cc || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && Cc && (we = Hm()) : (ei = Q, Um = "value" in ei ? ei.value : ei.textContent, Cc = !0)), me = Sr(B, Je), 0 < me.length && (Je = new Cp(
          Je,
          l,
          null,
          u,
          Q
        ), K.push({ event: Je, listeners: me }), we ? Je.data = we : (we = Xm(u), we !== null && (Je.data = we)))), (we = la ? Bp(l, u) : Pv(l, u)) && (Je = Sr(B, "onBeforeInput"), 0 < Je.length && (me = new Cp(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Q
        ), K.push({
          event: me,
          listeners: Je
        }), me.data = we)), pr(
          K,
          l,
          B,
          u,
          Q
        );
      }
      Cg(K, n);
    });
  }
  function vr(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Sr(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Nl(l, u), s != null && c.unshift(
        vr(l, s, r)
      ), s = Nl(l, n), s != null && c.push(
        vr(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Ug(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function zh(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var v = u, A = v.alternate, B = v.stateNode;
      if (v = v.tag, A !== null && A === c) break;
      v !== 5 && v !== 26 && v !== 27 || B === null || (A = B, s ? (B = Nl(u, r), B != null && m.unshift(
        vr(u, B, A)
      )) : s || (B = Nl(u, r), B != null && m.push(
        vr(u, B, A)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Hg = /\r\n?/g, u0 = /\u0000|\uFFFD/g;
  function i0(l) {
    return (typeof l == "string" ? l : "" + l).replace(Hg, `
`).replace(u0, "");
  }
  function c0(l, n) {
    return n = i0(n), i0(l) === n;
  }
  function Ut(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || ru(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && ru(l, "" + c);
        break;
      case "className":
        id(l, "class", c);
        break;
      case "tabIndex":
        id(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        id(l, u, c);
        break;
      case "style":
        Op(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          id(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = mn("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Ut(l, n, "name", s.name, s, null), Ut(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ut(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ut(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ut(l, n, "encType", s.encType, s, null), Ut(l, n, "method", s.method, s, null), Ut(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = mn("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Hn);
        break;
      case "onScroll":
        c != null && at("scroll", l);
        break;
      case "onScrollEnd":
        c != null && at("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(H(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(H(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = mn("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        at("beforetoggle", l), at("toggle", l), Yo(l, "popover", c);
        break;
      case "xlinkActuate":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Iu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Iu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Iu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        Yo(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = $v.get(u) || u, Yo(l, u, c));
    }
  }
  function o0(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        Op(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(H(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(H(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? ru(l, c) : (typeof c == "number" || typeof c == "bigint") && ru(l, "" + c);
        break;
      case "onScroll":
        c != null && at("scroll", l);
        break;
      case "onScrollEnd":
        c != null && at("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Hn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ni.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[sa] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : Yo(l, u, c);
          }
    }
  }
  function kl(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        at("error", l), at("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(H(137, n));
                default:
                  Ut(l, n, r, m, u, null);
              }
          }
        s && Ut(l, n, "srcSet", u.srcSet, u, null), c && Ut(l, n, "src", u.src, u, null);
        return;
      case "input":
        at("invalid", l);
        var v = r = m = s = null, A = null, B = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var Q = u[c];
            if (Q != null)
              switch (c) {
                case "name":
                  s = Q;
                  break;
                case "type":
                  m = Q;
                  break;
                case "checked":
                  A = Q;
                  break;
                case "defaultChecked":
                  B = Q;
                  break;
                case "value":
                  r = Q;
                  break;
                case "defaultValue":
                  v = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(H(137, n));
                  break;
                default:
                  Ut(l, n, c, Q, u, null);
              }
          }
        ps(
          l,
          r,
          v,
          A,
          B,
          m,
          s,
          !1
        );
        return;
      case "select":
        at("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (v = u[s], v != null))
            switch (s) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                c = v;
              default:
                Ut(l, n, s, v, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? qo(l, !!c, n, !1) : u != null && qo(l, !!c, u, !0);
        return;
      case "textarea":
        at("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (v = u[m], v != null))
            switch (m) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                r = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(H(91));
                break;
              default:
                Ut(l, n, m, v, u, null);
            }
        Rm(l, c, s, r);
        return;
      case "option":
        for (A in u)
          if (u.hasOwnProperty(A) && (c = u[A], c != null))
            switch (A) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Ut(l, n, A, c, u, null);
            }
        return;
      case "dialog":
        at("beforetoggle", l), at("toggle", l), at("cancel", l), at("close", l);
        break;
      case "iframe":
      case "object":
        at("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < _f.length; c++)
          at(_f[c], l);
        break;
      case "image":
        at("error", l), at("load", l);
        break;
      case "details":
        at("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        at("error", l), at("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in u)
          if (u.hasOwnProperty(B) && (c = u[B], c != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(H(137, n));
              default:
                Ut(l, n, B, c, u, null);
            }
        return;
      default:
        if (Mm(n)) {
          for (Q in u)
            u.hasOwnProperty(Q) && (c = u[Q], c !== void 0 && o0(
              l,
              n,
              Q,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (c = u[v], c != null && Ut(l, n, v, c, u, null));
  }
  function f0(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, m = null, v = null, A = null, B = null, Q = null;
        for (w in u) {
          var K = u[w];
          if (u.hasOwnProperty(w) && K != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = K;
              default:
                c.hasOwnProperty(w) || Ut(l, n, w, null, c, K);
            }
        }
        for (var j in c) {
          var w = c[j];
          if (K = u[j], c.hasOwnProperty(j) && (w != null || K != null))
            switch (j) {
              case "type":
                r = w;
                break;
              case "name":
                s = w;
                break;
              case "checked":
                B = w;
                break;
              case "defaultChecked":
                Q = w;
                break;
              case "value":
                m = w;
                break;
              case "defaultValue":
                v = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(H(137, n));
                break;
              default:
                w !== K && Ut(
                  l,
                  n,
                  j,
                  w,
                  c,
                  K
                );
            }
        }
        ys(
          l,
          m,
          v,
          A,
          B,
          Q,
          r,
          s
        );
        return;
      case "select":
        w = m = v = j = null;
        for (r in u)
          if (A = u[r], u.hasOwnProperty(r) && A != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                w = A;
              default:
                c.hasOwnProperty(r) || Ut(
                  l,
                  n,
                  r,
                  null,
                  c,
                  A
                );
            }
        for (s in c)
          if (r = c[s], A = u[s], c.hasOwnProperty(s) && (r != null || A != null))
            switch (s) {
              case "value":
                j = r;
                break;
              case "defaultValue":
                v = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== A && Ut(
                  l,
                  n,
                  s,
                  r,
                  c,
                  A
                );
            }
        n = v, u = m, c = w, j != null ? qo(l, !!u, j, !1) : !!c != !!u && (n != null ? qo(l, !!u, n, !0) : qo(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        w = j = null;
        for (v in u)
          if (s = u[v], u.hasOwnProperty(v) && s != null && !c.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ut(l, n, v, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                j = s;
                break;
              case "defaultValue":
                w = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(H(91));
                break;
              default:
                s !== r && Ut(l, n, m, s, c, r);
            }
        _m(l, j, w);
        return;
      case "option":
        for (var fe in u)
          if (j = u[fe], u.hasOwnProperty(fe) && j != null && !c.hasOwnProperty(fe))
            switch (fe) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Ut(
                  l,
                  n,
                  fe,
                  null,
                  c,
                  j
                );
            }
        for (A in c)
          if (j = c[A], w = u[A], c.hasOwnProperty(A) && j !== w && (j != null || w != null))
            switch (A) {
              case "selected":
                l.selected = j && typeof j != "function" && typeof j != "symbol";
                break;
              default:
                Ut(
                  l,
                  n,
                  A,
                  j,
                  c,
                  w
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Oe in u)
          j = u[Oe], u.hasOwnProperty(Oe) && j != null && !c.hasOwnProperty(Oe) && Ut(l, n, Oe, null, c, j);
        for (B in c)
          if (j = c[B], w = u[B], c.hasOwnProperty(B) && j !== w && (j != null || w != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(H(137, n));
                break;
              default:
                Ut(
                  l,
                  n,
                  B,
                  j,
                  c,
                  w
                );
            }
        return;
      default:
        if (Mm(n)) {
          for (var Ht in u)
            j = u[Ht], u.hasOwnProperty(Ht) && j !== void 0 && !c.hasOwnProperty(Ht) && o0(
              l,
              n,
              Ht,
              void 0,
              c,
              j
            );
          for (Q in c)
            j = c[Q], w = u[Q], !c.hasOwnProperty(Q) || j === w || j === void 0 && w === void 0 || o0(
              l,
              n,
              Q,
              j,
              c,
              w
            );
          return;
        }
    }
    for (var C in u)
      j = u[C], u.hasOwnProperty(C) && j != null && !c.hasOwnProperty(C) && Ut(l, n, C, null, c, j);
    for (K in c)
      j = c[K], w = u[K], !c.hasOwnProperty(K) || j === w || j == null && w == null || Ut(l, n, K, j, c, w);
  }
  function Dh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function s0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var s = u[c], r = s.transferSize, m = s.initiatorType, v = s.duration;
        if (r && v && Dh(m)) {
          for (m = 0, v = s.responseEnd, c += 1; c < u.length; c++) {
            var A = u[c], B = A.startTime;
            if (B > v) break;
            var Q = A.transferSize, K = A.initiatorType;
            Q && Dh(K) && (A = A.responseEnd, m += Q * (A < v ? 1 : (v - B) / (A - B)));
          }
          if (--c, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var _h = null, Rh = null;
  function oc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ng(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function r0(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Mf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Mh = null;
  function aS() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Mh ? !1 : (Mh = l, !0) : (Mh = null, !1);
  }
  var br = typeof setTimeout == "function" ? setTimeout : void 0, xg = typeof clearTimeout == "function" ? clearTimeout : void 0, co = typeof Promise == "function" ? Promise : void 0, Bg = typeof queueMicrotask == "function" ? queueMicrotask : typeof co < "u" ? function(l) {
    return co.resolve(null).then(l).catch(d0);
  } : br;
  function d0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Fn(l) {
    return l === "head";
  }
  function h0(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(s), Xf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          oo(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, oo(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, v = r.nodeName;
            r[fu] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && oo(l.ownerDocument.body);
      u = s;
    } while (u);
    Xf(n);
  }
  function pl(l, n) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function Er(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Er(u), ad(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function nS(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[fu])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = Oa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function ke(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Oa(l.nextSibling), l === null)) return null;
    return l;
  }
  function jg(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = Oa(l.nextSibling), l === null)) return null;
    return l;
  }
  function zn(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function fc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Cf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function Oa(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var Tr = null;
  function Ch(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return Oa(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function In(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Uf(l, n, u) {
    switch (n = oc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(H(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(H(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(H(454));
        return l;
      default:
        throw Error(H(451));
    }
  }
  function oo(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    ad(l);
  }
  var Na = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Set();
  function ua(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Pn = L.d;
  L.d = {
    f: uS,
    r: Yg,
    D: G,
    C: bt,
    L: iS,
    m: m0,
    X: Si,
    S: y0,
    M: sc
  };
  function uS() {
    var l = Pn.f(), n = Tf();
    return l || n;
  }
  function Yg(l) {
    var n = Tc(l);
    n !== null && n.tag === 5 && n.type === "form" ? Mt(n) : Pn.r(l);
  }
  var Hf = typeof document > "u" ? null : document;
  function El(l, n, u) {
    var c = Hf;
    if (c && typeof n == "string" && n) {
      var s = La(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Ar.has(s) || (Ar.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), kl(n, "link", l), Et(n), c.head.appendChild(n)));
    }
  }
  function G(l) {
    Pn.D(l), El("dns-prefetch", l, null);
  }
  function bt(l, n) {
    Pn.C(l, n), El("preconnect", l, n);
  }
  function iS(l, n, u) {
    Pn.L(l, n, u);
    var c = Hf;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + La(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + La(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + La(
        u.imageSizes
      ) + '"]')) : s += '[href="' + La(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = an(l);
          break;
        case "script":
          r = fo(l);
      }
      Na.has(r) || (l = X(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Na.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(rc(r)) || n === "script" && c.querySelector(Bf(r)) || (n = c.createElement("link"), kl(n, "link", l), Et(n), c.head.appendChild(n)));
    }
  }
  function m0(l, n) {
    Pn.m(l, n);
    var u = Hf;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + La(c) + '"][href="' + La(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = fo(l);
      }
      if (!Na.has(r) && (l = X({ rel: "modulepreload", href: l }, n), Na.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Bf(r)))
              return;
        }
        c = u.createElement("link"), kl(c, "link", l), Et(c), u.head.appendChild(c);
      }
    }
  }
  function y0(l, n, u) {
    Pn.S(l, n, u);
    var c = Hf;
    if (c && l) {
      var s = Ac(c).hoistableStyles, r = an(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = c.querySelector(
          rc(r)
        ))
          v.loading = 5;
        else {
          l = X(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Na.get(r)) && Uh(l, u);
          var A = m = c.createElement("link");
          Et(A), kl(A, "link", l), A._p = new Promise(function(B, Q) {
            A.onload = B, A.onerror = Q;
          }), A.addEventListener("load", function() {
            v.loading |= 1;
          }), A.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Or(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, s.set(r, m);
      }
    }
  }
  function Si(l, n) {
    Pn.X(l, n);
    var u = Hf;
    if (u && l) {
      var c = Ac(u).hoistableScripts, s = fo(l), r = c.get(s);
      r || (r = u.querySelector(Bf(s)), r || (l = X({ src: l, async: !0 }, n), (n = Na.get(s)) && Hh(l, n), r = u.createElement("script"), Et(r), kl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function sc(l, n) {
    Pn.M(l, n);
    var u = Hf;
    if (u && l) {
      var c = Ac(u).hoistableScripts, s = fo(l), r = c.get(s);
      r || (r = u.querySelector(Bf(s)), r || (l = X({ src: l, async: !0, type: "module" }, n), (n = Na.get(s)) && Hh(l, n), r = u.createElement("script"), Et(r), kl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Nf(l, n, u, c) {
    var s = (s = qe.current) ? ua(s) : null;
    if (!s) throw Error(H(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = an(u.href), u = Ac(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = an(u.href);
          var r = Ac(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            rc(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), Na.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Na.set(l, u), r || qg(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(H(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(H(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = fo(u), u = Ac(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(H(444, l));
    }
  }
  function an(l) {
    return 'href="' + La(l) + '"';
  }
  function rc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function xf(l) {
    return X({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function qg(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), kl(n, "link", u), Et(n), l.head.appendChild(n));
  }
  function fo(l) {
    return '[src="' + La(l) + '"]';
  }
  function Bf(l) {
    return "script[async]" + l;
  }
  function p0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + La(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Et(c), c;
          var s = X({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Et(c), kl(c, "style", s), Or(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = an(u.href);
          var r = l.querySelector(
            rc(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Et(r), r;
          c = xf(u), (s = Na.get(s)) && Uh(c, s), r = (l.ownerDocument || l).createElement("link"), Et(r);
          var m = r;
          return m._p = new Promise(function(v, A) {
            m.onload = v, m.onerror = A;
          }), kl(r, "link", c), n.state.loading |= 4, Or(r, u.precedence, l), n.instance = r;
        case "script":
          return r = fo(u.src), (s = l.querySelector(
            Bf(r)
          )) ? (n.instance = s, Et(s), s) : (c = u, (s = Na.get(r)) && (c = X({}, u), Hh(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Et(s), kl(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(H(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Or(c, u.precedence, l));
    return n.instance;
  }
  function Or(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var v = c[m];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Uh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Hh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var jf = null;
  function g0(l, n, u) {
    if (jf === null) {
      var c = /* @__PURE__ */ new Map(), s = jf = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = jf, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[fu] || r[Rt] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var v = c.get(m);
        v ? v.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function Nh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function v0(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function xa(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function ju(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = an(c.href), r = n.querySelector(
          rc(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = xh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Et(r);
          return;
        }
        r = n.ownerDocument || n, c = xf(c), (s = Na.get(s)) && Uh(c, s), r = r.createElement("link"), Et(r);
        var m = r;
        m._p = new Promise(function(v, A) {
          m.onload = v, m.onerror = A;
        }), kl(r, "link", c), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = xh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var nn = 0;
  function S0(l, n) {
    return l.stylesheets && l.count === 0 && jh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && jh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && nn === 0 && (nn = 62500 * s0());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && jh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > nn ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(s);
      };
    } : null;
  }
  function xh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) jh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Bh = null;
  function jh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Bh = /* @__PURE__ */ new Map(), n.forEach(wl, l), Bh = null, xh.call(l));
  }
  function wl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Bh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Bh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = xh.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var zr = {
    $$typeof: xt,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function b0(l, n, u, c, s, r, m, v, A) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hn(0), this.hiddenUpdates = hn(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Yh(l, n, u, c, s, r, m, v, A, B, Q, K) {
    return l = new b0(
      l,
      n,
      u,
      m,
      A,
      B,
      Q,
      K,
      v
    ), n = 1, r === !0 && (n |= 24), r = cl(3, null, null, n), l.current = r, r.stateNode = l, n = Ns(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, ws(r), l;
  }
  function so(l) {
    return l ? (l = ha, l) : ha;
  }
  function Gg(l, n, u, c, s, r) {
    s = so(s), c.context === null ? c.context = s : c.pendingContext = s, c = fi(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = Wa(l, c, n), u !== null && (Aa(u, l, n), ki(u, l, n));
  }
  function qh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function E0(l, n) {
    qh(l, n), (l = l.alternate) && qh(l, n);
  }
  function wg(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = li(l, 67108864);
      n !== null && Aa(n, l, 67108864), E0(l, 67108864);
    }
  }
  function ro(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Ha();
      n = ed(n);
      var u = li(l, n);
      u !== null && Aa(u, l, n), E0(l, n);
    }
  }
  var Rl = !0;
  function Yu(l, n, u, c) {
    var s = _.T;
    _.T = null;
    var r = L.p;
    try {
      L.p = 2, Wl(l, n, u, c);
    } finally {
      L.p = r, _.T = s;
    }
  }
  function qu(l, n, u, c) {
    var s = _.T;
    _.T = null;
    var r = L.p;
    try {
      L.p = 8, Wl(l, n, u, c);
    } finally {
      L.p = r, _.T = s;
    }
  }
  function Wl(l, n, u, c) {
    if (Rl) {
      var s = T0(c);
      if (s === null)
        n0(
          l,
          n,
          c,
          Gh,
          u
        ), bi(l, c);
      else if (cS(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (bi(l, c), n & 4 && -1 < za.indexOf(l)) {
        for (; s !== null; ) {
          var r = Tc(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = _e(r.pendingLanes);
                  if (m !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var A = 1 << 31 - Hl(m);
                      v.entanglements[1] |= A, m &= ~A;
                    }
                    Bu(r), (yt & 6) === 0 && (St = vl() + 500, vi(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = li(r, 2), v !== null && Aa(v, r, 2), Tf(), E0(r, 2);
            }
          if (r = T0(c), r === null && n0(
            l,
            n,
            c,
            Gh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        n0(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function T0(l) {
    return l = sd(l), Yf(l);
  }
  var Gh = null;
  function Yf(l) {
    if (Gh = null, l = Ec(l), l !== null) {
      var n = Ye(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = gt(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = ee(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Gh = l, null;
  }
  function Dr(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ir()) {
          case Co:
            return 2;
          case Uo:
            return 8;
          case Cn:
          case Pr:
            return 32;
          case Ho:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qf = !1, Ml = null, Fl = null, ia = null, dc = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map(), Ft = [], za = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function bi(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ml = null;
        break;
      case "dragenter":
      case "dragleave":
        Fl = null;
        break;
      case "mouseover":
      case "mouseout":
        ia = null;
        break;
      case "pointerover":
      case "pointerout":
        dc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dn.delete(n.pointerId);
    }
  }
  function ho(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Tc(n), n !== null && wg(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function cS(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Ml = ho(
          Ml,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Fl = ho(
          Fl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return ia = ho(
          ia,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return dc.set(
          r,
          ho(
            dc.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, Dn.set(
          r,
          ho(
            Dn.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Xg(l) {
    var n = Ec(l.target);
    if (n !== null) {
      var u = Ye(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = gt(u), n !== null) {
            l.blockedOn = n, Tm(l.priority, function() {
              ro(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = ee(u), n !== null) {
            l.blockedOn = n, Tm(l.priority, function() {
              ro(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function _r(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = T0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        fd = c, u.target.dispatchEvent(c), fd = null;
      } else
        return n = Tc(u), n !== null && wg(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Gf(l, n, u) {
    _r(l) && u.delete(n);
  }
  function Qg() {
    qf = !1, Ml !== null && _r(Ml) && (Ml = null), Fl !== null && _r(Fl) && (Fl = null), ia !== null && _r(ia) && (ia = null), dc.forEach(Gf), Dn.forEach(Gf);
  }
  function Gu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, qf || (qf = !0, J.unstable_scheduleCallback(
      J.unstable_NormalPriority,
      Qg
    )));
  }
  var wf = null;
  function Lg(l) {
    wf !== l && (wf = l, J.unstable_scheduleCallback(
      J.unstable_NormalPriority,
      function() {
        wf === l && (wf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (Yf(c || u) === null)
              continue;
            break;
          }
          var r = Tc(u);
          r !== null && (l.splice(n, 3), n -= 3, ff(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Xf(l) {
    function n(A) {
      return Gu(A, l);
    }
    Ml !== null && Gu(Ml, l), Fl !== null && Gu(Fl, l), ia !== null && Gu(ia, l), dc.forEach(n), Dn.forEach(n);
    for (var u = 0; u < Ft.length; u++) {
      var c = Ft[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Ft.length && (u = Ft[0], u.blockedOn === null); )
      Xg(u), u.blockedOn === null && Ft.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[sa] || null;
        if (typeof r == "function")
          m || Lg(u);
        else if (m) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[sa] || null)
              v = m.formAction;
            else if (Yf(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[c + 1] = v : (u.splice(c, 3), c -= 3), Lg(u);
        }
      }
  }
  function A0() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function wh(l) {
    this._internalRoot = l;
  }
  Xh.prototype.render = wh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(H(409));
    var u = n.current, c = Ha();
    Gg(u, c, l, n, null, null);
  }, Xh.prototype.unmount = wh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Gg(l.current, 2, null, l, null, null), Tf(), n[Hi] = null;
    }
  };
  function Xh(l) {
    this._internalRoot = l;
  }
  Xh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = td();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ft.length && n !== 0 && n < Ft[u].priority; u++) ;
      Ft.splice(u, 0, l), u === 0 && Xg(l);
    }
  };
  var O0 = ne.version;
  if (O0 !== "19.2.0")
    throw Error(
      H(
        527,
        O0,
        "19.2.0"
      )
    );
  L.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(H(188)) : (l = Object.keys(l).join(","), Error(H(268, l)));
    return l = k(n), l = l !== null ? He(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Vg = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rr.isDisabled && Rr.supportsFiber)
      try {
        dn = Rr.inject(
          Vg
        ), Ol = Rr;
      } catch {
      }
  }
  return vp.createRoot = function(l, n) {
    if (!ze(l)) throw Error(H(299));
    var u = !1, c = "", s = Id, r = zy, m = Pd;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Yh(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      s,
      r,
      m,
      A0
    ), l[Hi] = n.current, Rf(l), new wh(n);
  }, vp.hydrateRoot = function(l, n, u) {
    if (!ze(l)) throw Error(H(299));
    var c = !1, s = "", r = Id, m = zy, v = Pd, A = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (A = u.formState)), n = Yh(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      A,
      r,
      m,
      v,
      A0
    ), n.context = so(null), u = n.current, c = Ha(), c = ed(c), s = fi(c), s.callback = null, Wa(u, s, c), u = c, n.current.lanes = u, Ui(n, u), Bu(n), l[Hi] = n.current, Rf(l), new Xh(n);
  }, vp.version = "19.2.0", vp;
}
var Sp = {};
var L2;
function _T() {
  return L2 || (L2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function J(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function ne(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = El(e) ? e.slice() : ke({}, e);
      return f[o] = ne(e[o], t, a + 1, i), f;
    }
    function $e(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return H(e, t, a, 0);
      }
    }
    function H(e, t, a, i) {
      var o = t[i], f = El(e) ? e.slice() : ke({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], El(f) ? f.splice(o, 1) : delete f[o]) : f[o] = H(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function ze(e, t, a) {
      var i = t[a], o = El(e) ? e.slice() : ke({}, e);
      return a + 1 === t.length ? (El(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = ze(e[i], t, a + 1), o);
    }
    function Ye() {
      return !1;
    }
    function gt() {
      return null;
    }
    function ee() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function ae() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function k() {
    }
    function He() {
    }
    function X(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function U(e, t, a, i) {
      return new Pv(e, t, a, i);
    }
    function ie(e, t) {
      e.context === Zf && (zh(e.current, 2, t, e, null, null), tn());
    }
    function Le(e, t) {
      if (Qu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, ur(), Bp(
          e.current,
          t,
          a
        ), tn();
      }
    }
    function _t(e) {
      Qu = e;
    }
    function ft(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function lt(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Al(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function xt(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Kt(e) {
      if (lt(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function tl(e) {
      var t = e.alternate;
      if (!t) {
        if (t = lt(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Kt(o), e;
            if (f === i) return Kt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function il(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = il(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function De(e) {
      return e === null || typeof e != "object" ? null : (e = Yg && e[Yg] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Ve(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Hf ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Cf:
          return "Fragment";
        case Tr:
          return "Profiler";
        case Oa:
          return "StrictMode";
        case oo:
          return "Suspense";
        case Na:
          return "SuspenseList";
        case Pn:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case fc:
            return "Portal";
          case In:
            return e.displayName || "Context";
          case Ch:
            return (e._context.displayName || "Context") + ".Consumer";
          case Uf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Ar:
            return t = e.displayName || null, t !== null ? t : Ve(e.type) || "Memo";
          case ua:
            t = e._payload, e = e._init;
            try {
              return Ve(e(t));
            } catch {
            }
        }
      return null;
    }
    function Dt(e) {
      return typeof e.tag == "number" ? se(e) : typeof e.name == "string" ? e.name : null;
    }
    function se(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return t.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Ve(t);
        case 8:
          return t === Oa ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return se(e.return);
      }
      return null;
    }
    function Bt(e) {
      return { current: e };
    }
    function ye(e, t) {
      0 > Si ? console.error("Unexpected pop.") : (t !== y0[Si] && console.error("Unexpected Fiber popped."), e.current = m0[Si], m0[Si] = null, y0[Si] = null, Si--);
    }
    function je(e, t, a) {
      Si++, m0[Si] = e.current, y0[Si] = a, e.current = t;
    }
    function Lt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function jt(e, t) {
      je(an, t, e), je(Nf, e, e), je(sc, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? sg(t) : _o;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = sg(t), t = pi(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = gm;
                break;
              case "math":
                t = Bv;
                break;
              default:
                t = _o;
            }
      }
      a = a.toLowerCase(), a = Dm(null, a), a = {
        context: t,
        ancestorInfo: a
      }, ye(sc, e), je(sc, a, e);
    }
    function _(e) {
      ye(sc, e), ye(Nf, e), ye(an, e);
    }
    function L() {
      return Lt(sc.current);
    }
    function P(e) {
      e.memoizedState !== null && je(rc, e, e);
      var t = Lt(sc.current), a = e.type, i = pi(t.context, a);
      a = Dm(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (je(Nf, e, e), je(sc, i, e));
    }
    function pe(e) {
      Nf.current === e && (ye(sc, e), ye(Nf, e)), rc.current === e && (ye(rc, e), hp._currentValue = Fr);
    }
    function Ae() {
    }
    function S() {
      if (xf === 0) {
        qg = console.log, fo = console.info, Bf = console.warn, p0 = console.error, Or = console.group, Uh = console.groupCollapsed, Hh = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ae,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      xf++;
    }
    function x() {
      if (xf--, xf === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ke({}, e, { value: qg }),
          info: ke({}, e, { value: fo }),
          warn: ke({}, e, { value: Bf }),
          error: ke({}, e, { value: p0 }),
          group: ke({}, e, { value: Or }),
          groupCollapsed: ke({}, e, { value: Uh }),
          groupEnd: ke({}, e, { value: Hh })
        });
      }
      0 > xf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function F(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function W(e) {
      if (jf === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          jf = t && t[1] || "", g0 = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + jf + e + g0;
    }
    function ve(e, t) {
      if (!e || Nh) return "";
      var a = v0.get(e);
      if (a !== void 0) return a;
      Nh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = G.H, G.H = null, S();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var E = function() {
                  throw Error();
                };
                if (Object.defineProperty(E.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(E, []);
                  } catch (le) {
                    var Y = le;
                  }
                  Reflect.construct(e, [], E);
                } else {
                  try {
                    E.call();
                  } catch (le) {
                    Y = le;
                  }
                  e.call(E.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (le) {
                  Y = le;
                }
                (E = e()) && typeof E.catch == "function" && E.catch(function() {
                });
              }
            } catch (le) {
              if (le && Y && typeof le.stack == "string")
                return [le.stack, Y.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), z = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < z.length && !z[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === z.length)
            for (f = p.length - 1, d = z.length - 1; 1 <= f && 0 <= d && p[f] !== z[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== z[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== z[d]) {
                    var R = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && v0.set(e, R), R;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Nh = !1, G.H = i, x(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? W(p) : "", typeof e == "function" && v0.set(e, p), p;
    }
    function qe(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return W(e.type);
        case 16:
          return W("Lazy");
        case 13:
          return e.child !== t && t !== null ? W("Suspense Fallback") : W("Suspense");
        case 19:
          return W("SuspenseList");
        case 0:
        case 15:
          return ve(e.type, !1);
        case 11:
          return ve(e.type.render, !1);
        case 1:
          return ve(e.type, !0);
        case 31:
          return W("Activity");
        default:
          return "";
      }
    }
    function Ee(e) {
      try {
        var t = "", a = null;
        do {
          t += qe(e, a);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var z = F(p), R = z.lastIndexOf(`
`), E = R === -1 ? z : z.slice(R + 1);
                    if (E.indexOf(h) !== -1) {
                      var Y = `
` + E;
                      break e;
                    }
                  }
                  Y = W(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + Y;
              }
            }
          a = e, e = e.return;
        } while (e);
        return t;
      } catch (le) {
        return `
Error generating stack: ` + le.message + `
` + le.stack;
      }
    }
    function Vt(e) {
      return (e = e ? e.displayName || e.name : "") ? W(e) : "";
    }
    function ht() {
      if (xa === null) return null;
      var e = xa._debugOwner;
      return e != null ? Dt(e) : null;
    }
    function qa() {
      if (xa === null) return "";
      var e = xa;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += W(e.type);
            break;
          case 13:
            t += W("Suspense");
            break;
          case 19:
            t += W("SuspenseList");
            break;
          case 31:
            t += W("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Vt(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Vt(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            if (e && i) {
              var o = F(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + F(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function ce(e, t, a, i, o, f, d) {
      var h = xa;
      _i(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        _i(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function _i(e) {
      G.getCurrentStack = e === null ? null : qa, ju = !1, xa = e;
    }
    function Ri(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function Ga(e) {
      try {
        return iu(e), !1;
      } catch {
        return !0;
      }
    }
    function iu(e) {
      return "" + e;
    }
    function mt(e, t) {
      if (Ga(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Ri(e)
        ), iu(e);
    }
    function ea(e, t) {
      if (Ga(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Ri(e)
        ), iu(e);
    }
    function vc(e) {
      if (Ga(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Ri(e)
        ), iu(e);
    }
    function rs(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        ro = t.inject(e), Rl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function re(e) {
      if (typeof E0 == "function" && wg(e), Rl && typeof Rl.setStrictMode == "function")
        try {
          Rl.setStrictMode(ro, e);
        } catch (t) {
          Yu || (Yu = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function Mi(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (T0(e) / Gh | 0) | 0;
    }
    function cu(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function Sc(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = cu(i) : (d &= h, d !== 0 ? o = cu(d) : a || (a = h & ~e, a !== 0 && (o = cu(a))))) : (h = i & ~f, h !== 0 ? o = cu(h) : d !== 0 ? o = cu(d) : a || (a = i & ~e, a !== 0 && (o = cu(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function vl(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Ir(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Co() {
      var e = qf;
      return qf <<= 1, (qf & 62914560) === 0 && (qf = 4194304), e;
    }
    function Uo(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Cn(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Pr(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var z = 31 - Wl(a), R = 1 << z;
        h[z] = 0, y[z] = -1;
        var E = p[z];
        if (E !== null)
          for (p[z] = null, z = 0; z < E.length; z++) {
            var Y = E[z];
            Y !== null && (Y.lane &= -536870913);
          }
        a &= ~R;
      }
      i !== 0 && Ho(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function Ho(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Wl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function ds(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Wl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function bc(e, t) {
      var a = t & -t;
      return a = (a & 42) !== 0 ? 1 : dn(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
    }
    function dn(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Ol(e, t, a) {
      if (qu)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Wl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function wa(e, t) {
      if (qu)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Wl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Hl(e) {
      return e &= -e, Ml < e ? Fl < e ? (e & 134217727) !== 0 ? ia : dc : Fl : Ml;
    }
    function Ci() {
      var e = bt.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? ia : _h(e.type));
    }
    function g(e, t) {
      var a = bt.p;
      try {
        return bt.p = e, t();
      } finally {
        bt.p = a;
      }
    }
    function M(e) {
      delete e[Ft], delete e[za], delete e[ho], delete e[cS], delete e[Xg];
    }
    function I(e) {
      var t = e[Ft];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[bi] || a[Ft]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = no(e); e !== null; ) {
              if (a = e[Ft])
                return a;
              e = no(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function te(e) {
      if (e = e[Ft] || e[bi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function de(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function _e(e) {
      var t = e[_r];
      return t || (t = e[_r] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function he(e) {
      e[Gf] = !0;
    }
    function Pe(e, t) {
      Ge(e, t), Ge(e + "Capture", t);
    }
    function Ge(e, t) {
      Gu[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Gu[e] = t;
      var a = e.toLowerCase();
      for (wf[a] = e, e === "onDoubleClick" && (wf.ondblclick = e), e = 0; e < t.length; e++)
        Qg.add(t[e]);
    }
    function ta(e, t) {
      Lg[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function hn(e) {
      return nn.call(wh, e) ? !0 : nn.call(A0, e) ? !1 : Xf.test(e) ? wh[e] = !0 : (A0[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Ui(e, t, a) {
      if (hn(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (mt(a, t), e === "" + a ? a : e);
      }
    }
    function No(e, t, a) {
      if (hn(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          mt(a, t), e.setAttribute(t, "" + a);
        }
    }
    function hs(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        mt(a, t), e.setAttribute(t, "" + a);
      }
    }
    function ou(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        mt(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Xa(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return vc(e), e;
        default:
          return "";
      }
    }
    function ed(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Em(e, t, a) {
      var i = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            vc(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            vc(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function td(e) {
      if (!e._valueTracker) {
        var t = ed(e) ? "checked" : "value";
        e._valueTracker = Em(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function Tm(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = ed(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function Un(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Rt(e) {
      return e.replace(
        Xh,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function sa(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Vg || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ht() || "A component",
        t.type
      ), Vg = !0), t.value === void 0 || t.defaultValue === void 0 || O0 || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ht() || "A component",
        t.type
      ), O0 = !0);
    }
    function Hi(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (mt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Xa(t)) : e.value !== "" + Xa(t) && (e.value = "" + Xa(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Am(e, d, Xa(t)) : a != null ? Am(e, d, Xa(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (mt(h, "name"), e.name = "" + Xa(h)) : e.removeAttribute("name");
    }
    function ld(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (mt(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          td(e);
          return;
        }
        a = a != null ? "" + Xa(a) : "", t = t != null ? "" + Xa(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (mt(d, "name"), e.name = d), td(e);
    }
    function Am(e, t, a) {
      t === "number" && Un(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Ep(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Er.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Rr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Rr = !0);
    }
    function Om() {
      var e = ht();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function fu(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Xa(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function ad(e, t) {
      for (e = 0; e < c.length; e++) {
        var a = c[e];
        if (t[a] != null) {
          var i = El(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Om()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Om()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function Ec(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        ht() || "A component"
      ), s = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Tc(e, t, a) {
      if (t != null && (t = "" + Xa(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Xa(a) : "";
    }
    function xo(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (El(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Xa(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), td(e);
    }
    function Ac(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Ac(e.children[0], t) : e;
    }
    function Et(e) {
      return "  " + "  ".repeat(e);
    }
    function Oc(e) {
      return "+ " + "  ".repeat(e);
    }
    function Ni(e) {
      return "- " + "  ".repeat(e);
    }
    function xi(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function su(e, t) {
      return r.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function nd(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Oc(a) + su(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Oc(a) + su(e, i) + `
` + Ni(a) + su(t, i) + `
`;
      }
      return Et(a) + su(e, i) + `
`;
    }
    function ud(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Bo(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (El(e)) return "[...]";
          if (e.$$typeof === zn)
            return (t = Ve(e.type)) ? "<" + t + ">" : "<...>";
          var a = ud(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Bo(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function jo(e, t) {
      return typeof e != "string" || r.test(e) ? "{" + Bo(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Yo(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = jo(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function id(e, t, a) {
      var i = "", o = ke({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Bo(e[f], d);
          t.hasOwnProperty(f) ? (d = Bo(t[f], d), i += Oc(a) + f + ": " + h + `
`, i += Ni(a) + f + ": " + d + `
`) : i += Oc(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = Bo(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += Ni(a) + y + ": " + e + `
`);
      return i;
    }
    function Iu(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += Yo(
          e,
          t,
          Et(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var z = jo(
                p,
                h
              );
              h = jo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && ud(p) === "Object" && ud(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < z.indexOf("...") || -1 < h.indexOf("...")) ? o += Et(i + 1) + d + `={{
` + id(
                p,
                y,
                i + 2
              ) + Et(i + 1) + `}}
` : (o += Oc(i + 1) + d + "=" + z + `
`, o += Ni(i + 1) + d + "=" + h + `
`);
            } else
              o += Et(i + 1) + d + "=" + jo(t[d], h) + `
`;
          }
        f.forEach(function(R) {
          if (R !== "children") {
            var E = 120 - 2 * (i + 1) - R.length - 1;
            o += Ni(i + 1) + R + "=" + jo(a[R], E) + `
`;
          }
        }), o = o === "" ? Et(i) + "<" + e + `>
` : Et(i) + "<" + e + `
` + o + Et(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += nd(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + nd("" + t, null, i + 1) : o + nd("" + t, void 0, i + 1)), o;
    }
    function Qa(e, t) {
      var a = xi(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Qa(e, t), e = e.sibling;
        return a;
      }
      return Et(t) + "<" + a + `>
`;
    }
    function cd(e, t) {
      var a = Ac(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Et(t) + `...
` + cd(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Et(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = nd(o, e.serverProps, t), t++;
      else if (f = xi(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = jo(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Et(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Yo(
            f,
            o,
            Oc(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Iu(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += cd(d, t), f++) : p += Qa(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Et(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (Ni(t) + su(f, 120 - 2 * t) + `
`) : p + Yo(
          f.type,
          f.props,
          Ni(t)
        );
      return a + i + p;
    }
    function zm(e) {
      try {
        return `

` + cd(e, 0);
      } catch {
        return "";
      }
    }
    function od(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? zm(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Dm(e, t) {
      var a = ke({}, e || Q), i = { tag: t };
      return v.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), A.indexOf(t) !== -1 && (a.pTagInButtonScope = null), m.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function ms(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return B.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Kv(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function La(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function ys(e, t) {
      t = t || Q;
      var a = t.current;
      if (t = (a = ms(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Kv(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, K[t]) return !1;
      K[t] = !0;
      var o = (t = xa) ? La(t.return, i) : null, f = t !== null && o !== null ? od(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || ce(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function ps(e, t, a) {
      if (a || ms("#text", t, !1))
        return !0;
      if (a = "#text|" + t, K[a]) return !1;
      K[a] = !0;
      var i = (a = xa) ? La(a, t) : null;
      return a = a !== null && i !== null ? od(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function zc(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function qo(e) {
      return e.replace(C, function(t, a) {
        return a.toUpperCase();
      });
    }
    function _m(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? N.hasOwnProperty(t) && N[t] || (N[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        qo(t.replace(Ht, "ms-"))
      )) : Oe.test(t) ? N.hasOwnProperty(t) && N[t] || (N[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !D.test(a) || Z.hasOwnProperty(a) && Z[a] || (Z[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(D, "")
      )), typeof a == "number" && (isNaN(a) ? Se || (Se = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || rt || (rt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || me.has(t) ? t === "float" ? e.cssFloat = a : (ea(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Rm(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = j[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = j[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = j[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var z = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                z == null || typeof z == "boolean" || z === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var R in a)
          !a.hasOwnProperty(R) || t != null && t.hasOwnProperty(R) || (R.indexOf("--") === 0 ? e.setProperty(R, "") : R === "float" ? e.cssFloat = "" : e[R] = "");
        for (var E in t)
          p = t[E], t.hasOwnProperty(E) && a[E] !== p && _m(e, E, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && _m(e, i, t[i]);
    }
    function ru(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Tp(e) {
      return pt.get(e) || e;
    }
    function Ap(e, t) {
      if (nn.call(Qh, t) && Qh[t])
        return !0;
      if (W2.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Zg.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Qh[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Qh[t] = !0;
      }
      if (k2.test(t)) {
        if (e = t.toLowerCase(), e = Zg.hasOwnProperty(e) ? e : null, e == null) return Qh[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Qh[t] = !0);
      }
      return !0;
    }
    function Op(e, t) {
      var a = [], i;
      for (i in t)
        Ap(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Mm(e, t, a, i) {
      if (nn.call(un, t) && un[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), un[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), un[t] = !0;
        if (E1.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), un[t] = !0;
      } else if (E1.test(t))
        return F2.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), un[t] = !0;
      if (I2.test(t) || P2.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), un[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), un[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), un[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), un[t] = !0;
      if (eu.hasOwnProperty(o)) {
        if (o = eu[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), un[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), un[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), un[t] = !0);
          }
        case "function":
        case "symbol":
          return un[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), un[t] = !0;
          }
      }
      return !0;
    }
    function $v(e, t, a) {
      var i = [], o;
      for (o in t)
        Mm(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function gs(e) {
      return eE.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function mn() {
    }
    function Hn(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function fd(e) {
      var t = te(e);
      if (t && (e = t.stateNode)) {
        var a = e[za] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Hi(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (mt(t, "name"), a = a.querySelectorAll(
                'input[name="' + Rt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[za] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Hi(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && Tm(i);
            }
            break e;
          case "textarea":
            Tc(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && fu(e, !!a.multiple, t, !1);
        }
      }
    }
    function sd(e, t, a) {
      if (oS) return e(t, a);
      oS = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (oS = !1, (Lh !== null || Vh !== null) && (tn(), Lh && (t = Lh, e = Vh, Vh = Lh = null, fd(t), e)))
          for (t = 0; t < e.length; t++) fd(e[t]);
      }
    }
    function du(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[za] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Dc() {
      if (Jg) return Jg;
      var e, t = sS, a = t.length, i, o = "value" in Qf ? Qf.value : Qf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Jg = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function vs(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Go() {
      return !0;
    }
    function Cm() {
      return !1;
    }
    function Nl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Go : Cm, this.isPropagationStopped = Cm, this;
      }
      return ke(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Go);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Go);
        },
        persist: function() {
        },
        isPersistent: Go
      }), t;
    }
    function Pu(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = hE[e]) ? !!t[e] : !1;
    }
    function Ss() {
      return Pu;
    }
    function wo(e, t) {
      switch (e) {
        case "keyup":
          return zE.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== z1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ei(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Um(e, t) {
      switch (e) {
        case "compositionend":
          return ei(t);
        case "keypress":
          return t.which !== _1 ? null : (M1 = !0, R1);
        case "textInput":
          return e = t.data, e === R1 && M1 ? null : e;
        default:
          return null;
      }
    }
    function rd(e, t) {
      if (Zh)
        return e === "compositionend" || !mS && wo(e, t) ? (e = Dc(), Jg = sS = Qf = null, Zh = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return D1 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Hm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!_E[e.type] : t === "textarea";
    }
    function dd(e) {
      if (!hc) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function bs(e, t, a, i) {
      Lh ? Vh ? Vh.push(i) : Vh = [i] : Lh = i, t = kn(t, "onChange"), 0 < t.length && (a = new Kg(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function zp(e) {
      Ot(e, 0);
    }
    function $l(e) {
      var t = de(e);
      if (Tm(t)) return e;
    }
    function Bi(e, t) {
      if (e === "change") return t;
    }
    function Es() {
      C0 && (C0.detachEvent("onpropertychange", Xo), U0 = C0 = null);
    }
    function Xo(e) {
      if (e.propertyName === "value" && $l(U0)) {
        var t = [];
        bs(
          t,
          U0,
          e,
          Hn(e)
        ), sd(zp, t);
      }
    }
    function kv(e, t, a) {
      e === "focusin" ? (Es(), C0 = t, U0 = a, C0.attachEvent("onpropertychange", Xo)) : e === "focusout" && Es();
    }
    function Nm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return $l(U0);
    }
    function xm(e, t) {
      if (e === "click") return $l(t);
    }
    function Ts(e, t) {
      if (e === "input" || e === "change")
        return $l(t);
    }
    function hd(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Qo(e, t) {
      if (cn(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!nn.call(t, o) || !cn(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function Dp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function _p(e, t) {
      var a = Dp(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Dp(a);
      }
    }
    function Rp(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function md(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Un(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Un(e.document);
      }
      return t;
    }
    function Bm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Mp(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      pS || Jh == null || Jh !== Un(i) || (i = Jh, "selectionStart" in i && Bm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), H0 && Qo(H0, i) || (H0 = i, i = kn(yS, "onSelect"), 0 < i.length && (t = new Kg(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Jh)));
    }
    function _c(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Rc(e) {
      if (gS[e]) return gS[e];
      if (!Kh[e]) return e;
      var t = Kh[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in U1)
          return gS[e] = t[a];
      return e;
    }
    function Nn(e, t) {
      j1.set(e, t), Pe(t, [e]);
    }
    function Cp(e) {
      for (var t = kg, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (El(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== kg && t !== TS)
              return bS;
            t = TS;
          } else return bS;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== kg && t !== ES)
            return bS;
          t = ES;
        }
      }
      return t;
    }
    function jm(e, t, a, i) {
      for (var o in e)
        nn.call(e, o) && o[0] !== "_" && hu(o, e[o], t, a, i);
    }
    function hu(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === zn) {
              var f = Ve(t.type) || "…", d = t.key;
              t = t.props;
              var h = Object.keys(t), y = h.length;
              if (d == null && y === 0) {
                t = "<" + f + " />";
                break;
              }
              if (3 > i || y === 1 && h[0] === "children" && d == null) {
                t = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(i) + e,
                "<" + f
              ]), d !== null && hu(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!El(t.children) || 0 < t.children.length) && (e = !0) : nn.call(t, p) && p[0] !== "_" && hu(
                  p,
                  t[p],
                  a,
                  i + 1,
                  o
                );
              a.push([
                "",
                e ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(t), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = Cp(t), p === ES || p === kg) {
                t = JSON.stringify(t);
                break;
              } else if (p === TS) {
                for (a.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], hu(
                    f[0],
                    f[1],
                    a,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (t.status === "fulfilled") {
                if (f = a.length, hu(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, hu(
                e,
                t.reason,
                a,
                i,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(i) + e,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(t)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(i) + e,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && jm(t, a, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === xE ? "…" : JSON.stringify(t);
          break;
        case "undefined":
          t = "undefined";
          break;
        case "boolean":
          t = t ? "true" : "false";
          break;
        default:
          t = String(t);
      }
      a.push([
        o + "  ".repeat(i) + e,
        t
      ]);
    }
    function Up(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          Wg + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [Wg + o, "…"],
                [Fg + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === zn) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Ve(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [Wg + o, d],
                        [Fg + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        G1 + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, Up(
                        d,
                        h,
                        a,
                        i + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    G1 + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              hu(f, d, a, i, Wg), hu(f, h, a, i, Fg);
            }
            o = !1;
          }
        } else
          a.push([
            Fg + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function xn(e) {
      st = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function yn(e, t, a, i) {
      It && (Vf.start = t, Vf.end = a, mo.color = "warning", mo.tooltipText = i, mo.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          Vf
        )
      ) : performance.measure(i, Vf));
    }
    function yd(e, t, a) {
      yn(e, t, a, "Reconnect");
    }
    function pd(e, t, a, i, o) {
      var f = se(e);
      if (f !== null && It) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [BE], p = Up(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Lf && (d.lanes & o) === 0 && 100 < e.actualDuration ? (Lf = !0, y[0] = jE, mo.color = "warning", mo.tooltipText = w1) : (mo.color = i, mo.tooltipText = f), mo.properties = y, Vf.start = t, Vf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Vf
          )
        ) : performance.measure(
          "​" + f,
          Vf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            wu,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          wu,
          void 0,
          i
        );
      }
    }
    function Ym(e, t, a, i) {
      if (It) {
        var o = se(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && hu("key", e.key, d, 0, ""), e.memoizedProps !== null && jm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: wu,
                tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, e)
          ) : performance.measure("​" + o, e);
        }
      }
    }
    function Bn(e, t, a, i, o) {
      if (o !== null) {
        if (It) {
          var f = se(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && hu("key", e.key, i, 0, ""), e.memoizedProps !== null && jm(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: wu,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (e = e._debugTask) ? e.run(
              performance.measure.bind(
                performance,
                "​" + f,
                t
              )
            ) : performance.measure("​" + f, t);
          }
        }
      } else
        f = se(e), f !== null && It && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            wu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          wu,
          void 0,
          o
        ));
    }
    function Wv(e, t, a, i) {
      if (It && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            st,
            ct,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          st,
          ct,
          o
        );
      }
    }
    function Hp(e, t, a, i) {
      !It || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          st,
          ct,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        st,
        ct,
        a
      ));
    }
    function Np(e, t, a, i) {
      !It || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          st,
          ct,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        st,
        ct,
        a
      ));
    }
    function Fv(e, t, a, i, o, f) {
      if (It && !(t <= e)) {
        a = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "primary-dark",
              track: st,
              trackGroup: ct,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function qm(e, t, a, i) {
      !It || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          st,
          ct,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        st,
        ct,
        "error"
      ));
    }
    function Iv(e, t, a, i) {
      !It || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          st,
          ct,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        st,
        ct,
        "secondary-light"
      ));
    }
    function xp(e, t, a, i, o) {
      if (It && !(t <= e)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "error",
              track: st,
              trackGroup: ct,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function Gm(e, t, a) {
      !It || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        st,
        ct,
        "secondary-dark"
      );
    }
    function gd() {
      for (var e = $h, t = AS = $h = 0; t < e; ) {
        var a = Xu[t];
        Xu[t++] = null;
        var i = Xu[t];
        Xu[t++] = null;
        var o = Xu[t];
        Xu[t++] = null;
        var f = Xu[t];
        if (Xu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && wm(a, o, f);
      }
    }
    function Lo(e, t, a, i) {
      Xu[$h++] = e, Xu[$h++] = t, Xu[$h++] = a, Xu[$h++] = i, AS |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Mc(e, t, a, i) {
      return Lo(e, t, a, i), As(e);
    }
    function la(e, t) {
      return Lo(e, null, null, t), As(e);
    }
    function wm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & N0 || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Wl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function As(e) {
      if (ip > IE)
        throw Zr = ip = 0, cp = l1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Zr > PE && (Zr = 0, cp = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && On(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && On(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function ji(e) {
      if (Qu === null) return e;
      var t = Qu(e);
      return t === void 0 ? e : t.current;
    }
    function vd(e) {
      if (Qu === null) return e;
      var t = Qu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = ji(e.render), e.render !== t) ? (t = { $$typeof: Uf, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Xm(e, t) {
      if (Qu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === ua) && (i = !0);
          break;
        case 11:
          (o === Uf || o === ua) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Ar || o === ua) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Qu(a), e !== void 0 && e === Qu(t)));
    }
    function Cc(e) {
      Qu !== null && typeof WeakSet == "function" && (kh === null && (kh = /* @__PURE__ */ new WeakSet()), kh.add(e));
    }
    function Bp(e, t, a) {
      do {
        var i = e, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = i;
            break;
          case 11:
            y = i.render;
        }
        if (Qu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = Qu(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), kh !== null && (kh.has(e) || o !== null && kh.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = la(e, 2), o !== null && Ue(o, e, 2)), f === null || i || Bp(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function Pv(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, X1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Qm(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function mu(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = U(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = ji(e.type);
          break;
        case 1:
          a.type = ji(e.type);
          break;
        case 11:
          a.type = vd(e.type);
      }
      return a;
    }
    function Lm(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function Uc(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Qm(e) && (d = 1), h = ji(h);
      else if (typeof e == "string")
        d = L(), d = Cg(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Pn:
            return t = U(31, a, t, o), t.elementType = Pn, t.lanes = f, t;
          case Cf:
            return Hc(
              a.children,
              o,
              f,
              t
            );
          case Oa:
            d = 8, o |= Ba, o |= Ei;
            break;
          case Tr:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = U(12, e, t, i | We), t.elementType = Tr, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case oo:
            return t = U(13, a, t, o), t.elementType = oo, t.lanes = f, t;
          case Na:
            return t = U(19, a, t, o), t.elementType = Na, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case In:
                  d = 10;
                  break e;
                case Ch:
                  d = 9;
                  break e;
                case Uf:
                  d = 11, h = vd(h);
                  break e;
                case Ar:
                  d = 14;
                  break e;
                case ua:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : El(e) ? a = "array" : e !== void 0 && e.$$typeof === zn ? (a = "<" + (Ve(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Dt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = U(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Yi(e, t, a) {
      return t = Uc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Hc(e, t, a, i) {
      return e = U(7, e, i, t), e.lanes = a, e;
    }
    function Vo(e, t, a) {
      return e = U(6, e, null, t), e.lanes = a, e;
    }
    function Vm(e) {
      var t = U(18, null, null, Ce);
      return t.stateNode = e, t;
    }
    function Sd(e, t, a) {
      return t = U(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function ra(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = OS.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Ee(t)
        }, OS.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Ee(t)
      };
    }
    function jn(e, t) {
      qi(), Wh[Fh++] = x0, Wh[Fh++] = Ig, Ig = e, x0 = t;
    }
    function Zm(e, t, a) {
      qi(), Lu[Vu++] = po, Lu[Vu++] = go, Lu[Vu++] = Cr, Cr = e;
      var i = po;
      e = go;
      var o = 32 - Wl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Wl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, po = 1 << 32 - Wl(t) + o | a << o | i, go = f + e;
      } else
        po = 1 << f | a << o | i, go = e;
    }
    function bd(e) {
      qi(), e.return !== null && (jn(e, 1), Zm(e, 1, 0));
    }
    function Ed(e) {
      for (; e === Ig; )
        Ig = Wh[--Fh], Wh[Fh] = null, x0 = Wh[--Fh], Wh[Fh] = null;
      for (; e === Cr; )
        Cr = Lu[--Vu], Lu[Vu] = null, go = Lu[--Vu], Lu[Vu] = null, po = Lu[--Vu], Lu[Vu] = null;
    }
    function jp() {
      return qi(), Cr !== null ? { id: po, overflow: go } : null;
    }
    function Yp(e, t) {
      qi(), Lu[Vu++] = po, Lu[Vu++] = go, Lu[Vu++] = Cr, po = t.id, go = t.overflow, Cr = e;
    }
    function qi() {
      it || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Nc(e, t) {
      if (e.return === null) {
        if (tu === null)
          tu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (tu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          tu.distanceFromLeaf > t && (tu.distanceFromLeaf = t);
        }
        return tu;
      }
      var a = Nc(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function qp() {
      it && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function aa(e, t) {
      mc || (e = Nc(e, 0), e.serverProps = null, t !== null && (t = Dg(t), e.serverTail.push(t)));
    }
    function pn(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = tu;
      throw i !== null && (tu = null, a = zm(i)), zs(
        ra(
          Error(
            "Hydration failed because the server rendered " + (t ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          e
        )
      ), zS;
    }
    function Jm(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Ft] = e, t[za] = i, Ta(a, i), a) {
        case "dialog":
          Me("cancel", t), Me("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Me("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < op.length; a++)
            Me(op[a], t);
          break;
        case "source":
          Me("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Me("error", t), Me("load", t);
          break;
        case "details":
          Me("toggle", t);
          break;
        case "input":
          ta("input", i), Me("invalid", t), sa(t, i), ld(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          Ep(t, i);
          break;
        case "select":
          ta("select", i), Me("invalid", t), ad(t, i);
          break;
        case "textarea":
          ta("textarea", i), Me("invalid", t), Ec(t, i), xo(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || $y(t.textContent, a) ? (i.popover != null && (Me("beforetoggle", t), Me("toggle", t)), i.onScroll != null && Me("scroll", t), i.onScrollEnd != null && Me("scrollend", t), i.onClick != null && (t.onclick = mn), t = !0) : t = !1, t || pn(e, !0);
    }
    function Km(e) {
      for (Da = e.return; Da; )
        switch (Da.tag) {
          case 5:
          case 31:
          case 13:
            Zu = !1;
            return;
          case 27:
          case 3:
            Zu = !0;
            return;
          default:
            Da = Da.return;
        }
    }
    function xc(e) {
      if (e !== Da) return !1;
      if (!it)
        return Km(e), it = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Tf(e.type, e.memoizedProps)), a = !a), a && Pt) {
        for (a = Pt; a; ) {
          var i = Nc(e, 0), o = Dg(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? zf(a) : ln(a.nextSibling);
        }
        pn(e);
      }
      if (Km(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Pt = zf(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Pt = zf(e);
      } else
        t === 27 ? (t = Pt, cc(e.type) ? (e = m1, m1 = null, Pt = e) : Pt = t) : Pt = Da ? ln(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Gi() {
      Pt = Da = null, mc = it = !1;
    }
    function Os() {
      var e = Jf;
      return e !== null && (rn === null ? rn = e : rn.push.apply(
        rn,
        e
      ), Jf = null), e;
    }
    function zs(e) {
      Jf === null ? Jf = [e] : Jf.push(e);
    }
    function wi() {
      var e = tu;
      if (e !== null) {
        tu = null;
        for (var t = zm(e); 0 < e.children.length; )
          e = e.children[0];
        ce(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function Zo() {
      Ih = Pg = null, Ph = !1;
    }
    function gn(e, t, a) {
      je(DS, t._currentValue, e), t._currentValue = a, je(_S, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== L1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = L1;
    }
    function Yn(e, t) {
      e._currentValue = DS.current;
      var a = _S.current;
      ye(_S, t), e._currentRenderer = a, ye(DS, t);
    }
    function Td(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function ti(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < t.length; y++)
              if (h.context === t[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Td(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Td(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function qn(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            cn(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === rc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(hp) : e = [hp]);
        }
        o = o.return;
      }
      e !== null && ti(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Jo(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!cn(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Xi(e) {
      Pg = e, Ih = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function vt(e) {
      return Ph && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), $m(Pg, e);
    }
    function Ds(e, t) {
      return Pg === null && Xi(e), $m(e, t);
    }
    function $m(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Ih === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Ih = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Ih = Ih.next = t;
      return a;
    }
    function Ad() {
      return {
        controller: new GE(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Bc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function _s(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && wE(XE, function() {
        e.controller.abort();
      });
    }
    function yu(e, t, a) {
      (e & 127) !== 0 ? 0 > yc && (yc = Ql(), j0 = ev(t), RS = t, a != null && (MS = se(a)), (dt & (Pl | nu)) !== fa && (gl = !0, $f = B0), e = Af(), t = xu(), e !== em || t !== Y0 ? em = -1.1 : t !== null && ($f = B0), Nr = e, Y0 = t) : (e & 4194048) !== 0 && 0 > Ju && (Ju = Ql(), q0 = ev(t), V1 = t, a != null && (Z1 = se(a)), 0 > Eo) && (e = Af(), t = xu(), (e !== Wf || t !== xr) && (Wf = -1.1), kf = e, xr = t);
    }
    function Gp(e) {
      if (0 > yc) {
        yc = Ql(), j0 = e._debugTask != null ? e._debugTask : null, (dt & (Pl | nu)) !== fa && ($f = B0);
        var t = Af(), a = xu();
        t !== em || a !== Y0 ? em = -1.1 : a !== null && ($f = B0), Nr = t, Y0 = a;
      }
      0 > Ju && (Ju = Ql(), q0 = e._debugTask != null ? e._debugTask : null, 0 > Eo) && (e = Af(), t = xu(), (e !== Wf || t !== xr) && (Wf = -1.1), kf = e, xr = t);
    }
    function pu() {
      var e = Ur;
      return Ur = 0, e;
    }
    function Ko(e) {
      var t = Ur;
      return Ur = e, t;
    }
    function da(e) {
      var t = Ur;
      return Ur += e, t;
    }
    function jc() {
      Re = Te = -1.1;
    }
    function $t() {
      var e = Te;
      return Te = -1.1, e;
    }
    function xl(e) {
      0 <= e && (Te = e);
    }
    function vn() {
      var e = sl;
      return sl = -0, e;
    }
    function Va(e) {
      0 <= e && (sl = e);
    }
    function Za() {
      var e = ul;
      return ul = null, e;
    }
    function Sn() {
      var e = gl;
      return gl = !1, e;
    }
    function li(e) {
      on = Ql(), 0 > e.actualStartTime && (e.actualStartTime = on);
    }
    function Od(e) {
      if (0 <= on) {
        var t = Ql() - on;
        e.actualDuration += t, e.selfBaseDuration = t, on = -1;
      }
    }
    function Rs(e) {
      if (0 <= on) {
        var t = Ql() - on;
        e.actualDuration += t, on = -1;
      }
    }
    function ha() {
      if (0 <= on) {
        var e = Ql(), t = e - on;
        on = -1, Ur += t, sl += t, Re = e;
      }
    }
    function wp(e) {
      ul === null && (ul = []), ul.push(e), So === null && (So = []), So.push(e);
    }
    function cl() {
      on = Ql(), 0 > Te && (Te = on);
    }
    function Yc(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ai(e, t) {
      if (w0 === null) {
        var a = w0 = [];
        US = 0, Br = Ky(), tm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return US++, t.then(km, km), t;
    }
    function km() {
      if (--US === 0 && (-1 < Ju || (Eo = -1.1), w0 !== null)) {
        tm !== null && (tm.status = "fulfilled");
        var e = w0;
        w0 = null, Br = 0, tm = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function zd(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function ni() {
      var e = jr.current;
      return e !== null ? e : Xt.pooledCache;
    }
    function $o(e, t) {
      t === null ? je(jr, jr.current, e) : je(jr, t.pool, e);
    }
    function Wm() {
      var e = ni();
      return e === null ? null : { parent: Xl._currentValue, pool: e };
    }
    function Dd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Fm(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Ja(e, t, a) {
      G.actQueue !== null && (G.didUsePromise = !0);
      var i = e.thenables;
      if (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(mn, mn), t = a), t._debugInfo === void 0) {
        e = performance.now(), i = t.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: e,
          end: e,
          value: t
        };
        t._debugInfo = [{ awaited: o }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
          o.end = performance.now();
        }, t.then(e, e));
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Ms(e), e;
        default:
          if (typeof t.status == "string")
            t.then(mn, mn);
          else {
            if (e = Xt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Ms(e), e;
          }
          throw qr = t, K0 = !0, lm;
      }
    }
    function Ka(e) {
      try {
        return JE(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (qr = t, K0 = !0, lm) : t;
      }
    }
    function qc() {
      if (qr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = qr;
      return qr = null, K0 = !1, e;
    }
    function Ms(e) {
      if (e === lm || e === ov)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function dl(e) {
      var t = Fe;
      return e != null && (Fe = t === null ? e : t.concat(e)), t;
    }
    function _a() {
      var e = Fe;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function ma(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Yi(e, a.mode, 0), t._debugInfo = Fe, t.return = a), ce(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function Gn(e) {
      var t = $0;
      return $0 += 1, am === null && (am = Dd()), Ja(am, e, t);
    }
    function Ra(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function wn(e, t) {
      throw t.$$typeof === jg ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function bn(e, t) {
      var a = _a();
      a !== null ? a.run(
        wn.bind(null, e, t)
      ) : wn(e, t);
    }
    function Im(e, t) {
      var a = se(e) || "Component";
      rb[a] || (rb[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function ko(e, t) {
      var a = _a();
      a !== null ? a.run(
        Im.bind(null, e, t)
      ) : Im(e, t);
    }
    function _d(e, t) {
      var a = se(e) || "Component";
      db[a] || (db[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Cs(e, t) {
      var a = _a();
      a !== null ? a.run(
        _d.bind(null, e, t)
      ) : _d(e, t);
    }
    function Bl(e) {
      function t(b, T) {
        if (e) {
          var O = b.deletions;
          O === null ? (b.deletions = [T], b.flags |= 16) : O.push(T);
        }
      }
      function a(b, T) {
        if (!e) return null;
        for (; T !== null; )
          t(b, T), T = T.sibling;
        return null;
      }
      function i(b) {
        for (var T = /* @__PURE__ */ new Map(); b !== null; )
          b.key !== null ? T.set(b.key, b) : T.set(b.index, b), b = b.sibling;
        return T;
      }
      function o(b, T) {
        return b = mu(b, T), b.index = 0, b.sibling = null, b;
      }
      function f(b, T, O) {
        return b.index = O, e ? (O = b.alternate, O !== null ? (O = O.index, O < T ? (b.flags |= 67108866, T) : O) : (b.flags |= 67108866, T)) : (b.flags |= 1048576, T);
      }
      function d(b) {
        return e && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, T, O, V) {
        return T === null || T.tag !== 6 ? (T = Vo(
          O,
          b.mode,
          V
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T) : (T = o(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function y(b, T, O, V) {
        var ue = O.type;
        return ue === Cf ? (T = z(
          b,
          T,
          O.props.children,
          V,
          O.key
        ), ma(O, T, b), T) : T !== null && (T.elementType === ue || Xm(T, O) || typeof ue == "object" && ue !== null && ue.$$typeof === ua && Ka(ue) === T.type) ? (T = o(T, O.props), Ra(T, O), T.return = b, T._debugOwner = O._owner, T._debugInfo = Fe, T) : (T = Yi(O, b.mode, V), Ra(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function p(b, T, O, V) {
        return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = Sd(O, b.mode, V), T.return = b, T._debugInfo = Fe, T) : (T = o(T, O.children || []), T.return = b, T._debugInfo = Fe, T);
      }
      function z(b, T, O, V, ue) {
        return T === null || T.tag !== 7 ? (T = Hc(
          O,
          b.mode,
          V,
          ue
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T) : (T = o(T, O), T.return = b, T._debugInfo = Fe, T);
      }
      function R(b, T, O) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return T = Vo(
            "" + T,
            b.mode,
            O
          ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = Fe, T;
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case zn:
              return O = Yi(
                T,
                b.mode,
                O
              ), Ra(O, T), O.return = b, b = dl(T._debugInfo), O._debugInfo = Fe, Fe = b, O;
            case fc:
              return T = Sd(
                T,
                b.mode,
                O
              ), T.return = b, T._debugInfo = Fe, T;
            case ua:
              var V = dl(T._debugInfo);
              return T = Ka(T), b = R(b, T, O), Fe = V, b;
          }
          if (El(T) || De(T))
            return O = Hc(
              T,
              b.mode,
              O,
              null
            ), O.return = b, O._debugOwner = b, O._debugTask = b._debugTask, b = dl(T._debugInfo), O._debugInfo = Fe, Fe = b, O;
          if (typeof T.then == "function")
            return V = dl(T._debugInfo), b = R(
              b,
              Gn(T),
              O
            ), Fe = V, b;
          if (T.$$typeof === In)
            return R(
              b,
              Ds(b, T),
              O
            );
          bn(b, T);
        }
        return typeof T == "function" && ko(b, T), typeof T == "symbol" && Cs(b, T), null;
      }
      function E(b, T, O, V) {
        var ue = T !== null ? T.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
          return ue !== null ? null : h(b, T, "" + O, V);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case zn:
              return O.key === ue ? (ue = dl(O._debugInfo), b = y(
                b,
                T,
                O,
                V
              ), Fe = ue, b) : null;
            case fc:
              return O.key === ue ? p(b, T, O, V) : null;
            case ua:
              return ue = dl(O._debugInfo), O = Ka(O), b = E(
                b,
                T,
                O,
                V
              ), Fe = ue, b;
          }
          if (El(O) || De(O))
            return ue !== null ? null : (ue = dl(O._debugInfo), b = z(
              b,
              T,
              O,
              V,
              null
            ), Fe = ue, b);
          if (typeof O.then == "function")
            return ue = dl(O._debugInfo), b = E(
              b,
              T,
              Gn(O),
              V
            ), Fe = ue, b;
          if (O.$$typeof === In)
            return E(
              b,
              T,
              Ds(b, O),
              V
            );
          bn(b, O);
        }
        return typeof O == "function" && ko(b, O), typeof O == "symbol" && Cs(b, O), null;
      }
      function Y(b, T, O, V, ue) {
        if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
          return b = b.get(O) || null, h(T, b, "" + V, ue);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case zn:
              return O = b.get(
                V.key === null ? O : V.key
              ) || null, b = dl(V._debugInfo), T = y(
                T,
                O,
                V,
                ue
              ), Fe = b, T;
            case fc:
              return b = b.get(
                V.key === null ? O : V.key
              ) || null, p(T, b, V, ue);
            case ua:
              var Be = dl(V._debugInfo);
              return V = Ka(V), T = Y(
                b,
                T,
                O,
                V,
                ue
              ), Fe = Be, T;
          }
          if (El(V) || De(V))
            return O = b.get(O) || null, b = dl(V._debugInfo), T = z(
              T,
              O,
              V,
              ue,
              null
            ), Fe = b, T;
          if (typeof V.then == "function")
            return Be = dl(V._debugInfo), T = Y(
              b,
              T,
              O,
              Gn(V),
              ue
            ), Fe = Be, T;
          if (V.$$typeof === In)
            return Y(
              b,
              T,
              O,
              Ds(T, V),
              ue
            );
          bn(T, V);
        }
        return typeof V == "function" && ko(T, V), typeof V == "symbol" && Cs(T, V), null;
      }
      function le(b, T, O, V) {
        if (typeof O != "object" || O === null) return V;
        switch (O.$$typeof) {
          case zn:
          case fc:
            He(b, T, O);
            var ue = O.key;
            if (typeof ue != "string") break;
            if (V === null) {
              V = /* @__PURE__ */ new Set(), V.add(ue);
              break;
            }
            if (!V.has(ue)) {
              V.add(ue);
              break;
            }
            ce(T, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                ue
              );
            });
            break;
          case ua:
            O = Ka(O), le(b, T, O, V);
        }
        return V;
      }
      function oe(b, T, O, V) {
        for (var ue = null, Be = null, be = null, ge = T, Ke = T = 0, el = null; ge !== null && Ke < O.length; Ke++) {
          ge.index > Ke ? (el = ge, ge = null) : el = ge.sibling;
          var Ul = E(
            b,
            ge,
            O[Ke],
            V
          );
          if (Ul === null) {
            ge === null && (ge = el);
            break;
          }
          ue = le(
            b,
            Ul,
            O[Ke],
            ue
          ), e && ge && Ul.alternate === null && t(b, ge), T = f(Ul, T, Ke), be === null ? Be = Ul : be.sibling = Ul, be = Ul, ge = el;
        }
        if (Ke === O.length)
          return a(b, ge), it && jn(b, Ke), Be;
        if (ge === null) {
          for (; Ke < O.length; Ke++)
            ge = R(b, O[Ke], V), ge !== null && (ue = le(
              b,
              ge,
              O[Ke],
              ue
            ), T = f(
              ge,
              T,
              Ke
            ), be === null ? Be = ge : be.sibling = ge, be = ge);
          return it && jn(b, Ke), Be;
        }
        for (ge = i(ge); Ke < O.length; Ke++)
          el = Y(
            ge,
            b,
            Ke,
            O[Ke],
            V
          ), el !== null && (ue = le(
            b,
            el,
            O[Ke],
            ue
          ), e && el.alternate !== null && ge.delete(
            el.key === null ? Ke : el.key
          ), T = f(
            el,
            T,
            Ke
          ), be === null ? Be = el : be.sibling = el, be = el);
        return e && ge.forEach(function(Mo) {
          return t(b, Mo);
        }), it && jn(b, Ke), Be;
      }
      function Jt(b, T, O, V) {
        if (O == null)
          throw Error("An iterable object provided no iterator.");
        for (var ue = null, Be = null, be = T, ge = T = 0, Ke = null, el = null, Ul = O.next(); be !== null && !Ul.done; ge++, Ul = O.next()) {
          be.index > ge ? (Ke = be, be = null) : Ke = be.sibling;
          var Mo = E(b, be, Ul.value, V);
          if (Mo === null) {
            be === null && (be = Ke);
            break;
          }
          el = le(
            b,
            Mo,
            Ul.value,
            el
          ), e && be && Mo.alternate === null && t(b, be), T = f(Mo, T, ge), Be === null ? ue = Mo : Be.sibling = Mo, Be = Mo, be = Ke;
        }
        if (Ul.done)
          return a(b, be), it && jn(b, ge), ue;
        if (be === null) {
          for (; !Ul.done; ge++, Ul = O.next())
            be = R(b, Ul.value, V), be !== null && (el = le(
              b,
              be,
              Ul.value,
              el
            ), T = f(
              be,
              T,
              ge
            ), Be === null ? ue = be : Be.sibling = be, Be = be);
          return it && jn(b, ge), ue;
        }
        for (be = i(be); !Ul.done; ge++, Ul = O.next())
          Ke = Y(
            be,
            b,
            ge,
            Ul.value,
            V
          ), Ke !== null && (el = le(
            b,
            Ke,
            Ul.value,
            el
          ), e && Ke.alternate !== null && be.delete(
            Ke.key === null ? ge : Ke.key
          ), T = f(
            Ke,
            T,
            ge
          ), Be === null ? ue = Ke : Be.sibling = Ke, Be = Ke);
        return e && be.forEach(function(pT) {
          return t(b, pT);
        }), it && jn(b, ge), ue;
      }
      function ot(b, T, O, V) {
        if (typeof O == "object" && O !== null && O.type === Cf && O.key === null && (ma(O, null, b), O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case zn:
              var ue = dl(O._debugInfo);
              e: {
                for (var Be = O.key; T !== null; ) {
                  if (T.key === Be) {
                    if (Be = O.type, Be === Cf) {
                      if (T.tag === 7) {
                        a(
                          b,
                          T.sibling
                        ), V = o(
                          T,
                          O.props.children
                        ), V.return = b, V._debugOwner = O._owner, V._debugInfo = Fe, ma(O, V, b), b = V;
                        break e;
                      }
                    } else if (T.elementType === Be || Xm(
                      T,
                      O
                    ) || typeof Be == "object" && Be !== null && Be.$$typeof === ua && Ka(Be) === T.type) {
                      a(
                        b,
                        T.sibling
                      ), V = o(T, O.props), Ra(V, O), V.return = b, V._debugOwner = O._owner, V._debugInfo = Fe, b = V;
                      break e;
                    }
                    a(b, T);
                    break;
                  } else t(b, T);
                  T = T.sibling;
                }
                O.type === Cf ? (V = Hc(
                  O.props.children,
                  b.mode,
                  V,
                  O.key
                ), V.return = b, V._debugOwner = b, V._debugTask = b._debugTask, V._debugInfo = Fe, ma(O, V, b), b = V) : (V = Yi(
                  O,
                  b.mode,
                  V
                ), Ra(V, O), V.return = b, V._debugInfo = Fe, b = V);
              }
              return b = d(b), Fe = ue, b;
            case fc:
              e: {
                for (ue = O, O = ue.key; T !== null; ) {
                  if (T.key === O)
                    if (T.tag === 4 && T.stateNode.containerInfo === ue.containerInfo && T.stateNode.implementation === ue.implementation) {
                      a(
                        b,
                        T.sibling
                      ), V = o(
                        T,
                        ue.children || []
                      ), V.return = b, b = V;
                      break e;
                    } else {
                      a(b, T);
                      break;
                    }
                  else t(b, T);
                  T = T.sibling;
                }
                V = Sd(
                  ue,
                  b.mode,
                  V
                ), V.return = b, b = V;
              }
              return d(b);
            case ua:
              return ue = dl(O._debugInfo), O = Ka(O), b = ot(
                b,
                T,
                O,
                V
              ), Fe = ue, b;
          }
          if (El(O))
            return ue = dl(O._debugInfo), b = oe(
              b,
              T,
              O,
              V
            ), Fe = ue, b;
          if (De(O)) {
            if (ue = dl(O._debugInfo), Be = De(O), typeof Be != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var be = Be.call(O);
            return be === O ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(be) !== "[object Generator]") && (fb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), fb = !0) : O.entries !== Be || BS || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), BS = !0), b = Jt(
              b,
              T,
              be,
              V
            ), Fe = ue, b;
          }
          if (typeof O.then == "function")
            return ue = dl(O._debugInfo), b = ot(
              b,
              T,
              Gn(O),
              V
            ), Fe = ue, b;
          if (O.$$typeof === In)
            return ot(
              b,
              T,
              Ds(b, O),
              V
            );
          bn(b, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (ue = "" + O, T !== null && T.tag === 6 ? (a(
          b,
          T.sibling
        ), V = o(T, ue), V.return = b, b = V) : (a(b, T), V = Vo(
          ue,
          b.mode,
          V
        ), V.return = b, V._debugOwner = b, V._debugTask = b._debugTask, V._debugInfo = Fe, b = V), d(b)) : (typeof O == "function" && ko(b, O), typeof O == "symbol" && Cs(b, O), a(b, T));
      }
      return function(b, T, O, V) {
        var ue = Fe;
        Fe = null;
        try {
          $0 = 0;
          var Be = ot(
            b,
            T,
            O,
            V
          );
          return am = null, Be;
        } catch (el) {
          if (el === lm || el === ov) throw el;
          var be = U(29, el, null, b.mode);
          be.lanes = V, be.return = b;
          var ge = be._debugInfo = Fe;
          if (be._debugOwner = b._debugOwner, be._debugTask = b._debugTask, ge != null) {
            for (var Ke = ge.length - 1; 0 <= Ke; Ke--)
              if (typeof ge[Ke].stack == "string") {
                be._debugOwner = ge[Ke], be._debugTask = ge[Ke].debugTask;
                break;
              }
          }
          return be;
        } finally {
          Fe = ue;
        }
      };
    }
    function Yt(e, t) {
      var a = El(e);
      return e = !a && typeof De(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function nt(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function gu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function zl(e) {
      return {
        lane: e,
        tag: mb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function vu(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, YS === i && !gb) {
        var o = se(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), gb = !0;
      }
      return (dt & Pl) !== fa ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = As(e), wm(e, null, a), t) : (Lo(e, i, t, a), As(e));
    }
    function En(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, ds(e, a);
      }
    }
    function Us(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Wo() {
      if (qS) {
        var e = tm;
        if (e !== null) throw e;
      }
    }
    function Su(e, t, a, i) {
      qS = !1;
      var o = e.updateQueue;
      Ff = !1, YS = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var z = e.alternate;
        z !== null && (z = z.updateQueue, h = z.lastBaseUpdate, h !== d && (h === null ? z.firstBaseUpdate = p : h.next = p, z.lastBaseUpdate = y));
      }
      if (f !== null) {
        var R = o.baseState;
        d = 0, z = p = y = null, h = f;
        do {
          var E = h.lane & -536870913, Y = E !== h.lane;
          if (Y ? (Ie & E) === E : (i & E) === E) {
            E !== 0 && E === Br && (qS = !0), z !== null && (z = z.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              E = e;
              var le = h, oe = t, Jt = a;
              switch (le.tag) {
                case yb:
                  if (le = le.payload, typeof le == "function") {
                    Ph = !0;
                    var ot = le.call(
                      Jt,
                      R,
                      oe
                    );
                    if (E.mode & Ba) {
                      re(!0);
                      try {
                        le.call(Jt, R, oe);
                      } finally {
                        re(!1);
                      }
                    }
                    Ph = !1, R = ot;
                    break e;
                  }
                  R = le;
                  break e;
                case jS:
                  E.flags = E.flags & -65537 | 128;
                case mb:
                  if (ot = le.payload, typeof ot == "function") {
                    if (Ph = !0, le = ot.call(
                      Jt,
                      R,
                      oe
                    ), E.mode & Ba) {
                      re(!0);
                      try {
                        ot.call(Jt, R, oe);
                      } finally {
                        re(!1);
                      }
                    }
                    Ph = !1;
                  } else le = ot;
                  if (le == null) break e;
                  R = ke({}, R, le);
                  break e;
                case pb:
                  Ff = !0;
              }
            }
            E = h.callback, E !== null && (e.flags |= 64, Y && (e.flags |= 8192), Y = o.callbacks, Y === null ? o.callbacks = [E] : Y.push(E));
          } else
            Y = {
              lane: E,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, z === null ? (p = z = Y, y = R) : z = z.next = Y, d |= E;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            Y = h, h = Y.next, Y.next = null, o.lastBaseUpdate = Y, o.shared.pending = null;
          }
        } while (!0);
        z === null && (y = R), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = z, f === null && (o.shared.lanes = 0), es |= d, e.lanes = d, e.memoizedState = R;
      }
      YS = null;
    }
    function Qi(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Pm(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Qi(a[e], t);
    }
    function Fo(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Qi(a[e], t);
    }
    function Rd(e, t) {
      var a = gc;
      je(sv, a, e), je(nm, t, e), gc = a | t.baseLanes;
    }
    function ui(e) {
      je(sv, gc, e), je(
        nm,
        nm.current,
        e
      );
    }
    function Xn(e) {
      gc = sv.current, ye(nm, e), ye(sv, e);
    }
    function ya(e) {
      var t = e.alternate;
      je(
        Cl,
        Cl.current & um,
        e
      ), je(lu, e, e), Ku === null && (t === null || nm.current !== null || t.memoizedState !== null) && (Ku = e);
    }
    function Qn(e) {
      je(Cl, Cl.current, e), je(lu, e, e), Ku === null && (Ku = e);
    }
    function Md(e) {
      e.tag === 22 ? (je(Cl, Cl.current, e), je(lu, e, e), Ku === null && (Ku = e)) : bu(e);
    }
    function bu(e) {
      je(Cl, Cl.current, e), je(
        lu,
        lu.current,
        e
      );
    }
    function jl(e) {
      ye(lu, e), Ku === e && (Ku = null), ye(Cl, e);
    }
    function Gc(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || hr(a) || Wy(a)))
            return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function Ne() {
      var e = q;
      ku === null ? ku = [e] : ku.push(e);
    }
    function $() {
      var e = q;
      if (ku !== null && (Oo++, ku[Oo] !== e)) {
        var t = se(xe);
        if (!vb.has(t) && (vb.add(t), ku !== null)) {
          for (var a = "", i = 0; i <= Oo; i++) {
            var o = ku[i], f = i === Oo ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function ii(e) {
      e == null || El(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        q,
        typeof e
      );
    }
    function Hs() {
      var e = se(xe);
      bb.has(e) || (bb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function ol() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function ey(e, t) {
      if (F0) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          q
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        q,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!cn(e[a], t[a])) return !1;
      return !0;
    }
    function ty(e, t, a, i, o, f) {
      To = f, xe = t, ku = e !== null ? e._debugHookTypes : null, Oo = -1, F0 = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = se(xe), GS.has(f) || (GS.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, G.H = e !== null && e.memoizedState !== null ? XS : ku !== null ? Eb : wS, wr = f = (t.mode & Ba) !== Ce;
      var d = HS(a, i, o);
      if (wr = !1, cm && (d = Ns(
        t,
        a,
        i,
        o
      )), f) {
        re(!0);
        try {
          d = Ns(
            t,
            a,
            i,
            o
          );
        } finally {
          re(!1);
        }
      }
      return hl(e, t), d;
    }
    function hl(e, t) {
      t._debugHookTypes = ku, t.dependencies === null ? Ao !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Ao
      }) : t.dependencies._debugThenableState = Ao, G.H = I0;
      var a = wt !== null && wt.next !== null;
      if (To = 0, ku = q = Ll = wt = xe = null, Oo = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), dv = !1, W0 = 0, Ao = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Vl || (e = e.dependencies, e !== null && Jo(e) && (Vl = !0)), K0 ? (K0 = !1, e = !0) : e = !1, e && (t = se(t) || "Unknown", Sb.has(t) || GS.has(t) || (Sb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Ns(e, t, a, i) {
      xe = e;
      var o = 0;
      do {
        if (cm && (Ao = null), W0 = 0, cm = !1, o >= $E)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, F0 = !1, Ll = wt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Oo = -1, G.H = Tb, f = HS(t, a, i);
      } while (cm);
      return f;
    }
    function xs() {
      var e = G.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Ys(t) : t, e = e.useState()[0], (wt !== null ? wt.memoizedState : null) !== e && (xe.flags |= 1024), t;
    }
    function wc() {
      var e = hv !== 0;
      return hv = 0, e;
    }
    function Bs(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Ei) !== Ce ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Li(e) {
      if (dv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        dv = !1;
      }
      To = 0, ku = Ll = wt = xe = null, Oo = -1, q = null, cm = !1, W0 = hv = 0, Ao = null;
    }
    function Sl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ll === null ? xe.memoizedState = Ll = e : Ll = Ll.next = e, Ll;
    }
    function Tt() {
      if (wt === null) {
        var e = xe.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = wt.next;
      var t = Ll === null ? xe.memoizedState : Ll.next;
      if (t !== null)
        Ll = t, wt = e;
      else {
        if (e === null)
          throw xe.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        wt = e, e = {
          memoizedState: wt.memoizedState,
          baseState: wt.baseState,
          baseQueue: wt.baseQueue,
          queue: wt.queue,
          next: null
        }, Ll === null ? xe.memoizedState = Ll = e : Ll = Ll.next = e;
      }
      return Ll;
    }
    function js() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Ys(e) {
      var t = W0;
      return W0 += 1, Ao === null && (Ao = Dd()), e = Ja(Ao, e, t), t = xe, (Ll === null ? t.memoizedState : Ll.next) === null && (t = t.alternate, G.H = t !== null && t.memoizedState !== null ? XS : wS), e;
    }
    function ci(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Ys(e);
        if (e.$$typeof === In) return vt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function $a(e) {
      var t = null, a = xe.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = xe.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = js(), xe.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || F0)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = uS;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function ka(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Io(e, t, a) {
      var i = Sl();
      if (a !== void 0) {
        var o = a(t);
        if (wr) {
          re(!0);
          try {
            a(t);
          } finally {
            re(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = eS.bind(
        null,
        xe,
        e
      ), [i.memoizedState, e];
    }
    function Xc(e) {
      var t = Tt();
      return Vi(t, wt, e);
    }
    function Vi(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, y = null, p = t, z = !1;
        do {
          var R = p.lane & -536870913;
          if (R !== p.lane ? (Ie & R) === R : (To & R) === R) {
            var E = p.revertLane;
            if (E === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), R === Br && (z = !0);
            else if ((To & E) === E) {
              p = p.next, E === Br && (z = !0);
              continue;
            } else
              R = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = R, d = f) : y = y.next = R, xe.lanes |= E, es |= E;
            R = p.action, wr && a(f, R), f = p.hasEagerState ? p.eagerState : a(f, R);
          } else
            E = {
              lane: R,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = E, d = f) : y = y.next = E, xe.lanes |= R, es |= R;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !cn(f, e.memoizedState) && (Vl = !0, z && (a = tm, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Qc(e) {
      var t = Tt(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        cn(f, t.memoizedState) || (Vl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Po(e, t, a) {
      var i = xe, o = Sl();
      if (it) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        im || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), im = !0);
      } else {
        if (f = t(), im || (a = t(), cn(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), im = !0)), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Ie & 127) !== 0 || ly(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Zc(
        Zi.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Eu(
        $u | sn,
        { destroy: void 0 },
        ay.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Lc(e, t, a) {
      var i = xe, o = Tt(), f = it;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !im) {
        var d = t();
        cn(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), im = !0);
      }
      (d = !cn(
        (wt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Vl = !0), o = o.queue;
      var h = Zi.bind(null, i, o, e);
      if (Dl(2048, sn, h, [e]), o.getSnapshot !== t || d || Ll !== null && Ll.memoizedState.tag & $u) {
        if (i.flags |= 2048, Eu(
          $u | sn,
          { destroy: void 0 },
          ay.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (To & 127) !== 0 || ly(i, t, a);
      }
      return a;
    }
    function ly(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = xe.updateQueue, t === null ? (t = js(), xe.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function ay(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Ji(t) && ny(e);
    }
    function Zi(e, t, a) {
      return a(function() {
        Ji(t) && (yu(2, "updateSyncExternalStore()", e), ny(e));
      });
    }
    function Ji(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !cn(e, a);
      } catch {
        return !0;
      }
    }
    function ny(e) {
      var t = la(e, 2);
      t !== null && Ue(t, e, 2);
    }
    function Cd(e) {
      var t = Sl();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), wr) {
          re(!0);
          try {
            a();
          } finally {
            re(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ka,
        lastRenderedState: e
      }, t;
    }
    function Ki(e) {
      e = Cd(e);
      var t = e.queue, a = jd.bind(null, xe, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Vc(e) {
      var t = Sl();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Vs.bind(
        null,
        xe,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function qs(e, t) {
      var a = Tt();
      return ef(a, wt, e, t);
    }
    function ef(e, t, a, i) {
      return e.baseState = a, Vi(
        e,
        wt,
        typeof i == "function" ? i : ka
      );
    }
    function Gs(e, t) {
      var a = Tt();
      return wt !== null ? ef(a, wt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function Xp(e, t, a, i, o) {
      if (Yl(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        G.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, $i(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function $i(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = G.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), G.T = d;
        try {
          var h = a(o, i), y = G.S;
          y !== null && y(d, h), uy(e, t, h);
        } catch (p) {
          ws(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), G.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), uy(e, t, d);
        } catch (p) {
          ws(e, t, p);
        }
    }
    function uy(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (G.asyncTransitions++, a.then(Jc, Jc), a.then(
        function(i) {
          oi(e, t, i);
        },
        function(i) {
          return ws(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : oi(e, t, a);
    }
    function oi(e, t, a) {
      t.status = "fulfilled", t.value = a, Ud(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, $i(e, a)));
    }
    function ws(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Ud(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Ud(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function fi(e, t) {
      return t;
    }
    function Wa(e, t) {
      if (it) {
        var a = Xt.formState;
        if (a !== null) {
          e: {
            var i = xe;
            if (it) {
              if (Pt) {
                t: {
                  for (var o = Pt, f = Zu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = ln(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === s1 || f === c2 ? o : null;
                }
                if (o) {
                  Pt = ln(
                    o.nextSibling
                  ), i = o.data === s1;
                  break e;
                }
              }
              pn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Sl(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fi,
        lastRenderedState: t
      }, a.queue = i, a = jd.bind(
        null,
        xe,
        i
      ), i.dispatch = a, i = Cd(!1), f = Vs.bind(
        null,
        xe,
        !1,
        i.queue
      ), i = Sl(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = Xp.bind(
        null,
        xe,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function ki(e) {
      var t = Tt();
      return Hd(t, wt, e);
    }
    function Hd(e, t, a) {
      if (t = Vi(
        e,
        t,
        fi
      )[0], e = Xc(ka)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Ys(t);
        } catch (d) {
          throw d === lm ? ov : d;
        }
      else i = t;
      t = Tt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (xe.flags |= 2048, Eu(
        $u | sn,
        { destroy: void 0 },
        iy.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function iy(e, t) {
      e.action = t;
    }
    function Wi(e) {
      var t = Tt(), a = wt;
      if (a !== null)
        return Hd(t, a, e);
      Tt(), t = t.memoizedState, a = Tt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Eu(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = xe.updateQueue, t === null && (t = js(), xe.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Nd(e) {
      var t = Sl();
      return e = { current: e }, t.memoizedState = e;
    }
    function Fi(e, t, a, i) {
      var o = Sl();
      xe.flags |= e, o.memoizedState = Eu(
        $u | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function Dl(e, t, a, i) {
      var o = Tt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      wt !== null && i !== null && ey(i, wt.memoizedState.deps) ? o.memoizedState = Eu(t, f, a, i) : (xe.flags |= e, o.memoizedState = Eu(
        $u | t,
        f,
        a,
        i
      ));
    }
    function Zc(e, t) {
      (xe.mode & Ei) !== Ce ? Fi(276826112, sn, e, t) : Fi(8390656, sn, e, t);
    }
    function Qp(e) {
      xe.flags |= 4;
      var t = xe.updateQueue;
      if (t === null)
        t = js(), xe.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function Xs(e) {
      var t = Sl(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((dt & Pl) !== fa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function tf(e) {
      var t = Tt().memoizedState;
      return Qp({ ref: t, nextImpl: e }), function() {
        if ((dt & Pl) !== fa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function pa(e, t) {
      var a = 4194308;
      return (xe.mode & Ei) !== Ce && (a |= 134217728), Fi(a, au, e, t);
    }
    function Fa(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Tu(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (xe.mode & Ei) !== Ce && (i |= 134217728), Fi(
        i,
        au,
        Fa.bind(null, t, e),
        a
      );
    }
    function lf(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Dl(
        4,
        au,
        Fa.bind(null, t, e),
        a
      );
    }
    function xd(e, t) {
      return Sl().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Ln(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && ey(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function ga(e, t) {
      var a = Sl();
      t = t === void 0 ? null : t;
      var i = e();
      if (wr) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function kt(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && ey(t, i[1]))
        return i[0];
      if (i = e(), wr) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function af(e, t) {
      var a = Sl();
      return At(a, e, t);
    }
    function Au(e, t) {
      var a = Tt();
      return ml(
        a,
        wt.memoizedState,
        e,
        t
      );
    }
    function Xe(e, t) {
      var a = Tt();
      return wt === null ? At(a, e, t) : ml(
        a,
        wt.memoizedState,
        e,
        t
      );
    }
    function At(e, t, a) {
      return a === void 0 || (To & 1073741824) !== 0 && (Ie & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = df(), xe.lanes |= e, es |= e, a);
    }
    function ml(e, t, a, i) {
      return cn(a, t) ? a : nm.current !== null ? (e = At(e, a, i), cn(e, t) || (Vl = !0), e) : (To & 42) === 0 || (To & 1073741824) !== 0 && (Ie & 261930) === 0 ? (Vl = !0, e.memoizedState = a) : (e = df(), xe.lanes |= e, es |= e, t);
    }
    function Jc() {
      G.asyncTransitions--;
    }
    function Kc(e, t, a, i, o) {
      var f = bt.p;
      bt.p = f !== 0 && f < Fl ? f : Fl;
      var d = G.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), G.T = h, Vs(e, !1, t, a);
      try {
        var y = o(), p = G.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          G.asyncTransitions++, y.then(Jc, Jc);
          var z = zd(
            y,
            i
          );
          $c(
            e,
            t,
            z,
            na(e)
          );
        } else
          $c(
            e,
            t,
            i,
            na(e)
          );
      } catch (R) {
        $c(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: R },
          na(e)
        );
      } finally {
        bt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), G.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function si(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Qs(e).queue;
      Gp(e), Kc(
        e,
        o,
        t,
        Fr,
        a === null ? k : function() {
          return nf(e), a(i);
        }
      );
    }
    function Qs(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Fr,
        baseState: Fr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ka,
          lastRenderedState: Fr
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ka,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function nf(e) {
      G.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Qs(e);
      t.next === null && (t = e.alternate.memoizedState), $c(
        e,
        t.next.queue,
        {},
        na(e)
      );
    }
    function Ii() {
      var e = Cd(!1);
      return e = Kc.bind(
        null,
        xe,
        e.queue,
        !0,
        !1
      ), Sl().memoizedState = e, [!1, e];
    }
    function Lp() {
      var e = Xc(ka)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Ys(e),
        t
      ];
    }
    function ll() {
      var e = Qc(ka)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Ys(e),
        t
      ];
    }
    function ri() {
      return vt(hp);
    }
    function Ls() {
      var e = Sl(), t = Xt.identifierPrefix;
      if (it) {
        var a = go, i = po;
        a = (i & ~(1 << 32 - Wl(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = hv++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = KE++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Bd() {
      return Sl().memoizedState = Vp.bind(
        null,
        xe
      );
    }
    function Vp(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = na(a), o = zl(i), f = vu(a, o, i);
            f !== null && (yu(i, "refresh()", e), Ue(f, a, i), En(f, a, i)), e = Ad(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function eS(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = na(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Yl(e) ? fl(t, o) : (o = Mc(e, t, o, i), o !== null && (yu(i, "dispatch()", e), Ue(o, e, i), Zs(o, t, i)));
    }
    function jd(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = na(e), $c(e, t, a, i) && yu(i, "setState()", e);
    }
    function $c(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Yl(e)) fl(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = G.H;
          G.H = Ai;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, cn(y, h))
              return Lo(e, t, o, 0), Xt === null && gd(), !1;
          } catch {
          } finally {
            G.H = d;
          }
        }
        if (a = Mc(e, t, o, i), a !== null)
          return Ue(a, e, i), Zs(a, t, i), !0;
      }
      return !1;
    }
    function Vs(e, t, a, i) {
      if (G.T === null && Br === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Ky(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Yl(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Mc(
          e,
          a,
          i,
          2
        ), t !== null && (yu(2, "setOptimistic()", e), Ue(t, e, 2));
    }
    function Yl(e) {
      var t = e.alternate;
      return e === xe || t !== null && t === xe;
    }
    function fl(e, t) {
      cm = dv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Zs(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, ds(e, a);
      }
    }
    function kc(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Nb.has(t) || (Nb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function uf(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & Ba) {
        re(!0);
        try {
          f = a(i, o);
        } finally {
          re(!1);
        }
      }
      f === void 0 && (t = Ve(t) || "Component", Mb.has(t) || (Mb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : ke({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Yd(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & Ba) {
          re(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            re(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Ve(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Qo(a, i) || !Qo(o, f) : !0;
    }
    function Ou(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = se(e) || "Component", Ob.has(e) || (Ob.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), QS.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function zu(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = ke({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function qd(e) {
      SS(e), console.warn(
        `%s

%s
`,
        om ? "An error occurred in the <" + om + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Gd(e) {
      var t = om ? "The above error occurred in the <" + om + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((LS || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          y2 + " " + e[0],
          p2,
          qv + i + qv,
          g2
        ) : e.splice(
          0,
          0,
          y2,
          p2,
          qv + i + qv,
          g2
        ), e.unshift(console), i = mT.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function cy(e) {
      SS(e);
    }
    function Js(e, t) {
      try {
        om = t.source ? se(t.source) : null, LS = null;
        var a = t.value;
        if (G.actQueue !== null)
          G.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function oy(e, t, a) {
      try {
        om = a.source ? se(a.source) : null, LS = se(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function wd(e, t, a) {
      return a = zl(a), a.tag = jS, a.payload = { element: null }, a.callback = function() {
        ce(t.source, Js, e, t);
      }, a;
    }
    function Xd(e) {
      return e = zl(e), e.tag = jS, e;
    }
    function Qd(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Cc(a), ce(
            i.source,
            oy,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Cc(a), ce(
          i.source,
          oy,
          t,
          a,
          i
        ), typeof o != "function" && (ls === null ? ls = /* @__PURE__ */ new Set([this]) : ls.add(this)), LE(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          se(a) || "Unknown"
        );
      });
    }
    function fy(e, t, a, i, o) {
      if (a.flags |= 32768, qu && gf(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && qn(
          t,
          a,
          o,
          !0
        ), it && (mc = !0), a = lu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Ku === null ? mf() : a.alternate === null && rl === Do && (rl = pv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === fv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), oh(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === fv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), oh(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return oh(e, i, o), mf(), !1;
      }
      if (it)
        return mc = !0, t = lu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== zS && zs(
          ra(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== zS && zs(
          ra(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = ra(i, a), o = wd(
          e.stateNode,
          i,
          o
        ), Us(e, o), rl !== If && (rl = Xr)), !1;
      var f = ra(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (np === null ? np = [f] : np.push(f), rl !== If && (rl = Xr), t === null) return !0;
      i = ra(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = wd(
              a.stateNode,
              i,
              e
            ), Us(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ls === null || !ls.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Xd(o), Qd(
                o,
                e,
                a,
                i
              ), Us(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function ql(e, t, a, i) {
      t.child = e === null ? hb(t, null, a, i) : Gr(
        t,
        e.child,
        a,
        i
      );
    }
    function Zp(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Xi(t), i = ty(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = wc(), e !== null && !Vl ? (Bs(e, t, o), Vn(e, t, o)) : (it && h && bd(t), t.flags |= 1, ql(e, t, i, o), t.child);
    }
    function sy(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Qm(f) && f.defaultProps === void 0 && a.compare === null ? (a = ji(f), t.tag = 15, t.type = a, cf(t, f), ry(
          e,
          t,
          a,
          i,
          o
        )) : (e = Uc(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Kd(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Qo, a(d, i) && e.ref === t.ref)
          return Vn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = mu(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function ry(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Qo(f, i) && e.ref === t.ref && t.type === e.type)
          if (Vl = !1, t.pendingProps = i = f, Kd(e, o))
            (e.flags & 131072) !== 0 && (Vl = !0);
          else
            return t.lanes = e.lanes, Vn(e, t, o);
      }
      return yy(
        e,
        t,
        a,
        i,
        o
      );
    }
    function dy(e, t, a, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: N0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, e !== null) {
            for (i = t.child = e.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, t.child = null;
          return hy(
            e,
            t,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && $o(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Rd(t, f) : ui(t), Md(t);
        else
          return i = t.lanes = 536870912, hy(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? ($o(t, f.cachePool), Rd(t, f), bu(t), t.memoizedState = null) : (e !== null && $o(t, null), ui(t), bu(t));
      return ql(e, t, o, a), t.child;
    }
    function Wc(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: N0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function hy(e, t, a, i, o) {
      var f = ni();
      return f = f === null ? null : {
        parent: Xl._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && $o(t, null), ui(t), Md(t), e !== null && qn(e, t, i, !0), t.childLanes = o, null;
    }
    function Ks(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = ks(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function my(e, t, a) {
      return Gr(t, e.child, null, a), e = Ks(
        t,
        t.pendingProps
      ), e.flags |= 2, jl(t), t.memoizedState = null, e;
    }
    function Jp(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (it) {
          if (i.mode === "hidden")
            return e = Ks(t, i), t.lanes = 536870912, Wc(null, e);
          if (Qn(t), (e = Pt) ? (a = zt(
            e,
            Zu
          ), a = a !== null && a.data === Kr ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: jp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Vm(a), i.return = t, t.child = i, Da = t, Pt = null)) : a = null, a === null)
            throw aa(t, e), pn(t);
          return t.lanes = 536870912, null;
        }
        return Ks(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Qn(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = my(
              e,
              t,
              a
            );
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (qp(), (a & 536870912) !== 0 && hf(t), Vl || qn(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Vl || o) {
          if (i = Xt, i !== null && (d = bc(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, la(e, d), Ue(i, e, d), VS;
          mf(), t = my(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, Pt = ln(
            d.nextSibling
          ), Da = t, it = !0, Jf = null, mc = !1, tu = null, Zu = !1, e !== null && Yp(t, e), t = Ks(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && hf(t), e = mu(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function $s(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function yy(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Ve(a) || "Unknown";
        xb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), xb[f] = !0);
      }
      return t.mode & Ba && Ti.recordLegacyContextWarning(
        t,
        null
      ), e === null && (cf(t, t.type), a.contextTypes && (f = Ve(a) || "Unknown", jb[f] || (jb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Xi(t), a = ty(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = wc(), e !== null && !Vl ? (Bs(e, t, o), Vn(e, t, o)) : (it && i && bd(t), t.flags |= 1, ql(e, t, a, o), t.child);
    }
    function py(e, t, a, i, o, f) {
      return Xi(t), Oo = -1, F0 = e !== null && e.type !== t.type, t.updateQueue = null, a = Ns(
        t,
        i,
        a,
        o
      ), hl(e, t), i = wc(), e !== null && !Vl ? (Bs(e, t, f), Vn(e, t, f)) : (it && i && bd(t), t.flags |= 1, ql(e, t, a, f), t.child);
    }
    function Fc(e, t, a, i, o) {
      switch (gt(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Xt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Xd(h), Qd(
            h,
            d,
            t,
            ra(f, t)
          ), Us(t, h);
      }
      if (Xi(t), t.stateNode === null) {
        if (d = Zf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== In) && !Hb.has(a) && (Hb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Ch ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Ve(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = vt(f)), f = new a(i, d), t.mode & Ba) {
          re(!0);
          try {
            f = new a(i, d);
          } finally {
            re(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = QS, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Ab, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Ve(a) || "Component", zb.has(d) || (zb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Ve(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            _b.has(f) || (_b.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = t.stateNode, d = Ve(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Ub.has(a) && (Ub.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Cb.has(a) && (Cb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Ve(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Db.has(a) || (Db.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Ve(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || El(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, nt(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? vt(d) : Zf, f.state === i && (d = Ve(a) || "Component", Rb.has(d) || (Rb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Ba && Ti.recordLegacyContextWarning(
          t,
          f
        ), Ti.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (uf(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          se(t) || "Component"
        ), QS.enqueueReplaceState(
          f,
          f.state,
          null
        )), Su(t, i, f, o), Wo(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ei) !== Ce && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var z = t.memoizedProps;
        h = zu(a, z), f.props = h;
        var R = f.context;
        y = a.contextType, d = Zf, typeof y == "object" && y !== null && (d = vt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", z = t.pendingProps !== z, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (z || R !== d) && Ou(
          t,
          f,
          i,
          d
        ), Ff = !1;
        var E = t.memoizedState;
        f.state = E, Su(t, i, f, o), Wo(), R = t.memoizedState, z || E !== R || Ff ? (typeof p == "function" && (uf(
          t,
          a,
          p,
          i
        ), R = t.memoizedState), (h = Ff || Yd(
          t,
          a,
          h,
          i,
          E,
          R,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ei) !== Ce && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ei) !== Ce && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = R), f.props = i, f.state = R, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ei) !== Ce && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, gu(e, t), d = t.memoizedProps, y = zu(a, d), f.props = y, p = t.pendingProps, E = f.context, R = a.contextType, h = Zf, typeof R == "object" && R !== null && (h = vt(R)), z = a.getDerivedStateFromProps, (R = typeof z == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || E !== h) && Ou(
          t,
          f,
          i,
          h
        ), Ff = !1, E = t.memoizedState, f.state = E, Su(t, i, f, o), Wo();
        var Y = t.memoizedState;
        d !== p || E !== Y || Ff || e !== null && e.dependencies !== null && Jo(e.dependencies) ? (typeof z == "function" && (uf(
          t,
          a,
          z,
          i
        ), Y = t.memoizedState), (y = Ff || Yd(
          t,
          a,
          y,
          i,
          E,
          Y,
          h
        ) || e !== null && e.dependencies !== null && Jo(e.dependencies)) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, Y, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          Y,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = Y), f.props = i, f.state = Y, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, $s(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, _i(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, on = -1;
        else if (a = P1(h), t.mode & Ba) {
          re(!0);
          try {
            P1(h);
          } finally {
            re(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = Gr(
          t,
          e.child,
          null,
          o
        ), t.child = Gr(
          t,
          null,
          a,
          o
        )) : ql(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Vn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (fm || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        se(t) || "a component"
      ), fm = !0), e;
    }
    function gy(e, t, a, i) {
      return Gi(), t.flags |= 256, ql(e, t, a, i), t.child;
    }
    function cf(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Ve(t) || "Unknown", Yb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), Yb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Ve(t) || "Unknown", Bb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), Bb[t] = !0));
    }
    function of(e) {
      return { baseLanes: e, cachePool: Wm() };
    }
    function Ld(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Mn), e;
    }
    function Vd(e, t, a) {
      var i, o = t.pendingProps;
      Ye(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Cl.current & k0) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (it) {
          if (f ? ya(t) : bu(t), (e = Pt) ? (a = zt(
            e,
            Zu
          ), a = a !== null && a.data !== Kr ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: jp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Vm(a), i.return = t, t.child = i, Da = t, Pt = null)) : a = null, a === null)
            throw aa(t, e), pn(t);
          return Wy(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          bu(t);
          var y = t.mode;
          return h = ks(
            { mode: "hidden", children: h },
            y
          ), o = Hc(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = of(a), o.childLanes = Ld(
            e,
            i,
            a
          ), t.memoizedState = ZS, Wc(
            null,
            o
          );
        }
        return ya(t), vy(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var z = p.dehydrated;
        if (z !== null) {
          if (d)
            t.flags & 256 ? (ya(t), t.flags &= -257, t = Zd(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (bu(t), t.child = e.child, t.flags |= 128, t = null) : (bu(t), h = o.fallback, y = t.mode, o = ks(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = Hc(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, Gr(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = of(a), o.childLanes = Ld(
              e,
              i,
              a
            ), t.memoizedState = ZS, t = Wc(
              null,
              o
            ));
          else if (ya(t), qp(), (a & 536870912) !== 0 && hf(t), Wy(
            z
          )) {
            if (i = z.nextSibling && z.nextSibling.dataset, i) {
              h = i.dgst;
              var R = i.msg;
              y = i.stck;
              var E = i.cstck;
            }
            f = R, i = h, o = y, z = E, h = f, y = z, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && OS.set(
              h,
              o
            ), zs(o), t = Zd(
              e,
              t,
              a
            );
          } else if (Vl || qn(
            e,
            t,
            a,
            !1
          ), i = (a & e.childLanes) !== 0, Vl || i) {
            if (i = Xt, i !== null && (o = bc(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, la(
                e,
                o
              ), Ue(
                i,
                e,
                o
              ), VS;
            hr(
              z
            ) || mf(), t = Zd(
              e,
              t,
              a
            );
          } else
            hr(
              z
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, Pt = ln(
              z.nextSibling
            ), Da = t, it = !0, Jf = null, mc = !1, tu = null, Zu = !1, e !== null && Yp(t, e), t = vy(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (bu(t), h = o.fallback, y = t.mode, E = e.child, z = E.sibling, o = mu(
        E,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = E.subtreeFlags & 65011712, z !== null ? h = mu(
        z,
        h
      ) : (h = Hc(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, Wc(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = of(a) : (y = h.cachePool, y !== null ? (E = Xl._currentValue, y = y.parent !== E ? { parent: E, pool: E } : y) : y = Wm(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Ld(
        e,
        i,
        a
      ), t.memoizedState = ZS, Wc(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && hf(t), ya(t), a = e.child, e = a.sibling, a = mu(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function vy(e, t) {
      return t = ks(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function ks(e, t) {
      return e = U(22, e, null, t), e.lanes = 0, e;
    }
    function Zd(e, t, a) {
      return Gr(t, e.child, null, a), e = vy(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Sy(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Td(
        e.return,
        t,
        a
      );
    }
    function Jd(e, t, a, i, o, f) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function by(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = Cl.current;
      if ((i = (h & k0) !== 0) ? (h = h & um | k0, t.flags |= 128) : h &= um, je(Cl, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !qb[h])
        if (qb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", yv[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (yv[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (yv[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (yv[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (El(d)) {
          for (h = 0; h < d.length; h++)
            if (!Yt(
              d[h],
              h
            ))
              break e;
        } else if (h = De(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!Yt(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (ql(e, t, d, a), it ? (qi(), d = x0) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Sy(e, a, t);
          else if (e.tag === 19)
            Sy(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Gc(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Jd(
            t,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Gc(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Jd(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Jd(
            t,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Vn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), on = -1, es |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (qn(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = mu(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = mu(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Kd(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Jo(e)));
    }
    function Kp(e, t, a) {
      switch (t.tag) {
        case 3:
          jt(
            t,
            t.stateNode.containerInfo
          ), gn(
            t,
            Xl,
            e.memoizedState.cache
          ), Gi();
          break;
        case 27:
        case 5:
          P(t);
          break;
        case 4:
          jt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          gn(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, Qn(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ya(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Vd(
              e,
              t,
              a
            ) : (ya(t), e = Vn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ya(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (qn(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return by(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), je(
            Cl,
            Cl.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, dy(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          gn(
            t,
            Xl,
            e.memoizedState.cache
          );
      }
      return Vn(e, t, a);
    }
    function Ws(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = Uc(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Vl = !0;
        else {
          if (!Kd(e, a) && (t.flags & 128) === 0)
            return Vl = !1, Kp(
              e,
              t,
              a
            );
          Vl = (e.flags & 131072) !== 0;
        }
      else
        Vl = !1, (i = it) && (qi(), i = (t.flags & 1048576) !== 0), i && (i = t.index, qi(), Zm(t, x0, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Ka(t.elementType), t.type = e, typeof e == "function")
            Qm(e) ? (i = zu(
              e,
              i
            ), t.tag = 1, t.type = e = ji(e), t = Fc(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, cf(t, e), t.type = e = ji(e), t = yy(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Uf) {
                t.tag = 11, t.type = e = vd(e), t = Zp(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Ar) {
                t.tag = 14, t = sy(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ua && (t = " Did you wrap a component in React.lazy() more than once?"), a = Ve(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return yy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = zu(
            i,
            t.pendingProps
          ), Fc(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (jt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, gu(e, t), Su(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, gn(t, Xl, i), i !== f.cache && ti(
              t,
              [Xl],
              a,
              !0
            ), Wo(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = gy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = ra(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), zs(o), t = gy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (Pt = ln(e.firstChild), Da = t, it = !0, Jf = null, mc = !1, tu = null, Zu = !0, a = hb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
              }
            else {
              if (Gi(), i === o) {
                t = Vn(
                  e,
                  t,
                  a
                );
                break e;
              }
              ql(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return $s(e, t), e === null ? (a = e0(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : it || (a = t.type, e = t.pendingProps, i = Lt(
            an.current
          ), i = rr(
            i
          ).createElement(a), i[Ft] = t, i[za] = e, Wt(i, a, e), he(i), t.stateNode = i) : t.memoizedState = e0(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return P(t), e === null && it && (i = Lt(an.current), o = L(), i = t.stateNode = gi(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), mc || (o = Ha(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Nc(t, 0).serverProps = o)), Da = t, Zu = !0, o = Pt, cc(t.type) ? (m1 = o, Pt = ln(
            i.firstChild
          )) : Pt = o), ql(
            e,
            t,
            t.pendingProps.children,
            a
          ), $s(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && it && (f = L(), i = ys(
            t.type,
            f.ancestorInfo
          ), o = Pt, (d = !o) || (d = Ag(
            o,
            t.type,
            t.pendingProps,
            Zu
          ), d !== null ? (t.stateNode = d, mc || (f = Ha(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Nc(t, 0).serverProps = f)), Da = t, Pt = ln(
            d.firstChild
          ), Zu = !1, f = !0) : f = !1, d = !f), d && (i && aa(t, o), pn(t))), P(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Tf(o, f) ? i = null : d !== null && Tf(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ty(
            e,
            t,
            xs,
            null,
            null,
            a
          ), hp._currentValue = o), $s(e, t), ql(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && it && (a = t.pendingProps, e = L(), i = e.ancestorInfo.current, a = i != null ? ps(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = Pt, (i = !e) || (i = Og(
            e,
            t.pendingProps,
            Zu
          ), i !== null ? (t.stateNode = i, Da = t, Pt = null, i = !0) : i = !1, i = !i), i && (a && aa(t, e), pn(t))), null;
        case 13:
          return Vd(e, t, a);
        case 4:
          return jt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Gr(
            t,
            null,
            i,
            a
          ) : ql(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Zp(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return ql(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return ql(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, ql(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || Gb || (Gb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), gn(t, i, f), ql(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Xi(t), o = vt(o), i = HS(
            i,
            o,
            void 0
          ), t.flags |= 1, ql(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return sy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return ry(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return by(
            e,
            t,
            a
          );
        case 31:
          return Jp(e, t, a);
        case 22:
          return dy(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return Xi(t), i = vt(Xl), e === null ? (o = ni(), o === null && (o = Xt, f = Ad(), o.pooledCache = f, Bc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, nt(t), gn(t, Xl, o)) : ((e.lanes & a) !== 0 && (gu(e, t), Su(t, null, null, a), Wo()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), gn(t, Xl, i)) : (i = f.cache, gn(t, Xl, i), i !== o.cache && ti(
            t,
            [Xl],
            a,
            !0
          ))), ql(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Du(e) {
      e.flags |= 4;
    }
    function $d(e, t, a, i, o) {
      if ((t = (e.mode & qE) !== Ce) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (qy()) e.flags |= 8192;
          else
            throw qr = fv, xS;
      } else e.flags &= -16777217;
    }
    function $p(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Wu) !== Wr)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !at(t))
        if (qy()) e.flags |= 8192;
        else
          throw qr = fv, xS;
    }
    function ff(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Co() : 536870912, e.lanes |= t, Vr |= t);
    }
    function sf(e, t) {
      if (!it)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Mt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & We) !== Ce) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & We) !== Ce) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Ey(e, t, a) {
      var i = t.pendingProps;
      switch (Ed(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Mt(t), null;
        case 1:
          return Mt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Yn(Xl, t), _(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (xc(t) ? (wi(), Du(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Os())), Mt(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Du(t), f !== null ? (Mt(t), $p(
            t,
            f
          )) : (Mt(t), $d(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (Du(t), Mt(t), $p(
            t,
            f
          )) : (Mt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Du(t), Mt(t), $d(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (pe(t), a = Lt(an.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Du(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Mt(t), null;
            }
            e = L(), xc(t) ? Jm(t) : (e = gi(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Du(t));
          }
          return Mt(t), null;
        case 5:
          if (pe(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Du(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Mt(t), null;
            }
            var d = L();
            if (xc(t))
              Jm(t);
            else {
              switch (f = Lt(an.current), ys(o, d.ancestorInfo), d = d.context, f = rr(f), d) {
                case gm:
                  f = f.createElementNS(
                    Je,
                    o
                  );
                  break;
                case Bv:
                  f = f.createElementNS(
                    we,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        Je,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        we,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || nn.call(f2, o) || (f2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Ft] = t, f[za] = i;
              e: for (d = t.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === t) break e;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === t)
                    break e;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              t.stateNode = f;
              e: switch (Wt(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
              i && Du(t);
            }
          }
          return Mt(t), $d(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            a
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Du(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Lt(an.current), a = L(), xc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !mc, i = null, f = Da, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = _g(
                      e,
                      a,
                      i
                    ), o !== null && (Nc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = _g(
                      e,
                      a,
                      i
                    ), o !== null && (Nc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Ft] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || $y(e.nodeValue, a)), e || pn(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && ps(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = rr(e).createTextNode(
                i
              ), e[Ft] = t, t.stateNode = e;
          }
          return Mt(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = xc(t), a !== null) {
              if (e === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[Ft] = t, Mt(t), (t.mode & We) !== Ce && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                wi(), Gi(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Mt(t), (t.mode & We) !== Ce && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = Os(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (jl(t), t) : (jl(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Mt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = xc(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Ft] = t, Mt(t), (t.mode & We) !== Ce && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                wi(), Gi(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Mt(t), (t.mode & We) !== Ce && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Os(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (jl(t), t) : (jl(t), null);
          }
          return jl(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & We) !== Ce && Yc(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), ff(t, t.updateQueue), Mt(t), (t.mode & We) !== Ce && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return _(t), e === null && uc(
            t.stateNode.containerInfo
          ), Mt(t), null;
        case 10:
          return Yn(t.type, t), Mt(t), null;
        case 19:
          if (ye(Cl, t), i = t.memoizedState, i === null) return Mt(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) sf(i, !1);
            else {
              if (rl !== Do || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Gc(e), f !== null) {
                    for (t.flags |= 128, sf(i, !1), e = f.updateQueue, t.updateQueue = e, ff(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Lm(a, e), a = a.sibling;
                    return je(
                      Cl,
                      Cl.current & um | k0,
                      t
                    ), it && jn(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && wl() > Tv && (t.flags |= 128, o = !0, sf(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = Gc(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, ff(t, e), sf(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !it)
                  return Mt(t), null;
              } else
                2 * wl() - i.renderingStartTime > Tv && a !== 536870912 && (t.flags |= 128, o = !0, sf(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = wl(), e.sibling = null, a = Cl.current, a = o ? a & um | k0 : a & um, je(Cl, a, t), it && jn(t, i.treeForkCount), e) : (Mt(t), null);
        case 22:
        case 23:
          return jl(t), Xn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Mt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Mt(t), a = t.updateQueue, a !== null && ff(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && ye(jr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yn(Xl, t), Mt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function kp(e, t) {
      switch (Ed(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== Ce && Yc(t), t) : null;
        case 3:
          return Yn(Xl, t), _(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return pe(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (jl(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Gi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== Ce && Yc(t), t) : null;
        case 13:
          if (jl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Gi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== Ce && Yc(t), t) : null;
        case 19:
          return ye(Cl, t), null;
        case 4:
          return _(t), null;
        case 10:
          return Yn(t.type, t), null;
        case 22:
        case 23:
          return jl(t), Xn(t), e !== null && ye(jr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & We) !== Ce && Yc(t), t) : null;
        case 24:
          return Yn(Xl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Ty(e, t) {
      switch (Ed(t), t.tag) {
        case 3:
          Yn(Xl, t), _(t);
          break;
        case 26:
        case 27:
        case 5:
          pe(t);
          break;
        case 4:
          _(t);
          break;
        case 31:
          t.memoizedState !== null && jl(t);
          break;
        case 13:
          jl(t);
          break;
        case 19:
          ye(Cl, t);
          break;
        case 10:
          Yn(t.type, t);
          break;
        case 22:
        case 23:
          jl(t), Xn(t), e !== null && ye(jr, t);
          break;
        case 24:
          Yn(Xl, t);
      }
    }
    function _u(e) {
      return (e.mode & We) !== Ce;
    }
    function Wp(e, t) {
      _u(e) ? (cl(), di(t, e), ha()) : di(t, e);
    }
    function kd(e, t, a) {
      _u(e) ? (cl(), Pi(
        a,
        e,
        t
      ), ha()) : Pi(
        a,
        e,
        t
      );
    }
    function di(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & fn) !== rv && (mm = !0), i = ce(
              t,
              VE,
              a
            ), (e & fn) !== rv && (mm = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & au) !== 0 ? "useLayoutEffect" : (a.tag & fn) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ce(
                t,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Ze(t, t.return, h);
      }
    }
    function Pi(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & fn) !== rv && (mm = !0), o = t, ce(
                o,
                ZE,
                o,
                a,
                h
              ), (e & fn) !== rv && (mm = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        Ze(t, t.return, y);
      }
    }
    function Fs(e, t) {
      _u(e) ? (cl(), di(t, e), ha()) : di(t, e);
    }
    function Wd(e, t, a) {
      _u(e) ? (cl(), Pi(
        a,
        e,
        t
      ), ha()) : Pi(
        a,
        e,
        t
      );
    }
    function Ay(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || fm || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          se(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          se(e) || "instance"
        ));
        try {
          ce(
            e,
            Fo,
            t,
            a
          );
        } catch (i) {
          Ze(e, e.return, i);
        }
      }
    }
    function Is(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Fp(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || fm || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        se(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        se(e) || "instance"
      ));
      try {
        var o = zu(
          e.type,
          a
        ), f = ce(
          e,
          Is,
          t,
          o,
          i
        );
        a = wb, f !== void 0 || a.has(e.type) || (a.add(e.type), ce(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            se(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Ze(e, e.return, d);
      }
    }
    function Fd(e, t, a) {
      a.props = zu(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, _u(e) ? (cl(), ce(
        e,
        ub,
        e,
        t,
        a
      ), ha()) : ce(
        e,
        ub,
        e,
        t,
        a
      );
    }
    function Ip(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (_u(e))
            try {
              cl(), e.refCleanup = t(a);
            } finally {
              ha();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            se(e)
          ), t.current = a;
      }
    }
    function Ic(e, t) {
      try {
        ce(e, Ip, e);
      } catch (a) {
        Ze(e, t, a);
      }
    }
    function Tn(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (_u(e))
              try {
                cl(), ce(e, i);
              } finally {
                ha(e);
              }
            else ce(e, i);
          } catch (o) {
            Ze(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (_u(e))
              try {
                cl(), ce(e, a, null);
              } finally {
                ha(e);
              }
            else ce(e, a, null);
          } catch (o) {
            Ze(e, t, o);
          }
        else a.current = null;
    }
    function Oy(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", uv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function Pp(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", uv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function ec(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        ce(
          e,
          dg,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Ze(e, e.return, o);
      }
    }
    function Id(e, t, a) {
      try {
        ce(
          e,
          vh,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ze(e, e.return, i);
      }
    }
    function zy(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && cc(e.type) || e.tag === 4;
    }
    function Pd(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || zy(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && cc(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function rf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (mg(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (mg(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = mn));
      else if (i !== 4 && (i === 27 && cc(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (rf(e, t, a), e = e.sibling; e !== null; )
          rf(e, t, a), e = e.sibling;
    }
    function Ps(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && cc(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (Ps(e, t, a), e = e.sibling; e !== null; )
          Ps(e, t, a), e = e.sibling;
    }
    function Dy(e) {
      for (var t, a = e.return; a !== null; ) {
        if (zy(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = Pd(e), Ps(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Sh(a), t.flags &= -33), t = Pd(e), Ps(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = Pd(e), rf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function _y(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        ce(
          e,
          Bu,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ze(e, e.return, i);
      }
    }
    function Ry(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function tS(e, t) {
      if (e = e.containerInfo, r1 = Gv, e = md(e), Bm(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, y = -1, p = 0, z = 0, R = e, E = null;
              t: for (; ; ) {
                for (var Y; R !== a || o !== 0 && R.nodeType !== 3 || (h = d + o), R !== f || i !== 0 && R.nodeType !== 3 || (y = d + i), R.nodeType === 3 && (d += R.nodeValue.length), (Y = R.firstChild) !== null; )
                  E = R, R = Y;
                for (; ; ) {
                  if (R === e) break t;
                  if (E === a && ++p === o && (h = d), E === f && ++z === i && (y = d), (Y = R.nextSibling) !== null) break;
                  R = E, E = R.parentNode;
                }
                R = Y;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (d1 = {
        focusedElem: e,
        selectionRange: a
      }, Gv = !1, oa = t; oa !== null; )
        if (t = oa, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, oa = e;
        else
          for (; oa !== null; ) {
            switch (e = t = oa, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Fp(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Of(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Of(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, oa = e;
              break;
            }
            oa = t.return;
          }
    }
    function eh(e, t, a) {
      var i = $t(), o = vn(), f = Za(), d = Sn(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ia(e, a), h & 4 && Wp(a, au | $u);
          break;
        case 1:
          if (Ia(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || fm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), _u(a) ? (cl(), ce(
                a,
                NS,
                a,
                e
              ), ha()) : ce(
                a,
                NS,
                a,
                e
              );
            else {
              var y = zu(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || fm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), _u(a) ? (cl(), ce(
                a,
                lb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), ha()) : ce(
                a,
                lb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && Ay(a), h & 512 && Ic(a, a.return);
          break;
        case 3:
          if (t = pu(), Ia(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              ce(
                a,
                Fo,
                h,
                y
              );
            } catch (z) {
              Ze(a, a.return, z);
            }
          }
          e.effectDuration += Ko(t);
          break;
        case 27:
          t === null && h & 4 && _y(a);
        case 26:
        case 5:
          if (Ia(e, a), t === null) {
            if (h & 4) ec(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                ce(
                  a,
                  hg,
                  y,
                  e,
                  t,
                  a
                );
              } catch (z) {
                Ze(
                  a,
                  a.return,
                  z
                );
              }
            }
          }
          h & 512 && Ic(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = pu(), Ia(e, a), e = a.stateNode, e.effectDuration += da(h);
            try {
              ce(
                a,
                Oy,
                a,
                t,
                Kf,
                e.effectDuration
              );
            } catch (z) {
              Ze(a, a.return, z);
            }
          } else Ia(e, a);
          break;
        case 31:
          Ia(e, a), h & 4 && Cy(e, a);
          break;
        case 13:
          Ia(e, a), h & 4 && Uy(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = mi.bind(
            null,
            a
          ), zg(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || zo, !h) {
            t = t !== null && t.memoizedState !== null || Zl, y = zo;
            var p = Zl;
            zo = h, (Zl = t) && !p ? (Zn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & We) !== Ce && 0 <= Te && 0 <= Re && 0.05 < Re - Te && yd(
              a,
              Te,
              Re
            )) : Ia(e, a), zo = y, Zl = p;
          }
          break;
        case 30:
          break;
        default:
          Ia(e, a);
      }
      (a.mode & We) !== Ce && 0 <= Te && 0 <= Re && ((gl || 0.05 < sl) && Bn(
        a,
        Te,
        Re,
        sl,
        ul
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < Re - Te && (Ry(
        a.return.alternate,
        a.return
      ) || yn(
        a,
        Te,
        Re,
        "Mount"
      ))), xl(i), Va(o), ul = f, gl = d;
    }
    function yl(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, yl(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && M(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Zt(e, t, a) {
      for (a = a.child; a !== null; )
        My(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function My(e, t, a) {
      if (Rl && typeof Rl.onCommitFiberUnmount == "function")
        try {
          Rl.onCommitFiberUnmount(ro, a);
        } catch (p) {
          Yu || (Yu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = $t(), o = vn(), f = Za(), d = Sn();
      switch (a.tag) {
        case 26:
          Zl || Tn(a, t), Zt(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Zl || Tn(a, t);
          var h = Jl, y = _n;
          cc(a.type) && (Jl = a.stateNode, _n = !1), Zt(
            e,
            t,
            a
          ), ce(
            a,
            vi,
            a.stateNode
          ), Jl = h, _n = y;
          break;
        case 5:
          Zl || Tn(a, t);
        case 6:
          if (h = Jl, y = _n, Jl = null, Zt(
            e,
            t,
            a
          ), Jl = h, _n = y, Jl !== null)
            if (_n)
              try {
                ce(
                  a,
                  pg,
                  Jl,
                  a.stateNode
                );
              } catch (p) {
                Ze(
                  a,
                  t,
                  p
                );
              }
            else
              try {
                ce(
                  a,
                  yg,
                  Jl,
                  a.stateNode
                );
              } catch (p) {
                Ze(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          Jl !== null && (_n ? (e = Jl, ao(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), co(e)) : ao(Jl, a.stateNode));
          break;
        case 4:
          h = Jl, y = _n, Jl = a.stateNode.containerInfo, _n = !0, Zt(
            e,
            t,
            a
          ), Jl = h, _n = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Pi(
            fn,
            a,
            t
          ), Zl || kd(
            a,
            t,
            au
          ), Zt(
            e,
            t,
            a
          );
          break;
        case 1:
          Zl || (Tn(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && Fd(
            a,
            t,
            h
          )), Zt(
            e,
            t,
            a
          );
          break;
        case 21:
          Zt(
            e,
            t,
            a
          );
          break;
        case 22:
          Zl = (h = Zl) || a.memoizedState !== null, Zt(
            e,
            t,
            a
          ), Zl = h;
          break;
        default:
          Zt(
            e,
            t,
            a
          );
      }
      (a.mode & We) !== Ce && 0 <= Te && 0 <= Re && (gl || 0.05 < sl) && Bn(
        a,
        Te,
        Re,
        sl,
        ul
      ), xl(i), Va(o), ul = f, gl = d;
    }
    function Cy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          ce(
            t,
            bh,
            e
          );
        } catch (a) {
          Ze(t, t.return, a);
        }
      }
    }
    function Uy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          ce(
            t,
            Iy,
            e
          );
        } catch (a) {
          Ze(t, t.return, a);
        }
    }
    function eg(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Xb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Xb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function tc(e, t) {
      var a = eg(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), qu)
            if (sm !== null && rm !== null)
              gf(rm, sm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = to.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function va(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = $t(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (cc(y.type)) {
                  Jl = y.stateNode, _n = !1;
                  break e;
                }
                break;
              case 5:
                Jl = y.stateNode, _n = !1;
                break e;
              case 3:
              case 4:
                Jl = y.stateNode.containerInfo, _n = !0;
                break e;
            }
            y = y.return;
          }
          if (Jl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          My(o, f, d), Jl = null, _n = !1, (d.mode & We) !== Ce && 0 <= Te && 0 <= Re && 0.05 < Re - Te && yn(
            d,
            Te,
            Re,
            "Unmount"
          ), xl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          er(t, e), t = t.sibling;
    }
    function er(e, t) {
      var a = $t(), i = vn(), o = Za(), f = Sn(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          va(t, e), Sa(e), h & 4 && (Pi(
            fn | $u,
            e,
            e.return
          ), di(fn | $u, e), kd(
            e,
            e.return,
            au | $u
          ));
          break;
        case 1:
          if (va(t, e), Sa(e), h & 512 && (Zl || d === null || Tn(d, d.return)), h & 64 && zo && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Oi, va(t, e), Sa(e), h & 512 && (Zl || d === null || Tn(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = e.memoizedState, d === null)
              if (h === null)
                if (e.stateNode === null) {
                  e: {
                    h = e.type, d = e.memoizedProps, y = y.ownerDocument || y;
                    t: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[Gf] || p[Ft] || p.namespaceURI === Je || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), Wt(p, h, d), p[Ft] = e, he(p), h = p;
                        break e;
                      case "link":
                        var z = _f(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (z) {
                          for (var R = 0; R < z.length; R++)
                            if (p = z[R], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              z.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), Wt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (z = _f(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (R = 0; R < z.length; R++)
                            if (p = z[R], mt(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              z.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), Wt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Ft] = e, he(p), h = p;
                  }
                  e.stateNode = h;
                } else
                  Mg(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Ah(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? Mg(
                y,
                e.type,
                e.stateNode
              ) : Ah(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && Id(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          va(t, e), Sa(e), h & 512 && (Zl || d === null || Tn(d, d.return)), d !== null && h & 4 && Id(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (va(t, e), Sa(e), h & 512 && (Zl || d === null || Tn(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              ce(
                e,
                Sh,
                y
              );
            } catch (oe) {
              Ze(e, e.return, oe);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, Id(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (JS = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (va(t, e), Sa(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              ce(
                e,
                lS,
                y,
                d,
                h
              );
            } catch (oe) {
              Ze(e, e.return, oe);
            }
          }
          break;
        case 3:
          if (y = pu(), jv = null, p = Oi, Oi = Eh(t.containerInfo), va(t, e), Oi = p, Sa(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              ce(
                e,
                Fy,
                t.containerInfo
              );
            } catch (oe) {
              Ze(e, e.return, oe);
            }
          JS && (JS = !1, tg(e)), t.effectDuration += Ko(
            y
          );
          break;
        case 4:
          h = Oi, Oi = Eh(
            e.stateNode.containerInfo
          ), va(t, e), Sa(e), Oi = h;
          break;
        case 12:
          h = pu(), va(t, e), Sa(e), e.stateNode.effectDuration += da(h);
          break;
        case 31:
          va(t, e), Sa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, tc(e, h)));
          break;
        case 13:
          va(t, e), Sa(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (Ev = wl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, tc(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var E = d !== null && d.memoizedState !== null, Y = zo, le = Zl;
          if (zo = Y || y, Zl = le || E, va(t, e), Zl = le, zo = Y, E && !y && !Y && !le && (e.mode & We) !== Ce && 0 <= Te && 0 <= Re && 0.05 < Re - Te && yd(
            e,
            Te,
            Re
          ), Sa(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~N0 : t._visibility | N0, !y || d === null || E || zo || Zl || (lc(e), (e.mode & We) !== Ce && 0 <= Te && 0 <= Re && 0.05 < Re - Te && yn(
              e,
              Te,
              Re,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  E = d = t;
                  try {
                    p = E.stateNode, y ? ce(
                      E,
                      vg,
                      p
                    ) : ce(
                      E,
                      Eg,
                      E.stateNode,
                      E.memoizedProps
                    );
                  } catch (oe) {
                    Ze(E, E.return, oe);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  E = t;
                  try {
                    z = E.stateNode, y ? ce(
                      E,
                      Sg,
                      z
                    ) : ce(
                      E,
                      Tg,
                      z,
                      E.memoizedProps
                    );
                  } catch (oe) {
                    Ze(E, E.return, oe);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  E = t;
                  try {
                    R = E.stateNode, y ? ce(
                      E,
                      gg,
                      R
                    ) : ce(
                      E,
                      bg,
                      E.stateNode
                    );
                  } catch (oe) {
                    Ze(E, E.return, oe);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                d === t && (d = null), t = t.return;
              }
              d === t && (d = null), t.sibling.return = t.return, t = t.sibling;
            }
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, tc(e, d))));
          break;
        case 19:
          va(t, e), Sa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, tc(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          va(t, e), Sa(e);
      }
      (e.mode & We) !== Ce && 0 <= Te && 0 <= Re && ((gl || 0.05 < sl) && Bn(
        e,
        Te,
        Re,
        sl,
        ul
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < Re - Te && (Ry(
        e.return.alternate,
        e.return
      ) || yn(
        e,
        Te,
        Re,
        "Mount"
      ))), xl(a), Va(i), ul = o, gl = f;
    }
    function Sa(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          ce(e, Dy, e);
        } catch (a) {
          Ze(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function tg(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          tg(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Ia(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          eh(e, t.alternate, t), t = t.sibling;
    }
    function th(e) {
      var t = $t(), a = vn(), i = Za(), o = Sn();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          kd(
            e,
            e.return,
            au
          ), lc(e);
          break;
        case 1:
          Tn(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && Fd(
            e,
            e.return,
            f
          ), lc(e);
          break;
        case 27:
          ce(
            e,
            vi,
            e.stateNode
          );
        case 26:
        case 5:
          Tn(e, e.return), lc(e);
          break;
        case 22:
          e.memoizedState === null && lc(e);
          break;
        case 30:
          lc(e);
          break;
        default:
          lc(e);
      }
      (e.mode & We) !== Ce && 0 <= Te && 0 <= Re && (gl || 0.05 < sl) && Bn(
        e,
        Te,
        Re,
        sl,
        ul
      ), xl(t), Va(a), ul = i, gl = o;
    }
    function lc(e) {
      for (e = e.child; e !== null; )
        th(e), e = e.sibling;
    }
    function Hy(e, t, a, i) {
      var o = $t(), f = vn(), d = Za(), h = Sn(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Zn(
            e,
            a,
            i
          ), Wp(a, au);
          break;
        case 1:
          if (Zn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && ce(
            a,
            NS,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              ce(
                a,
                Pm,
                t,
                e
              );
            } catch (p) {
              Ze(a, a.return, p);
            }
          }
          i && y & 64 && Ay(a), Ic(a, a.return);
          break;
        case 27:
          _y(a);
        case 26:
        case 5:
          Zn(
            e,
            a,
            i
          ), i && t === null && y & 4 && ec(a), Ic(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = pu(), Zn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += da(y);
            try {
              ce(
                a,
                Oy,
                a,
                t,
                Kf,
                i.effectDuration
              );
            } catch (p) {
              Ze(a, a.return, p);
            }
          } else
            Zn(
              e,
              a,
              i
            );
          break;
        case 31:
          Zn(
            e,
            a,
            i
          ), i && y & 4 && Cy(e, a);
          break;
        case 13:
          Zn(
            e,
            a,
            i
          ), i && y & 4 && Uy(e, a);
          break;
        case 22:
          a.memoizedState === null && Zn(
            e,
            a,
            i
          ), Ic(a, a.return);
          break;
        case 30:
          break;
        default:
          Zn(
            e,
            a,
            i
          );
      }
      (a.mode & We) !== Ce && 0 <= Te && 0 <= Re && (gl || 0.05 < sl) && Bn(
        a,
        Te,
        Re,
        sl,
        ul
      ), xl(o), Va(f), ul = d, gl = h;
    }
    function Zn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Hy(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function tr(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Bc(e), a != null && _s(a));
    }
    function lr(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Bc(t), e != null && _s(e));
    }
    function Pa(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          Ny(
            e,
            t,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function Ny(e, t, a, i, o) {
      var f = $t(), d = vn(), h = Za(), y = Sn(), p = Lf, z = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & We) !== Ce && 0 < t.actualStartTime && (t.flags & 1) !== 0 && pd(
            t,
            t.actualStartTime,
            o,
            Il,
            a
          ), Pa(
            e,
            t,
            a,
            i,
            o
          ), z & 2048 && Fs(t, sn | $u);
          break;
        case 1:
          (t.mode & We) !== Ce && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? Ym(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && pd(
            t,
            t.actualStartTime,
            o,
            Il,
            a
          )), Pa(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var R = pu(), E = Il;
          Il = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, Pa(
            e,
            t,
            a,
            i,
            o
          ), Il = E, z & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (Bc(i), a != null && _s(a))), e.passiveEffectDuration += Ko(
            R
          );
          break;
        case 12:
          if (z & 2048) {
            z = pu(), Pa(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += da(z);
            try {
              ce(
                t,
                Pp,
                t,
                t.alternate,
                Kf,
                e.passiveEffectDuration
              );
            } catch (Y) {
              Ze(t, t.return, Y);
            }
          } else
            Pa(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          z = Il, R = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, R !== null && E === null ? (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Il = !1, R = R.hydrationErrors, R !== null && Ym(
            t,
            t.actualStartTime,
            o,
            R
          )) : Il = !0) : Il = !1, Pa(
            e,
            t,
            a,
            i,
            o
          ), Il = z;
          break;
        case 13:
          z = Il, R = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, R === null || R.dehydrated === null || E !== null && E.dehydrated !== null ? Il = !1 : (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Il = !1, R = R.hydrationErrors, R !== null && Ym(
            t,
            t.actualStartTime,
            o,
            R
          )) : Il = !0), Pa(
            e,
            t,
            a,
            i,
            o
          ), Il = z;
          break;
        case 23:
          break;
        case 22:
          E = t.stateNode, R = t.alternate, t.memoizedState !== null ? E._visibility & yo ? Pa(
            e,
            t,
            a,
            i,
            o
          ) : Pc(
            e,
            t,
            a,
            i,
            o
          ) : E._visibility & yo ? Pa(
            e,
            t,
            a,
            i,
            o
          ) : (E._visibility |= yo, ac(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & We) === Ce || Il || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && yd(t, e, o), 0 <= Te && 0 <= Re && 0.05 < Re - Te && yd(
            t,
            Te,
            Re
          ))), z & 2048 && tr(
            R,
            t
          );
          break;
        case 24:
          Pa(
            e,
            t,
            a,
            i,
            o
          ), z & 2048 && lr(t.alternate, t);
          break;
        default:
          Pa(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & We) !== Ce && ((e = !Il && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && yn(
        t,
        a,
        o,
        "Mount"
      )), 0 <= Te && 0 <= Re && ((gl || 0.05 < sl) && Bn(
        t,
        Te,
        Re,
        sl,
        ul
      ), e && 0.05 < Re - Te && yn(
        t,
        Te,
        Re,
        "Mount"
      ))), xl(f), Va(d), ul = h, gl = y, Lf = p;
    }
    function ac(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        ar(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function ar(e, t, a, i, o, f) {
      var d = $t(), h = vn(), y = Za(), p = Sn(), z = Lf;
      o && (t.mode & We) !== Ce && 0 < t.actualStartTime && (t.flags & 1) !== 0 && pd(
        t,
        t.actualStartTime,
        f,
        Il,
        a
      );
      var R = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ac(
            e,
            t,
            a,
            i,
            o,
            f
          ), Fs(t, sn);
          break;
        case 23:
          break;
        case 22:
          var E = t.stateNode;
          t.memoizedState !== null ? E._visibility & yo ? ac(
            e,
            t,
            a,
            i,
            o,
            f
          ) : Pc(
            e,
            t,
            a,
            i,
            f
          ) : (E._visibility |= yo, ac(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && R & 2048 && tr(
            t.alternate,
            t
          );
          break;
        case 24:
          ac(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && R & 2048 && lr(t.alternate, t);
          break;
        default:
          ac(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & We) !== Ce && 0 <= Te && 0 <= Re && (gl || 0.05 < sl) && Bn(
        t,
        Te,
        Re,
        sl,
        ul
      ), xl(d), Va(h), ul = y, gl = p, Lf = z;
    }
    function Pc(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, z = Lf;
          (f.mode & We) !== Ce && 0 < f.actualStartTime && (f.flags & 1) !== 0 && pd(
            f,
            f.actualStartTime,
            p,
            Il,
            h
          );
          var R = f.flags;
          switch (f.tag) {
            case 22:
              Pc(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && tr(f.alternate, f);
              break;
            case 24:
              Pc(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && lr(f.alternate, f);
              break;
            default:
              Pc(
                d,
                f,
                h,
                y,
                p
              );
          }
          Lf = z, f = t;
        }
    }
    function eo(e, t, a) {
      if (e.subtreeFlags & P0)
        for (e = e.child; e !== null; )
          lh(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function lh(e, t, a) {
      switch (e.tag) {
        case 26:
          eo(
            e,
            t,
            a
          ), e.flags & P0 && e.memoizedState !== null && a0(
            a,
            Oi,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          eo(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = Oi;
          Oi = Eh(
            e.stateNode.containerInfo
          ), eo(
            e,
            t,
            a
          ), Oi = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = P0, P0 = 16777216, eo(
            e,
            t,
            a
          ), P0 = i) : eo(
            e,
            t,
            a
          ));
          break;
        default:
          eo(
            e,
            t,
            a
          );
      }
    }
    function xy(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function en(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = $t();
            oa = i, Ru(
              i,
              e
            ), (i.mode & We) !== Ce && 0 <= Te && 0 <= Re && 0.05 < Re - Te && yn(
              i,
              Te,
              Re,
              "Unmount"
            ), xl(o);
          }
        xy(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          ah(e), e = e.sibling;
    }
    function ah(e) {
      var t = $t(), a = vn(), i = Za(), o = Sn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          en(e), e.flags & 2048 && Wd(
            e,
            e.return,
            sn | $u
          );
          break;
        case 3:
          var f = pu();
          en(e), e.stateNode.passiveEffectDuration += Ko(f);
          break;
        case 12:
          f = pu(), en(e), e.stateNode.passiveEffectDuration += da(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & yo && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~yo, nh(e), (e.mode & We) !== Ce && 0 <= Te && 0 <= Re && 0.05 < Re - Te && yn(
            e,
            Te,
            Re,
            "Disconnect"
          )) : en(e);
          break;
        default:
          en(e);
      }
      (e.mode & We) !== Ce && 0 <= Te && 0 <= Re && (gl || 0.05 < sl) && Bn(
        e,
        Te,
        Re,
        sl,
        ul
      ), xl(t), Va(a), gl = o, ul = i;
    }
    function nh(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = $t();
            oa = i, Ru(
              i,
              e
            ), (i.mode & We) !== Ce && 0 <= Te && 0 <= Re && 0.05 < Re - Te && yn(
              i,
              Te,
              Re,
              "Unmount"
            ), xl(o);
          }
        xy(e);
      }
      for (e = e.child; e !== null; )
        By(e), e = e.sibling;
    }
    function By(e) {
      var t = $t(), a = vn(), i = Za(), o = Sn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Wd(
            e,
            e.return,
            sn
          ), nh(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & yo && (f._visibility &= ~yo, nh(e));
          break;
        default:
          nh(e);
      }
      (e.mode & We) !== Ce && 0 <= Te && 0 <= Re && (gl || 0.05 < sl) && Bn(
        e,
        Te,
        Re,
        sl,
        ul
      ), xl(t), Va(a), gl = o, ul = i;
    }
    function Ru(e, t) {
      for (; oa !== null; ) {
        var a = oa, i = a, o = t, f = $t(), d = vn(), h = Za(), y = Sn();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Wd(
              i,
              o,
              sn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && Bc(o));
            break;
          case 24:
            _s(i.memoizedState.cache);
        }
        if ((i.mode & We) !== Ce && 0 <= Te && 0 <= Re && (gl || 0.05 < sl) && Bn(
          i,
          Te,
          Re,
          sl,
          ul
        ), xl(f), Va(d), gl = y, ul = h, i = a.child, i !== null) i.return = a, oa = i;
        else
          e: for (a = e; oa !== null; ) {
            if (i = oa, f = i.sibling, d = i.return, yl(i), i === a) {
              oa = null;
              break e;
            }
            if (f !== null) {
              f.return = d, oa = f;
              break e;
            }
            oa = d;
          }
      }
    }
    function jy() {
      WE.forEach(function(e) {
        return e();
      });
    }
    function Yy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || G.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function na(e) {
      if ((dt & Pl) !== fa && Ie !== 0)
        return Ie & -Ie;
      var t = G.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), Ky()) : Ci();
    }
    function df() {
      if (Mn === 0)
        if ((Ie & 536870912) === 0 || it) {
          var e = Dr;
          Dr <<= 1, (Dr & 3932160) === 0 && (Dr = 262144), Mn = e;
        } else Mn = 536870912;
      return e = lu.current, e !== null && (e.flags |= 32), Mn;
    }
    function Ue(e, t, a) {
      if (mm && console.error("useInsertionEffect must not schedule updates."), a1 && (zv = !0), (e === Xt && (Nt === Qr || Nt === Lr) || e.cancelPendingCommit !== null) && (Mu(e, 0), An(
        e,
        Ie,
        Mn,
        !1
      )), Cn(e, a), (dt & Pl) !== fa && e === Xt) {
        if (ju)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = tt && se(tt) || "Unknown", l2.has(e) || (l2.add(e), t = se(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              t2 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), t2 = !0);
          }
      } else
        qu && Ol(e, t, a), cr(t), e === Xt && ((dt & Pl) === fa && (ts |= a), rl === If && An(
          e,
          Ie,
          Mn,
          !1
        )), Ca(e);
    }
    function lg(e, t, a) {
      if ((dt & (Pl | nu)) !== fa)
        throw Error("Should not already be working.");
      if (Ie !== 0 && tt !== null) {
        var i = tt, o = wl();
        switch ($1) {
          case lp:
          case Qr:
            var f = G0;
            It && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                wu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              wu,
              void 0,
              "primary-light"
            ));
            break;
          case Lr:
            f = G0, It && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                wu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              wu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            It && (i = o - G0, 3 > i || console.timeStamp(
              "Blocked",
              G0,
              o,
              wu,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || vl(e, t)) ? hi(e, t) : yf(e, t, !0);
      var d = a;
      do {
        if (f === Do) {
          dm && !a && An(e, t, 0, !1), t = Nt, G0 = Ql(), $1 = t;
          break;
        } else {
          if (i = wl(), o = e.current.alternate, d && !ng(o)) {
            xn(t), o = ca, f = i, !It || f <= o || (Tl ? Tl.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                st,
                ct,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              st,
              ct,
              "error"
            )), nc(t, i), f = yf(e, t, !1), d = !1;
            continue;
          }
          if (f === Xr) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              xn(t), qm(
                ca,
                i,
                t,
                Tl
              ), nc(t, i), t = h;
              e: {
                i = e, f = d, d = np;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Mu(i, h).flags |= 256), h = yf(
                  i,
                  h,
                  !1
                ), h !== Xr) {
                  if (kS && !y) {
                    i.errorRecoveryDisabledLanes |= f, ts |= f, f = If;
                    break e;
                  }
                  i = rn, rn = d, i !== null && (rn === null ? rn = i : rn.push.apply(
                    rn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Xr) continue;
              i = wl();
            }
          }
          if (f === tp) {
            xn(t), qm(
              ca,
              i,
              t,
              Tl
            ), nc(t, i), Mu(e, 0), An(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case Do:
              case tp:
                throw Error("Root did not complete. This is a bug in React.");
              case If:
                if ((t & 4194048) !== t) break;
              case gv:
                xn(t), Hp(
                  ca,
                  i,
                  t,
                  Tl
                ), nc(t, i), o = t, (o & 127) !== 0 ? lv = i : (o & 4194048) !== 0 && (av = i), An(
                  a,
                  t,
                  Mn,
                  !Pf
                );
                break e;
              case Xr:
                rn = null;
                break;
              case pv:
              case Qb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (G.actQueue !== null)
              qt(
                a,
                o,
                t,
                rn,
                up,
                bv,
                Mn,
                ts,
                Vr,
                f,
                null,
                null,
                ca,
                i
              );
            else {
              if ((t & 62914560) === t && (d = Ev + Zb - wl(), 10 < d)) {
                if (An(
                  a,
                  t,
                  Mn,
                  !Pf
                ), Sc(a, 0, !0) !== 0) break e;
                zi = t, a.timeoutHandle = s2(
                  ag.bind(
                    null,
                    a,
                    o,
                    rn,
                    up,
                    bv,
                    t,
                    Mn,
                    ts,
                    Vr,
                    Pf,
                    f,
                    "Throttled",
                    ca,
                    i
                  ),
                  d
                );
                break e;
              }
              ag(
                a,
                o,
                rn,
                up,
                bv,
                t,
                Mn,
                ts,
                Vr,
                Pf,
                f,
                null,
                ca,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Ca(e);
    }
    function ag(e, t, a, i, o, f, d, h, y, p, z, R, E, Y) {
      e.timeoutHandle = kr;
      var le = t.subtreeFlags, oe = null;
      if ((le & 8192 || (le & 16785408) === 16785408) && (oe = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: mn
      }, lh(t, f, oe), le = (f & 62914560) === f ? Ev - wl() : (f & 4194048) === f ? Vb - wl() : 0, le = Oh(oe, le), le !== null)) {
        zi = f, e.cancelPendingCommit = le(
          qt.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            y,
            z,
            oe,
            oe.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < oe.count ? 0 < oe.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : oe.imgCount === 1 ? "Suspended on an Image" : 0 < oe.imgCount ? "Suspended on Images" : null,
            E,
            Y
          )
        ), An(
          e,
          f,
          d,
          !p
        );
        return;
      }
      qt(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        z,
        oe,
        R,
        E,
        Y
      );
    }
    function ng(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!cn(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function An(e, t, a, i) {
      t &= ~WS, t &= ~ts, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Wl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && Ho(e, a, t);
    }
    function tn() {
      return (dt & (Pl | nu)) === fa ? (Uu(0), !1) : !0;
    }
    function uh() {
      if (tt !== null) {
        if (Nt === Rn)
          var e = tt.return;
        else
          e = tt, Zo(), Li(e), am = null, $0 = 0, e = tt;
        for (; e !== null; )
          Ty(e.alternate, e), e = e.return;
        tt = null;
      }
    }
    function nc(e, t) {
      (e & 127) !== 0 && (Hr = t), (e & 4194048) !== 0 && (bo = t), (e & 62914560) !== 0 && (J1 = t), (e & 2080374784) !== 0 && (K1 = t);
    }
    function Mu(e, t) {
      It && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        ct,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        ct,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        ct,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        ct,
        "primary-light"
      ));
      var a = ca;
      if (ca = Ql(), Ie !== 0 && 0 < a) {
        if (xn(Ie), rl === pv || rl === If)
          Hp(
            a,
            ca,
            t,
            Tl
          );
        else {
          var i = ca, o = Tl;
          if (It && !(i <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                st,
                ct,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              st,
              ct,
              f
            );
          }
        }
        nc(Ie, ca);
      }
      if (a = Tl, Tl = null, (t & 127) !== 0) {
        Tl = j0, o = 0 <= yc && yc < Hr ? Hr : yc, i = 0 <= Nr && Nr < Hr ? Hr : Nr, f = 0 <= i ? i : 0 <= o ? o : ca, 0 <= lv ? (xn(2), Np(
          lv,
          f,
          t,
          a
        )) : nv & 127, a = o;
        var h = i, y = Y0, p = 0 < em, z = $f === B0, R = $f === tv;
        if (o = ca, i = j0, f = RS, d = MS, It) {
          if (st = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var E = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                st,
                ct,
                E
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              st,
              ct,
              E
            );
          }
          o > a && (h = z ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", z = R ? "Promise Resolved" : z ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", R = [], d != null && R.push(["Component name", d]), f != null && R.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: R,
                track: st,
                trackGroup: ct,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              z,
              a
            )
          ) : performance.measure(z, a));
        }
        yc = -1.1, $f = 0, MS = RS = null, lv = -1.1, em = Nr, Nr = -1.1, Hr = Ql();
      }
      if ((t & 4194048) !== 0 && (Tl = q0, o = 0 <= Eo && Eo < bo ? bo : Eo, a = 0 <= Ju && Ju < bo ? bo : Ju, i = 0 <= kf && kf < bo ? bo : kf, f = 0 <= i ? i : 0 <= a ? a : ca, 0 <= av ? (xn(256), Np(
        av,
        f,
        t,
        Tl
      )) : nv & 4194048, R = i, h = xr, y = 0 < Wf, p = CS === tv, f = ca, i = q0, d = V1, z = Z1, It && (st = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < R ? R > o && (R = o) : R = o, o > R && h !== null && (E = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          R,
          o,
          st,
          ct,
          E
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        R,
        o,
        st,
        ct,
        E
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          st,
          ct,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        st,
        ct,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", R = [], z != null && R.push(["Component name", z]), d != null && R.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: R,
            track: st,
            trackGroup: ct,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Ju = Eo = -1.1, CS = 0, av = -1.1, Wf = kf, kf = -1.1, bo = Ql()), (t & 62914560) !== 0 && (nv & 62914560) !== 0 && (xn(4194304), Gm(J1, ca)), (t & 2080374784) !== 0 && (nv & 2080374784) !== 0 && (xn(268435456), Gm(K1, ca)), a = e.timeoutHandle, a !== kr && (e.timeoutHandle = kr, fT(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), zi = 0, uh(), Xt = e, tt = a = mu(
        e.current,
        null
      ), Ie = t, Nt = Rn, uu = null, Pf = !1, dm = vl(e, t), kS = !1, rl = Do, Vr = Mn = WS = ts = es = 0, rn = np = null, bv = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - Wl(i), f = 1 << o, t |= e[o], i &= ~f;
      return gc = t, gd(), e = q1(), 1e3 < e - Y1 && (G.recentlyCreatedOwnerStacks = 0, Y1 = e), Ti.discardPendingWarnings(), a;
    }
    function Jn(e, t) {
      xe = null, G.H = I0, G.getCurrentStack = null, ju = !1, xa = null, t === lm || t === ov ? (t = qc(), Nt = lp) : t === xS ? (t = qc(), Nt = Lb) : Nt = t === VS ? $S : t !== null && typeof t == "object" && typeof t.then == "function" ? ap : vv, uu = t;
      var a = tt;
      a === null ? (rl = tp, Js(
        e,
        ra(t, e.current)
      )) : a.mode & We && Od(a);
    }
    function qy() {
      var e = lu.current;
      return e === null ? !0 : (Ie & 4194048) === Ie ? Ku === null : (Ie & 62914560) === Ie || (Ie & 536870912) !== 0 ? e === Ku : !1;
    }
    function ih() {
      var e = G.H;
      return G.H = I0, e === null ? I0 : e;
    }
    function Gy() {
      var e = G.A;
      return G.A = kE, e;
    }
    function hf(e) {
      Tl === null && (Tl = e._debugTask == null ? null : e._debugTask);
    }
    function mf() {
      rl = If, Pf || (Ie & 4194048) !== Ie && lu.current !== null || (dm = !0), (es & 134217727) === 0 && (ts & 134217727) === 0 || Xt === null || An(
        Xt,
        Ie,
        Mn,
        !1
      );
    }
    function yf(e, t, a) {
      var i = dt;
      dt |= Pl;
      var o = ih(), f = Gy();
      if (Xt !== e || Ie !== t) {
        if (qu) {
          var d = e.memoizedUpdaters;
          0 < d.size && (gf(e, Ie), d.clear()), wa(e, t);
        }
        up = null, Mu(e, t);
      }
      t = !1, d = rl;
      e: do
        try {
          if (Nt !== Rn && tt !== null) {
            var h = tt, y = uu;
            switch (Nt) {
              case $S:
                uh(), d = gv;
                break e;
              case lp:
              case Qr:
              case Lr:
              case ap:
                lu.current === null && (t = !0);
                var p = Nt;
                if (Nt = Rn, uu = null, pf(e, h, y, p), a && dm) {
                  d = Do;
                  break e;
                }
                break;
              default:
                p = Nt, Nt = Rn, uu = null, pf(e, h, y, p);
            }
          }
          wy(), d = rl;
          break;
        } catch (z) {
          Jn(e, z);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Zo(), dt = i, G.H = o, G.A = f, tt === null && (Xt = null, Ie = 0, gd()), d;
    }
    function wy() {
      for (; tt !== null; ) ch(tt);
    }
    function hi(e, t) {
      var a = dt;
      dt |= Pl;
      var i = ih(), o = Gy();
      if (Xt !== e || Ie !== t) {
        if (qu) {
          var f = e.memoizedUpdaters;
          0 < f.size && (gf(e, Ie), f.clear()), wa(e, t);
        }
        up = null, Tv = wl() + Jb, Mu(e, t);
      } else
        dm = vl(
          e,
          t
        );
      e: do
        try {
          if (Nt !== Rn && tt !== null)
            t: switch (t = tt, f = uu, Nt) {
              case vv:
                Nt = Rn, uu = null, pf(
                  e,
                  t,
                  f,
                  vv
                );
                break;
              case Qr:
              case Lr:
                if (Fm(f)) {
                  Nt = Rn, uu = null, Xy(t);
                  break;
                }
                t = function() {
                  Nt !== Qr && Nt !== Lr || Xt !== e || (Nt = Sv), Ca(e);
                }, f.then(t, t);
                break e;
              case lp:
                Nt = Sv;
                break e;
              case Lb:
                Nt = KS;
                break e;
              case Sv:
                Fm(f) ? (Nt = Rn, uu = null, Xy(t)) : (Nt = Rn, uu = null, pf(
                  e,
                  t,
                  f,
                  Sv
                ));
                break;
              case KS:
                var d = null;
                switch (tt.tag) {
                  case 26:
                    d = tt.memoizedState;
                  case 5:
                  case 27:
                    var h = tt;
                    if (d ? at(d) : h.stateNode.complete) {
                      Nt = Rn, uu = null;
                      var y = h.sibling;
                      if (y !== null) tt = y;
                      else {
                        var p = h.return;
                        p !== null ? (tt = p, nr(p)) : tt = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Nt = Rn, uu = null, pf(
                  e,
                  t,
                  f,
                  KS
                );
                break;
              case ap:
                Nt = Rn, uu = null, pf(
                  e,
                  t,
                  f,
                  ap
                );
                break;
              case $S:
                uh(), rl = gv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          G.actQueue !== null ? wy() : bl();
          break;
        } catch (z) {
          Jn(e, z);
        }
      while (!0);
      return Zo(), G.H = i, G.A = o, dt = a, tt !== null ? Do : (Xt = null, Ie = 0, gd(), rl);
    }
    function bl() {
      for (; tt !== null && !Bh(); )
        ch(tt);
    }
    function ch(e) {
      var t = e.alternate;
      (e.mode & We) !== Ce ? (li(e), t = ce(
        e,
        Ws,
        t,
        e,
        gc
      ), Od(e)) : t = ce(
        e,
        Ws,
        t,
        e,
        gc
      ), e.memoizedProps = e.pendingProps, t === null ? nr(e) : tt = t;
    }
    function Xy(e) {
      var t = ce(e, Gl, e);
      e.memoizedProps = e.pendingProps, t === null ? nr(e) : tt = t;
    }
    function Gl(e) {
      var t = e.alternate, a = (e.mode & We) !== Ce;
      switch (a && li(e), e.tag) {
        case 15:
        case 0:
          t = py(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Ie
          );
          break;
        case 11:
          t = py(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Ie
          );
          break;
        case 5:
          Li(e);
        default:
          Ty(t, e), e = tt = Lm(e, gc), t = Ws(t, e, gc);
      }
      return a && Od(e), t;
    }
    function pf(e, t, a, i) {
      Zo(), Li(t), am = null, $0 = 0;
      var o = t.return;
      try {
        if (fy(
          e,
          o,
          t,
          a,
          Ie
        )) {
          rl = tp, Js(
            e,
            ra(a, e.current)
          ), tt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw tt = o, f;
        rl = tp, Js(
          e,
          ra(a, e.current)
        ), tt = null;
        return;
      }
      t.flags & 32768 ? (it || i === vv ? e = !0 : dm || (Ie & 536870912) !== 0 ? e = !1 : (Pf = e = !0, (i === Qr || i === Lr || i === lp || i === ap) && (i = lu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Qy(t, e)) : nr(t);
    }
    function nr(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Qy(
            t,
            Pf
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, li(t), a = ce(
          t,
          Ey,
          a,
          t,
          gc
        ), (t.mode & We) !== Ce && Rs(t), a !== null) {
          tt = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          tt = t;
          return;
        }
        tt = t = e;
      } while (t !== null);
      rl === Do && (rl = Qb);
    }
    function Qy(e, t) {
      do {
        var a = kp(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, tt = a;
          return;
        }
        if ((e.mode & We) !== Ce) {
          Rs(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          tt = e;
          return;
        }
        tt = e = a;
      } while (e !== null);
      rl = gv, tt = null;
    }
    function qt(e, t, a, i, o, f, d, h, y, p, z, R, E, Y) {
      e.cancelPendingCommit = null;
      do
        ur();
      while (Kl !== as);
      if (Ti.flushLegacyContextWarning(), Ti.flushPendingUnsafeLifecycleWarnings(), (dt & (Pl | nu)) !== fa)
        throw Error("Should not already be working.");
      if (xn(a), p === Xr ? qm(
        E,
        Y,
        a,
        Tl
      ) : i !== null ? Fv(
        E,
        Y,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        Tl
      ) : Wv(
        E,
        Y,
        a,
        Tl
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= AS, Pr(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Xt && (tt = Xt = null, Ie = 0), hm = t, ns = e, zi = a, PS = f, t1 = o, Ib = i, e1 = Y, Pb = R, Di = Av, e2 = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, vf(so, function() {
          return rp = window.event, Di === Av && (Di = IS), ir(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), So = null, Kf = Ql(), R !== null && Iv(
          Y,
          Kf,
          R,
          Tl
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = G.T, G.T = null, o = bt.p, bt.p = Ml, d = dt, dt |= nu;
          try {
            tS(e, t, a);
          } finally {
            dt = d, bt.p = o, G.T = i;
          }
        }
        Kl = $b, ba(), Cu(), Ly();
      }
    }
    function ba() {
      if (Kl === $b) {
        Kl = as;
        var e = ns, t = hm, a = zi, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = G.T, G.T = null;
          var o = bt.p;
          bt.p = Ml;
          var f = dt;
          dt |= nu;
          try {
            sm = a, rm = e, jc(), er(t, e), rm = sm = null, a = d1;
            var d = md(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Rp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Bm(h)) {
                var p = y.start, z = y.end;
                if (z === void 0 && (z = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    z,
                    h.value.length
                  );
                else {
                  var R = h.ownerDocument || document, E = R && R.defaultView || window;
                  if (E.getSelection) {
                    var Y = E.getSelection(), le = h.textContent.length, oe = Math.min(
                      y.start,
                      le
                    ), Jt = y.end === void 0 ? oe : Math.min(y.end, le);
                    !Y.extend && oe > Jt && (d = Jt, Jt = oe, oe = d);
                    var ot = _p(
                      h,
                      oe
                    ), b = _p(
                      h,
                      Jt
                    );
                    if (ot && b && (Y.rangeCount !== 1 || Y.anchorNode !== ot.node || Y.anchorOffset !== ot.offset || Y.focusNode !== b.node || Y.focusOffset !== b.offset)) {
                      var T = R.createRange();
                      T.setStart(ot.node, ot.offset), Y.removeAllRanges(), oe > Jt ? (Y.addRange(T), Y.extend(b.node, b.offset)) : (T.setEnd(b.node, b.offset), Y.addRange(T));
                    }
                  }
                }
              }
              for (R = [], Y = h; Y = Y.parentNode; )
                Y.nodeType === 1 && R.push({
                  element: Y,
                  left: Y.scrollLeft,
                  top: Y.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < R.length; h++) {
                var O = R[h];
                O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
              }
            }
            Gv = !!r1, d1 = r1 = null;
          } finally {
            dt = f, bt.p = o, G.T = i;
          }
        }
        e.current = t, Kl = kb;
      }
    }
    function Cu() {
      if (Kl === kb) {
        Kl = as;
        var e = e2;
        if (e !== null) {
          Kf = Ql();
          var t = vo, a = Kf;
          !It || a <= t || console.timeStamp(
            e,
            t,
            a,
            st,
            ct,
            "secondary-light"
          );
        }
        e = ns, t = hm, a = zi;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = G.T, G.T = null;
          var o = bt.p;
          bt.p = Ml;
          var f = dt;
          dt |= nu;
          try {
            sm = a, rm = e, jc(), eh(
              e,
              t.alternate,
              t
            ), rm = sm = null;
          } finally {
            dt = f, bt.p = o, G.T = i;
          }
        }
        e = e1, t = Pb, vo = Ql(), e = t === null ? e : Kf, t = vo, a = Di === FS, i = Tl, So !== null ? xp(
          e,
          t,
          So,
          !1,
          i
        ) : !It || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            st,
            ct,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          st,
          ct,
          a ? "error" : "secondary-dark"
        )), Kl = Wb;
      }
    }
    function Ly() {
      if (Kl === Fb || Kl === Wb) {
        if (Kl === Fb) {
          var e = vo;
          vo = Ql();
          var t = vo, a = Di === FS;
          !It || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            st,
            ct,
            a ? " error" : "secondary-light"
          ), Di !== FS && (Di = Kb);
        }
        Kl = as, jh(), e = ns;
        var i = hm;
        t = zi, a = Ib;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? Kl = Ov : (Kl = as, hm = ns = null, Vy(
          e,
          e.pendingLanes
        ), Zr = 0, cp = null);
        var f = e.pendingLanes;
        if (f === 0 && (ls = null), o || sh(e), f = Hl(t), i = i.stateNode, Rl && typeof Rl.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case Ml:
                var h = b0;
                break;
              case Fl:
                h = Yh;
                break;
              case ia:
                h = so;
                break;
              case dc:
                h = qh;
                break;
              default:
                h = so;
            }
            Rl.onCommitFiberRoot(
              ro,
              i,
              h,
              d
            );
          } catch (R) {
            Yu || (Yu = !0, console.error(
              "React instrumentation encountered an error: %o",
              R
            ));
          }
        if (qu && e.memoizedUpdaters.clear(), jy(), a !== null) {
          d = G.T, h = bt.p, bt.p = Ml, G.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], z = ug(p.stack);
              ce(
                p.source,
                y,
                p.value,
                z
              );
            }
          } finally {
            G.T = d, bt.p = h;
          }
        }
        (zi & 3) !== 0 && ur(), Ca(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (iv = !0, e === l1 ? ip++ : (ip = 0, l1 = e)) : ip = 0, o || nc(t, vo), Uu(0);
      }
    }
    function ug(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Vy(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, _s(t)));
    }
    function ur() {
      return ba(), Cu(), Ly(), ir();
    }
    function ir() {
      if (Kl !== Ov) return !1;
      var e = ns, t = PS;
      PS = 0;
      var a = Hl(zi), i = ia > a ? ia : a;
      a = G.T;
      var o = bt.p;
      try {
        bt.p = i, G.T = null;
        var f = t1;
        t1 = null, i = ns;
        var d = zi;
        if (Kl = as, hm = ns = null, zi = 0, (dt & (Pl | nu)) !== fa)
          throw Error("Cannot flush passive effects while already rendering.");
        xn(d), a1 = !0, zv = !1;
        var h = 0;
        if (So = null, h = wl(), Di === Kb)
          Gm(
            vo,
            h,
            QE
          );
        else {
          var y = vo, p = h, z = Di === IS;
          !It || p <= y || (Tl ? Tl.run(
            console.timeStamp.bind(
              console,
              z ? "Waiting for Paint" : "Waiting",
              y,
              p,
              st,
              ct,
              "secondary-light"
            )
          ) : console.timeStamp(
            z ? "Waiting for Paint" : "Waiting",
            y,
            p,
            st,
            ct,
            "secondary-light"
          ));
        }
        y = dt, dt |= nu;
        var R = i.current;
        jc(), ah(R);
        var E = i.current;
        R = e1, jc(), Ny(
          i,
          E,
          d,
          f,
          R
        ), sh(i), dt = y;
        var Y = wl();
        if (E = h, R = Tl, So !== null ? xp(
          E,
          Y,
          So,
          !0,
          R
        ) : !It || Y <= E || (R ? R.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            E,
            Y,
            st,
            ct,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          E,
          Y,
          st,
          ct,
          "secondary-dark"
        )), nc(d, Y), Uu(0, !1), zv ? i === cp ? Zr++ : (Zr = 0, cp = i) : Zr = 0, zv = a1 = !1, Rl && typeof Rl.onPostCommitFiberRoot == "function")
          try {
            Rl.onPostCommitFiberRoot(ro, i);
          } catch (oe) {
            Yu || (Yu = !0, console.error(
              "React instrumentation encountered an error: %o",
              oe
            ));
          }
        var le = i.current.stateNode;
        return le.effectDuration = 0, le.passiveEffectDuration = 0, !0;
      } finally {
        bt.p = o, G.T = a, Vy(e, t);
      }
    }
    function Ea(e, t, a) {
      t = ra(a, t), wp(t), t = wd(e.stateNode, t, 2), e = vu(e, t, 2), e !== null && (Cn(e, 2), Ca(e));
    }
    function Ze(e, t, a) {
      if (mm = !1, e.tag === 3)
        Ea(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Ea(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ls === null || !ls.has(i))) {
              e = ra(a, e), wp(e), a = Xd(2), i = vu(t, a, 2), i !== null && (Qd(
                a,
                i,
                t,
                e
              ), Cn(i, 2), Ca(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function oh(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new FE();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (kS = !0, o.add(a), i = Ma.bind(null, e, t, a), qu && gf(e, a), t.then(i, i));
    }
    function Ma(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > yc && (Hr = yc = Ql(), j0 = ev("Promise Resolved"), $f = tv) : (a & 4194048) !== 0 && 0 > Ju && (bo = Ju = Ql(), q0 = ev("Promise Resolved"), CS = tv), Yy() && G.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Xt === e && (Ie & a) === a && (rl === If || rl === pv && (Ie & 62914560) === Ie && wl() - Ev < Zb ? (dt & Pl) === fa && Mu(e, 0) : WS |= a, Vr === Ie && (Vr = 0)), Ca(e);
    }
    function Zy(e, t) {
      t === 0 && (t = Co()), e = la(e, t), e !== null && (Cn(e, t), Ca(e));
    }
    function mi(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Zy(e, a);
    }
    function to(e, t) {
      var a = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), Zy(e, a);
    }
    function Kn(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Oa;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && ce(
            o,
            fh,
            i,
            o
          ) : Kn(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? ce(
            o,
            fh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && ce(
            o,
            Kn,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function fh(e, t) {
      re(!0);
      try {
        th(t), By(t), Hy(e, t.alternate, t, !1), ar(e, t, 0, null, !1, 0);
      } finally {
        re(!1);
      }
    }
    function sh(e) {
      var t = !0;
      e.current.mode & (Ba | Ei) || (t = !1), Kn(
        e,
        e.current,
        t
      );
    }
    function On(e) {
      if ((dt & Pl) === fa) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = se(e) || "ReactComponent", Dv !== null) {
            if (Dv.has(t)) return;
            Dv.add(t);
          } else Dv = /* @__PURE__ */ new Set([t]);
          ce(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function gf(e, t) {
      qu && e.memoizedUpdaters.forEach(function(a) {
        Ol(e, a, t);
      });
    }
    function vf(e, t) {
      var a = G.actQueue;
      return a !== null ? (a.push(t), eT) : S0(e, t);
    }
    function cr(e) {
      Yy() && G.actQueue === null && ce(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          se(e)
        );
      });
    }
    function Ca(e) {
      e !== ym && e.next === null && (ym === null ? _v = ym = e : ym = ym.next = e), Rv = !0, G.actQueue !== null ? u1 || (u1 = !0, cg()) : n1 || (n1 = !0, cg());
    }
    function Uu(e, t) {
      if (!i1 && Rv) {
        i1 = !0;
        do
          for (var a = !1, i = _v; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Wl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, or(i, f));
            } else
              f = Ie, f = Sc(
                i,
                i === Xt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== kr
              ), (f & 3) === 0 || vl(i, f) || (a = !0, or(i, f));
            i = i.next;
          }
        while (a);
        i1 = !1;
      }
    }
    function ig() {
      rp = window.event, rh();
    }
    function rh() {
      Rv = u1 = n1 = !1;
      var e = 0;
      us !== 0 && ky() && (e = us);
      for (var t = wl(), a = null, i = _v; i !== null; ) {
        var o = i.next, f = Sf(i, t);
        f === 0 ? (i.next = null, a === null ? _v = o : a.next = o, o === null && (ym = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Rv = !0)), i = o;
      }
      Kl !== as && Kl !== Ov || Uu(e), us !== 0 && (us = 0);
    }
    function Sf(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Wl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Ir(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Xt, a = Ie, a = Sc(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== kr
      ), i = e.callbackNode, a === 0 || e === t && (Nt === Qr || Nt === Lr) || e.cancelPendingCommit !== null)
        return i !== null && dh(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || vl(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || G.actQueue !== null && i !== c1)
          dh(i);
        else return t;
        switch (Hl(a)) {
          case Ml:
          case Fl:
            a = Yh;
            break;
          case ia:
            a = so;
            break;
          case dc:
            a = qh;
            break;
          default:
            a = so;
        }
        return i = Jy.bind(null, e), G.actQueue !== null ? (G.actQueue.push(i), a = c1) : a = S0(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && dh(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Jy(e, t) {
      if (iv = uv = !1, rp = window.event, Kl !== as && Kl !== Ov)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Di === Av && (Di = IS), ur() && e.callbackNode !== a)
        return null;
      var i = Ie;
      return i = Sc(
        e,
        e === Xt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== kr
      ), i === 0 ? null : (lg(
        e,
        i,
        t
      ), Sf(e, wl()), e.callbackNode != null && e.callbackNode === a ? Jy.bind(null, e) : null);
    }
    function or(e, t) {
      if (ur()) return null;
      uv = iv, iv = !1, lg(e, t, !0);
    }
    function dh(e) {
      e !== c1 && e !== null && xh(e);
    }
    function cg() {
      G.actQueue !== null && G.actQueue.push(function() {
        return rh(), null;
      }), sT(function() {
        (dt & (Pl | nu)) !== fa ? S0(
          b0,
          ig
        ) : rh();
      });
    }
    function Ky() {
      if (us === 0) {
        var e = Br;
        e === 0 && (e = Yf, Yf <<= 1, (Yf & 261888) === 0 && (Yf = 256)), us = e;
      }
      return us;
    }
    function yt(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (mt(e, "action"), gs("" + e));
    }
    function Ct(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function ut(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = yt(
          (o[za] || null).action
        ), d = i.submitter;
        d && (t = (t = d[za] || null) ? yt(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Kg(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (us !== 0) {
                    var y = d ? Ct(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), si(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? Ct(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), si(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function et(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        SS(i);
      }
      e.currentTarget = null;
    }
    function Ot(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? ce(
                y,
                et,
                f,
                h,
                p
              ) : et(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? ce(
                y,
                et,
                f,
                h,
                p
              ) : et(f, h, p), o = y;
            }
        }
      }
    }
    function Me(e, t) {
      o1.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[ho];
      a === void 0 && (a = t[ho] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (hh(t, e, 2, !1), a.add(i));
    }
    function Hu(e, t, a) {
      o1.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), hh(
        a,
        e,
        i,
        t
      );
    }
    function uc(e) {
      if (!e[Mv]) {
        e[Mv] = !0, Qg.forEach(function(a) {
          a !== "selectionchange" && (o1.has(a) || Hu(a, !1, e), Hu(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Mv] || (t[Mv] = !0, Hu("selectionchange", !1, t));
      }
    }
    function hh(e, t, a, i) {
      switch (_h(t)) {
        case Ml:
          var o = o0;
          break;
        case Fl:
          o = kl;
          break;
        default:
          o = f0;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !fS || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function $n(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = I(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      sd(function() {
        var p = f, z = Hn(a), R = [];
        e: {
          var E = j1.get(e);
          if (E !== void 0) {
            var Y = Kg, le = e;
            switch (e) {
              case "keypress":
                if (vs(a) === 0) break e;
              case "keydown":
              case "keyup":
                Y = yE;
                break;
              case "focusin":
                le = "focus", Y = hS;
                break;
              case "focusout":
                le = "blur", Y = hS;
                break;
              case "beforeblur":
              case "afterblur":
                Y = hS;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                Y = T1;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                Y = aE;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                Y = vE;
                break;
              case H1:
              case N1:
              case x1:
                Y = iE;
                break;
              case B1:
                Y = bE;
                break;
              case "scroll":
              case "scrollend":
                Y = tE;
                break;
              case "wheel":
                Y = TE;
                break;
              case "copy":
              case "cut":
              case "paste":
                Y = oE;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                Y = O1;
                break;
              case "toggle":
              case "beforetoggle":
                Y = OE;
            }
            var oe = (t & 4) !== 0, Jt = !oe && (e === "scroll" || e === "scrollend"), ot = oe ? E !== null ? E + "Capture" : null : E;
            oe = [];
            for (var b = p, T; b !== null; ) {
              var O = b;
              if (T = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || T === null || ot === null || (O = du(b, ot), O != null && oe.push(
                Gt(
                  b,
                  O,
                  T
                )
              )), Jt) break;
              b = b.return;
            }
            0 < oe.length && (E = new Y(
              E,
              le,
              null,
              a,
              z
            ), R.push({
              event: E,
              listeners: oe
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (E = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", E && a !== z0 && (le = a.relatedTarget || a.fromElement) && (I(le) || le[bi]))
              break e;
            if ((Y || E) && (E = z.window === z ? z : (E = z.ownerDocument) ? E.defaultView || E.parentWindow : window, Y ? (le = a.relatedTarget || a.toElement, Y = p, le = le ? I(le) : null, le !== null && (Jt = lt(le), oe = le.tag, le !== Jt || oe !== 5 && oe !== 27 && oe !== 6) && (le = null)) : (Y = null, le = p), Y !== le)) {
              if (oe = T1, O = "onMouseLeave", ot = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (oe = O1, O = "onPointerLeave", ot = "onPointerEnter", b = "pointer"), Jt = Y == null ? E : de(Y), T = le == null ? E : de(le), E = new oe(
                O,
                b + "leave",
                Y,
                a,
                z
              ), E.target = Jt, E.relatedTarget = T, O = null, I(z) === p && (oe = new oe(
                ot,
                b + "enter",
                le,
                a,
                z
              ), oe.target = T, oe.relatedTarget = Jt, O = oe), Jt = O, Y && le)
                t: {
                  for (oe = lo, ot = Y, b = le, T = 0, O = ot; O; O = oe(O))
                    T++;
                  O = 0;
                  for (var V = b; V; V = oe(V))
                    O++;
                  for (; 0 < T - O; )
                    ot = oe(ot), T--;
                  for (; 0 < O - T; )
                    b = oe(b), O--;
                  for (; T--; ) {
                    if (ot === b || b !== null && ot === b.alternate) {
                      oe = ot;
                      break t;
                    }
                    ot = oe(ot), b = oe(b);
                  }
                  oe = null;
                }
              else oe = null;
              Y !== null && mh(
                R,
                E,
                Y,
                oe,
                !1
              ), le !== null && Jt !== null && mh(
                R,
                Jt,
                le,
                oe,
                !0
              );
            }
          }
          e: {
            if (E = p ? de(p) : window, Y = E.nodeName && E.nodeName.toLowerCase(), Y === "select" || Y === "input" && E.type === "file")
              var ue = Bi;
            else if (Hm(E))
              if (C1)
                ue = Ts;
              else {
                ue = Nm;
                var Be = kv;
              }
            else
              Y = E.nodeName, !Y || Y.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? p && ru(p.elementType) && (ue = Bi) : ue = xm;
            if (ue && (ue = ue(e, p))) {
              bs(
                R,
                ue,
                a,
                z
              );
              break e;
            }
            Be && Be(e, E, p), e === "focusout" && p && E.type === "number" && p.memoizedProps.value != null && Am(E, "number", E.value);
          }
          switch (Be = p ? de(p) : window, e) {
            case "focusin":
              (Hm(Be) || Be.contentEditable === "true") && (Jh = Be, yS = p, H0 = null);
              break;
            case "focusout":
              H0 = yS = Jh = null;
              break;
            case "mousedown":
              pS = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              pS = !1, Mp(
                R,
                a,
                z
              );
              break;
            case "selectionchange":
              if (RE) break;
            case "keydown":
            case "keyup":
              Mp(
                R,
                a,
                z
              );
          }
          var be;
          if (mS)
            e: {
              switch (e) {
                case "compositionstart":
                  var ge = "onCompositionStart";
                  break e;
                case "compositionend":
                  ge = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  ge = "onCompositionUpdate";
                  break e;
              }
              ge = void 0;
            }
          else
            Zh ? wo(e, a) && (ge = "onCompositionEnd") : e === "keydown" && a.keyCode === z1 && (ge = "onCompositionStart");
          ge && (D1 && a.locale !== "ko" && (Zh || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Zh && (be = Dc()) : (Qf = z, sS = "value" in Qf ? Qf.value : Qf.textContent, Zh = !0)), Be = kn(
            p,
            ge
          ), 0 < Be.length && (ge = new A1(
            ge,
            e,
            null,
            a,
            z
          ), R.push({
            event: ge,
            listeners: Be
          }), be ? ge.data = be : (be = ei(a), be !== null && (ge.data = be)))), (be = DE ? Um(e, a) : rd(e, a)) && (ge = kn(
            p,
            "onBeforeInput"
          ), 0 < ge.length && (Be = new sE(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            z
          ), R.push({
            event: Be,
            listeners: ge
          }), Be.data = be)), ut(
            R,
            e,
            p,
            a,
            z
          );
        }
        Ot(R, t);
      });
    }
    function Gt(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function kn(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = du(e, a), o != null && i.unshift(
          Gt(e, o, f)
        ), o = du(e, t), o != null && i.push(
          Gt(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function lo(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function mh(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = du(a, f), p != null && d.unshift(
          Gt(a, p, y)
        )) : o || (p = du(a, f), p != null && d.push(
          Gt(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Ta(e, t) {
      Op(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || b1 || (b1 = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Gu,
        possibleRegistrationNames: wf
      };
      ru(e) || typeof t.is == "string" || $v(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function al(e, t, a, i) {
      t !== a && (a = Wn(a), Wn(t) !== a && (i[e] = t));
    }
    function fr(e, t, a) {
      t.forEach(function(i) {
        a[yi(i)] = i === "style" ? ic(e) : e.getAttribute(i);
      });
    }
    function nl(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function yh(e, t) {
      return e = e.namespaceURI === we || e.namespaceURI === Je ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Wn(e) {
      return Ga(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Ri(e)
      ), iu(e)), (typeof e == "string" ? e : "" + e).replace(tT, `
`).replace(lT, "");
    }
    function $y(e, t) {
      return t = Wn(t), Wn(e) === t;
    }
    function St(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (ps(i, t, !1), t === "body" || t === "textarea" && i === "" || zc(e, i)) : (typeof i == "number" || typeof i == "bigint") && (ps("" + i, t, !1), t !== "body" && zc(e, "" + i));
          break;
        case "className":
          hs(e, "class", i);
          break;
        case "tabIndex":
          hs(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          hs(e, a, i);
          break;
        case "style":
          Rm(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            hs(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          mt(i, a), i = gs("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Hv || (Hv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Uv || (Uv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Cv ? t !== "button" || o.type == null || o.type === "submit" || Cv ? typeof i == "function" && (o.name == null || u2 || (u2 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Hv || (Hv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Uv || (Uv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Cv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Cv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && St(e, t, "name", o.name, o, null), St(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), St(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), St(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (St(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), St(e, t, "method", o.method, o, null), St(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          mt(i, a), i = gs("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && nl(a, i), e.onclick = mn);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && nl(a, i), Me("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && nl(a, i), Me("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          mt(i, a), a = gs("" + i), e.setAttributeNS(Jr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (mt(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Nv[a] || (Nv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (mt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (mt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (mt(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Me("beforetoggle", e), Me("toggle", e), No(e, "popover", i);
          break;
        case "xlinkActuate":
          ou(
            e,
            Jr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          ou(
            e,
            Jr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          ou(
            e,
            Jr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          ou(
            e,
            Jr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          ou(
            e,
            Jr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          ou(
            e,
            Jr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          ou(
            e,
            f1,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          ou(
            e,
            f1,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          ou(
            e,
            f1,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), No(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          i2 || i == null || typeof i != "object" || (i2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = Tp(a), No(e, a, i)) : Gu.hasOwnProperty(a) && i != null && typeof i != "function" && nl(a, i);
      }
    }
    function bf(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Rm(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? zc(e, i) : (typeof i == "number" || typeof i == "bigint") && zc(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && nl(a, i), Me("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && nl(a, i), Me("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && nl(a, i), e.onclick = mn);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Gu.hasOwnProperty(a))
            i != null && typeof i != "function" && nl(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[za] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : No(e, a, i);
            }
      }
    }
    function Wt(e, t, a) {
      switch (Ta(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Me("error", e), Me("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    St(e, t, f, d, a, null);
                }
            }
          o && St(e, t, "srcSet", a.srcSet, a, null), i && St(e, t, "src", a.src, a, null);
          return;
        case "input":
          ta("input", a), Me("invalid", e);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var z = a[i];
              if (z != null)
                switch (i) {
                  case "name":
                    o = z;
                    break;
                  case "type":
                    d = z;
                    break;
                  case "checked":
                    y = z;
                    break;
                  case "defaultChecked":
                    p = z;
                    break;
                  case "value":
                    f = z;
                    break;
                  case "defaultValue":
                    h = z;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (z != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    St(e, t, i, z, a, null);
                }
            }
          sa(e, a), ld(
            e,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          ta("select", a), Me("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  St(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          ad(e, a), t = f, a = d, e.multiple = !!i, t != null ? fu(e, !!i, t, !1) : a != null && fu(e, !!i, a, !0);
          return;
        case "textarea":
          ta("textarea", a), Me("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  St(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Ec(e, a), xo(e, i, o, f);
          return;
        case "option":
          Ep(e, a);
          for (y in a)
            if (a.hasOwnProperty(y) && (i = a[y], i != null))
              switch (y) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  St(e, t, y, i, a, null);
              }
          return;
        case "dialog":
          Me("beforetoggle", e), Me("toggle", e), Me("cancel", e), Me("close", e);
          break;
        case "iframe":
        case "object":
          Me("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < op.length; i++)
            Me(op[i], e);
          break;
        case "image":
          Me("error", e), Me("load", e);
          break;
        case "details":
          Me("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Me("error", e), Me("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  St(e, t, p, i, a, null);
              }
          return;
        default:
          if (ru(t)) {
            for (z in a)
              a.hasOwnProperty(z) && (i = a[z], i !== void 0 && bf(
                e,
                t,
                z,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && St(e, t, h, i, a, null));
    }
    function _l(e, t, a, i) {
      switch (Ta(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, z = null;
          for (Y in a) {
            var R = a[Y];
            if (a.hasOwnProperty(Y) && R != null)
              switch (Y) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = R;
                default:
                  i.hasOwnProperty(Y) || St(
                    e,
                    t,
                    Y,
                    null,
                    i,
                    R
                  );
              }
          }
          for (var E in i) {
            var Y = i[E];
            if (R = a[E], i.hasOwnProperty(E) && (Y != null || R != null))
              switch (E) {
                case "type":
                  f = Y;
                  break;
                case "name":
                  o = Y;
                  break;
                case "checked":
                  p = Y;
                  break;
                case "defaultChecked":
                  z = Y;
                  break;
                case "value":
                  d = Y;
                  break;
                case "defaultValue":
                  h = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Y !== R && St(
                    e,
                    t,
                    E,
                    Y,
                    i,
                    R
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || n2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), n2 = !0), !t || i || a2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), a2 = !0), Hi(
            e,
            d,
            h,
            y,
            p,
            z,
            f,
            o
          );
          return;
        case "select":
          Y = d = h = E = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  Y = y;
                default:
                  i.hasOwnProperty(f) || St(
                    e,
                    t,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  E = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && St(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = Y, E != null ? fu(e, !!t, E, !1) : !!a != !!t && (i != null ? fu(e, !!t, i, !0) : fu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          Y = E = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  St(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  E = o;
                  break;
                case "defaultValue":
                  Y = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && St(e, t, d, o, i, f);
              }
          Tc(e, E, Y);
          return;
        case "option":
          for (var le in a)
            if (E = a[le], a.hasOwnProperty(le) && E != null && !i.hasOwnProperty(le))
              switch (le) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  St(
                    e,
                    t,
                    le,
                    null,
                    i,
                    E
                  );
              }
          for (y in i)
            if (E = i[y], Y = a[y], i.hasOwnProperty(y) && E !== Y && (E != null || Y != null))
              switch (y) {
                case "selected":
                  e.selected = E && typeof E != "function" && typeof E != "symbol";
                  break;
                default:
                  St(
                    e,
                    t,
                    y,
                    E,
                    i,
                    Y
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var oe in a)
            E = a[oe], a.hasOwnProperty(oe) && E != null && !i.hasOwnProperty(oe) && St(
              e,
              t,
              oe,
              null,
              i,
              E
            );
          for (p in i)
            if (E = i[p], Y = a[p], i.hasOwnProperty(p) && E !== Y && (E != null || Y != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  St(
                    e,
                    t,
                    p,
                    E,
                    i,
                    Y
                  );
              }
          return;
        default:
          if (ru(t)) {
            for (var Jt in a)
              E = a[Jt], a.hasOwnProperty(Jt) && E !== void 0 && !i.hasOwnProperty(Jt) && bf(
                e,
                t,
                Jt,
                void 0,
                i,
                E
              );
            for (z in i)
              E = i[z], Y = a[z], !i.hasOwnProperty(z) || E === Y || E === void 0 && Y === void 0 || bf(
                e,
                t,
                z,
                E,
                i,
                Y
              );
            return;
          }
      }
      for (var ot in a)
        E = a[ot], a.hasOwnProperty(ot) && E != null && !i.hasOwnProperty(ot) && St(e, t, ot, null, i, E);
      for (R in i)
        E = i[R], Y = a[R], !i.hasOwnProperty(R) || E === Y || E == null && Y == null || St(e, t, R, E, i, Y);
    }
    function yi(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function ic(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Nu(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (ea(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || me.has(f) ? (ea(d, f), i += o + f.replace(w, "-$1").toLowerCase().replace(fe, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(w, "-$1").toLowerCase().replace(fe, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Wn(i), Wn(t) !== i && (a.style = ic(e)));
      }
    }
    function Ua(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (mt(i, t), e === "" + i)
              return;
        }
      al(t, e, i, f);
    }
    function ph(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      al(t, e, i, f);
    }
    function gh(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (mt(i, a), e === "" + i)
              return;
        }
      al(t, e, i, f);
    }
    function Ef(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (mt(i, t), e === "" + i))
              return;
        }
      al(t, e, i, f);
    }
    function sr(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (mt(i, t), a = gs("" + i), e === a)
              return;
        }
      al(t, e, i, f);
    }
    function Ha(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (ru(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Gu.hasOwnProperty(y))
                typeof p != "function" && nl(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || al(
                      "children",
                      e.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = yh(e, p), al(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), Nu(e, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Ui(
                      e,
                      "class",
                      p
                    ), al(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === _o && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = Ui(
                      e,
                      y,
                      p
                    ), al(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (Gu.hasOwnProperty(p))
              typeof y != "function" && nl(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || al(
                    "children",
                    e.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = yh(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Ua(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Ua(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), Nu(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), al(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), al(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), al(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), al(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || t === "a" && p === "href" || t === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  sr(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === aT) {
                    f.delete(p.toLowerCase()), al(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  sr(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  sr(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  gh(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  gh(
                    e,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  gh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  ph(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var z = d = p, R = o;
                    if (f.delete(z), h = h.getAttribute(z), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (y === !1) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break e;
                          break;
                        default:
                          if (mt(y, d), h === "" + y)
                            break e;
                      }
                    al(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, z = d = p, R = o, f.delete(z), h = h.getAttribute(z), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(y) || 1 > y) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (mt(y, d), h === "" + y))
                            break e;
                      }
                    al(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "rowSpan":
                  Ef(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Ef(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Ua(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Ua(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Ua(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Ua(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Ua(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Ua(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Ua(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Ua(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Ua(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Ua(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Nv[p] || (Nv[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), ph(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = Tp(p), d = !1, i.context === _o && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (z = p.toLowerCase(), z = eu.hasOwnProperty(
                      z
                    ) && eu[z] || null, z !== null && z !== p && (d = !0, f.delete(z)), f.delete(h));
                    e: if (z = e, R = h, h = y, hn(R))
                      if (z.hasAttribute(R))
                        z = z.getAttribute(
                          R
                        ), mt(
                          h,
                          R
                        ), h = z === "" + h ? h : z;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (z = R.toLowerCase().slice(0, 5), z !== "data-" && z !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || al(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && fr(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function og(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Aa(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function fg() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && Aa(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var z = y.transferSize, R = y.initiatorType;
              z && Aa(R) && (y = y.responseEnd, d += z * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function rr(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function sg(e) {
      switch (e) {
        case Je:
          return gm;
        case we:
          return Bv;
        default:
          return _o;
      }
    }
    function pi(e, t) {
      if (e === _o)
        switch (t) {
          case "svg":
            return gm;
          case "math":
            return Bv;
          default:
            return _o;
        }
      return e === gm && t === "foreignObject" ? _o : e;
    }
    function Tf(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ky() {
      var e = window.event;
      return e && e.type === "popstate" ? e === h1 ? !1 : (h1 = e, !0) : (h1 = null, !1);
    }
    function xu() {
      var e = window.event;
      return e && e !== rp ? e.type : null;
    }
    function Af() {
      var e = window.event;
      return e && e !== rp ? e.timeStamp : -1.1;
    }
    function rg(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function dg(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function hg() {
    }
    function vh(e, t, a, i) {
      _l(e, t, a, i), e[za] = i;
    }
    function Sh(e) {
      zc(e, "");
    }
    function lS(e, t, a) {
      e.nodeValue = a;
    }
    function mg(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[za] || null;
        if (t !== null) {
          var a = te(e);
          a !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, ce(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, ce(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function cc(e) {
      return e === "head";
    }
    function yg(e, t) {
      e.removeChild(t);
    }
    function pg(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function ao(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === sp || a === xv) {
            if (i === 0) {
              e.removeChild(o), co(t);
              return;
            }
            i--;
          } else if (a === fp || a === is || a === $r || a === pm || a === Kr)
            i++;
          else if (a === uT)
            vi(
              e.ownerDocument.documentElement
            );
          else if (a === cT) {
            a = e.ownerDocument.head, vi(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Gf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === iT && vi(e.ownerDocument.body);
        a = o;
      } while (a);
      co(t);
    }
    function dr(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === sp) {
            if (e === 0) break;
            e--;
          } else
            a !== fp && a !== is && a !== $r && a !== pm || e++;
        a = i;
      } while (a);
    }
    function gg(e) {
      dr(e, !0);
    }
    function vg(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Sg(e) {
      e.nodeValue = "";
    }
    function bg(e) {
      dr(e, !1);
    }
    function Eg(e, t) {
      t = t[oT], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Tg(e, t) {
      e.nodeValue = t;
    }
    function Of(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Of(a), M(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Ag(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Gf])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          mt(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = ln(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Og(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = ln(e.nextSibling), e === null)) return null;
      return e;
    }
    function zt(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = ln(e.nextSibling), e === null)) return null;
      return e;
    }
    function hr(e) {
      return e.data === is || e.data === $r;
    }
    function Wy(e) {
      return e.data === pm || e.data === is && e.ownerDocument.readyState !== o2;
    }
    function zg(e, t) {
      var a = e.ownerDocument;
      if (e.data === $r)
        e._reactRetry = t;
      else if (e.data !== is || a.readyState !== o2)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function ln(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === fp || t === pm || t === is || t === $r || t === Kr || t === s1 || t === c2)
            break;
          if (t === sp || t === xv)
            return null;
        }
      }
      return e;
    }
    function Dg(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[yi(f.name)] = f.name.toLowerCase() === "style" ? ic(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === Kr ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function _g(e, t, a) {
      return a === null || a[nT] !== !0 ? (e.nodeValue === t ? e = null : (t = Wn(t), e = Wn(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function zf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === sp || a === xv) {
            if (t === 0)
              return ln(e.nextSibling);
            t--;
          } else
            a !== fp && a !== pm && a !== is && a !== $r && a !== Kr || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function no(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === fp || a === pm || a === is || a === $r || a === Kr) {
            if (t === 0) return e;
            t--;
          } else
            a !== sp && a !== xv || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Fy(e) {
      co(e);
    }
    function bh(e) {
      co(e);
    }
    function Iy(e) {
      co(e);
    }
    function gi(e, t, a, i, o) {
      switch (o && ys(e, i.ancestorInfo), t = rr(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Bu(e, t, a, i) {
      if (!a[bi] && te(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Wt(a, e, t), a[Ft] = i, a[za] = t;
    }
    function vi(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      M(e);
    }
    function Eh(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Py(e, t, a) {
      var i = vm;
      if (i && typeof t == "string" && t) {
        var o = Rt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), m2.has(o) || (m2.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Wt(t, "link", e), he(t), i.head.appendChild(t)));
      }
    }
    function e0(e, t, a, i) {
      var o = (o = an.current) ? Eh(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = uo(a.href), t = _e(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = uo(a.href);
            var f = _e(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Wr, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              yr(e)
            )) && !f._p && (d.instance = f, d.state.loading = dp | Wu), !Fu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Fu.set(e, h), f || Rg(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + mr(t) + `
  + ` + mr(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + mr(t) + `
  + ` + mr(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = io(a), t = _e(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function mr(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : nn.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : nn.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : nn.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function uo(e) {
      return 'href="' + Rt(e) + '"';
    }
    function yr(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Th(e) {
      return ke({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Rg(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = dp : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= dp;
      }), t.addEventListener("error", function() {
        return i.loading |= d2;
      }), Wt(t, "link", a), he(t), e.head.appendChild(t));
    }
    function io(e) {
      return '[src="' + Rt(e) + '"]';
    }
    function pr(e) {
      return "script[async]" + e;
    }
    function Ah(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Rt(a.href) + '"]'
            );
            if (i)
              return t.instance = i, he(i), i;
            var o = ke({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), he(i), Wt(i, "style", o), Df(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = uo(a.href);
            var f = e.querySelector(
              yr(o)
            );
            if (f)
              return t.state.loading |= Wu, t.instance = f, he(f), f;
            i = Th(a), (o = Fu.get(o)) && t0(i, o), f = (e.ownerDocument || e).createElement("link"), he(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), Wt(f, "link", i), t.state.loading |= Wu, Df(f, a.precedence, e), t.instance = f;
          case "script":
            return f = io(a.src), (o = e.querySelector(
              pr(f)
            )) ? (t.instance = o, he(o), o) : (i = a, (o = Fu.get(f)) && (i = ke({}, a), l0(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), he(o), Wt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Wu) === Wr && (i = t.instance, t.state.loading |= Wu, Df(i, a.precedence, e));
      return t.instance;
    }
    function Df(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function t0(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function l0(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function _f(e, t, a) {
      if (jv === null) {
        var i = /* @__PURE__ */ new Map(), o = jv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = jv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Gf] || f[Ft] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Je) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function Mg(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Cg(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === gm || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = og(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function at(e) {
      return !(e.type === "stylesheet" && (e.state.loading & h2) === Wr);
    }
    function a0(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & Wu) === Wr) {
        if (a.instance === null) {
          var o = uo(i.href), f = t.querySelector(
            yr(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Rf.bind(e), t.then(e, e)), a.state.loading |= Wu, a.instance = f, he(f);
            return;
          }
          f = t.ownerDocument || t, i = Th(i), (o = Fu.get(o)) && t0(i, o), f = f.createElement("link"), he(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), Wt(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & h2) === Wr && (e.count++, a = Rf.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function Oh(e, t) {
      return e.stylesheets && e.count === 0 && gr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && gr(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, rT + t);
        0 < e.imgBytes && y1 === 0 && (y1 = 125 * fg() * hT);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && gr(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > y1 ? 50 : dT) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function Rf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          gr(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function gr(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Yv = /* @__PURE__ */ new Map(), t.forEach(n0, e), Yv = null, Rf.call(e));
    }
    function n0(e, t) {
      if (!(t.state.loading & Wu)) {
        var a = Yv.get(e);
        if (a) var i = a.get(p1);
        else {
          a = /* @__PURE__ */ new Map(), Yv.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(p1, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(p1, o), a.set(d, o), this.count++, i = Rf.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Wu;
      }
    }
    function vr(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = kr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Uo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uo(0), this.hiddenUpdates = Uo(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Sr(e, t, a, i, o, f, d, h, y, p, z, R) {
      return e = new vr(
        e,
        t,
        a,
        d,
        y,
        p,
        z,
        R,
        h
      ), t = YE, f === !0 && (t |= Ba | Ei), t |= We, f = U(3, null, null, t), e.current = f, f.stateNode = e, t = Ad(), Bc(t), e.pooledCache = t, Bc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, nt(f), e;
    }
    function Ug(e) {
      return e ? (e = Zf, e) : Zf;
    }
    function zh(e, t, a, i, o, f) {
      if (Rl && typeof Rl.onScheduleFiberRoot == "function")
        try {
          Rl.onScheduleFiberRoot(ro, i, a);
        } catch (d) {
          Yu || (Yu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Ug(o), i.context === null ? i.context = o : i.pendingContext = o, ju && xa !== null && !v2 && (v2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        se(xa) || "Unknown"
      )), i = zl(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = vu(e, i, t), a !== null && (yu(t, "root.render()", null), Ue(a, e, t), En(a, e, t));
    }
    function Hg(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function u0(e, t) {
      Hg(e, t), (e = e.alternate) && Hg(e, t);
    }
    function i0(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = la(e, 67108864);
        t !== null && Ue(t, e, 67108864), u0(e, 67108864);
      }
    }
    function c0(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = na(e);
        t = dn(t);
        var a = la(e, t);
        a !== null && Ue(a, e, t), u0(e, t);
      }
    }
    function Ut() {
      return xa;
    }
    function o0(e, t, a, i) {
      var o = G.T;
      G.T = null;
      var f = bt.p;
      try {
        bt.p = Ml, f0(e, t, a, i);
      } finally {
        bt.p = f, G.T = o;
      }
    }
    function kl(e, t, a, i) {
      var o = G.T;
      G.T = null;
      var f = bt.p;
      try {
        bt.p = Fl, f0(e, t, a, i);
      } finally {
        bt.p = f, G.T = o;
      }
    }
    function f0(e, t, a, i) {
      if (Gv) {
        var o = Dh(i);
        if (o === null)
          $n(
            e,
            t,
            i,
            wv,
            a
          ), Rh(e, i);
        else if (Ng(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Rh(e, i), t & 4 && -1 < yT.indexOf(e)) {
          for (; o !== null; ) {
            var f = te(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = cu(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - Wl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ca(f), (dt & (Pl | nu)) === fa && (Tv = wl() + Jb, Uu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = la(f, 2), h !== null && Ue(h, f, 2), tn(), u0(f, 2);
              }
            if (f = Dh(i), f === null && $n(
              e,
              t,
              i,
              wv,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          $n(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function Dh(e) {
      return e = Hn(e), s0(e);
    }
    function s0(e) {
      if (wv = null, e = I(e), e !== null) {
        var t = lt(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Al(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = xt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return wv = e, null;
    }
    function _h(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Ml;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Fl;
        case "message":
          switch (zr()) {
            case b0:
              return Ml;
            case Yh:
              return Fl;
            case so:
            case Gg:
              return ia;
            case qh:
              return dc;
            default:
              return ia;
          }
        default:
          return ia;
      }
    }
    function Rh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          cs = null;
          break;
        case "dragenter":
        case "dragleave":
          os = null;
          break;
        case "mouseover":
        case "mouseout":
          fs = null;
          break;
        case "pointerover":
        case "pointerout":
          mp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          yp.delete(t.pointerId);
      }
    }
    function oc(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = te(t), t !== null && i0(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Ng(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return cs = oc(
            cs,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return os = oc(
            os,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return fs = oc(
            fs,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return mp.set(
            f,
            oc(
              mp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, yp.set(
            f,
            oc(
              yp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function r0(e) {
      var t = I(e.target);
      if (t !== null) {
        var a = lt(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Al(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                c0(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = xt(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                c0(a);
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Mf(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = Dh(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          z0 !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), z0 = o, a.target.dispatchEvent(i), z0 === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), z0 = null;
        } else
          return t = te(a), t !== null && i0(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Mh(e, t, a) {
      Mf(e) && a.delete(t);
    }
    function aS() {
      g1 = !1, cs !== null && Mf(cs) && (cs = null), os !== null && Mf(os) && (os = null), fs !== null && Mf(fs) && (fs = null), mp.forEach(Mh), yp.forEach(Mh);
    }
    function br(e, t) {
      e.blockedOn === t && (e.blockedOn = null, g1 || (g1 = !0, pl.unstable_scheduleCallback(
        pl.unstable_NormalPriority,
        aS
      )));
    }
    function xg(e) {
      Xv !== e && (Xv = e, pl.unstable_scheduleCallback(
        pl.unstable_NormalPriority,
        function() {
          Xv === e && (Xv = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (s0(i || a) === null)
                continue;
              break;
            }
            var f = te(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), si(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function co(e) {
      function t(y) {
        return br(y, e);
      }
      cs !== null && br(cs, e), os !== null && br(os, e), fs !== null && br(fs, e), mp.forEach(t), yp.forEach(t);
      for (var a = 0; a < ss.length; a++) {
        var i = ss[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < ss.length && (a = ss[0], a.blockedOn === null); )
        r0(a), a.blockedOn === null && ss.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[za] || null;
          if (typeof f == "function")
            d || xg(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[za] || null)
                h = d.formAction;
              else if (s0(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), xg(a);
          }
        }
    }
    function Bg() {
      function e(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        o !== null && (o(), o = null), i || setTimeout(a, 20);
      }
      function a() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
          i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener(
            "navigatesuccess",
            t
          ), navigation.removeEventListener(
            "navigateerror",
            t
          ), o !== null && (o(), o = null);
        };
      }
    }
    function d0(e) {
      this._internalRoot = e;
    }
    function Fn(e) {
      this._internalRoot = e;
    }
    function h0(e) {
      e[bi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var pl = J2(), Er = bm(), nS = K2(), ke = Object.assign, jg = Symbol.for("react.element"), zn = Symbol.for("react.transitional.element"), fc = Symbol.for("react.portal"), Cf = Symbol.for("react.fragment"), Oa = Symbol.for("react.strict_mode"), Tr = Symbol.for("react.profiler"), Ch = Symbol.for("react.consumer"), In = Symbol.for("react.context"), Uf = Symbol.for("react.forward_ref"), oo = Symbol.for("react.suspense"), Na = Symbol.for("react.suspense_list"), Ar = Symbol.for("react.memo"), ua = Symbol.for("react.lazy"), Pn = Symbol.for("react.activity"), uS = Symbol.for("react.memo_cache_sentinel"), Yg = Symbol.iterator, Hf = Symbol.for("react.client.reference"), El = Array.isArray, G = Er.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, bt = nS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, iS = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), m0 = [], y0 = [], Si = -1, sc = Bt(null), Nf = Bt(null), an = Bt(null), rc = Bt(null), xf = 0, qg, fo, Bf, p0, Or, Uh, Hh;
    Ae.__reactDisabledLog = !0;
    var jf, g0, Nh = !1, v0 = new (typeof WeakMap == "function" ? WeakMap : Map)(), xa = null, ju = !1, nn = Object.prototype.hasOwnProperty, S0 = pl.unstable_scheduleCallback, xh = pl.unstable_cancelCallback, Bh = pl.unstable_shouldYield, jh = pl.unstable_requestPaint, wl = pl.unstable_now, zr = pl.unstable_getCurrentPriorityLevel, b0 = pl.unstable_ImmediatePriority, Yh = pl.unstable_UserBlockingPriority, so = pl.unstable_NormalPriority, Gg = pl.unstable_LowPriority, qh = pl.unstable_IdlePriority, E0 = pl.log, wg = pl.unstable_setDisableYieldValue, ro = null, Rl = null, Yu = !1, qu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Wl = Math.clz32 ? Math.clz32 : Mi, T0 = Math.log, Gh = Math.LN2, Yf = 256, Dr = 262144, qf = 4194304, Ml = 2, Fl = 8, ia = 32, dc = 268435456, Dn = Math.random().toString(36).slice(2), Ft = "__reactFiber$" + Dn, za = "__reactProps$" + Dn, bi = "__reactContainer$" + Dn, ho = "__reactEvents$" + Dn, cS = "__reactListeners$" + Dn, Xg = "__reactHandles$" + Dn, _r = "__reactResources$" + Dn, Gf = "__reactMarker$" + Dn, Qg = /* @__PURE__ */ new Set(), Gu = {}, wf = {}, Lg = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Xf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), A0 = {}, wh = {}, Xh = /[\n"\\]/g, O0 = !1, Vg = !1, Rr = !1, l = !1, n = !1, u = !1, c = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), v = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), A = v.concat(["button"]), B = "dd dt li option optgroup p rp rt".split(" "), Q = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, K = {}, j = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, w = /([A-Z])/g, fe = /^ms-/, Oe = /^(?:webkit|moz|o)[A-Z]/, Ht = /^-ms-/, C = /-(.)/g, D = /;\s*$/, N = {}, Z = {}, Se = !1, rt = !1, me = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), we = "http://www.w3.org/1998/Math/MathML", Je = "http://www.w3.org/2000/svg", pt = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), eu = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Zg = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Qh = {}, k2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), W2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), b1 = !1, un = {}, E1 = /^on./, F2 = /^on[^A-Z]/, I2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), P2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), eE = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, z0 = null, Lh = null, Vh = null, oS = !1, hc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fS = !1;
    if (hc)
      try {
        var D0 = {};
        Object.defineProperty(D0, "passive", {
          get: function() {
            fS = !0;
          }
        }), window.addEventListener("test", D0, D0), window.removeEventListener("test", D0, D0);
      } catch {
        fS = !1;
      }
    var Qf = null, sS = null, Jg = null, Mr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Kg = Nl(Mr), _0 = ke({}, Mr, { view: 0, detail: 0 }), tE = Nl(_0), rS, dS, R0, $g = ke({}, _0, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ss,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== R0 && (R0 && e.type === "mousemove" ? (rS = e.screenX - R0.screenX, dS = e.screenY - R0.screenY) : dS = rS = 0, R0 = e), rS);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : dS;
      }
    }), T1 = Nl($g), lE = ke({}, $g, { dataTransfer: 0 }), aE = Nl(lE), nE = ke({}, _0, { relatedTarget: 0 }), hS = Nl(nE), uE = ke({}, Mr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), iE = Nl(uE), cE = ke({}, Mr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), oE = Nl(cE), fE = ke({}, Mr, { data: 0 }), A1 = Nl(
      fE
    ), sE = A1, rE = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, dE = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, hE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, mE = ke({}, _0, {
      key: function(e) {
        if (e.key) {
          var t = rE[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = vs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dE[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ss,
      charCode: function(e) {
        return e.type === "keypress" ? vs(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? vs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), yE = Nl(mE), pE = ke({}, $g, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), O1 = Nl(pE), gE = ke({}, _0, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ss
    }), vE = Nl(gE), SE = ke({}, Mr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bE = Nl(SE), EE = ke({}, $g, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), TE = Nl(EE), AE = ke({}, Mr, {
      newState: 0,
      oldState: 0
    }), OE = Nl(AE), zE = [9, 13, 27, 32], z1 = 229, mS = hc && "CompositionEvent" in window, M0 = null;
    hc && "documentMode" in document && (M0 = document.documentMode);
    var DE = hc && "TextEvent" in window && !M0, D1 = hc && (!mS || M0 && 8 < M0 && 11 >= M0), _1 = 32, R1 = String.fromCharCode(_1), M1 = !1, Zh = !1, _E = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, C0 = null, U0 = null, C1 = !1;
    hc && (C1 = dd("input") && (!document.documentMode || 9 < document.documentMode));
    var cn = typeof Object.is == "function" ? Object.is : hd, RE = hc && "documentMode" in document && 11 >= document.documentMode, Jh = null, yS = null, H0 = null, pS = !1, Kh = {
      animationend: _c("Animation", "AnimationEnd"),
      animationiteration: _c("Animation", "AnimationIteration"),
      animationstart: _c("Animation", "AnimationStart"),
      transitionrun: _c("Transition", "TransitionRun"),
      transitionstart: _c("Transition", "TransitionStart"),
      transitioncancel: _c("Transition", "TransitionCancel"),
      transitionend: _c("Transition", "TransitionEnd")
    }, gS = {}, U1 = {};
    hc && (U1 = document.createElement("div").style, "AnimationEvent" in window || (delete Kh.animationend.animation, delete Kh.animationiteration.animation, delete Kh.animationstart.animation), "TransitionEvent" in window || delete Kh.transitionend.transition);
    var H1 = Rc("animationend"), N1 = Rc("animationiteration"), x1 = Rc("animationstart"), ME = Rc("transitionrun"), CE = Rc("transitionstart"), UE = Rc("transitioncancel"), B1 = Rc("transitionend"), j1 = /* @__PURE__ */ new Map(), vS = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    vS.push("scrollEnd");
    var Y1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var HE = performance, q1 = function() {
        return HE.now();
      };
    else {
      var NE = Date;
      q1 = function() {
        return NE.now();
      };
    }
    var SS = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, xE = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", kg = 0, bS = 1, ES = 2, TS = 3, Wg = "– ", Fg = "+ ", G1 = "  ", It = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", wu = "Components ⚛", ct = "Scheduler ⚛", st = "Blocking", Lf = !1, mo = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: wu
    }, Vf = {
      start: -0,
      end: -0,
      detail: { devtools: mo }
    }, BE = ["Changed Props", ""], w1 = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", jE = ["Changed Props", w1], N0 = 1, yo = 2, Xu = [], $h = 0, AS = 0, Zf = {};
    Object.freeze(Zf);
    var Qu = null, kh = null, Ce = 0, YE = 1, We = 2, Ba = 8, Ei = 16, qE = 32, X1 = !1;
    try {
      var Q1 = Object.preventExtensions({});
    } catch {
      X1 = !0;
    }
    var OS = /* @__PURE__ */ new WeakMap(), Wh = [], Fh = 0, Ig = null, x0 = 0, Lu = [], Vu = 0, Cr = null, po = 1, go = "", Da = null, Pt = null, it = !1, mc = !1, tu = null, Jf = null, Zu = !1, zS = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), DS = Bt(null), _S = Bt(null), L1 = {}, Pg = null, Ih = null, Ph = !1, GE = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, wE = pl.unstable_scheduleCallback, XE = pl.unstable_NormalPriority, Xl = {
      $$typeof: In,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Ql = pl.unstable_now, ev = console.createTask ? console.createTask : function() {
      return null;
    }, B0 = 1, tv = 2, ca = -0, Kf = -0, vo = -0, So = null, on = -1.1, Ur = -0, sl = -0, Te = -1.1, Re = -1.1, ul = null, gl = !1, Hr = -0, yc = -1.1, j0 = null, $f = 0, RS = null, MS = null, Nr = -1.1, Y0 = null, em = -1.1, lv = -1.1, bo = -0, Eo = -1.1, Ju = -1.1, CS = 0, q0 = null, V1 = null, Z1 = null, kf = -1.1, xr = null, Wf = -1.1, av = -1.1, J1 = -0, K1 = -0, nv = 0, QE = null, $1 = 0, G0 = -1.1, uv = !1, iv = !1, w0 = null, US = 0, Br = 0, tm = null, k1 = G.S;
    G.S = function(e, t) {
      if (Vb = wl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > Eo && 0 > Ju) {
          Eo = Ql();
          var a = Af(), i = xu();
          (a !== Wf || i !== xr) && (Wf = -1.1), kf = a, xr = i;
        }
        ai(e, t);
      }
      k1 !== null && k1(e, t);
    };
    var jr = Bt(null), Ti = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, X0 = [], Q0 = [], L0 = [], V0 = [], Z0 = [], J0 = [], Yr = /* @__PURE__ */ new Set();
    Ti.recordUnsafeLifecycleWarnings = function(e, t) {
      Yr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && X0.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillMount == "function" && Q0.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && L0.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillReceiveProps == "function" && V0.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Z0.push(e), e.mode & Ba && typeof t.UNSAFE_componentWillUpdate == "function" && J0.push(e));
    }, Ti.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < X0.length && (X0.forEach(function(h) {
        e.add(
          se(h) || "Component"
        ), Yr.add(h.type);
      }), X0 = []);
      var t = /* @__PURE__ */ new Set();
      0 < Q0.length && (Q0.forEach(function(h) {
        t.add(
          se(h) || "Component"
        ), Yr.add(h.type);
      }), Q0 = []);
      var a = /* @__PURE__ */ new Set();
      0 < L0.length && (L0.forEach(function(h) {
        a.add(
          se(h) || "Component"
        ), Yr.add(h.type);
      }), L0 = []);
      var i = /* @__PURE__ */ new Set();
      0 < V0.length && (V0.forEach(
        function(h) {
          i.add(
            se(h) || "Component"
          ), Yr.add(h.type);
        }
      ), V0 = []);
      var o = /* @__PURE__ */ new Set();
      0 < Z0.length && (Z0.forEach(function(h) {
        o.add(
          se(h) || "Component"
        ), Yr.add(h.type);
      }), Z0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < J0.length && (J0.forEach(function(h) {
        f.add(
          se(h) || "Component"
        ), Yr.add(h.type);
      }), J0 = []), 0 < t.size) {
        var d = X(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = X(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = X(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = X(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = X(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = X(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var cv = /* @__PURE__ */ new Map(), W1 = /* @__PURE__ */ new Set();
    Ti.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & Ba && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !W1.has(e.type) && (i = cv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], cv.set(a, i)), i.push(e));
    }, Ti.flushLegacyContextWarning = function() {
      cv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(se(o) || "Component"), W1.add(o.type);
          });
          var i = X(a);
          ce(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Ti.discardPendingWarnings = function() {
      X0 = [], Q0 = [], L0 = [], V0 = [], Z0 = [], J0 = [], cv = /* @__PURE__ */ new Map();
    };
    var F1 = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = ju;
        ju = !0;
        try {
          return e(t, a);
        } finally {
          ju = i;
        }
      }
    }, HS = F1.react_stack_bottom_frame.bind(F1), I1 = {
      react_stack_bottom_frame: function(e) {
        var t = ju;
        ju = !0;
        try {
          return e.render();
        } finally {
          ju = t;
        }
      }
    }, P1 = I1.react_stack_bottom_frame.bind(I1), eb = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Ze(e, e.return, a);
        }
      }
    }, NS = eb.react_stack_bottom_frame.bind(
      eb
    ), tb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Ze(e, e.return, f);
        }
      }
    }, lb = tb.react_stack_bottom_frame.bind(
      tb
    ), ab = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, LE = ab.react_stack_bottom_frame.bind(
      ab
    ), nb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Ze(e, t, i);
        }
      }
    }, ub = nb.react_stack_bottom_frame.bind(
      nb
    ), ib = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, VE = ib.react_stack_bottom_frame.bind(ib), cb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          Ze(e, t, i);
        }
      }
    }, ZE = cb.react_stack_bottom_frame.bind(cb), ob = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, JE = ob.react_stack_bottom_frame.bind(ob), lm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), xS = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), ov = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), fv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, qr = null, K0 = !1, am = null, $0 = 0, Fe = null, BS, fb = BS = !1, sb = {}, rb = {}, db = {};
    He = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = se(e), o = i || "null";
        if (!sb[o]) {
          sb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = se(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = se(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), ce(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Gr = Bl(!0), hb = Bl(!1), mb = 0, yb = 1, pb = 2, jS = 3, Ff = !1, gb = !1, YS = null, qS = !1, nm = Bt(null), sv = Bt(0), lu = Bt(null), Ku = null, um = 1, k0 = 2, Cl = Bt(0), rv = 0, $u = 1, fn = 2, au = 4, sn = 8, im, vb = /* @__PURE__ */ new Set(), Sb = /* @__PURE__ */ new Set(), GS = /* @__PURE__ */ new Set(), bb = /* @__PURE__ */ new Set(), To = 0, xe = null, wt = null, Ll = null, dv = !1, cm = !1, wr = !1, hv = 0, W0 = 0, Ao = null, KE = 0, $E = 25, q = null, ku = null, Oo = -1, F0 = !1, I0 = {
      readContext: vt,
      use: ci,
      useCallback: ol,
      useContext: ol,
      useEffect: ol,
      useImperativeHandle: ol,
      useLayoutEffect: ol,
      useInsertionEffect: ol,
      useMemo: ol,
      useReducer: ol,
      useRef: ol,
      useState: ol,
      useDebugValue: ol,
      useDeferredValue: ol,
      useTransition: ol,
      useSyncExternalStore: ol,
      useId: ol,
      useHostTransitionStatus: ol,
      useFormState: ol,
      useActionState: ol,
      useOptimistic: ol,
      useMemoCache: ol,
      useCacheRefresh: ol
    };
    I0.useEffectEvent = ol;
    var wS = null, Eb = null, XS = null, Tb = null, pc = null, Ai = null, mv = null;
    wS = {
      readContext: function(e) {
        return vt(e);
      },
      use: ci,
      useCallback: function(e, t) {
        return q = "useCallback", Ne(), ii(t), xd(e, t);
      },
      useContext: function(e) {
        return q = "useContext", Ne(), vt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", Ne(), ii(t), Zc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", Ne(), ii(a), Tu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", Ne(), ii(t), Fi(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", Ne(), ii(t), pa(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", Ne(), ii(t);
        var a = G.H;
        G.H = pc;
        try {
          return ga(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", Ne();
        var i = G.H;
        G.H = pc;
        try {
          return Io(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", Ne(), Nd(e);
      },
      useState: function(e) {
        q = "useState", Ne();
        var t = G.H;
        G.H = pc;
        try {
          return Ki(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", Ne();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", Ne(), af(e, t);
      },
      useTransition: function() {
        return q = "useTransition", Ne(), Ii();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", Ne(), Po(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", Ne(), Ls();
      },
      useFormState: function(e, t) {
        return q = "useFormState", Ne(), Hs(), Wa(e, t);
      },
      useActionState: function(e, t) {
        return q = "useActionState", Ne(), Wa(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", Ne(), Vc(e);
      },
      useHostTransitionStatus: ri,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", Ne(), Bd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", Ne(), Xs(e);
      }
    }, Eb = {
      readContext: function(e) {
        return vt(e);
      },
      use: ci,
      useCallback: function(e, t) {
        return q = "useCallback", $(), xd(e, t);
      },
      useContext: function(e) {
        return q = "useContext", $(), vt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", $(), Zc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", $(), Tu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", $(), Fi(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", $(), pa(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", $();
        var a = G.H;
        G.H = pc;
        try {
          return ga(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", $();
        var i = G.H;
        G.H = pc;
        try {
          return Io(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", $(), Nd(e);
      },
      useState: function(e) {
        q = "useState", $();
        var t = G.H;
        G.H = pc;
        try {
          return Ki(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", $();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", $(), af(e, t);
      },
      useTransition: function() {
        return q = "useTransition", $(), Ii();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", $(), Po(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", $(), Ls();
      },
      useActionState: function(e, t) {
        return q = "useActionState", $(), Wa(e, t);
      },
      useFormState: function(e, t) {
        return q = "useFormState", $(), Hs(), Wa(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", $(), Vc(e);
      },
      useHostTransitionStatus: ri,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", $(), Bd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", $(), Xs(e);
      }
    }, XS = {
      readContext: function(e) {
        return vt(e);
      },
      use: ci,
      useCallback: function(e, t) {
        return q = "useCallback", $(), Ln(e, t);
      },
      useContext: function(e) {
        return q = "useContext", $(), vt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", $(), Dl(2048, sn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", $(), lf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", $(), Dl(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", $(), Dl(4, au, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", $();
        var a = G.H;
        G.H = Ai;
        try {
          return kt(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", $();
        var i = G.H;
        G.H = Ai;
        try {
          return Xc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", $(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", $();
        var e = G.H;
        G.H = Ai;
        try {
          return Xc(ka);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", $();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", $(), Au(e, t);
      },
      useTransition: function() {
        return q = "useTransition", $(), Lp();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", $(), Lc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", $(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", $(), Hs(), ki(e);
      },
      useActionState: function(e) {
        return q = "useActionState", $(), ki(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", $(), qs(e, t);
      },
      useHostTransitionStatus: ri,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", $(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", $(), tf(e);
      }
    }, Tb = {
      readContext: function(e) {
        return vt(e);
      },
      use: ci,
      useCallback: function(e, t) {
        return q = "useCallback", $(), Ln(e, t);
      },
      useContext: function(e) {
        return q = "useContext", $(), vt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", $(), Dl(2048, sn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", $(), lf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", $(), Dl(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", $(), Dl(4, au, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", $();
        var a = G.H;
        G.H = mv;
        try {
          return kt(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", $();
        var i = G.H;
        G.H = mv;
        try {
          return Qc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", $(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", $();
        var e = G.H;
        G.H = mv;
        try {
          return Qc(ka);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", $();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", $(), Xe(e, t);
      },
      useTransition: function() {
        return q = "useTransition", $(), ll();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", $(), Lc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", $(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", $(), Hs(), Wi(e);
      },
      useActionState: function(e) {
        return q = "useActionState", $(), Wi(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", $(), Gs(e, t);
      },
      useHostTransitionStatus: ri,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", $(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", $(), tf(e);
      }
    }, pc = {
      readContext: function(e) {
        return ae(), vt(e);
      },
      use: function(e) {
        return ee(), ci(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", ee(), Ne(), xd(e, t);
      },
      useContext: function(e) {
        return q = "useContext", ee(), Ne(), vt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", ee(), Ne(), Zc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", ee(), Ne(), Tu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", ee(), Ne(), Fi(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", ee(), Ne(), pa(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", ee(), Ne();
        var a = G.H;
        G.H = pc;
        try {
          return ga(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", ee(), Ne();
        var i = G.H;
        G.H = pc;
        try {
          return Io(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", ee(), Ne(), Nd(e);
      },
      useState: function(e) {
        q = "useState", ee(), Ne();
        var t = G.H;
        G.H = pc;
        try {
          return Ki(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", ee(), Ne();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", ee(), Ne(), af(e, t);
      },
      useTransition: function() {
        return q = "useTransition", ee(), Ne(), Ii();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", ee(), Ne(), Po(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", ee(), Ne(), Ls();
      },
      useFormState: function(e, t) {
        return q = "useFormState", ee(), Ne(), Wa(e, t);
      },
      useActionState: function(e, t) {
        return q = "useActionState", ee(), Ne(), Wa(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", ee(), Ne(), Vc(e);
      },
      useMemoCache: function(e) {
        return ee(), $a(e);
      },
      useHostTransitionStatus: ri,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", Ne(), Bd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", ee(), Ne(), Xs(e);
      }
    }, Ai = {
      readContext: function(e) {
        return ae(), vt(e);
      },
      use: function(e) {
        return ee(), ci(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", ee(), $(), Ln(e, t);
      },
      useContext: function(e) {
        return q = "useContext", ee(), $(), vt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", ee(), $(), Dl(2048, sn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", ee(), $(), lf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", ee(), $(), Dl(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", ee(), $(), Dl(4, au, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", ee(), $();
        var a = G.H;
        G.H = Ai;
        try {
          return kt(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", ee(), $();
        var i = G.H;
        G.H = Ai;
        try {
          return Xc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", ee(), $(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", ee(), $();
        var e = G.H;
        G.H = Ai;
        try {
          return Xc(ka);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", ee(), $();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", ee(), $(), Au(e, t);
      },
      useTransition: function() {
        return q = "useTransition", ee(), $(), Lp();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", ee(), $(), Lc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", ee(), $(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", ee(), $(), ki(e);
      },
      useActionState: function(e) {
        return q = "useActionState", ee(), $(), ki(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", ee(), $(), qs(e, t);
      },
      useMemoCache: function(e) {
        return ee(), $a(e);
      },
      useHostTransitionStatus: ri,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", $(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", ee(), $(), tf(e);
      }
    }, mv = {
      readContext: function(e) {
        return ae(), vt(e);
      },
      use: function(e) {
        return ee(), ci(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", ee(), $(), Ln(e, t);
      },
      useContext: function(e) {
        return q = "useContext", ee(), $(), vt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", ee(), $(), Dl(2048, sn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", ee(), $(), lf(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", ee(), $(), Dl(4, fn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", ee(), $(), Dl(4, au, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", ee(), $();
        var a = G.H;
        G.H = Ai;
        try {
          return kt(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", ee(), $();
        var i = G.H;
        G.H = Ai;
        try {
          return Qc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", ee(), $(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", ee(), $();
        var e = G.H;
        G.H = Ai;
        try {
          return Qc(ka);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", ee(), $();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", ee(), $(), Xe(e, t);
      },
      useTransition: function() {
        return q = "useTransition", ee(), $(), ll();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", ee(), $(), Lc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", ee(), $(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", ee(), $(), Wi(e);
      },
      useActionState: function(e) {
        return q = "useActionState", ee(), $(), Wi(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", ee(), $(), Gs(e, t);
      },
      useMemoCache: function(e) {
        return ee(), $a(e);
      },
      useHostTransitionStatus: ri,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", $(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", ee(), $(), tf(e);
      }
    };
    var Ab = {}, Ob = /* @__PURE__ */ new Set(), zb = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set();
    Object.freeze(Ab);
    var QS = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = na(e), o = zl(i);
        o.payload = t, a != null && (kc(a), o.callback = a), t = vu(e, o, i), t !== null && (yu(i, "this.setState()", e), Ue(t, e, i), En(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = na(e), o = zl(i);
        o.tag = yb, o.payload = t, a != null && (kc(a), o.callback = a), t = vu(e, o, i), t !== null && (yu(i, "this.replaceState()", e), Ue(t, e, i), En(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = na(e), i = zl(a);
        i.tag = pb, t != null && (kc(t), i.callback = t), t = vu(e, i, a), t !== null && (yu(a, "this.forceUpdate()", e), Ue(t, e, a), En(t, e, a));
      }
    }, om = null, LS = null, VS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Vl = !1, xb = {}, Bb = {}, jb = {}, Yb = {}, fm = !1, qb = {}, yv = {}, ZS = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Gb = !1, wb = null;
    wb = /* @__PURE__ */ new Set();
    var zo = !1, Zl = !1, JS = !1, Xb = typeof WeakSet == "function" ? WeakSet : Set, oa = null, sm = null, rm = null, Jl = null, _n = !1, Oi = null, Il = !1, P0 = 8192, kE = {
      getCacheForType: function(e) {
        var t = vt(Xl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return vt(Xl).controller.signal;
      },
      getOwner: function() {
        return xa;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var ep = Symbol.for;
      ep("selector.component"), ep("selector.has_pseudo_class"), ep("selector.role"), ep("selector.test_id"), ep("selector.text");
    }
    var WE = [], FE = typeof WeakMap == "function" ? WeakMap : Map, fa = 0, Pl = 2, nu = 4, Do = 0, tp = 1, Xr = 2, pv = 3, If = 4, gv = 6, Qb = 5, dt = fa, Xt = null, tt = null, Ie = 0, Rn = 0, vv = 1, Qr = 2, lp = 3, Lb = 4, KS = 5, ap = 6, Sv = 7, $S = 8, Lr = 9, Nt = Rn, uu = null, Pf = !1, dm = !1, kS = !1, gc = 0, rl = Do, es = 0, ts = 0, WS = 0, Mn = 0, Vr = 0, np = null, rn = null, bv = !1, Ev = 0, Vb = 0, Zb = 300, Tv = 1 / 0, Jb = 500, up = null, Tl = null, ls = null, Av = 0, FS = 1, IS = 2, Kb = 3, as = 0, $b = 1, kb = 2, Wb = 3, Fb = 4, Ov = 5, Kl = 0, ns = null, hm = null, zi = 0, PS = 0, e1 = -0, t1 = null, Ib = null, Pb = null, Di = Av, e2 = null, IE = 50, ip = 0, l1 = null, a1 = !1, zv = !1, PE = 50, Zr = 0, cp = null, mm = !1, Dv = null, t2 = !1, l2 = /* @__PURE__ */ new Set(), eT = {}, _v = null, ym = null, n1 = !1, u1 = !1, Rv = !1, i1 = !1, us = 0, c1 = {};
    (function() {
      for (var e = 0; e < vS.length; e++) {
        var t = vS[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Nn(a, "on" + t);
      }
      Nn(H1, "onAnimationEnd"), Nn(N1, "onAnimationIteration"), Nn(x1, "onAnimationStart"), Nn("dblclick", "onDoubleClick"), Nn("focusin", "onFocus"), Nn("focusout", "onBlur"), Nn(ME, "onTransitionRun"), Nn(CE, "onTransitionStart"), Nn(UE, "onTransitionCancel"), Nn(B1, "onTransitionEnd");
    })(), Ge("onMouseEnter", ["mouseout", "mouseover"]), Ge("onMouseLeave", ["mouseout", "mouseover"]), Ge("onPointerEnter", ["pointerout", "pointerover"]), Ge("onPointerLeave", ["pointerout", "pointerover"]), Pe(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Pe(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Pe("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Pe(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Pe(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Pe(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var op = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), o1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(op)
    ), Mv = "_reactListening" + Math.random().toString(36).slice(2), a2 = !1, n2 = !1, Cv = !1, u2 = !1, Uv = !1, Hv = !1, i2 = !1, Nv = {}, tT = /\r\n?/g, lT = /\u0000|\uFFFD/g, Jr = "http://www.w3.org/1999/xlink", f1 = "http://www.w3.org/XML/1998/namespace", aT = "javascript:throw new Error('React form unexpectedly submitted.')", nT = "suppressHydrationWarning", Kr = "&", xv = "/&", fp = "$", sp = "/$", is = "$?", $r = "$~", pm = "$!", uT = "html", iT = "body", cT = "head", s1 = "F!", c2 = "F", o2 = "loading", oT = "style", _o = 0, gm = 1, Bv = 2, r1 = null, d1 = null, f2 = { dialog: !0, webview: !0 }, h1 = null, rp = void 0, s2 = typeof setTimeout == "function" ? setTimeout : void 0, fT = typeof clearTimeout == "function" ? clearTimeout : void 0, kr = -1, r2 = typeof Promise == "function" ? Promise : void 0, sT = typeof queueMicrotask == "function" ? queueMicrotask : typeof r2 < "u" ? function(e) {
      return r2.resolve(null).then(e).catch(rg);
    } : s2, m1 = null, Wr = 0, dp = 1, d2 = 2, h2 = 3, Wu = 4, Fu = /* @__PURE__ */ new Map(), m2 = /* @__PURE__ */ new Set(), Ro = bt.d;
    bt.d = {
      f: function() {
        var e = Ro.f(), t = tn();
        return e || t;
      },
      r: function(e) {
        var t = te(e);
        t !== null && t.tag === 5 && t.type === "form" ? nf(t) : Ro.r(e);
      },
      D: function(e) {
        Ro.D(e), Py("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Ro.C(e, t), Py("preconnect", e, t);
      },
      L: function(e, t, a) {
        Ro.L(e, t, a);
        var i = vm;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Rt(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Rt(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Rt(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Rt(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = uo(e);
              break;
            case "script":
              f = io(e);
          }
          Fu.has(f) || (e = ke(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), Fu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            yr(f)
          ) || t === "script" && i.querySelector(pr(f)) || (t = i.createElement("link"), Wt(t, "link", e), he(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Ro.m(e, t);
        var a = vm;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Rt(i) + '"][href="' + Rt(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = io(e);
          }
          if (!Fu.has(f) && (e = ke({ rel: "modulepreload", href: e }, t), Fu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(pr(f)))
                  return;
            }
            i = a.createElement("link"), Wt(i, "link", e), he(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Ro.X(e, t);
        var a = vm;
        if (a && e) {
          var i = _e(a).hoistableScripts, o = io(e), f = i.get(o);
          f || (f = a.querySelector(
            pr(o)
          ), f || (e = ke({ src: e, async: !0 }, t), (t = Fu.get(o)) && l0(e, t), f = a.createElement("script"), he(f), Wt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Ro.S(e, t, a);
        var i = vm;
        if (i && e) {
          var o = _e(i).hoistableStyles, f = uo(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Wr, preload: null };
            if (d = i.querySelector(
              yr(f)
            ))
              h.loading = dp | Wu;
            else {
              e = ke(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = Fu.get(f)) && t0(e, a);
              var y = d = i.createElement("link");
              he(y), Wt(y, "link", e), y._p = new Promise(function(p, z) {
                y.onload = p, y.onerror = z;
              }), y.addEventListener("load", function() {
                h.loading |= dp;
              }), y.addEventListener("error", function() {
                h.loading |= d2;
              }), h.loading |= Wu, Df(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Ro.M(e, t);
        var a = vm;
        if (a && e) {
          var i = _e(a).hoistableScripts, o = io(e), f = i.get(o);
          f || (f = a.querySelector(
            pr(o)
          ), f || (e = ke({ src: e, async: !0, type: "module" }, t), (t = Fu.get(o)) && l0(e, t), f = a.createElement("script"), he(f), Wt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var vm = typeof document > "u" ? null : document, jv = null, rT = 6e4, dT = 800, hT = 500, y1 = 0, p1 = null, Yv = null, Fr = iS, hp = {
      $$typeof: In,
      Provider: null,
      Consumer: null,
      _currentValue: Fr,
      _currentValue2: Fr,
      _threadCount: 0
    }, y2 = "%c%s%c", p2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", g2 = "", qv = " ", mT = Function.prototype.bind, v2 = !1, S2 = null, b2 = null, E2 = null, T2 = null, A2 = null, O2 = null, z2 = null, D2 = null, _2 = null, R2 = null;
    S2 = function(e, t, a, i) {
      t = J(e, t), t !== null && (a = ne(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = la(e, 2), a !== null && Ue(a, e, 2));
    }, b2 = function(e, t, a) {
      t = J(e, t), t !== null && (a = ze(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = la(e, 2), a !== null && Ue(a, e, 2));
    }, E2 = function(e, t, a, i) {
      t = J(e, t), t !== null && (a = $e(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = la(e, 2), a !== null && Ue(a, e, 2));
    }, T2 = function(e, t, a) {
      e.pendingProps = ne(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = la(e, 2), t !== null && Ue(t, e, 2);
    }, A2 = function(e, t) {
      e.pendingProps = ze(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = la(e, 2), t !== null && Ue(t, e, 2);
    }, O2 = function(e, t, a) {
      e.pendingProps = $e(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = la(e, 2), t !== null && Ue(t, e, 2);
    }, z2 = function(e) {
      var t = la(e, 2);
      t !== null && Ue(t, e, 2);
    }, D2 = function(e) {
      var t = Co(), a = la(e, t);
      a !== null && Ue(a, e, t);
    }, _2 = function(e) {
      gt = e;
    }, R2 = function(e) {
      Ye = e;
    };
    var Gv = !0, wv = null, g1 = !1, cs = null, os = null, fs = null, mp = /* @__PURE__ */ new Map(), yp = /* @__PURE__ */ new Map(), ss = [], yT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Xv = null;
    if (Fn.prototype.render = d0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ft(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = na(i);
      zh(i, o, a, t, null, null);
    }, Fn.prototype.unmount = d0.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (dt & (Pl | nu)) !== fa && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), zh(e.current, 2, null, e, null, null), tn(), t[bi] = null;
      }
    }, Fn.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Ci();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < ss.length && t !== 0 && t < ss[a].priority; a++) ;
        ss.splice(a, 0, e), a === 0 && r0(e);
      }
    }, (function() {
      var e = Er.version;
      if (e !== "19.2.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), bt.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = tl(t), e = e !== null ? il(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: G,
        reconcilerVersion: "19.2.0"
      };
      return e.overrideHookState = S2, e.overrideHookStateDeletePath = b2, e.overrideHookStateRenamePath = E2, e.overrideProps = T2, e.overridePropsDeletePath = A2, e.overridePropsRenamePath = O2, e.scheduleUpdate = z2, e.scheduleRetry = D2, e.setErrorHandler = _2, e.setSuspenseHandler = R2, e.scheduleRefresh = Le, e.scheduleRoot = ie, e.setRefreshHandler = _t, e.getCurrentFiber = Ut, rs(e);
    })() && hc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var M2 = window.location.protocol;
      /^(https?|file):$/.test(M2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (M2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    Sp.createRoot = function(e, t) {
      if (!ft(e))
        throw Error("Target container is not a DOM element.");
      h0(e);
      var a = !1, i = "", o = qd, f = Gd, d = cy;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === zn && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Sr(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        null,
        o,
        f,
        d,
        Bg
      ), e[bi] = t.current, uc(e), new d0(t);
    }, Sp.hydrateRoot = function(e, t, a) {
      if (!ft(e))
        throw Error("Target container is not a DOM element.");
      h0(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = qd, d = Gd, h = cy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = Sr(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        y,
        f,
        d,
        h,
        Bg
      ), t.context = Ug(null), a = t.current, i = na(a), i = dn(i), o = zl(i), o.callback = null, vu(a, o, i), yu(i, "hydrateRoot()", null), a = i, t.current.lanes = a, Cn(t, a), Ca(t), e[bi] = t.current, uc(e), new Fn(t);
    }, Sp.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Sp;
}
var V2;
function RT() {
  if (V2) return Vv.exports;
  V2 = 1;
  function J() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J);
      } catch (ne) {
        console.error(ne);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (J(), Vv.exports = DT()) : Vv.exports = _T(), Vv.exports;
}
var MT = RT();
const $2 = Sm.createContext({
  toolOutput: null
});
function CT({
  children: J
}) {
  const [ne, $e] = Sm.useState(() => window.openai?.toolOutput);
  Sm.useEffect(() => {
    let ze = setInterval(() => {
      window.openai && window.openai.toolOutput && ($e(window.openai.toolOutput), clearInterval(ze));
    }, 100);
    return () => clearInterval(ze);
  }, []);
  const H = Sm.useMemo(
    () => ({
      toolOutput: ne
    }),
    [ne]
  );
  return /* @__PURE__ */ Qt.jsx($2.Provider, { value: H, children: J });
}
function UT() {
  const { toolOutput: J } = Sm.useContext($2);
  return J;
}
function HT() {
  const J = UT();
  return J ? /* @__PURE__ */ Qt.jsxs("div", { className: "max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden", children: [
    /* @__PURE__ */ Qt.jsxs("div", { className: "relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200", children: [
      /* @__PURE__ */ Qt.jsx(
        "img",
        {
          src: J.image,
          alt: J.name,
          className: "w-full h-full object-cover",
          onError: (ne) => {
            ne.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%239ca3af'%3EGuitar Image%3C/text%3E%3C/svg%3E";
          }
        }
      ),
      /* @__PURE__ */ Qt.jsxs("div", { className: "absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg", children: [
        "$",
        J.price
      ] })
    ] }),
    /* @__PURE__ */ Qt.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ Qt.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ Qt.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: J.name }),
        /* @__PURE__ */ Qt.jsxs("p", { className: "text-sm text-gray-500", children: [
          "Product ID: ",
          J.id
        ] })
      ] }),
      J.shortDescription && /* @__PURE__ */ Qt.jsx("div", { className: "mb-4", children: /* @__PURE__ */ Qt.jsx("p", { className: "text-lg text-gray-700 font-medium leading-relaxed", children: J.shortDescription }) }),
      J.description && /* @__PURE__ */ Qt.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ Qt.jsx("h3", { className: "text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2", children: "Description" }),
        /* @__PURE__ */ Qt.jsx("p", { className: "text-gray-600 leading-relaxed", children: J.description })
      ] }),
      /* @__PURE__ */ Qt.jsxs("div", { className: "flex items-center justify-between pt-6 border-t border-gray-200", children: [
        /* @__PURE__ */ Qt.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ Qt.jsx("span", { className: "text-sm text-gray-500 mb-1", children: "Price" }),
          /* @__PURE__ */ Qt.jsxs("span", { className: "text-3xl font-bold text-blue-600", children: [
            "$",
            J.price
          ] })
        ] }),
        /* @__PURE__ */ Qt.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ Qt.jsx(
            "button",
            {
              type: "button",
              className: "px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md hover:shadow-lg",
              children: "Add to Cart"
            }
          ),
          /* @__PURE__ */ Qt.jsx(
            "button",
            {
              type: "button",
              className: "px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-colors",
              children: "View Details"
            }
          )
        ] })
      ] })
    ] })
  ] }) : /* @__PURE__ */ Qt.jsx("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ Qt.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
    /* @__PURE__ */ Qt.jsx("div", { className: "w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" }),
    /* @__PURE__ */ Qt.jsx("div", { className: "text-gray-500 text-sm", children: "Loading guitar..." })
  ] }) });
}
const Z2 = document.getElementById("tanstack-app-root");
Z2 && MT.createRoot(Z2).render(
  /* @__PURE__ */ Qt.jsx(Sm.StrictMode, { children: /* @__PURE__ */ Qt.jsx(CT, { children: /* @__PURE__ */ Qt.jsx(HT, {}) }) })
);
