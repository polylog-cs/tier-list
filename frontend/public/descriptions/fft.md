**Quick description.**
Computes the DFT/IDFT of length‑n sequences by recursively factorizing n into smaller transforms. It solves frequency analysis and, algorithmically, **convolution/polynomial multiplication** via the convolution theorem. ([Wikipedia](https://en.wikipedia.org/wiki/Fast_Fourier_transform))

**Field notes.**

* Many flavors: radix‑2/4 mixed‑radix, Bluestein (chirp‑z), prime‑factor FFT, NTT (modular convolution). Choice depends on sizes/fields. ([Wikipedia](https://en.wikipedia.org/wiki/Cooley%E2%80%93Tukey_FFT_algorithm))
* Ubiquitous in DSP, graphics, audio, numerical PDEs; also "big‑int" multiplication via FFT/NTT. ([CP Algorithms](https://cp-algorithms.com/algebra/fft.html))

**Code references & demos.**

* Wikipedia: FFT; Cooley–Tukey. ([Wikipedia](https://en.wikipedia.org/wiki/Fast_Fourier_transform))
* Rosetta Code: Fast Fourier transform; Discrete Fourier transform. ([Rosetta Code](https://rosettacode.org/wiki/Fast_Fourier_transform))
* **Interactive**: BetterExplained's interactive FT; Evan Wallace DFT demo; Academo Spectrum Analyzer; "Circles, Sines, and Signals". ([BetterExplained](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform), [Evan Wallace](https://madebyevan.com/dft), [Academo](https://academo.org/demos/spectrum-analyzer), [Jack Schaedler](https://jackschaedler.github.io/circles-sines-signals))