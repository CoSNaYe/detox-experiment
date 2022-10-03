import {Server, Model, Factory} from 'miragejs';
import {faker} from '@faker-js/faker';

export function makeServer({environment = 'development'} = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model,
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.findName();
        },
        avatarUrl(i) {
          let c = i % 2 ? 'men' : 'women';
          return `https://randomuser.me/api/portraits/${c}/${i}.jpg`;
        },
        title() {
          return faker.name.title();
        },
      }),
    },

    seeds(server) {
      server.createList('user', 25);
    },

    routes() {
      this.post('https://api-staging.wordup.com.tw/api/v1/auth/sign_in', schema => {
        return schema.users.all();
      });
    },
  });
  // console.log('server', server);

  return server;
}
