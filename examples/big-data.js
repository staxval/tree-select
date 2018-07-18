webpackJsonp([1],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(53)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(54)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contextTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_warning__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util__ = __webpack_require__(110);










/**
 * Thought we still use `cloneElement` to pass `key`,
 * other props can pass with context for future refactor.
 */
var contextTypes = {
  rcTree: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
    root: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,

    prefixCls: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    selectable: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
    showIcon: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
    icon: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func]),
    draggable: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
    checkable: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node]),
    checkStrictly: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
    disabled: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
    openTransitionName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    openAnimation: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object]),

    loadData: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    filterTreeNode: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    renderTreeNode: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

    isKeyChecked: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

    onNodeClick: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onNodeDoubleClick: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onNodeExpand: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onNodeSelect: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onNodeMouseEnter: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onNodeMouseLeave: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onNodeContextMenu: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onNodeDragStart: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onNodeDragEnter: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onNodeDragOver: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onNodeDragLeave: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onNodeDragEnd: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onNodeDrop: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onBatchNodeCheck: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    onCheckConductFinished: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func
  })
};

var Tree = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Tree, _React$Component);

  function Tree(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Tree);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var defaultExpandAll = props.defaultExpandAll,
        defaultExpandParent = props.defaultExpandParent,
        defaultExpandedKeys = props.defaultExpandedKeys,
        defaultCheckedKeys = props.defaultCheckedKeys,
        defaultSelectedKeys = props.defaultSelectedKeys,
        expandedKeys = props.expandedKeys;

    // Sync state with props

    var _ref = Object(__WEBPACK_IMPORTED_MODULE_8__util__["c" /* calcCheckedKeys */])(defaultCheckedKeys, props) || {},
        _ref$checkedKeys = _ref.checkedKeys,
        checkedKeys = _ref$checkedKeys === undefined ? [] : _ref$checkedKeys,
        _ref$halfCheckedKeys = _ref.halfCheckedKeys,
        halfCheckedKeys = _ref$halfCheckedKeys === undefined ? [] : _ref$halfCheckedKeys;

    var state = {
      selectedKeys: Object(__WEBPACK_IMPORTED_MODULE_8__util__["f" /* calcSelectedKeys */])(defaultSelectedKeys, props),
      checkedKeys: checkedKeys,
      halfCheckedKeys: halfCheckedKeys,

      loadedKeys: [],
      loadingKeys: []
    };

    if (defaultExpandAll) {
      state.expandedKeys = Object(__WEBPACK_IMPORTED_MODULE_8__util__["h" /* getFullKeyList */])(props.children);
    } else if (defaultExpandParent) {
      state.expandedKeys = Object(__WEBPACK_IMPORTED_MODULE_8__util__["e" /* calcExpandedKeys */])(expandedKeys || defaultExpandedKeys, props);
    } else {
      state.expandedKeys = defaultExpandedKeys;
    }

    _this.state = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, state, _this.getSyncProps(props) || {});

    // Cache for check status to optimize
    _this.checkedBatch = null;
    return _this;
  }

  Tree.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        selectable = _props.selectable,
        showIcon = _props.showIcon,
        icon = _props.icon,
        draggable = _props.draggable,
        checkable = _props.checkable,
        checkStrictly = _props.checkStrictly,
        disabled = _props.disabled,
        loadData = _props.loadData,
        filterTreeNode = _props.filterTreeNode,
        openTransitionName = _props.openTransitionName,
        openAnimation = _props.openAnimation;


    return {
      rcTree: {
        // root: this,

        prefixCls: prefixCls,
        selectable: selectable,
        showIcon: showIcon,
        icon: icon,
        draggable: draggable,
        checkable: checkable,
        checkStrictly: checkStrictly,
        disabled: disabled,
        openTransitionName: openTransitionName,
        openAnimation: openAnimation,

        loadData: loadData,
        filterTreeNode: filterTreeNode,
        renderTreeNode: this.renderTreeNode,
        isKeyChecked: this.isKeyChecked,

        onNodeClick: this.onNodeClick,
        onNodeDoubleClick: this.onNodeDoubleClick,
        onNodeExpand: this.onNodeExpand,
        onNodeSelect: this.onNodeSelect,
        onNodeLoad: this.onNodeLoad,
        onNodeMouseEnter: this.onNodeMouseEnter,
        onNodeMouseLeave: this.onNodeMouseLeave,
        onNodeContextMenu: this.onNodeContextMenu,
        onNodeDragStart: this.onNodeDragStart,
        onNodeDragEnter: this.onNodeDragEnter,
        onNodeDragOver: this.onNodeDragOver,
        onNodeDragLeave: this.onNodeDragLeave,
        onNodeDragEnd: this.onNodeDragEnd,
        onNodeDrop: this.onNodeDrop,
        onBatchNodeCheck: this.onBatchNodeCheck,
        onCheckConductFinished: this.onCheckConductFinished
      }
    };
  };

  Tree.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    // React 16 will not trigger update if new state is null
    this.setState(function (prevState) {
      return _this2.getSyncProps(nextProps, _this2.props, prevState);
    });
  };

  /**
   * [Legacy] Select handler is less small than node,
   * so that this will trigger when drag enter node or select handler.
   * This is a little tricky if customize css without padding.
   * Better for use mouse move event to refresh drag state.
   * But let's just keep it to avoid event trigger logic change.
   */


  /**
   * This will cache node check status to optimize update process.
   * When Tree get trigger `onCheckConductFinished` will flush all the update.
   */


  /**
   * When top `onCheckConductFinished` called, will execute all batch update.
   * And trigger `onCheck` event.
   */


  /**
   * Sync state with props if needed
   */


  /**
   * Only update the value which is not in props
   */


  /**
   * [Legacy] Original logic use `key` as tracking clue.
   * We have to use `cloneElement` to pass `key`.
   */


  Tree.prototype.render = function render() {
    var _classNames,
        _this3 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        className = _props2.className,
        focusable = _props2.focusable,
        showLine = _props2.showLine,
        children = _props2.children;

    var domProps = {};

    // [Legacy] Commit: 0117f0c9db0e2956e92cb208f51a42387dfcb3d1
    if (focusable) {
      domProps.tabIndex = '0';
      domProps.onKeyDown = this.onKeyDown;
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'ul',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, domProps, {
        className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(prefixCls, className, (_classNames = {}, _classNames[prefixCls + '-show-line'] = showLine, _classNames)),
        role: 'tree-node',
        unselectable: 'on'
      }),
      Object(__WEBPACK_IMPORTED_MODULE_8__util__["m" /* mapChildren */])(children, function (node, index) {
        return _this3.renderTreeNode(node, index);
      })
    );
  };

  return Tree;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Tree.propTypes = {
  prefixCls: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
  showLine: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  showIcon: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  icon: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func]),
  focusable: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  selectable: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  multiple: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  checkable: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node]),
  checkStrictly: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  draggable: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  defaultExpandParent: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  autoExpandParent: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  defaultExpandAll: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  defaultExpandedKeys: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string),
  expandedKeys: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string),
  defaultCheckedKeys: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string),
  checkedKeys: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number])), __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object]),
  defaultSelectedKeys: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string),
  selectedKeys: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string),
  onClick: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onDoubleClick: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onExpand: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onCheck: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onLoad: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  loadData: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  loadedKeys: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string),
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onRightClick: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onDragStart: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onDragEnter: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onDragOver: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onDragLeave: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onDragEnd: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onDrop: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  filterTreeNode: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  openTransitionName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  openAnimation: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object])
};
Tree.childContextTypes = contextTypes;
Tree.defaultProps = {
  prefixCls: 'rc-tree',
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  disabled: false,
  checkStrictly: false,
  draggable: false,
  defaultExpandParent: true,
  autoExpandParent: false,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: []
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.onNodeDragStart = function (event, node) {
    var expandedKeys = _this4.state.expandedKeys;
    var onDragStart = _this4.props.onDragStart;
    var _node$props = node.props,
        eventKey = _node$props.eventKey,
        children = _node$props.children;


    _this4.dragNode = node;

    _this4.setState({
      dragNodesKeys: Object(__WEBPACK_IMPORTED_MODULE_8__util__["g" /* getDragNodesKeys */])(children, node),
      expandedKeys: Object(__WEBPACK_IMPORTED_MODULE_8__util__["b" /* arrDel */])(expandedKeys, eventKey)
    });

    if (onDragStart) {
      onDragStart({ event: event, node: node });
    }
  };

  this.onNodeDragEnter = function (event, node) {
    var expandedKeys = _this4.state.expandedKeys;
    var onDragEnter = _this4.props.onDragEnter;
    var _node$props2 = node.props,
        pos = _node$props2.pos,
        eventKey = _node$props2.eventKey;


    if (!_this4.dragNode) return;

    var dropPosition = Object(__WEBPACK_IMPORTED_MODULE_8__util__["d" /* calcDropPosition */])(event, node);

    // Skip if drag node is self
    if (_this4.dragNode.props.eventKey === eventKey && dropPosition === 0) {
      _this4.setState({
        dragOverNodeKey: '',
        dropPosition: null
      });
      return;
    }

    // Ref: https://github.com/react-component/tree/issues/132
    // Add timeout to let onDragLevel fire before onDragEnter,
    // so that we can clean drag props for onDragLeave node.
    // Macro task for this:
    // https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script
    setTimeout(function () {
      // Update drag over node
      _this4.setState({
        dragOverNodeKey: eventKey,
        dropPosition: dropPosition
      });

      // Side effect for delay drag
      if (!_this4.delayedDragEnterLogic) {
        _this4.delayedDragEnterLogic = {};
      }
      Object.keys(_this4.delayedDragEnterLogic).forEach(function (key) {
        clearTimeout(_this4.delayedDragEnterLogic[key]);
      });
      _this4.delayedDragEnterLogic[pos] = setTimeout(function () {
        var newExpandedKeys = Object(__WEBPACK_IMPORTED_MODULE_8__util__["a" /* arrAdd */])(expandedKeys, eventKey);
        _this4.setState({
          expandedKeys: newExpandedKeys
        });

        if (onDragEnter) {
          onDragEnter({ event: event, node: node, expandedKeys: newExpandedKeys });
        }
      }, 400);
    }, 0);
  };

  this.onNodeDragOver = function (event, node) {
    var onDragOver = _this4.props.onDragOver;
    var eventKey = node.props.eventKey;

    // Update drag position

    if (_this4.dragNode && eventKey === _this4.state.dragOverNodeKey) {
      var dropPosition = Object(__WEBPACK_IMPORTED_MODULE_8__util__["d" /* calcDropPosition */])(event, node);

      if (dropPosition === _this4.state.dropPosition) return;

      _this4.setState({
        dropPosition: dropPosition
      });
    }

    if (onDragOver) {
      onDragOver({ event: event, node: node });
    }
  };

  this.onNodeDragLeave = function (event, node) {
    var onDragLeave = _this4.props.onDragLeave;


    _this4.setState({
      dragOverNodeKey: ''
    });

    if (onDragLeave) {
      onDragLeave({ event: event, node: node });
    }
  };

  this.onNodeDragEnd = function (event, node) {
    var onDragEnd = _this4.props.onDragEnd;

    _this4.setState({
      dragOverNodeKey: ''
    });
    if (onDragEnd) {
      onDragEnd({ event: event, node: node });
    }
  };

  this.onNodeDrop = function (event, node) {
    var _state = _this4.state,
        _state$dragNodesKeys = _state.dragNodesKeys,
        dragNodesKeys = _state$dragNodesKeys === undefined ? [] : _state$dragNodesKeys,
        dropPosition = _state.dropPosition;
    var onDrop = _this4.props.onDrop;
    var _node$props3 = node.props,
        eventKey = _node$props3.eventKey,
        pos = _node$props3.pos;


    _this4.setState({
      dragOverNodeKey: '',
      dropNodeKey: eventKey
    });

    if (dragNodesKeys.indexOf(eventKey) !== -1) {
      __WEBPACK_IMPORTED_MODULE_7_warning___default()(false, 'Can not drop to dragNode(include it\'s children node)');
      return;
    }

    var posArr = Object(__WEBPACK_IMPORTED_MODULE_8__util__["n" /* posToArr */])(pos);

    var dropResult = {
      event: event,
      node: node,
      dragNode: _this4.dragNode,
      dragNodesKeys: dragNodesKeys.slice(),
      dropPosition: dropPosition + Number(posArr[posArr.length - 1])
    };

    if (dropPosition !== 0) {
      dropResult.dropToGap = true;
    }

    if (onDrop) {
      onDrop(dropResult);
    }
  };

  this.onNodeClick = function (e, treeNode) {
    var onClick = _this4.props.onClick;

    if (onClick) {
      onClick(e, treeNode);
    }
  };

  this.onNodeDoubleClick = function (e, treeNode) {
    var onDoubleClick = _this4.props.onDoubleClick;

    if (onDoubleClick) {
      onDoubleClick(e, treeNode);
    }
  };

  this.onNodeSelect = function (e, treeNode) {
    var selectedKeys = _this4.state.selectedKeys;
    var _props3 = _this4.props,
        onSelect = _props3.onSelect,
        multiple = _props3.multiple,
        children = _props3.children;
    var _treeNode$props = treeNode.props,
        selected = _treeNode$props.selected,
        eventKey = _treeNode$props.eventKey;

    var targetSelected = !selected;

    // Update selected keys
    if (!targetSelected) {
      selectedKeys = Object(__WEBPACK_IMPORTED_MODULE_8__util__["b" /* arrDel */])(selectedKeys, eventKey);
    } else if (!multiple) {
      selectedKeys = [eventKey];
    } else {
      selectedKeys = Object(__WEBPACK_IMPORTED_MODULE_8__util__["a" /* arrAdd */])(selectedKeys, eventKey);
    }

    // [Legacy] Not found related usage in doc or upper libs
    // [Legacy] TODO: add optimize prop to skip node process
    var selectedNodes = [];
    if (selectedKeys.length) {
      Object(__WEBPACK_IMPORTED_MODULE_8__util__["o" /* traverseTreeNodes */])(children, function (_ref2) {
        var node = _ref2.node,
            key = _ref2.key;

        if (selectedKeys.indexOf(key) !== -1) {
          selectedNodes.push(node);
        }
      });
    }

    _this4.setUncontrolledState({ selectedKeys: selectedKeys });

    if (onSelect) {
      var eventObj = {
        event: 'select',
        selected: targetSelected,
        node: treeNode,
        selectedNodes: selectedNodes,
        nativeEvent: e.nativeEvent
      };
      onSelect(selectedKeys, eventObj);
    }
  };

  this.onNodeLoad = function (treeNode) {
    var _props4 = _this4.props,
        loadData = _props4.loadData,
        onLoad = _props4.onLoad;
    var _state2 = _this4.state,
        _state2$loadedKeys = _state2.loadedKeys,
        loadedKeys = _state2$loadedKeys === undefined ? [] : _state2$loadedKeys,
        _state2$loadingKeys = _state2.loadingKeys,
        loadingKeys = _state2$loadingKeys === undefined ? [] : _state2$loadingKeys;
    var eventKey = treeNode.props.eventKey;


    if (!loadData || loadedKeys.indexOf(eventKey) !== -1 || loadingKeys.indexOf(eventKey) !== -1) {
      return null;
    }

    _this4.setState({
      loadingKeys: Object(__WEBPACK_IMPORTED_MODULE_8__util__["a" /* arrAdd */])(loadingKeys, eventKey)
    });
    var promise = loadData(treeNode);
    promise.then(function () {
      var newLoadedKeys = Object(__WEBPACK_IMPORTED_MODULE_8__util__["a" /* arrAdd */])(_this4.state.loadedKeys, eventKey);
      _this4.setUncontrolledState({
        loadedKeys: newLoadedKeys
      });
      _this4.setState({
        loadingKeys: Object(__WEBPACK_IMPORTED_MODULE_8__util__["b" /* arrDel */])(_this4.state.loadingKeys, eventKey)
      });

      if (onLoad) {
        var eventObj = {
          event: 'load',
          node: treeNode
        };
        onLoad(newLoadedKeys, eventObj);
      }
    });

    return promise;
  };

  this.onBatchNodeCheck = function (key, checked, halfChecked, startNode) {
    if (startNode) {
      _this4.checkedBatch = {
        treeNode: startNode,
        checked: checked,
        list: []
      };
    }

    // This code should never called
    if (!_this4.checkedBatch) {
      _this4.checkedBatch = {
        list: []
      };
      __WEBPACK_IMPORTED_MODULE_7_warning___default()(false, 'Checked batch not init. This should be a bug. Please fire a issue.');
    }

    _this4.checkedBatch.list.push({ key: key, checked: checked, halfChecked: halfChecked });
  };

  this.onCheckConductFinished = function (e) {
    var _state3 = _this4.state,
        checkedKeys = _state3.checkedKeys,
        halfCheckedKeys = _state3.halfCheckedKeys;
    var _props5 = _this4.props,
        onCheck = _props5.onCheck,
        checkStrictly = _props5.checkStrictly,
        children = _props5.children;

    // Use map to optimize update speed

    var checkedKeySet = {};
    var halfCheckedKeySet = {};

    checkedKeys.forEach(function (key) {
      checkedKeySet[key] = true;
    });
    halfCheckedKeys.forEach(function (key) {
      halfCheckedKeySet[key] = true;
    });

    // Batch process
    _this4.checkedBatch.list.forEach(function (_ref3) {
      var key = _ref3.key,
          checked = _ref3.checked,
          halfChecked = _ref3.halfChecked;

      checkedKeySet[key] = checked;
      halfCheckedKeySet[key] = halfChecked;
    });
    var newCheckedKeys = Object.keys(checkedKeySet).filter(function (key) {
      return checkedKeySet[key];
    });
    var newHalfCheckedKeys = Object.keys(halfCheckedKeySet).filter(function (key) {
      return halfCheckedKeySet[key];
    });

    // Trigger onChecked
    var selectedObj = void 0;

    var eventObj = {
      event: 'check',
      node: _this4.checkedBatch.treeNode,
      checked: _this4.checkedBatch.checked,
      nativeEvent: e.nativeEvent
    };

    if (checkStrictly) {
      selectedObj = Object(__WEBPACK_IMPORTED_MODULE_8__util__["k" /* getStrictlyValue */])(newCheckedKeys, newHalfCheckedKeys);

      // [Legacy] TODO: add optimize prop to skip node process
      eventObj.checkedNodes = [];
      Object(__WEBPACK_IMPORTED_MODULE_8__util__["o" /* traverseTreeNodes */])(children, function (_ref4) {
        var node = _ref4.node,
            key = _ref4.key;

        if (checkedKeySet[key]) {
          eventObj.checkedNodes.push(node);
        }
      });

      _this4.setUncontrolledState({ checkedKeys: newCheckedKeys });
    } else {
      selectedObj = newCheckedKeys;

      // [Legacy] TODO: add optimize prop to skip node process
      eventObj.checkedNodes = [];
      eventObj.checkedNodesPositions = []; // [Legacy] TODO: not in API
      eventObj.halfCheckedKeys = newHalfCheckedKeys; // [Legacy] TODO: not in API
      Object(__WEBPACK_IMPORTED_MODULE_8__util__["o" /* traverseTreeNodes */])(children, function (_ref5) {
        var node = _ref5.node,
            pos = _ref5.pos,
            key = _ref5.key;

        if (checkedKeySet[key]) {
          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({ node: node, pos: pos });
        }
      });

      _this4.setUncontrolledState({
        checkedKeys: newCheckedKeys,
        halfCheckedKeys: newHalfCheckedKeys
      });
    }

    if (onCheck) {
      onCheck(selectedObj, eventObj);
    }

    // Clean up
    _this4.checkedBatch = null;
  };

  this.onNodeExpand = function (e, treeNode) {
    var expandedKeys = _this4.state.expandedKeys;
    var _props6 = _this4.props,
        onExpand = _props6.onExpand,
        loadData = _props6.loadData;
    var _treeNode$props2 = treeNode.props,
        eventKey = _treeNode$props2.eventKey,
        expanded = _treeNode$props2.expanded;

    // Update selected keys

    var index = expandedKeys.indexOf(eventKey);
    var targetExpanded = !expanded;

    __WEBPACK_IMPORTED_MODULE_7_warning___default()(expanded && index !== -1 || !expanded && index === -1, 'Expand state not sync with index check');

    if (targetExpanded) {
      expandedKeys = Object(__WEBPACK_IMPORTED_MODULE_8__util__["a" /* arrAdd */])(expandedKeys, eventKey);
    } else {
      expandedKeys = Object(__WEBPACK_IMPORTED_MODULE_8__util__["b" /* arrDel */])(expandedKeys, eventKey);
    }

    _this4.setUncontrolledState({ expandedKeys: expandedKeys });

    if (onExpand) {
      onExpand(expandedKeys, {
        node: treeNode,
        expanded: targetExpanded,
        nativeEvent: e.nativeEvent
      });
    }

    // Async Load data
    if (targetExpanded && loadData) {
      var loadPromise = _this4.onNodeLoad(treeNode);
      return loadPromise ? loadPromise.then(function () {
        // [Legacy] Refresh logic
        _this4.setUncontrolledState({ expandedKeys: expandedKeys });
      }) : null;
    }

    return null;
  };

  this.onNodeMouseEnter = function (event, node) {
    var onMouseEnter = _this4.props.onMouseEnter;

    if (onMouseEnter) {
      onMouseEnter({ event: event, node: node });
    }
  };

  this.onNodeMouseLeave = function (event, node) {
    var onMouseLeave = _this4.props.onMouseLeave;

    if (onMouseLeave) {
      onMouseLeave({ event: event, node: node });
    }
  };

  this.onNodeContextMenu = function (event, node) {
    var onRightClick = _this4.props.onRightClick;

    if (onRightClick) {
      event.preventDefault();
      onRightClick({ event: event, node: node });
    }
  };

  this.getSyncProps = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var prevProps = arguments[1];
    var preState = arguments[2];

    var needSync = false;
    var oriState = preState || _this4.state;
    var newState = {};
    var myPrevProps = prevProps || {};

    function checkSync(name) {
      if (props[name] !== myPrevProps[name]) {
        needSync = true;
        return true;
      }
      return false;
    }

    // Children change will affect check box status.
    // And no need to check when prev props not provided
    if (prevProps && checkSync('children')) {
      var newCheckedKeys = Object(__WEBPACK_IMPORTED_MODULE_8__util__["c" /* calcCheckedKeys */])(props.checkedKeys || oriState.checkedKeys, props);

      var _ref6 = newCheckedKeys || {},
          _ref6$checkedKeys = _ref6.checkedKeys,
          checkedKeys = _ref6$checkedKeys === undefined ? [] : _ref6$checkedKeys,
          _ref6$halfCheckedKeys = _ref6.halfCheckedKeys,
          halfCheckedKeys = _ref6$halfCheckedKeys === undefined ? [] : _ref6$halfCheckedKeys;

      newState.checkedKeys = checkedKeys;
      newState.halfCheckedKeys = halfCheckedKeys;
    }

    // Re-calculate when autoExpandParent or expandedKeys changed
    if (prevProps && (checkSync('autoExpandParent') || checkSync('expandedKeys'))) {
      newState.expandedKeys = props.autoExpandParent ? Object(__WEBPACK_IMPORTED_MODULE_8__util__["e" /* calcExpandedKeys */])(props.expandedKeys, props) : props.expandedKeys;
    }

    if (checkSync('selectedKeys')) {
      newState.selectedKeys = Object(__WEBPACK_IMPORTED_MODULE_8__util__["f" /* calcSelectedKeys */])(props.selectedKeys, props);
    }

    if (checkSync('checkedKeys')) {
      var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_8__util__["c" /* calcCheckedKeys */])(props.checkedKeys, props) || {},
          _ref7$checkedKeys = _ref7.checkedKeys,
          _checkedKeys = _ref7$checkedKeys === undefined ? [] : _ref7$checkedKeys,
          _ref7$halfCheckedKeys = _ref7.halfCheckedKeys,
          _halfCheckedKeys = _ref7$halfCheckedKeys === undefined ? [] : _ref7$halfCheckedKeys;

      newState.checkedKeys = _checkedKeys;
      newState.halfCheckedKeys = _halfCheckedKeys;
    }

    if (checkSync('loadedKeys')) {
      newState.loadedKeys = props.loadedKeys;
    }

    if (needSync) {
      return newState;
    }
    return null;
  };

  this.setUncontrolledState = function (state) {
    var needSync = false;
    var newState = {};

    Object.keys(state).forEach(function (name) {
      if (name in _this4.props) return;

      needSync = true;
      newState[name] = state[name];
    });

    if (needSync) {
      _this4.setState(newState);
    }
  };

  this.isKeyChecked = function (key) {
    var _state$checkedKeys = _this4.state.checkedKeys,
        checkedKeys = _state$checkedKeys === undefined ? [] : _state$checkedKeys;

    return checkedKeys.indexOf(key) !== -1;
  };

  this.renderTreeNode = function (child, index) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var _state4 = _this4.state,
        _state4$expandedKeys = _state4.expandedKeys,
        expandedKeys = _state4$expandedKeys === undefined ? [] : _state4$expandedKeys,
        _state4$selectedKeys = _state4.selectedKeys,
        selectedKeys = _state4$selectedKeys === undefined ? [] : _state4$selectedKeys,
        _state4$halfCheckedKe = _state4.halfCheckedKeys,
        halfCheckedKeys = _state4$halfCheckedKe === undefined ? [] : _state4$halfCheckedKe,
        _state4$loadedKeys = _state4.loadedKeys,
        loadedKeys = _state4$loadedKeys === undefined ? [] : _state4$loadedKeys,
        _state4$loadingKeys = _state4.loadingKeys,
        loadingKeys = _state4$loadingKeys === undefined ? [] : _state4$loadingKeys,
        dragOverNodeKey = _state4.dragOverNodeKey,
        dropPosition = _state4.dropPosition;

    var pos = Object(__WEBPACK_IMPORTED_MODULE_8__util__["j" /* getPosition */])(level, index);
    var key = child.key || pos;

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(child, {
      key: key,
      eventKey: key,
      expanded: expandedKeys.indexOf(key) !== -1,
      selected: selectedKeys.indexOf(key) !== -1,
      loaded: loadedKeys.indexOf(key) !== -1,
      loading: loadingKeys.indexOf(key) !== -1,
      checked: _this4.isKeyChecked(key),
      halfChecked: halfCheckedKeys.indexOf(key) !== -1,
      pos: pos,

      // [Legacy] Drag props
      dragOver: dragOverNodeKey === key && dropPosition === 0,
      dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
      dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
    });
  };
};

