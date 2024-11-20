namespace CoffeeBrave.Models
{
    public class User {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CPF { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public UserType Type { get; set; }
    }

    public enum UserType {
    Admin, Cliente
    }
}
