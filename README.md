# Music Blog

## Overview
This repo contains the code & assets that serve my music blog at [music.kmagameguy.com][music].  It is built using [GitHub Pages & Jekyll][gh-pages].

## Development
### Requirements:
- [Ruby][ruby] (I prefer managing ruby installations with [rbenv][rbenv])
- [Bundler][bundler]
- A JavaScript runtime (I prefer [NodeJS][nodejs])

*[DigitalOcean][digitalocean] has a nice guide which demonstrates how to set up Ruby and Bundler with rbenv.  Check it out if you've never worked with any of them before.*

### Getting Set Up
After you've satisfied the requirements above you can prepare this repo for local development as follows:
1. Fork the repo
1. Clone it
1. Run `bundle install`
1. Run `bundle exec jekyll serve`  (or use the included `bin/server` script)
1. Point your browser to `localhost:4000`

If all is well you should see the blog site.  For further reading, check out [Jekyll's Documentation][jekyll-docs]

## Contributing
Since this is a personal music blog I'm not really accepting contributions at this point in time.  Feel free to fork the repository for your own uses, though!


[music]:https://music.kmagameguy.com
[gh-pages]:https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll
[ruby]:https://www.ruby-lang.org/en/
[rbenv]:https://github.com/rbenv/rbenv
[bundler]:https://bundler.io/
[nodejs]:https://nodejs.org/en/
[digitalocean]:https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-20-04
[jekyll-docs]:https://jekyllrb.com/docs/posts/
