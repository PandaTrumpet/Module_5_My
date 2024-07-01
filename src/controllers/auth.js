import { registerUser } from '../service/auth.js';
import { loginUser } from '../service/auth.js';
export const registerUserConntroller = async (req, res) => {
  const user = await registerUser(req.body);
  res.json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};
//
//
//
//
//
//
//
//
export const loginUserController = async (req, res) => {
  await loginUser(req.body);
};
