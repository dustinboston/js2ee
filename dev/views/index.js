(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['./view', '../helpers/view'], function(View, ViewHelper) {
    var IndexView, _ref;

    return IndexView = (function(_super) {
      __extends(IndexView, _super);

      function IndexView() {
        _ref = IndexView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      IndexView.prototype.doExecute = function(request) {
        var viewHelper;

        viewHelper = new ViewHelper();
        return viewHelper.renderView(request);
      };

      return IndexView;

    })(View);
  });

}).call(this);