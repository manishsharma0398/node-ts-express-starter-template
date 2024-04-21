import { router, Request, Response } from 'apis/router';

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'user route' });
});

const user = router;

export default user;
