# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "existence"
  spec.version       = "0.0.1"
  spec.authors       = ["Ray Heffer"]
  spec.email         = ["web.dev@rayheffer.com"]

  spec.summary       = "The Existence Jekyll theme is perfect for blogging."
  spec.description   = "The Existence theme is design is based on the custom blogging theme by Ray Heffer. It is designed to emulate a Wordpress blog, and blog comments are handled with an option Twitter integration feature unique to this theme."
  spec.homepage      = "https://rayheffer.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|tags|_posts|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.13.0"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1.0"
 
end