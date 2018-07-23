var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#BernsteinExpansions.jl-1",
    "page": "Home",
    "title": "BernsteinExpansions.jl",
    "category": "section",
    "text": "BernsteinExpansions.jl is a Julia package to compute Bernstein coefficients of multivariate polynomials."
},

{
    "location": "index.html#Manual-Outline-1",
    "page": "Home",
    "title": "Manual Outline",
    "category": "section",
    "text": "Pages = [\n    \"man/bernstein_expansion.md\",\n    \"man/benchmarks.md\"\n]\nDepth = 2"
},

{
    "location": "index.html#Library-Outline-1",
    "page": "Home",
    "title": "Library Outline",
    "category": "section",
    "text": "Pages = [\n    \"lib/implicit_bernstein_form.md\",\n    \"lib/tensorial_bernstein_form.md\"\n]\nDepth = 2"
},

{
    "location": "man/bernstein_expansion.html#",
    "page": "Bernstein expansion",
    "title": "Bernstein expansion",
    "category": "page",
    "text": ""
},

{
    "location": "man/bernstein_expansion.html#Bernstein-Expansion-1",
    "page": "Bernstein expansion",
    "title": "Bernstein Expansion",
    "category": "section",
    "text": "Pages = [\"bernstein_expansion.md\"]\nDepth = 3"
},

{
    "location": "man/bernstein_expansion.html#Preliminaries-1",
    "page": "Bernstein expansion",
    "title": "Preliminaries",
    "category": "section",
    "text": ""
},

{
    "location": "man/bernstein_expansion.html#References-1",
    "page": "Bernstein expansion",
    "title": "References",
    "category": "section",
    "text": "[1] Smith, Andrew Paul. Fast construction of constant bound functions for sparse polynomials. Journal of Global Optimization 43.2 (2009): 445-458."
},

{
    "location": "man/benchmarks.html#",
    "page": "Benchmarks",
    "title": "Benchmarks",
    "category": "page",
    "text": ""
},

{
    "location": "man/benchmarks.html#Benchmarks-1",
    "page": "Benchmarks",
    "title": "Benchmarks",
    "category": "section",
    "text": "Pages = [\"benchmarks.md\"]\nDepth = 3"
},

{
    "location": "man/benchmarks.html#Running-the-benchmarks-1",
    "page": "Benchmarks",
    "title": "Running the benchmarks",
    "category": "section",
    "text": "The benchmark/benchmarks.jl file defines a benchmark suite that can be evaluated with the tools provided by PkgBenchmark and BenchmarkTools.To run the benchmarks, execute:julia> using PkgBenchmark\njulia> results = benchmarkpkg(\"LazySets\")To compare current version to another tagged version, commit or branch:julia> results = judge(\"LazySets\", <tagged-version-or-branch>)To export the benchmark results to a Markdown file:julia> export_markdown(\"results.md\", results)To export the benchmark results to a JSON file:julia> writeresults(\"results.json\", results)"
},

{
    "location": "lib/implicit_bernstein_form.html#",
    "page": "Implicit Bernstein form",
    "title": "Implicit Bernstein form",
    "category": "page",
    "text": ""
},

{
    "location": "lib/implicit_bernstein_form.html#Implicit-Bernstein-Form-1",
    "page": "Implicit Bernstein form",
    "title": "Implicit Bernstein Form",
    "category": "section",
    "text": "This section of the manual describes the functions to compute the implicit Bernstein form of univariate and multivariate monomials.Pages = [\"implicit_bernstein_form.md\"]\nDepth = 3CurrentModule = BernsteinExpansions"
},

{
    "location": "lib/implicit_bernstein_form.html#BernsteinExpansions.ImplicitForm",
    "page": "Implicit Bernstein form",
    "title": "BernsteinExpansions.ImplicitForm",
    "category": "type",
    "text": "ImplicitForm{T<:Number}\n\nType defining an implicit Bernstein form.\n\nFields\n\narray – the vector of vectors holding the Bernstein coefficients\ndim   – an integer representing the ambient dimension\n\n\n\n"
},

{
    "location": "lib/implicit_bernstein_form.html#Implicit-Form-1",
    "page": "Implicit Bernstein form",
    "title": "Implicit Form",
    "category": "section",
    "text": "ImplicitForm"
},

