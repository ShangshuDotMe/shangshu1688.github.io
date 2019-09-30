
在网页上渲染数学公式的引擎，首当其中的就是[MathJax](https://www.mathjax.org/)，成熟稳定，功能强大。其次[KaTex](https://khan.github.io/KaTeX/)也不错，一开始是为Khan Academy开发，虽然功能没有MathJax强大，但特点是轻快灵活。

<!--more-->

在[KaTeX and MathJax Comparison Demo](https://www.intmath.com/cg5/katex-mathjax-comparison.php)这个页面，可以对比两个渲染引擎的性能和输出。一次对比的结果如下：

- Time to process page = 300 ms 【KaTeX】
- Time to process page = 2678 ms 【MathJax】

可以看到KaTeX比MathJax快了一个数量级。

KaTeX的功能不全，例如矩阵就没法很好的渲染。鉴于本网站并不包含复杂的数学公式，不需要大而全的功能，所以果断选择KaTex。

Hugo带有两个markdown引擎：

- [blackfriday](https://github.com/russross/blackfriday)
- [mmark](https://github.com/miekg/mmark)

Hugo默认使用blackfriday，如果要使用mmark，有两种办法：

- 在frontmatter指定`markup = "mmark"`
- 把文件的后缀名从`*.md`改为`*.mmark` [文章目录失效？]

这两个引擎在功能上是不完全一样的，特别是在转义字符的支持上，mmark会更友好一点。

> 使用行内公式需要使用 [Mmark](https://gohugo.io/content-management/formats/#mmark) 但是会使文章目录无法生成和显示。

`markup = "mmark"`

在主题中，向custom-header.html中，添加如下一行
```css
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex@0.10.0-beta/dist/katex.min.css"/>
```

在主题中，向custom-footer.html中，添加如下两行
```javascript
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.js"
  integrity="sha384-K3vbOmF2BtaVai+Qk37uypf7VrgBubhQreNQe9aGsz9lB63dIFiQVlJbr92dw2Lx"
  crossorigin="anonymous">
</script>

<script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/contrib/auto-render.min.js"
  integrity="sha384-kmZOZB5ObwgQnS/DuDg6TScgOiWWBiVt0plIRkZCmE6rDZGrEOQeHM5PcHi+nyqe"
  crossorigin="anonymous"
  onload="renderMathInElement(document.body,
  {delimiters: [{left: '$$', right: '$$', display: true},
  {left: '$', right: '$', display: false}]});">
</script>
```

书写完markdown文件后，部分公式无法渲染。如多行公式无法换行，公式下标问题。
因为markdown和katex中，\ 和 _ 的渲染冲突造成,暂时没找到解决办法。


## Repeating fractions
$$
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} \equiv 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
$$


## Summation notation
markup: mmark

$$
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$


## Sum of a Series
I broke up the next two examples into separate lines so it behaves better on a mobile phone. That's why they include \displaystyle.

$$
\displaystyle\sum_{i=1}^{k+1}i
$$

$$
\displaystyle= \left(\sum_{i=1}^{k}i\right) +(k+1)
$$

$$
\displaystyle= \frac{k(k+1)}{2}+k+1
$$

$$
\displaystyle= \frac{k(k+1)+2(k+1)}{2}
$$

$$
\displaystyle= \frac{(k+1)(k+2)}{2}
$$

$$
\displaystyle= \frac{(k+1)((k+1)+1)}{2}
$$

## Product notation
$$
\displaystyle 1 + \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots = \displaystyle \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \displaystyle\text{ for }\lvert q\rvert < 1.
$$


## Inline math
markup: mmark

And here is some in-line math: $$ k_{n+1} = n^2 + k_n^2 - k_{n-1} $$ , followed by some more text.


## Greek Letters
$$
\Gamma\ \Delta\ \Theta\ \Lambda\ \Xi\ \Pi\ \Sigma\ \Upsilon\ \Phi\ \Psi\ \Omega
$$

$$
\alpha\ \beta\ \gamma\ \delta\ \epsilon\ \zeta\ \eta\ \theta\ \iota\ \kappa\ \lambda\ \mu\ \nu\ \xi\ \omicron\ \pi\ \rho\ \sigma\ \tau\ \upsilon\ \phi\ \chi\ \psi\ \omega\ \varepsilon\ \vartheta\ \varpi\ \varrho\ \varsigma\ \varphi
$$


## Arrows
$$
\gets\ \to\ \leftarrow\ \rightarrow\ \uparrow\ \Uparrow\ \downarrow\ \Downarrow\ \updownarrow\ \Updownarrow
$$

$$
\Leftarrow\ \Rightarrow\ \leftrightarrow\ \Leftrightarrow\ \mapsto\ \hookleftarrow
\leftharpoonup\ \leftharpoondown\ \rightleftharpoons\ \longleftarrow\ \Longleftarrow\ \longrightarrow
$$

$$
\Longrightarrow\ \longleftrightarrow\ \Longleftrightarrow\ \longmapsto\ \hookrightarrow\ \rightharpoonup
$$

$$
\rightharpoondown\ \leadsto\ \nearrow\ \searrow\ \swarrow\ \nwarrow
$$


## Symbols
$$
\surd\ \barwedge\ \veebar\ \odot\ \oplus\ \otimes\ \oslash\ \circledcirc\ \boxdot\ \bigtriangleup
$$

$$
\bigtriangledown\ \dagger\ \diamond\ \star\ \triangleleft\ \triangleright\ \angle\ \infty\ \prime\ \triangle
$$


## Calculus
$$
\int u \frac{dv}{dx}\,dx=uv-\int \frac{du}{dx}v\,dx
$$

$$
f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi i \xi x}
$$

$$
\oint \vec{F} \cdot d\vec{s}=0
$$


## Lorenz Equations
$$
\begin{aligned} \dot{x} & = \sigma(y-x) \\ \dot{y} & = \rho x - y - xz \\ \dot{z} & = -\beta z + xy \end{aligned}
$$


## Cross Product
This works in KaTeX, but the separation of fractions in this environment is not so good.

$$
\mathbf{V}_1 \times \mathbf{V}_2 = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\ \frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0 \end{vmatrix}
$$

Here's a workaround: make the fractions smaller with an extra class that targets the spans with "mfrac" class (makes no difference in the MathJax case):

$$
\mathbf{V}_1 \times \mathbf{V}_2 = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\ \frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0 \end{vmatrix}
$$


## Accents
$$
\hat{x}\ \vec{x}\ \ddot{x}
$$


## Stretchy brackets
$$
\left(\frac{x^2}{y^3}\right)
$$


## Evaluation at limits
$$
\left.\frac{x^3}{3}\right|_0^1
$$


## Case definitions
$$
f(n) = \begin{cases} \frac{n}{2}, & \text{if } n\text{ is even} \\ 3n+1, & \text{if } n\text{ is odd} \end{cases}
$$


## Maxwell's Equations
$$
\begin{aligned} \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\ \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\ \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\ \nabla \cdot \vec{\mathbf{B}} & = 0 \end{aligned}
$$

These equations are quite cramped. We can add vertical spacing using (for example) [1em] after each line break (\\). as you can see here:

$$
\begin{aligned} \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\[1em] \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\[0.5em] \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\[1em] \nabla \cdot \vec{\mathbf{B}} & = 0 \end{aligned}
$$


## Statistics
Definition of combination:

$$
\frac{n!}{k!(n-k)!} = {^n}C_k
{n \choose k}
$$

## Fractions on fractions
$$
\frac{\frac{1}{x}+\frac{1}{y}}{y-z}
$$


## n-th root
$$
\sqrt[n]{1+x+x^2+x^3+\ldots}
$$


## Matrices
$$
\begin{pmatrix} a_{11} & a_{12} & a_{13}\\ a_{21} & a_{22} & a_{23}\\ a_{31} & a_{32} & a_{33} \end{pmatrix}
\begin{bmatrix} 0 & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 & \cdots & 0 \end{bmatrix}
$$


## Punctuation

Now with punctuation:

$$
f(x) = \sqrt{1+x} \quad (x \ge -1)
f(x) \sim x^2 \quad (x\to\infty)
$$

Now with punctuation:

$$
f(x) = \sqrt{1+x}, \quad x \ge -1
f(x) \sim x^2, \quad x\to\infty
$$
