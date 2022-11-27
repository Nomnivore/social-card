using server.DbContext;

namespace server.Repositories
{
    public class Repository<T> : IRepository<T> where T : class, new()
    {
        protected readonly ApplicationDbContext ApplicationDbContext;

        public Repository(ApplicationDbContext applicationDbContext)
        {
            ApplicationDbContext = applicationDbContext;
        }

        public IQueryable<T> GetAll()
        {
            try
            {
                return ApplicationDbContext.Set<T>();
            }
            catch (Exception ex)
            {
                throw new Exception($"Couldn't retrieve items: {ex.Message}");
            }
        }

        public async Task<T> AddAsync(T item)
        {
            if (item == null)
            {
                throw new ArgumentNullException($"{nameof(AddAsync)} item must not be null");
            }

            try
            {
                await ApplicationDbContext.AddAsync(item);
                await ApplicationDbContext.SaveChangesAsync();

                return item;
            }
            catch (Exception ex)
            {
                throw new Exception($"{nameof(item)} could not be saved: {ex.Message}");
            }
        }

        public async Task<T> UpdateAsync(T item)
        {
            if (item == null)
            {
                throw new ArgumentNullException($"{nameof(UpdateAsync)} item must not be null");
            }

            try
            {
                ApplicationDbContext.Update(item);
                await ApplicationDbContext.SaveChangesAsync();

                return item;
            }
            catch (Exception ex)
            {
                throw new Exception($"{nameof(item)} could not be updated: {ex.Message}");
            }
        }

        public async Task<T> RemoveAsync(T item)
        {
            if (item == null)
            {
                throw new ArgumentNullException($"{nameof(RemoveAsync)} item must not be null");
            }

            try
            {
                ApplicationDbContext.Remove(item);
                await ApplicationDbContext.SaveChangesAsync();

                return item;
            }
            catch (Exception ex)
            {
                throw new Exception($"{nameof(item)} could not be deleted: {ex.Message}");
            }
            
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    ApplicationDbContext.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
