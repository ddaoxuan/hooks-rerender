import { useBreadcrumb } from 'react-instantsearch-hooks-web';

export const Breadcrumbs = () => {
  const { items } = useBreadcrumb({
    attributes: [
      'hierarchicalCategories.lvl0',
      'hierarchicalCategories.lvl1',
      'hierarchicalCategories.lvl2',
    ],
  });
  console.log(items, 'items in breadcrumbs');
  return (
    <div>
      <h3>Breadcrumbs</h3>
      {items.map((item, key) => {
        return (
          <a key={key} href={item.value}>
            {item.label}
            <br />
          </a>
        );
      })}
    </div>
  );
};
