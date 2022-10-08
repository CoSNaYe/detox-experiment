import {rest} from 'msw';

export const handlers = [
  rest.post(
    'https://api-staging.wordup.com.tw/api/v1/auth/sign_in',
    // 'http://localhost:3000/api/v1/auth/sign_in',
    (req, res, ctx) => {
      console.log('=========ctx', ctx);
      return res(
        ctx.status(200),
        ctx.json({
          email: 'test@test.com.tw',
          name: 'test user name',
        }),
      );
    },
  ),
];
