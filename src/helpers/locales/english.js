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
  },
  masterData: {
    countries: {
      list: {
        gtm: 'Guatemala',
        slv: 'El Salvador',
        hnd: 'Honduras',
        nic: 'Nicaragua',
        cri: 'Costa Rica',
        pan: 'Panama',
        usa: 'United States'
      }
    },
    currencies: {
      list: {
        gtq: 'Guatemalan quetzal',
        svc: 'Salvadoran Columbus',
        hnl: 'Honduran lempira',
        nio: 'Nicaraguan córdoba',
        crc: 'Costa Rican colón',
        pab: 'Panamanian balboa',
        usd: 'United States dollar'
      }
    }
  }
}
