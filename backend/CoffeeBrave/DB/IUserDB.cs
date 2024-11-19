using CoffeeBrave.Models;

namespace CoffeeBrave.DB {
    public interface IUserDB {
        string ConnectionString { get; set; }

        void SignUp(User user);

        User Login(User user);
    }
}