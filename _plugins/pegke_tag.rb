# pegke Liquid Tag
#
# Example:
#   {% pegke %}
#

module Jekyll
  class PegkeTag < Liquid::Tag
    def render(context)
      tweet_script_tag()
    end
    def tweet_script_tag()
      '<div class="ui statistic">
      <div class="label">
      Views
      </div>
      <div class="value">
      40,509
      </div>
      </div>'
    end

  end
end

Liquid::Template.register_tag('pegke', Jekyll::PegkeTag)
