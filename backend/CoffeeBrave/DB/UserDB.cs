using CoffeeBrave.Models;
using Npgsql;

namespace CoffeeBrave.DB {
    public class UserDB : IUserDB {

        public string ConnectionString { get; set; }

        public UserDB(string connectionString) {
            ConnectionString = connectionString;
        }

        public void SignUp(User user) {

            using NpgsqlConnection connection = new NpgsqlConnection(ConnectionString);
            connection.Open();

            using NpgsqlCommand cmd = new NpgsqlCommand("INSERT INTO USUARIO (nome, cpf, email, senha, telefone) VALUES (@nome, @cpf, @email, @senha, @telefone)", connection);
            cmd.Parameters.AddWithValue("nome", user.Name);
            cmd.Parameters.AddWithValue("cpf", user.CPF);
            cmd.Parameters.AddWithValue("email", user.Email);
            cmd.Parameters.AddWithValue("senha", user.Password);
            cmd.Parameters.AddWithValue("telefone", user.Phone);

            int rowsAffected = cmd.ExecuteNonQuery();
        }

        public User Login(User user) {

            using NpgsqlConnection connection = new NpgsqlConnection(ConnectionString);
            connection.Open();

            using NpgsqlCommand cmd = new NpgsqlCommand("SELECT * FROM usuario", connection);

            using NpgsqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read() ) {
                if (reader["email"].ToString() == user.Email && reader["senha"].ToString() == user.Password)
                {
                    user.Id = (int)reader["id"];
                    user.Name = reader["nome"].ToString();
                    user.CPF = reader["cpf"].ToString();
                    user.Phone = reader["telefone"].ToString();
                    user.Address = reader["endereco"].ToString();
                    user.Type = (UserType)Enum.Parse(typeof(UserType), reader["tipo_usuario"].ToString(), ignoreCase: true);
                    return user;
                }
            }
            return null;
        }
    }
}
