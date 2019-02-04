var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#BernsteinExpansions.jl-1",
    "page": "Home",
    "title": "BernsteinExpansions.jl",
    "category": "section",
    "text": "BernsteinExpansions.jl is a Julia package to compute Bernstein coefficients of multivariate polynomials."
},

{
    "location": "#Manual-Outline-1",
    "page": "Home",
    "title": "Manual Outline",
    "category": "section",
    "text": "Pages = [\n    \"man/bernstein_expansion.md\",\n    \"man/benchmarks.md\"\n]\nDepth = 2"
},

{
    "location": "#Library-Outline-1",
    "page": "Home",
    "title": "Library Outline",
    "category": "section",
    "text": "Pages = [\n    \"lib/types.md\",\n    \"lib/methods.md\"\n]\nDepth = 2"
},

{
    "location": "man/bernstein_expansion/#",
    "page": "Bernstein expansion",
    "title": "Bernstein expansion",
    "category": "page",
    "text": ""
},

{
    "location": "man/bernstein_expansion/#Bernstein-Expansion-1",
    "page": "Bernstein expansion",
    "title": "Bernstein Expansion",
    "category": "section",
    "text": "Pages = [\"bernstein_expansion.md\"]\nDepth = 3"
},

{
    "location": "man/bernstein_expansion/#Preliminaries-1",
    "page": "Bernstein expansion",
    "title": "Preliminaries",
    "category": "section",
    "text": ""
},

{
    "location": "man/bernstein_expansion/#References-1",
    "page": "Bernstein expansion",
    "title": "References",
    "category": "section",
    "text": "[1] Smith, A. P. Fast construction of constant bound functions for sparse polynomials. Journal of Global Optimization 43.2 (2009): 445-458.[2] Smith, A. P. Enclosure methods for systems of polynomial equations and inequalities. Doctoral dissertation, Universität Konstanz (2012)."
},

{
    "location": "man/benchmarks/#",
    "page": "Benchmarks",
    "title": "Benchmarks",
    "category": "page",
    "text": ""
},

{
    "location": "man/benchmarks/#Benchmarks-1",
    "page": "Benchmarks",
    "title": "Benchmarks",
    "category": "section",
    "text": "Pages = [\"benchmarks.md\"]\nDepth = 3"
},

{
    "location": "man/benchmarks/#Running-the-benchmarks-1",
    "page": "Benchmarks",
    "title": "Running the benchmarks",
    "category": "section",
    "text": "The benchmark/benchmarks.jl file defines a benchmark suite that can be evaluated with the tools provided by PkgBenchmark and BenchmarkTools.To run the benchmarks, execute:julia> using PkgBenchmark\njulia> results = benchmarkpkg(\"LazySets\")To compare current version to another tagged version, commit or branch:julia> results = judge(\"LazySets\", <tagged-version-or-branch>)To export the benchmark results to a Markdown file:julia> export_markdown(\"results.md\", results)To export the benchmark results to a JSON file:julia> writeresults(\"results.json\", results)"
},

{
    "location": "lib/types/#",
    "page": "Types",
    "title": "Types",
    "category": "page",
    "text": ""
},

{
    "location": "lib/types/#Types-1",
    "page": "Types",
    "title": "Types",
    "category": "section",
    "text": "This section includes the types implemented in BernsteinExpansions.jl.Pages = [\"types.md\"]\nDepth = 3CurrentModule = BernsteinExpansions\nDocTestSetup = quote\n    using BernsteinExpansions\nend"
},

{
    "location": "lib/types/#BernsteinExpansions.AbstractBernsteinForm",
    "page": "Types",
    "title": "BernsteinExpansions.AbstractBernsteinForm",
    "category": "type",
    "text": "AbstractBernsteinForm{N}\n\nAbstract supertype for all Bernstein forms types. It is parametric in the numeric type N.\n\n\n\n\n\n"
},

{
    "location": "lib/types/#BernsteinExpansions.ImplicitBernsteinForm",
    "page": "Types",
    "title": "BernsteinExpansions.ImplicitBernsteinForm",
    "category": "type",
    "text": "ImplicitBernsteinForm{T, N} <: AbstractBernsteinForm{N}\n\nType defining an implicit Bernstein form.\n\nFields\n\narray – the vector of vectors holding the Bernstein coefficients\ndim   – an integer representing the ambient dimension\n\n\n\n\n\n"
},

