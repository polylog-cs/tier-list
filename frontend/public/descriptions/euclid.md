**Quick description.**
Computes the greatest common divisor (GCD) of two integers by repeatedly replacing the larger number with the remainder of dividing it by the smaller one until the remainder is zero. It solves: "given a, b, find the largest d that divides both." The **extended** version also finds integers x,y with ax+by=d (Bézout coefficients), which is vital for modular inverses and RSA. ([Wikipedia](https://en.wikipedia.org/wiki/Euclidean_algorithm))

**Field notes.**

* Worst‑case inputs are consecutive Fibonacci numbers; Lamé (1844) proved a tight bound via that observation—this is a landmark in algorithm analysis. ([Wikipedia](https://en.wikipedia.org/wiki/Lam%C3%A9%27s_theorem), [MathWorld](https://mathworld.wolfram.com/LamesTheorem.html))
* Extended Euclid gives modular inverses; indispensable in cryptography and coding theory. Works for polynomials and more general Euclidean domains. ([Wikipedia](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm))
* Binary GCD (Stein) replaces division by shifts and subtraction—handy on hardware where shifts are cheaper than divides. ([Wikipedia](https://en.wikipedia.org/wiki/Binary_GCD_algorithm))

**Code references & demos.**

* Wikipedia: Euclidean algorithm; Extended Euclidean algorithm. ([Wikipedia](https://en.wikipedia.org/wiki/Euclidean_algorithm))
* Rosetta Code: Greatest common divisor; Modular inverse (uses extended Euclid). ([Rosetta Code](https://rosettacode.org/wiki/Greatest_common_divisor))
* **Interactive**: Wolfram Demonstrations (Euclid, steps, geometry/continued fractions). ([Wolfram Demonstrations](https://demonstrations.wolfram.com/EuclideanAlgorithm))