POST_FILETYPE = ".md".freeze
POST_LAYOUT = "post".freeze
POST_TIMESTAMP_FORMAT = "%Y-%m-%d".freeze

artist = ARGV[0]
album = ARGV[1]

def date
  time = Time.now
  time.strftime POST_TIMESTAMP_FORMAT
end

def hyphenate_spaces(input)
  input = input.gsub(" ", "-")
end

def create_post_title(artist, album)
  input = date + "-" +
  hyphenate_spaces(artist) + "-" +
  hyphenate_spaces(album) + POST_FILETYPE
end

def create_new_post(artist, album)
  filename = create_post_title(artist, album)
  timestamp = Time.now
  fileMd = File.new("_posts/#{filename}", "w+")
  fileMd.write <<EOH
---
layout: posts
artist: #{artist}
album: #{album}
date: #{timestamp}
categories: music
tracks:
  -
genre:
rating:
cover:
videoSlug:
links:
  spotify: https://open.spotify.com/album/
  apple: https://itunes.apple.com/us/album/
  amazon: https://www.amazon.com/
---
EOH

  fileMd.close()
end

create_new_post(artist, album)
