const addChildrenOnThirdBranch = ([thirdPath]) => [{
  name: thirdPath,
  count: 1,
}];

const updateChildrenOnThirdBranch = ([thirdPath], children) => {
  let isNew = true;

  const newChildren = children.map((item) => {
    if (item.name === thirdPath) {
      isNew = false;
      item.count += 1;
    }

    return item;
  });

  if (isNew) {
    newChildren.push({
      name: thirdPath,
      count: 1,
    });
  }

  return newChildren;
};

const getChildrenTreeRoot = ([secondPath, ...otherPaths], children) => {
  let isNew = true;

  const newChilren = children.map(
    (item) => {
      if (item.name !== secondPath) {
        return item;
      }

      isNew = false;

      return ({
        name: secondPath,
        children: updateChildrenOnThirdBranch(otherPaths, item.children),
      });
    },
  );

  if (isNew) {
    newChilren.push({
      name: secondPath,
      children: addChildrenOnThirdBranch(otherPaths),
    });
  }

  return newChilren;
};

export const getScructureFromTreeMap = (treeMap) => treeMap.reduce((accumulator, treeItem) => {
  const [firstPath, ...otherPaths] = treeItem.Path.trim().slice(1).split('/');

  if (!accumulator.root) {
    accumulator.root = {
      name: firstPath,
      children: [],
    };
  }

  accumulator.root.children = getChildrenTreeRoot(otherPaths, accumulator.root.children);

  return accumulator;
}, {});