/* harmony default export */ __webpack_exports__["b"] = (Tree);

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = arrDel;
/* harmony export (immutable) */ __webpack_exports__["a"] = arrAdd;
/* harmony export (immutable) */ __webpack_exports__["n"] = posToArr;
/* harmony export (immutable) */ __webpack_exports__["j"] = getPosition;
/* harmony export (immutable) */ __webpack_exports__["i"] = getNodeChildren;
/* harmony export (immutable) */ __webpack_exports__["l"] = isCheckDisabled;
/* harmony export (immutable) */ __webpack_exports__["o"] = traverseTreeNodes;
/* harmony export (immutable) */ __webpack_exports__["m"] = mapChildren;
/* harmony export (immutable) */ __webpack_exports__["k"] = getStrictlyValue;
/* harmony export (immutable) */ __webpack_exports__["h"] = getFullKeyList;
/* unused harmony export isParent */
/* unused harmony export getNodesStatistic */
/* harmony export (immutable) */ __webpack_exports__["g"] = getDragNodesKeys;
/* harmony export (immutable) */ __webpack_exports__["d"] = calcDropPosition;
/* harmony export (immutable) */ __webpack_exports__["e"] = calcExpandedKeys;
/* harmony export (immutable) */ __webpack_exports__["f"] = calcSelectedKeys;
/* unused harmony export calcCheckStateConduct */
/* harmony export (immutable) */ __webpack_exports__["c"] = calcCheckedKeys;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_util_es_Children_toArray__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* eslint no-loop-func: 0*/




