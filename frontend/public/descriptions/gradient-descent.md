**Quick description.**
Iteratively updates θ ← θ − η∇f(θ) to minimize a differentiable objective. In ML this underlies training from linear regression to deep nets; **SGD** and mini‑batch variants trade noisy but cheap gradient estimates for speed. ([Wikipedia](https://en.wikipedia.org/wiki/Gradient_descent))

**Field notes.**

* Practical variants: momentum, Nesterov, AdaGrad/RMSProp/Adam; line search and schedules matter. ([Wikipedia](https://en.wikipedia.org/wiki/Gradient_method))
* Geometry matters: conditioning affects speed; preconditioning/normalization helps.
* Used outside ML anywhere you can compute gradients.

**Code references & demos.**

* Wikipedia: Gradient descent. ([Wikipedia](https://en.wikipedia.org/wiki/Gradient_descent))
* Rosetta Code: Gradient descent task (many langs). ([Rosetta Code](https://rosettacode.org/wiki/Gradient_descent))
* **Interactive**: Gradient Descent Demo; Setosa (explorable explanations of related ideas). ([SKZ Blog](https://blog.skz.dev/gradient-descent), [Setosa](https://setosa.io/ev))