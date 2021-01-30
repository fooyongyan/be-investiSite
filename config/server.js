module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 21337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '33549a774ca4ce64cc5674f47a94befe'),
    },
  },
});
