POST_FILTEYPE = "markdown".freeze
POST_LAYOUT = "post".freeze
POST_TIMESTAMP_FORMAT = "%Y-%m-%d".freeze

def date
  time = Time.now
  time.strftime POST_TIMESTAMP_FORMAT
end

def extract_spaces(input)
  input = input.gsub(" ", "-")
end

def process_script_arguments(input)
  return "Untitled" if input.empty?
  input.join('-')
end

def create_post_title(input)
  input = extract_spaces(input)
end

puts date
postTitle = process_script_arguments(ARGV)
postTitle = create_post_title(postTitle)
