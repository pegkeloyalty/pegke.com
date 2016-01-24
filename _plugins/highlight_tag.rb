# pegke Liquid Tag
#
# Example:
#   {% pegke %}
#

module Jekyll
  class HighlightTag < Liquid::Tag
    def render(context)
      tag_contents = determine_argumentss(@markup.strip)
      qoute = tag_contents #
      returnhtml(qoute)
    end
   private
   def determine_argumentss(input)
    return input
   end
   def returnhtml(qoute)
     '<div class="ui highlight">' + qoute + '</div>'
   end
  end

end

Liquid::Template.register_tag('highlight', Jekyll::HighlightTag)
