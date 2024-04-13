var Dx = Object.defineProperty;
var zx = (e, t, n) =>
  t in e
    ? Dx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var jh = (e, t, n) => (zx(e, typeof t != "symbol" ? t + "" : t, n), n);
function Mg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Ag(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Gr(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Ig = { exports: {} },
  vu = {},
  Ng = { exports: {} },
  he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cl = Symbol.for("react.element"),
  Bx = Symbol.for("react.portal"),
  Ux = Symbol.for("react.fragment"),
  Wx = Symbol.for("react.strict_mode"),
  Vx = Symbol.for("react.profiler"),
  Hx = Symbol.for("react.provider"),
  Kx = Symbol.for("react.context"),
  Gx = Symbol.for("react.forward_ref"),
  qx = Symbol.for("react.suspense"),
  Qx = Symbol.for("react.memo"),
  Yx = Symbol.for("react.lazy"),
  Fh = Symbol.iterator;
function Xx(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fh && e[Fh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Lg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jg = Object.assign,
  Fg = {};
function Ni(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fg),
    (this.updater = n || Lg);
}
Ni.prototype.isReactComponent = {};
Ni.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ni.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dg() {}
Dg.prototype = Ni.prototype;
function ip(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fg),
    (this.updater = n || Lg);
}
var ap = (ip.prototype = new Dg());
ap.constructor = ip;
jg(ap, Ni.prototype);
ap.isPureReactComponent = !0;
var Dh = Array.isArray,
  zg = Object.prototype.hasOwnProperty,
  lp = { current: null },
  Bg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ug(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      zg.call(t, r) && !Bg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: cl,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: lp.current,
  };
}
function Jx(e, t) {
  return {
    $$typeof: cl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function sp(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cl;
}
function Zx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var zh = /\/+/g;
function jc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Zx("" + e.key)
    : t.toString(36);
}
function is(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cl:
          case Bx:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + jc(a, 0) : r),
      Dh(o)
        ? ((n = ""),
          e != null && (n = e.replace(zh, "$&/") + "/"),
          is(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (sp(o) &&
            (o = Jx(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(zh, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Dh(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var s = r + jc(i, l);
      a += is(i, t, n, s, o);
    }
  else if (((s = Xx(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + jc(i, l++)), (a += is(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Il(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    is(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function e_(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var It = { current: null },
  as = { transition: null },
  t_ = {
    ReactCurrentDispatcher: It,
    ReactCurrentBatchConfig: as,
    ReactCurrentOwner: lp,
  };
he.Children = {
  map: Il,
  forEach: function (e, t, n) {
    Il(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Il(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Il(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!sp(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
he.Component = Ni;
he.Fragment = Ux;
he.Profiler = Vx;
he.PureComponent = ip;
he.StrictMode = Wx;
he.Suspense = qx;
he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t_;
he.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = jg({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = lp.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      zg.call(t, s) &&
        !Bg.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: cl, type: e.type, key: o, ref: i, props: r, _owner: a };
};
he.createContext = function (e) {
  return (
    (e = {
      $$typeof: Kx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Hx, _context: e }),
    (e.Consumer = e)
  );
};
he.createElement = Ug;
he.createFactory = function (e) {
  var t = Ug.bind(null, e);
  return (t.type = e), t;
};
he.createRef = function () {
  return { current: null };
};
he.forwardRef = function (e) {
  return { $$typeof: Gx, render: e };
};
he.isValidElement = sp;
he.lazy = function (e) {
  return { $$typeof: Yx, _payload: { _status: -1, _result: e }, _init: e_ };
};
he.memo = function (e, t) {
  return { $$typeof: Qx, type: e, compare: t === void 0 ? null : t };
};
he.startTransition = function (e) {
  var t = as.transition;
  as.transition = {};
  try {
    e();
  } finally {
    as.transition = t;
  }
};
he.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
he.useCallback = function (e, t) {
  return It.current.useCallback(e, t);
};
he.useContext = function (e) {
  return It.current.useContext(e);
};
he.useDebugValue = function () {};
he.useDeferredValue = function (e) {
  return It.current.useDeferredValue(e);
};
he.useEffect = function (e, t) {
  return It.current.useEffect(e, t);
};
he.useId = function () {
  return It.current.useId();
};
he.useImperativeHandle = function (e, t, n) {
  return It.current.useImperativeHandle(e, t, n);
};
he.useInsertionEffect = function (e, t) {
  return It.current.useInsertionEffect(e, t);
};
he.useLayoutEffect = function (e, t) {
  return It.current.useLayoutEffect(e, t);
};
he.useMemo = function (e, t) {
  return It.current.useMemo(e, t);
};
he.useReducer = function (e, t, n) {
  return It.current.useReducer(e, t, n);
};
he.useRef = function (e) {
  return It.current.useRef(e);
};
he.useState = function (e) {
  return It.current.useState(e);
};
he.useSyncExternalStore = function (e, t, n) {
  return It.current.useSyncExternalStore(e, t, n);
};
he.useTransition = function () {
  return It.current.useTransition();
};
he.version = "18.2.0";
Ng.exports = he;
var v = Ng.exports;
const Wt = Ag(v),
  ks = Mg({ __proto__: null, default: Wt }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n_ = v,
  r_ = Symbol.for("react.element"),
  o_ = Symbol.for("react.fragment"),
  i_ = Object.prototype.hasOwnProperty,
  a_ = n_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  l_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wg(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) i_.call(t, r) && !l_.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: r_,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: a_.current,
  };
}
vu.Fragment = o_;
vu.jsx = Wg;
vu.jsxs = Wg;
Ig.exports = vu;
var k = Ig.exports,
  Ad = {},
  Vg = { exports: {} },
  on = {},
  Hg = { exports: {} },
  Kg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, L) {
    var H = T.length;
    T.push(L);
    e: for (; 0 < H; ) {
      var re = (H - 1) >>> 1,
        ne = T[re];
      if (0 < o(ne, L)) (T[re] = L), (T[H] = ne), (H = re);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var L = T[0],
      H = T.pop();
    if (H !== L) {
      T[0] = H;
      e: for (var re = 0, ne = T.length, ve = ne >>> 1; re < ve; ) {
        var Y = 2 * (re + 1) - 1,
          fe = T[Y],
          se = Y + 1,
          He = T[se];
        if (0 > o(fe, H))
          se < ne && 0 > o(He, fe)
            ? ((T[re] = He), (T[se] = H), (re = se))
            : ((T[re] = fe), (T[Y] = H), (re = Y));
        else if (se < ne && 0 > o(He, H)) (T[re] = He), (T[se] = H), (re = se);
        else break e;
      }
    }
    return L;
  }
  function o(T, L) {
    var H = T.sortIndex - L.sortIndex;
    return H !== 0 ? H : T.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    x = !1,
    y = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= T)
        r(u), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(u);
    }
  }
  function _(T) {
    if (((g = !1), m(T), !y))
      if (n(s) !== null) (y = !0), V(E);
      else {
        var L = n(u);
        L !== null && z(_, L.startTime - T);
      }
  }
  function E(T, L) {
    (y = !1), g && ((g = !1), h(P), (P = -1)), (x = !0);
    var H = f;
    try {
      for (
        m(L), d = n(s);
        d !== null && (!(d.expirationTime > L) || (T && !I()));

      ) {
        var re = d.callback;
        if (typeof re == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var ne = re(d.expirationTime <= L);
          (L = e.unstable_now()),
            typeof ne == "function" ? (d.callback = ne) : d === n(s) && r(s),
            m(L);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var ve = !0;
      else {
        var Y = n(u);
        Y !== null && z(_, Y.startTime - L), (ve = !1);
      }
      return ve;
    } finally {
      (d = null), (f = H), (x = !1);
    }
  }
  var b = !1,
    w = null,
    P = -1,
    $ = 5,
    M = -1;
  function I() {
    return !(e.unstable_now() - M < $);
  }
  function j() {
    if (w !== null) {
      var T = e.unstable_now();
      M = T;
      var L = !0;
      try {
        L = w(!0, T);
      } finally {
        L ? F() : ((b = !1), (w = null));
      }
    } else b = !1;
  }
  var F;
  if (typeof p == "function")
    F = function () {
      p(j);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      U = D.port2;
    (D.port1.onmessage = j),
      (F = function () {
        U.postMessage(null);
      });
  } else
    F = function () {
      S(j, 0);
    };
  function V(T) {
    (w = T), b || ((b = !0), F());
  }
  function z(T, L) {
    P = S(function () {
      T(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || x || ((y = !0), V(E));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (T) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = f;
      }
      var H = f;
      f = L;
      try {
        return T();
      } finally {
        f = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, L) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var H = f;
      f = T;
      try {
        return L();
      } finally {
        f = H;
      }
    }),
    (e.unstable_scheduleCallback = function (T, L, H) {
      var re = e.unstable_now();
      switch (
        (typeof H == "object" && H !== null
          ? ((H = H.delay), (H = typeof H == "number" && 0 < H ? re + H : re))
          : (H = re),
        T)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = H + ne),
        (T = {
          id: c++,
          callback: L,
          priorityLevel: T,
          startTime: H,
          expirationTime: ne,
          sortIndex: -1,
        }),
        H > re
          ? ((T.sortIndex = H),
            t(u, T),
            n(s) === null &&
              T === n(u) &&
              (g ? (h(P), (P = -1)) : (g = !0), z(_, H - re)))
          : ((T.sortIndex = ne), t(s, T), y || x || ((y = !0), V(E))),
        T
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (T) {
      var L = f;
      return function () {
        var H = f;
        f = L;
        try {
          return T.apply(this, arguments);
        } finally {
          f = H;
        }
      };
    });
})(Kg);
Hg.exports = Kg;
var s_ = Hg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gg = v,
  rn = s_;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var qg = new Set(),
  Ia = {};
function Po(e, t) {
  bi(e, t), bi(e + "Capture", t);
}
function bi(e, t) {
  for (Ia[e] = t, e = 0; e < t.length; e++) qg.add(t[e]);
}
var pr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Id = Object.prototype.hasOwnProperty,
  u_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bh = {},
  Uh = {};
function c_(e) {
  return Id.call(Uh, e)
    ? !0
    : Id.call(Bh, e)
    ? !1
    : u_.test(e)
    ? (Uh[e] = !0)
    : ((Bh[e] = !0), !1);
}
function d_(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function f_(e, t, n, r) {
  if (t === null || typeof t > "u" || d_(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Nt(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var St = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    St[e] = new Nt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  St[t] = new Nt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  St[e] = new Nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  St[e] = new Nt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    St[e] = new Nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  St[e] = new Nt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  St[e] = new Nt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  St[e] = new Nt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  St[e] = new Nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var up = /[\-:]([a-z])/g;
function cp(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(up, cp);
    St[t] = new Nt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(up, cp);
    St[t] = new Nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(up, cp);
  St[t] = new Nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  St[e] = new Nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
St.xlinkHref = new Nt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  St[e] = new Nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function dp(e, t, n, r) {
  var o = St.hasOwnProperty(t) ? St[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (f_(t, n, o, r) && (n = null),
    r || o === null
      ? c_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yr = Gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Nl = Symbol.for("react.element"),
  Go = Symbol.for("react.portal"),
  qo = Symbol.for("react.fragment"),
  fp = Symbol.for("react.strict_mode"),
  Nd = Symbol.for("react.profiler"),
  Qg = Symbol.for("react.provider"),
  Yg = Symbol.for("react.context"),
  pp = Symbol.for("react.forward_ref"),
  Ld = Symbol.for("react.suspense"),
  jd = Symbol.for("react.suspense_list"),
  hp = Symbol.for("react.memo"),
  Pr = Symbol.for("react.lazy"),
  Xg = Symbol.for("react.offscreen"),
  Wh = Symbol.iterator;
function Gi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wh && e[Wh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Qe = Object.assign,
  Fc;
function da(e) {
  if (Fc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fc = (t && t[1]) || "";
    }
  return (
    `
` +
    Fc +
    e
  );
}
var Dc = !1;
function zc(e, t) {
  if (!e || Dc) return "";
  Dc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var s =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Dc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? da(e) : "";
}
function p_(e) {
  switch (e.tag) {
    case 5:
      return da(e.type);
    case 16:
      return da("Lazy");
    case 13:
      return da("Suspense");
    case 19:
      return da("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = zc(e.type, !1)), e;
    case 11:
      return (e = zc(e.type.render, !1)), e;
    case 1:
      return (e = zc(e.type, !0)), e;
    default:
      return "";
  }
}
function Fd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qo:
      return "Fragment";
    case Go:
      return "Portal";
    case Nd:
      return "Profiler";
    case fp:
      return "StrictMode";
    case Ld:
      return "Suspense";
    case jd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Yg:
        return (e.displayName || "Context") + ".Consumer";
      case Qg:
        return (e._context.displayName || "Context") + ".Provider";
      case pp:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case hp:
        return (
          (t = e.displayName || null), t !== null ? t : Fd(e.type) || "Memo"
        );
      case Pr:
        (t = e._payload), (e = e._init);
        try {
          return Fd(e(t));
        } catch {}
    }
  return null;
}
function h_(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Fd(t);
    case 8:
      return t === fp ? "StrictMode" : "Mode";
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
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Hr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Jg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function m_(e) {
  var t = Jg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ll(e) {
  e._valueTracker || (e._valueTracker = m_(e));
}
function Zg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Jg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ps(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Dd(e, t) {
  var n = t.checked;
  return Qe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Hr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ey(e, t) {
  (t = t.checked), t != null && dp(e, "checked", t, !1);
}
function zd(e, t) {
  ey(e, t);
  var n = Hr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Bd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Bd(e, t.type, Hr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Hh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Bd(e, t, n) {
  (t !== "number" || Ps(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fa = Array.isArray;
function di(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Hr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ud(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return Qe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Kh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (fa(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Hr(n) };
}
function ty(e, t) {
  var n = Hr(t.value),
    r = Hr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Gh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ny(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ny(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var jl,
  ry = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        jl = jl || document.createElement("div"),
          jl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = jl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Na(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ya = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  v_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(ya).forEach(function (e) {
  v_.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ya[t] = ya[e]);
  });
});
function oy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ya.hasOwnProperty(e) && ya[e])
    ? ("" + t).trim()
    : t + "px";
}
function iy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = oy(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var g_ = Qe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Vd(e, t) {
  if (t) {
    if (g_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Hd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Kd = null;
function mp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Gd = null,
  fi = null,
  pi = null;
function qh(e) {
  if ((e = pl(e))) {
    if (typeof Gd != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = _u(t)), Gd(e.stateNode, e.type, t));
  }
}
function ay(e) {
  fi ? (pi ? pi.push(e) : (pi = [e])) : (fi = e);
}
function ly() {
  if (fi) {
    var e = fi,
      t = pi;
    if (((pi = fi = null), qh(e), t)) for (e = 0; e < t.length; e++) qh(t[e]);
  }
}
function sy(e, t) {
  return e(t);
}
function uy() {}
var Bc = !1;
function cy(e, t, n) {
  if (Bc) return e(t, n);
  Bc = !0;
  try {
    return sy(e, t, n);
  } finally {
    (Bc = !1), (fi !== null || pi !== null) && (uy(), ly());
  }
}
function La(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _u(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var qd = !1;
if (pr)
  try {
    var qi = {};
    Object.defineProperty(qi, "passive", {
      get: function () {
        qd = !0;
      },
    }),
      window.addEventListener("test", qi, qi),
      window.removeEventListener("test", qi, qi);
  } catch {
    qd = !1;
  }
function y_(e, t, n, r, o, i, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ba = !1,
  Os = null,
  Ts = !1,
  Qd = null,
  b_ = {
    onError: function (e) {
      (ba = !0), (Os = e);
    },
  };
function x_(e, t, n, r, o, i, a, l, s) {
  (ba = !1), (Os = null), y_.apply(b_, arguments);
}
function __(e, t, n, r, o, i, a, l, s) {
  if ((x_.apply(this, arguments), ba)) {
    if (ba) {
      var u = Os;
      (ba = !1), (Os = null);
    } else throw Error(N(198));
    Ts || ((Ts = !0), (Qd = u));
  }
}
function Oo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function dy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Qh(e) {
  if (Oo(e) !== e) throw Error(N(188));
}
function S_(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Oo(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Qh(o), e;
        if (i === r) return Qh(o), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function fy(e) {
  return (e = S_(e)), e !== null ? py(e) : null;
}
function py(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = py(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hy = rn.unstable_scheduleCallback,
  Yh = rn.unstable_cancelCallback,
  w_ = rn.unstable_shouldYield,
  E_ = rn.unstable_requestPaint,
  rt = rn.unstable_now,
  C_ = rn.unstable_getCurrentPriorityLevel,
  vp = rn.unstable_ImmediatePriority,
  my = rn.unstable_UserBlockingPriority,
  $s = rn.unstable_NormalPriority,
  R_ = rn.unstable_LowPriority,
  vy = rn.unstable_IdlePriority,
  gu = null,
  Xn = null;
function k_(e) {
  if (Xn && typeof Xn.onCommitFiberRoot == "function")
    try {
      Xn.onCommitFiberRoot(gu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Nn = Math.clz32 ? Math.clz32 : T_,
  P_ = Math.log,
  O_ = Math.LN2;
function T_(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((P_(e) / O_) | 0)) | 0;
}
var Fl = 64,
  Dl = 4194304;
function pa(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ms(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = pa(l)) : ((i &= a), i !== 0 && (r = pa(i)));
  } else (a = n & ~o), a !== 0 ? (r = pa(a)) : i !== 0 && (r = pa(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Nn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function $_(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function M_(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Nn(i),
      l = 1 << a,
      s = o[a];
    s === -1
      ? (!(l & n) || l & r) && (o[a] = $_(l, t))
      : s <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Yd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function gy() {
  var e = Fl;
  return (Fl <<= 1), !(Fl & 4194240) && (Fl = 64), e;
}
function Uc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Nn(t)),
    (e[t] = n);
}
function A_(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Nn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function gp(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Nn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Pe = 0;
function yy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var by,
  yp,
  xy,
  _y,
  Sy,
  Xd = !1,
  zl = [],
  Lr = null,
  jr = null,
  Fr = null,
  ja = new Map(),
  Fa = new Map(),
  Tr = [],
  I_ =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Lr = null;
      break;
    case "dragenter":
    case "dragleave":
      jr = null;
      break;
    case "mouseover":
    case "mouseout":
      Fr = null;
      break;
    case "pointerover":
    case "pointerout":
      ja.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fa.delete(t.pointerId);
  }
}
function Qi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = pl(t)), t !== null && yp(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function N_(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Lr = Qi(Lr, e, t, n, r, o)), !0;
    case "dragenter":
      return (jr = Qi(jr, e, t, n, r, o)), !0;
    case "mouseover":
      return (Fr = Qi(Fr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ja.set(i, Qi(ja.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Fa.set(i, Qi(Fa.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function wy(e) {
  var t = io(e.target);
  if (t !== null) {
    var n = Oo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dy(n)), t !== null)) {
          (e.blockedOn = t),
            Sy(e.priority, function () {
              xy(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ls(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Jd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Kd = r), n.target.dispatchEvent(r), (Kd = null);
    } else return (t = pl(n)), t !== null && yp(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Jh(e, t, n) {
  ls(e) && n.delete(t);
}
function L_() {
  (Xd = !1),
    Lr !== null && ls(Lr) && (Lr = null),
    jr !== null && ls(jr) && (jr = null),
    Fr !== null && ls(Fr) && (Fr = null),
    ja.forEach(Jh),
    Fa.forEach(Jh);
}
function Yi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Xd ||
      ((Xd = !0),
      rn.unstable_scheduleCallback(rn.unstable_NormalPriority, L_)));
}
function Da(e) {
  function t(o) {
    return Yi(o, e);
  }
  if (0 < zl.length) {
    Yi(zl[0], e);
    for (var n = 1; n < zl.length; n++) {
      var r = zl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Lr !== null && Yi(Lr, e),
      jr !== null && Yi(jr, e),
      Fr !== null && Yi(Fr, e),
      ja.forEach(t),
      Fa.forEach(t),
      n = 0;
    n < Tr.length;
    n++
  )
    (r = Tr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tr.length && ((n = Tr[0]), n.blockedOn === null); )
    wy(n), n.blockedOn === null && Tr.shift();
}
var hi = yr.ReactCurrentBatchConfig,
  As = !0;
function j_(e, t, n, r) {
  var o = Pe,
    i = hi.transition;
  hi.transition = null;
  try {
    (Pe = 1), bp(e, t, n, r);
  } finally {
    (Pe = o), (hi.transition = i);
  }
}
function F_(e, t, n, r) {
  var o = Pe,
    i = hi.transition;
  hi.transition = null;
  try {
    (Pe = 4), bp(e, t, n, r);
  } finally {
    (Pe = o), (hi.transition = i);
  }
}
function bp(e, t, n, r) {
  if (As) {
    var o = Jd(e, t, n, r);
    if (o === null) Jc(e, t, r, Is, n), Xh(e, r);
    else if (N_(o, e, t, n, r)) r.stopPropagation();
    else if ((Xh(e, r), t & 4 && -1 < I_.indexOf(e))) {
      for (; o !== null; ) {
        var i = pl(o);
        if (
          (i !== null && by(i),
          (i = Jd(e, t, n, r)),
          i === null && Jc(e, t, r, Is, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Jc(e, t, r, null, n);
  }
}
var Is = null;
function Jd(e, t, n, r) {
  if (((Is = null), (e = mp(r)), (e = io(e)), e !== null))
    if (((t = Oo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = dy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Is = e), null;
}
function Ey(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (C_()) {
        case vp:
          return 1;
        case my:
          return 4;
        case $s:
        case R_:
          return 16;
        case vy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mr = null,
  xp = null,
  ss = null;
function Cy() {
  if (ss) return ss;
  var e,
    t = xp,
    n = t.length,
    r,
    o = "value" in Mr ? Mr.value : Mr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (ss = o.slice(e, 1 < r ? 1 - r : void 0));
}
function us(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Bl() {
  return !0;
}
function Zh() {
  return !1;
}
function an(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Bl
        : Zh),
      (this.isPropagationStopped = Zh),
      this
    );
  }
  return (
    Qe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Bl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bl));
      },
      persist: function () {},
      isPersistent: Bl,
    }),
    t
  );
}
var Li = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _p = an(Li),
  fl = Qe({}, Li, { view: 0, detail: 0 }),
  D_ = an(fl),
  Wc,
  Vc,
  Xi,
  yu = Qe({}, fl, {
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
    getModifierState: Sp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Xi &&
            (Xi && e.type === "mousemove"
              ? ((Wc = e.screenX - Xi.screenX), (Vc = e.screenY - Xi.screenY))
              : (Vc = Wc = 0),
            (Xi = e)),
          Wc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vc;
    },
  }),
  em = an(yu),
  z_ = Qe({}, yu, { dataTransfer: 0 }),
  B_ = an(z_),
  U_ = Qe({}, fl, { relatedTarget: 0 }),
  Hc = an(U_),
  W_ = Qe({}, Li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  V_ = an(W_),
  H_ = Qe({}, Li, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  K_ = an(H_),
  G_ = Qe({}, Li, { data: 0 }),
  tm = an(G_),
  q_ = {
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
    MozPrintableKey: "Unidentified",
  },
  Q_ = {
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
    224: "Meta",
  },
  Y_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function X_(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Y_[e]) ? !!t[e] : !1;
}
function Sp() {
  return X_;
}
var J_ = Qe({}, fl, {
    key: function (e) {
      if (e.key) {
        var t = q_[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = us(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Q_[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Sp,
    charCode: function (e) {
      return e.type === "keypress" ? us(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? us(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Z_ = an(J_),
  eS = Qe({}, yu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  nm = an(eS),
  tS = Qe({}, fl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sp,
  }),
  nS = an(tS),
  rS = Qe({}, Li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  oS = an(rS),
  iS = Qe({}, yu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  aS = an(iS),
  lS = [9, 13, 27, 32],
  wp = pr && "CompositionEvent" in window,
  xa = null;
pr && "documentMode" in document && (xa = document.documentMode);
var sS = pr && "TextEvent" in window && !xa,
  Ry = pr && (!wp || (xa && 8 < xa && 11 >= xa)),
  rm = " ",
  om = !1;
function ky(e, t) {
  switch (e) {
    case "keyup":
      return lS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Py(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Qo = !1;
function uS(e, t) {
  switch (e) {
    case "compositionend":
      return Py(t);
    case "keypress":
      return t.which !== 32 ? null : ((om = !0), rm);
    case "textInput":
      return (e = t.data), e === rm && om ? null : e;
    default:
      return null;
  }
}
function cS(e, t) {
  if (Qo)
    return e === "compositionend" || (!wp && ky(e, t))
      ? ((e = Cy()), (ss = xp = Mr = null), (Qo = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ry && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var dS = {
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
  week: !0,
};
function im(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!dS[e.type] : t === "textarea";
}
function Oy(e, t, n, r) {
  ay(r),
    (t = Ns(t, "onChange")),
    0 < t.length &&
      ((n = new _p("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _a = null,
  za = null;
function fS(e) {
  zy(e, 0);
}
function bu(e) {
  var t = Jo(e);
  if (Zg(t)) return e;
}
function pS(e, t) {
  if (e === "change") return t;
}
var Ty = !1;
if (pr) {
  var Kc;
  if (pr) {
    var Gc = "oninput" in document;
    if (!Gc) {
      var am = document.createElement("div");
      am.setAttribute("oninput", "return;"),
        (Gc = typeof am.oninput == "function");
    }
    Kc = Gc;
  } else Kc = !1;
  Ty = Kc && (!document.documentMode || 9 < document.documentMode);
}
function lm() {
  _a && (_a.detachEvent("onpropertychange", $y), (za = _a = null));
}
function $y(e) {
  if (e.propertyName === "value" && bu(za)) {
    var t = [];
    Oy(t, za, e, mp(e)), cy(fS, t);
  }
}
function hS(e, t, n) {
  e === "focusin"
    ? (lm(), (_a = t), (za = n), _a.attachEvent("onpropertychange", $y))
    : e === "focusout" && lm();
}
function mS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return bu(za);
}
function vS(e, t) {
  if (e === "click") return bu(t);
}
function gS(e, t) {
  if (e === "input" || e === "change") return bu(t);
}
function yS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var zn = typeof Object.is == "function" ? Object.is : yS;
function Ba(e, t) {
  if (zn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Id.call(t, o) || !zn(e[o], t[o])) return !1;
  }
  return !0;
}
function sm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function um(e, t) {
  var n = sm(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = sm(n);
  }
}
function My(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? My(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ay() {
  for (var e = window, t = Ps(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ps(e.document);
  }
  return t;
}
function Ep(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function bS(e) {
  var t = Ay(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    My(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ep(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = um(n, i));
        var a = um(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var xS = pr && "documentMode" in document && 11 >= document.documentMode,
  Yo = null,
  Zd = null,
  Sa = null,
  ef = !1;
function cm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ef ||
    Yo == null ||
    Yo !== Ps(r) ||
    ((r = Yo),
    "selectionStart" in r && Ep(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Sa && Ba(Sa, r)) ||
      ((Sa = r),
      (r = Ns(Zd, "onSelect")),
      0 < r.length &&
        ((t = new _p("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Yo))));
}
function Ul(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Xo = {
    animationend: Ul("Animation", "AnimationEnd"),
    animationiteration: Ul("Animation", "AnimationIteration"),
    animationstart: Ul("Animation", "AnimationStart"),
    transitionend: Ul("Transition", "TransitionEnd"),
  },
  qc = {},
  Iy = {};
pr &&
  ((Iy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Xo.animationend.animation,
    delete Xo.animationiteration.animation,
    delete Xo.animationstart.animation),
  "TransitionEvent" in window || delete Xo.transitionend.transition);
function xu(e) {
  if (qc[e]) return qc[e];
  if (!Xo[e]) return e;
  var t = Xo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Iy) return (qc[e] = t[n]);
  return e;
}
var Ny = xu("animationend"),
  Ly = xu("animationiteration"),
  jy = xu("animationstart"),
  Fy = xu("transitionend"),
  Dy = new Map(),
  dm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function qr(e, t) {
  Dy.set(e, t), Po(t, [e]);
}
for (var Qc = 0; Qc < dm.length; Qc++) {
  var Yc = dm[Qc],
    _S = Yc.toLowerCase(),
    SS = Yc[0].toUpperCase() + Yc.slice(1);
  qr(_S, "on" + SS);
}
qr(Ny, "onAnimationEnd");
qr(Ly, "onAnimationIteration");
qr(jy, "onAnimationStart");
qr("dblclick", "onDoubleClick");
qr("focusin", "onFocus");
qr("focusout", "onBlur");
qr(Fy, "onTransitionEnd");
bi("onMouseEnter", ["mouseout", "mouseover"]);
bi("onMouseLeave", ["mouseout", "mouseover"]);
bi("onPointerEnter", ["pointerout", "pointerover"]);
bi("onPointerLeave", ["pointerout", "pointerover"]);
Po(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Po(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Po("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Po(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Po(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Po(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ha =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  wS = new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));
function fm(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), __(r, t, void 0, e), (e.currentTarget = null);
}
function zy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== i && o.isPropagationStopped())) break e;
          fm(o, l, u), (i = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          fm(o, l, u), (i = s);
        }
    }
  }
  if (Ts) throw ((e = Qd), (Ts = !1), (Qd = null), e);
}
function Be(e, t) {
  var n = t[af];
  n === void 0 && (n = t[af] = new Set());
  var r = e + "__bubble";
  n.has(r) || (By(t, e, 2, !1), n.add(r));
}
function Xc(e, t, n) {
  var r = 0;
  t && (r |= 4), By(n, e, r, t);
}
var Wl = "_reactListening" + Math.random().toString(36).slice(2);
function Ua(e) {
  if (!e[Wl]) {
    (e[Wl] = !0),
      qg.forEach(function (n) {
        n !== "selectionchange" && (wS.has(n) || Xc(n, !1, e), Xc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wl] || ((t[Wl] = !0), Xc("selectionchange", !1, t));
  }
}
function By(e, t, n, r) {
  switch (Ey(t)) {
    case 1:
      var o = j_;
      break;
    case 4:
      o = F_;
      break;
    default:
      o = bp;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !qd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Jc(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = io(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  cy(function () {
    var u = i,
      c = mp(n),
      d = [];
    e: {
      var f = Dy.get(e);
      if (f !== void 0) {
        var x = _p,
          y = e;
        switch (e) {
          case "keypress":
            if (us(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Z_;
            break;
          case "focusin":
            (y = "focus"), (x = Hc);
            break;
          case "focusout":
            (y = "blur"), (x = Hc);
            break;
          case "beforeblur":
          case "afterblur":
            x = Hc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = em;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = B_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = nS;
            break;
          case Ny:
          case Ly:
          case jy:
            x = V_;
            break;
          case Fy:
            x = oS;
            break;
          case "scroll":
            x = D_;
            break;
          case "wheel":
            x = aS;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = K_;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = nm;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          h = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var _ = m.stateNode;
          if (
            (m.tag === 5 &&
              _ !== null &&
              ((m = _),
              h !== null && ((_ = La(p, h)), _ != null && g.push(Wa(p, _, m)))),
            S)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((f = new x(f, y, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Kd &&
            (y = n.relatedTarget || n.fromElement) &&
            (io(y) || y[hr]))
        )
          break e;
        if (
          (x || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          x
            ? ((y = n.relatedTarget || n.toElement),
              (x = u),
              (y = y ? io(y) : null),
              y !== null &&
                ((S = Oo(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = u)),
          x !== y)
        ) {
          if (
            ((g = em),
            (_ = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = nm),
              (_ = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (S = x == null ? f : Jo(x)),
            (m = y == null ? f : Jo(y)),
            (f = new g(_, p + "leave", x, n, c)),
            (f.target = S),
            (f.relatedTarget = m),
            (_ = null),
            io(c) === u &&
              ((g = new g(h, p + "enter", y, n, c)),
              (g.target = m),
              (g.relatedTarget = S),
              (_ = g)),
            (S = _),
            x && y)
          )
            t: {
              for (g = x, h = y, p = 0, m = g; m; m = Fo(m)) p++;
              for (m = 0, _ = h; _; _ = Fo(_)) m++;
              for (; 0 < p - m; ) (g = Fo(g)), p--;
              for (; 0 < m - p; ) (h = Fo(h)), m--;
              for (; p--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                (g = Fo(g)), (h = Fo(h));
              }
              g = null;
            }
          else g = null;
          x !== null && pm(d, f, x, g, !1),
            y !== null && S !== null && pm(d, S, y, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? Jo(u) : window),
          (x = f.nodeName && f.nodeName.toLowerCase()),
          x === "select" || (x === "input" && f.type === "file"))
        )
          var E = pS;
        else if (im(f))
          if (Ty) E = gS;
          else {
            E = mS;
            var b = hS;
          }
        else
          (x = f.nodeName) &&
            x.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (E = vS);
        if (E && (E = E(e, u))) {
          Oy(d, E, n, c);
          break e;
        }
        b && b(e, f, u),
          e === "focusout" &&
            (b = f._wrapperState) &&
            b.controlled &&
            f.type === "number" &&
            Bd(f, "number", f.value);
      }
      switch (((b = u ? Jo(u) : window), e)) {
        case "focusin":
          (im(b) || b.contentEditable === "true") &&
            ((Yo = b), (Zd = u), (Sa = null));
          break;
        case "focusout":
          Sa = Zd = Yo = null;
          break;
        case "mousedown":
          ef = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ef = !1), cm(d, n, c);
          break;
        case "selectionchange":
          if (xS) break;
        case "keydown":
        case "keyup":
          cm(d, n, c);
      }
      var w;
      if (wp)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Qo
          ? ky(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Ry &&
          n.locale !== "ko" &&
          (Qo || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Qo && (w = Cy())
            : ((Mr = c),
              (xp = "value" in Mr ? Mr.value : Mr.textContent),
              (Qo = !0))),
        (b = Ns(u, P)),
        0 < b.length &&
          ((P = new tm(P, e, null, n, c)),
          d.push({ event: P, listeners: b }),
          w ? (P.data = w) : ((w = Py(n)), w !== null && (P.data = w)))),
        (w = sS ? uS(e, n) : cS(e, n)) &&
          ((u = Ns(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new tm("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = w)));
    }
    zy(d, t);
  });
}
function Wa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ns(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = La(e, n)),
      i != null && r.unshift(Wa(e, i, o)),
      (i = La(e, t)),
      i != null && r.push(Wa(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Fo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pm(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((s = La(n, i)), s != null && a.unshift(Wa(n, s, l)))
        : o || ((s = La(n, i)), s != null && a.push(Wa(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var ES = /\r\n?/g,
  CS = /\u0000|\uFFFD/g;
function hm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ES,
      `
`
    )
    .replace(CS, "");
}
function Vl(e, t, n) {
  if (((t = hm(t)), hm(e) !== t && n)) throw Error(N(425));
}
function Ls() {}
var tf = null,
  nf = null;
function rf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var of = typeof setTimeout == "function" ? setTimeout : void 0,
  RS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  mm = typeof Promise == "function" ? Promise : void 0,
  kS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof mm < "u"
      ? function (e) {
          return mm.resolve(null).then(e).catch(PS);
        }
      : of;
function PS(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Da(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Da(t);
}
function Dr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function vm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ji = Math.random().toString(36).slice(2),
  Qn = "__reactFiber$" + ji,
  Va = "__reactProps$" + ji,
  hr = "__reactContainer$" + ji,
  af = "__reactEvents$" + ji,
  OS = "__reactListeners$" + ji,
  TS = "__reactHandles$" + ji;
function io(e) {
  var t = e[Qn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[hr] || n[Qn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = vm(e); e !== null; ) {
          if ((n = e[Qn])) return n;
          e = vm(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pl(e) {
  return (
    (e = e[Qn] || e[hr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function _u(e) {
  return e[Va] || null;
}
var lf = [],
  Zo = -1;
function Qr(e) {
  return { current: e };
}
function Ue(e) {
  0 > Zo || ((e.current = lf[Zo]), (lf[Zo] = null), Zo--);
}
function Fe(e, t) {
  Zo++, (lf[Zo] = e.current), (e.current = t);
}
var Kr = {},
  Ot = Qr(Kr),
  Ht = Qr(!1),
  mo = Kr;
function xi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Kr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Kt(e) {
  return (e = e.childContextTypes), e != null;
}
function js() {
  Ue(Ht), Ue(Ot);
}
function gm(e, t, n) {
  if (Ot.current !== Kr) throw Error(N(168));
  Fe(Ot, t), Fe(Ht, n);
}
function Uy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, h_(e) || "Unknown", o));
  return Qe({}, n, r);
}
function Fs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kr),
    (mo = Ot.current),
    Fe(Ot, e),
    Fe(Ht, Ht.current),
    !0
  );
}
function ym(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = Uy(e, t, mo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ue(Ht),
      Ue(Ot),
      Fe(Ot, e))
    : Ue(Ht),
    Fe(Ht, n);
}
var ir = null,
  Su = !1,
  ed = !1;
function Wy(e) {
  ir === null ? (ir = [e]) : ir.push(e);
}
function $S(e) {
  (Su = !0), Wy(e);
}
function Yr() {
  if (!ed && ir !== null) {
    ed = !0;
    var e = 0,
      t = Pe;
    try {
      var n = ir;
      for (Pe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ir = null), (Su = !1);
    } catch (o) {
      throw (ir !== null && (ir = ir.slice(e + 1)), hy(vp, Yr), o);
    } finally {
      (Pe = t), (ed = !1);
    }
  }
  return null;
}
var ei = [],
  ti = 0,
  Ds = null,
  zs = 0,
  hn = [],
  mn = 0,
  vo = null,
  sr = 1,
  ur = "";
function to(e, t) {
  (ei[ti++] = zs), (ei[ti++] = Ds), (Ds = e), (zs = t);
}
function Vy(e, t, n) {
  (hn[mn++] = sr), (hn[mn++] = ur), (hn[mn++] = vo), (vo = e);
  var r = sr;
  e = ur;
  var o = 32 - Nn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Nn(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (sr = (1 << (32 - Nn(t) + o)) | (n << o) | r),
      (ur = i + e);
  } else (sr = (1 << i) | (n << o) | r), (ur = e);
}
function Cp(e) {
  e.return !== null && (to(e, 1), Vy(e, 1, 0));
}
function Rp(e) {
  for (; e === Ds; )
    (Ds = ei[--ti]), (ei[ti] = null), (zs = ei[--ti]), (ei[ti] = null);
  for (; e === vo; )
    (vo = hn[--mn]),
      (hn[mn] = null),
      (ur = hn[--mn]),
      (hn[mn] = null),
      (sr = hn[--mn]),
      (hn[mn] = null);
}
var en = null,
  Zt = null,
  Ve = !1,
  An = null;
function Hy(e, t) {
  var n = bn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function bm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (en = e), (Zt = Dr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (en = e), (Zt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = vo !== null ? { id: sr, overflow: ur } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = bn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (en = e),
            (Zt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function sf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function uf(e) {
  if (Ve) {
    var t = Zt;
    if (t) {
      var n = t;
      if (!bm(e, t)) {
        if (sf(e)) throw Error(N(418));
        t = Dr(n.nextSibling);
        var r = en;
        t && bm(e, t)
          ? Hy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ve = !1), (en = e));
      }
    } else {
      if (sf(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (Ve = !1), (en = e);
    }
  }
}
function xm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  en = e;
}
function Hl(e) {
  if (e !== en) return !1;
  if (!Ve) return xm(e), (Ve = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !rf(e.type, e.memoizedProps))),
    t && (t = Zt))
  ) {
    if (sf(e)) throw (Ky(), Error(N(418)));
    for (; t; ) Hy(e, t), (t = Dr(t.nextSibling));
  }
  if ((xm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Zt = Dr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Zt = null;
    }
  } else Zt = en ? Dr(e.stateNode.nextSibling) : null;
  return !0;
}
function Ky() {
  for (var e = Zt; e; ) e = Dr(e.nextSibling);
}
function _i() {
  (Zt = en = null), (Ve = !1);
}
function kp(e) {
  An === null ? (An = [e]) : An.push(e);
}
var MS = yr.ReactCurrentBatchConfig;
function Tn(e, t) {
  if (e && e.defaultProps) {
    (t = Qe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Bs = Qr(null),
  Us = null,
  ni = null,
  Pp = null;
function Op() {
  Pp = ni = Us = null;
}
function Tp(e) {
  var t = Bs.current;
  Ue(Bs), (e._currentValue = t);
}
function cf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function mi(e, t) {
  (Us = e),
    (Pp = ni = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Vt = !0), (e.firstContext = null));
}
function wn(e) {
  var t = e._currentValue;
  if (Pp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ni === null)) {
      if (Us === null) throw Error(N(308));
      (ni = e), (Us.dependencies = { lanes: 0, firstContext: e });
    } else ni = ni.next = e;
  return t;
}
var ao = null;
function $p(e) {
  ao === null ? (ao = [e]) : ao.push(e);
}
function Gy(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), $p(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    mr(e, r)
  );
}
function mr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Or = !1;
function Mp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qy(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function cr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function zr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ye & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      mr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), $p(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    mr(e, n)
  );
}
function cs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gp(e, n);
  }
}
function _m(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ws(e, t, n, r) {
  var o = e.updateQueue;
  Or = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (i = u) : (a.next = u), (a = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== a &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = s = null), (l = i);
    do {
      var f = l.lane,
        x = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: x,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            g = l;
          switch (((f = t), (x = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                d = y.call(x, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (f = typeof y == "function" ? y.call(x, d, f) : y),
                f == null)
              )
                break e;
              d = Qe({}, d, f);
              break e;
            case 2:
              Or = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [l]) : f.push(l));
      } else
        (x = {
          eventTime: x,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = x), (s = d)) : (c = c.next = x),
          (a |= f);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (s = d),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (yo |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Sm(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(N(191, o));
        o.call(r);
      }
    }
}
var Qy = new Gg.Component().refs;
function df(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Qe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var wu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Oo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = $t(),
      o = Ur(e),
      i = cr(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = zr(e, i, o)),
      t !== null && (Ln(t, e, o, r), cs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = $t(),
      o = Ur(e),
      i = cr(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = zr(e, i, o)),
      t !== null && (Ln(t, e, o, r), cs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = $t(),
      r = Ur(e),
      o = cr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = zr(e, o, r)),
      t !== null && (Ln(t, e, r, n), cs(t, e, r));
  },
};
function wm(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ba(n, r) || !Ba(o, i)
      : !0
  );
}
function Yy(e, t, n) {
  var r = !1,
    o = Kr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = wn(i))
      : ((o = Kt(t) ? mo : Ot.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? xi(e, o) : Kr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = wu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Em(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && wu.enqueueReplaceState(t, t.state, null);
}
function ff(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Qy), Mp(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = wn(i))
    : ((i = Kt(t) ? mo : Ot.current), (o.context = xi(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (df(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && wu.enqueueReplaceState(o, o.state, null),
      Ws(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ji(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            l === Qy && (l = o.refs = {}),
              a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Kl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Cm(e) {
  var t = e._init;
  return t(e._payload);
}
function Xy(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = Wr(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, p, m, _) {
    return p === null || p.tag !== 6
      ? ((p = ld(m, h.mode, _)), (p.return = h), p)
      : ((p = o(p, m)), (p.return = h), p);
  }
  function s(h, p, m, _) {
    var E = m.type;
    return E === qo
      ? c(h, p, m.props.children, _, m.key)
      : p !== null &&
        (p.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Pr &&
            Cm(E) === p.type))
      ? ((_ = o(p, m.props)), (_.ref = Ji(h, p, m)), (_.return = h), _)
      : ((_ = vs(m.type, m.key, m.props, null, h.mode, _)),
        (_.ref = Ji(h, p, m)),
        (_.return = h),
        _);
  }
  function u(h, p, m, _) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = sd(m, h.mode, _)), (p.return = h), p)
      : ((p = o(p, m.children || [])), (p.return = h), p);
  }
  function c(h, p, m, _, E) {
    return p === null || p.tag !== 7
      ? ((p = po(m, h.mode, _, E)), (p.return = h), p)
      : ((p = o(p, m)), (p.return = h), p);
  }
  function d(h, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ld("" + p, h.mode, m)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Nl:
          return (
            (m = vs(p.type, p.key, p.props, null, h.mode, m)),
            (m.ref = Ji(h, null, p)),
            (m.return = h),
            m
          );
        case Go:
          return (p = sd(p, h.mode, m)), (p.return = h), p;
        case Pr:
          var _ = p._init;
          return d(h, _(p._payload), m);
      }
      if (fa(p) || Gi(p))
        return (p = po(p, h.mode, m, null)), (p.return = h), p;
      Kl(h, p);
    }
    return null;
  }
  function f(h, p, m, _) {
    var E = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return E !== null ? null : l(h, p, "" + m, _);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Nl:
          return m.key === E ? s(h, p, m, _) : null;
        case Go:
          return m.key === E ? u(h, p, m, _) : null;
        case Pr:
          return (E = m._init), f(h, p, E(m._payload), _);
      }
      if (fa(m) || Gi(m)) return E !== null ? null : c(h, p, m, _, null);
      Kl(h, m);
    }
    return null;
  }
  function x(h, p, m, _, E) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (h = h.get(m) || null), l(p, h, "" + _, E);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Nl:
          return (h = h.get(_.key === null ? m : _.key) || null), s(p, h, _, E);
        case Go:
          return (h = h.get(_.key === null ? m : _.key) || null), u(p, h, _, E);
        case Pr:
          var b = _._init;
          return x(h, p, m, b(_._payload), E);
      }
      if (fa(_) || Gi(_)) return (h = h.get(m) || null), c(p, h, _, E, null);
      Kl(p, _);
    }
    return null;
  }
  function y(h, p, m, _) {
    for (
      var E = null, b = null, w = p, P = (p = 0), $ = null;
      w !== null && P < m.length;
      P++
    ) {
      w.index > P ? (($ = w), (w = null)) : ($ = w.sibling);
      var M = f(h, w, m[P], _);
      if (M === null) {
        w === null && (w = $);
        break;
      }
      e && w && M.alternate === null && t(h, w),
        (p = i(M, p, P)),
        b === null ? (E = M) : (b.sibling = M),
        (b = M),
        (w = $);
    }
    if (P === m.length) return n(h, w), Ve && to(h, P), E;
    if (w === null) {
      for (; P < m.length; P++)
        (w = d(h, m[P], _)),
          w !== null &&
            ((p = i(w, p, P)), b === null ? (E = w) : (b.sibling = w), (b = w));
      return Ve && to(h, P), E;
    }
    for (w = r(h, w); P < m.length; P++)
      ($ = x(w, h, P, m[P], _)),
        $ !== null &&
          (e && $.alternate !== null && w.delete($.key === null ? P : $.key),
          (p = i($, p, P)),
          b === null ? (E = $) : (b.sibling = $),
          (b = $));
    return (
      e &&
        w.forEach(function (I) {
          return t(h, I);
        }),
      Ve && to(h, P),
      E
    );
  }
  function g(h, p, m, _) {
    var E = Gi(m);
    if (typeof E != "function") throw Error(N(150));
    if (((m = E.call(m)), m == null)) throw Error(N(151));
    for (
      var b = (E = null), w = p, P = (p = 0), $ = null, M = m.next();
      w !== null && !M.done;
      P++, M = m.next()
    ) {
      w.index > P ? (($ = w), (w = null)) : ($ = w.sibling);
      var I = f(h, w, M.value, _);
      if (I === null) {
        w === null && (w = $);
        break;
      }
      e && w && I.alternate === null && t(h, w),
        (p = i(I, p, P)),
        b === null ? (E = I) : (b.sibling = I),
        (b = I),
        (w = $);
    }
    if (M.done) return n(h, w), Ve && to(h, P), E;
    if (w === null) {
      for (; !M.done; P++, M = m.next())
        (M = d(h, M.value, _)),
          M !== null &&
            ((p = i(M, p, P)), b === null ? (E = M) : (b.sibling = M), (b = M));
      return Ve && to(h, P), E;
    }
    for (w = r(h, w); !M.done; P++, M = m.next())
      (M = x(w, h, P, M.value, _)),
        M !== null &&
          (e && M.alternate !== null && w.delete(M.key === null ? P : M.key),
          (p = i(M, p, P)),
          b === null ? (E = M) : (b.sibling = M),
          (b = M));
    return (
      e &&
        w.forEach(function (j) {
          return t(h, j);
        }),
      Ve && to(h, P),
      E
    );
  }
  function S(h, p, m, _) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === qo &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Nl:
          e: {
            for (var E = m.key, b = p; b !== null; ) {
              if (b.key === E) {
                if (((E = m.type), E === qo)) {
                  if (b.tag === 7) {
                    n(h, b.sibling),
                      (p = o(b, m.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  b.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Pr &&
                    Cm(E) === b.type)
                ) {
                  n(h, b.sibling),
                    (p = o(b, m.props)),
                    (p.ref = Ji(h, b, m)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, b);
                break;
              } else t(h, b);
              b = b.sibling;
            }
            m.type === qo
              ? ((p = po(m.props.children, h.mode, _, m.key)),
                (p.return = h),
                (h = p))
              : ((_ = vs(m.type, m.key, m.props, null, h.mode, _)),
                (_.ref = Ji(h, p, m)),
                (_.return = h),
                (h = _));
          }
          return a(h);
        case Go:
          e: {
            for (b = m.key; p !== null; ) {
              if (p.key === b)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, m.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = sd(m, h.mode, _)), (p.return = h), (h = p);
          }
          return a(h);
        case Pr:
          return (b = m._init), S(h, p, b(m._payload), _);
      }
      if (fa(m)) return y(h, p, m, _);
      if (Gi(m)) return g(h, p, m, _);
      Kl(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = ld(m, h.mode, _)), (p.return = h), (h = p)),
        a(h))
      : n(h, p);
  }
  return S;
}
var Si = Xy(!0),
  Jy = Xy(!1),
  hl = {},
  Jn = Qr(hl),
  Ha = Qr(hl),
  Ka = Qr(hl);
function lo(e) {
  if (e === hl) throw Error(N(174));
  return e;
}
function Ap(e, t) {
  switch ((Fe(Ka, t), Fe(Ha, e), Fe(Jn, hl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wd(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Wd(t, e));
  }
  Ue(Jn), Fe(Jn, t);
}
function wi() {
  Ue(Jn), Ue(Ha), Ue(Ka);
}
function Zy(e) {
  lo(Ka.current);
  var t = lo(Jn.current),
    n = Wd(t, e.type);
  t !== n && (Fe(Ha, e), Fe(Jn, n));
}
function Ip(e) {
  Ha.current === e && (Ue(Jn), Ue(Ha));
}
var Ge = Qr(0);
function Vs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var td = [];
function Np() {
  for (var e = 0; e < td.length; e++)
    td[e]._workInProgressVersionPrimary = null;
  td.length = 0;
}
var ds = yr.ReactCurrentDispatcher,
  nd = yr.ReactCurrentBatchConfig,
  go = 0,
  qe = null,
  st = null,
  pt = null,
  Hs = !1,
  wa = !1,
  Ga = 0,
  AS = 0;
function Ct() {
  throw Error(N(321));
}
function Lp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!zn(e[n], t[n])) return !1;
  return !0;
}
function jp(e, t, n, r, o, i) {
  if (
    ((go = i),
    (qe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ds.current = e === null || e.memoizedState === null ? jS : FS),
    (e = n(r, o)),
    wa)
  ) {
    i = 0;
    do {
      if (((wa = !1), (Ga = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (pt = st = null),
        (t.updateQueue = null),
        (ds.current = DS),
        (e = n(r, o));
    } while (wa);
  }
  if (
    ((ds.current = Ks),
    (t = st !== null && st.next !== null),
    (go = 0),
    (pt = st = qe = null),
    (Hs = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Fp() {
  var e = Ga !== 0;
  return (Ga = 0), e;
}
function Kn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pt === null ? (qe.memoizedState = pt = e) : (pt = pt.next = e), pt;
}
function En() {
  if (st === null) {
    var e = qe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = st.next;
  var t = pt === null ? qe.memoizedState : pt.next;
  if (t !== null) (pt = t), (st = e);
  else {
    if (e === null) throw Error(N(310));
    (st = e),
      (e = {
        memoizedState: st.memoizedState,
        baseState: st.baseState,
        baseQueue: st.baseQueue,
        queue: st.queue,
        next: null,
      }),
      pt === null ? (qe.memoizedState = pt = e) : (pt = pt.next = e);
  }
  return pt;
}
function qa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function rd(e) {
  var t = En(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = st,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      u = i;
    do {
      var c = u.lane;
      if ((go & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = d), (a = r)) : (s = s.next = d),
          (qe.lanes |= c),
          (yo |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (a = r) : (s.next = l),
      zn(r, t.memoizedState) || (Vt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (qe.lanes |= i), (yo |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function od(e) {
  var t = En(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    zn(i, t.memoizedState) || (Vt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function e0() {}
function t0(e, t) {
  var n = qe,
    r = En(),
    o = t(),
    i = !zn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Vt = !0)),
    (r = r.queue),
    Dp(o0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (pt !== null && pt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qa(9, r0.bind(null, n, r, o, t), void 0, null),
      mt === null)
    )
      throw Error(N(349));
    go & 30 || n0(n, t, o);
  }
  return o;
}
function n0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = qe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (qe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function r0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), i0(t) && a0(e);
}
function o0(e, t, n) {
  return n(function () {
    i0(t) && a0(e);
  });
}
function i0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zn(e, n);
  } catch {
    return !0;
  }
}
function a0(e) {
  var t = mr(e, 1);
  t !== null && Ln(t, e, 1, -1);
}
function Rm(e) {
  var t = Kn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = LS.bind(null, qe, e)),
    [t.memoizedState, e]
  );
}
function Qa(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = qe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (qe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function l0() {
  return En().memoizedState;
}
function fs(e, t, n, r) {
  var o = Kn();
  (qe.flags |= e),
    (o.memoizedState = Qa(1 | t, n, void 0, r === void 0 ? null : r));
}
function Eu(e, t, n, r) {
  var o = En();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (st !== null) {
    var a = st.memoizedState;
    if (((i = a.destroy), r !== null && Lp(r, a.deps))) {
      o.memoizedState = Qa(t, n, i, r);
      return;
    }
  }
  (qe.flags |= e), (o.memoizedState = Qa(1 | t, n, i, r));
}
function km(e, t) {
  return fs(8390656, 8, e, t);
}
function Dp(e, t) {
  return Eu(2048, 8, e, t);
}
function s0(e, t) {
  return Eu(4, 2, e, t);
}
function u0(e, t) {
  return Eu(4, 4, e, t);
}
function c0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function d0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Eu(4, 4, c0.bind(null, t, e), n)
  );
}
function zp() {}
function f0(e, t) {
  var n = En();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lp(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function p0(e, t) {
  var n = En();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lp(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function h0(e, t, n) {
  return go & 21
    ? (zn(n, t) || ((n = gy()), (qe.lanes |= n), (yo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Vt = !0)), (e.memoizedState = n));
}
function IS(e, t) {
  var n = Pe;
  (Pe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = nd.transition;
  nd.transition = {};
  try {
    e(!1), t();
  } finally {
    (Pe = n), (nd.transition = r);
  }
}
function m0() {
  return En().memoizedState;
}
function NS(e, t, n) {
  var r = Ur(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    v0(e))
  )
    g0(t, n);
  else if (((n = Gy(e, t, n, r)), n !== null)) {
    var o = $t();
    Ln(n, e, r, o), y0(n, t, r);
  }
}
function LS(e, t, n) {
  var r = Ur(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (v0(e)) g0(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), zn(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), $p(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Gy(e, t, o, r)),
      n !== null && ((o = $t()), Ln(n, e, r, o), y0(n, t, r));
  }
}
function v0(e) {
  var t = e.alternate;
  return e === qe || (t !== null && t === qe);
}
function g0(e, t) {
  wa = Hs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function y0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gp(e, n);
  }
}
var Ks = {
    readContext: wn,
    useCallback: Ct,
    useContext: Ct,
    useEffect: Ct,
    useImperativeHandle: Ct,
    useInsertionEffect: Ct,
    useLayoutEffect: Ct,
    useMemo: Ct,
    useReducer: Ct,
    useRef: Ct,
    useState: Ct,
    useDebugValue: Ct,
    useDeferredValue: Ct,
    useTransition: Ct,
    useMutableSource: Ct,
    useSyncExternalStore: Ct,
    useId: Ct,
    unstable_isNewReconciler: !1,
  },
  jS = {
    readContext: wn,
    useCallback: function (e, t) {
      return (Kn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: wn,
    useEffect: km,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fs(4194308, 4, c0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return fs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Kn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Kn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = NS.bind(null, qe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Kn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Rm,
    useDebugValue: zp,
    useDeferredValue: function (e) {
      return (Kn().memoizedState = e);
    },
    useTransition: function () {
      var e = Rm(!1),
        t = e[0];
      return (e = IS.bind(null, e[1])), (Kn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = qe,
        o = Kn();
      if (Ve) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), mt === null)) throw Error(N(349));
        go & 30 || n0(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        km(o0.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Qa(9, r0.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Kn(),
        t = mt.identifierPrefix;
      if (Ve) {
        var n = ur,
          r = sr;
        (n = (r & ~(1 << (32 - Nn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ga++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = AS++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  FS = {
    readContext: wn,
    useCallback: f0,
    useContext: wn,
    useEffect: Dp,
    useImperativeHandle: d0,
    useInsertionEffect: s0,
    useLayoutEffect: u0,
    useMemo: p0,
    useReducer: rd,
    useRef: l0,
    useState: function () {
      return rd(qa);
    },
    useDebugValue: zp,
    useDeferredValue: function (e) {
      var t = En();
      return h0(t, st.memoizedState, e);
    },
    useTransition: function () {
      var e = rd(qa)[0],
        t = En().memoizedState;
      return [e, t];
    },
    useMutableSource: e0,
    useSyncExternalStore: t0,
    useId: m0,
    unstable_isNewReconciler: !1,
  },
  DS = {
    readContext: wn,
    useCallback: f0,
    useContext: wn,
    useEffect: Dp,
    useImperativeHandle: d0,
    useInsertionEffect: s0,
    useLayoutEffect: u0,
    useMemo: p0,
    useReducer: od,
    useRef: l0,
    useState: function () {
      return od(qa);
    },
    useDebugValue: zp,
    useDeferredValue: function (e) {
      var t = En();
      return st === null ? (t.memoizedState = e) : h0(t, st.memoizedState, e);
    },
    useTransition: function () {
      var e = od(qa)[0],
        t = En().memoizedState;
      return [e, t];
    },
    useMutableSource: e0,
    useSyncExternalStore: t0,
    useId: m0,
    unstable_isNewReconciler: !1,
  };
function Ei(e, t) {
  try {
    var n = "",
      r = t;
    do (n += p_(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function id(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var zS = typeof WeakMap == "function" ? WeakMap : Map;
function b0(e, t, n) {
  (n = cr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      qs || ((qs = !0), (wf = r)), pf(e, t);
    }),
    n
  );
}
function x0(e, t, n) {
  (n = cr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        pf(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        pf(e, t),
          typeof r != "function" &&
            (Br === null ? (Br = new Set([this])) : Br.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Pm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zS();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = ew.bind(null, e, t, n)), t.then(e, e));
}
function Om(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Tm(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = cr(-1, 1)), (t.tag = 2), zr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var BS = yr.ReactCurrentOwner,
  Vt = !1;
function Tt(e, t, n, r) {
  t.child = e === null ? Jy(t, null, n, r) : Si(t, e.child, n, r);
}
function $m(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    mi(t, o),
    (r = jp(e, t, n, r, i, o)),
    (n = Fp()),
    e !== null && !Vt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        vr(e, t, o))
      : (Ve && n && Cp(t), (t.flags |= 1), Tt(e, t, r, o), t.child)
  );
}
function Mm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !qp(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), _0(e, t, i, r, o))
      : ((e = vs(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ba), n(a, r) && e.ref === t.ref)
    )
      return vr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Wr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function _0(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ba(i, r) && e.ref === t.ref)
      if (((Vt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Vt = !0);
      else return (t.lanes = e.lanes), vr(e, t, o);
  }
  return hf(e, t, n, r, o);
}
function S0(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Fe(oi, Xt),
        (Xt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Fe(oi, Xt),
          (Xt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Fe(oi, Xt),
        (Xt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Fe(oi, Xt),
      (Xt |= r);
  return Tt(e, t, o, n), t.child;
}
function w0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function hf(e, t, n, r, o) {
  var i = Kt(n) ? mo : Ot.current;
  return (
    (i = xi(t, i)),
    mi(t, o),
    (n = jp(e, t, n, r, i, o)),
    (r = Fp()),
    e !== null && !Vt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        vr(e, t, o))
      : (Ve && r && Cp(t), (t.flags |= 1), Tt(e, t, n, o), t.child)
  );
}
function Am(e, t, n, r, o) {
  if (Kt(n)) {
    var i = !0;
    Fs(t);
  } else i = !1;
  if ((mi(t, o), t.stateNode === null))
    ps(e, t), Yy(t, n, r), ff(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = wn(u))
      : ((u = Kt(n) ? mo : Ot.current), (u = xi(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || s !== u) && Em(t, a, r, u)),
      (Or = !1);
    var f = t.memoizedState;
    (a.state = f),
      Ws(t, r, a, o),
      (s = t.memoizedState),
      l !== r || f !== s || Ht.current || Or
        ? (typeof c == "function" && (df(t, n, c, r), (s = t.memoizedState)),
          (l = Or || wm(t, n, l, r, f, s, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      qy(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Tn(t.type, l)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = wn(s))
        : ((s = Kt(n) ? mo : Ot.current), (s = xi(t, s)));
    var x = n.getDerivedStateFromProps;
    (c =
      typeof x == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== d || f !== s) && Em(t, a, r, s)),
      (Or = !1),
      (f = t.memoizedState),
      (a.state = f),
      Ws(t, r, a, o);
    var y = t.memoizedState;
    l !== d || f !== y || Ht.current || Or
      ? (typeof x == "function" && (df(t, n, x, r), (y = t.memoizedState)),
        (u = Or || wm(t, n, u, r, f, y, s) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, y, s),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, y, s)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return mf(e, t, n, r, i, o);
}
function mf(e, t, n, r, o, i) {
  w0(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && ym(t, n, !1), vr(e, t, i);
  (r = t.stateNode), (BS.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Si(t, e.child, null, i)), (t.child = Si(t, null, l, i)))
      : Tt(e, t, l, i),
    (t.memoizedState = r.state),
    o && ym(t, n, !0),
    t.child
  );
}
function E0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? gm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && gm(e, t.context, !1),
    Ap(e, t.containerInfo);
}
function Im(e, t, n, r, o) {
  return _i(), kp(o), (t.flags |= 256), Tt(e, t, n, r), t.child;
}
var vf = { dehydrated: null, treeContext: null, retryLane: 0 };
function gf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function C0(e, t, n) {
  var r = t.pendingProps,
    o = Ge.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Fe(Ge, o & 1),
    e === null)
  )
    return (
      uf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = ku(a, r, 0, null)),
              (e = po(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = gf(n)),
              (t.memoizedState = vf),
              e)
            : Bp(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return US(e, t, a, r, l, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Wr(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Wr(l, i)) : ((i = po(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? gf(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = vf),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Wr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bp(e, t) {
  return (
    (t = ku({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Gl(e, t, n, r) {
  return (
    r !== null && kp(r),
    Si(t, e.child, null, n),
    (e = Bp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function US(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = id(Error(N(422)))), Gl(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = ku({ mode: "visible", children: r.children }, o, 0, null)),
        (i = po(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Si(t, e.child, null, a),
        (t.child.memoizedState = gf(a)),
        (t.memoizedState = vf),
        i);
  if (!(t.mode & 1)) return Gl(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(N(419))), (r = id(i, r, void 0)), Gl(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), Vt || l)) {
    if (((r = mt), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), mr(e, o), Ln(r, e, o, -1));
    }
    return Gp(), (r = id(Error(N(421)))), Gl(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = tw.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Zt = Dr(o.nextSibling)),
      (en = t),
      (Ve = !0),
      (An = null),
      e !== null &&
        ((hn[mn++] = sr),
        (hn[mn++] = ur),
        (hn[mn++] = vo),
        (sr = e.id),
        (ur = e.overflow),
        (vo = t)),
      (t = Bp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Nm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cf(e.return, t, n);
}
function ad(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function R0(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Tt(e, t, r.children, n), (r = Ge.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Nm(e, n, t);
        else if (e.tag === 19) Nm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Fe(Ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Vs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ad(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Vs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ad(t, !0, n, null, i);
        break;
      case "together":
        ad(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ps(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (yo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Wr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Wr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function WS(e, t, n) {
  switch (t.tag) {
    case 3:
      E0(t), _i();
      break;
    case 5:
      Zy(t);
      break;
    case 1:
      Kt(t.type) && Fs(t);
      break;
    case 4:
      Ap(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Fe(Bs, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Fe(Ge, Ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? C0(e, t, n)
          : (Fe(Ge, Ge.current & 1),
            (e = vr(e, t, n)),
            e !== null ? e.sibling : null);
      Fe(Ge, Ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return R0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Fe(Ge, Ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), S0(e, t, n);
  }
  return vr(e, t, n);
}
var k0, yf, P0, O0;
k0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
yf = function () {};
P0 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), lo(Jn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Dd(e, o)), (r = Dd(e, r)), (i = []);
        break;
      case "select":
        (o = Qe({}, o, { value: void 0 })),
          (r = Qe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Ud(e, o)), (r = Ud(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ls);
    }
    Vd(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ia.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ia.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && Be("scroll", e),
                  i || l === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
O0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zi(e, t) {
  if (!Ve)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Rt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function VS(e, t, n) {
  var r = t.pendingProps;
  switch ((Rp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Rt(t), null;
    case 1:
      return Kt(t.type) && js(), Rt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wi(),
        Ue(Ht),
        Ue(Ot),
        Np(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Hl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), An !== null && (Rf(An), (An = null)))),
        yf(e, t),
        Rt(t),
        null
      );
    case 5:
      Ip(t);
      var o = lo(Ka.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        P0(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Rt(t), null;
        }
        if (((e = lo(Jn.current)), Hl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Qn] = t), (r[Va] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Be("cancel", r), Be("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Be("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ha.length; o++) Be(ha[o], r);
              break;
            case "source":
              Be("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Be("error", r), Be("load", r);
              break;
            case "details":
              Be("toggle", r);
              break;
            case "input":
              Vh(r, i), Be("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Be("invalid", r);
              break;
            case "textarea":
              Kh(r, i), Be("invalid", r);
          }
          Vd(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Vl(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Vl(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Ia.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  Be("scroll", r);
            }
          switch (n) {
            case "input":
              Ll(r), Hh(r, i, !0);
              break;
            case "textarea":
              Ll(r), Gh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ls);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ny(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Qn] = t),
            (e[Va] = r),
            k0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Hd(n, r)), n)) {
              case "dialog":
                Be("cancel", e), Be("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Be("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ha.length; o++) Be(ha[o], e);
                o = r;
                break;
              case "source":
                Be("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Be("error", e), Be("load", e), (o = r);
                break;
              case "details":
                Be("toggle", e), (o = r);
                break;
              case "input":
                Vh(e, r), (o = Dd(e, r)), Be("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Qe({}, r, { value: void 0 })),
                  Be("invalid", e);
                break;
              case "textarea":
                Kh(e, r), (o = Ud(e, r)), Be("invalid", e);
                break;
              default:
                o = r;
            }
            Vd(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                i === "style"
                  ? iy(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ry(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Na(e, s)
                    : typeof s == "number" && Na(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ia.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && Be("scroll", e)
                      : s != null && dp(e, i, s, a));
              }
            switch (n) {
              case "input":
                Ll(e), Hh(e, r, !1);
                break;
              case "textarea":
                Ll(e), Gh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Hr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? di(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      di(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ls);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Rt(t), null;
    case 6:
      if (e && t.stateNode != null) O0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = lo(Ka.current)), lo(Jn.current), Hl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qn] = t),
            (i = r.nodeValue !== n) && ((e = en), e !== null))
          )
            switch (e.tag) {
              case 3:
                Vl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Vl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qn] = t),
            (t.stateNode = r);
      }
      return Rt(t), null;
    case 13:
      if (
        (Ue(Ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ve && Zt !== null && t.mode & 1 && !(t.flags & 128))
          Ky(), _i(), (t.flags |= 98560), (i = !1);
        else if (((i = Hl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[Qn] = t;
          } else
            _i(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Rt(t), (i = !1);
        } else An !== null && (Rf(An), (An = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ge.current & 1 ? ut === 0 && (ut = 3) : Gp())),
          t.updateQueue !== null && (t.flags |= 4),
          Rt(t),
          null);
    case 4:
      return (
        wi(), yf(e, t), e === null && Ua(t.stateNode.containerInfo), Rt(t), null
      );
    case 10:
      return Tp(t.type._context), Rt(t), null;
    case 17:
      return Kt(t.type) && js(), Rt(t), null;
    case 19:
      if ((Ue(Ge), (i = t.memoizedState), i === null)) return Rt(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Zi(i, !1);
        else {
          if (ut !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Vs(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Zi(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Fe(Ge, (Ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            rt() > Ci &&
            ((t.flags |= 128), (r = !0), Zi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Vs(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Zi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !Ve)
            )
              return Rt(t), null;
          } else
            2 * rt() - i.renderingStartTime > Ci &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Zi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = rt()),
          (t.sibling = null),
          (n = Ge.current),
          Fe(Ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (Rt(t), null);
    case 22:
    case 23:
      return (
        Kp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Xt & 1073741824 && (Rt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Rt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function HS(e, t) {
  switch ((Rp(t), t.tag)) {
    case 1:
      return (
        Kt(t.type) && js(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wi(),
        Ue(Ht),
        Ue(Ot),
        Np(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ip(t), null;
    case 13:
      if (
        (Ue(Ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        _i();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ue(Ge), null;
    case 4:
      return wi(), null;
    case 10:
      return Tp(t.type._context), null;
    case 22:
    case 23:
      return Kp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ql = !1,
  Pt = !1,
  KS = typeof WeakSet == "function" ? WeakSet : Set,
  K = null;
function ri(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        et(e, t, r);
      }
    else n.current = null;
}
function bf(e, t, n) {
  try {
    n();
  } catch (r) {
    et(e, t, r);
  }
}
var Lm = !1;
function GS(e, t) {
  if (((tf = As), (e = Ay()), Ep(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var x;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (s = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (x = d.firstChild) !== null;

            )
              (f = d), (d = x);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (l = a),
                f === i && ++c === r && (s = a),
                (x = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = x;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (nf = { focusedElem: e, selectionRange: n }, As = !1, K = t; K !== null; )
    if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (K = e);
    else
      for (; K !== null; ) {
        t = K;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    S = y.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Tn(t.type, g),
                      S
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (_) {
          et(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (K = e);
          break;
        }
        K = t.return;
      }
  return (y = Lm), (Lm = !1), y;
}
function Ea(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && bf(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Cu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function T0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), T0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Qn], delete t[Va], delete t[af], delete t[OS], delete t[TS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function $0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function jm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function _f(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ls));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_f(e, t, n), e = e.sibling; e !== null; ) _f(e, t, n), (e = e.sibling);
}
function Sf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sf(e, t, n), e = e.sibling; e !== null; ) Sf(e, t, n), (e = e.sibling);
}
var bt = null,
  $n = !1;
function Cr(e, t, n) {
  for (n = n.child; n !== null; ) M0(e, t, n), (n = n.sibling);
}
function M0(e, t, n) {
  if (Xn && typeof Xn.onCommitFiberUnmount == "function")
    try {
      Xn.onCommitFiberUnmount(gu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Pt || ri(n, t);
    case 6:
      var r = bt,
        o = $n;
      (bt = null),
        Cr(e, t, n),
        (bt = r),
        ($n = o),
        bt !== null &&
          ($n
            ? ((e = bt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : bt.removeChild(n.stateNode));
      break;
    case 18:
      bt !== null &&
        ($n
          ? ((e = bt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zc(e.parentNode, n)
              : e.nodeType === 1 && Zc(e, n),
            Da(e))
          : Zc(bt, n.stateNode));
      break;
    case 4:
      (r = bt),
        (o = $n),
        (bt = n.stateNode.containerInfo),
        ($n = !0),
        Cr(e, t, n),
        (bt = r),
        ($n = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Pt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && bf(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Cr(e, t, n);
      break;
    case 1:
      if (
        !Pt &&
        (ri(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          et(n, t, l);
        }
      Cr(e, t, n);
      break;
    case 21:
      Cr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Pt = (r = Pt) || n.memoizedState !== null), Cr(e, t, n), (Pt = r))
        : Cr(e, t, n);
      break;
    default:
      Cr(e, t, n);
  }
}
function Fm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new KS()),
      t.forEach(function (r) {
        var o = nw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function On(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (bt = l.stateNode), ($n = !1);
              break e;
            case 3:
              (bt = l.stateNode.containerInfo), ($n = !0);
              break e;
            case 4:
              (bt = l.stateNode.containerInfo), ($n = !0);
              break e;
          }
          l = l.return;
        }
        if (bt === null) throw Error(N(160));
        M0(i, a, o), (bt = null), ($n = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        et(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) A0(t, e), (t = t.sibling);
}
function A0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((On(t, e), Hn(e), r & 4)) {
        try {
          Ea(3, e, e.return), Cu(3, e);
        } catch (g) {
          et(e, e.return, g);
        }
        try {
          Ea(5, e, e.return);
        } catch (g) {
          et(e, e.return, g);
        }
      }
      break;
    case 1:
      On(t, e), Hn(e), r & 512 && n !== null && ri(n, n.return);
      break;
    case 5:
      if (
        (On(t, e),
        Hn(e),
        r & 512 && n !== null && ri(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Na(o, "");
        } catch (g) {
          et(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && ey(o, i),
              Hd(l, a);
            var u = Hd(l, i);
            for (a = 0; a < s.length; a += 2) {
              var c = s[a],
                d = s[a + 1];
              c === "style"
                ? iy(o, d)
                : c === "dangerouslySetInnerHTML"
                ? ry(o, d)
                : c === "children"
                ? Na(o, d)
                : dp(o, c, d, u);
            }
            switch (l) {
              case "input":
                zd(o, i);
                break;
              case "textarea":
                ty(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? di(o, !!i.multiple, x, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? di(o, !!i.multiple, i.defaultValue, !0)
                      : di(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Va] = i;
          } catch (g) {
            et(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((On(t, e), Hn(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          et(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (On(t, e), Hn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Da(t.containerInfo);
        } catch (g) {
          et(e, e.return, g);
        }
      break;
    case 4:
      On(t, e), Hn(e);
      break;
    case 13:
      On(t, e),
        Hn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Vp = rt())),
        r & 4 && Fm(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Pt = (u = Pt) || c), On(t, e), (Pt = u)) : On(t, e),
        Hn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (K = e, c = e.child; c !== null; ) {
            for (d = K = c; K !== null; ) {
              switch (((f = K), (x = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ea(4, f, f.return);
                  break;
                case 1:
                  ri(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      et(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ri(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    zm(d);
                    continue;
                  }
              }
              x !== null ? ((x.return = f), (K = x)) : zm(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = d.stateNode),
                      (s = d.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = oy("display", a)));
              } catch (g) {
                et(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                et(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      On(t, e), Hn(e), r & 4 && Fm(e);
      break;
    case 21:
      break;
    default:
      On(t, e), Hn(e);
  }
}
function Hn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Na(o, ""), (r.flags &= -33));
          var i = jm(e);
          Sf(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = jm(e);
          _f(e, l, a);
          break;
        default:
          throw Error(N(161));
      }
    } catch (s) {
      et(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function qS(e, t, n) {
  (K = e), I0(e);
}
function I0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; K !== null; ) {
    var o = K,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ql;
      if (!a) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || Pt;
        l = ql;
        var u = Pt;
        if (((ql = a), (Pt = s) && !u))
          for (K = o; K !== null; )
            (a = K),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Bm(o)
                : s !== null
                ? ((s.return = a), (K = s))
                : Bm(o);
        for (; i !== null; ) (K = i), I0(i), (i = i.sibling);
        (K = o), (ql = l), (Pt = u);
      }
      Dm(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (K = i)) : Dm(e);
  }
}
function Dm(e) {
  for (; K !== null; ) {
    var t = K;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Pt || Cu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Pt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Tn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Sm(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Sm(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Da(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Pt || (t.flags & 512 && xf(t));
      } catch (f) {
        et(t, t.return, f);
      }
    }
    if (t === e) {
      K = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (K = n);
      break;
    }
    K = t.return;
  }
}
function zm(e) {
  for (; K !== null; ) {
    var t = K;
    if (t === e) {
      K = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (K = n);
      break;
    }
    K = t.return;
  }
}
function Bm(e) {
  for (; K !== null; ) {
    var t = K;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cu(4, t);
          } catch (s) {
            et(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              et(t, o, s);
            }
          }
          var i = t.return;
          try {
            xf(t);
          } catch (s) {
            et(t, i, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            xf(t);
          } catch (s) {
            et(t, a, s);
          }
      }
    } catch (s) {
      et(t, t.return, s);
    }
    if (t === e) {
      K = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (K = l);
      break;
    }
    K = t.return;
  }
}
var QS = Math.ceil,
  Gs = yr.ReactCurrentDispatcher,
  Up = yr.ReactCurrentOwner,
  Sn = yr.ReactCurrentBatchConfig,
  ye = 0,
  mt = null,
  lt = null,
  _t = 0,
  Xt = 0,
  oi = Qr(0),
  ut = 0,
  Ya = null,
  yo = 0,
  Ru = 0,
  Wp = 0,
  Ca = null,
  Ut = null,
  Vp = 0,
  Ci = 1 / 0,
  or = null,
  qs = !1,
  wf = null,
  Br = null,
  Ql = !1,
  Ar = null,
  Qs = 0,
  Ra = 0,
  Ef = null,
  hs = -1,
  ms = 0;
function $t() {
  return ye & 6 ? rt() : hs !== -1 ? hs : (hs = rt());
}
function Ur(e) {
  return e.mode & 1
    ? ye & 2 && _t !== 0
      ? _t & -_t
      : MS.transition !== null
      ? (ms === 0 && (ms = gy()), ms)
      : ((e = Pe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ey(e.type))),
        e)
    : 1;
}
function Ln(e, t, n, r) {
  if (50 < Ra) throw ((Ra = 0), (Ef = null), Error(N(185)));
  dl(e, n, r),
    (!(ye & 2) || e !== mt) &&
      (e === mt && (!(ye & 2) && (Ru |= n), ut === 4 && $r(e, _t)),
      Gt(e, r),
      n === 1 && ye === 0 && !(t.mode & 1) && ((Ci = rt() + 500), Su && Yr()));
}
function Gt(e, t) {
  var n = e.callbackNode;
  M_(e, t);
  var r = Ms(e, e === mt ? _t : 0);
  if (r === 0)
    n !== null && Yh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yh(n), t === 1))
      e.tag === 0 ? $S(Um.bind(null, e)) : Wy(Um.bind(null, e)),
        kS(function () {
          !(ye & 6) && Yr();
        }),
        (n = null);
    else {
      switch (yy(r)) {
        case 1:
          n = vp;
          break;
        case 4:
          n = my;
          break;
        case 16:
          n = $s;
          break;
        case 536870912:
          n = vy;
          break;
        default:
          n = $s;
      }
      n = U0(n, N0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function N0(e, t) {
  if (((hs = -1), (ms = 0), ye & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (vi() && e.callbackNode !== n) return null;
  var r = Ms(e, e === mt ? _t : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ys(e, r);
  else {
    t = r;
    var o = ye;
    ye |= 2;
    var i = j0();
    (mt !== e || _t !== t) && ((or = null), (Ci = rt() + 500), fo(e, t));
    do
      try {
        JS();
        break;
      } catch (l) {
        L0(e, l);
      }
    while (!0);
    Op(),
      (Gs.current = i),
      (ye = o),
      lt !== null ? (t = 0) : ((mt = null), (_t = 0), (t = ut));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Yd(e)), o !== 0 && ((r = o), (t = Cf(e, o)))), t === 1)
    )
      throw ((n = Ya), fo(e, 0), $r(e, r), Gt(e, rt()), n);
    if (t === 6) $r(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !YS(o) &&
          ((t = Ys(e, r)),
          t === 2 && ((i = Yd(e)), i !== 0 && ((r = i), (t = Cf(e, i)))),
          t === 1))
      )
        throw ((n = Ya), fo(e, 0), $r(e, r), Gt(e, rt()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          no(e, Ut, or);
          break;
        case 3:
          if (
            ($r(e, r), (r & 130023424) === r && ((t = Vp + 500 - rt()), 10 < t))
          ) {
            if (Ms(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              $t(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = of(no.bind(null, e, Ut, or), t);
            break;
          }
          no(e, Ut, or);
          break;
        case 4:
          if (($r(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Nn(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = rt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * QS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = of(no.bind(null, e, Ut, or), r);
            break;
          }
          no(e, Ut, or);
          break;
        case 5:
          no(e, Ut, or);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Gt(e, rt()), e.callbackNode === n ? N0.bind(null, e) : null;
}
function Cf(e, t) {
  var n = Ca;
  return (
    e.current.memoizedState.isDehydrated && (fo(e, t).flags |= 256),
    (e = Ys(e, t)),
    e !== 2 && ((t = Ut), (Ut = n), t !== null && Rf(t)),
    e
  );
}
function Rf(e) {
  Ut === null ? (Ut = e) : Ut.push.apply(Ut, e);
}
function YS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!zn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function $r(e, t) {
  for (
    t &= ~Wp,
      t &= ~Ru,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Nn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Um(e) {
  if (ye & 6) throw Error(N(327));
  vi();
  var t = Ms(e, 0);
  if (!(t & 1)) return Gt(e, rt()), null;
  var n = Ys(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yd(e);
    r !== 0 && ((t = r), (n = Cf(e, r)));
  }
  if (n === 1) throw ((n = Ya), fo(e, 0), $r(e, t), Gt(e, rt()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    no(e, Ut, or),
    Gt(e, rt()),
    null
  );
}
function Hp(e, t) {
  var n = ye;
  ye |= 1;
  try {
    return e(t);
  } finally {
    (ye = n), ye === 0 && ((Ci = rt() + 500), Su && Yr());
  }
}
function bo(e) {
  Ar !== null && Ar.tag === 0 && !(ye & 6) && vi();
  var t = ye;
  ye |= 1;
  var n = Sn.transition,
    r = Pe;
  try {
    if (((Sn.transition = null), (Pe = 1), e)) return e();
  } finally {
    (Pe = r), (Sn.transition = n), (ye = t), !(ye & 6) && Yr();
  }
}
function Kp() {
  (Xt = oi.current), Ue(oi);
}
function fo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), RS(n)), lt !== null))
    for (n = lt.return; n !== null; ) {
      var r = n;
      switch ((Rp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && js();
          break;
        case 3:
          wi(), Ue(Ht), Ue(Ot), Np();
          break;
        case 5:
          Ip(r);
          break;
        case 4:
          wi();
          break;
        case 13:
          Ue(Ge);
          break;
        case 19:
          Ue(Ge);
          break;
        case 10:
          Tp(r.type._context);
          break;
        case 22:
        case 23:
          Kp();
      }
      n = n.return;
    }
  if (
    ((mt = e),
    (lt = e = Wr(e.current, null)),
    (_t = Xt = t),
    (ut = 0),
    (Ya = null),
    (Wp = Ru = yo = 0),
    (Ut = Ca = null),
    ao !== null)
  ) {
    for (t = 0; t < ao.length; t++)
      if (((n = ao[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    ao = null;
  }
  return e;
}
function L0(e, t) {
  do {
    var n = lt;
    try {
      if ((Op(), (ds.current = Ks), Hs)) {
        for (var r = qe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Hs = !1;
      }
      if (
        ((go = 0),
        (pt = st = qe = null),
        (wa = !1),
        (Ga = 0),
        (Up.current = null),
        n === null || n.return === null)
      ) {
        (ut = 1), (Ya = t), (lt = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          s = t;
        if (
          ((t = _t),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var x = Om(a);
          if (x !== null) {
            (x.flags &= -257),
              Tm(x, a, l, i, t),
              x.mode & 1 && Pm(i, u, t),
              (t = x),
              (s = u);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Pm(i, u, t), Gp();
              break e;
            }
            s = Error(N(426));
          }
        } else if (Ve && l.mode & 1) {
          var S = Om(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Tm(S, a, l, i, t),
              kp(Ei(s, l));
            break e;
          }
        }
        (i = s = Ei(s, l)),
          ut !== 4 && (ut = 2),
          Ca === null ? (Ca = [i]) : Ca.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = b0(i, s, t);
              _m(i, h);
              break e;
            case 1:
              l = s;
              var p = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Br === null || !Br.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var _ = x0(i, l, t);
                _m(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      D0(n);
    } catch (E) {
      (t = E), lt === n && n !== null && (lt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function j0() {
  var e = Gs.current;
  return (Gs.current = Ks), e === null ? Ks : e;
}
function Gp() {
  (ut === 0 || ut === 3 || ut === 2) && (ut = 4),
    mt === null || (!(yo & 268435455) && !(Ru & 268435455)) || $r(mt, _t);
}
function Ys(e, t) {
  var n = ye;
  ye |= 2;
  var r = j0();
  (mt !== e || _t !== t) && ((or = null), fo(e, t));
  do
    try {
      XS();
      break;
    } catch (o) {
      L0(e, o);
    }
  while (!0);
  if ((Op(), (ye = n), (Gs.current = r), lt !== null)) throw Error(N(261));
  return (mt = null), (_t = 0), ut;
}
function XS() {
  for (; lt !== null; ) F0(lt);
}
function JS() {
  for (; lt !== null && !w_(); ) F0(lt);
}
function F0(e) {
  var t = B0(e.alternate, e, Xt);
  (e.memoizedProps = e.pendingProps),
    t === null ? D0(e) : (lt = t),
    (Up.current = null);
}
function D0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = HS(n, t)), n !== null)) {
        (n.flags &= 32767), (lt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ut = 6), (lt = null);
        return;
      }
    } else if (((n = VS(n, t, Xt)), n !== null)) {
      lt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      lt = t;
      return;
    }
    lt = t = e;
  } while (t !== null);
  ut === 0 && (ut = 5);
}
function no(e, t, n) {
  var r = Pe,
    o = Sn.transition;
  try {
    (Sn.transition = null), (Pe = 1), ZS(e, t, n, r);
  } finally {
    (Sn.transition = o), (Pe = r);
  }
  return null;
}
function ZS(e, t, n, r) {
  do vi();
  while (Ar !== null);
  if (ye & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (A_(e, i),
    e === mt && ((lt = mt = null), (_t = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ql ||
      ((Ql = !0),
      U0($s, function () {
        return vi(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Sn.transition), (Sn.transition = null);
    var a = Pe;
    Pe = 1;
    var l = ye;
    (ye |= 4),
      (Up.current = null),
      GS(e, n),
      A0(n, e),
      bS(nf),
      (As = !!tf),
      (nf = tf = null),
      (e.current = n),
      qS(n),
      E_(),
      (ye = l),
      (Pe = a),
      (Sn.transition = i);
  } else e.current = n;
  if (
    (Ql && ((Ql = !1), (Ar = e), (Qs = o)),
    (i = e.pendingLanes),
    i === 0 && (Br = null),
    k_(n.stateNode),
    Gt(e, rt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (qs) throw ((qs = !1), (e = wf), (wf = null), e);
  return (
    Qs & 1 && e.tag !== 0 && vi(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ef ? Ra++ : ((Ra = 0), (Ef = e))) : (Ra = 0),
    Yr(),
    null
  );
}
function vi() {
  if (Ar !== null) {
    var e = yy(Qs),
      t = Sn.transition,
      n = Pe;
    try {
      if (((Sn.transition = null), (Pe = 16 > e ? 16 : e), Ar === null))
        var r = !1;
      else {
        if (((e = Ar), (Ar = null), (Qs = 0), ye & 6)) throw Error(N(331));
        var o = ye;
        for (ye |= 4, K = e.current; K !== null; ) {
          var i = K,
            a = i.child;
          if (K.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (K = u; K !== null; ) {
                  var c = K;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ea(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (K = d);
                  else
                    for (; K !== null; ) {
                      c = K;
                      var f = c.sibling,
                        x = c.return;
                      if ((T0(c), c === u)) {
                        K = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = x), (K = f);
                        break;
                      }
                      K = x;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              K = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (K = a);
          else
            e: for (; K !== null; ) {
              if (((i = K), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ea(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (K = h);
                break e;
              }
              K = i.return;
            }
        }
        var p = e.current;
        for (K = p; K !== null; ) {
          a = K;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (K = m);
          else
            e: for (a = p; K !== null; ) {
              if (((l = K), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cu(9, l);
                  }
                } catch (E) {
                  et(l, l.return, E);
                }
              if (l === a) {
                K = null;
                break e;
              }
              var _ = l.sibling;
              if (_ !== null) {
                (_.return = l.return), (K = _);
                break e;
              }
              K = l.return;
            }
        }
        if (
          ((ye = o), Yr(), Xn && typeof Xn.onPostCommitFiberRoot == "function")
        )
          try {
            Xn.onPostCommitFiberRoot(gu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Pe = n), (Sn.transition = t);
    }
  }
  return !1;
}
function Wm(e, t, n) {
  (t = Ei(n, t)),
    (t = b0(e, t, 1)),
    (e = zr(e, t, 1)),
    (t = $t()),
    e !== null && (dl(e, 1, t), Gt(e, t));
}
function et(e, t, n) {
  if (e.tag === 3) Wm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Wm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Br === null || !Br.has(r)))
        ) {
          (e = Ei(n, e)),
            (e = x0(t, e, 1)),
            (t = zr(t, e, 1)),
            (e = $t()),
            t !== null && (dl(t, 1, e), Gt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ew(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = $t()),
    (e.pingedLanes |= e.suspendedLanes & n),
    mt === e &&
      (_t & n) === n &&
      (ut === 4 || (ut === 3 && (_t & 130023424) === _t && 500 > rt() - Vp)
        ? fo(e, 0)
        : (Wp |= n)),
    Gt(e, t);
}
function z0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Dl), (Dl <<= 1), !(Dl & 130023424) && (Dl = 4194304))
      : (t = 1));
  var n = $t();
  (e = mr(e, t)), e !== null && (dl(e, t, n), Gt(e, n));
}
function tw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), z0(e, n);
}
function nw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), z0(e, n);
}
var B0;
B0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ht.current) Vt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Vt = !1), WS(e, t, n);
      Vt = !!(e.flags & 131072);
    }
  else (Vt = !1), Ve && t.flags & 1048576 && Vy(t, zs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ps(e, t), (e = t.pendingProps);
      var o = xi(t, Ot.current);
      mi(t, n), (o = jp(null, t, r, e, o, n));
      var i = Fp();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Kt(r) ? ((i = !0), Fs(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Mp(t),
            (o.updater = wu),
            (t.stateNode = o),
            (o._reactInternals = t),
            ff(t, r, e, n),
            (t = mf(null, t, r, !0, i, n)))
          : ((t.tag = 0), Ve && i && Cp(t), Tt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ps(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = ow(r)),
          (e = Tn(r, e)),
          o)
        ) {
          case 0:
            t = hf(null, t, r, e, n);
            break e;
          case 1:
            t = Am(null, t, r, e, n);
            break e;
          case 11:
            t = $m(null, t, r, e, n);
            break e;
          case 14:
            t = Mm(null, t, r, Tn(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Tn(r, o)),
        hf(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Tn(r, o)),
        Am(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((E0(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          qy(e, t),
          Ws(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Ei(Error(N(423)), t)), (t = Im(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Ei(Error(N(424)), t)), (t = Im(e, t, r, n, o));
            break e;
          } else
            for (
              Zt = Dr(t.stateNode.containerInfo.firstChild),
                en = t,
                Ve = !0,
                An = null,
                n = Jy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((_i(), r === o)) {
            t = vr(e, t, n);
            break e;
          }
          Tt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Zy(t),
        e === null && uf(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        rf(r, o) ? (a = null) : i !== null && rf(r, i) && (t.flags |= 32),
        w0(e, t),
        Tt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && uf(t), null;
    case 13:
      return C0(e, t, n);
    case 4:
      return (
        Ap(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Si(t, null, r, n)) : Tt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Tn(r, o)),
        $m(e, t, r, o, n)
      );
    case 7:
      return Tt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Tt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Tt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Fe(Bs, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (zn(i.value, a)) {
            if (i.children === o.children && !Ht.current) {
              t = vr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = cr(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      cf(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(N(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  cf(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Tt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        mi(t, n),
        (o = wn(o)),
        (r = r(o)),
        (t.flags |= 1),
        Tt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Tn(r, t.pendingProps)),
        (o = Tn(r.type, o)),
        Mm(e, t, r, o, n)
      );
    case 15:
      return _0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Tn(r, o)),
        ps(e, t),
        (t.tag = 1),
        Kt(r) ? ((e = !0), Fs(t)) : (e = !1),
        mi(t, n),
        Yy(t, r, o),
        ff(t, r, o, n),
        mf(null, t, r, !0, e, n)
      );
    case 19:
      return R0(e, t, n);
    case 22:
      return S0(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function U0(e, t) {
  return hy(e, t);
}
function rw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function bn(e, t, n, r) {
  return new rw(e, t, n, r);
}
function qp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ow(e) {
  if (typeof e == "function") return qp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === pp)) return 11;
    if (e === hp) return 14;
  }
  return 2;
}
function Wr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = bn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function vs(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) qp(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case qo:
        return po(n.children, o, i, t);
      case fp:
        (a = 8), (o |= 8);
        break;
      case Nd:
        return (
          (e = bn(12, n, t, o | 2)), (e.elementType = Nd), (e.lanes = i), e
        );
      case Ld:
        return (e = bn(13, n, t, o)), (e.elementType = Ld), (e.lanes = i), e;
      case jd:
        return (e = bn(19, n, t, o)), (e.elementType = jd), (e.lanes = i), e;
      case Xg:
        return ku(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qg:
              a = 10;
              break e;
            case Yg:
              a = 9;
              break e;
            case pp:
              a = 11;
              break e;
            case hp:
              a = 14;
              break e;
            case Pr:
              (a = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = bn(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function po(e, t, n, r) {
  return (e = bn(7, e, r, t)), (e.lanes = n), e;
}
function ku(e, t, n, r) {
  return (
    (e = bn(22, e, r, t)),
    (e.elementType = Xg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ld(e, t, n) {
  return (e = bn(6, e, null, t)), (e.lanes = n), e;
}
function sd(e, t, n) {
  return (
    (t = bn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function iw(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Uc(0)),
    (this.expirationTimes = Uc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Uc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Qp(e, t, n, r, o, i, a, l, s) {
  return (
    (e = new iw(e, t, n, l, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = bn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Mp(i),
    e
  );
}
function aw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Go,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function W0(e) {
  if (!e) return Kr;
  e = e._reactInternals;
  e: {
    if (Oo(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Kt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Kt(n)) return Uy(e, n, t);
  }
  return t;
}
function V0(e, t, n, r, o, i, a, l, s) {
  return (
    (e = Qp(n, r, !0, e, o, i, a, l, s)),
    (e.context = W0(null)),
    (n = e.current),
    (r = $t()),
    (o = Ur(n)),
    (i = cr(r, o)),
    (i.callback = t ?? null),
    zr(n, i, o),
    (e.current.lanes = o),
    dl(e, o, r),
    Gt(e, r),
    e
  );
}
function Pu(e, t, n, r) {
  var o = t.current,
    i = $t(),
    a = Ur(o);
  return (
    (n = W0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = cr(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = zr(o, t, a)),
    e !== null && (Ln(e, o, a, i), cs(e, o, a)),
    a
  );
}
function Xs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yp(e, t) {
  Vm(e, t), (e = e.alternate) && Vm(e, t);
}
function lw() {
  return null;
}
var H0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xp(e) {
  this._internalRoot = e;
}
Ou.prototype.render = Xp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Pu(e, t, null, null);
};
Ou.prototype.unmount = Xp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    bo(function () {
      Pu(null, e, null, null);
    }),
      (t[hr] = null);
  }
};
function Ou(e) {
  this._internalRoot = e;
}
Ou.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = _y();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tr.length && t !== 0 && t < Tr[n].priority; n++);
    Tr.splice(n, 0, e), n === 0 && wy(e);
  }
};
function Jp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Tu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hm() {}
function sw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Xs(a);
        i.call(u);
      };
    }
    var a = V0(t, r, e, 0, null, !1, !1, "", Hm);
    return (
      (e._reactRootContainer = a),
      (e[hr] = a.current),
      Ua(e.nodeType === 8 ? e.parentNode : e),
      bo(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Xs(s);
      l.call(u);
    };
  }
  var s = Qp(e, 0, !1, null, null, !1, !1, "", Hm);
  return (
    (e._reactRootContainer = s),
    (e[hr] = s.current),
    Ua(e.nodeType === 8 ? e.parentNode : e),
    bo(function () {
      Pu(t, s, n, r);
    }),
    s
  );
}
function $u(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var s = Xs(a);
        l.call(s);
      };
    }
    Pu(t, a, e, o);
  } else a = sw(n, t, e, o, r);
  return Xs(a);
}
by = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pa(t.pendingLanes);
        n !== 0 &&
          (gp(t, n | 1), Gt(t, rt()), !(ye & 6) && ((Ci = rt() + 500), Yr()));
      }
      break;
    case 13:
      bo(function () {
        var r = mr(e, 1);
        if (r !== null) {
          var o = $t();
          Ln(r, e, 1, o);
        }
      }),
        Yp(e, 1);
  }
};
yp = function (e) {
  if (e.tag === 13) {
    var t = mr(e, 134217728);
    if (t !== null) {
      var n = $t();
      Ln(t, e, 134217728, n);
    }
    Yp(e, 134217728);
  }
};
xy = function (e) {
  if (e.tag === 13) {
    var t = Ur(e),
      n = mr(e, t);
    if (n !== null) {
      var r = $t();
      Ln(n, e, t, r);
    }
    Yp(e, t);
  }
};
_y = function () {
  return Pe;
};
Sy = function (e, t) {
  var n = Pe;
  try {
    return (Pe = e), t();
  } finally {
    Pe = n;
  }
};
Gd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((zd(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = _u(r);
            if (!o) throw Error(N(90));
            Zg(r), zd(r, o);
          }
        }
      }
      break;
    case "textarea":
      ty(e, n);
      break;
    case "select":
      (t = n.value), t != null && di(e, !!n.multiple, t, !1);
  }
};
sy = Hp;
uy = bo;
var uw = { usingClientEntryPoint: !1, Events: [pl, Jo, _u, ay, ly, Hp] },
  ea = {
    findFiberByHostInstance: io,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  cw = {
    bundleType: ea.bundleType,
    version: ea.version,
    rendererPackageName: ea.rendererPackageName,
    rendererConfig: ea.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ea.findFiberByHostInstance || lw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yl.isDisabled && Yl.supportsFiber)
    try {
      (gu = Yl.inject(cw)), (Xn = Yl);
    } catch {}
}
on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uw;
on.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Jp(t)) throw Error(N(200));
  return aw(e, t, null, n);
};
on.createRoot = function (e, t) {
  if (!Jp(e)) throw Error(N(299));
  var n = !1,
    r = "",
    o = H0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Qp(e, 1, !1, null, null, n, !1, r, o)),
    (e[hr] = t.current),
    Ua(e.nodeType === 8 ? e.parentNode : e),
    new Xp(t)
  );
};
on.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = fy(t)), (e = e === null ? null : e.stateNode), e;
};
on.flushSync = function (e) {
  return bo(e);
};
on.hydrate = function (e, t, n) {
  if (!Tu(t)) throw Error(N(200));
  return $u(null, e, t, !0, n);
};
on.hydrateRoot = function (e, t, n) {
  if (!Jp(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = H0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = V0(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[hr] = t.current),
    Ua(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ou(t);
};
on.render = function (e, t, n) {
  if (!Tu(t)) throw Error(N(200));
  return $u(null, e, t, !1, n);
};
on.unmountComponentAtNode = function (e) {
  if (!Tu(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (bo(function () {
        $u(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[hr] = null);
        });
      }),
      !0)
    : !1;
};
on.unstable_batchedUpdates = Hp;
on.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Tu(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return $u(e, t, n, !1, r);
};
on.version = "18.2.0-next-9e3b772b8-20220608";
function K0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K0);
    } catch (e) {
      console.error(e);
    }
}
K0(), (Vg.exports = on);
var ml = Vg.exports;
const ma = Ag(ml),
  dw = Mg({ __proto__: null, default: ma }, [ml]);
var Km = ml;
(Ad.createRoot = Km.createRoot), (Ad.hydrateRoot = Km.hydrateRoot);
const fw = { black: "#000", white: "#fff" },
  Xa = fw,
  pw = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Do = pw,
  hw = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  zo = hw,
  mw = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Bo = mw,
  vw = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Uo = vw,
  gw = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Wo = gw,
  yw = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  ta = yw,
  bw = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  xw = bw;
function xo(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const _w = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: xo },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vl = "$$material";
function C() {
  return (
    (C = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    C.apply(this, arguments)
  );
}
function J(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function G0(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Sw =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  ww = G0(function (e) {
    return (
      Sw.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function Ew(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Cw(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Rw = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Cw(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Ew(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  kt = "-ms-",
  Js = "-moz-",
  we = "-webkit-",
  q0 = "comm",
  Zp = "rule",
  eh = "decl",
  kw = "@import",
  Q0 = "@keyframes",
  Pw = "@layer",
  Ow = Math.abs,
  Mu = String.fromCharCode,
  Tw = Object.assign;
function $w(e, t) {
  return xt(e, 0) ^ 45
    ? (((((((t << 2) ^ xt(e, 0)) << 2) ^ xt(e, 1)) << 2) ^ xt(e, 2)) << 2) ^
        xt(e, 3)
    : 0;
}
function Y0(e) {
  return e.trim();
}
function Mw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ee(e, t, n) {
  return e.replace(t, n);
}
function kf(e, t) {
  return e.indexOf(t);
}
function xt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ja(e, t, n) {
  return e.slice(t, n);
}
function Gn(e) {
  return e.length;
}
function th(e) {
  return e.length;
}
function Xl(e, t) {
  return t.push(e), e;
}
function Aw(e, t) {
  return e.map(t).join("");
}
var Au = 1,
  Ri = 1,
  X0 = 0,
  qt = 0,
  at = 0,
  Fi = "";
function Iu(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Au,
    column: Ri,
    length: a,
    return: "",
  };
}
function na(e, t) {
  return Tw(Iu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Iw() {
  return at;
}
function Nw() {
  return (
    (at = qt > 0 ? xt(Fi, --qt) : 0), Ri--, at === 10 && ((Ri = 1), Au--), at
  );
}
function tn() {
  return (
    (at = qt < X0 ? xt(Fi, qt++) : 0), Ri++, at === 10 && ((Ri = 1), Au++), at
  );
}
function Zn() {
  return xt(Fi, qt);
}
function gs() {
  return qt;
}
function gl(e, t) {
  return Ja(Fi, e, t);
}
function Za(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function J0(e) {
  return (Au = Ri = 1), (X0 = Gn((Fi = e))), (qt = 0), [];
}
function Z0(e) {
  return (Fi = ""), e;
}
function ys(e) {
  return Y0(gl(qt - 1, Pf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Lw(e) {
  for (; (at = Zn()) && at < 33; ) tn();
  return Za(e) > 2 || Za(at) > 3 ? "" : " ";
}
function jw(e, t) {
  for (
    ;
    --t &&
    tn() &&
    !(at < 48 || at > 102 || (at > 57 && at < 65) || (at > 70 && at < 97));

  );
  return gl(e, gs() + (t < 6 && Zn() == 32 && tn() == 32));
}
function Pf(e) {
  for (; tn(); )
    switch (at) {
      case e:
        return qt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Pf(at);
        break;
      case 40:
        e === 41 && Pf(e);
        break;
      case 92:
        tn();
        break;
    }
  return qt;
}
function Fw(e, t) {
  for (; tn() && e + at !== 57; ) if (e + at === 84 && Zn() === 47) break;
  return "/*" + gl(t, qt - 1) + "*" + Mu(e === 47 ? e : tn());
}
function Dw(e) {
  for (; !Za(Zn()); ) tn();
  return gl(e, qt);
}
function zw(e) {
  return Z0(bs("", null, null, null, [""], (e = J0(e)), 0, [0], e));
}
function bs(e, t, n, r, o, i, a, l, s) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      x = 0,
      y = 0,
      g = 1,
      S = 1,
      h = 1,
      p = 0,
      m = "",
      _ = o,
      E = i,
      b = r,
      w = m;
    S;

  )
    switch (((y = p), (p = tn()))) {
      case 40:
        if (y != 108 && xt(w, d - 1) == 58) {
          kf((w += Ee(ys(p), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += ys(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += Lw(y);
        break;
      case 92:
        w += jw(gs() - 1, 7);
        continue;
      case 47:
        switch (Zn()) {
          case 42:
          case 47:
            Xl(Bw(Fw(tn(), gs()), t, n), s);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * g:
        l[u++] = Gn(w) * h;
      case 125 * g:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            h == -1 && (w = Ee(w, /\f/g, "")),
              x > 0 &&
                Gn(w) - d &&
                Xl(
                  x > 32
                    ? qm(w + ";", r, n, d - 1)
                    : qm(Ee(w, " ", "") + ";", r, n, d - 2),
                  s
                );
            break;
          case 59:
            w += ";";
          default:
            if (
              (Xl((b = Gm(w, t, n, u, c, o, l, m, (_ = []), (E = []), d)), i),
              p === 123)
            )
              if (c === 0) bs(w, t, b, b, _, i, d, l, E);
              else
                switch (f === 99 && xt(w, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    bs(
                      e,
                      b,
                      b,
                      r && Xl(Gm(e, b, b, 0, 0, o, l, m, o, (_ = []), d), E),
                      o,
                      E,
                      d,
                      l,
                      r ? _ : E
                    );
                    break;
                  default:
                    bs(w, b, b, b, [""], E, 0, l, E);
                }
        }
        (u = c = x = 0), (g = h = 1), (m = w = ""), (d = a);
        break;
      case 58:
        (d = 1 + Gn(w)), (x = y);
      default:
        if (g < 1) {
          if (p == 123) --g;
          else if (p == 125 && g++ == 0 && Nw() == 125) continue;
        }
        switch (((w += Mu(p)), p * g)) {
          case 38:
            h = c > 0 ? 1 : ((w += "\f"), -1);
            break;
          case 44:
            (l[u++] = (Gn(w) - 1) * h), (h = 1);
            break;
          case 64:
            Zn() === 45 && (w += ys(tn())),
              (f = Zn()),
              (c = d = Gn((m = w += Dw(gs())))),
              p++;
            break;
          case 45:
            y === 45 && Gn(w) == 2 && (g = 0);
        }
    }
  return i;
}
function Gm(e, t, n, r, o, i, a, l, s, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], x = th(f), y = 0, g = 0, S = 0;
    y < r;
    ++y
  )
    for (var h = 0, p = Ja(e, d + 1, (d = Ow((g = a[y])))), m = e; h < x; ++h)
      (m = Y0(g > 0 ? f[h] + " " + p : Ee(p, /&\f/g, f[h]))) && (s[S++] = m);
  return Iu(e, t, n, o === 0 ? Zp : l, s, u, c);
}
function Bw(e, t, n) {
  return Iu(e, t, n, q0, Mu(Iw()), Ja(e, 2, -2), 0);
}
function qm(e, t, n, r) {
  return Iu(e, t, n, eh, Ja(e, 0, r), Ja(e, r + 1, -1), r);
}
function gi(e, t) {
  for (var n = "", r = th(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function Uw(e, t, n, r) {
  switch (e.type) {
    case Pw:
      if (e.children.length) break;
    case kw:
    case eh:
      return (e.return = e.return || e.value);
    case q0:
      return "";
    case Q0:
      return (e.return = e.value + "{" + gi(e.children, r) + "}");
    case Zp:
      e.value = e.props.join(",");
  }
  return Gn((n = gi(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Ww(e) {
  var t = th(e);
  return function (n, r, o, i) {
    for (var a = "", l = 0; l < t; l++) a += e[l](n, r, o, i) || "";
    return a;
  };
}
function Vw(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Hw = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Zn()), o === 38 && i === 12 && (n[r] = 1), !Za(i);

    )
      tn();
    return gl(t, qt);
  },
  Kw = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Za(o)) {
        case 0:
          o === 38 && Zn() === 12 && (n[r] = 1), (t[r] += Hw(qt - 1, n, r));
          break;
        case 2:
          t[r] += ys(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Zn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Mu(o);
      }
    while ((o = tn()));
    return t;
  },
  Gw = function (t, n) {
    return Z0(Kw(J0(t), n));
  },
  Qm = new WeakMap(),
  qw = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Qm.get(r)) &&
        !o
      ) {
        Qm.set(t, !0);
        for (
          var i = [], a = Gw(n, i), l = r.props, s = 0, u = 0;
          s < a.length;
          s++
        )
          for (var c = 0; c < l.length; c++, u++)
            t.props[u] = i[s] ? a[s].replace(/&\f/g, l[c]) : l[c] + " " + a[s];
      }
    }
  },
  Qw = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function e1(e, t) {
  switch ($w(e, t)) {
    case 5103:
      return we + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return we + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return we + e + Js + e + kt + e + e;
    case 6828:
    case 4268:
      return we + e + kt + e + e;
    case 6165:
      return we + e + kt + "flex-" + e + e;
    case 5187:
      return (
        we + e + Ee(e, /(\w+).+(:[^]+)/, we + "box-$1$2" + kt + "flex-$1$2") + e
      );
    case 5443:
      return we + e + kt + "flex-item-" + Ee(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        we +
        e +
        kt +
        "flex-line-pack" +
        Ee(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return we + e + kt + Ee(e, "shrink", "negative") + e;
    case 5292:
      return we + e + kt + Ee(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        we +
        "box-" +
        Ee(e, "-grow", "") +
        we +
        e +
        kt +
        Ee(e, "grow", "positive") +
        e
      );
    case 4554:
      return we + Ee(e, /([^-])(transform)/g, "$1" + we + "$2") + e;
    case 6187:
      return (
        Ee(
          Ee(Ee(e, /(zoom-|grab)/, we + "$1"), /(image-set)/, we + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return Ee(e, /(image-set\([^]*)/, we + "$1$`$1");
    case 4968:
      return (
        Ee(
          Ee(e, /(.+:)(flex-)?(.*)/, we + "box-pack:$3" + kt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        we +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ee(e, /(.+)-inline(.+)/, we + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Gn(e) - 1 - t > 6)
        switch (xt(e, t + 1)) {
          case 109:
            if (xt(e, t + 4) !== 45) break;
          case 102:
            return (
              Ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  we +
                  "$2-$3$1" +
                  Js +
                  (xt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~kf(e, "stretch")
              ? e1(Ee(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (xt(e, t + 1) !== 115) break;
    case 6444:
      switch (xt(e, Gn(e) - 3 - (~kf(e, "!important") && 10))) {
        case 107:
          return Ee(e, ":", ":" + we) + e;
        case 101:
          return (
            Ee(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                we +
                (xt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                we +
                "$2$3$1" +
                kt +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (xt(e, t + 11)) {
        case 114:
          return we + e + kt + Ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return we + e + kt + Ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return we + e + kt + Ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return we + e + kt + e + e;
  }
  return e;
}
var Yw = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case eh:
          t.return = e1(t.value, t.length);
          break;
        case Q0:
          return gi([na(t, { value: Ee(t.value, "@", "@" + we) })], o);
        case Zp:
          if (t.length)
            return Aw(t.props, function (i) {
              switch (Mw(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return gi(
                    [na(t, { props: [Ee(i, /:(read-\w+)/, ":" + Js + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return gi(
                    [
                      na(t, {
                        props: [Ee(i, /:(plac\w+)/, ":" + we + "input-$1")],
                      }),
                      na(t, { props: [Ee(i, /:(plac\w+)/, ":" + Js + "$1")] }),
                      na(t, { props: [Ee(i, /:(plac\w+)/, kt + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  Xw = [Yw],
  t1 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var S = g.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || Xw,
      i = {},
      a,
      l = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var S = g.getAttribute("data-emotion").split(" "), h = 1;
            h < S.length;
            h++
          )
            i[S[h]] = !0;
          l.push(g);
        }
      );
    var s,
      u = [qw, Qw];
    {
      var c,
        d = [
          Uw,
          Vw(function (g) {
            c.insert(g);
          }),
        ],
        f = Ww(u.concat(o, d)),
        x = function (S) {
          return gi(zw(S), f);
        };
      s = function (S, h, p, m) {
        (c = p),
          x(S ? S + "{" + h.styles + "}" : h.styles),
          m && (y.inserted[h.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new Rw({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return y.sheet.hydrate(l), y;
  },
  n1 = { exports: {} },
  Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vt = typeof Symbol == "function" && Symbol.for,
  nh = vt ? Symbol.for("react.element") : 60103,
  rh = vt ? Symbol.for("react.portal") : 60106,
  Nu = vt ? Symbol.for("react.fragment") : 60107,
  Lu = vt ? Symbol.for("react.strict_mode") : 60108,
  ju = vt ? Symbol.for("react.profiler") : 60114,
  Fu = vt ? Symbol.for("react.provider") : 60109,
  Du = vt ? Symbol.for("react.context") : 60110,
  oh = vt ? Symbol.for("react.async_mode") : 60111,
  zu = vt ? Symbol.for("react.concurrent_mode") : 60111,
  Bu = vt ? Symbol.for("react.forward_ref") : 60112,
  Uu = vt ? Symbol.for("react.suspense") : 60113,
  Jw = vt ? Symbol.for("react.suspense_list") : 60120,
  Wu = vt ? Symbol.for("react.memo") : 60115,
  Vu = vt ? Symbol.for("react.lazy") : 60116,
  Zw = vt ? Symbol.for("react.block") : 60121,
  eE = vt ? Symbol.for("react.fundamental") : 60117,
  tE = vt ? Symbol.for("react.responder") : 60118,
  nE = vt ? Symbol.for("react.scope") : 60119;
function ln(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case nh:
        switch (((e = e.type), e)) {
          case oh:
          case zu:
          case Nu:
          case ju:
          case Lu:
          case Uu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Du:
              case Bu:
              case Vu:
              case Wu:
              case Fu:
                return e;
              default:
                return t;
            }
        }
      case rh:
        return t;
    }
  }
}
function r1(e) {
  return ln(e) === zu;
}
Oe.AsyncMode = oh;
Oe.ConcurrentMode = zu;
Oe.ContextConsumer = Du;
Oe.ContextProvider = Fu;
Oe.Element = nh;
Oe.ForwardRef = Bu;
Oe.Fragment = Nu;
Oe.Lazy = Vu;
Oe.Memo = Wu;
Oe.Portal = rh;
Oe.Profiler = ju;
Oe.StrictMode = Lu;
Oe.Suspense = Uu;
Oe.isAsyncMode = function (e) {
  return r1(e) || ln(e) === oh;
};
Oe.isConcurrentMode = r1;
Oe.isContextConsumer = function (e) {
  return ln(e) === Du;
};
Oe.isContextProvider = function (e) {
  return ln(e) === Fu;
};
Oe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === nh;
};
Oe.isForwardRef = function (e) {
  return ln(e) === Bu;
};
Oe.isFragment = function (e) {
  return ln(e) === Nu;
};
Oe.isLazy = function (e) {
  return ln(e) === Vu;
};
Oe.isMemo = function (e) {
  return ln(e) === Wu;
};
Oe.isPortal = function (e) {
  return ln(e) === rh;
};
Oe.isProfiler = function (e) {
  return ln(e) === ju;
};
Oe.isStrictMode = function (e) {
  return ln(e) === Lu;
};
Oe.isSuspense = function (e) {
  return ln(e) === Uu;
};
Oe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Nu ||
    e === zu ||
    e === ju ||
    e === Lu ||
    e === Uu ||
    e === Jw ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Vu ||
        e.$$typeof === Wu ||
        e.$$typeof === Fu ||
        e.$$typeof === Du ||
        e.$$typeof === Bu ||
        e.$$typeof === eE ||
        e.$$typeof === tE ||
        e.$$typeof === nE ||
        e.$$typeof === Zw))
  );
};
Oe.typeOf = ln;
n1.exports = Oe;
var rE = n1.exports,
  o1 = rE,
  oE = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  iE = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  i1 = {};
i1[o1.ForwardRef] = oE;
i1[o1.Memo] = iE;
var aE = !0;
function lE(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var a1 = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || aE === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  l1 = function (t, n, r) {
    a1(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function sE(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var uE = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  cE = /[A-Z]|^ms/g,
  dE = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  s1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ym = function (t) {
    return t != null && typeof t != "boolean";
  },
  ud = G0(function (e) {
    return s1(e) ? e : e.replace(cE, "-$&").toLowerCase();
  }),
  Xm = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(dE, function (r, o, i) {
            return (qn = { name: o, styles: i, next: qn }), o;
          });
    }
    return uE[t] !== 1 && !s1(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function el(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (qn = { name: n.name, styles: n.styles, next: qn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (qn = { name: r.name, styles: r.styles, next: qn }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return fE(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = qn,
          a = n(e);
        return (qn = i), el(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var l = t[n];
  return l !== void 0 ? l : n;
}
function fE(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += el(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : Ym(a) && (r += ud(i) + ":" + Xm(i, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var l = 0; l < a.length; l++)
          Ym(a[l]) && (r += ud(i) + ":" + Xm(i, a[l]) + ";");
      else {
        var s = el(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += ud(i) + ":" + s + ";";
            break;
          }
          default:
            r += i + "{" + s + "}";
        }
      }
    }
  return r;
}
var Jm = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  qn,
  ih = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    qn = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += el(r, n, a)))
      : (i += a[0]);
    for (var l = 1; l < t.length; l++) (i += el(r, n, t[l])), o && (i += a[l]);
    Jm.lastIndex = 0;
    for (var s = "", u; (u = Jm.exec(i)) !== null; ) s += "-" + u[1];
    var c = sE(i) + s;
    return { name: c, styles: i, next: qn };
  },
  pE = function (t) {
    return t();
  },
  u1 = ks.useInsertionEffect ? ks.useInsertionEffect : !1,
  hE = u1 || pE,
  Zm = u1 || v.useLayoutEffect,
  c1 = v.createContext(typeof HTMLElement < "u" ? t1({ key: "css" }) : null),
  mE = c1.Provider,
  d1 = function (t) {
    return v.forwardRef(function (n, r) {
      var o = v.useContext(c1);
      return t(n, o, r);
    });
  },
  Hu = v.createContext({}),
  cd = { exports: {} },
  ev;
function f1() {
  return (
    ev ||
      ((ev = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = arguments[r];
                      for (var i in o)
                        Object.prototype.hasOwnProperty.call(o, i) &&
                          (n[i] = o[i]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(this, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(cd)),
    cd.exports
  );
}
f1();
var vE = d1(function (e, t) {
  var n = e.styles,
    r = ih([n], void 0, v.useContext(Hu)),
    o = v.useRef();
  return (
    Zm(
      function () {
        var i = t.key + "-global",
          a = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          l = !1,
          s = document.querySelector(
            'style[data-emotion="' + i + " " + r.name + '"]'
          );
        return (
          t.sheet.tags.length && (a.before = t.sheet.tags[0]),
          s !== null &&
            ((l = !0), s.setAttribute("data-emotion", i), a.hydrate([s])),
          (o.current = [a, l]),
          function () {
            a.flush();
          }
        );
      },
      [t]
    ),
    Zm(
      function () {
        var i = o.current,
          a = i[0],
          l = i[1];
        if (l) {
          i[1] = !1;
          return;
        }
        if ((r.next !== void 0 && l1(t, r.next, !0), a.tags.length)) {
          var s = a.tags[a.tags.length - 1].nextElementSibling;
          (a.before = s), a.flush();
        }
        t.insert("", r, a, !1);
      },
      [t, r.name]
    ),
    null
  );
});
function p1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ih(t);
}
var Ku = function () {
    var t = p1.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  gE = ww,
  yE = function (t) {
    return t !== "theme";
  },
  tv = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? gE : yE;
  },
  nv = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  bE = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      a1(n, r, o),
      hE(function () {
        return l1(n, r, o);
      }),
      null
    );
  },
  xE = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      a;
    n !== void 0 && ((i = n.label), (a = n.target));
    var l = nv(t, n, r),
      s = l || tv(o),
      u = !s("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, x = 1; x < f; x++) d.push(c[x], c[0][x]);
      }
      var y = d1(function (g, S, h) {
        var p = (u && g.as) || o,
          m = "",
          _ = [],
          E = g;
        if (g.theme == null) {
          E = {};
          for (var b in g) E[b] = g[b];
          E.theme = v.useContext(Hu);
        }
        typeof g.className == "string"
          ? (m = lE(S.registered, _, g.className))
          : g.className != null && (m = g.className + " ");
        var w = ih(d.concat(_), S.registered, E);
        (m += S.key + "-" + w.name), a !== void 0 && (m += " " + a);
        var P = u && l === void 0 ? tv(p) : s,
          $ = {};
        for (var M in g) (u && M === "as") || (P(M) && ($[M] = g[M]));
        return (
          ($.className = m),
          ($.ref = h),
          v.createElement(
            v.Fragment,
            null,
            v.createElement(bE, {
              cache: S,
              serialized: w,
              isStringTag: typeof p == "string",
            }),
            v.createElement(p, $)
          )
        );
      });
      return (
        (y.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = o),
        (y.__emotion_styles = d),
        (y.__emotion_forwardProp = l),
        Object.defineProperty(y, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (y.withComponent = function (g, S) {
          return e(g, C({}, n, S, { shouldForwardProp: nv(y, S, !0) })).apply(
            void 0,
            d
          );
        }),
        y
      );
    };
  },
  _E = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Of = xE.bind();
_E.forEach(function (e) {
  Of[e] = Of(e);
});
let Tf;
typeof document == "object" && (Tf = t1({ key: "css", prepend: !0 }));
function SE(e) {
  const { injectFirst: t, children: n } = e;
  return t && Tf ? k.jsx(mE, { value: Tf, children: n }) : n;
}
function wE(e) {
  return e == null || Object.keys(e).length === 0;
}
function h1(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(wE(o) ? n : o) : t;
  return k.jsx(vE, { styles: r });
}
function ah(e, t) {
  return Of(e, t);
}
const m1 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  EE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: h1,
        StyledEngineProvider: SE,
        ThemeContext: Hu,
        css: p1,
        default: ah,
        internal_processStyles: m1,
        keyframes: Ku,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function ar(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function v1(e) {
  if (!ar(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = v1(e[n]);
    }),
    t
  );
}
function Mt(e, t, n = { clone: !0 }) {
  const r = n.clone ? C({}, e) : e;
  return (
    ar(e) &&
      ar(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (ar(t[o]) && o in e && ar(e[o])
            ? (r[o] = Mt(e[o], t[o], n))
            : n.clone
            ? (r[o] = ar(t[o]) ? v1(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
const CE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Mt, isPlainObject: ar },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  RE = ["values", "unit", "step"],
  kE = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => C({}, n, { [r.key]: r.val }), {})
    );
  };
function g1(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = J(e, RE),
    i = kE(t),
    a = Object.keys(i);
  function l(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function s(f) {
    return `@media (max-width:${
      (typeof t[f] == "number" ? t[f] : f) - r / 100
    }${n})`;
  }
  function u(f, x) {
    const y = a.indexOf(x);
    return `@media (min-width:${
      typeof t[f] == "number" ? t[f] : f
    }${n}) and (max-width:${
      (y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : x) - r / 100
    }${n})`;
  }
  function c(f) {
    return a.indexOf(f) + 1 < a.length ? u(f, a[a.indexOf(f) + 1]) : l(f);
  }
  function d(f) {
    const x = a.indexOf(f);
    return x === 0
      ? l(a[1])
      : x === a.length - 1
      ? s(a[x])
      : u(f, a[a.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return C(
    {
      keys: a,
      values: i,
      up: l,
      down: s,
      between: u,
      only: c,
      not: d,
      unit: n,
    },
    o
  );
}
const PE = { borderRadius: 4 },
  OE = PE;
function ka(e, t) {
  return t ? Mt(e, t, { clone: !1 }) : e;
}
const lh = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  rv = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${lh[e]}px)`,
  };
function Bn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || rv;
    return t.reduce((a, l, s) => ((a[i.up(i.keys[s])] = n(t[s])), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || rv;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(i.values || lh).indexOf(l) !== -1) {
        const s = i.up(l);
        a[s] = n(t[l], l);
      } else {
        const s = l;
        a[s] = t[s];
      }
      return a;
    }, {});
  }
  return n(t);
}
function y1(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function b1(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function TE(e, ...t) {
  const n = y1(e),
    r = [n, ...t].reduce((o, i) => Mt(o, i), {});
  return b1(Object.keys(n), r);
}
function $E(e, t) {
  if (typeof e != "object") return {};
  const n = {},
    r = Object.keys(t);
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0);
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0);
        }),
    n
  );
}
function dd({ values: e, breakpoints: t, base: n }) {
  const r = n || $E(e, t),
    o = Object.keys(r);
  if (o.length === 0) return e;
  let i;
  return o.reduce(
    (a, l, s) => (
      Array.isArray(e)
        ? ((a[l] = e[s] != null ? e[s] : e[i]), (i = s))
        : typeof e == "object"
        ? ((a[l] = e[l] != null ? e[l] : e[i]), (i = l))
        : (a[l] = e),
      a
    ),
    {}
  );
}
function ae(e) {
  if (typeof e != "string") throw new Error(xo(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ME = Object.freeze(
  Object.defineProperty({ __proto__: null, default: ae }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Gu(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Zs(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Gu(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function ot(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (a) => {
      if (a[t] == null) return null;
      const l = a[t],
        s = a.theme,
        u = Gu(s, r) || {};
      return Bn(a, l, (d) => {
        let f = Zs(u, o, d);
        return (
          d === f &&
            typeof d == "string" &&
            (f = Zs(u, o, `${t}${d === "default" ? "" : ae(d)}`, d)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function AE(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const IE = { m: "margin", p: "padding" },
  NE = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  ov = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  LE = AE((e) => {
    if (e.length > 2)
      if (ov[e]) e = ov[e];
      else return [e];
    const [t, n] = e.split(""),
      r = IE[t],
      o = NE[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  sh = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  uh = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...sh, ...uh];
function yl(e, t, n, r) {
  var o;
  const i = (o = Gu(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (a) => (typeof a == "string" ? a : i * a)
    : Array.isArray(i)
    ? (a) => (typeof a == "string" ? a : i[a])
    : typeof i == "function"
    ? i
    : () => {};
}
function ch(e) {
  return yl(e, "spacing", 8);
}
function _o(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function jE(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = _o(t, n)), r), {});
}
function FE(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = LE(n),
    i = jE(o, r),
    a = e[n];
  return Bn(e, a, i);
}
function x1(e, t) {
  const n = ch(e.theme);
  return Object.keys(e)
    .map((r) => FE(e, t, r, n))
    .reduce(ka, {});
}
function Xe(e) {
  return x1(e, sh);
}
Xe.propTypes = {};
Xe.filterProps = sh;
function Je(e) {
  return x1(e, uh);
}
Je.propTypes = {};
Je.filterProps = uh;
function DE(e = 8) {
  if (e.mui) return e;
  const t = ch({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const a = t(i);
          return typeof a == "number" ? `${a}px` : a;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function qu(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? ka(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function vn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Rn(e, t) {
  return ot({ prop: e, themeKey: "borders", transform: t });
}
const zE = Rn("border", vn),
  BE = Rn("borderTop", vn),
  UE = Rn("borderRight", vn),
  WE = Rn("borderBottom", vn),
  VE = Rn("borderLeft", vn),
  HE = Rn("borderColor"),
  KE = Rn("borderTopColor"),
  GE = Rn("borderRightColor"),
  qE = Rn("borderBottomColor"),
  QE = Rn("borderLeftColor"),
  YE = Rn("outline", vn),
  XE = Rn("outlineColor"),
  Qu = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = yl(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: _o(t, r) });
      return Bn(e, e.borderRadius, n);
    }
    return null;
  };
Qu.propTypes = {};
Qu.filterProps = ["borderRadius"];
qu(zE, BE, UE, WE, VE, HE, KE, GE, qE, QE, Qu, YE, XE);
const Yu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = yl(e.theme, "spacing", 8),
      n = (r) => ({ gap: _o(t, r) });
    return Bn(e, e.gap, n);
  }
  return null;
};
Yu.propTypes = {};
Yu.filterProps = ["gap"];
const Xu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = yl(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: _o(t, r) });
    return Bn(e, e.columnGap, n);
  }
  return null;
};
Xu.propTypes = {};
Xu.filterProps = ["columnGap"];
const Ju = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = yl(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: _o(t, r) });
    return Bn(e, e.rowGap, n);
  }
  return null;
};
Ju.propTypes = {};
Ju.filterProps = ["rowGap"];
const JE = ot({ prop: "gridColumn" }),
  ZE = ot({ prop: "gridRow" }),
  eC = ot({ prop: "gridAutoFlow" }),
  tC = ot({ prop: "gridAutoColumns" }),
  nC = ot({ prop: "gridAutoRows" }),
  rC = ot({ prop: "gridTemplateColumns" }),
  oC = ot({ prop: "gridTemplateRows" }),
  iC = ot({ prop: "gridTemplateAreas" }),
  aC = ot({ prop: "gridArea" });
qu(Yu, Xu, Ju, JE, ZE, eC, tC, nC, rC, oC, iC, aC);
function yi(e, t) {
  return t === "grey" ? t : e;
}
const lC = ot({ prop: "color", themeKey: "palette", transform: yi }),
  sC = ot({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: yi,
  }),
  uC = ot({ prop: "backgroundColor", themeKey: "palette", transform: yi });
qu(lC, sC, uC);
function Jt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const cC = ot({ prop: "width", transform: Jt }),
  dh = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || lh[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: Jt(n) };
      };
      return Bn(e, e.maxWidth, t);
    }
    return null;
  };
dh.filterProps = ["maxWidth"];
const dC = ot({ prop: "minWidth", transform: Jt }),
  fC = ot({ prop: "height", transform: Jt }),
  pC = ot({ prop: "maxHeight", transform: Jt }),
  hC = ot({ prop: "minHeight", transform: Jt });
ot({ prop: "size", cssProperty: "width", transform: Jt });
ot({ prop: "size", cssProperty: "height", transform: Jt });
const mC = ot({ prop: "boxSizing" });
qu(cC, dh, dC, fC, pC, hC, mC);
const vC = {
    border: { themeKey: "borders", transform: vn },
    borderTop: { themeKey: "borders", transform: vn },
    borderRight: { themeKey: "borders", transform: vn },
    borderBottom: { themeKey: "borders", transform: vn },
    borderLeft: { themeKey: "borders", transform: vn },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: vn },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Qu },
    color: { themeKey: "palette", transform: yi },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: yi,
    },
    backgroundColor: { themeKey: "palette", transform: yi },
    p: { style: Je },
    pt: { style: Je },
    pr: { style: Je },
    pb: { style: Je },
    pl: { style: Je },
    px: { style: Je },
    py: { style: Je },
    padding: { style: Je },
    paddingTop: { style: Je },
    paddingRight: { style: Je },
    paddingBottom: { style: Je },
    paddingLeft: { style: Je },
    paddingX: { style: Je },
    paddingY: { style: Je },
    paddingInline: { style: Je },
    paddingInlineStart: { style: Je },
    paddingInlineEnd: { style: Je },
    paddingBlock: { style: Je },
    paddingBlockStart: { style: Je },
    paddingBlockEnd: { style: Je },
    m: { style: Xe },
    mt: { style: Xe },
    mr: { style: Xe },
    mb: { style: Xe },
    ml: { style: Xe },
    mx: { style: Xe },
    my: { style: Xe },
    margin: { style: Xe },
    marginTop: { style: Xe },
    marginRight: { style: Xe },
    marginBottom: { style: Xe },
    marginLeft: { style: Xe },
    marginX: { style: Xe },
    marginY: { style: Xe },
    marginInline: { style: Xe },
    marginInlineStart: { style: Xe },
    marginInlineEnd: { style: Xe },
    marginBlock: { style: Xe },
    marginBlockStart: { style: Xe },
    marginBlockEnd: { style: Xe },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Yu },
    rowGap: { style: Ju },
    columnGap: { style: Xu },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: Jt },
    maxWidth: { style: dh },
    minWidth: { transform: Jt },
    height: { transform: Jt },
    maxHeight: { transform: Jt },
    minHeight: { transform: Jt },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  bl = vC;
function gC(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function yC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _1() {
  function e(n, r, o, i) {
    const a = { [n]: r, theme: o },
      l = i[n];
    if (!l) return { [n]: r };
    const { cssProperty: s = n, themeKey: u, transform: c, style: d } = l;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const f = Gu(o, u) || {};
    return d
      ? d(a)
      : Bn(a, r, (y) => {
          let g = Zs(f, c, y);
          return (
            y === g &&
              typeof y == "string" &&
              (g = Zs(f, c, `${n}${y === "default" ? "" : ae(y)}`, y)),
            s === !1 ? g : { [s]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const a = (r = i.unstable_sxConfig) != null ? r : bl;
    function l(s) {
      let u = s;
      if (typeof s == "function") u = s(i);
      else if (typeof s != "object") return s;
      if (!u) return null;
      const c = y1(i.breakpoints),
        d = Object.keys(c);
      let f = c;
      return (
        Object.keys(u).forEach((x) => {
          const y = yC(u[x], i);
          if (y != null)
            if (typeof y == "object")
              if (a[x]) f = ka(f, e(x, y, i, a));
              else {
                const g = Bn({ theme: i }, y, (S) => ({ [x]: S }));
                gC(g, y) ? (f[x] = t({ sx: y, theme: i })) : (f = ka(f, g));
              }
            else f = ka(f, e(x, y, i, a));
        }),
        b1(d, f)
      );
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const S1 = _1();
S1.filterProps = ["sx"];
const xl = S1;
function w1(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const bC = ["breakpoints", "palette", "spacing", "shape"];
function _l(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    a = J(e, bC),
    l = g1(n),
    s = DE(o);
  let u = Mt(
    {
      breakpoints: l,
      direction: "ltr",
      components: {},
      palette: C({ mode: "light" }, r),
      spacing: s,
      shape: C({}, OE, i),
    },
    a
  );
  return (
    (u.applyStyles = w1),
    (u = t.reduce((c, d) => Mt(c, d), u)),
    (u.unstable_sxConfig = C({}, bl, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return xl({ sx: d, theme: this });
    }),
    u
  );
}
const xC = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: _l,
      private_createBreakpoints: g1,
      unstable_applyStyles: w1,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function _C(e) {
  return Object.keys(e).length === 0;
}
function SC(e = null) {
  const t = v.useContext(Hu);
  return !t || _C(t) ? e : t;
}
const wC = _l();
function Zu(e = wC) {
  return SC(e);
}
function EC({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = Zu(n),
    o = typeof e == "function" ? e((t && r[t]) || r) : e;
  return k.jsx(h1, { styles: o });
}
const CC = ["sx"],
  RC = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : bl;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function ec(e) {
  const { sx: t } = e,
    n = J(e, CC),
    { systemProps: r, otherProps: o } = RC(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...a) => {
          const l = t(...a);
          return ar(l) ? C({}, r, l) : r;
        })
      : (i = C({}, r, t)),
    C({}, o, { sx: i })
  );
}
const kC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: xl,
        extendSxProp: ec,
        unstable_createStyleFunctionSx: _1,
        unstable_defaultSxConfig: bl,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  iv = (e) => e,
  PC = () => {
    let e = iv;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = iv;
      },
    };
  },
  OC = PC(),
  E1 = OC;
function C1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = C1(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function le() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = C1(e)) && (r && (r += " "), (r += t));
  return r;
}
const TC = ["className", "component"];
function $C(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = ah("div", {
      shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as",
    })(xl);
  return v.forwardRef(function (s, u) {
    const c = Zu(n),
      d = ec(s),
      { className: f, component: x = "div" } = d,
      y = J(d, TC);
    return k.jsx(
      i,
      C(
        {
          as: x,
          ref: u,
          className: le(f, o ? o(r) : r),
          theme: (t && c[t]) || c,
        },
        y
      )
    );
  });
}
const MC = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function Te(e, t, n = "Mui") {
  const r = MC[t];
  return r ? `${n}-${r}` : `${E1.generate(e)}-${t}`;
}
function $e(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = Te(e, o, n);
    }),
    r
  );
}
var R1 = { exports: {} },
  Me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fh = Symbol.for("react.element"),
  ph = Symbol.for("react.portal"),
  tc = Symbol.for("react.fragment"),
  nc = Symbol.for("react.strict_mode"),
  rc = Symbol.for("react.profiler"),
  oc = Symbol.for("react.provider"),
  ic = Symbol.for("react.context"),
  AC = Symbol.for("react.server_context"),
  ac = Symbol.for("react.forward_ref"),
  lc = Symbol.for("react.suspense"),
  sc = Symbol.for("react.suspense_list"),
  uc = Symbol.for("react.memo"),
  cc = Symbol.for("react.lazy"),
  IC = Symbol.for("react.offscreen"),
  k1;
k1 = Symbol.for("react.module.reference");
function kn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case fh:
        switch (((e = e.type), e)) {
          case tc:
          case rc:
          case nc:
          case lc:
          case sc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case AC:
              case ic:
              case ac:
              case cc:
              case uc:
              case oc:
                return e;
              default:
                return t;
            }
        }
      case ph:
        return t;
    }
  }
}
Me.ContextConsumer = ic;
Me.ContextProvider = oc;
Me.Element = fh;
Me.ForwardRef = ac;
Me.Fragment = tc;
Me.Lazy = cc;
Me.Memo = uc;
Me.Portal = ph;
Me.Profiler = rc;
Me.StrictMode = nc;
Me.Suspense = lc;
Me.SuspenseList = sc;
Me.isAsyncMode = function () {
  return !1;
};
Me.isConcurrentMode = function () {
  return !1;
};
Me.isContextConsumer = function (e) {
  return kn(e) === ic;
};
Me.isContextProvider = function (e) {
  return kn(e) === oc;
};
Me.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === fh;
};
Me.isForwardRef = function (e) {
  return kn(e) === ac;
};
Me.isFragment = function (e) {
  return kn(e) === tc;
};
Me.isLazy = function (e) {
  return kn(e) === cc;
};
Me.isMemo = function (e) {
  return kn(e) === uc;
};
Me.isPortal = function (e) {
  return kn(e) === ph;
};
Me.isProfiler = function (e) {
  return kn(e) === rc;
};
Me.isStrictMode = function (e) {
  return kn(e) === nc;
};
Me.isSuspense = function (e) {
  return kn(e) === lc;
};
Me.isSuspenseList = function (e) {
  return kn(e) === sc;
};
Me.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === tc ||
    e === rc ||
    e === nc ||
    e === lc ||
    e === sc ||
    e === IC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === cc ||
        e.$$typeof === uc ||
        e.$$typeof === oc ||
        e.$$typeof === ic ||
        e.$$typeof === ac ||
        e.$$typeof === k1 ||
        e.getModuleId !== void 0))
  );
};
Me.typeOf = kn;
R1.exports = Me;
var av = R1.exports;
const NC = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function P1(e) {
  const t = `${e}`.match(NC);
  return (t && t[1]) || "";
}
function O1(e, t = "") {
  return e.displayName || e.name || P1(e) || t;
}
function lv(e, t, n) {
  const r = O1(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function LC(e) {
  if (e != null) {
    if (typeof e == "string") return e;
    if (typeof e == "function") return O1(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case av.ForwardRef:
          return lv(e, e.render, "ForwardRef");
        case av.Memo:
          return lv(e, e.type, "memo");
        default:
          return;
      }
  }
}
const jC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: LC, getFunctionName: P1 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  FC = ["ownerState"],
  DC = ["variants"],
  zC = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function BC(e) {
  return Object.keys(e).length === 0;
}
function UC(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function fd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const WC = _l(),
  VC = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Jl({ defaultTheme: e, theme: t, themeId: n }) {
  return BC(t) ? e : t[n] || t;
}
function HC(e) {
  return e ? (t, n) => n[e] : null;
}
function xs(e, t) {
  let { ownerState: n } = t,
    r = J(t, FC);
  const o = typeof e == "function" ? e(C({ ownerState: n }, r)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => xs(i, C({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let l = J(o, DC);
    return (
      i.forEach((s) => {
        let u = !0;
        typeof s.props == "function"
          ? (u = s.props(C({ ownerState: n }, r, n)))
          : Object.keys(s.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== s.props[c] &&
                r[c] !== s.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(l) || (l = [l]),
            l.push(
              typeof s.style == "function"
                ? s.style(C({ ownerState: n }, r, n))
                : s.style
            ));
      }),
      l
    );
  }
  return o;
}
function KC(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = WC,
      rootShouldForwardProp: r = fd,
      slotShouldForwardProp: o = fd,
    } = e,
    i = (a) =>
      xl(C({}, a, { theme: Jl(C({}, a, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (a, l = {}) => {
      m1(a, (E) => E.filter((b) => !(b != null && b.__mui_systemSx)));
      const {
          name: s,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: f = HC(VC(u)),
        } = l,
        x = J(l, zC),
        y = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        g = d || !1;
      let S,
        h = fd;
      u === "Root" || u === "root"
        ? (h = r)
        : u
        ? (h = o)
        : UC(a) && (h = void 0);
      const p = ah(a, C({ shouldForwardProp: h, label: S }, x)),
        m = (E) =>
          (typeof E == "function" && E.__emotion_real !== E) || ar(E)
            ? (b) =>
                xs(
                  E,
                  C({}, b, {
                    theme: Jl({ theme: b.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : E,
        _ = (E, ...b) => {
          let w = m(E);
          const P = b ? b.map(m) : [];
          s &&
            f &&
            P.push((I) => {
              const j = Jl(C({}, I, { defaultTheme: n, themeId: t }));
              if (
                !j.components ||
                !j.components[s] ||
                !j.components[s].styleOverrides
              )
                return null;
              const F = j.components[s].styleOverrides,
                D = {};
              return (
                Object.entries(F).forEach(([U, V]) => {
                  D[U] = xs(V, C({}, I, { theme: j }));
                }),
                f(I, D)
              );
            }),
            s &&
              !y &&
              P.push((I) => {
                var j;
                const F = Jl(C({}, I, { defaultTheme: n, themeId: t })),
                  D =
                    F == null ||
                    (j = F.components) == null ||
                    (j = j[s]) == null
                      ? void 0
                      : j.variants;
                return xs({ variants: D }, C({}, I, { theme: F }));
              }),
            g || P.push(i);
          const $ = P.length - b.length;
          if (Array.isArray(E) && $ > 0) {
            const I = new Array($).fill("");
            (w = [...E, ...I]), (w.raw = [...E.raw, ...I]);
          }
          const M = p(w, ...P);
          return a.muiName && (M.muiName = a.muiName), M;
        };
      return p.withConfig && (_.withConfig = p.withConfig), _;
    }
  );
}
const GC = KC();
function hh(e, t) {
  const n = C({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = C({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = C({}, i)),
              Object.keys(o).forEach((a) => {
                n[r][a] = hh(o[a], i[a]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function qC(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : hh(t.components[n].defaultProps, r);
}
function T1({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = Zu(n);
  return r && (o = o[r] || o), qC({ theme: o, name: t, props: e });
}
const So = typeof window < "u" ? v.useLayoutEffect : v.useEffect;
function QC(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const YC = Object.freeze(
  Object.defineProperty({ __proto__: null, default: QC }, Symbol.toStringTag, {
    value: "Module",
  })
);
function $f(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function $1(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function pd(e, t) {
  var n, r;
  return (
    v.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
          (r = r._payload) == null ||
          (r = r.value) == null
        ? void 0
        : r.muiName
    ) !== -1
  );
}
function nn(e) {
  return (e && e.ownerDocument) || document;
}
function wo(e) {
  return nn(e).defaultView || window;
}
function Mf(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let sv = 0;
function XC(e) {
  const [t, n] = v.useState(e),
    r = e || t;
  return (
    v.useEffect(() => {
      t == null && ((sv += 1), n(`mui-${sv}`));
    }, [t]),
    r
  );
}
const uv = ks.useId;
function mh(e) {
  if (uv !== void 0) {
    const t = uv();
    return e ?? t;
  }
  return XC(e);
}
function eu({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = v.useRef(e !== void 0),
    [i, a] = v.useState(t),
    l = o ? e : i,
    s = v.useCallback((u) => {
      o || a(u);
    }, []);
  return [l, s];
}
function ii(e) {
  const t = v.useRef(e);
  return (
    So(() => {
      t.current = e;
    }),
    v.useRef((...n) => (0, t.current)(...n)).current
  );
}
function At(...e) {
  return v.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Mf(n, t);
            });
          },
    e
  );
}
const cv = {};
function JC(e, t) {
  const n = v.useRef(cv);
  return n.current === cv && (n.current = e(t)), n;
}
const ZC = [];
function eR(e) {
  v.useEffect(e, ZC);
}
class dc {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new dc();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function M1() {
  const e = JC(dc.create).current;
  return eR(e.disposeEffect), e;
}
let fc = !0,
  Af = !1;
const tR = new dc(),
  nR = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function rR(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && nR[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function oR(e) {
  e.metaKey || e.altKey || e.ctrlKey || (fc = !0);
}
function hd() {
  fc = !1;
}
function iR() {
  this.visibilityState === "hidden" && Af && (fc = !0);
}
function aR(e) {
  e.addEventListener("keydown", oR, !0),
    e.addEventListener("mousedown", hd, !0),
    e.addEventListener("pointerdown", hd, !0),
    e.addEventListener("touchstart", hd, !0),
    e.addEventListener("visibilitychange", iR, !0);
}
function lR(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return fc || rR(t);
}
function sR() {
  const e = v.useCallback((o) => {
      o != null && aR(o.ownerDocument);
    }, []),
    t = v.useRef(!1);
  function n() {
    return t.current
      ? ((Af = !0),
        tR.start(100, () => {
          Af = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return lR(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function A1(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Le(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, a) => {
          if (a) {
            const l = t(a);
            l !== "" && i.push(l), n && n[a] && i.push(n[a]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const uR = v.createContext(),
  cR = () => {
    const e = v.useContext(uR);
    return e ?? !1;
  },
  dR = [
    "component",
    "direction",
    "spacing",
    "divider",
    "children",
    "className",
    "useFlexGap",
  ],
  fR = _l(),
  pR = GC("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  });
function hR(e) {
  return T1({ props: e, name: "MuiStack", defaultTheme: fR });
}
function mR(e, t) {
  const n = v.Children.toArray(e).filter(Boolean);
  return n.reduce(
    (r, o, i) => (
      r.push(o),
      i < n.length - 1 && r.push(v.cloneElement(t, { key: `separator-${i}` })),
      r
    ),
    []
  );
}
const vR = (e) =>
    ({
      row: "Left",
      "row-reverse": "Right",
      column: "Top",
      "column-reverse": "Bottom",
    }[e]),
  gR = ({ ownerState: e, theme: t }) => {
    let n = C(
      { display: "flex", flexDirection: "column" },
      Bn(
        { theme: t },
        dd({ values: e.direction, breakpoints: t.breakpoints.values }),
        (r) => ({ flexDirection: r })
      )
    );
    if (e.spacing) {
      const r = ch(t),
        o = Object.keys(t.breakpoints.values).reduce(
          (s, u) => (
            ((typeof e.spacing == "object" && e.spacing[u] != null) ||
              (typeof e.direction == "object" && e.direction[u] != null)) &&
              (s[u] = !0),
            s
          ),
          {}
        ),
        i = dd({ values: e.direction, base: o }),
        a = dd({ values: e.spacing, base: o });
      typeof i == "object" &&
        Object.keys(i).forEach((s, u, c) => {
          if (!i[s]) {
            const f = u > 0 ? i[c[u - 1]] : "column";
            i[s] = f;
          }
        }),
        (n = Mt(
          n,
          Bn({ theme: t }, a, (s, u) =>
            e.useFlexGap
              ? { gap: _o(r, s) }
              : {
                  "& > :not(style):not(style)": { margin: 0 },
                  "& > :not(style) ~ :not(style)": {
                    [`margin${vR(u ? i[u] : e.direction)}`]: _o(r, s),
                  },
                }
          )
        ));
    }
    return (n = TE(t.breakpoints, n)), n;
  };
function yR(e = {}) {
  const {
      createStyledComponent: t = pR,
      useThemeProps: n = hR,
      componentName: r = "MuiStack",
    } = e,
    o = () => Le({ root: ["root"] }, (s) => Te(r, s), {}),
    i = t(gR);
  return v.forwardRef(function (s, u) {
    const c = n(s),
      d = ec(c),
      {
        component: f = "div",
        direction: x = "column",
        spacing: y = 0,
        divider: g,
        children: S,
        className: h,
        useFlexGap: p = !1,
      } = d,
      m = J(d, dR),
      _ = { direction: x, spacing: y, useFlexGap: p },
      E = o();
    return k.jsx(
      i,
      C({ as: f, ownerState: _, ref: u, className: le(E.root, h) }, m, {
        children: g ? mR(S, g) : S,
      })
    );
  });
}
function bR(e, t) {
  return C(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
var it = {},
  I1 = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(I1);
var N1 = I1.exports;
const xR = Gr(_w),
  _R = Gr(YC);
var L1 = N1;
Object.defineProperty(it, "__esModule", { value: !0 });
var Ir = (it.alpha = z1);
it.blend = IR;
it.colorChannel = void 0;
var SR = (it.darken = gh);
it.decomposeColor = Cn;
it.emphasize = B1;
var wR = (it.getContrastRatio = OR);
it.getLuminance = tu;
it.hexToRgb = j1;
it.hslToRgb = D1;
var ER = (it.lighten = yh);
it.private_safeAlpha = TR;
it.private_safeColorChannel = void 0;
it.private_safeDarken = $R;
it.private_safeEmphasize = AR;
it.private_safeLighten = MR;
it.recomposeColor = Di;
it.rgbToHex = PR;
var dv = L1(xR),
  CR = L1(_R);
function vh(e, t = 0, n = 1) {
  return (0, CR.default)(e, t, n);
}
function j1(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function RR(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Cn(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Cn(j1(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, dv.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error((0, dv.default)(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
const F1 = (e) => {
  const t = Cn(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n))
    .join(" ");
};
it.colorChannel = F1;
const kR = (e, t) => {
  try {
    return F1(e);
  } catch {
    return e;
  }
};
it.private_safeColorChannel = kR;
function Di(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function PR(e) {
  if (e.indexOf("#") === 0) return e;
  const { values: t } = Cn(e);
  return `#${t.map((n, r) => RR(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function D1(e) {
  e = Cn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    a = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let l = "rgb";
  const s = [
    Math.round(a(0) * 255),
    Math.round(a(8) * 255),
    Math.round(a(4) * 255),
  ];
  return (
    e.type === "hsla" && ((l += "a"), s.push(t[3])), Di({ type: l, values: s })
  );
}
function tu(e) {
  e = Cn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Cn(D1(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function OR(e, t) {
  const n = tu(e),
    r = tu(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function z1(e, t) {
  return (
    (e = Cn(e)),
    (t = vh(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Di(e)
  );
}
function TR(e, t, n) {
  try {
    return z1(e, t);
  } catch {
    return e;
  }
}
function gh(e, t) {
  if (((e = Cn(e)), (t = vh(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Di(e);
}
function $R(e, t, n) {
  try {
    return gh(e, t);
  } catch {
    return e;
  }
}
function yh(e, t) {
  if (((e = Cn(e)), (t = vh(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Di(e);
}
function MR(e, t, n) {
  try {
    return yh(e, t);
  } catch {
    return e;
  }
}
function B1(e, t = 0.15) {
  return tu(e) > 0.5 ? gh(e, t) : yh(e, t);
}
function AR(e, t, n) {
  try {
    return B1(e, t);
  } catch {
    return e;
  }
}
function IR(e, t, n, r = 1) {
  const o = (s, u) =>
      Math.round((s ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    i = Cn(e),
    a = Cn(t),
    l = [
      o(i.values[0], a.values[0]),
      o(i.values[1], a.values[1]),
      o(i.values[2], a.values[2]),
    ];
  return Di({ type: "rgb", values: l });
}
const NR = ["mode", "contrastThreshold", "tonalOffset"],
  fv = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Xa.white, default: Xa.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  md = {
    text: {
      primary: Xa.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Xa.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function pv(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = ER(e.main, o))
      : t === "dark" && (e.dark = SR(e.main, i)));
}
function LR(e = "light") {
  return e === "dark"
    ? { main: Bo[200], light: Bo[50], dark: Bo[400] }
    : { main: Bo[700], light: Bo[400], dark: Bo[800] };
}
function jR(e = "light") {
  return e === "dark"
    ? { main: zo[200], light: zo[50], dark: zo[400] }
    : { main: zo[500], light: zo[300], dark: zo[700] };
}
function FR(e = "light") {
  return e === "dark"
    ? { main: Do[500], light: Do[300], dark: Do[700] }
    : { main: Do[700], light: Do[400], dark: Do[800] };
}
function DR(e = "light") {
  return e === "dark"
    ? { main: Uo[400], light: Uo[300], dark: Uo[700] }
    : { main: Uo[700], light: Uo[500], dark: Uo[900] };
}
function zR(e = "light") {
  return e === "dark"
    ? { main: Wo[400], light: Wo[300], dark: Wo[700] }
    : { main: Wo[800], light: Wo[500], dark: Wo[900] };
}
function BR(e = "light") {
  return e === "dark"
    ? { main: ta[400], light: ta[300], dark: ta[700] }
    : { main: "#ed6c02", light: ta[500], dark: ta[900] };
}
function UR(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = J(e, NR),
    i = e.primary || LR(t),
    a = e.secondary || jR(t),
    l = e.error || FR(t),
    s = e.info || DR(t),
    u = e.success || zR(t),
    c = e.warning || BR(t);
  function d(g) {
    return wR(g, md.text.primary) >= n ? md.text.primary : fv.text.primary;
  }
  const f = ({
      color: g,
      name: S,
      mainShade: h = 500,
      lightShade: p = 300,
      darkShade: m = 700,
    }) => {
      if (
        ((g = C({}, g)),
        !g.main && g[h] && (g.main = g[h]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(xo(11, S ? ` (${S})` : "", h));
      if (typeof g.main != "string")
        throw new Error(xo(12, S ? ` (${S})` : "", JSON.stringify(g.main)));
      return (
        pv(g, "light", p, r),
        pv(g, "dark", m, r),
        g.contrastText || (g.contrastText = d(g.main)),
        g
      );
    },
    x = { dark: md, light: fv };
  return Mt(
    C(
      {
        common: C({}, Xa),
        mode: t,
        primary: f({ color: i, name: "primary" }),
        secondary: f({
          color: a,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: l, name: "error" }),
        warning: f({ color: c, name: "warning" }),
        info: f({ color: s, name: "info" }),
        success: f({ color: u, name: "success" }),
        grey: xw,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: f,
        tonalOffset: r,
      },
      x[t]
    ),
    o
  );
}
const WR = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function VR(e) {
  return Math.round(e * 1e5) / 1e5;
}
const hv = { textTransform: "uppercase" },
  mv = '"Roboto", "Helvetica", "Arial", sans-serif';
function HR(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = mv,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: l = 500,
      fontWeightBold: s = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: d,
    } = n,
    f = J(n, WR),
    x = o / 14,
    y = d || ((h) => `${(h / u) * x}rem`),
    g = (h, p, m, _, E) =>
      C(
        { fontFamily: r, fontWeight: h, fontSize: y(p), lineHeight: m },
        r === mv ? { letterSpacing: `${VR(_ / p)}em` } : {},
        E,
        c
      ),
    S = {
      h1: g(i, 96, 1.167, -1.5),
      h2: g(i, 60, 1.2, -0.5),
      h3: g(a, 48, 1.167, 0),
      h4: g(a, 34, 1.235, 0.25),
      h5: g(a, 24, 1.334, 0),
      h6: g(l, 20, 1.6, 0.15),
      subtitle1: g(a, 16, 1.75, 0.15),
      subtitle2: g(l, 14, 1.57, 0.1),
      body1: g(a, 16, 1.5, 0.15),
      body2: g(a, 14, 1.43, 0.15),
      button: g(l, 14, 1.75, 0.4, hv),
      caption: g(a, 12, 1.66, 0.4),
      overline: g(a, 12, 2.66, 1, hv),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Mt(
    C(
      {
        htmlFontSize: u,
        pxToRem: y,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: a,
        fontWeightMedium: l,
        fontWeightBold: s,
      },
      S
    ),
    f,
    { clone: !1 }
  );
}
const KR = 0.2,
  GR = 0.14,
  qR = 0.12;
function We(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${KR})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${GR})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${qR})`,
  ].join(",");
}
const QR = [
    "none",
    We(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    We(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    We(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    We(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    We(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    We(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    We(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    We(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    We(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    We(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    We(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    We(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    We(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    We(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    We(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    We(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    We(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    We(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    We(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    We(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    We(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    We(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    We(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    We(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  YR = ["duration", "easing", "delay"],
  XR = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  JR = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function vv(e) {
  return `${Math.round(e)}ms`;
}
function ZR(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function ek(e) {
  const t = C({}, XR, e.easing),
    n = C({}, JR, e.duration);
  return C(
    {
      getAutoHeightDuration: ZR,
      create: (o = ["all"], i = {}) => {
        const {
          duration: a = n.standard,
          easing: l = t.easeInOut,
          delay: s = 0,
        } = i;
        return (
          J(i, YR),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof a == "string" ? a : vv(a)} ${l} ${
                  typeof s == "string" ? s : vv(s)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const tk = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  nk = tk,
  rk = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function U1(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    a = J(e, rk);
  if (e.vars) throw new Error(xo(18));
  const l = UR(r),
    s = _l(e);
  let u = Mt(s, {
    mixins: bR(s.breakpoints, n),
    palette: l,
    shadows: QR.slice(),
    typography: HR(l, i),
    transitions: ek(o),
    zIndex: C({}, nk),
  });
  return (
    (u = Mt(u, a)),
    (u = t.reduce((c, d) => Mt(c, d), u)),
    (u.unstable_sxConfig = C({}, bl, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return xl({ sx: d, theme: this });
    }),
    u
  );
}
const ok = U1(),
  pc = ok;
function W1() {
  const e = Zu(pc);
  return e[vl] || e;
}
function De({ props: e, name: t }) {
  return T1({ props: e, name: t, defaultTheme: pc, themeId: vl });
}
var Sl = {},
  vd = { exports: {} },
  gv;
function ik() {
  return (
    gv ||
      ((gv = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var o = {},
            i = Object.keys(n),
            a,
            l;
          for (l = 0; l < i.length; l++)
            (a = i[l]), !(r.indexOf(a) >= 0) && (o[a] = n[a]);
          return o;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(vd)),
    vd.exports
  );
}
const ak = Gr(EE),
  lk = Gr(CE),
  sk = Gr(ME),
  uk = Gr(jC),
  ck = Gr(xC),
  dk = Gr(kC);
var zi = N1;
Object.defineProperty(Sl, "__esModule", { value: !0 });
var fk = (Sl.default = Ck);
Sl.shouldForwardProp = _s;
Sl.systemDefaultTheme = void 0;
var dn = zi(f1()),
  If = zi(ik()),
  yv = bk(ak),
  pk = lk;
zi(sk);
zi(uk);
var hk = zi(ck),
  mk = zi(dk);
const vk = ["ownerState"],
  gk = ["variants"],
  yk = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function V1(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (V1 = function (r) {
    return r ? n : t;
  })(e);
}
function bk(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = V1(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, i, a) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function xk(e) {
  return Object.keys(e).length === 0;
}
function _k(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function _s(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Sk = (Sl.systemDefaultTheme = (0, hk.default)()),
  wk = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Zl({ defaultTheme: e, theme: t, themeId: n }) {
  return xk(t) ? e : t[n] || t;
}
function Ek(e) {
  return e ? (t, n) => n[e] : null;
}
function Ss(e, t) {
  let { ownerState: n } = t,
    r = (0, If.default)(t, vk);
  const o =
    typeof e == "function" ? e((0, dn.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => Ss(i, (0, dn.default)({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let l = (0, If.default)(o, gk);
    return (
      i.forEach((s) => {
        let u = !0;
        typeof s.props == "function"
          ? (u = s.props((0, dn.default)({ ownerState: n }, r, n)))
          : Object.keys(s.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== s.props[c] &&
                r[c] !== s.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(l) || (l = [l]),
            l.push(
              typeof s.style == "function"
                ? s.style((0, dn.default)({ ownerState: n }, r, n))
                : s.style
            ));
      }),
      l
    );
  }
  return o;
}
function Ck(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = Sk,
      rootShouldForwardProp: r = _s,
      slotShouldForwardProp: o = _s,
    } = e,
    i = (a) =>
      (0, mk.default)(
        (0, dn.default)({}, a, {
          theme: Zl((0, dn.default)({}, a, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (i.__mui_systemSx = !0),
    (a, l = {}) => {
      (0, yv.internal_processStyles)(a, (E) =>
        E.filter((b) => !(b != null && b.__mui_systemSx))
      );
      const {
          name: s,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: f = Ek(wk(u)),
        } = l,
        x = (0, If.default)(l, yk),
        y = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        g = d || !1;
      let S,
        h = _s;
      u === "Root" || u === "root"
        ? (h = r)
        : u
        ? (h = o)
        : _k(a) && (h = void 0);
      const p = (0, yv.default)(
          a,
          (0, dn.default)({ shouldForwardProp: h, label: S }, x)
        ),
        m = (E) =>
          (typeof E == "function" && E.__emotion_real !== E) ||
          (0, pk.isPlainObject)(E)
            ? (b) =>
                Ss(
                  E,
                  (0, dn.default)({}, b, {
                    theme: Zl({ theme: b.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : E,
        _ = (E, ...b) => {
          let w = m(E);
          const P = b ? b.map(m) : [];
          s &&
            f &&
            P.push((I) => {
              const j = Zl(
                (0, dn.default)({}, I, { defaultTheme: n, themeId: t })
              );
              if (
                !j.components ||
                !j.components[s] ||
                !j.components[s].styleOverrides
              )
                return null;
              const F = j.components[s].styleOverrides,
                D = {};
              return (
                Object.entries(F).forEach(([U, V]) => {
                  D[U] = Ss(V, (0, dn.default)({}, I, { theme: j }));
                }),
                f(I, D)
              );
            }),
            s &&
              !y &&
              P.push((I) => {
                var j;
                const F = Zl(
                    (0, dn.default)({}, I, { defaultTheme: n, themeId: t })
                  ),
                  D =
                    F == null ||
                    (j = F.components) == null ||
                    (j = j[s]) == null
                      ? void 0
                      : j.variants;
                return Ss(
                  { variants: D },
                  (0, dn.default)({}, I, { theme: F })
                );
              }),
            g || P.push(i);
          const $ = P.length - b.length;
          if (Array.isArray(E) && $ > 0) {
            const I = new Array($).fill("");
            (w = [...E, ...I]), (w.raw = [...E.raw, ...I]);
          }
          const M = p(w, ...P);
          return a.muiName && (M.muiName = a.muiName), M;
        };
      return p.withConfig && (_.withConfig = p.withConfig), _;
    }
  );
}
function H1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Lt = (e) => H1(e) && e !== "classes",
  Q = fk({ themeId: vl, defaultTheme: pc, rootShouldForwardProp: Lt }),
  bv = (e) => {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  };
function Rk(e) {
  return Te("MuiSvgIcon", e);
}
$e("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const kk = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  Pk = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${ae(t)}`, `fontSize${ae(n)}`],
      };
    return Le(o, Rk, r);
  },
  Ok = Q("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${ae(n.color)}`],
        t[`fontSize${ae(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, a, l, s, u, c, d, f, x, y;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (a = i.pxToRem) == null
            ? void 0
            : a.call(i, 20)) || "1.25rem",
        medium:
          ((l = e.typography) == null || (s = l.pxToRem) == null
            ? void 0
            : s.call(l, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (c = u.pxToRem) == null
            ? void 0
            : c.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (d =
          (f = (e.vars || e).palette) == null || (f = f[t.color]) == null
            ? void 0
            : f.main) != null
          ? d
          : {
              action:
                (x = (e.vars || e).palette) == null || (x = x.action) == null
                  ? void 0
                  : x.active,
              disabled:
                (y = (e.vars || e).palette) == null || (y = y.action) == null
                  ? void 0
                  : y.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Nf = v.forwardRef(function (t, n) {
    const r = De({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: a = "inherit",
        component: l = "svg",
        fontSize: s = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: d,
        viewBox: f = "0 0 24 24",
      } = r,
      x = J(r, kk),
      y = v.isValidElement(o) && o.type === "svg",
      g = C({}, r, {
        color: a,
        component: l,
        fontSize: s,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: f,
        hasSvgAsChild: y,
      }),
      S = {};
    c || (S.viewBox = f);
    const h = Pk(g);
    return k.jsxs(
      Ok,
      C(
        {
          as: l,
          className: le(h.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": d ? void 0 : !0,
          role: d ? "img" : void 0,
          ref: n,
        },
        S,
        x,
        y && o.props,
        {
          ownerState: g,
          children: [
            y ? o.props.children : o,
            d ? k.jsx("title", { children: d }) : null,
          ],
        }
      )
    );
  });
Nf.muiName = "SvgIcon";
function Bi(e, t) {
  function n(r, o) {
    return k.jsx(
      Nf,
      C({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = Nf.muiName), v.memo(v.forwardRef(n));
}
function Lf(e, t) {
  return (
    (Lf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Lf(e, t)
  );
}
function K1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Lf(e, t);
}
const xv = { disabled: !1 },
  nu = Wt.createContext(null);
var Tk = function (t) {
    return t.scrollTop;
  },
  va = "unmounted",
  ro = "exited",
  oo = "entering",
  Ko = "entered",
  jf = "exiting",
  br = (function (e) {
    K1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var a = o,
        l = a && !a.isMounting ? r.enter : r.appear,
        s;
      return (
        (i.appearStatus = null),
        r.in
          ? l
            ? ((s = ro), (i.appearStatus = oo))
            : (s = Ko)
          : r.unmountOnExit || r.mountOnEnter
          ? (s = va)
          : (s = ro),
        (i.state = { status: s }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var a = o.in;
      return a && i.status === va ? { status: ro } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== oo && a !== Ko && (i = oo)
            : (a === oo || a === Ko) && (i = jf);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          a,
          l;
        return (
          (i = a = l = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (a = o.enter),
            (l = o.appear !== void 0 ? o.appear : a)),
          { exit: i, enter: a, appear: l }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === oo)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : ma.findDOMNode(this);
              a && Tk(a);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === ro &&
            this.setState({ status: va });
      }),
      (n.performEnter = function (o) {
        var i = this,
          a = this.props.enter,
          l = this.context ? this.context.isMounting : o,
          s = this.props.nodeRef ? [l] : [ma.findDOMNode(this), l],
          u = s[0],
          c = s[1],
          d = this.getTimeouts(),
          f = l ? d.appear : d.enter;
        if ((!o && !a) || xv.disabled) {
          this.safeSetState({ status: Ko }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: oo }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: Ko }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          l = this.props.nodeRef ? void 0 : ma.findDOMNode(this);
        if (!i || xv.disabled) {
          this.safeSetState({ status: ro }, function () {
            o.props.onExited(l);
          });
          return;
        }
        this.props.onExit(l),
          this.safeSetState({ status: jf }, function () {
            o.props.onExiting(l),
              o.onTransitionEnd(a.exit, function () {
                o.safeSetState({ status: ro }, function () {
                  o.props.onExited(l);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          a = !0;
        return (
          (this.nextCallback = function (l) {
            a && ((a = !1), (i.nextCallback = null), o(l));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : ma.findDOMNode(this),
          l = o == null && !this.props.addEndListener;
        if (!a || l) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var s = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            u = s[0],
            c = s[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === va) return null;
        var i = this.props,
          a = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var l = J(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return Wt.createElement(
          nu.Provider,
          { value: null },
          typeof a == "function"
            ? a(o, l)
            : Wt.cloneElement(Wt.Children.only(a), l)
        );
      }),
      t
    );
  })(Wt.Component);
br.contextType = nu;
br.propTypes = {};
function Vo() {}
br.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Vo,
  onEntering: Vo,
  onEntered: Vo,
  onExit: Vo,
  onExiting: Vo,
  onExited: Vo,
};
br.UNMOUNTED = va;
br.EXITED = ro;
br.ENTERING = oo;
br.ENTERED = Ko;
br.EXITING = jf;
const G1 = br;
function $k(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function bh(e, t) {
  var n = function (i) {
      return t && v.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      v.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function Mk(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var a,
    l = {};
  for (var s in t) {
    if (r[s])
      for (a = 0; a < r[s].length; a++) {
        var u = r[s][a];
        l[r[s][a]] = n(u);
      }
    l[s] = n(s);
  }
  for (a = 0; a < o.length; a++) l[o[a]] = n(o[a]);
  return l;
}
function so(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Ak(e, t) {
  return bh(e.children, function (n) {
    return v.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: so(n, "appear", e),
      enter: so(n, "enter", e),
      exit: so(n, "exit", e),
    });
  });
}
function Ik(e, t, n) {
  var r = bh(e.children),
    o = Mk(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var a = o[i];
      if (v.isValidElement(a)) {
        var l = i in t,
          s = i in r,
          u = t[i],
          c = v.isValidElement(u) && !u.props.in;
        s && (!l || c)
          ? (o[i] = v.cloneElement(a, {
              onExited: n.bind(null, a),
              in: !0,
              exit: so(a, "exit", e),
              enter: so(a, "enter", e),
            }))
          : !s && l && !c
          ? (o[i] = v.cloneElement(a, { in: !1 }))
          : s &&
            l &&
            v.isValidElement(u) &&
            (o[i] = v.cloneElement(a, {
              onExited: n.bind(null, a),
              in: u.props.in,
              exit: so(a, "exit", e),
              enter: so(a, "enter", e),
            }));
      }
    }),
    o
  );
}
var Nk =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  Lk = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  xh = (function (e) {
    K1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var a = i.handleExited.bind($k(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: a,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var a = i.children,
          l = i.handleExited,
          s = i.firstRender;
        return { children: s ? Ak(o, l) : Ik(o, a, l), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var a = bh(this.props.children);
        o.key in a ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (l) {
              var s = C({}, l.children);
              return delete s[o.key], { children: s };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          a = o.childFactory,
          l = J(o, ["component", "childFactory"]),
          s = this.state.contextValue,
          u = Nk(this.state.children).map(a);
        return (
          delete l.appear,
          delete l.enter,
          delete l.exit,
          i === null
            ? Wt.createElement(nu.Provider, { value: s }, u)
            : Wt.createElement(
                nu.Provider,
                { value: s },
                Wt.createElement(i, l, u)
              )
        );
      }),
      t
    );
  })(Wt.Component);
xh.propTypes = {};
xh.defaultProps = Lk;
const jk = xh,
  q1 = (e) => e.scrollTop;
function ru(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: a = {} } = e;
  return {
    duration:
      (n = a.transitionDuration) != null
        ? n
        : typeof o == "number"
        ? o
        : o[t.mode] || 0,
    easing:
      (r = a.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
        ? i[t.mode]
        : i,
    delay: a.transitionDelay,
  };
}
function Fk(e) {
  return Te("MuiPaper", e);
}
$e("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const Dk = ["className", "component", "elevation", "square", "variant"],
  zk = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return Le(i, Fk, o);
  },
  Bk = Q("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return C(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        C(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${Ir(
                "#fff",
                bv(t.elevation)
              )}, ${Ir("#fff", bv(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  Uk = v.forwardRef(function (t, n) {
    const r = De({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: a = 1,
        square: l = !1,
        variant: s = "elevation",
      } = r,
      u = J(r, Dk),
      c = C({}, r, { component: i, elevation: a, square: l, variant: s }),
      d = zk(c);
    return k.jsx(
      Bk,
      C({ as: i, ownerState: c, className: le(d.root, o), ref: n }, u)
    );
  }),
  Wk = Uk;
function ou(e) {
  return typeof e == "string";
}
function Vk(e, t, n) {
  return e === void 0 || ou(e)
    ? t
    : C({}, t, { ownerState: C({}, t.ownerState, n) });
}
function Q1(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function Hk(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function _v(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function Kk(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const x = le(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      y = C(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      g = C({}, n, o, r);
    return (
      x.length > 0 && (g.className = x),
      Object.keys(y).length > 0 && (g.style = y),
      { props: g, internalRef: void 0 }
    );
  }
  const a = Q1(C({}, o, r)),
    l = _v(r),
    s = _v(o),
    u = t(a),
    c = le(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    d = C(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    f = C({}, u, n, s, l);
  return (
    c.length > 0 && (f.className = c),
    Object.keys(d).length > 0 && (f.style = d),
    { props: f, internalRef: u.ref }
  );
}
const Gk = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function ki(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    a = J(e, Gk),
    l = i ? {} : Hk(r, o),
    { props: s, internalRef: u } = Kk(C({}, a, { externalSlotProps: l })),
    c = At(
      u,
      l == null ? void 0 : l.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return Vk(n, C({}, s, { ref: c }), o);
}
function qk(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: a,
      in: l,
      onExited: s,
      timeout: u,
    } = e,
    [c, d] = v.useState(!1),
    f = le(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    x = { width: a, height: a, top: -(a / 2) + i, left: -(a / 2) + o },
    y = le(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !l && !c && d(!0),
    v.useEffect(() => {
      if (!l && s != null) {
        const g = setTimeout(s, u);
        return () => {
          clearTimeout(g);
        };
      }
    }, [s, l, u]),
    k.jsx("span", {
      className: f,
      style: x,
      children: k.jsx("span", { className: y }),
    })
  );
}
const pn = $e("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Qk = ["center", "classes", "className"];
let hc = (e) => e,
  Sv,
  wv,
  Ev,
  Cv;
const Ff = 550,
  Yk = 80,
  Xk = Ku(
    Sv ||
      (Sv = hc`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  Jk = Ku(
    wv ||
      (wv = hc`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  Zk = Ku(
    Ev ||
      (Ev = hc`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  eP = Q("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  tP = Q(qk, { name: "MuiTouchRipple", slot: "Ripple" })(
    Cv ||
      (Cv = hc`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    pn.rippleVisible,
    Xk,
    Ff,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    pn.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    pn.child,
    pn.childLeaving,
    Jk,
    Ff,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    pn.childPulsate,
    Zk,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  nP = v.forwardRef(function (t, n) {
    const r = De({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: a } = r,
      l = J(r, Qk),
      [s, u] = v.useState([]),
      c = v.useRef(0),
      d = v.useRef(null);
    v.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [s]);
    const f = v.useRef(!1),
      x = M1(),
      y = v.useRef(null),
      g = v.useRef(null),
      S = v.useCallback(
        (_) => {
          const {
            pulsate: E,
            rippleX: b,
            rippleY: w,
            rippleSize: P,
            cb: $,
          } = _;
          u((M) => [
            ...M,
            k.jsx(
              tP,
              {
                classes: {
                  ripple: le(i.ripple, pn.ripple),
                  rippleVisible: le(i.rippleVisible, pn.rippleVisible),
                  ripplePulsate: le(i.ripplePulsate, pn.ripplePulsate),
                  child: le(i.child, pn.child),
                  childLeaving: le(i.childLeaving, pn.childLeaving),
                  childPulsate: le(i.childPulsate, pn.childPulsate),
                },
                timeout: Ff,
                pulsate: E,
                rippleX: b,
                rippleY: w,
                rippleSize: P,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (d.current = $);
        },
        [i]
      ),
      h = v.useCallback(
        (_ = {}, E = {}, b = () => {}) => {
          const {
            pulsate: w = !1,
            center: P = o || E.pulsate,
            fakeElement: $ = !1,
          } = E;
          if ((_ == null ? void 0 : _.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (_ == null ? void 0 : _.type) === "touchstart" && (f.current = !0);
          const M = $ ? null : g.current,
            I = M
              ? M.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let j, F, D;
          if (
            P ||
            _ === void 0 ||
            (_.clientX === 0 && _.clientY === 0) ||
            (!_.clientX && !_.touches)
          )
            (j = Math.round(I.width / 2)), (F = Math.round(I.height / 2));
          else {
            const { clientX: U, clientY: V } =
              _.touches && _.touches.length > 0 ? _.touches[0] : _;
            (j = Math.round(U - I.left)), (F = Math.round(V - I.top));
          }
          if (P)
            (D = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3)),
              D % 2 === 0 && (D += 1);
          else {
            const U =
                Math.max(Math.abs((M ? M.clientWidth : 0) - j), j) * 2 + 2,
              V = Math.max(Math.abs((M ? M.clientHeight : 0) - F), F) * 2 + 2;
            D = Math.sqrt(U ** 2 + V ** 2);
          }
          _ != null && _.touches
            ? y.current === null &&
              ((y.current = () => {
                S({ pulsate: w, rippleX: j, rippleY: F, rippleSize: D, cb: b });
              }),
              x.start(Yk, () => {
                y.current && (y.current(), (y.current = null));
              }))
            : S({ pulsate: w, rippleX: j, rippleY: F, rippleSize: D, cb: b });
        },
        [o, S, x]
      ),
      p = v.useCallback(() => {
        h({}, { pulsate: !0 });
      }, [h]),
      m = v.useCallback(
        (_, E) => {
          if (
            (x.clear(),
            (_ == null ? void 0 : _.type) === "touchend" && y.current)
          ) {
            y.current(),
              (y.current = null),
              x.start(0, () => {
                m(_, E);
              });
            return;
          }
          (y.current = null),
            u((b) => (b.length > 0 ? b.slice(1) : b)),
            (d.current = E);
        },
        [x]
      );
    return (
      v.useImperativeHandle(n, () => ({ pulsate: p, start: h, stop: m }), [
        p,
        h,
        m,
      ]),
      k.jsx(
        eP,
        C({ className: le(pn.root, i.root, a), ref: g }, l, {
          children: k.jsx(jk, { component: null, exit: !0, children: s }),
        })
      )
    );
  }),
  rP = nP;
function oP(e) {
  return Te("MuiButtonBase", e);
}
const iP = $e("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  aP = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  lP = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      a = Le({ root: ["root", t && "disabled", n && "focusVisible"] }, oP, o);
    return n && r && (a.root += ` ${r}`), a;
  },
  sP = Q("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${iP.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  uP = v.forwardRef(function (t, n) {
    const r = De({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: a,
        className: l,
        component: s = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: d = !1,
        focusRipple: f = !1,
        LinkComponent: x = "a",
        onBlur: y,
        onClick: g,
        onContextMenu: S,
        onDragLeave: h,
        onFocus: p,
        onFocusVisible: m,
        onKeyDown: _,
        onKeyUp: E,
        onMouseDown: b,
        onMouseLeave: w,
        onMouseUp: P,
        onTouchEnd: $,
        onTouchMove: M,
        onTouchStart: I,
        tabIndex: j = 0,
        TouchRippleProps: F,
        touchRippleRef: D,
        type: U,
      } = r,
      V = J(r, aP),
      z = v.useRef(null),
      T = v.useRef(null),
      L = At(T, D),
      { isFocusVisibleRef: H, onFocus: re, onBlur: ne, ref: ve } = sR(),
      [Y, fe] = v.useState(!1);
    u && Y && fe(!1),
      v.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            fe(!0), z.current.focus();
          },
        }),
        []
      );
    const [se, He] = v.useState(!1);
    v.useEffect(() => {
      He(!0);
    }, []);
    const gt = se && !c && !u;
    v.useEffect(() => {
      Y && f && !c && se && T.current.pulsate();
    }, [c, f, Y, se]);
    function Ke(q, cn, Sr = d) {
      return ii(
        (wr) => (cn && cn(wr), !Sr && T.current && T.current[q](wr), !0)
      );
    }
    const wt = Ke("start", b),
      ie = Ke("stop", S),
      Re = Ke("stop", h),
      ce = Ke("stop", P),
      Ce = Ke("stop", (q) => {
        Y && q.preventDefault(), w && w(q);
      }),
      xe = Ke("start", I),
      Vn = Ke("stop", $),
      jt = Ke("stop", M),
      Ft = Ke(
        "stop",
        (q) => {
          ne(q), H.current === !1 && fe(!1), y && y(q);
        },
        !1
      ),
      Qt = ii((q) => {
        z.current || (z.current = q.currentTarget),
          re(q),
          H.current === !0 && (fe(!0), m && m(q)),
          p && p(q);
      }),
      Dt = () => {
        const q = z.current;
        return s && s !== "button" && !(q.tagName === "A" && q.href);
      },
      ke = v.useRef(!1),
      un = ii((q) => {
        f &&
          !ke.current &&
          Y &&
          T.current &&
          q.key === " " &&
          ((ke.current = !0),
          T.current.stop(q, () => {
            T.current.start(q);
          })),
          q.target === q.currentTarget &&
            Dt() &&
            q.key === " " &&
            q.preventDefault(),
          _ && _(q),
          q.target === q.currentTarget &&
            Dt() &&
            q.key === "Enter" &&
            !u &&
            (q.preventDefault(), g && g(q));
      }),
      ct = ii((q) => {
        f &&
          q.key === " " &&
          T.current &&
          Y &&
          !q.defaultPrevented &&
          ((ke.current = !1),
          T.current.stop(q, () => {
            T.current.pulsate(q);
          })),
          E && E(q),
          g &&
            q.target === q.currentTarget &&
            Dt() &&
            q.key === " " &&
            !q.defaultPrevented &&
            g(q);
      });
    let ge = s;
    ge === "button" && (V.href || V.to) && (ge = x);
    const Et = {};
    ge === "button"
      ? ((Et.type = U === void 0 ? "button" : U), (Et.disabled = u))
      : (!V.href && !V.to && (Et.role = "button"),
        u && (Et["aria-disabled"] = u));
    const Pn = At(n, ve, z),
      zt = C({}, r, {
        centerRipple: i,
        component: s,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: d,
        focusRipple: f,
        tabIndex: j,
        focusVisible: Y,
      }),
      Ae = lP(zt);
    return k.jsxs(
      sP,
      C(
        {
          as: ge,
          className: le(Ae.root, l),
          ownerState: zt,
          onBlur: Ft,
          onClick: g,
          onContextMenu: ie,
          onFocus: Qt,
          onKeyDown: un,
          onKeyUp: ct,
          onMouseDown: wt,
          onMouseLeave: Ce,
          onMouseUp: ce,
          onDragLeave: Re,
          onTouchEnd: Vn,
          onTouchMove: jt,
          onTouchStart: xe,
          ref: Pn,
          tabIndex: u ? -1 : j,
          type: U,
        },
        Et,
        V,
        { children: [a, gt ? k.jsx(rP, C({ ref: L, center: i }, F)) : null] }
      )
    );
  }),
  Y1 = uP;
function cP(e) {
  return Te("MuiTypography", e);
}
$e("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const dP = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  fP = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: a,
      } = e,
      l = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${ae(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return Le(l, cP, a);
  },
  pP = Q("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${ae(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    C(
      { margin: 0 },
      t.variant === "inherit" && { font: "inherit" },
      t.variant !== "inherit" && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  Rv = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  hP = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  mP = (e) => hP[e] || e,
  vP = v.forwardRef(function (t, n) {
    const r = De({ props: t, name: "MuiTypography" }),
      o = mP(r.color),
      i = ec(C({}, r, { color: o })),
      {
        align: a = "inherit",
        className: l,
        component: s,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: d = !1,
        variant: f = "body1",
        variantMapping: x = Rv,
      } = i,
      y = J(i, dP),
      g = C({}, i, {
        align: a,
        color: o,
        className: l,
        component: s,
        gutterBottom: u,
        noWrap: c,
        paragraph: d,
        variant: f,
        variantMapping: x,
      }),
      S = s || (d ? "p" : x[f] || Rv[f]) || "span",
      h = fP(g);
    return k.jsx(
      pP,
      C({ as: S, ref: n, ownerState: g, className: le(h.root, l) }, y)
    );
  }),
  jn = vP,
  gP = [
    "input",
    "select",
    "textarea",
    "a[href]",
    "button",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable="false"])',
  ].join(",");
function yP(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function bP(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function xP(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    bP(e)
  );
}
function _P(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(gP)).forEach((r, o) => {
      const i = yP(r);
      i === -1 ||
        !xP(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function SP() {
  return !0;
}
function wP(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = _P,
      isEnabled: a = SP,
      open: l,
    } = e,
    s = v.useRef(!1),
    u = v.useRef(null),
    c = v.useRef(null),
    d = v.useRef(null),
    f = v.useRef(null),
    x = v.useRef(!1),
    y = v.useRef(null),
    g = At(t.ref, y),
    S = v.useRef(null);
  v.useEffect(() => {
    !l || !y.current || (x.current = !n);
  }, [n, l]),
    v.useEffect(() => {
      if (!l || !y.current) return;
      const m = nn(y.current);
      return (
        y.current.contains(m.activeElement) ||
          (y.current.hasAttribute("tabIndex") ||
            y.current.setAttribute("tabIndex", "-1"),
          x.current && y.current.focus()),
        () => {
          o ||
            (d.current &&
              d.current.focus &&
              ((s.current = !0), d.current.focus()),
            (d.current = null));
        }
      );
    }, [l]),
    v.useEffect(() => {
      if (!l || !y.current) return;
      const m = nn(y.current),
        _ = (w) => {
          (S.current = w),
            !(r || !a() || w.key !== "Tab") &&
              m.activeElement === y.current &&
              w.shiftKey &&
              ((s.current = !0), c.current && c.current.focus());
        },
        E = () => {
          const w = y.current;
          if (w === null) return;
          if (!m.hasFocus() || !a() || s.current) {
            s.current = !1;
            return;
          }
          if (
            w.contains(m.activeElement) ||
            (r &&
              m.activeElement !== u.current &&
              m.activeElement !== c.current)
          )
            return;
          if (m.activeElement !== f.current) f.current = null;
          else if (f.current !== null) return;
          if (!x.current) return;
          let P = [];
          if (
            ((m.activeElement === u.current || m.activeElement === c.current) &&
              (P = i(y.current)),
            P.length > 0)
          ) {
            var $, M;
            const I = !!(
                ($ = S.current) != null &&
                $.shiftKey &&
                ((M = S.current) == null ? void 0 : M.key) === "Tab"
              ),
              j = P[0],
              F = P[P.length - 1];
            typeof j != "string" &&
              typeof F != "string" &&
              (I ? F.focus() : j.focus());
          } else w.focus();
        };
      m.addEventListener("focusin", E), m.addEventListener("keydown", _, !0);
      const b = setInterval(() => {
        m.activeElement && m.activeElement.tagName === "BODY" && E();
      }, 50);
      return () => {
        clearInterval(b),
          m.removeEventListener("focusin", E),
          m.removeEventListener("keydown", _, !0);
      };
    }, [n, r, o, a, l, i]);
  const h = (m) => {
      d.current === null && (d.current = m.relatedTarget),
        (x.current = !0),
        (f.current = m.target);
      const _ = t.props.onFocus;
      _ && _(m);
    },
    p = (m) => {
      d.current === null && (d.current = m.relatedTarget), (x.current = !0);
    };
  return k.jsxs(v.Fragment, {
    children: [
      k.jsx("div", {
        tabIndex: l ? 0 : -1,
        onFocus: p,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      v.cloneElement(t, { ref: g, onFocus: h }),
      k.jsx("div", {
        tabIndex: l ? 0 : -1,
        onFocus: p,
        ref: c,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function EP(e) {
  return typeof e == "function" ? e() : e;
}
const CP = v.forwardRef(function (t, n) {
  const { children: r, container: o, disablePortal: i = !1 } = t,
    [a, l] = v.useState(null),
    s = At(v.isValidElement(r) ? r.ref : null, n);
  if (
    (So(() => {
      i || l(EP(o) || document.body);
    }, [o, i]),
    So(() => {
      if (a && !i)
        return (
          Mf(n, a),
          () => {
            Mf(n, null);
          }
        );
    }, [n, a, i]),
    i)
  ) {
    if (v.isValidElement(r)) {
      const u = { ref: s };
      return v.cloneElement(r, u);
    }
    return k.jsx(v.Fragment, { children: r });
  }
  return k.jsx(v.Fragment, { children: a && ml.createPortal(r, a) });
});
function RP(e) {
  const t = nn(e);
  return t.body === e
    ? wo(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Pa(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function kv(e) {
  return parseInt(wo(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function kP(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Pv(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = i.indexOf(a) === -1,
      s = !kP(a);
    l && s && Pa(a, o);
  });
}
function gd(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function PP(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (RP(r)) {
      const a = A1(nn(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${kv(r) + a}px`);
      const l = nn(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (s) => {
        n.push({
          value: s.style.paddingRight,
          property: "padding-right",
          el: s,
        }),
          (s.style.paddingRight = `${kv(s) + a}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = nn(r).body;
    else {
      const a = r.parentElement,
        l = wo(r);
      i =
        (a == null ? void 0 : a.nodeName) === "HTML" &&
        l.getComputedStyle(a).overflowY === "scroll"
          ? a
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: a, property: l }) => {
      i ? a.style.setProperty(l, i) : a.style.removeProperty(l);
    });
  };
}
function OP(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class TP {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && Pa(t.modalRef, !1);
    const o = OP(n);
    Pv(n, t.mount, t.modalRef, o, !0);
    const i = gd(this.containers, (a) => a.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = gd(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = PP(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = gd(this.containers, (a) => a.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && Pa(t.modalRef, n),
        Pv(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && Pa(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function $P(e) {
  return typeof e == "function" ? e() : e;
}
function MP(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const AP = new TP();
function IP(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = AP,
      closeAfterTransition: i = !1,
      onTransitionEnter: a,
      onTransitionExited: l,
      children: s,
      onClose: u,
      open: c,
      rootRef: d,
    } = e,
    f = v.useRef({}),
    x = v.useRef(null),
    y = v.useRef(null),
    g = At(y, d),
    [S, h] = v.useState(!c),
    p = MP(s);
  let m = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
  const _ = () => nn(x.current),
    E = () => (
      (f.current.modalRef = y.current), (f.current.mount = x.current), f.current
    ),
    b = () => {
      o.mount(E(), { disableScrollLock: r }),
        y.current && (y.current.scrollTop = 0);
    },
    w = ii(() => {
      const V = $P(t) || _().body;
      o.add(E(), V), y.current && b();
    }),
    P = v.useCallback(() => o.isTopModal(E()), [o]),
    $ = ii((V) => {
      (x.current = V), V && (c && P() ? b() : y.current && Pa(y.current, m));
    }),
    M = v.useCallback(() => {
      o.remove(E(), m);
    }, [m, o]);
  v.useEffect(
    () => () => {
      M();
    },
    [M]
  ),
    v.useEffect(() => {
      c ? w() : (!p || !i) && M();
    }, [c, M, p, i, w]);
  const I = (V) => (z) => {
      var T;
      (T = V.onKeyDown) == null || T.call(V, z),
        !(z.key !== "Escape" || z.which === 229 || !P()) &&
          (n || (z.stopPropagation(), u && u(z, "escapeKeyDown")));
    },
    j = (V) => (z) => {
      var T;
      (T = V.onClick) == null || T.call(V, z),
        z.target === z.currentTarget && u && u(z, "backdropClick");
    };
  return {
    getRootProps: (V = {}) => {
      const z = Q1(e);
      delete z.onTransitionEnter, delete z.onTransitionExited;
      const T = C({}, z, V);
      return C({ role: "presentation" }, T, { onKeyDown: I(T), ref: g });
    },
    getBackdropProps: (V = {}) => {
      const z = V;
      return C({ "aria-hidden": !0 }, z, { onClick: j(z), open: c });
    },
    getTransitionProps: () => {
      const V = () => {
          h(!1), a && a();
        },
        z = () => {
          h(!0), l && l(), i && M();
        };
      return {
        onEnter: $f(V, s == null ? void 0 : s.props.onEnter),
        onExited: $f(z, s == null ? void 0 : s.props.onExited),
      };
    },
    rootRef: g,
    portalRef: $,
    isTopModal: P,
    exited: S,
    hasTransition: p,
  };
}
const NP = ["onChange", "maxRows", "minRows", "style", "value"];
function es(e) {
  return parseInt(e, 10) || 0;
}
const LP = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function jP(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflowing)
  );
}
const FP = v.forwardRef(function (t, n) {
  const { onChange: r, maxRows: o, minRows: i = 1, style: a, value: l } = t,
    s = J(t, NP),
    { current: u } = v.useRef(l != null),
    c = v.useRef(null),
    d = At(n, c),
    f = v.useRef(null),
    x = v.useCallback(() => {
      const S = c.current,
        p = wo(S).getComputedStyle(S);
      if (p.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      const m = f.current;
      (m.style.width = p.width),
        (m.value = S.value || t.placeholder || "x"),
        m.value.slice(-1) ===
          `
` && (m.value += " ");
      const _ = p.boxSizing,
        E = es(p.paddingBottom) + es(p.paddingTop),
        b = es(p.borderBottomWidth) + es(p.borderTopWidth),
        w = m.scrollHeight;
      m.value = "x";
      const P = m.scrollHeight;
      let $ = w;
      i && ($ = Math.max(Number(i) * P, $)),
        o && ($ = Math.min(Number(o) * P, $)),
        ($ = Math.max($, P));
      const M = $ + (_ === "border-box" ? E + b : 0),
        I = Math.abs($ - w) <= 1;
      return { outerHeightStyle: M, overflowing: I };
    }, [o, i, t.placeholder]),
    y = v.useCallback(() => {
      const S = x();
      if (jP(S)) return;
      const h = c.current;
      (h.style.height = `${S.outerHeightStyle}px`),
        (h.style.overflow = S.overflowing ? "hidden" : "");
    }, [x]);
  So(() => {
    const S = () => {
      y();
    };
    let h;
    const p = $1(S),
      m = c.current,
      _ = wo(m);
    _.addEventListener("resize", p);
    let E;
    return (
      typeof ResizeObserver < "u" &&
        ((E = new ResizeObserver(S)), E.observe(m)),
      () => {
        p.clear(),
          cancelAnimationFrame(h),
          _.removeEventListener("resize", p),
          E && E.disconnect();
      }
    );
  }, [x, y]),
    So(() => {
      y();
    });
  const g = (S) => {
    u || y(), r && r(S);
  };
  return k.jsxs(v.Fragment, {
    children: [
      k.jsx(
        "textarea",
        C({ value: l, onChange: g, ref: d, rows: i, style: a }, s)
      ),
      k.jsx("textarea", {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: f,
        tabIndex: -1,
        style: C({}, LP.shadow, a, { paddingTop: 0, paddingBottom: 0 }),
      }),
    ],
  });
});
function Xr({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {}
  );
}
const DP = v.createContext(void 0),
  _h = DP;
function xr() {
  return v.useContext(_h);
}
function zP(e) {
  return k.jsx(EC, C({}, e, { defaultTheme: pc, themeId: vl }));
}
function Ov(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function iu(e, t = !1) {
  return (
    e &&
    ((Ov(e.value) && e.value !== "") ||
      (t && Ov(e.defaultValue) && e.defaultValue !== ""))
  );
}
function BP(e) {
  return e.startAdornment;
}
function UP(e) {
  return Te("MuiInputBase", e);
}
const WP = $e("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]),
  Pi = WP,
  VP = [
    "aria-describedby",
    "autoComplete",
    "autoFocus",
    "className",
    "color",
    "components",
    "componentsProps",
    "defaultValue",
    "disabled",
    "disableInjectingGlobalStyles",
    "endAdornment",
    "error",
    "fullWidth",
    "id",
    "inputComponent",
    "inputProps",
    "inputRef",
    "margin",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onClick",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "placeholder",
    "readOnly",
    "renderSuffix",
    "rows",
    "size",
    "slotProps",
    "slots",
    "startAdornment",
    "type",
    "value",
  ],
  mc = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${ae(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  vc = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  HP = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: a,
        formControl: l,
        fullWidth: s,
        hiddenLabel: u,
        multiline: c,
        readOnly: d,
        size: f,
        startAdornment: x,
        type: y,
      } = e,
      g = {
        root: [
          "root",
          `color${ae(n)}`,
          r && "disabled",
          o && "error",
          s && "fullWidth",
          a && "focused",
          l && "formControl",
          f && f !== "medium" && `size${ae(f)}`,
          c && "multiline",
          x && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          d && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          y === "search" && "inputTypeSearch",
          c && "inputMultiline",
          f === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          x && "inputAdornedStart",
          i && "inputAdornedEnd",
          d && "readOnly",
        ],
      };
    return Le(g, UP, t);
  },
  gc = Q("div", { name: "MuiInputBase", slot: "Root", overridesResolver: mc })(
    ({ theme: e, ownerState: t }) =>
      C(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${Pi.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          C({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" }
      )
  ),
  yc = Q("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: vc,
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light",
      r = C(
        { color: "currentColor" },
        e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 },
        {
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        }
      ),
      o = { opacity: "0 !important" },
      i = e.vars
        ? { opacity: e.vars.opacity.inputPlaceholder }
        : { opacity: n ? 0.42 : 0.5 };
    return C(
      {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&:-ms-input-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${Pi.formControl} &`]: {
          "&::-webkit-input-placeholder": o,
          "&::-moz-placeholder": o,
          "&:-ms-input-placeholder": o,
          "&::-ms-input-placeholder": o,
          "&:focus::-webkit-input-placeholder": i,
          "&:focus::-moz-placeholder": i,
          "&:focus:-ms-input-placeholder": i,
          "&:focus::-ms-input-placeholder": i,
        },
        [`&.${Pi.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill",
        },
      },
      t.size === "small" && { paddingTop: 1 },
      t.multiline && {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0,
      },
      t.type === "search" && { MozAppearance: "textfield" }
    );
  }),
  KP = k.jsx(zP, {
    styles: {
      "@keyframes mui-auto-fill": { from: { display: "block" } },
      "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
    },
  }),
  GP = v.forwardRef(function (t, n) {
    var r;
    const o = De({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": i,
        autoComplete: a,
        autoFocus: l,
        className: s,
        components: u = {},
        componentsProps: c = {},
        defaultValue: d,
        disabled: f,
        disableInjectingGlobalStyles: x,
        endAdornment: y,
        fullWidth: g = !1,
        id: S,
        inputComponent: h = "input",
        inputProps: p = {},
        inputRef: m,
        maxRows: _,
        minRows: E,
        multiline: b = !1,
        name: w,
        onBlur: P,
        onChange: $,
        onClick: M,
        onFocus: I,
        onKeyDown: j,
        onKeyUp: F,
        placeholder: D,
        readOnly: U,
        renderSuffix: V,
        rows: z,
        slotProps: T = {},
        slots: L = {},
        startAdornment: H,
        type: re = "text",
        value: ne,
      } = o,
      ve = J(o, VP),
      Y = p.value != null ? p.value : ne,
      { current: fe } = v.useRef(Y != null),
      se = v.useRef(),
      He = v.useCallback((Ae) => {}, []),
      gt = At(se, m, p.ref, He),
      [Ke, wt] = v.useState(!1),
      ie = xr(),
      Re = Xr({
        props: o,
        muiFormControl: ie,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (Re.focused = ie ? ie.focused : Ke),
      v.useEffect(() => {
        !ie && f && Ke && (wt(!1), P && P());
      }, [ie, f, Ke, P]);
    const ce = ie && ie.onFilled,
      Ce = ie && ie.onEmpty,
      xe = v.useCallback(
        (Ae) => {
          iu(Ae) ? ce && ce() : Ce && Ce();
        },
        [ce, Ce]
      );
    So(() => {
      fe && xe({ value: Y });
    }, [Y, xe, fe]);
    const Vn = (Ae) => {
        if (Re.disabled) {
          Ae.stopPropagation();
          return;
        }
        I && I(Ae),
          p.onFocus && p.onFocus(Ae),
          ie && ie.onFocus ? ie.onFocus(Ae) : wt(!0);
      },
      jt = (Ae) => {
        P && P(Ae),
          p.onBlur && p.onBlur(Ae),
          ie && ie.onBlur ? ie.onBlur(Ae) : wt(!1);
      },
      Ft = (Ae, ...q) => {
        if (!fe) {
          const cn = Ae.target || se.current;
          if (cn == null) throw new Error(xo(1));
          xe({ value: cn.value });
        }
        p.onChange && p.onChange(Ae, ...q), $ && $(Ae, ...q);
      };
    v.useEffect(() => {
      xe(se.current);
    }, []);
    const Qt = (Ae) => {
      se.current && Ae.currentTarget === Ae.target && se.current.focus(),
        M && M(Ae);
    };
    let Dt = h,
      ke = p;
    b &&
      Dt === "input" &&
      (z
        ? (ke = C({ type: void 0, minRows: z, maxRows: z }, ke))
        : (ke = C({ type: void 0, maxRows: _, minRows: E }, ke)),
      (Dt = FP));
    const un = (Ae) => {
      xe(
        Ae.animationName === "mui-auto-fill-cancel"
          ? se.current
          : { value: "x" }
      );
    };
    v.useEffect(() => {
      ie && ie.setAdornedStart(!!H);
    }, [ie, H]);
    const ct = C({}, o, {
        color: Re.color || "primary",
        disabled: Re.disabled,
        endAdornment: y,
        error: Re.error,
        focused: Re.focused,
        formControl: ie,
        fullWidth: g,
        hiddenLabel: Re.hiddenLabel,
        multiline: b,
        size: Re.size,
        startAdornment: H,
        type: re,
      }),
      ge = HP(ct),
      Et = L.root || u.Root || gc,
      Pn = T.root || c.root || {},
      zt = L.input || u.Input || yc;
    return (
      (ke = C({}, ke, (r = T.input) != null ? r : c.input)),
      k.jsxs(v.Fragment, {
        children: [
          !x && KP,
          k.jsxs(
            Et,
            C(
              {},
              Pn,
              !ou(Et) && { ownerState: C({}, ct, Pn.ownerState) },
              { ref: n, onClick: Qt },
              ve,
              {
                className: le(
                  ge.root,
                  Pn.className,
                  s,
                  U && "MuiInputBase-readOnly"
                ),
                children: [
                  H,
                  k.jsx(_h.Provider, {
                    value: null,
                    children: k.jsx(
                      zt,
                      C(
                        {
                          ownerState: ct,
                          "aria-invalid": Re.error,
                          "aria-describedby": i,
                          autoComplete: a,
                          autoFocus: l,
                          defaultValue: d,
                          disabled: Re.disabled,
                          id: S,
                          onAnimationStart: un,
                          name: w,
                          placeholder: D,
                          readOnly: U,
                          required: Re.required,
                          rows: z,
                          value: Y,
                          onKeyDown: j,
                          onKeyUp: F,
                          type: re,
                        },
                        ke,
                        !ou(zt) && {
                          as: Dt,
                          ownerState: C({}, ct, ke.ownerState),
                        },
                        {
                          ref: gt,
                          className: le(
                            ge.input,
                            ke.className,
                            U && "MuiInputBase-readOnly"
                          ),
                          onBlur: jt,
                          onChange: Ft,
                          onFocus: Vn,
                        }
                      )
                    ),
                  }),
                  y,
                  V ? V(C({}, Re, { startAdornment: H })) : null,
                ],
              }
            )
          ),
        ],
      })
    );
  }),
  Sh = GP;
function qP(e) {
  return Te("MuiInput", e);
}
const QP = C({}, Pi, $e("MuiInput", ["root", "underline", "input"])),
  ra = QP;
function YP(e) {
  return Te("MuiOutlinedInput", e);
}
const XP = C(
    {},
    Pi,
    $e("MuiOutlinedInput", ["root", "notchedOutline", "input"])
  ),
  Rr = XP;
function JP(e) {
  return Te("MuiFilledInput", e);
}
const ZP = C({}, Pi, $e("MuiFilledInput", ["root", "underline", "input"])),
  eo = ZP,
  e2 = Bi(k.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  t2 = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  n2 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  r2 = v.forwardRef(function (t, n) {
    const r = W1(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: a = !0,
        children: l,
        easing: s,
        in: u,
        onEnter: c,
        onEntered: d,
        onEntering: f,
        onExit: x,
        onExited: y,
        onExiting: g,
        style: S,
        timeout: h = o,
        TransitionComponent: p = G1,
      } = t,
      m = J(t, t2),
      _ = v.useRef(null),
      E = At(_, l.ref, n),
      b = (D) => (U) => {
        if (D) {
          const V = _.current;
          U === void 0 ? D(V) : D(V, U);
        }
      },
      w = b(f),
      P = b((D, U) => {
        q1(D);
        const V = ru({ style: S, timeout: h, easing: s }, { mode: "enter" });
        (D.style.webkitTransition = r.transitions.create("opacity", V)),
          (D.style.transition = r.transitions.create("opacity", V)),
          c && c(D, U);
      }),
      $ = b(d),
      M = b(g),
      I = b((D) => {
        const U = ru({ style: S, timeout: h, easing: s }, { mode: "exit" });
        (D.style.webkitTransition = r.transitions.create("opacity", U)),
          (D.style.transition = r.transitions.create("opacity", U)),
          x && x(D);
      }),
      j = b(y),
      F = (D) => {
        i && i(_.current, D);
      };
    return k.jsx(
      p,
      C(
        {
          appear: a,
          in: u,
          nodeRef: _,
          onEnter: P,
          onEntered: $,
          onEntering: w,
          onExit: I,
          onExited: j,
          onExiting: M,
          addEndListener: F,
          timeout: h,
        },
        m,
        {
          children: (D, U) =>
            v.cloneElement(
              l,
              C(
                {
                  style: C(
                    {
                      opacity: 0,
                      visibility: D === "exited" && !u ? "hidden" : void 0,
                    },
                    n2[D],
                    S,
                    l.props.style
                  ),
                  ref: E,
                },
                U
              )
            ),
        }
      )
    );
  }),
  o2 = r2;
function i2(e) {
  return Te("MuiBackdrop", e);
}
$e("MuiBackdrop", ["root", "invisible"]);
const a2 = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  l2 = (e) => {
    const { classes: t, invisible: n } = e;
    return Le({ root: ["root", n && "invisible"] }, i2, t);
  },
  s2 = Q("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    C(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  u2 = v.forwardRef(function (t, n) {
    var r, o, i;
    const a = De({ props: t, name: "MuiBackdrop" }),
      {
        children: l,
        className: s,
        component: u = "div",
        components: c = {},
        componentsProps: d = {},
        invisible: f = !1,
        open: x,
        slotProps: y = {},
        slots: g = {},
        TransitionComponent: S = o2,
        transitionDuration: h,
      } = a,
      p = J(a, a2),
      m = C({}, a, { component: u, invisible: f }),
      _ = l2(m),
      E = (r = y.root) != null ? r : d.root;
    return k.jsx(
      S,
      C({ in: x, timeout: h }, p, {
        children: k.jsx(
          s2,
          C({ "aria-hidden": !0 }, E, {
            as: (o = (i = g.root) != null ? i : c.Root) != null ? o : u,
            className: le(_.root, s, E == null ? void 0 : E.className),
            ownerState: C({}, m, E == null ? void 0 : E.ownerState),
            classes: _,
            ref: n,
            children: l,
          })
        ),
      })
    );
  }),
  c2 = u2,
  d2 = $e("MuiBox", ["root"]),
  f2 = d2,
  p2 = U1(),
  h2 = $C({
    themeId: vl,
    defaultTheme: p2,
    defaultClassName: f2.root,
    generateClassName: E1.generate,
  }),
  In = h2;
function m2(e) {
  return Te("MuiButton", e);
}
const v2 = $e("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  ts = v2,
  g2 = v.createContext({}),
  y2 = g2,
  b2 = v.createContext(void 0),
  x2 = b2,
  _2 = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  S2 = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: a,
      } = e,
      l = {
        root: [
          "root",
          i,
          `${i}${ae(t)}`,
          `size${ae(o)}`,
          `${i}Size${ae(o)}`,
          `color${ae(t)}`,
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["icon", "startIcon", `iconSize${ae(o)}`],
        endIcon: ["icon", "endIcon", `iconSize${ae(o)}`],
      },
      s = Le(l, m2, a);
    return C({}, a, s);
  },
  X1 = (e) =>
    C(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  w2 = Q(Y1, {
    shouldForwardProp: (e) => Lt(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${ae(n.color)}`],
        t[`size${ae(n.size)}`],
        t[`${n.variant}Size${ae(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        i =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return C(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": C(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Ir(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Ir(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Ir(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : i,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": C(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${ts.focusVisible}`]: C(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${ts.disabled}`]: C(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${Ir(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${ts.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${ts.disabled}`]: { boxShadow: "none" },
      }
  ),
  E2 = Q("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${ae(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    C(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      X1(e)
    )
  ),
  C2 = Q("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${ae(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    C(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      X1(e)
    )
  ),
  R2 = v.forwardRef(function (t, n) {
    const r = v.useContext(y2),
      o = v.useContext(x2),
      i = hh(r, t),
      a = De({ props: i, name: "MuiButton" }),
      {
        children: l,
        color: s = "primary",
        component: u = "button",
        className: c,
        disabled: d = !1,
        disableElevation: f = !1,
        disableFocusRipple: x = !1,
        endIcon: y,
        focusVisibleClassName: g,
        fullWidth: S = !1,
        size: h = "medium",
        startIcon: p,
        type: m,
        variant: _ = "text",
      } = a,
      E = J(a, _2),
      b = C({}, a, {
        color: s,
        component: u,
        disabled: d,
        disableElevation: f,
        disableFocusRipple: x,
        fullWidth: S,
        size: h,
        type: m,
        variant: _,
      }),
      w = S2(b),
      P =
        p && k.jsx(E2, { className: w.startIcon, ownerState: b, children: p }),
      $ = y && k.jsx(C2, { className: w.endIcon, ownerState: b, children: y }),
      M = o || "";
    return k.jsxs(
      w2,
      C(
        {
          ownerState: b,
          className: le(r.className, w.root, c, M),
          component: u,
          disabled: d,
          focusRipple: !x,
          focusVisibleClassName: le(w.focusVisible, g),
          ref: n,
          type: m,
        },
        E,
        { classes: w, children: [P, l, $] }
      )
    );
  }),
  tl = R2;
function k2(e) {
  return Te("PrivateSwitchBase", e);
}
$e("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const P2 = [
    "autoFocus",
    "checked",
    "checkedIcon",
    "className",
    "defaultChecked",
    "disabled",
    "disableFocusRipple",
    "edge",
    "icon",
    "id",
    "inputProps",
    "inputRef",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "readOnly",
    "required",
    "tabIndex",
    "type",
    "value",
  ],
  O2 = (e) => {
    const { classes: t, checked: n, disabled: r, edge: o } = e,
      i = {
        root: ["root", n && "checked", r && "disabled", o && `edge${ae(o)}`],
        input: ["input"],
      };
    return Le(i, k2, t);
  },
  T2 = Q(Y1)(({ ownerState: e }) =>
    C(
      { padding: 9, borderRadius: "50%" },
      e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
      e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 }
    )
  ),
  $2 = Q("input", { shouldForwardProp: Lt })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  M2 = v.forwardRef(function (t, n) {
    const {
        autoFocus: r,
        checked: o,
        checkedIcon: i,
        className: a,
        defaultChecked: l,
        disabled: s,
        disableFocusRipple: u = !1,
        edge: c = !1,
        icon: d,
        id: f,
        inputProps: x,
        inputRef: y,
        name: g,
        onBlur: S,
        onChange: h,
        onFocus: p,
        readOnly: m,
        required: _ = !1,
        tabIndex: E,
        type: b,
        value: w,
      } = t,
      P = J(t, P2),
      [$, M] = eu({
        controlled: o,
        default: !!l,
        name: "SwitchBase",
        state: "checked",
      }),
      I = xr(),
      j = (L) => {
        p && p(L), I && I.onFocus && I.onFocus(L);
      },
      F = (L) => {
        S && S(L), I && I.onBlur && I.onBlur(L);
      },
      D = (L) => {
        if (L.nativeEvent.defaultPrevented) return;
        const H = L.target.checked;
        M(H), h && h(L, H);
      };
    let U = s;
    I && typeof U > "u" && (U = I.disabled);
    const V = b === "checkbox" || b === "radio",
      z = C({}, t, { checked: $, disabled: U, disableFocusRipple: u, edge: c }),
      T = O2(z);
    return k.jsxs(
      T2,
      C(
        {
          component: "span",
          className: le(T.root, a),
          centerRipple: !0,
          focusRipple: !u,
          disabled: U,
          tabIndex: null,
          role: void 0,
          onFocus: j,
          onBlur: F,
          ownerState: z,
          ref: n,
        },
        P,
        {
          children: [
            k.jsx(
              $2,
              C(
                {
                  autoFocus: r,
                  checked: o,
                  defaultChecked: l,
                  className: T.input,
                  disabled: U,
                  id: V ? f : void 0,
                  name: g,
                  onChange: D,
                  readOnly: m,
                  ref: y,
                  required: _,
                  ownerState: z,
                  tabIndex: E,
                  type: b,
                },
                b === "checkbox" && w === void 0 ? {} : { value: w },
                x
              )
            ),
            $ ? i : d,
          ],
        }
      )
    );
  }),
  J1 = M2,
  A2 = Bi(
    k.jsx("path", {
      d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    }),
    "CheckBoxOutlineBlank"
  ),
  I2 = Bi(
    k.jsx("path", {
      d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    }),
    "CheckBox"
  ),
  N2 = Bi(
    k.jsx("path", {
      d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
    }),
    "IndeterminateCheckBox"
  );
function L2(e) {
  return Te("MuiCheckbox", e);
}
const j2 = $e("MuiCheckbox", [
    "root",
    "checked",
    "disabled",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
  ]),
  yd = j2,
  F2 = [
    "checkedIcon",
    "color",
    "icon",
    "indeterminate",
    "indeterminateIcon",
    "inputProps",
    "size",
    "className",
  ],
  D2 = (e) => {
    const { classes: t, indeterminate: n, color: r, size: o } = e,
      i = {
        root: ["root", n && "indeterminate", `color${ae(r)}`, `size${ae(o)}`],
      },
      a = Le(i, L2, t);
    return C({}, t, a);
  },
  z2 = Q(J1, {
    shouldForwardProp: (e) => Lt(e) || e === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.indeterminate && t.indeterminate,
        t[`size${ae(n.size)}`],
        n.color !== "default" && t[`color${ae(n.color)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    C(
      { color: (e.vars || e).palette.text.secondary },
      !t.disableRipple && {
        "&:hover": {
          backgroundColor: e.vars
            ? `rgba(${
                t.color === "default"
                  ? e.vars.palette.action.activeChannel
                  : e.vars.palette[t.color].mainChannel
              } / ${e.vars.palette.action.hoverOpacity})`
            : Ir(
                t.color === "default"
                  ? e.palette.action.active
                  : e.palette[t.color].main,
                e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
      },
      t.color !== "default" && {
        [`&.${yd.checked}, &.${yd.indeterminate}`]: {
          color: (e.vars || e).palette[t.color].main,
        },
        [`&.${yd.disabled}`]: { color: (e.vars || e).palette.action.disabled },
      }
    )
  ),
  B2 = k.jsx(I2, {}),
  U2 = k.jsx(A2, {}),
  W2 = k.jsx(N2, {}),
  V2 = v.forwardRef(function (t, n) {
    var r, o;
    const i = De({ props: t, name: "MuiCheckbox" }),
      {
        checkedIcon: a = B2,
        color: l = "primary",
        icon: s = U2,
        indeterminate: u = !1,
        indeterminateIcon: c = W2,
        inputProps: d,
        size: f = "medium",
        className: x,
      } = i,
      y = J(i, F2),
      g = u ? c : s,
      S = u ? c : a,
      h = C({}, i, { color: l, indeterminate: u, size: f }),
      p = D2(h);
    return k.jsx(
      z2,
      C(
        {
          type: "checkbox",
          inputProps: C({ "data-indeterminate": u }, d),
          icon: v.cloneElement(g, {
            fontSize: (r = g.props.fontSize) != null ? r : f,
          }),
          checkedIcon: v.cloneElement(S, {
            fontSize: (o = S.props.fontSize) != null ? o : f,
          }),
          ownerState: h,
          ref: n,
          className: le(p.root, x),
        },
        y,
        { classes: p }
      )
    );
  }),
  H2 = V2;
function K2(e) {
  return Te("MuiModal", e);
}
$e("MuiModal", ["root", "hidden", "backdrop"]);
const G2 = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  q2 = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return Le(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      K2,
      r
    );
  },
  Q2 = Q("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    C(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  Y2 = Q(c2, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  X2 = v.forwardRef(function (t, n) {
    var r, o, i, a, l, s;
    const u = De({ name: "MuiModal", props: t }),
      {
        BackdropComponent: c = Y2,
        BackdropProps: d,
        className: f,
        closeAfterTransition: x = !1,
        children: y,
        container: g,
        component: S,
        components: h = {},
        componentsProps: p = {},
        disableAutoFocus: m = !1,
        disableEnforceFocus: _ = !1,
        disableEscapeKeyDown: E = !1,
        disablePortal: b = !1,
        disableRestoreFocus: w = !1,
        disableScrollLock: P = !1,
        hideBackdrop: $ = !1,
        keepMounted: M = !1,
        onBackdropClick: I,
        open: j,
        slotProps: F,
        slots: D,
      } = u,
      U = J(u, G2),
      V = C({}, u, {
        closeAfterTransition: x,
        disableAutoFocus: m,
        disableEnforceFocus: _,
        disableEscapeKeyDown: E,
        disablePortal: b,
        disableRestoreFocus: w,
        disableScrollLock: P,
        hideBackdrop: $,
        keepMounted: M,
      }),
      {
        getRootProps: z,
        getBackdropProps: T,
        getTransitionProps: L,
        portalRef: H,
        isTopModal: re,
        exited: ne,
        hasTransition: ve,
      } = IP(C({}, V, { rootRef: n })),
      Y = C({}, V, { exited: ne }),
      fe = q2(Y),
      se = {};
    if ((y.props.tabIndex === void 0 && (se.tabIndex = "-1"), ve)) {
      const { onEnter: ce, onExited: Ce } = L();
      (se.onEnter = ce), (se.onExited = Ce);
    }
    const He =
        (r = (o = D == null ? void 0 : D.root) != null ? o : h.Root) != null
          ? r
          : Q2,
      gt =
        (i = (a = D == null ? void 0 : D.backdrop) != null ? a : h.Backdrop) !=
        null
          ? i
          : c,
      Ke = (l = F == null ? void 0 : F.root) != null ? l : p.root,
      wt = (s = F == null ? void 0 : F.backdrop) != null ? s : p.backdrop,
      ie = ki({
        elementType: He,
        externalSlotProps: Ke,
        externalForwardedProps: U,
        getSlotProps: z,
        additionalProps: { ref: n, as: S },
        ownerState: Y,
        className: le(
          f,
          Ke == null ? void 0 : Ke.className,
          fe == null ? void 0 : fe.root,
          !Y.open && Y.exited && (fe == null ? void 0 : fe.hidden)
        ),
      }),
      Re = ki({
        elementType: gt,
        externalSlotProps: wt,
        additionalProps: d,
        getSlotProps: (ce) =>
          T(
            C({}, ce, {
              onClick: (Ce) => {
                I && I(Ce), ce != null && ce.onClick && ce.onClick(Ce);
              },
            })
          ),
        className: le(
          wt == null ? void 0 : wt.className,
          d == null ? void 0 : d.className,
          fe == null ? void 0 : fe.backdrop
        ),
        ownerState: Y,
      });
    return !M && !j && (!ve || ne)
      ? null
      : k.jsx(CP, {
          ref: H,
          container: g,
          disablePortal: b,
          children: k.jsxs(
            He,
            C({}, ie, {
              children: [
                !$ && c ? k.jsx(gt, C({}, Re)) : null,
                k.jsx(wP, {
                  disableEnforceFocus: _,
                  disableAutoFocus: m,
                  disableRestoreFocus: w,
                  isEnabled: re,
                  open: j,
                  children: v.cloneElement(y, se),
                }),
              ],
            })
          ),
        });
  }),
  J2 = X2,
  Z2 = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "hiddenLabel",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  eO = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = Le({ root: ["root", !n && "underline"], input: ["input"] }, JP, t);
    return C({}, t, o);
  },
  tO = Q(gc, {
    shouldForwardProp: (e) => Lt(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...mc(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    const r = e.palette.mode === "light",
      o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
      i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
      a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
      l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return C(
      {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
        },
        [`&.${eo.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        },
        [`&.${eo.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l,
        },
      },
      !t.disableUnderline && {
        "&::after": {
          borderBottom: `2px solid ${
            (n = (e.vars || e).palette[t.color || "primary"]) == null
              ? void 0
              : n.main
          }`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut,
          }),
          pointerEvents: "none",
        },
        [`&.${eo.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
        [`&.${eo.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main,
          },
        },
        "&::before": {
          borderBottom: `1px solid ${
            e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
              : o
          }`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter,
          }),
          pointerEvents: "none",
        },
        [`&:hover:not(.${eo.disabled}, .${eo.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
        },
        [`&.${eo.disabled}:before`]: { borderBottomStyle: "dotted" },
      },
      t.startAdornment && { paddingLeft: 12 },
      t.endAdornment && { paddingRight: 12 },
      t.multiline &&
        C(
          { padding: "25px 12px 8px" },
          t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
          t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
          t.hiddenLabel &&
            t.size === "small" && { paddingTop: 8, paddingBottom: 9 }
        )
    );
  }),
  nO = Q(yc, { name: "MuiFilledInput", slot: "Input", overridesResolver: vc })(
    ({ theme: e, ownerState: t }) =>
      C(
        { paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 },
        !e.vars && {
          "&:-webkit-autofill": {
            WebkitBoxShadow:
              e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
        },
        e.vars && {
          "&:-webkit-autofill": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
          [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "#fff",
              caretColor: "#fff",
            },
          },
        },
        t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
        t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
        t.startAdornment && { paddingLeft: 0 },
        t.endAdornment && { paddingRight: 0 },
        t.hiddenLabel &&
          t.size === "small" && { paddingTop: 8, paddingBottom: 9 },
        t.multiline && {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }
      )
  ),
  Z1 = v.forwardRef(function (t, n) {
    var r, o, i, a;
    const l = De({ props: t, name: "MuiFilledInput" }),
      {
        components: s = {},
        componentsProps: u,
        fullWidth: c = !1,
        inputComponent: d = "input",
        multiline: f = !1,
        slotProps: x,
        slots: y = {},
        type: g = "text",
      } = l,
      S = J(l, Z2),
      h = C({}, l, { fullWidth: c, inputComponent: d, multiline: f, type: g }),
      p = eO(l),
      m = { root: { ownerState: h }, input: { ownerState: h } },
      _ = x ?? u ? Mt(m, x ?? u) : m,
      E = (r = (o = y.root) != null ? o : s.Root) != null ? r : tO,
      b = (i = (a = y.input) != null ? a : s.Input) != null ? i : nO;
    return k.jsx(
      Sh,
      C(
        {
          slots: { root: E, input: b },
          componentsProps: _,
          fullWidth: c,
          inputComponent: d,
          multiline: f,
          ref: n,
          type: g,
        },
        S,
        { classes: p }
      )
    );
  });
Z1.muiName = "Input";
const eb = Z1;
function rO(e) {
  return Te("MuiFormControl", e);
}
$e("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const oO = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "focused",
    "fullWidth",
    "hiddenLabel",
    "margin",
    "required",
    "size",
    "variant",
  ],
  iO = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = {
        root: ["root", n !== "none" && `margin${ae(n)}`, r && "fullWidth"],
      };
    return Le(o, rO, t);
  },
  aO = Q("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      C({}, t.root, t[`margin${ae(e.margin)}`], e.fullWidth && t.fullWidth),
  })(({ ownerState: e }) =>
    C(
      {
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
      },
      e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
      e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
      e.fullWidth && { width: "100%" }
    )
  ),
  lO = v.forwardRef(function (t, n) {
    const r = De({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: a = "primary",
        component: l = "div",
        disabled: s = !1,
        error: u = !1,
        focused: c,
        fullWidth: d = !1,
        hiddenLabel: f = !1,
        margin: x = "none",
        required: y = !1,
        size: g = "medium",
        variant: S = "outlined",
      } = r,
      h = J(r, oO),
      p = C({}, r, {
        color: a,
        component: l,
        disabled: s,
        error: u,
        fullWidth: d,
        hiddenLabel: f,
        margin: x,
        required: y,
        size: g,
        variant: S,
      }),
      m = iO(p),
      [_, E] = v.useState(() => {
        let F = !1;
        return (
          o &&
            v.Children.forEach(o, (D) => {
              if (!pd(D, ["Input", "Select"])) return;
              const U = pd(D, ["Select"]) ? D.props.input : D;
              U && BP(U.props) && (F = !0);
            }),
          F
        );
      }),
      [b, w] = v.useState(() => {
        let F = !1;
        return (
          o &&
            v.Children.forEach(o, (D) => {
              pd(D, ["Input", "Select"]) &&
                (iu(D.props, !0) || iu(D.props.inputProps, !0)) &&
                (F = !0);
            }),
          F
        );
      }),
      [P, $] = v.useState(!1);
    s && P && $(!1);
    const M = c !== void 0 && !s ? c : P;
    let I;
    const j = v.useMemo(
      () => ({
        adornedStart: _,
        setAdornedStart: E,
        color: a,
        disabled: s,
        error: u,
        filled: b,
        focused: M,
        fullWidth: d,
        hiddenLabel: f,
        size: g,
        onBlur: () => {
          $(!1);
        },
        onEmpty: () => {
          w(!1);
        },
        onFilled: () => {
          w(!0);
        },
        onFocus: () => {
          $(!0);
        },
        registerEffect: I,
        required: y,
        variant: S,
      }),
      [_, a, s, u, b, M, d, f, I, y, g, S]
    );
    return k.jsx(_h.Provider, {
      value: j,
      children: k.jsx(
        aO,
        C({ as: l, ownerState: p, className: le(m.root, i), ref: n }, h, {
          children: o,
        })
      ),
    });
  }),
  sO = lO,
  uO = yR({
    createStyledComponent: Q("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    }),
    useThemeProps: (e) => De({ props: e, name: "MuiStack" }),
  }),
  cO = uO;
function dO(e) {
  return Te("MuiFormControlLabel", e);
}
const fO = $e("MuiFormControlLabel", [
    "root",
    "labelPlacementStart",
    "labelPlacementTop",
    "labelPlacementBottom",
    "disabled",
    "label",
    "error",
    "required",
    "asterisk",
  ]),
  ga = fO,
  pO = [
    "checked",
    "className",
    "componentsProps",
    "control",
    "disabled",
    "disableTypography",
    "inputRef",
    "label",
    "labelPlacement",
    "name",
    "onChange",
    "required",
    "slotProps",
    "value",
  ],
  hO = (e) => {
    const {
        classes: t,
        disabled: n,
        labelPlacement: r,
        error: o,
        required: i,
      } = e,
      a = {
        root: [
          "root",
          n && "disabled",
          `labelPlacement${ae(r)}`,
          o && "error",
          i && "required",
        ],
        label: ["label", n && "disabled"],
        asterisk: ["asterisk", o && "error"],
      };
    return Le(a, dO, t);
  },
  mO = Q("label", {
    name: "MuiFormControlLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${ga.label}`]: t.label },
        t.root,
        t[`labelPlacement${ae(n.labelPlacement)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    C(
      {
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        verticalAlign: "middle",
        WebkitTapHighlightColor: "transparent",
        marginLeft: -11,
        marginRight: 16,
        [`&.${ga.disabled}`]: { cursor: "default" },
      },
      t.labelPlacement === "start" && {
        flexDirection: "row-reverse",
        marginLeft: 16,
        marginRight: -11,
      },
      t.labelPlacement === "top" && {
        flexDirection: "column-reverse",
        marginLeft: 16,
      },
      t.labelPlacement === "bottom" && {
        flexDirection: "column",
        marginLeft: 16,
      },
      {
        [`& .${ga.label}`]: {
          [`&.${ga.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        },
      }
    )
  ),
  vO = Q("span", {
    name: "MuiFormControlLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${ga.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  gO = v.forwardRef(function (t, n) {
    var r, o;
    const i = De({ props: t, name: "MuiFormControlLabel" }),
      {
        className: a,
        componentsProps: l = {},
        control: s,
        disabled: u,
        disableTypography: c,
        label: d,
        labelPlacement: f = "end",
        required: x,
        slotProps: y = {},
      } = i,
      g = J(i, pO),
      S = xr(),
      h =
        (r = u ?? s.props.disabled) != null
          ? r
          : S == null
          ? void 0
          : S.disabled,
      p = x ?? s.props.required,
      m = { disabled: h, required: p };
    ["checked", "name", "onChange", "value", "inputRef"].forEach(($) => {
      typeof s.props[$] > "u" && typeof i[$] < "u" && (m[$] = i[$]);
    });
    const _ = Xr({ props: i, muiFormControl: S, states: ["error"] }),
      E = C({}, i, {
        disabled: h,
        labelPlacement: f,
        required: p,
        error: _.error,
      }),
      b = hO(E),
      w = (o = y.typography) != null ? o : l.typography;
    let P = d;
    return (
      P != null &&
        P.type !== jn &&
        !c &&
        (P = k.jsx(
          jn,
          C({ component: "span" }, w, {
            className: le(b.label, w == null ? void 0 : w.className),
            children: P,
          })
        )),
      k.jsxs(
        mO,
        C({ className: le(b.root, a), ownerState: E, ref: n }, g, {
          children: [
            v.cloneElement(s, m),
            p
              ? k.jsxs(cO, {
                  display: "block",
                  children: [
                    P,
                    k.jsxs(vO, {
                      ownerState: E,
                      "aria-hidden": !0,
                      className: b.asterisk,
                      children: [" ", "*"],
                    }),
                  ],
                })
              : P,
          ],
        })
      )
    );
  }),
  Oa = gO;
function yO(e) {
  return Te("MuiFormGroup", e);
}
$e("MuiFormGroup", ["root", "row", "error"]);
const bO = ["className", "row"],
  xO = (e) => {
    const { classes: t, row: n, error: r } = e;
    return Le({ root: ["root", n && "row", r && "error"] }, yO, t);
  },
  _O = Q("div", {
    name: "MuiFormGroup",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.row && t.row];
    },
  })(({ ownerState: e }) =>
    C(
      { display: "flex", flexDirection: "column", flexWrap: "wrap" },
      e.row && { flexDirection: "row" }
    )
  ),
  SO = v.forwardRef(function (t, n) {
    const r = De({ props: t, name: "MuiFormGroup" }),
      { className: o, row: i = !1 } = r,
      a = J(r, bO),
      l = xr(),
      s = Xr({ props: r, muiFormControl: l, states: ["error"] }),
      u = C({}, r, { row: i, error: s.error }),
      c = xO(u);
    return k.jsx(_O, C({ className: le(c.root, o), ownerState: u, ref: n }, a));
  }),
  tb = SO;
function wO(e) {
  return Te("MuiFormHelperText", e);
}
const EO = $e("MuiFormHelperText", [
    "root",
    "error",
    "disabled",
    "sizeSmall",
    "sizeMedium",
    "contained",
    "focused",
    "filled",
    "required",
  ]),
  Tv = EO;
var $v;
const CO = [
    "children",
    "className",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "margin",
    "required",
    "variant",
  ],
  RO = (e) => {
    const {
        classes: t,
        contained: n,
        size: r,
        disabled: o,
        error: i,
        filled: a,
        focused: l,
        required: s,
      } = e,
      u = {
        root: [
          "root",
          o && "disabled",
          i && "error",
          r && `size${ae(r)}`,
          n && "contained",
          l && "focused",
          a && "filled",
          s && "required",
        ],
      };
    return Le(u, wO, t);
  },
  kO = Q("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size && t[`size${ae(n.size)}`],
        n.contained && t.contained,
        n.filled && t.filled,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    C(
      { color: (e.vars || e).palette.text.secondary },
      e.typography.caption,
      {
        textAlign: "left",
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${Tv.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${Tv.error}`]: { color: (e.vars || e).palette.error.main },
      },
      t.size === "small" && { marginTop: 4 },
      t.contained && { marginLeft: 14, marginRight: 14 }
    )
  ),
  PO = v.forwardRef(function (t, n) {
    const r = De({ props: t, name: "MuiFormHelperText" }),
      { children: o, className: i, component: a = "p" } = r,
      l = J(r, CO),
      s = xr(),
      u = Xr({
        props: r,
        muiFormControl: s,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      c = C({}, r, {
        component: a,
        contained: u.variant === "filled" || u.variant === "outlined",
        variant: u.variant,
        size: u.size,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      d = RO(c);
    return k.jsx(
      kO,
      C({ as: a, ownerState: c, className: le(d.root, i), ref: n }, l, {
        children:
          o === " "
            ? $v ||
              ($v = k.jsx("span", { className: "notranslate", children: "​" }))
            : o,
      })
    );
  }),
  OO = PO;
function TO(e) {
  return Te("MuiFormLabel", e);
}
const $O = $e("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  Ta = $O,
  MO = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "required",
  ],
  AO = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: a,
        required: l,
      } = e,
      s = {
        root: [
          "root",
          `color${ae(n)}`,
          o && "disabled",
          i && "error",
          a && "filled",
          r && "focused",
          l && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      };
    return Le(s, TO, t);
  },
  IO = Q("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      C(
        {},
        t.root,
        e.color === "secondary" && t.colorSecondary,
        e.filled && t.filled
      ),
  })(({ theme: e, ownerState: t }) =>
    C({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      [`&.${Ta.focused}`]: { color: (e.vars || e).palette[t.color].main },
      [`&.${Ta.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${Ta.error}`]: { color: (e.vars || e).palette.error.main },
    })
  ),
  NO = Q("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${Ta.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  LO = v.forwardRef(function (t, n) {
    const r = De({ props: t, name: "MuiFormLabel" }),
      { children: o, className: i, component: a = "label" } = r,
      l = J(r, MO),
      s = xr(),
      u = Xr({
        props: r,
        muiFormControl: s,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      c = C({}, r, {
        color: u.color || "primary",
        component: a,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      d = AO(c);
    return k.jsxs(
      IO,
      C({ as: a, ownerState: c, className: le(d.root, i), ref: n }, l, {
        children: [
          o,
          u.required &&
            k.jsxs(NO, {
              ownerState: c,
              "aria-hidden": !0,
              className: d.asterisk,
              children: [" ", "*"],
            }),
        ],
      })
    );
  }),
  jO = LO,
  FO = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function Df(e) {
  return `scale(${e}, ${e ** 2})`;
}
const DO = {
    entering: { opacity: 1, transform: Df(1) },
    entered: { opacity: 1, transform: "none" },
  },
  bd =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  nb = v.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: a,
        in: l,
        onEnter: s,
        onEntered: u,
        onEntering: c,
        onExit: d,
        onExited: f,
        onExiting: x,
        style: y,
        timeout: g = "auto",
        TransitionComponent: S = G1,
      } = t,
      h = J(t, FO),
      p = M1(),
      m = v.useRef(),
      _ = W1(),
      E = v.useRef(null),
      b = At(E, i.ref, n),
      w = (U) => (V) => {
        if (U) {
          const z = E.current;
          V === void 0 ? U(z) : U(z, V);
        }
      },
      P = w(c),
      $ = w((U, V) => {
        q1(U);
        const {
          duration: z,
          delay: T,
          easing: L,
        } = ru({ style: y, timeout: g, easing: a }, { mode: "enter" });
        let H;
        g === "auto"
          ? ((H = _.transitions.getAutoHeightDuration(U.clientHeight)),
            (m.current = H))
          : (H = z),
          (U.style.transition = [
            _.transitions.create("opacity", { duration: H, delay: T }),
            _.transitions.create("transform", {
              duration: bd ? H : H * 0.666,
              delay: T,
              easing: L,
            }),
          ].join(",")),
          s && s(U, V);
      }),
      M = w(u),
      I = w(x),
      j = w((U) => {
        const {
          duration: V,
          delay: z,
          easing: T,
        } = ru({ style: y, timeout: g, easing: a }, { mode: "exit" });
        let L;
        g === "auto"
          ? ((L = _.transitions.getAutoHeightDuration(U.clientHeight)),
            (m.current = L))
          : (L = V),
          (U.style.transition = [
            _.transitions.create("opacity", { duration: L, delay: z }),
            _.transitions.create("transform", {
              duration: bd ? L : L * 0.666,
              delay: bd ? z : z || L * 0.333,
              easing: T,
            }),
          ].join(",")),
          (U.style.opacity = 0),
          (U.style.transform = Df(0.75)),
          d && d(U);
      }),
      F = w(f),
      D = (U) => {
        g === "auto" && p.start(m.current || 0, U), r && r(E.current, U);
      };
    return k.jsx(
      S,
      C(
        {
          appear: o,
          in: l,
          nodeRef: E,
          onEnter: $,
          onEntered: M,
          onEntering: P,
          onExit: j,
          onExited: F,
          onExiting: I,
          addEndListener: D,
          timeout: g === "auto" ? null : g,
        },
        h,
        {
          children: (U, V) =>
            v.cloneElement(
              i,
              C(
                {
                  style: C(
                    {
                      opacity: 0,
                      transform: Df(0.75),
                      visibility: U === "exited" && !l ? "hidden" : void 0,
                    },
                    DO[U],
                    y,
                    i.props.style
                  ),
                  ref: b,
                },
                V
              )
            ),
        }
      )
    );
  });
nb.muiSupportAuto = !0;
const zO = nb,
  BO = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  UO = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = Le({ root: ["root", !n && "underline"], input: ["input"] }, qP, t);
    return C({}, t, o);
  },
  WO = Q(gc, {
    shouldForwardProp: (e) => Lt(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...mc(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    let r =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.42)"
        : "rgba(255, 255, 255, 0.7)";
    return (
      e.vars &&
        (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
      C(
        { position: "relative" },
        t.formControl && { "label + &": { marginTop: 16 } },
        !t.disableUnderline && {
          "&::after": {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: "none",
          },
          [`&.${ra.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${ra.error}`]: {
            "&::before, &::after": {
              borderBottomColor: (e.vars || e).palette.error.main,
            },
          },
          "&::before": {
            borderBottom: `1px solid ${r}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {
              duration: e.transitions.duration.shorter,
            }),
            pointerEvents: "none",
          },
          [`&:hover:not(.${ra.disabled}, .${ra.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            "@media (hover: none)": { borderBottom: `1px solid ${r}` },
          },
          [`&.${ra.disabled}:before`]: { borderBottomStyle: "dotted" },
        }
      )
    );
  }),
  VO = Q(yc, { name: "MuiInput", slot: "Input", overridesResolver: vc })({}),
  rb = v.forwardRef(function (t, n) {
    var r, o, i, a;
    const l = De({ props: t, name: "MuiInput" }),
      {
        disableUnderline: s,
        components: u = {},
        componentsProps: c,
        fullWidth: d = !1,
        inputComponent: f = "input",
        multiline: x = !1,
        slotProps: y,
        slots: g = {},
        type: S = "text",
      } = l,
      h = J(l, BO),
      p = UO(l),
      _ = { root: { ownerState: { disableUnderline: s } } },
      E = y ?? c ? Mt(y ?? c, _) : _,
      b = (r = (o = g.root) != null ? o : u.Root) != null ? r : WO,
      w = (i = (a = g.input) != null ? a : u.Input) != null ? i : VO;
    return k.jsx(
      Sh,
      C(
        {
          slots: { root: b, input: w },
          slotProps: E,
          fullWidth: d,
          inputComponent: f,
          multiline: x,
          ref: n,
          type: S,
        },
        h,
        { classes: p }
      )
    );
  });
rb.muiName = "Input";
const ob = rb;
function HO(e) {
  return Te("MuiInputLabel", e);
}
$e("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const KO = ["disableAnimation", "margin", "shrink", "variant", "className"],
  GO = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: a,
        required: l,
      } = e,
      s = {
        root: [
          "root",
          n && "formControl",
          !i && "animated",
          o && "shrink",
          r && r !== "normal" && `size${ae(r)}`,
          a,
        ],
        asterisk: [l && "asterisk"],
      },
      u = Le(s, HO, t);
    return C({}, t, u);
  },
  qO = Q(jO, {
    shouldForwardProp: (e) => Lt(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Ta.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    C(
      {
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
      },
      t.formControl && {
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translate(0, 20px) scale(1)",
      },
      t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
      t.shrink && {
        transform: "translate(0, -1.5px) scale(0.75)",
        transformOrigin: "top left",
        maxWidth: "133%",
      },
      !t.disableAnimation && {
        transition: e.transitions.create(["color", "transform", "max-width"], {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
      },
      t.variant === "filled" &&
        C(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(12px, 13px) scale(1)" },
          t.shrink &&
            C(
              {
                userSelect: "none",
                pointerEvents: "auto",
                transform: "translate(12px, 7px) scale(0.75)",
                maxWidth: "calc(133% - 24px)",
              },
              t.size === "small" && {
                transform: "translate(12px, 4px) scale(0.75)",
              }
            )
        ),
      t.variant === "outlined" &&
        C(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(14px, 9px) scale(1)" },
          t.shrink && {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          }
        )
    )
  ),
  QO = v.forwardRef(function (t, n) {
    const r = De({ name: "MuiInputLabel", props: t }),
      { disableAnimation: o = !1, shrink: i, className: a } = r,
      l = J(r, KO),
      s = xr();
    let u = i;
    typeof u > "u" && s && (u = s.filled || s.focused || s.adornedStart);
    const c = Xr({
        props: r,
        muiFormControl: s,
        states: ["size", "variant", "required", "focused"],
      }),
      d = C({}, r, {
        disableAnimation: o,
        formControl: s,
        shrink: u,
        size: c.size,
        variant: c.variant,
        required: c.required,
        focused: c.focused,
      }),
      f = GO(d);
    return k.jsx(
      qO,
      C(
        { "data-shrink": u, ownerState: d, ref: n, className: le(f.root, a) },
        l,
        { classes: f }
      )
    );
  }),
  YO = QO,
  XO = v.createContext({}),
  JO = XO;
function ZO(e) {
  return Te("MuiList", e);
}
$e("MuiList", ["root", "padding", "dense", "subheader"]);
const eT = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  tT = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return Le(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      ZO,
      t
    );
  },
  nT = Q("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    C(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  rT = v.forwardRef(function (t, n) {
    const r = De({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: a = "ul",
        dense: l = !1,
        disablePadding: s = !1,
        subheader: u,
      } = r,
      c = J(r, eT),
      d = v.useMemo(() => ({ dense: l }), [l]),
      f = C({}, r, { component: a, dense: l, disablePadding: s }),
      x = tT(f);
    return k.jsx(JO.Provider, {
      value: d,
      children: k.jsxs(
        nT,
        C({ as: a, className: le(x.root, i), ref: n, ownerState: f }, c, {
          children: [u, o],
        })
      ),
    });
  }),
  oT = rT,
  iT = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ];
function xd(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild;
}
function Mv(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function ib(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.indexOf(t.keys.join("")) === 0
  );
}
function oa(e, t, n, r, o, i) {
  let a = !1,
    l = o(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a) return !1;
      a = !0;
    }
    const s = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !ib(l, i) || s) l = o(e, l, n);
    else return l.focus(), !0;
  }
  return !1;
}
const aT = v.forwardRef(function (t, n) {
    const {
        actions: r,
        autoFocus: o = !1,
        autoFocusItem: i = !1,
        children: a,
        className: l,
        disabledItemsFocusable: s = !1,
        disableListWrap: u = !1,
        onKeyDown: c,
        variant: d = "selectedMenu",
      } = t,
      f = J(t, iT),
      x = v.useRef(null),
      y = v.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      });
    So(() => {
      o && x.current.focus();
    }, [o]),
      v.useImperativeHandle(
        r,
        () => ({
          adjustStyleForScrollbar: (m, { direction: _ }) => {
            const E = !x.current.style.width;
            if (m.clientHeight < x.current.clientHeight && E) {
              const b = `${A1(nn(m))}px`;
              (x.current.style[_ === "rtl" ? "paddingLeft" : "paddingRight"] =
                b),
                (x.current.style.width = `calc(100% + ${b})`);
            }
            return x.current;
          },
        }),
        []
      );
    const g = (m) => {
        const _ = x.current,
          E = m.key,
          b = nn(_).activeElement;
        if (E === "ArrowDown") m.preventDefault(), oa(_, b, u, s, xd);
        else if (E === "ArrowUp") m.preventDefault(), oa(_, b, u, s, Mv);
        else if (E === "Home") m.preventDefault(), oa(_, null, u, s, xd);
        else if (E === "End") m.preventDefault(), oa(_, null, u, s, Mv);
        else if (E.length === 1) {
          const w = y.current,
            P = E.toLowerCase(),
            $ = performance.now();
          w.keys.length > 0 &&
            ($ - w.lastTime > 500
              ? ((w.keys = []), (w.repeating = !0), (w.previousKeyMatched = !0))
              : w.repeating && P !== w.keys[0] && (w.repeating = !1)),
            (w.lastTime = $),
            w.keys.push(P);
          const M = b && !w.repeating && ib(b, w);
          w.previousKeyMatched && (M || oa(_, b, !1, s, xd, w))
            ? m.preventDefault()
            : (w.previousKeyMatched = !1);
        }
        c && c(m);
      },
      S = At(x, n);
    let h = -1;
    v.Children.forEach(a, (m, _) => {
      if (!v.isValidElement(m)) {
        h === _ && ((h += 1), h >= a.length && (h = -1));
        return;
      }
      m.props.disabled ||
        (((d === "selectedMenu" && m.props.selected) || h === -1) && (h = _)),
        h === _ &&
          (m.props.disabled ||
            m.props.muiSkipListHighlight ||
            m.type.muiSkipListHighlight) &&
          ((h += 1), h >= a.length && (h = -1));
    });
    const p = v.Children.map(a, (m, _) => {
      if (_ === h) {
        const E = {};
        return (
          i && (E.autoFocus = !0),
          m.props.tabIndex === void 0 &&
            d === "selectedMenu" &&
            (E.tabIndex = 0),
          v.cloneElement(m, E)
        );
      }
      return m;
    });
    return k.jsx(
      oT,
      C(
        {
          role: "menu",
          ref: S,
          className: l,
          onKeyDown: g,
          tabIndex: o ? 0 : -1,
        },
        f,
        { children: p }
      )
    );
  }),
  lT = aT;
function sT(e) {
  return Te("MuiPopover", e);
}
$e("MuiPopover", ["root", "paper"]);
const uT = ["onEntering"],
  cT = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "slots",
    "slotProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
    "disableScrollLock",
  ],
  dT = ["slotProps"];
function Av(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.height / 2)
      : t === "bottom" && (n = e.height),
    n
  );
}
function Iv(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.width / 2)
      : t === "right" && (n = e.width),
    n
  );
}
function Nv(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function _d(e) {
  return typeof e == "function" ? e() : e;
}
const fT = (e) => {
    const { classes: t } = e;
    return Le({ root: ["root"], paper: ["paper"] }, sT, t);
  },
  pT = Q(J2, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  ab = Q(Wk, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  hT = v.forwardRef(function (t, n) {
    var r, o, i;
    const a = De({ props: t, name: "MuiPopover" }),
      {
        action: l,
        anchorEl: s,
        anchorOrigin: u = { vertical: "top", horizontal: "left" },
        anchorPosition: c,
        anchorReference: d = "anchorEl",
        children: f,
        className: x,
        container: y,
        elevation: g = 8,
        marginThreshold: S = 16,
        open: h,
        PaperProps: p = {},
        slots: m,
        slotProps: _,
        transformOrigin: E = { vertical: "top", horizontal: "left" },
        TransitionComponent: b = zO,
        transitionDuration: w = "auto",
        TransitionProps: { onEntering: P } = {},
        disableScrollLock: $ = !1,
      } = a,
      M = J(a.TransitionProps, uT),
      I = J(a, cT),
      j = (r = _ == null ? void 0 : _.paper) != null ? r : p,
      F = v.useRef(),
      D = At(F, j.ref),
      U = C({}, a, {
        anchorOrigin: u,
        anchorReference: d,
        elevation: g,
        marginThreshold: S,
        externalPaperSlotProps: j,
        transformOrigin: E,
        TransitionComponent: b,
        transitionDuration: w,
        TransitionProps: M,
      }),
      V = fT(U),
      z = v.useCallback(() => {
        if (d === "anchorPosition") return c;
        const ce = _d(s),
          xe = (
            ce && ce.nodeType === 1 ? ce : nn(F.current).body
          ).getBoundingClientRect();
        return {
          top: xe.top + Av(xe, u.vertical),
          left: xe.left + Iv(xe, u.horizontal),
        };
      }, [s, u.horizontal, u.vertical, c, d]),
      T = v.useCallback(
        (ce) => ({
          vertical: Av(ce, E.vertical),
          horizontal: Iv(ce, E.horizontal),
        }),
        [E.horizontal, E.vertical]
      ),
      L = v.useCallback(
        (ce) => {
          const Ce = { width: ce.offsetWidth, height: ce.offsetHeight },
            xe = T(Ce);
          if (d === "none")
            return { top: null, left: null, transformOrigin: Nv(xe) };
          const Vn = z();
          let jt = Vn.top - xe.vertical,
            Ft = Vn.left - xe.horizontal;
          const Qt = jt + Ce.height,
            Dt = Ft + Ce.width,
            ke = wo(_d(s)),
            un = ke.innerHeight - S,
            ct = ke.innerWidth - S;
          if (S !== null && jt < S) {
            const ge = jt - S;
            (jt -= ge), (xe.vertical += ge);
          } else if (S !== null && Qt > un) {
            const ge = Qt - un;
            (jt -= ge), (xe.vertical += ge);
          }
          if (S !== null && Ft < S) {
            const ge = Ft - S;
            (Ft -= ge), (xe.horizontal += ge);
          } else if (Dt > ct) {
            const ge = Dt - ct;
            (Ft -= ge), (xe.horizontal += ge);
          }
          return {
            top: `${Math.round(jt)}px`,
            left: `${Math.round(Ft)}px`,
            transformOrigin: Nv(xe),
          };
        },
        [s, d, z, T, S]
      ),
      [H, re] = v.useState(h),
      ne = v.useCallback(() => {
        const ce = F.current;
        if (!ce) return;
        const Ce = L(ce);
        Ce.top !== null && (ce.style.top = Ce.top),
          Ce.left !== null && (ce.style.left = Ce.left),
          (ce.style.transformOrigin = Ce.transformOrigin),
          re(!0);
      }, [L]);
    v.useEffect(
      () => (
        $ && window.addEventListener("scroll", ne),
        () => window.removeEventListener("scroll", ne)
      ),
      [s, $, ne]
    );
    const ve = (ce, Ce) => {
        P && P(ce, Ce), ne();
      },
      Y = () => {
        re(!1);
      };
    v.useEffect(() => {
      h && ne();
    }),
      v.useImperativeHandle(
        l,
        () =>
          h
            ? {
                updatePosition: () => {
                  ne();
                },
              }
            : null,
        [h, ne]
      ),
      v.useEffect(() => {
        if (!h) return;
        const ce = $1(() => {
            ne();
          }),
          Ce = wo(s);
        return (
          Ce.addEventListener("resize", ce),
          () => {
            ce.clear(), Ce.removeEventListener("resize", ce);
          }
        );
      }, [s, h, ne]);
    let fe = w;
    w === "auto" && !b.muiSupportAuto && (fe = void 0);
    const se = y || (s ? nn(_d(s)).body : void 0),
      He = (o = m == null ? void 0 : m.root) != null ? o : pT,
      gt = (i = m == null ? void 0 : m.paper) != null ? i : ab,
      Ke = ki({
        elementType: gt,
        externalSlotProps: C({}, j, {
          style: H ? j.style : C({}, j.style, { opacity: 0 }),
        }),
        additionalProps: { elevation: g, ref: D },
        ownerState: U,
        className: le(V.paper, j == null ? void 0 : j.className),
      }),
      wt = ki({
        elementType: He,
        externalSlotProps: (_ == null ? void 0 : _.root) || {},
        externalForwardedProps: I,
        additionalProps: {
          ref: n,
          slotProps: { backdrop: { invisible: !0 } },
          container: se,
          open: h,
        },
        ownerState: U,
        className: le(V.root, x),
      }),
      { slotProps: ie } = wt,
      Re = J(wt, dT);
    return k.jsx(
      He,
      C({}, Re, !ou(He) && { slotProps: ie, disableScrollLock: $ }, {
        children: k.jsx(
          b,
          C(
            { appear: !0, in: h, onEntering: ve, onExited: Y, timeout: fe },
            M,
            { children: k.jsx(gt, C({}, Ke, { children: f })) }
          )
        ),
      })
    );
  }),
  mT = hT;
function vT(e) {
  return Te("MuiMenu", e);
}
$e("MuiMenu", ["root", "paper", "list"]);
const gT = ["onEntering"],
  yT = [
    "autoFocus",
    "children",
    "className",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
    "slots",
    "slotProps",
  ],
  bT = { vertical: "top", horizontal: "right" },
  xT = { vertical: "top", horizontal: "left" },
  _T = (e) => {
    const { classes: t } = e;
    return Le({ root: ["root"], paper: ["paper"], list: ["list"] }, vT, t);
  },
  ST = Q(mT, {
    shouldForwardProp: (e) => Lt(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  wT = Q(ab, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  ET = Q(lT, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  CT = v.forwardRef(function (t, n) {
    var r, o;
    const i = De({ props: t, name: "MuiMenu" }),
      {
        autoFocus: a = !0,
        children: l,
        className: s,
        disableAutoFocusItem: u = !1,
        MenuListProps: c = {},
        onClose: d,
        open: f,
        PaperProps: x = {},
        PopoverClasses: y,
        transitionDuration: g = "auto",
        TransitionProps: { onEntering: S } = {},
        variant: h = "selectedMenu",
        slots: p = {},
        slotProps: m = {},
      } = i,
      _ = J(i.TransitionProps, gT),
      E = J(i, yT),
      b = cR(),
      w = C({}, i, {
        autoFocus: a,
        disableAutoFocusItem: u,
        MenuListProps: c,
        onEntering: S,
        PaperProps: x,
        transitionDuration: g,
        TransitionProps: _,
        variant: h,
      }),
      P = _T(w),
      $ = a && !u && f,
      M = v.useRef(null),
      I = (T, L) => {
        M.current &&
          M.current.adjustStyleForScrollbar(T, {
            direction: b ? "rtl" : "ltr",
          }),
          S && S(T, L);
      },
      j = (T) => {
        T.key === "Tab" && (T.preventDefault(), d && d(T, "tabKeyDown"));
      };
    let F = -1;
    v.Children.map(l, (T, L) => {
      v.isValidElement(T) &&
        (T.props.disabled ||
          (((h === "selectedMenu" && T.props.selected) || F === -1) &&
            (F = L)));
    });
    const D = (r = p.paper) != null ? r : wT,
      U = (o = m.paper) != null ? o : x,
      V = ki({
        elementType: p.root,
        externalSlotProps: m.root,
        ownerState: w,
        className: [P.root, s],
      }),
      z = ki({
        elementType: D,
        externalSlotProps: U,
        ownerState: w,
        className: P.paper,
      });
    return k.jsx(
      ST,
      C(
        {
          onClose: d,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: b ? "right" : "left",
          },
          transformOrigin: b ? bT : xT,
          slots: { paper: D, root: p.root },
          slotProps: { root: V, paper: z },
          open: f,
          ref: n,
          transitionDuration: g,
          TransitionProps: C({ onEntering: I }, _),
          ownerState: w,
        },
        E,
        {
          classes: y,
          children: k.jsx(
            ET,
            C(
              {
                onKeyDown: j,
                actions: M,
                autoFocus: a && (F === -1 || u),
                autoFocusItem: $,
                variant: h,
              },
              c,
              { className: le(P.list, c.className), children: l }
            )
          ),
        }
      )
    );
  }),
  RT = CT;
function kT(e) {
  return Te("MuiNativeSelect", e);
}
const PT = $e("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  wh = PT,
  OT = [
    "className",
    "disabled",
    "error",
    "IconComponent",
    "inputRef",
    "variant",
  ],
  TT = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: a,
      } = e,
      l = {
        select: ["select", n, r && "disabled", o && "multiple", a && "error"],
        icon: ["icon", `icon${ae(n)}`, i && "iconOpen", r && "disabled"],
      };
    return Le(l, kT, t);
  },
  lb = ({ ownerState: e, theme: t }) =>
    C(
      {
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": C(
          {},
          t.vars
            ? {
                backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
              }
            : {
                backgroundColor:
                  t.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(255, 255, 255, 0.05)",
              },
          { borderRadius: 0 }
        ),
        "&::-ms-expand": { display: "none" },
        [`&.${wh.disabled}`]: { cursor: "default" },
        "&[multiple]": { height: "auto" },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
          backgroundColor: (t.vars || t).palette.background.paper,
        },
        "&&&": { paddingRight: 24, minWidth: 16 },
      },
      e.variant === "filled" && { "&&&": { paddingRight: 32 } },
      e.variant === "outlined" && {
        borderRadius: (t.vars || t).shape.borderRadius,
        "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
        "&&&": { paddingRight: 32 },
      }
    ),
  $T = Q("select", {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: Lt,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${wh.multiple}`]: t.multiple },
      ];
    },
  })(lb),
  sb = ({ ownerState: e, theme: t }) =>
    C(
      {
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${wh.disabled}`]: { color: (t.vars || t).palette.action.disabled },
      },
      e.open && { transform: "rotate(180deg)" },
      e.variant === "filled" && { right: 7 },
      e.variant === "outlined" && { right: 7 }
    ),
  MT = Q("svg", {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${ae(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(sb),
  AT = v.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        error: i,
        IconComponent: a,
        inputRef: l,
        variant: s = "standard",
      } = t,
      u = J(t, OT),
      c = C({}, t, { disabled: o, variant: s, error: i }),
      d = TT(c);
    return k.jsxs(v.Fragment, {
      children: [
        k.jsx(
          $T,
          C(
            {
              ownerState: c,
              className: le(d.select, r),
              disabled: o,
              ref: l || n,
            },
            u
          )
        ),
        t.multiple
          ? null
          : k.jsx(MT, { as: a, ownerState: c, className: d.icon }),
      ],
    });
  }),
  IT = AT;
var Lv;
const NT = ["children", "classes", "className", "label", "notched"],
  LT = Q("fieldset", { shouldForwardProp: Lt })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  jT = Q("legend", { shouldForwardProp: Lt })(({ ownerState: e, theme: t }) =>
    C(
      { float: "unset", width: "auto", overflow: "hidden" },
      !e.withLabel && {
        padding: 0,
        lineHeight: "11px",
        transition: t.transitions.create("width", {
          duration: 150,
          easing: t.transitions.easing.easeOut,
        }),
      },
      e.withLabel &&
        C(
          {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: t.transitions.create("max-width", {
              duration: 50,
              easing: t.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
          e.notched && {
            maxWidth: "100%",
            transition: t.transitions.create("max-width", {
              duration: 100,
              easing: t.transitions.easing.easeOut,
              delay: 50,
            }),
          }
        )
    )
  );
function FT(e) {
  const { className: t, label: n, notched: r } = e,
    o = J(e, NT),
    i = n != null && n !== "",
    a = C({}, e, { notched: r, withLabel: i });
  return k.jsx(
    LT,
    C({ "aria-hidden": !0, className: t, ownerState: a }, o, {
      children: k.jsx(jT, {
        ownerState: a,
        children: i
          ? k.jsx("span", { children: n })
          : Lv ||
            (Lv = k.jsx("span", { className: "notranslate", children: "​" })),
      }),
    })
  );
}
const DT = [
    "components",
    "fullWidth",
    "inputComponent",
    "label",
    "multiline",
    "notched",
    "slots",
    "type",
  ],
  zT = (e) => {
    const { classes: t } = e,
      r = Le(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        YP,
        t
      );
    return C({}, t, r);
  },
  BT = Q(gc, {
    shouldForwardProp: (e) => Lt(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: mc,
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return C(
      {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${Rr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${Rr.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : n,
          },
        },
        [`&.${Rr.focused} .${Rr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[t.color].main,
          borderWidth: 2,
        },
        [`&.${Rr.error} .${Rr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main,
        },
        [`&.${Rr.disabled} .${Rr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled,
        },
      },
      t.startAdornment && { paddingLeft: 14 },
      t.endAdornment && { paddingRight: 14 },
      t.multiline &&
        C(
          { padding: "16.5px 14px" },
          t.size === "small" && { padding: "8.5px 14px" }
        )
    );
  }),
  UT = Q(FT, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(({ theme: e }) => {
    const t =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: e.vars
        ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
        : t,
    };
  }),
  WT = Q(yc, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: vc,
  })(({ theme: e, ownerState: t }) =>
    C(
      { padding: "16.5px 14px" },
      !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      },
      e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      },
      t.size === "small" && { padding: "8.5px 14px" },
      t.multiline && { padding: 0 },
      t.startAdornment && { paddingLeft: 0 },
      t.endAdornment && { paddingRight: 0 }
    )
  ),
  ub = v.forwardRef(function (t, n) {
    var r, o, i, a, l;
    const s = De({ props: t, name: "MuiOutlinedInput" }),
      {
        components: u = {},
        fullWidth: c = !1,
        inputComponent: d = "input",
        label: f,
        multiline: x = !1,
        notched: y,
        slots: g = {},
        type: S = "text",
      } = s,
      h = J(s, DT),
      p = zT(s),
      m = xr(),
      _ = Xr({
        props: s,
        muiFormControl: m,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      E = C({}, s, {
        color: _.color || "primary",
        disabled: _.disabled,
        error: _.error,
        focused: _.focused,
        formControl: m,
        fullWidth: c,
        hiddenLabel: _.hiddenLabel,
        multiline: x,
        size: _.size,
        type: S,
      }),
      b = (r = (o = g.root) != null ? o : u.Root) != null ? r : BT,
      w = (i = (a = g.input) != null ? a : u.Input) != null ? i : WT;
    return k.jsx(
      Sh,
      C(
        {
          slots: { root: b, input: w },
          renderSuffix: (P) =>
            k.jsx(UT, {
              ownerState: E,
              className: p.notchedOutline,
              label:
                f != null && f !== "" && _.required
                  ? l || (l = k.jsxs(v.Fragment, { children: [f, " ", "*"] }))
                  : f,
              notched:
                typeof y < "u"
                  ? y
                  : !!(P.startAdornment || P.filled || P.focused),
            }),
          fullWidth: c,
          inputComponent: d,
          multiline: x,
          ref: n,
          type: S,
        },
        h,
        { classes: C({}, p, { notchedOutline: null }) }
      )
    );
  });
ub.muiName = "Input";
const cb = ub,
  VT = Bi(
    k.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
    "RadioButtonUnchecked"
  ),
  HT = Bi(
    k.jsx("path", {
      d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z",
    }),
    "RadioButtonChecked"
  ),
  KT = Q("span", { shouldForwardProp: Lt })({
    position: "relative",
    display: "flex",
  }),
  GT = Q(VT)({ transform: "scale(1)" }),
  qT = Q(HT)(({ theme: e, ownerState: t }) =>
    C(
      {
        left: 0,
        position: "absolute",
        transform: "scale(0)",
        transition: e.transitions.create("transform", {
          easing: e.transitions.easing.easeIn,
          duration: e.transitions.duration.shortest,
        }),
      },
      t.checked && {
        transform: "scale(1)",
        transition: e.transitions.create("transform", {
          easing: e.transitions.easing.easeOut,
          duration: e.transitions.duration.shortest,
        }),
      }
    )
  );
function db(e) {
  const { checked: t = !1, classes: n = {}, fontSize: r } = e,
    o = C({}, e, { checked: t });
  return k.jsxs(KT, {
    className: n.root,
    ownerState: o,
    children: [
      k.jsx(GT, { fontSize: r, className: n.background, ownerState: o }),
      k.jsx(qT, { fontSize: r, className: n.dot, ownerState: o }),
    ],
  });
}
const QT = v.createContext(void 0),
  fb = QT;
function YT() {
  return v.useContext(fb);
}
function XT(e) {
  return Te("MuiRadio", e);
}
const jv = $e("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
  ]),
  JT = [
    "checked",
    "checkedIcon",
    "color",
    "icon",
    "name",
    "onChange",
    "size",
    "className",
  ],
  ZT = (e) => {
    const { classes: t, color: n, size: r } = e,
      o = { root: ["root", `color${ae(n)}`, r !== "medium" && `size${ae(r)}`] };
    return C({}, t, Le(o, XT, t));
  },
  e$ = Q(J1, {
    shouldForwardProp: (e) => Lt(e) || e === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size !== "medium" && t[`size${ae(n.size)}`],
        t[`color${ae(n.color)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    C(
      { color: (e.vars || e).palette.text.secondary },
      !t.disableRipple && {
        "&:hover": {
          backgroundColor: e.vars
            ? `rgba(${
                t.color === "default"
                  ? e.vars.palette.action.activeChannel
                  : e.vars.palette[t.color].mainChannel
              } / ${e.vars.palette.action.hoverOpacity})`
            : Ir(
                t.color === "default"
                  ? e.palette.action.active
                  : e.palette[t.color].main,
                e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
      },
      t.color !== "default" && {
        [`&.${jv.checked}`]: { color: (e.vars || e).palette[t.color].main },
      },
      { [`&.${jv.disabled}`]: { color: (e.vars || e).palette.action.disabled } }
    )
  );
function t$(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Fv = k.jsx(db, { checked: !0 }),
  Dv = k.jsx(db, {}),
  n$ = v.forwardRef(function (t, n) {
    var r, o;
    const i = De({ props: t, name: "MuiRadio" }),
      {
        checked: a,
        checkedIcon: l = Fv,
        color: s = "primary",
        icon: u = Dv,
        name: c,
        onChange: d,
        size: f = "medium",
        className: x,
      } = i,
      y = J(i, JT),
      g = C({}, i, { color: s, size: f }),
      S = ZT(g),
      h = YT();
    let p = a;
    const m = $f(d, h && h.onChange);
    let _ = c;
    return (
      h &&
        (typeof p > "u" && (p = t$(h.value, i.value)),
        typeof _ > "u" && (_ = h.name)),
      k.jsx(
        e$,
        C(
          {
            type: "radio",
            icon: v.cloneElement(u, {
              fontSize: (r = Dv.props.fontSize) != null ? r : f,
            }),
            checkedIcon: v.cloneElement(l, {
              fontSize: (o = Fv.props.fontSize) != null ? o : f,
            }),
            ownerState: g,
            classes: S,
            name: _,
            checked: p,
            onChange: m,
            ref: n,
            className: le(S.root, x),
          },
          y
        )
      )
    );
  }),
  ws = n$;
function r$(e) {
  return Te("MuiRadioGroup", e);
}
$e("MuiRadioGroup", ["root", "row", "error"]);
const o$ = [
    "actions",
    "children",
    "className",
    "defaultValue",
    "name",
    "onChange",
    "value",
  ],
  i$ = (e) => {
    const { classes: t, row: n, error: r } = e;
    return Le({ root: ["root", n && "row", r && "error"] }, r$, t);
  },
  a$ = v.forwardRef(function (t, n) {
    const {
        actions: r,
        children: o,
        className: i,
        defaultValue: a,
        name: l,
        onChange: s,
        value: u,
      } = t,
      c = J(t, o$),
      d = v.useRef(null),
      f = i$(t),
      [x, y] = eu({ controlled: u, default: a, name: "RadioGroup" });
    v.useImperativeHandle(
      r,
      () => ({
        focus: () => {
          let p = d.current.querySelector("input:not(:disabled):checked");
          p || (p = d.current.querySelector("input:not(:disabled)")),
            p && p.focus();
        },
      }),
      []
    );
    const g = At(n, d),
      S = mh(l),
      h = v.useMemo(
        () => ({
          name: S,
          onChange(p) {
            y(p.target.value), s && s(p, p.target.value);
          },
          value: x,
        }),
        [S, s, y, x]
      );
    return k.jsx(fb.Provider, {
      value: h,
      children: k.jsx(
        tb,
        C({ role: "radiogroup", ref: g, className: le(f.root, i) }, c, {
          children: o,
        })
      ),
    });
  }),
  pb = a$;
function l$(e) {
  return Te("MuiSelect", e);
}
const ia = $e("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var zv;
const s$ = [
    "aria-describedby",
    "aria-label",
    "autoFocus",
    "autoWidth",
    "children",
    "className",
    "defaultOpen",
    "defaultValue",
    "disabled",
    "displayEmpty",
    "error",
    "IconComponent",
    "inputRef",
    "labelId",
    "MenuProps",
    "multiple",
    "name",
    "onBlur",
    "onChange",
    "onClose",
    "onFocus",
    "onOpen",
    "open",
    "readOnly",
    "renderValue",
    "SelectDisplayProps",
    "tabIndex",
    "type",
    "value",
    "variant",
  ],
  u$ = Q("div", {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${ia.select}`]: t.select },
        { [`&.${ia.select}`]: t[n.variant] },
        { [`&.${ia.error}`]: t.error },
        { [`&.${ia.multiple}`]: t.multiple },
      ];
    },
  })(lb, {
    [`&.${ia.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  c$ = Q("svg", {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${ae(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(sb),
  d$ = Q("input", {
    shouldForwardProp: (e) => H1(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function Bv(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function f$(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const p$ = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: a,
      } = e,
      l = {
        select: ["select", n, r && "disabled", o && "multiple", a && "error"],
        icon: ["icon", `icon${ae(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return Le(l, l$, t);
  },
  h$ = v.forwardRef(function (t, n) {
    var r;
    const {
        "aria-describedby": o,
        "aria-label": i,
        autoFocus: a,
        autoWidth: l,
        children: s,
        className: u,
        defaultOpen: c,
        defaultValue: d,
        disabled: f,
        displayEmpty: x,
        error: y = !1,
        IconComponent: g,
        inputRef: S,
        labelId: h,
        MenuProps: p = {},
        multiple: m,
        name: _,
        onBlur: E,
        onChange: b,
        onClose: w,
        onFocus: P,
        onOpen: $,
        open: M,
        readOnly: I,
        renderValue: j,
        SelectDisplayProps: F = {},
        tabIndex: D,
        value: U,
        variant: V = "standard",
      } = t,
      z = J(t, s$),
      [T, L] = eu({ controlled: U, default: d, name: "Select" }),
      [H, re] = eu({ controlled: M, default: c, name: "Select" }),
      ne = v.useRef(null),
      ve = v.useRef(null),
      [Y, fe] = v.useState(null),
      { current: se } = v.useRef(M != null),
      [He, gt] = v.useState(),
      Ke = At(n, S),
      wt = v.useCallback((Z) => {
        (ve.current = Z), Z && fe(Z);
      }, []),
      ie = Y == null ? void 0 : Y.parentNode;
    v.useImperativeHandle(
      Ke,
      () => ({
        focus: () => {
          ve.current.focus();
        },
        node: ne.current,
        value: T,
      }),
      [T]
    ),
      v.useEffect(() => {
        c &&
          H &&
          Y &&
          !se &&
          (gt(l ? null : ie.clientWidth), ve.current.focus());
      }, [Y, l]),
      v.useEffect(() => {
        a && ve.current.focus();
      }, [a]),
      v.useEffect(() => {
        if (!h) return;
        const Z = nn(ve.current).getElementById(h);
        if (Z) {
          const Ie = () => {
            getSelection().isCollapsed && ve.current.focus();
          };
          return (
            Z.addEventListener("click", Ie),
            () => {
              Z.removeEventListener("click", Ie);
            }
          );
        }
      }, [h]);
    const Re = (Z, Ie) => {
        Z ? $ && $(Ie) : w && w(Ie),
          se || (gt(l ? null : ie.clientWidth), re(Z));
      },
      ce = (Z) => {
        Z.button === 0 && (Z.preventDefault(), ve.current.focus(), Re(!0, Z));
      },
      Ce = (Z) => {
        Re(!1, Z);
      },
      xe = v.Children.toArray(s),
      Vn = (Z) => {
        const Ie = xe.find((Ye) => Ye.props.value === Z.target.value);
        Ie !== void 0 && (L(Ie.props.value), b && b(Z, Ie));
      },
      jt = (Z) => (Ie) => {
        let Ye;
        if (Ie.currentTarget.hasAttribute("tabindex")) {
          if (m) {
            Ye = Array.isArray(T) ? T.slice() : [];
            const rr = T.indexOf(Z.props.value);
            rr === -1 ? Ye.push(Z.props.value) : Ye.splice(rr, 1);
          } else Ye = Z.props.value;
          if (
            (Z.props.onClick && Z.props.onClick(Ie), T !== Ye && (L(Ye), b))
          ) {
            const rr = Ie.nativeEvent || Ie,
              Io = new rr.constructor(rr.type, rr);
            Object.defineProperty(Io, "target", {
              writable: !0,
              value: { value: Ye, name: _ },
            }),
              b(Io, Z);
          }
          m || Re(!1, Ie);
        }
      },
      Ft = (Z) => {
        I ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(Z.key) !== -1 &&
            (Z.preventDefault(), Re(!0, Z)));
      },
      Qt = Y !== null && H,
      Dt = (Z) => {
        !Qt &&
          E &&
          (Object.defineProperty(Z, "target", {
            writable: !0,
            value: { value: T, name: _ },
          }),
          E(Z));
      };
    delete z["aria-invalid"];
    let ke, un;
    const ct = [];
    let ge = !1;
    (iu({ value: T }) || x) && (j ? (ke = j(T)) : (ge = !0));
    const Et = xe.map((Z) => {
      if (!v.isValidElement(Z)) return null;
      let Ie;
      if (m) {
        if (!Array.isArray(T)) throw new Error(xo(2));
        (Ie = T.some((Ye) => Bv(Ye, Z.props.value))),
          Ie && ge && ct.push(Z.props.children);
      } else (Ie = Bv(T, Z.props.value)), Ie && ge && (un = Z.props.children);
      return v.cloneElement(Z, {
        "aria-selected": Ie ? "true" : "false",
        onClick: jt(Z),
        onKeyUp: (Ye) => {
          Ye.key === " " && Ye.preventDefault(),
            Z.props.onKeyUp && Z.props.onKeyUp(Ye);
        },
        role: "option",
        selected: Ie,
        value: void 0,
        "data-value": Z.props.value,
      });
    });
    ge &&
      (m
        ? ct.length === 0
          ? (ke = null)
          : (ke = ct.reduce(
              (Z, Ie, Ye) => (
                Z.push(Ie), Ye < ct.length - 1 && Z.push(", "), Z
              ),
              []
            ))
        : (ke = un));
    let Pn = He;
    !l && se && Y && (Pn = ie.clientWidth);
    let zt;
    typeof D < "u" ? (zt = D) : (zt = f ? null : 0);
    const Ae = F.id || (_ ? `mui-component-select-${_}` : void 0),
      q = C({}, t, { variant: V, value: T, open: Qt, error: y }),
      cn = p$(q),
      Sr = C({}, p.PaperProps, (r = p.slotProps) == null ? void 0 : r.paper),
      wr = mh();
    return k.jsxs(v.Fragment, {
      children: [
        k.jsx(
          u$,
          C(
            {
              ref: wt,
              tabIndex: zt,
              role: "combobox",
              "aria-controls": wr,
              "aria-disabled": f ? "true" : void 0,
              "aria-expanded": Qt ? "true" : "false",
              "aria-haspopup": "listbox",
              "aria-label": i,
              "aria-labelledby": [h, Ae].filter(Boolean).join(" ") || void 0,
              "aria-describedby": o,
              onKeyDown: Ft,
              onMouseDown: f || I ? null : ce,
              onBlur: Dt,
              onFocus: P,
            },
            F,
            {
              ownerState: q,
              className: le(F.className, cn.select, u),
              id: Ae,
              children: f$(ke)
                ? zv ||
                  (zv = k.jsx("span", {
                    className: "notranslate",
                    children: "​",
                  }))
                : ke,
            }
          )
        ),
        k.jsx(
          d$,
          C(
            {
              "aria-invalid": y,
              value: Array.isArray(T) ? T.join(",") : T,
              name: _,
              ref: ne,
              "aria-hidden": !0,
              onChange: Vn,
              tabIndex: -1,
              disabled: f,
              className: cn.nativeInput,
              autoFocus: a,
              ownerState: q,
            },
            z
          )
        ),
        k.jsx(c$, { as: g, className: cn.icon, ownerState: q }),
        k.jsx(
          RT,
          C(
            {
              id: `menu-${_ || ""}`,
              anchorEl: ie,
              open: Qt,
              onClose: Ce,
              anchorOrigin: { vertical: "bottom", horizontal: "center" },
              transformOrigin: { vertical: "top", horizontal: "center" },
            },
            p,
            {
              MenuListProps: C(
                {
                  "aria-labelledby": h,
                  role: "listbox",
                  "aria-multiselectable": m ? "true" : void 0,
                  disableListWrap: !0,
                  id: wr,
                },
                p.MenuListProps
              ),
              slotProps: C({}, p.slotProps, {
                paper: C({}, Sr, {
                  style: C({ minWidth: Pn }, Sr != null ? Sr.style : null),
                }),
              }),
              children: Et,
            }
          )
        ),
      ],
    });
  }),
  m$ = h$,
  v$ = [
    "autoWidth",
    "children",
    "classes",
    "className",
    "defaultOpen",
    "displayEmpty",
    "IconComponent",
    "id",
    "input",
    "inputProps",
    "label",
    "labelId",
    "MenuProps",
    "multiple",
    "native",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "variant",
  ],
  g$ = ["root"],
  y$ = (e) => {
    const { classes: t } = e;
    return t;
  },
  Eh = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => Lt(e) && e !== "variant",
    slot: "Root",
  },
  b$ = Q(ob, Eh)(""),
  x$ = Q(cb, Eh)(""),
  _$ = Q(eb, Eh)(""),
  hb = v.forwardRef(function (t, n) {
    const r = De({ name: "MuiSelect", props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: a = {},
        className: l,
        defaultOpen: s = !1,
        displayEmpty: u = !1,
        IconComponent: c = e2,
        id: d,
        input: f,
        inputProps: x,
        label: y,
        labelId: g,
        MenuProps: S,
        multiple: h = !1,
        native: p = !1,
        onClose: m,
        onOpen: _,
        open: E,
        renderValue: b,
        SelectDisplayProps: w,
        variant: P = "outlined",
      } = r,
      $ = J(r, v$),
      M = p ? IT : m$,
      I = xr(),
      j = Xr({ props: r, muiFormControl: I, states: ["variant", "error"] }),
      F = j.variant || P,
      D = C({}, r, { variant: F, classes: a }),
      U = y$(D),
      V = J(U, g$),
      z =
        f ||
        {
          standard: k.jsx(b$, { ownerState: D }),
          outlined: k.jsx(x$, { label: y, ownerState: D }),
          filled: k.jsx(_$, { ownerState: D }),
        }[F],
      T = At(n, z.ref);
    return k.jsx(v.Fragment, {
      children: v.cloneElement(
        z,
        C(
          {
            inputComponent: M,
            inputProps: C(
              {
                children: i,
                error: j.error,
                IconComponent: c,
                variant: F,
                type: void 0,
                multiple: h,
              },
              p
                ? { id: d }
                : {
                    autoWidth: o,
                    defaultOpen: s,
                    displayEmpty: u,
                    labelId: g,
                    MenuProps: S,
                    onClose: m,
                    onOpen: _,
                    open: E,
                    renderValue: b,
                    SelectDisplayProps: C({ id: d }, w),
                  },
              x,
              { classes: x ? Mt(V, x.classes) : V },
              f ? f.props.inputProps : {}
            ),
          },
          ((h && p) || u) && F === "outlined" ? { notched: !0 } : {},
          { ref: T, className: le(z.props.className, l, U.root) },
          !f && { variant: F },
          $
        )
      ),
    });
  });
hb.muiName = "Select";
const S$ = hb;
function w$(e) {
  return Te("MuiTextField", e);
}
$e("MuiTextField", ["root"]);
const E$ = [
    "autoComplete",
    "autoFocus",
    "children",
    "className",
    "color",
    "defaultValue",
    "disabled",
    "error",
    "FormHelperTextProps",
    "fullWidth",
    "helperText",
    "id",
    "InputLabelProps",
    "inputProps",
    "InputProps",
    "inputRef",
    "label",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "placeholder",
    "required",
    "rows",
    "select",
    "SelectProps",
    "type",
    "value",
    "variant",
  ],
  C$ = { standard: ob, filled: eb, outlined: cb },
  R$ = (e) => {
    const { classes: t } = e;
    return Le({ root: ["root"] }, w$, t);
  },
  k$ = Q(sO, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  P$ = v.forwardRef(function (t, n) {
    const r = De({ props: t, name: "MuiTextField" }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: a,
        className: l,
        color: s = "primary",
        defaultValue: u,
        disabled: c = !1,
        error: d = !1,
        FormHelperTextProps: f,
        fullWidth: x = !1,
        helperText: y,
        id: g,
        InputLabelProps: S,
        inputProps: h,
        InputProps: p,
        inputRef: m,
        label: _,
        maxRows: E,
        minRows: b,
        multiline: w = !1,
        name: P,
        onBlur: $,
        onChange: M,
        onFocus: I,
        placeholder: j,
        required: F = !1,
        rows: D,
        select: U = !1,
        SelectProps: V,
        type: z,
        value: T,
        variant: L = "outlined",
      } = r,
      H = J(r, E$),
      re = C({}, r, {
        autoFocus: i,
        color: s,
        disabled: c,
        error: d,
        fullWidth: x,
        multiline: w,
        required: F,
        select: U,
        variant: L,
      }),
      ne = R$(re),
      ve = {};
    L === "outlined" &&
      (S && typeof S.shrink < "u" && (ve.notched = S.shrink), (ve.label = _)),
      U &&
        ((!V || !V.native) && (ve.id = void 0),
        (ve["aria-describedby"] = void 0));
    const Y = mh(g),
      fe = y && Y ? `${Y}-helper-text` : void 0,
      se = _ && Y ? `${Y}-label` : void 0,
      He = C$[L],
      gt = k.jsx(
        He,
        C(
          {
            "aria-describedby": fe,
            autoComplete: o,
            autoFocus: i,
            defaultValue: u,
            fullWidth: x,
            multiline: w,
            name: P,
            rows: D,
            maxRows: E,
            minRows: b,
            type: z,
            value: T,
            id: Y,
            inputRef: m,
            onBlur: $,
            onChange: M,
            onFocus: I,
            placeholder: j,
            inputProps: h,
          },
          ve,
          p
        )
      );
    return k.jsxs(
      k$,
      C(
        {
          className: le(ne.root, l),
          disabled: c,
          error: d,
          fullWidth: x,
          ref: n,
          required: F,
          color: s,
          variant: L,
          ownerState: re,
        },
        H,
        {
          children: [
            _ != null &&
              _ !== "" &&
              k.jsx(YO, C({ htmlFor: Y, id: se }, S, { children: _ })),
            U
              ? k.jsx(
                  S$,
                  C(
                    {
                      "aria-describedby": fe,
                      id: Y,
                      labelId: se,
                      value: T,
                      input: gt,
                    },
                    V,
                    { children: a }
                  )
                )
              : gt,
            y && k.jsx(OO, C({ id: fe }, f, { children: y })),
          ],
        }
      )
    );
  }),
  zf = P$;
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tt() {
  return (
    (tt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tt.apply(this, arguments)
  );
}
var nt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(nt || (nt = {}));
const Uv = "popstate";
function O$(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: l } = r.location;
    return nl(
      "",
      { pathname: i, search: a, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : wl(o);
  }
  return $$(t, n, null, e);
}
function pe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Oi(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function T$() {
  return Math.random().toString(36).substr(2, 8);
}
function Wv(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function nl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    tt(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? _r(t) : t,
      { state: n, key: (t && t.key) || r || T$() }
    )
  );
}
function wl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function _r(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function $$(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    l = nt.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), a.replaceState(tt({}, a.state, { idx: u }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    l = nt.Pop;
    let S = c(),
      h = S == null ? null : S - u;
    (u = S), s && s({ action: l, location: g.location, delta: h });
  }
  function f(S, h) {
    l = nt.Push;
    let p = nl(g.location, S, h);
    n && n(p, S), (u = c() + 1);
    let m = Wv(p, u),
      _ = g.createHref(p);
    try {
      a.pushState(m, "", _);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(_);
    }
    i && s && s({ action: l, location: g.location, delta: 1 });
  }
  function x(S, h) {
    l = nt.Replace;
    let p = nl(g.location, S, h);
    n && n(p, S), (u = c());
    let m = Wv(p, u),
      _ = g.createHref(p);
    a.replaceState(m, "", _),
      i && s && s({ action: l, location: g.location, delta: 0 });
  }
  function y(S) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof S == "string" ? S : wl(S);
    return (
      (p = p.replace(/ $/, "%20")),
      pe(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, h)
    );
  }
  let g = {
    get action() {
      return l;
    },
    get location() {
      return e(o, a);
    },
    listen(S) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Uv, d),
        (s = S),
        () => {
          o.removeEventListener(Uv, d), (s = null);
        }
      );
    },
    createHref(S) {
      return t(o, S);
    },
    createURL: y,
    encodeLocation(S) {
      let h = y(S);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: f,
    replace: x,
    go(S) {
      return a.go(S);
    },
  };
  return g;
}
var Ze;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ze || (Ze = {}));
const M$ = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function A$(e) {
  return e.index === !0;
}
function Bf(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let a = [...n, i],
        l = typeof o.id == "string" ? o.id : a.join("-");
      if (
        (pe(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route"
        ),
        pe(
          !r[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        A$(o))
      ) {
        let s = tt({}, o, t(o), { id: l });
        return (r[l] = s), s;
      } else {
        let s = tt({}, o, t(o), { id: l, children: void 0 });
        return (
          (r[l] = s), o.children && (s.children = Bf(o.children, t, a, r)), s
        );
      }
    })
  );
}
function ai(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? _r(t) : t,
    o = El(r.pathname || "/", n);
  if (o == null) return null;
  let i = mb(e);
  N$(i);
  let a = null;
  for (let l = 0; a == null && l < i.length; ++l) {
    let s = G$(o);
    a = V$(i[l], s);
  }
  return a;
}
function I$(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function mb(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, a, l) => {
    let s = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (pe(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Vr([r, s.relativePath]),
      c = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (pe(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      mb(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: U$(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, a);
      else for (let s of vb(i.path)) o(i, a, s);
    }),
    t
  );
}
function vb(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let a = vb(r.join("/")),
    l = [];
  return (
    l.push(...a.map((s) => (s === "" ? i : [i, s].join("/")))),
    o && l.push(...a),
    l.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function N$(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : W$(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const L$ = /^:[\w-]+$/,
  j$ = 3,
  F$ = 2,
  D$ = 1,
  z$ = 10,
  B$ = -2,
  Vv = (e) => e === "*";
function U$(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Vv) && (r += B$),
    t && (r += F$),
    n
      .filter((o) => !Vv(o))
      .reduce((o, i) => o + (L$.test(i) ? j$ : i === "" ? D$ : z$), r)
  );
}
function W$(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function V$(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      s = a === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = H$(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = l.route;
    i.push({
      params: r,
      pathname: Vr([o, c.pathname]),
      pathnameBase: Y$(Vr([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (o = Vr([o, c.pathnameBase]));
  }
  return i;
}
function H$(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = K$(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: x } = c;
      if (f === "*") {
        let g = l[d] || "";
        a = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const y = l[d];
      return (
        x && !y ? (u[f] = void 0) : (u[f] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function K$(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Oi(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, l, s) => (
            r.push({ paramName: l, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function G$(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Oi(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function El(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function q$(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? _r(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Q$(n, t)) : t,
    search: X$(r),
    hash: J$(o),
  };
}
function Q$(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Sd(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function gb(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function yb(e, t) {
  let n = gb(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function bb(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = _r(e))
    : ((o = tt({}, e)),
      pe(
        !o.pathname || !o.pathname.includes("?"),
        Sd("?", "pathname", "search", o)
      ),
      pe(
        !o.pathname || !o.pathname.includes("#"),
        Sd("#", "pathname", "hash", o)
      ),
      pe(!o.search || !o.search.includes("#"), Sd("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    l;
  if (a == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      o.pathname = f.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let s = q$(o, l),
    u = a && a !== "/" && a.endsWith("/"),
    c = (i || a === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const Vr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Y$ = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  X$ = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  J$ = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Ch {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function xb(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const _b = ["post", "put", "patch", "delete"],
  Z$ = new Set(_b),
  eM = ["get", ..._b],
  tM = new Set(eM),
  nM = new Set([301, 302, 303, 307, 308]),
  rM = new Set([307, 308]),
  wd = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  oM = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  aa = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Sb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  iM = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  wb = "remix-router-transitions";
function aM(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  pe(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let R = e.detectErrorBoundary;
    o = (O) => ({ hasErrorBoundary: R(O) });
  } else o = iM;
  let i = {},
    a = Bf(e.routes, o, void 0, i),
    l,
    s = e.basename || "/",
    u = tt(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    c = null,
    d = new Set(),
    f = null,
    x = null,
    y = null,
    g = e.hydrationData != null,
    S = ai(a, e.history.location, s),
    h = null;
  if (S == null) {
    let R = fn(404, { pathname: e.history.location.pathname }),
      { matches: O, route: A } = Jv(a);
    (S = O), (h = { [A.id]: R });
  }
  let p,
    m = S.some((R) => R.route.lazy),
    _ = S.some((R) => R.route.loader);
  if (m) p = !1;
  else if (!_) p = !0;
  else if (u.v7_partialHydration) {
    let R = e.hydrationData ? e.hydrationData.loaderData : null,
      O = e.hydrationData ? e.hydrationData.errors : null,
      A = (B) =>
        B.route.loader
          ? B.route.loader.hydrate === !0
            ? !1
            : (R && R[B.route.id] !== void 0) || (O && O[B.route.id] !== void 0)
          : !0;
    if (O) {
      let B = S.findIndex((G) => O[G.route.id] !== void 0);
      p = S.slice(0, B + 1).every(A);
    } else p = S.every(A);
  } else p = e.hydrationData != null;
  let E,
    b = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: S,
      initialized: p,
      navigation: wd,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || h,
      fetchers: new Map(),
      blockers: new Map(),
    },
    w = nt.Pop,
    P = !1,
    $,
    M = !1,
    I = new Map(),
    j = null,
    F = !1,
    D = !1,
    U = [],
    V = [],
    z = new Map(),
    T = 0,
    L = -1,
    H = new Map(),
    re = new Set(),
    ne = new Map(),
    ve = new Map(),
    Y = new Set(),
    fe = new Map(),
    se = new Map(),
    He = !1;
  function gt() {
    if (
      ((c = e.history.listen((R) => {
        let { action: O, location: A, delta: B } = R;
        if (He) {
          He = !1;
          return;
        }
        Oi(
          se.size === 0 || B != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let G = rr({
          currentLocation: b.location,
          nextLocation: A,
          historyAction: O,
        });
        if (G && B != null) {
          (He = !0),
            e.history.go(B * -1),
            Ye(G, {
              state: "blocked",
              location: A,
              proceed() {
                Ye(G, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: A,
                }),
                  e.history.go(B);
              },
              reset() {
                let de = new Map(b.blockers);
                de.set(G, aa), ie({ blockers: de });
              },
            });
          return;
        }
        return xe(O, A);
      })),
      n)
    ) {
      gM(t, I);
      let R = () => yM(t, I);
      t.addEventListener("pagehide", R),
        (j = () => t.removeEventListener("pagehide", R));
    }
    return b.initialized || xe(nt.Pop, b.location, { initialHydration: !0 }), E;
  }
  function Ke() {
    c && c(),
      j && j(),
      d.clear(),
      $ && $.abort(),
      b.fetchers.forEach((R, O) => zt(O)),
      b.blockers.forEach((R, O) => Ie(O));
  }
  function wt(R) {
    return d.add(R), () => d.delete(R);
  }
  function ie(R, O) {
    O === void 0 && (O = {}), (b = tt({}, b, R));
    let A = [],
      B = [];
    u.v7_fetcherPersist &&
      b.fetchers.forEach((G, de) => {
        G.state === "idle" && (Y.has(de) ? B.push(de) : A.push(de));
      }),
      [...d].forEach((G) =>
        G(b, {
          deletedFetchers: B,
          unstable_viewTransitionOpts: O.viewTransitionOpts,
          unstable_flushSync: O.flushSync === !0,
        })
      ),
      u.v7_fetcherPersist &&
        (A.forEach((G) => b.fetchers.delete(G)), B.forEach((G) => zt(G)));
  }
  function Re(R, O, A) {
    var B, G;
    let { flushSync: de } = A === void 0 ? {} : A,
      oe =
        b.actionData != null &&
        b.navigation.formMethod != null &&
        Mn(b.navigation.formMethod) &&
        b.navigation.state === "loading" &&
        ((B = R.state) == null ? void 0 : B._isRedirect) !== !0,
      ee;
    O.actionData
      ? Object.keys(O.actionData).length > 0
        ? (ee = O.actionData)
        : (ee = null)
      : oe
      ? (ee = b.actionData)
      : (ee = null);
    let X = O.loaderData
        ? Xv(b.loaderData, O.loaderData, O.matches || [], O.errors)
        : b.loaderData,
      me = b.blockers;
    me.size > 0 && ((me = new Map(me)), me.forEach((je, yt) => me.set(yt, aa)));
    let dt =
      P === !0 ||
      (b.navigation.formMethod != null &&
        Mn(b.navigation.formMethod) &&
        ((G = R.state) == null ? void 0 : G._isRedirect) !== !0);
    l && ((a = l), (l = void 0)),
      F ||
        w === nt.Pop ||
        (w === nt.Push
          ? e.history.push(R, R.state)
          : w === nt.Replace && e.history.replace(R, R.state));
    let ue;
    if (w === nt.Pop) {
      let je = I.get(b.location.pathname);
      je && je.has(R.pathname)
        ? (ue = { currentLocation: b.location, nextLocation: R })
        : I.has(R.pathname) &&
          (ue = { currentLocation: R, nextLocation: b.location });
    } else if (M) {
      let je = I.get(b.location.pathname);
      je
        ? je.add(R.pathname)
        : ((je = new Set([R.pathname])), I.set(b.location.pathname, je)),
        (ue = { currentLocation: b.location, nextLocation: R });
    }
    ie(
      tt({}, O, {
        actionData: ee,
        loaderData: X,
        historyAction: w,
        location: R,
        initialized: !0,
        navigation: wd,
        revalidation: "idle",
        restoreScrollPosition: Lh(R, O.matches || b.matches),
        preventScrollReset: dt,
        blockers: me,
      }),
      { viewTransitionOpts: ue, flushSync: de === !0 }
    ),
      (w = nt.Pop),
      (P = !1),
      (M = !1),
      (F = !1),
      (D = !1),
      (U = []),
      (V = []);
  }
  async function ce(R, O) {
    if (typeof R == "number") {
      e.history.go(R);
      return;
    }
    let A = Uf(
        b.location,
        b.matches,
        s,
        u.v7_prependBasename,
        R,
        u.v7_relativeSplatPath,
        O == null ? void 0 : O.fromRouteId,
        O == null ? void 0 : O.relative
      ),
      {
        path: B,
        submission: G,
        error: de,
      } = Hv(u.v7_normalizeFormMethod, !1, A, O),
      oe = b.location,
      ee = nl(b.location, B, O && O.state);
    ee = tt({}, ee, e.history.encodeLocation(ee));
    let X = O && O.replace != null ? O.replace : void 0,
      me = nt.Push;
    X === !0
      ? (me = nt.Replace)
      : X === !1 ||
        (G != null &&
          Mn(G.formMethod) &&
          G.formAction === b.location.pathname + b.location.search &&
          (me = nt.Replace));
    let dt =
        O && "preventScrollReset" in O ? O.preventScrollReset === !0 : void 0,
      ue = (O && O.unstable_flushSync) === !0,
      je = rr({ currentLocation: oe, nextLocation: ee, historyAction: me });
    if (je) {
      Ye(je, {
        state: "blocked",
        location: ee,
        proceed() {
          Ye(je, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ee,
          }),
            ce(R, O);
        },
        reset() {
          let yt = new Map(b.blockers);
          yt.set(je, aa), ie({ blockers: yt });
        },
      });
      return;
    }
    return await xe(me, ee, {
      submission: G,
      pendingError: de,
      preventScrollReset: dt,
      replace: O && O.replace,
      enableViewTransition: O && O.unstable_viewTransition,
      flushSync: ue,
    });
  }
  function Ce() {
    if (
      (ct(),
      ie({ revalidation: "loading" }),
      b.navigation.state !== "submitting")
    ) {
      if (b.navigation.state === "idle") {
        xe(b.historyAction, b.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      xe(w || b.historyAction, b.navigation.location, {
        overrideNavigation: b.navigation,
      });
    }
  }
  async function xe(R, O, A) {
    $ && $.abort(),
      ($ = null),
      (w = R),
      (F = (A && A.startUninterruptedRevalidation) === !0),
      Lx(b.location, b.matches),
      (P = (A && A.preventScrollReset) === !0),
      (M = (A && A.enableViewTransition) === !0);
    let B = l || a,
      G = A && A.overrideNavigation,
      de = ai(B, O, s),
      oe = (A && A.flushSync) === !0;
    if (!de) {
      let yt = fn(404, { pathname: O.pathname }),
        { matches: Yt, route: ft } = Jv(B);
      Io(),
        Re(
          O,
          { matches: Yt, loaderData: {}, errors: { [ft.id]: yt } },
          { flushSync: oe }
        );
      return;
    }
    if (
      b.initialized &&
      !D &&
      dM(b.location, O) &&
      !(A && A.submission && Mn(A.submission.formMethod))
    ) {
      Re(O, { matches: de }, { flushSync: oe });
      return;
    }
    $ = new AbortController();
    let ee = sa(e.history, O, $.signal, A && A.submission),
      X,
      me;
    if (A && A.pendingError) me = { [$a(de).route.id]: A.pendingError };
    else if (A && A.submission && Mn(A.submission.formMethod)) {
      let yt = await Vn(ee, O, A.submission, de, {
        replace: A.replace,
        flushSync: oe,
      });
      if (yt.shortCircuited) return;
      (X = yt.pendingActionData),
        (me = yt.pendingActionError),
        (G = Ed(O, A.submission)),
        (oe = !1),
        (ee = new Request(ee.url, { signal: ee.signal }));
    }
    let {
      shortCircuited: dt,
      loaderData: ue,
      errors: je,
    } = await jt(
      ee,
      O,
      de,
      G,
      A && A.submission,
      A && A.fetcherSubmission,
      A && A.replace,
      A && A.initialHydration === !0,
      oe,
      X,
      me
    );
    dt ||
      (($ = null),
      Re(
        O,
        tt({ matches: de }, X ? { actionData: X } : {}, {
          loaderData: ue,
          errors: je,
        })
      ));
  }
  async function Vn(R, O, A, B, G) {
    G === void 0 && (G = {}), ct();
    let de = mM(O, A);
    ie({ navigation: de }, { flushSync: G.flushSync === !0 });
    let oe,
      ee = Vf(B, O);
    if (!ee.route.action && !ee.route.lazy)
      oe = {
        type: Ze.error,
        error: fn(405, {
          method: R.method,
          pathname: O.pathname,
          routeId: ee.route.id,
        }),
      };
    else if (
      ((oe = await la("action", R, ee, B, i, o, s, u.v7_relativeSplatPath)),
      R.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (co(oe)) {
      let X;
      return (
        G && G.replace != null
          ? (X = G.replace)
          : (X = oe.location === b.location.pathname + b.location.search),
        await ke(b, oe, { submission: A, replace: X }),
        { shortCircuited: !0 }
      );
    }
    if (li(oe)) {
      let X = $a(B, ee.route.id);
      return (
        (G && G.replace) !== !0 && (w = nt.Push),
        {
          pendingActionData: {},
          pendingActionError: { [X.route.id]: oe.error },
        }
      );
    }
    if (uo(oe)) throw fn(400, { type: "defer-action" });
    return { pendingActionData: { [ee.route.id]: oe.data } };
  }
  async function jt(R, O, A, B, G, de, oe, ee, X, me, dt) {
    let ue = B || Ed(O, G),
      je = G || de || tg(ue),
      yt = l || a,
      [Yt, ft] = Kv(
        e.history,
        b,
        A,
        je,
        O,
        u.v7_partialHydration && ee === !0,
        D,
        U,
        V,
        Y,
        ne,
        re,
        yt,
        s,
        me,
        dt
      );
    if (
      (Io(
        (Se) =>
          !(A && A.some((Ne) => Ne.route.id === Se)) ||
          (Yt && Yt.some((Ne) => Ne.route.id === Se))
      ),
      (L = ++T),
      Yt.length === 0 && ft.length === 0)
    ) {
      let Se = Sr();
      return (
        Re(
          O,
          tt(
            { matches: A, loaderData: {}, errors: dt || null },
            me ? { actionData: me } : {},
            Se ? { fetchers: new Map(b.fetchers) } : {}
          ),
          { flushSync: X }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!F && (!u.v7_partialHydration || !ee)) {
      ft.forEach((Ne) => {
        let Bt = b.fetchers.get(Ne.key),
          Al = ua(void 0, Bt ? Bt.data : void 0);
        b.fetchers.set(Ne.key, Al);
      });
      let Se = me || b.actionData;
      ie(
        tt(
          { navigation: ue },
          Se
            ? Object.keys(Se).length === 0
              ? { actionData: null }
              : { actionData: Se }
            : {},
          ft.length > 0 ? { fetchers: new Map(b.fetchers) } : {}
        ),
        { flushSync: X }
      );
    }
    ft.forEach((Se) => {
      z.has(Se.key) && q(Se.key), Se.controller && z.set(Se.key, Se.controller);
    });
    let No = () => ft.forEach((Se) => q(Se.key));
    $ && $.signal.addEventListener("abort", No);
    let {
      results: Ic,
      loaderResults: Lo,
      fetcherResults: Er,
    } = await un(b.matches, A, Yt, ft, R);
    if (R.signal.aborted) return { shortCircuited: !0 };
    $ && $.signal.removeEventListener("abort", No),
      ft.forEach((Se) => z.delete(Se.key));
    let Zr = Zv(Ic);
    if (Zr) {
      if (Zr.idx >= Yt.length) {
        let Se = ft[Zr.idx - Yt.length].key;
        re.add(Se);
      }
      return await ke(b, Zr.result, { replace: oe }), { shortCircuited: !0 };
    }
    let { loaderData: Nc, errors: Ki } = Yv(b, A, Yt, Lo, dt, ft, Er, fe);
    fe.forEach((Se, Ne) => {
      Se.subscribe((Bt) => {
        (Bt || Se.done) && fe.delete(Ne);
      });
    }),
      u.v7_partialHydration &&
        ee &&
        b.errors &&
        Object.entries(b.errors)
          .filter((Se) => {
            let [Ne] = Se;
            return !Yt.some((Bt) => Bt.route.id === Ne);
          })
          .forEach((Se) => {
            let [Ne, Bt] = Se;
            Ki = Object.assign(Ki || {}, { [Ne]: Bt });
          });
    let Lc = Sr(),
      jo = wr(L),
      Ml = Lc || jo || ft.length > 0;
    return tt(
      { loaderData: Nc, errors: Ki },
      Ml ? { fetchers: new Map(b.fetchers) } : {}
    );
  }
  function Ft(R, O, A, B) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    z.has(R) && q(R);
    let G = (B && B.unstable_flushSync) === !0,
      de = l || a,
      oe = Uf(
        b.location,
        b.matches,
        s,
        u.v7_prependBasename,
        A,
        u.v7_relativeSplatPath,
        O,
        B == null ? void 0 : B.relative
      ),
      ee = ai(de, oe, s);
    if (!ee) {
      Et(R, O, fn(404, { pathname: oe }), { flushSync: G });
      return;
    }
    let {
      path: X,
      submission: me,
      error: dt,
    } = Hv(u.v7_normalizeFormMethod, !0, oe, B);
    if (dt) {
      Et(R, O, dt, { flushSync: G });
      return;
    }
    let ue = Vf(ee, X);
    if (((P = (B && B.preventScrollReset) === !0), me && Mn(me.formMethod))) {
      Qt(R, O, X, ue, ee, G, me);
      return;
    }
    ne.set(R, { routeId: O, path: X }), Dt(R, O, X, ue, ee, G, me);
  }
  async function Qt(R, O, A, B, G, de, oe) {
    if ((ct(), ne.delete(R), !B.route.action && !B.route.lazy)) {
      let Ne = fn(405, { method: oe.formMethod, pathname: A, routeId: O });
      Et(R, O, Ne, { flushSync: de });
      return;
    }
    let ee = b.fetchers.get(R);
    ge(R, vM(oe, ee), { flushSync: de });
    let X = new AbortController(),
      me = sa(e.history, A, X.signal, oe);
    z.set(R, X);
    let dt = T,
      ue = await la("action", me, B, G, i, o, s, u.v7_relativeSplatPath);
    if (me.signal.aborted) {
      z.get(R) === X && z.delete(R);
      return;
    }
    if (u.v7_fetcherPersist && Y.has(R)) {
      if (co(ue) || li(ue)) {
        ge(R, kr(void 0));
        return;
      }
    } else {
      if (co(ue))
        if ((z.delete(R), L > dt)) {
          ge(R, kr(void 0));
          return;
        } else
          return re.add(R), ge(R, ua(oe)), ke(b, ue, { fetcherSubmission: oe });
      if (li(ue)) {
        Et(R, O, ue.error);
        return;
      }
    }
    if (uo(ue)) throw fn(400, { type: "defer-action" });
    let je = b.navigation.location || b.location,
      yt = sa(e.history, je, X.signal),
      Yt = l || a,
      ft =
        b.navigation.state !== "idle"
          ? ai(Yt, b.navigation.location, s)
          : b.matches;
    pe(ft, "Didn't find any matches after fetcher action");
    let No = ++T;
    H.set(R, No);
    let Ic = ua(oe, ue.data);
    b.fetchers.set(R, Ic);
    let [Lo, Er] = Kv(
      e.history,
      b,
      ft,
      oe,
      je,
      !1,
      D,
      U,
      V,
      Y,
      ne,
      re,
      Yt,
      s,
      { [B.route.id]: ue.data },
      void 0
    );
    Er.filter((Ne) => Ne.key !== R).forEach((Ne) => {
      let Bt = Ne.key,
        Al = b.fetchers.get(Bt),
        Fx = ua(void 0, Al ? Al.data : void 0);
      b.fetchers.set(Bt, Fx),
        z.has(Bt) && q(Bt),
        Ne.controller && z.set(Bt, Ne.controller);
    }),
      ie({ fetchers: new Map(b.fetchers) });
    let Zr = () => Er.forEach((Ne) => q(Ne.key));
    X.signal.addEventListener("abort", Zr);
    let {
      results: Nc,
      loaderResults: Ki,
      fetcherResults: Lc,
    } = await un(b.matches, ft, Lo, Er, yt);
    if (X.signal.aborted) return;
    X.signal.removeEventListener("abort", Zr),
      H.delete(R),
      z.delete(R),
      Er.forEach((Ne) => z.delete(Ne.key));
    let jo = Zv(Nc);
    if (jo) {
      if (jo.idx >= Lo.length) {
        let Ne = Er[jo.idx - Lo.length].key;
        re.add(Ne);
      }
      return ke(b, jo.result);
    }
    let { loaderData: Ml, errors: Se } = Yv(
      b,
      b.matches,
      Lo,
      Ki,
      void 0,
      Er,
      Lc,
      fe
    );
    if (b.fetchers.has(R)) {
      let Ne = kr(ue.data);
      b.fetchers.set(R, Ne);
    }
    wr(No),
      b.navigation.state === "loading" && No > L
        ? (pe(w, "Expected pending action"),
          $ && $.abort(),
          Re(b.navigation.location, {
            matches: ft,
            loaderData: Ml,
            errors: Se,
            fetchers: new Map(b.fetchers),
          }))
        : (ie({
            errors: Se,
            loaderData: Xv(b.loaderData, Ml, ft, Se),
            fetchers: new Map(b.fetchers),
          }),
          (D = !1));
  }
  async function Dt(R, O, A, B, G, de, oe) {
    let ee = b.fetchers.get(R);
    ge(R, ua(oe, ee ? ee.data : void 0), { flushSync: de });
    let X = new AbortController(),
      me = sa(e.history, A, X.signal);
    z.set(R, X);
    let dt = T,
      ue = await la("loader", me, B, G, i, o, s, u.v7_relativeSplatPath);
    if (
      (uo(ue) && (ue = (await Rb(ue, me.signal, !0)) || ue),
      z.get(R) === X && z.delete(R),
      !me.signal.aborted)
    ) {
      if (Y.has(R)) {
        ge(R, kr(void 0));
        return;
      }
      if (co(ue))
        if (L > dt) {
          ge(R, kr(void 0));
          return;
        } else {
          re.add(R), await ke(b, ue);
          return;
        }
      if (li(ue)) {
        Et(R, O, ue.error);
        return;
      }
      pe(!uo(ue), "Unhandled fetcher deferred data"), ge(R, kr(ue.data));
    }
  }
  async function ke(R, O, A) {
    let {
      submission: B,
      fetcherSubmission: G,
      replace: de,
    } = A === void 0 ? {} : A;
    O.revalidate && (D = !0);
    let oe = nl(R.location, O.location, { _isRedirect: !0 });
    if ((pe(oe, "Expected a location on the redirect navigation"), n)) {
      let je = !1;
      if (O.reloadDocument) je = !0;
      else if (Sb.test(O.location)) {
        const yt = e.history.createURL(O.location);
        je = yt.origin !== t.location.origin || El(yt.pathname, s) == null;
      }
      if (je) {
        de ? t.location.replace(O.location) : t.location.assign(O.location);
        return;
      }
    }
    $ = null;
    let ee = de === !0 ? nt.Replace : nt.Push,
      { formMethod: X, formAction: me, formEncType: dt } = R.navigation;
    !B && !G && X && me && dt && (B = tg(R.navigation));
    let ue = B || G;
    if (rM.has(O.status) && ue && Mn(ue.formMethod))
      await xe(ee, oe, {
        submission: tt({}, ue, { formAction: O.location }),
        preventScrollReset: P,
      });
    else {
      let je = Ed(oe, B);
      await xe(ee, oe, {
        overrideNavigation: je,
        fetcherSubmission: G,
        preventScrollReset: P,
      });
    }
  }
  async function un(R, O, A, B, G) {
    let de = await Promise.all([
        ...A.map((X) => la("loader", G, X, O, i, o, s, u.v7_relativeSplatPath)),
        ...B.map((X) =>
          X.matches && X.match && X.controller
            ? la(
                "loader",
                sa(e.history, X.path, X.controller.signal),
                X.match,
                X.matches,
                i,
                o,
                s,
                u.v7_relativeSplatPath
              )
            : { type: Ze.error, error: fn(404, { pathname: X.path }) }
        ),
      ]),
      oe = de.slice(0, A.length),
      ee = de.slice(A.length);
    return (
      await Promise.all([
        eg(
          R,
          A,
          oe,
          oe.map(() => G.signal),
          !1,
          b.loaderData
        ),
        eg(
          R,
          B.map((X) => X.match),
          ee,
          B.map((X) => (X.controller ? X.controller.signal : null)),
          !0
        ),
      ]),
      { results: de, loaderResults: oe, fetcherResults: ee }
    );
  }
  function ct() {
    (D = !0),
      U.push(...Io()),
      ne.forEach((R, O) => {
        z.has(O) && (V.push(O), q(O));
      });
  }
  function ge(R, O, A) {
    A === void 0 && (A = {}),
      b.fetchers.set(R, O),
      ie(
        { fetchers: new Map(b.fetchers) },
        { flushSync: (A && A.flushSync) === !0 }
      );
  }
  function Et(R, O, A, B) {
    B === void 0 && (B = {});
    let G = $a(b.matches, O);
    zt(R),
      ie(
        { errors: { [G.route.id]: A }, fetchers: new Map(b.fetchers) },
        { flushSync: (B && B.flushSync) === !0 }
      );
  }
  function Pn(R) {
    return (
      u.v7_fetcherPersist &&
        (ve.set(R, (ve.get(R) || 0) + 1), Y.has(R) && Y.delete(R)),
      b.fetchers.get(R) || oM
    );
  }
  function zt(R) {
    let O = b.fetchers.get(R);
    z.has(R) && !(O && O.state === "loading" && H.has(R)) && q(R),
      ne.delete(R),
      H.delete(R),
      re.delete(R),
      Y.delete(R),
      b.fetchers.delete(R);
  }
  function Ae(R) {
    if (u.v7_fetcherPersist) {
      let O = (ve.get(R) || 0) - 1;
      O <= 0 ? (ve.delete(R), Y.add(R)) : ve.set(R, O);
    } else zt(R);
    ie({ fetchers: new Map(b.fetchers) });
  }
  function q(R) {
    let O = z.get(R);
    pe(O, "Expected fetch controller: " + R), O.abort(), z.delete(R);
  }
  function cn(R) {
    for (let O of R) {
      let A = Pn(O),
        B = kr(A.data);
      b.fetchers.set(O, B);
    }
  }
  function Sr() {
    let R = [],
      O = !1;
    for (let A of re) {
      let B = b.fetchers.get(A);
      pe(B, "Expected fetcher: " + A),
        B.state === "loading" && (re.delete(A), R.push(A), (O = !0));
    }
    return cn(R), O;
  }
  function wr(R) {
    let O = [];
    for (let [A, B] of H)
      if (B < R) {
        let G = b.fetchers.get(A);
        pe(G, "Expected fetcher: " + A),
          G.state === "loading" && (q(A), H.delete(A), O.push(A));
      }
    return cn(O), O.length > 0;
  }
  function Z(R, O) {
    let A = b.blockers.get(R) || aa;
    return se.get(R) !== O && se.set(R, O), A;
  }
  function Ie(R) {
    b.blockers.delete(R), se.delete(R);
  }
  function Ye(R, O) {
    let A = b.blockers.get(R) || aa;
    pe(
      (A.state === "unblocked" && O.state === "blocked") ||
        (A.state === "blocked" && O.state === "blocked") ||
        (A.state === "blocked" && O.state === "proceeding") ||
        (A.state === "blocked" && O.state === "unblocked") ||
        (A.state === "proceeding" && O.state === "unblocked"),
      "Invalid blocker state transition: " + A.state + " -> " + O.state
    );
    let B = new Map(b.blockers);
    B.set(R, O), ie({ blockers: B });
  }
  function rr(R) {
    let { currentLocation: O, nextLocation: A, historyAction: B } = R;
    if (se.size === 0) return;
    se.size > 1 && Oi(!1, "A router only supports one blocker at a time");
    let G = Array.from(se.entries()),
      [de, oe] = G[G.length - 1],
      ee = b.blockers.get(de);
    if (
      !(ee && ee.state === "proceeding") &&
      oe({ currentLocation: O, nextLocation: A, historyAction: B })
    )
      return de;
  }
  function Io(R) {
    let O = [];
    return (
      fe.forEach((A, B) => {
        (!R || R(B)) && (A.cancel(), O.push(B), fe.delete(B));
      }),
      O
    );
  }
  function Nx(R, O, A) {
    if (((f = R), (y = O), (x = A || null), !g && b.navigation === wd)) {
      g = !0;
      let B = Lh(b.location, b.matches);
      B != null && ie({ restoreScrollPosition: B });
    }
    return () => {
      (f = null), (y = null), (x = null);
    };
  }
  function Nh(R, O) {
    return (
      (x &&
        x(
          R,
          O.map((B) => I$(B, b.loaderData))
        )) ||
      R.key
    );
  }
  function Lx(R, O) {
    if (f && y) {
      let A = Nh(R, O);
      f[A] = y();
    }
  }
  function Lh(R, O) {
    if (f) {
      let A = Nh(R, O),
        B = f[A];
      if (typeof B == "number") return B;
    }
    return null;
  }
  function jx(R) {
    (i = {}), (l = Bf(R, o, void 0, i));
  }
  return (
    (E = {
      get basename() {
        return s;
      },
      get future() {
        return u;
      },
      get state() {
        return b;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: gt,
      subscribe: wt,
      enableScrollRestoration: Nx,
      navigate: ce,
      fetch: Ft,
      revalidate: Ce,
      createHref: (R) => e.history.createHref(R),
      encodeLocation: (R) => e.history.encodeLocation(R),
      getFetcher: Pn,
      deleteFetcher: Ae,
      dispose: Ke,
      getBlocker: Z,
      deleteBlocker: Ie,
      _internalFetchControllers: z,
      _internalActiveDeferreds: fe,
      _internalSetRoutes: jx,
    }),
    E
  );
}
function lM(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Uf(e, t, n, r, o, i, a, l) {
  let s, u;
  if (a) {
    s = [];
    for (let d of t)
      if ((s.push(d), d.route.id === a)) {
        u = d;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let c = bb(o || ".", yb(s, i), El(e.pathname, n) || e.pathname, l === "path");
  return (
    o == null && ((c.search = e.search), (c.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      u &&
      u.route.index &&
      !Rh(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : Vr([n, c.pathname])),
    wl(c)
  );
}
function Hv(e, t, n, r) {
  if (!r || !lM(r)) return { path: n };
  if (r.formMethod && !hM(r.formMethod))
    return { path: n, error: fn(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: fn(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    a = e ? i.toUpperCase() : i.toLowerCase(),
    l = Cb(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Mn(a)) return o();
      let f =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((x, y) => {
              let [g, S] = y;
              return (
                "" +
                x +
                g +
                "=" +
                S +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: l,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: f,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Mn(a)) return o();
      try {
        let f = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: l,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  pe(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, u;
  if (r.formData) (s = Wf(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = Wf(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = Qv(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = Qv(s));
    } catch {
      return o();
    }
  let c = {
    formMethod: a,
    formAction: l,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (Mn(c.formMethod)) return { path: n, submission: c };
  let d = _r(n);
  return (
    t && d.search && Rh(d.search) && s.append("index", ""),
    (d.search = "?" + s),
    { path: wl(d), submission: c }
  );
}
function sM(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Kv(e, t, n, r, o, i, a, l, s, u, c, d, f, x, y, g) {
  let S = g ? Object.values(g)[0] : y ? Object.values(y)[0] : void 0,
    h = e.createURL(t.location),
    p = e.createURL(o),
    m = g ? Object.keys(g)[0] : void 0,
    E = sM(n, m).filter((w, P) => {
      let { route: $ } = w;
      if ($.lazy) return !0;
      if ($.loader == null) return !1;
      if (i)
        return $.loader.hydrate
          ? !0
          : t.loaderData[$.id] === void 0 &&
              (!t.errors || t.errors[$.id] === void 0);
      if (uM(t.loaderData, t.matches[P], w) || l.some((j) => j === w.route.id))
        return !0;
      let M = t.matches[P],
        I = w;
      return Gv(
        w,
        tt(
          {
            currentUrl: h,
            currentParams: M.params,
            nextUrl: p,
            nextParams: I.params,
          },
          r,
          {
            actionResult: S,
            defaultShouldRevalidate:
              a ||
              h.pathname + h.search === p.pathname + p.search ||
              h.search !== p.search ||
              Eb(M, I),
          }
        )
      );
    }),
    b = [];
  return (
    c.forEach((w, P) => {
      if (i || !n.some((F) => F.route.id === w.routeId) || u.has(P)) return;
      let $ = ai(f, w.path, x);
      if (!$) {
        b.push({
          key: P,
          routeId: w.routeId,
          path: w.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let M = t.fetchers.get(P),
        I = Vf($, w.path),
        j = !1;
      d.has(P)
        ? (j = !1)
        : s.includes(P)
        ? (j = !0)
        : M && M.state !== "idle" && M.data === void 0
        ? (j = a)
        : (j = Gv(
            I,
            tt(
              {
                currentUrl: h,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: p,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: S, defaultShouldRevalidate: a }
            )
          )),
        j &&
          b.push({
            key: P,
            routeId: w.routeId,
            path: w.path,
            matches: $,
            match: I,
            controller: new AbortController(),
          });
    }),
    [E, b]
  );
}
function uM(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function Eb(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Gv(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function qv(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  pe(o, "No route found in manifest");
  let i = {};
  for (let a in r) {
    let s = o[a] !== void 0 && a !== "hasErrorBoundary";
    Oi(
      !s,
      'Route "' +
        o.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !s && !M$.has(a) && (i[a] = r[a]);
  }
  Object.assign(o, i), Object.assign(o, tt({}, t(o), { lazy: void 0 }));
}
async function la(e, t, n, r, o, i, a, l, s) {
  s === void 0 && (s = {});
  let u,
    c,
    d,
    f = (g) => {
      let S,
        h = new Promise((p, m) => (S = m));
      return (
        (d = () => S()),
        t.signal.addEventListener("abort", d),
        Promise.race([
          g({ request: t, params: n.params, context: s.requestContext }),
          h,
        ])
      );
    };
  try {
    let g = n.route[e];
    if (n.route.lazy)
      if (g) {
        let S,
          h = await Promise.all([
            f(g).catch((p) => {
              S = p;
            }),
            qv(n.route, i, o),
          ]);
        if (S) throw S;
        c = h[0];
      } else if ((await qv(n.route, i, o), (g = n.route[e]), g)) c = await f(g);
      else if (e === "action") {
        let S = new URL(t.url),
          h = S.pathname + S.search;
        throw fn(405, { method: t.method, pathname: h, routeId: n.route.id });
      } else return { type: Ze.data, data: void 0 };
    else if (g) c = await f(g);
    else {
      let S = new URL(t.url),
        h = S.pathname + S.search;
      throw fn(404, { pathname: h });
    }
    pe(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (g) {
    (u = Ze.error), (c = g);
  } finally {
    d && t.signal.removeEventListener("abort", d);
  }
  if (pM(c)) {
    let g = c.status;
    if (nM.has(g)) {
      let h = c.headers.get("Location");
      if (
        (pe(
          h,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Sb.test(h))
      )
        h = Uf(new URL(t.url), r.slice(0, r.indexOf(n) + 1), a, !0, h, l);
      else if (!s.isStaticRequest) {
        let p = new URL(t.url),
          m = h.startsWith("//") ? new URL(p.protocol + h) : new URL(h),
          _ = El(m.pathname, a) != null;
        m.origin === p.origin && _ && (h = m.pathname + m.search + m.hash);
      }
      if (s.isStaticRequest) throw (c.headers.set("Location", h), c);
      return {
        type: Ze.redirect,
        status: g,
        location: h,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (s.isRouteRequest)
      throw { type: u === Ze.error ? Ze.error : Ze.data, response: c };
    let S;
    try {
      let h = c.headers.get("Content-Type");
      h && /\bapplication\/json\b/.test(h)
        ? c.body == null
          ? (S = null)
          : (S = await c.json())
        : (S = await c.text());
    } catch (h) {
      return { type: Ze.error, error: h };
    }
    return u === Ze.error
      ? { type: u, error: new Ch(g, c.statusText, S), headers: c.headers }
      : { type: Ze.data, data: S, statusCode: c.status, headers: c.headers };
  }
  if (u === Ze.error) return { type: u, error: c };
  if (fM(c)) {
    var x, y;
    return {
      type: Ze.deferred,
      deferredData: c,
      statusCode: (x = c.init) == null ? void 0 : x.status,
      headers:
        ((y = c.init) == null ? void 0 : y.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: Ze.data, data: c };
}
function sa(e, t, n, r) {
  let o = e.createURL(Cb(t)).toString(),
    i = { signal: n };
  if (r && Mn(r.formMethod)) {
    let { formMethod: a, formEncType: l } = r;
    (i.method = a.toUpperCase()),
      l === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": l })),
          (i.body = JSON.stringify(r.json)))
        : l === "text/plain"
        ? (i.body = r.text)
        : l === "application/x-www-form-urlencoded" && r.formData
        ? (i.body = Wf(r.formData))
        : (i.body = r.formData);
  }
  return new Request(o, i);
}
function Wf(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Qv(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function cM(e, t, n, r, o) {
  let i = {},
    a = null,
    l,
    s = !1,
    u = {};
  return (
    n.forEach((c, d) => {
      let f = t[d].route.id;
      if (
        (pe(!co(c), "Cannot handle redirect results in processLoaderData"),
        li(c))
      ) {
        let x = $a(e, f),
          y = c.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (a = a || {}),
          a[x.route.id] == null && (a[x.route.id] = y),
          (i[f] = void 0),
          s || ((s = !0), (l = xb(c.error) ? c.error.status : 500)),
          c.headers && (u[f] = c.headers);
      } else
        uo(c)
          ? (o.set(f, c.deferredData), (i[f] = c.deferredData.data))
          : (i[f] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !s &&
            (l = c.statusCode),
          c.headers && (u[f] = c.headers);
    }),
    r && ((a = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: l || 200, loaderHeaders: u }
  );
}
function Yv(e, t, n, r, o, i, a, l) {
  let { loaderData: s, errors: u } = cM(t, n, r, o, l);
  for (let c = 0; c < i.length; c++) {
    let { key: d, match: f, controller: x } = i[c];
    pe(
      a !== void 0 && a[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = a[c];
    if (!(x && x.signal.aborted))
      if (li(y)) {
        let g = $a(e.matches, f == null ? void 0 : f.route.id);
        (u && u[g.route.id]) || (u = tt({}, u, { [g.route.id]: y.error })),
          e.fetchers.delete(d);
      } else if (co(y)) pe(!1, "Unhandled fetcher revalidation redirect");
      else if (uo(y)) pe(!1, "Unhandled fetcher deferred data");
      else {
        let g = kr(y.data);
        e.fetchers.set(d, g);
      }
  }
  return { loaderData: s, errors: u };
}
function Xv(e, t, n, r) {
  let o = tt({}, t);
  for (let i of n) {
    let a = i.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (o[a] = t[a])
        : e[a] !== void 0 && i.route.loader && (o[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return o;
}
function $a(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Jv(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function fn(e, t) {
  let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        o && n && r
          ? (l =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (l = "defer() is not supported in actions")
          : i === "invalid-body" && (l = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        o && n && r
          ? (l =
              "You made a " +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o && (l = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Ch(e || 500, a, new Error(l), !0)
  );
}
function Zv(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (co(n)) return { result: n, idx: t };
  }
}
function Cb(e) {
  let t = typeof e == "string" ? _r(e) : e;
  return wl(tt({}, t, { hash: "" }));
}
function dM(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function uo(e) {
  return e.type === Ze.deferred;
}
function li(e) {
  return e.type === Ze.error;
}
function co(e) {
  return (e && e.type) === Ze.redirect;
}
function fM(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function pM(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function hM(e) {
  return tM.has(e.toLowerCase());
}
function Mn(e) {
  return Z$.has(e.toLowerCase());
}
async function eg(e, t, n, r, o, i) {
  for (let a = 0; a < n.length; a++) {
    let l = n[a],
      s = t[a];
    if (!s) continue;
    let u = e.find((d) => d.route.id === s.route.id),
      c = u != null && !Eb(u, s) && (i && i[s.route.id]) !== void 0;
    if (uo(l) && (o || c)) {
      let d = r[a];
      pe(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Rb(l, d, o).then((f) => {
          f && (n[a] = f || n[a]);
        });
    }
  }
}
async function Rb(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Ze.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: Ze.error, error: o };
      }
    return { type: Ze.data, data: e.deferredData.data };
  }
}
function Rh(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Vf(e, t) {
  let n = typeof t == "string" ? _r(t).search : t.search;
  if (e[e.length - 1].route.index && Rh(n || "")) return e[e.length - 1];
  let r = gb(e);
  return r[r.length - 1];
}
function tg(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: i,
    json: a,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function Ed(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function mM(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function ua(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function vM(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function kr(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function gM(e, t) {
  try {
    let n = e.sessionStorage.getItem(wb);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function yM(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(wb, JSON.stringify(n));
    } catch (r) {
      Oi(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rl() {
  return (
    (rl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rl.apply(this, arguments)
  );
}
const bc = v.createContext(null),
  kb = v.createContext(null),
  xc = v.createContext(null),
  _c = v.createContext(null),
  Ui = v.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Pb = v.createContext(null);
function Sc() {
  return v.useContext(_c) != null;
}
function Ob() {
  return Sc() || pe(!1), v.useContext(_c).location;
}
function Tb(e) {
  v.useContext(xc).static || v.useLayoutEffect(e);
}
function wc() {
  let { isDataRoute: e } = v.useContext(Ui);
  return e ? TM() : bM();
}
function bM() {
  Sc() || pe(!1);
  let e = v.useContext(bc),
    { basename: t, future: n, navigator: r } = v.useContext(xc),
    { matches: o } = v.useContext(Ui),
    { pathname: i } = Ob(),
    a = JSON.stringify(yb(o, n.v7_relativeSplatPath)),
    l = v.useRef(!1);
  return (
    Tb(() => {
      l.current = !0;
    }),
    v.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = bb(u, JSON.parse(a), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Vr([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, a, i, e]
    )
  );
}
function xM(e, t, n, r) {
  Sc() || pe(!1);
  let { navigator: o } = v.useContext(xc),
    { matches: i } = v.useContext(Ui),
    a = i[i.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let s = a ? a.pathnameBase : "/";
  a && a.route;
  let u = Ob(),
    c;
  if (t) {
    var d;
    let S = typeof t == "string" ? _r(t) : t;
    s === "/" || ((d = S.pathname) != null && d.startsWith(s)) || pe(!1),
      (c = S);
  } else c = u;
  let f = c.pathname || "/",
    x = f;
  if (s !== "/") {
    let S = s.replace(/^\//, "").split("/");
    x = "/" + f.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let y = ai(e, { pathname: x }),
    g = CM(
      y &&
        y.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: Vr([
              s,
              o.encodeLocation
                ? o.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? s
                : Vr([
                    s,
                    o.encodeLocation
                      ? o.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && g
    ? v.createElement(
        _c.Provider,
        {
          value: {
            location: rl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: nt.Pop,
          },
        },
        g
      )
    : g;
}
function _M() {
  let e = OM(),
    t = xb(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return v.createElement(
    v.Fragment,
    null,
    v.createElement("h2", null, "Unexpected Application Error!"),
    v.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? v.createElement("pre", { style: o }, n) : null,
    null
  );
}
const SM = v.createElement(_M, null);
class wM extends v.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? v.createElement(
          Ui.Provider,
          { value: this.props.routeContext },
          v.createElement(Pb.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function EM(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = v.useContext(bc);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    v.createElement(Ui.Provider, { value: t }, r)
  );
}
function CM(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let a = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let c = a.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id])
    );
    c >= 0 || pe(!1), (a = a.slice(0, Math.min(a.length, c + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let d = a[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: x } = n,
          y =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!x || x[d.route.id] === void 0);
        if (d.route.lazy || y) {
          (s = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((c, d, f) => {
    let x,
      y = !1,
      g = null,
      S = null;
    n &&
      ((x = l && d.route.id ? l[d.route.id] : void 0),
      (g = d.route.errorElement || SM),
      s &&
        (u < 0 && f === 0
          ? ($M("route-fallback", !1), (y = !0), (S = null))
          : u === f &&
            ((y = !0), (S = d.route.hydrateFallbackElement || null))));
    let h = t.concat(a.slice(0, f + 1)),
      p = () => {
        let m;
        return (
          x
            ? (m = g)
            : y
            ? (m = S)
            : d.route.Component
            ? (m = v.createElement(d.route.Component, null))
            : d.route.element
            ? (m = d.route.element)
            : (m = c),
          v.createElement(EM, {
            match: d,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? v.createElement(wM, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: x,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var $b = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })($b || {}),
  au = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(au || {});
function RM(e) {
  let t = v.useContext(bc);
  return t || pe(!1), t;
}
function kM(e) {
  let t = v.useContext(kb);
  return t || pe(!1), t;
}
function PM(e) {
  let t = v.useContext(Ui);
  return t || pe(!1), t;
}
function Mb(e) {
  let t = PM(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || pe(!1), n.route.id;
}
function OM() {
  var e;
  let t = v.useContext(Pb),
    n = kM(au.UseRouteError),
    r = Mb(au.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function TM() {
  let { router: e } = RM($b.UseNavigateStable),
    t = Mb(au.UseNavigateStable),
    n = v.useRef(!1);
  return (
    Tb(() => {
      n.current = !0;
    }),
    v.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, rl({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const ng = {};
function $M(e, t, n) {
  !t && !ng[e] && (ng[e] = !0);
}
function MM(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = nt.Pop,
    navigator: i,
    static: a = !1,
    future: l,
  } = e;
  Sc() && pe(!1);
  let s = t.replace(/^\/*/, "/"),
    u = v.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: a,
        future: rl({ v7_relativeSplatPath: !1 }, l),
      }),
      [s, l, i, a]
    );
  typeof r == "string" && (r = _r(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: x = null,
      key: y = "default",
    } = r,
    g = v.useMemo(() => {
      let S = El(c, s);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: f, state: x, key: y },
            navigationType: o,
          };
    }, [s, c, d, f, x, y, o]);
  return g == null
    ? null
    : v.createElement(
        xc.Provider,
        { value: u },
        v.createElement(_c.Provider, { children: n, value: g })
      );
}
new Promise(() => {});
function AM(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: v.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: v.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: v.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function lu() {
  return (
    (lu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    lu.apply(this, arguments)
  );
}
const IM = "6";
try {
  window.__reactRouterVersion = IM;
} catch {}
function NM(e, t) {
  return aM({
    basename: t == null ? void 0 : t.basename,
    future: lu({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: O$({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || LM(),
    routes: e,
    mapRouteProperties: AM,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function LM() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = lu({}, t, { errors: jM(t.errors) })), t;
}
function jM(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new Ch(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == "function")
          try {
            let a = new i(o.message);
            (a.stack = ""), (n[r] = a);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(o.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = o;
  return n;
}
const FM = v.createContext({ isTransitioning: !1 }),
  DM = v.createContext(new Map()),
  zM = "startTransition",
  rg = ks[zM],
  BM = "flushSync",
  og = dw[BM];
function UM(e) {
  rg ? rg(e) : e();
}
function ca(e) {
  og ? og(e) : e();
}
class WM {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function VM(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, i] = v.useState(n.state),
    [a, l] = v.useState(),
    [s, u] = v.useState({ isTransitioning: !1 }),
    [c, d] = v.useState(),
    [f, x] = v.useState(),
    [y, g] = v.useState(),
    S = v.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    p = v.useCallback(
      (w) => {
        h ? UM(w) : w();
      },
      [h]
    ),
    m = v.useCallback(
      (w, P) => {
        let {
          deletedFetchers: $,
          unstable_flushSync: M,
          unstable_viewTransitionOpts: I,
        } = P;
        $.forEach((F) => S.current.delete(F)),
          w.fetchers.forEach((F, D) => {
            F.data !== void 0 && S.current.set(D, F.data);
          });
        let j =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!I || j) {
          M ? ca(() => i(w)) : p(() => i(w));
          return;
        }
        if (M) {
          ca(() => {
            f && (c && c.resolve(), f.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: I.currentLocation,
                nextLocation: I.nextLocation,
              });
          });
          let F = n.window.document.startViewTransition(() => {
            ca(() => i(w));
          });
          F.finished.finally(() => {
            ca(() => {
              d(void 0), x(void 0), l(void 0), u({ isTransitioning: !1 });
            });
          }),
            ca(() => x(F));
          return;
        }
        f
          ? (c && c.resolve(),
            f.skipTransition(),
            g({
              state: w,
              currentLocation: I.currentLocation,
              nextLocation: I.nextLocation,
            }))
          : (l(w),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: I.currentLocation,
              nextLocation: I.nextLocation,
            }));
      },
      [n.window, f, c, S, p]
    );
  v.useLayoutEffect(() => n.subscribe(m), [n, m]),
    v.useEffect(() => {
      s.isTransitioning && !s.flushSync && d(new WM());
    }, [s]),
    v.useEffect(() => {
      if (c && a && n.window) {
        let w = a,
          P = c.promise,
          $ = n.window.document.startViewTransition(async () => {
            p(() => i(w)), await P;
          });
        $.finished.finally(() => {
          d(void 0), x(void 0), l(void 0), u({ isTransitioning: !1 });
        }),
          x($);
      }
    }, [p, a, c, n.window]),
    v.useEffect(() => {
      c && a && o.location.key === a.location.key && c.resolve();
    }, [c, f, o.location, a]),
    v.useEffect(() => {
      !s.isTransitioning &&
        y &&
        (l(y.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        g(void 0));
    }, [s.isTransitioning, y]),
    v.useEffect(() => {}, []);
  let _ = v.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (w) => n.navigate(w),
        push: (w, P, $) =>
          n.navigate(w, {
            state: P,
            preventScrollReset: $ == null ? void 0 : $.preventScrollReset,
          }),
        replace: (w, P, $) =>
          n.navigate(w, {
            replace: !0,
            state: P,
            preventScrollReset: $ == null ? void 0 : $.preventScrollReset,
          }),
      }),
      [n]
    ),
    E = n.basename || "/",
    b = v.useMemo(
      () => ({ router: n, navigator: _, static: !1, basename: E }),
      [n, _, E]
    );
  return v.createElement(
    v.Fragment,
    null,
    v.createElement(
      bc.Provider,
      { value: b },
      v.createElement(
        kb.Provider,
        { value: o },
        v.createElement(
          DM.Provider,
          { value: S.current },
          v.createElement(
            FM.Provider,
            { value: s },
            v.createElement(
              MM,
              {
                basename: E,
                location: o.location,
                navigationType: o.historyAction,
                navigator: _,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              o.initialized || n.future.v7_partialHydration
                ? v.createElement(HM, {
                    routes: n.routes,
                    future: n.future,
                    state: o,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function HM(e) {
  let { routes: t, future: n, state: r } = e;
  return xM(t, void 0, r, n);
}
var ig;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ig || (ig = {}));
var ag;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ag || (ag = {}));
const KM = () => {
    const e = wc(),
      t = () => {
        sessionStorage.removeItem("time"),
          sessionStorage.removeItem("step"),
          e("/Test");
      },
      n = () => {
        e("/AddQuestion");
      };
    return k.jsx(k.Fragment, {
      children: k.jsxs(In, {
        sx: {
          width: "40vw",
          margin: "20vh auto",
          padding: "50px 0px",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          backgroundColor: "ghostwhite",
        },
        children: [
          k.jsx(jn, { variant: "h3", children: "Тестирование" }),
          k.jsxs(jn, {
            variant: "h5",
            children: [
              "Ограничение по времени:",
              " ",
              k.jsx("span", {
                style: { borderBottom: "3px solid black" },
                children: "15 минут",
              }),
            ],
          }),
          k.jsx(tl, {
            onClick: t,
            variant: "contained",
            sx: {
              width: "50%",
              height: "50px",
              fontSize: "20px",
              fontWeight: 900,
            },
            children: "Начать",
          }),
          k.jsx(tl, {
            onClick: n,
            variant: "contained",
            sx: {
              width: "50%",
              height: "50px",
              fontSize: "20px",
              fontWeight: 900,
            },
            children: "Добавить вопрос",
          }),
          k.jsx(jn, {
            sx: { color: "red", marginBottom: "-10px" },
            children: "Тест не поддерживается на телефонах!",
          }),
        ],
      }),
    });
  },
  GM = ({ currentStep: e, stepCount: t }) => {
    const n = `${100 / t}%`;
    return k.jsx(In, {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        gap: "5px",
      },
      children: Array.from({ length: t }).map((r, o) =>
        o < e
          ? k.jsx(
              In,
              {
                sx: {
                  width: { width: n },
                  height: "10px",
                  backgroundColor: "black",
                },
              },
              o
            )
          : o === e
          ? k.jsx(
              In,
              {
                sx: {
                  width: { width: n },
                  height: "10px",
                  backgroundColor: "red",
                },
              },
              o
            )
          : k.jsx(
              In,
              {
                sx: {
                  width: { width: n },
                  height: "10px",
                  backgroundColor: "grey",
                },
              },
              o
            )
      ),
    });
  };
function be(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    typeof e == "number"
      ? "[MobX] minified error nr: " +
        e +
        (n.length ? " " + n.map(String).join(",") : "") +
        ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + e
  );
}
var qM = {};
function kh() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : qM;
}
var Ab = Object.assign,
  su = Object.getOwnPropertyDescriptor,
  er = Object.defineProperty,
  Ec = Object.prototype,
  Hf = [];
Object.freeze(Hf);
var Ib = {};
Object.freeze(Ib);
var QM = typeof Proxy < "u",
  YM = Object.toString();
function Nb() {
  QM || be("Proxy not available");
}
function Lb(e) {
  var t = !1;
  return function () {
    if (!t) return (t = !0), e.apply(this, arguments);
  };
}
var si = function () {};
function Un(e) {
  return typeof e == "function";
}
function Eo(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Cc(e) {
  return e !== null && typeof e == "object";
}
function gr(e) {
  if (!Cc(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n.toString() === YM;
}
function jb(e) {
  var t = e == null ? void 0 : e.constructor;
  return t
    ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction"
    : !1;
}
function Cl(e, t, n) {
  er(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
}
function Fb(e, t, n) {
  er(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
}
function To(e, t) {
  var n = "isMobX" + e;
  return (
    (t.prototype[n] = !0),
    function (r) {
      return Cc(r) && r[n] === !0;
    }
  );
}
function Wi(e) {
  return e instanceof Map;
}
function Rl(e) {
  return e instanceof Set;
}
var Db = typeof Object.getOwnPropertySymbols < "u";
function XM(e) {
  var t = Object.keys(e);
  if (!Db) return t;
  var n = Object.getOwnPropertySymbols(e);
  return n.length
    ? [].concat(
        t,
        n.filter(function (r) {
          return Ec.propertyIsEnumerable.call(e, r);
        })
      )
    : t;
}
var Ti =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Db
    ? function (e) {
        return Object.getOwnPropertyNames(e).concat(
          Object.getOwnPropertySymbols(e)
        );
      }
    : Object.getOwnPropertyNames;
function zb(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function dr(e, t) {
  return Ec.hasOwnProperty.call(e, t);
}
var JM =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var n = {};
    return (
      Ti(t).forEach(function (r) {
        n[r] = su(t, r);
      }),
      n
    );
  };
function lg(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, tA(r.key), r);
  }
}
function Ph(e, t, n) {
  return (
    t && lg(e.prototype, t),
    n && lg(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Co() {
  return (
    (Co = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Co.apply(this, arguments)
  );
}
function Bb(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Kf(e, t);
}
function Kf(e, t) {
  return (
    (Kf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Kf(e, t)
  );
}
function Cd(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ZM(e, t) {
  if (e) {
    if (typeof e == "string") return sg(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return sg(e, t);
  }
}
function sg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ui(e, t) {
  var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n) return (n = n.call(e)).next.bind(n);
  if (
    Array.isArray(e) ||
    (n = ZM(e)) ||
    (t && e && typeof e.length == "number")
  ) {
    n && (e = n);
    var r = 0;
    return function () {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eA(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tA(e) {
  var t = eA(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Yn = Symbol("mobx-stored-annotations");
function tr(e) {
  function t(n, r) {
    if (kl(r)) return e.decorate_20223_(n, r);
    Vi(n, r, e);
  }
  return Object.assign(t, e);
}
function Vi(e, t, n) {
  dr(e, Yn) || Cl(e, Yn, Co({}, e[Yn])), cA(n) || (e[Yn][t] = n);
}
function nA(e) {
  return dr(e, Yn) || Cl(e, Yn, Co({}, e[Yn])), e[Yn];
}
function kl(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var te = Symbol("mobx administration"),
  Pl = (function () {
    function e(n) {
      n === void 0 && (n = "Atom"),
        (this.name_ = void 0),
        (this.isPendingUnobservation_ = !1),
        (this.isBeingObserved_ = !1),
        (this.observers_ = new Set()),
        (this.diffValue_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = _e.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = n);
    }
    var t = e.prototype;
    return (
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (r) {
            return r();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (r) {
            return r();
          });
      }),
      (t.reportObserved = function () {
        return ix(this);
      }),
      (t.reportChanged = function () {
        xn(), ax(this), _n();
      }),
      (t.toString = function () {
        return this.name_;
      }),
      e
    );
  })(),
  Oh = To("Atom", Pl);
function Ub(e, t, n) {
  t === void 0 && (t = si), n === void 0 && (n = si);
  var r = new Pl(e);
  return t !== si && mI(r, t), n !== si && dx(r, n), r;
}
function rA(e, t) {
  return e === t;
}
function oA(e, t) {
  return Ih(e, t);
}
function iA(e, t) {
  return Ih(e, t, 1);
}
function aA(e, t) {
  return Object.is
    ? Object.is(e, t)
    : e === t
    ? e !== 0 || 1 / e === 1 / t
    : e !== e && t !== t;
}
var uu = { identity: rA, structural: oA, default: aA, shallow: iA };
function Ro(e, t, n) {
  return vx(e)
    ? e
    : Array.isArray(e)
    ? ht.array(e, { name: n })
    : gr(e)
    ? ht.object(e, void 0, { name: n })
    : Wi(e)
    ? ht.map(e, { name: n })
    : Rl(e)
    ? ht.set(e, { name: n })
    : typeof e == "function" && !Mc(e) && !al(e)
    ? jb(e)
      ? Mi(e)
      : il(n, e)
    : e;
}
function lA(e, t, n) {
  if (e == null || ll(e) || Ac(e) || Mo(e) || Hi(e)) return e;
  if (Array.isArray(e)) return ht.array(e, { name: n, deep: !1 });
  if (gr(e)) return ht.object(e, void 0, { name: n, deep: !1 });
  if (Wi(e)) return ht.map(e, { name: n, deep: !1 });
  if (Rl(e)) return ht.set(e, { name: n, deep: !1 });
}
function Rc(e) {
  return e;
}
function sA(e, t) {
  return Ih(e, t) ? t : e;
}
var uA = "override";
function cA(e) {
  return e.annotationType_ === uA;
}
function Ol(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: dA,
    extend_: fA,
    decorate_20223_: pA,
  };
}
function dA(e, t, n, r) {
  var o;
  if ((o = this.options_) != null && o.bound)
    return this.extend_(e, t, n, !1) === null ? 0 : 1;
  if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if (Mc(n.value)) return 1;
  var i = Wb(e, this, t, n, !1);
  return er(r, t, i), 2;
}
function fA(e, t, n, r) {
  var o = Wb(e, this, t, n);
  return e.defineProperty_(t, o, r);
}
function pA(e, t) {
  var n = t.kind,
    r = t.name,
    o = t.addInitializer,
    i = this,
    a = function (u) {
      var c, d, f, x;
      return ko(
        (c = (d = i.options_) == null ? void 0 : d.name) != null
          ? c
          : r.toString(),
        u,
        (f = (x = i.options_) == null ? void 0 : x.autoAction) != null ? f : !1
      );
    };
  if (n == "field") {
    o(function () {
      Vi(this, r, i);
    });
    return;
  }
  if (n == "method") {
    var l;
    return (
      Mc(e) || (e = a(e)),
      (l = this.options_) != null &&
        l.bound &&
        o(function () {
          var s = this,
            u = s[r].bind(s);
          (u.isMobxAction = !0), (s[r] = u);
        }),
      e
    );
  }
  be(
    "Cannot apply '" +
      i.annotationType_ +
      "' to '" +
      String(r) +
      "' (kind: " +
      n +
      "):" +
      (`
'` +
        i.annotationType_ +
        "' can only be used on properties with a function value.")
  );
}
function hA(e, t, n, r) {
  t.annotationType_, r.value;
}
function Wb(e, t, n, r, o) {
  var i, a, l, s, u, c, d;
  o === void 0 && (o = W.safeDescriptors), hA(e, t, n, r);
  var f = r.value;
  if ((i = t.options_) != null && i.bound) {
    var x;
    f = f.bind((x = e.proxy_) != null ? x : e.target_);
  }
  return {
    value: ko(
      (a = (l = t.options_) == null ? void 0 : l.name) != null
        ? a
        : n.toString(),
      f,
      (s = (u = t.options_) == null ? void 0 : u.autoAction) != null ? s : !1,
      (c = t.options_) != null && c.bound
        ? (d = e.proxy_) != null
          ? d
          : e.target_
        : void 0
    ),
    configurable: o ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !o,
  };
}
function Vb(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: mA,
    extend_: vA,
    decorate_20223_: gA,
  };
}
function mA(e, t, n, r) {
  var o;
  if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
  if (
    (o = this.options_) != null &&
    o.bound &&
    (!dr(e.target_, t) || !al(e.target_[t])) &&
    this.extend_(e, t, n, !1) === null
  )
    return 0;
  if (al(n.value)) return 1;
  var i = Hb(e, this, t, n, !1, !1);
  return er(r, t, i), 2;
}
function vA(e, t, n, r) {
  var o,
    i = Hb(e, this, t, n, (o = this.options_) == null ? void 0 : o.bound);
  return e.defineProperty_(t, i, r);
}
function gA(e, t) {
  var n,
    r = t.name,
    o = t.addInitializer;
  return (
    al(e) || (e = Mi(e)),
    (n = this.options_) != null &&
      n.bound &&
      o(function () {
        var i = this,
          a = i[r].bind(i);
        (a.isMobXFlow = !0), (i[r] = a);
      }),
    e
  );
}
function yA(e, t, n, r) {
  t.annotationType_, r.value;
}
function Hb(e, t, n, r, o, i) {
  i === void 0 && (i = W.safeDescriptors), yA(e, t, n, r);
  var a = r.value;
  if ((al(a) || (a = Mi(a)), o)) {
    var l;
    (a = a.bind((l = e.proxy_) != null ? l : e.target_)), (a.isMobXFlow = !0);
  }
  return {
    value: a,
    configurable: i ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !i,
  };
}
function Th(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: bA,
    extend_: xA,
    decorate_20223_: _A,
  };
}
function bA(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function xA(e, t, n, r) {
  return (
    SA(e, this, t, n),
    e.defineComputedProperty_(
      t,
      Co({}, this.options_, { get: n.get, set: n.set }),
      r
    )
  );
}
function _A(e, t) {
  var n = this,
    r = t.name,
    o = t.addInitializer;
  return (
    o(function () {
      var i = Ao(this)[te],
        a = Co({}, n.options_, { get: e, context: this });
      a.name || (a.name = "ObservableObject." + r.toString()),
        i.values_.set(r, new $i(a));
    }),
    function () {
      return this[te].getObservablePropValue_(r);
    }
  );
}
function SA(e, t, n, r) {
  t.annotationType_, r.get;
}
function kc(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: wA,
    extend_: EA,
    decorate_20223_: CA,
  };
}
function wA(e, t, n) {
  return this.extend_(e, t, n, !1) === null ? 0 : 1;
}
function EA(e, t, n, r) {
  var o, i;
  return (
    RA(e, this),
    e.defineObservableProperty_(
      t,
      n.value,
      (o = (i = this.options_) == null ? void 0 : i.enhancer) != null ? o : Ro,
      r
    )
  );
}
function CA(e, t) {
  var n = this,
    r = t.kind,
    o = t.name,
    i = new WeakSet();
  function a(l, s) {
    var u,
      c,
      d = Ao(l)[te],
      f = new ho(
        s,
        (u = (c = n.options_) == null ? void 0 : c.enhancer) != null ? u : Ro,
        "ObservableObject." + o.toString(),
        !1
      );
    d.values_.set(o, f), i.add(l);
  }
  if (r == "accessor")
    return {
      get: function () {
        return (
          i.has(this) || a(this, e.get.call(this)),
          this[te].getObservablePropValue_(o)
        );
      },
      set: function (s) {
        return (
          i.has(this) || a(this, s), this[te].setObservablePropValue_(o, s)
        );
      },
      init: function (s) {
        return i.has(this) || a(this, s), s;
      },
    };
}
function RA(e, t, n, r) {
  t.annotationType_;
}
var kA = "true",
  PA = Kb();
function Kb(e) {
  return {
    annotationType_: kA,
    options_: e,
    make_: OA,
    extend_: TA,
    decorate_20223_: $A,
  };
}
function OA(e, t, n, r) {
  var o, i;
  if (n.get) return Pc.make_(e, t, n, r);
  if (n.set) {
    var a = ko(t.toString(), n.set);
    return r === e.target_
      ? e.defineProperty_(t, {
          configurable: W.safeDescriptors ? e.isPlainObject_ : !0,
          set: a,
        }) === null
        ? 0
        : 2
      : (er(r, t, { configurable: !0, set: a }), 2);
  }
  if (r !== e.target_ && typeof n.value == "function") {
    var l;
    if (jb(n.value)) {
      var s,
        u = (s = this.options_) != null && s.autoBind ? Mi.bound : Mi;
      return u.make_(e, t, n, r);
    }
    var c = (l = this.options_) != null && l.autoBind ? il.bound : il;
    return c.make_(e, t, n, r);
  }
  var d = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? ht.ref : ht;
  if (
    typeof n.value == "function" &&
    (i = this.options_) != null &&
    i.autoBind
  ) {
    var f;
    n.value = n.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, n, r);
}
function TA(e, t, n, r) {
  var o, i;
  if (n.get) return Pc.extend_(e, t, n, r);
  if (n.set)
    return e.defineProperty_(
      t,
      {
        configurable: W.safeDescriptors ? e.isPlainObject_ : !0,
        set: ko(t.toString(), n.set),
      },
      r
    );
  if (
    typeof n.value == "function" &&
    (o = this.options_) != null &&
    o.autoBind
  ) {
    var a;
    n.value = n.value.bind((a = e.proxy_) != null ? a : e.target_);
  }
  var l = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? ht.ref : ht;
  return l.extend_(e, t, n, r);
}
function $A(e, t) {
  be("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var MA = "observable",
  AA = "observable.ref",
  IA = "observable.shallow",
  NA = "observable.struct",
  Gb = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Gb);
function ns(e) {
  return e || Gb;
}
var Gf = kc(MA),
  LA = kc(AA, { enhancer: Rc }),
  jA = kc(IA, { enhancer: lA }),
  FA = kc(NA, { enhancer: sA }),
  qb = tr(Gf);
function rs(e) {
  return e.deep === !0 ? Ro : e.deep === !1 ? Rc : zA(e.defaultDecorator);
}
function DA(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : Kb(e)) : void 0;
}
function zA(e) {
  var t, n;
  return e && (t = (n = e.options_) == null ? void 0 : n.enhancer) != null
    ? t
    : Ro;
}
function Qb(e, t, n) {
  if (kl(t)) return Gf.decorate_20223_(e, t);
  if (Eo(t)) {
    Vi(e, t, Gf);
    return;
  }
  return vx(e)
    ? e
    : gr(e)
    ? ht.object(e, t, n)
    : Array.isArray(e)
    ? ht.array(e, t)
    : Wi(e)
    ? ht.map(e, t)
    : Rl(e)
    ? ht.set(e, t)
    : typeof e == "object" && e !== null
    ? e
    : ht.box(e, t);
}
Ab(Qb, qb);
var BA = {
    box: function (t, n) {
      var r = ns(n);
      return new ho(t, rs(r), r.name, !0, r.equals);
    },
    array: function (t, n) {
      var r = ns(n);
      return (W.useProxies === !1 || r.proxy === !1 ? zI : TI)(
        t,
        rs(r),
        r.name
      );
    },
    map: function (t, n) {
      var r = ns(n);
      return new xx(t, rs(r), r.name);
    },
    set: function (t, n) {
      var r = ns(n);
      return new wx(t, rs(r), r.name);
    },
    object: function (t, n, r) {
      return Jr(function () {
        return px(
          W.useProxies === !1 || (r == null ? void 0 : r.proxy) === !1
            ? Ao({}, r)
            : CI({}, r),
          t,
          n
        );
      });
    },
    ref: tr(LA),
    shallow: tr(jA),
    deep: qb,
    struct: tr(FA),
  },
  ht = Ab(Qb, BA),
  Yb = "computed",
  UA = "computed.struct",
  qf = Th(Yb),
  WA = Th(UA, { equals: uu.structural }),
  Pc = function (t, n) {
    if (kl(n)) return qf.decorate_20223_(t, n);
    if (Eo(n)) return Vi(t, n, qf);
    if (gr(t)) return tr(Th(Yb, t));
    var r = gr(n) ? n : {};
    return (r.get = t), r.name || (r.name = t.name || ""), new $i(r);
  };
Object.assign(Pc, qf);
Pc.struct = tr(WA);
var ug,
  cg,
  cu = 0,
  VA = 1,
  HA =
    (ug =
      (cg = su(function () {}, "name")) == null ? void 0 : cg.configurable) !=
    null
      ? ug
      : !1,
  dg = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function ko(e, t, n, r) {
  n === void 0 && (n = !1);
  function o() {
    return KA(e, n, t, r || this, arguments);
  }
  return (
    (o.isMobxAction = !0),
    (o.toString = function () {
      return t.toString();
    }),
    HA && ((dg.value = e), er(o, "name", dg)),
    o
  );
}
function KA(e, t, n, r, o) {
  var i = GA(e, t);
  try {
    return n.apply(r, o);
  } catch (a) {
    throw ((i.error_ = a), a);
  } finally {
    qA(i);
  }
}
function GA(e, t, n, r) {
  var o = !1,
    i = 0,
    a = W.trackingDerivation,
    l = !t || !a;
  xn();
  var s = W.allowStateChanges;
  l && ($o(), (s = Oc(!0)));
  var u = $h(!0),
    c = {
      runAsAction_: l,
      prevDerivation_: a,
      prevAllowStateChanges_: s,
      prevAllowStateReads_: u,
      notifySpy_: o,
      startTime_: i,
      actionId_: VA++,
      parentActionId_: cu,
    };
  return (cu = c.actionId_), c;
}
function qA(e) {
  cu !== e.actionId_ && be(30),
    (cu = e.parentActionId_),
    e.error_ !== void 0 && (W.suppressReactionErrors = !0),
    Tc(e.prevAllowStateChanges_),
    Ma(e.prevAllowStateReads_),
    _n(),
    e.runAsAction_ && fr(e.prevDerivation_),
    (W.suppressReactionErrors = !1);
}
function QA(e, t) {
  var n = Oc(e);
  try {
    return t();
  } finally {
    Tc(n);
  }
}
function Oc(e) {
  var t = W.allowStateChanges;
  return (W.allowStateChanges = e), t;
}
function Tc(e) {
  W.allowStateChanges = e;
}
var Xb;
Xb = Symbol.toPrimitive;
var ho = (function (e) {
    Bb(t, e);
    function t(r, o, i, a, l) {
      var s;
      return (
        i === void 0 && (i = "ObservableValue"),
        l === void 0 && (l = uu.default),
        (s = e.call(this, i) || this),
        (s.enhancer = void 0),
        (s.name_ = void 0),
        (s.equals = void 0),
        (s.hasUnreportedChange_ = !1),
        (s.interceptors_ = void 0),
        (s.changeListeners_ = void 0),
        (s.value_ = void 0),
        (s.dehancer = void 0),
        (s.enhancer = o),
        (s.name_ = i),
        (s.equals = l),
        (s.value_ = o(r, void 0, i)),
        s
      );
    }
    var n = t.prototype;
    return (
      (n.dehanceValue = function (o) {
        return this.dehancer !== void 0 ? this.dehancer(o) : o;
      }),
      (n.set = function (o) {
        this.value_,
          (o = this.prepareNewValue_(o)),
          o !== W.UNCHANGED && this.setNewValue_(o);
      }),
      (n.prepareNewValue_ = function (o) {
        if (gn(this)) {
          var i = yn(this, { object: this, type: nr, newValue: o });
          if (!i) return W.UNCHANGED;
          o = i.newValue;
        }
        return (
          (o = this.enhancer(o, this.value_, this.name_)),
          this.equals(this.value_, o) ? W.UNCHANGED : o
        );
      }),
      (n.setNewValue_ = function (o) {
        var i = this.value_;
        (this.value_ = o),
          this.reportChanged(),
          Fn(this) &&
            Dn(this, { type: nr, object: this, newValue: o, oldValue: i });
      }),
      (n.get = function () {
        return this.reportObserved(), this.dehanceValue(this.value_);
      }),
      (n.intercept_ = function (o) {
        return Tl(this, o);
      }),
      (n.observe_ = function (o, i) {
        return (
          i &&
            o({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: nr,
              newValue: this.value_,
              oldValue: void 0,
            }),
          $l(this, o)
        );
      }),
      (n.raw = function () {
        return this.value_;
      }),
      (n.toJSON = function () {
        return this.get();
      }),
      (n.toString = function () {
        return this.name_ + "[" + this.value_ + "]";
      }),
      (n.valueOf = function () {
        return zb(this.get());
      }),
      (n[Xb] = function () {
        return this.valueOf();
      }),
      t
    );
  })(Pl),
  Jb;
Jb = Symbol.toPrimitive;
var $i = (function () {
    function e(n) {
      (this.dependenciesState_ = _e.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.isBeingObserved_ = !1),
        (this.isPendingUnobservation_ = !1),
        (this.observers_ = new Set()),
        (this.diffValue_ = 0),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = _e.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new fu(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.isComputing_ = !1),
        (this.isRunningSetter_ = !1),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = du.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        n.get || be(31),
        (this.derivation = n.get),
        (this.name_ = n.name || "ComputedValue"),
        n.set && (this.setter_ = ko("ComputedValue-setter", n.set)),
        (this.equals_ =
          n.equals ||
          (n.compareStructural || n.struct ? uu.structural : uu.default)),
        (this.scope_ = n.context),
        (this.requiresReaction_ = n.requiresReaction),
        (this.keepAlive_ = !!n.keepAlive);
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        eI(this);
      }),
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (r) {
            return r();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (r) {
            return r();
          });
      }),
      (t.get = function () {
        if (
          (this.isComputing_ && be(32, this.name_, this.derivation),
          W.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          Qf(this) &&
            (this.warnAboutUntrackedRead_(),
            xn(),
            (this.value_ = this.computeValue_(!1)),
            _n());
        else if ((ix(this), Qf(this))) {
          var r = W.trackingContext;
          this.keepAlive_ && !r && (W.trackingContext = this),
            this.trackAndCompute() && ZA(this),
            (W.trackingContext = r);
        }
        var o = this.value_;
        if (Es(o)) throw o.cause;
        return o;
      }),
      (t.set = function (r) {
        if (this.setter_) {
          this.isRunningSetter_ && be(33, this.name_),
            (this.isRunningSetter_ = !0);
          try {
            this.setter_.call(this.scope_, r);
          } finally {
            this.isRunningSetter_ = !1;
          }
        } else be(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var r = this.value_,
          o = this.dependenciesState_ === _e.NOT_TRACKING_,
          i = this.computeValue_(!0),
          a = o || Es(r) || Es(i) || !this.equals_(r, i);
        return a && (this.value_ = i), a;
      }),
      (t.computeValue_ = function (r) {
        this.isComputing_ = !0;
        var o = Oc(!1),
          i;
        if (r) i = Zb(this, this.derivation, this.scope_);
        else if (W.disableErrorBoundaries === !0)
          i = this.derivation.call(this.scope_);
        else
          try {
            i = this.derivation.call(this.scope_);
          } catch (a) {
            i = new fu(a);
          }
        return Tc(o), (this.isComputing_ = !1), i;
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (Yf(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (r, o) {
        var i = this,
          a = !0,
          l = void 0;
        return cI(function () {
          var s = i.get();
          if (!a || o) {
            var u = $o();
            r({
              observableKind: "computed",
              debugObjectName: i.name_,
              type: nr,
              object: i,
              newValue: s,
              oldValue: l,
            }),
              fr(u);
          }
          (a = !1), (l = s);
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return zb(this.get());
      }),
      (t[Jb] = function () {
        return this.valueOf();
      }),
      e
    );
  })(),
  $c = To("ComputedValue", $i),
  _e;
(function (e) {
  (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_");
})(_e || (_e = {}));
var du;
(function (e) {
  (e[(e.NONE = 0)] = "NONE"),
    (e[(e.LOG = 1)] = "LOG"),
    (e[(e.BREAK = 2)] = "BREAK");
})(du || (du = {}));
var fu = function (t) {
  (this.cause = void 0), (this.cause = t);
};
function Es(e) {
  return e instanceof fu;
}
function Qf(e) {
  switch (e.dependenciesState_) {
    case _e.UP_TO_DATE_:
      return !1;
    case _e.NOT_TRACKING_:
    case _e.STALE_:
      return !0;
    case _e.POSSIBLY_STALE_: {
      for (
        var t = $h(!0), n = $o(), r = e.observing_, o = r.length, i = 0;
        i < o;
        i++
      ) {
        var a = r[i];
        if ($c(a)) {
          if (W.disableErrorBoundaries) a.get();
          else
            try {
              a.get();
            } catch {
              return fr(n), Ma(t), !0;
            }
          if (e.dependenciesState_ === _e.STALE_) return fr(n), Ma(t), !0;
        }
      }
      return tx(e), fr(n), Ma(t), !1;
    }
  }
}
function Zb(e, t, n) {
  var r = $h(!0);
  tx(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++W.runId);
  var o = W.trackingDerivation;
  (W.trackingDerivation = e), W.inBatch++;
  var i;
  if (W.disableErrorBoundaries === !0) i = t.call(n);
  else
    try {
      i = t.call(n);
    } catch (a) {
      i = new fu(a);
    }
  return W.inBatch--, (W.trackingDerivation = o), YA(e), Ma(r), i;
}
function YA(e) {
  for (
    var t = e.observing_,
      n = (e.observing_ = e.newObserving_),
      r = _e.UP_TO_DATE_,
      o = 0,
      i = e.unboundDepsCount_,
      a = 0;
    a < i;
    a++
  ) {
    var l = n[a];
    l.diffValue_ === 0 && ((l.diffValue_ = 1), o !== a && (n[o] = l), o++),
      l.dependenciesState_ > r && (r = l.dependenciesState_);
  }
  for (n.length = o, e.newObserving_ = null, i = t.length; i--; ) {
    var s = t[i];
    s.diffValue_ === 0 && rx(s, e), (s.diffValue_ = 0);
  }
  for (; o--; ) {
    var u = n[o];
    u.diffValue_ === 1 && ((u.diffValue_ = 0), JA(u, e));
  }
  r !== _e.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
}
function Yf(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var n = t.length; n--; ) rx(t[n], e);
  e.dependenciesState_ = _e.NOT_TRACKING_;
}
function ex(e) {
  var t = $o();
  try {
    return e();
  } finally {
    fr(t);
  }
}
function $o() {
  var e = W.trackingDerivation;
  return (W.trackingDerivation = null), e;
}
function fr(e) {
  W.trackingDerivation = e;
}
function $h(e) {
  var t = W.allowStateReads;
  return (W.allowStateReads = e), t;
}
function Ma(e) {
  W.allowStateReads = e;
}
function tx(e) {
  if (e.dependenciesState_ !== _e.UP_TO_DATE_) {
    e.dependenciesState_ = _e.UP_TO_DATE_;
    for (var t = e.observing_, n = t.length; n--; )
      t[n].lowestObserverState_ = _e.UP_TO_DATE_;
  }
}
var Cs = function () {
    (this.version = 6),
      (this.UNCHANGED = {}),
      (this.trackingDerivation = null),
      (this.trackingContext = null),
      (this.runId = 0),
      (this.mobxGuid = 0),
      (this.inBatch = 0),
      (this.pendingUnobservations = []),
      (this.pendingReactions = []),
      (this.isRunningReactions = !1),
      (this.allowStateChanges = !1),
      (this.allowStateReads = !0),
      (this.enforceActions = !0),
      (this.spyListeners = []),
      (this.globalReactionErrorHandlers = []),
      (this.computedRequiresReaction = !1),
      (this.reactionRequiresObservable = !1),
      (this.observableRequiresReaction = !1),
      (this.disableErrorBoundaries = !1),
      (this.suppressReactionErrors = !1),
      (this.useProxies = !0),
      (this.verifyProxies = !1),
      (this.safeDescriptors = !0);
  },
  Rs = !0,
  nx = !1,
  W = (function () {
    var e = kh();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Rs = !1),
      e.__mobxGlobals &&
        e.__mobxGlobals.version !== new Cs().version &&
        (Rs = !1),
      Rs
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Cs()))
        : (setTimeout(function () {
            nx || be(35);
          }, 1),
          new Cs())
    );
  })();
function XA() {
  if (
    ((W.pendingReactions.length || W.inBatch || W.isRunningReactions) && be(36),
    (nx = !0),
    Rs)
  ) {
    var e = kh();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (W = new Cs());
  }
}
function JA(e, t) {
  e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_);
}
function rx(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && ox(e);
}
function ox(e) {
  e.isPendingUnobservation_ === !1 &&
    ((e.isPendingUnobservation_ = !0), W.pendingUnobservations.push(e));
}
function xn() {
  W.inBatch++;
}
function _n() {
  if (--W.inBatch === 0) {
    lx();
    for (var e = W.pendingUnobservations, t = 0; t < e.length; t++) {
      var n = e[t];
      (n.isPendingUnobservation_ = !1),
        n.observers_.size === 0 &&
          (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()),
          n instanceof $i && n.suspend_());
    }
    W.pendingUnobservations = [];
  }
}
function ix(e) {
  var t = W.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved_ &&
          W.trackingContext &&
          ((e.isBeingObserved_ = !0), e.onBO())),
      e.isBeingObserved_)
    : (e.observers_.size === 0 && W.inBatch > 0 && ox(e), !1);
}
function ax(e) {
  e.lowestObserverState_ !== _e.STALE_ &&
    ((e.lowestObserverState_ = _e.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === _e.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = _e.STALE_);
    }));
}
function ZA(e) {
  e.lowestObserverState_ !== _e.STALE_ &&
    ((e.lowestObserverState_ = _e.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === _e.POSSIBLY_STALE_
        ? (t.dependenciesState_ = _e.STALE_)
        : t.dependenciesState_ === _e.UP_TO_DATE_ &&
          (e.lowestObserverState_ = _e.UP_TO_DATE_);
    }));
}
function eI(e) {
  e.lowestObserverState_ === _e.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = _e.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === _e.UP_TO_DATE_ &&
        ((t.dependenciesState_ = _e.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var ol = (function () {
    function e(n, r, o, i) {
      n === void 0 && (n = "Reaction"),
        (this.name_ = void 0),
        (this.onInvalidate_ = void 0),
        (this.errorHandler_ = void 0),
        (this.requiresObservable_ = void 0),
        (this.observing_ = []),
        (this.newObserving_ = []),
        (this.dependenciesState_ = _e.NOT_TRACKING_),
        (this.diffValue_ = 0),
        (this.runId_ = 0),
        (this.unboundDepsCount_ = 0),
        (this.isDisposed_ = !1),
        (this.isScheduled_ = !1),
        (this.isTrackPending_ = !1),
        (this.isRunning_ = !1),
        (this.isTracing_ = du.NONE),
        (this.name_ = n),
        (this.onInvalidate_ = r),
        (this.errorHandler_ = o),
        (this.requiresObservable_ = i);
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        this.schedule_();
      }),
      (t.schedule_ = function () {
        this.isScheduled_ ||
          ((this.isScheduled_ = !0), W.pendingReactions.push(this), lx());
      }),
      (t.isScheduled = function () {
        return this.isScheduled_;
      }),
      (t.runReaction_ = function () {
        if (!this.isDisposed_) {
          xn(), (this.isScheduled_ = !1);
          var r = W.trackingContext;
          if (((W.trackingContext = this), Qf(this))) {
            this.isTrackPending_ = !0;
            try {
              this.onInvalidate_();
            } catch (o) {
              this.reportExceptionInDerivation_(o);
            }
          }
          (W.trackingContext = r), _n();
        }
      }),
      (t.track = function (r) {
        if (!this.isDisposed_) {
          xn(), (this.isRunning_ = !0);
          var o = W.trackingContext;
          W.trackingContext = this;
          var i = Zb(this, r, void 0);
          (W.trackingContext = o),
            (this.isRunning_ = !1),
            (this.isTrackPending_ = !1),
            this.isDisposed_ && Yf(this),
            Es(i) && this.reportExceptionInDerivation_(i.cause),
            _n();
        }
      }),
      (t.reportExceptionInDerivation_ = function (r) {
        var o = this;
        if (this.errorHandler_) {
          this.errorHandler_(r, this);
          return;
        }
        if (W.disableErrorBoundaries) throw r;
        var i = "[mobx] uncaught error in '" + this + "'";
        W.suppressReactionErrors || console.error(i, r),
          W.globalReactionErrorHandlers.forEach(function (a) {
            return a(r, o);
          });
      }),
      (t.dispose = function () {
        this.isDisposed_ ||
          ((this.isDisposed_ = !0), this.isRunning_ || (xn(), Yf(this), _n()));
      }),
      (t.getDisposer_ = function (r) {
        var o = this,
          i = function a() {
            o.dispose(),
              r == null ||
                r.removeEventListener == null ||
                r.removeEventListener("abort", a);
          };
        return (
          r == null ||
            r.addEventListener == null ||
            r.addEventListener("abort", i),
          (i[te] = this),
          i
        );
      }),
      (t.toString = function () {
        return "Reaction[" + this.name_ + "]";
      }),
      (t.trace = function (r) {}),
      e
    );
  })(),
  tI = 100,
  Xf = function (t) {
    return t();
  };
function lx() {
  W.inBatch > 0 || W.isRunningReactions || Xf(nI);
}
function nI() {
  W.isRunningReactions = !0;
  for (var e = W.pendingReactions, t = 0; e.length > 0; ) {
    ++t === tI &&
      (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var n = e.splice(0), r = 0, o = n.length; r < o; r++)
      n[r].runReaction_();
  }
  W.isRunningReactions = !1;
}
var pu = To("Reaction", ol);
function rI(e) {
  var t = Xf;
  Xf = function (r) {
    return e(function () {
      return t(r);
    });
  };
}
function Aa() {
  return !1;
}
function oI(e) {
  return (
    console.warn("[mobx.spy] Is a no-op in production builds"), function () {}
  );
}
var sx = "action",
  iI = "action.bound",
  ux = "autoAction",
  aI = "autoAction.bound",
  lI = "<unnamed action>",
  Jf = Ol(sx),
  sI = Ol(iI, { bound: !0 }),
  Zf = Ol(ux, { autoAction: !0 }),
  uI = Ol(aI, { autoAction: !0, bound: !0 });
function cx(e) {
  var t = function (r, o) {
    if (Un(r)) return ko(r.name || lI, r, e);
    if (Un(o)) return ko(r, o, e);
    if (kl(o)) return (e ? Zf : Jf).decorate_20223_(r, o);
    if (Eo(o)) return Vi(r, o, e ? Zf : Jf);
    if (Eo(r)) return tr(Ol(e ? ux : sx, { name: r, autoAction: e }));
  };
  return t;
}
var ci = cx(!1);
Object.assign(ci, Jf);
var il = cx(!0);
Object.assign(il, Zf);
ci.bound = tr(sI);
il.bound = tr(uI);
function Mc(e) {
  return Un(e) && e.isMobxAction === !0;
}
function cI(e, t) {
  var n, r, o, i, a;
  t === void 0 && (t = Ib);
  var l = (n = (r = t) == null ? void 0 : r.name) != null ? n : "Autorun",
    s = !t.scheduler && !t.delay,
    u;
  if (s)
    u = new ol(
      l,
      function () {
        this.track(f);
      },
      t.onError,
      t.requiresObservable
    );
  else {
    var c = fI(t),
      d = !1;
    u = new ol(
      l,
      function () {
        d ||
          ((d = !0),
          c(function () {
            (d = !1), u.isDisposed_ || u.track(f);
          }));
      },
      t.onError,
      t.requiresObservable
    );
  }
  function f() {
    e(u);
  }
  return (
    ((o = t) != null && (i = o.signal) != null && i.aborted) || u.schedule_(),
    u.getDisposer_((a = t) == null ? void 0 : a.signal)
  );
}
var dI = function (t) {
  return t();
};
function fI(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
    ? function (t) {
        return setTimeout(t, e.delay);
      }
    : dI;
}
var pI = "onBO",
  hI = "onBUO";
function mI(e, t, n) {
  return fx(pI, e, t, n);
}
function dx(e, t, n) {
  return fx(hI, e, t, n);
}
function fx(e, t, n, r) {
  var o = typeof r == "function" ? Ai(t, n) : Ai(t),
    i = Un(r) ? r : n,
    a = e + "L";
  return (
    o[a] ? o[a].add(i) : (o[a] = new Set([i])),
    function () {
      var l = o[a];
      l && (l.delete(i), l.size === 0 && delete o[a]);
    }
  );
}
var vI = "never",
  os = "always",
  gI = "observed";
function yI(e) {
  e.isolateGlobalState === !0 && XA();
  var t = e.useProxies,
    n = e.enforceActions;
  if (
    (t !== void 0 &&
      (W.useProxies = t === os ? !0 : t === vI ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (W.verifyProxies = !0),
    n !== void 0)
  ) {
    var r = n === os ? os : n === gI;
    (W.enforceActions = r), (W.allowStateChanges = !(r === !0 || r === os));
  }
  [
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (o) {
    o in e && (W[o] = !!e[o]);
  }),
    (W.allowStateReads = !W.observableRequiresReaction),
    e.reactionScheduler && rI(e.reactionScheduler);
}
function px(e, t, n, r) {
  var o = JM(t);
  return (
    Jr(function () {
      var i = Ao(e, r)[te];
      Ti(o).forEach(function (a) {
        i.extend_(a, o[a], n && a in n ? n[a] : !0);
      });
    }),
    e
  );
}
function bI(e, t) {
  return hx(Ai(e, t));
}
function hx(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ &&
      e.observing_.length > 0 &&
      (t.dependencies = xI(e.observing_).map(hx)),
    t
  );
}
function xI(e) {
  return Array.from(new Set(e));
}
var _I = 0;
function mx() {
  this.message = "FLOW_CANCELLED";
}
mx.prototype = Object.create(Error.prototype);
var Rd = Vb("flow"),
  SI = Vb("flow.bound", { bound: !0 }),
  Mi = Object.assign(function (t, n) {
    if (kl(n)) return Rd.decorate_20223_(t, n);
    if (Eo(n)) return Vi(t, n, Rd);
    var r = t,
      o = r.name || "<unnamed flow>",
      i = function () {
        var l = this,
          s = arguments,
          u = ++_I,
          c = ci(o + " - runid: " + u + " - init", r).apply(l, s),
          d,
          f = void 0,
          x = new Promise(function (y, g) {
            var S = 0;
            d = g;
            function h(_) {
              f = void 0;
              var E;
              try {
                E = ci(o + " - runid: " + u + " - yield " + S++, c.next).call(
                  c,
                  _
                );
              } catch (b) {
                return g(b);
              }
              m(E);
            }
            function p(_) {
              f = void 0;
              var E;
              try {
                E = ci(o + " - runid: " + u + " - yield " + S++, c.throw).call(
                  c,
                  _
                );
              } catch (b) {
                return g(b);
              }
              m(E);
            }
            function m(_) {
              if (Un(_ == null ? void 0 : _.then)) {
                _.then(m, g);
                return;
              }
              return _.done
                ? y(_.value)
                : ((f = Promise.resolve(_.value)), f.then(h, p));
            }
            h(void 0);
          });
        return (
          (x.cancel = ci(o + " - runid: " + u + " - cancel", function () {
            try {
              f && fg(f);
              var y = c.return(void 0),
                g = Promise.resolve(y.value);
              g.then(si, si), fg(g), d(new mx());
            } catch (S) {
              d(S);
            }
          })),
          x
        );
      };
    return (i.isMobXFlow = !0), i;
  }, Rd);
Mi.bound = tr(SI);
function fg(e) {
  Un(e.cancel) && e.cancel();
}
function al(e) {
  return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function wI(e, t) {
  return e
    ? t !== void 0
      ? ll(e)
        ? e[te].values_.has(t)
        : !1
      : ll(e) || !!e[te] || Oh(e) || pu(e) || $c(e)
    : !1;
}
function vx(e) {
  return wI(e);
}
function lr(e, t) {
  t === void 0 && (t = void 0), xn();
  try {
    return e.apply(t);
  } finally {
    _n();
  }
}
function Ho(e) {
  return e[te];
}
var EI = {
  has: function (t, n) {
    return Ho(t).has_(n);
  },
  get: function (t, n) {
    return Ho(t).get_(n);
  },
  set: function (t, n, r) {
    var o;
    return Eo(n) ? ((o = Ho(t).set_(n, r, !0)) != null ? o : !0) : !1;
  },
  deleteProperty: function (t, n) {
    var r;
    return Eo(n) ? ((r = Ho(t).delete_(n, !0)) != null ? r : !0) : !1;
  },
  defineProperty: function (t, n, r) {
    var o;
    return (o = Ho(t).defineProperty_(n, r)) != null ? o : !0;
  },
  ownKeys: function (t) {
    return Ho(t).ownKeys_();
  },
  preventExtensions: function (t) {
    be(13);
  },
};
function CI(e, t) {
  var n, r;
  return (
    Nb(),
    (e = Ao(e, t)),
    (r = (n = e[te]).proxy_) != null ? r : (n.proxy_ = new Proxy(e, EI))
  );
}
function gn(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function Tl(e, t) {
  var n = e.interceptors_ || (e.interceptors_ = []);
  return (
    n.push(t),
    Lb(function () {
      var r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    })
  );
}
function yn(e, t) {
  var n = $o();
  try {
    for (
      var r = [].concat(e.interceptors_ || []), o = 0, i = r.length;
      o < i && ((t = r[o](t)), t && !t.type && be(14), !!t);
      o++
    );
    return t;
  } finally {
    fr(n);
  }
}
function Fn(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function $l(e, t) {
  var n = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    n.push(t),
    Lb(function () {
      var r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    })
  );
}
function Dn(e, t) {
  var n = $o(),
    r = e.changeListeners_;
  if (r) {
    r = r.slice();
    for (var o = 0, i = r.length; o < i; o++) r[o](t);
    fr(n);
  }
}
function RI(e, t, n) {
  return (
    Jr(function () {
      var r,
        o = Ao(e, n)[te];
      (r = t) != null || (t = nA(e)),
        Ti(t).forEach(function (i) {
          return o.make_(i, t[i]);
        });
    }),
    e
  );
}
var kd = Symbol("mobx-keys");
function kI(e, t, n) {
  return gr(e)
    ? px(e, e, t, n)
    : (Jr(function () {
        var r = Ao(e, n)[te];
        if (!e[kd]) {
          var o = Object.getPrototypeOf(e),
            i = new Set([].concat(Ti(e), Ti(o)));
          i.delete("constructor"), i.delete(te), Cl(o, kd, i);
        }
        e[kd].forEach(function (a) {
          return r.make_(a, t && a in t ? t[a] : !0);
        });
      }),
      e);
}
var pg = "splice",
  nr = "update",
  PI = 1e4,
  OI = {
    get: function (t, n) {
      var r = t[te];
      return n === te
        ? r
        : n === "length"
        ? r.getArrayLength_()
        : typeof n == "string" && !isNaN(n)
        ? r.get_(parseInt(n))
        : dr(hu, n)
        ? hu[n]
        : t[n];
    },
    set: function (t, n, r) {
      var o = t[te];
      return (
        n === "length" && o.setArrayLength_(r),
        typeof n == "symbol" || isNaN(n) ? (t[n] = r) : o.set_(parseInt(n), r),
        !0
      );
    },
    preventExtensions: function () {
      be(15);
    },
  },
  Mh = (function () {
    function e(n, r, o, i) {
      n === void 0 && (n = "ObservableArray"),
        (this.owned_ = void 0),
        (this.legacyMode_ = void 0),
        (this.atom_ = void 0),
        (this.values_ = []),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.enhancer_ = void 0),
        (this.dehancer = void 0),
        (this.proxy_ = void 0),
        (this.lastKnownLength_ = 0),
        (this.owned_ = o),
        (this.legacyMode_ = i),
        (this.atom_ = new Pl(n)),
        (this.enhancer_ = function (a, l) {
          return r(a, l, "ObservableArray[..]");
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.dehanceValues_ = function (r) {
        return this.dehancer !== void 0 && r.length > 0
          ? r.map(this.dehancer)
          : r;
      }),
      (t.intercept_ = function (r) {
        return Tl(this, r);
      }),
      (t.observe_ = function (r, o) {
        return (
          o === void 0 && (o = !1),
          o &&
            r({
              observableKind: "array",
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: "splice",
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          $l(this, r)
        );
      }),
      (t.getArrayLength_ = function () {
        return this.atom_.reportObserved(), this.values_.length;
      }),
      (t.setArrayLength_ = function (r) {
        (typeof r != "number" || isNaN(r) || r < 0) && be("Out of range: " + r);
        var o = this.values_.length;
        if (r !== o)
          if (r > o) {
            for (var i = new Array(r - o), a = 0; a < r - o; a++) i[a] = void 0;
            this.spliceWithArray_(o, 0, i);
          } else this.spliceWithArray_(r, o - r);
      }),
      (t.updateArrayLength_ = function (r, o) {
        r !== this.lastKnownLength_ && be(16),
          (this.lastKnownLength_ += o),
          this.legacyMode_ && o > 0 && kx(r + o + 1);
      }),
      (t.spliceWithArray_ = function (r, o, i) {
        var a = this;
        this.atom_;
        var l = this.values_.length;
        if (
          (r === void 0
            ? (r = 0)
            : r > l
            ? (r = l)
            : r < 0 && (r = Math.max(0, l + r)),
          arguments.length === 1
            ? (o = l - r)
            : o == null
            ? (o = 0)
            : (o = Math.max(0, Math.min(o, l - r))),
          i === void 0 && (i = Hf),
          gn(this))
        ) {
          var s = yn(this, {
            object: this.proxy_,
            type: pg,
            index: r,
            removedCount: o,
            added: i,
          });
          if (!s) return Hf;
          (o = s.removedCount), (i = s.added);
        }
        if (
          ((i =
            i.length === 0
              ? i
              : i.map(function (d) {
                  return a.enhancer_(d, void 0);
                })),
          this.legacyMode_)
        ) {
          var u = i.length - o;
          this.updateArrayLength_(l, u);
        }
        var c = this.spliceItemsIntoValues_(r, o, i);
        return (
          (o !== 0 || i.length !== 0) && this.notifyArraySplice_(r, i, c),
          this.dehanceValues_(c)
        );
      }),
      (t.spliceItemsIntoValues_ = function (r, o, i) {
        if (i.length < PI) {
          var a;
          return (a = this.values_).splice.apply(a, [r, o].concat(i));
        } else {
          var l = this.values_.slice(r, r + o),
            s = this.values_.slice(r + o);
          this.values_.length += i.length - o;
          for (var u = 0; u < i.length; u++) this.values_[r + u] = i[u];
          for (var c = 0; c < s.length; c++)
            this.values_[r + i.length + c] = s[c];
          return l;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (r, o, i) {
        var a = !this.owned_ && Aa(),
          l = Fn(this),
          s =
            l || a
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: nr,
                  debugObjectName: this.atom_.name_,
                  index: r,
                  newValue: o,
                  oldValue: i,
                }
              : null;
        this.atom_.reportChanged(), l && Dn(this, s);
      }),
      (t.notifyArraySplice_ = function (r, o, i) {
        var a = !this.owned_ && Aa(),
          l = Fn(this),
          s =
            l || a
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: pg,
                  index: r,
                  removed: i,
                  added: o,
                  removedCount: i.length,
                  addedCount: o.length,
                }
              : null;
        this.atom_.reportChanged(), l && Dn(this, s);
      }),
      (t.get_ = function (r) {
        if (this.legacyMode_ && r >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + r);
          return;
        }
        return this.atom_.reportObserved(), this.dehanceValue_(this.values_[r]);
      }),
      (t.set_ = function (r, o) {
        var i = this.values_;
        if (
          (this.legacyMode_ && r > i.length && be(17, r, i.length),
          r < i.length)
        ) {
          this.atom_;
          var a = i[r];
          if (gn(this)) {
            var l = yn(this, {
              type: nr,
              object: this.proxy_,
              index: r,
              newValue: o,
            });
            if (!l) return;
            o = l.newValue;
          }
          o = this.enhancer_(o, a);
          var s = o !== a;
          s && ((i[r] = o), this.notifyArrayChildUpdate_(r, o, a));
        } else {
          for (
            var u = new Array(r + 1 - i.length), c = 0;
            c < u.length - 1;
            c++
          )
            u[c] = void 0;
          (u[u.length - 1] = o), this.spliceWithArray_(i.length, 0, u);
        }
      }),
      e
    );
  })();
function TI(e, t, n, r) {
  return (
    n === void 0 && (n = "ObservableArray"),
    r === void 0 && (r = !1),
    Nb(),
    Jr(function () {
      var o = new Mh(n, t, r, !1);
      Fb(o.values_, te, o);
      var i = new Proxy(o.values_, OI);
      return (o.proxy_ = i), e && e.length && o.spliceWithArray_(0, 0, e), i;
    })
  );
}
var hu = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var n = this[te];
    return n.spliceWithArray_(0, n.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, n) {
    for (
      var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2;
      i < r;
      i++
    )
      o[i - 2] = arguments[i];
    var a = this[te];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return a.spliceWithArray_(t);
      case 2:
        return a.spliceWithArray_(t, n);
    }
    return a.spliceWithArray_(t, n, o);
  },
  spliceWithArray: function (t, n, r) {
    return this[te].spliceWithArray_(t, n, r);
  },
  push: function () {
    for (
      var t = this[te], n = arguments.length, r = new Array(n), o = 0;
      o < n;
      o++
    )
      r[o] = arguments[o];
    return t.spliceWithArray_(t.values_.length, 0, r), t.values_.length;
  },
  pop: function () {
    return this.splice(Math.max(this[te].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (
      var t = this[te], n = arguments.length, r = new Array(n), o = 0;
      o < n;
      o++
    )
      r[o] = arguments[o];
    return t.spliceWithArray_(0, 0, r), t.values_.length;
  },
  reverse: function () {
    return (
      W.trackingDerivation && be(37, "reverse"),
      this.replace(this.slice().reverse()),
      this
    );
  },
  sort: function () {
    W.trackingDerivation && be(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function (t) {
    var n = this[te],
      r = n.dehanceValues_(n.values_).indexOf(t);
    return r > -1 ? (this.splice(r, 1), !0) : !1;
  },
};
ze("at", sn);
ze("concat", sn);
ze("flat", sn);
ze("includes", sn);
ze("indexOf", sn);
ze("join", sn);
ze("lastIndexOf", sn);
ze("slice", sn);
ze("toString", sn);
ze("toLocaleString", sn);
ze("toSorted", sn);
ze("toSpliced", sn);
ze("with", sn);
ze("every", Wn);
ze("filter", Wn);
ze("find", Wn);
ze("findIndex", Wn);
ze("findLast", Wn);
ze("findLastIndex", Wn);
ze("flatMap", Wn);
ze("forEach", Wn);
ze("map", Wn);
ze("some", Wn);
ze("toReversed", Wn);
ze("reduce", gx);
ze("reduceRight", gx);
function ze(e, t) {
  typeof Array.prototype[e] == "function" && (hu[e] = t(e));
}
function sn(e) {
  return function () {
    var t = this[te];
    t.atom_.reportObserved();
    var n = t.dehanceValues_(t.values_);
    return n[e].apply(n, arguments);
  };
}
function Wn(e) {
  return function (t, n) {
    var r = this,
      o = this[te];
    o.atom_.reportObserved();
    var i = o.dehanceValues_(o.values_);
    return i[e](function (a, l) {
      return t.call(n, a, l, r);
    });
  };
}
function gx(e) {
  return function () {
    var t = this,
      n = this[te];
    n.atom_.reportObserved();
    var r = n.dehanceValues_(n.values_),
      o = arguments[0];
    return (
      (arguments[0] = function (i, a, l) {
        return o(i, a, l, t);
      }),
      r[e].apply(r, arguments)
    );
  };
}
var $I = To("ObservableArrayAdministration", Mh);
function Ac(e) {
  return Cc(e) && $I(e[te]);
}
var yx,
  bx,
  MI = {},
  Nr = "add",
  mu = "delete";
yx = Symbol.iterator;
bx = Symbol.toStringTag;
var xx = (function () {
    function e(n, r, o) {
      var i = this;
      r === void 0 && (r = Ro),
        o === void 0 && (o = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[te] = MI),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = r),
        (this.name_ = o),
        Un(Map) || be(18),
        Jr(function () {
          (i.keysAtom_ = Ub("ObservableMap.keys()")),
            (i.data_ = new Map()),
            (i.hasMap_ = new Map()),
            n && i.merge(n);
        });
    }
    var t = e.prototype;
    return (
      (t.has_ = function (r) {
        return this.data_.has(r);
      }),
      (t.has = function (r) {
        var o = this;
        if (!W.trackingDerivation) return this.has_(r);
        var i = this.hasMap_.get(r);
        if (!i) {
          var a = (i = new ho(this.has_(r), Rc, "ObservableMap.key?", !1));
          this.hasMap_.set(r, a),
            dx(a, function () {
              return o.hasMap_.delete(r);
            });
        }
        return i.get();
      }),
      (t.set = function (r, o) {
        var i = this.has_(r);
        if (gn(this)) {
          var a = yn(this, {
            type: i ? nr : Nr,
            object: this,
            newValue: o,
            name: r,
          });
          if (!a) return this;
          o = a.newValue;
        }
        return i ? this.updateValue_(r, o) : this.addValue_(r, o), this;
      }),
      (t.delete = function (r) {
        var o = this;
        if ((this.keysAtom_, gn(this))) {
          var i = yn(this, { type: mu, object: this, name: r });
          if (!i) return !1;
        }
        if (this.has_(r)) {
          var a = Aa(),
            l = Fn(this),
            s =
              l || a
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: mu,
                    object: this,
                    oldValue: this.data_.get(r).value_,
                    name: r,
                  }
                : null;
          return (
            lr(function () {
              var u;
              o.keysAtom_.reportChanged(),
                (u = o.hasMap_.get(r)) == null || u.setNewValue_(!1);
              var c = o.data_.get(r);
              c.setNewValue_(void 0), o.data_.delete(r);
            }),
            l && Dn(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (r, o) {
        var i = this.data_.get(r);
        if (((o = i.prepareNewValue_(o)), o !== W.UNCHANGED)) {
          var a = Aa(),
            l = Fn(this),
            s =
              l || a
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: nr,
                    object: this,
                    oldValue: i.value_,
                    name: r,
                    newValue: o,
                  }
                : null;
          i.setNewValue_(o), l && Dn(this, s);
        }
      }),
      (t.addValue_ = function (r, o) {
        var i = this;
        this.keysAtom_,
          lr(function () {
            var u,
              c = new ho(o, i.enhancer_, "ObservableMap.key", !1);
            i.data_.set(r, c),
              (o = c.value_),
              (u = i.hasMap_.get(r)) == null || u.setNewValue_(!0),
              i.keysAtom_.reportChanged();
          });
        var a = Aa(),
          l = Fn(this),
          s =
            l || a
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Nr,
                  object: this,
                  name: r,
                  newValue: o,
                }
              : null;
        l && Dn(this, s);
      }),
      (t.get = function (r) {
        return this.has(r)
          ? this.dehanceValue_(this.data_.get(r).get())
          : this.dehanceValue_(void 0);
      }),
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.keys = function () {
        return this.keysAtom_.reportObserved(), this.data_.keys();
      }),
      (t.values = function () {
        var r = this,
          o = this.keys();
        return sl({
          next: function () {
            var a = o.next(),
              l = a.done,
              s = a.value;
            return { done: l, value: l ? void 0 : r.get(s) };
          },
        });
      }),
      (t.entries = function () {
        var r = this,
          o = this.keys();
        return sl({
          next: function () {
            var a = o.next(),
              l = a.done,
              s = a.value;
            return { done: l, value: l ? void 0 : [s, r.get(s)] };
          },
        });
      }),
      (t[yx] = function () {
        return this.entries();
      }),
      (t.forEach = function (r, o) {
        for (var i = ui(this), a; !(a = i()).done; ) {
          var l = a.value,
            s = l[0],
            u = l[1];
          r.call(o, u, s, this);
        }
      }),
      (t.merge = function (r) {
        var o = this;
        return (
          Mo(r) && (r = new Map(r)),
          lr(function () {
            gr(r)
              ? XM(r).forEach(function (i) {
                  return o.set(i, r[i]);
                })
              : Array.isArray(r)
              ? r.forEach(function (i) {
                  var a = i[0],
                    l = i[1];
                  return o.set(a, l);
                })
              : Wi(r)
              ? (r.constructor !== Map && be(19, r),
                r.forEach(function (i, a) {
                  return o.set(a, i);
                }))
              : r != null && be(20, r);
          }),
          this
        );
      }),
      (t.clear = function () {
        var r = this;
        lr(function () {
          ex(function () {
            for (var o = ui(r.keys()), i; !(i = o()).done; ) {
              var a = i.value;
              r.delete(a);
            }
          });
        });
      }),
      (t.replace = function (r) {
        var o = this;
        return (
          lr(function () {
            for (
              var i = AI(r), a = new Map(), l = !1, s = ui(o.data_.keys()), u;
              !(u = s()).done;

            ) {
              var c = u.value;
              if (!i.has(c)) {
                var d = o.delete(c);
                if (d) l = !0;
                else {
                  var f = o.data_.get(c);
                  a.set(c, f);
                }
              }
            }
            for (var x = ui(i.entries()), y; !(y = x()).done; ) {
              var g = y.value,
                S = g[0],
                h = g[1],
                p = o.data_.has(S);
              if ((o.set(S, h), o.data_.has(S))) {
                var m = o.data_.get(S);
                a.set(S, m), p || (l = !0);
              }
            }
            if (!l)
              if (o.data_.size !== a.size) o.keysAtom_.reportChanged();
              else
                for (
                  var _ = o.data_.keys(),
                    E = a.keys(),
                    b = _.next(),
                    w = E.next();
                  !b.done;

                ) {
                  if (b.value !== w.value) {
                    o.keysAtom_.reportChanged();
                    break;
                  }
                  (b = _.next()), (w = E.next());
                }
            o.data_ = a;
          }),
          this
        );
      }),
      (t.toString = function () {
        return "[object ObservableMap]";
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.observe_ = function (r, o) {
        return $l(this, r);
      }),
      (t.intercept_ = function (r) {
        return Tl(this, r);
      }),
      Ph(e, [
        {
          key: "size",
          get: function () {
            return this.keysAtom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: bx,
          get: function () {
            return "Map";
          },
        },
      ]),
      e
    );
  })(),
  Mo = To("ObservableMap", xx);
function AI(e) {
  if (Wi(e) || Mo(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (gr(e)) {
    var t = new Map();
    for (var n in e) t.set(n, e[n]);
    return t;
  } else return be(21, e);
}
var _x,
  Sx,
  II = {};
_x = Symbol.iterator;
Sx = Symbol.toStringTag;
var wx = (function () {
    function e(n, r, o) {
      var i = this;
      r === void 0 && (r = Ro),
        o === void 0 && (o = "ObservableSet"),
        (this.name_ = void 0),
        (this[te] = II),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = o),
        Un(Set) || be(22),
        (this.enhancer_ = function (a, l) {
          return r(a, l, o);
        }),
        Jr(function () {
          (i.atom_ = Ub(i.name_)), n && i.replace(n);
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (r) {
        return this.dehancer !== void 0 ? this.dehancer(r) : r;
      }),
      (t.clear = function () {
        var r = this;
        lr(function () {
          ex(function () {
            for (var o = ui(r.data_.values()), i; !(i = o()).done; ) {
              var a = i.value;
              r.delete(a);
            }
          });
        });
      }),
      (t.forEach = function (r, o) {
        for (var i = ui(this), a; !(a = i()).done; ) {
          var l = a.value;
          r.call(o, l, l, this);
        }
      }),
      (t.add = function (r) {
        var o = this;
        if ((this.atom_, gn(this))) {
          var i = yn(this, { type: Nr, object: this, newValue: r });
          if (!i) return this;
        }
        if (!this.has(r)) {
          lr(function () {
            o.data_.add(o.enhancer_(r, void 0)), o.atom_.reportChanged();
          });
          var a = !1,
            l = Fn(this),
            s =
              l || a
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Nr,
                    object: this,
                    newValue: r,
                  }
                : null;
          l && Dn(this, s);
        }
        return this;
      }),
      (t.delete = function (r) {
        var o = this;
        if (gn(this)) {
          var i = yn(this, { type: mu, object: this, oldValue: r });
          if (!i) return !1;
        }
        if (this.has(r)) {
          var a = !1,
            l = Fn(this),
            s =
              l || a
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: mu,
                    object: this,
                    oldValue: r,
                  }
                : null;
          return (
            lr(function () {
              o.atom_.reportChanged(), o.data_.delete(r);
            }),
            l && Dn(this, s),
            !0
          );
        }
        return !1;
      }),
      (t.has = function (r) {
        return (
          this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(r))
        );
      }),
      (t.entries = function () {
        var r = 0,
          o = Array.from(this.keys()),
          i = Array.from(this.values());
        return sl({
          next: function () {
            var l = r;
            return (
              (r += 1),
              l < i.length ? { value: [o[l], i[l]], done: !1 } : { done: !0 }
            );
          },
        });
      }),
      (t.keys = function () {
        return this.values();
      }),
      (t.values = function () {
        this.atom_.reportObserved();
        var r = this,
          o = 0,
          i = Array.from(this.data_.values());
        return sl({
          next: function () {
            return o < i.length
              ? { value: r.dehanceValue_(i[o++]), done: !1 }
              : { done: !0 };
          },
        });
      }),
      (t.replace = function (r) {
        var o = this;
        return (
          Hi(r) && (r = new Set(r)),
          lr(function () {
            Array.isArray(r)
              ? (o.clear(),
                r.forEach(function (i) {
                  return o.add(i);
                }))
              : Rl(r)
              ? (o.clear(),
                r.forEach(function (i) {
                  return o.add(i);
                }))
              : r != null && be("Cannot initialize set from " + r);
          }),
          this
        );
      }),
      (t.observe_ = function (r, o) {
        return $l(this, r);
      }),
      (t.intercept_ = function (r) {
        return Tl(this, r);
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.toString = function () {
        return "[object ObservableSet]";
      }),
      (t[_x] = function () {
        return this.values();
      }),
      Ph(e, [
        {
          key: "size",
          get: function () {
            return this.atom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Sx,
          get: function () {
            return "Set";
          },
        },
      ]),
      e
    );
  })(),
  Hi = To("ObservableSet", wx),
  hg = Object.create(null),
  mg = "remove",
  Ex = (function () {
    function e(n, r, o, i) {
      r === void 0 && (r = new Map()),
        i === void 0 && (i = PA),
        (this.target_ = void 0),
        (this.values_ = void 0),
        (this.name_ = void 0),
        (this.defaultAnnotation_ = void 0),
        (this.keysAtom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.proxy_ = void 0),
        (this.isPlainObject_ = void 0),
        (this.appliedAnnotations_ = void 0),
        (this.pendingKeys_ = void 0),
        (this.target_ = n),
        (this.values_ = r),
        (this.name_ = o),
        (this.defaultAnnotation_ = i),
        (this.keysAtom_ = new Pl("ObservableObject.keys")),
        (this.isPlainObject_ = gr(this.target_));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (r) {
        return this.values_.get(r).get();
      }),
      (t.setObservablePropValue_ = function (r, o) {
        var i = this.values_.get(r);
        if (i instanceof $i) return i.set(o), !0;
        if (gn(this)) {
          var a = yn(this, {
            type: nr,
            object: this.proxy_ || this.target_,
            name: r,
            newValue: o,
          });
          if (!a) return null;
          o = a.newValue;
        }
        if (((o = i.prepareNewValue_(o)), o !== W.UNCHANGED)) {
          var l = Fn(this),
            s = !1,
            u =
              l || s
                ? {
                    type: nr,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: i.value_,
                    name: r,
                    newValue: o,
                  }
                : null;
          i.setNewValue_(o), l && Dn(this, u);
        }
        return !0;
      }),
      (t.get_ = function (r) {
        return (
          W.trackingDerivation && !dr(this.target_, r) && this.has_(r),
          this.target_[r]
        );
      }),
      (t.set_ = function (r, o, i) {
        return (
          i === void 0 && (i = !1),
          dr(this.target_, r)
            ? this.values_.has(r)
              ? this.setObservablePropValue_(r, o)
              : i
              ? Reflect.set(this.target_, r, o)
              : ((this.target_[r] = o), !0)
            : this.extend_(
                r,
                { value: o, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                i
              )
        );
      }),
      (t.has_ = function (r) {
        if (!W.trackingDerivation) return r in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var o = this.pendingKeys_.get(r);
        return (
          o ||
            ((o = new ho(r in this.target_, Rc, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(r, o)),
          o.get()
        );
      }),
      (t.make_ = function (r, o) {
        if ((o === !0 && (o = this.defaultAnnotation_), o !== !1)) {
          if (!(r in this.target_)) {
            var i;
            if ((i = this.target_[Yn]) != null && i[r]) return;
            be(1, o.annotationType_, this.name_ + "." + r.toString());
          }
          for (var a = this.target_; a && a !== Ec; ) {
            var l = su(a, r);
            if (l) {
              var s = o.make_(this, r, l, a);
              if (s === 0) return;
              if (s === 1) break;
            }
            a = Object.getPrototypeOf(a);
          }
          gg(this, o, r);
        }
      }),
      (t.extend_ = function (r, o, i, a) {
        if (
          (a === void 0 && (a = !1),
          i === !0 && (i = this.defaultAnnotation_),
          i === !1)
        )
          return this.defineProperty_(r, o, a);
        var l = i.extend_(this, r, o, a);
        return l && gg(this, i, r), l;
      }),
      (t.defineProperty_ = function (r, o, i) {
        i === void 0 && (i = !1), this.keysAtom_;
        try {
          xn();
          var a = this.delete_(r);
          if (!a) return a;
          if (gn(this)) {
            var l = yn(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: Nr,
              newValue: o.value,
            });
            if (!l) return null;
            var s = l.newValue;
            o.value !== s && (o = Co({}, o, { value: s }));
          }
          if (i) {
            if (!Reflect.defineProperty(this.target_, r, o)) return !1;
          } else er(this.target_, r, o);
          this.notifyPropertyAddition_(r, o.value);
        } finally {
          _n();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (r, o, i, a) {
        a === void 0 && (a = !1), this.keysAtom_;
        try {
          xn();
          var l = this.delete_(r);
          if (!l) return l;
          if (gn(this)) {
            var s = yn(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: Nr,
              newValue: o,
            });
            if (!s) return null;
            o = s.newValue;
          }
          var u = vg(r),
            c = {
              configurable: W.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (a) {
            if (!Reflect.defineProperty(this.target_, r, c)) return !1;
          } else er(this.target_, r, c);
          var d = new ho(o, i, "ObservableObject.key", !1);
          this.values_.set(r, d), this.notifyPropertyAddition_(r, d.value_);
        } finally {
          _n();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (r, o, i) {
        i === void 0 && (i = !1), this.keysAtom_;
        try {
          xn();
          var a = this.delete_(r);
          if (!a) return a;
          if (gn(this)) {
            var l = yn(this, {
              object: this.proxy_ || this.target_,
              name: r,
              type: Nr,
              newValue: void 0,
            });
            if (!l) return null;
          }
          o.name || (o.name = "ObservableObject.key"),
            (o.context = this.proxy_ || this.target_);
          var s = vg(r),
            u = {
              configurable: W.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: s.get,
              set: s.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, r, u)) return !1;
          } else er(this.target_, r, u);
          this.values_.set(r, new $i(o)),
            this.notifyPropertyAddition_(r, void 0);
        } finally {
          _n();
        }
        return !0;
      }),
      (t.delete_ = function (r, o) {
        if ((o === void 0 && (o = !1), this.keysAtom_, !dr(this.target_, r)))
          return !0;
        if (gn(this)) {
          var i = yn(this, {
            object: this.proxy_ || this.target_,
            name: r,
            type: mg,
          });
          if (!i) return null;
        }
        try {
          var a, l;
          xn();
          var s = Fn(this),
            u = !1,
            c = this.values_.get(r),
            d = void 0;
          if (!c && (s || u)) {
            var f;
            d = (f = su(this.target_, r)) == null ? void 0 : f.value;
          }
          if (o) {
            if (!Reflect.deleteProperty(this.target_, r)) return !1;
          } else delete this.target_[r];
          if (
            (c &&
              (this.values_.delete(r),
              c instanceof ho && (d = c.value_),
              ax(c)),
            this.keysAtom_.reportChanged(),
            (a = this.pendingKeys_) == null ||
              (l = a.get(r)) == null ||
              l.set(r in this.target_),
            s || u)
          ) {
            var x = {
              type: mg,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: d,
              name: r,
            };
            s && Dn(this, x);
          }
        } finally {
          _n();
        }
        return !0;
      }),
      (t.observe_ = function (r, o) {
        return $l(this, r);
      }),
      (t.intercept_ = function (r) {
        return Tl(this, r);
      }),
      (t.notifyPropertyAddition_ = function (r, o) {
        var i,
          a,
          l = Fn(this),
          s = !1;
        if (l || s) {
          var u =
            l || s
              ? {
                  type: Nr,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: r,
                  newValue: o,
                }
              : null;
          l && Dn(this, u);
        }
        (i = this.pendingKeys_) == null || (a = i.get(r)) == null || a.set(!0),
          this.keysAtom_.reportChanged();
      }),
      (t.ownKeys_ = function () {
        return this.keysAtom_.reportObserved(), Ti(this.target_);
      }),
      (t.keys_ = function () {
        return this.keysAtom_.reportObserved(), Object.keys(this.target_);
      }),
      e
    );
  })();
function Ao(e, t) {
  var n;
  if (dr(e, te)) return e;
  var r = (n = t == null ? void 0 : t.name) != null ? n : "ObservableObject",
    o = new Ex(e, new Map(), String(r), DA(t));
  return Cl(e, te, o), e;
}
var NI = To("ObservableObjectAdministration", Ex);
function vg(e) {
  return (
    hg[e] ||
    (hg[e] = {
      get: function () {
        return this[te].getObservablePropValue_(e);
      },
      set: function (n) {
        return this[te].setObservablePropValue_(e, n);
      },
    })
  );
}
function ll(e) {
  return Cc(e) ? NI(e[te]) : !1;
}
function gg(e, t, n) {
  var r;
  (r = e.target_[Yn]) == null || delete r[n];
}
var LI = Rx(0),
  jI = (function () {
    var e = !1,
      t = {};
    return (
      Object.defineProperty(t, "0", {
        set: function () {
          e = !0;
        },
      }),
      (Object.create(t)[0] = 1),
      e === !1
    );
  })(),
  Pd = 0,
  Cx = function () {};
function FI(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
    ? (e.prototype.__proto__ = t)
    : (e.prototype = t);
}
FI(Cx, Array.prototype);
var Ah = (function (e, t, n) {
  Bb(r, e);
  function r(i, a, l, s) {
    var u;
    return (
      l === void 0 && (l = "ObservableArray"),
      s === void 0 && (s = !1),
      (u = e.call(this) || this),
      Jr(function () {
        var c = new Mh(l, a, s, !0);
        (c.proxy_ = Cd(u)),
          Fb(Cd(u), te, c),
          i && i.length && u.spliceWithArray(0, 0, i),
          jI && Object.defineProperty(Cd(u), "0", LI);
      }),
      u
    );
  }
  var o = r.prototype;
  return (
    (o.concat = function () {
      this[te].atom_.reportObserved();
      for (var a = arguments.length, l = new Array(a), s = 0; s < a; s++)
        l[s] = arguments[s];
      return Array.prototype.concat.apply(
        this.slice(),
        l.map(function (u) {
          return Ac(u) ? u.slice() : u;
        })
      );
    }),
    (o[n] = function () {
      var i = this,
        a = 0;
      return sl({
        next: function () {
          return a < i.length
            ? { value: i[a++], done: !1 }
            : { done: !0, value: void 0 };
        },
      });
    }),
    Ph(r, [
      {
        key: "length",
        get: function () {
          return this[te].getArrayLength_();
        },
        set: function (a) {
          this[te].setArrayLength_(a);
        },
      },
      {
        key: t,
        get: function () {
          return "Array";
        },
      },
    ]),
    r
  );
})(Cx, Symbol.toStringTag, Symbol.iterator);
Object.entries(hu).forEach(function (e) {
  var t = e[0],
    n = e[1];
  t !== "concat" && Cl(Ah.prototype, t, n);
});
function Rx(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[te].get_(e);
    },
    set: function (n) {
      this[te].set_(e, n);
    },
  };
}
function DI(e) {
  er(Ah.prototype, "" + e, Rx(e));
}
function kx(e) {
  if (e > Pd) {
    for (var t = Pd; t < e + 100; t++) DI(t);
    Pd = e;
  }
}
kx(1e3);
function zI(e, t, n) {
  return new Ah(e, t, n);
}
function Ai(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Ac(e)) return t !== void 0 && be(23), e[te].atom_;
    if (Hi(e)) return e.atom_;
    if (Mo(e)) {
      if (t === void 0) return e.keysAtom_;
      var n = e.data_.get(t) || e.hasMap_.get(t);
      return n || be(25, t, ep(e)), n;
    }
    if (ll(e)) {
      if (!t) return be(26);
      var r = e[te].values_.get(t);
      return r || be(27, t, ep(e)), r;
    }
    if (Oh(e) || $c(e) || pu(e)) return e;
  } else if (Un(e) && pu(e[te])) return e[te];
  be(28);
}
function Px(e, t) {
  if ((e || be(29), t !== void 0)) return Px(Ai(e, t));
  if (Oh(e) || $c(e) || pu(e) || Mo(e) || Hi(e)) return e;
  if (e[te]) return e[te];
  be(24, e);
}
function ep(e, t) {
  var n;
  if (t !== void 0) n = Ai(e, t);
  else {
    if (Mc(e)) return e.name;
    ll(e) || Mo(e) || Hi(e) ? (n = Px(e)) : (n = Ai(e));
  }
  return n.name_;
}
function Jr(e) {
  var t = $o(),
    n = Oc(!0);
  xn();
  try {
    return e();
  } finally {
    _n(), Tc(n), fr(t);
  }
}
var yg = Ec.toString;
function Ih(e, t, n) {
  return n === void 0 && (n = -1), tp(e, t, n);
}
function tp(e, t, n, r, o) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var i = typeof e;
  if (i !== "function" && i !== "object" && typeof t != "object") return !1;
  var a = yg.call(e);
  if (a !== yg.call(t)) return !1;
  switch (a) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return (
        typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
      );
    case "[object Map]":
    case "[object Set]":
      n >= 0 && n++;
      break;
  }
  (e = bg(e)), (t = bg(t));
  var l = a === "[object Array]";
  if (!l) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var s = e.constructor,
      u = t.constructor;
    if (
      s !== u &&
      !(Un(s) && s instanceof s && Un(u) && u instanceof u) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (n === 0) return !1;
  n < 0 && (n = -1), (r = r || []), (o = o || []);
  for (var c = r.length; c--; ) if (r[c] === e) return o[c] === t;
  if ((r.push(e), o.push(t), l)) {
    if (((c = e.length), c !== t.length)) return !1;
    for (; c--; ) if (!tp(e[c], t[c], n - 1, r, o)) return !1;
  } else {
    var d = Object.keys(e),
      f;
    if (((c = d.length), Object.keys(t).length !== c)) return !1;
    for (; c--; )
      if (((f = d[c]), !(dr(t, f) && tp(e[f], t[f], n - 1, r, o)))) return !1;
  }
  return r.pop(), o.pop(), !0;
}
function bg(e) {
  return Ac(e)
    ? e.slice()
    : Wi(e) || Mo(e) || Rl(e) || Hi(e)
    ? Array.from(e.entries())
    : e;
}
function sl(e) {
  return (e[Symbol.iterator] = BI), e;
}
function BI() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = kh();
  typeof t[e] > "u" &&
    be("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: oI,
    extras: { getDebugName: ep },
    $mobx: te,
  });
if (!v.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!RI)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available"
  );
function UI(e) {
  e();
}
function WI(e) {
  e || (e = UI), yI({ reactionScheduler: e });
}
function VI(e) {
  return bI(e);
}
var HI = 1e4,
  KI = 1e4,
  GI = (function () {
    function e(t) {
      var n = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (r) {
            r === void 0 && (r = HI),
              clearTimeout(n.sweepTimeout),
              (n.sweepTimeout = void 0);
            var o = Date.now();
            n.registrations.forEach(function (i, a) {
              o - i.registeredAt >= r &&
                (n.finalize(i.value), n.registrations.delete(a));
            }),
              n.registrations.size > 0 && n.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            n.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, n, r) {
          this.registrations.set(r, { value: n, registeredAt: Date.now() }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(e.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          this.registrations.delete(t);
        },
      }),
      Object.defineProperty(e.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, KI));
        },
      }),
      e
    );
  })(),
  qI = typeof FinalizationRegistry < "u" ? FinalizationRegistry : GI,
  ul = new qI(function (e) {
    var t;
    (t = e.reaction) === null || t === void 0 || t.dispose(),
      (e.reaction = null);
  }),
  Ox = { exports: {} },
  Tx = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ii = v;
function QI(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var YI = typeof Object.is == "function" ? Object.is : QI,
  XI = Ii.useState,
  JI = Ii.useEffect,
  ZI = Ii.useLayoutEffect,
  eN = Ii.useDebugValue;
function tN(e, t) {
  var n = t(),
    r = XI({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    ZI(
      function () {
        (o.value = n), (o.getSnapshot = t), Od(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    JI(
      function () {
        return (
          Od(o) && i({ inst: o }),
          e(function () {
            Od(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    eN(n),
    n
  );
}
function Od(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !YI(e, n);
  } catch {
    return !0;
  }
}
function nN(e, t) {
  return t();
}
var rN =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? nN
    : tN;
Tx.useSyncExternalStore =
  Ii.useSyncExternalStore !== void 0 ? Ii.useSyncExternalStore : rN;
Ox.exports = Tx;
var oN = Ox.exports;
function xg(e) {
  e.reaction = new ol("observer".concat(e.name), function () {
    var t;
    (e.stateVersion = Symbol()),
      (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function iN(e, t) {
  t === void 0 && (t = "observed");
  var n = Wt.useRef(null);
  if (!n.current) {
    var r = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (l) {
        return (
          ul.unregister(r),
          (r.onStoreChange = l),
          r.reaction || (xg(r), (r.stateVersion = Symbol())),
          function () {
            var s;
            (r.onStoreChange = null),
              (s = r.reaction) === null || s === void 0 || s.dispose(),
              (r.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return r.stateVersion;
      },
    };
    n.current = r;
  }
  var o = n.current;
  o.reaction || (xg(o), ul.register(n, o, o)),
    Wt.useDebugValue(o.reaction, VI),
    oN.useSyncExternalStore(o.subscribe, o.getSnapshot, o.getSnapshot);
  var i, a;
  if (
    (o.reaction.track(function () {
      try {
        i = e();
      } catch (l) {
        a = l;
      }
    }),
    a)
  )
    throw a;
  return i;
}
var Td,
  $d,
  $x = typeof Symbol == "function" && Symbol.for,
  aN =
    ($d =
      (Td = Object.getOwnPropertyDescriptor(function () {}, "name")) === null ||
      Td === void 0
        ? void 0
        : Td.configurable) !== null && $d !== void 0
      ? $d
      : !1,
  _g = $x
    ? Symbol.for("react.forward_ref")
    : typeof v.forwardRef == "function" &&
      v.forwardRef(function (e) {
        return null;
      }).$$typeof,
  Sg = $x
    ? Symbol.for("react.memo")
    : typeof v.memo == "function" &&
      v.memo(function (e) {
        return null;
      }).$$typeof;
function lN(e, t) {
  var n;
  if (Sg && e.$$typeof === Sg)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you."
    );
  var r =
      (n = t == null ? void 0 : t.forwardRef) !== null && n !== void 0 ? n : !1,
    o = e,
    i = e.displayName || e.name;
  if (
    _g &&
    e.$$typeof === _g &&
    ((r = !0), (o = e.render), typeof o != "function")
  )
    throw new Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function"
    );
  var a = function (l, s) {
    return iN(function () {
      return o(l, s);
    }, i);
  };
  return (
    (a.displayName = e.displayName),
    aN &&
      Object.defineProperty(a, "name", {
        value: e.name,
        writable: !0,
        configurable: !0,
      }),
    e.contextTypes && (a.contextTypes = e.contextTypes),
    r && (a = v.forwardRef(a)),
    (a = v.memo(a)),
    uN(e, a),
    a
  );
}
var sN = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function uN(e, t) {
  Object.keys(e).forEach(function (n) {
    sN[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  });
}
var Md;
WI(ml.unstable_batchedUpdates);
Md = ul.finalizeAllImmediately;
function cN(e, t) {
  if (wg(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (var o = 0; o < n.length; o++)
    if (!Object.hasOwnProperty.call(t, n[o]) || !wg(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
function wg(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Eg = Symbol("patchMixins"),
  Mx = Symbol("patchedDefinition");
function dN(e, t) {
  var n = (e[Eg] = e[Eg] || {}),
    r = (n[t] = n[t] || {});
  return (r.locks = r.locks || 0), (r.methods = r.methods || []), r;
}
function Cg(e, t) {
  for (
    var n = this, r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2;
    i < r;
    i++
  )
    o[i - 2] = arguments[i];
  t.locks++;
  try {
    var a;
    return e != null && (a = e.apply(this, o)), a;
  } finally {
    t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (l) {
          l.apply(n, o);
        });
  }
}
function Rg(e, t) {
  var n = function () {
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    Cg.call.apply(Cg, [this, e, t].concat(i));
  };
  return n;
}
function fN(e, t, n) {
  var r = dN(e, t);
  r.methods.indexOf(n) < 0 && r.methods.push(n);
  var o = Object.getOwnPropertyDescriptor(e, t);
  if (!(o && o[Mx])) {
    var i = e[t],
      a = Ax(e, t, o ? o.enumerable : void 0, r, i);
    Object.defineProperty(e, t, a);
  }
}
function Ax(e, t, n, r, o) {
  var i,
    a = Rg(o, r);
  return (
    (i = {}),
    (i[Mx] = !0),
    (i.get = function () {
      return a;
    }),
    (i.set = function (s) {
      if (this === e) a = Rg(s, r);
      else {
        var u = Ax(this, t, n, r, s);
        Object.defineProperty(this, t, u);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = n),
    i
  );
}
var kg = Symbol("ObserverAdministration"),
  Pg = Symbol("isMobXReactObserver");
function np(e) {
  var t;
  return (t = e[kg]) != null
    ? t
    : (e[kg] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: rp(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function pN(e) {
  var t = e.prototype;
  if (e[Pg]) {
    var n = rp(e);
    throw new Error(
      "The provided component class (" +
        n +
        ") has already been declared as an observer component."
    );
  } else e[Pg] = !0;
  if (t.componentWillReact)
    throw new Error(
      "The componentWillReact life-cycle event is no longer supported"
    );
  if (e.__proto__ !== v.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Og;
    else if (t.shouldComponentUpdate !== Og)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components."
      );
  }
  var r = t.render;
  if (typeof r != "function") {
    var o = rp(e);
    throw new Error(
      "[mobx-react] class component (" +
        o +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported."
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: hN.call(this, r),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var a = this,
        l = np(this);
      return (
        (l.mounted = !0),
        ul.unregister(this),
        (l.forceUpdate = function () {
          return a.forceUpdate();
        }),
        (!l.reaction || l.reactionInvalidatedBeforeMount) && l.forceUpdate(),
        i == null ? void 0 : i.apply(this, arguments)
      );
    }),
    fN(t, "componentWillUnmount", function () {
      var a,
        l = np(this);
      (a = l.reaction) == null || a.dispose(),
        (l.reaction = null),
        (l.forceUpdate = null),
        (l.mounted = !1),
        (l.reactionInvalidatedBeforeMount = !1);
    }),
    e
  );
}
function rp(e) {
  return e.displayName || e.name || "<component>";
}
function hN(e) {
  var t = e.bind(this),
    n = np(this);
  function r() {
    n.reaction ||
      ((n.reaction = mN(n)), n.mounted || ul.register(this, n, this));
    var o = void 0,
      i = void 0;
    if (
      (n.reaction.track(function () {
        try {
          i = QA(!1, t);
        } catch (a) {
          o = a;
        }
      }),
      o)
    )
      throw o;
    return i;
  }
  return r;
}
function mN(e) {
  return new ol(e.name + ".render()", function () {
    if (!e.mounted) {
      e.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      e.forceUpdate == null || e.forceUpdate();
    } catch {
      var t;
      (t = e.reaction) == null || t.dispose(), (e.reaction = null);
    }
  });
}
function Og(e, t) {
  return this.state !== t ? !0 : !cN(this.props, e);
}
function Ix(e, t) {
  if (t && t.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"
      ),
    Object.prototype.isPrototypeOf.call(v.Component, e) ||
    Object.prototype.isPrototypeOf.call(v.PureComponent, e)
      ? pN(e)
      : lN(e)
  );
}
Wt.version.split(".")[0];
if (!v.Component) throw new Error("mobx-react requires React to be available");
if (!ht) throw new Error("mobx-react requires mobx to be available");
const Tg = localStorage.getItem("questions"),
  $g = Tg ? JSON.parse(Tg) : [];
class vN {
  constructor() {
    jh(
      this,
      "questions",
      $g || [
        {
          id: 1,
          type: 1,
          question: "Как расшифровывается HTML?",
          answers: [
            "Язык веб-программирования",
            "Язык разметки гипертекста",
            "Язык разработки интерфейса",
            "Все вышеперечисленное",
          ],
        },
        {
          id: 2,
          type: 3,
          question:
            "Напишите название языка программирования для создания стилей",
          answers: ["CSS"],
        },
        {
          id: 3,
          type: 2,
          question:
            "Какие языки программирования используются для разработки фронтенда?",
          answers: ["HTML", "Java", "CSS", "JavaScript"],
        },
        {
          id: 4,
          type: 1,
          question: "Для чего используется JavaScript?",
          answers: [
            "Для разработки стилей",
            "Для создания элементов на странице",
            "Для создания логики и интерактивности веб-приложения",
            "Все вышеперечисленное",
          ],
        },
        {
          id: 5,
          type: 2,
          question: "Какие элементы являются блочными?",
          answers: ["div", "h1", "a", "p"],
        },
      ]
    );
    kI(this);
  }
  saveQuestionsToLocalStorage() {
    localStorage.setItem("questions", JSON.stringify(this.questions));
  }
  addQuestion(t) {
    this.questions.push(t), this.saveQuestionsToLocalStorage();
  }
}
const op = new vN(),
  gN = ({ question: e }) => {
    const [t, n] = v.useState("");
    return (
      v.useEffect(() => {
        n("");
      }, [e]),
      k.jsxs(In, {
        sx: { display: "flex", flexDirection: "column", gap: "5px" },
        children: [
          k.jsx(jn, {
            variant: "h6",
            sx: { fontWeight: "bold" },
            children: e.question,
          }),
          e.type === 1
            ? k.jsx(pb, {
                "aria-labelledby": "demo-radio-buttons-group-label",
                defaultValue: "1",
                name: "radio-buttons-group",
                children: e.answers.map((r) =>
                  k.jsx(Oa, {
                    value: r,
                    control: k.jsx(ws, {}),
                    label: r,
                    sx: { marginBottom: -1 },
                  })
                ),
              })
            : e.type === 2
            ? k.jsx(In, {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                },
                children: k.jsx(tb, {
                  children: e.answers.map((r) =>
                    k.jsx(Oa, {
                      control: k.jsx(H2, {}),
                      label: r,
                      sx: { marginBottom: -1 },
                    })
                  ),
                }),
              })
            : k.jsx(zf, {
                id: "standard-basic",
                label: "Введите ответ",
                value: t,
                onChange: (r) => n(r.target.value),
                variant: "standard",
              }),
        ],
      })
    );
  },
  yN = Ix(() => {
    const [e, t] = v.useState(Number(sessionStorage.getItem("step")) || 0),
      n = op.questions,
      r = sessionStorage.getItem("time"),
      [o, i] = v.useState(Number(r == null ? void 0 : r.split(",")[0]) || 15),
      [a, l] = v.useState(Number(r == null ? void 0 : r.split(",")[1]) || 0),
      s = wc();
    v.useEffect(() => {
      const d = setInterval(() => {
        a === 0 ? (i((f) => f - 1), l(59)) : l((f) => f - 1);
      }, 1e3);
      return (
        sessionStorage.removeItem("time"),
        sessionStorage.setItem("time", `${o},${a}`),
        () => clearInterval(d)
      );
    }, [a]),
      v.useEffect(() => {
        sessionStorage.setItem("step", e.toString());
      }, [e]),
      a === 0 && o === 0 && s("/Results");
    function u() {
      t((d) => d + 1), console.log(e, n.length);
    }
    function c() {
      s("/Results");
    }
    return k.jsxs(In, {
      sx: {
        width: "85vw",
        height: "65vh",
        backgroundColor: "ghostwhite",
        borderRadius: "25px",
        margin: "15vh auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "35px 35px",
      },
      children: [
        k.jsxs(In, {
          sx: { display: "flex", gap: "20px", alignItems: "center" },
          children: [
            k.jsx(jn, {
              variant: "h4",
              sx: { fontWeight: "bold" },
              children: "Тестирование",
            }),
            k.jsxs(jn, {
              variant: "h6",
              sx: {
                padding: "3px 6px",
                border: "2px solid black",
                borderRadius: "8px",
              },
              children: [
                o.toString().padStart(2, "0"),
                ":",
                a.toString().padStart(2, "0"),
              ],
            }),
          ],
        }),
        k.jsx(GM, { currentStep: e, stepCount: n.length }),
        k.jsx(gN, { question: n[e] }),
        k.jsx(tl, {
          onClick: e + 1 === n.length ? c : u,
          variant: "contained",
          sx: { width: "300px", ":hover": { backgroundColor: "red" } },
          children: e + 1 === n.length ? "Закончить" : "Ответить",
        }),
      ],
    });
  }),
  bN = () => {
    const e = wc();
    function t() {
      e("/");
    }
    return k.jsxs(In, {
      sx: {
        width: "40vw",
        height: "30vh",
        margin: "25vh auto",
        backgroundColor: "ghostwhite",
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "35px",
      },
      children: [
        k.jsx(jn, {
          variant: "h3",
          sx: { fontWeight: "bold" },
          children: "Тест завершен",
        }),
        k.jsx(tl, {
          variant: "contained",
          color: "success",
          sx: { fontSize: "20px" },
          onClick: t,
          children: "Вернуться",
        }),
      ],
    });
  },
  xN = Ix(() => {
    const e = wc(),
      [t, n] = v.useState(1),
      [r, o] = v.useState(!1),
      [i, a] = v.useState(""),
      [l, s] = v.useState("");
    function u() {
      const c = {
        id: op.questions.length + 1,
        type: t,
        question: i,
        answers: l.split(","),
      };
      op.addQuestion(c),
        o(!0),
        setTimeout(() => {
          e("/");
        }, 2e3);
    }
    return k.jsx(In, {
      sx: {
        width: "50vw",
        height: "50vh",
        margin: "25vh auto",
        backgroundColor: "ghostwhite",
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        gap: "10px",
      },
      children: r
        ? k.jsx(jn, {
            variant: "h3",
            sx: {
              fontWeight: "bold",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            children: "Вопрос успешно добавлен!",
          })
        : k.jsxs(k.Fragment, {
            children: [
              k.jsx(jn, { variant: "h5", children: "Выберите тип вопроса" }),
              k.jsxs(pb, {
                "aria-labelledby": "demo-radio-buttons-group-label",
                defaultValue: "1",
                name: "radio-buttons-group",
                children: [
                  k.jsx(Oa, {
                    value: "1",
                    control: k.jsx(ws, {}),
                    label: "Выбор одного варианта",
                    sx: { marginBottom: -1 },
                    onClick: () => n(1),
                  }),
                  k.jsx(Oa, {
                    value: "2",
                    control: k.jsx(ws, {}),
                    label: "Выбор нескольких вариантов",
                    sx: { marginBottom: -1 },
                    onClick: () => n(2),
                  }),
                  k.jsx(Oa, {
                    value: "3",
                    control: k.jsx(ws, {}),
                    label: "Развернутый ответ",
                    sx: { marginBottom: -1 },
                    onClick: () => n(3),
                  }),
                ],
              }),
              k.jsx(zf, {
                variant: "standard",
                label: "Введите вопрос",
                value: i,
                onChange: (c) => a(c.target.value),
              }),
              k.jsx(zf, {
                variant: "standard",
                label:
                  t === 3
                    ? "Введите ответ"
                    : "Введите ответы через запятую без пробелов (css,html,js)",
                value: l,
                onChange: (c) => s(c.target.value),
              }),
              k.jsx(tl, {
                variant: "contained",
                onClick: u,
                children: "Добавить",
              }),
            ],
          }),
    });
  });
function _N() {
  const e = NM([
    { path: "/", element: k.jsx(KM, {}) },
    { path: "/Test", element: k.jsx(yN, {}) },
    { path: "/Results", element: k.jsx(bN, {}) },
    { path: "/AddQuestion", element: k.jsx(xN, {}) },
  ]);
  return k.jsx(VM, { router: e });
}
Ad.createRoot(document.getElementById("root")).render(
  k.jsx(Wt.StrictMode, { children: k.jsx(_N, {}) })
);
