# name: layouts-left-custom-html-one
# about: left custom html number one widget for use with Discourse Layouts
# version: 0.1
# authors: Angus McLeod & Raghu Avula

DiscourseEvent.on(:layouts_ready) do
  DiscourseLayouts::Widget.add('left-custom-html-one', position: 'left', order: '2')
end

after_initialize do
  Site.preloaded_category_custom_fields << 'layouts_left_custom_html_one' if Site.respond_to? :preloaded_category_custom_fields
  add_to_serializer(:basic_category, :layouts_left_custom_html_one) { object.custom_fields['layouts_left_custom_html_one'] }
end
