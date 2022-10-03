import {rest} from 'msw';

export const handlers = [
  // Handles a POST /login request
  rest.post('https://api-staging.wordup.com.tw/api/v1/auth/sign_in', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'test user name',
        email: 'ianat4@wordup.com.tw',
      }),
    );
  }),
];
