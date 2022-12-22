import sessionRepository from '../repositories/sessionRepository.js';
import userRepository from '../repositories/userRepository.js';

export async function postSignUp(req, res) {
  const { name, email, password } = res.locals.user;

  try {
    await userRepository.registerUser(name, email, password);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function postSignIn(req, res) {
  const { token } = res.locals;
  const { user_id, name, email } = res.locals.user;

  try {
    res.send({ token, user_id, name, email });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function deleteSignOut(req, res) {
  const { token } = res.locals;
  try {
    await sessionRepository.closeSession(token);
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