var DRAG_SIDE_RANGE = 0.25;
var DRAG_MIN_GAP = 2;

function arrDel(list, value) {
  var clone = list.slice();
  var index = clone.indexOf(value);
  if (index >= 0) {
    clone.splice(index, 1);
  }
  return clone;
}

function arrAdd(list, value) {
  var clone = list.slice();
  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }
  return clone;
}

function posToArr(pos) {
  return pos.split('-');
}

function getPosition(level, index) {
  return level + '-' + index;
}

function getNodeChildren(children) {
  var childList = Array.isArray(children) ? children : [children];
  return childList.filter(function (child) {
    return child && child.type && child.type.isTreeNode;
  });
}

function isCheckDisabled(node) {
  var _ref = node.props || {},
      disabled = _ref.disabled,
      disableCheckbox = _ref.disableCheckbox;

  return !!(disabled || disableCheckbox);
}

function traverseTreeNodes(treeNodes, subTreeData, callback) {
  if (typeof subTreeData === 'function') {
    callback = subTreeData;
    subTreeData = false;
  }

  function processNode(node, index, parent) {
    var children = node ? node.props.children : treeNodes;
    var pos = node ? getPosition(parent.pos, index) : 0;

    // Filter children
    var childList = getNodeChildren(children);

    // Process node if is not root
    if (node) {
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: node.key || pos,
        parentPos: parent.node ? parent.pos : null
      };

      // Children data is not must have
      if (subTreeData) {
        // Statistic children
        var subNodes = [];
        __WEBPACK_IMPORTED_MODULE_0_react__["Children"].forEach(childList, function (subNode, subIndex) {
          // Provide limit snapshot
          var subPos = getPosition(pos, index);
          subNodes.push({
            node: subNode,
            key: subNode.key || subPos,
            pos: subPos,
            index: subIndex
          });
        });
        data.subNodes = subNodes;
      }

      // Can break traverse by return false
      if (callback(data) === false) {
        return;
      }
    }

    // Process children node
    __WEBPACK_IMPORTED_MODULE_0_react__["Children"].forEach(childList, function (subNode, subIndex) {
      processNode(subNode, subIndex, { node: node, pos: pos });
    });
  }

  processNode(null);
}

/**
 * Use `rc-util` `toArray` to get the children list which keeps the key.
 * And return single node if children is only one(This can avoid `key` missing check).
 */
function mapChildren(children, func) {
  var list = Object(__WEBPACK_IMPORTED_MODULE_1_rc_util_es_Children_toArray__["a" /* default */])(children).map(func);
  if (list.length === 1) {
    return list[0];
  }
  return list;
}

/**
 * [Legacy] Return halfChecked when it has value.
 * @param checkedKeys
 * @param halfChecked
 * @returns {*}
 */
function getStrictlyValue(checkedKeys, halfChecked) {
  if (halfChecked) {
    return { checked: checkedKeys, halfChecked: halfChecked };
  }
  return checkedKeys;
}

function getFullKeyList(treeNodes) {
  var keyList = [];
  traverseTreeNodes(treeNodes, function (_ref2) {
    var key = _ref2.key;

    keyList.push(key);
  });
  return keyList;
}

/**
 * Check position relation.
 * @param parentPos
 * @param childPos
 * @param directly only directly parent can be true
 * @returns {boolean}
 */
function isParent(parentPos, childPos) {
  var directly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!parentPos || !childPos || parentPos.length > childPos.length) return false;

  var parentPath = posToArr(parentPos);
  var childPath = posToArr(childPos);

  // Directly check
  if (directly && parentPath.length !== childPath.length - 1) return false;

  var len = parentPath.length;
  for (var i = 0; i < len; i += 1) {
    if (parentPath[i] !== childPath[i]) return false;
  }

  return true;
}

/**
 * Statistic TreeNodes info
 * @param treeNodes
 * @returns {{}}
 */
function getNodesStatistic(treeNodes) {
  var statistic = {
    keyNodes: {},
    posNodes: {},
    nodeList: []
  };

  traverseTreeNodes(treeNodes, true, function (_ref3) {
    var node = _ref3.node,
        index = _ref3.index,
        pos = _ref3.pos,
        key = _ref3.key,
        subNodes = _ref3.subNodes,
        parentPos = _ref3.parentPos;

    var data = { node: node, index: index, pos: pos, key: key, subNodes: subNodes, parentPos: parentPos };
    statistic.keyNodes[key] = data;
    statistic.posNodes[pos] = data;
    statistic.nodeList.push(data);
  });

  return statistic;
}

