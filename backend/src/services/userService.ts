import userRepository from '../repositories/userRepository';
import { User } from '../models/userModel';

class UserService {
  async getAllUsers(): Promise<User[]> {
    return userRepository.getAllUsers();
  }

  async getUserById(id: number): Promise<User | null> {
    return userRepository.getUserById(id);
  }

  async createUser(userData: User): Promise<User> {
    return userRepository.createUser(userData);
  }

  async updateUser(id: number, userData: User): Promise<User | null> {
    return userRepository.updateUser(id, userData);
  }

  async deleteUser(id: number): Promise<boolean> {
    return userRepository.deleteUser(id);
  }
}

export default new UserService();
