export abstract class IGenericRepository<T> {
  abstract create(data: T): Promise<T>;

  abstract findAll(): Promise<T[]>;

  abstract findById(id: string): Promise<T>;

  abstract update(id: string, data: T): Promise<T>;

  abstract delete(id: string): Promise<T>;

  abstract forceDelete(id: string): Promise<void>;
}