function getDragNodesKeys(treeNodes, node) {
  var _node$props = node.props,
      eventKey = _node$props.eventKey,
      pos = _node$props.pos;

  var dragNodesKeys = [];

  traverseTreeNodes(treeNodes, function (_ref4) {
    var nodePos = _ref4.pos,
        key = _ref4.key;

    if (isParent(pos, nodePos)) {
      dragNodesKeys.push(key);
    }
  });
  dragNodesKeys.push(eventKey || pos);
  return dragNodesKeys;
}

// Only used when drag, not affect SSR.
function calcDropPosition(event, treeNode) {
  var clientY = event.clientY;

  var _treeNode$selectHandl = treeNode.selectHandle.getBoundingClientRect(),
      top = _treeNode$selectHandl.top,
      bottom = _treeNode$selectHandl.bottom,
      height = _treeNode$selectHandl.height;

  var des = Math.max(height * DRAG_SIDE_RANGE, DRAG_MIN_GAP);

  if (clientY <= top + des) {
    return -1;
  } else if (clientY >= bottom - des) {
    return 1;
  }

  return 0;
}

/**
 * Auto expand all related node when sub node is expanded
 * @param keyList
 * @param props
 * @returns [string]
 */
function calcExpandedKeys(keyList, props) {
  if (!keyList) {
    return [];
  }

  var children = props.children;

  // Fill parent expanded keys

  var _getNodesStatistic = getNodesStatistic(children),
      keyNodes = _getNodesStatistic.keyNodes,
      nodeList = _getNodesStatistic.nodeList;

  var needExpandKeys = {};
  var needExpandPathList = [];

  // Fill expanded nodes
  keyList.forEach(function (key) {
    var node = keyNodes[key];
    if (node) {
      needExpandKeys[key] = true;
      needExpandPathList.push(node.pos);
    }
  });

  // Match parent by path
  nodeList.forEach(function (_ref5) {
    var pos = _ref5.pos,
        key = _ref5.key;

    if (needExpandPathList.some(function (childPos) {
      return isParent(pos, childPos);
    })) {
      needExpandKeys[key] = true;
    }
  });

  var calcExpandedKeyList = Object.keys(needExpandKeys);

  // [Legacy] Return origin keyList if calc list is empty
  return calcExpandedKeyList.length ? calcExpandedKeyList : keyList;
}

/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */
function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) {
    return undefined;
  }

  var multiple = props.multiple;

  if (multiple) {
    return selectedKeys.slice();
  }

  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}

/**
 * Check conduct is by key level. It pass though up & down.
 * When conduct target node is check means already conducted will be skip.
 * @param treeNodes
 * @param checkedKeys
 * @returns {{checkedKeys: Array, halfCheckedKeys: Array}}
 */
function calcCheckStateConduct(treeNodes, checkedKeys) {
  var _getNodesStatistic2 = getNodesStatistic(treeNodes),
      keyNodes = _getNodesStatistic2.keyNodes,
      posNodes = _getNodesStatistic2.posNodes;

  var tgtCheckedKeys = {};
  var tgtHalfCheckedKeys = {};

  // Conduct up
  function conductUp(key, halfChecked) {
    if (tgtCheckedKeys[key]) return;

    var _keyNodes$key = keyNodes[key],
        _keyNodes$key$subNode = _keyNodes$key.subNodes,
        subNodes = _keyNodes$key$subNode === undefined ? [] : _keyNodes$key$subNode,
        parentPos = _keyNodes$key.parentPos,
        node = _keyNodes$key.node;

    if (isCheckDisabled(node)) return;

    var allSubChecked = !halfChecked && subNodes.filter(function (sub) {
      return !isCheckDisabled(sub.node);
    }).every(function (sub) {
      return tgtCheckedKeys[sub.key];
    });

    if (allSubChecked) {
      tgtCheckedKeys[key] = true;
    } else {
      tgtHalfCheckedKeys[key] = true;
    }

    if (parentPos !== null) {
      conductUp(posNodes[parentPos].key, !allSubChecked);
    }
  }

  // Conduct down
  function conductDown(key) {
    if (tgtCheckedKeys[key]) return;
    var _keyNodes$key2 = keyNodes[key],
        _keyNodes$key2$subNod = _keyNodes$key2.subNodes,
        subNodes = _keyNodes$key2$subNod === undefined ? [] : _keyNodes$key2$subNod,
        node = _keyNodes$key2.node;


    if (isCheckDisabled(node)) return;

    tgtCheckedKeys[key] = true;

    subNodes.forEach(function (sub) {
      conductDown(sub.key);
    });
  }

  function conduct(key) {
    if (!keyNodes[key]) {
      __WEBPACK_IMPORTED_MODULE_2_warning___default()(false, '\'' + key + '\' does not exist in the tree.');
      return;
    }

    var _keyNodes$key3 = keyNodes[key],
        _keyNodes$key3$subNod = _keyNodes$key3.subNodes,
        subNodes = _keyNodes$key3$subNod === undefined ? [] : _keyNodes$key3$subNod,
        parentPos = _keyNodes$key3.parentPos,
        node = _keyNodes$key3.node;

    tgtCheckedKeys[key] = true;

    if (isCheckDisabled(node)) return;

    // Conduct down
    subNodes.filter(function (sub) {
      return !isCheckDisabled(sub.node);
    }).forEach(function (sub) {
      conductDown(sub.key);
    });

    // Conduct up
    if (parentPos !== null) {
      conductUp(posNodes[parentPos].key);
    }
  }

  checkedKeys.forEach(function (key) {
    conduct(key);
  });

  return {
    checkedKeys: Object.keys(tgtCheckedKeys),
    halfCheckedKeys: Object.keys(tgtHalfCheckedKeys).filter(function (key) {
      return !tgtCheckedKeys[key];
    })
  };
}

/**
 * Since React internal will convert key to string,
 * we need do this to avoid `checkStrictly` use number match
 */
function keyListToString(keyList) {
  if (!keyList) return keyList;
  return keyList.map(function (key) {
    return String(key);
  });
}

/**
 * Calculate the value of checked and halfChecked keys.
 * This should be only run in init or props changed.
 */
function calcCheckedKeys(keys, props) {
  var checkable = props.checkable,
      children = props.children,
      checkStrictly = props.checkStrictly;


  if (!checkable || !keys) {
    return null;
  }

  // Convert keys to object format
  var keyProps = void 0;
  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if (typeof keys === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    __WEBPACK_IMPORTED_MODULE_2_warning___default()(false, '`CheckedKeys` is not an array or an object');
    return null;
  }

  keyProps.checkedKeys = keyListToString(keyProps.checkedKeys);
  keyProps.halfCheckedKeys = keyListToString(keyProps.halfCheckedKeys);

  // Do nothing if is checkStrictly mode
  if (checkStrictly) {
    return keyProps;
  }

  // Conduct calculate the check status
  var _keyProps = keyProps,
      _keyProps$checkedKeys = _keyProps.checkedKeys,
      checkedKeys = _keyProps$checkedKeys === undefined ? [] : _keyProps$checkedKeys;

  return calcCheckStateConduct(children, checkedKeys);
}

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(190);


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = generateData;
/* harmony export (immutable) */ __webpack_exports__["a"] = calcTotal;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return gData; });
/* harmony export (immutable) */ __webpack_exports__["d"] = generateTreeNodes;
/* harmony export (immutable) */ __webpack_exports__["e"] = getNewTreeData;
/* unused harmony export getFilterValue */
/* eslint no-loop-func: 0, no-console: 0 */

function generateData() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var gData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  // x：每一级下的节点总数。y：每级节点里有y个节点、存在子节点。z：树的level层级数（0表示一级）
  function _loop(_level, _preKey, _tns) {
    var preKey = _preKey || '0';
    var tns = _tns || gData;

    var children = [];
    for (var i = 0; i < x; i++) {
      var key = preKey + '-' + i;
      tns.push({
        label: key + '-label',
        value: key + '-value',
        key: key,
        disabled: key === '0-0-0-1' || false
      });
      if (i < y) {
        children.push(key);
      }
    }
    if (_level < 0) {
      return tns;
    }
    var __level = _level - 1;
    children.forEach(function (key, index) {
      tns[index].children = [];
      return _loop(__level, key, tns[index].children);
    });

    return null;
  }
  _loop(z);
  return gData;
}
function calcTotal() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  /* eslint no-param-reassign:0 */
  var rec = function rec(n) {
    return n >= 0 ? x * Math.pow(y, n--) + rec(n) : 0;
  };
  return rec(z + 1);
}
console.log('总节点数（单个tree）：', calcTotal());
var gData = generateData();

function generateTreeNodes(treeNode) {
  var arr = [];
  var key = treeNode.props.eventKey;
  for (var i = 0; i < 3; i++) {
    arr.push({ label: key + '-' + i + '-label', value: key + '-' + i + '-value', key: key + '-' + i });
  }
  return arr;
}

function setLeaf(treeData, curKey, level) {
  var loopLeaf = function loopLeaf(data, lev) {
    var l = lev - 1;
    data.forEach(function (item) {
      if (item.key.length > curKey.length ? item.key.indexOf(curKey) !== 0 : curKey.indexOf(item.key) !== 0) {
        return;
      }
      if (item.children) {
        loopLeaf(item.children, l);
      } else if (l < 1) {
        item.isLeaf = true;
      }
    });
  };
  loopLeaf(treeData, level + 1);
}

function getNewTreeData(treeData, curKey, child, level) {
  var loop = function loop(data) {
    if (level < 1 || curKey.length - 3 > level * 2) return;
    data.forEach(function (item) {
      if (curKey.indexOf(item.key) === 0) {
        if (item.children) {
          loop(item.children);
        } else {
          item.children = child;
        }
      }
    });
  };
  loop(treeData);
  setLeaf(treeData, curKey, level);
}

function loopData(data, callback) {
  var loop = function loop(d) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    d.forEach(function (item, index) {
      var pos = level + '-' + index;
      if (item.children) {
        loop(item.children, pos);
      }
      callback(item, index, pos);
    });
  };
  loop(data);
}

function isPositionPrefix(smallPos, bigPos) {
  if (bigPos.length < smallPos.length) {
    return false;
  }
  // attention: "0-0-1" "0-0-10"
  if (bigPos.length > smallPos.length && bigPos.charAt(smallPos.length) !== '-') {
    return false;
  }
  return bigPos.substr(0, smallPos.length) === smallPos;
}
// console.log(isPositionPrefix("0-1", "0-10-1"));

