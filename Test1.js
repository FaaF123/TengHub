var Rt = Object.defineProperty;
var yn = (m, e, n) => e in m ? Rt(m, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : m[e] = n;
var we = (m, e) => {
    for (var n in e) Rt(m, n, {
        get: e[n],
        enumerable: !0
    })
};
var l = (m, e, n) => (yn(m, typeof e != "symbol" ? e + "" : e, n), n);
import {
    Direction as C
} from "@minecraft/server";
import "@minecraft/server";
import {
    system as Th
} from "@minecraft/server";
import {
    BlockPermutation as Ah,
    world as Rh
} from "@minecraft/server";
import {
    world as Mh
} from "@minecraft/server";
import {
    Player as Oh
} from "@minecraft/server";
import {
    system as it
} from "@minecraft/server";
import {
    EntityEquippableComponent as Gh,
    EquipmentSlot as Nh,
    ItemDurabilityComponent as Uh
} from "@minecraft/server";
import {
    system as zt
} from "@minecraft/server";
import {
    MinecraftDimensionTypes as qh,
    world as Hh
} from "@minecraft/server";
import {
    Player as vn,
    system as Mt,
    world as Ne
} from "@minecraft/server";
import {
    InputPermissionCategory as Lt
} from "@minecraft/server";
import {
    system as Sn
} from "@minecraft/server";
import {
    Direction as g
} from "@minecraft/server";
var _, f = (_ = class {
        constructor(e, n) {
            l(this, "r");
            l(this, "g");
            l(this, "b");
            this.code = e, this.color = n, n && (this.r = n >> 16 & 255, this.g = n >> 8 & 255, this.b = n & 255)
        }
        toString() {
            return _.PREFIX + this.code
        }
        toRGB() {
            return this.color
        }
        toHex() {
            return this.color?.toString(16)
        }
        getRed() {
            return this.r
        }
        getGreen() {
            return this.g
        }
        getBlue() {
            return this.b
        }
        getCode() {
            return this.code
        }
        static stripColor(e) {
            return e.replace(/§[0-9a-u]/g, "")
        }
        static findClosestColor(e, n, a) {
            let i = Number.MAX_VALUE,
                r = _.WHITE;
            for (let o of _.ALL_COLORS)
                if (o.r && o.g && o.b) {
                    let s = Math.sqrt(Math.pow(o.r - e, 2) + Math.pow(o.g - n, 2) + Math.pow(o.b - a, 2));
                    s < i && (i = s, r = o)
                } return r
        }
    }, l(_, "BLACK", new _("0", 0)), l(_, "DARK_BLUE", new _("1", 170)), l(_, "DARK_GREEN", new _("2", 43520)), l(_, "DARK_AQUA", new _("3", 43690)), l(_, "DARK_RED", new _("4", 11141120)), l(_, "DARK_PURPLE", new _("5", 11141290)), l(_, "GOLD", new _("6", 16755200)), l(_, "GRAY", new _("7", 11184810)), l(_, "DARK_GRAY", new _("8", 5592405)), l(_, "BLUE", new _("9", 5592575)), l(_, "GREEN", new _("a", 5635925)), l(_, "AQUA", new _("b", 5636095)), l(_, "RED", new _("c", 16733525)), l(_, "LIGHT_PURPLE", new _("d", 16733695)), l(_, "YELLOW", new _("e", 16777045)), l(_, "WHITE", new _("f", 16777215)), l(_, "MINECOIN_GOLD", new _("g", 14603781)), l(_, "MATERIAL_QUARTZ", new _("h", 14931153)), l(_, "MATERIAL_IRON", new _("i", 13552330)), l(_, "MATERIAL_NETHERITE", new _("j", 4471355)), l(_, "MATERIAL_REDSTONE", new _("m", 9901575)), l(_, "MATERIAL_COPPER", new _("n", 11823181)), l(_, "MATERIAL_GOLD", new _("p", 14594349)), l(_, "MATERIAL_EMERALD", new _("q", 1155126)), l(_, "MATERIAL_DIAMOND", new _("s", 2931368)), l(_, "MATERIAL_LAPIS", new _("t", 2181499)), l(_, "MATERIAL_AMETHYST", new _("u", 10116294)), l(_, "OBFUSCATED", new _("k")), l(_, "BOLD", new _("l")), l(_, "ITALIC", new _("o")), l(_, "RESET", new _("r")), l(_, "VALUES", [_.BLACK, _.DARK_BLUE, _.DARK_GREEN, _.DARK_AQUA, _.DARK_RED, _.DARK_PURPLE, _.GOLD, _.GRAY, _.DARK_GRAY, _.BLUE, _.GREEN, _.AQUA, _.RED, _.LIGHT_PURPLE, _.YELLOW, _.WHITE, _.MINECOIN_GOLD, _.MATERIAL_QUARTZ, _.MATERIAL_IRON, _.MATERIAL_NETHERITE, _.MATERIAL_REDSTONE, _.MATERIAL_COPPER, _.MATERIAL_GOLD, _.MATERIAL_EMERALD, _.MATERIAL_DIAMOND, _.MATERIAL_LAPIS, _.MATERIAL_AMETHYST, _.OBFUSCATED, _.BOLD, _.ITALIC, _.RESET]), l(_, "ALL_COLORS", [_.BLACK, _.DARK_BLUE, _.DARK_GREEN, _.DARK_AQUA, _.DARK_RED, _.DARK_PURPLE, _.GOLD, _.GRAY, _.DARK_GRAY, _.BLUE, _.GREEN, _.AQUA, _.RED, _.LIGHT_PURPLE, _.YELLOW, _.WHITE, _.MINECOIN_GOLD, _.MATERIAL_QUARTZ, _.MATERIAL_IRON, _.MATERIAL_NETHERITE, _.MATERIAL_REDSTONE, _.MATERIAL_COPPER, _.MATERIAL_GOLD, _.MATERIAL_EMERALD, _.MATERIAL_DIAMOND, _.MATERIAL_LAPIS, _.MATERIAL_AMETHYST]), l(_, "PREFIX", "\xA7"), _),
    ue, kn = (ue = class {
        constructor() {
            l(this, "OpenObject", "{");
            l(this, "CloseObject", "}");
            l(this, "OpenArray", "[");
            l(this, "CloseArray", "]");
            l(this, "Comma", ",");
            l(this, "KeyValueSeparator", ":");
            l(this, "StringDelimiter", '"');
            l(this, "KeyDelimiter", "");
            l(this, "Indent", "  ");
            l(this, "NewLine", `
`);
            l(this, "Space", " ");
            l(this, "InlineThreshold", 60);
            l(this, "MaxDepth", 1);
            l(this, "IncludeClassNames", !0);
            l(this, "FunctionValue", "\u0192");
            l(this, "NullValue", "null");
            l(this, "UndefinedValue", "undefined");
            l(this, "TrueValue", "true");
            l(this, "FalseValue", "false");
            l(this, "CycleValue", "[...cycle...]");
            l(this, "TruncatedObjectValue", "{...}");
            l(this, "OpenCloseObjectColor", f.YELLOW);
            l(this, "OpenCloseArrayColor", f.AQUA);
            l(this, "NumberColor", f.DARK_AQUA);
            l(this, "StringColor", f.DARK_GREEN);
            l(this, "BooleanColor", f.GOLD);
            l(this, "NullColor", f.GOLD);
            l(this, "KeyColor", f.GRAY);
            l(this, "EscapeColor", f.GOLD);
            l(this, "FunctionColor", f.GRAY);
            l(this, "ClassColor", f.GRAY);
            l(this, "ClassStyle", f.BOLD);
            l(this, "CycleColor", f.DARK_RED)
        }
        stringify(e) {
            return this.stringifyValue(e)
        }
        stringifyString(e) {
            return this.StringColor + this.StringDelimiter + this.escapeString(e) + this.StringDelimiter + f.RESET
        }
        stringifyNumber(e) {
            return this.NumberColor + e.toString() + f.RESET
        }
        stringifyBoolean(e) {
            return this.BooleanColor + (e ? this.TrueValue : this.FalseValue) + f.RESET
        }
        stringifyFunction(e) {
            return this.FunctionColor + this.FunctionValue + f.RESET
        }
        stringifyNull() {
            return this.NullColor + this.NullValue + f.RESET
        }
        stringifyUndefined() {
            return this.NullColor + this.UndefinedValue + f.RESET
        }
        stringifyCycle() {
            return this.CycleColor + this.CycleValue + f.RESET
        }
        stringifyArray(e, n = 0) {
            let a = this.Indent.repeat(n);
            if (e.length === 0) return this.OpenCloseArrayColor + this.OpenArray + this.CloseArray + f.RESET;
            let i = this.OpenCloseArrayColor + this.OpenArray + f.RESET + this.NewLine,
                r = this.OpenCloseArrayColor + this.OpenArray + f.RESET;
            return e.forEach((o, s) => {
                i += a + this.Indent + this.stringifyValue(o, n + 1), i += s < e.length - 1 ? this.Comma + this.NewLine : this.NewLine, r += this.stringifyValue(o, n + 1), r += s < e.length - 1 ? this.Comma + this.Space : ""
            }), i += a + this.OpenCloseArrayColor + this.CloseArray + f.RESET, r += this.OpenCloseArrayColor + this.CloseArray + f.RESET, r.length < this.InlineThreshold ? r : i
        }
        stringifyTruncatedObject(e, n, a = 0) {
            return (this.IncludeClassNames ? this.ClassColor + "" + this.ClassStyle + n + f.RESET + this.Space : "") + this.TruncatedObjectValue
        }
        stringifyObject(e, n, a, i = 0) {
            let r = this.Indent.repeat(i),
                o = this.IncludeClassNames && n !== "Object" ? this.ClassColor + "" + this.ClassStyle + n + f.RESET + this.Space : "";
            if (a.length === 0) return o + this.OpenCloseObjectColor + this.OpenObject + this.CloseObject + f.RESET;
            let s = o + this.OpenCloseObjectColor + this.OpenObject + f.RESET + this.NewLine,
                c = o + this.OpenCloseObjectColor + this.OpenObject + f.RESET;
            return a.forEach(([d, p], y) => {
                let S = this.stringifyValue(p, i + 1);
                s += r + this.Indent + this.KeyColor + this.KeyDelimiter + d + this.KeyDelimiter + f.RESET + this.KeyValueSeparator + this.Space + S, s += y < a.length - 1 ? this.Comma + this.NewLine : this.NewLine, c += this.KeyColor + d + f.RESET + this.KeyValueSeparator + this.Space + S, c += y < a.length - 1 ? this.Comma + this.Space : ""
            }), s += r + this.OpenCloseObjectColor + this.CloseObject + f.RESET, c += this.OpenCloseObjectColor + this.CloseObject + f.RESET, c.length < this.InlineThreshold ? c : s
        }
        shouldTruncateObject(e, n, a = 0) {
            return !(n === "Object" || a <= this.MaxDepth || this.MaxDepth <= 0)
        }
        stringifyValue(e, n = 0) {
            if (e === null) return this.stringifyNull();
            if (e === void 0) return this.stringifyUndefined();
            if (typeof e == "number") return this.stringifyNumber(e);
            if (typeof e == "string") return this.stringifyString(e);
            if (typeof e == "boolean") return this.stringifyBoolean(e);
            if (typeof e == "function") return this.stringifyFunction(e);
            if (this.isCycle(e)) return this.stringifyCycle();
            if (this.markCycle(e), Array.isArray(e)) {
                let a = this.stringifyArray(e, n ? n + 1 : 0);
                return this.clearCycle(e), a
            }
            if (typeof e == "object") {
                let a = e.constructor.name;
                if (this.shouldTruncateObject(e, a, n)) {
                    let i = this.stringifyTruncatedObject(e, a, n);
                    return this.clearCycle(e), i
                } else {
                    let i = new Set,
                        r = Object.getPrototypeOf(e),
                        o = Object.keys(r);
                    for (; o.length > 0;) o.forEach(p => i.add(p)), r = Object.getPrototypeOf(r), o = Object.keys(r);
                    Object.keys(e).forEach(p => i.add(p)), i.delete("__cycleDetection__");
                    let c = [...i].sort().map(p => {
                            try {
                                return [p, e[p] ?? void 0]
                            } catch {
                                return [p, void 0]
                            }
                        }).filter(([, p]) => typeof p != "function" && p !== void 0),
                        d = this.stringifyObject(e, a, c, n);
                    return this.clearCycle(e), d
                }
            }
            return this.clearCycle(e), f.RESET + e.toString()
        }
        escapeString(e) {
            return e.replace(/\\/g, this.EscapeColor + "\\\\" + this.StringColor).replace(/"/g, this.EscapeColor + '\\"' + this.StringColor).replace(/\n/g, this.EscapeColor + "\\n" + this.StringColor).replace(/\r/g, this.EscapeColor + "\\r" + this.StringColor).replace(/\t/g, this.EscapeColor + "\\t" + this.StringColor)
        }
        markCycle(e) {
            e.__cycleDetection__ = !0
        }
        isCycle(e) {
            return !!e.__cycleDetection__
        }
        clearCycle(e) {
            delete e.__cycleDetection__
        }
    }, l(ue, "DEFAULT", new ue), ue),
    I, ie = (I = class {
        constructor(e, n, a = f.RESET) {
            this.level = e, this.name = n, this.color = a
        }
        toString() {
            return this.color + this.name.toUpperCase() + f.RESET
        }
        static parse(e) {
            e = e.toLowerCase();
            for (let a of I.values)
                if (a.name === e) return a;
            let n = parseInt(e);
            if (!isNaN(n)) {
                for (let a of I.values)
                    if (a.level === n) return a
            }
        }
    }, l(I, "All", new I(-2, "all")), l(I, "Trace", new I(-2, "trace", f.DARK_AQUA)), l(I, "Debug", new I(-1, "debug", f.AQUA)), l(I, "Info", new I(0, "info", f.GREEN)), l(I, "Warn", new I(1, "warn", f.GOLD)), l(I, "Error", new I(2, "error", f.RED)), l(I, "Fatal", new I(3, "fatal", f.DARK_RED)), l(I, "Off", new I(100, "off")), l(I, "values", [I.All, I.Trace, I.Debug, I.Info, I.Warn, I.Error, I.Fatal, I.Off]), I);
var re = {
        level: ie.Info,
        filter: ["*"],
        outputTags: !1,
        formatFunction: (m, e, n, a = void 0) => {
            let i = a !== void 0 ? `\xA77${a.map(r=>`[${r}]`).join("")}\xA7r` : "";
            return `[${m}][${f.MATERIAL_EMERALD}${e.name}${f.RESET}]${i} ${n}`
        },
        messagesJoinFunction: m => m.join(" "),
        jsonFormatter: kn.DEFAULT,
        outputConfig: {
            [ie.Trace.level]: [0, 1],
            [ie.Debug.level]: [0, 1],
            [ie.Info.level]: [0, 1],
            [ie.Warn.level]: [0, 1, 2],
            [ie.Error.level]: [0, 1, 3],
            [ie.Fatal.level]: [0, 1, 3]
        }
    },
    pe, L = (pe = class {
        constructor(e, n = []) {
            this.name = e, this.tags = n
        }
        static init() {}
        static setLevel(e) {
            re.level = e
        }
        static setFilter(e) {
            re.filter = e
        }
        static setFormatFunction(e) {
            re.formatFunction = e
        }
        static setMessagesJoinFunction(e) {
            re.messagesJoinFunction = e
        }
        static setTagsOutputVisibility(e) {
            re.outputTags = e
        }
        static setJsonFormatter(e) {
            re.jsonFormatter = e
        }
        static getOutputConfig() {
            return re.outputConfig
        }
        static getLogger(e, ...n) {
            return new pe(e, n)
        }
        log(e, ...n) {}
        logRaw(e, ...n) {}
        trace(...e) {}
        debug(...e) {}
        info(...e) {}
        warn(...e) {}
        error(...e) {}
        fatal(...e) {}
    }, l(pe, "initialized", !1), pe),
    u, D = (u = class {
        constructor(e, n, a) {
            l(this, "x");
            l(this, "y");
            l(this, "z");
            if (e === C.Down) this.x = 0, this.y = -1, this.z = 0;
            else if (e === C.Up) this.x = 0, this.y = 1, this.z = 0;
            else if (e === C.North) this.x = 0, this.y = 0, this.z = -1;
            else if (e === C.South) this.x = 0, this.y = 0, this.z = 1;
            else if (e === C.East) this.x = 1, this.y = 0, this.z = 0;
            else if (e === C.West) this.x = -1, this.y = 0, this.z = 0;
            else if (typeof e == "number") this.x = e, this.y = n, this.z = a;
            else if (Array.isArray(e)) this.x = e[0], this.y = e[1], this.z = e[2];
            else if (e instanceof u) this.x = e.x, this.y = e.y, this.z = e.z;
            else {
                if (!e || !e.x && e.x !== 0 || !e.y && e.y !== 0 || !e.z && e.z !== 0) throw u.log.error(new Error("Invalid vector"), e), new Error("Invalid vector");
                this.x = e.x, this.y = e.y, this.z = e.z
            }
        }
        static from(e, n, a) {
            if (e instanceof u) return e;
            if (typeof e == "number" && n !== void 0 && a !== void 0) return new u(e, n, a);
            if (Array.isArray(e)) return new u(e);
            if (e === C.Down) return u.Down;
            if (e === C.Up) return u.Up;
            if (e === C.North) return u.North;
            if (e === C.South) return u.South;
            if (e === C.East) return u.East;
            if (e === C.West) return u.West;
            if (!e || !e.x && e.x !== 0 || !e.y && e.y !== 0 || !e.z && e.z !== 0) throw u.log.error(new Error("Invalid arguments"), e, n, a), new Error("Invalid arguments");
            return new u(e.x, e.y, e.z)
        }
        static _from(e, n, a) {
            if (e instanceof u) return e;
            if (typeof e == "number" && n !== void 0 && a !== void 0) return new u(e, n, a);
            if (Array.isArray(e)) return new u(e);
            if (e === C.Down) return u.Down;
            if (e === C.Up) return u.Up;
            if (e === C.North) return u.North;
            if (e === C.South) return u.South;
            if (e === C.East) return u.East;
            if (e === C.West) return u.West;
            if (!e || !e.x && e.x !== 0 || !e.y && e.y !== 0 || !e.z && e.z !== 0) throw u.log.error(new Error("Invalid arguments"), e, n, a), new Error("Invalid arguments");
            return new u(e.x, e.y, e.z)
        }
        copy() {
            return new u(this.x, this.y, this.z)
        }
        static fromYawPitch(e, n) {
            let a;
            typeof e == "number" ? (a = e, n = n) : (a = e.y, n = e.x);
            let i = a * (Math.PI / 180),
                r = n * (Math.PI / 180),
                o = Math.cos(r) * Math.sin(i),
                s = Math.sin(r),
                c = Math.cos(r) * Math.cos(i);
            return new u(o, s, c)
        }
        toYawPitch() {
            if (this.isZero()) throw u.log.error(new Error("Cannot convert zero-length vector to direction")), new Error("Cannot convert zero-length vector to direction");
            let e = this.normalize(),
                n = Math.atan2(e.x, e.z) * (180 / Math.PI);
            return {
                x: Math.asin(e.y) * (180 / Math.PI),
                y: n
            }
        }
        add(e, n, a) {
            let i = u._from(e, n, a);
            return u.from(i.x + this.x, i.y + this.y, i.z + this.z)
        }
        subtract(e, n, a) {
            let i = u._from(e, n, a);
            return u.from(this.x - i.x, this.y - i.y, this.z - i.z)
        }
        multiply(e, n, a) {
            if (typeof e == "number" && n === void 0 && a === void 0) return u.from(this.x * e, this.y * e, this.z * e);
            let i = u._from(e, n, a);
            return u.from(i.x * this.x, i.y * this.y, i.z * this.z)
        }
        scale(e) {
            return u.from(this.x * e, this.y * e, this.z * e)
        }
        divide(e, n, a) {
            if (typeof e == "number" && n === void 0 && a === void 0) {
                if (e === 0) throw new Error("Cannot divide by zero");
                return u.from(this.x / e, this.y / e, this.z / e)
            }
            let i = u._from(e, n, a);
            if (i.x === 0 || i.y === 0 || i.z === 0) throw new Error("Cannot divide by zero");
            return u.from(this.x / i.x, this.y / i.y, this.z / i.z)
        }
        normalize() {
            if (this.isZero()) throw u.log.error(new Error("Cannot normalize zero-length vector")), new Error("Cannot normalize zero-length vector");
            let e = this.length();
            return u.from(this.x / e, this.y / e, this.z / e)
        }
        length() {
            return Math.sqrt(this.lengthSquared())
        }
        lengthSquared() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }
        cross(e, n, a) {
            let i = u._from(e, n, a);
            return u.from(this.y * i.z - this.z * i.y, this.z * i.x - this.x * i.z, this.x * i.y - this.y * i.x)
        }
        distance(e, n, a) {
            let i = u._from(e, n, a);
            return Math.sqrt(this.distanceSquared(i))
        }
        distanceSquared(e, n, a) {
            let i = u._from(e, n, a);
            return this.subtract(i).lengthSquared()
        }
        lerp(e, n) {
            return !e || !n ? u.from(this) : n === 1 ? u.from(e) : n === 0 ? u.from(this) : u.from(this.x + (e.x - this.x) * n, this.y + (e.y - this.y) * n, this.z + (e.z - this.z) * n)
        }
        slerp(e, n) {
            if (!e || !n) return u.from(this);
            if (n === 1) return u.from(e);
            if (n === 0) return u.from(this);
            let a = this.dot(e),
                i = Math.acos(a) * n,
                r = u.from(e).subtract(this.multiply(a)).normalize();
            return this.multiply(Math.cos(i)).add(r.multiply(Math.sin(i)))
        }
        dot(e, n, a) {
            let i = u._from(e, n, a);
            return this.x * i.x + this.y * i.y + this.z * i.z
        }
        angleBetween(e, n, a) {
            let i = u._from(e, n, a),
                r = this.dot(i),
                o = this.length() * i.length();
            return o === 0 ? 0 : Math.acos(r / o)
        }
        projectOnto(e, n, a) {
            let i = u._from(e, n, a);
            if (i.isZero()) return u.Zero;
            let r = this.dot(i) / i.dot(i);
            return u.from(i.x * r, i.y * r, i.z * r)
        }
        reflect(e, n, a) {
            let i = u._from(e, n, a),
                r = this.projectOnto(i);
            return this.subtract(r.multiply(2))
        }
        rotate(e, n) {
            let a = n * Math.PI / 180 / 2,
                i = Math.cos(a),
                r = e.x * Math.sin(a),
                o = e.y * Math.sin(a),
                s = e.z * Math.sin(a),
                c = this,
                d = i * i * c.x + 2 * o * i * c.z - 2 * s * i * c.y + r * r * c.x + 2 * o * r * c.y + 2 * s * r * c.z - s * s * c.x - o * o * c.x,
                p = 2 * r * o * c.x + o * o * c.y + 2 * s * o * c.z + 2 * i * s * c.x - s * s * c.y + i * i * c.y - 2 * r * i * c.z - r * r * c.y,
                y = 2 * r * s * c.x + 2 * o * s * c.y + s * s * c.z - 2 * i * o * c.x - o * o * c.z + 2 * i * r * c.y - r * r * c.z + i * i * c.z;
            return new u(d, p, y)
        }
        update(e, n, a) {
            return e || (e = i => i), n || (n = i => i), a || (a = i => i), new u(e(this.x), n(this.y), a(this.z))
        }
        setX(e) {
            return typeof e == "number" ? new u(e, this.y, this.z) : new u(e(this.x), this.y, this.z)
        }
        setY(e) {
            return typeof e == "number" ? new u(this.x, e, this.z) : new u(this.x, e(this.y), this.z)
        }
        setZ(e) {
            return typeof e == "number" ? new u(this.x, this.y, e) : new u(this.x, this.y, e(this.z))
        }
        distanceToLineSegment(e, n) {
            let a = u.from(n).subtract(e);
            if (a.lengthSquared() === 0) return this.subtract(e).length();
            let i = Math.max(0, Math.min(1, this.subtract(e).dot(a) / a.dot(a))),
                r = u.from(e).add(a.multiply(i));
            return this.subtract(r).length()
        }
        floor() {
            return this.update(Math.floor, Math.floor, Math.floor)
        }
        floorX() {
            return this.setX(Math.floor)
        }
        floorY() {
            return this.setY(Math.floor)
        }
        floorZ() {
            return this.setZ(Math.floor)
        }
        ceil() {
            return new u(Math.ceil(this.x), Math.ceil(this.y), Math.ceil(this.z))
        }
        ceilX() {
            return this.setX(Math.ceil)
        }
        ceilY() {
            return this.setY(Math.ceil)
        }
        ceilZ() {
            return this.setZ(Math.ceil)
        }
        round() {
            return this.update(Math.round, Math.round, Math.round)
        }
        roundX() {
            return this.setX(Math.round)
        }
        roundY() {
            return this.setY(Math.round)
        }
        roundZ() {
            return this.setZ(Math.round)
        }
        up() {
            return this.add(u.Up)
        }
        down() {
            return this.add(u.Down)
        }
        north() {
            return this.add(u.North)
        }
        south() {
            return this.add(u.South)
        }
        east() {
            return this.add(u.East)
        }
        west() {
            return this.add(u.West)
        }
        isZero() {
            return this.x === 0 && this.y === 0 && this.z === 0
        }
        toArray() {
            return [this.x, this.y, this.z]
        }
        toDirection() {
            if (this.isZero()) throw u.log.error(new Error("Cannot convert zero-length vector to direction")), new Error("Cannot convert zero-length vector to direction");
            let e = this.normalize(),
                n = Math.max(Math.abs(e.x), Math.abs(e.y), Math.abs(e.z));
            if (n === e.x) return C.East;
            if (n === -e.x) return C.West;
            if (n === e.y) return C.Up;
            if (n === -e.y) return C.Down;
            if (n === e.z) return C.South;
            if (n === -e.z) return C.North;
            throw u.log.error(new Error("Cannot convert vector to direction"), this), new Error("Cannot convert vector to direction")
        }
        toBlockLocation() {
            return u.from((this.x << 0) - (this.x < 0 && this.x !== this.x << 0 ? 1 : 0), (this.y << 0) - (this.y < 0 && this.y !== this.y << 0 ? 1 : 0), (this.z << 0) - (this.z < 0 && this.z !== this.z << 0 ? 1 : 0))
        }
        almostEqual(e, n, a, i) {
            try {
                let r;
                return typeof e != "number" && a === void 0 ? (r = u._from(e, void 0, void 0), i = n) : r = u._from(e, n, a), Math.abs(this.x - r.x) <= i && Math.abs(this.y - r.y) <= i && Math.abs(this.z - r.z) <= i
            } catch {
                return !1
            }
        }
        equals(e, n, a) {
            try {
                let i = u._from(e, n, a);
                return this.x === i.x && this.y === i.y && this.z === i.z
            } catch {
                return !1
            }
        }
        toString(e = "long", n = ", ") {
            let a = `${this.x+n+this.y+n+this.z}`;
            return e === "long" ? `Vec3(${a})` : a
        }
    }, l(u, "log", L.getLogger("vec3", "vec3", "bedrock-boost")), l(u, "Zero", new u(0, 0, 0)), l(u, "Down", new u(C.Down)), l(u, "Up", new u(C.Up)), l(u, "North", new u(C.North)), l(u, "South", new u(C.South)), l(u, "East", new u(C.East)), l(u, "West", new u(C.West)), u),
    Y, Dh = (Y = class {
        static begin(e) {
            this.end(), this.lastTime = new Date().getTime(), this.lastOperation = e
        }
        static end() {
            let e = new Date().getTime();
            this.lastTime > 0 && Y.log.debug(`Operation ${this.lastOperation} took ${e-this.lastTime}ms`), this.lastTime = -1
        }
    }, l(Y, "log", L.getLogger("Timings", "timings")), l(Y, "lastTime", -1), l(Y, "lastOperation", ""), Y);
var wn = L.getLogger("jobUtils", "bedrock-boost", "jobUtils");

function Ot(m) {
    return new Promise((e, n) => {
        if (it.runJob) it.runJob(function*() {
            for (;;) try {
                let {
                    done: a,
                    value: i
                } = m.next();
                if (a) {
                    e(i);
                    return
                } else yield
            } catch (a) {
                n(a);
                return
            }
        }());
        else {
            wn.warn("system.runJob is not available. Running job in an inefficient way.");
            let a = () => {
                let i = Date.now();
                for (;;) try {
                    let {
                        done: r,
                        value: o
                    } = m.next();
                    if (r) {
                        e(o);
                        return
                    } else if (Date.now() - i > 4) {
                        it.runTimeout(a, 1);
                        return
                    }
                } catch (r) {
                    n(r);
                    return
                }
            };
            a()
        }
    })
}
var $h = L.getLogger("itemUtils", "bedrock-boost", "itemUtils");
var Z, xn = (Z = class {
    constructor(e, n) {
        l(this, "items", []);
        l(this, "period");
        l(this, "currentTick", 0);
        l(this, "runId");
        l(this, "nextIndex", 0);
        l(this, "executionSchedule", []);
        l(this, "processor");
        if (n <= 0) throw new Error("Period must be a positive integer.");
        if (!e || typeof e != "function") throw new Error("Processor function must be defined.");
        this.period = n, this.processor = e
    }
    add(e) {
        this.push(e)
    }
    addAll(e) {
        this.push(...e)
    }
    remove(e) {
        e >= 0 && e < this.items.length && (this.items.splice(e, 1), e < this.nextIndex && this.nextIndex--, this.recalculateExecutionSchedule())
    }
    removeIf(e) {
        for (let n = this.items.length - 1; n >= 0; n--) e(this.items[n]) && this.remove(n)
    }
    getItems() {
        return this.items
    }
    start() {
        this.stop(), this.currentTick = 0, this.nextIndex = 0, this.runId = zt.runInterval(() => this.tick(), 1)
    }
    stop() {
        this.runId !== void 0 && (zt.clearRun(this.runId), this.runId = void 0)
    }
    recalculateExecutionSchedule() {
        let e = this.items.length;
        if (this.executionSchedule = new Array(this.period).fill(0), e === 0) return;
        let n = this.period / e;
        for (let a = 0; a < e; a++) this.executionSchedule[Math.round(n * a) % this.period]++
    }
    tick() {
        if (this.items.length === 0) {
            Z.log.trace("No items to process.");
            return
        }
        let e = this.executionSchedule[this.currentTick];
        if (e === 0) {
            Z.log.trace("No items to process this tick."), this.currentTick = (this.currentTick + 1) % this.period, this.currentTick === 0 && (this.nextIndex = 0);
            return
        }
        let n = 0;
        for (; this.nextIndex < this.items.length && n < e; this.nextIndex++) {
            try {
                this.processor(this.items[this.nextIndex])
            } catch (a) {
                Z.log.error("Error processing item", a)
            }
            n++
        }
        this.currentTick = (this.currentTick + 1) % this.period, this.currentTick === 0 && (this.nextIndex = 0)
    }
    push(...e) {
        return this.items.push(...e), this.recalculateExecutionSchedule(), this.items.length
    }
    pop() {
        let e = this.items.pop();
        return this.recalculateExecutionSchedule(), e
    }
    shift() {
        let e = this.items.shift();
        return this.recalculateExecutionSchedule(), e
    }
    unshift(...e) {
        return this.items.unshift(...e), this.recalculateExecutionSchedule(), this.items.length
    }
    splice(e, n = 0, ...a) {
        let i = this.items.splice(e, n, ...a);
        return this.recalculateExecutionSchedule(), i
    }
}, l(Z, "log", L.getLogger("PulseScheduler", "bedrock-boost", "pulse-scheduler")), Z);
var oe, Ue = (oe = class extends xn {
    constructor(e, n) {
        super(a => {
            a.isValid() ? e(a) : this.removeIf(i => !i.isValid())
        }, n), this.push(...Ne.getAllPlayers())
    }
    compareEntities(e, n) {
        return e.id === n.id
    }
    start() {
        Ne.afterEvents.playerJoin.subscribe(e => {
            let n = 0,
                a = () => {
                    if (n++, n > 10) {
                        oe.logger.warn("Failed to push player to scheduler after 10 attempts.");
                        return
                    }
                    try {
                        let i = Ne.getEntity(e.playerId);
                        i === void 0 && Mt.runTimeout(a, 1), i instanceof vn && this.push(i)
                    } catch (i) {
                        oe.logger.debug("Failed to push player to scheduler.", i), Mt.runTimeout(a, 1)
                    }
                };
            a()
        }), Ne.afterEvents.playerLeave.subscribe(e => {
            this.removeIf(n => !n.isValid() || n.id === e.playerId)
        }), super.start()
    }
    push(...e) {
        let n = e.filter(a => a.isValid() && !this.items.some(i => this.compareEntities(i, a)));
        return super.push(...n)
    }
    unshift(...e) {
        let n = e.filter(a => a.isValid() && !this.items.some(i => this.compareEntities(i, a)));
        return super.unshift(...n)
    }
    splice(e, n, ...a) {
        if (n === void 0) return super.splice(e);
        let i = a.filter(r => !this.items.some(o => this.compareEntities(o, r)));
        return super.splice(e, n, ...i)
    }
}, l(oe, "logger", L.getLogger("PlayerPulseScheduler", "bedrock-boost", "player-pulse-scheduler")), oe);
var Ft = class {
    static setInputPermission(m, e, n) {
        m.inputPermissions.setPermissionCategory(e === "movement" ? Lt.Movement : Lt.Camera, n)
    }
    static addCameraShake(m, e, n, a) {
        m.runCommand(`camerashake add @s ${n.toFixed(20)} ${a.toFixed(20)} ${e}`)
    }
    static stopCameraShake(m) {
        m.runCommand("camerashake stop @s")
    }
    static destroyBlock(m, e) {
        m.runCommand(`setblock ${e.x} ${e.y} ${e.z} air destroy`)
    }
};

function $e(m, e, n, a = []) {
    n["v.__time__"] = Sn.currentTick, n["v.__random__"] = Math.random() * 1e3 << 0;
    let i = Object.entries(n).map(([r, o]) => typeof o == "number" ? `${r}=${o}` : typeof o == "boolean" ? `${r}=${o?1:0}` : `${r}=${o.value}`).join(";") + ";return 0;";
    m.playAnimation(e, {
        stopExpression: i,
        controller: "__" + e + "_send_data__",
        players: a.length ? a.map(r => r.name) : void 0
    })
}
var b, Q = (b = class {}, l(b, "Arrow", "minecraft:arrow"), l(b, "Banner", "minecraft:banner"), l(b, "Boat", "minecraft:boat"), l(b, "Boats", "minecraft:boats"), l(b, "BookshelfBooks", "minecraft:bookshelf_books"), l(b, "ChainmailTier", "minecraft:chainmail_tier"), l(b, "Coals", "minecraft:coals"), l(b, "CrimsonStems", "minecraft:crimson_stems"), l(b, "DecoratedPotSherds", "minecraft:decorated_pot_sherds"), l(b, "DiamondTier", "minecraft:diamond_tier"), l(b, "Digger", "minecraft:digger"), l(b, "Door", "minecraft:door"), l(b, "GoldenTier", "minecraft:golden_tier"), l(b, "HangingActor", "minecraft:hanging_actor"), l(b, "HangingSign", "minecraft:hanging_sign"), l(b, "HorseArmor", "minecraft:horse_armor"), l(b, "IronTier", "minecraft:iron_tier"), l(b, "IsArmor", "minecraft:is_armor"), l(b, "IsAxe", "minecraft:is_axe"), l(b, "IsCooked", "minecraft:is_cooked"), l(b, "IsFish", "minecraft:is_fish"), l(b, "IsFood", "minecraft:is_food"), l(b, "IsHoe", "minecraft:is_hoe"), l(b, "IsMeat", "minecraft:is_meat"), l(b, "IsMinecart", "minecraft:is_minecart"), l(b, "IsPickaxe", "minecraft:is_pickaxe"), l(b, "IsShears", "minecraft:is_shears"), l(b, "IsShovel", "minecraft:is_shovel"), l(b, "IsSword", "minecraft:is_sword"), l(b, "IsTool", "minecraft:is_tool"), l(b, "IsTrident", "minecraft:is_trident"), l(b, "LeatherTier", "minecraft:leather_tier"), l(b, "LecternBooks", "minecraft:lectern_books"), l(b, "Logs", "minecraft:logs"), l(b, "LogsThatBurn", "minecraft:logs_that_burn"), l(b, "MangroveLogs", "minecraft:mangrove_logs"), l(b, "MusicDisc", "minecraft:music_disc"), l(b, "NetheriteTier", "minecraft:netherite_tier"), l(b, "Planks", "minecraft:planks"), l(b, "Sand", "minecraft:sand"), l(b, "Sign", "minecraft:sign"), l(b, "SoulFireBaseBlocks", "minecraft:soul_fire_base_blocks"), l(b, "SpawnEgg", "minecraft:spawn_egg"), l(b, "StoneBricks", "minecraft:stone_bricks"), l(b, "StoneCraftingMaterials", "minecraft:stone_crafting_materials"), l(b, "StoneTier", "minecraft:stone_tier"), l(b, "StoneToolMaterials", "minecraft:stone_tool_materials"), l(b, "TransformMaterials", "minecraft:transform_materials"), l(b, "TransformTemplates", "minecraft:transform_templates"), l(b, "TransformableItems", "minecraft:transformable_items"), l(b, "TrimMaterials", "minecraft:trim_materials"), l(b, "TrimTemplates", "minecraft:trim_templates"), l(b, "TrimmableArmors", "minecraft:trimmable_armors"), l(b, "VibrationDamper", "minecraft:vibration_damper"), l(b, "WarpedStems", "minecraft:warped_stems"), l(b, "WoodenSlabs", "minecraft:wooden_slabs"), l(b, "WoodenTier", "minecraft:wooden_tier"), l(b, "Wool", "minecraft:wool"), b);
var de, rt = (de = class {}, l(de, "Opposites", {
    [g.Down]: g.Up,
    [g.Up]: g.Down,
    [g.North]: g.South,
    [g.South]: g.North,
    [g.East]: g.West,
    [g.West]: g.East
}), l(de, "PositivePerpendiculars", {
    [g.Down]: [g.East, g.North],
    [g.Up]: [g.East, g.North],
    [g.North]: [g.East, g.Up],
    [g.South]: [g.East, g.Up],
    [g.East]: [g.North, g.Up],
    [g.West]: [g.North, g.Up]
}), l(de, "NegativePerpendiculars", {
    [g.Down]: [g.West, g.South],
    [g.Up]: [g.West, g.South],
    [g.North]: [g.West, g.Down],
    [g.South]: [g.West, g.Down],
    [g.East]: [g.South, g.Down],
    [g.West]: [g.South, g.Down]
}), l(de, "Values", [g.Down, g.Up, g.North, g.South, g.East, g.West]), de);
import {
    EntityComponentTypes as He,
    EntityDamageCause as Gn,
    EntityInventoryComponent as Nt,
    ItemStack as Nn,
    world as Ke
} from "@minecraft/server";
import {
    EntityComponentTypes as zn,
    EntityInventoryComponent as Mn,
    ItemDurabilityComponent as Ln,
    ItemEnchantableComponent as On,
    ItemStack as je,
    world as qe
} from "@minecraft/server";
import {
    ActionFormData as Fn
} from "@minecraft/server-ui";
import {
    system as In
} from "@minecraft/server";
var fe = {},
    A = class {
        static debounce(e, n) {
            let a = In.currentTick;
            return fe[e] || (fe[e] = {}), fe[e][n.id] === void 0 ? (fe[e][n.id] = a, !1) : a - fe[e][n.id] <= 5 ? !0 : (fe[e][n.id] = a, !1)
        }
    };
import {
    Player as Bn,
    world as Dn
} from "@minecraft/server";
import {
    ActionFormData as En,
    FormCancelationReason as Tn,
    MessageFormData as Pn
} from "@minecraft/server-ui";
import {
    system as Cn,
    world as xe
} from "@minecraft/server";
var E = class {
        constructor(e, n, a) {
            this.title = e, this.propertyId = n, this.tag = a?.tag, this.defaultValue = a?.defaultValue ?? !0, this.needsTagToEnable = a?.inverted ?? !1
        }
        get(e) {
            let n = xe.getDynamicProperty(this.propertyId),
                a = () => e && this.tag ? e.hasTag(this.tag) : !1;
            return n === void 0 ? this.defaultValue ? this.needsTagToEnable ? !this.tag || a() : !this.tag || !a() : !1 : this.needsTagToEnable ? !!n && (!this.tag || a()) : !!n && (!this.tag || !a())
        }
        canPlayerOverride() {
            return !!this.tag
        }
        set(e, n) {
            if (!this.tag) return;
            let a = e.hasTag(this.tag);
            n && a ? e.removeTag(this.tag) : !n && !a && e.addTag(this.tag)
        }
        globalSet(e) {
            xe.setDynamicProperty(this.propertyId, e)
        }
    },
    B = class B {
        static getByName(e) {
            return Object.entries(B).find(n => n[0] === e)?.[1]
        }
    };
B.treeBreaker = new E("Tree Breaker", "ess:treecapitator", {
    tag: "unlinked.essentials.treecapitator"
}), B.oreBreaker = new E("Ore Breaker", "ess:veinminer", {
    tag: "unlinked.essentials.veinminer"
}), B.fixedDurability = new E("Tree Breaker Fixed Durability", "ess:fixed_durability", {
    defaultValue: !1
}), B.noTreeBreakerLimit = new E("No Tree Breaker Limit", "ess:no_treebreaker_limit", {
    defaultValue: !1
}), B.weather = new E("Weather", "ess:weather"), B.time = new E("Time", "ess:time"), B.teleporter = new E("Teleporter", "ess:teleport"), B.playerTeleporter = new E("Player Teleporter", "ess:player_tp"), B.leavesBreaker = new E("Leaves Breaker", "ess:leaves", {
    tag: "unlinked.essentials.leaves",
    inverted: !0
}), B.treePlanter = new E("Replant Trees", "ess:tree_replant", {
    tag: "unlinked.essentials.tree_replant",
    inverted: !0
}), B.changeTradesBribe = new E("Bribe to Change Trades", "ess:change_trades_bribe", {
    defaultValue: !1
}), B.doubleDoor = new E("Double Door Opening", "ess:double_door", {
    tag: "unlinked.essentials.double_door",
    inverted: !0
}), B.stoneBreaker = new E("Stone Breaker", "ess:stonebreaker"), B.sandBreaker = new E("Sand Breaker", "ess:shovelbang", {
    tag: "unlinked.essentials.shovelbang"
}), B.obsidianStoneBreaker = new E("Obsidian in Stone Breaker", "ess:obsidian_stonebreaker", {
    defaultValue: !1
}), B.toolReplacer = new E("Tool Replacer", "ess:replace", {
    tag: "unlinked.essentials.replace",
    inverted: !0,
    defaultValue: !0
}), B.bribe = new E("Bribe", "ess:bribe"), B.sleepingBag = new E("Sleeping Bag", "ess:sleeping_bag"), B.blockInspector = new E("Block Inspector", "ess:block_inspector"), B.measuringTape = new E("Measuring Tape", "ess:measuring_tape"), B.bigBucket = new E("Big Bucket", "ess:big_bucket"), B.satchel = new E("Satchel", "ess:satchel"), B.clearWaypoint = new E("Clear Waypoint", "ess:clear_waypoint"), B.circleTemplate = new E("Circle Template", "ess:circle_template"), B.superSponge = new E("Super Sponge", "ess:super_sponge"), B.sortingStick = new E("Sorting Stick", "ess:sorting_stick"), B.lavaReflow = new E("Lava Reflow", "ess:lava_reflow", {
    tag: "unlinked.essentials.lava_reflow",
    inverted: !0,
    defaultValue: !0
});
var k = B;
Cn.afterEvents.scriptEventReceive.subscribe(m => {
    if (m.id === "ulkd_ess:set") {
        let e = m.message.split(" ");
        if (e.length < 2) return;
        let n = Object.entries(k).find(i => {
            if (i[0] === e[0]) return i[1]
        });
        if (!n) {
            xe.sendMessage(`${f.RED}Unknown setting: ${e[0]}`), xe.sendMessage(`Valid settings: ${Object.entries(k).map(i=>i[0]).join(", ")}`);
            return
        }
        let a = e[1] === "true" || e[1] === "1";
        n[1].globalSet(a), xe.sendMessage(`${f.GREEN}Setting ${e[0]} set to ${a}`)
    }
});
var se = L.getLogger("Forms"),
    q = class {
        constructor() {
            this.back = () => {}
        }
        beforeRender(e) {
            this.back = e
        }
    },
    An = ["textures/ui/toggle_off", "textures/ui/toggle_on_hover"],
    he = "ulkd_ess:form_",
    Wt = {},
    Ve = {},
    ot = {
        forms: {}
    },
    ve = class {
        constructor() {
            this.onUse = this.onUse.bind(this), this.onUseOn = this.onUseOn.bind(this)
        }
        onUse(e) {
            if (!e.itemStack || A.debounce("Forms.itemUse", e.source)) return;
            let n = e.itemStack.getTags().filter(a => a.startsWith(he)).map(a => a.substring(he.length)).find(() => !0);
            if (!n) {
                se.warn(`Item ${e.itemStack.typeId} has no form id.
Add a '${he}<form_id>' tag to the item.`);
                return
            }
            x.open(e.source, n)
        }
        onUseOn(e) {
            let n = e.source;
            if (n instanceof Bn) {
                if (!e.itemStack || A.debounce("Forms.itemUse", n)) return;
                let a = e.itemStack.getTags().filter(i => i.startsWith(he)).map(i => i.substring(he.length)).find(() => !0);
                if (!a) {
                    se.warn(`Item ${e.itemStack.typeId} has no form id.
Add a '${he}<form_id>' tag to the item.`);
                    return
                }
                x.open(n, a)
            }
        }
    };
ve.id = "ulkd_ess:form";
var x = class {
    static init() {
        Dn.beforeEvents.worldInitialize.subscribe(e => {
            e.itemComponentRegistry.registerCustomComponent(ve.id, new ve)
        })
    }
    static addFormData(e) {
        ot.forms = Object.assign(ot.forms, e.forms)
    }
    static registerCustomForm(e) {
        Wt[e.getFormId()] = e
    }
    static open(e, n) {
        this.evictCache(e), this.openForm(e, n, [])
    }
    static openForm(e, n, a) {
        let i = ot.forms[n];
        if (!i) {
            se.error(`Form ${n} not found`);
            return
        }
        if (!this.evaluateWhen(i.when, e)) {
            e.sendMessage(`${f.RED}${i.title} is disabled in the Admin Remote (creative only item)`);
            return
        }
        let r = a.slice();
        if (r.push(n), i.type === "buttons") this.showButtonsForm(e, i, r);
        else if (i.type === "message") this.showMessageForm(e, i, r);
        else if (i.type === "custom") {
            let o = Wt[i.id];
            if (!o) {
                se.error(`Custom form ${i.id} not found`);
                return
            }
            let s = a.slice(),
                c = s[s.length - 1];
            s.pop(), o.beforeRender(() => {
                e.runCommandAsync("playsound unlinked.essentials.click_n @s"), this.openForm(e, c, s)
            }), o.render(e, i.title, i.data)
        }
    }
    static showMessageForm(e, n, a) {
        let i = new Pn;
        i.title(n.title), i.body(n.text);
        let r = [];
        r.push(this.createButton((o, s) => i.button1(o), n.button1, e, a)), r.push(this.createButton((o, s) => i.button2(o), n.button2, e, a)), this.forceShow(e, i, o => {
            o.canceled || o.selection !== void 0 && r[o.selection]()
        })
    }
    static showButtonsForm(e, n, a) {
        let i = new En;
        i.title(n.title);
        let r = [];
        for (let o of n.buttons) this.evaluateWhen(o.when, e) && r.push(this.createButton((s, c) => i.button(s, c), o, e, a));
        n.text && i.body(n.text), this.forceShow(e, i, o => {
            o.canceled || o.selection !== void 0 && r[o.selection]()
        })
    }
    static createButton(e, n, a, i) {
        if (n.type === "toggle") {
            let r = n,
                o = r.tag,
                s = r.invert ?? !1,
                c = this.getTags(a).includes(o) !== s;
            return e(r.text, An[c ? 0 : 1]), () => {
                c && !s || !c && s ? (a.runCommandAsync("playsound unlinked.essentials.click_n @s"), this.removeTag(a, o)) : (a.runCommandAsync("playsound unlinked.essentials.click_y @s"), this.addTag(a, o));
                let d = i[i.length - 1];
                i.pop(), this.openForm(a, d, i)
            }
        } else if (n.action) {
            let r = n;
            return e(r.text, r.icon), this.getButtonCallback(r.action, a, i)
        }
        return se.warn(`Guidebook button ${n.text} has invalid type`), () => {}
    }
    static getButtonCallback(e, n, a) {
        if (e.type === "form") {
            let i = e;
            return () => {
                this.openForm(n, i.id, a)
            }
        } else if (e.type === "message") {
            let i = e;
            return () => {
                n.sendMessage(i.text.join(`
`))
            }
        } else if (e.type === "command") {
            let i = e;
            return () => {
                n.runCommandAsync("playsound unlinked.essentials.click_y @s"), i.command.forEach(r => n.runCommandAsync(r))
            }
        } else {
            if (e.type === "close") return () => {};
            if (e.type === "back") {
                let i = a.slice();
                return () => {
                    n.runCommandAsync("playsound unlinked.essentials.click_n @s"), i.pop();
                    let r = i.pop();
                    r && this.openForm(n, r, i)
                }
            } else if (e.type === "group") {
                let i = e,
                    r = [];
                for (let o of i.actions) r.push(this.getButtonCallback(o, n, a));
                return () => {
                    for (let o of r) o()
                }
            }
        }
        return se.warn("Guidebook button has invalid action"), () => {}
    }
    static evaluateWhen(e, n) {
        if (!e) return !0;
        if (e.anyOf) {
            if (e.allOf || e.noneOf || e.type) throw new Error("When filter cannot have allOf, noneOf or type");
            return e.anyOf.some(a => this.evaluateWhen(a, n))
        }
        if (e.allOf) {
            if (e.anyOf || e.noneOf || e.type) throw new Error("When filter cannot have anyOf, noneOf or type");
            return e.allOf.every(a => this.evaluateWhen(a, n))
        }
        if (e.noneOf) {
            if (e.anyOf || e.allOf || e.type) throw new Error("When filter cannot have anyOf, allOf or type");
            return e.noneOf.every(a => !this.evaluateWhen(a, n))
        }
        if (e.type) {
            if (e.anyOf || e.allOf || e.noneOf) throw new Error("When filter cannot have anyOf, allOf or noneOf");
            if (!e.property) throw new Error("When filter requires property field");
            let a = e.value ?? !0,
                i;
            switch (e.type) {
                case "dynamic_property":
                    i = n.getDynamicProperty(e.property);
                    break;
                case "entity_property":
                    i = n.getProperty(e.property);
                    break;
                case "tag":
                    i = this.getTags(n).includes(e.property);
                    break;
                case "setting":
                    i = k.getByName(e.property)?.get(n);
                    break;
                case "gamemode":
                    i = n.getGameMode().toLowerCase();
                    break
            }
            switch (i === void 0 && (i = e.defaultValue), e.operator ?? "==") {
                case "==":
                    return i == a;
                case "!=":
                    return i != a;
                case ">":
                    return i > a;
                case "<":
                    return i < a;
                case ">=":
                    return i >= a;
                case "<=":
                    return i <= a
            }
        }
        return se.warn("Filter does not contain any of the required properties: allOf, anyOf, noneOf, type"), !0
    }
    static getTags(e) {
        if (!Ve[e.id]) {
            let n = e.getTags();
            Ve[e.id] = n
        }
        return Ve[e.id]
    }
    static addTag(e, n) {
        this.getTags(e).push(n), e.addTag(n)
    }
    static removeTag(e, n) {
        let a = this.getTags(e),
            i = a.indexOf(n);
        i !== -1 && (a.splice(i, 1), e.removeTag(n))
    }
    static evictCache(e) {
        delete Ve[e.id]
    }
    static forceShow(e, n, a) {
        let i = r => {
            r.canceled && r.cancelationReason === Tn.UserBusy && n.show(e).then(i), a(r)
        };
        n.show(e).then(i)
    }
};
var Gt = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"];
var Wn = ["minecraft:potion", "minecraft:splash_potion", "minecraft:lingering_potion", "minecraft:undyed_shulker_box", "minecraft:white_shulker_box", "minecraft:orange_shulker_box", "minecraft:magenta_shulker_box", "minecraft:light_blue_shulker_box", "minecraft:yellow_shulker_box", "minecraft:lime_shulker_box", "minecraft:pink_shulker_box", "minecraft:gray_shulker_box", "minecraft:light_gray_shulker_box", "minecraft:cyan_shulker_box", "minecraft:purple_shulker_box", "minecraft:blue_shulker_box", "minecraft:brown_shulker_box", "minecraft:green_shulker_box", "minecraft:red_shulker_box", "minecraft:black_shulker_box", "minecraft:writable_book", "minecraft:goat_horn", "minecraft:suspicious_stew", "minecraft:bundle", "minecraft:white_bundle", "minecraft:orange_bundle", "minecraft:magenta_bundle", "minecraft:light_blue_bundle", "minecraft:yellow_bundle", "minecraft:lime_bundle", "minecraft:pink_bundle", "minecraft:gray_bundle", "minecraft:light_gray_bundle", "minecraft:cyan_bundle", "minecraft:purple_bundle", "minecraft:blue_bundle", "minecraft:brown_bundle", "minecraft:green_bundle", "minecraft:red_bundle", "minecraft:black_bundle"],
    T = class T {
        static init() {
            new Ue(T.onPulse.bind(this), 20).start(), qe.beforeEvents.itemUse.subscribe(async n => {
                if (n.source.typeId !== "minecraft:player") return;
                let a = n.source;
                A.debounce("Satchel.itemUse", a) || T.itemUse(a, n.itemStack, () => n.cancel = !0)
            }), qe.beforeEvents.itemUseOn.subscribe(async n => {
                if (n.source.typeId !== "minecraft:player" || !n.isFirstEvent) return;
                let a = n.source;
                A.debounce("Satchel.itemUse", a) || await T.itemUse(a, n.itemStack, () => n.cancel = !0)
            }), qe.afterEvents.itemStopUse.subscribe(n => {
                if (!n.itemStack || n.itemStack.typeId !== "minecraft:bow" && n.itemStack.typeId !== "minecraft:crossbow" || !this.isShooting.has(n.source.id)) return;
                let a = this.isShooting.get(n.source.id);
                if (this.isShooting.delete(n.source.id), n.source.runCommand("testfor @s[hasitem={item=minecraft:arrow}]").successCount === 0) {
                    let r = T.getSatchels(n.source);
                    for (let o of r)
                        if (o.boundTo === "minecraft:arrow" && o.amount > 0) {
                            let s = o.inv,
                                c = new je(o.boundTo, 1);
                            if (c.amount = Math.min(c.maxAmount, o.amount), o.amount -= c.amount, a === -1) {
                                if (n.source.runCommand(`replaceitem entity @s slot.weapon.offhand 0 keep ${c.typeId} ${c.amount}`).successCount === 0) return
                            } else {
                                if (s.getItem(a)) return;
                                s.setItem(a, c)
                            }
                            T.updateSatchelItem(o);
                            return
                        }
                }
            }), qe.afterEvents.itemStartUse.subscribe(n => {
                if (n.itemStack.typeId !== "minecraft:bow" && n.itemStack.typeId !== "minecraft:crossbow") return;
                if (n.source.runCommand("testfor @s[hasitem={item=minecraft:arrow}]").successCount > 0) {
                    let i = le(n.source);
                    if (!i) return;
                    this.isShooting.set(n.source.id, -1);
                    let r = i.size;
                    for (let o = 0; o < r; o++) {
                        let s = i.getItem(o);
                        if (s && s.typeId === "minecraft:arrow") {
                            this.isShooting.set(n.source.id, o);
                            return
                        }
                    }
                }
            })
        }
        static async itemUse(e, n, a) {
            if (n.typeId.startsWith(this.SatchelIdPrefix)) {
                if (T.useCooldown.has(e.id)) {
                    if (T.useCooldown.get(e.id) > Date.now()) return;
                    T.useCooldown.delete(e.id)
                }
                if (T.useCooldown.set(e.id, Date.now() + 1e3), !k.satchel.get()) {
                    e.sendMessage("\xA7cSatchels are disabled in the Admin Remote (creative only item)");
                    return
                }
                if (n.getDynamicProperty(this.BoundToProperty)) {
                    if (e.isSneaking) {
                        await null;
                        let i = n.getDynamicProperty(this.BoundToProperty),
                            r = n.getDynamicProperty(this.AmountProperty);
                        if (r === 0) {
                            e.sendMessage(`${f.RED}Satchel is empty`);
                            return
                        }
                        let o = le(e);
                        if (!o) return;
                        let s = -1,
                            c = o.size;
                        for (let p = c - 1; p >= 0; p--)
                            if (!o.getItem(p)) {
                                s = p;
                                break
                            } if (s === -1) {
                            e.sendMessage(`${f.RED}Inventory is full`);
                            return
                        }
                        let d = new je(i, 1);
                        d.amount = Math.min(r, d.maxAmount), r -= d.amount, n.setDynamicProperty(this.AmountProperty, r), n.setLore(this.createLore(r, !0)), o.setItem(s, n), o.setItem(e.selectedSlotIndex, d)
                    } else {
                        await null;
                        let i = new Fn;
                        i.title(n.nameTag);
                        let r = n.getDynamicProperty(this.EnabledProperty),
                            o = n.getDynamicProperty(this.BoundToProperty),
                            s = n.getDynamicProperty(this.AmountProperty);
                        r ? i.button("Disable") : i.button("Enable"), i.button("Unbind"), i.button("Info"), i.button("Cancel"), i.show(e).then(c => {
                            if (!c.canceled)
                                if (c.selection === 0) {
                                    r ? (n.setDynamicProperty(this.EnabledProperty, !1), n.setLore(this.createLore(s, !1))) : (n.setDynamicProperty(this.EnabledProperty, !0), n.setLore(this.createLore(s, !0))), n.setDynamicProperty(this.EnabledProperty, !r);
                                    let d = le(e);
                                    if (!d) return;
                                    let p = d.getItem(e.selectedSlotIndex);
                                    p && p.typeId.startsWith(this.SatchelIdPrefix) && p.getDynamicProperty(this.BoundToProperty) === o && p.getDynamicProperty(this.AmountProperty) === s && d.setItem(e.selectedSlotIndex, n)
                                } else if (c.selection === 1) {
                                let d = le(e);
                                if (!d) return;
                                let p = d.getItem(e.selectedSlotIndex);
                                if (p && p.typeId.startsWith(this.SatchelIdPrefix) && p.getDynamicProperty(this.BoundToProperty) === o && p.getDynamicProperty(this.AmountProperty) === s) {
                                    n.clearDynamicProperties(), n.setLore([]), n.nameTag = void 0, d.setItem(e.selectedSlotIndex, n);
                                    let y = new je(o, 1),
                                        S = Math.floor(s / y.maxAmount);
                                    for (let w = 0; w < S; w++) y.amount = y.maxAmount, e.dimension.spawnItem(y, e.location);
                                    s % y.maxAmount > 0 && (y.amount = s % y.maxAmount, e.dimension.spawnItem(y, e.location))
                                }
                            } else c.selection === 2 && x.open(e, "info_satchel")
                        })
                    }
                    return
                }
                if (T.bindSlot.has(e.id)) {
                    this.bindSlot.delete(e.id), e.sendMessage(f.RED + "Item binding cancelled");
                    return
                }
                T.bindSlot.set(e.id, e.selectedSlotIndex), e.sendMessage(f.GREEN + "Select and use the item you want to bind to this satchel");
                return
            }
            T.bindSlot.has(e.id) && (a(), await null, T.bindItem(e, n, T.bindSlot.get(e.id)), T.bindSlot.delete(e.id))
        }
        static bindItem(e, n, a) {
            if (!this.canFitInSatchel(n, e)) return;
            let i = le(e);
            if (!i) return;
            let r = i.getItem(a);
            if (!r || !r.typeId.startsWith(this.SatchelIdPrefix) || r.getDynamicProperty(this.BoundToProperty)) {
                r = void 0;
                for (let o = 0; o < i.size; o++) {
                    let s = i.getItem(o);
                    if (s && s.typeId.startsWith(this.SatchelIdPrefix) && !s.getDynamicProperty(this.BoundToProperty)) {
                        a = o, r = s;
                        break
                    }
                }
            }
            if (!r) {
                e.sendMessage(`${f.RED}No satchel found`), this.bindSlot.delete(e.id);
                return
            }
            r.setDynamicProperty(this.BoundToProperty, n.typeId), r.setDynamicProperty(this.AmountProperty, n.amount), r.setDynamicProperty(this.EnabledProperty, !0), r.setLore(this.createLore(n.amount, !0)), r.nameTag = `${this.idToNiceName(n.typeId)} Satchel`, i.setItem(a, r), i.setItem(e.selectedSlotIndex, void 0), e.sendMessage(`${f.GREEN}Bound to ${this.idToNiceName(n.typeId)}`)
        }
        static canFitInSatchel(e, n) {
            if (Wn.includes(e.typeId)) return n && n.sendMessage(`${f.RED}This item can not be bound to a satchel`), !1;
            let a = e.getLore();
            if (a.length > 0 && !(a.length === 1 && a[0].includes("\xA7bEssence:"))) return n && n.sendMessage(`${f.RED}Items that have lore can not be bound to a satchel`), !1;
            if (e.maxAmount > 1) {
                let o = new je(e.typeId, 1);
                if (a.length === 1 && a[0].includes("\xA7bEssence:") && o.setLore(a), !o.isStackableWith(e)) return n && n.sendMessage(`${f.RED}This item can not be bound to a satchel`), !1
            }
            if (e.nameTag) return n && n.sendMessage(`${f.RED}Items that have names can not be bound to a satchel`), !1;
            let i = e.getComponent(On.componentId),
                r = e.getComponent(Ln.componentId);
            return i && i.getEnchantments().length > 0 || r && r.damage > 0 ? (n && n.sendMessage(`${f.RED}Items that lost durability or have enchantments can not be bound to a satchel`), !1) : e.getDynamicPropertyIds().length > 0 ? (n && n.sendMessage(`${f.RED}Items that have dynamic properties can not be bound to a satchel`), !1) : !0
        }
        static getSatchels(e) {
            let n = le(e);
            if (!n) return [];
            let a = [],
                i = n.size;
            for (let r = 0; r < i; r++) {
                let o = n.getItem(r);
                if (o && o.typeId.startsWith(this.SatchelIdPrefix) && o.getDynamicProperty(this.BoundToProperty) && o.getDynamicProperty(this.EnabledProperty)) {
                    let c = T.getSatchelData(o, n, r);
                    if (c.amount > Number.MAX_SAFE_INTEGER) continue;
                    a.push(c)
                }
            }
            return a
        }
        static onPulse(e) {
            if (!k.satchel.get()) return;
            let n = le(e);
            if (!n) return;
            let a = [],
                i = n.size;
            for (let o = 0; o < i; o++) {
                let s = n.getItem(o);
                if (s && s.typeId.startsWith(this.SatchelIdPrefix) && s.getDynamicProperty(this.BoundToProperty) && s.getDynamicProperty(this.EnabledProperty)) {
                    let d = T.getSatchelData(s, n, o);
                    if (d.amount > Number.MAX_SAFE_INTEGER) continue;
                    a.push(d)
                }
            }
            let r = [];
            for (let o = 9; o < i; o++) {
                let s = n.getItem(o);
                if (s) {
                    for (let c of a)
                        if (c.boundTo === s.typeId && this.canFitInSatchel(s)) {
                            c.amount += s.amount, r.push(o);
                            break
                        }
                }
            }
            r.forEach(o => {
                n.setItem(o, void 0)
            }), a.forEach(o => {
                let s = o.item;
                s.setLore(this.createLore(o.amount, !0)), o.amount !== s.getDynamicProperty(this.AmountProperty) && (o.amount > Number.MAX_SAFE_INTEGER ? (e.sendMessage(`${f.RED}Satchel is full, HOW DID YOU DO THAT?!`), s.setDynamicProperty(this.AmountProperty, Number.MAX_SAFE_INTEGER)) : s.setDynamicProperty(this.AmountProperty, o.amount), n.setItem(o.slot, s))
            })
        }
        static createLore(e, n) {
            let a = n ? f.GREEN : f.RED;
            return [`${f.RESET}${a}Amount: ${e}`, n ? `${f.RESET}${a}Enabled` : `${f.RESET}${a}Disabled`]
        }
        static idToNiceName(e) {
            let n = e.split(":", 2);
            return n[n.length - 1].replace(/(^|[-_])(\w)/g, i => i.toUpperCase()).replace(/_/g, " ")
        }
        static getSatchelData(e, n, a) {
            return {
                boundTo: e.getDynamicProperty(this.BoundToProperty),
                amount: e.getDynamicProperty(this.AmountProperty),
                item: e,
                slot: a,
                inv: n
            }
        }
        static isSatchel(e) {
            return e.startsWith(this.SatchelIdPrefix)
        }
        static getSatchelIDs() {
            return [this.SatchelIdPrefix, ...this.satchelColors.map(e => this.SatchelIdPrefix + "_" + e)]
        }
        static updateSatchelItem(e) {
            let n = e.item;
            n.setLore(this.createLore(e.amount, !0)), e.amount !== n.getDynamicProperty(this.AmountProperty) && (n.setDynamicProperty(this.AmountProperty, e.amount), e.inv.setItem(e.slot, n))
        }
    };
T.bindSlot = new Map, T.useCooldown = new Map, T.SatchelIdPrefix = "ulkd_ess:satchel", T.BoundToProperty = "ulkd_ess:bound_to", T.AmountProperty = "ulkd_ess:amount", T.EnabledProperty = "ulkd_ess:enabled", T.isShooting = new Map, T.satchelColors = Gt;
var O = T;

function le(m) {
    let e = m.getComponent(zn.Inventory);
    if (!(!e || !(e instanceof Mn))) return e.container
}
var Un = L.getLogger("AutoReplacer", "auto-replacer"),
    st = ["minecraft:rotten_flesh", "minecraft:golden_apple", "minecraft:enchanted_golden_apple"],
    $n = ["minecraft:potion", "minecraft:splash_potion", "minecraft:lingering_potion"];

function Ut() {
    Ke.afterEvents.entityHurt.subscribe(m => {
        if (m.hurtEntity.typeId === "minecraft:player" && m.damageSource.cause === Gn.none && m.damage < 0) {
            let e = m.hurtEntity;
            if (e.runCommand("testfor @s[hasitem={item=minecraft:totem_of_undying}]").successCount > 0 && e.runCommand("replaceitem entity @s slot.weapon.offhand 0 keep minecraft:totem_of_undying").successCount > 0) {
                e.runCommand("clear @s minecraft:totem_of_undying 0 1");
                return
            }
            let a = e.getComponent(He.Inventory);
            if (!a || !(a instanceof Nt) || !a.container) return;
            for (let i = 0; i < a.container.size; i++) {
                let r = a.container.getItem(i);
                if (r && O.isSatchel(r.typeId)) {
                    let o = O.getSatchelData(r, a.container, i);
                    o && o.boundTo === "minecraft:totem_of_undying" && o.amount > 0 && e.runCommand("replaceitem entity @s slot.weapon.offhand 0 keep minecraft:totem_of_undying").successCount > 0 && (o.amount--, O.updateSatchelItem(o))
                }
            }
        }
    }), Ke.afterEvents.playerPlaceBlock.subscribe(m => {
        let e = m.player,
            n = m.block.permutation.getItemStack(1);
        if (!n) {
            Un.warn(`Could not find itemStack for block ${m.block.typeId}`);
            return
        }
        let a = e.getComponent(He.Inventory);
        if (!a) return;
        let i = e.selectedSlotIndex;
        if (!a.container.getItem(i))
            for (let o = 0; o < a.container.size; o++) {
                let s = a.container.getItem(o);
                if (s) {
                    if (s.typeId === n.typeId) {
                        a.container.setItem(i, s), a.container.setItem(o, void 0);
                        return
                    } else if (O.isSatchel(s.typeId)) {
                        let c = O.getSatchelData(s, a.container, o);
                        if (c && c.boundTo === n.typeId && c.amount > 0) {
                            n.amount = Math.min(n.maxAmount, c.amount), c.amount -= n.amount, a.container.setItem(i, n), O.updateSatchelItem(c);
                            return
                        }
                    }
                }
            }
    }), Ke.afterEvents.itemCompleteUse.subscribe(m => {
        if (m.source.typeId !== "minecraft:player" || !m.itemStack.hasTag(Q.IsFood) || st.includes(m.itemStack.typeId)) return;
        let e = m.source,
            n = e.getComponent(He.Inventory);
        if (!n || !(n instanceof Nt) || !n.container) return;
        let a = e.selectedSlotIndex;
        if (!n.container.getItem(a))
            for (let r = 0; r < n.container.size; r++) {
                let o = n.container.getItem(r);
                if (o) {
                    if (o.hasTag(Q.IsFood) && !st.includes(o.typeId)) {
                        n.container.setItem(a, o), n.container.setItem(r, void 0);
                        return
                    } else if (O.isSatchel(o.typeId)) {
                        let s = O.getSatchelData(o, n.container, r);
                        if (s && s.amount > 0 && !st.includes(s.boundTo)) {
                            let c = new Nn(s.boundTo, 1);
                            if (c.hasTag(Q.IsFood)) {
                                c.amount = Math.min(c.maxAmount, s.amount), s.amount -= c.amount, n.container.setItem(a, c), O.updateSatchelItem(s);
                                return
                            }
                        }
                    }
                }
            }
    }), Ke.afterEvents.itemUse.subscribe(m => {
        let e = m.source,
            n = m.itemStack;
        if ($n.includes(n.typeId)) return;
        let a = e.getComponent(He.Inventory);
        if (!a) return;
        let i = e.selectedSlotIndex;
        if (!a.container.getItem(i))
            for (let o = 0; o < a.container.size; o++) {
                let s = a.container.getItem(o);
                if (s) {
                    if (s.typeId === n.typeId) {
                        a.container.setItem(i, s), a.container.setItem(o, void 0);
                        return
                    } else if (O.isSatchel(s.typeId)) {
                        let c = O.getSatchelData(s, a.container, o);
                        if (c && c.boundTo === n.typeId && c.amount > 0) {
                            n.amount = Math.min(n.maxAmount, c.amount), c.amount -= n.amount, a.container.setItem(i, n), O.updateSatchelItem(c);
                            return
                        }
                    }
                }
            }
    })
}
import {
    BlockComponentTypes as $t,
    BlockInventoryComponent as Vn,
    EntityComponentTypes as lt,
    EntityInventoryComponent as ct,
    world as mt
} from "@minecraft/server";
var _t = "ulkd_ess:sorting_stick",
    Se = class {
        static init() {
            mt.afterEvents.entityHitBlock.subscribe(e => {
                if (e.damagingEntity.typeId !== "minecraft:player") return;
                let n = e.damagingEntity.getComponent(lt.Inventory);
                if (!n || !(n instanceof ct)) return;
                let a = n.container;
                if (!a) return;
                let i = a.getItem(e.damagingEntity.selectedSlotIndex);
                if (i && i.typeId === _t) {
                    let r = e.hitBlock.getComponent($t.Inventory);
                    if (!r || !(r instanceof Vn)) return;
                    let o = r.container;
                    if (!o || o.size < 9) return;
                    if (!k.sortingStick.get()) {
                        e.damagingEntity.sendMessage("\xA7cSorting Stick is disabled in the Admin Remote (creative only item)");
                        return
                    }
                    this.sortInventory(o)
                }
            }), mt.beforeEvents.itemUse.subscribe(async e => {
                if (!A.debounce("InventoryMaid.itemUse", e.source) && e.itemStack.typeId === _t) {
                    let n = e.source.getComponent(lt.Inventory);
                    if (!n || !(n instanceof ct)) return;
                    let a = n.container;
                    if (!a) return;
                    if (e.cancel = !0, await null, !k.sortingStick.get()) {
                        e.source.sendMessage("\xA7cSorting Stick is disabled in the Admin Remote (creative only item)");
                        return
                    }
                    this.sortInventory(a, 9)
                }
            }), mt.beforeEvents.itemUseOn.subscribe(async e => {
                if (!A.debounce("InventoryMaid.itemUse", e.source) && e.itemStack.typeId === _t && e.block) {
                    if (e.block.getComponent($t.Inventory)) return;
                    let a = e.source.getComponent(lt.Inventory);
                    if (!a || !(a instanceof ct)) return;
                    let i = a.container;
                    if (!i) return;
                    if (e.cancel = !0, await null, !k.sortingStick.get()) {
                        e.source.sendMessage("\xA7cSorting Stick is disabled in the Admin Remote (creative only item)");
                        return
                    }
                    this.sortInventory(i, 9)
                }
            })
        }
        static sortInventory(e, n = 0) {
            let a = [];
            for (let r = 0; r < n; r++) {
                let o = e.getItem(r);
                a.push(o)
            }
            let i = [];
            for (let r = n; r < e.size; r++) {
                let o = e.getItem(r);
                o && i.push(o)
            }
            if (i.sort((r, o) => {
                    if (r.typeId !== o.typeId) {
                        let s = r.typeId.split(":", 2)[1],
                            c = o.typeId.split(":", 2)[1];
                        return s.localeCompare(c)
                    }
                    return 0
                }), e.clearAll(), i.forEach(r => {
                    e.addItem(r)
                }), n !== 0) {
                i.splice(0, i.length);
                for (let r = 0; r < e.size; r++) {
                    let o = e.getItem(r);
                    o && i.push(o)
                }
                e.clearAll();
                for (let r = 0; r < a.length; r++) {
                    let o = a[r];
                    e.setItem(r, o)
                }
                for (let r = 0; r < i.length; r++) {
                    let o = i[r];
                    e.setItem(r + n, o)
                }
            }
        }
    };
import {
    world as jn
} from "@minecraft/server";
var Je = class Je {
    static init() {
        new Ue(Je.onPulse.bind(this), 5).start(), jn.beforeEvents.worldInitialize.subscribe(n => {
            n.itemComponentRegistry.registerCustomComponent("ulkd_ess:hover", {
                onUse: a => {
                    if (!k.blockInspector.get()) {
                        a.source.sendMessage("\xA7cBlock Inspector is disabled in the Admin Remote (creative only item)");
                        return
                    }
                    a.source.hasTag("unlinked.essentials.hover_id") ? (a.source.removeTag("unlinked.essentials.hover_id"), a.source.playSound("unlinked.essentials.click_n")) : (a.source.addTag("unlinked.essentials.hover_id"), a.source.playSound("unlinked.essentials.click_y"))
                }
            })
        })
    }
    static onPulse(e) {
        if (!k.blockInspector.get() || !e.hasTag("unlinked.essentials.hover_id") && e.runCommand(`testfor @s[hasitem={item=${this.HoverIdItem},location=slot.weapon.mainhand}]`).successCount === 0) return;
        let n = e.dimension.getBlockFromRay(e.getHeadLocation(), e.getViewDirection(), {
            maxDistance: 20,
            includeLiquidBlocks: !0,
            includePassableBlocks: !0
        });
        if (!n) return;
        let a = n.block;
        a && e.onScreenDisplay.setActionBar(this.idToNiceName(a.typeId))
    }
    static idToNiceName(e) {
        return e.startsWith("ulkd_ess:") && (e = e.replace("ulkd_ess:", "essentials:")), e.replace(/(^|[-_:.])(\w)/g, n => n.toUpperCase()).replace(/[_:.]/g, " ")
    }
};
Je.HoverIdItem = "ulkd_ess:hover";
var Ie = Je;
import {
    BlockPermutation as Jn,
    EntityInventoryComponent as jt,
    ItemComponentTypes as qt,
    ItemEnchantableComponent as Yn,
    ItemStack as Zn,
    system as Qn,
    world as Zt
} from "@minecraft/server";
var dt = ["gf_wu:omni_tool"],
    qn = [],
    Hn = ["ftb_tc:shoel_handle"],
    Kn = [],
    Vt = {
        "minecraft:netherite_tier": [],
        "minecraft:diamond_tier": [],
        "minecraft:golden_tier": ["minecraft:diamond_tier_destructible", "minecraft:iron_tier_destructible", "minecraft:stone_tier_destructible"],
        "minecraft:iron_tier": ["minecraft:diamond_tier_destructible"],
        "minecraft:stone_tier": ["minecraft:diamond_tier_destructible", "minecraft:iron_tier_destructible"],
        "minecraft:wooden_tier": ["minecraft:diamond_tier_destructible", "minecraft:iron_tier_destructible", "minecraft:stone_tier_destructible"]
    },
    W = class {
        static isPickaxe(e) {
            return e.hasTag(Q.IsPickaxe) || qn.includes(e.typeId) || dt.includes(e.typeId) || e.hasTag("pickaxe") || e.typeId.includes("pickaxe")
        }
        static isShovel(e) {
            return e.hasTag(Q.IsShovel) || Hn.includes(e.typeId) || dt.includes(e.typeId) || e.hasTag("shovel") || e.typeId.includes("shovel")
        }
        static isAxe(e) {
            return e.hasTag(Q.IsAxe) || Kn.includes(e.typeId) || dt.includes(e.typeId) || e.hasTag("axe") || e.typeId.includes("axe") && !e.typeId.includes("pickaxe")
        }
        static shouldConsumeDurability(e) {
            return e === 0 ? !0 : Math.random() > 1 / (1 + e)
        }
        static canBreak(e, n) {
            let a = e.getTags(),
                i = n.getTags();
            for (let r in Vt)
                if (a.includes(r)) return !Vt[r].some(s => i.includes(s));
            return !0
        }
    };
var Xn = !1,
    Ht = 10,
    ea = function*(m, e) {
        try {
            let n = e.above();
            for (; n && m.logIds.includes(n.typeId);) n = n.above(), yield;
            return n && m.leavesIds.includes(n.typeId)
        } catch {
            return !1
        }
    },
    ta = [{
        logIds: ["minecraft:pale_oak_log", "minecraft:pale_oak_wood"],
        leavesIds: ["minecraft:pale_oak_leaves"],
        saplingId: "minecraft:pale_oak_sapling"
    }, {
        logIds: ["minecraft:oak_log", "spark:log_oak_mossy_1", "spark:oak_branch_stair", "minecraft:oak_wood", "spark:oak_branch_slant", "spark:oak_branch_slab_up", "spark:oak_branch_slab", "spark:tree_base_oak_mossy"],
        leavesIds: ["minecraft:oak_leaves"],
        saplingId: "minecraft:oak_sapling"
    }, {
        logIds: ["minecraft:spruce_log", "minecraft:spruce_wood", "spark:spruce_branch_slant", "spark:spruce_branch_slab_up", "spark:log_spruce_mossy_1", "spark:tree_base_spruce_mossy"],
        leavesIds: ["minecraft:spruce_leaves"],
        saplingId: "minecraft:spruce_sapling"
    }, {
        logIds: ["minecraft:birch_log", "spark:tree_base_birch_mossy", "spark:log_birch_mossy_1", "spark:birch_branch_stair", "spark:birch_branch_slant", "spark:birch_branch_slab", "spark:birch_branch_slab_up", "minecraft:birch_wood"],
        leavesIds: ["minecraft:birch_leaves"],
        saplingId: "minecraft:birch_sapling"
    }, {
        logIds: ["minecraft:jungle_log", "spark:tree_base_jungle_mossy", "spark:log_jungle_mossy_1", "minecraft:jungle_wood", "spark:jungle_branch_slant", "spark:jungle_branch_stair", "spark:jungle_branch_slab_up", "spark:jungle_branch_slab"],
        leavesIds: ["minecraft:jungle_leaves"],
        saplingId: "minecraft:jungle_sapling"
    }, {
        logIds: ["minecraft:acacia_log", "spark:acacia_branch_slant", "spark:acacia_branch_slab_up", "spark:acacia_branch_slab", "spark:acacia_branch_stair", "minecraft:acacia_wood"],
        leavesIds: ["minecraft:acacia_leaves"],
        saplingId: "minecraft:acacia_sapling"
    }, {
        logIds: ["minecraft:dark_oak_log", "spark:tree_base_big_oak_mossy", "spark:log_big_oak_mossy_1", "spark:dark_oak_branch_stair", "spark:dark_oak_branch_slant", "spark:dark_oak_branch_slab", "spark:dark_oak_branch_slab_up", "minecraft:dark_oak_wood"],
        leavesIds: ["minecraft:dark_oak_leaves"],
        saplingId: "minecraft:dark_oak_sapling"
    }, {
        logIds: ["minecraft:mangrove_log", "minecraft:mangrove_roots", "spark:mangrove_branch_stair", "spark:mangrove_branch_slant", "spark:mangrove_branch_slab", "spark:mangrove_branch_slab_up", "minecraft:mangrove_wood"],
        leavesIds: ["minecraft:mangrove_leaves"],
        saplingId: "minecraft:mangrove_sapling"
    }, {
        logIds: ["minecraft:cherry_log", "minecraft:cherry_wood", "spark:cherry_branch_slab_up", "spark:cherry_branch_slab", "spark:cherry_branch_slant", "spark:cherry_branch_stair"],
        leavesIds: ["minecraft:cherry_leaves"],
        saplingId: "minecraft:cherry_sapling"
    }, {
        logIds: ["minecraft:crimson_stem", "minecraft:shroomlight"],
        leavesIds: ["minecraft:nether_wart_block"]
    }, {
        logIds: ["minecraft:warped_stem", "minecraft:shroomlight"],
        leavesIds: ["minecraft:warped_wart_block"]
    }, {
        logIds: ["minecraft:mushroom_stem"],
        leavesIds: ["minecraft:red_mushroom_block", "minecraft:brown_mushroom_block"]
    }, {
        logIds: ["bf_rb:baobab_log", "bf_rb:baobab_wood"],
        leavesIds: ["bf_rb:bushy_baobab_leaves", "bf_rb:baobab_leaves", "bf_rb:baobab_canopy"]
    }, {
        logIds: ["bf_rb:coconut_log", "bf_rb:coconut_wood"],
        leavesIds: ["bf_rb:bushy_coconut_leaves", "bf_rb:coconut_leaves", "bf_rb:hanging_coconut_leaves", "bf_rb:coconut_canopy"]
    }, {
        logIds: ["bf_rb:ginkgo_log", "bf_rb:ginkgo_wood"],
        leavesIds: ["bf_rb:bushy_ginkgo_leaves", "bf_rb:ginkgo_leaves", "bf_rb:ginkgo_canopy"]
    }, {
        logIds: ["bf_rb:magnolia_log", "bf_rb:magnolia_wood"],
        leavesIds: ["bf_rb:bushy_magnolia_leaves", "bf_rb:magnolia_leaves", "bf_rb:magnolia_canopy"]
    }, {
        logIds: ["bf_rb:driping_maple_log", "bf_rb:maple_log", "bf_rb:driping_maple_wood", "bf_rb:maple_wood"],
        leavesIds: ["bf_rb:bushy_maple_leaves", "bf_rb:maple_leaves", "bf_rb:maple_canopy"]
    }, {
        logIds: ["bf_rb:orange_log", "bf_rb:orange_wood"],
        leavesIds: ["bf_rb:bushy_orange_leaves", "bf_rb:orange_fruit_leaves", "bf_rb:orange_leaves", "bf_rb:orange_canopy"]
    }, {
        logIds: ["bf_rb:pine_log", "bf_rb:pine_wood"],
        leavesIds: ["bf_rb:bushy_pine_leaves", "bf_rb:pine_leaves", "bf_rb:pine_canopy"]
    }, {
        logIds: ["bf_rb:pine_log", "bf_rb:pine_wood", "bf_rb:snowy_pine_log"],
        leavesIds: ["bf_rb:bushy_pine_leaves", "bf_rb:pine_leaves", "bf_rb:pine_canopy", "bf_rb:snowy_pine_leaves"]
    }, {
        logIds: ["bf_rb:redwood_log", "bf_rb:redwood_wood"],
        leavesIds: ["bf_rb:bushy_redwood_leaves", "bf_rb:redwood_leaves", "bf_rb:redwood_canopy"]
    }, {
        logIds: ["bf_rb:willow_log", "bf_rb:willow_wood"],
        leavesIds: ["bf_rb:bushy_willow_leaves", "bf_rb:hanging_willow_leaves", "bf_rb:willow_leaves", "bf_rb:willow_canopy"]
    }, {
        logIds: ["bf_rb:wisteria_log", "bf_rb:wisteria_wood"],
        leavesIds: ["bf_rb:bushy_wisteria_leaves", "bf_rb:flowering_wisteria_leaves", "bf_rb:hanging_flowering_wisteria_leaves", "bf_rb:wisteria_leaves", "bf_rb:wisteria_canopy"]
    }, {
        logIds: ["bf_rb:yellow_end_log", "bf_rb:yellow_end_wood"],
        leavesIds: ["bf_rb:bushy_yellow_end_leaves", "bf_rb:yellow_end_leaves"]
    }, {
        logIds: ["bf_rb:purple_end_log", "bf_rb:purple_end_wood"],
        leavesIds: ["bf_rb:bushy_purple_end_leaves", "bf_rb:purple_end_leaves"]
    }],
    na = [
        [
            ["minecraft:coal_ore"],
            ["minecraft:deepslate_coal_ore"]
        ],
        [
            ["minecraft:iron_ore"],
            ["minecraft:deepslate_iron_ore"]
        ],
        [
            ["minecraft:gold_ore"],
            ["minecraft:deepslate_gold_ore"]
        ],
        [
            ["minecraft:redstone_ore"],
            ["minecraft:lit_redstone_ore"],
            ["minecraft:deepslate_redstone_ore"],
            ["minecraft:lit_deepslate_redstone_ore"]
        ],
        [
            ["minecraft:lapis_ore"],
            ["minecraft:deepslate_lapis_ore"]
        ],
        [
            ["minecraft:diamond_ore"],
            ["minecraft:deepslate_diamond_ore"]
        ],
        [
            ["minecraft:emerald_ore"],
            ["minecraft:deepslate_emerald_ore"]
        ],
        [
            ["minecraft:copper_ore"],
            ["minecraft:deepslate_copper_ore"]
        ],
        [
            ["minecraft:quartz_ore"]
        ],
        [
            ["minecraft:nether_gold_ore"]
        ],
        [
            ["minecraft:ancient_debris"]
        ],
        [
            ["ftb_tc:cobalt_ore"]
        ],
        [
            ["ftb_tc:ardite_ore"]
        ],
        [
            ["nps_mot:adamantite_ore"]
        ],
        [
            ["nps_mot:aluminium_ore"],
            ["nps_mot:deepslate_aluminium_ore"]
        ],
        [
            ["nps_mot:amber_ore"],
            ["nps_mot:deepslate_amber_ore"]
        ],
        [
            ["nps_mot:benitoite_ore"]
        ],
        [
            ["nps_mot:bismuthinite_ore"]
        ],
        [
            ["nps_mot:black_diamond_ore"],
            ["nps_mot:deepslate_black_diamond_ore"]
        ],
        [
            ["nps_mot:black_opal_ore"],
            ["nps_mot:deepslate_black_opal_ore"]
        ],
        [
            ["nps_mot:blue_garnet_ore"],
            ["nps_mot:deepslate_blue_garnet_ore"]
        ],
        [
            ["nps_mot:cassiterite_ore"],
            ["nps_mot:deepslate_cassiterite_ore"]
        ],
        [
            ["nps_mot:chrome_ore"],
            ["nps_mot:deepslate_chrome_ore"]
        ],
        [
            ["nps_mot:citrine_ore"],
            ["nps_mot:deepslate_citrine_ore"]
        ],
        [
            ["nps_mot:cobalt_ore"],
            ["nps_mot:deepslate_cobalt_ore"]
        ],
        [
            ["nps_mot:fire_opal_ore"]
        ],
        [
            ["nps_mot:garnet_ore"]
        ],
        [
            ["nps_mot:green_diamond_ore"],
            ["nps_mot:deepslate_green_diamond_ore"]
        ],
        [
            ["nps_mot:iridium_ore"],
            ["nps_mot:deepslate_iridium_ore"]
        ],
        [
            ["nps_mot:lazurite_ore"]
        ],
        [
            ["nps_mot:lead_ore"],
            ["nps_mot:deepslate_lead_ore"]
        ],
        [
            ["nps_mot:nether_orichalc_ore"]
        ],
        [
            ["nps_mot:nickel_ore"],
            ["nps_mot:deepslate_nickel_ore"]
        ],
        [
            ["nps_mot:opal_ore"],
            ["nps_mot:deepslate_opal_ore"]
        ],
        [
            ["nps_mot:orange_diamond_ore"],
            ["nps_mot:deepslate_orange_diamond_ore"]
        ],
        [
            ["nps_mot:orichalc_ore"],
            ["nps_mot:deepslate_orichalc_ore"]
        ],
        [
            ["nps_mot:osmium_ore"],
            ["nps_mot:deepslate_osmium_ore"]
        ],
        [
            ["nps_mot:palladium_ore"],
            ["nps_mot:deepslate_palladium_ore"]
        ],
        [
            ["nps_mot:peridot_ore"]
        ],
        [
            ["nps_mot:pink_diamond_ore"],
            ["nps_mot:deepslate_pink_diamond_ore"]
        ],
        [
            ["nps_mot:platinum_ore"],
            ["nps_mot:deepslate_platinum_ore"]
        ],
        [
            ["nps_mot:purple_diamond_ore"],
            ["nps_mot:deepslate_purple_diamond_ore"]
        ],
        [
            ["nps_mot:red_diamond_ore"],
            ["nps_mot:deepslate_red_diamond_ore"]
        ],
        [
            ["nps_mot:rhodium_ore"],
            ["nps_mot:deepslate_rhodium_ore"]
        ],
        [
            ["nps_mot:ruby_ore"],
            ["nps_mot:deepslate_ruby_ore"]
        ],
        [
            ["nps_mot:ruthenium_ore"],
            ["nps_mot:deepslate_ruthenium_ore"]
        ],
        [
            ["nps_mot:sapphire_ore"],
            ["nps_mot:deepslate_sapphire_ore"]
        ],
        [
            ["nps_mot:spinel_ore"]
        ],
        [
            ["nps_mot:sulfur_ore"]
        ],
        [
            ["nps_mot:titanium_ore"],
            ["nps_mot:deepslate_titanium_ore"]
        ],
        [
            ["nps_mot:topaz_ore"],
            ["nps_mot:deepslate_topaz_ore"]
        ],
        [
            ["nps_mot:tungsten_ore"],
            ["nps_mot:deepslate_tungsten_ore"]
        ],
        [
            ["nps_mot:yellow_diamond_ore"],
            ["nps_mot:deepslate_yellow_diamond_ore"]
        ]
    ];

function F(m, e) {
    return [{
        typeId: m,
        amount: e,
        chances: [100, 100, 100]
    }, {
        typeId: m,
        amount: e,
        chances: [33, 50, 60]
    }, {
        typeId: m,
        amount: e,
        chances: [0, 25, 40]
    }, {
        typeId: m,
        amount: e,
        chances: [0, 0, 20]
    }]
}

function h(m, e, n = [1, 1], a = [1, 1], i = !1) {
    a[1] > 0 && (Qt[m] = a), Ce[m] = [{
        typeId: e,
        amount: n
    }], i && Ce[m].push({
        typeId: e,
        amount: n,
        chances: [33, 50, 60]
    }, {
        typeId: e,
        amount: n,
        chances: [0, 25, 40]
    }, {
        typeId: e,
        amount: n,
        chances: [0, 0, 20]
    })
}
var Ce = {
        "minecraft:jungle_leaves": [{
            typeId: "minecraft:jungle_sapling",
            amount: 1,
            chances: [2.78, 3.125, 4.17]
        }, {
            typeId: "minecraft:stick",
            amount: [1, 2],
            chances: [2.22, 2.5, 3.33]
        }],
        "minecraft:pale_oak_leaves": [{
            typeId: "minecraft:pale_oak_sapling",
            amount: 1,
            chances: [6.25, 8.33, 10]
        }, {
            typeId: "minecraft:stick",
            amount: [1, 2],
            chances: [2.22, 2.5, 3.33]
        }],
        "minecraft:oak_leaves": [{
            typeId: "minecraft:oak_sapling",
            amount: 1,
            chances: [6.25, 8.33, 10]
        }, {
            typeId: "minecraft:stick",
            amount: [1, 2],
            chances: [2.22, 2.5, 3.33]
        }, {
            typeId: "minecraft:apple",
            amount: 1,
            chances: [.556, .625, .833]
        }],
        "minecraft:dark_oak_leaves": [{
            typeId: "minecraft:dark_oak_sapling",
            amount: 1,
            chances: [6.25, 8.33, 10]
        }, {
            typeId: "minecraft:stick",
            amount: [1, 2],
            chances: [2.22, 2.5, 3.33]
        }, {
            typeId: "minecraft:apple",
            amount: 1,
            chances: [.556, .625, .833]
        }],
        "minecraft:acacia_leaves": [{
            typeId: "minecraft:acacia_sapling",
            amount: 1,
            chances: [6.25, 8.33, 10]
        }, {
            typeId: "minecraft:stick",
            amount: [1, 2],
            chances: [2.22, 2.5, 3.33]
        }],
        "minecraft:mangrove_leaves": [{
            typeId: "minecraft:mangrove_sapling",
            amount: 1,
            chances: [6.25, 8.33, 10]
        }, {
            typeId: "minecraft:stick",
            amount: [1, 2],
            chances: [2.22, 2.5, 3.33]
        }],
        "minecraft:cherry_leaves": [{
            typeId: "minecraft:cherry_sapling",
            amount: 1,
            chances: [6.25, 8.33, 10]
        }, {
            typeId: "minecraft:stick",
            amount: [1, 2],
            chances: [2.22, 2.5, 3.33]
        }],
        "minecraft:birch_leaves": [{
            typeId: "minecraft:birch_sapling",
            amount: 1,
            chances: [6.25, 8.33, 10]
        }, {
            typeId: "minecraft:stick",
            amount: [1, 2],
            chances: [2.22, 2.5, 3.33]
        }],
        "minecraft:spruce_leaves": [{
            typeId: "minecraft:spruce_sapling",
            amount: 1,
            chances: [6.25, 8.33, 10]
        }, {
            typeId: "minecraft:stick",
            amount: [1, 2],
            chances: [2.22, 2.5, 3.33]
        }],
        "minecraft:coal_ore": F("minecraft:coal", 1),
        "minecraft:deepslate_coal_ore": F("minecraft:coal", 1),
        "minecraft:diamond_ore": F("minecraft:diamond", 1),
        "minecraft:deepslate_diamond_ore": F("minecraft:diamond", 1),
        "minecraft:emerald_ore": F("minecraft:emerald", 1),
        "minecraft:deepslate_emerald_ore": F("minecraft:emerald", 1),
        "minecraft:iron_ore": F("minecraft:raw_iron", 1),
        "minecraft:deepslate_iron_ore": F("minecraft:raw_iron", 1),
        "minecraft:gold_ore": F("minecraft:raw_gold", 1),
        "minecraft:deepslate_gold_ore": F("minecraft:raw_gold", 1),
        "minecraft:quartz_ore": F("minecraft:quartz", 1),
        "minecraft:lapis_ore": F("minecraft:lapis_lazuli", [4, 9]),
        "minecraft:deepslate_lapis_ore": F("minecraft:lapis_lazuli", [4, 9]),
        "minecraft:redstone_ore": F("minecraft:redstone", [4, 5]),
        "minecraft:deepslate_redstone_ore": F("minecraft:redstone", [4, 5]),
        "minecraft:nether_gold_ore": F("minecraft:gold_nugget", [2, 6]),
        "minecraft:copper_ore": F("minecraft:raw_copper", [2, 5]),
        "minecraft:deepslate_copper_ore": F("minecraft:raw_copper", [2, 5])
    },
    Qt = {
        "minecraft:coal_ore": [0, 2],
        "minecraft:deepslate_coal_ore": [0, 2],
        "minecraft:diamond_ore": [3, 7],
        "minecraft:deepslate_diamond_ore": [3, 7],
        "minecraft:emerald_ore": [3, 7],
        "minecraft:deepslate_emerald_ore": [3, 7],
        "minecraft:lapis_ore": [2, 5],
        "minecraft:deepslate_lapis_ore": [2, 5],
        "minecraft:redstone_ore": [1, 5],
        "minecraft:deepslate_redstone_ore": [1, 5],
        "minecraft:quartz_ore": [2, 5],
        "minecraft:nether_gold_ore": [0, 1]
    },
    aa = "unlinked/essentials/doLogBreak",
    ia = "unlinked/essentials/doOreBreak";
h("nps_mot:lead_ore", "nps_mot:raw_lead", [1, 1], [0, 0], !0);
h("nps_mot:cassiterite_ore", "nps_mot:raw_cassiterite", [1, 1], [0, 0], !0);
h("nps_mot:deepslate_cassiterite_ore", "nps_mot:raw_cassiterite", [1, 1], [0, 0], !0);
h("nps_mot:aluminium_ore", "nps_mot:raw_aluminium", [1, 1], [0, 0], !0);
h("nps_mot:sulfur_ore", "nps_mot:sulfur");
h("nps_mot:benitoite_ore", "nps_mot:benitoite");
h("nps_mot:fire_opal_ore", "nps_mot:fire_opal");
h("nps_mot:garnet_ore", "nps_mot:garnet");
h("nps_mot:lazurite_ore", "nps_mot:lazurite");
h("nps_mot:peridot_ore", "nps_mot:peridot");
h("nps_mot:spinel_ore", "nps_mot:spinel");
h("nps_mot:amber_ore", "nps_mot:amber");
h("nps_mot:black_diamond_ore", "nps_mot:black_diamond");
h("nps_mot:black_opal_ore", "nps_mot:black_opal");
h("nps_mot:blue_garnet_ore", "nps_mot:blue_garnet");
h("nps_mot:chrome_ore", "nps_mot:raw_chrome");
h("nps_mot:citrine_ore", "nps_mot:citrine");
h("nps_mot:cobalt_ore", "nps_mot:raw_cobalt");
h("nps_mot:osmium_ore", "nps_mot:raw_osmium");
h("nps_mot:green_diamond_ore", "nps_mot:green_diamond");
h("nps_mot:iridium_ore", "nps_mot:raw_iridium");
h("nps_mot:nickel_ore", "nps_mot:raw_nickel");
h("nps_mot:opal_ore", "nps_mot:opal");
h("nps_mot:orange_diamond_ore", "nps_mot:orange_diamond");
h("nps_mot:orichalc_ore", "nps_mot:raw_orichalc", [1, 1], [0, 0], !0);
h("nps_mot:palladium_ore", "nps_mot:raw_palladium");
h("nps_mot:pink_diamond_ore", "nps_mot:pink_diamond");
h("nps_mot:platinum_ore", "nps_mot:raw_platinum");
h("nps_mot:purple_diamond_ore", "nps_mot:purple_diamond");
h("nps_mot:red_diamond_ore", "nps_mot:red_diamond");
h("nps_mot:rhodium_ore", "nps_mot:raw_rhodium");
h("nps_mot:ruby_ore", "nps_mot:ruby");
h("nps_mot:ruthenium_ore", "nps_mot:raw_ruthenium");
h("nps_mot:sapphire_ore", "nps_mot:sapphire");
h("nps_mot:topaz_ore", "nps_mot:topaz");
h("nps_mot:yellow_diamond_ore", "nps_mot:yellow_diamond");
h("nps_mot:deepslate_amber_ore", "nps_mot:amber");
h("nps_mot:deepslate_black_diamond_ore", "nps_mot:black_diamond");
h("nps_mot:deepslate_black_opal_ore", "nps_mot:black_opal");
h("nps_mot:deepslate_blue_garnet_ore", "nps_mot:blue_garnet");
h("nps_mot:deepslate_chrome_ore", "nps_mot:raw_chrome");
h("nps_mot:deepslate_citrine_ore", "nps_mot:citrine");
h("nps_mot:deepslate_cobalt_ore", "nps_mot:raw_cobalt");
h("nps_mot:deepslate_green_diamond_ore", "nps_mot:green_diamond");
h("nps_mot:deepslate_iridium_ore", "nps_mot:raw_iridium");
h("nps_mot:deepslate_nickel_ore", "nps_mot:raw_nickel");
h("nps_mot:deepslate_opal_ore", "nps_mot:opal");
h("nps_mot:deepslate_orange_diamond_ore", "nps_mot:orange_diamond");
h("nps_mot:deepslate_orichalc_ore", "nps_mot:raw_orichalc", [1, 1], [0, 0], !0);
h("nps_mot:deepslate_osmium_ore", "nps_mot:raw_osmium");
h("nps_mot:deepslate_palladium_ore", "nps_mot:raw_palladium");
h("nps_mot:deepslate_pink_diamond_ore", "nps_mot:pink_diamond");
h("nps_mot:deepslate_platinum_ore", "nps_mot:raw_platinum");
h("nps_mot:deepslate_purple_diamond_ore", "nps_mot:purple_diamond");
h("nps_mot:deepslate_red_diamond_ore", "nps_mot:red_diamond");
h("nps_mot:deepslate_rhodium_ore", "nps_mot:raw_rhodium");
h("nps_mot:deepslate_ruby_ore", "nps_mot:ruby");
h("nps_mot:deepslate_ruthenium_ore", "nps_mot:raw_ruthenium");
h("nps_mot:deepslate_sapphire_ore", "nps_mot:sapphire");
h("nps_mot:deepslate_topaz_ore", "nps_mot:topaz");
h("nps_mot:deepslate_yellow_diamond_ore", "nps_mot:yellow_diamond");
h("nps_mot:deepslate_lead_ore", "nps_mot:raw_lead", [1, 1], [0, 0], !0);
h("nps_mot:deepslate_aluminium_ore", "nps_mot:raw_aluminium", [1, 1], [0, 0], !0);
h("nps_mot:adamantite_ore", "nps_mot:raw_adamantite");
h("nps_mot:bismuthinite_ore", "nps_mot:bismuthinite");
var Be = class {
    static init() {
        Zt.afterEvents.playerBreakBlock.subscribe(e => {
            if (!e.itemStackBeforeBreak || !e.itemStackAfterBreak) return;
            let n = e.player,
                a = e.itemStackAfterBreak;
            if (W.isAxe(a)) {
                let i = ta.find(r => r.logIds.includes(e.brokenBlockPermutation.type.id));
                if (i) {
                    if (!k.treeBreaker.get(n)) return;
                    Ot((i.isTree ?? ea)(i, e.block)).then(r => {
                        if (r) {
                            let o = 5;
                            k.noTreeBreakerLimit.get(n) && (o = -1);
                            let s = i.leavesIds;
                            k.leavesBreaker.get(n) || (s = []);
                            let c, d = [];
                            k.treePlanter.get(n) && i.saplingId && (c = i.saplingId, e.block.below().typeId === "minecraft:dirt" && d.push(D.from(e.block.location))), this.bulkBreak(n, e.block, [...i.logIds.map(p => [p]), ...s.map(p => [p, !1])], aa, o, p => {
                                i.logIds.includes(p.typeId) && p.below()?.typeId === "minecraft:dirt" && d.push(D.from(p.location))
                            }).then(() => {
                                if (c && d.length > 0) {
                                    let p = new Map,
                                        y = [];
                                    for (let z of d) p.has(z.toString()) || (p.set(z.toString(), !0), y.push(z));
                                    let S = n.getComponent(jt.componentId);
                                    if (!S) return;
                                    let w = S.container;
                                    if (!w) return;
                                    let v = [];
                                    for (let z = 0; z < w.size; z++) {
                                        let R = w.getItem(z);
                                        R && c === R.typeId && v.push({
                                            slot: z,
                                            is: R
                                        })
                                    }
                                    if (v.length === 0) return;
                                    for (let z of y) {
                                        let R = v[0];
                                        if (!R) return;
                                        R.is.amount > 1 ? R.is.amount-- : (w.setItem(R.slot), v.splice(0, 1)), e.player.dimension.getBlock(z)?.setPermutation(Jn.resolve(c))
                                    }
                                    v.length > 0 && w.setItem(v[0].slot, v[0].is)
                                }
                            })
                        }
                    });
                    return
                }
            }
            if (W.isPickaxe(a)) {
                let i = na.find(r => r.some(o => o[0] === e.brokenBlockPermutation.type.id));
                if (i && W.canBreak(a, e.brokenBlockPermutation)) {
                    if (!k.oreBreaker.get(n)) return;
                    this.bulkBreak(n, e.block, i, ia);
                    return
                }
            }
        })
    }
    static bulkBreak(e, n, a, i, r = -1, o = () => {}) {
        let s = e.getComponent(jt.componentId);
        if (!s || !s.container) return Promise.resolve();
        let c = e.selectedSlotIndex,
            d = s.container.getItem(c);
        if (!d) return Promise.resolve();
        let p = d.getComponent(Yn.componentId),
            y = p ? p.getEnchantment("minecraft:unbreaking") : void 0,
            S = y ? y.level : 0,
            w = p ? p.getEnchantment("minecraft:fortune") : void 0,
            v = Math.max(0, Math.min(w ? w.level : 0, 3)),
            z = p ? p.getEnchantment("minecraft:silk_touch") : void 0,
            R = D.from(n.location),
            te = [];
        for (let U = -1; U <= 1; U++)
            for (let P = -1; P <= 1; P++)
                for (let j = -1; j <= 1; j++) {
                    if (U === 0 && P === 0 && j === 0) continue;
                    let ae = D.from(R).add(U, P, j);
                    te.push(ae)
                }
        let ye = new Set;
        ye.add(R.toString());
        let M = n.dimension,
            K = 1,
            ne = 0,
            Oe = k.fixedDurability.get(e);
        if (Oe) {
            let U = d.getComponent(qt.Durability);
            if (U.maxDurability - U.damage < Ht) return Promise.resolve();
            U.damage += Ht, s.container.setItem(c, d)
        }
        return i && e.runCommand(`execute positioned ${R.x} ${R.y} ${R.z} run function ${i}`), new Promise(U => {
            Qn.runJob(function*() {
                for (; te.length > 0;) {
                    let P = te.shift(),
                        j = M.getBlock(P);
                    if (!j) continue;
                    let ae = j.typeId;
                    if (a.some(Fe => Fe[0] === ae)) {
                        let Fe = a.find(V => V[0] === ae);
                        ye.add(P.toString());
                        let We = s.container.getItem(c);
                        if (!We || We.typeId !== d.typeId) {
                            U();
                            return
                        }
                        let at = !1,
                            _e;
                        if (!Oe) {
                            if (_e = We.getComponent(qt.Durability), !_e) {
                                U();
                                return
                            }
                            if (at = (Fe.length === 1 || Fe[1] !== !1) && K % 2 === 0 && W.shouldConsumeDurability(S), at && _e.damage >= _e.maxDurability) {
                                U();
                                return
                            }
                        }
                        if (o(j), z) {
                            let V = j.getItemStack();
                            V ? (M.runCommand(`setblock ${P.x} ${P.y} ${P.z} air`), M.spawnItem(V, D.from(P))) : M.runCommand(`setblock ${P.x} ${P.y} ${P.z} air destroy`), K++
                        } else if (v > 0 || ra(ae)) {
                            let V = oa(ae, v);
                            if (!V) M.runCommand(`setblock ${P.x} ${P.y} ${P.z} air destroy`), K++;
                            else {
                                let J = sa(ae);
                                J && J > 0 && (Xn ? ne += J : Yt(M, P, J)), M.runCommand(`setblock ${P.x} ${P.y} ${P.z} air`);
                                for (let ke of V) M.spawnItem(ke, D.from(P));
                                K++
                            }
                        } else M.runCommand(`setblock ${P.x} ${P.y} ${P.z} air destroy`), K++;
                        at && _e && (_e.damage += 1, s.container.setItem(c, We)), yield;
                        for (let V = -1; V <= 1; V++)
                            for (let J = -1; J <= 1; J++)
                                for (let ke = -1; ke <= 1; ke++) {
                                    let Ge = D.from(P).add(V, J, ke);
                                    ye.has(Ge.toString()) || r !== -1 && (Math.abs(Ge.x - R.x) > r || Math.abs(Ge.z - R.z) > r) || te.push(Ge)
                                }
                        yield
                    }
                }
                ne > 0 && Yt(M, D.from(R), ne), U()
            }())
        })
    }
};

function ra(m) {
    return Object.prototype.hasOwnProperty.call(Ce, m) && Ce[m].some(e => !e.chances)
}

function oa(m, e) {
    if (e < 0) return;
    let n = Ce[m];
    if (!n) return;
    let a = [];
    for (let i of n)
        if (!i.chances || Math.random() < i.chances[e - 1] / 100) {
            let r = 1;
            Array.isArray(i.amount) ? r = Math.floor(Math.random() * (i.amount[1] - i.amount[0] + 1)) + i.amount[0] : r = i.amount;
            let o = a.find(s => s.typeId === i.typeId);
            o ? o.amount += r : a.push(new Zn(i.typeId, r))
        } return a
}

function sa(m) {
    let e = Qt[m];
    if (e) return Math.floor(Math.random() * (e[1] - e[0] + 1)) + e[0]
}
var Kt = "minecraft:xp_orb",
    Jt = "ulkd_ess:xp_";

function Yt(m, e, n) {
    if (n === 0) return;
    if (n === 1) {
        m.spawnEntity(Kt, e);
        return
    }
    n % 2 === 1 && (m.spawnEntity(Kt, e), n--);
    let a = Zt.structureManager,
        i = Math.floor(n / 1024);
    for (let o = 0; o < i; o++) a.place(Jt + 1024, m, e, {
        includeEntities: !0,
        includeBlocks: !1
    });
    if (n = n % 1024 >> 1, n === 0) return;
    let r = 2;
    for (; n !== 0 || r < 1024;) n & 1 && a.place(Jt + r, m, e, {
        includeEntities: !0,
        includeBlocks: !1
    }), n = n >> 1, r = r << 1
}
import {
    EntityInventoryComponent as Xt,
    ItemStack as la,
    Player as ca,
    world as ma
} from "@minecraft/server";
import {
    ActionFormData as _a,
    ModalFormData as da
} from "@minecraft/server-ui";
var Ye = {
    acacia_boat: "Acacia Boat",
    acacia_button: "Acacia Button",
    acacia_chest_boat: "Acacia Boat with Chest",
    acacia_door: "Acacia Door",
    acacia_fence_gate: "Acacia Fence Gate",
    acacia_fence: "Acacia Fence",
    acacia_hanging_sign: "Acacia Hanging Sign",
    acacia_log: "Acacia Log",
    acacia_pressure_plate: "Acacia Pressure Plate",
    acacia_sign: "Acacia Sign",
    acacia_stairs: "Acacia Stairs",
    acacia_trapdoor: "Acacia Trapdoor",
    activator_rail: "Activator Rail",
    allay_spawn_egg: "Spawn Allay",
    amethyst_block: "Block of Amethyst",
    amethyst_cluster: "Amethyst Cluster",
    amethyst_shard: "Amethyst Shard",
    ancient_debris: "Ancient Debris",
    andesite_stairs: "Andesite Stairs",
    andesite: "Andesite",
    angler_pottery_shard: "Angler Pottery Shard",
    anvil: "Anvil",
    apple: "Apple",
    archer_pottery_shard: "Archer Pottery Shard",
    armor_stand: "Armor Stand",
    arms_up_pottery_shard: "Arms Up Pottery Shard",
    arrow: "Arrow",
    axolotl_bucket: "Bucket of Axolotl",
    axolotl_spawn_egg: "Spawn Axolotl",
    azalea_leaves_flowered: "Flowering Azalea Leaves",
    azalea_leaves: "Azalea Leaves",
    azalea: "Azalea",
    baked_potato: "Baked Potato",
    bamboo_block: "Block of Bamboo",
    bamboo_button: "Bamboo Button",
    bamboo_chest_raft: "Bamboo Raft with Chest",
    bamboo_door: "Bamboo Door",
    bamboo_fence_gate: "Bamboo Fence Gate",
    bamboo_fence: "Bamboo Fence",
    bamboo_hanging_sign: "Bamboo Hanging Sign",
    bamboo_mosaic_slab: "Bamboo Mosaic Slab",
    bamboo_mosaic_stairs: "Bamboo Mosaic Stairs",
    bamboo_mosaic: "Bamboo Mosaic",
    bamboo_planks: "Bamboo Planks",
    bamboo_pressure_plate: "Bamboo Pressure Plate",
    bamboo_raft: "Bamboo Raft",
    bamboo_sign: "Bamboo Sign",
    bamboo_slab: "Bamboo Slab",
    bamboo_stairs: "Bamboo Stairs",
    bamboo_trapdoor: "Bamboo Trapdoor",
    bamboo: "Bamboo",
    banner: "Banner",
    barrel: "Barrel",
    basalt: "Basalt",
    bat_spawn_egg: "Spawn Bat",
    beacon: "Beacon",
    bed: "Bed",
    bedrock: "Bedrock",
    bee_nest: "Bee Nest",
    bee_spawn_egg: "Spawn Bee",
    beef: "Raw Beef",
    beehive: "Beehive",
    beetroot_seeds: "Beetroot Seeds",
    beetroot_soup: "Beetroot Soup",
    beetroot: "Beetroot",
    bell: "Bell",
    big_dripleaf: "Big Dripleaf",
    birch_boat: "Birch Boat",
    birch_button: "Birch Button",
    birch_chest_boat: "Birch Boat with Chest",
    birch_door: "Birch Door",
    birch_fence_gate: "Birch Fence Gate",
    birch_fence: "Birch Fence",
    birch_hanging_sign: "Birch Hanging Sign",
    birch_log: "Birch Log",
    birch_pressure_plate: "Birch Pressure Plate",
    birch_sign: "Birch Sign",
    birch_stairs: "Birch Stairs",
    birch_trapdoor: "Birch Trapdoor",
    black_candle: "Black Candle",
    black_carpet: "Black Carpet",
    black_dye: "Black Dye",
    black_glazed_terracotta: "Black Glazed Terracotta",
    black_wool: "Black Wool",
    blackstone_slab: "Blackstone Slab",
    blackstone_stairs: "Blackstone Stairs",
    blackstone_wall: "Blackstone Wall",
    blackstone: "Blackstone",
    blade_pottery_shard: "Blade Pottery Shard",
    blast_furnace: "Blast Furnace",
    blaze_powder: "Blaze Powder",
    blaze_rod: "Blaze Rod",
    blaze_spawn_egg: "Spawn Blaze",
    blue_candle: "Blue Candle",
    blue_carpet: "Blue Carpet",
    blue_dye: "Blue Dye",
    blue_glazed_terracotta: "Blue Glazed Terracotta",
    blue_ice: "Blue Ice",
    blue_wool: "Blue Wool",
    bone_block: "Bone Block",
    bone_meal: "Bone Meal",
    bone: "Bone",
    book: "Book",
    bookshelf: "Bookshelf",
    bordure_indented_banner_pattern: "Bordure Indented",
    bow: "Bow",
    bowl: "Bowl",
    brain_coral: "Brain Coral",
    bread: "Bread",
    brewer_pottery_shard: "Brewer Pottery Shard",
    brewing_stand: "Brewing Stand",
    brick_block: "Brick Block",
    brick_stairs: "Brick Stairs",
    brick: "Brick",
    brown_candle: "Brown Candle",
    brown_carpet: "Brown Carpet",
    brown_dye: "Brown Dye",
    brown_glazed_terracotta: "Brown Glazed Terracotta",
    brown_mushroom_block: "Brown Mushroom Block",
    brown_mushroom: "Brown Mushroom",
    brown_wool: "Brown Wool",
    brush: "Brush",
    bubble_coral: "Bubble Coral",
    bucket: "Bucket",
    budding_amethyst: "Budding Amethyst",
    burn_pottery_shard: "Burn Pottery Shard",
    cactus: "Cactus",
    cake: "Cake",
    calcite: "Calcite",
    calibrated_sculk_sensor: "Calibrated Sculk Sensor",
    camel_spawn_egg: "Spawn Camel",
    campfire: "Campfire",
    candle: "Candle",
    carrot_on_a_stick: "Carrot on a Stick",
    carrot: "Carrot",
    cartography_table: "Cartography Table",
    carved_pumpkin: "Carved Pumpkin",
    cat_spawn_egg: "Spawn Cat",
    cauldron: "Cauldron",
    cave_spider_spawn_egg: "Spawn Cave Spider",
    chain: "Chain",
    chainmail_boots: "Chain Boots",
    chainmail_chestplate: "Chain Chestplate",
    chainmail_helmet: "Chain Helmet",
    chainmail_leggings: "Chain Leggings",
    charcoal: "Charcoal",
    cherry_boat: "Cherry Boat",
    cherry_button: "Cherry Button",
    cherry_chest_boat: "Cherry Boat with Chest",
    cherry_door: "Cherry Door",
    cherry_fence_gate: "Cherry Fence Gate",
    cherry_fence: "Cherry Fence",
    cherry_hanging_sign: "Cherry Hanging Sign",
    cherry_leaves: "Cherry Leaves",
    cherry_log: "Cherry Log",
    cherry_planks: "Cherry Planks",
    cherry_pressure_plate: "Cherry Pressure Plate",
    cherry_sapling: "Cherry Sapling",
    cherry_sign: "Cherry Sign",
    cherry_slab: "Cherry Slab",
    cherry_stairs: "Cherry Stairs",
    cherry_trapdoor: "Cherry Trapdoor",
    cherry_wood: "Cherry Wood",
    chest_minecart: "Minecart with Chest",
    chest: "Chest",
    chicken_spawn_egg: "Spawn Chicken",
    chicken: "Raw Chicken",
    chiseled_bookshelf: "Chiseled Bookshelf",
    chiseled_deepslate: "Chiseled Deepslate",
    chiseled_nether_bricks: "Chiseled Nether Bricks",
    chiseled_polished_blackstone: "Chiseled Polished Blackstone",
    chorus_flower: "Chorus Flower",
    chorus_fruit: "Chorus Fruit",
    chorus_plant: "Chorus Plant",
    clay_ball: "Clay",
    clay: "Clay Block",
    clock: "Clock",
    coal_block: "Block of Coal",
    coal_ore: "Coal Ore",
    coal: "Coal",
    coast_armor_trim_smithing_template: "Coast Armor Trim",
    cobbled_deepslate_slab: "Cobbled Deepslate Slab",
    cobbled_deepslate_stairs: "Cobbled Deepslate Stairs",
    cobbled_deepslate_wall: "Cobbled Deepslate Wall",
    cobbled_deepslate: "Cobbled Deepslate",
    cobblestone_wall: "Cobblestone Wall",
    cobblestone: "Cobblestone",
    cocoa_beans: "Cocoa Beans",
    cod_bucket: "Bucket of Cod",
    cod_spawn_egg: "Spawn Cod",
    cod: "Raw Cod",
    comparator: "Redstone Comparator",
    compass: "Compass",
    composter: "Composter",
    concrete_powder: "Concrete Powder",
    concrete: "Concrete",
    conduit: "Conduit",
    cooked_beef: "Cooked Beef",
    cooked_chicken: "Cooked Chicken",
    cooked_cod: "Cooked Cod",
    cooked_mutton: "Cooked Mutton",
    cooked_porkchop: "Cooked Porkchop",
    cooked_rabbit: "Cooked Rabbit",
    cooked_salmon: "Cooked Salmon",
    cookie: "Cookie",
    copper_block: "Block of Copper",
    copper_ingot: "Copper Ingot",
    copper_ore: "Copper Ore",
    coral_block: "Coral Block",
    coral_fan_dead: "Dead Coral Fan",
    coral_fan: "Coral Fan",
    cow_spawn_egg: "Spawn Cow",
    cracked_deepslate_bricks: "Cracked Deepslate Bricks",
    cracked_deepslate_tiles: "Cracked Deepslate Tiles",
    cracked_nether_bricks: "Cracked Nether Bricks",
    cracked_polished_blackstone_bricks: "Cracked Polished Blackstone Bricks",
    crafting_table: "Crafting Table",
    creeper_banner_pattern: "Creeper Charge",
    creeper_spawn_egg: "Spawn Creeper",
    crimson_button: "Crimson Button",
    crimson_door: "Crimson Door",
    crimson_fence_gate: "Crimson Fence Gate",
    crimson_fence: "Crimson Fence",
    crimson_fungus: "Crimson Fungus",
    crimson_hanging_sign: "Crimson Hanging Sign",
    crimson_hyphae: "Crimson Hyphae",
    crimson_nylium: "Crimson Nylium",
    crimson_planks: "Crimson Planks",
    crimson_pressure_plate: "Crimson Pressure Plate",
    crimson_roots: "Crimson Roots",
    crimson_sign: "Crimson Sign",
    crimson_slab: "Crimson Slab",
    crimson_stairs: "Crimson Stairs",
    crimson_stem: "Crimson Stem",
    crimson_trapdoor: "Crimson Trapdoor",
    crossbow: "Crossbow",
    crying_obsidian: "Crying Obsidian",
    cut_copper_slab: "Cut Copper Slab",
    cut_copper_stairs: "Cut Copper Stairs",
    cut_copper: "Cut Copper",
    cyan_candle: "Cyan Candle",
    cyan_carpet: "Cyan Carpet",
    cyan_dye: "Cyan Dye",
    cyan_glazed_terracotta: "Cyan Glazed Terracotta",
    cyan_wool: "Cyan Wool",
    danger_pottery_shard: "Danger Pottery Shard",
    dark_oak_button: "Dark Oak Button",
    dark_oak_chest_boat: "Dark Oak Boat",
    dark_oak_door: "Dark Oak Door",
    dark_oak_fence_gate: "Dark Oak Fence Gate",
    dark_oak_fence: "Dark Oak Fence",
    dark_oak_hanging_sign: "Dark Oak Hanging Sign",
    dark_oak_log: "Dark Oak Log",
    dark_oak_pressure_plate: "Dark Oak Pressure Plate",
    dark_oak_sign: "Dark Oak Sign",
    dark_oak_stairs: "Dark Oak Stairs",
    dark_oak_trapdoor: "Dark Oak Trapdoor",
    dark_prismarine_stairs: "Dark Prismarine Stairs",
    daylight_detector: "Daylight Sensor",
    dead_brain_coral: "Dead Brain Coral",
    dead_bubble_coral: "Dead Bubble Coral",
    dead_fire_coral: "Dead Fire Coral",
    dead_horn_coral: "Dead Horn Coral",
    dead_tube_coral: "Dead Tube Coral Fan",
    deadbush: "Dead Bush",
    decorated_pot: "Decorated Pot",
    deepslate_brick_slab: "Deepslate Brick Slab",
    deepslate_brick_stairs: "Deepslate Brick Stairs",
    deepslate_brick_wall: "Deepslate Brick Wall",
    deepslate_bricks: "Deepslate Bricks",
    deepslate_coal_ore: "Deepslate Coal Ore",
    deepslate_copper_ore: "Deepslate Copper Ore",
    deepslate_diamond_ore: "Deepslate Diamond Ore",
    deepslate_emerald_ore: "Deepslate Emerald Ore",
    deepslate_gold_ore: "Deepslate Gold Ore",
    deepslate_iron_ore: "Deepslate Iron Ore",
    deepslate_lapis_ore: "Deepslate Lapis Lazuli Ore",
    deepslate_redstone_ore: "Deepslate Redstone Ore",
    deepslate_tile_slab: "Deepslate Tile Slab",
    deepslate_tile_stairs: "Deepslate Tile Stairs",
    deepslate_tile_wall: "Deepslate Tile Wall",
    deepslate_tiles: "Deepslate Tiles",
    deepslate: "Deepslate",
    detector_rail: "Detector Rail",
    diamond_axe: "Diamond Axe",
    diamond_block: "Block of Diamond",
    diamond_boots: "Diamond Boots",
    diamond_chestplate: "Diamond Chestplate",
    diamond_helmet: "Diamond Helmet",
    diamond_hoe: "Diamond Hoe",
    diamond_horse_armor: "Diamond Horse Armor",
    diamond_leggings: "Diamond Leggings",
    diamond_ore: "Diamond Ore",
    diamond_pickaxe: "Diamond Pickaxe",
    diamond_shovel: "Diamond Shovel",
    diamond_sword: "Diamond Sword",
    diamond: "Diamond",
    diorite_stairs: "Diorite Stairs",
    diorite: "Diorite",
    dirt_with_roots: "Rooted Dirt",
    dirt: "Dirt",
    disc_fragment_5: "Music Disc - 5",
    dispenser: "Dispenser",
    dolphin_spawn_egg: "Spawn Dolphin",
    donkey_spawn_egg: "Spawn Donkey",
    double_plant: "Double Plant",
    dragon_breath: "Dragon's Breath",
    dragon_egg: "Dragon Egg",
    dried_kelp_block: "Dried Kelp Block",
    dried_kelp: "Dried Kelp",
    dripstone_block: "Dripstone Block",
    dropper: "Dropper",
    drowned_spawn_egg: "Spawn Drowned",
    dune_armor_trim_smithing_template: "Dune Armor Trim",
    echo_shard: "Echo Shard",
    egg: "Egg",
    elder_guardian_spawn_egg: "Spawn Elder Guardian",
    elytra: "Elytra",
    emerald_block: "Block of Emerald",
    emerald_ore: "Emerald Ore",
    emerald: "Emerald",
    empty_map: "Empty Map",
    enchanted_book: "Enchanted Book",
    enchanted_golden_apple: "Enchanted Apple",
    enchanting_table: "Enchantment Table",
    end_brick_stairs: "End Stone Brick Stairs",
    end_bricks: "End Stone Bricks",
    end_crystal: "End Crystal",
    end_portal_frame: "End Portal Frame",
    end_rod: "End Rod",
    end_stone: "End Stone",
    ender_chest: "Ender Chest",
    ender_dragon_spawn_egg: "Spawn Ender Dragon",
    ender_eye: "Eye of Ender",
    ender_pearl: "Ender Pearl",
    enderman_spawn_egg: "Spawn Enderman",
    endermite_spawn_egg: "Spawn Endermite",
    evoker_spawn_egg: "Spawn Evoker",
    experience_bottle: "Bottle o' Enchanting",
    explorer_pottery_shard: "Explorer Pottery Shard",
    exposed_copper: "Exposed Copper",
    exposed_cut_copper_slab: "Exposed Cut Copper Slab",
    exposed_cut_copper_stairs: "Exposed Cut Copper Stairs",
    exposed_cut_copper: "Exposed Cut Copper",
    eye_armor_trim_smithing_template: "Eye Armor Trim",
    farmland: "Farmland",
    feather: "Feather",
    fence_gate: "Oak Fence Gate",
    fermented_spider_eye: "Fermented Spider Eye",
    field_masoned_banner_pattern: "Field Masoned",
    fire_charge: "Fire Charge",
    fire_coral: "Fire Coral",
    firework_rocket: "Firework Rocket",
    firework_star: "Firework Star",
    fishing_rod: "Fishing Rod",
    fletching_table: "Fletching Table",
    flint_and_steel: "Flint and Steel",
    flint: "Flint",
    flower_banner_pattern: "Flower Charge",
    flower_pot: "Flower Pot",
    flowering_azalea: "Flowering Azalea",
    fox_spawn_egg: "Spawn Fox",
    frame: "Item Frame",
    friend_pottery_shard: "Friend Pottery Shard",
    frog_spawn_egg: "Spawn Frog",
    frog_spawn: "Frogspawn",
    furnace: "Furnace",
    ghast_spawn_egg: "Spawn Ghast",
    ghast_tear: "Ghast Tear",
    gilded_blackstone: "Gilded Blackstone",
    glass_bottle: "Glass Bottle",
    glass_pane: "Glass Pane",
    glass: "Glass",
    glistering_melon_slice: "Glistering Melon",
    globe_banner_pattern: "Globe",
    glow_berries: "Glow Berries",
    glow_frame: "Glow Item Frame",
    glow_ink_sac: "Glow Ink Sac",
    glow_lichen: "Glow Lichen",
    glow_squid_spawn_egg: "Spawn Glow Squid",
    glowstone_dust: "Glowstone Dust",
    glowstone: "Glowstone",
    goat_horn: "Goat Horn",
    goat_spawn_egg: "Spawn Goat",
    gold_block: "Block of Gold",
    gold_ingot: "Gold Ingot",
    gold_nugget: "Gold Nugget",
    gold_ore: "Gold Ore",
    golden_apple: "Golden Apple",
    golden_axe: "Golden Axe",
    golden_boots: "Golden Boots",
    golden_carrot: "Golden Carrot",
    golden_chestplate: "Golden Chestplate",
    golden_helmet: "Golden Helmet",
    golden_hoe: "Golden Hoe",
    golden_horse_armor: "Gold Horse Armor",
    golden_leggings: "Golden Leggings",
    golden_pickaxe: "Golden Pickaxe",
    golden_rail: "Powered Rail",
    golden_shovel: "Golden Shovel",
    golden_sword: "Golden Sword",
    granite_stairs: "Granite Stairs",
    granite: "Granite",
    grass_block: "Grass Block",
    grass_path: "Dirt Path",
    gravel: "Gravel",
    gray_candle: "Gray Candle",
    gray_carpet: "Gray Carpet",
    gray_dye: "Gray Dye",
    gray_glazed_terracotta: "Gray Glazed Terracotta",
    gray_wool: "Gray Wool",
    green_candle: "Green Candle",
    green_carpet: "Green Carpet",
    green_dye: "Green Dye",
    green_glazed_terracotta: "Green Glazed Terracotta",
    green_wool: "Green Wool",
    grindstone: "Grindstone",
    guardian_spawn_egg: "Spawn Guardian",
    gunpowder: "Gunpowder",
    hanging_roots: "Hanging Roots",
    hay_block: "Hay Bale",
    heart_of_the_sea: "Heart of the Sea",
    heart_pottery_shard: "Heart Pottery Shard",
    heartbreak_pottery_shard: "Heartbreak Pottery Shard",
    heavy_weighted_pressure_plate: "Weighted Pressure Plate (Heavy)",
    hoglin_spawn_egg: "Spawn Hoglin",
    honey_block: "Honey Block",
    honey_bottle: "Honey Bottle",
    honeycomb_block: "Honeycomb Block",
    honeycomb: "Honeycomb",
    hopper_minecart: "Minecart with Hopper",
    hopper: "Hopper",
    horn_coral: "Horn Coral",
    horse_spawn_egg: "Spawn Horse",
    host_armor_trim_smithing_template: "Host Armor Trim",
    howl_pottery_shard: "Howl Pottery Shard",
    husk_spawn_egg: "Spawn Husk",
    ice: "Ice",
    infested_deepslate: "Infested Deepslate",
    ink_sac: "Ink Sac",
    iron_axe: "Iron Axe",
    iron_bars: "Iron Bars",
    iron_block: "Block of Iron",
    iron_boots: "Iron Boots",
    iron_chestplate: "Iron Chestplate",
    iron_door: "Iron Door",
    iron_golem_spawn_egg: "Spawn Iron Golem",
    iron_helmet: "Iron Helmet",
    iron_hoe: "Iron Hoe",
    iron_horse_armor: "Iron Horse Armor",
    iron_ingot: "Iron Ingot",
    iron_leggings: "Iron Leggings",
    iron_nugget: "Iron Nugget",
    iron_ore: "Iron Ore",
    iron_pickaxe: "Iron Pickaxe",
    iron_shovel: "Iron Shovel",
    iron_sword: "Iron Sword",
    iron_trapdoor: "Iron Trapdoor",
    jukebox: "Jukebox",
    jungle_boat: "Jungle Boat",
    jungle_button: "Jungle Button",
    jungle_chest_boat: "Jungle Boat with Chest",
    jungle_door: "Jungle Door",
    jungle_fence_gate: "Jungle Fence Gate",
    jungle_fence: "Jungle Fence",
    jungle_hanging_sign: "Jungle Hanging Sign",
    jungle_log: "Jungle Log",
    jungle_pressure_plate: "Jungle Pressure Plate",
    jungle_sign: "Jungle Sign",
    jungle_stairs: "Jungle Stairs",
    jungle_trapdoor: "Jungle Trapdoor",
    kelp: "Kelp",
    ladder: "Ladder",
    lantern: "Lantern",
    lapis_block: "Block of Lapis Lazuli",
    lapis_lazuli: "Lapis Lazuli",
    lapis_ore: "Lapis Lazuli Ore",
    large_amethyst_bud: "Large Amethyst Bud",
    lava_bucket: "Lava Bucket",
    lead: "Lead",
    leather_boots: "Leather Boots",
    leather_chestplate: "Leather Tunic",
    leather_helmet: "Leather Cap",
    leather_horse_armor: "Leather Horse Armor",
    leather_leggings: "Leather Pants",
    leather: "Leather",
    leaves: "Leaves",
    leaves2: "Leaves",
    lectern: "Lectern",
    lever: "Lever",
    light_blue_candle: "Light Blue Candle",
    light_blue_carpet: "Light Blue Carpet",
    light_blue_dye: "Light Blue Dye",
    light_blue_glazed_terracotta: "Light Blue Glazed Terracotta",
    light_blue_wool: "Light Blue Wool",
    light_gray_candle: "Light Gray Candle",
    light_gray_carpet: "Light Gray Carpet",
    light_gray_dye: "Light Gray Dye",
    light_gray_wool: "Light Gray Wool",
    light_weighted_pressure_plate: "Weighted Pressure Plate (Light)",
    lightning_rod: "Lightning Rod",
    lime_candle: "Lime Candle",
    lime_carpet: "Lime Carpet",
    lime_dye: "Lime Dye",
    lime_glazed_terracotta: "Lime Glazed Terracotta",
    lime_wool: "Lime Wool",
    lingering_potion: "Lingering Potion",
    lit_pumpkin: "Jack o'Lantern",
    llama_spawn_egg: "Spawn Llama",
    lodestone_compass: "Lodestone Compass",
    lodestone: "Lodestone",
    loom: "Loom",
    magenta_candle: "Magenta Candle",
    magenta_carpet: "Magenta Carpet",
    magenta_dye: "Magenta Dye",
    magenta_glazed_terracotta: "Magenta Glazed Terracotta",
    magenta_wool: "Magenta Wool",
    magma_cream: "Magma Cream",
    magma_cube_spawn_egg: "Spawn Magma Cube",
    magma: "Magma Block",
    mangrove_boat: "Mangrove Boat",
    mangrove_button: "Mangrove Button",
    mangrove_chest_boat: "Mangrove Boat with Chest",
    mangrove_door: "Mangrove Door",
    mangrove_fence_gate: "Mangrove Fence Gate",
    mangrove_fence: "Mangrove Fence",
    mangrove_hanging_sign: "Mangrove Hanging Sign",
    mangrove_leaves: "Mangrove Leaves",
    mangrove_log: "Mangrove Log",
    mangrove_planks: "Mangrove Planks",
    mangrove_pressure_plate: "Mangrove Pressure Plate",
    mangrove_propagule: "Mangrove Propagule",
    mangrove_roots: "Mangrove Roots",
    mangrove_sign: "Mangrove Sign",
    mangrove_slab: "Mangrove Slab",
    mangrove_stairs: "Mangrove Stairs",
    mangrove_trapdoor: "Mangrove Trapdoor",
    mangrove_wood: "Mangrove Wood",
    medium_amethyst_bud: "Medium Amethyst Bud",
    melon_seeds: "Melon Seeds",
    melon_slice: "Melon",
    milk_bucket: "Milk",
    minecart: "Minecart",
    miner_pottery_shard: "Miner Pottery Shard",
    mob_spawner: "Monster Spawner",
    mojang_banner_pattern: "Thing",
    monster_egg: "Infested Stone",
    mooshroom_spawn_egg: "Spawn Mooshroom",
    moss_block: "Moss Block",
    moss_carpet: "Moss Carpet",
    mossy_cobblestone_stairs: "Mossy Cobblestone Stairs",
    mossy_cobblestone: "Mossy Cobblestone",
    mossy_stone_brick_stairs: "Mossy Stone Brick Stairs",
    mourner_pottery_shard: "Mourner Pottery Shard",
    mud_brick_slab: "Mud Brick Slab",
    mud_brick_stairs: "Mud Brick Stairs",
    mud_brick_wall: "Mud Brick Wall",
    mud_bricks: "Mud Bricks",
    mud: "Mud",
    muddy_mangrove_roots: "Muddy Mangrove Roots",
    mule_spawn_egg: "Spawn Mule",
    mushroom_stew: "Mushroom Stew",
    music_disc_11: "C418 - 11",
    music_disc_13: "C418 - 13",
    music_disc_5: "Samuel \xC5berg - 5",
    music_disc_blocks: "C418 - blocks",
    music_disc_cat: "C418 - cat",
    music_disc_chirp: "C418 - chirp",
    music_disc_far: "C418 - far",
    music_disc_mall: "C418 - mall",
    music_disc_mellohi: "C418 - mellohi",
    music_disc_otherside: "Lena Raine - otherside",
    music_disc_pigstep: "Lena Raine - Pigstep",
    music_disc_stal: "C418 - stal",
    music_disc_strad: "C418 - strad",
    music_disc_wait: "C418 - wait",
    music_disc_ward: "C418 - ward",
    mutton: "Raw Mutton",
    mycelium: "Mycelium",
    name_tag: "Name Tag",
    nautilus_shell: "Nautilus Shell",
    nether_brick_fence: "Nether Brick Fence",
    nether_brick_stairs: "Nether Brick Stairs",
    nether_brick: "Nether Brick Block",
    nether_gold_ore: "Nether Gold Ore",
    nether_sprouts: "Nether Sprouts",
    nether_star: "Nether Star",
    nether_wart_block: "Nether Wart Block",
    nether_wart: "Nether Wart",
    netherbrick: "Nether Brick",
    netherite_axe: "Netherite Axe",
    netherite_block: "Block of Netherite",
    netherite_boots: "Netherite Boots",
    netherite_chestplate: "Netherite Chestplate",
    netherite_helmet: "Netherite Helmet",
    netherite_hoe: "Netherite Hoe",
    netherite_ingot: "Netherite Ingot",
    netherite_leggings: "Netherite Leggings",
    netherite_pickaxe: "Netherite Pickaxe",
    netherite_scrap: "Netherite Scrap",
    netherite_shovel: "Netherite Shovel",
    netherite_sword: "Netherite Sword",
    netherite_upgrade_smithing_template: "Netherite Upgrade",
    netherrack: "Netherrack",
    normal_stone_stairs: "Stone Stairs",
    noteblock: "Note Block",
    oak_boat: "Oak Boat",
    oak_chest_boat: "Oak Boat with Chest",
    oak_fence: "Oak Fence",
    oak_hanging_sign: "Oak Hanging Sign",
    oak_log: "Oak Log",
    oak_sign: "Oak Sign",
    oak_stairs: "Oak Stairs",
    observer: "Observer",
    obsidian: "Obsidian",
    ocelot_spawn_egg: "Spawn Ocelot",
    ochre_froglight: "Ochre Froglight",
    orange_candle: "Orange Candle",
    orange_carpet: "Orange Carpet",
    orange_dye: "Orange Dye",
    orange_glazed_terracotta: "Orange Glazed Terracotta",
    orange_wool: "Orange Wool",
    oxidized_copper: "Oxidized Copper",
    oxidized_cut_copper_slab: "Oxidized Cut Copper Slab",
    oxidized_cut_copper_stairs: "Oxidized Cut Copper Stairs",
    oxidized_cut_copper: "Oxidized Cut Copper",
    packed_ice: "Packed Ice",
    packed_mud: "Packed Mud",
    painting: "Painting",
    panda_spawn_egg: "Spawn Panda",
    paper: "Paper",
    parrot_spawn_egg: "Spawn Parrot",
    pearlescent_froglight: "Pearlescent Froglight",
    phantom_membrane: "Phantom Membrane",
    phantom_spawn_egg: "Spawn Phantom",
    pig_spawn_egg: "Spawn Pig",
    piglin_banner_pattern: "Snout",
    piglin_brute_spawn_egg: "Spawn Piglin Brute",
    piglin_spawn_egg: "Spawn Piglin",
    pillager_spawn_egg: "Spawn Pillager",
    pink_candle: "Pink Candle",
    pink_carpet: "Pink Carpet",
    pink_dye: "Pink Dye",
    pink_glazed_terracotta: "Pink Glazed Terracotta",
    pink_petals: "Pink Petals",
    pink_wool: "Pink Wool",
    piston: "Piston",
    pitcher_plant: "Pitcher Plant",
    pitcher_pod: "Pitcher Pod",
    planks: "Wooden Planks",
    plenty_pottery_shard: "Plenty Pottery Shard",
    podzol: "Podzol",
    pointed_dripstone: "Pointed Dripstone",
    poisonous_potato: "Poisonous Potato",
    polar_bear_spawn_egg: "Spawn Polar Bear",
    polished_andesite_stairs: "Polished Andesite Stairs",
    polished_basalt: "Polished Basalt",
    polished_blackstone_brick_slab: "Polished Blackstone Brick Slab",
    polished_blackstone_brick_stairs: "Polished Blackstone Brick Stairs",
    polished_blackstone_brick_wall: "Polished Blackstone Brick Wall",
    polished_blackstone_bricks: "Polished Blackstone Bricks",
    polished_blackstone_button: "Polished Blackstone Button",
    polished_blackstone_pressure_plate: "Polished Blackstone Pressure Plate",
    polished_blackstone_slab: "Polished Blackstone Slab",
    polished_blackstone_stairs: "Polished Blackstone Stairs",
    polished_blackstone_wall: "Polished Blackstone Wall",
    polished_blackstone: "Polished Blackstone",
    polished_deepslate_slab: "Polished Deepslate Slab",
    polished_deepslate_stairs: "Polished Deepslate Stairs",
    polished_deepslate_wall: "Polished Deepslate Wall",
    polished_deepslate: "Polished Deepslate",
    polished_diorite_stairs: "Polished Diorite Stairs",
    polished_granite_stairs: "Polished Granite Stairs",
    popped_chorus_fruit: "Popped Chorus Fruit",
    porkchop: "Raw Porkchop",
    potato: "Potato",
    potion: "Potion",
    powder_snow_bucket: "Powder Snow Bucket",
    prismarine_bricks_stairs: "Prismarine Brick Stairs",
    prismarine_crystals: "Prismarine Crystals",
    prismarine_shard: "Prismarine Shard",
    prismarine_stairs: "Prismarine Stairs",
    prismarine: "Prismarine",
    prize_pottery_shard: "Prize Pottery Shard",
    pufferfish_bucket: "Bucket of Pufferfish",
    pufferfish_spawn_egg: "Spawn Pufferfish",
    pufferfish: "Pufferfish",
    pumpkin_pie: "Pumpkin Pie",
    pumpkin_seeds: "Pumpkin Seeds",
    pumpkin: "Pumpkin",
    purple_candle: "Purple Candle",
    purple_carpet: "Purple Carpet",
    purple_dye: "Purple Dye",
    purple_glazed_terracotta: "Purple Glazed Terracotta",
    purple_wool: "Purple Wool",
    purpur_block: "Purpur Block",
    purpur_stairs: "Purpur Stairs",
    quartz_block: "Block of Quartz",
    quartz_bricks: "Quartz Bricks",
    quartz_ore: "Nether Quartz Ore",
    quartz_stairs: "Quartz Stairs",
    quartz: "Nether Quartz",
    rabbit_foot: "Rabbit's Foot",
    rabbit_hide: "Rabbit Hide",
    rabbit_spawn_egg: "Spawn Rabbit",
    rabbit_stew: "Rabbit Stew",
    rabbit: "Raw Rabbit",
    rail: "Rail",
    raiser_armor_trim_smithing_template: "Raiser Armor Trim",
    ravager_spawn_egg: "Spawn Ravager",
    raw_copper_block: "Block of Raw Copper",
    raw_copper: "Raw Copper",
    raw_gold_block: "Block of Raw Gold",
    raw_gold: "Raw Gold",
    raw_iron_block: "Block of Raw Iron",
    raw_iron: "Raw Iron",
    recovery_compass: "Recovery Compass",
    red_candle: "Red Candle",
    red_carpet: "Red Carpet",
    red_dye: "Red Dye",
    red_flower: "Flower",
    red_glazed_terracotta: "Red Glazed Terracotta",
    red_mushroom_block: "Red Mushroom Block",
    red_mushroom: "Red Mushroom",
    red_nether_brick_stairs: "Red Nether Brick Stairs",
    red_nether_brick: "Red Nether Brick",
    red_sandstone_stairs: "Red Sandstone Stairs",
    red_sandstone: "Red Sandstone",
    red_wool: "Red Wool",
    redstone_block: "Block of Redstone",
    redstone_lamp: "Redstone Lamp",
    redstone_ore: "Redstone Ore",
    redstone_torch: "Redstone Torch",
    redstone: "Redstone Dust",
    reinforced_deepslate: "Reinforced Deepslate",
    repeater: "Redstone Repeater",
    respawn_anchor: "Respawn Anchor",
    rib_armor_trim_smithing_template: "Rib Armor Trim",
    rotten_flesh: "Rotten Flesh",
    saddle: "Saddle",
    salmon_bucket: "Bucket of Salmon",
    salmon_spawn_egg: "Spawn Salmon",
    salmon: "Raw Salmon",
    sand: "Sand",
    sandstone_stairs: "Sandstone Stairs",
    sandstone: "Sandstone",
    sapling: "Sapling",
    scaffolding: "Scaffolding",
    sculk_catalyst: "Sculk Catalyst",
    sculk_sensor: "Sculk Sensor",
    sculk_shrieker: "Sculk Shrieker",
    sculk_vein: "Sculk Vein",
    sculk: "Sculk",
    scute: "Scute",
    sea_lantern: "Sea Lantern",
    sea_pickle: "Sea Pickle",
    seagrass: "Seagrass",
    sentry_armor_trim_smithing_template: "Sentry Armor Trim",
    shaper_armor_trim_smithing_template: "Shaper Armor Trim",
    sheaf_pottery_shard: "Sheaf Pottery Shard",
    shears: "Shears",
    sheep_spawn_egg: "Spawn Sheep",
    shelter_pottery_shard: "Shelter Pottery Shard",
    shield: "Shield",
    shroomlight: "Shroomlight",
    shulker_box: "Shulker Box",
    shulker_shell: "Shulker Shell",
    shulker_spawn_egg: "Spawn Shulker",
    silence_armor_trim_smithing_template: "Silence Armor Trim",
    silver_glazed_terracotta: "Light Gray Glazed Terracotta",
    silverfish_spawn_egg: "Spawn Silverfish",
    skeleton_horse_spawn_egg: "Spawn Skeleton Horse",
    skeleton_spawn_egg: "Spawn Skeleton",
    skull_banner_pattern: "Skull Charge",
    skull_pottery_shard: "Skull Pottery Shard",
    skull: "Skull",
    slime_ball: "Slimeball",
    slime_spawn_egg: "Spawn Slime",
    slime: "Slime Block",
    small_amethyst_bud: "Small Amethyst Bud",
    small_dripleaf_block: "Small Dripleaf",
    smithing_table: "Smithing Table",
    smoker: "Smoker",
    smooth_basalt: "Smooth Basalt",
    smooth_quartz_stairs: "Smooth Quartz Stairs",
    smooth_red_sandstone_stairs: "Smooth Red Sandstone Stairs",
    smooth_sandstone_stairs: "Smooth Sandstone Stairs",
    smooth_stone: "Smooth Stone",
    sniffer_egg: "Sniffer Egg",
    sniffer_spawn_egg: "Spawn Sniffer",
    snort_pottery_shard: "Snort Pottery Shard",
    snout_armor_trim_smithing_template: "Snout Armor Trim",
    snow_golem_spawn_egg: "Spawn Snow Golem",
    snow_layer: "Top Snow",
    snow: "Snow",
    snowball: "Snowball",
    soul_campfire: "Soul Campfire",
    soul_lantern: "Soul Lantern",
    soul_sand: "Soul Sand",
    soul_soil: "Soul Soil",
    soul_torch: "Soul Torch",
    spider_eye: "Spider Eye",
    spider_spawn_egg: "Spawn Spider",
    spire_armor_trim_smithing_template: "Spire Armor Trim",
    splash_potion: "Splash Potion",
    sponge: "Sponge",
    spore_blossom: "Spore Blossom",
    spruce_boat: "Spruce Boat",
    spruce_button: "Spruce Button",
    spruce_chest_boat: "Spruce Boat with Chest",
    spruce_door: "Spruce Door",
    spruce_fence_gate: "Spruce Fence Gate",
    spruce_fence: "Spruce Fence",
    spruce_hanging_sign: "Spruce Hanging Sign",
    spruce_log: "Spruce Log",
    spruce_pressure_plate: "Spruce Pressure Plate",
    spruce_sign: "Spruce Sign",
    spruce_stairs: "Spruce Stairs",
    spruce_trapdoor: "Spruce Trapdoor",
    spyglass: "Spyglass",
    squid_spawn_egg: "Spawn Squid",
    stained_glass_pane: "Stained Glass Pane",
    stained_glass: "Stained Glass",
    stained_hardened_clay: "Terracotta",
    stick: "Stick",
    sticky_piston: "Sticky Piston",
    stone_axe: "Stone Axe",
    stone_block_slab2: "Slab",
    stone_block_slab3: "Slab",
    stone_block_slab4: "Slab",
    stone_brick_stairs: "Stone Brick Stairs",
    stone_button: "Stone Button",
    stone_hoe: "Stone Hoe",
    stone_pickaxe: "Stone Pickaxe",
    stone_pressure_plate: "Stone Pressure Plate",
    stone_shovel: "Stone Shovel",
    stone_stairs: "Cobblestone Stairs",
    stone_sword: "Stone Sword",
    stone: "Stone",
    stonebrick: "Stone Bricks",
    stonecutter_block: "Stonecutter",
    stray_spawn_egg: "Spawn Stray",
    strider_spawn_egg: "Spawn Strider",
    string: "String",
    stripped_acacia_log: "Stripped Acacia Log",
    stripped_bamboo_block: "Block of Stripped Bamboo",
    stripped_birch_log: "Stripped Birch Log",
    stripped_cherry_log: "Stripped Cherry Log",
    stripped_cherry_wood: "Stripped Cherry Wood",
    stripped_crimson_hyphae: "Stripped Crimson Hyphae",
    stripped_crimson_stem: "Stripped Crimson Stem",
    stripped_dark_oak_log: "Stripped Dark Oak Log",
    stripped_jungle_log: "Stripped Jungle Log",
    stripped_mangrove_log: "Stripped Mangrove Log",
    stripped_mangrove_wood: "Stripped Mangrove Wood",
    stripped_oak_log: "Stripped Oak Log",
    stripped_spruce_log: "Stripped Spruce Log",
    stripped_warped_hyphae: "Stripped Warped Hyphae",
    stripped_warped_stem: "Stripped Warped Stem",
    sugar_cane: "Sugar Canes",
    sugar: "Sugar",
    suspicious_gravel: "Suspicious Gravel",
    suspicious_sand: "Suspicious Sand",
    sweet_berries: "Sweet Berries",
    tadpole_bucket: "Bucket of Tadpole",
    tadpole_spawn_egg: "Spawn Tadpole",
    tallgrass: "Grass",
    target: "Target",
    tide_armor_trim_smithing_template: "Tide Armor Trim",
    tinted_glass: "Tinted Glass",
    tnt_minecart: "Minecart with TNT",
    tnt: "TNT",
    torch: "Torch",
    torchflower_seeds: "Torchflower Seeds",
    torchflower: "Torchflower",
    totem_of_undying: "Totem of Undying",
    trader_llama_spawn_egg: "Spawn Trader Llama",
    trapdoor: "Oak Trapdoor",
    trapped_chest: "Trapped Chest",
    trident: "Trident",
    tripwire_hook: "Tripwire Hook",
    tropical_fish_bucket: "Bucket of Tropical Fish",
    tropical_fish_spawn_egg: "Spawn Tropical Fish",
    tropical_fish: "Tropical Fish",
    tube_coral: "Tube Coral Fan",
    tuff: "Tuff",
    turtle_egg: "Sea Turtle Egg",
    turtle_helmet: "Turtle Shell",
    turtle_spawn_egg: "Spawn Sea Turtle",
    twisting_vines: "Twisting Vines",
    undyed_shulker_box: "Shulker Box",
    verdant_froglight: "Verdant Froglight",
    vex_armor_trim_smithing_template: "Vex Armor Trim",
    vex_spawn_egg: "Spawn Vex",
    villager_spawn_egg: "Spawn Villager",
    vindicator_spawn_egg: "Spawn Vindicator",
    vine: "Vines",
    wandering_trader_spawn_egg: "Spawn Wandering Trader",
    ward_armor_trim_smithing_template: "Ward Armor Trim",
    warden_spawn_egg: "Spawn Warden",
    warped_button: "Warped Button",
    warped_door: "Warped Door",
    warped_fence_gate: "Warped Fence Gate",
    warped_fence: "Warped Fence",
    warped_fungus_on_a_stick: "Warped Fungus on a Stick",
    warped_fungus: "Warped Fungus",
    warped_hanging_sign: "Warped Hanging Sign",
    warped_hyphae: "Warped Hyphae",
    warped_nylium: "Warped Nylium",
    warped_planks: "Warped Planks",
    warped_pressure_plate: "Warped Pressure Plate",
    warped_roots: "Warped Roots",
    warped_sign: "Warped Sign",
    warped_slab: "Warped Slab",
    warped_stairs: "Warped Stairs",
    warped_stem: "Warped Stem",
    warped_trapdoor: "Warped Trapdoor",
    warped_wart_block: "Warped Wart Block",
    water_bucket: "Water Bucket",
    waterlily: "Lily Pad",
    waxed_copper: "Waxed Block of Copper",
    waxed_cut_copper_slab: "Waxed Cut Copper Slab",
    waxed_cut_copper_stairs: "Waxed Cut Copper Stairs",
    waxed_cut_copper: "Waxed Cut Copper",
    waxed_exposed_copper: "Waxed Exposed Copper",
    waxed_exposed_cut_copper_slab: "Waxed Exposed Cut Copper Slab",
    waxed_exposed_cut_copper_stairs: "Waxed Exposed Cut Copper Stairs",
    waxed_exposed_cut_copper: "Waxed Exposed Cut Copper",
    waxed_oxidized_copper: "Waxed Oxidized Copper",
    waxed_oxidized_cut_copper_slab: "Waxed Oxidized Cut Copper Slab",
    waxed_oxidized_cut_copper_stairs: "Waxed Oxidized Cut Copper Stairs",
    waxed_oxidized_cut_copper: "Waxed Oxidized Cut Copper",
    waxed_weathered_copper: "Waxed Weathered Copper",
    waxed_weathered_cut_copper_slab: "Waxed Weathered Cut Copper Slab",
    waxed_weathered_cut_copper_stairs: "Waxed Weathered Cut Copper Stairs",
    waxed_weathered_cut_copper: "Waxed Weathered Cut Copper",
    wayfinder_armor_trim_smithing_template: "Wayfinder Armor Trim",
    weathered_copper: "Weathered Copper",
    weathered_cut_copper_slab: "Weathered Cut Copper Slab",
    weathered_cut_copper_stairs: "Weathered Cut Copper Stairs",
    weathered_cut_copper: "Weathered Cut Copper",
    web: "Cobweb",
    weeping_vines: "Weeping Vines",
    wheat_seeds: "Seeds",
    wheat: "Wheat",
    white_candle: "White Candle",
    white_carpet: "White Carpet",
    white_dye: "White Dye",
    white_glazed_terracotta: "White Glazed Terracotta",
    white_wool: "White Wool",
    wild_armor_trim_smithing_template: "Wild Armor Trim",
    witch_spawn_egg: "Spawn Witch",
    wither_rose: "Wither Rose",
    wither_skeleton_spawn_egg: "Spawn Wither Skeleton",
    wither_spawn_egg: "Spawn Wither",
    wolf_spawn_egg: "Spawn Wolf",
    wood: "Wood",
    wooden_axe: "Wooden Axe",
    wooden_button: "Oak Button",
    wooden_door: "Oak Door",
    wooden_hoe: "Wooden Hoe",
    wooden_pickaxe: "Wooden Pickaxe",
    wooden_pressure_plate: "Oak Pressure Plate",
    wooden_shovel: "Wooden Shovel",
    wooden_slab: "Wood Slab",
    wooden_sword: "Wooden Sword",
    writable_book: "Book & Quill",
    yellow_candle: "Yellow Candle",
    yellow_carpet: "Yellow Carpet",
    yellow_dye: "Yellow Dye",
    yellow_flower: "Dandelion",
    yellow_glazed_terracotta: "Yellow Glazed Terracotta",
    yellow_wool: "Yellow Wool",
    zoglin_spawn_egg: "Spawn Zoglin",
    zombie_horse_spawn_egg: "Spawn Zombie Horse",
    zombie_pigman_spawn_egg: "Spawn Zombified Piglin",
    zombie_spawn_egg: "Spawn Zombie",
    zombie_villager_spawn_egg: "Spawn Zombie Villager"
};
var ua = L.getLogger("Incinerator"),
    De = class {
        constructor() {
            this.onUse = this.onUse.bind(this), this.onUseOn = this.onUseOn.bind(this)
        }
        onUse(e) {
            A.debounce("Incinerator.itemUse", e.source) || $.incinerate(e.source)
        }
        onUseOn(e) {
            if (e.source instanceof ca) {
                if (A.debounce("Incinerator.itemUse", e.source)) return;
                $.incinerate(e.source)
            }
        }
    };
De.id = "ulkd_ess:incinerator";
var ut = class extends q {
        constructor() {
            super(...arguments);
            this.Icons = ["textures/ui/toggle_off", "textures/ui/toggle_on_hover", "textures/ui/cancel"]
        }
        getFormId() {
            return "incinerator"
        }
        render(n, a, i) {
            let r = $.getIncineratorData(n),
                o = new Map;
            for (let d of $.DefaultMaterials) o.set(d, !1);
            for (let d of r.materials) o.set(d, !0);
            let s = Array.from(o.keys()).sort(),
                c = new _a;
            c.title(a);
            for (let d of s) {
                let p = o.get(d);
                c.button(Ye[d.replace("minecraft:", "")] ?? d, this.Icons[p ? $.DefaultMaterials.includes(d) ? 1 : 2 : 0])
            }
            c.button("Add Material", "textures/ui/plus"), c.button("Back", "textures/ui/import"), x.forceShow(n, c, d => {
                if (d.canceled || d.selection === void 0) return;
                if (d.selection >= s.length) {
                    if (d.selection === s.length) {
                        let y = new da;
                        y.title("Add Material"), y.textField("Item ID", "minecraft:stone"), y.submitButton("Add"), x.forceShow(n, y, S => {
                            if (S.canceled) return;
                            if (S.formValues === void 0 || S.formValues.length === 0 || S.formValues[0] === void 0) {
                                this.render(n, a);
                                return
                            }
                            let w = S.formValues[0];
                            if (w) {
                                if (r.materials.includes(w)) {
                                    this.render(n, a);
                                    return
                                }
                                try {
                                    if (!new la(w)) throw new Error("Invalid item ID")
                                } catch (v) {
                                    n.sendMessage(`${f.RED}${w} is not a valid item ID`), ua.warn(v);
                                    return
                                }
                                r.materials.push(w), $.setIncineratorData(n, r), this.render(n, a)
                            }
                        })
                    } else this.back();
                    return
                }
                let p = s[d.selection];
                p && (r.materials.includes(p) ? r.materials.splice(r.materials.indexOf(p), 1) : r.materials.push(p), $.setIncineratorData(n, r), this.render(n, a))
            })
        }
    },
    be = class be {
        static getIncineratorData(e) {
            let n = e.id;
            if (!this.cache.has(n)) {
                let a = e.getDynamicProperty(this.IncineratorDataProperty);
                if (a) {
                    let i = JSON.parse(a);
                    return this.cache.set(n, i), i
                } else {
                    let i = e.getTags(),
                        r = this.DefaultMaterials.slice();
                    for (let s of i)
                        if (s.startsWith("unlinked.essentials.incinerator.")) {
                            let c = "minecraft:" + s.substring(32);
                            r.includes(c) && r.splice(r.indexOf(c), 1)
                        } let o = {
                        materials: r
                    };
                    return this.cache.set(n, o), e.setDynamicProperty(this.IncineratorDataProperty, JSON.stringify(o)), o
                }
            }
            return this.cache.get(n)
        }
        static setIncineratorData(e, n) {
            e.setDynamicProperty(this.IncineratorDataProperty, JSON.stringify(n)), this.cache.set(e.id, n)
        }
        static init() {
            ma.beforeEvents.worldInitialize.subscribe(e => {
                e.itemComponentRegistry.registerCustomComponent(De.id, new De)
            }), x.registerCustomForm(new ut)
        }
        static incinerate(e) {
            let n = e.getComponent(Xt.componentId);
            if (!n || !(n instanceof Xt)) return;
            let a = n.container;
            if (!a) return;
            let i = be.getIncineratorData(e);
            if (i.materials.length === 0) return;
            let r = 0;
            for (let o = 0; o < a.size; o++) {
                let s = a.getItem(o);
                s && i.materials.includes(s.typeId) && (r += s.amount, a.setItem(o))
            }
            e.sendMessage(`\xA76${r} Junk Items Incinerated!`), e.playSound("unlinked.essentials.incinerate", {
                location: e.location
            })
        }
    };
be.DefaultMaterials = ["minecraft:cobblestone", "minecraft:dirt", "minecraft:gravel", "minecraft:tuff", "minecraft:cobbled_deepslate", "minecraft:netherrack", "minecraft:sand", "minecraft:deepslate"], be.IncineratorDataProperty = "ulkd_ess:incinerator", be.cache = new Map;
var $ = be;
var pt = {};
we(pt, {
    $schema: () => pa,
    default: () => ha,
    forms: () => fa
});
var pa = "../../schemas/forms.schema.json",
    fa = {
        guidebook: {
            type: "buttons",
            title: "Essentials Guidebook",
            buttons: [{
                text: "Info",
                icon: "textures/ui/infobulb",
                action: {
                    type: "form",
                    id: "info"
                }
            }, {
                text: "Settings",
                icon: "textures/ui/settings_glyph_color_2x",
                action: {
                    type: "form",
                    id: "settings"
                }
            }, {
                text: "Online Chat",
                icon: "textures/ui/Feedback",
                action: {
                    type: "message",
                    text: ["\xA7aFor quick support & chat you can join our discord server by visiting: \xA79discord.un-linked.com"]
                }
            }, {
                text: "Changelog (1.5.0) (new)",
                icon: "textures/unlinked/essentials/new_balloon",
                action: {
                    type: "message",
                    text: ["\xA7aEssentials 1.5.0 Changelog:", "\xA7a- Completely reworked tree breaker to be faster and more consistent", "\xA7a- Tools now lose durability correctly when using tree/ore/sand/stone breaker", "\xA7a- Added pale oak support to tree breaker", "\xA7a- Added a feature that auto-replaces totem of undying if you have a spare in your inventory or in a satchel", "\xA7a- Added a feature that auto-replaces a block in your hand with a new one, if you have more in your inventory or in a satchel", "\xA7a- Added support to trees in realism + biomes addon", "\xA7a- Added support to more ores and tools addon", "\xA7a- Fixed auto crop replanting support for podcrash farming addon", "\xA7a- Added fake concrete", "\xA7a- Added fake wool", "\xA7a- Added fake terracotta", "\xA7a- Added pale oak fake plans & sideways slabs", "\xA7a- Added fake netherrack, moss, pale moss, snow, tuff, tuff brick, chiseled tuff, chiseled tuff bricks, chiseled deepslate, chiseled stone bricks", "\xA7a- Added fake chiseled polished blackstone, gravel, block of quartz, quartz bricks, chiseled quartz block, smooth quartz block", "\xA7a- Fixed a bug where menus would not work right when multiple people accessed them at the same time", "\xA7a- Added an option to enter new item ID's into incinerator settings", "\xA7a- Added an option to resize sand & stone breakers ", "\xA7a- Added a few new block choices to sand & stone breakers (stone breaker is obsidian off by default)", "\xA7a- Added an option to use a capture cube on a spawner to turn it into a mob spawn egg (off by default, use admin remote to turn on)", "\xA7a- Double door opening now works with interacting & with punching (previously just punching)", "\xA7a- Tool replacement should now trigger correctly when using breakers", "\xA7a- Rewrote universal remote teleportation feature", "\xA7a- Fixed an issue where mining helmet would sometimes not work in narrow tunnels", "\xA7a- Added Sleeping Bag (lets you sleep anywhere without updating your spawn point)", "\xA7a- Added Clear Nearby Waypoints (removes nearby death waypoints)(creative only item)", "\xA7a- Added Big (Water/Lava) Bucket (can store up to 5 blocks of liquid)", "\xA7a- Added Flashlight (a dynamic light source that can be carried in your off-hand)", "\xA7a- Added Sorting Stick(can be used to alphabetically sort your inventory or a chest)", "\xA7a- Added Satchels (lets you store near-infinite amount of 1 item inside it)", "\xA7a- Added Paxels (multitool that works like a pickaxe axe and shovel all in one)", "\xA7a- Added Debug Stick (can be sneak+used on a block to change its properties like facing direction and alike)(creative only item)", "\xA7a- Added Circle Template item (generates a holographic to help build a perfectly round circle easily)", "\xA7a- Added Bribe (can be used to make a villager replenish their trades faster)(can be sneak+used to reshuffle villager's trades (off by default))", "\xA7a- Added a Block of Charcoal", "\xA7a- Added Block Inspector (can be held or used to show a block's name and what addon it comes from)", "\xA7a- Added an option to make Capture Cubes not get consumed on usage (off by default)", "\xA7a- Trial spawners can now be broken with a silktouch diamond/netherite pickaxe when breakable spawners option is on", "\xA7a- Checkpoint recipe has been updated", "\xA76- If you run into any issues or have feedback, please reach out at our discord by visiting: \xA79discord.un-linked.com"]
                }
            }, {
                text: "Changelog (1.4.0) (old)",
                icon: "textures/unlinked/essentials/old_balloon",
                action: {
                    type: "message",
                    text: ["\xA7aEssentials 1.4.0 Changelog:", "\xA7a- Added Measuring Tape. Can be used to measure the distance between two points quickly and conveniently", "\xA72- Added World Anchors. Keeps an area loaded when you are not there", "\xA7a- Added Super Sponge. Collects more water than a regular sponge, and can be used repeatedly", "\xA72- Added a Portable Anvil", "\xA7a- Reworked death waypoint to no longer clash with keepInventory", "\xA72- Added a public/private death waypoint, where only you can access it's contents if it's private", "\xA7a- Made death waypoint no longer get targeted by the warden", "\xA72- Made death waypoint reveal leftover items when the visible items have been taken from it", "\xA7a- Fixed an issue where the death waypoint would not float up in liquids", "\xA72- Adjusted durability loss for tools when using tree/sand/stone breakers to be more reasonable", "\xA7a- Automatic tool replacement now works when using the tool to attack an entity", "\xA72- Added Stone Breaker (3x3 mining)", "\xA7a- Tree breaker should now support trees found in realismcraft dynamic worlds", "\xA72- Added Leaves breaker, to automatically break leaves when using tree breaker", "\xA7a- Tree Breaker now works on crimson/warped fungi", "\xA72- Large jungle & dark oak trees should now replant more reliably", "\xA7a- Mining helmet can now be enchanted", "\xA72- Increased Mining Helmet's durability(100>200) and protection level(1>1.5)", "\xA7a- Mining helmet now works reliably when used next to other players also wearing a Mining Helmet", "\xA72- Increased mining helmet's light output distance from 15 blocks to 30 blocks", "\xA7a- Double iron doors no longer open when punched", "\xA72- Double door opening now features an opening sound", "\xA7a- When Breakable Spawners feature is enabled, it now also allows breaking budding amethyst when using a diamond or netherite silktouch pickaxe", "\xA72- Increased Universal Remote's teleport count from 10 to 15", "\xA7a- Checkpoint item has been rewritten. It now works similar to teleporter in universal remote, but is limited to 2 teleports", "\xA72- Automatic Crop Replanting now supports nether warts", "\xA7a- Significantly expanded Admin Remote's functionality", "\xA72- Admin Remote now only works if you are in creative mode", "\xA7a- Reworked elevators to (hopefully) work reliably in realms", "\xA72- Player teleporter should no longer clash with other addons, as well as work more reliably", "\xA7a- Made teleporters not clash with damage indicators and similar addons", "\xA72- Infinite lava source feature should now work with 3x1 lava sources", "\xA7a- Changed chunk border visuals to be more comfortable to use for the colorblind", "\xA72- Ore Scanners now scan for ores in any direction, up to 30 blocks. However radius was changed from 3x3 to 1x1", "\xA7a- Ore Scanners can now be repaired", "\xA72- Ore Scanners have been adjusted to allow for more uses before breaking", "\xA7a- Added recipes to turn large quantities of concrete powder into concrete more quickly", "\xA72- Added Oxidant. Can be used to oxidize large quantities of copper quickly", "\xA7a- Added recipes to wax large quantities of copper quickly", "\xA72- Deepslate can now be used in the stonecutter", "\xA7a- Changed saddle recipe to require leads", "\xA72- Crafting Capture Cubes now gives you 3 per craft instead of 1", "\xA7a- Portable blocks can no longer be broken for endless free resources", "\xA76- If you run into any issues or have feedback, please reach out at our discord by visiting: \xA79discord.un-linked.com"]
                }
            }, {
                text: "Close",
                icon: "textures/blocks/barrier",
                action: {
                    type: "close"
                }
            }]
        }
    },
    ha = {
        $schema: pa,
        forms: fa
    };
var ht = {};
we(ht, {
    $schema: () => ba,
    default: () => ya,
    forms: () => ga
});
var ba = "../../schemas/forms.schema.json",
    ga = {
        settings: {
            type: "buttons",
            title: "Settings",
            buttons: [{
                text: "Ore Breaker",
                type: "toggle",
                tag: "unlinked.essentials.veinminer"
            }, {
                type: "toggle",
                text: "Tree Breaker",
                tag: "unlinked.essentials.treecapitator"
            }, {
                type: "toggle",
                text: "Crop Replanting",
                tag: "unlinked.essentials.recrop"
            }, {
                type: "toggle",
                text: "Death Waypoint",
                tag: "unlinked.essentials.deathpoint"
            }, {
                type: "toggle",
                text: "Private Death Waypoint Inventory",
                tag: "unlinked.essentials.deathpoint_private"
            }, {
                type: "toggle",
                text: "Chunk Borders",
                tag: "unlinked.essentials.chunks",
                invert: !0
            }, {
                type: "toggle",
                text: "Tree Replanting",
                tag: "unlinked.essentials.tree_replant",
                invert: !0
            }, {
                type: "toggle",
                text: "Leaves Breaker",
                tag: "unlinked.essentials.leaves",
                invert: !0
            }, {
                type: "toggle",
                text: "Breakable Spawners",
                tag: "unlinked.essentials.spawners"
            }, {
                type: "toggle",
                text: "Breaker Particles",
                tag: "unlinked.essentials.breaker_particles"
            }, {
                text: "Sand Breaker",
                icon: "textures/items/diamond_shovel",
                action: {
                    type: "form",
                    id: "sand_breaker"
                }
            }, {
                type: "toggle",
                text: "Tool Replacement",
                tag: "unlinked.essentials.replace",
                invert: !0
            }, {
                text: "Incinerator",
                icon: "textures/unlinked/essentials/essentials.incinerator",
                action: {
                    type: "form",
                    id: "incinerator"
                }
            }, {
                type: "toggle",
                text: "Lava Reflow",
                tag: "unlinked.essentials.lava_reflow",
                invert: !0
            }, {
                type: "toggle",
                text: "Double Door Opening",
                tag: "unlinked.essentials.double_door",
                invert: !0
            }, {
                type: "toggle",
                text: "Automatically Updating Map",
                tag: "unlinked.essentials.automap",
                invert: !0
            }, {
                text: "Stone Breaker",
                icon: "textures/items/diamond_pickaxe",
                action: {
                    type: "form",
                    id: "stone_breaker"
                }
            }, {
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        incinerator: {
            type: "custom",
            id: "incinerator",
            title: "Incinerator Filter"
        },
        stone_breaker: {
            type: "custom",
            title: "Stone Breaker",
            id: "pickaxe_breaker"
        },
        sand_breaker: {
            type: "custom",
            title: "Sand Breaker",
            id: "shovel_breaker"
        }
    },
    ya = {
        $schema: ba,
        forms: ga
    };
var gt = {};
we(gt, {
    $schema: () => ka,
    default: () => xa,
    forms: () => wa
});
var ka = "../../schemas/forms.schema.json",
    wa = {
        info: {
            type: "buttons",
            title: "Essentials Guidebook",
            buttons: [{
                text: "Ore Breaker",
                icon: "textures/items/iron_pickaxe",
                action: {
                    type: "form",
                    id: "info_veinminer"
                }
            }, {
                text: "Tree Breaker",
                icon: "textures/items/iron_axe",
                action: {
                    type: "form",
                    id: "info_treecapitator"
                }
            }, {
                text: "Crop Replanting",
                icon: "textures/items/carrot",
                action: {
                    type: "form",
                    id: "info_crops"
                }
            }, {
                text: "Checkpoint",
                icon: "textures/unlinked/essentials/essentials.checkpoint",
                action: {
                    type: "form",
                    id: "info_checkpoint"
                }
            }, {
                text: "Sideways Slabs",
                icon: "textures/unlinked/essentials/sideways_slab",
                action: {
                    type: "form",
                    id: "info_slabs"
                }
            }, {
                text: "Portable Blocks",
                icon: "textures/unlinked/essentials/essentials.crafting_table",
                action: {
                    type: "form",
                    id: "info_portables"
                }
            }, {
                text: "Ore Scanner",
                icon: "textures/unlinked/essentials/essentials.detector2",
                action: {
                    type: "form",
                    id: "info_scanners"
                }
            }, {
                text: "Mining Helmet",
                icon: "textures/unlinked/essentials/essentials.mining_helmet",
                action: {
                    type: "form",
                    id: "info_mining_helmet"
                }
            }, {
                text: "Anvil Repair",
                icon: "textures/unlinked/essentials/anvil",
                action: {
                    type: "form",
                    id: "info_anvil"
                }
            }, {
                text: "Fake Blocks",
                icon: "textures/unlinked/essentials/fake_block",
                action: {
                    type: "form",
                    id: "info_fakeblocks"
                }
            }, {
                text: "Death Waypoint",
                icon: "textures/ui/new_offer_symbol",
                action: {
                    type: "form",
                    id: "info_waypoint"
                }
            }, {
                text: "Universal Remote",
                icon: "textures/unlinked/essentials/essentials.remote",
                action: {
                    type: "form",
                    id: "info_remote"
                }
            }, {
                text: "Chunk Borders",
                icon: "textures/ui/equipped_item_border",
                action: {
                    type: "form",
                    id: "info_chunks"
                }
            }, {
                text: "Incinerator",
                icon: "textures/unlinked/essentials/essentials.incinerator",
                action: {
                    type: "form",
                    id: "info_incinerator"
                }
            }, {
                text: "Elevator",
                icon: "textures/unlinked/essentials/elevator2",
                action: {
                    type: "form",
                    id: "info_elevator"
                }
            }, {
                text: "Player Teleporter",
                icon: "textures/unlinked/essentials/portal",
                action: {
                    type: "form",
                    id: "info_player_teleporter"
                }
            }, {
                text: "Breakable Spawners",
                icon: "textures/unlinked/essentials/spawner",
                action: {
                    type: "form",
                    id: "info_spawners"
                }
            }, {
                text: "Double Door Opening",
                icon: "textures/unlinked/essentials/essentials.door",
                action: {
                    type: "form",
                    id: "info_double_doors"
                }
            }, {
                text: "Lava Reflow",
                icon: "textures/items/bucket_lava",
                action: {
                    type: "form",
                    id: "info_lava_reflow"
                }
            }, {
                text: "Tool Replacement",
                icon: "textures/items/netherite_pickaxe",
                action: {
                    type: "form",
                    id: "info_tool_replacement"
                }
            }, {
                text: "Sand Breaker",
                icon: "textures/items/diamond_shovel",
                action: {
                    type: "form",
                    id: "info_shovelbang"
                }
            }, {
                text: "Automatically Updating Map",
                icon: "textures/ui/mashup_world",
                action: {
                    type: "form",
                    id: "info_automap"
                }
            }, {
                text: "Rotten Flesh Smoking",
                icon: "textures/items/leather",
                action: {
                    type: "form",
                    id: "info_rotten_flesh"
                }
            }, {
                text: "Air Bladder",
                icon: "textures/unlinked/essentials/essentials.large_air_bladder",
                action: {
                    type: "form",
                    id: "info_air_bladder"
                }
            }, {
                text: "Capture Cube",
                icon: "textures/unlinked/essentials/essentials.capture_cube",
                action: {
                    type: "form",
                    id: "info_capture_cube"
                }
            }, {
                text: "World Anchor",
                icon: "textures/unlinked/essentials/world_anchor",
                action: {
                    type: "form",
                    id: "info_world_anchor"
                }
            }, {
                text: "Measuring Tape",
                icon: "textures/unlinked/essentials/essentials.measuring_tape",
                action: {
                    type: "form",
                    id: "info_measuring_tape"
                }
            }, {
                text: "Oxidant",
                icon: "textures/unlinked/essentials/essentials.oxidant",
                action: {
                    type: "form",
                    id: "info_oxidant"
                }
            }, {
                text: "Super Sponge",
                icon: "textures/unlinked/essentials/essentials.sponge",
                action: {
                    type: "form",
                    id: "info_super_sponge"
                }
            }, {
                text: "Admin Remote",
                icon: "textures/unlinked/essentials/essentials.admin_remote",
                action: {
                    type: "form",
                    id: "info_admin_remote"
                }
            }, {
                text: "Satchel",
                icon: "textures/unlinked/essentials/essentials.satchel",
                action: {
                    type: "form",
                    id: "info_satchel"
                }
            }, {
                text: "Bribe",
                icon: "textures/unlinked/essentials/bribe",
                action: {
                    type: "form",
                    id: "info_bribe"
                }
            }, {
                text: "Circle Template",
                icon: "textures/unlinked/essentials/circle",
                action: {
                    type: "form",
                    id: "info_circle_template"
                }
            }, {
                text: "Debug Stick",
                icon: "textures/items/stick",
                action: {
                    type: "form",
                    id: "info_debug_stick"
                }
            }, {
                text: "Big Bucket",
                icon: "textures/unlinked/essentials/bucket_water",
                action: {
                    type: "form",
                    id: "info_big_bucket"
                }
            }, {
                text: "Block Inspector",
                icon: "textures/unlinked/essentials/essentials.hover",
                action: {
                    type: "form",
                    id: "info_block_inspector"
                }
            }, {
                text: "Paxels",
                icon: "textures/unlinked/essentials/diamond_paxel",
                action: {
                    type: "form",
                    id: "info_paxel"
                }
            }, {
                text: "Sleeping Bag",
                icon: "textures/unlinked/essentials/essentials.sleeping_bag",
                action: {
                    type: "form",
                    id: "info_sleeping_bag"
                }
            }, {
                text: "Sorting Stick",
                icon: "textures/unlinked/essentials/essentials.sorting_stick",
                action: {
                    type: "form",
                    id: "info_sorting_stick"
                }
            }, {
                text: "Flashlight",
                icon: "textures/unlinked/essentials/flashlight",
                action: {
                    type: "form",
                    id: "info_flashlight"
                }
            }, {
                text: "Clear Checkpoints",
                icon: "textures/unlinked/essentials/clear_checkpoints",
                action: {
                    type: "form",
                    id: "info_clear_waypoint"
                }
            }, {
                text: "Back",
                icon: "textures/blocks/barrier",
                action: {
                    type: "back"
                }
            }]
        },
        info_veinminer: {
            type: "buttons",
            title: "Ore Breaker",
            text: `Whenever you mine a single ore block 
Essentials will automatically mine nearby ores as well`,
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_treecapitator: {
            type: "buttons",
            title: "Tree Breaker",
            text: `Whenever you break a single log 
Essentials will chop down the entire rest of the tree. \xA7cDo not use next to your house if your house is made of the same logs as the tree you are chopping down\xA7f. If you have saplings in the inventory, the tree will be automatically replanted`,
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_crops: {
            type: "buttons",
            title: "Crop Replanting",
            text: `If you have the crop in your inventory 
Essentials will automatically replant the crop when you break it. You can bypass this feature by sneaking`,
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_checkpoint: {
            type: "buttons",
            title: "Checkpoint",
            text: `You can create a checkpoint by sneaking + using
and then teleport to that checkpoint when you use the item
Repeat use will teleport you back to where you last were
Does not teleport you across dimensions`,
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_slabs: {
            type: "buttons",
            title: "Sideways Slabs",
            text: "Sideways slabs can be placed on walls to decorate them the same way you would decorate the ground with regular slabs",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_portables: {
            type: "buttons",
            title: "Portable Blocks",
            text: `Spawns a 
crafting table/furnace/ender
chest where you're looking, so you can access them regardless of where you are. Sneak+use to despawn. Portable Blocks will also automatically despawn when you walk away from them`,
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_scanners: {
            type: "buttons",
            title: "Ore Scanner",
            text: "Scans for specific ores in the direction you are looking at. Up to a 30 block distance, indicated by dots placed in a line",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_mining_helmet: {
            type: "buttons",
            title: "Mining Helmet",
            text: "When worn on your head, illuminates the path where you're looking. Can be repaired with iron ingots",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_anvil: {
            type: "buttons",
            title: "Anvil Repair",
            text: "You can repair an anvil in the crafting table with an iron block on top of the broken anvil",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_fakeblocks: {
            type: "buttons",
            title: "Fake Blocks",
            text: "Fake blocks look exactly like their non-fake counterparts, but you can walk through the fake blocks as if they are not there. Monsters can pass through them, but they don't know that and will act as if the blocks are solid",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_waypoint: {
            type: "buttons",
            title: "Death Waypoint",
            text: "When you die your items will be stored inside a green floating cube that you can see through blocks. Your death coordinates will be written in the chat. You can punch it to get the items or open it and take the items",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_remote: {
            type: "buttons",
            title: "Universal Remote",
            text: "A remote that lets you change the time, weather, and teleport to saved locations as well as other players",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_chunks: {
            type: "buttons",
            title: "Chunk Borders",
            text: "When enabled shows you the edges of the chunk you are currently inside of. The border is shown in green if you are in a slime chunk",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_incinerator: {
            type: "buttons",
            title: "Incinerator",
            text: "When used, removes all Cobblestone, Dirt, Gravel, Tuff, Cobbled Deepslate, Netherrack and Sand from your inventory. Filter Can be adjusted in settings",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_elevator: {
            type: "buttons",
            title: "Elevator",
            text: "If you sneak while standing on an elevator block, it will teleport you to an elevator block under it. If you jump while on an elevator block it will teleport you to an elevator above it. Maximum teleport distance is 128 blocks.",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_player_teleporter: {
            type: "buttons",
            title: "Player Teleporter",
            text: "Lets you send a teleport request to another player. They have to sneak for 3 seconds to accept your request",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_spawners: {
            type: "buttons",
            title: "Breakable Spawners",
            text: "Makes spawners drop when using silktouch enchanted diamond or silktouch enchanted netherite pickaxe to mine the spawner",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_double_doors: {
            type: "buttons",
            title: "Double Door Opening",
            text: "When you punch a door it will open another door that is touching the one you punched. Works for closing too",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_lava_reflow: {
            type: "buttons",
            title: "Lava Reflow",
            text: "Allows lava to reflow just like water does when using an infinite water source",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_tool_replacement: {
            type: "buttons",
            title: "Tool Replacement",
            text: "When your tool breaks, it will automatically be replaced with a new one of the same type if you have it in your inventory",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_shovelbang: {
            type: "buttons",
            title: "Sand Breaker",
            text: "When digging sand/dirt/gravel/etc., sand breaker will automatically dig up neighbouring blocks as well. Filter can be adjusted in settings. \xA7cMakes your shovel break 30% faster",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_automap: {
            type: "buttons",
            title: "Automatically Updating Map",
            text: "If you are holding a map, it will detect when you are outside the borders and will give you a replacement, for the area where you are in. \xA7cMay destroy other maps in your inventory! Do not use with maps you would not want to lose! \xA74Using this feature will generate a lot of new maps. Prolonged use could lead to longer load time to enter your world and or worse performance! Use at your own risk!",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_rotten_flesh: {
            type: "buttons",
            title: "Rotten Flesh Smoking",
            text: "Rotten Flesh can be processed in a smoker to be turned into a perfect substitute for leather",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_air_bladder: {
            type: "buttons",
            title: "Air Bladder",
            text: "An Air Bladder can be used underwater to give you a breath of air. When used outside of water, it refills the air bladder. Can be used in off-hand, however when in off-hand it can only be activated when you interact while holding something in your main hand.",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_capture_cube: {
            type: "buttons",
            title: "Capture Cube",
            text: "Capture Cube can be used to store the entity you are looking at inside the cube, for easy transport to somewhere else or for storage. \xA7cStoring excess entities (1000+) could result in longer load times",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_world_anchor: {
            type: "buttons",
            title: "World Anchor",
            text: "\xA7cThere is a limit of 10 world anchors per world. \xA7fWhen placed down, the world anchor will keep an area always loaded, so your crops can grow when you are not there. You can punch the world anchor to see the ticking area again",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_measuring_tape: {
            type: "buttons",
            title: "Measuring Tape",
            text: "Interact/Punch two points in the world with the measuring tape, and the it will tell you the distance between those two points",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_oxidant: {
            type: "buttons",
            title: "Oxidant",
            text: "Can be used in crafting to quickly oxidize large quantities of copper",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_super_sponge: {
            type: "buttons",
            title: "Super Sponge",
            text: "Absorbs more water than a conventional sponge, can be used in-hand and can be used repeatedly. Can be dried in the furnace",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_admin_remote: {
            type: "buttons",
            title: "Admin Remote",
            text: "\xA7cCan only be obtained in creative mode. \xA7fLets you set global settings for various essentials features. So you can disable some feature you don't want anyone to use in your world",
            buttons: [{
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        info_satchel: {
            type: "buttons",
            title: "Satchel",
            text: `Use the satchel and then use the item you want to bind to the satchel to pair them.
Once a satchel is paired to an item, any items of that type in your inventory (except your hotbar) will automatically go to the satchel.
You can sneak+use the satchel to withdraw the item from it.
The satchel will auto-replace the block in your hand when you run out of it.`,
            buttons: [{
                text: "Back",
                icon: "textures/unlinked/essentials/essentials.satchel",
                action: {
                    type: "back"
                }
            }]
        },
        info_bribe: {
            type: "buttons",
            title: "Bribe",
            text: "A bribe can be given to a villager, to restock the trades faster. If you sneak + use it, it will randomize the trade offerings (this is off by default and has to be turned in the admin remote)",
            buttons: [{
                text: "Back",
                icon: "textures/unlinked/essentials/bribe",
                action: {
                    type: "back"
                }
            }]
        },
        info_circle_template: {
            type: "buttons",
            title: "Circle Template",
            text: "Can be used to generate a holographic circle, as a guide to build a perfectly round circle. The direction of the circle is determined by where you look when creating it",
            buttons: [{
                text: "Back",
                icon: "textures/unlinked/essentials/circle",
                action: {
                    type: "back"
                }
            }]
        },
        info_debug_stick: {
            type: "buttons",
            title: "Debug Stick",
            text: `\xA7cCreative only item
 \xA7fCan be sneak+used on blocks to change their properties, such as facing direction, open/closed, rotation and alike`,
            buttons: [{
                text: "Back",
                icon: "textures/items/stick",
                action: {
                    type: "back"
                }
            }]
        },
        info_big_bucket: {
            type: "buttons",
            title: "Big Bucket",
            text: "Can store up to 5 blocks of water or lava. Does not work on snow/milk. Does not work as a replacement in recipes that require a bucket of lava/water",
            buttons: [{
                text: "Back",
                icon: "textures/unlinked/essentials/bucket_water",
                action: {
                    type: "back"
                }
            }]
        },
        info_block_inspector: {
            type: "buttons",
            title: "Block Inspector",
            text: `When looking at a block, it will tell you the block's name and what addon it comes from
 This feature is active when holding the block inspector. If you use the block inspector, it will toggle the inspection feature to be on, so you can see what blocks are even when not holding it`,
            buttons: [{
                text: "Back",
                icon: "textures/unlinked/essentials/essentials.hover",
                action: {
                    type: "back"
                }
            }]
        },
        info_paxel: {
            type: "buttons",
            title: "Paxels",
            text: "Paxels are a multitool that combine an axe, pickaxe and shovel all into a single tool",
            buttons: [{
                text: "Back",
                icon: "textures/unlinked/essentials/diamond_paxel",
                action: {
                    type: "back"
                }
            }]
        },
        info_sleeping_bag: {
            type: "buttons",
            title: "Sleeping Bag",
            text: "Sleeping bag can be used to sleep through the night anywhere without updating your respawn point",
            buttons: [{
                text: "Back",
                icon: "textures/unlinked/essentials/essentials.sleeping_bag",
                action: {
                    type: "back"
                }
            }]
        },
        info_sorting_stick: {
            type: "buttons",
            title: "Sorting Stick",
            text: "When you interact with the sorting stick, it will sort the contents of your inventory alphabetically (except hotbar). When you punch a container (chest/barrel etc.) with it, it will sort the container's contents alphabetically",
            buttons: [{
                text: "Back",
                icon: "textures/unlinked/essentials/essentials.sorting_stick",
                action: {
                    type: "back"
                }
            }]
        },
        info_flashlight: {
            type: "buttons",
            title: "Flashlight",
            text: "Lights up area in front of you into the direction you're looking at, up to 30 blocks forward. Can be held in your off-hand",
            buttons: [{
                text: "Back",
                icon: "textures/unlinked/essentials/flashlight",
                action: {
                    type: "back"
                }
            }]
        },
        info_clear_waypoint: {
            type: "buttons",
            title: "Clear Nearby Waypoints",
            text: "\xA7cCreative only item \xA7fWhen used it will remove any nearby death waypoints",
            buttons: [{
                text: "Back",
                icon: "textures/unlinked/essentials/clear_checkpoints",
                action: {
                    type: "back"
                }
            }]
        }
    },
    xa = {
        $schema: ka,
        forms: wa
    };
var kt = {};
we(kt, {
    $schema: () => va,
    default: () => Ia,
    forms: () => Sa
});
var va = "../../schemas/forms.schema.json",
    Sa = {
        remote: {
            type: "buttons",
            title: "Universal Remote",
            buttons: [{
                text: "\xA7cClose",
                icon: "textures/blocks/barrier",
                action: {
                    type: "close"
                }
            }, {
                text: "Weather",
                icon: "textures/ui/weather_clear",
                when: {
                    type: "setting",
                    property: "weather",
                    defaultValue: !0
                },
                action: {
                    type: "form",
                    id: "weather"
                }
            }, {
                text: "Time",
                icon: "textures/ui/time_5night",
                when: {
                    type: "setting",
                    property: "time",
                    defaultValue: !0
                },
                action: {
                    type: "form",
                    id: "time"
                }
            }, {
                text: "Teleporter",
                icon: "textures/ui/portalBg",
                when: {
                    type: "setting",
                    property: "teleporter",
                    defaultValue: !0
                },
                action: {
                    type: "form",
                    id: "teleporter"
                }
            }, {
                text: "Player Teleporter",
                icon: "textures/unlinked/essentials/portal",
                when: {
                    type: "setting",
                    property: "playerTeleporter",
                    defaultValue: !0
                },
                action: {
                    type: "form",
                    id: "player_teleporter"
                }
            }, {
                text: "Info",
                icon: "textures/ui/infobulb",
                action: {
                    type: "form",
                    id: "info"
                }
            }, {
                text: "Settings",
                icon: "textures/ui/settings_glyph_color_2x",
                action: {
                    type: "form",
                    id: "settings"
                }
            }, {
                text: "Online Chat",
                icon: "textures/ui/Feedback",
                action: {
                    type: "message",
                    text: ["\xA7aFor quick support & chat you can join our discord server by visiting: \xA79discord.un-linked.com"]
                }
            }]
        },
        player_teleporter: {
            type: "custom",
            title: "Player Teleporter",
            id: "player_teleporter",
            when: {
                type: "setting",
                property: "playerTeleporter",
                defaultValue: !0
            }
        },
        teleporter: {
            type: "custom",
            title: "Teleporter",
            id: "teleporter",
            when: {
                type: "setting",
                property: "teleporter",
                defaultValue: !0
            }
        },
        weather: {
            type: "buttons",
            title: "Weather",
            buttons: [{
                text: "Clear",
                icon: "textures/ui/weather_clear",
                action: {
                    type: "command",
                    command: ["weather clear 100000"]
                }
            }, {
                text: "Rain",
                icon: "textures/ui/weather_rain",
                action: {
                    type: "command",
                    command: ["weather rain 100000"]
                }
            }, {
                text: "Thunderstorm",
                icon: "textures/ui/weather_thunderstorm",
                action: {
                    type: "command",
                    command: ["weather thunder 100000"]
                }
            }, {
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        },
        time: {
            type: "buttons",
            title: "Time",
            buttons: [{
                text: "Sunrise",
                icon: "textures/ui/time_1sunrise",
                action: {
                    type: "command",
                    command: ["time set sunrise"]
                }
            }, {
                text: "Day",
                icon: "textures/ui/time_2day",
                action: {
                    type: "command",
                    command: ["time set day"]
                }
            }, {
                text: "Noon",
                icon: "textures/ui/time_3noon",
                action: {
                    type: "command",
                    command: ["time set noon"]
                }
            }, {
                text: "Sunset",
                icon: "textures/ui/time_4sunset",
                action: {
                    type: "command",
                    command: ["time set sunset"]
                }
            }, {
                text: "Night",
                icon: "textures/ui/time_5night",
                action: {
                    type: "command",
                    command: ["time set night"]
                }
            }, {
                text: "Midnight",
                icon: "textures/ui/time_6midnight",
                action: {
                    type: "command",
                    command: ["time set midnight"]
                }
            }, {
                text: "Back",
                icon: "textures/ui/import",
                action: {
                    type: "back"
                }
            }]
        }
    },
    Ia = {
        $schema: va,
        forms: Sa
    };
import {
    system as Ze,
    TicksPerSecond as en,
    world as ce
} from "@minecraft/server";
import {
    ActionFormData as Qe,
    ModalFormData as Ca
} from "@minecraft/server-ui";
var vt = class extends q {
        getFormId() {
            return "player_teleporter"
        }
        render(e, n, a) {
            let i = ce.getPlayers().filter(o => o.id !== e.id && o.isValid());
            if (i.length === 0) {
                e.sendMessage("\xA7cNo other players online");
                return
            }
            let r = new Qe;
            r.title(n);
            for (let o of i) r.button(o.nameTag, "textures/ui/friend1_black_outline_2x");
            x.forceShow(e, r, o => {
                if (o.canceled || o.selection === void 0) return;
                let s = i[o.selection];
                s && G.requestTeleport(e, s)
            })
        }
    },
    St = class extends q {
        getFormId() {
            return "teleporter"
        }
        render(e, n, a) {
            let i = new Qe;
            i.title(n);
            let r = G.getTeleports(e);
            for (let o = 0; o < r.tps.length; o++) {
                let s = r.tps[o];
                i.button(s.n ?? `Teleport ${o+1}`, "textures/unlinked/essentials/star" + (o + 1))
            }
            r.tps.length < tn && i.button("Teleport " + (r.tps.length + 1), "textures/ui/emptyStar"), i.button("Rename Teleport", "textures/ui/book_edit_default"), i.button("Delete Teleport", "textures/ui/cancel"), i.button("Back", "textures/ui/import"), x.forceShow(e, i, o => {
                let s = o.selection;
                if (!(o.canceled || s === void 0))
                    if (s >= r.tps.length) {
                        let c = s;
                        r.tps.length >= tn && c++, c === r.tps.length ? (r.tps.push({
                            l: e.location,
                            r: e.getRotation(),
                            d: e.dimension.id
                        }), G.saveTeleports(e, r), e.sendMessage(`${f.GREEN}Teleport ${s+1} created`)) : c === r.tps.length + 1 ? this.showRenameListForm(e) : c === r.tps.length + 2 ? this.showDeleteListForm(e) : c === r.tps.length + 3 && this.back()
                    } else {
                        let c = r.tps[s];
                        G.teleport(e, c)
                    }
            })
        }
        showRenameListForm(e) {
            let n = new Qe;
            n.title("Rename Teleport");
            let a = G.getTeleports(e);
            for (let i = 0; i < a.tps.length; i++) {
                let r = a.tps[i];
                n.button(r.n ?? `Teleport ${i+1}`, "textures/ui/book_edit_default")
            }
            n.button("Back", "textures/ui/import"), x.forceShow(e, n, i => {
                i.canceled || i.selection === void 0 || (i.selection > a.tps.length ? this.back() : this.showRenameForm(e, i.selection))
            })
        }
        showDeleteListForm(e) {
            let n = new Qe;
            n.title("Delete Teleport");
            let a = G.getTeleports(e);
            for (let i = 0; i < a.tps.length; i++) {
                let r = a.tps[i];
                n.button(r.n ?? `Teleport ${i+1}`, "textures/ui/cancel")
            }
            n.button("Back", "textures/ui/import"), x.forceShow(e, n, i => {
                if (!(i.canceled || i.selection === void 0))
                    if (i.selection > a.tps.length) this.back();
                    else {
                        let r = a.tps[i.selection];
                        a.tps.splice(i.selection, 1), G.saveTeleports(e, a), e.sendMessage(`${f.RED}Teleport ${r.n??`${i.selection+1}`} deleted`)
                    }
            })
        }
        showRenameForm(e, n) {
            let a = new Ca,
                i = G.getTeleports(e),
                r = i.tps[n];
            a.title("Rename " + (r.n ?? `Teleport ${n+1}`)), a.textField("Type the name you want to use", "home"), a.submitButton("Rename"), x.forceShow(e, a, o => {
                o.canceled || o.formValues === void 0 || o.formValues.length === 0 || (i.tps[n].n = o.formValues[0], G.saveTeleports(e, i))
            })
        }
    },
    tn = 15,
    xt = "ulkd_ess:teleports",
    Ba = ["minecraft:overworld", "minecraft:overworld", "minecraft:nether", "minecraft:the_end"],
    G = class {
        static init() {
            x.registerCustomForm(new vt), x.registerCustomForm(new St)
        }
        static requestTeleport(e, n) {
            if (e.id === n.id) {
                e.sendMessage("\xA7cYou can't teleport to yourself");
                return
            }
            n.sendMessage(`\xA7a${e.nameTag} wants to teleport to you. \xA7eSneak for 3 seconds\xA7a to accept. Expires in 30s`), e.sendMessage("\xA7aTeleport request sent. Expires in 30 seconds");
            let a = 30 * en,
                i = 0,
                r = Ze.runInterval(() => {
                    if (a--, (!e.isValid() || !n.isValid()) && Ze.clearRun(r), n.isSneaking) {
                        if (i++, i >= 3 * en) {
                            e.teleport(n.location), n.sendMessage("\xA7aTeleported to you"), Ze.clearRun(r);
                            return
                        }
                    } else i = 0;
                    a <= 0 && (e.sendMessage("\xA7cTeleport request expired"), Ze.clearRun(r))
                }, 1)
        }
        static getTeleports(e) {
            let n = e.getDynamicProperty(xt);
            if (n === void 0) {
                let a = {
                        tps: []
                    },
                    i = e.getTags(),
                    r = e.id;
                for (let o = 1; o <= 15; o++) {
                    let s = ce.scoreboard.getObjective(`unlinked.essentials.teleport${o}_x`);
                    if (!s || !s.hasParticipant(r)) continue;
                    let c = ce.scoreboard.getObjective(`unlinked.essentials.teleport${o}_y`),
                        d = ce.scoreboard.getObjective(`unlinked.essentials.teleport${o}_z`),
                        p = ce.scoreboard.getObjective(`unlinked.essentials.teleport${o}_r0`),
                        y = ce.scoreboard.getObjective(`unlinked.essentials.teleport${o}_r1`);
                    if (!s || !c || !d || !p || !y) continue;
                    let S = i.filter(z => z.includes(`ess_teleport${o}_`)).map(z => z.substring(14)).find(() => !0),
                        w = Ba[s.getScore(r) ?? 0],
                        v = `${r}_${w}`;
                    a.tps.push({
                        l: {
                            x: s.getScore(v) / 100,
                            y: c.getScore(v) / 100,
                            z: d.getScore(v) / 100
                        },
                        r: {
                            x: p.getScore(v),
                            y: y.getScore(v)
                        },
                        n: S,
                        d: w
                    })
                }
                return e.setDynamicProperty(xt, JSON.stringify(a)), a
            }
            return JSON.parse(n)
        }
        static saveTeleports(e, n) {
            e.setDynamicProperty(xt, JSON.stringify(n))
        }
        static teleport(e, n) {
            e.teleport(n.l, {
                dimension: ce.getDimension(n.d),
                rotation: n.r
            })
        }
    };
import {
    EntityInventoryComponent as Da,
    EntityTypeFamilyComponent as Ea,
    system as nn,
    world as Ta
} from "@minecraft/server";
var Ee = L.getLogger("Bribe"),
    Pa = ["cleric", "farmer", "fisherman", "sheperd", "fletcher", "librarian", "cartographer", "armorer", "weaponsmith", "toolsmith", "butcher", "leatherworker", "mason"],
    Te = class {
        static init() {
            Ta.beforeEvents.playerInteractWithEntity.subscribe(this.onPlayerInteractWithEntity.bind(this))
        }
        static async onPlayerInteractWithEntity(e) {
            !e.itemStack || e.itemStack.typeId !== "ulkd_ess:bribe" || e.target.typeId !== "minecraft:villager" && e.target.typeId !== "minecraft:villager_v2" || (e.cancel = !0, await null, this.tryBribe(e.player, e.target))
        }
        static tryBribe(e, n) {
            if (!k.bribe.get()) return e.sendMessage("\xA7cBribes are disabled in the Admin Remote (creative only item)"), !1;
            let a = e.selectedSlotIndex,
                i = e.getComponent(Da.componentId);
            if (!i) return Ee.warn("Inventory empty"), !1;
            let r = i.container;
            if (!r) return Ee.warn("Container empty"), !1;
            let o = n.getComponent(Ea.componentId);
            if (!o) return Ee.warn("Family empty"), !1;
            let s = o.getTypeFamilies().map(p => p === "stone_mason" ? "mason" : p === "shepherd" ? "sheperd" : p).find(p => Pa.includes(p));
            if (!s) return Ee.warn("Type empty"), !1;
            let c = r.getItem(a);
            if (!c || c.typeId !== "ulkd_ess:bribe") return Ee.warn("Item in hand empty or not a bribe"), !1;
            let d = e.isSneaking;
            return d && !k.changeTradesBribe.get(e) ? (e.sendMessage(f.RED + "Changing trades with a bribe is disabled in the Admin Remote (creative only item)"), !1) : (c.amount === 1 ? r.setItem(a, void 0) : (c.amount--, r.setItem(a, c)), d ? (n.triggerEvent("minecraft:become_unskilled"), nn.runTimeout(() => {
                n.triggerEvent("minecraft:become_" + s), e.playSound("unlinked.essentials.bribe", {
                    location: n.location
                }), e.sendMessage(f.GREEN + "Villager trades were changed!")
            }, 1)) : (n.triggerEvent("minecraft:schedule_home_villager"), nn.runTimeout(() => {
                n.triggerEvent("minecraft:resupply_trades"), e.playSound("unlinked.essentials.bribe", {
                    location: n.location
                }), e.sendMessage(f.GREEN + "Villager trades were resupplied!")
            }, 1)), !0)
        }
    };
import {
    world as Hf,
    BlockPermutation as Kf
} from "@minecraft/server";
var It = {};
we(It, {
    default: () => qf,
    "minecraft:acacia_button": () => qu,
    "minecraft:acacia_door": () => vl,
    "minecraft:acacia_double_slab": () => Sm,
    "minecraft:acacia_fence_gate": () => qp,
    "minecraft:acacia_hanging_sign": () => wo,
    "minecraft:acacia_leaves": () => po,
    "minecraft:acacia_log": () => cl,
    "minecraft:acacia_pressure_plate": () => Rc,
    "minecraft:acacia_sapling": () => ad,
    "minecraft:acacia_slab": () => Fp,
    "minecraft:acacia_stairs": () => G_,
    "minecraft:acacia_standing_sign": () => j_,
    "minecraft:acacia_trapdoor": () => gm,
    "minecraft:acacia_wall_sign": () => qo,
    "minecraft:acacia_wood": () => iu,
    "minecraft:activator_rail": () => Li,
    "minecraft:amethyst_cluster": () => hf,
    "minecraft:andesite_double_slab": () => i_,
    "minecraft:andesite_slab": () => id,
    "minecraft:andesite_stairs": () => Gc,
    "minecraft:andesite_wall": () => pm,
    "minecraft:anvil": () => Wd,
    "minecraft:azalea_leaves": () => Yp,
    "minecraft:azalea_leaves_flowered": () => td,
    "minecraft:bamboo": () => Ko,
    "minecraft:bamboo_block": () => Fa,
    "minecraft:bamboo_button": () => pd,
    "minecraft:bamboo_door": () => Ti,
    "minecraft:bamboo_double_slab": () => Js,
    "minecraft:bamboo_fence_gate": () => Dc,
    "minecraft:bamboo_hanging_sign": () => Ql,
    "minecraft:bamboo_mosaic_double_slab": () => Ms,
    "minecraft:bamboo_mosaic_slab": () => yo,
    "minecraft:bamboo_mosaic_stairs": () => N_,
    "minecraft:bamboo_pressure_plate": () => E_,
    "minecraft:bamboo_sapling": () => Mp,
    "minecraft:bamboo_slab": () => Sd,
    "minecraft:bamboo_stairs": () => $r,
    "minecraft:bamboo_standing_sign": () => $u,
    "minecraft:bamboo_trapdoor": () => zc,
    "minecraft:bamboo_wall_sign": () => au,
    "minecraft:barrel": () => Pl,
    "minecraft:basalt": () => _l,
    "minecraft:bed": () => Vd,
    "minecraft:bedrock": () => gu,
    "minecraft:bee_nest": () => Bm,
    "minecraft:beehive": () => M_,
    "minecraft:beetroot": () => Oc,
    "minecraft:bell": () => ou,
    "minecraft:big_dripleaf": () => m_,
    "minecraft:birch_button": () => cf,
    "minecraft:birch_door": () => Ru,
    "minecraft:birch_double_slab": () => Ef,
    "minecraft:birch_fence_gate": () => os,
    "minecraft:birch_hanging_sign": () => gr,
    "minecraft:birch_leaves": () => Bs,
    "minecraft:birch_log": () => Ir,
    "minecraft:birch_pressure_plate": () => Ro,
    "minecraft:birch_sapling": () => Ep,
    "minecraft:birch_slab": () => _s,
    "minecraft:birch_stairs": () => fu,
    "minecraft:birch_standing_sign": () => za,
    "minecraft:birch_trapdoor": () => Gd,
    "minecraft:birch_wall_sign": () => nu,
    "minecraft:birch_wood": () => zr,
    "minecraft:black_candle": () => ai,
    "minecraft:black_candle_cake": () => Nl,
    "minecraft:black_glazed_terracotta": () => Mm,
    "minecraft:blackstone_double_slab": () => Va,
    "minecraft:blackstone_slab": () => Yr,
    "minecraft:blackstone_stairs": () => ku,
    "minecraft:blackstone_wall": () => vs,
    "minecraft:blast_furnace": () => Op,
    "minecraft:blue_candle": () => Aa,
    "minecraft:blue_candle_cake": () => d_,
    "minecraft:blue_glazed_terracotta": () => im,
    "minecraft:bone_block": () => Vs,
    "minecraft:border_block": () => Bc,
    "minecraft:brain_coral_fan": () => Gr,
    "minecraft:brain_coral_wall_fan": () => Ts,
    "minecraft:brewing_stand": () => zp,
    "minecraft:brick_double_slab": () => ni,
    "minecraft:brick_slab": () => Pp,
    "minecraft:brick_stairs": () => Id,
    "minecraft:brick_wall": () => Xa,
    "minecraft:brown_candle": () => Km,
    "minecraft:brown_candle_cake": () => jo,
    "minecraft:brown_glazed_terracotta": () => To,
    "minecraft:brown_mushroom_block": () => cp,
    "minecraft:bubble_column": () => Dm,
    "minecraft:bubble_coral_fan": () => di,
    "minecraft:bubble_coral_wall_fan": () => tu,
    "minecraft:cactus": () => du,
    "minecraft:cake": () => Fu,
    "minecraft:calibrated_sculk_sensor": () => Wm,
    "minecraft:campfire": () => Em,
    "minecraft:candle": () => bp,
    "minecraft:candle_cake": () => Up,
    "minecraft:carrots": () => t_,
    "minecraft:carved_pumpkin": () => up,
    "minecraft:cauldron": () => Cp,
    "minecraft:cave_vines": () => fc,
    "minecraft:cave_vines_body_with_berries": () => o_,
    "minecraft:cave_vines_head_with_berries": () => Bp,
    "minecraft:chain": () => Lu,
    "minecraft:chain_command_block": () => Rd,
    "minecraft:chalkboard": () => Vo,
    "minecraft:cherry_button": () => Hl,
    "minecraft:cherry_door": () => nl,
    "minecraft:cherry_double_slab": () => k_,
    "minecraft:cherry_fence_gate": () => Ff,
    "minecraft:cherry_hanging_sign": () => Za,
    "minecraft:cherry_leaves": () => Rm,
    "minecraft:cherry_log": () => Yu,
    "minecraft:cherry_pressure_plate": () => Ya,
    "minecraft:cherry_sapling": () => Ju,
    "minecraft:cherry_slab": () => U_,
    "minecraft:cherry_stairs": () => Ou,
    "minecraft:cherry_standing_sign": () => jm,
    "minecraft:cherry_trapdoor": () => Jr,
    "minecraft:cherry_wall_sign": () => Qp,
    "minecraft:cherry_wood": () => Mu,
    "minecraft:chest": () => zu,
    "minecraft:chipped_anvil": () => sc,
    "minecraft:chiseled_bookshelf": () => Ri,
    "minecraft:chiseled_quartz_block": () => ip,
    "minecraft:chorus_flower": () => Rl,
    "minecraft:cobbled_deepslate_double_slab": () => $m,
    "minecraft:cobbled_deepslate_slab": () => tp,
    "minecraft:cobbled_deepslate_stairs": () => ei,
    "minecraft:cobbled_deepslate_wall": () => Rf,
    "minecraft:cobblestone_double_slab": () => xf,
    "minecraft:cobblestone_slab": () => Ls,
    "minecraft:cobblestone_wall": () => fo,
    "minecraft:cocoa": () => xd,
    "minecraft:colored_torch_blue": () => al,
    "minecraft:colored_torch_green": () => Cd,
    "minecraft:colored_torch_purple": () => tf,
    "minecraft:colored_torch_red": () => Gf,
    "minecraft:command_block": () => _f,
    "minecraft:composter": () => em,
    "minecraft:compound_creator": () => is,
    "minecraft:copper_bulb": () => kl,
    "minecraft:copper_door": () => l_,
    "minecraft:copper_trapdoor": () => Nm,
    "minecraft:crafter": () => uf,
    "minecraft:creaking_heart": () => vp,
    "minecraft:creeper_head": () => zm,
    "minecraft:crimson_button": () => Cl,
    "minecraft:crimson_door": () => ps,
    "minecraft:crimson_double_slab": () => Tr,
    "minecraft:crimson_fence_gate": () => nc,
    "minecraft:crimson_hanging_sign": () => Wu,
    "minecraft:crimson_hyphae": () => il,
    "minecraft:crimson_pressure_plate": () => Uf,
    "minecraft:crimson_slab": () => Xm,
    "minecraft:crimson_stairs": () => Z_,
    "minecraft:crimson_standing_sign": () => rp,
    "minecraft:crimson_stem": () => Zm,
    "minecraft:crimson_trapdoor": () => ml,
    "minecraft:crimson_wall_sign": () => Qa,
    "minecraft:cut_copper_slab": () => Pc,
    "minecraft:cut_copper_stairs": () => jl,
    "minecraft:cut_red_sandstone_double_slab": () => Ks,
    "minecraft:cut_red_sandstone_slab": () => kp,
    "minecraft:cut_sandstone_double_slab": () => Yi,
    "minecraft:cut_sandstone_slab": () => Qc,
    "minecraft:cyan_candle": () => Xp,
    "minecraft:cyan_candle_cake": () => Nr,
    "minecraft:cyan_glazed_terracotta": () => Hc,
    "minecraft:damaged_anvil": () => Df,
    "minecraft:dark_oak_button": () => Ua,
    "minecraft:dark_oak_door": () => Im,
    "minecraft:dark_oak_double_slab": () => Ds,
    "minecraft:dark_oak_fence_gate": () => Rs,
    "minecraft:dark_oak_hanging_sign": () => Do,
    "minecraft:dark_oak_leaves": () => x_,
    "minecraft:dark_oak_log": () => ko,
    "minecraft:dark_oak_pressure_plate": () => s_,
    "minecraft:dark_oak_sapling": () => Qi,
    "minecraft:dark_oak_slab": () => sr,
    "minecraft:dark_oak_stairs": () => Ec,
    "minecraft:dark_oak_trapdoor": () => Tp,
    "minecraft:dark_oak_wood": () => Ra,
    "minecraft:dark_prismarine_double_slab": () => Ii,
    "minecraft:dark_prismarine_slab": () => Gm,
    "minecraft:dark_prismarine_stairs": () => xp,
    "minecraft:darkoak_standing_sign": () => op,
    "minecraft:darkoak_wall_sign": () => Vc,
    "minecraft:daylight_detector": () => Ns,
    "minecraft:daylight_detector_inverted": () => Tl,
    "minecraft:dead_brain_coral_fan": () => hi,
    "minecraft:dead_brain_coral_wall_fan": () => ws,
    "minecraft:dead_bubble_coral_fan": () => mi,
    "minecraft:dead_bubble_coral_wall_fan": () => Pi,
    "minecraft:dead_fire_coral_fan": () => Yd,
    "minecraft:dead_fire_coral_wall_fan": () => Eo,
    "minecraft:dead_horn_coral_fan": () => Bu,
    "minecraft:dead_horn_coral_wall_fan": () => xu,
    "minecraft:dead_tube_coral_fan": () => Hd,
    "minecraft:dead_tube_coral_wall_fan": () => Dp,
    "minecraft:decorated_pot": () => Zd,
    "minecraft:deepslate": () => ki,
    "minecraft:deepslate_brick_double_slab": () => bo,
    "minecraft:deepslate_brick_slab": () => Zo,
    "minecraft:deepslate_brick_stairs": () => wp,
    "minecraft:deepslate_brick_wall": () => lr,
    "minecraft:deepslate_tile_double_slab": () => ji,
    "minecraft:deepslate_tile_slab": () => Qs,
    "minecraft:deepslate_tile_stairs": () => tc,
    "minecraft:deepslate_tile_wall": () => Tc,
    "minecraft:deprecated_anvil": () => $c,
    "minecraft:deprecated_purpur_block_1": () => Au,
    "minecraft:deprecated_purpur_block_2": () => Pu,
    "minecraft:detector_rail": () => Is,
    "minecraft:diorite_double_slab": () => hr,
    "minecraft:diorite_slab": () => li,
    "minecraft:diorite_stairs": () => wl,
    "minecraft:diorite_wall": () => to,
    "minecraft:dispenser": () => wf,
    "minecraft:double_cut_copper_slab": () => $o,
    "minecraft:dragon_head": () => Fm,
    "minecraft:dropper": () => pp,
    "minecraft:element_constructor": () => Fl,
    "minecraft:end_brick_stairs": () => ld,
    "minecraft:end_portal_frame": () => D_,
    "minecraft:end_rod": () => Ym,
    "minecraft:end_stone_brick_double_slab": () => _d,
    "minecraft:end_stone_brick_slab": () => br,
    "minecraft:end_stone_brick_wall": () => Ga,
    "minecraft:ender_chest": () => fl,
    "minecraft:exposed_copper_bulb": () => J_,
    "minecraft:exposed_copper_door": () => cc,
    "minecraft:exposed_copper_trapdoor": () => P_,
    "minecraft:exposed_cut_copper_slab": () => Ld,
    "minecraft:exposed_cut_copper_stairs": () => Ul,
    "minecraft:exposed_double_cut_copper_slab": () => pr,
    "minecraft:farmland": () => ks,
    "minecraft:fence_gate": () => Na,
    "minecraft:fire": () => S_,
    "minecraft:fire_coral_fan": () => Pd,
    "minecraft:fire_coral_wall_fan": () => Kc,
    "minecraft:flower_pot": () => Ai,
    "minecraft:flowing_lava": () => Vu,
    "minecraft:flowing_water": () => dc,
    "minecraft:frame": () => js,
    "minecraft:frosted_ice": () => oc,
    "minecraft:furnace": () => ff,
    "minecraft:glow_frame": () => ii,
    "minecraft:glow_lichen": () => km,
    "minecraft:golden_rail": () => Nc,
    "minecraft:granite_double_slab": () => Qd,
    "minecraft:granite_slab": () => Gl,
    "minecraft:granite_stairs": () => Bo,
    "minecraft:granite_wall": () => Pm,
    "minecraft:gray_candle": () => eo,
    "minecraft:gray_candle_cake": () => Ka,
    "minecraft:gray_glazed_terracotta": () => Wf,
    "minecraft:green_candle": () => Ar,
    "minecraft:green_candle_cake": () => Lo,
    "minecraft:green_glazed_terracotta": () => Fd,
    "minecraft:grindstone": () => vf,
    "minecraft:hay_block": () => Mr,
    "minecraft:heavy_weighted_pressure_plate": () => _o,
    "minecraft:hopper": () => ru,
    "minecraft:horn_coral_fan": () => yd,
    "minecraft:horn_coral_wall_fan": () => kc,
    "minecraft:infested_deepslate": () => Xl,
    "minecraft:iron_door": () => Bl,
    "minecraft:iron_trapdoor": () => Oi,
    "minecraft:jigsaw": () => Ic,
    "minecraft:jungle_button": () => ja,
    "minecraft:jungle_door": () => L_,
    "minecraft:jungle_double_slab": () => $p,
    "minecraft:jungle_fence_gate": () => Jc,
    "minecraft:jungle_hanging_sign": () => ms,
    "minecraft:jungle_leaves": () => jc,
    "minecraft:jungle_log": () => _i,
    "minecraft:jungle_pressure_plate": () => Uo,
    "minecraft:jungle_sapling": () => h_,
    "minecraft:jungle_slab": () => hs,
    "minecraft:jungle_stairs": () => mu,
    "minecraft:jungle_standing_sign": () => y_,
    "minecraft:jungle_trapdoor": () => Yc,
    "minecraft:jungle_wall_sign": () => gl,
    "minecraft:jungle_wood": () => Lr,
    "minecraft:kelp": () => nm,
    "minecraft:lab_table": () => ql,
    "minecraft:ladder": () => Nf,
    "minecraft:lantern": () => Du,
    "minecraft:large_amethyst_bud": () => lc,
    "minecraft:large_fern": () => kd,
    "minecraft:lava": () => cs,
    "minecraft:lectern": () => su,
    "minecraft:lever": () => vd,
    "minecraft:light_blue_candle": () => Ll,
    "minecraft:light_blue_candle_cake": () => Di,
    "minecraft:light_blue_glazed_terracotta": () => rm,
    "minecraft:light_gray_candle": () => $_,
    "minecraft:light_gray_candle_cake": () => Fc,
    "minecraft:light_weighted_pressure_plate": () => Ho,
    "minecraft:lightning_rod": () => uo,
    "minecraft:lilac": () => np,
    "minecraft:lime_candle": () => od,
    "minecraft:lime_candle_cake": () => Bf,
    "minecraft:lime_glazed_terracotta": () => pi,
    "minecraft:lit_blast_furnace": () => Tu,
    "minecraft:lit_furnace": () => Hu,
    "minecraft:lit_pumpkin": () => $d,
    "minecraft:lit_smoker": () => Hp,
    "minecraft:loom": () => ds,
    "minecraft:magenta_candle": () => ir,
    "minecraft:magenta_candle_cake": () => T_,
    "minecraft:magenta_glazed_terracotta": () => ao,
    "minecraft:mangrove_button": () => Cu,
    "minecraft:mangrove_door": () => md,
    "minecraft:mangrove_double_slab": () => rr,
    "minecraft:mangrove_fence_gate": () => Jl,
    "minecraft:mangrove_hanging_sign": () => qm,
    "minecraft:mangrove_leaves": () => Nd,
    "minecraft:mangrove_log": () => Ui,
    "minecraft:mangrove_pressure_plate": () => fs,
    "minecraft:mangrove_propagule": () => _u,
    "minecraft:mangrove_slab": () => oo,
    "minecraft:mangrove_stairs": () => $l,
    "minecraft:mangrove_standing_sign": () => Us,
    "minecraft:mangrove_trapdoor": () => El,
    "minecraft:mangrove_wall_sign": () => Mc,
    "minecraft:mangrove_wood": () => Ps,
    "minecraft:material_reducer": () => Tf,
    "minecraft:medium_amethyst_bud": () => hl,
    "minecraft:melon_stem": () => gc,
    "minecraft:mossy_cobblestone_double_slab": () => pf,
    "minecraft:mossy_cobblestone_slab": () => zs,
    "minecraft:mossy_cobblestone_stairs": () => Ss,
    "minecraft:mossy_cobblestone_wall": () => mo,
    "minecraft:mossy_stone_brick_double_slab": () => Hs,
    "minecraft:mossy_stone_brick_slab": () => Hi,
    "minecraft:mossy_stone_brick_stairs": () => Jm,
    "minecraft:mossy_stone_brick_wall": () => Mf,
    "minecraft:mud_brick_double_slab": () => ri,
    "minecraft:mud_brick_slab": () => ys,
    "minecraft:mud_brick_stairs": () => mm,
    "minecraft:mud_brick_wall": () => jr,
    "minecraft:muddy_mangrove_roots": () => Wi,
    "minecraft:mushroom_stem": () => A_,
    "minecraft:nether_brick_double_slab": () => O_,
    "minecraft:nether_brick_slab": () => v_,
    "minecraft:nether_brick_stairs": () => $a,
    "minecraft:nether_brick_wall": () => hu,
    "minecraft:nether_wart": () => nf,
    "minecraft:normal_stone_double_slab": () => dl,
    "minecraft:normal_stone_slab": () => Ws,
    "minecraft:normal_stone_stairs": () => fr,
    "minecraft:oak_double_slab": () => Go,
    "minecraft:oak_hanging_sign": () => bc,
    "minecraft:oak_leaves": () => Fr,
    "minecraft:oak_log": () => Bi,
    "minecraft:oak_sapling": () => wr,
    "minecraft:oak_slab": () => Ys,
    "minecraft:oak_stairs": () => Ci,
    "minecraft:oak_wood": () => wc,
    "minecraft:observer": () => So,
    "minecraft:ochre_froglight": () => xo,
    "minecraft:orange_candle": () => Ki,
    "minecraft:orange_candle_cake": () => zf,
    "minecraft:orange_glazed_terracotta": () => so,
    "minecraft:oxidized_copper_bulb": () => no,
    "minecraft:oxidized_copper_door": () => Vf,
    "minecraft:oxidized_copper_trapdoor": () => Wl,
    "minecraft:oxidized_cut_copper_slab": () => Lc,
    "minecraft:oxidized_cut_copper_stairs": () => $i,
    "minecraft:oxidized_double_cut_copper_slab": () => cr,
    "minecraft:pale_hanging_moss": () => C_,
    "minecraft:pale_moss_carpet": () => B_,
    "minecraft:pale_oak_button": () => Sp,
    "minecraft:pale_oak_door": () => kr,
    "minecraft:pale_oak_double_slab": () => Of,
    "minecraft:pale_oak_fence_gate": () => Ha,
    "minecraft:pale_oak_hanging_sign": () => sm,
    "minecraft:pale_oak_leaves": () => Vi,
    "minecraft:pale_oak_log": () => g_,
    "minecraft:pale_oak_pressure_plate": () => Gi,
    "minecraft:pale_oak_sapling": () => tr,
    "minecraft:pale_oak_slab": () => Xs,
    "minecraft:pale_oak_stairs": () => lp,
    "minecraft:pale_oak_standing_sign": () => Kd,
    "minecraft:pale_oak_trapdoor": () => ap,
    "minecraft:pale_oak_wall_sign": () => nr,
    "minecraft:pale_oak_wood": () => Ac,
    "minecraft:pearlescent_froglight": () => ud,
    "minecraft:peony": () => mf,
    "minecraft:petrified_oak_double_slab": () => Uc,
    "minecraft:petrified_oak_slab": () => mp,
    "minecraft:piglin_head": () => vu,
    "minecraft:pink_candle": () => _p,
    "minecraft:pink_candle_cake": () => Es,
    "minecraft:pink_glazed_terracotta": () => Ed,
    "minecraft:pink_petals": () => Zl,
    "minecraft:piston": () => Qr,
    "minecraft:piston_arm_collision": () => Wa,
    "minecraft:pitcher_crop": () => wi,
    "minecraft:pitcher_plant": () => as,
    "minecraft:player_head": () => Xo,
    "minecraft:pointed_dripstone": () => yp,
    "minecraft:polished_andesite_double_slab": () => Uu,
    "minecraft:polished_andesite_slab": () => gp,
    "minecraft:polished_andesite_stairs": () => wu,
    "minecraft:polished_basalt": () => Ma,
    "minecraft:polished_blackstone_brick_double_slab": () => Er,
    "minecraft:polished_blackstone_brick_slab": () => Fs,
    "minecraft:polished_blackstone_brick_stairs": () => Dl,
    "minecraft:polished_blackstone_brick_wall": () => ro,
    "minecraft:polished_blackstone_button": () => df,
    "minecraft:polished_blackstone_double_slab": () => xr,
    "minecraft:polished_blackstone_pressure_plate": () => V_,
    "minecraft:polished_blackstone_slab": () => p_,
    "minecraft:polished_blackstone_stairs": () => rl,
    "minecraft:polished_blackstone_wall": () => Xd,
    "minecraft:polished_deepslate_double_slab": () => mr,
    "minecraft:polished_deepslate_slab": () => Ei,
    "minecraft:polished_deepslate_stairs": () => zi,
    "minecraft:polished_deepslate_wall": () => gf,
    "minecraft:polished_diorite_double_slab": () => pu,
    "minecraft:polished_diorite_slab": () => Vl,
    "minecraft:polished_diorite_stairs": () => Jd,
    "minecraft:polished_granite_double_slab": () => Vp,
    "minecraft:polished_granite_slab": () => q_,
    "minecraft:polished_granite_stairs": () => Cs,
    "minecraft:polished_tuff_double_slab": () => us,
    "minecraft:polished_tuff_slab": () => Ja,
    "minecraft:polished_tuff_stairs": () => Qu,
    "minecraft:polished_tuff_wall": () => Ur,
    "minecraft:portal": () => lf,
    "minecraft:potatoes": () => Fi,
    "minecraft:powered_comparator": () => Ji,
    "minecraft:powered_repeater": () => Ml,
    "minecraft:prismarine_brick_double_slab": () => yf,
    "minecraft:prismarine_brick_slab": () => ts,
    "minecraft:prismarine_bricks_stairs": () => si,
    "minecraft:prismarine_double_slab": () => tl,
    "minecraft:prismarine_slab": () => el,
    "minecraft:prismarine_stairs": () => Zu,
    "minecraft:prismarine_wall": () => Cc,
    "minecraft:pumpkin": () => Ol,
    "minecraft:pumpkin_stem": () => ed,
    "minecraft:purple_candle": () => Su,
    "minecraft:purple_candle_cake": () => qd,
    "minecraft:purple_glazed_terracotta": () => bu,
    "minecraft:purpur_block": () => Zp,
    "minecraft:purpur_double_slab": () => I_,
    "minecraft:purpur_pillar": () => wm,
    "minecraft:purpur_slab": () => Br,
    "minecraft:purpur_stairs": () => of,
    "minecraft:quartz_block": () => Jo,
    "minecraft:quartz_double_slab": () => io,
    "minecraft:quartz_pillar": () => ls,
    "minecraft:quartz_slab": () => Ud,
    "minecraft:quartz_stairs": () => pc,
    "minecraft:rail": () => xs,
    "minecraft:red_candle": () => ic,
    "minecraft:red_candle_cake": () => Jp,
    "minecraft:red_glazed_terracotta": () => As,
    "minecraft:red_mushroom_block": () => Fo,
    "minecraft:red_nether_brick_double_slab": () => dr,
    "minecraft:red_nether_brick_slab": () => zd,
    "minecraft:red_nether_brick_stairs": () => Od,
    "minecraft:red_nether_brick_wall": () => dp,
    "minecraft:red_sandstone_double_slab": () => Rr,
    "minecraft:red_sandstone_slab": () => Kr,
    "minecraft:red_sandstone_stairs": () => qc,
    "minecraft:red_sandstone_wall": () => oi,
    "minecraft:redstone_torch": () => Io,
    "minecraft:redstone_wire": () => ss,
    "minecraft:reeds": () => f_,
    "minecraft:repeating_command_block": () => ef,
    "minecraft:resin_brick_double_slab": () => Ao,
    "minecraft:resin_brick_slab": () => ep,
    "minecraft:resin_brick_stairs": () => R_,
    "minecraft:resin_brick_wall": () => Af,
    "minecraft:resin_clump": () => Wr,
    "minecraft:respawn_anchor": () => Pr,
    "minecraft:rose_bush": () => om,
    "minecraft:sandstone_double_slab": () => Xi,
    "minecraft:sandstone_slab": () => qi,
    "minecraft:sandstone_stairs": () => Mo,
    "minecraft:sandstone_wall": () => Cf,
    "minecraft:scaffolding": () => zo,
    "minecraft:sculk_catalyst": () => Wo,
    "minecraft:sculk_sensor": () => yl,
    "minecraft:sculk_shrieker": () => ui,
    "minecraft:sculk_vein": () => Gu,
    "minecraft:sea_pickle": () => Vm,
    "minecraft:seagrass": () => bi,
    "minecraft:silver_glazed_terracotta": () => Co,
    "minecraft:skeleton_skull": () => Xc,
    "minecraft:small_amethyst_bud": () => Mi,
    "minecraft:small_dripleaf_block": () => sl,
    "minecraft:smoker": () => vr,
    "minecraft:smooth_quartz": () => Al,
    "minecraft:smooth_quartz_double_slab": () => or,
    "minecraft:smooth_quartz_slab": () => Gp,
    "minecraft:smooth_quartz_stairs": () => Kp,
    "minecraft:smooth_red_sandstone_double_slab": () => H_,
    "minecraft:smooth_red_sandstone_slab": () => Dd,
    "minecraft:smooth_red_sandstone_stairs": () => um,
    "minecraft:smooth_sandstone_double_slab": () => Sl,
    "minecraft:smooth_sandstone_slab": () => Sr,
    "minecraft:smooth_sandstone_stairs": () => No,
    "minecraft:smooth_stone_double_slab": () => Tm,
    "minecraft:smooth_stone_slab": () => Rp,
    "minecraft:sniffer_egg": () => uu,
    "minecraft:snow_layer": () => ti,
    "minecraft:soul_campfire": () => Sf,
    "minecraft:soul_fire": () => ar,
    "minecraft:soul_lantern": () => Cm,
    "minecraft:soul_torch": () => ec,
    "minecraft:spruce_button": () => ll,
    "minecraft:spruce_door": () => rc,
    "minecraft:spruce_double_slab": () => go,
    "minecraft:spruce_fence_gate": () => Md,
    "minecraft:spruce_hanging_sign": () => Am,
    "minecraft:spruce_leaves": () => xl,
    "minecraft:spruce_log": () => qs,
    "minecraft:spruce_pressure_plate": () => rs,
    "minecraft:spruce_sapling": () => Gs,
    "minecraft:spruce_slab": () => yu,
    "minecraft:spruce_stairs": () => qa,
    "minecraft:spruce_standing_sign": () => Iu,
    "minecraft:spruce_trapdoor": () => Ad,
    "minecraft:spruce_wall_sign": () => fp,
    "minecraft:spruce_wood": () => jp,
    "minecraft:standing_banner": () => cu,
    "minecraft:standing_sign": () => ym,
    "minecraft:sticky_piston": () => pl,
    "minecraft:sticky_piston_arm_collision": () => nd,
    "minecraft:stone_brick_double_slab": () => ul,
    "minecraft:stone_brick_slab": () => Y_,
    "minecraft:stone_brick_stairs": () => Xr,
    "minecraft:stone_brick_wall": () => dm,
    "minecraft:stone_button": () => _r,
    "minecraft:stone_pressure_plate": () => bs,
    "minecraft:stone_stairs": () => Yo,
    "minecraft:stonecutter_block": () => Wp,
    "minecraft:stripped_acacia_log": () => Um,
    "minecraft:stripped_acacia_wood": () => Si,
    "minecraft:stripped_bamboo_block": () => Oo,
    "minecraft:stripped_birch_log": () => c_,
    "minecraft:stripped_birch_wood": () => zl,
    "minecraft:stripped_cherry_log": () => Il,
    "minecraft:stripped_cherry_wood": () => Sc,
    "minecraft:stripped_crimson_hyphae": () => wd,
    "minecraft:stripped_crimson_stem": () => lu,
    "minecraft:stripped_dark_oak_log": () => ci,
    "minecraft:stripped_dark_oak_wood": () => yc,
    "minecraft:stripped_jungle_log": () => yr,
    "minecraft:stripped_jungle_wood": () => Ni,
    "minecraft:stripped_mangrove_log": () => $f,
    "minecraft:stripped_mangrove_wood": () => $s,
    "minecraft:stripped_oak_log": () => Ap,
    "minecraft:stripped_oak_wood": () => hc,
    "minecraft:stripped_pale_oak_log": () => Zs,
    "minecraft:stripped_pale_oak_wood": () => lo,
    "minecraft:stripped_spruce_log": () => Q_,
    "minecraft:stripped_spruce_wood": () => Dr,
    "minecraft:stripped_warped_hyphae": () => hm,
    "minecraft:stripped_warped_stem": () => hp,
    "minecraft:structure_block": () => sd,
    "minecraft:sunflower": () => Yl,
    "minecraft:suspicious_gravel": () => mc,
    "minecraft:suspicious_sand": () => co,
    "minecraft:sweet_berry_bush": () => u_,
    "minecraft:tall_grass": () => fd,
    "minecraft:tnt": () => jd,
    "minecraft:torch": () => Vr,
    "minecraft:torchflower_crop": () => b_,
    "minecraft:trapdoor": () => fi,
    "minecraft:trapped_chest": () => bm,
    "minecraft:trial_spawner": () => Pf,
    "minecraft:trip_wire": () => Ip,
    "minecraft:tripwire_hook": () => r_,
    "minecraft:tube_coral_fan": () => gi,
    "minecraft:tube_coral_wall_fan": () => jf,
    "minecraft:tuff_brick_double_slab": () => Qm,
    "minecraft:tuff_brick_slab": () => es,
    "minecraft:tuff_brick_stairs": () => K_,
    "minecraft:tuff_brick_wall": () => Cr,
    "minecraft:tuff_double_slab": () => rf,
    "minecraft:tuff_slab": () => xi,
    "minecraft:tuff_stairs": () => n_,
    "minecraft:tuff_wall": () => vo,
    "minecraft:turtle_egg": () => kf,
    "minecraft:twisting_vines": () => vm,
    "minecraft:underwater_tnt": () => qr,
    "minecraft:underwater_torch": () => ho,
    "minecraft:unlit_redstone_torch": () => Lf,
    "minecraft:unpowered_comparator": () => rd,
    "minecraft:unpowered_repeater": () => _m,
    "minecraft:vault": () => z_,
    "minecraft:verdant_froglight": () => hd,
    "minecraft:vine": () => Hr,
    "minecraft:wall_banner": () => xm,
    "minecraft:wall_sign": () => vc,
    "minecraft:warped_button": () => Ku,
    "minecraft:warped_door": () => Oa,
    "minecraft:warped_double_slab": () => bl,
    "minecraft:warped_fence_gate": () => Zc,
    "minecraft:warped_hanging_sign": () => __,
    "minecraft:warped_hyphae": () => e_,
    "minecraft:warped_pressure_plate": () => vi,
    "minecraft:warped_slab": () => bd,
    "minecraft:warped_stairs": () => Qo,
    "minecraft:warped_standing_sign": () => Nu,
    "minecraft:warped_stem": () => gd,
    "minecraft:warped_trapdoor": () => _c,
    "minecraft:warped_wall_sign": () => Zi,
    "minecraft:water": () => cm,
    "minecraft:waxed_copper_bulb": () => ur,
    "minecraft:waxed_copper_door": () => sf,
    "minecraft:waxed_copper_trapdoor": () => Po,
    "minecraft:waxed_cut_copper_slab": () => bf,
    "minecraft:waxed_cut_copper_stairs": () => er,
    "minecraft:waxed_double_cut_copper_slab": () => tm,
    "minecraft:waxed_exposed_copper_bulb": () => Os,
    "minecraft:waxed_exposed_copper_door": () => am,
    "minecraft:waxed_exposed_copper_trapdoor": () => Hm,
    "minecraft:waxed_exposed_cut_copper_slab": () => yi,
    "minecraft:waxed_exposed_cut_copper_stairs": () => gs,
    "minecraft:waxed_exposed_double_cut_copper_slab": () => eu,
    "minecraft:waxed_oxidized_copper_bulb": () => X_,
    "minecraft:waxed_oxidized_copper_door": () => a_,
    "minecraft:waxed_oxidized_copper_trapdoor": () => xc,
    "minecraft:waxed_oxidized_cut_copper_slab": () => Or,
    "minecraft:waxed_oxidized_cut_copper_stairs": () => Lm,
    "minecraft:waxed_oxidized_double_cut_copper_slab": () => af,
    "minecraft:waxed_weathered_copper_bulb": () => Om,
    "minecraft:waxed_weathered_copper_door": () => Eu,
    "minecraft:waxed_weathered_copper_trapdoor": () => uc,
    "minecraft:waxed_weathered_cut_copper_slab": () => Td,
    "minecraft:waxed_weathered_cut_copper_stairs": () => F_,
    "minecraft:waxed_weathered_double_cut_copper_slab": () => ac,
    "minecraft:weathered_copper_bulb": () => Lp,
    "minecraft:weathered_copper_door": () => dd,
    "minecraft:weathered_copper_trapdoor": () => Bd,
    "minecraft:weathered_cut_copper_slab": () => w_,
    "minecraft:weathered_cut_copper_stairs": () => ol,
    "minecraft:weathered_double_cut_copper_slab": () => sp,
    "minecraft:weeping_vines": () => lm,
    "minecraft:wheat": () => Xu,
    "minecraft:white_candle": () => Wc,
    "minecraft:white_candle_cake": () => Np,
    "minecraft:white_glazed_terracotta": () => fm,
    "minecraft:wither_skeleton_skull": () => ju,
    "minecraft:wooden_button": () => cd,
    "minecraft:wooden_door": () => ns,
    "minecraft:wooden_pressure_plate": () => If,
    "minecraft:yellow_candle": () => W_,
    "minecraft:yellow_candle_cake": () => Kl,
    "minecraft:yellow_glazed_terracotta": () => Zr,
    "minecraft:zombie_head": () => La
});
var Aa = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    Ra = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    za = {
        ground_sign_direction: {
            min: 0,
            max: 15
        }
    },
    Ma = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    La = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Oa = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    Fa = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Wa = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Ga = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    Na = {
        in_wall_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    Ua = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    $a = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Va = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ja = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    qa = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Ha = {
        in_wall_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    Ka = {
        lit: {
            min: 0,
            max: 1
        }
    },
    Ja = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ya = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    Za = {
        attached_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        },
        ground_sign_direction: {
            min: 0,
            max: 15
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    Qa = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Xa = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    ei = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    ti = {
        covered_bit: {
            min: 0,
            max: 1
        },
        height: {
            min: 0,
            max: 7
        }
    },
    ni = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ai = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    ii = {
        facing_direction: {
            min: 0,
            max: 5
        },
        item_frame_map_bit: {
            min: 0,
            max: 1
        },
        item_frame_photo_bit: {
            min: 0,
            max: 1
        }
    },
    ri = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    oi = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    si = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    li = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ci = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    mi = {
        coral_fan_direction: {
            min: 0,
            max: 1
        }
    },
    _i = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    di = {
        coral_fan_direction: {
            min: 0,
            max: 1
        }
    },
    ui = {
        active: {
            min: 0,
            max: 1
        },
        can_summon: {
            min: 0,
            max: 1
        }
    },
    pi = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    fi = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    hi = {
        coral_fan_direction: {
            min: 0,
            max: 1
        }
    },
    bi = {
        sea_grass_type: {
            values: ["default", "double_top", "double_bot"]
        }
    },
    gi = {
        coral_fan_direction: {
            min: 0,
            max: 1
        }
    },
    yi = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ki = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    wi = {
        growth: {
            min: 0,
            max: 7
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    xi = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    vi = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    Si = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Ii = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ci = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Bi = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Di = {
        lit: {
            min: 0,
            max: 1
        }
    },
    Ei = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ti = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    Pi = {
        coral_direction: {
            min: 0,
            max: 3
        }
    },
    Ai = {
        update_bit: {
            min: 0,
            max: 1
        }
    },
    Ri = {
        books_stored: {
            min: 0,
            max: 63
        },
        direction: {
            min: 0,
            max: 3
        }
    },
    zi = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Mi = {
        "minecraft:block_face": {
            values: ["down", "up", "north", "south", "west", "east"]
        }
    },
    Li = {
        rail_data_bit: {
            min: 0,
            max: 1
        },
        rail_direction: {
            min: 0,
            max: 5
        }
    },
    Oi = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    Fi = {
        growth: {
            min: 0,
            max: 7
        }
    },
    Wi = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Gi = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    Ni = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Ui = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    $i = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Vi = {
        persistent_bit: {
            min: 0,
            max: 1
        },
        update_bit: {
            min: 0,
            max: 1
        }
    },
    ji = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    qi = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Hi = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ki = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    Ji = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        output_lit_bit: {
            min: 0,
            max: 1
        },
        output_subtract_bit: {
            min: 0,
            max: 1
        }
    },
    Yi = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Zi = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Qi = {
        age_bit: {
            min: 0,
            max: 1
        }
    },
    Xi = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    er = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    tr = {
        age_bit: {
            min: 0,
            max: 1
        }
    },
    nr = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    ar = {
        age: {
            min: 0,
            max: 15
        }
    },
    ir = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    rr = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    or = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    sr = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    lr = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    cr = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    mr = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    _r = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    dr = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ur = {
        lit: {
            min: 0,
            max: 1
        },
        powered_bit: {
            min: 0,
            max: 1
        }
    },
    pr = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    fr = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    hr = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    br = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    gr = {
        attached_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        },
        ground_sign_direction: {
            min: 0,
            max: 15
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    yr = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    kr = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    wr = {
        age_bit: {
            min: 0,
            max: 1
        }
    },
    xr = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    vr = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Sr = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ir = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Cr = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    Br = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Dr = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Er = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Tr = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Pr = {
        respawn_anchor_charge: {
            min: 0,
            max: 4
        }
    },
    Ar = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    Rr = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    zr = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Mr = {
        deprecated: {
            min: 0,
            max: 3
        },
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Lr = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Or = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Fr = {
        persistent_bit: {
            min: 0,
            max: 1
        },
        update_bit: {
            min: 0,
            max: 1
        }
    },
    Wr = {
        multi_face_direction_bits: {
            min: 0,
            max: 63
        }
    },
    Gr = {
        coral_fan_direction: {
            min: 0,
            max: 1
        }
    },
    Nr = {
        lit: {
            min: 0,
            max: 1
        }
    },
    Ur = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    $r = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Vr = {
        torch_facing_direction: {
            values: ["unknown", "west", "east", "north", "south", "top"]
        }
    },
    jr = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    qr = {
        explode_bit: {
            min: 0,
            max: 1
        }
    },
    Hr = {
        vine_direction_bits: {
            min: 0,
            max: 15
        }
    },
    Kr = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Jr = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    Yr = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Zr = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Qr = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Xr = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    eo = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    to = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    no = {
        lit: {
            min: 0,
            max: 1
        },
        powered_bit: {
            min: 0,
            max: 1
        }
    },
    ao = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    io = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ro = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    oo = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    so = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    lo = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    co = {
        brushed_progress: {
            min: 0,
            max: 3
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    mo = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    _o = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    uo = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    po = {
        persistent_bit: {
            min: 0,
            max: 1
        },
        update_bit: {
            min: 0,
            max: 1
        }
    },
    fo = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    ho = {
        torch_facing_direction: {
            values: ["unknown", "west", "east", "north", "south", "top"]
        }
    },
    bo = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    go = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    yo = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ko = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    wo = {
        attached_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        },
        ground_sign_direction: {
            min: 0,
            max: 15
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    xo = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    vo = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    So = {
        "minecraft:facing_direction": {
            values: ["down", "up", "north", "south", "west", "east"]
        },
        powered_bit: {
            min: 0,
            max: 1
        }
    },
    Io = {
        torch_facing_direction: {
            values: ["unknown", "west", "east", "north", "south", "top"]
        }
    },
    Co = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Bo = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Do = {
        attached_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        },
        ground_sign_direction: {
            min: 0,
            max: 15
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    Eo = {
        coral_direction: {
            min: 0,
            max: 3
        }
    },
    To = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Po = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    Ao = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ro = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    zo = {
        stability: {
            min: 0,
            max: 7
        },
        stability_check: {
            min: 0,
            max: 1
        }
    },
    Mo = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Lo = {
        lit: {
            min: 0,
            max: 1
        }
    },
    Oo = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Fo = {
        huge_mushroom_bits: {
            min: 0,
            max: 15
        }
    },
    Wo = {
        bloom: {
            min: 0,
            max: 1
        }
    },
    Go = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    No = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Uo = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    $o = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Vo = {
        direction: {
            min: 0,
            max: 15
        }
    },
    jo = {
        lit: {
            min: 0,
            max: 1
        }
    },
    qo = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Ho = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    Ko = {
        age_bit: {
            min: 0,
            max: 1
        },
        bamboo_leaf_size: {
            values: ["no_leaves", "small_leaves", "large_leaves"]
        },
        bamboo_stalk_thickness: {
            values: ["thin", "thick"]
        }
    },
    Jo = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Yo = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Zo = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Qo = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Xo = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    es = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ts = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ns = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    as = {
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    is = {
        direction: {
            min: 0,
            max: 3
        }
    },
    rs = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    os = {
        in_wall_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    ss = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    ls = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    cs = {
        liquid_depth: {
            min: 0,
            max: 15
        }
    },
    ms = {
        attached_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        },
        ground_sign_direction: {
            min: 0,
            max: 15
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    _s = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ds = {
        direction: {
            min: 0,
            max: 3
        }
    },
    us = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ps = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    fs = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    hs = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    bs = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    gs = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    ys = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ks = {
        moisturized_amount: {
            min: 0,
            max: 7
        }
    },
    ws = {
        coral_direction: {
            min: 0,
            max: 3
        }
    },
    xs = {
        rail_direction: {
            min: 0,
            max: 9
        }
    },
    vs = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    Ss = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Is = {
        rail_data_bit: {
            min: 0,
            max: 1
        },
        rail_direction: {
            min: 0,
            max: 5
        }
    },
    Cs = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Bs = {
        persistent_bit: {
            min: 0,
            max: 1
        },
        update_bit: {
            min: 0,
            max: 1
        }
    },
    Ds = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Es = {
        lit: {
            min: 0,
            max: 1
        }
    },
    Ts = {
        coral_direction: {
            min: 0,
            max: 3
        }
    },
    Ps = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    As = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Rs = {
        in_wall_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    zs = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ms = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ls = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Os = {
        lit: {
            min: 0,
            max: 1
        },
        powered_bit: {
            min: 0,
            max: 1
        }
    },
    Fs = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ws = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Gs = {
        age_bit: {
            min: 0,
            max: 1
        }
    },
    Ns = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    Us = {
        ground_sign_direction: {
            min: 0,
            max: 15
        }
    },
    $s = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Vs = {
        deprecated: {
            min: 0,
            max: 3
        },
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    js = {
        facing_direction: {
            min: 0,
            max: 5
        },
        item_frame_map_bit: {
            min: 0,
            max: 1
        },
        item_frame_photo_bit: {
            min: 0,
            max: 1
        }
    },
    qs = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Hs = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ks = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Js = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ys = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Zs = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Qs = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Xs = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    el = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    tl = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    nl = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    al = {
        torch_facing_direction: {
            values: ["unknown", "west", "east", "north", "south", "top"]
        }
    },
    il = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    rl = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    ol = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    sl = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    ll = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    cl = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    ml = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    _l = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    dl = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ul = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    pl = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    fl = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    hl = {
        "minecraft:block_face": {
            values: ["down", "up", "north", "south", "west", "east"]
        }
    },
    bl = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    gl = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    yl = {
        sculk_sensor_phase: {
            min: 0,
            max: 2
        }
    },
    kl = {
        lit: {
            min: 0,
            max: 1
        },
        powered_bit: {
            min: 0,
            max: 1
        }
    },
    wl = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    xl = {
        persistent_bit: {
            min: 0,
            max: 1
        },
        update_bit: {
            min: 0,
            max: 1
        }
    },
    vl = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    Sl = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Il = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Cl = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Bl = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    Dl = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    El = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    Tl = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    Pl = {
        facing_direction: {
            min: 0,
            max: 5
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    Al = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Rl = {
        age: {
            min: 0,
            max: 5
        }
    },
    zl = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Ml = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        repeater_delay: {
            min: 0,
            max: 3
        }
    },
    Ll = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    Ol = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Fl = {
        direction: {
            min: 0,
            max: 3
        }
    },
    Wl = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    Gl = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Nl = {
        lit: {
            min: 0,
            max: 1
        }
    },
    Ul = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    $l = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Vl = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    jl = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    ql = {
        direction: {
            min: 0,
            max: 3
        }
    },
    Hl = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Kl = {
        lit: {
            min: 0,
            max: 1
        }
    },
    Jl = {
        in_wall_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    Yl = {
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    Zl = {
        growth: {
            min: 0,
            max: 7
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Ql = {
        attached_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        },
        ground_sign_direction: {
            min: 0,
            max: 15
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    Xl = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    ec = {
        torch_facing_direction: {
            values: ["unknown", "west", "east", "north", "south", "top"]
        }
    },
    tc = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    nc = {
        in_wall_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    ac = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ic = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    rc = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    oc = {
        age: {
            min: 0,
            max: 3
        }
    },
    sc = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    lc = {
        "minecraft:block_face": {
            values: ["down", "up", "north", "south", "west", "east"]
        }
    },
    cc = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    mc = {
        brushed_progress: {
            min: 0,
            max: 3
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    _c = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    dc = {
        liquid_depth: {
            min: 0,
            max: 15
        }
    },
    uc = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    pc = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    fc = {
        growing_plant_age: {
            min: 0,
            max: 25
        }
    },
    hc = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    bc = {
        attached_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        },
        ground_sign_direction: {
            min: 0,
            max: 15
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    gc = {
        facing_direction: {
            min: 0,
            max: 5
        },
        growth: {
            min: 0,
            max: 7
        }
    },
    yc = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    kc = {
        coral_direction: {
            min: 0,
            max: 3
        }
    },
    wc = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    xc = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    vc = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Sc = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Ic = {
        facing_direction: {
            min: 0,
            max: 5
        },
        rotation: {
            min: 0,
            max: 3
        }
    },
    Cc = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    Bc = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    Dc = {
        in_wall_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    Ec = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Tc = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    Pc = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ac = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Rc = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    zc = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    Mc = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Lc = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Oc = {
        growth: {
            min: 0,
            max: 7
        }
    },
    Fc = {
        lit: {
            min: 0,
            max: 1
        }
    },
    Wc = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    Gc = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Nc = {
        rail_data_bit: {
            min: 0,
            max: 1
        },
        rail_direction: {
            min: 0,
            max: 5
        }
    },
    Uc = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    $c = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Vc = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    jc = {
        persistent_bit: {
            min: 0,
            max: 1
        },
        update_bit: {
            min: 0,
            max: 1
        }
    },
    qc = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Hc = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Kc = {
        coral_direction: {
            min: 0,
            max: 3
        }
    },
    Jc = {
        in_wall_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    Yc = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    Zc = {
        in_wall_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    Qc = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Xc = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    em = {
        composter_fill_level: {
            min: 0,
            max: 8
        }
    },
    tm = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    nm = {
        kelp_age: {
            min: 0,
            max: 25
        }
    },
    am = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    im = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    rm = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    om = {
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    sm = {
        attached_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        },
        ground_sign_direction: {
            min: 0,
            max: 15
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    lm = {
        weeping_vines_age: {
            min: 0,
            max: 25
        }
    },
    cm = {
        liquid_depth: {
            min: 0,
            max: 15
        }
    },
    mm = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    _m = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        repeater_delay: {
            min: 0,
            max: 3
        }
    },
    dm = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    um = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    pm = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    fm = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    hm = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    bm = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    gm = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    ym = {
        ground_sign_direction: {
            min: 0,
            max: 15
        }
    },
    km = {
        multi_face_direction_bits: {
            min: 0,
            max: 63
        }
    },
    wm = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    xm = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    vm = {
        twisting_vines_age: {
            min: 0,
            max: 25
        }
    },
    Sm = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Im = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    Cm = {
        hanging: {
            min: 0,
            max: 1
        }
    },
    Bm = {
        direction: {
            min: 0,
            max: 3
        },
        honey_level: {
            min: 0,
            max: 5
        }
    },
    Dm = {
        drag_down: {
            min: 0,
            max: 1
        }
    },
    Em = {
        extinguished: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Tm = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Pm = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    Am = {
        attached_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        },
        ground_sign_direction: {
            min: 0,
            max: 15
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    Rm = {
        persistent_bit: {
            min: 0,
            max: 1
        },
        update_bit: {
            min: 0,
            max: 1
        }
    },
    zm = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Mm = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Lm = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Om = {
        lit: {
            min: 0,
            max: 1
        },
        powered_bit: {
            min: 0,
            max: 1
        }
    },
    Fm = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Wm = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        sculk_sensor_phase: {
            min: 0,
            max: 2
        }
    },
    Gm = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Nm = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    Um = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    $m = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Vm = {
        cluster_count: {
            min: 0,
            max: 3
        },
        dead_bit: {
            min: 0,
            max: 1
        }
    },
    jm = {
        ground_sign_direction: {
            min: 0,
            max: 15
        }
    },
    qm = {
        attached_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        },
        ground_sign_direction: {
            min: 0,
            max: 15
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    Hm = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    Km = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    Jm = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Ym = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Zm = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Qm = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Xm = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    e_ = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    t_ = {
        growth: {
            min: 0,
            max: 7
        }
    },
    n_ = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    a_ = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    i_ = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    r_ = {
        attached_bit: {
            min: 0,
            max: 1
        },
        direction: {
            min: 0,
            max: 3
        },
        powered_bit: {
            min: 0,
            max: 1
        }
    },
    o_ = {
        growing_plant_age: {
            min: 0,
            max: 25
        }
    },
    s_ = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    l_ = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    c_ = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    m_ = {
        big_dripleaf_head: {
            min: 0,
            max: 1
        },
        big_dripleaf_tilt: {
            values: ["none", "unstable", "partial_tilt", "full_tilt"]
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    __ = {
        attached_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        },
        ground_sign_direction: {
            min: 0,
            max: 15
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    d_ = {
        lit: {
            min: 0,
            max: 1
        }
    },
    u_ = {
        growth: {
            min: 0,
            max: 7
        }
    },
    p_ = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    f_ = {
        age: {
            min: 0,
            max: 15
        }
    },
    h_ = {
        age_bit: {
            min: 0,
            max: 1
        }
    },
    b_ = {
        growth: {
            min: 0,
            max: 7
        }
    },
    g_ = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    y_ = {
        ground_sign_direction: {
            min: 0,
            max: 15
        }
    },
    k_ = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    w_ = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    x_ = {
        persistent_bit: {
            min: 0,
            max: 1
        },
        update_bit: {
            min: 0,
            max: 1
        }
    },
    v_ = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    S_ = {
        age: {
            min: 0,
            max: 15
        }
    },
    I_ = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    C_ = {
        tip: {
            min: 0,
            max: 1
        }
    },
    B_ = {
        pale_moss_carpet_side_east: {
            values: ["none", "short", "tall"]
        },
        pale_moss_carpet_side_north: {
            values: ["none", "short", "tall"]
        },
        pale_moss_carpet_side_south: {
            values: ["none", "short", "tall"]
        },
        pale_moss_carpet_side_west: {
            values: ["none", "short", "tall"]
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    D_ = {
        end_portal_eye_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    E_ = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    T_ = {
        lit: {
            min: 0,
            max: 1
        }
    },
    P_ = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    A_ = {
        huge_mushroom_bits: {
            min: 0,
            max: 15
        }
    },
    R_ = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    z_ = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        ominous: {
            min: 0,
            max: 1
        },
        vault_state: {
            values: ["inactive", "active", "unlocking", "ejecting"]
        }
    },
    M_ = {
        direction: {
            min: 0,
            max: 3
        },
        honey_level: {
            min: 0,
            max: 5
        }
    },
    L_ = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    O_ = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    F_ = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    W_ = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    G_ = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    N_ = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    U_ = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    $_ = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    V_ = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    j_ = {
        ground_sign_direction: {
            min: 0,
            max: 15
        }
    },
    q_ = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    H_ = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    K_ = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    J_ = {
        lit: {
            min: 0,
            max: 1
        },
        powered_bit: {
            min: 0,
            max: 1
        }
    },
    Y_ = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Z_ = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Q_ = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    X_ = {
        lit: {
            min: 0,
            max: 1
        },
        powered_bit: {
            min: 0,
            max: 1
        }
    },
    ed = {
        facing_direction: {
            min: 0,
            max: 5
        },
        growth: {
            min: 0,
            max: 7
        }
    },
    td = {
        persistent_bit: {
            min: 0,
            max: 1
        },
        update_bit: {
            min: 0,
            max: 1
        }
    },
    nd = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    ad = {
        age_bit: {
            min: 0,
            max: 1
        }
    },
    id = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    rd = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        output_lit_bit: {
            min: 0,
            max: 1
        },
        output_subtract_bit: {
            min: 0,
            max: 1
        }
    },
    od = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    sd = {
        structure_block_type: {
            values: ["data", "save", "load", "corner", "invalid", "export"]
        }
    },
    ld = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    cd = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    md = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    _d = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    dd = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    ud = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    pd = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    fd = {
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    hd = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    bd = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    gd = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    yd = {
        coral_fan_direction: {
            min: 0,
            max: 1
        }
    },
    kd = {
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    wd = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    xd = {
        age: {
            min: 0,
            max: 2
        },
        direction: {
            min: 0,
            max: 3
        }
    },
    vd = {
        lever_direction: {
            values: ["down_east_west", "east", "west", "south", "north", "up_north_south", "up_east_west", "down_north_south"]
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    Sd = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Id = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Cd = {
        torch_facing_direction: {
            values: ["unknown", "west", "east", "north", "south", "top"]
        }
    },
    Bd = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    Dd = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ed = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Td = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Pd = {
        coral_fan_direction: {
            min: 0,
            max: 1
        }
    },
    Ad = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    Rd = {
        conditional_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    zd = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Md = {
        in_wall_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    Ld = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Od = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Fd = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Wd = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Gd = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    Nd = {
        persistent_bit: {
            min: 0,
            max: 1
        },
        update_bit: {
            min: 0,
            max: 1
        }
    },
    Ud = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    $d = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Vd = {
        direction: {
            min: 0,
            max: 3
        },
        head_piece_bit: {
            min: 0,
            max: 1
        },
        occupied_bit: {
            min: 0,
            max: 1
        }
    },
    jd = {
        explode_bit: {
            min: 0,
            max: 1
        }
    },
    qd = {
        lit: {
            min: 0,
            max: 1
        }
    },
    Hd = {
        coral_fan_direction: {
            min: 0,
            max: 1
        }
    },
    Kd = {
        ground_sign_direction: {
            min: 0,
            max: 15
        }
    },
    Jd = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Yd = {
        coral_fan_direction: {
            min: 0,
            max: 1
        }
    },
    Zd = {
        direction: {
            min: 0,
            max: 3
        }
    },
    Qd = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Xd = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    eu = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    tu = {
        coral_direction: {
            min: 0,
            max: 3
        }
    },
    nu = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    au = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    iu = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    ru = {
        facing_direction: {
            min: 0,
            max: 5
        },
        toggle_bit: {
            min: 0,
            max: 1
        }
    },
    ou = {
        attachment: {
            values: ["standing", "hanging", "side", "multiple"]
        },
        direction: {
            min: 0,
            max: 3
        },
        toggle_bit: {
            min: 0,
            max: 1
        }
    },
    su = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        powered_bit: {
            min: 0,
            max: 1
        }
    },
    lu = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    cu = {
        ground_sign_direction: {
            min: 0,
            max: 15
        }
    },
    mu = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    _u = {
        hanging: {
            min: 0,
            max: 1
        },
        propagule_stage: {
            min: 0,
            max: 4
        }
    },
    du = {
        age: {
            min: 0,
            max: 15
        }
    },
    uu = {
        cracked_state: {
            values: ["no_cracks", "cracked", "max_cracked"]
        }
    },
    pu = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    fu = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    hu = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    bu = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    gu = {
        infiniburn_bit: {
            min: 0,
            max: 1
        }
    },
    yu = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ku = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    wu = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    xu = {
        coral_direction: {
            min: 0,
            max: 3
        }
    },
    vu = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Su = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    Iu = {
        ground_sign_direction: {
            min: 0,
            max: 15
        }
    },
    Cu = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Bu = {
        coral_fan_direction: {
            min: 0,
            max: 1
        }
    },
    Du = {
        hanging: {
            min: 0,
            max: 1
        }
    },
    Eu = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    Tu = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Pu = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Au = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Ru = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    zu = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Mu = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Lu = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Ou = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Fu = {
        bite_counter: {
            min: 0,
            max: 6
        }
    },
    Wu = {
        attached_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        },
        ground_sign_direction: {
            min: 0,
            max: 15
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    Gu = {
        multi_face_direction_bits: {
            min: 0,
            max: 63
        }
    },
    Nu = {
        ground_sign_direction: {
            min: 0,
            max: 15
        }
    },
    Uu = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    $u = {
        ground_sign_direction: {
            min: 0,
            max: 15
        }
    },
    Vu = {
        liquid_depth: {
            min: 0,
            max: 15
        }
    },
    ju = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    qu = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Hu = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Ku = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Ju = {
        age_bit: {
            min: 0,
            max: 1
        }
    },
    Yu = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Zu = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Qu = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Xu = {
        growth: {
            min: 0,
            max: 7
        }
    },
    ep = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    tp = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    np = {
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    ap = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    ip = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    rp = {
        ground_sign_direction: {
            min: 0,
            max: 15
        }
    },
    op = {
        ground_sign_direction: {
            min: 0,
            max: 15
        }
    },
    sp = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    lp = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    cp = {
        huge_mushroom_bits: {
            min: 0,
            max: 15
        }
    },
    mp = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    _p = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    dp = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    up = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    pp = {
        facing_direction: {
            min: 0,
            max: 5
        },
        triggered_bit: {
            min: 0,
            max: 1
        }
    },
    fp = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    hp = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    bp = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    gp = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    yp = {
        dripstone_thickness: {
            values: ["tip", "frustum", "middle", "base", "merge"]
        },
        hanging: {
            min: 0,
            max: 1
        }
    },
    kp = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    wp = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    xp = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    vp = {
        active: {
            min: 0,
            max: 1
        },
        natural: {
            min: 0,
            max: 1
        },
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Sp = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Ip = {
        attached_bit: {
            min: 0,
            max: 1
        },
        disarmed_bit: {
            min: 0,
            max: 1
        },
        powered_bit: {
            min: 0,
            max: 1
        },
        suspended_bit: {
            min: 0,
            max: 1
        }
    },
    Cp = {
        cauldron_liquid: {
            values: ["water", "lava", "powder_snow"]
        },
        fill_level: {
            min: 0,
            max: 6
        }
    },
    Bp = {
        growing_plant_age: {
            min: 0,
            max: 25
        }
    },
    Dp = {
        coral_direction: {
            min: 0,
            max: 3
        }
    },
    Ep = {
        age_bit: {
            min: 0,
            max: 1
        }
    },
    Tp = {
        direction: {
            min: 0,
            max: 3
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upside_down_bit: {
            min: 0,
            max: 1
        }
    },
    Pp = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ap = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Rp = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    zp = {
        brewing_stand_slot_a_bit: {
            min: 0,
            max: 1
        },
        brewing_stand_slot_b_bit: {
            min: 0,
            max: 1
        },
        brewing_stand_slot_c_bit: {
            min: 0,
            max: 1
        }
    },
    Mp = {
        age_bit: {
            min: 0,
            max: 1
        }
    },
    Lp = {
        lit: {
            min: 0,
            max: 1
        },
        powered_bit: {
            min: 0,
            max: 1
        }
    },
    Op = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Fp = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Wp = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Gp = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Np = {
        lit: {
            min: 0,
            max: 1
        }
    },
    Up = {
        lit: {
            min: 0,
            max: 1
        }
    },
    $p = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Vp = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    jp = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    qp = {
        in_wall_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    Hp = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Kp = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    Jp = {
        lit: {
            min: 0,
            max: 1
        }
    },
    Yp = {
        persistent_bit: {
            min: 0,
            max: 1
        },
        update_bit: {
            min: 0,
            max: 1
        }
    },
    Zp = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Qp = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Xp = {
        candles: {
            min: 0,
            max: 3
        },
        lit: {
            min: 0,
            max: 1
        }
    },
    ef = {
        conditional_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    tf = {
        torch_facing_direction: {
            values: ["unknown", "west", "east", "north", "south", "top"]
        }
    },
    nf = {
        age: {
            min: 0,
            max: 3
        }
    },
    af = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    rf = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    of = {
        upside_down_bit: {
            min: 0,
            max: 1
        },
        weirdo_direction: {
            min: 0,
            max: 3
        }
    },
    sf = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    lf = {
        portal_axis: {
            values: ["unknown", "x", "z"]
        }
    },
    cf = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    mf = {
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    _f = {
        conditional_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    df = {
        button_pressed_bit: {
            min: 0,
            max: 1
        },
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    uf = {
        crafting: {
            min: 0,
            max: 1
        },
        orientation: {
            values: ["down_east", "down_north", "down_south", "down_west", "up_east", "up_north", "up_south", "up_west", "west_up", "east_up", "north_up", "south_up"]
        },
        triggered_bit: {
            min: 0,
            max: 1
        }
    },
    pf = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    ff = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    hf = {
        "minecraft:block_face": {
            values: ["down", "up", "north", "south", "west", "east"]
        }
    },
    bf = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    gf = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    yf = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    kf = {
        cracked_state: {
            values: ["no_cracks", "cracked", "max_cracked"]
        },
        turtle_egg_count: {
            values: ["one_egg", "two_egg", "three_egg", "four_egg"]
        }
    },
    wf = {
        facing_direction: {
            min: 0,
            max: 5
        },
        triggered_bit: {
            min: 0,
            max: 1
        }
    },
    xf = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    vf = {
        attachment: {
            values: ["standing", "hanging", "side", "multiple"]
        },
        direction: {
            min: 0,
            max: 3
        }
    },
    Sf = {
        extinguished: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    If = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    Cf = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    Bf = {
        lit: {
            min: 0,
            max: 1
        }
    },
    Df = {
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        }
    },
    Ef = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Tf = {
        direction: {
            min: 0,
            max: 3
        }
    },
    Pf = {
        ominous: {
            min: 0,
            max: 1
        },
        trial_spawner_state: {
            min: 0,
            max: 5
        }
    },
    Af = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    Rf = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    zf = {
        lit: {
            min: 0,
            max: 1
        }
    },
    Mf = {
        wall_connection_type_east: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_north: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_south: {
            values: ["none", "short", "tall"]
        },
        wall_connection_type_west: {
            values: ["none", "short", "tall"]
        },
        wall_post_bit: {
            min: 0,
            max: 1
        }
    },
    Lf = {
        torch_facing_direction: {
            values: ["unknown", "west", "east", "north", "south", "top"]
        }
    },
    Of = {
        "minecraft:vertical_half": {
            values: ["bottom", "top"]
        }
    },
    Ff = {
        in_wall_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        }
    },
    Wf = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Gf = {
        torch_facing_direction: {
            values: ["unknown", "west", "east", "north", "south", "top"]
        }
    },
    Nf = {
        facing_direction: {
            min: 0,
            max: 5
        }
    },
    Uf = {
        redstone_signal: {
            min: 0,
            max: 15
        }
    },
    $f = {
        pillar_axis: {
            values: ["y", "x", "z"]
        }
    },
    Vf = {
        door_hinge_bit: {
            min: 0,
            max: 1
        },
        "minecraft:cardinal_direction": {
            values: ["south", "west", "north", "east"]
        },
        open_bit: {
            min: 0,
            max: 1
        },
        upper_block_bit: {
            min: 0,
            max: 1
        }
    },
    jf = {
        coral_direction: {
            min: 0,
            max: 3
        }
    },
    qf = {
        "minecraft:blue_candle": Aa,
        "minecraft:dark_oak_wood": Ra,
        "minecraft:birch_standing_sign": za,
        "minecraft:polished_basalt": Ma,
        "minecraft:zombie_head": La,
        "minecraft:warped_door": Oa,
        "minecraft:bamboo_block": Fa,
        "minecraft:piston_arm_collision": Wa,
        "minecraft:end_stone_brick_wall": Ga,
        "minecraft:fence_gate": Na,
        "minecraft:dark_oak_button": Ua,
        "minecraft:nether_brick_stairs": $a,
        "minecraft:blackstone_double_slab": Va,
        "minecraft:jungle_button": ja,
        "minecraft:spruce_stairs": qa,
        "minecraft:pale_oak_fence_gate": Ha,
        "minecraft:gray_candle_cake": Ka,
        "minecraft:polished_tuff_slab": Ja,
        "minecraft:cherry_pressure_plate": Ya,
        "minecraft:cherry_hanging_sign": Za,
        "minecraft:crimson_wall_sign": Qa,
        "minecraft:brick_wall": Xa,
        "minecraft:cobbled_deepslate_stairs": ei,
        "minecraft:snow_layer": ti,
        "minecraft:brick_double_slab": ni,
        "minecraft:black_candle": ai,
        "minecraft:glow_frame": ii,
        "minecraft:mud_brick_double_slab": ri,
        "minecraft:red_sandstone_wall": oi,
        "minecraft:prismarine_bricks_stairs": si,
        "minecraft:diorite_slab": li,
        "minecraft:stripped_dark_oak_log": ci,
        "minecraft:dead_bubble_coral_fan": mi,
        "minecraft:jungle_log": _i,
        "minecraft:bubble_coral_fan": di,
        "minecraft:sculk_shrieker": ui,
        "minecraft:lime_glazed_terracotta": pi,
        "minecraft:trapdoor": fi,
        "minecraft:dead_brain_coral_fan": hi,
        "minecraft:seagrass": bi,
        "minecraft:tube_coral_fan": gi,
        "minecraft:waxed_exposed_cut_copper_slab": yi,
        "minecraft:deepslate": ki,
        "minecraft:pitcher_crop": wi,
        "minecraft:tuff_slab": xi,
        "minecraft:warped_pressure_plate": vi,
        "minecraft:stripped_acacia_wood": Si,
        "minecraft:dark_prismarine_double_slab": Ii,
        "minecraft:oak_stairs": Ci,
        "minecraft:oak_log": Bi,
        "minecraft:light_blue_candle_cake": Di,
        "minecraft:polished_deepslate_slab": Ei,
        "minecraft:bamboo_door": Ti,
        "minecraft:dead_bubble_coral_wall_fan": Pi,
        "minecraft:flower_pot": Ai,
        "minecraft:chiseled_bookshelf": Ri,
        "minecraft:polished_deepslate_stairs": zi,
        "minecraft:small_amethyst_bud": Mi,
        "minecraft:activator_rail": Li,
        "minecraft:iron_trapdoor": Oi,
        "minecraft:potatoes": Fi,
        "minecraft:muddy_mangrove_roots": Wi,
        "minecraft:pale_oak_pressure_plate": Gi,
        "minecraft:stripped_jungle_wood": Ni,
        "minecraft:mangrove_log": Ui,
        "minecraft:oxidized_cut_copper_stairs": $i,
        "minecraft:pale_oak_leaves": Vi,
        "minecraft:deepslate_tile_double_slab": ji,
        "minecraft:sandstone_slab": qi,
        "minecraft:mossy_stone_brick_slab": Hi,
        "minecraft:orange_candle": Ki,
        "minecraft:powered_comparator": Ji,
        "minecraft:cut_sandstone_double_slab": Yi,
        "minecraft:warped_wall_sign": Zi,
        "minecraft:dark_oak_sapling": Qi,
        "minecraft:sandstone_double_slab": Xi,
        "minecraft:waxed_cut_copper_stairs": er,
        "minecraft:pale_oak_sapling": tr,
        "minecraft:pale_oak_wall_sign": nr,
        "minecraft:soul_fire": ar,
        "minecraft:magenta_candle": ir,
        "minecraft:mangrove_double_slab": rr,
        "minecraft:smooth_quartz_double_slab": or,
        "minecraft:dark_oak_slab": sr,
        "minecraft:deepslate_brick_wall": lr,
        "minecraft:oxidized_double_cut_copper_slab": cr,
        "minecraft:polished_deepslate_double_slab": mr,
        "minecraft:stone_button": _r,
        "minecraft:red_nether_brick_double_slab": dr,
        "minecraft:waxed_copper_bulb": ur,
        "minecraft:exposed_double_cut_copper_slab": pr,
        "minecraft:normal_stone_stairs": fr,
        "minecraft:diorite_double_slab": hr,
        "minecraft:end_stone_brick_slab": br,
        "minecraft:birch_hanging_sign": gr,
        "minecraft:stripped_jungle_log": yr,
        "minecraft:pale_oak_door": kr,
        "minecraft:oak_sapling": wr,
        "minecraft:polished_blackstone_double_slab": xr,
        "minecraft:smoker": vr,
        "minecraft:smooth_sandstone_slab": Sr,
        "minecraft:birch_log": Ir,
        "minecraft:tuff_brick_wall": Cr,
        "minecraft:purpur_slab": Br,
        "minecraft:stripped_spruce_wood": Dr,
        "minecraft:polished_blackstone_brick_double_slab": Er,
        "minecraft:crimson_double_slab": Tr,
        "minecraft:respawn_anchor": Pr,
        "minecraft:green_candle": Ar,
        "minecraft:red_sandstone_double_slab": Rr,
        "minecraft:birch_wood": zr,
        "minecraft:hay_block": Mr,
        "minecraft:jungle_wood": Lr,
        "minecraft:waxed_oxidized_cut_copper_slab": Or,
        "minecraft:oak_leaves": Fr,
        "minecraft:resin_clump": Wr,
        "minecraft:brain_coral_fan": Gr,
        "minecraft:cyan_candle_cake": Nr,
        "minecraft:polished_tuff_wall": Ur,
        "minecraft:bamboo_stairs": $r,
        "minecraft:torch": Vr,
        "minecraft:mud_brick_wall": jr,
        "minecraft:underwater_tnt": qr,
        "minecraft:vine": Hr,
        "minecraft:red_sandstone_slab": Kr,
        "minecraft:cherry_trapdoor": Jr,
        "minecraft:blackstone_slab": Yr,
        "minecraft:yellow_glazed_terracotta": Zr,
        "minecraft:piston": Qr,
        "minecraft:stone_brick_stairs": Xr,
        "minecraft:gray_candle": eo,
        "minecraft:diorite_wall": to,
        "minecraft:oxidized_copper_bulb": no,
        "minecraft:magenta_glazed_terracotta": ao,
        "minecraft:quartz_double_slab": io,
        "minecraft:polished_blackstone_brick_wall": ro,
        "minecraft:mangrove_slab": oo,
        "minecraft:orange_glazed_terracotta": so,
        "minecraft:stripped_pale_oak_wood": lo,
        "minecraft:suspicious_sand": co,
        "minecraft:mossy_cobblestone_wall": mo,
        "minecraft:heavy_weighted_pressure_plate": _o,
        "minecraft:lightning_rod": uo,
        "minecraft:acacia_leaves": po,
        "minecraft:cobblestone_wall": fo,
        "minecraft:underwater_torch": ho,
        "minecraft:deepslate_brick_double_slab": bo,
        "minecraft:spruce_double_slab": go,
        "minecraft:bamboo_mosaic_slab": yo,
        "minecraft:dark_oak_log": ko,
        "minecraft:acacia_hanging_sign": wo,
        "minecraft:ochre_froglight": xo,
        "minecraft:tuff_wall": vo,
        "minecraft:observer": So,
        "minecraft:redstone_torch": Io,
        "minecraft:silver_glazed_terracotta": Co,
        "minecraft:granite_stairs": Bo,
        "minecraft:dark_oak_hanging_sign": Do,
        "minecraft:dead_fire_coral_wall_fan": Eo,
        "minecraft:brown_glazed_terracotta": To,
        "minecraft:waxed_copper_trapdoor": Po,
        "minecraft:resin_brick_double_slab": Ao,
        "minecraft:birch_pressure_plate": Ro,
        "minecraft:scaffolding": zo,
        "minecraft:sandstone_stairs": Mo,
        "minecraft:green_candle_cake": Lo,
        "minecraft:stripped_bamboo_block": Oo,
        "minecraft:red_mushroom_block": Fo,
        "minecraft:sculk_catalyst": Wo,
        "minecraft:oak_double_slab": Go,
        "minecraft:smooth_sandstone_stairs": No,
        "minecraft:jungle_pressure_plate": Uo,
        "minecraft:double_cut_copper_slab": $o,
        "minecraft:chalkboard": Vo,
        "minecraft:brown_candle_cake": jo,
        "minecraft:acacia_wall_sign": qo,
        "minecraft:light_weighted_pressure_plate": Ho,
        "minecraft:bamboo": Ko,
        "minecraft:quartz_block": Jo,
        "minecraft:stone_stairs": Yo,
        "minecraft:deepslate_brick_slab": Zo,
        "minecraft:warped_stairs": Qo,
        "minecraft:player_head": Xo,
        "minecraft:tuff_brick_slab": es,
        "minecraft:prismarine_brick_slab": ts,
        "minecraft:wooden_door": ns,
        "minecraft:pitcher_plant": as,
        "minecraft:compound_creator": is,
        "minecraft:spruce_pressure_plate": rs,
        "minecraft:birch_fence_gate": os,
        "minecraft:redstone_wire": ss,
        "minecraft:quartz_pillar": ls,
        "minecraft:lava": cs,
        "minecraft:jungle_hanging_sign": ms,
        "minecraft:birch_slab": _s,
        "minecraft:loom": ds,
        "minecraft:polished_tuff_double_slab": us,
        "minecraft:crimson_door": ps,
        "minecraft:mangrove_pressure_plate": fs,
        "minecraft:jungle_slab": hs,
        "minecraft:stone_pressure_plate": bs,
        "minecraft:waxed_exposed_cut_copper_stairs": gs,
        "minecraft:mud_brick_slab": ys,
        "minecraft:farmland": ks,
        "minecraft:dead_brain_coral_wall_fan": ws,
        "minecraft:rail": xs,
        "minecraft:blackstone_wall": vs,
        "minecraft:mossy_cobblestone_stairs": Ss,
        "minecraft:detector_rail": Is,
        "minecraft:polished_granite_stairs": Cs,
        "minecraft:birch_leaves": Bs,
        "minecraft:dark_oak_double_slab": Ds,
        "minecraft:pink_candle_cake": Es,
        "minecraft:brain_coral_wall_fan": Ts,
        "minecraft:mangrove_wood": Ps,
        "minecraft:red_glazed_terracotta": As,
        "minecraft:dark_oak_fence_gate": Rs,
        "minecraft:mossy_cobblestone_slab": zs,
        "minecraft:bamboo_mosaic_double_slab": Ms,
        "minecraft:cobblestone_slab": Ls,
        "minecraft:waxed_exposed_copper_bulb": Os,
        "minecraft:polished_blackstone_brick_slab": Fs,
        "minecraft:normal_stone_slab": Ws,
        "minecraft:spruce_sapling": Gs,
        "minecraft:daylight_detector": Ns,
        "minecraft:mangrove_standing_sign": Us,
        "minecraft:stripped_mangrove_wood": $s,
        "minecraft:bone_block": Vs,
        "minecraft:frame": js,
        "minecraft:spruce_log": qs,
        "minecraft:mossy_stone_brick_double_slab": Hs,
        "minecraft:cut_red_sandstone_double_slab": Ks,
        "minecraft:bamboo_double_slab": Js,
        "minecraft:oak_slab": Ys,
        "minecraft:stripped_pale_oak_log": Zs,
        "minecraft:deepslate_tile_slab": Qs,
        "minecraft:pale_oak_slab": Xs,
        "minecraft:prismarine_slab": el,
        "minecraft:prismarine_double_slab": tl,
        "minecraft:cherry_door": nl,
        "minecraft:colored_torch_blue": al,
        "minecraft:crimson_hyphae": il,
        "minecraft:polished_blackstone_stairs": rl,
        "minecraft:weathered_cut_copper_stairs": ol,
        "minecraft:small_dripleaf_block": sl,
        "minecraft:spruce_button": ll,
        "minecraft:acacia_log": cl,
        "minecraft:crimson_trapdoor": ml,
        "minecraft:basalt": _l,
        "minecraft:normal_stone_double_slab": dl,
        "minecraft:stone_brick_double_slab": ul,
        "minecraft:sticky_piston": pl,
        "minecraft:ender_chest": fl,
        "minecraft:medium_amethyst_bud": hl,
        "minecraft:warped_double_slab": bl,
        "minecraft:jungle_wall_sign": gl,
        "minecraft:sculk_sensor": yl,
        "minecraft:copper_bulb": kl,
        "minecraft:diorite_stairs": wl,
        "minecraft:spruce_leaves": xl,
        "minecraft:acacia_door": vl,
        "minecraft:smooth_sandstone_double_slab": Sl,
        "minecraft:stripped_cherry_log": Il,
        "minecraft:crimson_button": Cl,
        "minecraft:iron_door": Bl,
        "minecraft:polished_blackstone_brick_stairs": Dl,
        "minecraft:mangrove_trapdoor": El,
        "minecraft:daylight_detector_inverted": Tl,
        "minecraft:barrel": Pl,
        "minecraft:smooth_quartz": Al,
        "minecraft:chorus_flower": Rl,
        "minecraft:stripped_birch_wood": zl,
        "minecraft:powered_repeater": Ml,
        "minecraft:light_blue_candle": Ll,
        "minecraft:pumpkin": Ol,
        "minecraft:element_constructor": Fl,
        "minecraft:oxidized_copper_trapdoor": Wl,
        "minecraft:granite_slab": Gl,
        "minecraft:black_candle_cake": Nl,
        "minecraft:exposed_cut_copper_stairs": Ul,
        "minecraft:mangrove_stairs": $l,
        "minecraft:polished_diorite_slab": Vl,
        "minecraft:cut_copper_stairs": jl,
        "minecraft:lab_table": ql,
        "minecraft:cherry_button": Hl,
        "minecraft:yellow_candle_cake": Kl,
        "minecraft:mangrove_fence_gate": Jl,
        "minecraft:sunflower": Yl,
        "minecraft:pink_petals": Zl,
        "minecraft:bamboo_hanging_sign": Ql,
        "minecraft:infested_deepslate": Xl,
        "minecraft:soul_torch": ec,
        "minecraft:deepslate_tile_stairs": tc,
        "minecraft:crimson_fence_gate": nc,
        "minecraft:waxed_weathered_double_cut_copper_slab": ac,
        "minecraft:red_candle": ic,
        "minecraft:spruce_door": rc,
        "minecraft:frosted_ice": oc,
        "minecraft:chipped_anvil": sc,
        "minecraft:large_amethyst_bud": lc,
        "minecraft:exposed_copper_door": cc,
        "minecraft:suspicious_gravel": mc,
        "minecraft:warped_trapdoor": _c,
        "minecraft:flowing_water": dc,
        "minecraft:waxed_weathered_copper_trapdoor": uc,
        "minecraft:quartz_stairs": pc,
        "minecraft:cave_vines": fc,
        "minecraft:stripped_oak_wood": hc,
        "minecraft:oak_hanging_sign": bc,
        "minecraft:melon_stem": gc,
        "minecraft:stripped_dark_oak_wood": yc,
        "minecraft:horn_coral_wall_fan": kc,
        "minecraft:oak_wood": wc,
        "minecraft:waxed_oxidized_copper_trapdoor": xc,
        "minecraft:wall_sign": vc,
        "minecraft:stripped_cherry_wood": Sc,
        "minecraft:jigsaw": Ic,
        "minecraft:prismarine_wall": Cc,
        "minecraft:border_block": Bc,
        "minecraft:bamboo_fence_gate": Dc,
        "minecraft:dark_oak_stairs": Ec,
        "minecraft:deepslate_tile_wall": Tc,
        "minecraft:cut_copper_slab": Pc,
        "minecraft:pale_oak_wood": Ac,
        "minecraft:acacia_pressure_plate": Rc,
        "minecraft:bamboo_trapdoor": zc,
        "minecraft:mangrove_wall_sign": Mc,
        "minecraft:oxidized_cut_copper_slab": Lc,
        "minecraft:beetroot": Oc,
        "minecraft:light_gray_candle_cake": Fc,
        "minecraft:white_candle": Wc,
        "minecraft:andesite_stairs": Gc,
        "minecraft:golden_rail": Nc,
        "minecraft:petrified_oak_double_slab": Uc,
        "minecraft:deprecated_anvil": $c,
        "minecraft:darkoak_wall_sign": Vc,
        "minecraft:jungle_leaves": jc,
        "minecraft:red_sandstone_stairs": qc,
        "minecraft:cyan_glazed_terracotta": Hc,
        "minecraft:fire_coral_wall_fan": Kc,
        "minecraft:jungle_fence_gate": Jc,
        "minecraft:jungle_trapdoor": Yc,
        "minecraft:warped_fence_gate": Zc,
        "minecraft:cut_sandstone_slab": Qc,
        "minecraft:skeleton_skull": Xc,
        "minecraft:composter": em,
        "minecraft:waxed_double_cut_copper_slab": tm,
        "minecraft:kelp": nm,
        "minecraft:waxed_exposed_copper_door": am,
        "minecraft:blue_glazed_terracotta": im,
        "minecraft:light_blue_glazed_terracotta": rm,
        "minecraft:rose_bush": om,
        "minecraft:pale_oak_hanging_sign": sm,
        "minecraft:weeping_vines": lm,
        "minecraft:water": cm,
        "minecraft:mud_brick_stairs": mm,
        "minecraft:unpowered_repeater": _m,
        "minecraft:stone_brick_wall": dm,
        "minecraft:smooth_red_sandstone_stairs": um,
        "minecraft:andesite_wall": pm,
        "minecraft:white_glazed_terracotta": fm,
        "minecraft:stripped_warped_hyphae": hm,
        "minecraft:trapped_chest": bm,
        "minecraft:acacia_trapdoor": gm,
        "minecraft:standing_sign": ym,
        "minecraft:glow_lichen": km,
        "minecraft:purpur_pillar": wm,
        "minecraft:wall_banner": xm,
        "minecraft:twisting_vines": vm,
        "minecraft:acacia_double_slab": Sm,
        "minecraft:dark_oak_door": Im,
        "minecraft:soul_lantern": Cm,
        "minecraft:bee_nest": Bm,
        "minecraft:bubble_column": Dm,
        "minecraft:campfire": Em,
        "minecraft:smooth_stone_double_slab": Tm,
        "minecraft:granite_wall": Pm,
        "minecraft:spruce_hanging_sign": Am,
        "minecraft:cherry_leaves": Rm,
        "minecraft:creeper_head": zm,
        "minecraft:black_glazed_terracotta": Mm,
        "minecraft:waxed_oxidized_cut_copper_stairs": Lm,
        "minecraft:waxed_weathered_copper_bulb": Om,
        "minecraft:dragon_head": Fm,
        "minecraft:calibrated_sculk_sensor": Wm,
        "minecraft:dark_prismarine_slab": Gm,
        "minecraft:copper_trapdoor": Nm,
        "minecraft:stripped_acacia_log": Um,
        "minecraft:cobbled_deepslate_double_slab": $m,
        "minecraft:sea_pickle": Vm,
        "minecraft:cherry_standing_sign": jm,
        "minecraft:mangrove_hanging_sign": qm,
        "minecraft:waxed_exposed_copper_trapdoor": Hm,
        "minecraft:brown_candle": Km,
        "minecraft:mossy_stone_brick_stairs": Jm,
        "minecraft:end_rod": Ym,
        "minecraft:crimson_stem": Zm,
        "minecraft:tuff_brick_double_slab": Qm,
        "minecraft:crimson_slab": Xm,
        "minecraft:warped_hyphae": e_,
        "minecraft:carrots": t_,
        "minecraft:tuff_stairs": n_,
        "minecraft:waxed_oxidized_copper_door": a_,
        "minecraft:andesite_double_slab": i_,
        "minecraft:tripwire_hook": r_,
        "minecraft:cave_vines_body_with_berries": o_,
        "minecraft:dark_oak_pressure_plate": s_,
        "minecraft:copper_door": l_,
        "minecraft:stripped_birch_log": c_,
        "minecraft:big_dripleaf": m_,
        "minecraft:warped_hanging_sign": __,
        "minecraft:blue_candle_cake": d_,
        "minecraft:sweet_berry_bush": u_,
        "minecraft:polished_blackstone_slab": p_,
        "minecraft:reeds": f_,
        "minecraft:jungle_sapling": h_,
        "minecraft:torchflower_crop": b_,
        "minecraft:pale_oak_log": g_,
        "minecraft:jungle_standing_sign": y_,
        "minecraft:cherry_double_slab": k_,
        "minecraft:weathered_cut_copper_slab": w_,
        "minecraft:dark_oak_leaves": x_,
        "minecraft:nether_brick_slab": v_,
        "minecraft:fire": S_,
        "minecraft:purpur_double_slab": I_,
        "minecraft:pale_hanging_moss": C_,
        "minecraft:pale_moss_carpet": B_,
        "minecraft:end_portal_frame": D_,
        "minecraft:bamboo_pressure_plate": E_,
        "minecraft:magenta_candle_cake": T_,
        "minecraft:exposed_copper_trapdoor": P_,
        "minecraft:mushroom_stem": A_,
        "minecraft:resin_brick_stairs": R_,
        "minecraft:vault": z_,
        "minecraft:beehive": M_,
        "minecraft:jungle_door": L_,
        "minecraft:nether_brick_double_slab": O_,
        "minecraft:waxed_weathered_cut_copper_stairs": F_,
        "minecraft:yellow_candle": W_,
        "minecraft:acacia_stairs": G_,
        "minecraft:bamboo_mosaic_stairs": N_,
        "minecraft:cherry_slab": U_,
        "minecraft:light_gray_candle": $_,
        "minecraft:polished_blackstone_pressure_plate": V_,
        "minecraft:acacia_standing_sign": j_,
        "minecraft:polished_granite_slab": q_,
        "minecraft:smooth_red_sandstone_double_slab": H_,
        "minecraft:tuff_brick_stairs": K_,
        "minecraft:exposed_copper_bulb": J_,
        "minecraft:stone_brick_slab": Y_,
        "minecraft:crimson_stairs": Z_,
        "minecraft:stripped_spruce_log": Q_,
        "minecraft:waxed_oxidized_copper_bulb": X_,
        "minecraft:pumpkin_stem": ed,
        "minecraft:azalea_leaves_flowered": td,
        "minecraft:sticky_piston_arm_collision": nd,
        "minecraft:acacia_sapling": ad,
        "minecraft:andesite_slab": id,
        "minecraft:unpowered_comparator": rd,
        "minecraft:lime_candle": od,
        "minecraft:structure_block": sd,
        "minecraft:end_brick_stairs": ld,
        "minecraft:wooden_button": cd,
        "minecraft:mangrove_door": md,
        "minecraft:end_stone_brick_double_slab": _d,
        "minecraft:weathered_copper_door": dd,
        "minecraft:pearlescent_froglight": ud,
        "minecraft:bamboo_button": pd,
        "minecraft:tall_grass": fd,
        "minecraft:verdant_froglight": hd,
        "minecraft:warped_slab": bd,
        "minecraft:warped_stem": gd,
        "minecraft:horn_coral_fan": yd,
        "minecraft:large_fern": kd,
        "minecraft:stripped_crimson_hyphae": wd,
        "minecraft:cocoa": xd,
        "minecraft:lever": vd,
        "minecraft:bamboo_slab": Sd,
        "minecraft:brick_stairs": Id,
        "minecraft:colored_torch_green": Cd,
        "minecraft:weathered_copper_trapdoor": Bd,
        "minecraft:smooth_red_sandstone_slab": Dd,
        "minecraft:pink_glazed_terracotta": Ed,
        "minecraft:waxed_weathered_cut_copper_slab": Td,
        "minecraft:fire_coral_fan": Pd,
        "minecraft:spruce_trapdoor": Ad,
        "minecraft:chain_command_block": Rd,
        "minecraft:red_nether_brick_slab": zd,
        "minecraft:spruce_fence_gate": Md,
        "minecraft:exposed_cut_copper_slab": Ld,
        "minecraft:red_nether_brick_stairs": Od,
        "minecraft:green_glazed_terracotta": Fd,
        "minecraft:anvil": Wd,
        "minecraft:birch_trapdoor": Gd,
        "minecraft:mangrove_leaves": Nd,
        "minecraft:quartz_slab": Ud,
        "minecraft:lit_pumpkin": $d,
        "minecraft:bed": Vd,
        "minecraft:tnt": jd,
        "minecraft:purple_candle_cake": qd,
        "minecraft:dead_tube_coral_fan": Hd,
        "minecraft:pale_oak_standing_sign": Kd,
        "minecraft:polished_diorite_stairs": Jd,
        "minecraft:dead_fire_coral_fan": Yd,
        "minecraft:decorated_pot": Zd,
        "minecraft:granite_double_slab": Qd,
        "minecraft:polished_blackstone_wall": Xd,
        "minecraft:waxed_exposed_double_cut_copper_slab": eu,
        "minecraft:bubble_coral_wall_fan": tu,
        "minecraft:birch_wall_sign": nu,
        "minecraft:bamboo_wall_sign": au,
        "minecraft:acacia_wood": iu,
        "minecraft:hopper": ru,
        "minecraft:bell": ou,
        "minecraft:lectern": su,
        "minecraft:stripped_crimson_stem": lu,
        "minecraft:standing_banner": cu,
        "minecraft:jungle_stairs": mu,
        "minecraft:mangrove_propagule": _u,
        "minecraft:cactus": du,
        "minecraft:sniffer_egg": uu,
        "minecraft:polished_diorite_double_slab": pu,
        "minecraft:birch_stairs": fu,
        "minecraft:nether_brick_wall": hu,
        "minecraft:purple_glazed_terracotta": bu,
        "minecraft:bedrock": gu,
        "minecraft:spruce_slab": yu,
        "minecraft:blackstone_stairs": ku,
        "minecraft:polished_andesite_stairs": wu,
        "minecraft:dead_horn_coral_wall_fan": xu,
        "minecraft:piglin_head": vu,
        "minecraft:purple_candle": Su,
        "minecraft:spruce_standing_sign": Iu,
        "minecraft:mangrove_button": Cu,
        "minecraft:dead_horn_coral_fan": Bu,
        "minecraft:lantern": Du,
        "minecraft:waxed_weathered_copper_door": Eu,
        "minecraft:lit_blast_furnace": Tu,
        "minecraft:deprecated_purpur_block_2": Pu,
        "minecraft:deprecated_purpur_block_1": Au,
        "minecraft:birch_door": Ru,
        "minecraft:chest": zu,
        "minecraft:cherry_wood": Mu,
        "minecraft:chain": Lu,
        "minecraft:cherry_stairs": Ou,
        "minecraft:cake": Fu,
        "minecraft:crimson_hanging_sign": Wu,
        "minecraft:sculk_vein": Gu,
        "minecraft:warped_standing_sign": Nu,
        "minecraft:polished_andesite_double_slab": Uu,
        "minecraft:bamboo_standing_sign": $u,
        "minecraft:flowing_lava": Vu,
        "minecraft:wither_skeleton_skull": ju,
        "minecraft:acacia_button": qu,
        "minecraft:lit_furnace": Hu,
        "minecraft:warped_button": Ku,
        "minecraft:cherry_sapling": Ju,
        "minecraft:cherry_log": Yu,
        "minecraft:prismarine_stairs": Zu,
        "minecraft:polished_tuff_stairs": Qu,
        "minecraft:wheat": Xu,
        "minecraft:resin_brick_slab": ep,
        "minecraft:cobbled_deepslate_slab": tp,
        "minecraft:lilac": np,
        "minecraft:pale_oak_trapdoor": ap,
        "minecraft:chiseled_quartz_block": ip,
        "minecraft:crimson_standing_sign": rp,
        "minecraft:darkoak_standing_sign": op,
        "minecraft:weathered_double_cut_copper_slab": sp,
        "minecraft:pale_oak_stairs": lp,
        "minecraft:brown_mushroom_block": cp,
        "minecraft:petrified_oak_slab": mp,
        "minecraft:pink_candle": _p,
        "minecraft:red_nether_brick_wall": dp,
        "minecraft:carved_pumpkin": up,
        "minecraft:dropper": pp,
        "minecraft:spruce_wall_sign": fp,
        "minecraft:stripped_warped_stem": hp,
        "minecraft:candle": bp,
        "minecraft:polished_andesite_slab": gp,
        "minecraft:pointed_dripstone": yp,
        "minecraft:cut_red_sandstone_slab": kp,
        "minecraft:deepslate_brick_stairs": wp,
        "minecraft:dark_prismarine_stairs": xp,
        "minecraft:creaking_heart": vp,
        "minecraft:pale_oak_button": Sp,
        "minecraft:trip_wire": Ip,
        "minecraft:cauldron": Cp,
        "minecraft:cave_vines_head_with_berries": Bp,
        "minecraft:dead_tube_coral_wall_fan": Dp,
        "minecraft:birch_sapling": Ep,
        "minecraft:dark_oak_trapdoor": Tp,
        "minecraft:brick_slab": Pp,
        "minecraft:stripped_oak_log": Ap,
        "minecraft:smooth_stone_slab": Rp,
        "minecraft:brewing_stand": zp,
        "minecraft:bamboo_sapling": Mp,
        "minecraft:weathered_copper_bulb": Lp,
        "minecraft:blast_furnace": Op,
        "minecraft:acacia_slab": Fp,
        "minecraft:stonecutter_block": Wp,
        "minecraft:smooth_quartz_slab": Gp,
        "minecraft:white_candle_cake": Np,
        "minecraft:candle_cake": Up,
        "minecraft:jungle_double_slab": $p,
        "minecraft:polished_granite_double_slab": Vp,
        "minecraft:spruce_wood": jp,
        "minecraft:acacia_fence_gate": qp,
        "minecraft:lit_smoker": Hp,
        "minecraft:smooth_quartz_stairs": Kp,
        "minecraft:red_candle_cake": Jp,
        "minecraft:azalea_leaves": Yp,
        "minecraft:purpur_block": Zp,
        "minecraft:cherry_wall_sign": Qp,
        "minecraft:cyan_candle": Xp,
        "minecraft:repeating_command_block": ef,
        "minecraft:colored_torch_purple": tf,
        "minecraft:nether_wart": nf,
        "minecraft:waxed_oxidized_double_cut_copper_slab": af,
        "minecraft:tuff_double_slab": rf,
        "minecraft:purpur_stairs": of,
        "minecraft:waxed_copper_door": sf,
        "minecraft:portal": lf,
        "minecraft:birch_button": cf,
        "minecraft:peony": mf,
        "minecraft:command_block": _f,
        "minecraft:polished_blackstone_button": df,
        "minecraft:crafter": uf,
        "minecraft:mossy_cobblestone_double_slab": pf,
        "minecraft:furnace": ff,
        "minecraft:amethyst_cluster": hf,
        "minecraft:waxed_cut_copper_slab": bf,
        "minecraft:polished_deepslate_wall": gf,
        "minecraft:prismarine_brick_double_slab": yf,
        "minecraft:turtle_egg": kf,
        "minecraft:dispenser": wf,
        "minecraft:cobblestone_double_slab": xf,
        "minecraft:grindstone": vf,
        "minecraft:soul_campfire": Sf,
        "minecraft:wooden_pressure_plate": If,
        "minecraft:sandstone_wall": Cf,
        "minecraft:lime_candle_cake": Bf,
        "minecraft:damaged_anvil": Df,
        "minecraft:birch_double_slab": Ef,
        "minecraft:material_reducer": Tf,
        "minecraft:trial_spawner": Pf,
        "minecraft:resin_brick_wall": Af,
        "minecraft:cobbled_deepslate_wall": Rf,
        "minecraft:orange_candle_cake": zf,
        "minecraft:mossy_stone_brick_wall": Mf,
        "minecraft:unlit_redstone_torch": Lf,
        "minecraft:pale_oak_double_slab": Of,
        "minecraft:cherry_fence_gate": Ff,
        "minecraft:gray_glazed_terracotta": Wf,
        "minecraft:colored_torch_red": Gf,
        "minecraft:ladder": Nf,
        "minecraft:crimson_pressure_plate": Uf,
        "minecraft:stripped_mangrove_log": $f,
        "minecraft:oxidized_copper_door": Vf,
        "minecraft:tube_coral_wall_fan": jf
    };
import {
    ModalFormData as Jf
} from "@minecraft/server-ui";
var ge = L.getLogger("DebugStick"),
    me = It,
    Pe = class {
        onUseOn(e) {
            if (e.source.typeId !== "minecraft:player" || A.debounce("DebugStick.itemUse", e.source)) return;
            let n = e.usedOnBlockPermutation,
                a = n.type.id;
            if (!me[a]) {
                ge.info("No palette for block", a);
                return
            }
            let i = new Jf;
            i.title("Debug Stick"), i.submitButton("Apply");
            for (let r of Object.keys(me[a])) {
                let o = me[a][r];
                if (o.values) i.dropdown(r, o.values, o.values.indexOf(n.getState(r)));
                else if (o.min !== void 0) {
                    let s = o;
                    if (s.min === 0 && s.max === 1) {
                        i.toggle(r, n.getState(r) == 1);
                        continue
                    }
                    i.slider(r, s.min, s.max, 1, n.getState(r))
                } else ge.info("Unknown state type", o)
            }
            x.forceShow(e.source, i, r => {
                if (r.canceled || !r.formValues) return;
                let o = {},
                    s = 0;
                for (let d of Object.keys(me[a])) d === "minecraft:cardinal_direction" && a.endsWith("_door") ? (o.direction = r.formValues[s++], o.direction > me[a][d].values.length && (o.direction = 0)) : (o[d] = r.formValues[s++], me[a][d].values && (o[d] = me[a][d].values[o[d]]));
                let c;
                try {
                    c = Kf.resolve(a, o)
                } catch (d) {
                    ge.warn("Failed to resolve block permutation", a, o, d), ge.info(e.block.permutation.getAllStates()), e.source.sendMessage(f.RED + "Failed to change block permutation for " + a + ". Please report this issue on our discord.");
                    return
                }
                if (!c) {
                    ge.warn("Failed to resolve block permutation", a, o), ge.info(e.block.permutation.getAllStates()), e.source.sendMessage(f.RED + "Failed to change block permutation for " + a + ". Please report this issue on our discord.");
                    return
                }
                e.block.setPermutation(c)
            })
        }
    };
Pe.Id = "ulkd_ess:debug_stick";
var Ae = class {
    static init() {
        Hf.beforeEvents.worldInitialize.subscribe(e => {
            e.itemComponentRegistry.registerCustomComponent(Pe.Id, new Pe)
        })
    }
};
import {
    world as an
} from "@minecraft/server";

function Yf(m, e, n) {
    let a = m.below();
    if (!a) return;
    m.typeId === a.typeId && (m.setPermutation(m.permutation.withState("open_bit", e)), a.setPermutation(a.permutation.withState("open_bit", e)));
    let i = e ? "open" : "close";
    n.runCommandAsync(`/playsound ${i}.wooden_door @s`)
}
var Zf = [
    [0, 0],
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0]
];

function rn(m, e, n, a = !0) {
    let i = D.from(m.location),
        r = m.dimension,
        o = m.typeId;
    m.permutation.getState("upper_block_bit") || (i = i.up());
    for (let [s, c] of Zf) {
        if (!a && s === 0 && c === 0) continue;
        let d = r.getBlock(i.add(s, 0, c));
        !d || d.typeId !== o || !d.permutation.getState("upper_block_bit") || !!d.permutation.getState("open_bit") !== n && Yf(d, n, e)
    }
}
var Re = class {
    static init() {
        an.afterEvents.entityHitBlock.subscribe(e => {
            if (e.damagingEntity.typeId !== "minecraft:player") return;
            let n = e.damagingEntity;
            if (!k.doubleDoor.get(n)) return;
            let a = e.hitBlock;
            if (!a.typeId.includes("door") || a.typeId.includes("iron")) return;
            let i = a.permutation.getAllStates();
            if (i.open_bit === void 0 || i.upper_block_bit === void 0) return;
            let r = !i.open_bit;
            rn(a, n, r)
        }), an.beforeEvents.playerInteractWithBlock.subscribe(async e => {
            let n = e.player;
            if (!k.doubleDoor.get(n)) return;
            let a = e.block;
            if (!a.typeId.includes("door") || a.typeId.includes("iron")) return;
            let i = a.permutation.getAllStates();
            i.open_bit !== void 0 && i.upper_block_bit !== void 0 && (await null, rn(a, n, i.upper_block_bit ? !a.permutation.getState("open_bit") : !!a.permutation.getState("open_bit"), !0))
        })
    }
};
import {
    BlockVolume as Qf,
    EntityInventoryComponent as Xf,
    ItemDurabilityComponent as on,
    ItemEnchantableComponent as eh,
    ItemStack as th,
    world as nh
} from "@minecraft/server";
import {
    ActionFormData as ah,
    ModalFormData as ih
} from "@minecraft/server-ui";
var Ct = [
        ["minecraft:stone", void 0],
        ["minecraft:deepslate", void 0],
        ["minecraft:netherrack", void 0],
        ["minecraft:diorite", void 0],
        ["minecraft:granite", void 0],
        ["minecraft:andesite", void 0],
        ["minecraft:tuff", void 0],
        ["minecraft:end_stone", void 0],
        ["minecraft:basalt", void 0],
        ["minecraft:blackstone", void 0],
        ["minecraft:crimson_nylium", void 0],
        ["minecraft:warped_nylium", void 0],
        ["minecraft:magma", void 0],
        ["minecraft:obsidian", () => k.obsidianStoneBreaker.get()]
    ],
    Bt = [
        ["minecraft:gravel", void 0],
        ["minecraft:sand", void 0],
        ["minecraft:clay", void 0],
        ["minecraft:dirt", void 0],
        ["minecraft:grass_block", void 0],
        ["minecraft:mud", void 0],
        ["minecraft:soul_sand", void 0],
        ["minecraft:soul_soil", void 0]
    ],
    rh = [
        ["minecraft:grass_block", "minecraft:dirt"],
        ["minecraft:stone", "minecraft:granite", "minecraft:diorite", "minecraft:andesite"]
    ],
    sn = {
        x: 3,
        y: 3,
        z: 3
    },
    Dt = "ulkd_ess:breaker_data",
    ln = "ulkd_ess_stonebreaker_",
    cn = "unlinked.essentials.shovelbang.",
    Xe = class extends q {
        constructor(n, a, i) {
            super();
            this.id = n;
            this.materials = a;
            this.getter = i;
            this.Icons = ["textures/ui/toggle_off", "textures/ui/toggle_on_hover"]
        }
        getFormId() {
            return this.id + "_breaker"
        }
        render(n, a, i) {
            let r = X.getBreakerData(n),
                o = this.getter(r),
                s = new Map;
            for (let p of this.materials)(!p[1] || p[1]()) && s.set(p[0], !1);
            for (let p of o.i) s.set(p, !0);
            let c = Array.from(s.keys()).sort(),
                d = new ah;
            d.title(a);
            for (let p of c) {
                let y = s.get(p);
                d.button(Ye[p.replace("minecraft:", "")] ?? p, this.Icons[y ? 1 : 0])
            }
            d.button("Resize", "textures/ui/import"), d.button("Back", "textures/ui/import"), x.forceShow(n, d, p => {
                if (p.canceled || p.selection === void 0) return;
                if (p.selection >= c.length) {
                    if (p.selection === c.length) {
                        let S = new ih;
                        S.title(a), S.slider("Width", 1, 3, 2, o.s.x), S.slider("Height", 1, 3, 2, o.s.y), S.slider("Depth", 1, 3, 1, o.s.z), x.forceShow(n, S, w => {
                            if (w.canceled || w.formValues === void 0 || w.formValues.length === 0) return;
                            let v = w.formValues[0],
                                z = w.formValues[1],
                                R = w.formValues[2];
                            o.s.x = v, o.s.y = z, o.s.z = R, X.setBreakerData(n, r), this.render(n, a, o)
                        })
                    } else this.back();
                    return
                }
                let y = c[p.selection];
                y && (o.i.includes(y) ? o.i.splice(o.i.indexOf(y), 1) : o.i.push(y), X.setBreakerData(n, r), this.render(n, a))
            })
        }
    },
    X = class {
        static init() {
            x.registerCustomForm(new Xe("pickaxe", Ct, e => e.p)), x.registerCustomForm(new Xe("shovel", Bt, e => e.s)), nh.beforeEvents.playerBreakBlock.subscribe(this.onBlockBreak.bind(this))
        }
        static async onBlockBreak(e) {
            let n = e.player,
                a = e.itemStack;
            if (!a || n.isSneaking) return;
            let i = a.getComponent(on.componentId);
            if (!i || i.damage === i.maxDurability) return;
            let r = e.block;
            if (W.isPickaxe(a) && k.stoneBreaker.get(n)) {
                let o = this.getBreakerData(n);
                if (o.p.i.includes(r.typeId)) {
                    let s = Ct.find(c => c[0] === r.typeId);
                    if (s && s[1] && !s[1]() || !W.canBreak(a, r.permutation)) return;
                    e.cancel = !0, await null, n.runCommand(`execute positioned ${r.x} ${r.y} ${r.z} run function unlinked/essentials/doStoneBang`), this.breakCube(n, o.p, r);
                    return
                }
            }
            if (W.isShovel(a) && k.sandBreaker.get(n)) {
                let o = this.getBreakerData(n);
                if (o.s.i.includes(r.typeId)) {
                    let s = Bt.find(c => c[0] === r.typeId);
                    if (s && s[1] && !s[1]()) return;
                    e.cancel = !0, await null, n.runCommand(`execute positioned ${r.x} ${r.y} ${r.z} run function unlinked/essentials/doShovelBang`), this.breakCube(n, o.s, r);
                    return
                }
            }
        }
        static breakCube(e, n, a) {
            let i = e.getComponent(Xf.componentId);
            if (!i) return;
            let r = i.container;
            if (!r) return;
            let o = e.selectedSlotIndex,
                s = r.getItem(o);
            if (!s) return;
            let c = s.getComponent(on.componentId);
            if (!c) return;
            let d = s.getComponent(eh.componentId),
                p = d ? d.getEnchantments() : [],
                y = p.find(M => M.type.id === "unbreaking")?.level || 0,
                S = p.find(M => M.type.id === "silk_touch")?.level || 0,
                w = e.dimension,
                v = e.getBlockFromViewDirection({
                    maxDistance: 10,
                    includeLiquidBlocks: !1,
                    includePassableBlocks: !0
                });
            if (!v || !v.block) return;
            let z = rt.Opposites[v.face],
                R = rt.PositivePerpendiculars[z].map(M => D.from(M)),
                te = D.from(a.location).subtract(R[0].multiply((n.s.x - 1) / 2)).subtract(R[1].multiply((n.s.y - 1) / 2)),
                ye = w.getBlocks(new Qf(te, te.add(R[0].multiply(n.s.x - 1)).add(R[1].multiply(n.s.y - 1)).add(D.from(z).multiply(n.s.z - 1))), {
                    includeTypes: this.getGroup(a.typeId, n)
                });
            for (let M of ye.getBlockLocationIterator()) {
                let K = W.shouldConsumeDurability(y);
                if (K && c.damage >= c.maxDurability) return;
                if (S) {
                    let ne = w.getBlock(M);
                    if (!ne) return;
                    let Oe = new th(ne.typeId, 1);
                    w.spawnItem(Oe, M), ne.setType("minecraft:air")
                } else Ft.destroyBlock(w, M);
                K && (c.damage += 1, i.container.setItem(o, s))
            }
        }
        static getGroup(e, n) {
            for (let a of rh)
                if (a.includes(e)) return a.filter(i => n.i.includes(i));
            return [e]
        }
        static setBreakerData(e, n) {
            n.p.s.x % 2 === 0 && n.p.s.x--, n.p.s.y % 2 === 0 && n.p.s.y--, n.s.s.x % 2 === 0 && n.s.s.x--, n.s.s.y % 2 === 0 && n.s.s.y--, e.setDynamicProperty(Dt, JSON.stringify(n))
        }
        static getBreakerData(e) {
            let n = e.getDynamicProperty(Dt);
            if (!n) {
                let a = e.getTags(),
                    i = a.filter(s => s.startsWith(ln)).map(s => s.substring(ln.length)).filter(s => Ct.some(c => c[0] === s)),
                    r = a.filter(s => s.startsWith(cn)).map(s => "minecraft:" + s.substring(cn.length)).map(s => s === "minecraft:grass" ? "minecraft:grass_block" : s).filter(s => Bt.some(c => c[0] === s));
                r.includes("minecraft:gravel") ? r = r.filter(s => s !== "minecraft:gravel") : r.push("minecraft:gravel"), r.includes("minecraft:clay") ? r = r.filter(s => s !== "minecraft:clay") : r.push("minecraft:clay");
                let o = {
                    p: {
                        i,
                        s: sn
                    },
                    s: {
                        i: r,
                        s: sn
                    }
                };
                return e.setDynamicProperty(Dt, JSON.stringify(o)), o
            }
            return JSON.parse(n)
        }
    };
import {
    Direction as et,
    MolangVariableMap as oh,
    Player as sh,
    world as lh
} from "@minecraft/server";
import {
    ModalFormData as ch
} from "@minecraft/server-ui";
var mn = {},
    mh = {
        mode: 0,
        lifetime: 5,
        width: 11,
        height: 11
    };

function N(m, e, n, a) {
    return uh(m, e, a) <= n
}

function _h(m, e, n, a) {
    return N(m, e, n, a) && !(N(m + 1, e, n, a) && N(m - 1, e, n, a) && N(m, e + 1, n, a) && N(m, e - 1, n, a) && N(m + 1, e + 1, n, a) && N(m + 1, e - 1, n, a) && N(m - 1, e - 1, n, a) && N(m - 1, e + 1, n, a))
}

function dh(m, e, n, a) {
    return N(m, e, n, a) && !(N(m + 1, e, n, a) && N(m - 1, e, n, a) && N(m, e + 1, n, a) && N(m, e - 1, n, a))
}

function uh(m, e, n) {
    return Math.sqrt(Math.pow(e * n, 2) + Math.pow(m, 2))
}

function _n(m, e, n, a) {
    let i = [],
        r = n === 1 ? _h : dh;
    for (let o = 0; o < e; o++)
        for (let s = 0; s < m; s++) r(-.5 * (m - 2 * (s + .5)), -.5 * (e - 2 * (o + .5)), m / 2, m / e) && (a === "h" ? i.push(D.from(s, 0, o)) : i.push(D.from(s, o, 0)));
    return i
}
var tt = {},
    dn = 0;

function un(m, e, n, a) {
    tt[n.id] === void 0 && (dn++, tt[n.id] = dn, $e(n, "animation.unlinked_essentials.dummy", {
        "t.ulkd_ess_player_id": tt[n.id]
    }, [n]));
    let i = D.from(m.toBlockLocation()).add(D.from(.5, .5, .5)),
        r = new oh;
    r.setFloat("offset_x", i.x), r.setFloat("offset_y", i.y), r.setFloat("offset_z", i.z), r.setFloat("player_id", tt[n.id]), r.setFloat("lifetime", a), e.spawnParticle("ulkd_ess:block_show", i, r)
}
var ze = class m {
    static init() {
        lh.beforeEvents.worldInitialize.subscribe(e => {
            e.itemComponentRegistry.registerCustomComponent("ulkd_ess:circle_gen", {
                onUse: n => {
                    A.debounce("CircleGen.itemUse", n.source) || m.showUI(n.source)
                },
                onUseOn(n) {
                    let a = n.source;
                    if (a instanceof sh) {
                        if (A.debounce("CircleGen.itemUse", n.source)) return;
                        m.showUI(a)
                    }
                }
            })
        })
    }
    static showUI(e) {
        if (!k.circleTemplate.get()) {
            e.sendMessage(f.RED + "Circle Template is disabled in the Admin Remote (creative only item)");
            return
        }
        if (e.isSneaking) {
            $e(e, "animation.unlinked_essentials.dummy", {
                "t.destroy_circle": 1
            }, [e]), e.sendMessage(f.GREEN + "Circle hidden");
            return
        }
        $e(e, "animation.unlinked_essentials.dummy", {
            "t.destroy_circle": 0
        }, [e]);
        let n = new ch,
            a = mn[e.id] ?? mh;
        n.title("Circle Generator"), n.slider("Width", 3, 50, 1, a.width), n.slider("Height", 3, 50, 1, a.height), n.dropdown("Mode", ["Thin", "Thick"], a.mode === 0 ? 0 : 1), n.slider("Hide after (minutes)", 1, 30, 1, a.lifetime), x.forceShow(e, n, i => {
            if (i.canceled || i.formValues === void 0 || i.formValues.length === 0) return;
            let r = i.formValues[0],
                o = i.formValues[1],
                s = i.formValues[2],
                c = i.formValues[3];
            mn[e.id] = {
                mode: s,
                lifetime: c,
                width: r,
                height: o
            };
            let d = D.from(e.getViewDirection()).toDirection(),
                p = d === et.Down || d === et.Up ? "h" : "v",
                y = d === et.East || d === et.West,
                S = e.dimension,
                w = D.from(e.location).toBlockLocation().add(.5, 0, .5).subtract(y ? 0 : r / 2, p === "v" ? o / 2 : 0, p === "h" ? o / 2 : y ? r / 2 + 1 : 0);
            if (y)
                for (let v of _n(r, o, s, p)) un(w.add(v.z, v.y, v.x).add(0, 0, 1), S, e, c * 60);
            else
                for (let v of _n(r, o, s, p)) un(w.add(v), S, e, c * 60)
        })
    }
};
import {
    EntityInventoryComponent as ph,
    ItemDurabilityComponent as fh,
    ItemStack as Et,
    MinecraftDimensionTypes as hh,
    Player as pn,
    system as fn,
    world as bh
} from "@minecraft/server";
var H = L.getLogger("BigBucket", "bigbucket"),
    hn = "ulkd_ess:liquid_",
    bn = "ulkd_ess:place_liquid_",
    Tt = "ulkd_ess:bucket_transform_",
    gh = "ulkd_ess:bucket_empty",
    Me = 5,
    yh = "ulkd_ess:empty_bucket",
    gn = [],
    Pt = {},
    Le = class {
        onUse(e) {
            let n = e.source;
            if (n instanceof pn) {
                if (A.debounce("BigBucket.itemUse", e.source)) return;
                let a = ee.getTargetBlock(n);
                if (!a) return;
                ee.use(e.itemStack, n, a)
            }
        }
        onUseOn(e) {
            let n = e.source;
            if (n instanceof pn) {
                if (A.debounce("BigBucket.itemUse", e.source)) return;
                let a = n.dimension.getBlock(D.from(e.block.location).add(e.blockFace));
                if (!a) return;
                ee.use(e.itemStack, n, a)
            }
        }
    };
Le.Id = "ulkd_ess:big_bucket";
var ee = class {
    static use(e, n, a) {
        if (!k.bigBucket.get()) {
            n.sendMessage("\xA7cBig Buckets are disabled in the Admin Remote (creative only item)");
            return
        }
        let i = e.getTags(),
            r = -1,
            o = a.permutation.getState("liquid_depth");
        if (o !== void 0 && (r = o), i.includes(gh)) {
            if (r !== 0) return;
            this.handleEmptyBucket(e, i, n, a), this.handleLavaReflow(n, a);
            return
        }
        this.handleFilledBucket(e, i, n, a, r)
    }
    static getTargetBlock(e) {
        let n = D.from(e.getViewDirection()),
            a = D.from(e.location).add(0, 1.62, 0).add(n.setY(0).normalize().scale(.05)),
            i = {};
        i[a.toString()] = e.dimension.getBlock(a);
        let r = n.divide(2),
            o = e.dimension,
            s = i[a.toString()];
        for (let c = 0; c < 13; c++) {
            let d = a.add(r.multiply(c)).toBlockLocation(),
                p = d.toString("short");
            if (i[p]) continue;
            let y = o.getBlock(d);
            if (!y) continue;
            i[p] = y;
            let S = y.typeId;
            if (["minecraft:water", "minecraft:lava", "minecraft:flowing_water", "minecraft:flowing_lava", "minecraft:fire"].includes(S)) {
                if ((y.permutation.getState("liquid_depth") ?? 0) === 0) return y
            } else if (S !== "minecraft:air") return s;
            s = y
        }
    }
    static handleEmptyBucket(e, n, a, i) {
        let r = this.getOrBuildBucketTransforms(n, e);
        if (!r || !r.length) {
            H.error("Empty bucket has no transforms, add a transform tag");
            return
        }
        for (let o of r)
            if (o.liquids.includes(i.typeId)) {
                this.fillEmptyBucket(e, i, o, a);
                return
            }
    }
    static handleFilledBucket(e, n, a, i, r) {
        let o = Pt[e.typeId];
        if (!o) {
            let s = this.getLiquidsFromTags(n);
            if (!s) return;
            o = s, Pt[e.typeId] = o
        }
        if (r === 0 && o.includes(i.typeId)) {
            this.fillExistingBucket(i, e, a);
            return
        }
        this.placeLiquidFromBucket(e, a, i, o, r)
    }
    static handleLavaReflow(e, n) {
        if (k.lavaReflow.get(e)) {
            let a = e.dimension,
                i = D.from(n.location),
                r = 0,
                o = n.below();
            if (o && o.typeId !== "minecraft:lava")
                for (let s = -1; s <= 1; s++)
                    for (let c = -1; c <= 1; c++) {
                        if (s === 0 && c === 0) continue;
                        let d = a.getBlock(i.add(s, 0, c));
                        if (!d) continue;
                        let p = d.typeId;
                        if ((p === "minecraft:lava" || p === "minecraft:flowing_lava") && (r++, r >= 2)) {
                            fn.runTimeout(() => {
                                fn.run(() => {
                                    e && e.isValid() && e.runCommandAsync(`setblock ${i.x} ${i.y} ${i.z} lava`)
                                })
                            }, 20);
                            break
                        }
                    }
        }
    }
    static getOrBuildBucketTransforms(e, n) {
        let a = gn;
        return a.length > 0 || (a = e.filter(i => i.startsWith(Tt)).map(i => {
            try {
                let r = new Et(i.substring(Tt.length)),
                    o = this.getLiquidsFromTags(r.getTags());
                return o ? (Pt[r.typeId] = o, {
                    bucketId: i.substring(Tt.length),
                    liquids: o
                }) : void 0
            } catch {
                H.error("Invalid bucket transform tag", i, "in item", n.typeId);
                return
            }
        }).filter(i => i !== void 0), a.length > 0 && gn.push(...a)), a
    }
    static getLiquidsFromTags(e) {
        let n = e.filter(i => i.startsWith(hn)).map(i => i.substring(hn.length));
        if (n.length === 0) {
            H.error("Bucket transform has no liquids, add a liquid tag");
            return
        }
        if (n.length > 1) {
            H.error("Bucket transform has multiple liquids, only one is allowed");
            return
        }
        let a = e.filter(i => i.startsWith(bn)).map(i => i.substring(bn.length));
        if (a.length === 0) {
            H.error("Bucket transform has no place liquids, add a place liquid tag");
            return
        }
        if (a.length > 1) {
            H.error("Bucket transform has multiple place liquids, only one is allowed");
            return
        }
        return [n[0], a[0]]
    }
    static fillEmptyBucket(e, n, a, i) {
        let r = new Et(a.bucketId, 1),
            o = this.getItemDurability(r, "Bucket has no durability");
        if (!o) return;
        o.damage = At(o.maxDurability - o.maxDurability / Me, 0, o.maxDurability - 1);
        let s = this.getInventoryContainer(i);
        s && (e.amount === 1 ? s.setItem(i.selectedSlotIndex, r) : (e.amount--, s.setItem(i.selectedSlotIndex, e), s.addItem(r) !== void 0 && i.dimension.spawnItem(r, D.from(i.location))), n.setType("minecraft:air"), i.playSound(this.getFillSound(r), {
            location: i.location
        }))
    }
    static fillExistingBucket(e, n, a) {
        let i = this.getItemDurability(n, "Bucket has no durability");
        if (!i) return;
        let r = this.getCurrentBucketLevel(i);
        if (r === Me) return;
        i.damage = At(i.maxDurability - i.maxDurability / Me * (r + 1), 0, i.maxDurability - 1);
        let o = this.getInventoryContainer(a);
        o && (o.setItem(a.selectedSlotIndex, n), e.setType("minecraft:air"), a.playSound(this.getFillSound(n), {
            location: a.location
        }), this.handleLavaReflow(a, e))
    }
    static placeLiquidFromBucket(e, n, a, i, r) {
        if (n.dimension.id === hh.nether && i.includes("minecraft:water")) return;
        let o = a.typeId;
        if (o !== "minecraft:air" && !i.includes(o) && o !== "minecraft:fire" || i.includes(o) && r === 0) return;
        let s = this.getItemDurability(e, "Bucket has no durability");
        if (!s) return;
        let c = this.getCurrentBucketLevel(s);
        s.damage = At(s.maxDurability - s.maxDurability / Me * (c - 1), 0, s.maxDurability - 1);
        let d = this.getInventoryContainer(n);
        if (d) {
            if (a.setType(i[1]), c === 1) {
                d.setItem(n.selectedSlotIndex, new Et(yh, 1));
                return
            }
            d.setItem(n.selectedSlotIndex, e), n.playSound(this.getEmptySound(e), {
                location: n.location
            })
        }
    }
    static getInventoryContainer(e) {
        let n = e.getComponent(ph.componentId);
        if (!n) {
            H.error("Player has no inventory");
            return
        }
        if (!n.container) {
            H.error("Player inventory is empty");
            return
        }
        return n.container
    }
    static getItemDurability(e, n) {
        let a = e.getComponent(fh.componentId);
        if (!a) {
            H.error(n);
            return
        }
        return a
    }
    static getCurrentBucketLevel(e) {
        return Math.round((e.maxDurability - e.damage) / (e.maxDurability / Me))
    }
    static init() {
        bh.beforeEvents.worldInitialize.subscribe(e => {
            e.itemComponentRegistry.registerCustomComponent(Le.Id, new Le)
        })
    }
    static getFillSound(e) {
        let n = e.typeId;
        return n === "ulkd_ess:lava_bucket" ? "bucket.fill_lava" : "bucket.fill_water"
    }
    static getEmptySound(e) {
        let n = e.typeId;
        return n === "ulkd_ess:lava_bucket" ? "bucket.empty_lava" : "bucket.empty_water"
    }
};

function At(m, e, n) {
    return Math.min(Math.max(m, e), n)
}
import {
    EntityInventoryComponent as kh,
    ItemDurabilityComponent as wh,
    ItemEnchantableComponent as xh,
    world as nt
} from "@minecraft/server";
x.addFormData(pt);
x.addFormData(ht);
x.addFormData(gt);
x.addFormData(kt);
x.init();
Se.init();
Ut();
O.init();
Ie.init();
Be.init();
$.init();
G.init();
Te.init();
Ae.init();
Re.init();
X.init();
ze.init();
ee.init();
nt.afterEvents.playerBreakBlock.subscribe(m => {
    let e = m.itemStackAfterBreak;
    if (!e || !e.typeId.startsWith("ulkd_ess:paxel_")) return;
    let n = e.getComponent(wh.componentId);
    if (!n) return;
    let a = m.player,
        i = a.getComponent(kh.componentId);
    if (!i) return;
    let r = i.container;
    if (!r) return;
    let o = e.getComponent(xh.componentId),
        s = o ? o.getEnchantment("unbreaking")?.level ?? 0 : 0;
    if (n.maxDurability === n.damage) {
        if (W.shouldConsumeDurability(s) && (r.setItem(a.selectedSlotIndex, void 0), m.player.playSound("random.break"), k.toolReplacer.get(a) && a.runCommand(`testfor @s[hasitem={item=${e.typeId}}]`).successCount > 0))
            for (let d = 0; d < r.size; d++) {
                let p = r.getItem(d);
                if (p && p.typeId === e.typeId) {
                    r.setItem(d, void 0), r.setItem(a.selectedSlotIndex, p);
                    break
                }
            }
    } else W.shouldConsumeDurability(s) && (n.damage += 1, r.setItem(a.selectedSlotIndex, e))
});
nt.afterEvents.itemUse.subscribe(m => {
    if (m.itemStack.typeId !== "ulkd_ess:clear_waypoint") return;
    let e = m.source;
    e.runCommand("event entity @e[type=ulkd_ess:waypoint,r=5] instant_despawn"), e.runCommand("event entity @e[type=ulkd_ess:waypoint_public,r=5] instant_despawn"), e.sendMessage(f.AQUA + "Waypoints cleared")
});
nt.beforeEvents.itemUseOn.subscribe(m => {
    if (m.itemStack.typeId === "ulkd_ess:sleeping_bag") {
        let e = m.source;
        k.sleepingBag.get() || (e.sendMessage(f.RED + "Sleeping Bag is disabled in the Admin Remote (creative only item)"), m.cancel = !0);
        return
    }
    if (m.itemStack.typeId === "ulkd_ess:clear_waypoint") {
        let e = m.source;
        if (!k.clearWaypoint.get()) {
            if (m.cancel = !0, A.debounce("Essentials.clearWaypoint", e)) return;
            e.sendMessage(f.RED + "Clear Nearby Waypoints is disabled in the Admin Remote (creative only item)")
        }
        return
    }
});
nt.beforeEvents.itemUse.subscribe(m => {
    if (m.itemStack.typeId === "ulkd_ess:clear_waypoint") {
        let e = m.source;
        if (!k.clearWaypoint.get()) {
            if (m.cancel = !0, A.debounce("Essentials.clearWaypoint", e)) return;
            e.sendMessage(f.RED + "Clear Nearby Waypoints is disabled in the Admin Remote (creative only item)")
        }
        return
    }
});
export {
    A as EventUtils, D as Vec3
};
