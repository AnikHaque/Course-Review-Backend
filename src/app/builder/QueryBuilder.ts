import { Query } from 'mongoose';

class QueryBuilder<T> {
  public newQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(newQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.newQuery = newQuery;
    this.query = query;
  }

  filter() {
    const {
      minPrice,
      maxPrice,
      tags,
      startDate,
      endDate,
      language,
      provider,
      durationInWeeks,
      level,
    } = this.query;

    const filterData: Record<string, unknown> = {};

    if (minPrice)
      filterData['price'] = { $gte: parseFloat(minPrice as string) };
    if (maxPrice)
      filterData['price'] = {
        $lte: parseFloat(maxPrice as string),
      };
    if (minPrice && maxPrice)
      filterData['price'] = {
        $gte: parseFloat(minPrice as string),
        $lte: parseFloat(maxPrice as string),
      };

    if (tags) filterData['tags.name'] = { $in: tags as string[] };

    if (startDate) filterData['startDate'] = { $gte: startDate as string };
    if (endDate) filterData['endDate'] = { $lte: endDate as string };
    if (startDate && endDate) {
      filterData['startDate'] = { $gte: startDate as string };
      filterData['endDate'] = { $lte: endDate as string };
    }
    if (language) filterData['language'] = language as string;
    if (provider) filterData['provider'] = provider as string;
    if (durationInWeeks)
      filterData['durationInWeeks'] = parseInt(durationInWeeks as string);

    if (level) {
      const levelArray = (level as string).split(',');
      filterData['details.level'] = {
        $in: levelArray.map(level => new RegExp(level, 'i')),
      };
    }

    const excludeFields = ['sort', 'limit', 'skip', 'page'];
    excludeFields.forEach(elm => delete filterData[elm]);
    this.newQuery = this.newQuery.find(filterData);
    return this;
  }

  sort() {
    const validFields = [
      'title',
      'price',
      'startDate',
      'endDate',
      'language',
      'durationInWeeks',
    ];
    const sortBy = (this.query?.sortBy as string) || 'title';
    const sortOrder = this.query?.sortOrder as string;
    if (!validFields.includes(sortBy)) {
      throw new Error('Invalid field for sorting');
    }
    const sortString = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
    this.newQuery = this.newQuery.sort(sortString);
    return this;
  }

  paginate() {
    const page = Number(this.query?.page) || 1;
    const limit = Number(this.query?.limit) || 10;
    const skip = (page - 1) * limit;

    this.newQuery = this.newQuery.skip(skip).limit(limit);

    return this;
  }
}

export default QueryBuilder;
