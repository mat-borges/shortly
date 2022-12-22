import userRepository from '../repositories/userRepository.js';

export async function getUser(req, res) {
  const { user_id } = res.locals.user;

  try {
    const user = await userRepository.getUserUrls(user_id);
    res.send(user.rows[0]);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
