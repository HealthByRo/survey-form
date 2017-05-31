import React from 'react';
import _isUndefined from 'lodash/isUndefined';
import _each from 'lodash/each';
import _isArray from 'lodash/isArray';

export function getDataPayload(data) {
  return {
    meta: data.meta || {},
    data: addKeysToItems(data),
  };
}

export function addKeysToItems(items) {
  return items.map((item, index) => {
    const {
      key,
      id,
    } = item;
    const result = item;

    if (!key) {
      result.key = _isUndefined(id) ? index : id;
    }

    return result;
  });
}

export function processColumns(columns, options) {
  return columns.map((column) => processColumn(column, options));
}

export function processColumn(column, options) {
  const {
    FilterDropdownComponent,
    dataIndex,
  } = column;
  let processedColumn;

  if (!_isUndefined(options.fixedFilters[dataIndex])) {
    processedColumn = diableFilteringAndSorting(column);
  } else if (FilterDropdownComponent) {
    processedColumn = initFilterDropdown(column, options);
  }

  return processedColumn;
}

export function initFilterDropdown(column, options) {
  const processedColumn = { ...column };
  const {
    FilterDropdownComponent,
    dataIndex,
  } = column;
  const filterChoices = column.filters;
  const {
    onSearch,
    filters,
  } = options;

  processedColumn.filteredValue = filters[dataIndex];
  processedColumn.filterDropdown = (
    <div>
      <FilterDropdownComponent
        filterKey={dataIndex}
        options={filterChoices}
        onSearch={onSearch}
      />
    </div>
  );

  return processedColumn;
}

function diableFilteringAndSorting(column) {
  const processedColumn = { ...column };

  processedColumn.sorter = false;
  delete processedColumn.filters;
  delete processedColumn.filteredValue;
  delete processedColumn.filterDropdown;

  return processedColumn;
}

export function mergeParamsWithFilters(params, filters) {
  const result = { ...params };

  if (filters) {
    _each(filters, (filterValue, filterKey) => {
      let value = filterValue;

      if (_isArray(filterValue)) {
        value = filterValue.join(',');
      }

      result[filterKey] = value;
    });
  }

  return result;
}

export function mergeParamsWithFixedFilters(params, fixedFilters) {
  const result = { ...params };

  if (fixedFilters) {
    _each(fixedFilters, (filterValue, filterKey) => {
      if (!_isUndefined(filterValue)) {
        result[filterKey] = filterValue;
      }
    });
  }

  return result;
}

export function mergeParamsWithSorter(params, sorter) {
  const result = { ...params };

  if (sorter) {
    result.ordering = sorter.order === 'descend' ? `-${sorter.field}` : sorter.field;
  }

  return result;
}

export function mergeParamsWithPagination(params, pagination) {
  const result = { ...params };

  if (pagination) {
    result.page = pagination.current;
  }

  return result;
}
