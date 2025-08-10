**Quick description.**
Computes gradients of a loss function with respect to neural network weights by applying the chain rule layer-by-layer in reverse. It *solves efficient gradient computation* for training deep neural networks, enabling supervised learning through gradient descent. The forward pass computes outputs; the backward pass propagates error signals to update weights. ([Wikipedia](https://en.wikipedia.org/wiki/Backpropagation))

**Field notes.**

* Werbos (1974) described it in his PhD thesis; Rumelhart, Hinton, Williams (1986) popularized it, sparking the neural network revolution. ([Nature](https://www.nature.com/articles/323533a0))
* Automatic differentiation generalizes backprop; modern frameworks (PyTorch, TensorFlow) implement it via computational graphs. ([Wikipedia](https://en.wikipedia.org/wiki/Automatic_differentiation))
* Vanishing/exploding gradients in deep networks led to innovations: ReLU, batch normalization, residual connections. ([Deep Learning Book](https://www.deeplearningbook.org/))

**Code references & demos.**

* Wikipedia: Backpropagation; Automatic differentiation. ([Wikipedia](https://en.wikipedia.org/wiki/Backpropagation))
* **Interactive**: Neural Network Playground; CS231n backprop demo; 3Blue1Brown neural network series. ([TensorFlow Playground](https://playground.tensorflow.org), [CS231n](https://cs231n.github.io/optimization-2/), [3Blue1Brown](https://www.youtube.com/watch?v=Ilg3gGewQ5U))