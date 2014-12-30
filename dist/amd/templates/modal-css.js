define(
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.HTMLBars.template((function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createTextNode("ic-modal-screen,\nic-modal,\nic-modal-main,\nic-modal-title {\n  display: block;\n}\n\nic-modal,\n.ic-modal-form {\n  display: none;\n  -webkit-overflow-scrolling: touch;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  overflow: auto;\n  background-color: hsla(0, 0%, 100%, .90);\n  padding: 10px;\n}\n\nic-modal[is-open],\n.ic-modal-form[is-open] {\n  display: block;\n}\n\nic-modal-main {\n  position: relative;\n  margin: 40px auto;\n  max-width: 800px;\n  padding: 20px;\n  border-radius: 4px;\n  background: #fff;\n  border: 1px solid hsl(0, 0%, 70%);\n}\n\nic-modal-title {\n  margin: 0 -20px 20px -20px;\n  padding: 0 20px 20px 20px;\n  border-bottom: 1px solid hsl(0, 0%, 90%);\n}\n\n.ic-modal-trigger.ic-modal-close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  background: none;\n  border: none;\n  color: inherit;\n  font-size: 18px;\n  padding: 6px;\n}\n\n.ic-modal-trigger.ic-modal-close:focus {\n  outline: none;\n  text-shadow: 0 0 6px hsl(208, 47%, 60%),\n    0 0 2px hsl(208, 47%, 60%),\n    0 0 2px hsl(208, 47%, 60%),\n    0 0 1px hsl(208, 47%, 60%);\n}\n\n");
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
          return fragment;
        }
      };
    }()));
  });