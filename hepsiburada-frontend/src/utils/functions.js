export const getSearchParam = searchText =>
  searchText ? `&name=${searchText}` : '';
export const getColorParam = color => (color ? `&color=${color.id}` : '');
export const getBrandParam = brand => (brand ? `&brand=${brand.id}` : '');
export const getSortingParam = sortingType =>
  sortingType ? `${getSortingParams(sortingType)}` : '';

const getSortingParams = sortingType => {
  switch (sortingType.id) {
    case 1:
      return '&orderBy=price&direction=ASC';
    case 2:
      return '&orderBy=price&direction=DESC';
    case 3:
      return '&orderBy=craeteDate&direction=ASC';
    case 4:
      return '&orderBy=craeteDate&direction=DESC';
    default:
      return;
  }
};
