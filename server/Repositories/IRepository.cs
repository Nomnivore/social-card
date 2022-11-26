namespace server.Repositories
{
    public interface IRepository<T> : IDisposable where T : class, new()
    {
        IQueryable<T> GetAll();

        Task<T> AddAsync(T item);
        Task<T> UpdateAsync(T item);
    }
}