function getFilterValue(val, sVal, delVal) {
  var allPos = [];
  var delPos = [];
  loopData(gData, function (item, index, pos) {
    if (sVal.indexOf(item.value) > -1) {
      allPos.push(pos);
    }
    if (delVal.indexOf(item.value) > -1) {
      delPos.push(pos);
    }
  });
  var newPos = [];
  delPos.forEach(function (item) {
    allPos.forEach(function (i) {
      if (isPositionPrefix(item, i) || isPositionPrefix(i, item)) {
        // 过滤掉 父级节点 和 所有子节点。
        // 因为 node节点 不选时，其 父级节点 和 所有子节点 都不选。
        return;
      }
      newPos.push(i);
    });
  });
  var newVal = [];
  if (newPos.length) {
    loopData(gData, function (item, index, pos) {
      if (newPos.indexOf(pos) > -1) {
        newVal.push(item.value);
      }
    });
  }
  return newVal;
}

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
throw new Error("Cannot find module \"rc-tree-select/assets/index.less\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
throw new Error("Cannot find module \"rc-tree-select\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__big_data_generator__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__demo_less__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__demo_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__demo_less__);



/* eslint react/no-multi-comp:0, no-console:0 */








var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo() {
    var _arguments = arguments;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      gData: [],
      gData1: [],
      value: '',
      value1: ''
    }, _this.onChange = function (value) {
      console.log('onChange', _arguments);
      _this.setState({ value: value });
    }, _this.onChangeStrictly = function (value1) {
      console.log('onChangeStrictly', _arguments);
      var ind = parseInt(Math.random() * 3, 10);
      value1.push({ value: '0-0-0-' + ind + '-value', label: '0-0-0-' + ind + '-label', halfChecked: true });
      _this.setState({
        value1: value1
      });
    }, _this.onGen = function (data) {
      _this.setState({
        gData: data,
        gData1: [].concat(data),
        value: '0-0-0-value',
        value1: [{ value: '0-0-value', label: '0-0-label', halfChecked: true }, { value: '0-0-0-value', label: '0-0-0-label' }]
        // value: ['0-0-0-0-value', '0-0-0-1-value', '0-0-0-2-value'],
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  Demo.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      { style: { padding: '0 20px' } },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__big_data_generator__["a" /* default */], { onGen: this.onGen }),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { style: { display: 'flex' } },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { style: { marginRight: 20 } },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'h3',
            null,
            'normal check'
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_rc_tree_select___default.a, {
            style: { width: 300 },
            dropdownStyle: { maxHeight: 200, overflow: 'auto' },
            treeData: this.state.gData, treeLine: true,
            value: this.state.value,
            placeholder: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'i',
              null,
              '\u8BF7\u4E0B\u62C9\u9009\u62E9'
            ),
            treeCheckable: true,
            showCheckedStrategy: __WEBPACK_IMPORTED_MODULE_6_rc_tree_select__["SHOW_PARENT"],
            onChange: this.onChange
          })
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'h3',
            null,
            'checkStrictly'
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_rc_tree_select___default.a, {
            style: { width: 300 },
            dropdownStyle: { maxHeight: 200, overflow: 'auto' },
            treeData: this.state.gData1, treeLine: true,
            value: this.state.value1,
            placeholder: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'i',
              null,
              '\u8BF7\u4E0B\u62C9\u9009\u62E9'
            ),
            treeCheckable: true,
            treeCheckStrictly: true,
            showCheckedStrategy: __WEBPACK_IMPORTED_MODULE_6_rc_tree_select__["SHOW_PARENT"],
            onChange: this.onChangeStrictly
          })
        )
      )
    );
  };

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_util__ = __webpack_require__(192);








var Gen = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Gen, _React$Component);

  function Gen() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Gen);

    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this));

    _this.state = {
      nums: ''
    };

    _this.onGen = function (e) {
      e.preventDefault();
      var vals = _this.getVals();
      _this.props.onGen(Object(__WEBPACK_IMPORTED_MODULE_5__util__["c" /* generateData */])(vals.x, vals.y, vals.z));
      _this.setState({
        nums: Object(__WEBPACK_IMPORTED_MODULE_5__util__["a" /* calcTotal */])(vals.x, vals.y, vals.z)
      });
    };

    _this.getVals = function () {
      return {
        x: parseInt(_this.xRef.current.value, 10),
        y: parseInt(_this.yRef.current.value, 10),
        z: parseInt(_this.zRef.current.value, 10)
      };
    };

    _this.xRef = Object(__WEBPACK_IMPORTED_MODULE_6__src_util__["a" /* createRef */])();
    _this.yRef = Object(__WEBPACK_IMPORTED_MODULE_6__src_util__["a" /* createRef */])();
    _this.zRef = Object(__WEBPACK_IMPORTED_MODULE_6__src_util__["a" /* createRef */])();
    return _this;
  }

  Gen.prototype.componentDidMount = function componentDidMount() {
    var vals = this.getVals();
    this.props.onGen(Object(__WEBPACK_IMPORTED_MODULE_5__util__["c" /* generateData */])(vals.x, vals.y, vals.z));
  };

  Gen.prototype.render = function render() {
    var _props = this.props,
        x = _props.x,
        y = _props.y,
        z = _props.z;

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'div',
      { style: { padding: '0 20px' } },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'h2',
        null,
        'big data generator'
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'form',
        { onSubmit: this.onGen },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'span',
          { style: { marginRight: 10 } },
          'x: ',
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', { ref: this.xRef, defaultValue: x, type: 'number', min: '1', required: true, style: { width: 50 } })
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'span',
          { style: { marginRight: 10 } },
          'y: ',
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', { ref: this.yRef, defaultValue: y, type: 'number', min: '1', required: true, style: { width: 50 } })
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'span',
          { style: { marginRight: 10 } },
          'z: ',
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', { ref: this.zRef, defaultValue: z, type: 'number', min: '1', required: true, style: { width: 50 } })
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'button',
          { type: 'submit' },
          'Generate'
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'p',
          null,
          'total nodes: ',
          this.state.nums || Object(__WEBPACK_IMPORTED_MODULE_5__util__["a" /* calcTotal */])(x, y, z)
        )
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'p',
        { style: { fontSize: 12 } },
        'x\uFF1A\u6BCF\u4E00\u7EA7\u4E0B\u7684\u8282\u70B9\u603B\u6570\u3002y\uFF1A\u6BCF\u7EA7\u8282\u70B9\u91CC\u6709y\u4E2A\u8282\u70B9\u3001\u5B58\u5728\u5B50\u8282\u70B9\u3002z\uFF1A\u6811\u7684level\u5C42\u7EA7\u6570\uFF080\u8868\u793A\u4E00\u7EA7\uFF09'
      )
    );
  };

  return Gen;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Gen.propTypes = {
  onGen: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  x: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
  y: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
  z: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number
};
Gen.defaultProps = {
  onGen: function onGen() {},
  x: 20,
  y: 18,
  z: 1
};


/* harmony default export */ __webpack_exports__["a"] = (Gen);

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toTitle */
/* unused harmony export toArray */
/* harmony export (immutable) */ __webpack_exports__["a"] = createRef;
/* unused harmony export UNSELECTABLE_STYLE */
/* unused harmony export UNSELECTABLE_ATTRIBUTE */
/* unused harmony export flatToHierarchy */
/* unused harmony export resetAriaId */
/* unused harmony export generateAriaId */
/* unused harmony export isLabelInValue */
/* unused harmony export parseSimpleTreeData */
/* unused harmony export convertTreeToData */
/* unused harmony export convertDataToEntities */
/* unused harmony export isPosRelated */
/* unused harmony export getFilterTree */
/* unused harmony export formatInternalValue */
/* unused harmony export getLabel */
/* unused harmony export formatSelectorValue */
/* unused harmony export calcUncheckConduct */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_warning__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SelectNode__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__strategies__ = __webpack_require__(200);







// When treeNode not provide key, and we will use value as key.
// Some time value is empty, we should pass it instead.
var KEY_OF_VALUE_EMPTY = 'RC_TREE_SELECT_KEY_OF_VALUE_EMPTY';

var warnDeprecatedLabel = false;

// =================== MISC ====================
function toTitle(title) {
  if (typeof title === 'string') {
    return title;
  }
  return null;
}

function toArray(data) {
  if (!data) return [];

  return Array.isArray(data) ? data : [data];
}

// Shallow copy of React 16.3 createRef api
function createRef() {
  var func = function setRef(node) {
    func.current = node;
  };
  return func;
}

// =============== Legacy ===============
var UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};

var UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'unselectable'
};

/**
 * Convert position list to hierarchy structure.
 * This is little hack since use '-' to split the position.
 */
function flatToHierarchy(positionList) {
  if (!positionList.length) {
    return [];
  }

  var entrances = {};

  // Prepare the position map
  var posMap = {};
  var parsedList = positionList.slice().map(function (entity) {
    var clone = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, entity, {
      fields: entity.pos.split('-')
    });
    delete clone.children;
    return clone;
  });

  parsedList.forEach(function (entity) {
    posMap[entity.pos] = entity;
  });

  parsedList.sort(function (a, b) {
    return a.fields.length - b.fields.length;
  });

  // Create the hierarchy
  parsedList.forEach(function (entity) {
    var parentPos = entity.fields.slice(0, -1).join('-');
    var parentEntity = posMap[parentPos];

    if (!parentEntity) {
      entrances[entity.pos] = entity;
    } else {
      parentEntity.children = parentEntity.children || [];
      parentEntity.children.push(entity);
    }

    // Some time position list provide `key`, we don't need it
    delete entity.key;
    delete entity.fields;
  });

  return Object.keys(entrances).map(function (key) {
    return entrances[key];
  });
}

// =============== Accessibility ===============
var ariaId = 0;

function resetAriaId() {
  ariaId = 0;
}

function generateAriaId(prefix) {
  ariaId += 1;
  return prefix + '_' + ariaId;
}

function isLabelInValue(props) {
  var treeCheckable = props.treeCheckable,
      treeCheckStrictly = props.treeCheckStrictly,
      labelInValue = props.labelInValue;

  if (treeCheckable && treeCheckStrictly) {
    return true;
  }
  return labelInValue || false;
}

// =================== Tree ====================
function parseSimpleTreeData(treeData, _ref) {
  var id = _ref.id,
      pId = _ref.pId,
      rootPId = _ref.rootPId;

  var keyNodes = {};
  var rootNodeList = [];

  // Fill in the map
  var nodeList = treeData.map(function (node) {
    var clone = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, node);
    var key = clone[id];
    keyNodes[key] = clone;
    return clone;
  });

  // Connect tree
  nodeList.forEach(function (node) {
    var parentKey = node[pId];
    var parent = keyNodes[parentKey];

    // Fill parent
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(node);
    }

    // Fill root tree node
    if (parentKey === rootPId || !parent && rootPId === null) {
      rootNodeList.push(node);
    }
  });

  return rootNodeList;
}

/**
 * `Tree` use `key` to track state but it will changed by React.
 * We need convert it back to the data and re-generate by `key`.
 * This is will cause performance issue.
 */