{
    "location": "lib/types/#Bernstein-forms-1",
    "page": "Types",
    "title": "Bernstein forms",
    "category": "section",
    "text": "AbstractBernsteinForm\nImplicitBernsteinForm"
},

{
    "location": "lib/methods/#",
    "page": "Methods",
    "title": "Methods",
    "category": "page",
    "text": ""
},

{
    "location": "lib/methods/#Methods-1",
    "page": "Methods",
    "title": "Methods",
    "category": "section",
    "text": "This section includes the methods implemented in BernsteinExpansions.jl.Pages = [\"methods.md\"]\nDepth = 3CurrentModule = BernsteinExpansions\nDocTestSetup = quote\n    using BernsteinExpansions\nend"
},

{
    "location": "lib/methods/#BernsteinExpansions.univariate",
    "page": "Methods",
    "title": "BernsteinExpansions.univariate",
    "category": "function",
    "text": "univariate(k::Int64, l::Int64, low::N, high::N)::Vector{N} where {N<:AbstractFloat}\n\nCompute the Bernstein coefficients of a univariate monomial.\n\nInput\n\nk    – degree of the given monomial\nl    – degree of the Bernstein polynomial\nlow  – the lower bound of the interval where the Bernstein coefficients are computed\nhigh – the upper bound of the interval the Bernstein coefficients are computed\n\nOutput\n\nA vector with floating point entries containing the Bernstein coefficients.\n\n\n\n\n\nunivariate(k::Int64, l::Int64, low::Rational, high::Rational)::Vector{Rational}\n\nCompute exactly the Bernstein coefficients of a univariate monomial.\n\nInput\n\nk    – degree of the given monomial\nl    – degree of the Bernstein polynomial\nlow  – the lower bound of the interval where the Bernstein coefficients are computed\nhigh – the upper bound of the interval the Bernstein coefficients are computed\n\nOutput\n\nA vector with rational entries containing the Bernstein coefficients.\n\n\n\n\n\n"
},

{
    "location": "lib/methods/#BernsteinExpansions.multivariate",
    "page": "Methods",
    "title": "BernsteinExpansions.multivariate",
    "category": "function",
    "text": "multivariate(k::Vector{Int64}, l::Vector{Int64},\n                      low::Vector{N}, high::Vector{N})::ImplicitBernsteinForm{N} where {N<:Number}\n\nCompute the Bernstein coefficients of a multivariate monomial.\n\nInput\n\nk    – vector of degrees for each monomial\nl    – vector of degrees of the Bernstein polynomial for each monomial\nlow  – the lower bounds of the interval where the Bernstein coefficients are computed\nhigh – the upper bounds of the interval the Bernstein coefficients are computed\n\nOutput\n\nA Bernstein implicit form holding the Bernstein coefficients.\n\nExamples\n\njulia> m = multivariate([3,2],[3,2],[1.0,2],[2,4.0]);\njulia> m.array\n2-element Array{Array{Float64,1},1}:\n [1.0, 2.0, 4.0, 8.0]\n [4.0, 8.0, 16.0]\n\n\n\n\n\n"
},

{
    "location": "lib/methods/#Implicit-Form-1",
    "page": "Methods",
    "title": "Implicit Form",
    "category": "section",
    "text": "Functions to compute the implicit Bernstein form of univariate and multivariate monomials.univariate\nmultivariate"
},

{
    "location": "lib/methods/#BernsteinExpansions.generate_tensor_form",
    "page": "Methods",
    "title": "BernsteinExpansions.generate_tensor_form",
    "category": "function",
    "text": "generate_tensor_form(B::ImplicitBernsteinForm{N}; algorithm::String=\"loop\") where {N}\n\nCompute the Bernstein expansion in tensorial form given its implicit form.\n\nInput\n\nB         – Bernstein expansion in implicit form\nalgorithm – (optional, default: \"tensor_generated\") the algorithm used                for this calculation, valid options are:\n\"tensor_naive\"\n\"tensor_generated\"\n\"linear_kron\"\n\"linear_kron_single\"\n\nOutput\n\nA multi-dimensional array for the \"tensor\" algorithms, or a one-dimensional array for the \"linear\" algorithms, such that\n\n    Ai_1  i_n = vi_1  vi_n\n\n\n\n\n\n"
},

