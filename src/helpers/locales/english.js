module.exports = {
  account: {
    create: {
      header: 'Create an account',
      company: {
        header: 'Fitness center data',
        form: {
          name: 'Name',
          tenant: 'Domain',
          country: 'Country',
          currency: 'Currency',
          tax: 'Tax',
          taxPercentage: 'Tax percentage',
          timeZone: 'Time zone',
          locale: 'Language'
        }
      },
      user: {
        header: `Owner's basic information`,
        form: {
          name: 'Name',
          email: 'Email',
          password: 'Password'
        }
      }
    }
  }
}
