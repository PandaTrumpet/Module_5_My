import createHttpError from 'http-errors';
import { UsersCollection } from '../db/models/user.js';
import bcrypt from 'bcrypt';
export const registerUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });
  if (user) throw createHttpError(409, 'Email in use');
  const encryptedPassword = await bcrypt.hash(payload.password, 10);
  return await UsersCollection.create({
    ...payload,
    password: encryptedPassword,
  });
};
//
//
//
//
//
export const loginUser = async (payload) => {
  const user = UsersCollection.findOne({ email: payload.email });
  if (!user) {
    throw createHttpError(404, 'User nit found');
  }
  const isEqual = await bcrypt.compare(payload.password, user.password);
};