function convertTreeToData(treeNodes) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.map(treeNodes || [], function (node) {
    if (!__WEBPACK_IMPORTED_MODULE_2_react___default.a.isValidElement(node) || !node.type || !node.type.isTreeNode) {
      return null;
    }

    var key = node.key,
        props = node.props;


    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, props, {
      key: key,
      children: convertTreeToData(props.children)
    });
  }).filter(function (data) {
    return data;
  });
}

/**
 * Convert `treeData` to TreeNode List contains the mapping data.
 */
function convertDataToEntities(treeData) {
  var list = toArray(treeData);

  var valueEntities = {};
  var keyEntities = {};
  var posEntities = {};

  function traverse(subTreeData, parentPos) {
    var subList = toArray(subTreeData);

    return subList.map(function (_ref2, index) {
      var key = _ref2.key,
          title = _ref2.title,
          label = _ref2.label,
          value = _ref2.value,
          children = _ref2.children,
          nodeProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref2, ['key', 'title', 'label', 'value', 'children']);

      var pos = parentPos + '-' + index;

      var entity = { key: key, value: value, pos: pos };

      // This may cause some side effect, need additional check
      entity.key = entity.key || value;
      if (!entity.key && entity.key !== 0) {
        entity.key = KEY_OF_VALUE_EMPTY;
      }

      // Fill children
      entity.parent = posEntities[parentPos];
      if (entity.parent) {
        entity.parent.children = entity.parent.children || [];
        entity.parent.children.push(entity);
      }

      // Fill entities
      valueEntities[value] = entity;
      keyEntities[entity.key] = entity;
      posEntities[pos] = entity;

      // Warning user not to use deprecated label prop.
      if (!title && label && !warnDeprecatedLabel) {
        __WEBPACK_IMPORTED_MODULE_3_warning___default()(false, '\'label\' in treeData is deprecated. Please use \'title\' instead.');
        warnDeprecatedLabel = true;
      }

      var node = __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__SelectNode__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({ key: entity.key }, nodeProps, { title: title || label, label: label, value: value }),
        traverse(children, pos)
      );

      entity.node = node;

      return node;
    });
  }

  var treeNodes = traverse(list, '0');

  return {
    treeNodes: treeNodes,

    valueEntities: valueEntities,
    keyEntities: keyEntities,
    posEntities: posEntities
  };
}

/**
 * Detect if position has relation.
 * e.g. 1-2 related with 1-2-3
 * e.g. 1-3-2 related with 1
 * e.g. 1-2 not related with 1-21
 */
function isPosRelated(pos1, pos2) {
  var fields1 = pos1.split('-');
  var fields2 = pos2.split('-');

  var minLen = Math.min(fields1.length, fields2.length);
  for (var i = 0; i < minLen; i += 1) {
    if (fields1[i] !== fields2[i]) {
      return false;
    }
  }
  return true;
}

/**
 * Get a filtered TreeNode list by provided treeNodes.
 * [Legacy] Since `Tree` use `key` as map but `key` will changed by React,
 * we have to convert `treeNodes > data > treeNodes` to keep the key.
 * Such performance hungry!
 */
function getFilterTree(treeNodes, searchValue, filterFunc) {
  if (!searchValue) {
    return null;
  }

  function mapFilteredNodeToData(node) {
    if (!node) return null;

    var match = false;
    if (filterFunc(searchValue, node)) {
      match = true;
    }

    var children = (__WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.map(node.props.children, mapFilteredNodeToData) || []).filter(function (n) {
      return n;
    });

    if (children.length || match) {
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, node.props, {
        key: node.key,
        children: children
      });
    }

    return null;
  }

  return convertDataToEntities(treeNodes.map(mapFilteredNodeToData).filter(function (node) {
    return node;
  })).treeNodes;
}

// =================== Value ===================
/**
 * Convert value to array format to make logic simplify.
 */
function formatInternalValue(value, props) {
  var valueList = toArray(value);

  // Parse label in value
  if (isLabelInValue(props)) {
    return valueList.map(function (val) {
      if (typeof val !== 'object' || !val) {
        return {
          value: '',
          label: ''
        };
      }

      return val;
    });
  }

  return valueList.map(function (val) {
    return {
      value: val
    };
  });
}

function getLabel(wrappedValue, entity, treeNodeLabelProp) {
  if (wrappedValue.label) {
    return wrappedValue.label;
  }

  if (entity && entity.node.props) {
    return entity.node.props[treeNodeLabelProp];
  }

  // Since value without entity will be in missValueList.
  // This code will never reached, but we still need this in case.
  return wrappedValue.value;
}

/**
 * Convert internal state `valueList` to user needed value list.
 * This will return an array list. You need check if is not multiple when return.
 *
 * `allCheckedNodes` is used for `treeCheckStrictly`
 */
function formatSelectorValue(valueList, props, valueEntities) {
  var treeNodeLabelProp = props.treeNodeLabelProp,
      treeCheckable = props.treeCheckable,
      treeCheckStrictly = props.treeCheckStrictly,
      showCheckedStrategy = props.showCheckedStrategy;

  // Will hide some value if `showCheckedStrategy` is set

  if (treeCheckable && !treeCheckStrictly) {
    var values = {};
    valueList.forEach(function (wrappedValue) {
      values[wrappedValue.value] = wrappedValue;
    });
    var hierarchyList = flatToHierarchy(valueList.map(function (_ref3) {
      var value = _ref3.value;
      return valueEntities[value];
    }));

    if (showCheckedStrategy === __WEBPACK_IMPORTED_MODULE_5__strategies__["b" /* SHOW_PARENT */]) {
      // Only get the parent checked value
      return hierarchyList.map(function (_ref4) {
        var value = _ref4.node.props.value;
        return {
          label: getLabel(values[value], valueEntities[value], treeNodeLabelProp),
          value: value
        };
      });
    } else if (showCheckedStrategy === __WEBPACK_IMPORTED_MODULE_5__strategies__["a" /* SHOW_CHILD */]) {
      // Only get the children checked value
      var targetValueList = [];

      // Find the leaf children
      var traverse = function traverse(_ref5) {
        var value = _ref5.node.props.value,
            children = _ref5.children;

        if (!children || children.length === 0) {
          targetValueList.push({
            label: getLabel(values[value], valueEntities[value], treeNodeLabelProp),
            value: value
          });
          return;
        }

        children.forEach(function (entity) {
          traverse(entity);
        });
      };

      hierarchyList.forEach(function (entity) {
        traverse(entity);
      });

      return targetValueList;
    }
  }

  return valueList.map(function (wrappedValue) {
    return {
      label: getLabel(wrappedValue, valueEntities[wrappedValue.value], treeNodeLabelProp),
      value: wrappedValue.value
    };
  });
}

/**
 * When user search the tree, will not get correct tree checked status.
 * For checked key, use the `rc-tree` `calcCheckStateConduct` function.
 * For unchecked key, we need the calculate ourselves.
 */
function calcUncheckConduct(keyList, uncheckedKey, keyEntities) {
  var myKeyList = keyList.slice();

  function conductUp(conductKey) {
    myKeyList = myKeyList.filter(function (key) {
      return key !== conductKey;
    });

    // Check if need conduct
    var parentEntity = keyEntities[conductKey].parent;
    if (parentEntity && myKeyList.some(function (key) {
      return key === parentEntity.key;
    })) {
      conductUp(parentEntity.key);
    }
  }

  function conductDown(conductKey) {
    myKeyList = myKeyList.filter(function (key) {
      return key !== conductKey;
    });

    (keyEntities[conductKey].children || []).forEach(function (childEntity) {
      conductDown(childEntity.key);
    });
  }

  conductUp(uncheckedKey);
  conductDown(uncheckedKey);

  return myKeyList;
}

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule warning
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_tree__ = __webpack_require__(195);





/**
 * SelectNode wrapped the tree node.
 * Let's use SelectNode instead of TreeNode
 * since TreeNode is so confuse here.
 */
var SelectNode = function SelectNode(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_tree__["a" /* TreeNode */], props);
};

SelectNode.propTypes = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3_rc_tree__["a" /* TreeNode */].propTypes, {
  value: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
});

// Let Tree trade as TreeNode to reuse this for performance saving.
SelectNode.isTreeNode = 1;

/* harmony default export */ __webpack_exports__["a"] = (SelectNode);

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tree__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TreeNode__ = __webpack_require__(196);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__TreeNode__["a"]; });


__WEBPACK_IMPORTED_MODULE_0__Tree__["b" /* default */].TreeNode = __WEBPACK_IMPORTED_MODULE_1__TreeNode__["a" /* default */];


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__Tree__["b" /* default */]);

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nodeContextTypes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_warning__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rc_animate__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_util_es_Children_toArray__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Tree__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util__ = __webpack_require__(110);














var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';

var defaultTitle = '---';

var onlyTreeNodeWarned = false; // Only accept TreeNode

var nodeContextTypes = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_11__Tree__["a" /* contextTypes */], {
  rcTreeNode: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    onUpCheckConduct: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
  })
});

var TreeNode = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(TreeNode, _React$Component);

  function TreeNode(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, TreeNode);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      dragNodeHighlight: false
    };
    return _this;
  }

  TreeNode.prototype.getChildContext = function getChildContext() {
    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, this.context, {
      rcTreeNode: {
        onUpCheckConduct: this.onUpCheckConduct
      }
    });
  };

  // Isomorphic needn't load data in server side


  TreeNode.prototype.componentDidMount = function componentDidMount() {
    this.syncLoadData(this.props);
  };

  TreeNode.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.syncLoadData(nextProps);
  };

  // Disabled item still can be switch


  // Drag usage


  TreeNode.prototype.isSelectable = function isSelectable() {
    var selectable = this.props.selectable;
    var treeSelectable = this.context.rcTree.selectable;

    // Ignore when selectable is undefined or null

    if (typeof selectable === 'boolean') {
      return selectable;
    }

    return treeSelectable;
  };

  // Load data to avoid default expanded tree without data


  // Switcher


  // Checkbox


  // Icon + Title


  // Children list wrapped with `Animation`


  TreeNode.prototype.render = function render() {
    var _classNames;

    var loading = this.props.loading;

    var _props = this.props,
        className = _props.className,
        style = _props.style,
        dragOver = _props.dragOver,
        dragOverGapTop = _props.dragOverGapTop,
        dragOverGapBottom = _props.dragOverGapBottom,
        isLeaf = _props.isLeaf,
        expanded = _props.expanded,
        selected = _props.selected,
        checked = _props.checked,
        halfChecked = _props.halfChecked,
        otherProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'style', 'dragOver', 'dragOverGapTop', 'dragOverGapBottom', 'isLeaf', 'expanded', 'selected', 'checked', 'halfChecked']);

    var _context$rcTree = this.context.rcTree,
        prefixCls = _context$rcTree.prefixCls,
        filterTreeNode = _context$rcTree.filterTreeNode,
        draggable = _context$rcTree.draggable;

    var disabled = this.isDisabled();
    var dataOrAriaAttributeProps = Object.keys(otherProps).reduce(function (prev, key) {
      if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
        prev[key] = otherProps[key];
      }
      return prev;
    }, {});

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'li',
      __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(className, (_classNames = {}, _classNames[prefixCls + '-treenode-disabled'] = disabled, _classNames[prefixCls + '-treenode-switcher-' + (expanded ? 'open' : 'close')] = !isLeaf, _classNames[prefixCls + '-treenode-checkbox-checked'] = checked, _classNames[prefixCls + '-treenode-checkbox-indeterminate'] = halfChecked, _classNames[prefixCls + '-treenode-selected'] = selected, _classNames[prefixCls + '-treenode-loading'] = loading, _classNames['drag-over'] = !disabled && dragOver, _classNames['drag-over-gap-top'] = !disabled && dragOverGapTop, _classNames['drag-over-gap-bottom'] = !disabled && dragOverGapBottom, _classNames['filter-node'] = filterTreeNode && filterTreeNode(this), _classNames)),

        style: style,

        onDragEnter: draggable ? this.onDragEnter : undefined,
        onDragOver: draggable ? this.onDragOver : undefined,
        onDragLeave: draggable ? this.onDragLeave : undefined,
        onDrop: draggable ? this.onDrop : undefined,
        onDragEnd: draggable ? this.onDragEnd : undefined
      }, dataOrAriaAttributeProps),
      this.renderSwitcher(),
      this.renderCheckbox(),
      this.renderSelector(),
      this.renderChildren()
    );
  };

  return TreeNode;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