{
    "location": "lib/implicit_bernstein_form.html#BernsteinExpansions.univariate",
    "page": "Implicit Bernstein form",
    "title": "BernsteinExpansions.univariate",
    "category": "function",
    "text": "univariate(k::Int64, l::Int64, low::N, high::N)::Vector{N} where {N<:AbstractFloat}\n\nCompute the Bernstein coefficients of a univariate monomial.\n\nInput\n\nk    – degree of the given monomial\nl    – degree of the Bernstein polynomial\nlow  – the lower bound of the interval where the Bernstein coefficients are computed\nhigh – the upper bound of the interval the Bernstein coefficients are computed\n\nOutput\n\nA vector with floating point entries containing the Bernstein coefficients.\n\n\n\nunivariate(k::Int64, l::Int64, low::Rational, high::Rational)::Vector{Rational}\n\nCompute exactly the Bernstein coefficients of a univariate monomial.\n\nInput\n\nk    – degree of the given monomial\nl    – degree of the Bernstein polynomial\nlow  – the lower bound of the interval where the Bernstein coefficients are computed\nhigh – the upper bound of the interval the Bernstein coefficients are computed\n\nOutput\n\nA vector with rational entries containing the Bernstein coefficients.\n\n\n\n"
},

{
    "location": "lib/implicit_bernstein_form.html#Univariate-monomials-1",
    "page": "Implicit Bernstein form",
    "title": "Univariate monomials",
    "category": "section",
    "text": "univariate"
},

{
    "location": "lib/implicit_bernstein_form.html#BernsteinExpansions.multivariate",
    "page": "Implicit Bernstein form",
    "title": "BernsteinExpansions.multivariate",
    "category": "function",
    "text": "multivariate(k::Vector{Int64}, l::Vector{Int64},\n                      low::Vector{N}, high::Vector{N})::ImplicitForm{N} where {N<:Number}\n\nCompute the Bernstein coefficients of a multivariate monomial.\n\nInput\n\nk    – vector of degrees for each monomial\nl    – vector of degrees of the Bernstein polynomial for each monomial\nlow  – the lower bounds of the interval where the Bernstein coefficients are computed\nhigh – the upper bounds of the interval the Bernstein coefficients are computed\n\nOutput\n\nA Bernstein implicit form holding the Bernstein coefficients.\n\nExamples\n\njulia> m = multivariate([3,2],[3,2],[1.0,2],[2,4.0]);\njulia> m.array\n2-element Array{Array{Float64,1},1}:\n [1.0, 2.0, 4.0, 8.0]\n [4.0, 8.0, 16.0]\n\n\n\n"
},

{
    "location": "lib/implicit_bernstein_form.html#Multivariate-monomials-1",
    "page": "Implicit Bernstein form",
    "title": "Multivariate monomials",
    "category": "section",
    "text": "multivariate"
},

{
    "location": "lib/tensorial_bernstein_form.html#",
    "page": "Tensorial Bernstein form",
    "title": "Tensorial Bernstein form",
    "category": "page",
    "text": ""
},

{
    "location": "lib/tensorial_bernstein_form.html#Tensorial-Bernstein-Form-1",
    "page": "Tensorial Bernstein form",
    "title": "Tensorial Bernstein Form",
    "category": "section",
    "text": "This section of the manual describes the functions to compute the tensorial Bernstein form of univariate and multivariate monomials.Pages = [\"tensorial_bernstein_form.md\"]\nDepth = 3CurrentModule = BernsteinExpansions"
},

{
    "location": "lib/tensorial_bernstein_form.html#BernsteinExpansions.generate_tensor_form",
    "page": "Tensorial Bernstein form",
    "title": "BernsteinExpansions.generate_tensor_form",
    "category": "function",
    "text": "generate_tensor_form(implicitform::ImplicitForm{T})::Vector{T} where{T<:Number}\n\nCompute the Bernstein expansion in tensorial form given its implicit form.\n\nInput\n\nimplicitform – Bernstein expansion in implicit form\n\nAlgorithm\n\nThis implementation uses Julia\'s Kronecker product kron function.\n\n\n\n"
},