{
    "location": "lib/methods/#BernsteinExpansions.multivariate_tensor",
    "page": "Methods",
    "title": "BernsteinExpansions.multivariate_tensor",
    "category": "function",
    "text": "multivariate_tensor(k::Vector{Int64}, l::Vector{Int64},\n                    low::Vector{T}, high::Vector{T};\n                    algorithm::String=\"tensor_generated\")\n\nCompute the Bernstein coefficients of a multivariate monomial in the tensor form.\n\nInput\n\nk         – vector of degrees for each monomial\nl         – vector of degrees of the Bernstein polynomial for each monomial\nlow       – the lower bounds of the interval where the Bernstein coefficients are computed\nhigh      – the upper bounds of the interval the Bernstein coefficients are computed\nalgorithm – (optional, default: \"tensor_generated\") the algorithm used for                this calculation, see valid options in generate_tensor_form\n\n\n\n\n\n"
},

{
    "location": "lib/methods/#BernsteinExpansions._tensor_generated!",
    "page": "Methods",
    "title": "BernsteinExpansions._tensor_generated!",
    "category": "function",
    "text": "    _tensor_generated!(A::AbstractArray{T, N}, v::VectorOfArray) where {T, N}\n\nCompute the Bernstein expansion in tensorial form given its implicit form, using a generated function in a nested loop.\n\nInput\n\nA – array\nv – vector of array\n\nOutput\n\nA multi-dimensional array containing the coefficients.\n\nAlgorithm\n\nThis implementation uses Julia\'s Base.Cartesian to generate a set of nested loops to compute the element Ai_1  i_n.\n\n\n\n\n\n"
},

{
    "location": "lib/methods/#Tensorial-Form-1",
    "page": "Methods",
    "title": "Tensorial Form",
    "category": "section",
    "text": "Functions to compute the tensorial Bernstein form of univariate and multivariate monomials.generate_tensor_form\nmultivariate_tensor\n_tensor_generated!"
},

{
    "location": "about/#",
    "page": "About",
    "title": "About",
    "category": "page",
    "text": ""
},

{
    "location": "about/#About-1",
    "page": "About",
    "title": "About",
    "category": "section",
    "text": "This page contains some general information about this project, and recommendations about contributing.Pages = [\"about.md\"]"
},

{
    "location": "about/#Contributing-1",
    "page": "About",
    "title": "Contributing",
    "category": "section",
    "text": "If you like this package, consider contributing! You can send bug reports (or fix them and send your code), add examples to the documentation or propose new features.Below some conventions that we follow when contributing to this package are detailed. For specific guidelines on documentation, see the Documentations Guidelines wiki."
},

{
    "location": "about/#Branches-1",
    "page": "About",
    "title": "Branches",
    "category": "section",
    "text": "Each pull request (PR) should be pushed in a new branch with the name of the author followed by a descriptive name, e.g. t/mforets/my_feature. If the branch is associated to a previous discussion in one issue, we use the name of the issue for easier lookup, e.g. t/mforets/7."
},

{
    "location": "about/#Unit-testing-and-continuous-integration-(CI)-1",
    "page": "About",
    "title": "Unit testing and continuous integration (CI)",
    "category": "section",
    "text": "This project is synchronized with Travis CI, such that each PR gets tested before merging (and the build is automatically triggered after each new commit).For the maintainability of this project, we try to understand and fix the failing doctests if they exist. We develop in Julia v0.6.0, but for experimentation we also build on the nightly branch.To run the unit tests locally, you should do:$ julia --color=yes test/runtests.jl"
},

{
    "location": "about/#Contributing-to-the-documentation-1",
    "page": "About",
    "title": "Contributing to the documentation",
    "category": "section",
    "text": "This documentation is written in Markdown, and it relies on Documenter.jl to produce the HTML layout. To build the docs, run make.jl:$ julia --color=yes docs/make.jl"
},

{
    "location": "about/#Running-the-benchmarks-1",
    "page": "About",
    "title": "Running the benchmarks",
    "category": "section",
    "text": "This package contains a suite of benchmarks that is handled through PkgBenchmark. To run the benchmarks, execute the following commands in Julia\'s REPL:julia> using BernsteinExpansions, PkgBenchmark\njulia> benchmarkpkg(\"BernsteinExpansions\")To save the results to a custom directory, use:julia> benchmarkpkg(\"BernsteinExpansions\", resultsdir=\"/Users/forets/Projects\")For further options see the inline help of benchmarkpkg."
},

{
    "location": "about/#Credits-1",
    "page": "About",
    "title": "Credits",
    "category": "section",
    "text": "These persons have contributed to BernsteinExpansions.jl (in alphabetic order):Marcelo Forets\nAlexandre Rocca"
},

]}
