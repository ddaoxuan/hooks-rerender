import { useBreadcrumb } from 'react-instantsearch-hooks-web';

export const BreadcrumbWidget = () => {
  const { items } = useBreadcrumb({
    attributes: [
      'hierarchicalCategories.lvl0',
      'hierarchicalCategories.lvl1',
      'hierarchicalCategories.lvl2',
    ],
  });
  return (
    <div>
      {items.map((item, key) => {
        return (
          <a key={key} href={item.value}>
            {item.label}
          </a>
        );
      })}
    </div>
  );
};
