;var __WAServiceStartTime__ = Date.now();
(function(global) {
    var needCoreJS = !0;
    try {
        var s = new Proxy({},{});
        needCoreJS = !1
    } catch (e) {}
    needCoreJS && !function(e, t, n) {
        "use strict";
        !function(e) {
            function t(r) {
                if (n[r])
                    return n[r].exports;
                var o = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return e[r].call(o.exports, o, o.exports, t),
                o.loaded = !0,
                o.exports
            }
            var n = {};
            return t.m = e,
            t.c = n,
            t.p = "",
            t(0)
        }([function(e, t, n) {
            n(1),
            n(50),
            n(51),
            n(52),
            n(54),
            n(55),
            n(58),
            n(59),
            n(60),
            n(61),
            n(62),
            n(63),
            n(64),
            n(65),
            n(66),
            n(68),
            n(70),
            n(72),
            n(74),
            n(77),
            n(78),
            n(79),
            n(83),
            n(86),
            n(87),
            n(88),
            n(89),
            n(91),
            n(92),
            n(93),
            n(94),
            n(95),
            n(97),
            n(99),
            n(100),
            n(101),
            n(103),
            n(104),
            n(105),
            n(107),
            n(108),
            n(109),
            n(111),
            n(112),
            n(113),
            n(114),
            n(115),
            n(116),
            n(117),
            n(118),
            n(119),
            n(120),
            n(121),
            n(122),
            n(123),
            n(124),
            n(126),
            n(130),
            n(131),
            n(132),
            n(133),
            n(137),
            n(139),
            n(140),
            n(141),
            n(142),
            n(143),
            n(144),
            n(145),
            n(146),
            n(147),
            n(148),
            n(149),
            n(150),
            n(151),
            n(152),
            n(158),
            n(159),
            n(161),
            n(162),
            n(163),
            n(167),
            n(168),
            n(169),
            n(170),
            n(171),
            n(173),
            n(174),
            n(175),
            n(176),
            n(179),
            n(181),
            n(182),
            n(183),
            n(185),
            n(187),
            n(189),
            n(190),
            n(191),
            n(193),
            n(194),
            n(195),
            n(196),
            n(203),
            n(206),
            n(207),
            n(209),
            n(210),
            n(211),
            n(212),
            n(213),
            n(214),
            n(215),
            n(216),
            n(217),
            n(218),
            n(219),
            n(220),
            n(222),
            n(223),
            n(224),
            n(225),
            n(226),
            n(227),
            n(228),
            n(229),
            n(231),
            n(234),
            n(235),
            n(237),
            n(238),
            n(239),
            n(240),
            n(241),
            n(242),
            n(243),
            n(244),
            e.exports = n(245)
        }
        , function(e, t, r) {
            var o = r(2)
              , i = r(3)
              , a = r(4)
              , u = r(6)
              , c = r(16)
              , s = r(20).KEY
              , f = r(5)
              , l = r(21)
              , p = r(22)
              , d = r(17)
              , h = r(23)
              , v = r(24)
              , g = r(25)
              , y = r(27)
              , b = r(40)
              , m = r(43)
              , w = r(10)
              , _ = r(30)
              , S = r(14)
              , k = r(15)
              , x = r(44)
              , M = r(47)
              , A = r(49)
              , T = r(9)
              , P = r(28)
              , C = A.f
              , E = T.f
              , O = M.f
              , I = o.Symbol
              , j = o.JSON
              , D = j && j.stringify
              , R = "prototype"
              , B = h("_hidden")
              , F = h("toPrimitive")
              , N = {}.propertyIsEnumerable
              , L = l("symbol-registry")
              , U = l("symbols")
              , W = l("op-symbols")
              , V = Object[R]
              , J = "function" == typeof I
              , K = o.QObject
              , G = !K || !K[R] || !K[R].findChild
              , q = a && f(function() {
                return 7 != x(E({}, "a", {
                    get: function() {
                        return E(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(e, t, n) {
                var r = C(V, t);
                r && delete V[t],
                E(e, t, n),
                r && e !== V && E(V, t, r)
            }
            : E
              , H = function(e) {
                var t = U[e] = x(I[R]);
                return t._k = e,
                t
            }
              , $ = J && "symbol" == typeof I.iterator ? function(e) {
                return "symbol" == typeof e
            }
            : function(e) {
                return e instanceof I
            }
              , X = function(e, t, n) {
                return e === V && X(W, t, n),
                w(e),
                t = S(t, !0),
                w(n),
                i(U, t) ? (n.enumerable ? (i(e, B) && e[B][t] && (e[B][t] = !1),
                n = x(n, {
                    enumerable: k(0, !1)
                })) : (i(e, B) || E(e, B, k(1, {})),
                e[B][t] = !0),
                q(e, t, n)) : E(e, t, n)
            }
              , Y = function(e, t) {
                w(e);
                for (var n, r = b(t = _(t)), o = 0, i = r.length; i > o; )
                    X(e, n = r[o++], t[n]);
                return e
            }
              , z = function(e, t) {
                return t === n ? x(e) : Y(x(e), t)
            }
              , Z = function(e) {
                var t = N.call(this, e = S(e, !0));
                return !(this === V && i(U, e) && !i(W, e)) && (!(t || !i(this, e) || !i(U, e) || i(this, B) && this[B][e]) || t)
            }
              , Q = function(e, t) {
                if (e = _(e),
                t = S(t, !0),
                e !== V || !i(U, t) || i(W, t)) {
                    var n = C(e, t);
                    return !n || !i(U, t) || i(e, B) && e[B][t] || (n.enumerable = !0),
                    n
                }
            }
              , ee = function(e) {
                for (var t, n = O(_(e)), r = [], o = 0; n.length > o; )
                    i(U, t = n[o++]) || t == B || t == s || r.push(t);
                return r
            }
              , te = function(e) {
                for (var t, n = e === V, r = O(n ? W : _(e)), o = [], a = 0; r.length > a; )
                    !i(U, t = r[a++]) || n && !i(V, t) || o.push(U[t]);
                return o
            }
            ;
            J || (I = function() {
                if (this instanceof I)
                    throw TypeError("Symbol is not a constructor!");
                var e = d(arguments.length > 0 ? arguments[0] : n)
                  , t = function(n) {
                    this === V && t.call(W, n),
                    i(this, B) && i(this[B], e) && (this[B][e] = !1),
                    q(this, e, k(1, n))
                }
                ;
                return a && G && q(V, e, {
                    configurable: !0,
                    set: t
                }),
                H(e)
            }
            ,
            c(I[R], "toString", function() {
                return this._k
            }),
            A.f = Q,
            T.f = X,
            r(48).f = M.f = ee,
            r(42).f = Z,
            r(41).f = te,
            a && !r(26) && c(V, "propertyIsEnumerable", Z, !0),
            v.f = function(e) {
                return H(h(e))
            }
            ),
            u(u.G + u.W + u.F * !J, {
                Symbol: I
            });
            for (var ne = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; ne.length > re; )
                h(ne[re++]);
            for (var ne = P(h.store), re = 0; ne.length > re; )
                g(ne[re++]);
            u(u.S + u.F * !J, "Symbol", {
                for: function(e) {
                    return i(L, e += "") ? L[e] : L[e] = I(e)
                },
                keyFor: function(e) {
                    if ($(e))
                        return y(L, e);
                    throw TypeError(e + " is not a symbol!")
                },
                useSetter: function() {
                    G = !0
                },
                useSimple: function() {
                    G = !1
                }
            }),
            u(u.S + u.F * !J, "Object", {
                create: z,
                defineProperty: X,
                defineProperties: Y,
                getOwnPropertyDescriptor: Q,
                getOwnPropertyNames: ee,
                getOwnPropertySymbols: te
            }),
            j && u(u.S + u.F * (!J || f(function() {
                var e = I();
                return "[null]" != D([e]) || "{}" != D({
                    a: e
                }) || "{}" != D(Object(e))
            })), "JSON", {
                stringify: function(e) {
                    if (e !== n && !$(e)) {
                        for (var t, r, o = [e], i = 1; arguments.length > i; )
                            o.push(arguments[i++]);
                        return t = o[1],
                        "function" == typeof t && (r = t),
                        !r && m(t) || (t = function(e, t) {
                            if (r && (t = r.call(this, e, t)),
                            !$(t))
                                return t
                        }
                        ),
                        o[1] = t,
                        D.apply(j, o)
                    }
                }
            }),
            I[R][F] || r(8)(I[R], F, I[R].valueOf),
            p(I, "Symbol"),
            p(Math, "Math", !0),
            p(o.JSON, "JSON", !0)
        }
        , function(e, n) {
            var r = e.exports = Function("return this")();
            "number" == typeof t && (t = r)
        }
        , function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        }
        , function(e, t, n) {
            e.exports = !n(5)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }
        , function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        }
        , function(e, t, r) {
            var o = r(2)
              , i = r(7)
              , a = r(8)
              , u = r(16)
              , c = r(18)
              , s = "prototype"
              , f = function(e, t, r) {
                var l, p, d, h, v = e & f.F, g = e & f.G, y = e & f.S, b = e & f.P, m = e & f.B, w = g ? o : y ? o[t] || (o[t] = {}) : (o[t] || {})[s], _ = g ? i : i[t] || (i[t] = {}), S = _[s] || (_[s] = {});
                g && (r = t);
                for (l in r)
                    p = !v && w && w[l] !== n,
                    d = (p ? w : r)[l],
                    h = m && p ? c(d, o) : b && "function" == typeof d ? c(Function.call, d) : d,
                    w && u(w, l, d, e & f.U),
                    _[l] != d && a(_, l, h),
                    b && S[l] != d && (S[l] = d)
            }
            ;
            o.core = i,
            f.F = 1,
            f.G = 2,
            f.S = 4,
            f.P = 8,
            f.B = 16,
            f.W = 32,
            f.U = 64,
            f.R = 128,
            e.exports = f
        }
        , function(t, n) {
            var r = t.exports = {
                version: "2.4.0"
            };
            "number" == typeof e && (e = r)
        }
        , function(e, t, n) {
            var r = n(9)
              , o = n(15);
            e.exports = n(4) ? function(e, t, n) {
                return r.f(e, t, o(1, n))
            }
            : function(e, t, n) {
                return e[t] = n,
                e
            }
        }
        , function(e, t, n) {
            var r = n(10)
              , o = n(12)
              , i = n(14)
              , a = Object.defineProperty;
            t.f = n(4) ? Object.defineProperty : function(e, t, n) {
                if (r(e),
                t = i(t, !0),
                r(n),
                o)
                    try {
                        return a(e, t, n)
                    } catch (e) {}
                if ("get"in n || "set"in n)
                    throw TypeError("Accessors not supported!");
                return "value"in n && (e[t] = n.value),
                e
            }
        }
        , function(e, t, n) {
            var r = n(11);
            e.exports = function(e) {
                if (!r(e))
                    throw TypeError(e + " is not an object!");
                return e
            }
        }
        , function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        }
        , function(e, t, n) {
            e.exports = !n(4) && !n(5)(function() {
                return 7 != Object.defineProperty(n(13)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }
        , function(e, t, n) {
            var r = n(11)
              , o = n(2).document
              , i = r(o) && r(o.createElement);
            e.exports = function(e) {
                return i ? o.createElement(e) : {}
            }
        }
        , function(e, t, n) {
            var r = n(11);
            e.exports = function(e, t) {
                if (!r(e))
                    return e;
                var n, o;
                if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
                    return o;
                if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e)))
                    return o;
                if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
                    return o;
                throw TypeError("Can't convert object to primitive value")
            }
        }
        , function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        }
        , function(e, t, n) {
            var r = n(2)
              , o = n(8)
              , i = n(3)
              , a = n(17)("src")
              , u = "toString"
              , c = Function[u]
              , s = ("" + c).split(u);
            n(7).inspectSource = function(e) {
                return c.call(e)
            }
            ,
            (e.exports = function(e, t, n, u) {
                var c = "function" == typeof n;
                c && (i(n, "name") || o(n, "name", t)),
                e[t] !== n && (c && (i(n, a) || o(n, a, e[t] ? "" + e[t] : s.join(String(t)))),
                e === r ? e[t] = n : u ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t],
                o(e, t, n)))
            }
            )(Function.prototype, u, function() {
                return "function" == typeof this && this[a] || c.call(this)
            })
        }
        , function(e, t) {
            var r = 0
              , o = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(e === n ? "" : e, ")_", (++r + o).toString(36))
            }
        }
        , function(e, t, r) {
            var o = r(19);
            e.exports = function(e, t, r) {
                if (o(e),
                t === n)
                    return e;
                switch (r) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    }
                    ;
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    }
                    ;
                case 3:
                    return function(n, r, o) {
                        return e.call(t, n, r, o)
                    }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        }
        , function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e)
                    throw TypeError(e + " is not a function!");
                return e
            }
        }
        , function(e, t, n) {
            var r = n(17)("meta")
              , o = n(11)
              , i = n(3)
              , a = n(9).f
              , u = 0
              , c = Object.isExtensible || function() {
                return !0
            }
              , s = !n(5)(function() {
                return c(Object.preventExtensions({}))
            })
              , f = function(e) {
                a(e, r, {
                    value: {
                        i: "O" + ++u,
                        w: {}
                    }
                })
            }
              , l = function(e, t) {
                if (!o(e))
                    return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, r)) {
                    if (!c(e))
                        return "F";
                    if (!t)
                        return "E";
                    f(e)
                }
                return e[r].i
            }
              , p = function(e, t) {
                if (!i(e, r)) {
                    if (!c(e))
                        return !0;
                    if (!t)
                        return !1;
                    f(e)
                }
                return e[r].w
            }
              , d = function(e) {
                return s && h.NEED && c(e) && !i(e, r) && f(e),
                e
            }
              , h = e.exports = {
                KEY: r,
                NEED: !1,
                fastKey: l,
                getWeak: p,
                onFreeze: d
            }
        }
        , function(e, t, n) {
            var r = n(2)
              , o = "__core-js_shared__"
              , i = r[o] || (r[o] = {});
            e.exports = function(e) {
                return i[e] || (i[e] = {})
            }
        }
        , function(e, t, n) {
            var r = n(9).f
              , o = n(3)
              , i = n(23)("toStringTag");
            e.exports = function(e, t, n) {
                e && !o(e = n ? e : e.prototype, i) && r(e, i, {
                    configurable: !0,
                    value: t
                })
            }
        }
        , function(e, t, n) {
            var r = n(21)("wks")
              , o = n(17)
              , i = n(2).Symbol
              , a = "function" == typeof i
              , u = e.exports = function(e) {
                return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
            }
            ;
            u.store = r
        }
        , function(e, t, n) {
            t.f = n(23)
        }
        , function(e, t, n) {
            var r = n(2)
              , o = n(7)
              , i = n(26)
              , a = n(24)
              , u = n(9).f;
            e.exports = function(e) {
                var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
                "_" == e.charAt(0) || e in t || u(t, e, {
                    value: a.f(e)
                })
            }
        }
        , function(e, t) {
            e.exports = !1
        }
        , function(e, t, n) {
            var r = n(28)
              , o = n(30);
            e.exports = function(e, t) {
                for (var n, i = o(e), a = r(i), u = a.length, c = 0; u > c; )
                    if (i[n = a[c++]] === t)
                        return n
            }
        }
        , function(e, t, n) {
            var r = n(29)
              , o = n(39);
            e.exports = Object.keys || function(e) {
                return r(e, o)
            }
        }
        , function(e, t, n) {
            var r = n(3)
              , o = n(30)
              , i = n(34)(!1)
              , a = n(38)("IE_PROTO");
            e.exports = function(e, t) {
                var n, u = o(e), c = 0, s = [];
                for (n in u)
                    n != a && r(u, n) && s.push(n);
                for (; t.length > c; )
                    r(u, n = t[c++]) && (~i(s, n) || s.push(n));
                return s
            }
        }
        , function(e, t, n) {
            var r = n(31)
              , o = n(33);
            e.exports = function(e) {
                return r(o(e))
            }
        }
        , function(e, t, n) {
            var r = n(32);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == r(e) ? e.split("") : Object(e)
            }
        }
        , function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        }
        , function(e, t) {
            e.exports = function(e) {
                if (e == n)
                    throw TypeError("Can't call method on  " + e);
                return e
            }
        }
        , function(e, t, n) {
            var r = n(30)
              , o = n(35)
              , i = n(37);
            e.exports = function(e) {
                return function(t, n, a) {
                    var u, c = r(t), s = o(c.length), f = i(a, s);
                    if (e && n != n) {
                        for (; s > f; )
                            if (u = c[f++],
                            u != u)
                                return !0
                    } else
                        for (; s > f; f++)
                            if ((e || f in c) && c[f] === n)
                                return e || f || 0;
                    return !e && -1
                }
            }
        }
        , function(e, t, n) {
            var r = n(36)
              , o = Math.min;
            e.exports = function(e) {
                return e > 0 ? o(r(e), 9007199254740991) : 0
            }
        }
        , function(e, t) {
            var n = Math.ceil
              , r = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
            }
        }
        , function(e, t, n) {
            var r = n(36)
              , o = Math.max
              , i = Math.min;
            e.exports = function(e, t) {
                return e = r(e),
                e < 0 ? o(e + t, 0) : i(e, t)
            }
        }
        , function(e, t, n) {
            var r = n(21)("keys")
              , o = n(17);
            e.exports = function(e) {
                return r[e] || (r[e] = o(e))
            }
        }
        , function(e, t) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }
        , function(e, t, n) {
            var r = n(28)
              , o = n(41)
              , i = n(42);
            e.exports = function(e) {
                var t = r(e)
                  , n = o.f;
                if (n)
                    for (var a, u = n(e), c = i.f, s = 0; u.length > s; )
                        c.call(e, a = u[s++]) && t.push(a);
                return t
            }
        }
        , function(e, t) {
            t.f = Object.getOwnPropertySymbols
        }
        , function(e, t) {
            t.f = {}.propertyIsEnumerable
        }
        , function(e, t, n) {
            var r = n(32);
            e.exports = Array.isArray || function(e) {
                return "Array" == r(e)
            }
        }
        , function(e, t, r) {
            var o = r(10)
              , i = r(45)
              , a = r(39)
              , u = r(38)("IE_PROTO")
              , c = function() {}
              , s = "prototype"
              , f = function() {
                var e, t = r(13)("iframe"), n = a.length, o = "<", i = ">";
                for (t.style.display = "none",
                r(46).appendChild(t),
                t.src = "javascript:",
                e = t.contentWindow.document,
                e.open(),
                e.write(o + "script" + i + "document.F=Object" + o + "/script" + i),
                e.close(),
                f = e.F; n--; )
                    delete f[s][a[n]];
                return f()
            }
            ;
            e.exports = Object.create || function(e, t) {
                var r;
                return null !== e ? (c[s] = o(e),
                r = new c,
                c[s] = null ,
                r[u] = e) : r = f(),
                t === n ? r : i(r, t)
            }
        }
        , function(e, t, n) {
            var r = n(9)
              , o = n(10)
              , i = n(28);
            e.exports = n(4) ? Object.defineProperties : function(e, t) {
                o(e);
                for (var n, a = i(t), u = a.length, c = 0; u > c; )
                    r.f(e, n = a[c++], t[n]);
                return e
            }
        }
        , function(e, t, n) {
            e.exports = n(2).document && document.documentElement
        }
        , function(e, t, n) {
            var r = n(30)
              , o = n(48).f
              , i = {}.toString
              , a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
              , u = function(e) {
                try {
                    return o(e)
                } catch (e) {
                    return a.slice()
                }
            }
            ;
            e.exports.f = function(e) {
                return a && "[object Window]" == i.call(e) ? u(e) : o(r(e))
            }
        }
        , function(e, t, n) {
            var r = n(29)
              , o = n(39).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return r(e, o)
            }
        }
        , function(e, t, n) {
            var r = n(42)
              , o = n(15)
              , i = n(30)
              , a = n(14)
              , u = n(3)
              , c = n(12)
              , s = Object.getOwnPropertyDescriptor;
            t.f = n(4) ? s : function(e, t) {
                if (e = i(e),
                t = a(t, !0),
                c)
                    try {
                        return s(e, t)
                    } catch (e) {}
                if (u(e, t))
                    return o(!r.f.call(e, t), e[t])
            }
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S + r.F * !n(4), "Object", {
                defineProperty: n(9).f
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S + r.F * !n(4), "Object", {
                defineProperties: n(45)
            })
        }
        , function(e, t, n) {
            var r = n(30)
              , o = n(49).f;
            n(53)("getOwnPropertyDescriptor", function() {
                return function(e, t) {
                    return o(r(e), t)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(7)
              , i = n(5);
            e.exports = function(e, t) {
                var n = (o.Object || {})[e] || Object[e]
                  , a = {};
                a[e] = t(n),
                r(r.S + r.F * i(function() {
                    n(1)
                }), "Object", a)
            }
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Object", {
                create: n(44)
            })
        }
        , function(e, t, n) {
            var r = n(56)
              , o = n(57);
            n(53)("getPrototypeOf", function() {
                return function(e) {
                    return o(r(e))
                }
            })
        }
        , function(e, t, n) {
            var r = n(33);
            e.exports = function(e) {
                return Object(r(e))
            }
        }
        , function(e, t, n) {
            var r = n(3)
              , o = n(56)
              , i = n(38)("IE_PROTO")
              , a = Object.prototype;
            e.exports = Object.getPrototypeOf || function(e) {
                return e = o(e),
                r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
            }
        }
        , function(e, t, n) {
            var r = n(56)
              , o = n(28);
            n(53)("keys", function() {
                return function(e) {
                    return o(r(e))
                }
            })
        }
        , function(e, t, n) {
            n(53)("getOwnPropertyNames", function() {
                return n(47).f
            })
        }
        , function(e, t, n) {
            var r = n(11)
              , o = n(20).onFreeze;
            n(53)("freeze", function(e) {
                return function(t) {
                    return e && r(t) ? e(o(t)) : t
                }
            })
        }
        , function(e, t, n) {
            var r = n(11)
              , o = n(20).onFreeze;
            n(53)("seal", function(e) {
                return function(t) {
                    return e && r(t) ? e(o(t)) : t
                }
            })
        }
        , function(e, t, n) {
            var r = n(11)
              , o = n(20).onFreeze;
            n(53)("preventExtensions", function(e) {
                return function(t) {
                    return e && r(t) ? e(o(t)) : t
                }
            })
        }
        , function(e, t, n) {
            var r = n(11);
            n(53)("isFrozen", function(e) {
                return function(t) {
                    return !r(t) || !!e && e(t)
                }
            })
        }
        , function(e, t, n) {
            var r = n(11);
            n(53)("isSealed", function(e) {
                return function(t) {
                    return !r(t) || !!e && e(t)
                }
            })
        }
        , function(e, t, n) {
            var r = n(11);
            n(53)("isExtensible", function(e) {
                return function(t) {
                    return !!r(t) && (!e || e(t))
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S + r.F, "Object", {
                assign: n(67)
            })
        }
        , function(e, t, n) {
            var r = n(28)
              , o = n(41)
              , i = n(42)
              , a = n(56)
              , u = n(31)
              , c = Object.assign;
            e.exports = !c || n(5)(function() {
                var e = {}
                  , t = {}
                  , n = Symbol()
                  , r = "abcdefghijklmnopqrst";
                return e[n] = 7,
                r.split("").forEach(function(e) {
                    t[e] = e
                }),
                7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r
            }) ? function(e, t) {
                for (var n = a(e), c = arguments.length, s = 1, f = o.f, l = i.f; c > s; )
                    for (var p, d = u(arguments[s++]), h = f ? r(d).concat(f(d)) : r(d), v = h.length, g = 0; v > g; )
                        l.call(d, p = h[g++]) && (n[p] = d[p]);
                return n
            }
            : c
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Object", {
                is: n(69)
            })
        }
        , function(e, t) {
            e.exports = Object.is || function(e, t) {
                return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t
            }
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Object", {
                setPrototypeOf: n(71).set
            })
        }
        , function(e, t, r) {
            var o = r(11)
              , i = r(10)
              , a = function(e, t) {
                if (i(e),
                !o(t) && null !== t)
                    throw TypeError(t + ": can't set as prototype!")
            }
            ;
            e.exports = {
                set: Object.setPrototypeOf || ("__proto__"in {} ? function(e, t, n) {
                    try {
                        n = r(18)(Function.call, r(49).f(Object.prototype, "__proto__").set, 2),
                        n(e, []),
                        t = !(e instanceof Array)
                    } catch (e) {
                        t = !0
                    }
                    return function(e, r) {
                        return a(e, r),
                        t ? e.__proto__ = r : n(e, r),
                        e
                    }
                }({}, !1) : n),
                check: a
            }
        }
        , function(e, t, n) {
            var r = n(73)
              , o = {};
            o[n(23)("toStringTag")] = "z",
            o + "" != "[object z]" && n(16)(Object.prototype, "toString", function() {
                return "[object " + r(this) + "]"
            }, !0)
        }
        , function(e, t, r) {
            var o = r(32)
              , i = r(23)("toStringTag")
              , a = "Arguments" == o(function() {
                return arguments
            }())
              , u = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }
            ;
            e.exports = function(e) {
                var t, r, c;
                return e === n ? "Undefined" : null === e ? "Null" : "string" == typeof (r = u(t = Object(e), i)) ? r : a ? o(t) : "Object" == (c = o(t)) && "function" == typeof t.callee ? "Arguments" : c
            }
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.P, "Function", {
                bind: n(75)
            })
        }
        , function(e, t, n) {
            var r = n(19)
              , o = n(11)
              , i = n(76)
              , a = [].slice
              , u = {}
              , c = function(e, t, n) {
                if (!(t in u)) {
                    for (var r = [], o = 0; o < t; o++)
                        r[o] = "a[" + o + "]";
                    u[t] = Function("F,a", "return new F(" + r.join(",") + ")")
                }
                return u[t](e, n)
            }
            ;
            e.exports = Function.bind || function(e) {
                var t = r(this)
                  , n = a.call(arguments, 1)
                  , u = function() {
                    var r = n.concat(a.call(arguments));
                    return this instanceof u ? c(t, r.length, r) : i(t, r, e)
                }
                ;
                return o(t.prototype) && (u.prototype = t.prototype),
                u
            }
        }
        , function(e, t) {
            e.exports = function(e, t, r) {
                var o = r === n;
                switch (t.length) {
                case 0:
                    return o ? e() : e.call(r);
                case 1:
                    return o ? e(t[0]) : e.call(r, t[0]);
                case 2:
                    return o ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
                case 3:
                    return o ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
                case 4:
                    return o ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3])
                }
                return e.apply(r, t)
            }
        }
        , function(e, t, n) {
            var r = n(9).f
              , o = n(15)
              , i = n(3)
              , a = Function.prototype
              , u = /^\s*function ([^ (]*)/
              , c = "name"
              , s = Object.isExtensible || function() {
                return !0
            }
            ;
            c in a || n(4) && r(a, c, {
                configurable: !0,
                get: function() {
                    try {
                        var e = this
                          , t = ("" + e).match(u)[1];
                        return i(e, c) || !s(e) || r(e, c, o(5, t)),
                        t
                    } catch (e) {
                        return ""
                    }
                }
            })
        }
        , function(e, t, n) {
            var r = n(11)
              , o = n(57)
              , i = n(23)("hasInstance")
              , a = Function.prototype;
            i in a || n(9).f(a, i, {
                value: function(e) {
                    if ("function" != typeof this || !r(e))
                        return !1;
                    if (!r(this.prototype))
                        return e instanceof this;
                    for (; e = o(e); )
                        if (this.prototype === e)
                            return !0;
                    return !1
                }
            })
        }
        , function(e, t, n) {
            var r = n(2)
              , o = n(3)
              , i = n(32)
              , a = n(80)
              , u = n(14)
              , c = n(5)
              , s = n(48).f
              , f = n(49).f
              , l = n(9).f
              , p = n(81).trim
              , d = "Number"
              , h = r[d]
              , v = h
              , g = h.prototype
              , y = i(n(44)(g)) == d
              , b = "trim"in String.prototype
              , m = function(e) {
                var t = u(e, !1);
                if ("string" == typeof t && t.length > 2) {
                    t = b ? t.trim() : p(t, 3);
                    var n, r, o, i = t.charCodeAt(0);
                    if (43 === i || 45 === i) {
                        if (n = t.charCodeAt(2),
                        88 === n || 120 === n)
                            return NaN
                    } else if (48 === i) {
                        switch (t.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2,
                            o = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8,
                            o = 55;
                            break;
                        default:
                            return +t
                        }
                        for (var a, c = t.slice(2), s = 0, f = c.length; s < f; s++)
                            if (a = c.charCodeAt(s),
                            a < 48 || a > o)
                                return NaN;
                        return parseInt(c, r)
                    }
                }
                return +t
            }
            ;
            if (!h(" 0o1") || !h("0b1") || h("+0x1")) {
                h = function(e) {
                    var t = arguments.length < 1 ? 0 : e
                      , n = this;
                    return n instanceof h && (y ? c(function() {
                        g.valueOf.call(n)
                    }) : i(n) != d) ? a(new v(m(t)), n, h) : m(t)
                }
                ;
                for (var w, _ = n(4) ? s(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), S = 0; _.length > S; S++)
                    o(v, w = _[S]) && !o(h, w) && l(h, w, f(v, w));
                h.prototype = g,
                g.constructor = h,
                n(16)(r, d, h)
            }
        }
        , function(e, t, n) {
            var r = n(11)
              , o = n(71).set;
            e.exports = function(e, t, n) {
                var i, a = t.constructor;
                return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && r(i) && o && o(e, i),
                e
            }
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(33)
              , i = n(5)
              , a = n(82)
              , u = "[" + a + "]"
              , c = "​"
              , s = RegExp("^" + u + u + "*")
              , f = RegExp(u + u + "*$")
              , l = function(e, t, n) {
                var o = {}
                  , u = i(function() {
                    return !!a[e]() || c[e]() != c
                })
                  , s = o[e] = u ? t(p) : a[e];
                n && (o[n] = s),
                r(r.P + r.F * u, "String", o)
            }
              , p = l.trim = function(e, t) {
                return e = String(o(e)),
                1 & t && (e = e.replace(s, "")),
                2 & t && (e = e.replace(f, "")),
                e
            }
            ;
            e.exports = l
        }
        , function(e, t) {
            e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(36)
              , i = n(84)
              , a = n(85)
              , u = 1..toFixed
              , c = Math.floor
              , s = [0, 0, 0, 0, 0, 0]
              , f = "Number.toFixed: incorrect invocation!"
              , l = "0"
              , p = function(e, t) {
                for (var n = -1, r = t; ++n < 6; )
                    r += e * s[n],
                    s[n] = r % 1e7,
                    r = c(r / 1e7)
            }
              , d = function(e) {
                for (var t = 6, n = 0; --t >= 0; )
                    n += s[t],
                    s[t] = c(n / e),
                    n = n % e * 1e7
            }
              , h = function() {
                for (var e = 6, t = ""; --e >= 0; )
                    if ("" !== t || 0 === e || 0 !== s[e]) {
                        var n = String(s[e]);
                        t = "" === t ? n : t + a.call(l, 7 - n.length) + n
                    }
                return t
            }
              , v = function(e, t, n) {
                return 0 === t ? n : t % 2 === 1 ? v(e, t - 1, n * e) : v(e * e, t / 2, n)
            }
              , g = function(e) {
                for (var t = 0, n = e; n >= 4096; )
                    t += 12,
                    n /= 4096;
                for (; n >= 2; )
                    t += 1,
                    n /= 2;
                return t
            }
            ;
            r(r.P + r.F * (!!u && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(5)(function() {
                u.call({})
            })), "Number", {
                toFixed: function(e) {
                    var t, n, r, u, c = i(this, f), s = o(e), y = "", b = l;
                    if (s < 0 || s > 20)
                        throw RangeError(f);
                    if (c != c)
                        return "NaN";
                    if (c <= -1e21 || c >= 1e21)
                        return String(c);
                    if (c < 0 && (y = "-",
                    c = -c),
                    c > 1e-21)
                        if (t = g(c * v(2, 69, 1)) - 69,
                        n = t < 0 ? c * v(2, -t, 1) : c / v(2, t, 1),
                        n *= 4503599627370496,
                        t = 52 - t,
                        t > 0) {
                            for (p(0, n),
                            r = s; r >= 7; )
                                p(1e7, 0),
                                r -= 7;
                            for (p(v(10, r, 1), 0),
                            r = t - 1; r >= 23; )
                                d(1 << 23),
                                r -= 23;
                            d(1 << r),
                            p(1, 1),
                            d(2),
                            b = h()
                        } else
                            p(0, n),
                            p(1 << -t, 0),
                            b = h() + a.call(l, s);
                    return s > 0 ? (u = b.length,
                    b = y + (u <= s ? "0." + a.call(l, s - u) + b : b.slice(0, u - s) + "." + b.slice(u - s))) : b = y + b,
                    b
                }
            })
        }
        , function(e, t, n) {
            var r = n(32);
            e.exports = function(e, t) {
                if ("number" != typeof e && "Number" != r(e))
                    throw TypeError(t);
                return +e
            }
        }
        , function(e, t, n) {
            var r = n(36)
              , o = n(33);
            e.exports = function(e) {
                var t = String(o(this))
                  , n = ""
                  , i = r(e);
                if (i < 0 || i == 1 / 0)
                    throw RangeError("Count can't be negative");
                for (; i > 0; (i >>>= 1) && (t += t))
                    1 & i && (n += t);
                return n
            }
        }
        , function(e, t, r) {
            var o = r(6)
              , i = r(5)
              , a = r(84)
              , u = 1..toPrecision;
            o(o.P + o.F * (i(function() {
                return "1" !== u.call(1, n)
            }) || !i(function() {
                u.call({})
            })), "Number", {
                toPrecision: function(e) {
                    var t = a(this, "Number#toPrecision: incorrect invocation!");
                    return e === n ? u.call(t) : u.call(t, e)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Number", {
                EPSILON: Math.pow(2, -52)
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(2).isFinite;
            r(r.S, "Number", {
                isFinite: function(e) {
                    return "number" == typeof e && o(e)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Number", {
                isInteger: n(90)
            })
        }
        , function(e, t, n) {
            var r = n(11)
              , o = Math.floor;
            e.exports = function(e) {
                return !r(e) && isFinite(e) && o(e) === e
            }
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Number", {
                isNaN: function(e) {
                    return e != e
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(90)
              , i = Math.abs;
            r(r.S, "Number", {
                isSafeInteger: function(e) {
                    return o(e) && i(e) <= 9007199254740991
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Number", {
                MAX_SAFE_INTEGER: 9007199254740991
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Number", {
                MIN_SAFE_INTEGER: -9007199254740991
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(96);
            r(r.S + r.F * (Number.parseFloat != o), "Number", {
                parseFloat: o
            })
        }
        , function(e, t, n) {
            var r = n(2).parseFloat
              , o = n(81).trim;
            e.exports = 1 / r(n(82) + "-0") !== -(1 / 0) ? function(e) {
                var t = o(String(e), 3)
                  , n = r(t);
                return 0 === n && "-" == t.charAt(0) ? -0 : n
            }
            : r
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(98);
            r(r.S + r.F * (Number.parseInt != o), "Number", {
                parseInt: o
            })
        }
        , function(e, t, n) {
            var r = n(2).parseInt
              , o = n(81).trim
              , i = n(82)
              , a = /^[\-+]?0[xX]/;
            e.exports = 8 !== r(i + "08") || 22 !== r(i + "0x16") ? function(e, t) {
                var n = o(String(e), 3);
                return r(n, t >>> 0 || (a.test(n) ? 16 : 10))
            }
            : r
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(98);
            r(r.G + r.F * (parseInt != o), {
                parseInt: o
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(96);
            r(r.G + r.F * (parseFloat != o), {
                parseFloat: o
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(102)
              , i = Math.sqrt
              , a = Math.acosh;
            r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
                acosh: function(e) {
                    return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : o(e - 1 + i(e - 1) * i(e + 1))
                }
            })
        }
        , function(e, t) {
            e.exports = Math.log1p || function(e) {
                return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
            }
        }
        , function(e, t, n) {
            function r(e) {
                return isFinite(e = +e) && 0 != e ? e < 0 ? -r(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
            }
            var o = n(6)
              , i = Math.asinh;
            o(o.S + o.F * !(i && 1 / i(0) > 0), "Math", {
                asinh: r
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = Math.atanh;
            r(r.S + r.F * !(o && 1 / o(-0) < 0), "Math", {
                atanh: function(e) {
                    return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(106);
            r(r.S, "Math", {
                cbrt: function(e) {
                    return o(e = +e) * Math.pow(Math.abs(e), 1 / 3)
                }
            })
        }
        , function(e, t) {
            e.exports = Math.sign || function(e) {
                return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
            }
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Math", {
                clz32: function(e) {
                    return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = Math.exp;
            r(r.S, "Math", {
                cosh: function(e) {
                    return (o(e = +e) + o(-e)) / 2
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(110);
            r(r.S + r.F * (o != Math.expm1), "Math", {
                expm1: o
            })
        }
        , function(e, t) {
            var n = Math.expm1;
            e.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || n(-2e-17) != -2e-17 ? function(e) {
                return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
            }
            : n
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(106)
              , i = Math.pow
              , a = i(2, -52)
              , u = i(2, -23)
              , c = i(2, 127) * (2 - u)
              , s = i(2, -126)
              , f = function(e) {
                return e + 1 / a - 1 / a
            }
            ;
            r(r.S, "Math", {
                fround: function(e) {
                    var t, n, r = Math.abs(e), i = o(e);
                    return r < s ? i * f(r / s / u) * s * u : (t = (1 + u / a) * r,
                    n = t - (t - r),
                    n > c || n != n ? i * (1 / 0) : i * n)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = Math.abs;
            r(r.S, "Math", {
                hypot: function(e, t) {
                    for (var n, r, i = 0, a = 0, u = arguments.length, c = 0; a < u; )
                        n = o(arguments[a++]),
                        c < n ? (r = c / n,
                        i = i * r * r + 1,
                        c = n) : n > 0 ? (r = n / c,
                        i += r * r) : i += n;
                    return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(i)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = Math.imul;
            r(r.S + r.F * n(5)(function() {
                return o(4294967295, 5) != -5 || 2 != o.length
            }), "Math", {
                imul: function(e, t) {
                    var n = 65535
                      , r = +e
                      , o = +t
                      , i = n & r
                      , a = n & o;
                    return 0 | i * a + ((n & r >>> 16) * a + i * (n & o >>> 16) << 16 >>> 0)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Math", {
                log10: function(e) {
                    return Math.log(e) / Math.LN10
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Math", {
                log1p: n(102)
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Math", {
                log2: function(e) {
                    return Math.log(e) / Math.LN2
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Math", {
                sign: n(106)
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(110)
              , i = Math.exp;
            r(r.S + r.F * n(5)(function() {
                return !Math.sinh(-2e-17) != -2e-17
            }), "Math", {
                sinh: function(e) {
                    return Math.abs(e = +e) < 1 ? (o(e) - o(-e)) / 2 : (i(e - 1) - i(-e - 1)) * (Math.E / 2)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(110)
              , i = Math.exp;
            r(r.S, "Math", {
                tanh: function(e) {
                    var t = o(e = +e)
                      , n = o(-e);
                    return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (i(e) + i(-e))
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Math", {
                trunc: function(e) {
                    return (e > 0 ? Math.floor : Math.ceil)(e)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(37)
              , i = String.fromCharCode
              , a = String.fromCodePoint;
            r(r.S + r.F * (!!a && 1 != a.length), "String", {
                fromCodePoint: function(e) {
                    for (var t, n = [], r = arguments.length, a = 0; r > a; ) {
                        if (t = +arguments[a++],
                        o(t, 1114111) !== t)
                            throw RangeError(t + " is not a valid code point");
                        n.push(t < 65536 ? i(t) : i(((t -= 65536) >> 10) + 55296, t % 1024 + 56320))
                    }
                    return n.join("")
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(30)
              , i = n(35);
            r(r.S, "String", {
                raw: function(e) {
                    for (var t = o(e.raw), n = i(t.length), r = arguments.length, a = [], u = 0; n > u; )
                        a.push(String(t[u++])),
                        u < r && a.push(String(arguments[u]));
                    return a.join("")
                }
            })
        }
        , function(e, t, n) {
            n(81)("trim", function(e) {
                return function() {
                    return e(this, 3)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(125)(!1);
            r(r.P, "String", {
                codePointAt: function(e) {
                    return o(this, e)
                }
            })
        }
        , function(e, t, r) {
            var o = r(36)
              , i = r(33);
            e.exports = function(e) {
                return function(t, r) {
                    var a, u, c = String(i(t)), s = o(r), f = c.length;
                    return s < 0 || s >= f ? e ? "" : n : (a = c.charCodeAt(s),
                    a < 55296 || a > 56319 || s + 1 === f || (u = c.charCodeAt(s + 1)) < 56320 || u > 57343 ? e ? c.charAt(s) : a : e ? c.slice(s, s + 2) : (a - 55296 << 10) + (u - 56320) + 65536)
                }
            }
        }
        , function(e, t, r) {
            var o = r(6)
              , i = r(35)
              , a = r(127)
              , u = "endsWith"
              , c = ""[u];
            o(o.P + o.F * r(129)(u), "String", {
                endsWith: function(e) {
                    var t = a(this, e, u)
                      , r = arguments.length > 1 ? arguments[1] : n
                      , o = i(t.length)
                      , s = r === n ? o : Math.min(i(r), o)
                      , f = String(e);
                    return c ? c.call(t, f, s) : t.slice(s - f.length, s) === f
                }
            })
        }
        , function(e, t, n) {
            var r = n(128)
              , o = n(33);
            e.exports = function(e, t, n) {
                if (r(t))
                    throw TypeError("String#" + n + " doesn't accept regex!");
                return String(o(e))
            }
        }
        , function(e, t, r) {
            var o = r(11)
              , i = r(32)
              , a = r(23)("match");
            e.exports = function(e) {
                var t;
                return o(e) && ((t = e[a]) !== n ? !!t : "RegExp" == i(e))
            }
        }
        , function(e, t, n) {
            var r = n(23)("match");
            e.exports = function(e) {
                var t = /./;
                try {
                    "/./"[e](t)
                } catch (n) {
                    try {
                        return t[r] = !1,
                        !"/./"[e](t)
                    } catch (e) {}
                }
                return !0
            }
        }
        , function(e, t, r) {
            var o = r(6)
              , i = r(127)
              , a = "includes";
            o(o.P + o.F * r(129)(a), "String", {
                includes: function(e) {
                    return !!~i(this, e, a).indexOf(e, arguments.length > 1 ? arguments[1] : n)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.P, "String", {
                repeat: n(85)
            })
        }
        , function(e, t, r) {
            var o = r(6)
              , i = r(35)
              , a = r(127)
              , u = "startsWith"
              , c = ""[u];
            o(o.P + o.F * r(129)(u), "String", {
                startsWith: function(e) {
                    var t = a(this, e, u)
                      , r = i(Math.min(arguments.length > 1 ? arguments[1] : n, t.length))
                      , o = String(e);
                    return c ? c.call(t, o, r) : t.slice(r, r + o.length) === o
                }
            })
        }
        , function(e, t, r) {
            var o = r(125)(!0);
            r(134)(String, "String", function(e) {
                this._t = String(e),
                this._i = 0
            }, function() {
                var e, t = this._t, r = this._i;
                return r >= t.length ? {
                    value: n,
                    done: !0
                } : (e = o(t, r),
                this._i += e.length,
                {
                    value: e,
                    done: !1
                })
            })
        }
        , function(e, t, r) {
            var o = r(26)
              , i = r(6)
              , a = r(16)
              , u = r(8)
              , c = r(3)
              , s = r(135)
              , f = r(136)
              , l = r(22)
              , p = r(57)
              , d = r(23)("iterator")
              , h = !([].keys && "next"in [].keys())
              , v = "@@iterator"
              , g = "keys"
              , y = "values"
              , b = function() {
                return this
            }
            ;
            e.exports = function(e, t, r, m, w, _, S) {
                f(r, t, m);
                var k, x, M, A = function(e) {
                    if (!h && e in E)
                        return E[e];
                    switch (e) {
                    case g:
                        return function() {
                            return new r(this,e)
                        }
                        ;
                    case y:
                        return function() {
                            return new r(this,e)
                        }
                    }
                    return function() {
                        return new r(this,e)
                    }
                }
                , T = t + " Iterator", P = w == y, C = !1, E = e.prototype, O = E[d] || E[v] || w && E[w], I = O || A(w), j = w ? P ? A("entries") : I : n, D = "Array" == t ? E.entries || O : O;
                if (D && (M = p(D.call(new e)),
                M !== Object.prototype && (l(M, T, !0),
                o || c(M, d) || u(M, d, b))),
                P && O && O.name !== y && (C = !0,
                I = function() {
                    return O.call(this)
                }
                ),
                o && !S || !h && !C && E[d] || u(E, d, I),
                s[t] = I,
                s[T] = b,
                w)
                    if (k = {
                        values: P ? I : A(y),
                        keys: _ ? I : A(g),
                        entries: j
                    },
                    S)
                        for (x in k)
                            x in E || a(E, x, k[x]);
                    else
                        i(i.P + i.F * (h || C), t, k);
                return k
            }
        }
        , function(e, t) {
            e.exports = {}
        }
        , function(e, t, n) {
            var r = n(44)
              , o = n(15)
              , i = n(22)
              , a = {};
            n(8)(a, n(23)("iterator"), function() {
                return this
            }),
            e.exports = function(e, t, n) {
                e.prototype = r(a, {
                    next: o(1, n)
                }),
                i(e, t + " Iterator")
            }
        }
        , function(e, t, n) {
            n(138)("anchor", function(e) {
                return function(t) {
                    return e(this, "a", "name", t)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(5)
              , i = n(33)
              , a = /"/g
              , u = function(e, t, n, r) {
                var o = String(i(e))
                  , u = "<" + t;
                return "" !== n && (u += " " + n + '="' + String(r).replace(a, "&quot;") + '"'),
                u + ">" + o + "</" + t + ">"
            }
            ;
            e.exports = function(e, t) {
                var n = {};
                n[e] = t(u),
                r(r.P + r.F * o(function() {
                    var t = ""[e]('"');
                    return t !== t.toLowerCase() || t.split('"').length > 3
                }), "String", n)
            }
        }
        , function(e, t, n) {
            n(138)("big", function(e) {
                return function() {
                    return e(this, "big", "", "")
                }
            })
        }
        , function(e, t, n) {
            n(138)("blink", function(e) {
                return function() {
                    return e(this, "blink", "", "")
                }
            })
        }
        , function(e, t, n) {
            n(138)("bold", function(e) {
                return function() {
                    return e(this, "b", "", "")
                }
            })
        }
        , function(e, t, n) {
            n(138)("fixed", function(e) {
                return function() {
                    return e(this, "tt", "", "")
                }
            })
        }
        , function(e, t, n) {
            n(138)("fontcolor", function(e) {
                return function(t) {
                    return e(this, "font", "color", t)
                }
            })
        }
        , function(e, t, n) {
            n(138)("fontsize", function(e) {
                return function(t) {
                    return e(this, "font", "size", t)
                }
            })
        }
        , function(e, t, n) {
            n(138)("italics", function(e) {
                return function() {
                    return e(this, "i", "", "")
                }
            })
        }
        , function(e, t, n) {
            n(138)("link", function(e) {
                return function(t) {
                    return e(this, "a", "href", t)
                }
            })
        }
        , function(e, t, n) {
            n(138)("small", function(e) {
                return function() {
                    return e(this, "small", "", "")
                }
            })
        }
        , function(e, t, n) {
            n(138)("strike", function(e) {
                return function() {
                    return e(this, "strike", "", "")
                }
            })
        }
        , function(e, t, n) {
            n(138)("sub", function(e) {
                return function() {
                    return e(this, "sub", "", "")
                }
            })
        }
        , function(e, t, n) {
            n(138)("sup", function(e) {
                return function() {
                    return e(this, "sup", "", "")
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Array", {
                isArray: n(43)
            })
        }
        , function(e, t, r) {
            var o = r(18)
              , i = r(6)
              , a = r(56)
              , u = r(153)
              , c = r(154)
              , s = r(35)
              , f = r(155)
              , l = r(156);
            i(i.S + i.F * !r(157)(function(e) {
                Array.from(e)
            }), "Array", {
                from: function(e) {
                    var t, r, i, p, d = a(e), h = "function" == typeof this ? this : Array, v = arguments.length, g = v > 1 ? arguments[1] : n, y = g !== n, b = 0, m = l(d);
                    if (y && (g = o(g, v > 2 ? arguments[2] : n, 2)),
                    m == n || h == Array && c(m))
                        for (t = s(d.length),
                        r = new h(t); t > b; b++)
                            f(r, b, y ? g(d[b], b) : d[b]);
                    else
                        for (p = m.call(d),
                        r = new h; !(i = p.next()).done; b++)
                            f(r, b, y ? u(p, g, [i.value, b], !0) : i.value);
                    return r.length = b,
                    r
                }
            })
        }
        , function(e, t, r) {
            var o = r(10);
            e.exports = function(e, t, r, i) {
                try {
                    return i ? t(o(r)[0], r[1]) : t(r)
                } catch (t) {
                    var a = e.return;
                    throw a !== n && o(a.call(e)),
                    t
                }
            }
        }
        , function(e, t, r) {
            var o = r(135)
              , i = r(23)("iterator")
              , a = Array.prototype;
            e.exports = function(e) {
                return e !== n && (o.Array === e || a[i] === e)
            }
        }
        , function(e, t, n) {
            var r = n(9)
              , o = n(15);
            e.exports = function(e, t, n) {
                t in e ? r.f(e, t, o(0, n)) : e[t] = n
            }
        }
        , function(e, t, r) {
            var o = r(73)
              , i = r(23)("iterator")
              , a = r(135);
            e.exports = r(7).getIteratorMethod = function(e) {
                if (e != n)
                    return e[i] || e["@@iterator"] || a[o(e)]
            }
        }
        , function(e, t, n) {
            var r = n(23)("iterator")
              , o = !1;
            try {
                var i = [7][r]();
                i.return = function() {
                    o = !0
                }
                ,
                Array.from(i, function() {
                    throw 2
                })
            } catch (e) {}
            e.exports = function(e, t) {
                if (!t && !o)
                    return !1;
                var n = !1;
                try {
                    var i = [7]
                      , a = i[r]();
                    a.next = function() {
                        return {
                            done: n = !0
                        }
                    }
                    ,
                    i[r] = function() {
                        return a
                    }
                    ,
                    e(i)
                } catch (e) {}
                return n
            }
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(155);
            r(r.S + r.F * n(5)(function() {
                function e() {}
                return !(Array.of.call(e)instanceof e)
            }), "Array", {
                of: function() {
                    for (var e = 0, t = arguments.length, n = new ("function" == typeof this ? this : Array)(t); t > e; )
                        o(n, e, arguments[e++]);
                    return n.length = t,
                    n
                }
            })
        }
        , function(e, t, r) {
            var o = r(6)
              , i = r(30)
              , a = [].join;
            o(o.P + o.F * (r(31) != Object || !r(160)(a)), "Array", {
                join: function(e) {
                    return a.call(i(this), e === n ? "," : e)
                }
            })
        }
        , function(e, t, n) {
            var r = n(5);
            e.exports = function(e, t) {
                return !!e && r(function() {
                    t ? e.call(null , function() {}, 1) : e.call(null )
                })
            }
        }
        , function(e, t, r) {
            var o = r(6)
              , i = r(46)
              , a = r(32)
              , u = r(37)
              , c = r(35)
              , s = [].slice;
            o(o.P + o.F * r(5)(function() {
                i && s.call(i)
            }), "Array", {
                slice: function(e, t) {
                    var r = c(this.length)
                      , o = a(this);
                    if (t = t === n ? r : t,
                    "Array" == o)
                        return s.call(this, e, t);
                    for (var i = u(e, r), f = u(t, r), l = c(f - i), p = Array(l), d = 0; d < l; d++)
                        p[d] = "String" == o ? this.charAt(i + d) : this[i + d];
                    return p
                }
            })
        }
        , function(e, t, r) {
            var o = r(6)
              , i = r(19)
              , a = r(56)
              , u = r(5)
              , c = [].sort
              , s = [1, 2, 3];
            o(o.P + o.F * (u(function() {
                s.sort(n)
            }) || !u(function() {
                s.sort(null )
            }) || !r(160)(c)), "Array", {
                sort: function(e) {
                    return e === n ? c.call(a(this)) : c.call(a(this), i(e))
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(164)(0)
              , i = n(160)([].forEach, !0);
            r(r.P + r.F * !i, "Array", {
                forEach: function(e) {
                    return o(this, e, arguments[1])
                }
            })
        }
        , function(e, t, r) {
            var o = r(18)
              , i = r(31)
              , a = r(56)
              , u = r(35)
              , c = r(165);
            e.exports = function(e, t) {
                var r = 1 == e
                  , s = 2 == e
                  , f = 3 == e
                  , l = 4 == e
                  , p = 6 == e
                  , d = 5 == e || p
                  , h = t || c;
                return function(t, c, v) {
                    for (var g, y, b = a(t), m = i(b), w = o(c, v, 3), _ = u(m.length), S = 0, k = r ? h(t, _) : s ? h(t, 0) : n; _ > S; S++)
                        if ((d || S in m) && (g = m[S],
                        y = w(g, S, b),
                        e))
                            if (r)
                                k[S] = y;
                            else if (y)
                                switch (e) {
                                case 3:
                                    return !0;
                                case 5:
                                    return g;
                                case 6:
                                    return S;
                                case 2:
                                    k.push(g)
                                }
                            else if (l)
                                return !1;
                    return p ? -1 : f || l ? l : k
                }
            }
        }
        , function(e, t, n) {
            var r = n(166);
            e.exports = function(e, t) {
                return new (r(e))(t)
            }
        }
        , function(e, t, r) {
            var o = r(11)
              , i = r(43)
              , a = r(23)("species");
            e.exports = function(e) {
                var t;
                return i(e) && (t = e.constructor,
                "function" != typeof t || t !== Array && !i(t.prototype) || (t = n),
                o(t) && (t = t[a],
                null === t && (t = n))),
                t === n ? Array : t
            }
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(164)(1);
            r(r.P + r.F * !n(160)([].map, !0), "Array", {
                map: function(e) {
                    return o(this, e, arguments[1])
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(164)(2);
            r(r.P + r.F * !n(160)([].filter, !0), "Array", {
                filter: function(e) {
                    return o(this, e, arguments[1])
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(164)(3);
            r(r.P + r.F * !n(160)([].some, !0), "Array", {
                some: function(e) {
                    return o(this, e, arguments[1])
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(164)(4);
            r(r.P + r.F * !n(160)([].every, !0), "Array", {
                every: function(e) {
                    return o(this, e, arguments[1])
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(172);
            r(r.P + r.F * !n(160)([].reduce, !0), "Array", {
                reduce: function(e) {
                    return o(this, e, arguments.length, arguments[1], !1)
                }
            })
        }
        , function(e, t, n) {
            var r = n(19)
              , o = n(56)
              , i = n(31)
              , a = n(35);
            e.exports = function(e, t, n, u, c) {
                r(t);
                var s = o(e)
                  , f = i(s)
                  , l = a(s.length)
                  , p = c ? l - 1 : 0
                  , d = c ? -1 : 1;
                if (n < 2)
                    for (; ; ) {
                        if (p in f) {
                            u = f[p],
                            p += d;
                            break
                        }
                        if (p += d,
                        c ? p < 0 : l <= p)
                            throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; c ? p >= 0 : l > p; p += d)
                    p in f && (u = t(u, f[p], p, s));
                return u
            }
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(172);
            r(r.P + r.F * !n(160)([].reduceRight, !0), "Array", {
                reduceRight: function(e) {
                    return o(this, e, arguments.length, arguments[1], !0)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(34)(!1)
              , i = [].indexOf
              , a = !!i && 1 / [1].indexOf(1, -0) < 0;
            r(r.P + r.F * (a || !n(160)(i)), "Array", {
                indexOf: function(e) {
                    return a ? i.apply(this, arguments) || 0 : o(this, e, arguments[1])
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(30)
              , i = n(36)
              , a = n(35)
              , u = [].lastIndexOf
              , c = !!u && 1 / [1].lastIndexOf(1, -0) < 0;
            r(r.P + r.F * (c || !n(160)(u)), "Array", {
                lastIndexOf: function(e) {
                    if (c)
                        return u.apply(this, arguments) || 0;
                    var t = o(this)
                      , n = a(t.length)
                      , r = n - 1;
                    for (arguments.length > 1 && (r = Math.min(r, i(arguments[1]))),
                    r < 0 && (r = n + r); r >= 0; r--)
                        if (r in t && t[r] === e)
                            return r || 0;
                    return -1
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.P, "Array", {
                copyWithin: n(177)
            }),
            n(178)("copyWithin")
        }
        , function(e, t, r) {
            var o = r(56)
              , i = r(37)
              , a = r(35);
            e.exports = [].copyWithin || function(e, t) {
                var r = o(this)
                  , u = a(r.length)
                  , c = i(e, u)
                  , s = i(t, u)
                  , f = arguments.length > 2 ? arguments[2] : n
                  , l = Math.min((f === n ? u : i(f, u)) - s, u - c)
                  , p = 1;
                for (s < c && c < s + l && (p = -1,
                s += l - 1,
                c += l - 1); l-- > 0; )
                    s in r ? r[c] = r[s] : delete r[c],
                    c += p,
                    s += p;
                return r
            }
        }
        , function(e, t, r) {
            var o = r(23)("unscopables")
              , i = Array.prototype;
            i[o] == n && r(8)(i, o, {}),
            e.exports = function(e) {
                i[o][e] = !0
            }
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.P, "Array", {
                fill: n(180)
            }),
            n(178)("fill")
        }
        , function(e, t, r) {
            var o = r(56)
              , i = r(37)
              , a = r(35);
            e.exports = function(e) {
                for (var t = o(this), r = a(t.length), u = arguments.length, c = i(u > 1 ? arguments[1] : n, r), s = u > 2 ? arguments[2] : n, f = s === n ? r : i(s, r); f > c; )
                    t[c++] = e;
                return t
            }
        }
        , function(e, t, r) {
            var o = r(6)
              , i = r(164)(5)
              , a = "find"
              , u = !0;
            a in [] && Array(1)[a](function() {
                u = !1
            }),
            o(o.P + o.F * u, "Array", {
                find: function(e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : n)
                }
            }),
            r(178)(a)
        }
        , function(e, t, r) {
            var o = r(6)
              , i = r(164)(6)
              , a = "findIndex"
              , u = !0;
            a in [] && Array(1)[a](function() {
                u = !1
            }),
            o(o.P + o.F * u, "Array", {
                findIndex: function(e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : n)
                }
            }),
            r(178)(a)
        }
        , function(e, t, r) {
            var o = r(178)
              , i = r(184)
              , a = r(135)
              , u = r(30);
            e.exports = r(134)(Array, "Array", function(e, t) {
                this._t = u(e),
                this._i = 0,
                this._k = t
            }, function() {
                var e = this._t
                  , t = this._k
                  , r = this._i++;
                return !e || r >= e.length ? (this._t = n,
                i(1)) : "keys" == t ? i(0, r) : "values" == t ? i(0, e[r]) : i(0, [r, e[r]])
            }, "values"),
            a.Arguments = a.Array,
            o("keys"),
            o("values"),
            o("entries")
        }
        , function(e, t) {
            e.exports = function(e, t) {
                return {
                    value: t,
                    done: !!e
                }
            }
        }
        , function(e, t, n) {
            n(186)("Array")
        }
        , function(e, t, n) {
            var r = n(2)
              , o = n(9)
              , i = n(4)
              , a = n(23)("species");
            e.exports = function(e) {
                var t = r[e];
                i && t && !t[a] && o.f(t, a, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        }
        , function(e, t, r) {
            var o = r(2)
              , i = r(80)
              , a = r(9).f
              , u = r(48).f
              , c = r(128)
              , s = r(188)
              , f = o.RegExp
              , l = f
              , p = f.prototype
              , d = /a/g
              , h = /a/g
              , v = new f(d) !== d;
            if (r(4) && (!v || r(5)(function() {
                return h[r(23)("match")] = !1,
                f(d) != d || f(h) == h || "/a/i" != f(d, "i")
            }))) {
                f = function(e, t) {
                    var r = this instanceof f
                      , o = c(e)
                      , a = t === n;
                    return !r && o && e.constructor === f && a ? e : i(v ? new l(o && !a ? e.source : e,t) : l((o = e instanceof f) ? e.source : e, o && a ? s.call(e) : t), r ? this : p, f)
                }
                ;
                for (var g = (function(e) {
                    e in f || a(f, e, {
                        configurable: !0,
                        get: function() {
                            return l[e]
                        },
                        set: function(t) {
                            l[e] = t
                        }
                    })
                }
                ), y = u(l), b = 0; y.length > b; )
                    g(y[b++]);
                p.constructor = f,
                f.prototype = p,
                r(16)(o, "RegExp", f)
            }
            r(186)("RegExp")
        }
        , function(e, t, n) {
            var r = n(10);
            e.exports = function() {
                var e = r(this)
                  , t = "";
                return e.global && (t += "g"),
                e.ignoreCase && (t += "i"),
                e.multiline && (t += "m"),
                e.unicode && (t += "u"),
                e.sticky && (t += "y"),
                t
            }
        }
        , function(e, t, r) {
            r(190);
            var o = r(10)
              , i = r(188)
              , a = r(4)
              , u = "toString"
              , c = /./[u]
              , s = function(e) {
                r(16)(RegExp.prototype, u, e, !0)
            }
            ;
            r(5)(function() {
                return "/a/b" != c.call({
                    source: "a",
                    flags: "b"
                })
            }) ? s(function() {
                var e = o(this);
                return "/".concat(e.source, "/", "flags"in e ? e.flags : !a && e instanceof RegExp ? i.call(e) : n)
            }) : c.name != u && s(function() {
                return c.call(this)
            })
        }
        , function(e, t, n) {
            n(4) && "g" != /./g.flags && n(9).f(RegExp.prototype, "flags", {
                configurable: !0,
                get: n(188)
            })
        }
        , function(e, t, r) {
            r(192)("match", 1, function(e, t, r) {
                return [function(r) {
                    var o = e(this)
                      , i = r == n ? n : r[t];
                    return i !== n ? i.call(r, o) : new RegExp(r)[t](String(o))
                }
                , r]
            })
        }
        , function(e, t, n) {
            var r = n(8)
              , o = n(16)
              , i = n(5)
              , a = n(33)
              , u = n(23);
            e.exports = function(e, t, n) {
                var c = u(e)
                  , s = n(a, c, ""[e])
                  , f = s[0]
                  , l = s[1];
                i(function() {
                    var t = {};
                    return t[c] = function() {
                        return 7
                    }
                    ,
                    7 != ""[e](t)
                }) && (o(String.prototype, e, f),
                r(RegExp.prototype, c, 2 == t ? function(e, t) {
                    return l.call(e, this, t)
                }
                : function(e) {
                    return l.call(e, this)
                }
                ))
            }
        }
        , function(e, t, r) {
            r(192)("replace", 2, function(e, t, r) {
                return [function(o, i) {
                    var a = e(this)
                      , u = o == n ? n : o[t];
                    return u !== n ? u.call(o, a, i) : r.call(String(a), o, i)
                }
                , r]
            })
        }
        , function(e, t, r) {
            r(192)("search", 1, function(e, t, r) {
                return [function(r) {
                    var o = e(this)
                      , i = r == n ? n : r[t];
                    return i !== n ? i.call(r, o) : new RegExp(r)[t](String(o))
                }
                , r]
            })
        }
        , function(e, t, r) {
            r(192)("split", 2, function(e, t, o) {
                var i = r(128)
                  , a = o
                  , u = [].push
                  , c = "split"
                  , s = "length"
                  , f = "lastIndex";
                if ("c" == "abbc"[c](/(b)*/)[1] || 4 != "test"[c](/(?:)/, -1)[s] || 2 != "ab"[c](/(?:ab)*/)[s] || 4 != "."[c](/(.?)(.?)/)[s] || "."[c](/()()/)[s] > 1 || ""[c](/.?/)[s]) {
                    var l = /()??/.exec("")[1] === n;
                    o = function(e, t) {
                        var r = String(this);
                        if (e === n && 0 === t)
                            return [];
                        if (!i(e))
                            return a.call(r, e, t);
                        var o, c, p, d, h, v = [], g = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), y = 0, b = t === n ? 4294967295 : t >>> 0, m = new RegExp(e.source,g + "g");
                        for (l || (o = new RegExp("^" + m.source + "$(?!\\s)",g)); (c = m.exec(r)) && (p = c.index + c[0][s],
                        !(p > y && (v.push(r.slice(y, c.index)),
                        !l && c[s] > 1 && c[0].replace(o, function() {
                            for (h = 1; h < arguments[s] - 2; h++)
                                arguments[h] === n && (c[h] = n)
                        }),
                        c[s] > 1 && c.index < r[s] && u.apply(v, c.slice(1)),
                        d = c[0][s],
                        y = p,
                        v[s] >= b))); )
                            m[f] === c.index && m[f]++;
                        return y === r[s] ? !d && m.test("") || v.push("") : v.push(r.slice(y)),
                        v[s] > b ? v.slice(0, b) : v
                    }
                } else
                    "0"[c](n, 0)[s] && (o = function(e, t) {
                        return e === n && 0 === t ? [] : a.call(this, e, t)
                    }
                    );
                return [function(r, i) {
                    var a = e(this)
                      , u = r == n ? n : r[t];
                    return u !== n ? u.call(r, a, i) : o.call(String(a), r, i)
                }
                , o]
            })
        }
        , function(e, t, r) {
            var o, i, a, u = r(26), c = r(2), s = r(18), f = r(73), l = r(6), p = r(11), d = r(19), h = r(197), v = r(198), g = r(199), y = r(200).set, b = r(201)(), m = "Promise", w = c.TypeError, _ = c.process, S = c[m], _ = c.process, k = "process" == f(_), x = function() {}
            , M = !!function() {
                try {
                    var e = S.resolve(1)
                      , t = (e.constructor = {})[r(23)("species")] = function(e) {
                        e(x, x)
                    }
                    ;
                    return (k || "function" == typeof PromiseRejectionEvent) && e.then(x)instanceof t
                } catch (e) {}
            }(), A = function(e, t) {
                return e === t || e === S && t === a
            }
            , T = function(e) {
                var t;
                return !(!p(e) || "function" != typeof (t = e.then)) && t
            }
            , P = function(e) {
                return A(S, e) ? new C(e) : new i(e)
            }
            , C = i = function(e) {
                var t, r;
                this.promise = new e(function(e, o) {
                    if (t !== n || r !== n)
                        throw w("Bad Promise constructor");
                    t = e,
                    r = o
                }
                ),
                this.resolve = d(t),
                this.reject = d(r)
            }
            , E = function(e) {
                try {
                    e()
                } catch (e) {
                    return {
                        error: e
                    }
                }
            }
            , O = function(e, t) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    b(function() {
                        for (var r = e._v, o = 1 == e._s, i = 0, a = function(t) {
                            var n, i, a = o ? t.ok : t.fail, u = t.resolve, c = t.reject, s = t.domain;
                            try {
                                a ? (o || (2 == e._h && D(e),
                                e._h = 1),
                                a === !0 ? n = r : (s && s.enter(),
                                n = a(r),
                                s && s.exit()),
                                n === t.promise ? c(w("Promise-chain cycle")) : (i = T(n)) ? i.call(n, u, c) : u(n)) : c(r)
                            } catch (e) {
                                c(e)
                            }
                        }
                        ; n.length > i; )
                            a(n[i++]);
                        e._c = [],
                        e._n = !1,
                        t && !e._h && I(e)
                    })
                }
            }
            , I = function(e) {
                y.call(c, function() {
                    var t, r, o, i = e._v;
                    if (j(e) && (t = E(function() {
                        k ? _.emit("unhandledRejection", i, e) : (r = c.onunhandledrejection) ? r({
                            promise: e,
                            reason: i
                        }) : (o = c.console) && o.error && o.error("Unhandled promise rejection", i)
                    }),
                    e._h = k || j(e) ? 2 : 1),
                    e._a = n,
                    t)
                        throw t.error
                })
            }
            , j = function(e) {
                if (1 == e._h)
                    return !1;
                for (var t, n = e._a || e._c, r = 0; n.length > r; )
                    if (t = n[r++],
                    t.fail || !j(t.promise))
                        return !1;
                return !0
            }
            , D = function(e) {
                y.call(c, function() {
                    var t;
                    k ? _.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({
                        promise: e,
                        reason: e._v
                    })
                })
            }
            , R = function(e) {
                var t = this;
                t._d || (t._d = !0,
                t = t._w || t,
                t._v = e,
                t._s = 2,
                t._a || (t._a = t._c.slice()),
                O(t, !0))
            }
            , B = function(e) {
                var t, n = this;
                if (!n._d) {
                    n._d = !0,
                    n = n._w || n;
                    try {
                        if (n === e)
                            throw w("Promise can't be resolved itself");
                        (t = T(e)) ? b(function() {
                            var r = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                t.call(e, s(B, r, 1), s(R, r, 1))
                            } catch (e) {
                                R.call(r, e)
                            }
                        }) : (n._v = e,
                        n._s = 1,
                        O(n, !1))
                    } catch (e) {
                        R.call({
                            _w: n,
                            _d: !1
                        }, e)
                    }
                }
            }
            ;
            M || (S = function(e) {
                h(this, S, m, "_h"),
                d(e),
                o.call(this);
                try {
                    e(s(B, this, 1), s(R, this, 1))
                } catch (e) {
                    R.call(this, e)
                }
            }
            ,
            o = function(e) {
                this._c = [],
                this._a = n,
                this._s = 0,
                this._d = !1,
                this._v = n,
                this._h = 0,
                this._n = !1
            }
            ,
            o.prototype = r(202)(S.prototype, {
                then: function(e, t) {
                    var r = P(g(this, S));
                    return r.ok = "function" != typeof e || e,
                    r.fail = "function" == typeof t && t,
                    r.domain = k ? _.domain : n,
                    this._c.push(r),
                    this._a && this._a.push(r),
                    this._s && O(this, !1),
                    r.promise
                },
                catch: function(e) {
                    return this.then(n, e)
                }
            }),
            C = function() {
                var e = new o;
                this.promise = e,
                this.resolve = s(B, e, 1),
                this.reject = s(R, e, 1)
            }
            ),
            l(l.G + l.W + l.F * !M, {
                Promise: S
            }),
            r(22)(S, m),
            r(186)(m),
            a = r(7)[m],
            l(l.S + l.F * !M, m, {
                reject: function(e) {
                    var t = P(this)
                      , n = t.reject;
                    return n(e),
                    t.promise
                }
            }),
            l(l.S + l.F * (u || !M), m, {
                resolve: function(e) {
                    if (e instanceof S && A(e.constructor, this))
                        return e;
                    var t = P(this)
                      , n = t.resolve;
                    return n(e),
                    t.promise
                }
            }),
            l(l.S + l.F * !(M && r(157)(function(e) {
                S.all(e).catch(x)
            })), m, {
                all: function(e) {
                    var t = this
                      , r = P(t)
                      , o = r.resolve
                      , i = r.reject
                      , a = E(function() {
                        var r = []
                          , a = 0
                          , u = 1;
                        v(e, !1, function(e) {
                            var c = a++
                              , s = !1;
                            r.push(n),
                            u++,
                            t.resolve(e).then(function(e) {
                                s || (s = !0,
                                r[c] = e,
                                --u || o(r))
                            }, i)
                        }),
                        --u || o(r)
                    });
                    return a && i(a.error),
                    r.promise
                },
                race: function(e) {
                    var t = this
                      , n = P(t)
                      , r = n.reject
                      , o = E(function() {
                        v(e, !1, function(e) {
                            t.resolve(e).then(n.resolve, r)
                        })
                    });
                    return o && r(o.error),
                    n.promise
                }
            })
        }
        , function(e, t) {
            e.exports = function(e, t, r, o) {
                if (!(e instanceof t) || o !== n && o in e)
                    throw TypeError(r + ": incorrect invocation!");
                return e
            }
        }
        , function(e, t, n) {
            var r = n(18)
              , o = n(153)
              , i = n(154)
              , a = n(10)
              , u = n(35)
              , c = n(156)
              , s = {}
              , f = {}
              , t = e.exports = function(e, t, n, l, p) {
                var d, h, v, g, y = p ? function() {
                    return e
                }
                : c(e), b = r(n, l, t ? 2 : 1), m = 0;
                if ("function" != typeof y)
                    throw TypeError(e + " is not iterable!");
                if (i(y)) {
                    for (d = u(e.length); d > m; m++)
                        if (g = t ? b(a(h = e[m])[0], h[1]) : b(e[m]),
                        g === s || g === f)
                            return g
                } else
                    for (v = y.call(e); !(h = v.next()).done; )
                        if (g = o(v, b, h.value, t),
                        g === s || g === f)
                            return g
            }
            ;
            t.BREAK = s,
            t.RETURN = f
        }
        , function(e, t, r) {
            var o = r(10)
              , i = r(19)
              , a = r(23)("species");
            e.exports = function(e, t) {
                var r, u = o(e).constructor;
                return u === n || (r = o(u)[a]) == n ? t : i(r)
            }
        }
        , function(e, t, n) {
            var r, o, i, a = n(18), u = n(76), c = n(46), s = n(13), f = n(2), l = f.process, p = f.setImmediate, d = f.clearImmediate, h = f.MessageChannel, v = 0, g = {}, y = "onreadystatechange", b = function() {
                var e = +this;
                if (g.hasOwnProperty(e)) {
                    var t = g[e];
                    delete g[e],
                    t()
                }
            }
            , m = function(e) {
                b.call(e.data)
            }
            ;
            p && d || (p = function(e) {
                for (var t = [], n = 1; arguments.length > n; )
                    t.push(arguments[n++]);
                return g[++v] = function() {
                    u("function" == typeof e ? e : Function(e), t)
                }
                ,
                r(v),
                v
            }
            ,
            d = function(e) {
                delete g[e]
            }
            ,
            "process" == n(32)(l) ? r = function(e) {
                l.nextTick(a(b, e, 1))
            }
            : h ? (o = new h,
            i = o.port2,
            o.port1.onmessage = m,
            r = a(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(e) {
                f.postMessage(e + "", "*")
            }
            ,
            f.addEventListener("message", m, !1)) : r = y in s("script") ? function(e) {
                c.appendChild(s("script"))[y] = function() {
                    c.removeChild(this),
                    b.call(e)
                }
            }
            : function(e) {
                setTimeout(a(b, e, 1), 0)
            }
            ),
            e.exports = {
                set: p,
                clear: d
            }
        }
        , function(e, t, r) {
            var o = r(2)
              , i = r(200).set
              , a = o.MutationObserver || o.WebKitMutationObserver
              , u = o.process
              , c = o.Promise
              , s = "process" == r(32)(u);
            e.exports = function() {
                var e, t, r, f = function() {
                    var o, i;
                    for (s && (o = u.domain) && o.exit(); e; ) {
                        i = e.fn,
                        e = e.next;
                        try {
                            i()
                        } catch (o) {
                            throw e ? r() : t = n,
                            o
                        }
                    }
                    t = n,
                    o && o.enter()
                }
                ;
                if (s)
                    r = function() {
                        u.nextTick(f)
                    }
                    ;
                else if (a) {
                    var l = !0
                      , p = document.createTextNode("");
                    new a(f).observe(p, {
                        characterData: !0
                    }),
                    r = function() {
                        p.data = l = !l
                    }
                } else if (c && c.resolve) {
                    var d = c.resolve();
                    r = function() {
                        d.then(f)
                    }
                } else
                    r = function() {
                        i.call(o, f)
                    }
                    ;
                return function(o) {
                    var i = {
                        fn: o,
                        next: n
                    };
                    t && (t.next = i),
                    e || (e = i,
                    r()),
                    t = i
                }
            }
        }
        , function(e, t, n) {
            var r = n(16);
            e.exports = function(e, t, n) {
                for (var o in t)
                    r(e, o, t[o], n);
                return e
            }
        }
        , function(e, t, r) {
            var o = r(204);
            e.exports = r(205)("Map", function(e) {
                return function() {
                    return e(this, arguments.length > 0 ? arguments[0] : n)
                }
            }, {
                get: function(e) {
                    var t = o.getEntry(this, e);
                    return t && t.v
                },
                set: function(e, t) {
                    return o.def(this, 0 === e ? 0 : e, t)
                }
            }, o, !0)
        }
        , function(e, t, r) {
            var o = r(9).f
              , i = r(44)
              , a = r(202)
              , u = r(18)
              , c = r(197)
              , s = r(33)
              , f = r(198)
              , l = r(134)
              , p = r(184)
              , d = r(186)
              , h = r(4)
              , v = r(20).fastKey
              , g = h ? "_s" : "size"
              , y = function(e, t) {
                var n, r = v(t);
                if ("F" !== r)
                    return e._i[r];
                for (n = e._f; n; n = n.n)
                    if (n.k == t)
                        return n
            }
            ;
            e.exports = {
                getConstructor: function(e, t, r, l) {
                    var p = e(function(e, o) {
                        c(e, p, t, "_i"),
                        e._i = i(null ),
                        e._f = n,
                        e._l = n,
                        e[g] = 0,
                        o != n && f(o, r, e[l], e)
                    });
                    return a(p.prototype, {
                        clear: function() {
                            for (var e = this, t = e._i, r = e._f; r; r = r.n)
                                r.r = !0,
                                r.p && (r.p = r.p.n = n),
                                delete t[r.i];
                            e._f = e._l = n,
                            e[g] = 0
                        },
                        delete: function(e) {
                            var t = this
                              , n = y(t, e);
                            if (n) {
                                var r = n.n
                                  , o = n.p;
                                delete t._i[n.i],
                                n.r = !0,
                                o && (o.n = r),
                                r && (r.p = o),
                                t._f == n && (t._f = r),
                                t._l == n && (t._l = o),
                                t[g]--
                            }
                            return !!n
                        },
                        forEach: function(e) {
                            c(this, p, "forEach");
                            for (var t, r = u(e, arguments.length > 1 ? arguments[1] : n, 3); t = t ? t.n : this._f; )
                                for (r(t.v, t.k, this); t && t.r; )
                                    t = t.p
                        },
                        has: function(e) {
                            return !!y(this, e)
                        }
                    }),
                    h && o(p.prototype, "size", {
                        get: function() {
                            return s(this[g])
                        }
                    }),
                    p
                },
                def: function(e, t, r) {
                    var o, i, a = y(e, t);
                    return a ? a.v = r : (e._l = a = {
                        i: i = v(t, !0),
                        k: t,
                        v: r,
                        p: o = e._l,
                        n: n,
                        r: !1
                    },
                    e._f || (e._f = a),
                    o && (o.n = a),
                    e[g]++,
                    "F" !== i && (e._i[i] = a)),
                    e
                },
                getEntry: y,
                setStrong: function(e, t, r) {
                    l(e, t, function(e, t) {
                        this._t = e,
                        this._k = t,
                        this._l = n
                    }, function() {
                        for (var e = this, t = e._k, r = e._l; r && r.r; )
                            r = r.p;
                        return e._t && (e._l = r = r ? r.n : e._t._f) ? "keys" == t ? p(0, r.k) : "values" == t ? p(0, r.v) : p(0, [r.k, r.v]) : (e._t = n,
                        p(1))
                    }, r ? "entries" : "values", !r, !0),
                    d(t)
                }
            }
        }
        , function(e, t, r) {
            var o = r(2)
              , i = r(6)
              , a = r(16)
              , u = r(202)
              , c = r(20)
              , s = r(198)
              , f = r(197)
              , l = r(11)
              , p = r(5)
              , d = r(157)
              , h = r(22)
              , v = r(80);
            e.exports = function(e, t, r, g, y, b) {
                var m = o[e]
                  , w = m
                  , _ = y ? "set" : "add"
                  , S = w && w.prototype
                  , k = {}
                  , x = function(e) {
                    var t = S[e];
                    a(S, e, "delete" == e ? function(e) {
                        return !(b && !l(e)) && t.call(this, 0 === e ? 0 : e)
                    }
                    : "has" == e ? function(e) {
                        return !(b && !l(e)) && t.call(this, 0 === e ? 0 : e)
                    }
                    : "get" == e ? function(e) {
                        return b && !l(e) ? n : t.call(this, 0 === e ? 0 : e)
                    }
                    : "add" == e ? function(e) {
                        return t.call(this, 0 === e ? 0 : e),
                        this
                    }
                    : function(e, n) {
                        return t.call(this, 0 === e ? 0 : e, n),
                        this
                    }
                    )
                }
                ;
                if ("function" == typeof w && (b || S.forEach && !p(function() {
                    (new w).entries().next()
                }))) {
                    var M = new w
                      , A = M[_](b ? {} : -0, 1) != M
                      , T = p(function() {
                        M.has(1)
                    })
                      , P = d(function(e) {
                        new w(e)
                    })
                      , C = !b && p(function() {
                        for (var e = new w, t = 5; t--; )
                            e[_](t, t);
                        return !e.has(-0)
                    });
                    P || (w = t(function(t, r) {
                        f(t, w, e);
                        var o = v(new m, t, w);
                        return r != n && s(r, y, o[_], o),
                        o
                    }),
                    w.prototype = S,
                    S.constructor = w),
                    (T || C) && (x("delete"),
                    x("has"),
                    y && x("get")),
                    (C || A) && x(_),
                    b && S.clear && delete S.clear
                } else
                    w = g.getConstructor(t, e, y, _),
                    u(w.prototype, r),
                    c.NEED = !0;
                return h(w, e),
                k[e] = w,
                i(i.G + i.W + i.F * (w != m), k),
                b || g.setStrong(w, e, y),
                w
            }
        }
        , function(e, t, r) {
            var o = r(204);
            e.exports = r(205)("Set", function(e) {
                return function() {
                    return e(this, arguments.length > 0 ? arguments[0] : n)
                }
            }, {
                add: function(e) {
                    return o.def(this, e = 0 === e ? 0 : e, e)
                }
            }, o)
        }
        , function(e, t, r) {
            var o, i = r(164)(0), a = r(16), u = r(20), c = r(67), s = r(208), f = r(11), l = u.getWeak, p = Object.isExtensible, d = s.ufstore, h = {}, v = function(e) {
                return function() {
                    return e(this, arguments.length > 0 ? arguments[0] : n)
                }
            }
            , g = {
                get: function(e) {
                    if (f(e)) {
                        var t = l(e);
                        return t === !0 ? d(this).get(e) : t ? t[this._i] : n
                    }
                },
                set: function(e, t) {
                    return s.def(this, e, t)
                }
            }, y = e.exports = r(205)("WeakMap", v, g, s, !0, !0);
            7 != (new y).set((Object.freeze || Object)(h), 7).get(h) && (o = s.getConstructor(v),
            c(o.prototype, g),
            u.NEED = !0,
            i(["delete", "has", "get", "set"], function(e) {
                var t = y.prototype
                  , n = t[e];
                a(t, e, function(t, r) {
                    if (f(t) && !p(t)) {
                        this._f || (this._f = new o);
                        var i = this._f[e](t, r);
                        return "set" == e ? this : i
                    }
                    return n.call(this, t, r)
                })
            }))
        }
        , function(e, t, r) {
            var o = r(202)
              , i = r(20).getWeak
              , a = r(10)
              , u = r(11)
              , c = r(197)
              , s = r(198)
              , f = r(164)
              , l = r(3)
              , p = f(5)
              , d = f(6)
              , h = 0
              , v = function(e) {
                return e._l || (e._l = new g)
            }
              , g = function() {
                this.a = []
            }
              , y = function(e, t) {
                return p(e.a, function(e) {
                    return e[0] === t
                })
            }
            ;
            g.prototype = {
                get: function(e) {
                    var t = y(this, e);
                    if (t)
                        return t[1]
                },
                has: function(e) {
                    return !!y(this, e)
                },
                set: function(e, t) {
                    var n = y(this, e);
                    n ? n[1] = t : this.a.push([e, t])
                },
                delete: function(e) {
                    var t = d(this.a, function(t) {
                        return t[0] === e
                    });
                    return ~t && this.a.splice(t, 1),
                    !!~t
                }
            },
            e.exports = {
                getConstructor: function(e, t, r, a) {
                    var f = e(function(e, o) {
                        c(e, f, t, "_i"),
                        e._i = h++,
                        e._l = n,
                        o != n && s(o, r, e[a], e)
                    });
                    return o(f.prototype, {
                        delete: function(e) {
                            if (!u(e))
                                return !1;
                            var t = i(e);
                            return t === !0 ? v(this).delete(e) : t && l(t, this._i) && delete t[this._i]
                        },
                        has: function(e) {
                            if (!u(e))
                                return !1;
                            var t = i(e);
                            return t === !0 ? v(this).has(e) : t && l(t, this._i)
                        }
                    }),
                    f
                },
                def: function(e, t, n) {
                    var r = i(a(t), !0);
                    return r === !0 ? v(e).set(t, n) : r[e._i] = n,
                    e
                },
                ufstore: v
            }
        }
        , function(e, t, r) {
            var o = r(208);
            r(205)("WeakSet", function(e) {
                return function() {
                    return e(this, arguments.length > 0 ? arguments[0] : n)
                }
            }, {
                add: function(e) {
                    return o.def(this, e, !0)
                }
            }, o, !1, !0)
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(19)
              , i = n(10)
              , a = (n(2).Reflect || {}).apply
              , u = Function.apply;
            r(r.S + r.F * !n(5)(function() {
                a(function() {})
            }), "Reflect", {
                apply: function(e, t, n) {
                    var r = o(e)
                      , c = i(n);
                    return a ? a(r, t, c) : u.call(r, t, c)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(44)
              , i = n(19)
              , a = n(10)
              , u = n(11)
              , c = n(5)
              , s = n(75)
              , f = (n(2).Reflect || {}).construct
              , l = c(function() {
                function e() {}
                return !(f(function() {}, [], e)instanceof e)
            })
              , p = !c(function() {
                f(function() {})
            });
            r(r.S + r.F * (l || p), "Reflect", {
                construct: function(e, t) {
                    i(e),
                    a(t);
                    var n = arguments.length < 3 ? e : i(arguments[2]);
                    if (p && !l)
                        return f(e, t, n);
                    if (e == n) {
                        switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0],t[1]);
                        case 3:
                            return new e(t[0],t[1],t[2]);
                        case 4:
                            return new e(t[0],t[1],t[2],t[3])
                        }
                        var r = [null ];
                        return r.push.apply(r, t),
                        new (s.apply(e, r))
                    }
                    var c = n.prototype
                      , d = o(u(c) ? c : Object.prototype)
                      , h = Function.apply.call(e, d, t);
                    return u(h) ? h : d
                }
            })
        }
        , function(e, t, n) {
            var r = n(9)
              , o = n(6)
              , i = n(10)
              , a = n(14);
            o(o.S + o.F * n(5)(function() {
                Reflect.defineProperty(r.f({}, 1, {
                    value: 1
                }), 1, {
                    value: 2
                })
            }), "Reflect", {
                defineProperty: function(e, t, n) {
                    i(e),
                    t = a(t, !0),
                    i(n);
                    try {
                        return r.f(e, t, n),
                        !0
                    } catch (e) {
                        return !1
                    }
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(49).f
              , i = n(10);
            r(r.S, "Reflect", {
                deleteProperty: function(e, t) {
                    var n = o(i(e), t);
                    return !(n && !n.configurable) && delete e[t]
                }
            })
        }
        , function(e, t, r) {
            var o = r(6)
              , i = r(10)
              , a = function(e) {
                this._t = i(e),
                this._i = 0;
                var t, n = this._k = [];
                for (t in e)
                    n.push(t)
            }
            ;
            r(136)(a, "Object", function() {
                var e, t = this, r = t._k;
                do
                    if (t._i >= r.length)
                        return {
                            value: n,
                            done: !0
                        };
                while (!((e = r[t._i++])in t._t));return {
                    value: e,
                    done: !1
                }
            }),
            o(o.S, "Reflect", {
                enumerate: function(e) {
                    return new a(e)
                }
            })
        }
        , function(e, t, r) {
            function o(e, t) {
                var r, c, l = arguments.length < 3 ? e : arguments[2];
                return f(e) === l ? e[t] : (r = i.f(e, t)) ? u(r, "value") ? r.value : r.get !== n ? r.get.call(l) : n : s(c = a(e)) ? o(c, t, l) : void 0
            }
            var i = r(49)
              , a = r(57)
              , u = r(3)
              , c = r(6)
              , s = r(11)
              , f = r(10);
            c(c.S, "Reflect", {
                get: o
            })
        }
        , function(e, t, n) {
            var r = n(49)
              , o = n(6)
              , i = n(10);
            o(o.S, "Reflect", {
                getOwnPropertyDescriptor: function(e, t) {
                    return r.f(i(e), t)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(57)
              , i = n(10);
            r(r.S, "Reflect", {
                getPrototypeOf: function(e) {
                    return o(i(e))
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Reflect", {
                has: function(e, t) {
                    return t in e
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(10)
              , i = Object.isExtensible;
            r(r.S, "Reflect", {
                isExtensible: function(e) {
                    return o(e),
                    !i || i(e)
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Reflect", {
                ownKeys: n(221)
            })
        }
        , function(e, t, n) {
            var r = n(48)
              , o = n(41)
              , i = n(10)
              , a = n(2).Reflect;
            e.exports = a && a.ownKeys || function(e) {
                var t = r.f(i(e))
                  , n = o.f;
                return n ? t.concat(n(e)) : t
            }
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(10)
              , i = Object.preventExtensions;
            r(r.S, "Reflect", {
                preventExtensions: function(e) {
                    o(e);
                    try {
                        return i && i(e),
                        !0
                    } catch (e) {
                        return !1
                    }
                }
            })
        }
        , function(e, t, r) {
            function o(e, t, r) {
                var s, d, h = arguments.length < 4 ? e : arguments[3], v = a.f(l(e), t);
                if (!v) {
                    if (p(d = u(e)))
                        return o(d, t, r, h);
                    v = f(0)
                }
                return c(v, "value") ? !(v.writable === !1 || !p(h)) && (s = a.f(h, t) || f(0),
                s.value = r,
                i.f(h, t, s),
                !0) : v.set !== n && (v.set.call(h, r),
                !0)
            }
            var i = r(9)
              , a = r(49)
              , u = r(57)
              , c = r(3)
              , s = r(6)
              , f = r(15)
              , l = r(10)
              , p = r(11);
            s(s.S, "Reflect", {
                set: o
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(71);
            o && r(r.S, "Reflect", {
                setPrototypeOf: function(e, t) {
                    o.check(e, t);
                    try {
                        return o.set(e, t),
                        !0
                    } catch (e) {
                        return !1
                    }
                }
            })
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.S, "Date", {
                now: function() {
                    return (new Date).getTime()
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(56)
              , i = n(14);
            r(r.P + r.F * n(5)(function() {
                return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                    toISOString: function() {
                        return 1
                    }
                })
            }), "Date", {
                toJSON: function(e) {
                    var t = o(this)
                      , n = i(t);
                    return "number" != typeof n || isFinite(n) ? t.toISOString() : null
                }
            })
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(5)
              , i = Date.prototype.getTime
              , a = function(e) {
                return e > 9 ? e : "0" + e
            }
            ;
            r(r.P + r.F * (o(function() {
                return "0385-07-25T07:06:39.999Z" != new Date(-5e13 - 1).toISOString()
            }) || !o(function() {
                new Date(NaN).toISOString()
            })), "Date", {
                toISOString: function() {
                    if (!isFinite(i.call(this)))
                        throw RangeError("Invalid time value");
                    var e = this
                      , t = e.getUTCFullYear()
                      , n = e.getUTCMilliseconds()
                      , r = t < 0 ? "-" : t > 9999 ? "+" : "";
                    return r + ("00000" + Math.abs(t)).slice(r ? -6 : -4) + "-" + a(e.getUTCMonth() + 1) + "-" + a(e.getUTCDate()) + "T" + a(e.getUTCHours()) + ":" + a(e.getUTCMinutes()) + ":" + a(e.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z"
                }
            })
        }
        , function(e, t, n) {
            var r = Date.prototype
              , o = "Invalid Date"
              , i = "toString"
              , a = r[i]
              , u = r.getTime;
            new Date(NaN) + "" != o && n(16)(r, i, function() {
                var e = u.call(this);
                return e === e ? a.call(this) : o
            })
        }
        , function(e, t, n) {
            var r = n(23)("toPrimitive")
              , o = Date.prototype;
            r in o || n(8)(o, r, n(230))
        }
        , function(e, t, n) {
            var r = n(10)
              , o = n(14)
              , i = "number";
            e.exports = function(e) {
                if ("string" !== e && e !== i && "default" !== e)
                    throw TypeError("Incorrect hint");
                return o(r(this), e != i)
            }
        }
        , function(e, t, r) {
            var o = r(6)
              , i = r(232)
              , a = r(233)
              , u = r(10)
              , c = r(37)
              , s = r(35)
              , f = r(11)
              , l = r(2).ArrayBuffer
              , p = r(199)
              , d = a.ArrayBuffer
              , h = a.DataView
              , v = i.ABV && l.isView
              , g = d.prototype.slice
              , y = i.VIEW
              , b = "ArrayBuffer";
            o(o.G + o.W + o.F * (l !== d), {
                ArrayBuffer: d
            }),
            o(o.S + o.F * !i.CONSTR, b, {
                isView: function(e) {
                    return v && v(e) || f(e) && y in e
                }
            }),
            o(o.P + o.U + o.F * r(5)(function() {
                return !new d(2).slice(1, n).byteLength
            }), b, {
                slice: function(e, t) {
                    if (g !== n && t === n)
                        return g.call(u(this), e);
                    for (var r = u(this).byteLength, o = c(e, r), i = c(t === n ? r : t, r), a = new (p(this, d))(s(i - o)), f = new h(this), l = new h(a), v = 0; o < i; )
                        l.setUint8(v++, f.getUint8(o++));
                    return a
                }
            }),
            r(186)(b)
        }
        , function(e, t, n) {
            for (var r, o = n(2), i = n(8), a = n(17), u = a("typed_array"), c = a("view"), s = !(!o.ArrayBuffer || !o.DataView), f = s, l = 0, p = 9, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < p; )
                (r = o[d[l++]]) ? (i(r.prototype, u, !0),
                i(r.prototype, c, !0)) : f = !1;
            e.exports = {
                ABV: s,
                CONSTR: f,
                TYPED: u,
                VIEW: c
            }
        }
        , function(e, t, r) {
            var o = r(2)
              , i = r(4)
              , a = r(26)
              , u = r(232)
              , c = r(8)
              , s = r(202)
              , f = r(5)
              , l = r(197)
              , p = r(36)
              , d = r(35)
              , h = r(48).f
              , v = r(9).f
              , g = r(180)
              , y = r(22)
              , b = "ArrayBuffer"
              , m = "DataView"
              , w = "prototype"
              , _ = "Wrong length!"
              , S = "Wrong index!"
              , k = o[b]
              , x = o[m]
              , M = o.Math
              , A = o.RangeError
              , T = o.Infinity
              , P = k
              , C = M.abs
              , E = M.pow
              , O = M.floor
              , I = M.log
              , j = M.LN2
              , D = "buffer"
              , R = "byteLength"
              , B = "byteOffset"
              , F = i ? "_b" : D
              , N = i ? "_l" : R
              , L = i ? "_o" : B
              , U = function(e, t, n) {
                var r, o, i, a = Array(n), u = 8 * n - t - 1, c = (1 << u) - 1, s = c >> 1, f = 23 === t ? E(2, -24) - E(2, -77) : 0, l = 0, p = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = C(e),
                e != e || e === T ? (o = e != e ? 1 : 0,
                r = c) : (r = O(I(e) / j),
                e * (i = E(2, -r)) < 1 && (r--,
                i *= 2),
                e += r + s >= 1 ? f / i : f * E(2, 1 - s),
                e * i >= 2 && (r++,
                i /= 2),
                r + s >= c ? (o = 0,
                r = c) : r + s >= 1 ? (o = (e * i - 1) * E(2, t),
                r += s) : (o = e * E(2, s - 1) * E(2, t),
                r = 0)); t >= 8; a[l++] = 255 & o,
                o /= 256,
                t -= 8)
                    ;
                for (r = r << t | o,
                u += t; u > 0; a[l++] = 255 & r,
                r /= 256,
                u -= 8)
                    ;
                return a[--l] |= 128 * p,
                a
            }
              , W = function(e, t, n) {
                var r, o = 8 * n - t - 1, i = (1 << o) - 1, a = i >> 1, u = o - 7, c = n - 1, s = e[c--], f = 127 & s;
                for (s >>= 7; u > 0; f = 256 * f + e[c],
                c--,
                u -= 8)
                    ;
                for (r = f & (1 << -u) - 1,
                f >>= -u,
                u += t; u > 0; r = 256 * r + e[c],
                c--,
                u -= 8)
                    ;
                if (0 === f)
                    f = 1 - a;
                else {
                    if (f === i)
                        return r ? NaN : s ? -T : T;
                    r += E(2, t),
                    f -= a
                }
                return (s ? -1 : 1) * r * E(2, f - t)
            }
              , V = function(e) {
                return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
            }
              , J = function(e) {
                return [255 & e]
            }
              , K = function(e) {
                return [255 & e, e >> 8 & 255]
            }
              , G = function(e) {
                return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
            }
              , q = function(e) {
                return U(e, 52, 8)
            }
              , H = function(e) {
                return U(e, 23, 4)
            }
              , $ = function(e, t, n) {
                v(e[w], t, {
                    get: function() {
                        return this[n]
                    }
                })
            }
              , X = function(e, t, n, r) {
                var o = +n
                  , i = p(o);
                if (o != i || i < 0 || i + t > e[N])
                    throw A(S);
                var a = e[F]._b
                  , u = i + e[L]
                  , c = a.slice(u, u + t);
                return r ? c : c.reverse()
            }
              , Y = function(e, t, n, r, o, i) {
                var a = +n
                  , u = p(a);
                if (a != u || u < 0 || u + t > e[N])
                    throw A(S);
                for (var c = e[F]._b, s = u + e[L], f = r(+o), l = 0; l < t; l++)
                    c[s + l] = f[i ? l : t - l - 1]
            }
              , z = function(e, t) {
                l(e, k, b);
                var n = +t
                  , r = d(n);
                if (n != r)
                    throw A(_);
                return r
            }
            ;
            if (u.ABV) {
                if (!f(function() {
                    new k
                }) || !f(function() {
                    new k(.5)
                })) {
                    k = function(e) {
                        return new P(z(this, e))
                    }
                    ;
                    for (var Z, Q = k[w] = P[w], ee = h(P), te = 0; ee.length > te; )
                        (Z = ee[te++])in k || c(k, Z, P[Z]);
                    a || (Q.constructor = k)
                }
                var ne = new x(new k(2))
                  , re = x[w].setInt8;
                ne.setInt8(0, 2147483648),
                ne.setInt8(1, 2147483649),
                !ne.getInt8(0) && ne.getInt8(1) || s(x[w], {
                    setInt8: function(e, t) {
                        re.call(this, e, t << 24 >> 24)
                    },
                    setUint8: function(e, t) {
                        re.call(this, e, t << 24 >> 24)
                    }
                }, !0)
            } else
                k = function(e) {
                    var t = z(this, e);
                    this._b = g.call(Array(t), 0),
                    this[N] = t
                }
                ,
                x = function(e, t, r) {
                    l(this, x, m),
                    l(e, k, m);
                    var o = e[N]
                      , i = p(t);
                    if (i < 0 || i > o)
                        throw A("Wrong offset!");
                    if (r = r === n ? o - i : d(r),
                    i + r > o)
                        throw A(_);
                    this[F] = e,
                    this[L] = i,
                    this[N] = r
                }
                ,
                i && ($(k, R, "_l"),
                $(x, D, "_b"),
                $(x, R, "_l"),
                $(x, B, "_o")),
                s(x[w], {
                    getInt8: function(e) {
                        return X(this, 1, e)[0] << 24 >> 24
                    },
                    getUint8: function(e) {
                        return X(this, 1, e)[0]
                    },
                    getInt16: function(e) {
                        var t = X(this, 2, e, arguments[1]);
                        return (t[1] << 8 | t[0]) << 16 >> 16
                    },
                    getUint16: function(e) {
                        var t = X(this, 2, e, arguments[1]);
                        return t[1] << 8 | t[0]
                    },
                    getInt32: function(e) {
                        return V(X(this, 4, e, arguments[1]))
                    },
                    getUint32: function(e) {
                        return V(X(this, 4, e, arguments[1])) >>> 0
                    },
                    getFloat32: function(e) {
                        return W(X(this, 4, e, arguments[1]), 23, 4)
                    },
                    getFloat64: function(e) {
                        return W(X(this, 8, e, arguments[1]), 52, 8)
                    },
                    setInt8: function(e, t) {
                        Y(this, 1, e, J, t)
                    },
                    setUint8: function(e, t) {
                        Y(this, 1, e, J, t)
                    },
                    setInt16: function(e, t) {
                        Y(this, 2, e, K, t, arguments[2])
                    },
                    setUint16: function(e, t) {
                        Y(this, 2, e, K, t, arguments[2])
                    },
                    setInt32: function(e, t) {
                        Y(this, 4, e, G, t, arguments[2])
                    },
                    setUint32: function(e, t) {
                        Y(this, 4, e, G, t, arguments[2])
                    },
                    setFloat32: function(e, t) {
                        Y(this, 4, e, H, t, arguments[2])
                    },
                    setFloat64: function(e, t) {
                        Y(this, 8, e, q, t, arguments[2])
                    }
                });
            y(k, b),
            y(x, m),
            c(x[w], u.VIEW, !0),
            t[b] = k,
            t[m] = x
        }
        , function(e, t, n) {
            var r = n(6);
            r(r.G + r.W + r.F * !n(232).ABV, {
                DataView: n(233).DataView
            })
        }
        , function(e, t, n) {
            n(236)("Int8", 1, function(e) {
                return function(t, n, r) {
                    return e(this, t, n, r)
                }
            })
        }
        , function(e, t, r) {
            if (r(4)) {
                var o = r(26)
                  , i = r(2)
                  , a = r(5)
                  , u = r(6)
                  , c = r(232)
                  , s = r(233)
                  , f = r(18)
                  , l = r(197)
                  , p = r(15)
                  , d = r(8)
                  , h = r(202)
                  , v = r(36)
                  , g = r(35)
                  , y = r(37)
                  , b = r(14)
                  , m = r(3)
                  , w = r(69)
                  , _ = r(73)
                  , S = r(11)
                  , k = r(56)
                  , x = r(154)
                  , M = r(44)
                  , A = r(57)
                  , T = r(48).f
                  , P = r(156)
                  , C = r(17)
                  , E = r(23)
                  , O = r(164)
                  , I = r(34)
                  , j = r(199)
                  , D = r(183)
                  , R = r(135)
                  , B = r(157)
                  , F = r(186)
                  , N = r(180)
                  , L = r(177)
                  , U = r(9)
                  , W = r(49)
                  , V = U.f
                  , J = W.f
                  , K = i.RangeError
                  , G = i.TypeError
                  , q = i.Uint8Array
                  , H = "ArrayBuffer"
                  , $ = "Shared" + H
                  , X = "BYTES_PER_ELEMENT"
                  , Y = "prototype"
                  , z = Array[Y]
                  , Z = s.ArrayBuffer
                  , Q = s.DataView
                  , ee = O(0)
                  , te = O(2)
                  , ne = O(3)
                  , re = O(4)
                  , oe = O(5)
                  , ie = O(6)
                  , ae = I(!0)
                  , ue = I(!1)
                  , ce = D.values
                  , se = D.keys
                  , fe = D.entries
                  , le = z.lastIndexOf
                  , pe = z.reduce
                  , de = z.reduceRight
                  , he = z.join
                  , ve = z.sort
                  , ge = z.slice
                  , ye = z.toString
                  , be = z.toLocaleString
                  , me = E("iterator")
                  , we = E("toStringTag")
                  , _e = C("typed_constructor")
                  , Se = C("def_constructor")
                  , ke = c.CONSTR
                  , xe = c.TYPED
                  , Me = c.VIEW
                  , Ae = "Wrong length!"
                  , Te = O(1, function(e, t) {
                    return je(j(e, e[Se]), t)
                })
                  , Pe = a(function() {
                    return 1 === new q(new Uint16Array([1]).buffer)[0]
                })
                  , Ce = !!q && !!q[Y].set && a(function() {
                    new q(1).set({})
                })
                  , Ee = function(e, t) {
                    if (e === n)
                        throw G(Ae);
                    var r = +e
                      , o = g(e);
                    if (t && !w(r, o))
                        throw K(Ae);
                    return o
                }
                  , Oe = function(e, t) {
                    var n = v(e);
                    if (n < 0 || n % t)
                        throw K("Wrong offset!");
                    return n
                }
                  , Ie = function(e) {
                    if (S(e) && xe in e)
                        return e;
                    throw G(e + " is not a typed array!")
                }
                  , je = function(e, t) {
                    if (!(S(e) && _e in e))
                        throw G("It is not a typed array constructor!");
                    return new e(t)
                }
                  , De = function(e, t) {
                    return Re(j(e, e[Se]), t)
                }
                  , Re = function(e, t) {
                    for (var n = 0, r = t.length, o = je(e, r); r > n; )
                        o[n] = t[n++];
                    return o
                }
                  , Be = function(e, t, n) {
                    V(e, t, {
                        get: function() {
                            return this._d[n]
                        }
                    })
                }
                  , Fe = function(e) {
                    var t, r, o, i, a, u, c = k(e), s = arguments.length, l = s > 1 ? arguments[1] : n, p = l !== n, d = P(c);
                    if (d != n && !x(d)) {
                        for (u = d.call(c),
                        o = [],
                        t = 0; !(a = u.next()).done; t++)
                            o.push(a.value);
                        c = o
                    }
                    for (p && s > 2 && (l = f(l, arguments[2], 2)),
                    t = 0,
                    r = g(c.length),
                    i = je(this, r); r > t; t++)
                        i[t] = p ? l(c[t], t) : c[t];
                    return i
                }
                  , Ne = function() {
                    for (var e = 0, t = arguments.length, n = je(this, t); t > e; )
                        n[e] = arguments[e++];
                    return n
                }
                  , Le = !!q && a(function() {
                    be.call(new q(1))
                })
                  , Ue = function() {
                    return be.apply(Le ? ge.call(Ie(this)) : Ie(this), arguments)
                }
                  , We = {
                    copyWithin: function(e, t) {
                        return L.call(Ie(this), e, t, arguments.length > 2 ? arguments[2] : n)
                    },
                    every: function(e) {
                        return re(Ie(this), e, arguments.length > 1 ? arguments[1] : n)
                    },
                    fill: function(e) {
                        return N.apply(Ie(this), arguments)
                    },
                    filter: function(e) {
                        return De(this, te(Ie(this), e, arguments.length > 1 ? arguments[1] : n))
                    },
                    find: function(e) {
                        return oe(Ie(this), e, arguments.length > 1 ? arguments[1] : n)
                    },
                    findIndex: function(e) {
                        return ie(Ie(this), e, arguments.length > 1 ? arguments[1] : n)
                    },
                    forEach: function(e) {
                        ee(Ie(this), e, arguments.length > 1 ? arguments[1] : n)
                    },
                    indexOf: function(e) {
                        return ue(Ie(this), e, arguments.length > 1 ? arguments[1] : n)
                    },
                    includes: function(e) {
                        return ae(Ie(this), e, arguments.length > 1 ? arguments[1] : n)
                    },
                    join: function(e) {
                        return he.apply(Ie(this), arguments)
                    },
                    lastIndexOf: function(e) {
                        return le.apply(Ie(this), arguments)
                    },
                    map: function(e) {
                        return Te(Ie(this), e, arguments.length > 1 ? arguments[1] : n)
                    },
                    reduce: function(e) {
                        return pe.apply(Ie(this), arguments)
                    },
                    reduceRight: function(e) {
                        return de.apply(Ie(this), arguments)
                    },
                    reverse: function() {
                        for (var e, t = this, n = Ie(t).length, r = Math.floor(n / 2), o = 0; o < r; )
                            e = t[o],
                            t[o++] = t[--n],
                            t[n] = e;
                        return t
                    },
                    some: function(e) {
                        return ne(Ie(this), e, arguments.length > 1 ? arguments[1] : n)
                    },
                    sort: function(e) {
                        return ve.call(Ie(this), e)
                    },
                    subarray: function(e, t) {
                        var r = Ie(this)
                          , o = r.length
                          , i = y(e, o);
                        return new (j(r, r[Se]))(r.buffer,r.byteOffset + i * r.BYTES_PER_ELEMENT,g((t === n ? o : y(t, o)) - i))
                    }
                }
                  , Ve = function(e, t) {
                    return De(this, ge.call(Ie(this), e, t))
                }
                  , Je = function(e) {
                    Ie(this);
                    var t = Oe(arguments[1], 1)
                      , n = this.length
                      , r = k(e)
                      , o = g(r.length)
                      , i = 0;
                    if (o + t > n)
                        throw K(Ae);
                    for (; i < o; )
                        this[t + i] = r[i++]
                }
                  , Ke = {
                    entries: function() {
                        return fe.call(Ie(this))
                    },
                    keys: function() {
                        return se.call(Ie(this))
                    },
                    values: function() {
                        return ce.call(Ie(this))
                    }
                }
                  , Ge = function(e, t) {
                    return S(e) && e[xe] && "symbol" != typeof t && t in e && String(+t) == String(t)
                }
                  , qe = function(e, t) {
                    return Ge(e, t = b(t, !0)) ? p(2, e[t]) : J(e, t)
                }
                  , He = function(e, t, n) {
                    return !(Ge(e, t = b(t, !0)) && S(n) && m(n, "value")) || m(n, "get") || m(n, "set") || n.configurable || m(n, "writable") && !n.writable || m(n, "enumerable") && !n.enumerable ? V(e, t, n) : (e[t] = n.value,
                    e)
                }
                ;
                ke || (W.f = qe,
                U.f = He),
                u(u.S + u.F * !ke, "Object", {
                    getOwnPropertyDescriptor: qe,
                    defineProperty: He
                }),
                a(function() {
                    ye.call({})
                }) && (ye = be = function() {
                    return he.call(this)
                }
                );
                var $e = h({}, We);
                h($e, Ke),
                d($e, me, Ke.values),
                h($e, {
                    slice: Ve,
                    set: Je,
                    constructor: function() {},
                    toString: ye,
                    toLocaleString: Ue
                }),
                Be($e, "buffer", "b"),
                Be($e, "byteOffset", "o"),
                Be($e, "byteLength", "l"),
                Be($e, "length", "e"),
                V($e, we, {
                    get: function() {
                        return this[xe]
                    }
                }),
                e.exports = function(e, t, r, s) {
                    s = !!s;
                    var f = e + (s ? "Clamped" : "") + "Array"
                      , p = "Uint8Array" != f
                      , h = "get" + e
                      , v = "set" + e
                      , y = i[f]
                      , b = y || {}
                      , m = y && A(y)
                      , w = !y || !c.ABV
                      , k = {}
                      , x = y && y[Y]
                      , P = function(e, n) {
                        var r = e._d;
                        return r.v[h](n * t + r.o, Pe)
                    }
                      , C = function(e, n, r) {
                        var o = e._d;
                        s && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                        o.v[v](n * t + o.o, r, Pe)
                    }
                      , E = function(e, t) {
                        V(e, t, {
                            get: function() {
                                return P(this, t)
                            },
                            set: function(e) {
                                return C(this, t, e)
                            },
                            enumerable: !0
                        })
                    }
                    ;
                    w ? (y = r(function(e, r, o, i) {
                        l(e, y, f, "_d");
                        var a, u, c, s, p = 0, h = 0;
                        if (S(r)) {
                            if (!(r instanceof Z || (s = _(r)) == H || s == $))
                                return xe in r ? Re(y, r) : Fe.call(y, r);
                            a = r,
                            h = Oe(o, t);
                            var v = r.byteLength;
                            if (i === n) {
                                if (v % t)
                                    throw K(Ae);
                                if (u = v - h,
                                u < 0)
                                    throw K(Ae)
                            } else if (u = g(i) * t,
                            u + h > v)
                                throw K(Ae);
                            c = u / t
                        } else
                            c = Ee(r, !0),
                            u = c * t,
                            a = new Z(u);
                        for (d(e, "_d", {
                            b: a,
                            o: h,
                            l: u,
                            e: c,
                            v: new Q(a)
                        }); p < c; )
                            E(e, p++)
                    }),
                    x = y[Y] = M($e),
                    d(x, "constructor", y)) : B(function(e) {
                        new y(null ),
                        new y(e)
                    }, !0) || (y = r(function(e, r, o, i) {
                        l(e, y, f);
                        var a;
                        return S(r) ? r instanceof Z || (a = _(r)) == H || a == $ ? i !== n ? new b(r,Oe(o, t),i) : o !== n ? new b(r,Oe(o, t)) : new b(r) : xe in r ? Re(y, r) : Fe.call(y, r) : new b(Ee(r, p))
                    }),
                    ee(m !== Function.prototype ? T(b).concat(T(m)) : T(b), function(e) {
                        e in y || d(y, e, b[e])
                    }),
                    y[Y] = x,
                    o || (x.constructor = y));
                    var O = x[me]
                      , I = !!O && ("values" == O.name || O.name == n)
                      , j = Ke.values;
                    d(y, _e, !0),
                    d(x, xe, f),
                    d(x, Me, !0),
                    d(x, Se, y),
                    (s ? new y(1)[we] == f : we in x) || V(x, we, {
                        get: function() {
                            return f
                        }
                    }),
                    k[f] = y,
                    u(u.G + u.W + u.F * (y != b), k),
                    u(u.S, f, {
                        BYTES_PER_ELEMENT: t,
                        from: Fe,
                        of: Ne
                    }),
                    X in x || d(x, X, t),
                    u(u.P, f, We),
                    F(f),
                    u(u.P + u.F * Ce, f, {
                        set: Je
                    }),
                    u(u.P + u.F * !I, f, Ke),
                    u(u.P + u.F * (x.toString != ye), f, {
                        toString: ye
                    }),
                    u(u.P + u.F * a(function() {
                        new y(1).slice()
                    }), f, {
                        slice: Ve
                    }),
                    u(u.P + u.F * (a(function() {
                        return [1, 2].toLocaleString() != new y([1, 2]).toLocaleString()
                    }) || !a(function() {
                        x.toLocaleString.call([1, 2])
                    })), f, {
                        toLocaleString: Ue
                    }),
                    R[f] = I ? O : j,
                    o || I || d(x, me, j)
                }
            } else
                e.exports = function() {}
        }
        , function(e, t, n) {
            n(236)("Uint8", 1, function(e) {
                return function(t, n, r) {
                    return e(this, t, n, r)
                }
            })
        }
        , function(e, t, n) {
            n(236)("Uint8", 1, function(e) {
                return function(t, n, r) {
                    return e(this, t, n, r)
                }
            }, !0)
        }
        , function(e, t, n) {
            n(236)("Int16", 2, function(e) {
                return function(t, n, r) {
                    return e(this, t, n, r)
                }
            })
        }
        , function(e, t, n) {
            n(236)("Uint16", 2, function(e) {
                return function(t, n, r) {
                    return e(this, t, n, r)
                }
            })
        }
        , function(e, t, n) {
            n(236)("Int32", 4, function(e) {
                return function(t, n, r) {
                    return e(this, t, n, r)
                }
            })
        }
        , function(e, t, n) {
            n(236)("Uint32", 4, function(e) {
                return function(t, n, r) {
                    return e(this, t, n, r)
                }
            })
        }
        , function(e, t, n) {
            n(236)("Float32", 4, function(e) {
                return function(t, n, r) {
                    return e(this, t, n, r)
                }
            })
        }
        , function(e, t, n) {
            n(236)("Float64", 8, function(e) {
                return function(t, n, r) {
                    return e(this, t, n, r)
                }
            })
        }
        , function(e, t, r) {
            function o(e) {
                var t = h(null );
                return e != n && (_(e) ? w(e, !0, function(e, n) {
                    t[e] = n
                }) : d(t, e)),
                t
            }
            function i(e, t, n) {
                m(t);
                var r, o, i = M(e), a = g(i), u = a.length, c = 0;
                if (arguments.length < 3) {
                    if (!u)
                        throw TypeError("Reduce of empty object with no initial value");
                    r = i[a[c++]]
                } else
                    r = Object(n);
                for (; u > c; )
                    T(i, o = a[c++]) && (r = t(r, i[o], o, e));
                return r
            }
            function a(e, t) {
                return (t == t ? b(e, t) : C(e, function(e) {
                    return e != e
                })) !== n
            }
            function u(e, t) {
                if (T(e, t))
                    return e[t]
            }
            function c(e, t, n) {
                return A && t in Object ? y.f(e, t, p(0, n)) : e[t] = n,
                e
            }
            function s(e) {
                return x(e) && v(e) === o.prototype
            }
            var f = r(18)
              , l = r(6)
              , p = r(15)
              , d = r(67)
              , h = r(44)
              , v = r(57)
              , g = r(28)
              , y = r(9)
              , b = r(27)
              , m = r(19)
              , w = r(198)
              , _ = r(246)
              , S = r(136)
              , k = r(184)
              , x = r(11)
              , M = r(30)
              , A = r(4)
              , T = r(3)
              , P = function(e) {
                var t = 1 == e
                  , r = 4 == e;
                return function(i, a, u) {
                    var c, s, l, p = f(a, u, 3), d = M(i), h = t || 7 == e || 2 == e ? new ("function" == typeof this ? this : o) : n;
                    for (c in d)
                        if (T(d, c) && (s = d[c],
                        l = p(s, c, i),
                        e))
                            if (t)
                                h[c] = l;
                            else if (l)
                                switch (e) {
                                case 2:
                                    h[c] = s;
                                    break;
                                case 3:
                                    return !0;
                                case 5:
                                    return s;
                                case 6:
                                    return c;
                                case 7:
                                    h[l[0]] = l[1]
                                }
                            else if (r)
                                return !1;
                    return 3 == e || r ? r : h
                }
            }
              , C = P(6)
              , E = function(e) {
                return function(t) {
                    return new O(t,e)
                }
            }
              , O = function(e, t) {
                this._t = M(e),
                this._a = g(e),
                this._i = 0,
                this._k = t
            }
            ;
            S(O, "Dict", function() {
                var e, t = this, r = t._t, o = t._a, i = t._k;
                do
                    if (t._i >= o.length)
                        return t._t = n,
                        k(1);
                while (!T(r, e = o[t._i++]));return "keys" == i ? k(0, e) : "values" == i ? k(0, r[e]) : k(0, [e, r[e]])
            }),
            o.prototype = null ,
            l(l.G + l.F, {
                Dict: o
            }),
            l(l.S, "Dict", {
                keys: E("keys"),
                values: E("values"),
                entries: E("entries"),
                forEach: P(0),
                map: P(1),
                filter: P(2),
                some: P(3),
                every: P(4),
                find: P(5),
                findKey: C,
                mapPairs: P(7),
                reduce: i,
                keyOf: b,
                includes: a,
                has: T,
                get: u,
                set: c,
                isDict: s
            })
        }
        , function(e, t, r) {
            var o = r(73)
              , i = r(23)("iterator")
              , a = r(135);
            e.exports = r(7).isIterable = function(e) {
                var t = Object(e);
                return t[i] !== n || "@@iterator"in t || a.hasOwnProperty(o(t))
            }
        }
        ]),
        "undefined" != typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd ? define(function() {
            return e
        }) : t.core = e
    }(1, 1);
    var WeixinJSBridge = function(e) {
        if ("function" == typeof logxx && logxx("jsbridge start"),
        e.navigator && e.navigator.userAgent) {
            var t = e.navigator.userAgent;
            if (t.indexOf("appservice") > -1 || t.indexOf("wechatdevtools") > -1) {
                var n = e.WeixinJSBridge;
                return delete e.WeixinJSBridge,
                n
            }
        }
        var r = e.hasOwnProperty("document")
          , o = !1
          , i = {}
          , a = 0
          , u = {}
          , c = "custom_event_"
          , s = {};
        if (r) {
            var t = e.navigator.userAgent
              , f = t.indexOf("Android") != -1;
            o = !f
        }
        var l = e.__wxConfig || {}
          , p = e.webkit
          , d = e.WeixinJSCore;
        delete e.webkit,
        ("android" === l.platform || "ios" === l.platform && l.clientVersion) && delete e.WeixinJSCore;
        var h = function(e, t, n) {
            if (o)
                p.messageHandlers.invokeHandler.postMessage({
                    event: e,
                    paramsString: t,
                    callbackId: n
                });
            else {
                var r = d.invokeHandler(e, t, n);
                if ("undefined" != typeof r && "function" == typeof i[n] && "" !== r) {
                    try {
                        r = JSON.parse(r)
                    } catch (e) {
                        r = {}
                    }
                    i[n](r),
                    delete i[n]
                }
            }
        }
          , v = function(e, t, n) {
            o ? p.messageHandlers.publishHandler.postMessage({
                event: e,
                paramsString: t,
                webviewIds: n
            }) : d.publishHandler(e, t, n)
        }
          , g = function(e, t, n) {
            var r = JSON.stringify(t || {})
              , o = ++a;
            i[o] = n,
            h(e, r, o)
        }
          , y = function(e, t) {
            var n = i[e];
            "function" == typeof n && n(t),
            delete i[e]
        }
          , b = function(e, t) {
            u[e] = t
        }
          , m = function(e, t, n) {
            n = n || [],
            n = JSON.stringify(n);
            var r = c + e
              , o = JSON.stringify(t);
            v(r, o, n)
        }
          , w = function(e, t) {
            s[c + e] = t
        }
          , _ = function(e, t, n, r) {
            var o;
            o = e.indexOf(c) != -1 ? s[e] : u[e],
            "function" == typeof o && o(t, n, r)
        }
        ;
        return e.WeixinJSBridge = {
            get invokeCallbackHandler() {
                return y
            },
            get subscribeHandler() {
                return _
            }
        },
        {
            on: b,
            publish: m,
            invoke: g,
            subscribe: w,
            get invokeCallbackHandler() {
                return y
            },
            get subscribeHandler() {
                return _
            }
        }
    }(this)
      , Reporter = function(e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(o.exports, o, o.exports, t),
            o.loaded = !0,
            o.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.p = "",
        t(0)
    }([function(e, t, n) {
        function r(e) {
            "undefined" != typeof WeixinJSBridge ? e() : document.addEventListener("WeixinJSBridgeReady", e, !1)
        }
        function o() {
            var e = arguments;
            r(function() {
                WeixinJSBridge.invoke.apply(WeixinJSBridge, e)
            })
        }
        function i() {
            var e = arguments;
            r(function() {
                WeixinJSBridge.publish.apply(WeixinJSBridge, e)
            })
        }
        function a() {
            return "undefined" != typeof wx ? wx.version && wx.version.version || "" : ""
        }
        function u() {
            !P || P.length <= 0 || (o("reportKeyValue", {
                dataArray: P
            }),
            P = [])
        }
        function c() {
            !C || C.length <= 0 || (o("reportIDKey", {
                dataArray: C
            }),
            C = [])
        }
        function s() {
            !E || E.length <= 0 || (o("systemLog", {
                dataArray: E
            }),
            E = [])
        }
        function f() {
            return "undefined" != typeof window && window.navigator ? window.navigator.userAgent.indexOf("appservice") > -1 ? "devtools" : window.navigator.userAgent.toLowerCase().indexOf("android") > -1 ? "android" : "" : "android" === __wxConfig.platform ? "android" : "devtools" === __wxConfig.platform ? "devtools" : "ios"
        }
        function l(e) {
            return function() {
                try {
                    return e.apply(e, arguments)
                } catch (e) {
                    console.error("reporter error:" + e.message)
                }
            }
        }
        function p(e) {
            K.__defineGetter__(e, function() {
                return l(J[e])
            })
        }
        var d = n(1)
          , h = 1
          , v = 20
          , g = 50
          , y = 50
          , b = 50
          , m = 20
          , w = 50
          , _ = 500
          , S = 500
          , k = 3
          , x = 3
          , M = 3
          , A = 50
          , T = 50
          , P = []
          , C = []
          , E = []
          , O = 0
          , I = 0
          , j = 0
          , D = 0
          , R = 0
          , B = {}
          , F = {}
          , N = {}
          , L = "ios" === f()
          , U = ("devtools" === f(),
        function() {}
        )
          , W = ""
          , V = ""
          , J = {
            surroundThirdByTryCatch: function(e, t) {
                var n = "";
                return W && (n = "at " + W + " " + V + " function;"),
                function() {
                    var r = void 0;
                    try {
                        var o = Date.now();
                        r = e.apply(e, arguments);
                        var i = Date.now() - o;
                        i > 1e3 && J.slowReport({
                            key: "apiCallback",
                            cost: i,
                            extend: n + t
                        })
                    } catch (e) {
                        J.thirdErrorReport({
                            error: e,
                            extend: n + t
                        })
                    }
                    return r
                }
            },
            slowReport: function(e) {
                var t = e.key
                  , n = e.cost
                  , r = e.extend
                  , o = e.force
                  , i = d.SlowValueType[t]
                  , a = Date.now();
                if (i && (o || !(a - R < S)) && !(Object.keys(N).length > T || (N[r] || (N[r] = 0),
                N[r]++,
                N[r] > M))) {
                    R = a;
                    var u = n + "," + encodeURIComponent(r) + "," + i;
                    J.reportKeyValue({
                        key: "Slow",
                        value: u,
                        force: !0
                    })
                }
            },
            speedReport: function(e) {
                var t = e.key
                  , n = e.data
                  , r = e.timeMark
                  , o = e.force
                  , i = d.SpeedValueType[t]
                  , a = Date.now()
                  , u = 0
                  , c = r.nativeTime;
                if (i && (o || !(a - (B[i] || 0) < _)) && r.startTime && r.endTime && (1 != i && 2 != i || c)) {
                    n && (u = JSON.stringify(n).length),
                    B[i] = a;
                    var s = i + "," + r.startTime + "," + c + "," + c + "," + r.endTime + "," + u;
                    J.reportKeyValue({
                        key: "Speed",
                        value: s,
                        force: !0
                    })
                }
            },
            reportKeyValue: function(e) {
                var t = e.key
                  , n = e.value
                  , r = e.force;
                d.KeyValueType[t] && (!r && Date.now() - O < b || (O = Date.now(),
                P.push({
                    key: d.KeyValueType[t],
                    value: n
                }),
                P.length >= v && u()))
            },
            reportIDKey: function(e) {
                var t = e.id
                  , n = e.key
                  , r = e.force;
                d.IDKeyType[n] && (!r && Date.now() - I < m || (I = Date.now(),
                C.push({
                    id: t ? t : L ? "356" : "358",
                    key: d.IDKeyType[n],
                    value: 1
                }),
                C.length >= h && c()))
            },
            thirdErrorReport: function(e) {
                var t = e.error
                  , n = e.extend;
                J.errorReport({
                    key: "thirdScriptError",
                    error: t,
                    extend: n
                })
            },
            errorReport: function(e) {
                var t = e.key
                  , n = e.error
                  , r = e.extend;
                if (d.ErrorType[t]) {
                    var o = r ? n.message + ";" + r : n.message
                      , f = t + "\n" + o + "\n" + n.stack;
                    if (console.error(f),
                    "undefined" != typeof window && "undefined" != typeof window.__webviewId__ ? i("WEBVIEW_ERROR_MSG", {
                        data: {
                            msg: f
                        },
                        options: {
                            timestamp: Date.now()
                        }
                    }) : J.triggerErrorMessage(f),
                    !(Object.keys(F).length > A)) {
                        var l = d.ErrorType[t] + "," + n.name + "," + encodeURIComponent(o) + "," + encodeURIComponent(n.stack) + "," + encodeURIComponent(a());
                        F[l] || (F[l] = 0),
                        F[l]++,
                        "thirdScriptError" === t && F[l] > k || F[l] > x || (J.reportIDKey({
                            key: t
                        }),
                        J.reportKeyValue({
                            key: "Error",
                            value: l
                        }),
                        c(),
                        u(),
                        s())
                    }
                }
            },
            log: function(e, t) {
                e && "string" == typeof e && (!t && Date.now() - j < w || (j = Date.now(),
                E.push(e + ""),
                E.length >= g && s()))
            },
            submit: function() {
                Date.now() - D < y || (D = Date.now(),
                c(),
                u(),
                s())
            },
            registerErrorListener: function(e) {
                "function" == typeof e && (U = e)
            },
            unRegisterErrorListener: function() {
                U = function() {}
            },
            triggerErrorMessage: function(e) {
                U(e)
            }
        }
          , K = {};
        for (var G in J)
            p(G);
        K.__defineSetter__("__route__", function(e) {
            W = e
        }),
        K.__defineSetter__("__method__", function(e) {
            V = e
        }),
        "undefined" != typeof window && (window.onbeforeunload = function() {
            J.submit()
        }
        ),
        e.exports = K
    }
    , function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.IDKeyType = {
            login: 1,
            login_cancel: 2,
            login_fail: 3,
            request_fail: 4,
            connectSocket_fail: 5,
            closeSocket_fail: 6,
            sendSocketMessage_fail: 7,
            uploadFile_fail: 8,
            downloadFile_fail: 9,
            redirectTo_fail: 10,
            navigateTo_fail: 11,
            navigateBack_fail: 12,
            appServiceSDKScriptError: 13,
            webviewSDKScriptError: 14,
            jsEnginScriptError: 15,
            thirdScriptError: 16,
            webviewScriptError: 17,
            exparserScriptError: 18,
            startRecord: 19,
            startRecord_fail: 20,
            getLocation: 21,
            getLocation_fail: 22,
            chooseLocation: 23,
            chooseLocation_fail: 24,
            openAddress: 25,
            openAddress_fail: 26,
            openLocation: 27,
            openLocation_fail: 28,
            makePhoneCall: 29,
            makePhoneCall_fail: 30,
            operateWXData: 31,
            operateWXData_fail: 32,
            checkLogin: 33,
            checkLogin_fail: 34,
            refreshSession: 35,
            refreshSession_fail: 36,
            chooseVideo: 37,
            chooseVideo_fail: 38,
            chooseImage: 39,
            chooseImage_fail: 40,
            verifyPaymentPassword: 41,
            verifyPaymentPassword_fail: 42,
            requestPayment: 43,
            requestPayment_fail: 44,
            bindPaymentCard: 45,
            bindPaymentCard_fail: 46,
            requestPaymentToBank: 47,
            requestPaymentToBank_fail: 48,
            openDocument: 49,
            openDocument_fail: 50,
            chooseContact: 51,
            chooseContact_fail: 52,
            operateMusicPlayer: 53,
            operateMusicPlayer_fail: 54,
            getMusicPlayerState_fail: 55,
            playVoice_fail: 56,
            setNavigationBarTitle_fail: 57,
            switchTab_fail: 58,
            getImageInfo_fail: 59,
            enableCompass_fail: 60,
            enableAccelerometer_fail: 61,
            getStorage_fail: 62,
            setStorage_fail: 63,
            clearStorage_fail: 64,
            removeStorage_fail: 65,
            getStorageInfo_fail: 66,
            getStorageSync_fail: 67,
            setStorageSync_fail: 68,
            addCard_fail: 69,
            openCard_fail: 70
        },
        t.KeyValueType = {
            Speed: "13544",
            Error: "13582",
            Slow: "13968"
        },
        t.SpeedValueType = {
            webview2AppService: 1,
            appService2Webview: 2,
            funcReady: 3,
            firstGetData: 4,
            firstRenderTime: 5,
            reRenderTime: 6,
            forceUpdateRenderTime: 7,
            appRoute2newPage: 8,
            newPage2pageReady: 9,
            thirdScriptRunTime: 10,
            pageframe: 11,
            WAWebview: 12
        },
        t.SlowValueType = {
            apiCallback: 1,
            pageInvoke: 2
        },
        t.ErrorType = {
            appServiceSDKScriptError: 1,
            webviewSDKScriptError: 2,
            jsEnginScriptError: 3,
            thirdScriptError: 4,
            webviewScriptError: 5,
            exparserScriptError: 6
        }
    }
    ])
      , wx = function(e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(o.exports, o, o.exports, t),
            o.loaded = !0,
            o.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.p = "",
        t(0)
    }([function(e, t, n) {
        function r(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
            t
        }
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i(e) {
            Y.__defineGetter__(e, function() {
                return "function" == typeof ie[e] ? (0,
                f.surroundByTryCatchFactory)(ie[e], "wx." + e) : ie[e]
            })
        }
        function a(e, t, n) {
            var r = (0,
            f.paramCheck)(t, n);
            return !r || (oe(e, t, "parameter error: " + r),
            !1)
        }
        function u(e, t) {
            var n = /^(.*)\.html/gi.exec(t.url);
            return !n || __wxConfig.pages.indexOf(n[1]) !== -1 || (oe(e, t, "url not in app.json"),
            !1)
        }
        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , s = n(1)
          , f = n(2)
          , l = n(3)
          , p = o(l)
          , d = n(4)
          , h = o(d)
          , v = n(7)
          , g = o(v)
          , y = n(8);
        n(9),
        n(10),
        n(11);
        var b = n(6)
          , m = n(12)
          , w = n(13)
          , _ = n(15)
          , S = r(_)
          , k = n(16)
          , x = o(k)
          , M = n(18)
          , A = r(M)
          , T = n(19)
          , P = r(T)
          , C = n(20)
          , E = o(C)
          , O = n(21)
          , I = n(23)
          , j = n(24)
          , D = n(25)
          , R = n(26)
          , B = n(22)
          , F = n(17)
          , N = o(F)
          , L = n(27)
          , U = n(28)
          , W = n(29)
          , V = n(30)
          , J = n(31)
          , K = o(J)
          , G = function() {}
          , q = {}
          , H = []
          , $ = []
          , X = void 0
          , Y = {}
          , z = ("devtools" === (0,
        f.getPlatform)(),
        !1)
          , Z = !1
          , Q = []
          , ee = []
          , te = []
          , ne = void 0
          , re = void 0;
        "devtools" === (0,
        f.getPlatform)() && (0,
        s.subscribe)("SPECIAL_PAGE_EVENT", function(e) {
            var t = e.data
              , n = e.eventName
              , r = e.ext
              , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (t && "input" == t.type && "function" == typeof X) {
                var i = X({
                    data: t,
                    eventName: n,
                    webviewId: o
                })
                  , a = t.detail.value;
                if (r && r.setKeyboardValue)
                    if ("undefined" == typeof i)
                        ;
                    else if ("Object" === (0,
                    f.getDataType)(i)) {
                        var u = {};
                        a != i.value && (u.value = i.value + ""),
                        isNaN(parseInt(i.cursor)) || (u.cursor = parseInt(i.cursor)),
                        (0,
                        s.publish)("setKeyboardValue", u, [o])
                    } else
                        a != i && (0,
                        s.publish)("setKeyboardValue", {
                            value: i + "",
                            cursor: -1
                        }, [o])
            }
        });
        var oe = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
              , r = e + ":fail " + n;
            console.error(r);
            var o = Reporter.surroundThirdByTryCatch(t.fail || G, "at api " + e + " fail callback function")
              , i = Reporter.surroundThirdByTryCatch(t.complete || G, "at api " + e + " complete callback function");
            o({
                errMsg: r
            }),
            i({
                errMsg: r
            })
        }
          , ie = {
            drawCanvas: w.drawCanvas,
            createContext: w.createContext,
            createCanvasContext: w.createCanvasContext,
            canvasToTempFilePath: w.canvasToTempFilePath,
            getShareInfo: L.getShareInfo,
            ShareInfoStorage: x.default,
            arrayBufferToBase64: f.arrayBufferToBase64,
            base64ToArrayBuffer: f.base64ToArrayBuffer,
            openSetting: E.default,
            getExtConfig: O.getExtConfig,
            chooseMedia: I.chooseMedia,
            chooseWeChatContact: j.chooseWeChatContact,
            uploadEncryptedFileToCDN: D.uploadEncryptedFileToCDN,
            onUploadEncryptedFileToCDNProgress: R.onUploadEncryptedFileToCDNProgress,
            getExtConfigSync: B.getExtConfigSync,
            showShareMenu: U.showShareMenu,
            hideShareMenu: W.hideShareMenu,
            openUrl: V.openUrl,
            launchMiniProgram: P.launchMiniProgram,
            exitMiniProgram: P.exitMiniProgram,
            reportIDKey: function(e, t) {},
            reportKeyValue: function(e, t) {},
            onPullDownRefresh: function(e) {
                console.log("onPullDownRefresh has been removed from api list")
            },
            setNavigationBarTitle: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("setNavigationBarTitle", e, {
                    title: ""
                }) && (0,
                s.invokeMethod)("setNavigationBarTitle", e)
            },
            showNavigationBarLoading: function(e) {
                (0,
                s.invokeMethod)("showNavigationBarLoading", e)
            },
            hideNavigationBarLoading: function(e) {
                (0,
                s.invokeMethod)("hideNavigationBarLoading", e)
            },
            stopPullDownRefresh: function(e) {
                (0,
                s.invokeMethod)("stopPullDownRefresh", e)
            },
            openBluetoothAdapter: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("openBluetoothAdapter", e)
            },
            closeBluetoothAdapter: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("closeBluetoothAdapter", e)
            },
            getBluetoothAdapterState: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("getBluetoothAdapterState", e)
            },
            startBluetoothDevicesDiscovery: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (e.services) {
                    if (!Array.isArray(e.services))
                        return void oe("startBluetoothDevicesDiscovery", {}, "services must be an Array");
                    if (0 !== e.services.length) {
                        var t = new RegExp(/^[0-9a-f]{4}$|^[0-9a-f]{8}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)
                          , n = e.services.some(function(e) {
                            return "string" == typeof e && t.test(e)
                        });
                        if (!n)
                            return void oe("startBluetoothDevicesDiscovery", {}, "invalid service uuid");
                        e.services = e.services.map(function(e) {
                            return 4 === e.length ? "0000" + e + "-0000-1000-8000-00805F9B34FB" : 8 === e.length ? e + "-0000-1000-8000-00805F9B34FB" : e
                        })
                    }
                }
                (0,
                s.invokeMethod)("startBluetoothDevicesDiscovery", e)
            },
            stopBluetoothDevicesDiscovery: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("stopBluetoothDevicesDiscovery", e)
            },
            getBluetoothDevices: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.success;
                e.success = function(e) {
                    e.devices = e.devices.map(function(e) {
                        return e.name || (e.name = "未知设备"),
                        e.advertisData && (e.advertisData = (0,
                        f.base64ToArrayBuffer)(e.advertisData)),
                        e
                    }),
                    t(e)
                }
                ,
                (0,
                s.invokeMethod)("getBluetoothDevices", e)
            },
            getConnectedBluetoothDevices: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (e.services) {
                    if (!Array.isArray(e.services))
                        return void oe("getConnectedBluetoothDevices", {}, "services must be an Array");
                    if (0 !== e.services.length) {
                        var t = new RegExp(/^[0-9a-f]{4}$|^[0-9a-f]{8}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)
                          , n = e.services.some(function(e) {
                            return "string" == typeof e && t.test(e)
                        });
                        if (!n)
                            return void oe("getConnectedBluetoothDevices", {}, "invalid service uuid");
                        e.services = e.services.map(function(e) {
                            return 4 === e.length ? "0000" + e + "-0000-1000-8000-00805F9B34FB" : 8 === e.length ? e + "-0000-1000-8000-00805F9B34FB" : e
                        })
                    }
                }
                var r = e.success;
                e.success = function(e) {
                    e.devices = e.devices.map(function(e) {
                        return e.name || (e.name = "未知设备"),
                        e.advertisData && (e.advertisData = (0,
                        f.base64ToArrayBuffer)(e.advertisData)),
                        e
                    }),
                    r(e)
                }
                ,
                (0,
                s.invokeMethod)("getConnectedBluetoothDevices", e)
            },
            createBLEConnection: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("createBLEConnection", e, {
                    deviceId: ""
                }) && (0,
                s.invokeMethod)("createBLEConnection", e)
            },
            closeBLEConnection: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("closeBLEConnection", e, {
                    deviceId: ""
                }) && (0,
                s.invokeMethod)("closeBLEConnection", e)
            },
            getBLEDeviceServices: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("getBLEDeviceCharacteristics", e, {
                    deviceId: ""
                }) && (0,
                s.invokeMethod)("getBLEDeviceServices", e)
            },
            getBLEDeviceCharacteristics: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("getBLEDeviceCharacteristics", e, {
                    deviceId: "",
                    serviceId: ""
                }) && (0,
                s.invokeMethod)("getBLEDeviceCharacteristics", e)
            },
            notifyBLECharacteristicValueChanged: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("notifyBLECharacteristicValueChanged", e, {
                    state: !0,
                    deviceId: "",
                    serviceId: "",
                    characteristicId: ""
                }) && (0,
                s.invokeMethod)("notifyBLECharacteristicValueChanged", e)
            },
            readBLECharacteristicValue: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("readBLECharacteristicValue", e, {
                    deviceId: "",
                    serviceId: "",
                    characteristicId: ""
                }) && (0,
                s.invokeMethod)("readBLECharacteristicValue", e)
            },
            writeBLECharacteristicValue: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("writeBLECharacteristicValue", e, {
                    value: new ArrayBuffer(0),
                    deviceId: "",
                    serviceId: "",
                    characteristicId: ""
                }) && (e.value = (0,
                f.arrayBufferToBase64)(e.value),
                (0,
                s.invokeMethod)("writeBLECharacteristicValue", e))
            },
            onBluetoothAdapterStateChange: function(e) {
                a("onBluetoothAdapterStateChange", e, G) && (0,
                s.onMethod)("onBluetoothAdapterStateChange", Reporter.surroundThirdByTryCatch(e, "at onBluetoothAdapterStateChange callback function"))
            },
            onBluetoothDeviceFound: function(e) {
                if (a("onBluetoothDeviceFound", e, G)) {
                    var t = function(t) {
                        t.advertisData && (t.advertisData = (0,
                        f.base64ToArrayBuffer)(t.advertisData)),
                        e(t)
                    }
                    ;
                    (0,
                    s.onMethod)("onBluetoothDeviceFound", Reporter.surroundThirdByTryCatch(t, "at onBluetoothDeviceFound callback function"))
                }
            },
            onBLEConnectionStateChanged: function(e) {
                a("onBLEConnectionStateChanged", e, G) && (0,
                s.onMethod)("onBLEConnectionStateChanged", Reporter.surroundThirdByTryCatch(e, "at onBLEConnectionStateChanged callback function"))
            },
            onBLECharacteristicValueChange: function(e) {
                if (a("onBLECharacteristicValueChange", e, G)) {
                    var t = function(t) {
                        t.value = (0,
                        f.base64ToArrayBuffer)(t.value),
                        e(t)
                    }
                    ;
                    (0,
                    s.onMethod)("onBLECharacteristicValueChange", Reporter.surroundThirdByTryCatch(t, "at onBLECharacteristicValueChange callback function"))
                }
            },
            startBeaconDiscovery: function(e) {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!e.uuids)
                    return void oe("startBeaconDiscovery", {}, "must have uuid");
                if (!Array.isArray(e.uuids))
                    return void oe("startBeaconDiscovery", {}, "uuid must be an Array");
                if (0 !== e.uuids.length) {
                    var t = new RegExp(/^[0-9a-f]{4}$|^[0-9a-f]{8}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)
                      , n = e.uuids.some(function(e) {
                        return "string" == typeof e && t.test(e)
                    });
                    if (!n)
                        return void oe("startBeaconDiscovery", {}, "invalid service uuid")
                }
                (0,
                s.invokeMethod)("startBeaconDiscovery", e)
            },
            stopBeaconDiscovery: function(e) {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("stopBeaconDiscovery", e)
            },
            getBeacons: function(e) {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("getBeacons", e)
            },
            onBeaconUpdated: function(e) {
                a("onBeaconUpdated", e, G) && (0,
                s.onMethod)("onBeaconUpdated", Reporter.surroundThirdByTryCatch(e, "at onBeaconUpdated callback function"))
            },
            onBeaconServiceChanged: function(e) {
                a("onBeaconServiceChanged", e, G) && (0,
                s.onMethod)("onBeaconServiceChanged", Reporter.surroundThirdByTryCatch(e, "at onBeaconServiceChanged callback function"))
            },
            redirectTo: function(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                a("redirectTo", e, {
                    url: ""
                }) && (e.url = (0,
                f.getRealRoute)(N.default.lastRoute, e.url),
                e.url = (0,
                f.encodeUrlQuery)(e.url),
                u("redirectTo", e) && (0,
                s.invokeMethod)("redirectTo", e, {
                    afterSuccess: function() {
                        N.default.lastRoute = e.url
                    }
                }))
            },
            reLaunch: function(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                a("reLaunch", e, {
                    url: ""
                }) && (e.url = (0,
                f.getRealRoute)("", e.url),
                e.url = (0,
                f.encodeUrlQuery)(e.url),
                u("reLaunch", e) && (0,
                s.invokeMethod)("reLaunch", e, {
                    afterSuccess: function() {
                        N.default.lastRoute = e.url
                    }
                }))
            },
            navigateTo: function(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                a("navigateTo", e, {
                    url: ""
                }) && (e.url = (0,
                f.getRealRoute)(N.default.lastRoute, e.url),
                e.url = (0,
                f.encodeUrlQuery)(e.url),
                u("navigateTo", e) && (0,
                s.invokeMethod)("navigateTo", e, {
                    afterSuccess: function() {
                        N.default.lastRoute = e.url,
                        (0,
                        m.notifyCurrentRoutetoContext)(N.default.lastRoute)
                    }
                }))
            },
            switchTab: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("switchTab", e, {
                    url: ""
                }) && (/\?.*$/.test(e.url) && (console.warn("wx.switchTab: url 不支持 queryString"),
                e.url = e.url.replace(/\?.*$/, "")),
                e.url = (0,
                f.getRealRoute)(N.default.lastRoute, e.url),
                e.url = (0,
                f.encodeUrlQuery)(e.url),
                u("switchTab", e) && (0,
                s.invokeMethod)("switchTab", e, {
                    afterSuccess: function() {
                        N.default.lastRoute = e.url,
                        (0,
                        m.notifyCurrentRoutetoContext)(N.default.lastRoute)
                    }
                }))
            },
            navigateBack: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                "number" != typeof e.delta ? e.delta = 1 : (e.delta = parseInt(e.delta),
                e.delta < 1 && (e.delta = 1)),
                (0,
                s.invokeMethod)("navigateBack", e)
            },
            getStorage: function(e) {
                a("getStorage", e, {
                    key: ""
                }) && (0,
                s.invokeMethod)("getStorage", e, {
                    beforeSuccess: function(e) {
                        e.data = (0,
                        f.stringToAnyType)(e.data, e.dataType),
                        delete e.dataType
                    },
                    afterFail: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (e.errMsg && e.errMsg.indexOf("data not found") > 0)
                            return !1
                    }
                })
            },
            getStorageSync: function(e) {
                if (a("getStorageSync", e, "")) {
                    var t = "ios" === (0,
                    f.getPlatform)() ? "getStorage" : "getStorageSync"
                      , n = void 0;
                    return (0,
                    s.invokeMethod)(t, {
                        key: e
                    }, {
                        beforeAll: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            n = (0,
                            f.stringToAnyType)(e.data, e.dataType)
                        },
                        afterFail: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (e.errMsg && e.errMsg.indexOf("data not found") > 0)
                                return !1
                        }
                    }),
                    n
                }
            },
            setStorage: function(e) {
                if (a("setStorage", e, {
                    key: ""
                }))
                    try {
                        var t = (0,
                        f.anyTypeToString)(e.data)
                          , n = t.data
                          , r = t.dataType;
                        (0,
                        s.invokeMethod)("setStorage", {
                            key: e.key,
                            data: n,
                            dataType: r,
                            success: e.success,
                            fail: e.fail,
                            complete: e.complete
                        })
                    } catch (t) {
                        "function" == typeof e.fail && e.fail({
                            errMsg: "setStorage:fail " + t.message
                        }),
                        "function" == typeof e.complete && e.complete({
                            errMsg: "setStorage:fail " + t.message
                        })
                    }
            },
            setStorageSync: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if (a("setStorage", e, "")) {
                    var n = "ios" === (0,
                    f.getPlatform)() ? "setStorage" : "setStorageSync"
                      , r = (0,
                    f.anyTypeToString)(t)
                      , o = r.data
                      , i = r.dataType;
                    (0,
                    s.invokeMethod)(n, {
                        key: e,
                        data: o,
                        dataType: i,
                        fail: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            throw new f.AppServiceSdkKnownError(e.errMsg)
                        }
                    })
                }
            },
            removeStorage: function(e) {
                a("removeStorage", e, {
                    key: ""
                }) && (0,
                s.invokeMethod)("removeStorage", e)
            },
            removeStorageSync: function(e) {
                a("removeStorageSync", e, "") && (0,
                s.invokeMethod)("removeStorageSync", {
                    key: e
                })
            },
            clearStorage: function(e) {
                (0,
                s.invokeMethod)("clearStorage", e)
            },
            clearStorageSync: function() {
                var e = "ios" === (0,
                f.getPlatform)() ? "clearStorage" : "clearStorageSync";
                (0,
                s.invokeMethod)(e)
            },
            getStorageInfo: function(e) {
                (0,
                s.invokeMethod)("getStorageInfo", e)
            },
            getStorageInfoSync: function() {
                var e = void 0;
                return (0,
                s.invokeMethod)("getStorageInfoSync", {}, {
                    beforeAll: function(t) {
                        e = t,
                        delete t.errMsg
                    }
                }),
                e
            },
            request: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (a("request", e, {
                    url: ""
                })) {
                    if ((0,
                    f.validateUrl)(e.url) === !1)
                        return void oe("request", e, 'invalid url "' + e.url + '"');
                    if ("function" === e.data)
                        return void oe("request", e, "data should not be Function");
                    var t = (0,
                    f.getDataType)(e.header);
                    e.header = e.header || {},
                    e.header = (0,
                    f.convertObjectValueToString)(e.header),
                    "Undefined" !== t && "Object" !== t && (console.warn("wx.request: header must be an object"),
                    e.header = {}),
                    e.header = Object.keys(e.header).reduce(function(t, n) {
                        return "content-type" === n.toLowerCase() ? t[n.toLowerCase()] = e.header[n] : t[n] = e.header[n],
                        t
                    }, {}),
                    e.method && (e.method = e.method.toUpperCase());
                    var n = e.header || {}
                      , r = "GET";
                    "string" == typeof e.method && (r = e.method.toUpperCase());
                    var o = void 0;
                    e.dataType = e.dataType || "json",
                    n["content-type"] = n["content-type"] || "application/json",
                    o = "undefined" == typeof e.data ? "" : "string" != typeof e.data ? n["content-type"].indexOf("application/x-www-form-urlencoded") > -1 ? (0,
                    f.urlEncodeFormData)(e.data, !0) : n["content-type"].indexOf("application/json") > -1 ? JSON.stringify(e.data) : "object" === c(e.data) ? JSON.stringify(e.data) : o.toString() : e.data,
                    "GET" == r && (e.url = (0,
                    f.addQueryStringToUrl)(e.url, e.data)),
                    (0,
                    s.invokeMethod)("request", {
                        url: e.url,
                        data: o,
                        header: n,
                        method: r,
                        success: e.success,
                        fail: e.fail,
                        complete: e.complete
                    }, {
                        beforeSuccess: function(t) {
                            if ("string" == typeof t.data && 65279 === t.data.charCodeAt(0) && (t.data = t.data.substr(1)),
                            "json" === e.dataType)
                                try {
                                    t.data = JSON.parse(t.data)
                                } catch (e) {}
                            t.statusCode = parseInt(t.statusCode)
                        }
                    })
                }
            },
            connectSocket: function(e) {
                if (a("connectSocket", e, {
                    url: ""
                })) {
                    "object" !== c(e.header) && "undefined" != typeof e.header && (console.warn("connectSocket: header must be an object"),
                    delete e.header);
                    var t = {};
                    e.header && (t = (0,
                    f.convertObjectValueToString)(e.header)),
                    (0,
                    s.invokeMethod)("connectSocket", (0,
                    f.assign)({}, e, {
                        header: t
                    }), {
                        beforeSuccess: function(e) {
                            e.statusCode = parseInt(e.statusCode)
                        }
                    })
                }
            },
            closeSocket: function(e) {
                (0,
                s.invokeMethod)("closeSocket", e)
            },
            sendSocketMessage: function(e) {
                var t = (0,
                f.getDataType)(e.data);
                "devtools" === (0,
                f.getPlatform)() ? (0,
                s.invokeMethod)("sendSocketMessage", e) : "String" === t ? (0,
                s.invokeMethod)("sendSocketMessage", e) : "ArrayBuffer" === t && (0,
                s.invokeMethod)("sendSocketMessage", (0,
                f.assign)(e, {
                    data: (0,
                    f.arrayBufferToBase64)(e.data),
                    isBuffer: !0
                }))
            },
            onSocketOpen: function(e) {
                a("onSocketOpen", e, G) && (0,
                s.onMethod)("onSocketOpen", Reporter.surroundThirdByTryCatch(e, "at onSocketOpen callback function"))
            },
            onSocketClose: function(e) {
                a("onSocketClose", e, G) && (0,
                s.onMethod)("onSocketClose", Reporter.surroundThirdByTryCatch(e, "at onSocketClose callback function"))
            },
            onSocketMessage: function(e) {
                if (a("onSocketMessage", e, G)) {
                    var t = Reporter.surroundThirdByTryCatch(e, "at onSocketMessage callback function");
                    (0,
                    s.onMethod)("onSocketMessage", function(e) {
                        "devtools" !== (0,
                        f.getPlatform)() && e.isBuffer === !0 && (e.data = (0,
                        f.base64ToArrayBuffer)(e.data)),
                        delete e.isBuffer,
                        "devtools" === (0,
                        f.getPlatform)() && "Blob" === (0,
                        f.getDataType)(e.data) ? (0,
                        f.blobToArrayBuffer)(e.data, function(n) {
                            e.data = n,
                            t(e)
                        }) : t(e)
                    })
                }
            },
            onSocketError: function(e) {
                (0,
                s.onMethod)("onSocketError", Reporter.surroundThirdByTryCatch(e, "at onSocketError callback function"))
            },
            uploadFile: function(e) {
                if (a("uploadFile", e, {
                    url: "",
                    filePath: "",
                    name: ""
                })) {
                    "object" !== c(e.header) && "undefined" != typeof e.header && (console.warn("uploadFile: header must be an object"),
                    delete e.header),
                    "object" !== c(e.formData) && "undefined" != typeof e.formData && (console.warn("uploadFile: formData must be an object"),
                    delete e.formData);
                    var t = {}
                      , n = {};
                    e.header && (t = (0,
                    f.convertObjectValueToString)(e.header)),
                    e.formData && (n = (0,
                    f.convertObjectValueToString)(e.formData)),
                    (0,
                    s.invokeMethod)("uploadFile", (0,
                    f.assign)({}, e, {
                        header: t,
                        formData: n
                    }), {
                        beforeSuccess: function(e) {
                            e.statusCode = parseInt(e.statusCode)
                        }
                    })
                }
            },
            downloadFile: function(e) {
                a("downloadFile", e, {
                    url: ""
                }) && (0,
                s.invokeMethod)("downloadFile", e, {
                    beforeSuccess: function(e) {
                        e.statusCode = parseInt(e.statusCode);
                        var t = [200, 304];
                        t.indexOf(e.statusCode) === -1 && delete e.tempFilePath
                    }
                })
            },
            chooseImage: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("chooseImage", (0,
                f.assign)({
                    count: 9,
                    sizeType: ["original", "compressed"],
                    sourceType: ["album", "camera"]
                }, e))
            },
            previewImage: function(e) {
                a("previewImage", e, {
                    urls: [""]
                }) && (0,
                s.invokeMethod)("previewImage", e)
            },
            getImageInfo: function(e) {
                a("getImageInfo", e, {
                    src: ""
                }) && (/^(http|https):\/\//.test(e.src) ? (0,
                s.invokeMethod)("downloadFile", {
                    url: e.src
                }, {
                    afterSuccess: function(t) {
                        e.src = t.tempFilePath,
                        (0,
                        s.invokeMethod)("getImageInfo", e, {
                            beforeSuccess: function(t) {
                                t.path = e.src
                            }
                        })
                    },
                    afterFail: function() {
                        oe("getImageInfo", e, "download image fail")
                    }
                }) : /^wxfile:\/\//.test(e.src) ? (0,
                s.invokeMethod)("getImageInfo", e, {
                    beforeSuccess: function(t) {
                        t.path = e.src
                    }
                }) : (e.src = (0,
                f.getRealRoute)(N.default.lastRoute, e.src, !1),
                (0,
                s.invokeMethod)("getImageInfo", e, {
                    beforeSuccess: function(t) {
                        t.path = e.src
                    }
                })))
            },
            startRecord: function(e) {
                ie.appStatus === b.AppStatus.BACK_GROUND && ie.hanged === !1 || (0,
                s.invokeMethod)("startRecord", e)
            },
            stopRecord: function(e) {
                (0,
                s.invokeMethod)("stopRecord", e)
            },
            playVoice: function(e) {
                a("playVoice", e, {
                    filePath: ""
                }) && (0,
                s.invokeMethod)("playVoice", e)
            },
            pauseVoice: function(e) {
                (0,
                s.invokeMethod)("pauseVoice", e)
            },
            stopVoice: function(e) {
                (0,
                s.invokeMethod)("stopVoice", e)
            },
            onVoicePlayEnd: function(e) {
                (0,
                s.onMethod)("onVoicePlayEnd", Reporter.surroundThirdByTryCatch(e, "at onVoicePlayEnd callback function"))
            },
            chooseVideo: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e.sourceType = e.sourceType || ["album", "camera"],
                e.camera = e.camera || ["front", "back"],
                (0,
                s.invokeMethod)("chooseVideo", e)
            },
            getLocation: function(e) {
                A.getLocation.call(ie, e)
            },
            openLocation: A.openLocation,
            chooseLocation: A.chooseLocation,
            getNetworkType: function(e) {
                (0,
                s.invokeMethod)("getNetworkType", e)
            },
            onNetworkStatusChange: function(e) {
                te.push(Reporter.surroundThirdByTryCatch(e, "onNetworkStatusChange"))
            },
            getSystemInfo: function(e) {
                var t = (0,
                f.getPlatform)();
                (0,
                s.invokeMethod)("getSystemInfo", e, {
                    beforeSuccess: function(e) {
                        e.platform = t,
                        e.SDKVersion = K.default.SDKVersion
                    }
                })
            },
            getSystemInfoSync: function(e) {
                var t = {}
                  , n = (0,
                f.getPlatform)();
                return (0,
                s.invokeMethod)("getSystemInfo", {}, {
                    beforeSuccess: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t = e,
                        t.platform = n,
                        t.SDKVersion = K.default.SDKVersion,
                        delete e.errMsg
                    }
                }),
                t
            },
            startAccelerometer: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("enableAccelerometer", (0,
                f.assign)(e, {
                    enable: !0
                }), {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("enableAccelerometer", "startAccelerometer")
                    }
                }),
                z = !0
            },
            stopAccelerometer: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("enableAccelerometer", (0,
                f.assign)(e, {
                    enable: !1
                }), {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("enableAccelerometer", "stopAccelerometer")
                    }
                }),
                z = !1
            },
            onAccelerometerChange: function(e) {
                z || ((0,
                s.invokeMethod)("enableAccelerometer", {
                    enable: !0
                }),
                z = !0),
                Q.push(Reporter.surroundThirdByTryCatch(e, "at onAccelerometerChange callback function"))
            },
            startCompass: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("enableCompass", (0,
                f.assign)(e, {
                    enable: !0
                }), {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("enableCompass", "startCompass")
                    }
                }),
                Z = !0
            },
            stopCompass: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("enableCompass", (0,
                f.assign)(e, {
                    enable: !1
                }), {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("enableCompass", "stopCompass")
                    }
                }),
                Z = !1
            },
            onCompassChange: function(e) {
                Z || ((0,
                s.invokeMethod)("enableCompass", {
                    enable: !0
                }),
                Z = !0),
                ee.push(Reporter.surroundThirdByTryCatch(e, "at onCompassChange callback function"))
            },
            reportAction: function(e) {
                (0,
                s.invokeMethod)("reportAction", e)
            },
            getBackgroundAudioPlayerState: function(e) {
                (0,
                s.invokeMethod)("getMusicPlayerState", e, {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("getBackgroundAudioPlayerState", "getMusicPlayerState")
                    }
                })
            },
            playBackgroundAudio: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                ie.appStatus === b.AppStatus.BACK_GROUND && ie.hanged === !1 || (0,
                s.invokeMethod)("operateMusicPlayer", (0,
                f.assign)({
                    operationType: "play"
                }, e), {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("operateMusicPlayer", "playBackgroundAudio")
                    }
                })
            },
            pauseBackgroundAudio: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("operateMusicPlayer", (0,
                f.assign)({
                    operationType: "pause"
                }, e), {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("operateMusicPlayer", "pauseBackgroundAudio")
                    }
                })
            },
            seekBackgroundAudio: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("seekBackgroundAudio", e, {
                    position: 1
                }) && (0,
                s.invokeMethod)("operateMusicPlayer", (0,
                f.assign)({
                    operationType: "seek"
                }, e), {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("operateMusicPlayer", "seekBackgroundAudio")
                    }
                })
            },
            stopBackgroundAudio: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                console.log("stopBackgroundAudio"),
                (0,
                s.invokeMethod)("operateMusicPlayer", (0,
                f.assign)({
                    operationType: "stop"
                }, e), {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("operateMusicPlayer", "stopBackgroundAudio")
                    }
                })
            },
            onBackgroundAudioPlay: function(e) {
                (0,
                s.onMethod)("onMusicPlay", Reporter.surroundThirdByTryCatch(e, "at onBackgroundAudioPlay callback function"))
            },
            onBackgroundAudioPause: function(e) {
                (0,
                s.onMethod)("onMusicPause", Reporter.surroundThirdByTryCatch(e, "at onBackgroundAudioPause callback function"))
            },
            onBackgroundAudioStop: function(e) {
                (0,
                s.onMethod)("onMusicEnd", Reporter.surroundThirdByTryCatch(e, "at onBackgroundAudioStop callback function"))
            },
            login: function(e) {
                (0,
                s.invokeMethod)("login", e)
            },
            checkLogin: function(e) {
                (0,
                s.invokeMethod)("checkLogin", e)
            },
            checkSession: function(e) {
                ne && clearTimeout(ne),
                (0,
                s.invokeMethod)("refreshSession", e, {
                    beforeSuccess: function(e) {
                        ne = setTimeout(function() {
                            (0,
                            s.invokeMethod)("refreshSession")
                        }, 1e3 * e.expireIn),
                        delete e.err_code,
                        delete e.expireIn
                    },
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("refreshSession", "checkSession")
                    }
                })
            },
            authorize: function(e) {
                (0,
                s.invokeMethod)("authorize", e)
            },
            getUserInfo: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("operateWXData", (0,
                f.assign)({
                    data: {
                        api_name: "webapi_getuserinfo",
                        with_credentials: "boolean" != typeof e.withCredentials || e.withCredentials,
                        data: e.data || {}
                    }
                }, e), {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("operateWXData", "getUserInfo")
                    },
                    beforeSuccess: function(e) {
                        "android" === (0,
                        f.getPlatform)() && (e.data = JSON.parse(e.data)),
                        e.rawData = e.data.data;
                        try {
                            e.userInfo = JSON.parse(e.data.data),
                            e.signature = e.data.signature,
                            e.data.encryptData && (console.group(new Date + " encryptData 字段即将废除"),
                            console.warn("请使用 encryptedData 和 iv 字段进行解密，详见：https://mp.weixin.qq.com/debug/wxadoc/dev/api/open.html"),
                            console.groupEnd(),
                            e.encryptData = e.data.encryptData),
                            e.data.encryptedData && (e.encryptedData = e.data.encryptedData,
                            e.iv = e.data.iv),
                            delete e.data
                        } catch (e) {}
                    }
                })
            },
            getFriends: function(e) {
                (0,
                s.invokeMethod)("operateWXData", {
                    data: {
                        api_name: "webapi_getfriends",
                        data: e.data || {}
                    },
                    success: e.success,
                    fail: e.fail,
                    complete: e.complete
                }, {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("operateWXData", "getFriends")
                    },
                    beforeSuccess: function(e) {
                        "android" === (0,
                        f.getPlatform)() && (e.data = JSON.parse(e.data)),
                        e.rawData = e.data.data;
                        try {
                            e.friends = JSON.parse(e.data.data),
                            e.signature = e.data.signature,
                            delete e.data
                        } catch (e) {}
                    }
                })
            },
            requestPayment: function(e) {
                a("requestPayment", e, {
                    timeStamp: "",
                    nonceStr: "",
                    package: "",
                    signType: "",
                    paySign: ""
                }) && (0,
                s.invokeMethod)("requestPayment", e)
            },
            verifyPaymentPassword: function(e) {
                (0,
                s.invokeMethod)("verifyPaymentPassword", e)
            },
            bindPaymentCard: function(e) {
                (0,
                s.invokeMethod)("bindPaymentCard", e)
            },
            requestPaymentToBank: function(e) {
                (0,
                s.invokeMethod)("requestPaymentToBank", e)
            },
            addCard: function(e) {
                a("addCard", e, {
                    cardList: []
                }) && (0,
                s.invokeMethod)("addCard", e)
            },
            openCard: function(e) {
                a("openCard", e, {
                    cardList: []
                }) && (0,
                s.invokeMethod)("openCard", e)
            },
            scanCode: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("scanCode", e, {}) && (0,
                s.invokeMethod)("scanCode", e, {
                    beforeSuccess: function(e) {
                        "string" == typeof e.path && (e.path = e.path.replace(/\.html$/, ""),
                        e.path = e.path.replace(/\.html\?/, "?"))
                    }
                })
            },
            chooseAddress: function(e) {
                (0,
                s.invokeMethod)("openAddress", e, {
                    beforeSuccess: function(e) {
                        (0,
                        f.renameProperty)(e, "addressPostalCode", "postalCode"),
                        (0,
                        f.renameProperty)(e, "proviceFirstStageName", "provinceName"),
                        (0,
                        f.renameProperty)(e, "addressCitySecondStageName", "cityName"),
                        (0,
                        f.renameProperty)(e, "addressCountiesThirdStageName", "countyName"),
                        (0,
                        f.renameProperty)(e, "addressDetailInfo", "detailInfo")
                    },
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("openAddress", "chooseAddress"),
                        delete e.err_msg
                    }
                })
            },
            saveFile: function(e) {
                a("saveFile", e, {
                    tempFilePath: ""
                }) && (0,
                s.invokeMethod)("saveFile", e)
            },
            openDocument: function(e) {
                a("openDocument", e, {
                    filePath: ""
                }) && (0,
                s.invokeMethod)("openDocument", e)
            },
            chooseContact: function(e) {
                (0,
                s.invokeMethod)("chooseContact", e)
            },
            makePhoneCall: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("makePhoneCall", e, {
                    phoneNumber: ""
                }) && (0,
                s.invokeMethod)("makePhoneCall", e)
            },
            makeVoIPCall: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("makeVoIPCall", (0,
                f.assign)({
                    allowBackCamera: !1,
                    showOther: !1
                }, e))
            },
            onAppRoute: function(e, t) {
                H.push(e)
            },
            onAppRouteDone: function(e, t) {
                $.push(e)
            },
            onAppEnterBackground: function(e) {
                S.onAppEnterBackground.call(ie, e)
            },
            onAppEnterForeground: function(e) {
                S.onAppEnterForeground.call(ie, e)
            },
            onAppUnhang: function(e) {
                S.onAppUnhang.call(ie, e)
            },
            setAppData: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = arguments[2];
                arguments[3];
                if (t.forceUpdate = "undefined" != typeof t.forceUpdate && t.forceUpdate,
                (0,
                f.isObject)(e) === !1)
                    throw new f.AppServiceSdkKnownError("setAppData:data should be an object");
                var r = !1
                  , o = {}
                  , i = function(e, t, n) {
                    r = !0,
                    o[e] = t,
                    "Array" === n || "Object" === n ? q[e] = JSON.parse(JSON.stringify(t)) : q[e] = t
                }
                ;
                for (var a in e) {
                    var u = e[a]
                      , c = q[a]
                      , l = (0,
                    f.getDataType)(c)
                      , p = (0,
                    f.getDataType)(u);
                    l !== p ? i(a, u, p) : "Array" == l || "Object" == l ? JSON.stringify(c) !== JSON.stringify(u) && i(a, u, p) : "String" == l || "Number" == l || "Boolean" == l ? c.toString() !== u.toString() && i(a, u, p) : "Date" == l ? c.getTime().toString() !== u.getTime().toString() && i(a, u, p) : c !== u && i(a, u, p)
                }
                t.forceUpdate ? (0,
                s.publish)("appDataChange", {
                    data: e,
                    option: {
                        timestamp: Date.now(),
                        forceUpdate: !0
                    }
                }, n) : r && (0,
                s.publish)("appDataChange", {
                    data: o
                }, n)
            },
            onPageEvent: function(e, t) {
                console.warn("'onPageEvent' is deprecated, use 'Page[eventName]'")
            },
            createAnimation: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (a("createAnimation", e, {}))
                    return new p.default(e)
            },
            createAudioContext: function(e) {
                return h.default.call(ie, e, re)
            },
            createVideoContext: function(e) {
                return g.default.call(ie, e, re)
            },
            createMapContext: function(e) {
                return new y.MapContext(e)
            },
            onWebviewEvent: function(e, t) {
                X = e,
                (0,
                s.subscribe)("PAGE_EVENT", function(t) {
                    var n = t.data
                      , r = t.eventName
                      , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    e({
                        data: n,
                        eventName: r,
                        webviewId: o
                    })
                })
            },
            onNativeEvent: function(e) {
                ["onCanvasTouchStart", "onCanvasTouchMove", "onCanvasTouchEnd"].forEach(function(t) {
                    (0,
                    s.onMethod)(t, function(n, r) {
                        e({
                            data: n,
                            eventName: t,
                            webviewId: r
                        })
                    })
                })
            },
            hideKeyboard: function(e) {
                "devtools" == (0,
                f.getPlatform)() ? (0,
                s.publish)("hideKeyboard", {}) : (0,
                s.invokeMethod)("hideKeyboard", e)
            },
            getPublicLibVersion: function() {
                var e = void 0;
                return (0,
                s.invokeMethod)("getPublicLibVersion", {
                    complete: function(t) {
                        t.version ? e = t.version : (e = t,
                        delete e.errMsg)
                    }
                }),
                e
            },
            showModal: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = {
                    title: "",
                    content: "",
                    confirmText: "确定",
                    cancelText: "取消",
                    showCancel: !0,
                    confirmColor: "#3CC51F",
                    cancelColor: "#000000"
                };
                if (t = (0,
                f.extend)(t, e),
                a("showModal", t, {
                    title: "",
                    content: "",
                    confirmText: "",
                    cancelText: "",
                    confirmColor: "",
                    cancelColor: ""
                }))
                    return t.confirmText.length > 4 ? void oe("showModal", e, "confirmText length should not large then 4") : t.cancelText.length > 4 ? void oe("showModal", e, "cancelText length should not large then 4") : void (0,
                    s.invokeMethod)("showModal", t, {
                        beforeSuccess: function(e) {
                            e.confirm = Boolean(e.confirm),
                            "ios" === (0,
                            f.getPlatform)() ? e.cancel = !e.confirm : e.cancel = !e.confirm && Boolean(e.cancel)
                        }
                    })
            },
            showToast: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = {
                    duration: 1500,
                    title: "",
                    icon: "success",
                    mask: !1
                };
                t = (0,
                f.extend)(t, e),
                e.image && (t.image = (0,
                f.getRealRoute)(N.default.lastRoute, e.image, !1)),
                ["success", "loading"].indexOf(t.icon) < 0 && (t.icon = "success"),
                a("showToast", t, {
                    duration: 1,
                    title: "",
                    icon: ""
                }) && (0,
                s.invokeMethod)("showToast", t)
            },
            hideToast: function(e) {
                (0,
                s.invokeMethod)("hideToast", e)
            },
            showLoading: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = {
                    title: "",
                    icon: "loading",
                    mask: !1,
                    duration: 1e8
                };
                t = (0,
                f.extend)(t, e),
                e.image && (t.image = (0,
                f.getRealRoute)(N.default.lastRoute, e.image, !1)),
                a("showLoading", t, {
                    duration: 1,
                    title: ""
                }) && (0,
                s.invokeMethod)("showToast", t, {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("showToast", "showLoading")
                    }
                })
            },
            hideLoading: function(e) {
                (0,
                s.invokeMethod)("hideToast", e, {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("hideToast", "hideLoading")
                    }
                })
            },
            showActionSheet: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = {
                    itemList: [],
                    itemColor: "#000000"
                };
                if (t = (0,
                f.extend)(t, e),
                t.cancelText = "取消",
                t.cancelColor = "#000000",
                a("showActionSheet", t, {
                    itemList: ["1"],
                    itemColor: ""
                }))
                    return e.itemList.length > 6 ? void oe("showActionSheet", e, "parameter error: itemList should not be large than 6") : void (0,
                    s.invokeMethod)("showActionSheet", t, {
                        beforeCancel: function(t) {
                            try {
                                "function" == typeof e.success && e.success({
                                    errMsg: "showActionSheet:ok",
                                    cancel: !0
                                })
                            } catch (e) {
                                Reporter.thirdErrorReport({
                                    error: e,
                                    extend: "showActionSheet success callback error"
                                })
                            }
                        }
                    })
            },
            getSavedFileList: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                s.invokeMethod)("getSavedFileList", e)
            },
            getSavedFileInfo: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("getSavedFileInfo", e, {
                    filePath: ""
                }) && (0,
                s.invokeMethod)("getSavedFileInfo", e)
            },
            removeSavedFile: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a("removeSavedFile", e, {
                    filePath: ""
                }) && (0,
                s.invokeMethod)("removeSavedFile", e)
            },
            reportAnalytics: function(e, t) {
                var n = "function" == typeof getCurrentPages && getCurrentPages()
                  , r = n && n.pop && n.pop()
                  , o = {
                    eventID: e,
                    data: t || {},
                    page: r && r.__route__,
                    uid: Date.now().toString(16) + Math.random().toString(16).substr(2),
                    type: 1,
                    version: ie && ie.version && ie.version.version || 0
                };
                console.info("[自定义分析] 上报成功"),
                console.info(o),
                WeixinJSBridge.invoke("reportRealtimeAction", {
                    actionData: JSON.stringify(o)
                })
            },
            getClipboardData: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0,
                f.checkClientVersion)(369427744, 637862964) ? void (0,
                s.invokeMethod)("getClipboardData", e) : void oe("getClipboardData", e, "client not support")
            },
            setClipboardData: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0,
                f.checkClientVersion)(369427744, 637862964) ? void (a("setClipboardData", e, {
                    data: ""
                }) && (0,
                s.invokeMethod)("setClipboardData", e)) : void oe("setClipboardData", e, "client not support")
            }
        };
        ie.onAppEnterBackground(),
        ie.onAppEnterForeground(),
        ie.onAppUnhang(),
        ie.appStatus = b.AppStatus.FORE_GROUND,
        ie.hanged = !1,
        (0,
        s.subscribe)("INVOKE_METHOD", function(e, t) {
            var n = e.name
              , r = e.args;
            ie[n](r, !0)
        }),
        (0,
        s.subscribe)("WEBVIEW_ERROR_MSG", function(e, t) {
            var n = e.msg;
            Reporter.triggerErrorMessage(n)
        }),
        (0,
        s.onMethod)("onAppRoute", function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (e.path = e.path.substring(0, e.path.length - 5),
            e.webviewId = "undefined" != typeof e.webviewId ? e.webviewId : t,
            N.default.lastRoute = e.path,
            "appLaunch" !== e.openType)
                for (var n in e.query)
                    e.query[n] = decodeURIComponent(e.query[n]);
            N.default.query = e.query,
            "navigateBack" != e.openType && "redirectTo" != e.openType || (0,
            w.clearOldWebviewCanvas)(),
            (0,
            w.notifyWebviewIdtoCanvas)(e.webviewId),
            (0,
            y.notifyWebviewIdtoMap)(e.webviewId),
            re = e.webviewId,
            H.forEach(function(t) {
                t(e)
            })
        }),
        (0,
        s.onMethod)("onAppRouteDone", function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            e.path = e.path.substring(0, e.path.length - 5),
            e.webviewId = "undefined" != typeof e.webviewId ? e.webviewId : t,
            N.default.lastRoute = e.path,
            $.forEach(function(t) {
                t(e)
            }),
            (0,
            s.publish)("onAppRouteDone", {}, [t])
        }),
        (0,
        s.onMethod)("onKeyboardValueChange", function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = e.value
              , r = e.cursor;
            if (e.data && "function" == typeof X) {
                var o = JSON.parse(e.data);
                if (o.bindinput) {
                    var i;
                    try {
                        i = X({
                            data: {
                                type: "input",
                                target: o.target,
                                currentTarget: o.target,
                                timeStamp: Date.now(),
                                touches: [],
                                detail: {
                                    value: e.value,
                                    cursor: e.cursor
                                }
                            },
                            eventName: o.bindinput,
                            webviewId: t
                        })
                    } catch (e) {
                        throw new f.AppServiceSdkKnownError("bind key input error")
                    }
                    if (o.setKeyboardValue)
                        if (void 0 === i || null === i || i === !1)
                            ;
                        else if ("Object" === (0,
                        f.getDataType)(i)) {
                            var a = {
                                inputId: e.inputId
                            };
                            n != i.value && (a.value = i.value + ""),
                            isNaN(parseInt(i.cursor)) || (a.cursor = parseInt(i.cursor),
                            "undefined" == typeof a.value && (a.value = n),
                            a.cursor > a.value.length && (a.cursor = -1)),
                            (0,
                            s.invokeMethod)("setKeyboardValue", a)
                        } else
                            n != i && (0,
                            s.invokeMethod)("setKeyboardValue", {
                                value: i + "",
                                cursor: -1,
                                inputId: e.inputId
                            })
                }
            }
            (0,
            s.publish)("setKeyboardValue", {
                value: n,
                cursor: r,
                inputId: e.inputId
            }, [t])
        });
        var ae = function(e, t, n) {
            var r = []
              , o = [];
            if ("onTouchStart" === t) {
                for (var i in e)
                    r.push(e[i]);
                var a = {
                    x: n.touch.x,
                    y: n.touch.y,
                    identifier: n.touch.id
                };
                o.push(a),
                r.push(a)
            } else if ("onTouchMove" === t)
                for (var u in e) {
                    var c = e[u]
                      , s = !1;
                    for (var f in n.touches) {
                        var l = {
                            x: n.touches[f].x,
                            y: n.touches[f].y,
                            identifier: n.touches[f].id
                        };
                        if (l.identifier === c.identifier && (c.x !== l.x || c.y !== l.y)) {
                            r.push(l),
                            o.push(l),
                            s = !0;
                            break
                        }
                    }
                    s || r.push(c)
                }
            else if ("onTouchEnd" === t) {
                var p = {
                    x: n.touch.x,
                    y: n.touch.y,
                    identifier: n.touch.id
                };
                for (var d in e) {
                    var h = e[d];
                    h.identifier === p.identifier ? o.push(p) : r.push(h)
                }
            } else if ("onTouchCancel" === t)
                for (var v in n.touches) {
                    var g = {
                        x: n.touches[v].x,
                        y: n.touches[v].y,
                        identifier: n.touches[v].id
                    };
                    o.push(g)
                }
            else if ("onLongPress" === t) {
                var y = {
                    x: n.touch.x,
                    y: n.touch.y,
                    identifier: n.touch.id
                };
                for (var b in e)
                    e[b].identifier === y.identifier ? r.push(y) : r.push(e[b]);
                o.push(y)
            }
            return {
                touches: r,
                changedTouches: o
            }
        }
          , ue = {
            onTouchStart: "touchstart",
            onTouchMove: "touchmove",
            onTouchEnd: "touchend",
            onTouchCancel: "touchcancel",
            onLongPress: "longtap"
        };
        ["onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel", "onLongPress"].forEach(function(e) {
            (0,
            s.onMethod)(e, function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , r = JSON.parse(t.data)
                  , o = r.canvasNumber;
                w.canvasInfo.hasOwnProperty(o) || console.error("No such canvas " + o + " register in " + n + ", but trigger " + e + " event.");
                var i = w.canvasInfo[o].data
                  , a = ae(i.lastTouches, e, t)
                  , u = a.touches
                  , c = a.changedTouches;
                i.lastTouches = u,
                i[e] && "function" == typeof X && ("onTouchMove" === e && 0 === c.length || X({
                    data: {
                        type: ue[e],
                        timeStamp: new Date - i.startTime,
                        target: i.target,
                        touches: u,
                        changedTouches: c
                    },
                    eventName: i[e],
                    webviewId: n
                }))
            })
        }),
        ["onVideoPlay", "onVideoPause", "onVideoEnded", "onVideoTimeUpdate", "onVideoClickFullScreenBtn", "onVideoClickDanmuBtn"].forEach(function(e) {
            (0,
            s.onMethod)(e, function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = arguments[1]
                  , r = "bind" + e.substring(7).toLowerCase()
                  , o = JSON.parse(t.data)
                  , i = o.handlers
                  , a = o.event
                  , u = o.createdTimestamp;
                if (i[r] && "function" == typeof X) {
                    var c = {
                        type: r.substring(4),
                        target: a.target,
                        currentTarget: a.currentTarget,
                        timeStamp: Date.now() - u,
                        detail: {}
                    };
                    "bindtimeupdate" === r && (c.detail = {
                        currentTime: t.position
                    }),
                    X({
                        data: c,
                        eventName: i[r],
                        webviewId: n
                    })
                }
            })
        }),
        (0,
        s.onMethod)("onAccelerometerChange", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            Q.forEach(function(t) {
                "function" == typeof t && t(e)
            })
        }),
        (0,
        s.onMethod)("onCompassChange", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            ee.forEach(function(t) {
                "function" == typeof t && t(e)
            })
        }),
        (0,
        s.onMethod)("onNetworkStatusChange", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            te.forEach(function(t) {
                "function" == typeof t && t(e)
            })
        }),
        (0,
        s.onMethod)("onError", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            console.error("thirdScriptError", "\n", "sdk uncaught third Error", "\n", e.message, "\n", e.stack)
        }),
        (0,
        s.onMethod)("onMapMarkerClick", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (e.data && "function" == typeof X) {
                var n = JSON.parse(e.data);
                n.bindmarkertap && X({
                    data: {
                        markerId: n.markerId
                    },
                    eventName: n.bindmarkertap,
                    webviewId: t
                })
            }
        }),
        (0,
        s.onMethod)("onMapControlClick", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (e.data && "function" == typeof X) {
                var n = JSON.parse(e.data);
                n.bindcontroltap && X({
                    data: {
                        controlId: n.controlId
                    },
                    eventName: n.bindcontroltap,
                    webviewId: t
                })
            }
        }),
        (0,
        s.onMethod)("onMapRegionChange", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = y.mapInfo[t + "_" + e.mapId];
            n && n.bindregionchange && "function" == typeof X && X({
                data: {
                    type: e.type
                },
                eventName: n.bindregionchange,
                webviewId: t
            })
        }),
        (0,
        s.onMethod)("onMapClick", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = y.mapInfo[t + "_" + e.mapId];
            n && n.bindtap && "function" == typeof X && X({
                data: {},
                eventName: n.bindtap,
                webviewId: t
            })
        });
        for (var ce in ie)
            i(ce);
        __wxConfig.karmaTest === !0 ? e.exports = ie : e.exports = Y
    }
    , function(e, t, n) {
        function r() {
            WeixinJSBridge.invoke.apply(WeixinJSBridge, arguments)
        }
        function o() {
            WeixinJSBridge.on.apply(WeixinJSBridge, arguments)
        }
        function i() {
            var e = Array.prototype.slice.call(arguments);
            e[1] = {
                data: e[1],
                options: {
                    timestamp: Date.now()
                }
            },
            WeixinJSBridge.publish.apply(WeixinJSBridge, e)
        }
        function a() {
            var e = Array.prototype.slice.call(arguments)
              , t = e[1];
            e[1] = function(e, n) {
                var r = e.data
                  , o = e.options
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , a = o && o.timestamp || 0
                  , u = Date.now();
                "function" == typeof t && t(r, n),
                Reporter.speedReport({
                    key: "webview2AppService",
                    data: r || {},
                    timeMark: {
                        startTime: a,
                        endTime: u,
                        nativeTime: i.nativeTime || 0
                    }
                })
            }
            ,
            WeixinJSBridge.subscribe.apply(WeixinJSBridge, e)
        }
        function u(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            t = (0,
            s.assign)({}, t);
            var o = {};
            for (var i in t)
                "function" == typeof t[i] && (__wxConfig.karmaTest === !0 ? o[i] = t[i] : o[i] = Reporter.surroundThirdByTryCatch(t[i], "at api " + e + " " + i + " callback function"),
                delete t[i]);
            var a = {};
            for (var u in n)
                "function" == typeof n[u] && (a[u] = (0,
                s.surroundByTryCatchFactory)(n[u], "at api " + e + " " + u + " callback function"));
            r(e, t, function(t) {
                t.errMsg = t.errMsg || e + ":ok";
                var n = 0 === t.errMsg.indexOf(e + ":ok")
                  , r = 0 === t.errMsg.indexOf(e + ":cancel")
                  , i = 0 === t.errMsg.indexOf(e + ":fail");
                if ("function" == typeof a.beforeAll && a.beforeAll(t),
                n)
                    "function" == typeof a.beforeSuccess && a.beforeSuccess(t),
                    "function" == typeof o.success && o.success(t),
                    "function" == typeof a.afterSuccess && a.afterSuccess(t);
                else if (r)
                    t.errMsg = t.errMsg.replace(e + ":cancel", e + ":fail cancel"),
                    "function" == typeof o.fail && o.fail(t),
                    "function" == typeof a.beforeCancel && a.beforeCancel(t),
                    "function" == typeof o.cancel && o.cancel(t),
                    "function" == typeof a.afterCancel && a.afterCancel(t);
                else if (i) {
                    "function" == typeof a.beforeFail && a.beforeFail(t),
                    "function" == typeof o.fail && o.fail(t);
                    var u = !0;
                    "function" == typeof a.afterFail && (u = a.afterFail(t)),
                    u !== !1 && Reporter.reportIDKey({
                        key: e + "_fail"
                    })
                }
                "function" == typeof o.complete && o.complete(t),
                "function" == typeof a.afterAll && a.afterAll(t)
            }),
            Reporter.reportIDKey({
                key: e
            })
        }
        function c(e, t) {
            o(e, (0,
            s.surroundByTryCatchFactory)(t, "at api " + e + " callback function"))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.invoke = r,
        t.on = o,
        t.publish = i,
        t.subscribe = a,
        t.invokeMethod = u,
        t.onMethod = c;
        var s = n(2)
    }
    , function(e, t) {
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function i(e, t) {
            return __wxConfig.karmaTest === !0 ? e : function() {
                try {
                    return e.apply(e, arguments)
                } catch (e) {
                    if ("[object Error]" === Object.prototype.toString.apply(e)) {
                        if ("AppServiceSdkKnownError" == e.type)
                            throw e;
                        Reporter.errorReport({
                            key: "appServiceSDKScriptError",
                            error: e,
                            extend: t
                        })
                    }
                }
            }
        }
        function a(e) {
            var t = Object.prototype.toString.call(e).split(" ")[1].split("]")[0];
            if ("Array" == t || "Object" == t)
                try {
                    e = JSON.stringify(e)
                } catch (e) {
                    throw e.type = "AppServiceSdkKnownError",
                    e
                }
            else
                e = "String" == t || "Number" == t || "Boolean" == t ? e.toString() : "Date" == t ? e.getTime().toString() : "Undefined" == t ? "undefined" : "Null" == t ? "null" : "";
            return {
                data: e,
                dataType: t
            }
        }
        function u(e, t) {
            return e = "String" == t ? e : "Array" == t || "Object" == t ? JSON.parse(e) : "Number" == t ? parseFloat(e) : "Boolean" == t ? "true" == e : "Date" == t ? new Date(parseInt(e)) : "Undefined" == t ? void 0 : "Null" == t ? null : ""
        }
        function c(e) {
            return Object.prototype.toString.call(e).split(" ")[1].split("]")[0]
        }
        function s(e) {
            return "Object" === c(e)
        }
        function f(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "parameter"
              , r = c(t)
              , o = c(e);
            if (o != r)
                return n + " should be " + r + " instead of " + o + ";";
            switch (result = "",
            r) {
            case "Object":
                for (var i in t)
                    result += f(e[i], t[i], n + "." + i);
                break;
            case "Array":
                if (e.length < t.length)
                    return n + " should have at least " + t.length + " item;";
                for (var a = 0; a < t.length; ++a)
                    result += f(e[a], t[a], n + "[" + a + "]")
            }
            return result
        }
        function l(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (n && (t = b(t)),
            0 === t.indexOf("/"))
                return t.substr(1);
            if (0 === t.indexOf("./"))
                return l(e, t.substr(2), !1);
            var r, o, i = t.split("/");
            for (r = 0,
            o = i.length; r < o && ".." === i[r]; r++)
                ;
            i.splice(0, r);
            var t = i.join("/")
              , a = e.length > 0 ? e.split("/") : [];
            a.splice(a.length - r - 1, r + 1);
            var u = a.concat(i)
              , c = u.join("/");
            return c
        }
        function p() {
            return "undefined" != typeof window && window.navigator ? window.navigator.userAgent.indexOf("appservice") > -1 ? "devtools" : window.navigator.userAgent.toLowerCase().indexOf("android") > -1 ? "android" : "" : "android" === __wxConfig.platform ? "android" : "devtools" === __wxConfig.platform ? "devtools" : "ios"
        }
        function d(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if ("object" !== ("undefined" == typeof e ? "undefined" : P(e)))
                return e;
            var n = [];
            for (var r in e)
                if (e.hasOwnProperty(r))
                    if (t)
                        try {
                            n.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]))
                        } catch (t) {
                            n.push(r + "=" + e[r])
                        }
                    else
                        n.push(r + "=" + e[r]);
            return n.join("&")
        }
        function h(e, t) {
            if ("string" == typeof e && "object" === ("undefined" == typeof t ? "undefined" : P(t)) && Object.keys(t).length > 0) {
                var n = e.split("?")
                  , r = n[0]
                  , o = (n[1] || "").split("&").reduce(function(e, t) {
                    if ("string" == typeof t && t.length > 0) {
                        var n = t.split("=")
                          , r = n[0]
                          , o = n[1];
                        e[r] = o
                    }
                    return e
                }, {})
                  , i = Object.keys(t).reduce(function(e, n) {
                    return "object" === P(t[n]) ? e[encodeURIComponent(n)] = encodeURIComponent(JSON.stringify(t[n])) : e[encodeURIComponent(n)] = encodeURIComponent(t[n]),
                    e
                }, {});
                return r + "?" + d(g(o, i))
            }
            return e
        }
        function v(e) {
            return /^(http|https):\/\/.*/i.test(e)
        }
        function g() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.reduce(function(e, t) {
                for (var n in t)
                    e[n] = t[n];
                return e
            }, {})
        }
        function y(e) {
            if ("string" == typeof e) {
                var t = e.split("?")
                  , n = t[0]
                  , r = (t[1] || "").split("&").reduce(function(e, t) {
                    if ("string" == typeof t && t.length > 0) {
                        var n = t.split("=")
                          , r = n[0]
                          , o = n[1];
                        e[r] = o
                    }
                    return e
                }, {})
                  , o = [];
                for (var i in r)
                    r.hasOwnProperty(i) && o.push(i + "=" + encodeURIComponent(r[i]));
                return o.length > 0 ? n + "?" + o.join("&") : e
            }
            return e
        }
        function b(e) {
            if ("string" != typeof e)
                throw new C("wx.redirectTo: invalid url:" + e);
            var t = e.split("?")[0]
              , n = e.split("?")[1];
            return t += ".html",
            "undefined" != typeof n ? t + "?" + n : t
        }
        function m(e) {
            return "string" == typeof e ? e.indexOf("?") !== -1 ? e.replace(/\.html\?/, "?") : e.replace(/\.html$/, "") : e
        }
        function w(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function _(e) {
            for (var t = "", n = new Uint8Array(e), r = n.byteLength, o = 0; o < r; o++)
                t += String.fromCharCode(n[o]);
            return O(t)
        }
        function S(e) {
            for (var t = I(e), n = t.length, r = new Uint8Array(n), o = 0; o < n; o++)
                r[o] = t.charCodeAt(o);
            return r.buffer
        }
        function k(e, t) {
            var n = new FileReader;
            n.onload = function() {
                t(this.result)
            }
            ,
            n.readAsArrayBuffer(e)
        }
        function x(e) {
            return Object.keys(e).reduce(function(t, n) {
                return "string" == typeof e[n] ? t[n] = e[n] : "number" == typeof e[n] ? t[n] = e[n] + "" : t[n] = Object.prototype.toString.apply(e[n]),
                t
            }, {})
        }
        function M() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0
                  , n = "x" == e ? t : 3 & t | 8;
                return n.toString(16)
            })
        }
        function A(e, t) {
            var n = p();
            switch (n) {
            case "devtools":
                return !0;
            case "ios":
                return j > e;
            case "android":
                return j > t
            }
            return !1
        }
        function T(e, t, n) {
            s(e) !== !1 && t != n && e.hasOwnProperty(t) && (e[n] = e[t],
            delete e[t])
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        t.surroundByTryCatchFactory = i,
        t.getDataType = c,
        t.isObject = s,
        t.paramCheck = f,
        t.getRealRoute = l,
        t.getPlatform = p,
        t.urlEncodeFormData = d,
        t.addQueryStringToUrl = h,
        t.validateUrl = v,
        t.assign = g,
        t.encodeUrlQuery = y,
        t.transWxmlToHtml = b,
        t.removeHtmlSuffixFromUrl = m,
        t.extend = w,
        t.arrayBufferToBase64 = _,
        t.base64ToArrayBuffer = S,
        t.blobToArrayBuffer = k,
        t.convertObjectValueToString = x,
        t.guid = M,
        t.checkClientVersion = A,
        t.renameProperty = T;
        var C = (t.anyTypeToString = i(a, "anyTypeToString"),
        t.stringToAnyType = i(u, "stringToAnyType"),
        t.AppServiceSdkKnownError = function(e) {
            function t(e) {
                n(this, t);
                var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "APP-SERVICE-SDK:" + e));
                return o.type = "AppServiceSdkKnownError",
                o
            }
            return o(t, e),
            t
        }(Error))
          , E = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          , O = O || function(e) {
            for (var t, n, r = String(e), o = "", i = 0, a = E; r.charAt(0 | i) || (a = "=",
            i % 1); o += a.charAt(63 & t >> 8 - i % 1 * 8)) {
                if (n = r.charCodeAt(i += .75),
                n > 255)
                    throw new Error('"btoa" failed');
                t = t << 8 | n
            }
            return o
        }
          , I = I || function(e) {
            var t = String(e).replace(/=+$/, "")
              , n = "";
            if (t.length % 4 === 1)
                throw new Error('"atob" failed');
            for (var r, o, i = 0, a = 0; o = t.charAt(a++); ~o && (r = i % 4 ? 64 * r + o : o,
            i++ % 4) ? n += String.fromCharCode(255 & r >> (-2 * i & 6)) : 0)
                o = E.indexOf(o);
            return n
        }
          , j = __wxConfig.clientVersion || 1
    }
    , function(e, t) {
        function n(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , i = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                r(this, e),
                this.actions = [],
                this.currentTransform = [],
                this.currentStepAnimates = [],
                this.option = {
                    transition: {
                        duration: "undefined" != typeof t.duration ? t.duration : 400,
                        timingFunction: "undefined" != typeof t.timingFunction ? t.timingFunction : "linear",
                        delay: "undefined" != typeof t.delay ? t.delay : 0
                    },
                    transformOrigin: t.transformOrigin || "50% 50% 0"
                }
            }
            return o(e, [{
                key: "export",
                value: function() {
                    var e = this.actions;
                    return this.actions = [],
                    {
                        actions: e
                    }
                }
            }, {
                key: "step",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.currentStepAnimates.forEach(function(t) {
                        "style" !== t.type ? e.currentTransform[t.type] = t : e.currentTransform[t.type + "." + t.args[0]] = t
                    }),
                    this.actions.push({
                        animates: Object.keys(this.currentTransform).reduce(function(t, r) {
                            return [].concat(n(t), [e.currentTransform[r]])
                        }, []),
                        option: {
                            transformOrigin: "undefined" != typeof t.transformOrigin ? t.transformOrigin : this.option.transformOrigin,
                            transition: {
                                duration: "undefined" != typeof t.duration ? t.duration : this.option.transition.duration,
                                timingFunction: "undefined" != typeof t.timingFunction ? t.timingFunction : this.option.transition.timingFunction,
                                delay: "undefined" != typeof t.delay ? t.delay : this.option.transition.delay
                            }
                        }
                    }),
                    this.currentStepAnimates = [],
                    this
                }
            }, {
                key: "matrix",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
                      , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1
                      , i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
                    return this.currentStepAnimates.push({
                        type: "matrix",
                        args: [e, t, n, r, o, i]
                    }),
                    this
                }
            }, {
                key: "matrix3d",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
                      , i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1
                      , a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0
                      , u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0
                      , c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0
                      , s = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0
                      , f = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 1
                      , l = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0
                      , p = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0
                      , d = arguments.length > 13 && void 0 !== arguments[13] ? arguments[13] : 0
                      , h = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 0
                      , v = arguments.length > 15 && void 0 !== arguments[15] ? arguments[15] : 1;
                    return this.currentStepAnimates.push({
                        type: "matrix3d",
                        args: [e, t, n, r, o, i, a, u, c, s, f, l, p, d, h, v]
                    }),
                    this.stepping = !1,
                    this
                }
            }, {
                key: "rotate",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.currentStepAnimates.push({
                        type: "rotate",
                        args: [e]
                    }),
                    this
                }
            }, {
                key: "rotate3d",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    return this.currentStepAnimates.push({
                        type: "rotate3d",
                        args: [e, t, n, r]
                    }),
                    this.stepping = !1,
                    this
                }
            }, {
                key: "rotateX",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.currentStepAnimates.push({
                        type: "rotateX",
                        args: [e]
                    }),
                    this.stepping = !1,
                    this
                }
            }, {
                key: "rotateY",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.currentStepAnimates.push({
                        type: "rotateY",
                        args: [e]
                    }),
                    this.stepping = !1,
                    this
                }
            }, {
                key: "rotateZ",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.currentStepAnimates.push({
                        type: "rotateZ",
                        args: [e]
                    }),
                    this.stepping = !1,
                    this
                }
            }, {
                key: "scale",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                      , t = arguments[1];
                    return t = "undefined" != typeof t ? t : e,
                    this.currentStepAnimates.push({
                        type: "scale",
                        args: [e, t]
                    }),
                    this
                }
            }, {
                key: "scale3d",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    return this.currentStepAnimates.push({
                        type: "scale3d",
                        args: [e, t, n]
                    }),
                    this
                }
            }, {
                key: "scaleX",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    return this.currentStepAnimates.push({
                        type: "scaleX",
                        args: [e]
                    }),
                    this
                }
            }, {
                key: "scaleY",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    return this.currentStepAnimates.push({
                        type: "scaleY",
                        args: [e]
                    }),
                    this
                }
            }, {
                key: "scaleZ",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    return this.currentStepAnimates.push({
                        type: "scaleZ",
                        args: [e]
                    }),
                    this
                }
            }, {
                key: "skew",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return this.currentStepAnimates.push({
                        type: "skew",
                        args: [e, t]
                    }),
                    this
                }
            }, {
                key: "skewX",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.currentStepAnimates.push({
                        type: "skewX",
                        args: [e]
                    }),
                    this
                }
            }, {
                key: "skewY",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.currentStepAnimates.push({
                        type: "skewY",
                        args: [e]
                    }),
                    this
                }
            }, {
                key: "translate",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return this.currentStepAnimates.push({
                        type: "translate",
                        args: [e, t]
                    }),
                    this
                }
            }, {
                key: "translate3d",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return this.currentStepAnimates.push({
                        type: "translate3d",
                        args: [e, t, n]
                    }),
                    this
                }
            }, {
                key: "translateX",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.currentStepAnimates.push({
                        type: "translateX",
                        args: [e]
                    }),
                    this
                }
            }, {
                key: "translateY",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.currentStepAnimates.push({
                        type: "translateY",
                        args: [e]
                    }),
                    this
                }
            }, {
                key: "translateZ",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.currentStepAnimates.push({
                        type: "translateZ",
                        args: [e]
                    }),
                    this
                }
            }, {
                key: "opacity",
                value: function(e) {
                    return this.currentStepAnimates.push({
                        type: "style",
                        args: ["opacity", e]
                    }),
                    this
                }
            }, {
                key: "backgroundColor",
                value: function(e) {
                    return this.currentStepAnimates.push({
                        type: "style",
                        args: ["backgroundColor", e]
                    }),
                    this
                }
            }, {
                key: "width",
                value: function(e) {
                    return "number" == typeof e && (e += "px"),
                    this.currentStepAnimates.push({
                        type: "style",
                        args: ["width", e]
                    }),
                    this
                }
            }, {
                key: "height",
                value: function(e) {
                    return "number" == typeof e && (e += "px"),
                    this.currentStepAnimates.push({
                        type: "style",
                        args: ["height", e]
                    }),
                    this
                }
            }, {
                key: "left",
                value: function(e) {
                    return "number" == typeof e && (e += "px"),
                    this.currentStepAnimates.push({
                        type: "style",
                        args: ["left", e]
                    }),
                    this
                }
            }, {
                key: "right",
                value: function(e) {
                    return "number" == typeof e && (e += "px"),
                    this.currentStepAnimates.push({
                        type: "style",
                        args: ["right", e]
                    }),
                    this
                }
            }, {
                key: "top",
                value: function(e) {
                    return "number" == typeof e && (e += "px"),
                    this.currentStepAnimates.push({
                        type: "style",
                        args: ["top", e]
                    }),
                    this
                }
            }, {
                key: "bottom",
                value: function(e) {
                    return "number" == typeof e && (e += "px"),
                    this.currentStepAnimates.push({
                        type: "style",
                        args: ["bottom", e]
                    }),
                    this
                }
            }]),
            e
        }();
        t.default = i
    }
    , function(e, t, n) {
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            var n = this
              , r = new f(e,t);
            return r._getAppStatus = function() {
                return n.appStatus
            }
            ,
            r._getHanged = function() {
                return n.hanged
            }
            ,
            this.onAppEnterBackground(function() {
                r.pause()
            }),
            r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        t.default = o;
        var a = (n(1),
        n(2),
        n(5))
          , u = n(6)
          , c = {}
          , s = new a.EventEmitter2;
        WeixinJSBridge.subscribe("audioInsert", function(e, t) {
            var n = e.audioId;
            c[t + "_" + n] = !0,
            s.emit("audioInsert_" + t + "_" + n)
        });
        var f = function() {
            function e(t, n) {
                if (r(this, e),
                "string" != typeof t)
                    throw new Error("audioId should be a String");
                this.audioId = t,
                this.webviewId = n
            }
            return i(e, [{
                key: "setSrc",
                value: function(e) {
                    this._sendAction({
                        method: "setSrc",
                        data: e
                    })
                }
            }, {
                key: "play",
                value: function() {
                    var e = this._getAppStatus();
                    this._getHanged();
                    e === u.AppStatus.BACK_GROUND || this._sendAction({
                        method: "play"
                    })
                }
            }, {
                key: "pause",
                value: function() {
                    this._sendAction({
                        method: "pause"
                    })
                }
            }, {
                key: "seek",
                value: function(e) {
                    this._sendAction({
                        method: "setCurrentTime",
                        data: e
                    })
                }
            }, {
                key: "_ready",
                value: function(e) {
                    c[this.webviewId + "_" + this.audioId] ? e() : s.on("audioInsert_" + this.webviewId + "_" + this.audioId, function() {
                        e()
                    })
                }
            }, {
                key: "_sendAction",
                value: function(e) {
                    var t = this;
                    this._ready(function() {
                        WeixinJSBridge.publish("audio_" + t.audioId + "_actionChanged", e, [t.webviewId])
                    })
                }
            }]),
            e
        }()
    }
    , function(e, t, n) {
        var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        !function(i) {
            function a() {
                this._events = {},
                this._conf && u.call(this, this._conf)
            }
            function u(e) {
                e ? (this._conf = e,
                e.delimiter && (this.delimiter = e.delimiter),
                this._events.maxListeners = e.maxListeners !== i ? e.maxListeners : d,
                e.wildcard && (this.wildcard = e.wildcard),
                e.newListener && (this.newListener = e.newListener),
                e.verboseMemoryLeak && (this.verboseMemoryLeak = e.verboseMemoryLeak),
                this.wildcard && (this.listenerTree = {})) : this._events.maxListeners = d
            }
            function c(e, t) {
                var n = "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.";
                this.verboseMemoryLeak ? (n += " Event name: %s.",
                console.error(n, e, t)) : console.error(n, e),
                console.trace && console.trace()
            }
            function s(e) {
                this._events = {},
                this.newListener = !1,
                this.verboseMemoryLeak = !1,
                u.call(this, e)
            }
            function f(e, t, n, r) {
                if (!n)
                    return [];
                var o, i, a, u, c, s, l, p = [], d = t.length, h = t[r], v = t[r + 1];
                if (r === d && n._listeners) {
                    if ("function" == typeof n._listeners)
                        return e && e.push(n._listeners),
                        [n];
                    for (o = 0,
                    i = n._listeners.length; o < i; o++)
                        e && e.push(n._listeners[o]);
                    return [n]
                }
                if ("*" === h || "**" === h || n[h]) {
                    if ("*" === h) {
                        for (a in n)
                            "_listeners" !== a && n.hasOwnProperty(a) && (p = p.concat(f(e, t, n[a], r + 1)));
                        return p
                    }
                    if ("**" === h) {
                        l = r + 1 === d || r + 2 === d && "*" === v,
                        l && n._listeners && (p = p.concat(f(e, t, n, d)));
                        for (a in n)
                            "_listeners" !== a && n.hasOwnProperty(a) && ("*" === a || "**" === a ? (n[a]._listeners && !l && (p = p.concat(f(e, t, n[a], d))),
                            p = p.concat(f(e, t, n[a], r))) : p = a === v ? p.concat(f(e, t, n[a], r + 2)) : p.concat(f(e, t, n[a], r)));
                        return p
                    }
                    p = p.concat(f(e, t, n[h], r + 1))
                }
                if (u = n["*"],
                u && f(e, t, u, r + 1),
                c = n["**"])
                    if (r < d) {
                        c._listeners && f(e, t, c, d);
                        for (a in c)
                            "_listeners" !== a && c.hasOwnProperty(a) && (a === v ? f(e, t, c[a], r + 2) : a === h ? f(e, t, c[a], r + 1) : (s = {},
                            s[a] = c[a],
                            f(e, t, {
                                "**": s
                            }, r + 1)))
                    } else
                        c._listeners ? f(e, t, c, d) : c["*"] && c["*"]._listeners && f(e, t, c["*"], d);
                return p
            }
            function l(e, t) {
                e = "string" == typeof e ? e.split(this.delimiter) : e.slice();
                for (var n = 0, r = e.length; n + 1 < r; n++)
                    if ("**" === e[n] && "**" === e[n + 1])
                        return;
                for (var o = this.listenerTree, a = e.shift(); a !== i; ) {
                    if (o[a] || (o[a] = {}),
                    o = o[a],
                    0 === e.length)
                        return o._listeners ? ("function" == typeof o._listeners && (o._listeners = [o._listeners]),
                        o._listeners.push(t),
                        !o._listeners.warned && this._events.maxListeners > 0 && o._listeners.length > this._events.maxListeners && (o._listeners.warned = !0,
                        c.call(this, o._listeners.length, a))) : o._listeners = t,
                        !0;
                    a = e.shift()
                }
                return !0
            }
            var p = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
              , d = 10;
            s.EventEmitter2 = s,
            s.prototype.delimiter = ".",
            s.prototype.setMaxListeners = function(e) {
                e !== i && (this._events || a.call(this),
                this._events.maxListeners = e,
                this._conf || (this._conf = {}),
                this._conf.maxListeners = e)
            }
            ,
            s.prototype.event = "",
            s.prototype.once = function(e, t) {
                return this.many(e, 1, t),
                this
            }
            ,
            s.prototype.many = function(e, t, n) {
                function r() {
                    0 === --t && o.off(e, r),
                    n.apply(this, arguments)
                }
                var o = this;
                if ("function" != typeof n)
                    throw new Error("many only accepts instances of Function");
                return r._origin = n,
                this.on(e, r),
                o
            }
            ,
            s.prototype.emit = function() {
                this._events || a.call(this);
                var e = arguments[0];
                if ("newListener" === e && !this.newListener && !this._events.newListener)
                    return !1;
                var t, n, r, o, i, u = arguments.length;
                if (this._all && this._all.length) {
                    if (i = this._all.slice(),
                    u > 3)
                        for (t = new Array(u),
                        o = 0; o < u; o++)
                            t[o] = arguments[o];
                    for (r = 0,
                    n = i.length; r < n; r++)
                        switch (this.event = e,
                        u) {
                        case 1:
                            i[r].call(this, e);
                            break;
                        case 2:
                            i[r].call(this, e, arguments[1]);
                            break;
                        case 3:
                            i[r].call(this, e, arguments[1], arguments[2]);
                            break;
                        default:
                            i[r].apply(this, t)
                        }
                }
                if (this.wildcard) {
                    i = [];
                    var c = "string" == typeof e ? e.split(this.delimiter) : e.slice();
                    f.call(this, i, c, this.listenerTree, 0)
                } else {
                    if (i = this._events[e],
                    "function" == typeof i) {
                        switch (this.event = e,
                        u) {
                        case 1:
                            i.call(this);
                            break;
                        case 2:
                            i.call(this, arguments[1]);
                            break;
                        case 3:
                            i.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            for (t = new Array(u - 1),
                            o = 1; o < u; o++)
                                t[o - 1] = arguments[o];
                            i.apply(this, t)
                        }
                        return !0
                    }
                    i && (i = i.slice())
                }
                if (i && i.length) {
                    if (u > 3)
                        for (t = new Array(u - 1),
                        o = 1; o < u; o++)
                            t[o - 1] = arguments[o];
                    for (r = 0,
                    n = i.length; r < n; r++)
                        switch (this.event = e,
                        u) {
                        case 1:
                            i[r].call(this);
                            break;
                        case 2:
                            i[r].call(this, arguments[1]);
                            break;
                        case 3:
                            i[r].call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            i[r].apply(this, t)
                        }
                    return !0
                }
                if (!this._all && "error" === e)
                    throw arguments[1]instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
                return !!this._all
            }
            ,
            s.prototype.emitAsync = function() {
                this._events || a.call(this);
                var e = arguments[0];
                if ("newListener" === e && !this.newListener && !this._events.newListener)
                    return Promise.resolve([!1]);
                var t, n, r, o, i, u = [], c = arguments.length;
                if (this._all) {
                    if (c > 3)
                        for (t = new Array(c),
                        o = 1; o < c; o++)
                            t[o] = arguments[o];
                    for (r = 0,
                    n = this._all.length; r < n; r++)
                        switch (this.event = e,
                        c) {
                        case 1:
                            u.push(this._all[r].call(this, e));
                            break;
                        case 2:
                            u.push(this._all[r].call(this, e, arguments[1]));
                            break;
                        case 3:
                            u.push(this._all[r].call(this, e, arguments[1], arguments[2]));
                            break;
                        default:
                            u.push(this._all[r].apply(this, t))
                        }
                }
                if (this.wildcard) {
                    i = [];
                    var s = "string" == typeof e ? e.split(this.delimiter) : e.slice();
                    f.call(this, i, s, this.listenerTree, 0)
                } else
                    i = this._events[e];
                if ("function" == typeof i)
                    switch (this.event = e,
                    c) {
                    case 1:
                        u.push(i.call(this));
                        break;
                    case 2:
                        u.push(i.call(this, arguments[1]));
                        break;
                    case 3:
                        u.push(i.call(this, arguments[1], arguments[2]));
                        break;
                    default:
                        for (t = new Array(c - 1),
                        o = 1; o < c; o++)
                            t[o - 1] = arguments[o];
                        u.push(i.apply(this, t))
                    }
                else if (i && i.length) {
                    if (c > 3)
                        for (t = new Array(c - 1),
                        o = 1; o < c; o++)
                            t[o - 1] = arguments[o];
                    for (r = 0,
                    n = i.length; r < n; r++)
                        switch (this.event = e,
                        c) {
                        case 1:
                            u.push(i[r].call(this));
                            break;
                        case 2:
                            u.push(i[r].call(this, arguments[1]));
                            break;
                        case 3:
                            u.push(i[r].call(this, arguments[1], arguments[2]));
                            break;
                        default:
                            u.push(i[r].apply(this, t))
                        }
                } else if (!this._all && "error" === e)
                    return arguments[1]instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
                return Promise.all(u)
            }
            ,
            s.prototype.on = function(e, t) {
                if ("function" == typeof e)
                    return this.onAny(e),
                    this;
                if ("function" != typeof t)
                    throw new Error("on only accepts instances of Function");
                return this._events || a.call(this),
                this.emit("newListener", e, t),
                this.wildcard ? (l.call(this, e, t),
                this) : (this._events[e] ? ("function" == typeof this._events[e] && (this._events[e] = [this._events[e]]),
                this._events[e].push(t),
                !this._events[e].warned && this._events.maxListeners > 0 && this._events[e].length > this._events.maxListeners && (this._events[e].warned = !0,
                c.call(this, this._events[e].length, e))) : this._events[e] = t,
                this)
            }
            ,
            s.prototype.onAny = function(e) {
                if ("function" != typeof e)
                    throw new Error("onAny only accepts instances of Function");
                return this._all || (this._all = []),
                this._all.push(e),
                this
            }
            ,
            s.prototype.addListener = s.prototype.on,
            s.prototype.off = function(e, t) {
                function n(e) {
                    if (e !== i) {
                        var t = Object.keys(e);
                        for (var r in t) {
                            var a = t[r]
                              , u = e[a];
                            u instanceof Function || "object" !== ("undefined" == typeof u ? "undefined" : o(u)) || null === u || (Object.keys(u).length > 0 && n(e[a]),
                            0 === Object.keys(u).length && delete e[a])
                        }
                    }
                }
                if ("function" != typeof t)
                    throw new Error("removeListener only takes instances of Function");
                var r, a = [];
                if (this.wildcard) {
                    var u = "string" == typeof e ? e.split(this.delimiter) : e.slice();
                    a = f.call(this, null , u, this.listenerTree, 0)
                } else {
                    if (!this._events[e])
                        return this;
                    r = this._events[e],
                    a.push({
                        _listeners: r
                    })
                }
                for (var c = 0; c < a.length; c++) {
                    var s = a[c];
                    if (r = s._listeners,
                    p(r)) {
                        for (var l = -1, d = 0, h = r.length; d < h; d++)
                            if (r[d] === t || r[d].listener && r[d].listener === t || r[d]._origin && r[d]._origin === t) {
                                l = d;
                                break
                            }
                        if (l < 0)
                            continue;return this.wildcard ? s._listeners.splice(l, 1) : this._events[e].splice(l, 1),
                        0 === r.length && (this.wildcard ? delete s._listeners : delete this._events[e]),
                        this.emit("removeListener", e, t),
                        this
                    }
                    (r === t || r.listener && r.listener === t || r._origin && r._origin === t) && (this.wildcard ? delete s._listeners : delete this._events[e],
                    this.emit("removeListener", e, t))
                }
                return n(this.listenerTree),
                this
            }
            ,
            s.prototype.offAny = function(e) {
                var t, n = 0, r = 0;
                if (e && this._all && this._all.length > 0) {
                    for (t = this._all,
                    n = 0,
                    r = t.length; n < r; n++)
                        if (e === t[n])
                            return t.splice(n, 1),
                            this.emit("removeListenerAny", e),
                            this
                } else {
                    for (t = this._all,
                    n = 0,
                    r = t.length; n < r; n++)
                        this.emit("removeListenerAny", t[n]);
                    this._all = []
                }
                return this
            }
            ,
            s.prototype.removeListener = s.prototype.off,
            s.prototype.removeAllListeners = function(e) {
                if (0 === arguments.length)
                    return !this._events || a.call(this),
                    this;
                if (this.wildcard)
                    for (var t = "string" == typeof e ? e.split(this.delimiter) : e.slice(), n = f.call(this, null , t, this.listenerTree, 0), r = 0; r < n.length; r++) {
                        var o = n[r];
                        o._listeners = null
                    }
                else
                    this._events && (this._events[e] = null );
                return this
            }
            ,
            s.prototype.listeners = function(e) {
                if (this.wildcard) {
                    var t = []
                      , n = "string" == typeof e ? e.split(this.delimiter) : e.slice();
                    return f.call(this, t, n, this.listenerTree, 0),
                    t
                }
                return this._events || a.call(this),
                this._events[e] || (this._events[e] = []),
                p(this._events[e]) || (this._events[e] = [this._events[e]]),
                this._events[e]
            }
            ,
            s.prototype.listenerCount = function(e) {
                return this.listeners(e).length
            }
            ,
            s.prototype.listenersAny = function() {
                return this._all ? this._all : []
            }
            ,
            r = function() {
                return s
            }
            .call(t, n, t, e),
            !(r !== i && (e.exports = r))
        }()
    }
    , function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.LOG_LIMIT = 1024,
        t.AppStatus = {
            FORE_GROUND: 0,
            BACK_GROUND: 1,
            LOCK: 2
        }
    }
    , function(e, t, n) {
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            var n = this
              , r = new d(e,t);
            return r._getAppStatus = function() {
                return n.appStatus
            }
            ,
            r._getHanged = function() {
                return n.hanged
            }
            ,
            this.onAppEnterBackground(function() {
                r.pause()
            }),
            r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        t.default = o;
        var a = n(1)
          , u = n(2)
          , c = n(5)
          , s = n(6)
          , f = "ios" !== (0,
        u.getPlatform)()
          , l = {}
          , p = new c.EventEmitter2;
        WeixinJSBridge.subscribe("videoPlayerInsert", function(e, t) {
            var n = e.domId
              , r = e.videoPlayerId;
            l[n] = l[n] || r,
            p.emit("videoPlayerInsert", n)
        }),
        WeixinJSBridge.subscribe("videoPlayerRemoved", function(e, t) {
            var n = e.domId;
            e.videoPlayerId;
            delete l[n]
        });
        var d = function() {
            function e(t) {
                if (r(this, e),
                "string" != typeof t)
                    throw new Error("video ID should be a String");
                this.domId = t
            }
            return i(e, [{
                key: "play",
                value: function() {
                    var e = this._getAppStatus();
                    e === s.AppStatus.BACK_GROUND || e === s.AppStatus.LOCK || this._invokeMethod("play")
                }
            }, {
                key: "pause",
                value: function() {
                    this._invokeMethod("pause")
                }
            }, {
                key: "seek",
                value: function(e) {
                    this._invokeMethod("seek", [e])
                }
            }, {
                key: "sendDanmu",
                value: function(e) {
                    var t = e.text
                      , n = e.color;
                    this._invokeMethod("sendDanmu", [t, n])
                }
            }, {
                key: "_invokeMethod",
                value: function(e, t) {
                    function n() {
                        f ? (this.action = {
                            method: e,
                            data: t
                        },
                        this._sendAction()) : (0,
                        a.invokeMethod)("operateVideoPlayer", {
                            data: t,
                            videoPlayerId: l[this.domId],
                            type: e
                        })
                    }
                    var r = this;
                    "number" == typeof l[this.domId] ? n.apply(this) : p.on("videoPlayerInsert", function(e) {
                        n.apply(r)
                    })
                }
            }, {
                key: "_sendAction",
                value: function() {
                    WeixinJSBridge.publish("video_" + this.domId + "_actionChanged", this.action)
                }
            }]),
            e
        }()
    }
    , function(e, t, n) {
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e) {
            p = e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.mapInfo = t.MapContext = t.notifyWebviewIdtoMap = void 0;
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , a = n(1)
          , u = n(2)
          , c = n(5)
          , s = {}
          , f = {}
          , l = new c.EventEmitter2
          , p = 0
          , d = 0;
        WeixinJSBridge.subscribe("mapInsert", function(e, t) {
            var n = e.domId
              , r = e.mapId
              , o = e.bindregionchange
              , i = e.bindtap
              , a = e.showLocation
              , u = t + "_" + n;
            s[u] = s[u] || r,
            f[t + "_" + r] = {
                bindregionchange: o,
                bindtap: i,
                showLocation: a
            },
            l.emit("mapInsert")
        });
        var h = function() {
            function e(t) {
                var n = this;
                if (r(this, e),
                "string" != typeof t)
                    throw new Error("map ID should be a String");
                this.domId = t,
                WeixinJSBridge.subscribe("doMapActionCallback", function(e, t) {
                    var r = e.callbackId;
                    "getMapCenterLocation" === e.method && r && "function" == typeof n[r] && (n[r]({
                        longitude: e.longitude,
                        latitude: e.latitude
                    }),
                    delete n[r])
                })
            }
            return i(e, [{
                key: "_invoke",
                value: function(e, t) {
                    var n = (0,
                    u.getPlatform)();
                    if ("ios" === n || "android" === n) {
                        var r = f[p + "_" + t.mapId];
                        if ("moveToMapLocation" === e)
                            return void (r && r.showLocation ? (0,
                            a.invokeMethod)(e, t) : console.error("only show-location set to true can invoke moveToLocation"));
                        (0,
                        a.invokeMethod)(e, t)
                    } else {
                        t.method = e;
                        var o = "callback" + p + "_" + t.mapId + "_" + d++;
                        this[o] = t.success,
                        t.callbackId = o,
                        (0,
                        a.publish)("doMapAction" + t.mapId, t, [p])
                    }
                }
            }, {
                key: "_invokeMethod",
                value: function(e, t) {
                    var n = this
                      , r = p + "_" + this.domId;
                    "number" == typeof s[r] || s[r] ? (t.mapId = s[r],
                    this._invoke(e, t)) : l.on("mapInsert", function() {
                        t.mapId = s[r],
                        n._invoke(e, t)
                    })
                }
            }, {
                key: "getCenterLocation",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._invokeMethod("getMapCenterLocation", e)
                }
            }, {
                key: "moveToLocation",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._invokeMethod("moveToMapLocation", e)
                }
            }]),
            e
        }();
        t.notifyWebviewIdtoMap = o,
        t.MapContext = h,
        t.mapInfo = f
    }
    , function(module, exports) {
        if ("undefined" == typeof navigator)
            try {
                eval("const GeneratorFunction = Object.getPrototypeOf(function *() {}).constructor; const f = new GeneratorFunction('', 'console.log(0)'); f().__proto__.__proto__.next = () => {};")
            } catch (e) {}
    }
    , function(e, t, n) {
        (function(e) {
            var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            n(1);
            if ("undefined" != typeof Function && !__wxConfig.karmaTest) {
                Function;
                e = {},
                Function.constructor = function() {}
                ,
                Function.prototype.constructor = function() {}
                ,
                Function = function() {
                    if (arguments.length > 0 && "return this" === arguments[arguments.length - 1])
                        return function() {
                            return e
                        }
                }
                ,
                Object.defineProperty(Function.constructor.__proto__, "apply", {
                    writable: !1,
                    configurable: !1,
                    value: Function.prototype.constructor.apply
                })
            }
            if ("undefined" != typeof eval && (eval = void 0),
            "undefined" != typeof setTimeout) {
                var r = setTimeout;
                setTimeout = function(e, n) {
                    if ("function" != typeof e)
                        throw new TypeError("setTimetout expects a function as first argument but got " + ("undefined" == typeof e ? "undefined" : t(e)) + ".");
                    var o = Reporter.surroundThirdByTryCatch(e, "at setTimeout callback function");
                    return r(o, n)
                }
                ;
                var o = setInterval;
                setInterval = function(e, n) {
                    if ("function" != typeof e)
                        throw new TypeError("setInterval expects a function as first argument but got " + ("undefined" == typeof e ? "undefined" : t(e)) + ".");
                    Reporter.surroundThirdByTryCatch(e, "at setInterval callback function");
                    return o(e, n)
                }
            }
        }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t, n) {
        var r = n(1)
          , o = n(2)
          , i = n(6);
        if ("undefined" != typeof __wxConfig && __wxConfig.debug && "devtools" !== (0,
        o.getPlatform)()) {
            var a = []
              , u = []
              , c = ["log", "warn", "error", "info", "debug"];
            c.forEach(function(e) {
                var t = console[e];
                console[e] = function() {
                    a.length > i.LOG_LIMIT && a.shift();
                    var n = Array.prototype.slice.call(arguments);
                    a.push({
                        method: e,
                        log: n
                    }),
                    t.apply(console, arguments),
                    u.length > 0 && (0,
                    r.publish)(e, {
                        log: n
                    }, u)
                }
            }),
            (0,
            r.subscribe)("DOMContentLoaded", function(e, t) {
                u.push(t),
                (0,
                r.publish)("initLogs", {
                    logs: a
                }, [t])
            })
        }
        "undefined" == typeof console.group && (console.group = function() {}
        ),
        "undefined" == typeof console.groupEnd && (console.groupEnd = function() {}
        )
    }
    , function(e, t, n) {
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e) {
            y = e
        }
        function i(e) {
            return "number" == typeof e
        }
        function a(e) {
            var t = null ;
            if (null != (t = /^#([0-9|A-F|a-f]{6})$/.exec(e))) {
                var n = parseInt(t[1].slice(0, 2), 16)
                  , r = parseInt(t[1].slice(2, 4), 16)
                  , o = parseInt(t[1].slice(4), 16);
                return [n, r, o, 255]
            }
            if (null != (t = /^rgb\((.+)\)$/.exec(e)))
                return t[1].split(",").map(function(e) {
                    return parseInt(e.trim())
                }).concat(255);
            if (null != (t = /^rgba\((.+)\)$/.exec(e)))
                return t[1].split(",").map(function(e, t) {
                    return 3 == t ? Math.floor(255 * parseFloat(e.trim())) : parseInt(e.trim())
                });
            var i = e.toLowerCase();
            if (p.predefinedColor.hasOwnProperty(i)) {
                t = /^#([0-9|A-F|a-f]{6})$/.exec(p.predefinedColor[i]);
                var n = parseInt(t[1].slice(0, 2), 16)
                  , r = parseInt(t[1].slice(2, 4), 16)
                  , o = parseInt(t[1].slice(4), 16);
                return [n, r, o, 255]
            }
            console.group("非法颜色: " + e),
            console.error("不支持颜色：" + e),
            console.groupEnd()
        }
        function u(e) {
            if (Array.isArray(e)) {
                var t = [];
                return e.forEach(function(e) {
                    t.push(u(e))
                }),
                t
            }
            if ("object" == ("undefined" == typeof e ? "undefined" : s(e))) {
                var t = {};
                for (var n in e)
                    t[n] = u(e[n]);
                return t
            }
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Context = t.notifyCurrentRoutetoContext = void 0;
        var c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , f = n(2)
          , l = n(13)
          , p = n(14)
          , d = ["scale", "rotate", "translate", "save", "restore"]
          , h = ["drawImage", "fillText", "fill", "stroke", "fillRect", "strokeRect", "clearRect"]
          , v = ["beginPath", "moveTo", "lineTo", "rect", "arc", "quadraticCurveTo", "bezierCurveTo", "closePath"]
          , g = ["setFillStyle", "setTextAlign", "setStrokeStyle", "setGlobalAlpha", "setShadow", "setFontSize", "setLineCap", "setLineJoin", "setLineWidth", "setMiterLimit"]
          , y = ""
          , b = function() {
            function e(t, n) {
                r(this, e),
                this.type = t,
                this.data = n,
                this.colorStop = []
            }
            return c(e, [{
                key: "addColorStop",
                value: function(e, t) {
                    this.colorStop.push([e, a(t)])
                }
            }]),
            e
        }()
          , m = function() {
            function e(t) {
                r(this, e),
                this.actions = [],
                this.path = [],
                this.canvasId = t
            }
            return c(e, [{
                key: "getActions",
                value: function() {
                    var e = u(this.actions);
                    return this.actions = [],
                    this.path = [],
                    e
                }
            }, {
                key: "clearActions",
                value: function() {
                    this.actions = [],
                    this.path = []
                }
            }, {
                key: "draw",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , t = this.canvasId
                      , n = u(this.actions);
                    this.actions = [],
                    this.path = [],
                    (0,
                    l.drawCanvas)({
                        canvasId: t,
                        actions: n,
                        reserve: e
                    })
                }
            }, {
                key: "createLinearGradient",
                value: function(e, t, n, r) {
                    return new b("linear",[e, t, n, r])
                }
            }, {
                key: "createCircularGradient",
                value: function(e, t, n) {
                    return new b("radial",[e, t, n])
                }
            }]),
            e
        }();
        [].concat(d, h).forEach(function(e) {
            "fill" == e || "stroke" == e ? m.prototype[e] = function() {
                this.actions.push({
                    method: e + "Path",
                    data: u(this.path)
                })
            }
            : "fillRect" === e ? m.prototype[e] = function(e, t, n, r) {
                this.actions.push({
                    method: "fillPath",
                    data: [{
                        method: "rect",
                        data: [e, t, n, r]
                    }]
                })
            }
            : "strokeRect" === e ? m.prototype[e] = function(e, t, n, r) {
                this.actions.push({
                    method: "strokePath",
                    data: [{
                        method: "rect",
                        data: [e, t, n, r]
                    }]
                })
            }
            : "fillText" == e ? m.prototype[e] = function(t, n, r) {
                this.actions.push({
                    method: e,
                    data: [t.toString(), n, r]
                })
            }
            : "drawImage" == e ? m.prototype[e] = function(t, n, r, o, a) {
                "devtools" == (0,
                f.getPlatform)() || /wxfile:\/\//.test(t) || (t = (0,
                f.getRealRoute)(y, t).replace(/.html$/, "")),
                i(o) && i(a) ? data = [t, n, r, o, a] : data = [t, n, r],
                this.actions.push({
                    method: e,
                    data: data
                })
            }
            : m.prototype[e] = function() {
                this.actions.push({
                    method: e,
                    data: [].slice.apply(arguments)
                })
            }
        }),
        v.forEach(function(e) {
            "beginPath" == e ? m.prototype[e] = function() {
                this.path = []
            }
            : "lineTo" == e ? m.prototype.lineTo = function() {
                0 == this.path.length ? this.path.push({
                    method: "moveTo",
                    data: [].slice.apply(arguments)
                }) : this.path.push({
                    method: "lineTo",
                    data: [].slice.apply(arguments)
                })
            }
            : m.prototype[e] = function() {
                this.path.push({
                    method: e,
                    data: [].slice.apply(arguments)
                })
            }
        }),
        g.forEach(function(e) {
            "setFillStyle" == e || "setStrokeStyle" == e ? m.prototype[e] = function() {
                var t = arguments[0];
                "string" == typeof t ? this.actions.push({
                    method: e,
                    data: ["normal", a(t)]
                }) : "object" == ("undefined" == typeof t ? "undefined" : s(t)) && t instanceof b && this.actions.push({
                    method: e,
                    data: [t.type, t.data, t.colorStop]
                })
            }
            : "setGlobalAlpha" === e ? m.prototype[e] = function() {
                var t = [].slice.apply(arguments, [0, 1]);
                t[0] = Math.floor(255 * parseFloat(t[0])),
                this.actions.push({
                    method: e,
                    data: t
                })
            }
            : "setShadow" == e ? m.prototype[e] = function() {
                var t = [].slice.apply(arguments, [0, 4]);
                t[3] = a(t[3]),
                this.actions.push({
                    method: e,
                    data: t
                })
            }
            : m.prototype[e] = function() {
                this.actions.push({
                    method: e,
                    data: [].slice.apply(arguments, [0, 1])
                })
            }
        }),
        t.notifyCurrentRoutetoContext = o,
        t.Context = m
    }
    , function(e, t, n) {
        function r(e, t) {
            return e + "canvas" + t
        }
        function o() {
            for (var e in y)
                if (0 == e.indexOf(v + "canvas")) {
                    y[e];
                    delete y[e]
                }
        }
        function i(e) {
            v = e
        }
        function a(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , r = arguments[3]
              , o = arguments[4]
              , i = arguments[5]
              , a = (0,
            p.getPlatform)();
            "ios" == a || "android" == a ? WeixinJSBridge.invoke("drawCanvas", {
                canvasId: e,
                reserve: n,
                actions: t
            }, function(e) {
                e.errMsg && /ok/.test(e.errMsg) ? "function" == typeof r && r(e) : "function" == typeof o && o(e),
                "function" == typeof i && i(e)
            }) : WeixinJSBridge.publish("canvas" + e + "actionsChanged", {
                actions: t,
                reserve: n
            })
        }
        function u(e) {
            var t = e.canvasId
              , n = e.actions
              , o = e.reserve
              , i = e.success
              , u = e.fail
              , c = e.complete;
            if (t && Array.isArray(n)) {
                var s = r(v, t);
                if ("number" == typeof y[s]) {
                    var f = y[s];
                    a(f, n, o, i, u, c)
                } else
                    b[s] = b[s] || [],
                    b[s] = b[s].concat({
                        actions: n,
                        reserve: o,
                        success: i,
                        fail: u,
                        complete: c
                    })
            }
        }
        function c(e) {
            var t = (0,
            p.getPlatform)();
            "ios" === t || "android" === t ? (0,
            f.invokeMethod)("canvasToTempFilePath", e) : (WeixinJSBridge.subscribe("onCanvasToDataUrl_" + e.canvasId, function(t) {
                var n = t.dataUrl;
                (0,
                f.invokeMethod)("base64ToTempFilePath", (0,
                p.assign)({
                    base64Data: n
                }, e), {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("base64ToTempFilePath", "canvasToTempFilePath")
                    }
                })
            }),
            (0,
            f.publish)("invokeCanvasToDataUrl_" + e.canvasId, {
                canvasId: e.canvasId
            }))
        }
        function s(e) {
            if (e.canvasId) {
                var t = r(v, e.canvasId);
                if ("number" == typeof y[t])
                    e.canvasId = y[t],
                    c(e);
                else {
                    var n = {
                        errMsg: "canvasToTempFilePath: fail canvas is empty"
                    }
                      , o = Reporter.surroundThirdByTryCatch(e.fail || h, "at api canvasToTempFilePath fail callback function")
                      , i = Reporter.surroundThirdByTryCatch(e.complete || h, "at api canvasToTempFilePath complete callback function");
                    o(n),
                    i(n)
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createCanvasContext = t.createContext = t.canvasToTempFilePath = t.drawCanvas = t.notifyWebviewIdtoCanvas = t.clearOldWebviewCanvas = t.canvasInfo = void 0;
        var f = n(1)
          , l = n(12)
          , p = n(2)
          , d = n(5)
          , h = (new d.EventEmitter2,
        function() {}
        )
          , v = 0
          , g = {}
          , y = {}
          , b = {};
        WeixinJSBridge.subscribe("canvasInsert", function(e, t) {
            var n = e.canvasId
              , o = e.canvasNumber
              , i = e.data
              , u = r(v, n);
            g[o] = {
                lastTouches: [],
                data: i
            },
            y[u] = y[u] || o,
            Array.isArray(b[u]) && (b[u].forEach(function(e) {
                a(o, e.actions, e.reserve, e.success, e.fail, e.complete)
            }),
            delete b[u])
        }),
        WeixinJSBridge.subscribe("canvasRemove", function(e, t) {
            var n = e.canvasId
              , o = r(v, n);
            y[o] && delete y[o]
        });
        var m = function() {
            return new l.Context
        }
          , w = function(e) {
            return new l.Context(e)
        }
        ;
        t.canvasInfo = g,
        t.clearOldWebviewCanvas = o,
        t.notifyWebviewIdtoCanvas = i,
        t.drawCanvas = u,
        t.canvasToTempFilePath = s,
        t.createContext = m,
        t.createCanvasContext = w
    }
    , function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgrey: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            grey: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        };
        t.predefinedColor = n
    }
    , function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.onAppUnhang = t.onAppEnterBackground = t.onAppEnterForeground = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = n(1)
          , a = n(6)
          , u = n(5)
          , c = r(u)
          , s = n(16)
          , f = r(s)
          , l = n(2)
          , p = n(17)
          , d = r(p)
          , h = __wxConfig.appLaunchInfo || {};
        if ("undefined" != typeof __wxConfig.appLaunchInfo && "object" === o(h.shareInfo) && null !== h.shareInfo) {
            var v = h.shareInfo;
            h.shareTicket = f.default.set(v.shareKey, v.shareName),
            delete h.shareInfo
        }
        "undefined" != typeof h && h.path && (h.path = (0,
        l.removeHtmlSuffixFromUrl)(h.path));
        var g = new c.default;
        (0,
        i.onMethod)("onAppEnterForeground", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            g.emit("onAppEnterForeground", e)
        }),
        (0,
        i.onMethod)("onAppEnterBackground", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            g.emit("onAppEnterBackground", e)
        }),
        (0,
        i.onMethod)("onAppUnhang", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            g.emit("onAppUnhang", e)
        });
        var y = function(e) {
            var t = this;
            g.on("onAppEnterForeground", function(n) {
                n || (n = {}),
                n.query = d.default.query,
                n.path = (0,
                l.removeHtmlSuffixFromUrl)(d.default.lastRoute),
                (0,
                i.publish)("onAppEnterForeground", n),
                t.appStatus = a.AppStatus.FORE_GROUND,
                "function" == typeof e && e(n)
            })
        }
          , b = function(e) {
            var t = this;
            g.on("onAppEnterBackground", function(n) {
                n = n || {},
                (0,
                i.publish)("onAppEnterBackground", n),
                "hide" === n.mode ? t.appStatus = a.AppStatus.LOCK : t.appStatus = a.AppStatus.BACK_GROUND,
                "close" === n.mode ? t.hanged = !1 : "hang" === n.mode && (t.hanged = !0),
                "function" == typeof e && e(n)
            })
        }
          , m = function(e) {
            var t = this;
            g.on("onAppUnhang", function(n) {
                t.hanged = !1,
                "function" == typeof e && e(n)
            })
        }
        ;
        t.onAppEnterForeground = y,
        t.onAppEnterBackground = b,
        t.onAppUnhang = m
    }
    , function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(2)
          , o = {}
          , i = {
            get: function(e) {
                return o[e]
            },
            set: function(e, t) {
                var n = (0,
                r.guid)();
                return o[n] = {
                    shareKey: e,
                    shareName: t
                },
                n
            }
        };
        t.default = i
    }
    , function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = Global = {
            lastRoute: "",
            query: {}
        }
    }
    , function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.chooseLocation = t.openLocation = t.getLocation = void 0;
        var r = n(1)
          , o = n(6)
          , i = !1
          , a = []
          , u = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (this.appStatus === o.AppStatus.BACK_GROUND && this.hanged === !1) {
                var t = {
                    errMsg: "fail can not be invoked in backend"
                };
                return "function" == typeof e.fail && e.fail(t),
                void ("function" == typeof e.complete && e.complete(t))
            }
            i === !0 ? a.push(e) : (i = !0,
            (0,
            r.invokeMethod)("getLocation", e, {
                beforeAll: function() {
                    i = !1
                },
                afterAll: function(e) {
                    a.forEach(function(t) {
                        "function" == typeof t.complete && t.complete(e)
                    })
                },
                afterSuccess: function(e) {
                    a.forEach(function(t) {
                        "function" == typeof t.success && t.success(e)
                    })
                },
                afterFail: function(e) {
                    a.forEach(function(t) {
                        "function" == typeof t.fail && t.fail(e)
                    })
                }
            }))
        }
          , c = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if ("number" != typeof e.latitude || "number" != typeof e.longitude) {
                var t = {
                    errMsg: "fail invoke too frequently"
                };
                "function" == typeof e.fail && e.fail(t),
                "function" == typeof e.complete && e.complete(t)
            }
            (0,
            r.invokeMethod)("openLocation", e)
        }
          , s = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0,
            r.invokeMethod)("chooseLocation", e)
        }
        ;
        t.getLocation = u,
        t.openLocation = c,
        t.chooseLocation = s
    }
    , function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.exitMiniProgram = t.launchMiniProgram = void 0;
        var r = n(1)
          , o = n(2)
          , i = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            "string" == typeof e.path && e.path.length > 0 ? e.path = (0,
            o.transWxmlToHtml)(e.path) : delete e.path,
            (0,
            r.invokeMethod)("launchMiniProgram", e, {})
        }
          , a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0,
            r.invokeMethod)("exitMiniProgram", e, {})
        }
        ;
        t.launchMiniProgram = i,
        t.exitMiniProgram = a
    }
    , function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(1)
          , o = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0,
            r.invokeMethod)("openSetting", e, {
                beforeSuccess: function(e) {
                    e.authSetting;
                    e.authSetting = e.authSetting.reduce(function(e, t) {
                        return e[t.scope] = 1 === t.state,
                        e
                    }, {})
                }
            })
        }
        ;
        t.default = o
    }
    , function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getExtConfig = void 0;
        var r = n(22)
          , o = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            setTimeout(function() {
                var t = {
                    errMsg: "getExtConfig: ok",
                    extConfig: (0,
                    r.getExtConfigSync)()
                };
                "function" == typeof e.success && e.success(t),
                "function" == typeof e.complete && e.complete(t)
            }, 0)
        }
        ;
        t.getExtConfig = o
    }
    , function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            if (!__wxConfig.ext)
                return {};
            try {
                return JSON.parse(JSON.stringify(__wxConfig.ext))
            } catch (e) {
                return {}
            }
        }
        ;
        t.getExtConfigSync = n
    }
    , function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.chooseMedia = void 0;
        var r = n(1)
          , o = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0,
            r.invokeMethod)("chooseMedia", e)
        }
        ;
        t.chooseMedia = o
    }
    , function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.chooseWeChatContact = void 0;
        var r = n(1)
          , o = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0,
            r.invokeMethod)("chooseWeChatContact", e)
        }
        ;
        t.chooseWeChatContact = o
    }
    , function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.uploadEncryptedFileToCDN = void 0;
        var r = n(1)
          , o = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0,
            r.invokeMethod)("uploadEncryptedFileToCDN", e, {})
        }
        ;
        t.uploadEncryptedFileToCDN = o
    }
    , function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.onUploadEncryptedFileToCDNProgress = void 0;
        var r = n(1)
          , o = function(e) {
            (0,
            r.onMethod)("onUploadEncryptedFileToCDNProgress", e)
        }
        ;
        t.onUploadEncryptedFileToCDNProgress = o
    }
    , function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getShareInfo = void 0;
        var o = n(1)
          , i = n(16)
          , a = r(i)
          , u = n(2)
          , c = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = a.default.get(e.shareTicket);
            if (t)
                (0,
                o.invokeMethod)("operateWXData", (0,
                u.assign)({
                    data: {
                        api_name: "webapi_getshareinfo",
                        data: {
                            share_key: t.shareKey,
                            share_name: t.shareName
                        }
                    }
                }, e), {
                    beforeAll: function(e) {
                        e.errMsg = e.errMsg.replace("operateWXData", "getShareInfo")
                    },
                    beforeSuccess: function(e) {
                        "android" === (0,
                        u.getPlatform)() && (e.data = JSON.parse(e.data)),
                        e.rawData = e.data.data;
                        try {
                            var t = JSON.parse(e.data.data);
                            t.roomTopic && (e.roomTopic = t.roomTopic)
                        } catch (e) {}
                        e.iv = e.data.iv,
                        e.encryptedData = e.data.encryptedData,
                        delete e.data
                    }
                });
            else {
                var n = {
                    errMsg: "getShareInfo:fail invalid shareTicket"
                };
                "function" == typeof e.fail && e.fail(n),
                "function" == typeof e.complete && e.complete(n)
            }
        }
        ;
        t.getShareInfo = c
    }
    , function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.showShareMenu = void 0;
        var r = n(1)
          , o = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e.withShareTicket === !0 ? (0,
            r.invokeMethod)("showShareMenuWithShareTicket", e, {
                beforeAll: function(e) {
                    e.errMsg = e.errMsg.replace("showShareMenuWithShareTicket", "showShareMenu")
                }
            }) : (0,
            r.invokeMethod)("showShareMenu", e, {})
        }
        ;
        t.showShareMenu = o
    }
    , function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.hideShareMenu = void 0;
        var r = n(1)
          , o = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0,
            r.invokeMethod)("hideShareMenu", e, {})
        }
        ;
        t.hideShareMenu = o
    }
    , function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.openUrl = void 0;
        var r = n(1)
          , o = n(2)
          , i = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (e.url = e.url || "",
            (0,
            o.validateUrl)(e.url))
                (0,
                r.invokeMethod)("openUrl", e);
            else {
                console.error("invalid url", e.url);
                var t = {
                    errMsg: 'openUrl: invalid url "' + e.url + '"'
                };
                "function" == typeof e.fail && e.fail(t),
                "function" == typeof e.complete && e.complete(t)
            }
        }
        ;
        t.openUrl = i
    }
    , function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            SDKVersion: "1.1.0"
        }
    }
    ])
      , __appServiceEngine__ = function(e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(o.exports, o, o.exports, t),
            o.loaded = !0,
            o.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.p = "",
        t(0)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(1);
        Object.defineProperty(t, "Page", {
            enumerable: !0,
            get: function() {
                return r.pageHolder
            }
        }),
        Object.defineProperty(t, "getCurrentPages", {
            enumerable: !0,
            get: function() {
                return r.getCurrentPages
            }
        });
        var o = n(14);
        Object.defineProperty(t, "App", {
            enumerable: !0,
            get: function() {
                return o.appHolder
            }
        }),
        Object.defineProperty(t, "getApp", {
            enumerable: !0,
            get: function() {
                return o.getApp
            }
        }),
        "function" == typeof logxx && logxx("app-service-engine start")
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getRouteToPage = t.getWebviewIdToPage = t.setWxRouteBegin = t.setWxRoute = t.setWxConfig = t.reset = t.pageHolder = t.getCurrentPages = t.getCurrentPage = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = n(2)
          , a = n(6)
          , u = r(a)
          , c = n(2)
          , s = n(5)
          , f = n(13)
          , l = wx.ShareInfoStorage;
        delete wx.ShareInfoStorage;
        var p = void 0
          , d = {}
          , h = {}
          , v = []
          , g = 0
          , y = [];
        __wxConfig.tabBar && __wxConfig.tabBar.list && "object" === o(__wxConfig.tabBar.list) && "function" == typeof __wxConfig.tabBar.list.forEach && __wxConfig.tabBar.list.forEach(function(e) {
            y.push(e.pagePath)
        });
        var b = {
            appRouteTime: 0,
            newPageTime: 0,
            pageReadyTime: 0
        }
          , m = function(e, t, n) {
            Reporter.speedReport({
                key: e,
                timeMark: {
                    startTime: t,
                    endTime: n
                }
            })
        }
          , w = (t.getCurrentPage = function() {
            return p
        }
        ,
        t.getCurrentPages = function() {
            var e = [];
            return v.forEach(function(t) {
                e.push(t.page)
            }),
            e
        }
        ,
        t.pageHolder = function(e) {
            if (!__wxRouteBegin)
                throw (0,
                c.error)("Page 注册错误", "Please do not register multiple Pages in " + __wxRoute + ".js"),
                new i.AppServiceEngineKnownError("Please do not register multiple Pages in " + __wxRoute + ".js");
            __wxRouteBegin = !1;
            var t = __wxConfig.pages
              , n = t[g];
            if (g++,
            "Object" !== (0,
            c.getDataType)(e))
                throw (0,
                c.error)("Page 注册错误", "Options is not object: " + JSON.stringify(e) + " in " + __wxRoute + ".js"),
                new i.AppServiceEngineKnownError("Options is not object: " + JSON.stringify(e) + " in " + __wxRoute + ".js");
            (0,
            c.info)("Register Page: " + n),
            h[n] = e
        }
        ,
        (0,
        c.surroundByTryCatch)(function(e, t) {
            (0,
            c.info)("Update view with init data");
            var n = {};
            n.webviewId = t,
            n.enablePullUpRefresh = e.hasOwnProperty("onReachBottom");
            var r = {
                data: {
                    data: e.data,
                    ext: n,
                    options: {
                        firstRender: !0
                    }
                }
            };
            (0,
            c.publish)("appDataChange", r, [t]),
            (0,
            f.triggerAnalytics)("pageReady", e)
        }))
          , _ = function(e, t, n) {
            var r = void 0;
            h.hasOwnProperty(e) ? r = h[e] : ((0,
            c.warn)("Page route 错误", "Page[" + e + "] not found. May be caused by: 1. Forgot to add page route in app.json. 2. Invoking Page() in async task."),
            r = {}),
            b.newPageTime = Date.now();
            var o = new u.default(r,t,e);
            w(o, t),
            (0,
            c.isDevTools)() && (__wxAppData[e] = o.data,
            __wxAppData[e].__webviewId__ = t,
            (0,
            c.publish)(s.UPDATE_APP_DATA)),
            p = {
                page: o,
                webviewId: t,
                route: e
            },
            v.push(p),
            o.onLoad(n),
            o.onShow(),
            d[t] = {
                page: o,
                route: e
            },
            (0,
            f.triggerAnalytics)("pageLoad", o),
            (0,
            f.triggerAnalytics)("enterPage", o),
            m("appRoute2newPage", b.appRouteTime, b.newPageTime)
        }
          , S = function(e) {
            e.page.onHide(),
            (0,
            f.triggerAnalytics)("leavePage", e.page)
        }
          , k = function(e) {
            e.page.onUnload(),
            (0,
            c.isDevTools)() && (delete __wxAppData[e.route],
            (0,
            c.publish)(s.UPDATE_APP_DATA)),
            delete d[e.webviewId],
            v = v.slice(0, v.length - 1),
            (0,
            f.triggerAnalytics)("pageUnload", e.page),
            (0,
            f.triggerAnalytics)("leavePage", e.page)
        }
          , x = function(e) {
            return y.indexOf(e.route) !== -1 || y.indexOf(e.route + ".html") !== -1
        }
          , M = function(e, t, n) {
            p && S(p),
            d.hasOwnProperty(t) ? (0,
            c.error)("Page route 错误(system error)", "navigateTo with an already exist webviewId " + t) : _(e, t, n)
        }
          , A = function(e, t, n) {
            p && k(p),
            d.hasOwnProperty(t) ? (0,
            c.error)("Page route 错误(system error)", "redirectTo with an already exist webviewId " + t) : _(e, t, n)
        }
          , T = function(e) {
            for (var t = !1, n = v.length - 1; n >= 0; n--) {
                var r = v[n];
                if (r.webviewId === e) {
                    t = !0,
                    p = r,
                    r.page.onShow(),
                    (0,
                    f.triggerAnalytics)("enterPage", r.page);
                    break
                }
                k(r)
            }
            t || (0,
            c.error)("Page route 错误(system error)", "navigateBack with an unexist webviewId " + e)
        }
          , P = function(e, t, n) {
            for (var r = !0; v.length > 1; )
                k(v[v.length - 1]),
                r = !1;
            if (v[0].webviewId === t)
                p = v[0],
                r || p.page.onShow();
            else if (x(v[0]) ? r && S(v[0]) : k(v[0]),
            d.hasOwnProperty(t)) {
                var o = d[t].page;
                p = {
                    webviewId: t,
                    route: e,
                    page: o
                },
                v = [p],
                o.onShow(),
                (0,
                f.triggerAnalytics)("enterPage", o),
                (0,
                f.triggerAnalytics)("switchTab", o)
            } else
                v = [],
                _(e, t, n)
        }
          , C = function(e, t, n) {
            d.hasOwnProperty(t) ? (0,
            c.error)("Page route 错误(system error)", "apppLaunch with an already exist webviewId " + t) : _(e, t, n)
        }
          , E = function(e, t, n) {
            for (; v.length > 0; )
                k(v[v.length - 1]);
            _(e, t, n)
        }
          , O = function(e, t, n, r) {
            (0,
            c.info)("On app route: " + e),
            b.appRouteTime = Date.now(),
            "navigateTo" === r ? M(e, t, n) : "redirectTo" === r ? A(e, t, n) : "navigateBack" === r ? T(t) : "switchTab" === r ? P(e, t, n) : "appLaunch" === r ? C(e, t, n) : "reLaunch" === r ? E(e, t, n) : (0,
            c.error)("Page route 错误(system error)", "Illegal open type: " + r)
        }
          , I = function(e, t, n) {
            if (!d.hasOwnProperty(e))
                return void (0,
                c.warn)("事件警告", "OnWebviewEvent: " + t + ", WebviewId: " + e + " not found");
            var r = d[e]
              , o = r.page;
            return t === s.DOM_READY_EVENT ? (b.pageReadyTime = Date.now(),
            (0,
            c.info)("Invoke event onReady in page: " + r.route),
            o.onReady(),
            void m("newPage2pageReady", b.newPageTime, b.pageReadyTime)) : ((0,
            c.info)("Invoke event " + t + " in page: " + r.route),
            o.hasOwnProperty(t) ? c.safeInvoke.call(o, t, n) : void (0,
            c.warn)("事件警告", "Do not have " + t + " handler in current page: " + r.route + ". Please make sure that " + t + " handler has been defined in " + r.route + ", or " + r.route + " has been added into app.json"))
        }
          , j = function(e) {
            d.hasOwnProperty(e) || (0,
            c.warn)("事件警告", "onPullDownRefresh WebviewId: " + e + " not found");
            var t = d[e]
              , n = t.page;
            n.hasOwnProperty("onPullDownRefresh") && ((0,
            c.info)("Invoke event onPullDownRefresh in page: " + t.route),
            c.safeInvoke.call(n, "onPullDownRefresh"),
            (0,
            f.triggerAnalytics)("pullDownRefresh", n))
        }
          , D = function(e, t) {
            var n = e
              , r = d[t]
              , o = r.page
              , i = void 0;
            if (o.hasOwnProperty("onShareAppMessage") && (i = "onShareAppMessage"),
            i) {
                (0,
                c.info)("Invoke event " + i + " in page: " + r.route);
                var a = c.safeInvoke.call(o, i) || {};
                n.title = a.title || e.title,
                n.desc = a.desc || e.desc,
                n.path = a.path ? (0,
                c.addHtmlSuffixToUrl)(a.path) : e.path,
                n.path.length > 0 && "/" === n.path[0] && (n.path = n.path.substr(1)),
                n.success = a.success,
                n.cancel = a.cancel,
                n.fail = a.fail,
                n.complete = a.complete,
                (0,
                f.triggerAnalytics)("share", o)
            }
            return n
        }
        ;
        wx.onAppRoute((0,
        c.surroundByTryCatch)(function(e) {
            var t = e.path
              , n = e.webviewId
              , r = e.query || {}
              , o = e.openType;
            O(t, n, r, o)
        }), "onAppRoute"),
        wx.onWebviewEvent((0,
        c.surroundByTryCatch)(function(e) {
            var t = e.webviewId
              , n = e.eventName
              , r = e.data;
            return I(t, n, r)
        }, "onWebviewEvent")),
        WeixinJSBridge.on("onPullDownRefresh", (0,
        c.surroundByTryCatch)(function(e, t) {
            j(t)
        }, "onPullDownRefresh"));
        var R = function(e, t) {
            var n = D(e, t);
            WeixinJSBridge.invoke("shareAppMessage", n, function(e) {
                /^shareAppMessage:ok/.test(e.errMsg) && "function" == typeof n.success ? ("undefined" != typeof e.shareInfos && e.shareInfos.length > 0 && (e.shareTickets = e.shareInfos.map(function(e) {
                    return l.set(e.shareKey, e.shareName)
                })),
                delete e.shareInfos,
                n.success(e)) : /^shareAppMessage:cancel/.test(e.errMsg) && "function" == typeof n.fail ? (e.errMsg = "shareAppMessage:fail cancel",
                n.fail(e)) : /^shareAppMessage:fail/.test(e.errMsg) && "function" == typeof n.fail && n.fail(e),
                "function" == typeof n.complete && n.complete(e)
            })
        }
        ;
        WeixinJSBridge.on("onShareAppMessage", (0,
        c.surroundByTryCatch)(R, "onShareAppMessage"));
        t.reset = function() {
            p = void 0,
            d = {},
            h = {},
            v = [],
            g = 0
        }
        ,
        t.setWxConfig = function(e) {
            __wxConfig = e
        }
        ,
        t.setWxRoute = function(e) {
            __wxRoute = e
        }
        ,
        t.setWxRouteBegin = function(e) {
            __wxRouteBegin = e
        }
        ,
        t.getWebviewIdToPage = function() {
            return d
        }
        ,
        t.getRouteToPage = function() {
            return h
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(3);
        Object.keys(r).forEach(function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            })
        });
        var o = n(4);
        Object.keys(o).forEach(function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return o[e]
                }
            })
        })
    }
    , function(e, t) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function i() {
            var e = "";
            return "undefined" != typeof window && window.navigator ? window.navigator.userAgent.indexOf("appservice") > -1 ? e = "devtools" : window.navigator.userAgent.toLowerCase().indexOf("android") > -1 && (e = "android") : e = "android" === __wxConfig.platform ? "android" : "devtools" === __wxConfig.platform ? "devtools" : "ios",
            e
        }
        function a() {
            var e = void 0
              , t = Array.prototype.slice.call(arguments)
              , n = t[0];
            Reporter.__route__ = this.__route__,
            Reporter.__method__ = n,
            t = t.slice(1);
            try {
                var r = Date.now();
                e = this[n].apply(this, t);
                var o = Date.now() - r;
                o > 1e3 && Reporter.slowReport({
                    key: "pageInvoke",
                    cost: o,
                    extend: "at " + this.__route__ + " page " + n + " function"
                })
            } catch (e) {
                Reporter.thirdErrorReport({
                    error: e,
                    extend: 'at "' + this.__route__ + '" page ' + n + " function"
                })
            }
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        t.getPlatform = i,
        t.safeInvoke = a;
        var c = (t.isEmptyObject = function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t))
                    return !1;
            return !0
        }
        ,
        t.extend = function(e, t) {
            for (var n = Object.keys(t), r = n.length; r--; )
                e[n[r]] = t[n[r]];
            return e
        }
        )
          , s = (t.noop = function() {}
        ,
        t.getDataType = function(e) {
            return Object.prototype.toString.call(e).split(" ")[1].split("]")[0]
        }
        ,
        t.isObject = function(e) {
            return null !== e && "object" === ("undefined" == typeof e ? "undefined" : u(e))
        }
        ,
        Object.prototype.hasOwnProperty)
          , f = (t.hasOwn = function(e, t) {
            return s.call(e, t)
        }
        ,
        t.def = function(e, t, n, r) {
            Object.defineProperty(e, t, {
                value: n,
                enumerable: !!r,
                writable: !0,
                configurable: !0
            })
        }
        ,
        Object.prototype.toString)
          , l = "[object Object]"
          , p = (t.isPlainObject = function(e) {
            return f.call(e) === l
        }
        ,
        t.error = function(e, t) {
            console.group(new Date + " " + e),
            console.error(t),
            console.groupEnd()
        }
        ,
        t.warn = function(e, t) {
            console.group(new Date + " " + e),
            console.warn(t),
            console.groupEnd()
        }
        ,
        t.info = function(e) {
            __wxConfig && __wxConfig.debug && console.info(e)
        }
        ,
        t.surroundByTryCatch = function(e, t) {
            return function() {
                try {
                    return e.apply(e, arguments)
                } catch (e) {
                    return p(e, t),
                    function() {}
                }
            }
        }
        ,
        t.errorReport = function(e, t) {
            if ("[object Error]" === Object.prototype.toString.apply(e)) {
                if ("AppServiceEngineKnownError" === e.type)
                    throw e;
                Reporter.errorReport({
                    key: "jsEnginScriptError",
                    error: e,
                    extend: t
                })
            }
        }
        );
        t.AppServiceEngineKnownError = function(e) {
            function t(e) {
                n(this, t);
                var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "APP-SERVICE-Engine:" + e));
                return o.type = "AppServiceEngineKnownError",
                o
            }
            return o(t, e),
            t
        }(Error),
        t.publish = function() {
            var e = Array.prototype.slice.call(arguments)
              , t = {
                options: {
                    timestamp: Date.now()
                }
            };
            e[1] ? e[1].options = c(e[1].options || {}, t.options) : e[1] = t,
            WeixinJSBridge.publish.apply(WeixinJSBridge, e)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.hasExitCondition = t.shouldExit = t.removeHtmlSuffixFromUrl = t.addHtmlSuffixToUrl = t.isDevTools = void 0;
        var r = n(5);
        t.isDevTools = function() {
            return !!("undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("appservice") > -1)
        }
        ,
        t.addHtmlSuffixToUrl = function(e) {
            if ("string" != typeof e)
                return e;
            var t = e.split("?")[0]
              , n = e.split("?")[1];
            return t += ".html",
            "undefined" != typeof n ? t + "?" + n : t
        }
        ,
        t.removeHtmlSuffixFromUrl = function(e) {
            return "string" == typeof e && e.indexOf(".html") === e.length - 4 ? e.substring(0, e.length - 5) : e
        }
        ,
        t.shouldExit = function(e) {
            return "hang" !== e && "hide" !== e
        }
        ,
        t.hasExitCondition = function(e) {
            return r.EXIT_SCENES.indexOf(e.scene) !== -1
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.DOM_READY_EVENT = "__DOMReady",
        t.UPDATE_APP_DATA = "__updateAppData",
        t.EXIT_SCENES = [1007, "1007", 1008, "1008", 1011, "1011", 1025, "1025", 1047, "1047", 1048, "1048", 1049, "1049", 1050, "1050"]
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , a = n(2)
          , u = n(7)
          , c = n(8)
          , s = r(c)
          , f = n(9)
          , l = r(f)
          , p = ["onLoad", "onReady", "onShow", "onRouteEnd", "onHide", "onUnload"]
          , d = function(e) {
            for (var t = 0; t < p.length; ++t)
                if (p[t] === e)
                    return !0;
            return "data" === e
        }
          , h = ["__wxWebviewId__", "__route__"]
          , v = function(e) {
            return h.indexOf(e) !== -1
        }
          , g = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = this
                  , r = arguments[1]
                  , i = arguments[2];
                o(this, e);
                var u = {
                    __wxWebviewId__: r,
                    __route__: i
                };
                h.forEach(function(e) {
                    n.__defineSetter__(e, function() {
                        (0,
                        a.warn)("关键字保护", "should not change the protected attribute " + e)
                    }),
                    n.__defineGetter__(e, function() {
                        return u[e]
                    })
                }),
                t.data = t.data || {},
                (0,
                a.isPlainObject)(t.data) || (0,
                a.error)("Page data error", "data must be an object, your data is " + JSON.stringify(t.data)),
                this.data = JSON.parse(JSON.stringify(t.data)),
                p.forEach(function(e) {
                    n[e] = function() {
                        var n = (t[e] || a.noop).bind(this)
                          , r = void 0;
                        Reporter.__route__ = this.__route__,
                        Reporter.__method__ = e,
                        (0,
                        a.info)(this.__route__ + ": " + e + " have been invoked");
                        try {
                            var o = Date.now();
                            r = n.apply(this, arguments);
                            var i = Date.now() - o;
                            i > 1e3 && Reporter.slowReport({
                                key: "pageInvoke",
                                cost: i,
                                extend: 'at "' + this.__route__ + '" page lifeCycleMethod ' + e + " function"
                            })
                        } catch (t) {
                            Reporter.thirdErrorReport({
                                error: t,
                                extend: 'at "' + this.__route__ + '" page lifeCycleMethod ' + e + " function"
                            })
                        }
                        return r
                    }
                    .bind(n)
                });
                var c = function(e) {
                    v(e) ? (0,
                    a.warn)("关键字保护", "Page's " + e + " is write-protected") : d(e) || ("Function" === (0,
                    a.getDataType)(t[e]) ? n[e] = function() {
                        var n = void 0;
                        Reporter.__route__ = this.__route__,
                        Reporter.__method__ = e;
                        try {
                            var r = Date.now();
                            n = t[e].apply(this, arguments);
                            var o = Date.now() - r;
                            o > 1e3 && Reporter.slowReport({
                                key: "pageInvoke",
                                cost: o,
                                extend: "at " + this.__route__ + " page " + e + " function"
                            })
                        } catch (t) {
                            Reporter.thirdErrorReport({
                                error: t,
                                extend: 'at "' + this.__route__ + '" page ' + e + " function"
                            })
                        }
                        return n
                    }
                    .bind(n) : n[e] = (0,
                    l.default)(t[e]))
                }
                ;
                for (var s in t)
                    c(s);
                var f = "function" == typeof t.onShareAppMessage;
                f && wx.showShareMenu()
            }
            return i(e, [{
                key: "update",
                value: function() {
                    (0,
                    a.warn)("将被废弃", "Page.update is deprecated, setData updates the view implicitly. [It will be removed in 2016.11]")
                }
            }, {
                key: "forceUpdate",
                value: function() {
                    (0,
                    a.warn)("将被废弃", "Page.forceUpdate is deprecated, setData updates the view implicitly. [It will be removed in 2016.11]")
                }
            }, {
                key: "setData",
                value: function(e) {
                    try {
                        var t = (0,
                        a.getDataType)(e);
                        "Object" !== t && (0,
                        a.error)("类型错误", "setData accepts an Object rather than some " + t);
                        for (var n in e) {
                            var r = (0,
                            u.getObjectByPath)(this.data, n)
                              , o = r.obj
                              , i = r.key;
                            o && (o[i] = (0,
                            l.default)(e[n]))
                        }
                        s.default.emit(e, this.__wxWebviewId__)
                    } catch (e) {
                        (0,
                        a.errorReport)(e)
                    }
                }
            }]),
            e
        }();
        t.default = g
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getObjectByPathStrictly = t.getObjectByPath = t.parsePath = void 0;
        var r = n(2)
          , o = t.parsePath = function(e) {
            for (var t = e.length, n = [], o = "", i = 0, a = !1, u = !1, c = 0; c < t; c++) {
                var s = e[c];
                if ("\\" === s)
                    c + 1 < t && ("." === e[c + 1] || "[" === e[c + 1] || "]" === e[c + 1]) ? (o += e[c + 1],
                    c++) : o += "\\";
                else if ("." === s)
                    o && (n.push(o),
                    o = "");
                else if ("[" === s) {
                    if (o && (n.push(o),
                    o = ""),
                    0 === n.length)
                        throw (0,
                        r.error)("数据路径错误", "Path can not start with []: " + e),
                        new r.AppServiceEngineKnownError("Path can not start with []: " + e);
                    u = !0,
                    a = !1
                } else if ("]" === s) {
                    if (!a)
                        throw (0,
                        r.error)("数据路径错误", "Must have number in []: " + e),
                        new r.AppServiceEngineKnownError("Must have number in []: " + e);
                    u = !1,
                    n.push(i),
                    i = 0
                } else if (u) {
                    if (s < "0" || s > "9")
                        throw (0,
                        r.error)("数据路径错误", "Only number 0-9 could inside []: " + e),
                        new r.AppServiceEngineKnownError("Only number 0-9 could inside []: " + e);
                    a = !0,
                    i = 10 * i + s.charCodeAt(0) - 48
                } else
                    o += s
            }
            if (o && n.push(o),
            0 === n.length)
                throw (0,
                r.error)("数据路径错误", "Path can not be empty"),
                new r.AppServiceEngineKnownError("Path can not be empty");
            return n
        }
        ;
        t.getObjectByPath = function(e, t) {
            for (var n = o(t), i = void 0, a = void 0, u = e, c = 0; c < n.length; c++)
                Number(n[c]) === n[c] && n[c] % 1 === 0 ? Array.isArray(u) || (i[a] = [],
                u = i[a]) : (0,
                r.isPlainObject)(u) || (i[a] = {},
                u = i[a]),
                a = n[c],
                i = u,
                u = u[n[c]];
            return {
                obj: i,
                key: a
            }
        }
        ,
        t.getObjectByPathStrictly = function(e, t) {
            for (var n = o(t), i = void 0, a = void 0, u = e, c = 0; c < n.length; c++)
                Number(n[c]) === n[c] && n[c] % 1 === 0 ? Array.isArray(u) || (u = []) : (0,
                r.isPlainObject)(u) || (u = {}),
                a = n[c],
                i = u,
                u = u[n[c]];
            return {
                obj: i,
                key: a
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , i = n(2)
          , a = function() {
            function e() {
                r(this, e)
            }
            return o(e, null , [{
                key: "emit",
                value: function(e, t) {
                    (0,
                    i.publish)("appDataChange", {
                        data: {
                            data: e
                        }
                    }, [t])
                }
            }]),
            e
        }();
        t.default = a
    }
    , function(e, t, n) {
        "use strict";
        e.exports = n(10)
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {}
        function o(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
            if (null === e)
                return null ;
            var n = (0,
            u.copyValue)(e);
            if (null !== n)
                return n;
            var o = (0,
            u.copyCollection)(e, t)
              , a = null !== o ? o : e
              , c = [e]
              , s = [a];
            return i(e, t, a, c, s)
        }
        function i(e, t, n, r, o) {
            if (null === e)
                return null ;
            var s = (0,
            u.copyValue)(e);
            if (null !== s)
                return s;
            var f = (0,
            c.getKeys)(e).concat((0,
            c.getSymbols)(e))
              , l = void 0
              , p = void 0
              , d = void 0
              , h = void 0
              , v = void 0
              , g = void 0
              , y = void 0
              , b = void 0;
            for (l = 0,
            p = f.length; l < p; ++l)
                d = f[l],
                h = e[d],
                v = (0,
                c.indexOf)(r, h),
                g = void 0,
                y = void 0,
                b = void 0,
                v === -1 ? (g = (0,
                u.copy)(h, t),
                y = null !== g ? g : h,
                null !== h && /^(?:function|object)$/.test("undefined" == typeof h ? "undefined" : a(h)) && (r.push(h),
                o.push(y))) : b = o[v],
                n[d] = b || i(h, t, y, r, o);
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , u = n(11)
          , c = n(12);
        t.default = o
    }
    , function(e, t) {
        "use strict";
        function n(e, t) {
            var n = o(e);
            return null !== n ? n : r(e, t)
        }
        function r(e, t) {
            if ("function" != typeof t)
                throw new TypeError("customizer is must be a Function");
            if ("function" == typeof e)
                return e;
            var n = a.call(e);
            if ("[object Array]" === n)
                return [];
            if ("[object Object]" === n && e.constructor === Object)
                return {};
            if ("[object Date]" === n)
                return new Date(e.getTime());
            if ("[object RegExp]" === n) {
                var r = String(e)
                  , o = r.lastIndexOf("/");
                return new RegExp(r.slice(1, o),r.slice(o + 1))
            }
            var i = t(e);
            return void 0 !== i ? i : null
        }
        function o(e) {
            var t = "undefined" == typeof e ? "undefined" : i(e);
            return null !== e && "object" !== t && "function" !== t ? e : null
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , a = Object.prototype.toString;
        t.copy = n,
        t.copyCollection = r,
        t.copyValue = o
    }
    , function(e, t) {
        "use strict";
        function n(e, t) {
            if ("[object Array]" !== o.call(e))
                throw new TypeError("array must be an Array");
            var n = void 0
              , r = void 0
              , i = void 0;
            for (n = 0,
            r = e.length; n < r; ++n)
                if (i = e[n],
                i === t || i !== i && t !== t)
                    return n;
            return -1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , o = Object.prototype.toString
          , i = "function" == typeof Object.keys ? function(e) {
            return Object.keys(e)
        }
        : function(e) {
            var t = "undefined" == typeof e ? "undefined" : r(e);
            if (null === e || "function" !== t && "object" !== t)
                throw new TypeError("obj must be an Object");
            var n = []
              , o = void 0;
            for (o in e)
                Object.prototype.hasOwnProperty.call(e, o) && n.push(o);
            return n
        }
          , a = "function" == typeof Symbol ? function(e) {
            return Object.getOwnPropertySymbols(e)
        }
        : function() {
            return []
        }
        ;
        t.getKeys = i,
        t.getSymbols = a,
        t.indexOf = n
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.triggerAnalytics = void 0;
        var r = n(1)
          , o = n(7)
          , i = n(2)
          , a = n(14)
          , u = 1
          , c = {}
          , s = {}
          , f = []
          , l = !1
          , p = !1
          , d = 0
          , h = 0
          , v = 0
          , g = 0
          , y = 0
          , b = 0
          , m = null
          , w = null
          , _ = function(e) {
            var t = {};
            return "[object Array]" !== Object.prototype.toString.call(e) ? t : (e.forEach(function(e) {
                var n = e.eventTarget;
                "[object Object]" === Object.prototype.toString.call(n) && (n = [n]),
                n.forEach(function(n) {
                    var r = n.trigger || "click";
                    t[r] || (t[r] = []),
                    ("click" !== r || /^([\.#][a-zA-Z_][^\.#]* ?)+$/.test(n.element && n.element.trim())) && t[r].push({
                        eventID: e.eventID,
                        page: n.page,
                        element: n.element && n.element.trim(),
                        data: n.data,
                        action: n.action,
                        extra: e.extra
                    })
                })
            }),
            t)
        }
          , S = function(e) {
            var t = 0;
            switch (e) {
            case "PAGE_TIME":
                return t = v ? Date.now() - v - g : 0,
                t >= 0 ? t : null ;
            case "APP_TIME":
                return t = d ? Date.now() - d - h : 0,
                t >= 0 ? t : null ;
            case "CURRENT_PAGE":
                return w || null ;
            case "LAST_PAGE":
                return m || null ;
            default:
                return
            }
        }
          , k = function(e, t) {
            var n = e.data[t]
              , r = (0,
            a.getApp)() || {}
              , i = n.replace("$APP.", "")
              , u = (0,
            o.getObjectByPathStrictly)(r, i);
            if (u.obj && "undefined" != typeof u.obj[u.key]) {
                var c = u.obj[u.key];
                "number" != typeof c && "string" != typeof c && "boolean" != typeof c || (s[e.eventID].data[t] = c)
            }
        }
          , x = function(e, t) {
            Object.keys(e.data || {}).forEach(function(n) {
                var r = e.data[n]
                  , i = !1
                  , a = void 0;
                if ("$" === r.charAt(0) && (a = S(r.substr(1)),
                void 0 !== a))
                    return void (null !== a && (s[e.eventID].data[n] = a));
                if (0 === r.indexOf("$APP"))
                    return void k(e, n);
                if (t && (e.page === t.__route__ || "ANY_PAGE" === e.page)) {
                    if (0 === r.indexOf("$DATASET")) {
                        var u = r.replace("$DATASET.", "");
                        a = (0,
                        o.getObjectByPath)(e.dataset || {}, u),
                        a.obj && "undefined" != typeof a.obj[a.key] && (s[e.eventID].data[n] = a.obj[a.key],
                        i = !0)
                    }
                    if (r.indexOf("[]") > -1) {
                        if ((e.index || []).forEach(function(e) {
                            r = r.replace("[]", "[" + e + "]")
                        }),
                        r.indexOf("[-1]") > -1 || r.indexOf("[]") > -1)
                            return void console.warn("[自定义分析] 取不到下标，请检查配置（" + r + "）");
                        var c = r.match(/\[(\d+)\]\.\$INDEX$/);
                        c && (s[e.eventID].data[n] = Number(c[1]),
                        i = !0)
                    }
                    if (a = (0,
                    o.getObjectByPathStrictly)(t.data || {}, r),
                    "undefined" == typeof a.obj || "undefined" == typeof a.key || "undefined" == typeof a.obj[a.key])
                        return void (i || console.warn("[自定义分析] 取不到该字段，请检查配置（" + r + "）"));
                    s[e.eventID].data[n] = a.obj[a.key]
                }
            })
        }
          , M = function(e, t) {
            var n = [];
            Object.keys(s[e].data).forEach(function(t) {
                n.push({
                    id: t,
                    value: s[e].data[t]
                })
            }),
            s[e].data = n,
            s[e].page = t,
            s[e].version = wx && wx.version && wx.version.version || 0,
            s[e].uid = Date.now().toString(16) + Math.random().toString(16).substr(2),
            s[e].type = 0,
            console.info("[自定义分析] 上报成功"),
            console.info(s[e]),
            WeixinJSBridge.invoke("reportRealtimeAction", {
                actionData: JSON.stringify(s[e])
            }),
            s[e] = null
        }
          , A = function(e, t) {
            if ("start" !== e.action && "start_and_report" !== e.action || (s[e.eventID] = {
                eventID: e.eventID,
                data: {},
                extra: e.extra
            }),
            s[e.eventID]) {
                var n = t || (0,
                r.getCurrentPage)() && (0,
                r.getCurrentPage)().page;
                x(e, n),
                "report" !== e.action && "start_and_report" !== e.action || M(e.eventID, n && n.__route__)
            }
        }
          , T = t.triggerAnalytics = function(e, t, n) {
            "pageReady" === e && t && C(t),
            p && f.push(e),
            "launch" !== e || l || (d = Date.now(),
            l = !0,
            p = !0,
            f.push(e),
            WeixinJSBridge.invoke("getAppConfig", {
                type: u
            }, (0,
            i.surroundByTryCatch)(function(e) {
                p = !1,
                e.data && (console.info("[自定义分析] 配置拉取成功"),
                P(e))
            }))),
            n || ("enterPage" === e ? (v = Date.now(),
            g = 0,
            w = t && t.__route__) : "leavePage" === e ? m = t && t.__route__ : "background" === e ? y = Date.now() : "foreground" === e && (b = Date.now(),
            y && b > y && (g += b - y,
            h += b - y)));
            var r = c[e];
            if (r) {
                var o = ["enterPage", "leavePage", "pageLoad", "pageUnload", "pullDownRefresh", "switchTab"];
                r.forEach(function(n) {
                    n && (o.indexOf(e) > -1 ? (t && n.page === (t && t.__route__) || "ANY_PAGE" === n.page) && A(n, t) : A(n))
                })
            }
        }
          , P = function(e, t) {
            var n = {};
            try {
                n = JSON.parse(e.data)
            } catch (e) {
                n = {}
            }
            var o = (0,
            r.getCurrentPage)();
            c = _(n),
            s = {},
            t || f.forEach(function(e) {
                T(e, o && o.page, !0)
            }),
            T("pageReady", o && o.page)
        }
          , C = function(e) {
            if (e) {
                var t = e.__route__
                  , n = c.click
                  , r = [];
                n && (n.forEach(function(e) {
                    e.page !== t && "ANY_PAGE" !== e.page || !e.element || r.push({
                        eventID: e.eventID,
                        page: e.page,
                        element: e.element,
                        action: e.action
                    })
                }),
                0 !== r.length && WeixinJSBridge.publish("analyticsConfig", {
                    data: r
                }, [e.__wxWebviewId__]));
            }
        }
        ;
        WeixinJSBridge.subscribe("analyticsReport", function(e, t) {
            var n = e.data
              , o = c.click
              , a = void 0
              , u = void 0;
            if (o && ("start" === n.action || "start_and_report" === n.action || s[n.eventID])) {
                for (var f = (0,
                r.getCurrentPages)(), l = 0; l < f.length; l++) {
                    var p = f[l];
                    if (p.__wxWebviewId__ === t) {
                        u = p;
                        break
                    }
                }
                if (u) {
                    for (var d = 0; d < o.length; d++) {
                        var h = o[d];
                        if (n.eventID === h.eventID && (n.page === h.page || "ANY_PAGE" === h.page) && n.element === h.element) {
                            h.dataset = n.dataset || {},
                            a = (0,
                            i.extend)({}, h);
                            break
                        }
                    }
                    a && (a.index = n.index,
                    A(a, u))
                }
            }
        }),
        WeixinJSBridge.on("onAppConfig", (0,
        i.surroundByTryCatch)(function(e) {
            console.info("[自定义分析] 收到最新配置"),
            Number(e.type) === u && P(e, !0)
        }))
    }
    , function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getApp = t.appHolder = void 0;
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , i = n(2)
          , a = n(1)
          , u = n(13)
          , c = ["onLaunch", "onShow", "onHide", "onUnlaunch"]
          , s = void 0
          , f = void 0
          , l = !1
          , p = !0
          , d = !1;
        wx.onAppUnhang(function() {
            l = !1
        });
        var h = wx.exitMiniProgram;
        delete wx.exitMiniProgram;
        var v = function(e) {
            for (var t = 0; t < c.length; ++t)
                if (c[t] === e)
                    return !0;
            return !1
        }
          , g = function(e) {
            return "getCurrentPage" === e
        }
          , y = function() {
            function e(t) {
                var n = this;
                r(this, e),
                c.forEach(function(e) {
                    var r = function() {
                        var n = (t[e] || i.noop).bind(this);
                        Reporter.__route__ = "App",
                        Reporter.__method__ = e,
                        (0,
                        i.info)("App: " + e + " have been invoked");
                        try {
                            n.apply(this, arguments)
                        } catch (t) {
                            Reporter.thirdErrorReport({
                                error: t,
                                extend: "at App lifeCycleMethod " + e + " function"
                            })
                        }
                    }
                    ;
                    n[e] = r.bind(n)
                });
                var o = function(e) {
                    g(e) ? (0,
                    i.warn)("关键字保护", "App's " + e + " is write-protected") : v(e) || ("[object Function]" === Object.prototype.toString.call(t[e]) ? n[e] = function() {
                        var n;
                        Reporter.__route__ = "App",
                        Reporter.__method__ = e;
                        try {
                            n = t[e].apply(this, arguments)
                        } catch (t) {
                            Reporter.thirdErrorReport({
                                error: t,
                                extend: "at App " + e + " function"
                            })
                        }
                        return n
                    }
                    .bind(n) : n[e] = t[e])
                }
                ;
                for (var f in t)
                    o(f);
                this.onError && Reporter.registerErrorListener(this.onError);
                var y = function(e) {
                    "hang" === e.mode && (l = !0);
                    var t = (0,
                    a.getCurrentPages)();
                    t.length && t[t.length - 1].onHide(),
                    this.onHide(),
                    d && !l && (0,
                    i.shouldExit)(e.mode) && "function" == typeof h && h(),
                    (0,
                    u.triggerAnalytics)("background")
                }
                  , b = function(e) {
                    if (0 === e.scene || "0" === e.scene ? e.scene = s : s = e.scene,
                    (0,
                    i.hasExitCondition)(e) && (d = !0),
                    this.onShow(e),
                    (0,
                    u.triggerAnalytics)("foreground"),
                    p)
                        p = !1;
                    else {
                        var t = (0,
                        a.getCurrentPages)();
                        t.length && t[t.length - 1].onShow()
                    }
                }
                ;
                if (__wxConfig) {
                    var m = __wxConfig.appLaunchInfo || {};
                    s = m.scene,
                    (0,
                    i.hasExitCondition)(m) && (d = !0),
                    this.onLaunch(m),
                    (0,
                    u.triggerAnalytics)("launch"),
                    b.call(this, m)
                } else
                    (0,
                    i.error)("App Launch Error", "Can not find __wxConfig");
                wx.onAppEnterBackground(y.bind(this)),
                wx.onAppEnterForeground(b.bind(this))
            }
            return o(e, [{
                key: "getCurrentPage",
                value: function() {
                    (0,
                    i.warn)("将被废弃", "App.getCurrentPage is deprecated, please use getCurrentPages.");
                    var e = (0,
                    a.getCurrentPage)();
                    if (e)
                        return e.page
                }
            }]),
            e
        }();
        t.appHolder = (0,
        i.surroundByTryCatch)(function(e) {
            f = new y(e)
        }, "create app instance"),
        t.getApp = function() {
            return f
        }
    }
    ])
      , Page = __appServiceEngine__.Page
      , App = __appServiceEngine__.App
      , getApp = __appServiceEngine__.getApp
      , getCurrentPages = __appServiceEngine__.getCurrentPages;
    !function() {
        var e = 1
          , t = 2
          , n = {};
        define = function(t, r) {
            n[t] = {
                status: e,
                factory: r
            }
        }
        ;
        var r = function(e) {
            var t = e.match(/(.*)\/([^\/]+)?$/);
            return t && t[1] ? t[1] : "./"
        }
          , o = function(e) {
            var t = r(e);
            return function(e) {
                if ("string" != typeof e)
                    throw new Error("require args must be a string");
                for (var n = [], r = (t + "/" + e).split("/"), o = 0, i = r.length; o < i; ++o) {
                    var a = r[o];
                    if ("" != a && "." != a)
                        if (".." == a) {
                            if (0 == n.length)
                                throw new Error("can't find module : " + e);
                            n.pop()
                        } else
                            o + 1 < i && ".." == r[o + 1] ? o++ : n.push(a)
                }
                try {
                    var u = n.join("/");
                    return /\.js$/.test(u) || (u += ".js"),
                    require(u)
                } catch (e) {
                    throw e
                }
            }
        }
        ;
        require = function(r) {
            if ("string" != typeof r)
                throw new Error("require args must be a string");
            var i = n[r];
            if (!i)
                throw new Error('module "' + r + '" is not defined');
            if (i.status === e) {
                var a = i.factory
                  , u = {
                    exports: {}
                }
                  , c = void 0;
                a && (c = a(o(r), u, u.exports)),
                i.exports = u.exports || c,
                i.status = t
            }
            return i.exports
        }
    }(),
    wx.version = {
        updateTime: "2017.3.28 23:10:15",
        info: "",
        version: "1.1.0"
    };
    ;global.App = App;
    global.Page = Page;
    global.getApp = getApp;
    global.getCurrentPages = getCurrentPages;
    global.wx = wx;
})(this);
var __WAServiceEndTime__ = Date.now();