TreeNode.propTypes = {
  eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string, // Pass by parent `cloneElement`
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  root: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  // By parent
  expanded: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  selected: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  checked: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  loaded: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  loading: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  halfChecked: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,
  title: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,
  pos: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  dragOver: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  dragOverGapTop: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  dragOverGapBottom: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  // By user
  isLeaf: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  selectable: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  disableCheckbox: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  icon: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func])
};
TreeNode.contextTypes = nodeContextTypes;
TreeNode.childContextTypes = nodeContextTypes;
TreeNode.defaultProps = {
  title: defaultTitle
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onUpCheckConduct = function (treeNode, nodeChecked, nodeHalfChecked, e) {
    var nodePos = treeNode.props.pos;
    var _props2 = _this2.props,
        eventKey = _props2.eventKey,
        pos = _props2.pos,
        checked = _props2.checked,
        halfChecked = _props2.halfChecked;
    var _context = _this2.context,
        _context$rcTree2 = _context.rcTree,
        checkStrictly = _context$rcTree2.checkStrictly,
        isKeyChecked = _context$rcTree2.isKeyChecked,
        onBatchNodeCheck = _context$rcTree2.onBatchNodeCheck,
        onCheckConductFinished = _context$rcTree2.onCheckConductFinished,
        _context$rcTreeNode = _context.rcTreeNode;
    _context$rcTreeNode = _context$rcTreeNode === undefined ? {} : _context$rcTreeNode;
    var onUpCheckConduct = _context$rcTreeNode.onUpCheckConduct;

    // Stop conduct when current node is disabled

    if (Object(__WEBPACK_IMPORTED_MODULE_12__util__["l" /* isCheckDisabled */])(_this2)) {
      onCheckConductFinished(e);
      return;
    }

    var children = _this2.getNodeChildren();

    var checkedCount = nodeChecked ? 1 : 0;

    // Statistic checked count
    children.forEach(function (node, index) {
      var childPos = Object(__WEBPACK_IMPORTED_MODULE_12__util__["j" /* getPosition */])(pos, index);

      if (nodePos === childPos || Object(__WEBPACK_IMPORTED_MODULE_12__util__["l" /* isCheckDisabled */])(node)) {
        return;
      }

      if (isKeyChecked(node.key || childPos)) {
        checkedCount += 1;
      }
    });

    // Static enabled children count
    var enabledChildrenCount = children.filter(function (node) {
      return !Object(__WEBPACK_IMPORTED_MODULE_12__util__["l" /* isCheckDisabled */])(node);
    }).length;

    // checkStrictly will not conduct check status
    var nextChecked = checkStrictly ? checked : enabledChildrenCount === checkedCount;
    var nextHalfChecked = checkStrictly ? // propagated or child checked
    halfChecked : nodeHalfChecked || checkedCount > 0 && !nextChecked;

    // Add into batch update
    if (checked !== nextChecked || halfChecked !== nextHalfChecked) {
      onBatchNodeCheck(eventKey, nextChecked, nextHalfChecked);

      if (onUpCheckConduct) {
        onUpCheckConduct(_this2, nextChecked, nextHalfChecked, e);
      } else {
        // Flush all the update
        onCheckConductFinished(e);
      }
    } else {
      // Flush all the update
      onCheckConductFinished(e);
    }
  };

  this.onDownCheckConduct = function (nodeChecked) {
    var children = _this2.props.children;
    var _context$rcTree3 = _this2.context.rcTree,
        checkStrictly = _context$rcTree3.checkStrictly,
        isKeyChecked = _context$rcTree3.isKeyChecked,
        onBatchNodeCheck = _context$rcTree3.onBatchNodeCheck;

    if (checkStrictly) return;

    Object(__WEBPACK_IMPORTED_MODULE_12__util__["o" /* traverseTreeNodes */])(children, function (_ref) {
      var node = _ref.node,
          key = _ref.key;

      if (Object(__WEBPACK_IMPORTED_MODULE_12__util__["l" /* isCheckDisabled */])(node)) return false;

      if (nodeChecked !== isKeyChecked(key)) {
        onBatchNodeCheck(key, nodeChecked, false);
      }
    });
  };

  this.onSelectorClick = function (e) {
    // Click trigger before select/check operation
    var onNodeClick = _this2.context.rcTree.onNodeClick;

    onNodeClick(e, _this2);

    if (_this2.isSelectable()) {
      _this2.onSelect(e);
    } else {
      _this2.onCheck(e);
    }
  };

  this.onSelectorDoubleClick = function (e) {
    var onNodeDoubleClick = _this2.context.rcTree.onNodeDoubleClick;

    onNodeDoubleClick(e, _this2);
  };

  this.onSelect = function (e) {
    if (_this2.isDisabled()) return;

    var onNodeSelect = _this2.context.rcTree.onNodeSelect;

    e.preventDefault();
    onNodeSelect(e, _this2);
  };

  this.onCheck = function (e) {
    if (_this2.isDisabled()) return;

    var _props3 = _this2.props,
        disableCheckbox = _props3.disableCheckbox,
        checked = _props3.checked,
        eventKey = _props3.eventKey;
    var _context2 = _this2.context,
        _context2$rcTree = _context2.rcTree,
        checkable = _context2$rcTree.checkable,
        onBatchNodeCheck = _context2$rcTree.onBatchNodeCheck,
        onCheckConductFinished = _context2$rcTree.onCheckConductFinished,
        _context2$rcTreeNode = _context2.rcTreeNode;
    _context2$rcTreeNode = _context2$rcTreeNode === undefined ? {} : _context2$rcTreeNode;
    var onUpCheckConduct = _context2$rcTreeNode.onUpCheckConduct;


    if (!checkable || disableCheckbox) return;

    e.preventDefault();
    var targetChecked = !checked;
    onBatchNodeCheck(eventKey, targetChecked, false, _this2);

    // Children conduct
    _this2.onDownCheckConduct(targetChecked);

    // Parent conduct
    if (onUpCheckConduct) {
      onUpCheckConduct(_this2, targetChecked, false, e);
    } else {
      onCheckConductFinished(e);
    }
  };

  this.onMouseEnter = function (e) {
    var onNodeMouseEnter = _this2.context.rcTree.onNodeMouseEnter;

    onNodeMouseEnter(e, _this2);
  };

  this.onMouseLeave = function (e) {
    var onNodeMouseLeave = _this2.context.rcTree.onNodeMouseLeave;

    onNodeMouseLeave(e, _this2);
  };

  this.onContextMenu = function (e) {
    var onNodeContextMenu = _this2.context.rcTree.onNodeContextMenu;

    onNodeContextMenu(e, _this2);
  };

  this.onDragStart = function (e) {
    var onNodeDragStart = _this2.context.rcTree.onNodeDragStart;


    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: true
    });
    onNodeDragStart(e, _this2);

    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer.setData('text/plain', '');
    } catch (error) {
      // empty
    }
  };

  this.onDragEnter = function (e) {
    var onNodeDragEnter = _this2.context.rcTree.onNodeDragEnter;


    e.preventDefault();
    e.stopPropagation();
    onNodeDragEnter(e, _this2);
  };

  this.onDragOver = function (e) {
    var onNodeDragOver = _this2.context.rcTree.onNodeDragOver;


    e.preventDefault();
    e.stopPropagation();
    onNodeDragOver(e, _this2);
  };

  this.onDragLeave = function (e) {
    var onNodeDragLeave = _this2.context.rcTree.onNodeDragLeave;


    e.stopPropagation();
    onNodeDragLeave(e, _this2);
  };

  this.onDragEnd = function (e) {
    var onNodeDragEnd = _this2.context.rcTree.onNodeDragEnd;


    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: false
    });
    onNodeDragEnd(e, _this2);
  };

  this.onDrop = function (e) {
    var onNodeDrop = _this2.context.rcTree.onNodeDrop;


    e.preventDefault();
    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: false
    });
    onNodeDrop(e, _this2);
  };

  this.onExpand = function (e) {
    var onNodeExpand = _this2.context.rcTree.onNodeExpand;

    onNodeExpand(e, _this2);
  };

  this.setSelectHandle = function (node) {
    _this2.selectHandle = node;
  };

  this.getNodeChildren = function () {
    var children = _this2.props.children;

    var originList = Object(__WEBPACK_IMPORTED_MODULE_10_rc_util_es_Children_toArray__["a" /* default */])(children).filter(function (node) {
      return node;
    });
    var targetList = Object(__WEBPACK_IMPORTED_MODULE_12__util__["i" /* getNodeChildren */])(originList);

    if (originList.length !== targetList.length && !onlyTreeNodeWarned) {
      onlyTreeNodeWarned = true;
      __WEBPACK_IMPORTED_MODULE_8_warning___default()(false, 'Tree only accept TreeNode as children.');
    }

    return targetList;
  };

  this.getNodeState = function () {
    var expanded = _this2.props.expanded;


    if (_this2.isLeaf()) {
      return null;
    }

    return expanded ? ICON_OPEN : ICON_CLOSE;
  };

  this.isLeaf = function () {
    var _props4 = _this2.props,
        isLeaf = _props4.isLeaf,
        loaded = _props4.loaded;
    var loadData = _this2.context.rcTree.loadData;


    var hasChildren = _this2.getNodeChildren().length !== 0;

    if (isLeaf === false) {
      return false;
    }

    return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
  };

  this.isDisabled = function () {
    var disabled = _this2.props.disabled;
    var treeDisabled = _this2.context.rcTree.disabled;

    // Follow the logic of Selectable

    if (disabled === false) {
      return false;
    }

    return !!(treeDisabled || disabled);
  };

  this.syncLoadData = function (props) {
    var expanded = props.expanded;
    var onNodeLoad = _this2.context.rcTree.onNodeLoad;

    // read from state to avoid loadData at same time

    if (expanded && !_this2.isLeaf()) {
      // We needn't reload data when has children in sync logic
      // It's only needed in node expanded
      var hasChildren = _this2.getNodeChildren().length !== 0;
      if (!hasChildren) {
        onNodeLoad(_this2);
      }
    }
  };

  this.renderSwitcher = function () {
    var expanded = _this2.props.expanded;
    var prefixCls = _this2.context.rcTree.prefixCls;


    if (_this2.isLeaf()) {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('span', { className: prefixCls + '-switcher ' + prefixCls + '-switcher-noop' });
    }

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('span', {
      className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(prefixCls + '-switcher', prefixCls + '-switcher_' + (expanded ? ICON_OPEN : ICON_CLOSE)),
      onClick: _this2.onExpand
    });
  };

  this.renderCheckbox = function () {
    var _props5 = _this2.props,
        checked = _props5.checked,
        halfChecked = _props5.halfChecked,
        disableCheckbox = _props5.disableCheckbox;
    var _context$rcTree4 = _this2.context.rcTree,
        prefixCls = _context$rcTree4.prefixCls,
        checkable = _context$rcTree4.checkable;

    var disabled = _this2.isDisabled();

    if (!checkable) return null;

    // [Legacy] Custom element should be separate with `checkable` in future
    var $custom = typeof checkable !== 'boolean' ? checkable : null;

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'span',
      {
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(prefixCls + '-checkbox', checked && prefixCls + '-checkbox-checked', !checked && halfChecked && prefixCls + '-checkbox-indeterminate', (disabled || disableCheckbox) && prefixCls + '-checkbox-disabled'),
        onClick: _this2.onCheck
      },
      $custom
    );
  };

  this.renderIcon = function () {
    var loading = _this2.props.loading;
    var prefixCls = _this2.context.rcTree.prefixCls;


    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('span', {
      className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(prefixCls + '-iconEle', prefixCls + '-icon__' + (_this2.getNodeState() || 'docu'), loading && prefixCls + '-icon_loading')
    });
  };

  this.renderSelector = function () {
    var dragNodeHighlight = _this2.state.dragNodeHighlight;
    var _props6 = _this2.props,
        title = _props6.title,
        selected = _props6.selected,
        icon = _props6.icon,
        loading = _props6.loading;
    var _context$rcTree5 = _this2.context.rcTree,
        prefixCls = _context$rcTree5.prefixCls,
        showIcon = _context$rcTree5.showIcon,
        treeIcon = _context$rcTree5.icon,
        draggable = _context$rcTree5.draggable,
        loadData = _context$rcTree5.loadData;

    var disabled = _this2.isDisabled();

    var wrapClass = prefixCls + '-node-content-wrapper';

    // Icon - Still show loading icon when loading without showIcon
    var $icon = void 0;

    if (showIcon) {
      var currentIcon = icon || treeIcon;

      $icon = currentIcon ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'span',
        {
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(prefixCls + '-iconEle', prefixCls + '-icon__customize')
        },
        typeof currentIcon === 'function' ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(currentIcon, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, _this2.props)) : currentIcon
      ) : _this2.renderIcon();
    } else if (loadData && loading) {
      $icon = _this2.renderIcon();
    }

    // Title
    var $title = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'span',
      { className: prefixCls + '-title' },
      title
    );

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'span',
      {
        ref: _this2.setSelectHandle,
        title: typeof title === 'string' ? title : '',
        className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()('' + wrapClass, wrapClass + '-' + (_this2.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && prefixCls + '-node-selected', !disabled && draggable && 'draggable'),
        draggable: !disabled && draggable || undefined,
        'aria-grabbed': !disabled && draggable || undefined,

        onMouseEnter: _this2.onMouseEnter,
        onMouseLeave: _this2.onMouseLeave,
        onContextMenu: _this2.onContextMenu,
        onClick: _this2.onSelectorClick,
        onDoubleClick: _this2.onSelectorDoubleClick,
        onDragStart: draggable ? _this2.onDragStart : undefined
      },
      $icon,
      $title
    );
  };

  this.renderChildren = function () {
    var _props7 = _this2.props,
        expanded = _props7.expanded,
        pos = _props7.pos;
    var _context$rcTree6 = _this2.context.rcTree,
        prefixCls = _context$rcTree6.prefixCls,
        openTransitionName = _context$rcTree6.openTransitionName,
        openAnimation = _context$rcTree6.openAnimation,
        renderTreeNode = _context$rcTree6.renderTreeNode;

    // [Legacy] Animation control

    var renderFirst = _this2.renderFirst;
    _this2.renderFirst = 1;
    var transitionAppear = true;
    if (!renderFirst && expanded) {
      transitionAppear = false;
    }

    var animProps = {};
    if (openTransitionName) {
      animProps.transitionName = openTransitionName;
    } else if (typeof openAnimation === 'object') {
      animProps.animation = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, openAnimation);
      if (!transitionAppear) {
        delete animProps.animation.appear;
      }
    }

    // Children TreeNode
    var nodeList = _this2.getNodeChildren();

    if (nodeList.length === 0) {
      return null;
    }

    var $children = void 0;
    if (expanded) {
      $children = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'ul',
        {
          className: __WEBPACK_IMPORTED_MODULE_7_classnames___default()(prefixCls + '-child-tree', expanded && prefixCls + '-child-tree-open'),
          'data-expanded': expanded
        },
        Object(__WEBPACK_IMPORTED_MODULE_12__util__["m" /* mapChildren */])(nodeList, function (node, index) {
          return renderTreeNode(node, index, pos);
        })
      );
    }

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_9_rc_animate__["a" /* default */],
      __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, animProps, {
        showProp: 'data-expanded',
        transitionAppear: transitionAppear,
        component: ''
      }),
      $children
    );
  };
};