{
    "location": "lib/tensorial_bernstein_form.html#Tensorial-Form-1",
    "page": "Tensorial Bernstein form",
    "title": "Tensorial Form",
    "category": "section",
    "text": "generate_tensor_form"
},

{
    "location": "lib/tensorial_bernstein_form.html#BernsteinExpansions.multivariate_tensor",
    "page": "Tensorial Bernstein form",
    "title": "BernsteinExpansions.multivariate_tensor",
    "category": "function",
    "text": "multivariate_tensor(k::Vector{Int64}, l::Vector{Int64},\n                      low::Vector{T}, high::Vector{T})::Vector{T} where {T<:Number}\n\nCompute the Bernstein coefficients of a multivariate monomial in the tensor form.\n\nInput\n\nk    – vector of degrees for each monomial\nl    – vector of degrees of the Bernstein polynomial for each monomial\nlow  – the lower bounds of the interval where the Bernstein coefficients are computed\nhigh – the upper bounds of the interval the Bernstein coefficients are computed\n\nAlgorithm\n\nThis implementation uses Julia\'s Kronecker product kron function.\n\n\n\n"
},

{
    "location": "lib/tensorial_bernstein_form.html#Multivariate-monomials-1",
    "page": "Tensorial Bernstein form",
    "title": "Multivariate monomials",
    "category": "section",
    "text": "multivariate_tensor"
},

{
    "location": "about.html#",
    "page": "About",
    "title": "About",
    "category": "page",
    "text": ""
},

{
    "location": "about.html#About-1",
    "page": "About",
    "title": "About",
    "category": "section",
    "text": "This page contains some general information about this project, and recommendations about contributing.Pages = [\"about.md\"]"
},

{
    "location": "about.html#Contributing-1",
    "page": "About",
    "title": "Contributing",
    "category": "section",
    "text": "If you like this package, consider contributing! You can send bug reports (or fix them and send your code), add examples to the documentation or propose new features.Below some conventions that we follow when contributing to this package are detailed. For specific guidelines on documentation, see the Documentations Guidelines wiki."
},

{
    "location": "about.html#Branches-1",
    "page": "About",
    "title": "Branches",
    "category": "section",
    "text": "Each pull request (PR) should be pushed in a new branch with the name of the author followed by a descriptive name, e.g. t/mforets/my_feature. If the branch is associated to a previous discussion in one issue, we use the name of the issue for easier lookup, e.g. t/mforets/7."
},

{
    "location": "about.html#Unit-testing-and-continuous-integration-(CI)-1",
    "page": "About",
    "title": "Unit testing and continuous integration (CI)",
    "category": "section",
    "text": "This project is synchronized with Travis CI, such that each PR gets tested before merging (and the build is automatically triggered after each new commit).For the maintainability of this project, we try to understand and fix the failing doctests if they exist. We develop in Julia v0.6.0, but for experimentation we also build on the nightly branch.To run the unit tests locally, you should do:$ julia --color=yes test/runtests.jl"
},

{
    "location": "about.html#Contributing-to-the-documentation-1",
    "page": "About",
    "title": "Contributing to the documentation",
    "category": "section",
    "text": "This documentation is written in Markdown, and it relies on Documenter.jl to produce the HTML layout. To build the docs, run make.jl:$ julia --color=yes docs/make.jl"
},

{
    "location": "about.html#Running-the-benchmarks-1",
    "page": "About",
    "title": "Running the benchmarks",
    "category": "section",
    "text": "This package contains a suite of benchmarks that is handled through PkgBenchmark. To run the benchmarks, execute the following commands in Julia\'s REPL:julia> using BernsteinExpansions, PkgBenchmark\njulia> benchmarkpkg(\"BernsteinExpansions\")To save the results to a custom directory, use:julia> benchmarkpkg(\"BernsteinExpansions\", resultsdir=\"/Users/forets/Projects\")For further options see the inline help of benchmarkpkg."
},

{
    "location": "about.html#Credits-1",
    "page": "About",
    "title": "Credits",
    "category": "section",
    "text": "These persons have contributed to BernsteinExpansions.jl (in alphabetic order):Marcelo Forets\nAlexandre Rocca"
},

]}
