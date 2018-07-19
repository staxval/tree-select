import React from "react";
import PropTypes from "prop-types";
import { polyfill } from "react-lifecycles-compat";
import Tree from "rc-tree";

export const popupContextTypes = {
  onPopupKeyDown: PropTypes.func.isRequired,
  onTreeNodeSelect: PropTypes.func.isRequired,
  onTreeNodeCheck: PropTypes.func.isRequired
};

class BasePopup extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    upperSearchValue: PropTypes.string,
    valueList: PropTypes.array,
    valueEntities: PropTypes.object,
    keyEntities: PropTypes.object,
    treeIcon: PropTypes.bool,
    treeLine: PropTypes.bool,
    treeNodeFilterProp: PropTypes.string,
    treeCheckable: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
    treeCheckStrictly: PropTypes.bool,
    treeDefaultExpandAll: PropTypes.bool,
    treeDefaultExpandedKeys: PropTypes.array,
    expandedKeyList: PropTypes.array,
    loadData: PropTypes.func,
    multiple: PropTypes.bool,

    treeNodes: PropTypes.node,
    filteredTreeNodes: PropTypes.node,
    notFoundContent: PropTypes.string,

    ariaId: PropTypes.string,

    onExpandTreeNode: PropTypes.func,

    // HOC
    renderSearch: PropTypes.func,
    onTreeExpanded: PropTypes.func
  };

  static contextTypes = {
    rcTreeSelect: PropTypes.shape({
      ...popupContextTypes
    })
  };

  constructor(props) {
    super();

    const {
      treeDefaultExpandAll,
      treeDefaultExpandedKeys,
      keyEntities,
      expandedKeyList
    } = props;

    // TODO: make `expandedKeyList` control
    let defaultExpandedKeyList = treeDefaultExpandedKeys || expandedKeyList;
    if (treeDefaultExpandAll) {
      defaultExpandedKeyList = Object.keys(keyEntities);
    }

    this.state = {
      keyList: [],
      expandedKeyList: defaultExpandedKeyList
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { prevProps = {} } = prevState || {};
    const {
      valueList,
      valueEntities,
      keyEntities,
      filteredTreeNodes,
      expandedKeyList
    } = nextProps;

    const newState = {
      prevProps: nextProps
    };

    console.log('updating BasePopup state');

    // Check value update
    if (valueList !== prevProps.valueList) {
      newState.keyList = valueList
        .map(({ value }) => valueEntities[value])
        .filter(entity => entity)
        .map(({ key }) => key);
    }

    // Show all when tree is in filter mode
    if (
      filteredTreeNodes &&
      filteredTreeNodes.length &&
      filteredTreeNodes !== prevProps.filteredTreeNodes
    ) {
      console.log('expand all');
      newState.expandedKeyList = Object.keys(keyEntities);
    } else {
      console.log('upd expand list');
      newState.expandedKeyList = expandedKeyList;
    }

    return newState;
  }

  onTreeExpand = expandedKeyList => {
    const { onTreeExpanded, onExpandTreeNode } = this.props;
    this.setState({ expandedKeyList }, onTreeExpanded);

    if (onExpandTreeNode) {
      onExpandTreeNode(expandedKeyList);
    }
  };

  /**
   * This method pass to Tree component which is used for add filtered class
   * in TreeNode > li
   */
  filterTreeNode = treeNode => {
    const { upperSearchValue, treeNodeFilterProp } = this.props;

    const filterVal = treeNode.props[treeNodeFilterProp];
    if (typeof filterVal === "string") {
      return (
        upperSearchValue &&
        filterVal.toUpperCase().indexOf(upperSearchValue) !== -1
      );
    }

    return false;
  };

  renderNotFound = () => {
    const { prefixCls, notFoundContent } = this.props;

    return <span className={`${prefixCls}-not-found`}>{notFoundContent}</span>;
  };

  render() {
    const { keyList, expandedKeyList } = this.state;
    const {
      prefixCls,
      treeNodes,
      filteredTreeNodes,
      treeIcon,
      treeLine,
      treeCheckable,
      treeCheckStrictly,
      multiple,
      loadData,
      ariaId,
      renderSearch
    } = this.props;
    const {
      rcTreeSelect: { onPopupKeyDown, onTreeNodeSelect, onTreeNodeCheck }
    } = this.context;

    const treeProps = {};

    if (treeCheckable) {
      treeProps.checkedKeys = keyList;
    } else {
      treeProps.selectedKeys = keyList;
    }

    let $notFound;
    let $treeNodes;
    if (filteredTreeNodes) {
      if (filteredTreeNodes.length) {
        treeProps.checkStrictly = true;
        $treeNodes = filteredTreeNodes;
      } else {
        $notFound = this.renderNotFound();
      }
    } else if (!treeNodes.length) {
      $notFound = this.renderNotFound();
    } else {
      $treeNodes = treeNodes;
    }

    let $tree;
    if ($notFound) {
      $tree = $notFound;
    } else {
      $tree = (
        <Tree
          prefixCls={`${prefixCls}-tree`}
          showIcon={treeIcon}
          showLine={treeLine}
          selectable={!treeCheckable}
          checkable={treeCheckable}
          checkStrictly={treeCheckStrictly}
          multiple={multiple}
          loadData={loadData}
          expandedKeys={expandedKeyList}
          filterTreeNode={this.filterTreeNode}
          onSelect={onTreeNodeSelect}
          onCheck={onTreeNodeCheck}
          onExpand={this.onTreeExpand}
          {...treeProps}
        >
          {$treeNodes}
        </Tree>
      );
    }

    return (
      <div role="listbox" id={ariaId} onKeyDown={onPopupKeyDown} tabIndex={-1}>
        {renderSearch ? renderSearch() : null}
        {$tree}
      </div>
    );
  }
}

polyfill(BasePopup);

export default BasePopup;
