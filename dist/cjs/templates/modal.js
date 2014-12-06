"use strict";
exports["default"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          cachedFragment: null,
          build: function build(dom) {
            var el0 = dom.createTextNode("Modal Content");
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            if (this.cachedFragment === null) {
              this.cachedFragment = this.build(dom);
            }
            var fragment = dom.cloneNode(this.cachedFragment, true);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        cachedFragment: null,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          if (this.cachedFragment === null) {
            this.cachedFragment = this.build(dom);
          }
          var fragment = dom.cloneNode(this.cachedFragment, true);
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          content(morph0, "ic-modal-title", context, [], {}, {morph: morph0, template: child0}, env);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          cachedFragment: null,
          build: function build(dom) {
            var el0 = dom.createTextNode("×");
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            if (this.cachedFragment === null) {
              this.cachedFragment = this.build(dom);
            }
            var fragment = dom.cloneNode(this.cachedFragment, true);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        cachedFragment: null,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          if (this.cachedFragment === null) {
            this.cachedFragment = this.build(dom);
          }
          var fragment = dom.cloneNode(this.cachedFragment, true);
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          content(morph0, "ic-modal-trigger", context, [], {"class": "ic-modal-close", "aria-label": "close"}, {morph: morph0, template: child0}, env);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      cachedFragment: null,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ic-modal-main");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, content = hooks.content;
        dom.detectNamespace(contextualElement);
        if (this.cachedFragment === null) {
          this.cachedFragment = this.build(dom);
        }
        var fragment = dom.cloneNode(this.cachedFragment, true);
        var element0 = fragment.childNodes[1];
        var morph0 = dom.createMorphAt(element0,0,1);
        var morph1 = dom.createMorphAt(element0,1,2);
        var morph2 = dom.createMorphAt(element0,2,3);
        content(morph0, "if", context, [get(context, "makeTitle", env)], {}, {morph: morph0, template: child0}, env);
        content(morph1, "if", context, [get(context, "makeTrigger", env)], {}, {morph: morph1, template: child1}, env);
        content(morph2, "yield", context, [], {}, {morph: morph2}, env);
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    cachedFragment: null,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, content = hooks.content;
      dom.detectNamespace(contextualElement);
      if (this.cachedFragment === null) {
        this.cachedFragment = this.build(dom);
      }
      var fragment = dom.cloneNode(this.cachedFragment, true);
      dom.repairClonedNode(fragment,[0]);
      var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
      content(morph0, "if", context, [get(context, "isOpen", env)], {}, {morph: morph0, template: child0}, env);
      return fragment;
    }
  };
}()));