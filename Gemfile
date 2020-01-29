source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!

# The specifier ~> has a special meaning, best shown by example:
# '~> 2.0.3' is identical to '>= 2.0.3' and '< 2.1.'
# '~> 2.1'     is identical to '>= 2.1'    and '< 3.0'
# '~> 2.2.beta' will match prerelease versions like '2.2.beta.12'

gem "jekyll", "~> 4.0.0"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.13.0"
  gem "jekyll-paginate", "~> 1.1.0"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

