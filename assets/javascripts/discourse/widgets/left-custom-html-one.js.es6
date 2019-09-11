import { createWidget } from 'discourse/widgets/widget';

export default createWidget('left-custom-html-one', {
  tagName: 'div.left-custom-html-one.widget-container',
  buildKey: () => 'left-custom-html-one',

  defaultState() {
    return {
      renderScheduled: false
    };
  },

  html(attrs, state) {
    console.log('left-custom-html-one');
    if (!state.renderScheduled) {
      let html = this.siteSettings.layouts_left_custom_html_one;

      const category = attrs.category;
      if (category && category.layouts_left_custom_html_one) {
        html = category.layouts_left_custom_html_one;
      }

      Ember.run.scheduleOnce('afterRender', this, function() {
        $("div.left-custom-html-one").html('');
        $("div.left-custom-html-one").append(`<div class='contents'>${html}</div>`);
      });
    //  state.renderScheduled = true;
    }
    return '';
  }
});
