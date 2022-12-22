import rankingRepository from '../repositories/rankingRepository.js';

export async function getRankings(req, res) {
  try {
    const ranking = await rankingRepository.getRankingTen();
    res.send(ranking.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
