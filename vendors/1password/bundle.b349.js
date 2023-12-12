(() => {
  var ta = (n, s, o) => new Promise((l, u) => {
    var p = w => {
      try {
        y(o.next(w))
      } catch (h) {
        u(h)
      }
    }
      , d = w => {
        try {
          y(o.throw(w))
        } catch (h) {
          u(h)
        }
      }
      , y = w => w.done ? l(w.value) : Promise.resolve(w.value).then(p, d);
    y((o = o.apply(n, s)).next())
  }
  );
  var zd = (E => (E.chrome = "Chrome",
    E.firefox = "Firefox",
    E.safari = "Safari",
    E.edge = "Microsoft Edge",
    E.opera = "Opera",
    E.ie = "Internet Explorer",
    E.chromium = "Chromium",
    E.vivaldi = "Vivaldi",
    E.androidBrowser = "Android Browser",
    E.other = "Browser",
    E))(zd || {})
    , Ra = (w => (w.macos = "MacOSX",
      w.ios = "iOS",
      w.ipados = "iPadOS",
      w.windows = "Windows",
      w.android = "Android",
      w.linux = "Linux",
      w.chromeos = "ChromeOS",
      w.other = "",
      w))(Ra || {})
    , ei = n => {
      var y, w;
      n = n.toLowerCase();
      let s = n_(n)
        , o = (y = s == null ? void 0 : s.name) != null ? y : "Browser"
        , l = s ? hw(n, s.versionRegex) : ""
        , u = o_(n)
        , p = (w = u == null ? void 0 : u.name) != null ? w : ""
        , d = u ? hw(n, u.versionRegex) : "";
      return navigator && o === "Safari" && p === "MacOSX" && (navigator == null ? void 0 : navigator.maxTouchPoints) && (navigator == null ? void 0 : navigator.maxTouchPoints) > 2 && (p = "iPadOS",
        d = ""),
      {
        name: o,
        version: l,
        osName: p,
        osVersion: d
      }
    }
    , hw = (n, s) => {
      if (!s)
        return "";
      let o = s.exec(n);
      return o && o.length === 2 ? o[1].replace(/_/g, ".") : ""
    }
    , n_ = n => {
      for (let s of i_)
        if (n.includes(s.term))
          return s
    }
    , i_ = [{
      term: "msie",
      name: "Internet Explorer",
      versionRegex: /msie ([\d.]+)/
    }, {
      term: "trident",
      name: "Internet Explorer",
      versionRegex: /rv:([\d.]+)/
    }, {
      term: "edge",
      name: "Microsoft Edge",
      versionRegex: /edge\/([\d.]+)/
    }, {
      term: "opr",
      name: "Opera",
      versionRegex: /opr\/([\d.]+)/
    }, {
      term: "opera mobi",
      name: "Opera",
      versionRegex: /version\/([\d.]+)/
    }, {
      term: "opios",
      name: "Opera",
      versionRegex: /opios\/([\d.]+)/
    }, {
      term: "vivaldi",
      name: "Vivaldi",
      versionRegex: /vivaldi\/([\d.]+)/
    }, {
      term: "chromium",
      name: "Chromium",
      versionRegex: /chromium\/([\d.]+)/
    }, {
      term: "firefox",
      name: "Firefox",
      versionRegex: /firefox\/([\d.]+)/
    }, {
      term: "fxios",
      name: "Firefox",
      versionRegex: /fxios\/([\d.]+)/
    }, {
      term: "chrome",
      name: "Chrome",
      versionRegex: /chrome\/([\d.]+)/
    }, {
      term: "crios",
      name: "Chrome",
      versionRegex: /crios\/([\d.]+)/
    }, {
      term: "android",
      name: "Android Browser"
    }, {
      term: "safari",
      name: "Safari",
      versionRegex: /version\/([\d.]+)/
    }]
    , o_ = n => {
      for (let s of s_)
        if (n.includes(s.term))
          return s
    }
    , s_ = [{
      term: "iphone",
      name: "iOS",
      versionRegex: /os ([\d._]+)/
    }, {
      term: "ipad",
      name: "iPadOS",
      versionRegex: /os ([\d._]+)/
    }, {
      term: "ipod",
      name: "iOS",
      versionRegex: /os ([\d._]+)/
    }, {
      term: "mac os x",
      name: "MacOSX",
      versionRegex: /os x ([\d._]+)/
    }, {
      term: "android;",
      name: "Android",
      versionRegex: /android; ([\d.]+)/
    }, {
      term: "android",
      name: "Android",
      versionRegex: /android ([\d.]+)/
    }, {
      term: "linux",
      name: "Linux"
    }, {
      term: "cros",
      name: "ChromeOS"
    }, {
      term: "windows",
      name: "Windows",
      versionRegex: /windows nt ([\d.]+)/
    }];
  var y_ = ei(navigator.userAgent)
    , Lw = y_.name
    , Aw = n => {
      if (!!document.querySelector(".password-generator, .c-password-generator") && Lw !== zd.ie) {
        new Mw(n).render();
        let l = document.querySelectorAll(".generator-display");
        if (l.length === 0)
          return;
        l.forEach(u => {
          let p = u.getAttribute("data-recipe") || "characters"
            , d = ls(p);
          new Iw(n, u, d).render()
        }
        )
      }
    }
    , Iw = class {
      constructor(s, o, l) {
        this.spgRoot = o,
          this.spg = s,
          this.options = l,
          this.displayField = this.spgRoot.querySelector(".inputfield-container > input"),
          this.displayFieldOverlay = this.spgRoot.querySelector(".inputfield-container > div")
      }
      display(s) {
        this.displayField.value = s.value;
        let o = Pw(s);
        for (; this.displayFieldOverlay.firstChild;)
          this.displayFieldOverlay.firstChild.remove();
        for (let l of o)
          this.displayFieldOverlay.append(l)
      }
      generate() {
        return JSON.parse(this.spg(JSON.stringify(this.options))).result
      }
      render() {
        this.display(this.generate())
      }
    }
    , ls = (n = "characters") => {
      switch (n) {
        case "characters":
          return Wd.characters;
        case "memorable":
          return Wd.memorable;
        case "pin":
          return Wd.pin;
        default:
          return Wd.characters
      }
    }
    , b_ = n => ta(void 0, null, function* () {
      return yield Promise.all([fetch("/vendors/1password/txt/agwordlist.txt").then(s => ta(void 0, null, function* () {
        return s.text()
      })).then(s => {
        n("words", s.trim().split(`
`))
      }
      ), fetch("/vendors/1password/txt/agsyllables.txt").then(s => ta(void 0, null, function* () {
        return s.text()
      })).then(s => {
        n("syllables", s.trim().split(`
`))
      }
      )])
    });
  window.spgReady = n => ta(void 0, null, function* () {
    return b_(n.iw).then(() => {
      /comp|inter|loaded/.test(document.readyState) ? Aw(n.spg) : document.addEventListener("DOMContentLoaded", () => {
        Aw(n.spg);
      }
      )
    }
    )
  });
  var Wd = {
    characters: {
      passwordType: "characters",
      requireDigits: !0,
      requireSymbols: !1,
      length: 20
    },
    memorable: {
      passwordType: "words",
      length: 4,
      separatorType: "hyphens"
    },
    pin: {
      passwordType: "pin",
      length: 6
    }
  }
    , Dw = class {
      get value() {
        return Number(this.inputElement.value)
      }
      set value(s) {
        this.inputElement.value = `${s}`;
        let o = new Event("submit");
        this.inputElement.dispatchEvent(o)
      }
      handleChange(s) {
        this.displayElement.textContent = s.target.value,
          this.onChange(s)
      }
      constructor(s, o, l, u, p, d) {
        this.inputElement = u,
          this.displayElement = p,
          this.minLength = s,
          this.maxLength = o,
          this.defaultLength = l,
          this.onChange = d,
          this.reset(),
          Lw !== zd.ie ? this.inputElement.addEventListener("input", this.handleChange.bind(this)) : this.inputElement.addEventListener("change", this.handleChange.bind(this))
      }
      reset() {
        this.inputElement.min = `${this.minLength}`,
          this.inputElement.max = `${this.maxLength}`,
          this.value = this.defaultLength
      }
    }
    , eg = (n, s) => {
      let o = document.createElement("span");
      return o.classList.add(...n),
        o.textContent = s,
        o
    }
    , Pw = n => {
      let s = n.tokenIndices[0] === 2 ? 55 : 150
        , o = 0
        , l = [];
      for (let u of n.tokens)
        if (o + u.value.length < s)
          o += u.value.length,
            l.push(u);
        else
          break;
      return l.map(u => /[A-Za-z]/.test(u.value) ? eg(["letter", "c-password-generator__letter"], u.value) : /\d/.test(u.value) ? eg(["letter", "c-password-generator__digits"], u.value) : eg(["letter", "c-password-generator__symbols"], u.value))
    }
    , Gd = class {
      constructor(s, o, l, u) {
        this.recipeRoot = s,
          this.lengthSlider = new Dw(o, l, u, this.recipeRoot.querySelector("input[type='range']"), this.recipeRoot.querySelector(".slidecontainer .slider-value, .c-password-generator__slider-value"), this.onLengthChange = () => {
            var w, h;
            this.options.length = this.lengthSlider.value,
              (w = this.onUpdate) == null || w.call(this, this.options);
            let p = this.recipeRoot.querySelector(".c-password-generator__slider-container--active .c-password-generator__slider")
              , y = `${(h = p == null ? void 0 : p.getAttribute("aria-valuetext")) == null ? void 0 : h.replace(/\d/g, "")}${this.lengthSlider.value}`;
            p == null || p.setAttribute("aria-valuetext", y)
          }
          ),
          this.options = ls("characters")
      }
      show() {
        var s;
        this.recipeRoot.classList.add("activerecipe", "c-password-generator__slider-container--active"),
          this.lengthSlider.reset(),
          (s = this.onUpdate) == null || s.call(this, this.options)
      }
      hide() {
        this.recipeRoot.classList.remove("activerecipe", "c-password-generator__slider-container--active")
      }
    }
    , Nw = class extends Gd {
      constructor(s) {
        super(s, 3, 15, 5);
        var o;
        this.capitalizeCheckbox = this.recipeRoot.querySelector("#capitalize"),
          this.fullWordsCheckbox = this.recipeRoot.querySelector("#fullWords"),
          this.options = ls("memorable"),
          this.capitalizeCheckbox.checked = (o = this.options.capitalize) != null ? o : !1,
          this.fullWordsCheckbox.checked = this.options.passwordType === "words",
          this.recipeRoot.addEventListener("change", l => {
            var u;
            switch (l.target) {
              case this.capitalizeCheckbox:
              case this.fullWordsCheckbox:
                this.options.capitalize = this.capitalizeCheckbox.checked,
                  this.options.passwordType = this.fullWordsCheckbox.checked ? "words" : "syllables",
                  (u = this.onUpdate) == null || u.call(this, this.options);
                break
            }
          }
          )
      }
    }
    , Rw = class extends Gd {
      constructor(s) {
        let o = ls("pin");
        super(s, 3, 12, o.length);
        this.options = o
      }
    }
    , Ow = class extends Gd {
      constructor(s) {
        super(s, 8, 100, 20);
        var o, l;
        this.numbersCheckbox = this.recipeRoot.querySelector("#numbers"),
          this.symbolsCheckbox = this.recipeRoot.querySelector("#symbols"),
          this.options = ls("characters"),
          this.recipeRoot.classList.contains("c-password-generator__slider-container--username") && (this.options.requireDigits = !1),
          this.numbersCheckbox.checked = (o = this.options.requireDigits) != null ? o : !1,
          this.symbolsCheckbox.checked = (l = this.options.requireSymbols) != null ? l : !1,
          this.recipeRoot.addEventListener("change", u => {
            var p;
            switch (u.target) {
              case this.numbersCheckbox:
              case this.symbolsCheckbox:
                this.options.requireDigits = this.numbersCheckbox.checked,
                  this.options.requireSymbols = this.symbolsCheckbox.checked,
                  (p = this.onUpdate) == null || p.call(this, this.options);
                break
            }
          }
          )
      }
    }
    , Mw = class {
      constructor(s) {
        this.spg = s,
          this.spgRoot = document.querySelector(".password-generator, .c-password-generator"),
          this.copyButton = this.spgRoot.querySelector("#copy-secure-password"),
          this.regenerateButton = this.spgRoot.querySelector(".refresh-token"),
          this.passwordDisplay = this.spgRoot.querySelector(".c-password-generator__display-overlay"),
          this.copyStateDisplay = this.spgRoot.querySelector("#copyStateDisplay"),
          this.recipes = {
            characters: new Ow(this.spgRoot.querySelector("#recipe-characters")),
            memorable: new Nw(this.spgRoot.querySelector("#recipe-memorable")),
            pin: new Rw(this.spgRoot.querySelector("#recipe-pin"))
          },
          this.displayField = this.spgRoot.querySelector(".inputfield-container > input, #password-generator-display-field"),
          this.displayFieldOverlay = this.spgRoot.querySelector(".inputfield-container > div, #password-generator-display-overlay"),
          this.select = this.spgRoot.querySelector("#random-password"),
          this.options = ls("characters");
        let l = new URLSearchParams(window.location.search).get("type");
        l && l && (l === "memorable" || l === "pin") && (this.select.value = l,
          history.replaceState(void 0, "", window.location.origin + window.location.pathname)),
          this.listen()
      }
      selectedRecipe() {
        return this.select.options[this.select.selectedIndex].value
      }
      resetRecipe() {
        this.activeRecipe && this.activeRecipe.hide(),
          this.activeRecipe = this.recipes[this.selectedRecipe()],
          this.activeRecipe.onUpdate = s => {
            this.options = s,
              this.render()
          }
          ,
          this.activeRecipe.show()
      }
      listen() {
        this.resetRecipe(),
          this.displayField.addEventListener("copy", s => {
            s.preventDefault(),
              this.copy()
          }
          ),
          this.displayFieldOverlay.addEventListener("copy", s => {
            s.preventDefault(),
              this.copy()
          }
          ),
          this.spgRoot.addEventListener("change", s => {
            switch (s.target) {
              case this.select:
                this.resetRecipe(),
                  this.render();
                break
            }
          }
          ),
          this.spgRoot.addEventListener("click", s => {
            switch (s.target) {
              case this.copyButton:
                this.copy();
                break;
              case this.regenerateButton:
                this.render();
                break;
              case this.passwordDisplay:
                this.passwordFocus();
                break
            }
          }
          )
      }
      display(s) {
        this.displayField.value = s.value;
        let o = Pw(s);
        for (; this.displayFieldOverlay.firstChild;)
          this.displayFieldOverlay.firstChild.remove();
        for (let u of o)
          this.displayFieldOverlay.append(u);
        document.querySelectorAll(".letter").forEach(u => {
          u.addEventListener("click", () => {
            this.passwordFocus()
          }
          )
        }
        )
      }
      generate() {
        return JSON.parse(this.spg(JSON.stringify(this.options))).result
      }
      passwordFocus() {
        var o;
        ((o = window.getSelection()) == null ? void 0 : o.toString().length) === 0 && (this.displayField.focus(),
          this.displayField.select())
      }
      passwordStateUpdate(s) {
        var p, d, y, w, h, E, I;
        if (!this.copyStateDisplay || !s)
          return;
        let o = (d = (p = this.copyStateDisplay) == null ? void 0 : p.dataset) == null ? void 0 : d.passwordStateNotCopied
          , l = "u-bg-core-peel-orange-3"
          , u = (y = this.copyStateDisplay) == null ? void 0 : y.className.split(/\s/);
        switch (s) {
          case "copied":
            o = (h = (w = this.copyStateDisplay) == null ? void 0 : w.dataset) == null ? void 0 : h.passwordStateCopied,
              l = "u-bg-core-algae-green-3";
            break;
          case "partlyCopied":
            o = (I = (E = this.copyStateDisplay) == null ? void 0 : E.dataset) == null ? void 0 : I.passwordStatePartlyCopied,
              l = "u-bg-core-bits-blue-3";
            break
        }
        this.copyStateDisplay.textContent = o,
          u.filter(D => {
            var q;
            D.includes("u-bg-core-") && ((q = this.copyStateDisplay) == null || q.classList.replace(D, l))
          }
          )
      }
      copy() {
        return ta(this, null, function* () {
          var o;
          let s = (o = window.getSelection()) == null ? void 0 : o.toString().trim();
          if (s) {
            let l = s == null ? void 0 : s.length
              , u = this.displayField.value.length;
            l === u ? this.passwordStateUpdate("copied") : this.passwordStateUpdate("partlyCopied"),
              yield navigator.clipboard.writeText(s)
          } else
            yield navigator.clipboard.writeText(this.displayField.value),
              this.passwordStateUpdate("copied")
        })
      }
      render() {
        let s = this.generate();
        this.display(s),
          this.passwordStateUpdate("notCopied")
      }
    }
}
)();