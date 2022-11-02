import { useHierarchicalMenu } from 'react-instantsearch-hooks-web';

export const Pills = () => {
  const { items } = useHierarchicalMenu({
    attributes: [
      'hierarchicalCategories.lvl0',
      'hierarchicalCategories.lvl1',
      'hierarchicalCategories.lvl2',
    ],
  });
  console.log(items, 'items in pills');
  return (
    <div>
      {items.map((item, index) => {
        return (
          <a href={item.value} key={index}>
            {item.label}
          </a>
        );
      })}
    </div>
  );
};
