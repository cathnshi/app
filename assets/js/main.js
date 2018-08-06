! function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 46)
}([function (e, t) {
    var n = e.exports = {
        version: "2.5.1"
    };
    "number" == typeof __e && (__e = n)
}, function (e, t, n) {
    var r = n(27)("wks"),
        o = n(16),
        i = n(2).Symbol,
        a = "function" == typeof i;
    (e.exports = function (e) {
        return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
    }).store = r
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (e, t, n) {
    var r = n(10),
        o = n(34),
        i = n(19),
        a = Object.defineProperty;
    t.f = n(5) ? Object.defineProperty : function (e, t, n) {
        if (r(e), t = i(t, !0), r(n), o) try {
            return a(e, t, n)
        } catch (e) { }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    var r = n(2),
        o = n(0),
        i = n(18),
        a = n(9),
        s = function (e, t, n) {
            var l, u, c, d = e & s.F,
                p = e & s.G,
                h = e & s.S,
                f = e & s.P,
                g = e & s.B,
                m = e & s.W,
                v = p ? o : o[t] || (o[t] = {}),
                b = v.prototype,
                j = p ? r : h ? r[t] : (r[t] || {}).prototype;
            p && (n = t);
            for (l in n) (u = !d && j && void 0 !== j[l]) && l in v || (c = u ? j[l] : n[l], v[l] = p && "function" != typeof j[l] ? n[l] : g && u ? i(c, r) : m && j[l] == c ? function (e) {
                var t = function (t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(c) : f && "function" == typeof c ? i(Function.call, c) : c, f && ((v.virtual || (v.virtual = {}))[l] = c, e & s.R && b && !b[l] && a(b, l, c)))
        };
    s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s
}, function (e, t, n) {
    e.exports = !n(13)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(48));
    t.default = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), (0, r.default)(e, o.key, o)
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }()
}, function (e, t, n) {
    var r = n(3),
        o = n(14);
    e.exports = n(5) ? function (e, t, n) {
        return r.f(e, t, o(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    var r = n(12);
    e.exports = function (e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t, n) {
    var r = n(60),
        o = n(21);
    e.exports = function (e) {
        return r(o(e))
    }
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function (e, t, n) {
    e.exports = {
        default: n(47),
        __esModule: !0
    }
}, function (e, t, n) {
    var r = n(51);
    e.exports = function (e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, o) {
                    return e.call(t, n, r, o)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t, n) {
    var r = n(12);
    e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t) {
    e.exports = !0
}, function (e, t, n) {
    var r = n(10),
        o = n(59),
        i = n(28),
        a = n(26)("IE_PROTO"),
        s = function () { },
        l = function () {
            var e, t = n(35)("iframe"),
                r = i.length;
            for (t.style.display = "none", n(63).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; r--;) delete l.prototype[i[r]];
            return l()
        };
    e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = l(), void 0 === t ? n : o(n, t)
    }
}, function (e, t, n) {
    var r = n(39),
        o = n(28);
    e.exports = Object.keys || function (e) {
        return r(e, o)
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    var r = n(27)("keys"),
        o = n(16);
    e.exports = function (e) {
        return r[e] || (r[e] = o(e))
    }
}, function (e, t, n) {
    var r = n(2),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    e.exports = function (e) {
        return o[e] || (o[e] = {})
    }
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t, n) {
    var r = n(3).f,
        o = n(6),
        i = n(1)("toStringTag");
    e.exports = function (e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
        })
    }
}, function (e, t, n) {
    var r = n(21);
    e.exports = function (e) {
        return Object(r(e))
    }
}, function (e, t, n) {
    t.f = n(1)
}, function (e, t, n) {
    var r = n(2),
        o = n(0),
        i = n(22),
        a = n(31),
        s = n(3).f;
    e.exports = function (e) {
        var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == e.charAt(0) || e in t || s(t, e, {
            value: a.f(e)
        })
    }
}, function (e, t) {
    t.f = {}.propertyIsEnumerable
}, function (e, t, n) {
    e.exports = !n(5) && !n(13)(function () {
        return 7 != Object.defineProperty(n(35)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    var r = n(12),
        o = n(2).document,
        i = r(o) && r(o.createElement);
    e.exports = function (e) {
        return i ? o.createElement(e) : {}
    }
}, function (e, t, n) {
    "use strict";
    var r = n(57)(!0);
    n(37)(String, "String", function (e) {
        this._t = String(e), this._i = 0
    }, function () {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = n(22),
        o = n(4),
        i = n(38),
        a = n(9),
        s = n(6),
        l = n(15),
        u = n(58),
        c = n(29),
        d = n(41),
        p = n(1)("iterator"),
        h = !([].keys && "next" in [].keys()),
        f = function () {
            return this
        };
    e.exports = function (e, t, n, g, m, v, b) {
        u(n, t, g);
        var j, y, _, w = function (e) {
            if (!h && e in x) return x[e];
            switch (e) {
                case "keys":
                case "values":
                    return function () {
                        return new n(this, e)
                    }
            }
            return function () {
                return new n(this, e)
            }
        },
            k = t + " Iterator",
            S = "values" == m,
            P = !1,
            x = e.prototype,
            C = x[p] || x["@@iterator"] || m && x[m],
            z = C || w(m),
            M = m ? S ? w("entries") : z : void 0,
            I = "Array" == t ? x.entries || C : C;
        if (I && (_ = d(I.call(new e))) !== Object.prototype && _.next && (c(_, k, !0), r || s(_, p) || a(_, p, f)), S && C && "values" !== C.name && (P = !0, z = function () {
            return C.call(this)
        }), r && !b || !h && !P && x[p] || a(x, p, z), l[t] = z, l[k] = f, m)
            if (j = {
                values: S ? z : w("values"),
                keys: v ? z : w("keys"),
                entries: M
            }, b)
                for (y in j) y in x || i(x, y, j[y]);
            else o(o.P + o.F * (h || P), t, j);
        return j
    }
}, function (e, t, n) {
    e.exports = n(9)
}, function (e, t, n) {
    var r = n(6),
        o = n(11),
        i = n(61)(!1),
        a = n(26)("IE_PROTO");
    e.exports = function (e, t) {
        var n, s = o(e),
            l = 0,
            u = [];
        for (n in s) n != a && r(s, n) && u.push(n);
        for (; t.length > l;) r(s, n = t[l++]) && (~i(u, n) || u.push(n));
        return u
    }
}, function (e, t, n) {
    var r = n(20),
        o = Math.min;
    e.exports = function (e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    var r = n(6),
        o = n(30),
        i = n(26)("IE_PROTO"),
        a = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
        return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var o = r(n(77)),
        i = r(n(83)),
        a = "function" == typeof i.default && "symbol" == typeof o.default ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e
        };
    t.default = "function" == typeof i.default && "symbol" === a(o.default) ? function (e) {
        return void 0 === e ? "undefined" : a(e)
    } : function (e) {
        return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
    }
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    var r = n(39),
        o = n(28).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return r(e, o)
    }
}, function (e, t, n) {
    var r = n(33),
        o = n(14),
        i = n(11),
        a = n(19),
        s = n(6),
        l = n(34),
        u = Object.getOwnPropertyDescriptor;
    t.f = n(5) ? u : function (e, t) {
        if (e = i(e), t = a(t, !0), l) try {
            return u(e, t)
        } catch (e) { }
        if (s(e, t)) return o(!r.f.call(e, t), e[t])
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = r(n(17)),
        i = r(n(7)),
        a = r(n(8)),
        s = n(52),
        l = n(53),
        u = n(71),
        c = n(101),
        d = function () {
            function e() {
                var t = this;
                if ((0, i.default)(this, e), console.log("Constructor of the class"), document.registerElement("grid-overlay", u.GridOverlayElement), this._gridOverlayElement = document.createElement("grid-overlay"), document.body.appendChild(this._gridOverlayElement), this._btnMMP = document.querySelector(".buttonMMP"), this._btnGMB = document.querySelector(".buttonGMB"), this._btnCMO = document.querySelector(".buttonCMO"), null === localStorage.getItem("users")) {
                    localStorage.setItem("users", (0, o.default)([{
                        user: "Ururu",
                        pass: "--fixplease"
                    }]))
                }
                if (this.resizeWindow(), this.initMap(), window.addEventListener("resize", function () {
                    return t.resizeWindow()
                }), null === localStorage.getItem("users")) {
                    localStorage.setItem("users", (0, o.default)([{
                        user: "Ururu",
                        pass: "--fixplease"
                    }]))
                }
            }
            return (0, a.default)(e, [{
                key: "resizeWindow",
                value: function () {
                    this._gridOverlayElement.updateRendering(window.innerWidth, Math.max(window.innerHeight, document.body.offsetHeight, document.documentElement.clientHeight), 24)
                }
            }, {
                key: "initMap",
                value: function () {
                    if ("Contact | Ururu | New Media Development | Artevelde University College Ghent" === document.title) {
                        var e = {
                            lat: 51.0673017,
                            lng: 3.7004048
                        },
                            t = new google.maps.Map(document.querySelector(".map"), {
                                zoom: 16,
                                center: e
                            });
                        new google.maps.Marker({
                            position: e,
                            map: t
                        })
                    }
                }
            }, {
                key: "init",
                value: function () {
                    console.log("Initialization of the class App");
                    new c.UseNavigo;
                    (new s.Button).resizeNav();
                    (new l.Register).loggedIn()
                }
            }]), e
        }();
    window.addEventListener("load", function (e) {
        (new d).init()
    })
}, function (e, t, n) {
    var r = n(0),
        o = r.JSON || (r.JSON = {
            stringify: JSON.stringify
        });
    e.exports = function (e) {
        return o.stringify.apply(o, arguments)
    }
}, function (e, t, n) {
    e.exports = {
        default: n(49),
        __esModule: !0
    }
}, function (e, t, n) {
    n(50);
    var r = n(0).Object;
    e.exports = function (e, t, n) {
        return r.defineProperty(e, t, n)
    }
}, function (e, t, n) {
    var r = n(4);
    r(r.S + r.F * !n(5), "Object", {
        defineProperty: n(3).f
    })
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Button = void 0;
    var o = r(n(7)),
        i = r(n(8));
    t.Button = function () {
        function e() {
            var t = this;
            (0, o.default)(this, e), this._toggleMenu = document.getElementById("pullNav"), this._navBar = document.querySelector(".menu"), this._toggleMenu.addEventListener("click", function (e) {
                return t.toggleNav(e)
            }), window.addEventListener("resize", function (e) {
                return t.resizeNav(e)
            })
        }
        return (0, i.default)(e, [{
            key: "toggleNav",
            value: function () {
                "none" === this._navBar.style.display ? this._navBar.style.display = "block" : this._navBar.style.display = "none"
            }
        }, {
            key: "resizeNav",
            value: function () {
                window.innerWidth < 768 ? this._navBar.style.display = "none" : window.innerWidth >= 768 && (this._navBar.style.display = "block")
            }
        }]), e
    }()
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Register = void 0;
    var o = r(n(17)),
        i = r(n(54)),
        a = r(n(7)),
        s = r(n(8));
    t.Register = function () {
        function e() {
            var t = this;
            (0, a.default)(this, e), this._username = document.querySelector(".inputRegisterUsername"), this._password = document.querySelector(".inputRegisterPassword"), this._registerBtn = document.querySelector(".registerButton"), this._usernameLogin = document.querySelector(".inputLoginUsername"), this._passwordLogin = document.querySelector(".inputLoginPassword"), this._loginBtn = document.querySelector(".signInButton"), this._logoutBtn = document.querySelector(".logoutBtn"), this._profileBtn = document.getElementById("profile"), this._welcomeUser = document.getElementById("welcomeUser"), this._registerBtn && this._registerBtn.addEventListener("click", function (e) {
                return t.register(e)
            }), this._loginBtn && this._loginBtn.addEventListener("click", function (e) {
                return t.login(e)
            }), this._logoutBtn && this._logoutBtn.addEventListener("click", function (e) {
                return t.logout(e)
            }), this.loggedIn()
        }
        return (0, s.default)(e, [{
            key: "register",
            value: function () {
                var e = this._registerBtn;
                this._oldUsers = JSON.parse(localStorage.getItem("users"));
                var t = new Date,
                    n = [{
                        id: t.getTime() + Math.round(Math.random() * t.getTime()),
                        user: this._username.value,
                        pass: this._password.value
                    }];
                n.push.apply(n, (0, i.default)(this._oldUsers)), console.log(n), localStorage.setItem("users", (0, o.default)(n)), e.href = "login.html"
            }
        }, {
            key: "login",
            value: function () {
                var e = document.querySelector(".loginOrNot"),
                    t = JSON.parse(localStorage.getItem("users")),
                    n = this._usernameLogin.value,
                    r = this._passwordLogin.value;
                this._loginBtn;
                t.forEach(function (t, i) {
                    if (n === t.user && r === t.pass) {
                        localStorage.setItem("loginStatus", (0, o.default)(!0));
                        var a = t.user;
                        localStorage.setItem("loggedInUser", (0, o.default)(a)), e.innerHTML = "<h2>You are logged in</h2>"
                    } else if (1 == JSON.parse(localStorage.getItem("loginStatus")));
                    else {
                        console.log(e), e.innerHTML = "<h2>Wrong username or password.<br> Please try again.</h2>";
                        localStorage.setItem("loginStatus", (0, o.default)(!1)), console.log("wrong username or password")
                    }
                })
            }
        }, {
            key: "loggedIn",
            value: function () {
                if (console.log("logged in function"), !0 === JSON.parse(localStorage.getItem("loginStatus"))) {
                    if ("Profile | ISSA | New Media Development | Artevelde University College Ghent" == document.title) {
                        var e = JSON.parse(localStorage.getItem("loggedInUser"));
                        this._welcomeUser.innerHTML = "Have a nice day " + e + "."
                    }
                    this._profileBtn.href = "profile.html", this._profileBtn.innerHTML = "Profile"
                }
            }
        }, {
            key: "logout",
            value: function () {
                if (!0 === JSON.parse(localStorage.getItem("loginStatus"))) {
                    localStorage.setItem("loginStatus", (0, o.default)(!1))
                } else console.log("hi")
            }
        }]), e
    }()
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(55));
    t.default = function (e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return (0, r.default)(e)
    }
}, function (e, t, n) {
    e.exports = {
        default: n(56),
        __esModule: !0
    }
}, function (e, t, n) {
    n(36), n(64), e.exports = n(0).Array.from
}, function (e, t, n) {
    var r = n(20),
        o = n(21);
    e.exports = function (e) {
        return function (t, n) {
            var i, a, s = String(o(t)),
                l = r(n),
                u = s.length;
            return l < 0 || l >= u ? e ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : i : e ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(23),
        o = n(14),
        i = n(29),
        a = {};
    n(9)(a, n(1)("iterator"), function () {
        return this
    }), e.exports = function (e, t, n) {
        e.prototype = r(a, {
            next: o(1, n)
        }), i(e, t + " Iterator")
    }
}, function (e, t, n) {
    var r = n(3),
        o = n(10),
        i = n(24);
    e.exports = n(5) ? Object.defineProperties : function (e, t) {
        o(e);
        for (var n, a = i(t), s = a.length, l = 0; s > l;) r.f(e, n = a[l++], t[n]);
        return e
    }
}, function (e, t, n) {
    var r = n(25);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function (e, t, n) {
    var r = n(11),
        o = n(40),
        i = n(62);
    e.exports = function (e) {
        return function (t, n, a) {
            var s, l = r(t),
                u = o(l.length),
                c = i(a, u);
            if (e && n != n) {
                for (; u > c;)
                    if ((s = l[c++]) != s) return !0
            } else
                for (; u > c; c++)
                    if ((e || c in l) && l[c] === n) return e || c || 0;
            return !e && -1
        }
    }
}, function (e, t, n) {
    var r = n(20),
        o = Math.max,
        i = Math.min;
    e.exports = function (e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
    }
}, function (e, t, n) {
    var r = n(2).document;
    e.exports = r && r.documentElement
}, function (e, t, n) {
    "use strict";
    var r = n(18),
        o = n(4),
        i = n(30),
        a = n(65),
        s = n(66),
        l = n(40),
        u = n(67),
        c = n(68);
    o(o.S + o.F * !n(70)(function (e) {
        Array.from(e)
    }), "Array", {
            from: function (e) {
                var t, n, o, d, p = i(e),
                    h = "function" == typeof this ? this : Array,
                    f = arguments.length,
                    g = f > 1 ? arguments[1] : void 0,
                    m = void 0 !== g,
                    v = 0,
                    b = c(p);
                if (m && (g = r(g, f > 2 ? arguments[2] : void 0, 2)), void 0 == b || h == Array && s(b))
                    for (n = new h(t = l(p.length)); t > v; v++) u(n, v, m ? g(p[v], v) : p[v]);
                else
                    for (d = b.call(p), n = new h; !(o = d.next()).done; v++) u(n, v, m ? a(d, g, [o.value, v], !0) : o.value);
                return n.length = v, n
            }
        })
}, function (e, t, n) {
    var r = n(10);
    e.exports = function (e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)), t
        }
    }
}, function (e, t, n) {
    var r = n(15),
        o = n(1)("iterator"),
        i = Array.prototype;
    e.exports = function (e) {
        return void 0 !== e && (r.Array === e || i[o] === e)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(3),
        o = n(14);
    e.exports = function (e, t, n) {
        t in e ? r.f(e, t, o(0, n)) : e[t] = n
    }
}, function (e, t, n) {
    var r = n(69),
        o = n(1)("iterator"),
        i = n(15);
    e.exports = n(0).getIteratorMethod = function (e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)]
    }
}, function (e, t, n) {
    var r = n(25),
        o = n(1)("toStringTag"),
        i = "Arguments" == r(function () {
            return arguments
        }());
    e.exports = function (e) {
        var t, n, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
                return e[t]
            } catch (e) { }
        }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
}, function (e, t, n) {
    var r = n(1)("iterator"),
        o = !1;
    try {
        var i = [7][r]();
        i.return = function () {
            o = !0
        }, Array.from(i, function () {
            throw 2
        })
    } catch (e) { }
    e.exports = function (e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
            var i = [7],
                a = i[r]();
            a.next = function () {
                return {
                    done: n = !0
                }
            }, i[r] = function () {
                return a
            }, e(i)
        } catch (e) { }
        return n
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GridOverlayElement = void 0;
    var o = r(n(72)),
        i = r(n(7)),
        a = r(n(8)),
        s = r(n(76)),
        l = r(n(93));
    t.GridOverlayElement = function (e) {
        function t() {
            return (0, i.default)(this, t), (0, s.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
        }
        return (0, l.default)(t, e), (0, a.default)(t, [{
            key: "createdCallback",
            value: function () {
                this._canvasElement = document.createElement("canvas"), this._canvasElement.setAttribute("style", "width: 100%;height:100%;"), this.appendChild(this._canvasElement), this._canvas2DContext = this._canvasElement.getContext("2d"), this._gutter = 24, this.updateGrid()
            }
        }, {
            key: "updateRendering",
            value: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
                this._canvasElement.width = e, this._canvasElement.height = t, this._gutter = n, this.updateGrid()
            }
        }, {
            key: "updateGrid",
            value: function () {
                var e = Math.ceil(this._canvasElement.height / this._gutter);
                this._canvas2DContext.beginPath();
                for (var t = 0; t <= e; t++) this._canvas2DContext.moveTo(0, t * this._gutter), this._canvas2DContext.lineTo(this._canvasElement.width, t * this._gutter);
                this._canvas2DContext.closePath(), this._canvas2DContext.strokeStyle = "#ff0000", this._canvas2DContext.stroke();
                var n = 8.33333 * (this._canvasElement.width - 2 * this._gutter) / 100;
                this._canvas2DContext.beginPath();
                for (var r = 0; r <= 12; r++) this._canvas2DContext.moveTo(this._gutter + r * n, 0), this._canvas2DContext.lineTo(this._gutter + r * n, this._canvasElement.height);
                this._canvas2DContext.closePath(), this._canvas2DContext.strokeStyle = "#ff0000", this._canvas2DContext.stroke(), this._canvas2DContext.beginPath();
                for (var o = 0; o < 12; o++) this._canvas2DContext.moveTo(this._gutter + o * n + this._gutter / 2, 0), this._canvas2DContext.lineTo(this._gutter + o * n + this._gutter / 2, this._canvasElement.height), this._canvas2DContext.moveTo(this._gutter + (o + 1) * n - this._gutter / 2, 0), this._canvas2DContext.lineTo(this._gutter + (o + 1) * n - this._gutter / 2, this._canvasElement.height);
                this._canvas2DContext.closePath(), this._canvas2DContext.strokeStyle = "#0000ff", this._canvas2DContext.stroke()
            }
        }, {
            key: "delete",
            value: function () {
                this.parentNode.removeChild(this)
            }
        }]), t
    }(HTMLElement)
}, function (e, t, n) {
    e.exports = {
        default: n(73),
        __esModule: !0
    }
}, function (e, t, n) {
    n(74), e.exports = n(0).Object.getPrototypeOf
}, function (e, t, n) {
    var r = n(30),
        o = n(41);
    n(75)("getPrototypeOf", function () {
        return function (e) {
            return o(r(e))
        }
    })
}, function (e, t, n) {
    var r = n(4),
        o = n(0),
        i = n(13);
    e.exports = function (e, t) {
        var n = (o.Object || {})[e] || Object[e],
            a = {};
        a[e] = t(n), r(r.S + r.F * i(function () {
            n(1)
        }), "Object", a)
    }
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(42));
    t.default = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : (0, r.default)(t)) && "function" != typeof t ? e : t
    }
}, function (e, t, n) {
    e.exports = {
        default: n(78),
        __esModule: !0
    }
}, function (e, t, n) {
    n(36), n(79), e.exports = n(31).f("iterator")
}, function (e, t, n) {
    n(80);
    for (var r = n(2), o = n(9), i = n(15), a = n(1)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
        var u = s[l],
            c = r[u],
            d = c && c.prototype;
        d && !d[a] && o(d, a, u), i[u] = i.Array
    }
}, function (e, t, n) {
    "use strict";
    var r = n(81),
        o = n(82),
        i = n(15),
        a = n(11);
    e.exports = n(37)(Array, "Array", function (e, t) {
        this._t = a(e), this._i = 0, this._k = t
    }, function () {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function (e, t) {
    e.exports = function () { }
}, function (e, t) {
    e.exports = function (e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function (e, t, n) {
    e.exports = {
        default: n(84),
        __esModule: !0
    }
}, function (e, t, n) {
    n(85), n(90), n(91), n(92), e.exports = n(0).Symbol
}, function (e, t, n) {
    "use strict";
    var r = n(2),
        o = n(6),
        i = n(5),
        a = n(4),
        s = n(38),
        l = n(86).KEY,
        u = n(13),
        c = n(27),
        d = n(29),
        p = n(16),
        h = n(1),
        f = n(31),
        g = n(32),
        m = n(87),
        v = n(88),
        b = n(10),
        j = n(11),
        y = n(19),
        _ = n(14),
        w = n(23),
        k = n(89),
        S = n(45),
        P = n(3),
        x = n(24),
        C = S.f,
        z = P.f,
        M = k.f,
        I = r.Symbol,
        D = r.JSON,
        L = D && D.stringify,
        A = h("_hidden"),
        O = h("toPrimitive"),
        E = {}.propertyIsEnumerable,
        T = c("symbol-registry"),
        H = c("symbols"),
        R = c("op-symbols"),
        N = Object.prototype,
        G = "function" == typeof I,
        B = r.QObject,
        V = !B || !B.prototype || !B.prototype.findChild,
        F = i && u(function () {
            return 7 != w(z({}, "a", {
                get: function () {
                    return z(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function (e, t, n) {
            var r = C(N, t);
            r && delete N[t], z(e, t, n), r && e !== N && z(N, t, r)
        } : z,
        J = function (e) {
            var t = H[e] = w(I.prototype);
            return t._k = e, t
        },
        U = G && "symbol" == typeof I.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return e instanceof I
        },
        W = function (e, t, n) {
            return e === N && W(R, t, n), b(e), t = y(t, !0), b(n), o(H, t) ? (n.enumerable ? (o(e, A) && e[A][t] && (e[A][t] = !1), n = w(n, {
                enumerable: _(0, !1)
            })) : (o(e, A) || z(e, A, _(1, {})), e[A][t] = !0), F(e, t, n)) : z(e, t, n)
        },
        q = function (e, t) {
            b(e);
            for (var n, r = m(t = j(t)), o = 0, i = r.length; i > o;) W(e, n = r[o++], t[n]);
            return e
        },
        $ = function (e) {
            var t = E.call(this, e = y(e, !0));
            return !(this === N && o(H, e) && !o(R, e)) && (!(t || !o(this, e) || !o(H, e) || o(this, A) && this[A][e]) || t)
        },
        K = function (e, t) {
            if (e = j(e), t = y(t, !0), e !== N || !o(H, t) || o(R, t)) {
                var n = C(e, t);
                return !n || !o(H, t) || o(e, A) && e[A][t] || (n.enumerable = !0), n
            }
        },
        X = function (e) {
            for (var t, n = M(j(e)), r = [], i = 0; n.length > i;) o(H, t = n[i++]) || t == A || t == l || r.push(t);
            return r
        },
        Q = function (e) {
            for (var t, n = e === N, r = M(n ? R : j(e)), i = [], a = 0; r.length > a;) !o(H, t = r[a++]) || n && !o(N, t) || i.push(H[t]);
            return i
        };
    G || (s((I = function () {
        if (this instanceof I) throw TypeError("Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0),
            t = function (n) {
                this === N && t.call(R, n), o(this, A) && o(this[A], e) && (this[A][e] = !1), F(this, e, _(1, n))
            };
        return i && V && F(N, e, {
            configurable: !0,
            set: t
        }), J(e)
    }).prototype, "toString", function () {
        return this._k
    }), S.f = K, P.f = W, n(44).f = k.f = X, n(33).f = $, n(43).f = Q, i && !n(22) && s(N, "propertyIsEnumerable", $, !0), f.f = function (e) {
        return J(h(e))
    }), a(a.G + a.W + a.F * !G, {
        Symbol: I
    });
    for (var Y = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Z = 0; Y.length > Z;) h(Y[Z++]);
    for (var ee = x(h.store), te = 0; ee.length > te;) g(ee[te++]);
    a(a.S + a.F * !G, "Symbol", {
        for: function (e) {
            return o(T, e += "") ? T[e] : T[e] = I(e)
        },
        keyFor: function (e) {
            if (!U(e)) throw TypeError(e + " is not a symbol!");
            for (var t in T)
                if (T[t] === e) return t
        },
        useSetter: function () {
            V = !0
        },
        useSimple: function () {
            V = !1
        }
    }), a(a.S + a.F * !G, "Object", {
        create: function (e, t) {
            return void 0 === t ? w(e) : q(w(e), t)
        },
        defineProperty: W,
        defineProperties: q,
        getOwnPropertyDescriptor: K,
        getOwnPropertyNames: X,
        getOwnPropertySymbols: Q
    }), D && a(a.S + a.F * (!G || u(function () {
        var e = I();
        return "[null]" != L([e]) || "{}" != L({
            a: e
        }) || "{}" != L(Object(e))
    })), "JSON", {
            stringify: function (e) {
                if (void 0 !== e && !U(e)) {
                    for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
                    return "function" == typeof (t = r[1]) && (n = t), !n && v(t) || (t = function (e, t) {
                        if (n && (t = n.call(this, e, t)), !U(t)) return t
                    }), r[1] = t, L.apply(D, r)
                }
            }
        }), I.prototype[O] || n(9)(I.prototype, O, I.prototype.valueOf), d(I, "Symbol"), d(Math, "Math", !0), d(r.JSON, "JSON", !0)
}, function (e, t, n) {
    var r = n(16)("meta"),
        o = n(12),
        i = n(6),
        a = n(3).f,
        s = 0,
        l = Object.isExtensible || function () {
            return !0
        },
        u = !n(13)(function () {
            return l(Object.preventExtensions({}))
        }),
        c = function (e) {
            a(e, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        d = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function (e, t) {
                if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, r)) {
                    if (!l(e)) return "F";
                    if (!t) return "E";
                    c(e)
                }
                return e[r].i
            },
            getWeak: function (e, t) {
                if (!i(e, r)) {
                    if (!l(e)) return !0;
                    if (!t) return !1;
                    c(e)
                }
                return e[r].w
            },
            onFreeze: function (e) {
                return u && d.NEED && l(e) && !i(e, r) && c(e), e
            }
        }
}, function (e, t, n) {
    var r = n(24),
        o = n(43),
        i = n(33);
    e.exports = function (e) {
        var t = r(e),
            n = o.f;
        if (n)
            for (var a, s = n(e), l = i.f, u = 0; s.length > u;) l.call(e, a = s[u++]) && t.push(a);
        return t
    }
}, function (e, t, n) {
    var r = n(25);
    e.exports = Array.isArray || function (e) {
        return "Array" == r(e)
    }
}, function (e, t, n) {
    var r = n(11),
        o = n(44).f,
        i = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function (e) {
        return a && "[object Window]" == i.call(e) ? function (e) {
            try {
                return o(e)
            } catch (e) {
                return a.slice()
            }
        }(e) : o(r(e))
    }
}, function (e, t) { }, function (e, t, n) {
    n(32)("asyncIterator")
}, function (e, t, n) {
    n(32)("observable")
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var o = r(n(94)),
        i = r(n(98)),
        a = r(n(42));
    t.default = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, a.default)(t)));
        e.prototype = (0, i.default)(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
    }
}, function (e, t, n) {
    e.exports = {
        default: n(95),
        __esModule: !0
    }
}, function (e, t, n) {
    n(96), e.exports = n(0).Object.setPrototypeOf
}, function (e, t, n) {
    var r = n(4);
    r(r.S, "Object", {
        setPrototypeOf: n(97).set
    })
}, function (e, t, n) {
    var r = n(12),
        o = n(10),
        i = function (e, t) {
            if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, r) {
            try {
                (r = n(18)(Function.call, n(45).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function (e, n) {
                return i(e, n), t ? e.__proto__ = n : r(e, n), e
            }
        }({}, !1) : void 0),
        check: i
    }
}, function (e, t, n) {
    e.exports = {
        default: n(99),
        __esModule: !0
    }
}, function (e, t, n) {
    n(100);
    var r = n(0).Object;
    e.exports = function (e, t) {
        return r.create(e, t)
    }
}, function (e, t, n) {
    var r = n(4);
    r(r.S, "Object", {
        create: n(23)
    })
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.UseNavigo = void 0;
    var o = r(n(7)),
        i = r(n(8)),
        a = n(102),
        s = r(n(107));
    t.UseNavigo = function () {
        function e() {
            (0, o.default)(this, e), this._root = "localhost:8080/", this._useHash = !0, this._hash = "#!", this._router = new s.default(this._root, this._useHash, this._hash), this.navigo(), this.favProject()
        }
        return (0, i.default)(e, [{
            key: "favProject",
            value: function () {
                var e = new a.LoadJson;
                this._getProject = document.querySelector(".favorite"), this._getProject && this._getProject.addEventListener("click", function (t) {
                    return e.favoriteProject(t)
                }), this._getProject = document.querySelector(".like"), this._getProject && this._getProject.addEventListener("click", function (t) {
                    return e.likeProject(t)
                })
            }
        }, {
            key: "navigo",
            value: function () {
                var e = new a.LoadJson;
                this._router.on({
                    "localhost:8080/": function () {
                        e.pageIndexJson()
                    },
                    "index.html": function () {
                        e.pageIndexJson()
                    },
                    "projects.html": function () {
                        e.loadProjectsJson(), console.log("this is the projects page")
                    },
                    "aboutus.html": function () {
                        e.loadAboutUsJson(), console.log("this is aboutus page.")
                    },
                    "news.html": function () {
                        e.loadNewsJson(), console.log("this is news page.")
                    },
                    "blog.html": function () {
                        e.loadBlogJson(), console.log("this is blog page.")
                    },
                    "detailpageproject.html": function () {
                        e.loadDetailProject(), console.log("this detailpageProjects page.")
                    },
                    "detailpagearticle.html": function () {
                        e.loadDetailArticle(), console.log("this is detailArticles page.")
                    }
                }).resolve()
            }
        }]), e
    }()
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.LoadJson = void 0;
    var o = r(n(17)),
        i = r(n(7)),
        a = r(n(8)),
        s = n(103),
        l = n(104),
        u = n(105),
        c = n(106);
    t.LoadJson = function () {
        function e() {
            (0, i.default)(this, e), this._projectsContainer = document.querySelector(".projectsContainer"), this._aboutUsContainer = document.querySelector(".aboutUsContainer"), this._blogPostsContainer = document.querySelector(".blogPostsContainer"), this._articlesContainer = document.querySelector(".articlesContainer"), this._projectContainer = document.querySelector(".projectContainer"), this._articleContainer = document.querySelector(".articleContainer"), this._containerQuote = document.querySelector(".containerQuote"), "Profile | Ururu | New Media Development | Artevelde University College Ghent" == document.title && (this.favoriteProject(), this.likeProject())
        }
        return (0, a.default)(e, [{
            key: "loadProjectsJson",
            value: function () {
                var e = "";
                s.projects.forEach(function (t, n) {
                    s.projects[n].projectId % 2 == 0 ? e += '\n        <div class="project ' + s.projects[n].projectId + ' Left">\n        <div>\n          <div class="textHover">\n          </div>\n          <div>\n          <img class="imgProject" src="assets/images/projects/' + s.projects[n].imgProject[0] + '">\n          </div>\n        </div>\n        <div>\n          <div class="nameStudent">\n            ' + s.projects[n].nameStudent + '\n          </div>\n          <div class="nameProject">            \n          <a href="detailpageproject.html"><h2>' + s.projects[n].nameProject + "</h2></a>\n          </div>\n        </div>\n      </div>" : e += '\n        <div class="project ' + s.projects[n].projectId + ' Right">\n          <div>\n            <div class="textHover">\n            </div>\n            <div>\n            <img class="imgProject" src="assets/images/projects/' + s.projects[n].imgProject[0] + '">\n            </div>\n          </div>\n          <div>\n            <div class="nameStudent">\n              ' + s.projects[n].nameStudent + '\n            </div>\n            <div class="nameProject">            \n            <a href="detailpageproject.html"><h2>' + s.projects[n].nameProject + "</h2></a>\n            </div>\n          </div>\n        </div>"
                }), this._projectsContainer.innerHTML = e
            }
        }, {
            key: "loadAboutUsJson",
            value: function () {
                var e = "";
                l.courses.forEach(function (t, n) {
                    e += "  \n      <h2>" + l.courses[n].courseTitle + "</h2>\n      <article>" + l.courses[n].courseContent + "</article>"
                }), this._aboutUsContainer.innerHTML = e
            }
        }, {
            key: "loadNewsJson",
            value: function () {
                var e = "";
                c.articles.forEach(function (t, n) {
                    c.articles[n].articleId % 2 == 0 ? e += '\n          <div class="articleDetailContainer">\n            <img  class="imgArticle Left" src="assets/images/articles/' + c.articles[n].articleImage + '">\n            <div class="textArticle Right">\n              <p><a href="detailpagearticle.html">' + c.articles[n].articleTitle + '</a></p>\n              <p class="articleThumb">' + c.articles[n].articleThumbText + "</p>\n              <p>" + c.articles[n].articleDate + "</p>\n            </div>\n          </div>" : e += '\n        <div class="articleDetailContainer">\n          <div class="textArticle Left">\n            <p><a href="detailpagearticle.html">' + c.articles[n].articleTitle + '</a></p>\n            <p class="articleThumb">' + c.articles[n].articleThumbText + "</p>\n            <p>" + c.articles[n].articleDate + '</p>\n          </div>\n          <img  class="imgArticle Right" src="assets/images/articles/' + c.articles[n].articleImage + '">\n        </div>'
                }), this._articlesContainer.innerHTML = e
            }
        }, {
            key: "loadBlogJson",
            value: function () {
                var e = "";
                u.posts.forEach(function (t, n) {
                    e += '\n      <div class="blogPost">\n        <div class="overlay"><img src="assets/images/' + u.posts[n].postImg[0] + '" alt="blurred photo about topic of the blogpost">\n        </div>\n        <div class="box above">\n          <img src="assets/images/' + u.posts[n].postImg[1] + '" alt="Creater of the blogpost">\n          <h3>' + u.posts[n].postCreator + "</h3>\n          <p>" + u.posts[n].postCreatorNature + '</p>\n        </div>\n        <div class="box below">\n          <h4>' + u.posts[n].postTitle + "</h4>\n        </div>\n      </div>"
                }), this._blogPostsContainer.innerHTML = e
            }
        }, {
            key: "pageIndexJson",
            value: function () {
                for (var e = "", t = "", n = "", r = 0; r < 4; r++) s.projects[r].projectId % 2 == 0 ? e += '\n        <div class="project ' + s.projects[r].projectId + ' Left">\n          <div>\n            <div class="textHover">\n            </div>\n            <div>\n              <img class="imgProject" src="assets/images/projects/' + s.projects[r].imgProject[0] + '">\n            </div>\n          </div>\n          <div>\n            <div class="nameStudent">\n              ' + s.projects[r].nameStudent + '\n            </div>\n            <div class="nameProject">            \n              <a href="detailpageproject.html"><h2>' + s.projects[r].nameProject + "</h2></a>\n            </div>\n          </div>\n        </div>" : e += '\n        <div class="project ' + s.projects[r].projectId + ' Right">\n          <div>\n            <div class="textHover">\n            </div>\n            <div>\n              <img class="imgProject" src="assets/images/projects/' + s.projects[r].imgProject[0] + '">\n            </div>\n          </div>\n          <div>\n            <div class="nameStudent">\n              ' + s.projects[r].nameStudent + '\n            </div>\n            <div class="nameProject">            \n              <a href="detailpageproject.html"><h2>' + s.projects[r].nameProject + "</h2></a>\n            </div>\n          </div>\n        </div>";
                this._projectsContainer.innerHTML = e;
                for (var o = 0; o < 3; o++) c.articles[o].articleId % 2 == 0 ? t += '  \n        <div class="articleDetailContainer">\n          <img  class="imgArticle Left" src="assets/images/articles/' + c.articles[o].articleImage + '">\n          <div class="textArticle Right">\n            <p><a href="detailpagearticle.html">' + c.articles[o].articleTitle + '</a></p>\n            <p class="articleThumb">' + c.articles[o].articleThumbText + "</p>\n            <p>" + c.articles[o].articleDate + "</p>\n          </div>\n        </div>" : t += '  \n        <div class="articleDetailContainer">\n          <div class="textArticle Left">\n            <p><a href="detailpagearticle.html">' + c.articles[o].articleTitle + '</a></p>\n            <p class="articleThumb">' + c.articles[o].articleThumbText + "</p>\n            <p>" + c.articles[o].articleDate + '</p>\n          </div>\n          <img  class="imgArticle Right" src="assets/images/articles/' + c.articles[o].articleImage + '">\n        </div>';
                this._articlesContainer.innerHTML = t;
                for (var i = 0; i < 3; i++) n += '\n      <div class="blogPost">\n        <div class="overlay"><img src="assets/images/' + u.posts[i].postImg[0] + '" alt="blurred photo about topic of the blogpost">\n        </div>\n        <div class="box above">\n        <img src="assets/images/' + u.posts[i].postImg[1] + '" alt="Creater of the blogpost">\n          <h3>' + u.posts[i].postCreator + "</h3>\n          <p>" + u.posts[i].postCreatorNature + '</p>\n        </div>\n        <div class="box below">\n          <h4>' + u.posts[i].postTitle + "</h4>\n        </div>\n      </div>";
                this._blogPostsContainer.innerHTML = n
            }
        }, {
            key: "loadDetailProject",
            value: function () {
                for (var e = "", t = "", n = 0; n < 1; n++) {
                    t += "\n      <h1> " + s.projects[n].nameProject + "</h1>\n      ", e += '\n      <div class="detailStudentContainer">\n        <div class="detailStudentDetail">\n        <h4>' + s.projects[n].nameStudent + '         <i class="fa fa-star left foot" aria-hidden="true"></i>  </h4>\n          <h4>' + s.projects[n].course + "</h4>\n          <h4>" + s.projects[n].specialization + "</h4>\n          <h4>" + s.projects[n].year + '</h4>\n        </div> \n        <div class="nameProjectDetail">           \n          <h4>' + s.projects[n].nameProject + '</h4>\n          <a class="favorite" ><i class="fa fa-heart left foot" aria-hidden="true"></i></a>\n          <a class="like"><i class="fa fa-thumbs-up left foot" aria-hidden="true"></i></a>  \n          <i class="fa fa-eye left foot" aria-hidden="true"></i>  \n        </div>\n      </div>\n      <div class="socialContainerDetail">\n        <div class="shareContainer">\n          <h4>Share the awesomeness\n          <a href="https://facebook.com"><i class="fa fa-facebook left foot" aria-hidden="true"></i></a>\n          <a href="https://twitter.com"><i class="fa fa-twitter left foot" aria-hidden="true"></i></a>\n          <a href="https://plus.google.com"><i class="fa fa-google left foot" aria-hidden="true"></i></a>  \n          </h4>\n        </div>\n      </div>\n      <div class="projectAssignmentDetail">\n        <p>' + s.projects[n].assignment + '</p>\n      </div>\n      <div class="projectImages>';
                    for (var r = 0; r < s.projects[n].imgProject.length; r++) e += '<img class="imgProject" src="assets/images/projects/' + s.projects[n].imgProject[r] + '">';
                    e += "\n      </div><br>"
                }
                this._projectContainer.innerHTML = e, this._containerQuote.innerHTML = t
            }
        }, {
            key: "favoriteProject",
            value: function () {
                if (!0 === JSON.parse(localStorage.getItem("loginStatus"))) {
                    if ("Project | Ururu | New Media Development | Artevelde University College Ghent" == document.title && localStorage.setItem("favoriteProject", (0, o.default)(this._projectContainer.innerHTML)), "Profile | Ururu | New Media Development | Artevelde University College Ghent" == document.title) {
                        var e = document.querySelector(".favoriteProjectsContainer"),
                            t = JSON.parse(localStorage.getItem("favoriteProject"));
                        e.innerHTML = t
                    }
                } else console.log("You should login before you try to favorite or like something.")
            }
        }, {
            key: "likeProject",
            value: function () {
                if (!0 === JSON.parse(localStorage.getItem("loginStatus"))) {
                    if ("Project | Ururu | New Media Development | Artevelde University College Ghent" == document.title && localStorage.setItem("likeProject", (0, o.default)(this._projectContainer.innerHTML)), "Profile | Ururu | New Media Development | Artevelde University College Ghent" == document.title) {
                        var e = document.querySelector(".likeProjectsContainer");
                        console.log("nyooo");
                        var t = JSON.parse(localStorage.getItem("likeProject"));
                        e.innerHTML = t
                    }
                } else console.log("You should login before you try to favorite or like something.")
            }
        }, {
            key: "loadDetailArticle",
            value: function () {
                for (var e = "", t = "", n = 0; n < 1; n++) c.articles[n].articleId % 2 == 0 && (e += '\n        <div class="socialDateContainer">\n          <div class="dateContainer">\n            <h2>' + c.articles[n].articleDate + '</h2>\n          </div>\n          <div class="socialContainer">\n            <ul>\n            <li><i class="fa fa-facebook left foot" aria-hidden="true"></i></li> \n            <li><i class="fa fa-twitter left foot" aria-hidden="true"></i></li>  \n            <li><i class="fa fa-google left foot" aria-hidden="true"></i></li>   \n            </ul>\n          </div>\n        </div>\n        <div class="articleImage">\n          <img class="imgProject" src="assets/images/articles/' + c.articles[n].articleImage[0] + '">\n        </div>\n        <div class="articleContent">\n          <article>' + c.articles[n].articleContent + "</article>\n        </div>\n        ", t += "\n        <h1> " + c.articles[n].articleTitle + " </h1>\n        ");
                this._containerQuote.innerHTML = t, this._articleContainer.innerHTML = e
            }
        }]), e
    }()
}, function (e, t) {
    e.exports = {
        projects: [{
            projectId: "0",
            nameProject: "The Sweet Tooth",
            nameStudent: "Anthony Nys",
            course: "Crossmedia-ontwerp",
            specialization: "Graphic Design",
            year: "2de jaar",
            assignment: "In de tweede jaar ontwikkelden de studenten een huisstijl voor een foodtruck-concept. Anthony bracht zijn frozen yoghurt via een kleurrijk communicatieconcept aan de man.",
            used: "",
            imgProject: ["sweet-tooth/thumb.png", "sweet-tooth/01.jpg", "sweet-tooth/02.jpg", "sweet-tooth/03.jpg", "sweet-tooth/sweetvan.jpg"]
        }, {
            projectId: "1",
            nameProject: "Orbit",
            nameStudent: "Siham Asrikh",
            course: "Crossmedia-ontwerp",
            specialization: "Graphic Design",
            year: "2de jaar",
            assignment: "",
            used: "",
            imgProject: ["orbit/thumb.jpg", "orbit/01.jpg", "orbit/02.jpg", "creathing/03.jpg"]
        }, {
            projectId: "2",
            nameProject: "Memorial Van Damme",
            nameStudent: "Wannes Vansteenhuyse",
            course: "Crossmedia-ontwerp",
            specialization: "Graphic Design",
            year: "2de jaar",
            assignment: "De studenten 2CMO namen in 2016 deel aan de wedstrijd die op zoek gaat naar het campagnebeeld voor de 40ste editie van de Memorial Van Damme.",
            used: "",
            imgProject: ["memorial-van-damme-wv/thumb.jpg", "memorial-van-damme-wv/01.jpg"]
        }, {
            projectId: "3",
            nameProject: "Winter",
            nameStudent: "Freya De Corte",
            course: "Crossmedia-ontwerp",
            specialization: "Photo Design",
            year: "2de jaar",
            assignment: "",
            used: "",
            imgProject: ["winter/thumb.png", "winter/01.png"]
        }, {
            projectId: "4",
            nameProject: "Pasta Pesto",
            nameStudent: "Lisa Walcarius",
            course: "Crossmedia-ontwerp",
            specialization: "Photo Design",
            year: "2de jaar",
            assignment: "",
            used: "",
            imgProject: ["pasta-pesto/thumb.png", "pasta-pesto/01.png", "pasta-pesto/02.png"]
        }, {
            projectId: "5",
            nameProject: "StreetArtMap",
            nameStudent: "Bram De Backer",
            course: "Multimediaproductie",
            specialization: "Audiovisual Design",
            year: "2de jaar",
            assignment: "Voor mijn bachelorproef wilde ik een webapplicatie maken die alle street art in Belgi� verzamelde en op een interactieve kaart zette. Gebruikers kunnen hun eigen foto's van een mural uploaden, die ma een screening online komen. streetartmap.be",
            used: "360� fotografie, A-Frame, Angular, Firebase, Sass, TypeScript, VR, Video.",
            imgProject: ["street-art-map/thumb.png", "street-art-map/01.png", "street-art-map/02.png", "street-art-map/03.png", "street-art-map/04.png", "street-art-map/code.png"]
        }, {
            projectId: "6",
            nameProject: "Didactische plaat",
            nameStudent: "Niels Dewelde",
            course: "Crossmedia-ontwerp",
            specialization: "Graphic Design",
            year: "2de jaar",
            assignment: "Ontwerp van een didactische plaat met als onderwerp 'classic cars'.",
            used: "",
            imgProject: ["didactische-plaat/thumb.jpg", "didactische-plaat/01.png", "didactische-plaat/02.png"]
        }, {
            projectId: "7",
            nameProject: "Kinderboerderij",
            nameStudent: "Jules Van Rijsselberge",
            course: "Crossmedia-ontwerp",
            specialization: "Graphic Design",
            year: "2de jaar",
            assignment: "Als eindwerk voor de tweede jaar ontwikkelden de studenten Graphic Design een huisstijl voor een lokale kinderboerderij.",
            used: "",
            imgProject: ["kinderboerderij/thumb.jpg", "kinderboerderij/01.jpg", "kinderboerderij/02.jpg", "kinderboerderij/03.jpg", "kinderboerderij/04.jpg"]
        }, {
            projectId: "8",
            nameProject: "Melk Campagne",
            nameStudent: "Shauny Eloot",
            course: "Crossmedia-ontwerp",
            specialization: "Photo Design",
            year: "3de jaar",
            assignment: "Bedenkt een nieuwe merknaam en ontwerp de verpakkingen voor 3 soorten melk. Vol, halfvol en melk met een speciaal smaakje. Er werd een huisstijl uitgewerkt die tevens de basis vormde voor een bijhorende reclamecampagne.",
            used: "",
            imgProject: ["melk/thumb.png", "melk/01.png", "melk/02.png", "melk/03.png", "melk/04.png", "melk/05.png"]
        }, {
            projectId: "9",
            nameProject: "FitChallenge",
            nameStudent: "Manon Adriaens & Alyssa Mae Enzon",
            course: "Crossmedia-ontwerp",
            specialization: "Photo Design",
            year: "2de jaar",
            assignment: "Bedenk, ontwerp en maak een prototype.",
            used: "CSS, HTML, JavaScript, Jekyll, Markdown, Sass, XD.",
            imgProject: ["fit-challenge/thumb.png", "fit-challenge/01.png", "fit-challenge/02.png", "fit-challenge/wireflow.jpg"]
        }, {
            projectId: "10",
            nameProject: "Blitter",
            nameStudent: "Pieter-Jan Sas",
            course: "Multimediaproductie",
            specialization: "New Media Development",
            year: "3de jaar",
            assignment: "Bedenk, ontwerp en programmeer een Hybrid App dat het ecologische, economische en sociaal probleem van zwerfvuil en sluikstorten kan helpen oplossen.",
            used: "Ionic, JavaScript, MySQL, PHP, Symfony.",
            imgProject: ["blitter/thumb.png", "blitter/01.png", "blitter/02.png", "blitter/03.png", "blitter/04.png", "blitter/05.png"]
        }, {
            projectId: "11",
            nameProject: "A salad is not a meal",
            nameStudent: "Elena Vanhauwaert",
            course: "Crossmedia-ontwerp",
            specialization: "Graphic Design",
            year: "3de jaar",
            assignment: "Het voedingsbedrijf Vandemoortele kwam aankloppen bij de laatstejaarsstudenten CMO met de vraag om een etiket te ontwerpen voor hun 'Salad In A Jar'.",
            used: "",
            imgProject: ["salad/thumb.jpg", "salad/01.jpg"]
        }, {
            projectId: "12",
            nameProject: "El Dorado",
            nameStudent: "Amandine Faingnaert",
            course: "Crossmedia-ontwerp",
            specialization: "Graphic Design",
            year: "2de jaar",
            assignment: "De eindopdracht van de tweede jaar CMO bestond uit het branden van een fictief thema-pretpark. Amandine cre�erde het tot de verbeelding sprekende 'El Dorado', een pretpark met piraten-thema.",
            used: "",
            imgProject: ["el-drodo/thumb.jpg", "el-drodo/01.jpg", "el-drodo/02.jpg", "el-drodo/03.jpg", "el-drodo/04.jpg", "el-drodo/05.jpg", "el-drodo/06.jpg", "el-drodo/07.jpg", "el-drodo/08.jpg"]
        }, {
            projectId: "13",
            nameProject: "Creathing",
            nameStudent: "Tine VanCoillie",
            course: "Multimediaproductie",
            specialization: "New Media Development",
            year: "2de jaar",
            assignment: "Opdracht: bedenk, ontwerp en programmeer een elektronisch stemsysteem voor verkiezingen en referenda dat bestaat uit een Mobile Web App, een API en een Backoffice en rekening houdt met authenticatie, privacy, beveiliging en integriteit.",
            used: "JavaScript, Laravel, MySQL, PHP, Vue.js",
            imgProject: ["creathing/thumb.png", "creathing/01.png", "creathing/02.png", "creathing/03.png", "creathing/04.png", "creathing/code.png", "creathing/database.png"]
        }, {
            projectId: "14",
            nameProject: "Space Dweller",
            nameStudent: "Jonas Dermul",
            course: "Crossmedia-ontwerp ",
            specialization: "Graphic Design",
            year: "2de jaar",
            assignment: " 'stel je voor dat een reis naar de planeet Mars even gewoon zou zijn als een intercontinentale vlucht op aarde. Hoe zou je deze reis dan promoten?'.",
            used: "",
            imgProject: ["space-dweller/thumb.jpg", "space-dweller/01.png", "space-dweller/02.png", "space-dweller/03.png", "space-dweller/04.png", "space-dweller/05.png", "space-dweller/06.png"]
        }, {
            projectId: "15",
            nameProject: "Marsman",
            nameStudent: "Kato Janssens",
            course: "Crossmedia-ontwerp",
            specialization: "Graphic Design",
            year: "2de jaar",
            assignment: "'stel je voor dat een reis naar de planeet Mars even gewoon zou zijn als een intercontinentale vlucht op aarde. Hoe zou je deze reis dan promoten?'.",
            used: "",
            imgProject: ["marsman/thumb.jpg", "marsman/01.png", "marsman/04.png", "marsman/03.png", "marsman/04.png", "marsman/05.png"]
        }, {
            projectId: "16",
            nameProject: "Heathen",
            nameStudent: "Lander Denys",
            course: "Multimediaproductie",
            specialization: "Audiovisual Design",
            year: "3de jaar",
            assignment: "Titel sequence voor een niet bestaande serie/film.",
            used: "",
            imgProject: ["heathen/thumb.png", "heathen/01.png", "heathen/02.png", "heathen/03.png", "heathen/04.png", "heathen/05.png", "heathen/06.png"]
        }, {
            projectId: "17",
            nameProject: "Mighty Spicy",
            nameStudent: "Liesbeth Tempelare",
            course: "Crossmedia-ontwerp",
            specialization: "Graphic Design",
            year: "2de jaar",
            assignment: "In de tweede jaar ontwikkelden de studenten een huisstijl voor een foodtruck-concept. Liesbeth bracht haar pittige taco's via een kleurrijke branding aan de man.",
            used: "",
            imgProject: ["mighty-spicy/thumb.png", "mighty-spicy/01.png", "mighty-spicy/02.png", "mighty-spicy/03.png", "mighty-spicy/04.png", "mighty-spicy/05.png", "mighty-spicy/06.png"]
        }, {
            projectId: "18",
            nameProject: "Google Online Marketing",
            nameStudent: "GMB team",
            course: "Grafimediabeleid",
            specialization: "Crossmedia",
            year: "3de jaar",
            assignment: "Google voorziet een Adwords reclamebudget van 250 dollar. Hiermee bedenken en lanceren de GMB'ers een online campagne voor een non-profit organisatie. De campagne liep over een periode van drie weken.",
            used: "",
            imgProject: ["google/thumb.jpg", "google/01.jpg"]
        }, {
            projectId: "19",
            nameProject: "Spot App",
            nameStudent: "Maxim Van Hove",
            course: "Multimediaproductie",
            specialization: "New Media Development",
            year: "3de jaar",
            assignment: "Bedenk, ontwerp en programmeer een Hybrid App dat het ecologische, economische en sociaal probleem van zwerfvuil en sluikstorten kan helpen oplossen.",
            used: "Ionic, JavaScript, MySQL, PHP, Symfony.",
            imgProject: ["spot-app/thumb.png", "spot-app/01.png", "spot-app/02.png", "spot-app/03.png"]
        }, {
            projectId: "20",
            nameProject: "Trash",
            nameStudent: "Bert Goossens",
            course: "Multimediaproductie",
            specialization: "New Media Development",
            year: "3de jaar",
            assignment: "Bedenk, ontwerp en programmeer een Hybrid App dat het ecologische, economische en sociaal probleem van zwerfvuil en sluikstorten kan helpen oplossen.",
            used: "Ionic, JavaScript, MySQL, PHP, Symfony.",
            imgProject: ["trash-app/thumb.png", "trash-app/01.png", "trash-app/02.png", "trash-app/03.png", "trash-app/04.png", "trash-app/05.png", "trash-app/06.png", "trash-app/07.png", "trash-app/08.png", "trash-app/09.png"]
        }, {
            projectId: "21",
            nameProject: "Themapark Oceano",
            nameStudent: "Caroline Pham",
            course: "Crossmedia-ontwerp",
            specialization: "Graphic Design",
            year: "2de jaar",
            assignment: "De eindopdracht van de tweede jaar CMO bestond uit het ontwikkelen van een branding voor een fictief thema-pretpark. Caroline was ambitieus en ging voor een themapark dat zich een paar mijl onder de zeespiegel bevindt.",
            used: "",
            imgProject: ["themepark-oceano/thumb.png", "themepark-oceano/01.png", "themepark-oceano/02.png", "themepark-oceano/03.png", "themepark-oceano/04.png", "themepark-oceano/05.png", "themepark-oceano/06.png", "themepark-oceano/07.png", "themepark-oceano/08.png"]
        }, {
            projectId: "22",
            nameProject: "Cesar",
            nameStudent: "Victor Gouhie",
            course: "Multimediaproductie",
            specialization: "Audiovisual Design",
            year: "2de jaar",
            assignment: "De briefing van deze opdracht voor het vak '2D Animatie' luidde als volgt: maak een one minute video door gebruik te maken van �Vormator� elementen.",
            used: "",
            imgProject: ["cesar/thumb.png", "cesar/01.png", "cesar/02.png", "cesar/03.png", "cesar/04.png", "cesar/05.png"]
        }, {
            projectId: "23",
            nameProject: "Schoolhoeve",
            nameStudent: "Rietje Van Hoof",
            course: "Crossmedia-ontwerp",
            specialization: "Graphic Design",
            year: "2de jaar",
            assignment: "",
            used: "",
            imgProject: ["schoolhoeve/thumb.jpg", "schoolhoeve/01.jpg", "schoolhoeve/02.jpg", "schoolhoeve/03.jpg", "schoolhoeve/04.jpg", "schoolhoeve/05.jpg"]
        }]
    }
}, function (e, t) {
    e.exports = {
        courses: [{
            courseId: "0",
            courseTitle: "Grafiemediabeleid",
            courseContent: "<p><b>Grafimediabeleid Ben je gepassioneerd door de impact van print- en multimedia op ons leven? Zoek je een gevarieerde afstudeerrichting die je klaarstoomt voor een job in de media- of grafische sector? Dan is grafimediabeleid ongetwijfeld iets voor jou. Het is een ideale mix tussen creatief ondernemen, innovatieve communicatie en productkennis binnen de sector.</b><br> Je kan kiezen uit <b>twee verschillende trajecten.</b></p> <h4>Crossmedia</h4> <p>Crossmedia combineert marketing en creatief ondernemen met een flinke dosis kennis over technische print- en multimedia. Je leert luisteren naar de noden van klanten en hen adviseren hoe ze hun mediatoepassingen optimaal kunnen inzetten in commerciële campagnes. Na deze opleiding mag je jezelf een expert in digitale, sociale en printmedia noemen.</p> <h4>Printmedia<h4> <p>Printmedia zoomt in op de technische aspecten van printproductie en bevindt zich pal op het kruispunt van creativiteit, innovatie en technologie. Als afgestudeerde ligt er ongetwijfeld een kleurrijke job op jou te wachten.</p>"
        }, {
            courseId: "1",
            courseTitle: "Crossmedia-ontwerp",
            courseContent: "<p><b>Logo’s ontwerpen, ideeën uittekenen en vormgeven: spreekt dat je aan? Dan is deze afstudeerrichting zeker iets voor jou.</b><br> Bij Crossmedia-ontwerp staat creatief denken centraal, maar leer je ook om rekening te houden met technische uitvoermogelijkheden. Halfweg het tweede jaar kan je kiezen uit twee trajecten om je nog verder te specialiseren: Graphic Design en Photo Design.<br></p> <h4>Graphic Design</h4> <p>Studenten Graphic Design zijn creatievelingen die origineel en technisch hoogstaand werk willen afleveren. Ze ademen mooi en goed design. We spreken dan onder meer over verpakkingen, reclamedrukwerk, huisstijlen of affiches.<br> Fotografie is als ondersteunend basispakket in het programma opgenomen.</p> <h4>Photo Design</h4> <p>Studenten Photo Design houden van de creatieve mix van fotografie en vormgeving. Zij willen het perfecte beeld schieten en het vervolgens verwerken in een passende lay-out.<br> Fotografie, manuele en digitale vormgeving en typografie zijn de pijlers van deze opleiding.</p>"
        }, {
            courseId: "2",
            courseTitle: "Multimediaproductie",
            courseContent: "<p><b>Zijn Internet of Things, Big Data, Mixed Reality, videostreaming en Smart Assistants voor jou nu al passé? Werk mee aan de hype van morgen en ontwikkel bij ons de skills voor de toekomst!</b></p> <p>Studenten multimediaproductie beperken zich niet enkel tot het design maar gebruiken de laatste nieuwe technologie om hun creatieve ontwerpen uit te werken tot een kant-en-klaar digitaal eindproduct.<br> Na een doorgedreven algemene grafische en multimediale basisopleiding in het eerste jaar kies je in het tweede jaar meteen voor een keuzetraject. Audiovisual Design als je audio, video, motion graphics en 3D-animatie wil realiseren of New Media Development als je de nadruk wil leggen op coderen, programmeren en apps ontwikkelen.</p> <h4>Audiovisual Design</h4> <p>Studenten Audiovisual Design houden van audiovisuele producties. Ze gaan aan de slag met videocamera’s, motion graphics, 3D-animatie en visuele effecten om hun creativiteit uit te drukken. Ze publiceren hun realisaties online via streaming of op fysieke dragers, maar draaien er ook hun hand niet voor om, om er een bijhorende professionele website voor te maken.<br> Ga aan de slag als creatief talent in een reclamebureau of een audiovisueel productiehuis; of als multimedia-ontwerper of grafisch ontwerper.</p> <h4>New Media Development</h4> <p>Studenten New Media Development houden van grafisch werk, maar zijn gepassioneerd door code. Ze ontwerpen verbluffende digitale gebruikersbelevingen en werken die volledig uit met code, de laatste nieuwe trendy programmeerframeworks en automatisatietools tot datagestuurde applicaties voor web en/of mobiel.<br> Met hun aandacht voor vormgeving en gebruiksvriendelijkheid aangevuld met een brede IT-kennis en software engineering skills zijn ze de ideale brugfiguren tussen de creatievelingen en de klassieke I(C)T’ers.<br> Ga aan de slag als webdeveloper, front-end developer, full-stack developer, cms developer, app designer, multimedia-ontwerper …</p>"
        }]
    }
}, function (e, t) {
    e.exports = {
        posts: [{
            postId: "0",
            postTitle: "7 simple tricks that make your singing 100% more powerful",
            postCreator: "Michael D. Pollock",
            postCreatorNature: "Coffee lover. WordPress developer. WP-Prosperity creator.",
            postDate: "",
            postImg: ["blogs/01thumb.jpg", "blogs/01.jpg"]
        }, {
            postId: "1",
            postTitle: "How to write a blog post?",
            postCreator: "Liz Longacre",
            postCreatorNature: "All natural. WordPress developer. Graphic designer.",
            postDate: "",
            postImg: ["blogs/02thumb.jpg", "blogs/02.jpg"]
        }, {
            postId: "2",
            postTitle: "Java vs. Kotlin: which is the better option for Android App",
            postCreator: "Nathan Ellering",
            postCreatorNature: "Tea lover. WordPress developer. App developer.",
            postDate: "",
            postImg: ["blogs/03thumb.png", "blogs/03.jpg"]
        }]
    }
}, function (e, t) {
    e.exports = {
        articles: [{
            articleId: "0",
            articleTitle: "Sssttt, hier worden wereldproblemen opgelost...",
            articleThumbText: "24-uur durende internationale Hackathon brengt studenten ...",
            articleContent: "<p><b>24-uur durende internationale Hackathon brengt studenten wereldwijd samen. Vrijdag 17 november om 14u zaten twintig studenten. Bedrijfsmanagement en International Business Management in spanning klaar op campus Kantienberg. De 24-uur durende internationale hackathon 'Global Social Storm' zou zo meteen van start gaan. Samen met meer dan 150 andere studenten uit 14 universiteiten wereldwijd namen zij als enige Vlaamse studenten deel aan deze unieke challenge.</b></p><br> Hun uitdaging? Vind met een internationaal team binnen de 24 uur een duurzame oplossing voor een globaal probleem, zoals gedefinieerd door de Verenigde Naties in de Sustainable Development Goals. Onze studenten kozen voor 'Global warming and resilience'.<br> Via virtuele communicatietools toonden ze aan hoe technologie mensen overal ter wereld samenbrengt en hoe iedereen kan bijdragen aan duurzame oplossingen voor sociale uitdagingen.</p><br> Bart Lievens, docent aan Arteveldehogeschool: 'De winnaars worden pas donderdag bekend gemaakt. Maar onze studenten hebben bewezen dat ze ondernemend zijn, en kunnen doorzetten op moeilijke momenten. Hoewel ze soms opnieuw moesten beginnen, van voorafaan, hebben ze hun doel behaald: ze dienden hun business plan in en maakten een video pitch van drie minuten.'</p><br> Ook studente Lisa Battheu liet zich nadien enthousiast uit over haar ervaring: 'Het was een unieke ervaring om met 150 studenten van over heel de wereld samen te werken aan een globale problematiek. Het waren 24 uitdagende uren, maar het was een 'once in a lifetime experience'!'<br> Arteveldehogeschool zet sterk in op het stimuleren van ondernemerschap bij haar studenten via onder meer Idea Factory en de studentencoöperatieve Artepreneur.</p>",
            articleDate: "20/11/2017",
            articleImage: ["sssttt/thumb.jpg"]
        }, {
            articleId: "1",
            articleTitle: "Aantal student-ondernemers by ArteveldeHogeschool strijgt",
            articleThumbText: "Om onze studenten te stimuleren in hun ondern ...",
            articleContent: "24-uur durende internationale Hackathon brengt studenten wereldwijd samen. Vrijdag 17 november om 14u zaten twintig studenten. Bedrijfsmanagement en International Business Management in spanning klaar op campus Kantienberg. De 24-uur durende internationale hackathon 'Global Social Storm' zou zo meteen van start gaan. Samen met meer dan 150 andere studenten uit 14 universiteiten wereldwijd namen zij als enige Vlaamse studenten deel aan deze unieke challenge.</b><br> Hun uitdaging? Vind met een internationaal team binnen de 24 uur een duurzame oplossing voor een globaal probleem, zoals gedefinieerd door de Verenigde Naties in de Sustainable Development Goals. Onze studenten kozen voor 'Global warming and resilience'.<br> Via virtuele communicatietools toonden ze aan hoe technologie mensen overal ter wereld samenbrengt en hoe iedereen kan bijdragen aan duurzame oplossingen voor sociale uitdagingen.</p><br> Bart Lievens, docent aan Arteveldehogeschool: 'De winnaars worden pas donderdag bekend gemaakt. Maar onze studenten hebben bewezen dat ze ondernemend zijn, en kunnen doorzetten op moeilijke momenten. Hoewel ze soms opnieuw moesten beginnen, van voorafaan, hebben ze hun doel behaald: ze dienden hun business plan in en maakten een video pitch van drie minuten.'</p><br> Ook studente Lisa Battheu liet zich nadien enthousiast uit over haar ervaring: 'Het was een unieke ervaring om met 150 studenten van over heel de wereld samen te werken aan een globale problematiek. Het waren 24 uitdagende uren, maar het was een 'once in a lifetime experience'!'<br> Arteveldehogeschool zet sterk in op het stimuleren van ondernemerschap bij haar studenten via onder meer Idea Factory en de studentencoöperatieve Artepreneur.</p>",
            articleDate: "15/11/2017",
            articleImage: ["student-ondernemers/thumb.jpg"]
        }, {
            articleId: "2",
            articleTitle: 'De prijs voor "wijste" klasgroepfoto gaat naar',
            articleThumbText: "Begin oktober lanceerden we op Facebook een ...",
            articleContent: "24-uur durende internationale Hackathon brengt studenten wereldwijd samen. Vrijdag 17 november om 14u zaten twintig studenten. Bedrijfsmanagement en International Business Management in spanning klaar op campus Kantienberg. De 24-uur durende internationale hackathon 'Global Social Storm' zou zo meteen van start gaan. Samen met meer dan 150 andere studenten uit 14 universiteiten wereldwijd namen zij als enige Vlaamse studenten deel aan deze unieke challenge.</b><br> Hun uitdaging? Vind met een internationaal team binnen de 24 uur een duurzame oplossing voor een globaal probleem, zoals gedefinieerd door de Verenigde Naties in de Sustainable Development Goals. Onze studenten kozen voor 'Global warming and resilience'.<br> Via virtuele communicatietools toonden ze aan hoe technologie mensen overal ter wereld samenbrengt en hoe iedereen kan bijdragen aan duurzame oplossingen voor sociale uitdagingen.</p><br> Bart Lievens, docent aan Arteveldehogeschool: 'De winnaars worden pas donderdag bekend gemaakt. Maar onze studenten hebben bewezen dat ze ondernemend zijn, en kunnen doorzetten op moeilijke momenten. Hoewel ze soms opnieuw moesten beginnen, van voorafaan, hebben ze hun doel behaald: ze dienden hun business plan in en maakten een video pitch van drie minuten.'</p><br> Ook studente Lisa Battheu liet zich nadien enthousiast uit over haar ervaring: 'Het was een unieke ervaring om met 150 studenten van over heel de wereld samen te werken aan een globale problematiek. Het waren 24 uitdagende uren, maar het was een 'once in a lifetime experience'!'<br> Arteveldehogeschool zet sterk in op het stimuleren van ondernemerschap bij haar studenten via onder meer Idea Factory en de studentencoöperatieve Artepreneur.</p>",
            articleDate: "14/11/2017",
            articleImage: ["klasgroepfoto/thumb.jpg"]
        }, {
            articleId: "3",
            articleTitle: "Week van de Ondernemer: (oud-)studenten in de kijker",
            articleThumbText: "Het is Week van de Ondernemer! Arteveldehog ...",
            articleContent: "24-uur durende internationale Hackathon brengt studenten wereldwijd samen. Vrijdag 17 november om 14u zaten twintig studenten. Bedrijfsmanagement en International Business Management in spanning klaar op campus Kantienberg. De 24-uur durende internationale hackathon 'Global Social Storm' zou zo meteen van start gaan. Samen met meer dan 150 andere studenten uit 14 universiteiten wereldwijd namen zij als enige Vlaamse studenten deel aan deze unieke challenge.</b><br> Hun uitdaging? Vind met een internationaal team binnen de 24 uur een duurzame oplossing voor een globaal probleem, zoals gedefinieerd door de Verenigde Naties in de Sustainable Development Goals. Onze studenten kozen voor 'Global warming and resilience'.<br> Via virtuele communicatietools toonden ze aan hoe technologie mensen overal ter wereld samenbrengt en hoe iedereen kan bijdragen aan duurzame oplossingen voor sociale uitdagingen.</p><br> Bart Lievens, docent aan Arteveldehogeschool: 'De winnaars worden pas donderdag bekend gemaakt. Maar onze studenten hebben bewezen dat ze ondernemend zijn, en kunnen doorzetten op moeilijke momenten. Hoewel ze soms opnieuw moesten beginnen, van voorafaan, hebben ze hun doel behaald: ze dienden hun business plan in en maakten een video pitch van drie minuten.'</p><br> Ook studente Lisa Battheu liet zich nadien enthousiast uit over haar ervaring: 'Het was een unieke ervaring om met 150 studenten van over heel de wereld samen te werken aan een globale problematiek. Het waren 24 uitdagende uren, maar het was een 'once in a lifetime experience'!'<br> Arteveldehogeschool zet sterk in op het stimuleren van ondernemerschap bij haar studenten via onder meer Idea Factory en de studentencoöperatieve Artepreneur.</p>",
            articleDate: "13/11/2017",
            articleImage: ["week-ondernemer/thumb.jpg"]
        }]
    }
}, function (e, t, n) {
    ! function (t, n) {
        e.exports = n()
    }(0, function () {
        return function (e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
        }([function (e, t) {
            "use strict";

            function n() {
                return !("undefined" == typeof window || !window.history || !window.history.pushState)
            }

            function r(e, t, r) {
                this.root = null, this._routes = [], this._useHash = t, this._hash = void 0 === r ? "#" : r, this._paused = !1, this._destroyed = !1, this._lastRouteResolved = null, this._notFoundHandler = null, this._defaultHandler = null, this._usePushState = !t && n(), this._onLocationChange = this._onLocationChange.bind(this), this._genericHooks = null, this._historyAPIUpdateMethod = "pushState", e ? this.root = t ? e.replace(/\/$/, "/" + this._hash) : e.replace(/\/$/, "") : t && (this.root = this._cLoc().split(this._hash)[0].replace(/\/$/, "/" + this._hash)), this._listen(), this.updatePageLinks()
            }

            function o(e) {
                return e instanceof RegExp ? e : e.replace(/\/+$/, "").replace(/^\/+/, "^/")
            }

            function i(e) {
                var t, n = [];
                return t = e instanceof RegExp ? e : new RegExp(e.replace(r.PARAMETER_REGEXP, function (e, t, o) {
                    return n.push(o), r.REPLACE_VARIABLE_REGEXP
                }).replace(r.WILDCARD_REGEXP, r.REPLACE_WILDCARD) + r.FOLLOWED_BY_SLASH_REGEXP, r.MATCH_REGEXP_FLAGS), {
                        regexp: t,
                        paramNames: n
                    }
            }

            function a(e) {
                return e.replace(/\/$/, "").split("/").length
            }

            function s(e, t) {
                return a(t) - a(e)
            }

            function l(e) {
                return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map(function (t) {
                    var n = i(o(t.route)),
                        r = n.regexp,
                        a = n.paramNames,
                        s = e.replace(/^\/+/, "/").match(r),
                        l = function (e, t) {
                            return 0 === t.length ? null : e ? e.slice(1, e.length).reduce(function (e, n, r) {
                                return null === e && (e = {}), e[t[r]] = decodeURIComponent(n), e
                            }, null) : null
                        }(s, a);
                    return !!s && {
                        match: s,
                        route: t,
                        params: l
                    }
                }).filter(function (e) {
                    return e
                })
            }

            function u(e, t) {
                return l(e, t)[0] || !1
            }

            function c(e, t) {
                var n = t.map(function (t) {
                    return "" === t.route || "*" === t.route ? e : e.split(new RegExp(t.route + "($|/)"))[0]
                }),
                    r = o(e);
                return n.length > 1 ? n.reduce(function (e, t) {
                    return e.length > t.length && (e = t), e
                }, n[0]) : 1 === n.length ? n[0] : r
            }

            function d(e, t, r) {
                var o, i = e,
                    a = function (e) {
                        return e.split(/\?(.*)?$/)[0]
                    };
                return void 0 === r && (r = "#"), n() && !t ? i = a(e).split(r)[0] : (o = e.split(r), i = a(o.length > 1 ? o[1] : o[0])), i
            }

            function p(e, t, n) {
                return t && "object" === (void 0 === t ? "undefined" : f(t)) ? void (t.before ? t.before(function () {
                    (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (e(), t.after && t.after(n))
                }, n) : t.after && (e(), t.after && t.after(n))) : void e()
            }

            function h(e, t, r) {
                if (n() && !t) return !1;
                if (!e.match(r)) return !1;
                var o = e.split(r);
                return o.length < 2 || "" === o[1]
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            r.prototype = {
                helpers: {
                    match: u,
                    root: c,
                    clean: o,
                    getOnlyURL: d
                },
                navigate: function (e, t) {
                    var n;
                    return e = e || "", this._usePushState ? (n = (t ? "" : this._getRoot() + "/") + e.replace(/^\/+/, "/"), n = n.replace(/([^:])(\/{2,})/g, "$1/"), history[this._historyAPIUpdateMethod]({}, "", n), this.resolve()) : "undefined" != typeof window && (e = e.replace(new RegExp("^" + this._hash), ""), window.location.href = window.location.href.replace(/#$/, "").replace(new RegExp(this._hash + ".*$"), "") + this._hash + e), this
                },
                on: function () {
                    for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    if ("function" == typeof n[0]) this._defaultHandler = {
                        handler: n[0],
                        hooks: n[1]
                    };
                    else if (n.length >= 2)
                        if ("/" === n[0]) {
                            var o = n[1];
                            "object" === f(n[1]) && (o = n[1].uses), this._defaultHandler = {
                                handler: o,
                                hooks: n[2]
                            }
                        } else this._add(n[0], n[1], n[2]);
                    else if ("object" === f(n[0])) {
                        Object.keys(n[0]).sort(s).forEach(function (t) {
                            e.on(t, n[0][t])
                        })
                    }
                    return this
                },
                off: function (e) {
                    return null !== this._defaultHandler && e === this._defaultHandler.handler ? this._defaultHandler = null : null !== this._notFoundHandler && e === this._notFoundHandler.handler && (this._notFoundHandler = null), this._routes = this._routes.reduce(function (t, n) {
                        return n.handler !== e && t.push(n), t
                    }, []), this
                },
                notFound: function (e, t) {
                    return this._notFoundHandler = {
                        handler: e,
                        hooks: t
                    }, this
                },
                resolve: function (e) {
                    var t, n, r = this,
                        o = (e || this._cLoc()).replace(this._getRoot(), "");
                    this._useHash && (o = o.replace(new RegExp("^/" + this._hash), "/"));
                    var i = function (e) {
                        return e.split(/\?(.*)?$/).slice(1).join("")
                    }(e || this._cLoc()),
                        a = d(o, this._useHash, this._hash);
                    return !this._paused && (this._lastRouteResolved && a === this._lastRouteResolved.url && i === this._lastRouteResolved.query ? (this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.already && this._lastRouteResolved.hooks.already(this._lastRouteResolved.params), !1) : (n = u(a, this._routes)) ? (this._callLeave(), this._lastRouteResolved = {
                        url: a,
                        query: i,
                        hooks: n.route.hooks,
                        params: n.params,
                        name: n.route.name
                    }, t = n.route.handler, p(function () {
                        p(function () {
                            n.route.route instanceof RegExp ? t.apply(void 0, function (e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                    return n
                                }
                                return Array.from(e)
                            }(n.match.slice(1, n.match.length))) : t(n.params, i)
                        }, n.route.hooks, n.params, r._genericHooks)
                    }, this._genericHooks, n.params), n) : this._defaultHandler && ("" === a || "/" === a || a === this._hash || h(a, this._useHash, this._hash)) ? (p(function () {
                        p(function () {
                            r._callLeave(), r._lastRouteResolved = {
                                url: a,
                                query: i,
                                hooks: r._defaultHandler.hooks
                            }, r._defaultHandler.handler(i)
                        }, r._defaultHandler.hooks)
                    }, this._genericHooks), !0) : (this._notFoundHandler && p(function () {
                        p(function () {
                            r._callLeave(), r._lastRouteResolved = {
                                url: a,
                                query: i,
                                hooks: r._notFoundHandler.hooks
                            }, r._notFoundHandler.handler(i)
                        }, r._notFoundHandler.hooks)
                    }, this._genericHooks), !1))
                },
                destroy: function () {
                    this._routes = [], this._destroyed = !0, clearTimeout(this._listeningInterval), "undefined" != typeof window && (window.removeEventListener("popstate", this._onLocationChange), window.removeEventListener("hashchange", this._onLocationChange))
                },
                updatePageLinks: function () {
                    var e = this;
                    "undefined" != typeof document && this._findLinks().forEach(function (t) {
                        t.hasListenerAttached || (t.addEventListener("click", function (n) {
                            var r = e.getLinkPath(t);
                            e._destroyed || (n.preventDefault(), e.navigate(r.replace(/\/+$/, "").replace(/^\/+/, "/")))
                        }), t.hasListenerAttached = !0)
                    })
                },
                generate: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this._routes.reduce(function (n, r) {
                            var o;
                            if (r.name === e) {
                                n = r.route;
                                for (o in t) n = n.toString().replace(":" + o, t[o])
                            }
                            return n
                        }, "");
                    return this._useHash ? this._hash + n : n
                },
                link: function (e) {
                    return this._getRoot() + e
                },
                pause: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this._paused = e, this._historyAPIUpdateMethod = e ? "replaceState" : "pushState"
                },
                resume: function () {
                    this.pause(!1)
                },
                historyAPIUpdateMethod: function (e) {
                    return void 0 === e ? this._historyAPIUpdateMethod : (this._historyAPIUpdateMethod = e, e)
                },
                disableIfAPINotAvailable: function () {
                    n() || this.destroy()
                },
                lastRouteResolved: function () {
                    return this._lastRouteResolved
                },
                getLinkPath: function (e) {
                    return e.getAttribute("href")
                },
                hooks: function (e) {
                    this._genericHooks = e
                },
                _add: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return "string" == typeof e && (e = encodeURI(e)), "object" === (void 0 === t ? "undefined" : f(t)) ? this._routes.push({
                        route: e,
                        handler: t.uses,
                        name: t.as,
                        hooks: n || t.hooks
                    }) : this._routes.push({
                        route: e,
                        handler: t,
                        hooks: n
                    }), this._add
                },
                _getRoot: function () {
                    return null !== this.root ? this.root : (this.root = c(this._cLoc().split("?")[0], this._routes), this.root)
                },
                _listen: function () {
                    var e = this;
                    if (this._usePushState) window.addEventListener("popstate", this._onLocationChange);
                    else if (!("undefined" != typeof window && "onhashchange" in window)) {
                        var t = this._cLoc(),
                            n = void 0,
                            r = void 0;
                        (r = function () {
                            n = e._cLoc(), t !== n && (t = n, e.resolve()), e._listeningInterval = setTimeout(r, 200)
                        })()
                    } else window.addEventListener("hashchange", this._onLocationChange)
                },
                _cLoc: function () {
                    return "undefined" != typeof window ? void 0 !== window.__NAVIGO_WINDOW_LOCATION_MOCK__ ? window.__NAVIGO_WINDOW_LOCATION_MOCK__ : o(window.location.href) : ""
                },
                _findLinks: function () {
                    return [].slice.call(document.querySelectorAll("[data-navigo]"))
                },
                _onLocationChange: function () {
                    this.resolve()
                },
                _callLeave: function () {
                    this._lastRouteResolved && this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.leave && this._lastRouteResolved.hooks.leave()
                }
            }, r.PARAMETER_REGEXP = /([:*])(\w+)/g, r.WILDCARD_REGEXP = /\*/g, r.REPLACE_VARIABLE_REGEXP = "([^/]+)", r.REPLACE_WILDCARD = "(?:.*)", r.FOLLOWED_BY_SLASH_REGEXP = "(?:/$|$)", r.MATCH_REGEXP_FLAGS = "", t.default = r, e.exports = t.default
        }])
    })
}]);