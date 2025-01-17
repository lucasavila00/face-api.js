/*kalmanjs, Wouter Bulten, MIT, https://github.com/wouterbulten/kalmanjs */
var KalmanFilter = (function() {
  "use strict";
  function s(t, i) {
    for (var e = 0; e < i.length; e++) {
      var s = i[e];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        "value" in s && (s.writable = !0),
        Object.defineProperty(t, s.key, s);
    }
  }
  return (function() {
    function v() {
      var t =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : {},
        i = t.R,
        e = void 0 === i ? 1 : i,
        s = t.Q,
        n = void 0 === s ? 1 : s,
        r = t.A,
        h = void 0 === r ? 1 : r,
        a = t.B,
        o = void 0 === a ? 0 : a,
        u = t.C,
        c = void 0 === u ? 1 : u;
      !(function(t, i) {
        if (!(t instanceof i))
          throw new TypeError(
            "Cannot call a class as a function",
          );
      })(this, v),
        (this.R = e),
        (this.Q = n),
        (this.A = h),
        (this.C = c),
        (this.B = o),
        (this.cov = NaN),
        (this.x = NaN);
    }
    var t, i, e;
    return (
      (t = v),
      (i = [
        {
          key: "filter",
          value: function(t) {
            var i =
              1 < arguments.length &&
              void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            if (isNaN(this.x))
              (this.x = (1 / this.C) * t),
                (this.cov =
                  (1 / this.C) * this.Q * (1 / this.C));
            else {
              var e = this.predict(i),
                s = this.uncertainty(),
                n =
                  s *
                  this.C *
                  (1 / (this.C * s * this.C + this.Q));
              (this.x = e + n * (t - this.C * e)),
                (this.cov = s - n * this.C * s);
            }
            return this.x;
          },
        },
        {
          key: "predict",
          value: function() {
            var t =
              0 < arguments.length &&
              void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return this.A * this.x + this.B * t;
          },
        },
        {
          key: "uncertainty",
          value: function() {
            return this.A * this.cov * this.A + this.R;
          },
        },
        {
          key: "lastMeasurement",
          value: function() {
            return this.x;
          },
        },
        {
          key: "setMeasurementNoise",
          value: function(t) {
            this.Q = t;
          },
        },
        {
          key: "setProcessNoise",
          value: function(t) {
            this.R = t;
          },
        },
      ]) && s(t.prototype, i),
      e && s(t, e),
      v
    );
  })();
})();