TreeNode.isTreeNode = 1;

/* harmony default export */ __webpack_exports__["a"] = (TreeNode);

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AnimateChild__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util__ = __webpack_require__(111);










var defaultKey = 'rc_animate_' + Date.now();


function getChildrenFromProps(props) {
  var children = props.children;
  if (__WEBPACK_IMPORTED_MODULE_6_react___default.a.isValidElement(children)) {
    if (!children.key) {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Animate, _React$Component);

  // eslint-disable-line

  function Animate(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Animate);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["e" /* toArrayChildren */])(getChildrenFromProps(props))
    };

    _this.childrenRefs = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["e" /* toArrayChildren */])(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["e" /* toArrayChildren */])(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* findChildInChildrenByKey */])(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(nextChild || currentChild, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* findChildInChildrenByKey */])(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["d" /* mergeChildren */])(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* findChildInChildrenByKey */])(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findShownChildInChildrenByKey */])(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* findChildInChildrenByKey */])(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findShownChildInChildrenByKey */])(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["b" /* findShownChildInChildrenByKey */])(currentChildren, key, showProp);
      }
      return Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["a" /* findChildInChildrenByKey */])(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9__AnimateChild__["a" /* default */],
            {
              key: child.key,
              ref: function ref(node) {
                return _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Animate.isAnimate = true;
Animate.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any,
  componentProps: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  animation: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  transitionName: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object]),
  transitionEnter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  transitionAppear: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  exclusive: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  transitionLeave: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  onEnd: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onEnter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onLeave: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onAppear: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  showProp: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string
};
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["e" /* toArrayChildren */])(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else {
      if (type === 'appear') {
        if (__WEBPACK_IMPORTED_MODULE_10__util__["a" /* default */].allowAppearCallback(props)) {
          props.onAppear(key);
          props.onEnd(key, true);
        }
      } else {
        if (__WEBPACK_IMPORTED_MODULE_10__util__["a" /* default */].allowEnterCallback(props)) {
          props.onEnter(key);
          props.onEnd(key, true);
        }
      }
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["e" /* toArrayChildren */])(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (__WEBPACK_IMPORTED_MODULE_10__util__["a" /* default */].allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!Object(__WEBPACK_IMPORTED_MODULE_8__ChildrenUtils__["c" /* isSameChildren */])(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Animate);

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = toArrayChildren;
/* harmony export (immutable) */ __webpack_exports__["a"] = findChildInChildrenByKey;
/* harmony export (immutable) */ __webpack_exports__["b"] = findShownChildInChildrenByKey;
/* unused harmony export findHiddenChildInChildrenByKey */
/* harmony export (immutable) */ __webpack_exports__["c"] = isSameChildren;
/* harmony export (immutable) */ __webpack_exports__["d"] = mergeChildren;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function toArrayChildren(children) {
  var ret = [];
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_css_animation__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util__ = __webpack_require__(111);











var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AnimateChild, _React$Component);

  function AnimateChild() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AnimateChild);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(transitionName)) === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((__WEBPACK_IMPORTED_MODULE_8_css_animation__["b" /* isCssAnimationSupported */] || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = Object(__WEBPACK_IMPORTED_MODULE_8_css_animation__["a" /* default */])(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

AnimateChild.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any
};
/* harmony default export */ __webpack_exports__["a"] = (AnimateChild);

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SHOW_ALL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOW_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHOW_CHILD; });
var SHOW_ALL = 'SHOW_ALL';
var SHOW_PARENT = 'SHOW_PARENT';
var SHOW_CHILD = 'SHOW_CHILD';

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(22);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isCssAnimationSupported; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_component_classes__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_component_classes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_component_classes__);




var isCssAnimationSupported = __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = __WEBPACK_IMPORTED_MODULE_2_component_classes___default()(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;



/* harmony default export */ __webpack_exports__["a"] = (cssAnimation);

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__(23);
} catch (err) {
  var index = __webpack_require__(23);
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(48), __esModule: true };

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);
module.exports = __webpack_require__(10).Object.assign;


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(13);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(50) });


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(47);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(33);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(35);
var toObject = __webpack_require__(41);
var IObject = __webpack_require__(59);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(24)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
var $Object = __webpack_require__(10).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(17), 'Object', { defineProperty: __webpack_require__(14).f });


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(18);

var ReactPropTypesSecret = __webpack_require__(26);
var checkPropTypes = __webpack_require__(46);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(26);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
      var baseEvents = EVENT_NAME_MAP[baseEventName];
      for (var styleName in baseEvents) {
        if (styleName in style) {
          endEvents.push(baseEvents[styleName]);
          break;
        }
      }
    }
  }
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },


  endEvents: endEvents,

  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (TransitionEvents);

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function toArray(children) {
  var ret = [];
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(22);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ })

},[189]);
//# sourceMappingURL=big-data.js.map